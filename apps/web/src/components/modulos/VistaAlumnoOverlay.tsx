/**
 * VistaAlumnoOverlay — Tarea 14.
 *
 * Overlay full-screen (portal) que renderiza un módulo TAL COMO LO VE EL
 * ALUMNO, usando los mismos componentes que la vista real (TheoryItemCard,
 * QuizGeneratedPreview, OrdenarRenderer, etc.).
 *
 * Diferencias intencionales respecto a la vista real:
 *  - Banner fijo arriba: "Vista previa — los intentos no se guardan".
 *  - Para quizzes manuales: el alumno puede tipear/ordenar/etc., pero al
 *    "Verificar" se evalúa localmente contra `answerKey` — no se llama
 *    a la API. En la UI, los quizzes generados van por `QuizGeneratedPreview`
 *    (que solo hace GET de la plantilla, permitido en preview).
 *  - Si una sección exige algo que no está en memoria (ids de DB), se muestra
 *    un placeholder "disponible al guardar" y se acumula en `missing`.
 *
 * Sin red de escritura. Cierre con X o Esc.
 *
 * D10: chrome migrado a tokens (--c-*, --space-*, --text-*).
 */

import { useEffect, useId, useMemo, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import type { ModuleQuiz, ModuleQuizQuestion } from "../../domain/module/module.types";
import TheoryItemCard, { type TheoryItem } from "./TheoryItemCard";
import QuizGeneratedPreview from "./QuizGeneratedPreview";
import OrdenarRenderer from "../quiz-renderers/OrdenarRenderer";
import MarcarMapaRenderer from "../quiz-renderers/MarcarMapaRenderer";
import AnalisisSintacticoRenderer from "../quiz-renderers/AnalisisSintacticoRenderer";
import IdentificarPalabrasRenderer from "../quiz-renderers/IdentificarPalabrasRenderer";
import { Badge, Button, Alert } from "../../ui";

export interface VistaAlumnoOverlayProps {
  open: boolean;
  onClose: () => void;
  title: string;
  theoryItems: TheoryItem[];
  quizzes: ModuleQuiz[];
}

interface MissingReport {
  quizId: string;
  reason: string;
}

export default function VistaAlumnoOverlay({
  open,
  onClose,
  title,
  theoryItems,
  quizzes,
}: VistaAlumnoOverlayProps) {
  const titleId = useId();
  const [missing, setMissing] = useState<MissingReport[]>([]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const reportMissing = (quizId: string, reason: string) => {
    setMissing((prev) =>
      prev.some((m) => m.quizId === quizId && m.reason === reason)
        ? prev
        : [...prev, { quizId, reason }],
    );
  };

  if (!open || typeof document === "undefined") return null;

  const overlay: CSSProperties = {
    position: "fixed",
    inset: 0,
    zIndex: 100,
    display: "flex",
    flexDirection: "column",
    background: "var(--c-bg)",
    fontFamily: "var(--font-sans)",
  };

  const banner: CSSProperties = {
    display: "flex",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "space-between",
    gap: "var(--space-3)",
    borderBottom: "1px solid var(--c-warning)",
    background: "var(--c-warning-soft)",
    padding: "var(--space-2) var(--space-4)",
    fontSize: "var(--text-sm)",
    color: "var(--c-text)",
  };

  const contentArea: CSSProperties = {
    flex: 1,
    overflow: "auto",
    padding: "var(--space-5)",
    maxWidth: "56rem",
    margin: "0 auto",
    width: "100%",
    boxSizing: "border-box",
  };

  const sectionHeading: CSSProperties = {
    margin: 0,
    fontSize: "var(--text-lg)",
    fontWeight: "var(--fw-bold)",
    color: "var(--c-text)",
    display: "flex",
    alignItems: "center",
    gap: "var(--space-2)",
  };

  return createPortal(
    <div
      data-testid="vista-alumno-overlay"
      style={overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div style={banner} data-testid="vista-alumno-banner">
        <span>
          <strong>Vista previa</strong> — los intentos no se guardan.
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          aria-label="Cerrar vista alumno"
          data-testid="vista-alumno-close"
        >
          Cerrar ✕
        </Button>
      </div>

      <div style={contentArea}>
        <h1
          id={titleId}
          data-testid="vista-alumno-title"
          style={{
            margin: "0 0 var(--space-5)",
            fontSize: "var(--text-2xl)",
            fontWeight: "var(--fw-bold)",
            color: "var(--c-text)",
          }}
        >
          {title}
        </h1>

        <section style={{ marginBottom: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <h2 style={sectionHeading}>
            Teoría
            <Badge variant="primary" size="sm">{theoryItems.length}</Badge>
          </h2>
          {theoryItems.length === 0 ? (
            <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--c-muted)" }}>
              Este módulo todavía no tiene elementos de teoría.
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {theoryItems.map((item) => (
                <TheoryItemCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <h2 style={sectionHeading}>
            Quizzes
            <Badge variant="accent" size="sm">{quizzes.length}</Badge>
          </h2>
          {quizzes.length === 0 ? (
            <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--c-muted)" }}>
              Este módulo todavía no tiene quizzes.
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              {quizzes.map((quiz) => (
                <article
                  key={quiz.id}
                  data-testid={`vista-alumno-quiz-${quiz.id}`}
                  style={{
                    borderRadius: "var(--r-lg)",
                    border: "1px solid var(--c-border)",
                    background: "var(--c-surface)",
                    padding: "var(--space-4)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <header style={{ marginBottom: "var(--space-3)" }}>
                    <h3 style={{
                      margin: 0,
                      fontSize: "var(--text-sm)",
                      fontWeight: "var(--fw-bold)",
                      color: "var(--c-text)",
                    }}>
                      {quiz.title || "Quiz sin título"}
                    </h3>
                    <p style={{
                      margin: "2px 0 0",
                      fontSize: "var(--text-xs)",
                      fontWeight: "var(--fw-medium)",
                      color: "var(--c-muted)",
                    }}>
                      Modo: {quiz.mode === "generated" ? "Generado" : "Manual"}
                    </p>
                  </header>

                  {quiz.mode === "generated" ? (
                    <QuizGeneratedPreview
                      generatorId={quiz.generatorId ?? ""}
                      count={quiz.count ?? 3}
                    />
                  ) : (
                    <ManualQuizPreview
                      quiz={quiz}
                      onMissing={(reason) => reportMissing(quiz.id, reason)}
                    />
                  )}
                </article>
              ))}
            </div>
          )}
        </section>

        {missing.length > 0 && (
          <section
            style={{ marginTop: "var(--space-6)" }}
            data-testid="vista-alumno-missing"
          >
            <Alert variant="warning" title="Limitaciones de la vista previa">
              <ul style={{
                margin: "var(--space-2) 0 0",
                paddingLeft: "var(--space-4)",
                fontSize: "var(--text-sm)",
              }}>
                {missing.map((m, i) => (
                  <li key={`${m.quizId}-${i}`}>
                    Quiz <code style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-xs)",
                      padding: "1px var(--space-1)",
                      background: "var(--c-surface-3)",
                      borderRadius: "var(--r-sm)",
                    }}>{m.quizId}</code>: {m.reason}
                  </li>
                ))}
              </ul>
            </Alert>
          </section>
        )}
      </div>
    </div>,
    document.body,
  );
}

/* ---------- Manual quiz preview (local-only) ---------- */

interface ManualQuizPreviewProps {
  quiz: ModuleQuiz;
  onMissing: (reason: string) => void;
}

function ManualQuizPreview({ quiz, onMissing }: ManualQuizPreviewProps) {
  const questions = quiz.questions ?? [];

  if (questions.length === 0) {
    return (
      <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--c-muted)" }}>
        Este quiz todavía no tiene preguntas.
      </p>
    );
  }

  return (
    <ol
      style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-5)" }}
      data-testid="vista-alumno-manual-quiz"
    >
      {questions.map((q, idx) => (
        <ManualQuestionPreview
          key={q.id}
          question={q}
          index={idx}
          onMissing={onMissing}
        />
      ))}
    </ol>
  );
}

function ManualQuestionPreview({
  question,
  index,
  onMissing,
}: {
  question: ModuleQuizQuestion;
  index: number;
  onMissing: (reason: string) => void;
}) {
  const qt = question.questionType ?? "input";
  const [answer, setAnswer] = useState<string | string[]>("");
  const [verified, setVerified] = useState<null | boolean>(null);

  const correct = useMemo<string | string[] | null>(() => {
    if (question.answerKey === undefined) return null;
    return question.answerKey;
  }, [question.answerKey]);

  const onVerify = () => {
    if (correct === null) {
      onMissing("pregunta sin answerKey");
      return;
    }
    if (Array.isArray(correct)) {
      const a = Array.isArray(answer) ? answer : [];
      setVerified(
        correct.length === a.length && correct.every((c, i) => c === a[i]),
      );
    } else {
      setVerified(String(answer).trim() === String(correct).trim());
    }
  };

  const questionCard: CSSProperties = {
    borderRadius: "var(--r-md)",
    border: "1px solid var(--c-border)",
    background: "var(--c-surface-3)",
    padding: "var(--space-3)",
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-3)",
  };

  const inputStyle: CSSProperties = {
    width: "100%",
    borderRadius: "var(--r-sm)",
    border: "1px solid var(--c-border)",
    padding: "var(--space-2) var(--space-3)",
    fontSize: "var(--text-sm)",
    fontFamily: "var(--font-sans)",
    color: "var(--c-text)",
    background: "var(--c-surface)",
  };

  return (
    <li style={questionCard}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
        <p style={{
          margin: 0,
          fontSize: "var(--text-xs)",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: "var(--c-muted)",
        }}>
          Pregunta {index + 1} · {qt}
        </p>
        <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--c-text)" }}>
          {question.prompt || <em style={{ color: "var(--c-muted)" }}>(sin enunciado)</em>}
        </p>
      </div>

      {qt === "mc" ? (
        <MultipleChoicePreview
          options={question.options ?? []}
          value={typeof answer === "string" ? answer : ""}
          onChange={setAnswer}
          disabled={verified !== null}
        />
      ) : qt === "vf" ? (
        <TrueFalsePreview
          value={typeof answer === "string" ? answer : ""}
          onChange={setAnswer}
          disabled={verified !== null}
        />
      ) : qt === "input" ? (
        <input
          type="text"
          aria-label={`Respuesta pregunta ${index + 1}`}
          value={typeof answer === "string" ? answer : ""}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={verified !== null}
          style={inputStyle}
        />
      ) : qt === "ordenar" ? (
        <OrdenarRenderer
          items={question.items ?? []}
          value={Array.isArray(answer) ? answer : undefined}
          onChange={(o) => setAnswer(o)}
          disabled={verified !== null}
        />
      ) : qt === "marcar_mapa" ? (
        <MarcarMapaRenderer
          mapaId={question.mapaId ?? ""}
          selectedKey={typeof answer === "string" ? answer : undefined}
          onSelect={(key) => setAnswer(key)}
          disabled={verified !== null}
          paisIso={question.paisIso}
          modoRespuesta={question.modoRespuestaMapa ?? "iso"}
          encuadre={question.encuadre}
        />
      ) : qt === "analisis_sintactico" ? (
        <AnalisisSintacticoRenderer
          textoAnalizar={question.textoAnalizar ?? ""}
          etiquetasPedidas={question.etiquetasPedidas ?? []}
          asignaciones={
            typeof answer === "object" && !Array.isArray(answer)
              ? (answer as Record<string, string>)
              : undefined
          }
          onChange={(v) => setAnswer(v)}
          disabled={verified !== null}
        />
      ) : qt === "identificar_palabras" ? (
        <IdentificarPalabrasRenderer
          textoAnalizar={question.textoAnalizar ?? ""}
          marcadas={Array.isArray(answer) ? answer : []}
          onChange={(v) => setAnswer(v)}
          disabled={verified !== null}
        />
      ) : (
        <p style={{ margin: 0, fontSize: "var(--text-xs)", fontStyle: "italic", color: "var(--c-muted)" }}>
          Tipo &quot;{qt}&quot; no soportado en vista previa.
        </p>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--space-2)" }}>
        <Button
          variant="primary"
          size="sm"
          onClick={onVerify}
          disabled={verified !== null}
        >
          Verificar
        </Button>
        {verified === true && (
          <Badge variant="success" size="sm">✓ Correcto</Badge>
        )}
        {verified === false && (
          <Badge variant="danger" size="sm">✕ Incorrecto</Badge>
        )}
        {correct !== null && (
          <span style={{ fontSize: "var(--text-xs)", color: "var(--c-muted)" }}>
            Respuesta correcta:{" "}
            <code style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              padding: "1px var(--space-1)",
              background: "var(--c-surface-3)",
              borderRadius: "var(--r-sm)",
            }}>
              {Array.isArray(correct) ? correct.join(", ") : correct}
            </code>
          </span>
        )}
      </div>
    </li>
  );
}

function MultipleChoicePreview({
  options,
  value,
  onChange,
  disabled,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  disabled: boolean;
}) {
  if (options.length === 0) {
    return (
      <p style={{ margin: 0, fontSize: "var(--text-xs)", fontStyle: "italic", color: "var(--c-muted)" }}>
        Sin opciones definidas.
      </p>
    );
  }
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
      {options.map((opt, i) => (
        <li key={i}>
          <label style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontSize: "var(--text-sm)", cursor: "pointer" }}>
            <input
              type="radio"
              name={`mc-${i}`}
              checked={value === opt}
              onChange={() => onChange(opt)}
              disabled={disabled}
              style={{ accentColor: "var(--c-primary)" }}
            />
            <span>{opt}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

function TrueFalsePreview({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (v: string) => void;
  disabled: boolean;
}) {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
      {["Verdadero", "Falso"].map((opt) => (
        <li key={opt}>
          <label style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontSize: "var(--text-sm)", cursor: "pointer" }}>
            <input
              type="radio"
              name="vf"
              checked={value === opt}
              onChange={() => onChange(opt)}
              disabled={disabled}
              style={{ accentColor: "var(--c-primary)" }}
            />
            <span>{opt}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}
