/**
 * Editores del property grid.
 *
 * Cada editor es un componente "tonto" en su declaración: recibe un
 * `element` (ElementId) y se conecta al state vía `usePrototype()`. El
 * property grid no sabe nada de la forma de cada editor — solo los monta
 * desde el registro.
 *
 * Hay 3 categorías:
 *   - Editores de pregunta: uno por tipo desarrollado (5) + un fallback.
 *   - Editor de variable: uno solo, parametrizado por el `variableId`.
 *   - Editores de add-on: por ahora un fallback compartido.
 *
 * El registro los conecta (ver `registry.ts`).
 */
import { Input, Select, Textarea, Pill } from "../../../components/ui";
import { usePrototype, type AddOn, type ElementId, type ProtoVariable } from "../state";
import { PanelSection } from "../../../components/ui";

/* ============================================================
 * Helpers
 * ============================================================ */

function SectionHeader({
  eyebrow,
  title,
  tone = "neutral",
}: {
  eyebrow: string;
  title: string;
  tone?: "neutral" | "info" | "ok" | "warn";
}) {
  return (
    <div className="flex items-baseline justify-between gap-2">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--c-text-3)]">
          {eyebrow}
        </p>
        <h3 className="font-serif text-base font-semibold text-[var(--c-text)]">{title}</h3>
      </div>
      <Pill tone={tone === "ok" ? "ok" : tone === "info" ? "info" : tone === "warn" ? "warn" : "neutral"}>
        {tone === "ok" ? "activo" : tone === "info" ? "editable" : tone === "warn" ? "próximamente" : "editable"}
      </Pill>
    </div>
  );
}

function NotDevelopedHint({ feature }: { feature: string }) {
  return (
    <div
      className="rounded-[var(--r-md)] border border-dashed border-[var(--c-border-strong)] bg-[var(--c-surface-3)] p-3 text-xs text-[var(--c-text-3)]"
      role="status"
    >
      <p>
        <strong className="text-[var(--c-text)]">{feature}</strong>{" "}
        se renderiza como tarjeta visible en la grilla de tipos pero su editor
        dedicado entra en una iteración posterior del prototipo. Por ahora se
        muestra el "esqueleto" esencial.
      </p>
    </div>
  );
}

/* ============================================================
 * Editores de pregunta — esenciales
 * ============================================================ */

function EnunciadoControl({ value, onCommit, multiline = false }: { value: string; onCommit: (s: string) => void; multiline?: boolean }) {
  return multiline ? (
    <Textarea
      label="Enunciado"
      value={value}
      onChange={(e) => onCommit(e.target.value)}
      rows={3}
      hint="Podés interpolar variables con {nombre}."
    />
  ) : (
    <Input
      label="Enunciado"
      value={value}
      onChange={(e) => onCommit(e.target.value)}
      hint="Podés interpolar variables con {nombre}."
    />
  );
}

/** Pregunta numérica (tipo `input`). */
export function NumericEditor({ element }: { element: Extract<ElementId, { kind: "question" }> }) {
  void element;
  const { state, dispatch } = usePrototype();
  const { question } = state;
  return (
    <div className="space-y-4">
      <SectionHeader eyebrow="Pregunta · tipo" title="Numérica" tone="ok" />
      <PanelSection title="Esencial">
        <EnunciadoControl
          value={question.enunciado}
          onCommit={(v) => dispatch({ type: "setEnunciado", value: v })}
        />
        <Input
          label="Respuesta"
          value={question.respuesta ?? ""}
          onChange={(e) => dispatch({ type: "setRespuesta", value: e.target.value })}
          hint="Expresión del DSL. Mock — no se compila."
        />
        <Input
          label="Tolerancia (absoluta)"
          type="number"
          value={String(question.tolerancia ?? 0)}
          onChange={(e) => {
            const n = Number(e.target.value);
            dispatch({ type: "setTolerancia", value: Number.isFinite(n) ? n : 0 });
          }}
          hint="0 = exacto. Usá un entero o decimal chico."
        />
      </PanelSection>
      <PanelSection title="Añadir (opcional)">
        <p className="text-xs text-[var(--c-text-3)]">
          En el property grid "esencial" se ve lo mínimo. Todo lo opcional
          (pistas, explicación, unidad, dataset) se monta como bloque plegable
          desde la tarjeta central con el botón <code>+ Añadir</code>.
        </p>
      </PanelSection>
    </div>
  );
}

