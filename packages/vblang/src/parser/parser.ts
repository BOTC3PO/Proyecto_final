import { lex } from "../lexer/lexer.js";
import { suggestKeyword } from "../lexer/suggestions.js";
import { TokenKind } from "../lexer/tokens.js";
import type {
  Bloque,
  BloqueKind,
  Loc,
  Plantilla,
  TipoBloque,
  TipoPregunta,
} from "./ast.js";
import { parseBloque } from "./blocks.js";
import { TokenCursor } from "./cursor.js";
import { ParseError } from "./errors.js";

export function parse(source: string): Plantilla {
  const tokens = lex(source);
  const cursor = new TokenCursor(tokens);
  const bloques: Bloque[] = [];
  const seen = new Set<BloqueKind>();

  while (!cursor.atEnd()) {
    while (cursor.peek().kind === TokenKind.NEWLINE) cursor.consume();
    if (cursor.atEnd()) break;

    const tokBefore = cursor.peek();

    if (tokBefore.kind === TokenKind.IDENT) {
      // The lexer would have emitted KW_X if this were a known block keyword.
      // An IDENT at block position is either a typo or just unexpected content.
      const peek1 = cursor.peek(1);
      if (peek1.kind === TokenKind.COLON) {
        const suggestion = suggestKeyword(tokBefore.value);
        throw new ParseError(
          suggestion
            ? `No reconozco el bloque \`${tokBefore.value}:\`. ¿Quisiste decir \`${suggestion}:\`?`
            : `No reconozco el bloque \`${tokBefore.value}:\``,
          tokBefore.line,
          tokBefore.col,
          suggestion ?? undefined,
        );
      }
      throw new ParseError(
        `Token inesperado a nivel raíz: ${tokBefore.value}`,
        tokBefore.line,
        tokBefore.col,
      );
    }

    const bloque = parseBloque(cursor);
    if (seen.has(bloque.kind)) {
      throw new ParseError(
        `bloque \`${bloque.kind}:\` declarado dos veces`,
        tokBefore.line,
        tokBefore.col,
      );
    }
    seen.add(bloque.kind);
    bloques.push(bloque);
  }

  const tipoInferido = validarBloquesObligatorios(bloques);

  const loc: Loc =
    bloques.length > 0
      ? {
          line: bloques[0].loc.line,
          col: bloques[0].loc.col,
          endLine: bloques[bloques.length - 1].loc.endLine,
          endCol: bloques[bloques.length - 1].loc.endCol,
        }
      : { line: 1, col: 1, endLine: 1, endCol: 1 };

  return { kind: "plantilla", bloques, tipoInferido, loc };
}

function validarBloquesObligatorios(bloques: Bloque[]): TipoPregunta {
  const has = (k: BloqueKind): boolean => bloques.some((b) => b.kind === k);
  const get = <K extends BloqueKind>(k: K) =>
    bloques.find((b) => b.kind === k) as Extract<Bloque, { kind: K }> | undefined;

  if (!has("enunciado")) {
    throw new ParseError(
      "Falta el bloque obligatorio `enunciado:`",
      1,
      1,
    );
  }

  const hasGenerador = has("generador");
  const hasAlgunaRespuesta =
    has("respuesta") ||
    has("respuestas_validas") ||
    has("respuesta_iso") ||
    has("respuesta_nombre") ||
    has("respuesta_orden") ||
    has("etiquetas_pedidas");

  if (!hasGenerador && !hasAlgunaRespuesta) {
    throw new ParseError(
      "Si no hay `generador:`, debe haber al menos un campo de respuesta (`respuesta:`, `respuestas_validas:`, etc.)",
      1,
      1,
    );
  }

  // Inferir tipo
  let tipoInferido: TipoPregunta;
  if (has("respuesta_iso")) tipoInferido = "marcar_mapa";
  else if (has("respuesta_nombre") && has("mapa")) tipoInferido = "marcar_mapa";
  else if (has("respuesta_orden")) tipoInferido = "ordenar";
  else if (has("etiquetas_pedidas")) tipoInferido = "analisis_sintactico";
  else tipoInferido = "input";

  const tipoBloque = get("tipo") as TipoBloque | undefined;

  if (tipoBloque) {
    const declarado = tipoBloque.valor;

    if (declarado === "marcar_mapa") {
      if (!has("respuesta_iso") && !(has("respuesta_nombre") && has("mapa"))) {
        throw new ParseError(
          "`tipo: marcar_mapa` requiere `respuesta_iso:`, o bien `respuesta_nombre:` con `mapa:`",
          tipoBloque.loc.line,
          tipoBloque.loc.col,
        );
      }
      tipoInferido = "marcar_mapa";
    } else if (declarado === "ordenar") {
      if (!has("respuesta_orden")) {
        throw new ParseError(
          "`tipo: ordenar` requiere `respuesta_orden:`",
          tipoBloque.loc.line,
          tipoBloque.loc.col,
        );
      }
      tipoInferido = "ordenar";
    } else if (declarado === "analisis_sintactico") {
      if (!has("etiquetas_pedidas")) {
        throw new ParseError(
          "`tipo: analisis_sintactico` requiere `etiquetas_pedidas:`",
          tipoBloque.loc.line,
          tipoBloque.loc.col,
        );
      }
      tipoInferido = "analisis_sintactico";
    } else if (declarado === "mc") {
      if (!has("opciones") && !has("opciones_explicitas")) {
        throw new ParseError(
          "`tipo: mc` requiere `opciones:` o `opciones_explicitas:`",
          tipoBloque.loc.line,
          tipoBloque.loc.col,
        );
      }
      tipoInferido = "mc";
    } else {
      tipoInferido = declarado;
    }
  }

  return tipoInferido;
}
