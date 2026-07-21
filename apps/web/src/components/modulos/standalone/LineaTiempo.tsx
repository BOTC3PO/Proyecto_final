import { useId, useMemo, useState } from "react";
import { type LineaTiempoConfig, type LineaTiempoCategoria, type LineaTiempoEvento } from "./types";
import { GuardarComoMaterial } from "../../materiales/GuardarComoMaterial";

import { useI18n } from "../../../i18n/I18nContext";

// Paleta de categorías = codificación de contenido de la línea de tiempo (no
// chrome), igual que el resto de la app usa colores fijos para datos.
const CATEGORY_PALETTE = ["#c1622d", "#3d6b6b", "#7a8a4f", "#8a5a7a", "#c9a227", "#5a6b8a"];
const SIN_CATEGORIA_COLOR = "#94a3b8";

function makeId() {
  return Math.random().toString(36).slice(2, 9);
}

// ── Normalización / migración de eventos legado ─────────────────────
// Antes de esta versión un evento tenía `fecha: string` libre (a veces un
// año, a veces "Siglo XVIII") y `tags`. El editor nuevo trabaja con un año
// numérico (permite ubicar el evento proporcionalmente en el eje). Los
// eventos ya guardados con la forma vieja se siguen leyendo: se intenta
// extraer un año de `fecha`, y si no hay uno, el evento queda sin año
// (se ubica por orden en vez de por proporción).
type EventoLegado = Partial<LineaTiempoEvento> & { fecha?: string };

function normalizeEvento(raw: EventoLegado): LineaTiempoEvento {
  const anio = typeof raw.anio === "number"
    ? raw.anio
    : (() => {
        const m = typeof raw.fecha === "string" ? raw.fecha.match(/-?\d{3,4}/) : null;
        return m ? Number(m[0]) : null;
      })();
  const fechaLibre = typeof raw.fecha === "string" ? raw.fecha.trim() : "";
  const detalle = raw.detalle ?? (fechaLibre && fechaLibre !== String(anio) ? fechaLibre : undefined);
  return {
    id: raw.id ?? makeId(),
    titulo: raw.titulo ?? "",
    anio,
    detalle,
    descripcion: raw.descripcion,
    categoriaId: raw.categoriaId,
  };
}

// ── Posicionamiento en el eje ────────────────────────────────────────

type Posicionado = LineaTiempoEvento & {
  color: string;
  etiquetaAnio: string;
  leftPercent: number;
  hCardTop: number;
  hCardTransform: string;
  hConnectorTop: number;
  topPx: number;
  vCardTransform: string;
  vConnTransform: string;
};

function computePositions(
  eventos: LineaTiempoEvento[],
  categorias: LineaTiempoCategoria[],
  trackHeightV: number,
  trackWidthH: number,
  aC: string,
): Posicionado[] {
  const sorted = [...eventos].sort((a, b) => {
    if (a.anio === null && b.anio === null) return 0;
    if (a.anio === null) return 1;
    if (b.anio === null) return -1;
    return a.anio - b.anio;
  });
  const n = sorted.length;
  const conAnio = sorted.filter((e) => e.anio !== null);
  const minAnio = conAnio.length ? conAnio[0].anio! : 0;
  const maxAnio = conAnio.length ? conAnio[conAnio.length - 1].anio! : 0;
  const range = maxAnio - minAnio;
  const catMap = new Map(categorias.map((c) => [c.id, c] as const));
  const axisY = 250;
  const gap = 30;
  const padV = 70;
  // Deja espacio suficiente para que la tarjeta del primer/último evento
  // (ancho fijo, centrada con transform -50%) no quede recortada por el
  // borde del contenedor con scroll horizontal.
  const cardHalfPx = 95 + 10;
  const padPercent = Math.min(45, (cardHalfPx / trackWidthH) * 100);

  return sorted.map((ev, idx) => {
    const ratio = ev.anio !== null && range > 0
      ? (ev.anio - minAnio) / range
      : (n > 1 ? idx / (n - 1) : 0.5);
    const isAlt = idx % 2 === 0;
    const leftPercent = padPercent + ratio * (100 - 2 * padPercent);
    const hCardTop = isAlt ? axisY - gap : axisY + gap;
    const hCardTransform = isAlt ? "translate(-50%, -100%)" : "translate(-50%, 0%)";
    const hConnectorTop = isAlt ? axisY - gap : axisY;
    const topPx = padV + ratio * (trackHeightV - 2 * padV);
    const vCardTransform = isAlt ? "translate(calc(-100% - 30px), -50%)" : "translate(30px, -50%)";
    const vConnTransform = isAlt ? "translate(-100%, -1px)" : "translate(0%, -1px)";
    const categoria = ev.categoriaId ? catMap.get(ev.categoriaId) : undefined;
    const color = categoria ? categoria.color : SIN_CATEGORIA_COLOR;
    const anioTexto = ev.anio === null ? null : (ev.anio < 0 ? `${Math.abs(ev.anio)} ${aC}` : String(ev.anio));
    const etiquetaAnio = [anioTexto, ev.detalle].filter(Boolean).join(" · ");
    return {
      ...ev, color, etiquetaAnio,
      leftPercent, hCardTop, hCardTransform, hConnectorTop,
      topPx, vCardTransform, vConnTransform,
    };
  });
}

