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
  type LintIssue,
  type LintReport,
  type Plantilla,
  type TextField,
} from "@vb/vblang";
import EditorPlantilla from "./EditorPlantilla";
import CodeEditor from "./CodeEditor";
import {
  readNumberField,
  readTextField,
  writeNumberField,
  writeTextField,
} from "../components/vblang/plantillaFields";
import { useEditorClasico } from "./useEditorClasico";
import PlantillaEditorSchema from "../components/vblang/PlantillaEditorSchema";
import { TIPO_PREGUNTA_KEY } from "../components/vblang/TizaEditor";
import VistaAlumnoOverlay from "../components/modulos/VistaAlumnoOverlay";
import Menu from "../ui/Menu";
import type { ModuleQuiz } from "../domain/module/module.types";
import { useI18n } from "../i18n/I18nContext";
import { translateVblangMessage } from "../vblang/translateError";

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

  /* ── WO-V3: código DSL editable ── */
  /** Texto DSL actual (la fuente de verdad cuando el modo es "code"). */
  codeText?: string;
  /** Handler para cambios del DSL (código editable). */
  onCodeChange?: (text: string) => void;
  /** Error de parseo del código. `null` cuando es válido. */
  codeParseError?: { message: string; line: number; col: number; suggestion?: string } | null;
  /** Reporte de lint (opcional) — se muestra como warnings no-fatales. */
  lintReport?: LintReport | null;
  /** Modo inicial del toggle form/code. Default "split". */
  codeMode?: "split" | "form" | "code";
  /** Si se setea, el shell se vuelve controlado para el modo. */
  codeModeControlled?: "split" | "form" | "code";
  onCodeModeChange?: (m: "split" | "form" | "code") => void;

  /* ── clases / overrides ── */
  className?: string;
  /** Render del centro: default = EditorPlantilla (o clásico). */
  renderCenter?: (plantilla: Plantilla, onChange: (p: Plantilla) => void) => ReactNode;

  /* ── WO-V2c: slots para fusionar el editor standalone (V1) en el shell ──
   * Todos opcionales y aditivos: las consumidoras previas (VarianteEditor,
   * y TizaDemoPage, hoy archivada) no pasan ninguno y conservan el
   * comportamiento original. */

  /** Botón "Volver" al inicio de la barra (antes del logo). */
  onBack?: () => void;
  /** Etiqueta del botón Volver (default "Volver"). */
  backLabel?: string;
  /** Estado contextual en la barra (ej. save-state + undo/redo), antes de Guardar. */
  topBarStatus?: ReactNode;
  /** Contenido del menú de overflow "⋯ Más" (acciones secundarias). Recibe
   *  `close` para cerrar el panel tras seleccionar. */
  overflowMenu?: (api: { close: () => void }) => ReactNode;
  /** Limita los estados visibles del toggle de modo. Default todos. */
  codeModes?: ReadonlyArray<"split" | "form" | "code">;
  /** Reemplaza el contenido del rail izquierdo (ej. metadatos en standalone). */
  renderRail?: ReactNode;
  /** Reemplaza TODO el centro (form card + code drawer) por contenido propio.
   *  La consumidora se hace cargo del scroll y del layout interno. */
  renderCenterFull?: ReactNode;
  /** Contenido extra apilado al final del property grid (ej. validación). */
  auxExtra?: ReactNode;
  /** WO-V2d — reemplaza TODO el aside derecho (property grid) por contenido
   *  propio. La consumidora se hace cargo del header, scroll y layout interno. */
  renderAux?: ReactNode;
  /** Panel de preview colapsable lateral (estilo prototipo). Si se provee,
   *  el botón "Vista del alumno" lo conmuta en vez de abrir el modal. */
  renderPreviewPanel?: ReactNode;
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

