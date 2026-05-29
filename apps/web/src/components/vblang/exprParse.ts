/**
 * Parseo de una expresión VBLang suelta reutilizando el parser real del
 * paquete (no se reimplementa parsing en la UI). Como `@vb/vblang` solo
 * expone `parse` de plantillas completas, envolvemos la expresión en una
 * mini-plantilla y extraemos el AST de la variable sonda.
 *
 * Se usa para los campos de fórmula del formulario visual (restricciones,
 * expresiones derivadas), que necesitan convertir texto del usuario a `Expr`.
 */
import { parse, type Expr } from "@vb/vblang";

export type ParseExprResult =
  | { ok: true; expr: Expr }
  | { ok: false; reason: string };

const PROBE = "__probe__";

export function parseExprText(text: string): ParseExprResult {
  const trimmed = text.trim();
  if (trimmed.length === 0) return { ok: false, reason: "Expresión vacía" };

  // Paréntesis para aislar la expresión (soporta comparaciones, lógicos, etc.).
  const src = `variables:\n  ${PROBE}: (${trimmed})\nenunciado: "x"\nrespuesta: 1\n`;
  try {
    const plantilla = parse(src);
    const vars = plantilla.bloques.find((b) => b.kind === "variables");
    if (!vars || vars.kind !== "variables") {
      return { ok: false, reason: "No se pudo interpretar la expresión" };
    }
    const decl = vars.declaraciones.find((d) => d.nombre === PROBE);
    if (!decl) return { ok: false, reason: "No se pudo interpretar la expresión" };
    return { ok: true, expr: decl.expr };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Expresión inválida";
    return { ok: false, reason: msg };
  }
}
