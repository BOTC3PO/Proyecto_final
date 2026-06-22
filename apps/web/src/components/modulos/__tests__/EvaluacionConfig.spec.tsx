/**
 * F4-04 — Panel "Configuración de evaluación" (`EvaluacionConfig`).
 *
 * Cubre los criterios de la tarea:
 *  - Config de evaluación se persiste vía callbacks.
 *  - Módulo general (no evaluación) NO expone timer.
 *  - Defaults coherentes (política según modo, F3-04).
 *  - Tipo formal muestra timer, intentos, política, fullscreen.
 *  - Tipo practica/competencia ocultan los inputs gated.
 */

import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import EvaluacionConfig from "../EvaluacionConfig";
import { parseEvaluacionConfig } from "../../../domain/quiz/intentos";

describe("EvaluacionConfig — F4-04 gating por tipo", () => {
  it("type='practica' NO muestra timer, intentos, política ni fullscreen", () => {
    const config = parseEvaluacionConfig(null, "practica");
    render(<EvaluacionConfig tipo="practica" config={config} />);
    expect(screen.queryByTestId("config-timer")).not.toBeInTheDocument();
    expect(screen.queryByTestId("config-intentos")).not.toBeInTheDocument();
    expect(screen.queryByTestId("config-politica")).not.toBeInTheDocument();
    expect(screen.queryByTestId("config-fullscreen")).not.toBeInTheDocument();
    // Pero SÍ muestra ocultarPuntos (relevante para cualquier modo).
    expect(screen.getByTestId("config-ocultar-puntos")).toBeInTheDocument();
  });

  it("type='formal' muestra timer, intentos, política y fullscreen", () => {
    const config = parseEvaluacionConfig(null, "formal");
    render(<EvaluacionConfig tipo="formal" config={config} />);
    expect(screen.getByTestId("config-timer")).toBeInTheDocument();
    expect(screen.getByTestId("config-intentos")).toBeInTheDocument();
    expect(screen.getByTestId("config-politica")).toBeInTheDocument();
    expect(screen.getByTestId("config-fullscreen")).toBeInTheDocument();
    expect(screen.getByTestId("config-ocultar-puntos")).toBeInTheDocument();
  });

  it("type='competencia' muestra timer pero NO intentos, política ni fullscreen", () => {
    const config = parseEvaluacionConfig(null, "competencia");
    render(<EvaluacionConfig tipo="competencia" config={config} />);
    expect(screen.getByTestId("config-timer")).toBeInTheDocument();
    expect(screen.queryByTestId("config-intentos")).not.toBeInTheDocument();
    expect(screen.queryByTestId("config-politica")).not.toBeInTheDocument();
    expect(screen.queryByTestId("config-fullscreen")).not.toBeInTheDocument();
  });
});

describe("EvaluacionConfig — F4-04 defaults coherentes", () => {
  it("practica: timer null, política 'mejor', fullscreen false, intentos ilimitados", () => {
    const config = parseEvaluacionConfig(null, "practica");
    expect(config.timerSegundos).toBeNull();
    expect(config.politicaNota).toBe("mejor");
    expect(config.fullscreenOnStart).toBe(false);
    expect(config.maxIntentos).toBeNull();
  });

  it("formal: timer null (conservador), política 'ultima', fullscreen true, 3 intentos", () => {
    const config = parseEvaluacionConfig(null, "formal");
    expect(config.timerSegundos).toBeNull();
    expect(config.politicaNota).toBe("ultima");
    expect(config.fullscreenOnStart).toBe(true);
    expect(config.maxIntentos).toBe(3);
  });

  it("competencia: timer 600 (10 min, preserva pre-F4-04)", () => {
    const config = parseEvaluacionConfig(null, "competencia");
    expect(config.timerSegundos).toBe(600);
  });
});

