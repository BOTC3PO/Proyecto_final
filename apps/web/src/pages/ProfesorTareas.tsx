/**
 * L2 — tareas del docente: elegir el aula, crear tareas, cerrarlas y corregir las entregas (nota y
 * devolución). La lista de entregas muestra a todos los alumnos del aula, así se ve quién falta.
 */
import { useCallback, useEffect, useState, type FormEvent } from "react";
import { useI18n } from "../i18n/I18nContext";
import { fetchClassrooms } from "../services/aulas";
import {
  actualizarTarea,
  corregirEntrega,
  crearTarea,
  fetchEntregas,
  fetchTareasAula,
  type Entrega,
  type Tarea
} from "../services/tareas";

const campo = "w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] px-3 py-2 text-sm text-[var(--c-text)]";

function Entregas({ tarea }: { tarea: Tarea }) {
  const { t, lang } = useI18n();
  const [filas, setFilas] = useState<Array<{ alumnoId: string; alumnoNombre: string; entrega: Entrega | null }>>([]);
  const [borrador, setBorrador] = useState<Record<string, { nota: string; devolucion: string }>>({});
  const [msg, setMsg] = useState<string | null>(null);

  const cargar = useCallback(() => {
    fetchEntregas(tarea.id).then((r) => {
      setFilas(r.entregas);
      setBorrador(
        Object.fromEntries(
          r.entregas
            .filter((f) => f.entrega)
            .map((f) => [f.entrega!.id, { nota: f.entrega!.nota?.toString() ?? "", devolucion: f.entrega!.devolucion ?? "" }])
        )
      );
    });
  }, [tarea.id]);
  useEffect(cargar, [cargar]);

  const guardar = async (entregaId: string) => {
    const b = borrador[entregaId];
    setMsg(null);
    try {
      await corregirEntrega(entregaId, { nota: b.nota === "" ? null : Number(b.nota), devolucion: b.devolucion || null });
      setMsg(t("tareas.correccionGuardada"));
      cargar();
    } catch (err) {
      setMsg(err instanceof Error ? err.message : t("tareas.noSePudoCorregir"));
    }
  };

  return (
    <div className="mt-3 space-y-2 border-t border-[var(--c-border)] pt-3">
      {filas.map((f) => (
        <div key={f.alumnoId} className="rounded-lg border border-[var(--c-border)] p-3 text-sm">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-medium text-[var(--c-text)]">{f.alumnoNombre}</span>
            <span className="text-xs text-[var(--c-muted)]">
              {f.entrega
                ? `${new Date(f.entrega.entregadaAt).toLocaleString(lang, { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}${f.entrega.tarde ? ` · ${t("tareas.fueraDeTermino")}` : ""}`
                : t("tareas.sinEntregar")}
            </span>
          </div>
          {f.entrega && (
            <>
              <p className="mt-2 whitespace-pre-wrap text-[var(--c-text)]">{f.entrega.texto}</p>
              {f.entrega.enlace && (
                <a href={f.entrega.enlace} target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--c-primary)] underline">
                  {f.entrega.enlace}
                </a>
              )}
              <div className="mt-2 flex flex-wrap items-end gap-2">
                <label className="text-xs text-[var(--c-muted)]">
                  {t("tareas.nota")}{tarea.puntajeMax ? ` (/${tarea.puntajeMax})` : ""}
                  <input type="number" min={0} max={tarea.puntajeMax ?? undefined} step="0.5"
                    value={borrador[f.entrega.id]?.nota ?? ""}
                    onChange={(e) => setBorrador((b) => ({ ...b, [f.entrega!.id]: { ...b[f.entrega!.id], nota: e.target.value } }))}
                    className={`${campo} w-24`} />
                </label>
                <label className="flex-1 text-xs text-[var(--c-muted)]">
                  {t("tareas.devolucion")}
                  <input value={borrador[f.entrega.id]?.devolucion ?? ""}
                    onChange={(e) => setBorrador((b) => ({ ...b, [f.entrega!.id]: { ...b[f.entrega!.id], devolucion: e.target.value } }))}
                    className={campo} />
                </label>
                <button type="button" onClick={() => void guardar(f.entrega!.id)}
                  className="rounded-lg bg-[var(--c-primary)] px-3 py-2 text-xs font-semibold text-white">
                  {t("comun.guardar")}
                </button>
              </div>
            </>
          )}
        </div>
      ))}
      {msg && <p role="status" className="text-xs text-[var(--c-info)]">{msg}</p>}
    </div>
  );
}

