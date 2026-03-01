import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VisualizerRenderer from "../../visualizadores/graficos/VisualizerRenderer";
import type {
  MusicWaveformSpec,
  MusicRhythmGridSpec,
} from "../../visualizadores/types";

type Tool = "music-waveform" | "music-rhythm-grid";
type WaveType = "sine" | "square" | "sawtooth" | "triangle";
type TimeSignature = "4/4" | "3/4" | "6/8";

// ── Waveform computation ──────────────────────────────────────────────────────

function computeWaveform(
  frequency: number,
  amplitude: number,
  harmonics: number,
): Array<{ x: number; y: number }> {
  return Array.from({ length: 100 }, (_, i) => {
    const t = i / 100;
    let y = 0;
    for (let h = 1; h <= harmonics; h++) {
      y += (amplitude / h) * Math.sin(2 * Math.PI * frequency * h * t);
    }
    return { x: t, y };
  });
}

// ── Pre-built drum pattern ────────────────────────────────────────────────────

function buildDefaultDrumTracks(
  timeSignature: TimeSignature,
): MusicRhythmGridSpec["tracks"] {
  // 16 cells per track, beats 0-15
  const kick: number[] = [0, 4, 8, 12];
  const snare: number[] = [4, 12];
  const hihat: number[] = [0, 2, 4, 6, 8, 10, 12, 14];
  const tom: number[] = [3, 11];

  const makeBeats = (
    pattern: number[],
    measure = 1,
  ): MusicRhythmGridSpec["tracks"][0]["beats"] =>
    pattern.map((beat) => ({ measure, beat, accent: beat === 0 }));

  // Adjust pattern for 3/4
  const kickPat = timeSignature === "3/4" ? [0, 6, 12] : kick;
  const snarePat = timeSignature === "3/4" ? [4, 10] : snare;
  const hihatPat = timeSignature === "6/8" ? [0, 2, 4, 8, 10, 12] : hihat;
  const tomPat = timeSignature === "6/8" ? [6, 14] : tom;

  return [
    { id: "kick", instrument: "Bombo", color: "#dc2626", beats: makeBeats(kickPat) },
    { id: "snare", instrument: "Caja", color: "#ea580c", beats: makeBeats(snarePat) },
    { id: "hihat", instrument: "Hi-hat", color: "#ca8a04", beats: makeBeats(hihatPat) },
    { id: "tom", instrument: "Tom", color: "#7c3aed", beats: makeBeats(tomPat) },
    {
      id: "cymbal",
      instrument: "Platillo",
      color: "#0891b2",
      beats: makeBeats([0, 8]),
    },
  ];
}

function getTimeSignatureBeats(sig: TimeSignature): { beats: number; division: number } {
  if (sig === "4/4") return { beats: 4, division: 4 };
  if (sig === "3/4") return { beats: 3, division: 4 };
  return { beats: 6, division: 8 };
}

// ── Main component ────────────────────────────────────────────────────────────