/** Opción múltiple (`mc`). */
export function MultipleChoiceEditor({ element }: { element: Extract<ElementId, { kind: "question" }> }) {
  void element;
  const { state, dispatch } = usePrototype();
  const { question } = state;
  const opciones = question.opciones ?? [];
  return (
    <div className="space-y-4">
      <SectionHeader eyebrow="Pregunta · tipo" title="Opción múltiple" tone="ok" />
      <PanelSection title="Esencial">
        <EnunciadoControl
          value={question.enunciado}
          onCommit={(v) => dispatch({ type: "setEnunciado", value: v })}
        />
      </PanelSection>
      <PanelSection title="Opciones">
        <ul className="space-y-2" role="list">
          {opciones.map((o, idx) => (
            <li key={o.id} className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="grid h-5 w-5 place-items-center rounded-full border border-[var(--c-border-strong)] text-[10px] font-mono text-[var(--c-text-3)]"
              >
                {idx + 1}
              </span>
              <Input
                aria-label={`Opción ${idx + 1}`}
                value={o.label}
                onChange={(e) => {
                  const next = opciones.slice();
                  next[idx] = { ...o, label: e.target.value };
                  dispatch({ type: "setOpciones", opciones: next });
                }}
                className="flex-1"
              />
              <label className="inline-flex shrink-0 items-center gap-1 text-xs text-[var(--c-text-3)]">
                <input
                  type="radio"
                  name="correcta"
                  checked={o.correct}
                  onChange={() => {
                    const next = opciones.map((x) => ({ ...x, correct: x.id === o.id }));
                    dispatch({ type: "setOpciones", opciones: next });
                  }}
                />
                correcta
              </label>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => {
            const next = [
              ...opciones,
              { id: `o${Date.now()}`, label: "Nueva opción", correct: false },
            ];
            dispatch({ type: "setOpciones", opciones: next });
          }}
          className="rounded-[var(--r-md)] border border-dashed border-[var(--c-border-strong)] px-2 py-1 text-xs text-[var(--c-text-3)] hover:border-[var(--c-primary)] hover:text-[var(--c-primary)]"
        >
          + Agregar opción
        </button>
      </PanelSection>
    </div>
  );
}

/** Verdadero / Falso. */
export function TrueFalseEditor({ element }: { element: Extract<ElementId, { kind: "question" }> }) {
  void element;
  const { state, dispatch } = usePrototype();
  const { question } = state;
  return (
    <div className="space-y-4">
      <SectionHeader eyebrow="Pregunta · tipo" title="Verdadero / Falso" tone="ok" />
      <PanelSection title="Esencial">
        <EnunciadoControl
          value={question.enunciado}
          onCommit={(v) => dispatch({ type: "setEnunciado", value: v })}
        />
        <Select
          label="Respuesta correcta"
          value={question.vfAnswer ? "v" : "f"}
          onChange={(e) => dispatch({ type: "setVfAnswer", value: e.target.value === "v" })}
        >
          <option value="v">Verdadero</option>
          <option value="f">Falso</option>
        </Select>
      </PanelSection>
    </div>
  );
}

/** Completar (huecos). */
export function CompleteEditor({ element }: { element: Extract<ElementId, { kind: "question" }> }) {
  void element;
  const { state, dispatch } = usePrototype();
  const { question } = state;
  const answers = question.completarAnswers ?? [];
  return (
    <div className="space-y-4">
      <SectionHeader eyebrow="Pregunta · tipo" title="Completar" tone="ok" />
      <PanelSection title="Esencial">
        <EnunciadoControl
          value={question.enunciado}
          onCommit={(v) => dispatch({ type: "setEnunciado", value: v })}
        />
      </PanelSection>
      <PanelSection title="Respuestas válidas">
        <ul className="space-y-2" role="list">
          {answers.map((a, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <Input
                aria-label={`Respuesta ${idx + 1}`}
                value={a}
                onChange={(e) => {
                  const next = answers.slice();
                  next[idx] = e.target.value;
                  dispatch({ type: "setRespuesta", value: next.join("|") });
                }}
                className="flex-1"
              />
            </li>
          ))}
        </ul>
        <p className="text-[10px] text-[var(--c-text-3)]">
          Mock: edición no se persiste. Muestra que el patrón "lista de
          respuestas válidas" es un PanelSection aparte.
        </p>
      </PanelSection>
    </div>
  );
}

/** Texto libre (abierta). */
export function OpenTextEditor({ element }: { element: Extract<ElementId, { kind: "question" }> }) {
  void element;
  const { state, dispatch } = usePrototype();
  return (
    <div className="space-y-4">
      <SectionHeader eyebrow="Pregunta · tipo" title="Texto libre" tone="ok" />
      <PanelSection title="Esencial">
        <EnunciadoControl
          value={state.question.enunciado}
          onCommit={(v) => dispatch({ type: "setEnunciado", value: v })}
          multiline
        />
        <p className="text-xs text-[var(--c-text-3)]">
          La corrección la hace el docente a mano (manual). No hay respuesta
          automática.
        </p>
      </PanelSection>
    </div>
  );
}

/** Fallback: tipos "futuro" (ordenar, mapa, sintaxis, identificar, emparejar, código, visual). */
export function FallbackQuestionEditor({ element }: { element: Extract<ElementId, { kind: "question" }> }) {
  void element;
  const { state, dispatch } = usePrototype();
  const { question } = state;
  return (
    <div className="space-y-4">
      <SectionHeader eyebrow="Pregunta · tipo" title={question.type} tone="warn" />
      <NotDevelopedHint feature={question.type} />
      <PanelSection title="Esencial (placeholder)">
        <EnunciadoControl
          value={question.enunciado}
          onCommit={(v) => dispatch({ type: "setEnunciado", value: v })}
        />
      </PanelSection>
    </div>
  );
}

/* ============================================================
 * Editor de variable
 * ============================================================ */

export function VariableEditor({ element }: { element: Extract<ElementId, { kind: "variable" }> }) {
  const { state, dispatch } = usePrototype();
  const variable = state.variables.find((v) => v.id === element.variableId);
  if (!variable) {
    return <p className="text-xs text-[var(--c-text-3)]">Variable no encontrada.</p>;
  }
  const { name, type, expression, currentValue, min, max } = variable;
  return (
    <div className="space-y-4">
      <SectionHeader eyebrow="Variable" title={`{${name}}`} tone="info" />
      <PanelSection title="Esencial">
        <Select
          label="Tipo"
          value={type}
          onChange={(e) =>
            dispatch({
              type: "setVariable",
              variableId: variable.id,
              patch: { type: e.target.value as ProtoVariable["type"] },
            })
          }
        >
          <option value="int">Entero (int)</option>
          <option value="float">Decimal (float)</option>
          <option value="list">Lista</option>
          <option value="rango">Rango</option>
        </Select>
        <Input
          label="Expresión"
          value={expression}
          onChange={(e) =>
            dispatch({
              type: "setVariable",
              variableId: variable.id,
              patch: { expression: e.target.value },
            })
          }
          hint="Mock. El editor real usaría DSL con autocompletado."
        />
        <div className="grid grid-cols-2 gap-2">
          <Input
            label="Mín"
            type="number"
            value={String(min ?? "")}
            onChange={(e) =>
              dispatch({
                type: "setVariable",
                variableId: variable.id,
                patch: { min: e.target.value === "" ? undefined : Number(e.target.value) },
              })
            }
          />
          <Input
            label="Máx"
            type="number"
            value={String(max ?? "")}
            onChange={(e) =>
              dispatch({
                type: "setVariable",
                variableId: variable.id,
                patch: { max: e.target.value === "" ? undefined : Number(e.target.value) },
              })
            }
          />
        </div>
      </PanelSection>
      <PanelSection title="Valor en vivo">
        <div className="flex items-baseline gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--c-text-3)]">
            ahora
          </span>
          <span className="font-mono text-2xl font-bold text-[var(--c-primary)]">
            {Array.isArray(currentValue) ? currentValue.join(", ") : String(currentValue)}
          </span>
        </div>
        <p className="text-[10px] text-[var(--c-text-3)]">
          El preview y el enunciado se resuelven con este valor. Cambia al
          regenerar.
        </p>
      </PanelSection>
    </div>
  );
}

/* ============================================================
 * Editor de add-on (fallback compartido)
 * ============================================================ */

function AddOnSummary({ addOn }: { addOn: AddOn }) {
  if (addOn.data.kind === "hints") {
    return (
      <ul className="space-y-1 text-xs text-[var(--c-text-3)]">
        {addOn.data.items.map((h, i) => (
          <li key={i} className="font-mono">· &ldquo;{h}&rdquo;</li>
        ))}
      </ul>
    );
  }
  if (addOn.data.kind === "explanation") {
    return <p className="text-xs text-[var(--c-text-3)]">{addOn.data.text || "—"}</p>;
  }
  return <p className="text-xs text-[var(--c-text-3)]">Datos del add-on en preview.</p>;
}

export function FallbackAddOnEditor({ element }: { element: Extract<ElementId, { kind: "addOn" }> }) {
  const { state, dispatch } = usePrototype();
  const addOn = state.addOns.find((a) => a.id === element.addOnId);
  void element;
  if (!addOn) {
    return <p className="text-xs text-[var(--c-text-3)]">Add-on no encontrado.</p>;
  }
  return (
    <div className="space-y-4">
      <SectionHeader eyebrow="Add-on" title={addOn.kind} tone="info" />
      <PanelSection title="Resumen">
        <AddOnSummary addOn={addOn} />
      </PanelSection>
      <PanelSection title="Acciones">
        <button
          type="button"
          onClick={() => dispatch({ type: "removeAddOn", addOnId: addOn.id })}
          className="rounded-[var(--r-md)] border border-[var(--c-border-strong)] px-2.5 py-1 text-xs text-[var(--c-danger)] hover:opacity-80"
        >
          Quitar add-on
        </button>
      </PanelSection>
    </div>
  );
}
