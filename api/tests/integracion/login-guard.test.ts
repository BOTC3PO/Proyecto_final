/**
 * Límite de ingreso por cuenta y por IP (lib/login-guard.ts): lógica con un almacén en memoria y reloj simulado.
 * Las pruebas con HTTP y hash de contraseñas reales están en login-por-cuenta-e-ip.test.ts.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { test } from "node:test";
import { AlmacenConRespaldo, AlmacenMemoria, AlmacenRedis, type AlmacenContadores } from "../../src/lib/almacen-contadores";
import { crearLimitadorConcurrencia, ColaLlena } from "../../src/lib/concurrencia";
import {
  CONFIG_GUARDA_POR_DEFECTO, GuardaLogin, claveIp, cookieDispositivo, dispositivoConocido, ipEnLista, leerCookie,
  limitarIntentos, type ConfigGuarda
} from "../../src/lib/login-guard";

const SECRETO = "secreto-de-prueba-no-usar-en-produccion";
const T0 = 1_800_000_000_000;

const montar = (cfg: Partial<ConfigGuarda> = {}) => {
  let ahora = T0;
  const reloj = () => ahora;
  const almacen = new AlmacenMemoria(reloj);
  const guarda = new GuardaLogin(almacen, { ...CONFIG_GUARDA_POR_DEFECTO, ...cfg }, SECRETO, reloj);
  return { almacen, guarda, avanzar: (ms: number) => { ahora += ms; }, reloj };
};
type Montaje = ReturnType<typeof montar>;
const ctx = (ip: string, ua = "Mozilla/5.0 A") => ({ ip, ua });

/** Un intento completo como lo hace el handler: fase IP, fase cuenta, y el resultado. Devuelve el estado final. */
const intentar = async (m: Montaje, ip: string, cuenta: string, ok: boolean, opciones: { conocido?: boolean; ua?: string } = {}) => {
  const c = ctx(ip, opciones.ua);
  const conocido = opciones.conocido ?? false;
  const dIp = await m.guarda.autorizarIp(c);
  if (!dIp.permitido) return `bloqueado:${dIp.motivo}`;
  const dCta = await m.guarda.autorizarCuenta(cuenta, conocido);
  if (!dCta.permitido) return `bloqueado:${dCta.motivo}`;
  if (ok) { await m.guarda.registrarAcierto(c, cuenta, conocido); return "ok"; }
  await m.guarda.registrarFallo(c, cuenta);
  return "fallo";
};

// ── utilidades ──────────────────────────────────────────────────────────────────────────────────────────────────────

test("claveIp: IPv4 igual, IPv6 por /64 y IPv4 mapeada como IPv4", () => {
  assert.equal(claveIp("203.0.113.7"), "203.0.113.7");
  assert.equal(claveIp("::ffff:203.0.113.7"), "203.0.113.7");
  assert.equal(claveIp("2001:db8:1:2:aaaa:bbbb:cccc:dddd"), claveIp("2001:db8:1:2:1111:2222:3333:4444"));
  assert.notEqual(claveIp("2001:db8:1:2::1"), claveIp("2001:db8:1:3::1"));
  assert.equal(claveIp("2001:0db8::1"), claveIp("2001:db8:0:0::99"));
  assert.equal(claveIp(undefined), "desconocida");
});

test("ipEnLista: IP exacta y CIDR IPv4", () => {
  assert.equal(ipEnLista("200.1.2.3", ["200.1.2.3"]), true);
  assert.equal(ipEnLista("200.1.2.4", ["200.1.2.3"]), false);
  assert.equal(ipEnLista("200.1.2.77", ["200.1.2.0/24"]), true);
  assert.equal(ipEnLista("200.1.3.77", ["200.1.2.0/24"]), false);
  assert.equal(ipEnLista("10.0.0.1", ["0.0.0.0/0"]), true);
  assert.equal(ipEnLista("10.0.0.1", ["", "basura", "10.0.0.0/99"]), false);
});

// ── cookie de dispositivo ───────────────────────────────────────────────────────────────────────────────────────────

const valorSetCookie = (sc: string) => sc.split(";")[0].split("=").slice(1).join("=");
const comoCabecera = (sc: string) => `otra=1; vb_dev=${valorSetCookie(sc)}`;

