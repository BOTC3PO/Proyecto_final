export interface Loc {
  line: number;
  col: number;
  endLine: number;
  endCol: number;
}

export type BinOpKind =
  | "+"
  | "-"
  | "*"
  | "/"
  | "%"
  | "^"
  | "=="
  | "!="
  | "<"
  | ">"
  | "<="
  | ">="
  | "y"
  | "o";

export interface NumLit {
  kind: "num";
  value: number;
  loc: Loc;
}

export interface StringLit {
  kind: "str";
  value: string;
  loc: Loc;
}

export interface BoolLit {
  kind: "bool";
  value: boolean;
  loc: Loc;
}

export interface NullLit {
  kind: "null";
  loc: Loc;
}

export interface ArrayLit {
  kind: "array";
  items: Expr[];
  loc: Loc;
}

export interface ObjectEntry {
  key: string;
  value: Expr;
  loc: Loc;
}

export interface ObjectLit {
  kind: "object";
  entries: ObjectEntry[];
  loc: Loc;
}

export interface RangeIter {
  kind: "range";
  from: Expr;
  to: Expr;
}

export interface ForComprehension {
  kind: "for_comp";
  variable: string;
  iterable: Expr | RangeIter;
  body: Expr;
  loc: Loc;
}

export interface BinOp {
  kind: "binop";
  op: BinOpKind;
  left: Expr;
  right: Expr;
  loc: Loc;
}

export interface UnaryOp {
  kind: "unary";
  op: "-" | "+" | "no";
  arg: Expr;
  loc: Loc;
}

export interface FunCall {
  kind: "fun_call";
  name: string;
  args: Expr[];
  loc: Loc;
}

export interface VarAccess {
  kind: "var";
  name: string;
  loc: Loc;
}

export interface IndexAccess {
  kind: "index";
  target: Expr;
  key: Expr;
  loc: Loc;
}

export interface FieldAccess {
  kind: "field";
  target: Expr;
  field: string;
  loc: Loc;
}

export type Expr =
  | NumLit
  | StringLit
  | BoolLit
  | NullLit
  | ArrayLit
  | ObjectLit
  | ForComprehension
  | BinOp
  | UnaryOp
  | FunCall
  | VarAccess
  | IndexAccess
  | FieldAccess;

/* ---------- Plantilla / bloques ---------- */

export type TipoPregunta =
  | "mc"
  | "vf"
  | "input"
  | "completar"
  | "ordenar"
  | "marcar_mapa"
  | "analisis_sintactico"
  /**
   * PLAN-E §21 Parte B — análisis por RANGOS de palabras (spans). A
   * diferencia de `analisis_sintactico` (una etiqueta por palabra suelta),
   * el alumno etiqueta rangos contiguos que pueden solaparse (núcleo dentro
   * del sujeto). Corrección exacta por conjunto de spans, con puntaje
   * parcial opcional (`puntaje_parcial: proporcional`).
   */
  | "analisis_spans"
  | "identificar_palabras"
  | "abierta"
  /**
   * WO-11 — respuesta simbólica (expresión algebraica). Se corrige por
   * equivalencia simbólica (numérica + algebraica vía math.simplify), no
   * por igualdad de string ni por tolerancia numérica. Ver
   * `docs/vblang/wo-11-eje-simbolico.md`.
   */
  | "expresion";

/**
 * Modo de corrección de una pregunta `abierta` (WO07):
 *  - `ninguna`: informativa, no puntúa (se excluye del maxScore).
 *  - `manual`: la corrige el profe a mano (crédito parcial, 0..points).
 *
 * Ojo con el falso amigo: `ModuleQuizMode = "manual" | "generated"` describe
 * cómo se ARMA el quiz, no cómo se corrige una pregunta.
 */
export type CorreccionModo = "ninguna" | "manual";

export interface TextoLiteral {
  kind: "texto";
  value: string;
}

export interface Interpolacion {
  kind: "interp";
  expr: Expr;
  modificador?: string;
}

export type TextoOInterpolacion = TextoLiteral | Interpolacion;

export interface CampoKV {
  key: string;
  value: Expr;
  loc: Loc;
}

export interface VariableDecl {
  nombre: string;
  expr: Expr;
  loc: Loc;
}

