import type { TableBlock } from "../types"

// ─────────────────────────────────────────────────────────────
// Public types
// ─────────────────────────────────────────────────────────────

export type DSLResult = {
  success: boolean
  updatedCells: Record<string, string>
  errors: { line: number; message: string }[]
  executionSteps: string[]
}

// ─────────────────────────────────────────────────────────────
// Tokenizer
// ─────────────────────────────────────────────────────────────

type TKind =
  | "NUM"
  | "STR"
  | "CELL"    // plain cell ref like A1
  | "TMPL"    // template cell ref like C{i}
  | "IDENT"
  | "OP"
  | "LPAREN"
  | "RPAREN"
  | "COLON"
  | "COMMA"
  | "DOTDOT"
  | "EOF"

interface Tok {
  k: TKind
  v: string
}

function lex(src: string): Tok[] {
  const toks: Tok[] = []
  let i = 0
  while (i < src.length) {
    if (/\s/.test(src[i])) { i++; continue }
    if (src[i] === "#") break

    // String literal
    if (src[i] === '"' || src[i] === "'") {
      const q = src[i++]
      let s = ""
      while (i < src.length && src[i] !== q) s += src[i++]
      i++ // closing quote
      toks.push({ k: "STR", v: s })
      continue
    }

    // Number
    if (/\d/.test(src[i]) || (src[i] === "." && /\d/.test(src[i + 1] ?? ""))) {
      let n = ""
      while (i < src.length && /[\d.]/.test(src[i])) n += src[i++]
      toks.push({ k: "NUM", v: n })
      continue
    }

    // Cell template: [A-Z]+{varName}
    const tmplM = src.slice(i).match(/^([A-Z]+\{[a-zA-Z_]\w*\})/)
    if (tmplM) {
      toks.push({ k: "TMPL", v: tmplM[1] })
      i += tmplM[1].length
      continue
    }

    // Cell reference: [A-Z]+[0-9]+  (not followed by letter/underscore)
    const cellM = src.slice(i).match(/^([A-Z]+\d+)(?![a-zA-Z_\d])/)
    if (cellM) {
      toks.push({ k: "CELL", v: cellM[1] })
      i += cellM[1].length
      continue
    }

    // Identifier / keyword
    if (/[A-Za-z_]/.test(src[i])) {
      let id = ""
      while (i < src.length && /[\w]/.test(src[i])) id += src[i++]
      toks.push({ k: "IDENT", v: id })
      continue
    }

    // Two-char tokens
    const two = src.slice(i, i + 2)
    if (two === ">=") { toks.push({ k: "OP", v: ">=" }); i += 2; continue }
    if (two === "<=") { toks.push({ k: "OP", v: "<=" }); i += 2; continue }
    if (two === "<>") { toks.push({ k: "OP", v: "<>" }); i += 2; continue }
    if (two === "..") { toks.push({ k: "DOTDOT", v: ".." }); i += 2; continue }

    // Single-char
    const c = src[i]
    if ("+-*/><=" .includes(c)) { toks.push({ k: "OP", v: c }); i++; continue }
    if (c === "(") { toks.push({ k: "LPAREN", v: c }); i++; continue }
    if (c === ")") { toks.push({ k: "RPAREN", v: c }); i++; continue }
    if (c === ":") { toks.push({ k: "COLON", v: c }); i++; continue }
    if (c === ",") { toks.push({ k: "COMMA", v: c }); i++; continue }
    i++ // skip unknown char
  }
  toks.push({ k: "EOF", v: "" })
  return toks
}

// ─────────────────────────────────────────────────────────────
// AST
// ─────────────────────────────────────────────────────────────

type Expr =
  | { t: "num"; v: number }
  | { t: "str"; v: string }
  | { t: "cell"; r: string }
  | { t: "tmpl"; r: string }
  | { t: "range"; v: string }
  | { t: "binop"; op: string; l: Expr; r: Expr }
  | { t: "fn"; name: string; args: Expr[] }

interface AssignNode {
  t: "assign"
  cell: string   // may contain {var}
  expr: Expr
  line: number
}

