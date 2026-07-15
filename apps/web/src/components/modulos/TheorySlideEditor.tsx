import {
  useState,
  useEffect,
  useId,
  useRef,
  useCallback,
  type CSSProperties,
  type ReactNode,
} from "react";
import { X, Plus, Trash2, Copy, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Settings } from "lucide-react";
import { Button, Input, Textarea, Select } from "../ui";
import type { VisualSpec } from "../../generadoresV2/core/types";
import VisualizerRenderer from "./VisualizerRenderer";
import { useSlideEditor } from "./hooks/useSlideEditor";
import type { Block, ChartBlock, FlowBlock, LatexBlock, TableBlock } from "../../blocks/types";
import { TextBlockRenderer } from "../../blocks/renderers/TextBlockRenderer";
import { LatexBlockRenderer } from "../../blocks/renderers/LatexBlockRenderer";
import { TableBlockRenderer } from "../../blocks/renderers/TableBlockRenderer";
import { ChartBlockRenderer } from "../../blocks/renderers/ChartBlockRenderer";
import { FlowBlockRenderer } from "../../blocks/renderers/FlowBlockRenderer";
import { GuardarComoMaterial } from "../materiales/GuardarComoMaterial";

import { useI18n } from "../../i18n/I18nContext";
// ─── Layout presets ───────────────────────────────────────────────────────────

export type LayoutPreset = "centered" | "top" | "split" | "bottom-text" | "quote";

export const LAYOUT_META: Record<LayoutPreset, { label: string; description: string }> = {
  centered:      { label: "Centrado",      description: "Contenido centrado vertical y horizontalmente" },
  top:           { label: "Desde arriba",  description: "Contenido fluye desde la parte superior" },
  split:         { label: "Dos columnas",  description: "Texto dividido en dos columnas" },
  "bottom-text": { label: "Texto al pie",  description: "Contenido anclado abajo — ideal con imagen de fondo" },
  quote:         { label: "Cita",          description: "Cita destacada centrada con comillas decorativas" },
};

export function layoutContainerClass(layout: LayoutPreset): string {
  switch (layout) {
    case "centered":     return "flex flex-col items-center justify-center text-center gap-5 h-full";
    case "top":          return "flex flex-col justify-start gap-5 h-full";
    case "split":        return "flex flex-col gap-5 h-full";
    case "bottom-text":  return "flex flex-col justify-end gap-4 h-full";
    case "quote":        return "flex flex-col items-center justify-center text-center gap-6 h-full px-8";
  }
}

// ─── Theme definitions (all Tailwind classes hardcoded here for scanner) ───────

export type ThemeKey = "minimal" | "dark" | "warm" | "ocean" | "contrast";
/** Backward-compat alias used by ModuloEditor */
export type PresentationTheme = ThemeKey;

export type ThemeConfig = {
  label: string;
  swatch: string;
  /** Hex del fondo del slide (para el lienzo WYSIWYG vía --slide-bg). */
  bg: string;
  /** Hex del texto base del slide (para el lienzo WYSIWYG vía --slide-fg). */
  fg: string;
  /** Outer slide container — bg color + base text color */
  slide: string;
  /** Big title: text-4xl font-bold */
  heading: string;
  /** Subtitle: text-xl font-medium */
  subtitle: string;
  /** Body text: text-base leading-relaxed */
  body: string;
  /** Code block container */
  code: string;
  /** Navigation prev/next buttons */
  navButton: string;
  /** Dot indicator (inactive) */
  dotInactive: string;
  /** Dot indicator (active) */
  dotActive: string;
  /** Presenter top bar background */
  topBar: string;
  /** Dark bg overlay for background images */
  overlayDark: string;
  /** Subtle bg overlay for background images */
  overlayMedium: string;
};

export const THEMES: Record<ThemeKey, ThemeConfig> = {
  minimal: {
    label: "Minimal",
    swatch: "#f8fafc",
    bg: "#ffffff",
    fg: "#0f172a",
    slide: "bg-white text-slate-900",
    heading: "text-4xl font-bold leading-tight text-slate-900",
    subtitle: "text-xl font-medium text-slate-500",
    body: "text-base leading-relaxed text-slate-700",
    code: "bg-slate-50 border border-slate-200 text-slate-800",
    navButton: "bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40",
    dotInactive: "bg-slate-300 hover:bg-slate-400",
    dotActive: "bg-slate-700 scale-125",
    topBar: "bg-slate-800",
    overlayDark: "bg-black/50",
    overlayMedium: "bg-black/25",
  },
  dark: {
    label: "Oscuro",
    swatch: "#0f172a",
    bg: "#0f172a",
    fg: "#f8fafc",
    slide: "bg-slate-900 text-white",
    heading: "text-4xl font-bold leading-tight text-white",
    subtitle: "text-xl font-medium text-slate-400",
    body: "text-base leading-relaxed text-slate-300",
    code: "bg-black border border-slate-700 text-cyan-400",
    navButton: "bg-slate-700 hover:bg-slate-600 text-white disabled:opacity-40",
    dotInactive: "bg-slate-600 hover:bg-slate-500",
    dotActive: "bg-white scale-125",
    topBar: "bg-black",
    overlayDark: "bg-black/60",
    overlayMedium: "bg-black/30",
  },
  warm: {
    label: "Cálido",
    swatch: "#fef3c7",
    bg: "#fffbeb",
    fg: "#1c1917",
    slide: "bg-amber-50 text-stone-900",
    heading: "text-4xl font-bold leading-tight text-stone-900",
    subtitle: "text-xl font-medium text-amber-700",
    body: "text-base leading-relaxed text-stone-700",
    code: "bg-stone-100 border border-stone-200 text-stone-800",
    navButton: "bg-amber-200 hover:bg-amber-300 text-stone-800 disabled:opacity-40",
    dotInactive: "bg-amber-300 hover:bg-amber-400",
    dotActive: "bg-stone-700 scale-125",
    topBar: "bg-stone-800",
    overlayDark: "bg-stone-900/50",
    overlayMedium: "bg-stone-900/25",
  },
  ocean: {
    label: "Océano",
    swatch: "#0c4a6e",
    bg: "#082f49",
    fg: "#f0f9ff",
    slide: "bg-sky-950 text-sky-50",
    heading: "text-4xl font-bold leading-tight text-sky-50",
    subtitle: "text-xl font-medium text-sky-300",
    body: "text-base leading-relaxed text-sky-100",
    code: "bg-sky-900 border border-sky-700 text-emerald-400",
    navButton: "bg-sky-800 hover:bg-sky-700 text-sky-50 disabled:opacity-40",
    dotInactive: "bg-sky-700 hover:bg-sky-600",
    dotActive: "bg-sky-200 scale-125",
    topBar: "bg-sky-950",
    overlayDark: "bg-sky-950/60",
    overlayMedium: "bg-sky-950/30",
  },
  contrast: {
    label: "Alto contraste",
    swatch: "#ffffff",
    bg: "#ffffff",
    fg: "#000000",
    slide: "bg-white text-black border-4 border-black",
    heading: "text-4xl font-black leading-tight text-black",
    subtitle: "text-xl font-bold text-black",
    body: "text-base leading-relaxed text-black",
    code: "bg-gray-100 border-2 border-black text-black",
    navButton: "bg-black hover:bg-gray-800 text-white disabled:opacity-40",
    dotInactive: "bg-gray-400 hover:bg-gray-500",
    dotActive: "bg-black scale-125",
    topBar: "bg-black",
    overlayDark: "bg-black/50",
    overlayMedium: "bg-black/25",
  },
};

// ─── Accent color ─────────────────────────────────────────────────────────────

export type AccentColor = "indigo" | "rose" | "emerald" | "amber" | "violet" | "sky";

export type AccentConfig = {
  label: string;
  swatch: string;
  /** Tailwind bg class for progress bar and active dot */
  bar: string;
  /** Tailwind text class for heading override */
  heading: string;
  /** Tailwind text class for bullet markers */
  bullet: string;
};

export const ACCENT_COLORS: Record<AccentColor, AccentConfig> = {
  indigo:  { label: "Índigo",    swatch: "#6366f1", bar: "bg-indigo-500",  heading: "text-indigo-600",  bullet: "text-indigo-500" },
  rose:    { label: "Rosa",      swatch: "#f43f5e", bar: "bg-rose-500",    heading: "text-rose-600",    bullet: "text-rose-500"   },
  emerald: { label: "Esmeralda", swatch: "#10b981", bar: "bg-emerald-500", heading: "text-emerald-600", bullet: "text-emerald-500"},
  amber:   { label: "Ámbar",     swatch: "#f59e0b", bar: "bg-amber-500",   heading: "text-amber-600",   bullet: "text-amber-500"  },
  violet:  { label: "Violeta",   swatch: "#8b5cf6", bar: "bg-violet-500",  heading: "text-violet-600",  bullet: "text-violet-500" },
  sky:     { label: "Cielo",     swatch: "#0ea5e9", bar: "bg-sky-500",     heading: "text-sky-600",     bullet: "text-sky-500"    },
};

// ─── Slide type ───────────────────────────────────────────────────────────────

export type Slide = {
  id: string;
  layout: LayoutPreset;
  /** Big heading — rendered as text-4xl font-bold */
  heading: string;
  /** Medium subtitle — rendered as text-xl font-medium */
  subtitle?: string;
  /** Body text or code content — rendered as text-base */
  body?: string;
  /** Left column text (split layout) */
  leftColumn?: string;
  /** Right column text (split layout) */
  rightColumn?: string;
  /** Background image URL */
  bgImage?: string;
  /** Overlay intensity on top of background image */
  bgOverlay?: "none" | "medium" | "dark";
  /** Render body in a monospace code block */
  isCode?: boolean;
  /** Code language label (e.g. "javascript") */
  language?: string;
  /** Embedded interactive tool — replaces body content in the slide */
  toolSpec?: VisualSpec;
  /** Embedded v2 block — replaces body content in the slide */
  blockSpec?: Block;
  /** Speaker notes (no se muestran en la presentación) */
  notes?: string;
};

// ─── Tool parameter schema ────────────────────────────────────────────────────

export type ToolParamDef = {
  id: string;
  labelKey: string;
  input: "number" | "boolean" | "select" | "text" | "color";
  unit?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue: number | boolean | string;
  options?: { labelKey?: string; label?: string; value: string }[];
  descriptionKey?: string;
  /** Dot-notation path within the VisualSpec to set the value (supports array indices like "waves.0.amplitude") */
  path: string;
  /** Only show this param when another field in the spec equals a specific value */
  condition?: { path: string; value: unknown };
};

