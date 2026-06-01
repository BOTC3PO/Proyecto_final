// TODO post-expo: editor de mapa completo INCOMPLETO. Está fuera de circulación
// para la demo (ModuloEditor usa MapaStandalone inline, que sí funciona). No
// borrar: este componente es la base para retomarlo. Pendiente antes de
// reconectarlo al picker/flujo de módulos:
//   - Conectar datasets a la API del módulo (hoy llegan vacíos por sessionStorage).
//   - Implementar click/render de zona y flecha.
//   - Zoom/pan, export a imagen, reorder de capas por teclado.
// Ver work order 03 (degradación a standalone) para el contexto.
import { useCallback, useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
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
import { useMapEditorShortcuts } from "./mapa-editor-shortcuts";
import styles from "./MapaEditorFull.module.css";

const MAP_WIDTH = 1000;
const MAP_HEIGHT = 620;

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

  // TODO: conectar datasets desde API del módulo
  const datasets: MapaDataset[] = useMemo(() => {
    try {
      const raw = sessionStorage.getItem(`mapa-doc:${ssKey}:datasets`);
      if (raw) return JSON.parse(raw) as MapaDataset[];
    } catch {
      // ignore
    }
    return [];
  }, [ssKey]);
  void datasets; // reservado para iteración futura

  const [activeTool, setActiveTool] = useState<Tool>("select");
  const [activeCapaId, setActiveCapaId] = useState<string>(
    config.capas?.[0]?.id ?? MAPA_CAPA_DEFAULT_ID,
  );
  const [selectedAnnoId, setSelectedAnnoId] = useState<string | null>(null);
  const [inspectorTab, setInspectorTab] = useState<"datos" | "estilo" | "avanzado">("datos");
  const [cursorCoords, setCursorCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  // Undo/redo simple basado en snapshots
  const [history, setHistory] = useState<MapaConfig[]>([config]);
  const [historyIdx, setHistoryIdx] = useState(0);

  // ─── Mapa base ──────────────────────────────────────────────────
  const [features, setFeatures] = useState<CountryFeature[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

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
    "escape": () => setSelectedAnnoId(null),
  });

  // ─── Cursor coords (aria-live) ──────────────────────────────────
  const handleMouseMove = useCallback((e: MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current || !inverseProject) return;
    const rect = svgRef.current.getBoundingClientRect();
    const scaleX = MAP_WIDTH / rect.width;
    const scaleY = MAP_HEIGHT / rect.height;
    const svgX = (e.clientX - rect.left) * scaleX;
    const svgY = (e.clientY - rect.top) * scaleY;
    const coords = inverseProject(svgX, svgY);
    if (coords) {
      setCursorCoords({ lon: coords[0], lat: coords[1] });
    }
  }, [inverseProject]);

  // ─── Capas: CRUD (solo lo usado por la UI) ──────────────────────
  const capas = config.capas ?? [];
  const addCapa = useCallback(() => {
    const newCapa: MapaCapa = {
      id: makeCapaId(),
      nombre: `Capa ${capas.length + 1}`,
      color: PALETTE[capas.length % PALETTE.length],
      visible: true,
    };
    updateConfig({ ...config, capas: [...capas, newCapa] });
    setActiveCapaId(newCapa.id);
  }, [capas, config, updateConfig]);

  const toggleCapaVisible = useCallback((capaId: string) => {
    updateConfig({
      ...config,
      capas: capas.map((c) => (c.id === capaId ? { ...c, visible: !c.visible } : c)),
    });
  }, [capas, config, updateConfig]);

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

  // ─── Annotation list ────────────────────────────────────────────
  const annoCountByCapa = useMemo(() => {
    const m = new Map<string, number>();
    config.anotaciones.forEach((a) => {
      const k = a.capaId ?? MAPA_CAPA_DEFAULT_ID;
      m.set(k, (m.get(k) ?? 0) + 1);
    });
    return m;
  }, [config.anotaciones]);

  const selectedAnno = config.anotaciones.find((a) => a.id === selectedAnnoId) ?? null;
  const annoEtiqueta = (a: MapaAnotacion) =>
    "etiqueta" in a ? (a.etiqueta || "Sin etiqueta") : "Sin etiqueta";

  // ─── Render ─────────────────────────────────────────────────────
  return (
    <div className={styles.mapview}>
      <a href="#mapa-canvas" className="skip-link">Saltar al lienzo</a>

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
            <div className={styles.sectionBody} role="listbox" aria-label="Lista de capas">
              {capas.map((capa) => {
                const count = annoCountByCapa.get(capa.id) ?? 0;
                const isActive = activeCapaId === capa.id;
                return (
                  <div
                    key={capa.id}
                    role="option"
                    tabIndex={0}
                    aria-selected={isActive}
                    className="vb-layer"
                    onClick={() => setActiveCapaId(capa.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveCapaId(capa.id);
                      }
                    }}
                  >
                    <span className="sw" style={{ background: capa.color }} aria-hidden="true" />
                    <span>{capa.nombre}</span>
                    <span className="count">{count}</span>
                    <button
                      type="button"
                      className={styles.iconBtn}
                      style={{ width: 28, height: 28 }}
                      aria-pressed={capa.visible}
                      aria-label={capa.visible ? `Ocultar capa ${capa.nombre}` : `Mostrar capa ${capa.nombre}`}
                      onClick={(e) => { e.stopPropagation(); toggleCapaVisible(capa.id); }}
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
                );
              })}
            </div>
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
              viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
              className={styles.canvasSvg}
              role="application"
              aria-label="Lienzo del mapa interactivo"
              onMouseMove={handleMouseMove}
              onClick={(e) => {
                // TODO: handleSvgClick / handleSvgDoubleClick para zona y flecha
                // (asignar capaId = activeCapaId al crear)
                void e;
              }}
              onDoubleClick={(e) => {
                void e;
              }}
            >
              {/* fondo */}
              <rect width={MAP_WIDTH} height={MAP_HEIGHT} style={{ fill: "var(--c-bg)" }} />

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

              {/* anotaciones: filtrar por capa visible */}
              {project && config.anotaciones
                .filter((a) => {
                  const c = capas.find((c) => c.id === a.capaId);
                  return c ? c.visible : true;
                })
                .map((a) => {
                  const capa = capas.find((c) => c.id === a.capaId);
                  const color = a.color ?? capa?.color ?? "#1a1a1a";
                  if (a.tipo === "marcador") {
                    const [x, y] = project(a.lon, a.lat);
                    const isSel = selectedAnnoId === a.id;
                    return (
                      <g key={a.id} onClick={(e) => { e.stopPropagation(); setSelectedAnnoId(a.id); }} style={{ cursor: "pointer" }}>
                        <circle cx={x} cy={y} r={isSel ? 8 : 6} fill={color} stroke="white" strokeWidth={1.5}/>
                        {a.etiqueta && (
                          <text x={x} y={y + 16} textAnchor="middle" fontSize={11} fill={color} stroke="white" strokeWidth={3} paintOrder="stroke" fontWeight="600">
                            {a.etiqueta}
                          </text>
                        )}
                      </g>
                    );
                  }
                  // TODO: render zona y flecha (copiar patrón de AnnotationLayer en MapaStandalone)
                  return null;
                })}
            </svg>
          )}

          {/* Overlays sobre el canvas */}
          <div className={styles.canvasOverlay}>
            <span className={styles.chip}>
              {config.modo === "physical" ? "Físico" : "Político"}
            </span>
          </div>
          <div className={styles.canvasOverlayRight}>
            {/* TODO: implementar zoom/pan del viewBox */}
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
          {/* TODO: exportar mapa como imagen */}
          {/* TODO: keyboard reorder de capas (drag-drop por ahora) */}
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
                    <p className="text-xs text-[var(--c-muted)]">Campos de datos del recurso seleccionado.</p>
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
                            onClick={() => {
                              updateConfig({
                                ...config,
                                anotaciones: config.anotaciones.map((a) =>
                                  a.id === selectedAnno.id ? ({ ...a, color: c } as MapaAnotacion) : a,
                                ),
                              });
                            }}
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
                        onChange={(e) => {
                          updateConfig({
                            ...config,
                            anotaciones: config.anotaciones.map((a) =>
                              a.id === selectedAnno.id ? ({ ...a, capaId: e.target.value } as MapaAnotacion) : a,
                            ),
                          });
                        }}
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
          <kbd>V</kbd> mover · <kbd>M</kbd> marcador · <kbd>R</kbd> ruta · <kbd>A</kbd> área · <kbd>T</kbd> texto · <kbd>⌫</kbd> eliminar
        </span>
      </footer>
    </div>
  );
}
