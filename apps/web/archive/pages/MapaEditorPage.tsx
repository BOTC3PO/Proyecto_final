import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MapaStandalone from "../components/modulos/standalone/MapaStandalone";
import type { MapaConfig } from "../components/modulos/standalone/types";

const DEFAULT_CONFIG: MapaConfig = {
  tool: "mapa",
  titulo: "",
  modo: "political",
  escala: "110m",
  anotaciones: [],
};

export default function MapaEditorPage() {
  const [searchParams] = useSearchParams();
  const ssKey = searchParams.get("sskey");

  const [config, setConfig] = useState<MapaConfig>(() => {
    if (!ssKey) return DEFAULT_CONFIG;
    try {
      const raw = sessionStorage.getItem(`mapa-doc:${ssKey}`);
      if (raw) {
        const parsed = JSON.parse(raw) as MapaConfig;
        if (parsed?.tool === "mapa") return parsed;
      }
    } catch {
      // ignore
    }
    return DEFAULT_CONFIG;
  });

  const [saved, setSaved] = useState(false);

  // If no ssKey, nothing to do — just show the editor in demo mode
  useEffect(() => {
    setSaved(false);
  }, [config]);

  function handleSave() {
    if (!ssKey) return;
    sessionStorage.setItem(`mapa-doc:${ssKey}:result`, JSON.stringify(config));
    setSaved(true);
    // Close the tab after a short delay so the user sees feedback
    setTimeout(() => window.close(), 600);
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="flex items-center gap-3 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 px-4 py-3 shadow-md">
        <span className="text-white font-bold text-lg tracking-tight">Editor de mapa</span>
        {config.titulo && (
          <span className="text-cyan-100 text-sm">— {config.titulo}</span>
        )}
        <div className="ml-auto flex items-center gap-2">
          <label className="flex items-center gap-1.5 text-xs text-white/80">
            Título
            <input
              className="rounded border border-white/30 bg-white/20 px-2 py-1 text-xs text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/50"
              placeholder="Título del mapa…"
              value={config.titulo ?? ""}
              onChange={(e) => setConfig((prev) => ({ ...prev, titulo: e.target.value }))}
            />
          </label>
          {ssKey && (
            <button
              type="button"
              className={`rounded-lg px-4 py-1.5 text-sm font-semibold transition-colors ${
                saved
                  ? "bg-emerald-400 text-white"
                  : "bg-white text-teal-700 hover:bg-teal-50"
              }`}
              onClick={handleSave}
            >
              {saved ? "Guardado ✓" : "Guardar"}
            </button>
          )}
        </div>
      </header>

      {/* Editor */}
      <main className="flex-1 p-4">
        <MapaStandalone config={config} editable onChange={setConfig} />
      </main>
    </div>
  );
}
