/**
 * PLAN casos-limite §7 — corrección de respuestas numéricas.
 *
 * Única fuente para "¿esta respuesta numérica del alumno es correcta?". Antes
 * había tres criterios distintos: el grader del server (`gradeAnswers` y
 * `buildFeedback` en `quiz-attempts.ts`) comparaba **strings** cuando no había
 * tolerancia declarada, y el preview del docente (`PreviewPanel.tsx`) ya
 * normalizaba la coma y tenía epsilon — o sea el docente probaba con un
 * criterio más permisivo que el que después corregía a sus alumnos.
 *
 * Dos problemas que resuelve, además de unificar:
 *
 * 1. **Precisión inventada.** La respuesta esperada se serializa con
 *    `formatoDefault`, que redondea a 4 decimales: `1/3` queda `"0.3333"` y
 *    `sqrt(2)` queda `"1.4142"`. Con comparación de strings el alumno tenía que
 *    tipear exactamente esos 4 decimales — `0.33` y `1.41` fallaban — y nada en
 *    el enunciado ni en la interfaz decía cuál era la precisión exigida.
 *    Ahora, si la respuesta esperada **no es entera** y la plantilla no declara
 *    tolerancia, se aplica `TOLERANCIA_POR_DEFECTO`.
 *
 * 2. **Coma decimal.** `0,3` fallaba contra `0.3` en el camino sin tolerancia
 *    (era igualdad de string), pero funcionaba en el camino con tolerancia. En
 *    un producto es-AR la coma es la convención local.
 *
 * Lo que NO cambia (a propósito):
 *  - Respuestas **enteras**: siguen exigiendo el valor exacto. Todo el
 *    contenido con respuesta entera corrige igual que antes.
 *  - Una tolerancia **declarada** siempre gana, incluso si es más chica que la
 *    de por defecto: es una decisión explícita del docente.
 *  - Respuestas de texto: igualdad exacta (normalizada), sin aritmética.
 */

/**
 * Tolerancia aplicada a una respuesta esperada NO entera cuando la plantilla
 * no declara ninguna: `min(0.005, 2 % de |esperado|)`.
 *
 * En castellano: "correcta a 2 decimales, pero nunca más holgada que el 2 % del
 * valor". El tramo de 0.005 es el que importa en la práctica (acepta cualquier
 * redondeo a 2 o más decimales: `0.33` para `1/3`, `1.41` para `sqrt(2)`); el
 * 2 % sólo entra para valores chicos (`|e| < 0.25`), donde 2 decimales serían
 * demasiado gruesos y aceptarían respuestas francamente equivocadas — con
 * `e = 0.0001`, una ventana fija de 0.005 aceptaría hasta el 0.
 *
 * No se aplica a `e === 0`: ahí no hay escala relativa y la holgura fija
 * aceptaría cualquier cosa cerca del cero. Cero exige cero (salvo epsilon).
 */
export const TOLERANCIA_ABS_POR_DEFECTO = 0.005;
export const TOLERANCIA_REL_POR_DEFECTO = 0.02;

/** Absorbe el ruido de punto flotante (`0.1 + 0.2 !== 0.3`). */
const EPSILON = 1e-9;

/**
 * Símbolos que un teclado normal y un editor/LLM producen de forma distinta
 * para el mismo carácter — un alumno siempre tipea `'`/`"` rectas, pero el
 * contenido (autoría manual o generada) a veces trae la tipográfica ('/").
 * Se normalizan a la recta antes de comparar texto.
 */
const EQUIVALENCIAS_PUNTUACION: [RegExp, string][] = [
  [/[‘’]/g, "'"], // ' ' -> '
  [/[“”]/g, '"'], // " " -> "
];

/** `"0,3"` → `0.3`. `NaN` si no es un número. */
function aNumero(s: string): number {
  const limpio = s.trim().replace(/,/g, ".");
  if (limpio === "") return NaN;
  // `parseFloat` acepta basura al final ("3abc" → 3); `Number` es estricto y es
  // lo que queremos para no dar por correcta una respuesta a medio escribir.
  return Number(limpio);
}

/**
 * Ventana de tolerancia efectiva para un valor esperado, dadas las tolerancias
 * declaradas (ambas opcionales). Exportada para que la interfaz pueda mostrar
 * la misma precisión que se va a corregir.
 */
export function toleranciaEfectiva(
  esperado: number,
  toleranciaRelativa?: number,
  toleranciaAbsoluta?: number,
): number {
  const rel = toleranciaRelativa ?? 0;
  const abs = toleranciaAbsoluta ?? 0;
  if (rel > 0 || abs > 0) {
    // Declarada: criterio combinado histórico `max(|e|·tol_rel, tol_abs)`.
    return Math.max(Math.abs(esperado) * rel, abs);
  }
  // Sin declarar: entero y cero exigen exactitud; el resto recibe el default.
  if (Number.isInteger(esperado) || esperado === 0) return 0;
  return Math.min(
    TOLERANCIA_ABS_POR_DEFECTO,
    Math.abs(esperado) * TOLERANCIA_REL_POR_DEFECTO,
  );
}

/** True si la respuesta esperada recibe tolerancia por defecto (no declarada). */
export function usaToleranciaPorDefecto(
  esperado: number,
  toleranciaRelativa?: number,
  toleranciaAbsoluta?: number,
): boolean {
  const rel = toleranciaRelativa ?? 0;
  const abs = toleranciaAbsoluta ?? 0;
  return rel === 0 && abs === 0 && !Number.isInteger(esperado) && esperado !== 0;
}

/**
 * ¿La respuesta del alumno es correcta contra la esperada?
 *
 * Si alguno de los dos lados no es un número, cae a igualdad de string
 * normalizada (trim + colapso de espacios + comillas tipográficas -> rectas)
 * — el caller ya decidió que esta pregunta se corrige por valor y no por
 * equivalencia simbólica.
 */
export function respuestaNumericaCorrecta(
  respuesta: string,
  esperada: string,
  toleranciaRelativa?: number,
  toleranciaAbsoluta?: number,
): boolean {
  const norm = (s: string) => {
    let out = s.replace(/\s+/g, " ").trim();
    for (const [patron, reemplazo] of EQUIVALENCIAS_PUNTUACION) out = out.replace(patron, reemplazo);
    return out;
  };
  if (norm(respuesta) === norm(esperada)) return true;

  const r = aNumero(respuesta);
  const e = aNumero(esperada);
  if (!Number.isFinite(r) || !Number.isFinite(e)) return false;

  const tol = toleranciaEfectiva(e, toleranciaRelativa, toleranciaAbsoluta);
  return Math.abs(r - e) <= tol + EPSILON;
}
