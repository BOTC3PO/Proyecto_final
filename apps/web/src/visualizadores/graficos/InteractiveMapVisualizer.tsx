import { useCallback, useMemo, useState } from "react";
import type { MapMarker, MapRoute, MapSpec } from "../types";

const DEFAULT_CENTER: [number, number] = [0, 0];
const DEFAULT_ZOOM = 1;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getBounds(markers: MapMarker[]) {
  if (markers.length === 0) {
    return {
      minLat: -1,
      maxLat: 1,
      minLng: -1,
      maxLng: 1,
    };
  }

  return markers.reduce(
    (acc, marker) => {
      const [lat, lng] = marker.coordinates;
      return {
        minLat: Math.min(acc.minLat, lat),
        maxLat: Math.max(acc.maxLat, lat),
        minLng: Math.min(acc.minLng, lng),
        maxLng: Math.max(acc.maxLng, lng),
      };
    },
    {
      minLat: markers[0].coordinates[0],
      maxLat: markers[0].coordinates[0],
      minLng: markers[0].coordinates[1],
      maxLng: markers[0].coordinates[1],
    },
  );
}

function formatCoordinates(coordinates: [number, number]) {
  return `${coordinates[0].toFixed(3)}, ${coordinates[1].toFixed(3)}`;
}

