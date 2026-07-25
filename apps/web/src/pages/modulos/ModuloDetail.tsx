import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useAuth } from "../../auth/use-auth";
import { isPureParent } from "../../auth/roleHelpers";
import { apiGet, apiPost } from "../../lib/api";
import type {
  Module,
  ModuleQuiz,
  ModuleTheoryBlock,
  ModuleVisibility,
} from "../../domain/module/module.types";
import { resolveMateria, MATERIA_FALLBACK } from "../../domain/module/materia";
import TheoryItemCard from "../../components/modulos/TheoryItemCard";
import { lookupPalabra, prefixPalabra, type EntradaDiccionario } from "../../services/diccionario";
import LangSelector from "../../components/vblang/LangSelector";
import { DeterministicPrng } from "../../generadoresV2/core/prng";
import type { Ejercicio, GeneratorDescriptor, Dificultad } from "../../generadoresV2/core/types";
import { getDescriptoresBasic } from "../../generadoresV2/basic/banco";
import { useI18n } from "../../i18n/I18nContext";

// F6-07: synthetic module para resolver `basic/<bank_id>` en runtime.
// Ver `archive/web/pages/EditorCuestionarios.tsx` para el rationale.
async function loadBasicGeneratorModule(): Promise<unknown> {
  await import("../../generadoresV2/bancos-init");
  return {
    getDescriptores: (
      prng: Parameters<typeof getDescriptoresBasic>[0],
    ) => getDescriptoresBasic(prng),
  };
}

const loadGeneratorModule = (materia: string) => {
  switch (materia) {
    case "biologia":
      return import("../../generadoresV2/biologia/index");
    case "informatica":
      return import("../../generadoresV2/informatica/index");
    case "fisica":
      return import("../../generadoresV2/fisica/index");
    case "matematicas":
      return import("../../generadoresV2/matematicas/index");
    case "quimica":
      return import("../../generadoresV2/quimica/index");
    case "economia":
      return import("../../generadoresV2/economia/index");
    case "basic":
      return loadBasicGeneratorModule();
    default:
      return Promise.reject(new Error(`Generador no encontrado: ${materia}`));
  }
};


// FIX-MODULO-TEMA — antes esto era una paleta de colores Tailwind fija
// (amber-500, indigo-600, bg-slate-50, etc): no cambiaba con el tema
// (oscuro/claro/Tiza) ni con los "acentos" del usuario.
// Ahora usa --c-tipo-evaluacion/competencia/aprendizaje (index.css): esos
// tokens mezclan warning/success/primary hacia --c-text en vez de usarlos
// crudos, así el tono se corre siempre en la dirección de luminosidad
// correcta según el tema sea claro u oscuro — sin tener que retocar a
// mano cada uno de los ~39 temas del archivo.
// REDISEÑO (Diseño, 2026-07-25): se saca el banner degradado — el fondo
// de la página pasa a ser siempre --c-bg (plano, del tema, no por
// categoría) y el tipo de módulo se marca con una franja fina arriba
// (`stripe`) + un badge con punto sobre el título (`badge`); esto de
// paso elimina el problema de títulos ilegibles sobre banners de color
// (ver FIX-TITULO-TEMA, ya no aplica: el título vive sobre --c-bg).
function getModulePalette(category: string) {
  const cat = (category ?? "").toLowerCase();
  if (cat === "evaluacion") return {
    stripe: "bg-[var(--c-tipo-evaluacion,#b45309)]",
    badge: "bg-[var(--c-tipo-evaluacion-soft,#fef3c7)] text-[var(--c-tipo-evaluacion,#b45309)]",
    icon: "bg-[var(--c-tipo-evaluacion-soft,#fef3c7)] text-[var(--c-tipo-evaluacion,#b45309)]",
  };
  if (cat === "competencia") return {
    stripe: "bg-[var(--c-tipo-competencia,#15803d)]",
    badge: "bg-[var(--c-tipo-competencia-soft,#dcfce7)] text-[var(--c-tipo-competencia,#15803d)]",
    icon: "bg-[var(--c-tipo-competencia-soft,#dcfce7)] text-[var(--c-tipo-competencia,#15803d)]",
  };
  // default: aprendizaje
  return {
    stripe: "bg-[var(--c-tipo-aprendizaje,#4f46e5)]",
    badge: "bg-[var(--c-tipo-aprendizaje-soft,#ede9fe)] text-[var(--c-tipo-aprendizaje,#4f46e5)]",
    icon: "bg-[var(--c-tipo-aprendizaje-soft,#ede9fe)] text-[var(--c-tipo-aprendizaje,#4f46e5)]",
  };
}

// FIX-BADGE-EMOJI — moduloEditor.evaluacion/competencia traen un emoji
// (📝/🏆) pensado para un <option> de <select> plano; acá el badge ya
// tiene su propio punto de color, así que usamos las versiones sin
// emoji (mismas 12 locales, ya con paridad, sólo usadas en otra parte
// de la app hoy).
const CATEGORY_LABEL_KEYS: Record<string, string> = {
  evaluacion: "profesorEvaluaciones.evaluacion",
  competencia: "quizConfigPanel.competencia",
};

// i18n — mismas claves que ModulosList.tsx (VISIBILITY_LABEL_KEYS) para el
// mismo concepto; antes estaban hardcodeadas en español acá.
const VISIBILITY_LABEL_KEYS: Record<ModuleVisibility, string> = {
  publico: "moduloEditor.publico",
  privado: "profesorEvaluaciones.privado",
  escuela: "sidebar.escuela",
};

const QUIZ_TYPE_LABEL_KEYS: Record<ModuleQuiz["type"], string> = {
  practica: "profesorEvaluaciones.practica",
  formal: "moduloDetail.evaluacionFormal",
  competencia: "profesorEvaluaciones.competencia",
};

