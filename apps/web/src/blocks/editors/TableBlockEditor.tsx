import { useState } from "react"
import type { TableBlock } from "../types"

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

const inputCls =
  "w-full text-xs border border-slate-200 rounded px-1.5 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-400"

export function TableBlockEditor({
  block,
  onUpdate,
}: {
  block: TableBlock
  onUpdate: (patch: Record<string, unknown>) => void
}) {
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
        <label className="text-xs font-medium text-gray-600 block mb-1">Título</label>
        <input
          className={inputCls}
          value={block.title ?? ""}
          onChange={(e) => onUpdate({ title: e.target.value })}
        />
      </div>
      <p className="text-xs text-slate-400 italic">
        Editá las celdas directamente en el bloque del canvas. La barra de fórmulas (fx) aparece al seleccionar una celda.
      </p>
      <div className="flex gap-2">
        <button
          onClick={addRow}
          className="text-xs px-2 py-1 border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 rounded"
        >
          + Fila
        </button>
        <button
          onClick={addCol}
          className="text-xs px-2 py-1 border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 rounded"
        >
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
        <p className="text-sm font-semibold text-slate-700 px-4 pt-3 pb-1">{block.title}</p>
      )}
      <div className="overflow-x-auto px-4 pt-3">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              {block.headers.map((h, ci) => (
                <th key={ci} className="border border-slate-200 bg-slate-50 p-1.5">
                  <input
                    className="w-full bg-transparent font-semibold text-sm focus:outline-none text-center"
                    value={h}
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
              <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                {row.map((cell, ci) => {
                  const key = getCellKey(ri, ci)
                  const hasFormula = !!block.formulas?.[key]
                  const isSelected = selectedCell?.ri === ri && selectedCell?.ci === ci
                  return (
                    <td
                      key={ci}
                      className={cx(
                        "border border-slate-200 p-1",
                        hasFormula ? "bg-indigo-50" : "",
                        isSelected ? "ring-2 ring-inset ring-indigo-400" : ""
                      )}
                      onClick={(e) => handleCellClick(e, ri, ci)}
                    >
                      <input
                        className={cx(
                          "w-full bg-transparent text-sm focus:outline-none px-1",
                          hasFormula ? "text-indigo-700 cursor-pointer" : ""
                        )}
                        value={hasFormula ? String(block.formulas![key]) : String(cell)}
                        readOnly={hasFormula}
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
        <div className="flex items-center gap-2 border-t border-slate-200 bg-slate-50 px-4 py-1.5 mt-2">
          <span className="shrink-0 text-xs font-semibold italic text-slate-500 select-none">fx</span>
          <span className="shrink-0 text-xs text-slate-400 font-mono">
            {getCellKey(selectedCell.ri, selectedCell.ci)}
          </span>
          <input
            autoFocus
            className="flex-1 bg-transparent font-mono text-xs outline-none"
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
          onClick={(e) => {
            e.stopPropagation()
            const newRow = new Array(block.headers.length).fill("")
            onUpdate({ rows: [...block.rows, newRow] })
          }}
          className="text-xs px-2 py-1 border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 rounded"
        >
          + Fila
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            const newHeaders = [...block.headers, `Col ${block.headers.length + 1}`]
            const newRows = block.rows.map((r) => [...r, ""])
            onUpdate({ headers: newHeaders, rows: newRows })
          }}
          className="text-xs px-2 py-1 border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 rounded"
        >
          + Columna
        </button>
      </div>
    </div>
  )
}
