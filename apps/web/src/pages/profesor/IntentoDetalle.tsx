/**
 * F5-03 — Vista docente de un intento: detalle + panel de eventos.
 *
 * El docente llega a esta página desde la lista de calificaciones
 * (futuro: un link "Ver detalle" por fila) o por URL directa. La
 * página muestra:
 *  - Datos básicos del intento (score, maxScore, status, fechas).
 *  - El panel `AttemptEventsPanel` con los flags informativos.
 *
 * PRIVACIDAD: la página NO muestra timestamps, URLs visitadas, ni
 * qué app se abrió — sólo contadores agregados. El navegador no
 * expone esa información, y F5-03 mantiene esa garantía.
 */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiGet } from "../../lib/api";
import AttemptEventsPanel from "../../components/profesor/AttemptEventsPanel";
import {
  summarizeAttemptEvents,
  type AttemptEventsSummary
} from "../../domain/quiz/attemptEvents";
import { Card, Badge, Alert, Spinner } from "../../ui";
import { useI18n } from "../../i18n/I18nContext";

type StaffAttempt = {
  id: string;
  moduleId?: string;
  quizId: string;
  userId: string;
  status: string;
  score: number | null;
  maxScore: number | null;
  submittedAt?: string;
  startedAt?: string;
  grading: Record<string, unknown>;
  events: AttemptEventsSummary;
};

function statusVariant(s: string): "success" | "warning" | "neutral" | "danger" {
  switch (s) {
    case "graded":
    case "submitted": return "success";
    case "in_progress": return "warning";
    case "expired": return "danger";
    default: return "neutral";
  }
}

export default function ProfesorIntentoDetalle() {
  const { t } = useI18n();
  const { attemptId } = useParams();
  const [attempt, setAttempt] = useState<StaffAttempt | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!attemptId) return;
    let active = true;
    setStatus("loading");
    apiGet<StaffAttempt>(`/api/quiz-attempts/${attemptId}/staff`)
      .then((data) => {
        if (!active) return;
        setAttempt({
          ...data,
          events: data.events ?? summarizeAttemptEvents(data.grading)
        });
        setStatus("ready");
      })
      .catch((error) => {
        if (!active) return;
        setStatus("error");
        setErrorMessage(
          error instanceof Error ? error.message : "No se pudo cargar el intento."
        );
      });
    return () => {
      active = false;
    };
  }, [attemptId]);

  if (status === "loading") {
    return (
      <main style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--c-bg)",
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--space-3)",
        }}>
          <Spinner size="lg" label="Cargando intento" />
          <p style={{ fontSize: "var(--text-sm)", color: "var(--c-muted)" }}>{t("intentoDetalle.cargandoIntento")}</p>
        </div>
      </main>
    );
  }

  if (status === "error" || !attempt) {
    return (
      <main style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--c-bg)",
      }}>
        <Card variant="elevated" padding="lg" style={{ maxWidth: "28rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <Alert variant="danger" title={t("intentoDetalle.error")}>{t("intentoDetalle.noSePudoCargarEl")}</Alert>
            {errorMessage && (
              <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--c-muted)" }}>
                {errorMessage}
              </p>
            )}
            <Link
              to="/profesor/calificaciones"
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--c-primary)",
                textDecoration: "none",
                fontWeight: "var(--fw-medium)",
              }}
            >
              &larr; Volver a calificaciones
            </Link>
          </div>
        </Card>
      </main>
    );
  }

  const submitted = attempt.submittedAt
    ? new Date(attempt.submittedAt).toLocaleString()
    : "—";
  const started = attempt.startedAt
    ? new Date(attempt.startedAt).toLocaleString()
    : "—";

  const metaItems: { label: string; value: string; badge?: boolean }[] = [
    {
      label: t("intentoDetalle.score"),
      value: `${attempt.score ?? "—"}/${attempt.maxScore ?? "—"}`,
    },
    {
      label: t("comun.estado"),
      value: attempt.status,
      badge: true,
    },
    { label: t("nav.inicio"), value: started },
    { label: t("intentoDetalle.entrega"), value: submitted },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--c-bg)",
        fontFamily: "var(--font-sans)",
      }}
    >
      <div
        style={{
          maxWidth: "56rem",
          margin: "0 auto",
          padding: "var(--space-6) var(--space-4)",
        }}
        className="sm:px-6 lg:px-8"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
          {/* Header */}
          <header
            role="banner"
            style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}
          >
            <Link
              to="/profesor/calificaciones"
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--c-primary)",
                textDecoration: "none",
                fontWeight: "var(--fw-medium)",
              }}
              aria-label={t("intentoDetalle.volverACalificaciones")}
            >
              &larr; Volver a calificaciones
            </Link>
            <h1 style={{
              margin: 0,
              fontSize: "var(--text-2xl)",
              fontWeight: "var(--fw-bold)",
              lineHeight: "var(--lh-tight)",
              color: "var(--c-text)",
            }}>
              Intento {attempt.id}
            </h1>
            <p style={{
              margin: 0,
              fontSize: "var(--text-sm)",
              color: "var(--c-muted)",
            }}>{t("intentoDetalle.alumno")}<code style={{
                fontSize: "var(--text-xs)",
                fontFamily: "var(--font-mono)",
                padding: "var(--space-1)",
                background: "var(--c-surface-3)",
                borderRadius: "var(--r-sm)",
              }}>
                {attempt.userId}
              </code>
            </p>
          </header>

          {/* Metrics card */}
          <Card variant="raised" padding="lg">
            <div className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: "var(--space-4)" }}>
              {metaItems.map((item) => (
                <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                  <p style={{
                    margin: 0,
                    fontSize: "var(--text-xs)",
                    fontWeight: "var(--fw-medium)",
                    color: "var(--c-muted)",
                  }}>
                    {item.label}
                  </p>
                  {item.badge ? (
                    <Badge variant={statusVariant(item.value)} size="sm">
                      {item.value}
                    </Badge>
                  ) : (
                    <p style={{
                      margin: 0,
                      fontSize: item.label === "Score" ? "var(--text-lg)" : "var(--text-sm)",
                      fontWeight: item.label === "Score" ? "var(--fw-semibold)" : "var(--fw-regular)",
                      color: "var(--c-text)",
                    }}>
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Events panel */}
          <AttemptEventsPanel grading={attempt.grading} />

          {/* Privacy note */}
          <p style={{
            margin: 0,
            fontSize: "11px",
            lineHeight: "var(--lh-relaxed)",
            color: "var(--c-muted)",
          }}>
            La nota del intento es independiente de los eventos
            informativos registrados en este panel. La decisión de dar
            peso a esos eventos es del docente; el sistema no penaliza
            automáticamente.
          </p>
        </div>
      </div>
    </main>
  );
}
