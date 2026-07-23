/**
 * PLAN-B Fase 5 — panel de cobros de la escuela (DIRECTIVO): alta de
 * `CobroEscuela`, publicación a un aula (genera `CuotaAlumno` por
 * alumno), seguimiento de estado por alumno, y conexión de pasarelas
 * (`EscuelaPasarela`) para que el checkout de la familia use el
 * provider real en vez de caer a `manual`.
 */
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../auth/use-auth";
import { Card, CardHead, CardBody, Button, Pill, Input, Select, Textarea } from "../components/ui";
import { fetchClassrooms } from "../services/aulas";
import { useI18n } from "../i18n/I18nContext";
import {
  fetchCobros,
  crearCobro,
  fetchCuotasCobro,
  publicarCobro,
  fetchPasarelas,
  conectarPasarela,
  togglePasarela,
  confirmarPagoManual,
  iniciarAutorizacionMercadoPago,
  type CobroEscuela,
  type CuotaAlumno,
  type EscuelaPasarelaResumen,
  type ProviderPasarela
} from "../services/cobros";

const money = (n: number, moneda = "ARS") =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: moneda }).format(n ?? 0);
const fecha = (s?: string | null) => (s ? s.slice(0, 10) : "—");

const PILL_ESTADO_COBRO: Record<string, "neutral" | "info" | "ok"> = {
  borrador: "neutral",
  publicado: "info",
  cerrado: "ok"
};
const PILL_ESTADO_CUOTA: Record<string, "neutral" | "info" | "ok" | "warn"> = {
  pendiente: "neutral",
  en_proceso: "warn",
  pagada: "ok",
  vencida: "warn",
  anulada: "neutral"
};

const PROVIDERS: Array<{ id: ProviderPasarela; label: string }> = [
  { id: "mercadopago", label: "Mercado Pago" },
  { id: "cryptomus", label: "Cryptomus" }
];

