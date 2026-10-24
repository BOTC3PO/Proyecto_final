/**
 * Subastas de tickets de examen, para el docente del aula.
 *
 * Cada subasta vende un ticket de un módulo de tipo examen. El docente las crea con un botón hasta
 * llegar al límite del aula (50% de los alumnos, mínimo 2). El precio inicial lo calcula el
 * servidor con las monedas que hay en el aula: acá solo se muestra.
 */
import { useCallback, useEffect, useState } from "react";
import { apiGet, apiPost, ApiError } from "../../lib/api";

type Modulo = { id: string; title: string };

type Estado = {
  limite: number;
  creadas: number;
  restantes: number;
  puedeCrear: boolean;
  alumnosAula: number;
  monedasAula: number;
  precioInicial: number;
};

type Subasta = {
  id: string;
  aulaId?: string;
  moduloId?: string;
  modo?: string;
  nombre?: string;
  estado: "anunciado" | "cerrado";
  fechaExamen?: string;
  precioInicial?: number;
};

type Props = { aulaId: string; modulos: Modulo[] };

const btn =
  "rounded-lg bg-[var(--c-primary)] px-3 py-2 text-xs font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity";

export default function SubastasTicketDocente({ aulaId, modulos }: Props) {
  const [moduloId, setModuloId] = useState(modulos[0]?.id ?? "");
  const [fecha, setFecha] = useState("");
  const [estado, setEstado] = useState<Estado | null>(null);
  const [subastas, setSubastas] = useState<Subasta[]>([]);
  const [trabajando, setTrabajando] = useState(false);
  const [mensaje, setMensaje] = useState<{ tipo: "ok" | "error"; texto: string } | null>(null);

  useEffect(() => {
    if (!moduloId && modulos[0]) setModuloId(modulos[0].id);
  }, [modulos, moduloId]);

  const cargar = useCallback(async () => {
    if (!moduloId) return;
    try {
      const [e, lista] = await Promise.all([
        apiGet<Estado>(`/api/economia/subastas-ticket/estado?aulaId=${aulaId}&moduloId=${moduloId}`),
        apiGet<{ items: Subasta[] }>("/api/economia/examenes"),
      ]);
      setEstado(e);
      setSubastas(
        (lista.items ?? []).filter((s) => s.modo === "ticket" && s.aulaId === aulaId && s.moduloId === moduloId)
      );
    } catch {
      setEstado(null);
    }
  }, [aulaId, moduloId]);

  useEffect(() => {
    void cargar();
  }, [cargar]);

  const accion = async (fn: () => Promise<string>) => {
    setTrabajando(true);
    setMensaje(null);
    try {
      setMensaje({ tipo: "ok", texto: await fn() });
      await cargar();
    } catch (e) {
      const payload = e instanceof ApiError ? (e.payload as { error?: string; limite?: number } | undefined) : undefined;
      const texto =
        payload?.error === "limite_de_subastas"
          ? `Llegaste al límite: ${payload.limite} subastas para este examen.`
          : e instanceof ApiError
            ? e.message
            : "No se pudo completar la acción.";
      setMensaje({ tipo: "error", texto });
    } finally {
      setTrabajando(false);
    }
  };

  const crear = () =>
    accion(async () => {
      const fin = new Date(`${fecha}T23:59:00`);
      const r = await apiPost<{ precioInicial: number; creadas: number; limite: number }>(
        "/api/economia/subastas-ticket",
        { aulaId, moduloId, fechaExamen: fin.toISOString() }
      );
      return `Subasta creada (${r.creadas} de ${r.limite}). Precio inicial: ${r.precioInicial} 🪙.`;
    });

  const cerrar = (id: string) =>
    accion(async () => {
      await apiPost(`/api/economia/examenes/${id}/cerrar`, {});
      return "Subasta cerrada: el ticket quedó asignado a la puja más alta.";
    });

  if (modulos.length === 0) {
    return (
      <p className="text-sm text-[var(--c-muted)]">
        Asigná un módulo de examen al aula para poder crear subastas de tickets.
      </p>
    );
  }

  const hoy = new Date().toISOString().slice(0, 10);

  return (
    <div className="space-y-3">
      <div className="grid gap-2 sm:grid-cols-[2fr_1fr_auto] items-end">
        <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
          Módulo de examen
          <select
            value={moduloId}
            onChange={(e) => setModuloId(e.target.value)}
            className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm"
          >
            {modulos.map((m) => (
              <option key={m.id} value={m.id}>{m.title}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
          Fecha del examen
          <input
            type="date"
            min={hoy}
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm"
          />
        </label>
        <button
          type="button"
          className={btn}
          disabled={trabajando || !estado?.puedeCrear || !fecha}
          onClick={() => void crear()}
        >
          Crear subasta
        </button>
      </div>

      {estado && (
        <div className="text-xs text-[var(--c-muted)] space-y-1">
          <p>
            Subastas creadas:{" "}
            <strong className="text-[var(--c-text)]">{estado.creadas} de {estado.limite}</strong>
            {!estado.puedeCrear && " — límite alcanzado"}
          </p>
          <p>
            Precio inicial por ticket:{" "}
            <strong className="text-[var(--c-text)]">{estado.precioInicial} 🪙</strong>{" "}
            (se calcula solo: el promedio de monedas por alumno × 25%; hoy hay {estado.monedasAula} 🪙 entre{" "}
            {estado.alumnosAula} alumnos)
          </p>
        </div>
      )}

      {subastas.length > 0 && (
        <ul className="space-y-2">
          {subastas.map((s) => (
            <li
              key={s.id}
              className="flex items-center justify-between gap-3 rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm"
            >
              <span>
                <span className="font-medium text-[var(--c-text)]">{s.nombre ?? "Ticket"}</span>
                <span className="ml-2 text-xs text-[var(--c-muted)]">
                  {s.estado === "anunciado" ? "abierta" : "cerrada"} · mínimo {s.precioInicial ?? 0} 🪙
                </span>
              </span>
              {s.estado === "anunciado" && (
                <button type="button" className={btn} disabled={trabajando} onClick={() => void cerrar(s.id)}>
                  Cerrar subasta
                </button>
              )}
            </li>
          ))}
        </ul>
      )}

      {mensaje && (
        <p role={mensaje.tipo === "error" ? "alert" : "status"} className={`text-xs ${mensaje.tipo === "error" ? "text-[var(--c-danger)]" : "text-[var(--c-success)]"}`}>
          {mensaje.texto}
        </p>
      )}
    </div>
  );
}
