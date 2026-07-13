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

  // Tarea 05: `enunciado:` y `enunciados:` son mutuamente excluyentes.
  if (has("enunciado") && has("enunciados")) {
    const enunc = get("enunciado")!;
    throw new ParseError(
      "Usá `enunciado:` o `enunciados:`, no ambos",
      enunc.loc.line,
      enunc.loc.col,
    );
  }

  if (!has("enunciado") && !has("enunciados")) {
    throw new ParseError(
      "Falta el bloque obligatorio `enunciado:` (o `enunciados:` con una lista de variantes)",
      1,
      1,
    );
  }

  const hasGenerador = has("generador");
  const hasAlgunaRespuesta =
    has("respuesta") ||
    has("respuesta_expr") ||
    has("respuestas_validas") ||
    has("respuesta_iso") ||
    has("respuesta_nombre") ||
    has("respuesta_orden") ||
    has("etiquetas_pedidas") ||
    has("spans_pedidos");

  const tipoBloqueTmp = get("tipo") as TipoBloque | undefined;
  // WO07: `abierta` es el ÚNICO tipo sin clave de respuesta (informativa o de
  // corrección manual). Sólo se infiere por `tipo: abierta` explícito, ya que
  // no tiene ningún bloque de respuesta del que deducirlo.
  const declaraAbierta = tipoBloqueTmp?.valor === "abierta";

  if (!hasGenerador && !hasAlgunaRespuesta && !declaraAbierta) {
    throw new ParseError(
      "Si no hay `generador:`, debe haber al menos un campo de respuesta (`respuesta:`, `respuestas_validas:`, etc.)",
      1,
      1,
    );
  }

  // WO-11 — `respuesta:` (numérica/exacta) y `respuesta_expr:` (simbólica)
  // no pueden coexistir: son semánticas distintas. El parser rechaza el
  // conflicto para que el docente elija explícitamente.
  if (has("respuesta") && has("respuesta_expr")) {
    const rb = bloques.find((b) => b.kind === "respuesta")!;
    throw new ParseError(
      "no declares `respuesta:` y `respuesta_expr:` en la misma plantilla: uno es numérico/exacto, el otro es simbólico",
      rb.loc.line,
      rb.loc.col,
    );
  }

  // Inferir tipo
  let tipoInferido: TipoPregunta;
  if (has("respuesta_iso")) tipoInferido = "marcar_mapa";
  else if (has("respuesta_nombre") && has("mapa")) tipoInferido = "marcar_mapa";
  else if (has("respuesta_orden")) tipoInferido = "ordenar";
  else if (has("etiquetas_pedidas")) tipoInferido = "analisis_sintactico";
  // PLAN-E §21 Parte B — spans por rango de palabras.
  else if (has("spans_pedidos")) tipoInferido = "analisis_spans";
  // WO-11 — `respuesta_expr` infiere `tipo: expresion` (cambio aditivo;
  // los tipos existentes no se ven afectados). Si el `tipo:` está
  // declarado como `input` o `expresion` y hay `respuesta_expr`, se
  // respeta la declaración explícita.
  else if (has("respuesta_expr")) tipoInferido = "expresion";
  else tipoInferido = "input";

  const tipoBloque = tipoBloqueTmp;

  if (tipoBloque) {
    const declarado = tipoBloque.valor;

    if (declarado === "abierta") {
      if (hasAlgunaRespuesta) {
        throw new ParseError(
          "`tipo: abierta` no lleva clave de respuesta (`respuesta:`, `respuestas_validas:`, etc.): es informativa o de corrección manual.",
          tipoBloque.loc.line,
          tipoBloque.loc.col,
        );
      }
      tipoInferido = "abierta";
    } else if (declarado === "marcar_mapa") {
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
    } else if (declarado === "analisis_spans") {
      // PLAN-E §21 Parte B.
      if (!has("spans_pedidos") || !has("texto_analizar")) {
        throw new ParseError(
          "`tipo: analisis_spans` requiere `spans_pedidos:` y `texto_analizar:`",
          tipoBloque.loc.line,
          tipoBloque.loc.col,
        );
      }
      tipoInferido = "analisis_spans";
    } else if (declarado === "expresion") {
      // WO-11 — `tipo: expresion` requiere `respuesta_expr:` (string
      // con la expresión algebraica esperada). El otro bloque de
      // respuesta (`respuesta:`) no tiene la semántica simbólica.
      if (!has("respuesta_expr")) {
        throw new ParseError(
          "`tipo: expresion` requiere `respuesta_expr:` con la expresión simbólica esperada",
          tipoBloque.loc.line,
          tipoBloque.loc.col,
        );
      }
      tipoInferido = "expresion";
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
