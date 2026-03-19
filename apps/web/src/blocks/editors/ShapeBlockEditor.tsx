import React, { useRef, useState } from "react"
import type { ShapeBlock, ShapeItem } from "../types"
import { COLLECTIONS } from "../shapes/collections"

interface Props {
  block: ShapeBlock
  onChange: (updated: ShapeBlock) => void
}

type CanvasDragState = {
  itemId: string
  startMouseX: number
  startMouseY: number
  startItemX: number
  startItemY: number
}

const COLLECTIONS_ORDER: ShapeBlock["collection"][] = ["fisica", "electrica", "logica"]

export function ShapeBlockEditor({ block, onChange }: Props) {
  const [activeCollection, setActiveCollection] = useState<ShapeBlock["collection"]>(
    block.collection
  )
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [editingLabelId, setEditingLabelId] = useState<string | null>(null)
  const [labelValue, setLabelValue] = useState("")

  const canvasRef = useRef<HTMLDivElement>(null)
  const dragState = useRef<CanvasDragState | null>(null)

  const width = block.canvasWidth ?? 800
  const height = block.canvasHeight ?? 500
  const paletteCollection = COLLECTIONS[activeCollection]

  // ─── Collection selector ─────────────────────────────────────────────────

  const handleCollectionChange = (col: ShapeBlock["collection"]) => {
    setActiveCollection(col)
    onChange({ ...block, collection: col })
  }

  // ─── Title ───────────────────────────────────────────────────────────────

  const handleTitleChange = (title: string) => {
    onChange({ ...block, title: title || undefined })
  }

  // ─── Palette → canvas drag-and-drop ──────────────────────────────────────

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const shapeId = e.dataTransfer.getData("text/plain")
    if (!shapeId) return
    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = Math.max(0, Math.min(e.clientX - rect.left - 30, width - 60))
    const y = Math.max(0, Math.min(e.clientY - rect.top - 30, height - 60))
    const newItem: ShapeItem = {
      id: crypto.randomUUID(),
      shapeId,
      x,
      y,
    }
    onChange({ ...block, items: [...block.items, newItem] })
  }

  // ─── Shape dragging on canvas ─────────────────────────────────────────────

  const handleShapeMouseDown = (e: React.MouseEvent, itemId: string) => {
    if (editingLabelId === itemId) return
    e.stopPropagation()
    e.preventDefault()
    setSelectedId(itemId)
    const item = block.items.find((i) => i.id === itemId)
    if (!item) return
    dragState.current = {
      itemId,
      startMouseX: e.clientX,
      startMouseY: e.clientY,
      startItemX: item.x,
      startItemY: item.y,
    }
  }

  const handleCanvasMouseMove = (e: React.MouseEvent) => {
    if (!dragState.current) return
    const dx = e.clientX - dragState.current.startMouseX
    const dy = e.clientY - dragState.current.startMouseY
    const newX = Math.max(0, Math.min(dragState.current.startItemX + dx, width - 60))
    const newY = Math.max(0, Math.min(dragState.current.startItemY + dy, height - 60))
    const items = block.items.map((item) =>
      item.id === dragState.current!.itemId ? { ...item, x: newX, y: newY } : item
    )
    onChange({ ...block, items })
  }

  const handleCanvasMouseUp = () => {
    dragState.current = null
  }

  // ─── Toolbar actions ──────────────────────────────────────────────────────

  const handleDelete = () => {
    if (!selectedId) return
    const items = block.items.filter((i) => i.id !== selectedId)
    onChange({ ...block, items })
    setSelectedId(null)
  }

  const handleRotate = () => {
    if (!selectedId) return
    const items = block.items.map((item) =>
      item.id === selectedId
        ? { ...item, rotation: ((item.rotation ?? 0) + 90) % 360 }
        : item
    )
    onChange({ ...block, items })
  }

  // ─── Label editing ────────────────────────────────────────────────────────

  const handleDoubleClick = (e: React.MouseEvent, item: ShapeItem) => {
    e.stopPropagation()
    setEditingLabelId(item.id)
    setLabelValue(item.label ?? "")
  }

  const handleLabelSubmit = (itemId: string) => {
    const items = block.items.map((item) =>
      item.id === itemId ? { ...item, label: labelValue || undefined } : item
    )
    onChange({ ...block, items })
    setEditingLabelId(null)
  }

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="flex gap-3">
      {/* ── Palette ─────────────────────────────────────────────────────── */}
      <div style={{ width: 240, flexShrink: 0 }}>
        {/* Collection tabs */}
        <div className="flex gap-1 mb-3 flex-wrap">
          {COLLECTIONS_ORDER.map((col) => (
            <button
              key={col}
              className={`text-xs px-2 py-1 rounded border transition-colors ${
                activeCollection === col
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => handleCollectionChange(col)}
            >
              {COLLECTIONS[col].label}
            </button>
          ))}
        </div>

        {/* Shape grid 3 columns */}
        <div className="grid grid-cols-3 gap-2">
          {paletteCollection.shapes.map((shape) => (
            <div
              key={shape.id}
              className="flex flex-col items-center gap-1 cursor-grab hover:bg-gray-50 rounded p-1 border border-transparent hover:border-gray-200 transition-colors"
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData("text/plain", shape.id)
              }}
              title={shape.label}
            >
              <div
                style={{ width: 48, height: 48, pointerEvents: "none" }}
                dangerouslySetInnerHTML={{ __html: shape.svg }}
              />
              <span className="text-xs text-gray-600 text-center leading-tight w-full truncate">
                {shape.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Canvas area ──────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        {/* Toolbar */}
        <div className="flex items-center gap-2 flex-wrap">
          <input
            className="text-xs border border-gray-200 rounded px-2 py-1 flex-1 min-w-0 focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="Título del canvas"
            value={block.title ?? ""}
            onChange={(e) => handleTitleChange(e.target.value)}
          />
          <button
            className="text-xs px-2 py-1 border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 rounded disabled:opacity-40 shrink-0"
            disabled={!selectedId}
            onClick={handleDelete}
          >
            Eliminar seleccionado
          </button>
          <button
            className="text-xs px-2 py-1 border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 rounded disabled:opacity-40 shrink-0"
            disabled={!selectedId}
            onClick={handleRotate}
          >
            Rotar 90°
          </button>
        </div>

        {/* Canvas */}
        <div
          ref={canvasRef}
          style={{
            position: "relative",
            width,
            height,
            background: "white",
            backgroundImage:
              "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            border: "1px solid #d1d5db",
            overflow: "hidden",
            flexShrink: 0,
            cursor: "default",
          }}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onMouseMove={handleCanvasMouseMove}
          onMouseUp={handleCanvasMouseUp}
          onMouseLeave={handleCanvasMouseUp}
          onClick={() => setSelectedId(null)}
        >
          {block.items.map((item) => {
            const shape = COLLECTIONS[block.collection].shapes.find(
              (s) => s.id === item.shapeId
            )
            if (!shape) return null
            const isSelected = item.id === selectedId
            const isEditingLabel = editingLabelId === item.id

            return (
              <div
                key={item.id}
                style={{
                  position: "absolute",
                  left: item.x,
                  top: item.y,
                  cursor: "move",
                  userSelect: "none",
                }}
                onMouseDown={(e) => handleShapeMouseDown(e, item.id)}
                onDoubleClick={(e) => handleDoubleClick(e, item)}
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedId(item.id)
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    transform: `rotate(${item.rotation ?? 0}deg)`,
                    outline: isSelected ? "2px solid #2563eb" : "2px solid transparent",
                    outlineOffset: "2px",
                    borderRadius: 4,
                    pointerEvents: "none",
                  }}
                  dangerouslySetInnerHTML={{ __html: shape.svg }}
                />
                {isEditingLabel ? (
                  <input
                    autoFocus
                    className="text-xs border border-blue-400 rounded px-1 w-16 text-center mt-1 block"
                    value={labelValue}
                    onChange={(e) => setLabelValue(e.target.value)}
                    onBlur={() => handleLabelSubmit(item.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleLabelSubmit(item.id)
                      if (e.key === "Escape") setEditingLabelId(null)
                    }}
                    onClick={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                  />
                ) : item.label ? (
                  <div className="text-xs text-gray-600 text-center mt-1 max-w-[60px] truncate">
                    {item.label}
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