describe("EvaluacionConfig — F4-04 callbacks", () => {
  it("cambiar el checkbox de 'sin timer' invoca onChangeTimerSegundos(null)", () => {
    const onChangeTimerSegundos = vi.fn();
    const config = parseEvaluacionConfig(null, "formal"); // fullscreen true, timer null
    render(
      <EvaluacionConfig
        tipo="formal"
        config={config}
        onChangeTimerSegundos={onChangeTimerSegundos}
      />
    );
    // El checkbox "sin timer" arranca checked (timer null).
    const checkSinTimer = screen.getByTestId("config-timer-illimitado") as HTMLInputElement;
    expect(checkSinTimer.checked).toBe(true);
    // Tildarlo (des-tildar) debería invocar con 600s (default razonable).
    fireEvent.click(checkSinTimer);
    expect(onChangeTimerSegundos).toHaveBeenCalledWith(600);
  });

  it("tipear minutos en el input de timer invoca onChangeTimerSegundos con segundos", () => {
    const onChangeTimerSegundos = vi.fn();
    const config = parseEvaluacionConfig(
      JSON.stringify({ timerSegundos: 600 }),
      "formal"
    );
    render(
      <EvaluacionConfig
        tipo="formal"
        config={config}
        onChangeTimerSegundos={onChangeTimerSegundos}
      />
    );
    const input = screen.getByTestId("config-timer-min") as HTMLInputElement;
    expect(input.value).toBe("10");
    fireEvent.change(input, { target: { value: "30" } });
    expect(onChangeTimerSegundos).toHaveBeenCalledWith(30 * 60);
  });

  it("tipear intentos invoca onChangeMaxIntentos(n)", () => {
    const onChangeMaxIntentos = vi.fn();
    const config = parseEvaluacionConfig(null, "formal");
    render(
      <EvaluacionConfig
        tipo="formal"
        config={config}
        onChangeMaxIntentos={onChangeMaxIntentos}
      />
    );
    const input = screen.getByTestId("config-intentos-input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "5" } });
    expect(onChangeMaxIntentos).toHaveBeenCalledWith(5);
  });

  it("cambiar la política invoca onChangePoliticaNota", () => {
    const onChangePoliticaNota = vi.fn();
    const config = parseEvaluacionConfig(null, "formal");
    render(
      <EvaluacionConfig
        tipo="formal"
        config={config}
        onChangePoliticaNota={onChangePoliticaNota}
      />
    );
    const select = screen.getByTestId("config-politica-select") as HTMLSelectElement;
    expect(select.value).toBe("ultima");
    fireEvent.change(select, { target: { value: "mejor" } });
    expect(onChangePoliticaNota).toHaveBeenCalledWith("mejor");
  });

  it("WO-3: cambiar la política de sorteo invoca onChangePoliticaSorteo", () => {
    const onChangePoliticaSorteo = vi.fn();
    const config = parseEvaluacionConfig(null, "formal");
    render(
      <EvaluacionConfig
        tipo="formal"
        config={config}
        onChangePoliticaSorteo={onChangePoliticaSorteo}
      />
    );
    const select = screen.getByTestId("config-sorteo-select") as HTMLSelectElement;
    expect(select.value).toBe("fijo_por_alumno");
    fireEvent.change(select, { target: { value: "por_intento" } });
    expect(onChangePoliticaSorteo).toHaveBeenCalledWith("por_intento");
  });

  it("WO-3: el sorteo se muestra en formal y competencia, no en práctica", () => {
    const { rerender } = render(
      <EvaluacionConfig tipo="formal" config={parseEvaluacionConfig(null, "formal")} />,
    );
    expect(screen.getByTestId("config-sorteo")).toBeInTheDocument();
    rerender(
      <EvaluacionConfig
        tipo="competencia"
        config={parseEvaluacionConfig(null, "competencia")}
      />,
    );
    expect(screen.getByTestId("config-sorteo")).toBeInTheDocument();
    rerender(
      <EvaluacionConfig
        tipo="practica"
        config={parseEvaluacionConfig(null, "practica")}
      />,
    );
    expect(screen.queryByTestId("config-sorteo")).not.toBeInTheDocument();
  });

  it("cambiar fullscreen invoca onChangeFullscreenOnStart", () => {
    const onChangeFullscreenOnStart = vi.fn();
    const config = parseEvaluacionConfig(null, "formal"); // fullscreen true
    render(
      <EvaluacionConfig
        tipo="formal"
        config={config}
        onChangeFullscreenOnStart={onChangeFullscreenOnStart}
      />
    );
    const checkbox = screen.getByTestId("config-fullscreen-checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
    fireEvent.click(checkbox);
    expect(onChangeFullscreenOnStart).toHaveBeenCalledWith(false);
  });

  it("cambiar ocultarPuntos invoca onChangeOcultarPuntos", () => {
    const onChangeOcultarPuntos = vi.fn();
    const config = parseEvaluacionConfig(null, "practica");
    render(
      <EvaluacionConfig
        tipo="practica"
        config={config}
        onChangeOcultarPuntos={onChangeOcultarPuntos}
      />
    );
    const checkbox = screen.getByTestId("config-ocultar-puntos-checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
    fireEvent.click(checkbox);
    expect(onChangeOcultarPuntos).toHaveBeenCalledWith(true);
  });
});

describe("EvaluacionConfig — F4-04 sin callbacks (read-only)", () => {
  it("sin onChangeTimerSegundos, el input de minutos está disabled", () => {
    const config = parseEvaluacionConfig(
      JSON.stringify({ timerSegundos: 600 }),
      "formal"
    );
    render(<EvaluacionConfig tipo="formal" config={config} />);
    const input = screen.getByTestId("config-timer-min") as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });

  it("sin callbacks, no se renderiza ninguna interacción (read-only total)", () => {
    const config = parseEvaluacionConfig(null, "formal");
    render(<EvaluacionConfig tipo="formal" config={config} />);
    // Los inputs están disabled pero visibles.
    expect(screen.getByTestId("config-timer-min")).toBeDisabled();
    expect(screen.getByTestId("config-intentos-input")).toBeDisabled();
    expect(screen.getByTestId("config-politica-select")).toBeDisabled();
    expect(screen.getByTestId("config-fullscreen-checkbox")).toBeDisabled();
    expect(screen.getByTestId("config-ocultar-puntos-checkbox")).toBeDisabled();
  });
});

describe("EvaluacionConfig — WO-9 modo de presentación", () => {
  it("muestra el selector de modoPresentacion en cualquier tipo", () => {
    // Se renderiza para TODOS los tipos (la decisión es del docente).
    for (const tipo of ["practica", "formal", "competencia"] as const) {
      const config = parseEvaluacionConfig(null, tipo);
      const { unmount } = render(<EvaluacionConfig tipo={tipo} config={config} />);
      expect(screen.getByTestId("config-modo-presentacion")).toBeInTheDocument();
      unmount();
    }
  });

  it("default del modoPresentacion es 'lista' (preserva comportamiento previo a WO-9)", () => {
    for (const tipo of ["practica", "formal", "competencia"] as const) {
      const config = parseEvaluacionConfig(null, tipo);
      const { unmount } = render(<EvaluacionConfig tipo={tipo} config={config} />);
      const select = screen.getByTestId("config-modo-presentacion-select") as HTMLSelectElement;
      expect(select.value).toBe("lista");
      unmount();
    }
  });

  it("el input de preguntasPorPagina SÓLO aparece cuando modoPresentacion === 'paginado'", () => {
    // Default: 'lista' → no se muestra el input.
    const cfgLista = parseEvaluacionConfig(null, "practica");
    const { unmount: u1 } = render(<EvaluacionConfig tipo="practica" config={cfgLista} />);
    expect(screen.queryByTestId("config-preguntas-por-pagina")).not.toBeInTheDocument();
    u1();

    // 'paginado' → se muestra.
    const cfgPag = parseEvaluacionConfig(
      JSON.stringify({ modoPresentacion: "paginado" }),
      "practica",
    );
    render(<EvaluacionConfig tipo="practica" config={cfgPag} />);
    expect(screen.getByTestId("config-preguntas-por-pagina")).toBeInTheDocument();
    expect(screen.getByTestId("config-preguntas-por-pagina-input")).toBeInTheDocument();
  });

  it("onChangeModoPresentacion se dispara al cambiar el select", () => {
    const onChange = vi.fn();
    const config = parseEvaluacionConfig(null, "practica");
    render(
      <EvaluacionConfig
        tipo="practica"
        config={config}
        onChangeModoPresentacion={onChange}
      />,
    );
    const select = screen.getByTestId("config-modo-presentacion-select") as HTMLSelectElement;
    fireEvent.change(select, { target: { value: "una_por_pantalla" } });
    expect(onChange).toHaveBeenCalledWith("una_por_pantalla");
  });

  it("onChangePreguntasPorPagina se dispara con enteros ≥ 1", () => {
    const onChange = vi.fn();
    const config = parseEvaluacionConfig(
      JSON.stringify({ modoPresentacion: "paginado" }),
      "practica",
    );
    render(
      <EvaluacionConfig
        tipo="practica"
        config={config}
        onChangePreguntasPorPagina={onChange}
      />,
    );
    const input = screen.getByTestId("config-preguntas-por-pagina-input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "7" } });
    expect(onChange).toHaveBeenCalledWith(7);
  });

  it("el input de tamaño de página es read-only sin callback", () => {
    const config = parseEvaluacionConfig(
      JSON.stringify({ modoPresentacion: "paginado" }),
      "practica",
    );
    render(<EvaluacionConfig tipo="practica" config={config} />);
    const input = screen.getByTestId("config-preguntas-por-pagina-input") as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });
});

