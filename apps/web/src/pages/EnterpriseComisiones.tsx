/**
 * Fase 5.1 — Panel de comisiones de la escuela (DIRECTIVO).
 *
 * Permite elegir el modo de gestión (centralizado/autogestionado) y el % de
 * comisión, y muestra cobros del mes, comisión retenida, saldo a liquidar e
 * historial de transacciones y liquidaciones.
 */
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../auth/use-auth";
import { apiGet, apiPost } from "../lib/api";
import { Card, CardHead, CardBody, Button, Pill, Select } from "../components/ui";
import { useI18n } from "../i18n/I18nContext";

interface Transaccion {
  id: string;
  montoTotal: number;
  comisionVB: number;
  montoNeto: number;
  estado: string;
  createdAt: string;
  mpPaymentId?: string | null;
}
interface Liquidacion {
  id: string;
  periodo: string;
  montoLiquidado: number;
  cantTransacc: number;
  metodo: string;
  createdAt: string;
}
interface ResumenResp {
  escuela: { id: string; name: string; modoGestion: string; comisionPct: number };
  resumen: {
    periodo: string;
    cobrosMes: number;
    comisionRetenidaMes: number;
    saldoALiquidar: number;
    cantTransaccPendientes: number;
  };
  transacciones: Transaccion[];
  liquidaciones: Liquidacion[];
}

const money = (n: number) =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(n ?? 0);
const fecha = (s: string) => (s ? s.slice(0, 10) : "—");

