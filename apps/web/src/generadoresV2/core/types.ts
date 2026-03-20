import type { PRNG } from "./prng";
// ── Materias ──────────────────────────────────────────────────────
export type MateriaConMotor = "fisica" | "matematicas" | "quimica" | "economia";
export type Materia = MateriaConMotor | string;
// ── Dificultad ────────────────────────────────────────────────────
export type Dificultad = "basico" | "intermedio" | "avanzado";
export const DIFICULTAD_LABELS: Record<Dificultad, string> = {
  basico: "Básico",
  intermedio: "Intermedio",
  avanzado: "Avanzado",
};
export function dificultadFactor(d: Dificultad): number {
  return d === "basico" ? 0.8 : d === "avanzado" ? 1.2 : 1;
}
export function ajustarRango(min: number, max: number, d: Dificultad, minFloor = 1): [number, number] {
  const f = dificultadFactor(d);
  const lo = Math.max(minFloor, Math.round(min * f));
  const hi = Math.max(lo, Math.round(max * f));
  return [lo, hi];
}
// ── Tipos de ejercicio ────────────────────────────────────────────
export interface LineChartSpec {
  kind: "line-chart";
  title?: string;
  xLabel?: string;
  yLabel?: string;
  xUnit?: string;
  yUnit?: string;
  series: {
    id: string;
    label: string;
    color?: string;
    points: { x: number; y: number }[];
  }[];
  annotations?: {
    id: string;
    x: number;
    y?: number;
    label: string;
    color?: string;
  }[];
}
export interface VectorDiagramSpec {
  kind: "vector-diagram";
  vectors: { id: string; label: string; dx: number; dy: number; color?: string }[];
}
export interface CircuitSpec {
  kind: "circuit";
  elements: { id: string; type: string; value?: number; unit?: string }[];
}
export interface StaticImageSpec {
  kind: "static-image";
  src: string;
  alt: string;
  width?: number;
  height?: number;
}
export type VisualSpec =
  | LineChartSpec
  | VectorDiagramSpec
  | CircuitSpec
  | StaticImageSpec;
export interface EjercicioBase {
  id: string;
  materia: Materia;
  subtipo: string;
  dificultad: Dificultad;
  generatorId?: string;
  generatorVersion?: number;
  visual?: VisualSpec;
}
export interface EjercicioQuiz extends EjercicioBase {
  tipo: "quiz";
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion?: string;
  datos?: Record<string, unknown>;
  pasos?: string[];
}
export interface EjercicioNumerico extends EjercicioBase {
  tipo: "numerico";
  enunciado: string;
  datos: Record<string, number>;
  unidades?: Record<string, string>;
  resultado: number | string | number[];
  toleranciaRelativa?: number;
  pasos?: string[];
}
export interface EjercicioCompletar extends EjercicioBase {
  tipo: "completar";
  enunciado: string;
  respuestaCorrecta: string;
  explicacion?: string;
}
export type Ejercicio = EjercicioQuiz | EjercicioNumerico | EjercicioCompletar;
// ── Calculadora ───────────────────────────────────────────────────
export interface CalculoRequest {
  tipo: string;
  payload: Record<string, unknown>;
}
export interface CalculoResponse {
  resultado: number | string | number[];
  pasos: string[];
}
export interface Calculator {
  calcular(req: CalculoRequest): CalculoResponse;
}
// ── Generador ─────────────────────────────────────────────────────
export type GeneratorFn = (
  dificultad?: Dificultad,
  prng?: PRNG
) => Ejercicio;
export interface GeneratorDescriptor {
  id: string;
  version: number;
  materia: Materia;
  subtipos: string[];
  generate: GeneratorFn;
}
// ── Registro dinámico de materias ─────────────────────────────────
export type MateriaCapacidad = "basic" | "calculado" | "mixto";
export interface TemaManifest {
  id: string;
  label: string;
  subtipos?: string[];
  dificultades: Dificultad[];
}
export interface MateriaManifest {
  id: string;
  label: string;
  capacidad: MateriaCapacidad;
  temas: TemaManifest[];
}
