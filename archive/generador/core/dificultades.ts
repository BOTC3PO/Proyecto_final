import type { Dificultad as DificultadCore } from "./types";

export type MateriaUI = "matematica" | "quimica" | "economia" | "fisica";

export const DIFICULTADES_CORE: readonly DificultadCore[] = [
  "basico",
  "intermedio",
  "avanzado",
];

export const DIFICULTADES_POR_MATERIA: Record<
  MateriaUI,
  readonly DificultadCore[]
> = {
  matematica: DIFICULTADES_CORE,
  quimica: DIFICULTADES_CORE,
  economia: DIFICULTADES_CORE,
  fisica: DIFICULTADES_CORE,
};