interface LoopNode {
  t: "loop"
  vr: string
  from: number
  to: number
  body: AssignNode
  line: number
}

type Node = AssignNode | LoopNode

// ─────────────────────────────────────────────────────────────
// Parser
// ─────────────────────────────────────────────────────────────

class P {
  private ts: Tok[]
  private i = 0
  readonly line: number

  constructor(ts: Tok[], line: number) {
    this.ts = ts
    this.line = line
  }

  private cur(): Tok { return this.ts[this.i] ?? { k: "EOF", v: "" } }
  private eat(): Tok { return this.ts[this.i++] ?? { k: "EOF", v: "" } }

  private expect(k: TKind, v?: string): Tok {
    const t = this.eat()
    if (t.k !== k) throw new Error(`Se esperaba ${k} pero se encontró "${t.v}"`)
    if (v !== undefined && t.v !== v)
      throw new Error(`Se esperaba "${v}" pero se encontró "${t.v}"`)
    return t
  }

  parseNode(): Node {
    if (this.cur().k === "IDENT" && this.cur().v.toUpperCase() === "PARA")
      return this.parseLoop()
    return this.parseAssign()
  }

  private parseLoop(): LoopNode {
    this.eat() // PARA
    const vr = this.expect("IDENT").v
    const en = this.eat()
    if (en.k !== "IDENT" || en.v.toUpperCase() !== "EN")
      throw new Error('Se esperaba "EN" después del nombre de variable')
    const from = parseInt(this.expect("NUM").v, 10)
    if (this.cur().k !== "DOTDOT") throw new Error('Se esperaba ".." en el rango del bucle')
    this.eat() // ..
    const to = parseInt(this.expect("NUM").v, 10)
    this.expect("COLON")
    const body = this.parseAssign()
    body.line = this.line
    return { t: "loop", vr, from, to, body, line: this.line }
  }

  private parseAssign(): AssignNode {
    const t = this.cur()
    let cell: string
    if (t.k === "CELL") { cell = t.v; this.eat() }
    else if (t.k === "TMPL") { cell = t.v; this.eat() }
    else throw new Error(`Se esperaba referencia de celda (ej: A1) pero se encontró "${t.v}"`)
    const eq = this.eat()
    if (eq.k !== "OP" || eq.v !== "=")
      throw new Error(`Se esperaba "=" después de la celda, se encontró "${eq.v}"`)
    const expr = this.parseExpr()
    return { t: "assign", cell, expr, line: this.line }
  }

  private parseExpr(): Expr { return this.parseCmp() }

  private parseCmp(): Expr {
    const l = this.parseAddSub()
    const t = this.cur()
    if (t.k === "OP" && [">=", "<=", ">", "<", "<>", "="].includes(t.v)) {
      this.eat()
      return { t: "binop", op: t.v, l, r: this.parseAddSub() }
    }
    return l
  }

  private parseAddSub(): Expr {
    let l = this.parseMulDiv()
    while (this.cur().k === "OP" && ["+", "-"].includes(this.cur().v)) {
      const op = this.eat().v
      l = { t: "binop", op, l, r: this.parseMulDiv() }
    }
    return l
  }

  private parseMulDiv(): Expr {
    let l = this.parseUnary()
    while (this.cur().k === "OP" && ["*", "/"].includes(this.cur().v)) {
      const op = this.eat().v
      l = { t: "binop", op, l, r: this.parseUnary() }
    }
    return l
  }

  private parseUnary(): Expr {
    if (this.cur().k === "OP" && this.cur().v === "-") {
      this.eat()
      return { t: "binop", op: "-", l: { t: "num", v: 0 }, r: this.parsePrimary() }
    }
    return this.parsePrimary()
  }

