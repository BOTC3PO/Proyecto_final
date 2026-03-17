import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VisualizerRenderer from "../../visualizadores/graficos/VisualizerRenderer";
import type { ArtColorWheelSpec, ArtCompositionSpec } from "../../visualizadores/types";

type Tool = "art-color-wheel" | "art-composition";
type Harmony = ArtColorWheelSpec["harmony"];
type Rule = ArtCompositionSpec["rule"];

function buildColorWheel(selectedHue: number, harmony: Harmony, saturation: number, lightness: number): ArtColorWheelSpec {
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
    palette: hues.map((h) => ({ hue: h, saturation, lightness, label: `${h}°` })),
    swatches: hues.map((h, i) => ({
      color: `hsl(${h},${saturation}%,${lightness}%)`,
      label: i === 0 ? "Principal" : i === 1 ? "Armonia 1" : "Armonia 2",
      role: i === 0 ? "primary" : "harmony",
    })),
  };
}

function buildComposition(rule: Rule, W: number, H: number): ArtCompositionSpec {
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

  // Color wheel state
  const [colorTitle, setColorTitle] = useState("Rueda cromatica");
  const [selectedHue, setSelectedHue] = useState(200);
  const [harmony, setHarmony] = useState<Harmony>("complementary");
  const [saturation, setSaturation] = useState(70);
  const [lightness, setLightness] = useState(55);

  // Composition state
  const [compTitle, setCompTitle] = useState("Composicion visual");
  const [rule, setRule] = useState<Rule>("rule-of-thirds");
  const [canvasW, setCanvasW] = useState(640);
  const [canvasH, setCanvasH] = useState(480);

  const colorWheelSpec = useMemo(() => {
    const spec = buildColorWheel(selectedHue, harmony, saturation, lightness);
    return { ...spec, title: colorTitle || spec.title };
  }, [colorTitle, selectedHue, harmony, saturation, lightness]);

  const compositionSpec = useMemo(() => {
    const spec = buildComposition(rule, canvasW, canvasH);
    return { ...spec, title: compTitle || spec.title };
  }, [compTitle, rule, canvasW, canvasH]);

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

      {/* ── RUEDA DE COLOR ── */}
      {activeTool === "art-color-wheel" && (
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <h2 className="text-base font-semibold text-slate-800">Parámetros</h2>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Título</label>
              <input
                type="text"
                value={colorTitle}
                onChange={(e) => setColorTitle(e.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-pink-400"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Tono seleccionado</label>
                <span className="text-xs text-pink-700 font-mono">{selectedHue}°</span>
              </div>
              <input
                type="range" min={0} max={359} step={1} value={selectedHue}
                onChange={(e) => setSelectedHue(Number(e.target.value))}
                className="w-full accent-pink-600"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Armonia cromatica</label>
              <select
                value={harmony}
                onChange={(e) => setHarmony(e.target.value as Harmony)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-pink-400"
              >
                <option value="complementary">Complementaria</option>
                <option value="triadic">Triadica</option>
                <option value="analogous">Analogica</option>
                <option value="split-complementary">Split-complementaria</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Saturacion</label>
                <span className="text-xs text-slate-400 font-mono">{saturation}%</span>
              </div>
              <input
                type="range" min={0} max={100} step={1} value={saturation}
                onChange={(e) => setSaturation(Number(e.target.value))}
                className="w-full accent-pink-600"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Luminosidad</label>
                <span className="text-xs text-slate-400 font-mono">{lightness}%</span>
              </div>
              <input
                type="range" min={10} max={90} step={1} value={lightness}
                onChange={(e) => setLightness(Number(e.target.value))}
                className="w-full accent-pink-600"
              />
            </div>

            {/* Preview swatches */}
            <div className="border-t border-slate-100 pt-3">
              <label className="text-xs font-medium text-slate-600">Vista previa de colores</label>
              <div className="mt-2 flex gap-2">
                {colorWheelSpec.swatches.map((s, i) => (
                  <div key={i} className="text-center">
                    <div
                      className="h-10 w-10 rounded-lg border border-slate-200"
                      style={{ backgroundColor: s.color }}
                    />
                    <span className="text-[10px] text-slate-400">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setSelectedHue(200);
                setHarmony("complementary");
                setSaturation(70);
                setLightness(55);
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
            <VisualizerRenderer spec={colorWheelSpec} />
          </section>
        </div>
      )}

      {/* ── COMPOSICION ── */}
      {activeTool === "art-composition" && (
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <h2 className="text-base font-semibold text-slate-800">Parámetros</h2>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Título</label>
              <input
                type="text"
                value={compTitle}
                onChange={(e) => setCompTitle(e.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-pink-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Regla de composicion</label>
              <select
                value={rule}
                onChange={(e) => setRule(e.target.value as Rule)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-pink-400"
              >
                <option value="rule-of-thirds">Regla de los tercios</option>
                <option value="golden-ratio">Proporcion aurea</option>
                <option value="symmetry">Simetria</option>
                <option value="diagonal">Diagonal</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Ancho del lienzo (px)</label>
              <input
                type="number" min={200} max={1920} step={10}
                value={canvasW}
                onChange={(e) => setCanvasW(Number(e.target.value))}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-pink-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Alto del lienzo (px)</label>
              <input
                type="number" min={200} max={1080} step={10}
                value={canvasH}
                onChange={(e) => setCanvasH(Number(e.target.value))}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-pink-400"
              />
            </div>

            <div className="border-t border-slate-100 pt-3">
              <p className="text-xs text-slate-500">
                Proporcion: {(canvasW / canvasH).toFixed(2)}:1
              </p>
            </div>

            <button
              type="button"
              onClick={() => { setCanvasW(640); setCanvasH(480); setRule("rule-of-thirds"); }}
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              Restablecer valores
            </button>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Vista previa
            </p>
            <VisualizerRenderer spec={compositionSpec} />
          </section>
        </div>
      )}
    </div>
  );
}