test("cookie de dispositivo: se reconoce a la cuenta y solo a ella", () => {
  const sc = cookieDispositivo(undefined, "u:ana", SECRETO, { seguro: true, ahoraMs: T0 });
  assert.match(sc, /HttpOnly/);
  assert.match(sc, /SameSite=Lax/);
  assert.match(sc, /Path=\/api\/auth/);
  assert.match(sc, /Secure/);
  assert.doesNotMatch(cookieDispositivo(undefined, "u:ana", SECRETO, { seguro: false, ahoraMs: T0 }), /Secure/);
  const cab = comoCabecera(sc);
  assert.equal(dispositivoConocido(cab, "u:ana", SECRETO, T0 + 1000), true);
  assert.equal(dispositivoConocido(cab, "u:beto", SECRETO, T0 + 1000), false);
  assert.equal(dispositivoConocido(undefined, "u:ana", SECRETO, T0), false);
});

test("cookie de dispositivo: una firma falsa, de otro secreto o vencida no sirve", () => {
  const sc = cookieDispositivo(undefined, "u:ana", SECRETO, { seguro: false, ahoraMs: T0 });
  const cab = comoCabecera(sc);
  assert.equal(dispositivoConocido(cab, "u:ana", "otro-secreto", T0), false);
  const [h, t, f] = valorSetCookie(sc).split(".");
  assert.equal(dispositivoConocido(`vb_dev=${h}.${t}.${f.slice(0, -1)}x`, "u:ana", SECRETO, T0), false);
  assert.equal(dispositivoConocido(`vb_dev=${h}.${(parseInt(t, 36) + 5).toString(36)}.${f}`, "u:ana", SECRETO, T0), false); // fecha alterada
  assert.equal(dispositivoConocido(cab, "u:ana", SECRETO, T0 + 181 * 24 * 3600 * 1000), false);
  assert.equal(dispositivoConocido(cab, "u:ana", SECRETO, T0 + 179 * 24 * 3600 * 1000), true);
});

test("cookie de dispositivo: conserva varias cuentas (hasta 6) y renueva la de la cuenta que entra", () => {
  let cab: string | undefined;
  for (let i = 0; i < 8; i++) cab = comoCabecera(cookieDispositivo(cab, `u:cuenta${i}`, SECRETO, { seguro: false, ahoraMs: T0 + i }));
  const conocidas = Array.from({ length: 8 }, (_, i) => dispositivoConocido(cab, `u:cuenta${i}`, SECRETO, T0 + 100));
  assert.equal(conocidas.filter(Boolean).length, 6);
  assert.equal(conocidas[7], true, "la más nueva está");
  assert.equal(conocidas[0], false, "la más vieja se descartó");
  assert.equal(leerCookie("a=1; vb_dev=xyz; b=2", "vb_dev"), "xyz");
});

// ── el caso de la escuela ───────────────────────────────────────────────────────────────────────────────────────────

test("ESCUELA: 30 alumnos que entran bien desde la misma IP no se bloquean, ni con errores de tipeo de otros", async () => {
  const m = montar();
  const ip = "200.45.10.8";
  for (let i = 0; i < 30; i++) assert.equal(await intentar(m, ip, `u:alumno${i}`, true), "ok", `alumno ${i}`);
  // algunos se equivocan de contraseña y después la corrigen
  for (let i = 0; i < 12; i++) assert.equal(await intentar(m, ip, `u:alumno${i}`, false), "fallo");
  for (let i = 0; i < 12; i++) assert.equal(await intentar(m, ip, `u:alumno${i}`, true), "ok", `reintento ${i}`);
  assert.equal(await intentar(m, ip, "u:alumno-nuevo", true), "ok");
});

test("ESCUELA: 300 ingresos correctos en la ventana no consumen el tope por IP (se devuelven)", async () => {
  const m = montar();
  for (let i = 0; i < 300; i++) assert.equal(await intentar(m, "200.45.10.9", `u:a${i}`, true), "ok");
  assert.equal(await m.almacen.leer("lg:i:200.45.10.9:n"), 0);
});

// ── ataques ─────────────────────────────────────────────────────────────────────────────────────────────────────────

