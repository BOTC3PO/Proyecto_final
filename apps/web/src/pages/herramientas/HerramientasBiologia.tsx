import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VisualizerRenderer from "../../visualizadores/graficos/VisualizerRenderer";
import type {
  BioCellDiagramSpec,
  BioGeneticsSpec,
  BioPopulationDynamicsSpec,
} from "../../visualizadores/types";

type Tool = "bio-cell-diagram" | "bio-genetics" | "bio-population-dynamics";
type CellType = "animal" | "plant" | "bacteria";
type CrossType = "monohybrid" | "dihybrid";

// ── Cell diagram organelles per type ─────────────────────────────────────────

function getOrganelles(cellType: CellType): BioCellDiagramSpec["organelles"] {
  if (cellType === "animal") {
    return [
      { id: "nucleus", label: "Núcleo", description: "Contiene el ADN y dirige las actividades celulares", cx: 50, cy: 50, rx: 12, ry: 12, color: "#6366f1", highlighted: true },
      { id: "mitochondria", label: "Mitocondria", description: "Genera ATP mediante respiración celular", cx: 75, cy: 35, rx: 8, ry: 5, color: "#f97316" },
      { id: "mitochondria2", label: "Mitocondria", description: "Genera ATP mediante respiración celular", cx: 30, cy: 65, rx: 8, ry: 5, color: "#f97316" },
      { id: "er-rough", label: "RE rugoso", description: "Síntesis de proteínas con ribosomas", cx: 68, cy: 62, rx: 10, ry: 5, color: "#84cc16" },
      { id: "er-smooth", label: "RE liso", description: "Síntesis de lípidos y desintoxicación", cx: 35, cy: 38, rx: 9, ry: 4, color: "#22d3ee" },
      { id: "golgi", label: "Aparato de Golgi", description: "Modificación y transporte de proteínas", cx: 60, cy: 75, rx: 11, ry: 5, color: "#f59e0b" },
      { id: "lysosome", label: "Lisosoma", description: "Digestión intracelular", cx: 80, cy: 70, rx: 4, ry: 4, color: "#ef4444" },
      { id: "centriole", label: "Centríolo", description: "Organiza el huso mitótico en la división", cx: 45, cy: 22, rx: 5, ry: 3, color: "#8b5cf6" },
    ];
  }
  if (cellType === "plant") {
    return [
      { id: "nucleus", label: "Núcleo", description: "Contiene el ADN y dirige las actividades celulares", cx: 48, cy: 50, rx: 12, ry: 12, color: "#6366f1", highlighted: true },
      { id: "chloroplast", label: "Cloroplasto", description: "Realiza la fotosíntesis", cx: 75, cy: 30, rx: 10, ry: 6, color: "#16a34a" },
      { id: "chloroplast2", label: "Cloroplasto", description: "Realiza la fotosíntesis", cx: 25, cy: 30, rx: 10, ry: 6, color: "#16a34a" },
      { id: "chloroplast3", label: "Cloroplasto", description: "Realiza la fotosíntesis", cx: 20, cy: 65, rx: 10, ry: 6, color: "#16a34a" },
      { id: "vacuole", label: "Vacuola central", description: "Almacena agua, nutrientes y residuos", cx: 55, cy: 55, rx: 22, ry: 18, color: "#bae6fd" },
      { id: "mitochondria", label: "Mitocondria", description: "Genera ATP mediante respiración celular", cx: 78, cy: 62, rx: 7, ry: 4, color: "#f97316" },
      { id: "er-rough", label: "RE rugoso", description: "Síntesis de proteínas con ribosomas", cx: 68, cy: 78, rx: 9, ry: 4, color: "#84cc16" },
      { id: "golgi", label: "Aparato de Golgi", description: "Modificación y transporte de proteínas", cx: 30, cy: 75, rx: 10, ry: 4, color: "#f59e0b" },
      { id: "cell-wall", label: "Pared celular", description: "Estructura rígida de celulosa que da soporte", cx: 50, cy: 50, rx: 48, ry: 45, color: "#a3e635" },
    ];
  }
  // bacteria
  return [
    { id: "nucleoid", label: "Nucleoide", description: "Región con ADN circular sin membrana nuclear", cx: 50, cy: 50, rx: 15, ry: 10, color: "#6366f1", highlighted: true },
    { id: "cell-wall", label: "Pared celular", description: "Capa de peptidoglicano que da forma y protección", cx: 50, cy: 50, rx: 44, ry: 38, color: "#a3e635" },
    { id: "plasmid", label: "Plásmido", description: "ADN circular extracromosómico", cx: 72, cy: 42, rx: 5, ry: 5, color: "#f59e0b" },
    { id: "ribosome", label: "Ribosomas (70S)", description: "Síntesis de proteínas procarióticas", cx: 38, cy: 38, rx: 3, ry: 3, color: "#ef4444" },
    { id: "ribosome2", label: "Ribosomas (70S)", description: "Síntesis de proteínas procarióticas", cx: 62, cy: 62, rx: 3, ry: 3, color: "#ef4444" },
    { id: "flagellum", label: "Flagelo", description: "Apéndice locomotor", cx: 88, cy: 50, rx: 6, ry: 2, color: "#8b5cf6" },
    { id: "pili", label: "Pili", description: "Apéndices de adhesión y transferencia genética", cx: 50, cy: 10, rx: 2, ry: 7, color: "#06b6d4" },
  ];
}

