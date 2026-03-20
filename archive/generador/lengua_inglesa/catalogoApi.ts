import { createCatalogoApi } from "../core/createCatalogoApi";

const api = createCatalogoApi("lengua_inglesa");

export const getEnunciadoSync = api.getEnunciadoSync;
export const listarTemasLenguaInglesa = api.listar;
export const precargarTema = api.precargarTema;
export const precargarTemaPorId = api.precargarTemaPorId;
export const getSlugSync = api.getSlugSync;
export const registrarSlug = api.registrarSlug;
