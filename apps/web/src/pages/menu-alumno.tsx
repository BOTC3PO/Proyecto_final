import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Award, Bell, Clock3, GraduationCap, Trophy, UserCircle2 } from "lucide-react";
import { useAuth } from "../auth/use-auth";
import { apiGet } from "../lib/api";
import type { Module } from "../domain/module/module.types";

interface Student {
  name: string;
  initials: string;
  role: string;
}

interface NextClassInfo {
  title: string;
  time: string;
}

interface DashboardProps {
  student: Student;
  nextClass: NextClassInfo;
}

type ProgressItem = {
  moduloId: string;
  status: "iniciado" | "en_progreso" | "completado";
};

type ProgressUnlock = {
  moduloId: string;
  isLocked: boolean;
  missingDependencies: string[];
};

type ProgressResponse = {
  items: ProgressItem[];
  unlocks: ProgressUnlock[];
};

type StoreItem = {
  id: string;
  name: string;
  description: string;
  price: number;
};

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

type EconomyState = {
  coins: number;
  foreignCoins: number;
  ownedThemes: string[];
  activeTheme: string;
};

const STORE_ITEMS: StoreItem[] = [
  { id: "clasico", name: "Tema clásico", description: "Diseño limpio y familiar.", price: 0 },
  { id: "aurora", name: "Tema aurora", description: "Paleta suave con gradientes cálidos.", price: 40 },
  { id: "nocturno", name: "Tema nocturno", description: "Colores oscuros para modo noche.", price: 55 },
  { id: "vibrante", name: "Tema vibrante", description: "Accentos coloridos para destacar logros.", price: 65 }
];

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

const ECONOMY_STORAGE_KEY = "economia-alumno";
const FOREIGN_EXCHANGE_RATE = 100;

const defaultEconomyState: EconomyState = {
  coins: 120,
  foreignCoins: 0,
  ownedThemes: ["clasico"],
  activeTheme: "clasico",
};

