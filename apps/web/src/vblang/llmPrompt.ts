/**
 * F7-02 — Prompt portable para IA externa.
 *
 * Reemplazo del asistente IA eliminado (sin servidor, sin keys): se arma un
 * prompt con la referencia DSL de F7-01 (`generarReferenciaDsl()`, derivada
 * del parser/evaluador reales — nunca queda obsoleta) + la descripción del
 * docente + un contrato de salida estricto, para pegar en cualquier IA
 * externa. El validador del editor es el guardián: lo que se pega de vuelta
 * se compila al instante.
 */
import { generarReferenciaDsl } from "@vb/vblang";

/** Contrato de salida: la IA debe responder solo con código VBLang. */
export const CONTRATO_SALIDA_IA = `Respondé SOLO con código VBLang válido, listo para pegar en el editor.
No incluyas explicaciones ni bloques de markdown (sin \`\`\`): la respuesta
completa debe ser el código de la plantilla, nada más. Si necesitás aclarar
algo, usá comentarios \`#\` dentro del propio código.`;

/**
 * Arma el prompt completo: referencia DSL + descripción del docente +
 * contrato de salida. `descripcion` es el pedido en lenguaje natural (ej.:
 * "Un ejercicio de opción múltiple sobre la tabla periódica").
 */
export function buildPromptIA(descripcion: string): string {
  const partes = [
    generarReferenciaDsl(),
    "## Pedido del docente",
    "",
    descripcion.trim() || "(sin descripción)",
    "",
    "## Formato de respuesta",
    "",
    CONTRATO_SALIDA_IA,
  ];
  return partes.join("\n");
}

/**
 * Limpia la respuesta pegada de una IA externa: quita los fences de
 * markdown (```` ``` ```` o ```` ```vblang ````) que suelen envolver el
 * código, si están presentes. Si no hay fences, devuelve el texto recortado
 * tal cual.
 */
export function limpiarRespuestaIA(respuesta: string): string {
  const texto = respuesta.trim();
  const match = texto.match(/^```[^\n]*\n([\s\S]*?)\n?```$/);
  if (match) return match[1].trim();
  return texto;
}