/** Editable parameter schemas keyed by VisualSpec.kind */
export const TOOL_PARAM_SCHEMAS: Record<string, ToolParamDef[]> = {
  "chart": [
    {
      id: "chartType", labelKey: "theorySlideEditor.tipoDeGrafico", input: "select",
      path: "chartType", defaultValue: "bar",
      options: [
        { labelKey: "theorySlideEditor.barras",      value: "bar"     },
        { labelKey: "theorySlideEditor.lineas",      value: "line"    },
        { labelKey: "theorySlideEditor.area",        value: "area"    },
        { labelKey: "theorySlideEditor.torta",       value: "pie"     },
        { labelKey: "theorySlideEditor.dispersion",  value: "scatter" },
      ],
    },
  ],
  "funciones-graficas": [
    { id: "xMin",  labelKey: "theorySlideEditor.xMinimo",    input: "number", path: "axes.x.min",            defaultValue: -10, min: -100, max: -1,  step: 1   },
    { id: "xMax",  labelKey: "theorySlideEditor.xMaximo",    input: "number", path: "axes.x.max",            defaultValue: 10,  min: 1,    max: 100,  step: 1   },
    { id: "yMin",  labelKey: "theorySlideEditor.yMinimo",    input: "number", path: "axes.y.min",            defaultValue: -10, min: -100, max: -1,  step: 1   },
    { id: "yMax",  labelKey: "theorySlideEditor.yMaximo",    input: "number", path: "axes.y.max",            defaultValue: 10,  min: 1,    max: 100,  step: 1   },
    { id: "expr",  labelKey: "theorySlideEditor.expresionF", input: "text",  path: "functions.0.expression", defaultValue: "x^2", descriptionKey: "theorySlideEditor.expresionMatematicaDeLaPrimera" },
  ],
  "physics-motion-chart": [
    {
      id: "motionType", labelKey: "theorySlideEditor.tipoDeMovimiento", input: "select",
      path: "motion.type", defaultValue: "MRU",
      options: [{ labelKey: "theorySlideEditor.mruVelConstante", value: "MRU" }, { labelKey: "theorySlideEditor.mruvAcelerado", value: "MRUV" }],
    },
    { id: "time", labelKey: "theorySlideEditor.tiempoTotal",   input: "number", path: "motion.time",             defaultValue: 10, min: 1, max: 60,  step: 1,   unit: "s"    },
    { id: "x0",   labelKey: "theorySlideEditor.posInicial",   input: "number", path: "motion.initialPosition",  defaultValue: 0,  min: -100, max: 100, step: 1, unit: "m"  },
    { id: "v0",   labelKey: "theorySlideEditor.velInicial",   input: "number", path: "motion.initialVelocity",  defaultValue: 5,  min: -50, max: 50, step: 1,   unit: "m/s" },
    { id: "a",    labelKey: "theorySlideEditor.aceleracion",    input: "number", path: "motion.acceleration",     defaultValue: 2,  min: -20, max: 20, step: 0.5, unit: "m/s²", descriptionKey: "theorySlideEditor.soloAplicaEnMruv" },
  ],
  "stat-distribution": [
    {
      id: "distType", labelKey: "theorySlideEditor.distribucion", input: "select",
      path: "distributionType", defaultValue: "normal",
      options: [{ labelKey: "theorySlideEditor.normal", value: "normal" }, { labelKey: "theorySlideEditor.binomial", value: "binomial" }, { labelKey: "theorySlideEditor.uniforme", value: "uniform" }],
    },
    // Normal
    { id: "mean",   labelKey: "theorySlideEditor.media",          input: "number", path: "parameters.mean",   defaultValue: 0,   min: -100, max: 100, step: 1,   condition: { path: "distributionType", value: "normal" } },
    { id: "stdDev", labelKey: "theorySlideEditor.desvEstandar", input: "number", path: "parameters.stdDev", defaultValue: 1,   min: 0.1,  max: 20,  step: 0.1, condition: { path: "distributionType", value: "normal" } },
    // Binomial
    { id: "n", labelKey: "theorySlideEditor.ensayosN",      input: "number", path: "parameters.n", defaultValue: 10,  min: 1,    max: 50,   step: 1,    condition: { path: "distributionType", value: "binomial" } },
    { id: "p", labelKey: "theorySlideEditor.probabilidadP", input: "number", path: "parameters.p", defaultValue: 0.5, min: 0.01, max: 0.99, step: 0.01, condition: { path: "distributionType", value: "binomial" } },
    // Uniforme
    { id: "uMin", labelKey: "theorySlideEditor.minimo", input: "number", path: "parameters.min", defaultValue: 0,  min: -100, max: 100, step: 1, condition: { path: "distributionType", value: "uniform" } },
    { id: "uMax", labelKey: "theorySlideEditor.maximo", input: "number", path: "parameters.max", defaultValue: 10, min: -100, max: 100, step: 1, condition: { path: "distributionType", value: "uniform" } },
    // Común
    { id: "samples", labelKey: "theorySlideEditor.muestras", input: "number", path: "samples", defaultValue: 100, min: 10, max: 1000, step: 10 },
  ],
  "wave-interference": [
    { id: "w1amp",  labelKey: "theorySlideEditor.amplitudOnda1",   input: "number",  path: "waves.0.amplitude",          defaultValue: 1, min: 0.1, max: 5,  step: 0.1        },
    { id: "w1freq", labelKey: "theorySlideEditor.frecuenciaOnda1", input: "number",  path: "waves.0.frequency",          defaultValue: 1, min: 0.1, max: 10, step: 0.1, unit: "Hz" },
    { id: "w2amp",  labelKey: "theorySlideEditor.amplitudOnda2",   input: "number",  path: "waves.1.amplitude",          defaultValue: 1, min: 0.1, max: 5,  step: 0.1        },
    { id: "w2freq", labelKey: "theorySlideEditor.frecuenciaOnda2", input: "number",  path: "waves.1.frequency",          defaultValue: 2, min: 0.1, max: 10, step: 0.1, unit: "Hz" },
    { id: "superpos", labelKey: "theorySlideEditor.verSuperposicion", input: "boolean", path: "superposition.enabled",   defaultValue: true },
  ],
  "funciones-grafico": [
    { id: "xMin", labelKey: "theorySlideEditor.xMinimo", input: "number", path: "axes.x.min", defaultValue: -10, min: -100, max: -1, step: 1 },
    { id: "xMax", labelKey: "theorySlideEditor.xMaximo", input: "number", path: "axes.x.max", defaultValue: 10,  min: 1, max: 100, step: 1  },
  ],

  // ── Estadística ─────────────────────────────────────────────────────────────
  "stat-regression": [
    { id: "regrType",   labelKey: "theorySlideEditor.tipoDeRegresion",  input: "select", path: "regression.type",   defaultValue: "linear",
      options: [{ labelKey: "theorySlideEditor.lineal", value: "linear" }, { labelKey: "theorySlideEditor.cuadratica", value: "quadratic" }] },
    { id: "slope",     labelKey: "theorySlideEditor.pendienteA",       input: "number", path: "generator.slope",     defaultValue: 2,   min: -10, max: 10,  step: 0.5 },
    { id: "intercept", labelKey: "theorySlideEditor.interceptoB",      input: "number", path: "generator.intercept", defaultValue: 0,   min: -20, max: 20,  step: 0.5 },
    { id: "curvature", labelKey: "theorySlideEditor.curvaturaC",       input: "number", path: "generator.curvature", defaultValue: 0.2, min: -3,  max: 3,   step: 0.1,
      condition: { path: "regression.type", value: "quadratic" } },
    { id: "noise",     labelKey: "theorySlideEditor.dispersion",          input: "number", path: "generator.noise",     defaultValue: 1,   min: 0,   max: 8,   step: 0.5 },
    { id: "nPoints",   labelKey: "theorySlideEditor.nDePuntos",        input: "number", path: "generator.nPoints",   defaultValue: 10,  min: 4,   max: 30,  step: 1   },
    { id: "genXMin",   labelKey: "theorySlideEditor.xMinimo",            input: "number", path: "generator.xMin",      defaultValue: 0,   min: -50, max: 50,  step: 1   },
    { id: "genXMax",   labelKey: "theorySlideEditor.xMaximo",            input: "number", path: "generator.xMax",      defaultValue: 10,  min: 1,   max: 100, step: 1   },
    { id: "xLabel",    labelKey: "theorySlideEditor.etiquetaEjeX",      input: "text",   path: "axes.x.label",        defaultValue: "Variable X" },
    { id: "yLabel",    labelKey: "theorySlideEditor.etiquetaEjeY",      input: "text",   path: "axes.y.label",        defaultValue: "Variable Y" },
  ],

  // ── Ciencias Sociales ────────────────────────────────────────────────────────
  "social-population-pyramid": [
    { id: "title",       labelKey: "comun.titulo",         input: "text",   path: "title",       defaultValue: "Pirámide de población" },
    { id: "description", labelKey: "comun.descripcion",    input: "text",   path: "description", defaultValue: "" },
    { id: "unit",        labelKey: "theorySlideEditor.unidad",         input: "select", path: "unit",        defaultValue: "percent",
      options: [{ labelKey: "theorySlideEditor.porcentaje", value: "percent" }, { labelKey: "theorySlideEditor.personas", value: "count" }] },
    { id: "maleColor",   labelKey: "theorySlideEditor.colorHombres",  input: "color",  path: "maleColor",   defaultValue: "#60a5fa" },
    { id: "femaleColor", labelKey: "theorySlideEditor.colorMujeres",  input: "color",  path: "femaleColor", defaultValue: "#fb7185" },
  ],
  "social-choropleth": [
    { id: "title",     labelKey: "comun.titulo",         input: "text",   path: "title",          defaultValue: "Índice de desarrollo" },
    { id: "variable",  labelKey: "theorySlideEditor.variable",       input: "text",   path: "variable",       defaultValue: "IDH" },
    { id: "unit",      labelKey: "theorySlideEditor.unidad",         input: "text",   path: "unit",           defaultValue: "" },
    { id: "scaleMin",  labelKey: "theorySlideEditor.escalaMinima",  input: "number", path: "scale.min",      defaultValue: 0,   min: -1_000_000, max: 1_000_000, step: 0.01 },
    { id: "scaleMax",  labelKey: "theorySlideEditor.escalaMaxima",  input: "number", path: "scale.max",      defaultValue: 1,   min: -1_000_000, max: 1_000_000, step: 0.01 },
    { id: "colorFrom", labelKey: "theorySlideEditor.colorMinimo",   input: "color",  path: "scale.colors.0", defaultValue: "#dbeafe" },
    { id: "colorTo",   labelKey: "theorySlideEditor.colorMaximo",   input: "color",  path: "scale.colors.1", defaultValue: "#1d4ed8" },
  ],

  // ── Filosofía ────────────────────────────────────────────────────────────────
  "phil-argument-map": [
    { id: "claim", labelKey: "theorySlideEditor.afirmacionCentral", input: "text", path: "claim.text", defaultValue: "Ingrese la afirmación central" },
  ],
  "phil-dilemma": [
    { id: "scenario", labelKey: "theorySlideEditor.descripcionDelDilema", input: "text", path: "scenario", defaultValue: "Describa el dilema ético" },
  ],

  // ── Arte ─────────────────────────────────────────────────────────────────────
  "art-color-wheel": [
    { id: "hue",     labelKey: "theorySlideEditor.matizBase0360", input: "number", path: "selectedHue", defaultValue: 200, min: 0, max: 360, step: 1 },
    { id: "harmony", labelKey: "theorySlideEditor.armonia",            input: "select", path: "harmony",     defaultValue: "complementary",
      options: [
        { labelKey: "theorySlideEditor.complementaria",       value: "complementary"       },
        { labelKey: "theorySlideEditor.triadica",             value: "triadic"             },
        { labelKey: "theorySlideEditor.analoga",              value: "analogous"           },
        { labelKey: "theorySlideEditor.splitComplementaria", value: "split-complementary" },
      ] },
  ],
  "art-composition": [
    { id: "rule", labelKey: "theorySlideEditor.reglaDeComposicion", input: "select", path: "rule", defaultValue: "rule-of-thirds",
      options: [
        { labelKey: "theorySlideEditor.reglaDeTercios", value: "rule-of-thirds" },
        { labelKey: "theorySlideEditor.proporcionAurea", value: "golden-ratio"   },
        { labelKey: "theorySlideEditor.simetria",         value: "symmetry"       },
        { labelKey: "theorySlideEditor.diagonal",         value: "diagonal"       },
      ] },
    { id: "cw", labelKey: "theorySlideEditor.anchoDelLienzo", input: "number", path: "canvasWidth",  defaultValue: 640, min: 200, max: 1920, step: 10, unit: "px" },
    { id: "ch", labelKey: "theorySlideEditor.altoDelLienzo",  input: "number", path: "canvasHeight", defaultValue: 480, min: 150, max: 1080, step: 10, unit: "px" },
  ],

  // ── Biología ─────────────────────────────────────────────────────────────────
  "bio-cell-diagram": [
    { id: "cellType", labelKey: "theorySlideEditor.tipoDeCelula", input: "select", path: "cellType", defaultValue: "animal",
      options: [{ labelKey: "theorySlideEditor.animal", value: "animal" }, { labelKey: "theorySlideEditor.vegetal", value: "plant" }, { labelKey: "theorySlideEditor.bacteria", value: "bacteria" }] },
  ],
  "bio-genetics": [
    { id: "cross", labelKey: "theorySlideEditor.tipoDeCruce", input: "select", path: "cross", defaultValue: "monohybrid",
      options: [{ labelKey: "theorySlideEditor.monohibrido", value: "monohybrid" }, { labelKey: "theorySlideEditor.dihibrido", value: "dihybrid" }] },
  ],
  "bio-population-dynamics": [
    { id: "model", labelKey: "theorySlideEditor.modelo", input: "select", path: "model", defaultValue: "logistic",
      options: [
        { labelKey: "theorySlideEditor.logistico",      value: "logistic"       },
        { labelKey: "theorySlideEditor.lotkaVolterra", value: "lotka-volterra" },
        { labelKey: "theorySlideEditor.exponencial",    value: "exponential"    },
      ] },
    { id: "capacity", labelKey: "theorySlideEditor.capacidadDeCargaK", input: "number", path: "parameters.carryingCapacity", defaultValue: 1000, min: 10, max: 100000, step: 10, descriptionKey: "theorySlideEditor.soloModeloLogistico" },
    { id: "growRate",  labelKey: "theorySlideEditor.tasaDeCrecimiento",   input: "number", path: "parameters.growthRate",       defaultValue: 0.1,  min: 0.01, max: 5, step: 0.01 },
  ],

  // ── Música ───────────────────────────────────────────────────────────────────
  "music-waveform": [
    { id: "baseFreq", labelKey: "theorySlideEditor.frecuenciaBase", input: "number", path: "baseFrequency", defaultValue: 440, min: 20, max: 20000, step: 1, unit: "Hz" },
    { id: "note",     labelKey: "theorySlideEditor.nota",            input: "text",   path: "note",          defaultValue: "A4" },
  ],
  "music-rhythm-grid": [
    { id: "tempo",    labelKey: "theorySlideEditor.tempo",             input: "number", path: "tempo",               defaultValue: 120, min: 40, max: 240, step: 1,  unit: "BPM" },
    { id: "measures", labelKey: "theorySlideEditor.compases",          input: "number", path: "measures",            defaultValue: 2,   min: 1,  max: 8,   step: 1 },
    { id: "tsBeats",  labelKey: "theorySlideEditor.pulsosPorCompas", input: "number", path: "timeSignature.beats", defaultValue: 4,   min: 2,  max: 12,  step: 1 },
  ],

  // ── Política ─────────────────────────────────────────────────────────────────
  "pol-voting-systems": [
    { id: "c1name", labelKey: "theorySlideEditor.candidato1", input: "text", path: "candidates.0.name", defaultValue: "Candidato A" },
    { id: "c2name", labelKey: "theorySlideEditor.candidato2", input: "text", path: "candidates.1.name", defaultValue: "Candidato B" },
    { id: "c3name", labelKey: "theorySlideEditor.candidato3", input: "text", path: "candidates.2.name", defaultValue: "Candidato C" },
  ],
  "pol-power-distribution": [
    { id: "system", labelKey: "theorySlideEditor.sistemaDeGobierno", input: "select", path: "system", defaultValue: "presidential",
      options: [
        { labelKey: "theorySlideEditor.presidencialismo", value: "presidential" },
        { labelKey: "theorySlideEditor.parlamentarismo",  value: "parliamentary" },
        { labelKey: "theorySlideEditor.federalismo",      value: "federal"       },
      ] },
  ],

  // ── Educación Cívica ─────────────────────────────────────────────────────────
  "civic-rights-tree": [
    { id: "rootLabel", labelKey: "theorySlideEditor.nodoRaiz", input: "text", path: "root.label", defaultValue: "Constitución" },
  ],
  "civic-budget": [
    { id: "totalBudget", labelKey: "theorySlideEditor.presupuestoTotal", input: "number", path: "totalBudget", defaultValue: 100000, min: 0, max: 1000000000, step: 1000 },
    { id: "currency",    labelKey: "theorySlideEditor.moneda",            input: "text",   path: "currency",    defaultValue: "$" },
  ],

  // ── Ciencias Ambientales ─────────────────────────────────────────────────────
  "env-ecosystem": [
    { id: "biome", labelKey: "theorySlideEditor.bioma", input: "select", path: "biome", defaultValue: "bosque-tropical",
      options: [
        { labelKey: "theorySlideEditor.bosqueTropical", value: "bosque-tropical" },
        { labelKey: "theorySlideEditor.desierto",        value: "desierto"        },
        { labelKey: "theorySlideEditor.oceano",          value: "oceano"          },
        { labelKey: "theorySlideEditor.pradera",         value: "pradera"         },
        { labelKey: "theorySlideEditor.tundra",          value: "tundra"          },
      ] },
    { id: "energyLoss", labelKey: "theorySlideEditor.perdidaDeEnergiaEntreNiveles", input: "number", path: "energyLoss", defaultValue: 90, min: 1, max: 99, step: 1, unit: "%" },
  ],
  "env-carbon-cycle": [
    { id: "humanFluxAmt", labelKey: "theorySlideEditor.flujoHumanoDeCarbono", input: "number", path: "humanFlux.amount", defaultValue: 9, min: 0, max: 100, step: 0.5, unit: "GtC/año" },
  ],

  // ── Informática ──────────────────────────────────────────────────────────────
  "cs-sorting": [
    { id: "algorithm", labelKey: "theorySlideEditor.algoritmo", input: "select", path: "algorithm", defaultValue: "bubble",
      options: [
        { labelKey: "theorySlideEditor.burbuja",   value: "bubble"    },
        { labelKey: "theorySlideEditor.seleccion", value: "selection" },
        { labelKey: "theorySlideEditor.insercion", value: "insertion" },
        { labelKey: "theorySlideEditor.merge",     value: "merge"     },
        { labelKey: "theorySlideEditor.quick",     value: "quick"     },
      ] },
    { id: "step", labelKey: "theorySlideEditor.pasoInicial", input: "number", path: "currentStep", defaultValue: 0, min: 0, max: 100, step: 1 },
  ],
  "cs-graph": [
    { id: "directed",  labelKey: "theorySlideEditor.dirigido",  input: "boolean", path: "directed",  defaultValue: false },
    { id: "weighted",  labelKey: "theorySlideEditor.ponderado", input: "boolean", path: "weighted",  defaultValue: false },
    { id: "algorithm", labelKey: "theorySlideEditor.algoritmo", input: "select",  path: "algorithm", defaultValue: "bfs",
      options: [
        { label: "BFS",      value: "bfs"      },
        { label: "DFS",      value: "dfs"      },
        { labelKey: "theorySlideEditor.dijkstra", value: "dijkstra" },
        { labelKey: "theorySlideEditor.ninguno",  value: "none"     },
      ] },
  ],
  "cs-binary-tree": [
    { id: "traversal", labelKey: "theorySlideEditor.recorrido", input: "select", path: "traversalOrder", defaultValue: "inorder",
      options: [
        { labelKey: "theorySlideEditor.inorden",   value: "inorder"    },
        { labelKey: "theorySlideEditor.preorden",  value: "preorder"   },
        { labelKey: "theorySlideEditor.postorden", value: "postorder"  },
        { labelKey: "theorySlideEditor.porNivel", value: "levelorder" },
      ] },
    { id: "isBST", labelKey: "theorySlideEditor.esBst", input: "boolean", path: "isBST", defaultValue: true },
  ],

  // ── Ciencias Naturales ───────────────────────────────────────────────────────
  "nat-weather": [
    { id: "season", labelKey: "theorySlideEditor.estacion", input: "select", path: "season", defaultValue: "primavera",
      options: [
        { labelKey: "theorySlideEditor.verano",    value: "verano"    },
        { labelKey: "theorySlideEditor.otono",     value: "otono"     },
        { labelKey: "theorySlideEditor.invierno",  value: "invierno"  },
        { labelKey: "theorySlideEditor.primavera", value: "primavera" },
      ] },
    { id: "temp",   labelKey: "theorySlideEditor.temperatura",     input: "number", path: "variables.temperature",  defaultValue: 22,   min: -60,  max: 60,   step: 0.5, unit: "°C"   },
    { id: "hum",    labelKey: "theorySlideEditor.humedad",         input: "number", path: "variables.humidity",      defaultValue: 65,   min: 0,    max: 100,  step: 1,   unit: "%"    },
    { id: "pres",   labelKey: "theorySlideEditor.presion",         input: "number", path: "variables.pressure",      defaultValue: 1013, min: 900,  max: 1100, step: 1,   unit: "hPa"  },
    { id: "wind",   labelKey: "theorySlideEditor.velDelViento", input: "number", path: "variables.windSpeed",     defaultValue: 15,   min: 0,    max: 200,  step: 1,   unit: "km/h" },
    { id: "precip", labelKey: "theorySlideEditor.precipitacion",   input: "number", path: "variables.precipitation", defaultValue: 12,   min: 0,    max: 500,  step: 1,   unit: "mm"   },
  ],
  "nat-water-cycle": [
    { id: "humanImpact", labelKey: "theorySlideEditor.factorImpactoHumano", input: "number", path: "humanImpactFactor", defaultValue: 0.25, min: 0, max: 1, step: 0.05, descriptionKey: "theorySlideEditor.impactoHumano01" },
  ],

  // ── Cocina ───────────────────────────────────────────────────────────────────
  "cook-recipe-scaler": [
    { id: "servingsBase",    labelKey: "theorySlideEditor.porcionesBase",     input: "number", path: "servingsBase",    defaultValue: 4, min: 1, max: 100, step: 1 },
    { id: "servingsCurrent", labelKey: "theorySlideEditor.porcionesActuales", input: "number", path: "servingsCurrent", defaultValue: 4, min: 1, max: 100, step: 1 },
  ],
  "cook-maillard": [
    { id: "temperature", labelKey: "theorySlideEditor.temperatura", input: "number", path: "temperature", defaultValue: 150, min: 0,  max: 300, step: 1,   unit: "°C"  },
    { id: "time",        labelKey: "theorySlideEditor.tiempo",      input: "number", path: "time",        defaultValue: 5,   min: 0,  max: 60,  step: 0.5, unit: "min" },
    { id: "moisture",    labelKey: "theorySlideEditor.humedad",     input: "number", path: "moisture",    defaultValue: 30,  min: 0,  max: 100, step: 1,   unit: "%"   },
  ],

  // ── Vida Práctica ─────────────────────────────────────────────────────────────
  "life-budget": [
    { id: "income",   labelKey: "theorySlideEditor.ingresoMensual", input: "number", path: "monthlyIncome", defaultValue: 100000, min: 0, max: 100000000, step: 1000 },
    { id: "currency", labelKey: "theorySlideEditor.moneda",          input: "text",   path: "currency",      defaultValue: "$" },
  ],
  "life-time-matrix": [
    { id: "totalHours", labelKey: "theorySlideEditor.horasSemanales", input: "number", path: "totalHoursPerWeek", defaultValue: 40, min: 1, max: 168, step: 1, unit: "hs" },
  ],

  // ── Física ───────────────────────────────────────────────────────────────────
  "physics-forces-vectors": [
    { id: "unit",      labelKey: "theorySlideEditor.unidad",             input: "text",    path: "unit",                   defaultValue: "N"   },
    { id: "showAxes",  labelKey: "theorySlideEditor.mostrarEjes",        input: "boolean", path: "options.showAxes",       defaultValue: true  },
    { id: "showComps", labelKey: "theorySlideEditor.mostrarComponentes", input: "boolean", path: "options.showComponents", defaultValue: false },
  ],
  "energy-chart": [
    { id: "xVar",       labelKey: "theorySlideEditor.variableEjeX",          input: "select", path: "axes.x.variable",       defaultValue: "tiempo",
      options: [{ labelKey: "theorySlideEditor.tiempo", value: "tiempo" }, { labelKey: "theorySlideEditor.posicion", value: "posicion" }] },
    { id: "conservTol", labelKey: "theorySlideEditor.toleranciaConservacion", input: "number", path: "conservation.tolerance", defaultValue: 2, min: 0, max: 100, step: 0.5, unit: "J" },
  ],
  "circuit": [
    { id: "comp0val", labelKey: "theorySlideEditor.valorComponente1", input: "number", path: "components.0.value", defaultValue: 9,  min: 0, max: 10000, step: 0.1 },
    { id: "comp1val", labelKey: "theorySlideEditor.valorComponente2", input: "number", path: "components.1.value", defaultValue: 30, min: 0, max: 10000, step: 0.1 },
    { id: "comp2val", labelKey: "theorySlideEditor.valorComponente3", input: "number", path: "components.2.value", defaultValue: 60, min: 0, max: 10000, step: 0.1 },
  ],
  "field-lines": [
    { id: "polarity0",  labelKey: "theorySlideEditor.polaridadFuente1", input: "select", path: "sources.0.polarity",  defaultValue: "positiva",
      options: [{ labelKey: "theorySlideEditor.positivaNorte", value: "positiva" }, { labelKey: "theorySlideEditor.negativaSur", value: "negativa" }] },
    { id: "magnitude0", labelKey: "theorySlideEditor.magnitudFuente1",  input: "number", path: "sources.0.magnitude", defaultValue: 1, min: 0, max: 100, step: 0.5 },
    { id: "polarity1",  labelKey: "theorySlideEditor.polaridadFuente2", input: "select", path: "sources.1.polarity",  defaultValue: "negativa",
      options: [{ labelKey: "theorySlideEditor.positivaNorte", value: "positiva" }, { labelKey: "theorySlideEditor.negativaSur", value: "negativa" }] },
  ],
  "optics-rays": [
    { id: "elemType",  labelKey: "theorySlideEditor.elementoOptico",      input: "select", path: "element.type",        defaultValue: "lente-convergente",
      options: [
        { labelKey: "theorySlideEditor.lenteConvergente", value: "lente-convergente" },
        { labelKey: "theorySlideEditor.lenteDivergente",  value: "lente-divergente"  },
        { labelKey: "theorySlideEditor.espejoPlano",      value: "espejo-plano"      },
        { labelKey: "theorySlideEditor.espejoConcavo",    value: "espejo-concavo"    },
        { labelKey: "theorySlideEditor.espejoConvexo",    value: "espejo-convexo"    },
      ] },
    { id: "objHeight", labelKey: "theorySlideEditor.alturaDelObjeto",    input: "number", path: "object.height",       defaultValue: 40, min: 1,    max: 200,  step: 1,  unit: "px" },
    { id: "elemX",     labelKey: "theorySlideEditor.posicionDelElemento",input: "number", path: "element.positionX",   defaultValue: 0,  min: -400, max: 400,  step: 10, unit: "px" },
  ],
  "physics-simulation": [
    { id: "param0", labelKey: "theorySlideEditor.alturaInicialH",    input: "number", path: "parameters.0.value", defaultValue: 50, min: 0,    max: 1000, step: 1,   unit: "m"   },
    { id: "param1", labelKey: "theorySlideEditor.velocidadInicialV", input: "number", path: "parameters.1.value", defaultValue: 0,  min: -100, max: 100,  step: 0.5, unit: "m/s" },
  ],

  // ── Química ──────────────────────────────────────────────────────────────────
  "chem-reaction": [
    { id: "reactant0", labelKey: "theorySlideEditor.reactivo1Formula", input: "text", path: "reactants.0.formula", defaultValue: "CH₄" },
    { id: "product0",  labelKey: "theorySlideEditor.producto1Formula", input: "text", path: "products.0.formula",  defaultValue: "CO₂" },
  ],
  "chem-structure": [
    { id: "edModel", labelKey: "theorySlideEditor.modeloAtomico", input: "select", path: "electronDistribution.model", defaultValue: "bohr",
      options: [
        { labelKey: "theorySlideEditor.bohr",             value: "bohr"             },
        { labelKey: "theorySlideEditor.nubeElectronica", value: "nube-electronica" },
        { labelKey: "theorySlideEditor.cuantico",         value: "cuantico"         },
      ] },
    { id: "edAtom", labelKey: "theorySlideEditor.elemento", input: "text", path: "electronDistribution.atom", defaultValue: "C" },
  ],
  "chem-periodic-table": [
    { id: "highlightProp", labelKey: "theorySlideEditor.propiedadDestacada", input: "select", path: "highlightProperty.key", defaultValue: "electronegativity",
      options: [
        { labelKey: "theorySlideEditor.clasificacion",      value: "classification"    },
        { labelKey: "theorySlideEditor.electronegatividad", value: "electronegativity" },
        { labelKey: "theorySlideEditor.radioAtomico",      value: "atomicRadius"      },
        { labelKey: "theorySlideEditor.energiaIonizacion", value: "ionizationEnergy"  },
      ] },
    { id: "scaleType", labelKey: "theorySlideEditor.tipoDeEscala", input: "select", path: "scale.type", defaultValue: "sequential",
      options: [{ labelKey: "theorySlideEditor.secuencial", value: "sequential" }, { labelKey: "theorySlideEditor.categorico", value: "categorical" }] },
  ],
  "chem-vsepr": [
    { id: "defaultMolId", labelKey: "theorySlideEditor.moleculaPorDefecto", input: "text", path: "defaultMoleculeId", defaultValue: "h2o" },
  ],
  "chem-titration": [
    { id: "currentPH", labelKey: "theorySlideEditor.phActual",            input: "number", path: "indicator.currentPH", defaultValue: 7,  min: 0, max: 14,  step: 0.1 },
    { id: "axisXMax",  labelKey: "theorySlideEditor.volumenMaxEjeX", input: "number", path: "axes.x.max",          defaultValue: 50, min: 5, max: 200, step: 1,  unit: "mL" },
  ],

  // ── Matemáticas ──────────────────────────────────────────────────────────────
  "geometria-plana-espacial": [
    { id: "fig0dim",  labelKey: "theorySlideEditor.dimensionFigura1", input: "select", path: "figures.0.dimension", defaultValue: "plana",
      options: [{ labelKey: "theorySlideEditor.plana2d", value: "plana" }, { labelKey: "theorySlideEditor.espacial3d", value: "espacial" }] },
    { id: "fig0name", labelKey: "theorySlideEditor.nombreFigura1",    input: "text",   path: "figures.0.name",      defaultValue: "Triángulo rectángulo" },
  ],
  "trigonometria-avanzada": [
    { id: "circleR",  labelKey: "theorySlideEditor.radioCirculoUnitario", input: "number", path: "unitCircle.radius",     defaultValue: 1,   min: 0.1, max: 10,  step: 0.1 },
    { id: "f0amp",    labelKey: "theorySlideEditor.amplitudFuncion1",     input: "number", path: "functions.0.amplitude", defaultValue: 1,   min: 0.1, max: 10,  step: 0.1 },
    { id: "f0period", labelKey: "theorySlideEditor.periodoFuncion1",      input: "number", path: "functions.0.period",    defaultValue: 360, min: 1,   max: 720, step: 1,  unit: "°" },
  ],
  "algebra-calculo-visual": [
    { id: "intLower", labelKey: "theorySlideEditor.limiteInferiorIntegral", input: "number", path: "integrals.0.bounds.lower", defaultValue: 0, min: -100, max: 100, step: 0.5 },
    { id: "intUpper", labelKey: "theorySlideEditor.limiteSuperiorIntegral", input: "number", path: "integrals.0.bounds.upper", defaultValue: 3, min: -100, max: 100, step: 0.5 },
  ],

  // ── Matemáticas (variantes básicas — referencian paths compatibles) ──────────
  // geometria, trigonometria y algebra-calculo son versiones simplificadas de sus
  // contrapartes avanzadas. Los paths de texto son comunes entre ambas versiones.
  "geometria": [
    { id: "fig0name", labelKey: "theorySlideEditor.nombreFigura1", input: "text" as const, path: "figures.0.name", defaultValue: "Triángulo rectángulo" },
    { id: "fig0formula", labelKey: "theorySlideEditor.formulaFigura1", input: "text" as const, path: "figures.0.formula", defaultValue: "A = base × altura / 2" },
  ],
  "trigonometria": [
    { id: "ident0expr", labelKey: "theorySlideEditor.identidadPrincipal", input: "text" as const, path: "identities.0.expression", defaultValue: "sin²θ + cos²θ = 1" },
  ],
  "algebra-calculo": [
    { id: "topic0label", labelKey: "theorySlideEditor.temaPrincipal", input: "text" as const, path: "topics.0.label", defaultValue: "Derivadas" },
    { id: "topic0formula", labelKey: "theorySlideEditor.formula", input: "text" as const, path: "topics.0.formula", defaultValue: "f'(x) = lim(Δx→0) [f(x+Δx) - f(x)] / Δx" },
  ],

  // ── Gráficos generales ───────────────────────────────────────────────────────
  "timeline": [
    { id: "rangeStart", labelKey: "theorySlideEditor.anoInicio", input: "number", path: "range.start", defaultValue: 1900, min: -5000, max: 3000, step: 1 },
    { id: "rangeEnd",   labelKey: "theorySlideEditor.anoFin",    input: "number", path: "range.end",   defaultValue: 2000, min: -5000, max: 3000, step: 1 },
  ],
  "concept-map": [
    { id: "centralNode", labelKey: "theorySlideEditor.conceptoCentral", input: "text", path: "nodes.0.label", defaultValue: "Concepto principal" },
  ],
  "flow": [
    { id: "firstStep", labelKey: "theorySlideEditor.primerPaso", input: "text", path: "steps.0.label", defaultValue: "Inicio" },
  ],
  "map": [
    { id: "zoom", labelKey: "theorySlideEditor.zoom",     input: "number", path: "viewport.zoom",     defaultValue: 5,     min: 1,    max: 20,  step: 1    },
    { id: "lat",  labelKey: "theorySlideEditor.latitud",  input: "number", path: "viewport.center.0", defaultValue: -34.6, min: -90,  max: 90,  step: 0.01 },
    { id: "lng",  labelKey: "theorySlideEditor.longitud", input: "number", path: "viewport.center.1", defaultValue: -58.4, min: -180, max: 180, step: 0.01 },
  ],
};

