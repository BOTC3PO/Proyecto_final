/**
 * Fase 2: cuentas de la plataforma en el dispositivo. El servidor es falso pero firma los permisos con Ed25519 igual
 * que `api/src/lib/permiso-offline.ts`, así se prueba la verificación real.
 */
import crypto from "node:crypto";
import { beforeEach, describe, expect, it } from "vitest";
import { crearContexto, type Configuracion, type Contexto } from "../contexto";
import { prepararBases } from "../esquema";
import { crearServidorLocal } from "../servidor";
import { almacenPrueba } from "./almacen-prueba";

const BASE = "https://api.virtualbook.local";
const REMOTA = "https://plataforma.prueba/api";
const DIA = 86_400_000;

const { privateKey, publicKey } = crypto.generateKeyPairSync("ed25519");
const CLAVE_PUBLICA = (publicKey.export({ format: "jwk" }) as { x: string }).x;

type Cuenta = { id: string; username: string; email: string; password: string; roles: string[]; menor: boolean; baneada?: boolean; con2fa?: boolean };

/** Servidor falso: /api/auth/login, /api/auth/2fa/login y /api/offline/permiso. */
function servidorFalso(cuentas: Cuenta[], estado: { red: boolean; diasPermiso: number; ahora: () => Date; llamadas: string[] }) {
  const tokens = new Map<string, Cuenta>();
  const desafios = new Map<string, Cuenta>();
  const responder = (cuerpo: unknown, status = 200) => new Response(JSON.stringify(cuerpo), { status, headers: { "Content-Type": "application/json" } });
  const sesion = (c: Cuenta) => {
    const t = crypto.randomUUID();
    tokens.set(t, c);
    return responder({ id: c.id, accessToken: t });
  };
  return async (url: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    if (!estado.red) throw new TypeError("Failed to fetch");
    const ruta = String(url).replace(REMOTA, "");
    estado.llamadas.push(ruta);
    const b = JSON.parse(String(init?.body ?? "{}"));
    if (ruta === "/api/auth/login") {
      const c = cuentas.find((x) => x.username === b.identifier || x.email === b.identifier);
      if (!c || c.password !== b.password) return responder({ error: "Invalid credentials" }, 401);
      if (c.baneada) return responder({ error: "Account suspended", code: "BANNED" }, 403);
      if (c.con2fa) {
        const d = crypto.randomUUID();
        desafios.set(d, c);
        return responder({ requiere2fa: true, desafio: d });
      }
      return sesion(c);
    }
    if (ruta === "/api/auth/2fa/login") {
      const c = desafios.get(b.desafio);
      if (!c || b.codigo !== "123456") return responder({ error: "El código no es correcto." }, 401);
      return sesion(c);
    }
    if (ruta === "/api/offline/permiso") {
      const c = tokens.get(String(new Headers(init?.headers).get("Authorization")).replace("Bearer ", ""));
      if (!c) return responder({ error: "no autenticado" }, 401);
      const emitido = estado.ahora();
      const datos = {
        v: 1, sub: c.id, username: c.username, nombre: `Nombre ${c.username}`, email: c.email, roles: c.roles,
        schoolId: "esc-1", menor: c.menor, dispositivo: b.dispositivo, emitido: emitido.toISOString(),
        vence: new Date(emitido.getTime() + estado.diasPermiso * DIA).toISOString(),
      };
      const permiso = Buffer.from(JSON.stringify(datos)).toString("base64url");
      const firma = crypto.sign(null, Buffer.from(permiso), privateKey).toString("base64url");
      return responder({ permiso, firma, vence: datos.vence });
    }
    return responder({ error: "not found" }, 404);
  };
}

let ctx: Contexto;
let atender: (r: Request) => Promise<Response>;
let reloj: Date;
let estado: { red: boolean; diasPermiso: number; ahora: () => Date; llamadas: string[] };
let cuentas: Cuenta[];

