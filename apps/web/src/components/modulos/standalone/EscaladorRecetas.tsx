import { useId, useState } from "react";
import { type RecetaConfig } from "./types";

import { useI18n } from "../../../i18n/I18nContext";

// ── Conversión de unidades ──────────────────────────────────────────
// Tablas y redondeo con fracciones adaptados del mockup "Escalador de
// Recetas" (Claude Design). Sólo afecta cómo se MUESTRA la cantidad ya
// escalada — nunca lo que el docente cargó en `cantidadBase`.

const WEIGHT_UNITS: Record<string, number> = {
  g: 1, gramo: 1, gramos: 1,
  kg: 1000, kilo: 1000, kilos: 1000, kilogramo: 1000, kilogramos: 1000,
  oz: 28.3495, onza: 28.3495, onzas: 28.3495,
  lb: 453.592, lbs: 453.592, libra: 453.592, libras: 453.592,
};

const VOLUME_UNITS: Record<string, number> = {
  ml: 1, mililitro: 1, mililitros: 1,
  l: 1000, litro: 1000, litros: 1000,
  taza: 236.588, tazas: 236.588, cup: 236.588, cups: 236.588,
  cda: 14.7868, cdas: 14.7868, cucharada: 14.7868, cucharadas: 14.7868, tbsp: 14.7868,
  cdta: 4.92892, cdtas: 4.92892, cucharadita: 4.92892, cucharaditas: 4.92892, tsp: 4.92892,
};

const COMMON_UNITS = ["g", "kg", "ml", "l", "taza", "cda", "cdta", "oz", "lb", "unidad", "pizca", "diente", "rebanada"];

const FRACTIONS: [number, string][] = [
  [1 / 8, "⅛"], [1 / 4, "¼"], [1 / 3, "⅓"], [3 / 8, "⅜"], [1 / 2, "½"],
  [5 / 8, "⅝"], [2 / 3, "⅔"], [3 / 4, "¾"], [7 / 8, "⅞"],
];

function formatQty(n: number): string {
  if (!isFinite(n)) return "0";
  const rounded = Math.round(n * 100) / 100;
  const whole = Math.floor(rounded);
  const frac = rounded - whole;
  if (Math.abs(frac) < 0.03) return String(whole);
  for (const [value, symbol] of FRACTIONS) {
    if (Math.abs(frac - value) < 0.03) return (whole > 0 ? `${whole} ` : "") + symbol;
  }
  return String(Math.round(rounded * 100) / 100);
}

function convertUnit(qty: number, unidad: string, sistema: "metrico" | "imperial"): { qty: number; unidad: string } {
  const u = unidad.trim().toLowerCase().replace(/\.$/, "");
  if (WEIGHT_UNITS[u] !== undefined) {
    const gramos = qty * WEIGHT_UNITS[u];
    if (sistema === "metrico") return gramos >= 1000 ? { qty: gramos / 1000, unidad: "kg" } : { qty: gramos, unidad: "g" };
    const oz = gramos / 28.3495;
    return oz >= 16 ? { qty: oz / 16, unidad: "lb" } : { qty: oz, unidad: "oz" };
  }
  if (VOLUME_UNITS[u] !== undefined) {
    const ml = qty * VOLUME_UNITS[u];
    if (sistema === "metrico") return ml >= 1000 ? { qty: ml / 1000, unidad: "l" } : { qty: ml, unidad: "ml" };
    const tazas = ml / 236.588;
    if (tazas >= 0.24) return { qty: tazas, unidad: tazas >= 2 ? "tazas" : "taza" };
    const cdas = ml / 14.7868;
    if (cdas >= 1) return { qty: cdas, unidad: cdas >= 2 ? "cdas" : "cda" };
    return { qty: ml / 4.92892, unidad: ml / 4.92892 >= 2 ? "cdtas" : "cdta" };
  }
  return { qty, unidad };
}

// ── Alumno (readonly) ────────────────────────────────────────────────

type AlumnoProps = { config: RecetaConfig };