test("PASSWORD SPRAYING: una IP que falla en muchas cuentas distintas se frena a la décima, también para una contraseña buena", async () => {
  const m = montar();
  const ip = "198.51.100.9";
  const res: string[] = [];
  for (let i = 0; i < 12; i++) res.push(await intentar(m, ip, `u:victima${i}`, false));
  assert.deepEqual(res.slice(0, 10), Array(10).fill("fallo"));
  assert.deepEqual(res.slice(10), ["bloqueado:ip-varias-cuentas", "bloqueado:ip-varias-cuentas"]);
  assert.equal(await intentar(m, ip, "u:ana", true), "bloqueado:ip-varias-cuentas");
  assert.equal(await intentar(m, "198.51.100.10", "u:ana", true), "ok", "otra IP no se ve afectada");
});

test("el atacante con UNA cuenta propia que sí entra no alcanza para disimular el spraying", async () => {
  const m = montar();
  const ip = "198.51.100.20";
  let bloqueado = false;
  for (let i = 0; i < 40 && !bloqueado; i++) {
    if (i % 3 === 0) await intentar(m, ip, "u:atacante", true);
    bloqueado = (await intentar(m, ip, `u:victima${i}`, false)).startsWith("bloqueado");
  }
  assert.equal(bloqueado, true);
});

test("muchos User-Agent distintos entre los fallos bajan el umbral del spraying a la mitad", async () => {
  const m = montar();
  const ip = "198.51.100.30";
  let n = 0;
  let res = "";
  while (!res.startsWith("bloqueado") && n < 30) res = await intentar(m, ip, `u:v${n++}`, false, { ua: `Navegador/${n}` });
  assert.ok(n <= 7, `se bloqueó recién en el intento ${n}`);
  const m2 = montar();
  n = 0; res = "";
  while (!res.startsWith("bloqueado") && n < 30) res = await intentar(m2, "198.51.100.31", `u:v${n++}`, false, { ua: "siempre-el-mismo" });
  assert.ok(n >= 10, `con un solo User-Agent se bloqueó en el ${n}`);
});

test("FUERZA BRUTA a una cuenta: 5 fallos y se bloquea para dispositivos desconocidos, aunque cambien las IPs", async () => {
  const m = montar();
  const res: string[] = [];
  for (let i = 0; i < 8; i++) res.push(await intentar(m, `45.1.1.${i}`, "u:ana", false));
  assert.deepEqual(res, ["fallo", "fallo", "fallo", "fallo", "fallo", "bloqueado:cuenta", "bloqueado:cuenta", "bloqueado:cuenta"]);
  assert.equal(await intentar(m, "45.1.1.99", "u:ana", true), "bloqueado:cuenta", "ni con la contraseña correcta");
  assert.equal(await intentar(m, "45.1.1.99", "u:beto", true), "ok", "otras cuentas no se ven afectadas");
});

test("DISPOSITIVO CONOCIDO: quien ya entró desde ese navegador no queda afuera porque alguien le agote el cupo", async () => {
  const m = montar();
  for (let i = 0; i < 6; i++) await intentar(m, `45.2.2.${i}`, "u:ana", false); // el atacante agota el cupo
  assert.equal(await intentar(m, "45.2.2.50", "u:ana", true), "bloqueado:cuenta");
  assert.equal(await intentar(m, "190.1.1.1", "u:ana", true, { conocido: true }), "ok", "su navegador sigue entrando");
  for (let i = 0; i < 15; i++) assert.equal(await intentar(m, "190.1.1.1", "u:ana", false, { conocido: true }), "fallo", `fallo ${i + 1}`);
  assert.equal(await intentar(m, "190.1.1.1", "u:ana", false, { conocido: true }), "bloqueado:cuenta", "el cupo mayor (15) también tiene techo");
});

test("un fallo de una cuenta no se suma al cupo de otra, y devolver el intento (acierto) no pasa de cero", async () => {
  const m = montar();
  for (let i = 0; i < 4; i++) await intentar(m, "45.3.3.3", "u:ana", false);
  await intentar(m, "45.3.3.3", "u:ana", true); // entra: ese intento se devuelve
  assert.equal(await intentar(m, "45.3.3.4", "u:ana", false), "fallo", "los 4 fallos previos siguen contando: este es el 5.º");
  assert.equal(await intentar(m, "45.3.3.4", "u:ana", false), "bloqueado:cuenta");
  await m.guarda.registrarAcierto(ctx("9.9.9.9"), "u:nueva", false);
  await m.guarda.registrarAcierto(ctx("9.9.9.9"), "u:nueva", false);
  assert.equal(await m.almacen.leer("lg:i:9.9.9.9:n"), 0, "no baja de 0");
});

