/**
 * editor/PlantillaEditorShell.tsx — WO-V2 layout "Tiza" para el editor de
 * plantillas VBLang. Reestructura el editor al layout de 3 paneles del
 * prototipo "Tiza · Editor de consignas" de Claude:
 *
 *   ┌──────────────────────────────────────────────────────────────────┐
 *   │  TOP BAR  (logo · breadcrumb · accent · theme · preview · save) │
 *   ├──────────┬─────────────────────────────────────┬────────────────┤
 *   │  RAIL    │   CENTER (cards de la pregunta)     │  PROPERTY GRID │
 *   │ (212px)  │   (reusa EditorPlantilla)           │   + Preview    │
 *   └──────────┴─────────────────────────────────────┴────────────────┘
 *
 * El componente es PURO chrome (layout + estado UI). NO toca la lógica de
 * datos del editor: la lógica de `EditorPlantilla` se reusa íntegra en el
 * panel central; los read/write del property grid reusan `plantillaFields`.
 *
 * Tokens-only (--c-*, --r-*, --shadow, --font-*). Sin colores hardcodeados.
 * El acento se conmuta vía `data-accent` (ver WO-V1). El tema claro/oscuro
 * se conmuta con la prop `theme`.
 *
 * Responsive: en <lg el rail y el property grid colapsan a barras
 * apilables; el center mantiene foco.
 */
import {
  useEffect,
  useId,
  useMemo,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import {
  QUESTION_TYPE_SCHEMAS,
  type Field,
  type Plantilla,
  type TextField,
} from "@vb/vblang";
import EditorPlantilla from "./EditorPlantilla";
import {
  readNumberField,
  readTextField,
  writeNumberField,
  writeTextField,
} from "../components/vblang/plantillaFields";
import { useEditorClasico } from "./useEditorClasico";
import PlantillaEditorSchema from "../components/vblang/PlantillaEditorSchema";
import VistaAlumnoOverlay from "../components/modulos/VistaAlumnoOverlay";
import type { ModuleQuiz } from "../domain/module/module.types";

/* ─── tipos públicos ────────────────────────────────────────────────── */

export type AccentKey = "azul" | "teal" | "violeta" | "naranja" | "verde";
export type ShellTheme = "light" | "dark";

export interface RailItem {
  id: string;
  /** Título visible (ej. enunciado truncado). */
  title: string;
  /** Subtítulo / kind ("Numérica", "Opción múltiple", etc.). */
  kind?: string;
  /** Acento del tema del item (color de la barrita lateral). */
  accent?: string;
  /** Tono del icono de la pill (foreground). */
  iconFg?: string;
  /** Tono del icono de la pill (background). */
  iconBg?: string;
}

export interface PlantillaEditorShellProps {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;

  /* ── chrome de la barra superior ── */
  /** Items del breadcrumb ("Materia", "1.º año", "Multiplicación"). */
  breadcrumb?: string[];
  /** Acento activo (default "azul"). */
  accent?: AccentKey;
  /** Cambia el acento (data-accent) — opcional, no-op si falta. */
  onAccentChange?: (key: AccentKey) => void;
  /** Tema activo (default "light"). */
  theme?: ShellTheme;
  /** Cambia el tema — opcional, no-op si falta. */
  onThemeChange?: (theme: ShellTheme) => void;

  /* ── rail izquierdo ── */
  rail?: RailItem[];
  activeRailId?: string;
  onSelectRail?: (id: string) => void;
  onAddRailItem?: () => void;

  /* ── guardar ── */
  onSave?: () => void;
  saving?: boolean;
  savedHint?: string | null;

  /* ── vista del alumno (overlay modal reusado) ── */
  /** Quizzes para la vista del alumno (opcional). Si falta, la vista se abre vacía. */
  previewQuizzes?: ModuleQuiz[];
  /** Título para la vista del alumno. */
  previewTitle?: string;
  /** Forzar la apertura del preview (default false). */
  previewOpen?: boolean;

  /* ── clases / overrides ── */
  className?: string;
  /** Render del centro: default = EditorPlantilla (o clásico). */
  renderCenter?: (plantilla: Plantilla, onChange: (p: Plantilla) => void) => ReactNode;
}

/* ─── constantes visuales ────────────────────────────────────────────── */

const ACCENT_HEX: Record<AccentKey, string> = {
  azul: "#2f6df6",
  teal: "#0f766e",
  violeta: "#7c3aed",
  naranja: "#e0532f",
  verde: "#0e9f6e",
};
const ACCENT_DARK_HEX: Record<AccentKey, string> = {
  azul: "#5b8dee",
  teal: "#2dd4bf",
  violeta: "#a78bfa",
  naranja: "#fb7c5a",
  verde: "#34d399",
};
const ACCENT_NAME: Record<AccentKey, string> = {
  azul: "Azul",
  teal: "Teal",
  violeta: "Violeta",
  naranja: "Naranja",
  verde: "Verde",
};
const ACCENT_KEYS: AccentKey[] = ["azul", "teal", "violeta", "naranja", "verde"];

/* ─── estilos (todo tokens, inline para que sea obvio de auditar) ───── */

const rootStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  minHeight: 0,
  background: "var(--c-surface-2)",
  color: "var(--c-text)",
  fontFamily: "var(--font-sans)",
  borderRadius: "var(--r-lg)",
  border: "1px solid var(--c-border)",
  boxShadow: "var(--shadow)",
  overflow: "hidden",
};

const topBarStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 14,
  height: 60,
  flex: "0 0 auto",
  padding: "0 18px",
  borderBottom: "1px solid var(--c-border)",
  background: "var(--c-surface)",
};

const bodyStyle: CSSProperties = {
  display: "flex",
  flex: "1 1 auto",
  minHeight: 0,
};

const railStyle: CSSProperties = {
  width: 212,
  flex: "0 0 212px",
  borderRight: "1px solid var(--c-border)",
  background: "var(--c-surface-2)",
  padding: "16px 12px",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: 4,
};

const centerWrapStyle: CSSProperties = {
  flex: "1 1 auto",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  background: "var(--c-surface-2)",
  minHeight: 0,
};

const centerScrollStyle: CSSProperties = {
  flex: "1 1 auto",
  minHeight: 0,
  overflowY: "auto",
  padding: "26px 30px",
};

const questionCardStyle: CSSProperties = {
  maxWidth: 560,
  margin: "0 auto",
  background: "var(--c-surface)",
  border: "1px solid var(--c-border)",
  borderTop: "3px solid var(--c-accent)",
  borderRadius: "var(--r-lg)",
  boxShadow: "var(--shadow)",
  padding: 24,
  display: "flex",
  flexDirection: "column",
  gap: 18,
};

const auxStyle: CSSProperties = {
  width: 360,
  flex: "0 0 360px",
  borderLeft: "1px solid var(--c-border)",
  background: "var(--c-surface)",
  display: "flex",
  flexDirection: "column",
  minHeight: 0,
  overflow: "hidden",
};

/* ─── helpers de campos para el property grid ───────────────────────── */

/** Devuelve el field por `key` si está en el schema del tipo actual. */
function fieldByKey(p: Plantilla, key: string): TextField | null {
  const schema = QUESTION_TYPE_SCHEMAS[p.tipoInferido];
  if (!schema) return null;
  const f = schema.fields.find((x) => x.key === key);
  return f && f.kind === "text" ? (f as TextField) : null;
}

/** NumberField mínima para escribir números (tolerancia). */
function numberFieldByKey(p: Plantilla, key: string): Field | null {
  const schema = QUESTION_TYPE_SCHEMAS[p.tipoInferido];
  if (!schema) return null;
  const f = schema.fields.find((x) => x.key === key);
  return f && f.kind === "number" ? f : null;
}

/* ─── subcomponentes UI internos ─────────────────────────────────────── */

function AccentSwatch({
  accent,
  theme,
  active,
  onPick,
}: {
  accent: AccentKey;
  theme: ShellTheme;
  active: boolean;
  onPick: (k: AccentKey) => void;
}) {
  const hex = theme === "dark" ? ACCENT_DARK_HEX[accent] : ACCENT_HEX[accent];
  return (
    <button
      type="button"
      title={ACCENT_NAME[accent]}
      aria-label={`Acento ${ACCENT_NAME[accent]}`}
      aria-pressed={active}
      onClick={() => onPick(accent)}
      style={{
        width: 18,
        height: 18,
        borderRadius: 999,
        padding: 0,
        cursor: "pointer",
        background: hex,
        border: "2px solid var(--c-surface)",
        boxShadow: active
          ? "0 0 0 2px var(--c-accent)"
          : "0 0 0 1px var(--c-border)",
        transition: "transform 120ms ease, box-shadow 120ms ease",
      }}
    />
  );
}

