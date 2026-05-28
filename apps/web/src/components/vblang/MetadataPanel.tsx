/**
 * Panel lateral con metadata editable de la plantilla.
 */

import type { Visibility } from "../../domain/vblang/plantilla.types";

export interface PlantillaMetadata {
  nombre: string;
  descripcion: string;
  materia: string;
  tags: string[];
  visibility: Visibility;
}

interface MetadataPanelProps {
  value: PlantillaMetadata;
  onChange: (next: PlantillaMetadata) => void;
  disabled?: boolean;
}

const VISIBILITY_LABELS: Record<Visibility, string> = {
  privada: "Privada (solo yo)",
  escuela: "Escuela",
  publica: "Pública (requiere moderación)",
};

export default function MetadataPanel({
  value,
  onChange,
  disabled,
}: MetadataPanelProps) {
  const update = <K extends keyof PlantillaMetadata>(key: K, v: PlantillaMetadata[K]) => {
    onChange({ ...value, [key]: v });
  };

  const tagsString = value.tags.join(", ");
  const onTagsChange = (raw: string) => {
    const parts = raw
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
    update("tags", parts);
  };

  return (
    <div
      role="region"
      aria-label="Metadatos de la plantilla"
      data-testid="vblang-metadata-panel"
      className="h-full overflow-auto p-4 space-y-4 text-sm"
    >
      <h2 className="text-base font-bold">Metadatos</h2>

      <label className="block">
        <span className="block text-xs font-medium text-[var(--c-muted,#64748b)] mb-1">
          Nombre *
        </span>
        <input
          type="text"
          className="w-full rounded-md border border-[var(--c-border,#e2e8f0)] bg-[var(--c-bg,white)] px-3 py-1.5 text-sm"
          value={value.nombre}
          onChange={(e) => update("nombre", e.target.value)}
          maxLength={200}
          disabled={disabled}
          placeholder="Ej: MRU con datos al azar"
        />
      </label>

      <label className="block">
        <span className="block text-xs font-medium text-[var(--c-muted,#64748b)] mb-1">
          Descripción
        </span>
        <textarea
          className="w-full rounded-md border border-[var(--c-border,#e2e8f0)] bg-[var(--c-bg,white)] px-3 py-1.5 text-sm"
          rows={3}
          value={value.descripcion}
          onChange={(e) => update("descripcion", e.target.value)}
          maxLength={1000}
          disabled={disabled}
        />
      </label>

      <label className="block">
        <span className="block text-xs font-medium text-[var(--c-muted,#64748b)] mb-1">
          Materia
        </span>
        <input
          type="text"
          className="w-full rounded-md border border-[var(--c-border,#e2e8f0)] bg-[var(--c-bg,white)] px-3 py-1.5 text-sm"
          value={value.materia}
          onChange={(e) => update("materia", e.target.value)}
          maxLength={100}
          disabled={disabled}
          placeholder="Ej: Física"
        />
      </label>

      <label className="block">
        <span className="block text-xs font-medium text-[var(--c-muted,#64748b)] mb-1">
          Tags (separados por coma)
        </span>
        <input
          type="text"
          className="w-full rounded-md border border-[var(--c-border,#e2e8f0)] bg-[var(--c-bg,white)] px-3 py-1.5 text-sm"
          value={tagsString}
          onChange={(e) => onTagsChange(e.target.value)}
          disabled={disabled}
          placeholder="cinemática, random, 1ro"
        />
      </label>

      <label className="block">
        <span className="block text-xs font-medium text-[var(--c-muted,#64748b)] mb-1">
          Visibilidad
        </span>
        <select
          className="w-full rounded-md border border-[var(--c-border,#e2e8f0)] bg-[var(--c-bg,white)] px-3 py-1.5 text-sm"
          value={value.visibility}
          onChange={(e) => update("visibility", e.target.value as Visibility)}
          disabled={disabled}
        >
          {(Object.keys(VISIBILITY_LABELS) as Visibility[]).map((v) => (
            <option key={v} value={v}>
              {VISIBILITY_LABELS[v]}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
