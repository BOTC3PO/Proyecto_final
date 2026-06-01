// Editor de mapa completo (WO11). Crea/edita mapas con zonas, flechas y
// marcadores sobre un mapa base TopoJSON, con capas (visibilidad + color +
// dataset opcional), zoom/pan, export a imagen y reordenado de capas por
// teclado. Reusa `AnnotationLayer` (el render que ya funciona en
// `MapaStandalone`) y los datasets de la API VBLang.
import { useCallback, useEffect, useMemo, useRef, useState, type MouseEvent, type WheelEvent, type PointerEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { topologyToFeatures } from "../../lib/maps/topojson-lite";
import type { CountryFeature, TopologyLike } from "../../lib/maps/topojson-lite";
import {
  createMercatorPathGenerator,
  createProjector,
  createInverseProjector,
} from "../../lib/maps/svg-geo-lite";
import {
  MAPA_CAPA_DEFAULT_ID,
  makeEmptyMapaConfig,
  type MapaConfig,
  type MapaAnotacion,
  type MapaCapa,
  type MapaDataset,
} from "../../components/modulos/standalone/types";
import { makeCapaId, migrateMapaConfig } from "../../components/modulos/standalone/mapa.migrate";
import { AnnotationLayer, pointsToPolyline } from "../../components/modulos/standalone/AnnotationLayer";
import { datasetDetailToMapaDataset, datasetTieneCoordenadas } from "../../components/modulos/standalone/mapa.datasets";
import { listDatasets, getDataset } from "../../domain/vblang/datasetApi";
import type { DatasetListItem } from "../../domain/vblang/dataset.types";
import { useMapEditorShortcuts } from "./mapa-editor-shortcuts";
import styles from "./MapaEditorFull.module.css";

const MAP_WIDTH = 1000;
const MAP_HEIGHT = 620;
const MIN_VB = 80; // límite de zoom-in (ancho mínimo del viewBox)

type Tool = "select" | "marcador" | "ruta" | "area" | "texto" | "medir";

const TOOLS: { id: Tool; label: string; kbd: string; iconPath: string }[] = [
  { id: "select",   label: "Mover",      kbd: "V", iconPath: "M5 3l5 16 2.5-6.5L19 10z" },
  { id: "marcador", label: "Marcador",   kbd: "M", iconPath: "M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" },
  { id: "ruta",     label: "Ruta",       kbd: "R", iconPath: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8 16c2-4 6-8 10-10" },
  { id: "area",     label: "Área",       kbd: "A", iconPath: "M12 3l8 5-3 11H7L4 8z" },
  { id: "texto",    label: "Texto",      kbd: "T", iconPath: "M5 5h14M12 5v14M9 19h6" },
  { id: "medir",    label: "Medir",      kbd: "L", iconPath: "M3 17l14-14 4 4-14 14z" },
];

const PALETTE = [
  "#1a1a1a", "#c47a35", "#5a8ec2", "#2f8c4f", "#9a2a2a", "#7a3ec8", "#d6b673",
];

type ViewBox = { x: number; y: number; w: number; h: number };

/** Id corto para una anotación nueva. */
function genAnnoId(): string {
  return `a-${Math.random().toString(36).slice(2, 10)}`;
}

// Distancia great-circle en km (haversine) para la herramienta «Medir».
function haversineKm(a: [number, number], b: [number, number]): number {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const [lon1, lat1] = a;
  const [lon2, lat2] = b;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(s)));
}

