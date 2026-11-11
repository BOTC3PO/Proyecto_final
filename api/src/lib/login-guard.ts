import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { AlmacenConRespaldo, AlmacenMemoria, AlmacenRedis, type AlmacenContadores } from "./almacen-contadores";

/**
 * Límite de intentos de ingreso POR CUENTA Y POR IP, pensado para que una escuela detrás de un NAT (muchos alumnos con la
 * misma IP pública) no se bloquee a sí misma, y que aun así frene los ataques:
 *
 *  - Se cuentan los INTENTOS NETOS: cada intento suma al empezar y se devuelve si la contraseña era correcta. Treinta
 *    alumnos que entran bien desde la misma IP no consumen nada; lo que consume son los fallos.
 *  - POR CUENTA: pocos fallos seguidos (cuentaMax) bloquean esa cuenta para dispositivos desconocidos. Un navegador que ya
 *    inició sesión con esa cuenta lleva una cookie firmada (`vb_dev`) y tiene un cupo mayor (cuentaMaxConocido): así un
 *    atacante no puede dejar afuera a la persona dueña bloqueándole la cuenta. La cookie solo AFLOJA el límite: sin ella
 *    (un atacante que no conserva cookies) rige el límite normal.
 *  - POR IP: tope de intentos netos (ipMax) y, sobre todo, detección de «una fuente prueba muchas cuentas» (password
 *    spraying / relleno de credenciales): cuando una IP acumula `sprayCuentas` cuentas DISTINTAS con fallos y esas cuentas
 *    son más que las cuentas distintas con aciertos, se la frena. En una escuela hay muchos más aciertos que fallos, así
 *    que no salta; un atacante tiene cero o uno. Otras señales: muchos User-Agent distintos entre los fallos (rotación de
 *    clientes) bajan el umbral a la mitad.
 *  - RED COMPARTIDA: una IP con `redCompartidaAciertos` cuentas distintas que entraron bien se trata como red de escuela y
 *    sube sus topes. Las IPs listadas en `ipsConfiables` (escuelas conocidas) tienen topes 5 veces mayores.
 *  - MODO DEFENSA: si los fallos de toda la plataforma superan `globalFallosMin` por minuto (ataque distribuido), todos los
 *    topes bajan a la mitad hasta que se calme.
 */
export type ConfigGuarda = {
  habilitada: boolean;
  ventanaMs: number;
  cuentaMax: number;
  cuentaMaxConocido: number;
  ipMax: number;
  sprayCuentas: number;
  uaSospechosos: number;
  redCompartidaAciertos: number;
  ipsConfiables: string[];
  globalFallosMin: number;
};

export const CONFIG_GUARDA_POR_DEFECTO: ConfigGuarda = {
  habilitada: true,
  ventanaMs: 15 * 60 * 1000,
  cuentaMax: 5,
  cuentaMaxConocido: 15,
  ipMax: 120,
  sprayCuentas: 10,
  uaSospechosos: 5,
  redCompartidaAciertos: 8,
  ipsConfiables: [],
  globalFallosMin: 600
};

export type MotivoBloqueo = "ip-volumen" | "ip-varias-cuentas" | "cuenta";
export type Decision = { permitido: true } | { permitido: false; reintentarSeg: number; motivo: MotivoBloqueo };
export type ContextoLogin = { ip: string; ua: string };

// ── utilidades ───────────────────────────────────────────────────────────────────────────────────────────────────────

/** IPv4 tal cual; IPv6 por /64 (un atacante dispone de bloques enteros); `::ffff:a.b.c.d` como IPv4. */
export const claveIp = (ip: string | undefined): string => {
  const s = (ip ?? "desconocida").trim().toLowerCase();
  const mapeada = /^::ffff:(\d+\.\d+\.\d+\.\d+)$/.exec(s);
  if (mapeada) return mapeada[1];
  if (!s.includes(":")) return s;
  const [izq, der = ""] = s.split("::");
  const grupos = [...(izq ? izq.split(":") : []), ...Array(Math.max(0, 8 - (izq ? izq.split(":").length : 0) - (der ? der.split(":").length : 0))).fill("0"), ...(der ? der.split(":") : [])];
  return `${grupos.slice(0, 4).map((g) => g.replace(/^0+(?=.)/, "")).join(":")}::/64`;
};

