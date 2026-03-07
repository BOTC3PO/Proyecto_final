import { useEffect, useMemo, useState } from "react";

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

type PredefinedConfig = {
  id: string;
  label: string;
  description: string;
  generatorId: string;
  generatorVersion: number;
  params: Record<string, unknown>;
  defaultCount: number;
};

// Predefined configurations for each subject/category, derived from existing generators.
// Teachers pick one of these to get started; the Advanced panel allows JSON customization.
const PREDEFINED_CONFIGS: PredefinedConfig[] = [
  // ─── Economía / Contabilidad ───
  {
    id: "economia/contabilidad/1",
    label: "Clasificación de cuentas",
    description: "Contabilidad · Clasifica cuentas del activo, pasivo y patrimonio.",
    generatorId: "economia:contabilidad/1",
    generatorVersion: 1,
    params: {},
    defaultCount: 10,
  },
  {
    id: "economia/contabilidad/2",
    label: "Naturaleza de cuentas",
    description: "Contabilidad · Identifica si una cuenta aumenta o disminuye con débito/crédito.",
    generatorId: "economia:contabilidad/2",
    generatorVersion: 1,
    params: {},
    defaultCount: 10,
  },
  {
    id: "economia/contabilidad/3",
    label: "Saldo normal",
    description: "Contabilidad · Determina el saldo normal de distintas cuentas.",
    generatorId: "economia:contabilidad/3",
    generatorVersion: 1,
    params: {},
    defaultCount: 10,
  },
  {
    id: "economia/contabilidad/5",
    label: "Hechos patrimoniales",
    description: "Contabilidad · Clasifica hechos como permutativos o modificativos.",
    generatorId: "economia:contabilidad/5",
    generatorVersion: 1,
    params: {},
    defaultCount: 10,
  },
  {
    id: "economia/contabilidad/7",
    label: "Aportes y contribuciones",
    description: "Contabilidad · Distingue aportes del trabajador y contribuciones del empleador.",
    generatorId: "economia:contabilidad/7",
    generatorVersion: 1,
    params: {},
    defaultCount: 10,
  },
  // ─── Economía / Finanzas ───
  {
    id: "economia/finanzas/9",
    label: "Presupuesto familiar",
    description: "Finanzas · Ejercicios de planificación del presupuesto del hogar.",
    generatorId: "economia:finanzas/9",
    generatorVersion: 1,
    params: {},
    defaultCount: 10,
  },
  {
    id: "economia/finanzas/15",
    label: "Interés simple",
    description: "Finanzas · Cálculo de interés simple con distintas tasas y plazos.",
    generatorId: "economia:finanzas/15",
    generatorVersion: 1,
    params: {},
    defaultCount: 10,
  },
  {
    id: "economia/finanzas/16",
    label: "Interés compuesto",
    description: "Finanzas · Cálculo de interés compuesto y capitalización.",
    generatorId: "economia:finanzas/16",
    generatorVersion: 1,
    params: {},
    defaultCount: 10,
  },
  {
    id: "economia/finanzas/13",
    label: "Deuda buena vs. mala",
    description: "Finanzas · Identificación de deudas que generan activos vs. las que generan pasivos.",
    generatorId: "economia:finanzas/13",
    generatorVersion: 1,
    params: {},
    defaultCount: 10,
  },
  {
    id: "economia/finanzas/20",
    label: "Comparación de inversiones",
    description: "Finanzas · Comparar rendimiento de distintas alternativas de inversión.",
    generatorId: "economia:finanzas/20",
    generatorVersion: 1,
    params: {},
    defaultCount: 10,
  },
  // ─── Economía / Economía Argentina ───
  {
    id: "economia/economia_ar/21",
    label: "Recibo de sueldo básico",
    description: "Economía AR · Lectura e interpretación de un recibo de haberes.",
    generatorId: "economia:economia_ar/21",
    generatorVersion: 1,
    params: {},
    defaultCount: 10,
  },
  {
    id: "economia/economia_ar/22",
    label: "Descuentos obligatorios",
    description: "Economía AR · Cálculo de descuentos de jubilación, obra social y más.",
    generatorId: "economia:economia_ar/22",
    generatorVersion: 1,
    params: {},
    defaultCount: 10,
  },
  {
    id: "economia/economia_ar/25",
    label: "IVA",
    description: "Economía AR · Conceptos y aplicación del Impuesto al Valor Agregado.",
    generatorId: "economia:economia_ar/25",
    generatorVersion: 1,
    params: {},
    defaultCount: 10,
  },
  {
    id: "economia/economia_ar/26",
    label: "Cálculo de IVA",
    description: "Economía AR · Ejercicios numéricos de cálculo del IVA en facturas.",
    generatorId: "economia:economia_ar/26",
    generatorVersion: 1,
    params: {},
    defaultCount: 10,
  },
  {
    id: "economia/economia_ar/29",
    label: "Monotributo",
    description: "Economía AR · Categorías, obligaciones y ventajas del monotributo.",
    generatorId: "economia:economia_ar/29",
    generatorVersion: 1,
    params: {},
    defaultCount: 10,
  },
  // ─── Economía / General ───
  {
    id: "economia/economia/32",
    label: "Ganancia y pérdida",
    description: "Economía · Determinación del resultado económico de una operación.",
    generatorId: "economia:economia/32",
    generatorVersion: 1,
    params: {},
    defaultCount: 10,
  },
  {
    id: "economia/economia/38",
    label: "Punto de equilibrio",
    description: "Economía · Cálculo del punto en que ingresos igualan costos totales.",
    generatorId: "economia:economia/38",
    generatorVersion: 1,
    params: {},
    defaultCount: 10,
  },
  {
    id: "economia/economia/40",
    label: "Porcentajes simples",
    description: "Economía · Ejercicios de cálculo porcentual aplicado a situaciones económicas.",
    generatorId: "economia:economia/40",
    generatorVersion: 1,
    params: {},
    defaultCount: 10,
  },
  {
    id: "economia/economia/43",
    label: "Estructuras de mercado",
    description: "Economía · Distinción entre monopolio, oligopolio y competencia perfecta.",
    generatorId: "economia:economia/43",
    generatorVersion: 1,
    params: {},
    defaultCount: 10,
  },
  // ─── Quiz específicos ───
  {
    id: "economia/economia/48",
    label: "Quiz: Aportes vs. contribuciones",
    description: "Quiz temático · Diferencias entre aportes del empleado y contribuciones del empleador.",
    generatorId: "economia:economia/48",
    generatorVersion: 1,
    params: {},
    defaultCount: 10,
  },
  {
    id: "economia/economia/49",
    label: "Quiz: Deuda buena vs. mala",
    description: "Quiz temático · Conceptos de deuda productiva e improductiva.",
    generatorId: "economia:economia/49",
    generatorVersion: 1,
    params: {},
    defaultCount: 10,
  },
  {
    id: "economia/economia/53",
    label: "Quiz: Interés simple vs. compuesto",
    description: "Quiz temático · Diferencias conceptuales entre interés simple y compuesto.",
    generatorId: "economia:economia/53",
    generatorVersion: 1,
    params: {},
    defaultCount: 10,
  },
  {
    id: "economia/economia/55",
    label: "Quiz: Ganancia vs. equilibrio",
    description: "Quiz temático · Análisis del resultado económico frente al punto de equilibrio.",
    generatorId: "economia:economia/55",
    generatorVersion: 1,
    params: {},
    defaultCount: 10,
  },
];

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
  const [paramsText, setParamsText] = useState(() => JSON.stringify(params ?? {}, null, 2));
  const [paramsError, setParamsError] = useState<string | null>(null);
  const [advancedOpen, setAdvancedOpen] = useState(false);

  useEffect(() => {
    setParamsText(JSON.stringify(params ?? {}, null, 2));
  }, [params]);

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

  const handleParamsChange = (value: string) => {
    setParamsText(value);
    try {
      const parsed = value.trim() ? (JSON.parse(value) as Record<string, unknown>) : {};
      setParamsError(null);
      onChange({ params: parsed });
    } catch {
      setParamsError("El JSON de parámetros no es válido.");
    }
  };

  const selectedPreset = PREDEFINED_CONFIGS.find((c) => c.generatorId === generatorId);

  const handleSelectPreset = (preset: PredefinedConfig) => {
    onChange({
      generatorId: preset.generatorId,
      generatorVersion: preset.generatorVersion,
      params: preset.params,
      count: count > 0 ? count : preset.defaultCount,
    });
    setAdvancedOpen(false);
  };

  return (
    <div className="space-y-4">
      {/* Predefined configurations */}
      <div>
        <p className="mb-2 text-xs font-semibold text-gray-700">Configuración del generador</p>
        {selectedPreset ? (
          <div className="flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-blue-900">{selectedPreset.label}</p>
              <p className="mt-0.5 text-xs text-blue-700">{selectedPreset.description}</p>
            </div>
            <button
              type="button"
              className="shrink-0 text-xs text-blue-600 hover:underline"
              onClick={() => {
                onChange({ generatorId: "", generatorVersion: 1, params: {} });
                setAdvancedOpen(true);
              }}
            >
              Cambiar
            </button>
          </div>
        ) : (
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 max-h-64 overflow-y-auto rounded-lg border border-gray-200 p-2">
            {PREDEFINED_CONFIGS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                className="rounded-md border border-gray-200 bg-white px-3 py-2 text-left hover:border-blue-400 hover:bg-blue-50 transition-colors"
                onClick={() => handleSelectPreset(preset)}
              >
                <p className="text-xs font-semibold text-gray-800 leading-snug">{preset.label}</p>
                <p className="mt-0.5 text-[11px] text-gray-500 leading-snug line-clamp-2">
                  {preset.description}
                </p>
              </button>
            ))}
          </div>
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

      {/* Advanced panel (collapsible) */}
      <div className="rounded-lg border border-gray-200">
        <button
          type="button"
          className="flex w-full items-center justify-between px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
          onClick={() => setAdvancedOpen((prev) => !prev)}
        >
          <span>Avanzado — editar parámetros JSON</span>
          <span className="text-gray-400">{advancedOpen ? "▲" : "▼"}</span>
        </button>

        {advancedOpen ? (
          <div className="border-t border-gray-200 p-3 space-y-3">
            <div className="grid gap-3 md:grid-cols-2">
              <label className="text-xs font-medium text-gray-600">
                ID del generador
                <input
                  className="mt-1 w-full rounded-md border border-gray-300 px-2 py-2 text-sm font-mono"
                  value={generatorId}
                  onChange={(event) => onChange({ generatorId: event.target.value })}
                  placeholder="economia:contabilidad/1"
                />
              </label>
              <label className="text-xs font-medium text-gray-600">
                Versión del generador
                <input
                  className="mt-1 w-full rounded-md border border-gray-300 px-2 py-2 text-sm"
                  type="number"
                  min={1}
                  value={Number.isNaN(generatorVersion) ? "" : generatorVersion}
                  onChange={(event) => onChange({ generatorVersion: Number(event.target.value) || 1 })}
                />
              </label>
            </div>

            <label className="text-xs font-medium text-gray-600">
              Parámetros (JSON)
              <textarea
                className="mt-1 w-full rounded-md border border-gray-300 px-2 py-2 text-sm font-mono"
                rows={4}
                value={paramsText}
                onChange={(event) => handleParamsChange(event.target.value)}
              />
              {paramsError ? <p className="mt-1 text-xs text-red-500">{paramsError}</p> : null}
            </label>
          </div>
        ) : null}
      </div>

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
