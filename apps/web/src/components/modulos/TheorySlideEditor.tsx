import { X, Plus, Trash2, Copy, ChevronUp, ChevronDown } from "lucide-react";
import type { VisualSpec } from "../../visualizadores/types";
import { useSlideEditor } from "./hooks/useSlideEditor";
import ToolEditor from "./tools/ToolEditor";

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
};

// ─── Tool parameter schema ────────────────────────────────────────────────────

export type ToolParamDef = {
  id: string;
  label: string;
  input: "number" | "boolean" | "select" | "text" | "color";
  unit?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue: number | boolean | string;
  options?: { label: string; value: string }[];
  description?: string;
  /** Dot-notation path within the VisualSpec to set the value (supports array indices like "waves.0.amplitude") */
  path: string;
  /** Only show this param when another field in the spec equals a specific value */
  condition?: { path: string; value: unknown };
};

/** Editable parameter schemas keyed by VisualSpec.kind */
export const TOOL_PARAM_SCHEMAS: Record<string, ToolParamDef[]> = {
  "chart": [
    {
      id: "chartType", label: "Tipo de gráfico", input: "select",
      path: "chartType", defaultValue: "bar",
      options: [
        { label: "Barras",      value: "bar"     },
        { label: "Líneas",      value: "line"    },
        { label: "Área",        value: "area"    },
        { label: "Torta",       value: "pie"     },
        { label: "Dispersión",  value: "scatter" },
      ],
    },
  ],
  "funciones-graficas": [
    { id: "xMin",  label: "X mínimo",    input: "number", path: "axes.x.min",            defaultValue: -10, min: -100, max: -1,  step: 1   },
    { id: "xMax",  label: "X máximo",    input: "number", path: "axes.x.max",            defaultValue: 10,  min: 1,    max: 100,  step: 1   },
    { id: "yMin",  label: "Y mínimo",    input: "number", path: "axes.y.min",            defaultValue: -10, min: -100, max: -1,  step: 1   },
    { id: "yMax",  label: "Y máximo",    input: "number", path: "axes.y.max",            defaultValue: 10,  min: 1,    max: 100,  step: 1   },
    { id: "expr",  label: "Expresión f₁", input: "text",  path: "functions.0.expression", defaultValue: "x^2", description: "Expresión matemática de la primera función (ej: 2*x+1, x^2-3)" },
  ],
  "physics-motion-chart": [
    {
      id: "motionType", label: "Tipo de movimiento", input: "select",
      path: "motion.type", defaultValue: "MRU",
      options: [{ label: "MRU — vel. constante", value: "MRU" }, { label: "MRUV — acelerado", value: "MRUV" }],
    },
    { id: "time", label: "Tiempo total",   input: "number", path: "motion.time",             defaultValue: 10, min: 1, max: 60,  step: 1,   unit: "s"    },
    { id: "x0",   label: "Pos. inicial",   input: "number", path: "motion.initialPosition",  defaultValue: 0,  min: -100, max: 100, step: 1, unit: "m"  },
    { id: "v0",   label: "Vel. inicial",   input: "number", path: "motion.initialVelocity",  defaultValue: 5,  min: -50, max: 50, step: 1,   unit: "m/s" },
    { id: "a",    label: "Aceleración",    input: "number", path: "motion.acceleration",     defaultValue: 2,  min: -20, max: 20, step: 0.5, unit: "m/s²", description: "Solo aplica en MRUV" },
  ],
  "stat-distribution": [
    {
      id: "distType", label: "Distribución", input: "select",
      path: "distributionType", defaultValue: "normal",
      options: [{ label: "Normal", value: "normal" }, { label: "Binomial", value: "binomial" }, { label: "Uniforme", value: "uniform" }],
    },
    // Normal
    { id: "mean",   label: "Media (μ)",          input: "number", path: "parameters.mean",   defaultValue: 0,   min: -100, max: 100, step: 1,   condition: { path: "distributionType", value: "normal" } },
    { id: "stdDev", label: "Desv. estándar (σ)", input: "number", path: "parameters.stdDev", defaultValue: 1,   min: 0.1,  max: 20,  step: 0.1, condition: { path: "distributionType", value: "normal" } },
    // Binomial
    { id: "n", label: "Ensayos (n)",      input: "number", path: "parameters.n", defaultValue: 10,  min: 1,    max: 50,   step: 1,    condition: { path: "distributionType", value: "binomial" } },
    { id: "p", label: "Probabilidad (p)", input: "number", path: "parameters.p", defaultValue: 0.5, min: 0.01, max: 0.99, step: 0.01, condition: { path: "distributionType", value: "binomial" } },
    // Uniforme
    { id: "uMin", label: "Mínimo", input: "number", path: "parameters.min", defaultValue: 0,  min: -100, max: 100, step: 1, condition: { path: "distributionType", value: "uniform" } },
    { id: "uMax", label: "Máximo", input: "number", path: "parameters.max", defaultValue: 10, min: -100, max: 100, step: 1, condition: { path: "distributionType", value: "uniform" } },
    // Común
    { id: "samples", label: "Muestras", input: "number", path: "samples", defaultValue: 100, min: 10, max: 1000, step: 10 },
  ],
  "wave-interference": [
    { id: "w1amp",  label: "Amplitud onda 1",   input: "number",  path: "waves.0.amplitude",          defaultValue: 1, min: 0.1, max: 5,  step: 0.1        },
    { id: "w1freq", label: "Frecuencia onda 1", input: "number",  path: "waves.0.frequency",          defaultValue: 1, min: 0.1, max: 10, step: 0.1, unit: "Hz" },
    { id: "w2amp",  label: "Amplitud onda 2",   input: "number",  path: "waves.1.amplitude",          defaultValue: 1, min: 0.1, max: 5,  step: 0.1        },
    { id: "w2freq", label: "Frecuencia onda 2", input: "number",  path: "waves.1.frequency",          defaultValue: 2, min: 0.1, max: 10, step: 0.1, unit: "Hz" },
    { id: "superpos", label: "Ver superposición", input: "boolean", path: "superposition.enabled",   defaultValue: true },
  ],
  "funciones-grafico": [
    { id: "xMin", label: "X mínimo", input: "number", path: "axes.x.min", defaultValue: -10, min: -100, max: -1, step: 1 },
    { id: "xMax", label: "X máximo", input: "number", path: "axes.x.max", defaultValue: 10,  min: 1, max: 100, step: 1  },
  ],

  // ── Estadística ─────────────────────────────────────────────────────────────
  "stat-regression": [
    { id: "regrType",   label: "Tipo de regresión",  input: "select", path: "regression.type",   defaultValue: "linear",
      options: [{ label: "Lineal", value: "linear" }, { label: "Cuadrática", value: "quadratic" }] },
    { id: "slope",     label: "Pendiente (a)",       input: "number", path: "generator.slope",     defaultValue: 2,   min: -10, max: 10,  step: 0.5 },
    { id: "intercept", label: "Intercepto (b)",      input: "number", path: "generator.intercept", defaultValue: 0,   min: -20, max: 20,  step: 0.5 },
    { id: "curvature", label: "Curvatura (c)",       input: "number", path: "generator.curvature", defaultValue: 0.2, min: -3,  max: 3,   step: 0.1,
      condition: { path: "regression.type", value: "quadratic" } },
    { id: "noise",     label: "Dispersión",          input: "number", path: "generator.noise",     defaultValue: 1,   min: 0,   max: 8,   step: 0.5 },
    { id: "nPoints",   label: "Nº de puntos",        input: "number", path: "generator.nPoints",   defaultValue: 10,  min: 4,   max: 30,  step: 1   },
    { id: "genXMin",   label: "X mínimo",            input: "number", path: "generator.xMin",      defaultValue: 0,   min: -50, max: 50,  step: 1   },
    { id: "genXMax",   label: "X máximo",            input: "number", path: "generator.xMax",      defaultValue: 10,  min: 1,   max: 100, step: 1   },
    { id: "xLabel",    label: "Etiqueta eje X",      input: "text",   path: "axes.x.label",        defaultValue: "Variable X" },
    { id: "yLabel",    label: "Etiqueta eje Y",      input: "text",   path: "axes.y.label",        defaultValue: "Variable Y" },
  ],

  // ── Ciencias Sociales ────────────────────────────────────────────────────────
  "social-population-pyramid": [
    { id: "title",       label: "Título",         input: "text",   path: "title",       defaultValue: "Pirámide de población" },
    { id: "description", label: "Descripción",    input: "text",   path: "description", defaultValue: "" },
    { id: "unit",        label: "Unidad",         input: "select", path: "unit",        defaultValue: "percent",
      options: [{ label: "Porcentaje", value: "percent" }, { label: "Personas", value: "count" }] },
    { id: "maleColor",   label: "Color hombres",  input: "color",  path: "maleColor",   defaultValue: "#60a5fa" },
    { id: "femaleColor", label: "Color mujeres",  input: "color",  path: "femaleColor", defaultValue: "#fb7185" },
  ],
  "social-choropleth": [
    { id: "title",     label: "Título",         input: "text",   path: "title",          defaultValue: "Índice de desarrollo" },
    { id: "variable",  label: "Variable",       input: "text",   path: "variable",       defaultValue: "IDH" },
    { id: "unit",      label: "Unidad",         input: "text",   path: "unit",           defaultValue: "" },
    { id: "scaleMin",  label: "Escala mínima",  input: "number", path: "scale.min",      defaultValue: 0,   min: -1_000_000, max: 1_000_000, step: 0.01 },
    { id: "scaleMax",  label: "Escala máxima",  input: "number", path: "scale.max",      defaultValue: 1,   min: -1_000_000, max: 1_000_000, step: 0.01 },
    { id: "colorFrom", label: "Color mínimo",   input: "color",  path: "scale.colors.0", defaultValue: "#dbeafe" },
    { id: "colorTo",   label: "Color máximo",   input: "color",  path: "scale.colors.1", defaultValue: "#1d4ed8" },
  ],

  // ── Filosofía ────────────────────────────────────────────────────────────────
  "phil-argument-map": [
    { id: "claim", label: "Afirmación central", input: "text", path: "claim.text", defaultValue: "Ingrese la afirmación central" },
  ],
  "phil-dilemma": [
    { id: "scenario", label: "Descripción del dilema", input: "text", path: "scenario", defaultValue: "Describa el dilema ético" },
  ],

  // ── Arte ─────────────────────────────────────────────────────────────────────
  "art-color-wheel": [
    { id: "hue",     label: "Matiz base (0–360)", input: "number", path: "selectedHue", defaultValue: 200, min: 0, max: 360, step: 1 },
    { id: "harmony", label: "Armonía",            input: "select", path: "harmony",     defaultValue: "complementary",
      options: [
        { label: "Complementaria",       value: "complementary"       },
        { label: "Triádica",             value: "triadic"             },
        { label: "Análoga",              value: "analogous"           },
        { label: "Split-complementaria", value: "split-complementary" },
      ] },
  ],
  "art-composition": [
    { id: "rule", label: "Regla de composición", input: "select", path: "rule", defaultValue: "rule-of-thirds",
      options: [
        { label: "Regla de tercios", value: "rule-of-thirds" },
        { label: "Proporción áurea", value: "golden-ratio"   },
        { label: "Simetría",         value: "symmetry"       },
        { label: "Diagonal",         value: "diagonal"       },
      ] },
    { id: "cw", label: "Ancho del lienzo", input: "number", path: "canvasWidth",  defaultValue: 640, min: 200, max: 1920, step: 10, unit: "px" },
    { id: "ch", label: "Alto del lienzo",  input: "number", path: "canvasHeight", defaultValue: 480, min: 150, max: 1080, step: 10, unit: "px" },
  ],

  // ── Biología ─────────────────────────────────────────────────────────────────
  "bio-cell-diagram": [
    { id: "cellType", label: "Tipo de célula", input: "select", path: "cellType", defaultValue: "animal",
      options: [{ label: "Animal", value: "animal" }, { label: "Vegetal", value: "plant" }, { label: "Bacteria", value: "bacteria" }] },
  ],
  "bio-genetics": [
    { id: "cross", label: "Tipo de cruce", input: "select", path: "cross", defaultValue: "monohybrid",
      options: [{ label: "Monohíbrido", value: "monohybrid" }, { label: "Dihíbrido", value: "dihybrid" }] },
  ],
  "bio-population-dynamics": [
    { id: "model", label: "Modelo", input: "select", path: "model", defaultValue: "logistic",
      options: [
        { label: "Logístico",      value: "logistic"       },
        { label: "Lotka-Volterra", value: "lotka-volterra" },
        { label: "Exponencial",    value: "exponential"    },
      ] },
    { id: "capacity", label: "Capacidad de carga (K)", input: "number", path: "parameters.carryingCapacity", defaultValue: 1000, min: 10, max: 100000, step: 10, description: "Solo modelo logístico" },
    { id: "growRate",  label: "Tasa de crecimiento",   input: "number", path: "parameters.growthRate",       defaultValue: 0.1,  min: 0.01, max: 5, step: 0.01 },
  ],

  // ── Música ───────────────────────────────────────────────────────────────────
  "music-waveform": [
    { id: "baseFreq", label: "Frecuencia base", input: "number", path: "baseFrequency", defaultValue: 440, min: 20, max: 20000, step: 1, unit: "Hz" },
    { id: "note",     label: "Nota",            input: "text",   path: "note",          defaultValue: "A4" },
  ],
  "music-rhythm-grid": [
    { id: "tempo",    label: "Tempo",             input: "number", path: "tempo",               defaultValue: 120, min: 40, max: 240, step: 1,  unit: "BPM" },
    { id: "measures", label: "Compases",          input: "number", path: "measures",            defaultValue: 2,   min: 1,  max: 8,   step: 1 },
    { id: "tsBeats",  label: "Pulsos por compás", input: "number", path: "timeSignature.beats", defaultValue: 4,   min: 2,  max: 12,  step: 1 },
  ],

  // ── Política ─────────────────────────────────────────────────────────────────
  "pol-voting-systems": [
    { id: "c1name", label: "Candidato 1", input: "text", path: "candidates.0.name", defaultValue: "Candidato A" },
    { id: "c2name", label: "Candidato 2", input: "text", path: "candidates.1.name", defaultValue: "Candidato B" },
    { id: "c3name", label: "Candidato 3", input: "text", path: "candidates.2.name", defaultValue: "Candidato C" },
  ],
  "pol-power-distribution": [
    { id: "system", label: "Sistema de gobierno", input: "select", path: "system", defaultValue: "presidential",
      options: [
        { label: "Presidencialismo", value: "presidential" },
        { label: "Parlamentarismo",  value: "parliamentary" },
        { label: "Federalismo",      value: "federal"       },
      ] },
  ],

  // ── Educación Cívica ─────────────────────────────────────────────────────────
  "civic-rights-tree": [
    { id: "rootLabel", label: "Nodo raíz", input: "text", path: "root.label", defaultValue: "Constitución" },
  ],
  "civic-budget": [
    { id: "totalBudget", label: "Presupuesto total", input: "number", path: "totalBudget", defaultValue: 100000, min: 0, max: 1000000000, step: 1000 },
    { id: "currency",    label: "Moneda",            input: "text",   path: "currency",    defaultValue: "$" },
  ],

  // ── Ciencias Ambientales ─────────────────────────────────────────────────────
  "env-ecosystem": [
    { id: "biome", label: "Bioma", input: "select", path: "biome", defaultValue: "bosque-tropical",
      options: [
        { label: "Bosque tropical", value: "bosque-tropical" },
        { label: "Desierto",        value: "desierto"        },
        { label: "Océano",          value: "oceano"          },
        { label: "Pradera",         value: "pradera"         },
        { label: "Tundra",          value: "tundra"          },
      ] },
    { id: "energyLoss", label: "Pérdida de energía entre niveles", input: "number", path: "energyLoss", defaultValue: 90, min: 1, max: 99, step: 1, unit: "%" },
  ],
  "env-carbon-cycle": [
    { id: "humanFluxAmt", label: "Flujo humano de carbono", input: "number", path: "humanFlux.amount", defaultValue: 9, min: 0, max: 100, step: 0.5, unit: "GtC/año" },
  ],

  // ── Informática ──────────────────────────────────────────────────────────────
  "cs-sorting": [
    { id: "algorithm", label: "Algoritmo", input: "select", path: "algorithm", defaultValue: "bubble",
      options: [
        { label: "Burbuja",   value: "bubble"    },
        { label: "Selección", value: "selection" },
        { label: "Inserción", value: "insertion" },
        { label: "Merge",     value: "merge"     },
        { label: "Quick",     value: "quick"     },
      ] },
    { id: "step", label: "Paso inicial", input: "number", path: "currentStep", defaultValue: 0, min: 0, max: 100, step: 1 },
  ],
  "cs-graph": [
    { id: "directed",  label: "Dirigido",  input: "boolean", path: "directed",  defaultValue: false },
    { id: "weighted",  label: "Ponderado", input: "boolean", path: "weighted",  defaultValue: false },
    { id: "algorithm", label: "Algoritmo", input: "select",  path: "algorithm", defaultValue: "bfs",
      options: [
        { label: "BFS",      value: "bfs"      },
        { label: "DFS",      value: "dfs"      },
        { label: "Dijkstra", value: "dijkstra" },
        { label: "Ninguno",  value: "none"     },
      ] },
  ],
  "cs-binary-tree": [
    { id: "traversal", label: "Recorrido", input: "select", path: "traversalOrder", defaultValue: "inorder",
      options: [
        { label: "Inorden",   value: "inorder"    },
        { label: "Preorden",  value: "preorder"   },
        { label: "Postorden", value: "postorder"  },
        { label: "Por nivel", value: "levelorder" },
      ] },
    { id: "isBST", label: "Es BST", input: "boolean", path: "isBST", defaultValue: true },
  ],

  // ── Ciencias Naturales ───────────────────────────────────────────────────────
  "nat-weather": [
    { id: "season", label: "Estación", input: "select", path: "season", defaultValue: "primavera",
      options: [
        { label: "Verano",    value: "verano"    },
        { label: "Otoño",     value: "otono"     },
        { label: "Invierno",  value: "invierno"  },
        { label: "Primavera", value: "primavera" },
      ] },
    { id: "temp",   label: "Temperatura",     input: "number", path: "variables.temperature",  defaultValue: 22,   min: -60,  max: 60,   step: 0.5, unit: "°C"   },
    { id: "hum",    label: "Humedad",         input: "number", path: "variables.humidity",      defaultValue: 65,   min: 0,    max: 100,  step: 1,   unit: "%"    },
    { id: "pres",   label: "Presión",         input: "number", path: "variables.pressure",      defaultValue: 1013, min: 900,  max: 1100, step: 1,   unit: "hPa"  },
    { id: "wind",   label: "Vel. del viento", input: "number", path: "variables.windSpeed",     defaultValue: 15,   min: 0,    max: 200,  step: 1,   unit: "km/h" },
    { id: "precip", label: "Precipitación",   input: "number", path: "variables.precipitation", defaultValue: 12,   min: 0,    max: 500,  step: 1,   unit: "mm"   },
  ],
  "nat-water-cycle": [
    { id: "humanImpact", label: "Factor impacto humano", input: "number", path: "humanImpactFactor", defaultValue: 0.25, min: 0, max: 1, step: 0.05, description: "0 = sin impacto, 1 = impacto máximo" },
  ],

  // ── Cocina ───────────────────────────────────────────────────────────────────
  "cook-recipe-scaler": [
    { id: "servingsBase",    label: "Porciones base",     input: "number", path: "servingsBase",    defaultValue: 4, min: 1, max: 100, step: 1 },
    { id: "servingsCurrent", label: "Porciones actuales", input: "number", path: "servingsCurrent", defaultValue: 4, min: 1, max: 100, step: 1 },
  ],
  "cook-maillard": [
    { id: "temperature", label: "Temperatura", input: "number", path: "temperature", defaultValue: 150, min: 0,  max: 300, step: 1,   unit: "°C"  },
    { id: "time",        label: "Tiempo",      input: "number", path: "time",        defaultValue: 5,   min: 0,  max: 60,  step: 0.5, unit: "min" },
    { id: "moisture",    label: "Humedad",     input: "number", path: "moisture",    defaultValue: 30,  min: 0,  max: 100, step: 1,   unit: "%"   },
  ],

  // ── Vida Práctica ─────────────────────────────────────────────────────────────
  "life-budget": [
    { id: "income",   label: "Ingreso mensual", input: "number", path: "monthlyIncome", defaultValue: 100000, min: 0, max: 100000000, step: 1000 },
    { id: "currency", label: "Moneda",          input: "text",   path: "currency",      defaultValue: "$" },
  ],
  "life-time-matrix": [
    { id: "totalHours", label: "Horas semanales", input: "number", path: "totalHoursPerWeek", defaultValue: 40, min: 1, max: 168, step: 1, unit: "hs" },
  ],

  // ── Física ───────────────────────────────────────────────────────────────────
  "physics-forces-vectors": [
    { id: "unit",      label: "Unidad",             input: "text",    path: "unit",                   defaultValue: "N"   },
    { id: "showAxes",  label: "Mostrar ejes",        input: "boolean", path: "options.showAxes",       defaultValue: true  },
    { id: "showComps", label: "Mostrar componentes", input: "boolean", path: "options.showComponents", defaultValue: false },
  ],
  "energy-chart": [
    { id: "xVar",       label: "Variable eje X",          input: "select", path: "axes.x.variable",       defaultValue: "tiempo",
      options: [{ label: "Tiempo", value: "tiempo" }, { label: "Posición", value: "posicion" }] },
    { id: "conservTol", label: "Tolerancia conservación", input: "number", path: "conservation.tolerance", defaultValue: 2, min: 0, max: 100, step: 0.5, unit: "J" },
  ],
  "circuit": [
    { id: "comp0val", label: "Valor componente 1", input: "number", path: "components.0.value", defaultValue: 9,  min: 0, max: 10000, step: 0.1 },
    { id: "comp1val", label: "Valor componente 2", input: "number", path: "components.1.value", defaultValue: 30, min: 0, max: 10000, step: 0.1 },
    { id: "comp2val", label: "Valor componente 3", input: "number", path: "components.2.value", defaultValue: 60, min: 0, max: 10000, step: 0.1 },
  ],
  "field-lines": [
    { id: "polarity0",  label: "Polaridad fuente 1", input: "select", path: "sources.0.polarity",  defaultValue: "positiva",
      options: [{ label: "Positiva / Norte", value: "positiva" }, { label: "Negativa / Sur", value: "negativa" }] },
    { id: "magnitude0", label: "Magnitud fuente 1",  input: "number", path: "sources.0.magnitude", defaultValue: 1, min: 0, max: 100, step: 0.5 },
    { id: "polarity1",  label: "Polaridad fuente 2", input: "select", path: "sources.1.polarity",  defaultValue: "negativa",
      options: [{ label: "Positiva / Norte", value: "positiva" }, { label: "Negativa / Sur", value: "negativa" }] },
  ],
  "optics-rays": [
    { id: "elemType",  label: "Elemento óptico",      input: "select", path: "element.type",        defaultValue: "lente-convergente",
      options: [
        { label: "Lente convergente", value: "lente-convergente" },
        { label: "Lente divergente",  value: "lente-divergente"  },
        { label: "Espejo plano",      value: "espejo-plano"      },
        { label: "Espejo cóncavo",    value: "espejo-concavo"    },
        { label: "Espejo convexo",    value: "espejo-convexo"    },
      ] },
    { id: "objHeight", label: "Altura del objeto",    input: "number", path: "object.height",       defaultValue: 40, min: 1,    max: 200,  step: 1,  unit: "px" },
    { id: "elemX",     label: "Posición del elemento",input: "number", path: "element.positionX",   defaultValue: 0,  min: -400, max: 400,  step: 10, unit: "px" },
  ],
  "physics-simulation": [
    { id: "param0", label: "Altura inicial (h₀)",    input: "number", path: "parameters.0.value", defaultValue: 50, min: 0,    max: 1000, step: 1,   unit: "m"   },
    { id: "param1", label: "Velocidad inicial (v₀)", input: "number", path: "parameters.1.value", defaultValue: 0,  min: -100, max: 100,  step: 0.5, unit: "m/s" },
  ],

  // ── Química ──────────────────────────────────────────────────────────────────
  "chem-reaction": [
    { id: "reactant0", label: "Reactivo 1 (fórmula)", input: "text", path: "reactants.0.formula", defaultValue: "CH₄" },
    { id: "product0",  label: "Producto 1 (fórmula)", input: "text", path: "products.0.formula",  defaultValue: "CO₂" },
  ],
  "chem-structure": [
    { id: "edModel", label: "Modelo atómico", input: "select", path: "electronDistribution.model", defaultValue: "bohr",
      options: [
        { label: "Bohr",             value: "bohr"             },
        { label: "Nube electrónica", value: "nube-electronica" },
        { label: "Cuántico",         value: "cuantico"         },
      ] },
    { id: "edAtom", label: "Elemento", input: "text", path: "electronDistribution.atom", defaultValue: "C" },
  ],
  "chem-periodic-table": [
    { id: "highlightProp", label: "Propiedad destacada", input: "select", path: "highlightProperty.key", defaultValue: "electronegativity",
      options: [
        { label: "Clasificación",      value: "classification"    },
        { label: "Electronegatividad", value: "electronegativity" },
        { label: "Radio atómico",      value: "atomicRadius"      },
        { label: "Energía ionización", value: "ionizationEnergy"  },
      ] },
    { id: "scaleType", label: "Tipo de escala", input: "select", path: "scale.type", defaultValue: "sequential",
      options: [{ label: "Secuencial", value: "sequential" }, { label: "Categórico", value: "categorical" }] },
  ],
  "chem-vsepr": [
    { id: "defaultMolId", label: "Molécula por defecto", input: "text", path: "defaultMoleculeId", defaultValue: "h2o" },
  ],
  "chem-titration": [
    { id: "currentPH", label: "pH actual",            input: "number", path: "indicator.currentPH", defaultValue: 7,  min: 0, max: 14,  step: 0.1 },
    { id: "axisXMax",  label: "Volumen máx. (eje X)", input: "number", path: "axes.x.max",          defaultValue: 50, min: 5, max: 200, step: 1,  unit: "mL" },
  ],

  // ── Matemáticas ──────────────────────────────────────────────────────────────
  "geometria-plana-espacial": [
    { id: "fig0dim",  label: "Dimensión figura 1", input: "select", path: "figures.0.dimension", defaultValue: "plana",
      options: [{ label: "Plana (2D)", value: "plana" }, { label: "Espacial (3D)", value: "espacial" }] },
    { id: "fig0name", label: "Nombre figura 1",    input: "text",   path: "figures.0.name",      defaultValue: "Triángulo rectángulo" },
  ],
  "trigonometria-avanzada": [
    { id: "circleR",  label: "Radio círculo unitario", input: "number", path: "unitCircle.radius",     defaultValue: 1,   min: 0.1, max: 10,  step: 0.1 },
    { id: "f0amp",    label: "Amplitud función 1",     input: "number", path: "functions.0.amplitude", defaultValue: 1,   min: 0.1, max: 10,  step: 0.1 },
    { id: "f0period", label: "Período función 1",      input: "number", path: "functions.0.period",    defaultValue: 360, min: 1,   max: 720, step: 1,  unit: "°" },
  ],
  "algebra-calculo-visual": [
    { id: "intLower", label: "Límite inferior integral", input: "number", path: "integrals.0.bounds.lower", defaultValue: 0, min: -100, max: 100, step: 0.5 },
    { id: "intUpper", label: "Límite superior integral", input: "number", path: "integrals.0.bounds.upper", defaultValue: 3, min: -100, max: 100, step: 0.5 },
  ],

  // ── Matemáticas (variantes básicas — referencian paths compatibles) ──────────
  // geometria, trigonometria y algebra-calculo son versiones simplificadas de sus
  // contrapartes avanzadas. Los paths de texto son comunes entre ambas versiones.
  "geometria": [
    { id: "fig0name", label: "Nombre figura 1", input: "text" as const, path: "figures.0.name", defaultValue: "Triángulo rectángulo" },
    { id: "fig0formula", label: "Fórmula figura 1", input: "text" as const, path: "figures.0.formula", defaultValue: "A = base × altura / 2" },
  ],
  "trigonometria": [
    { id: "ident0expr", label: "Identidad principal", input: "text" as const, path: "identities.0.expression", defaultValue: "sin²θ + cos²θ = 1" },
  ],
  "algebra-calculo": [
    { id: "topic0label", label: "Tema principal", input: "text" as const, path: "topics.0.label", defaultValue: "Derivadas" },
    { id: "topic0formula", label: "Fórmula", input: "text" as const, path: "topics.0.formula", defaultValue: "f'(x) = lim(Δx→0) [f(x+Δx) - f(x)] / Δx" },
  ],

  // ── Gráficos generales ───────────────────────────────────────────────────────
  "timeline": [
    { id: "rangeStart", label: "Año inicio", input: "number", path: "range.start", defaultValue: 1900, min: -5000, max: 3000, step: 1 },
    { id: "rangeEnd",   label: "Año fin",    input: "number", path: "range.end",   defaultValue: 2000, min: -5000, max: 3000, step: 1 },
  ],
  "concept-map": [
    { id: "centralNode", label: "Concepto central", input: "text", path: "nodes.0.label", defaultValue: "Concepto principal" },
  ],
  "flow": [
    { id: "firstStep", label: "Primer paso", input: "text", path: "steps.0.label", defaultValue: "Inicio" },
  ],
  "map": [
    { id: "zoom", label: "Zoom",     input: "number", path: "viewport.zoom",     defaultValue: 5,     min: 1,    max: 20,  step: 1    },
    { id: "lat",  label: "Latitud",  input: "number", path: "viewport.center.0", defaultValue: -34.6, min: -90,  max: 90,  step: 0.01 },
    { id: "lng",  label: "Longitud", input: "number", path: "viewport.center.1", defaultValue: -58.4, min: -180, max: 180, step: 0.01 },
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
    toolSpec: raw.toolSpec && typeof raw.toolSpec === "object"
      ? (raw.toolSpec as VisualSpec)
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
            {!slide.toolSpec && slide.body && (
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

        {/* Tool badge */}
        {slide.toolSpec && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[10px] opacity-50">
            <span>⚙</span>
            <span className="font-medium">{slide.toolSpec.kind}</span>
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

// ─── Slide preview pane ───────────────────────────────────────────────────────

function SlidePreviewPane({
  slide,
  theme,
  accentColor,
}: {
  slide: Slide;
  theme: ThemeKey;
  accentColor?: AccentColor;
}) {
  const cfg = THEMES[theme] ?? THEMES.minimal;
  const accentCfg = accentColor ? ACCENT_COLORS[accentColor] : null;
  const hasBg = Boolean(slide.bgImage);
  const hasBgOverlay = hasBg && slide.bgOverlay !== "none";
  const headingAccentStyle =
    accentCfg && !hasBgOverlay ? { color: accentCfg.swatch } : undefined;
  const headingCls = hasBgOverlay
    ? "text-2xl font-bold leading-tight text-white drop-shadow"
    : cfg.heading.replace("text-4xl", "text-2xl");
  const subtitleCls = hasBgOverlay
    ? "text-base font-medium text-white/80 drop-shadow"
    : cfg.subtitle.replace("text-xl", "text-base");

  return (
    <div className="flex flex-col gap-3 p-5 h-full">
      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest flex-shrink-0">
        Vista previa
      </p>
      <div
        className={`relative w-full rounded-xl overflow-hidden shadow-lg flex-shrink-0 ${cfg.slide}`}
        style={{ aspectRatio: "16/9" }}
      >
        {hasBg && (
          <img
            src={slide.bgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        )}
        {hasBgOverlay && (
          <div
            className={`absolute inset-0 ${
              slide.bgOverlay === "dark" ? cfg.overlayDark : cfg.overlayMedium
            }`}
          />
        )}

        <div className="relative z-10 h-full flex flex-col p-5 gap-3">
          {slide.layout === "quote" ? (
            <div className="flex flex-col items-center justify-center h-full gap-2 text-center">
              <div className="text-4xl opacity-20 font-serif leading-none">&ldquo;</div>
              {slide.heading && (
                <h2
                  className="text-xl italic font-serif leading-snug"
                  style={headingAccentStyle}
                >
                  {slide.heading}
                </h2>
              )}
              {slide.subtitle && (
                <p className="text-xs opacity-60">— {slide.subtitle}</p>
              )}
            </div>
          ) : slide.toolSpec ? (
            <>
              {slide.heading && (
                <h2 className={headingCls} style={headingAccentStyle}>
                  {slide.heading}
                </h2>
              )}
              {slide.subtitle && (
                <p className={subtitleCls}>{slide.subtitle}</p>
              )}
              <div className="flex-1 min-h-0 overflow-hidden rounded-lg">
                <VisualizerRenderer spec={slide.toolSpec} />
              </div>
            </>
          ) : slide.layout === "split" ? (
            <>
              {slide.heading && (
                <h2 className={headingCls} style={headingAccentStyle}>
                  {slide.heading}
                </h2>
              )}
              <div className="grid grid-cols-[1fr_1px_1fr] gap-3 flex-1 min-h-0">
                <div className={`text-xs overflow-auto ${cfg.body}`}>
                  {slide.leftColumn ?? slide.body ?? ""}
                </div>
                <div className="opacity-15 bg-current" />
                <div className={`text-xs overflow-auto ${cfg.body}`}>
                  {slide.rightColumn ?? ""}
                </div>
              </div>
            </>
          ) : slide.layout === "centered" ? (
            <div className="flex flex-col items-center justify-center h-full gap-2 text-center">
              {slide.heading && (
                <h2 className={headingCls} style={headingAccentStyle}>
                  {slide.heading}
                </h2>
              )}
              {slide.subtitle && <p className={subtitleCls}>{slide.subtitle}</p>}
              {slide.body && (
                <p className={`text-xs overflow-auto ${cfg.body}`}>{slide.body}</p>
              )}
            </div>
          ) : slide.layout === "bottom-text" ? (
            <div className="flex flex-col justify-end h-full gap-2">
              {slide.heading && (
                <h2 className={headingCls} style={headingAccentStyle}>
                  {slide.heading}
                </h2>
              )}
              {slide.subtitle && <p className={subtitleCls}>{slide.subtitle}</p>}
            </div>
          ) : (
            /* top (default) */
            <>
              {slide.heading && (
                <h2 className={headingCls} style={headingAccentStyle}>
                  {slide.heading}
                </h2>
              )}
              {slide.subtitle && <p className={subtitleCls}>{slide.subtitle}</p>}
              {slide.isCode && slide.body ? (
                <pre
                  className={`text-xs overflow-auto rounded p-3 flex-1 min-h-0 ${cfg.code}`}
                >
                  {slide.body}
                </pre>
              ) : slide.body ? (
                <p className={`text-xs overflow-auto ${cfg.body}`}>{slide.body}</p>
              ) : null}
            </>
          )}
        </div>

        {accentCfg && (
          <div
            className="absolute bottom-0 left-0 right-0 h-[3px]"
            style={{ background: accentCfg.swatch }}
          />
        )}
      </div>
    </div>
  );
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
  if (param.input === "number") {
    const numVal = value !== undefined ? Number(value) : Number(param.defaultValue);
    const decimals = param.step && param.step < 1 ? 1 : 0;
    return (
      <div className="flex items-center gap-3">
        <label className="text-xs font-medium text-gray-500 w-32 flex-shrink-0">
          {param.label}
          {param.unit && <span className="text-gray-300 ml-1">({param.unit})</span>}
        </label>
        <input
          type="range"
          min={param.min ?? 0}
          max={param.max ?? 100}
          step={param.step ?? 1}
          value={numVal}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1 accent-blue-500"
        />
        <span className="text-xs text-gray-600 w-14 text-right tabular-nums font-mono">
          {numVal.toFixed(decimals)}
        </span>
      </div>
    );
  }
  if (param.input === "select") {
    const strVal = value !== undefined ? String(value) : String(param.defaultValue);
    return (
      <div className="flex items-center gap-3">
        <label className="text-xs font-medium text-gray-500 w-32 flex-shrink-0">{param.label}</label>
        <select
          className="flex-1 border border-gray-200 rounded px-2 py-1 text-xs outline-none focus:border-blue-400"
          value={strVal}
          onChange={(e) => onChange(e.target.value)}
        >
          {param.options?.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
    );
  }
  if (param.input === "boolean") {
    return (
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium text-gray-500 w-32 flex-shrink-0">{param.label}</span>
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={value !== undefined ? Boolean(value) : Boolean(param.defaultValue)}
            onChange={(e) => onChange(e.target.checked)}
            className="rounded border-gray-300 text-blue-600"
          />
          <span className="text-xs text-gray-500">{Boolean(value) ? "Sí" : "No"}</span>
        </label>
      </div>
    );
  }
  if (param.input === "text") {
    return (
      <div>
        <div className="flex items-baseline justify-between mb-1">
          <label className="text-xs font-medium text-gray-500">{param.label}</label>
          {param.description && (
            <span className="text-[10px] text-gray-300">{param.description}</span>
          )}
        </div>
        <input
          className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm font-mono outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
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
        <label className="text-xs font-medium text-gray-500 w-32 flex-shrink-0">{param.label}</label>
        <input
          type="color"
          value={strVal}
          onChange={(e) => onChange(e.target.value)}
          className="h-7 w-12 rounded border border-gray-200 cursor-pointer bg-transparent p-0.5"
        />
        <span className="text-xs text-gray-400 font-mono">{strVal}</span>
      </div>
    );
  }
  return null;
}

// ─── Editor form ──────────────────────────────────────────────────────────────

type EditorFormProps = {
  slide: Slide;
  onChange: (patch: Partial<Omit<Slide, "id">>) => void;
};

function SlideEditorForm({ slide, onChange }: EditorFormProps) {
  const isSplit = slide.layout === "split";
  const isQuote = slide.layout === "quote";

  const headingInput = (
    <div>
      <div className="flex items-baseline justify-between mb-1.5">
        <label className="text-xs font-medium text-gray-500">
          {isQuote ? "Texto de la cita" : "Título principal"}
        </label>
        <span className="text-[10px] text-gray-300 font-mono">
          {isQuote ? "text-3xl italic font-serif" : "text-4xl font-bold"}
        </span>
      </div>
      <input
        className={`w-full border-0 border-b-2 border-gray-200 pb-2 leading-tight outline-none focus:border-blue-400 bg-transparent placeholder-gray-200 text-gray-800 ${
          isQuote ? "text-2xl italic font-serif" : "text-2xl font-bold"
        }`}
        placeholder={isQuote ? '"El conocimiento es poder..."' : "Título de la diapositiva"}
        value={slide.heading}
        onChange={(e) => onChange({ heading: e.target.value })}
      />
    </div>
  );

  return (
    <div className="flex flex-col gap-7">
      {/* ── Layout picker ── */}
      <div>
        <p className="text-xs font-medium text-gray-500 mb-2">Distribución del contenido</p>
        <div className="grid grid-cols-5 gap-2">
          {(Object.keys(LAYOUT_META) as LayoutPreset[]).map((preset) => (
            <button
              key={preset}
              type="button"
              title={LAYOUT_META[preset].description}
              className={`flex flex-col gap-2 p-3 rounded-lg border transition-colors text-gray-600 ${
                slide.layout === preset
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
              }`}
              style={{ height: 72 }}
              onClick={() => onChange({ layout: preset })}
            >
              <div className="flex-1 min-h-0 w-full">
                <LayoutIcon preset={preset} />
              </div>
              <span className="text-[10px] font-medium leading-none text-center">
                {LAYOUT_META[preset].label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Background image ── */}
      <div>
        <p className="text-xs font-medium text-gray-500 mb-2">Imagen de fondo (opcional)</p>
        <input
          type="url"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
          placeholder="https://ejemplo.com/imagen.jpg"
          value={slide.bgImage ?? ""}
          onChange={(e) => onChange({ bgImage: e.target.value || undefined })}
        />
        {slide.bgImage ? (
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xs text-gray-500 flex-shrink-0">Capa de color:</span>
            {(["none", "medium", "dark"] as const).map((opt) => (
              <button
                key={opt}
                type="button"
                className={`px-2.5 py-1 rounded-md text-xs border transition-colors ${
                  (slide.bgOverlay ?? "none") === opt
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-gray-200 text-gray-600 hover:border-blue-300"
                }`}
                onClick={() => onChange({ bgOverlay: opt })}
              >
                {{ none: "Ninguna", medium: "Suave", dark: "Oscura" }[opt]}
              </button>
            ))}
            <img
              src={slide.bgImage}
              alt=""
              className="ml-auto h-8 w-14 object-cover rounded border border-gray-200 flex-shrink-0"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          </div>
        ) : null}
      </div>

      {/* ── Content fields ── */}
      {isSplit ? (
        <>
          {headingInput}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1.5 block">Columna izquierda</label>
              <textarea
                className="w-full border border-gray-200 rounded-lg p-3 resize-none text-sm outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 leading-relaxed"
                placeholder="Contenido de la columna izquierda..."
                rows={12}
                value={slide.leftColumn ?? ""}
                onChange={(e) => onChange({ leftColumn: e.target.value || undefined })}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1.5 block">Columna derecha</label>
              <textarea
                className="w-full border border-gray-200 rounded-lg p-3 resize-none text-sm outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 leading-relaxed"
                placeholder="Contenido de la columna derecha..."
                rows={12}
                value={slide.rightColumn ?? ""}
                onChange={(e) => onChange({ rightColumn: e.target.value || undefined })}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          {headingInput}

          <div>
            <div className="flex items-baseline justify-between mb-1.5">
              <label className="text-xs font-medium text-gray-500">
                {isQuote ? "Atribución" : "Subtítulo"}
              </label>
              <span className="text-[10px] text-gray-300 font-mono">text-xl font-medium</span>
            </div>
            <input
              className="w-full border-0 border-b border-gray-200 pb-1.5 text-lg font-medium leading-snug outline-none focus:border-blue-400 bg-transparent placeholder-gray-200 text-slate-500"
              placeholder={isQuote ? "— Autor, Año (opcional)" : "Subtítulo o descripción secundaria (opcional)"}
              value={slide.subtitle ?? ""}
              onChange={(e) => onChange({ subtitle: e.target.value || undefined })}
            />
          </div>

          {!isQuote ? (
            <>
              {/* ── Interactive tool section ── */}
              <ToolEditor
                spec={slide.toolSpec}
                onChange={(spec) => onChange({ toolSpec: spec, body: spec ? undefined : slide.body, isCode: spec ? false : slide.isCode })}
              />

              {/* ── Body / code (hidden when tool is active) ── */}
              {!slide.toolSpec ? (
                <>
                  <div>
                    <div className="flex items-baseline justify-between mb-1.5">
                      <label className="text-xs font-medium text-gray-500">
                        {slide.isCode ? "Código" : "Cuerpo de texto"}
                      </label>
                      <span className="text-[10px] text-gray-300 font-mono">text-base leading-relaxed</span>
                    </div>
                    <textarea
                      className={`w-full border border-gray-200 rounded-lg p-4 resize-none text-sm outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 leading-relaxed ${
                        slide.isCode ? "font-mono bg-gray-50" : ""
                      }`}
                      placeholder={
                        slide.isCode
                          ? "// Escribí tu código aquí..."
                          : "Contenido de la diapositiva...\n\nPodés usar texto libre, listas con guiones (-) o numeradas."
                      }
                      rows={10}
                      value={slide.body ?? ""}
                      onChange={(e) => onChange({ body: e.target.value || undefined })}
                    />
                  </div>

                  <div className="flex items-center gap-3 flex-wrap">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        checked={slide.isCode ?? false}
                        onChange={(e) => onChange({ isCode: e.target.checked })}
                      />
                      <span className="text-xs text-gray-600">Mostrar como bloque de código</span>
                    </label>
                    {slide.isCode ? (
                      <input
                        className="border border-gray-200 rounded px-2.5 py-1 text-xs outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
                        placeholder="lenguaje (js, python...)"
                        value={slide.language ?? ""}
                        onChange={(e) => onChange({ language: e.target.value || undefined })}
                      />
                    ) : null}
                  </div>
                </>
              ) : null}
            </>
          ) : null}
        </>
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
};

// ─── Main component ───────────────────────────────────────────────────────────

export default function TheorySlideEditor({
  presentationTitle,
  initialSlides,
  initialTheme = "minimal",
  initialAccentColor,
  onDone,
  onClose,
}: Props) {
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
    <div className="fixed inset-0 z-50 bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50 flex-shrink-0 gap-3">
        <h2 className="text-sm font-semibold text-gray-900 truncate min-w-0">
          {presentationTitle || "Presentación"}
        </h2>

        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Theme swatches */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-gray-400 mr-0.5">Tema:</span>
            {(Object.entries(THEMES) as [ThemeKey, ThemeConfig][]).map(([key, cfg]) => (
              <button
                key={key}
                type="button"
                title={cfg.label}
                className={`w-5 h-5 rounded-full border-2 transition-all flex-shrink-0 ${
                  theme === key
                    ? "border-blue-500 scale-125 shadow-sm"
                    : "border-gray-300 hover:scale-110 hover:border-gray-400"
                }`}
                style={{ background: cfg.swatch }}
                onClick={() => setTheme(key)}
              />
            ))}
          </div>

          {/* Accent color swatches */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-gray-400 mr-0.5">Acento:</span>
            <button
              type="button"
              title="Sin color de acento"
              className={`w-5 h-5 rounded-full border-2 transition-all flex-shrink-0 bg-gray-100 ${
                accentColor === undefined
                  ? "border-blue-500 scale-125 shadow-sm"
                  : "border-gray-300 hover:scale-110 hover:border-gray-400"
              }`}
              onClick={() => setAccentColor(undefined)}
            >
              <span className="text-[8px] text-gray-400 flex items-center justify-center w-full h-full">✕</span>
            </button>
            {(Object.entries(ACCENT_COLORS) as [AccentColor, AccentConfig][]).map(([key, cfg]) => (
              <button
                key={key}
                type="button"
                title={cfg.label}
                className={`w-5 h-5 rounded-full border-2 transition-all flex-shrink-0 ${
                  accentColor === key
                    ? "border-blue-500 scale-125 shadow-sm"
                    : "border-gray-300 hover:scale-110 hover:border-gray-400"
                }`}
                style={{ background: cfg.swatch }}
                onClick={() => setAccentColor(key)}
              />
            ))}
          </div>

          <button
            type="button"
            className="flex items-center gap-1 rounded-md border border-gray-300 px-3 py-1.5 text-xs hover:bg-gray-100"
            onClick={addSlide}
          >
            <Plus size={12} />
            Diapositiva
          </button>

          <button
            type="button"
            className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700"
            onClick={() => onDone(slides, theme, accentColor)}
          >
            Listo
          </button>

          <button
            type="button"
            className="p-1.5 rounded-md hover:bg-gray-200 text-gray-500"
            onClick={onClose}
            title="Cerrar sin guardar"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar — slide thumbnails */}
        <div className="w-52 border-r border-gray-200 overflow-y-auto bg-gray-50 flex-shrink-0 flex flex-col">
          <div className="flex-1">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`group relative border-b border-gray-100 ${
                  currentIndex === index
                    ? "ring-2 ring-inset ring-blue-500 bg-blue-50"
                    : "hover:bg-gray-100"
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
                    <span className="text-[10px] text-gray-400 tabular-nums flex-shrink-0">{index + 1}</span>
                    <span className="text-[10px] text-gray-300">·</span>
                    <span className="text-xs text-gray-600 truncate leading-none">
                      {slide.heading || <span className="text-gray-300 italic">Sin título</span>}
                    </span>
                    {slide.toolSpec && (
                      <Settings size={9} className="text-gray-300 flex-shrink-0 ml-auto" />
                    )}
                  </div>
                </button>

                {/* Action buttons on hover */}
                <div className="absolute right-1 top-2 hidden group-hover:flex flex-col gap-0.5 bg-white/80 rounded p-0.5 backdrop-blur-sm">
                  <button
                    type="button"
                    title="Mover arriba"
                    className="p-0.5 text-gray-400 hover:text-gray-700 disabled:opacity-30"
                    disabled={index === 0}
                    onClick={() => moveSlide(index, index - 1)}
                  >
                    <ChevronUp size={12} />
                  </button>
                  <button
                    type="button"
                    title="Duplicar"
                    className="p-0.5 text-gray-400 hover:text-blue-600"
                    onClick={() => dupSlide(index)}
                  >
                    <Copy size={12} />
                  </button>
                  <button
                    type="button"
                    title="Mover abajo"
                    className="p-0.5 text-gray-400 hover:text-gray-700 disabled:opacity-30"
                    disabled={index === slides.length - 1}
                    onClick={() => moveSlide(index, index + 1)}
                  >
                    <ChevronDown size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-1 py-3 text-xs text-gray-400 hover:text-blue-600 hover:bg-blue-50 border-t border-gray-200 flex-shrink-0"
            onClick={addSlide}
          >
            <Plus size={12} />
            Agregar diapositiva
          </button>
        </div>

        {/* Editor panel (form + preview) */}
        <div className="flex-1 flex overflow-hidden">
          {/* Form — left column */}
          <div className="flex-1 overflow-y-auto border-r border-gray-200">
            <div className="max-w-2xl mx-auto w-full p-8 flex flex-col gap-8 min-h-full">
              {currentSlide ? (
                <>
                  <SlideEditorForm
                    slide={currentSlide}
                    onChange={(patch) => updateSlide(currentSlide.id, patch)}
                  />

                  {slides.length > 1 ? (
                    <button
                      type="button"
                      className="self-start flex items-center gap-1 text-xs text-red-500 hover:underline"
                      onClick={() => removeSlide(currentSlide.id)}
                    >
                      <Trash2 size={12} />
                      Eliminar diapositiva
                    </button>
                  ) : null}
                </>
              ) : null}
            </div>
          </div>

          {/* Preview — right column */}
          {currentSlide ? (
            <div className="w-[420px] flex-shrink-0 overflow-y-auto bg-gray-50">
              <SlidePreviewPane
                slide={currentSlide}
                theme={theme}
                accentColor={accentColor}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
