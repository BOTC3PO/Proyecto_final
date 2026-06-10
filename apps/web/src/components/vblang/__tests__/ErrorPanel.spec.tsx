/**
 * Tests de ErrorPanel.
 *
 * Tarea 13:
 *  - Cada error con posición ofrece un botón "Ir a línea N".
 *  - Sin posición, no aparece el botón.
 *  - Quick-fixes: para los codes conocidos, se ofrece un botón "Aplicar fix"
 *    que llama onApplyFix con el código nuevo.
 */

import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import ErrorPanel from "../ErrorPanel";
import type { LintReport } from "@vb/vblang";

const EMPTY_REPORT: LintReport = {
  issues: [],
  errors: [],
  warnings: [],
  variableTypes: {},
};

describe("ErrorPanel", () => {
  it("sin parseError ni report muestra el estado inicial", () => {
    render(<ErrorPanel />);
    expect(screen.getByText(/escribí código/i)).toBeInTheDocument();
  });

  it("con lintReport vacío muestra 'Sin errores'", () => {
    render(<ErrorPanel lintReport={EMPTY_REPORT} />);
    expect(screen.getByText(/Sin errores/i)).toBeInTheDocument();
  });

  it("con parseError lo muestra como primer issue", () => {
    render(
      <ErrorPanel
        parseError={{ message: "boom", line: 12, col: 3 }}
        lintReport={EMPTY_REPORT}
      />,
    );
    expect(screen.getByText(/boom/)).toBeInTheDocument();
  });

  it("click en el boton 'Ir a L7' dispara onGoToLocation con (7, 2)", () => {
    const onGo = vi.fn();
    render(
      <ErrorPanel
        parseError={{ message: "x", line: 7, col: 2 }}
        lintReport={EMPTY_REPORT}
        onGoToLocation={onGo}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: /Ir a línea 7/i }));
    expect(onGo).toHaveBeenCalledWith(7, 2);
  });

  it("error sin posicion NO muestra boton 'Ir a línea N'", () => {
    const onGo = vi.fn();
    const lintReport: LintReport = {
      issues: [],
      errors: [
        {
          severity: "error",
          code: "tipo-missing",
          message: "Falta el bloque `tipo:`",
        } as LintReport["errors"][number],
      ],
      warnings: [],
      variableTypes: {},
    };
    render(
      <ErrorPanel
        lintReport={lintReport}
        onGoToLocation={onGo}
      />,
    );
    expect(
      screen.queryByRole("button", { name: /Ir a línea/i }),
    ).toBeNull();
  });

  it("quick-fix de tipo-missing: boton llama onApplyFix con codigo que compila", () => {
    const onApply = vi.fn();
    const onGo = vi.fn();
    const currentCode = `variables:
  a: 1

enunciado: "x"
respuesta: a
`;
    const lintReport: LintReport = {
      issues: [],
      errors: [
        {
          severity: "warning",
          code: "tipo-missing",
          message: "Falta el bloque `tipo:` (el parser lo infiere; conviene declararlo)",
        } as LintReport["errors"][number],
      ],
      warnings: [],
      variableTypes: {},
    };
    render(
      <ErrorPanel
        lintReport={lintReport}
        onGoToLocation={onGo}
        currentCode={currentCode}
        onApplyFix={onApply}
      />,
    );
    const fixBtn = screen.getByRole("button", { name: /Agregar `tipo: input`/i });
    fireEvent.click(fixBtn);
    expect(onApply).toHaveBeenCalledTimes(1);
    const newCode = onApply.mock.calls[0][0] as string;
    expect(newCode).toMatch(/tipo: input\s*$/);
  });

  it("quick-fix de enunciado: el fix de un error PARSE agrega enunciado al final", () => {
    const onApply = vi.fn();
    const currentCode = `variables:
  a: 1

respuesta: a
tipo: input
`;
    render(
      <ErrorPanel
        parseError={{
          message:
            "Falta el bloque obligatorio `enunciado:` (o `enunciados:` con una lista de variantes)",
        }}
        lintReport={EMPTY_REPORT}
        currentCode={currentCode}
        onApplyFix={onApply}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: /Agregar enunciado/i }));
    const newCode = onApply.mock.calls[0][0] as string;
    expect(newCode).toMatch(/enunciado:\s*"\.\.\."\s*$/);
  });

  it("quick-fix de variable no declarada: agrega `  X: 0` a variables:", () => {
    const onApply = vi.fn();
    const currentCode = `variables:
  a: 1

enunciados:
  - "{a} y {b}"
tipo: input
`;
    const lintReport: LintReport = {
      issues: [],
      errors: [
        {
          severity: "warning",
          code: "enunciados-var-undef",
          message: 'enunciados[0]: variable "b" no declarada',
        } as LintReport["errors"][number],
      ],
      warnings: [],
      variableTypes: {},
    };
    render(
      <ErrorPanel
        lintReport={lintReport}
        currentCode={currentCode}
        onApplyFix={onApply}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: /Declarar `b`/i }));
    const newCode = onApply.mock.calls[0][0] as string;
    expect(newCode).toMatch(/variables:\n\s{2,}a: 1\n\s{2,}b: 0/);
  });

  it("sin currentCode no se ofrece ningun fix (aunque haya code conocido)", () => {
    const onApply = vi.fn();
    const lintReport: LintReport = {
      issues: [],
      errors: [
        {
          severity: "warning",
          code: "tipo-missing",
          message: "Falta el bloque `tipo:`",
        } as LintReport["errors"][number],
      ],
      warnings: [],
      variableTypes: {},
    };
    render(
      <ErrorPanel
        lintReport={lintReport}
        onApplyFix={onApply}
      />,
    );
    expect(
      screen.queryByRole("button", { name: /Agregar `tipo: input`/i }),
    ).toBeNull();
  });
});
