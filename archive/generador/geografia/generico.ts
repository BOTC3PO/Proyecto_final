// generico.ts — Geografía
// Factory principal para crear módulos de geografía a partir de
// la configuración proporcionada por el profesor.

import type { QuizTemplate, Question, SelectionConfig } from "../basic/types";
import type {
  GeografiaTemplateConfig,
  GeografiaModule,
  GeografiaModuleMetadata,
} from "./types";

// ================================================================
// CONFIGURACIÓN POR DEFECTO
// ================================================================

const GEOGRAFIA_DEFAULT_SELECTION: SelectionConfig = {
  mode: "random",
  seeded: true,
};

function buildGeografiaSettings(pool: Question[]): QuizTemplate["settings"] {
  const displayCountDefault = Math.min(5, Math.max(1, pool.length));
  return {
    poolSize: pool.length,
    displayCount: pool.length,
    displayCountDefault,
    feedbackPolicyDefault: "inmediato",
    selectionDefault: GEOGRAFIA_DEFAULT_SELECTION,
  };
}

// ================================================================
// FACTORY PRINCIPAL
// ================================================================

/**
 * Crea un GeografiaModule (template + metadatos pedagógicos) a partir
 * de la configuración provista por el profesor.
 *
 * El campo `config.pool` contiene las preguntas escritas manualmente.
 * Cada módulo abarca un único tema.
 *
 * @example
 * ```ts
 * const modulo = crearModuloGeografia({
 *   id: "geo_01_relieve",
 *   titulo: "Relieve: tipos, formación y distribución global",
 *   tags: ["relieve", "fisica", "secundario"],
 *   geo: { ... },
 *   pool: [
 *     {
 *       id: "geo01_mc_1",
 *       type: "mc",
 *       prompt: "¿Qué proceso forma principalmente las cordilleras?",
 *       options: [
 *         { text: "Erosión fluvial", correct: false, because: "La erosión desgasta, no forma cordilleras." },
 *         { text: "Movimiento de placas tectónicas", correct: true, because: "La colisión de placas genera orogénesis." },
 *         { text: "Deposición de sedimentos", correct: false, because: "Los sedimentos forman llanuras y deltas." },
 *         { text: "Actividad glacial", correct: false, because: "Los glaciares erosionan y modelan, pero no elevan el terreno." },
 *       ],
 *       explanation: "Las cordilleras se forman por orogénesis: la colisión de placas tectónicas pliega y eleva la corteza.",
 *       tags: ["relieve", "tectonica", "basico"],
 *     },
 *   ],
 * });
 * ```
 */
export function crearModuloGeografia(config: GeografiaTemplateConfig): GeografiaModule {
  const template: QuizTemplate = {
    schema: "quiz-basic/v1",
    metadata: {
      id: config.id,
      materia: "geografia",
      titulo: config.titulo,
      idioma: config.idioma ?? "es",
      tags: config.tags,
    },
    settings: buildGeografiaSettings(config.pool),
    pool: config.pool,
  };

  return {
    template,
    geo: config.geo,
  };
}

// ================================================================
// HELPER: MÓDULO VACÍO (PLACEHOLDER PARA EL PROFESOR)
// ================================================================

/**
 * Crea un módulo vacío listo para que el profesor agregue preguntas.
 * Útil para reservar un slot en el catálogo antes de tener contenido.
 */
export function crearModuloGeografiaVacio(
  id: string,
  titulo: string,
  geo: GeografiaModuleMetadata
): GeografiaModule {
  return crearModuloGeografia({
    id,
    titulo,
    tags: [geo.eje, "secundario", "pendiente"],
    geo,
    pool: [],
  });
}

// ================================================================
// HELPER: VALIDAR POOL
// ================================================================

/**
 * Verifica que un pool de preguntas no tenga IDs duplicados.
 * Lanza un error descriptivo si encuentra duplicados.
 */
export function validarPoolGeografia(id: string, pool: Question[]): void {
  const ids = pool.map((q) => q.id);
  const duplicates = ids.filter((qid, idx) => ids.indexOf(qid) !== idx);
  if (duplicates.length > 0) {
    throw new Error(
      `Módulo "${id}": IDs duplicados en el pool: ${duplicates.join(", ")}`
    );
  }
}