const aEntero = (ip: string) => ip.split(".").reduce((a, o) => (a << 8) + Number(o), 0) >>> 0;
/** ¿La IP está en la lista (IPv4 exacta o CIDR, IPv6 exacta)? */
export const ipEnLista = (ip: string, lista: string[]): boolean => {
  const clave = claveIp(ip);
  for (const e of lista) {
    const item = e.trim();
    if (!item) continue;
    if (!item.includes("/")) { if (claveIp(item) === clave) return true; continue; }
    const [red, bitsTxt] = item.split("/");
    const bits = Number(bitsTxt);
    if (!/^\d+\.\d+\.\d+\.\d+$/.test(red) || !/^\d+\.\d+\.\d+\.\d+$/.test(clave) || !(bits >= 0 && bits <= 32)) continue;
    const mascara = bits === 0 ? 0 : (0xffffffff << (32 - bits)) >>> 0;
    if ((aEntero(clave) & mascara) === (aEntero(red) & mascara)) return true;
  }
  return false;
};

export const huella = (texto: string, secreto: string) => createHmac("sha256", secreto).update(`lg|${texto}`).digest("base64url").slice(0, 20);
const huellaUa = (ua: string) => createHash("sha256").update(ua || "sin-ua").digest("base64url").slice(0, 10);

// ── cookie de dispositivo conocido ───────────────────────────────────────────────────────────────────────────────────

export const COOKIE_DISPOSITIVO = "vb_dev";
const MAX_CUENTAS_EN_COOKIE = 6;
const VIDA_COOKIE_SEG = 180 * 24 * 3600;

const firma = (secreto: string, h: string, t: string) => createHmac("sha256", secreto).update(`dev|${h}|${t}`).digest("base64url").slice(0, 22);
const igual = (a: string, b: string) => a.length === b.length && timingSafeEqual(Buffer.from(a), Buffer.from(b));

export const leerCookie = (cabecera: string | undefined, nombre: string): string | undefined => {
  if (!cabecera) return undefined;
  for (const par of cabecera.split(";")) {
    const i = par.indexOf("=");
    if (i > 0 && par.slice(0, i).trim() === nombre) return par.slice(i + 1).trim();
  }
  return undefined;
};

const entradas = (valor: string | undefined) => (valor ?? "").split("!").map((e) => e.split(".")).filter((p) => p.length === 3);

/** ¿Este navegador ya inició sesión con esa cuenta (cookie firmada y no vencida)? */
export const dispositivoConocido = (cookieHeader: string | undefined, cuenta: string, secreto: string, ahoraMs = Date.now()): boolean => {
  const h = huella(`cuenta|${cuenta}`, secreto).slice(0, 12);
  for (const [hh, t36, sig] of entradas(leerCookie(cookieHeader, COOKIE_DISPOSITIVO))) {
    if (hh !== h) continue;
    const t = parseInt(t36, 36);
    if (!Number.isFinite(t) || ahoraMs / 1000 - t > VIDA_COOKIE_SEG || t > ahoraMs / 1000 + 60) continue;
    if (igual(sig, firma(secreto, hh, t36))) return true;
  }
  return false;
};

/** Valor de `Set-Cookie` que recuerda a este navegador para esa cuenta (conserva las otras cuentas de la cookie, hasta 6). */
export const cookieDispositivo = (cookieHeader: string | undefined, cuenta: string, secreto: string, opciones: { seguro: boolean; ahoraMs?: number }): string => {
  const ahora = Math.floor((opciones.ahoraMs ?? Date.now()) / 1000);
  const h = huella(`cuenta|${cuenta}`, secreto).slice(0, 12);
  const t36 = ahora.toString(36);
  const previas = entradas(leerCookie(cookieHeader, COOKIE_DISPOSITIVO))
    .filter(([hh, tt, sig]) => hh !== h && igual(sig, firma(secreto, hh, tt)))
    .map((p) => p.join("."));
  const valor = [`${h}.${t36}.${firma(secreto, h, t36)}`, ...previas].slice(0, MAX_CUENTAS_EN_COOKIE).join("!");
  return `${COOKIE_DISPOSITIVO}=${valor}; Max-Age=${VIDA_COOKIE_SEG}; Path=/api/auth; HttpOnly; SameSite=Lax${opciones.seguro ? "; Secure" : ""}`;
};