/** Read a value at a dot-path within an object (supports numeric array indices) */
export function getAtPath(obj: unknown, path: string): unknown {
  return path.split(".").reduce((cur: unknown, key) => {
    if (cur === null || cur === undefined || typeof cur !== "object") return undefined;
    const idx = parseInt(key, 10);
    if (!isNaN(idx) && Array.isArray(cur)) return (cur as unknown[])[idx];
    return (cur as Record<string, unknown>)[key];
  }, obj);
}

/** Return a deep copy of obj with the value at dot-path set to value */
export function setAtPath(obj: unknown, path: string, value: unknown): unknown {
  const dot = path.indexOf(".");
  if (dot === -1) {
    const idx = parseInt(path, 10);
    if (!isNaN(idx)) {
      const arr = Array.isArray(obj) ? [...(obj as unknown[])] : [];
      arr[idx] = value;
      return arr;
    }
    return { ...(typeof obj === "object" && obj !== null ? obj : {}), [path]: value };
  }
  const head = path.slice(0, dot);
  const rest = path.slice(dot + 1);
  const idx = parseInt(head, 10);
  if (!isNaN(idx)) {
    const arr = Array.isArray(obj) ? [...(obj as unknown[])] : [];
    arr[idx] = setAtPath(arr[idx], rest, value);
    return arr;
  }
  const rec = typeof obj === "object" && obj !== null ? (obj as Record<string, unknown>) : {};
  return { ...rec, [head]: setAtPath(rec[head], rest, value) };
}

