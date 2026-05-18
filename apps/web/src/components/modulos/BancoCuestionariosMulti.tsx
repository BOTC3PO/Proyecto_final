import { useEffect, useRef, useState } from "react";
import { apiGet } from "../../lib/api";
import type { ModuleQuizQuestion } from "../../domain/module/module.types";

type BancoItem = {
  quizId: string;
  title: string;
  materia?: string;
  tipo: string;
  origen: "admin" | "escuela";
  questionCount: number;
  generatorId?: string;
  previewQuestions: { prompt: string; questionType: string }[];
};

type SelectionMode = "todas" | "primeras" | "azar";

type ConfirmPayload = {
  quizId: string;
  quizTitle: string;
  modo: "todas" | "azar";
  cantidad: number;
};

type BancoCuestionariosMultiProps = {
  origen: "todos" | "admin" | "escuela";
  onConfirm: (selections: ConfirmPayload[]) => void;
};

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export async function fetchBancoQuestions(quizId: string): Promise<ModuleQuizQuestion[]> {
  const data = await apiGet<{ questions?: ModuleQuizQuestion[] }>(
    `/api/quizzes/banco/${quizId}/questions`
  );
  return data.questions ?? [];
}

export default function BancoCuestionariosMulti({
  origen,
  onConfirm,
}: BancoCuestionariosMultiProps) {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [materiaFilter, setMateriaFilter] = useState("");
  const [tipoFilter, setTipoFilter] = useState("");
  const [items, setItems] = useState<BancoItem[]>([]);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [nPerQuiz, setNPerQuiz] = useState(5);
  const [selMode, setSelMode] = useState<SelectionMode>("azar");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setSearch(searchInput), 400);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [searchInput]);

  useEffect(() => {
    setStatus("loading");
    const params = new URLSearchParams({
      origen,
      ...(search ? { q: search } : {}),
      limit: "50",
      offset: "0",
    });
    apiGet<{ items: BancoItem[]; total: number }>(`/api/quizzes/banco?${params.toString()}`)
      .then((data) => {
        setItems(data.items ?? []);
        setTotal(data.total ?? 0);
        setStatus("idle");
      })
      .catch(() => setStatus("error"));
  }, [origen, search]);

  const allMaterias = Array.from(new Set(items.map((i) => i.materia).filter(Boolean))) as string[];
  const allTipos = Array.from(new Set(items.map((i) => i.tipo)));

  const filtered = items.filter((item) => {
    if (materiaFilter && item.materia !== materiaFilter) return false;
    if (tipoFilter && item.tipo !== tipoFilter) return false;
    return true;
  });

  const toggleSelect = (quizId: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(quizId)) next.delete(quizId);
      else next.add(quizId);
      return next;
    });
  };

  const handleConfirm = () => {
    const payload: ConfirmPayload[] = [...selected].map((quizId) => {
      const item = items.find((i) => i.quizId === quizId)!;
      const modoFinal: "todas" | "azar" = selMode === "todas" ? "todas" : "azar";
      const cantidadFinal = selMode === "todas" ? item.questionCount : Math.min(nPerQuiz, item.questionCount);
      return { quizId, quizTitle: item.title, modo: modoFinal, cantidad: cantidadFinal };
    });
    onConfirm(payload);
    setSelected(new Set());
  };

  const ORIGEN_BADGE: Record<string, string> = {
    admin: "bg-purple-100 text-purple-700",
    escuela: "bg-teal-100 text-teal-700",
  };

  return (
    <div className="space-y-3">
      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <input
          className="flex-1 min-w-0 rounded-md border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1.5 text-xs focus:outline-none focus:border-[var(--c-primary)]"
          placeholder="Buscar..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {allMaterias.length > 0 && (
          <select
            value={materiaFilter}
            onChange={(e) => setMateriaFilter(e.target.value)}
            className="rounded-md border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1.5 text-xs"
          >
            <option value="">Materia</option>
            {allMaterias.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        )}
        {allTipos.length > 1 && (
          <select
            value={tipoFilter}
            onChange={(e) => setTipoFilter(e.target.value)}
            className="rounded-md border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1.5 text-xs"
          >
            <option value="">Tipo</option>
            {allTipos.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        )}
      </div>

      {status === "loading" && <p className="text-xs text-[var(--c-muted)]">Cargando...</p>}
      {status === "error" && <p className="text-xs text-red-500">Error al cargar el banco.</p>}
      {status === "idle" && total > 0 && (
        <p className="text-xs text-[var(--c-muted)]">{total} disponible{total !== 1 ? "s" : ""}</p>
      )}
      {status === "idle" && filtered.length === 0 && total === 0 && (
        <p className="text-xs text-[var(--c-muted)]">No hay cuestionarios aquí.</p>
      )}

      {/* Cards */}
      <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
        {filtered.map((item) => {
          const isSelected = selected.has(item.quizId);
          return (
            <label
              key={item.quizId}
              className={`flex items-start gap-2 rounded-lg border p-2.5 cursor-pointer transition-colors ${
                isSelected
                  ? "border-[var(--c-primary)] bg-[color-mix(in_srgb,var(--c-primary)_6%,transparent)]"
                  : "border-[var(--c-border)] bg-[var(--c-surface)] hover:bg-[var(--c-bg)]"
              }`}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => toggleSelect(item.quizId)}
                className="mt-0.5 accent-[var(--c-primary)]"
              />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-[var(--c-text)] truncate">{item.title}</p>
                <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                  {item.materia && (
                    <span className="text-[9px] bg-gray-100 text-gray-600 rounded px-1.5 py-0.5">{item.materia}</span>
                  )}
                  <span className={`text-[9px] rounded px-1.5 py-0.5 ${ORIGEN_BADGE[item.origen] ?? "bg-gray-100 text-gray-600"}`}>
                    {item.origen === "admin" ? "Global" : "Escuela"}
                  </span>
                  <span className="text-[9px] text-[var(--c-muted)]">{item.questionCount} preg.</span>
                  {item.generatorId && (
                    <span className="text-[9px] bg-blue-100 text-blue-700 rounded px-1.5 py-0.5">Auto</span>
                  )}
                </div>
                {item.previewQuestions.slice(0, 2).map((pq, pi) => (
                  <p key={pi} className="text-[9px] text-[var(--c-muted)] truncate mt-0.5">· {pq.prompt || "(sin enunciado)"}</p>
                ))}
              </div>
            </label>
          );
        })}
      </div>

      {/* Fixed bottom bar when items selected */}
      {selected.size > 0 && (
        <div className="sticky bottom-0 rounded-lg border border-[var(--c-primary)] bg-[var(--c-surface)] p-3 space-y-2 shadow-lg">
          <p className="text-xs font-semibold text-[var(--c-text)]">
            {selected.size} cuestionario{selected.size !== 1 ? "s" : ""} seleccionado{selected.size !== 1 ? "s" : ""}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex gap-1">
              {(["azar", "primeras", "todas"] as SelectionMode[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setSelMode(m)}
                  className={`rounded px-2 py-1 text-[10px] border transition-colors ${
                    selMode === m
                      ? "bg-[var(--c-primary)] text-white border-[var(--c-primary)]"
                      : "border-[var(--c-border)] text-[var(--c-muted)] hover:bg-[var(--c-bg)]"
                  }`}
                >
                  {m === "azar" ? "Al azar" : m === "primeras" ? "Primeras N" : "Todas"}
                </button>
              ))}
            </div>
            {selMode !== "todas" && (
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-[var(--c-muted)]">N =</span>
                <input
                  type="number"
                  min={1}
                  max={50}
                  value={nPerQuiz}
                  onChange={(e) => setNPerQuiz(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-12 rounded border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-1.5 py-0.5 text-xs text-center"
                />
                <span className="text-[10px] text-[var(--c-muted)]">por cuestionario</span>
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={handleConfirm}
            className="w-full rounded-lg bg-[var(--c-primary)] py-1.5 text-xs font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Importar al cuestionario
          </button>
        </div>
      )}
    </div>
  );
}

export { mulberry32 };
