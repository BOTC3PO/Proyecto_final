import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VisualizerRenderer from "../../visualizadores/graficos/VisualizerRenderer";
import type { CookRecipeScalerSpec, CookMaillardSpec } from "../../visualizadores/types";

type Tool = "cook-recipe-scaler" | "cook-maillard";

type IngredientRow = {
  id: string;
  name: string;
  amountBase: number;
  unit: string;
  category: "dry" | "liquid" | "fresh" | "spice";
};

const DEFAULT_INGREDIENTS: IngredientRow[] = [
  { id: "harina", name: "Harina", amountBase: 500, unit: "g", category: "dry" },
  { id: "huevos", name: "Huevos", amountBase: 3, unit: "unidad", category: "fresh" },
  { id: "leche", name: "Leche", amountBase: 250, unit: "ml", category: "liquid" },
  { id: "manteca", name: "Manteca", amountBase: 100, unit: "g", category: "fresh" },
  { id: "azucar", name: "Azucar", amountBase: 150, unit: "g", category: "dry" },
  { id: "sal", name: "Sal", amountBase: 5, unit: "g", category: "spice" },
];

const DEFAULT_STEPS = [
  "Precalentar el horno a 180 °C",
  "Mezclar los ingredientes secos",
  "Incorporar huevos y liquidos",
  "Hornear por 30-35 minutos",
];

const DEFAULT_NUTRITION = {
  calories: 320,
  protein: 8,
  carbs: 52,
  fat: 10,
};

const BASE_SERVINGS = 6;

const MAILLARD_ZONES: CookMaillardSpec["reactionZones"] = [
  { id: "z1", label: "Sin reaccion", minTemp: 0, maxTemp: 100, color: "#fef9c3", description: "Por debajo de 100 °C no ocurre la reaccion de Maillard" },
  { id: "z2", label: "Inicio", minTemp: 100, maxTemp: 140, color: "#fcd34d", description: "Comienza el dorado suave y el aroma" },
  { id: "z3", label: "Maillard optimo", minTemp: 140, maxTemp: 180, color: "#d97706", description: "Reaccion optima: sabores complejos y color dorado" },
  { id: "z4", label: "Caramelizacion", minTemp: 180, maxTemp: 220, color: "#92400e", description: "Los azucares se caramelizan, tonos oscuros" },
  { id: "z5", label: "Carbonizacion", minTemp: 220, maxTemp: 300, color: "#1c1917", description: "Se quema: sabor amargo y compuestos no deseados" },
];

function getCurrentZone(temp: number): string {
  if (temp < 100) return "z1";
  if (temp < 140) return "z2";
  if (temp < 180) return "z3";
  if (temp < 220) return "z4";
  return "z5";
}