  private parsePrimary(): Expr {
    const t = this.cur()
    if (t.k === "NUM") { this.eat(); return { t: "num", v: parseFloat(t.v) } }
    if (t.k === "STR") { this.eat(); return { t: "str", v: t.v } }
    if (t.k === "CELL") { this.eat(); return { t: "cell", r: t.v } }
    if (t.k === "TMPL") { this.eat(); return { t: "tmpl", r: t.v } }
    if (t.k === "IDENT") {
      this.eat()
      if (this.cur().k !== "LPAREN")
        throw new Error(`Se esperaba "(" después de "${t.v}"`)
      this.eat() // (
      const args: Expr[] = []
      if (this.cur().k !== "RPAREN") {
        args.push(this.parseFuncArg())
        while (this.cur().k === "COMMA") {
          this.eat()
          args.push(this.parseFuncArg())
        }
      }
      this.expect("RPAREN")
      return { t: "fn", name: t.v.toUpperCase(), args }
    }
    if (t.k === "LPAREN") {
      this.eat()
      const e = this.parseExpr()
      this.expect("RPAREN")
      return e
    }
    throw new Error(`Token inesperado: "${t.v}"`)
  }

  private parseFuncArg(): Expr {
    // Lookahead: CELL COLON CELL → range
    if (
      this.cur().k === "CELL" &&
      this.ts[this.i + 1]?.k === "COLON" &&
      this.ts[this.i + 2]?.k === "CELL"
    ) {
      const s = this.eat().v // start cell
      this.eat()             // colon
      const e = this.eat().v // end cell
      return { t: "range", v: `${s}:${e}` }
    }
    return this.parseExpr()
  }
}

// ─────────────────────────────────────────────────────────────
// Evaluator
// ─────────────────────────────────────────────────────────────

interface Ctx {
  block: TableBlock
  cells: Record<string, string>  // updated cells (DSL output)
  vars: Record<string, number>   // loop variables
  t0: number                     // start timestamp
}

function colIdx(col: string): number {
  let n = 0
  for (let i = 0; i < col.length; i++) n = n * 26 + (col.charCodeAt(i) - 64)
  return n - 1
}

function resolveRef(tmpl: string, vars: Record<string, number>): string {
  return tmpl.replace(/\{([a-zA-Z_]\w*)\}/g, (_, name) => {
    if (!(name in vars)) throw new Error(`Variable de bucle desconocida: "${name}"`)
    return String(vars[name])
  })
}

function cellVal(ref: string, ctx: Ctx): number {
  if (ref in ctx.cells) {
    const n = parseFloat(ctx.cells[ref])
    return isNaN(n) ? 0 : n
  }
  const m = ref.match(/^([A-Z]+)(\d+)$/)
  if (!m) return 0
  const col = colIdx(m[1])
  const row = parseInt(m[2], 10) - 1
  if (row < 0 || col < 0 || row >= ctx.block.rows.length) return 0
  const r = ctx.block.rows[row]
  if (!r || col >= r.length) return 0
  const n = parseFloat(String(r[col]))
  return isNaN(n) ? 0 : n
}

function rangeVals(range: string, ctx: Ctx): number[] {
  const parts = range.split(":")
  if (parts.length !== 2) return []
  const sm = parts[0].trim().match(/^([A-Z]+)(\d+)$/)
  const em = parts[1].trim().match(/^([A-Z]+)(\d+)$/)
  if (!sm || !em) return []
  const sc = colIdx(sm[1]); const sr = parseInt(sm[2], 10) - 1
  const ec = colIdx(em[1]); const er = parseInt(em[2], 10) - 1
  const vals: number[] = []
  for (let row = sr; row <= er; row++)
    for (let col = sc; col <= ec; col++)
      vals.push(cellVal(`${String.fromCharCode(65 + col)}${row + 1}`, ctx))
  return vals
}

