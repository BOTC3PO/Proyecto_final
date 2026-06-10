/**
 * Editor del banco de preguntas hand-authored (WO08, tarea 5; Tarea 20).
 *
 * Reusa la lista repetible accesible de WO06 (`AccessibleList`): una fila = una
 * pregunta, reordenable 100% por teclado (↑/↓) y con anuncios `aria-live`.
 * Produce el `Question[]` que alimenta `buildQuizTemplate` / `runBanco`.
 *
 * Soporta los tipos que el reproductor sabe renderizar a través del adapter
 * (`mapBancoQuestion`): opción múltiple (`mc`) y verdadero/falso (`tf`). Los
 * tipos sin equivalente (match / fill-blank multi-blank) no se ofrecen acá.
 *
 * Tarea 20: arriba del editor hay un input de busqueda (filtro visual,
 * case-insensitive sobre el enunciado) y un boton "Exportar JSON" que
 * descarga `banco-preguntas-{fecha}.json` con el shape que acepta el
 * import existente (`QuizImportJson`). El filtro es solo visual: el
 * export siempre incluye TODAS las preguntas.
 */
import { useId, useMemo, useState } from "react";
import { AccessibleList } from "../vblang/AccessibleList";
import type { MCQuestion, Question, TFQuestion } from "../../generadoresV2/basic/types";
import { buildBancoFileName, exportBancoToJson } from "./bancoExport";

type BancoPreguntasEditorProps = {
  questions: Question[];
  onChange: (questions: Question[]) => void;
};

let seq = 0;
const newId = () => `bq-${Date.now().toString(36)}-${(seq++).toString(36)}`;

const createMC = (): MCQuestion => ({
  id: newId(),
  type: "mc",
  prompt: "",
  options: [
    { text: "", correct: true, because: "" },
    { text: "", correct: false, because: "" },
  ],
  explanation: "",
  tags: [],
});

const createTF = (): TFQuestion => ({
  id: newId(),
  type: "tf",
  prompt: "",
  answer: true,
  becauseTrue: "",
  becauseFalse: "",
  tags: [],
});

/** Convierte una pregunta a otro tipo preservando el enunciado. */
function convertType(q: Question, type: "mc" | "tf"): Question {
  if (q.type === type) return q;
  if (type === "tf") return { ...createTF(), id: q.id, prompt: q.prompt };
  return { ...createMC(), id: q.id, prompt: q.prompt };
}

function McEditor({
  question,
  onChange,
}: {
  question: MCQuestion;
  onChange: (q: MCQuestion) => void;
}) {
  const groupName = useId();
  return (
    <AccessibleList
      items={question.options}
      onChange={(options) => onChange({ ...question, options })}
      createItem={() => ({ text: "", correct: false, because: "" })}
      label="Opciones — marcá la correcta"
      addLabel="Agregar opción"
      itemNoun="opción"
      minItems={2}
      renderItem={(opt, i, onItemChange) => (
        <div className="flex items-center gap-2">
          <input
            type="radio"
            name={groupName}
            checked={opt.correct}
            aria-label={`Marcar opción ${i + 1} como correcta`}
            onChange={() =>
              onChange({
                ...question,
                options: question.options.map((o, j) => ({
                  ...o,
                  correct: j === i,
                })),
              })
            }
          />
          <input
            className="flex-1 rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-sm"
            value={opt.text}
            placeholder={`Opción ${i + 1}`}
            aria-label={`Texto de la opción ${i + 1}`}
            onChange={(e) => onItemChange({ ...opt, text: e.target.value })}
          />
        </div>
      )}
    />
  );
}

