import { useState, useCallback, useRef, useEffect } from "react"
import {
  ReactFlow,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  type Node,
  type Edge,
  type NodeChange,
  type EdgeChange,
  type Connection,
  Handle,
  Position,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import type { FlowBlock } from "../types"

// ---- types ----

type FlowNodeData = {
  label: string
  color: string
  onLabelChange: (id: string, label: string) => void
} & Record<string, unknown>

type RFNode = Node<FlowNodeData>

// ---- helpers ----

const TYPE_MAP = { rect: "rectNode", diamond: "diamondNode", circle: "circleNode" } as const
const REVERSE_TYPE_MAP: Record<string, "rect" | "diamond" | "circle"> = {
  rectNode: "rect",
  diamondNode: "diamond",
  circleNode: "circle",
}

function toRFNode(
  n: FlowBlock["nodes"][number],
  onLabelChange: (id: string, label: string) => void,
): RFNode {
  return {
    id: n.id,
    position: { x: n.x, y: n.y },
    type: TYPE_MAP[n.shape ?? "rect"],
    data: { label: n.label, color: n.color ?? "#e0e7ff", onLabelChange },
  }
}

function toRFEdge(e: FlowBlock["edges"][number]): Edge {
  return { id: e.id, source: e.fromId, target: e.toId, label: e.label }
}

function fromRFNode(n: Node): FlowBlock["nodes"][number] {
  const data = n.data as FlowNodeData
  return {
    id: n.id,
    label: data.label,
    x: Math.round(n.position.x),
    y: Math.round(n.position.y),
    shape: REVERSE_TYPE_MAP[n.type ?? "rectNode"] ?? "rect",
    color: data.color,
  }
}

function fromRFEdge(e: Edge): FlowBlock["edges"][number] {
  return {
    id: e.id,
    fromId: e.source,
    toId: e.target,
    label: typeof e.label === "string" && e.label ? e.label : undefined,
  }
}

// ---- NodeLabel: inline editable label ----

function NodeLabel({ id, data }: { id: string; data: FlowNodeData }) {
  const [editing, setEditing] = useState(false)
  const [editVal, setEditVal] = useState(data.label)

  useEffect(() => {
    if (!editing) setEditVal(data.label)
  }, [data.label, editing])

  const commit = () => {
    setEditing(false)
    data.onLabelChange(id, editVal)
  }

  if (editing) {
    return (
      <input
        autoFocus
        value={editVal}
        onChange={(e) => setEditVal(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => { if (e.key === "Enter") commit() }}
        className="nodrag nopan"
        style={{
          width: "100%",
          border: "none",
          background: "transparent",
          textAlign: "center",
          outline: "none",
          fontSize: 12,
          color: "#1e1b4b",
        }}
        onClick={(e) => e.stopPropagation()}
      />
    )
  }

  return (
    <span
      onDoubleClick={(e) => { e.stopPropagation(); setEditVal(data.label); setEditing(true) }}
      style={{ fontSize: 12, color: "#1e1b4b", cursor: "default", userSelect: "none" }}
    >
      {data.label}
    </span>
  )
}

// ---- Custom node shapes ----

function RectNode({ id, data, selected }: { id: string; data: FlowNodeData; selected?: boolean }) {
  return (
    <div
      style={{
        background: data.color,
        border: `2px solid ${selected ? "#6366f1" : "#a5b4fc"}`,
        borderRadius: 6,
        padding: "8px 16px",
        minWidth: 80,
        textAlign: "center",
      }}
    >
      <Handle type="target" position={Position.Top} />
      <NodeLabel id={id} data={data} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}

function DiamondNode({ id, data, selected }: { id: string; data: FlowNodeData; selected?: boolean }) {
  return (
    <div style={{ position: "relative", width: 100, height: 72 }}>
      <Handle type="target" position={Position.Top} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: "rotate(45deg) scale(0.7)",
          background: data.color,
          border: `2px solid ${selected ? "#6366f1" : "#a5b4fc"}`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NodeLabel id={id} data={data} />
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}

function CircleNode({ id, data, selected }: { id: string; data: FlowNodeData; selected?: boolean }) {
  return (
    <div
      style={{
        width: 72,
        height: 72,
        borderRadius: "50%",
        background: data.color,
        border: `2px solid ${selected ? "#6366f1" : "#a5b4fc"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Handle type="target" position={Position.Top} />
      <NodeLabel id={id} data={data} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const nodeTypes: Record<string, any> = { rectNode: RectNode, diamondNode: DiamondNode, circleNode: CircleNode }

// ---- Main editor ----

interface Props {
  block: FlowBlock
  onChange: (patch: Partial<FlowBlock>) => void
  onRemove: () => void
}

export function FlowBlockEditor({ block, onChange, onRemove }: Props) {
  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange

  const handleLabelChange = useCallback((id: string, label: string) => {
    setRfNodes((prev) => {
      const updated = prev.map((n) =>
        n.id === id ? { ...n, data: { ...n.data, label } } : n,
      )
      onChangeRef.current({ nodes: updated.map(fromRFNode) })
      return updated
    })
  }, [])

  const [rfNodes, setRfNodes] = useState<RFNode[]>(() =>
    block.nodes.map((n) => toRFNode(n, handleLabelChange)),
  )
  const [rfEdges, setRfEdges] = useState<Edge[]>(() => block.edges.map(toRFEdge))

  const [selectedNodeIds, setSelectedNodeIds] = useState<string[]>([])
  const [selectedEdgeIds, setSelectedEdgeIds] = useState<string[]>([])

  const onNodesChange = useCallback((changes: NodeChange<RFNode>[]) => {
    setRfNodes((prev) => {
      const updated = applyNodeChanges(changes, prev)
      const meaningful = changes.some((c) => c.type !== "select")
      if (meaningful) onChangeRef.current({ nodes: updated.map(fromRFNode) })
      return updated
    })
  }, [])

  const onEdgesChange = useCallback((changes: EdgeChange<Edge>[]) => {
    setRfEdges((prev) => {
      const updated = applyEdgeChanges(changes, prev)
      const meaningful = changes.some((c) => c.type !== "select")
      if (meaningful) onChangeRef.current({ edges: updated.map(fromRFEdge) })
      return updated
    })
  }, [])

  const onConnect = useCallback((connection: Connection) => {
    setRfEdges((prev) => {
      const newEdge: Edge = {
        id: crypto.randomUUID(),
        source: connection.source!,
        target: connection.target!,
      }
      const updated = [...prev, newEdge]
      onChangeRef.current({ edges: updated.map(fromRFEdge) })
      return updated
    })
  }, [])

  const onSelectionChange = useCallback(
    ({ nodes, edges }: { nodes: RFNode[]; edges: Edge[] }) => {
      setSelectedNodeIds(nodes.map((n) => n.id))
      setSelectedEdgeIds(edges.map((e) => e.id))
    },
    [],
  )

  const addNode = useCallback(() => {
    setRfNodes((prev) => {
      const newNode: RFNode = {
        id: crypto.randomUUID(),
        position: { x: 100 + prev.length * 50, y: 100 },
        type: "rectNode",
        data: { label: "Nuevo", color: "#e0e7ff", onLabelChange: handleLabelChange },
      }
      const updated = [...prev, newNode]
      onChangeRef.current({ nodes: updated.map(fromRFNode) })
      return updated
    })
  }, [handleLabelChange])

  const selectedNode = rfNodes.find((n) => selectedNodeIds.includes(n.id))
  const selectedNodeShape = REVERSE_TYPE_MAP[selectedNode?.type ?? "rectNode"] ?? "rect"

  const handleShapeChange = useCallback(
    (shape: "rect" | "diamond" | "circle") => {
      setRfNodes((prev) => {
        const updated = prev.map((n) =>
          selectedNodeIds.includes(n.id) ? { ...n, type: TYPE_MAP[shape] } : n,
        )
        onChangeRef.current({ nodes: updated.map(fromRFNode) })
        return updated
      })
    },
    [selectedNodeIds],
  )

  const handleColorChange = useCallback(
    (color: string) => {
      setRfNodes((prev) => {
        const updated = prev.map((n) =>
          selectedNodeIds.includes(n.id) ? { ...n, data: { ...n.data, color } } : n,
        )
        onChangeRef.current({ nodes: updated.map(fromRFNode) })
        return updated
      })
    },
    [selectedNodeIds],
  )

  const handleDelete = useCallback(() => {
    if (selectedNodeIds.length > 0) {
      const updatedNodes = rfNodes.filter((n) => !selectedNodeIds.includes(n.id))
      const updatedEdges = rfEdges.filter(
        (e) => !selectedNodeIds.includes(e.source) && !selectedNodeIds.includes(e.target),
      )
      setRfNodes(updatedNodes)
      setRfEdges(updatedEdges)
      onChange({ nodes: updatedNodes.map(fromRFNode), edges: updatedEdges.map(fromRFEdge) })
      setSelectedNodeIds([])
    } else if (selectedEdgeIds.length > 0) {
      const updatedEdges = rfEdges.filter((e) => !selectedEdgeIds.includes(e.id))
      setRfEdges(updatedEdges)
      onChange({ edges: updatedEdges.map(fromRFEdge) })
      setSelectedEdgeIds([])
    }
  }, [selectedNodeIds, selectedEdgeIds, rfNodes, rfEdges, onChange])

  return (
    <div className="space-y-2">
      {/* Title + remove */}
      <div className="flex gap-2 items-center">
        <input
          className="flex-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm"
          placeholder="Título del diagrama (opcional)"
          value={block.title ?? ""}
          onChange={(e) => onChange({ title: e.target.value || undefined })}
        />
        <button
          type="button"
          className="rounded-md border border-red-200 bg-red-50 px-2 py-1 text-xs text-red-600 hover:bg-red-100"
          onClick={onRemove}
        >
          ✕
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex gap-2 items-center flex-wrap">
        <button
          type="button"
          className="rounded-md border border-gray-300 px-2 py-1 text-xs hover:bg-gray-50"
          onClick={addNode}
        >
          + Nodo
        </button>
        {selectedNode && (
          <>
            <select
              className="rounded-md border border-gray-300 px-1.5 py-1 text-xs"
              value={selectedNodeShape}
              onChange={(e) => handleShapeChange(e.target.value as "rect" | "diamond" | "circle")}
            >
              <option value="rect">Rect</option>
              <option value="diamond">Rombo</option>
              <option value="circle">Círculo</option>
            </select>
            <input
              type="color"
              className="h-7 w-8 rounded border border-gray-300 p-0.5"
              value={selectedNode.data.color ?? "#e0e7ff"}
              onChange={(e) => handleColorChange(e.target.value)}
            />
          </>
        )}
        {(selectedNodeIds.length > 0 || selectedEdgeIds.length > 0) && (
          <button
            type="button"
            className="rounded border border-red-200 bg-red-50 px-1.5 py-1 text-xs text-red-600 hover:bg-red-100"
            onClick={handleDelete}
          >
            × Eliminar
          </button>
        )}
      </div>

      {/* Canvas */}
      <div className="h-96 border border-slate-200 rounded-lg overflow-hidden">
        <ReactFlow
          nodes={rfNodes}
          edges={rfEdges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onSelectionChange={onSelectionChange}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background />
        </ReactFlow>
      </div>
    </div>
  )
}
