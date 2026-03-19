import React, { useRef, useState } from "react"
import type { ShapeBlock, ShapeConnector, ShapeItem } from "../types"
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

const COLLECTIONS_ORDER: ShapeBlock["collection"][] = ["basica", "fisica", "electrica", "logica", "matematica"]

export function ShapeBlockEditor({ block, onChange }: Props) {
  const [activeCollection, setActiveCollection] = useState<ShapeBlock["collection"]>(
    block.collection
  )
  const [paletteOpen, setPaletteOpen] = useState(true)
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null)
  const [selectedConnectorId, setSelectedConnectorId] = useState<string | null>(null)
  const [connectMode, setConnectMode] = useState(false)
  const [connectingFromId, setConnectingFromId] = useState<string | null>(null)

  const canvasRef = useRef<HTMLDivElement>(null)
  const dragState = useRef<CanvasDragState | null>(null)

  const width = block.canvasWidth ?? 800
  const height = block.canvasHeight ?? 500
  const paletteCollection = COLLECTIONS[activeCollection]
  const connectors = block.connectors ?? []

  // ─── Collection selector ─────────────────────────────────────────────────

  const handleCollectionChange = (col: ShapeBlock["collection"]) => {
    setActiveCollection(col)
    onChange({ ...block, collection: col })
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
    let x: number
    let y: number
    if (rect && (e.clientX !== 0 || e.clientY !== 0)) {
      x = Math.max(0, Math.min(e.clientX - rect.left - 30, width - 60))
      y = Math.max(0, Math.min(e.clientY - rect.top - 30, height - 60))
    } else {
      x = 20 + block.items.length * 70
      y = 20 + (block.items.length % 3) * 70
    }
    const newItem: ShapeItem = { id: crypto.randomUUID(), shapeId, x, y }
    onChange({ ...block, items: [...block.items, newItem] })
  }

  // ─── Shape dragging on canvas ─────────────────────────────────────────────

  const handleShapeMouseDown = (e: React.MouseEvent, itemId: string) => {
    if (connectMode) return
    e.stopPropagation()
    e.preventDefault()
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

  // ─── Shape click (selection & connector mode) ─────────────────────────────

  const handleShapeClick = (e: React.MouseEvent, itemId: string) => {
    e.stopPropagation()
    if (!connectMode) {
      setSelectedItemId(itemId)
      setSelectedConnectorId(null)
      return
    }
    // Connector mode
    if (!connectingFromId) {
      setConnectingFromId(itemId)
      return
    }
    if (connectingFromId === itemId) return // same shape, ignore
    const newConnector: ShapeConnector = {
      id: crypto.randomUUID(),
      fromId: connectingFromId,
      toId: itemId,
      style: "arrow",
    }
    onChange({ ...block, connectors: [...connectors, newConnector] })
    setConnectingFromId(null)
    setConnectMode(false)
  }

  // ─── Canvas background click ──────────────────────────────────────────────

  const handleCanvasClick = () => {
    if (connectMode) {
      setConnectMode(false)
      setConnectingFromId(null)
      return
    }
    setSelectedItemId(null)
    setSelectedConnectorId(null)
  }

  // ─── Inspector: item changes ──────────────────────────────────────────────

  const selectedItem = block.items.find((i) => i.id === selectedItemId) ?? null
  const selectedConnector = connectors.find((c) => c.id === selectedConnectorId) ?? null

  const updateItem = (patch: Partial<ShapeItem>) => {
    if (!selectedItemId) return
    onChange({
      ...block,
      items: block.items.map((i) => (i.id === selectedItemId ? { ...i, ...patch } : i)),
    })
  }

  const handleDeleteItem = () => {
    if (!selectedItemId) return
    // Also remove connectors that reference this item
    onChange({
      ...block,
      items: block.items.filter((i) => i.id !== selectedItemId),
      connectors: connectors.filter(
        (c) => c.fromId !== selectedItemId && c.toId !== selectedItemId
      ),
    })
    setSelectedItemId(null)
  }

  // ─── Inspector: connector changes ─────────────────────────────────────────

  const updateConnector = (patch: Partial<ShapeConnector>) => {
    if (!selectedConnectorId) return
    onChange({
      ...block,
      connectors: connectors.map((c) =>
        c.id === selectedConnectorId ? { ...c, ...patch } : c
      ),
    })
  }

  const handleDeleteConnector = () => {
    if (!selectedConnectorId) return
    onChange({ ...block, connectors: connectors.filter((c) => c.id !== selectedConnectorId) })
    setSelectedConnectorId(null)
  }

  // ─── Helper: item center coords ───────────────────────────────────────────

  const itemCenter = (itemId: string) => {
    const item = block.items.find((i) => i.id === itemId)
    if (!item) return { x: 0, y: 0 }
    return { x: item.x + 30, y: item.y + 30 }
  }

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="flex gap-3">
      {/* ── Left column: palette + canvas ─────────────────────────────── */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">

        {/* Collapsible palette */}
        <div className="border border-gray-200 rounded">
          <button
            type="button"
            className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => setPaletteOpen((v) => !v)}
          >
            <span>Paleta de formas</span>
            <span>{paletteOpen ? "▲" : "▼"}</span>
          </button>
          {paletteOpen && (
            <div className="px-3 pb-3">
              {/* Collection tabs */}
              <div className="flex gap-1 mb-2 flex-wrap">
                {COLLECTIONS_ORDER.map((col) => (
                  <button
                    key={col}
                    type="button"
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
              {/* Shape grid */}
              <div className="grid grid-cols-4 gap-1.5">
                {paletteCollection.shapes.map((shape) => (
                  <div
                    key={shape.id}
                    className="flex flex-col items-center gap-1 cursor-grab hover:bg-indigo-50 rounded p-1.5 border border-transparent hover:border-indigo-200 transition-colors"
                    draggable
                    onDragStart={(e) => e.dataTransfer.setData("text/plain", shape.id)}
                    title="Arrastrá al canvas"
                  >
                    <div
                      style={{ width: 48, height: 48, pointerEvents: "none" }}
                      dangerouslySetInnerHTML={{ __html: shape.svg }}
                    />
                    <span className="text-[10px] text-gray-600 text-center leading-tight w-full truncate">
                      {shape.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-2 flex-wrap">
          <input
            className="text-xs border border-gray-200 rounded px-2 py-1 flex-1 min-w-0 focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="Título del canvas"
            value={block.title ?? ""}
            onChange={(e) => onChange({ ...block, title: e.target.value || undefined })}
          />
          <button
            type="button"
            className={`text-xs px-2 py-1 border rounded shrink-0 transition-colors ${
              connectMode
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
            }`}
            onClick={() => {
              setConnectMode((v) => !v)
              setConnectingFromId(null)
              setSelectedItemId(null)
              setSelectedConnectorId(null)
            }}
          >
            {connectMode
              ? connectingFromId
                ? "Clic en destino…"
                : "Clic en origen…"
              : "Conectar"}
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
            cursor: connectMode ? "crosshair" : "default",
          }}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onMouseMove={handleCanvasMouseMove}
          onMouseUp={handleCanvasMouseUp}
          onMouseLeave={handleCanvasMouseUp}
          onClick={handleCanvasClick}
        >
          {/* SVG layer for connectors */}
          <svg
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              overflow: "visible",
            }}
          >
            <defs>
              <marker
                id="arrow-editor"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
              </marker>
            </defs>
            {connectors.map((connector) => {
              const from = itemCenter(connector.fromId)
              const to = itemCenter(connector.toId)
              const mx = (from.x + to.x) / 2
              const my = (from.y + to.y) / 2
              const isSelConn = connector.id === selectedConnectorId
              const strokeColor = isSelConn ? "#2563eb" : "#475569"
              return (
                <g key={connector.id}>
                  {/* Wide transparent click target */}
                  <line
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke="transparent"
                    strokeWidth={12}
                    style={{ pointerEvents: "stroke", cursor: "pointer" }}
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedConnectorId(connector.id)
                      setSelectedItemId(null)
                    }}
                  />
                  {/* Visual line */}
                  <line
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke={strokeColor}
                    strokeWidth={isSelConn ? 2.5 : 1.5}
                    strokeDasharray={connector.style === "dashed" ? "5,5" : undefined}
                    markerEnd={connector.style === "arrow" ? "url(#arrow-editor)" : undefined}
                    style={{ pointerEvents: "none" }}
                  />
                  {connector.label && (
                    <text
                      x={mx}
                      y={my - 4}
                      textAnchor="middle"
                      fontSize={10}
                      fill={strokeColor}
                      fontFamily="sans-serif"
                      style={{ pointerEvents: "none", userSelect: "none" }}
                    >
                      {connector.label}
                    </text>
                  )}
                </g>
              )
            })}
          </svg>

          {/* Shape items */}
          {block.items.map((item) => {
            const shape = COLLECTIONS[block.collection].shapes.find(
              (s) => s.id === item.shapeId
            )
            if (!shape) return null
            const isSelected = item.id === selectedItemId
            const isConnectingFrom = item.id === connectingFromId
            const outlineColor = isConnectingFrom
              ? "#f59e0b"
              : isSelected
              ? (item.color ?? "#2563eb")
              : "transparent"

            return (
              <div
                key={item.id}
                style={{
                  position: "absolute",
                  left: item.x,
                  top: item.y,
                  cursor: connectMode ? "crosshair" : "move",
                  userSelect: "none",
                }}
                onMouseDown={(e) => handleShapeMouseDown(e, item.id)}
                onClick={(e) => handleShapeClick(e, item.id)}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    transform: `rotate(${item.rotation ?? 0}deg)`,
                    outline: `2px solid ${outlineColor}`,
                    outlineOffset: "2px",
                    borderRadius: 4,
                    pointerEvents: "none",
                  }}
                  dangerouslySetInnerHTML={{ __html: shape.svg }}
                />
                {item.label && (
                  <div className="text-xs text-gray-600 text-center mt-1 max-w-[60px] truncate">
                    {item.label}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Right column: inspector ───────────────────────────────────────── */}
      <div
        style={{ width: 224, flexShrink: 0 }}
        className="border border-gray-200 rounded p-3 flex flex-col gap-3"
      >
        {selectedItem ? (
          <>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
              Inspector · forma
            </p>

            {/* Label */}
            <label className="flex flex-col gap-1">
              <span className="text-xs text-gray-600">Etiqueta</span>
              <input
                className="text-xs border border-gray-200 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400"
                placeholder="Sin etiqueta"
                value={selectedItem.label ?? ""}
                onChange={(e) => updateItem({ label: e.target.value || undefined })}
              />
            </label>

            {/* Color */}
            <label className="flex flex-col gap-1">
              <span className="text-xs text-gray-600">Color de acento</span>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  className="w-8 h-7 rounded border border-gray-200 cursor-pointer"
                  value={selectedItem.color ?? "#2563eb"}
                  onChange={(e) => updateItem({ color: e.target.value })}
                />
                {selectedItem.color && (
                  <button
                    type="button"
                    className="text-xs text-gray-400 hover:text-gray-600"
                    onClick={() => updateItem({ color: undefined })}
                  >
                    Quitar
                  </button>
                )}
              </div>
            </label>

            {/* Rotation */}
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-600">Rotar</span>
              <div className="flex gap-1">
                <button
                  type="button"
                  className="flex-1 text-xs px-2 py-1 border border-gray-200 bg-white hover:bg-gray-50 rounded"
                  onClick={() =>
                    updateItem({ rotation: ((selectedItem.rotation ?? 0) - 90 + 360) % 360 })
                  }
                >
                  ↺ 90°
                </button>
                <button
                  type="button"
                  className="flex-1 text-xs px-2 py-1 border border-gray-200 bg-white hover:bg-gray-50 rounded"
                  onClick={() =>
                    updateItem({ rotation: ((selectedItem.rotation ?? 0) + 90) % 360 })
                  }
                >
                  ↻ 90°
                </button>
              </div>
            </div>

            {/* Delete */}
            <button
              type="button"
              className="text-xs px-2 py-1 border border-red-200 bg-red-50 text-red-600 hover:bg-red-100 rounded"
              onClick={handleDeleteItem}
            >
              Eliminar forma
            </button>
          </>
        ) : selectedConnector ? (
          <>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
              Inspector · conector
            </p>

            {/* Connector label */}
            <label className="flex flex-col gap-1">
              <span className="text-xs text-gray-600">Etiqueta</span>
              <input
                className="text-xs border border-gray-200 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400"
                placeholder="Sin etiqueta"
                value={selectedConnector.label ?? ""}
                onChange={(e) =>
                  updateConnector({ label: e.target.value || undefined })
                }
              />
            </label>

            {/* Connector style */}
            <label className="flex flex-col gap-1">
              <span className="text-xs text-gray-600">Estilo</span>
              <select
                className="text-xs border border-gray-200 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400"
                value={selectedConnector.style ?? "arrow"}
                onChange={(e) =>
                  updateConnector({
                    style: e.target.value as ShapeConnector["style"],
                  })
                }
              >
                <option value="solid">Sólido</option>
                <option value="dashed">Punteado</option>
                <option value="arrow">Flecha</option>
              </select>
            </label>

            {/* Delete connector */}
            <button
              type="button"
              className="text-xs px-2 py-1 border border-red-200 bg-red-50 text-red-600 hover:bg-red-100 rounded"
              onClick={handleDeleteConnector}
            >
              Eliminar conector
            </button>
          </>
        ) : (
          <p className="text-xs text-slate-400 italic">
            Seleccioná una forma para editarla
          </p>
        )}
      </div>
    </div>
  )
}
