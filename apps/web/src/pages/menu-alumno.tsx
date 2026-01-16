import React, { useEffect, useMemo, useState } from "react";
import { Award, Bell, Clock3, GraduationCap, Trophy, UserCircle2 } from "lucide-react";
import { MVP_MODULES } from "../mvp/mvpData";
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
  completedModules: number;
  progressPercent: number;
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

type RewardItem = {
  id: string;
  title: string;
  reward: number;
};

type SavingsMission = {
  id: string;
  title: string;
  description: string;
  targetAmount: number;
  durationDays: number;
  rewardCoins: number;
  badgeId: string;
  badgeLabel: string;
};

type Badge = {
  id: string;
  label: string;
  description: string;
};

type StoreItem = {
  id: string;
  name: string;
  description: string;
  price: number;
};

type Transfer = {
  id: string;
  to: string;
  amount: number;
  note: string;
  date: string;
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

type EconomyState = {
  coins: number;
  foreignCoins: number;
  ownedThemes: string[];
  activeTheme: string;
  completedModuleIds: string[];
  completedTaskIds: string[];
  transfers: Transfer[];
  missionProgress: Record<string, MissionProgress>;
  earnedBadgeIds: string[];
  completedSimulationIds: string[];
  simulationRegistry: SimulationRegistryEntry[];
  inflationEnabled: boolean;
  hyperinflationEnabled: boolean;
};

const MODULE_REWARDS: RewardItem[] = [
  { id: "mod-1", title: "Módulo 1: Introducción", reward: 20 },
  { id: "mod-2", title: "Módulo 2: Práctica guiada", reward: 30 },
  { id: "mod-3", title: "Módulo 3: Evaluación", reward: 40 }
];

const TASK_REWARDS: RewardItem[] = [
  { id: "task-1", title: "Tarea rápida: repaso", reward: 8 },
  { id: "task-2", title: "Tarea extendida: desafío", reward: 15 },
  { id: "task-3", title: "Tarea opcional: bonus", reward: 12 }
];

const STORE_ITEMS: StoreItem[] = [
  { id: "clasico", name: "Tema clásico", description: "Diseño limpio y familiar.", price: 0 },
  { id: "aurora", name: "Tema aurora", description: "Paleta suave con gradientes cálidos.", price: 40 },
  { id: "nocturno", name: "Tema nocturno", description: "Colores oscuros para modo noche.", price: 55 },
  { id: "vibrante", name: "Tema vibrante", description: "Accentos coloridos para destacar logros.", price: 65 }
];

const SAVINGS_MISSIONS: SavingsMission[] = [
  {
    id: "mission-1",
    title: "Fondo para la excursión",
    description: "Guardá monedas para cubrir materiales y transporte.",
    targetAmount: 80,
    durationDays: 7,
    rewardCoins: 15,
    badgeId: "badge-explorador",
    badgeLabel: "Explorador del ahorro"
  },
  {
    id: "mission-2",
    title: "Reto de meriendas saludables",
    description: "Ahorrá para planificar snacks sin gastar de más.",
    targetAmount: 120,
    durationDays: 14,
    rewardCoins: 25,
    badgeId: "badge-guardian",
    badgeLabel: "Guardián del bolsillo"
  },
  {
    id: "mission-3",
    title: "Meta solidaria",
    description: "Separá monedas para una causa solidaria del curso.",
    targetAmount: 60,
    durationDays: 5,
    rewardCoins: 12,
    badgeId: "badge-corazon",
    badgeLabel: "Corazón generoso"
  }
];

const BADGES: Badge[] = SAVINGS_MISSIONS.map((mission) => ({
  id: mission.badgeId,
  label: mission.badgeLabel,
  description: `Se obtiene al completar la misión "${mission.title}".`
}));

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
  completedModuleIds: [],
  completedTaskIds: [],
  transfers: [],
  missionProgress: {},
  earnedBadgeIds: [],
  completedSimulationIds: [],
  simulationRegistry: [],
  inflationEnabled: false,
  hyperinflationEnabled: false
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
      <button className="p-2" title="Notificaciones">
        <Bell className="h-6 w-6" />
      </button>
      <a className="flex items-center gap-2 hover:underline" href="#">
        <UserCircle2 className="h-6 w-6" />
        Perfil
      </a>
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
  const [completedModules, setCompletedModules] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const [economy, setEconomy] = useState<EconomyState>(defaultEconomyState);
  const [transferTo, setTransferTo] = useState("");
  const [transferAmount, setTransferAmount] = useState(10);
  const [transferNote, setTransferNote] = useState("");
  const [exchangeAmount, setExchangeAmount] = useState(100);
  const [fixedTermAmount, setFixedTermAmount] = useState(15000);
  const [fixedTermRate, setFixedTermRate] = useState(75);
  const [fixedTermDays, setFixedTermDays] = useState(30);
  const [fciAmount, setFciAmount] = useState(8000);
  const [fciRate, setFciRate] = useState(4);
  const [fciDays, setFciDays] = useState(10);
  const [educationMessages, setEducationMessages] = useState<EducationMessage[]>([]);
  const [coinFeedback, setCoinFeedback] = useState<CoinFeedback | null>(null);
  const [missionContribution, setMissionContribution] = useState<Record<string, number>>({});
  const [openSimulationId, setOpenSimulationId] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    const usuarioId = "demo-alumno";
    Promise.all([apiGet<{ items: Module[] }>("/api/modulos"), apiGet<ProgressResponse>(`/api/progreso?usuarioId=${usuarioId}`)])
      .then(([modulesResponse, progressResponse]) => {
        if (!active) return;
        const completedSet = new Set(
          progressResponse.items.filter((item) => item.status === "completado").map((item) => item.moduloId)
        );
        const total = modulesResponse.items.length || 1;
        const completedCount = modulesResponse.items.filter((module) => completedSet.has(module.id)).length;
        setCompletedModules(completedCount);
        setProgressPercent(Math.round((completedCount / total) * 100));
      })
      .catch(() => {
        if (!active) return;
        const completedCount = MVP_MODULES.filter((module) => module.progressPercent && module.progressPercent >= 100).length;
        setCompletedModules(completedCount);
        setProgressPercent(Math.round((completedCount / (MVP_MODULES.length || 1)) * 100));
      });
    return () => {
      active = false;
    };
  }, []);

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

  const completedModuleSet = useMemo(() => new Set(economy.completedModuleIds), [economy.completedModuleIds]);
  const completedTaskSet = useMemo(() => new Set(economy.completedTaskIds), [economy.completedTaskIds]);
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
  const simulationProgressPercent = useMemo(() => {
    return Math.round((economy.completedSimulationIds.length / (ECONOMIC_SIMULATIONS.length || 1)) * 100);
  }, [economy.completedSimulationIds.length]);
  const hasCompletedAllSimulations = useMemo(
    () => ECONOMIC_SIMULATIONS.every((simulation) => economy.completedSimulationIds.includes(simulation.id)),
    [economy.completedSimulationIds]
  );

  const pushEducationMessage = (message: Omit<EducationMessage, "id">) => {
    setEducationMessages((prev) => [{ ...message, id: crypto.randomUUID() }, ...prev].slice(0, 4));
  };

  const handleCompleteReward = (item: RewardItem, type: "module" | "task") => {
    setEconomy((prev) => {
      const completedIds = type === "module" ? prev.completedModuleIds : prev.completedTaskIds;
      if (completedIds.includes(item.id)) return prev;
      const nextIds = [...completedIds, item.id];
      setCoinFeedback({
        delta: item.reward,
        label: `Ganaste ${item.reward} 🪙 por ${type === "module" ? "el módulo" : "la tarea"}.`,
        tone: "gain"
      });
      pushEducationMessage({
        title: "Recompensa ganada",
        body: "Cuando completás actividades, tu saldo sube. Ahorrar te ayuda a comprar temas más caros.",
        tone: "success"
      });
      return {
        ...prev,
        coins: prev.coins + item.reward,
        completedModuleIds: type === "module" ? nextIds : prev.completedModuleIds,
        completedTaskIds: type === "task" ? nextIds : prev.completedTaskIds
      };
    });
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

  const handleTransfer = () => {
    if (!transferTo.trim()) return;
    if (transferAmount <= 0) return;
    setEconomy((prev) => {
      if (transferAmount > prev.coins) return prev;
      const transfer: Transfer = {
        id: crypto.randomUUID(),
        to: transferTo.trim(),
        amount: transferAmount,
        note: transferNote.trim(),
        date: new Date().toLocaleString("es-AR")
      };
      setCoinFeedback({
        delta: -transferAmount,
        label: `Enviaste ${transferAmount} 🪙 a ${transfer.to}.`,
        tone: "spend"
      });
      pushEducationMessage({
        title: "Compartir monedas",
        body: "Enviar monedas es como pagar por un servicio. Siempre revisá tu saldo antes de compartir.",
        tone: "info"
      });
      return {
        ...prev,
        coins: prev.coins - transferAmount,
        transfers: [transfer, ...prev.transfers].slice(0, 5)
      };
    });
    setTransferTo("");
    setTransferNote("");
  };

  const themeStatus = useMemo(() => {
    const activeTheme = STORE_ITEMS.find((item) => item.id === economy.activeTheme);
    return activeTheme ? activeTheme.name : "Tema personalizado";
  }, [economy.activeTheme]);

  const totalMissionSavings = useMemo(
    () =>
      Object.values(economy.missionProgress).reduce((acc, item) => acc + (item?.saved ?? 0), 0),
    [economy.missionProgress]
  );

  const getMissionProgress = (missionId: string): MissionProgress => {
    return economy.missionProgress[missionId] ?? { saved: 0, startedAt: null, completed: false };
  };

  const handleStartMission = (missionId: string) => {
    setEconomy((prev) => ({
      ...prev,
      missionProgress: {
        ...prev.missionProgress,
        [missionId]: {
          saved: prev.missionProgress[missionId]?.saved ?? 0,
          startedAt: new Date().toISOString(),
          completed: false
        }
      }
    }));
  };

  const handleRestartMission = (missionId: string) => {
    setEconomy((prev) => ({
      ...prev,
      missionProgress: {
        ...prev.missionProgress,
        [missionId]: { saved: 0, startedAt: new Date().toISOString(), completed: false }
      }
    }));
  };

  const handleContributeMission = (mission: SavingsMission) => {
    const amount = missionContribution[mission.id] ?? 0;
    if (amount <= 0) return;
    const progress = getMissionProgress(mission.id);
    if (!progress.startedAt || progress.completed) return;
    setEconomy((prev) => {
      if (amount > prev.coins) return prev;
      pushEducationMessage({
        title: "Ahorro registrado",
        body: "Separar monedas a tiempo ayuda a cumplir objetivos sin gastos impulsivos.",
        tone: "info"
      });
      return {
        ...prev,
        coins: prev.coins - amount,
        missionProgress: {
          ...prev.missionProgress,
          [mission.id]: {
            ...progress,
            saved: progress.saved + amount
          }
        }
      };
    });
    setMissionContribution((prev) => ({ ...prev, [mission.id]: 0 }));
  };

  const handleClaimMission = (mission: SavingsMission) => {
    const progress = getMissionProgress(mission.id);
    if (progress.completed || progress.saved < mission.targetAmount) return;
    setEconomy((prev) => {
      const earnedBadges = prev.earnedBadgeIds.includes(mission.badgeId)
        ? prev.earnedBadgeIds
        : [...prev.earnedBadgeIds, mission.badgeId];
      pushEducationMessage({
        title: "¡Misión completada!",
        body: "Al cumplir una meta con tiempo, ganás un badge y monedas extra.",
        tone: "success"
      });
      setCoinFeedback({
        delta: mission.rewardCoins,
        label: `Ganaste ${mission.rewardCoins} 🪙 por completar la misión.`,
        tone: "gain"
      });
      return {
        ...prev,
        coins: prev.coins + mission.rewardCoins,
        earnedBadgeIds: earnedBadges,
        missionProgress: {
          ...prev.missionProgress,
          [mission.id]: {
            ...progress,
            completed: true
          }
        }
      };
    });
  };

  const handleToggleSimulation = (simulationId: string) => {
    setOpenSimulationId((prev) => (prev === simulationId ? null : simulationId));
  };

  const handleCompleteSimulation = (simulation: SimulationScenario) => {
    setEconomy((prev) => {
      if (prev.completedSimulationIds.includes(simulation.id)) return prev;
      const nextCompleted = [...prev.completedSimulationIds, simulation.id];
      const now = new Date().toLocaleString("es-AR");
      const allCompleted = ECONOMIC_SIMULATIONS.every((item) => nextCompleted.includes(item.id));
      const alreadyRegistered = prev.simulationRegistry.some((entry) => entry.name === student.name);
      const nextRegistry =
        allCompleted && !alreadyRegistered
          ? [{ id: crypto.randomUUID(), name: student.name, completedAt: now }, ...prev.simulationRegistry]
          : prev.simulationRegistry;
      pushEducationMessage({
        title: "Simulación completada",
        body: simulation.learning,
        tone: "info"
      });
      return {
        ...prev,
        completedSimulationIds: nextCompleted,
        simulationRegistry: nextRegistry
      };
    });
  };

  const handleToggleInflation = () => {
    setEconomy((prev) => {
      const allCompleted = ECONOMIC_SIMULATIONS.every((item) => prev.completedSimulationIds.includes(item.id));
      if (!allCompleted) return prev;
      const nextInflation = !prev.inflationEnabled;
      if (nextInflation) {
        pushEducationMessage({
          title: "Inflación activada",
          body: "Recordá explicar el impacto antes de aplicar cambios reales.",
          tone: "warning"
        });
      } else {
        pushEducationMessage({
          title: "Inflación pausada",
          body: "Podés reactivar la inflación cuando el curso termine la simulación.",
          tone: "info"
        });
      }
      return {
        ...prev,
        inflationEnabled: nextInflation,
        hyperinflationEnabled: nextInflation ? prev.hyperinflationEnabled : false
      };
    });
  };

  const handleToggleHyperinflation = () => {
    setEconomy((prev) => {
      const allCompleted = ECONOMIC_SIMULATIONS.every((item) => prev.completedSimulationIds.includes(item.id));
      if (!allCompleted || !prev.inflationEnabled) return prev;
      const nextHyper = !prev.hyperinflationEnabled;
      pushEducationMessage({
        title: nextHyper ? "Hiperinflación activada" : "Hiperinflación pausada",
        body: nextHyper
          ? "Solo activala si el grupo comprendió los efectos en precios y ahorro."
          : "La hiperinflación se puede reactivar una vez que el curso esté preparado.",
        tone: nextHyper ? "warning" : "info"
      });
      return {
        ...prev,
        hyperinflationEnabled: nextHyper
      };
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-1">
        <Container className="py-6 space-y-5">
          <ProfileCard student={student} />
          <div className="space-y-5">
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
          <section className="grid gap-5 lg:grid-cols-3">
            <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Simulador de eventos económicos</h3>
                <p className="text-sm text-gray-500">
                  Mini simulaciones “¿qué pasaría si...?” para practicar antes de activar eventos reales.
                </p>
              </div>
              <div className="grid gap-4">
                {ECONOMIC_SIMULATIONS.map((simulation) => {
                  const isCompleted = economy.completedSimulationIds.includes(simulation.id);
                  const isOpen = openSimulationId === simulation.id;
                  return (
                    <div key={simulation.id} className="rounded-xl border border-gray-200 p-4">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{simulation.title}</p>
                          <p className="text-xs text-gray-500">{simulation.question}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {isCompleted && (
                            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                              Completada
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={() => handleToggleSimulation(simulation.id)}
                            className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-200"
                          >
                            {isOpen ? "Ocultar resultado" : "Ver resultado"}
                          </button>
                        </div>
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
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleCompleteSimulation(simulation)}
                          className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
                          disabled={isCompleted}
                        >
                          {isCompleted ? "Simulación completada" : "Marcar como completada"}
                        </button>
                        <span className="text-xs text-gray-400">
                          {isCompleted ? "Listo para la próxima." : "Completala para desbloquear eventos."}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Registro de simulaciones</h3>
                <p className="text-sm text-gray-500">
                  Alumnos que completaron la práctica previa.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs uppercase tracking-wide text-gray-400">Progreso del curso</p>
                <p className="text-2xl font-semibold text-gray-800">
                  {economy.completedSimulationIds.length} / {ECONOMIC_SIMULATIONS.length}
                </p>
                <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 rounded-full bg-blue-500" style={{ width: `${simulationProgressPercent}%` }} />
                </div>
              </div>
              <div className="space-y-2">
                {economy.simulationRegistry.length === 0 ? (
                  <p className="text-xs text-gray-400">Todavía no hay registros completados.</p>
                ) : (
                  economy.simulationRegistry.map((entry) => (
                    <div key={entry.id} className="rounded-lg border border-gray-200 p-3 text-xs text-gray-600">
                      <p className="text-sm font-semibold text-gray-800">{entry.name}</p>
                      <p className="text-[11px] text-gray-400">Completó: {entry.completedAt}</p>
                    </div>
                  ))
                )}
              </div>
              <div className="rounded-xl border border-gray-200 p-4 space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-800">Activación de eventos reales</p>
                  <p className="text-xs text-gray-500">
                    Requiere completar todas las mini simulaciones.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleToggleInflation}
                  className={`w-full rounded-lg px-3 py-2 text-xs font-semibold ${
                    hasCompletedAllSimulations
                      ? "bg-amber-500 text-white hover:bg-amber-600"
                      : "bg-gray-100 text-gray-400"
                  }`}
                  disabled={!hasCompletedAllSimulations}
                >
                  {economy.inflationEnabled ? "Inflación activa" : "Activar inflación"}
                </button>
                <button
                  type="button"
                  onClick={handleToggleHyperinflation}
                  className={`w-full rounded-lg px-3 py-2 text-xs font-semibold ${
                    hasCompletedAllSimulations && economy.inflationEnabled
                      ? "bg-rose-500 text-white hover:bg-rose-600"
                      : "bg-gray-100 text-gray-400"
                  }`}
                  disabled={!hasCompletedAllSimulations || !economy.inflationEnabled}
                >
                  {economy.hyperinflationEnabled ? "Hiperinflación activa" : "Activar hiperinflación"}
                </button>
                {!hasCompletedAllSimulations && (
                  <p className="text-[11px] text-gray-400">
                    Faltan {ECONOMIC_SIMULATIONS.length - economy.completedSimulationIds.length} simulaciones para habilitar.
                  </p>
                )}
                {hasCompletedAllSimulations && !economy.inflationEnabled && (
                  <p className="text-[11px] text-gray-400">
                    Activá inflación primero para habilitar hiperinflación.
                  </p>
                )}
              </div>
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
          <section className="grid gap-5 lg:grid-cols-3">
            <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6 space-y-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-gray-800">Misiones de ahorro</h3>
                <p className="text-sm text-gray-500">
                  Cada misión tiene una meta y un tiempo límite. Ahorrá monedas y ganá badges.
                </p>
              </div>
              <div className="grid gap-4">
                {SAVINGS_MISSIONS.map((mission) => {
                  const progress = getMissionProgress(mission.id);
                  const startedAt = progress.startedAt ? new Date(progress.startedAt) : null;
                  const deadline = startedAt
                    ? new Date(startedAt.getTime() + mission.durationDays * 24 * 60 * 60 * 1000)
                    : null;
                  const now = new Date();
                  const remainingMs = deadline ? deadline.getTime() - now.getTime() : null;
                  const daysLeft =
                    remainingMs !== null ? Math.max(0, Math.ceil(remainingMs / (24 * 60 * 60 * 1000))) : mission.durationDays;
                  const isExpired = remainingMs !== null && remainingMs <= 0 && progress.saved < mission.targetAmount;
                  const progressPercent = Math.min(100, Math.round((progress.saved / mission.targetAmount) * 100));

                  return (
                    <div key={mission.id} className="rounded-xl border border-gray-200 p-4">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{mission.title}</p>
                          <p className="text-xs text-gray-500">{mission.description}</p>
                          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                            <span className="rounded-full bg-gray-100 px-2 py-1">
                              Meta: {mission.targetAmount} 🪙
                            </span>
                            <span className="rounded-full bg-gray-100 px-2 py-1">
                              Tiempo: {mission.durationDays} días
                            </span>
                            <span className="rounded-full bg-blue-50 px-2 py-1 text-blue-700">
                              Badge: {mission.badgeLabel}
                            </span>
                          </div>
                        </div>
                        <div className="text-right text-xs text-gray-500">
                          {progress.completed ? (
                            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">
                              Completada
                            </span>
                          ) : isExpired ? (
                            <span className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-rose-600">
                              Tiempo vencido
                            </span>
                          ) : (
                            <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-amber-700">
                              {startedAt ? `${daysLeft} día(s) restantes` : "Sin iniciar"}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>Ahorro: {progress.saved} 🪙</span>
                          <span>{progressPercent}%</span>
                        </div>
                        <div className="mt-2 h-2 w-full rounded-full bg-gray-100">
                          <div
                            className={`h-2 rounded-full ${
                              progress.completed ? "bg-emerald-400" : "bg-blue-500"
                            }`}
                            style={{ width: `${progressPercent}%` }}
                          />
                        </div>
                      </div>

                      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-wrap items-center gap-2">
                          {!progress.startedAt && (
                            <button
                              type="button"
                              onClick={() => handleStartMission(mission.id)}
                              className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700"
                            >
                              Iniciar misión
                            </button>
                          )}
                          {isExpired && (
                            <button
                              type="button"
                              onClick={() => handleRestartMission(mission.id)}
                              className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-200"
                            >
                              Reiniciar
                            </button>
                          )}
                          {!progress.completed && progress.saved >= mission.targetAmount && (
                            <button
                              type="button"
                              onClick={() => handleClaimMission(mission)}
                              className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700"
                            >
                              Cobrar recompensa
                            </button>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <input
                            type="number"
                            min={1}
                            value={missionContribution[mission.id] ?? 0}
                            onChange={(event) =>
                              setMissionContribution((prev) => ({
                                ...prev,
                                [mission.id]: Number(event.target.value)
                              }))
                            }
                            className="w-24 rounded-md border border-gray-200 px-2 py-1 text-xs"
                            disabled={!progress.startedAt || progress.completed || isExpired}
                          />
                          <button
                            type="button"
                            onClick={() => handleContributeMission(mission)}
                            className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
                            disabled={!progress.startedAt || progress.completed || isExpired}
                          >
                            Aportar
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Recompensas y badges</h3>
                <p className="text-sm text-gray-500">
                  Completá misiones para desbloquear badges y monedas extra.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs uppercase tracking-wide text-gray-400">Ahorro acumulado</p>
                <p className="text-2xl font-semibold text-gray-800">{totalMissionSavings} 🪙</p>
                <p className="text-xs text-gray-500 mt-1">
                  Monedas separadas en misiones activas.
                </p>
              </div>
              <div className="grid gap-3">
                {BADGES.map((badge) => {
                  const isEarned = economy.earnedBadgeIds.includes(badge.id);
                  return (
                    <div
                      key={badge.id}
                      className={`flex items-center gap-3 rounded-xl border p-3 ${
                        isEarned ? "border-emerald-200 bg-emerald-50" : "border-gray-200"
                      }`}
                    >
                      <div
                        className={`h-10 w-10 rounded-full flex items-center justify-center ${
                          isEarned ? "bg-emerald-200 text-emerald-700" : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        <Award className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{badge.label}</p>
                        <p className="text-xs text-gray-500">{badge.description}</p>
                      </div>
                      {isEarned && (
                        <span className="ml-auto text-xs font-semibold text-emerald-600">
                          Obtenido
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section className="grid gap-5 lg:grid-cols-2">
            <div className="bg-white rounded-2xl shadow p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Plazo fijo educativo</h3>
                <p className="text-sm text-gray-500">
                  Un plazo fijo guarda tu dinero por un tiempo. Durante esos días no se puede usar, y al final te paga intereses
                  fijos.
                </p>
              </div>
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
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Ganancia de monedas</h3>
              <p className="text-sm text-gray-500">
                Completá módulos y tareas para sumar monedas a tu saldo.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-700">Módulos</h4>
                {MODULE_REWARDS.map((module) => {
                  const isCompleted = completedModuleSet.has(module.id);
                  return (
                    <div key={module.id} className="flex items-center justify-between rounded-xl border border-gray-200 p-3">
                      <div>
                        <p className="text-sm font-medium text-gray-800">{module.title}</p>
                        <p className="text-xs text-gray-400">Recompensa: {module.reward} 🪙</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCompleteReward(module, "module")}
                        className={`rounded-lg px-3 py-1 text-xs font-semibold ${
                          isCompleted
                            ? "bg-gray-100 text-gray-500"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                        disabled={isCompleted}
                      >
                        {isCompleted ? "Ganado" : "Completar"}
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-700">Tareas</h4>
                {TASK_REWARDS.map((task) => {
                  const isCompleted = completedTaskSet.has(task.id);
                  return (
                    <div key={task.id} className="flex items-center justify-between rounded-xl border border-gray-200 p-3">
                      <div>
                        <p className="text-sm font-medium text-gray-800">{task.title}</p>
                        <p className="text-xs text-gray-400">Recompensa: {task.reward} 🪙</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCompleteReward(task, "task")}
                        className={`rounded-lg px-3 py-1 text-xs font-semibold ${
                          isCompleted
                            ? "bg-gray-100 text-gray-500"
                            : "bg-indigo-600 text-white hover:bg-indigo-700"
                        }`}
                        disabled={isCompleted}
                      >
                        {isCompleted ? "Ganado" : "Completar"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section className="grid gap-5 lg:grid-cols-2">
            <div className="bg-white rounded-2xl shadow p-6 space-y-4">
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
            </div>
            <div className="bg-white rounded-2xl shadow p-6 space-y-4">
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
                <button
                  type="button"
                  onClick={handleTransfer}
                  className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Enviar monedas
                </button>
              </div>
              <div className="pt-2">
                <h4 className="text-sm font-semibold text-gray-700">Últimos intercambios</h4>
                {economy.transfers.length === 0 ? (
                  <p className="text-xs text-gray-400 mt-2">Aún no realizaste intercambios.</p>
                ) : (
                  <ul className="mt-2 space-y-2 text-sm text-gray-600">
                    {economy.transfers.map((transfer) => (
                      <li key={transfer.id} className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-medium text-gray-800">
                            Enviado a {transfer.to} · {transfer.amount} 🪙
                          </p>
                          <p className="text-xs text-gray-400">{transfer.note || "Sin nota"}</p>
                        </div>
                        <span className="text-xs text-gray-400">{transfer.date}</span>
                      </li>
                    ))}
                  </ul>
                )}
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
  completedModules: 3,
  progressPercent: 33,
};

export default function Page() {
  return <StudentDashboard {...demoProps} />;
}
