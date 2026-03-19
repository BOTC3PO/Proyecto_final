import type { FlowBlock } from "../types"
import { FlowBlockRenderer } from "../renderers/FlowBlockRenderer"

const inputCls =
  "w-full text-xs border border-slate-200 rounded px-1.5 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-400"

export function FlowBlockEditor({
  block,
  onUpdate,
}: {
  block: FlowBlock
  onUpdate: (patch: Record<string, unknown>) => void
}) {
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
        <label className="text-xs font-medium text-gray-600 block mb-1">Título</label>
        <input
          className={inputCls}
          value={block.title ?? ""}
          onChange={(e) => onUpdate({ title: e.target.value })}
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="text-xs font-medium text-gray-600">Nodos</label>
          <button
            onClick={addNode}
            className="text-xs px-1.5 py-0.5 border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 rounded"
          >
            + Nodo
          </button>
        </div>
        <div className="space-y-1 max-h-40 overflow-y-auto">
          {block.nodes.map((node) => (
            <div key={node.id} className="flex items-center gap-1 text-xs">
              <input
                className="flex-1 border border-slate-200 rounded px-1 py-0.5 focus:outline-none"
                value={node.label}
                onChange={(e) => updateNode(node.id, { label: e.target.value })}
              />
              <select
                className="border border-slate-200 rounded px-1 py-0.5 focus:outline-none text-xs"
                value={node.shape ?? "rect"}
                onChange={(e) =>
                  updateNode(node.id, {
                    shape: e.target.value as "rect" | "diamond" | "circle",
                  })
                }
              >
                <option value="rect">■</option>
                <option value="diamond">◆</option>
                <option value="circle">●</option>
              </select>
              <button
                onClick={() => removeNode(node.id)}
                className="text-red-400 hover:text-red-600 px-1"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="text-xs font-medium text-gray-600">Conexiones</label>
          <button
            onClick={addEdge}
            className="text-xs px-1.5 py-0.5 border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 rounded"
            disabled={block.nodes.length < 2}
          >
            + Conexión
          </button>
        </div>
        <div className="space-y-1 max-h-32 overflow-y-auto">
          {block.edges.map((edge) => (
            <div key={edge.id} className="flex items-center gap-1 text-xs">
              <select
                className="flex-1 border border-slate-200 rounded px-1 py-0.5 focus:outline-none text-xs"
                value={edge.fromId}
                onChange={(e) => updateEdge(edge.id, { fromId: e.target.value })}
              >
                {block.nodes.map((n) => (
                  <option key={n.id} value={n.id}>
                    {n.label}
                  </option>
                ))}
              </select>
              <span className="text-gray-400">→</span>
              <select
                className="flex-1 border border-slate-200 rounded px-1 py-0.5 focus:outline-none text-xs"
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
                onClick={() => removeEdge(edge.id)}
                className="text-red-400 hover:text-red-600 px-1"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-slate-100 bg-slate-50 p-2">
        <FlowBlockRenderer block={block} />
      </div>
    </div>
  )
}
