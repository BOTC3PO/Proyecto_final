/**
 * Tests de ErrorPanel.
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
    expect(screen.getByText(/L12:C3/)).toBeInTheDocument();
  });

  it("click en location dispara onGoToLocation con line/col correctos", () => {
    const onGo = vi.fn();
    render(
      <ErrorPanel
        parseError={{ message: "x", line: 7, col: 2 }}
        lintReport={EMPTY_REPORT}
        onGoToLocation={onGo}
      />,
    );
    fireEvent.click(screen.getByText(/L7:C2/));
    expect(onGo).toHaveBeenCalledWith(7, 2);
  });
});
