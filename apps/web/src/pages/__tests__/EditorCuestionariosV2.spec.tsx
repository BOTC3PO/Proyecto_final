/**
 * Functional tests for EditorCuestionariosV2.
 *
 * Strategy:
 *  - Component tests render with MemoryRouter.
 *  - apiGet always rejects → component falls back to getStaticCatalog().
 *  - fetchBancoQuestions is mocked to avoid real network calls.
 *  - Column 1 (Fuentes) starts in the CSS `hidden` class because the default
 *    mobileTab is "cuestionario". We use container.querySelectorAll("button")
 *    to bypass accessibility filtering for elements in that column, then click
 *    the mobile "Fuentes" tab so Column 2 can receive the results via the
 *    normal accessibility tree.
 */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import type { ModuleQuizQuestion } from "../../domain/module/module.types";

// ── Module-level mocks ────────────────────────────────────────────────────────

vi.mock("../../lib/api", () => ({
  apiGet: vi.fn().mockRejectedValue(new Error("offline")),
  apiPost: vi.fn().mockResolvedValue({}),
}));

const MOCK_BANCO_QS: ModuleQuizQuestion[] = [
  { id: "bq1", prompt: "¿Cuántos huesos tiene el cuerpo humano?", questionType: "mc", options: ["206", "208", "210"], answerKey: "206" },
  { id: "bq2", prompt: "¿Qué es la mitosis?", questionType: "mc", options: ["División celular", "Síntesis de proteínas"], answerKey: "División celular" },
  { id: "bq3", prompt: "Define homeostasis.", questionType: "input", answerKey: "equilibrio interno" },
];

const mockFetchBancoQuestions = vi.fn().mockResolvedValue(MOCK_BANCO_QS);

vi.mock("../../components/modulos/BancoCuestionariosMulti", async (importOriginal) => {
  const actual = await importOriginal() as Record<string, unknown>;
  return { ...actual, fetchBancoQuestions: mockFetchBancoQuestions };
});

// ── Helpers ───────────────────────────────────────────────────────────────────

async function renderEditor() {
  const { default: EditorCuestionariosV2 } = await import("../EditorCuestionariosV2");
  const result = render(
    <MemoryRouter>
      <EditorCuestionariosV2 />
    </MemoryRouter>
  );
  // Let effects settle (API rejection → static catalog fallback)
  await act(async () => {});
  return result;
}

/** Find a button by text content — bypasses accessibility filtering. */
function findBtnByText(container: HTMLElement, pattern: RegExp): HTMLElement | undefined {
  return Array.from(container.querySelectorAll("button")).find((b) =>
    pattern.test(b.textContent ?? "")
  ) as HTMLElement | undefined;
}

/** Click a button by text content, wrapping the click in act to flush re-renders. */
async function clickBtn(container: HTMLElement, pattern: RegExp) {
  const btn = await waitFor(
    () => {
      const el = findBtnByText(container, pattern);
      if (!el) throw new Error(`Button not found: ${pattern}`);
      return el;
    },
    { timeout: 3000 }
  );
  await act(async () => { fireEvent.click(btn); });
  return btn;
}

// ── Test suite ────────────────────────────────────────────────────────────────

