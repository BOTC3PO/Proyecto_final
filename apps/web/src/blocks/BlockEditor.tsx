import { useCallback } from "react"
import type { BlockDocument, Block, TextBlock, LatexBlock, TableBlock, ChartBlock, FlowBlock } from "./types"
import { createEmptyBlockDocument } from "./utils"

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

function ChartBlockEditor({
  block,
  onChange,
  onRemove,
}: {
  block: ChartBlock
  onChange: (patch: Partial<ChartBlock>) => void
  onRemove: () => void
}) {
  const data = block.data ?? { labels: [], datasets: [] }

  const setLabels = (raw: string) => {
    const labels = raw.split(",").map((s) => s.trim()).filter(Boolean)
    onChange({ data: { ...data, labels } })
  }

  const addDataset = () => {
    onChange({
      data: {
        ...data,
        datasets: [...data.datasets, { label: `Serie ${data.datasets.length + 1}`, values: data.labels.map(() => 0) }],
      },
    })
  }

  const updateDataset = (di: number, field: string, val: string) => {
    const datasets = data.datasets.map((ds, i) => {
      if (i !== di) return ds
      if (field === "label") return { ...ds, label: val }
      if (field === "color") return { ...ds, color: val }
      if (field === "values") {
        const values = val.split(",").map((v) => Number(v.trim()) || 0)
        return { ...ds, values }
      }
      return ds
    })
    onChange({ data: { ...data, datasets } })
  }

  const removeDataset = (di: number) => {
    onChange({ data: { ...data, datasets: data.datasets.filter((_, i) => i !== di) } })
  }

  return (
    <div className="flex gap-2">
      <div className="flex-1 space-y-2">
        <div className="flex gap-2">
          <input
            className="flex-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm"
            placeholder="Título del gráfico (opcional)"
            value={block.title ?? ""}
            onChange={(e) => onChange({ title: e.target.value || undefined })}
          />
          <select
            className="rounded-md border border-gray-300 px-2 py-1.5 text-sm"
            value={block.chartType}
            onChange={(e) => onChange({ chartType: e.target.value as ChartBlock["chartType"] })}
          >
            <option value="bar">Barras</option>
            <option value="line">Líneas</option>
            <option value="pie">Torta</option>
          </select>
        </div>
        <input
          className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-xs"
          placeholder="Etiquetas separadas por coma: Ene, Feb, Mar"
          value={data.labels.join(", ")}
          onChange={(e) => setLabels(e.target.value)}
        />
        {data.datasets.map((ds, di) => (
          <div key={di} className="flex gap-1 items-center">
            <input
              className="w-28 rounded-md border border-gray-300 px-2 py-1 text-xs"
              placeholder="Nombre serie"
              value={ds.label}
              onChange={(e) => updateDataset(di, "label", e.target.value)}
            />
            <input
              className="flex-1 rounded-md border border-gray-300 px-2 py-1 text-xs font-mono"
              placeholder="Valores: 10, 20, 30"
              value={ds.values.join(", ")}
              onChange={(e) => updateDataset(di, "values", e.target.value)}
            />
            <input
              type="color"
              className="h-7 w-8 rounded border border-gray-300 p-0.5"
              value={ds.color ?? "#6366f1"}
              onChange={(e) => updateDataset(di, "color", e.target.value)}
            />
            <button
              type="button"
              className="rounded border border-red-200 bg-red-50 px-1.5 py-1 text-xs text-red-600 hover:bg-red-100"
              onClick={() => removeDataset(di)}
            >
              ✕
            </button>
          </div>
        ))}
        <button
          type="button"
          className="rounded-md border border-gray-300 px-2 py-1 text-xs hover:bg-gray-50"
          onClick={addDataset}
        >
          + Serie
        </button>
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

function FlowBlockEditor({
  block,
  onChange,
  onRemove,
}: {
  block: FlowBlock
  onChange: (patch: Partial<FlowBlock>) => void
  onRemove: () => void
}) {
  const addNode = () => {
    const id = crypto.randomUUID()
    const col = block.nodes.length % 3
    const row = Math.floor(block.nodes.length / 3)
    onChange({
      nodes: [
        ...block.nodes,
        { id, label: `Nodo ${block.nodes.length + 1}`, x: col * 160, y: row * 100, shape: "rect" },
      ],
    })
  }

  const updateNode = (id: string, field: string, val: string) => {
    onChange({
      nodes: block.nodes.map((n) =>
        n.id !== id ? n : { ...n, [field]: field === "x" || field === "y" ? Number(val) : val }
      ),
    })
  }

  const removeNode = (id: string) => {
    onChange({
      nodes: block.nodes.filter((n) => n.id !== id),
      edges: block.edges.filter((e) => e.fromId !== id && e.toId !== id),
    })
  }

  const addEdge = () => {
    if (block.nodes.length < 2) return
    const id = crypto.randomUUID()
    onChange({
      edges: [...block.edges, { id, fromId: block.nodes[0].id, toId: block.nodes[1].id }],
    })
  }

  const updateEdge = (id: string, field: string, val: string) => {
    onChange({ edges: block.edges.map((e) => (e.id !== id ? e : { ...e, [field]: val })) })
  }

  const removeEdge = (id: string) => {
    onChange({ edges: block.edges.filter((e) => e.id !== id) })
  }

  return (
    <div className="flex gap-2">
      <div className="flex-1 space-y-2">
        <input
          className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm"
          placeholder="Título del diagrama (opcional)"
          value={block.title ?? ""}
          onChange={(e) => onChange({ title: e.target.value || undefined })}
        />
        <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Nodos</p>
        {block.nodes.map((node) => (
          <div key={node.id} className="flex gap-1 items-center flex-wrap">
            <input
              className="w-28 rounded-md border border-gray-300 px-2 py-1 text-xs"
              placeholder="Etiqueta"
              value={node.label}
              onChange={(e) => updateNode(node.id, "label", e.target.value)}
            />
            <select
              className="rounded-md border border-gray-300 px-1.5 py-1 text-xs"
              value={node.shape ?? "rect"}
              onChange={(e) => updateNode(node.id, "shape", e.target.value)}
            >
              <option value="rect">Rect</option>
              <option value="diamond">Rombo</option>
              <option value="circle">Círculo</option>
            </select>
            <input
              type="number"
              className="w-16 rounded-md border border-gray-300 px-1.5 py-1 text-xs"
              placeholder="x"
              value={node.x}
              onChange={(e) => updateNode(node.id, "x", e.target.value)}
            />
            <input
              type="number"
              className="w-16 rounded-md border border-gray-300 px-1.5 py-1 text-xs"
              placeholder="y"
              value={node.y}
              onChange={(e) => updateNode(node.id, "y", e.target.value)}
            />
            <input
              type="color"
              className="h-7 w-8 rounded border border-gray-300 p-0.5"
              value={node.color ?? "#e0e7ff"}
              onChange={(e) => updateNode(node.id, "color", e.target.value)}
            />
            <button
              type="button"
              className="rounded border border-red-200 bg-red-50 px-1.5 py-1 text-xs text-red-600 hover:bg-red-100"
              onClick={() => removeNode(node.id)}
            >
              ✕
            </button>
          </div>
        ))}
        <button
          type="button"
          className="rounded-md border border-gray-300 px-2 py-1 text-xs hover:bg-gray-50"
          onClick={addNode}
        >
          + Nodo
        </button>
        {block.nodes.length >= 2 && (
          <>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 pt-1">Aristas</p>
            {block.edges.map((edge) => (
              <div key={edge.id} className="flex gap-1 items-center">
                <select
                  className="flex-1 rounded-md border border-gray-300 px-1.5 py-1 text-xs"
                  value={edge.fromId}
                  onChange={(e) => updateEdge(edge.id, "fromId", e.target.value)}
                >
                  {block.nodes.map((n) => <option key={n.id} value={n.id}>{n.label}</option>)}
                </select>
                <span className="text-xs text-gray-400">→</span>
                <select
                  className="flex-1 rounded-md border border-gray-300 px-1.5 py-1 text-xs"
                  value={edge.toId}
                  onChange={(e) => updateEdge(edge.id, "toId", e.target.value)}
                >
                  {block.nodes.map((n) => <option key={n.id} value={n.id}>{n.label}</option>)}
                </select>
                <input
                  className="w-20 rounded-md border border-gray-300 px-1.5 py-1 text-xs"
                  placeholder="Etiqueta"
                  value={edge.label ?? ""}
                  onChange={(e) => updateEdge(edge.id, "label", e.target.value)}
                />
                <button
                  type="button"
                  className="rounded border border-red-200 bg-red-50 px-1.5 py-1 text-xs text-red-600 hover:bg-red-100"
                  onClick={() => removeEdge(edge.id)}
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              type="button"
              className="rounded-md border border-gray-300 px-2 py-1 text-xs hover:bg-gray-50"
              onClick={addEdge}
            >
              + Arista
            </button>
          </>
        )}
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
              : "Flujo"
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
              ) : null}
            </div>
          )
        })
      )}
      <div className="flex flex-wrap gap-2">
        <span className="text-xs text-gray-400 self-center">Agregar:</span>
        {(["text", "latex", "table", "chart", "flow"] as const).map((t) => (
          <button
            key={t}
            type="button"
            className="rounded-md border border-gray-300 px-2.5 py-1 text-xs hover:bg-gray-50"
            onClick={() => handleAdd(t)}
          >
            {t === "text" ? "Texto" : t === "latex" ? "LaTeX" : t === "table" ? "Tabla" : t === "chart" ? "Gráfico" : "Flujo"}
          </button>
        ))}
      </div>
    </div>
  )
}
