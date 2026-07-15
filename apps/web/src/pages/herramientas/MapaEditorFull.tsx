// Editor de mapa completo (WO11). Crea/edita mapas con zonas, flechas y
// marcadores sobre un mapa base TopoJSON, con capas (visibilidad + color +
// dataset opcional), zoom/pan, export a imagen y reordenado de capas por
// teclado. Reusa `AnnotationLayer` (el render que ya funciona en
// `MapaStandalone`) y los datasets de la API VBLang.
//
// M8v2: componente CONTROLADO. No lee ni escribe storage: recibe la config
// por `initialConfig` y devuelve el resultado por `onSave`/`onCancel`. Quien
// lo monta decide qué hacer con el resultado (la ruta standalone persiste a
// sessionStorage — ver MapaEditorPage; ModuloEditor lo monta en un overlay y
// actualiza la herramienta en memoria).
import { useCallback, useEffect, useMemo, useRef, useState, type ChangeEvent, type MouseEvent, type PointerEvent } from "react";
import { topologyToFeatures } from "../../lib/maps/topojson-lite";
import type { CountryFeature, TopologyLike } from "../../lib/maps/topojson-lite";
import { mapaBaseUrl } from "../../lib/maps/base-url";
import {
  createMercatorPathGenerator,
  createProjector,
  createInverseProjector,
} from "../../lib/maps/svg-geo-lite";
import {
  MAPA_CAPA_DEFAULT_ID,
  type MapaConfig,
  type MapaAnotacion,
  type MapaCapa,
  type MapaDataset,
} from "../../components/modulos/standalone/types";
import { makeCapaId, migrateMapaConfig } from "../../components/modulos/standalone/mapa.migrate";
import { AnnotationLayer, pointsToPolyline } from "../../components/modulos/standalone/AnnotationLayer";
import { datasetDetailToMapaDataset, datasetTieneCoordenadas } from "../../components/modulos/standalone/mapa.datasets";
import { GuardarComoMaterial } from "../../components/materiales/GuardarComoMaterial";
import { listDatasets, getDataset } from "../../domain/vblang/datasetApi";
import type { DatasetListItem } from "../../domain/vblang/dataset.types";
import { useMapEditorShortcuts } from "./mapa-editor-shortcuts";
import { computeHint } from "./mapa-editor-hint";
import {
  ESTILO_DEFAULTS,
  GROSOR_MAX,
  GROSOR_MIN,
  MARCADOR_TAMANO_MAX,
  MARCADOR_TAMANO_MIN,
  OPACIDAD_MAX,
  OPACIDAD_MIN,
  OPACIDAD_STEP,
  TEXTO_TAMANO_MAX,
  TEXTO_TAMANO_MIN,
} from "./mapa-editor-style";
import { GeoJsonLayer } from "../../lib/maps/GeoJsonLayer";
import { validarGeoJsonText } from "../../lib/maps/geojson-import";
import { useViewBoxZoom } from "../../lib/maps/useViewBoxZoom";
import { escalaPorZoom } from "../../lib/maps/escala-por-zoom";
import { buscarLugares, type GeonameResultado } from "../../lib/maps/geonamesApi";
import { listPaisesConProvincias, fetchProvinciasTopo, type ProvinciaCatalogoItem } from "../../lib/maps/provinciasApi";
import styles from "./MapaEditorFull.module.css";
import { useI18n } from "../../i18n/I18nContext";

const MAP_WIDTH = 1000;
const MAP_HEIGHT = 620;
const MIN_VB = 80; // límite de zoom-in (ancho mínimo del viewBox)

type Tool = "select" | "marcador" | "ruta" | "area" | "texto" | "medir";