// ─── Serialization ────────────────────────────────────────────────────────────

/** Maps old SlideLayout string values to the new LayoutPreset system */
function legacyLayoutToPreset(raw?: string): LayoutPreset {
  const valid: LayoutPreset[] = ["centered", "top", "split", "bottom-text", "quote"];
  if (raw && valid.includes(raw as LayoutPreset)) return raw as LayoutPreset;
  const map: Record<string, LayoutPreset> = {
    "title-text":    "top",
    "title-only":    "centered",
    "image-caption": "bottom-text",
    "two-columns":   "split",
    code:            "top",
    quote:           "quote",
  };
  return map[raw ?? ""] ?? "top";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeSlide(raw: Record<string, any>): Slide {
  const layout = legacyLayoutToPreset(String(raw.layout ?? ""));
  return {
    id: String(raw.id ?? makeSlideId()),
    layout,
    heading: String(raw.heading ?? raw.title ?? ""),
    subtitle: raw.subtitle ? String(raw.subtitle) : undefined,
    body: raw.body ? String(raw.body) : undefined,
    leftColumn: raw.leftColumn ? String(raw.leftColumn) : undefined,
    rightColumn: raw.rightColumn ? String(raw.rightColumn) : undefined,
    bgImage: raw.bgImage ? String(raw.bgImage) : undefined,
    bgOverlay: (["none", "medium", "dark"].includes(String(raw.bgOverlay ?? ""))
      ? raw.bgOverlay
      : "none") as Slide["bgOverlay"],
    isCode: Boolean(raw.isCode) || String(raw.layout) === "code",
    language: raw.language ? String(raw.language) : undefined,
    notes: raw.notes ? String(raw.notes) : undefined,
    toolSpec: raw.toolSpec && typeof raw.toolSpec === "object"
      ? (raw.toolSpec as VisualSpec)
      : undefined,
    blockSpec:
      raw.blockSpec &&
      typeof raw.blockSpec === "object" &&
      typeof (raw.blockSpec as Record<string, unknown>).id === "string" &&
      typeof (raw.blockSpec as Record<string, unknown>).type === "string"
        ? (raw.blockSpec as Block)
        : undefined,
  };
}

function normalizeTheme(raw?: unknown): ThemeKey {
  return (raw && Object.keys(THEMES).includes(String(raw)) ? raw : "minimal") as ThemeKey;
}

function normalizeAccentColor(raw?: unknown): AccentColor | undefined {
  return raw && Object.keys(ACCENT_COLORS).includes(String(raw))
    ? (raw as AccentColor)
    : undefined;
}

export function slidesToDetail(
  slides: Slide[],
  theme: ThemeKey = "minimal",
  accentColor?: AccentColor,
): string {
  return JSON.stringify({ version: 3, theme, accentColor, slides });
}

/** Returns just the Slide array — backward-compat helper. */
export function detailToSlides(detail: string): Slide[] {
  return detailToPresentation(detail).slides;
}

/** Returns slides, theme and accentColor. Handles all serialization versions. */
export function detailToPresentation(detail: string): {
  slides: Slide[];
  theme: ThemeKey;
  accentColor?: AccentColor;
} {
  try {
    const parsed = JSON.parse(detail);
    if (Array.isArray(parsed)) {
      return { slides: parsed.map(normalizeSlide), theme: "minimal" };
    }
    if (parsed && typeof parsed === "object" && Array.isArray(parsed.slides)) {
      return {
        slides: parsed.slides.map(normalizeSlide),
        theme: normalizeTheme(parsed.theme),
        accentColor: normalizeAccentColor(parsed.accentColor),
      };
    }
  } catch {
    // not JSON — not a presentation
  }
  return { slides: [], theme: "minimal" };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function makeSlideId() {
  return `slide-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

// ─── Layout preview icon ──────────────────────────────────────────────────────

function LayoutIcon({ preset }: { preset: LayoutPreset }) {
  switch (preset) {
    case "centered":
      return (
        <div className="flex flex-col items-center justify-center gap-1 h-full">
          <div className="w-8 h-1.5 rounded bg-current opacity-80" />
          <div className="w-6 h-1 rounded bg-current opacity-40" />
          <div className="w-10 h-0.5 rounded bg-current opacity-25" />
          <div className="w-8 h-0.5 rounded bg-current opacity-25" />
        </div>
      );
    case "top":
      return (
        <div className="flex flex-col justify-start gap-1 h-full py-1">
          <div className="w-8 h-1.5 rounded bg-current opacity-80" />
          <div className="w-6 h-1 rounded bg-current opacity-40" />
          <div className="w-10 h-0.5 rounded bg-current opacity-25" />
          <div className="w-8 h-0.5 rounded bg-current opacity-25" />
        </div>
      );
    case "split":
      return (
        <div className="flex flex-col gap-1 h-full py-1">
          <div className="w-8 h-1.5 rounded bg-current opacity-80" />
          <div className="flex gap-1 flex-1 pt-0.5">
            <div className="flex-1 flex flex-col gap-0.5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-0.5 rounded bg-current opacity-30" />
              ))}
            </div>
            <div className="w-px bg-current opacity-20" />
            <div className="flex-1 flex flex-col gap-0.5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-0.5 rounded bg-current opacity-30" />
              ))}
            </div>
          </div>
        </div>
      );
    case "bottom-text":
      return (
        <div className="flex flex-col justify-end gap-1 h-full py-1">
          <div className="w-8 h-1.5 rounded bg-current opacity-80" />
          <div className="w-6 h-1 rounded bg-current opacity-40" />
          <div className="w-10 h-0.5 rounded bg-current opacity-25" />
        </div>
      );
    case "quote":
      return (
        <div className="flex flex-col items-center justify-center gap-1 h-full">
          <div className="text-[8px] opacity-30 leading-none font-serif">"</div>
          <div className="w-10 h-1 rounded bg-current opacity-70" />
          <div className="w-8 h-0.5 rounded bg-current opacity-40" />
          <div className="w-6 h-0.5 rounded bg-current opacity-25" />
        </div>
      );
  }
}

// ─── Slide thumbnail (sidebar visual preview) ─────────────────────────────────

type ThumbnailProps = {
  slide: Slide;
  theme: ThemeKey;
  accentColor?: AccentColor;
};

function SlideThumbnail({ slide, theme, accentColor }: ThumbnailProps) {
  const cfg = THEMES[theme] ?? THEMES.minimal;
  const accentCfg = accentColor ? ACCENT_COLORS[accentColor] : null;
  const headingStyle = accentCfg ? { color: accentCfg.swatch } : undefined;
  const hasBg = Boolean(slide.bgImage);
  const hasOverlay = hasBg && slide.bgOverlay !== "none";

  // Render inner slide at 416×234 (16:9), scale(0.5) → visually 208×117
  const inner = (
    <div
      className={`absolute top-0 left-0 origin-top-left overflow-hidden ${cfg.slide}`}
      style={{ width: "416px", height: "234px", transform: "scale(0.5)" }}
    >
      {hasBg && (
        <img
          src={slide.bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
      )}
      {hasOverlay && (
        <div className={`absolute inset-0 ${slide.bgOverlay === "dark" ? cfg.overlayDark : cfg.overlayMedium}`} />
      )}

      <div className="relative z-10 p-7 h-full flex flex-col gap-3">
        {slide.layout === "quote" ? (
          <div className="flex flex-col items-center justify-center h-full gap-3">
            <div className="text-5xl opacity-20 font-serif leading-none">&ldquo;</div>
            <div
              className="text-xl italic font-serif text-center leading-snug"
              style={hasOverlay ? { color: "white" } : headingStyle}
            >
              {slide.heading.slice(0, 80)}
            </div>
            {slide.subtitle && (
              <div className="text-sm opacity-60">— {slide.subtitle.slice(0, 40)}</div>
            )}
          </div>
        ) : slide.layout === "bottom-text" ? (
          <div className="flex flex-col justify-end h-full gap-2">
            {slide.heading && (
              <div
                className="text-xl font-bold leading-tight"
                style={hasOverlay ? { color: "white" } : headingStyle}
              >
                {slide.heading.slice(0, 60)}
              </div>
            )}
            {slide.subtitle && <div className="text-sm opacity-60">{slide.subtitle.slice(0, 60)}</div>}
          </div>
        ) : slide.layout === "split" ? (
          <>
            {slide.heading && (
              <div
                className="text-xl font-bold leading-tight flex-shrink-0"
                style={hasOverlay ? { color: "white" } : headingStyle}
              >
                {slide.heading.slice(0, 60)}
              </div>
            )}
            <div className="grid grid-cols-[1fr_1px_1fr] gap-4 flex-1 min-h-0">
              <div className="text-sm opacity-70 overflow-hidden">{(slide.leftColumn ?? slide.body ?? "").slice(0, 100)}</div>
              <div className="opacity-15 bg-current" />
              <div className="text-sm opacity-70 overflow-hidden">{(slide.rightColumn ?? "").slice(0, 100)}</div>
            </div>
          </>
        ) : slide.layout === "centered" ? (
          <div className="flex flex-col items-center justify-center h-full gap-2 text-center">
            {slide.heading && (
              <div
                className="text-xl font-bold leading-tight"
                style={hasOverlay ? { color: "white" } : headingStyle}
              >
                {slide.heading.slice(0, 60)}
              </div>
            )}
            {slide.subtitle && <div className="text-sm opacity-60">{slide.subtitle.slice(0, 60)}</div>}
            {!slide.toolSpec && !slide.blockSpec && slide.body && (
              <div className="text-xs opacity-50 line-clamp-2">{slide.body.slice(0, 80)}</div>
            )}
          </div>
        ) : (
          /* top (default) */
          <>
            {slide.heading && (
              <div
                className="text-xl font-bold leading-tight flex-shrink-0"
                style={hasOverlay ? { color: "white" } : headingStyle}
              >
                {slide.heading.slice(0, 60)}
              </div>
            )}
            {slide.subtitle && <div className="text-sm opacity-60 flex-shrink-0">{slide.subtitle.slice(0, 60)}</div>}
            {!slide.toolSpec && slide.body && (
              <div className="text-xs opacity-50 overflow-hidden">{slide.body.slice(0, 120)}</div>
            )}
          </>
        )}

        {/* Tool / block badge */}
        {(slide.toolSpec || slide.blockSpec) && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[10px] opacity-50">
            <span>⚙</span>
            <span className="font-medium">
              {slide.blockSpec ? slide.blockSpec.type : slide.toolSpec?.kind}
            </span>
          </div>
        )}

        {/* Accent bar at bottom */}
        {accentCfg && (
          <div
            className="absolute bottom-0 left-0 right-0 h-[3px]"
            style={{ background: accentCfg.swatch }}
          />
        )}
      </div>
    </div>
  );

  return (
    <div className="relative overflow-hidden w-full" style={{ aspectRatio: "16/9" }}>
      {inner}
    </div>
  );
}

// ─── WYSIWYG canvas (lienzo editable de la diapositiva) ──────────────────────

/**
 * Texto editable in-situ (contenteditable) **no controlado**: fija su contenido
 * sólo al montar — cada slide+campo remonta vía `key`, así React no reescribe el
 * DOM en cada tecla y el cursor no salta. Commitea texto plano en `onInput`
 * (el modelo `heading`/`subtitle`/`body` siguen siendo strings).
 */
function EditableText({
  value,
  onChange,
  className,
  placeholder,
  ariaLabel,
  multiline,
}: {
  value: string;
  onChange: (text: string) => void;
  className: string;
  placeholder: string;
  ariaLabel: string;
  multiline?: boolean;
}) {
  const initial = useRef(value);
  const setRef = useCallback((node: HTMLDivElement | null) => {
    if (node && node.textContent !== initial.current) {
      node.textContent = initial.current;
    }
  }, []);
  return (
    <div
      ref={setRef}
      contentEditable
      suppressContentEditableWarning
      role="textbox"
      aria-multiline={multiline || undefined}
      aria-label={ariaLabel}
      spellCheck={false}
      data-placeholder={placeholder}
      onInput={(e) => onChange(e.currentTarget.textContent ?? "")}
      className={`vb-editable ${className}`}
    />
  );
}

type StageProps = {
  slide: Slide;
  index: number;
  total: number;
  theme: ThemeKey;
  accentColor?: AccentColor;
  onChange: (patch: Partial<Omit<Slide, "id">>) => void;
  onPrev: () => void;
  onNext: () => void;
};

/** Lienzo WYSIWYG 16:9: título/subtítulo/cuerpo editables sobre la slide real. */
function SlideStage({ slide, index, total, theme, accentColor, onChange, onPrev, onNext }: StageProps) {
  const { t } = useI18n();
  const cfg = THEMES[theme] ?? THEMES.minimal;
  const accentCfg = accentColor ? ACCENT_COLORS[accentColor] : null;
  const isQuote = slide.layout === "quote";
  const isSplit = slide.layout === "split";
  const hasBg = Boolean(slide.bgImage);
  const hasOverlay = hasBg && slide.bgOverlay !== "none";

  // El tema/acento activos se inyectan como CSS vars del lienzo (cambian en vivo).
  const canvasStyle = {
    "--slide-bg": cfg.bg,
    "--slide-fg": cfg.fg,
    "--slide-accent": accentCfg?.swatch ?? cfg.fg,
  } as CSSProperties;

  let body: ReactNode = null;
  if (slide.blockSpec) {
    body = <div className="vb-s-embed"><BlockSpecRenderer block={slide.blockSpec} /></div>;
  } else if (slide.toolSpec) {
    body = <div className="vb-s-embed"><VisualizerRenderer spec={slide.toolSpec} /></div>;
  } else if (isSplit) {
    body = (
      <div className="vb-s-cols">
        <EditableText key={`${slide.id}-l`} value={slide.leftColumn ?? slide.body ?? ""} onChange={(t) => onChange({ leftColumn: t || undefined })} className="vb-s-body" placeholder={t("theorySlideEditor.columnaIzquierda")} ariaLabel="Columna izquierda" multiline />
        <EditableText key={`${slide.id}-r`} value={slide.rightColumn ?? ""} onChange={(t) => onChange({ rightColumn: t || undefined })} className="vb-s-body" placeholder={t("theorySlideEditor.columnaDerecha")} ariaLabel="Columna derecha" multiline />
      </div>
    );
  } else if (!isQuote) {
    body = (
      <EditableText
        key={`${slide.id}-b`}
        value={slide.body ?? ""}
        onChange={(t) => onChange({ body: t || undefined })}
        className={`vb-s-body${slide.isCode ? " is-code" : ""}`}
        placeholder={slide.isCode ? "// Escribí tu código…" : "Cuerpo de la diapositiva — texto libre, listas con guiones (-) o numeradas."}
        ariaLabel={slide.isCode ? "Código" : "Cuerpo de texto"}
        multiline
      />
    );
  }

  return (
    <section className="vb-stage" aria-label={t("theorySlideEditor.lienzoDeLaDiapositiva")}>
      <div className="vb-stage-toolbar">
        <span className="info">{t("theorySlideEditor.diapositiva")}<strong>{index + 1}</strong> de {total}
        </span>
        <span className="vb-stage-badge" aria-hidden="true">16 : 9</span>
        <div className="end">
          <Button variant="icon" size="sm" aria-label={t("theorySlideEditor.diapositivaAnterior")} title={t("slidePresenter.anterior")} disabled={index === 0} onClick={onPrev}>
            <ChevronLeft size={16} />
          </Button>
          <Button variant="icon" size="sm" aria-label={t("theorySlideEditor.siguienteDiapositiva")} title={t("theorySlideEditor.siguiente")} disabled={index === total - 1} onClick={onNext}>
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>

      <div className="vb-stage-area">
        <div className="vb-canvas-wrap">
          <div className="vb-slide-canvas" data-layout={slide.layout} style={canvasStyle}>
            {accentCfg && <span className="vb-accent-stripe" aria-hidden="true" />}
            {hasBg && (
              <img src={slide.bgImage} alt="" className="vb-slide-bgimg" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
            )}
            {hasOverlay && <div className={`vb-slide-overlay${slide.bgOverlay === "dark" ? " is-dark" : " is-medium"}`} aria-hidden="true" />}
            {isQuote && <span className="vb-quote-mark" aria-hidden="true">&ldquo;</span>}

            <EditableText
              key={`${slide.id}-h`}
              value={slide.heading}
              onChange={(t) => onChange({ heading: t })}
              className={`vb-s-title${isQuote ? " is-quote" : ""}`}
              placeholder={isQuote ? "Texto de la cita…" : "Título de la diapositiva"}
              ariaLabel="Título de la diapositiva"
            />
            {!isSplit && (
              <EditableText
                key={`${slide.id}-sub`}
                value={slide.subtitle ?? ""}
                onChange={(t) => onChange({ subtitle: t || undefined })}
                className="vb-s-subtitle"
                placeholder={isQuote ? "— Autor, Año (opcional)" : "Subtítulo o descripción secundaria (opcional)"}
                ariaLabel="Subtítulo"
              />
            )}
            {body}
          </div>
        </div>
      </div>

      <footer className="vb-stage-foot">
        <span className="pos" aria-live="polite">{index + 1} / {total}</span>
        <span aria-hidden="true" className="vb-stage-dot">·</span>
        <span className="info">{t("theorySlideEditor.layout")}<strong>{LAYOUT_META[slide.layout].label}</strong></span>
        <div className="vb-stage-hints">
          <kbd>←→</kbd>{t("theorySlideEditor.cambiar")}<kbd>⌫</kbd> eliminar
        </div>
      </footer>
    </section>
  );
}

// ─── Block spec helpers ───────────────────────────────────────────────────────

const BLOCK_TYPE_LABELS: Record<Block["type"], string> = {
  text:  "Texto enriquecido",
  latex: "LaTeX",
  table: "Tabla",
  chart: "Gráfico",
  flow:  "Diagrama de flujo",
  math:  "Función matemática",
  shape: "Diagrama de formas",
  image: "Imagen",
  audio: "Audio",
  video: "Video",
  pdf:   "PDF",
  link:  "Enlace",
  formula: "Fórmula",
};

function createEmptyBlock(type: "chart" | "table" | "latex" | "flow"): Block {
  const id = crypto.randomUUID();
  switch (type) {
    case "chart":
      return { id, type: "chart", chartType: "bar", data: { labels: [], datasets: [] } };
    case "table":
      return { id, type: "table", headers: ["Columna 1", "Columna 2"], rows: [["", ""]] };
    case "latex":
      return { id, type: "latex", content: "", displayMode: true };
    case "flow":
      return { id, type: "flow", nodes: [], edges: [] };
  }
}

/** Exportado para que SlidePresenter renderice el MISMO camino que el editor (WYSIWYG). */
export function BlockSpecRenderer({ block }: { block: Block }) {
  const doc = { version: 1 as const, blocks: [block] };
  switch (block.type) {
    case "text":  return <TextBlockRenderer block={block} />;
    case "latex": return <LatexBlockRenderer block={block} />;
    case "table": return <TableBlockRenderer block={block} />;
    case "chart": return <ChartBlockRenderer block={block} doc={doc} />;
    case "flow":  return <FlowBlockRenderer block={block} />;
  }
}

function BlockLatexEditor({
  block,
  onChange,
}: {
  block: LatexBlock;
  onChange: (patch: Partial<LatexBlock>) => void;
}) {
  return (
    <div className="space-y-2">
      <Textarea
        label="Fórmula LaTeX"
        className="font-mono"
        rows={4}
        placeholder="ej: \frac{a}{b}"
        value={block.content}
        onChange={(e) => onChange({ content: e.target.value })}
      />
      <label className="flex items-center gap-2 cursor-pointer select-none">
        <input
          type="checkbox"
          className="rounded border-[var(--c-border)]"
          checked={block.displayMode}
          onChange={(e) => onChange({ displayMode: e.target.checked })}
        />
        <span className="text-xs text-[var(--c-text)]">Modo bloque centrado</span>
      </label>
    </div>
  );
}

function BlockTableEditor({
  block,
  onChange,
}: {
  block: TableBlock;
  onChange: (patch: Partial<TableBlock>) => void;
}) {
  return (
    <div className="space-y-2">
      <Input
        label="Título de la tabla"
        hint="Opcional"
        placeholder="ej: Resultados del experimento"
        value={block.title ?? ""}
        onChange={(e) => onChange({ title: e.target.value || undefined })}
      />
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr>
              {block.headers.map((h, ci) => (
                <th key={ci} className="border border-[var(--c-border)] p-1 bg-[var(--c-bg)]">
                  <input
                    aria-label={`Encabezado de la columna ${ci + 1}`}
                    className="w-full bg-transparent font-semibold text-center outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded"
                    value={h}
                    onChange={(e) => {
                      const headers = [...block.headers];
                      headers[ci] = e.target.value;
                      onChange({ headers });
                    }}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td key={ci} className="border border-[var(--c-border)] p-1">
                    <input
                      aria-label={`Fila ${ri + 1}, ${block.headers[ci] || `columna ${ci + 1}`}`}
                      className="w-full bg-transparent outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded"
                      value={String(cell)}
                      onChange={(e) => {
                        const rows = block.rows.map((r, i) =>
                          i === ri ? r.map((c, j) => (j === ci ? e.target.value : c)) : r
                        );
                        onChange({ rows });
                      }}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onChange({ rows: [...block.rows, block.headers.map(() => "")] })}
        >
          + Fila
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() =>
            onChange({
              headers: [...block.headers, `Col ${block.headers.length + 1}`],
              rows: block.rows.map((r) => [...r, ""]),
            })
          }
        >
          + Columna
        </Button>
      </div>
    </div>
  );
}

function BlockChartDatasetRow({
  ds,
  di,
  onUpdate,
  onRemove,
}: {
  ds: { label: string; values: number[]; color?: string };
  di: number;
  onUpdate: (di: number, field: string, val: string) => void;
  onRemove: (di: number) => void;
}) {
  const [valuesInput, setValuesInput] = useState(ds.values.join(", "));
  useEffect(() => { setValuesInput(ds.values.join(", ")); }, [ds.values]);
  return (
    <div className="flex gap-1 items-end">
      <Input
        className="w-28"
        aria-label={`Nombre de la serie ${di + 1}`}
        placeholder="Nombre serie"
        value={ds.label}
        onChange={(e) => onUpdate(di, "label", e.target.value)}
      />
      <Input
        className="flex-1 font-mono"
        aria-label={`Valores de la serie ${di + 1}, separados por coma`}
        placeholder="10, 20, 30"
        value={valuesInput}
        onChange={(e) => setValuesInput(e.target.value)}
        onBlur={() => {
          const clean = valuesInput.split(",").map((v) => v.trim()).filter(Boolean).map((v) => Number(v) || 0);
          onUpdate(di, "values", clean.join(","));
        }}
      />
      <input
        type="color"
        aria-label={`Color de la serie ${di + 1}`}
        className="h-7 w-8 rounded border border-[var(--c-border)] p-0.5"
        value={ds.color ?? "#6366f1"}
        onChange={(e) => onUpdate(di, "color", e.target.value)}
      />
      <Button
        variant="ghost"
        size="sm"
        className="text-[var(--c-danger)]"
        aria-label={`Eliminar serie ${di + 1}`}
        onClick={() => onRemove(di)}
      >
        ✕
      </Button>
    </div>
  );
}

function BlockChartEditor({
  block,
  onChange,
}: {
  block: ChartBlock;
  onChange: (patch: Partial<ChartBlock>) => void;
}) {
  const data = block.data ?? { labels: [], datasets: [] };
  const [labelsInput, setLabelsInput] = useState(data.labels.join(", "));
  useEffect(() => { setLabelsInput(data.labels.join(", ")); }, [data.labels]);

  const handleLabelsBlur = () => {
    const labels = labelsInput.split(",").map((s) => s.trim()).filter(Boolean);
    onChange({ data: { ...data, labels } });
  };

  const updateDataset = (di: number, field: string, val: string) => {
    const datasets = data.datasets.map((ds, i) => {
      if (i !== di) return ds;
      if (field === "label") return { ...ds, label: val };
      if (field === "color") return { ...ds, color: val };
      if (field === "values") return { ...ds, values: val.split(",").map((v) => Number(v.trim()) || 0) };
      return ds;
    });
    onChange({ data: { ...data, datasets } });
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2 items-end">
        <Input
          className="flex-1"
          label="Título del gráfico"
          hint="Opcional"
          placeholder="ej: Ventas por mes"
          value={block.title ?? ""}
          onChange={(e) => onChange({ title: e.target.value || undefined })}
        />
        <Select
          className="w-40"
          label="Tipo de gráfico"
          value={block.chartType}
          onChange={(e) => onChange({ chartType: e.target.value as ChartBlock["chartType"] })}
        >
          <option value="bar">Barras</option>
          <option value="line">Líneas</option>
          <option value="pie">Torta</option>
          <option value="scatter">Dispersión</option>
          <option value="area">Área</option>
          <option value="bar-stacked">Barras apiladas</option>
          <option value="bar-grouped">Barras agrupadas</option>
          <option value="area-stacked">Área apilada</option>
          <option value="histogram">Histograma</option>
        </Select>
      </div>
      <Input
        label="Etiquetas del eje"
        hint="Separadas por coma"
        placeholder="Ene, Feb, Mar"
        value={labelsInput}
        onChange={(e) => setLabelsInput(e.target.value)}
        onBlur={handleLabelsBlur}
      />
      {data.datasets.map((ds, di) => (
        <BlockChartDatasetRow
          key={di}
          ds={ds}
          di={di}
          onUpdate={updateDataset}
          onRemove={(i) =>
            onChange({ data: { ...data, datasets: data.datasets.filter((_, j) => j !== i) } })
          }
        />
      ))}
      <Button
        variant="ghost"
        size="sm"
        onClick={() =>
          onChange({
            data: {
              ...data,
              datasets: [
                ...data.datasets,
                { label: `Serie ${data.datasets.length + 1}`, values: data.labels.map(() => 0) },
              ],
            },
          })
        }
      >
        + Serie
      </Button>
    </div>
  );
}

function BlockFlowEditor({
  block,
  onChange,
}: {
  block: FlowBlock;
  onChange: (patch: Partial<FlowBlock>) => void;
}) {
  const addNode = () => {
    const id = crypto.randomUUID();
    onChange({
      nodes: [
        ...block.nodes,
        {
          id,
          label: `Nodo ${block.nodes.length + 1}`,
          x: (block.nodes.length % 4) * 150,
          y: Math.floor(block.nodes.length / 4) * 120,
          shape: "rect" as const,
        },
      ],
    });
  };

  const updateNode = (id: string, field: string, val: string) => {
    onChange({
      nodes: block.nodes.map((n) =>
        n.id !== id ? n : { ...n, [field]: field === "x" || field === "y" ? Number(val) : val }
      ),
    });
  };

  const removeNode = (id: string) => {
    onChange({
      nodes: block.nodes.filter((n) => n.id !== id),
      edges: block.edges.filter((e) => e.fromId !== id && e.toId !== id),
    });
  };

  return (
    <div className="space-y-2">
      <Input
        label="Título del diagrama"
        hint="Opcional"
        placeholder="ej: Flujo del proceso"
        value={block.title ?? ""}
        onChange={(e) => onChange({ title: e.target.value || undefined })}
      />
      <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--c-muted)]">Nodos</p>
      {block.nodes.map((node, ni) => (
        <div key={node.id} className="flex gap-1 items-end flex-wrap">
          <Input
            className="w-24"
            aria-label={`Etiqueta del nodo ${ni + 1}`}
            placeholder="Etiqueta"
            value={node.label}
            onChange={(e) => updateNode(node.id, "label", e.target.value)}
          />
          <Select
            className="w-24"
            aria-label={`Forma del nodo ${ni + 1}`}
            value={node.shape ?? "rect"}
            onChange={(e) => updateNode(node.id, "shape", e.target.value)}
          >
            <option value="rect">Rect</option>
            <option value="diamond">Rombo</option>
            <option value="circle">Círculo</option>
          </Select>
          <Input
            className="w-16"
            type="number"
            aria-label={`Posición X del nodo ${ni + 1}`}
            placeholder="x"
            value={node.x}
            onChange={(e) => updateNode(node.id, "x", e.target.value)}
          />
          <Input
            className="w-16"
            type="number"
            aria-label={`Posición Y del nodo ${ni + 1}`}
            placeholder="y"
            value={node.y}
            onChange={(e) => updateNode(node.id, "y", e.target.value)}
          />
          <input
            type="color"
            aria-label="Color del nodo"
            className="h-7 w-8 rounded border border-[var(--c-border)] p-0.5"
            value={node.color ?? "#e0e7ff"}
            onChange={(e) => updateNode(node.id, "color", e.target.value)}
          />
          <Button
            variant="ghost"
            size="sm"
            className="text-[var(--c-danger)]"
            aria-label="Eliminar nodo"
            onClick={() => removeNode(node.id)}
          >
            ✕
          </Button>
        </div>
      ))}
      <Button variant="ghost" size="sm" onClick={addNode}>
        + Nodo
      </Button>
      {block.nodes.length >= 2 && (
        <>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--c-muted)] pt-1">Aristas</p>
          {block.edges.map((edge, ei) => (
            <div key={edge.id} className="flex gap-1 items-end">
              <Select
                className="flex-1"
                aria-label={`Nodo de origen de la arista ${ei + 1}`}
                value={edge.fromId}
                onChange={(e) =>
                  onChange({
                    edges: block.edges.map((ed) =>
                      ed.id !== edge.id ? ed : { ...ed, fromId: e.target.value }
                    ),
                  })
                }
              >
                {block.nodes.map((n) => <option key={n.id} value={n.id}>{n.label}</option>)}
              </Select>
              <span className="text-xs text-[var(--c-muted)] pb-1.5" aria-hidden="true">→</span>
              <Select
                className="flex-1"
                aria-label={`Nodo de destino de la arista ${ei + 1}`}
                value={edge.toId}
                onChange={(e) =>
                  onChange({
                    edges: block.edges.map((ed) =>
                      ed.id !== edge.id ? ed : { ...ed, toId: e.target.value }
                    ),
                  })
                }
              >
                {block.nodes.map((n) => <option key={n.id} value={n.id}>{n.label}</option>)}
              </Select>
              <Input
                className="w-20"
                aria-label={`Etiqueta de la arista ${ei + 1}`}
                placeholder="Etiqueta"
                value={edge.label ?? ""}
                onChange={(e) =>
                  onChange({
                    edges: block.edges.map((ed) =>
                      ed.id !== edge.id ? ed : { ...ed, label: e.target.value || undefined }
                    ),
                  })
                }
              />
              <Button
                variant="ghost"
                size="sm"
                className="text-[var(--c-danger)]"
                aria-label="Eliminar arista"
                onClick={() =>
                  onChange({ edges: block.edges.filter((e) => e.id !== edge.id) })
                }
              >
                ✕
              </Button>
            </div>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              if (block.nodes.length < 2) return;
              const id = crypto.randomUUID();
              onChange({
                edges: [...block.edges, { id, fromId: block.nodes[0].id, toId: block.nodes[1].id }],
              });
            }}
          >
            + Arista
          </Button>
        </>
      )}
    </div>
  );
}

function BlockSpecEditor({ block, onChange }: { block: Block; onChange: (b: Block) => void }) {
  switch (block.type) {
    case "text":
      return (
        <Textarea
          label="Contenido de texto"
          rows={8}
          placeholder="Contenido de texto..."
          value={block.content}
          onChange={(e) => onChange({ ...block, content: e.target.value })}
        />
      );
    case "latex":
      return <BlockLatexEditor block={block} onChange={(p) => onChange({ ...block, ...p })} />;
    case "table":
      return <BlockTableEditor block={block} onChange={(p) => onChange({ ...block, ...p })} />;
    case "chart":
      return <BlockChartEditor block={block} onChange={(p) => onChange({ ...block, ...p })} />;
    case "flow":
      return <BlockFlowEditor block={block} onChange={(p) => onChange({ ...block, ...p })} />;
  }
}

// ─── Tool parameter control ───────────────────────────────────────────────────

export function ToolParamControl({
  param,
  value,
  onChange,
}: {
  param: ToolParamDef;
  value: unknown;
  onChange: (v: number | boolean | string) => void;
}) {
  const { t } = useI18n();
  // Un id estable por control para asociar `label`/`htmlFor` (WCAG 1.3.1 / 4.1.2):
  // así la etiqueta visible es el nombre accesible real, sin `aria-label` redundante.
  const controlId = useId();

  if (param.input === "number") {
    const numVal = value !== undefined ? Number(value) : Number(param.defaultValue);
    const decimals = param.step && param.step < 1 ? 1 : 0;
    return (
      <div className="flex items-center gap-3">
        <label htmlFor={controlId} className="text-xs font-medium text-[var(--c-muted)] w-32 flex-shrink-0">
          {t(param.labelKey)}
          {param.unit && <span className="text-[var(--c-border)] ml-1">({param.unit})</span>}
        </label>
        <input
          id={controlId}
          type="range"
          min={param.min ?? 0}
          max={param.max ?? 100}
          step={param.step ?? 1}
          value={numVal}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1 accent-[var(--c-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded"
        />
        <span className="text-xs text-[var(--c-text)] w-14 text-right tabular-nums font-mono">
          {numVal.toFixed(decimals)}
        </span>
      </div>
    );
  }
  if (param.input === "select") {
    const strVal = value !== undefined ? String(value) : String(param.defaultValue);
    return (
      <div className="flex items-center gap-3">
        <label htmlFor={controlId} className="text-xs font-medium text-[var(--c-muted)] w-32 flex-shrink-0">{t(param.labelKey)}</label>
        <select
          id={controlId}
          className="flex-1 border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] rounded px-2 py-1 text-xs outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] focus:border-[var(--c-primary)]"
          value={strVal}
          onChange={(e) => onChange(e.target.value)}
        >
          {param.options?.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.labelKey ? t(opt.labelKey) : opt.label}</option>
          ))}
        </select>
      </div>
    );
  }
  if (param.input === "boolean") {
    return (
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium text-[var(--c-muted)] w-32 flex-shrink-0">{t(param.labelKey)}</span>
        <label htmlFor={controlId} className="flex items-center gap-2 cursor-pointer select-none">
          <input
            id={controlId}
            type="checkbox"
            checked={value !== undefined ? Boolean(value) : Boolean(param.defaultValue)}
            onChange={(e) => onChange(e.target.checked)}
            className="rounded border-[var(--c-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
          />
          <span className="text-xs text-[var(--c-muted)]">{Boolean(value) ? "Sí" : "No"}</span>
        </label>
      </div>
    );
  }
  if (param.input === "text") {
    return (
      <div>
        <div className="flex items-baseline justify-between mb-1">
          <label htmlFor={controlId} className="text-xs font-medium text-[var(--c-muted)]">{t(param.labelKey)}</label>
          {param.descriptionKey && (
            <span className="text-[10px] text-[var(--c-border)]">{t(param.descriptionKey)}</span>
          )}
        </div>
        <input
          id={controlId}
          className="w-full border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] rounded px-3 py-1.5 text-sm font-mono outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] focus:border-[var(--c-primary)]"
          value={value !== undefined ? String(value) : String(param.defaultValue)}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  }
  if (param.input === "color") {
    const strVal = value !== undefined ? String(value) : String(param.defaultValue);
    return (
      <div className="flex items-center gap-3">
        <label htmlFor={controlId} className="text-xs font-medium text-[var(--c-muted)] w-32 flex-shrink-0">{t(param.labelKey)}</label>
        <input
          id={controlId}
          type="color"
          value={strVal}
          onChange={(e) => onChange(e.target.value)}
          className="h-7 w-12 rounded border border-[var(--c-border)] cursor-pointer bg-transparent p-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
        />
        <span className="text-xs text-[var(--c-muted)] font-mono">{strVal}</span>
      </div>
    );
  }
  return null;
}

// ─── Inspector (Diseño / Contenido / Notas) ─────────────────────────────────

type InspectorProps = {
  slide: Slide;
  onChange: (patch: Partial<Omit<Slide, "id">>) => void;
};

type InspectorTab = "diseno" | "contenido" | "notas";

const OVERLAY_LABELS: Record<"none" | "medium" | "dark", string> = {
  none: "Ninguna",
  medium: "Suave",
  dark: "Oscura",
};

function SlideInspector({ slide, onChange }: InspectorProps) {
  const { t } = useI18n();
  const [tab, setTab] = useState<InspectorTab>("diseno");
  const [showBlockPicker, setShowBlockPicker] = useState(false);
  useEffect(() => { setShowBlockPicker(false); }, [slide.id]);

  const bgId = useId();
  const langId = useId();
  const notesId = useId();

  const notes = slide.notes ?? "";
  const wordCount = notes.trim() ? notes.trim().split(/\s+/).length : 0;
  const minutes = Math.max(1, Math.round(wordCount / 130));

  const ctype: "texto" | "codigo" | "bloque" = slide.blockSpec
    ? "bloque"
    : slide.isCode
    ? "codigo"
    : "texto";

  // G3 Fase 2: cambiar de tipo destruía blockSpec/body sin confirmación ni undo.
  // ponytail: window.confirm alcanza; dialog propio sólo si molesta en uso real.
  const cambiarATexto = (isCode: boolean) => {
    if (
      slide.blockSpec &&
      !window.confirm(t("theorySlideEditor.laDiapositivaTieneUnBloque"))
    ) {
      return;
    }
    setShowBlockPicker(false);
    onChange({ isCode, blockSpec: undefined });
  };

  const elegirBloque = (kind: "chart" | "table" | "latex" | "flow") => {
    if (
      slide.body?.trim() &&
      !window.confirm(t("theorySlideEditor.laDiapositivaTieneTextoEn"))
    ) {
      return;
    }
    setShowBlockPicker(false);
    onChange({ blockSpec: createEmptyBlock(kind), body: undefined, isCode: false });
  };

  return (
    <div className="vb-slide-insp">
      <div className="vb-insp-tabs" role="tablist" aria-label={t("theorySlideEditor.inspectorDeDiapositiva")}>
        {(([["diseno", "Diseño"], ["contenido", "Contenido"], ["notas", "Notas"]]) as [InspectorTab, string][]).map(([key, label]) => (
          <button key={key} type="button" role="tab" aria-selected={tab === key} tabIndex={tab === key ? 0 : -1} onClick={() => setTab(key)}>
            {label}
          </button>
        ))}
      </div>

      {tab === "diseno" && (
        <div className="vb-insp-pane">
          <div>
            <p className="vb-insp-eyebrow">{t("theorySlideEditor.distribucionDelContenido")}</p>
            <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label={t("theorySlideEditor.distribucionDelContenido")}>
              {(Object.keys(LAYOUT_META) as LayoutPreset[]).map((preset) => (
                <button
                  key={preset}
                  type="button"
                  title={LAYOUT_META[preset].description}
                  aria-label={`Distribución ${LAYOUT_META[preset].label}`}
                  aria-pressed={slide.layout === preset}
                  className={`vb-layout-card${slide.layout === preset ? " is-active" : ""}`}
                  onClick={() => onChange({ layout: preset })}
                >
                  <span className="vb-layout-card__preview"><LayoutIcon preset={preset} /></span>
                  <span className="vb-layout-card__nm">{LAYOUT_META[preset].label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="vb-field">
            <label className="vb-field-label" htmlFor={bgId}>{t("theorySlideEditor.imagenDeFondoOpcional")}</label>
            <input id={bgId} type="url" className="vb-field-input" placeholder="https://ejemplo.com/imagen.jpg" value={slide.bgImage ?? ""} onChange={(e) => onChange({ bgImage: e.target.value || undefined })} />
            {slide.bgImage && (
              <div className="mt-2 flex items-center gap-2 flex-wrap">
                <span className="text-xs text-[var(--c-muted)]">{t("theorySlideEditor.capaDeColor")}</span>
                {(["none", "medium", "dark"] as const).map((opt) => (
                  <Button key={opt} variant="ghost" size="sm" pressed={(slide.bgOverlay ?? "none") === opt} aria-label={`Capa de color: ${OVERLAY_LABELS[opt]}`} onClick={() => onChange({ bgOverlay: opt })}>
                    {OVERLAY_LABELS[opt]}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {tab === "contenido" && (
        <div className="vb-insp-pane">
          <div>
            <p className="vb-insp-eyebrow">{t("theorySlideEditor.tipoDeContenido")}</p>
            <div className="vb-ctype-row" role="radiogroup" aria-label={t("theorySlideEditor.tipoDeContenido")}>
              <button type="button" className="vb-ctype" aria-pressed={ctype === "texto"} onClick={() => cambiarATexto(false)}>{t("mapaEditorFull.texto2")}</button>
              <button type="button" className="vb-ctype" aria-pressed={ctype === "codigo"} onClick={() => cambiarATexto(true)}>{t("plantillaEditor.codigo")}</button>
              <button type="button" className="vb-ctype" aria-pressed={ctype === "bloque"} onClick={() => { setShowBlockPicker(!slide.blockSpec); }}>{t("theorySlideEditor.bloque")}</button>
            </div>
          </div>

          {ctype === "codigo" && (
            <div className="vb-field">
              <label className="vb-field-label" htmlFor={langId}>{t("theorySlideEditor.lenguajeDelCodigo")}</label>
              <input id={langId} className="vb-field-input" placeholder={t("theorySlideEditor.jsPython")} value={slide.language ?? ""} onChange={(e) => onChange({ language: e.target.value || undefined })} />
              <p className="text-xs text-[var(--c-muted)] mt-1">{t("theorySlideEditor.editaElCodigoDirectamenteEn")}</p>
            </div>
          )}

          {slide.blockSpec ? (
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="vb-insp-eyebrow" style={{ marginBottom: 0 }}>Bloque gráfico — {BLOCK_TYPE_LABELS[slide.blockSpec.type]}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[var(--c-danger)]"
                  onClick={() => {
                    if (window.confirm(t("theorySlideEditor.quitarElBloqueGraficoEsta"))) {
                      onChange({ blockSpec: undefined });
                    }
                  }}
                >
                  <X size={12} />{t("comun.quitar")}</Button>
              </div>
              <BlockSpecEditor block={slide.blockSpec} onChange={(b) => onChange({ blockSpec: b })} />
            </div>
          ) : showBlockPicker ? (
            <div>
              <p className="vb-insp-eyebrow">{t("theorySlideEditor.insertarBloqueDelMotorGrafico")}</p>
              <div className="vb-blocks-grid">
                {(["chart", "table", "latex", "flow"] as const).map((t) => (
                  <button key={t} type="button" className="vb-block-card" onClick={() => elegirBloque(t)}>
                    {BLOCK_TYPE_LABELS[t]}
                  </button>
                ))}
              </div>
            </div>
          ) : ctype === "texto" ? (
            <p className="text-xs text-[var(--c-muted)]">{t("theorySlideEditor.editaElCuerpoDirectamenteEn")}</p>
          ) : null}
        </div>
      )}

      {tab === "notas" && (
        <div className="vb-insp-pane">
          <div className="vb-field">
            <label className="vb-field-label" htmlFor={notesId}>{t("theorySlideEditor.notasDelOrador")}</label>
            <textarea id={notesId} className="vb-field-input vb-field-textarea" rows={8} placeholder={t("theorySlideEditor.notasParaQuienPresentaNo")} value={notes} onChange={(e) => onChange({ notes: e.target.value || undefined })} />
            <p className="text-xs text-[var(--c-muted)] mt-1" aria-live="polite">
              {wordCount} {wordCount === 1 ? "palabra" : "palabras"} · ~{minutes} min de lectura
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Component props ──────────────────────────────────────────────────────────

type Props = {
  presentationTitle: string;
  initialSlides: Slide[];
  initialTheme?: ThemeKey;
  initialAccentColor?: AccentColor;
  onDone: (slides: Slide[], theme: ThemeKey, accentColor?: AccentColor) => void;
  onClose: () => void;
  // PLAN-G §1 (item 25) — si la presentación se abrió desde un material
  // guardado, permite que "Guardar como material" cree una versión nueva
  // en vez de un material nuevo.
  materialId?: string | null;
};

// ─── Main component ───────────────────────────────────────────────────────────

export default function TheorySlideEditor({
  presentationTitle,
  initialSlides,
  initialTheme = "minimal",
  initialAccentColor,
  onDone,
  onClose,
  materialId,
}: Props) {
  const { t } = useI18n();
  const {
    slides,
    currentIndex,
    theme,
    accentColor,
    setCurrentIndex,
    setTheme,
    setAccentColor,
    addSlide,
    updateSlide,
    removeSlide,
    dupSlide,
    moveSlide,
  } = useSlideEditor(initialSlides, initialTheme, initialAccentColor);

  const currentSlide = slides[currentIndex] ?? null;

  return (
    <div className="fixed inset-0 z-50 bg-[var(--c-bg)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--c-border)] bg-[var(--c-surface)] flex-shrink-0 gap-3">
        <h2 className="text-sm font-semibold text-[var(--c-text)] truncate min-w-0">
          {presentationTitle || "Presentación"}
        </h2>

        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Theme swatches */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-[var(--c-muted)] mr-0.5">{t("theorySlideEditor.tema")}</span>
            {(Object.entries(THEMES) as [ThemeKey, ThemeConfig][]).map(([key, cfg]) => (
              <button
                key={key}
                type="button"
                title={cfg.label}
                aria-label={`Tema ${cfg.label}`}
                aria-pressed={theme === key}
                className={`w-5 h-5 rounded-full border-2 transition-all motion-reduce:transition-none flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] ${
                  theme === key
                    ? "border-[var(--c-primary)] scale-125"
                    : "border-[var(--c-border)] hover:scale-110 hover:border-[var(--c-muted)]"
                }`}
                style={{ background: cfg.swatch }}
                onClick={() => setTheme(key)}
              />
            ))}
          </div>

          {/* Accent color swatches */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-[var(--c-muted)] mr-0.5">{t("theorySlideEditor.acento")}</span>
            <button
              type="button"
              title={t("theorySlideEditor.sinColorDeAcento")}
              aria-label={t("theorySlideEditor.sinColorDeAcento")}
              aria-pressed={accentColor === undefined}
              className={`w-5 h-5 rounded-full border-2 transition-all motion-reduce:transition-none flex-shrink-0 bg-[var(--c-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] ${
                accentColor === undefined
                  ? "border-[var(--c-primary)] scale-125"
                  : "border-[var(--c-border)] hover:scale-110 hover:border-[var(--c-muted)]"
              }`}
              onClick={() => setAccentColor(undefined)}
            >
              <span className="text-[8px] text-[var(--c-muted)] flex items-center justify-center w-full h-full">✕</span>
            </button>
            {(Object.entries(ACCENT_COLORS) as [AccentColor, AccentConfig][]).map(([key, cfg]) => (
              <button
                key={key}
                type="button"
                title={cfg.label}
                aria-label={`Acento ${cfg.label}`}
                aria-pressed={accentColor === key}
                className={`w-5 h-5 rounded-full border-2 transition-all motion-reduce:transition-none flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] ${
                  accentColor === key
                    ? "border-[var(--c-primary)] scale-125"
                    : "border-[var(--c-border)] hover:scale-110 hover:border-[var(--c-muted)]"
                }`}
                style={{ background: cfg.swatch }}
                onClick={() => setAccentColor(key)}
              />
            ))}
          </div>

          <Button variant="ghost" size="sm" onClick={addSlide}>
            <Plus size={12} />{t("theorySlideEditor.diapositiva")}</Button>

          <GuardarComoMaterial
            tipo="presentacion"
            defaultTitulo={presentationTitle}
            materialId={materialId}
            getContenido={() => ({ version: 3, theme, accentColor, slides })}
          />

          <Button
            variant="primary"
            size="sm"
            onClick={() => onDone(slides, theme, accentColor)}
          >{t("theorySlideEditor.listo")}</Button>

          <Button
            variant="icon"
            size="sm"
            onClick={onClose}
            title={t("theorySlideEditor.cerrarSinGuardar")}
            aria-label={t("theorySlideEditor.cerrarSinGuardar")}
          >
            <X size={16} />
          </Button>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar — slide thumbnails */}
        <div className="w-52 border-r border-[var(--c-border)] overflow-y-auto bg-[var(--c-bg)] flex-shrink-0 flex flex-col">
          <div className="flex-1">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`group relative border-b border-[var(--c-border)] ${
                  currentIndex === index
                    ? "ring-2 ring-inset ring-[var(--c-primary)] bg-[color-mix(in_srgb,var(--c-primary)_8%,transparent)]"
                    : "hover:bg-[var(--c-border)]"
                }`}
              >
                <button
                  type="button"
                  className="w-full text-left"
                  onClick={() => setCurrentIndex(index)}
                >
                  {/* Visual thumbnail */}
                  <SlideThumbnail slide={slide} theme={theme} accentColor={accentColor} />

                  {/* Label row */}
                  <div className="px-2 py-1.5 flex items-center gap-1.5">
                    <span className="text-[10px] text-[var(--c-muted)] tabular-nums flex-shrink-0">{index + 1}</span>
                    <span className="text-[10px] text-[var(--c-border)]">·</span>
                    <span className="text-xs text-[var(--c-text)] truncate leading-none">
                      {slide.heading || <span className="text-[var(--c-border)] italic">{t("mapaEditorFull.sinTitulo")}</span>}
                    </span>
                    {slide.toolSpec && (
                      <Settings size={9} className="text-[var(--c-border)] flex-shrink-0 ml-auto" />
                    )}
                  </div>
                </button>

                {/* Action buttons — siempre en el DOM (accesibles por teclado), visibles al hover/focus */}
                <div className="absolute right-1 top-2 flex flex-col gap-0.5 bg-[var(--c-surface)]/80 rounded p-0.5 backdrop-blur-sm opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
                  <Button
                    variant="icon"
                    size="sm"
                    title={t("moduloEditor.moverArriba")}
                    aria-label={`Mover diapositiva ${index + 1} arriba`}
                    disabled={index === 0}
                    onClick={() => moveSlide(index, index - 1)}
                  >
                    <ChevronUp size={12} />
                  </Button>
                  <Button
                    variant="icon"
                    size="sm"
                    title={t("theorySlideEditor.duplicar")}
                    aria-label={`Duplicar diapositiva ${index + 1}`}
                    onClick={() => dupSlide(index)}
                  >
                    <Copy size={12} />
                  </Button>
                  <Button
                    variant="icon"
                    size="sm"
                    title={t("moduloEditor.moverAbajo")}
                    aria-label={`Mover diapositiva ${index + 1} abajo`}
                    disabled={index === slides.length - 1}
                    onClick={() => moveSlide(index, index + 1)}
                  >
                    <ChevronDown size={12} />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-center rounded-none border-x-0 border-b-0 flex-shrink-0 py-3"
            onClick={addSlide}
          >
            <Plus size={12} />{t("theorySlideEditor.agregarDiapositiva")}</Button>
        </div>

        {/* Editor: lienzo WYSIWYG (centro) + inspector con tabs (derecha) */}
        <div className="flex-1 flex overflow-hidden min-w-0">
          {currentSlide ? (
            <>
              <div className="flex-1 min-w-0 overflow-hidden">
                <SlideStage
                  slide={currentSlide}
                  index={currentIndex}
                  total={slides.length}
                  theme={theme}
                  accentColor={accentColor}
                  onChange={(patch) => updateSlide(currentSlide.id, patch)}
                  onPrev={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                  onNext={() => setCurrentIndex(Math.min(slides.length - 1, currentIndex + 1))}
                />
              </div>
              <div className="w-[320px] flex-shrink-0 overflow-y-auto bg-[var(--c-surface)] border-l border-[var(--c-border)]">
                <SlideInspector
                  slide={currentSlide}
                  onChange={(patch) => updateSlide(currentSlide.id, patch)}
                />
                {slides.length > 1 ? (
                  <div className="p-4 border-t border-[var(--c-border)]">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[var(--c-danger)]"
                      onClick={() => removeSlide(currentSlide.id)}
                    >
                      <Trash2 size={12} />{t("theorySlideEditor.eliminarDiapositiva")}</Button>
                  </div>
                ) : null}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
