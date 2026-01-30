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

type QuizEditorGeneratedProps = {
  generatorId: string;
  params: Record<string, unknown>;
  count: number;
  onChange: (next: { generatorId?: string; params?: Record<string, unknown>; count?: number }) => void;
  showPreview?: boolean;
};

export default function QuizEditorGenerated({
  generatorId,
  params,
  count,
  onChange,
  showPreview = false,
}: QuizEditorGeneratedProps) {
  const [paramsText, setParamsText] = useState(() => JSON.stringify(params ?? {}, null, 2));
  const [paramsError, setParamsError] = useState<string | null>(null);

  useEffect(() => {
    setParamsText(JSON.stringify(params ?? {}, null, 2));
  }, [params]);

  const previewItems = useMemo(() => {
    if (!showPreview || !generatorId || !count || count <= 0) return [];
    const seed = hashString(`preview:${generatorId}:${JSON.stringify(params ?? {})}`);
    const random = mulberry32(seed);
    return Array.from({ length: count }, (_, index) => {
      const token = Math.floor(random() * 900 + 100);
      return `Pregunta ${index + 1} · semilla ${token}`;
    });
  }, [count, generatorId, params, showPreview]);

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

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-xs font-medium text-gray-600">
          ID del generador
          <input
            className="mt-1 w-full rounded-md border border-gray-300 px-2 py-2 text-sm"
            value={generatorId}
            onChange={(event) => onChange({ generatorId: event.target.value })}
            placeholder="generador-matematica-basico"
          />
        </label>

        <label className="text-xs font-medium text-gray-600">
          Cantidad de preguntas
          <input
            className="mt-1 w-full rounded-md border border-gray-300 px-2 py-2 text-sm"
            type="number"
            min={1}
            value={Number.isNaN(count) ? "" : count}
            onChange={(event) => onChange({ count: Number(event.target.value) || 0 })}
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

      {showPreview ? (
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-xs font-semibold text-gray-700">Vista previa determinística (semilla fija)</p>
          {previewItems.length === 0 ? (
            <p className="mt-2 text-xs text-gray-500">Completa el generador y la cantidad para ver ejemplos.</p>
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
