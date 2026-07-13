import { useEffect, useState } from "react";
import { apiGet } from "../../lib/api";

type MaterialListItem = {
  id: string;
  titulo: string;
  tipo: string;
  origen?: "modulo" | "material";
};

type MaterialConTenido = {
  id: string;
  tipo: string;
  titulo: string;
  version: { contenido: unknown };
};

const TIPO_LABEL: Record<string, string> = {
  mapa: "Mapa",
  timeline: "Línea de tiempo",
  interactivo: "Herramienta interactiva",
  presentacion: "Presentación",
};

type Props = {
  onInsert: (material: { id: string; tipo: string; titulo: string; contenido: unknown }) => void;
};

/**
 * PLAN-G §1 (item 25) — selector para insertar un material guardado
 * (de cualquiera de los 4 editores standalone) como recurso nuevo dentro
 * de un módulo. Copia snapshot: no crea un vínculo vivo con el material.
 */
export function InsertarMaterialGuardado({ onInsert }: Props) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<MaterialListItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    setError(null);
    apiGet<{ items: MaterialListItem[] }>("/api/materiales")
      .then((data) => {
        setItems((data.items ?? []).filter((i) => i.origen === "material"));
      })
      .catch(() => setError("No se pudieron cargar los materiales guardados."))
      .finally(() => setLoading(false));
  }, [open]);

  const handleSelect = async (item: MaterialListItem) => {
    try {
      const material = await apiGet<MaterialConTenido>(`/api/materiales/guardados/${item.id}`);
      onInsert({
        id: material.id,
        tipo: material.tipo,
        titulo: material.titulo,
        contenido: material.version.contenido,
      });
      setOpen(false);
    } catch {
      setError("No se pudo cargar ese material.");
    }
  };

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-medium text-[var(--c-primary)] hover:bg-[var(--c-bg)] transition-colors"
      >
        Insertar material guardado
      </button>
      {open && (
        <div className="absolute z-10 mt-1 w-72 rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] shadow-lg p-2 max-h-64 overflow-y-auto">
          {loading && <p className="text-xs text-[var(--c-muted)] px-2 py-1">Cargando…</p>}
          {error && <p className="text-xs text-[var(--c-danger)] px-2 py-1">{error}</p>}
          {!loading && !error && items.length === 0 && (
            <p className="text-xs text-[var(--c-muted)] px-2 py-1">
              Todavía no guardaste ningún material.
            </p>
          )}
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelect(item)}
              className="w-full text-left rounded-md px-2 py-1.5 text-xs text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
            >
              <span className="font-medium">{item.titulo}</span>
              <span className="text-[var(--c-muted)]"> · {TIPO_LABEL[item.tipo] ?? item.tipo}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
