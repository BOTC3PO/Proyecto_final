/**
 * Contenedor del property grid (columna derecha).
 *
 * El contenedor es TONTO: recibe el `element` seleccionado, lo busca en el
 * registro, monta el editor. Si no hay editor, monta un placeholder.
 *
 * Lo único que sabe es:
 *   - cómo invocar al registro (`resolveQuestionEditor` / etc.)
 *   - cómo pintar el header (qué elemento está activo)
 *
 * El resto vive en `editors.tsx`. Esto es la diferencia con el editor
 * actual (que tiene un `switch` por `field.kind`): acá CADA editor es un
 * componente que se compone desde afuera, no un caso dentro de un if.
 */
import { PropertiesPanel } from "../../../components/ui";
import { usePrototype, type ElementId } from "../state";
import {
  resolveAddOnEditor,
  resolveQuestionEditor,
  resolveVariableEditor,
} from "./registry";

function selectionLabel(
  element: ElementId,
  state: ReturnType<typeof usePrototype>["state"],
): string {
  if (element.kind === "question") return "Pregunta";
  if (element.kind === "variable") {
    const v = state.variables.find((x) => x.id === element.variableId);
    return v ? `{${v.name}}` : "Variable";
  }
  const a = state.addOns.find((x) => x.id === element.addOnId);
  return a ? a.summary : "Add-on";
}

export function PropertyGrid() {
  const { state } = usePrototype();
  const { selected } = state;

  let editor: React.ReactNode = null;
  if (selected.kind === "question") {
    const Editor = resolveQuestionEditor(state.question.type);
    editor = <Editor element={selected} />;
  } else if (selected.kind === "variable") {
    const Editor = resolveVariableEditor();
    editor = <Editor element={selected} />;
  } else {
    const a = state.addOns.find((x) => x.id === selected.addOnId);
    const kind = a?.kind ?? "hints";
    const Editor = resolveAddOnEditor(kind);
    editor = <Editor element={selected} />;
  }

  return (
    <PropertiesPanel
      title="Propiedades"
      headerActions={
        <span className="font-mono text-[10px] text-[var(--c-text-3)]">
          {selectionLabel(selected, state)}
        </span>
      }
      className="rounded-none border-l"
    >
      {editor}
    </PropertiesPanel>
  );
}
