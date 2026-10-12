import { useEffect, useMemo, useState } from "react";
import { apiGet } from "../lib/api";
import { anularCodigoPadre, crearCodigoPadre, listarCodigosPadre, type CodigoCreado, type CodigoListado } from "../services/codigosPadre";

type Alumno = { id: string; name: string; role: string };

const fecha = (iso: string) => new Date(iso).toLocaleDateString();

/**
 * K8 — Familias: la escuela entrega un código de invitación por alumno. La familia lo usa para registrarse
 * como padre/madre o, si ya tiene cuenta, para vincular a su hijo. Cada código sirve una vez y vence a los 7 días.
 */
export default function EnterpriseFamilias() {
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);
  const [cargando, setCargando] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [nuevo, setNuevo] = useState<{ alumno: Alumno; creado: CodigoCreado } | null>(null);
  const [verDe, setVerDe] = useState<Alumno | null>(null);
  const [codigos, setCodigos] = useState<CodigoListado[]>([]);
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    apiGet<{ staff: Alumno[] }>("/api/enterprise/miembros")
      .then((d) => setAlumnos((d.staff ?? []).filter((m) => m.role === "USER")))
      .catch((e) => setError(e instanceof Error ? e.message : "No se pudo cargar la lista"))
      .finally(() => setCargando(false));
  }, []);

  const visibles = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    return alumnos.filter((a) => !q || a.name.toLowerCase().includes(q)).slice(0, 100);
  }, [alumnos, busqueda]);

  const generar = async (alumno: Alumno) => {
    setError(null);
    setCopiado(false);
    try {
      setNuevo({ alumno, creado: await crearCodigoPadre(alumno.id) });
      if (verDe?.id === alumno.id) setCodigos(await listarCodigosPadre(alumno.id));
    } catch (e) {
      setError(e instanceof Error ? e.message : "No se pudo generar el código");
    }
  };

  const abrirCodigos = async (alumno: Alumno) => {
    setVerDe(alumno);
    try {
      setCodigos(await listarCodigosPadre(alumno.id));
    } catch (e) {
      setError(e instanceof Error ? e.message : "No se pudieron cargar los códigos");
    }
  };

  const anular = async (id: string) => {
    try {
      await anularCodigoPadre(id);
      if (verDe) setCodigos(await listarCodigosPadre(verDe.id));
    } catch (e) {
      setError(e instanceof Error ? e.message : "No se pudo anular");
    }
  };

  const copiar = async (texto: string) => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(true);
    } catch {
      setCopiado(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
      <div>
        <h1 className="text-xl font-semibold text-[var(--c-text)]">Familias</h1>
        <p className="text-sm text-[var(--c-muted)] mt-0.5">
          Generá el código de invitación de un alumno y entregáselo a su familia. Con él se registra (o vincula a su hijo)
          como padre o madre. Sirve una sola vez y vence a los 7 días.
        </p>
      </div>

      {error && <div role="alert" className="rounded-xl border border-[var(--c-danger)] px-4 py-3 text-sm text-[var(--c-danger)]">{error}</div>}

      {nuevo && (
        <div role="status" className="rounded-xl border border-[var(--c-primary)] bg-[var(--c-surface)] p-4 space-y-2">
          <p className="text-sm text-[var(--c-text)]">Código para la familia de <strong>{nuevo.alumno.name}</strong>:</p>
          <p data-testid="codigo-nuevo" className="font-mono text-2xl tracking-widest text-[var(--c-text)]">{nuevo.creado.codigo}</p>
          <p className="text-xs text-[var(--c-muted)]">Vence el {fecha(nuevo.creado.expiresAt)}. Por seguridad no se vuelve a mostrar: copialo ahora.</p>
          <button onClick={() => void copiar(nuevo.creado.codigo)} className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)]">
            {copiado ? "Copiado" : "Copiar"}
          </button>
        </div>
      )}

      <input
        type="search" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="Buscar alumno por nombre"
        className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm"
      />

      {cargando ? (
        <div className="h-32 rounded-xl animate-pulse bg-[var(--c-border)]" />
      ) : visibles.length === 0 ? (
        <p className="text-sm text-[var(--c-muted)]">No hay alumnos para mostrar.</p>
      ) : (
        <ul className="divide-y divide-[var(--c-border)] rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)]">
          {visibles.map((a) => (
            <li key={a.id} className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
              <span className="text-sm text-[var(--c-text)]">{a.name}</span>
              <span className="flex gap-2">
                <button onClick={() => void abrirCodigos(a)} className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)]">Ver códigos</button>
                <button onClick={() => void generar(a)} className="rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90">Generar código</button>
              </span>
            </li>
          ))}
        </ul>
      )}

      {verDe && (
        <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4 space-y-2">
          <h2 className="text-sm font-semibold text-[var(--c-text)]">Códigos de {verDe.name}</h2>
          {codigos.length === 0 ? (
            <p className="text-sm text-[var(--c-muted)]">Todavía no hay códigos.</p>
          ) : (
            <ul className="divide-y divide-[var(--c-border)]">
              {codigos.map((c) => (
                <li key={c.id} className="flex flex-wrap items-center justify-between gap-2 py-2 text-sm text-[var(--c-text)]">
                  <span>
                    {c.estado === "activo" ? "Activo" : c.estado === "usado" ? "Usado" : "Anulado"} · creado {fecha(c.createdAt)} · vence {fecha(c.expiresAt)}
                  </span>
                  {c.estado === "activo" && (
                    <button onClick={() => void anular(c.id)} className="rounded-lg border border-[var(--c-danger)] px-3 py-1 text-xs font-semibold text-[var(--c-danger)] hover:bg-[var(--c-bg)]">Anular</button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </div>
  );
}