// FIX-LEER-VOZ-ALTA — la lógica que junta los textos a leer en voz
// alta estaba inline dentro de `leerModulo`, con un check
// `bloque.type === "text"` que no matcheaba con el "Texto" canónico
// que emite el editor. La extraemos como helper puro para poder
// testearla sin levantar el componente ni tocar `window.speechSynthesis`.
// PLAN-G §2 — versión con segmentos: cada texto conserva el id del bloque
// de teoría de origen (si lo hay) para poder resaltar el párrafo que se
// está leyendo. `extractTextForTts` se mantiene como proyección para no
// romper a los consumidores/tests existentes.
export type TtsSegment = { text: string; blockId?: string };

export const extractTtsSegments = (
  module: Partial<Module> & {
    theoryBlocks?: ModuleTheoryBlock[];
    theoryItems?: ModuleTheoryBlock[];
  }
): TtsSegment[] => {
  const bloques = module.theoryBlocks ?? module.theoryItems ?? [];
  const segmentos: TtsSegment[] = [];
  if (module.title) segmentos.push({ text: module.title });
  if (module.description) segmentos.push({ text: module.description });

  const isTextType = (t: string) =>
    t === "Texto" || t.toLowerCase() === "text";

  for (const bloque of bloques) {
    if (isTextType(bloque.type) && bloque.detail) {
      if (bloque.title) segmentos.push({ text: bloque.title, blockId: bloque.id });
      segmentos.push({ text: bloque.detail, blockId: bloque.id });
    }
    if (bloque.type === "image") {
      const alt = (bloque as { alt?: string }).alt;
      if (alt) segmentos.push({ text: `Imagen: ${alt}`, blockId: bloque.id });
    }
  }
  return segmentos;
};

export const extractTextForTts = (
  module: Partial<Module> & {
    theoryBlocks?: ModuleTheoryBlock[];
    theoryItems?: ModuleTheoryBlock[];
  }
): string[] => extractTtsSegments(module).map((s) => s.text);

type ModuloDetailResponse = Module & {
  theoryItems?: ModuleTheoryBlock[];
  quizzes?: ModuleQuiz[];
  difficultyLevel?: string;
};

type QuizAttemptSummary = {
  id: string;
  quizId: string;
  status?: string;
  score?: number;
  maxScore?: number;
  completedAt?: string;
  createdAt?: string;
};

