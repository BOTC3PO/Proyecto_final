/**
 * VB-B6 — `VariablesEditor` reemplaza a `VariablesCards` como
 * presentación. Mantiene la API similar (recibe `variables`,
 * `valores` y `onChange` para la mutación), pero cada card es
 * editable y el contenedor mantiene un "active index" para
 * renderizar la mini-toolbar "+Añadir" al costado de la card
 * activa.
 *
 * Botón global "+Añadir variable" al final de la lista: cuando
 * no hay card activa, agrega al final con tipo "random int".
 * Cuando hay una card activa, agrega justo después.
 *
 * Cards: cada una es un `<VariableCard>`; ver
 * `VariableCard.tsx` para el detalle de inputs.
 */

import { useState } from "react";
import type { Plantilla, VariableDecl } from "@vb/vblang";
import VariableCard from "./VariableCard";
import {
  addVariable,
  makeRandomIntExpr,
  removeVariable,
  type VariableKind,
} from "./plantillaFields";
import { DUMMY_LOC } from "./plantillaAst";

import { useI18n } from "../../i18n/I18nContext";
interface VariablesEditorProps {
  plantilla: Plantilla;
  variables: VariableDecl[];
  valores?: Record<string, unknown>;
  onChange: (next: Plantilla) => void;
}

const KIND_LABELS: Record<VariableKind, string> = {
  "random-int": "Aleatorio entero",
  "random-float": "Aleatorio decimal",
  list: "Lista",
  expr: "Expresión",
};

/**
 * Genera un nombre de variable único basado en un sufijo. Si ya
 * existe, lo incrementa (`a`, `a_2`, `a_3`...).
 */
function uniqueName(taken: Set<string>, base = "v"): string {
  if (!taken.has(base)) return base;
  let i = 2;
  while (taken.has(`${base}_${i}`)) i++;
  return `${base}_${i}`;
}

function makeDecl(nombre: string, kind: VariableKind): VariableDecl {
  const expr = (() => {
    switch (kind) {
      case "random-int":
        return makeRandomIntExpr(1, 10);
      case "random-float":
        return {
          kind: "fun_call" as const,
          name: "random_float",
          args: [
            { kind: "num" as const, value: 0, loc: DUMMY_LOC },
            { kind: "num" as const, value: 1, loc: DUMMY_LOC },
          ],
          loc: DUMMY_LOC,
        };
      case "list":
        return {
          kind: "array" as const,
          items: [
            { kind: "str" as const, value: "opcion_a", loc: DUMMY_LOC },
            { kind: "str" as const, value: "opcion_b", loc: DUMMY_LOC },
          ],
          loc: DUMMY_LOC,
        };
      case "expr":
      default:
        return { kind: "num" as const, value: 0, loc: DUMMY_LOC };
    }
  })();
  return { nombre, expr, loc: DUMMY_LOC };
}

export default function VariablesEditor({
  plantilla,
  variables,
  valores,
  onChange,
}: VariablesEditorProps) {
  const { t } = useI18n();
  // Active index: la última card clickeada. Default: la última
  // variable (para que el "+Añadir" se inserte al final por default).
  // Si no hay variables, queda en -1 (sin card activa).
  const [activeIndex, setActiveIndex] = useState<number>(
    variables.length > 0 ? variables.length - 1 : -1,
  );

  const handleAdd = (kind: VariableKind, atIndex: number) => {
    const taken = new Set(variables.map((d) => d.nombre));
    const nombre = uniqueName(taken, "v");
    const decl = makeDecl(nombre, kind);
    // Si la card activa está al final (atIndex === activeIndex ===
    // variables.length - 1) o si no hay card activa, agregamos
    // al final. Si la card activa está en el medio, insertamos
    // después (atIndex + 1).
    const insertAt = atIndex < 0
      ? undefined
      : atIndex >= variables.length - 1
        ? atIndex + 1
        : atIndex + 1;
    onChange(addVariable(plantilla, decl, insertAt));
  };

  const handleRemove = (index: number) => {
    onChange(removeVariable(plantilla, index));
    if (activeIndex >= variables.length - 1) {
      setActiveIndex(Math.max(-1, variables.length - 2));
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <ul className="vb-var-cards" aria-label={t("variablesEditor.variablesDeLaPlantilla")}>
        {variables.map((d, idx) => (
          <VariableCard
            key={`${idx}-${d.nombre}`}
            plantilla={plantilla}
            index={idx}
            decl={d}
            isActive={idx === activeIndex}
            valorPreview={valores ? valores[d.nombre] : undefined}
            onChange={onChange}
            onSelect={setActiveIndex}
            onRemove={handleRemove}
            onAddAfter={(i, k) => handleAdd(k, i)}
          />
        ))}
      </ul>
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="text-[10px] text-[var(--c-muted,#64748b)]">{t("variablesEditor.anadir")}</span>
        {(Object.keys(KIND_LABELS) as VariableKind[]).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => handleAdd(k, activeIndex)}
            data-testid={`vblang-var-add-${k}`}
            className="rounded border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] px-2 py-0.5 text-[10px] hover:border-[var(--c-primary,#3b82f6)] hover:text-[var(--c-primary,#3b82f6)]"
          >
            {KIND_LABELS[k]}
          </button>
        ))}
      </div>
    </div>
  );
}
