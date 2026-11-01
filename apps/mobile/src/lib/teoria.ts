/**
 * Teoría del temario (Markdown + fórmulas LaTeX) para dibujarla de forma nativa.
 * `latexALegible` y `reemplazarFormulasEnLinea` son copia de `apps/web/src/lib/teoriaTextoPlano.ts`
 * (no hay workspace compartido: si se cambia una, cambiar la otra).
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


export type Tramo = { texto: string; negrita?: boolean; cursiva?: boolean; codigo?: boolean; formula?: boolean };
export type BloqueTeoria =
  | { tipo: "titulo"; nivel: number; tramos: Tramo[] }
  | { tipo: "parrafo"; tramos: Tramo[] }
  | { tipo: "lista"; ordenada: boolean; items: Tramo[][] }
  | { tipo: "cita"; tramos: Tramo[] }
  | { tipo: "tabla"; encabezados: Tramo[][]; filas: Tramo[][][] }
  | { tipo: "codigo"; texto: string }
  | { tipo: "formula"; texto: string }
  | { tipo: "separador" };

const MARCA_FORMULA = "\u0001";

/** Negritas, cursivas, código y fórmulas (ya convertidas y marcadas con \u0001…\u0001) de un renglón. */
export function tramos(texto: string): Tramo[] {
  const out: Tramo[] = [];
  const s = texto.replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");
  const re = /\u0001([^\u0001]*)\u0001|`([^`]+)`|\*\*(.+?)\*\*|__(.+?)__|(?<![*\w])\*(?!\s)([^*]+?)\*(?![*\w])|(?<![_\w])_(?!\s)([^_]+?)_(?![_\w])/g;
  let i = 0;
  for (const m of s.matchAll(re)) {
    if (m.index! > i) out.push({ texto: s.slice(i, m.index) });
    if (m[1] !== undefined) out.push({ texto: m[1], formula: true });
    else if (m[2] !== undefined) out.push({ texto: m[2], codigo: true });
    else if (m[3] !== undefined || m[4] !== undefined) {
      for (const t of tramos(m[3] ?? m[4])) out.push({ ...t, negrita: true });
    } else out.push({ texto: m[5] ?? m[6], cursiva: true });
    i = m.index! + m[0].length;
  }
  if (i < s.length) out.push({ texto: s.slice(i) });
  return out.filter((t) => t.texto !== "");
}

const celdas = (l: string) => l.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => tramos(c.trim()));

/** Markdown → bloques. Las fórmulas `$$…$$` quedan como bloque propio y las `$…$` dentro del texto. */
export function bloquesTeoria(md: string): BloqueTeoria[] {
  const codigos: string[] = [];
  let s = md.replace(/```[^\n]*\n?([\s\S]*?)```/g, (_, c: string) => `\n\n\u0002${codigos.push(c.replace(/\n$/, "")) - 1}\u0002\n\n`);
  s = s.replace(/`[^`\n]*`/g, (m) => m.replace(/\$/g, "\u0003"));
  s = s.replace(/\$\$([\s\S]+?)\$\$/g, (_, t: string) => `\n\n\u0004${latexALegible(t)}\u0004\n\n`);
  s = reemplazarFormulasEnLinea(s, (t) => MARCA_FORMULA + latexALegible(t) + MARCA_FORMULA).replace(/\u0003/g, "$");
  const L = s.split("\n");
  const out: BloqueTeoria[] = [];
  let i = 0;
  while (i < L.length) {
    const l = L[i];
    const t = l.trim();
    if (!t) { i++; continue; }
    let m: RegExpExecArray | null;
    if ((m = /^\u0002(\d+)\u0002$/.exec(t))) { out.push({ tipo: "codigo", texto: codigos[Number(m[1])] }); i++; continue; }
    if ((m = /^\u0004([\s\S]*)\u0004$/.exec(t))) { out.push({ tipo: "formula", texto: m[1] }); i++; continue; }
    if ((m = /^(#{1,6})\s+(.*)$/.exec(t))) { out.push({ tipo: "titulo", nivel: m[1].length, tramos: tramos(m[2].replace(/\s*#+$/, "")) }); i++; continue; }
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(t)) { out.push({ tipo: "separador" }); i++; continue; }
    if (t.startsWith("|") && i + 1 < L.length && /^\|?\s*:?-{2,}/.test(L[i + 1].trim())) {
      const encabezados = celdas(t);
      const filas: Tramo[][][] = [];
      i += 2;
      while (i < L.length && L[i].trim().startsWith("|")) filas.push(celdas(L[i++]));
      out.push({ tipo: "tabla", encabezados, filas });
      continue;
    }
    if (t.startsWith(">")) {
      const partes: string[] = [];
      while (i < L.length && L[i].trim().startsWith(">")) partes.push(L[i++].trim().replace(/^>\s?/, ""));
      out.push({ tipo: "cita", tramos: tramos(partes.join(" ")) });
      continue;
    }
    const item = /^(\s*)([-*+]|\d+[.)])\s+(.*)$/;
    if (item.test(l)) {
      const ordenada = /^\s*\d/.test(l);
      const items: string[] = [];
      while (i < L.length && L[i].trim()) {
        const mi = item.exec(L[i]);
        if (mi) items.push((mi[1].length >= 2 ? "  · " : "") + mi[3]);
        else if (items.length) items[items.length - 1] += " " + L[i].trim();
        i++;
      }
      out.push({ tipo: "lista", ordenada, items: items.map(tramos) });
      continue;
    }
    const partes: string[] = [];
    while (i < L.length && L[i].trim() && !/^(#{1,6}\s|>|\||\u0002|\u0004)/.test(L[i].trim()) && !item.test(L[i])) partes.push(L[i++].trim());
    if (!partes.length) { partes.push(t); i++; }
    out.push({ tipo: "parrafo", tramos: tramos(partes.join(" ")) });
  }
  return out;
}
