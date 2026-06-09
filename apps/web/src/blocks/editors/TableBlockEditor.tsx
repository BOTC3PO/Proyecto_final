import { useId, useState } from "react"
import type { TableBlock } from "../types"

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

const inputCls =
  "w-full text-xs border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] rounded px-1.5 py-1 outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] focus:border-[var(--c-primary)]"
const addBtnCls =
  "text-xs px-2 py-1 border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] hover:bg-[var(--c-hover)] rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"

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
    <div className="space-y-2">
      <div>
        <label htmlFor={titleId} className="text-xs font-medium text-[var(--c-muted)] block mb-1">Título</label>
        <input
          id={titleId}
          className={inputCls}
          value={block.title ?? ""}
          onChange={(e) => onUpdate({ title: e.target.value })}
        />
      </div>
      <p className="text-xs text-[var(--c-text-3)] italic">
        Editá las celdas directamente en el bloque del canvas. La barra de fórmulas (fx) aparece al seleccionar una celda.
      </p>
      <div className="flex gap-2">
        <button type="button" onClick={addRow} className={addBtnCls}>
          + Fila
        </button>
        <button type="button" onClick={addCol} className={addBtnCls}>
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

  return (
    <div className="space-y-0" onClick={(e) => e.stopPropagation()}>
      {block.title && (
        <p className="text-sm font-semibold text-[var(--c-text)] px-4 pt-3 pb-1">{block.title}</p>
      )}
      <div className="overflow-x-auto px-4 pt-3">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              {block.headers.map((h, ci) => (
                <th key={ci} className="border border-[var(--c-border)] bg-[var(--c-surface-3)] p-1.5">
                  <input
                    className="w-full bg-transparent text-[var(--c-text)] font-semibold text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded-sm text-center"
                    value={h}
                    aria-label={`Encabezado de la columna ${ci + 1}`}
                    onChange={(e) => {
                      const headers = [...block.headers]
                      headers[ci] = e.target.value
                      onUpdate({ headers })
                    }}
                    onClick={(e) => e.stopPropagation()}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? "bg-[var(--c-surface)]" : "bg-[var(--c-surface-3)]"}>
                {row.map((cell, ci) => {
                  const key = getCellKey(ri, ci)
                  const hasFormula = !!block.formulas?.[key]
                  const isSelected = selectedCell?.ri === ri && selectedCell?.ci === ci
                  return (
                    <td
                      key={ci}
                      className={cx(
                        "border border-[var(--c-border)] p-1",
                        hasFormula ? "bg-[color-mix(in_srgb,var(--c-primary)_10%,transparent)]" : "",
                        isSelected ? "ring-2 ring-inset ring-[var(--c-primary)]" : ""
                      )}
                      onClick={(e) => handleCellClick(e, ri, ci)}
                    >
                      <input
                        className={cx(
                          "w-full bg-transparent text-[var(--c-text)] text-sm outline-none px-1",
                          hasFormula ? "text-[var(--c-primary)] cursor-pointer" : ""
                        )}
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
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Formula bar at bottom of block */}
      {selectedCell && (
        <div className="flex items-center gap-2 border-t border-[var(--c-border)] bg-[var(--c-surface-3)] px-4 py-1.5 mt-2">
          <span className="shrink-0 text-xs font-semibold italic text-[var(--c-muted)] select-none" aria-hidden="true">fx</span>
          <span className="shrink-0 text-xs text-[var(--c-text-3)] font-mono">
            {getCellKey(selectedCell.ri, selectedCell.ci)}
          </span>
          <input
            autoFocus
            className="flex-1 bg-transparent text-[var(--c-text)] font-mono text-xs outline-none"
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
      <div className="flex gap-2 px-4 pb-3 pt-2" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            const newRow = new Array(block.headers.length).fill("")
            onUpdate({ rows: [...block.rows, newRow] })
          }}
          className={addBtnCls}
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
          className={addBtnCls}
        >
          + Columna
        </button>
      </div>
    </div>
  )
}
