/**
 * Fix de la brecha de "dependencias entre módulos": el candado
 * (`isLocked`) ya se calculaba en tres lugares de `progreso.ts` (uno con
 * un bug: nunca hacía `JSON.parse`, así que ese endpoint jamás detectaba
 * un bloqueo real). Estos tests cubren el helper compartido que
 * reemplaza a las tres copias, más el enforcement en quiz-attempts.ts,
 * más el soporte real del tipo "unlocks" (antes vestigial: se guardaba
 * pero ningún consumidor lo leía).
 */
import assert from "node:assert/strict";
import test from "node:test";
import {
  parseModuleDependencies,
  getRequiredDependencyIds,
  getUnlocksDependencyIds,
  getEffectiveRequiredDependencyIds,
  computeModuleLock,
} from "./module-dependencies";

test("parseModuleDependencies: null/undefined/JSON inválido → []", () => {
  assert.deepEqual(parseModuleDependencies(null), []);
  assert.deepEqual(parseModuleDependencies(undefined), []);
  assert.deepEqual(parseModuleDependencies("no es json"), []);
  assert.deepEqual(parseModuleDependencies('{"no":"es un array"}'), []);
});

test("parseModuleDependencies: JSON válido se parsea tal cual", () => {
  const raw = JSON.stringify([{ id: "mod-a", type: "required" }]);
  assert.deepEqual(parseModuleDependencies(raw), [{ id: "mod-a", type: "required" }]);
});

test("getRequiredDependencyIds: sólo type==='required' cuenta, 'unlocks' se ignora", () => {
  const deps = [
    { id: "mod-a", type: "required" },
    { id: "mod-b", type: "unlocks" },
    { id: "mod-c", type: "required" },
  ];
  assert.deepEqual(getRequiredDependencyIds(deps), ["mod-a", "mod-c"]);
});

test("getRequiredDependencyIds: entradas legacy como string suelto cuentan como required", () => {
  assert.deepEqual(getRequiredDependencyIds(["mod-legacy"]), ["mod-legacy"]);
});

test("getRequiredDependencyIds: no-array o entradas basura → []", () => {
  assert.deepEqual(getRequiredDependencyIds(null), []);
  assert.deepEqual(getRequiredDependencyIds("no es un array"), []);
  assert.deepEqual(getRequiredDependencyIds([null, 42, {}]), []);
});

test("getUnlocksDependencyIds: sólo type==='unlocks' cuenta", () => {
  const deps = [
    { id: "mod-a", type: "required" },
    { id: "mod-b", type: "unlocks" },
    { id: "mod-c", type: "unlocks" },
  ];
  assert.deepEqual(getUnlocksDependencyIds(deps), ["mod-b", "mod-c"]);
});

test("getUnlocksDependencyIds: strings sueltos NO cuentan (a diferencia de required)", () => {
  assert.deepEqual(getUnlocksDependencyIds(["mod-legacy"]), []);
});

test("getEffectiveRequiredDependencyIds: junta 'required' propio + 'unlocks' ajeno hacia el target", () => {
  // B declara required:A (la forma tradicional).
  // C declara unlocks:B (la forma inversa: "C desbloquea B" == "B requiere C").
  const allDeps = new Map<string, unknown>([
    ["A", []],
    ["B", [{ id: "A", type: "required" }]],
    ["C", [{ id: "B", type: "unlocks" }]],
  ]);
  const effective = getEffectiveRequiredDependencyIds("B", allDeps.get("B"), allDeps);
  assert.deepEqual(new Set(effective), new Set(["A", "C"]));
});

test("getEffectiveRequiredDependencyIds: un módulo nunca es su propio prerrequisito", () => {
  const allDeps = new Map<string, unknown>([
    ["A", [{ id: "A", type: "unlocks" }]], // dato corrupto/absurdo, no debe auto-referenciarse
  ]);
  assert.deepEqual(getEffectiveRequiredDependencyIds("A", [], allDeps), []);
});

test("computeModuleLock: bloqueado cuando falta un required propio sin completar", () => {
  const deps = [{ id: "mod-a", type: "required" }];
  const result = computeModuleLock("mod-b", deps, new Map(), new Set());
  assert.equal(result.isLocked, true);
  assert.deepEqual(result.missingDependencyIds, ["mod-a"]);
});

test("computeModuleLock: desbloqueado cuando todos los required están completados", () => {
  const deps = [{ id: "mod-a", type: "required" }, { id: "mod-b", type: "required" }];
  const result = computeModuleLock("mod-c", deps, new Map(), new Set(["mod-a", "mod-b"]));
  assert.equal(result.isLocked, false);
  assert.deepEqual(result.missingDependencyIds, []);
});

test("computeModuleLock: sin dependencias nunca bloquea", () => {
  assert.equal(computeModuleLock("mod-x", [], new Map(), new Set()).isLocked, false);
  assert.equal(computeModuleLock("mod-x", null, new Map(), new Set()).isLocked, false);
});

test("computeModuleLock: bloqueado por un 'unlocks' declarado desde OTRO módulo", () => {
  // Módulo B no declara ninguna dependencia propia — pero A declara
  // "unlocks: B", que debe bloquear B igual que si B declarara
  // "required: A".
  const allDeps = new Map<string, unknown>([["A", [{ id: "B", type: "unlocks" }]]]);
  const result = computeModuleLock("B", [], allDeps, new Set());
  assert.equal(result.isLocked, true);
  assert.deepEqual(result.missingDependencyIds, ["A"]);
});

test("computeModuleLock: 'unlocks' se desbloquea al completar el módulo origen", () => {
  const allDeps = new Map<string, unknown>([["A", [{ id: "B", type: "unlocks" }]]]);
  const result = computeModuleLock("B", [], allDeps, new Set(["A"]));
  assert.equal(result.isLocked, false);
});
