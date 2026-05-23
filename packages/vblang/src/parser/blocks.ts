import { Token, TokenKind } from "../lexer/tokens.js";
import type {
  Bloque,
  CampoKV,
  DatasetBloque,
  EnunciadoBloque,
  EtiquetaPedida,
  EtiquetasPedidasBloque,
  Expr,
  GeneradorBloque,
  Loc,
  MapaBloque,
  MetadataBloque,
  OpcionesBloque,
  OpcionesExplicitasBloque,
  PasoItem,
  PasosBloque,
  RespuestaBloque,
  RespuestaIsoBloque,
  RespuestaNombreBloque,
  RespuestaOrdenBloque,
  RespuestasValidasBloque,
  RestriccionesBloque,
  TextoAnalizarBloque,
  TextoOInterpolacion,
  TipoBloque,
  TipoPregunta,
  ToleranciaBloque,
  UnidadBloque,
  VariableDecl,
  VariablesBloque,
  VisualBloque,
} from "./ast.js";
import { TokenCursor } from "./cursor.js";
import { ParseError } from "./errors.js";
import { parseExpression } from "./expression.js";
import { parseEnunciadoString } from "./interpolation.js";

function tokLoc(t: Token): Loc {
  const len = t.value ? t.value.length : 0;
  return { line: t.line, col: t.col, endLine: t.line, endCol: t.col + len };
}

function spanLoc(start: Loc, end: Loc): Loc {
  return {
    line: start.line,
    col: start.col,
    endLine: end.endLine,
    endCol: end.endCol,
  };
}

function skipNewlines(c: TokenCursor): void {
  while (c.peek().kind === TokenKind.NEWLINE) c.consume();
}

function consumeColon(c: TokenCursor): void {
  c.consumeKind(TokenKind.COLON, "':'");
}

const VALID_TIPOS: TipoPregunta[] = [
  "mc",
  "vf",
  "input",
  "completar",
  "ordenar",
  "marcar_mapa",
  "analisis_sintactico",
  "identificar_palabras",
];

const VALID_MAPAS = new Set([
  "world_countries",
  "world_states_provinces",
  "world_cities",
]);

/* ---------- Helpers para bloques key/value ---------- */

function parseIndentedKVEntries(
  c: TokenCursor,
  ctx: string,
): { entries: CampoKV[]; endTok: Token } {
  skipNewlines(c);
  c.consumeKind(TokenKind.INDENT, `un bloque indentado bajo \`${ctx}:\``);
  const entries: CampoKV[] = [];
  let lastTok: Token = c.peek();
  while (true) {
    skipNewlines(c);
    if (c.peek().kind === TokenKind.DEDENT) break;
    const keyTok = c.peek();
    if (keyTok.kind !== TokenKind.IDENT) {
      throw new ParseError(
        `Se esperaba un nombre de campo en \`${ctx}:\`, se encontró ${keyTok.kind}${
          keyTok.value ? ` ('${keyTok.value}')` : ""
        }`,
        keyTok.line,
        keyTok.col,
      );
    }
    c.consume();
    consumeColon(c);
    const value = parseExpression(c);
    entries.push({
      key: keyTok.value,
      value,
      loc: spanLoc(tokLoc(keyTok), value.loc),
    });
    lastTok = c.peek();
    skipNewlines(c);
  }
  const dedent = c.consumeKind(TokenKind.DEDENT, "DEDENT");
  return { entries, endTok: dedent.kind === TokenKind.DEDENT ? dedent : lastTok };
}

function parseDashedExprList(
  c: TokenCursor,
  ctx: string,
): { items: Expr[]; endTok: Token } {
  skipNewlines(c);
  c.consumeKind(TokenKind.INDENT, `un bloque indentado bajo \`${ctx}:\``);
  const items: Expr[] = [];
  while (true) {
    skipNewlines(c);
    if (c.peek().kind === TokenKind.DEDENT) break;
    if (c.peek().kind !== TokenKind.DASH) {
      const t = c.peek();
      throw new ParseError(
        `Se esperaba '-' al inicio de cada ítem de \`${ctx}:\``,
        t.line,
        t.col,
      );
    }
    c.consume();
    const expr = parseExpression(c);
    items.push(expr);
    skipNewlines(c);
  }
  const dedent = c.consumeKind(TokenKind.DEDENT, "DEDENT");
  return { items, endTok: dedent };
}

