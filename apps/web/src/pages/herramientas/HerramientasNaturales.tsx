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

type StageRow = { id: string; label: string; description: string; cx: number; cy: number; radius: number; color: string; active: boolean };
type FluxRow = { id: string; fromId: string; toId: string; label: string; rate: number; color: string };

const DEFAULT_STAGES: StageRow[] = [
  { id: "ocean", label: "Oceano/Lagos", description: "Gran reservorio de agua liquida", cx: 80, cy: 280, radius: 40, color: "#3b82f6", active: false },
  { id: "evaporation", label: "Evaporacion", description: "El calor solar convierte el agua en vapor", cx: 200, cy: 200, radius: 32, color: "#60a5fa", active: true },
  { id: "condensation", label: "Condensacion", description: "El vapor forma nubes al enfriarse", cx: 340, cy: 80, radius: 32, color: "#94a3b8", active: false },
  { id: "precipitation", label: "Precipitacion", description: "Lluvia, nieve o granizo", cx: 460, cy: 150, radius: 30, color: "#2563eb", active: false },
  { id: "runoff", label: "Escorrentia", description: "El agua fluye hacia rios y mares", cx: 440, cy: 280, radius: 28, color: "#06b6d4", active: false },
  { id: "infiltration", label: "Infiltracion", description: "El agua penetra el suelo", cx: 320, cy: 320, radius: 26, color: "#a3e635", active: false },
];

const DEFAULT_FLUXES: FluxRow[] = [
  { id: "f1", fromId: "ocean", toId: "evaporation", label: "Evaporacion", rate: 3, color: "#60a5fa" },
  { id: "f2", fromId: "evaporation", toId: "condensation", label: "Ascenso", rate: 3, color: "#94a3b8" },
  { id: "f3", fromId: "condensation", toId: "precipitation", label: "Precipitacion", rate: 2, color: "#2563eb" },
  { id: "f4", fromId: "precipitation", toId: "runoff", label: "Escorrentia", rate: 2, color: "#06b6d4" },
  { id: "f5", fromId: "precipitation", toId: "infiltration", label: "Infiltracion", rate: 1, color: "#a3e635" },
  { id: "f6", fromId: "runoff", toId: "ocean", label: "Retorno al mar", rate: 2, color: "#3b82f6" },
];

