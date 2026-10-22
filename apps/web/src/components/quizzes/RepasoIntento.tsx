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

const SECCIONES: Record<string, string> = {
  gramatica: "Gramática",
  reading: "Lectura",
  listening: "Comprensión auditiva",
  speaking: "Expresión oral",
  writing: "Escritura",
};
export const etiquetaDeGrupo = (g: Pick<GrupoRepaso, "tipo" | "titulo">) => (g.tipo === "seccion" ? SECCIONES[g.titulo] ?? g.titulo : g.titulo);

/** Rojo bajo el umbral, ámbar hasta el 80 %, verde desde ahí: el mismo corte que usa la recomendación. */
export const tonoDe = (porcentaje: number, umbral: number): "danger" | "warning" | "success" =>
  porcentaje < umbral ? "danger" : porcentaje < 80 ? "warning" : "success";

export const mensajeInicial = (r: Pick<Repaso, "aprobado" | "umbral" | "recomendados" | "porGrupo">, esSeccion: boolean): string => {
  if (r.aprobado === false) {
    return esSeccion
      ? `Todavía no llegás al ${r.umbral} %. Estas son las partes donde más fallaste: practicalas y volvé a intentar.`
      : `Todavía no llegás al ${r.umbral} %. No es un final: mirá en qué temas fallaste, repasalos y volvé a intentar.`;
  }
  if (r.recomendados.length > 0) return "Aprobaste. Estos temas todavía se pueden afianzar:";
  return r.porGrupo.length > 0 ? "Aprobaste y no quedó ningún tema flojo. Bien hecho." : "";
};

type Props = { attemptId: string; ocultarPuntos?: boolean };

export default function RepasoIntento({ attemptId, ocultarPuntos = false }: Props) {
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
  const mensaje = mensajeInicial(repaso, esSeccion);

  return (
    <Card variant="raised" padding="lg">
      <div data-testid="repaso-intento" style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <h2 style={{ margin: 0, fontSize: "var(--text-lg)", fontWeight: "var(--fw-semibold)", color: "var(--c-text)" }}>
          {esSeccion ? "En qué parte fallaste" : "En qué temas fallaste"}
        </h2>
        {mensaje && <Alert variant={repaso.aprobado === false ? "warning" : "success"}>{mensaje}</Alert>}

        {!ocultarPuntos && (
          <ul aria-label="Resultado por tema" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {repaso.porGrupo.map((g) => {
              const tono = tonoDe(g.porcentaje, repaso.umbral);
              return (
                <li key={`${g.tipo}:${g.id}`} style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-2)", alignItems: "center" }}>
                    <span style={{ color: "var(--c-text)", fontSize: "var(--text-sm)" }}>{etiquetaDeGrupo(g)}</span>
                    <Badge variant={tono} size="sm">{g.correctas} de {g.total} · {g.porcentaje} %</Badge>
                  </div>
                  <div role="img" aria-label={`${g.porcentaje} % de aciertos`} style={{ height: 8, borderRadius: 4, background: "var(--c-border)", overflow: "hidden" }}>
                    <div style={{ width: `${g.porcentaje}%`, height: "100%", background: `var(--c-${tono})` }} />
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        {repaso.recomendados.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <h3 style={{ margin: 0, fontSize: "var(--text-base)", color: "var(--c-text)" }}>Para repasar primero</h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              {repaso.recomendados.map((g) => (
                <li key={g.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--space-2)" }}>
                  <span style={{ color: "var(--c-text)", fontSize: "var(--text-sm)" }}>{g.titulo}</span>
                  {g.moduloId && (
                    <Link to={`/modulos/${encodeURIComponent(g.moduloId)}`}>
                      <Button variant="ghost" size="sm">Abrir el tema</Button>
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
              Preguntas para revisar ({falladas.length})
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
