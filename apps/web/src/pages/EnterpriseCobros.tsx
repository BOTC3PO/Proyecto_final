/**
 * PLAN-B Fase 5 — panel de cobros de la escuela (DIRECTIVO): alta de
 * `CobroEscuela`, publicación a un aula (genera `CuotaAlumno` por
 * alumno), seguimiento de estado por alumno, y conexión de pasarelas
 * (`EscuelaPasarela`) para que el checkout de la familia use el
 * provider real en vez de caer a `manual`.
 */
import { useCallback, useEffect, useState } from "react";
import { fetchCooperadora, guardarCooperadora, type Cooperadora } from "../services/escuela-alta";
import { useAuth } from "../auth/use-auth";
import { Card, CardHead, CardBody, Button, Pill, Input, Select, Textarea } from "../components/ui";
import { fetchClassrooms } from "../services/aulas";
import { useI18n } from "../i18n/I18nContext";
import { interpolar } from "../i18n/interpolar";
import DelegacionCobros from "../components/DelegacionCobros";
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
  fetchConfigCobros,
  guardarConfigCobros,
  type ConfigCobrosEscuela,
  type TipoCobro,
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
      // La cuenta de la cooperadora se muestra en su propia tarjeta.
      setItems(resp.items.filter((p) => p.titular !== "cooperadora"));
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

/** Cooperadora: asociación aparte con CUIT propio. La registra la dirección, la verifica el administrador y,
 * verificada, conecta su propia cuenta de Mercado Pago para cobrar los aportes de tipo «cooperadora». */
function CooperadoraCard({ escuelaId }: { escuelaId: string }) {
  const { t } = useI18n();
  const [coop, setCoop] = useState<Cooperadora | null | undefined>(undefined);
  const [form, setForm] = useState({ nombre: "", cuit: "", contactoEmail: "" });
  const [editando, setEditando] = useState(false);
  const [conectada, setConectada] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    fetchCooperadora(escuelaId)
      .then((r) => {
        setCoop(r.cooperadora);
        if (r.cooperadora) setForm({ nombre: r.cooperadora.nombre, cuit: r.cooperadora.cuit, contactoEmail: r.cooperadora.contactoEmail ?? "" });
      })
      .catch(() => setCoop(null));
    fetchPasarelas(escuelaId)
      .then((r) => setConectada(r.items.some((p) => p.titular === "cooperadora" && p.activa)))
      .catch(() => setConectada(false));
  }, [escuelaId]);

  if (coop === undefined) return null;
  const guardar = async () => {
    setMsg(null);
    try {
      const r = await guardarCooperadora(escuelaId, { nombre: form.nombre, cuit: form.cuit, contactoEmail: form.contactoEmail || null });
      setCoop(r.cooperadora);
      setEditando(false);
    } catch (err) {
      setMsg(err instanceof Error ? err.message : t("enterpriseCobros.configError"));
    }
  };
  const conectar = async () => {
    try {
      const { url } = await iniciarAutorizacionMercadoPago(escuelaId, "cooperadora");
      window.location.href = url;
    } catch (err) {
      setMsg(err instanceof Error ? err.message : t("enterpriseCobros.configError"));
    }
  };

  return (
    <Card>
      <CardHead>
        <h2 className="text-sm font-bold">{t("cooperadora.titulo")}</h2>
      </CardHead>
      <CardBody className="space-y-3">
        <p className="text-xs text-[var(--c-text-3)]">{t("cooperadora.ayuda")}</p>
        {coop && !editando ? (
          <div className="space-y-1 text-sm text-[var(--c-text)]">
            <p>
              <strong>{coop.nombre}</strong> · CUIT {coop.cuit}{" "}
              <Pill tone={coop.estadoVerificacion === "verificada" ? "ok" : coop.estadoVerificacion === "rechazada" ? "warn" : "neutral"}>
                {t(`cooperadora.estado_${coop.estadoVerificacion}`)}
              </Pill>
            </p>
            {coop.motivoRechazo && <p className="text-xs text-[var(--c-danger)]">{coop.motivoRechazo}</p>}
            <div className="flex flex-wrap gap-2 pt-1">
              <Button size="sm" variant="ghost" onClick={() => setEditando(true)}>{t("comun.editar")}</Button>
              {coop.estadoVerificacion === "verificada" && (
                <Button size="sm" onClick={() => void conectar()}>
                  {conectada ? t("cooperadora.reconectarMp") : t("cooperadora.conectarMp")}
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-3">
            <Input label={t("registrarEscuela.cooperadora_nombre")} value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} />
            <Input label={t("registrarEscuela.cooperadora_cuit")} value={form.cuit} onChange={(e) => setForm({ ...form, cuit: e.target.value })} />
            <Input label={t("registrarEscuela.cooperadora_contactoEmail")} value={form.contactoEmail} onChange={(e) => setForm({ ...form, contactoEmail: e.target.value })} />
            <div>
              <Button size="sm" onClick={() => void guardar()} disabled={!form.nombre || !form.cuit}>{t("cooperadora.registrar")}</Button>
            </div>
          </div>
        )}
        {msg && <p role="alert" className="text-sm text-[var(--c-danger)]">{msg}</p>}
      </CardBody>
    </Card>
  );
}