const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = "" }) => (
  <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const ProfileCard: React.FC<{ student: Student }> = ({ student }) => (
  <div className="bg-white rounded-2xl shadow flex flex-wrap items-center gap-4 p-6">
    <div className="w-14 h-14 rounded-full bg-blue-600 text-white grid place-content-center font-semibold select-none">
      {student.initials}
    </div>
    <div className="flex-1 min-w-[200px]">
      <h2 className="text-xl font-semibold">{student.name}</h2>
      <p className="text-gray-600">{student.role}</p>
    </div>
    <div className="flex items-center gap-5 text-gray-800">
      <button className="p-2" title="Notificaciones" aria-label="Notificaciones">
        <Bell className="h-6 w-6" aria-hidden="true" />
      </button>
      <Link className="flex items-center gap-2 hover:underline" to="/progreso">
        <UserCircle2 className="h-6 w-6" />
        Perfil
      </Link>
    </div>
  </div>
);

const InfoCard: React.FC<{ icon: React.ReactNode; label: string; value: string | number }> = ({ icon, label, value }) => (
  <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4">
    <div className="h-12 w-12 rounded-full border border-gray-200 grid place-content-center text-gray-700">
      {icon}
    </div>
    <div>
      <p className="text-gray-500">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

const ProgressBar: React.FC<{ percent: number; label?: string }> = ({
  percent,
  label = "Progreso general de la próxima clase"
}) => {
  const clamped = Math.max(0, Math.min(100, Math.round(percent)));
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full border border-gray-200 grid place-content-center text-gray-700">
          <GraduationCap className="h-6 w-6" />
        </div>
        <p className="text-gray-600">{label}</p>
      </div>
      <div className="mt-4 h-3 w-80 max-w-full bg-gray-200 rounded">
        <div className="h-3 bg-gray-400 rounded" style={{ width: `${clamped}%` }} />
      </div>
    </div>
  );
};

const formatMoney = (value: number) =>
  value.toLocaleString("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const formatDelta = (value: number, suffix: string) => `${value > 0 ? "+" : ""}${value} ${suffix}`;

export const StudentDashboard: React.FC<DashboardProps> = ({ student, nextClass }) => {
  const { user } = useAuth();
  const [completedModules, setCompletedModules] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const [modulesCount, setModulesCount] = useState(0);
  const [progressStatus, setProgressStatus] = useState<"loading" | "ready" | "error">("loading");
  const [progressError, setProgressError] = useState<string | null>(null);
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
  const [benefitsStatus, setBenefitsStatus] = useState<"loading" | "active" | "inactive" | "error">(
    "loading"
  );
  const [benefitsError, setBenefitsError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    if (!user?.id) {
      setCompletedModules(0);
      setProgressPercent(0);
      setModulesCount(0);
      setProgressStatus("error");
      setProgressError("No se encontró un alumno autenticado.");
      return () => {
        active = false;
      };
    }
    setProgressStatus("loading");
    setProgressError(null);
    Promise.all([
      apiGet<{ items: Module[] }>("/api/modulos"),
      apiGet<ProgressResponse>(`/api/progreso?usuarioId=${user.id}`)
    ])
      .then(([modulesResponse, progressResponse]) => {
        if (!active) return;
        const completedSet = new Set(
          progressResponse.items.filter((item) => item.status === "completado").map((item) => item.moduloId)
        );
        const total = modulesResponse.items.length;
        const completedCount = modulesResponse.items.filter((module) => completedSet.has(module.id)).length;
        setCompletedModules(completedCount);
        setModulesCount(total);
        setProgressPercent(total === 0 ? 0 : Math.round((completedCount / total) * 100));
        setProgressStatus("ready");
      })
      .catch((error) => {
        if (!active) return;
        setCompletedModules(0);
        setModulesCount(0);
        setProgressPercent(0);
        setProgressStatus("error");
        setProgressError(
          error instanceof Error ? error.message : "No se pudo cargar el progreso."
        );
      });
    return () => {
      active = false;
    };
  }, [user?.id]);

  useEffect(() => {
    let active = true;
    if (!user?.id) {
      setBenefitsStatus("error");
      setBenefitsError("No se encontró un alumno autenticado.");
      return () => {
        active = false;
      };
    }
    setBenefitsStatus("loading");
    setBenefitsError(null);
    apiGet<{ active: boolean }>("/api/beneficios/estado")
      .then((response) => {
        if (!active) return;
        setBenefitsStatus(response.active ? "active" : "inactive");
      })
      .catch((error) => {
        if (!active) return;
        setBenefitsStatus("error");
        setBenefitsError(error instanceof Error ? error.message : "No se pudo validar beneficios.");
      });
    return () => {
      active = false;
    };
  }, [user?.id]);

  useEffect(() => {
    const stored = localStorage.getItem(ECONOMY_STORAGE_KEY);
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as EconomyState;
      setEconomy((prev) => ({ ...prev, ...parsed }));
    } catch {
      setEconomy(defaultEconomyState);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(ECONOMY_STORAGE_KEY, JSON.stringify(economy));
  }, [economy]);

  useEffect(() => {
    if (!coinFeedback) return;
    const timeout = window.setTimeout(() => {
      setCoinFeedback(null);
    }, 4000);
    return () => window.clearTimeout(timeout);
  }, [coinFeedback]);

  const progressLabel = useMemo(() => `${completedModules} módulos completados`, [completedModules]);
  const benefitsValue = useMemo(() => {
    switch (benefitsStatus) {
      case "active":
        return "Vigentes";
      case "inactive":
        return "No vigentes";
      case "error":
        return "Sin información";
      case "loading":
      default:
        return "Verificando...";
    }
  }, [benefitsStatus]);

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

  const pushEducationMessage = (message: Omit<EducationMessage, "id">) => {
    setEducationMessages((prev) => [{ ...message, id: crypto.randomUUID() }, ...prev].slice(0, 4));
  };

  const handlePurchaseTheme = (item: StoreItem) => {
    setEconomy((prev) => {
      if (prev.ownedThemes.includes(item.id)) {
        pushEducationMessage({
          title: "Tema activado",
          body: "Cambiar el tema no cuesta monedas si ya lo tenés comprado.",
          tone: "info"
        });
        return { ...prev, activeTheme: item.id };
      }
      if (prev.coins < item.price) return prev;
      setCoinFeedback({
        delta: -item.price,
        label: `Gastaste ${item.price} 🪙 en ${item.name}.`,
        tone: "spend"
      });
      pushEducationMessage({
        title: "Compra realizada",
        body: "Al gastar monedas tu saldo baja. Revisá siempre si te conviene ahorrar o comprar ahora.",
        tone: "warning"
      });
      return {
        ...prev,
        coins: prev.coins - item.price,
        ownedThemes: [...prev.ownedThemes, item.id],
        activeTheme: item.id
      };
    });
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

  const themeStatus = useMemo(() => {
    const activeTheme = STORE_ITEMS.find((item) => item.id === economy.activeTheme);
    return activeTheme ? activeTheme.name : "Tema personalizado";
  }, [economy.activeTheme]);

  const handleToggleSimulation = (simulationId: string) => {
    setOpenSimulationId((prev) => (prev === simulationId ? null : simulationId));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-1">
        <Container className="py-6 space-y-5">
          <ProfileCard student={student} />
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link className="rounded-2xl bg-white p-4 shadow transition hover:shadow-md" to="/clases">
              <p className="text-xs uppercase tracking-wide text-gray-400">Aprendizaje</p>
              <p className="mt-2 text-lg font-semibold text-gray-800">Mis clases</p>
              <p className="mt-1 text-sm text-gray-500">Accedé al aula y contenidos.</p>
            </Link>
            <Link className="rounded-2xl bg-white p-4 shadow transition hover:shadow-md" to="/tareas">
              <p className="text-xs uppercase tracking-wide text-gray-400">Actividad</p>
              <p className="mt-2 text-lg font-semibold text-gray-800">Tareas</p>
              <p className="mt-1 text-sm text-gray-500">Revisá pendientes y entregas.</p>
            </Link>
            <Link className="rounded-2xl bg-white p-4 shadow transition hover:shadow-md" to="/encuestas">
              <p className="text-xs uppercase tracking-wide text-gray-400">Feedback</p>
              <p className="mt-2 text-lg font-semibold text-gray-800">Encuestas</p>
              <p className="mt-1 text-sm text-gray-500">Respondé evaluaciones rápidas.</p>
            </Link>
            <Link className="rounded-2xl bg-white p-4 shadow transition hover:shadow-md" to="/progreso">
              <p className="text-xs uppercase tracking-wide text-gray-400">Seguimiento</p>
              <p className="mt-2 text-lg font-semibold text-gray-800">Progreso</p>
              <p className="mt-1 text-sm text-gray-500">Mirá tu avance general.</p>
            </Link>
          </section>
          <div className="space-y-5">
            {progressStatus === "loading" && (
              <p className="text-sm text-gray-500">Cargando progreso...</p>
            )}
            {progressStatus === "error" && progressError && (
              <p className="text-sm text-red-600">{progressError}</p>
            )}
            {benefitsStatus === "error" && benefitsError && (
              <p className="text-sm text-red-600">{benefitsError}</p>
            )}
            {progressStatus === "ready" && modulesCount === 0 && (
              <p className="text-sm text-gray-500">Todavía no tenés módulos asignados.</p>
            )}
            <InfoCard
              icon={<Clock3 className="h-6 w-6" />}
              label="Próxima Clase"
              value={`${nextClass.title} - ${nextClass.time}`}
            />
            <InfoCard
              icon={<Trophy className="h-6 w-6 text-yellow-500" />}
              label="Módulos completos"
              value={`${completedModules} Módulos`}
            />
            <InfoCard
              icon={<Award className="h-6 w-6 text-emerald-600" />}
              label="Beneficios vigentes"
              value={benefitsValue}
            />
            <ProgressBar percent={progressPercent} label={progressLabel} />
          </div>
          <section className="grid gap-5 lg:grid-cols-3">
            <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800">Tablero Económico</h3>
              <p className="text-sm text-gray-500">Estado, tasas y ayudas simples para entender tu saldo.</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-sm text-gray-500">Monedas disponibles</p>
                  <p
                    className={`text-3xl font-semibold text-blue-600 ${
                      coinFeedback?.tone === "gain" ? "animate-pulse" : ""
                    }`}
                  >
                    {economy.coins} 🪙
                  </p>
                  <p className="text-xs text-gray-400 mt-1">Usalas para temas o intercambios.</p>
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
                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-sm text-gray-500">Moneda extranjera simulada</p>
                  <p className="text-3xl font-semibold text-emerald-600">{economy.foreignCoins} FX</p>
                  <p className="text-xs text-gray-400 mt-1">Comprada a razón de {FOREIGN_EXCHANGE_RATE} monedas.</p>
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-400">Estado</p>
                  <p className="text-lg font-semibold text-gray-800">{economyStatus.label}</p>
                  <p className="text-xs text-gray-500 mt-1">{economyStatus.description}</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-400">Tasa plazo fijo</p>
                  <p className="text-lg font-semibold text-gray-800">{fixedTermRate}% anual</p>
                  <p className="text-xs text-gray-500 mt-1">Cuanto más alta la tasa, más interés ganás.</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-400">Tasa FCI</p>
                  <p className="text-lg font-semibold text-gray-800">{fciRate}% mensual</p>
                  <p className="text-xs text-gray-500 mt-1">Tasa variable: puede subir o bajar.</p>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-gray-600">Tema activo</p>
                <p className="text-lg font-semibold text-gray-800">{themeStatus}</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Compra de moneda extranjera</h3>
              <p className="text-sm text-gray-500">Simulá el cambio de tus monedas a FX.</p>
              <div className="space-y-2">
                <label className="text-sm text-gray-600" htmlFor="exchange-amount">
                  Monedas a cambiar
                </label>
                <input
                  id="exchange-amount"
                  type="number"
                  min={FOREIGN_EXCHANGE_RATE}
                  step={10}
                  value={exchangeAmount}
                  onChange={(event) => setExchangeAmount(Number(event.target.value))}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
                />
                <p className="text-xs text-gray-400">
                  Recibís {(exchangeAmount / FOREIGN_EXCHANGE_RATE).toFixed(2)} FX.
                </p>
              </div>
              <button
                type="button"
                onClick={handleExchange}
                className="w-full rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600"
              >
                Comprar FX
              </button>
            </div>
          </section>
          <section className="bg-white rounded-2xl shadow p-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Simulador de eventos económicos</h3>
              <p className="text-sm text-gray-500">
                Mini simulaciones "¿qué pasaría si...?" para practicar antes de activar eventos reales.
              </p>
            </div>
            <div className="grid gap-4">
              {ECONOMIC_SIMULATIONS.map((simulation) => {
                const isOpen = openSimulationId === simulation.id;
                return (
                  <div key={simulation.id} className="rounded-xl border border-gray-200 p-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{simulation.title}</p>
                        <p className="text-xs text-gray-500">{simulation.question}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleToggleSimulation(simulation.id)}
                        className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-200"
                      >
                        {isOpen ? "Ocultar resultado" : "Ver resultado"}
                      </button>
                    </div>
                    {isOpen && (
                      <div className="mt-3 rounded-xl bg-gray-50 p-4 text-xs text-gray-600">
                        <p className="font-semibold text-gray-700">Impacto estimado</p>
                        <div className="mt-2 grid gap-2 sm:grid-cols-2">
                          <div className="rounded-lg bg-white p-3">
                            <p className="text-[11px] uppercase tracking-wide text-gray-400">Saldo</p>
                            <p className="text-sm font-semibold text-gray-800">
                              {formatDelta(simulation.impact.coinDelta, "🪙")}
                            </p>
                          </div>
                          <div className="rounded-lg bg-white p-3">
                            <p className="text-[11px] uppercase tracking-wide text-gray-400">FX</p>
                            <p className="text-sm font-semibold text-gray-800">
                              {formatDelta(simulation.impact.foreignCoinDelta, "FX")}
                            </p>
                          </div>
                          <div className="rounded-lg bg-white p-3">
                            <p className="text-[11px] uppercase tracking-wide text-gray-400">Tasa plazo fijo</p>
                            <p className="text-sm font-semibold text-gray-800">
                              {formatDelta(simulation.impact.fixedTermRateDelta, "% anual")}
                            </p>
                          </div>
                          <div className="rounded-lg bg-white p-3">
                            <p className="text-[11px] uppercase tracking-wide text-gray-400">Tasa FCI</p>
                            <p className="text-sm font-semibold text-gray-800">
                              {formatDelta(simulation.impact.fciRateDelta, "% mensual")}
                            </p>
                          </div>
                        </div>
                        <p className="mt-3 text-xs text-gray-500">{simulation.learning}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
          <section className="bg-white rounded-2xl shadow p-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Mensajes educativos</h3>
              <p className="text-sm text-gray-500">
                Tips rápidos para entender por qué suben o bajan tus monedas.
              </p>
            </div>
            {educationMessages.length === 0 ? (
              <p className="text-sm text-gray-400">Realizá una acción y aparecerán mensajes para ayudarte.</p>
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
                    <p className="text-sm font-semibold text-gray-800">{message.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{message.body}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
          <section className="grid gap-5 lg:grid-cols-2">
            <div className="bg-white rounded-2xl shadow p-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Plazo fijo educativo</h3>
              <p className="text-sm text-gray-500">
                Un plazo fijo guarda tu dinero por un tiempo. Durante esos días no se puede usar, y al final te paga intereses
                fijos.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                <label className="text-sm text-gray-600" htmlFor="fixed-term-amount">
                  Monto
                  <input
                    id="fixed-term-amount"
                    type="number"
                    min={0}
                    value={fixedTermAmount}
                    onChange={(event) => setFixedTermAmount(Number(event.target.value))}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
                  />
                </label>
                <label className="text-sm text-gray-600" htmlFor="fixed-term-rate">
                  Tasa anual (%)
                  <input
                    id="fixed-term-rate"
                    type="number"
                    min={0}
                    step={0.1}
                    value={fixedTermRate}
                    onChange={(event) => setFixedTermRate(Number(event.target.value))}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
                  />
                </label>
                <label className="text-sm text-gray-600" htmlFor="fixed-term-days">
                  Días bloqueado
                  <input
                    id="fixed-term-days"
                    type="number"
                    min={1}
                    value={fixedTermDays}
                    onChange={(event) => setFixedTermDays(Number(event.target.value))}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
                  />
                </label>
              </div>
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-gray-600">Interés estimado</p>
                <p className="text-2xl font-semibold text-blue-600">{formatMoney(fixedTermInterest)} 🪙</p>
                <p className="text-xs text-gray-400 mt-1">
                  Total al finalizar: {formatMoney(fixedTermTotal)} 🪙. Tu dinero queda bloqueado hasta completar {fixedTermDays} días.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">FCI de desbloqueo rápido</h3>
                <p className="text-sm text-gray-500">
                  Un fondo común de inversión (FCI) permite entrar y salir rápido. El rendimiento es variable, pero el rescate suele
                  ser en 24/48 hs.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <label className="text-sm text-gray-600" htmlFor="fci-amount">
                  Monto
                  <input
                    id="fci-amount"
                    type="number"
                    min={0}
                    value={fciAmount}
                    onChange={(event) => setFciAmount(Number(event.target.value))}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
                  />
                </label>
                <label className="text-sm text-gray-600" htmlFor="fci-rate">
                  Tasa mensual (%)
                  <input
                    id="fci-rate"
                    type="number"
                    min={0}
                    step={0.1}
                    value={fciRate}
                    onChange={(event) => setFciRate(Number(event.target.value))}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
                  />
                </label>
                <label className="text-sm text-gray-600" htmlFor="fci-days">
                  Días invertidos
                  <input
                    id="fci-days"
                    type="number"
                    min={1}
                    value={fciDays}
                    onChange={(event) => setFciDays(Number(event.target.value))}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
                  />
                </label>
              </div>
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-gray-600">Ganancia estimada</p>
                <p className="text-2xl font-semibold text-emerald-600">{formatMoney(fciInterest)} 🪙</p>
                <p className="text-xs text-gray-400 mt-1">
                  Total si mantenés {fciDays} días: {formatMoney(fciTotal)} 🪙. Podés pedir el rescate y el dinero vuelve rápido.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-white rounded-2xl shadow p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Tienda básica</h3>
            <p className="text-sm text-gray-500">
              Comprá temas y mejoras visuales para tu experiencia.
            </p>
            <div className="space-y-3">
              {STORE_ITEMS.map((item) => {
                const isOwned = economy.ownedThemes.includes(item.id);
                return (
                  <div key={item.id} className="flex items-center justify-between rounded-xl border border-gray-200 p-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                      <p className="text-xs text-gray-400">{item.description}</p>
                      <p className="text-xs text-gray-500 mt-1">Precio: {item.price} 🪙</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handlePurchaseTheme(item)}
                      className={`rounded-lg px-3 py-1 text-xs font-semibold ${
                        isOwned
                          ? "bg-emerald-100 text-emerald-700"
                          : economy.coins >= item.price
                            ? "bg-emerald-600 text-white hover:bg-emerald-700"
                            : "bg-gray-100 text-gray-500"
                      }`}
                      disabled={!isOwned && economy.coins < item.price}
                    >
                      {isOwned ? "Activar" : "Comprar"}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
};

const demoProps: DashboardProps = {
  student: { name: "Ana García", initials: "AG", role: "Alumno" },
  nextClass: { title: "Matemáticas 1°A", time: "10:30" },
};

export default function Page() {
  return <StudentDashboard {...demoProps} />;
}
