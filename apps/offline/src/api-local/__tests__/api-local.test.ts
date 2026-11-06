import { beforeEach, describe, expect, it } from "vitest";
import { crearContexto, type Contexto } from "../contexto";
import { prepararBases } from "../esquema";
import { crearServidorLocal } from "../servidor";
import { cargarManifiesto } from "../temario";
import { almacenPrueba } from "./almacen-prueba";

const BASE = "https://api.virtualbook.local";
const dsl = `tipo: multiple-choice\nenunciado: "¿2 + 2?"\nopciones: ["4", "5"]\nrespuesta: "4"`;
const manifiesto = {
  temas: [
    { id: "cont-mat--sumar", materia: "matematica", ruta: "sumar", titulo: "Sumar", teoria: "Teoría de sumar", nivel: "1", dependencias: [], preguntas: [{ titulo: "p1", dsl }] },
    { id: "cont-mat--restar", materia: "matematica", ruta: "restar", titulo: "Restar", teoria: "Teoría de restar", nivel: "1", dependencias: ["cont-mat--sumar"], preguntas: [{ titulo: "p1", dsl }] },
  ],
};

let ctx: Contexto;
let atender: (r: Request) => Promise<Response>;

const pedir = async (metodo: string, ruta: string, cuerpo?: unknown, token?: string) => {
  const r = await atender(new Request(`${BASE}${ruta}`, {
    method: metodo,
    headers: { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
    body: cuerpo === undefined ? undefined : JSON.stringify(cuerpo),
  }));
  return { status: r.status, datos: await r.json() };
};
const crearUsuario = async (username: string, rol = "USER") =>
  (await pedir("POST", "/api/auth/register", { username, password: "contraseña-larga", fullName: `Nombre ${username}`, rol })).datos;

beforeEach(async () => {
  ctx = crearContexto(almacenPrueba(), { iteraciones: 1000 });
  await prepararBases(ctx.almacen);
  await cargarManifiesto(ctx, manifiesto as never, { origen: "oficial", paquete: "matematica" });
  atender = crearServidorLocal(ctx);
});

describe("cuentas del dispositivo", () => {
  it("crea un alumno local e inicia sesión con el formato del servidor", async () => {
    const alta = await crearUsuario("ana");
    expect(alta.role).toBe("USER");
    expect(alta.accessToken).toMatch(/^[0-9a-f]{64}$/);
    const login = await pedir("POST", "/api/auth/login", { identifier: "ANA", password: "contraseña-larga" });
    expect(login.status).toBe(200);
    expect(login.datos).toMatchObject({ username: "ana", fullName: "Nombre ana", roles: ["USER"], escuelas: [] });
    const yo = await pedir("GET", "/api/auth/me", undefined, login.datos.accessToken);
    expect(yo.datos.id).toBe(alta.id);
  });

  it("contraseña incorrecta y usuario inexistente responden igual", async () => {
    await crearUsuario("ana");
    const mal = await pedir("POST", "/api/auth/login", { identifier: "ana", password: "otra-contraseña" });
    const nadie = await pedir("POST", "/api/auth/login", { identifier: "nadie", password: "otra-contraseña" });
    expect(mal).toEqual(nadie);
    expect(mal.status).toBe(401);
  });

  it("solo hay usuarios locales de alumno y de profesor", async () => {
    expect((await crearUsuario("profe", "TEACHER")).role).toBe("TEACHER");
    const padre = await pedir("POST", "/api/auth/register", { username: "papa", password: "contraseña-larga", rol: "PARENT" });
    expect(padre.status).toBe(400);
  });

  it("no repite usuarios y cerrar sesión invalida el token", async () => {
    const a = await crearUsuario("ana");
    expect((await pedir("POST", "/api/auth/register", { username: "Ana", password: "contraseña-larga" })).status).toBe(409);
    await pedir("POST", "/api/auth/logout", {}, a.accessToken);
    expect((await pedir("GET", "/api/auth/me", undefined, a.accessToken)).status).toBe(401);
  });

  it("la contraseña no se guarda", async () => {
    await crearUsuario("ana");
    const [p] = await ctx.almacen.consulta("progreso", "SELECT * FROM perfiles");
    expect(JSON.stringify(p)).not.toContain("contraseña-larga");
  });
});

describe("solo lo desbloqueado (anti trampa)", () => {
  it("un módulo con prerrequisitos pendientes no entrega su contenido", async () => {
    const { accessToken } = await crearUsuario("ana");
    const lista = await pedir("GET", "/api/modulos", undefined, accessToken);
    const restar = lista.datos.items.find((m: { id: string }) => m.id === "cont-mat--restar");
    expect(restar).toMatchObject({ isLocked: true, theoryItems: [] });
    const detalle = await pedir("GET", "/api/modulos/cont-mat--restar", undefined, accessToken);
    expect(detalle.datos).toMatchObject({ isLocked: true, theoryItems: [], quizzes: [], missingDependencies: [{ id: "cont-mat--sumar", title: "Sumar" }] });
    const sumar = await pedir("GET", "/api/modulos/cont-mat--sumar", undefined, accessToken);
    expect(sumar.datos.isLocked).toBe(false);
    expect(sumar.datos.theoryItems[0].detail).toBe("Teoría de sumar");
  });

  it("al completar el prerrequisito se abre", async () => {
    const { accessToken, id } = await crearUsuario("ana");
    await ctx.almacen.ejecutar("progreso", "INSERT INTO progreso_modulos VALUES (?, 'cont-mat--sumar', 'completado', 100, ?)", [id, new Date().toISOString()]);
    const detalle = await pedir("GET", "/api/modulos/cont-mat--restar", undefined, accessToken);
    expect(detalle.datos.isLocked).toBe(false);
  });

  it("el profesor local ve la teoría pero no las resoluciones de módulos ajenos", async () => {
    const { accessToken } = await crearUsuario("profe", "TEACHER");
    const detalle = await pedir("GET", "/api/modulos/cont-mat--restar", undefined, accessToken);
    expect(detalle.datos.isLocked).toBe(false);
    for (const q of detalle.datos.quizzes) for (const p of q.questions) expect(p).not.toHaveProperty("answerKey");
  });
});

describe("vista de padre sin iniciar sesión", () => {
  it("lista alumnos y muestra solo la teoría desbloqueada", async () => {
    const ana = await crearUsuario("ana");
    await crearUsuario("profe", "TEACHER");
    const perfiles = await pedir("GET", "/api/offline/vista-padre");
    expect(perfiles.datos.items.map((p: { nombre: string }) => p.nombre)).toEqual(["Nombre ana"]);
    const modulos = await pedir("GET", `/api/offline/vista-padre/${ana.id}/modulos`);
    expect(modulos.datos.items.find((m: { id: string }) => m.id === "cont-mat--restar").isLocked).toBe(true);
    expect((await pedir("GET", `/api/offline/vista-padre/${ana.id}/modulos/cont-mat--sumar`)).datos.theoryItems[0].detail).toBe("Teoría de sumar");
    const bloqueado = await pedir("GET", `/api/offline/vista-padre/${ana.id}/modulos/cont-mat--restar`);
    expect(bloqueado.status).toBe(403);
    expect(JSON.stringify(bloqueado.datos)).not.toContain("Teoría de restar");
  });

  it("una cuenta de la plataforma que no lo permite no aparece", async () => {
    await ctx.almacen.ejecutar(
      "progreso",
      "INSERT INTO perfiles (id, tipo, rol, roles, username, nombre, hash, sal, iteraciones, mostrar_a_padres, creado) VALUES ('u1', 'plataforma', 'USER', '[\"USER\"]', 'beto', 'Beto', 'x', 'x', 1, 0, ?)",
      [new Date().toISOString()],
    );
    expect((await pedir("GET", "/api/offline/vista-padre")).datos.items).toEqual([]);
    expect((await pedir("GET", "/api/offline/vista-padre/u1/modulos")).status).toBe(404);
  });
});

describe("los datos del perfil en el dispositivo", () => {
  it("se descargan en JSON, sin la huella de la contraseña", async () => {
    const ana = await crearUsuario("ana");
    await pedir("PUT", "/api/modulos-favoritos/cont-mat--sumar", undefined, ana.accessToken);
    const r = await pedir("GET", "/api/offline/mis-datos", undefined, ana.accessToken);
    expect(r.status).toBe(200);
    expect(r.datos.perfil).toMatchObject({ username: "ana", tipo: "local", roles: ["USER"] });
    expect(r.datos.favoritos.map((f: { modulo_id: string }) => f.modulo_id)).toEqual(["cont-mat--sumar"]);
    const texto = JSON.stringify(r.datos);
    for (const campo of ["hash", "sal", "firma", "permiso"]) expect(texto).not.toContain(`"${campo}"`);
  });

  it("borrar el perfil pide la contraseña y no deja nada de esa persona", async () => {
    const ana = await crearUsuario("ana");
    const beto = await crearUsuario("beto");
    await pedir("PUT", "/api/modulos-favoritos/cont-mat--sumar", undefined, ana.accessToken);
    await pedir("PUT", "/api/modulos-favoritos/cont-mat--sumar", undefined, beto.accessToken);
    expect((await pedir("DELETE", "/api/offline/perfil", { password: "otra" }, ana.accessToken)).status).toBe(401);
    expect((await pedir("DELETE", "/api/offline/perfil", { password: "contraseña-larga" }, ana.accessToken)).status).toBe(200);
    expect((await pedir("GET", "/api/auth/me", undefined, ana.accessToken)).status).toBe(401);
    const perfiles = (await pedir("GET", "/api/offline/perfiles")).datos.items.map((p: { username: string }) => p.username);
    expect(perfiles).toEqual(["beto"]);
    const [{ n }] = await ctx.almacen.consulta<{ n: number }>("progreso", "SELECT COUNT(*) AS n FROM favoritos WHERE perfil_id = ?", [ana.id]);
    expect(n).toBe(0);
    // El contenido descargado es de todo el dispositivo: sigue ahí.
    expect((await pedir("GET", "/api/modulos/cont-mat--sumar", undefined, beto.accessToken)).status).toBe(200);
  });

  it("los fallos al borrar cuentan para la espera, como al entrar", async () => {
    const ana = await crearUsuario("ana");
    for (let i = 0; i < 5; i++) await pedir("DELETE", "/api/offline/perfil", { password: "otra" }, ana.accessToken);
    const r = await pedir("DELETE", "/api/offline/perfil", { password: "contraseña-larga" }, ana.accessToken);
    expect(r.status).toBe(429);
  });
});

describe("lo que necesita conexión", () => {
  it("responde 503 con código SIN_CONEXION", async () => {
    const { accessToken } = await crearUsuario("ana");
    const r = await pedir("GET", "/api/economia/saldos?usuarioId=x", undefined, accessToken);
    expect(r).toEqual({ status: 503, datos: expect.objectContaining({ code: "SIN_CONEXION" }) });
  });
});

describe("esquema", () => {
  it("preparar dos veces no repite migraciones", async () => {
    await prepararBases(ctx.almacen);
    const [v] = await ctx.almacen.consulta("progreso", "SELECT valor FROM meta WHERE clave = 'version'");
    expect(v.valor).toBe("4");
  });
});
