import { useMemo } from "react";
import { listGeneradores } from "../../vblang/listGeneradores";
import type { GeneradorInfo } from "../../vblang/listGeneradores";

interface Props {
  value: string;
  onChange: (id: string) => void;
}

export default function GeneradorPicker({ value, onChange }: Props) {
  const generadores = useMemo(() => listGeneradores(), []);

  const grouped = useMemo(() => {
    const map = new Map<string, GeneradorInfo[]>();
    for (const g of generadores) {
      const list = map.get(g.materia) ?? [];
      list.push(g);
      map.set(g.materia, list);
    }
    return map;
  }, [generadores]);

  const allIds = useMemo(() => new Set(generadores.map((g) => g.id)), [generadores]);
  const notFound = value && !allIds.has(value);

  return (
    <div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded border border-[var(--c-border,#e2e8f0)] bg-white px-2 py-1 text-xs"
        data-testid="vblang-form-generador-picker"
      >
        <option value="">— Elegir generador —</option>
        {notFound && (
          <option value={value}>{value} (no encontrado)</option>
        )}
        {Array.from(grouped.entries()).map(([materia, items]) => (
          <optgroup key={materia} label={items[0].materiaLabel}>
            {items.map((g) => (
              <option key={g.id} value={g.id}>
                {g.id}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}
