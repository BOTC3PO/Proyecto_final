/**
 * API local: atiende dentro de la app las llamadas que la web le haría al servidor. Lo que no está implementado sin
 * conexión responde 503 con `code: "SIN_CONEXION"`, y la web lo muestra como un error común.
 */
import type { Contexto } from "./contexto";
import { cerrarSesion, iniciarSesion, listarPerfiles, registrarLocal, renovar, segundoPasoDeIngreso, yo } from "./cuentas";
import { json, sinConexion } from "./http";
import { listarModulos, verModulo } from "./modulos";
import { cambiarPerfil, solicitarRol } from "./perfil";
import { modulosParaPadres, perfilesParaPadres, teoriaParaPadres } from "./vista-padre";

type Manejador = (ctx: Contexto, req: Request, ...params: string[]) => Promise<Response> | Response;
const RUTAS: [string, RegExp, Manejador][] = [
  ["GET", /^\/health$/, () => json({ ok: true, sinConexion: true })],
  ["POST", /^\/api\/auth\/login$/, iniciarSesion],
  ["POST", /^\/api\/auth\/2fa\/login$/, segundoPasoDeIngreso],
  ["POST", /^\/api\/auth\/register$/, registrarLocal],
  ["POST", /^\/api\/auth\/refresh$/, renovar],
  ["POST", /^\/api\/auth\/logout$/, cerrarSesion],
  ["GET", /^\/api\/(?:auth\/)?me$/, yo],
  ["GET", /^\/api\/offline\/perfiles$/, listarPerfiles],
  ["PATCH", /^\/api\/offline\/perfil$/, cambiarPerfil],
  ["POST", /^\/api\/solicitar-rol$/, solicitarRol],
  ["GET", /^\/api\/modulos$/, listarModulos],
  ["GET", /^\/api\/modulos\/([^/]+)$/, verModulo],
  ["GET", /^\/api\/offline\/vista-padre$/, perfilesParaPadres],
  ["GET", /^\/api\/offline\/vista-padre\/([^/]+)\/modulos$/, modulosParaPadres],
  ["GET", /^\/api\/offline\/vista-padre\/([^/]+)\/modulos\/([^/]+)$/, teoriaParaPadres],
];

export function crearServidorLocal(ctx: Contexto) {
  return async function atender(req: Request): Promise<Response> {
    const ruta = new URL(req.url).pathname;
    for (const [metodo, patron, manejador] of RUTAS) {
      const m = req.method === metodo ? patron.exec(ruta) : null;
      if (m) {
        try {
          return await manejador(ctx, req, ...m.slice(1).map(decodeURIComponent));
        } catch (e) {
          console.error("API local:", ruta, e);
          return json({ error: "Error interno de la app" }, 500);
        }
      }
    }
    // Sirve para ver qué falta implementar sin conexión (consola del WebView).
    console.info("API local: sin conexión →", req.method, ruta);
    return sinConexion();
  };
}
