import { useState } from "react"
import type { KeyboardEvent } from "react"
import type { TableBlock } from "../types"
import { runDSL } from "../stats/tableDSL"

interface Props {
  block: TableBlock
  onChange: (patch: Partial<TableBlock>) => void
  onRemove: () => void
}

function getCellKey(ri: number, ci: number): string {
  return `${String.fromCharCode(65 + ci)}${ri + 1}`
}

export function TableBlockEditor({ block, onChange, onRemove }: Props) {
  const [selectedCell, setSelectedCell] = useState<{ ri: number; ci: number } | null>(null)
  const [formulaBarValue, setFormulaBarValue] = useState("")
  const [scriptErrors, setScriptErrors] = useState<{ line: number; message: string }[]>([])

  const handleCellClick = (ri: number, ci: number) => {
    const key = getCellKey(ri, ci)
    const formula = block.formulas?.[key]
    const cellValue = String(block.rows[ri][ci])
    setSelectedCell({ ri, ci })
    setFormulaBarValue(formula ?? cellValue)
  }

  const commitFormulaBar = (ri: number, ci: number, value: string) => {
    const key = getCellKey(ri, ci)
    if (value.startsWith("=")) {
      // Save as formula
      const formulas = { ...(block.formulas ?? {}), [key]: value }
      onChange({ formulas })
    } else {
      // Save as normal value and remove formula if it existed
      const rows = block.rows.map((r, i) =>
        i === ri ? r.map((c, j) => (j === ci ? value : c)) : r
      )
      const formulas = { ...(block.formulas ?? {}) }
      delete formulas[key]
      onChange({ rows, formulas: Object.keys(formulas).length > 0 ? formulas : undefined })
    }
  }

  const handleFormulaBarKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && selectedCell) {
      commitFormulaBar(selectedCell.ri, selectedCell.ci, formulaBarValue)
    }
  }

  const handleFormulaBarBlur = () => {
    if (selectedCell) {
      commitFormulaBar(selectedCell.ri, selectedCell.ci, formulaBarValue)
    }
  }

  const addRow = () => {
    onChange({ rows: [...block.rows, block.headers.map(() => "")] })
  }

  const addColumn = () => {
    onChange({
      headers: [...block.headers, `Col ${block.headers.length + 1}`],
      rows: block.rows.map((r) => [...r, ""]),
    })
  }

  const runScript = () => {
    if (!block.script) return
    const result = runDSL(block.script, block)
    setScriptErrors(result.errors)
  }

  return (
    <div className="flex gap-2">
      <div className="flex-1 space-y-2">
        <input
          className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm"
          placeholder="Título de la tabla (opcional)"
          value={block.title ?? ""}
          onChange={(e) => onChange({ title: e.target.value || undefined })}
        />
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr>
                {block.headers.map((h, ci) => (
                  <th key={ci} className="border border-gray-300 p-1">
                    <input
                      className="w-full bg-transparent font-semibold"
                      value={h}
                      onChange={(e) => {
                        const headers = [...block.headers]
                        headers[ci] = e.target.value
                        onChange({ headers })
                      }}
                    />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => {
                    const key = getCellKey(ri, ci)
                    const hasFormula = !!block.formulas?.[key]
                    const isSelected =
                      selectedCell?.ri === ri && selectedCell?.ci === ci
                    return (
                      <td
                        key={ci}
                        className={`border border-gray-300 p-1 ${hasFormula ? "bg-indigo-50" : ""}`}
                        onClick={() => handleCellClick(ri, ci)}
                      >
                        {hasFormula ? (
                          <input
                            className="w-full bg-indigo-50 cursor-pointer"
                            value={block.formulas![key]}
                            readOnly
                            onClick={() => handleCellClick(ri, ci)}
                          />
                        ) : (
                          <input
                            className={`w-full bg-transparent ${isSelected ? "outline outline-1 outline-indigo-400" : ""}`}
                            value={String(cell)}
                            onClick={() => handleCellClick(ri, ci)}
                            onChange={(e) => {
                              const rows = block.rows.map((r, i) =>
                                i === ri
                                  ? r.map((c, j) => (j === ci ? e.target.value : c))
                                  : r
                              )
                              onChange({ rows })
                            }}
                          />
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Formula bar — shown when a cell is selected */}
        {selectedCell && (
          <div className="flex items-center gap-2 rounded-md border border-gray-300 bg-gray-50 px-2 py-1">
            <span className="shrink-0 text-xs font-semibold italic text-gray-500 select-none">fx</span>
            <span className="shrink-0 text-xs text-gray-400 font-mono">
              {getCellKey(selectedCell.ri, selectedCell.ci)}
            </span>
            <input
              autoFocus
              className="flex-1 bg-transparent font-mono text-xs outline-none"
              value={formulaBarValue}
              onChange={(e) => setFormulaBarValue(e.target.value)}
              onKeyDown={handleFormulaBarKeyDown}
              onBlur={handleFormulaBarBlur}
            />
          </div>
        )}

        <div className="flex gap-2">
          <button
            type="button"
            className="rounded-md border border-gray-300 px-2 py-1 text-xs hover:bg-gray-50"
            onClick={addRow}
          >
            + Fila
          </button>
          <button
            type="button"
            className="rounded-md border border-gray-300 px-2 py-1 text-xs hover:bg-gray-50"
            onClick={addColumn}
          >
            + Columna
          </button>
        </div>

        {/* Script section */}
        <div className="rounded-md border border-gray-200 bg-gray-50 p-2 space-y-2">
          <p className="text-xs font-semibold text-gray-700">Script</p>
          <textarea
            className="h-40 w-full rounded border border-gray-300 bg-white px-2 py-1.5 font-mono text-xs outline-none focus:border-violet-400"
            placeholder={"# Ejemplo: calcular IVA en columna C\nPARA i EN 2..10: C{i} = B{i} * 0.21"}
            value={block.script ?? ""}
            onChange={(e) => {
              setScriptErrors([])
              onChange({ script: e.target.value || undefined })
            }}
          />
          {scriptErrors.length > 0 && (
            <div className="space-y-0.5">
              {scriptErrors.map((err, i) => (
                <p key={i} className="text-red-500 text-xs">
                  Línea {err.line}: {err.message}
                </p>
              ))}
            </div>
          )}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded border border-violet-300 bg-violet-50 px-2 py-1 text-xs text-violet-700 hover:bg-violet-100"
              onClick={runScript}
            >
              ▶ Ejecutar
            </button>
            <label className="flex items-center gap-1.5 text-xs text-gray-600 cursor-pointer select-none">
              <input
                type="checkbox"
                className="accent-violet-600"
                checked={block.showScriptProcess ?? false}
                onChange={(e) => onChange({ showScriptProcess: e.target.checked || undefined })}
              />
              Mostrar proceso al alumno
            </label>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="self-start rounded-md border border-red-200 bg-red-50 px-2 py-1 text-xs text-red-600 hover:bg-red-100"
        onClick={onRemove}
      >
        ✕
      </button>
    </div>
  )
}
