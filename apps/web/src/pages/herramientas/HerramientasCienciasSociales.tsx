import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VisualizerRenderer from "../../visualizadores/graficos/VisualizerRenderer";
import type {
  SocialPopulationPyramidSpec,
  SocialChoroplethSpec,
} from "../../visualizadores/types";

type Tool = "pyramid" | "choropleth";
type Year = 2000 | 2010 | 2020;
type Indicator = "gdp" | "density" | "hdi";

const PYRAMID_DATA: Record<
  Year,
  Array<{ label: string; male: number; female: number }>
> = {
  2000: [
    { label: "0-4", male: 8.2, female: 7.9 },
    { label: "5-9", male: 7.8, female: 7.5 },
    { label: "10-14", male: 7.4, female: 7.1 },
    { label: "15-19", male: 7.0, female: 6.8 },
    { label: "20-24", male: 6.5, female: 6.4 },
    { label: "25-29", male: 6.1, female: 6.0 },
    { label: "30-34", male: 5.6, female: 5.6 },
    { label: "35-39", male: 5.0, female: 5.1 },
    { label: "40-44", male: 4.3, female: 4.5 },
    { label: "45-49", male: 3.7, female: 3.9 },
    { label: "50-54", male: 3.0, female: 3.3 },
    { label: "55-59", male: 2.4, female: 2.7 },
    { label: "60-64", male: 2.0, female: 2.3 },
    { label: "65-69", male: 1.5, female: 1.9 },
    { label: "70+", male: 2.1, female: 3.0 },
  ],
  2010: [
    { label: "0-4", male: 7.0, female: 6.8 },
    { label: "5-9", male: 7.3, female: 7.1 },
    { label: "10-14", male: 7.5, female: 7.2 },
    { label: "15-19", male: 7.2, female: 7.0 },
    { label: "20-24", male: 6.8, female: 6.7 },
    { label: "25-29", male: 6.5, female: 6.4 },
    { label: "30-34", male: 6.2, female: 6.2 },
    { label: "35-39", male: 5.8, female: 5.9 },
    { label: "40-44", male: 5.3, female: 5.5 },
    { label: "45-49", male: 4.7, female: 4.9 },
    { label: "50-54", male: 3.9, female: 4.2 },
    { label: "55-59", male: 3.1, female: 3.4 },
    { label: "60-64", male: 2.5, female: 2.9 },
    { label: "65-69", male: 1.8, female: 2.2 },
    { label: "70+", male: 2.4, female: 3.6 },
  ],
  2020: [
    { label: "0-4", male: 5.8, female: 5.6 },
    { label: "5-9", male: 6.2, female: 6.0 },
    { label: "10-14", male: 6.5, female: 6.3 },
    { label: "15-19", male: 6.8, female: 6.6 },
    { label: "20-24", male: 7.0, female: 6.8 },
    { label: "25-29", male: 6.7, female: 6.6 },
    { label: "30-34", male: 6.4, female: 6.4 },
    { label: "35-39", male: 6.0, female: 6.1 },
    { label: "40-44", male: 5.7, female: 5.8 },
    { label: "45-49", male: 5.2, female: 5.4 },
    { label: "50-54", male: 4.6, female: 4.9 },
    { label: "55-59", male: 3.8, female: 4.1 },
    { label: "60-64", male: 3.2, female: 3.6 },
    { label: "65-69", male: 2.5, female: 2.9 },
    { label: "70+", male: 3.6, female: 5.9 },
  ],
};

const REGIONS = [
  { id: "norte", label: "Región Norte" },
  { id: "sur", label: "Región Sur" },
  { id: "este", label: "Región Este" },
  { id: "oeste", label: "Región Oeste" },
  { id: "centro", label: "Región Centro" },
  { id: "noreste", label: "Región Noreste" },
  { id: "noroeste", label: "Región Noroeste" },
  { id: "sureste", label: "Región Sureste" },
];

const INDICATOR_DATA: Record<
  Indicator,
  { variable: string; unit: string; values: number[] }