/** Interés por mora (tasa mensual o anual con tope) y reglas de la cooperadora y los aportes solidarios. */
function ConfigCobros({ escuelaId }: { escuelaId: string }) {
  const { t } = useI18n();
  const [cfg, setCfg] = useState<ConfigCobrosEscuela | null>(null);
  const [tope, setTope] = useState("");
  const [guardando, setGuardando] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    fetchConfigCobros(escuelaId)
      .then((c) => {
        setCfg(c);
        setTope(c.topeAporteLegal != null ? String(c.topeAporteLegal) : "");
      })
      .catch(() => setCfg(null));
  }, [escuelaId]);

  if (!cfg) return null;
  const max = cfg.limites.moraTasaMax[cfg.moraPeriodo];
  const cambiar = (parcial: Partial<ConfigCobrosEscuela>) => setCfg({ ...cfg, ...parcial });

  const guardar = async () => {
    setGuardando(true);
    setMsg(null);
    try {
      const guardada = await guardarConfigCobros(escuelaId, {
        moraActiva: cfg.moraActiva,
        moraTasa: cfg.moraTasa,
        moraPeriodo: cfg.moraPeriodo,
        moraDiasGracia: cfg.moraDiasGracia,
        comisionPctAportes: cfg.comisionPctAportes,
        topeAporteLegal: tope ? Number(tope) : null
      });
      setCfg(guardada);
      setMsg(t("enterpriseCobros.configGuardada"));
    } catch {
      setMsg(t("enterpriseCobros.configError"));
    } finally {
      setGuardando(false);
    }
  };

  return (
    <Card>
      <CardHead>
        <h2 className="text-sm font-bold">{t("enterpriseCobros.configTitulo")}</h2>
      </CardHead>
      <CardBody className="space-y-3">
        <p className="text-xs text-[var(--c-text-3)]">{t("enterpriseCobros.moraAyuda")}</p>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={cfg.moraActiva} onChange={(e) => cambiar({ moraActiva: e.target.checked })} />
          {t("enterpriseCobros.moraActiva")}
        </label>
        <div className="grid gap-3 sm:grid-cols-3">
          <Input
            label={t("enterpriseCobros.moraTasa")}
            type="number"
            min={0}
            max={max}
            step={0.1}
            value={cfg.moraTasa}
            disabled={!cfg.moraActiva}
            onChange={(e) => cambiar({ moraTasa: Number(e.target.value) })}
          />
          <Select
            label={t("enterpriseCobros.moraPeriodo")}
            value={cfg.moraPeriodo}
            disabled={!cfg.moraActiva}
            onChange={(e) => cambiar({ moraPeriodo: e.target.value as "mensual" | "anual" })}
          >
            <option value="mensual">{t("enterpriseCobros.moraMensual")}</option>
            <option value="anual">{t("enterpriseCobros.moraAnual")}</option>
          </Select>
          <Input
            label={t("enterpriseCobros.moraDiasGracia")}
            type="number"
            min={0}
            max={cfg.limites.moraDiasGraciaMax}
            value={cfg.moraDiasGracia}
            disabled={!cfg.moraActiva}
            onChange={(e) => cambiar({ moraDiasGracia: Math.max(0, Math.floor(Number(e.target.value))) })}
          />
        </div>
        <p className="text-xs text-[var(--c-text-3)]">{interpolar(t("enterpriseCobros.moraTope"), { max })}</p>

        <p className="border-t border-[var(--c-border)] pt-3 text-xs text-[var(--c-text-3)]">{t("enterpriseCobros.aportesAyuda")}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Input
            label={t("enterpriseCobros.aportesComision")}
            type="number"
            min={cfg.limites.comisionPctAportes.min}
            max={cfg.limites.comisionPctAportes.max}
            step={0.1}
            value={cfg.comisionPctAportes}
            onChange={(e) => cambiar({ comisionPctAportes: Number(e.target.value) })}
          />
          <Input
            label={t("enterpriseCobros.topeAporteLegal")}
            type="number"
            min={0}
            value={tope}
            onChange={(e) => setTope(e.target.value)}
          />
        </div>
        <Button size="sm" onClick={() => void guardar()} disabled={guardando}>
          {guardando ? t("comun.guardando") : t("enterpriseCobros.guardarConfig")}
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

  const [tipo, setTipo] = useState<TipoCobro>("cuota");
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
        tipo,
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

      {/* Se auto-oculta salvo para el directivo principal. */}
      <DelegacionCobros escuelaId={escuelaId} />

      <Card>
        <CardHead>
          <h2 className="text-sm font-bold">{t("enterpriseCobros.nuevoCobro")}</h2>
        </CardHead>
        <CardBody className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <Select label={t("enterpriseCobros.tipo")} value={tipo} onChange={(e) => setTipo(e.target.value as TipoCobro)}>
              <option value="cuota">{t("enterpriseCobros.tipoCuota")}</option>
              <option value="cooperadora">{t("enterpriseCobros.tipoCooperadora")}</option>
              <option value="aporte_solidario">{t("enterpriseCobros.tipoAporte")}</option>
            </Select>
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
                      <p className="text-sm font-semibold text-[var(--c-text)]">
                        {c.concepto}
                        {c.tipo && c.tipo !== "cuota" && (
                          <span className="ml-2 text-xs font-normal text-[var(--c-text-3)]">
                            {t(c.tipo === "cooperadora" ? "enterpriseCobros.tipoCooperadora" : "enterpriseCobros.tipoAporte")}
                          </span>
                        )}
                      </p>
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

      <ConfigCobros escuelaId={escuelaId} />

      <CooperadoraCard escuelaId={escuelaId} />

      <PasarelasConectadas escuelaId={escuelaId} />
    </div>
  );
}