// ── Punnett square computation ────────────────────────────────────────────────

function computeMonohybridPunnett(
  p1a: string,
  p1b: string,
  p2a: string,
  p2b: string,
): BioGeneticsSpec["punnettSquare"] {
  const parent1 = [p1a || "A", p1b || "a"];
  const parent2 = [p2a || "A", p2b || "a"];
  return parent1.map((a1) =>
    parent2.map((a2) => {
      const alleles = a1 + a2;
      const dominant = a1 === a1.toUpperCase() || a2 === a2.toUpperCase();
      return { alleles, phenotype: dominant ? "Dominante" : "Recesivo", dominant };
    }),
  );
}

function computeDihybridPunnett(
  p1: string[],
  p2: string[],
): BioGeneticsSpec["punnettSquare"] {
  return p1.map((g1) =>
    p2.map((g2) => {
      const alleles = g1 + g2;
      const letters = alleles.split("");
      const dominant =
        (letters[0] === letters[0].toUpperCase() || letters[1] === letters[1].toUpperCase()) &&
        (letters[2] === letters[2].toUpperCase() || letters[3] === letters[3].toUpperCase());
      return {
        alleles,
        phenotype: dominant ? "Doble dominante" : "Al menos un recesivo",
        dominant,
      };
    }),
  );
}

function getDihybridGametes(a1: string, a2: string, b1: string, b2: string): string[] {
  return [a1 + b1, a1 + b2, a2 + b1, a2 + b2];
}

function computePhenotypeRatio(square: BioGeneticsSpec["punnettSquare"]): string {
  const flat = square.flat();
  const dominantCount = flat.filter((c) => c.dominant).length;
  const recessiveCount = flat.length - dominantCount;
  if (recessiveCount === 0) return `${dominantCount}:0`;
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const d = gcd(dominantCount, recessiveCount);
  return `${dominantCount / d}:${recessiveCount / d}`;
}

// ── Lotka-Volterra integration ────────────────────────────────────────────────

function runLotkaVolterra(
  initialPrey: number,
  initialPredator: number,
  preyGrowthRate: number,
  predationRate: number,
  predatorEfficiency: number,
  predatorDeathRate: number,
): { preyData: Array<{ t: number; value: number }>; predatorData: Array<{ t: number; value: number }> } {
  const dt = 0.5;
  const steps = 200;
  let prey = initialPrey;
  let predator = initialPredator;
  const preyData: Array<{ t: number; value: number }> = [];
  const predatorData: Array<{ t: number; value: number }> = [];

  for (let i = 0; i < steps; i++) {
    const t = i * dt;
    preyData.push({ t, value: Math.max(0, prey) });
    predatorData.push({ t, value: Math.max(0, predator) });
    const dPrey = preyGrowthRate * prey - predationRate * prey * predator;
    const dPredator = predatorEfficiency * prey * predator - predatorDeathRate * predator;
    prey = prey + dPrey * dt;
    predator = predator + dPredator * dt;
    prey = Math.max(0, prey);
    predator = Math.max(0, predator);
  }

  return { preyData, predatorData };
}

