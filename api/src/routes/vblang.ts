/**
 * Sugerencias de variables VBLang asistidas por IA (DIFF-05).
 *
 * `POST /api/vblang/suggest-variables` toma el enunciado de un ejercicio (y el
 * tipo de pregunta) y le pide a Claude que proponga declaraciones de
 * `variables:` para hacerlo dinámico (números/opciones que cambian en cada
 * intento). La salida es estructurada vía tool use, así que el cliente recibe
 * siempre `{ variables: [{ nombre, expr, descripcion }] }`.
 *
 * Diseño:
 *  - Sin SDK: una sola llamada a la Messages API con `fetch` (Node 22 trae
 *    fetch global), para no sumar dependencias al backend.
 *  - `tool_choice` forzado garantiza JSON estructurado (no hay que parsear prosa).
 *  - El system prompt va en un bloque con `cache_control` (prompt caching): es
 *    estable entre requests, así que se cachea una vez supera el mínimo cacheable.
 *  - Degradación elegante: si falta `ANTHROPIC_API_KEY`, responde 503 con un
 *    mensaje claro en vez de romper; el cliente lo muestra y oculta el botón.
 */
import { Router } from "express";

export const vblang = Router();

const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
// Modelo por defecto: el más capaz. Operativamente se puede bajar a uno más
// rápido/barato (ej. claude-haiku-4-5) vía env sin tocar código.
const DEFAULT_MODEL = "claude-opus-4-8";

const SYSTEM_PROMPT = `Sos un asistente del editor de plantillas VBLang, un DSL para generar ejercicios escolares con valores aleatorios.

Tu tarea: dado el enunciado de un ejercicio, proponer declaraciones de \`variables:\` que lo vuelvan dinámico (que los datos cambien en cada intento), y devolverlas con la herramienta \`proponer_variables\`.

Reglas de las expresiones (\`expr\`) — usá SOLO esta sintaxis:
- \`random(min, max)\` → entero aleatorio entre min y max (inclusive). Ej.: \`random(1, 10)\`.
- \`random_float(min, max, decimales)\` → decimal aleatorio. Ej.: \`random_float(0.5, 9.5, 2)\`.
- \`uno_de(["a", "b", "c"])\` → elige uno de la lista (texto u objetos). Ej.: \`uno_de(["norte", "sur"])\`.
- Expresiones derivadas combinando otras variables y operadores \`+ - * / %\` y funciones \`sqrt, abs, round, redondear, min, max\`. Ej.: \`base * altura / 2\`.
- Constantes disponibles: pi, e, g (gravedad). No las redeclares.

Pautas:
- Nombres de variable: identificadores simples en minúscula (a, b, base, velocidad), sin espacios ni acentos.
- Proponé entre 1 y 6 variables, las mínimas para que el enunciado tenga sentido y se pueda corregir.
- Si el enunciado ya usa \`{algo}\`, proponé variables con ESOS nombres.
- Elegí rangos pedagógicamente razonables y que eviten divisiones por cero o resultados absurdos.
- \`descripcion\`: una frase corta, para el profe.
- No inventes funciones ni sintaxis que no esté en la lista.`;

const TOOL = {
  name: "proponer_variables",
  description:
    "Devuelve las variables VBLang sugeridas para el ejercicio. Llamala siempre, con al menos una variable.",
  input_schema: {
    type: "object",
    properties: {
      variables: {
        type: "array",
        items: {
          type: "object",
          properties: {
            nombre: {
              type: "string",
              description: "Identificador de la variable (minúsculas, sin espacios).",
            },
            expr: {
              type: "string",
              description:
                "Expresión VBLang, ej. random(1, 10) o uno_de([\"a\",\"b\"]).",
            },
            descripcion: {
              type: "string",
              description: "Qué representa la variable (frase corta para el profe).",
            },
          },
          required: ["nombre", "expr"],
        },
      },
    },
    required: ["variables"],
  },
} as const;

type SugerenciaVariable = { nombre: string; expr: string; descripcion?: string };

function userPrompt(enunciado: string, tipo?: string): string {
  const tipoLinea = tipo ? `\nTipo de pregunta: ${tipo}` : "";
  return `Enunciado del ejercicio:\n"""\n${enunciado}\n"""${tipoLinea}\n\nProponé las variables con la herramienta proponer_variables.`;
}

/** Normaliza la salida del modelo a un array limpio (defensivo). */
function sanitize(raw: unknown): SugerenciaVariable[] {
  if (!Array.isArray(raw)) return [];
  const out: SugerenciaVariable[] = [];
  for (const item of raw) {
    if (!item || typeof item !== "object") continue;
    const { nombre, expr, descripcion } = item as Record<string, unknown>;
    if (typeof nombre !== "string" || typeof expr !== "string") continue;
    if (nombre.trim() === "" || expr.trim() === "") continue;
    out.push({
      nombre: nombre.trim(),
      expr: expr.trim(),
      descripcion: typeof descripcion === "string" ? descripcion.trim() : undefined,
    });
    if (out.length >= 8) break;
  }
  return out;
}

// POST /api/vblang/suggest-variables — propone variables para un enunciado.
vblang.post("/api/vblang/suggest-variables", async (req, res) => {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(503).json({
      error:
        "La sugerencia con IA no está configurada (falta ANTHROPIC_API_KEY en el servidor).",
    });
    return;
  }

  const { enunciado, tipo } = req.body as { enunciado?: unknown; tipo?: unknown };
  if (typeof enunciado !== "string" || enunciado.trim() === "") {
    res.status(400).json({ error: "enunciado es requerido" });
    return;
  }
  if (enunciado.length > 4000) {
    res.status(400).json({ error: "enunciado demasiado largo" });
    return;
  }

  const model = process.env.VBLANG_AI_MODEL ?? DEFAULT_MODEL;

  try {
    const resp = await fetch(ANTHROPIC_URL, {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      // Timeout duro para no colgar la request si la API se demora.
      signal: AbortSignal.timeout(20_000),
      body: JSON.stringify({
        model,
        max_tokens: 1024,
        system: [
          {
            type: "text",
            text: SYSTEM_PROMPT,
            cache_control: { type: "ephemeral" },
          },
        ],
        tools: [TOOL],
        tool_choice: { type: "tool", name: "proponer_variables" },
        messages: [
          {
            role: "user",
            content: userPrompt(enunciado, typeof tipo === "string" ? tipo : undefined),
          },
        ],
      }),
    });

    if (!resp.ok) {
      const status = resp.status === 429 ? 429 : 502;
      res.status(status).json({
        error:
          resp.status === 429
            ? "El servicio de IA está saturado; probá de nuevo en unos segundos."
            : "El servicio de IA devolvió un error.",
      });
      return;
    }

    const data = (await resp.json()) as {
      content?: Array<{ type: string; name?: string; input?: { variables?: unknown } }>;
    };
    const block = data.content?.find(
      (b) => b.type === "tool_use" && b.name === "proponer_variables",
    );
    const variables = sanitize(block?.input?.variables);
    if (variables.length === 0) {
      res.status(502).json({ error: "La IA no devolvió variables utilizables." });
      return;
    }
    res.json({ variables });
  } catch (err) {
    const aborted = err instanceof Error && err.name === "TimeoutError";
    res.status(aborted ? 504 : 502).json({
      error: aborted
        ? "La sugerencia con IA tardó demasiado; probá de nuevo."
        : "No se pudo contactar al servicio de IA.",
    });
  }
});