function evalExpr(e: Expr, ctx: Ctx): string | number {
  if (Date.now() - ctx.t0 > 100) throw new Error("#TIMEOUT")
  switch (e.t) {
    case "num": return e.v
    case "str": return e.v
    case "cell": return cellVal(e.r, ctx)
    case "tmpl": return cellVal(resolveRef(e.r, ctx.vars), ctx)
    case "range": throw new Error("Rango solo puede usarse como argumento de función")
    case "binop": {
      const lv = evalExpr(e.l, ctx)
      const rv = evalExpr(e.r, ctx)
      const ln = typeof lv === "number" ? lv : parseFloat(String(lv))
      const rn = typeof rv === "number" ? rv : parseFloat(String(rv))
      switch (e.op) {
        case "+":
          if (typeof lv === "string" || typeof rv === "string")
            return String(lv) + String(rv)
          return ln + rn
        case "-": return ln - rn
        case "*": return ln * rn
        case "/":
          if (rn === 0) throw new Error("División por cero")
          return ln / rn
        case ">":  return ln > rn ? 1 : 0
        case "<":  return ln < rn ? 1 : 0
        case ">=": return ln >= rn ? 1 : 0
        case "<=": return ln <= rn ? 1 : 0
        case "=":  return ln === rn ? 1 : 0
        case "<>": return ln !== rn ? 1 : 0
        default: throw new Error(`Operador desconocido: "${e.op}"`)
      }
    }
    case "fn": {
      const name = e.name
      const getRange = (idx: number): number[] => {
        const a = e.args[idx]
        if (!a) throw new Error(`Falta argumento ${idx + 1} en ${name}`)
        if (a.t === "range") return rangeVals(a.v, ctx)
        const v = evalExpr(a, ctx)
        return [typeof v === "number" ? v : parseFloat(String(v))]
      }
      const getNum = (idx: number): number => {
        const a = e.args[idx]
        if (!a) throw new Error(`Falta argumento ${idx + 1} en ${name}`)
        const v = evalExpr(a, ctx)
        return typeof v === "number" ? v : parseFloat(String(v))
      }
      switch (name) {
        case "SUMA": {
          const vs = getRange(0)
          return vs.reduce((s, v) => s + v, 0)
        }
        case "PROMEDIO": {
          const vs = getRange(0)
          return vs.length ? vs.reduce((s, v) => s + v, 0) / vs.length : 0
        }
        case "MAX": {
          const vs = getRange(0)
          return vs.length ? Math.max(...vs) : 0
        }
        case "MIN": {
          const vs = getRange(0)
          return vs.length ? Math.min(...vs) : 0
        }
        case "CONTAR": {
          const vs = getRange(0)
          return vs.length
        }
        case "PRODUCTO": {
          const vs = getRange(0)
          return vs.reduce((p, v) => p * v, 1)
        }
        case "REDONDEAR": {
          const v = getNum(0)
          const d = getNum(1)
          const f = Math.pow(10, d)
          return Math.round(v * f) / f
        }
        case "ABS":
          return Math.abs(getNum(0))
        case "RAIZ": {
          const v = getNum(0)
          if (v < 0) throw new Error("RAIZ no acepta valores negativos")
          return Math.sqrt(v)
        }
        case "POTENCIA":
          return Math.pow(getNum(0), getNum(1))
        case "SI": {
          if (e.args.length !== 3) throw new Error("SI requiere exactamente 3 argumentos")
          const cond = evalExpr(e.args[0], ctx)
          const condN = typeof cond === "number" ? cond : parseFloat(String(cond))
          return evalExpr(condN !== 0 ? e.args[1] : e.args[2], ctx)
        }
        case "CONCATENAR":
          return e.args.map(a => String(evalExpr(a, ctx))).join("")
        default:
          throw new Error(`Función desconocida: "${name}"`)
      }
    }
  }
}

// ─────────────────────────────────────────────────────────────
// Step description helpers
// ─────────────────────────────────────────────────────────────

/** Reconstructs the expression text, resolving {var} templates */
function exprResolved(e: Expr, vars: Record<string, number>): string {
  switch (e.t) {
    case "num": return String(e.v)
    case "str": return `"${e.v}"`
    case "cell": return e.r
    case "tmpl": {
      try { return resolveRef(e.r, vars) } catch { return e.r }
    }
    case "range": return e.v
    case "binop":
      return `${exprResolved(e.l, vars)} ${e.op} ${exprResolved(e.r, vars)}`
    case "fn":
      return `${e.name}(${e.args.map(a => exprResolved(a, vars)).join(", ")})`
  }
}

