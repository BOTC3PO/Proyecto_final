/**
 * "Niveles por aula con mapa de flujo" — AulaFlowMap.tsx.
 *
 * Cubre:
 *  (a) Renderiza un nodo por módulo, con su título.
 *  (b) Clickear un nodo disponible/completado dispara onSelectModulo.
 *  (c) Un nodo bloqueado no es clickeable (sin role="button", no dispara
 *      onSelectModulo al clickear).
 *  (d) Pasar el mouse sobre un nodo bloqueado muestra el tooltip con
 *      el nombre de la dependencia faltante.
 */
import { describe, expect, it, vi, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import AulaFlowMap from "../AulaFlowMap";
import type { MapaModuloLink, MapaModuloNodo } from "../../../services/clase-modulos";

afterEach(() => {
  cleanup();
});

const MODULOS: MapaModuloNodo[] = [
  {
    id: "mod-1",
    title: "Números enteros",
    subject: "Matemáticas",
    status: "completado",
    isLocked: false,
    missingDependencies: [],
  },
  {
    id: "mod-2",
    title: "Fracciones",
    subject: "Matemáticas",
    status: "no_iniciado",
    isLocked: true,
    missingDependencies: [{ id: "mod-1", title: "Números enteros" }],
  },
];

const LINKS: MapaModuloLink[] = [{ id: "mod-1->mod-2", sourceId: "mod-1", targetId: "mod-2" }];

describe("AulaFlowMap", () => {
  it("(a) renderiza un nodo por módulo con su título", () => {
    render(<AulaFlowMap modulos={MODULOS} links={LINKS} onSelectModulo={vi.fn()} />);
    expect(screen.getByText("Números enteros")).toBeInTheDocument();
    expect(screen.getByText("Fracciones")).toBeInTheDocument();
  });

  it("(b) clickear un nodo disponible dispara onSelectModulo", () => {
    const onSelectModulo = vi.fn();
    render(<AulaFlowMap modulos={MODULOS} links={LINKS} onSelectModulo={onSelectModulo} />);
    fireEvent.click(screen.getByTestId("mapa-nodo-mod-1"));
    expect(onSelectModulo).toHaveBeenCalledWith("mod-1");
  });

  it("(c) un nodo bloqueado no es clickeable", () => {
    const onSelectModulo = vi.fn();
    render(<AulaFlowMap modulos={MODULOS} links={LINKS} onSelectModulo={onSelectModulo} />);
    const nodoBloqueado = screen.getByTestId("mapa-nodo-mod-2");
    expect(nodoBloqueado).not.toHaveAttribute("role", "button");
    fireEvent.click(nodoBloqueado);
    expect(onSelectModulo).not.toHaveBeenCalled();
  });

  it("(d) hover sobre un nodo bloqueado muestra el tooltip con la dependencia faltante", () => {
    render(<AulaFlowMap modulos={MODULOS} links={LINKS} onSelectModulo={vi.fn()} />);
    expect(screen.getAllByText(/Números enteros/)).toHaveLength(1);
    fireEvent.mouseEnter(screen.getByTestId("mapa-nodo-mod-2").parentElement!);
    expect(screen.getAllByText(/Números enteros/)).toHaveLength(2);
  });
});