test("una IP bloqueada NO consume el cupo de la cuenta de otra persona", async () => {
  const m = montar({ ipMax: 20 });
  const ip = "66.6.6.6";
  for (let i = 0; i < 21; i++) await m.guarda.autorizarIp(ctx(ip)); // la IP llega a su tope de volumen
  assert.equal(await intentar(m, ip, "u:victima", false), "bloqueado:ip-volumen");
  const clave = await claveCuentaDe(m, "u:victima");
  const antes = await m.almacen.leer(`lg:a:${clave}:u`);
  for (let i = 0; i < 50; i++) await intentar(m, ip, "u:victima", false); // sigue atacando a la víctima desde la IP bloqueada
  assert.equal(await m.almacen.leer(`lg:a:${clave}:u`), antes, "el cupo de la víctima no se tocó");
  assert.equal(await intentar(m, "190.9.9.9", "u:victima", true), "ok", "la víctima entra desde su casa");
});
// helper: el nombre de la clave de cuenta depende del secreto; se obtiene probando un intento y mirando qué clave apareció
const claveCuentaDe = async (m: Montaje, cuenta: string) => {
  const r = await m.guarda.autorizarCuenta(cuenta, false);
  assert.equal(r.permitido, true);
  const { huella } = await import("../../src/lib/login-guard");
  await m.almacen.decr(`lg:a:${huella(`cuenta|${cuenta}`, SECRETO)}:u`);
  return huella(`cuenta|${cuenta}`, SECRETO);
};

test("VOLUMEN por IP: se corta al superar ipMax; una red compartida (8 cuentas que entraron) y una IP confiable tienen más margen", async () => {
  // Cuentas distintas en cada intento: se mide el tope por IP sin chocar con el cupo por cuenta.
  const fallos = async (m: Montaje, ip: string, intentos: number) => {
    let permitidos = 0;
    for (let i = 0; i < intentos; i++) if ((await intentar(m, ip, `u:${ip}-${i}`, false)) === "fallo") permitidos++;
    return permitidos;
  };
  const m = montar({ ipMax: 10, sprayCuentas: 1000 });
  assert.equal(await fallos(m, "77.7.7.7", 12), 10);
  assert.equal(await intentar(m, "77.7.7.7", "u:otra", false), "bloqueado:ip-volumen");

  const c = montar({ ipMax: 10, sprayCuentas: 1000 });
  for (let i = 0; i < 8; i++) await intentar(c, "77.7.7.8", `u:alumno${i}`, true); // red compartida: tope x3
  assert.equal(await fallos(c, "77.7.7.8", 40), 30);

  const t = montar({ ipMax: 10, sprayCuentas: 1000, ipsConfiables: ["88.8.8.0/24"] }); // IP confiable: tope x5
  assert.equal(await fallos(t, "88.8.8.8", 80), 50);
});

test("MODO DEFENSA: con muchos fallos en toda la plataforma los topes bajan a la mitad", async () => {
  const m = montar({ globalFallosMin: 50 });
  for (let i = 0; i < 60; i++) await m.guarda.registrarFallo(ctx(`10.0.${i % 200}.1`), `u:v${i}`);
  m.avanzar(6_000); // vence la caché de 5 s del estado de defensa
  let fallos = 0;
  while ((await intentar(m, "55.5.5.5", "u:ana", false)) === "fallo" && fallos < 20) fallos++;
  assert.equal(fallos, 2, "cuentaMax 5 → 2 en defensa");
  // pasado el minuto y medio la plataforma se calma
  m.avanzar(4 * 60_000);
  assert.equal(await intentar(m, "55.5.5.6", "u:beto", false), "fallo");
  assert.equal(await intentar(m, "55.5.5.6", "u:beto", false), "fallo");
  assert.equal(await intentar(m, "55.5.5.6", "u:beto", false), "fallo", "fuera de defensa vuelve a tener 5");
});

test("la ventana vence: pasados 15 minutos desde el primer fallo se libera la cuenta y la IP", async () => {
  const m = montar();
  for (let i = 0; i < 6; i++) await intentar(m, "44.4.4.4", "u:ana", false);
  assert.equal(await intentar(m, "44.4.4.4", "u:ana", true), "bloqueado:cuenta");
  const d = await m.guarda.autorizarCuenta("u:ana", false);
  assert.equal(d.permitido, false);
  if (!d.permitido) assert.ok(d.reintentarSeg > 0 && d.reintentarSeg <= 900, `reintentar en ${d.reintentarSeg}s`);
  m.avanzar(15 * 60_000 + 1000);
  assert.equal(await intentar(m, "44.4.4.4", "u:ana", true), "ok");
});

