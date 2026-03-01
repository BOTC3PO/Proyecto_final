import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VisualizerRenderer from "../../visualizadores/graficos/VisualizerRenderer";
import type { LifeBudgetSpec, LifeTimeMatrixSpec } from "../../visualizadores/types";

type Tool = "life-budget" | "life-time-matrix";

const DEFAULT_EXPENSES: LifeBudgetSpec["expenses"] = [
  { id: "alquiler", category: "Alquiler", planned: 35000, color: "#2563eb", essential: true },
  { id: "comida", category: "Alimentacion", planned: 20000, color: "#16a34a", essential: true },
  { id: "transporte", category: "Transporte", planned: 10000, color: "#ca8a04", essential: true },
  { id: "servicios", category: "Servicios", planned: 8000, color: "#7c3aed", essential: true },
  { id: "salud", category: "Salud", planned: 5000, color: "#06b6d4", essential: true },
  { id: "ocio", category: "Ocio", planned: 7000, color: "#db2777", essential: false },
  { id: "ropa", category: "Ropa", planned: 4000, color: "#f97316", essential: false },
];

const DEFAULT_TASKS: LifeTimeMatrixSpec["tasks"] = [
  { id: "t1", label: "Estudiar para el examen", urgent: true, important: true, hours: 8, color: "#dc2626", quadrant: "I", action: "Hacer ahora" },
  { id: "t2", label: "Ejercicio semanal", urgent: false, important: true, hours: 5, color: "#2563eb", quadrant: "II", action: "Planificar" },
  { id: "t3", label: "Proyecto personal", urgent: false, important: true, hours: 6, color: "#7c3aed", quadrant: "II", action: "Planificar" },
  { id: "t4", label: "Responder mensajes", urgent: true, important: false, hours: 3, color: "#ca8a04", quadrant: "III", action: "Delegar" },
  { id: "t5", label: "Reunion inesperada", urgent: true, important: false, hours: 2, color: "#f97316", quadrant: "III", action: "Delegar" },
  { id: "t6", label: "Ver series", urgent: false, important: false, hours: 6, color: "#94a3b8", quadrant: "IV", action: "Eliminar" },
  { id: "t7", label: "Redes sociales", urgent: false, important: false, hours: 4, color: "#cbd5e1", quadrant: "IV", action: "Eliminar" },
];

