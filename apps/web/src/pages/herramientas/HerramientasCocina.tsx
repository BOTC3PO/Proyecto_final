import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VisualizerRenderer from "../../visualizadores/graficos/VisualizerRenderer";
import type { CookRecipeScalerSpec, CookMaillardSpec } from "../../visualizadores/types";

type Tool = "cook-recipe-scaler" | "cook-maillard";

const BASE_INGREDIENTS: CookRecipeScalerSpec["ingredients"] = [
  { id: "harina", name: "Harina", amountBase: 500, unit: "g", amountCurrent: 500, category: "dry" },
  { id: "huevos", name: "Huevos", amountBase: 3, unit: "unidad", amountCurrent: 3, category: "fresh" },
  { id: "leche", name: "Leche", amountBase: 250, unit: "ml", amountCurrent: 250, category: "liquid" },
  { id: "manteca", name: "Manteca", amountBase: 100, unit: "g", amountCurrent: 100, category: "fresh" },
  { id: "azucar", name: "Azucar", amountBase: 150, unit: "g", amountCurrent: 150, category: "dry" },
  { id: "sal", name: "Sal", amountBase: 5, unit: "g", amountCurrent: 5, category: "spice" },
];
const BASE_SERVINGS = 6;
const BASE_NUTRITION: CookRecipeScalerSpec["nutritionPerServing"] = {
  calories: 320,
  protein: 8,
  carbs: 52,
  fat: 10,
};

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
  const [servings, setServings] = useState(BASE_SERVINGS);
  const [temperature, setTemperature] = useState(160);
  const [time, setTime] = useState(8);
  const [moisture, setMoisture] = useState(30);

  const recipeSpec = useMemo<CookRecipeScalerSpec>(() => {
    const factor = servings / BASE_SERVINGS;
    return {
      kind: "cook-recipe-scaler",
      title: "Torta basica",
      description: "Receta escalable para torta esponjosa",
      servingsBase: BASE_SERVINGS,
      servingsCurrent: servings,
      ingredients: BASE_INGREDIENTS.map((ing) => ({
        ...ing,
        amountCurrent: Math.round(ing.amountBase * factor * 10) / 10,
      })),
      nutritionPerServing: BASE_NUTRITION,
      steps: [
        "Precalentar el horno a 180 °C",
        "Mezclar los ingredientes secos",
        "Incorporar huevos y liquidos",
        "Hornear por 30-35 minutos",
      ],
    };
  }, [servings]);

  const maillardSpec = useMemo<CookMaillardSpec>(() => ({
    kind: "cook-maillard",
    title: "Reaccion de Maillard",
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
  }), [temperature, time, moisture]);

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

      {activeTool === "cook-recipe-scaler" && (
        <div className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">Porciones</h2>
            <label className="mt-4 block space-y-1 text-sm text-slate-600">
              <span className="font-medium text-slate-700">
                Cantidad de porciones: <span className="text-orange-700">{servings}</span>
              </span>
              <input
                type="range" min={1} max={24} step={1} value={servings}
                onChange={(e) => setServings(Number(e.target.value))}
                className="w-full accent-orange-600"
              />
            </label>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={recipeSpec} />
          </section>
        </div>
      )}

      {activeTool === "cook-maillard" && (
        <div className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">Parametros de coccion</h2>
            <div className="mt-4 grid gap-5 sm:grid-cols-3">
              <label className="space-y-1 text-sm text-slate-600">
                <span className="font-medium text-slate-700">
                  Temperatura: <span className="text-orange-700">{temperature} °C</span>
                </span>
                <input
                  type="range" min={50} max={280} step={5} value={temperature}
                  onChange={(e) => setTemperature(Number(e.target.value))}
                  className="w-full accent-orange-600"
                />
              </label>
              <label className="space-y-1 text-sm text-slate-600">
                <span className="font-medium text-slate-700">
                  Tiempo: <span className="text-orange-700">{time} min</span>
                </span>
                <input
                  type="range" min={1} max={30} step={1} value={time}
                  onChange={(e) => setTime(Number(e.target.value))}
                  className="w-full accent-orange-600"
                />
              </label>
              <label className="space-y-1 text-sm text-slate-600">
                <span className="font-medium text-slate-700">
                  Humedad: <span className="text-orange-700">{moisture}%</span>
                </span>
                <input
                  type="range" min={0} max={100} step={5} value={moisture}
                  onChange={(e) => setMoisture(Number(e.target.value))}
                  className="w-full accent-orange-600"
                />
              </label>
            </div>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={maillardSpec} />
          </section>
        </div>
      )}
    </div>
  );
}