function EscaladorAlumno({ config }: AlumnoProps) {
  const { t } = useI18n();
  const [multiplier, setMultiplier] = useState(1);
  const [sistema, setSistema] = useState<"metrico" | "imperial">("metrico");
  const [pasosOpen, setPasosOpen] = useState(true);

  const porciones = config.porcionesBase > 0
    ? Math.round(config.porcionesBase * multiplier * 10) / 10
    : 0;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h3 className="text-xl font-bold text-[var(--c-text)]">{config.titulo}</h3>
        {config.descripcion && (
          <p className="text-sm text-[var(--c-muted)] mt-1">{config.descripcion}</p>
        )}
        {config.porcionesBase > 0 && (
          <span className="inline-block mt-2 text-xs bg-[var(--c-surface-3)] text-[var(--c-muted)] px-2.5 py-1 rounded-full">
            {t("theorySlideEditor.porcionesBase")}: {config.porcionesBase}
          </span>
        )}
      </div>

      {/* Multiplicador + sistema de unidades */}
      <div className="bg-[color-mix(in_srgb,var(--c-primary)_8%,transparent)] rounded-xl p-4 space-y-3">
        <div className="text-center">
          <span className="text-5xl font-black text-[var(--c-primary)]">×{multiplier}</span>
        </div>
        <input
          type="range"
          min={0.5}
          max={20}
          step={0.5}
          value={multiplier}
          aria-label={t("escaladorRecetas.multiplicadorDeLaReceta")}
          onChange={(e) => setMultiplier(Number(e.target.value))}
          className="w-full accent-[var(--c-primary)]"
        />
        <div className="flex gap-2 justify-center flex-wrap">
          {[0.5, 1, 2, 4].map((v) => (
            <button
              key={v}
              type="button"
              aria-pressed={multiplier === v}
              aria-label={`${t("escaladorRecetas.multiplicarPor")} ${v}`}
              onClick={() => setMultiplier(v)}
              className={`px-3 py-1 rounded-lg text-sm font-medium border transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] ${
                multiplier === v
                  ? "bg-[var(--c-primary)] text-[var(--c-accent-fg)] border-[var(--c-primary)]"
                  : "bg-[var(--c-surface)] text-[var(--c-primary)] border-[color-mix(in_srgb,var(--c-primary)_30%,transparent)] hover:bg-[color-mix(in_srgb,var(--c-primary)_12%,transparent)]"
              }`}
            >
              ×{v}
            </button>
          ))}
        </div>
        {config.porcionesBase > 0 && (
          <p className="text-center text-xs text-[var(--c-muted)]" aria-live="polite">= {porciones} porciones</p>
        )}
        <div className="flex items-center justify-center gap-2 pt-1">
          <span className="text-[11px] uppercase tracking-wide text-[var(--c-muted)]">{t("escaladorRecetas.unidades")}</span>
          <div className="flex gap-1">
            {(["metrico", "imperial"] as const).map((s) => (
              <button
                key={s}
                type="button"
                aria-pressed={sistema === s}
                onClick={() => setSistema(s)}
                className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] ${
                  sistema === s
                    ? "bg-[var(--c-primary)] text-[var(--c-accent-fg)] border-[var(--c-primary)]"
                    : "bg-transparent text-[var(--c-text)] border-[var(--c-border)] hover:bg-[var(--c-hover)]"
                }`}
              >
                {s === "metrico" ? t("escaladorRecetas.metrico") : t("escaladorRecetas.imperial")}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Ingredientes */}
      {config.ingredientes.length > 0 && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-[var(--c-muted)] mb-2">{t("escaladorRecetas.ingredientes")}</h4>
          <div className="grid grid-cols-2 gap-2">
            {config.ingredientes.map((ing) => {
              const converted = convertUnit(ing.cantidadBase * multiplier, ing.unidad, sistema);
              const scaled = formatQty(converted.qty);
              return (
                <div
                  key={ing.id}
                  className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-lg p-3"
                >
                  <p className="text-xs text-[var(--c-muted)]">{ing.nombre}</p>
                  <p className="text-2xl font-bold text-[var(--c-text)] leading-tight">
                    {scaled}
                    <span className="text-sm text-[var(--c-text-3)] ml-1">{converted.unidad}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Pasos — acordeón */}
      {config.pasos.length > 0 && (
        <div>
          <button
            type="button"
            onClick={() => setPasosOpen((o) => !o)}
            aria-expanded={pasosOpen}
            className="flex items-center justify-between w-full text-left text-sm font-semibold text-[var(--c-text)] py-2 border-b border-[var(--c-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded-sm"
          >
            <span>{t("escaladorRecetas.pasos")} ({config.pasos.length} {config.pasos.length === 1 ? t("comun.paso") : t("comun.pasos")})</span>
            <span className="text-[var(--c-text-3)] text-xs" aria-hidden="true">{pasosOpen ? "▲" : "▼"}</span>
          </button>
          {pasosOpen && (
            <ol className="mt-3 space-y-2">
              {config.pasos.map((paso, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[color-mix(in_srgb,var(--c-primary)_14%,transparent)] text-[var(--c-primary)] text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-sm text-[var(--c-text)] pt-0.5">{paso}</span>
                </li>
              ))}
            </ol>
          )}
        </div>
      )}
    </div>
  );
}

// ── Editor (docente) ─────────────────────────────────────────────────

type EditorProps = {
  config?: RecetaConfig;
  onChange: (config: RecetaConfig) => void;
};

function makeId() {
  return Math.random().toString(36).slice(2, 9);
}

function emptyConfig(): RecetaConfig {
  return {
    tool: "escalador-recetas",
    titulo: "",
    descripcion: "",
    porcionesBase: 1,
    ingredientes: [],
    pasos: [],
  };
}

const INPUT_CLS =
  "rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] focus:border-[var(--c-primary)]";

function tabCls(active: boolean) {
  return `px-3.5 py-2 text-sm border-b-2 transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded-t-sm -mb-px ${
    active
      ? "border-[var(--c-primary)] text-[var(--c-text)] font-semibold"
      : "border-transparent text-[var(--c-muted)] hover:text-[var(--c-text)]"
  }`;
}

// Parsea "2 tazas harina" / "1/2 cdta sal" / "3 huevos" en {cantidad, unidad, nombre}.
const UNIT_WORDS = new Set([
  ...Object.keys(WEIGHT_UNITS),
  ...Object.keys(VOLUME_UNITS),
  "unidad", "unidades", "pieza", "piezas", "diente", "dientes",
  "pizca", "pizcas", "rebanada", "rebanadas", "hoja", "hojas",
]);

function parseQtyToken(str: string): number {
  const s = str.trim();
  if (!s) return 0;
  let m = s.match(/^(\d+)\s+(\d+)\/(\d+)$/);
  if (m) return Number(m[1]) + Number(m[2]) / Number(m[3]);
  m = s.match(/^(\d+)\/(\d+)$/);
  if (m) return Number(m[1]) / Number(m[2]);
  m = s.match(/^(\d*\.?\d+)$/);
  if (m) return Number(m[1]);
  const n = parseFloat(s);
  return isNaN(n) ? 0 : n;
}

function parsePasteText(text: string): { nombre: string; cantidadBase: number; unidad: string }[] {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  return lines.map((line) => {
    const qtyMatch = line.match(/^(\d+\s+\d+\/\d+|\d+\/\d+|\d*\.?\d+)\s*/);
    let qtyStr = "1";
    let rest = line;
    if (qtyMatch) {
      qtyStr = qtyMatch[1].trim();
      rest = line.slice(qtyMatch[0].length).trim();
    }
    const words = rest.split(/\s+/);
    let unidad = "";
    if (words.length > 1 && UNIT_WORDS.has(words[0].toLowerCase().replace(/\.$/, ""))) {
      unidad = words[0];
      rest = words.slice(1).join(" ");
    }
    return { nombre: rest, cantidadBase: parseQtyToken(qtyStr), unidad };
  });
}

function EscaladorEditor({ config, onChange }: EditorProps) {
  const { t } = useI18n();
  const cfg = config ?? emptyConfig();
  const tituloId = useId();
  const descId = useId();
  const porcionesId = useId();
  const unidadesListId = useId();
  const [modo, setModo] = useState<"manual" | "pegar">("manual");
  const [pasteText, setPasteText] = useState("");

  const update = (partial: Partial<RecetaConfig>) => onChange({ ...cfg, ...partial });

  const addIngrediente = () =>
    update({
      ingredientes: [
        ...cfg.ingredientes,
        { id: makeId(), nombre: "", cantidadBase: 1, unidad: "" },
      ],
    });

  const removeIngrediente = (id: string) =>
    update({ ingredientes: cfg.ingredientes.filter((i) => i.id !== id) });

  const updateIngrediente = (id: string, fields: Partial<RecetaConfig["ingredientes"][0]>) =>
    update({
      ingredientes: cfg.ingredientes.map((i) => (i.id === id ? { ...i, ...fields } : i)),
    });

  const addPaso = () => update({ pasos: [...cfg.pasos, ""] });
  const removePaso = (idx: number) =>
    update({ pasos: cfg.pasos.filter((_, i) => i !== idx) });
  const updatePaso = (idx: number, value: string) =>
    update({ pasos: cfg.pasos.map((p, i) => (i === idx ? value : p)) });

  const convertirPegado = () => {
    const rows = parsePasteText(pasteText);
    if (rows.length === 0) return;
    update({ ingredientes: rows.map((r) => ({ id: makeId(), ...r })) });
    setPasteText("");
    setModo("manual");
  };

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4 space-y-3">
        <input
          id={tituloId}
          className="w-full text-xl font-bold bg-transparent border-none outline-none text-[var(--c-text)] placeholder:text-[var(--c-text-3)] placeholder:font-normal focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded-sm px-0"
          value={cfg.titulo}
          placeholder={t("escaladorRecetas.nombreDeLaReceta")}
          aria-label={t("comun.titulo")}
          onChange={(e) => update({ titulo: e.target.value })}
        />
        <input
          id={descId}
          className={`${INPUT_CLS} w-full`}
          value={cfg.descripcion ?? ""}
          placeholder={t("adminMaterias.descripcionBreve")}
          aria-label={t("comun.descripcionOpcional")}
          onChange={(e) => update({ descripcion: e.target.value })}
        />
        <div>
          <label htmlFor={porcionesId} className="block text-xs font-medium text-[var(--c-muted)] mb-1">{t("theorySlideEditor.porcionesBase")}</label>
          <input
            id={porcionesId}
            type="number"
            min={1}
            className={`${INPUT_CLS} w-32`}
            value={cfg.porcionesBase}
            onChange={(e) => update({ porcionesBase: Number(e.target.value) })}
          />
        </div>

        <div className="flex gap-1 border-b border-[var(--c-border)]">
          <button type="button" onClick={() => setModo("manual")} className={tabCls(modo === "manual")}>
            {t("escaladorRecetas.manual")}
          </button>
          <button type="button" onClick={() => setModo("pegar")} className={tabCls(modo === "pegar")}>
            {t("escaladorRecetas.pegarReceta")}
          </button>
        </div>

        {modo === "manual" ? (
          <div className="space-y-2">
            <div className="grid grid-cols-[72px_84px_1fr_28px] gap-2 text-[11px] uppercase tracking-wide text-[var(--c-muted)] px-0.5">
              <span>{t("escaladorRecetas.cant")}</span>
              <span>{t("escaladorRecetas.unidad")}</span>
              <span>{t("escaladorRecetas.ingrediente")}</span>
              <span aria-hidden="true" />
            </div>
            {cfg.ingredientes.map((ing, idx) => (
              <div key={ing.id} className="grid grid-cols-[72px_84px_1fr_28px] gap-2 items-center">
                <input
                  type="number"
                  min={0}
                  step={0.01}
                  className={INPUT_CLS}
                  aria-label={`${t("escaladorRecetas.cantidadDelIngrediente")} ${idx + 1}`}
                  value={ing.cantidadBase}
                  onChange={(e) => updateIngrediente(ing.id, { cantidadBase: Number(e.target.value) })}
                />
                <input
                  list={unidadesListId}
                  className={INPUT_CLS}
                  aria-label={`${t("escaladorRecetas.unidad")} ${idx + 1}`}
                  placeholder={t("escaladorRecetas.ejTaza")}
                  value={ing.unidad}
                  onChange={(e) => updateIngrediente(ing.id, { unidad: e.target.value })}
                />
                <input
                  className={INPUT_CLS}
                  aria-label={`${t("comun.nombre")} ${idx + 1}`}
                  placeholder={t("escaladorRecetas.ejHarina")}
                  value={ing.nombre}
                  onChange={(e) => updateIngrediente(ing.id, { nombre: e.target.value })}
                />
                <button
                  type="button"
                  className="text-[var(--c-danger)] hover:opacity-80 text-lg leading-none px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded-sm"
                  aria-label={`${t("escaladorRecetas.eliminarIngrediente")} ${ing.nombre || idx + 1}`}
                  onClick={() => removeIngrediente(ing.id)}
                >
                  ×
                </button>
              </div>
            ))}
            <datalist id={unidadesListId}>
              {COMMON_UNITS.map((u) => <option key={u} value={u} />)}
            </datalist>
            <button
              type="button"
              className="w-full text-center py-2 rounded-lg border border-dashed border-[var(--c-border-strong)] text-sm text-[var(--c-muted)] hover:text-[var(--c-text)] hover:bg-[var(--c-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
              onClick={addIngrediente}
            >
              {t("escaladorRecetas.agregarIngrediente")}
            </button>
            {cfg.ingredientes.length === 0 && (
              <p className="text-xs text-[var(--c-text-3)] italic">{t("escaladorRecetas.todaviaNoHayIngredientesUsa")}</p>
            )}
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-xs text-[var(--c-muted)]">{t("escaladorRecetas.pegaTuRecetaUnaLinea")}</p>
            <textarea
              rows={6}
              className={`${INPUT_CLS} w-full resize-y`}
              value={pasteText}
              placeholder={t("escaladorRecetas.placeholderPegado")}
              onChange={(e) => setPasteText(e.target.value)}
            />
            <button
              type="button"
              className="rounded-md bg-[var(--c-primary)] text-[var(--c-accent-fg)] px-4 py-2 text-sm font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
              onClick={convertirPegado}
              disabled={!pasteText.trim()}
            >
              {t("escaladorRecetas.convertirALista")}
            </button>
          </div>
        )}
      </div>

      <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-[var(--c-muted)]">{t("escaladorRecetas.pasos")}</span>
          <button
            type="button"
            className="text-xs text-[var(--c-primary)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded-sm px-1"
            onClick={addPaso}
          >{t("profesorAulaConfiguracion.agregar")}</button>
        </div>
        <div className="space-y-2">
          {cfg.pasos.map((paso, i) => (
            <div key={i} className="flex gap-2 items-start">
              <span className="text-xs text-[var(--c-text-3)] mt-2 w-5 text-right shrink-0" aria-hidden="true">{i + 1}.</span>
              <textarea
                className={`${INPUT_CLS} flex-1 resize-none`}
                rows={2}
                aria-label={`${t("escaladorRecetas.descripcionDelPaso")} ${i + 1}`}
                value={paso}
                placeholder={t("escaladorRecetas.descripcionDelPaso")}
                onChange={(e) => updatePaso(i, e.target.value)}
              />
              <button
                type="button"
                className="text-[var(--c-danger)] hover:opacity-80 text-xs mt-2 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded-sm"
                aria-label={`${t("escaladorRecetas.eliminarPaso")} ${i + 1}`}
                onClick={() => removePaso(i)}
              >
                ✕
              </button>
            </div>
          ))}
          {cfg.pasos.length === 0 && (
            <p className="text-xs text-[var(--c-text-3)] italic">{t("escaladorRecetas.todaviaNoHayPasosUsa")}</p>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Export ────────────────────────────────────────────────────────────

type Props =
  | { config: RecetaConfig; onChange?: never }
  | { config?: RecetaConfig; onChange: (config: RecetaConfig) => void };

export function EscaladorRecetas({ config, onChange }: Props) {
  if (onChange !== undefined) {
    return <EscaladorEditor config={config} onChange={onChange} />;
  }
  if (!config) return null;
  return <EscaladorAlumno config={config} />;
}