function parseDashedStringList(
  c: TokenCursor,
  ctx: string,
): { items: PasoItem[]; endTok: Token } {
  skipNewlines(c);
  c.consumeKind(TokenKind.INDENT, `un bloque indentado bajo \`${ctx}:\``);
  const items: PasoItem[] = [];
  while (true) {
    skipNewlines(c);
    if (c.peek().kind === TokenKind.DEDENT) break;
    if (c.peek().kind !== TokenKind.DASH) {
      const t = c.peek();
      throw new ParseError(
        `Se esperaba '-' al inicio de cada ítem de \`${ctx}:\``,
        t.line,
        t.col,
      );
    }
    c.consume();
    const strTok = c.peek();
    if (
      strTok.kind !== TokenKind.STRING &&
      strTok.kind !== TokenKind.MULTILINE_STRING
    ) {
      throw new ParseError(
        `Cada ítem de \`${ctx}:\` debe ser un string (entre comillas)`,
        strTok.line,
        strTok.col,
      );
    }
    c.consume();
    const partes = parseEnunciadoString(strTok.value, tokLoc(strTok));
    items.push({ partes, loc: tokLoc(strTok) });
    skipNewlines(c);
  }
  const dedent = c.consumeKind(TokenKind.DEDENT, "DEDENT");
  return { items, endTok: dedent };
}

/* ---------- Bloques key/value ---------- */

export function parseMetadataBloque(c: TokenCursor): MetadataBloque {
  const kwTok = c.consumeKind(TokenKind.KW_METADATA, "'metadata'");
  consumeColon(c);
  const { entries, endTok } = parseIndentedKVEntries(c, "metadata");
  return {
    kind: "metadata",
    campos: entries,
    loc: spanLoc(tokLoc(kwTok), tokLoc(endTok)),
  };
}

export function parseVariablesBloque(c: TokenCursor): VariablesBloque {
  const kwTok = c.consumeKind(TokenKind.KW_VARIABLES, "'variables'");
  consumeColon(c);
  skipNewlines(c);
  c.consumeKind(TokenKind.INDENT, "un bloque indentado bajo `variables:`");
  const declaraciones: VariableDecl[] = [];
  while (true) {
    skipNewlines(c);
    if (c.peek().kind === TokenKind.DEDENT) break;
    const nameTok = c.peek();
    if (nameTok.kind !== TokenKind.IDENT) {
      throw new ParseError(
        `Se esperaba un nombre de variable, se encontró ${nameTok.kind}`,
        nameTok.line,
        nameTok.col,
      );
    }
    c.consume();
    consumeColon(c);
    const expr = parseExpression(c);
    declaraciones.push({
      nombre: nameTok.value,
      expr,
      loc: spanLoc(tokLoc(nameTok), expr.loc),
    });
    skipNewlines(c);
  }
  const dedent = c.consumeKind(TokenKind.DEDENT, "DEDENT");
  return {
    kind: "variables",
    declaraciones,
    loc: spanLoc(tokLoc(kwTok), tokLoc(dedent)),
  };
}

export function parseRestriccionesBloque(c: TokenCursor): RestriccionesBloque {
  const kwTok = c.consumeKind(TokenKind.KW_RESTRICCIONES, "'restricciones'");
  consumeColon(c);
  const { items, endTok } = parseDashedExprList(c, "restricciones");
  return {
    kind: "restricciones",
    condiciones: items,
    loc: spanLoc(tokLoc(kwTok), tokLoc(endTok)),
  };
}