export default function HerramientasMusica() {
  const [activeTool, setActiveTool] = useState<Tool>("music-waveform");

  // music-waveform state
  const [frequency, setFrequency] = useState(3);
  const [amplitude, setAmplitude] = useState(1.0);
  const [waveType, setWaveType] = useState<WaveType>("sine");
  const [harmonics, setHarmonics] = useState(1);

  // music-rhythm-grid state
  const [timeSignature, setTimeSignature] = useState<TimeSignature>("4/4");
  const [tempo, setTempo] = useState<number>(120);

  // ── Specs ──────────────────────────────────────────────────────────────────

  const waveformSpec = useMemo<MusicWaveformSpec>(() => {
    const compositeWave = computeWaveform(frequency, amplitude, harmonics);
    const maxAmp = Math.max(...compositeWave.map((p) => Math.abs(p.y)));

    // Build harmonic descriptors
    const harmonicsList: MusicWaveformSpec["harmonics"] = Array.from(
      { length: harmonics },
      (_, i) => ({
        id: `h${i + 1}`,
        order: i + 1,
        frequency: frequency * (i + 1),
        amplitude: amplitude / (i + 1),
        color:
          i === 0
            ? "#6366f1"
            : i === 1
              ? "#f97316"
              : i === 2
                ? "#16a34a"
                : i === 3
                  ? "#ec4899"
                  : "#64748b",
        label:
          i === 0
            ? "Fundamental"
            : `${i + 1}.° armonico`,
      }),
    );

    const waveTypeName: Record<WaveType, string> = {
      sine: "Onda sinusoidal",
      square: "Onda cuadrada",
      sawtooth: "Onda sierra",
      triangle: "Onda triangular",
    };

    return {
      kind: "music-waveform",
      title: waveTypeName[waveType],
      description: `Frecuencia: ${frequency} Hz | Amplitud: ${amplitude} | Armonicos: ${harmonics}`,
      note: `f = ${frequency} Hz`,
      baseFrequency: frequency,
      harmonics: harmonicsList,
      compositeWave,
      axes: {
        x: { label: "Tiempo (s)", min: 0, max: 1 },
        y: { label: "Amplitud", min: -maxAmp, max: maxAmp },
      },
    };
  }, [frequency, amplitude, waveType, harmonics]);

  const rhythmGridSpec = useMemo<MusicRhythmGridSpec>(() => {
    const sig = getTimeSignatureBeats(timeSignature);
    return {
      kind: "music-rhythm-grid",
      title: `Patron rimico — ${timeSignature} a ${tempo} BPM`,
      description: "Patron de bateria predefinido con compas editable",
      timeSignature: sig,
      tempo,
      measures: 1,
      tracks: buildDefaultDrumTracks(timeSignature),
    };
  }, [timeSignature, tempo]);

  const tools: { id: Tool; label: string }[] = [
    { id: "music-waveform", label: "Forma de onda" },
    { id: "music-rhythm-grid", label: "Grilla ritmica" },
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
          Herramientas de Musica
        </h1>
        <p className="text-sm text-slate-600">
          Explora formas de onda y patrones ritmicos con visualizaciones
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
                ? "border-purple-600 bg-purple-600 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-purple-400 hover:text-purple-700"
            }`}
          >
            {tool.label}
          </button>
        ))}
      </div>

      {/* music-waveform */}
      {activeTool === "music-waveform" && (
        <div className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">
              Parametros de la onda
            </h2>
            <div className="mt-4 grid gap-5 md:grid-cols-2">
              <label className="space-y-1 text-sm text-slate-600">
                <span className="font-medium text-slate-700">
                  Frecuencia (Hz):{" "}
                  <span className="text-purple-700">{frequency}</span>
                </span>
                <input
                  type="range"
                  min={1}
                  max={10}
                  step={1}
                  value={frequency}
                  onChange={(e) => setFrequency(Number(e.target.value))}
                  className="w-full accent-purple-600"
                />
              </label>

              <label className="space-y-1 text-sm text-slate-600">
                <span className="font-medium text-slate-700">
                  Amplitud:{" "}
                  <span className="text-purple-700">{amplitude.toFixed(1)}</span>
                </span>
                <input
                  type="range"
                  min={0.1}
                  max={2.0}
                  step={0.1}
                  value={amplitude}
                  onChange={(e) => setAmplitude(Number(e.target.value))}
                  className="w-full accent-purple-600"
                />
              </label>

              <label className="space-y-1 text-sm text-slate-600">
                <span className="font-medium text-slate-700">
                  Armonicos:{" "}
                  <span className="text-purple-700">{harmonics}</span>
                </span>
                <input
                  type="range"
                  min={1}
                  max={8}
                  step={1}
                  value={harmonics}
                  onChange={(e) => setHarmonics(Number(e.target.value))}
                  className="w-full accent-purple-600"
                />
              </label>

              <label className="space-y-1 text-sm text-slate-600">
                <span className="font-medium text-slate-700">Tipo de onda</span>
                <select
                  value={waveType}
                  onChange={(e) => setWaveType(e.target.value as WaveType)}
                  className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="sine">Sinusoidal</option>
                  <option value="square">Cuadrada</option>
                  <option value="sawtooth">Sierra</option>
                  <option value="triangle">Triangular</option>
                </select>
              </label>
            </div>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={waveformSpec} />
          </section>
        </div>
      )}

      {/* music-rhythm-grid */}
      {activeTool === "music-rhythm-grid" && (
        <div className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">
              Configuracion del compas
            </h2>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <label className="space-y-1 text-sm text-slate-600">
                <span className="font-medium text-slate-700">Compas</span>
                <select
                  value={timeSignature}
                  onChange={(e) =>
                    setTimeSignature(e.target.value as TimeSignature)
                  }
                  className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="4/4">4/4 (Compas de cuatro)</option>
                  <option value="3/4">3/4 (Vals)</option>
                  <option value="6/8">6/8 (Compas de seis)</option>
                </select>
              </label>

              <label className="space-y-1 text-sm text-slate-600">
                <span className="font-medium text-slate-700">Tempo (BPM)</span>
                <select
                  value={tempo}
                  onChange={(e) => setTempo(Number(e.target.value))}
                  className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value={60}>60 BPM — Largo</option>
                  <option value={80}>80 BPM — Andante</option>
                  <option value={100}>100 BPM — Moderato</option>
                  <option value={120}>120 BPM — Allegro</option>
                </select>
              </label>
            </div>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={rhythmGridSpec} />
          </section>
        </div>
      )}
    </div>
  );
}
