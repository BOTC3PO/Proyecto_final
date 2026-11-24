import type Redis from "ioredis";

/**
 * Contadores con vencimiento y conjuntos con vencimiento, para limitar intentos (login, segundo factor, etc.).
 * Hay una versión en memoria (una instancia), una en Redis (compartida entre todas las instancias de la API) y un
 * envoltorio que usa Redis y, si falla, cae a la memoria para no frenar el ingreso mientras Redis no responde.
 */
export interface AlmacenContadores {
  /** Suma 1 al contador; si no existía, lo crea con vencimiento `ttlMs` (el vencimiento NO se extiende después). */
  incr(clave: string, ttlMs: number): Promise<number>;
  /** Resta 1 sin bajar de 0 (para devolver un intento que terminó bien). */
  decr(clave: string): Promise<void>;
  leer(clave: string): Promise<number>;
  agregar(clave: string, miembro: string, ttlMs: number): Promise<void>;
  quitar(clave: string, miembro: string): Promise<void>;
  tamano(clave: string): Promise<number>;
  /** Milisegundos que le quedan a la clave (0 si no existe). */
  ttlMs(clave: string): Promise<number>;
}

type Entrada = { n: number; miembros: Set<string>; vence: number };

export class AlmacenMemoria implements AlmacenContadores {
  private readonly datos = new Map<string, Entrada>();
  constructor(
    private readonly reloj: () => number = Date.now,
    private readonly maxClaves = 100_000
  ) {}

  private vivo(clave: string): Entrada | undefined {
    const e = this.datos.get(clave);
    if (!e) return undefined;
    if (e.vence <= this.reloj()) {
      this.datos.delete(clave);
      return undefined;
    }
    return e;
  }

  private crear(clave: string, ttlMs: number): Entrada {
    if (this.datos.size >= this.maxClaves) this.purgar();
    const e: Entrada = { n: 0, miembros: new Set(), vence: this.reloj() + ttlMs };
    this.datos.set(clave, e);
    return e;
  }

  /** Quita lo vencido y, si aún hay demasiado, lo más viejo: la memoria no crece sin tope ante un ataque con IPs distintas. */
  private purgar() {
    const ahora = this.reloj();
    for (const [k, e] of this.datos) if (e.vence <= ahora) this.datos.delete(k);
    if (this.datos.size >= this.maxClaves) {
      let borrar = Math.ceil(this.maxClaves / 10);
      for (const k of this.datos.keys()) {
        if (borrar-- <= 0) break;
        this.datos.delete(k);
      }
    }
  }

  async incr(clave: string, ttlMs: number) {
    const e = this.vivo(clave) ?? this.crear(clave, ttlMs);
    e.n += 1;
    return e.n;
  }
  async decr(clave: string) {
    const e = this.vivo(clave);
    if (e && e.n > 0) e.n -= 1;
  }
  async leer(clave: string) {
    return this.vivo(clave)?.n ?? 0;
  }
  async agregar(clave: string, miembro: string, ttlMs: number) {
    (this.vivo(clave) ?? this.crear(clave, ttlMs)).miembros.add(miembro);
  }
  async quitar(clave: string, miembro: string) {
    this.vivo(clave)?.miembros.delete(miembro);
  }
  async tamano(clave: string) {
    return this.vivo(clave)?.miembros.size ?? 0;
  }
  async ttlMs(clave: string) {
    const e = this.vivo(clave);
    return e ? Math.max(0, e.vence - this.reloj()) : 0;
  }
}

type ClienteRedis = Pick<Redis, "multi" | "eval" | "get" | "scard" | "pttl" | "srem">;

// Resta 1 sin bajar de 0, de forma atómica.
const SCRIPT_DECR = "local v = redis.call('GET', KEYS[1]); if v and tonumber(v) > 0 then return redis.call('DECR', KEYS[1]) end return 0";

export class AlmacenRedis implements AlmacenContadores {
  constructor(private readonly redis: ClienteRedis) {}

  async incr(clave: string, ttlMs: number) {
    // PEXPIRE ... NX (Redis 7+): fija el vencimiento solo la primera vez, así la ventana no se corre con cada intento.
    const r = await this.redis.multi().incr(clave).pexpire(clave, ttlMs, "NX").exec();
    const valor = r?.[0]?.[1];
    if (valor === undefined || valor === null) throw new Error("Redis no devolvió el contador");
    return Number(valor);
  }
  async decr(clave: string) {
    await this.redis.eval(SCRIPT_DECR, 1, clave);
  }
  async leer(clave: string) {
    return Number((await this.redis.get(clave)) ?? 0);
  }
  async agregar(clave: string, miembro: string, ttlMs: number) {
    await this.redis.multi().sadd(clave, miembro).pexpire(clave, ttlMs, "NX").exec();
  }
  async quitar(clave: string, miembro: string) {
    await this.redis.srem(clave, miembro);
  }
  async tamano(clave: string) {
    return Number(await this.redis.scard(clave));
  }
  async ttlMs(clave: string) {
    return Math.max(0, Number(await this.redis.pttl(clave)));
  }
}

/**
 * Usa `principal` (Redis) y, si una operación falla o tarda de más, cae a `respaldo` (memoria) y deja de intentar con
 * Redis durante `enfriamientoMs` (corte de circuito): así una caída de Redis no suma latencia a cada intento de login.
 * Mientras Redis no responde los contadores quedan por instancia (como sin Redis); al volver se retoma Redis.
 */
export class AlmacenConRespaldo implements AlmacenContadores {
  private hastaReintento = 0;
  constructor(
    private readonly principal: AlmacenContadores,
    private readonly respaldo: AlmacenContadores,
    private readonly opciones: { timeoutMs?: number; enfriamientoMs?: number; reloj?: () => number; alFallar?: (e: unknown) => void } = {}
  ) {}

  private async probar<T>(f: (a: AlmacenContadores) => Promise<T>): Promise<T> {
    const reloj = this.opciones.reloj ?? Date.now;
    if (reloj() >= this.hastaReintento) {
      try {
        const espera = this.opciones.timeoutMs ?? 300;
        let timer: NodeJS.Timeout | undefined;
        const limite = new Promise<never>((_, rej) => { timer = setTimeout(() => rej(new Error("Redis tardó de más")), espera); });
        try {
          return await Promise.race([f(this.principal), limite]);
        } finally {
          if (timer) clearTimeout(timer);
        }
      } catch (e) {
        this.hastaReintento = reloj() + (this.opciones.enfriamientoMs ?? 5_000);
        this.opciones.alFallar?.(e);
      }
    }
    return f(this.respaldo);
  }

  incr(clave: string, ttlMs: number) { return this.probar((a) => a.incr(clave, ttlMs)); }
  decr(clave: string) { return this.probar((a) => a.decr(clave)); }
  leer(clave: string) { return this.probar((a) => a.leer(clave)); }
  agregar(clave: string, miembro: string, ttlMs: number) { return this.probar((a) => a.agregar(clave, miembro, ttlMs)); }
  quitar(clave: string, miembro: string) { return this.probar((a) => a.quitar(clave, miembro)); }
  tamano(clave: string) { return this.probar((a) => a.tamano(clave)); }
  ttlMs(clave: string) { return this.probar((a) => a.ttlMs(clave)); }
}