export function parseRespuestasValidasBloque(
  c: TokenCursor,
): RespuestasValidasBloque {
  const kwTok = c.consumeKind(
    TokenKind.KW_RESPUESTAS_VALIDAS,
    "'respuestas_validas'",
  );
  consumeColon(c);
  const { items, endTok } = parseDashedExprList(c, "respuestas_validas");
  return {
    kind: "respuestas_validas",
    items,
    loc: spanLoc(tokLoc(kwTok), tokLoc(endTok)),
  };
}

export function parseVisualBloque(c: TokenCursor): VisualBloque {
  const kwTok = c.consumeKind(TokenKind.KW_VISUAL, "'visual'");
  consumeColon(c);
  const { entries, endTok } = parseIndentedKVEntries(c, "visual");
  return {
    kind: "visual",
    campos: entries,
    loc: spanLoc(tokLoc(kwTok), tokLoc(endTok)),
  };
}

/* ---------- Bloques inline simples ---------- */

export function parseRespuestaBloque(c: TokenCursor): RespuestaBloque {
  const kwTok = c.consumeKind(TokenKind.KW_RESPUESTA, "'respuesta'");
  consumeColon(c);
  const expr = parseExpression(c);
  return {
    kind: "respuesta",
    expr,
    loc: spanLoc(tokLoc(kwTok), expr.loc),
  };
}

export function parseRespuestaIsoBloque(c: TokenCursor): RespuestaIsoBloque {
  const kwTok = c.consumeKind(TokenKind.KW_RESPUESTA_ISO, "'respuesta_iso'");
  consumeColon(c);
  const expr = parseExpression(c);
  return {
    kind: "respuesta_iso",
    expr,
    loc: spanLoc(tokLoc(kwTok), expr.loc),
  };
}

export function parseRespuestaNombreBloque(
  c: TokenCursor,
): RespuestaNombreBloque {
  const kwTok = c.consumeKind(
    TokenKind.KW_RESPUESTA_NOMBRE,
    "'respuesta_nombre'",
  );
  consumeColon(c);
  const expr = parseExpression(c);
  return {
    kind: "respuesta_nombre",
    expr,
    loc: spanLoc(tokLoc(kwTok), expr.loc),
  };
}

export function parseRespuestaOrdenBloque(
  c: TokenCursor,
): RespuestaOrdenBloque {
  const kwTok = c.consumeKind(
    TokenKind.KW_RESPUESTA_ORDEN,
    "'respuesta_orden'",
  );
  consumeColon(c);
  const expr = parseExpression(c);
  return {
    kind: "respuesta_orden",
    expr,
    loc: spanLoc(tokLoc(kwTok), expr.loc),
  };
}

export function parseTextoAnalizarBloque(c: TokenCursor): TextoAnalizarBloque {
  const kwTok = c.consumeKind(
    TokenKind.KW_TEXTO_ANALIZAR,
    "'texto_analizar'",
  );
  consumeColon(c);
  const expr = parseExpression(c);
  return {
    kind: "texto_analizar",
    expr,
    loc: spanLoc(tokLoc(kwTok), expr.loc),
  };
}

export function parseUnidadBloque(c: TokenCursor): UnidadBloque {
  const kwTok = c.consumeKind(TokenKind.KW_UNIDAD, "'unidad'");
  consumeColon(c);
  const strTok = c.peek();
  if (strTok.kind !== TokenKind.STRING) {
    throw new ParseError(
      `\`unidad:\` debe ser un string entre comillas`,
      strTok.line,
      strTok.col,
    );
  }
  c.consume();
  return {
    kind: "unidad",
    valor: strTok.value,
    loc: spanLoc(tokLoc(kwTok), tokLoc(strTok)),
  };
}

