import { useId } from "react"
import type { FlowBlock } from "../types"
import { FlowBlockRenderer } from "../renderers/FlowBlockRenderer"

const inputCls =
  "w-full text-xs border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] rounded px-1.5 py-1 outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] focus:border-[var(--c-primary)]"
const labelCls = "text-xs font-medium text-[var(--c-muted)] block mb-1"
const rowInputCls =
  "border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] rounded px-1 py-0.5 outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] focus:border-[var(--c-primary)] text-xs"
const addBtnCls =
  "text-xs px-1.5 py-0.5 border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] hover:bg-[var(--c-hover)] rounded disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
const removeBtnCls =
  "text-[var(--c-danger)] hover:opacity-80 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded-sm"

export function FlowBlockEditor({
  block,
  onUpdate,
}: {
  block: FlowBlock
  onUpdate: (patch: Record<string, unknown>) => void
}) {
  const titleId = useId()

  const updateNode = (id: string, patch: Partial<FlowBlock["nodes"][number]>) => {
    const nodes = block.nodes.map((n) => (n.id === id ? { ...n, ...patch } : n))
    onUpdate({ nodes })
  }

  const addNode = () => {
    const id = `n${Date.now().toString(36)}`
    const nodes = [
      ...block.nodes,
      { id, label: "Nuevo nodo", x: 50, y: (block.nodes.length + 1) * 80, shape: "rect" as const },
    ]
    onUpdate({ nodes })
  }

  const removeNode = (id: string) => {
    const nodes = block.nodes.filter((n) => n.id !== id)
    const edges = block.edges.filter((e) => e.fromId !== id && e.toId !== id)
    onUpdate({ nodes, edges })
  }

  const addEdge = () => {
    if (block.nodes.length < 2) return
    const id = `e${Date.now().toString(36)}`
    const edges = [
      ...block.edges,
      { id, fromId: block.nodes[0].id, toId: block.nodes[1].id },
    ]
    onUpdate({ edges })
  }

  const updateEdge = (id: string, patch: Partial<FlowBlock["edges"][number]>) => {
    const edges = block.edges.map((e) => (e.id === id ? { ...e, ...patch } : e))
    onUpdate({ edges })
  }

  const removeEdge = (id: string) => {
    const edges = block.edges.filter((e) => e.id !== id)
    onUpdate({ edges })
  }

  return (
    <div className="space-y-2">
      <div>
        <label htmlFor={titleId} className={labelCls}>Título</label>
        <input
          id={titleId}
          className={inputCls}
          value={block.title ?? ""}
          onChange={(e) => onUpdate({ title: e.target.value })}
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-[var(--c-muted)]">Nodos</span>
          <button type="button" onClick={addNode} className={addBtnCls}>
            + Nodo
          </button>
        </div>
        <div className="space-y-1 max-h-40 overflow-y-auto">
          {block.nodes.map((node, i) => (
            <div key={node.id} className="flex items-center gap-1 text-xs">
              <input
                className={`flex-1 ${rowInputCls}`}
                aria-label={`Etiqueta del nodo ${i + 1}`}
                value={node.label}
                onChange={(e) => updateNode(node.id, { label: e.target.value })}
              />
              <select
                className={rowInputCls}
                aria-label={`Forma del nodo ${i + 1}`}
                value={node.shape ?? "rect"}
                onChange={(e) =>
                  updateNode(node.id, {
                    shape: e.target.value as "rect" | "diamond" | "circle",
                  })
                }
              >
                <option value="rect">■ Rectángulo</option>
                <option value="diamond">◆ Rombo</option>
                <option value="circle">● Círculo</option>
              </select>
              <button
                type="button"
                onClick={() => removeNode(node.id)}
                className={removeBtnCls}
                aria-label={`Eliminar nodo ${i + 1}`}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-[var(--c-muted)]">Conexiones</span>
          <button
            type="button"
            onClick={addEdge}
            className={addBtnCls}
            disabled={block.nodes.length < 2}
          >
            + Conexión
          </button>
        </div>
        <div className="space-y-1 max-h-32 overflow-y-auto">
          {block.edges.map((edge, i) => (
            <div key={edge.id} className="flex items-center gap-1 text-xs">
              <select
                className={`flex-1 ${rowInputCls}`}
                aria-label={`Origen de la conexión ${i + 1}`}
                value={edge.fromId}
                onChange={(e) => updateEdge(edge.id, { fromId: e.target.value })}
              >
                {block.nodes.map((n) => (
                  <option key={n.id} value={n.id}>
                    {n.label}
                  </option>
                ))}
              </select>
              <span className="text-[var(--c-text-3)]" aria-hidden="true">→</span>
              <select
                className={`flex-1 ${rowInputCls}`}
                aria-label={`Destino de la conexión ${i + 1}`}
                value={edge.toId}
                onChange={(e) => updateEdge(edge.id, { toId: e.target.value })}
              >
                {block.nodes.map((n) => (
                  <option key={n.id} value={n.id}>
                    {n.label}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => removeEdge(edge.id)}
                className={removeBtnCls}
                aria-label={`Eliminar conexión ${i + 1}`}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface-3)] p-2">
        <FlowBlockRenderer block={block} />
      </div>
    </div>
  )
}
