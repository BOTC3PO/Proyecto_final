/**
 * OrdenarRenderer — renderer del tipo de pregunta `ordenar` (Sprint 9B).
 *
 * El alumno reordena `items` usando drag-and-drop. El estado del orden es
 * controlado: el orden actual se levanta al padre vía `onChange`. Cuando
 * `disabled` (post-submit), se desactiva el drag y se pintan los items
 * verdes/rojos según `correctOrder`.
 *
 * Touch/mobile (F5-06):
 *   - dnd-kit PointerSensor: mouse + touch + pen unificados.
 *   - dnd-kit KeyboardSensor: Tab para enfocar, Space para pick up, flechas
 *     para mover, Space para soltar, Esc para cancelar.
 *   - Botones ↑/↓ visibles como fallback accesible (F5-06, plan L1
 *     responder-desde-teléfono). Siempre visibles durante la respuesta,
 *     ocultos en post-submit. Tamaño mínimo 44×44px (Apple HIG).
 *
 * La lógica de reordenamiento vive en `domain/quiz/reorder.ts` (pura,
 * testeable sin DOM) y se reutiliza tanto para el drag como para los
 * botones ↑/↓.
 */

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useEffect, useState } from "react";
import { canMoveDown, canMoveUp, moveItemBy } from "../../domain/quiz/reorder";

interface OrdenarRendererProps {
  /** Items disponibles. Si el padre quiere mezclarlos, debe hacerlo antes. */
  items: string[];
  /** Orden inicial controlado (si el alumno ya respondió). Si no se pasa, usa `items`. */
  value?: string[];
  /** Disparado cada vez que el alumno reordena. */
  onChange?: (orden: string[]) => void;
  /** Bloquea drag (post-submit) y muestra feedback verde/rojo. */
  disabled?: boolean;
  /** Orden correcto, usado para pintar feedback cuando `disabled`. */
  correctOrder?: string[];
}

interface SortableCardProps {
  id: string;
  label: string;
  position: number;
  feedback?: "correct" | "wrong" | null;
  disabled: boolean;
  canUp: boolean;
  canDown: boolean;
  onMoveUp: () => void;
  onMoveDown: () => void;
}

function SortableCard({
  id,
  label,
  position,
  feedback,
  disabled,
  canUp,
  canDown,
  onMoveUp,
  onMoveDown,
}: SortableCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id, disabled });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
  };

  const baseClasses =
    "flex items-center gap-2 sm:gap-3 rounded-lg border px-3 py-2 min-h-[44px] text-sm bg-white select-none";
  const cursor = disabled ? "cursor-default" : "cursor-grab active:cursor-grabbing";
  const feedbackClasses =
    feedback === "correct"
      ? "border-emerald-400 bg-emerald-50 text-emerald-800"
      : feedback === "wrong"
        ? "border-red-400 bg-red-50 text-red-800"
        : "border-slate-300 text-slate-800 hover:border-slate-400";

  // Importante: stopPropagation en pointerdown evita que dnd-kit
  // setPointerCapture sobre el <li> robe el click del botón.
  // (En happy-dom no se nota, pero en navegadores reales sí.)
  const stopDnd = (e: React.PointerEvent | React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className={`${baseClasses} ${cursor} ${feedbackClasses}`}
      data-testid={`ordenar-card-${id}`}
      {...attributes}
    >
      <span
        className="w-6 h-6 shrink-0 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold flex items-center justify-center"
        aria-hidden
      >
        {position}
      </span>
      <span className="flex-1">{label}</span>
      {!disabled && (
        <>
          <button
            type="button"
            onPointerDown={stopDnd}
            onMouseDown={stopDnd}
            onClick={(e) => {
              e.stopPropagation();
              onMoveUp();
            }}
            disabled={!canUp}
            aria-label={`Subir ${label}`}
            data-testid={`ordenar-up-${id}`}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded text-slate-500 hover:bg-slate-100 active:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <span aria-hidden>↑</span>
          </button>
          <button
            type="button"
            onPointerDown={stopDnd}
            onMouseDown={stopDnd}
            onClick={(e) => {
              e.stopPropagation();
              onMoveDown();
            }}
            disabled={!canDown}
            aria-label={`Bajar ${label}`}
            data-testid={`ordenar-down-${id}`}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded text-slate-500 hover:bg-slate-100 active:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <span aria-hidden>↓</span>
          </button>
        </>
      )}
      {!disabled && (
        <span
          className="text-slate-300 text-lg leading-none touch-none cursor-grab active:cursor-grabbing"
          aria-hidden
          {...listeners}
        >
          ⋮⋮
        </span>
      )}
    </li>
  );
}

export default function OrdenarRenderer({
  items,
  value,
  onChange,
  disabled = false,
  correctOrder,
}: OrdenarRendererProps) {
  const [order, setOrder] = useState<string[]>(value ?? items);

  // Sincronizar si el padre pasa un value distinto (cambio de pregunta, reset, etc).
  useEffect(() => {
    if (value !== undefined) {
      setOrder(value);
    } else {
      setOrder(items);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.join("|"), value?.join("|")]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    if (disabled) return;
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    setOrder((prev) => {
      const oldIndex = prev.indexOf(String(active.id));
      const newIndex = prev.indexOf(String(over.id));
      const next = moveItemBy(prev, oldIndex, newIndex);
      onChange?.(next);
      return next;
    });
  };

  const handleMove = (from: number, to: number) => {
    if (disabled) return;
    setOrder((prev) => {
      const next = moveItemBy(prev, from, to);
      onChange?.(next);
      return next;
    });
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={order} strategy={verticalListSortingStrategy}>
        <ol className="flex flex-col gap-2" data-testid="ordenar-list">
          {order.map((item, idx) => {
            let feedback: "correct" | "wrong" | null = null;
            if (disabled && correctOrder) {
              feedback = correctOrder[idx] === item ? "correct" : "wrong";
            }
            return (
              <SortableCard
                key={item}
                id={item}
                label={item}
                position={idx + 1}
                feedback={feedback}
                disabled={disabled}
                canUp={canMoveUp(order, idx)}
                canDown={canMoveDown(order, idx)}
                onMoveUp={() => handleMove(idx, idx - 1)}
                onMoveDown={() => handleMove(idx, idx + 1)}
              />
            );
          })}
        </ol>
      </SortableContext>
    </DndContext>
  );
}