function TfEditor({
  question,
  onChange,
}: {
  question: TFQuestion;
  onChange: (q: TFQuestion) => void;
}) {
  const groupName = useId();
  return (
    <fieldset className="m-0 border-0 p-0">
      <legend className="mb-1 text-xs font-medium text-[var(--c-text,#0f172a)]">
        Respuesta correcta
      </legend>
      <div className="flex gap-4 text-sm">
        {[
          { label: "Verdadero", value: true },
          { label: "Falso", value: false },
        ].map((o) => (
          <label key={o.label} className="flex items-center gap-1.5">
            <input
              type="radio"
              name={groupName}
              checked={question.answer === o.value}
              onChange={() => onChange({ ...question, answer: o.value })}
            />
            {o.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function BancoPreguntasEditor({
  questions,
  onChange,
}: BancoPreguntasEditorProps) {
  // Tarea 20: filtro visual por enunciado (case-insensitive, en memoria).
  const [search, setSearch] = useState("");
  const searchTrim = search.trim().toLowerCase();
  const matches = useMemo(
    () => (q: Question) =>
      searchTrim.length === 0 || (q.prompt ?? "").toLowerCase().includes(searchTrim),
    [searchTrim],
  );
  const visibleCount = useMemo(
    () => questions.filter(matches).length,
    [questions, matches],
  );
  const filterActive = searchTrim.length > 0;

  // Tarea 20: exportar todas las preguntas (no las filtradas) al JSON que
  // sabe leer `QuizImportJson`.
  const handleExportar = () => {
    const json = exportBancoToJson(questions);
    const blob = new Blob([json], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = buildBancoFileName();
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-2" data-testid="banco-preguntas-editor">
      <div className="flex flex-wrap items-center gap-2">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por enunciado..."
          aria-label="Buscar preguntas por enunciado"
          data-testid="banco-buscador"
          className="flex-1 min-w-[12rem] rounded border border-[var(--c-border,#cbd5e1)] bg-white px-2 py-1 text-sm"
        />
        <p
          className="text-xs text-[var(--c-muted,#64748b)]"
          aria-live="polite"
          data-testid="banco-contador"
        >
          {filterActive
            ? `${visibleCount} de ${questions.length} preguntas`
            : `${questions.length} pregunta${questions.length === 1 ? "" : "s"}`}
        </p>
        <button
          type="button"
          onClick={handleExportar}
          aria-label="Exportar todas las preguntas a JSON (formato compatible con el import)"
          data-testid="banco-exportar"
          className="rounded border border-[var(--c-border,#cbd5e1)] bg-white px-3 py-1 text-xs font-semibold text-[var(--c-text,#0f172a)] hover:bg-[var(--c-surface,#f1f5f9)]"
        >
          ⬇ Exportar JSON
        </button>
      </div>
      <AccessibleList
        items={questions}
        onChange={onChange}
        createItem={createMC}
        label="Preguntas del banco"
        addLabel="Agregar pregunta"
        itemNoun="pregunta"
        isItemHidden={(q) => !matches(q)}
        renderItem={(question, index, onItemChange) => (
          <div className="space-y-2 py-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[var(--c-text,#0f172a)]">
                Pregunta {index + 1}
              </span>
              <label className="ml-auto text-xs text-[var(--c-muted,#64748b)]">
                Tipo{" "}
                <select
                  className="rounded border border-[var(--c-border,#cbd5e1)] px-1 py-0.5 text-xs"
                  value={question.type === "tf" ? "tf" : "mc"}
                  aria-label={`Tipo de la pregunta ${index + 1}`}
                  onChange={(e) =>
                    onItemChange(convertType(question, e.target.value as "mc" | "tf"))
                  }
                >
                  <option value="mc">Opción múltiple</option>
                  <option value="tf">Verdadero/Falso</option>
                </select>
              </label>
            </div>

            <textarea
              className="w-full rounded border border-[var(--c-border,#cbd5e1)] px-2 py-1 text-sm"
              rows={2}
              placeholder="Enunciado de la pregunta"
              aria-label={`Enunciado de la pregunta ${index + 1}`}
              value={question.prompt}
              onChange={(e) => onItemChange({ ...question, prompt: e.target.value })}
            />

            {question.type === "mc" ? (
              <McEditor question={question} onChange={onItemChange} />
            ) : question.type === "tf" ? (
              <TfEditor question={question} onChange={onItemChange} />
            ) : (
              <p className="text-xs text-[var(--c-muted,#64748b)]">
                Tipo no editable acá ({question.type}).
              </p>
            )}
          </div>
        )}
      />
    </div>
  );
}
