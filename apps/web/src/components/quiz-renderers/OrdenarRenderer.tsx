/**
 * OrdenarRenderer — renderer del tipo de pregunta `ordenar` (Sprint 9B).
 *
 * El alumno reordena `items` usando drag-and-drop. El estado del orden es
 * controlado: el orden actual se levanta al padre vía `onChange`. Cuando
 * `disabled` (post-submit), se desactiva el drag y se pintan los items
 * verdes/rojos según `correctOrder`.
 *
 * Mobile-friendly: PointerSensor (mouse + touch) + KeyboardSensor (accesibilidad).
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
}

function SortableCard({ id, label, position, feedback, disabled }: SortableCardProps) {
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
    "flex items-center gap-3 rounded-lg border px-3 py-2 text-sm bg-white select-none";
  const cursor = disabled ? "cursor-default" : "cursor-grab active:cursor-grabbing";
  const feedbackClasses =
    feedback === "correct"
      ? "border-emerald-400 bg-emerald-50 text-emerald-800"
      : feedback === "wrong"
        ? "border-red-400 bg-red-50 text-red-800"
        : "border-slate-300 text-slate-800 hover:border-slate-400";

  return (
    <li
      ref={setNodeRef}
      style={style}
      className={`${baseClasses} ${cursor} ${feedbackClasses}`}
      data-testid={`ordenar-card-${id}`}
      {...attributes}
      {...listeners}
    >
      <span
        className="w-6 h-6 shrink-0 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold flex items-center justify-center"
        aria-hidden
      >
        {position}
      </span>
      <span className="flex-1">{label}</span>
      {!disabled && (
        <span className="text-slate-300 text-lg leading-none" aria-hidden>
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
      if (oldIndex < 0 || newIndex < 0) return prev;
      const next = prev.slice();
      const [moved] = next.splice(oldIndex, 1);
      next.splice(newIndex, 0, moved);
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
              />
            );
          })}
        </ol>
      </SortableContext>
    </DndContext>
  );
}
