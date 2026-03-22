import { useEffect, useMemo, useState } from "react";
import { apiGet } from "../../lib/api";

const hashString = (value: string) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

const mulberry32 = (seed: number) => {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

type GeneratorSubtipo = { id: string; label: string };
type GeneratorCatalogItem = {
  id: string;
  materia: string;
  label: string;
  description?: string;
  subtipos: GeneratorSubtipo[];
};

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

export default function QuizEditorGenerated({
  generatorId,
  generatorVersion,
  params,
  count,
  onChange,
  showPreview = false,
}: QuizEditorGeneratedProps) {
  const [catalog, setCatalog] = useState<GeneratorCatalogItem[]>([]);
  const [catalogStatus, setCatalogStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    apiGet<{ items: GeneratorCatalogItem[] }>("/api/generators")
      .then((data) => {
        setCatalog(data.items);
        setCatalogStatus("ready");
      })
      .catch(() => {
        setCatalogStatus("error");
      });
  }, []);

  const previewItems = useMemo(() => {
    if (!showPreview || !generatorId || !count || count <= 0) return [];
    const seed = hashString(
      `preview:${generatorId}:${generatorVersion}:${JSON.stringify(params ?? {})}`
    );
    const random = mulberry32(seed);
    return Array.from({ length: count }, (_, index) => {
      const token = Math.floor(random() * 900 + 100);
      return `Pregunta ${index + 1} · semilla ${token}`;
    });
  }, [count, generatorId, generatorVersion, params, showPreview]);

  const selectedItem = catalog.find((c) => c.id === generatorId);
  const selectedSubtipoId = typeof params?.subtipo === "string" ? params.subtipo : null;
  const selectedSubtipo = selectedItem?.subtipos.find((s) => s.id === selectedSubtipoId);

  const handleSelect = (item: GeneratorCatalogItem, subtipo?: GeneratorSubtipo) => {
    onChange({
      generatorId: item.id,
      generatorVersion: 1,
      params: subtipo ? { subtipo: subtipo.id } : {},
      count,
    });
  };

  // Group catalog by materia
  const grouped = catalog.reduce<Record<string, GeneratorCatalogItem[]>>((acc, item) => {
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
          <>
            {catalogStatus === "loading" && (
              <p className="text-xs text-gray-500 py-2">Cargando generadores...</p>
            )}
            {catalogStatus === "error" && (
              <p className="text-xs text-red-500 py-2">No se pudo cargar el catálogo de generadores.</p>
            )}
            {catalogStatus === "ready" && (
              <div className="max-h-72 overflow-y-auto rounded-lg border border-gray-200 p-2 space-y-3">
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
                            >
                              Aleatorio
                            </button>
                            {item.subtipos.map((subtipo) => (
                              <button
                                key={subtipo.id}
                                type="button"
                                className="rounded border border-gray-300 bg-gray-50 px-2 py-0.5 text-[11px] text-gray-700 hover:border-blue-400 hover:bg-blue-50 transition-colors"
                                onClick={() => handleSelect(item, subtipo)}
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
            )}
          </>
        )}
      </div>

      {/* Quantity */}
      <label className="text-xs font-medium text-gray-600">
        Cantidad de preguntas
        <input
          className="mt-1 w-32 rounded-md border border-gray-300 px-2 py-2 text-sm"
          type="number"
          min={1}
          value={Number.isNaN(count) ? "" : count}
          onChange={(event) => onChange({ count: Number(event.target.value) || 0 })}
        />
      </label>

      {showPreview ? (
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-xs font-semibold text-gray-700">Vista previa determinística (semilla fija)</p>
          {previewItems.length === 0 ? (
            <p className="mt-2 text-xs text-gray-500">Seleccioná un generador y la cantidad para ver ejemplos.</p>
          ) : (
            <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-gray-600">
              {previewItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}
