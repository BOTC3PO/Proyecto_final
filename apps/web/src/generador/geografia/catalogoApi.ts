import { createCatalogoApi } from "../core/createCatalogoApi";

const api = createCatalogoApi("geografia");

export const getEnunciadoSync = api.getEnunciadoSync;
export const listarTemasGeografia = api.listar;
export const precargarTema = api.precargarTema;
export const precargarTemaPorId = api.precargarTemaPorId;
export const getSlugSync = api.getSlugSync;
export const registrarSlug = api.registrarSlug;
