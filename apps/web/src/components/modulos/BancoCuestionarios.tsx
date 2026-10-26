import { useEffect, useState, useRef } from "react";
import { apiGet } from "../../lib/api";
import type { ModuleQuizQuestion } from "../../domain/module/module.types";

import { useI18n } from "../../i18n/I18nContext";
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

type BancoCuestionariosProps = {
  onImport: (questions: ModuleQuizQuestion[], source: string) => void;
};

type TabOrigen = "todos" | "admin" | "escuela";

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function BancoCuestionarios({ onImport }: BancoCuestionariosProps) {
  const { t } = useI18n();
  const [tab, setTab] = useState<TabOrigen>("todos");
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [items, setItems] = useState<BancoItem[]>([]);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [randomAmounts, setRandomAmounts] = useState<Record<string, string>>({});
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Debounce search
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setSearch(searchInput), 400);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [searchInput]);

  useEffect(() => {
    setStatus("loading");
    const params = new URLSearchParams({
      origen: tab,
      ...(search ? { q: search } : {}),
      limit: "30",
      offset: "0",
    });

    apiGet<{ items: BancoItem[]; total: number }>(`/api/quizzes/banco?${params.toString()}`)
      .then((data) => {
        setItems(data.items ?? []);
        setTotal(data.total ?? 0);
        setStatus("idle");
      })
      .catch(() => setStatus("error"));
  }, [tab, search]);

  const handleImportAll = async (item: BancoItem) => {
    // Fetch full quiz data
    try {
      const data = await apiGet<{ questions?: ModuleQuizQuestion[] }>(
        `/api/quizzes/banco/${item.quizId}/questions`
      );
      const questions: ModuleQuizQuestion[] = (data.questions ?? []).map((q) => ({
        ...q,
        id: `q-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        focus: `banco:${item.quizId}`,
      }));
      onImport(questions, item.quizId);
    } catch {
      // Fallback: build from preview
      const questions: ModuleQuizQuestion[] = item.previewQuestions.map((pq) => ({
        id: `q-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        prompt: pq.prompt,
        questionType: pq.questionType as ModuleQuizQuestion["questionType"],
        focus: `banco:${item.quizId}`,
      }));
      onImport(questions, item.quizId);
    }
  };

  const handleImportRandom = async (item: BancoItem) => {
    const amountStr = randomAmounts[item.quizId] ?? "5";
    const amount = Math.max(1, parseInt(amountStr, 10) || 5);

    try {
      const data = await apiGet<{ questions?: ModuleQuizQuestion[] }>(
        `/api/quizzes/banco/${item.quizId}/questions`
      );
      const allQuestions = data.questions ?? [];
      const rand = mulberry32(Date.now());
      const shuffled = [...allQuestions].sort(() => rand() - 0.5);
      const selected = shuffled.slice(0, amount).map((q) => ({
        ...q,
        id: `q-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        focus: `banco:${item.quizId}`,
      }));
      onImport(selected, item.quizId);
    } catch {
      // Fallback: use preview items
      const rand = mulberry32(Date.now());
      const shuffled = [...item.previewQuestions].sort(() => rand() - 0.5);
      const selected = shuffled.slice(0, amount).map((pq) => ({
        id: `q-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        prompt: pq.prompt,
        questionType: pq.questionType as ModuleQuizQuestion["questionType"],
        focus: `banco:${item.quizId}`,
      }));
      onImport(selected, item.quizId);
    }
  };

  const TABS: Array<{ value: TabOrigen; label: string }> = [
    { value: "todos", label: t("profesorEvaluaciones.todos") },
    { value: "admin", label: t("bancoCuestionarios.globalAdmin") },
    { value: "escuela", label: t("bancoCuestionarios.miEscuela") },
  ];

  const ORIGEN_BADGE: Record<string, string> = {
    admin:  "bg-purple-100 text-purple-800",
    escuela: "bg-teal-100 text-teal-800",
  };

  return (
    <div className="space-y-4">
      {/* Tab bar */}
      <div className="flex gap-1 border-b border-gray-200 pb-2">
        {TABS.map((t) => (
          <button
            key={t.value}
            type="button"
            onClick={() => setTab(t.value)}
            className={`px-3 py-1.5 text-xs rounded-md font-medium transition-colors ${
              tab === t.value
                ? "bg-[var(--c-primary)] text-white"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Search */}
      <input
        className="w-full rounded-md border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
        placeholder={t("bancoCuestionarios.buscarCuestionarios")}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      {/* Status */}
      {status === "loading" && (
        <p className="text-sm text-[var(--c-muted)]">{t("comun.cargando2")}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-500">{t("bancoCuestionarios.noSePudoCargarEl")}</p>
      )}
      {status === "idle" && items.length === 0 && (
        <p className="text-sm text-[var(--c-muted)]">{t("bancoCuestionarios.noHayCuestionariosDisponiblesPara")}</p>
      )}

      {status === "idle" && total > 0 && (
        <p className="text-xs text-[var(--c-muted)]">
          {total} cuestionario{total !== 1 ? "s" : ""} disponible{total !== 1 ? "s" : ""}
        </p>
      )}

      {/* Cards */}
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.quizId}
            className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] p-3 space-y-2"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[var(--c-text)] truncate">{item.title}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  {item.materia && (
                    <span className="text-[10px] bg-gray-100 text-gray-600 rounded px-1.5 py-0.5">
                      {item.materia}
                    </span>
                  )}
                  <span
                    className={`text-[10px] rounded px-1.5 py-0.5 ${ORIGEN_BADGE[item.origen] ?? "bg-gray-100 text-gray-600"}`}
                  >
                    {item.origen === "admin" ? "Global" : "Escuela"}
                  </span>
                  <span className="text-[10px] text-[var(--c-muted)]">
                    {item.questionCount} pregunta{item.questionCount !== 1 ? "s" : ""}
                  </span>
                </div>
              </div>
            </div>

            {/* Preview questions */}
            {item.previewQuestions.length > 0 && (
              <ul className="space-y-1">
                {item.previewQuestions.map((pq, pi) => (
                  <li key={pi} className="text-xs text-[var(--c-muted)] truncate">
                    · {pq.prompt || "(sin enunciado)"}
                  </li>
                ))}
                {item.questionCount > item.previewQuestions.length && (
                  <li className="text-xs text-[var(--c-muted)] italic">
                    +{item.questionCount - item.previewQuestions.length} más...
                  </li>
                )}
              </ul>
            )}

            {/* Import buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => handleImportAll(item)}
                className="rounded-md bg-[var(--c-primary)] px-3 py-1 text-xs font-semibold text-white hover:opacity-90 transition-opacity"
              >
                + Importar todas ({item.questionCount})
              </button>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  min={1}
                  max={item.questionCount}
                  value={randomAmounts[item.quizId] ?? "5"}
                  onChange={(e) =>
                    setRandomAmounts((prev) => ({ ...prev, [item.quizId]: e.target.value }))
                  }
                  className="w-12 rounded-md border border-[var(--c-border)] bg-[var(--c-bg)] px-2 py-1 text-xs text-center"
                />
                <button
                  type="button"
                  onClick={() => handleImportRandom(item)}
                  className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-1 text-xs font-medium text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                >{t("bancoCuestionarios.importarAlAzar")}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
