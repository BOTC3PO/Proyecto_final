import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../auth/use-auth';
import { useTheme } from '../theme/ThemeContext';
import { apiGet, apiPost } from '../lib/api';

type EducationMessage = {
  id: string;
  title: string;
  body: string;
  tone: "info" | "success" | "warning";
};

type CoinFeedback = {
  delta: number;
  label: string;
  tone: "gain" | "spend";
};

type SimulationScenario = {
  id: string;
  title: string;
  question: string;
  impact: {
    coinDelta: number;
    foreignCoinDelta: number;
    fixedTermRateDelta: number;
    fciRateDelta: number;
  };
  learning: string;
};

type SaldoResponse = {
  saldo: number;
  moneda: string;
  updatedAt: string;
};

type TransaccionItem = {
  id: string;
  tipo: "credito" | "debito";
  monto: number;
  moneda: string;
  motivo: string;
  createdAt: string;
};

type EconomyState = {
  coins: number;
  foreignCoins: number;
  ownedThemes: string[];
  activeTheme: string;
};

type CicloActivo = {
  tipo: string;
  tasa: number;
  intensidad: number;
  inicio: string;
  fin: string;
};

type PlazoFijo = {
  id: string;
  monto: number;
  tasa_anual: number;
  dias: number;
  interes: number;
  total: number;
  estado: string;
  creado_at: string;
  vence_at: string;
  rescatado_at: string | null;
};

type FciPosicion = {
  id: string;
  monto: number;
  tasa_mensual: number;
  dias: number;
  interes: number;
  total: number;
  estado: string;
  creado_at: string;
  vence_at: string;
  rescatado_at: string | null;
};

const ECONOMIC_SIMULATIONS: SimulationScenario[] = [
  {
    id: "sim-demanda",
    title: "Demanda inesperada",
    question: "¿Qué pasaría si sube la demanda por un producto escolar clave?",
    impact: {
      coinDelta: -15,
      foreignCoinDelta: 0,
      fixedTermRateDelta: 3,
      fciRateDelta: 1
    },
    learning: "Cuando la demanda sube, los precios suben y conviene revisar el ahorro."
  },
  {
    id: "sim-dolar",
    title: "Movimiento del tipo de cambio",
    question: "¿Qué pasaría si el tipo de cambio se encarece en una semana?",
    impact: {
      coinDelta: -10,
      foreignCoinDelta: 0.2,
      fixedTermRateDelta: 0,
      fciRateDelta: -1
    },
    learning: "Un cambio fuerte en FX afecta decisiones de compra y ahorro."
  },
  {
    id: "sim-confianza",
    title: "Confianza en la economía",
    question: "¿Qué pasaría si la confianza mejora y baja la urgencia de gastar?",
    impact: {
      coinDelta: 12,
      foreignCoinDelta: 0,
      fixedTermRateDelta: -2,
      fciRateDelta: 1
    },
    learning: "Más confianza suele impulsar el ahorro y mejorar el saldo disponible."
  }
];

const FOREIGN_EXCHANGE_RATE = 100;

const defaultEconomyState: EconomyState = {
  coins: 120,
  foreignCoins: 0,
  ownedThemes: ["clasico"],
  activeTheme: "clasico",
};

const formatMoney = (value: number) =>
  value.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const formatDelta = (value: number, suffix: string) =>
  `${value > 0 ? '+' : ''}${value} ${suffix}`;

