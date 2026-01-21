import { useEffect, useMemo, useState } from "react";
import type {
  Dificultad as DificultadCore,
  GeneradorParametros,
} from "../generador/core/types";
import type { Dificultad as DificultadMath } from "../generador/matematicas/generic";
import type { Dificultad as DificultadQuimica } from "../generador/quimica/generico";
import type { Dificultad as DificultadEconomia } from "../generador/economia/generico";
import { GENERATORS_BY_TEMA } from "../generador/matematicas";
import { GENERADORES_QUIMICA } from "../generador/quimica/indexQuimica";
import { GENERADORES_ECONOMIA_POR_CLAVE } from "../generador/economia/indexEconomia";
import { GENERADORES_FISICA } from "../generador/fisica/indexFisica";
import { crearCalculadoraFisica } from "../generador/fisica/calculadora";
import VisualizerRenderer from "../visualizadores/graficos/VisualizerRenderer";
import type { VisualSpec } from "../visualizadores/types";
import {
  DIFICULTADES_POR_MATERIA,
  type MateriaUI,
} from "../generador/core/dificultades";

const mapDificultadCoreABasica = (
  dificultad: DificultadCore
): DificultadQuimica => {
  switch (dificultad) {
    case "basico":
      return "facil";
    case "intermedio":
      return "media";
    case "avanzado":
    case "Legendario":
    case "Divino":
      return "dificil";
    default:
      return "media";
  }
};