export interface PasoItem {
  partes: TextoOInterpolacion[];
  /**
   * PLAN-E §15 — sólo para ítems de `enunciados:`: tipo propio de la
   * variante (`- mc "..."`). Ausente = hereda el tipo de la plantilla.
   * Restringido a los tipos básicos (mc/vf/input/completar); el runtime
   * sirve y corrige por el tipo de la variante sorteada.
   */
  tipo?: TipoPregunta;
  loc: Loc;
}

export interface EtiquetaPedida {
  id: string;
  campos: { key: string; value: Expr }[];
}

export interface MetadataBloque {
  kind: "metadata";
  campos: CampoKV[];
  loc: Loc;
}
export interface VariablesBloque {
  kind: "variables";
  declaraciones: VariableDecl[];
  loc: Loc;
}
export interface RestriccionesBloque {
  kind: "restricciones";
  condiciones: Expr[];
  loc: Loc;
}
export interface RespuestaBloque {
  kind: "respuesta";
  expr: Expr;
  loc: Loc;
}
export interface RespuestasValidasBloque {
  kind: "respuestas_validas";
  items: Expr[];
  loc: Loc;
}
/**
 * WO-11 — respuesta simbólica. Paralelo a `respuesta:` pero con
 * semántica explícita: el valor evaluado es un STRING que representa
 * una expresión algebraica; se compara por equivalencia simbólica
 * (no por igualdad de string ni por tolerancia numérica). Infiere
 * `tipoInferido = "expresion"` cuando está presente.
 */
export interface RespuestaExprBloque {
  kind: "respuesta_expr";
  expr: Expr;
  loc: Loc;
}
export interface UnidadBloque {
  kind: "unidad";
  valor: string;
  loc: Loc;
}
export interface ToleranciaBloque {
  kind: "tolerancia";
  valor: number;
  esPorcentaje: boolean;
  loc: Loc;
}
/**
 * F2-04: tolerancia absoluta (número, sin `%`). Complementaria a
 * `tolerancia:`. Resuelve el caso `e=0` (donde `tolerancia:` exige
 * exactitud) y respuestas muy chicas donde la tolerancia relativa falla
 * por su propio producto. El criterio de corrección pasa a ser
 * `|r-e| ≤ max(|e|·tol_rel, tol_abs)`. Default ausente = 0.
 */
export interface ToleranciaAbsBloque {
  kind: "tolerancia_abs";
  valor: number;
  loc: Loc;
}
export interface OpcionesBloque {
  kind: "opciones";
  cantidad: number;
  loc: Loc;
}
export interface TipoBloque {
  kind: "tipo";
  valor: TipoPregunta;
  loc: Loc;
}
export interface EnunciadoBloque {
  kind: "enunciado";
  partes: TextoOInterpolacion[];
  loc: Loc;
}
export interface EnunciadosBloque {
  kind: "enunciados";
  items: PasoItem[];
  loc: Loc;
}
export interface PasosBloque {
  kind: "pasos";
  pasos: PasoItem[];
  loc: Loc;
}
/**
 * F2-03: explicación que se muestra al alumno tras responder. Bloque opcional
 * con un único string interpolable (mismo patrón de superficie que `enunciado:`,
 * `unidad:`, etc.). El DSL sólo declara el texto; la decisión de "cuándo
 * mostrar" (siempre, sólo tras mal, sólo a partir de N intentos) queda fuera
 * del scope del DSL — es del renderer. Si la plantilla lo declara, el adapter
 * propaga `gen.explicacion` a `ModuleQuizQuestion.explanation` con precedencia
 * sobre el fallback `pasos`.
 */
export interface ExplicacionBloque {
  kind: "explicacion";
  partes: TextoOInterpolacion[];
  loc: Loc;
}
/**
 * F2-02: pistas escalonadas. Una sola keyword `pistas:` que acepta forma inline
 * (un string → lista de 1) o lista (`- "..."`). A diferencia de `enunciados:`,
 * NO son variantes: son una secuencia ordenada que el alumno pide de a una.
 * `items.length >= 1` siempre. El costo en puntos NO vive acá (es composición
 * de quiz, igual que `points`).
 */
