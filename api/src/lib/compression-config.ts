import { constants } from "node:zlib";

type ConfigCompresion = {
  COMPRESSION: string;
  COMPRESSION_BROTLI_QUALITY: number;
  COMPRESSION_GZIP_LEVEL: number;
};

const acotar = (n: number, min: number, max: number, porDefecto: number) =>
  Number.isFinite(n) ? Math.min(Math.max(Math.trunc(n), min), max) : porDefecto;

/**
 * Opciones para `compression()` de Express, o `null` si la compresión está desactivada (`COMPRESSION=off`).
 *
 * Con navegadores reales el middleware elige Brotli (prefiere `br` sobre `gzip`) y, a la calidad por defecto de la
 * librería (4), una instancia rendía ~350 pedidos/s en /api/modulos; a calidad 1, ~720. Cuando Nginx comprime la API
 * (el pedido le llega a Node sin `Accept-Encoding`), conviene `COMPRESSION=off` y no pagar siquiera el middleware.
 */
export const opcionesCompresion = (cfg: ConfigCompresion) => {
  if (cfg.COMPRESSION === "off") return null;
  return {
    level: acotar(cfg.COMPRESSION_GZIP_LEVEL, 1, 9, 1),
    brotli: { params: { [constants.BROTLI_PARAM_QUALITY]: acotar(cfg.COMPRESSION_BROTLI_QUALITY, 0, 11, 1) } }
  };
};