export default function ProfesorTareas() {
  const { t, lang } = useI18n();
  const [aulas, setAulas] = useState<Array<{ id: string; name: string }>>([]);
  const [aulaId, setAulaId] = useState("");
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [abierta, setAbierta] = useState<string | null>(null);
  const [form, setForm] = useState({ titulo: "", consigna: "", vence: "", puntajeMax: "" });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchClassrooms().then((r) => {
      const lista = r.items.map((a) => ({ id: a.id, name: a.name }));
      setAulas(lista);
      setAulaId((actual) => actual || lista[0]?.id || "");
    });
  }, []);

  const cargar = useCallback(() => {
    if (aulaId) fetchTareasAula(aulaId).then((r) => setTareas(r.items));
  }, [aulaId]);
  useEffect(cargar, [cargar]);

  const crear = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await crearTarea(aulaId, {
        titulo: form.titulo,
        consigna: form.consigna,
        vence: form.vence ? new Date(form.vence).toISOString() : null,
        puntajeMax: form.puntajeMax ? Number(form.puntajeMax) : null
      });
      setForm({ titulo: "", consigna: "", vence: "", puntajeMax: "" });
      cargar();
    } catch (err) {
      setError(err instanceof Error ? err.message : t("tareas.noSePudoCrear"));
    }
  };

  const alternarEstado = async (tarea: Tarea) => {
    await actualizarTarea(tarea.id, { estado: tarea.estado === "cerrada" ? "publicada" : "cerrada" });
    cargar();
  };

  return (
    <div className="mx-auto max-w-4xl space-y-5 p-6">
      <header>
        <h1 className="text-xl font-bold text-[var(--c-text)]">{t("nav.tareas")}</h1>
        <p className="text-sm text-[var(--c-muted)]">{t("tareas.ayudaDocente")}</p>
      </header>

      <label className="block max-w-xs text-xs font-medium text-[var(--c-muted)]">
        {t("comun.aula")}
        <select value={aulaId} onChange={(e) => setAulaId(e.target.value)} className={campo}>
          {aulas.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}
        </select>
      </label>

      {aulaId && (
        <form onSubmit={crear} className="space-y-3 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4">
          <h2 className="text-sm font-bold text-[var(--c-text)]">{t("tareas.nueva")}</h2>
          <input value={form.titulo} onChange={(e) => setForm({ ...form, titulo: e.target.value })} required
            placeholder={t("tareas.titulo")} className={campo} />
          <textarea value={form.consigna} onChange={(e) => setForm({ ...form, consigna: e.target.value })} required rows={4}
            placeholder={t("tareas.consigna")} className={campo} />
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="text-xs text-[var(--c-muted)]">
              {t("tareas.vence")}
              <input type="datetime-local" value={form.vence} onChange={(e) => setForm({ ...form, vence: e.target.value })} className={campo} />
            </label>
            <label className="text-xs text-[var(--c-muted)]">
              {t("tareas.puntajeMax")}
              <input type="number" min={1} value={form.puntajeMax} onChange={(e) => setForm({ ...form, puntajeMax: e.target.value })} className={campo} />
            </label>
          </div>
          <button type="submit" className="rounded-lg bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white">
            {t("tareas.crear")}
          </button>
          {error && <p role="alert" className="text-sm text-[var(--c-danger)]">{error}</p>}
        </form>
      )}

      <div className="space-y-3">
        {tareas.length === 0 && aulaId && <p className="text-sm text-[var(--c-muted)]">{t("tareas.sinTareasAula")}</p>}
        {tareas.map((tarea) => (
          <div key={tarea.id} className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-[var(--c-text)]">{tarea.titulo}</p>
                <p className="text-xs text-[var(--c-muted)]">
                  {t("tareas.vence")}: {tarea.vence ? new Date(tarea.vence).toLocaleString(lang, { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }) : t("tareas.sinFecha")}
                  {tarea.estado === "cerrada" ? ` · ${t("tareas.cerradaCorta")}` : ""}
                </p>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => void alternarEstado(tarea)}
                  className="rounded-lg border border-[var(--c-border-strong)] px-3 py-1 text-xs font-semibold text-[var(--c-text)]">
                  {tarea.estado === "cerrada" ? t("tareas.reabrir") : t("tareas.cerrar")}
                </button>
                <button type="button" onClick={() => setAbierta(abierta === tarea.id ? null : tarea.id)}
                  className="rounded-lg bg-[var(--c-primary)] px-3 py-1 text-xs font-semibold text-white">
                  {abierta === tarea.id ? t("comun.ocultar") : t("tareas.verEntregas")}
                </button>
              </div>
            </div>
            {abierta === tarea.id && <Entregas tarea={tarea} />}
          </div>
        ))}
      </div>
    </div>
  );
}
