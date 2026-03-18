import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VisualizerRenderer from "./visualizadores/graficos/VisualizerRenderer";
import type { EnvCarbonCycleSpec, EnvEcosystemSpec } from "./visualizadores/types";

type Tool = "env-ecosystem" | "env-carbon-cycle";
type Biome = EnvEcosystemSpec["biome"];

// ── Defaults ─────────────────────────────────────────────────────────────────

type ReservoirRow = { id: string; label: string; amount: number; unit: string; cx: number; cy: number; color: string; radius: number };
type FluxRow = { id: string; fromId: string; toId: string; amount: number; label: string };

const DEFAULT_RESERVOIRS: ReservoirRow[] = [
  { id: "atm", label: "Atmosfera", amount: 860, unit: "GtC", cx: 0.5, cy: 0.1, color: "#60a5fa", radius: 40 },
  { id: "ocean", label: "Oceanos", amount: 38000, unit: "GtC", cx: 0.2, cy: 0.75, color: "#2563eb", radius: 55 },
  { id: "land", label: "Tierra/Plantas", amount: 2200, unit: "GtC", cx: 0.8, cy: 0.75, color: "#16a34a", radius: 45 },
];

const DEFAULT_FLUXES: FluxRow[] = [
  { id: "f1", fromId: "ocean", toId: "atm", amount: 90, label: "Evaporacion" },
  { id: "f2", fromId: "atm", toId: "ocean", amount: 92, label: "Disolucion" },
  { id: "f3", fromId: "land", toId: "atm", amount: 120, label: "Respiracion" },
  { id: "f4", fromId: "atm", toId: "land", amount: 123, label: "Fotosintesis" },
];

type OrganismRow = { id: string; name: string; population: number; energyPercent: number; color: string };
type TrophicRow = { level: number; label: string; organisms: OrganismRow[] };

