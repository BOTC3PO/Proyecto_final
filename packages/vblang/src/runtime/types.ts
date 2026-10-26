import type {
  CampoKV,
  CorreccionModo,
  EtiquetaPedida,
  Expr,
  PasoItem,
  Plantilla,
  PuntajeParcialModo,
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
  /**
   * WO-11 — respuesta simbólica (expresión algebraica). El valor
   * evaluado debe ser un string (notación math.js). El adapter
   * propaga `questionType: "expresion"` y el server aplica
   * equivalencia simbólica en vez de igualdad de string o
   * tolerancia numérica. Ver
   * `docs/vblang/wo-11-eje-simbolico.md` §4.
   */
  respuestaExpr?: Expr;
  respuestasValidas?: Expr[];
  unidad?: string;
  tolerancia?: { valor: number; esPorcentaje: boolean };
  /**
   * F2-04: tolerancia absoluta complementaria. Número crudo en la misma
   * unidad que la respuesta. Default ausente = 0 (comportamiento previo
   * preservado). Criterio de corrección combinado:
   * `|r-e| ≤ max(|e|·tol_rel, tol_abs)`.
   */
  toleranciaAbs?: number;
  opciones?: number;
  opcionesExplicitas?: Expr[];
  enunciado: TextoOInterpolacion[];
  /**
   * Tarea 05/06: lista de variantes para el bloque `enunciados:`. Cuando está
   * presente, el runtime elige UNA variante con el PRNG de la simulación
   * ANTES de interpolar. Mutuamente excluyente con `enunciado` (validado en
   * el parser); si ambos faltan, el parse falla. Si está presente, gana
   * sobre el enunciado del generador asistido.
   */
  enunciados?: PasoItem[];
  pasos?: PasoItem[];
  /**
   * F2-02: pistas escalonadas (texto interpolable, en orden). El runtime las
   * materializa con los valores de la simulación. Costo/visibilidad NO viven
   * acá (es composición de quiz, igual que `points`).
   */
  pistas?: PasoItem[];
  /**
   * F2-03: explicación mostrada al alumno tras responder. Un único string
   * interpolable (mismo patrón que `enunciado:`). Si está presente, el adapter
   * la propaga a `ModuleQuizQuestion.explanation` con precedencia sobre el
   * fallback `pasos`. La decisión de CUÁNDO mostrarla (siempre, sólo tras mal)
   * queda fuera del DSL — es del renderer.
   */
  explicacion?: TextoOInterpolacion[];
  tipoInferido: TipoPregunta;
  generadorId?: string;
  /* Soporte parcial / no usado todavía en Sprint 4 */
  respuestaIso?: Expr;
  respuestaNombre?: Expr;
  respuestaOrden?: Expr;
  textoAnalizar?: Expr;
  etiquetasPedidas?: EtiquetaPedida[];
  mapa?: string;
  encuadre?: [number, number, number, number];
  dataset?: string;
  visual?: CampoKV[];
  /** WO07 — modo de corrección de una pregunta `abierta`. */
  correccion?: CorreccionModo;
  /** PLAN-E §21 Parte A — mc de selección múltiple (varias correctas). */
  multiple?: boolean;
  /** PLAN-E §21 Parte A/B — puntaje parcial (mc múltiple y analisis_spans). */
  puntajeParcial?: PuntajeParcialModo;
  /** PLAN-E §21 Parte B — clave de spans (desde/hasta/etiqueta como Exprs). */
  spansPedidos?: EtiquetaPedida[];
  /** PLAN-E §21 Parte B — etiquetas visibles para el alumno (Exprs → strings). */
  etiquetasDisponibles?: Expr[];
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
  /**
   * Tarea 06: fuerza el índice de variante a usar para el bloque
   * `enunciados:` (0-based). Solo lo usa el validator para garantizar
   * cobertura de variantes. Si no se provee, la variante se elige con el
   * PRNG de la simulación (consumiendo 1 valor). Si la plantilla NO
   * declara `enunciados:`, este campo se ignora.
   */
  forceVariant?: number;
}

export interface OpcionGenerada {
  texto: string;
  correcta: boolean;
}

export interface GenerationResult {
  tipo: TipoPregunta;
  enunciado: string;
  pasos?: string[];
  /**
   * F2-02: pistas escalonadas ya interpoladas, en orden. `undefined` si la
   * plantilla no declara `pistas:`. El alumno las pide de a una a cambio de
   * puntos (el costo se decide en la composición del quiz, no acá).
   */
  pistas?: string[];
  /**
   * F2-03: explicación ya interpolada. `undefined` si la plantilla no
   * declara `explicacion:`. El adapter la propaga a
   * `ModuleQuizQuestion.explanation` con precedencia sobre el fallback
   * construido desde `pasos`.
   */
  explicacion?: string;
  respuesta?: unknown;
  respuestasValidas?: unknown[];
  /**
   * WO-11 — respuesta simbólica evaluada. Mismo `string` que
   * `respuesta` cuando `tipo === "expresion"`, pero se mantiene
   * explícito para que el adapter la distinga del caso numérico
   * (en el futuro podría divergir — p. ej. respuestas múltiples).
   */
  respuestaExpr?: string;
  unidad?: string;
  tolerancia?: { valor: number; esPorcentaje: boolean };
  /**
   * F2-04: tolerancia absoluta materializada. `undefined` si la plantilla
   * no declara `tolerancia_abs:`. El adapter la propaga a
   * `ModuleQuizQuestion.toleranciaAbsoluta` con precedencia sobre el
   * fallback (0).
   */
  toleranciaAbs?: number;
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
  /** marcar_mapa: bounding box fijo [oeste, sur, este, norte]. */
  encuadre?: [number, number, number, number];
  /** marcar_mapa: modo de respuesta — "iso" compara por código ISO, "nombre" por name_es. */
  modoRespuesta?: "iso" | "nombre";
  /** marcar_mapa: código ISO correcto (ISO 3166-1 alpha-3). */
  respuestaIso?: string;
  /** marcar_mapa: nombre humano-legible del país correcto, opcional. */
  respuestaNombre?: string;
  /** analisis_sintactico / identificar_palabras: texto completo a analizar. */
  textoAnalizar?: string;
  /** analisis_sintactico: pares (palabra, etiqueta correcta). */
  etiquetasPedidas?: Array<{ palabra: string; etiqueta: string }>;
  /**
   * PLAN-E §21 Parte B — analisis_spans: clave correcta. Índices de PALABRA
   * (0-based, inclusive) sobre `textoAnalizar`; los spans pueden solaparse.
   */
  spansPedidos?: Array<{ desde: number; hasta: number; etiqueta: string }>;
  /** analisis_spans: etiquetas que ve el alumno (correctas + distractores). */
  etiquetasDisponibles?: string[];

  /**
   * WO07 — abierta: modo de corrección. `ninguna` (no puntúa) o `manual` (la
   * corrige el profe). Las preguntas `abierta` no tienen `respuesta`.
   */
  correccion?: CorreccionModo;

  /**
   * PLAN-E §21 Parte A — mc de selección múltiple. `multiple: true` implica
   * que `opciones` puede tener VARIAS correctas; el adapter arma
   * `answerKey` como array y el player usa checkboxes.
   */
  multiple?: boolean;
  /** PLAN-E §21 Parte A — modo de puntaje (default todo_o_nada). */
  puntajeParcial?: PuntajeParcialModo;
}
