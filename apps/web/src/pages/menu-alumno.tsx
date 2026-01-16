import React, { useEffect, useMemo, useState } from "react";
import { Bell, Clock3, GraduationCap, Trophy, UserCircle2 } from "lucide-react";
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

type EconomyState = {
  coins: number;
  foreignCoins: number;
  ownedThemes: string[];
  activeTheme: string;
  completedModuleIds: string[];
  completedTaskIds: string[];
  transfers: Transfer[];
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

const ECONOMY_STORAGE_KEY = "economia-alumno";
const FOREIGN_EXCHANGE_RATE = 100;

const defaultEconomyState: EconomyState = {
  coins: 120,
  foreignCoins: 0,
  ownedThemes: ["clasico"],
  activeTheme: "clasico",
  completedModuleIds: [],
  completedTaskIds: [],
  transfers: []
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

export const StudentDashboard: React.FC<DashboardProps> = ({ student, nextClass }) => {
  const [completedModules, setCompletedModules] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const [economy, setEconomy] = useState<EconomyState>(defaultEconomyState);
  const [transferTo, setTransferTo] = useState("");
  const [transferAmount, setTransferAmount] = useState(10);
  const [transferNote, setTransferNote] = useState("");
  const [exchangeAmount, setExchangeAmount] = useState(100);

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

  const progressLabel = useMemo(() => `${completedModules} módulos completados`, [completedModules]);

  const completedModuleSet = useMemo(() => new Set(economy.completedModuleIds), [economy.completedModuleIds]);
  const completedTaskSet = useMemo(() => new Set(economy.completedTaskIds), [economy.completedTaskIds]);

  const handleCompleteReward = (item: RewardItem, type: "module" | "task") => {
    setEconomy((prev) => {
      const completedIds = type === "module" ? prev.completedModuleIds : prev.completedTaskIds;
      if (completedIds.includes(item.id)) return prev;
      const nextIds = [...completedIds, item.id];
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
        return { ...prev, activeTheme: item.id };
      }
      if (prev.coins < item.price) return prev;
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
              <h3 className="text-lg font-semibold text-gray-800">Saldo claro y amigable</h3>
              <p className="text-sm text-gray-500">Tu economía escolar se resume acá.</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-sm text-gray-500">Monedas disponibles</p>
                  <p className="text-3xl font-semibold text-blue-600">{economy.coins} 🪙</p>
                  <p className="text-xs text-gray-400 mt-1">Usalas para temas o intercambios.</p>
                </div>
                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-sm text-gray-500">Moneda extranjera simulada</p>
                  <p className="text-3xl font-semibold text-emerald-600">{economy.foreignCoins} FX</p>
                  <p className="text-xs text-gray-400 mt-1">Comprada a razón de {FOREIGN_EXCHANGE_RATE} monedas.</p>
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
