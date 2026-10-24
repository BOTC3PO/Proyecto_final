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
import { useI18n } from "../i18n/I18nContext";

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

const ESTADO_LABEL_KEYS: Record<string, string> = {
  pendiente: "pagos.estadoPendiente",
  en_proceso: "pagos.estadoEnProceso",
  pagada: "pagos.estadoPagada",
  vencida: "pagos.estadoVencida",
  anulada: "pagos.estadoAnulada"
};

export default function Pagos() {
  const { t } = useI18n();
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
      setError(t("pagos.noPudimosCargarTusCuotas"));
    } finally {
      setLoading(false);
    }
  }, [t]);

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
      setMsg(t("pagos.tuEscuelaTodaviaNoConecto"));
      await load();
    } catch {
      setMsg(t("pagos.noSePudoIniciarEl"));
    } finally {
      setPagando(null);
    }
  };

  const pendientes = items.filter((c) => c.estado === "pendiente" || c.estado === "en_proceso");
  const historial = items.filter((c) => c.estado === "pagada" || c.estado === "vencida" || c.estado === "anulada");

  if (loading) {
    return <p className="p-6 text-sm text-[var(--c-muted)] animate-pulse">{t("pagos.cargandoPagos")}</p>;
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
        <h1 className="text-xl font-bold text-[var(--c-text)]">{t("nav.pagos")}</h1>
        <p className="text-sm text-[var(--c-muted)]">{t("pagos.cuotasPendientesEHistorialDe")}</p>
      </header>

      {msg && (
        <p role="status" aria-live="polite" className="text-sm text-[var(--c-info)]">
          {msg}
        </p>
      )}

      <Card>
        <CardHead>
          <h2 className="text-sm font-bold">{t("pagos.pendientes")}</h2>
        </CardHead>
        <CardBody>
          {pendientes.length === 0 ? (
            <p className="text-sm text-[var(--c-muted)]">{t("pagos.noTenesCuotasPendientes")}</p>
          ) : (
            <ul className="space-y-2">
              {pendientes.map((c) => (
                <li
                  key={c.id}
                  className="flex items-center justify-between gap-3 rounded-[var(--r-md)] border border-[var(--c-border)] p-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-[var(--c-text)]">
                      {c.cobro?.concepto ?? t("pagos.cuota")}
                    </p>
                    <p className="text-xs text-[var(--c-text-3)]">
                      {money(c.montoFinal, c.cobro?.moneda)} · {t("pagos.vence")} {fecha(c.cobro?.vencimiento)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Pill tone={PILL_ESTADO[c.estado] ?? "neutral"}>{t(ESTADO_LABEL_KEYS[c.estado] ?? c.estado)}</Pill>
                    <Button size="sm" onClick={() => void pagar(c.id)} disabled={pagando === c.id}>
                      {pagando === c.id ? t("pagos.iniciando") : t("pagos.pagar")}
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
          <h2 className="text-sm font-bold">{t("pagos.historial")}</h2>
        </CardHead>
        <CardBody>
          {historial.length === 0 ? (
            <p className="text-sm text-[var(--c-muted)]">{t("pagos.sinPagosRegistradosTodavia")}</p>
          ) : (
            <table className="w-full text-left text-xs">
              <thead className="text-[var(--c-text-3)]">
                <tr>
                  <th className="py-1">{t("enterpriseCobros.concepto")}</th>
                  <th className="py-1">{t("comun.monto")}</th>
                  <th className="py-1">{t("comun.estado")}</th>
                </tr>
              </thead>
              <tbody>
                {historial.map((c) => (
                  <tr key={c.id} className="border-t border-[var(--c-border)]">
                    <td className="py-1">{c.cobro?.concepto ?? t("pagos.cuota")}</td>
                    <td className="py-1">{money(c.montoFinal, c.cobro?.moneda)}</td>
                    <td className="py-1">
                      <Pill tone={PILL_ESTADO[c.estado] ?? "neutral"}>{t(ESTADO_LABEL_KEYS[c.estado] ?? c.estado)}</Pill>
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
