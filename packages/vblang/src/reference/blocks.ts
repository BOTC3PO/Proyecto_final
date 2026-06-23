/**
 * F7-01 — Referencia de bloques del DSL, derivada de `BLOCK_KEYWORDS`
 * (lexer/tokens.ts), que es a su vez la lista que usa `parseBloque`
 * (parser/blocks.ts, switch de 26 casos) para reconocer cada bloque.
 *
 * `RESUMENES_BLOQUES` es la única prosa fija de este módulo: un resumen de
 * una línea por bloque. El test de drift (`tests/reference/drift.test.ts`)
 * verifica que sus claves coincidan exactamente con `BLOCK_KEYWORDS` — si se
 * agrega/quita un bloque en el lexer sin actualizar este mapa, el test falla.
 */
import { BLOCK_KEYWORDS } from "../lexer/tokens.js";

export interface BloqueReferencia {
  nombre: string;
  resumen: string;
}

export interface DiffResult {
  /** Presentes en el código pero sin entrada en la referencia. */
  faltantes: string[];
  /** Con entrada en la referencia pero inexistentes en el código. */
  sobrantes: string[];
}

/** Lista de nombres de bloque reconocidos por el lexer/parser, ordenada. */
export const BLOCK_NAMES: readonly string[] = Object.keys(BLOCK_KEYWORDS).sort();

export const RESUMENES_BLOQUES: Record<string, string> = {
  metadata: "Metadatos descriptivos de la plantilla (materia, tema, etc.); no afecta la generación.",
  variables: "Declara las variables aleatorias del ejercicio y cómo se sortean.",
  restricciones: "Lista de condiciones booleanas que deben cumplirse; si alguna falla, se vuelve a sortear.",
  respuesta: "Expresión que calcula la respuesta correcta.",
  // WO-11 — respuesta simbólica. Mismo rol que `respuesta:` pero se
  // evalúa a un string con notación math.js y se compara por
  // equivalencia simbólica (numérica + algebraica).
  respuesta_expr: "Expresión que evalúa a un string con la representación simbólica esperada (tipo `expresion`); se compara por equivalencia algebraica.",
  respuestas_validas: "Lista de respuestas aceptadas como correctas (tipos completar / identificar_palabras).",
  unidad: "Unidad esperada en la respuesta numérica (ej.: m/s).",
  tolerancia: "Margen relativo aceptado al comparar la respuesta numérica, en porcentaje.",
  tolerancia_abs: "Margen absoluto aceptado al comparar la respuesta numérica (sin %); complementa `tolerancia`.",
  opciones: "Cantidad de alternativas a generar automáticamente para preguntas de opción múltiple.",
  tipo: "Tipo de pregunta explícito (mc, vf, completar, ordenar, etc.).",
  enunciado: "Texto de la consigna, interpolable con `{variable}`.",
  enunciados: "Lista de enunciados alternativos; se sortea uno para presentar al alumno.",
  pistas: "Lista (o texto único) de pistas opcionales mostradas al alumno.",
  pasos: "Lista de pasos de la resolución, mostrados como explicación detallada.",
  explicacion: "Texto único interpolable mostrado al alumno después de responder.",
  visual: "Especificación de un recurso visual asociado (gráfico, imagen, circuito, línea de tiempo, etc.).",
  generador: "Asocia la plantilla a un generador V2 existente (compatibilidad con el catálogo histórico).",
  dataset: "Nombre de un dataset registrado del que se pueden sortear filas con `uno_de(...)`.",
  mapa: "Identificador del mapa interactivo a usar (tipo marcar_mapa).",
  respuesta_iso: "Código ISO correcto esperado (tipo marcar_mapa).",
  respuesta_nombre: "Nombre correcto esperado, alternativa a `respuesta_iso` (tipo marcar_mapa).",
  respuesta_orden: "Arreglo con el orden correcto esperado (tipo ordenar).",
  texto_analizar: "Texto que el alumno debe analizar (tipos analisis_sintactico / identificar_palabras).",
  etiquetas_pedidas: "Lista de pares palabra → etiqueta esperados (tipo analisis_sintactico).",
  opciones_explicitas: "Lista fija de opciones a presentar al alumno (tipos mc / ordenar).",
  correccion: "Modo de corrección de preguntas abiertas: `ninguna` (informativa) o `manual` (la corrige el docente).",
};

/** Resúmenes de bloque, en el orden de `BLOCK_NAMES`. */
export function listaBloques(): BloqueReferencia[] {
  return BLOCK_NAMES.map((nombre) => ({
    nombre,
    resumen: RESUMENES_BLOQUES[nombre] ?? "(sin descripción)",
  }));
}

/**
 * Compara `actuales` (por defecto, los bloques reales del lexer) contra las
 * claves de `RESUMENES_BLOQUES`.
 */
export function diffBloques(
  actuales: readonly string[] = BLOCK_NAMES,
): DiffResult {
  const referencia = new Set(Object.keys(RESUMENES_BLOQUES));
  const real = new Set(actuales);
  return {
    faltantes: [...real].filter((b) => !referencia.has(b)).sort(),
    sobrantes: [...referencia].filter((b) => !real.has(b)).sort(),
  };
}
