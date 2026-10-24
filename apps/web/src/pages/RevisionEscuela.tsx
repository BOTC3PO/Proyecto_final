/**
 * PLAN-roles-v3 C — revisión de contenido de la escuela.
 *
 * Distinta de `/admin/moderacion`, que es sancionar USUARIOS. Acá se revisa
 * lo que se publicó: cuestionarios y plantillas. Y es revisión POSTERIOR —
 * ya está publicado — así que la pantalla lo dice, para que nadie crea que
 * hay una cola esperando su visto bueno.
 */
import { useCallback, useEffect, useState } from "react";
import { Card, CardHead, CardBody, Button } from "../components/ui";
import { useI18n } from "../i18n/I18nContext";
import { fetchRevision, ocultarItem, type ItemRevision } from "../services/revision-escuela";

export default function RevisionEscuela() {
  const { t } = useI18n();
  const [quizzes, setQuizzes] = useState<ItemRevision[]>([]);
  const [plantillas, setPlantillas] = useState<ItemRevision[]>([]);
  const [cargando, setCargando] = useState(true);
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const cargar = useCallback(async () => {
    setCargando(true);
    try {
      const res = await fetchRevision();
      setQuizzes(res.quizzes ?? []);
      setPlantillas(res.plantillas ?? []);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "error");
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => { void cargar(); }, [cargar]);

  const bajar = async (tipo: "quiz" | "plantilla", id: string) => {
    const motivo = window.prompt(t("revisionEscuela.motivo"));
    if (!motivo?.trim()) return;
    setBusy(id);
    try {
      await ocultarItem(tipo, id, motivo.trim());
      await cargar();
    } catch (e) {
      setError(e instanceof Error ? e.message : "error");
    } finally {
      setBusy(null);
    }
  };

  const lista = (titulo: string, items: ItemRevision[], tipo: "quiz" | "plantilla") => (
    <Card>
      <CardHead><h2 className="text-sm font-bold">{titulo}</h2></CardHead>
      <CardBody>
        {!cargando && items.length === 0 && <p>{t("revisionEscuela.vacio")}</p>}
        {items.map((it) => (
          <div
            key={it.id}
            data-testid={`revision-${tipo}-${it.id}`}
            style={{ borderTop: "1px solid var(--c-border)", paddingBlock: "var(--space-3)" }}
          >
            <p style={{ color: "var(--c-text)" }}>{it.titulo || t("revisionEscuela.sinTitulo")}</p>
            <p style={{ fontSize: "var(--fs-0)", color: "var(--c-text-muted)" }}>
              {it.updatedAt?.slice(0, 10)}
            </p>
            <div style={{ marginTop: "var(--space-2)" }}>
              <Button onClick={() => void bajar(tipo, it.id)} disabled={busy === it.id}>
                {t("revisionEscuela.bajar")}
              </Button>
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  );

  return (
    <div className="mx-auto max-w-3xl p-6" style={{ display: "grid", gap: "var(--space-4)" }}>
      <p
        role="note"
        style={{
          padding: "var(--space-3)",
          borderRadius: "var(--r-md)",
          background: "var(--c-info-soft, var(--c-surface))",
          color: "var(--c-text)",
          fontSize: "var(--fs-0)",
        }}
      >
        {t("revisionEscuela.aviso")}
      </p>
      {error && <p role="alert" style={{ color: "var(--c-danger)" }}>{error}</p>}
      {cargando && <p>{t("adminEscuelas.cargando")}</p>}
      {lista(t("revisionEscuela.cuestionarios"), quizzes, "quiz")}
      {lista(t("revisionEscuela.plantillas"), plantillas, "plantilla")}
    </div>
  );
}
