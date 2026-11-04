/**
 * API local: atiende dentro de la app las llamadas que la web le haría al servidor. Lo que no está implementado sin
 * conexión responde 503 con `code: "SIN_CONEXION"`, y la web lo muestra como un error común.
 */
import type { Contexto } from "./contexto";
import { cerrarSesion, iniciarSesion, listarPerfiles, registrarLocal, renovar, segundoPasoDeIngreso, yo } from "./cuentas";
import { json, sinConexion } from "./http";
import { buscar, idiomas, prefijo, salud } from "./diccionario";
import { crearIntento, entregar, eventosDeIntento, listarIntentos, responder, resumenDeIntentos, verIntento } from "./intentos";
import { listarModulos, verModulo, verPlantilla } from "./modulos";
import { actualizarMiEscuela, descargarPaquete, importarPaquete, listarPaquetes, quitarPaquete } from "./paquetes";
import { cambiarPerfil, solicitarRol } from "./perfil";
import {
  listarFavoritos, listarProgreso, marcarFavorito, perfilPropio, progresoEstudiante, quitarFavorito, tareas, valoraciones,
} from "./progreso";
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
  ["GET", /^\/api\/offline\/paquetes$/, listarPaquetes],
  ["POST", /^\/api\/offline\/paquetes\/importar$/, importarPaquete],
  ["POST", /^\/api\/offline\/paquetes\/([^/]+)\/descargar$/, descargarPaquete],
  ["DELETE", /^\/api\/offline\/paquetes\/([^/]+)$/, quitarPaquete],
  ["POST", /^\/api\/offline\/escuela\/actualizar$/, actualizarMiEscuela],
  ["GET", /^\/api\/dictionary\/languages$/, idiomas],
  ["GET", /^\/api\/dictionary\/health$/, salud],
  ["GET", /^\/api\/dictionary\/lookup$/, buscar],
  ["GET", /^\/api\/dictionary\/prefix$/, prefijo],
  ["GET", /^\/api\/modulos$/, listarModulos],
  ["GET", /^\/api\/modulos\/([^/]+)$/, verModulo],
  ["GET", /^\/api\/plantillas\/([^/]+)$/, verPlantilla],
  ["POST", /^\/api\/quiz-attempts$/, crearIntento],
  ["GET", /^\/api\/quiz-attempts$/, listarIntentos],
  ["GET", /^\/api\/quiz-attempts\/summary$/, resumenDeIntentos],
  ["GET", /^\/api\/quiz-attempts\/([^/]+)$/, verIntento],
  ["POST", /^\/api\/quiz-attempts\/([^/]+)\/answer$/, responder],
  ["PATCH", /^\/api\/quiz-attempts\/([^/]+)$/, eventosDeIntento],
  ["POST", /^\/api\/quiz-attempts\/([^/]+)\/submit$/, entregar],
  ["GET", /^\/api\/progreso$/, listarProgreso],
  ["GET", /^\/api\/progreso\/estudiante$/, progresoEstudiante],
  ["GET", /^\/api\/perfil$/, perfilPropio],
  ["GET", /^\/api\/modulos-favoritos$/, listarFavoritos],
  ["PUT", /^\/api\/modulos-favoritos\/([^/]+)$/, marcarFavorito],
  ["DELETE", /^\/api\/modulos-favoritos\/([^/]+)$/, quitarFavorito],
  ["GET", /^\/api\/modulos-valoraciones$/, valoraciones],
  ["GET", /^\/api\/tareas$/, tareas],
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
