// types.ts — Módulo de Geografía (nivel secundario)
// Tipos pedagógicos y estructurales del módulo.

import type { Question, QuizTemplate } from "../basic/types";

// ================================================================
// EJES TEMÁTICOS
// ================================================================

export type GeografiaEje =
  | "geografia_fisica"
  | "geografia_politica"
  | "geografia_humana_economica"
  | "cartografia"
  | "dinamicas_globales";

export const GEOGRAFIA_EJE_LABELS: Record<GeografiaEje, string> = {
  geografia_fisica: "Geografía Física",
  geografia_politica: "Geografía Política",
  geografia_humana_economica: "Geografía Humana y Económica",
  cartografia: "Cartografía",
  dinamicas_globales: "Dinámicas Globales Contemporáneas",
};

// ================================================================
// METADATOS PEDAGÓGICOS
// ================================================================

export interface GeografiaObjetivo {
  /** Código identificador del objetivo, ej. "GF1-OA3" */
  codigo: string;
  /** Descripción del objetivo de aprendizaje */
  descripcion: string;
}

export interface GeografiaCompetencia {
  /** Código de la competencia, ej. "GEO-C2" */
  codigo: string;
  /** Descripción de la competencia que desarrolla el alumno */
  descripcion: string;
}

export interface GeografiaCriterioEvaluacion {
  /** Código del criterio, ej. "GF1-CE2" */
  codigo: string;
  /** Descripción del criterio de evaluación */
  descripcion: string;
  /** Nivel en que se espera el desempeño */
  nivel: "basico" | "intermedio" | "avanzado";
}

export interface GeografiaActividad {
  /** Tipo de actividad: análisis, mapeo, debate, estudio de caso, etc. */
  tipo: "analisis" | "mapeo" | "debate" | "estudio_caso" | "investigacion" | "comparacion";
  descripcion: string;
}

// ================================================================
// METADATOS DEL MÓDULO
// ================================================================

export interface GeografiaModuleMetadata {
  /** Eje temático al que pertenece el módulo */
  eje: GeografiaEje;
  /** Número de eje (1–5) */
  ejeNumero: 1 | 2 | 3 | 4 | 5;
  /** Número global del tema (1–23) */
  temaNumero: number;
  /** Número del tema dentro del eje */
  temaNumeroEnEje: number;
  /** Nivel educativo */
  nivel: "secundario";
  /** Objetivos de aprendizaje del tema */
  objetivos: GeografiaObjetivo[];
  /** Competencias que el estudiante debe adquirir */
  competencias: GeografiaCompetencia[];
  /** Criterios de evaluación medibles */
  criteriosEvaluacion: GeografiaCriterioEvaluacion[];
  /** Relaciones causa-efecto destacadas en el tema */
  relacionesCausaEfecto?: string[];
  /** Caso de estudio real recomendado para el tema */
  casoEstudioSugerido?: string;
  /** IDs de otros temas relacionados */
  relacionConOtrosTemas?: string[];
  /** Actividades sugeridas para el aula */
  actividadesSugeridas?: GeografiaActividad[];
}

// ================================================================
// MÓDULO COMPLETO
// ================================================================

/**
 * Unidad mínima del módulo de Geografía.
 * Combina el QuizTemplate (preguntas del profesor) con los
 * metadatos pedagógicos (objetivos, competencias, evaluación).
 */
export interface GeografiaModule {
  /** Template de preguntas compatible con QuizGenerator */
  template: QuizTemplate;
  /** Metadatos pedagógicos del módulo */
  geo: GeografiaModuleMetadata;
}

// ================================================================
// CONFIGURACIÓN PARA LA FACTORY
// ================================================================

/**
 * Configuración que el profesor completa para crear un módulo.
 * El `pool` contiene las preguntas escritas manualmente.
 */
export interface GeografiaTemplateConfig {
  /** ID único del módulo, ej. "geo_01_relieve" */
  id: string;
  /** Título del módulo */
  titulo: string;
  /** Idioma, por defecto "es" */
  idioma?: string;
  /** Tags para búsqueda y filtrado */
  tags: string[];
  /** Metadatos pedagógicos */
  geo: GeografiaModuleMetadata;
  /**
   * Pool de preguntas escritas por el profesor.
   * Acepta preguntas tipo mc (opción múltiple), tf (verdadero/falso)
   * y match (relacionar columnas).
   */
  pool: Question[];
}

// ================================================================
// COMPETENCIAS GLOBALES DEL MÓDULO DE GEOGRAFÍA
// Referencia para todos los temas.
// ================================================================

export const COMPETENCIAS_GEOGRAFIA: Record<string, GeografiaCompetencia> = {
  "GEO-C1": {
    codigo: "GEO-C1",
    descripcion:
      "Interpretación cartográfica: lee e interpreta mapas físicos, " +
      "políticos y temáticos de diferentes tipos y escalas.",
  },
  "GEO-C2": {
    codigo: "GEO-C2",
    descripcion:
      "Análisis espacial: analiza la distribución espacial de fenómenos " +
      "geográficos y establece patrones regionales.",
  },
  "GEO-C3": {
    codigo: "GEO-C3",
    descripcion:
      "Pensamiento sistémico: comprende las interrelaciones entre " +
      "ambiente, sociedad y economía en distintas escalas territoriales.",
  },
  "GEO-C4": {
    codigo: "GEO-C4",
    descripcion:
      "Análisis causal: explica causas y consecuencias de fenómenos " +
      "geográficos naturales y sociales.",
  },
  "GEO-C5": {
    codigo: "GEO-C5",
    descripcion:
      "Conciencia territorial: valora la diversidad geográfica, reconoce " +
      "las desigualdades regionales y sus factores explicativos.",
  },
};
