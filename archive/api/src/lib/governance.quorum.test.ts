/**
 * PLAN-C §7 (gap #1 de docs/gobernanza-diseno.md): quórum mínimo de
 * participación (`GOV_MIN_QUORUM`) en `evaluateProposalOutcome`. Antes
 * de este fix, una propuesta con 1 voto a favor y 0 en contra se
 * aprobaba igual que una con 100, bajo MAJORITY.
 *
 * `ENV.GOV_MIN_QUORUM` se lee al importar `./env`. Import estático
 * hoistea por encima de cualquier asignación a `process.env` escrita
 * antes en el archivo — por eso acá se setea el env en `before()` y se
 * hace `import()` dinámico ahí, en vez de un import estático arriba.
 */
import assert from "node:assert/strict";
import { before, test } from "node:test";

let evaluateProposalOutcome: typeof import("./governance").evaluateProposalOutcome;

before(async () => {
  process.env.GOV_MIN_QUORUM = "3";
  process.env.GOV_GOVERNANCE_RULE = "MAJORITY";
  ({ evaluateProposalOutcome } = await import("./governance"));
});

test("con GOV_MIN_QUORUM=3, 1 voto a favor y 0 en contra NO alcanza (antes se aprobaba)", () => {
  const outcome = evaluateProposalOutcome({ level: "GOVERNANCE", approve: 1, reject: 0 });
  assert.equal(outcome.approved, false);
  assert.match(outcome.rule, /QUORUM_NOT_MET/);
});

test("con GOV_MIN_QUORUM=3, 3 votos totales (2 approve + 1 reject) sí evalúa la regla de nivel", () => {
  const outcome = evaluateProposalOutcome({ level: "GOVERNANCE", approve: 2, reject: 1 });
  assert.equal(outcome.approved, true);
  assert.match(outcome.rule, /MAJORITY/);
});

test("abstain cuenta para el quórum aunque no cuenta para la mayoría", () => {
  const outcome = evaluateProposalOutcome({ level: "GOVERNANCE", approve: 1, reject: 0, abstain: 2 });
  assert.equal(outcome.approved, true, "3 votos totales alcanzan el quórum de 3");
  assert.match(outcome.rule, /MAJORITY/);
});

test("nivel CONTENT también respeta el quórum mínimo", () => {
  const outcome = evaluateProposalOutcome({ level: "CONTENT", approve: 1, reject: 0 });
  assert.equal(outcome.approved, false);
  assert.match(outcome.rule, /QUORUM_NOT_MET/);
});
