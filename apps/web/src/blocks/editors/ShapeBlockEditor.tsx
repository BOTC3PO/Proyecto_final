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

// Color de acento por defecto de una forma/conector = dato del diagrama (no chrome).
const DEFAULT_SHAPE_COLOR = "#2563eb"

const inputCls =
  "text-xs border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] rounded px-2 py-1 outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] focus:border-[var(--c-primary)]"
const rotateBtnCls =
  "flex-1 text-xs px-2 py-1 border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] hover:bg-[var(--c-hover)] rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
const deleteBtnCls =
  "text-xs px-2 py-1 border border-[color-mix(in_srgb,var(--c-danger)_30%,transparent)] bg-[var(--c-danger-soft)] text-[var(--c-danger)] hover:bg-[color-mix(in_srgb,var(--c-danger)_20%,var(--c-surface))] rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"

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
  }

  // ─── Agregar forma (teclado: click; mouse: drag) ─────────────────────────

  const addShapeToCanvas = (shapeId: string) => {
    const x = 20 + block.items.length * 70
    const y = 20 + (block.items.length % 3) * 70
    const newItem: ShapeItem = { id: crypto.randomUUID(), shapeId, x, y }
    onChange({ ...block, items: [...block.items, newItem] })
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
    <div className="flex gap-3 w-full overflow-hidden">
      {/* ── Left column: palette + canvas ─────────────────────────────── */}
      <div className="flex flex-col gap-2 flex-1 min-w-0 overflow-y-auto">

        {/* Collapsible palette */}
        <div className="border border-[var(--c-border)] rounded">
          <button
            type="button"
            aria-expanded={paletteOpen}
            className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-medium text-[var(--c-text)] hover:bg-[var(--c-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded"
            onClick={() => setPaletteOpen((v) => !v)}
          >
            <span>Paleta de formas</span>
            <span aria-hidden="true">{paletteOpen ? "▲" : "▼"}</span>
          </button>
          {paletteOpen && (
            <div className="px-3 pb-3">
              {/* Collection tabs */}
              <div className="flex gap-1 mb-2 flex-wrap" role="toolbar" aria-label="Colección de formas">
                {COLLECTIONS_ORDER.map((col) => (
                  <button
                    key={col}
                    type="button"
                    aria-pressed={activeCollection === col}
                    className={`text-xs px-2 py-1 rounded border transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] ${
                      activeCollection === col
                        ? "bg-[var(--c-primary)] text-[var(--c-accent-fg)] border-[var(--c-primary)]"
                        : "bg-[var(--c-surface)] text-[var(--c-text)] border-[var(--c-border)] hover:bg-[var(--c-hover)]"
                    }`}
                    onClick={() => handleCollectionChange(col)}
                  >
                    {COLLECTIONS[col].label}
                  </button>
                ))}
              </div>
              {/* Shape grid */}
              <div className="grid grid-cols-4 gap-1.5 overflow-hidden">
                {paletteCollection.shapes.map((shape) => (
                  <button
                    key={shape.id}
                    type="button"
                    draggable
                    aria-label={`Agregar forma ${shape.label}`}
                    className="flex flex-col items-center gap-1 cursor-grab hover:bg-[color-mix(in_srgb,var(--c-primary)_8%,transparent)] rounded p-1.5 border border-transparent hover:border-[color-mix(in_srgb,var(--c-primary)_30%,transparent)] transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
                    onDragStart={(e) => e.dataTransfer.setData("text/plain", shape.id)}
                    onClick={() => addShapeToCanvas(shape.id)}
                    title="Arrastrá al canvas o clic para agregar"
                  >
                    <div
                      style={{ width: 48, height: 48, pointerEvents: "none", overflow: "hidden" }}
                      dangerouslySetInnerHTML={{ __html: shape.svg }}
                    />
                    <span className="text-[10px] text-[var(--c-muted)] text-center leading-tight w-full truncate">
                      {shape.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-2 flex-wrap">
          <input
            aria-label="Título del canvas"
            className={`${inputCls} flex-1 min-w-0`}
            placeholder="Título del canvas"
            value={block.title ?? ""}
            onChange={(e) => onChange({ ...block, title: e.target.value || undefined })}
          />
          <button
            type="button"
            aria-pressed={connectMode}
            aria-label="Modo conectar formas"
            className={`text-xs px-2 py-1 border rounded shrink-0 transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] ${
              connectMode
                ? "bg-[var(--c-primary)] text-[var(--c-accent-fg)] border-[var(--c-primary)]"
                : "bg-[var(--c-surface)] text-[var(--c-text)] border-[var(--c-border)] hover:bg-[var(--c-hover)]"
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
        <div className="overflow-x-auto">
        <div
          ref={canvasRef}
          role="application"
          aria-label="Lienzo de formas"
          style={{
            position: "relative",
            width,
            height,
            background: "var(--c-surface)",
            backgroundImage:
              "linear-gradient(to right, color-mix(in srgb, var(--c-text) 8%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--c-text) 8%, transparent) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            border: "1px solid var(--c-border)",
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
                <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--c-muted)" />
              </marker>
            </defs>
            {connectors.map((connector) => {
              const from = itemCenter(connector.fromId)
              const to = itemCenter(connector.toId)
              const mx = (from.x + to.x) / 2
              const my = (from.y + to.y) / 2
              const isSelConn = connector.id === selectedConnectorId
              const strokeColor = isSelConn ? "var(--c-primary)" : "var(--c-muted)"
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
            const shape = Object.values(COLLECTIONS)
              .flatMap((col) => col.shapes)
              .find((s) => s.id === item.shapeId)
            if (!shape) return null
            const isSelected = item.id === selectedItemId
            const isConnectingFrom = item.id === connectingFromId
            const outlineColor = isConnectingFrom
              ? "var(--c-warning)"
              : isSelected
              ? (item.color ?? "var(--c-primary)")
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
                  <div className="text-xs text-[var(--c-muted)] text-center mt-1 max-w-[60px] truncate">
                    {item.label}
                  </div>
                )}
              </div>
            )
          })}
        </div>
        </div>
      </div>

      {/* ── Right column: inspector ───────────────────────────────────────── */}
      <div
        style={{ width: 224, flexShrink: 0 }}
        className="border border-[var(--c-border)] rounded p-3 flex flex-col gap-3 overflow-y-auto relative"
      >
        {selectedItem ? (
          <>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--c-text-3)]">
              Inspector · forma
            </p>

            {/* Label */}
            <label className="flex flex-col gap-1">
              <span className="text-xs text-[var(--c-muted)]">Etiqueta</span>
              <input
                className={inputCls}
                placeholder="Sin etiqueta"
                value={selectedItem.label ?? ""}
                onChange={(e) => updateItem({ label: e.target.value || undefined })}
              />
            </label>

            {/* Color */}
            <label className="flex flex-col gap-1">
              <span className="text-xs text-[var(--c-muted)]">Color de acento</span>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  className="w-8 h-7 rounded border border-[var(--c-border)] cursor-pointer bg-transparent"
                  value={selectedItem.color ?? DEFAULT_SHAPE_COLOR}
                  onChange={(e) => updateItem({ color: e.target.value })}
                />
                {selectedItem.color && (
                  <button
                    type="button"
                    className="text-xs text-[var(--c-muted)] hover:text-[var(--c-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded-sm px-1"
                    onClick={() => updateItem({ color: undefined })}
                  >
                    Quitar
                  </button>
                )}
              </div>
            </label>

            {/* Rotation */}
            <div className="flex flex-col gap-1">
              <span className="text-xs text-[var(--c-muted)]">Rotar</span>
              <div className="flex gap-1">
                <button
                  type="button"
                  className={rotateBtnCls}
                  onClick={() =>
                    updateItem({ rotation: ((selectedItem.rotation ?? 0) - 90 + 360) % 360 })
                  }
                >
                  ↺ 90°
                </button>
                <button
                  type="button"
                  className={rotateBtnCls}
                  onClick={() =>
                    updateItem({ rotation: ((selectedItem.rotation ?? 0) + 90) % 360 })
                  }
                >
                  ↻ 90°
                </button>
              </div>
            </div>

            {/* Delete */}
            <button type="button" className={deleteBtnCls} onClick={handleDeleteItem}>
              Eliminar forma
            </button>
          </>
        ) : selectedConnector ? (
          <>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--c-text-3)]">
              Inspector · conector
            </p>

            {/* Connector label */}
            <label className="flex flex-col gap-1">
              <span className="text-xs text-[var(--c-muted)]">Etiqueta</span>
              <input
                className={inputCls}
                placeholder="Sin etiqueta"
                value={selectedConnector.label ?? ""}
                onChange={(e) =>
                  updateConnector({ label: e.target.value || undefined })
                }
              />
            </label>

            {/* Connector style */}
            <label className="flex flex-col gap-1">
              <span className="text-xs text-[var(--c-muted)]">Estilo</span>
              <select
                className={inputCls}
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
            <button type="button" className={deleteBtnCls} onClick={handleDeleteConnector}>
              Eliminar conector
            </button>
          </>
        ) : (
          <p className="text-xs text-[var(--c-text-3)] italic">
            Seleccioná una forma para editarla
          </p>
        )}
      </div>
    </div>
  )
}