export function parseToleranciaBloque(c: TokenCursor): ToleranciaBloque {
  const kwTok = c.consumeKind(TokenKind.KW_TOLERANCIA, "'tolerancia'");
  consumeColon(c);
  const numTok = c.peek();
  if (numTok.kind !== TokenKind.NUMBER) {
    throw new ParseError(
      `\`tolerancia:\` debe ser un número (opcionalmente con %)`,
      numTok.line,
      numTok.col,
    );
  }
  c.consume();
  let esPorcentaje = false;
  let endTok: Token = numTok;
  if (c.peek().kind === TokenKind.PERCENT) {
    esPorcentaje = true;
    endTok = c.consume();
  }
  const after = c.peek();
  if (
    after.kind !== TokenKind.NEWLINE &&
    after.kind !== TokenKind.EOF &&
    after.kind !== TokenKind.DEDENT
  ) {
    throw new ParseError(
      `\`tolerancia:\` debe ser un número válido, se encontró '${after.value || after.kind}'`,
      after.line,
      after.col,
    );
  }
  return {
    kind: "tolerancia",
    valor: Number(numTok.value),
    esPorcentaje,
    loc: spanLoc(tokLoc(kwTok), tokLoc(endTok)),
  };
}

export function parseOpcionesBloque(c: TokenCursor): OpcionesBloque {
  const kwTok = c.consumeKind(TokenKind.KW_OPCIONES, "'opciones'");
  consumeColon(c);
  const numTok = c.peek();
  if (numTok.kind !== TokenKind.NUMBER) {
    throw new ParseError(
      `\`opciones:\` debe ser un entero`,
      numTok.line,
      numTok.col,
    );
  }
  c.consume();
  const cantidad = Number(numTok.value);
  if (!Number.isInteger(cantidad) || cantidad <= 0) {
    throw new ParseError(
      `\`opciones:\` debe ser un entero positivo, se encontró ${numTok.value}`,
      numTok.line,
      numTok.col,
    );
  }
  return {
    kind: "opciones",
    cantidad,
    loc: spanLoc(tokLoc(kwTok), tokLoc(numTok)),
  };
}

export function parseTipoBloque(c: TokenCursor): TipoBloque {
  const kwTok = c.consumeKind(TokenKind.KW_TIPO, "'tipo'");
  consumeColon(c);
  const tok = c.peek();
  if (tok.kind !== TokenKind.IDENT && tok.kind !== TokenKind.STRING) {
    throw new ParseError(
      `\`tipo:\` debe ser uno de ${VALID_TIPOS.join(", ")}`,
      tok.line,
      tok.col,
    );
  }
  c.consume();
  if (!VALID_TIPOS.includes(tok.value as TipoPregunta)) {
    throw new ParseError(
      `Tipo desconocido \`${tok.value}\`. Tipos válidos: ${VALID_TIPOS.join(", ")}`,
      tok.line,
      tok.col,
    );
  }
  return {
    kind: "tipo",
    valor: tok.value as TipoPregunta,
    loc: spanLoc(tokLoc(kwTok), tokLoc(tok)),
  };
}

export function parseGeneradorBloque(c: TokenCursor): GeneradorBloque {
  const kwTok = c.consumeKind(TokenKind.KW_GENERADOR, "'generador'");
  consumeColon(c);
  const parts: string[] = [];
  let lastTok: Token;
  const first = c.peek();
  if (first.kind === TokenKind.STRING) {
    c.consume();
    return {
      kind: "generador",
      id: first.value,
      loc: spanLoc(tokLoc(kwTok), tokLoc(first)),
    };
  }
  if (first.kind !== TokenKind.IDENT) {
    throw new ParseError(
      `\`generador:\` espera un identificador o ruta tipo \`fisica/cinematica/MRU\``,
      first.line,
      first.col,
    );
  }
  c.consume();
  parts.push(first.value);
  lastTok = first;
  while (c.peek().kind === TokenKind.SLASH) {
    c.consume();
    const seg = c.peek();
    if (seg.kind !== TokenKind.IDENT && seg.kind !== TokenKind.NUMBER) {
      throw new ParseError(
        `Segmento inválido en ruta de generador`,
        seg.line,
        seg.col,
      );
    }
    c.consume();
    parts.push(seg.value);
    lastTok = seg;
  }
  return {
    kind: "generador",
    id: parts.join("/"),
    loc: spanLoc(tokLoc(kwTok), tokLoc(lastTok)),
  };
}