function buildWeatherSpec(title: string, location: string, season: Season, vars: NatWeatherSpec["variables"]): NatWeatherSpec {
  const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  return {
    kind: "nat-weather",
    title: title || `Observatorio meteorologico — ${season}`,
    location,
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

export default function HerramientasNaturales() {
  const [activeTool, setActiveTool] = useState<Tool>("nat-weather");

  // ── Weather state ─────────────────────────────────────────────────────────
  const [weatherTitle, setWeatherTitle] = useState("Observatorio meteorologico");
  const [locationName, setLocationName] = useState("Estacion meteorologica");
  const [season, setSeason] = useState<Season>("primavera");
  const [vars, setVars] = useState<NatWeatherSpec["variables"]>(SEASON_DEFAULTS.primavera);

  // ── Water cycle state ─────────────────────────────────────────────────────
  const [waterTitle, setWaterTitle] = useState("Ciclo hidrologico");
  const [stages, setStages] = useState<StageRow[]>(DEFAULT_STAGES);
  const [fluxes, setFluxes] = useState<FluxRow[]>(DEFAULT_FLUXES);
  const [humanImpactFactor, setHumanImpactFactor] = useState(0.2);

  const weatherSpec = useMemo(
    () => buildWeatherSpec(weatherTitle, locationName, season, vars),
    [weatherTitle, locationName, season, vars],
  );

  const waterCycleSpec = useMemo<NatWaterCycleSpec>(() => ({
    kind: "nat-water-cycle",
    title: waterTitle || "Ciclo hidrologico",
    description: "Las etapas del agua en la naturaleza",
    stages,
    fluxes,
    humanImpactFactor,
  }), [waterTitle, stages, fluxes, humanImpactFactor]);

  const handleSeasonChange = (s: Season) => {
    setSeason(s);
    setVars(SEASON_DEFAULTS[s]);
    setWeatherTitle(`Observatorio meteorologico — ${s}`);
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

      {/* ── METEOROLOGIA ── */}
      {activeTool === "nat-weather" && (
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <h2 className="text-base font-semibold text-slate-800">Parámetros</h2>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Título</label>
              <input
                type="text"
                value={weatherTitle}
                onChange={(e) => setWeatherTitle(e.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-sky-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Ubicación</label>
              <input
                type="text"
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-sky-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Estación</label>
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
            </div>

            {(
              [
                { key: "temperature" as const, label: "Temperatura (°C)", min: -10, max: 45 },
                { key: "humidity" as const, label: "Humedad (%)", min: 0, max: 100 },
                { key: "windSpeed" as const, label: "Velocidad del viento (km/h)", min: 0, max: 100 },
                { key: "precipitation" as const, label: "Precipitacion (mm)", min: 0, max: 120 },
              ] as const
            ).map(({ key, label, min, max }) => (
              <div key={key} className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium text-slate-600">{label}</label>
                  <span className="text-xs text-sky-700 font-mono">{vars[key]}</span>
                </div>
                <input
                  type="range" min={min} max={max} step={1} value={vars[key]}
                  onChange={(e) => setVars((v) => ({ ...v, [key]: Number(e.target.value) }))}
                  className="w-full accent-sky-600"
                />
              </div>
            ))}

            <button
              type="button"
              onClick={() => {
                handleSeasonChange("primavera");
                setWeatherTitle("Observatorio meteorologico");
                setLocationName("Estacion meteorologica");
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
            <VisualizerRenderer spec={weatherSpec} />
          </section>
        </div>
      )}

      {/* ── CICLO DEL AGUA ── */}
      {activeTool === "nat-water-cycle" && (
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 items-start">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <h2 className="text-base font-semibold text-slate-800">Parámetros</h2>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Título</label>
              <input
                type="text"
                value={waterTitle}
                onChange={(e) => setWaterTitle(e.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-sky-400"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Impacto humano</label>
                <span className="text-xs text-sky-700 font-mono">{humanImpactFactor.toFixed(2)}</span>
              </div>
              <input
                type="range" min={0} max={1} step={0.05} value={humanImpactFactor}
                onChange={(e) => setHumanImpactFactor(Number(e.target.value))}
                className="w-full accent-sky-600"
              />
            </div>

            {/* Editable stages */}
            <div className="space-y-2 border-t border-slate-100 pt-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Etapas</label>
                <button
                  type="button"
                  onClick={() =>
                    setStages((prev) => [
                      ...prev,
                      { id: `s${Date.now()}`, label: "Nueva etapa", description: "Descripcion", cx: 300, cy: 200, radius: 28, color: "#64748b", active: false },
                    ])
                  }
                  className="text-xs text-sky-600 hover:underline"
                >
                  + Agregar
                </button>
              </div>
              <div className="overflow-x-auto rounded-lg border border-slate-100">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-50 text-[10px] text-slate-400 uppercase tracking-wide">
                      <th className="text-left px-2 py-1.5 font-medium">Etapa</th>
                      <th className="text-left px-2 py-1.5 font-medium">Descripción</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {stages.map((s, i) => (
                      <tr key={s.id} className="border-t border-slate-100">
                        <td className="px-1 py-0.5">
                          <input
                            className="w-full border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-sky-400"
                            value={s.label}
                            onChange={(e) =>
                              setStages((prev) => {
                                const n = [...prev];
                                n[i] = { ...n[i], label: e.target.value };
                                return n;
                              })
                            }
                          />
                        </td>
                        <td className="px-1 py-0.5">
                          <input
                            className="w-full border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-sky-400"
                            value={s.description}
                            onChange={(e) =>
                              setStages((prev) => {
                                const n = [...prev];
                                n[i] = { ...n[i], description: e.target.value };
                                return n;
                              })
                            }
                          />
                        </td>
                        <td className="px-1 py-0.5 text-right">
                          <button
                            type="button"
                            onClick={() => setStages((prev) => prev.filter((_, j) => j !== i))}
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

            {/* Editable fluxes */}
            <div className="space-y-2 border-t border-slate-100 pt-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Flujos</label>
                <button
                  type="button"
                  onClick={() =>
                    setFluxes((prev) => [
                      ...prev,
                      { id: `fl${Date.now()}`, fromId: stages[0]?.id ?? "", toId: stages[1]?.id ?? "", label: "Nuevo flujo", rate: 1, color: "#64748b" },
                    ])
                  }
                  className="text-xs text-sky-600 hover:underline"
                >
                  + Agregar
                </button>
              </div>
              <div className="overflow-x-auto rounded-lg border border-slate-100">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-50 text-[10px] text-slate-400 uppercase tracking-wide">
                      <th className="text-left px-2 py-1.5 font-medium">Nombre</th>
                      <th className="text-left px-2 py-1.5 font-medium">Tasa</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {fluxes.map((f, i) => (
                      <tr key={f.id} className="border-t border-slate-100">
                        <td className="px-1 py-0.5">
                          <input
                            className="w-full border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-sky-400"
                            value={f.label}
                            onChange={(e) =>
                              setFluxes((prev) => {
                                const n = [...prev];
                                n[i] = { ...n[i], label: e.target.value };
                                return n;
                              })
                            }
                          />
                        </td>
                        <td className="px-1 py-0.5">
                          <input
                            type="number" step="any"
                            className="w-14 border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-sky-400"
                            value={f.rate}
                            onChange={(e) =>
                              setFluxes((prev) => {
                                const n = [...prev];
                                n[i] = { ...n[i], rate: Number(e.target.value) };
                                return n;
                              })
                            }
                          />
                        </td>
                        <td className="px-1 py-0.5 text-right">
                          <button
                            type="button"
                            onClick={() => setFluxes((prev) => prev.filter((_, j) => j !== i))}
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
              <button
                type="button"
                onClick={() => {
                  setStages(DEFAULT_STAGES);
                  setFluxes(DEFAULT_FLUXES);
                  setHumanImpactFactor(0.2);
                  setWaterTitle("Ciclo hidrologico");
                }}
                className="text-xs text-slate-400 hover:text-slate-600"
              >
                Restablecer datos
              </button>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Vista previa
            </p>
            <VisualizerRenderer spec={waterCycleSpec} />
          </section>
        </div>
      )}
    </div>
  );
}
