/**
 * "Niveles por aula con mapa de flujo" — página dedicada, separada de
 * `aula.tsx` (que ya tiene demasiado). Muestra el mapa de flujo de los
 * módulos asignados al aula: qué desbloquea qué, y el progreso del
 * alumno en cada uno. Reusa el candado real (`isLocked`) que ya aplica
 * POST /api/quiz-attempts — este mapa es sólo la vista, no una fuente de
 * verdad distinta.
 */
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AulaFlowMap from "../components/aula/AulaFlowMap";
import { fetchAulaMapaModulos, type AulaMapaModulos } from "../services/clase-modulos";
import { fetchClassroomDetail } from "../services/aulas";
import { Card, Spinner, Alert } from "../ui";
import { useI18n } from "../i18n/I18nContext";

export default function AulaMapaModulosPage() {
  const { t } = useI18n();
  const { aulaId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<AulaMapaModulos | null>(null);
  const [aulaNombre, setAulaNombre] = useState<string | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!aulaId) return;
    let active = true;
    setStatus("loading");
    Promise.all([fetchAulaMapaModulos(aulaId), fetchClassroomDetail(aulaId).catch(() => null)])
      .then(([mapa, classroom]) => {
        if (!active) return;
        setData(mapa);
        setAulaNombre(classroom?.name ?? null);
        setStatus("ready");
      })
      .catch((error) => {
        if (!active) return;
        setStatus("error");
        setErrorMessage(error instanceof Error ? error.message : t("aulaMapaModulos.noSePudoCargarElMapa"));
      });
    return () => {
      active = false;
    };
  }, [aulaId, t]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--c-bg)",
        padding: "var(--space-5)",
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <div>
          <Link
            to={aulaId ? `/clases/${aulaId}` : "/clases"}
            style={{ fontSize: "var(--text-sm)", color: "var(--c-primary)", textDecoration: "none" }}
          >
            ← {t("aulaMapaModulos.volverAlAula")}
          </Link>
          <h1 style={{ margin: "var(--space-2) 0 0", fontSize: "var(--text-xl)", fontWeight: "var(--fw-bold)", color: "var(--c-text)" }}>
            {t("aulaMapaModulos.titulo")}{aulaNombre ? ` — ${aulaNombre}` : ""}
          </h1>
          <p style={{ margin: "var(--space-1) 0 0", fontSize: "var(--text-sm)", color: "var(--c-muted)" }}>
            {t("aulaMapaModulos.descripcion")}
          </p>
        </div>

        {status === "loading" && (
          <Card variant="flat" padding="lg">
            <div style={{ display: "flex", justifyContent: "center", padding: "var(--space-6) 0" }}>
              <Spinner size="lg" label={t("aulaMapaModulos.cargando")} />
            </div>
          </Card>
        )}

        {status === "error" && (
          <Alert variant="danger" title={t("aulaMapaModulos.errorAlCargar")}>
            {errorMessage}
          </Alert>
        )}

        {status === "ready" && data && data.modulos.length === 0 && (
          <Card variant="flat" padding="lg">
            <p style={{ textAlign: "center", color: "var(--c-muted)", fontSize: "var(--text-sm)" }}>
              {t("aulaMapaModulos.sinModulosAsignados")}
            </p>
          </Card>
        )}

        {status === "ready" && data && data.modulos.length > 0 && (
          <>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)", fontSize: "var(--text-xs)", color: "var(--c-muted)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-1)" }}>
                <span style={{ width: 10, height: 10, borderRadius: 3, background: "var(--c-success)", display: "inline-block" }} />
                {t("moduloDetail.completado")}
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-1)" }}>
                <span style={{ width: 10, height: 10, borderRadius: 3, background: "var(--c-primary)", display: "inline-block" }} />
                {t("moduloDetail.enProgreso")}
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-1)" }}>
                <span style={{ width: 10, height: 10, borderRadius: 3, border: "2px solid var(--c-primary)", display: "inline-block" }} />
                {t("aulaMapaModulos.disponible")}
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-1)" }}>
                <span style={{ width: 10, height: 10, borderRadius: 3, background: "var(--c-border)", display: "inline-block" }} />
                🔒 {t("moduloDetail.moduloBloqueado")}
              </span>
            </div>

            <Card variant="raised" padding="md">
              <div style={{ width: "100%", overflowX: "auto" }}>
                <AulaFlowMap
                  modulos={data.modulos}
                  links={data.links}
                  onSelectModulo={(moduloId) => navigate(`/modulos/${moduloId}?returnTo=${encodeURIComponent(`/clases/${aulaId}/mapa`)}`)}
                />
              </div>
            </Card>
          </>
        )}
      </div>
    </main>
  );
}
