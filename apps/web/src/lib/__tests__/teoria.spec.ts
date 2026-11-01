import { describe, expect, it } from "vitest"
import DOMPurify from "dompurify"
import { markdownTeoriaAHtml } from "../markdownTeoria"
import { latexALegible, markdownATextoPlano } from "../teoriaTextoPlano"

// happy-dom hace mal el saneado de DOMPurify (descarta <h2>, deja `onerror`); en Chromium/Brave anda bien
// (verificado con Brave headless). Las aserciones que dependen del saneado sólo corren en un DOM real.
const domReal = !/HappyDOM/i.test(globalThis.navigator?.userAgent ?? "")

describe("markdownTeoriaAHtml", () => {
  it("convierte títulos, negritas, listas y tablas", () => {
    const html = markdownTeoriaAHtml("## Ley de Ohm\n\nLa **corriente**:\n\n- uno\n- dos\n\n| A | B |\n|---|---|\n| 1 | 2 |")
    if (domReal) expect(html).toContain("<h2")
    expect(html).toContain("<strong>corriente</strong>")
    expect(html).toContain("<li>uno</li>")
    expect(html).toContain("<td>1</td>")
  })

  it("dibuja fórmulas en línea y en bloque con KaTeX (también con espacios internos)", () => {
    const html = markdownTeoriaAHtml("Se expresa como $ V = I \\cdot R $ y también:\n\n$$Q = m \\cdot c \\cdot \\Delta T$$")
    expect(html).toContain("katex")
    expect(html).toContain("katex-display")
    expect(html).not.toContain("$")
  })

  it("dibuja fórmulas que empiezan con un número", () => {
    expect(markdownTeoriaAHtml("Restamos: $9 - 0 = 9$ y derivamos $2x$.")).toContain("katex")
  })

  it("no toma los montos en pesos como fórmulas", () => {
    expect(markdownTeoriaAHtml("Pagó $500 y después $300.")).not.toContain("katex")
    expect(markdownTeoriaAHtml("Cuesta $ 500 y el envío $ 1.200.")).not.toContain("katex")
    const html = markdownTeoriaAHtml("Cuesta $500 y el envío $ 1.200, total $1.700.")
    expect(html).not.toContain("katex")
    expect(html).toContain("$500")
  })

  it("no busca fórmulas dentro del código", () => {
    const html = markdownTeoriaAHtml("Usar `grep \"^$\" archivo` para las líneas vacías y `$HOME`.")
    expect(html).not.toContain("katex")
    expect(html).toContain("<code>")
  })

  it.skipIf(!domReal || !DOMPurify.isSupported)("sanea HTML peligroso", () => {
    const html = markdownTeoriaAHtml("hola <img src=x onerror=alert(1)> <script>alert(1)</script>")
    expect(html).not.toContain("onerror")
    expect(html).not.toContain("<script")
  })
})

describe("latexALegible", () => {
  it.each([
    ["V = I \\cdot R", "V = I · R"],
    ["\\frac{V}{R}", "V/R"],
    ["\\frac{de(t)}{dt}", "(de(t))/dt"],
    ["x^{2} + y^2", "x² + y²"],
    ["c_{\\text{agua}}", "c_(agua)"],
    ["H_2O", "H₂O"],
    ["\\Delta T = 10 \\, °C", "Δ T = 10 °C"],
    ["\\sqrt{2}", "√2"],
    ["\\sqrt[3]{x+1}", "³√(x+1)"],
    ["\\sin(\\alpha)", "sen(α)"],
    ["K_i \\cdot \\int e(t) dt", "Kᵢ · ∫ e(t) dt"],
  ])("%s → %s", (tex, esperado) => {
    expect(latexALegible(tex)).toBe(esperado)
  })
})

describe("markdownATextoPlano", () => {
  it("quita las marcas y deja el texto para leer en voz alta", () => {
    const t = markdownATextoPlano("## Título\n\nUna **palabra** y *otra*, con $ V = I \\cdot R $.\n\n| A | B |\n|---|---|\n| 1 | 2 |\n\n> cita")
    expect(t).toBe("Título\n\nUna palabra y otra, con V = I · R.\n\nA · B\n\n1 · 2\n\ncita")
  })
})