export default function EnterpriseComisiones() {
  const { t } = useI18n();
  const { user } = useAuth();
  const schoolId = user?.schoolId ?? "";
  const [data, setData] = useState<ResumenResp | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [savingModo, setSavingModo] = useState(false);
  const [modo, setModo] = useState("centralizado");
  const [pct, setPct] = useState(10);

  const load = useCallback(async () => {
    if (!schoolId) {
      setError(t("enterpriseCobros.noSeIdentificoLaEscuela"));
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const resp = await apiGet<ResumenResp>(
        `/api/comisiones/escuela/${schoolId}/resumen`,
      );
      setData(resp);
      setModo(resp.escuela.modoGestion);
      setPct(resp.escuela.comisionPct);
    } catch {
      setError("No pudimos cargar las comisiones.");
    } finally {
      setLoading(false);
    }
  }, [schoolId]);

  useEffect(() => {
    void load();
  }, [load]);

  const guardarModo = async () => {
    setSavingModo(true);
    try {
      await apiPost(`/api/comisiones/escuela/${schoolId}/modo`, {
        modoGestion: modo,
        comisionPct: pct,
      });
      await load();
    } catch {
      setError(t("enterpriseComisiones.noSePudoGuardarEl"));
    } finally {
      setSavingModo(false);
    }
  };

  if (loading) {
    return <p className="p-6 text-sm text-[var(--c-muted)] animate-pulse">{t("enterpriseComisiones.cargandoComisiones")}</p>;
  }
  if (error) {
    return <p role="alert" className="p-6 text-sm text-[var(--c-danger)]">{error}</p>;
  }
  if (!data) return null;

  return (
    <div className="mx-auto max-w-4xl space-y-5 p-6">
      <header>
        <h1 className="text-xl font-bold text-[var(--c-text)]">{t("enterpriseComisiones.comisionesDeLaEscuela")}</h1>
        <p className="text-sm text-[var(--c-muted)]">{data.escuela.name}</p>
      </header>

      <Card>
        <CardHead>
          <h2 className="text-sm font-bold">{t("enterpriseComisiones.modoDeGestion")}</h2>
          <Pill tone={modo === "autogestionado" ? "info" : "neutral"}>
            {modo === "autogestionado" ? "Autogestionado" : "Centralizado"}
          </Pill>
        </CardHead>
        <CardBody className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <Select
              label="Modo"
              value={modo}
              onChange={(e) => setModo(e.target.value)}
            >
              <option value="centralizado">{t("adminComisiones.centralizadoCobraVb")}</option>
              <option value="autogestionado">{t("adminComisiones.autogestionadoLaEscuelaCobra")}</option>
            </Select>
            <label className="flex flex-col gap-1">
              <span className="text-xs font-medium text-[var(--c-text-3)]">{t("adminComisiones.comisionVb")}</span>
              <input
                type="number"
                min={0}
                max={100}
                value={pct}
                onChange={(e) => setPct(Number(e.target.value))}
                disabled={modo !== "autogestionado"}
                className="rounded-[var(--r-md)] border border-[var(--c-border-strong)] bg-[var(--c-surface)] px-3 py-1.5 text-sm disabled:opacity-50"
              />
            </label>
          </div>
          <p className="text-xs text-[var(--c-text-3)]">{t("enterpriseComisiones.enModoAutogestionadoVbRetiene")}<strong>{pct}%</strong>{t("enterpriseComisiones.porCadaCobroYLiquida")}</p>
          <Button onClick={() => void guardarModo()} disabled={savingModo} size="sm">
            {savingModo ? "Guardando…" : "Guardar"}
          </Button>
        </CardBody>
      </Card>

      <div className="grid gap-3 sm:grid-cols-3">
        <Card>
          <CardBody>
            <p className="text-xs text-[var(--c-text-3)]">Cobros del mes ({data.resumen.periodo})</p>
            <p className="mt-1 text-lg font-bold text-[var(--c-text)]">{money(data.resumen.cobrosMes)}</p>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <p className="text-xs text-[var(--c-text-3)]">{t("enterpriseComisiones.comisionRetenida")}</p>
            <p className="mt-1 text-lg font-bold text-[var(--c-text)]">{money(data.resumen.comisionRetenidaMes)}</p>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <p className="text-xs text-[var(--c-text-3)]">{t("enterpriseComisiones.saldoALiquidar")}</p>
            <p className="mt-1 text-lg font-bold text-[var(--c-text)]">{money(data.resumen.saldoALiquidar)}</p>
          </CardBody>
        </Card>
      </div>

      <Card>
        <CardHead><h2 className="text-sm font-bold">{t("enterpriseComisiones.transacciones")}</h2></CardHead>
        <CardBody>
          {data.transacciones.length === 0 ? (
            <p className="text-sm text-[var(--c-muted)]">{t("enterpriseComisiones.sinTransaccionesRegistradas")}</p>
          ) : (
            <table className="w-full text-left text-xs">
              <thead className="text-[var(--c-text-3)]">
                <tr>
                  <th className="py-1">{t("enterpriseComisiones.fecha")}</th>
                  <th className="py-1">{t("enterpriseComisiones.total")}</th>
                  <th className="py-1">{t("adminComisiones.comision")}</th>
                  <th className="py-1">{t("enterpriseComisiones.neto")}</th>
                  <th className="py-1">{t("comun.estado")}</th>
                </tr>
              </thead>
              <tbody>
                {data.transacciones.map((t) => (
                  <tr key={t.id} className="border-t border-[var(--c-border)]">
                    <td className="py-1">{fecha(t.createdAt)}</td>
                    <td className="py-1">{money(t.montoTotal)}</td>
                    <td className="py-1">{money(t.comisionVB)}</td>
                    <td className="py-1">{money(t.montoNeto)}</td>
                    <td className="py-1">
                      <Pill tone={t.estado === "liquidada" ? "ok" : "warn"}>{t.estado}</Pill>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardBody>
      </Card>

      <Card>
        <CardHead><h2 className="text-sm font-bold">{t("enterpriseComisiones.liquidaciones")}</h2></CardHead>
        <CardBody>
          {data.liquidaciones.length === 0 ? (
            <p className="text-sm text-[var(--c-muted)]">{t("enterpriseComisiones.sinLiquidacionesAun")}</p>
          ) : (
            <table className="w-full text-left text-xs">
              <thead className="text-[var(--c-text-3)]">
                <tr>
                  <th className="py-1">{t("enterpriseComisiones.fecha")}</th>
                  <th className="py-1">{t("enterpriseComisiones.periodo")}</th>
                  <th className="py-1">{t("comun.monto")}</th>
                  <th className="py-1"># Transacc.</th>
                  <th className="py-1">{t("enterpriseComisiones.metodo")}</th>
                </tr>
              </thead>
              <tbody>
                {data.liquidaciones.map((l) => (
                  <tr key={l.id} className="border-t border-[var(--c-border)]">
                    <td className="py-1">{fecha(l.createdAt)}</td>
                    <td className="py-1">{l.periodo}</td>
                    <td className="py-1">{money(l.montoLiquidado)}</td>
                    <td className="py-1">{l.cantTransacc}</td>
                    <td className="py-1">{l.metodo}</td>
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
