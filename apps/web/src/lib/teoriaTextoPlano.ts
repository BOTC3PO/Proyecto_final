/**
 * Teoría en Markdown → texto plano legible (lectura en voz alta, vistas sin HTML).
 * Las fórmulas LaTeX se pasan a una forma legible con símbolos Unicode: `\frac{V}{R}` → `V/R`,
 * `x^{2}` → `x²`, `\Delta T` → `Δ T`. Misma lógica que `apps/mobile/src/lib/teoria.ts` (no hay
 * workspace compartido: si se cambia una, cambiar la otra).
 */
const SUP: Record<string, string> = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "+": "⁺", "-": "⁻", "−": "⁻", "=": "⁼", "(": "⁽", ")": "⁾", n: "ⁿ", i: "ⁱ", x: "ˣ", y: "ʸ" }
const SUB: Record<string, string> = { "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄", "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉", "+": "₊", "-": "₋", "=": "₌", "(": "₍", ")": "₎", a: "ₐ", e: "ₑ", o: "ₒ", x: "ₓ", i: "ᵢ", r: "ᵣ", u: "ᵤ", v: "ᵥ", n: "ₙ", m: "ₘ", k: "ₖ", p: "ₚ", s: "ₛ", t: "ₜ" }
const SIMBOLOS: Record<string, string> = {
  cdot: "·", times: "×", div: "÷", pm: "±", mp: "∓", le: "≤", leq: "≤", ge: "≥", geq: "≥", neq: "≠", ne: "≠", approx: "≈", sim: "∼",
  equiv: "≡", infty: "∞", to: "→", rightarrow: "→", leftarrow: "←", Rightarrow: "⇒", Leftrightarrow: "⇔", leftrightarrow: "↔",
  rightleftharpoons: "⇌", uparrow: "↑", downarrow: "↓", int: "∫", sum: "Σ", prod: "∏", partial: "∂", nabla: "∇", propto: "∝",
  angle: "∠", perp: "⊥", parallel: "∥", in: "∈", notin: "∉", subset: "⊂", subseteq: "⊆", cup: "∪", cap: "∩", emptyset: "∅",
  forall: "∀", exists: "∃", neg: "¬", land: "∧", lor: "∨", circ: "°", degree: "°", ldots: "…", cdots: "⋯", dots: "…",
  alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", varepsilon: "ε", zeta: "ζ", eta: "η", theta: "θ", lambda: "λ",
  mu: "μ", nu: "ν", xi: "ξ", pi: "π", rho: "ρ", sigma: "σ", tau: "τ", phi: "φ", varphi: "φ", chi: "χ", psi: "ψ", omega: "ω",
  Gamma: "Γ", Delta: "Δ", Theta: "Θ", Lambda: "Λ", Xi: "Ξ", Pi: "Π", Sigma: "Σ", Phi: "Φ", Psi: "Ψ", Omega: "Ω",
  "%": "%", "{": "{", "}": "}", "$": "$", "&": "&", "#": "#", "_": "_",
}
const FUNCIONES = new Set(["sin", "cos", "tan", "log", "ln", "exp", "lim", "max", "min", "sen", "det"])

/** Contenido del grupo `{…}` que empieza en `s[i]` (o el siguiente carácter suelto) y la posición siguiente. */
function grupo(s: string, i: number): [string, number] {
  while (s[i] === " ") i++
  if (s[i] !== "{") {
    if (s[i] === "\\") {
      const m = /^\\([A-Za-z]+|.)/.exec(s.slice(i))
      if (m) return [m[0], i + m[0].length]
    }
    return [s[i] ?? "", i + 1]
  }
  let nivel = 0
  for (let j = i; j < s.length; j++) {
    if (s[j] === "{") nivel++
    else if (s[j] === "}" && --nivel === 0) return [s.slice(i + 1, j), j + 1]
  }
  return [s.slice(i + 1), s.length]
}

function indice(t: string, tabla: Record<string, string>, marca: string): string {
  const plano = latexALegible(t)
  if ([...plano].every((c) => tabla[c])) return [...plano].map((c) => tabla[c]).join("")
  return plano.length === 1 ? marca + plano : `${marca}(${plano})`
}

const simple = (t: string) => /^[\p{L}\p{N}.,·]+$/u.test(t)

