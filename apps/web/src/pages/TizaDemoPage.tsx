/**
 * pages/TizaDemoPage.tsx — Ruta demo pública del sistema Tiza (WO-V1/V2/V3).
 *
 * Monta el `PlantillaEditorShell` con datos de muestra (un recibo de sueldo
 * oficial VBLang) y todo el chrome: breadcrumb, accent swatches, theme
 * toggle, vista del alumno, toggle Form/Código/Ambos, rail de preguntas
 * demo, y code drawer con syntax highlighting. Sin auth, sin persistencia.
 *
 * Útil para demos, screenshots, y para mostrar el sistema sin tener que
 * cargar un módulo + plantilla + variante.
 */
import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  parse,
  serialize,
  ParseError,
  lint,
  type LintReport,
  type Plantilla,
} from "@vb/vblang";
import PlantillaEditorShell, {
  type AccentKey,
  type RailItem,
  type ShellTheme,
} from "../editor/PlantillaEditorShell";

/** Muestra: recibo de sueldo (F6-04). Tiene variables, pasos, explicación. */
const SAMPLE_DSL = `metadata:
  materia: "economia"
  nivel: "intermedio"
  tags: ["economia_ar", "recibo_basico", "sueldo_bruto"]

variables:
  basico: random(6, 15) * 10000
  anios_antiguedad: random(1, 15)
  horas_extra: random(0, 8)
  adicional_antiguedad: redondear(basico * anios_antiguedad * 0.01, 0)
  valor_hora_extra: redondear(basico / 200 * 1.5, 0)
  pago_horas_extra: horas_extra * valor_hora_extra
  sueldo_bruto: basico + adicional_antiguedad + pago_horas_extra

respuesta: sueldo_bruto
unidad: "$"
tolerancia_abs: 1
tipo: input

enunciado: |
  Un trabajador tiene un sueldo básico de $ {basico}.
  Tiene {anios_antiguedad} años de antigüedad: por convenio se suma un 1% del básico
  por cada año de antigüedad. Además, este mes trabajó {horas_extra} horas extra, que
  se pagan con un recargo del 50% sobre el valor de la hora normal (la hora normal se
  calcula como básico / 200).
  ¿Cuál es el sueldo bruto (las "Remuneraciones" o "Haberes") de este trabajador?

pasos:
  - "Adicional por antigüedad = básico × años × 1% = {basico} × {anios_antiguedad} × 0,01 = $ {adicional_antiguedad}"
  - "Valor de la hora extra = (básico / 200) × 1,5 = $ {valor_hora_extra}"
  - "Pago de horas extra = {horas_extra} × {valor_hora_extra} = $ {pago_horas_extra}"
  - "Sueldo bruto = básico + antigüedad + horas extra = {basico} + {adicional_antiguedad} + {pago_horas_extra} = $ {sueldo_bruto}"

explicacion: |
  El sueldo bruto (también llamado "Remuneraciones" o "Haberes") se obtiene sumando al
  sueldo básico todos los conceptos remunerativos: la antigüedad (1% del básico por
  cada año trabajado) y las horas extra (que se pagan con un 50% de recargo sobre el
  valor de la hora normal). Bruto = {basico} + {adicional_antiguedad} + {pago_horas_extra} = $ {sueldo_bruto}.
`;

/** Items demo para el rail. No tienen efecto en el editor — sólo visual. */
const DEMO_RAIL: RailItem[] = [
  {
    id: "1",
    title: "Recibo de sueldo básico",
    kind: "Numérica · Economía",
    iconBg: "var(--c-accent-soft)",
    iconFg: "var(--c-accent)",
  },
  {
    id: "2",
    title: "Descuentos obligatorios",
    kind: "Numérica · Economía",
  },
  {
    id: "3",
    title: "Monotributo — categoría K",
    kind: "Numérica · Economía",
  },
  {
    id: "4",
    title: "Conversión de unidades (m/s → km/h)",
    kind: "Numérica · Física",
  },
];

