/**
 * L2 — detalle de una tarea para el alumno: consigna, vencimiento, su entrega (con la corrección, si ya la
 * tiene) y el formulario para entregar o volver a entregar mientras no esté corregida.
 */
import { useEffect, useState, type FormEvent } from "react";
import { Link, useParams } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import { entregarTarea, fetchTarea, type Entrega, type Tarea } from "../services/tareas";

export default function TareaDetalle() {
  const { t, lang } = useI18n();
  const { id = "" } = useParams();
  const [tarea, setTarea] = useState<Tarea | null>(null);
  const [aula, setAula] = useState<string | null>(null);
  const [entrega, setEntrega] = useState<Entrega | null>(null);
  const [texto, setTexto] = useState("");
  const [enlace, setEnlace] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    fetchTarea(id)
      .then((r) => {
        setTarea(r.tarea);
        setAula(r.aulaNombre);
        setEntrega(r.miEntrega);
        setTexto(r.miEntrega?.texto ?? "");
        setEnlace(r.miEntrega?.enlace ?? "");
      })
      .catch((e: Error) => setError(e.message));
  }, [id]);

  const enviar = async (e: FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setMsg(null);
    setError(null);
    try {
      const nueva = await entregarTarea(id, { texto, enlace: enlace.trim() || null });
      setEntrega(nueva);
      setMsg(t("tareas.entregaGuardada"));
    } catch (err) {
      setError(err instanceof Error ? err.message : t("tareas.noSePudoEntregar"));
    } finally {
      setEnviando(false);
    }
  };

  const fecha = (iso: string | null) =>
    iso ? new Date(iso).toLocaleString(lang, { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" }) : t("tareas.sinFecha");

  if (error && !tarea) return <p role="alert" className="p-6 text-sm text-[var(--c-danger)]">{error}</p>;
  if (!tarea) return <p className="p-6 text-sm text-[var(--c-muted)] animate-pulse">{t("comun.cargando")}</p>;

  const corregida = Boolean(entrega?.corregidaAt);
  const cerrada = tarea.estado === "cerrada";

  return (
    <div className="mx-auto max-w-3xl space-y-5 px-4 py-6 sm:px-6">
      <Link to="/tareas" className="text-sm text-[var(--c-primary)]">← {t("tareas.volver")}</Link>
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold text-[var(--c-text)]">{tarea.titulo}</h1>
        <p className="text-sm text-[var(--c-muted)]">
          {aula ? `${aula} · ` : ""}{t("tareas.vence")}: {fecha(tarea.vence)}
          {tarea.puntajeMax ? ` · ${t("tareas.puntajeMax")}: ${tarea.puntajeMax}` : ""}
        </p>
      </header>

      <section className="whitespace-pre-wrap rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4 text-sm text-[var(--c-text)]">
        {tarea.consigna}
      </section>

      {entrega && (
        <section className="space-y-1 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4 text-sm">
          <p className="font-medium text-[var(--c-text)]">
            {t("tareas.entregaste")} {fecha(entrega.entregadaAt)}
            {entrega.tarde ? ` · ${t("tareas.fueraDeTermino")}` : ""}
          </p>
          {corregida && (
            <p className="text-[var(--c-text)]">
              {t("tareas.nota")}: <strong>{entrega.nota ?? "—"}</strong>
              {entrega.devolucion ? ` — ${entrega.devolucion}` : ""}
            </p>
          )}
        </section>
      )}

      {!corregida && !cerrada && (
        <form onSubmit={enviar} className="space-y-3 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4">
          <label className="block text-sm font-medium text-[var(--c-text)]">
            {t("tareas.tuRespuesta")}
            <textarea value={texto} onChange={(e) => setTexto(e.target.value)} required rows={8}
              className="mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] px-3 py-2 text-sm text-[var(--c-text)]" />
          </label>
          <label className="block text-sm font-medium text-[var(--c-text)]">
            {t("tareas.enlaceOpcional")}
            <input type="url" value={enlace} onChange={(e) => setEnlace(e.target.value)} placeholder="https://"
              className="mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] px-3 py-2 text-sm text-[var(--c-text)]" />
          </label>
          <button type="submit" disabled={enviando || !texto.trim()}
            className="rounded-lg bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50">
            {entrega ? t("tareas.volverAEntregar") : t("tareas.entregar")}
          </button>
          {msg && <p role="status" className="text-sm text-[var(--c-success)]">{msg}</p>}
          {error && <p role="alert" className="text-sm text-[var(--c-danger)]">{error}</p>}
        </form>
      )}
      {cerrada && !corregida && <p className="text-sm text-[var(--c-muted)]">{t("tareas.cerrada")}</p>}
    </div>
  );
}