export default function MapaEditorFull() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const ssKey = searchParams.get("sskey") ?? "new-mapa";

  // ─── Cargar config desde sessionStorage o crear vacía ──────────
  const [config, setConfig] = useState<MapaConfig>(() => {
    try {
      const raw = sessionStorage.getItem(`mapa-doc:${ssKey}`);
      if (raw) return migrateMapaConfig(JSON.parse(raw) as MapaConfig);
    } catch {
      // ignore
    }
    return makeEmptyMapaConfig();
  });

  const [activeTool, setActiveTool] = useState<Tool>("select");
  const [activeCapaId, setActiveCapaId] = useState<string>(
    config.capas?.[0]?.id ?? MAPA_CAPA_DEFAULT_ID,
  );
  const [selectedAnnoId, setSelectedAnnoId] = useState<string | null>(null);
  const [inspectorTab, setInspectorTab] = useState<"datos" | "estilo" | "avanzado">("datos");
  const [cursorCoords, setCursorCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [announce, setAnnounce] = useState("");

  // Estado de creación en curso (zona/ruta/medición).
  const [pendingArea, setPendingArea] = useState<[number, number][] | null>(null);
  const [pendingRuta, setPendingRuta] = useState<[number, number] | null>(null);
  const [pendingMedir, setPendingMedir] = useState<[number, number] | null>(null);
  const [medidaKm, setMedidaKm] = useState<number | null>(null);

  // Undo/redo simple basado en snapshots
  const [history, setHistory] = useState<MapaConfig[]>([config]);
  const [historyIdx, setHistoryIdx] = useState(0);

  // ─── Mapa base ──────────────────────────────────────────────────
  const [features, setFeatures] = useState<CountryFeature[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // ─── Zoom / pan ─────────────────────────────────────────────────
  const [viewBox, setViewBox] = useState<ViewBox>({ x: 0, y: 0, w: MAP_WIDTH, h: MAP_HEIGHT });
  const panState = useRef<{ startX: number; startY: number; origin: ViewBox } | null>(null);

  useEffect(() => {
    setLoading(true);
    const url = `/api/maps/${config.modo}/earth/countries_${config.escala}.topo.json`;
    fetch(url)
      .then((r) => r.json())
      .then((topo: TopologyLike) => {
        setFeatures(topologyToFeatures(topo));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [config.modo, config.escala]);

  const pathGenerator = useMemo(
    () => (features.length ? createMercatorPathGenerator(features, MAP_WIDTH, MAP_HEIGHT) : null),
    [features],
  );
  const project = useMemo(
    () => (features.length ? createProjector(features, MAP_WIDTH, MAP_HEIGHT) : null),
    [features],
  );
  const inverseProject = useMemo(
    () => (features.length ? createInverseProjector(features, MAP_WIDTH, MAP_HEIGHT) : null),
    [features],
  );

  // ─── Datasets desde la API del módulo ───────────────────────────
  const [datasetList, setDatasetList] = useState<DatasetListItem[]>([]);
  const [datasetCache, setDatasetCache] = useState<Record<string, MapaDataset>>({});

  // Lista de datasets con coordenadas, para ofrecerlos en el selector de capa.
  useEffect(() => {
    let cancelled = false;
    listDatasets({ limit: 100 })
      .then((res) => {
        if (cancelled) return;
        setDatasetList(res.items.filter((d) => datasetTieneCoordenadas(d.columnas)));
      })
      .catch(() => {
        if (!cancelled) setDatasetList([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Carga perezosa del detalle de los datasets referenciados por alguna capa.
  const capas = useMemo(() => config.capas ?? [], [config.capas]);
  useEffect(() => {
    const needed = capas
      .map((c) => c.datasetId)
      .filter((id): id is string => !!id && !(id in datasetCache));
    if (needed.length === 0) return;
    let cancelled = false;
    Promise.all(
      needed.map((id) =>
        getDataset(id)
          .then((detail) => datasetDetailToMapaDataset(detail))
          .catch(() => null),
      ),
    ).then((results) => {
      if (cancelled) return;
      setDatasetCache((prev) => {
        const next = { ...prev };
        needed.forEach((id, i) => {
          const ds = results[i];
          if (ds) next[id] = ds;
        });
        return next;
      });
    });
    return () => {
      cancelled = true;
    };
  }, [capas, datasetCache]);

  const datasets = useMemo(() => Object.values(datasetCache), [datasetCache]);

  // ─── Helpers de cambio con historial ───────────────────────────
  const updateConfig = useCallback((next: MapaConfig) => {
    setConfig(next);
    setHistory((h) => [...h.slice(0, historyIdx + 1), next]);
    setHistoryIdx((i) => i + 1);
  }, [historyIdx]);

  const undo = useCallback(() => {
    if (historyIdx === 0) return;
    setHistoryIdx((i) => i - 1);
    setConfig(history[historyIdx - 1]);
  }, [history, historyIdx]);

  const redo = useCallback(() => {
    if (historyIdx >= history.length - 1) return;
    setHistoryIdx((i) => i + 1);
    setConfig(history[historyIdx + 1]);
  }, [history, historyIdx]);

  // ─── Coordenadas SVG ↔ lon/lat (teniendo en cuenta el viewBox) ───
  const clientToSvg = useCallback((clientX: number, clientY: number): [number, number] | null => {
    if (!svgRef.current) return null;
    const rect = svgRef.current.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return null;
    const svgX = viewBox.x + ((clientX - rect.left) / rect.width) * viewBox.w;
    const svgY = viewBox.y + ((clientY - rect.top) / rect.height) * viewBox.h;
    return [svgX, svgY];
  }, [viewBox]);

  const clientToLonLat = useCallback((clientX: number, clientY: number): [number, number] | null => {
    if (!inverseProject) return null;
    const svg = clientToSvg(clientX, clientY);
    if (!svg) return null;
    const coords = inverseProject(svg[0], svg[1]);
    return coords ? [coords[0], coords[1]] : null;
  }, [clientToSvg, inverseProject]);

  // ─── Cursor coords (aria-live) ──────────────────────────────────
  const handleMouseMove = useCallback((e: MouseEvent<SVGSVGElement>) => {
    const coords = clientToLonLat(e.clientX, e.clientY);
    if (coords) setCursorCoords({ lon: coords[0], lat: coords[1] });
  }, [clientToLonLat]);

  // ─── Creación de anotaciones (click / double-click) ─────────────
  const addAnotacion = useCallback((anno: MapaAnotacion) => {
    updateConfig({ ...config, anotaciones: [...config.anotaciones, { ...anno, capaId: activeCapaId }] });
    setSelectedAnnoId(anno.id);
  }, [config, activeCapaId, updateConfig]);

  const handleSvgClick = useCallback((e: MouseEvent<SVGSVGElement>) => {
    const coords = clientToLonLat(e.clientX, e.clientY);
    if (!coords) return;
    const [lon, lat] = coords;

    switch (activeTool) {
      case "marcador":
      case "texto":
        addAnotacion({ id: genAnnoId(), tipo: "marcador", lat, lon, etiqueta: "" });
        break;
      case "ruta":
        if (!pendingRuta) {
          setPendingRuta([lon, lat]);
        } else {
          addAnotacion({ id: genAnnoId(), tipo: "flecha", desde: pendingRuta, hasta: [lon, lat], etiqueta: "" });
          setPendingRuta(null);
        }
        break;
      case "area":
        setPendingArea((prev) => [...(prev ?? []), [lon, lat]]);
        break;
      case "medir":
        if (!pendingMedir) {
          setPendingMedir([lon, lat]);
          setMedidaKm(null);
        } else {
          setMedidaKm(haversineKm(pendingMedir, [lon, lat]));
          setPendingMedir(null);
        }
        break;
      case "select":
      default:
        break;
    }
  }, [activeTool, pendingRuta, pendingMedir, clientToLonLat, addAnotacion]);

  const handleSvgDoubleClick = useCallback((e: MouseEvent<SVGSVGElement>) => {
    if (activeTool !== "area" || !pendingArea || pendingArea.length < 3) return;
    e.preventDefault();
    addAnotacion({ id: genAnnoId(), tipo: "zona", puntos: pendingArea, etiqueta: "" });
    setPendingArea(null);
  }, [activeTool, pendingArea, addAnotacion]);

  const cerrarArea = useCallback(() => {
    if (!pendingArea || pendingArea.length < 3) return;
    addAnotacion({ id: genAnnoId(), tipo: "zona", puntos: pendingArea, etiqueta: "" });
    setPendingArea(null);
  }, [pendingArea, addAnotacion]);

  // Cancelar creación en curso al cambiar de herramienta.
  useEffect(() => {
    setPendingArea(null);
    setPendingRuta(null);
    setPendingMedir(null);
  }, [activeTool]);

  // ─── Zoom / pan ─────────────────────────────────────────────────
  const zoomBy = useCallback((factor: number, focus?: [number, number]) => {
    setViewBox((vb) => {
      const newW = Math.min(MAP_WIDTH, Math.max(MIN_VB, vb.w * factor));
      const newH = newW * (MAP_HEIGHT / MAP_WIDTH);
      // Punto focal (en coords SVG) que se mantiene fijo; por defecto el centro.
      const fx = focus ? focus[0] : vb.x + vb.w / 2;
      const fy = focus ? focus[1] : vb.y + vb.h / 2;
      const ratioX = (fx - vb.x) / vb.w;
      const ratioY = (fy - vb.y) / vb.h;
      let nx = fx - ratioX * newW;
      let ny = fy - ratioY * newH;
      nx = Math.min(MAP_WIDTH - newW, Math.max(0, nx));
      ny = Math.min(MAP_HEIGHT - newH, Math.max(0, ny));
      return { x: nx, y: ny, w: newW, h: newH };
    });
  }, []);

  const resetZoom = useCallback(() => setViewBox({ x: 0, y: 0, w: MAP_WIDTH, h: MAP_HEIGHT }), []);

  const handleWheel = useCallback((e: WheelEvent<SVGSVGElement>) => {
    const svg = clientToSvg(e.clientX, e.clientY);
    zoomBy(e.deltaY > 0 ? 1.15 : 1 / 1.15, svg ?? undefined);
  }, [clientToSvg, zoomBy]);

  const handlePointerDown = useCallback((e: PointerEvent<SVGSVGElement>) => {
    if (activeTool !== "select") return;
    panState.current = { startX: e.clientX, startY: e.clientY, origin: viewBox };
    (e.target as Element).setPointerCapture?.(e.pointerId);
  }, [activeTool, viewBox]);

  const handlePointerMove = useCallback((e: PointerEvent<SVGSVGElement>) => {
    const pan = panState.current;
    if (!pan || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const dx = ((e.clientX - pan.startX) / rect.width) * pan.origin.w;
    const dy = ((e.clientY - pan.startY) / rect.height) * pan.origin.h;
    const nx = Math.min(MAP_WIDTH - pan.origin.w, Math.max(0, pan.origin.x - dx));
    const ny = Math.min(MAP_HEIGHT - pan.origin.h, Math.max(0, pan.origin.y - dy));
    setViewBox({ ...pan.origin, x: nx, y: ny });
  }, []);

  const handlePointerUp = useCallback(() => {
    panState.current = null;
  }, []);

  // ─── Export a imagen (PNG) ──────────────────────────────────────
  const exportarImagen = useCallback(() => {
    const svg = svgRef.current;
    if (!svg) return;
    // Clonar con el viewBox completo para exportar el mapa entero, no el zoom.
    const clone = svg.cloneNode(true) as SVGSVGElement;
    clone.setAttribute("viewBox", `0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`);
    clone.setAttribute("width", String(MAP_WIDTH));
    clone.setAttribute("height", String(MAP_HEIGHT));
    const xml = new XMLSerializer().serializeToString(clone);
    const svg64 = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(xml)}`;

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = MAP_WIDTH;
      canvas.height = MAP_HEIGHT;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, MAP_WIDTH, MAP_HEIGHT);
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${config.titulo?.trim() || "mapa"}.png`;
        a.click();
        URL.revokeObjectURL(url);
        setAnnounce("Mapa exportado como imagen PNG.");
      }, "image/png");
    };
    img.onerror = () => setAnnounce("No se pudo exportar la imagen.");
    img.src = svg64;
  }, [config.titulo]);

  // ─── Capas: CRUD + reorder accesible ────────────────────────────
  const addCapa = useCallback(() => {
    const newCapa: MapaCapa = {
      id: makeCapaId(),
      nombre: `Capa ${capas.length + 1}`,
      color: PALETTE[capas.length % PALETTE.length],
      visible: true,
    };
    updateConfig({ ...config, capas: [...capas, newCapa] });
    setActiveCapaId(newCapa.id);
    setAnnounce(`Capa ${newCapa.nombre} agregada.`);
  }, [capas, config, updateConfig]);

  const toggleCapaVisible = useCallback((capaId: string) => {
    updateConfig({
      ...config,
      capas: capas.map((c) => (c.id === capaId ? { ...c, visible: !c.visible } : c)),
    });
  }, [capas, config, updateConfig]);

  const moveCapa = useCallback((index: number, dir: -1 | 1) => {
    const j = index + dir;
    if (j < 0 || j >= capas.length) return;
    const next = [...capas];
    [next[index], next[j]] = [next[j], next[index]];
    updateConfig({ ...config, capas: next });
    setAnnounce(`Capa ${next[j].nombre} movida a la posición ${j + 1} de ${capas.length}.`);
  }, [capas, config, updateConfig]);

  const setCapaDataset = useCallback((capaId: string, datasetId: string | undefined) => {
    updateConfig({
      ...config,
      capas: capas.map((c) => (c.id === capaId ? { ...c, datasetId } : c)),
    });
  }, [capas, config, updateConfig]);

  // ─── Atajos de teclado ──────────────────────────────────────────
  useMapEditorShortcuts({
    "v": () => setActiveTool("select"),
    "m": () => setActiveTool("marcador"),
    "r": () => setActiveTool("ruta"),
    "a": () => setActiveTool("area"),
    "t": () => setActiveTool("texto"),
    "l": () => setActiveTool("medir"),
    "delete": () => {
      if (!selectedAnnoId) return;
      updateConfig({
        ...config,
        anotaciones: config.anotaciones.filter((a) => a.id !== selectedAnnoId),
      });
      setSelectedAnnoId(null);
    },
    "ctrl+z": undo,
    "ctrl+shift+z": redo,
    "escape": () => {
      setSelectedAnnoId(null);
      setPendingArea(null);
      setPendingRuta(null);
      setPendingMedir(null);
    },
  });

  // ─── Persistir + cerrar ─────────────────────────────────────────
  const saveAndClose = useCallback(() => {
    setSaveStatus("saving");
    try {
      sessionStorage.setItem(`mapa-doc:${ssKey}:result`, JSON.stringify(config));
      setSaveStatus("saved");
      window.close();
    } catch {
      setSaveStatus("error");
    }
  }, [config, ssKey]);

  // ─── Anotaciones a renderizar (capa visible + color + datasets) ──
  const capaById = useMemo(() => new Map(capas.map((c) => [c.id, c])), [capas]);

  const annoCountByCapa = useMemo(() => {
    const m = new Map<string, number>();
    config.anotaciones.forEach((a) => {
      const k = a.capaId ?? MAPA_CAPA_DEFAULT_ID;
      m.set(k, (m.get(k) ?? 0) + 1);
    });
    return m;
  }, [config.anotaciones]);

  const datasetMarkers = useMemo<MapaAnotacion[]>(() => {
    if (datasets.length === 0) return [];
    const out: MapaAnotacion[] = [];
    capas.forEach((capa) => {
      if (!capa.visible || !capa.datasetId) return;
      const ds = datasets.find((d) => d.id === capa.datasetId);
      if (!ds) return;
      ds.entries.forEach((entry) => {
        out.push({
          id: `ds:${capa.id}:${entry.id}`,
          tipo: "marcador",
          lat: entry.lat,
          lon: entry.lon,
          etiqueta: entry.etiqueta,
          color: capa.color,
          capaId: capa.id,
        });
      });
    });
    return out;
  }, [datasets, capas]);

  const anotacionesParaRender = useMemo<MapaAnotacion[]>(() => {
    const visibles = config.anotaciones.filter((a) => {
      const c = capaById.get(a.capaId ?? MAPA_CAPA_DEFAULT_ID);
      return c ? c.visible : true;
    });
    return [...visibles, ...datasetMarkers].map((a) => {
      if (a.color) return a;
      const capa = capaById.get(a.capaId ?? MAPA_CAPA_DEFAULT_ID);
      return capa?.color ? ({ ...a, color: capa.color } as MapaAnotacion) : a;
    });
  }, [config.anotaciones, capaById, datasetMarkers]);

  const handleSelectAnnotation = useCallback((id: string) => {
    if (id.startsWith("ds:")) return; // los marcadores de dataset no se editan
    setSelectedAnnoId(id);
  }, []);

  const selectedAnno = config.anotaciones.find((a) => a.id === selectedAnnoId) ?? null;
  const annoEtiqueta = (a: MapaAnotacion) =>
    "etiqueta" in a ? (a.etiqueta || "Sin etiqueta") : "Sin etiqueta";

  const updateSelectedAnno = useCallback((patch: Partial<MapaAnotacion>) => {
    if (!selectedAnno) return;
    updateConfig({
      ...config,
      anotaciones: config.anotaciones.map((a) =>
        a.id === selectedAnno.id ? ({ ...a, ...patch } as MapaAnotacion) : a,
      ),
    });
  }, [selectedAnno, config, updateConfig]);

  const svgCursor = activeTool === "select" ? "grab" : "crosshair";

  // ─── Render ─────────────────────────────────────────────────────
  return (
    <div className={styles.mapview}>
      <a href="#mapa-canvas" className="skip-link">Saltar al lienzo</a>

      {/* Región de anuncios para lectores de pantalla. */}
      <div role="status" aria-live="polite" className="sr-only">{announce}</div>

      {/* HEADER */}
      <header className={styles.mapbar} role="banner">
        <button
          type="button"
          className={`${styles.btn} ${styles.btnGhost}`}
          onClick={() => {
            if (window.confirm("¿Descartar cambios y volver?")) {
              window.close();
              navigate(-1);
            }
          }}
          aria-label="Volver al módulo"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12l6-6M5 12l6 6"/>
          </svg>
          Volver
        </button>
        <span style={{ width: 1, height: 24, background: "var(--c-border)" }} aria-hidden="true" />
        <div>
          <nav className="text-xs text-[var(--c-muted)] flex items-center gap-1.5" aria-label="Migas de pan">
            Mapa: <span className="text-[var(--c-text)] font-semibold">{config.titulo || "Sin título"}</span>
          </nav>
          <h1 className="text-base font-bold tracking-tight m-0">Editor de mapa</h1>
        </div>
        <div className={styles.mapbarEnd}>
          <button type="button" className={styles.iconBtn} onClick={undo} disabled={historyIdx === 0} aria-label="Deshacer" title="Deshacer (Ctrl+Z)">
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M9 14l-4-4 4-4M5 10h8a5 5 0 0 1 5 5v3"/></svg>
          </button>
          <button type="button" className={styles.iconBtn} onClick={redo} disabled={historyIdx >= history.length - 1} aria-label="Rehacer" title="Rehacer (Ctrl+Shift+Z)">
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M15 14l4-4-4-4M19 10h-8a5 5 0 0 0-5 5v3"/></svg>
          </button>
          <button type="button" className={styles.iconBtn} onClick={exportarImagen} aria-label="Exportar como imagen PNG" title="Exportar imagen">
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 3v12M8 11l4 4 4-4M5 21h14"/></svg>
          </button>
          <span aria-live="polite" className="text-xs text-[var(--c-muted)] mx-2">
            {saveStatus === "saving" ? "Guardando…" :
             saveStatus === "saved"  ? "Guardado" :
             saveStatus === "error"  ? "Error al guardar" : ""}
          </span>
          <button type="button" className={`${styles.btn} ${styles.btnPrimary}`} onClick={saveAndClose}>
            Guardar
          </button>
        </div>
      </header>

      {/* GRID 3 COL */}
      <div className={styles.mapgrid}>
        {/* COL IZQ: herramientas + capas */}
        <aside className={styles.panel} aria-label="Herramientas y capas">
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Herramientas</h2>
            <div className={`${styles.sectionBody} vb-tool-list`} role="toolbar" aria-label="Herramientas del mapa">
              {TOOLS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className="vb-tool"
                  aria-pressed={activeTool === t.id}
                  aria-label={t.label}
                  title={`${t.label} (${t.kbd})`}
                  onClick={() => setActiveTool(t.id)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d={t.iconPath}/>
                  </svg>
                  <span>{t.label}</span>
                  <span className="kbd">{t.kbd}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Mapa base</h2>
            <div className={styles.sectionBody}>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="map-titulo">Título</label>
                <input
                  id="map-titulo"
                  className={styles.fieldInput}
                  value={config.titulo ?? ""}
                  placeholder="Sin título"
                  onChange={(e) => updateConfig({ ...config, titulo: e.target.value })}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="map-modo">Modo</label>
                <select
                  id="map-modo"
                  className={styles.fieldSelect}
                  value={config.modo}
                  onChange={(e) => updateConfig({ ...config, modo: e.target.value as MapaConfig["modo"] })}
                >
                  <option value="political">Político</option>
                  <option value="physical">Físico</option>
                </select>
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="map-escala">Escala</label>
                <select
                  id="map-escala"
                  className={styles.fieldSelect}
                  value={config.escala}
                  onChange={(e) => updateConfig({ ...config, escala: e.target.value as MapaConfig["escala"] })}
                >
                  <option value="110m">110m (ligero)</option>
                  <option value="50m">50m (detallado)</option>
                </select>
              </div>
            </div>
          </div>

          <div className={`${styles.section} ${styles.sectionFlex}`} style={{ flex: 1 }}>
            <h2 className={styles.sectionTitle}>
              Capas
              <button type="button" className={styles.iconBtn} onClick={addCapa} aria-label="Agregar capa" style={{ width: 28, height: 28 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" d="M12 5v14M5 12h14"/>
                </svg>
              </button>
            </h2>
            <ul className={styles.sectionBody} aria-label="Lista de capas" style={{ listStyle: "none", margin: 0 }}>
              {capas.map((capa, index) => {
                const count = annoCountByCapa.get(capa.id) ?? 0;
                const isActive = activeCapaId === capa.id;
                return (
                  <li key={capa.id}>
                    <div className={`vb-layer${isActive ? " is-active" : ""}`}>
                      <button
                        type="button"
                        className="vb-layer-select"
                        aria-pressed={isActive}
                        aria-label={`Capa ${capa.nombre}, ${count} anotaciones${isActive ? ", activa" : ""}`}
                        onClick={() => setActiveCapaId(capa.id)}
                      >
                        <span className="sw" style={{ background: capa.color }} aria-hidden="true" />
                        <span className="vb-layer-name">{capa.nombre}</span>
                        <span className="count">{count}</span>
                      </button>
                      <button
                        type="button"
                        className={styles.iconBtn}
                        style={{ width: 26, height: 26 }}
                        onClick={() => moveCapa(index, -1)}
                        disabled={index === 0}
                        aria-label={`Subir capa ${capa.nombre}`}
                        title="Subir capa"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M6 14l6-6 6 6"/></svg>
                      </button>
                      <button
                        type="button"
                        className={styles.iconBtn}
                        style={{ width: 26, height: 26 }}
                        onClick={() => moveCapa(index, 1)}
                        disabled={index === capas.length - 1}
                        aria-label={`Bajar capa ${capa.nombre}`}
                        title="Bajar capa"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M6 10l6 6 6-6"/></svg>
                      </button>
                      <button
                        type="button"
                        className={styles.iconBtn}
                        style={{ width: 26, height: 26 }}
                        aria-pressed={capa.visible}
                        aria-label={capa.visible ? `Ocultar capa ${capa.nombre}` : `Mostrar capa ${capa.nombre}`}
                        onClick={() => toggleCapaVisible(capa.id)}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                          {capa.visible ? (
                            <>
                              <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/>
                              <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.6"/>
                            </>
                          ) : (
                            <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M3 3l18 18M6.5 6.5C3.7 8.4 2 12 2 12s3.5 7 10 7c1.6 0 3-.3 4.4-1"/>
                          )}
                        </svg>
                      </button>
                    </div>
                    {isActive && (
                      <div className={styles.field} style={{ marginTop: 4 }}>
                        <label className={styles.fieldLabel} htmlFor={`capa-ds-${capa.id}`}>
                          Dataset de la capa
                        </label>
                        <select
                          id={`capa-ds-${capa.id}`}
                          className={styles.fieldSelect}
                          value={capa.datasetId ?? ""}
                          onChange={(e) => setCapaDataset(capa.id, e.target.value || undefined)}
                        >
                          <option value="">— Sin dataset —</option>
                          {datasetList.map((d) => (
                            <option key={d.id} value={d.id}>{d.nombre}</option>
                          ))}
                        </select>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* COL CENTRO: canvas */}
        <section className={styles.canvas} aria-label="Lienzo del mapa" id="mapa-canvas" tabIndex={-1}>
          {loading ? (
            <div className="absolute inset-0 grid place-items-center text-[var(--c-muted)] text-sm">
              Cargando mapa…
            </div>
          ) : (
            <svg
              ref={svgRef}
              viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`}
              className={styles.canvasSvg}
              role="application"
              aria-label="Lienzo del mapa interactivo"
              style={{ cursor: svgCursor, touchAction: "none" }}
              onMouseMove={handleMouseMove}
              onClick={handleSvgClick}
              onDoubleClick={handleSvgDoubleClick}
              onWheel={handleWheel}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
            >
              {/* fondo */}
              <rect x={0} y={0} width={MAP_WIDTH} height={MAP_HEIGHT} style={{ fill: "var(--c-bg)" }} />

              {/* países */}
              <g style={{ color: "var(--c-muted)" }}>
                {pathGenerator && features.map((feature, idx) => {
                  const name = feature.properties?.NAME as string | undefined;
                  const isHovered = hoveredCountry === name;
                  return (
                    <path
                      key={idx}
                      d={pathGenerator(feature)}
                      fill="currentColor"
                      fillOpacity={isHovered ? 0.5 : 0.25}
                      stroke="currentColor"
                      strokeOpacity={0.6}
                      strokeWidth={0.4}
                      onMouseEnter={() => setHoveredCountry(name ?? null)}
                      onMouseLeave={() => setHoveredCountry(null)}
                    />
                  );
                })}
              </g>

              {/* anotaciones (zonas, flechas, marcadores) — reusa AnnotationLayer */}
              {project && (
                <AnnotationLayer
                  anotaciones={anotacionesParaRender}
                  project={project}
                  selectedId={selectedAnnoId}
                  onSelect={handleSelectAnnotation}
                  editable
                />
              )}

              {/* preview de área en curso */}
              {project && pendingArea && pendingArea.length > 0 && (
                <polyline
                  points={pointsToPolyline(pendingArea, project)}
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth={1.5}
                  strokeDasharray="4 2"
                  opacity={0.8}
                />
              )}
              {/* preview de origen de ruta */}
              {project && pendingRuta && (
                <circle cx={project(pendingRuta[0], pendingRuta[1])[0]} cy={project(pendingRuta[0], pendingRuta[1])[1]} r={5} fill="#f59e0b" stroke="white" strokeWidth={1.5} />
              )}
              {/* preview de origen de medición */}
              {project && pendingMedir && (
                <circle cx={project(pendingMedir[0], pendingMedir[1])[0]} cy={project(pendingMedir[0], pendingMedir[1])[1]} r={5} fill="#16a34a" stroke="white" strokeWidth={1.5} />
              )}
            </svg>
          )}

          {/* Overlays sobre el canvas */}
          <div className={styles.canvasOverlay}>
            <span className={styles.chip}>
              {config.modo === "physical" ? "Físico" : "Político"}
            </span>
            {activeTool === "area" && pendingArea && pendingArea.length >= 3 && (
              <button type="button" className={`${styles.btn} ${styles.btnPrimary}`} onClick={cerrarArea} style={{ marginLeft: 8 }}>
                Cerrar área ({pendingArea.length} pts)
              </button>
            )}
            {activeTool === "ruta" && pendingRuta && (
              <span className={styles.chip} style={{ marginLeft: 8 }}>Click para definir destino…</span>
            )}
            {activeTool === "medir" && (
              <span className={styles.chip} style={{ marginLeft: 8 }} aria-live="polite">
                {medidaKm != null ? `Distancia: ${medidaKm.toFixed(0)} km` : pendingMedir ? "Click en el destino…" : "Click en el origen…"}
              </span>
            )}
          </div>
          <div className={styles.canvasOverlayRight}>
            <div className={styles.canvasZoom} role="group" aria-label="Zoom del mapa">
              <button type="button" onClick={() => zoomBy(1 / 1.3)} aria-label="Acercar" title="Acercar">
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" d="M12 6v12M6 12h12"/></svg>
              </button>
              <span className={styles.sep} aria-hidden="true" />
              <button type="button" onClick={() => zoomBy(1.3)} aria-label="Alejar" title="Alejar">
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" d="M6 12h12"/></svg>
              </button>
              <span className={styles.sep} aria-hidden="true" />
              <button type="button" onClick={resetZoom} aria-label="Restablecer zoom" title="Restablecer zoom">
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 1 0 9-9 9 9 0 0 0-7 3.3M3 4v4h4"/></svg>
              </button>
            </div>
            <div className={styles.canvasReadout} aria-label="Coordenadas del cursor" aria-live="polite">
              {cursorCoords
                ? `lat ${cursorCoords.lat.toFixed(2)}° · lon ${cursorCoords.lon.toFixed(2)}°`
                : "lat — · lon —"}
            </div>
          </div>

          {/* Leyenda automática (capas visibles con anotaciones) */}
          {capas.some((c) => c.visible && (annoCountByCapa.get(c.id) ?? 0) > 0) && (
            <aside className={styles.canvasLegend} aria-label="Leyenda del mapa">
              <h3>Leyenda</h3>
              <ul>
                {capas
                  .filter((c) => c.visible && (annoCountByCapa.get(c.id) ?? 0) > 0)
                  .map((c) => (
                    <li key={c.id}>
                      <span className="sw" style={{ background: c.color }} aria-hidden="true" />
                      <span>{c.nombre}</span>
                    </li>
                  ))}
              </ul>
            </aside>
          )}
        </section>

        {/* COL DER: inspector */}
        <aside className={`${styles.panel} ${styles.panelInspect}`} aria-label="Inspector">
          {selectedAnno ? (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>{selectedAnno.tipo === "marcador" ? "Marcador" : selectedAnno.tipo === "zona" ? "Zona" : "Flecha"}</h2>
              <div className={styles.sectionBody}>
                <div role="tablist" aria-label="Secciones del inspector" className="flex border border-[var(--c-border)] rounded-md p-0.5 bg-[var(--c-bg)]">
                  {(["datos", "estilo", "avanzado"] as const).map((t) => (
                    <button
                      key={t}
                      role="tab"
                      type="button"
                      aria-selected={inspectorTab === t}
                      tabIndex={inspectorTab === t ? 0 : -1}
                      onClick={() => setInspectorTab(t)}
                      className={`flex-1 text-xs font-semibold px-2 py-1.5 rounded transition-colors ${
                        inspectorTab === t
                          ? "bg-[var(--c-surface)] text-[var(--c-text)]"
                          : "text-[var(--c-muted)]"
                      }`}
                    >
                      {t === "datos" ? "Datos" : t === "estilo" ? "Estilo" : "Avanzado"}
                    </button>
                  ))}
                </div>

                {inspectorTab === "datos" && (
                  <div className="space-y-3">
                    <div className={styles.field}>
                      <label className={styles.fieldLabel} htmlFor="anno-etiqueta">Etiqueta</label>
                      <input
                        id="anno-etiqueta"
                        className={styles.fieldInput}
                        value={"etiqueta" in selectedAnno ? (selectedAnno.etiqueta ?? "") : ""}
                        placeholder="Etiqueta de la anotación"
                        onChange={(e) => updateSelectedAnno({ etiqueta: e.target.value })}
                      />
                    </div>
                    <p className="text-xs text-[var(--c-muted)]">
                      {selectedAnno.tipo === "marcador"
                        ? `Posición: ${selectedAnno.lat.toFixed(2)}°, ${selectedAnno.lon.toFixed(2)}°`
                        : selectedAnno.tipo === "zona"
                        ? `${selectedAnno.puntos.length} puntos`
                        : `De ${selectedAnno.desde[1].toFixed(1)}°,${selectedAnno.desde[0].toFixed(1)}° a ${selectedAnno.hasta[1].toFixed(1)}°,${selectedAnno.hasta[0].toFixed(1)}°`}
                    </p>
                  </div>
                )}
                {inspectorTab === "estilo" && (
                  <div className="space-y-3">
                    <div className={styles.field}>
                      <span className={styles.fieldLabel}>Color</span>
                      <div className={styles.swatches} role="radiogroup" aria-label="Color de la anotación">
                        {PALETTE.map((c) => (
                          <button
                            key={c}
                            type="button"
                            className={styles.swatch}
                            style={{ background: c }}
                            aria-pressed={selectedAnno.color === c}
                            aria-label={`Color ${c}`}
                            onClick={() => updateSelectedAnno({ color: c })}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {inspectorTab === "avanzado" && (
                  <div className="space-y-3">
                    <div className={styles.field}>
                      <label className={styles.fieldLabel} htmlFor="anno-capa">Capa</label>
                      <select
                        id="anno-capa"
                        className={styles.fieldSelect}
                        value={selectedAnno.capaId ?? MAPA_CAPA_DEFAULT_ID}
                        onChange={(e) => updateSelectedAnno({ capaId: e.target.value })}
                      >
                        {capas.map((c) => (
                          <option key={c.id} value={c.id}>{c.nombre}</option>
                        ))}
                      </select>
                    </div>
                    <button
                      type="button"
                      className={styles.btn}
                      style={{ borderColor: "color-mix(in srgb, var(--c-danger) 30%, transparent)", color: "var(--c-danger)" }}
                      onClick={() => {
                        updateConfig({ ...config, anotaciones: config.anotaciones.filter((a) => a.id !== selectedAnno.id) });
                        setSelectedAnnoId(null);
                      }}
                    >
                      Eliminar anotación
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className={styles.section}>
              <div className={styles.sectionBody}>
                <div className="vb-notice">
                  <svg className="ico" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/>
                    <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" d="M12 11v6M12 7.5v.5"/>
                  </svg>
                  <div>
                    Seleccioná una anotación del lienzo para editarla, o usá una herramienta para crear una nueva.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Listado de anotaciones */}
          <div className={`${styles.section} ${styles.sectionFlex}`} style={{ flex: 1 }}>
            <h2 className={styles.sectionTitle}>
              Anotaciones <span style={{ color: "var(--c-muted)", fontWeight: 600 }}>· {config.anotaciones.length}</span>
            </h2>
            <div className={styles.sectionBody} role="list" aria-label="Lista de anotaciones">
              {config.anotaciones.length === 0 && (
                <p className="text-xs text-[var(--c-muted)] text-center py-4">Sin anotaciones aún.</p>
              )}
              {config.anotaciones.map((a) => {
                const capa = capas.find((c) => c.id === a.capaId);
                const color = a.color ?? capa?.color ?? "#1a1a1a";
                return (
                  <div
                    key={a.id}
                    role="listitem"
                    tabIndex={0}
                    aria-selected={selectedAnnoId === a.id}
                    onClick={() => setSelectedAnnoId(a.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") setSelectedAnnoId(a.id);
                    }}
                    className={`flex items-start gap-2 p-2 rounded-md cursor-pointer ${selectedAnnoId === a.id ? "bg-[var(--c-hover)]" : "hover:bg-[var(--c-hover)]"}`}
                  >
                    <span className="w-5 h-5 rounded-full flex-shrink-0" style={{ background: color }} aria-hidden="true" />
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold text-[var(--c-text)] truncate">{annoEtiqueta(a)}</div>
                      <div className="text-[11px] text-[var(--c-muted)] truncate">
                        {a.tipo === "marcador" ? `${a.lat.toFixed(2)}, ${a.lon.toFixed(2)}` :
                         a.tipo === "zona"     ? `${a.puntos.length} puntos` :
                                                 "flecha"}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      </div>

      {/* STATUS BAR */}
      <footer className="vb-status-bar" role="contentinfo">
        <span className="stat">Herramienta: <strong>{TOOLS.find((t) => t.id === activeTool)?.label}</strong></span>
        <span className="stat">Capa activa: <strong>{capas.find((c) => c.id === activeCapaId)?.nombre ?? "—"}</strong></span>
        <span className="stat">Anotaciones: <strong>{config.anotaciones.length}</strong></span>
        <span className="spacer" />
        <span className="stat">
          <kbd>V</kbd> mover · <kbd>M</kbd> marcador · <kbd>R</kbd> ruta · <kbd>A</kbd> área · <kbd>T</kbd> texto · <kbd>L</kbd> medir · <kbd>⌫</kbd> eliminar
        </span>
      </footer>
    </div>
  );
}