export default function HerramientasVidaPractica() {
  const [activeTool, setActiveTool] = useState<Tool>("life-budget");

  // budget state
  const [monthlyIncome, setMonthlyIncome] = useState(100000);
  const [savings, setSavings] = useState(20000);
  const [expenses, setExpenses] = useState(DEFAULT_EXPENSES);

  // time matrix state
  const [tasks, setTasks] = useState(DEFAULT_TASKS);
  const [totalHours, setTotalHours] = useState(40);

  const budgetSpec = useMemo<LifeBudgetSpec>(() => ({
    kind: "life-budget",
    title: "Presupuesto mensual",
    description: "Planifica tus ingresos, gastos y ahorro",
    monthlyIncome,
    currency: "$",
    expenses,
    savings: { planned: savings },
    rules: [
      { name: "Regla 50/30/20", description: "50% necesidades, 30% deseos, 20% ahorro", allocation: { necesidades: 50, deseos: 30, ahorro: 20 } },
    ],
  }), [monthlyIncome, savings, expenses]);

  const timeSpec = useMemo<LifeTimeMatrixSpec>(() => ({
    kind: "life-time-matrix",
    title: "Matriz de Eisenhower",
    description: "Organiza tus tareas por urgencia e importancia",
    totalHoursPerWeek: totalHours,
    tasks,
    quadrantLabels: { I: "Hacer ahora", II: "Planificar", III: "Delegar", IV: "Eliminar" },
  }), [tasks, totalHours]);

  const tools: { id: Tool; label: string }[] = [
    { id: "life-budget", label: "Presupuesto" },
    { id: "life-time-matrix", label: "Gestion del tiempo" },
  ];

  const totalExpenses = expenses.reduce((s, e) => s + e.planned, 0) + savings;
  const balance = monthlyIncome - totalExpenses;

  return (
    <div className="space-y-6 px-6 py-8">
      <div>
        <Link to="/herramientas" className="text-sm text-blue-600 hover:underline">
          &larr; Volver a herramientas
        </Link>
      </div>
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">Vida Practica</h1>
        <p className="text-sm text-slate-600">Administra tu presupuesto y organiza tu tiempo de manera efectiva.</p>
      </header>

      <div className="flex flex-wrap gap-2">
        {tools.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTool(t.id)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
              activeTool === t.id
                ? "border-lime-600 bg-lime-600 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-lime-400 hover:text-lime-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {activeTool === "life-budget" && (
        <div className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">Ingresos y ahorro</h2>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <label className="space-y-1 text-sm text-slate-600">
                <span className="font-medium text-slate-700">
                  Ingreso mensual: <span className="text-lime-700">${monthlyIncome.toLocaleString()}</span>
                </span>
                <input
                  type="range" min={20000} max={500000} step={5000} value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  className="w-full accent-lime-600"
                />
              </label>
              <label className="space-y-1 text-sm text-slate-600">
                <span className="font-medium text-slate-700">
                  Ahorro planificado: <span className="text-lime-700">${savings.toLocaleString()}</span>
                </span>
                <input
                  type="range" min={0} max={Math.max(100000, monthlyIncome / 2)} step={1000} value={savings}
                  onChange={(e) => setSavings(Number(e.target.value))}
                  className="w-full accent-lime-600"
                />
              </label>
            </div>
            <h2 className="mt-6 text-lg font-semibold text-slate-800">Gastos</h2>
            <div className="mt-3 space-y-3">
              {expenses.map((exp) => (
                <label key={exp.id} className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="w-28 shrink-0 font-medium text-slate-700">{exp.category}</span>
                  <input
                    type="range" min={0} max={monthlyIncome * 0.6} step={500}
                    value={exp.planned}
                    onChange={(e) =>
                      setExpenses((prev) =>
                        prev.map((ex) => ex.id === exp.id ? { ...ex, planned: Number(e.target.value) } : ex)
                      )
                    }
                    className="flex-1 accent-lime-600"
                    style={{ accentColor: exp.color }}
                  />
                  <span className="w-24 text-right font-mono text-xs">${exp.planned.toLocaleString()}</span>
                </label>
              ))}
            </div>
            <div className={`mt-4 rounded-lg p-3 text-sm font-medium ${balance >= 0 ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
              Balance: ${balance.toLocaleString()} {balance >= 0 ? "(superavit)" : "(deficit)"}
            </div>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={budgetSpec} />
          </section>
        </div>
      )}

      {activeTool === "life-time-matrix" && (
        <div className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">Horas semanales disponibles</h2>
            <label className="mt-3 block space-y-1 text-sm text-slate-600">
              <span className="font-medium text-slate-700">
                Total de horas: <span className="text-lime-700">{totalHours} h/semana</span>
              </span>
              <input
                type="range" min={10} max={80} step={1} value={totalHours}
                onChange={(e) => setTotalHours(Number(e.target.value))}
                className="w-full accent-lime-600"
              />
            </label>
            <h2 className="mt-6 text-lg font-semibold text-slate-800">Tareas</h2>
            <div className="mt-3 space-y-3">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-center gap-3 text-sm">
                  <span className="w-44 shrink-0 text-slate-700">{task.label}</span>
                  <input
                    type="range" min={0} max={20} step={0.5}
                    value={task.hours}
                    onChange={(e) =>
                      setTasks((prev) =>
                        prev.map((t) => t.id === task.id ? { ...t, hours: Number(e.target.value) } : t)
                      )
                    }
                    className="flex-1 accent-lime-600"
                  />
                  <span className="w-12 text-right font-mono text-xs text-slate-500">{task.hours}h</span>
                  <span className={`rounded px-2 py-0.5 text-xs font-medium ${
                    task.quadrant === "I" ? "bg-red-100 text-red-700" :
                    task.quadrant === "II" ? "bg-blue-100 text-blue-700" :
                    task.quadrant === "III" ? "bg-yellow-100 text-yellow-700" :
                    "bg-slate-100 text-slate-500"
                  }`}>
                    Q{task.quadrant}
                  </span>
                </div>
              ))}
            </div>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={timeSpec} />
          </section>
        </div>
      )}
    </div>
  );
}