function pillCls(active: boolean) {
  return `px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] ${
    active
      ? "bg-[var(--c-primary)] text-[var(--c-accent-fg)] border-[var(--c-primary)]"
      : "bg-transparent text-[var(--c-text)] border-[var(--c-border)] hover:bg-[var(--c-hover)]"
  }`;
}

// ── Track visual, compartido entre alumno (readonly) y editor ───────

function LineaTiempoTrack({
  eventos, categorias, orientacion, onEventClick,
}: {
  eventos: LineaTiempoEvento[];
  categorias: LineaTiempoCategoria[];
  orientacion: "horizontal" | "vertical";
  onEventClick?: (ev: LineaTiempoEvento) => void;
}) {
  const { t } = useI18n();
  const n = eventos.length;

  if (n === 0) {
    return <p className="text-sm text-[var(--c-muted)] italic py-8 text-center">{t("lineaTiempo.estaLineaDeTiempoTodavia")}</p>;
  }

  const trackHeightV = Math.max(460, n * 130);
  const trackWidthH = Math.max(700, n * 210);
  const positioned = computePositions(eventos, categorias, trackHeightV, trackWidthH, t("lineaTiempo.aC"));
  const interactive = !!onEventClick;

  const renderCard = (p: Posicionado) => (
    <button
      key={p.id}
      type="button"
      disabled={!interactive}
      onClick={interactive ? () => onEventClick!(p) : undefined}
      className={`absolute text-left rounded-lg border bg-[var(--c-surface)] border-[var(--c-border)] px-3 py-2.5 shadow-sm ${
        interactive ? "cursor-pointer hover:border-[var(--c-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]" : "cursor-default"
      }`}
      style={{
        borderLeftWidth: 4,
        borderLeftColor: p.color,
        left: orientacion === "horizontal" ? `${p.leftPercent}%` : "50%",
        top: orientacion === "horizontal" ? p.hCardTop : p.topPx,
        transform: orientacion === "horizontal" ? p.hCardTransform : p.vCardTransform,
        width: orientacion === "horizontal" ? 190 : 250,
      }}
    >
      <p className="text-[11px] font-bold" style={{ color: p.color }}>{p.etiquetaAnio || "—"}</p>
      <p className="text-sm font-semibold text-[var(--c-text)] mt-0.5">{p.titulo || t("comun.sinTitulo")}</p>
      {p.descripcion && <p className="text-xs text-[var(--c-muted)] mt-0.5 line-clamp-3">{p.descripcion}</p>}
    </button>
  );

  if (orientacion === "horizontal") {
    return (
      <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] py-5 overflow-x-auto">
        <div className="relative" style={{ height: 480, width: trackWidthH, minWidth: "100%" }}>
          <div className="absolute left-0 right-0 h-0.5 bg-[var(--c-border)]" style={{ top: 250 }} aria-hidden="true" />
          {positioned.map((p) => (
            <div key={p.id}>
              <div
                className="absolute w-0.5"
                style={{ left: `${p.leftPercent}%`, top: p.hConnectorTop, height: 30, background: p.color, transform: "translateX(-50%)" }}
                aria-hidden="true"
              />
              <div
                className="absolute w-3 h-3 rounded-full border-2 border-[var(--c-surface)]"
                style={{ left: `${p.leftPercent}%`, top: 250, background: p.color, transform: "translate(-50%,-50%)" }}
                aria-hidden="true"
              />
              {renderCard(p)}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5">
      <div className="relative mx-auto" style={{ height: trackHeightV, maxWidth: 620 }}>
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--c-border)]" style={{ transform: "translateX(-50%)" }} aria-hidden="true" />
        {positioned.map((p) => (
          <div key={p.id}>
            <div
              className="absolute h-0.5"
              style={{ left: "50%", top: p.topPx, width: 30, background: p.color, transform: p.vConnTransform }}
              aria-hidden="true"
            />
            <div
              className="absolute w-3 h-3 rounded-full border-2 border-[var(--c-surface)]"
              style={{ left: "50%", top: p.topPx, background: p.color, transform: "translate(-50%,-50%)" }}
              aria-hidden="true"
            />
            {renderCard(p)}
          </div>
        ))}
      </div>
    </div>
  );
}

function CategoriaChips({ categorias }: { categorias: LineaTiempoCategoria[] }) {
  if (categorias.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {categorias.map((c) => (
        <span key={c.id} className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-full bg-[var(--c-surface-3)] text-[var(--c-text)]">
          <span className="w-2 h-2 rounded-full" style={{ background: c.color }} aria-hidden="true" />
          {c.nombre}
        </span>
      ))}
    </div>
  );
}

// ── Alumno (readonly) ────────────────────────────────────────────────

type AlumnoProps = { config: LineaTiempoConfig };

function LineaTiempoAlumno({ config }: AlumnoProps) {
  const { t } = useI18n();
  const eventos = useMemo(() => (config.eventos ?? []).map(normalizeEvento), [config.eventos]);
  const categorias = config.categorias ?? [];
  const [orientacion, setOrientacion] = useState<"horizontal" | "vertical">(config.orientacion ?? "horizontal");

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between flex-wrap gap-2">
        {config.titulo && <h3 className="text-base font-semibold text-[var(--c-text)]">{config.titulo}</h3>}
        <div className="flex gap-1 ml-auto">
          <button type="button" aria-pressed={orientacion === "horizontal"} onClick={() => setOrientacion("horizontal")} className={pillCls(orientacion === "horizontal")}>
            {t("lineaTiempo.horizontal")}
          </button>
          <button type="button" aria-pressed={orientacion === "vertical"} onClick={() => setOrientacion("vertical")} className={pillCls(orientacion === "vertical")}>
            {t("lineaTiempo.vertical")}
          </button>
        </div>
      </div>
      <CategoriaChips categorias={categorias} />
      <LineaTiempoTrack eventos={eventos} categorias={categorias} orientacion={orientacion} />
    </div>
  );
}

