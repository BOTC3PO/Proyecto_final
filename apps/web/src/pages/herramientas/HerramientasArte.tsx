import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VisualizerRenderer from "../../visualizadores/graficos/VisualizerRenderer";
import type { ArtColorWheelSpec, ArtCompositionSpec } from "../../visualizadores/types";

type Tool = "art-color-wheel" | "art-composition";
type Harmony = ArtColorWheelSpec["harmony"];
type Rule = ArtCompositionSpec["rule"];

function buildColorWheel(selectedHue: number, harmony: Harmony): ArtColorWheelSpec {
  const harmonicHues: Record<Harmony, number[]> = {
    complementary: [(selectedHue + 180) % 360],
    triadic: [(selectedHue + 120) % 360, (selectedHue + 240) % 360],
    analogous: [(selectedHue + 30) % 360, (selectedHue - 30 + 360) % 360],
    "split-complementary": [(selectedHue + 150) % 360, (selectedHue + 210) % 360],
  };
  const hues = [selectedHue, ...harmonicHues[harmony]];
  return {
    kind: "art-color-wheel",
    title: `Rueda cromatica — ${harmony}`,
    selectedHue,
    harmony,
    palette: hues.map((h) => ({ hue: h, saturation: 70, lightness: 55, label: `${h}°` })),
    swatches: hues.map((h, i) => ({
      color: `hsl(${h},70%,55%)`,
      label: i === 0 ? "Principal" : i === 1 ? "Armonia 1" : "Armonia 2",
      role: i === 0 ? "primary" : "harmony",
    })),
  };
}

function buildComposition(rule: Rule): ArtCompositionSpec {
  const W = 640;
  const H = 480;
  const overlayLines: ArtCompositionSpec["overlayLines"] = [];
  const zones: ArtCompositionSpec["zones"] = [];

  if (rule === "rule-of-thirds") {
    overlayLines.push(
      { x1: W / 3, y1: 0, x2: W / 3, y2: H, color: "#60a5fa" },
      { x1: (2 * W) / 3, y1: 0, x2: (2 * W) / 3, y2: H, color: "#60a5fa" },
      { x1: 0, y1: H / 3, x2: W, y2: H / 3, color: "#60a5fa" },
      { x1: 0, y1: (2 * H) / 3, x2: W, y2: (2 * H) / 3, color: "#60a5fa" },
    );
  } else if (rule === "golden-ratio") {
    const phi = 1.618;
    const gw = Math.round(W / phi);
    overlayLines.push(
      { x1: gw, y1: 0, x2: gw, y2: H, color: "#f59e0b", label: "φ" },
      { x1: 0, y1: Math.round(H / phi), x2: W, y2: Math.round(H / phi), color: "#f59e0b", label: "φ" },
    );
  } else if (rule === "symmetry") {
    overlayLines.push(
      { x1: W / 2, y1: 0, x2: W / 2, y2: H, color: "#a78bfa", label: "Eje vertical" },
      { x1: 0, y1: H / 2, x2: W, y2: H / 2, color: "#a78bfa", label: "Eje horizontal" },
    );
    zones.push({ x: 0, y: 0, width: W / 2, height: H, label: "Lado A", color: "#a78bfa", opacity: 0.05 });
    zones.push({ x: W / 2, y: 0, width: W / 2, height: H, label: "Lado B", color: "#a78bfa", opacity: 0.05 });
  } else if (rule === "diagonal") {
    overlayLines.push(
      { x1: 0, y1: 0, x2: W, y2: H, color: "#f87171", label: "Diagonal" },
      { x1: W, y1: 0, x2: 0, y2: H, color: "#f87171", label: "Diagonal" },
    );
  }

  return {
    kind: "art-composition",
    title: `Composicion — ${rule}`,
    canvasWidth: W,
    canvasHeight: H,
    rule,
    overlayLines,
    zones,
    elements: [],
  };
}

export default function HerramientasArte() {
  const [activeTool, setActiveTool] = useState<Tool>("art-color-wheel");
  const [selectedHue, setSelectedHue] = useState(200);
  const [harmony, setHarmony] = useState<Harmony>("complementary");
  const [rule, setRule] = useState<Rule>("rule-of-thirds");

  const colorWheelSpec = useMemo(() => buildColorWheel(selectedHue, harmony), [selectedHue, harmony]);
  const compositionSpec = useMemo(() => buildComposition(rule), [rule]);

  const tools: { id: Tool; label: string }[] = [
    { id: "art-color-wheel", label: "Rueda de color" },
    { id: "art-composition", label: "Composicion" },
  ];

  return (
    <div className="space-y-6 px-6 py-8">
      <div>
        <Link to="/herramientas" className="text-sm text-blue-600 hover:underline">
          &larr; Volver a herramientas
        </Link>
      </div>
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">Herramientas de Arte</h1>
        <p className="text-sm text-slate-600">Explora teoria del color y reglas de composicion visual.</p>
      </header>

      <div className="flex flex-wrap gap-2">
        {tools.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTool(t.id)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
              activeTool === t.id
                ? "border-pink-600 bg-pink-600 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-pink-400 hover:text-pink-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {activeTool === "art-color-wheel" && (
        <div className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">Configuracion del color</h2>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <label className="space-y-1 text-sm text-slate-600">
                <span className="font-medium text-slate-700">
                  Tono seleccionado: <span className="text-pink-700">{selectedHue}°</span>
                </span>
                <input
                  type="range" min={0} max={359} step={1} value={selectedHue}
                  onChange={(e) => setSelectedHue(Number(e.target.value))}
                  className="w-full accent-pink-600"
                />
              </label>
              <label className="space-y-1 text-sm text-slate-600">
                <span className="font-medium text-slate-700">Armonia cromatica</span>
                <select
                  value={harmony}
                  onChange={(e) => setHarmony(e.target.value as Harmony)}
                  className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="complementary">Complementaria</option>
                  <option value="triadic">Triadica</option>
                  <option value="analogous">Analogica</option>
                  <option value="split-complementary">Split-complementaria</option>
                </select>
              </label>
            </div>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={colorWheelSpec} />
          </section>
        </div>
      )}

      {activeTool === "art-composition" && (
        <div className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">Regla de composicion</h2>
            <div className="mt-4">
              <select
                value={rule}
                onChange={(e) => setRule(e.target.value as Rule)}
                className="rounded-md border border-slate-200 px-3 py-2 text-sm"
              >
                <option value="rule-of-thirds">Regla de los tercios</option>
                <option value="golden-ratio">Proporcion aurea</option>
                <option value="symmetry">Simetria</option>
                <option value="diagonal">Diagonal</option>
              </select>
            </div>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={compositionSpec} />
          </section>
        </div>
      )}
    </div>
  );
}
