import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VisualizerRenderer from "../../visualizadores/graficos/VisualizerRenderer";
import type { EnvCarbonCycleSpec, EnvEcosystemSpec } from "../../visualizadores/types";

type Tool = "env-carbon-cycle" | "env-ecosystem";
type Biome = EnvEcosystemSpec["biome"];

function buildCarbonCycle(humanEmissions: number): EnvCarbonCycleSpec {
  return {
    kind: "env-carbon-cycle",
    title: "Ciclo global del carbono",
    description: "Flujos de carbono entre reservorios clave (GtC/año)",
    reservoirs: [
      { id: "atm", label: "Atmosfera", amount: 860 + humanEmissions * 10, unit: "GtC", cx: 0.5, cy: 0.1, color: "#60a5fa", radius: 40 },
      { id: "ocean", label: "Oceanos", amount: 38000, unit: "GtC", cx: 0.2, cy: 0.75, color: "#2563eb", radius: 55 },
      { id: "land", label: "Tierra/Plantas", amount: 2200, unit: "GtC", cx: 0.8, cy: 0.75, color: "#16a34a", radius: 45 },
    ],
    fluxes: [
      { id: "f1", fromId: "ocean", toId: "atm", amount: 90, label: "Evaporacion" },
      { id: "f2", fromId: "atm", toId: "ocean", amount: 92, label: "Disolucion" },
      { id: "f3", fromId: "land", toId: "atm", amount: 120, label: "Respiracion" },
      { id: "f4", fromId: "atm", toId: "land", amount: 123, label: "Fotosintesis" },
    ],
    humanFlux: {
      fromId: "land",
      amount: humanEmissions,
      label: `Combustibles fosiles (${humanEmissions} GtC/año)`,
    },
  };
}

const BIOME_DATA: Record<Biome, EnvEcosystemSpec["trophicLevels"]> = {
  "bosque-tropical": [
    { level: 1, label: "Productores", organisms: [{ id: "trees", name: "Arboles", population: 10000, energyPercent: 100, color: "#16a34a" }] },
    { level: 2, label: "Herbivoros", organisms: [{ id: "deer", name: "Venados", population: 500, energyPercent: 10, color: "#ca8a04" }, { id: "monkey", name: "Monos", population: 200, energyPercent: 8, color: "#a78bfa" }] },
    { level: 3, label: "Carnivoros", organisms: [{ id: "jaguar", name: "Jaguar", population: 20, energyPercent: 1, color: "#dc2626" }] },
  ],
  desierto: [
    { level: 1, label: "Productores", organisms: [{ id: "cactus", name: "Cactus", population: 3000, energyPercent: 100, color: "#65a30d" }] },
    { level: 2, label: "Herbivoros", organisms: [{ id: "rabbit", name: "Conejos", population: 150, energyPercent: 10, color: "#ca8a04" }] },
    { level: 3, label: "Carnivoros", organisms: [{ id: "snake", name: "Serpientes", population: 15, energyPercent: 1, color: "#dc2626" }] },
  ],
  oceano: [
    { level: 1, label: "Fitoplancton", organisms: [{ id: "phyto", name: "Fitoplancton", population: 1000000, energyPercent: 100, color: "#0ea5e9" }] },
    { level: 2, label: "Zooplancton", organisms: [{ id: "zoo", name: "Zooplancton", population: 50000, energyPercent: 10, color: "#38bdf8" }] },
    { level: 3, label: "Peces", organisms: [{ id: "fish", name: "Peces pequenos", population: 5000, energyPercent: 1, color: "#ca8a04" }] },
    { level: 4, label: "Depredadores", organisms: [{ id: "shark", name: "Tiburones", population: 50, energyPercent: 0.1, color: "#dc2626" }] },
  ],
  pradera: [
    { level: 1, label: "Pastizal", organisms: [{ id: "grass", name: "Pastos", population: 50000, energyPercent: 100, color: "#16a34a" }] },
    { level: 2, label: "Herbivoros", organisms: [{ id: "bison", name: "Bisontes", population: 1000, energyPercent: 10, color: "#ca8a04" }] },
    { level: 3, label: "Carnivoros", organisms: [{ id: "wolf", name: "Lobos", population: 40, energyPercent: 1, color: "#dc2626" }] },
  ],
  tundra: [
    { level: 1, label: "Plantas", organisms: [{ id: "moss", name: "Musgos/Liquenes", population: 8000, energyPercent: 100, color: "#65a30d" }] },
    { level: 2, label: "Herbivoros", organisms: [{ id: "caribou", name: "Renos", population: 300, energyPercent: 10, color: "#ca8a04" }] },
    { level: 3, label: "Carnivoros", organisms: [{ id: "bear", name: "Osos polares", population: 10, energyPercent: 1, color: "#94a3b8" }] },
  ],
};

export default function HerramientasAmbiental() {
  const [activeTool, setActiveTool] = useState<Tool>("env-ecosystem");
  const [humanEmissions, setHumanEmissions] = useState(9);
  const [biome, setBiome] = useState<Biome>("bosque-tropical");

  const carbonSpec = useMemo(() => buildCarbonCycle(humanEmissions), [humanEmissions]);

  const ecosystemSpec = useMemo<EnvEcosystemSpec>(() => ({
    kind: "env-ecosystem",
    title: `Ecosistema de ${biome.replace("-", " ")}`,
    description: "Piramide de energia con perdida del 90% por nivel trofico",
    biome,
    trophicLevels: BIOME_DATA[biome],
    energyLoss: 90,
  }), [biome]);

  const tools: { id: Tool; label: string }[] = [
    { id: "env-ecosystem", label: "Piramide ecologica" },
    { id: "env-carbon-cycle", label: "Ciclo del carbono" },
  ];

  return (
    <div className="space-y-6 px-6 py-8">
      <div>
        <Link to="/herramientas" className="text-sm text-blue-600 hover:underline">
          &larr; Volver a herramientas
        </Link>
      </div>
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">Herramientas Ambientales</h1>
        <p className="text-sm text-slate-600">Explora ecosistemas y el ciclo del carbono de forma interactiva.</p>
      </header>

      <div className="flex flex-wrap gap-2">
        {tools.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTool(t.id)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
              activeTool === t.id
                ? "border-teal-600 bg-teal-600 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-teal-400 hover:text-teal-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {activeTool === "env-ecosystem" && (
        <div className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">Bioma</h2>
            <select
              value={biome}
              onChange={(e) => setBiome(e.target.value as Biome)}
              className="mt-3 rounded-md border border-slate-200 px-3 py-2 text-sm"
            >
              <option value="bosque-tropical">Bosque tropical</option>
              <option value="desierto">Desierto</option>
              <option value="oceano">Oceano</option>
              <option value="pradera">Pradera</option>
              <option value="tundra">Tundra</option>
            </select>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={ecosystemSpec} />
          </section>
        </div>
      )}

      {activeTool === "env-carbon-cycle" && (
        <div className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">Emisiones humanas</h2>
            <label className="mt-4 block space-y-1 text-sm text-slate-600">
              <span className="font-medium text-slate-700">
                Combustibles fosiles: <span className="text-teal-700">{humanEmissions} GtC/año</span>
              </span>
              <input
                type="range" min={1} max={20} step={1} value={humanEmissions}
                onChange={(e) => setHumanEmissions(Number(e.target.value))}
                className="w-full accent-teal-600"
              />
            </label>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={carbonSpec} />
          </section>
        </div>
      )}
    </div>
  );
}
