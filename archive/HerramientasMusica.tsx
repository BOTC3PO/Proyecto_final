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

// ── Types for editable drum tracks ───────────────────────────────────────────

type DrumBeat = { measure: number; beat: number; accent: boolean };
type DrumTrack = { id: string; instrument: string; color: string; beats: DrumBeat[] };

// ── Pre-built drum pattern ────────────────────────────────────────────────────

function buildDefaultDrumTracks(
  timeSignature: TimeSignature,
): DrumTrack[] {
  const kick: number[] = [0, 4, 8, 12];
  const snare: number[] = [4, 12];
  const hihat: number[] = [0, 2, 4, 6, 8, 10, 12, 14];
  const tom: number[] = [3, 11];

  const makeBeats = (
    pattern: number[],
    measure = 1,
  ): DrumBeat[] =>
    pattern.map((beat) => ({ measure, beat, accent: beat === 0 }));

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

const TOTAL_CELLS = 16;

// ── Main component ────────────────────────────────────────────────────────────

export default function HerramientasMusica() {
  const [activeTool, setActiveTool] = useState<Tool>("music-waveform");

  // ── Waveform state ────────────────────────────────────────────────────────
  const [waveTitle, setWaveTitle] = useState("Forma de onda");
  const [frequency, setFrequency] = useState(3);
  const [amplitude, setAmplitude] = useState(1.0);
  const [waveType, setWaveType] = useState<WaveType>("sine");
  const [harmonics, setHarmonics] = useState(1);

  // ── Rhythm grid state ─────────────────────────────────────────────────────
  const [rhythmTitle, setRhythmTitle] = useState("Patron ritmico");
  const [timeSignature, setTimeSignature] = useState<TimeSignature>("4/4");
  const [tempo, setTempo] = useState<number>(120);
  const [drumTracks, setDrumTracks] = useState<DrumTrack[]>(() => buildDefaultDrumTracks("4/4"));

  // ── Drum track helpers ────────────────────────────────────────────────────

  const toggleBeat = (trackIndex: number, beatIndex: number) => {
    setDrumTracks((prev) => {
      const tracks = JSON.parse(JSON.stringify(prev)) as DrumTrack[];
      const track = tracks[trackIndex];
      const existing = track.beats.findIndex((b) => b.beat === beatIndex);
      if (existing >= 0) {
        track.beats.splice(existing, 1);
      } else {
        track.beats.push({ measure: 1, beat: beatIndex, accent: beatIndex === 0 });
      }
      return tracks;
    });
  };

  const updateTrackInstrument = (trackIndex: number, name: string) => {
    setDrumTracks((prev) => {
      const tracks = [...prev];
      tracks[trackIndex] = { ...tracks[trackIndex], instrument: name };
      return tracks;
    });
  };

  const updateTrackColor = (trackIndex: number, color: string) => {
    setDrumTracks((prev) => {
      const tracks = [...prev];
      tracks[trackIndex] = { ...tracks[trackIndex], color };
      return tracks;
    });
  };

  const addTrack = () => {
    setDrumTracks((prev) => [
      ...prev,
      { id: `t${Date.now()}`, instrument: "Nuevo", color: "#64748b", beats: [] },
    ]);
  };

  const removeTrack = (trackIndex: number) => {
    setDrumTracks((prev) => prev.filter((_, i) => i !== trackIndex));
  };

  const isBeatActive = (track: DrumTrack, beatIndex: number) =>
    track.beats.some((b) => b.beat === beatIndex);

  const handleTimeSignatureChange = (sig: TimeSignature) => {
    setTimeSignature(sig);
    setDrumTracks(buildDefaultDrumTracks(sig));
  };

  // ── Specs ──────────────────────────────────────────────────────────────────

  const waveformSpec = useMemo<MusicWaveformSpec>(() => {
    const compositeWave = computeWaveform(frequency, amplitude, harmonics);
    const maxAmp = Math.max(...compositeWave.map((p) => Math.abs(p.y)));

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
      title: waveTitle || waveTypeName[waveType],
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
  }, [waveTitle, frequency, amplitude, waveType, harmonics]);

  const rhythmGridSpec = useMemo<MusicRhythmGridSpec>(() => {
    const sig = getTimeSignatureBeats(timeSignature);
    return {
      kind: "music-rhythm-grid",
      title: rhythmTitle || `Patron ritmico — ${timeSignature} a ${tempo} BPM`,
      description: "Patron de bateria editable con compas configurable",
      timeSignature: sig,
      tempo,
      measures: 1,
      tracks: drumTracks,
    };
  }, [rhythmTitle, timeSignature, tempo, drumTracks]);

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

      {/* ── FORMA DE ONDA ── */}
      {activeTool === "music-waveform" && (
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <h2 className="text-base font-semibold text-slate-800">Parametros</h2>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Titulo</label>
              <input
                type="text"
                value={waveTitle}
                onChange={(e) => setWaveTitle(e.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-purple-400"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Frecuencia (Hz)</label>
                <span className="text-xs text-purple-700 font-mono">{frequency}</span>
              </div>
              <input
                type="range" min={1} max={10} step={1} value={frequency}
                onChange={(e) => setFrequency(Number(e.target.value))}
                className="w-full accent-purple-600"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Amplitud</label>
                <span className="text-xs text-purple-700 font-mono">{amplitude.toFixed(1)}</span>
              </div>
              <input
                type="range" min={0.1} max={2.0} step={0.1} value={amplitude}
                onChange={(e) => setAmplitude(Number(e.target.value))}
                className="w-full accent-purple-600"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Armonicos</label>
                <span className="text-xs text-purple-700 font-mono">{harmonics}</span>
              </div>
              <input
                type="range" min={1} max={8} step={1} value={harmonics}
                onChange={(e) => setHarmonics(Number(e.target.value))}
                className="w-full accent-purple-600"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Tipo de onda</label>
              <select
                value={waveType}
                onChange={(e) => setWaveType(e.target.value as WaveType)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-purple-400"
              >
                <option value="sine">Sinusoidal</option>
                <option value="square">Cuadrada</option>
                <option value="sawtooth">Sierra</option>
                <option value="triangle">Triangular</option>
              </select>
            </div>

            <button
              type="button"
              onClick={() => {
                setWaveTitle("Forma de onda");
                setFrequency(3);
                setAmplitude(1.0);
                setHarmonics(1);
                setWaveType("sine");
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
            <VisualizerRenderer spec={waveformSpec} />
          </section>
        </div>
      )}

      {/* ── GRILLA RITMICA ── */}
      {activeTool === "music-rhythm-grid" && (
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6 items-start">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <h2 className="text-base font-semibold text-slate-800">Parametros</h2>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Titulo</label>
              <input
                type="text"
                value={rhythmTitle}
                onChange={(e) => setRhythmTitle(e.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-purple-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Compas</label>
              <select
                value={timeSignature}
                onChange={(e) => handleTimeSignatureChange(e.target.value as TimeSignature)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-purple-400"
              >
                <option value="4/4">4/4 (Compas de cuatro)</option>
                <option value="3/4">3/4 (Vals)</option>
                <option value="6/8">6/8 (Compas de seis)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Tempo</label>
                <span className="text-xs text-purple-700 font-mono">{tempo} BPM</span>
              </div>
              <input
                type="range" min={40} max={200} step={1} value={tempo}
                onChange={(e) => setTempo(Number(e.target.value))}
                className="w-full accent-purple-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>40</span>
                <span>Largo</span>
                <span>Moderato</span>
                <span>Allegro</span>
                <span>Presto</span>
                <span>200</span>
              </div>
            </div>

            {/* Editable drum tracks */}
            <div className="space-y-2 border-t border-slate-100 pt-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Pistas de bateria</label>
                <button
                  type="button"
                  onClick={addTrack}
                  className="text-xs text-purple-600 hover:underline"
                >
                  + Agregar pista
                </button>
              </div>

              {drumTracks.map((track, ti) => (
                <div key={track.id} className="rounded-lg border border-slate-100 p-2 space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <input
                      className="w-20 border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-purple-400"
                      value={track.instrument}
                      onChange={(e) => updateTrackInstrument(ti, e.target.value)}
                    />
                    <input
                      type="color"
                      value={track.color}
                      onChange={(e) => updateTrackColor(ti, e.target.value)}
                      className="h-6 w-6 rounded border border-slate-200 cursor-pointer p-0"
                    />
                    <div className="flex-1" />
                    <button
                      type="button"
                      onClick={() => removeTrack(ti)}
                      className="text-red-400 hover:text-red-600 text-sm px-1"
                      title="Quitar pista"
                    >
                      x
                    </button>
                  </div>
                  {/* Beat grid */}
                  <div className="flex gap-[2px] flex-wrap">
                    {Array.from({ length: TOTAL_CELLS }, (_, bi) => (
                      <button
                        key={bi}
                        type="button"
                        onClick={() => toggleBeat(ti, bi)}
                        className={`w-5 h-5 rounded-sm border text-[9px] font-mono leading-none transition-colors ${
                          isBeatActive(track, bi)
                            ? "border-transparent text-white"
                            : "border-slate-200 bg-slate-50 text-slate-300 hover:border-purple-300"
                        }`}
                        style={isBeatActive(track, bi) ? { backgroundColor: track.color } : undefined}
                        title={`Beat ${bi}`}
                      >
                        {bi % 4 === 0 ? bi / 4 + 1 : ""}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={() => {
                  setDrumTracks(buildDefaultDrumTracks(timeSignature));
                  setRhythmTitle("Patron ritmico");
                  setTempo(120);
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
            <VisualizerRenderer spec={rhythmGridSpec} />
          </section>
        </div>
      )}
    </div>
  );
}
