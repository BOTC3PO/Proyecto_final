/**
 * Mapa del temario oficial por caminos. Caminos (troncos) a la izquierda, sus secciones en pestañas y, para la
 * sección elegida, el grafo de módulos con sus prerrequisitos. Elegir un módulo resalta el camino hasta él y lo que
 * habilita; con sesión, los módulos se pintan según el progreso. Los datos: `public/temario/mapa.json`.
 * La URL guarda lo elegido (`?camino=…&seccion=…&modulo=…`) para compartirlo.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import { apiGet } from "../lib/api";
import {
  antecesores,
  buscar,
  dibujarSeccion,
  nivelLegible,
  NODO_ALTO,
  NODO_ANCHO,
  sucesores,
  ubicaciones,
  type CaminoMapa,
  type DatosMapa,
} from "../lib/mapaTemario";
import { nombreMateria } from "../lib/nombreMateria";
import { interpolar } from "../i18n/interpolar";
import { useI18n } from "../i18n/I18nContext";

type Estado = "completado" | "en_progreso";

const tituloDeCamino = (c: CaminoMapa) => c.titulo ?? nombreMateria(c.materia);

export default function MapaTemario() {
  const { t } = useI18n();
  const { user } = useAuth();
  const [datos, setDatos] = useState<DatosMapa | null>(null);
  const [error, setError] = useState(false);
  const [progreso, setProgreso] = useState<Map<string, Estado>>(new Map());
  const [params, setParams] = useSearchParams();
  const [busqueda, setBusqueda] = useState("");
  const [zoom, setZoom] = useState(1);
  const lienzo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL ?? "/"}temario/mapa.json`.replace(/\/{2,}/g, "/"))
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then(setDatos, () => setError(true));
  }, []);

  useEffect(() => {
    if (!user?.id) return;
    // El progreso es un agregado: si falla, el mapa se ve igual, sin colores.
    apiGet<{ items?: { moduloId: string; status?: string }[] }>(`/api/progreso?usuarioId=${encodeURIComponent(user.id)}`).then(
      (r) => {
        const m = new Map<string, Estado>();
        for (const i of r.items ?? []) if (i.status === "completado" || i.status === "en_progreso") m.set(i.moduloId, i.status);
        setProgreso(m);
      },
      () => setProgreso(new Map()),
    );
  }, [user?.id]);

  const donde = useMemo(() => (datos ? ubicaciones(datos) : new Map()), [datos]);
  const camino = datos?.caminos.find((c) => c.id === params.get("camino")) ?? datos?.caminos[0] ?? null;
  const seccion = camino?.secciones.find((s) => s.id === params.get("seccion")) ?? camino?.secciones[0] ?? null;
  const elegido = params.get("modulo");
  const dibujo = useMemo(() => (datos && seccion ? dibujarSeccion(seccion.modulos, datos.modulos) : null), [datos, seccion]);
  const resaltados = useMemo(() => {
    if (!datos || !elegido || !datos.modulos[elegido]) return null;
    return { antes: antecesores(elegido, datos.modulos), despues: sucesores(elegido, datos.modulos) };
  }, [datos, elegido]);
  const resultados = useMemo(() => (datos ? buscar(busqueda, datos.modulos) : []), [datos, busqueda]);

  // Al elegir un módulo (búsqueda, enlace o prerrequisito de otra sección), llevarlo a la vista.
  useEffect(() => {
    if (!elegido || !dibujo || !lienzo.current) return;
    const p = dibujo.posiciones.get(elegido);
    if (!p) return;
    lienzo.current.scrollTo({
      left: Math.max(0, p.x * zoom - lienzo.current.clientWidth / 2 + (NODO_ANCHO * zoom) / 2),
      top: Math.max(0, p.y * zoom - lienzo.current.clientHeight / 2 + (NODO_ALTO * zoom) / 2),
      behavior: "smooth",
    });
  }, [elegido, dibujo, zoom]);

  const ir = (cambios: { camino?: string; seccion?: string; modulo?: string | null }) => {
    const p = new URLSearchParams(params);
    if (cambios.camino !== undefined) {
      p.set("camino", cambios.camino);
      p.delete("seccion");
    }
    if (cambios.seccion !== undefined) p.set("seccion", cambios.seccion);
    if (cambios.modulo === null) p.delete("modulo");
    else if (cambios.modulo !== undefined) p.set("modulo", cambios.modulo);
    setParams(p, { replace: false });
  };
  const irAModulo = (id: string) => {
    const u = donde.get(id);
    if (u) ir({ camino: u.camino, seccion: u.seccion, modulo: id });
    setBusqueda("");
  };

  if (error) return <Marco><p role="alert" className="text-center text-red-600">{t("mapaTemario.error")}</p></Marco>;
  if (!datos || !camino || !seccion || !dibujo) return <Marco><p className="text-center text-[var(--c-muted)]">{t("mapaTemario.cargando")}</p></Marco>;

  const modulos = datos.modulos;
  const total = (c: CaminoMapa) => c.secciones.reduce((n, s) => n + s.modulos.length, 0);
  const hechos = (c: CaminoMapa) => c.secciones.reduce((n, s) => n + s.modulos.filter((m) => progreso.get(m) === "completado").length, 0);
  const enSeccion = new Set(seccion.modulos);
  const entradas = [...new Set(seccion.modulos.flatMap((m) => modulos[m]?.d ?? []).filter((d) => !enSeccion.has(d) && modulos[d]))].sort((a, b) =>
    modulos[a].t.localeCompare(modulos[b].t, "es"),
  );
  const info = elegido ? modulos[elegido] : null;

  const claseNodo = (id: string) => {
    const base = "absolute flex flex-col justify-center rounded-lg border px-2 py-1 text-left text-xs leading-tight shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500";
    const estado = progreso.get(id);
    const color =
      modulos[id]?.x
        ? "border-amber-500 bg-amber-50"
        : estado === "completado"
          ? "border-green-600 bg-green-50"
          : estado === "en_progreso"
            ? "border-blue-500 bg-blue-50"
            : "border-[var(--c-border-strong)] bg-[var(--c-surface)]";
    const foco =
      id === elegido
        ? " ring-2 ring-blue-600"
        : resaltados && !resaltados.antes.has(id) && !resaltados.despues.has(id)
          ? " opacity-35"
          : "";
    return `${base} ${color}${foco}`;
  };

  return (
    <Marco>
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-[var(--c-text)]">{t("mapaTemario.titulo")}</h1>
        <p className="text-sm text-[var(--c-muted)] leading-relaxed">
          {interpolar(t("mapaTemario.intro"), { modulos: String(Object.keys(modulos).length), caminos: String(datos.caminos.length) })}
        </p>
        <div className="relative max-w-md">
          <label className="sr-only" htmlFor="buscar-modulo">{t("mapaTemario.buscar")}</label>
          <input
            id="buscar-modulo"
            type="search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder={t("mapaTemario.buscar")}
            className="w-full rounded-lg border border-[var(--c-border-strong)] bg-[var(--c-surface)] px-3 py-2 text-sm"
          />
          {resultados.length > 0 && (
            <ul className="absolute z-20 mt-1 w-full overflow-hidden rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] shadow-lg">
              {resultados.map((id) => {
                const u = donde.get(id);
                const c = datos.caminos.find((x) => x.id === u?.camino);
                return (
                  <li key={id}>
                    <button type="button" onClick={() => irAModulo(id)} className="block w-full px-3 py-2 text-left text-sm hover:bg-[var(--c-hover)]">
                      <span className="text-[var(--c-text)]">{modulos[id].t}</span>
                      {c && <span className="block text-xs text-[var(--c-muted)]">{tituloDeCamino(c)}</span>}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </header>

      <div className="mt-6 grid gap-6 md:grid-cols-[16rem_1fr]">
        <nav aria-label={t("mapaTemario.caminos")} className="md:max-h-[75vh] md:overflow-y-auto">
          <label className="sr-only md:hidden" htmlFor="elegir-camino">{t("mapaTemario.caminos")}</label>
          <select
            id="elegir-camino"
            className="w-full rounded-lg border border-[var(--c-border-strong)] bg-[var(--c-surface)] px-3 py-2 text-sm md:hidden"
            value={camino.id}
            onChange={(e) => ir({ camino: e.target.value, modulo: null })}
          >
            {datos.caminos.map((c) => (
              <option key={c.id} value={c.id}>{tituloDeCamino(c)} ({total(c)})</option>
            ))}
          </select>
          <ul className="hidden space-y-1 md:block">
            {datos.caminos.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  onClick={() => ir({ camino: c.id, modulo: null })}
                  aria-current={c.id === camino.id ? "true" : undefined}
                  className={`w-full rounded-lg px-3 py-2 text-left text-sm ${c.id === camino.id ? "bg-blue-600 text-white" : "text-[var(--c-text)] hover:bg-[var(--c-hover)]"}`}
                >
                  <span className="block leading-snug">{tituloDeCamino(c)}</span>
                  <span className={`text-xs ${c.id === camino.id ? "text-blue-100" : "text-[var(--c-muted)]"}`}>
                    {progreso.size > 0
                      ? interpolar(t("mapaTemario.hechos"), { hechos: String(hechos(c)), total: String(total(c)) })
                      : interpolar(t("mapaTemario.cantidad"), { total: String(total(c)) })}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <section className="min-w-0 space-y-3">
          <h2 className="text-lg font-semibold text-[var(--c-text)]">{tituloDeCamino(camino)}</h2>
          {camino.secciones.length > 1 && (
            <div role="tablist" aria-label={t("mapaTemario.secciones")} className="flex flex-wrap gap-2">
              {camino.secciones.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={s.id === seccion.id}
                  onClick={() => ir({ seccion: s.id, modulo: null })}
                  className={`rounded-full border px-3 py-1 text-xs ${s.id === seccion.id ? "border-blue-600 bg-blue-600 text-white" : "border-[var(--c-border-strong)] text-[var(--c-text)] hover:bg-[var(--c-hover)]"}`}
                >
                  {s.titulo ?? t("mapaTemario.general")} · {s.modulos.length}
                </button>
              ))}
            </div>
          )}

          {entradas.length > 0 && (
            <details className="text-sm">
              <summary className="cursor-pointer text-[var(--c-muted)]">{interpolar(t("mapaTemario.vieneDe"), { cantidad: String(entradas.length) })}</summary>
              <div className="mt-2 flex flex-wrap gap-2">
                {entradas.map((id) => (
                  <button key={id} type="button" onClick={() => irAModulo(id)} className="rounded-full border border-dashed border-[var(--c-border-strong)] px-3 py-1 text-xs text-[var(--c-text)] hover:bg-[var(--c-hover)]">
                    {modulos[id].t}
                  </button>
                ))}
              </div>
            </details>
          )}

          <div className="flex items-center gap-2 text-xs text-[var(--c-muted)]">
            <button type="button" onClick={() => setZoom((z) => Math.max(0.4, +(z - 0.2).toFixed(1)))} className="rounded border border-[var(--c-border-strong)] px-2 py-1" aria-label={t("mapaTemario.alejar")}>−</button>
            <span>{Math.round(zoom * 100)}%</span>
            <button type="button" onClick={() => setZoom((z) => Math.min(1.6, +(z + 0.2).toFixed(1)))} className="rounded border border-[var(--c-border-strong)] px-2 py-1" aria-label={t("mapaTemario.acercar")}>+</button>
            <span className="ml-3 hidden sm:inline">{t("mapaTemario.ayuda")}</span>
          </div>

          <div ref={lienzo} className="relative h-[60vh] overflow-auto rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)]" data-testid="lienzo-mapa">
            <div style={{ width: dibujo.ancho * zoom, height: dibujo.alto * zoom }}>
              <div className="relative origin-top-left" style={{ width: dibujo.ancho, height: dibujo.alto, transform: `scale(${zoom})` }}>
                <svg width={dibujo.ancho} height={dibujo.alto} className="absolute inset-0" aria-hidden="true">
                  {dibujo.aristas.map(({ desde, hasta }) => {
                    const a = dibujo.posiciones.get(desde)!;
                    const b = dibujo.posiciones.get(hasta)!;
                    const x1 = a.x + NODO_ANCHO;
                    const y1 = a.y + NODO_ALTO / 2;
                    const x2 = b.x;
                    const y2 = b.y + NODO_ALTO / 2;
                    const medio = (x1 + x2) / 2;
                    const activa = !resaltados || ((resaltados.antes.has(desde) || desde === elegido) && (resaltados.antes.has(hasta) || hasta === elegido)) || ((desde === elegido || resaltados.despues.has(desde)) && resaltados.despues.has(hasta));
                    return (
                      <path
                        key={`${desde}>${hasta}`}
                        d={`M${x1},${y1} C${medio},${y1} ${medio},${y2} ${x2},${y2}`}
                        fill="none"
                        stroke={activa && resaltados ? "#2563eb" : "#94a3b8"}
                        strokeOpacity={activa ? 0.9 : 0.15}
                        strokeWidth={activa && resaltados ? 2 : 1.2}
                      />
                    );
                  })}
                </svg>
                {seccion.modulos.map((id) => {
                  const p = dibujo.posiciones.get(id)!;
                  const m = modulos[id];
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => ir({ modulo: id === elegido ? null : id })}
                      aria-pressed={id === elegido}
                      title={m.t}
                      className={claseNodo(id)}
                      style={{ left: p.x, top: p.y, width: NODO_ANCHO, height: NODO_ALTO }}
                    >
                      <span className="line-clamp-2 font-medium text-[var(--c-text)]">{m.x ? `🏆 ${m.t}` : m.t}</span>
                      <span className="truncate text-[10px] text-[var(--c-muted)]">
                        {nombreMateria(m.m)}
                        {m.n ? ` · ${nivelLegible(m.n)}` : ""}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {info && elegido && (
            <aside className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4 text-sm space-y-2" aria-live="polite">
              <p className="font-semibold text-[var(--c-text)]">{info.t}</p>
              <p className="text-[var(--c-muted)]">
                {nombreMateria(info.m)}
                {info.n ? ` · ${nivelLegible(info.n)}` : ""}
                {progreso.get(elegido) ? ` · ${t(progreso.get(elegido) === "completado" ? "mapaTemario.completado" : "mapaTemario.enProgreso")}` : ""}
              </p>
              <p className="text-[var(--c-muted)]">
                {interpolar(t("mapaTemario.resumen"), {
                  antes: String(resaltados?.antes.size ?? 0),
                  despues: String(resaltados?.despues.size ?? 0),
                })}
              </p>
              <Link to={`/modulos/${encodeURIComponent(elegido)}`} className="inline-block rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
                {t("mapaTemario.abrir")}
              </Link>
            </aside>
          )}

          <ul className="flex flex-wrap gap-4 text-xs text-[var(--c-muted)]" aria-label={t("mapaTemario.referencias")}>
            <li className="flex items-center gap-1"><span className="inline-block h-3 w-3 rounded border border-[var(--c-border-strong)] bg-[var(--c-surface)]" />{t("mapaTemario.refModulo")}</li>
            <li className="flex items-center gap-1"><span className="inline-block h-3 w-3 rounded border border-amber-500 bg-amber-50" />{t("mapaTemario.refExamen")}</li>
            {user && <li className="flex items-center gap-1"><span className="inline-block h-3 w-3 rounded border border-blue-500 bg-blue-50" />{t("mapaTemario.enProgreso")}</li>}
            {user && <li className="flex items-center gap-1"><span className="inline-block h-3 w-3 rounded border border-green-600 bg-green-50" />{t("mapaTemario.completado")}</li>}
          </ul>
        </section>
      </div>
    </Marco>
  );
}

function Marco({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 bg-[var(--c-bg)]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
}
