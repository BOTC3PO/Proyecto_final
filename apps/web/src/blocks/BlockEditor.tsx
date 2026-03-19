import { useCallback } from "react"
import type { BlockDocument, Block, TextBlock, LatexBlock, TableBlock, ChartBlock, FlowBlock, MathBlock } from "./types"
import { createEmptyBlockDocument } from "./utils"
import { ChartBlockEditor } from "./editors/ChartBlockEditor"
import { MathBlockEditor } from "./editors/MathBlockEditor"
import { FlowBlockEditor } from "./editors/FlowBlockEditor"

interface Props {
  value: BlockDocument
  onChange: (doc: BlockDocument) => void
}

function addBlock(doc: BlockDocument, block: Block): BlockDocument {
  return { ...doc, blocks: [...doc.blocks, block] }
}

function updateBlock(doc: BlockDocument, id: string, patch: Partial<Block>): BlockDocument {
  return {
    ...doc,
    blocks: doc.blocks.map((b) => (b.id === id ? ({ ...b, ...patch } as Block) : b)),
  }
}

function removeBlock(doc: BlockDocument, id: string): BlockDocument {
  return { ...doc, blocks: doc.blocks.filter((b) => b.id !== id) }
}

function TextBlockEditor({
  block,
  onChange,
  onRemove,
}: {
  block: TextBlock
  onChange: (patch: Partial<TextBlock>) => void
  onRemove: () => void
}) {
  return (
    <div className="flex gap-2">
      <textarea
        className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm"
        rows={3}
        placeholder="Texto…"
        value={block.content}
        onChange={(e) => onChange({ content: e.target.value })}
      />
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

function LatexBlockEditor({
  block,
  onChange,
  onRemove,
}: {
  block: LatexBlock
  onChange: (patch: Partial<LatexBlock>) => void
  onRemove: () => void
}) {
  return (
    <div className="flex gap-2">
      <div className="flex-1 space-y-1">
        <textarea
          className="w-full rounded-md border border-gray-300 px-3 py-2 font-mono text-sm"
          rows={2}
          placeholder="Fórmula LaTeX…"
          value={block.content}
          onChange={(e) => onChange({ content: e.target.value })}
        />
        <label className="flex items-center gap-1.5 text-xs text-gray-500">
          <input
            type="checkbox"
            checked={block.displayMode}
            onChange={(e) => onChange({ displayMode: e.target.checked })}
          />
          Modo bloque centrado
        </label>
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

function TableBlockEditor({
  block,
  onChange,
  onRemove,
}: {
  block: TableBlock
  onChange: (patch: Partial<TableBlock>) => void
  onRemove: () => void
}) {
  const addRow = () => {
    onChange({ rows: [...block.rows, block.headers.map(() => "")] })
  }
  const addColumn = () => {
    onChange({
      headers: [...block.headers, `Col ${block.headers.length + 1}`],
      rows: block.rows.map((r) => [...r, ""]),
    })
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
                  {row.map((cell, ci) => (
                    <td key={ci} className="border border-gray-300 p-1">
                      <input
                        className="w-full bg-transparent"
                        value={String(cell)}
                        onChange={(e) => {
                          const rows = block.rows.map((r, i) =>
                            i === ri ? r.map((c, j) => (j === ci ? e.target.value : c)) : r
                          )
                          onChange({ rows })
                        }}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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


export function BlockEditor({ value, onChange }: Props) {
  const doc = value ?? createEmptyBlockDocument()

  const handleUpdate = useCallback(
    (id: string, patch: Partial<Block>) => {
      onChange(updateBlock(doc, id, patch))
    },
    [doc, onChange]
  )

  const handleRemove = useCallback(
    (id: string) => {
      onChange(removeBlock(doc, id))
    },
    [doc, onChange]
  )

  const handleAdd = (type: Block["type"]) => {
    let block: Block
    if (type === "text") {
      block = { id: crypto.randomUUID(), type: "text", content: "" } satisfies TextBlock
    } else if (type === "latex") {
      block = { id: crypto.randomUUID(), type: "latex", content: "", displayMode: true } satisfies LatexBlock
    } else if (type === "table") {
      block = {
        id: crypto.randomUUID(),
        type: "table",
        headers: ["Columna 1", "Columna 2"],
        rows: [["", ""]],
      } satisfies TableBlock
    } else if (type === "chart") {
      block = { id: crypto.randomUUID(), type: "chart", chartType: "bar", data: { labels: [], datasets: [] } } satisfies ChartBlock
    } else if (type === "flow") {
      block = { id: crypto.randomUUID(), type: "flow", nodes: [], edges: [] } satisfies FlowBlock
    } else if (type === "math") {
      block = {
        id: crypto.randomUUID(),
        type: "math",
        functions: [{ id: crypto.randomUUID(), expression: "sin(x)", color: "#2563eb" }],
        xMin: -10,
        xMax: 10,
        samples: 400,
        showGrid: true,
        showLegend: true,
      } satisfies MathBlock
    } else {
      return
    }
    onChange(addBlock(doc, block))
  }

  return (
    <div className="space-y-3">
      {doc.blocks.length === 0 ? (
        <p className="text-xs text-gray-400 italic">Sin bloques. Agrega uno abajo.</p>
      ) : (
        doc.blocks.map((block) => {
          const label =
            block.type === "text"
              ? "Texto"
              : block.type === "latex"
              ? "LaTeX"
              : block.type === "table"
              ? "Tabla"
              : block.type === "chart"
              ? "Gráfico"
              : block.type === "flow"
              ? "Flujo"
              : "Función f(x)"
          return (
            <div key={block.id} className="rounded-md border border-gray-200 bg-white p-3 space-y-1">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">{label}</p>
              {block.type === "text" ? (
                <TextBlockEditor
                  block={block}
                  onChange={(patch) => handleUpdate(block.id, patch)}
                  onRemove={() => handleRemove(block.id)}
                />
              ) : block.type === "latex" ? (
                <LatexBlockEditor
                  block={block}
                  onChange={(patch) => handleUpdate(block.id, patch)}
                  onRemove={() => handleRemove(block.id)}
                />
              ) : block.type === "table" ? (
                <TableBlockEditor
                  block={block}
                  onChange={(patch) => handleUpdate(block.id, patch)}
                  onRemove={() => handleRemove(block.id)}
                />
              ) : block.type === "chart" ? (
                <ChartBlockEditor
                  block={block}
                  onChange={(patch) => handleUpdate(block.id, patch)}
                  onRemove={() => handleRemove(block.id)}
                />
              ) : block.type === "flow" ? (
                <FlowBlockEditor
                  block={block}
                  onChange={(patch) => handleUpdate(block.id, patch)}
                  onRemove={() => handleRemove(block.id)}
                />
              ) : block.type === "math" ? (
                <MathBlockEditor
                  block={block as MathBlock}
                  onChange={(patch) => handleUpdate(block.id, patch as Partial<Block>)}
                  onRemove={() => handleRemove(block.id)}
                />
              ) : null}
            </div>
          )
        })
      )}
      <div className="flex flex-wrap gap-2">
        <span className="text-xs text-gray-400 self-center">Agregar:</span>
        {(["text", "latex", "table", "chart", "flow", "math"] as const).map((t) => (
          <button
            key={t}
            type="button"
            className="rounded-md border border-gray-300 px-2.5 py-1 text-xs hover:bg-gray-50"
            onClick={() => handleAdd(t)}
          >
            {t === "text" ? "Texto" : t === "latex" ? "LaTeX" : t === "table" ? "Tabla" : t === "chart" ? "Gráfico" : t === "flow" ? "Flujo" : "Función f(x)"}
          </button>
        ))}
      </div>
    </div>
  )
}