function PasarelasConectadas({ escuelaId }: { escuelaId: string }) {
  const { t } = useI18n();
  const [items, setItems] = useState<EscuelaPasarelaResumen[]>([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState<string | null>(null);
  const [formProvider, setFormProvider] = useState<ProviderPasarela>("mercadopago");
  const [cuentaConectadaId, setCuentaConectadaId] = useState("");
  const [credencial, setCredencial] = useState("");
  const [guardando, setGuardando] = useState(false);
  const [conectandoMP, setConectandoMP] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const resp = await fetchPasarelas(escuelaId);
      setItems(resp.items);
    } catch {
      setMsg("No pudimos cargar las pasarelas conectadas.");
    } finally {
      setLoading(false);
    }
  }, [escuelaId]);

  useEffect(() => {
    void load();
  }, [load]);

  // El callback de OAuth de MP redirige acá con ?mp=conectado|error después
  // del approve — mostramos el resultado una vez y limpiamos la URL.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const mp = params.get("mp");
    if (!mp) return;
    setMsg(mp === "conectado" ? "Mercado Pago conectado correctamente." : "No se pudo conectar Mercado Pago.");
    params.delete("mp");
    const rest = params.toString();
    window.history.replaceState({}, "", window.location.pathname + (rest ? `?${rest}` : ""));
  }, []);

  const conectarMercadoPago = async () => {
    setConectandoMP(true);
    setMsg(null);
    try {
      const { url } = await iniciarAutorizacionMercadoPago(escuelaId);
      window.location.href = url;
    } catch {
      setMsg("No se pudo iniciar la conexión con Mercado Pago.");
      setConectandoMP(false);
    }
  };

  const resumenPorProvider = new Map(items.map((i) => [i.provider, i]));

  const conectar = async () => {
    setGuardando(true);
    setMsg(null);
    try {
      await conectarPasarela(escuelaId, {
        provider: formProvider,
        cuentaConectadaId: cuentaConectadaId || null,
        credenciales: credencial ? { token: credencial } : null
      });
      setCuentaConectadaId("");
      setCredencial("");
      setMsg("Pasarela conectada.");
      await load();
    } catch {
      setMsg("No se pudo conectar la pasarela.");
    } finally {
      setGuardando(false);
    }
  };

  const toggle = async (provider: ProviderPasarela, activa: boolean) => {
    setMsg(null);
    try {
      await togglePasarela(escuelaId, provider, activa);
      await load();
    } catch {
      setMsg("No se pudo actualizar la pasarela.");
    }
  };

  return (
    <Card>
      <CardHead>
        <h2 className="text-sm font-bold">{t("enterpriseCobros.pasarelasDePago")}</h2>
      </CardHead>
      <CardBody className="space-y-4">
        <p className="text-xs text-[var(--c-text-3)]">{t("enterpriseCobros.conectaLaCuentaDeLa")}</p>

        {loading ? (
          <p className="text-sm text-[var(--c-muted)] animate-pulse">{t("comun.cargando")}</p>
        ) : (
          <ul className="space-y-2">
            {PROVIDERS.map(({ id, label }) => {
              const info = resumenPorProvider.get(id);
              return (
                <li key={id} className="flex items-center justify-between gap-3 rounded-[var(--r-md)] border border-[var(--c-border)] px-3 py-2">
                  <div>
                    <p className="text-sm font-medium text-[var(--c-text)]">{label}</p>
                    <p className="text-xs text-[var(--c-text-3)]">
                      {info?.cuentaConectadaId ? `Cuenta: ${info.cuentaConectadaId}` : "Sin conectar"}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {info ? (
                      <>
                        <Pill tone={info.activa ? "ok" : "neutral"}>{info.activa ? "Activa" : "Inactiva"}</Pill>
                        <Button size="sm" variant="ghost" onClick={() => void toggle(id, !info.activa)}>
                          {info.activa ? "Desactivar" : "Activar"}
                        </Button>
                      </>
                    ) : (
                      <>
                        <Pill tone="neutral">{t("enterpriseCobros.noConectada")}</Pill>
                        {id === "mercadopago" && (
                          <Button size="sm" onClick={() => void conectarMercadoPago()} disabled={conectandoMP}>
                            {conectandoMP ? "Redirigiendo…" : "Conectar con Mercado Pago"}
                          </Button>
                        )}
                      </>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        <div className="grid gap-3 border-t border-[var(--c-border)] pt-3 sm:grid-cols-3">
          <Select label="Provider" value={formProvider} onChange={(e) => setFormProvider(e.target.value as ProviderPasarela)}>
            {PROVIDERS.map(({ id, label }) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </Select>
          <Input
            label="Cuenta conectada / Merchant ID"
            value={cuentaConectadaId}
            onChange={(e) => setCuentaConectadaId(e.target.value)}
            placeholder={t("enterpriseCobros.idDeCuentaOauthDel")}
          />
          <Input
            label="API key / Access token"
            type="password"
            value={credencial}
            onChange={(e) => setCredencial(e.target.value)}
            placeholder={t("enterpriseCobros.seCifraAntesDeGuardar")}
          />
        </div>
        <Button size="sm" onClick={() => void conectar()} disabled={guardando}>
          {guardando ? "Guardando…" : "Conectar / actualizar"}
        </Button>
        {msg && (
          <p role="status" aria-live="polite" className="text-sm text-[var(--c-info)]">
            {msg}
          </p>
        )}
      </CardBody>
    </Card>
  );
}

function CuotasDeCobro({ cobroId, moneda }: { cobroId: string; moneda: string }) {
  const { t } = useI18n();
  const [cuotas, setCuotas] = useState<CuotaAlumno[]>([]);
  const [loading, setLoading] = useState(true);
  const [confirmando, setConfirmando] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const resp = await fetchCuotasCobro(cobroId);
      setCuotas(resp.cuotas);
    } finally {
      setLoading(false);
    }
  }, [cobroId]);

  useEffect(() => {
    void load();
  }, [load]);

  const confirmar = async (cuotaId: string) => {
    setConfirmando(cuotaId);
    try {
      await confirmarPagoManual(cuotaId);
      await load();
    } finally {
      setConfirmando(null);
    }
  };

  if (loading) return <p className="text-xs text-[var(--c-muted)] animate-pulse">{t("enterpriseCobros.cargandoCuotas")}</p>;
  if (cuotas.length === 0) return <p className="text-xs text-[var(--c-muted)]">{t("enterpriseCobros.sinCuotasTodavia")}</p>;

  return (
    <table className="w-full text-left text-xs">
      <thead className="text-[var(--c-text-3)]">
        <tr>
          <th className="py-1">{t("enterpriseCobros.alumno")}</th>
          <th className="py-1">{t("comun.monto")}</th>
          <th className="py-1">{t("comun.estado")}</th>
          <th className="py-1"></th>
        </tr>
      </thead>
      <tbody>
        {cuotas.map((c) => (
          <tr key={c.id} className="border-t border-[var(--c-border)]">
            <td className="py-1">{c.alumnoNombre ?? c.alumnoId}</td>
            <td className="py-1">{money(c.montoFinal, moneda)}</td>
            <td className="py-1">
              <Pill tone={PILL_ESTADO_CUOTA[c.estado] ?? "neutral"}>{c.estado}</Pill>
            </td>
            <td className="py-1 text-right">
              {c.pagoId && (c.estado === "pendiente" || c.estado === "en_proceso") && (
                <Button size="sm" variant="ghost" onClick={() => void confirmar(c.id)} disabled={confirmando === c.id}>
                  {confirmando === c.id ? "Confirmando…" : "Confirmar pago"}
                </Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function EnterpriseCobros() {
  const { t } = useI18n();
  const { user } = useAuth();
  const escuelaId = user?.schoolId ?? "";
  const [cobros, setCobros] = useState<CobroEscuela[]>([]);
  const [aulas, setAulas] = useState<Array<{ id: string; name: string }>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandido, setExpandido] = useState<string | null>(null);
  const [publicando, setPublicando] = useState<string | null>(null);
  const [aulaPorCobro, setAulaPorCobro] = useState<Record<string, string>>({});

  const [concepto, setConcepto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [montoUnitario, setMontoUnitario] = useState(0);
  const [moneda, setMoneda] = useState("ARS");
  const [vencimiento, setVencimiento] = useState("");
  const [creando, setCreando] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [cobrosResp, aulasResp] = await Promise.all([fetchCobros(), fetchClassrooms()]);
      setCobros(cobrosResp.items);
      setAulas(aulasResp.items.map((a) => ({ id: a.id, name: a.name })));
    } catch {
      setError("No pudimos cargar los cobros.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const crear = async () => {
    if (!concepto || montoUnitario <= 0) return;
    setCreando(true);
    setError(null);
    try {
      await crearCobro({
        concepto,
        descripcion: descripcion || null,
        montoUnitario,
        moneda,
        vencimiento: vencimiento ? new Date(vencimiento).toISOString() : null
      });
      setConcepto("");
      setDescripcion("");
      setMontoUnitario(0);
      setVencimiento("");
      await load();
    } catch {
      setError("No se pudo crear el cobro.");
    } finally {
      setCreando(false);
    }
  };

  const publicar = async (cobroId: string) => {
    const aulaId = aulaPorCobro[cobroId];
    if (!aulaId) {
      setError(t("enterpriseCobros.elegiUnAulaParaPublicar"));
      return;
    }
    setPublicando(cobroId);
    setError(null);
    try {
      await publicarCobro(cobroId, { aulaId });
      await load();
    } catch {
      setError("No se pudo publicar el cobro.");
    } finally {
      setPublicando(null);
    }
  };

  if (!escuelaId) {
    return <p className="p-6 text-sm text-[var(--c-danger)]">{t("enterpriseCobros.noSeIdentificoLaEscuela")}</p>;
  }

  return (
    <div className="mx-auto max-w-5xl space-y-5 p-6">
      <header>
        <h1 className="text-xl font-bold text-[var(--c-text)]">{t("enterpriseCobros.cobrosAFamilias")}</h1>
        <p className="text-sm text-[var(--c-muted)]">{t("enterpriseCobros.creaConceptosDeCobroPublicalos")}</p>
      </header>

      {error && (
        <p role="alert" className="text-sm text-[var(--c-danger)]">
          {error}
        </p>
      )}

      <Card>
        <CardHead>
          <h2 className="text-sm font-bold">{t("enterpriseCobros.nuevoCobro")}</h2>
        </CardHead>
        <CardBody className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <Input label="Concepto" value={concepto} onChange={(e) => setConcepto(e.target.value)} placeholder={t("enterpriseCobros.cuotaJulio")} />
            <Input
              label="Monto unitario"
              type="number"
              min={0}
              value={montoUnitario}
              onChange={(e) => setMontoUnitario(Number(e.target.value))}
            />
            <Input label="Moneda" value={moneda} onChange={(e) => setMoneda(e.target.value)} placeholder="ARS" />
            <Input label="Vencimiento" type="date" value={vencimiento} onChange={(e) => setVencimiento(e.target.value)} />
          </div>
          <Textarea label={t("comun.descripcionOpcional")} value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
          <Button size="sm" onClick={() => void crear()} disabled={creando || !concepto || montoUnitario <= 0}>
            {creando ? t("comun.creando") : t("enterpriseCobros.crearCobro")}
          </Button>
        </CardBody>
      </Card>

      <Card>
        <CardHead>
          <h2 className="text-sm font-bold">{t("nav.cobros")}</h2>
        </CardHead>
        <CardBody>
          {loading ? (
            <p className="text-sm text-[var(--c-muted)] animate-pulse">{t("comun.cargando")}</p>
          ) : cobros.length === 0 ? (
            <p className="text-sm text-[var(--c-muted)]">{t("enterpriseCobros.todaviaNoCreasteNingunCobro")}</p>
          ) : (
            <ul className="space-y-2">
              {cobros.map((c) => (
                <li key={c.id} className="rounded-[var(--r-md)] border border-[var(--c-border)] p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-[var(--c-text)]">{c.concepto}</p>
                      <p className="text-xs text-[var(--c-text-3)]">
                        {money(c.montoUnitario, c.moneda)} · vence {fecha(c.vencimiento)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Pill tone={PILL_ESTADO_COBRO[c.estado] ?? "neutral"}>{c.estado}</Pill>
                      <Button size="sm" variant="ghost" onClick={() => setExpandido(expandido === c.id ? null : c.id)}>
                        {expandido === c.id ? "Ocultar" : "Ver cuotas"}
                      </Button>
                    </div>
                  </div>

                  {c.estado === "borrador" && (
                    <div className="mt-2 flex items-end gap-2">
                      <Select
                        label="Aula"
                        value={aulaPorCobro[c.id] ?? ""}
                        onChange={(e) => setAulaPorCobro((prev) => ({ ...prev, [c.id]: e.target.value }))}
                      >
                        <option value="">{t("enterpriseCobros.elegiUnAula")}</option>
                        {aulas.map((a) => (
                          <option key={a.id} value={a.id}>
                            {a.name}
                          </option>
                        ))}
                      </Select>
                      <Button size="sm" onClick={() => void publicar(c.id)} disabled={publicando === c.id}>
                        {publicando === c.id ? "Publicando…" : "Publicar"}
                      </Button>
                    </div>
                  )}

                  {expandido === c.id && (
                    <div className="mt-3 border-t border-[var(--c-border)] pt-2">
                      <CuotasDeCobro cobroId={c.id} moneda={c.moneda} />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </CardBody>
      </Card>

      <PasarelasConectadas escuelaId={escuelaId} />
    </div>
  );
}
