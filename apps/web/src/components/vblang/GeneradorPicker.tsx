import { useMemo, useState } from "react";
import { listGeneradores } from "../../vblang/listGeneradores";

interface Props {
  value: string;
  onChange: (id: string) => void;
}

export default function GeneradorPicker({ value, onChange }: Props) {
  const generadores = useMemo(() => listGeneradores(), []);
  const [filtro, setFiltro] = useState("");

  const filtered = useMemo(() => {
    const q = filtro.trim().toLowerCase();
    if (!q) return generadores;
    return generadores.filter((g) =>
      [g.id, g.materiaLabel, ...g.subtipos].join(" ").toLowerCase().includes(q),
    );
  }, [filtro, generadores]);

  // Orden estable por materia y luego por id, para agrupar visualmente sin
  // anidar <optgroup> (HTML no lo permite).
  const ordered = useMemo(
    () =>
      [...filtered].sort(
        (a, b) =>
          a.materiaLabel.localeCompare(b.materiaLabel) || a.id.localeCompare(b.id),
      ),
    [filtered],
  );

  // Valores válidos: el id "pelado" (subtipo aleatorio) y cada
  // "<id>/<subtipo>" (subtipo fijo). El provider resuelve ambas formas.
  const allValues = useMemo(() => {
    const set = new Set<string>();
    for (const g of generadores) {
      set.add(g.id);
      for (const s of g.subtipos) set.add(`${g.id}/${s}`);
    }
    return set;
  }, [generadores]);
  const notFound = value !== "" && !allValues.has(value);

  // Subtipos del generador actualmente elegido, para mostrar qué produce.
  const selectedBaseId = value.includes("/")
    ? generadores.find((g) => value === g.id || value.startsWith(`${g.id}/`))?.id
    : value;
  const selected = generadores.find((g) => g.id === selectedBaseId);

  return (
    <div className="space-y-1">
      <input
        type="search"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Filtrar por materia o generador..."
        aria-label="Filtrar generadores"
        className="w-full rounded border border-[var(--c-border,#e2e8f0)] bg-white px-2 py-1 text-xs"
      />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded border border-[var(--c-border,#e2e8f0)] bg-white px-2 py-1 text-xs"
        data-testid="vblang-form-generador-picker"
      >
        <option value="">— Elegir generador —</option>
        {notFound && <option value={value}>{value} (no encontrado)</option>}
        {ordered.map((g) => (
          <optgroup key={g.id} label={`${g.materiaLabel} — ${g.id}`}>
            <option value={g.id}>{g.id} (subtipo aleatorio)</option>
            {g.subtipos.map((s) => (
              <option key={`${g.id}/${s}`} value={`${g.id}/${s}`}>
                {`    ${s}`}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      {selected && selected.subtipos.length > 0 && (
        <p className="text-[11px] text-[var(--c-muted,#64748b)]">
          {selected.subtipos.length} subtipo(s): {selected.subtipos.join(", ")}
        </p>
      )}
    </div>
  );
}
