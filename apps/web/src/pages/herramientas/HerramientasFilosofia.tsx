import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VisualizerRenderer from "../../visualizadores/graficos/VisualizerRenderer";
import type {
  PhilArgumentMapSpec,
  PhilDilemmaSpec,
} from "../../visualizadores/types";

type Tool = "argument-map" | "dilemma";

type ArgumentExample = "socrates" | "trolley" | "ontological";
type DilemmaExample = "trolley" | "prisoner" | "lying";

const ARGUMENT_MAPS: Record<ArgumentExample, PhilArgumentMapSpec> = {
  socrates: {
    kind: "phil-argument-map",
    title: "Argumento de Sócrates — La vida examinada",
    description:
      "El argumento socrático de que una vida sin reflexión no merece ser vivida.",
    claim: {
      id: "claim-1",
      text: "Una vida sin examen no merece ser vivida.",
    },
    nodes: [
      {
        id: "p1",
        text: "La virtud es el bien más elevado del alma.",
        type: "premise",
        parentId: undefined,
      },
      {
        id: "p2",
        text: "El conocimiento de uno mismo es indispensable para la virtud.",
        type: "premise",
        parentId: undefined,
      },
      {
        id: "p3",
        text: "Sin autoexamen, no hay conocimiento de uno mismo.",
        type: "premise",
        parentId: undefined,
      },
      {
        id: "c1",
        text: "Por tanto, sin examen no puede alcanzarse la virtud.",
        type: "conclusion",
        parentId: "p3",
      },
      {
        id: "obj1",
        text: "La felicidad no requiere virtud, solo placer.",
        type: "objection",
        parentId: "p1",
      },
      {
        id: "reb1",
        text: "El placer sin virtud lleva a la esclavitud de los deseos.",
        type: "rebuttal",
        parentId: "obj1",
      },
    ],
    relations: [
      { id: "r1", fromId: "p1", toId: "claim-1", kind: "supports" },
      { id: "r2", fromId: "p2", toId: "claim-1", kind: "supports" },
      { id: "r3", fromId: "p3", toId: "c1", kind: "supports" },
      { id: "r4", fromId: "c1", toId: "claim-1", kind: "supports" },
      { id: "r5", fromId: "obj1", toId: "p1", kind: "attacks" },
      { id: "r6", fromId: "reb1", toId: "obj1", kind: "attacks" },
    ],
  },
  trolley: {
    kind: "phil-argument-map",
    title: "Dilema del tranvía — análisis argumentativo",
    description:
      "Estructura argumental del clásico problema del tranvía descontrolado.",
    claim: {
      id: "claim-1",
      text: "Es moralmente permisible desviar el tranvía hacia una sola persona.",
    },
    nodes: [
      {
        id: "p1",
        text: "Salvar cinco vidas produce mayor bienestar total.",
        type: "premise",
        parentId: undefined,
      },
      {
        id: "p2",
        text: "Debemos maximizar el bienestar de todos los afectados.",
        type: "premise",
        parentId: undefined,
      },
      {
        id: "c1",
        text: "La acción que salva más vidas es moralmente correcta.",
        type: "conclusion",
        parentId: "p2",
      },
      {
        id: "obj1",
        text: "Usar a alguien como medio viola su dignidad intrínseca.",
        type: "objection",
        parentId: "claim-1",
      },
      {
        id: "obj2",
        text: "No hay diferencia moral entre matar y dejar morir.",
        type: "objection",
        parentId: "obj1",
      },
      {
        id: "reb1",
        text: "El cálculo de consecuencias es inevitable en la acción moral.",
        type: "rebuttal",
        parentId: "obj1",
      },
    ],
    relations: [
      { id: "r1", fromId: "p1", toId: "claim-1", kind: "supports" },
      { id: "r2", fromId: "p2", toId: "c1", kind: "supports" },
      { id: "r3", fromId: "c1", toId: "claim-1", kind: "supports" },
      { id: "r4", fromId: "obj1", toId: "claim-1", kind: "attacks" },
      { id: "r5", fromId: "obj2", toId: "obj1", kind: "supports" },
      { id: "r6", fromId: "reb1", toId: "obj1", kind: "attacks" },
    ],
  },
  ontological: {
    kind: "phil-argument-map",
    title: "Argumento ontológico de Anselmo",
    description:
      "Prueba a priori de la existencia de Dios a partir del concepto de ser perfecto.",
    claim: {
      id: "claim-1",
      text: "Dios existe necesariamente.",
    },
    nodes: [
      {
        id: "p1",
        text: "Dios es el ser del cual nada mayor puede concebirse.",
        type: "premise",
        parentId: undefined,
      },
      {
        id: "p2",
        text: "Un ser que existe en la realidad es mayor que uno que solo existe en el entendimiento.",
        type: "premise",
        parentId: undefined,
      },
      {
        id: "p3",
        text: "Si Dios solo existiera en el entendimiento, podría concebirse algo mayor.",
        type: "premise",
        parentId: "p2",
      },
      {
        id: "c1",
        text: "Eso contradiría la definición de Dios.",
        type: "conclusion",
        parentId: "p3",
      },
      {
        id: "obj1",
        text: "La existencia no es una propiedad (Kant).",
        type: "objection",
        parentId: "p2",
      },
      {
        id: "reb1",
        text: "La existencia necesaria sí es una perfección, distinta de la existencia contingente.",
        type: "rebuttal",
        parentId: "obj1",
      },
    ],
    relations: [
      { id: "r1", fromId: "p1", toId: "claim-1", kind: "supports" },
      { id: "r2", fromId: "p2", toId: "p3", kind: "supports" },
      { id: "r3", fromId: "p3", toId: "c1", kind: "supports" },
      { id: "r4", fromId: "c1", toId: "claim-1", kind: "supports" },
      { id: "r5", fromId: "obj1", toId: "p2", kind: "attacks" },
      { id: "r6", fromId: "reb1", toId: "obj1", kind: "attacks" },
    ],
  },
};