function MapLegend({ routes }: { routes?: MapRoute[] }) {
  if (!routes || routes.length === 0) {
    return (
      <p className="text-xs text-slate-500">
        No hay rutas configuradas en este mapa.
      </p>
    );
  }

  return (
    <ul className="space-y-1 text-xs text-slate-600">
      {routes.map((route) => (
        <li key={route.id} className="flex items-center gap-2">
          <span
            className="h-2 w-6 rounded-full"
            style={{ backgroundColor: route.color ?? "#94a3b8" }}
          />
          <span>{route.label ?? `Ruta ${route.id}`}</span>
          <span className="text-slate-400">
            ({route.path.length} puntos)
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function InteractiveMapVisualizer({
  spec,
}: {
  spec: MapSpec;
}) {
  const [zoom, setZoom] = useState(spec.viewport?.zoom ?? DEFAULT_ZOOM);
  const [selectedMarkerId, setSelectedMarkerId] = useState<string | null>(
    spec.markers[0]?.id ?? null,
  );
  const [activeLayers, setActiveLayers] = useState<Set<string>>(() => {
    const layers = new Set<string>();
    spec.markers.forEach((marker) => {
      if (marker.category) {
        layers.add(marker.category);
      }
    });
    return layers;
  });

  const categories = useMemo(() => {
    const map = new Map<string, number>();
    spec.markers.forEach((marker) => {
      if (!marker.category) {
        return;
      }
      map.set(marker.category, (map.get(marker.category) ?? 0) + 1);
    });
    return Array.from(map.entries()).map(([name, count]) => ({ name, count }));
  }, [spec.markers]);

  const handleZoomChange = useCallback((delta: number) => {
    setZoom((prev) => clamp(prev + delta, 0.5, 5));
  }, []);

  const handleMarkerSelection = useCallback((markerId: string) => {
    setSelectedMarkerId(markerId);
  }, []);

  const handleLayerToggle = useCallback((layerName: string) => {
    setActiveLayers((prev) => {
      const next = new Set(prev);
      if (next.has(layerName)) {
        next.delete(layerName);
      } else {
        next.add(layerName);
      }
      return next;
    });
  }, []);

  const filteredMarkers = useMemo(() => {
    if (activeLayers.size === 0) {
      return spec.markers;
    }

    return spec.markers.filter((marker) =>
      marker.category ? activeLayers.has(marker.category) : true,
    );
  }, [activeLayers, spec.markers]);

  const bounds = useMemo(() => getBounds(filteredMarkers), [filteredMarkers]);

  const selectedMarker = useMemo(
    () => spec.markers.find((marker) => marker.id === selectedMarkerId) ?? null,
    [selectedMarkerId, spec.markers],
  );

  const center = spec.viewport?.center ?? DEFAULT_CENTER;

  return (
    <section className="space-y-6">
      {spec.title && <h3 className="text-lg font-semibold">{spec.title}</h3>}
      <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-700">
                Vista principal
              </p>
              <p className="text-xs text-slate-500">
                Centro: {formatCoordinates(center)} · Zoom {zoom.toFixed(1)}x
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleZoomChange(-0.5)}
                className="rounded-md border border-slate-200 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300"
              >
                -
              </button>
              <button
                type="button"
                onClick={() => handleZoomChange(0.5)}
                className="rounded-md border border-slate-200 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300"
              >
                +
              </button>
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-40">
              {Array.from({ length: 24 }).map((_, index) => (
                <div key={index} className="border border-white/40" />
              ))}
            </div>
            {filteredMarkers.length === 0 ? (
              <div className="absolute inset-0 flex items-center justify-center text-sm text-slate-400">
                No hay marcadores visibles para las capas seleccionadas.
              </div>
            ) : (
              filteredMarkers.map((marker) => {
                const [lat, lng] = marker.coordinates;
                const latRatio =
                  (lat - bounds.minLat) / (bounds.maxLat - bounds.minLat || 1);
                const lngRatio =
                  (lng - bounds.minLng) / (bounds.maxLng - bounds.minLng || 1);
                const top = clamp(100 - latRatio * 100, 5, 95);
                const left = clamp(lngRatio * 100, 5, 95);
                const isSelected = selectedMarker?.id === marker.id;

                return (
                  <button
                    key={marker.id}
                    type="button"
                    onClick={() => handleMarkerSelection(marker.id)}
                    className={`absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-xs font-semibold shadow-lg transition ${
                      isSelected
                        ? "border-indigo-500 bg-indigo-500 text-white"
                        : "border-white bg-slate-900 text-white/90"
                    }`}
                    style={{ top: `${top}%`, left: `${left}%` }}
                    aria-label={`Seleccionar ${marker.label}`}
                  >
                    {marker.label.slice(0, 2).toUpperCase()}
                  </button>
                );
              })
            )}
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-slate-700">Marcadores</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {filteredMarkers.map((marker) => (
                <button
                  key={marker.id}
                  type="button"
                  onClick={() => handleMarkerSelection(marker.id)}
                  className={`rounded-lg border px-3 py-2 text-left text-sm transition ${
                    selectedMarker?.id === marker.id
                      ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                      : "border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  <span className="font-semibold text-slate-800">
                    {marker.label}
                  </span>
                  <span className="block text-xs text-slate-500">
                    {formatCoordinates(marker.coordinates)}
                  </span>
                  {marker.category && (
                    <span className="mt-1 inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-500">
                      {marker.category}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
        <aside className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-slate-700">Capas</p>
            {categories.length === 0 ? (
              <p className="mt-2 text-xs text-slate-500">
                Los marcadores actuales no tienen categorías definidas.
              </p>
            ) : (
              <div className="mt-3 space-y-2">
                {categories.map((category) => (
                  <label
                    key={category.name}
                    className="flex items-center justify-between gap-3 text-sm text-slate-600"
                  >
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-slate-300 text-indigo-600"
                        checked={activeLayers.has(category.name)}
                        onChange={() => handleLayerToggle(category.name)}
                      />
                      {category.name}
                    </span>
                    <span className="text-xs text-slate-400">
                      {category.count}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-slate-700">Rutas</p>
            <div className="mt-3">
              <MapLegend routes={spec.routes} />
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-slate-700">Selección</p>
            {selectedMarker ? (
              <div className="mt-3 space-y-1 text-sm text-slate-600">
                <p className="font-semibold text-slate-800">
                  {selectedMarker.label}
                </p>
                <p className="text-xs text-slate-500">
                  {formatCoordinates(selectedMarker.coordinates)}
                </p>
                {selectedMarker.description && (
                  <p className="text-xs text-slate-500">
                    {selectedMarker.description}
                  </p>
                )}
              </div>
            ) : (
              <p className="mt-2 text-xs text-slate-500">
                Selecciona un marcador para ver sus detalles.
              </p>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
