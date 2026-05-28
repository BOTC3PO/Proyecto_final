import {
  MAPA_CAPA_DEFAULT_ID,
  makeMapaCapaDefault,
  type MapaConfig,
  type MapaAnotacion,
} from "./types";

/**
 * Migra una MapaConfig vieja (sin `capas`) a la nueva forma con una capa
 * default. Idempotente: si ya tiene capas válidas, no hace nada.
 */
export function migrateMapaConfig(input: MapaConfig): MapaConfig {
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
}

/**
 * Genera un id de capa nuevo razonablemente único.
 */
export function makeCapaId(): string {
  return `capa-${Math.random().toString(36).slice(2, 10)}`;
}
