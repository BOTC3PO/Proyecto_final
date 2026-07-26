import "@testing-library/jest-dom/vitest";

/**
 * E4 — ningún test debería salir a la red.
 *
 * Sin esto, cualquier `fetch` sin mockear iba a `127.0.0.1:3000`: ensuciaba
 * la salida con ECONNREFUSED y, sobre todo, aportaba latencia real que hacía
 * fallar specs por timeout sólo en la corrida completa (pasaban aislados).
 * Ahora falla rápido y con un mensaje que dice qué falta mockear.
 */
const sinRed = () =>
  Promise.reject(
    new Error(
      "Un test intentó salir a la red. Mockeá el módulo que hace la llamada " +
        "(p. ej. vi.mock de `lib/api` o del servicio correspondiente).",
    ),
  );

globalThis.fetch = sinRed as unknown as typeof fetch;
