export enum TokenKind {
  NUMBER = "NUMBER",
  STRING = "STRING",
  MULTILINE_STRING = "MULTILINE_STRING",
  IDENT = "IDENT",

  VERDADERO = "VERDADERO",
  FALSO = "FALSO",
  NULO = "NULO",

  PLUS = "PLUS",
  MINUS = "MINUS",
  STAR = "STAR",
  SLASH = "SLASH",
  PERCENT = "PERCENT",
  CARET = "CARET",

  EQ = "EQ",
  NEQ = "NEQ",
  LT = "LT",
  GT = "GT",
  LTE = "LTE",
  GTE = "GTE",

  Y = "Y",
  O = "O",
  NO = "NO",

  COLON = "COLON",
  COMMA = "COMMA",
  DOT = "DOT",
  PIPE = "PIPE",
  LPAREN = "LPAREN",
  RPAREN = "RPAREN",
  LBRACKET = "LBRACKET",
  RBRACKET = "RBRACKET",
  LBRACE = "LBRACE",
  RBRACE = "RBRACE",

  RANGE = "RANGE",
  DASH = "DASH",

  KW_METADATA = "KW_METADATA",
  KW_VARIABLES = "KW_VARIABLES",
  KW_RESTRICCIONES = "KW_RESTRICCIONES",
  KW_RESPUESTA = "KW_RESPUESTA",
  // WO-11 — respuesta simbólica (expresión algebraica). Se compara por
  // equivalencia simbólica (no por string ni por tolerancia numérica).
  KW_RESPUESTA_EXPR = "KW_RESPUESTA_EXPR",
  KW_RESPUESTAS_VALIDAS = "KW_RESPUESTAS_VALIDAS",
  KW_UNIDAD = "KW_UNIDAD",
  KW_TOLERANCIA = "KW_TOLERANCIA",
  // F2-04: tolerancia absoluta complementaria a `tolerancia:`. Resuelve el
  // caso donde la respuesta esperada puede ser 0 o muy chica (donde la
  // tolerancia relativa exige exactitud o falla). El criterio nuevo es
  // `|r-e| ≤ max(|e|·tol_rel, tol_abs)`. Sin `%` (es siempre absoluta).
  KW_TOLERANCIA_ABS = "KW_TOLERANCIA_ABS",
  KW_OPCIONES = "KW_OPCIONES",
  KW_TIPO = "KW_TIPO",
  KW_ENUNCIADO = "KW_ENUNCIADO",
  KW_ENUNCIADOS = "KW_ENUNCIADOS",
  KW_PISTAS = "KW_PISTAS",
  KW_PASOS = "KW_PASOS",
  // F2-03: bloque opcional `explicacion:` (string único interpolable, mostrado
  // al alumno tras responder; paridad con el campo `explanation` que ya tienen
  // los quizzes manuales/banco). Gana sobre el fallback `pasos` en el adapter.
  KW_EXPLICACION = "KW_EXPLICACION",
  KW_VISUAL = "KW_VISUAL",
  KW_GENERADOR = "KW_GENERADOR",
  KW_DATASET = "KW_DATASET",
  KW_MAPA = "KW_MAPA",
  KW_RESPUESTA_ISO = "KW_RESPUESTA_ISO",
  KW_RESPUESTA_NOMBRE = "KW_RESPUESTA_NOMBRE",
  KW_RESPUESTA_ORDEN = "KW_RESPUESTA_ORDEN",
  KW_TEXTO_ANALIZAR = "KW_TEXTO_ANALIZAR",
  KW_ETIQUETAS_PEDIDAS = "KW_ETIQUETAS_PEDIDAS",
  KW_OPCIONES_EXPLICITAS = "KW_OPCIONES_EXPLICITAS",
  KW_CORRECCION = "KW_CORRECCION",

  FOR = "FOR",
  IN = "IN",

  NEWLINE = "NEWLINE",
  INDENT = "INDENT",
  DEDENT = "DEDENT",
  EOF = "EOF",
}

export interface Token {
  kind: TokenKind;
  value: string;
  line: number;
  col: number;
}

export const BLOCK_KEYWORDS: Record<string, TokenKind> = {
  metadata: TokenKind.KW_METADATA,
  variables: TokenKind.KW_VARIABLES,
  restricciones: TokenKind.KW_RESTRICCIONES,
  respuesta: TokenKind.KW_RESPUESTA,
  respuesta_expr: TokenKind.KW_RESPUESTA_EXPR,
  respuestas_validas: TokenKind.KW_RESPUESTAS_VALIDAS,
  unidad: TokenKind.KW_UNIDAD,
  tolerancia: TokenKind.KW_TOLERANCIA,
  tolerancia_abs: TokenKind.KW_TOLERANCIA_ABS,
  opciones: TokenKind.KW_OPCIONES,
  tipo: TokenKind.KW_TIPO,
  enunciado: TokenKind.KW_ENUNCIADO,
  enunciados: TokenKind.KW_ENUNCIADOS,
  pistas: TokenKind.KW_PISTAS,
  pasos: TokenKind.KW_PASOS,
  explicacion: TokenKind.KW_EXPLICACION,
  visual: TokenKind.KW_VISUAL,
  generador: TokenKind.KW_GENERADOR,
  dataset: TokenKind.KW_DATASET,
  mapa: TokenKind.KW_MAPA,
  respuesta_iso: TokenKind.KW_RESPUESTA_ISO,
  respuesta_nombre: TokenKind.KW_RESPUESTA_NOMBRE,
  respuesta_orden: TokenKind.KW_RESPUESTA_ORDEN,
  texto_analizar: TokenKind.KW_TEXTO_ANALIZAR,
  etiquetas_pedidas: TokenKind.KW_ETIQUETAS_PEDIDAS,
  opciones_explicitas: TokenKind.KW_OPCIONES_EXPLICITAS,
  correccion: TokenKind.KW_CORRECCION,
};

export const ALWAYS_KEYWORDS: Record<string, TokenKind> = {
  y: TokenKind.Y,
  o: TokenKind.O,
  no: TokenKind.NO,
  verdadero: TokenKind.VERDADERO,
  falso: TokenKind.FALSO,
  nulo: TokenKind.NULO,
  for: TokenKind.FOR,
  in: TokenKind.IN,
};
