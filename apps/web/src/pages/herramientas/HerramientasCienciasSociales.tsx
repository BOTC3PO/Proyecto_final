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
type ColorSchemeKey = "azul" | "verde" | "naranja" | "calor";

// ── Color schemes ─────────────────────────────────────────────────────────────

const COLOR_SCHEMES: Record<ColorSchemeKey, { label: string; from: string; to: string }> = {
  azul:    { label: "Azul",    from: "#dbeafe", to: "#1d4ed8" },
  verde:   { label: "Verde",   from: "#d1fae5", to: "#065f46" },
  naranja: { label: "Naranja", from: "#fef3c7", to: "#b45309" },
  calor:   { label: "Calor",   from: "#fde68a", to: "#dc2626" },
};

// ── Pyramid data ──────────────────────────────────────────────────────────────
// Values represent % of total population per sex for broad age groups.
// Year 2000: expansive pyramid (high birth rates, few elderly).
// Year 2010: transitional (birth rate dropping, working-age bulge).
// Year 2020: constrictive/aging (fewer young, more older adults).

const PYRAMID_DATA: Record<
  Year,
  Array<{ label: string; male: number; female: number }>
> = {
  2000: [
    { label: "0-14",  male: 25, female: 24 },
    { label: "15-29", male: 22, female: 21 },
    { label: "30-44", male: 17, female: 17 },
    { label: "45-59", male: 11, female: 11 },
    { label: "60-74", male: 6,  female: 7  },
    { label: "75+",   male: 2,  female: 3  },
  ],
  2010: [
    { label: "0-14",  male: 21, female: 20 },
    { label: "15-29", male: 23, female: 22 },
    { label: "30-44", male: 19, female: 19 },
    { label: "45-59", male: 14, female: 14 },
    { label: "60-74", male: 8,  female: 9  },
    { label: "75+",   male: 3,  female: 5  },
  ],
  2020: [
    { label: "0-14",  male: 16, female: 15 },
    { label: "15-29", male: 19, female: 18 },
    { label: "30-44", male: 21, female: 20 },
    { label: "45-59", male: 18, female: 18 },
    { label: "60-74", male: 13, female: 15 },
    { label: "75+",   male: 5,  female: 8  },
  ],
};

// ── Choropleth data ───────────────────────────────────────────────────────────