const TOOLS: { id: Tool; labelKey: string; kbd: string; iconPath: string }[] = [
  { id: "select",   labelKey: "mapaEditorFull.mover2",    kbd: "V", iconPath: "M5 3l5 16 2.5-6.5L19 10z" },
  { id: "marcador", labelKey: "mapaEditorFull.marcador2", kbd: "M", iconPath: "M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" },
  { id: "ruta",     labelKey: "mapaEditorFull.ruta2",     kbd: "R", iconPath: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8 16c2-4 6-8 10-10" },
  { id: "area",     labelKey: "mapaEditorFull.area2",     kbd: "A", iconPath: "M12 3l8 5-3 11H7L4 8z" },
  { id: "texto",    labelKey: "mapaEditorFull.texto2",    kbd: "T", iconPath: "M5 5h14M12 5v14M9 19h6" },
  { id: "medir",    labelKey: "mapaEditorFull.medir2",    kbd: "L", iconPath: "M3 17l14-14 4 4-14 14z" },
];

const PALETTE = [
  "#1a1a1a", "#c47a35", "#5a8ec2", "#2f8c4f", "#9a2a2a", "#7a3ec8", "#d6b673",
];

/**
 * Nombres legibles para cada color de la paleta (el prototipo etiqueta los
 * chips «Negro», «Naranja», … en vez del hex). Evita jerga técnica en los
 * `aria-label` de los swatches (a11y + spec: sin ids/hex internos en la UI).
 */
const COLOR_NOMBRES: Record<string, string> = {
  "#1a1a1a": "Negro",
  "#c47a35": "Naranja",
  "#5a8ec2": "Azul",
  "#2f8c4f": "Verde",
  "#9a2a2a": "Rojo",
  "#7a3ec8": "Violeta",
  "#d6b673": "Arena",
};

/** Id corto para una anotación nueva. */
function genAnnoId(): string {
  return `a-${Math.random().toString(36).slice(2, 10)}`;
}

/** Redondea a un valor "lindo" (1/2/5 × 10ⁿ) ≤ x, para la barra de escala. */
function niceNumber(x: number): number {
  if (x <= 0) return 0;
  const exp = Math.floor(Math.log10(x));
  const base = 10 ** exp;
  const frac = x / base;
  const niceFrac = frac >= 5 ? 5 : frac >= 2 ? 2 : 1;
  return niceFrac * base;
}

/**
 * Selector de color de la paleta. Usado en el tab "estilo" del inspector.
 * Local al editor — no se exporta.
 */
function ColorPicker({ value, onChange }: { value: string; onChange: (c: string) => void }) {
  const { t } = useI18n();
  return (
    <div className={styles.field}>
      <span className={styles.fieldLabel}>{t("mapaEditorFull.color")}</span>
      <div className={styles.swatches} role="radiogroup" aria-label={t("mapaEditorFull.colorDeLaAnotacion")}>
        {PALETTE.map((c) => (
          <button
            key={c}
            type="button"
            className={styles.swatch}
            style={{ background: c }}
            aria-pressed={value === c}
            aria-label={`Color ${COLOR_NOMBRES[c] ?? c}`}
            onClick={() => onChange(c)}
          />
        ))}
      </div>
    </div>
  );
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

export interface MapaEditorFullProps {
  /** Config con la que arranca el editor (se pasa por migrateMapaConfig al montar). */
  initialConfig: MapaConfig;
  /** Llamado al tocar «Guardar» con la config vigente. */
  onSave: (config: MapaConfig) => void;
  /** Llamado al tocar «Volver» (tras confirmar el descarte si hubo cambios). */
  onCancel: () => void;
  // PLAN-G §1 (item 25) — si el mapa se abrió desde un material guardado,
  // permite que "Guardar como material" cree una versión nueva en vez de
  // un material nuevo.
  materialId?: string | null;
  // PLAN-L — sólo lo setea MapaEditorPage (ruta pública standalone) cuando
  // no hay sesión. ModuloEditor nunca lo pasa: el docente que edita un
  // mapa embebido en un módulo siempre tiene sesión y ve los botones de
  // guardado de siempre.
  demoMode?: boolean;
  // PLAN-M — invocado al pedir registrarse desde el modo demo, con la config
  // vigente, para que MapaEditorPage guarde el borrador (localStorage) antes
  // de navegar a /register. Sólo tiene sentido junto con demoMode.
  onRequestRegister?: (config: MapaConfig) => void;
  // PLAN-M — presente cuando el mapa se restauró desde un borrador de demo
  // guardado antes de registrarse: banner "Recuperamos tu mapa", abre directo
  // "Guardar como material", y `onSaved` limpia el borrador.
  draftRecovery?: { onSaved: () => void };
}

export default function MapaEditorFull({ initialConfig, onSave, onCancel, materialId, demoMode = false, onRequestRegister, draftRecovery }: MapaEditorFullProps) {
  const { t } = useI18n();
  // ─── Config inicial (migrada) ───────────────────────────────────
  const [config, setConfig] = useState<MapaConfig>(() => migrateMapaConfig(initialConfig));
  const [demoBannerDismissed, setDemoBannerDismissed] = useState(false);
  const [draftBannerDismissed, setDraftBannerDismissed] = useState(false);

  const [activeTool, setActiveTool] = useState<Tool>("select");
  const [activeCapaId, setActiveCapaId] = useState<string>(
    config.capas?.[0]?.id ?? MAPA_CAPA_DEFAULT_ID,
  );
  const [selectedAnnoId, setSelectedAnnoId] = useState<string | null>(null);
  const [inspectorTab, setInspectorTab] = useState<"datos" | "estilo" | "avanzado">("datos");
  const [cursorCoords, setCursorCoords] = useState<{ lat: number; lon: number } | null>(null);
  // Barra de escala: km que representa `px` píxeles en el encuadre actual.
  const [scale, setScale] = useState<{ km: number; px: number } | null>(null);
  const [announce, setAnnounce] = useState("");
  const [geoJsonError, setGeoJsonError] = useState<string | null>(null);
  const [geoJsonWarning, setGeoJsonWarning] = useState<string | null>(null);
  const geoJsonInputRef = useRef<HTMLInputElement>(null);

  // Estado de creación en curso (zona/ruta multipunto/medición).
  const [pendingArea, setPendingArea] = useState<[number, number][] | null>(null);
  const [pendingRuta, setPendingRuta] = useState<[number, number][] | null>(null);
  const [pendingMedir, setPendingMedir] = useState<[number, number] | null>(null);
  // Cuando se completa una medición (2 clicks) la distancia queda "fijada" en
  // pantalla hasta que se cambie de herramienta o se cancele con Esc. `null` =
  // no hay medición activa.
  const [medidaKm, setMedidaKm] = useState<{ desde: [number, number]; hasta: [number, number]; km: number } | null>(null);

  // Undo/redo simple basado en snapshots
  const [history, setHistory] = useState<MapaConfig[]>([config]);
  const [historyIdx, setHistoryIdx] = useState(0);

  // ─── Mapa base ──────────────────────────────────────────────────
  const [features, setFeatures] = useState<CountryFeature[]>([]);
  const [mapStatus, setMapStatus] = useState<"idle" | "loading" | "ready" | "error">("loading");
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  // Contador que se incrementa para re-disparar el fetch desde el botón «Reintentar».
  const [retryNonce, setRetryNonce] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);

  // ─── Zoom / pan ─────────────────────────────────────────────────
  // M7: extraído a useViewBoxZoom.
  // ITEM-45.c — antes el pan sólo se activaba con la herramienta "Mover"
  // (`active: activeTool === "select"`): para desplazar el lienzo mientras
  // se dibujaba una ruta/área multipunto había que cambiar de herramienta,
  // lo que CANCELABA los puntos ya puestos (el useEffect de "cambiar de
  // herramienta" limpia `pendingArea`/`pendingRuta`/`pendingMedir`). Ahora
  // el pan está activo siempre; para no confundir un pan con un click de
  // creación se usa el mismo patrón que `MarcarMapaRenderer.tsx`
  // (`wasPanRef` + umbral de movimiento) — ver `handlePointerDownCombined`/
  // `handlePointerUpCombined` más abajo.
  const {
    viewBox,
    setViewBox,
    handlePointerDown: handlePanDown,
    handlePointerMove: handlePanMove,
    handlePointerUp: handlePanUp,
    zoomIn,
    zoomOut,
    reset: resetZoom,
  } = useViewBoxZoom({
    width: MAP_WIDTH,
    height: MAP_HEIGHT,
    minVb: MIN_VB,
    svgRef,
    active: true,
  });

  // ITEM-45.c — distingue "arrastrar para pan" de "click para crear un
  // punto/marcador": si el puntero se movió más de `PAN_THRESHOLD_PX` entre
  // pointerdown y pointerup, el click subsiguiente se ignora (no agrega
  // nada) — igual que `MarcarMapaRenderer.tsx`.
  const PAN_THRESHOLD_PX = 4;
  const downAtRef = useRef<{ x: number; y: number } | null>(null);
  const wasPanRef = useRef(false);

  const handlePointerDownCombined = useCallback((e: PointerEvent<SVGSVGElement>) => {
    downAtRef.current = { x: e.clientX, y: e.clientY };
    wasPanRef.current = false;
    handlePanDown(e);
  }, [handlePanDown]);

  const handlePointerUpCombined = useCallback((e: PointerEvent<SVGSVGElement>) => {
    const d = downAtRef.current;
    downAtRef.current = null;
    if (d) {
      const dx = e.clientX - d.x;
      const dy = e.clientY - d.y;
      if (Math.hypot(dx, dy) > PAN_THRESHOLD_PX) wasPanRef.current = true;
    }
    handlePanUp(e);
  }, [handlePanUp]);

  // ITEM-45.a — factor para neutralizar el crecimiento de marcadores/rutas/
  // áreas/textos al acercar (ver escala-por-zoom.ts). 1 = sin zoom.
  const zoom = escalaPorZoom(viewBox.w, MAP_WIDTH);

  // (zoomBy, handleWheel, useEffect nativo de wheel, handlePointer*: borrados
  // — viven ahora dentro del hook.)

  useEffect(() => {
    let cancelled = false;
    setMapStatus("loading");
    const url = mapaBaseUrl(config.modo, config.escala);
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((topo: TopologyLike) => {
        if (cancelled) return;
        setFeatures(topologyToFeatures(topo));
        setMapStatus("ready");
      })
      .catch(() => {
        if (cancelled) return;
        setMapStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, [config.modo, config.escala, retryNonce]);

  const handleRetry = useCallback(() => {
    setRetryNonce((n) => n + 1);
  }, []);

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

  // ─── Buscar lugar (ITEM-45.b) ────────────────────────────────────
  // Antes el docente tenía que hacer click "a ojo" sobre un mapamundi de
  // baja resolución para ubicar un país/ciudad. Esto busca por nombre
  // (incluye nombres alternativos/traducidos) contra `geonames_index.sqlite`
  // — datos que ya existían pero ningún endpoint consultaba — y al elegir
  // un resultado centra el mapa ahí y agrega un marcador.
  const [lugarQuery, setLugarQuery] = useState("");
  const [lugarResultados, setLugarResultados] = useState<GeonameResultado[]>([]);
  const [lugarLoading, setLugarLoading] = useState(false);

  useEffect(() => {
    const q = lugarQuery.trim();
    if (q.length < 2) {
      setLugarResultados([]);
      setLugarLoading(false);
      return;
    }
    setLugarLoading(true);
    const handle = setTimeout(() => {
      buscarLugares(q)
        .then((items) => setLugarResultados(items))
        .catch(() => setLugarResultados([]))
        .finally(() => setLugarLoading(false));
    }, 250);
    return () => clearTimeout(handle);
  }, [lugarQuery]);

  // ─── División provincial (PLAN-N §3) ─────────────────────────────
  // El dato ya existía (`GET /api/maps/provincias/:pais`, 251 países,
  // servido para el camino de cuestionario de MarcarMapaRenderer) pero el
  // editor libre no ofrecía ninguna capa con esta división. Reusa el mismo
  // mecanismo de "capa GeoJSON" que ya soporta importar un archivo (M5):
  // se arma una MapaCapa con `geojson` en vez de subir un archivo.
  const [provinciasCatalogo, setProvinciasCatalogo] = useState<ProvinciaCatalogoItem[]>([]);
  const [provinciasPais, setProvinciasPais] = useState("");
  const [provinciasLoading, setProvinciasLoading] = useState(false);
  const [provinciasError, setProvinciasError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    listPaisesConProvincias()
      .then((items) => {
        if (cancelled) return;
        setProvinciasCatalogo([...items].sort((a, b) => a.nombre.localeCompare(b.nombre)));
      })
      .catch(() => {
        if (!cancelled) setProvinciasCatalogo([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);
  // agregarCapaProvincias vive junto al resto del CRUD de capas (usa
  // updateConfig/config.capas, declarados más abajo) — ver esa sección.

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

  // ITEM-45.b — centra el lienzo en el lugar elegido (ciudad = zoom más
  // cerrado que país) y agrega un marcador con su nombre.
  const irALugar = useCallback((lugar: GeonameResultado) => {
    if (!project) return;
    const [px, py] = project(lugar.lon, lugar.lat);
    const w = lugar.tipo === "ciudad" ? 120 : 300;
    const h = w * (MAP_HEIGHT / MAP_WIDTH);
    const nx = Math.min(MAP_WIDTH - w, Math.max(0, px - w / 2));
    const ny = Math.min(MAP_HEIGHT - h, Math.max(0, py - h / 2));
    setViewBox({ x: nx, y: ny, w, h });
    addAnotacion({ id: genAnnoId(), tipo: "marcador", lat: lugar.lat, lon: lugar.lon, etiqueta: lugar.nombre });
    setLugarQuery("");
    setLugarResultados([]);
    setAnnounce(`Mapa centrado en ${lugar.nombre}. Se agregó un marcador.`);
  }, [project, addAnotacion, setViewBox]);

  // Helpers de cierre por herramienta — idempotentes: si no hay nada que
  // cerrar, no hacen nada (así los podemos llamar desde múltiples handlers).
  const cerrarArea = useCallback(() => {
    if (!pendingArea || pendingArea.length < 3) return;
    addAnotacion({ id: genAnnoId(), tipo: "zona", puntos: pendingArea, etiqueta: "" });
    setPendingArea(null);
  }, [pendingArea, addAnotacion]);

  const cerrarRuta = useCallback(() => {
    if (!pendingRuta || pendingRuta.length < 2) return;
    addAnotacion({ id: genAnnoId(), tipo: "ruta", puntos: pendingRuta, flechaFinal: true, etiqueta: "" });
    setPendingRuta(null);
  }, [pendingRuta, addAnotacion]);

  const handleSvgClick = useCallback((e: MouseEvent<SVGSVGElement>) => {
    // ITEM-45.c — si el gesto fue un pan (se movió más que el umbral entre
    // pointerdown y pointerup), no crear nada: es un arrastre, no un click.
    if (wasPanRef.current) {
      wasPanRef.current = false;
      return;
    }
    const coords = clientToLonLat(e.clientX, e.clientY);
    if (!coords) return;
    const [lon, lat] = coords;

    switch (activeTool) {
      case "marcador":
        addAnotacion({ id: genAnnoId(), tipo: "marcador", lat, lon, etiqueta: "" });
        break;
      case "texto": {
        // Crea la anotación y la selecciona; el inspector permite tipear el
        // contenido. Si el usuario lo deja vacío, se descarta al salir del
        // inspector (ver `discardEmptyText`).
        addAnotacion({ id: genAnnoId(), tipo: "texto", lat, lon, contenido: "" });
        break;
      }
      case "ruta": {
        if (pendingArea) {
          // Caso defensivo: si el usuario cambia de idea a mitad de un área,
          // descartamos el área antes de empezar la ruta.
          setPendingArea(null);
        }
        setPendingRuta((prev) => [...(prev ?? []), [lon, lat]]);
        break;
      }
      case "area": {
        setPendingArea((prev): [number, number][] | null => {
          const base = (prev ?? []) as [number, number][];
          const next: [number, number][] = [...base, [lon, lat]];
          // Click sobre el primer punto con 3+ puntos → cerrar el área.
          if (next.length >= 4) {
            const [fLon, fLat] = next[0];
            const tolDeg = 0.5;
            if (Math.abs(lon - fLon) < tolDeg && Math.abs(lat - fLat) < tolDeg) {
              // Programar el cierre en el próximo tick para no mutar el array
              // mientras lo estamos construyendo.
              queueMicrotask(() => {
                addAnotacion({ id: genAnnoId(), tipo: "zona", puntos: next, etiqueta: "" });
              });
              return null;
            }
          }
          return next;
        });
        break;
      }
      case "medir": {
        if (!pendingMedir) {
          setPendingMedir([lon, lat]);
          setMedidaKm(null);
        } else {
          const km = haversineKm(pendingMedir, [lon, lat]);
          setMedidaKm({ desde: pendingMedir, hasta: [lon, lat], km });
          setPendingMedir(null);
        }
        break;
      }
      case "select":
      default:
        break;
    }
  }, [activeTool, pendingRuta, pendingMedir, pendingArea, clientToLonLat, addAnotacion]);

  const handleSvgDoubleClick = useCallback((e: MouseEvent<SVGSVGElement>) => {
    if (activeTool === "area" && pendingArea && pendingArea.length >= 3) {
      e.preventDefault();
      cerrarArea();
      return;
    }
    if (activeTool === "ruta" && pendingRuta && pendingRuta.length >= 2) {
      e.preventDefault();
      cerrarRuta();
      return;
    }
  }, [activeTool, pendingArea, pendingRuta, cerrarArea, cerrarRuta]);

  // Descarta la anotación de texto seleccionada si su `contenido` quedó vacío
  // después de la edición. Se invoca cuando el inspector pierde el foco o se
  // navega fuera — la lógica fina la hace el inspector (al perder foco o al
  // seleccionar otra anotación).
  const discardEmptyText = useCallback((id: string) => {
    const a = config.anotaciones.find((x) => x.id === id);
    if (!a) return;
    if (a.tipo === "texto" && a.contenido.trim() === "") {
      updateConfig({
        ...config,
        anotaciones: config.anotaciones.filter((x) => x.id !== id),
      });
      if (selectedAnnoId === id) setSelectedAnnoId(null);
    }
  }, [config, selectedAnnoId, updateConfig]);

  // "Fijar como anotación" la medición activa — convierte la línea invisible
  // en una `ruta` con etiqueta "{N} km".
  const fijarMedicionComoAnotacion = useCallback(() => {
    if (!medidaKm) return;
    addAnotacion({
      id: genAnnoId(),
      tipo: "ruta",
      puntos: [medidaKm.desde, medidaKm.hasta],
      flechaFinal: false,
      etiqueta: `${Math.round(medidaKm.km).toLocaleString("es-AR")} km`,
    });
    setMedidaKm(null);
  }, [medidaKm, addAnotacion]);

  // Cancelar TODO lo pendiente (universal, llamado por Esc).
  const cancelarPendientes = useCallback(() => {
    // Si la anotación de texto seleccionada quedó vacía, también la descartamos.
    if (selectedAnnoId) discardEmptyText(selectedAnnoId);
    setPendingArea(null);
    setPendingRuta(null);
    setPendingMedir(null);
    setMedidaKm(null);
  }, [selectedAnnoId, discardEmptyText]);

  // ─── Hint contextual por herramienta ────────────────────────────
  // Texto corto que aparece sobre el lienzo y se anuncia por aria-live.
  const hint = computeHint({
    tool: activeTool,
    pendingAreaLen: pendingArea?.length ?? 0,
    pendingRutaLen: pendingRuta?.length ?? 0,
    pendingMedir: !!pendingMedir,
    medidaFijadaKm: medidaKm?.km ?? null,
  });
  // Sincronizar el hint con la región aria-live.
  useEffect(() => {
    if (hint.aria) setAnnounce(hint.aria);
  }, [hint.aria]);

  // Al cambiar de selección (o deseleccionar), descartamos la anotación de
  // texto anterior si quedó con `contenido` vacío.
  const prevSelectedAnnoIdRef = useRef<string | null>(null);
  useEffect(() => {
    const prev = prevSelectedAnnoIdRef.current;
    if (prev && prev !== selectedAnnoId) {
      discardEmptyText(prev);
    }
    prevSelectedAnnoIdRef.current = selectedAnnoId;
  }, [selectedAnnoId, discardEmptyText]);

  // Cancelar creación en curso al cambiar de herramienta.
  useEffect(() => {
    setPendingArea(null);
    setPendingRuta(null);
    setPendingMedir(null);
  }, [activeTool]);

  // ─── Zoom / pan ─────────────────────────────────────────────────
  // M7: la lógica de zoom/pan vive en useViewBoxZoom (lib/maps). El editor
  // expone `zoomIn`/`zoomOut`/`resetZoom`/`handlePanDown/Move/Up` a partir
  // de ese hook (ver bloque «Zoom / pan» más arriba). El listener nativo
  // de `wheel` también lo monta el hook.

  // ─── Barra de escala (km reales según proyección + encuadre) ─────
  // Mide los km que abarca el ancho del lienzo en el centro vertical del
  // encuadre y deriva una barra de ~110px con un valor redondeado "lindo".
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || !inverseProject) {
      setScale(null);
      return;
    }
    const compute = () => {
      const rect = svg.getBoundingClientRect();
      if (!rect.width) return;
      const midY = viewBox.y + viewBox.h / 2;
      const a = inverseProject(viewBox.x, midY);
      const b = inverseProject(viewBox.x + viewBox.w, midY);
      if (!a || !b) {
        setScale(null);
        return;
      }
      const totalKm = haversineKm([a[0], a[1]], [b[0], b[1]]);
      if (!Number.isFinite(totalKm) || totalKm <= 0) {
        setScale(null);
        return;
      }
      const kmPerPx = totalKm / rect.width;
      const km = niceNumber(kmPerPx * 110);
      if (km <= 0) {
        setScale(null);
        return;
      }
      setScale({ km, px: km / kmPerPx });
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [viewBox, inverseProject]);

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

  /**
   * Importa un archivo GeoJSON seleccionado por el usuario, lo valida, y
   * agrega una nueva capa con los datos embebidos.
   */
  const importarGeoJson = useCallback((file: File) => {
    setGeoJsonError(null);
    setGeoJsonWarning(null);
    if (file.size > 2 * 1024 * 1024) {
      const mb = (file.size / (1024 * 1024)).toFixed(1);
      setGeoJsonError(`El archivo es demasiado grande (${mb} MB). El máximo permitido es 2 MB.`);
      return;
    }
    const reader = new FileReader();
    reader.onerror = () => setGeoJsonError("No se pudo leer el archivo.");
    reader.onload = () => {
      const text = String(reader.result ?? "");
      const r = validarGeoJsonText(text, file.size);
      if (!r.ok) {
        setGeoJsonError(r.error);
        return;
      }
      const newCapa: MapaCapa = {
        id: makeCapaId(),
        nombre: file.name.replace(/\.(geo)?json$/i, "") || "GeoJSON",
        color: PALETTE[capas.length % PALETTE.length],
        visible: true,
        geojson: { nombre: file.name, data: r.data },
      };
      updateConfig({ ...config, capas: [...capas, newCapa] });
      setActiveCapaId(newCapa.id);
      setGeoJsonWarning(r.advertencias[0] ?? null);
      setAnnounce(`Capa ${newCapa.nombre} importada con ${r.data.features.length} feature(s).`);
    };
    reader.readAsText(file);
  }, [capas, config, updateConfig]);

  const onGeoJsonFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) importarGeoJson(file);
    // Reset para permitir re-importar el mismo archivo.
    e.target.value = "";
  }, [importarGeoJson]);

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

  const eliminarCapa = useCallback((capaId: string) => {
    if (capas.length <= 1) return;
    // Anotaciones de la capa eliminada migran a la primera capa restante
    // (o a la default si no hay más). Mantiene la coherencia del modelo.
    const restantes = capas.filter((c) => c.id !== capaId);
    const fallbackId = restantes[0]?.id ?? MAPA_CAPA_DEFAULT_ID;
    const anotaciones = config.anotaciones.map((a) =>
      a.capaId === capaId ? { ...a, capaId: fallbackId } : a,
    );
    updateConfig({ ...config, capas: restantes, anotaciones });
    if (activeCapaId === capaId) setActiveCapaId(fallbackId);
  }, [capas, config, activeCapaId, updateConfig]);

  // PLAN-N §3 — capa "División provincial de [país]": mismo mecanismo que
  // importarGeoJson (una MapaCapa con `geojson`), sólo que el TopoJSON viene
  // de la API de provincias en vez de un archivo subido.
  const agregarCapaProvincias = useCallback(async () => {
    const pais = provinciasCatalogo.find((p) => p.pais === provinciasPais);
    if (!pais) return;
    setProvinciasLoading(true);
    setProvinciasError(null);
    try {
      const topo = await fetchProvinciasTopo(pais.pais);
      const features = topologyToFeatures(topo);
      const newCapa: MapaCapa = {
        id: makeCapaId(),
        nombre: `Provincias de ${pais.nombre}`,
        color: PALETTE[capas.length % PALETTE.length],
        visible: true,
        geojson: {
          nombre: pais.nombre,
          data: {
            type: "FeatureCollection",
            features: features.map((f) => ({ type: "Feature", geometry: f.geometry, properties: f.properties })),
          },
        },
      };
      updateConfig({ ...config, capas: [...capas, newCapa] });
      setActiveCapaId(newCapa.id);
      setAnnounce(`Capa Provincias de ${pais.nombre} agregada con ${features.length} división(es).`);
    } catch {
      setProvinciasError(`No se pudo cargar la división provincial de ${pais.nombre}.`);
    } finally {
      setProvinciasLoading(false);
    }
  }, [provinciasCatalogo, provinciasPais, capas, config, updateConfig]);

  // ─── Atajos de teclado ──────────────────────────────────────────
  // Como los handlers de Esc/Enter dependen de estado mutable (que cambia en
  // cada render) los mantenemos en refs para que el `useEffect` del hook de
  // shortcuts no re-suscriba el listener en cada render.
  const cerrarAreaRef = useRef(cerrarArea);
  const cerrarRutaRef = useRef(cerrarRuta);
  const fijarMedicionRef = useRef(fijarMedicionComoAnotacion);
  const cancelarPendientesRef = useRef(cancelarPendientes);
  useEffect(() => { cerrarAreaRef.current = cerrarArea; }, [cerrarArea]);
  useEffect(() => { cerrarRutaRef.current = cerrarRuta; }, [cerrarRuta]);
  useEffect(() => { fijarMedicionRef.current = fijarMedicionComoAnotacion; }, [fijarMedicionComoAnotacion]);
  useEffect(() => { cancelarPendientesRef.current = cancelarPendientes; }, [cancelarPendientes]);

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
    "enter": () => {
      if (activeTool === "area" && pendingArea && pendingArea.length >= 3) {
        cerrarAreaRef.current();
      } else if (activeTool === "ruta" && pendingRuta && pendingRuta.length >= 2) {
        cerrarRutaRef.current();
      } else if (activeTool === "medir" && medidaKm) {
        fijarMedicionRef.current();
      }
    },
    "escape": () => {
      // Si hay algo pendiente (área, ruta, medición, o texto seleccionado
      // vacío), lo cancelamos. Si no, deseleccionamos la anotación.
      const hayPendientes =
        (pendingArea && pendingArea.length > 0) ||
        (pendingRuta && pendingRuta.length > 0) ||
        pendingMedir ||
        medidaKm;
      if (hayPendientes) {
        cancelarPendientesRef.current();
      } else {
        setSelectedAnnoId(null);
      }
    },
  });

  // ─── Guardar / cancelar (el cierre lo decide quien monta el editor) ─
  const handleSave = useCallback(() => {
    onSave(config);
  }, [config, onSave]);

  const handleCancel = useCallback(() => {
    // `history[0]` es el snapshot inicial (la config migrada del mount):
    // comparar contra él detecta cambios sin guardar.
    const dirty = JSON.stringify(config) !== JSON.stringify(history[0]);
    if (dirty && !window.confirm(t("mapaEditorFull.descartarLosCambiosDelMapa"))) return;
    onCancel();
  }, [config, history, onCancel]);

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
      <a href="#mapa-canvas" className="skip-link">{t("mapaEditorFull.saltarAlLienzo")}</a>

      {/* Región de anuncios para lectores de pantalla. */}
      <div role="status" aria-live="polite" className="sr-only">{announce}</div>

      {/* PLAN-L — banner discreto y descartable del modo demo (guest). */}
      {demoMode && !demoBannerDismissed && (
        <div
          role="status"
          className="flex items-center justify-between gap-3 px-4 py-2 text-sm"
          style={{
            background: "color-mix(in srgb, var(--c-warning) 12%, var(--c-surface))",
            borderBottom: "1px solid var(--c-border)",
            color: "var(--c-text)",
          }}
        >
          <span>{t("mapaEditorFull.estasProbandoElEditorTu")}</span>
          <button
            type="button"
            onClick={() => setDemoBannerDismissed(true)}
            aria-label={t("mapaEditorFull.descartarAviso")}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--c-muted)", fontSize: "1rem", lineHeight: 1, padding: 0 }}
          >
            ✕
          </button>
        </div>
      )}

      {/* PLAN-M — banner discreto y descartable al restaurar un borrador de demo. */}
      {draftRecovery && !draftBannerDismissed && (
        <div
          role="status"
          className="flex items-center justify-between gap-3 px-4 py-2 text-sm"
          style={{
            background: "color-mix(in srgb, var(--c-success) 12%, var(--c-surface))",
            borderBottom: "1px solid var(--c-border)",
            color: "var(--c-text)",
          }}
        >
          <span>{t("mapaEditorFull.recuperamosTuMapaGuardaloPara")}</span>
          <button
            type="button"
            onClick={() => setDraftBannerDismissed(true)}
            aria-label={t("mapaEditorFull.descartarAvisoDeRecuperacion")}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--c-muted)", fontSize: "1rem", lineHeight: 1, padding: 0 }}
          >
            ✕
          </button>
        </div>
      )}

      {/* HEADER */}
      <header className={styles.mapbar} role="banner">
        <button
          type="button"
          className={`${styles.btn} ${styles.btnGhost}`}
          onClick={handleCancel}
          aria-label={t("mapaEditorFull.volverSinGuardar")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12l6-6M5 12l6 6"/>
          </svg>{t("comun.volver")}</button>
        <span style={{ width: 1, height: 24, background: "var(--c-border)" }} aria-hidden="true" />
        <div>
          <nav className="text-xs text-[var(--c-muted)] flex items-center gap-1.5" aria-label={t("plantillaEditor.migasDePan")}>{t("mapaEditorFull.mapa")}<span className="text-[var(--c-text)] font-semibold">{config.titulo || "Sin título"}</span>
          </nav>
          <h1 className="text-base font-bold tracking-tight m-0">{t("moduloEditor.editorDeMapa")}</h1>
        </div>
        <div className={styles.mapbarEnd}>
          <button type="button" className={styles.iconBtn} onClick={undo} disabled={historyIdx === 0} aria-label={t("plantillaEditor.deshacer")} title={t("mapaEditorFull.deshacerCtrlZ")}>
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M9 14l-4-4 4-4M5 10h8a5 5 0 0 1 5 5v3"/></svg>
          </button>
          <button type="button" className={styles.iconBtn} onClick={redo} disabled={historyIdx >= history.length - 1} aria-label={t("plantillaEditor.rehacer")} title={t("mapaEditorFull.rehacerCtrlShiftZ")}>
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M15 14l4-4-4-4M19 10h-8a5 5 0 0 0-5 5v3"/></svg>
          </button>
          <button type="button" className={styles.iconBtn} onClick={exportarImagen} aria-label={t("mapaEditorFull.exportarComoImagenPng")} title={t("mapaEditorFull.exportarImagen")}>
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 3v12M8 11l4 4 4-4M5 21h14"/></svg>
          </button>
          {demoMode ? (
            <button
              type="button"
              className={`${styles.btn} ${styles.btnPrimary}`}
              onClick={() => onRequestRegister?.(config)}
            >{t("mapaEditorFull.registrateParaGuardarTuMapa")}</button>
          ) : (
            <>
              <GuardarComoMaterial
                tipo="mapa"
                defaultTitulo={config.titulo}
                materialId={materialId}
                getContenido={() => config}
                autoOpen={!!draftRecovery}
                onSaved={draftRecovery?.onSaved}
              />
              <button
                type="button"
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={handleSave}
                title={t("mapaEditorFull.guardaUnBorradorEnEste")}
              >{t("mapaEditorFull.guardar")}</button>
            </>
          )}
        </div>
      </header>

      {/* GRID 3 COL */}
      <div className={styles.mapgrid}>
        {/* COL IZQ: herramientas + capas */}
        <aside className={styles.panel} aria-label={t("mapaEditorFull.herramientasYCapas")}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>{t("moduloEditor.herramientas")}</h2>
            <div className={`${styles.sectionBody} vb-tool-list`} role="toolbar" aria-label={t("mapaEditorFull.herramientasDelMapa")}>
              {TOOLS.map((tool) => (
                <button
                  key={tool.id}
                  type="button"
                  className="vb-tool"
                  aria-pressed={activeTool === tool.id}
                  aria-label={t(tool.labelKey)}
                  title={`${t(tool.labelKey)} (${tool.kbd})`}
                  onClick={() => setActiveTool(tool.id)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d={tool.iconPath}/>
                  </svg>
                  <span>{t(tool.labelKey)}</span>
                  <span className="kbd">{tool.kbd}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>{t("mapaEditorFull.mapaBase")}</h2>
            <div className={styles.sectionBody}>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="map-titulo">{t("comun.titulo")}</label>
                <input
                  id="map-titulo"
                  className={styles.fieldInput}
                  value={config.titulo ?? ""}
                  placeholder={t("mapaEditorFull.sinTitulo")}
                  onChange={(e) => updateConfig({ ...config, titulo: e.target.value })}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="map-modo">{t("common.modo")}</label>
                <select
                  id="map-modo"
                  className={styles.fieldSelect}
                  value={config.modo}
                  onChange={(e) => updateConfig({ ...config, modo: e.target.value as MapaConfig["modo"] })}
                >
                  <option value="political">{t("mapaEditorFull.politico")}</option>
                  <option value="physical">{t("mapaEditorFull.fisico")}</option>
                </select>
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="map-escala">{t("mapaEditorFull.escala")}</label>
                <select
                  id="map-escala"
                  className={styles.fieldSelect}
                  value={config.escala}
                  onChange={(e) => updateConfig({ ...config, escala: e.target.value as MapaConfig["escala"] })}
                >
                  <option value="110m">{t("mapaEditorFull.110mLigero")}</option>
                  <option value="50m">{t("mapaEditorFull.50mDetallado")}</option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>{t("mapaEditorFull.buscarLugar")}</h2>
            <div className={styles.sectionBody}>
              <div className={styles.field} style={{ position: "relative" }}>
                <label className={styles.fieldLabel} htmlFor="map-buscar-lugar">{t("mapaEditorFull.paisOCiudad")}</label>
                <input
                  id="map-buscar-lugar"
                  className={styles.fieldInput}
                  value={lugarQuery}
                  placeholder={t("mapaEditorFull.ejMogadiscioAlemania")}
                  onChange={(e) => setLugarQuery(e.target.value)}
                  autoComplete="off"
                  data-testid="buscar-lugar-input"
                />
                {lugarLoading && (
                  <p className="mt-1 text-[11px] text-[var(--c-muted)]">{t("mapaEditorFull.buscando")}</p>
                )}
                {!lugarLoading && lugarQuery.trim().length >= 2 && lugarResultados.length === 0 && (
                  <p className="mt-1 text-[11px] text-[var(--c-muted)]">{t("profesorAulaConfiguracion.sinResultados")}</p>
                )}
                {lugarResultados.length > 0 && (
                  <ul
                    className="mt-1 max-h-48 overflow-y-auto rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] p-1"
                    data-testid="buscar-lugar-resultados"
                  >
                    {lugarResultados.map((lugar) => (
                      <li key={lugar.geonameid}>
                        <button
                          type="button"
                          className="w-full rounded-md px-2 py-1.5 text-left text-xs text-[var(--c-text)] transition-colors hover:bg-[var(--c-hover)]"
                          onClick={() => irALugar(lugar)}
                        >
                          {lugar.nombre}
                          <span className="ml-1 text-[var(--c-muted)]">
                            {lugar.tipo === "pais" ? "" : `· ${lugar.pais}`}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>{t("mapaEditorFull.divisionProvincial")}</h2>
            <div className={styles.sectionBody}>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="map-provincias-pais">{t("mapaEditorFull.pais")}</label>
                <select
                  id="map-provincias-pais"
                  className={styles.fieldSelect}
                  value={provinciasPais}
                  onChange={(e) => setProvinciasPais(e.target.value)}
                  disabled={provinciasCatalogo.length === 0}
                >
                  <option value="">{t("mapaEditorFull.elegirPais")}</option>
                  {provinciasCatalogo.map((p) => (
                    <option key={p.pais} value={p.pais}>{p.nombre}</option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                className={styles.btn}
                onClick={agregarCapaProvincias}
                disabled={!provinciasPais || provinciasLoading}
              >
                {provinciasLoading ? "Cargando…" : "Agregar capa de provincias"}
              </button>
              {provinciasError && (
                <p role="alert" className="mt-1 text-[11px] text-[var(--c-danger)]">
                  {provinciasError}
                </p>
              )}
            </div>
          </div>

          <div className={`${styles.section} ${styles.sectionFlex}`} style={{ flex: 1 }}>
            <h2 className={styles.sectionTitle}>{t("mapaEditorFull.capas")}<span style={{ display: "inline-flex", gap: 4 }}>
                <button
                  type="button"
                  className={styles.iconBtn}
                  onClick={() => geoJsonInputRef.current?.click()}
                  aria-label={t("mapaEditorFull.importarCapaDesdeArchivoGeojson")}
                  title={t("mapaEditorFull.importarGeojson")}
                  data-testid="importar-geojson-btn"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 3v12M8 7l4-4 4 4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>
                  </svg>
                </button>
                <input
                  ref={geoJsonInputRef}
                  type="file"
                  accept=".geojson,.json,application/geo+json,application/json"
                  onChange={onGeoJsonFileChange}
                  style={{ display: "none" }}
                  data-testid="importar-geojson-input"
                />
                <button type="button" className={styles.iconBtn} onClick={addCapa} aria-label={t("mapaEditorFull.agregarCapa")} style={{ width: 28, height: 28 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" d="M12 5v14M5 12h14"/>
                  </svg>
                </button>
              </span>
            </h2>
            {geoJsonError && (
              <div
                role="alert"
                data-testid="geojson-error"
                className="mx-3 mb-2 rounded-md border border-[color-mix(in_srgb,var(--c-danger)_35%,transparent)] bg-[var(--c-danger-soft)] px-2.5 py-1.5 text-[11px] text-[var(--c-danger)]"
              >
                {geoJsonError}
                <button
                  type="button"
                  onClick={() => setGeoJsonError(null)}
                  className="ml-2 underline"
                  aria-label={t("mapaEditorFull.cerrarMensajeDeError")}
                >
                  ×
                </button>
              </div>
            )}
            {geoJsonWarning && (
              <div
                role="status"
                data-testid="geojson-warning"
                className="mx-3 mb-2 rounded-md border border-[color-mix(in_srgb,var(--c-warning)_40%,transparent)] bg-[color-mix(in_srgb,var(--c-warning)_12%,transparent)] px-2.5 py-1.5 text-[11px] text-[var(--c-text)]"
              >
                {geoJsonWarning}
                <button
                  type="button"
                  onClick={() => setGeoJsonWarning(null)}
                  className="ml-2 underline"
                  aria-label={t("mapaEditorFull.cerrarAdvertencia")}
                >
                  ×
                </button>
              </div>
            )}
            <ul className={styles.sectionBody} aria-label={t("mapaEditorFull.listaDeCapas")} style={{ listStyle: "none", margin: 0 }}>
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
                        title={t("mapaEditorFull.subirCapa")}
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
                        title={t("mapaEditorFull.bajarCapa")}
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
                      <button
                        type="button"
                        className={styles.iconBtn}
                        style={{ width: 26, height: 26 }}
                        aria-label={`Eliminar capa ${capa.nombre}`}
                        title={t("mapaEditorFull.eliminarCapa")}
                        disabled={capas.length <= 1}
                        onClick={() => {
                          if (window.confirm(`¿Eliminar la capa "${capa.nombre}"? Las anotaciones asociadas pasan a la primera capa restante.`)) {
                            eliminarCapa(capa.id);
                          }
                        }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden="true">
                          <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M5 7h14M9 7V4h6v3M7 7l1 13h8l1-13"/>
                        </svg>
                      </button>
                    </div>
                    {isActive && (
                      <div className={styles.field} style={{ marginTop: 4 }}>
                        <label className={styles.fieldLabel} htmlFor={`capa-ds-${capa.id}`}>{t("mapaEditorFull.datasetDeLaCapa")}</label>
                        <select
                          id={`capa-ds-${capa.id}`}
                          className={styles.fieldSelect}
                          value={capa.datasetId ?? ""}
                          onChange={(e) => setCapaDataset(capa.id, e.target.value || undefined)}
                        >
                          <option value="">{t("mapaEditorFull.sinDataset")}</option>
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
        <section className={styles.canvas} aria-label={t("mapaEditorFull.lienzoDelMapa")} id="mapa-canvas" tabIndex={-1}>
          {mapStatus === "loading" ? (
            <div className="absolute inset-0 grid place-items-center text-[var(--c-muted)] text-sm">{t("mapaEditorFull.cargandoMapa")}</div>
          ) : mapStatus === "error" ? (
            <div
              className="absolute inset-0 grid place-items-center p-6"
              role="alert"
              data-testid="mapa-error"
            >
              <div className="max-w-sm rounded-lg border border-[color-mix(in_srgb,var(--c-danger)_35%,transparent)] bg-[var(--c-surface)] p-4 text-center text-sm space-y-3">
                <p className="font-semibold text-[var(--c-text)]">{t("mapaEditorFull.noSePudoCargarEl")}</p>
                <p className="text-xs text-[var(--c-muted)]">{t("mapaEditorFull.verificaLaConexionConEl")}</p>
                <button
                  type="button"
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  onClick={handleRetry}
                >{t("comun.reintentar")}</button>
              </div>
            </div>
          ) : (
            <svg
              ref={svgRef}
              viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`}
              className={styles.canvasSvg}
              role="application"
              aria-label={t("mapaEditorFull.lienzoDelMapaInteractivo")}
              style={{ cursor: svgCursor, touchAction: "none" }}
              onMouseMove={handleMouseMove}
              onClick={handleSvgClick}
              onDoubleClick={handleSvgDoubleClick}
              onPointerDown={handlePointerDownCombined}
              onPointerMove={handlePanMove}
              onPointerUp={handlePointerUpCombined}
              onPointerLeave={handlePointerUpCombined}
            >
              {/* fondo + cuadrícula de atlas (decorativa, theme-driven) */}
              <defs>
                <pattern id="map-grid" width={40} height={40} patternUnits="userSpaceOnUse">
                  <path
                    d="M40 0H0V40"
                    fill="none"
                    stroke="color-mix(in srgb, var(--c-text) 7%, transparent)"
                    strokeWidth={1}
                  />
                </pattern>
              </defs>
              <rect x={0} y={0} width={MAP_WIDTH} height={MAP_HEIGHT} style={{ fill: "var(--c-bg)" }} />
              <rect x={0} y={0} width={MAP_WIDTH} height={MAP_HEIGHT} fill="url(#map-grid)" aria-hidden="true" />

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
                      strokeWidth={0.4 * zoom}
                      onMouseEnter={() => setHoveredCountry(name ?? null)}
                      onMouseLeave={() => setHoveredCountry(null)}
                    />
                  );
                })}
              </g>

              {/* Capas GeoJSON importadas (M5) — se dibujan debajo de las anotaciones. */}
              {project && capas.filter((c) => c.geojson).map((c) => (
                <GeoJsonLayer
                  key={`gj-${c.id}`}
                  data={c.geojson!.data}
                  color={c.color}
                  project={project}
                  visible={c.visible}
                  zoom={zoom}
                />
              ))}

              {/* anotaciones (zonas, flechas, marcadores) — reusa AnnotationLayer */}
              {project && (
                <AnnotationLayer
                  anotaciones={anotacionesParaRender}
                  project={project}
                  selectedId={selectedAnnoId}
                  onSelect={handleSelectAnnotation}
                  editable
                  zoom={zoom}
                />
              )}

              {/* preview de área en curso */}
              {project && pendingArea && pendingArea.length > 0 && (() => {
                const ptsArr = pendingArea;
                const polyPts = pointsToPolyline(ptsArr, project);
                // Si hay 3+ puntos, rellenamos como polígono (preview) con la
                // misma opacidad que la anotación final.
                const polygonPts = ptsArr.length >= 3
                  ? polyPts
                  : "";
                return (
                  <g pointerEvents="none">
                    {polygonPts && (
                      <polygon
                        points={polygonPts}
                        fill="var(--c-primary)"
                        fillOpacity={0.18}
                        stroke="none"
                      />
                    )}
                    <polyline
                      points={polyPts}
                      fill="none"
                      stroke="var(--c-primary)"
                      strokeWidth={1.5 * zoom}
                      strokeDasharray="4 2"
                      opacity={0.9}
                    />
                    {/* Puntos acumulados */}
                    {ptsArr.map((p, i) => {
                      const [px, py] = project(p[0], p[1]);
                      const isFirst = i === 0;
                      return (
                        <circle
                          key={`area-pt-${i}`}
                          cx={px}
                          cy={py}
                          r={(isFirst && ptsArr.length >= 3 ? 6 : 3.5) * zoom}
                          fill={isFirst ? "var(--c-primary)" : "var(--c-surface)"}
                          stroke="var(--c-primary)"
                          strokeWidth={(isFirst ? 2.5 : 1.5) * zoom}
                        />
                      );
                    })}
                  </g>
                );
              })()}
              {/* preview de ruta multipunto en curso */}
              {project && pendingRuta && pendingRuta.length > 0 && (() => {
                const ptsArr = pendingRuta;
                const polyPts = pointsToPolyline(ptsArr, project);
                // Línea "rubber-band" del último punto al cursor (si hay).
                const last = ptsArr[ptsArr.length - 1];
                const lastXY = project(last[0], last[1]);
                const cursorXY = cursorCoords
                  ? project(cursorCoords.lon, cursorCoords.lat)
                  : null;
                return (
                  <g pointerEvents="none">
                    <polyline
                      points={polyPts}
                      fill="none"
                      stroke="var(--c-warning)"
                      strokeWidth={2 * zoom}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity={0.9}
                    />
                    {cursorXY && ptsArr.length >= 1 && (
                      <line
                        x1={lastXY[0]}
                        y1={lastXY[1]}
                        x2={cursorXY[0]}
                        y2={cursorXY[1]}
                        stroke="var(--c-warning)"
                        strokeWidth={1.5 * zoom}
                        strokeDasharray="3 3"
                        opacity={0.7}
                      />
                    )}
                    {ptsArr.map((p, i) => {
                      const [px, py] = project(p[0], p[1]);
                      return (
                        <circle
                          key={`ruta-pt-${i}`}
                          cx={px}
                          cy={py}
                          r={4 * zoom}
                          fill="var(--c-surface)"
                          stroke="var(--c-warning)"
                          strokeWidth={1.5 * zoom}
                        />
                      );
                    })}
                  </g>
                );
              })()}
              {/* preview de medición en curso (1er punto + línea al cursor + km) */}
              {project && pendingMedir && (() => {
                const [ox, oy] = project(pendingMedir[0], pendingMedir[1]);
                const cursorXY = cursorCoords
                  ? project(cursorCoords.lon, cursorCoords.lat)
                  : null;
                const km = cursorCoords
                  ? haversineKm([pendingMedir[0], pendingMedir[1]], [cursorCoords.lon, cursorCoords.lat])
                  : null;
                return (
                  <g pointerEvents="none">
                    <circle cx={ox} cy={oy} r={5 * zoom} fill="var(--c-success)" stroke="var(--c-surface)" strokeWidth={1.5 * zoom} />
                    {cursorXY && (
                      <>
                        <line
                          x1={ox}
                          y1={oy}
                          x2={cursorXY[0]}
                          y2={cursorXY[1]}
                          stroke="var(--c-success)"
                          strokeWidth={2 * zoom}
                          strokeDasharray="4 2"
                        />
                        {km != null && Number.isFinite(km) && (
                          <text
                            x={(ox + cursorXY[0]) / 2}
                            y={(oy + cursorXY[1]) / 2 - 8}
                            textAnchor="middle"
                            fontSize={12 * zoom}
                            fontWeight={700}
                            fill="var(--c-success)"
                            stroke="var(--c-surface)"
                            strokeWidth={3 * zoom}
                            paintOrder="stroke"
                          >
                            {`${Math.round(km).toLocaleString("es-AR")} km`}
                          </text>
                        )}
                      </>
                    )}
                  </g>
                );
              })()}
              {/* medición fijada (línea + etiqueta, hasta cambiar de herramienta o Esc) */}
              {project && !pendingMedir && medidaKm && (() => {
                const [ox, oy] = project(medidaKm.desde[0], medidaKm.desde[1]);
                const [dx, dy] = project(medidaKm.hasta[0], medidaKm.hasta[1]);
                return (
                  <g pointerEvents="none">
                    <line
                      x1={ox}
                      y1={oy}
                      x2={dx}
                      y2={dy}
                      stroke="var(--c-success)"
                      strokeWidth={2 * zoom}
                    />
                    <circle cx={ox} cy={oy} r={5 * zoom} fill="var(--c-success)" stroke="var(--c-surface)" strokeWidth={1.5 * zoom} />
                    <circle cx={dx} cy={dy} r={5 * zoom} fill="var(--c-success)" stroke="var(--c-surface)" strokeWidth={1.5 * zoom} />
                    <text
                      x={(ox + dx) / 2}
                      y={(oy + dy) / 2 - 8}
                      textAnchor="middle"
                      fontSize={12 * zoom}
                      fontWeight={700}
                      fill="var(--c-success)"
                      stroke="var(--c-surface)"
                      strokeWidth={3 * zoom}
                      paintOrder="stroke"
                    >
                      {`${Math.round(medidaKm.km).toLocaleString("es-AR")} km`}
                    </text>
                  </g>
                );
              })()}
            </svg>
          )}

          {/* Overlays sobre el canvas */}
          <div className={styles.canvasOverlay} role="group" aria-label={t("mapaEditorFull.modoDelMapa")}>
            <span className={styles.chip}>
              {config.modo === "physical" ? "Físico" : "Político"}
            </span>
          </div>

          {/* Barra de hints contextual sobre el lienzo */}
          <div
            className={styles.canvasHint}
            role="status"
            aria-live="polite"
            data-testid="mapa-hint"
          >
            {hint.visual || `${t(TOOLS.find((tool) => tool.id === activeTool)?.labelKey ?? "mapaEditorFull.mover2")} ${t("mapaEditorFull.listo")}`}
            {activeTool === "area" && pendingArea && pendingArea.length >= 3 && (
              <button
                type="button"
                className={styles.hintBtn}
                onClick={cerrarArea}
                aria-label={`Cerrar área con ${pendingArea.length} puntos`}
              >
                Cerrar área ({pendingArea.length} pts)
              </button>
            )}
            {activeTool === "ruta" && pendingRuta && pendingRuta.length >= 2 && (
              <button
                type="button"
                className={styles.hintBtn}
                onClick={cerrarRuta}
                aria-label={`Cerrar ruta con ${pendingRuta.length} puntos`}
              >
                Cerrar ruta ({pendingRuta.length} pts)
              </button>
            )}
            {activeTool === "medir" && medidaKm && (
              <button
                type="button"
                className={styles.hintBtn}
                onClick={fijarMedicionComoAnotacion}
                aria-label={`Fijar la medición de ${Math.round(medidaKm.km)} kilómetros como anotación`}
              >{t("mapaEditorFull.fijarComoAnotacion")}</button>
            )}
          </div>
          <div className={styles.canvasOverlayRight}>
            <div className={styles.canvasZoom} role="group" aria-label={t("mapaEditorFull.zoomDelMapa")}>
              <button type="button" onClick={zoomIn} aria-label={t("mapaEditorFull.acercar")} title={t("mapaEditorFull.acercar")}>
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" d="M12 6v12M6 12h12"/></svg>
              </button>
              <span className={styles.sep} aria-hidden="true" />
              <button type="button" onClick={zoomOut} aria-label={t("mapaEditorFull.alejar")} title={t("mapaEditorFull.alejar")}>
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" d="M6 12h12"/></svg>
              </button>
              <span className={styles.sep} aria-hidden="true" />
              <button type="button" onClick={resetZoom} aria-label={t("mapaEditorFull.restablecerZoom")} title={t("mapaEditorFull.restablecerZoom")}>
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 1 0 9-9 9 9 0 0 0-7 3.3M3 4v4h4"/></svg>
              </button>
            </div>
            <div className={styles.canvasReadout} aria-label={t("mapaEditorFull.coordenadasDelCursor")} aria-live="polite">
              {cursorCoords
                ? `lat ${cursorCoords.lat.toFixed(2)}° · lon ${cursorCoords.lon.toFixed(2)}°`
                : "lat — · lon —"}
            </div>
          </div>

          {/* Barra de escala (decorativa; la lectura precisa vive en el readout) */}
          {scale && (
            <div className={styles.canvasScale} aria-hidden="true">
              <span className={styles.scaleBar} style={{ width: `${Math.round(scale.px)}px` }} />
              {scale.km.toLocaleString("es-AR")} km
            </div>
          )}

          {/* Leyenda automática (capas visibles con anotaciones) */}
          {capas.some((c) => c.visible && (annoCountByCapa.get(c.id) ?? 0) > 0) && (
            <aside className={styles.canvasLegend} aria-label={t("mapaEditorFull.leyendaDelMapa")}>
              <h3>{t("mapaEditorFull.leyenda")}</h3>
              <ul>
                {capas
                  .filter((c) => c.visible && (annoCountByCapa.get(c.id) ?? 0) > 0)
                  .map((c) => (
                    <li key={c.id}>
                      <span className={styles.sw} style={{ background: c.color }} aria-hidden="true" />
                      <span>{c.nombre}</span>
                    </li>
                  ))}
              </ul>
            </aside>
          )}
        </section>

        {/* COL DER: inspector */}
        <aside className={`${styles.panel} ${styles.panelInspect}`} aria-label={t("mapaEditorFull.inspector")}>
          {selectedAnno ? (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>
                {selectedAnno.tipo === "marcador"
                  ? "Marcador"
                  : selectedAnno.tipo === "zona"
                  ? "Zona"
                  : selectedAnno.tipo === "texto"
                  ? "Texto"
                  : selectedAnno.tipo === "ruta"
                  ? "Ruta"
                  : "Flecha"}
              </h2>
              <div className={styles.sectionBody}>
                <div role="tablist" aria-label={t("mapaEditorFull.seccionesDelInspector")} className="flex border border-[var(--c-border)] rounded-md p-0.5 bg-[var(--c-bg)]">
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
                    {selectedAnno.tipo === "texto" ? (
                      <div className={styles.field}>
                        <label className={styles.fieldLabel} htmlFor="anno-contenido">{t("profesorEvaluaciones.contenido")}</label>
                        <textarea
                          id="anno-contenido"
                          className={styles.fieldTextarea}
                          value={selectedAnno.contenido}
                          placeholder={t("mapaEditorFull.textoAMostrarEnEl")}
                          rows={3}
                          onChange={(e) => updateSelectedAnno({ contenido: e.target.value })}
                        />
                        <p className="text-[11px] text-[var(--c-muted)]">{t("mapaEditorFull.siLoDejasVacioLa")}</p>
                      </div>
                    ) : (
                      <div className={styles.field}>
                        <label className={styles.fieldLabel} htmlFor="anno-etiqueta">{t("comun.nombre")}</label>
                        <input
                          id="anno-etiqueta"
                          className={styles.fieldInput}
                          value={"etiqueta" in selectedAnno ? (selectedAnno.etiqueta ?? "") : ""}
                          placeholder={t("mapaEditorFull.nombreDeLaAnotacion")}
                          onChange={(e) => updateSelectedAnno({ etiqueta: e.target.value })}
                        />
                      </div>
                    )}
                    {selectedAnno.tipo === "marcador" || selectedAnno.tipo === "texto" ? (
                      // Lat/lon editables (commit al salir del campo, para no pelear
                      // con valores parciales como "-" o "13." mientras se tipea).
                      <div className={styles.fieldRow}>
                        <div className={styles.field}>
                          <label className={styles.fieldLabel} htmlFor="anno-lat">{t("mapaEditorFull.latitud")}</label>
                          <input
                            id="anno-lat"
                            type="number"
                            step="0.0001"
                            className={styles.fieldInput}
                            key={`lat-${selectedAnno.id}`}
                            defaultValue={selectedAnno.lat}
                            onBlur={(e) => {
                              const n = parseFloat(e.target.value);
                              if (Number.isFinite(n)) updateSelectedAnno({ lat: n });
                            }}
                          />
                        </div>
                        <div className={styles.field}>
                          <label className={styles.fieldLabel} htmlFor="anno-lon">{t("mapaEditorFull.longitud")}</label>
                          <input
                            id="anno-lon"
                            type="number"
                            step="0.0001"
                            className={styles.fieldInput}
                            key={`lon-${selectedAnno.id}`}
                            defaultValue={selectedAnno.lon}
                            onBlur={(e) => {
                              const n = parseFloat(e.target.value);
                              if (Number.isFinite(n)) updateSelectedAnno({ lon: n });
                            }}
                          />
                        </div>
                      </div>
                    ) : selectedAnno.tipo === "zona" ? (
                      <p className="text-xs text-[var(--c-muted)]">
                        {selectedAnno.puntos.length} puntos
                      </p>
                    ) : selectedAnno.tipo === "ruta" ? (
                      <p className="text-xs text-[var(--c-muted)]">
                        {selectedAnno.puntos.length} puntos · {selectedAnno.flechaFinal ? "con flecha final" : "sin flecha"}
                      </p>
                    ) : (
                      <p className="text-xs text-[var(--c-muted)]">
                        De {selectedAnno.desde[1].toFixed(1)}°,{selectedAnno.desde[0].toFixed(1)}° a {selectedAnno.hasta[1].toFixed(1)}°,{selectedAnno.hasta[0].toFixed(1)}°
                      </p>
                    )}
                  </div>
                )}
                {inspectorTab === "estilo" && (
                  <div className="space-y-3">
                    {/* Slider reutilizable — usa el input range nativo que ya
                        es accesible (role="slider", aria-valuemin/max/now). El
                        `onChange` se dispara en cada paso, lo que generaría
                        una entrada en el historial de undo por tick. Para
                        evitar eso, los handlers de slider consolidan el cambio
                        en `onMouseUp` / `onKeyUp` (onCommit) y dejan el
                        preview en el render usando el valor controlado. */}
                    {selectedAnno.tipo === "texto" && (
                      <>
                        <div className={styles.field}>
                          <label className={styles.fieldLabel} htmlFor="style-texto-tamano">
                            Tamaño ({selectedAnno.tamano ?? ESTILO_DEFAULTS.texto.tamano} px)
                          </label>
                          <input
                            id="style-texto-tamano"
                            type="range"
                            min={TEXTO_TAMANO_MIN}
                            max={TEXTO_TAMANO_MAX}
                            step={1}
                            value={selectedAnno.tamano ?? ESTILO_DEFAULTS.texto.tamano}
                            onChange={(e) => updateSelectedAnno({ tamano: Number(e.target.value) })}
                            aria-valuemin={TEXTO_TAMANO_MIN}
                            aria-valuemax={TEXTO_TAMANO_MAX}
                            aria-valuenow={selectedAnno.tamano ?? ESTILO_DEFAULTS.texto.tamano}
                            className="w-full accent-[var(--c-primary)]"
                          />
                        </div>
                        <ColorPicker
                          value={selectedAnno.color ?? ESTILO_DEFAULTS.texto.color}
                          onChange={(c) => updateSelectedAnno({ color: c })}
                        />
                      </>
                    )}

                    {selectedAnno.tipo === "marcador" && (
                      <>
                        <div className={styles.field}>
                          <label className={styles.fieldLabel} htmlFor="style-marcador-tamano">
                            Escala ({(selectedAnno.tamano ?? ESTILO_DEFAULTS.marcador.tamano).toFixed(1)}×)
                          </label>
                          <input
                            id="style-marcador-tamano"
                            type="range"
                            min={MARCADOR_TAMANO_MIN}
                            max={MARCADOR_TAMANO_MAX}
                            step={0.1}
                            value={selectedAnno.tamano ?? ESTILO_DEFAULTS.marcador.tamano}
                            onChange={(e) => updateSelectedAnno({ tamano: Number(e.target.value) })}
                            aria-valuemin={MARCADOR_TAMANO_MIN}
                            aria-valuemax={MARCADOR_TAMANO_MAX}
                            aria-valuenow={selectedAnno.tamano ?? ESTILO_DEFAULTS.marcador.tamano}
                            className="w-full accent-[var(--c-primary)]"
                          />
                        </div>
                        <ColorPicker
                          value={selectedAnno.color ?? ESTILO_DEFAULTS.marcador.color}
                          onChange={(c) => updateSelectedAnno({ color: c })}
                        />
                      </>
                    )}

                    {selectedAnno.tipo === "ruta" && (
                      <>
                        <div className={styles.field}>
                          <label className={styles.fieldLabel} htmlFor="style-ruta-grosor">
                            Grosor ({(selectedAnno.grosor ?? ESTILO_DEFAULTS.ruta.grosor).toFixed(0)} px)
                          </label>
                          <input
                            id="style-ruta-grosor"
                            type="range"
                            min={GROSOR_MIN}
                            max={GROSOR_MAX}
                            step={1}
                            value={selectedAnno.grosor ?? ESTILO_DEFAULTS.ruta.grosor}
                            onChange={(e) => updateSelectedAnno({ grosor: Number(e.target.value) })}
                            aria-valuemin={GROSOR_MIN}
                            aria-valuemax={GROSOR_MAX}
                            aria-valuenow={selectedAnno.grosor ?? ESTILO_DEFAULTS.ruta.grosor}
                            className="w-full accent-[var(--c-primary)]"
                          />
                        </div>
                        <ColorPicker
                          value={selectedAnno.color ?? ESTILO_DEFAULTS.ruta.color}
                          onChange={(c) => updateSelectedAnno({ color: c })}
                        />
                        <div className={styles.field}>
                          <span className={styles.fieldLabel}>{t("mapaEditorFull.flechaAlFinal")}</span>
                          <label className="flex items-center gap-2 text-sm">
                            <input
                              type="checkbox"
                              checked={selectedAnno.flechaFinal ?? ESTILO_DEFAULTS.ruta.flechaFinal}
                              onChange={(e) => updateSelectedAnno({ flechaFinal: e.target.checked })}
                              className="accent-[var(--c-primary)]"
                            />
                            {selectedAnno.flechaFinal ?? ESTILO_DEFAULTS.ruta.flechaFinal ? "Activada" : "Desactivada"}
                          </label>
                        </div>
                      </>
                    )}

                    {selectedAnno.tipo === "zona" && (
                      <>
                        <ColorPicker
                          value={selectedAnno.color ?? ESTILO_DEFAULTS.zona.color}
                          onChange={(c) => updateSelectedAnno({ color: c })}
                        />
                        <div className={styles.field}>
                          <label className={styles.fieldLabel} htmlFor="style-zona-grosor">
                            Grosor de borde ({(selectedAnno.grosor ?? ESTILO_DEFAULTS.zona.grosor).toFixed(0)} px)
                          </label>
                          <input
                            id="style-zona-grosor"
                            type="range"
                            min={GROSOR_MIN}
                            max={GROSOR_MAX}
                            step={1}
                            value={selectedAnno.grosor ?? ESTILO_DEFAULTS.zona.grosor}
                            onChange={(e) => updateSelectedAnno({ grosor: Number(e.target.value) })}
                            aria-valuemin={GROSOR_MIN}
                            aria-valuemax={GROSOR_MAX}
                            aria-valuenow={selectedAnno.grosor ?? ESTILO_DEFAULTS.zona.grosor}
                            className="w-full accent-[var(--c-primary)]"
                          />
                        </div>
                        <div className={styles.field}>
                          <label className={styles.fieldLabel} htmlFor="style-zona-opacidad">
                            Opacidad del relleno ({(selectedAnno.opacidadRelleno ?? ESTILO_DEFAULTS.zona.opacidadRelleno).toFixed(2)})
                          </label>
                          <input
                            id="style-zona-opacidad"
                            type="range"
                            min={OPACIDAD_MIN}
                            max={OPACIDAD_MAX}
                            step={OPACIDAD_STEP}
                            value={selectedAnno.opacidadRelleno ?? ESTILO_DEFAULTS.zona.opacidadRelleno}
                            onChange={(e) => updateSelectedAnno({ opacidadRelleno: Number(e.target.value) })}
                            aria-valuemin={OPACIDAD_MIN}
                            aria-valuemax={OPACIDAD_MAX}
                            aria-valuenow={selectedAnno.opacidadRelleno ?? ESTILO_DEFAULTS.zona.opacidadRelleno}
                            className="w-full accent-[var(--c-primary)]"
                          />
                        </div>
                      </>
                    )}

                    {selectedAnno.tipo === "flecha" && (
                      <>
                        <ColorPicker
                          value={selectedAnno.color ?? ESTILO_DEFAULTS.flecha.color}
                          onChange={(c) => updateSelectedAnno({ color: c })}
                        />
                        <div className={styles.field}>
                          <label className={styles.fieldLabel} htmlFor="style-flecha-grosor">
                            Grosor ({(selectedAnno.grosor ?? ESTILO_DEFAULTS.flecha.grosor).toFixed(0)} px)
                          </label>
                          <input
                            id="style-flecha-grosor"
                            type="range"
                            min={GROSOR_MIN}
                            max={GROSOR_MAX}
                            step={1}
                            value={selectedAnno.grosor ?? ESTILO_DEFAULTS.flecha.grosor}
                            onChange={(e) => updateSelectedAnno({ grosor: Number(e.target.value) })}
                            aria-valuemin={GROSOR_MIN}
                            aria-valuemax={GROSOR_MAX}
                            aria-valuenow={selectedAnno.grosor ?? ESTILO_DEFAULTS.flecha.grosor}
                            className="w-full accent-[var(--c-primary)]"
                          />
                        </div>
                      </>
                    )}
                  </div>
                )}
                {inspectorTab === "avanzado" && (
                  <div className="space-y-3">
                    <div className={styles.field}>
                      <label className={styles.fieldLabel} htmlFor="anno-capa">{t("mapaEditorFull.capa")}</label>
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
                    >{t("mapaEditorFull.eliminarAnotacion")}</button>
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
                  <div>{t("mapaEditorFull.seleccionaUnaAnotacionDelLienzo")}</div>
                </div>
              </div>
            </div>
          )}

          {/* Listado de anotaciones */}
          <div className={`${styles.section} ${styles.sectionFlex}`} style={{ flex: 1 }}>
            <h2 className={styles.sectionTitle}>{t("mapaEditorFull.anotaciones")}<span style={{ color: "var(--c-muted)", fontWeight: 600 }}>· {config.anotaciones.length}</span>
            </h2>
            <div className={styles.sectionBody} role="list" aria-label={t("mapaEditorFull.listaDeAnotaciones")}>
              {config.anotaciones.length === 0 && (
                <p className="text-xs text-[var(--c-muted)] text-center py-4">{t("mapaEditorFull.sinAnotacionesAun")}</p>
              )}
              {config.anotaciones.map((a) => {
                const capa = capas.find((c) => c.id === a.capaId);
                const color = a.color ?? capa?.color ?? "var(--c-text)";
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
        <span className="stat">{t("mapaEditorFull.herramienta")}<strong>{t(TOOLS.find((tool) => tool.id === activeTool)?.labelKey ?? "mapaEditorFull.mover2")}</strong></span>
        <span className="stat">{t("mapaEditorFull.capaActiva")}<strong>{capas.find((c) => c.id === activeCapaId)?.nombre ?? "—"}</strong></span>
        <span className="stat">{t("mapaEditorFull.anotaciones2")}<strong>{config.anotaciones.length}</strong></span>
        <span className="spacer" />
        <span className="stat">
          <kbd>V</kbd>{t("mapaEditorFull.mover")}<kbd>M</kbd>{t("mapaEditorFull.marcador")}<kbd>R</kbd>{t("mapaEditorFull.ruta")}<kbd>A</kbd>{t("mapaEditorFull.area")}<kbd>T</kbd>{t("mapaEditorFull.texto")}<kbd>L</kbd>{t("mapaEditorFull.medir")}<kbd>⌫</kbd> eliminar
        </span>
      </footer>
    </div>
  );
}