> = {
  gdp: {
    variable: "PIB per cápita",
    unit: "USD",
    values: [12400, 8700, 15600, 9300, 18200, 11500, 7800, 13900],
  },
  density: {
    variable: "Densidad poblacional",
    unit: "hab/km²",
    values: [45, 120, 32, 88, 310, 67, 22, 95],
  },
  hdi: {
    variable: "Índice de Desarrollo Humano",
    unit: "",
    values: [0.72, 0.65, 0.81, 0.68, 0.88, 0.74, 0.61, 0.77],
  },
};

export default function HerramientasCienciasSociales() {
  const [activeTool, setActiveTool] = useState<Tool>("pyramid");
  const [selectedYear, setSelectedYear] = useState<Year>(2020);
  const [selectedIndicator, setSelectedIndicator] = useState<Indicator>("gdp");

  const pyramidSpec = useMemo<SocialPopulationPyramidSpec>(
    () => ({
      kind: "social-population-pyramid",
      title: `Pirámide de población — año ${selectedYear}`,
      description:
        "Distribución de la población por grupos de edad y sexo (datos en porcentaje).",
      year: selectedYear,
      ageGroups: PYRAMID_DATA[selectedYear],
      unit: "percent",
      annotations: [
        {
          ageGroup: "20-24",
          note: "Cohorte joven activa",
        },
      ],
    }),
    [selectedYear],
  );

  const choroplethSpec = useMemo<SocialChoroplethSpec>(() => {
    const indicatorInfo = INDICATOR_DATA[selectedIndicator];
    const values = indicatorInfo.values;
    const min = Math.min(...values);
    const max = Math.max(...values);

    return {
      kind: "social-choropleth",
      title: `Mapa temático — ${indicatorInfo.variable}`,
      description: `Distribución regional de ${indicatorInfo.variable.toLowerCase()}.`,
      variable: indicatorInfo.variable,
      unit: indicatorInfo.unit,
      regions: REGIONS.map((r, i) => ({
        id: r.id,
        label: r.label,
        value: values[i],
      })),
      scale: {
        min,
        max,
        colors: ["#dbeafe", "#1d4ed8"],
      },
    };
  }, [selectedIndicator]);

  const tools: Array<{ id: Tool; label: string }> = [
    { id: "pyramid", label: "Pirámide de población" },
    { id: "choropleth", label: "Mapa temático" },
  ];

  return (
    <div className="space-y-6 px-6 py-8">
      <div className="flex items-center gap-3">
        <Link
          to="/herramientas"
          className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
        >
          &larr; Volver a herramientas
        </Link>
      </div>

      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          Ciencias Sociales
        </h1>
        <p className="text-sm text-slate-600">
          Visualiza pirámides de población y mapas temáticos por región e indicador.
        </p>
      </header>

      <div className="flex gap-2">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveTool(tool.id)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeTool === tool.id
                ? "bg-blue-600 text-white"
                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >
            {tool.label}
          </button>
        ))}
      </div>

      {activeTool === "pyramid" && (
        <>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">
              Selección de año
            </h2>
            <div className="mt-4">
              <label className="space-y-2 text-sm text-slate-600">
                <span className="font-medium text-slate-700">Año</span>
                <select
                  value={selectedYear}
                  onChange={(e) =>
                    setSelectedYear(Number(e.target.value) as Year)
                  }
                  className="ml-3 rounded-md border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value={2000}>2000</option>
                  <option value={2010}>2010</option>
                  <option value={2020}>2020</option>
                </select>
              </label>
            </div>
          </section>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={pyramidSpec} />
          </div>
        </>
      )}

      {activeTool === "choropleth" && (
        <>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">
              Selección de indicador
            </h2>
            <div className="mt-4">
              <label className="space-y-2 text-sm text-slate-600">
                <span className="font-medium text-slate-700">Indicador</span>
                <select
                  value={selectedIndicator}
                  onChange={(e) =>
                    setSelectedIndicator(e.target.value as Indicator)
                  }
                  className="ml-3 rounded-md border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="gdp">PIB per cápita</option>
                  <option value="density">Densidad poblacional</option>
                  <option value="hdi">Índice de Desarrollo Humano</option>
                </select>
              </label>
            </div>
          </section>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={choroplethSpec} />
          </div>
        </>
      )}
    </div>
  );
}