// FIX-RESIZE-PANEL — el root necesita `height: "100%"` explícito. Sin esto,
// el shell se dimensionaba al contenido (auto) en vez de heredar el alto del
// contenedor (100vh en PlantillaEditorTiza/TizaDemoPage, vía la cadena
// flex:1+minHeight:0 de sus wrappers). Como QuestionPropertyGrid y
// VariablePropertyGrid tienen alturas de contenido bien distintas, cada vez
// que cambiaba la selección (pregunta ↔ variable) todo el panel —y a veces
// la página entera— se achicaba/agrandaba de golpe. `height:"100%"` resuelve
// contra el contenedor real cuando existe (caso página) y cae a `auto` sin
// efecto cuando no (caso embebido en VarianteEditor/Posiciones, que no tiene
// un ancestro de alto fijo), así que no rompe ese uso.
const rootStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  minHeight: 0,
  background: "var(--c-surface-2)",
  color: "var(--c-text)",
  fontFamily: "var(--font-sans)",
  borderRadius: "var(--r-lg)",
  border: "1px solid var(--c-border)",
  boxShadow: "var(--shadow)",
  overflow: "hidden",
  // FIX-SCROLL-FANTASMA — sin containing block posicionado, cualquier
  // descendiente `position:absolute` (p. ej. los live-region `sr-only`,
  // que Tailwind implementa con absolute) resuelve contra el documento y
  // NO lo clipea ningún `overflow` de ancestros estáticos: la página
  // entera quedaba scrolleable con un espacio en blanco abajo. Con el
  // root `relative`, el propio `overflow: hidden` de arriba los contiene.
  position: "relative",
};

const topBarStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  columnGap: 14,
  rowGap: 6,
  minHeight: 60,
  flex: "0 0 auto",
  padding: "8px 18px",
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

const codeDrawerWrapStyle: CSSProperties = {
  flex: "0 0 auto",
  borderTop: "1px solid var(--c-border)",
  background: "var(--c-surface)",
  display: "flex",
  flexDirection: "column",
  minHeight: 0,
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

/* Panel de preview colapsable lateral (prototipo: 344px). */
const previewPanelStyle: CSSProperties = {
  width: 344,
  flex: "0 0 344px",
  borderLeft: "1px solid var(--c-border)",
  background: "var(--c-surface-2)",
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
      className="plantilla-shell__topbar-item"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 7,
        fontSize: 13,
        color: "var(--c-muted)",
        fontWeight: 500,
        minWidth: 0,
        maxWidth: 320,
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

/* ─── WO-V3: CodeDrawer ────────────────────────────────────────────── */

function CodeDrawer({
  visible,
  codeText,
  onCodeChange,
  parseError,
  lintReport,
  codeMode,
  onClose,
}: {
  visible: boolean;
  codeText: string;
  onCodeChange: (text: string) => void;
  parseError: { message: string; line: number; col: number; suggestion?: string } | null;
  lintReport: LintReport | null;
  codeMode: "split" | "form" | "code";
  onClose: () => void;
}) {
  // En modo "code" el drawer ocupa todo el alto del centro y scrollea.
  // En "split" es una franja con altura acotada (~40% del centro).
  const wrapExtra: CSSProperties =
    codeMode === "code"
      ? { flex: "1 1 auto", minHeight: 0 }
      : { maxHeight: "44%", minHeight: 240 };

  const issues: LintIssue[] = lintReport?.issues ?? [];
  const errorCount = issues.filter((i) => i.severity === "error").length;
  const warnCount = issues.filter((i) => i.severity === "warning").length;

  return (
    <section
      aria-label="Código DSL"
      style={{ ...codeDrawerWrapStyle, ...wrapExtra }}
      data-testid="code-drawer"
    >
      {/* Header del drawer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 18px",
          borderBottom: "1px solid var(--c-border)",
          background: "var(--c-surface)",
        }}
      >
        <span
          aria-hidden="true"
          style={{
            fontFamily: "var(--font-mono-css, ui-monospace, monospace)",
            fontSize: 13,
            fontWeight: 700,
            color: "var(--c-accent)",
          }}
        >
          {"</>"}
        </span>
        <span style={{ fontSize: 13.5, fontWeight: 700 }}>
          Código generado · VBLang
        </span>

        {/* Estado "en vivo" (cuando no hay error de parseo y el lint está OK). */}
        {!parseError ? (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              fontSize: 11,
              fontWeight: 700,
              color: "var(--c-success)",
              background: "color-mix(in srgb, var(--c-success) 12%, transparent)",
              padding: "3px 8px",
              borderRadius: 999,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 6,
                height: 6,
                borderRadius: 999,
                background: "var(--c-success)",
                animation: "code-blip 1.6s infinite",
              }}
            />
            en vivo
          </span>
        ) : (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              fontSize: 11,
              fontWeight: 700,
              color: "var(--c-danger)",
              background: "var(--c-danger-soft)",
              padding: "3px 8px",
              borderRadius: 999,
            }}
          >
            error de parseo
          </span>
        )}

        {errorCount > 0 ? (
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "var(--c-danger)",
            }}
          >
            {errorCount} {errorCount === 1 ? "error" : "errores"}
          </span>
        ) : null}
        {warnCount > 0 ? (
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "var(--c-warning)",
            }}
          >
            {warnCount} {warnCount === 1 ? "aviso" : "avisos"}
          </span>
        ) : null}

        <div style={{ flex: 1 }} />

        <button
          type="button"
          onClick={onClose}
          aria-label="Ocultar código"
          title="Ocultar código (volver a formulario)"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "transparent",
            border: 0,
            color: "var(--c-text-3)",
            cursor: "pointer",
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          <span aria-hidden="true">⌄</span>
          <span>ocultar</span>
        </button>
      </div>

      {/* Banner de error de parseo (no rompe la app; sólo informa). */}
      {parseError ? (
        <ParseErrorBanner error={parseError} />
      ) : null}

      {/* Lista de issues de lint (no-fatales). */}
      {issues.length > 0 ? (
        <LintIssueList issues={issues} />
      ) : null}

      {/* Editor (oculto si !visible — el modo "form" no lo renderiza). */}
      {visible ? (
        <div
          style={{
            flex: "1 1 auto",
            minHeight: 0,
            padding: visible ? "12px 18px 18px" : 0,
            display: visible ? "flex" : "none",
          }}
        >
          <CodeEditor
            value={codeText}
            onChange={onCodeChange}
            errorLine={parseError?.line ?? null}
            minRows={codeMode === "code" ? 18 : 8}
            label="Editor de código DSL VBLang"
          />
        </div>
      ) : null}
    </section>
  );
}

