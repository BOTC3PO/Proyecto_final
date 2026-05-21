import { all, create, type MathJsInstance } from "mathjs";

/**
 * Instancia aislada de math.js con las funciones de meta-programación
 * desactivadas. El DSL nunca debería poder llamar `evaluate`, `parse`,
 * `import`, etc. — eso burlaría el sandbox.
 */
export function createIsolatedMath(): MathJsInstance {
  const math = create(all);
  math.import(
    {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      import: function (): unknown {
        throw new Error("Function import is disabled");
      },
      createUnit: function (): unknown {
        throw new Error("Function createUnit is disabled");
      },
      evaluate: function (): unknown {
        throw new Error("Function evaluate is disabled");
      },
      parse: function (): unknown {
        throw new Error("Function parse is disabled");
      },
      simplify: function (): unknown {
        throw new Error("Function simplify is disabled");
      },
      derivative: function (): unknown {
        throw new Error("Function derivative is disabled");
      },
    },
    { override: true },
  );
  return math;
}

export type IsolatedMath = MathJsInstance;
