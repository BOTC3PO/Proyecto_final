import type { Dificultad as DificultadCore } from "./types";

export type MateriaUI = "matematica" | "quimica" | "economia" | "fisica";

export const DIFICULTADES_CORE: readonly DificultadCore[] = [
  "basico",
  "intermedio",
  "avanzado",
  "Legendario",
  "Divino",
];

export const DIFICULTADES_POR_MATERIA: Record<
  MateriaUI,
  readonly string[]
> = {
  matematica: ["facil", "media", "dificil"],
  quimica: ["facil", "media", "dificil"],
  economia: DIFICULTADES_CORE,
  fisica: DIFICULTADES_CORE,
};
