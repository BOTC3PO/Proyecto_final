import { describe, expect, it } from "vitest";
import { canMoveDown, canMoveUp, moveItemBy } from "../reorder";

describe("moveItemBy", () => {
  it("mueve un item de una posición a otra preservando el resto", () => {
    expect(moveItemBy(["a", "b", "c"], 0, 1)).toEqual(["b", "a", "c"]);
    expect(moveItemBy(["a", "b", "c"], 2, 0)).toEqual(["c", "a", "b"]);
  });

  it("devuelve un NUEVO array en una operación válida (no muta el original)", () => {
    const arr = ["a", "b", "c"];
    const out = moveItemBy(arr, 0, 1);
    expect(out).not.toBe(arr);
    expect(arr).toEqual(["a", "b", "c"]);
  });

  it("es un no-op si from === to (devuelve copia, no referencia)", () => {
    const arr = ["a", "b", "c"];
    const out = moveItemBy(arr, 1, 1);
    expect(out).toEqual(["a", "b", "c"]);
    expect(out).not.toBe(arr);
  });

  it("es un no-op si from está fuera de rango negativo", () => {
    const arr = ["a", "b", "c"];
    const out = moveItemBy(arr, -1, 0);
    expect(out).toEqual(["a", "b", "c"]);
    expect(out).not.toBe(arr);
  });

  it("es un no-op si from está fuera de rango positivo", () => {
    const arr = ["a", "b", "c"];
    const out = moveItemBy(arr, 3, 0);
    expect(out).toEqual(["a", "b", "c"]);
    expect(out).not.toBe(arr);
  });

  it("es un no-op si to está fuera de rango negativo", () => {
    const arr = ["a", "b", "c"];
    const out = moveItemBy(arr, 0, -1);
    expect(out).toEqual(["a", "b", "c"]);
    expect(out).not.toBe(arr);
  });

  it("es un no-op si to está fuera de rango positivo", () => {
    const arr = ["a", "b", "c"];
    const out = moveItemBy(arr, 0, 5);
    expect(out).toEqual(["a", "b", "c"]);
    expect(out).not.toBe(arr);
  });

  it("es un no-op si from o to no son enteros", () => {
    const arr = ["a", "b", "c"];
    expect(moveItemBy(arr, 0.5, 1)).toEqual(["a", "b", "c"]);
    expect(moveItemBy(arr, 0, 1.5)).toEqual(["a", "b", "c"]);
    expect(moveItemBy(arr, NaN, 1)).toEqual(["a", "b", "c"]);
  });

  it("maneja arrays de un solo elemento (sin movimiento posible)", () => {
    const arr = ["x"];
    expect(moveItemBy(arr, 0, 0)).toEqual(["x"]);
    expect(moveItemBy(arr, 0, 1)).toEqual(["x"]);
    expect(moveItemBy(arr, -1, 0)).toEqual(["x"]);
  });

  it("funciona con arrays vacíos (todo es no-op)", () => {
    const arr: string[] = [];
    expect(moveItemBy(arr, 0, 0)).toEqual([]);
    expect(moveItemBy(arr, -1, 1)).toEqual([]);
  });

  it("preserva el tipo genérico (no fuerza a string)", () => {
    const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const out = moveItemBy(arr, 0, 2);
    expect(out).toEqual([{ id: 2 }, { id: 3 }, { id: 1 }]);
  });
});

describe("canMoveUp", () => {
  it("false en el primer item (índice 0)", () => {
    expect(canMoveUp(["a", "b", "c"], 0)).toBe(false);
  });

  it("true en cualquier item que no sea el primero", () => {
    expect(canMoveUp(["a", "b", "c"], 1)).toBe(true);
    expect(canMoveUp(["a", "b", "c"], 2)).toBe(true);
  });

  it("false con índices fuera de rango (negativos o más allá del largo)", () => {
    expect(canMoveUp(["a", "b", "c"], -1)).toBe(false);
    expect(canMoveUp(["a", "b", "c"], 3)).toBe(false);
  });

  it("false con índices no enteros", () => {
    expect(canMoveUp(["a", "b", "c"], 0.5)).toBe(false);
    expect(canMoveUp(["a", "b", "c"], NaN)).toBe(false);
  });
});

describe("canMoveDown", () => {
  it("false en el último item", () => {
    expect(canMoveDown(["a", "b", "c"], 2)).toBe(false);
  });

  it("true en cualquier item que no sea el último", () => {
    expect(canMoveDown(["a", "b", "c"], 0)).toBe(true);
    expect(canMoveDown(["a", "b", "c"], 1)).toBe(true);
  });

  it("false con índices fuera de rango (negativos o más allá del largo)", () => {
    expect(canMoveDown(["a", "b", "c"], -1)).toBe(false);
    expect(canMoveDown(["a", "b", "c"], 3)).toBe(false);
  });

  it("false con índices no enteros", () => {
    expect(canMoveDown(["a", "b", "c"], 0.5)).toBe(false);
    expect(canMoveDown(["a", "b", "c"], NaN)).toBe(false);
  });

  it("con un solo elemento, ni subir ni bajar", () => {
    expect(canMoveDown(["x"], 0)).toBe(false);
  });
});
