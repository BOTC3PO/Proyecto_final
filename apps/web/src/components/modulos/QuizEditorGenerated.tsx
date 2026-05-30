import { useEffect, useMemo, useState } from "react";
import { apiGet } from "../../lib/api";
import { getStaticCatalog } from "../../generadoresV2/catalog";
import QuizGeneratedPreview from "./QuizGeneratedPreview";

type GeneratorSubtipo = { id: string; label: string };
type GeneratorCatalogItem = {
  id: string;
  materia: string;
  label: string;
  description?: string;
  subtipos: GeneratorSubtipo[];
};

type Dificultad = "basico" | "intermedio" | "avanzado";

type QuizEditorGeneratedProps = {
  generatorId: string;
  generatorVersion: number;
  params: Record<string, unknown>;
  count: number;
  onChange: (next: {
    generatorId?: string;
    generatorVersion?: number;
    params?: Record<string, unknown>;
    count?: number;
  }) => void;
  showPreview?: boolean;
};

const DIFICULTAD_OPTS: Array<{ value: Dificultad; label: string }> = [
  { value: "basico", label: "Básico" },
  { value: "intermedio", label: "Intermedio" },
  { value: "avanzado", label: "Avanzado" },
];

export default function QuizEditorGenerated({
  generatorId,
  params,
  count,
  onChange,
  showPreview = false,
}: QuizEditorGeneratedProps) {
  const [catalog, setCatalog] = useState<GeneratorCatalogItem[]>(() => getStaticCatalog());
  const [docs, setDocs] = useState<Record<string, unknown> | null>(null);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    if (!generatorId) { setDocs(null); return; }
    apiGet<Record<string, unknown>>(`/api/generators/${generatorId}/docs`)
      .then(setDocs)
      .catch(() => setDocs(null));
  }, [generatorId]);

  useEffect(() => {
    apiGet<{ items: GeneratorCatalogItem[] }>("/api/generators")
      .then((data) => {
        if (data.items && data.items.length > 0) {
          setCatalog(data.items);
        }
      })
      .catch(() => {
        // already using static catalog as initial state — keep it
      });
  }, []);

  const dificultad: Dificultad =
    typeof params?.dificultad === "string" &&
    ["basico", "intermedio", "avanzado"].includes(params.dificultad)
      ? (params.dificultad as Dificultad)
      : "intermedio";

  const selectedItem = catalog.find((c) => c.id === generatorId);
  const selectedSubtipoId = typeof params?.subtipo === "string" ? params.subtipo : null;
  const selectedSubtipo = selectedItem?.subtipos.find((s) => s.id === selectedSubtipoId);

  const handleSelect = (item: GeneratorCatalogItem, subtipo?: GeneratorSubtipo) => {
    onChange({
      generatorId: item.id,
      generatorVersion: 1,
      params: subtipo ? { subtipo: subtipo.id, dificultad } : { dificultad },
      count,
    });
  };

  // Filtro por materia / nombre del generador / subtipo.
  const filteredCatalog = useMemo(() => {
    const q = filtro.trim().toLowerCase();
    if (!q) return catalog;
    return catalog.filter((item) => {
      const haystack = [
        item.materia,
        item.label,
        ...item.subtipos.map((s) => s.label),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [catalog, filtro]);

  // Group catalog by materia
  const grouped = filteredCatalog.reduce<Record<string, GeneratorCatalogItem[]>>((acc, item) => {
    if (!acc[item.materia]) acc[item.materia] = [];
    acc[item.materia].push(item);
    return acc;
  }, {});

  return (
    <div className="space-y-4">
      {/* Generator picker */}
      <div>
        <p className="mb-2 text-xs font-semibold text-gray-700">Configuración del generador</p>

        {generatorId && selectedItem ? (
          <div className="flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-blue-900">{selectedItem.label}</p>
              {selectedSubtipo ? (
                <p className="mt-0.5 text-xs text-blue-700">{selectedSubtipo.label}</p>
              ) : selectedItem.description ? (
                <p className="mt-0.5 text-xs text-blue-700">{selectedItem.description}</p>
              ) : null}
            </div>
            <button
              type="button"
              className="shrink-0 text-xs text-blue-600 hover:underline"
              onClick={() => onChange({ generatorId: "", generatorVersion: 1, params: {} })}
            >
              Cambiar
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <input
              type="search"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              placeholder="Filtrar por materia o generador…"
              aria-label="Filtrar generadores"
              className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs focus:border-blue-400 focus:outline-none"
            />
            <div className="max-h-72 overflow-y-auto rounded-lg border border-gray-200 p-2 space-y-3">
            {Object.keys(grouped).length === 0 && (
              <p className="px-1 py-2 text-xs text-gray-500">
                Sin generadores que coincidan con “{filtro}”.
              </p>
            )}
            {Object.entries(grouped).map(([materia, items]) => (
              <div key={materia}>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  {materia}
                </p>
                <div className="space-y-1">
                  {items.map((item) => (
                    <div key={item.id} className="rounded-md border border-gray-200 bg-white p-2">
                      <p className="text-xs font-semibold text-gray-800 mb-1">{item.label}</p>
                      <div className="flex flex-wrap gap-1">
                        <button
                          type="button"
                          className="rounded border border-gray-300 bg-gray-50 px-2 py-0.5 text-[11px] text-gray-700 hover:border-blue-400 hover:bg-blue-50 transition-colors"
                          onClick={() => handleSelect(item)}
                          aria-pressed={selectedSubtipoId === null}
                        >
                          Aleatorio
                        </button>
                        {item.subtipos.map((subtipo) => (
                          <button
                            key={subtipo.id}
                            type="button"
                            className="rounded border border-gray-300 bg-gray-50 px-2 py-0.5 text-[11px] text-gray-700 hover:border-blue-400 hover:bg-blue-50 transition-colors"
                            onClick={() => handleSelect(item, subtipo)}
                            aria-pressed={selectedSubtipoId === subtipo.id}
                          >
                            {subtipo.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            </div>
          </div>
        )}
      </div>

      {/* Docs panel */}
      {docs && selectedSubtipoId && (() => {
        const subtipoDoc = (docs.subtipos as Record<string, unknown>)?.[selectedSubtipoId];
        if (!subtipoDoc) return null;
        const variables = (subtipoDoc as Record<string, unknown>).variables as
          Record<string, { descripcion: string; ejemplo: string }> | undefined;
        return (
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 space-y-2">
            <p className="text-xs font-semibold text-amber-800">
              Variables disponibles — {selectedSubtipo?.label}
            </p>
            <p className="text-xs text-amber-700">
              {(subtipoDoc as Record<string, unknown>).descripcion as string}
            </p>
            {variables && (
              <div className="grid gap-1">
                {Object.entries(variables).map(([key, val]) => (
                  <div key={key} className="flex items-start gap-2 text-xs">
                    <code className="rounded bg-amber-100 px-1.5 py-0.5 font-mono text-amber-900">
                      {"{" + key + "}"}
                    </code>
                    <span className="text-amber-700">
                      {val.descripcion}
                      {val.ejemplo ? ` — Ej: ${val.ejemplo}` : ""}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })()}

      {/* Dificultad (7b) */}
      <label className="block text-xs font-medium text-gray-600">
        Dificultad
        <div className="flex gap-1 mt-1">
          {DIFICULTAD_OPTS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() =>
                onChange({ params: { ...params, dificultad: opt.value } })
              }
              className={`rounded-md border px-2 py-1 text-xs transition-colors ${
                dificultad === opt.value
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "bg-gray-50 border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-400"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </label>

      {/* Quantity (7b) */}
      <label className="text-xs font-medium text-gray-600">
        Cantidad de preguntas
        <div className="flex items-center gap-3 mt-1">
          <input
            className="w-32 rounded-md border border-gray-300 px-2 py-2 text-sm"
            type="number"
            min={1}
            max={30}
            value={Number.isNaN(count) ? "" : count}
            onChange={(event) => onChange({ count: Number(event.target.value) || 0 })}
          />
          <input
            type="range"
            min={1}
            max={30}
            value={Number.isNaN(count) ? 5 : count}
            onChange={(event) => onChange({ count: Number(event.target.value) })}
            className="flex-1"
          />
        </div>
      </label>

      {showPreview ? (
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-xs font-semibold text-gray-700">Vista previa</p>
          <div className="mt-2">
            {!generatorId || !count || count <= 0 ? (
              <p className="text-xs text-gray-500">
                Seleccioná un generador y la cantidad para ver ejemplos.
              </p>
            ) : (
              <QuizGeneratedPreview generatorId={generatorId} count={count} />
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