export default function ModuloDetail() {
  const { t, lang } = useI18n();
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user } = useAuth();
  // PLAN-X §3 — el server ya bloquea POST /api/quiz-attempts para un
  // PARENT puro (PLAN-J §3c #6); sin esto el botón lo dejaba clickear
  // y recién se enteraba con un 403.
  const pureParent = isPureParent(user);

  // UX-01: "Volver" contextual. Si el alumno llegó desde un aula u otra
  // pantalla, respetar `?returnTo=`; si no, retroceder en el historial.
  const returnTo = searchParams.get("returnTo");
  const handleBack = () => {
    if (returnTo) navigate(returnTo);
    else navigate(-1);
  };
  const [module, setModule] = useState<ModuloDetailResponse | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [startStatus, setStartStatus] = useState<
    Record<string, { status: "idle" | "loading" | "error"; message?: string }>
  >({});
  const [previewOpen, setPreviewOpen] = useState<Record<string, boolean>>({});
  const [previewQuestions, setPreviewQuestions] =
    useState<Record<string, Array<{ id: string; label: string }>>>({});
  const [attemptsByQuiz, setAttemptsByQuiz] = useState<Record<string, QuizAttemptSummary[]>>({});
  // PLAN-G §2 — TTS completo: play/pausa/velocidad + resaltado del bloque
  // leído. La velocidad vive también en un ref para que cada utterance
  // nueva la lea sin re-crear el closure de lectura.
  const [ttsEstado, setTtsEstado] = useState<"idle" | "leyendo" | "pausado">("idle");
  const [ttsRate, setTtsRate] = useState(0.9);
  const ttsRateRef = useRef(0.9);
  const [ttsBlockId, setTtsBlockId] = useState<string | null>(null);
  // PLAN-G §2 — modo foco: oculta todo menos la teoría, en tipografía de lectura.
  const [modoFoco, setModoFoco] = useState(false);
  const ttsActivo = ttsEstado !== "idle";
  const [dictOpen, setDictOpen] = useState(false);
  const [dictQuery, setDictQuery] = useState("");
  const [dictEntry, setDictEntry] = useState<EntradaDiccionario | null>(null);
  const [dictLoading, setDictLoading] = useState(false);
  const [dictNotFound, setDictNotFound] = useState(false);
  const [dictSuggestions, setDictSuggestions] = useState<string[]>([]);
  // FIX-DICT-SELECTOR: idioma del diccionario, alimentado por el
  // LangSelector dentro del panel. Default "es" (compatibilidad con
  // el comportamiento anterior). pickDefaultLang lo aplica el
  // selector al primer fetch.
  const [dictLang, setDictLang] = useState("es");

  const leerModulo = () => {
    if (!("speechSynthesis" in window)) {
      alert("Tu navegador no soporta lectura en voz alta.");
      return;
    }

    window.speechSynthesis.cancel();

    // FIX-LEER-VOZ-ALTA — la lógica de extracción vive en
    // `extractTtsSegments` (exportada para tests) y maneja el match
    // case-sensitive + tolerante a minúsculas para "Texto"/"text".
    const segmentos = extractTtsSegments(module ?? {});

    if (segmentos.length === 0) {
      alert(t("moduloDetail.noHayTextoParaLeer"));
      return;
    }

    setTtsEstado("leyendo");

    let i = 0;
    const leerSiguiente = () => {
      if (i >= segmentos.length) {
        setTtsEstado("idle");
        setTtsBlockId(null);
        return;
      }
      const seg = segmentos[i];
      setTtsBlockId(seg.blockId ?? null);
      const utterance = new SpeechSynthesisUtterance(seg.text);
      // PLAN-G §2 — voz según el idioma elegido en el diccionario (PLAN-H §2);
      // "es" mapea al acento local es-AR como hasta ahora.
      utterance.lang = dictLang === "es" ? "es-AR" : dictLang;
      utterance.rate = ttsRateRef.current;
      utterance.onend = () => {
        i++;
        leerSiguiente();
      };
      utterance.onerror = () => {
        setTtsEstado("idle");
        setTtsBlockId(null);
      };
      window.speechSynthesis.speak(utterance);
    };

    leerSiguiente();
  };

  const pausarReanudarTTS = () => {
    if (ttsEstado === "leyendo") {
      window.speechSynthesis.pause();
      setTtsEstado("pausado");
    } else if (ttsEstado === "pausado") {
      window.speechSynthesis.resume();
      setTtsEstado("leyendo");
    }
  };

  const detenerTTS = () => {
    window.speechSynthesis.cancel();
    setTtsEstado("idle");
    setTtsBlockId(null);
  };

  const cambiarVelocidadTTS = (rate: number) => {
    setTtsRate(rate);
    // ponytail: la Web Speech API no permite cambiar el rate de una
    // utterance en curso — aplica desde el próximo segmento leído.
    ttsRateRef.current = rate;
  };

  // Resaltado: llevar el bloque leído a la vista.
  useEffect(() => {
    if (!ttsBlockId) return;
    document
      .getElementById(`teoria-${ttsBlockId}`)
      ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [ttsBlockId]);

  // Modo foco: Esc para salir (accesibilidad por teclado).
  useEffect(() => {
    if (!modoFoco) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModoFoco(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modoFoco]);

  useEffect(() => {
    if (!dictOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDictOpen(false);
        setDictEntry(null);
        setDictNotFound(false);
        setDictSuggestions([]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [dictOpen]);

  const handleDictSearch = async (word: string) => {
    if (!word.trim()) return;
    setDictLoading(true);
    setDictEntry(null);
    setDictNotFound(false);
    setDictSuggestions([]);
    const result = await lookupPalabra(word.trim(), dictLang);
    if (result?.found) {
      setDictEntry(result.entry);
    } else {
      setDictNotFound(true);
    }
    setDictLoading(false);
  };

  const handleDictInput = async (value: string) => {
    setDictQuery(value);
    if (value.trim().length >= 3) {
      const suggestions = await prefixPalabra(value.trim(), dictLang);
      setDictSuggestions(suggestions);
    } else {
      setDictSuggestions([]);
    }
  };

  const formatDef = (d: unknown): string[] => {
    if (!d) return [];
    if (typeof d === "string") {
      try { d = JSON.parse(d); } catch { return [d as string]; }
    }
    if (Array.isArray(d)) return (d as unknown[]).map(String).filter(Boolean);
    return [String(d)];
  };

  useEffect(() => {
    return () => { window.speechSynthesis.cancel(); };
  }, []);

  const handleStartAttempt = async (quizId: string) => {
    if (!module?.id) return;
    if (!user?.id) {
      setStartStatus((prev) => ({
        ...prev,
        [quizId]: {
          status: "error",
          message: t("moduloDetail.necesitasIniciarSesionParaComenzar")
        }
      }));
      return;
    }
    setStartStatus((prev) => ({ ...prev, [quizId]: { status: "loading" } }));
    try {
      const response = await apiPost<{
        attemptId?: string;
        id?: string;
        attempt?: { id?: string };
      }>("/api/quiz-attempts", {
        moduleId: module.id,
        quizId
      });
      const attemptId = response.attemptId ?? response.id ?? response.attempt?.id;
      if (!attemptId) {
        throw new Error("No se recibió el ID del intento.");
      }
      navigate(`/quiz/attempt/${attemptId}`);
    } catch (error) {
      setStartStatus((prev) => ({
        ...prev,
        [quizId]: {
          status: "error",
          message: error instanceof Error ? error.message : t("moduloDetail.noSePudoIniciarEl")
        }
      }));
    }
  };

  const loadPreviewForQuiz = async (quiz: ModuleQuiz) => {
    if (quiz.questions && quiz.questions.length > 0) {
      setPreviewQuestions((prev) => ({
        ...prev,
        [quiz.id]: quiz.questions!.slice(0, 5).map((q, i) => ({
          id: q.id,
          label: `Pregunta ${i + 1}: ${q.prompt}`,
        })),
      }));
      return;
    }

    if (!quiz.generatorId || !quiz.count) {
      setPreviewQuestions((prev) => ({
        ...prev,
        [quiz.id]: [{ id: "empty", label: t("moduloDetail.sinPreguntasNiGeneradorConfigurado") }],
      }));
      return;
    }

    try {
      const segs = quiz.generatorId.split("/");
      const materia = segs[0];
      const subtipo = segs[2]; // 3er segmento (ej. "MRU"); puede ser undefined
      const difRaw = quiz.params?.dificultad;
      const dificultad: Dificultad | undefined =
        difRaw === "basico" || difRaw === "intermedio" || difRaw === "avanzado"
          ? difRaw
          : undefined;
      const mod = await loadGeneratorModule(materia);
      const prng = new DeterministicPrng(42);
      const descriptores: GeneratorDescriptor[] =
        typeof (mod as unknown as Record<string, unknown>).getDescriptores === "function"
          ? (mod as unknown as Record<string, (p: typeof prng) => GeneratorDescriptor[]>).getDescriptores(prng)
          : typeof (mod as unknown as Record<string, ((p: typeof prng) => GeneratorDescriptor[]) | undefined>)[
              `getDescriptores${materia.charAt(0).toUpperCase() + materia.slice(1)}`
            ] === "function"
          ? (mod as unknown as Record<string, (p: typeof prng) => GeneratorDescriptor[]>)[
              `getDescriptores${materia.charAt(0).toUpperCase() + materia.slice(1)}`
            ](prng)
          : [];

      const descriptor = descriptores.find((d: GeneratorDescriptor) => d.id === quiz.generatorId);
      if (!descriptor) {
        setPreviewQuestions((prev) => ({
          ...prev,
          [quiz.id]: [{ id: "no-desc", label: t("moduloDetail.generadorNoDisponibleEnEl") }],
        }));
        return;
      }

      const count = Math.min(quiz.count ?? 3, 5);
      const templatesRaw = (quiz.params as Record<string, unknown> | undefined)?.enunciadoTemplates;
      const templatesFiltrados = Array.isArray(templatesRaw)
        ? templatesRaw.filter((s): s is string => typeof s === "string" && s.trim().length > 0)
        : [];
      const enunciadoTemplates: string[] | undefined = templatesFiltrados.length > 0
        ? templatesFiltrados
        : undefined;
      const ejercicios: Ejercicio[] = Array.from({ length: count }, () =>
        descriptor.generate(dificultad, prng, subtipo, enunciadoTemplates)
      );

      setPreviewQuestions((prev) => ({
        ...prev,
        [quiz.id]: ejercicios.map((e, i) => ({
          id: `${quiz.id}-prev-${i}`,
          label: `Pregunta ${i + 1}: ${"enunciado" in e ? (e as { enunciado: string }).enunciado : ""}`,
        })),
      }));
    } catch {
      setPreviewQuestions((prev) => ({
        ...prev,
        [quiz.id]: [{ id: "err", label: t("moduloDetail.noSePudoGenerarLa") }],
      }));
    }
  };

  useEffect(() => {
    if (!id) return;
    let active = true;
    setStatus("loading");
    setErrorMessage(null);
    apiGet<ModuloDetailResponse>(`/api/modulos/${id}`)
      .then((data) => {
        if (!active) return;
        setModule(data);
        setStatus("ready");
      })
      .catch((error) => {
        if (!active) return;
        setModule(null);
        setStatus("error");
        setErrorMessage(
          error instanceof Error ? error.message : t("moduloDetail.noSePudoCargarEl")
        );
      });
    return () => {
      active = false;
    };
  }, [id]);

  // Fetch the current user's quiz attempts for this module
  useEffect(() => {
    if (!id || !user?.id) return;
    let active = true;
    apiGet<{ items?: QuizAttemptSummary[]; attempts?: QuizAttemptSummary[] } | QuizAttemptSummary[]>(
      `/api/quiz-attempts?moduleId=${encodeURIComponent(id)}&userId=${encodeURIComponent(user.id)}`,
    )
      .then((data) => {
        if (!active) return;
        const list: QuizAttemptSummary[] = Array.isArray(data)
          ? data
          : (data.items ?? data.attempts ?? []);
        const byQuiz: Record<string, QuizAttemptSummary[]> = {};
        list.forEach((attempt) => {
          if (!attempt.quizId) return;
          if (!byQuiz[attempt.quizId]) byQuiz[attempt.quizId] = [];
          byQuiz[attempt.quizId].push(attempt);
        });
        setAttemptsByQuiz(byQuiz);
      })
      .catch(() => {
        // Silently ignore — progress display is best-effort
      });
    return () => {
      active = false;
    };
  }, [id, user?.id]);

  const theoryItems = useMemo(
    () => module?.theoryBlocks ?? module?.theoryItems ?? [],
    [module]
  );

  const quizzes = useMemo(() => {
    if (!module) return [] as ModuleQuiz[];
    const raw = [
      ...(module.quizzes ?? []),
      ...(module.levels?.flatMap((level) => level.quizzes ?? []) ?? []),
    ];
    const unique = new Map<string, ModuleQuiz>();
    raw.forEach((quiz) => {
      if (!unique.has(quiz.id)) {
        unique.set(quiz.id, quiz);
      }
    });
    return Array.from(unique.values());
  }, [module]);

  if (status === "loading") {
    return (
      <main className="min-h-screen bg-[var(--c-bg)] p-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-8 shadow-sm">
            <svg className="h-5 w-5 animate-spin text-[var(--c-primary)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <span className="text-sm font-medium text-[var(--c-muted)]">{t("moduloDetail.cargandoModulo")}</span>
          </div>
        </div>
      </main>
    );
  }

  if (status === "error") {
    return (
      <main className="min-h-screen bg-[var(--c-bg)] p-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-start gap-3 rounded-xl border border-[var(--c-danger)]/30 bg-[var(--c-danger-soft)] p-6 shadow-sm">
            <svg className="mt-0.5 h-5 w-5 shrink-0 text-[var(--c-danger)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-[var(--c-danger)]">Error al cargar</p>
              <p className="mt-1 text-sm text-[var(--c-text)]">
                {errorMessage ?? "Ocurrió un error inesperado."}
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!module) {
    return (
      <main className="min-h-screen bg-[var(--c-bg)] p-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-8 shadow-sm">
            <svg className="h-5 w-5 text-[var(--c-muted)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12H9.75m3 0V18m-3-5.625h.008v.008H9.75v-.008ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
            </svg>
            <span className="text-sm text-[var(--c-muted)]">{t("moduloDetail.noSeEncontroInformacionDel")}</span>
          </div>
        </div>
      </main>
    );
  }

  const visibilityLabel = module.visibility
    ? t(VISIBILITY_LABEL_KEYS[module.visibility])
    : t("moduloDetail.sinDefinir");
  const levelLabel = module.level ?? module.difficultyLevel ?? t("moduloDetail.sinNivel");
  // FIX-MODULO-DURACION — antes renderizaba `{module.durationMinutes} minutos`
  // sin fallback: un módulo sin duración (0/null/undefined) mostraba
  // el card con "minutos" solo, sin número. Mismo patrón que levelLabel.
  const durationLabel = module.durationMinutes
    ? `${module.durationMinutes} minutos`
    : t("moduloDetail.sinDuracion");
  const materiaLabel = resolveMateria(module) === MATERIA_FALLBACK ? t("comun.sinMateria") : resolveMateria(module);
  const palette = getModulePalette(module.category ?? "");
  const categoryLabel = module.category && CATEGORY_LABEL_KEYS[module.category.toLowerCase()]
    ? t(CATEGORY_LABEL_KEYS[module.category.toLowerCase()])
    : t("moduloEditor.sinCategoria");

  return (
    <main className="min-h-screen bg-[var(--c-bg)] pb-12">
      {/* Franja superior — único lugar donde el tipo de módulo tiñe el
          fondo; el resto de la página queda en --c-bg liso (rediseño). */}
      <div className={`h-1.5 ${palette.stripe}`} />

      <div className="mx-auto max-w-4xl px-6 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleBack}
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-[var(--c-muted)] hover:text-[var(--c-text)] transition-colors"
          >
            <svg className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            {t("comun.volver")}
          </button>
          <div className="flex items-center gap-2 shrink-0 flex-wrap">
            {!ttsActivo ? (
              <button
                type="button"
                onClick={leerModulo}
                title={t("moduloDetail.leerModuloEnVozAlta")}
                className="rounded-xl px-4 py-2 text-sm font-semibold transition-colors flex items-center gap-2 bg-[var(--c-info-soft)] text-[var(--c-info)] hover:opacity-80"
              >
                {t("moduloDetail.leerEnVozAlta")}
              </button>
            ) : (
              <div
                role="group"
                aria-label={t("moduloDetail.controlesDeLecturaEnVoz")}
                className="flex items-center gap-1.5 rounded-xl bg-[var(--c-surface)] border border-[var(--c-border)] px-2 py-1.5 shadow-sm"
              >
                <button
                  type="button"
                  onClick={pausarReanudarTTS}
                  aria-label={ttsEstado === "leyendo" ? t("moduloDetail.pausarLectura") : t("moduloDetail.reanudarLectura")}
                  className="rounded-lg px-3 py-1 text-sm font-semibold bg-[var(--c-info-soft)] text-[var(--c-info)] hover:opacity-80 transition-colors"
                >
                  {ttsEstado === "leyendo" ? t("moduloDetail.pausar") : t("moduloDetail.reanudar")}
                </button>
                <button
                  type="button"
                  onClick={detenerTTS}
                  aria-label={t("moduloDetail.detenerLectura")}
                  className="rounded-lg px-3 py-1 text-sm font-semibold bg-[var(--c-danger-soft)] text-[var(--c-danger)] hover:opacity-80 transition-colors"
                >
                  {t("moduloDetail.detener")}
                </button>
                <label className="flex items-center gap-1 text-xs font-medium text-[var(--c-muted)]">
                  <span className="sr-only">{t("moduloDetail.velocidadDeLectura")}</span>
                  <select
                    value={ttsRate}
                    onChange={(e) => cambiarVelocidadTTS(Number(e.target.value))}
                    title={t("moduloDetail.velocidadDeLecturaAplicaDesde")}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-1.5 py-1 text-xs"
                  >
                    <option value={0.75}>0.75×</option>
                    <option value={0.9}>0.9×</option>
                    <option value={1}>1×</option>
                    <option value={1.25}>1.25×</option>
                    <option value={1.5}>1.5×</option>
                  </select>
                </label>
              </div>
            )}
            <button
              type="button"
              onClick={() => setModoFoco((v) => !v)}
              aria-pressed={modoFoco}
              title={modoFoco ? t("moduloDetail.salirDelModoFocoEsc") : t("moduloDetail.modoFocoSoloLaTeoria")}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-colors flex items-center gap-2 ${
                modoFoco
                  ? "bg-[var(--c-primary)] text-white hover:opacity-90"
                  : "bg-[var(--c-surface)] border border-[var(--c-border)] text-[var(--c-text)] hover:bg-[var(--c-surface-2)]"
              }`}
            >
              🎯 {modoFoco ? t("moduloDetail.salirDelFoco") : t("moduloDetail.modoFoco")}
            </button>
            <button
              type="button"
              onClick={() => setDictOpen((v) => !v)}
              title={t("moduloDetail.diccionario2")}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-colors flex items-center gap-2 ${
                dictOpen
                  ? "bg-[var(--c-success-soft)] text-[var(--c-success)] hover:opacity-80"
                  : "bg-[var(--c-surface)] border border-[var(--c-border)] text-[var(--c-text)] hover:bg-[var(--c-surface-2)]"
              }`}
            >
              {t("moduloDetail.diccionario")}
            </button>
          </div>
        </div>

        {/* Categoría — antes el color vivía en un banner degradado detrás
            del título; ahora es un badge chico con punto, arriba del
            título, sobre el fondo plano --c-bg (rediseño). */}
        <span className={`mt-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${palette.badge}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {categoryLabel}
        </span>
        <h1 className="mt-2 text-2xl font-bold text-[var(--c-text)] md:text-3xl">{module.title}</h1>
        {module.description && (
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-[var(--c-muted)]">
            {module.description}
          </p>
        )}
      </div>

      <div className="mx-auto max-w-4xl space-y-8 px-6 mt-6">
        {/* Info Grid — oculto en modo foco (PLAN-G §2) */}
        <section className={`${modoFoco ? "hidden" : ""} grid gap-4 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 shadow-lg sm:grid-cols-2 lg:grid-cols-3`}>
          <div className="flex items-start gap-3">
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${palette.icon}`}>
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--c-muted)]">{t("comun.materia")}</p>
              <p className="mt-0.5 text-sm font-medium text-[var(--c-text)]">{materiaLabel}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${palette.icon}`}>
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--c-muted)]">{t("moduloDetail.nivel")}</p>
              <p className="mt-0.5 text-sm font-medium text-[var(--c-text)]">{levelLabel}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${palette.icon}`}>
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--c-muted)]">{t("moduloDetail.duracion")}</p>
              <p className="mt-0.5 text-sm font-medium text-[var(--c-text)]">{durationLabel}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${palette.icon}`}>
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--c-muted)]">{t("comun.visibilidad")}</p>
              <p className="mt-0.5 text-sm font-medium text-[var(--c-text)]">{visibilityLabel}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${palette.icon}`}>
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--c-muted)]">{t("moduloDetail.autor")}</p>
              <p className="mt-0.5 text-sm font-medium text-[var(--c-text)]">{module.authorName ?? module.createdBy}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${palette.icon}`}>
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--c-muted)]">{t("moduloDetail.ultimaActualizacion")}</p>
              <p className="mt-0.5 text-sm font-medium text-[var(--c-text)]">
                {module.updatedAt
                  ? new Date(module.updatedAt).toLocaleDateString(lang)
                  : "—"}
              </p>
            </div>
          </div>
        </section>

        {/* FIX-DEPENDENCIAS — antes esto no existía: `module.dependencies`
            se configuraba en ModuloEditor.tsx y se calculaba en
            progreso.ts (`isLocked`, mostrado como pastilla en el costado
            de aula.tsx), pero acá — donde el alumno realmente abre el
            módulo — no había ningún indicio de bloqueo, así que se podía
            rendir igual sin cumplir el prerrequisito. */}
        {module.isLocked && (module.missingDependencies?.length ?? 0) > 0 && (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-xl border border-[var(--c-warning)]/30 bg-[var(--c-warning-soft)] px-5 py-4"
          >
            <svg className="h-5 w-5 shrink-0 text-[var(--c-warning)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-[var(--c-warning)]">{t("moduloDetail.moduloBloqueado")}</p>
              <p className="mt-1 text-xs text-[var(--c-text)]">
                {t("moduloDetail.completaPrimero")}{" "}
                {module.missingDependencies!.map((d) => d.title).join(", ")}
              </p>
            </div>
          </div>
        )}

        {/* Divider */}
        <div className={`${modoFoco ? "hidden" : ""} border-t border-[var(--c-border)]`} />

        {/* Theory Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-[var(--c-text)]">{t("moduloDetail.teoria")}</h2>
            <span className={`inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full px-2 text-xs font-bold ${palette.badge}`}>
              {theoryItems.length}
            </span>
          </div>
          {theoryItems.length === 0 ? (
            <div className="flex flex-col items-center gap-3 rounded-xl border-2 border-dashed border-[var(--c-border)] bg-[var(--c-surface-2)] px-6 py-10 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--c-surface-3)]">
                <svg className="h-6 w-6 text-[var(--c-muted)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-[var(--c-muted)]">
                {t("moduloDetail.esteModuloTodaviaNoTiene")}
              </p>
            </div>
          ) : (
            // PLAN-G §2 — índice lateral por secciones (≥2 items, pantallas
            // grandes) + resaltado del bloque que el TTS está leyendo.
            <div className={theoryItems.length > 1 ? "lg:grid lg:grid-cols-[14rem_1fr] lg:gap-6 lg:items-start" : ""}>
              {theoryItems.length > 1 && (
                <nav aria-label={t("moduloDetail.indiceDeTeoria")} className="hidden lg:block lg:sticky lg:top-4 space-y-1 mb-4 lg:mb-0">
                  <p className="text-xs font-bold uppercase tracking-wide text-[var(--c-muted)] mb-2">{t("moduloDetail.indice")}</p>
                  {theoryItems.map((item, i) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() =>
                        document
                          .getElementById(`teoria-${item.id}`)
                          ?.scrollIntoView({ behavior: "smooth", block: "start" })
                      }
                      className={`block w-full truncate rounded-lg px-2 py-1 text-left text-sm transition-colors ${
                        ttsBlockId === item.id
                          ? `${palette.badge} font-medium`
                          : "text-[var(--c-muted)] hover:bg-[var(--c-surface-3)]"
                      }`}
                    >
                      {i + 1}. {item.title || "Sin título"}
                    </button>
                  ))}
                </nav>
              )}
              <div className={`grid gap-3 ${modoFoco ? "mx-auto w-full max-w-prose" : ""}`}>
                {theoryItems.map((item) => (
                  <div
                    key={item.id}
                    id={`teoria-${item.id}`}
                    className={`scroll-mt-4 rounded-lg transition-shadow ${
                      ttsBlockId === item.id ? "ring-2 ring-[var(--c-primary)] shadow-md" : ""
                    }`}
                  >
                    <TheoryItemCard item={item} lectura={modoFoco} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Divider */}
        <div className={`${modoFoco ? "hidden" : ""} border-t border-[var(--c-border)]`} />

        {/* Quizzes Section — oculta en modo foco (PLAN-G §2) */}
        <section className={`${modoFoco ? "hidden" : ""} space-y-4`}>
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-[var(--c-text)]">{t("moduloDetail.quizzes")}</h2>
            <span className={`inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full px-2 text-xs font-bold ${palette.badge}`}>
              {quizzes.length}
            </span>
          </div>
          {quizzes.length === 0 ? (
            <div className="flex flex-col items-center gap-3 rounded-xl border-2 border-dashed border-[var(--c-border)] bg-[var(--c-surface-2)] px-6 py-10 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--c-surface-3)]">
                <svg className="h-6 w-6 text-[var(--c-muted)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-[var(--c-muted)]">
                Este módulo todavía no tiene quizzes configurados.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {quizzes.map((quiz) => {
                const attempts = attemptsByQuiz[quiz.id] ?? [];
                const lastAttempt = attempts[attempts.length - 1];
                const bestScore = attempts.reduce<number | null>((best, a) => {
                  if (a.score == null) return best;
                  return best == null ? a.score : Math.max(best, a.score);
                }, null);
                const hasCompleted = attempts.some((a) => a.status === "completed" || a.status === "submitted");
                // PLAN-D §1 (Fase 2) — si hay un intento en curso, el botón
                // principal debe reanudarlo (GET, sin crear ni consumir un
                // intento nuevo) en vez de arrancar otro con "Reintentar".
                const enCurso = attempts.find((a) => a.status === "in_progress");

                return (
                  <article
                    key={quiz.id}
                    className="group rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5 shadow-sm transition-shadow hover:shadow-md space-y-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-bold text-[var(--c-text)]">{quiz.title}</h3>
                        <p className="mt-0.5 text-xs font-medium text-[var(--c-muted)]">
                          {t("comun.tipo")}: {t(QUIZ_TYPE_LABEL_KEYS[quiz.type])}
                        </p>
                      </div>
                      {/* Progress badge */}
                      {attempts.length > 0 ? (
                        <div className="shrink-0 text-right">
                          {hasCompleted ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--c-success-soft)] px-3 py-1 text-xs font-semibold text-[var(--c-success)] ring-1 ring-[var(--c-success)]/30">
                              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                              Completado
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--c-warning-soft)] px-3 py-1 text-xs font-semibold text-[var(--c-warning)] ring-1 ring-[var(--c-warning)]/30">
                              <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--c-warning)] opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--c-warning)]" />
                              </span>
                              {t("moduloDetail.enProgreso")}
                            </span>
                          )}
                        </div>
                      ) : null}
                    </div>

                    {/* Attempt history */}
                    {attempts.length > 0 ? (
                      <div className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface-2)] p-4 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold uppercase tracking-wide text-[var(--c-muted)]">
                            Tus intentos
                          </p>
                          <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[var(--c-surface-3)] px-1.5 text-[10px] font-bold text-[var(--c-muted)]">
                            {attempts.length}
                          </span>
                        </div>
                        {bestScore != null && (
                          <div className="flex items-center gap-2">
                            <svg className="h-4 w-4 text-[var(--c-success)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.996.178-1.768-.767-1.768-1.768 0-1.003.772-1.968 1.768-1.768A4.51 4.51 0 0 1 9 2.25a4.51 4.51 0 0 1 3.75-1.5 4.51 4.51 0 0 1 3.75 1.5 4.51 4.51 0 0 1 3.75-1.5c.996 0 1.768.765 1.768 1.768s-.772 1.946-1.768 1.768" />
                            </svg>
                            <p className="text-xs text-[var(--c-muted)]">
                              Mejor puntaje:{" "}
                              <span className="font-bold text-[var(--c-success)]">
                                {bestScore}
                                {lastAttempt?.maxScore != null ? ` / ${lastAttempt.maxScore}` : ""}
                              </span>
                            </p>
                          </div>
                        )}
                        <div className="mt-1 space-y-1.5">
                          {attempts.slice(-3).map((attempt, i) => (
                            <div key={attempt.id} className="flex items-center gap-2 rounded-md bg-[var(--c-surface)]/70 px-2.5 py-1.5 text-xs text-[var(--c-muted)] ring-1 ring-[var(--c-border)]">
                              <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-[var(--c-surface-3)] font-mono text-[10px] font-bold text-[var(--c-muted)]">
                                {attempts.length - (attempts.slice(-3).length - 1 - i)}
                              </span>
                              {attempt.score != null ? (
                                <span>
                                  {t("moduloDetail.puntaje")} <strong className="text-[var(--c-text)]">{attempt.score}{attempt.maxScore != null ? `/${attempt.maxScore}` : ""}</strong>
                                </span>
                              ) : (
                                <span className="italic text-[var(--c-muted)]">{t("moduloDetail.sinPuntajeRegistrado")}</span>
                              )}
                              {(attempt.completedAt ?? attempt.createdAt) ? (
                                <span className="ml-auto text-[var(--c-muted)]">
                                  {new Date(attempt.completedAt ?? attempt.createdAt ?? "").toLocaleDateString(lang)}
                                </span>
                              ) : null}
                              {/* WO-T2a — "Revisar" abre el intento ya finalizado en modo
                                  read-only (GET, no crea ni consume un intento nuevo).
                                  Distinto del botón "Rendir/Reintentar" de abajo, que SÍ
                                  crea un intento nuevo vía POST. */}
                              {attempt.status !== "in_progress" && (
                                <button
                                  type="button"
                                  className="shrink-0 rounded-md px-2 py-1 text-[11px] font-semibold text-[var(--c-primary)] hover:bg-[var(--c-accent-soft)]"
                                  onClick={() => navigate(`/quiz/attempt/${attempt.id}`)}
                                >
                                  Revisar
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    <div className="flex flex-wrap items-center gap-3">
                      {pureParent ? (
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--c-surface-3)] px-4 py-2 text-xs font-medium text-[var(--c-muted)]">
                          {t("moduloDetail.comoFamiliarPodesVerEste")}
                        </span>
                      ) : module.isLocked && !enCurso ? (
                        // FIX-DEPENDENCIAS — no dejamos ni intentar: el back
                        // igual lo rechaza (403 module_locked), pero mostrar
                        // el candado acá evita el viaje redondo y confunde
                        // menos que "Empezar" seguido de un error. Un
                        // intento YA en curso (`enCurso`) se puede seguir
                        // continuando aunque el módulo se haya bloqueado
                        // después de arrancarlo.
                        <span
                          className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--c-warning-soft)] px-4 py-2 text-xs font-medium text-[var(--c-warning)]"
                          data-testid={`quiz-bloqueado-${quiz.id}`}
                        >
                          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                          </svg>
                          {t("moduloDetail.moduloBloqueado")}
                        </span>
                      ) : (
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--c-primary)] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
                        onClick={() => {
                          // PLAN-D §1 — reanudar NO pasa por POST /api/quiz-attempts
                          // (crearía un intento nuevo y abandonaría el en curso);
                          // navega directo al GET del intento existente.
                          if (enCurso) {
                            navigate(`/quiz/attempt/${enCurso.id}`);
                            return;
                          }
                          void handleStartAttempt(quiz.id);
                        }}
                        disabled={startStatus[quiz.id]?.status === "loading"}
                      >
                        {startStatus[quiz.id]?.status === "loading" ? (
                          <>
                            <svg className="h-3.5 w-3.5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            {t("moduloDetail.iniciando")}
                          </>
                        ) : enCurso ? (
                          <>
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg>
                            {t("moduloDetail.continuarIntento")}
                          </>
                        ) : attempts.length > 0 ? (
                          <>
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
                            </svg>
                            {t("comun.reintentar")}
                          </>
                        ) : (
                          <>
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg>
                            {t("moduloDetail.empezar")}
                          </>
                        )}
                      </button>
                      )}
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-2 text-xs font-semibold text-[var(--c-text)] transition-all hover:border-[var(--c-border-strong)] hover:bg-[var(--c-surface-2)] active:scale-[0.98]"
                        onClick={() => {
                          const next = !previewOpen[quiz.id];
                          setPreviewOpen((prev) => ({ ...prev, [quiz.id]: next }));
                          if (next && !previewQuestions[quiz.id]) {
                            void loadPreviewForQuiz(quiz);
                          }
                        }}
                      >
                        <svg className={`h-3.5 w-3.5 transition-transform ${previewOpen[quiz.id] ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        {previewOpen[quiz.id] ? t("moduloDetail.ocultarVistaPrevia") : t("moduloDetail.vistaPrevia")}
                      </button>
                      {startStatus[quiz.id]?.status === "error" ? (
                        <span className="inline-flex items-center gap-1 text-xs text-[var(--c-danger)]">
                          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                          </svg>
                          {startStatus[quiz.id]?.message ?? t("moduloDetail.noSePudoIniciarEl")}
                        </span>
                      ) : null}
                    </div>
                    {previewOpen[quiz.id] ? (
                      <div className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface-2)] p-4 text-xs text-[var(--c-muted)]">
                        <div className="flex items-center gap-2">
                          <svg className="h-4 w-4 text-[var(--c-primary)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>
                          <p className="font-semibold text-[var(--c-primary)]">
                            Vista previa (semilla fija, no registra intento)
                          </p>
                        </div>
                        <ul className="mt-3 space-y-1.5 pl-1">
                          {!previewQuestions[quiz.id] ? (
                            <li className="flex items-center gap-2 text-[var(--c-muted)]">
                              <svg className="h-3.5 w-3.5 animate-spin" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                              </svg>
                              Generando vista previa...
                            </li>
                          ) : (
                            previewQuestions[quiz.id].map((item) => (
                              <li key={item.id} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--c-primary)]" />
                                <span>{item.label}</span>
                              </li>
                            ))
                          )}
                        </ul>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </div>

      {/* Panel de diccionario */}
      {dictOpen && (
        <aside
          role="dialog"
          aria-modal="true"
          aria-label={t("moduloDetail.panelDeDiccionario")}
          className="fixed right-4 top-24 z-40 w-80 rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] shadow-xl flex flex-col max-h-[70vh]"
        >

          {/* Header */}
          <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-[var(--c-border)]">
            <div className="flex items-center gap-2 min-w-0">
              <h2 className="text-sm font-semibold text-[var(--c-text)] shrink-0">{t("moduloDetail.diccionario")}</h2>
              {/* FIX-DICT-SELECTOR: selector de idioma, poblado con los idiomas
                  REALES del diccionario (no lista fija). Su valor controla
                  el lang que se pasa a lookupPalabra/prefixPalabra. */}
              <div className="min-w-0">
                <LangSelector value={dictLang} onChange={setDictLang} />
              </div>
            </div>
            <button
              type="button"
              aria-label={t("moduloDetail.cerrarDiccionario")}
              onClick={() => {
                setDictOpen(false);
                setDictEntry(null);
                setDictNotFound(false);
                setDictSuggestions([]);
              }}
              className="text-[var(--c-muted)] hover:text-[var(--c-text)] shrink-0"
            >
              ✕
            </button>
          </div>

          {/* Buscador */}
          <div className="px-4 py-3 border-b border-[var(--c-border)] space-y-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={dictQuery}
                onChange={(e) => handleDictInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleDictSearch(dictQuery);
                }}
                placeholder={t("moduloDetail.buscarPalabra")}
                className="flex-1 rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--c-success)]/40"
                autoFocus
              />
              <button
                type="button"
                onClick={() => handleDictSearch(dictQuery)}
                disabled={dictLoading || !dictQuery.trim()}
                className="rounded-lg bg-[var(--c-success)] px-3 py-1.5 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-colors"
              >
                {dictLoading ? "..." : t("moduloDetail.buscar")}
              </button>
            </div>

            {/* Sugerencias de autocompletado */}
            {dictSuggestions.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {dictSuggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      setDictQuery(s);
                      setDictSuggestions([]);
                      handleDictSearch(s);
                    }}
                    className="rounded-full border border-[var(--c-border)] px-2 py-0.5 text-xs text-[var(--c-muted)] hover:bg-[var(--c-surface-2)] transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Resultado */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 text-sm">

            {dictLoading && (
              <p className="text-[var(--c-muted)] animate-pulse">{t("moduloDetail.buscando")}</p>
            )}

            {dictNotFound && !dictLoading && (
              <div className="rounded-xl bg-[var(--c-surface-2)] border border-[var(--c-border)] p-3 text-[var(--c-muted)]">
                {t("moduloDetail.noSeEncontro")} "{dictQuery}".
              </div>
            )}

            {dictEntry && !dictLoading && (
              <div className="space-y-3">
                {/* Palabra */}
                <p className="text-base font-bold text-[var(--c-text)]">
                  {dictEntry.word ?? dictQuery}
                </p>

                {/* Definiciones */}
                {formatDef(dictEntry.definitions).length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-[var(--c-muted)] uppercase tracking-wide mb-1">
                      {t("moduloDetail.definicion")}
                    </p>
                    <ol className="space-y-1 list-decimal list-inside">
                      {formatDef(dictEntry.definitions).slice(0, 4).map((def, i) => (
                        <li key={i} className="text-[var(--c-text)] leading-relaxed">{def}</li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Sinónimos */}
                {formatDef(dictEntry.synonyms).length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-[var(--c-muted)] uppercase tracking-wide mb-1">
                      {t("moduloDetail.sinonimos")}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {formatDef(dictEntry.synonyms).slice(0, 6).map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => {
                            setDictQuery(s);
                            handleDictSearch(s);
                          }}
                          className="rounded-full border border-[var(--c-success)]/30 bg-[var(--c-success-soft)] px-2 py-0.5 text-xs text-[var(--c-success)] hover:opacity-80 transition-colors"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {!dictEntry && !dictLoading && !dictNotFound && (
              <p className="text-xs text-[var(--c-muted)]">
                {t("moduloDetail.escribiUnaPalabraParaVer")}
              </p>
            )}
          </div>
        </aside>
      )}
    </main>
  );
}