function ParseErrorBanner({
  error,
}: {
  error: { message: string; line: number; col: number; suggestion?: string };
}) {
  const { t, lang } = useI18n();
  const translatedMessage = translateVblangMessage(error.message, lang);
  return (
    <div
      role="alert"
      style={{
        margin: "8px 18px 0",
        padding: "10px 12px",
        background: "var(--c-danger-soft)",
        border: "1px solid var(--c-danger)",
        borderRadius: "var(--r-md)",
        color: "var(--c-text)",
        fontSize: 12.5,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span
          aria-hidden="true"
          style={{ color: "var(--c-danger)", fontWeight: 700 }}
        >
          ✕
        </span>
        <span style={{ fontWeight: 700 }}>
          {t("editorShell.noSePudoParsearElCodigo")} {error.line}, {t("errorPanel.columna")} {error.col}.
        </span>
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono-css, ui-monospace, monospace)",
          color: "var(--c-text-2, var(--c-text))",
        }}
      >
        {translatedMessage}
      </div>
      {error.suggestion ? (
        <div style={{ color: "var(--c-text-3)", fontSize: 12 }}>
          {t("errorPanel.sugerencia")} <em>{error.suggestion}</em>
        </div>
      ) : null}
      <div style={{ color: "var(--c-text-3)", fontSize: 11.5 }}>
        {t("editorShell.elUltimoEstadoValidoSe")}
      </div>
    </div>
  );
}