// ── guardián ─────────────────────────────────────────────────────────────────────────────────────────────────────────

const seg = (ms: number) => Math.max(1, Math.ceil(ms / 1000));

export class GuardaLogin {
  private defensaHasta = 0;
  private defensaConsultadaEn = 0;

  constructor(
    private readonly almacen: AlmacenContadores,
    private readonly cfg: ConfigGuarda,
    private readonly secreto: string,
    private readonly reloj: () => number = Date.now
  ) {}

  private async enDefensa(): Promise<boolean> {
    const ahora = this.reloj();
    if (ahora - this.defensaConsultadaEn < 5_000) return ahora < this.defensaHasta;
    this.defensaConsultadaEn = ahora;
    const minuto = Math.floor(ahora / 60_000);
    const total = (await this.almacen.leer(`lg:g:${minuto}`)) + (await this.almacen.leer(`lg:g:${minuto - 1}`));
    if (total >= this.cfg.globalFallosMin) this.defensaHasta = ahora + 60_000;
    return ahora < this.defensaHasta;
  }

  /**
   * FASE 1, antes de tocar la base de datos ni calcular nada: topes por IP. Cuenta el intento (se devuelve si sale bien).
   * Una IP ya bloqueada se rechaza sin sumar nada a ninguna cuenta (así quien ataca desde una IP bloqueada no puede
   * agotar el cupo de la cuenta de otra persona).
   */
  async autorizarIp(ctx: ContextoLogin): Promise<Decision> {
    if (!this.cfg.habilitada) return { permitido: true };
    const ip = claveIp(ctx.ip);
    const f = (await this.enDefensa()) ? 0.5 : 1;
    const confiable = ipEnLista(ctx.ip, this.cfg.ipsConfiables) ? 5 : 1;
    const [aciertos, cuentasFallidas, agentes] = await Promise.all([
      this.almacen.tamano(`lg:i:${ip}:ok`),
      this.almacen.tamano(`lg:i:${ip}:fa`),
      this.almacen.tamano(`lg:i:${ip}:ua`)
    ]);
    const compartida = aciertos >= this.cfg.redCompartidaAciertos ? 3 : 1;
    const umbralSpray = Math.max(2, Math.floor((agentes >= this.cfg.uaSospechosos ? this.cfg.sprayCuentas / 2 : this.cfg.sprayCuentas) * confiable * f));
    if (cuentasFallidas >= umbralSpray && cuentasFallidas > aciertos) {
      return { permitido: false, motivo: "ip-varias-cuentas", reintentarSeg: seg(await this.almacen.ttlMs(`lg:i:${ip}:fa`)) };
    }
    const nIp = await this.almacen.incr(`lg:i:${ip}:n`, this.cfg.ventanaMs);
    if (nIp > Math.max(2, Math.floor(this.cfg.ipMax * confiable * compartida * f))) {
      return { permitido: false, motivo: "ip-volumen", reintentarSeg: seg(await this.almacen.ttlMs(`lg:i:${ip}:n`)) };
    }
    return { permitido: true };
  }

  private claveCuenta(cuenta: string, conocido: boolean) {
    return `lg:a:${huella(`cuenta|${cuenta}`, this.secreto)}:${conocido ? "d" : "u"}`;
  }