const REGIONS = [
  { id: "norte",    label: "Reg. Norte",    coords: [-5.0, -70.0] as [number, number] },
  { id: "sur",      label: "Reg. Sur",      coords: [-38.0, -65.0] as [number, number] },
  { id: "este",     label: "Reg. Este",     coords: [-15.0, -45.0] as [number, number] },
  { id: "oeste",    label: "Reg. Oeste",    coords: [-18.0, -68.0] as [number, number] },
  { id: "centro",   label: "Reg. Centro",   coords: [-16.0, -58.0] as [number, number] },
  { id: "noreste",  label: "Reg. Noreste",  coords: [-5.0,  -38.0] as [number, number] },
  { id: "noroeste", label: "Reg. Noroeste", coords: [-2.0,  -76.0] as [number, number] },
  { id: "sureste",  label: "Reg. Sureste",  coords: [-28.0, -50.0] as [number, number] },
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

// ── Component ─────────────────────────────────────────────────────────────────

export default function HerramientasCienciasSociales() {
  const [activeTool, setActiveTool] = useState<Tool>("pyramid");

  // Pyramid params
  const [selectedYear, setSelectedYear] = useState<Year>(2020);
  const [pyramidUnit, setPyramidUnit] = useState<"percent" | "count">("percent");
  const [maleColor, setMaleColor] = useState("#60a5fa");
  const [femaleColor, setFemaleColor] = useState("#fb7185");

  // Choropleth params
  const [selectedIndicator, setSelectedIndicator] = useState<Indicator>("gdp");
  const [colorScheme, setColorScheme] = useState<ColorSchemeKey>("azul");

  // Derived scale (auto-computed but user can adjust)
  const indicatorInfo = INDICATOR_DATA[selectedIndicator];
  const rawValues = indicatorInfo.values;
  const autoMin = Math.min(...rawValues);
  const autoMax = Math.max(...rawValues);
  const [scaleMin, setScaleMin] = useState<number | null>(null);
  const [scaleMax, setScaleMax] = useState<number | null>(null);

  const effectiveMin = scaleMin ?? autoMin;
  const effectiveMax = scaleMax ?? autoMax;

  // Reset scale when indicator changes
  const handleIndicatorChange = (ind: Indicator) => {
    setSelectedIndicator(ind);
    setScaleMin(null);
    setScaleMax(null);
  };

  // ── Specs ────────────────────────────────────────────────────────────────────

  const pyramidSpec = useMemo<SocialPopulationPyramidSpec>(
    () => ({
      kind: "social-population-pyramid",
      title: `Pirámide de población — ${selectedYear}`,
      description: "Distribución de la población por grupos de edad y sexo.",
      year: selectedYear,
      ageGroups: PYRAMID_DATA[selectedYear],
      unit: pyramidUnit,
      maleColor,
      femaleColor,
    }),
    [selectedYear, pyramidUnit, maleColor, femaleColor],
  );

  const choroplethSpec = useMemo<SocialChoroplethSpec>(() => {
    const scheme = COLOR_SCHEMES[colorScheme];
    return {
      kind: "social-choropleth",
      title: `Mapa temático — ${indicatorInfo.variable}`,
      description: `Distribución regional de ${indicatorInfo.variable.toLowerCase()}.`,
      variable: indicatorInfo.variable,
      unit: indicatorInfo.unit || undefined,
      regions: REGIONS.map((r, i) => ({
        id: r.id,
        label: r.label,
        value: rawValues[i],
        coordinates: r.coords,
      })),
      scale: {
        min: effectiveMin,
        max: effectiveMax,
        colors: [scheme.from, scheme.to],
      },
    };
  }, [selectedIndicator, colorScheme, effectiveMin, effectiveMax, indicatorInfo, rawValues]);

  const tools: Array<{ id: Tool; label: string; icon: string }> = [
    { id: "pyramid",    label: "Pirámide de población", icon: "📊" },
    { id: "choropleth", label: "Mapa comparativo",       icon: "🗺️" },
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
        <h1 className="text-2xl font-semibold text-slate-900">Ciencias Sociales</h1>
        <p className="text-sm text-slate-600">
          Visualiza pirámides de población y mapas temáticos por región e indicador.
        </p>
      </header>

      {/* Tool selector */}
      <div className="flex gap-2">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveTool(tool.id)}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeTool === tool.id
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >
            <span>{tool.icon}</span>
            {tool.label}
          </button>
        ))}
      </div>

      {/* ── PIRÁMIDE ── */}
      {activeTool === "pyramid" && (
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
          {/* Parameters panel */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <h2 className="text-base font-semibold text-slate-800">Parámetros</h2>

            {/* Año */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Año</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value) as Year)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
              >
                <option value={2000}>2000</option>
                <option value={2010}>2010</option>
                <option value={2020}>2020</option>
              </select>
            </div>

            {/* Unidad */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Unidad</label>
              <select
                value={pyramidUnit}
                onChange={(e) => setPyramidUnit(e.target.value as "percent" | "count")}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
              >
                <option value="percent">Porcentaje (%)</option>
                <option value="count">Personas</option>
              </select>
            </div>

            {/* Color hombres */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Color — Hombres</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={maleColor}
                  onChange={(e) => setMaleColor(e.target.value)}
                  className="h-9 w-14 rounded-md border border-slate-200 cursor-pointer p-0.5 bg-transparent"
                />
                <span className="text-xs text-slate-400 font-mono">{maleColor}</span>
                <button
                  type="button"
                  onClick={() => setMaleColor("#60a5fa")}
                  className="ml-auto text-xs text-slate-400 hover:text-slate-600"
                >
                  Restablecer
                </button>
              </div>
            </div>

            {/* Color mujeres */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Color — Mujeres</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={femaleColor}
                  onChange={(e) => setFemaleColor(e.target.value)}
                  className="h-9 w-14 rounded-md border border-slate-200 cursor-pointer p-0.5 bg-transparent"
                />
                <span className="text-xs text-slate-400 font-mono">{femaleColor}</span>
                <button
                  type="button"
                  onClick={() => setFemaleColor("#fb7185")}
                  className="ml-auto text-xs text-slate-400 hover:text-slate-600"
                >
                  Restablecer
                </button>
              </div>
            </div>
          </section>

          {/* Preview panel */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Vista previa
            </p>
            <VisualizerRenderer spec={pyramidSpec} />
          </section>
        </div>
      )}

      {/* ── COROPLÉTICO ── */}
      {activeTool === "choropleth" && (
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
          {/* Parameters panel */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <h2 className="text-base font-semibold text-slate-800">Parámetros</h2>

            {/* Indicador */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Indicador</label>
              <select
                value={selectedIndicator}
                onChange={(e) => handleIndicatorChange(e.target.value as Indicator)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
              >
                <option value="gdp">PIB per cápita (USD)</option>
                <option value="density">Densidad poblacional (hab/km²)</option>
                <option value="hdi">Índice de Desarrollo Humano</option>
              </select>
            </div>

            {/* Escala mínima */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Escala mínima</label>
                <span className="text-xs text-slate-400 font-mono">{effectiveMin.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={autoMin - Math.abs(autoMin) * 0.5}
                max={autoMax}
                step={(autoMax - autoMin) / 100}
                value={effectiveMin}
                onChange={(e) => setScaleMin(Number(e.target.value))}
                className="w-full accent-blue-500"
              />
            </div>

            {/* Escala máxima */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Escala máxima</label>
                <span className="text-xs text-slate-400 font-mono">{effectiveMax.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={autoMin}
                max={autoMax + Math.abs(autoMax) * 0.5}
                step={(autoMax - autoMin) / 100}
                value={effectiveMax}
                onChange={(e) => setScaleMax(Number(e.target.value))}
                className="w-full accent-blue-500"
              />
            </div>

            {/* Paleta de colores */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Paleta de colores</label>
              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(COLOR_SCHEMES) as ColorSchemeKey[]).map((key) => {
                  const scheme = COLOR_SCHEMES[key];
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setColorScheme(key)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium transition-colors ${
                        colorScheme === key
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <span
                        className="inline-block w-8 h-3 rounded-sm flex-shrink-0"
                        style={{
                          background: `linear-gradient(to right, ${scheme.from}, ${scheme.to})`,
                        }}
                      />
                      {scheme.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Reset scale */}
            {(scaleMin !== null || scaleMax !== null) && (
              <button
                type="button"
                onClick={() => { setScaleMin(null); setScaleMax(null); }}
                className="w-full text-xs text-slate-400 hover:text-slate-600 py-1"
              >
                Restablecer escala automática
              </button>
            )}
          </section>

          {/* Preview panel */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Vista previa
            </p>
            <VisualizerRenderer spec={choroplethSpec} />
          </section>
        </div>
      )}
    </div>
  );
}
