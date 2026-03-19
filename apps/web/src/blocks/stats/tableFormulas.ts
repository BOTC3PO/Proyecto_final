import type { TableBlock } from "../types"

/** Converts a column letter (A, B, ..., Z) to a 0-based index. */
function colLetterToIndex(col: string): number {
  let index = 0
  for (let i = 0; i < col.length; i++) {
    index = index * 26 + (col.charCodeAt(i) - 64)
  }
  return index - 1
}

/** Parses a cell reference like "A1" into {row, col} (both 0-indexed). */
function parseCell(ref: string): { row: number; col: number } | null {
  const match = ref.match(/^([A-Z]+)(\d+)$/)
  if (!match) return null
  return {
    col: colLetterToIndex(match[1]),
    row: parseInt(match[2], 10) - 1,
  }
}

/** Converts a 0-based column index to a letter (0 → "A", 1 → "B", …). */
function colIndexToLetter(ci: number): string {
  return String.fromCharCode(65 + ci)
}

/**
 * Gets the numeric value of a cell, resolving formulas recursively.
 * Throws Error("CYCLE") if a cycle is detected.
 */
function getCellValue(
  block: TableBlock,
  ref: string,
  visiting: Set<string>
): number {
  const coords = parseCell(ref)
  if (!coords) return 0

  const { row, col } = coords
  if (
    row < 0 ||
    col < 0 ||
    row >= block.rows.length ||
    col >= (block.rows[row]?.length ?? 0)
  )
    return 0

  const formula = block.formulas?.[ref]
  if (formula) {
    if (visiting.has(ref)) throw new Error("CYCLE")
    visiting.add(ref)
    const result = evaluateExpression(formula, block, visiting)
    visiting.delete(ref)
    const num = parseFloat(result)
    return isNaN(num) ? 0 : num
  }

  const val = block.rows[row][col]
  const num = parseFloat(String(val))
  return isNaN(num) ? 0 : num
}

/**
 * Returns all numeric values in a range like "A1:B3".
 * Resolves formulas recursively.
 */
function getRangeValues(
  block: TableBlock,
  rangeStr: string,
  visiting: Set<string>
): number[] {
  const parts = rangeStr.split(":")
  if (parts.length !== 2) return []

  const start = parseCell(parts[0].trim())
  const end = parseCell(parts[1].trim())
  if (!start || !end) return []

  const values: number[] = []
  for (let row = start.row; row <= end.row; row++) {
    for (let col = start.col; col <= end.col; col++) {
      const ref = `${colIndexToLetter(col)}${row + 1}`
      values.push(getCellValue(block, ref, visiting))
    }
  }
  return values
}

/**
 * Counts non-empty raw cells (not resolved formula values) in a range.
 */
function countNonEmptyInRange(
  block: TableBlock,
  rangeStr: string
): number {
  const parts = rangeStr.split(":")
  if (parts.length !== 2) return 0

  const start = parseCell(parts[0].trim())
  const end = parseCell(parts[1].trim())
  if (!start || !end) return 0

  let count = 0
  for (let row = start.row; row <= end.row; row++) {
    for (let col = start.col; col <= end.col; col++) {
      const ref = `${colIndexToLetter(col)}${row + 1}`
      const coords = parseCell(ref)
      if (!coords) continue
      const { row: r, col: c } = coords
      if (
        r >= 0 &&
        c >= 0 &&
        r < block.rows.length &&
        c < (block.rows[r]?.length ?? 0)
      ) {
        // Count as non-empty if raw value is non-empty or formula exists
        const hasFormula = !!block.formulas?.[ref]
        const rawVal = String(block.rows[r][c]).trim()
        if (hasFormula || rawVal !== "") count++
      }
    }
  }
  return count
}

/**
 * Core evaluator. Receives a formula string (starting with "="),
 * the block, and a set of cell references currently being visited (for cycle detection).
 */
function evaluateExpression(
  expr: string,
  block: TableBlock,
  visiting: Set<string>
): string {
  const trimmed = expr.trim()
  if (!trimmed.startsWith("=")) return trimmed

  const formula = trimmed.slice(1).trim()

  try {
    // Named functions: SUMA, PROMEDIO, MAX, MIN, CONTAR, PRODUCTO, REDONDEAR
    const funcMatch = formula.match(
      /^(SUMA|PROMEDIO|MAX|MIN|CONTAR|PRODUCTO|REDONDEAR)\((.+)\)$/i
    )
    if (funcMatch) {
      const funcName = funcMatch[1].toUpperCase()
      const args = funcMatch[2]

      if (funcName === "REDONDEAR") {
        // REDONDEAR(A1, 2)
        const argParts = args.split(",")
        if (argParts.length !== 2) return "#ERROR"
        const cellVal = getCellValue(block, argParts[0].trim(), visiting)
        const decimals = parseInt(argParts[1].trim(), 10)
        if (isNaN(decimals)) return "#ERROR"
        const factor = Math.pow(10, decimals)
        return String(Math.round(cellVal * factor) / factor)
      }

      if (funcName === "CONTAR") {
        return String(countNonEmptyInRange(block, args.trim()))
      }

      const values = getRangeValues(block, args.trim(), visiting)

      if (funcName === "SUMA") {
        return String(values.reduce((sum, v) => sum + v, 0))
      }
      if (funcName === "PROMEDIO") {
        if (values.length === 0) return "0"
        return String(values.reduce((sum, v) => sum + v, 0) / values.length)
      }
      if (funcName === "MAX") {
        if (values.length === 0) return "0"
        return String(Math.max(...values))
      }
      if (funcName === "MIN") {
        if (values.length === 0) return "0"
        return String(Math.min(...values))
      }
      if (funcName === "PRODUCTO") {
        if (values.length === 0) return "0"
        return String(values.reduce((prod, v) => prod * v, 1))
      }
    }

    // Single cell reference: =A1
    const cellRefMatch = formula.match(/^([A-Z]+\d+)$/)
    if (cellRefMatch) {
      return String(getCellValue(block, cellRefMatch[1], visiting))
    }

    // Simple arithmetic between two cell references: =A1+B1, =A1-B1, =A1*B1, =A1/B1
    const arithMatch = formula.match(
      /^([A-Z]+\d+)\s*([\+\-\*\/])\s*([A-Z]+\d+)$/
    )
    if (arithMatch) {
      const left = getCellValue(block, arithMatch[1], visiting)
      const op = arithMatch[2]
      const right = getCellValue(block, arithMatch[3], visiting)
      if (op === "+") return String(left + right)
      if (op === "-") return String(left - right)
      if (op === "*") return String(left * right)
      if (op === "/") {
        if (right === 0) return "#ERROR"
        return String(left / right)
      }
    }

    return "#ERROR"
  } catch (e) {
    if (e instanceof Error && e.message === "CYCLE") return "#CICLO"
    return "#ERROR"
  }
}

/**
 * Evaluates a formula expression against a TableBlock and returns the result as a string.
 * Returns "#ERROR" for invalid expressions and "#CICLO" for circular references.
 */
export function evaluate(expr: string, block: TableBlock): string {
  try {
    return evaluateExpression(expr, block, new Set())
  } catch (e) {
    if (e instanceof Error && e.message === "CYCLE") return "#CICLO"
    return "#ERROR"
  }
}