const BIOME_DATA: Record<Biome, TrophicRow[]> = {
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

  // ── Ecosystem state ────────────────────────────────────────────────────────
  const [ecoTitle, setEcoTitle] = useState("Piramide ecologica");
  const [biome, setBiome] = useState<Biome>("bosque-tropical");
  const [energyLoss, setEnergyLoss] = useState(90);
  const [trophicLevels, setTrophicLevels] = useState<TrophicRow[]>(BIOME_DATA["bosque-tropical"]);

  // ── Carbon state ───────────────────────────────────────────────────────────
  const [carbonTitle, setCarbonTitle] = useState("Ciclo global del carbono");
  const [humanEmissions, setHumanEmissions] = useState(9);
  const [reservoirs, setReservoirs] = useState<ReservoirRow[]>(DEFAULT_RESERVOIRS);
  const [fluxes, setFluxes] = useState<FluxRow[]>(DEFAULT_FLUXES);

  const handleBiomeChange = (b: Biome) => {
    setBiome(b);
    setTrophicLevels(BIOME_DATA[b]);
    setEcoTitle(`Ecosistema de ${b.replace("-", " ")}`);
  };

  // ── Specs ──────────────────────────────────────────────────────────────────

  const ecosystemSpec = useMemo<EnvEcosystemSpec>(() => ({
    kind: "env-ecosystem",
    title: ecoTitle || `Ecosistema de ${biome.replace("-", " ")}`,
    description: `Piramide de energia con perdida del ${energyLoss}% por nivel trofico`,
    biome,
    trophicLevels,
    energyLoss,
  }), [ecoTitle, biome, trophicLevels, energyLoss]);

  const carbonSpec = useMemo<EnvCarbonCycleSpec>(() => ({
    kind: "env-carbon-cycle",
    title: carbonTitle || "Ciclo global del carbono",
    description: "Flujos de carbono entre reservorios clave (GtC/año)",
    reservoirs: reservoirs.map((r) => ({
      ...r,
      amount: r.id === "atm" ? r.amount + humanEmissions * 10 : r.amount,
    })),
    fluxes,
    humanFlux: {
      fromId: "land",
      amount: humanEmissions,
      label: `Combustibles fosiles (${humanEmissions} GtC/año)`,
    },
  }), [carbonTitle, humanEmissions, reservoirs, fluxes]);

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

      {/* ── ECOSISTEMA ── */}
      {activeTool === "env-ecosystem" && (
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <h2 className="text-base font-semibold text-slate-800">Parámetros</h2>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Título</label>
              <input
                type="text"
                value={ecoTitle}
                onChange={(e) => setEcoTitle(e.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-teal-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Bioma</label>
              <select
                value={biome}
                onChange={(e) => handleBiomeChange(e.target.value as Biome)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-teal-400"
              >
                <option value="bosque-tropical">Bosque tropical</option>
                <option value="desierto">Desierto</option>
                <option value="oceano">Oceano</option>
                <option value="pradera">Pradera</option>
                <option value="tundra">Tundra</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Perdida de energia por nivel</label>
                <span className="text-xs text-slate-400 font-mono">{energyLoss}%</span>
              </div>
              <input
                type="range" min={50} max={99} step={1} value={energyLoss}
                onChange={(e) => setEnergyLoss(Number(e.target.value))}
                className="w-full accent-teal-600"
              />
            </div>

            {/* Editable organisms */}
            <div className="space-y-2 border-t border-slate-100 pt-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Organismos</label>
                <button
                  type="button"
                  onClick={() =>
                    setTrophicLevels((prev) => [
                      ...prev,
                      { level: prev.length + 1, label: "Nuevo nivel", organisms: [{ id: `o${Date.now()}`, name: "Organismo", population: 100, energyPercent: 1, color: "#64748b" }] },
                    ])
                  }
                  className="text-xs text-teal-600 hover:underline"
                >
                  + Agregar nivel
                </button>
              </div>
              {trophicLevels.map((lvl, li) => (
                <div key={li} className="rounded-lg border border-slate-100 p-2 space-y-1">
                  <div className="flex items-center justify-between">
                    <input
                      className="text-xs font-medium text-slate-700 border border-slate-200 rounded px-1.5 py-0.5 w-28 focus:outline-none focus:border-teal-400"
                      value={lvl.label}
                      onChange={(e) =>
                        setTrophicLevels((prev) => {
                          const n = [...prev];
                          n[li] = { ...n[li], label: e.target.value };
                          return n;
                        })
                      }
                    />
                    <button
                      type="button"
                      onClick={() => setTrophicLevels((prev) => prev.filter((_, j) => j !== li))}
                      className="text-red-400 hover:text-red-600 text-sm px-1"
                      title="Quitar nivel"
                    >
                      ×
                    </button>
                  </div>
                  {lvl.organisms.map((org, oi) => (
                    <div key={org.id} className="flex items-center gap-1 text-xs">
                      <input
                        className="w-20 border border-slate-200 rounded px-1 py-0.5 text-xs focus:outline-none focus:border-teal-400"
                        value={org.name}
                        onChange={(e) =>
                          setTrophicLevels((prev) => {
                            const n = JSON.parse(JSON.stringify(prev));
                            n[li].organisms[oi].name = e.target.value;
                            return n;
                          })
                        }
                      />
                      <input
                        type="number"
                        className="w-16 border border-slate-200 rounded px-1 py-0.5 text-xs focus:outline-none focus:border-teal-400"
                        value={org.population}
                        onChange={(e) =>
                          setTrophicLevels((prev) => {
                            const n = JSON.parse(JSON.stringify(prev));
                            n[li].organisms[oi].population = Number(e.target.value);
                            return n;
                          })
                        }
                      />
                      <input
                        type="color"
                        value={org.color}
                        onChange={(e) =>
                          setTrophicLevels((prev) => {
                            const n = JSON.parse(JSON.stringify(prev));
                            n[li].organisms[oi].color = e.target.value;
                            return n;
                          })
                        }
                        className="h-6 w-6 rounded border border-slate-200 cursor-pointer p-0"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setTrophicLevels((prev) => {
                            const n = JSON.parse(JSON.stringify(prev));
                            n[li].organisms = n[li].organisms.filter((_: OrganismRow, j: number) => j !== oi);
                            return n;
                          })
                        }
                        className="text-red-400 hover:text-red-600 text-sm px-0.5"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      setTrophicLevels((prev) => {
                        const n = JSON.parse(JSON.stringify(prev));
                        n[li].organisms.push({ id: `o${Date.now()}`, name: "Nuevo", population: 100, energyPercent: 1, color: "#64748b" });
                        return n;
                      })
                    }
                    className="text-[10px] text-teal-600 hover:underline"
                  >
                    + Organismo
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => {
                  setBiome("bosque-tropical");
                  setTrophicLevels(BIOME_DATA["bosque-tropical"]);
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
            <VisualizerRenderer spec={ecosystemSpec} />
          </section>
        </div>
      )}

      {/* ── CICLO DEL CARBONO ── */}
      {activeTool === "env-carbon-cycle" && (
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <h2 className="text-base font-semibold text-slate-800">Parámetros</h2>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Título</label>
              <input
                type="text"
                value={carbonTitle}
                onChange={(e) => setCarbonTitle(e.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-teal-400"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Emisiones humanas</label>
                <span className="text-xs text-teal-700 font-mono">{humanEmissions} GtC/año</span>
              </div>
              <input
                type="range" min={1} max={20} step={1} value={humanEmissions}
                onChange={(e) => setHumanEmissions(Number(e.target.value))}
                className="w-full accent-teal-600"
              />
            </div>

            {/* Editable reservoirs */}
            <div className="space-y-2 border-t border-slate-100 pt-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Reservorios</label>
                <button
                  type="button"
                  onClick={() =>
                    setReservoirs((prev) => [
                      ...prev,
                      { id: `r${Date.now()}`, label: "Nuevo", amount: 100, unit: "GtC", cx: 0.5, cy: 0.5, color: "#64748b", radius: 30 },
                    ])
                  }
                  className="text-xs text-teal-600 hover:underline"
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
                      <th className="text-left px-2 py-1.5 font-medium">Color</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {reservoirs.map((r, i) => (
                      <tr key={r.id} className="border-t border-slate-100">
                        <td className="px-1 py-0.5">
                          <input
                            className="w-full border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-teal-400"
                            value={r.label}
                            onChange={(e) =>
                              setReservoirs((prev) => {
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
                            className="w-16 border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-teal-400"
                            value={r.amount}
                            onChange={(e) =>
                              setReservoirs((prev) => {
                                const n = [...prev];
                                n[i] = { ...n[i], amount: Number(e.target.value) };
                                return n;
                              })
                            }
                          />
                        </td>
                        <td className="px-1 py-0.5">
                          <input
                            type="color"
                            value={r.color}
                            onChange={(e) =>
                              setReservoirs((prev) => {
                                const n = [...prev];
                                n[i] = { ...n[i], color: e.target.value };
                                return n;
                              })
                            }
                            className="h-6 w-6 rounded border border-slate-200 cursor-pointer p-0"
                          />
                        </td>
                        <td className="px-1 py-0.5 text-right">
                          <button
                            type="button"
                            onClick={() => setReservoirs((prev) => prev.filter((_, j) => j !== i))}
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
                      { id: `fl${Date.now()}`, fromId: reservoirs[0]?.id ?? "", toId: reservoirs[1]?.id ?? "", amount: 10, label: "Nuevo flujo" },
                    ])
                  }
                  className="text-xs text-teal-600 hover:underline"
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
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {fluxes.map((f, i) => (
                      <tr key={f.id} className="border-t border-slate-100">
                        <td className="px-1 py-0.5">
                          <input
                            className="w-full border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-teal-400"
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
                            className="w-14 border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-teal-400"
                            value={f.amount}
                            onChange={(e) =>
                              setFluxes((prev) => {
                                const n = [...prev];
                                n[i] = { ...n[i], amount: Number(e.target.value) };
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
                  setReservoirs(DEFAULT_RESERVOIRS);
                  setFluxes(DEFAULT_FLUXES);
                  setHumanEmissions(9);
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
            <VisualizerRenderer spec={carbonSpec} />
          </section>
        </div>
      )}
    </div>
  );
}