export function parseDatasetBloque(c: TokenCursor): DatasetBloque {
  const kwTok = c.consumeKind(TokenKind.KW_DATASET, "'dataset'");
  consumeColon(c);
  const tok = c.peek();
  if (tok.kind !== TokenKind.IDENT && tok.kind !== TokenKind.STRING) {
    throw new ParseError(
      `\`dataset:\` espera el nombre del dataset`,
      tok.line,
      tok.col,
    );
  }
  c.consume();
  return {
    kind: "dataset",
    nombre: tok.value,
    loc: spanLoc(tokLoc(kwTok), tokLoc(tok)),
  };
}

export function parseMapaBloque(c: TokenCursor): MapaBloque {
  const kwTok = c.consumeKind(TokenKind.KW_MAPA, "'mapa'");
  consumeColon(c);
  const tok = c.peek();
  if (tok.kind !== TokenKind.IDENT && tok.kind !== TokenKind.STRING) {
    throw new ParseError(
      `\`mapa:\` espera un identificador de mapa`,
      tok.line,
      tok.col,
    );
  }
  c.consume();
  if (!VALID_MAPAS.has(tok.value)) {
    throw new ParseError(
      `Mapa desconocido \`${tok.value}\`. Válidos: ${[...VALID_MAPAS].join(", ")}`,
      tok.line,
      tok.col,
    );
  }
  return {
    kind: "mapa",
    nombre: tok.value as MapaBloque["nombre"],
    loc: spanLoc(tokLoc(kwTok), tokLoc(tok)),
  };
}

/* ---------- Enunciado y pasos ---------- */

export function parseEnunciadoBloque(c: TokenCursor): EnunciadoBloque {
  const kwTok = c.consumeKind(TokenKind.KW_ENUNCIADO, "'enunciado'");
  consumeColon(c);
  const tok = c.peek();
  if (tok.kind !== TokenKind.STRING && tok.kind !== TokenKind.MULTILINE_STRING) {
    throw new ParseError(
      `\`enunciado:\` debe ir seguido de un string ("...") o de un bloque multilínea con |`,
      tok.line,
      tok.col,
    );
  }
  c.consume();
  const partes: TextoOInterpolacion[] = parseEnunciadoString(
    tok.value,
    tokLoc(tok),
  );
  return {
    kind: "enunciado",
    partes,
    loc: spanLoc(tokLoc(kwTok), tokLoc(tok)),
  };
}

export function parsePasosBloque(c: TokenCursor): PasosBloque {
  const kwTok = c.consumeKind(TokenKind.KW_PASOS, "'pasos'");
  consumeColon(c);
  const { items, endTok } = parseDashedStringList(c, "pasos");
  return {
    kind: "pasos",
    pasos: items,
    loc: spanLoc(tokLoc(kwTok), tokLoc(endTok)),
  };
}

/* ---------- Etiquetas pedidas y opciones explícitas ---------- */

export function parseEtiquetasPedidasBloque(
  c: TokenCursor,
): EtiquetasPedidasBloque {
  const kwTok = c.consumeKind(
    TokenKind.KW_ETIQUETAS_PEDIDAS,
    "'etiquetas_pedidas'",
  );
  consumeColon(c);
  skipNewlines(c);
  c.consumeKind(TokenKind.INDENT, "un bloque indentado");
  const etiquetas: EtiquetaPedida[] = [];
  while (true) {
    skipNewlines(c);
    if (c.peek().kind === TokenKind.DEDENT) break;
    if (c.peek().kind !== TokenKind.DASH) {
      const t = c.peek();
      throw new ParseError(
        `Se esperaba '-' al inicio de cada etiqueta en \`etiquetas_pedidas:\``,
        t.line,
        t.col,
      );
    }
    c.consume();
    const expr = parseExpression(c);
    if (expr.kind !== "object") {
      throw new ParseError(
        `Cada etiqueta debe ser un objeto literal { id: "...", ... }`,
        expr.loc.line,
        expr.loc.col,
      );
    }
    const idEntry = expr.entries.find((e) => e.key === "id");
    let id = "";
    if (idEntry) {
      if (idEntry.value.kind !== "str") {
        throw new ParseError(
          `El campo \`id\` de una etiqueta debe ser un string`,
          expr.loc.line,
          expr.loc.col,
        );
      }
      id = idEntry.value.value;
    }
    const campos = expr.entries
      .filter((e) => e.key !== "id")
      .map((e) => ({ key: e.key, value: e.value }));
    etiquetas.push({ id, campos });
    skipNewlines(c);
  }
  const dedent = c.consumeKind(TokenKind.DEDENT, "DEDENT");
  return {
    kind: "etiquetas_pedidas",
    etiquetas,
    loc: spanLoc(tokLoc(kwTok), tokLoc(dedent)),
  };
}

