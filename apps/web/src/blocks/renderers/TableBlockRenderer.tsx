import { useState, type CSSProperties } from "react"
import type { TableBlock } from "../types"
import { evaluate } from "../stats/tableFormulas"
import { runDSL } from "../stats/tableDSL"
import { Table, TableCaption, TableHead, TableBody, TableRow, TableTh, TableTd } from "../../ui"

interface Props {
  block: TableBlock
}

function getCellKey(rowIdx: number, colIdx: number): string {
  return `${String.fromCharCode(65 + colIdx)}${rowIdx + 1}`
}

function ScriptProcessPanel({ steps }: { steps: string[] }) {
  const [open, setOpen] = useState(false)
  if (steps.length === 0) return null

  const panelStyle: CSSProperties = {
    marginTop: "var(--space-2)",
    borderRadius: "var(--r-sm)",
    border: "1px solid var(--c-border)",
  }

  const toggleStyle: CSSProperties = {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "var(--space-2) var(--space-3)",
    fontSize: "var(--text-xs)",
    fontWeight: "var(--fw-semibold)",
    color: "var(--c-muted)",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "var(--font-sans)",
  }

  const contentStyle: CSSProperties = {
    borderTop: "1px solid var(--c-border)",
    padding: "var(--space-2) var(--space-3)",
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  }

  const stepStyle: CSSProperties = {
    margin: 0,
    fontFamily: "var(--font-mono)",
    fontSize: "var(--text-xs)",
    color: "var(--c-muted)",
  }

  return (
    <div style={panelStyle}>
      <button
        type="button"
        style={toggleStyle}
        onClick={() => setOpen((v) => !v)}
      >
        <span>Proceso del script</span>
        <span>{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div style={contentStyle}>
          {steps.map((step, i) => (
            <p key={i} style={stepStyle}>
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

  const dslValueStyle: CSSProperties = {
    fontWeight: "var(--fw-medium)",
    color: "var(--c-accent)",
  }

  const formulaValueStyle: CSSProperties = {
    fontWeight: "var(--fw-medium)",
    color: "var(--c-primary)",
  }

  const errorValueStyle: CSSProperties = {
    color: "var(--c-danger)",
  }

  return (
    <div style={{ overflowX: "auto" }}>
      <Table>
        {block.title && (
          <TableCaption>{block.title}</TableCaption>
        )}
        <TableHead>
          <TableRow>
            {block.headers.map((header, i) => (
              <TableTh key={i}>{header}</TableTh>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {block.rows.map((row, rowIdx) => (
            <TableRow key={rowIdx} even={rowIdx % 2 === 1}>
              {row.map((cell, colIdx) => {
                const key = getCellKey(rowIdx, colIdx)

                if (key in updatedCells) {
                  return (
                    <TableTd key={colIdx}>
                      <span style={dslValueStyle}>
                        {updatedCells[key]}
                      </span>
                    </TableTd>
                  )
                }

                const formula = block.formulas?.[key]
                if (formula) {
                  const result = evaluate(formula, block)
                  const isError = result === "#ERROR" || result === "#CICLO"
                  return (
                    <TableTd key={colIdx}>
                      <span style={isError ? errorValueStyle : formulaValueStyle}>
                        {result}
                      </span>
                    </TableTd>
                  )
                }

                return (
                  <TableTd key={colIdx}>
                    {cell}
                  </TableTd>
                )
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {block.showScriptProcess && dslResult && dslResult.executionSteps.length > 0 && (
        <ScriptProcessPanel steps={dslResult.executionSteps} />
      )}
    </div>
  )
}