const DILEMMAS: Record<DilemmaExample, PhilDilemmaSpec> = {
  trolley: {
    kind: "phil-dilemma",
    title: "El dilema del tranvía",
    description:
      "Un tranvía descontrolado avanza hacia cinco personas atadas a la vía. Puedes desviar el tranvía a una vía secundaria donde hay solo una persona.",
    scenario:
      "Un tranvía sin frenos se dirige hacia cinco personas. Puedes accionar una palanca para desviarlo a una vía donde hay una sola persona. ¿Qué haces?",
    options: [
      {
        id: "utilitarian",
        label: "Desviar el tranvía",
        framework: "utilitarianism",
        analysis:
          "El utilitarismo ordena maximizar el bienestar total. Salvar cinco vidas produce mayor utilidad que salvar una.",
        consequences: [
          "Se salvan cinco personas",
          "Una persona muere como resultado directo de la acción",
          "El agente es causalmente responsable de esa muerte",
        ],
      },
      {
        id: "deontology",
        label: "No desviar el tranvía",
        framework: "deontology",
        analysis:
          "La ética deontológica prohíbe usar a una persona como medio para los fines de otros, sin importar las consecuencias.",
        consequences: [
          "Cinco personas mueren, pero el agente no las mató activamente",
          "La persona en la vía secundaria no es instrumentalizada",
          "Se respeta el imperativo categórico de no tratar a nadie solo como medio",
        ],
      },
      {
        id: "virtue",
        label: "Decidir según el carácter virtuoso",
        framework: "virtue",
        analysis:
          "La ética de la virtud pregunta qué haría una persona virtuosa. La valentía, la prudencia y la compasión guían la respuesta.",
        consequences: [
          "La decisión depende del carácter del agente",
          "Se busca el término medio entre la cobardía y la imprudencia",
          "La culpa residual es inevitable en dilemas genuinos",
        ],
      },
    ],
    activeOptionId: "utilitarian",
  },
  prisoner: {
    kind: "phil-dilemma",
    title: "El dilema del prisionero",
    description:
      "Dos sospechosos son interrogados por separado. Cada uno puede confesar o guardar silencio. El resultado depende de la elección conjunta.",
    scenario:
      "Dos prisioneros no pueden comunicarse. Si ambos guardan silencio: 1 año cada uno. Si uno confiesa y el otro no: libre vs. 10 años. Si ambos confiesan: 5 años cada uno.",
    options: [
      {
        id: "utilitarian",
        label: "Cooperar (guardar silencio)",
        framework: "utilitarianism",
        analysis:
          "El bienestar colectivo se maximiza cuando ambos cooperan: 2 años en total vs. 10 años si ambos delatan.",
        consequences: [
          "Si el otro también coopera: 1 año cada uno",
          "Si el otro defecciona: 10 años para ti",
          "El equilibrio cooperativo requiere confianza mutua",
        ],
      },
      {
        id: "deontology",
        label: "Cooperar por principio",
        framework: "deontology",
        analysis:
          "La máxima 'delata a quien confía en ti' no puede universalizarse sin contradicción. La lealtad es un deber.",
        consequences: [
          "La acción es correcta independientemente del resultado",
          "Se actúa conforme al deber de fidelidad",
          "El riesgo personal es una consecuencia aceptable del obrar bien",
        ],
      },
      {
        id: "contractualism",
        label: "Negociar un acuerdo previo",
        framework: "contractualism",
        analysis:
          "El contractualismo sugiere que agentes racionales acordarían cooperar si pudieran negociar, ya que ambos se benefician del silencio mutuo.",
        consequences: [
          "Un acuerdo previo resuelve el dilema",
          "La racionalidad colectiva supera a la individual",
          "Se requiere confianza en que el otro honrará el pacto",
        ],
      },
    ],
    activeOptionId: "utilitarian",
  },
  lying: {
    kind: "phil-dilemma",
    title: "¿Está mal mentir para proteger a alguien?",
    description:
      "Un asesino busca a tu amigo. Tú sabes dónde está. ¿Debes decir la verdad?",
    scenario:
      "Un individuo armado te pregunta dónde está tu amigo, a quien quiere dañar. Sabes exactamente dónde está. ¿Mientes para protegerlo?",
    options: [
      {
        id: "utilitarian",
        label: "Mentir para proteger",
        framework: "utilitarianism",
        analysis:
          "Las consecuencias importan más que la norma. Mentir salva una vida inocente, lo que produce mayor bienestar.",
        consequences: [
          "El amigo queda a salvo",
          "Se viola la norma de honestidad",
          "El daño evitado supera el costo de la mentira",
        ],
      },
      {
        id: "deontology",
        label: "Decir la verdad siempre",
        framework: "deontology",
        analysis:
          "Kant sostenía que mentir siempre es incorrecto, incluso al asesino. La mentira corrompe la confianza en el lenguaje.",
        consequences: [
          "Se respeta el deber absoluto de honestidad",
          "El asesino carga con la responsabilidad moral del daño",
          "El agente mantiene su integridad moral",
        ],
      },
      {
        id: "virtue",
        label: "Usar la prudencia situacional",
        framework: "virtue",
        analysis:
          "La virtud de la prudencia permite adaptar la respuesta al contexto. Proteger al inocente puede ser más virtuoso que la verdad literal.",
        consequences: [
          "La lealtad y la compasión guían la acción",
          "La honestidad no equivale a la ingenuidad",
          "El agente virtuoso distingue veracidad de información dañina",
        ],
      },
    ],
    activeOptionId: "utilitarian",
  },
};