function Breadcrumb({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 7,
        fontSize: 13,
        color: "var(--c-muted)",
        fontWeight: 500,
        minWidth: 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      }}
    >
      {items.map((label, i) => {
        const last = i === items.length - 1;
        return (
          <span
            key={`${label}-${i}`}
            style={{
              color: last ? "var(--c-text)" : undefined,
              fontWeight: last ? 600 : undefined,
            }}
          >
            {label}
            {!last && (
              <span style={{ color: "var(--c-text-3)", marginLeft: 7 }}>›</span>
            )}
          </span>
        );
      })}
    </div>
  );
}

function RailQuestionItem({
  item,
  active,
  onClick,
}: {
  item: RailItem;
  active: boolean;
  onClick: () => void;
}) {
  const numMatch = /^(\d+)/.exec(item.id);
  const n = numMatch ? numMatch[1] : "?";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? "true" : undefined}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "9px 10px",
        borderRadius: "var(--r-md)",
        cursor: "pointer",
        background: active ? "var(--c-surface)" : "transparent",
        border: active
          ? "1px solid var(--c-border)"
          : "1px solid transparent",
        textAlign: "left",
        width: "100%",
        color: "var(--c-text)",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 22,
          height: 22,
          flex: "0 0 auto",
          borderRadius: 6,
          background: item.iconBg ?? "var(--c-accent-soft)",
          color: item.iconFg ?? "var(--c-accent)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 11,
          fontWeight: 700,
        }}
      >
        {n}
      </span>
      <span style={{ minWidth: 0, flex: 1 }}>
        <span
          style={{
            display: "block",
            fontSize: 13,
            fontWeight: 600,
            color: active ? "var(--c-text)" : "var(--c-text)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {item.title || "(sin título)"}
        </span>
        {item.kind ? (
          <span
            style={{
              display: "block",
              fontSize: 11,
              color: "var(--c-text-3)",
            }}
          >
            {item.kind}
          </span>
        ) : null}
      </span>
    </button>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: "var(--c-text-3)",
        marginBottom: 7,
      }}
    >
      {children}
    </div>
  );
}

function PropertyFieldText({
  label,
  value,
  placeholder,
  multiline,
  onChange,
  helpText,
  mono,
}: {
  label: string;
  value: string;
  placeholder?: string;
  multiline?: boolean;
  onChange: (v: string) => void;
  helpText?: ReactNode;
  mono?: boolean;
}) {
  const baseInput: CSSProperties = {
    width: "100%",
    border: "1px solid var(--c-border)",
    borderRadius: "var(--r-md)",
    padding: "10px 12px",
    color: "var(--c-text)",
    background: "var(--c-surface-2)",
    outline: "none",
    fontSize: 13.5,
    lineHeight: 1.45,
    fontFamily: mono ? "var(--font-mono-css, ui-monospace, monospace)" : undefined,
  };
  return (
    <div style={{ marginBottom: 18 }}>
      <Eyebrow>{label}</Eyebrow>
      {multiline ? (
        <textarea
          rows={3}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          style={baseInput}
        />
      ) : (
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          style={baseInput}
        />
      )}
      {helpText ? (
        <div style={{ fontSize: 11.5, color: "var(--c-text-3)", marginTop: 6 }}>
          {helpText}
        </div>
      ) : null}
    </div>
  );
}

function PropertyFieldNumber({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div style={{ marginBottom: 18 }}>
      <Eyebrow>{label}</Eyebrow>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          border: "1px solid var(--c-border)",
          borderRadius: "var(--r-md)",
          padding: "10px 12px",
          color: "var(--c-text)",
          background: "var(--c-surface-2)",
          outline: "none",
          fontSize: 14,
          fontFamily: "var(--font-mono-css, ui-monospace, monospace)",
        }}
      />
    </div>
  );
}

