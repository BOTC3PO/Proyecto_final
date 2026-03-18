import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VisualizerRenderer from "./visualizadores/graficos/VisualizerRenderer";
import type { LifeBudgetSpec, LifeTimeMatrixSpec } from "./visualizadores/types";

type Tool = "life-budget" | "life-time-matrix";
type Quadrant = "I" | "II" | "III" | "IV";

const QUADRANT_ACTIONS: Record<Quadrant, string> = {
  I: "Hacer ahora",
  II: "Planificar",
  III: "Delegar",
  IV: "Eliminar",
};

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

const CURRENCY_OPTIONS = [
  { value: "$", label: "$ (Peso/Dólar)" },
  { value: "€", label: "€ (Euro)" },
  { value: "£", label: "£ (Libra)" },
  { value: "¥", label: "¥ (Yen)" },
  { value: "R$", label: "R$ (Real)" },
];

export default function HerramientasVidaPractica() {
  const [activeTool, setActiveTool] = useState<Tool>("life-budget");

  // budget state
  const [budgetTitle, setBudgetTitle] = useState("Presupuesto mensual");
  const [monthlyIncome, setMonthlyIncome] = useState(100000);
  const [savings, setSavings] = useState(20000);
  const [expenses, setExpenses] = useState(DEFAULT_EXPENSES);
  const [currency, setCurrency] = useState("$");

  // time matrix state
  const [timeTitle, setTimeTitle] = useState("Matriz de Eisenhower");
  const [tasks, setTasks] = useState(DEFAULT_TASKS);
  const [totalHours, setTotalHours] = useState(40);

  const budgetSpec = useMemo<LifeBudgetSpec>(() => ({
    kind: "life-budget",
    title: budgetTitle || "Presupuesto mensual",
    description: "Planifica tus ingresos, gastos y ahorro",
    monthlyIncome,
    currency,
    expenses,
    savings: { planned: savings },
    rules: [
      { name: "Regla 50/30/20", description: "50% necesidades, 30% deseos, 20% ahorro", allocation: { necesidades: 50, deseos: 30, ahorro: 20 } },
    ],
  }), [budgetTitle, monthlyIncome, savings, expenses, currency]);

  const timeSpec = useMemo<LifeTimeMatrixSpec>(() => ({
    kind: "life-time-matrix",
    title: timeTitle || "Matriz de Eisenhower",
    description: "Organiza tus tareas por urgencia e importancia",
    totalHoursPerWeek: totalHours,
    tasks,
    quadrantLabels: { I: "Hacer ahora", II: "Planificar", III: "Delegar", IV: "Eliminar" },
  }), [timeTitle, tasks, totalHours]);

  const tools: { id: Tool; label: string }[] = [
    { id: "life-budget", label: "Presupuesto" },
    { id: "life-time-matrix", label: "Gestion del tiempo" },
  ];

  const totalExpenses = expenses.reduce((s, e) => s + e.planned, 0) + savings;
  const balance = monthlyIncome - totalExpenses;

  const addExpense = () => {
    setExpenses((prev) => [
      ...prev,
      {
        id: `exp${Date.now()}`,
        category: "Nueva categoría",
        planned: 0,
        color: "#64748b",
        essential: false,
      },
    ]);
  };

  const removeExpense = (id: string) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const addTask = () => {
    setTasks((prev) => [
      ...prev,
      {
        id: `t${Date.now()}`,
        label: "Nueva tarea",
        urgent: false,
        important: false,
        hours: 1,
        color: "#64748b",
        quadrant: "IV" as Quadrant,
        action: "Eliminar",
      },
    ]);
  };

  const removeTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const updateTaskQuadrant = (id: string, q: Quadrant) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              quadrant: q,
              action: QUADRANT_ACTIONS[q],
              urgent: q === "I" || q === "III",
              important: q === "I" || q === "II",
            }
          : t,
      ),
    );
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 items-start">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <h2 className="text-base font-semibold text-slate-800">Parámetros</h2>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Título</label>
              <input
                type="text"
                value={budgetTitle}
                onChange={(e) => setBudgetTitle(e.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-lime-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Moneda</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-lime-400"
              >
                {CURRENCY_OPTIONS.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Ingreso mensual</label>
                <span className="text-xs text-lime-700 font-mono">{currency}{monthlyIncome.toLocaleString()}</span>
              </div>
              <input
                type="range" min={20000} max={500000} step={5000} value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                className="w-full accent-lime-600"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Ahorro planificado</label>
                <span className="text-xs text-lime-700 font-mono">{currency}{savings.toLocaleString()}</span>
              </div>
              <input
                type="range" min={0} max={Math.max(100000, monthlyIncome / 2)} step={1000} value={savings}
                onChange={(e) => setSavings(Number(e.target.value))}
                className="w-full accent-lime-600"
              />
            </div>

            {/* Editable expense categories */}
            <div className="space-y-2 border-t border-slate-100 pt-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Gastos</label>
                <button
                  type="button"
                  onClick={addExpense}
                  className="text-xs text-lime-600 hover:underline"
                >
                  + Agregar
                </button>
              </div>
              <div className="overflow-x-auto rounded-lg border border-slate-100">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-50 text-[10px] text-slate-400 uppercase tracking-wide">
                      <th className="text-left px-2 py-1.5 font-medium">Categoría</th>
                      <th className="text-left px-2 py-1.5 font-medium">Color</th>
                      <th className="text-left px-2 py-1.5 font-medium">Monto</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {expenses.map((exp, i) => (
                      <tr key={exp.id} className="border-t border-slate-100">
                        <td className="px-1 py-0.5">
                          <input
                            className="w-full border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-lime-400"
                            value={exp.category}
                            onChange={(e) =>
                              setExpenses((prev) => {
                                const n = [...prev];
                                n[i] = { ...n[i], category: e.target.value };
                                return n;
                              })
                            }
                          />
                        </td>
                        <td className="px-1 py-0.5">
                          <input
                            type="color"
                            value={exp.color}
                            onChange={(e) =>
                              setExpenses((prev) => {
                                const n = [...prev];
                                n[i] = { ...n[i], color: e.target.value };
                                return n;
                              })
                            }
                            className="h-6 w-6 rounded border border-slate-200 cursor-pointer p-0"
                          />
                        </td>
                        <td className="px-1 py-0.5">
                          <span className="font-mono text-[10px] text-slate-400">{currency}{exp.planned.toLocaleString()}</span>
                        </td>
                        <td className="px-1 py-0.5 text-right">
                          <button
                            type="button"
                            onClick={() => removeExpense(exp.id)}
                            className="text-red-400 hover:text-red-600 text-sm leading-none px-1"
                          >
                            ×
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Sliders for each expense */}
              {expenses.map((exp) => (
                <div key={exp.id} className="flex items-center gap-2 text-xs">
                  <span className="w-24 shrink-0 truncate text-slate-700" title={exp.category}>{exp.category}</span>
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
                  <span className="w-20 text-right font-mono text-[10px] text-slate-500">{currency}{exp.planned.toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className={`rounded-lg p-3 text-sm font-medium ${balance >= 0 ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
              Balance: {currency}{balance.toLocaleString()} {balance >= 0 ? "(superávit)" : "(déficit)"}
            </div>

            <button
              type="button"
              onClick={() => {
                setExpenses(DEFAULT_EXPENSES);
                setMonthlyIncome(100000);
                setSavings(20000);
                setCurrency("$");
              }}
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              Restablecer datos
            </button>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Vista previa
            </p>
            <VisualizerRenderer spec={budgetSpec} />
          </section>
        </div>
      )}

      {activeTool === "life-time-matrix" && (
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 items-start">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <h2 className="text-base font-semibold text-slate-800">Parámetros</h2>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Título</label>
              <input
                type="text"
                value={timeTitle}
                onChange={(e) => setTimeTitle(e.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-lime-400"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Horas semanales disponibles</label>
                <span className="text-xs text-lime-700 font-mono">{totalHours} h</span>
              </div>
              <input
                type="range" min={10} max={80} step={1} value={totalHours}
                onChange={(e) => setTotalHours(Number(e.target.value))}
                className="w-full accent-lime-600"
              />
            </div>

            {/* Editable tasks */}
            <div className="space-y-2 border-t border-slate-100 pt-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Tareas</label>
                <button
                  type="button"
                  onClick={addTask}
                  className="text-xs text-lime-600 hover:underline"
                >
                  + Agregar
                </button>
              </div>
              <div className="overflow-x-auto rounded-lg border border-slate-100">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-50 text-[10px] text-slate-400 uppercase tracking-wide">
                      <th className="text-left px-2 py-1.5 font-medium">Tarea</th>
                      <th className="text-left px-2 py-1.5 font-medium">Q</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {tasks.map((task, i) => (
                      <tr key={task.id} className="border-t border-slate-100">
                        <td className="px-1 py-0.5">
                          <input
                            className="w-full border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-lime-400"
                            value={task.label}
                            onChange={(e) =>
                              setTasks((prev) => {
                                const n = [...prev];
                                n[i] = { ...n[i], label: e.target.value };
                                return n;
                              })
                            }
                          />
                        </td>
                        <td className="px-1 py-0.5">
                          <select
                            className="w-full border border-slate-200 rounded px-1 py-0.5 text-xs focus:outline-none focus:border-lime-400"
                            value={task.quadrant}
                            onChange={(e) => updateTaskQuadrant(task.id, e.target.value as Quadrant)}
                          >
                            <option value="I">I - Hacer</option>
                            <option value="II">II - Planif.</option>
                            <option value="III">III - Deleg.</option>
                            <option value="IV">IV - Elim.</option>
                          </select>
                        </td>
                        <td className="px-1 py-0.5 text-right">
                          <button
                            type="button"
                            onClick={() => removeTask(task.id)}
                            className="text-red-400 hover:text-red-600 text-sm leading-none px-1"
                          >
                            ×
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Hour sliders per task */}
              {tasks.map((task) => (
                <div key={task.id} className="flex items-center gap-2 text-xs">
                  <span className="w-32 shrink-0 truncate text-slate-700" title={task.label}>{task.label}</span>
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
                  <span className="w-10 text-right font-mono text-[10px] text-slate-500">{task.hours}h</span>
                  <span className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${
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

            <button
              type="button"
              onClick={() => {
                setTasks(DEFAULT_TASKS);
                setTotalHours(40);
              }}
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              Restablecer datos
            </button>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Vista previa
            </p>
            <VisualizerRenderer spec={timeSpec} />
          </section>
        </div>
      )}
    </div>
  );
}