export default function HerramientasCocina() {
  const [activeTool, setActiveTool] = useState<Tool>("cook-recipe-scaler");

  // ── Recipe scaler state ───────────────────────────────────────────────────
  const [recipeTitle, setRecipeTitle] = useState("Torta basica");
  const [servings, setServings] = useState(BASE_SERVINGS);
  const [ingredients, setIngredients] = useState<IngredientRow[]>(DEFAULT_INGREDIENTS);
  const [steps, setSteps] = useState<string[]>(DEFAULT_STEPS);
  const [nutrition, setNutrition] = useState(DEFAULT_NUTRITION);

  // ── Maillard state ────────────────────────────────────────────────────────
  const [maillardTitle, setMaillardTitle] = useState("Reaccion de Maillard");
  const [temperature, setTemperature] = useState(160);
  const [time, setTime] = useState(8);
  const [moisture, setMoisture] = useState(30);

  // ── Specs ─────────────────────────────────────────────────────────────────

  const recipeSpec = useMemo<CookRecipeScalerSpec>(() => {
    const factor = servings / BASE_SERVINGS;
    return {
      kind: "cook-recipe-scaler",
      title: recipeTitle || "Torta basica",
      description: "Receta escalable para torta esponjosa",
      servingsBase: BASE_SERVINGS,
      servingsCurrent: servings,
      ingredients: ingredients.map((ing) => ({
        ...ing,
        amountCurrent: Math.round(ing.amountBase * factor * 10) / 10,
      })),
      nutritionPerServing: nutrition,
      steps,
    };
  }, [recipeTitle, servings, ingredients, steps, nutrition]);

  const maillardSpec = useMemo<CookMaillardSpec>(() => ({
    kind: "cook-maillard",
    title: maillardTitle || "Reaccion de Maillard",
    description: "Como el calor y la humedad afectan el dorado de los alimentos",
    temperature,
    time,
    moisture,
    reactionZones: MAILLARD_ZONES,
    currentZoneId: getCurrentZone(temperature),
    colorProgression: [
      { temp: 80, color: "#fffbeb", label: "Crudo" },
      { temp: 120, color: "#fef9c3", label: "Inicio" },
      { temp: 150, color: "#fcd34d", label: "Dorado claro" },
      { temp: 170, color: "#d97706", label: "Dorado" },
      { temp: 200, color: "#92400e", label: "Caramelizado" },
      { temp: 240, color: "#1c1917", label: "Quemado" },
    ],
    flavorCompounds: [
      { name: "Pirazinas", formsAbove: 140, description: "Aroma a tostado y nuez" },
      { name: "Furanos", formsAbove: 120, description: "Aroma a caramelo" },
      { name: "Acrilamida", formsAbove: 180, description: "Compuesto no deseado en exceso" },
    ],
  }), [maillardTitle, temperature, time, moisture]);

  const tools: { id: Tool; label: string }[] = [
    { id: "cook-recipe-scaler", label: "Escalador de recetas" },
    { id: "cook-maillard", label: "Reaccion de Maillard" },
  ];

  return (
    <div className="space-y-6 px-6 py-8">
      <div>
        <Link to="/herramientas" className="text-sm text-blue-600 hover:underline">
          &larr; Volver a herramientas
        </Link>
      </div>
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">Herramientas de Cocina</h1>
        <p className="text-sm text-slate-600">Escala recetas y explora la quimica del cocinado.</p>
      </header>

      <div className="flex flex-wrap gap-2">
        {tools.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTool(t.id)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
              activeTool === t.id
                ? "border-orange-600 bg-orange-600 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-orange-400 hover:text-orange-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── ESCALADOR DE RECETAS ── */}
      {activeTool === "cook-recipe-scaler" && (
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 items-start">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <h2 className="text-base font-semibold text-slate-800">Parámetros</h2>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Título de la receta</label>
              <input
                type="text"
                value={recipeTitle}
                onChange={(e) => setRecipeTitle(e.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Porciones</label>
                <span className="text-xs text-orange-700 font-mono">{servings}</span>
              </div>
              <input
                type="range" min={1} max={24} step={1} value={servings}
                onChange={(e) => setServings(Number(e.target.value))}
                className="w-full accent-orange-600"
              />
            </div>

            {/* Editable ingredients */}
            <div className="space-y-2 border-t border-slate-100 pt-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Ingredientes</label>
                <button
                  type="button"
                  onClick={() =>
                    setIngredients((prev) => [
                      ...prev,
                      { id: `ing${Date.now()}`, name: "Nuevo", amountBase: 100, unit: "g", category: "dry" },
                    ])
                  }
                  className="text-xs text-orange-600 hover:underline"
                >
                  + Agregar
                </button>
              </div>
              <div className="overflow-x-auto rounded-lg border border-slate-100">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-50 text-[10px] text-slate-400 uppercase tracking-wide">
                      <th className="text-left px-2 py-1.5 font-medium">Nombre</th>
                      <th className="text-left px-2 py-1.5 font-medium">Cant.</th>
                      <th className="text-left px-2 py-1.5 font-medium">Unidad</th>
                      <th className="text-left px-2 py-1.5 font-medium">Cat.</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {ingredients.map((ing, i) => (
                      <tr key={ing.id} className="border-t border-slate-100">
                        <td className="px-1 py-0.5">
                          <input
                            className="w-full border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-orange-400"
                            value={ing.name}
                            onChange={(e) =>
                              setIngredients((prev) => {
                                const n = [...prev];
                                n[i] = { ...n[i], name: e.target.value };
                                return n;
                              })
                            }
                          />
                        </td>
                        <td className="px-1 py-0.5">
                          <input
                            type="number" step="any"
                            className="w-14 border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-orange-400"
                            value={ing.amountBase}
                            onChange={(e) =>
                              setIngredients((prev) => {
                                const n = [...prev];
                                n[i] = { ...n[i], amountBase: Number(e.target.value) };
                                return n;
                              })
                            }
                          />
                        </td>
                        <td className="px-1 py-0.5">
                          <input
                            className="w-14 border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-orange-400"
                            value={ing.unit}
                            onChange={(e) =>
                              setIngredients((prev) => {
                                const n = [...prev];
                                n[i] = { ...n[i], unit: e.target.value };
                                return n;
                              })
                            }
                          />
                        </td>
                        <td className="px-1 py-0.5">
                          <select
                            className="w-16 border border-slate-200 rounded px-1 py-0.5 text-xs focus:outline-none focus:border-orange-400"
                            value={ing.category}
                            onChange={(e) =>
                              setIngredients((prev) => {
                                const n = [...prev];
                                n[i] = { ...n[i], category: e.target.value as IngredientRow["category"] };
                                return n;
                              })
                            }
                          >
                            <option value="dry">Seco</option>
                            <option value="liquid">Líq.</option>
                            <option value="fresh">Fresco</option>
                            <option value="spice">Especia</option>
                          </select>
                        </td>
                        <td className="px-1 py-0.5 text-right">
                          <button
                            type="button"
                            onClick={() => setIngredients((prev) => prev.filter((_, j) => j !== i))}
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
            </div>

            {/* Editable steps */}
            <div className="space-y-2 border-t border-slate-100 pt-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Pasos</label>
                <button
                  type="button"
                  onClick={() => setSteps((prev) => [...prev, "Nuevo paso"])}
                  className="text-xs text-orange-600 hover:underline"
                >
                  + Agregar
                </button>
              </div>
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-1">
                  <span className="text-[10px] text-slate-400 font-mono w-4 shrink-0">{i + 1}.</span>
                  <input
                    className="flex-1 border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-orange-400"
                    value={step}
                    onChange={(e) =>
                      setSteps((prev) => {
                        const n = [...prev];
                        n[i] = e.target.value;
                        return n;
                      })
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setSteps((prev) => prev.filter((_, j) => j !== i))}
                    className="text-red-400 hover:text-red-600 text-sm leading-none px-0.5"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            {/* Editable nutrition */}
            <div className="space-y-2 border-t border-slate-100 pt-4">
              <label className="text-xs font-medium text-slate-600">Nutrición por porción</label>
              <div className="grid grid-cols-2 gap-2">
                {([
                  { key: "calories" as const, label: "Calorías", unit: "kcal" },
                  { key: "protein" as const, label: "Proteína", unit: "g" },
                  { key: "carbs" as const, label: "Carbohidratos", unit: "g" },
                  { key: "fat" as const, label: "Grasa", unit: "g" },
                ]).map(({ key, label, unit }) => (
                  <div key={key} className="space-y-0.5">
                    <label className="text-[10px] text-slate-400">{label} ({unit})</label>
                    <input
                      type="number" step="any"
                      className="w-full border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-orange-400"
                      value={nutrition[key]}
                      onChange={(e) =>
                        setNutrition((prev) => ({ ...prev, [key]: Number(e.target.value) }))
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setIngredients(DEFAULT_INGREDIENTS);
                setSteps(DEFAULT_STEPS);
                setNutrition(DEFAULT_NUTRITION);
                setServings(BASE_SERVINGS);
                setRecipeTitle("Torta basica");
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
            <VisualizerRenderer spec={recipeSpec} />
          </section>
        </div>
      )}

      {/* ── REACCION DE MAILLARD ── */}
      {activeTool === "cook-maillard" && (
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <h2 className="text-base font-semibold text-slate-800">Parámetros</h2>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Título</label>
              <input
                type="text"
                value={maillardTitle}
                onChange={(e) => setMaillardTitle(e.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Temperatura</label>
                <span className="text-xs text-orange-700 font-mono">{temperature} °C</span>
              </div>
              <input
                type="range" min={50} max={280} step={5} value={temperature}
                onChange={(e) => setTemperature(Number(e.target.value))}
                className="w-full accent-orange-600"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Tiempo</label>
                <span className="text-xs text-orange-700 font-mono">{time} min</span>
              </div>
              <input
                type="range" min={1} max={30} step={1} value={time}
                onChange={(e) => setTime(Number(e.target.value))}
                className="w-full accent-orange-600"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Humedad</label>
                <span className="text-xs text-orange-700 font-mono">{moisture}%</span>
              </div>
              <input
                type="range" min={0} max={100} step={5} value={moisture}
                onChange={(e) => setMoisture(Number(e.target.value))}
                className="w-full accent-orange-600"
              />
            </div>

            {/* Maillard zones - viewable */}
            <div className="space-y-2 border-t border-slate-100 pt-4">
              <label className="text-xs font-medium text-slate-600">Zonas de reacción</label>
              <div className="overflow-x-auto rounded-lg border border-slate-100">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-50 text-[10px] text-slate-400 uppercase tracking-wide">
                      <th className="text-left px-2 py-1.5 font-medium">Zona</th>
                      <th className="text-left px-2 py-1.5 font-medium">Rango</th>
                      <th className="text-left px-2 py-1.5 font-medium">Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MAILLARD_ZONES.map((z) => (
                      <tr
                        key={z.id}
                        className={`border-t border-slate-100 ${getCurrentZone(temperature) === z.id ? "bg-orange-50" : ""}`}
                      >
                        <td className="px-2 py-1 text-xs text-slate-700">{z.label}</td>
                        <td className="px-2 py-1 text-xs text-slate-500 font-mono">{z.minTemp}–{z.maxTemp} °C</td>
                        <td className="px-2 py-1">
                          <div
                            className="h-4 w-4 rounded border border-slate-200"
                            style={{ backgroundColor: z.color }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setTemperature(160);
                setTime(8);
                setMoisture(30);
                setMaillardTitle("Reaccion de Maillard");
              }}
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              Restablecer valores
            </button>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Vista previa
            </p>
            <VisualizerRenderer spec={maillardSpec} />
          </section>
        </div>
      )}
    </div>
  );
}
