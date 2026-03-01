import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VisualizerRenderer from "../../visualizadores/graficos/VisualizerRenderer";
import type { NatWeatherSpec, NatWaterCycleSpec } from "../../visualizadores/types";

type Tool = "nat-weather" | "nat-water-cycle";
type Season = NatWeatherSpec["season"];

const SEASON_DEFAULTS: Record<Season, NatWeatherSpec["variables"]> = {
  verano:    { temperature: 32, humidity: 55, pressure: 1010, windSpeed: 20, precipitation: 5 },
  otono:     { temperature: 16, humidity: 72, pressure: 1015, windSpeed: 25, precipitation: 35 },
  invierno:  { temperature: 4,  humidity: 80, pressure: 1020, windSpeed: 30, precipitation: 60 },
  primavera: { temperature: 22, humidity: 65, pressure: 1013, windSpeed: 15, precipitation: 20 },
};

function buildWeatherSpec(season: Season, vars: NatWeatherSpec["variables"]): NatWeatherSpec {
  const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  return {
    kind: "nat-weather",
    title: `Observatorio meteorologico — ${season}`,
    location: "Estacion meteorologica",
    season,
    variables: vars,
    timeSeries: [
      {
        id: "temp",
        label: "Temperatura (°C)",
        color: "#ef4444",
        data: months.map((_, i) => ({
          x: i,
          y: Math.round(vars.temperature + 10 * Math.sin((i - 3) * Math.PI / 6)),
        })),
      },
      {
        id: "precip",
        label: "Precipitacion (mm)",
        color: "#3b82f6",
        data: months.map((_, i) => ({
          x: i,
          y: Math.max(0, Math.round(vars.precipitation + 20 * Math.cos((i - 1) * Math.PI / 6))),
        })),
      },
    ],
    phenomena: [
      { id: "lluvia", name: "Lluvia", description: "Precipitacion liquida", active: vars.precipitation > 20 },
      { id: "niebla", name: "Niebla", description: "Visibilidad reducida", active: vars.humidity > 75 },
      { id: "tormenta", name: "Tormenta", description: "Viento fuerte con lluvia", active: vars.windSpeed > 28 },
    ],
  };
}

const WATER_CYCLE: NatWaterCycleSpec = {
  kind: "nat-water-cycle",
  title: "Ciclo hidrologico",
  description: "Las etapas del agua en la naturaleza",
  stages: [
    { id: "ocean", label: "Oceano/Lagos", description: "Gran reservorio de agua liquida", cx: 80, cy: 280, radius: 40, color: "#3b82f6", active: false },
    { id: "evaporation", label: "Evaporacion", description: "El calor solar convierte el agua en vapor", cx: 200, cy: 200, radius: 32, color: "#60a5fa", active: true },
    { id: "condensation", label: "Condensacion", description: "El vapor forma nubes al enfriarse", cx: 340, cy: 80, radius: 32, color: "#94a3b8", active: false },
    { id: "precipitation", label: "Precipitacion", description: "Lluvia, nieve o granizo", cx: 460, cy: 150, radius: 30, color: "#2563eb", active: false },
    { id: "runoff", label: "Escorrentia", description: "El agua fluye hacia rios y mares", cx: 440, cy: 280, radius: 28, color: "#06b6d4", active: false },
    { id: "infiltration", label: "Infiltracion", description: "El agua penetra el suelo", cx: 320, cy: 320, radius: 26, color: "#a3e635", active: false },
  ],
  fluxes: [
    { id: "f1", fromId: "ocean", toId: "evaporation", label: "Evaporacion", rate: 3, color: "#60a5fa" },
    { id: "f2", fromId: "evaporation", toId: "condensation", label: "Ascenso", rate: 3, color: "#94a3b8" },
    { id: "f3", fromId: "condensation", toId: "precipitation", label: "Precipitacion", rate: 2, color: "#2563eb" },
    { id: "f4", fromId: "precipitation", toId: "runoff", label: "Escorrentia", rate: 2, color: "#06b6d4" },
    { id: "f5", fromId: "precipitation", toId: "infiltration", label: "Infiltracion", rate: 1, color: "#a3e635" },
    { id: "f6", fromId: "runoff", toId: "ocean", label: "Retorno al mar", rate: 2, color: "#3b82f6" },
  ],
  humanImpactFactor: 0.2,
};

export default function HerramientasNaturales() {
  const [activeTool, setActiveTool] = useState<Tool>("nat-weather");
  const [season, setSeason] = useState<Season>("primavera");
  const [vars, setVars] = useState<NatWeatherSpec["variables"]>(SEASON_DEFAULTS.primavera);

  const weatherSpec = useMemo(() => buildWeatherSpec(season, vars), [season, vars]);

  const handleSeasonChange = (s: Season) => {
    setSeason(s);
    setVars(SEASON_DEFAULTS[s]);
  };

  const tools: { id: Tool; label: string }[] = [
    { id: "nat-weather", label: "Meteorologia" },
    { id: "nat-water-cycle", label: "Ciclo del agua" },
  ];

  return (
    <div className="space-y-6 px-6 py-8">
      <div>
        <Link to="/herramientas" className="text-sm text-blue-600 hover:underline">
          &larr; Volver a herramientas
        </Link>
      </div>
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">Ciencias Naturales</h1>
        <p className="text-sm text-slate-600">Explora fenomenos meteorologicos y el ciclo del agua.</p>
      </header>

      <div className="flex flex-wrap gap-2">
        {tools.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTool(t.id)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
              activeTool === t.id
                ? "border-sky-600 bg-sky-600 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-sky-400 hover:text-sky-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {activeTool === "nat-weather" && (
        <div className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">Variables meteorologicas</h2>
            <div className="mt-4 space-y-4">
              <div className="flex flex-wrap gap-2">
                {(["verano", "otono", "invierno", "primavera"] as Season[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSeasonChange(s)}
                    className={`rounded-lg border px-3 py-1.5 text-sm font-medium capitalize transition-colors ${
                      season === s ? "border-sky-600 bg-sky-600 text-white" : "border-slate-200 text-slate-600 hover:border-sky-400"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {(
                  [
                    { key: "temperature" as const, label: "Temperatura (°C)", min: -10, max: 45 },
                    { key: "humidity" as const, label: "Humedad (%)", min: 0, max: 100 },
                    { key: "windSpeed" as const, label: "Velocidad del viento (km/h)", min: 0, max: 100 },
                    { key: "precipitation" as const, label: "Precipitacion (mm)", min: 0, max: 120 },
                  ] as const
                ).map(({ key, label, min, max }) => (
                  <label key={key} className="space-y-1 text-sm text-slate-600">
                    <span className="font-medium text-slate-700">
                      {label}: <span className="text-sky-700">{vars[key]}</span>
                    </span>
                    <input
                      type="range" min={min} max={max} step={1} value={vars[key]}
                      onChange={(e) => setVars((v) => ({ ...v, [key]: Number(e.target.value) }))}
                      className="w-full accent-sky-600"
                    />
                  </label>
                ))}
              </div>
            </div>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={weatherSpec} />
          </section>
        </div>
      )}

      {activeTool === "nat-water-cycle" && (
        <div className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={WATER_CYCLE} />
          </section>
        </div>
      )}
    </div>
  );
}
