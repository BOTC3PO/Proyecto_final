import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { compile, lint, parse, validate } from "../../src/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const FIXTURE_DIR = resolve(__dirname, "../fixtures/valid");

function loadSrc(name: string): string {
  return readFileSync(resolve(FIXTURE_DIR, name), "utf8");
}

const EXECUTABLE_FIXTURES = [
  "16_1_mru.vblang",
  "16_3_cuadratica.vblang",
  "16_4_energia.vblang",
];

describe("sprint 5 e2e / parse → lint → compile → validate", () => {
  for (const f of EXECUTABLE_FIXTURES) {
    it(`${f}: pipeline completo`, () => {
      const src = loadSrc(f);
      const plantilla = parse(src);
      const report = lint(plantilla);
      // No esperamos errores fatales en estos fixtures.
      expect(report.errors).toHaveLength(0);

      const compiled = compile(plantilla);
      const valReport = validate(compiled, { iterations: 100 });
      expect(valReport.pass).toBe(true);
    });
  }
});
