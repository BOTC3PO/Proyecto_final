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

  return (
    <div className="min-h-screen bg-[var(--c-bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">
        {/* Encabezado */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[var(--c-text)]">Economía</h1>
            <p className="text-sm text-[var(--c-muted)] mt-1">Tu tablero financiero educativo</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700">
            <span>🪙</span>
            <span>{economy.coins.toLocaleString('es-AR')}</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-[var(--c-border)]">
          {(['tablero', 'invertir', 'simulador', 'intercambio'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium capitalize border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-[var(--c-primary)] text-[var(--c-primary)]'
                  : 'border-transparent text-[var(--c-muted)] hover:text-[var(--c-text)]'
              }`}
            >
              {tab === 'tablero' ? 'Tablero' :
               tab === 'invertir' ? 'Invertir' :
               tab === 'simulador' ? 'Simulador' : 'Intercambio'}
            </button>
          ))}
        </div>

        {/* Tab: Tablero */}
        {activeTab === 'tablero' && (
          <section className="grid gap-5 lg:grid-cols-3">
            <div className="lg:col-span-2 bg-[var(--c-surface)] rounded-2xl shadow p-6">
              <h3 className="text-lg font-semibold text-[var(--c-text)]">Tablero Económico</h3>
              <p className="text-sm text-[var(--c-muted)]">Estado, tasas y ayudas simples para entender tu saldo.</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[var(--c-border)] p-4">
                  <p className="text-sm text-[var(--c-muted)]">Monedas disponibles</p>
                  <p
                    className={`text-3xl font-semibold text-[var(--c-primary)] ${
                      coinFeedback?.tone === "gain" ? "animate-pulse" : ""
                    }`}
                  >
                    {economy.coins} 🪙
                  </p>
                  <p className="text-xs text-gray-400 mt-1">Usalas para temas o intercambios.</p>
                  {saldoStatus === "loading" && (
                    <p className="text-xs text-[var(--c-muted)] animate-pulse">
                      Actualizando saldo...
                    </p>
                  )}
                  {coinFeedback ? (
                    <div
                      className={`mt-2 inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ${
                        coinFeedback.tone === "gain"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-rose-100 text-rose-600"
                      }`}
                    >
                      {coinFeedback.delta > 0 ? "+" : ""}
                      {coinFeedback.delta} 🪙 · {coinFeedback.label}
                    </div>
                  ) : null}
                </div>
                <div className="rounded-xl border border-[var(--c-border)] p-4">
                  <p className="text-sm text-[var(--c-muted)]">Moneda extranjera simulada</p>
                  <p className="text-3xl font-semibold text-[var(--c-success)]">{economy.foreignCoins} FX</p>
                  <p className="text-xs text-[var(--c-muted)] mt-1">Comprada a razón de {FOREIGN_EXCHANGE_RATE} monedas.</p>
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-[var(--c-bg)] p-4">
                  <p className="text-xs uppercase tracking-wide text-[var(--c-muted)]">
                    Ciclo económico
                  </p>
                  <p className={`text-lg font-semibold ${
                    cicloActivo?.tipo === "hiperinflacion" ? "text-red-700"
                    : cicloActivo?.tipo === "inflacion" ? "text-amber-700"
                    : cicloActivo?.tipo === "deflacion" ? "text-blue-700"
                    : "text-[var(--c-text)]"
                  }`}>
                    {cicloActivo
                      ? cicloActivo.tipo.charAt(0).toUpperCase() + cicloActivo.tipo.slice(1)
                      : economyStatus.label}
                  </p>
                  <p className="text-xs text-[var(--c-muted)] mt-1">
                    {cicloActivo
                      ? `Intensidad ${cicloActivo.intensidad}/10 · hasta ${
                          new Date(cicloActivo.fin).toLocaleDateString("es-AR")
                        }`
                      : economyStatus.description}
                  </p>
                </div>
                <div className="rounded-xl bg-[var(--c-bg)] p-4">
                  <p className="text-xs uppercase tracking-wide text-[var(--c-muted)]">Tasa plazo fijo</p>
                  <p className="text-lg font-semibold text-[var(--c-text)]">{fixedTermRate}% anual</p>
                  <p className="text-xs text-[var(--c-muted)] mt-1">Cuanto más alta la tasa, más interés ganás.</p>
                </div>
                <div className="rounded-xl bg-[var(--c-bg)] p-4">
                  <p className="text-xs uppercase tracking-wide text-[var(--c-muted)]">Tasa FCI</p>
                  <p className="text-lg font-semibold text-[var(--c-text)]">{fciRate}% mensual</p>
                  <p className="text-xs text-[var(--c-muted)] mt-1">Tasa variable: puede subir o bajar.</p>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-[var(--c-bg)] p-4">
                <p className="text-sm text-[var(--c-muted)]">Tema activo</p>
                <p className="text-lg font-semibold text-[var(--c-text)]">{themeStatus}</p>
              </div>
            </div>
            <div className="bg-[var(--c-surface)] rounded-2xl shadow p-6 space-y-4">
              <h3 className="text-lg font-semibold text-[var(--c-text)]">Compra de moneda extranjera</h3>
              <p className="text-sm text-[var(--c-muted)]">Simulá el cambio de tus monedas a FX.</p>
              <div className="space-y-2">
                <label className="text-sm text-[var(--c-muted)]" htmlFor="exchange-amount">
                  Monedas a cambiar
                </label>
                <input
                  id="exchange-amount"
                  type="number"
                  min={FOREIGN_EXCHANGE_RATE}
                  step={10}
                  value={exchangeAmount}
                  onChange={(event) => setExchangeAmount(Number(event.target.value))}
                  className="w-full rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm"
                />
                <p className="text-xs text-[var(--c-muted)]">
                  Recibís {(exchangeAmount / FOREIGN_EXCHANGE_RATE).toFixed(2)} FX.
                </p>
              </div>
              <button
                type="button"
                onClick={handleExchange}
                className="w-full rounded-lg bg-[var(--c-success)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
              >
                Comprar FX
              </button>
            </div>
          </section>
        )}

        {/* Tab: Invertir */}
        {activeTab === 'invertir' && (
          <section className="grid gap-5 lg:grid-cols-2">
            <div className="bg-[var(--c-surface)] rounded-2xl shadow p-6 space-y-4">
              <h3 className="text-lg font-semibold text-[var(--c-text)]">Plazo fijo educativo</h3>
              <p className="text-sm text-[var(--c-muted)]">
                Un plazo fijo guarda tu dinero por un tiempo. Durante esos días no se puede usar, y al final te paga intereses
                fijos.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                <label className="text-sm text-[var(--c-muted)]" htmlFor="fixed-term-amount">
                  Monto
                  <input
                    id="fixed-term-amount"
                    type="number"
                    min={0}
                    value={fixedTermAmount}
                    onChange={(event) => setFixedTermAmount(Number(event.target.value))}
                    className="mt-1 w-full rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm"
                  />
                </label>
                <label className="text-sm text-[var(--c-muted)]" htmlFor="fixed-term-rate">
                  Tasa anual (%)
                  <input
                    id="fixed-term-rate"
                    type="number"
                    min={0}
                    step={0.1}
                    value={fixedTermRate}
                    onChange={(event) => setFixedTermRate(Number(event.target.value))}
                    className="mt-1 w-full rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm"
                  />
                </label>
                <label className="text-sm text-[var(--c-muted)]" htmlFor="fixed-term-days">
                  Días bloqueado
                  <input
                    id="fixed-term-days"
                    type="number"
                    min={1}
                    value={fixedTermDays}
                    onChange={(event) => setFixedTermDays(Number(event.target.value))}
                    className="mt-1 w-full rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm"
                  />
                </label>
              </div>
              <div className="rounded-xl bg-[var(--c-bg)] p-4">
                <p className="text-sm text-[var(--c-muted)]">Interés estimado</p>
                <p className="text-2xl font-semibold text-[var(--c-primary)]">{formatMoney(fixedTermInterest)} 🪙</p>
                <p className="text-xs text-[var(--c-muted)] mt-1">
                  Total al finalizar: {formatMoney(fixedTermTotal)} 🪙. Tu dinero queda bloqueado hasta completar {fixedTermDays} días.
                </p>
              </div>
              <button
                type="button"
                onClick={handleInvertirPF}
                disabled={pfInvirtiendo || fixedTermAmount <= 0 ||
                  economy.coins < fixedTermAmount}
                className="w-full rounded-xl bg-blue-600 py-2.5 text-sm
                  font-semibold text-white hover:bg-blue-700
                  disabled:opacity-50 transition-colors"
              >
                {pfInvirtiendo ? "Abriendo..." : "Invertir en plazo fijo"}
              </button>
              {plazos.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase text-[var(--c-muted)]">
                    Mis plazos fijos activos
                  </p>
                  {plazos.map((pf) => {
                    const vence = new Date(pf.vence_at);
                    const vencio = new Date() >= vence;
                    return (
                      <div key={pf.id}
                        className="rounded-xl border border-[var(--c-border)] px-4 py-3">
                        <div className="flex items-center justify-between gap-3">
                          <div className="text-sm">
                            <p className="font-medium text-[var(--c-text)]">
                              {pf.monto} 🪙 · {pf.tasa_anual}% anual · {pf.dias} días
                            </p>
                            <p className="text-xs text-[var(--c-muted)]">
                              Vence: {vence.toLocaleDateString("es-AR")}
                              {" · "}Total: {pf.total.toFixed(2)} 🪙
                              {!vencio && (
                                <span className="text-amber-600 ml-1">
                                  (rescate anticipado: solo capital)
                                </span>
                              )}
                            </p>
                          </div>
                          <button
                            type="button"
                            disabled={rescatando === pf.id}
                            onClick={() => handleRescatar("plazo-fijo", pf.id)}
                            className={`shrink-0 rounded-lg px-3 py-1 text-xs
                              font-semibold transition-colors ${
                              vencio
                                ? "bg-emerald-600 text-white hover:bg-emerald-700"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                          >
                            {rescatando === pf.id ? "..." : vencio ? "Cobrar" : "Rescatar"}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="bg-[var(--c-surface)] rounded-2xl shadow p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-[var(--c-text)]">FCI de desbloqueo rápido</h3>
                <p className="text-sm text-[var(--c-muted)]">
                  Un fondo común de inversión (FCI) permite entrar y salir rápido. El rendimiento es variable, pero el rescate suele
                  ser en 24/48 hs.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <label className="text-sm text-[var(--c-muted)]" htmlFor="fci-amount">
                  Monto
                  <input
                    id="fci-amount"
                    type="number"
                    min={0}
                    value={fciAmount}
                    onChange={(event) => setFciAmount(Number(event.target.value))}
                    className="mt-1 w-full rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm"
                  />
                </label>
                <label className="text-sm text-[var(--c-muted)]" htmlFor="fci-rate">
                  Tasa mensual (%)
                  <input
                    id="fci-rate"
                    type="number"
                    min={0}
                    step={0.1}
                    value={fciRate}
                    onChange={(event) => setFciRate(Number(event.target.value))}
                    className="mt-1 w-full rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm"
                  />
                </label>
                <label className="text-sm text-[var(--c-muted)]" htmlFor="fci-days">
                  Días invertidos
                  <input
                    id="fci-days"
                    type="number"
                    min={1}
                    value={fciDays}
                    onChange={(event) => setFciDays(Number(event.target.value))}
                    className="mt-1 w-full rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm"
                  />
                </label>
              </div>
              <div className="rounded-xl bg-[var(--c-bg)] p-4">
                <p className="text-sm text-[var(--c-muted)]">Ganancia estimada</p>
                <p className="text-2xl font-semibold text-[var(--c-success)]">{formatMoney(fciInterest)} 🪙</p>
                <p className="text-xs text-[var(--c-muted)] mt-1">
                  Total si mantenés {fciDays} días: {formatMoney(fciTotal)} 🪙. Podés pedir el rescate y el dinero vuelve rápido.
                </p>
              </div>
              <button
                type="button"
                onClick={handleInvertirFCI}
                disabled={fciInvirtiendo || fciAmount <= 0 ||
                  economy.coins < fciAmount}
                className="w-full rounded-xl bg-emerald-600 py-2.5 text-sm
                  font-semibold text-white hover:bg-emerald-700
                  disabled:opacity-50 transition-colors"
              >
                {fciInvirtiendo ? "Abriendo..." : "Invertir en FCI"}
              </button>
              {fcis.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase text-[var(--c-muted)]">
                    Mis posiciones FCI activas
                  </p>
                  {fcis.map((fci) => (
                    <div key={fci.id}
                      className="rounded-xl border border-[var(--c-border)] px-4 py-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-sm">
                          <p className="font-medium text-[var(--c-text)]">
                            {fci.monto} 🪙 · {fci.tasa_mensual}% mensual · {fci.dias} días
                          </p>
                          <p className="text-xs text-[var(--c-muted)]">
                            Abierto: {new Date(fci.creado_at).toLocaleDateString("es-AR")}
                            {" · "}Proyectado: {fci.total.toFixed(2)} 🪙
                          </p>
                        </div>
                        <button
                          type="button"
                          disabled={rescatando === fci.id}
                          onClick={() => handleRescatar("fci", fci.id)}
                          className="shrink-0 rounded-lg bg-emerald-100 px-3 py-1
                            text-xs font-semibold text-emerald-700
                            hover:bg-emerald-200 transition-colors disabled:opacity-50"
                        >
                          {rescatando === fci.id ? "..." : "Rescatar"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {instrumentoMsg && (
              <p className={`text-sm col-span-2 ${
                instrumentoMsg.startsWith("✓")
                  ? "text-emerald-600"
                  : "text-red-500"
              }`}>
                {instrumentoMsg}
              </p>
            )}
          </section>
        )}

        {/* Tab: Simulador */}
        {activeTab === 'simulador' && (
          <div className="space-y-5">
            <section className="bg-[var(--c-surface)] rounded-2xl shadow p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-[var(--c-text)]">Simulador de eventos económicos</h3>
                <p className="text-sm text-[var(--c-muted)]">
                  Mini simulaciones "¿qué pasaría si...?" para practicar antes de activar eventos reales.
                </p>
              </div>
              <div className="grid gap-4">
                {ECONOMIC_SIMULATIONS.map((simulation) => {
                  const isOpen = openSimulationId === simulation.id;
                  return (
                    <div key={simulation.id} className="rounded-xl border border-[var(--c-border)] p-4">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-[var(--c-text)]">{simulation.title}</p>
                          <p className="text-xs text-[var(--c-muted)]">{simulation.question}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleToggleSimulation(simulation.id)}
                          className="rounded-lg bg-[var(--c-bg)] px-3 py-1.5 text-xs font-semibold text-[var(--c-muted)] hover:opacity-80"
                        >
                          {isOpen ? "Ocultar resultado" : "Ver resultado"}
                        </button>
                      </div>
                      {isOpen && (
                        <div className="mt-3 rounded-xl bg-[var(--c-bg)] p-4 text-xs text-[var(--c-muted)]">
                          <p className="font-semibold text-[var(--c-text)]">Impacto estimado</p>
                          <div className="mt-2 grid gap-2 sm:grid-cols-2">
                            <div className="rounded-lg bg-[var(--c-surface)] p-3">
                              <p className="text-[11px] uppercase tracking-wide text-[var(--c-muted)]">Saldo</p>
                              <p className="text-sm font-semibold text-[var(--c-text)]">
                                {formatDelta(simulation.impact.coinDelta, "🪙")}
                              </p>
                            </div>
                            <div className="rounded-lg bg-[var(--c-surface)] p-3">
                              <p className="text-[11px] uppercase tracking-wide text-[var(--c-muted)]">FX</p>
                              <p className="text-sm font-semibold text-[var(--c-text)]">
                                {formatDelta(simulation.impact.foreignCoinDelta, "FX")}
                              </p>
                            </div>
                            <div className="rounded-lg bg-[var(--c-surface)] p-3">
                              <p className="text-[11px] uppercase tracking-wide text-[var(--c-muted)]">Tasa plazo fijo</p>
                              <p className="text-sm font-semibold text-[var(--c-text)]">
                                {formatDelta(simulation.impact.fixedTermRateDelta, "% anual")}
                              </p>
                            </div>
                            <div className="rounded-lg bg-[var(--c-surface)] p-3">
                              <p className="text-[11px] uppercase tracking-wide text-[var(--c-muted)]">Tasa FCI</p>
                              <p className="text-sm font-semibold text-[var(--c-text)]">
                                {formatDelta(simulation.impact.fciRateDelta, "% mensual")}
                              </p>
                            </div>
                          </div>
                          <p className="mt-3 text-xs text-[var(--c-muted)]">{simulation.learning}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
            <section className="bg-[var(--c-surface)] rounded-2xl shadow p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-[var(--c-text)]">Mensajes educativos</h3>
                <p className="text-sm text-[var(--c-muted)]">
                  Tips rápidos para entender por qué suben o bajan tus monedas.
                </p>
              </div>
              {educationMessages.length === 0 ? (
                <p className="text-sm text-[var(--c-muted)]">Realizá una acción y aparecerán mensajes para ayudarte.</p>
              ) : (
                <div className="grid gap-3 md:grid-cols-2">
                  {educationMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`rounded-xl border p-4 ${
                        message.tone === "success"
                          ? "border-emerald-100 bg-emerald-50"
                          : message.tone === "warning"
                            ? "border-amber-100 bg-amber-50"
                            : "border-sky-100 bg-sky-50"
                      }`}
                    >
                      <p className="text-sm font-semibold text-[var(--c-text)]">{message.title}</p>
                      <p className="text-xs text-[var(--c-muted)] mt-1">{message.body}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        )}

        {/* Tab: Intercambio */}
        {activeTab === 'intercambio' && (
          <section className="bg-[var(--c-surface)] rounded-2xl shadow p-6 space-y-4">
            <h3 className="text-lg font-semibold text-[var(--c-text)]">Intercambio entre alumnos</h3>
            <p className="text-sm text-[var(--c-muted)]">Enviá monedas a compañeros de forma simple.</p>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-[var(--c-muted)]" htmlFor="transfer-to">
                  Destinatario
                </label>
                <input
                  id="transfer-to"
                  type="text"
                  value={transferTo}
                  onChange={(event) => setTransferTo(event.target.value)}
                  placeholder="Ej: Juan Pérez"
                  className="w-full rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-[var(--c-muted)]" htmlFor="transfer-amount">
                    Monto
                  </label>
                  <input
                    id="transfer-amount"
                    type="number"
                    min={1}
                    value={transferAmount}
                    onChange={(event) => setTransferAmount(Number(event.target.value))}
                    className="w-full rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm text-[var(--c-muted)]" htmlFor="transfer-note">
                    Nota (opcional)
                  </label>
                  <input
                    id="transfer-note"
                    type="text"
                    value={transferNote}
                    onChange={(event) => setTransferNote(event.target.value)}
                    placeholder="Gracias por ayudar"
                    className="w-full rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm"
                  />
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
