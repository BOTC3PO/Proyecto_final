/**
 * Panel lateral con metadata editable de la plantilla.
 */

import { useState } from "react";
import type { Visibility } from "../../domain/vblang/plantilla.types";

const MATERIAS = [
  "Matemática",
  "Física",
  "Química",
  "Biología",
  "Economía",
  "Informática",
  "Historia",
  "Geografía",
  "Lengua",
] as const;

const OTRA = "__otra__";

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

  // Materia: select predefinido + opción "Otra…" que revela un input libre.
  const materiaEnLista = (MATERIAS as readonly string[]).includes(value.materia);
  const [materiaLibre, setMateriaLibre] = useState(
    value.materia !== "" && !materiaEnLista,
  );

  // Tags como chips: Enter agrega, X quita.
  const [tagDraft, setTagDraft] = useState("");
  const addTag = (raw: string) => {
    const t = raw.trim();
    if (t === "" || value.tags.includes(t)) {
      setTagDraft("");
      return;
    }
    update("tags", [...value.tags, t]);
    setTagDraft("");
  };
  const removeTag = (t: string) =>
    update("tags", value.tags.filter((x) => x !== t));

  return (
    <div
      role="region"
      aria-label="Metadatos de la plantilla"
      data-testid="vblang-metadata-panel"
      className="panel-section panel-section--last flex h-full text-sm"
    >
      <h2 className="panel-section__title">Metadatos</h2>

      <div className="panel-section__body space-y-4">
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

      <div className="block">
        <span className="block text-xs font-medium text-[var(--c-muted,#64748b)] mb-1">
          Materia
        </span>
        <select
          className="w-full rounded-md border border-[var(--c-border,#e2e8f0)] bg-[var(--c-bg,white)] px-3 py-1.5 text-sm"
          value={materiaLibre ? OTRA : value.materia}
          onChange={(e) => {
            if (e.target.value === OTRA) {
              setMateriaLibre(true);
              update("materia", "");
            } else {
              setMateriaLibre(false);
              update("materia", e.target.value);
            }
          }}
          disabled={disabled}
        >
          <option value="">(sin materia)</option>
          {MATERIAS.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
          <option value={OTRA}>Otra…</option>
        </select>
        {materiaLibre && (
          <input
            type="text"
            className="mt-1.5 w-full rounded-md border border-[var(--c-border,#e2e8f0)] bg-[var(--c-bg,white)] px-3 py-1.5 text-sm"
            value={value.materia}
            onChange={(e) => update("materia", e.target.value)}
            maxLength={100}
            disabled={disabled}
            placeholder="Escribí la materia"
          />
        )}
      </div>

      <div className="block">
        <span className="block text-xs font-medium text-[var(--c-muted,#64748b)] mb-1">
          Tags
        </span>
        {value.tags.length > 0 && (
          <div className="mb-1.5 flex flex-wrap gap-1">
            {value.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1 rounded-full bg-[var(--c-bg,#f1f5f9)] px-2 py-0.5 text-xs text-[var(--c-text)]"
              >
                {t}
                <button
                  type="button"
                  onClick={() => removeTag(t)}
                  disabled={disabled}
                  aria-label={`Quitar tag ${t}`}
                  className="text-[var(--c-muted,#64748b)] hover:text-[var(--c-danger)]"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
        <input
          type="text"
          className="w-full rounded-md border border-[var(--c-border,#e2e8f0)] bg-[var(--c-bg,white)] px-3 py-1.5 text-sm"
          value={tagDraft}
          onChange={(e) => setTagDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addTag(tagDraft);
            } else if (e.key === "Backspace" && tagDraft === "" && value.tags.length > 0) {
              removeTag(value.tags[value.tags.length - 1]);
            }
          }}
          onBlur={() => addTag(tagDraft)}
          disabled={disabled}
          placeholder="Escribí y Enter (ej. cinemática)"
        />
      </div>

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
    </div>
  );
}