// ── Main component ────────────────────────────────────────────────────────────

export default function HerramientasBiologia() {
  const [activeTool, setActiveTool] = useState<Tool>("bio-cell-diagram");

  // bio-cell-diagram state
  const [cellType, setCellType] = useState<CellType>("animal");

  // bio-genetics state
  const [crossType, setCrossType] = useState<CrossType>("monohybrid");
  const [monoP1a, setMonoP1a] = useState("A");
  const [monoP1b, setMonoP1b] = useState("a");
  const [monoP2a, setMonoP2a] = useState("A");
  const [monoP2b, setMonoP2b] = useState("a");
  const [diP1a, setDiP1a] = useState("A");
  const [diP1b, setDiP1b] = useState("a");
  const [diP1c, setDiP1c] = useState("B");
  const [diP1d, setDiP1d] = useState("b");
  const [diP2a, setDiP2a] = useState("A");
  const [diP2b, setDiP2b] = useState("a");
  const [diP2c, setDiP2c] = useState("B");
  const [diP2d, setDiP2d] = useState("b");

  // bio-population-dynamics state
  const [initialPrey, setInitialPrey] = useState(200);
  const [initialPredator, setInitialPredator] = useState(50);
  const [preyGrowthRate, setPreyGrowthRate] = useState(0.05);
  const [predationRate, setPredationRate] = useState(0.005);
  const [predatorEfficiency, setPredatorEfficiency] = useState(0.005);
  const [predatorDeathRate, setPredatorDeathRate] = useState(0.05);

  // ── Specs ──────────────────────────────────────────────────────────────────

  const cellDiagramSpec = useMemo<BioCellDiagramSpec>(
    () => ({
      kind: "bio-cell-diagram",
      title:
        cellType === "animal"
          ? "Célula animal"
          : cellType === "plant"
            ? "Célula vegetal"
            : "Célula bacteriana",
      description:
        cellType === "bacteria"
          ? "Organismo procariota sin núcleo definido"
          : "Organismo eucariota con compartimentos membranosos",
      cellType,
      organelles: getOrganelles(cellType),
    }),
    [cellType],
  );

  const geneticsSpec = useMemo<BioGeneticsSpec>(() => {
    if (crossType === "monohybrid") {
      const square = computeMonohybridPunnett(monoP1a, monoP1b, monoP2a, monoP2b);
      return {
        kind: "bio-genetics",
        title: "Cruce monohíbrido — Cuadro de Punnett",
        description: "Cruce entre dos individuos heterocigotos para un gen",
        cross: "monohybrid",
        parent1Alleles: [monoP1a || "A", monoP1b || "a"],
        parent2Alleles: [monoP2a || "A", monoP2b || "a"],
        punnettSquare: square,
        phenotypeRatio: computePhenotypeRatio(square),
        genotypeRatio: (() => {
          const flat = square.flat();
          const homo = flat.filter((c) => c.alleles[0] === c.alleles[1]).length;
          const het = flat.length - homo;
          return `${homo}:${het}`;
        })(),
        notes: ["Alelos en mayúscula = dominante", "Alelos en minúscula = recesivo"],
      };
    }
    // dihybrid
    const p1Gametes = getDihybridGametes(diP1a, diP1b, diP1c, diP1d);
    const p2Gametes = getDihybridGametes(diP2a, diP2b, diP2c, diP2d);
    const square = computeDihybridPunnett(p1Gametes, p2Gametes);
    return {
      kind: "bio-genetics",
      title: "Cruce dihíbrido — Cuadro de Punnett 4×4",
      description: "Cruce entre dos individuos para dos genes independientes",
      cross: "dihybrid",
      parent1Alleles: p1Gametes,
      parent2Alleles: p2Gametes,
      punnettSquare: square,
      phenotypeRatio: computePhenotypeRatio(square),
      notes: [
        "Cada gameto contiene uno de los alelos de cada gen",
        "Ley de segregación independiente de Mendel",
      ],
    };
  }, [
    crossType,
    monoP1a, monoP1b, monoP2a, monoP2b,
    diP1a, diP1b, diP1c, diP1d,
    diP2a, diP2b, diP2c, diP2d,
  ]);

  const populationSpec = useMemo<BioPopulationDynamicsSpec>(() => {
    const { preyData, predatorData } = runLotkaVolterra(
      initialPrey,
      initialPredator,
      preyGrowthRate,
      predationRate,
      predatorEfficiency,
      predatorDeathRate,
    );
    return {
      kind: "bio-population-dynamics",
      title: "Modelo de Lotka-Volterra",
      description: "Dinámica depredador-presa con integración de Euler (dt = 0.5, 200 pasos)",
      model: "lotka-volterra",
      parameters: {
        initialPrey,
        initialPredator,
        preyGrowthRate,
        predationRate,
        predatorDeathRate,
        predatorEfficiency,
      },
      timeSeries: [
        { id: "prey", label: "Presas", color: "#16a34a", data: preyData },
        { id: "predator", label: "Depredadores", color: "#dc2626", data: predatorData },
      ],
      axes: {
        x: { label: "Tiempo" },
        y: { label: "Población" },
      },
    };
  }, [
    initialPrey,
    initialPredator,
    preyGrowthRate,
    predationRate,
    predatorEfficiency,
    predatorDeathRate,
  ]);

  const tools: { id: Tool; label: string }[] = [
    { id: "bio-cell-diagram", label: "Diagrama celular" },
    { id: "bio-genetics", label: "Genética" },
    { id: "bio-population-dynamics", label: "Dinámica poblacional" },
  ];

  return (
    <div className="space-y-6 px-6 py-8">
      <div>
        <Link
          to="/herramientas"
          className="text-sm text-blue-600 hover:underline"
        >
          &larr; Volver a herramientas
        </Link>
      </div>

      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          Herramientas de Biologia
        </h1>
        <p className="text-sm text-slate-600">
          Explora celulas, genetica y dinamica de poblaciones con visualizaciones
          interactivas.
        </p>
      </header>

      {/* Tool selector */}
      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveTool(tool.id)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
              activeTool === tool.id
                ? "border-green-600 bg-green-600 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-green-400 hover:text-green-700"
            }`}
          >
            {tool.label}
          </button>
        ))}
      </div>

      {/* bio-cell-diagram */}
      {activeTool === "bio-cell-diagram" && (
        <div className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">
              Tipo de celula
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {(["animal", "plant", "bacteria"] as CellType[]).map((ct) => (
                <label key={ct} className="flex cursor-pointer items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="cellType"
                    value={ct}
                    checked={cellType === ct}
                    onChange={() => setCellType(ct)}
                    className="accent-green-600"
                  />
                  <span className="capitalize font-medium text-slate-700">
                    {ct === "plant" ? "Vegetal" : ct === "bacteria" ? "Bacteria" : "Animal"}
                  </span>
                </label>
              ))}
            </div>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={cellDiagramSpec} />
          </section>
        </div>
      )}

      {/* bio-genetics */}
      {activeTool === "bio-genetics" && (
        <div className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">
              Configuracion del cruce
            </h2>
            <div className="mt-4 space-y-4">
              <div className="flex flex-wrap gap-4">
                <label className="text-sm font-medium text-slate-700">
                  Tipo de cruce:
                  <select
                    value={crossType}
                    onChange={(e) => setCrossType(e.target.value as CrossType)}
                    className="ml-2 rounded-md border border-slate-200 px-3 py-1.5 text-sm"
                  >
                    <option value="monohybrid">Monohíbrido (2×2)</option>
                    <option value="dihybrid">Dihíbrido (4×4)</option>
                  </select>
                </label>
              </div>

              {crossType === "monohybrid" ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-700">Progenitor 1</p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        maxLength={1}
                        value={monoP1a}
                        onChange={(e) => setMonoP1a(e.target.value.slice(-1))}
                        placeholder="A"
                        className="w-16 rounded-md border border-slate-200 px-3 py-2 text-center text-sm"
                      />
                      <input
                        type="text"
                        maxLength={1}
                        value={monoP1b}
                        onChange={(e) => setMonoP1b(e.target.value.slice(-1))}
                        placeholder="a"
                        className="w-16 rounded-md border border-slate-200 px-3 py-2 text-center text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-700">Progenitor 2</p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        maxLength={1}
                        value={monoP2a}
                        onChange={(e) => setMonoP2a(e.target.value.slice(-1))}
                        placeholder="A"
                        className="w-16 rounded-md border border-slate-200 px-3 py-2 text-center text-sm"
                      />
                      <input
                        type="text"
                        maxLength={1}
                        value={monoP2b}
                        onChange={(e) => setMonoP2b(e.target.value.slice(-1))}
                        placeholder="a"
                        className="w-16 rounded-md border border-slate-200 px-3 py-2 text-center text-sm"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-700">
                      Progenitor 1 (gen A / gen B)
                    </p>
                    <div className="flex gap-2">
                      {[
                        [diP1a, setDiP1a, "A"],
                        [diP1b, setDiP1b, "a"],
                        [diP1c, setDiP1c, "B"],
                        [diP1d, setDiP1d, "b"],
                      ].map(([val, setter, placeholder], idx) => (
                        <input
                          key={idx}
                          type="text"
                          maxLength={1}
                          value={val as string}
                          onChange={(e) =>
                            (setter as React.Dispatch<React.SetStateAction<string>>)(
                              e.target.value.slice(-1),
                            )
                          }
                          placeholder={placeholder as string}
                          className="w-12 rounded-md border border-slate-200 px-2 py-2 text-center text-sm"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-700">
                      Progenitor 2 (gen A / gen B)
                    </p>
                    <div className="flex gap-2">
                      {[
                        [diP2a, setDiP2a, "A"],
                        [diP2b, setDiP2b, "a"],
                        [diP2c, setDiP2c, "B"],
                        [diP2d, setDiP2d, "b"],
                      ].map(([val, setter, placeholder], idx) => (
                        <input
                          key={idx}
                          type="text"
                          maxLength={1}
                          value={val as string}
                          onChange={(e) =>
                            (setter as React.Dispatch<React.SetStateAction<string>>)(
                              e.target.value.slice(-1),
                            )
                          }
                          placeholder={placeholder as string}
                          className="w-12 rounded-md border border-slate-200 px-2 py-2 text-center text-sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="rounded-lg bg-slate-50 p-3 text-sm text-slate-700">
                <span className="font-medium">Ratio fenotipico: </span>
                {geneticsSpec.phenotypeRatio}
              </div>
            </div>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={geneticsSpec} />
          </section>
        </div>
      )}

      {/* bio-population-dynamics */}
      {activeTool === "bio-population-dynamics" && (
        <div className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">
              Parametros del modelo Lotka-Volterra
            </h2>
            <div className="mt-4 grid gap-5 md:grid-cols-2">
              {[
                {
                  label: "Poblacion inicial de presas",
                  value: initialPrey,
                  setter: setInitialPrey,
                  min: 50, max: 500, step: 10,
                },
                {
                  label: "Poblacion inicial de depredadores",
                  value: initialPredator,
                  setter: setInitialPredator,
                  min: 10, max: 100, step: 5,
                },
                {
                  label: "Tasa de crecimiento de presas",
                  value: preyGrowthRate,
                  setter: setPreyGrowthRate,
                  min: 0.01, max: 0.1, step: 0.005,
                },
                {
                  label: "Tasa de depredacion",
                  value: predationRate,
                  setter: setPredationRate,
                  min: 0.001, max: 0.01, step: 0.0005,
                },
                {
                  label: "Eficiencia del depredador",
                  value: predatorEfficiency,
                  setter: setPredatorEfficiency,
                  min: 0.001, max: 0.01, step: 0.0005,
                },
                {
                  label: "Tasa de muerte del depredador",
                  value: predatorDeathRate,
                  setter: setPredatorDeathRate,
                  min: 0.01, max: 0.1, step: 0.005,
                },
              ].map(({ label, value, setter, min, max, step }) => (
                <label key={label} className="space-y-1 text-sm text-slate-600">
                  <span className="font-medium text-slate-700">
                    {label}: <span className="text-green-700">{value}</span>
                  </span>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={(e) => setter(Number(e.target.value))}
                    className="w-full accent-green-600"
                  />
                </label>
              ))}
            </div>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={populationSpec} />
          </section>
        </div>
      )}
    </div>
  );
}