export function parseOpcionesExplicitasBloque(
  c: TokenCursor,
): OpcionesExplicitasBloque {
  const kwTok = c.consumeKind(
    TokenKind.KW_OPCIONES_EXPLICITAS,
    "'opciones_explicitas'",
  );
  consumeColon(c);
  // Inline o multi-línea
  const peek = c.peek();
  if (peek.kind === TokenKind.NEWLINE) {
    const { items, endTok } = parseDashedExprList(c, "opciones_explicitas");
    return {
      kind: "opciones_explicitas",
      items,
      loc: spanLoc(tokLoc(kwTok), tokLoc(endTok)),
    };
  }
  const expr = parseExpression(c);
  return {
    kind: "opciones_explicitas",
    items: [expr],
    loc: spanLoc(tokLoc(kwTok), expr.loc),
  };
}

/* ---------- Dispatcher ---------- */

export function parseBloque(c: TokenCursor): Bloque {
  const tok = c.peek();
  switch (tok.kind) {
    case TokenKind.KW_METADATA:
      return parseMetadataBloque(c);
    case TokenKind.KW_VARIABLES:
      return parseVariablesBloque(c);
    case TokenKind.KW_RESTRICCIONES:
      return parseRestriccionesBloque(c);
    case TokenKind.KW_RESPUESTA:
      return parseRespuestaBloque(c);
    case TokenKind.KW_RESPUESTAS_VALIDAS:
      return parseRespuestasValidasBloque(c);
    case TokenKind.KW_UNIDAD:
      return parseUnidadBloque(c);
    case TokenKind.KW_TOLERANCIA:
      return parseToleranciaBloque(c);
    case TokenKind.KW_OPCIONES:
      return parseOpcionesBloque(c);
    case TokenKind.KW_TIPO:
      return parseTipoBloque(c);
    case TokenKind.KW_ENUNCIADO:
      return parseEnunciadoBloque(c);
    case TokenKind.KW_PASOS:
      return parsePasosBloque(c);
    case TokenKind.KW_VISUAL:
      return parseVisualBloque(c);
    case TokenKind.KW_GENERADOR:
      return parseGeneradorBloque(c);
    case TokenKind.KW_DATASET:
      return parseDatasetBloque(c);
    case TokenKind.KW_MAPA:
      return parseMapaBloque(c);
    case TokenKind.KW_RESPUESTA_ISO:
      return parseRespuestaIsoBloque(c);
    case TokenKind.KW_RESPUESTA_NOMBRE:
      return parseRespuestaNombreBloque(c);
    case TokenKind.KW_RESPUESTA_ORDEN:
      return parseRespuestaOrdenBloque(c);
    case TokenKind.KW_TEXTO_ANALIZAR:
      return parseTextoAnalizarBloque(c);
    case TokenKind.KW_ETIQUETAS_PEDIDAS:
      return parseEtiquetasPedidasBloque(c);
    case TokenKind.KW_OPCIONES_EXPLICITAS:
      return parseOpcionesExplicitasBloque(c);
    default:
      // Fall through to caller for typo handling
      throw new ParseError(
        `Se esperaba un bloque a nivel raíz, se encontró ${tok.kind}${
          tok.value ? ` ('${tok.value}')` : ""
        }`,
        tok.line,
        tok.col,
      );
  }
}