function LintIssueList({ issues }: { issues: LintIssue[] }) {
  const { t, lang } = useI18n();
  // Mostrar hasta 5 issues, agrupados por severidad.
  const visible = issues.slice(0, 5);
  return (
    <div
      style={{
        margin: "8px 18px 0",
        padding: "8px 12px",
        background: "var(--c-surface-2)",
        border: "1px solid var(--c-border)",
        borderRadius: "var(--r-md)",
        fontSize: 12,
        color: "var(--c-text)",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.04em",
          color: "var(--c-text-3)",
          textTransform: "uppercase",
        }}
      >
        {t("editorShell.avisosDelLinter")}
      </div>
      {visible.map((iss, i) => (
        <div
          key={`${iss.code}-${iss.line}-${i}`}
          style={{
            display: "flex",
            gap: 8,
            alignItems: "baseline",
            color:
              iss.severity === "error"
                ? "var(--c-danger)"
                : "var(--c-warning)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono-css, ui-monospace, monospace)",
              color: "var(--c-text-3)",
              fontSize: 11,
            }}
          >
            L{iss.line}:{iss.col}
          </span>
          <span style={{ flex: 1 }}>{translateVblangMessage(iss.message, lang)}</span>
          {iss.suggestion ? (
            <span style={{ color: "var(--c-text-3)", fontStyle: "italic" }}>
              {iss.suggestion}
            </span>
          ) : null}
        </div>
      ))}
      {issues.length > visible.length ? (
        <div style={{ color: "var(--c-text-3)", fontSize: 11 }}>
          + {issues.length - visible.length} {t("editorShell.mas")}
        </div>
      ) : null}
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
  previewTitle,
  previewOpen: previewOpenProp,
  codeText,
  onCodeChange,
  codeParseError,
  lintReport,
  codeMode: codeModeProp = "split",
  codeModeControlled,
  onCodeModeChange,
  className,
  renderCenter,
  onBack,
  backLabel,
  topBarStatus,
  overflowMenu,
  codeModes,
  renderRail,
  renderCenterFull,
  auxExtra,
  renderAux,
  renderPreviewPanel,
}: PlantillaEditorShellProps) {
  const { t } = useI18n();
  const resolvedPreviewTitle = previewTitle ?? t("quizPosicionesEditor.vistaPreviaDelEditor");
  const resolvedBackLabel = backLabel ?? t("comun.volver");
  const editorClasico = useEditorClasico();
  const [internalPreview, setInternalPreview] = useState(false);
  const previewOpen = previewOpenProp ?? internalPreview;

  // WO-V3 — modo del toggle formulario/código. "split" por default.
  const [internalCodeMode, setInternalCodeMode] = useState<
    "split" | "form" | "code"
  >("split");
  const codeMode = codeModeControlled ?? codeModeProp ?? internalCodeMode;
  const setCodeMode = (m: "split" | "form" | "code") => {
    if (codeModeControlled !== undefined) onCodeModeChange?.(m);
    else setInternalCodeMode(m);
  };

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
  // Si la consumidora provee un panel lateral (renderPreviewPanel), se usa
  // ese en su lugar (estilo prototipo) y no se monta el modal.
  const previewPortal =
    !renderPreviewPanel && previewOpen && typeof document !== "undefined"
      ? createPortal(
          <VistaAlumnoOverlay
            open
            onClose={handleTogglePreview}
            title={resolvedPreviewTitle}
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
      <div
        className="plantilla-shell__topbar"
        style={topBarStyle}
        role="toolbar"
        aria-label="Barra del editor"
      >
        {/* Volver (opcional, primero en la barra) */}
        {onBack ? (
          <>
            <button
              type="button"
              onClick={onBack}
              data-testid="plantilla-shell-volver"
              className="plantilla-shell__topbar-item"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                height: 32,
                padding: "0 10px",
                borderRadius: "var(--r-md)",
                border: "1px solid var(--c-border)",
                background: "var(--c-surface-2)",
                color: "var(--c-text)",
                fontSize: 12.5,
                fontWeight: 600,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              <span aria-hidden="true">‹</span>
              {resolvedBackLabel}
            </button>
            <span
              aria-hidden="true"
              className="plantilla-shell__topbar-sep"
              style={{ width: 1, height: 22, background: "var(--c-border)" }}
            />
          </>
        ) : null}

        {/* Logo + nombre */}
        <div
          className="plantilla-shell__topbar-item"
          style={{ display: "flex", alignItems: "center", gap: 9 }}
        >
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
          <span style={{ fontSize: 14.5, fontWeight: 700, whiteSpace: "nowrap" }}>
            Tiza
          </span>
        </div>

        <span
          aria-hidden="true"
          className="plantilla-shell__topbar-sep"
          style={{ width: 1, height: 22, background: "var(--c-border)" }}
        />

        <Breadcrumb items={breadcrumb} />

        <div style={{ flex: 1, minWidth: 0 }} />

        {/* Accent swatches */}
        {onAccentChange ? (
          <div
            role="group"
            aria-labelledby={`${idAccent}-label`}
            className="plantilla-shell__topbar-item"
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
            className="plantilla-shell__topbar-sep"
            style={{ width: 1, height: 22, background: "var(--c-border)" }}
          />
        ) : null}

        {/* Theme toggle */}
        {onThemeChange ? (
          <button
            type="button"
            onClick={handleToggleTheme}
            className="plantilla-shell__topbar-item"
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
              whiteSpace: "nowrap",
            }}
          >
            <span aria-hidden="true">{theme === "dark" ? "☾" : "☀"}</span>
            <span>{theme === "dark" ? "Oscuro" : "Claro"}</span>
          </button>
        ) : null}

        {/* WO-V3 — toggle form/code (si el host provee codeText o controla el modo) */}
        {codeText !== undefined || codeModeControlled !== undefined ? (
          <div
            role="group"
            aria-label={t("editorShell.modoDeEdicion")}
            className="plantilla-shell__topbar-item"
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: 34,
              padding: 3,
              border: "1px solid var(--c-border)",
              borderRadius: "var(--r-md)",
              background: "var(--c-surface-2)",
              gap: 2,
              whiteSpace: "nowrap",
            }}
          >
            {(codeModes ?? (["form", "split", "code"] as const)).map((m) => {
              const active = codeMode === m;
              const label =
                m === "form" ? t("editorShell.form") : m === "code" ? t("editorShell.codigo") : t("editorShell.ambos");
              return (
                <button
                  key={m}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCodeMode(m)}
                  style={{
                    height: 26,
                    padding: "0 10px",
                    border: 0,
                    borderRadius: "var(--r-sm)",
                    background: active ? "var(--c-surface)" : "transparent",
                    boxShadow: active ? "var(--shadow-1)" : "none",
                    color: active ? "var(--c-text)" : "var(--c-muted)",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        ) : null}

        {/* Preview toggle */}
        <button
          type="button"
          onClick={handleTogglePreview}
          aria-pressed={previewOpen}
          className="plantilla-shell__topbar-item"
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
            whiteSpace: "nowrap",
          }}
        >
          <span aria-hidden="true">▷</span>
          <span>{t("editorShell.vistaDelAlumno")}</span>
        </button>

        {/* Menú overflow "⋯ Más" — acciones secundarias */}
        {overflowMenu ? (
          <Menu
            align="end"
            panelWidth="240px"
            trigger={(props) => (
              <button
                type="button"
                {...props}
                aria-label="Más acciones"
                title="Más acciones"
                data-testid="plantilla-shell-overflow"
                className="plantilla-shell__topbar-item"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 34,
                  minWidth: 34,
                  padding: "0 8px",
                  borderRadius: "var(--r-md)",
                  border: "1px solid var(--c-border)",
                  background: props["aria-expanded"]
                    ? "var(--c-accent-soft)"
                    : "var(--c-surface-2)",
                  color: props["aria-expanded"]
                    ? "var(--c-accent)"
                    : "var(--c-text)",
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: "pointer",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                <span aria-hidden="true">⋯</span>
              </button>
            )}
          >
            {(api) => (
              <div style={{ display: "flex", flexDirection: "column", padding: 4 }}>
                {overflowMenu(api)}
              </div>
            )}
          </Menu>
        ) : null}

        {/* Estado contextual (save-state, undo/redo) — cerca de Guardar */}
        {topBarStatus}

        {/* Save */}
        <button
          type="button"
          onClick={onSave}
          disabled={saving}
          className="plantilla-shell__topbar-item"
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
            whiteSpace: "nowrap",
          }}
        >
          {saving ? t("comun.guardando") : t("comun.guardar")}
        </button>
      </div>

      {/* ── BODY (3 columnas) ──────────────────────────────────── */}
      <div style={bodyStyle}>
        {/* RAIL */}
        <nav
          aria-label={renderRail ? "Metadatos" : "Cuestionario"}
          style={railStyle}
          data-testid="plantilla-editor-rail"
        >
          {renderRail ?? (
          <>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: "var(--c-text-3)",
              padding: "4px 8px 8px",
            }}
          >
            {t("tizaEditor.cuestionarioRail")}
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
          </>
          )}
        </nav>

        {/* CENTER — form (top) + code drawer (bottom), según codeMode.
            Si la consumidora provee renderCenterFull, ocupa todo el centro. */}
        <main style={centerWrapStyle} aria-label="Editor de la pregunta">
          {renderCenterFull ?? (
          <>
          {/* ── FORMULARIO ─────────────────────────────────────── */}
          {codeMode !== "code" ? (
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
          ) : null}

          {/* ── WO-V3: DRAWER DE CÓDIGO ────────────────────────── */}
          {codeText !== undefined ? (
            <CodeDrawer
              visible={codeMode !== "form"}
              codeText={codeText}
              onCodeChange={onCodeChange ?? (() => {})}
              parseError={codeParseError ?? null}
              lintReport={lintReport ?? null}
              codeMode={codeMode}
              onClose={() => setCodeMode("form")}
            />
          ) : null}
          </>
          )}
        </main>

        {/* AUX (property grid) */}
        <aside
          aria-label={t("tizaEditor.propiedades")}
          style={auxStyle}
          data-testid="plantilla-editor-grid"
        >
          {renderAux ?? (
            <>
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
                    {t("tizaEditor.propiedades")}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700 }}>
                    {TIPO_PREGUNTA_KEY[tipo] ? t(TIPO_PREGUNTA_KEY[tipo]) : (schema?.label ?? t("varianteEditor.pregunta"))}
                  </div>
                </div>
              </div>

              <div style={{ overflowY: "auto", padding: 18, flex: 1 }}>
                <div style={{ marginBottom: 18 }}>
                  <Eyebrow>{t("tizaEditor.tipoDePregunta")}</Eyebrow>
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
                      {TIPO_PREGUNTA_KEY[tipo] ? t(TIPO_PREGUNTA_KEY[tipo]) : (schema?.label ?? tipo)}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: 11.5,
                      color: "var(--c-text-3)",
                      marginTop: 6,
                    }}
                  >
                    {t("editorShell.cambialoDesdeElPanelCentral")}
                  </div>
                </div>

                {enunField ? (
                  <PropertyFieldText
                    label={t("plantillaEditorTiza.enunciado")}
                    value={enunValue}
                    placeholder={t("editorShell.textoDeLaConsigna")}
                    multiline
                    onChange={updateEnun}
                    helpText={
                      <>
                        {t("tizaEditor.usa")}{" "}
                        <code
                          style={{
                            fontFamily: "var(--font-mono-css, ui-monospace, monospace)",
                            color: "var(--c-accent)",
                          }}
                        >
                          {"{var}"}
                        </code>{" "}
                        {t("tizaEditor.paraInsertarVariables")}
                      </>
                    }
                  />
                ) : null}

                {respField ? (
                  <PropertyFieldText
                    label={t("tizaEditor.respuesta")}
                    value={respValue}
                    placeholder={t("editorShell.expresionDeLaRespuestaCorrecta")}
                    onChange={updateResp}
                    mono
                    helpText={
                      respField.expression ? (
                        <>
                          {t("editorShell.expresionSobreVariablesPodesReusar")}
                        </>
                      ) : (
                        <>{t("editorShell.textoExactoDeLaRespuesta")}</>
                      )
                    }
                  />
                ) : null}

                {tolField || unidadField ? (
                  <div style={{ display: "flex", gap: 12, marginBottom: 18 }}>
                    {tolField ? (
                      <div style={{ flex: 1 }}>
                        <PropertyFieldNumber
                          label={t("tizaEditor.tolerancia")}
                          value={tolValue}
                          onChange={updateTol}
                        />
                      </div>
                    ) : null}
                    {unidadField ? (
                      <div style={{ flex: 1 }}>
                        <PropertyFieldText
                          label={t("tizaEditor.unidad")}
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

                {/* WO-V2c — contenido extra del property grid (ej. validación) */}
                {auxExtra}
              </div>
            </>
          )}
        </aside>

        {/* PREVIEW lateral colapsable (estilo prototipo) */}
        {renderPreviewPanel && previewOpen ? (
          <section
            aria-label={t("editorShell.vistaDelAlumno")}
            style={previewPanelStyle}
            data-testid="plantilla-editor-preview"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                padding: "13px 16px",
                borderBottom: "1px solid var(--c-border)",
                background: "var(--c-surface)",
                flex: "0 0 auto",
              }}
            >
              <span aria-hidden="true" style={{ color: "var(--c-accent)" }}>
                ▷
              </span>
              <span style={{ fontSize: 13.5, fontWeight: 700 }}>
                {t("editorShell.vistaDelAlumno")}
              </span>
              <div style={{ flex: 1 }} />
              <button
                type="button"
                onClick={handleTogglePreview}
                aria-label="Cerrar vista del alumno"
                style={{
                  background: "transparent",
                  border: 0,
                  color: "var(--c-text-3)",
                  cursor: "pointer",
                  fontSize: 18,
                  lineHeight: 1,
                }}
              >
                ›
              </button>
            </div>
            <div style={{ flex: "1 1 auto", minHeight: 0, overflowY: "auto" }}>
              {renderPreviewPanel}
            </div>
          </section>
        ) : null}
      </div>

      {previewPortal}
    </div>
  );
}