export default function Economia() {
  const { user } = useAuth();
  const { theme, availableThemes } = useTheme();

  const [activeTab, setActiveTab] = useState<'tablero' | 'invertir' | 'simulador' | 'intercambio'>('tablero');

  const [economy, setEconomy] = useState<EconomyState>(defaultEconomyState);
  const [exchangeAmount, setExchangeAmount] = useState(100);
  const [fixedTermAmount, setFixedTermAmount] = useState(15000);
  const [fixedTermRate, setFixedTermRate] = useState(75);
  const [fixedTermDays, setFixedTermDays] = useState(30);
  const [fciAmount, setFciAmount] = useState(8000);
  const [fciRate, setFciRate] = useState(4);
  const [fciDays, setFciDays] = useState(10);
  const [educationMessages, setEducationMessages] = useState<EducationMessage[]>([]);
  const [coinFeedback, setCoinFeedback] = useState<CoinFeedback | null>(null);
  const [openSimulationId, setOpenSimulationId] = useState<string | null>(null);
  const [saldoStatus, setSaldoStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [cicloActivo, setCicloActivo] = useState<CicloActivo | null>(null);
  const [plazos, setPlazos] = useState<PlazoFijo[]>([]);
  const [fcis, setFcis] = useState<FciPosicion[]>([]);
  const [pfInvirtiendo, setPfInvirtiendo] = useState(false);
  const [fciInvirtiendo, setFciInvirtiendo] = useState(false);
  const [rescatando, setRescatando] = useState<string | null>(null);
  const [instrumentoMsg, setInstrumentoMsg] = useState<string | null>(null);
  const [transferTo, setTransferTo] = useState('');
  const [transferAmount, setTransferAmount] = useState(0);
  const [transferNote, setTransferNote] = useState('');

  type ThemeState = { ownedThemes: string[]; activeTheme: string };
  const THEME_STORAGE_KEY = "temas-alumno";

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as ThemeState;
      setEconomy((prev) => ({
        ...prev,
        ownedThemes: parsed.ownedThemes ?? prev.ownedThemes,
        activeTheme: parsed.activeTheme ?? prev.activeTheme,
      }));
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      THEME_STORAGE_KEY,
      JSON.stringify({
        ownedThemes: economy.ownedThemes,
        activeTheme: economy.activeTheme,
      })
    );
  }, [economy.ownedThemes, economy.activeTheme]);

  useEffect(() => {
    if (!user?.id) return;
    let active = true;
    setSaldoStatus("loading");
    Promise.all([
      apiGet<SaldoResponse>(`/api/economia/saldos?usuarioId=${user.id}`),
      apiGet<{ items: TransaccionItem[] }>(
        `/api/economia/transacciones?usuarioId=${user.id}&limit=10`
      ),
    ])
      .then(([saldoResponse]) => {
        if (!active) return;
        setEconomy((prev) => ({ ...prev, coins: saldoResponse.saldo }));
        setSaldoStatus("ready");
      })
      .catch(() => {
        if (!active) return;
        setSaldoStatus("error");
      });
    apiGet<{ ciclo: CicloActivo; ajuste: { recompensaFactor: number; precioFactor: number } }>(
      "/api/economia/ciclo-activo"
    ).then((data) => {
      if (!active) return;
      setCicloActivo(data.ciclo);
      if (data.ciclo.tasa > 0) {
        setFixedTermRate(
          parseFloat((data.ciclo.tasa * 100 * 365).toFixed(1))
        );
        setFciRate(
          parseFloat((data.ciclo.tasa * 100 * 30).toFixed(1))
        );
      }
    }).catch(() => {});
    return () => { active = false; };
  }, [user?.id]);

  useEffect(() => {
    if (!coinFeedback) return;
    const timeout = window.setTimeout(() => {
      setCoinFeedback(null);
    }, 4000);
    return () => window.clearTimeout(timeout);
  }, [coinFeedback]);

  useEffect(() => {
    if (!user?.id) return;
    let active = true;
    Promise.all([
      apiGet<{ items: PlazoFijo[] }>("/api/instrumentos/plazo-fijo"),
      apiGet<{ items: FciPosicion[] }>("/api/instrumentos/fci"),
    ])
      .then(([pfData, fciData]) => {
        if (!active) return;
        setPlazos(pfData.items.filter((p) => p.estado === "activo"));
        setFcis(fciData.items.filter((p) => p.estado === "activo"));
      })
      .catch(() => {});
    return () => { active = false; };
  }, [user?.id]);

  const economyStatus = useMemo(() => {
    if (economy.coins >= 200) return { label: "Súper sólida", description: "Tenés un ahorro alto para gastar sin apuro." };
    if (economy.coins >= 100) return { label: "Estable", description: "Podés gastar un poco y seguir ahorrando." };
    return { label: "En recuperación", description: "Conviene ganar monedas antes de comprar." };
  }, [economy.coins]);

  const fixedTermInterest = useMemo(() => {
    const amount = Math.max(0, fixedTermAmount);
    const rate = Math.max(0, fixedTermRate);
    const days = Math.max(1, fixedTermDays);
    return (amount * (rate / 100) * (days / 365));
  }, [fixedTermAmount, fixedTermRate, fixedTermDays]);

  const fixedTermTotal = useMemo(() => fixedTermAmount + fixedTermInterest, [fixedTermAmount, fixedTermInterest]);

  const fciInterest = useMemo(() => {
    const amount = Math.max(0, fciAmount);
    const rate = Math.max(0, fciRate);
    const days = Math.max(1, fciDays);
    return amount * (rate / 100) * (days / 30);
  }, [fciAmount, fciRate, fciDays]);

  const fciTotal = useMemo(() => fciAmount + fciInterest, [fciAmount, fciInterest]);

  const themeStatus = useMemo(() => {
    const activeTheme = availableThemes.find((item) => item.id === theme);
    return activeTheme ? activeTheme.name : "Tema personalizado";
  }, [theme, availableThemes]);

  const pushEducationMessage = (message: Omit<EducationMessage, "id">) => {
    setEducationMessages((prev) => [{ ...message, id: crypto.randomUUID() }, ...prev].slice(0, 4));
  };

  const handleInvertirPF = async () => {
    if (fixedTermAmount <= 0 || fixedTermDays < 1) return;
    if (economy.coins < fixedTermAmount) {
      setInstrumentoMsg(
        `Saldo insuficiente. Tenés ${economy.coins} 🪙 pero necesitás ${fixedTermAmount}.`
      );
      return;
    }
    setPfInvirtiendo(true);
    setInstrumentoMsg(null);
    try {
      const result = await apiPost<{
        id: string; interes: number; total: number;
        venceAt: string; saldoRestante: number;
      }>("/api/instrumentos/plazo-fijo", {
        monto: fixedTermAmount,
        tasaAnual: fixedTermRate,
        dias: fixedTermDays,
      });
      setEconomy((prev) => ({
        ...prev,
        coins: result.saldoRestante,
      }));
      setPlazos((prev) => [...prev, {
        id: result.id,
        monto: fixedTermAmount,
        tasa_anual: fixedTermRate,
        dias: fixedTermDays,
        interes: result.interes,
        total: result.total,
        estado: "activo",
        creado_at: new Date().toISOString(),
        vence_at: result.venceAt,
        rescatado_at: null,
      }]);
      setInstrumentoMsg(
        `✓ Plazo fijo abierto. Vence el ${new Date(result.venceAt).toLocaleDateString("es-AR")}. ` +
        `Recibirás ${result.total.toFixed(2)} 🪙.`
      );
      setCoinFeedback({
        delta: -fixedTermAmount,
        label: `Plazo fijo: ${fixedTermDays} días`,
        tone: "spend",
      });
    } catch (err) {
      setInstrumentoMsg(
        err instanceof Error ? err.message : "No se pudo abrir el plazo fijo."
      );
    } finally {
      setPfInvirtiendo(false);
    }
  };

  const handleInvertirFCI = async () => {
    if (fciAmount <= 0 || fciDays < 1) return;
    if (economy.coins < fciAmount) {
      setInstrumentoMsg(
        `Saldo insuficiente. Tenés ${economy.coins} 🪙 pero necesitás ${fciAmount}.`
      );
      return;
    }
    setFciInvirtiendo(true);
    setInstrumentoMsg(null);
    try {
      const result = await apiPost<{
        id: string; interes: number; total: number; tasaMensual: number;
        venceAt: string; saldoRestante: number; cicloActual: string;
      }>("/api/instrumentos/fci", {
        monto: fciAmount,
        dias: fciDays,
      });
      setEconomy((prev) => ({
        ...prev,
        coins: result.saldoRestante,
      }));
      setFciRate(result.tasaMensual);
      setFcis((prev) => [...prev, {
        id: result.id,
        monto: fciAmount,
        tasa_mensual: result.tasaMensual,
        dias: fciDays,
        interes: result.interes,
        total: result.total,
        estado: "activo",
        creado_at: new Date().toISOString(),
        vence_at: result.venceAt,
        rescatado_at: null,
      }]);
      setInstrumentoMsg(
        `✓ FCI abierto a tasa ${result.tasaMensual}% mensual ` +
        `(ciclo: ${result.cicloActual}). Podés rescatar en cualquier momento.`
      );
      setCoinFeedback({
        delta: -fciAmount,
        label: `FCI: ${fciDays} días`,
        tone: "spend",
      });
    } catch (err) {
      setInstrumentoMsg(
        err instanceof Error ? err.message : "No se pudo abrir el FCI."
      );
    } finally {
      setFciInvirtiendo(false);
    }
  };

  const handleRescatar = async (
    tipo: "plazo-fijo" | "fci",
    instrumentoId: string
  ) => {
    setRescatando(instrumentoId);
    setInstrumentoMsg(null);
    try {
      const result = await apiPost<{
        ok: boolean; montoRescatado: number;
        saldoNuevo: number; mensaje: string;
      }>(`/api/instrumentos/${tipo}/${instrumentoId}/rescatar`, {});

      setEconomy((prev) => ({ ...prev, coins: result.saldoNuevo }));
      if (tipo === "plazo-fijo") {
        setPlazos((prev) => prev.filter((p) => p.id !== instrumentoId));
      } else {
        setFcis((prev) => prev.filter((p) => p.id !== instrumentoId));
      }
      setInstrumentoMsg(result.mensaje);
      setCoinFeedback({
        delta: result.montoRescatado,
        label: `Rescate ${tipo === "plazo-fijo" ? "PF" : "FCI"}`,
        tone: "gain",
      });
    } catch (err) {
      setInstrumentoMsg(
        err instanceof Error ? err.message : "No se pudo rescatar."
      );
    } finally {
      setRescatando(null);
    }
  };

  const handleExchange = () => {
    if (exchangeAmount < FOREIGN_EXCHANGE_RATE) return;
    setEconomy((prev) => {
      if (exchangeAmount > prev.coins) return prev;
      const foreignValue = Number((exchangeAmount / FOREIGN_EXCHANGE_RATE).toFixed(2));
      setCoinFeedback({
        delta: -exchangeAmount,
        label: `Convertiste ${exchangeAmount} 🪙 a ${foreignValue} FX.`,
        tone: "spend"
      });
      pushEducationMessage({
        title: "Cambio de moneda",
        body: `Aprendés que las monedas tienen valor de cambio: ${FOREIGN_EXCHANGE_RATE} 🪙 = 1 FX.`,
        tone: "info"
      });
      return {
        ...prev,
        coins: prev.coins - exchangeAmount,
        foreignCoins: Number((prev.foreignCoins + foreignValue).toFixed(2))
      };
    });
  };

  const handleToggleSimulation = (simulationId: string) => {
    setOpenSimulationId((prev) => (prev === simulationId ? null : simulationId));
  };

  const handleTransfer = async () => {
    if (!transferTo.trim() || transferAmount <= 0) {
      pushEducationMessage({
        title: 'Datos incompletos',
        body: 'Completá el destinatario y el monto para enviar monedas.',
        tone: 'warning',
      });
      return;
    }
    if (economy.coins < transferAmount) {
      pushEducationMessage({
        title: 'Saldo insuficiente',
        body: `Tenés ${economy.coins} 🪙 pero querés enviar ${transferAmount}.`,
        tone: 'warning',
      });
      return;
    }
    try {
      await apiPost('/api/economia/intercambios', {
        receptorUsername: transferTo.trim(),
        monto: transferAmount,
        nota: transferNote.trim() || undefined,
      });
      setEconomy((prev) => ({ ...prev, coins: prev.coins - transferAmount }));
      pushEducationMessage({
        title: '¡Enviado!',
        body: `Enviaste ${transferAmount} 🪙 a ${transferTo}.`,
        tone: 'success',
      });
      setTransferTo('');
      setTransferAmount(0);
      setTransferNote('');
      window.dispatchEvent(new CustomEvent('vb:coins-updated'));
    } catch (err) {
      pushEducationMessage({
        title: 'Error al enviar',
        body: err instanceof Error ? err.message : 'No se pudo completar el envío.',
        tone: 'warning',
      });
    }
  };

  return (
    <div className="page-root min-h-screen bg-[var(--c-bg)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">

        {/* Encabezado */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-[var(--c-text)]">Economía</h1>
            <p className="text-sm text-[var(--c-muted)] mt-1">Tu tablero financiero educativo</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--c-warning)_35%,transparent)] bg-[color-mix(in_srgb,var(--c-warning)_10%,transparent)] px-3 py-1.5 flex-shrink-0">
            <span aria-hidden="true">🪙</span>
            <span className="text-sm font-semibold text-[var(--c-warning)]">
              {economy.coins.toLocaleString('es-AR')}
            </span>
          </div>
        </div>

        {/* Resumen rápido — siempre visible */}
        {cicloActivo && (
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-4">
              <p className="text-xs text-[var(--c-muted)] mb-1">Ciclo económico</p>
              <p className="text-base font-semibold text-[var(--c-text)] capitalize">{cicloActivo.tipo}</p>
              <p className="text-xs text-[var(--c-muted)] mt-0.5">Intensidad {cicloActivo.intensidad}/10</p>
            </div>
            <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-4">
              <p className="text-xs text-[var(--c-muted)] mb-1">Tasa plazo fijo</p>
              <p className="text-base font-semibold text-[var(--c-text)]">{cicloActivo.tasa}% anual</p>
              <p className="text-xs text-[var(--c-muted)] mt-0.5">Tasa variable</p>
            </div>
            <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-4">
              <p className="text-xs text-[var(--c-muted)] mb-1">Moneda extranjera</p>
              <p className="text-base font-semibold text-[var(--c-text)]">{economy.foreignCoins} FX</p>
              <p className="text-xs text-[var(--c-muted)] mt-0.5">1 FX = 100 monedas</p>
            </div>
          </div>
        )}

        {/* Feedback de monedas */}
        {coinFeedback && (
          <div className={`rounded-xl border px-4 py-3 text-sm font-medium ${
            coinFeedback.tone === 'gain'
              ? 'border-[color-mix(in_srgb,var(--c-success)_25%,transparent)] bg-[color-mix(in_srgb,var(--c-success)_8%,transparent)] text-[var(--c-success)]'
              : 'border-[color-mix(in_srgb,var(--c-danger)_25%,transparent)] bg-[color-mix(in_srgb,var(--c-danger)_8%,transparent)] text-[var(--c-danger)]'
          }`}>
            {coinFeedback.tone === 'gain' ? '+' : ''}{coinFeedback.delta} — {coinFeedback.label}
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-1 border-b border-[var(--c-border)]">
          {([
            { key: 'tablero',     label: 'Tablero' },
            { key: 'invertir',    label: 'Invertir' },
            { key: 'simulador',   label: 'Simulador' },
            { key: 'intercambio', label: 'Intercambio' },
          ] as const).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === key
                  ? 'border-[var(--c-primary)] text-[var(--c-primary)]'
                  : 'border-transparent text-[var(--c-muted)] hover:text-[var(--c-text)]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* ── TAB: TABLERO ─────────────────────────────────────────── */}
        {activeTab === 'tablero' && (
          <div className="grid gap-4 lg:grid-cols-2">

            {/* Tablero económico */}
            <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[var(--c-text)]">Tablero Económico</h3>
                {cicloActivo && (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[color-mix(in_srgb,var(--c-success)_12%,transparent)] text-[var(--c-success)]">
                    Ciclo {cicloActivo.tipo}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[var(--c-border)]">
                <span className="text-xs text-[var(--c-muted)]">Monedas disponibles</span>
                <span className="text-sm font-semibold text-[var(--c-text)]">
                  {economy.coins.toLocaleString('es-AR')} 🪙
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[var(--c-border)]">
                <span className="text-xs text-[var(--c-muted)]">Moneda extranjera</span>
                <span className="text-sm font-semibold text-[var(--c-text)]">{economy.foreignCoins} FX</span>
              </div>
              {cicloActivo && (
                <>
                  <div className="flex items-center justify-between py-2 border-b border-[var(--c-border)]">
                    <span className="text-xs text-[var(--c-muted)]">Tasa plazo fijo</span>
                    <span className="text-sm font-semibold text-[var(--c-text)]">{cicloActivo.tasa}% anual</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-xs text-[var(--c-muted)]">Vigencia del ciclo</span>
                    <span className="text-xs text-[var(--c-muted)]">
                      hasta {new Date(cicloActivo.fin).toLocaleDateString('es-AR')}
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Compra de moneda extranjera */}
            <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-5 space-y-4">
              <h3 className="text-sm font-semibold text-[var(--c-text)]">Compra de moneda extranjera</h3>
              <p className="text-xs text-[var(--c-muted)]">
                Simulá el cambio de tus monedas a FX. Tipo de cambio: 100 monedas = 1 FX.
              </p>
              <div>
                <label className="text-xs text-[var(--c-muted)] block mb-1.5">Monedas a cambiar</label>
                <input
                  type="number"
                  min={100}
                  step={100}
                  value={exchangeAmount}
                  onChange={(e) => setExchangeAmount(Number(e.target.value))}
                  className="w-full rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                />
                <p className="text-xs text-[var(--c-muted)] mt-1.5">
                  Recibís: {Math.floor(exchangeAmount / 100)} FX
                </p>
              </div>
              <button
                onClick={handleExchange}
                className="w-full rounded-xl bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Comprar FX
              </button>
            </div>
          </div>
        )}

        {/* ── TAB: INVERTIR ────────────────────────────────────────── */}
        {activeTab === 'invertir' && (
          <div className="grid gap-4 lg:grid-cols-2">

            {/* Plazo fijo */}
            <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-5 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-[var(--c-text)]">Plazo fijo educativo</h3>
                <p className="text-xs text-[var(--c-muted)] mt-0.5">
                  Bloqueá tus monedas por un tiempo y ganá intereses.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Monto', value: fixedTermAmount, set: setFixedTermAmount, min: 100 },
                  { label: 'Tasa % anual', value: fixedTermRate, set: setFixedTermRate, min: 1 },
                  { label: 'Días', value: fixedTermDays, set: setFixedTermDays, min: 1 },
                ].map(({ label, value, set, min }) => (
                  <div key={label}>
                    <label className="text-[10px] text-[var(--c-muted)] block mb-1">{label}</label>
                    <input
                      type="number" min={min} value={value}
                      onChange={(e) => set(Number(e.target.value))}
                      className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1.5 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                    />
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-[var(--c-bg)] border border-[var(--c-border)] px-4 py-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[var(--c-muted)]">Interés estimado</span>
                  <span className="font-semibold text-[var(--c-success)]">
                    🪙 {fixedTermInterest.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[var(--c-muted)]">Total al vencer</span>
                  <span className="font-semibold text-[var(--c-text)]">
                    🪙 {fixedTermTotal.toFixed(2)}
                  </span>
                </div>
              </div>
              <button
                onClick={handleInvertirPF}
                disabled={pfInvirtiendo}
                className="w-full rounded-xl bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-40 transition-opacity"
              >
                {pfInvirtiendo ? 'Invirtiendo...' : 'Invertir en plazo fijo'}
              </button>
              {plazos.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[var(--c-border)]">
                  <p className="text-xs font-medium text-[var(--c-muted)]">Plazos activos</p>
                  {plazos.map((p) => (
                    <div key={p.id} className="flex items-center justify-between text-xs">
                      <span className="text-[var(--c-text)]">🪙 {p.monto} · {p.dias}d · {p.tasa_anual}%</span>
                      {p.estado === 'activo' && (
                        <button
                          onClick={() => handleRescatar('plazo-fijo', p.id)}
                          disabled={rescatando === p.id}
                          className="text-[var(--c-primary)] hover:underline disabled:opacity-40"
                        >
                          {rescatando === p.id ? '...' : 'Rescatar'}
                        </button>
                      )}
                      {p.estado !== 'activo' && (
                        <span className="text-[var(--c-muted)]">{p.estado}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {instrumentoMsg && <p className="text-xs text-[var(--c-success)]">{instrumentoMsg}</p>}
            </div>

            {/* FCI */}
            <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-5 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-[var(--c-text)]">FCI de desbloqueo rápido</h3>
                <p className="text-xs text-[var(--c-muted)] mt-0.5">
                  Rendimiento variable. Rescate en 24hs.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Monto', value: fciAmount, set: setFciAmount, min: 100 },
                  { label: 'Tasa % mensual', value: fciRate, set: setFciRate, min: 1 },
                  { label: 'Días', value: fciDays, set: setFciDays, min: 1 },
                ].map(({ label, value, set, min }) => (
                  <div key={label}>
                    <label className="text-[10px] text-[var(--c-muted)] block mb-1">{label}</label>
                    <input
                      type="number" min={min} value={value}
                      onChange={(e) => set(Number(e.target.value))}
                      className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1.5 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                    />
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-[var(--c-bg)] border border-[var(--c-border)] px-4 py-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[var(--c-muted)]">Ganancia estimada</span>
                  <span className="font-semibold text-[var(--c-success)]">
                    🪙 {fciInterest.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[var(--c-muted)]">Total al vencer</span>
                  <span className="font-semibold text-[var(--c-text)]">
                    🪙 {fciTotal.toFixed(2)}
                  </span>
                </div>
              </div>
              <button
                onClick={handleInvertirFCI}
                disabled={fciInvirtiendo}
                className="w-full rounded-xl bg-[var(--c-success)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-40 transition-opacity"
              >
                {fciInvirtiendo ? 'Invirtiendo...' : 'Invertir en FCI'}
              </button>
              {fcis.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[var(--c-border)]">
                  <p className="text-xs font-medium text-[var(--c-muted)]">Posiciones activas</p>
                  {fcis.map((f) => (
                    <div key={f.id} className="flex items-center justify-between text-xs">
                      <span className="text-[var(--c-text)]">🪙 {f.monto} · {f.dias}d · {f.tasa_mensual}%m</span>
                      {f.estado === 'activo' && (
                        <button
                          onClick={() => handleRescatar('fci', f.id)}
                          disabled={rescatando === f.id}
                          className="text-[var(--c-primary)] hover:underline disabled:opacity-40"
                        >
                          {rescatando === f.id ? '...' : 'Rescatar'}
                        </button>
                      )}
                      {f.estado !== 'activo' && (
                        <span className="text-[var(--c-muted)]">{f.estado}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── TAB: SIMULADOR ───────────────────────────────────────── */}
        {activeTab === 'simulador' && (
          <div className="space-y-4">
            <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-5 space-y-3">
              <div>
                <h3 className="text-sm font-semibold text-[var(--c-text)]">Simulador de eventos económicos</h3>
                <p className="text-xs text-[var(--c-muted)] mt-0.5">
                  Mini-simulaciones "¿qué pasaría si...?" para practicar antes de activar eventos reales.
                </p>
              </div>
              {ECONOMIC_SIMULATIONS.map((scenario) => (
                <div key={scenario.id} className="border border-[var(--c-border)] rounded-xl overflow-hidden">
                  <button
                    onClick={() => handleToggleSimulation(scenario.id)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-[var(--c-bg)] transition-colors"
                  >
                    <div>
                      <p className="text-sm font-medium text-[var(--c-text)]">{scenario.title}</p>
                      <p className="text-xs text-[var(--c-muted)] mt-0.5">{scenario.question}</p>
                    </div>
                    <span className="text-xs text-[var(--c-primary)] flex-shrink-0 ml-3">
                      {openSimulationId === scenario.id ? 'Ocultar' : 'Ver resultado'}
                    </span>
                  </button>
                  {openSimulationId === scenario.id && (
                    <div className="px-4 py-3 border-t border-[var(--c-border)] bg-[var(--c-bg)] space-y-2">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {scenario.impact.coinDelta !== 0 && (
                          <div className={`rounded-lg px-3 py-2 ${scenario.impact.coinDelta > 0 ? 'bg-[color-mix(in_srgb,var(--c-success)_10%,transparent)] text-[var(--c-success)]' : 'bg-[color-mix(in_srgb,var(--c-danger)_10%,transparent)] text-[var(--c-danger)]'}`}>
                            Monedas: {scenario.impact.coinDelta > 0 ? '+' : ''}{scenario.impact.coinDelta}
                          </div>
                        )}
                        {scenario.impact.foreignCoinDelta !== 0 && (
                          <div className="rounded-lg px-3 py-2 bg-[color-mix(in_srgb,var(--c-accent)_10%,transparent)] text-[var(--c-accent)]">
                            FX: {scenario.impact.foreignCoinDelta > 0 ? '+' : ''}{scenario.impact.foreignCoinDelta}
                          </div>
                        )}
                        {scenario.impact.fixedTermRateDelta !== 0 && (
                          <div className="rounded-lg px-3 py-2 bg-[color-mix(in_srgb,var(--c-warning)_10%,transparent)] text-[var(--c-warning)]">
                            Tasa PF: {scenario.impact.fixedTermRateDelta > 0 ? '+' : ''}{scenario.impact.fixedTermRateDelta}%
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-[var(--c-muted)] italic">{scenario.learning}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mensajes educativos */}
            {educationMessages.length > 0 && (
              <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-5 space-y-3">
                <h3 className="text-sm font-semibold text-[var(--c-text)]">Mensajes educativos</h3>
                {educationMessages.slice(-3).map((msg) => (
                  <div
                    key={msg.id}
                    className={`rounded-xl px-4 py-3 text-xs ${
                      msg.tone === 'success'
                        ? 'bg-[color-mix(in_srgb,var(--c-success)_10%,transparent)] text-[var(--c-success)]'
                        : msg.tone === 'warning'
                        ? 'bg-[color-mix(in_srgb,var(--c-warning)_10%,transparent)] text-[var(--c-warning)]'
                        : 'bg-[color-mix(in_srgb,var(--c-primary)_8%,transparent)] text-[var(--c-primary)]'
                    }`}
                  >
                    <p className="font-semibold">{msg.title}</p>
                    <p className="mt-0.5">{msg.body}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── TAB: INTERCAMBIO ─────────────────────────────────────── */}
        {activeTab === 'intercambio' && (
          <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-5 space-y-4 max-w-md">
            <div>
              <h3 className="text-sm font-semibold text-[var(--c-text)]">Intercambio entre alumnos</h3>
              <p className="text-xs text-[var(--c-muted)] mt-0.5">
                Enviá monedas a compañeros de forma simple.
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-[var(--c-muted)] block mb-1.5">Destinatario</label>
                <input
                  type="text"
                  placeholder="Ej: Juan Pérez"
                  value={transferTo}
                  onChange={(e) => setTransferTo(e.target.value)}
                  className="w-full rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm placeholder:text-[var(--c-muted)] focus:outline-none focus:border-[var(--c-primary)]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-[var(--c-muted)] block mb-1.5">Monto</label>
                  <input
                    type="number" min={1} value={transferAmount}
                    onChange={(e) => setTransferAmount(Number(e.target.value))}
                    className="w-full rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </div>
                <div>
                  <label className="text-xs text-[var(--c-muted)] block mb-1.5">Nota (opcional)</label>
                  <input
                    type="text"
                    placeholder="Gracias por ayudar"
                    value={transferNote}
                    onChange={(e) => setTransferNote(e.target.value)}
                    className="w-full rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm placeholder:text-[var(--c-muted)] focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </div>
              </div>
            </div>
            {/* Botón de envío */}
            <button
              onClick={handleTransfer}
              disabled={!transferTo.trim() || transferAmount <= 0 || economy.coins < transferAmount}
              className="w-full rounded-xl bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-40 transition-opacity"
            >
              Enviar {transferAmount > 0 ? `${transferAmount} 🪙` : 'monedas'}
            </button>

            {/* Saldo disponible */}
            <p className="text-xs text-[var(--c-muted)] text-center">
              Disponible: {economy.coins.toLocaleString('es-AR')} 🪙
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