export default function GeneradoresTest() {
  const [materia, setMateria] = useState<MateriaUI>("matematica");
  const [generadorSeleccionado, setGeneradorSeleccionado] = useState("");
  const [dificultad, setDificultad] = useState(
    DIFICULTADES_POR_MATERIA.matematica[1]
  );
  const [modoRespuesta, setModoRespuesta] = useState<"quiz" | "completar">(
    "quiz"
  );
  const [resultado, setResultado] = useState<unknown>(null);
  const [error, setError] = useState<string | null>(null);

  const opcionesGenerador = useMemo(() => {
    switch (materia) {
      case "matematica":
        return Object.keys(GENERATORS_BY_TEMA)
          .map((id) => Number(id))
          .sort((a, b) => a - b)
          .map((id) => ({
            value: id.toString(),
            label: `Tema ${id}`,
          }));
      case "quimica":
        return Object.keys(GENERADORES_QUIMICA)
          .map((id) => Number(id))
          .sort((a, b) => a - b)
          .map((id) => ({
            value: id.toString(),
            label: `Tema ${id}`,
          }));
      case "economia":
        return Object.keys(GENERADORES_ECONOMIA_POR_CLAVE)
          .sort()
          .map((clave) => ({ value: clave, label: clave }));
      case "fisica":
      default:
        return GENERADORES_FISICA.map((generador) => ({
          value: generador.id,
          label: generador.id,
        }));
    }
  }, [materia]);

  useEffect(() => {
    setGeneradorSeleccionado(opcionesGenerador[0]?.value ?? "");
    setDificultad(DIFICULTADES_POR_MATERIA[materia][1] ?? "intermedio");
  }, [materia, opcionesGenerador]);

  const calculadoraFisica = useMemo(() => crearCalculadoraFisica(), []);

  const ejemplosVisuales = useMemo(
    () => [
      {
        id: "timeline",
        title: "Línea de tiempo",
        description: "Secuencia de hitos clave con rangos y marcadores.",
        spec: {
          kind: "timeline",
          title: "Proyecto de ciencias",
          range: { start: "Mar 2024", end: "Ago 2024" },
          markers: [
            { id: "m1", label: "Kick-off", date: "Mar 2024" },
            { id: "m2", label: "Entrega final", date: "Ago 2024" },
          ],
          events: [
            {
              id: "e1",
              title: "Investigación inicial",
              date: "Mar 2024",
              description: "Recolección de datos y fuentes.",
              tags: ["Lecturas", "Definición"],
            },
            {
              id: "e2",
              title: "Experimentos",
              date: "May 2024",
              description: "Pruebas controladas y análisis.",
              tags: ["Laboratorio", "Hipótesis"],
            },
            {
              id: "e3",
              title: "Presentación",
              date: "Ago 2024",
              description: "Síntesis de resultados y conclusiones.",
              tags: ["Entrega", "Demo"],
            },
          ],
        } satisfies VisualSpec,
      },
      {
        id: "concept-map",
        title: "Mapa conceptual",
        description: "Relaciones entre conceptos clave de un tema.",
        spec: {
          kind: "concept-map",
          title: "Ecosistema urbano",
          nodes: [
            { id: "n1", label: "Energía", group: "Recursos" },
            { id: "n2", label: "Transporte", group: "Infraestructura" },
            { id: "n3", label: "Emisiones", group: "Impacto" },
            { id: "n4", label: "Salud pública", group: "Impacto" },
          ],
          links: [
            {
              id: "l1",
              sourceId: "n1",
              targetId: "n2",
              relation: "impulsa",
            },
            {
              id: "l2",
              sourceId: "n2",
              targetId: "n3",
              relation: "genera",
            },
            {
              id: "l3",
              sourceId: "n3",
              targetId: "n4",
              relation: "afecta",
            },
          ],
        } satisfies VisualSpec,
      },
      {
        id: "chart",
        title: "Gráfico comparativo",
        description: "Series con métricas trimestrales.",
        spec: {
          kind: "chart",
          chartType: "bar",
          title: "Participación en talleres",
          xAxis: { label: "Trimestre" },
          yAxis: { label: "Participantes", unit: "alumnos" },
          series: [
            {
              id: "s1",
              label: "Robótica",
              color: "#2563eb",
              data: [
                { x: "T1", y: 42 },
                { x: "T2", y: 55 },
                { x: "T3", y: 63 },
                { x: "T4", y: 58 },
              ],
            },
            {
              id: "s2",
              label: "Arte",
              color: "#f97316",
              data: [
                { x: "T1", y: 35 },
                { x: "T2", y: 48 },
                { x: "T3", y: 51 },
                { x: "T4", y: 60 },
              ],
            },
          ],
        } satisfies VisualSpec,
      },
      {
        id: "flow",
        title: "Diagrama de flujo",
        description: "Pasos de una actividad guiada.",
        spec: {
          kind: "flow",
          title: "Proceso de investigación",
          steps: [
            { id: "s1", label: "Pregunta inicial", type: "start" },
            { id: "s2", label: "Recolección de datos", type: "process" },
            { id: "s3", label: "¿Hay evidencia?", type: "decision" },
            { id: "s4", label: "Conclusiones", type: "end" },
          ],
          connections: [
            { id: "c1", fromId: "s1", toId: "s2" },
            { id: "c2", fromId: "s2", toId: "s3" },
            { id: "c3", fromId: "s3", toId: "s4", label: "Sí" },
          ],
        } satisfies VisualSpec,
      },
      {
        id: "physics-motion-chart",
        title: "Movimiento en 2 gráficas",
        description: "x-t y v-t coordinadas para MRUV.",
        spec: {
          kind: "physics-motion-chart",
          title: "Movimiento con aceleración",
          description: "Pendiente y área destacadas en el mismo intervalo.",
          motion: {
            type: "MRUV",
            time: 8,
            initialPosition: 0,
            initialVelocity: 4,
            acceleration: 1.5,
            displacement: 80,
          },
          axes: {
            time: { label: "Tiempo", unit: "s" },
            position: { label: "Posición", unit: "m" },
            velocity: { label: "Velocidad", unit: "m/s" },
          },
          series: {
            position: {
              id: "sample-pos",
              label: "x(t)",
              color: "#2563EB",
              data: [
                { t: 0, value: 0 },
                { t: 2, value: 11 },
                { t: 4, value: 28 },
                { t: 6, value: 51 },
                { t: 8, value: 80 },
              ],
            },
            velocity: {
              id: "sample-vel",
              label: "v(t)",
              color: "#F97316",
              data: [
                { t: 0, value: 4 },
                { t: 2, value: 7 },
                { t: 4, value: 10 },
                { t: 6, value: 13 },
                { t: 8, value: 16 },
              ],
            },
          },
          annotations: {
            slope: {
              time: 8,
              value: 16,
              unit: "m/s",
              label: "Pendiente (v)",
            },
            area: {
              time: 8,
              value: 80,
              unit: "m",
              label: "Área (desplazamiento)",
            },
          },
        } satisfies VisualSpec,
      },
      {
        id: "map",
        title: "Mapa interactivo",
        description: "Marcadores con rutas y categorías.",
        spec: {
          kind: "map",
          title: "Salida educativa",
          viewport: {
            center: [-34.6037, -58.3816],
            zoom: 1.4,
          },
          markers: [
            {
              id: "m1",
              label: "Museo",
              coordinates: [-34.6037, -58.3816],
              description: "Punto de encuentro principal.",
              category: "Cultura",
            },
            {
              id: "m2",
              label: "Parque",
              coordinates: [-34.5778, -58.4083],
              description: "Actividad al aire libre.",
              category: "Naturaleza",
            },
            {
              id: "m3",
              label: "Laboratorio",
              coordinates: [-34.6154, -58.4333],
              description: "Visita técnica.",
              category: "Ciencia",
            },
          ],
          routes: [
            {
              id: "r1",
              label: "Recorrido recomendado",
              color: "#10b981",
              path: [
                [-34.6037, -58.3816],
                [-34.5778, -58.4083],
                [-34.6154, -58.4333],
              ],
            },
          ],
        } satisfies VisualSpec,
      },
      {
        id: "funciones-graficas",
        title: "Funciones (gráficas)",
        description: "Funciones lineales y cuadráticas con puntos clave.",
        spec: {
          kind: "funciones-graficas",
          title: "Funciones en el plano cartesiano",
          description: "Comparación de una función lineal y una cuadrática.",
          axes: {
            x: { label: "x", min: -5, max: 5 },
            y: { label: "y", min: -4, max: 8 },
          },
          functions: [
            {
              id: "f1",
              type: "lineal",
              expression: "y = 2x + 1",
              domain: { start: -4, end: 4, step: 1 },
              keyPoints: [
                { x: -2, y: -3, label: "Intercepto" },
                { x: 0, y: 1, label: "Ordenada" },
              ],
              color: "#2563eb",
              notes: "Pendiente positiva.",
            },
            {
              id: "f2",
              type: "cuadratica",
              expression: "y = x² - 2x",
              domain: { start: -2, end: 4, step: 0.5 },
              keyPoints: [
                { x: 1, y: -1, label: "Vértice" },
                { x: 0, y: 0, label: "Corte" },
              ],
              color: "#f97316",
              notes: "Concavidad hacia arriba.",
            },
          ],
        } satisfies VisualSpec,
      },
      {
        id: "geometria-plana-espacial",
        title: "Geometría plana y espacial",
        description: "Figuras con parámetros y propiedades clave.",
        spec: {
          kind: "geometria-plana-espacial",
          title: "Figuras destacadas",
          description: "Triángulo y prisma con datos esenciales.",
          figures: [
            {
              id: "g1",
              name: "Triángulo isósceles",
              dimension: "plana",
              type: "triangulo",
              parameters: [
                { label: "Base", value: 8, unit: "cm" },
                { label: "Lado", value: 6, unit: "cm" },
                { label: "Altura", value: 5, unit: "cm" },
              ],
              angles: [
                { id: "a1", vertex: "A", valueDeg: 50, label: "Ángulo A" },
                { id: "a2", vertex: "B", valueDeg: 80, label: "Ángulo B" },
              ],
              properties: [{ label: "Área", value: "20 cm²" }],
              formula: "Área = (b · h) / 2",
              notes: "Lados iguales en los vértices A y C.",
            },
            {
              id: "g2",
              name: "Prisma rectangular",
              dimension: "espacial",
              type: "prisma",
              parameters: [
                { label: "Largo", value: 4, unit: "cm" },
                { label: "Ancho", value: 3, unit: "cm" },
                { label: "Alto", value: 6, unit: "cm" },
              ],
              properties: [
                { label: "Volumen", value: "72 cm³" },
                { label: "Área total", value: "108 cm²" },
              ],
              formula: "V = l · w · h",
              notes: "Base rectangular con 6 caras.",
            },
          ],
        } satisfies VisualSpec,
      },
      {
        id: "trigonometria-avanzada",
        title: "Trigonometría avanzada",
        description: "Círculo unitario y funciones trigonométricas.",
        spec: {
          kind: "trigonometria-avanzada",
          title: "Círculo unitario",
          description: "Puntos notables y funciones seno/coseno.",
          unitCircle: {
            radius: 1,
            points: [
              { angleDeg: 0, x: 1, y: 0, label: "0°" },
              { angleDeg: 90, x: 0, y: 1, label: "90°" },
              { angleDeg: 180, x: -1, y: 0, label: "180°" },
              { angleDeg: 270, x: 0, y: -1, label: "270°" },
            ],
          },
          functions: [
            {
              id: "t1",
              type: "seno",
              expression: "y = sen(x)",
              amplitude: 1,
              period: 360,
              phaseShift: 0,
              keyPoints: [
                { x: 0, y: 0, label: "Origen" },
                { x: 90, y: 1, label: "Máximo" },
              ],
              notes: "Oscilación básica.",
            },
            {
              id: "t2",
              type: "coseno",
              expression: "y = cos(x)",
              amplitude: 1,
              period: 360,
              phaseShift: 0,
              keyPoints: [
                { x: 0, y: 1, label: "Máximo" },
                { x: 180, y: -1, label: "Mínimo" },
              ],
              notes: "Desfase de 90° respecto al seno.",
            },
          ],
          angles: [
            { id: "ang1", label: "π/6", valueDeg: 30, valueRad: "π/6", ratio: "1/2" },
            { id: "ang2", label: "π/4", valueDeg: 45, valueRad: "π/4", ratio: "√2/2" },
          ],
        } satisfies VisualSpec,
      },
      {
        id: "algebra-calculo-visual",
        title: "Álgebra y cálculo visual",
        description: "Sistemas, derivadas e integrales con pasos clave.",
        spec: {
          kind: "algebra-calculo-visual",
          title: "Resumen de álgebra y cálculo",
          description: "Muestra procesos y resultados visuales.",
          systems: [
            {
              id: "sistema-1",
              equations: ["2x + y = 7", "x - y = 1"],
              solution: { x: 2, y: 3 },
              steps: ["Despejar y en la segunda ecuación.", "Sustituir en la primera."],
            },
          ],
          derivatives: [
            {
              id: "der-1",
              function: "x³ - 3x² + 2",
              derivative: "3x² - 6x",
              criticalPoints: [
                { x: 0, y: 2, label: "Máximo local" },
                { x: 2, y: -2, label: "Mínimo local" },
              ],
              notes: "Puntos críticos evaluados en f(x).",
            },
          ],
          integrals: [
            {
              id: "int-1",
              function: "x²",
              bounds: { lower: 0, upper: 2 },
              area: 8 / 3,
              notes: "Área bajo la curva en [0,2].",
            },
          ],
        } satisfies VisualSpec,
      },
      {
        id: "chem-structure",
        title: "Estructura química",
        description: "Distribución electrónica, orbitales y geometría 3D.",
        spec: {
          kind: "chem-structure",
          title: "Ejemplo químico",
          description: "Resumen rápido de estructura atómica y molecular.",
          electronDistribution: {
            atom: "Ne",
            model: "nube-electronica",
            notation: "1s² 2s² 2p⁶",
            shells: [
              { shell: "K", electrons: 2 },
              { shell: "L", electrons: 8 },
            ],
            notes: "Gas noble con capa externa completa.",
          },
          orbitals: {
            atom: "Ne",
            notation: "1s² 2s² 2p⁶",
            subshells: [
              {
                id: "ne-1s",
                type: "s",
                energyLevel: 1,
                electrons: 2,
                maxElectrons: 2,
              },
              {
                id: "ne-2p",
                type: "p",
                energyLevel: 2,
                electrons: 6,
                maxElectrons: 6,
              },
            ],
          },
          molecularModels: [
            {
              id: "nh3",
              name: "Amoníaco",
              formula: "NH₃",
              geometry: "piramidal-trigonal",
              atoms: [
                { id: "n", element: "N", position: { x: 0, y: 0.1, z: 0 } },
                { id: "h1", element: "H", position: { x: 0.9, y: -0.4, z: 0 } },
                { id: "h2", element: "H", position: { x: -0.9, y: -0.4, z: 0 } },
                { id: "h3", element: "H", position: { x: 0, y: -0.4, z: 0.9 } },
              ],
              bonds: [
                { id: "nh3-1", fromId: "n", toId: "h1", order: 1 },
                { id: "nh3-2", fromId: "n", toId: "h2", order: 1 },
                { id: "nh3-3", fromId: "n", toId: "h3", order: 1 },
              ],
            },
          ],
        } satisfies VisualSpec,
      },
      {
        id: "chem-reaction",
        title: "Reacción química",
        description: "Representación con reactivos, productos y pasos.",
        spec: {
          kind: "chem-reaction",
          title: "Síntesis de agua",
          description: "Se reordenan moléculas de hidrógeno y oxígeno para formar agua.",
          reactants: [
            { id: "h2", formula: "H₂", coefficient: 2, moles: 2 },
            { id: "o2", formula: "O₂", coefficient: 1, moles: 1 },
          ],
          products: [{ id: "h2o", formula: "H₂O", coefficient: 2, moles: 2 }],
          steps: [
            {
              id: "step-1",
              title: "Activación",
              description: "Se aproximan las moléculas de hidrógeno y oxígeno.",
              reactants: [
                { id: "h2-step1", formula: "H₂", coefficient: 2, moles: 2 },
                { id: "o2-step1", formula: "O₂", coefficient: 1, moles: 1 },
              ],
              products: [{ id: "mix", formula: "H₂ · O₂", coefficient: 1 }],
            },
            {
              id: "step-2",
              title: "Reordenamiento",
              description: "Los enlaces se reorganizan para formar agua.",
              reactants: [{ id: "mix-2", formula: "H₂ · O₂", coefficient: 1 }],
              products: [
                { id: "h2o-step2", formula: "H₂O", coefficient: 2, moles: 2 },
              ],
            },
          ],
        } satisfies VisualSpec,
      },
      {
        id: "chem-titration",
        title: "Curva de titulación",
        description: "Curva pH-volumen con punto equivalente e indicador.",
        spec: {
          kind: "chem-titration",
          title: "Titulación ácido-base fuerte",
          description: "Ejemplo de curva con cambio rápido cerca del punto equivalente.",
          axes: {
            x: { label: "Volumen añadido", unit: "mL", min: 0, max: 50 },
            y: { label: "pH", min: 0, max: 14 },
          },
          curve: {
            color: "#38bdf8",
            points: [
              { volume: 0, pH: 1.2 },
              { volume: 5, pH: 1.5 },
              { volume: 10, pH: 2.1 },
              { volume: 15, pH: 3.1 },
              { volume: 20, pH: 4.5 },
              { volume: 22, pH: 5.6 },
              { volume: 24, pH: 6.7 },
              { volume: 25, pH: 7.0 },
              { volume: 26, pH: 7.8 },
              { volume: 28, pH: 9.3 },
              { volume: 32, pH: 11.1 },
              { volume: 40, pH: 12.3 },
              { volume: 50, pH: 12.8 },
            ],
          },
          milestones: [
            { id: "start", label: "Inicio", volume: 0, pH: 1.2, type: "start" },
            {
              id: "eq",
              label: "Punto equivalente",
              volume: 25,
              pH: 7,
              type: "equivalence",
            },
            { id: "end", label: "Exceso de base", volume: 50, pH: 12.8, type: "end" },
          ],
          indicator: {
            title: "Indicador de color",
            currentPH: 7,
            ranges: [
              { min: 0, max: 3, color: "#f87171", label: "Ácido fuerte (0-3)" },
              { min: 3, max: 6, color: "#fb923c", label: "Ácido débil (3-6)" },
              { min: 6, max: 8, color: "#34d399", label: "Zona neutra (6-8)" },
              { min: 8, max: 11, color: "#60a5fa", label: "Base débil (8-11)" },
              { min: 11, max: 14, color: "#a78bfa", label: "Base fuerte (11-14)" },
            ],
          },
        } satisfies VisualSpec,
      },
    ],
    []
  );

  const generarEjercicio = () => {
    setError(null);

    try {
      switch (materia) {
        case "matematica": {
          const generador = GENERATORS_BY_TEMA[Number(generadorSeleccionado)];
          if (!generador) throw new Error("Generador de matemáticas no disponible.");
          setResultado(
            generador(dificultad as DificultadMath, { modo: modoRespuesta })
          );
          break;
        }
        case "quimica": {
          const generador = GENERADORES_QUIMICA[Number(generadorSeleccionado)];
          if (!generador) throw new Error("Generador de química no disponible.");
          setResultado(generador(mapDificultadCoreABasica(dificultad)));
          break;
        }
        case "economia": {
          const generador =
            GENERADORES_ECONOMIA_POR_CLAVE[generadorSeleccionado];
          if (!generador) throw new Error("Generador de economía no disponible.");
          setResultado(generador(dificultad as DificultadEconomia));
          break;
        }
        case "fisica": {
          const generador = GENERADORES_FISICA.find(
            (item) => item.id === generadorSeleccionado
          );
          if (!generador) throw new Error("Generador de física no disponible.");

          const params: GeneradorParametros = {
            materia: "fisica",
            categoria: generador.categorias[0] ?? "general",
            nivel: dificultad as DificultadCore,
          };

          setResultado(generador.generarEjercicio(params, calculadoraFisica));
          break;
        }
        default:
          throw new Error("Materia no soportada.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido.");
      setResultado(null);
    }
  };

  const resultadoFormateado = resultado
    ? JSON.stringify(resultado, null, 2)
    : "Selecciona un generador y presiona \"Generar ejercicio\".";

  const resumen = resultado as
    | {
        enunciado?: string;
        opciones?: string[];
        respuestaCorrecta?: string;
        explicacionPasoAPaso?: string[];
        explicacion?: string;
        tituloTema?: string;
        visual?: VisualSpec;
      }
    | undefined;

  return (
    <main className="flex-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-900">
            Laboratorio de generadores
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Probá los generadores por materia, ajustá la dificultad y revisá la
            salida en formato estructurado.
          </p>
        </header>

        <section className="bg-white rounded-xl shadow p-6 space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Ejemplos de visualizadores
              </h2>
              <p className="text-sm text-gray-600">
                Datos simulados para validar la UI de cada visualizador.
              </p>
            </div>
            <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Vista de prueba
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {ejemplosVisuales.map((ejemplo) => (
              <div
                key={ejemplo.id}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {ejemplo.title}
                    </h3>
                    <p className="text-sm text-gray-600">{ejemplo.description}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm">
                    {ejemplo.spec.kind}
                  </span>
                </div>
                <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
                  <VisualizerRenderer spec={ejemplo.spec} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl shadow p-6 space-y-6">
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Materia
              </label>
              <select
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:border-blue-500 focus:ring-blue-500"
                value={materia}
                onChange={(event) =>
                  setMateria(event.target.value as MateriaUI)
                }
              >
                <option value="matematica">Matemática</option>
                <option value="quimica">Química</option>
                <option value="economia">Economía</option>
                <option value="fisica">Física</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Generador
              </label>
              <select
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:border-blue-500 focus:ring-blue-500"
                value={generadorSeleccionado}
                onChange={(event) => setGeneradorSeleccionado(event.target.value)}
              >
                {opcionesGenerador.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Dificultad
              </label>
              <select
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:border-blue-500 focus:ring-blue-500"
                value={dificultad}
                onChange={(event) =>
                  setDificultad(event.target.value as DificultadCore)
                }
              >
                {DIFICULTADES_POR_MATERIA[materia].map((nivel) => (
                  <option key={nivel} value={nivel}>
                    {nivel}
                  </option>
                ))}
              </select>
            </div>

            {materia === "matematica" && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Modo de respuesta
                </label>
                <select
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:border-blue-500 focus:ring-blue-500"
                  value={modoRespuesta}
                  onChange={(event) =>
                    setModoRespuesta(event.target.value as "quiz" | "completar")
                  }
                >
                  <option value="quiz">Multiple choice</option>
                  <option value="completar">Completar</option>
                </select>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={generarEjercicio}
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700"
            >
              Generar ejercicio
            </button>

            {error ? (
              <p className="text-sm text-red-600">{error}</p>
            ) : (
              <p className="text-sm text-gray-500">
                Consejo: podés repetir para validar variaciones del mismo tema.
              </p>
            )}
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="bg-white rounded-xl shadow p-6 space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Vista previa</h2>
            {resumen?.enunciado ? (
              <>
                <div>
                  <p className="text-sm text-gray-500">Enunciado</p>
                  <p className="mt-1 text-gray-900 whitespace-pre-wrap">
                    {resumen.enunciado}
                  </p>
                </div>
                {resumen.opciones && resumen.opciones.length > 0 && (
                  <div>
                    <p className="text-sm text-gray-500">Opciones</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-800">
                      {resumen.opciones.map((opcion, index) => (
                        <li key={`${opcion}-${index}`}>
                          {index + 1}. {opcion}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {resumen.respuestaCorrecta && (
                  <div>
                    <p className="text-sm text-gray-500">Respuesta correcta</p>
                    <p className="mt-1 font-medium text-gray-900">
                      {resumen.respuestaCorrecta}
                    </p>
                  </div>
                )}
                {resumen.explicacionPasoAPaso &&
                  resumen.explicacionPasoAPaso.length > 0 && (
                    <div>
                      <p className="text-sm text-gray-500">Pasos sugeridos</p>
                      <ul className="mt-2 space-y-1 text-sm text-gray-700">
                        {resumen.explicacionPasoAPaso.map((paso, index) => (
                          <li key={`${paso}-${index}`}>• {paso}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                {resumen.explicacion && (
                  <div>
                    <p className="text-sm text-gray-500">Explicación</p>
                    <p className="mt-1 text-sm text-gray-700">
                      {resumen.explicacion}
                    </p>
                  </div>
                )}
                {resumen.visual && (
                  <div>
                    <p className="text-sm text-gray-500">Visualización</p>
                    <div className="mt-2 rounded-lg border border-slate-200 bg-white p-4">
                      <VisualizerRenderer spec={resumen.visual} />
                    </div>
                  </div>
                )}
              </>
            ) : (
              <p className="text-sm text-gray-500">
                Todavía no hay un ejercicio generado.
              </p>
            )}
          </div>

          <div className="bg-slate-900 rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-white mb-4">
              Resultado (JSON)
            </h2>
            <pre className="text-xs text-emerald-200 whitespace-pre-wrap break-words">
              {resultadoFormateado}
            </pre>
          </div>
        </section>
      </div>
    </main>
  );
}
