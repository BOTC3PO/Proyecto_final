import { useId, useState, type CSSProperties } from "react"
import type { TableBlock } from "../types"
import { Table, TableHead, TableBody, TableRow, TableTh, TableTd } from "../../ui"

const inputStyle: CSSProperties = {
  width: "100%",
  fontSize: "var(--text-xs)",
  border: "1px solid var(--c-border)",
  background: "var(--c-surface)",
  color: "var(--c-text)",
  borderRadius: "var(--r-sm)",
  padding: "var(--space-1) 0.375rem",
  outline: "none",
  fontFamily: "var(--font-sans)",
}

const addBtnStyle: CSSProperties = {
  fontSize: "var(--text-xs)",
  padding: "var(--space-1) var(--space-2)",
  border: "1px solid var(--c-border)",
  background: "var(--c-surface)",
  color: "var(--c-text)",
  borderRadius: "var(--r-sm)",
  cursor: "pointer",
  fontFamily: "var(--font-sans)",
}

export function TableBlockEditor({
  block,
  onUpdate,
}: {
  block: TableBlock
  onUpdate: (patch: Record<string, unknown>) => void
}) {
  const titleId = useId()

  const addRow = () => {
    const newRow = new Array(block.headers.length).fill("")
    onUpdate({ rows: [...block.rows, newRow] })
  }

  const addCol = () => {
    const newHeaders = [...block.headers, `Col ${block.headers.length + 1}`]
    const newRows = block.rows.map((r) => [...r, ""])
    onUpdate({ headers: newHeaders, rows: newRows })
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
      <div>
        <label
          htmlFor={titleId}
          style={{
            display: "block",
            marginBottom: "var(--space-1)",
            fontSize: "var(--text-xs)",
            fontWeight: "var(--fw-medium)",
            color: "var(--c-muted)",
          }}
        >
          Título
        </label>
        <input
          id={titleId}
          style={inputStyle}
          value={block.title ?? ""}
          onChange={(e) => onUpdate({ title: e.target.value })}
        />
      </div>
      <p style={{
        margin: 0,
        fontSize: "var(--text-xs)",
        color: "var(--c-muted)",
        fontStyle: "italic",
      }}>
        Editá las celdas directamente en el bloque del canvas. La barra de fórmulas (fx) aparece al seleccionar una celda.
      </p>
      <div style={{ display: "flex", gap: "var(--space-2)" }}>
        <button type="button" onClick={addRow} style={addBtnStyle}>
          + Fila
        </button>
        <button type="button" onClick={addCol} style={addBtnStyle}>
          + Columna
        </button>
      </div>
    </div>
  )
}

