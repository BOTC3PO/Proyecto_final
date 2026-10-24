import { useEffect, useMemo, useState } from "react";
import { apiGet } from "../../lib/api";
import { getStaticCatalog } from "../../generadoresV2/catalog";
import QuizGeneratedPreview from "./QuizGeneratedPreview";

import { useI18n } from "../../i18n/I18nContext";
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

const DIFICULTAD_OPTS: Array<{ value: Dificultad; labelKey: string }> = [
  { value: "basico", labelKey: "comun.basico" },
  { value: "intermedio", labelKey: "comun.intermedio" },
  { value: "avanzado", labelKey: "comun.avanzado" },
];

export default function QuizEditorGenerated({
  generatorId,
  params,
  count,
  onChange,
  showPreview = false,
}: QuizEditorGeneratedProps) {
  const { t } = useI18n();
  const [catalog, setCatalog] = useState<GeneratorCatalogItem[]>(() => getStaticCatalog());
  const [docs, setDocs] = useState<Record<string, unknown> | null>(null);
  const [filtro, setFiltro] = useState("");

  // Enunciados personalizados (Tarea 04): array opcional de plantillas.
  // Se persiste en params.enunciadoTemplates; si queda vacio, se omite la clave.
  const enunciadoTemplatesRaw: unknown = (params as Record<string, unknown>)?.enunciadoTemplates;
  const enunciadoTemplates: string[] = Array.isArray(enunciadoTemplatesRaw)
    ? enunciadoTemplatesRaw.filter((s): s is string => typeof s === "string")
    : [];
  const [enunciadosOpen, setEnunciadosOpen] = useState<boolean>(false);

  const setEnunciadoTemplates = (next: string[]) => {
    // Si el profe borra todos los inputs (longitud 0), omitimos la clave.
    // En cualquier otro caso, persistimos el array tal cual para que la UI
    // pueda mantener filas vacias que el usuario aun esta editando. Los
    // vacios se descartan al consumir el parametro (ModuloDetail).
    if (next.length === 0) {
      const { enunciadoTemplates: _omit, ...restParams } = params as Record<string, unknown>;
      void _omit;
      onChange({ params: restParams });
      return;
    }
    onChange({ params: { ...params, enunciadoTemplates: next } });
  };

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
  // Pool de subtipos (task 4): array de ids. Vacío = todos al azar.
  // Compatibilidad con el `subtipo` único anterior.
  const selectedSubtipos: string[] = Array.isArray(params?.subtipos)
    ? (params.subtipos as string[])
    : typeof params?.subtipo === "string"
      ? [params.subtipo as string]
      : [];

  const handleSelect = (item: GeneratorCatalogItem) => {
    onChange({
      generatorId: item.id,
      generatorVersion: 1,
      params: { dificultad },
      count,
    });
  };

  // Alterna un subtipo en el pool. Quita la clave `subtipo` (single) legacy.
  const toggleSubtipo = (subtipoId: string) => {
    const next = selectedSubtipos.includes(subtipoId)
      ? selectedSubtipos.filter((s) => s !== subtipoId)
      : [...selectedSubtipos, subtipoId];
    const { subtipo: _legacy, ...restParams } = params as Record<string, unknown>;
    void _legacy;
    onChange({ params: { ...restParams, subtipos: next } });
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
        <p className="mb-2 text-xs font-semibold text-gray-700">{t("quizEditorGenerated.configuracionDelGenerador")}</p>

        {generatorId && selectedItem ? (
          <div className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 space-y-2">
            <div className="flex items-start gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-blue-900">{selectedItem.label}</p>
                {selectedItem.description ? (
                  <p className="mt-0.5 text-xs text-blue-700">{selectedItem.description}</p>
                ) : null}
              </div>
              <button
                type="button"
                className="shrink-0 text-xs text-blue-600 hover:underline"
                onClick={() => onChange({ generatorId: "", generatorVersion: 1, params: {} })}
              >{t("moduloEditor.cambiar")}</button>
            </div>
            {/* Pool de subtipos (task 4): vacío = todos al azar. */}
            {selectedItem.subtipos.length > 0 && (
              <div>
                <p className="mb-1 text-[11px] font-medium text-blue-800">{t("quizEditorGenerated.subtiposDelPool")}<span className="ml-1 font-normal text-blue-600">
                    {selectedSubtipos.length === 0
                      ? "(ninguno elegido = todos al azar)"
                      : `(${selectedSubtipos.length} elegido${selectedSubtipos.length === 1 ? "" : "s"})`}
                  </span>
                </p>
                <div className="flex flex-wrap gap-1">
                  {selectedItem.subtipos.map((subtipo) => {
                    const active = selectedSubtipos.includes(subtipo.id);
                    return (
                      <button
                        key={subtipo.id}
                        type="button"
                        aria-pressed={active}
                        onClick={() => toggleSubtipo(subtipo.id)}
                        className={`rounded-full border px-2 py-0.5 text-[11px] transition-colors ${
                          active
                            ? "border-blue-500 bg-blue-600 text-white"
                            : "border-blue-300 bg-white text-blue-700 hover:bg-blue-100"
                        }`}
                      >
                        {subtipo.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-2">
            <input
              type="search"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              placeholder={t("quizEditorGenerated.filtrarPorMateriaOGenerador")}
              aria-label={t("quizEditorGenerated.filtrarGeneradores")}
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
                          aria-pressed={generatorId === item.id && selectedSubtipos.length === 0}
                        >{t("quizEditorGenerated.aleatorioTodos")}</button>
                        {item.subtipos.map((subtipo) => (
                          <button
                            key={subtipo.id}
                            type="button"
                            className="rounded border border-gray-300 bg-gray-50 px-2 py-0.5 text-[11px] text-gray-700 hover:border-blue-400 hover:bg-blue-50 transition-colors"
                            onClick={() =>
                              onChange({
                                generatorId: item.id,
                                generatorVersion: 1,
                                params: { dificultad, subtipos: [subtipo.id] },
                                count,
                              })
                            }
                            aria-pressed={generatorId === item.id && selectedSubtipos.includes(subtipo.id)}
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

      {/* Docs panel — variables de cada subtipo elegido en el pool. */}
      {docs && selectedSubtipos.length > 0 && (
        <div className="space-y-2">
          {selectedSubtipos.map((subtipoId) => {
            const subtipoDoc = (docs.subtipos as Record<string, unknown>)?.[subtipoId] as
              | Record<string, unknown>
              | undefined;
            if (!subtipoDoc) return null;
            const label =
              selectedItem?.subtipos.find((s) => s.id === subtipoId)?.label ?? subtipoId;
            const variables = subtipoDoc.variables as
              | Record<string, { descripcion: string; ejemplo: string }>
              | undefined;
            return (
              <div
                key={subtipoId}
                className="rounded-lg border border-amber-200 bg-amber-50 p-3 space-y-2"
              >
                <p className="text-xs font-semibold text-amber-800">
                  Variables disponibles — {label}
                </p>
                <p className="text-xs text-amber-700">
                  {subtipoDoc.descripcion as string}
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
          })}
        </div>
      )}

      {/* Enunciados personalizados (Tarea 04): opcional y colapsable. */}
      <div className="rounded-lg border border-gray-200">
        <button
          type="button"
          className="flex w-full items-center justify-between px-3 py-2 text-left"
          aria-expanded={enunciadosOpen}
          aria-controls="enunciados-personalizados-panel"
          onClick={() => setEnunciadosOpen((v) => !v)}
        >
          <span className="text-xs font-semibold text-gray-700">{t("quizEditorGenerated.enunciadosPersonalizadosOpcional")}</span>
          <span className="text-xs text-gray-500">{enunciadosOpen ? "▾" : "▸"}</span>
        </button>
        {enunciadosOpen && (
          <div
            id="enunciados-personalizados-panel"
            className="space-y-2 border-t border-gray-200 px-3 py-2"
          >
            <p className="text-[11px] text-gray-600">
              Usá {"{variable}"} para interpolar valores del ejercicio. Ej: {"{masa|kg}"}, {"{resultado|2}"}.
            </p>
            {(() => {
              // Chips de variables del primer subtipo elegido, si docs las provee.
              const firstSubtipo = selectedSubtipos[0];
              if (!firstSubtipo) return null;
              const subtipoDoc = (docs?.subtipos as Record<string, unknown> | undefined)?.[
                firstSubtipo
              ] as Record<string, unknown> | undefined;
              const variables = subtipoDoc?.variables as
                | Record<string, { descripcion: string; ejemplo: string }>
                | undefined;
              if (!variables) return null;
              const keys = Object.keys(variables);
              if (keys.length === 0) return null;
              return (
                <div className="flex flex-wrap gap-1">
                  {keys.map((k) => (
                    <code
                      key={k}
                      className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-mono text-gray-700"
                    >
                      {"{" + k + "}"}
                    </code>
                  ))}
                </div>
              );
            })()}
            <div className="space-y-1">
              {enunciadoTemplates.map((tmpl, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <input
                    type="text"
                    value={tmpl}
                    aria-label={`Variante de enunciado ${idx + 1}`}
                    onChange={(e) => {
                      const next = enunciadoTemplates.slice();
                      next[idx] = e.target.value;
                      setEnunciadoTemplates(next);
                    }}
                    className="flex-1 rounded-md border border-gray-300 px-2 py-1 text-xs focus:border-blue-400 focus:outline-none"
                    placeholder={t("quizEditorGenerated.ejCalculaLaOperacionsuma")}
                  />
                  <button
                    type="button"
                    aria-label={`Eliminar variante ${idx + 1}`}
                    onClick={() => {
                      const next = enunciadoTemplates.filter((_, i) => i !== idx);
                      setEnunciadoTemplates(next);
                    }}
                    className="shrink-0 rounded-md border border-gray-300 px-2 py-1 text-xs text-gray-600 hover:border-red-400 hover:bg-red-50 hover:text-red-700"
                  >{t("comun.eliminar")}</button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setEnunciadoTemplates([...enunciadoTemplates, ""])}
              className="rounded-md border border-dashed border-gray-300 px-2 py-1 text-xs text-gray-600 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700"
            >{t("quizEditorGenerated.agregarVariante")}</button>
          </div>
        )}
      </div>

      {/* Dificultad (7b) */}
      <label className="block text-xs font-medium text-gray-600">{t("comun.dificultad")}<div className="flex gap-1 mt-1">
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
              {t(opt.labelKey)}
            </button>
          ))}
        </div>
      </label>

      {/* Quantity (7b) */}
      <label className="text-xs font-medium text-gray-600">{t("plantillaEditorTiza.cantidadDePreguntas")}<div className="flex items-center gap-3 mt-1">
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
          <p className="text-xs font-semibold text-gray-700">{t("comun.vistaPrevia")}</p>
          <div className="mt-2">
            {!generatorId || !count || count <= 0 ? (
              <p className="text-xs text-gray-500">{t("quizEditorGenerated.seleccionaUnGeneradorYLa")}</p>
            ) : (
              <QuizGeneratedPreview generatorId={generatorId} count={count} />
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
