import { useEffect, useState } from "react";
import type { CatalogItem } from "../../generadoresV2/catalog";
import { apiGet } from "../../lib/api";
import { useI18n } from "../../i18n/I18nContext";

export type GeneradorConfig = {
  generatorId: string;
  subtipos: string[];
  dificultad: "basico" | "intermedio" | "avanzado";
  cantidad: number;
  semilla?: string;
  enunciadosPersonalizados?: Record<string, string>;
};

type SubtipoDoc = {
  descripcion: string;
  variables: Record<string, { descripcion: string; ejemplo: string }>;
};

type GeneratorDocs = {
  subtipos: Record<string, SubtipoDoc>;
};

type GeneradorSelectorProps = {
  catalog: CatalogItem[];
  onGenerate: (config: GeneradorConfig) => void;
  onPreview: (config: GeneradorConfig) => void;
  isGenerating?: boolean;
};

const DIFICULTAD_OPTS: Array<{ value: GeneradorConfig["dificultad"]; labelKey: string }> = [
  { value: "basico", labelKey: "comun.basico" },
  { value: "intermedio", labelKey: "comun.intermedio" },
  { value: "avanzado", labelKey: "comun.avanzado" },
];

function renderPreview(
  template: string,
  vars: Record<string, { descripcion: string; ejemplo: string }>
): string {
  return template.replace(/\{([^|} .]+)[^}]*\}/g, (match, key: string) => {
    const base = key.split(".")[0];
    return vars[base]?.ejemplo ?? match;
  });
}

function validateTemplate(
  template: string,
  knownVars: Record<string, { descripcion: string; ejemplo: string }>
): { unknown: string[] } {
  const tokens = [...template.matchAll(/\{([^|} .]+)/g)].map((m) => m[1]);
  const unknown = tokens.filter((t) => !(t in knownVars));
  return { unknown };
}