export default function HerramientasFilosofia() {
  const [activeTool, setActiveTool] = useState<Tool>("argument-map");
  const [selectedArgument, setSelectedArgument] =
    useState<ArgumentExample>("socrates");
  const [selectedDilemma, setSelectedDilemma] =
    useState<DilemmaExample>("trolley");

  const argumentSpec = useMemo<PhilArgumentMapSpec>(
    () => ARGUMENT_MAPS[selectedArgument],
    [selectedArgument],
  );

  const dilemmaSpec = useMemo<PhilDilemmaSpec>(
    () => DILEMMAS[selectedDilemma],
    [selectedDilemma],
  );

  const tools: Array<{ id: Tool; label: string }> = [
    { id: "argument-map", label: "Mapa de argumentos" },
    { id: "dilemma", label: "Dilema ético" },
  ];

  return (
    <div className="space-y-6 px-6 py-8">
      <div className="flex items-center gap-3">
        <Link
          to="/herramientas"
          className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
        >
          &larr; Volver a herramientas
        </Link>
      </div>

      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">Filosofía</h1>
        <p className="text-sm text-slate-600">
          Explora mapas de argumentos filosóficos y analiza dilemas éticos desde
          distintos marcos teóricos.
        </p>
      </header>

      <div className="flex gap-2">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveTool(tool.id)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeTool === tool.id
                ? "bg-blue-600 text-white"
                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >
            {tool.label}
          </button>
        ))}
      </div>

      {activeTool === "argument-map" && (
        <>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">
              Selección de argumento
            </h2>
            <div className="mt-4">
              <label className="text-sm text-slate-600">
                <span className="font-medium text-slate-700">Ejemplo</span>
                <select
                  value={selectedArgument}
                  onChange={(e) =>
                    setSelectedArgument(e.target.value as ArgumentExample)
                  }
                  className="ml-3 rounded-md border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="socrates">Argumento de Sócrates</option>
                  <option value="trolley">Dilema del tranvía</option>
                  <option value="ontological">Argumento ontológico</option>
                </select>
              </label>
            </div>
          </section>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={argumentSpec} />
          </div>
        </>
      )}

      {activeTool === "dilemma" && (
        <>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">
              Selección de dilema
            </h2>
            <div className="mt-4">
              <label className="text-sm text-slate-600">
                <span className="font-medium text-slate-700">Escenario</span>
                <select
                  value={selectedDilemma}
                  onChange={(e) =>
                    setSelectedDilemma(e.target.value as DilemmaExample)
                  }
                  className="ml-3 rounded-md border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="trolley">El dilema del tranvía</option>
                  <option value="prisoner">El dilema del prisionero</option>
                  <option value="lying">Mentir para proteger</option>
                </select>
              </label>
            </div>
          </section>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={dilemmaSpec} />
          </div>
        </>
      )}
    </div>
  );
}
