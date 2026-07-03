/**
 * PLAN-B Fase 5 — sección "Pagos" para alumno/padre. Consume
 * `GET /api/cuotas/mias` (ya resuelve en el back tanto las cuotas
 * propias del alumno como las de sus hijos vinculados si es PARENT —
 * el front no necesita distinguir el rol). Botón "Pagar" inicia el
 * checkout (`POST /api/cuotas/:id/checkout`) y redirige a la `url` del
 * provider; si la escuela no conectó pasarela, no hay `url` y se avisa
 * que el pago se coordina con la escuela.
 */
import { useCallback, useEffect, useState } from "react";
import { Card, CardHead, CardBody, Button, Pill } from "../components/ui";
import { fetchCuotasMias, iniciarCheckout, type CuotaAlumno } from "../services/cobros";

const money = (n: number, moneda = "ARS") =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: moneda }).format(n ?? 0);
const fecha = (s?: string | null) => (s ? s.slice(0, 10) : "—");

const PILL_ESTADO: Record<string, "neutral" | "info" | "ok" | "warn"> = {
  pendiente: "warn",
  en_proceso: "info",
  pagada: "ok",
  vencida: "warn",
  anulada: "neutral"
};

export default function Pagos() {
  const [items, setItems] = useState<CuotaAlumno[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [pagando, setPagando] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const resp = await fetchCuotasMias();
      setItems(resp.items);
    } catch {
      setError("No pudimos cargar tus cuotas.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const pagar = async (cuotaId: string) => {
    setPagando(cuotaId);
    setMsg(null);
    try {
      const resp = await iniciarCheckout(cuotaId);
      if (resp.url) {
        window.location.href = resp.url;
        return;
      }
      setMsg("Tu escuela todavía no conectó un medio de pago online. Coordiná el pago con la administración.");
      await load();
    } catch {
      setMsg("No se pudo iniciar el pago.");
    } finally {
      setPagando(null);
    }
  };

  const pendientes = items.filter((c) => c.estado === "pendiente" || c.estado === "en_proceso");
  const historial = items.filter((c) => c.estado === "pagada" || c.estado === "vencida" || c.estado === "anulada");

  if (loading) {
    return <p className="p-6 text-sm text-[var(--c-muted)] animate-pulse">Cargando pagos…</p>;
  }
  if (error) {
    return (
      <p role="alert" className="p-6 text-sm text-[var(--c-danger)]">
        {error}
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-5 p-6">
      <header>
        <h1 className="text-xl font-bold text-[var(--c-text)]">Pagos</h1>
        <p className="text-sm text-[var(--c-muted)]">Cuotas pendientes e historial de pagos.</p>
      </header>

      {msg && (
        <p role="status" aria-live="polite" className="text-sm text-[var(--c-info)]">
          {msg}
        </p>
      )}

      <Card>
        <CardHead>
          <h2 className="text-sm font-bold">Pendientes</h2>
        </CardHead>
        <CardBody>
          {pendientes.length === 0 ? (
            <p className="text-sm text-[var(--c-muted)]">No tenés cuotas pendientes.</p>
          ) : (
            <ul className="space-y-2">
              {pendientes.map((c) => (
                <li
                  key={c.id}
                  className="flex items-center justify-between gap-3 rounded-[var(--r-md)] border border-[var(--c-border)] p-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-[var(--c-text)]">
                      {c.cobro?.concepto ?? "Cuota"}
                    </p>
                    <p className="text-xs text-[var(--c-text-3)]">
                      {money(c.montoFinal, c.cobro?.moneda)} · vence {fecha(c.cobro?.vencimiento)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Pill tone={PILL_ESTADO[c.estado] ?? "neutral"}>{c.estado}</Pill>
                    <Button size="sm" onClick={() => void pagar(c.id)} disabled={pagando === c.id}>
                      {pagando === c.id ? "Iniciando…" : "Pagar"}
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardBody>
      </Card>

      <Card>
        <CardHead>
          <h2 className="text-sm font-bold">Historial</h2>
        </CardHead>
        <CardBody>
          {historial.length === 0 ? (
            <p className="text-sm text-[var(--c-muted)]">Sin pagos registrados todavía.</p>
          ) : (
            <table className="w-full text-left text-xs">
              <thead className="text-[var(--c-text-3)]">
                <tr>
                  <th className="py-1">Concepto</th>
                  <th className="py-1">Monto</th>
                  <th className="py-1">Estado</th>
                </tr>
              </thead>
              <tbody>
                {historial.map((c) => (
                  <tr key={c.id} className="border-t border-[var(--c-border)]">
                    <td className="py-1">{c.cobro?.concepto ?? "Cuota"}</td>
                    <td className="py-1">{money(c.montoFinal, c.cobro?.moneda)}</td>
                    <td className="py-1">
                      <Pill tone={PILL_ESTADO[c.estado] ?? "neutral"}>{c.estado}</Pill>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
