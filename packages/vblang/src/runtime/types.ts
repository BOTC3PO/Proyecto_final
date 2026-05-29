import type {
  CampoKV,
  EtiquetaPedida,
  Expr,
  PasoItem,
  Plantilla,
  TextoOInterpolacion,
  TipoPregunta,
  VariableDecl,
} from "../parser/ast.js";
import type { VisualSpec } from "../types/visual.js";
import type { GeneradorAsistidoProvider } from "./provider.js";

export interface CompiledPlantilla {
  plantilla: Plantilla;
  metadata: Record<string, unknown>;
  declaracionesVariables: VariableDecl[];
  restricciones: Expr[];
  respuesta?: Expr;
  respuestasValidas?: Expr[];
  unidad?: string;
  tolerancia?: { valor: number; esPorcentaje: boolean };
  opciones?: number;
  opcionesExplicitas?: Expr[];
  enunciado: TextoOInterpolacion[];
  pasos?: PasoItem[];
  tipoInferido: TipoPregunta;
  generadorId?: string;
  /* Soporte parcial / no usado todavía en Sprint 4 */
  respuestaIso?: Expr;
  respuestaNombre?: Expr;
  respuestaOrden?: Expr;
  textoAnalizar?: Expr;
  etiquetasPedidas?: EtiquetaPedida[];
  mapa?: string;
  dataset?: string;
  visual?: CampoKV[];
}

export interface GenerationOptions {
  seed: string;
  maxRetries?: number;
  /**
   * Provider para resolver `generador: <id>`. Si la plantilla NO usa
   * `generador:`, el provider se ignora. Si la plantilla SÍ lo usa y no se
   * pasa provider, `generate()` lanza EvalError.
   */
  provider?: GeneradorAsistidoProvider;
}

export interface OpcionGenerada {
  texto: string;
  correcta: boolean;
}

export interface GenerationResult {
  tipo: TipoPregunta;
  enunciado: string;
  pasos?: string[];
  respuesta?: unknown;
  respuestasValidas?: unknown[];
  unidad?: string;
  tolerancia?: { valor: number; esPorcentaje: boolean };
  opciones?: OpcionGenerada[];
  variables: Record<string, unknown>;
  seed: string;
  intentos: number;

  /**
   * Visual asociado al ejercicio. Hoy lo aporta el generador asistido
   * (`generador:`); el adapter lo copia a `ModuleQuizQuestion.visualSpec`.
   */
  visual?: VisualSpec;

  // Sprint 9A — tipos especiales
  /** ordenar: items presentados al alumno (resultado de evaluar opciones_explicitas). */
  items?: string[];
  /** ordenar: orden correcto (resultado de evaluar respuesta_orden). */
  ordenCorrecto?: string[];
  /** marcar_mapa: identificador del mapa a cargar. */
  mapaId?: string;
  /** marcar_mapa: código ISO correcto (ISO 3166-1 alpha-3). */
  respuestaIso?: string;
  /** marcar_mapa: nombre humano-legible del país correcto, opcional. */
  respuestaNombre?: string;
  /** analisis_sintactico / identificar_palabras: texto completo a analizar. */
  textoAnalizar?: string;
  /** analisis_sintactico: pares (palabra, etiqueta correcta). */
  etiquetasPedidas?: Array<{ palabra: string; etiqueta: string }>;
}
