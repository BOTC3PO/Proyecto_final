import { useState } from "react";
import type { CatalogItem } from "../../generadoresV2/catalog";

export type GeneradorConfig = {
  generatorId: string;
  subtipos: string[];
  dificultad: "basico" | "intermedio" | "avanzado";
  cantidad: number;
  semilla?: string;
};

type GeneradorSelectorProps = {
  catalog: CatalogItem[];
  onGenerate: (config: GeneradorConfig) => void;
  onPreview: (config: GeneradorConfig) => void;
  isGenerating?: boolean;
};

const DIFICULTAD_OPTS: Array<{ value: GeneradorConfig["dificultad"]; label: string }> = [
  { value: "basico", label: "Básico" },
  { value: "intermedio", label: "Intermedio" },
  { value: "avanzado", label: "Avanzado" },
];

export default function GeneradorSelector({
  catalog,
  onGenerate,
  onPreview,
  isGenerating = false,
}: GeneradorSelectorProps) {
  const [selectedMateria, setSelectedMateria] = useState<string | null>(null);
  const [selectedGeneratorId, setSelectedGeneratorId] = useState<string | null>(null);
  const [selectedSubtipos, setSelectedSubtipos] = useState<string[]>([]);
  const [dificultad, setDificultad] = useState<GeneradorConfig["dificultad"]>("intermedio");
  const [cantidad, setCantidad] = useState(5);
  const [semilla, setSemilla] = useState("");

  const materias = Array.from(new Set(catalog.map((c) => c.materia))).sort();
  const generatorsForMateria = selectedMateria
    ? catalog.filter((c) => c.materia === selectedMateria)
    : [];
  const selectedGenerator = catalog.find((c) => c.id === selectedGeneratorId) ?? null;

  const toggleSubtipo = (subId: string) => {
    setSelectedSubtipos((prev) =>
      prev.includes(subId) ? prev.filter((s) => s !== subId) : [...prev, subId]
    );
  };

  const buildConfig = (): GeneradorConfig => ({
    generatorId: selectedGeneratorId!,
    subtipos: selectedSubtipos,
    dificultad,
    cantidad,
    semilla: semilla.trim() || undefined,
  });

  const canGenerate = Boolean(selectedGeneratorId);

  return (
    <div className="space-y-4">
      {/* Step 1 — Materia */}
      <div>
        <p className="text-xs font-semibold text-[var(--c-muted)] uppercase tracking-wide mb-2">
          Paso 1 — Materia
        </p>
        <div className="flex flex-wrap gap-2">
          {materias.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => {
                setSelectedMateria(m);
                setSelectedGeneratorId(null);
                setSelectedSubtipos([]);
              }}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                selectedMateria === m
                  ? "bg-[var(--c-primary)] border-[var(--c-primary)] text-white"
                  : "bg-[var(--c-surface)] border-[var(--c-border)] text-[var(--c-muted)] hover:bg-[var(--c-bg)]"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2 — Tema */}
      {selectedMateria && generatorsForMateria.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-[var(--c-muted)] uppercase tracking-wide mb-2">
            Paso 2 — Tema
          </p>
          <div className="flex flex-wrap gap-2">
            {generatorsForMateria.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => {
                  setSelectedGeneratorId(g.id);
                  setSelectedSubtipos([]);
                }}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                  selectedGeneratorId === g.id
                    ? "bg-[var(--c-primary)] border-[var(--c-primary)] text-white"
                    : "bg-[var(--c-surface)] border-[var(--c-border)] text-[var(--c-muted)] hover:bg-[var(--c-bg)]"
                }`}
              >
                {g.label.includes("—") ? g.label.split("—")[1].trim() : g.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3 — Subtipos */}
      {selectedGenerator && (
        <div>
          <p className="text-xs font-semibold text-[var(--c-muted)] uppercase tracking-wide mb-2">
            Paso 3 — Subtipos{" "}
            <span className="normal-case font-normal">(vacío = todos al azar)</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {selectedSubtipos.length > 0 && (
              <button
                type="button"
                onClick={() => setSelectedSubtipos([])}
                className="rounded-full border border-dashed border-[var(--c-border)] px-3 py-1 text-xs text-[var(--c-muted)] hover:bg-[var(--c-bg)] transition-colors"
              >
                ✕ Limpiar selección
              </button>
            )}
            {selectedGenerator.subtipos.map((sub) => {
              const active = selectedSubtipos.includes(sub.id);
              return (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => toggleSubtipo(sub.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                    active
                      ? "bg-[color-mix(in_srgb,var(--c-primary)_12%,transparent)] border-[var(--c-primary)] text-[var(--c-primary)]"
                      : "bg-[var(--c-surface)] border-[var(--c-border)] text-[var(--c-muted)] hover:bg-[var(--c-bg)]"
                  }`}
                >
                  {sub.label}
                  {sub.tieneGrafico && (
                    <span
                      title="Incluye gráfico"
                      className="text-[10px] bg-blue-100 text-blue-700 rounded px-1"
                    >
                      G
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Config — dificultad, cantidad, semilla */}
      {selectedGenerator && (
        <div className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] p-3 space-y-3">
          <div className="flex flex-wrap gap-4 items-end">
            <label className="text-xs font-medium text-[var(--c-text)]">
              Dificultad
              <div className="flex gap-1 mt-1">
                {DIFICULTAD_OPTS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setDificultad(opt.value)}
                    className={`rounded-md border px-2 py-1 text-xs transition-colors ${
                      dificultad === opt.value
                        ? "bg-[var(--c-primary)] border-[var(--c-primary)] text-white"
                        : "bg-[var(--c-surface)] border-[var(--c-border)] text-[var(--c-muted)] hover:bg-[var(--c-bg)]"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </label>

            <label className="text-xs font-medium text-[var(--c-text)]">
              Cantidad
              <div className="flex items-center gap-2 mt-1">
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={cantidad}
                  onChange={(e) => setCantidad(Number(e.target.value))}
                  className="w-28"
                />
                <span className="text-sm font-semibold text-[var(--c-primary)] w-6 text-center">
                  {cantidad}
                </span>
              </div>
            </label>

            <label className="text-xs font-medium text-[var(--c-text)]">
              Semilla (opcional)
              <input
                className="mt-1 block w-28 rounded-md border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1 text-xs focus:outline-none focus:border-[var(--c-primary)]"
                placeholder="auto"
                value={semilla}
                onChange={(e) => setSemilla(e.target.value)}
              />
            </label>
          </div>

          <div className="flex gap-2 pt-1">
            <button
              type="button"
              disabled={!canGenerate || isGenerating}
              onClick={() => onPreview(buildConfig())}
              className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-1.5 text-xs font-medium text-[var(--c-text)] hover:bg-[var(--c-bg)] disabled:opacity-50 transition-colors"
            >
              Vista previa
            </button>
            <button
              type="button"
              disabled={!canGenerate || isGenerating}
              onClick={() => onGenerate(buildConfig())}
              className="rounded-lg bg-[var(--c-primary)] px-4 py-1.5 text-xs font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              {isGenerating ? "Generando..." : `Generar ${cantidad} preguntas`}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
