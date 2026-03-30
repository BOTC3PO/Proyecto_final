import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Award, Bell, Clock3, GraduationCap, Trophy, UserCircle2 } from "lucide-react";
import { useAuth } from "../auth/use-auth";
import { apiGet, apiPost } from "../lib/api";
import type { Module } from "../domain/module/module.types";
import { getSubjectColor } from "../domain/module/subjectColors";
import { useTheme, type ThemeId } from "../theme/ThemeContext";

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

type SimulationRegistryEntry = {
  id: string;
  name: string;
  completedAt: string;
};

type MissionProgress = {
  saved: number;
  startedAt: string | null;
  completed: boolean;
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
  const { theme, setTheme, availableThemes } = useTheme();
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
  const [saldoStatus, setSaldoStatus] =
    useState<"loading" | "ready" | "error">("loading");
  const [transacciones, setTransacciones] =
    useState<TransaccionItem[]>([]);
  const [cicloActivo, setCicloActivo] = useState<CicloActivo | null>(null);
  const [plazos, setPlazos] = useState<PlazoFijo[]>([]);
  const [fcis, setFcis] = useState<FciPosicion[]>([]);
  const [instrumentosLoading, setInstrumentosLoading] = useState(false);
  const [pfInvirtiendo, setPfInvirtiendo] = useState(false);
  const [fciInvirtiendo, setFciInvirtiendo] = useState(false);
  const [rescatando, setRescatando] = useState<string | null>(null);
  const [instrumentoMsg, setInstrumentoMsg] = useState<string | null>(null);

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
      .then(([saldoResponse, txResponse]) => {
        if (!active) return;
        setEconomy((prev) => ({ ...prev, coins: saldoResponse.saldo }));
        setTransacciones(txResponse.items);
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
      // Actualizar tasas del tablero con valores reales
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
    setInstrumentosLoading(true);
    Promise.all([
      apiGet<{ items: PlazoFijo[] }>("/api/instrumentos/plazo-fijo"),
      apiGet<{ items: FciPosicion[] }>("/api/instrumentos/fci"),
    ])
      .then(([pfData, fciData]) => {
        if (!active) return;
        setPlazos(pfData.items.filter((p) => p.estado === "activo"));
        setFcis(fciData.items.filter((p) => p.estado === "activo"));
      })
      .catch(() => {})
      .finally(() => { if (!active) return; setInstrumentosLoading(false); });
    return () => { active = false; };
  }, [user?.id]);

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
        title: "Tema activado",
        body: "Cambiar el tema no cuesta monedas si ya lo tenés comprado.",
        tone: "info"
      });
      setTheme(item.id);
      return;
    }
    if (economy.coins < item.price) return;
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
    setEconomy((prev) => ({
      ...prev,
      coins: prev.coins - item.price,
      ownedThemes: [...prev.ownedThemes, item.id],
    }));
    setTheme(item.id);
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

  const themeStatus = useMemo(() => {
    const activeTheme = availableThemes.find((item) => item.id === theme);
    return activeTheme ? activeTheme.name : "Tema personalizado";
  }, [theme, availableThemes]);

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
                  {saldoStatus === "loading" && (
                    <p className="text-xs text-gray-400 animate-pulse">
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
                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-sm text-gray-500">Moneda extranjera simulada</p>
                  <p className="text-3xl font-semibold text-emerald-600">{economy.foreignCoins} FX</p>
                  <p className="text-xs text-gray-400 mt-1">Comprada a razón de {FOREIGN_EXCHANGE_RATE} monedas.</p>
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Ciclo económico
                  </p>
                  <p className={`text-lg font-semibold ${
                    cicloActivo?.tipo === "hiperinflacion" ? "text-red-700"
                    : cicloActivo?.tipo === "inflacion" ? "text-amber-700"
                    : cicloActivo?.tipo === "deflacion" ? "text-blue-700"
                    : "text-gray-800"
                  }`}>
                    {cicloActivo
                      ? cicloActivo.tipo.charAt(0).toUpperCase() + cicloActivo.tipo.slice(1)
                      : economyStatus.label}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {cicloActivo
                      ? `Intensidad ${cicloActivo.intensidad}/10 · hasta ${
                          new Date(cicloActivo.fin).toLocaleDateString("es-AR")
                        }`
                      : economyStatus.description}
                  </p>
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
                  <p className="text-xs font-semibold uppercase text-gray-400">
                    Mis plazos fijos activos
                  </p>
                  {plazos.map((pf) => {
                    const vence = new Date(pf.vence_at);
                    const vencio = new Date() >= vence;
                    return (
                      <div key={pf.id}
                        className="rounded-xl border border-slate-200 px-4 py-3">
                        <div className="flex items-center justify-between gap-3">
                          <div className="text-sm">
                            <p className="font-medium text-slate-800">
                              {pf.monto} 🪙 · {pf.tasa_anual}% anual · {pf.dias} días
                            </p>
                            <p className="text-xs text-slate-400">
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
                  <p className="text-xs font-semibold uppercase text-gray-400">
                    Mis posiciones FCI activas
                  </p>
                  {fcis.map((fci) => (
                    <div key={fci.id}
                      className="rounded-xl border border-slate-200 px-4 py-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-sm">
                          <p className="font-medium text-slate-800">
                            {fci.monto} 🪙 · {fci.tasa_mensual}% mensual · {fci.dias} días
                          </p>
                          <p className="text-xs text-slate-400">
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
          <section className="bg-white rounded-2xl shadow p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Tienda</h3>
            <p className="text-sm text-gray-500">
              Comprá temas y mejoras visuales para tu experiencia.
            </p>
            <div className="space-y-3">
              {availableThemes.map((item) => {
                const isOwned = economy.ownedThemes.includes(item.id);
                const isActive = theme === item.id;
                return (
                  <div key={item.id}
                    className="flex items-center justify-between rounded-xl border border-gray-200 p-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-gray-800">
                          {item.name}
                        </p>
                        {item.animated && (
                          <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-semibold text-violet-700">
                            Animado
                          </span>
                        )}
                        {isActive && (
                          <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
                            Activo
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Precio: {item.price === 0 ? "Gratis" : `${item.price} 🪙`}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handlePurchaseTheme(item)}
                      className={`rounded-lg px-3 py-1 text-xs font-semibold ${
                        isActive
                          ? "bg-blue-100 text-blue-700"
                          : isOwned
                          ? "bg-emerald-100 text-emerald-700"
                          : economy.coins >= item.price
                          ? "bg-emerald-600 text-white hover:bg-emerald-700"
                          : "bg-gray-100 text-gray-400"
                      }`}
                      disabled={isActive || (!isOwned && economy.coins < item.price)}
                    >
                      {isActive ? "Activo" : isOwned ? "Activar" : "Comprar"}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="bg-white rounded-2xl shadow p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Intercambio entre alumnos</h3>
            <p className="text-sm text-gray-500">Enviá monedas a compañeros de forma simple.</p>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600" htmlFor="transfer-to">
                  Destinatario
                </label>
                <input
                  id="transfer-to"
                  type="text"
                  value={transferTo}
                  onChange={(event) => setTransferTo(event.target.value)}
                  placeholder="Ej: Juan Pérez"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-gray-600" htmlFor="transfer-amount">
                    Monto
                  </label>
                  <input
                    id="transfer-amount"
                    type="number"
                    min={1}
                    value={transferAmount}
                    onChange={(event) => setTransferAmount(Number(event.target.value))}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600" htmlFor="transfer-note">
                    Nota (opcional)
                  </label>
                  <input
                    id="transfer-note"
                    type="text"
                    value={transferNote}
                    onChange={(event) => setTransferNote(event.target.value)}
                    placeholder="Gracias por ayudar"
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
                  />
                </div>
              </div>
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
  const { user } = useAuth();
  if (!user) return null;
  const initials = user.name
    .split(" ")
    .filter(Boolean)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <StudentDashboard
      student={{ name: user.name, initials, role: "Alumno" }}
      nextClass={{ title: "—", time: "—" }}
    />
  );
}