// ── Editor (docente) ─────────────────────────────────────────────────

type EditorProps = {
  config?: LineaTiempoConfig;
  onChange: (config: LineaTiempoConfig) => void;
  // PLAN-G §1 (item 25) — si la línea de tiempo se abrió desde un
  // material guardado, permite que "Guardar como material" cree una
  // versión nueva en vez de un material nuevo.
  materialId?: string | null;
};

function emptyConfig(): LineaTiempoConfig {
  return { tool: "linea-tiempo", titulo: "", eventos: [] };
}

const FIELD_CLS =
  "w-full rounded border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-2 py-1.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] focus:border-[var(--c-primary)]";

type Draft = { id: string | null; titulo: string; anio: string; detalle: string; descripcion: string; categoriaId: string };

function LineaTiempoEditor({ config, onChange, materialId }: EditorProps) {
  const { t } = useI18n();
  const cfg = config ?? emptyConfig();
  const eventos = useMemo(() => (cfg.eventos ?? []).map(normalizeEvento), [cfg.eventos]);
  const categorias = cfg.categorias ?? [];
  const orientacion = cfg.orientacion ?? "horizontal";
  const tituloId = useId();
  const [draft, setDraft] = useState<Draft | null>(null);
  const [newCatName, setNewCatName] = useState("");
  const [newCatColor, setNewCatColor] = useState(CATEGORY_PALETTE[0]);

  const update = (partial: Partial<LineaTiempoConfig>) => onChange({ ...cfg, ...partial });

  const openNew = () => setDraft({ id: null, titulo: "", anio: "", detalle: "", descripcion: "", categoriaId: categorias[0]?.id ?? "" });
  const openEdit = (ev: LineaTiempoEvento) =>
    setDraft({
      id: ev.id,
      titulo: ev.titulo,
      anio: ev.anio === null ? "" : String(ev.anio),
      detalle: ev.detalle ?? "",
      descripcion: ev.descripcion ?? "",
      categoriaId: ev.categoriaId ?? "",
    });
  const closePanel = () => setDraft(null);

  const saveDraft = () => {
    if (!draft || !draft.titulo.trim() || draft.anio.trim() === "") return;
    const anioNum = Number(draft.anio);
    if (Number.isNaN(anioNum)) return;
    const nuevo: LineaTiempoEvento = {
      id: draft.id ?? makeId(),
      titulo: draft.titulo.trim(),
      anio: anioNum,
      detalle: draft.detalle.trim() || undefined,
      descripcion: draft.descripcion.trim() || undefined,
      categoriaId: draft.categoriaId || undefined,
    };
    const nextEventos = draft.id
      ? eventos.map((e) => (e.id === draft.id ? nuevo : e))
      : [...eventos, nuevo];
    update({ eventos: nextEventos });
    setDraft(null);
  };

  const deleteDraft = () => {
    if (!draft?.id) return;
    update({ eventos: eventos.filter((e) => e.id !== draft.id) });
    setDraft(null);
  };

  const addCategoria = () => {
    const nombre = newCatName.trim();
    if (!nombre) return;
    update({ categorias: [...categorias, { id: makeId(), nombre, color: newCatColor }] });
    setNewCatName("");
  };
  const removeCategoria = (id: string) => update({ categorias: categorias.filter((c) => c.id !== id) });

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor={tituloId} className="block text-xs font-medium text-[var(--c-muted)] mb-1">{t("lineaTiempo.tituloOpcional")}</label>
        <input
          id={tituloId}
          className={`${FIELD_CLS} px-3 py-2`}
          value={cfg.titulo ?? ""}
          placeholder={t("lineaTiempo.tituloDeLaLineaDe")}
          onChange={(e) => update({ titulo: e.target.value })}
        />
      </div>

      <GuardarComoMaterial
        tipo="timeline"
        defaultTitulo={cfg.titulo || t("lineaTiempo.lineaDeTiempo")}
        materialId={materialId}
        getContenido={() => cfg}
      />

      {/* Categorías */}
      <div className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface-3)] p-3 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-[var(--c-muted)]">{t("lineaTiempo.categorias")}</span>
        {categorias.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {categorias.map((c) => (
              <span key={c.id} className="inline-flex items-center gap-1.5 text-xs pl-2 pr-1 py-1 rounded-full bg-[var(--c-surface)] border border-[var(--c-border)]">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: c.color }} aria-hidden="true" />
                {c.nombre}
                <button
                  type="button"
                  onClick={() => removeCategoria(c.id)}
                  aria-label={`${t("lineaTiempo.eliminarCategoria")} ${c.nombre}`}
                  className="text-[var(--c-text-3)] hover:text-[var(--c-danger)] px-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded-sm"
                >×</button>
              </span>
            ))}
          </div>
        )}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORY_PALETTE.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setNewCatColor(c)}
              aria-label={t("lineaTiempo.elegirColor")}
              aria-pressed={newCatColor === c}
              className="w-5 h-5 rounded-full border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
              style={{ background: c, borderColor: newCatColor === c ? "var(--c-text)" : "transparent" }}
            />
          ))}
          <input
            className={`${FIELD_CLS} w-36`}
            value={newCatName}
            placeholder={t("lineaTiempo.nuevaCategoria")}
            onChange={(e) => setNewCatName(e.target.value)}
          />
          <button
            type="button"
            onClick={addCategoria}
            className="text-xs rounded-md border border-[var(--c-border)] px-2.5 py-1.5 text-[var(--c-text)] hover:bg-[var(--c-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
          >{t("profesorAulaConfiguracion.agregar")}</button>
        </div>
      </div>

      {/* Orientación + agregar evento */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex gap-1">
          <button type="button" aria-pressed={orientacion === "horizontal"} onClick={() => update({ orientacion: "horizontal" })} className={pillCls(orientacion === "horizontal")}>
            {t("lineaTiempo.horizontal")}
          </button>
          <button type="button" aria-pressed={orientacion === "vertical"} onClick={() => update({ orientacion: "vertical" })} className={pillCls(orientacion === "vertical")}>
            {t("lineaTiempo.vertical")}
          </button>
        </div>
        <button
          type="button"
          onClick={openNew}
          className="rounded-md bg-[var(--c-primary)] text-[var(--c-accent-fg)] text-sm font-semibold px-3.5 py-2 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
        >{t("lineaTiempo.agregarEvento")}</button>
      </div>

      <LineaTiempoTrack eventos={eventos} categorias={categorias} orientacion={orientacion} onEventClick={openEdit} />

      {draft && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t("lineaTiempo.evento")}
          onClick={closePanel}
          className="fixed inset-0 z-50 flex justify-end bg-[color-mix(in_srgb,var(--c-text)_35%,transparent)]"
        >
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-sm h-full bg-[var(--c-surface)] p-6 overflow-y-auto space-y-4">
            <h4 className="text-lg font-semibold text-[var(--c-text)]">{t("lineaTiempo.evento")}</h4>
            <div>
              <label className="block text-xs text-[var(--c-muted)] mb-1">{t("comun.titulo")}</label>
              <input
                className={FIELD_CLS}
                value={draft.titulo}
                placeholder={t("lineaTiempo.ejRevolucionFrancesa")}
                onChange={(e) => setDraft({ ...draft, titulo: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs text-[var(--c-muted)] mb-1">{t("lineaTiempo.anioNegativoAC")}</label>
                <input
                  type="number"
                  className={FIELD_CLS}
                  value={draft.anio}
                  placeholder="1969"
                  onChange={(e) => setDraft({ ...draft, anio: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs text-[var(--c-muted)] mb-1">{t("comun.detalleOpcional")}</label>
                <input
                  className={FIELD_CLS}
                  value={draft.detalle}
                  placeholder={t("lineaTiempo.ej20DeJulio")}
                  onChange={(e) => setDraft({ ...draft, detalle: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-[var(--c-muted)] mb-1">{t("tablaPeriodica.categoria")}</label>
              <select
                className={FIELD_CLS}
                value={draft.categoriaId}
                onChange={(e) => setDraft({ ...draft, categoriaId: e.target.value })}
              >
                <option value="">{t("moduloEditor.sinCategoria")}</option>
                {categorias.map((c) => <option key={c.id} value={c.id}>{c.nombre}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs text-[var(--c-muted)] mb-1">{t("comun.descripcionOpcional")}</label>
              <textarea
                rows={4}
                className={`${FIELD_CLS} resize-y`}
                value={draft.descripcion}
                onChange={(e) => setDraft({ ...draft, descripcion: e.target.value })}
              />
            </div>
            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={saveDraft}
                disabled={!draft.titulo.trim() || draft.anio.trim() === ""}
                className="flex-1 rounded-md bg-[var(--c-primary)] text-[var(--c-accent-fg)] font-semibold py-2 text-sm disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
              >{t("comun.guardar")}</button>
              <button
                type="button"
                onClick={closePanel}
                className="rounded-md border border-[var(--c-border)] px-4 py-2 text-sm text-[var(--c-text)] hover:bg-[var(--c-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
              >{t("comun.cancelar")}</button>
              {draft.id && (
                <button
                  type="button"
                  onClick={deleteDraft}
                  className="rounded-md px-3 py-2 text-sm text-[var(--c-danger)] hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
                >{t("comun.eliminar")}</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Export ────────────────────────────────────────────────────────────

type Props =
  | { config: LineaTiempoConfig; onChange?: never; materialId?: never }
  | {
      config?: LineaTiempoConfig;
      onChange: (config: LineaTiempoConfig) => void;
      materialId?: string | null;
    };

export function LineaTiempo({ config, onChange, materialId }: Props) {
  if (onChange !== undefined) {
    return <LineaTiempoEditor config={config} onChange={onChange} materialId={materialId} />;
  }
  if (!config) return null;
  return <LineaTiempoAlumno config={config} />;
}
