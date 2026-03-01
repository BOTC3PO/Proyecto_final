import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VisualizerRenderer from "../../visualizadores/graficos/VisualizerRenderer";
import type {
  CivicRightsTreeSpec,
  CivicBudgetSpec,
} from "../../visualizadores/types";

type Tool = "rights" | "budget";

// ── Rights Tree ───────────────────────────────────────────────────────────────

type RightsCategory =
  | "civil"
  | "political"
  | "economic"
  | "social"
  | "cultural";

interface RightDef {
  id: string;
  label: string;
  description: string;
  article?: string;
}

const RIGHTS_DATA: Record<
  RightsCategory,
  { label: string; color: string; rights: RightDef[] }
> = {
  civil: {
    label: "Derechos Civiles",
    color: "#2563eb",
    rights: [
      { id: "cv1", label: "Derecho a la vida", description: "Toda persona tiene derecho a la vida.", article: "Art. 3" },
      { id: "cv2", label: "Libertad personal", description: "Nadie puede ser detenido arbitrariamente.", article: "Art. 9" },
      { id: "cv3", label: "Igualdad ante la ley", description: "Todos son iguales ante la ley.", article: "Art. 7" },
      { id: "cv4", label: "Privacidad", description: "Protección contra injerencias en la vida privada.", article: "Art. 12" },
      { id: "cv5", label: "Libre circulación", description: "Derecho a desplazarse libremente.", article: "Art. 13" },
      { id: "cv6", label: "Debido proceso", description: "Garantías procesales ante la justicia.", article: "Art. 10" },
      { id: "cv7", label: "Presunción de inocencia", description: "Toda persona es inocente hasta sentencia.", article: "Art. 11" },
    ],
  },
  political: {
    label: "Derechos Politicos",
    color: "#7c3aed",
    rights: [
      { id: "po1", label: "Sufragio universal", description: "Derecho a elegir y ser elegido.", article: "Art. 21" },
      { id: "po2", label: "Libertad de expresión", description: "Opinión y expresión sin restricciones.", article: "Art. 19" },
      { id: "po3", label: "Libertad de reunión", description: "Derecho a reunirse pacíficamente.", article: "Art. 20" },
      { id: "po4", label: "Libertad de asociación", description: "Derecho a formar organizaciones.", article: "Art. 20" },
      { id: "po5", label: "Participación pública", description: "Acceso a cargos y servicios públicos.", article: "Art. 21" },
      { id: "po6", label: "Petición y queja", description: "Dirigir peticiones a las autoridades.", article: "Art. 8" },
    ],
  },
  economic: {
    label: "Derechos Economicos",
    color: "#16a34a",
    rights: [
      { id: "ec1", label: "Derecho al trabajo", description: "Toda persona tiene derecho a trabajar.", article: "Art. 23" },
      { id: "ec2", label: "Salario justo", description: "Remuneración equitativa e igualitaria.", article: "Art. 23" },
      { id: "ec3", label: "Sindicación", description: "Derecho a fundar y afiliarse a sindicatos.", article: "Art. 23" },
      { id: "ec4", label: "Propiedad", description: "Derecho a la propiedad individual y colectiva.", article: "Art. 17" },
      { id: "ec5", label: "Libre empresa", description: "Libertad de ejercer actividades económicas.", article: "Art. 17" },
      { id: "ec6", label: "Seguridad en el empleo", description: "Protección contra el despido arbitrario.", article: "Art. 23" },
      { id: "ec7", label: "Condiciones laborales dignas", description: "Límites de jornada y condiciones saludables.", article: "Art. 24" },
    ],
  },
  social: {
    label: "Derechos Sociales",
    color: "#dc2626",
    rights: [
      { id: "so1", label: "Educación", description: "Derecho a la educación gratuita y obligatoria.", article: "Art. 26" },
      { id: "so2", label: "Salud", description: "Acceso a atención médica adecuada.", article: "Art. 25" },
      { id: "so3", label: "Vivienda", description: "Derecho a un nivel de vida adecuado.", article: "Art. 25" },
      { id: "so4", label: "Seguridad social", description: "Prestaciones en desempleo, enfermedad y vejez.", article: "Art. 22" },
      { id: "so5", label: "Alimentación", description: "Acceso a alimentos suficientes y nutritivos.", article: "Art. 25" },
      { id: "so6", label: "Protección familiar", description: "La familia tiene derecho a protección especial.", article: "Art. 16" },
      { id: "so7", label: "Protección de la infancia", description: "Derechos especiales para niñas y niños.", article: "Art. 25" },
      { id: "so8", label: "Descanso y ocio", description: "Derecho al descanso, tiempo libre y vacaciones.", article: "Art. 24" },
    ],
  },
  cultural: {
    label: "Derechos Culturales",
    color: "#d97706",
    rights: [
      { id: "cu1", label: "Vida cultural", description: "Participar en la vida cultural de la comunidad.", article: "Art. 27" },
      { id: "cu2", label: "Ciencia y arte", description: "Beneficiarse de las artes y del avance científico.", article: "Art. 27" },
      { id: "cu3", label: "Propiedad intelectual", description: "Protección de obras de autoría propia.", article: "Art. 27" },
      { id: "cu4", label: "Identidad cultural", description: "Preservar la propia identidad y tradiciones.", article: "Art. 15" },
      { id: "cu5", label: "Libertad de conciencia", description: "Libertad de pensamiento y religión.", article: "Art. 18" },
      { id: "cu6", label: "Educación intercultural", description: "Acceso a educación en la propia lengua.", article: "Art. 26" },
    ],
  },
};