test("la ventana NO se corre con cada intento (un atacante no mantiene el bloqueo con goteo)", async () => {
  const m = montar();
  for (let i = 0; i < 6; i++) await intentar(m, "44.4.4.5", "u:ana", false);
  m.avanzar(14 * 60_000);
  for (let i = 0; i < 5; i++) await intentar(m, "44.4.4.5", "u:ana", false); // sigue pegando
  m.avanzar(61_000);
  assert.equal(await intentar(m, "44.4.4.5", "u:ana", true), "ok", "venció a los 15 min del primero, no del último");
});

test("anular devuelve un intento que no llegó a evaluarse (servidor ocupado)", async () => {
  const m = montar();
  for (let i = 0; i < 5; i++) {
    await m.guarda.autorizarIp(ctx("33.3.3.3"));
    await m.guarda.autorizarCuenta("u:ana", false);
    await m.guarda.anular(ctx("33.3.3.3"), "u:ana", false);
  }
  assert.equal(await intentar(m, "33.3.3.3", "u:ana", false), "fallo");
  assert.equal(await m.almacen.leer("lg:i:33.3.3.3:n"), 1);
});

test("deshabilitado: todo se permite y no se guarda nada", async () => {
  const m = montar({ habilitada: false });
  for (let i = 0; i < 50; i++) assert.equal(await intentar(m, "1.1.1.1", "u:ana", false), "fallo");
  assert.equal(await m.almacen.leer("lg:i:1.1.1.1:n"), 0);
});

test("limitarIntentos: permite hasta el máximo y avisa cuánto falta", async () => {
  const almacen = new AlmacenMemoria(() => T0);
  for (let i = 0; i < 5; i++) assert.equal((await limitarIntentos(almacen, "k", 5, 60_000)).permitido, true);
  const r = await limitarIntentos(almacen, "k", 5, 60_000);
  assert.equal(r.permitido, false);
  assert.equal(r.reintentarSeg, 60);
});

// ── almacenes ───────────────────────────────────────────────────────────────────────────────────────────────────────

test("AlmacenMemoria: tope de claves (un ataque con IPs distintas no hace crecer la memoria sin límite)", async () => {
  let ahora = T0;
  const a = new AlmacenMemoria(() => ahora, 100);
  for (let i = 0; i < 1000; i++) await a.incr(`k${i}`, 60_000);
  let vivas = 0;
  for (let i = 0; i < 1000; i++) if ((await a.leer(`k${i}`)) > 0) vivas++;
  assert.ok(vivas <= 100, `quedaron ${vivas} claves vivas`);
  ahora += 61_000;
  assert.equal(await a.leer("k999"), 0);
});

test("AlmacenConRespaldo: si Redis falla o tarda de más cae a memoria y no insiste durante el enfriamiento", async () => {
  let ahora = T0;
  let llamadasRedis = 0;
  const roto: AlmacenContadores = {
    incr: async () => { llamadasRedis++; throw new Error("ECONNREFUSED"); },
    decr: async () => { llamadasRedis++; throw new Error("x"); }, leer: async () => { llamadasRedis++; throw new Error("x"); },
    agregar: async () => { throw new Error("x"); }, quitar: async () => { throw new Error("x"); },
    tamano: async () => { throw new Error("x"); }, ttlMs: async () => { throw new Error("x"); }
  };
  const avisos: unknown[] = [];
  const a = new AlmacenConRespaldo(roto, new AlmacenMemoria(() => ahora), { reloj: () => ahora, enfriamientoMs: 5000, alFallar: (e) => avisos.push(e) });
  assert.equal(await a.incr("k", 1000), 1);
  assert.equal(await a.incr("k", 1000), 2);
  assert.equal(await a.incr("k", 1000), 3);
  assert.equal(llamadasRedis, 1, "dentro del enfriamiento no vuelve a probar con Redis");
  assert.equal(avisos.length, 1);
  ahora += 5001;
  await a.incr("k", 1000);
  assert.equal(llamadasRedis, 2, "pasado el enfriamiento lo reintenta");

  const lento: AlmacenContadores = { ...roto, incr: () => new Promise(() => { /* nunca responde */ }) };
  const b = new AlmacenConRespaldo(lento, new AlmacenMemoria(), { timeoutMs: 30 });
  assert.equal(await b.incr("k", 1000), 1, "un Redis colgado no cuelga el ingreso");
});