  /**
   * FASE 2, ya identificada la cuenta (por su id, así entrar con el correo o con el usuario cuenta contra el mismo cupo):
   * pocos fallos seguidos bloquean la cuenta; un dispositivo conocido tiene un cupo mayor.
   */
  async autorizarCuenta(cuenta: string, conocido: boolean): Promise<Decision> {
    if (!this.cfg.habilitada) return { permitido: true };
    const f = (await this.enDefensa()) ? 0.5 : 1;
    const clave = this.claveCuenta(cuenta, conocido);
    const n = await this.almacen.incr(clave, this.cfg.ventanaMs);
    const tope = Math.max(1, Math.floor((conocido ? this.cfg.cuentaMaxConocido : this.cfg.cuentaMax) * f));
    if (n > tope) return { permitido: false, motivo: "cuenta", reintentarSeg: seg(await this.almacen.ttlMs(clave)) };
    return { permitido: true };
  }

  /** La contraseña NO era correcta: la IP queda con esa cuenta (y ese User-Agent) como «cuenta con fallos». */
  async registrarFallo(ctx: ContextoLogin, cuenta: string): Promise<void> {
    if (!this.cfg.habilitada) return;
    const ip = claveIp(ctx.ip);
    await Promise.all([
      this.almacen.agregar(`lg:i:${ip}:fa`, huella(`cuenta|${cuenta}`, this.secreto), this.cfg.ventanaMs),
      this.almacen.agregar(`lg:i:${ip}:ua`, huellaUa(ctx.ua), this.cfg.ventanaMs),
      this.almacen.incr(`lg:g:${Math.floor(this.reloj() / 60_000)}`, 3 * 60_000)
    ]);
  }

  /** La contraseña era correcta: se devuelve el intento (no cuenta contra la cuenta ni la IP) y la IP suma un acierto. */
  async registrarAcierto(ctx: ContextoLogin, cuenta: string, conocido: boolean): Promise<void> {
    if (!this.cfg.habilitada) return;
    const ip = claveIp(ctx.ip);
    const h = huella(`cuenta|${cuenta}`, this.secreto);
    await Promise.all([
      this.almacen.decr(this.claveCuenta(cuenta, conocido)),
      this.almacen.decr(`lg:i:${ip}:n`),
      this.almacen.agregar(`lg:i:${ip}:ok`, h, this.cfg.ventanaMs),
      this.almacen.quitar(`lg:i:${ip}:fa`, h)
    ]);
  }

  /** El intento no llegó a evaluarse (el servidor estaba ocupado): no es culpa de quien lo hizo, se devuelve. */
  async anular(ctx: ContextoLogin, cuenta: string, conocido: boolean): Promise<void> {
    if (!this.cfg.habilitada) return;
    await Promise.all([this.almacen.decr(this.claveCuenta(cuenta, conocido)), this.almacen.decr(`lg:i:${claveIp(ctx.ip)}:n`)]);
  }
}

// ── límite simple por clave (segundo factor, recuperar contraseña) ───────────────────────────────────────────────────

/** Cuenta un intento contra `clave`; devuelve si se permite y cuántos segundos faltan para que se libere. */
export const limitarIntentos = async (almacen: AlmacenContadores, clave: string, max: number, ventanaMs: number): Promise<{ permitido: boolean; reintentarSeg: number }> => {
  const n = await almacen.incr(clave, ventanaMs);
  if (n <= max) return { permitido: true, reintentarSeg: 0 };
  return { permitido: false, reintentarSeg: seg(await almacen.ttlMs(clave)) };
};

// ── construcción desde el entorno ────────────────────────────────────────────────────────────────────────────────────

export const crearAlmacenDelEntorno = (redis: ConstructorParameters<typeof AlmacenRedis>[0] | null, log: (m: string) => void = console.error): AlmacenContadores => {
  const memoria = new AlmacenMemoria();
  if (!redis) return memoria;
  let ultimoAviso = 0;
  return new AlmacenConRespaldo(new AlmacenRedis(redis), memoria, {
    alFallar: (e) => {
      const ahora = Date.now();
      if (ahora - ultimoAviso > 30_000) {
        ultimoAviso = ahora;
        log(`[login-guard] Redis no responde (${e instanceof Error ? e.message : String(e)}): los límites quedan por instancia hasta que vuelva`);
      }
    }
  });
};
