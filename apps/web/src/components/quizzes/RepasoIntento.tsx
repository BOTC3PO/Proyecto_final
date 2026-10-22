/**
 * Repaso de un intento entregado: explica en qué falló el alumno y qué temas tendría que repasar.
 *
 * Se apoya en `GET /api/quiz-attempts/:id/repaso` (ver `api/src/routes/quiz-repaso.ts`): agrupa las preguntas por tema
 * (o por sección en los exámenes de idiomas), recomienda los temas con menos del 80 % de aciertos y deja a mano las preguntas
 * falladas con su explicación. No muestra nada si el intento no tiene detalle por tema (intentos viejos o cuestionarios que no
 * salen de plantillas). Con `ocultarPuntos` no muestra porcentajes ni cuentas: solo qué repasar.
 */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiGet } from "../../lib/api";
import { useI18n } from "../../i18n/I18nContext";
import { Alert, Badge, Button, Card } from "../../ui";

export type GrupoRepaso = {
  tipo: "tema" | "seccion";
  id: string;
  titulo: string;
  moduloId: string | null;
  correctas: number;
  total: number;
  porcentaje: number;
};
export type PreguntaRepaso = { id: string; prompt: string; correcta: boolean; pendiente: boolean; explicacion: string | null; grupo: string };
export type Repaso = {
  disponible: boolean;
  porcentaje: number | null;
  umbral: number;
  aprobado: boolean | null;
  score: number | null;
  maxScore: number | null;
  porGrupo: GrupoRepaso[];
  recomendados: GrupoRepaso[];
  preguntas: PreguntaRepaso[];
};

type T = (key: string) => string;
const SECCIONES: Record<string, string> = {
  gramatica: "repaso.seccionGramatica",
  reading: "repaso.seccionLectura",
  listening: "repaso.seccionAudicion",
  speaking: "repaso.seccionExpresionOral",
  writing: "repaso.seccionEscritura",
};
export const etiquetaDeGrupo = (g: Pick<GrupoRepaso, "tipo" | "titulo">, t: T) =>
  g.tipo === "seccion" && SECCIONES[g.titulo] ? t(SECCIONES[g.titulo]) : g.titulo;

/** Rojo bajo el umbral, ámbar hasta el 80 %, verde desde ahí: el mismo corte que usa la recomendación. */
export const tonoDe = (porcentaje: number, umbral: number): "danger" | "warning" | "success" =>
  porcentaje < umbral ? "danger" : porcentaje < 80 ? "warning" : "success";

/** Los textos traducidos traen marcadores `{nombre}`; el catálogo de idiomas no interpola, así que se reemplazan acá. */
const con = (texto: string, valores: Record<string, string | number>) =>
  Object.entries(valores).reduce((acc, [k, v]) => acc.split(`{${k}}`).join(String(v)), texto);

export const mensajeInicial = (r: Pick<Repaso, "aprobado" | "umbral" | "recomendados" | "porGrupo">, esSeccion: boolean, t: T): string => {
  if (r.aprobado === false) return con(t(esSeccion ? "repaso.msgDesaprobadoSecciones" : "repaso.msgDesaprobadoTemas"), { umbral: r.umbral });
  if (r.recomendados.length > 0) return t("repaso.msgAprobadoConRepaso");
  return r.porGrupo.length > 0 ? t("repaso.msgAprobadoLimpio") : "";
};

type Props = { attemptId: string; ocultarPuntos?: boolean };

export default function RepasoIntento({ attemptId, ocultarPuntos = false }: Props) {
  const { t } = useI18n();
  const [repaso, setRepaso] = useState<Repaso | null>(null);

  useEffect(() => {
    let activo = true;
    apiGet<Repaso>(`/api/quiz-attempts/${attemptId}/repaso`)
      .then((r) => activo && setRepaso(r))
      .catch(() => activo && setRepaso(null)); // sin detalle o sin conexión: el bloque simplemente no aparece
    return () => { activo = false; };
  }, [attemptId]);

  if (!repaso || !repaso.disponible || repaso.porGrupo.length === 0) return null;
  const esSeccion = repaso.porGrupo.every((g) => g.tipo === "seccion");
  const falladas = repaso.preguntas.filter((p) => !p.correcta && !p.pendiente);
  const mensaje = mensajeInicial(repaso, esSeccion, t);

  return (
    <Card variant="raised" padding="lg">
      <div data-testid="repaso-intento" style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <h2 style={{ margin: 0, fontSize: "var(--text-lg)", fontWeight: "var(--fw-semibold)", color: "var(--c-text)" }}>
          {t(esSeccion ? "repaso.tituloSecciones" : "repaso.tituloTemas")}
        </h2>
        {mensaje && <Alert variant={repaso.aprobado === false ? "warning" : "success"}>{mensaje}</Alert>}

        {!ocultarPuntos && (
          <ul aria-label={t("repaso.resultadoPorTema")} style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {repaso.porGrupo.map((g) => {
              const tono = tonoDe(g.porcentaje, repaso.umbral);
              return (
                <li key={`${g.tipo}:${g.id}`} style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-2)", alignItems: "center" }}>
                    <span style={{ color: "var(--c-text)", fontSize: "var(--text-sm)" }}>{etiquetaDeGrupo(g, t)}</span>
                    <Badge variant={tono} size="sm">{con(t("repaso.detalleGrupo"), { correctas: g.correctas, total: g.total, porcentaje: g.porcentaje })}</Badge>
                  </div>
                  <div role="img" aria-label={con(t("repaso.ariaAciertos"), { porcentaje: g.porcentaje })} style={{ height: 8, borderRadius: 4, background: "var(--c-border)", overflow: "hidden" }}>
                    <div style={{ width: `${g.porcentaje}%`, height: "100%", background: `var(--c-${tono})` }} />
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        {repaso.recomendados.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <h3 style={{ margin: 0, fontSize: "var(--text-base)", color: "var(--c-text)" }}>{t("repaso.repasarPrimero")}</h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              {repaso.recomendados.map((g) => (
                <li key={g.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--space-2)" }}>
                  <span style={{ color: "var(--c-text)", fontSize: "var(--text-sm)" }}>{g.titulo}</span>
                  {g.moduloId && (
                    <Link to={`/modulos/${encodeURIComponent(g.moduloId)}`}>
                      <Button variant="ghost" size="sm">{t("repaso.abrirTema")}</Button>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {falladas.length > 0 && (
          <details>
            <summary style={{ cursor: "pointer", color: "var(--c-text)", fontWeight: "var(--fw-semibold)" }}>
              {con(t("repaso.preguntasRevisar"), { n: falladas.length })}
            </summary>
            <ol style={{ margin: "var(--space-3) 0 0", paddingLeft: "var(--space-5)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {falladas.map((p) => (
                <li key={p.id} style={{ color: "var(--c-text)", fontSize: "var(--text-sm)" }}>
                  <div>{p.prompt}</div>
                  {p.explicacion && <div style={{ marginTop: "var(--space-1)", color: "var(--c-muted)" }}>{p.explicacion}</div>}
                </li>
              ))}
            </ol>
          </details>
        )}
      </div>
    </Card>
  );
}