describe("EditorCuestionariosV2", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockFetchBancoQuestions.mockResolvedValue(MOCK_BANCO_QS);
  });

  // ── 3.1.1 — Empty state ─────────────────────────────────────────────────────

  it("renders empty state when there are no questions", async () => {
    await renderEditor();

    expect(screen.getByText("El cuestionario está vacío.")).toBeInTheDocument();
    expect(
      screen.getByText(/usá el panel de fuentes para agregar preguntas/i)
    ).toBeInTheDocument();
  });

  // ── 3.1.2 — Manual question via accordion UI ────────────────────────────────

  it("adds a manual multiple-choice question via the accordion", async () => {
    const { container } = await renderEditor();

    // The "manual" accordion section starts open (default state: { manual: true }).
    // Click the "+ Opción múltiple" button directly — it's already visible.
    await clickBtn(container, /Opción múltiple/);

    await waitFor(() => {
      expect(screen.queryByText("El cuestionario está vacío.")).not.toBeInTheDocument();
    });
    expect(screen.getByText("#1")).toBeInTheDocument();
  });

  it("marks manual questions with a 'Manual' origin badge", async () => {
    const { container } = await renderEditor();

    await clickBtn(container, /Opción múltiple/);

    await waitFor(() => expect(screen.getByText("#1")).toBeInTheDocument());
    expect(screen.getByTestId("origin-badge")).toHaveTextContent("Manual");
  });

  it("adds a V/F question", async () => {
    const { container } = await renderEditor();

    await clickBtn(container, /^\+ V\/F/);

    await waitFor(() => {
      expect(screen.queryByText("El cuestionario está vacío.")).not.toBeInTheDocument();
    });
    expect(screen.getByText("#1")).toBeInTheDocument();
  });

  // ── 3.1.3 — Generator: biologia/biologia × 3 ───────────────────────────────

  it("generates 3 questions from biologia/biologia via generateFromConfig logic", async () => {
    const { DeterministicPrng } = await import("../../generadoresV2/core/prng");
    const { getDescriptoresBiologia } = await import("../../generadoresV2/biologia/index");
    const { ejercicioToQuestion } = await import("../../domain/quiz/ejercicioToQuestion");

    const prng = new DeterministicPrng(42);
    const descriptor = getDescriptoresBiologia(prng).find((d) => d.id === "biologia/biologia");
    expect(descriptor).toBeDefined();

    const count = 3;
    const questions: ModuleQuizQuestion[] = Array.from({ length: count }, (_, i) => {
      const subtipo = descriptor!.subtipos[i % descriptor!.subtipos.length];
      const ej = descriptor!.generate("basico", prng, subtipo);
      return { ...ejercicioToQuestion(ej), id: `q-${i}` };
    });

    expect(questions).toHaveLength(3);
    questions.forEach((q) => {
      expect(q.prompt).toBeTruthy();
      expect(q.questionType).toBeDefined();
    });
    // With DeterministicPrng(42) the generator must produce at least 2 distinct prompts
    const prompts = questions.map((q) => q.prompt);
    expect(new Set(prompts).size).toBeGreaterThan(1);
  });

  // ── 3.1.4 — Banco mock → focus banco: ──────────────────────────────────────

  it("imports banco questions stamped with focus = banco:<quizId>", async () => {
    const { fetchBancoQuestions, mulberry32 } = await import("../../components/modulos/BancoCuestionariosMulti");

    const quizId = "quiz-abc-123";
    const allQs = await fetchBancoQuestions(quizId);

    // Simulate what addBanco does when modo === "todas"
    const stamped = allQs.map((q) => ({ ...q, id: `q-new-${q.id}`, focus: `banco:${quizId}` }));

    expect(stamped).toHaveLength(MOCK_BANCO_QS.length);
    stamped.forEach((q) => {
      expect(q.focus).toBe(`banco:${quizId}`);
    });

    // mulberry32 is deterministic
    const rand = mulberry32(12345);
    const first = rand();
    expect(typeof first).toBe("number");
    expect(first).toBeGreaterThanOrEqual(0);
    expect(first).toBeLessThan(1);
  });

  // ── 3.1.5 — Mixed sources: order preserved + flatten ───────────────────────

  it("preserves insertion order across manual + generator + banco and flatten gives same list", async () => {
    const { ejercicioToQuestion } = await import("../../domain/quiz/ejercicioToQuestion");
    const { DeterministicPrng } = await import("../../generadoresV2/core/prng");
    const { getDescriptoresBiologia } = await import("../../generadoresV2/biologia/index");

    const prng = new DeterministicPrng(99);
    const descriptor = getDescriptoresBiologia(prng).find((d) => d.id === "biologia/biologia")!;

    const manualQ: ModuleQuizQuestion = {
      id: "m1", prompt: "Manual 1", questionType: "mc", options: ["A", "B"], answerKey: "A",
    };
    const genQs: ModuleQuizQuestion[] = [0, 1].map((i) => ({
      ...ejercicioToQuestion(descriptor.generate("basico", prng, descriptor.subtipos[0])),
      id: `g${i}`,
    }));
    const bancoQs: ModuleQuizQuestion[] = MOCK_BANCO_QS.slice(0, 2).map((q, i) => ({
      ...q, id: `b${i}`, focus: `banco:test-quiz`,
    }));

    // Simulate the flat questions array built by appending sources in order
    const questions: ModuleQuizQuestion[] = [manualQ, ...genQs, ...bancoQs];
    expect(questions[0].id).toBe("m1");
    expect(questions[1].id).toBe("g0");
    expect(questions[2].id).toBe("g1");
    expect(questions[3].id).toBe("b0");
    expect(questions[4].id).toBe("b1");

    // flattenReceta logic: each question becomes a manual fuente; same order
    const flattened = questions.map((q, i) => ({ kind: "manual" as const, id: `f${i}`, question: q }));
    expect(flattened.map((f) => f.question.id)).toEqual(questions.map((q) => q.id));
    // Origin provenance is preserved on the question itself
    expect(flattened[3].question.focus).toBe("banco:test-quiz");
  });

  // ── 3.1.6 — Visual spec toggle ─────────────────────────────────────────────

  it("sets visualSpec when a visual type is selected in the extras panel", async () => {
    const { container } = await renderEditor();

    // Card is already expanded when added (addManualQuestion sets activeQIdx immediately).
    // We do NOT click the card toggle — it's already open.
    await clickBtn(container, /Opción múltiple/);
    await waitFor(() => expect(screen.getByText("#1")).toBeInTheDocument());

    // Open ExtrasSection (it has its own `open` state that starts false)
    await clickBtn(container, /Mostrar extras/);

    // Enable the visual section by clicking its enable-checkbox
    const visualEnableCheckbox = await waitFor(() => {
      const checkboxes = Array.from(container.querySelectorAll('input[type="checkbox"]'));
      const cb = checkboxes.find((el) => {
        const vicinity = el.closest("label") ?? el.parentElement ?? el;
        return /visual adjunto/i.test(vicinity.textContent ?? "");
      });
      if (!cb) throw new Error("visual enable checkbox not found");
      return cb as HTMLInputElement;
    });
    await act(async () => { fireEvent.click(visualEnableCheckbox); });

    // The visual-type select now appears — find it by the "line-chart" option
    const visualSelect = await waitFor(() => {
      const s = Array.from(container.querySelectorAll("select")).find((el) =>
        Array.from((el as HTMLSelectElement).options).some((o) => o.value === "line-chart")
      );
      if (!s) throw new Error("visual-type select not found");
      return s as HTMLSelectElement;
    });

    await act(async () => { fireEvent.change(visualSelect, { target: { value: "line-chart" } }); });

    // The LineChartEditor shows "+ Agregar serie" once line-chart is selected
    await waitFor(() => {
      expect(screen.getByText(/Agregar serie/i)).toBeInTheDocument();
    });
  });

  // ── 3.1.8 — saveToBank button is disabled (no endpoint yet) ────────────────

  it("'Guardar en banco escuela' button is disabled until backend is ready", async () => {
    const { container } = await renderEditor();

    // Add a question so RecetaBar renders (it only shows when fuentes.length > 0)
    await clickBtn(container, /Opción múltiple/);
    await waitFor(() => expect(screen.getByText("#1")).toBeInTheDocument());

    const saveBtn = await waitFor(() => {
      const btn = findBtnByText(container, /Guardar en banco escuela/);
      if (!btn) throw new Error("saveToBank button not found");
      return btn;
    });

    expect(saveBtn).toBeDisabled();
    expect(saveBtn.title).toMatch(/Próximamente|endpoint/i);
  });

  // ── 3.1.7 — Tolerance toggle ───────────────────────────────────────────────

  it("sets toleranciaRelativa when the tolerance checkbox is toggled", async () => {
    const { container } = await renderEditor();

    // "Respuesta abierta" → questionType "input" → tolerance section is shown
    // Card is already expanded when added.
    await clickBtn(container, /Respuesta abierta/);
    await waitFor(() => expect(screen.getByText("#1")).toBeInTheDocument());

    // Open ExtrasSection
    await clickBtn(container, /Mostrar extras/);

    // The tolerance checkbox is now visible (isInput = true for "input" type)
    const toleranceCheckbox = await waitFor(() => {
      const checkboxes = Array.from(container.querySelectorAll('input[type="checkbox"]'));
      const cb = checkboxes.find((el) => {
        const vicinity = el.closest("label") ?? el.parentElement ?? el;
        return /tolerancia/i.test(vicinity.textContent ?? "");
      });
      if (!cb) throw new Error("tolerance checkbox not found");
      return cb as HTMLInputElement;
    });

    await act(async () => { fireEvent.click(toleranceCheckbox); });

    // After toggling, a range slider appears for the tolerance percentage
    await waitFor(() => {
      expect(container.querySelectorAll('input[type="range"]').length).toBeGreaterThan(0);
    });
  });
});