/* ─── componente principal ───────────────────────────────────────────── */

export default function PlantillaEditorShell({
  plantilla,
  onChange,
  breadcrumb = [],
  accent = "azul",
  onAccentChange,
  theme = "light",
  onThemeChange,
  rail = [],
  activeRailId,
  onSelectRail,
  onAddRailItem,
  onSave,
  saving,
  savedHint,
  previewQuizzes = [],
  previewTitle = "Vista previa del editor",
  previewOpen: previewOpenProp,
  className,
  renderCenter,
}: PlantillaEditorShellProps) {
  const editorClasico = useEditorClasico();
  const [internalPreview, setInternalPreview] = useState(false);
  const previewOpen = previewOpenProp ?? internalPreview;

  const accentValue = (theme === "dark" ? ACCENT_DARK_HEX[accent] : ACCENT_HEX[accent]);

  // Sincronizar data-accent y data-theme en <html> cuando se controlan
  // desde acá. Si el host no pasa handlers, no se hace nada.
  useEffect(() => {
    if (!onAccentChange) return;
    document.documentElement.setAttribute("data-accent", accent);
    return () => {
      document.documentElement.removeAttribute("data-accent");
    };
  }, [accent, onAccentChange]);

  const tipo = plantilla.tipoInferido;
  const schema = QUESTION_TYPE_SCHEMAS[tipo];

  const enunField = useMemo(() => fieldByKey(plantilla, "enunciado"), [plantilla]);
  const respField = useMemo(() => fieldByKey(plantilla, "respuesta"), [plantilla]);
  const unidadField = useMemo(() => fieldByKey(plantilla, "unidad"), [plantilla]);
  const tolField = useMemo(() => numberFieldByKey(plantilla, "tolerancia"), [plantilla]);

  const enunValue = enunField ? readTextField(plantilla, enunField) : "";
  const respValue = respField ? readTextField(plantilla, respField) : "";
  const unidadValue = unidadField ? readTextField(plantilla, unidadField) : "";
  const tolValue = tolField ? readNumberField(plantilla, tolField) : "";

  const applyText = (next: Plantilla | null, fallback: Plantilla) =>
    onChange(next ?? fallback);
  const updateEnun = (v: string) => {
    if (!enunField) return;
    applyText(writeTextField(plantilla, enunField, v), plantilla);
  };
  const updateResp = (v: string) => {
    if (!respField) return;
    applyText(writeTextField(plantilla, respField, v), plantilla);
  };
  const updateUnidad = (v: string) => {
    if (!unidadField) return;
    applyText(writeTextField(plantilla, unidadField, v), plantilla);
  };
  const updateTol = (v: string) => {
    if (!tolField) return;
    applyText(writeNumberField(plantilla, tolField, v), plantilla);
  };

  const handleTogglePreview = () => {
    if (previewOpenProp === undefined) setInternalPreview((v) => !v);
  };
  const handleToggleTheme = () => {
    onThemeChange?.(theme === "light" ? "dark" : "light");
  };

  // Render del centro: default = EditorPlantilla (o clásico bajo flag).
  const renderDefaultCenter = (p: Plantilla, oc: (p: Plantilla) => void) =>
    editorClasico ? (
      <PlantillaEditorSchema plantilla={p} onChange={oc} />
    ) : (
      <EditorPlantilla plantilla={p} onChange={oc} />
    );

  /* ── preview portal (modal reusando VistaAlumnoOverlay) ─────────── */
  const previewPortal =
    previewOpen && typeof document !== "undefined"
      ? createPortal(
          <VistaAlumnoOverlay
            open
            onClose={handleTogglePreview}
            title={previewTitle}
            theoryItems={[]}
            quizzes={previewQuizzes}
          />,
          document.body,
        )
      : null;

  const idAccent = useId();

  return (
    <div
      className={`plantilla-shell${className ? ` ${className}` : ""}`}
      style={rootStyle}
      data-testid="plantilla-editor-shell"
    >
      {/* ── TOP BAR ────────────────────────────────────────────── */}
      <div style={topBarStyle} role="toolbar" aria-label="Barra del editor">
        {/* Logo + nombre */}
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <span
            aria-hidden="true"
            style={{
              width: 26,
              height: 26,
              borderRadius: 7,
              background: accentValue,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--c-accent-fg)",
              fontSize: 14,
              fontWeight: 800,
            }}
          >
            ✎
          </span>
          <span style={{ fontSize: 14.5, fontWeight: 700 }}>Tiza</span>
        </div>

        <span
          aria-hidden="true"
          style={{ width: 1, height: 22, background: "var(--c-border)" }}
        />

        <Breadcrumb items={breadcrumb} />

        <div style={{ flex: 1 }} />

        {/* Accent swatches */}
        {onAccentChange ? (
          <div
            role="group"
            aria-labelledby={`${idAccent}-label`}
            style={{ display: "flex", alignItems: "center", gap: 6, paddingRight: 4 }}
          >
            <span id={`${idAccent}-label`} className="sr-only">
              Acento
            </span>
            {ACCENT_KEYS.map((k) => (
              <AccentSwatch
                key={k}
                accent={k}
                theme={theme}
                active={k === accent}
                onPick={onAccentChange}
              />
            ))}
          </div>
        ) : null}

        {onAccentChange ? (
          <span
            aria-hidden="true"
            style={{ width: 1, height: 22, background: "var(--c-border)" }}
          />
        ) : null}

        {/* Theme toggle */}
        {onThemeChange ? (
          <button
            type="button"
            onClick={handleToggleTheme}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              height: 34,
              padding: "0 12px",
              borderRadius: "var(--r-md)",
              border: "1px solid var(--c-border)",
              background: "var(--c-surface-2)",
              color: "var(--c-text)",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <span aria-hidden="true">{theme === "dark" ? "☾" : "☀"}</span>
            <span>{theme === "dark" ? "Oscuro" : "Claro"}</span>
          </button>
        ) : null}

        {/* Preview toggle */}
        <button
          type="button"
          onClick={handleTogglePreview}
          aria-pressed={previewOpen}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            height: 34,
            padding: "0 12px",
            borderRadius: "var(--r-md)",
            border: "1px solid var(--c-border)",
            background: previewOpen ? "var(--c-accent-soft)" : "var(--c-surface-2)",
            color: previewOpen ? "var(--c-accent)" : "var(--c-text)",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          <span aria-hidden="true">▷</span>
          <span>Vista del alumno</span>
        </button>

        {/* Save */}
        <button
          type="button"
          onClick={onSave}
          disabled={saving}
          style={{
            height: 34,
            padding: "0 16px",
            borderRadius: "var(--r-md)",
            border: "none",
            background: "var(--c-accent)",
            color: "var(--c-accent-fg)",
            fontSize: 13,
            fontWeight: 700,
            cursor: saving ? "wait" : "pointer",
            boxShadow: "var(--shadow)",
            opacity: saving ? 0.7 : 1,
          }}
        >
          {saving ? "Guardando…" : "Guardar"}
        </button>
      </div>

      {/* ── BODY (3 columnas) ──────────────────────────────────── */}
      <div style={bodyStyle}>
        {/* RAIL */}
        <nav
          aria-label="Cuestionario"
          style={railStyle}
          data-testid="plantilla-editor-rail"
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: "var(--c-text-3)",
              padding: "4px 8px 8px",
            }}
          >
            CUESTIONARIO
          </div>
          {rail.length === 0 ? (
            <div
              style={{
                fontSize: 12,
                color: "var(--c-text-3)",
                padding: "8px 10px",
                fontStyle: "italic",
              }}
            >
              Sin preguntas adicionales.
            </div>
          ) : (
            rail.map((q) => (
              <RailQuestionItem
                key={q.id}
                item={q}
                active={q.id === activeRailId}
                onClick={() => onSelectRail?.(q.id)}
              />
            ))
          )}
          {onAddRailItem ? (
            <button
              type="button"
              onClick={onAddRailItem}
              style={{
                marginTop: 8,
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "9px 10px",
                borderRadius: "var(--r-md)",
                border: "1px dashed var(--c-border)",
                background: "transparent",
                color: "var(--c-accent)",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              <span aria-hidden="true">＋</span> Nueva pregunta
            </button>
          ) : null}
        </nav>

        {/* CENTER */}
        <main style={centerWrapStyle} aria-label="Editor de la pregunta">
          <div style={centerScrollStyle}>
            <div style={questionCardStyle} data-testid="plantilla-editor-card">
              {/* chip de tipo + breadcrumb mini (eyebrow) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  marginBottom: 4,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    background: "var(--c-accent-soft)",
                    color: "var(--c-accent)",
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "5px 11px",
                    borderRadius: 999,
                  }}
                >
                  <span aria-hidden="true">№</span> {schema?.label ?? tipo}
                </span>
              </div>

              {(renderCenter ?? renderDefaultCenter)(plantilla, onChange)}
            </div>
          </div>
        </main>

        {/* AUX (property grid) */}
        <aside
          aria-label="Propiedades"
          style={auxStyle}
          data-testid="plantilla-editor-grid"
        >
          <div
            style={{
              position: "sticky",
              top: 0,
              zIndex: 5,
              background: "var(--c-surface)",
              borderBottom: "1px solid var(--c-border)",
              padding: "16px 18px",
              display: "flex",
              alignItems: "center",
              gap: 11,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 32,
                height: 32,
                flex: "0 0 auto",
                borderRadius: "var(--r-md)",
                background: "var(--c-accent-soft)",
                color: "var(--c-accent)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 15,
              }}
            >
              ⚙
            </span>
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  color: "var(--c-text-3)",
                }}
              >
                PROPIEDADES
              </div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>
                {schema?.label ?? "Pregunta"}
              </div>
            </div>
          </div>

          <div style={{ overflowY: "auto", padding: 18, flex: 1 }}>
            <div style={{ marginBottom: 18 }}>
              <Eyebrow>Tipo de pregunta</Eyebrow>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                    padding: "10px 12px",
                    border: "1px solid var(--c-border)",
                    borderRadius: "var(--r-md)",
                    background: "var(--c-surface-2)",
                    fontSize: 13.5,
                    fontWeight: 600,
                    color: "var(--c-text)",
                  }}
                >
                  <span style={{ color: "var(--c-accent)" }}>№</span>{" "}
                  {schema?.label ?? tipo}
                </div>
              </div>
              <div
                style={{
                  fontSize: 11.5,
                  color: "var(--c-text-3)",
                  marginTop: 6,
                }}
              >
                Cambialo desde el panel central.
              </div>
            </div>

            {enunField ? (
              <PropertyFieldText
                label="Enunciado"
                value={enunValue}
                placeholder="Texto de la consigna…"
                multiline
                onChange={updateEnun}
                helpText={
                  <>
                    Usá{" "}
                    <code
                      style={{
                        fontFamily: "var(--font-mono-css, ui-monospace, monospace)",
                        color: "var(--c-accent)",
                      }}
                    >
                      {"{var}"}
                    </code>{" "}
                    para insertar variables.
                  </>
                }
              />
            ) : null}

            {respField ? (
              <PropertyFieldText
                label="Respuesta"
                value={respValue}
                placeholder="Expresión de la respuesta correcta…"
                onChange={updateResp}
                mono
                helpText={
                  respField.expression ? (
                    <>
                      Expresión sobre variables · podés reusar las declaradas.
                    </>
                  ) : (
                    <>Texto exacto de la respuesta esperada.</>
                  )
                }
              />
            ) : null}

            {tolField || unidadField ? (
              <div style={{ display: "flex", gap: 12, marginBottom: 18 }}>
                {tolField ? (
                  <div style={{ flex: 1 }}>
                    <PropertyFieldNumber
                      label="Tolerancia"
                      value={tolValue}
                      onChange={updateTol}
                    />
                  </div>
                ) : null}
                {unidadField ? (
                  <div style={{ flex: 1 }}>
                    <PropertyFieldText
                      label="Unidad"
                      value={unidadValue}
                      placeholder="—"
                      onChange={updateUnidad}
                    />
                  </div>
                ) : null}
              </div>
            ) : null}

            {savedHint ? (
              <div
                role="status"
                style={{
                  fontSize: 12,
                  color: "var(--c-text-3)",
                  marginTop: 8,
                }}
              >
                {savedHint}
              </div>
            ) : null}
          </div>
        </aside>
      </div>

      {previewPortal}
    </div>
  );
}
