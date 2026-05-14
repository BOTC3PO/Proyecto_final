import { useState } from "react"
import type { TableBlock } from "../types"
import { evaluate } from "../stats/tableFormulas"
import { runDSL } from "../stats/tableDSL"

interface Props {
  block: TableBlock
}

function getCellKey(rowIdx: number, colIdx: number): string {
  return `${String.fromCharCode(65 + colIdx)}${rowIdx + 1}`
}

function ScriptProcessPanel({ steps }: { steps: string[] }) {
  const [open, setOpen] = useState(false)
  if (steps.length === 0) return null
  return (
    <div className="mt-2 rounded border border-[var(--c-border)]">
      <button
        type="button"
        className="flex w-full items-center justify-between px-3 py-2 text-xs font-semibold text-[var(--c-muted)] hover:bg-[var(--c-bg)]"
        onClick={() => setOpen((v) => !v)}
      >
        <span>Proceso del script</span>
        <span>{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="border-t border-[var(--c-border)] px-3 py-2 space-y-0.5">
          {steps.map((step, i) => (
            <p key={i} className="font-mono text-xs text-[var(--c-muted)]">
              {step}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export function TableBlockRenderer({ block }: Props) {
  const dslResult = block.script ? runDSL(block.script, block) : null
  const updatedCells = dslResult?.updatedCells ?? {}

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-[var(--c-border)] text-sm">
        {block.title && (
          <caption className="mb-1 text-left font-semibold text-[var(--c-text)]">
            {block.title}
          </caption>
        )}
        <thead className="bg-[var(--c-bg)]">
          <tr>
            {block.headers.map((header, i) => (
              <th
                key={i}
                className="border border-[var(--c-border)] px-3 py-2 text-left font-semibold text-[var(--c-text)]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className={rowIdx % 2 === 0 ? "bg-[var(--c-surface)]" : "bg-[var(--c-bg)]"}
            >
              {row.map((cell, colIdx) => {
                const key = getCellKey(rowIdx, colIdx)

                // DSL result takes priority
                if (key in updatedCells) {
                  return (
                    <td
                      key={colIdx}
                      className="border border-[var(--c-border)] px-3 py-2 text-[var(--c-text)]"
                    >
                      <span className="font-medium text-violet-700">
                        {updatedCells[key]}
                      </span>
                    </td>
                  )
                }

                const formula = block.formulas?.[key]
                if (formula) {
                  const result = evaluate(formula, block)
                  const isError = result === "#ERROR" || result === "#CICLO"
                  return (
                    <td
                      key={colIdx}
                      className="border border-[var(--c-border)] px-3 py-2 text-[var(--c-text)]"
                    >
                      <span className={isError ? "text-red-500" : "font-medium text-indigo-700"}>
                        {result}
                      </span>
                    </td>
                  )
                }

                return (
                  <td
                    key={colIdx}
                    className="border border-[var(--c-border)] px-3 py-2 text-[var(--c-text)]"
                  >
                    {cell}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {block.showScriptProcess && dslResult && dslResult.executionSteps.length > 0 && (
        <ScriptProcessPanel steps={dslResult.executionSteps} />
      )}
    </div>
  )
}