/** Shows the expression with cell values substituted */
function exprNumeric(e: Expr, ctx: Ctx): string {
  switch (e.t) {
    case "num": return String(e.v)
    case "str": return `"${e.v}"`
    case "cell": return String(cellVal(e.r, ctx))
    case "tmpl": {
      try { return String(cellVal(resolveRef(e.r, ctx.vars), ctx)) } catch { return "?" }
    }
    case "range": return e.v
    case "binop":
      return `${exprNumeric(e.l, ctx)} ${e.op} ${exprNumeric(e.r, ctx)}`
    case "fn":
      return `${e.name}(${e.args.map(a => exprNumeric(a, ctx)).join(", ")})`
  }
}

function fmtForStep(v: string | number): string {
  if (typeof v === "string") return `"${v}"`
  return String(parseFloat(v.toPrecision(10)))
}

function fmtForCell(v: string | number): string {
  if (typeof v === "string") return v
  return String(parseFloat(v.toPrecision(10)))
}

// ─────────────────────────────────────────────────────────────
// Execute single assignment
// ─────────────────────────────────────────────────────────────

function execAssign(node: AssignNode, ctx: Ctx, steps: string[]): void {
  const ref = node.cell.includes("{") ? resolveRef(node.cell, ctx.vars) : node.cell
  const raw = exprResolved(node.expr, ctx.vars)
  const nums = exprNumeric(node.expr, ctx)
  const val = evalExpr(node.expr, ctx)
  const result = fmtForStep(val)

  let step: string
  if (raw === nums) {
    // No cell refs — pure literals
    step = `Línea ${node.line}: ${ref} = ${raw} → ${ref} = ${result}`
  } else {
    step = `Línea ${node.line}: ${ref} = ${raw} → ${nums} = ${result} → ${ref} = ${result}`
  }
  steps.push(step)
  ctx.cells[ref] = fmtForCell(val)
}

// ─────────────────────────────────────────────────────────────
// Main entry point
// ─────────────────────────────────────────────────────────────

export function runDSL(script: string, block: TableBlock): DSLResult {
  const errors: { line: number; message: string }[] = []
  const steps: string[] = []
  const ctx: Ctx = { block, cells: {}, vars: {}, t0: Date.now() }
  let stmtCount = 0

  for (const [li, rawLine] of script.split("\n").entries()) {
    const lineNum = li + 1
    const line = rawLine.trim()

    if (!line || line.startsWith("#")) continue

    if (++stmtCount > 50) {
      errors.push({ line: lineNum, message: "Límite de 50 sentencias alcanzado" })
      break
    }

    if (Date.now() - ctx.t0 > 100) {
      errors.push({ line: lineNum, message: "#TIMEOUT: la evaluación excedió 100ms" })
      break
    }

    try {
      const ts = lex(line)
      const parser = new P(ts, lineNum)
      const node = parser.parseNode()

      if (node.t === "loop") {
        const { vr, from, to, body } = node
        const iters = Math.abs(to - from) + 1
        if (iters > 100) {
          errors.push({
            line: lineNum,
            message: `Bucle excede el límite de 100 iteraciones (${iters})`,
          })
          continue
        }
        steps.push(`Línea ${lineNum}: Bucle PARA ${vr} EN ${from}..${to}`)
        const step = from <= to ? 1 : -1
        for (let v = from; step > 0 ? v <= to : v >= to; v += step) {
          ctx.vars[vr] = v
          if (Date.now() - ctx.t0 > 100) {
            errors.push({ line: lineNum, message: "#TIMEOUT: la evaluación excedió 100ms" })
            break
          }
          execAssign(body, ctx, steps)
        }
        delete ctx.vars[vr]
      } else {
        execAssign(node, ctx, steps)
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      if (msg === "#TIMEOUT") {
        errors.push({ line: lineNum, message: "#TIMEOUT: la evaluación excedió 100ms" })
        break
      }
      errors.push({ line: lineNum, message: msg })
    }
  }

  return {
    success: errors.length === 0,
    updatedCells: ctx.cells,
    errors,
    executionSteps: steps,
  }
}