const pedir = async (metodo: string, ruta: string, cuerpo?: unknown, token?: string) => {
  const r = await atender(new Request(`${BASE}${ruta}`, {
    method: metodo,
    headers: { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
    body: cuerpo === undefined ? undefined : JSON.stringify(cuerpo),
  }));
  return { status: r.status, datos: await r.json() };
};
const entrar = (identifier: string, password: string) => pedir("POST", "/api/auth/login", { identifier, password });

function montar(config: Partial<Configuracion> = {}) {
  ctx = crearContexto(almacen, {
    iteraciones: 1000,
    ahora: () => reloj,
    config: { modoAutonomo: false, usuariosLocales: true, clavePublica: CLAVE_PUBLICA, ...config },
    remoto: { base: REMOTA, fetch: servidorFalso(cuentas, estado) as typeof fetch },
  });
  atender = crearServidorLocal(ctx);
}

let almacen: ReturnType<typeof almacenPrueba>;
beforeEach(async () => {
  reloj = new Date("2026-11-04T12:00:00Z");
  estado = { red: true, diasPermiso: 90, ahora: () => reloj, llamadas: [] };
  cuentas = [
    { id: "u-alumna", username: "alumna", email: "alumna@escuela.ar", password: "clave-de-la-web", roles: ["USER"], menor: true },
    { id: "u-profe", username: "profe", email: "profe@escuela.ar", password: "clave-del-profe", roles: ["TEACHER", "PARENT"], menor: false },
    { id: "u-adulta", username: "adulta", email: "adulta@escuela.ar", password: "clave-de-adulta", roles: ["TEACHER", "USER"], menor: false },
  ];
  almacen = almacenPrueba();
  await prepararBases(almacen);
  montar();
});

describe("activación de una cuenta de la plataforma", () => {
  it("con red activa la cuenta y después entra sin red", async () => {
    const a = await entrar("alumna", "clave-de-la-web");
    expect(a.status).toBe(200);
    expect(a.datos).toMatchObject({ id: "u-alumna", username: "alumna", role: "USER", roles: ["USER"], schoolId: "esc-1" });
    const [fila] = await almacen.consulta<{ tipo: string; mostrar_a_padres: number; hash: string }>(
      "progreso", "SELECT tipo, mostrar_a_padres, hash FROM perfiles WHERE id = 'u-alumna'");
    expect(fila.tipo).toBe("plataforma");
    expect(fila.mostrar_a_padres).toBe(1); // menor de 18: visible en la vista de padre por defecto
    expect(fila.hash).not.toContain("clave-de-la-web");

    estado.red = false;
    estado.llamadas = [];
    const sinRed = await entrar("alumna@escuela.ar", "clave-de-la-web");
    expect(sinRed.status).toBe(200);
    expect(estado.llamadas).toEqual([]);
  });

  it("el rol principal sale de los roles del permiso y un adulto arranca oculto para la vista de padre", async () => {
    const p = await entrar("profe", "clave-del-profe");
    expect(p.datos).toMatchObject({ role: "TEACHER", roles: ["TEACHER", "PARENT"] });
    const [fila] = await almacen.consulta<{ mostrar_a_padres: number }>("progreso", "SELECT mostrar_a_padres FROM perfiles WHERE id = 'u-profe'");
    expect(fila.mostrar_a_padres).toBe(0);
  });

  it("sin red, una cuenta que el dispositivo no conoce pide conectarse", async () => {
    estado.red = false;
    const r = await entrar("alumna", "clave-de-la-web");
    expect(r.status).toBe(503);
    expect(r.datos.code).toBe("SIN_CONEXION");
  });

  it("rechaza un permiso firmado con otra clave", async () => {
    montar({ clavePublica: (crypto.generateKeyPairSync("ed25519").publicKey.export({ format: "jwk" }) as { x: string }).x });
    const r = await entrar("alumna", "clave-de-la-web");
    expect(r.status).toBe(502);
    expect(r.datos.code).toBe("PERMISO_INVALIDO");
  });

  it("un permiso alterado en la base deja de valer", async () => {
    await entrar("alumna", "clave-de-la-web");
    const [f] = await almacen.consulta<{ permiso: string }>("progreso", "SELECT permiso FROM perfiles WHERE id = 'u-alumna'");
    const datos = JSON.parse(Buffer.from(f.permiso, "base64url").toString());
    datos.vence = "2099-01-01T00:00:00.000Z";
    await almacen.ejecutar("progreso", "UPDATE perfiles SET permiso = ? WHERE id = 'u-alumna'", [Buffer.from(JSON.stringify(datos)).toString("base64url")]);
    estado.red = false;
    const r = await entrar("alumna", "clave-de-la-web");
    expect(r.status).toBe(403);
    expect(r.datos.code).toBe("PERMISO_INVALIDO");
  });

  it("con verificación en dos pasos, la activación termina después del código", async () => {
    cuentas[0].con2fa = true;
    const paso1 = await entrar("alumna", "clave-de-la-web");
    expect(paso1.datos.requiere2fa).toBe(true);
    const mal = await pedir("POST", "/api/auth/2fa/login", { desafio: paso1.datos.desafio, codigo: "000000" });
    expect(mal.status).toBe(401);
    const paso2 = await pedir("POST", "/api/auth/2fa/login", { desafio: paso1.datos.desafio, codigo: "123456" });
    expect(paso2.status).toBe(200);
    expect(paso2.datos.id).toBe("u-alumna");
    estado.red = false;
    expect((await entrar("alumna", "clave-de-la-web")).status).toBe(200);
  });
});

describe("plazo de 90 días", () => {
  it("vencido y sin red pide conectarse; con red se renueva", async () => {
    await entrar("alumna", "clave-de-la-web");
    reloj = new Date(reloj.getTime() + 91 * DIA);
    estado.red = false;
    const vencido = await entrar("alumna", "clave-de-la-web");
    expect(vencido.status).toBe(403);
    expect(vencido.datos.code).toBe("PERMISO_VENCIDO");

    estado.red = true;
    expect((await entrar("alumna", "clave-de-la-web")).status).toBe(200);
    estado.red = false;
    expect((await entrar("alumna", "clave-de-la-web")).status).toBe(200);
  });

  it("en modo autónomo los permisos no vencen y no se llama al servidor", async () => {
    await entrar("alumna", "clave-de-la-web");
    montar({ modoAutonomo: true });
    reloj = new Date(reloj.getTime() + 400 * DIA);
    estado.llamadas = [];
    expect((await entrar("alumna", "clave-de-la-web")).status).toBe(200);
    expect(estado.llamadas).toEqual([]);
  });

  it("si la cuenta fue suspendida, al renovar el perfil se bloquea", async () => {
    await entrar("alumna", "clave-de-la-web");
    reloj = new Date(reloj.getTime() + 91 * DIA);
    cuentas[0].baneada = true;
    const r = await entrar("alumna", "clave-de-la-web");
    expect(r.status).toBe(403);
    estado.red = false;
    const bloqueada = await entrar("alumna", "clave-de-la-web");
    expect(bloqueada.datos.code).toBe("CUENTA_BLOQUEADA");
  });
});

describe("contraseñas", () => {
  it("si la contraseña cambió en la web, con red se acepta la nueva y se actualiza la huella", async () => {
    await entrar("alumna", "clave-de-la-web");
    cuentas[0].password = "clave-nueva-web";
    expect((await entrar("alumna", "clave-nueva-web")).status).toBe(200);
    estado.red = false;
    expect((await entrar("alumna", "clave-nueva-web")).status).toBe(200);
    expect((await entrar("alumna", "clave-de-la-web")).status).toBe(401);
  });

  it("tras 5 fallos seguidos hay que esperar, y la espera crece", async () => {
    await pedir("POST", "/api/auth/register", { username: "ana", password: "contraseña-larga" });
    for (let i = 0; i < 5; i++) expect((await entrar("ana", "mal-mal-mal")).status).toBe(401);
    const espera = await entrar("ana", "contraseña-larga");
    expect(espera.status).toBe(429);
    expect(espera.datos.retryAfterSeconds).toBe(30);
    reloj = new Date(reloj.getTime() + 31_000);
    expect((await entrar("ana", "mal-mal-mal")).status).toBe(401);
    expect((await entrar("ana", "contraseña-larga")).datos.retryAfterSeconds).toBe(60);
    reloj = new Date(reloj.getTime() + 61_000);
    expect((await entrar("ana", "contraseña-larga")).status).toBe(200);
    reloj = new Date(reloj.getTime() + 1000);
    expect((await entrar("ana", "mal-mal-mal")).status).toBe(401); // el contador volvió a cero
    expect((await entrar("ana", "contraseña-larga")).status).toBe(200);
  });

  it("los usuarios locales se pueden apagar en la compilación", async () => {
    montar({ usuariosLocales: false });
    expect((await pedir("POST", "/api/auth/register", { username: "ana", password: "contraseña-larga" })).status).toBe(403);
  });

  it("el alta de la web manda `role`", async () => {
    const r = await pedir("POST", "/api/auth/register", { username: "profe2", password: "contraseña-larga", role: "TEACHER", email: "x@y.z" });
    expect(r.datos.role).toBe("TEACHER");
  });
});

describe("perfil y pedidos de rol", () => {
  it("el dueño de la cuenta decide si se ve en la vista de padre", async () => {
    // Profesora que también cursa como alumna: aparece por su rol de alumna, si lo deja activado.
    const a = await entrar("adulta", "clave-de-adulta");
    await entrar("profe", "clave-del-profe");
    const visibles = async () => (await pedir("GET", "/api/offline/vista-padre")).datos.items.map((p: { id: string }) => p.id);
    expect(await visibles()).toEqual([]);
    expect((await pedir("PATCH", "/api/offline/perfil", { mostrarAPadres: true }, a.datos.accessToken)).status).toBe(200);
    expect(await visibles()).toEqual(["u-adulta"]); // la cuenta sin rol de alumno no aparece
  });

  it("el pedido de rol queda en la cola, sin repetirse", async () => {
    const a = await entrar("profe", "clave-del-profe");
    const t = a.datos.accessToken;
    expect((await pedir("POST", "/api/solicitar-rol", { target_role: "ADMIN" }, t)).status).toBe(400);
    expect((await pedir("POST", "/api/solicitar-rol", { target_role: "TEACHER" }, t)).status).toBe(409);
    const r = await pedir("POST", "/api/solicitar-rol", { target_role: "DIRECTIVO", motivo: "Soy vicedirectora" }, t);
    expect(r.status).toBe(201);
    expect((await pedir("POST", "/api/solicitar-rol", { target_role: "DIRECTIVO" }, t)).datos.alreadyPending).toBe(true);
    const eventos = await almacen.consulta<{ tipo: string; datos: string }>("progreso", "SELECT tipo, datos FROM eventos");
    expect(eventos).toEqual([{ tipo: "solicitar-rol", datos: JSON.stringify({ target_role: "DIRECTIVO", motivo: "Soy vicedirectora" }) }]);
  });

  it("un menor no puede pedir otro rol", async () => {
    const a = await entrar("alumna", "clave-de-la-web");
    expect((await pedir("POST", "/api/solicitar-rol", { target_role: "PARENT" }, a.datos.accessToken)).status).toBe(403);
  });
});
