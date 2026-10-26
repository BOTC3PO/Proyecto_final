import {
  MAPA_CAPA_DEFAULT_ID,
  makeMapaCapaDefault,
  type MapaConfig,
  type MapaAnotacion,
} from "./types";

/**
 * Migra una anotación `flecha {desde, hasta}` a la nueva forma multipunto
 * `ruta { puntos: [desde, hasta], flechaFinal: true }`. Si la anotación ya es
 * `ruta` (o de cualquier otro tipo), no se toca. Idempotente: una `ruta` no
 * se vuelve a migrar.
 */
function migrateAnotacion(a: MapaAnotacion): MapaAnotacion {
  if (a.tipo !== "flecha") return a;
  const { id, desde, hasta, etiqueta, color, capaId, grosor } = a;
  return {
    id,
    tipo: "ruta",
    puntos: [desde, hasta],
    flechaFinal: true,
    ...(etiqueta !== undefined ? { etiqueta } : {}),
    ...(color !== undefined ? { color } : {}),
    ...(capaId !== undefined ? { capaId } : {}),
    ...(grosor !== undefined ? { grosor } : {}),
  };
}

/**
 * Migra una MapaConfig vieja (sin `capas`) a la nueva forma con una capa
 * default. Idempotente: si ya tiene capas válidas, no hace nada.
 * Además encadena `migrateAnotaciones` (flecha → ruta) — ver más abajo.
 */
export function migrateMapaConfig(input: MapaConfig): MapaConfig {
  const withCapas: MapaConfig = (() => {
    if (input.capas && input.capas.length > 0) {
      const firstCapaId = input.capas[0].id;
      const needsFix = input.anotaciones.some((a) => !a.capaId);
      if (!needsFix) return input;
      const anotaciones: MapaAnotacion[] = input.anotaciones.map((a) =>
        a.capaId ? a : ({ ...a, capaId: firstCapaId } as MapaAnotacion),
      );
      return { ...input, anotaciones };
    }

    const capaDefault = makeMapaCapaDefault();
    const anotaciones: MapaAnotacion[] = input.anotaciones.map((a) =>
      ({ ...a, capaId: MAPA_CAPA_DEFAULT_ID } as MapaAnotacion),
    );
    return {
      ...input,
      capas: [capaDefault],
      anotaciones,
    };
  })();

  const anotaciones = migrateAnotaciones(withCapas.anotaciones);
  if (anotaciones === withCapas.anotaciones) return withCapas;
  return { ...withCapas, anotaciones };
}

/**
 * Aplica todas las migraciones de anotaciones (hoy: `flecha` → `ruta`).
 * Idempotente.
 */
export function migrateAnotaciones(anotaciones: MapaAnotacion[]): MapaAnotacion[] {
  let changed = false;
  const out = anotaciones.map((a) => {
    if (a.tipo !== "flecha") return a;
    changed = true;
    return migrateAnotacion(a);
  });
  return changed ? out : anotaciones;
}

/**
 * Genera un id de capa nuevo razonablemente único.
 */
export function makeCapaId(): string {
  return `capa-${Math.random().toString(36).slice(2, 10)}`;
}