test("AlmacenRedis: usa INCR + PEXPIRE NX, SADD, SCARD, PTTL y un script para restar sin bajar de 0", async () => {
  const llamadas: string[] = [];
  const cadena = (nombre: string) => {
    const pasos: string[] = [];
    const o: Record<string, unknown> = {
      incr: (...a: unknown[]) => { pasos.push(`incr ${a.join(" ")}`); return o; },
      sadd: (...a: unknown[]) => { pasos.push(`sadd ${a.join(" ")}`); return o; },
      pexpire: (...a: unknown[]) => { pasos.push(`pexpire ${a.join(" ")}`); return o; },
      exec: async () => { llamadas.push(`${nombre}: ${pasos.join(" | ")}`); return [[null, 7], [null, 1]]; }
    };
    return o;
  };
  let uso = 0;
  const fake = {
    multi: () => cadena(`multi${++uso}`),
    eval: async (...a: unknown[]) => { llamadas.push(`eval ${String(a[0]).includes("DECR")} ${a[1]} ${a[2]}`); return 0; },
    get: async () => "4", scard: async () => 3, pttl: async () => 1234, srem: async (...a: unknown[]) => { llamadas.push(`srem ${a.join(" ")}`); return 1; }
  } as unknown as ConstructorParameters<typeof AlmacenRedis>[0];
  const r = new AlmacenRedis(fake);
  assert.equal(await r.incr("k", 900_000), 7);
  await r.agregar("s", "m", 900_000);
  await r.decr("k");
  await r.quitar("s", "m");
  assert.equal(await r.leer("k"), 4);
  assert.equal(await r.tamano("s"), 3);
  assert.equal(await r.ttlMs("k"), 1234);
  assert.deepEqual(llamadas, ["multi1: incr k | pexpire k 900000 NX", "multi2: sadd s m | pexpire s 900000 NX", "eval true 1 k", "srem s m"]);
});

// ── concurrencia ────────────────────────────────────────────────────────────────────────────────────────────────────

test("limitador de concurrencia: hasta max en paralelo, cola acotada y el resto rechazado al instante", async () => {
  const lim = crearLimitadorConcurrencia(2, 2);
  let enCurso = 0, pico = 0;
  const tarea = async () => { enCurso++; pico = Math.max(pico, enCurso); await new Promise((r) => setTimeout(r, 30)); enCurso--; return "ok"; };
  const resultados = await Promise.allSettled(Array.from({ length: 7 }, () => lim(tarea)));
  const ok = resultados.filter((r) => r.status === "fulfilled").length;
  const llenas = resultados.filter((r) => r.status === "rejected" && r.reason instanceof ColaLlena).length;
  assert.equal(ok, 4, "2 en curso + 2 en cola");
  assert.equal(llenas, 3);
  assert.equal(pico, 2);
  assert.deepEqual(lim.estado(), { activos: 0, esperando: 0, max: 2, colaMax: 2 });
  assert.equal(await lim(tarea), "ok", "se recupera");
});

test("limitador de concurrencia: si la tarea falla igual libera el cupo", async () => {
  const lim = crearLimitadorConcurrencia(1, 0);
  await assert.rejects(() => lim(async () => { throw new Error("boom"); }), /boom/);
  assert.equal(await lim(async () => "sigue"), "sigue");
});

test("limitador de concurrencia: saturado() avisa cuando ya no entra nada más (permite rechazar sin hacer trabajo previo)", async () => {
  const lim = crearLimitadorConcurrencia(1, 1);
  assert.equal(lim.saturado(), false);
  const liberar: Array<() => void> = [];
  const a = lim(() => new Promise<void>((r) => liberar.push(r)));
  assert.equal(lim.saturado(), false, "1 en curso y la cola vacía todavía admite uno");
  const b = lim(async () => undefined);
  await new Promise((r) => setTimeout(r, 5));
  assert.equal(lim.saturado(), true, "1 en curso y 1 esperando: lleno");
  liberar.shift()?.();
  await Promise.all([a, b]);
  assert.equal(lim.saturado(), false);
});
