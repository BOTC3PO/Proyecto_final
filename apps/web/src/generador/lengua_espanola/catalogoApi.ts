import { createCatalogoApi } from "../core/createCatalogoApi";

const api = createCatalogoApi("lengua_espanola");

export const getEnunciadoSync = api.getEnunciadoSync;
export const listarTemasLenguaEspanola = api.listar;
export const precargarTema = api.precargarTema;
export const precargarTemaPorId = api.precargarTemaPorId;
export const getSlugSync = api.getSlugSync;
export const registrarSlug = api.registrarSlug;
