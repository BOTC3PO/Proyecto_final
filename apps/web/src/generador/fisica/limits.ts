import { getCatalogoTemaFisicaSync } from "./catalogoApi";

export type Dificultad = "basico" | "intermedio" | "avanzado";
export type Rango = readonly [number, number];
export type FallbackPorNivel = Record<Dificultad, Rango>;

export function getFisicaTemaLimitsSync(temaSlug: string): Record<string, unknown> {
  return getCatalogoTemaFisicaSync(temaSlug).limits ?? {};
}

export function getRango(
  limits: Record<string, unknown> | null | undefined,
  nivel: Dificultad,
  key: string,
  fallback: Rango,
): Rango {
  const porDificultad = (limits?.porDificultad as Record<string, unknown> | undefined)?.[nivel] as
    | Record<string, unknown>
    | undefined;
  const rangos = porDificultad?.rangos as Record<string, unknown> | undefined;
  const value = rangos?.[key];
  if (
    Array.isArray(value) &&
    value.length === 2 &&
    typeof value[0] === "number" &&
    Number.isFinite(value[0]) &&
    typeof value[1] === "number" &&
    Number.isFinite(value[1])
  ) {
    return [value[0], value[1]];
  }
  return fallback;
}

export function randIntFrom(
  limits: Record<string, unknown> | null | undefined,
  nivel: Dificultad,
  key: string,
  generator: { randomInt: (min: number, max: number) => number },
  fallback: Rango,
): number {
  const [min, max] = getRango(limits, nivel, key, fallback);
  return generator.randomInt(min, max);
}

export function randIntFromPorNivel(
  limits: Record<string, unknown> | null | undefined,
  nivel: Dificultad,
  key: string,
  generator: { randomInt: (min: number, max: number) => number },
  fallbackPorNivel: FallbackPorNivel,
): number {
  return randIntFrom(limits, nivel, key, generator, fallbackPorNivel[nivel]);
}