export default function TizaDemoPage() {
  // Estado: AST actual (la fuente de verdad del formulario), texto DSL
  // (la fuente de verdad del code editor), y el último AST bueno.
  const initialAst = useMemo(() => parse(SAMPLE_DSL), []);
  const [ast, setAst] = useState<Plantilla>(initialAst);
  const [codeText, setCodeText] = useState<string>(SAMPLE_DSL);
  const lastGoodAst = useRef<Plantilla>(initialAst);

  // Acento y tema — controlados acá, se sincronizan con data-accent/data-theme.
  const [accent, setAccent] = useState<AccentKey>("azul");
  const [theme, setTheme] = useState<ShellTheme>("light");
  const [activeRailId, setActiveRailId] = useState<string>("1");
  const [savedHint, setSavedHint] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Parse error tipado (con line/col/message/suggestion).
  const parseError = useMemo<
    { message: string; line: number; col: number; suggestion?: string } | null
  >(() => {
    try {
      parse(codeText);
      return null;
    } catch (e) {
      if (e instanceof ParseError) {
        return {
          message: e.message,
          line: e.line,
          col: e.col,
          suggestion: e.suggestion,
        };
      }
      return {
        message: e instanceof Error ? e.message : String(e),
        line: 1,
        col: 1,
      };
    }
  }, [codeText]);

  const lintReport = useMemo<LintReport | null>(() => {
    try {
      return lint(ast);
    } catch {
      return null;
    }
  }, [ast]);

  /** Form → código (vía serialize). */
  const handlePlantillaChange = (next: Plantilla) => {
    setAst(next);
    lastGoodAst.current = next;
    setCodeText(serialize(next));
    setSavedHint(null);
  };

  /** Código → form (vía parse). Si no parsea, mantiene el último AST bueno. */
  const handleCodeChange = (text: string) => {
    setCodeText(text);
    try {
      const parsed = parse(text);
      setAst(parsed);
      lastGoodAst.current = parsed;
    } catch {
      // no mutamos el AST — parseError se muestra en el drawer
    }
  };

  const handleReset = () => {
    setAst(initialAst);
    setCodeText(SAMPLE_DSL);
    lastGoodAst.current = initialAst;
    setSavedHint("Plantilla restaurada al estado inicial.");
  };

  const handleCopyDsl = async () => {
    try {
      await navigator.clipboard.writeText(codeText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  const handleSave = () => {
    setSavedHint("Guardado (demo — no se persiste).");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--c-bg)",
        color: "var(--c-text)",
        display: "flex",
        flexDirection: "column",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* Header de la demo: branding, breadcrumb, acciones */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "14px 24px",
          background: "var(--c-surface)",
          borderBottom: "1px solid var(--c-border)",
          boxShadow: "var(--shadow)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            aria-hidden="true"
            style={{
              width: 28,
              height: 28,
              borderRadius: "var(--r-md)",
              background: "var(--c-accent)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--c-accent-fg)",
              fontSize: 15,
              fontWeight: 800,
            }}
          >
            ✎
          </span>
          <span style={{ fontSize: 17, fontWeight: 700 }}>Tiza</span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "var(--c-accent)",
              background: "var(--c-accent-soft)",
              padding: "3px 9px",
              borderRadius: 999,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Demo
          </span>
        </div>

        <span
          aria-hidden="true"
          style={{ width: 1, height: 22, background: "var(--c-border)" }}
        />

        <div
          style={{
            fontSize: 13,
            color: "var(--c-muted)",
            fontWeight: 500,
            minWidth: 0,
            flex: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          Vista previa del editor ·{" "}
          <span style={{ color: "var(--c-text)", fontWeight: 600 }}>
            Sistema Tiza
          </span>{" "}
          · sin persistencia
        </div>

        <button
          type="button"
          onClick={handleCopyDsl}
          aria-label="Copiar DSL al portapapeles"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            height: 32,
            padding: "0 12px",
            borderRadius: "var(--r-md)",
            border: "1px solid var(--c-border)",
            background: copied ? "var(--c-success-soft)" : "var(--c-surface-2)",
            color: copied ? "var(--c-success)" : "var(--c-text)",
            fontSize: 12.5,
            fontWeight: 600,
            cursor: "pointer",
            transition: "background 120ms, color 120ms",
          }}
        >
          {copied ? "✓ Copiado" : "Copiar DSL"}
        </button>

        <button
          type="button"
          onClick={handleReset}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            height: 32,
            padding: "0 12px",
            borderRadius: "var(--r-md)",
            border: "1px solid var(--c-border)",
            background: "var(--c-surface-2)",
            color: "var(--c-text)",
            fontSize: 12.5,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          ↺ Reset
        </button>

        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            height: 32,
            padding: "0 12px",
            borderRadius: "var(--r-md)",
            border: "1px solid var(--c-border)",
            background: "var(--c-surface-2)",
            color: "var(--c-text)",
            fontSize: 12.5,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          ← Inicio
        </Link>
      </header>

      {/* Banner explicativo */}
      <div
        style={{
          padding: "10px 24px",
          background: "var(--c-surface-2)",
          borderBottom: "1px solid var(--c-border)",
          fontSize: 12.5,
          color: "var(--c-muted)",
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          alignItems: "center",
        }}
      >
        <span>
          <strong style={{ color: "var(--c-text)" }}>Demo Tiza</strong> · layout
          3-panel + code drawer (WO-V1 / V2 / V3)
        </span>
        <span>
          Cambiá el acento (arriba a la derecha), el tema, o el modo Form/Código/Ambos.
          Editá el DSL — el formulario se sincroniza bidireccionalmente.
        </span>
        {savedHint ? (
          <span
            role="status"
            style={{
              marginLeft: "auto",
              color: "var(--c-text-3)",
              fontSize: 12,
            }}
          >
            {savedHint}
          </span>
        ) : null}
      </div>

      {/* El shell toma el resto del alto */}
      <div
        style={{
          flex: 1,
          minHeight: 0,
          padding: 18,
          display: "flex",
        }}
      >
        <div style={{ flex: 1, minHeight: 0 }}>
          <PlantillaEditorShell
            plantilla={ast}
            onChange={handlePlantillaChange}
            breadcrumb={["Economía", "1.º año", "Recibo de sueldo"]}
            rail={DEMO_RAIL}
            activeRailId={activeRailId}
            onSelectRail={setActiveRailId}
            onAddRailItem={() =>
              setSavedHint("'(demo) Aquí se agregaría una nueva pregunta al cuestionario.")
            }
            accent={accent}
            onAccentChange={setAccent}
            theme={theme}
            onThemeChange={setTheme}
            onSave={handleSave}
            savedHint={savedHint}
            codeText={codeText}
            onCodeChange={handleCodeChange}
            codeParseError={parseError}
            lintReport={lintReport}
            codeMode="split"
          />
        </div>
      </div>
    </div>
  );
}