export interface PistasBloque {
  kind: "pistas";
  items: PasoItem[];
  loc: Loc;
}
export interface VisualBloque {
  kind: "visual";
  campos: CampoKV[];
  loc: Loc;
}
export interface GeneradorBloque {
  kind: "generador";
  id: string;
  loc: Loc;
}
export interface DatasetBloque {
  kind: "dataset";
  nombre: string;
  loc: Loc;
}
export type MapaEncuadre = [number, number, number, number];

export interface MapaBloque {
  kind: "mapa";
  // §6.a — `world_cities` retirado (no tenía renderer ni datos).
  nombre: "world_countries" | "world_states_provinces";
  encuadre?: MapaEncuadre;
  loc: Loc;
}
export interface RespuestaIsoBloque {
  kind: "respuesta_iso";
  expr: Expr;
  loc: Loc;
}
export interface RespuestaNombreBloque {
  kind: "respuesta_nombre";
  expr: Expr;
  loc: Loc;
}
export interface RespuestaOrdenBloque {
  kind: "respuesta_orden";
  expr: Expr;
  loc: Loc;
}
export interface TextoAnalizarBloque {
  kind: "texto_analizar";
  expr: Expr;
  loc: Loc;
}
export interface EtiquetasPedidasBloque {
  kind: "etiquetas_pedidas";
  etiquetas: EtiquetaPedida[];
  loc: Loc;
}
export interface OpcionesExplicitasBloque {
  kind: "opciones_explicitas";
  items: Expr[];
  loc: Loc;
}
export interface CorreccionBloque {
  kind: "correccion";
  modo: CorreccionModo;
  loc: Loc;
}
/**
 * PLAN-E §21 Parte A — mc de selección múltiple. `multiple: true` marca
 * como correctas TODAS las opciones que matcheen `respuesta:` o alguna de
 * `respuestas_validas:`; el player usa checkboxes.
 */
export interface MultipleBloque {
  kind: "multiple";
  valor: boolean;
  loc: Loc;
}
/**
 * PLAN-E §21 Parte B — clave del análisis por spans. Reusa la forma de
 * `EtiquetaPedida` (objeto literal con campos Expr): cada ítem es
 * `- { desde: <expr>, hasta: <expr>, etiqueta: <expr> }` con índices de
 * PALABRA 0-based inclusive sobre `texto_analizar`.
 */
export interface SpansPedidosBloque {
  kind: "spans_pedidos";
  spans: EtiquetaPedida[];
  loc: Loc;
}
/**
 * PLAN-E §21 Parte B — etiquetas que ve el alumno (correctas + distractores).
 * Las usadas en `spans_pedidos` se agregan solas si faltan.
 */
export interface EtiquetasDisponiblesBloque {
  kind: "etiquetas_disponibles";
  items: Expr[];
  loc: Loc;
}

export type PuntajeParcialModo = "todo_o_nada" | "proporcional";
/**
 * PLAN-E §21 Parte A — puntaje parcial para selección múltiple:
 * proporcional = max(0, aciertos − marcadas de más) / total correctas.
 */
export interface PuntajeParcialBloque {
  kind: "puntaje_parcial";
  modo: PuntajeParcialModo;
  loc: Loc;
}

export type Bloque =
  | MetadataBloque
  | VariablesBloque
  | RestriccionesBloque
  | RespuestaBloque
  | RespuestaExprBloque
  | RespuestasValidasBloque
  | UnidadBloque
  | ToleranciaBloque
  | ToleranciaAbsBloque
  | OpcionesBloque
  | TipoBloque
  | EnunciadoBloque
  | EnunciadosBloque
  | PistasBloque
  | PasosBloque
  | ExplicacionBloque
  | VisualBloque
  | GeneradorBloque
  | DatasetBloque
  | MapaBloque
  | RespuestaIsoBloque
  | RespuestaNombreBloque
  | RespuestaOrdenBloque
  | TextoAnalizarBloque
  | EtiquetasPedidasBloque
  | OpcionesExplicitasBloque
  | CorreccionBloque
  | MultipleBloque
  | PuntajeParcialBloque
  | SpansPedidosBloque
  | EtiquetasDisponiblesBloque;

export type BloqueKind = Bloque["kind"];

export interface Plantilla {
  kind: "plantilla";
  bloques: Bloque[];
  tipoInferido: TipoPregunta;
  loc: Loc;
}