export function InlineTableEditor({
  block,
  onUpdate,
}: {
  block: TableBlock
  onUpdate: (patch: Record<string, unknown>) => void
}) {
  const [selectedCell, setSelectedCell] = useState<{ ri: number; ci: number } | null>(null)
  const [formulaBarValue, setFormulaBarValue] = useState("")

  const getCellKey = (ri: number, ci: number) => `${String.fromCharCode(65 + ci)}${ri + 1}`

  const handleCellClick = (e: React.MouseEvent, ri: number, ci: number) => {
    e.stopPropagation()
    const key = getCellKey(ri, ci)
    const formula = block.formulas?.[key]
    setSelectedCell({ ri, ci })
    setFormulaBarValue(formula ?? String(block.rows[ri][ci]))
  }

  const commitFormulaBar = (ri: number, ci: number, value: string) => {
    const key = getCellKey(ri, ci)
    if (value.startsWith("=")) {
      const formulas = { ...(block.formulas ?? {}), [key]: value }
      onUpdate({ formulas })
    } else {
      const rows = block.rows.map((r, i) =>
        i === ri ? r.map((c, j) => (j === ci ? value : c)) : r
      )
      const formulas = { ...(block.formulas ?? {}) }
      delete formulas[key]
      onUpdate({ rows, formulas: Object.keys(formulas).length > 0 ? formulas : undefined })
    }
  }

  const headerInputStyle: CSSProperties = {
    width: "100%",
    background: "transparent",
    color: "var(--c-text)",
    fontWeight: "var(--fw-semibold)",
    fontSize: "var(--text-sm)",
    outline: "none",
    textAlign: "center",
    border: "none",
    fontFamily: "var(--font-sans)",
  }

  return (
    <div onClick={(e) => e.stopPropagation()}>
      {block.title && (
        <p style={{
          margin: 0,
          fontSize: "var(--text-sm)",
          fontWeight: "var(--fw-semibold)",
          color: "var(--c-text)",
          padding: "var(--space-3) var(--space-4) var(--space-1)",
        }}>
          {block.title}
        </p>
      )}
      <div style={{ overflowX: "auto", padding: "var(--space-3) var(--space-4) 0" }}>
        <Table variant="compact">
          <TableHead>
            <TableRow>
              {block.headers.map((h, ci) => (
                <TableTh key={ci} variant="compact" style={{ padding: "0.375rem" }}>
                  <input
                    style={headerInputStyle}
                    value={h}
                    aria-label={`Encabezado de la columna ${ci + 1}`}
                    onChange={(e) => {
                      const headers = [...block.headers]
                      headers[ci] = e.target.value
                      onUpdate({ headers })
                    }}
                    onClick={(e) => e.stopPropagation()}
                  />
                </TableTh>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {block.rows.map((row, ri) => (
              <TableRow key={ri} even={ri % 2 === 1}>
                {row.map((cell, ci) => {
                  const key = getCellKey(ri, ci)
                  const hasFormula = !!block.formulas?.[key]
                  const isSelected = selectedCell?.ri === ri && selectedCell?.ci === ci

                  const cellStyle: CSSProperties = {
                    padding: "var(--space-1)",
                    ...(hasFormula
                      ? { background: "color-mix(in srgb, var(--c-primary) 10%, transparent)" }
                      : {}),
                    ...(isSelected
                      ? { boxShadow: "inset 0 0 0 2px var(--c-primary)" }
                      : {}),
                  }

                  const cellInputStyle: CSSProperties = {
                    width: "100%",
                    background: "transparent",
                    color: hasFormula ? "var(--c-primary)" : "var(--c-text)",
                    fontSize: "var(--text-sm)",
                    outline: "none",
                    padding: "0 var(--space-1)",
                    border: "none",
                    cursor: hasFormula ? "pointer" : "text",
                    fontFamily: "var(--font-sans)",
                  }

                  return (
                    <TableTd
                      key={ci}
                      variant="compact"
                      style={cellStyle}
                      onClick={(e) => handleCellClick(e, ri, ci)}
                    >
                      <input
                        style={cellInputStyle}
                        value={hasFormula ? String(block.formulas![key]) : String(cell)}
                        readOnly={hasFormula}
                        aria-label={`Celda ${key}`}
                        onChange={(e) => {
                          if (!hasFormula) {
                            const rows = block.rows.map((r, i) =>
                              i === ri ? r.map((c, j) => (j === ci ? e.target.value : c)) : r
                            )
                            onUpdate({ rows })
                          }
                        }}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCellClick(e, ri, ci)
                        }}
                      />
                    </TableTd>
                  )
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Formula bar */}
      {selectedCell && (
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-2)",
          borderTop: "1px solid var(--c-border)",
          background: "var(--c-surface-3)",
          padding: "0.375rem var(--space-4)",
          marginTop: "var(--space-2)",
        }}>
          <span
            style={{
              flexShrink: 0,
              fontSize: "var(--text-xs)",
              fontWeight: "var(--fw-semibold)",
              fontStyle: "italic",
              color: "var(--c-muted)",
              userSelect: "none",
            }}
            aria-hidden="true"
          >
            fx
          </span>
          <span style={{
            flexShrink: 0,
            fontSize: "var(--text-xs)",
            color: "var(--c-muted)",
            fontFamily: "var(--font-mono)",
          }}>
            {getCellKey(selectedCell.ri, selectedCell.ci)}
          </span>
          <input
            autoFocus
            style={{
              flex: 1,
              background: "transparent",
              color: "var(--c-text)",
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              outline: "none",
              border: "none",
            }}
            aria-label={`Fórmula de la celda ${getCellKey(selectedCell.ri, selectedCell.ci)}`}
            value={formulaBarValue}
            onChange={(e) => setFormulaBarValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && selectedCell) {
                commitFormulaBar(selectedCell.ri, selectedCell.ci, formulaBarValue)
              }
            }}
            onBlur={() => {
              if (selectedCell) {
                commitFormulaBar(selectedCell.ri, selectedCell.ci, formulaBarValue)
              }
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      <div
        style={{
          display: "flex",
          gap: "var(--space-2)",
          padding: "var(--space-2) var(--space-4) var(--space-3)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            const newRow = new Array(block.headers.length).fill("")
            onUpdate({ rows: [...block.rows, newRow] })
          }}
          style={addBtnStyle}
        >
          + Fila
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            const newHeaders = [...block.headers, `Col ${block.headers.length + 1}`]
            const newRows = block.rows.map((r) => [...r, ""])
            onUpdate({ headers: newHeaders, rows: newRows })
          }}
          style={addBtnStyle}
        >
          + Columna
        </button>
      </div>
    </div>
  )
}
