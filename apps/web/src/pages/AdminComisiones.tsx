/**
 * Fase 5.1 — Panel admin de comisiones por escuela.
 * Lista cobros/comisión/saldo por escuela, permite liquidar el saldo pendiente
 * y exportar el registro contable a CSV.
 */
import { Fragment, useCallback, useEffect, useState } from "react";
import { apiGet, apiPost, apiGetText } from "../lib/api";
import { Card, CardHead, CardBody, Button, Pill, Select } from "../components/ui";
import { useI18n } from "../i18n/I18nContext";

interface AdminItem {
  escuelaId: string;
  name: string;
  modoGestion: string;
  comisionPct: number;
  cobrosTotal: number;
  comisionTotal: number;
  saldoALiquidar: number;
  cantTransacc: number;
  cantLiquidaciones: number;
}

const money = (n: number) =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(n ?? 0);

export default function AdminComisiones() {
  const { t } = useI18n();
  const [items, setItems] = useState<AdminItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [liquidando, setLiquidando] = useState<string | null>(null);
  const [editando, setEditando] = useState<string | null>(null);
  const [modoDraft, setModoDraft] = useState("centralizado");
  const [pctDraft, setPctDraft] = useState(10);
  const [guardandoModo, setGuardandoModo] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const resp = await apiGet<{ items: AdminItem[] }>("/api/comisiones/admin");
      setItems(resp.items);
    } catch {
      setError("No pudimos cargar las comisiones.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const liquidar = async (escuelaId: string) => {
    setLiquidando(escuelaId);
    setMsg(null);
    try {
      await apiPost("/api/comisiones/admin/liquidar", { escuelaId });
      setMsg(t("adminComisiones.liquidacionRegistrada"));
      await load();
    } catch {
      setMsg(t("adminComisiones.noHaySaldoPendientePara"));
    } finally {
      setLiquidando(null);
    }
  };

  const empezarEdicion = (item: AdminItem) => {
    setEditando(item.escuelaId);
    setModoDraft(item.modoGestion);
    setPctDraft(item.comisionPct);
    setMsg(null);
  };

  const guardarModo = async (escuelaId: string) => {
    setGuardandoModo(true);
    setMsg(null);
    try {
      await apiPost(`/api/comisiones/escuela/${escuelaId}/modo`, {
        modoGestion: modoDraft,
        comisionPct: pctDraft,
      });
      setEditando(null);
      await load();
    } catch {
      setMsg(t("adminComisiones.noSePudoGuardarEl"));
    } finally {
      setGuardandoModo(false);
    }
  };

  const exportarCsv = async () => {
    try {
      const csv = await apiGetText("/api/comisiones/admin/export.csv");
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "comisiones.csv";
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      setMsg("No se pudo exportar el CSV.");
    }
  };

  return (
    <div className="mx-auto max-w-5xl space-y-4 p-6">
      <header className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-[var(--c-text)]">{t("adminComisiones.comisionesPorEscuela")}</h1>
          <p className="text-sm text-[var(--c-muted)]">{t("adminComisiones.registroContableYLiquidaciones")}</p>
        </div>
        <Button variant="ghost" size="sm" onClick={() => void exportarCsv()}>{t("adminComisiones.exportarCsv")}</Button>
      </header>

      {msg && (
        <p role="status" aria-live="polite" className="text-sm text-[var(--c-info)]">
          {msg}
        </p>
      )}

      {loading ? (
        <p className="text-sm text-[var(--c-muted)] animate-pulse">{t("comun.cargando")}</p>
      ) : error ? (
        <p role="alert" className="text-sm text-[var(--c-danger)]">{error}</p>
      ) : items.length === 0 ? (
        <Card>
          <CardBody>
            <p className="text-sm text-[var(--c-muted)]">{t("adminComisiones.noHayEscuelasAutogestionadasCon")}</p>
          </CardBody>
        </Card>
      ) : (
        <Card>
          <CardHead><h2 className="text-sm font-bold">{t("adminComisiones.escuelas")}</h2></CardHead>
          <CardBody>
            <table className="w-full text-left text-xs">
              <thead className="text-[var(--c-text-3)]">
                <tr>
                  <th className="py-1">{t("sidebar.escuela")}</th>
                  <th className="py-1">{t("common.modo")}</th>
                  <th className="py-1">%</th>
                  <th className="py-1">{t("nav.cobros")}</th>
                  <th className="py-1">{t("adminComisiones.comision")}</th>
                  <th className="py-1">{t("adminComisiones.saldo")}</th>
                  <th className="py-1"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((it) => (
                  <Fragment key={it.escuelaId}>
                    <tr className="border-t border-[var(--c-border)]">
                      <td className="py-1.5 font-medium text-[var(--c-text)]">{it.name}</td>
                      <td className="py-1.5">
                        <Pill tone={it.modoGestion === "autogestionado" ? "info" : "neutral"}>
                          {it.modoGestion === "autogestionado" ? "Autogest." : "Central."}
                        </Pill>
                      </td>
                      <td className="py-1.5">{it.comisionPct}%</td>
                      <td className="py-1.5">{money(it.cobrosTotal)}</td>
                      <td className="py-1.5">{money(it.comisionTotal)}</td>
                      <td className="py-1.5 font-semibold">{money(it.saldoALiquidar)}</td>
                      <td className="py-1.5 text-right space-x-2">
                        <Button size="sm" variant="ghost" onClick={() => empezarEdicion(it)}>
                          {editando === it.escuelaId ? "Cerrar" : "Editar"}
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => void liquidar(it.escuelaId)}
                          disabled={liquidando === it.escuelaId || it.saldoALiquidar <= 0}
                        >
                          {liquidando === it.escuelaId ? "Liquidando…" : "Liquidar"}
                        </Button>
                      </td>
                    </tr>
                    {editando === it.escuelaId && (
                      <tr className="border-t border-[var(--c-border)] bg-[var(--c-surface-2)]">
                        <td colSpan={7} className="py-2">
                          <div className="flex items-end gap-3">
                            <Select
                              label="Modo"
                              value={modoDraft}
                              onChange={(e) => setModoDraft(e.target.value)}
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
                                value={pctDraft}
                                onChange={(e) => setPctDraft(Number(e.target.value))}
                                disabled={modoDraft !== "autogestionado"}
                                className="rounded-[var(--r-md)] border border-[var(--c-border-strong)] bg-[var(--c-surface)] px-3 py-1.5 text-sm disabled:opacity-50"
                              />
                            </label>
                            <Button size="sm" onClick={() => void guardarModo(it.escuelaId)} disabled={guardandoModo}>
                              {guardandoModo ? "Guardando…" : "Guardar"}
                            </Button>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      )}
    </div>
  );
}
