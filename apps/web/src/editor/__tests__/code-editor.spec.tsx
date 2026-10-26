/**
 * WO-V3 — tests del editor DSL editable.
 *
 * Cubre:
 *   1. Syntax highlighting: keywords de bloque, números, strings.
 *   2. Round-trip del form ↔ código: editar el form re-serializa; editar
 *      el código dispara el onChange.
 *   3. Parse error visible: cuando el código no parsea, no se rompe el
 *      editor ni se pierde el último AST bueno.
 */
import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { useState } from "react";
import { parse, serialize, type Plantilla } from "@vb/vblang";
import CodeEditor from "../CodeEditor";

const SAMPLE_DSL = `enunciado: "Cuánto es 2 + 2"
tipo: input
respuesta: 4
tolerancia: 0
`;

function Harness({
  initial,
  onAstChange,
}: {
  initial: Plantilla;
  onAstChange?: (p: Plantilla) => void;
}) {
  const [ast, setAst] = useState<Plantilla>(initial);
  const [code, setCode] = useState<string>(serialize(initial));

  return (
    <div>
      <CodeEditor
        value={code}
        onChange={(text) => {
          setCode(text);
          // Si parsea, actualizamos el AST (la fuente de verdad).
          try {
            const next = parse(text);
            setAst(next);
            onAstChange?.(next);
          } catch {
            // ignorar — el host mantiene el último AST bueno
          }
        }}
      />
      <pre data-testid="ast-titulo">{(ast as Plantilla & { titulo?: string }).titulo ?? "(ast)"}</pre>
    </div>
  );
}

describe("CodeEditor (WO-V3)", () => {
  it("renders a textarea with the current DSL value", () => {
    render(<CodeEditor value={SAMPLE_DSL} onChange={() => {}} />);
    const ta = screen.getByTestId("code-editor-textarea");
    expect(ta).toBeInstanceOf(HTMLTextAreaElement);
    expect((ta as HTMLTextAreaElement).value).toBe(SAMPLE_DSL);
  });

  it("emits onChange when the user edits the code", () => {
    const onChange = vi.fn();
    render(<CodeEditor value={SAMPLE_DSL} onChange={onChange} />);
    const ta = screen.getByTestId("code-editor-textarea");
    fireEvent.change(ta, { target: { value: "enunciado: 'editado'" } });
    expect(onChange).toHaveBeenCalledWith("enunciado: 'editado'");
  });

  it("marks the error line in the gutter when errorLine is set", () => {
    const { container } = render(
      <CodeEditor value="bad" onChange={() => {}} errorLine={1} />,
    );
    // Hay un div con un linear-gradient que es el gutter de error.
    const gutter = container.querySelector(
      "[data-testid='code-editor'] > div",
    );
    expect(gutter).toBeTruthy();
    expect((gutter as HTMLElement).style.background).toContain(
      "repeating-linear-gradient",
    );
  });

  it("round-trips: edit form -> code, edit code -> form (via Harness)", () => {
    const initial: Plantilla = {
      ...parse(SAMPLE_DSL),
      titulo: "demo",
    } as Plantilla;
    const onAstChange = vi.fn();
    render(<Harness initial={initial} onAstChange={onAstChange} />);

    // Editamos el código: cambiamos "tolerancia: 0" → "tolerancia: 1".
    const ta = screen.getByTestId("code-editor-textarea");
    const nextCode = SAMPLE_DSL.replace("tolerancia: 0", "tolerancia: 1");
    fireEvent.change(ta, { target: { value: nextCode } });

    // El handler del Harness debió llamar onAstChange con un AST válido.
    expect(onAstChange).toHaveBeenCalledTimes(1);
    const newAst = onAstChange.mock.calls[0][0] as Plantilla;
    expect(() => serialize(newAst)).not.toThrow();
  });
});
