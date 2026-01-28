import { useEffect, useMemo, useState } from "react";

type DiccionariosResponse = {
  langs: string[];
};

type DiccionarioEntry = {
  w?: string;
  d?: string;
  t?: string;
  r?: string;
};

type FetchResult = {
  status: number;
  contentType: string | null;
  contentLength: number | null;
  entry: DiccionarioEntry | null;
  data: unknown | null;
  error: string | null;
};

const buildUrl = (baseUrl: string, path: string) =>
  `${baseUrl.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;

const DEFAULT_LANGUAGE = "es";
const DEFAULT_WORD = "";

const formatBytes = (bytes: number | null) => {
  if (bytes === null) return "—";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

export default function DiccionarioTest() {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:5050";
  const [langs, setLangs] = useState<string[]>([]);
  const [selectedLang, setSelectedLang] = useState(DEFAULT_LANGUAGE);
  const [wordValue, setWordValue] = useState(DEFAULT_WORD);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [result, setResult] = useState<FetchResult>({
    status: 0,
    contentType: null,
    contentLength: null,
    entry: null,
    data: null,
    error: null,
  });

  const apiUrl = useMemo(() => buildUrl(apiBaseUrl, "/api/diccionarios"), [apiBaseUrl]);

  useEffect(() => {
    let cancelled = false;

    const loadLanguages = async () => {
      setStatus("loading");
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`No se pudo cargar idiomas (${response.status})`);
        }
        const data = (await response.json()) as DiccionariosResponse;
        if (cancelled) return;
        setLangs(data.langs);
        if (data.langs.length > 0 && !data.langs.includes(selectedLang)) {
          setSelectedLang(data.langs[0]);
        }
        setStatus("idle");
      } catch (error) {
        if (cancelled) return;
        setResult((prev) => ({
          ...prev,
          error: error instanceof Error ? error.message : "Error desconocido",
        }));
        setStatus("error");
      }
    };

    loadLanguages();
    return () => {
      cancelled = true;
    };
  }, [apiUrl, selectedLang]);

  const handleFetch = async () => {
    const trimmedWord = wordValue.trim();
    if (!selectedLang || !trimmedWord) {
      setResult((prev) => ({
        ...prev,
        error: "Ingresa una palabra para consultar en el diccionario.",
      }));
      setStatus("error");
      return;
    }
    setStatus("loading");
    setResult({
      status: 0,
      contentType: null,
      contentLength: null,
      entry: null,
      data: null,
      error: null,
    });

    try {
      const lookupUrl = new URL(
        buildUrl(apiBaseUrl, `/api/diccionarios/${selectedLang}/lookup`),
      );
      lookupUrl.searchParams.set("w", trimmedWord);
      const response = await fetch(lookupUrl.toString());
      const contentType = response.headers.get("content-type");
      const contentLengthHeader = response.headers.get("content-length");
      const contentLength = contentLengthHeader ? Number(contentLengthHeader) : null;

      if (!response.ok) {
        const text = await response.text();
        setResult({
          status: response.status,
          contentType,
          contentLength,
          entry: null,
          data: null,
          error: text || "Error al consultar la palabra",
        });
        setStatus("error");
        return;
      }

      const data = (await response.json()) as Record<string, unknown> | DiccionarioEntry;
      const entryCandidate =
        data && typeof data === "object" && "entry" in data ? data.entry : data;
      const entry =
        entryCandidate && typeof entryCandidate === "object"
          ? (entryCandidate as DiccionarioEntry)
          : null;
      setResult({
        status: response.status,
        contentType,
        contentLength,
        entry,
        data,
        error: null,
      });
      setStatus("success");
    } catch (error) {
      setResult({
        status: 0,
        contentType: null,
        contentLength: null,
        entry: null,
        data: null,
        error: error instanceof Error ? error.message : "Error desconocido",
      });
      setStatus("error");
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10 text-left">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">Test del diccionario</h1>
        <p className="text-sm text-slate-600">
          Esta página permite validar que el API de diccionarios responda para los 4 idiomas
          principales y su consulta de palabras.
        </p>
      </header>

      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-base font-semibold text-slate-800">Selecciona idioma y palabra</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700" htmlFor="lang-select">
              Idioma disponible
            </label>
            <select
              id="lang-select"
              className="rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-slate-500 focus:outline-none"
              value={selectedLang}
              onChange={(event) => setSelectedLang(event.target.value)}
            >
              {langs.length === 0 && <option value="">Sin idiomas</option>}
              {langs.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
            <p className="text-xs text-slate-500">
              Idiomas detectados: {langs.length > 0 ? langs.join(", ") : "ninguno"}
            </p>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-medium text-slate-700" htmlFor="word-input">
              Palabra a buscar
            </label>
            <input
              id="word-input"
              type="text"
              className="rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-slate-500 focus:outline-none"
              value={wordValue}
              onChange={(event) => setWordValue(event.target.value)}
              placeholder="Ej: diccionario"
            />
            <p className="text-xs text-slate-500">
              La consulta se realiza con el endpoint <span className="font-medium">/lookup</span>.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
            onClick={handleFetch}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Consultando..." : "Probar diccionario"}
          </button>
          <span className="text-xs text-slate-500">
            API usada: <span className="font-medium">{apiBaseUrl}</span>
          </span>
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-base font-semibold text-slate-800">Resultado</h2>
        <div className="mt-4 grid gap-3 text-sm text-slate-700">
          <div className="flex flex-wrap gap-2">
            <span className="font-medium">Estado:</span>
            <span>
              {status === "idle" && "Sin consulta"}
              {status === "loading" && "Consultando..."}
              {status === "success" && "OK"}
              {status === "error" && "Error"}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="font-medium">HTTP status:</span>
            <span>{result.status || "—"}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="font-medium">Content-Type:</span>
            <span>{result.contentType ?? "—"}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="font-medium">Content-Length:</span>
            <span>{formatBytes(result.contentLength)}</span>
          </div>
          {result.error && (
            <div className="rounded-md border border-red-200 bg-red-50 p-3 text-xs text-red-700">
              {result.error}
            </div>
          )}
          <div className="rounded-md border border-slate-200 bg-white p-3 text-xs text-slate-700">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Resultado JSON
            </p>
            <pre className="max-h-72 overflow-auto whitespace-pre-wrap">
              {result.entry || result.data
                ? JSON.stringify(result.entry ?? result.data, null, 2)
                : "Sin datos aún."}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}