export default function GeneradorSelector({
  catalog,
  onGenerate,
  onPreview,
  isGenerating = false,
}: GeneradorSelectorProps) {
  const { t } = useI18n();
  const [selectedMateria, setSelectedMateria] = useState<string | null>(null);
  const [selectedGeneratorId, setSelectedGeneratorId] = useState<string | null>(null);
  const [selectedSubtipos, setSelectedSubtipos] = useState<string[]>([]);
  const [dificultad, setDificultad] = useState<GeneradorConfig["dificultad"]>("intermedio");
  const [cantidad, setCantidad] = useState(5);
  const [semilla, setSemilla] = useState("");
  const [localTemplates, setLocalTemplates] = useState<Record<string, string>>({});
  const [generatorDocs, setGeneratorDocs] = useState<Record<string, SubtipoDoc> | null>(null);

  const materias = Array.from(new Set(catalog.map((c) => c.materia))).sort();
  const generatorsForMateria = selectedMateria
    ? catalog.filter((c) => c.materia === selectedMateria)
    : [];
  const selectedGenerator = catalog.find((c) => c.id === selectedGeneratorId) ?? null;

  // Fetch docs when generator changes
  useEffect(() => {
    if (!selectedGeneratorId) {
      setGeneratorDocs(null);
      return;
    }
    const [category, name] = selectedGeneratorId.split("/");
    apiGet<GeneratorDocs>(`/api/generators/${category}/${name}/docs`)
      .then((data) => setGeneratorDocs(data.subtipos ?? null))
      .catch(() => setGeneratorDocs(null));
  }, [selectedGeneratorId]);

  const toggleSubtipo = (subId: string) => {
    setSelectedSubtipos((prev) =>
      prev.includes(subId) ? prev.filter((s) => s !== subId) : [...prev, subId]
    );
  };

  const toggleCustomize = (st: string) => {
    if (localTemplates[st] !== undefined) {
      setLocalTemplates((prev) => {
        const next = { ...prev };
        delete next[st];
        return next;
      });
    } else {
      const adminTemplate = selectedGenerator?.enunciadosPersonalizados?.[st] ?? "";
      setLocalTemplates((prev) => ({ ...prev, [st]: adminTemplate }));
    }
  };

  const insertIntoTemplate = (st: string, token: string) => {
    setLocalTemplates((prev) => ({ ...prev, [st]: (prev[st] ?? "") + token }));
  };

  const buildConfig = (): GeneradorConfig => {
    const merged: Record<string, string> = {};
    // Apply admin templates for selected subtipos that weren't locally overridden
    for (const st of selectedSubtipos) {
      const adminTpl = selectedGenerator?.enunciadosPersonalizados?.[st];
      const localTpl = localTemplates[st];
      const tpl = localTpl !== undefined ? localTpl : adminTpl;
      if (tpl && tpl.trim()) merged[st] = tpl.trim();
    }
    return {
      generatorId: selectedGeneratorId!,
      subtipos: selectedSubtipos,
      dificultad,
      cantidad,
      semilla: semilla.trim() || undefined,
      enunciadosPersonalizados: Object.keys(merged).length > 0 ? merged : undefined,
    };
  };

  const canGenerate = Boolean(selectedGeneratorId);

  return (
    <div className="space-y-4">
      {/* Step 1 — Materia */}
      <div>
        <p className="text-xs font-semibold text-[var(--c-muted)] uppercase tracking-wide mb-2">
          {t("generadorSelector.paso1Materia")}
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
                setLocalTemplates({});
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
            {t("generadorSelector.paso2Tema")}
          </p>
          <div className="flex flex-wrap gap-2">
            {generatorsForMateria.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => {
                  setSelectedGeneratorId(g.id);
                  setSelectedSubtipos([]);
                  setLocalTemplates({});
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
            {t("generadorSelector.paso3Subtipos")}{" "}
            <span className="normal-case font-normal">{t("generadorSelector.vacioTodosAlAzar")}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {selectedSubtipos.length > 0 && (
              <button
                type="button"
                onClick={() => { setSelectedSubtipos([]); setLocalTemplates({}); }}
                className="rounded-full border border-dashed border-[var(--c-border)] px-3 py-1 text-xs text-[var(--c-muted)] hover:bg-[var(--c-bg)] transition-colors"
              >
                {t("generadorSelector.limpiarSeleccion")}
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
                      title={t("generadorSelector.incluyeGrafico")}
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

      {/* Per-subtipo enunciado customization (14e) */}
      {selectedGenerator && selectedSubtipos.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-semibold text-[var(--c-muted)] uppercase tracking-wide">
            Enunciados <span className="normal-case font-normal text-[var(--c-muted)]">(opcional — avanzado)</span>
          </p>
          {selectedSubtipos.map((st) => {
            const adminTemplate = selectedGenerator.enunciadosPersonalizados?.[st] ?? "";
            const docsVars = generatorDocs?.[st]?.variables ?? {};
            const isCustomized = localTemplates[st] !== undefined;
            const currentTemplate = localTemplates[st] ?? "";
            const { unknown } = isCustomized && currentTemplate
              ? validateTemplate(currentTemplate, docsVars)
              : { unknown: [] };

            return (
              <div key={st} className="border border-[var(--c-border)] rounded-lg p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <code className="text-xs text-[var(--c-primary)]">{st}</code>
                  <button
                    type="button"
                    className="text-xs text-[var(--c-muted)] hover:text-[var(--c-text)] transition-colors"
                    onClick={() => toggleCustomize(st)}
                  >
                    {isCustomized ? "Restaurar por defecto" : "Personalizar enunciado"}
                  </button>
                </div>
                {!isCustomized && adminTemplate && (
                  <p className="text-xs text-[var(--c-muted)] italic">
                    Template del sistema: <span className="font-mono">{adminTemplate}</span>
                  </p>
                )}
                {isCustomized && (
                  <>
                    <textarea
                      className="w-full rounded border border-[var(--c-border)] bg-[var(--c-bg)] px-2 py-1.5 text-xs font-mono text-[var(--c-text)] focus:outline-none focus:border-[var(--c-primary)] resize-none"
                      rows={2}
                      placeholder={adminTemplate || "Escribí el enunciado usando {variable}..."}
                      value={currentTemplate}
                      onChange={(e) =>
                        setLocalTemplates((prev) => ({ ...prev, [st]: e.target.value }))
                      }
                    />
                    {Object.keys(docsVars).length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {Object.entries(docsVars).map(([key, info]) => (
                          <button
                            key={key}
                            type="button"
                            title={`${info.descripcion} — ej: ${info.ejemplo}`}
                            className="bg-amber-50 border border-amber-200 text-amber-800 rounded px-1.5 py-0.5 text-xs font-mono hover:bg-amber-100 transition-colors"
                            onClick={() => insertIntoTemplate(st, `{${key}}`)}
                          >
                            {`{${key}}`}
                          </button>
                        ))}
                      </div>
                    )}
                    {unknown.length > 0 && (
                      <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded px-2 py-1">
                        Variable desconocida: {unknown.map((u) => `{${u}}`).join(", ")} — no existe en los datos de este subtipo. Se mostrará tal cual.
                      </p>
                    )}
                    {currentTemplate && (
                      <p className="text-xs text-[var(--c-muted)] italic border-t border-[var(--c-border)] pt-2">
                        Vista previa: {renderPreview(currentTemplate, docsVars)}
                      </p>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Config — dificultad, cantidad, semilla */}
      {selectedGenerator && (
        <div className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] p-3 space-y-3">
          <div className="flex flex-wrap gap-4 items-end">
            <label className="text-xs font-medium text-[var(--c-text)]">
              {t("comun.dificultad")}
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
                    {t(opt.labelKey)}
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