const CATEGORY_OPTIONS: Array<{ value: RightsCategory; label: string }> = [
  { value: "civil", label: "Derechos Civiles" },
  { value: "political", label: "Derechos Políticos" },
  { value: "economic", label: "Derechos Económicos" },
  { value: "social", label: "Derechos Sociales" },
  { value: "cultural", label: "Derechos Culturales" },
];

// ── Budget ────────────────────────────────────────────────────────────────────

const BUDGET_COLORS: Record<string, string> = {
  education: "#2563eb",
  health: "#16a34a",
  infrastructure: "#d97706",
  security: "#dc2626",
  social: "#7c3aed",
};

const IDEAL_ALLOCATION: Record<string, number> = {
  education: 25,
  health: 20,
  infrastructure: 20,
  security: 15,
  social: 20,
};

const BUDGET_CATEGORIES = [
  { id: "education", label: "Educación" },
  { id: "health", label: "Salud" },
  { id: "infrastructure", label: "Infraestructura" },
  { id: "security", label: "Seguridad" },
  { id: "social", label: "Asistencia Social" },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function HerramientasCivica() {
  const [activeTool, setActiveTool] = useState<Tool>("rights");

  // Rights state
  const [rightsCategory, setRightsCategory] = useState<RightsCategory>("civil");

  // Budget state (each percentage; we enforce sum = 100)
  const [budgetAlloc, setBudgetAlloc] = useState<Record<string, number>>({
    education: 25,
    health: 20,
    infrastructure: 20,
    security: 15,
    social: 20,
  });

  const rightsSpec = useMemo<CivicRightsTreeSpec>(() => {
    const cat = RIGHTS_DATA[rightsCategory];
    return {
      kind: "civic-rights-tree",
      title: "Árbol de Derechos Fundamentales",
      description: `Clasificación de ${cat.label} según la Declaración Universal de los Derechos Humanos.`,
      root: {
        id: "root",
        label: "Derechos Humanos",
        description: "Declaración Universal de los Derechos Humanos, ONU 1948",
      },
      categories: [
        {
          id: rightsCategory,
          label: cat.label,
          color: cat.color,
          rights: cat.rights,
        },
      ],
    };
  }, [rightsCategory]);

  const budgetSpec = useMemo<CivicBudgetSpec>(() => {
    const total = Object.values(budgetAlloc).reduce((s, v) => s + v, 0);
    return {
      kind: "civic-budget",
      title: "Simulador de Presupuesto Público",
      description:
        "Distribuye los recursos públicos entre las distintas áreas del Estado y compara con la asignación recomendada.",
      totalBudget: total,
      unit: "%",
      currency: "USD",
      categories: BUDGET_CATEGORIES.map((cat) => ({
        id: cat.id,
        label: cat.label,
        allocated: budgetAlloc[cat.id] ?? 0,
        color: BUDGET_COLORS[cat.id],
      })),
      comparison: {
        label: "Asignación ideal",
        categories: BUDGET_CATEGORIES.map((cat) => ({
          id: cat.id,
          allocated: IDEAL_ALLOCATION[cat.id] ?? 0,
        })),
      },
    };
  }, [budgetAlloc]);

  // Adjust sliders so that total stays at 100
  function adjustBudget(changedId: string, newValue: number) {
    const others = BUDGET_CATEGORIES.filter((c) => c.id !== changedId);
    const currentOtherTotal = others.reduce(
      (s, c) => s + (budgetAlloc[c.id] ?? 0),
      0,
    );
    const remaining = 100 - newValue;

    const nextAlloc: Record<string, number> = { ...budgetAlloc, [changedId]: newValue };

    if (currentOtherTotal === 0) {
      const perOther = Math.floor(remaining / others.length);
      others.forEach((c, i) => {
        nextAlloc[c.id] =
          i === others.length - 1
            ? remaining - perOther * (others.length - 1)
            : perOther;
      });
    } else {
      const scale = remaining / currentOtherTotal;
      let distributed = 0;
      others.forEach((c, i) => {
        if (i === others.length - 1) {
          nextAlloc[c.id] = Math.max(0, remaining - distributed);
        } else {
          const v = Math.max(0, Math.round((budgetAlloc[c.id] ?? 0) * scale));
          nextAlloc[c.id] = v;
          distributed += v;
        }
      });
    }

    setBudgetAlloc(nextAlloc);
  }

  const budgetTotal = Object.values(budgetAlloc).reduce((s, v) => s + v, 0);

  return (
    <div className="space-y-6 px-6 py-8">
      <div className="flex items-center gap-3">
        <Link
          to="/herramientas"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          &larr; Volver a herramientas
        </Link>
      </div>

      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          Herramientas de Educación Cívica
        </h1>
        <p className="text-sm text-slate-600">
          Explora los derechos fundamentales y simula la asignación de presupuesto público.
        </p>
      </header>

      {/* Tool selector */}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setActiveTool("rights")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            activeTool === "rights"
              ? "bg-blue-600 text-white"
              : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          Árbol de derechos
        </button>
        <button
          type="button"
          onClick={() => setActiveTool("budget")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            activeTool === "budget"
              ? "bg-blue-600 text-white"
              : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          Presupuesto participativo
        </button>
      </div>

      {/* ── Rights Tree tool ── */}
      {activeTool === "rights" && (
        <>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">
              Clasificación de derechos
            </h2>
            <div className="mt-4">
              <label className="space-y-2 text-sm text-slate-600">
                <span className="font-medium text-slate-700">
                  Categoría de derechos
                </span>
                <select
                  value={rightsCategory}
                  onChange={(e) =>
                    setRightsCategory(e.target.value as RightsCategory)
                  }
                  className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-72"
                >
                  {CATEGORY_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-5">
              <p className="mb-3 text-sm font-medium text-slate-700">
                Derechos en esta categoría:
              </p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {RIGHTS_DATA[rightsCategory].rights.map((r) => (
                  <li
                    key={r.id}
                    className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm"
                  >
                    <span
                      className="mr-2 font-semibold"
                      style={{
                        color: RIGHTS_DATA[rightsCategory].color,
                      }}
                    >
                      {r.article}
                    </span>
                    <span className="font-medium text-slate-800">
                      {r.label}
                    </span>
                    <p className="mt-0.5 text-xs text-slate-500">
                      {r.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={rightsSpec} />
          </div>
        </>
      )}

      {/* ── Budget tool ── */}
      {activeTool === "budget" && (
        <>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="flex items-center justify-between text-lg font-semibold text-slate-800">
              <span>Asignación presupuestaria</span>
              <span
                className={`text-sm font-normal ${
                  budgetTotal === 100
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                Total: {budgetTotal}%
              </span>
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Ajusta cada área. El resto se redistribuye automáticamente para mantener el total en 100%.
            </p>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {BUDGET_CATEGORIES.map((cat) => (
                <div key={cat.id} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">
                      {cat.label}
                    </span>
                    <span
                      className="font-semibold"
                      style={{ color: BUDGET_COLORS[cat.id] }}
                    >
                      {budgetAlloc[cat.id]}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={budgetAlloc[cat.id] ?? 0}
                    onChange={(e) =>
                      adjustBudget(cat.id, Number(e.target.value))
                    }
                    className="w-full accent-blue-600"
                    style={
                      { accentColor: BUDGET_COLORS[cat.id] } as React.CSSProperties
                    }
                  />
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Asignado: {budgetAlloc[cat.id]}%</span>
                    <span>Ideal: {IDEAL_ALLOCATION[cat.id]}%</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={budgetSpec} />
          </div>
        </>
      )}
    </div>
  );
}
