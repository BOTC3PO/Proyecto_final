/**
 * L8 — la web compilada dentro de la app sin conexión (apps/offline) se arma con `VITE_APP_SIN_CONEXION=true`.
 * Las pantallas propias de la app (paquetes, vista de padre) solo se muestran ahí.
 */
export const esAppSinConexion = import.meta.env.VITE_APP_SIN_CONEXION === "true";
