/**
 * Fase 5.1 — Panel admin de comisiones por escuela.
 * Sistema autogestionado: la escuela cobra con su propia cuenta conectada,
 * VB nunca maneja los fondos. Lista cobros/comisión/saldo por escuela,
 * permite fijar un acuerdo particular por escuela (vacío = comisión
 * escalonada), editar los parámetros de la escalonada, liquidar el saldo
 * pendiente y exportar el registro contable a CSV.
 */
import { Fragment, useCallback, useEffect, useState } from "react";
import { apiGet, apiPost, apiPut, apiGetText } from "../lib/api";
import { Card, CardHead, CardBody, Button } from "../components/ui";
import { useI18n } from "../i18n/I18nContext";

interface ParamsComision {
  basePct: number;
  minimoPct: number;
  umbralCuota: number;
  umbralAlumnos: number;
  umbralAlumnosGrande: number;
  topeMonto: number;
  inflacionAnualPct: number;
}

const CAMPOS_PARAMS: Array<{ clave: keyof ParamsComision; label: string; step: number }> = [
  { clave: "basePct", label: "adminComisiones.pBase", step: 0.1 },
  { clave: "minimoPct", label: "adminComisiones.pMinimo", step: 0.1 },
  { clave: "umbralCuota", label: "adminComisiones.pUmbralCuota", step: 1000 },
  { clave: "umbralAlumnos", label: "adminComisiones.pAlumnos", step: 1 },
  { clave: "umbralAlumnosGrande", label: "adminComisiones.pAlumnosGrande", step: 1 },
  { clave: "topeMonto", label: "adminComisiones.pTope", step: 1000 },
  { clave: "inflacionAnualPct", label: "adminComisiones.pInflacion", step: 1 },
];

/** Parámetros de la comisión escalonada (los mismos para todas las escuelas sin acuerdo particular). */
function ParametrosEscalonada() {
  const { t } = useI18n();
  const [params, setParams] = useState<ParamsComision | null>(null);
  const [guardando, setGuardando] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    apiGet<ParamsComision>("/api/comisiones/admin/config").then(setParams).catch(() => setParams(null));
  }, []);

  if (!params) return null;
  const guardar = async () => {
    setGuardando(true);
    setMsg(null);
    try {
      setParams(await apiPut<ParamsComision>("/api/comisiones/admin/config", params));
      setMsg(t("enterpriseCobros.configGuardada"));
    } catch {
      setMsg(t("adminComisiones.noSePudoGuardarEl"));
    } finally {
      setGuardando(false);
    }
  };

  return (
    <Card>
      <CardHead><h2 className="text-sm font-bold">{t("adminComisiones.parametrosTitulo")}</h2></CardHead>
      <CardBody className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-3">
          {CAMPOS_PARAMS.map((c) => (
            <label key={c.clave} className="flex flex-col gap-1">
              <span className="text-xs font-medium text-[var(--c-text-3)]">{t(c.label)}</span>
              <input
                type="number"
                min={0}
                step={c.step}
                value={params[c.clave]}
                onChange={(e) => setParams({ ...params, [c.clave]: Number(e.target.value) })}
                className="rounded-[var(--r-md)] border border-[var(--c-border-strong)] bg-[var(--c-surface)] px-3 py-1.5 text-sm"
              />
            </label>
          ))}
        </div>
        <Button size="sm" onClick={() => void guardar()} disabled={guardando}>
          {guardando ? t("comun.guardando") : t("enterpriseCobros.guardarConfig")}
        </Button>
        {msg && <p role="status" aria-live="polite" className="text-sm text-[var(--c-info)]">{msg}</p>}
      </CardBody>
    </Card>
  );
}

interface AdminItem {
  escuelaId: string;
  name: string;
  /** null = comisión escalonada; número = acuerdo particular. */
  comisionPct: number | null;
  comisionPctIntl: number;
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
  const [pctArDraft, setPctArDraft] = useState("");
  const [pctIntlDraft, setPctIntlDraft] = useState(1.5);
  const [guardandoComision, setGuardandoComision] = useState(false);

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
    setPctArDraft(item.comisionPct != null ? String(item.comisionPct) : "");
    setPctIntlDraft(item.comisionPctIntl);
    setMsg(null);
  };

  const guardarComision = async (escuelaId: string) => {
    setGuardandoComision(true);
    setMsg(null);
    try {
      await apiPost(`/api/comisiones/escuela/${escuelaId}/comision`, {
        comisionPct: pctArDraft.trim() === "" ? null : Number(pctArDraft),
        comisionPctIntl: pctIntlDraft,
      });
      setEditando(null);
      await load();
    } catch {
      setMsg(t("adminComisiones.noSePudoGuardarEl"));
    } finally {
      setGuardandoComision(false);
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

      <ParametrosEscalonada />

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
                  <th className="py-1">{t("adminComisiones.comisionVb")}</th>
                  <th className="py-1">{t("adminComisiones.comisionVbIntl")}</th>
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
                        {it.comisionPct != null ? `${it.comisionPct}%` : t("adminComisiones.escalonada")}
                      </td>
                      <td className="py-1.5">{it.comisionPctIntl}%</td>
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
                            <label className="flex flex-col gap-1">
                              <span className="text-xs font-medium text-[var(--c-text-3)]">{t("adminComisiones.comisionVb")}</span>
                              <input
                                type="number"
                                min={3}
                                max={7}
                                step={0.1}
                                value={pctArDraft}
                                placeholder={t("adminComisiones.escalonada")}
                                onChange={(e) => setPctArDraft(e.target.value)}
                                className="rounded-[var(--r-md)] border border-[var(--c-border-strong)] bg-[var(--c-surface)] px-3 py-1.5 text-sm"
                              />
                              <span className="text-[11px] text-[var(--c-text-3)]">{t("adminComisiones.acuerdoAyuda")}</span>
                            </label>
                            <label className="flex flex-col gap-1">
                              <span className="text-xs font-medium text-[var(--c-text-3)]">{t("adminComisiones.comisionVbIntl")}</span>
                              <input
                                type="number"
                                min={1}
                                max={2}
                                step={0.1}
                                value={pctIntlDraft}
                                onChange={(e) => setPctIntlDraft(Number(e.target.value))}
                                className="rounded-[var(--r-md)] border border-[var(--c-border-strong)] bg-[var(--c-surface)] px-3 py-1.5 text-sm"
                              />
                            </label>
                            <Button size="sm" onClick={() => void guardarComision(it.escuelaId)} disabled={guardandoComision}>
                              {guardandoComision ? "Guardando…" : "Guardar"}
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
