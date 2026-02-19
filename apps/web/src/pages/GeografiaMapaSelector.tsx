import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMercatorPathGenerator } from "../lib/maps/svg-geo-lite";
import { topologyToFeatures, type CountryFeature, type TopologyLike } from "../lib/maps/topojson-lite";

const MAP_WIDTH = 960;
const MAP_HEIGHT = 520;
const HISTORICAL_FILTER = "sepia(75%) saturate(70%) brightness(95%) contrast(95%)";

export default function GeografiaMapaSelector() {
  const navigate = useNavigate();
  const [countries, setCountries] = useState<CountryFeature[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [hoveredCode, setHoveredCode] = useState<string | null>(null);
  const [historicalTheme, setHistoricalTheme] = useState(false);

  useEffect(() => {
    let active = true;
    setStatus("loading");
    setErrorMessage(null);

    fetch("/api/maps/political/earth/countries_110m.topo.json")
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`No se pudo cargar el mapa (${response.status})`);
        }
        return response.json() as Promise<TopologyLike>;
      })
      .then((topology) => {
        if (!active) return;
        const validFeatures = topologyToFeatures(topology);
        setCountries(validFeatures);
        setStatus("ready");
      })
      .catch((error) => {
        if (!active) return;
        setCountries([]);
        setStatus("error");
        setErrorMessage(
          error instanceof Error ? error.message : "No se pudo cargar el mapa de geografía."
        );
      });

    return () => {
      active = false;
    };
  }, []);

  const pathGenerator = useMemo(() => {
    if (countries.length === 0) return null;
    return createMercatorPathGenerator(countries, MAP_WIDTH, MAP_HEIGHT);
  }, [countries]);

  return (
    <main className="space-y-6 p-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Selector de Geografía</h1>
          <p className="text-sm text-slate-600">
            Explorá el mapa mundial y elegí un país para ir a los módulos de Geografía.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setHistoricalTheme((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
        >
          Tema: {historicalTheme ? "Histórico" : "Normal"}
        </button>
      </header>

      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        {status === "loading" && (
          <p className="rounded-md bg-slate-50 px-3 py-4 text-sm text-slate-600">Cargando mapa...</p>
        )}

        {status === "error" && (
          <p className="rounded-md border border-red-200 bg-red-50 px-3 py-4 text-sm text-red-700">
            {errorMessage ?? "No se pudo renderizar el mapa."}
          </p>
        )}

        {status === "ready" && pathGenerator && (
          <div
            className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50"
            style={{ filter: historicalTheme ? HISTORICAL_FILTER : "none" }}
          >
            <svg
              viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
              className="h-auto w-full"
              role="img"
              aria-label="Mapa mundial interactivo para selección de país"
            >
              <rect x={0} y={0} width={MAP_WIDTH} height={MAP_HEIGHT} fill="#e8eef7" />
              {countries.map((country, index) => {
                const code = String(country.properties?.ADM0_A3 ?? "UNK");
                const isHovered = hoveredCode === code;
                const countryPath = pathGenerator(country);

                return (
                  <path
                    key={`${code}-${index}`}
                    d={countryPath}
                    fill={isHovered ? "#f59e0b" : "#d1d5db"}
                    stroke={isHovered ? "#92400e" : "#475569"}
                    strokeWidth={isHovered ? 1.3 : 0.6}
                    className="cursor-pointer transition-colors"
                    onMouseEnter={() => setHoveredCode(code)}
                    onMouseLeave={() => setHoveredCode((prev) => (prev === code ? null : prev))}
                    onClick={() => {
                      if (code === "ARG") {
                        navigate("/modulos?subject=Geografía&country=ARG");
                        return;
                      }
                      navigate(`/modulos?subject=Geografía&country=${encodeURIComponent(code)}`);
                    }}
                  >
                    <title>{String(country.properties?.NAME ?? country.properties?.ADMIN ?? code)}</title>
                  </path>
                );
              })}
            </svg>
          </div>
        )}
      </section>
    </main>
  );
}