export function latexALegible(tex: string): string {
  let out = ""
  let i = 0
  while (i < tex.length) {
    const c = tex[i]
    if (c === "\\") {
      const m = /^\\([A-Za-z]+|.)/.exec(tex.slice(i))
      const cmd = m ? m[1] : ""
      i += m ? m[0].length : 1
      if (cmd === "frac" || cmd === "dfrac" || cmd === "tfrac") {
        const [a, j] = grupo(tex, i)
        const [b, k] = grupo(tex, j)
        const A = latexALegible(a), B = latexALegible(b)
        out += `${simple(A) ? A : `(${A})`}/${simple(B) ? B : `(${B})`}`
        i = k
      } else if (cmd === "sqrt") {
        let n = ""
        if (tex[i] === "[") { const f = tex.indexOf("]", i); n = tex.slice(i + 1, f); i = f + 1 }
        const [a, j] = grupo(tex, i)
        const A = latexALegible(a)
        out += `${n ? indice(n, SUP, "^") : ""}√${simple(A) ? A : `(${A})`}`
        i = j
      } else if (["text", "mathrm", "textbf", "mathbf", "textit", "mathit", "operatorname", "mbox", "mathbb", "boldsymbol"].includes(cmd)) {
        const [a, j] = grupo(tex, i)
        out += cmd === "mathbb" ? ({ R: "ℝ", N: "ℕ", Z: "ℤ", Q: "ℚ", C: "ℂ" } as Record<string, string>)[a] ?? a : latexALegible(a)
        i = j
      } else if (["vec", "overline", "bar", "hat", "overrightarrow", "underline", "widehat", "tilde", "dot"].includes(cmd)) {
        const [a, j] = grupo(tex, i)
        const marca = cmd === "vec" || cmd === "overrightarrow" ? "⃗" : cmd === "hat" || cmd === "widehat" ? "̂" : cmd === "tilde" ? "̃" : cmd === "dot" ? "̇" : cmd === "underline" ? "̲" : "̅"
        out += latexALegible(a) + marca
        i = j
      } else if (cmd === "left" || cmd === "right" || cmd === "displaystyle" || cmd === "limits" || cmd === "big" || cmd === "Big") {
        // sólo cambian el tamaño de lo que sigue
      } else if (cmd === "," || cmd === ";" || cmd === ":" || cmd === "quad" || cmd === "qquad" || cmd === " " || cmd === "\\") {
        out += " "
      } else if (cmd === "!") {
        // espacio negativo
      } else if (FUNCIONES.has(cmd)) {
        out += cmd === "sin" ? "sen" : cmd
      } else {
        out += SIMBOLOS[cmd] ?? cmd
      }
    } else if (c === "^" || c === "_") {
      const [a, j] = grupo(tex, i + 1)
      out += indice(a, c === "^" ? SUP : SUB, c)
      i = j
    } else if (c === "{" || c === "}") {
      i++
    } else if (c === "~") {
      out += " "; i++
    } else {
      out += c; i++
    }
  }
  return out.replace(/ {2,}/g, " ").trim()
}

const CODE = /```[^\n]*\n?([\s\S]*?)```/g
const DISPLAY = /\$\$([\s\S]+?)\$\$/g
// Fórmula en línea: `$2x$`, `$x^2$` (pegada a los `$`) o `$ V = I \cdot R $` (con un espacio a cada lado).
// El `$` de cierre no puede ir seguido de letra, número o `$`: así "$500 y $300" no es una fórmula.
const INLINE = /(?<![\\$\w])\$(?:(?=\S)([^$\n]+?)(?<=\S)| +([^$\n]+?) +)\$(?![\w$])/g
// Una frase común (dos palabras seguidas fuera de `\text{…}`) no es una fórmula: "$ 500 y el envío $".
const FRASE = /[a-záéíóúñ]{3,}\s+[a-záéíóúñ]{2,}\s+[a-záéíóúñ]{2,}/i

/** Reemplaza cada fórmula en línea (`$…$`) por `fn(tex)`; deja intactos los montos en pesos. */
export function reemplazarFormulasEnLinea(s: string, fn: (tex: string) => string): string {
  return s.replace(INLINE, (todo: string, a?: string, b?: string) => {
    const tex = (a ?? b ?? "").trim()
    const sinTexto = tex.replace(/\\[A-Za-z]+(\{[^}]*\})?/g, " ")
    // Tiene que parecer matemática: un operador o comando, o ser algo corto como `$x$`, `$2$`, `$V$`.
    const pareceFormula = /[\\=^_+\-*/×·<>≤≥()[\]]/.test(tex) || /^\S{1,4}$/.test(tex)
    if (!tex || !pareceFormula || FRASE.test(sinTexto)) return todo
    return fn(tex)
  })
}

/** Markdown + LaTeX → texto plano (sin `#`, `**`, `|`, `$`…), conservando párrafos y renglones. */
export function markdownATextoPlano(md: string): string {
  const conFormulas = md.replace(CODE, (_, c: string) => c.trimEnd()).replace(DISPLAY, (_, t: string) => latexALegible(t))
  return reemplazarFormulasEnLinea(conFormulas, latexALegible)
    .replace(/^[ \t]*\|?[ \t]*:?-{2,}:?[ \t]*(\|[ \t]*:?-{2,}:?[ \t]*)*\|?[ \t]*$/gm, "")
    .replace(/^[ \t]*\|(.*)\|[ \t]*$/gm, (_, f: string) => f.split("|").map((x) => x.trim()).filter(Boolean).join(" · "))
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^[ \t]*>[ \t]?/gm, "")
    .replace(/^[ \t]*---+[ \t]*$/gm, "")
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/(\*\*|__)(.+?)\1/g, "$2")
    .replace(/(?<![*\w])\*(?!\s)([^*\n]+?)\*(?![*\w])/g, "$1")
    .replace(/(?<![_\w])_(?!\s)([^_\n]+?)_(?![_\w])/g, "$1")
    .replace(/`([^`\n]*)`/g, "$1")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}
