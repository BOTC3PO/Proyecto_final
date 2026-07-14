/**
 * Wizard "Nueva plantilla".
 *
 * Modal que se muestra UNA sola vez al crear una plantilla nueva. Ofrece
 * arrancar desde un ejemplo (agrupado por tipo de pregunta) o desde un
 * template en blanco. El padre (PlantillaEditor) lo monta sólo en modo
 * creación y maneja la persistencia del "ya se mostró" con un useState local.
 *
 * Migrado al átomo ui/Modal (D10): focus-trap, ESC, scroll-lock y retorno
 * de foco vienen del átomo. El botón ✕ se mantiene para acceso directo.
 */

import { useMemo, type CSSProperties } from "react";
import { parse } from "@vb/vblang";
import { SPRINT_9B_EXAMPLES, type VblangExample } from "../../vblang/examples";
import { Modal } from "../../ui";

import { useI18n } from "../../i18n/I18nContext";
export interface ExampleGroup {
  tipo: string;
  label: string;
  examples: VblangExample[];
}

const TIPO_LABELS: Record<string, string> = {
  input: "Input numérico",
  mc: "Multiple choice",
  ordenar: "Ordenar",
  marcar_mapa: "Marcar en el mapa",
  analisis_sintactico: "Análisis sintáctico",
  identificar_palabras: "Identificar palabras",
};

function labelFor(tipo: string): string {
  return TIPO_LABELS[tipo] ?? tipo;
}

function extractTipo(codigoDsl: string): string | null {
  try {
    const p = parse(codigoDsl);
    const bloque = p.bloques.find((b) => b.kind === "tipo");
    if (!bloque || bloque.kind !== "tipo") return null;
    return bloque.valor;
  } catch {
    return null;
  }
}

function buildGroups(): ExampleGroup[] {
  const buckets = new Map<string, VblangExample[]>();
  for (const ex of SPRINT_9B_EXAMPLES) {
    const tipo = extractTipo(ex.codigoDsl) ?? "general";
    const list = buckets.get(tipo) ?? [];
    list.push(ex);
    buckets.set(tipo, list);
  }
  const groups: ExampleGroup[] = [];
  for (const [tipo, examples] of buckets) {
    groups.push({ tipo, label: labelFor(tipo), examples });
  }
  groups.sort((a, b) => {
    if (a.tipo === "input") return -1;
    if (b.tipo === "input") return 1;
    return a.tipo.localeCompare(b.tipo);
  });
  return groups;
}

export interface NuevaPlantillaWizardProps {
  onPick: (codigoDsl: string) => void;
  onBlank: () => void;
  onClose: () => void;
  examples?: readonly VblangExample[];
}

const sectionHeading: CSSProperties = {
  margin: "0 0 var(--space-2)",
  fontSize: "var(--text-xs)",
  fontWeight: "var(--fw-medium)",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: "var(--c-muted)",
};

const pickBtn: CSSProperties = {
  width: "100%",
  textAlign: "left",
  borderRadius: "var(--r-md)",
  border: "1px solid var(--c-border)",
  background: "var(--c-surface-3)",
  padding: "var(--space-3)",
  cursor: "pointer",
  fontFamily: "var(--font-sans)",
};

const blankBtn: CSSProperties = {
  ...pickBtn,
  borderStyle: "dashed",
};

export default function NuevaPlantillaWizard({
  onPick,
  onBlank,
  onClose,
  examples = SPRINT_9B_EXAMPLES,
}: NuevaPlantillaWizardProps) {
  const { t } = useI18n();
  const groups = useMemo(() => {
    if (examples === SPRINT_9B_EXAMPLES) return buildGroups();
    const buckets = new Map<string, VblangExample[]>();
    for (const ex of examples) {
      const tipo = extractTipo(ex.codigoDsl) ?? "general";
      const list = buckets.get(tipo) ?? [];
      list.push(ex);
      buckets.set(tipo, list);
    }
    const out: ExampleGroup[] = [];
    for (const [tipo, list] of buckets) {
      out.push({ tipo, label: labelFor(tipo), examples: list });
    }
    out.sort((a, b) => a.tipo.localeCompare(b.tipo));
    return out;
  }, [examples]);

  return (
    <Modal
      open={true}
      onClose={onClose}
      title={t("nuevaPlantillaWizard.empezaUnaNuevaPlantilla")}
      size="lg"
      data-testid="vblang-wizard"
      style={{ position: "relative" }}
    >
      {/* Close button */}
      <button
        type="button"
        aria-label={t("nuevaPlantillaWizard.cerrarWizard")}
        onClick={onClose}
        style={{
          position: "absolute",
          right: "var(--space-3)",
          top: "var(--space-3)",
          background: "none",
          border: "none",
          padding: "var(--space-1)",
          fontSize: "var(--text-sm)",
          color: "var(--c-muted)",
          cursor: "pointer",
          borderRadius: "var(--r-sm)",
        }}
      >
        ×
      </button>

      <p style={{
        margin: "0 0 var(--space-4)",
        fontSize: "var(--text-sm)",
        color: "var(--c-muted)",
      }}>{t("nuevaPlantillaWizard.elegiUnEjemploParaArrancar")}</p>

      <div
        style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}
        data-testid="vblang-wizard-groups"
      >
        {groups.map((g) => (
          <section key={g.tipo} data-testid={`vblang-wizard-group-${g.tipo}`}>
            <h3 style={sectionHeading}>
              {g.label}
            </h3>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2" style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {g.examples.map((ex) => (
                <li key={ex.id}>
                  <button
                    type="button"
                    onClick={() => onPick(ex.codigoDsl)}
                    data-testid={`vblang-wizard-pick-${ex.id}`}
                    style={pickBtn}
                  >
                    <span style={{
                      display: "block",
                      fontSize: "var(--text-sm)",
                      fontWeight: "var(--fw-medium)",
                      color: "var(--c-text)",
                    }}>
                      {ex.titulo}
                    </span>
                    <span style={{
                      display: "block",
                      marginTop: "2px",
                      fontSize: "var(--text-xs)",
                      color: "var(--c-muted)",
                    }}>
                      {ex.descripcion}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section>
          <h3 style={sectionHeading}>{t("nuevaPlantillaWizard.enBlanco")}</h3>
          <button
            type="button"
            onClick={onBlank}
            data-testid="vblang-wizard-blank"
            style={blankBtn}
          >
            <span style={{
              display: "block",
              fontWeight: "var(--fw-medium)",
              fontSize: "var(--text-sm)",
              color: "var(--c-text)",
            }}>{t("nuevaPlantillaWizard.empezarEnBlanco")}</span>
            <span style={{
              display: "block",
              marginTop: "2px",
              fontSize: "var(--text-xs)",
              color: "var(--c-muted)",
            }}>{t("nuevaPlantillaWizard.arrancaConUnTemplateMinimo")}</span>
          </button>
        </section>
      </div>
    </Modal>
  );
}