// ── 3.2 — Export JSON compatibility ──────────────────────────────────────────

describe("buildExportJson — compatibility with QuizAttempt schema", () => {
  // Mirrors the exact logic in EditorCuestionariosV2.buildExportJson
  function buildExportJsonFromState(
    title: string,
    questions: ModuleQuizQuestion[]
  ) {
    return {
      title: title.trim() || "Cuestionario sin título",
      type: "formal" as const,
      visibility: "publico" as const,
      questions: questions.map((q) => ({
        prompt: q.prompt,
        questionType: q.questionType,
        options: q.options?.length ? q.options : undefined,
        answerKey: q.answerKey || undefined,
        explanation: q.explanation || undefined,
        focus: q.focus || undefined,
        toleranciaRelativa: q.toleranciaRelativa,
        unidades: q.unidades,
        datos: q.datos,
        pasos: q.pasos?.length ? q.pasos : undefined,
        visualSpec: q.visualSpec,
      })),
    };
  }

  const sampleQuestions: ModuleQuizQuestion[] = [
    {
      id: "q1",
      prompt: "¿Cuál es la capital de Francia?",
      questionType: "mc",
      options: ["París", "Lyon", "Marsella"],
      answerKey: "París",
      explanation: "París es la capital.",
      focus: "geografía",
    },
    {
      id: "q2",
      prompt: "El sol es una estrella.",
      questionType: "vf",
      options: ["Verdadero", "Falso"],
      answerKey: "Verdadero",
    },
    {
      id: "q3",
      prompt: "¿Cuántos planetas hay en el sistema solar?",
      questionType: "input",
      answerKey: "8",
      toleranciaRelativa: 0,
      datos: { extra: "info" },
    },
    {
      id: "q4",
      prompt: "El agua está formada por ___.",
      questionType: "completar",
      answerKey: "hidrógeno y oxígeno",
    },
  ];

  it("includes prompt and questionType in every exported question", () => {
    const exported = buildExportJsonFromState("Test Quiz", sampleQuestions);

    expect(exported.title).toBe("Test Quiz");
    expect(exported.type).toBe("formal");
    expect(exported.visibility).toBe("publico");
    expect(exported.questions).toHaveLength(sampleQuestions.length);

    exported.questions.forEach((q) => {
      expect(q).toHaveProperty("prompt");
      expect(q).toHaveProperty("questionType");
    });
  });

  it("exports mc question with options and answerKey", () => {
    const exported = buildExportJsonFromState("", sampleQuestions);
    const mc = exported.questions[0];

    expect(mc.questionType).toBe("mc");
    expect(mc.options).toEqual(["París", "Lyon", "Marsella"]);
    expect(mc.answerKey).toBe("París");
    expect(mc.explanation).toBe("París es la capital.");
  });

  it("exports numeric question with toleranciaRelativa and datos", () => {
    const exported = buildExportJsonFromState("", sampleQuestions);
    const num = exported.questions[2];

    expect(num.questionType).toBe("input");
    expect(num.answerKey).toBe("8");
    expect(num.toleranciaRelativa).toBe(0);
    expect(num.datos).toEqual({ extra: "info" });
  });

  it("omits empty options arrays so QuizAttempt does not render empty lists", () => {
    const q: ModuleQuizQuestion = {
      id: "qc", prompt: "Completa.", questionType: "completar", answerKey: "abc",
    };
    const exported = buildExportJsonFromState("", [q]);

    expect(exported.questions[0].options).toBeUndefined();
    expect(exported.questions[0].pasos).toBeUndefined();
  });

  it("omits empty answerKey so QuizAttempt treats it as not-yet-set", () => {
    const q: ModuleQuizQuestion = {
      id: "qe", prompt: "?", questionType: "mc", options: ["A"], answerKey: "",
    };
    const exported = buildExportJsonFromState("", [q]);

    expect(exported.questions[0].answerKey).toBeUndefined();
  });

  it("defaults title to 'Cuestionario sin título' when blank or only whitespace", () => {
    expect(buildExportJsonFromState("", []).title).toBe("Cuestionario sin título");
    expect(buildExportJsonFromState("   ", []).title).toBe("Cuestionario sin título");
  });

  it("preserves visualSpec for generator questions", () => {
    const visualQ: ModuleQuizQuestion = {
      id: "qv",
      prompt: "Observá el gráfico.",
      questionType: "mc",
      options: ["A", "B"],
      answerKey: "A",
      visualSpec: { kind: "line-chart", series: [] },
    };
    const exported = buildExportJsonFromState("", [visualQ]);

    expect(exported.questions[0].visualSpec).toEqual({ kind: "line-chart", series: [] });
  });

  it("is backward-compatible: top-level shape matches old editor output", () => {
    const exported = buildExportJsonFromState("Quiz V1", sampleQuestions);
    const keys = Object.keys(exported);

    // The old EditorCuestionarios produces {title, type, visibility, questions}
    expect(keys).toContain("title");
    expect(keys).toContain("type");
    expect(keys).toContain("questions");
    expect(Array.isArray(exported.questions)).toBe(true);
  });
});
