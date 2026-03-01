import { useState } from "react";
import type { VisualSpec } from "../../visualizadores/types";

type HerramientaPickerProps = {
  isOpen: boolean;
  onSelect: (detail: string) => void;
  onClose: () => void;
};

type ToolEntry = {
  toolKind: string;
  label: string;
  description: string;
  defaultSpec: VisualSpec;
};

type SubjectEntry = {
  subject: string;
  color: string;
  icon: string;
  tools: ToolEntry[];
};

const SUBJECTS: SubjectEntry[] = [
  {
    subject: "Estadística",
    color: "bg-blue-100 text-blue-700 border-blue-200",
    icon: "📊",
    tools: [
      {
        toolKind: "stat-distribution",
        label: "Distribución estadística",
        description: "Explora distribuciones normal, uniforme y binomial con parámetros ajustables",
        defaultSpec: {
          kind: "stat-distribution",
          title: "Distribución normal",
          distributionType: "normal",
          parameters: { mean: 0, stdDev: 1 },
          samples: 200,
          curve: [],
        } as VisualSpec,
      },
      {
        toolKind: "stat-regression",
        label: "Regresión y correlación",
        description: "Analiza la relación entre variables con recta de regresión y R²",
        defaultSpec: {
          kind: "stat-regression",
          title: "Regresión lineal",
          points: [
            { x: 1, y: 2.1 }, { x: 2, y: 3.8 }, { x: 3, y: 5.2 },
            { x: 4, y: 7.1 }, { x: 5, y: 8.9 },
          ],
          regression: {
            type: "linear",
            coefficients: [1, 1],
            r2: 0.99,
            line: [{ x: 0, y: 1 }, { x: 6, y: 7 }],
          },
          axes: {
            x: { label: "Variable X", min: 0, max: 6 },
            y: { label: "Variable Y", min: 0, max: 10 },
          },
        } as VisualSpec,
      },
    ],
  },
  {
    subject: "Ciencias Sociales",
    color: "bg-amber-100 text-amber-700 border-amber-200",
    icon: "🗺️",
    tools: [
      {
        toolKind: "social-population-pyramid",
        label: "Pirámide poblacional",
        description: "Analiza distribuciones demográficas por edad y género",
        defaultSpec: {
          kind: "social-population-pyramid",
          title: "Pirámide de población",
          year: 2024,
          ageGroups: [
            { label: "0-14", male: 18, female: 17 },
            { label: "15-29", male: 20, female: 19 },
            { label: "30-44", male: 17, female: 16 },
            { label: "45-59", male: 14, female: 14 },
            { label: "60-74", male: 8, female: 9 },
            { label: "75+", male: 3, female: 5 },
          ],
          unit: "percent",
        } as VisualSpec,
      },
      {
        toolKind: "social-choropleth",
        label: "Mapa comparativo de regiones",
        description: "Compara indicadores sociales entre regiones usando color",
        defaultSpec: {
          kind: "social-choropleth",
          title: "Índice de desarrollo",
          variable: "IDH",
          regions: [
            { id: "r1", label: "Región Norte", value: 0.82 },
            { id: "r2", label: "Región Sur", value: 0.71 },
            { id: "r3", label: "Región Este", value: 0.79 },
            { id: "r4", label: "Región Oeste", value: 0.65 },
          ],
          scale: { min: 0.5, max: 1.0, colors: ["#fef3c7", "#1d4ed8"] },
        } as VisualSpec,
      },
    ],
  },
  {
    subject: "Filosofía",
    color: "bg-purple-100 text-purple-700 border-purple-200",
    icon: "🧠",
    tools: [
      {
        toolKind: "phil-argument-map",
        label: "Mapa de argumentos",
        description: "Analiza la estructura lógica de argumentos e identifica falacias",
        defaultSpec: {
          kind: "phil-argument-map",
          title: "Análisis de argumento",
          claim: { id: "claim", text: "La educación debería ser gratuita" },
          nodes: [
            { id: "p1", text: "El acceso igualitario es un derecho", type: "premise", parentId: "claim" },
            { id: "p2", text: "Las familias con bajos ingresos no pueden pagar", type: "premise", parentId: "claim" },
            { id: "o1", text: "Los recursos son limitados", type: "objection", parentId: "p2" },
            { id: "r1", text: "La inversión pública genera retorno", type: "rebuttal", parentId: "o1" },
          ],
          relations: [
            { id: "rel1", fromId: "p1", toId: "claim", kind: "supports" },
            { id: "rel2", fromId: "p2", toId: "claim", kind: "supports" },
            { id: "rel3", fromId: "o1", toId: "p2", kind: "attacks" },
            { id: "rel4", fromId: "r1", toId: "o1", kind: "attacks" },
          ],
        } as VisualSpec,
      },
      {
        toolKind: "phil-dilemma",
        label: "Dilema ético",
        description: "Analiza dilemas morales desde distintos marcos filosóficos",
        defaultSpec: {
          kind: "phil-dilemma",
          title: "El dilema del tranvía",
          scenario: "Un tranvía descontrolado se dirige hacia cinco personas. Podés desviar el tranvía hacia una vía donde solo hay una persona. ¿Desviarías?",
          options: [
            { id: "u", label: "Desviar el tranvía", framework: "utilitarianism", analysis: "Salvar cinco vidas sacrificando una maximiza el bienestar total.", consequences: ["5 vidas salvadas", "1 muerte deliberada"] },
            { id: "d", label: "No intervenir", framework: "deontology", analysis: "No es lícito usar a una persona como medio, aunque el fin sea salvar más vidas.", consequences: ["Respeto de derechos individuales", "5 muertes por inacción"] },
          ],
          activeOptionId: "u",
        } as VisualSpec,
      },
    ],
  },
  {
    subject: "Arte",
    color: "bg-pink-100 text-pink-700 border-pink-200",
    icon: "🎨",
    tools: [
      {
        toolKind: "art-color-wheel",
        label: "Rueda de color",
        description: "Explora teoría del color y armonías cromáticas",
        defaultSpec: {
          kind: "art-color-wheel",
          title: "Rueda cromática",
          selectedHue: 200,
          harmony: "complementary",
          palette: [],
          swatches: [
            { color: "hsl(200,70%,60%)", label: "Principal", role: "primary" },
            { color: "hsl(20,70%,60%)", label: "Complementario", role: "complementary" },
          ],
        } as VisualSpec,
      },
      {
        toolKind: "art-composition",
        label: "Composición y encuadre",
        description: "Analiza reglas de composición visual: tercios, proporción áurea",
        defaultSpec: {
          kind: "art-composition",
          title: "Regla de los tercios",
          canvasWidth: 640,
          canvasHeight: 480,
          rule: "rule-of-thirds",
          overlayLines: [
            { x1: 213, y1: 0, x2: 213, y2: 480, label: "1/3", color: "#60a5fa" },
            { x1: 427, y1: 0, x2: 427, y2: 480, label: "2/3", color: "#60a5fa" },
            { x1: 0, y1: 160, x2: 640, y2: 160, color: "#60a5fa" },
            { x1: 0, y1: 320, x2: 640, y2: 320, color: "#60a5fa" },
          ],
          zones: [],
          elements: [],
        } as VisualSpec,
      },
    ],
  },
  {
    subject: "Biología",
    color: "bg-green-100 text-green-700 border-green-200",
    icon: "🧬",
    tools: [
      {
        toolKind: "bio-genetics",
        label: "Genética mendeliana",
        description: "Simula cruces genéticos con cuadro de Punnett",
        defaultSpec: {
          kind: "bio-genetics",
          title: "Cruce monohíbrido",
          cross: "monohybrid",
          parent1Alleles: ["A", "a"],
          parent2Alleles: ["A", "a"],
          punnettSquare: [
            [{ alleles: "AA", dominant: true }, { alleles: "Aa", dominant: true }],
            [{ alleles: "Aa", dominant: true }, { alleles: "aa", dominant: false }],
          ],
          phenotypeRatio: "3:1",
          genotypeRatio: "1:2:1",
          notes: ["Dominante: A (color oscuro)", "Recesivo: aa (color claro)"],
        } as VisualSpec,
      },
      {
        toolKind: "bio-population-dynamics",
        label: "Dinámica poblacional",
        description: "Modela el crecimiento de poblaciones y relaciones presa-depredador",
        defaultSpec: {
          kind: "bio-population-dynamics",
          title: "Modelo logístico",
          model: "logistic",
          parameters: { carryingCapacity: 1000, growthRate: 0.3, initialPrey: 100 },
          timeSeries: [
            {
              id: "pop",
              label: "Población",
              color: "#2563eb",
              data: Array.from({ length: 30 }, (_, t) => ({
                t,
                value: Math.round(1000 / (1 + 9 * Math.exp(-0.3 * t))),
              })),
            },
          ],
          axes: { x: { label: "Tiempo (años)" }, y: { label: "Individuos" } },
        } as VisualSpec,
      },
      {
        toolKind: "bio-cell-diagram",
        label: "Diagrama celular",
        description: "Explora la estructura de células animales, vegetales y bacterias",
        defaultSpec: {
          kind: "bio-cell-diagram",
          title: "Célula animal",
          cellType: "animal",
          organelles: [
            { id: "nucleus", label: "Núcleo", description: "Contiene el ADN", cx: 280, cy: 200, rx: 50, ry: 40, color: "#818cf8" },
            { id: "mito", label: "Mitocondria", description: "Produce ATP", cx: 380, cy: 240, rx: 35, ry: 20, color: "#34d399" },
            { id: "er", label: "Retículo ER", description: "Síntesis de proteínas", cx: 180, cy: 240, rx: 40, ry: 18, color: "#fbbf24" },
          ],
        } as VisualSpec,
      },
    ],
  },
  {
    subject: "Música",
    color: "bg-rose-100 text-rose-700 border-rose-200",
    icon: "🎵",
    tools: [
      {
        toolKind: "music-waveform",
        label: "Visualizador de ondas sonoras",
        description: "Explora frecuencia, amplitud y armónicos del sonido",
        defaultSpec: {
          kind: "music-waveform",
          title: "Onda sonora - La 440Hz",
          note: "A4",
          baseFrequency: 440,
          harmonics: [
            { id: "h1", order: 1, frequency: 440, amplitude: 1.0, color: "#2563eb", label: "Fundamental" },
            { id: "h2", order: 2, frequency: 880, amplitude: 0.5, color: "#7c3aed", label: "2.° armónico" },
            { id: "h3", order: 3, frequency: 1320, amplitude: 0.25, color: "#db2777", label: "3.° armónico" },
          ],
          compositeWave: [],
          axes: { x: { label: "Tiempo (ms)", min: 0, max: 5 }, y: { label: "Amplitud", min: -2, max: 2 } },
        } as VisualSpec,
      },
      {
        toolKind: "music-rhythm-grid",
        label: "Cuadrícula rítmica",
        description: "Construye patrones rítmicos para diferentes instrumentos",
        defaultSpec: {
          kind: "music-rhythm-grid",
          title: "Patrón de batería 4/4",
          timeSignature: { beats: 4, division: 4 },
          tempo: 120,
          measures: 2,
          tracks: [
            { id: "kick", instrument: "Bombo", color: "#2563eb", beats: [{ measure: 1, beat: 1 }, { measure: 1, beat: 3 }, { measure: 2, beat: 1 }, { measure: 2, beat: 3 }] },
            { id: "snare", instrument: "Redoblante", color: "#dc2626", beats: [{ measure: 1, beat: 2 }, { measure: 1, beat: 4 }, { measure: 2, beat: 2 }, { measure: 2, beat: 4 }] },
            { id: "hihat", instrument: "Hi-hat", color: "#ca8a04", beats: [{ measure: 1, beat: 1 }, { measure: 1, beat: 2 }, { measure: 1, beat: 3 }, { measure: 1, beat: 4 }, { measure: 2, beat: 1 }, { measure: 2, beat: 2 }, { measure: 2, beat: 3 }, { measure: 2, beat: 4 }] },
          ],
        } as VisualSpec,
      },
    ],
  },
  {
    subject: "Política",
    color: "bg-indigo-100 text-indigo-700 border-indigo-200",
    icon: "🏛️",
    tools: [
      {
        toolKind: "pol-voting-systems",
        label: "Sistemas electorales",
        description: "Compara resultados bajo diferentes sistemas de votación",
        defaultSpec: {
          kind: "pol-voting-systems",
          title: "Comparación de sistemas electorales",
          candidates: [
            { id: "a", name: "Candidato A", color: "#2563eb" },
            { id: "b", name: "Candidato B", color: "#dc2626" },
            { id: "c", name: "Candidato C", color: "#16a34a" },
          ],
          ballots: [],
          results: {
            plurality: [
              { candidateId: "a", votes: 40 },
              { candidateId: "b", votes: 35 },
              { candidateId: "c", votes: 25 },
            ],
            runoff: [
              { candidateId: "a", votes: 52, round: 2 },
              { candidateId: "b", votes: 48, round: 2 },
            ],
            borda: [
              { candidateId: "a", points: 160 },
              { candidateId: "b", points: 145 },
              { candidateId: "c", points: 95 },
            ],
          },
          winnerBySystem: { plurality: "a", runoff: "a", borda: "a" },
        } as VisualSpec,
      },
      {
        toolKind: "pol-power-distribution",
        label: "División de poderes",
        description: "Visualiza la estructura institucional y los mecanismos de control",
        defaultSpec: {
          kind: "pol-power-distribution",
          title: "Sistema presidencial",
          system: "presidential",
          branches: [
            { id: "exec", label: "Poder Ejecutivo", role: "Presidente", powers: ["Veto de leyes", "Decreto de urgencia", "Política exterior"], checksOn: ["legis"], color: "#2563eb", cx: 100, cy: 140 },
            { id: "legis", label: "Poder Legislativo", role: "Congreso", powers: ["Sancionar leyes", "Aprobar presupuesto", "Juicio político"], checksOn: ["exec", "judic"], color: "#dc2626", cx: 330, cy: 60 },
            { id: "judic", label: "Poder Judicial", role: "Corte Suprema", powers: ["Control de constitucionalidad", "Interpretar leyes", "Garantías individuales"], checksOn: ["exec", "legis"], color: "#16a34a", cx: 330, cy: 220 },
          ],
          relations: [
            { id: "r1", fromId: "legis", toId: "exec", label: "Juicio político", kind: "check" },
            { id: "r2", fromId: "exec", toId: "legis", label: "Veto", kind: "check" },
            { id: "r3", fromId: "judic", toId: "legis", label: "Inconstitucionalidad", kind: "check" },
          ],
        } as VisualSpec,
      },
    ],
  },
  {
    subject: "Educación Cívica",
    color: "bg-cyan-100 text-cyan-700 border-cyan-200",
    icon: "⚖️",
    tools: [
      {
        toolKind: "civic-rights-tree",
        label: "Árbol de derechos",
        description: "Clasifica y explora los derechos y deberes constitucionales",
        defaultSpec: {
          kind: "civic-rights-tree",
          title: "Derechos constitucionales",
          root: { id: "root", label: "Constitución Nacional" },
          categories: [
            {
              id: "civiles",
              label: "Civiles",
              color: "#2563eb",
              rights: [
                { id: "r1", label: "Libertad de expresión", article: "Art. 14" },
                { id: "r2", label: "Libertad de reunión", article: "Art. 14" },
              ],
            },
            {
              id: "sociales",
              label: "Sociales",
              color: "#16a34a",
              rights: [
                { id: "r3", label: "Educación pública", article: "Art. 14 bis" },
                { id: "r4", label: "Salud", article: "Art. 42" },
              ],
            },
            {
              id: "politicos",
              label: "Políticos",
              color: "#7c3aed",
              rights: [
                { id: "r5", label: "Derecho a votar", article: "Art. 37" },
                { id: "r6", label: "Participación cívica", article: "Art. 39" },
              ],
            },
          ],
        } as VisualSpec,
      },
      {
        toolKind: "civic-budget",
        label: "Presupuesto participativo",
        description: "Asigna y analiza el presupuesto del estado por áreas",
        defaultSpec: {
          kind: "civic-budget",
          title: "Presupuesto municipal",
          totalBudget: 100,
          unit: "millones",
          currency: "$",
          categories: [
            { id: "edu", label: "Educación", allocated: 30, color: "#2563eb" },
            { id: "sal", label: "Salud", allocated: 25, color: "#16a34a" },
            { id: "infra", label: "Infraestructura", allocated: 20, color: "#ca8a04" },
            { id: "seg", label: "Seguridad", allocated: 15, color: "#dc2626" },
            { id: "cult", label: "Cultura", allocated: 10, color: "#7c3aed" },
          ],
        } as VisualSpec,
      },
    ],
  },
  {
    subject: "Ciencias Ambientales",
    color: "bg-teal-100 text-teal-700 border-teal-200",
    icon: "🌿",
    tools: [
      {
        toolKind: "env-ecosystem",
        label: "Pirámide ecológica",
        description: "Explora flujos de energía entre niveles tróficos",
        defaultSpec: {
          kind: "env-ecosystem",
          title: "Ecosistema de bosque",
          biome: "bosque-tropical",
          trophicLevels: [
            { level: 1, label: "Productores", organisms: [{ id: "plants", name: "Plantas", population: 10000, energyPercent: 100, color: "#16a34a" }] },
            { level: 2, label: "Herbívoros", organisms: [{ id: "deer", name: "Venados", population: 500, energyPercent: 10, color: "#ca8a04" }] },
            { level: 3, label: "Carnívoros", organisms: [{ id: "wolf", name: "Lobos", population: 20, energyPercent: 1, color: "#dc2626" }] },
          ],
          energyLoss: 90,
        } as VisualSpec,
      },
      {
        toolKind: "env-carbon-cycle",
        label: "Ciclo del carbono",
        description: "Modela los reservorios de carbono y el impacto humano",
        defaultSpec: {
          kind: "env-carbon-cycle",
          title: "Ciclo global del carbono",
          reservoirs: [
            { id: "atm", label: "Atmósfera", amount: 860, unit: "GtC", cx: 0.5, cy: 0.1, color: "#60a5fa", radius: 40 },
            { id: "ocean", label: "Océanos", amount: 38000, unit: "GtC", cx: 0.2, cy: 0.7, color: "#2563eb", radius: 55 },
            { id: "land", label: "Tierra/Plantas", amount: 2200, unit: "GtC", cx: 0.8, cy: 0.7, color: "#16a34a", radius: 45 },
          ],
          fluxes: [
            { id: "f1", fromId: "ocean", toId: "atm", amount: 90, label: "Evaporación" },
            { id: "f2", fromId: "atm", toId: "ocean", amount: 92, label: "Disolución" },
            { id: "f3", fromId: "land", toId: "atm", amount: 120, label: "Respiración" },
            { id: "f4", fromId: "atm", toId: "land", amount: 123, label: "Fotosíntesis" },
          ],
          humanFlux: { fromId: "land", amount: 9, label: "Combustibles fósiles" },
        } as VisualSpec,
      },
    ],
  },
  {
    subject: "Informática",
    color: "bg-slate-100 text-slate-700 border-slate-200",
    icon: "💻",
    tools: [
      {
        toolKind: "cs-sorting",
        label: "Algoritmos de ordenamiento",
        description: "Visualiza paso a paso cómo ordenan los algoritmos",
        defaultSpec: {
          kind: "cs-sorting",
          title: "Ordenamiento por burbuja",
          algorithm: "bubble",
          initialArray: [64, 34, 25, 12, 22, 11, 90],
          steps: [],
          currentStep: 0,
          complexity: { time: "O(n²)", space: "O(1)" },
        } as VisualSpec,
      },
      {
        toolKind: "cs-graph",
        label: "Recorrido de grafos",
        description: "Explora BFS, DFS y Dijkstra en grafos interactivos",
        defaultSpec: {
          kind: "cs-graph",
          title: "Grafo - BFS",
          directed: false,
          weighted: false,
          nodes: [
            { id: "A", label: "A", x: 0.5, y: 0.1 },
            { id: "B", label: "B", x: 0.2, y: 0.4 },
            { id: "C", label: "C", x: 0.8, y: 0.4 },
            { id: "D", label: "D", x: 0.3, y: 0.8 },
            { id: "E", label: "E", x: 0.7, y: 0.8 },
          ],
          edges: [
            { id: "e1", fromId: "A", toId: "B" },
            { id: "e2", fromId: "A", toId: "C" },
            { id: "e3", fromId: "B", toId: "D" },
            { id: "e4", fromId: "C", toId: "E" },
            { id: "e5", fromId: "D", toId: "E" },
          ],
          algorithm: "bfs",
          startNodeId: "A",
          traversalOrder: ["A", "B", "C", "D", "E"],
        } as VisualSpec,
      },
      {
        toolKind: "cs-binary-tree",
        label: "Árbol binario",
        description: "Explora recorridos inorder, preorder y postorder",
        defaultSpec: {
          kind: "cs-binary-tree",
          title: "Árbol binario de búsqueda",
          nodes: [
            { id: "n1", value: 50, parentId: undefined },
            { id: "n2", value: 30, parentId: "n1", side: "left" },
            { id: "n3", value: 70, parentId: "n1", side: "right" },
            { id: "n4", value: 20, parentId: "n2", side: "left" },
            { id: "n5", value: 40, parentId: "n2", side: "right" },
            { id: "n6", value: 60, parentId: "n3", side: "left" },
            { id: "n7", value: 80, parentId: "n3", side: "right" },
          ],
          traversalOrder: "inorder",
          visitedSequence: ["n4", "n2", "n5", "n1", "n6", "n3", "n7"],
          isBST: true,
        } as VisualSpec,
      },
    ],
  },
  {
    subject: "Ciencias Naturales",
    color: "bg-sky-100 text-sky-700 border-sky-200",
    icon: "🔬",
    tools: [
      {
        toolKind: "nat-weather",
        label: "Variables meteorológicas",
        description: "Analiza temperatura, humedad, presión y viento",
        defaultSpec: {
          kind: "nat-weather",
          title: "Observatorio meteorológico",
          season: "primavera",
          variables: {
            temperature: 22,
            humidity: 65,
            pressure: 1013,
            windSpeed: 15,
            precipitation: 12,
          },
        } as VisualSpec,
      },
      {
        toolKind: "nat-water-cycle",
        label: "Ciclo del agua",
        description: "Visualiza las etapas del ciclo hidrológico",
        defaultSpec: {
          kind: "nat-water-cycle",
          title: "Ciclo hidrológico",
          stages: [
            { id: "evaporation", label: "Evaporación", description: "El agua se convierte en vapor", cx: 100, cy: 240, radius: 35, color: "#60a5fa", active: false },
            { id: "condensation", label: "Condensación", description: "Formación de nubes", cx: 260, cy: 80, radius: 35, color: "#94a3b8", active: true },
            { id: "precipitation", label: "Precipitación", description: "Lluvia o nieve", cx: 420, cy: 120, radius: 35, color: "#2563eb", active: false },
            { id: "runoff", label: "Escorrentía", description: "Flujo superficial", cx: 460, cy: 260, radius: 30, color: "#06b6d4", active: false },
          ],
          fluxes: [
            { id: "f1", fromId: "evaporation", toId: "condensation", label: "Vapor", rate: 3 },
            { id: "f2", fromId: "condensation", toId: "precipitation", label: "Nubes", rate: 2 },
            { id: "f3", fromId: "precipitation", toId: "runoff", label: "Agua", rate: 2 },
            { id: "f4", fromId: "runoff", toId: "evaporation", label: "Retorno", rate: 1 },
          ],
          humanImpactFactor: 0.25,
        } as VisualSpec,
      },
    ],
  },
  {
    subject: "Cocina",
    color: "bg-orange-100 text-orange-700 border-orange-200",
    icon: "🍳",
    tools: [
      {
        toolKind: "cook-recipe-scaler",
        label: "Escalador de recetas",
        description: "Ajusta cantidades de ingredientes para distintas porciones",
        defaultSpec: {
          kind: "cook-recipe-scaler",
          title: "Pasta con salsa",
          servingsBase: 4,
          servingsCurrent: 4,
          ingredients: [
            { id: "pasta", name: "Pasta", amountBase: 400, unit: "g", amountCurrent: 400, category: "dry" },
            { id: "tomate", name: "Salsa de tomate", amountBase: 300, unit: "ml", amountCurrent: 300, category: "liquid" },
            { id: "ajo", name: "Ajo", amountBase: 3, unit: "dientes", amountCurrent: 3, category: "fresh" },
            { id: "sal", name: "Sal", amountBase: 5, unit: "g", amountCurrent: 5, category: "spice" },
          ],
          nutritionPerServing: { calories: 380, protein: 14, carbs: 72, fat: 4 },
        } as VisualSpec,
      },
      {
        toolKind: "cook-maillard",
        label: "Reacción de Maillard",
        description: "Explora los procesos químicos del dorado de alimentos",
        defaultSpec: {
          kind: "cook-maillard",
          title: "Reacción de Maillard",
          temperature: 150,
          time: 5,
          moisture: 30,
          reactionZones: [
            { id: "z1", label: "Sin reacción", minTemp: 0, maxTemp: 100, color: "#fef3c7", description: "Por debajo de 100°C no ocurre la reacción" },
            { id: "z2", label: "Inicio", minTemp: 100, maxTemp: 140, color: "#fcd34d", description: "Comienza el dorado suave" },
            { id: "z3", label: "Maillard", minTemp: 140, maxTemp: 180, color: "#d97706", description: "Reacción óptima, sabores complejos" },
            { id: "z4", label: "Caramelización", minTemp: 180, maxTemp: 220, color: "#92400e", description: "Caramelización de azúcares" },
            { id: "z5", label: "Carbonización", minTemp: 220, maxTemp: 300, color: "#1c1917", description: "Se quema, amargo" },
          ],
          currentZoneId: "z3",
          colorProgression: [
            { temp: 80, color: "#fffbeb", label: "Crudo" },
            { temp: 130, color: "#fef08a", label: "Dorado claro" },
            { temp: 160, color: "#d97706", label: "Dorado" },
            { temp: 200, color: "#7c2d12", label: "Oscuro" },
          ],
        } as VisualSpec,
      },
    ],
  },
  {
    subject: "Vida Práctica",
    color: "bg-lime-100 text-lime-700 border-lime-200",
    icon: "🏠",
    tools: [
      {
        toolKind: "life-budget",
        label: "Planificador de presupuesto",
        description: "Gestiona ingresos y gastos con visualización de balance",
        defaultSpec: {
          kind: "life-budget",
          title: "Presupuesto mensual",
          monthlyIncome: 100000,
          currency: "$",
          expenses: [
            { id: "alquiler", category: "Alquiler", planned: 35000, color: "#2563eb", essential: true },
            { id: "comida", category: "Alimentación", planned: 20000, color: "#16a34a", essential: true },
            { id: "transporte", category: "Transporte", planned: 10000, color: "#ca8a04", essential: true },
            { id: "servicios", category: "Servicios", planned: 8000, color: "#7c3aed", essential: true },
            { id: "ocio", category: "Ocio", planned: 7000, color: "#db2777", essential: false },
          ],
          savings: { planned: 20000 },
        } as VisualSpec,
      },
      {
        toolKind: "life-time-matrix",
        label: "Matriz de Eisenhower",
        description: "Organiza tareas por urgencia e importancia",
        defaultSpec: {
          kind: "life-time-matrix",
          title: "Gestión del tiempo",
          totalHoursPerWeek: 40,
          tasks: [
            { id: "t1", label: "Estudiar para el examen", urgent: true, important: true, hours: 8, color: "#dc2626" },
            { id: "t2", label: "Ejercicio semanal", urgent: false, important: true, hours: 5, color: "#2563eb" },
            { id: "t3", label: "Responder correos", urgent: true, important: false, hours: 4, color: "#ca8a04" },
            { id: "t4", label: "Ver series", urgent: false, important: false, hours: 6, color: "#94a3b8" },
          ],
          quadrantLabels: {
            I: "Hacer ahora",
            II: "Planificar",
            III: "Delegar",
            IV: "Eliminar",
          },
        } as VisualSpec,
      },
    ],
  },
  // ── Física ────────────────────────────────────────────────────────────────
  {
    subject: "Física",
    color: "bg-violet-100 text-violet-700 border-violet-200",
    icon: "⚡",
    tools: [
      {
        toolKind: "physics-motion-chart",
        label: "Movimiento rectilíneo",
        description: "Graficá posición y velocidad en movimientos MRU y MRUV",
        defaultSpec: {
          kind: "physics-motion-chart",
          title: "MRU – Movimiento Rectilíneo Uniforme",
          motion: {
            type: "MRU",
            time: 10,
            initialPosition: 0,
            initialVelocity: 5,
            acceleration: 0,
          },
          axes: {
            time: { label: "Tiempo", unit: "s" },
            position: { label: "Posición", unit: "m" },
            velocity: { label: "Velocidad", unit: "m/s" },
          },
          series: {
            position: {
              id: "pos",
              label: "Posición",
              data: Array.from({ length: 11 }, (_, t) => ({ t, value: 5 * t })),
              color: "#2563eb",
            },
            velocity: {
              id: "vel",
              label: "Velocidad",
              data: Array.from({ length: 11 }, (_, t) => ({ t, value: 5 })),
              color: "#16a34a",
            },
          },
        } as VisualSpec,
      },
      {
        toolKind: "physics-forces-vectors",
        label: "Diagrama de fuerzas",
        description: "Representá fuerzas con vectores y analizá su resultante",
        defaultSpec: {
          kind: "physics-forces-vectors",
          title: "Diagrama de fuerzas sobre un bloque",
          unit: "N",
          body: { label: "Bloque", shape: "rect", width: 60, height: 40, color: "#94a3b8" },
          vectors: [
            { id: "peso", label: "Peso", magnitude: 50, angleDeg: 270, color: "#dc2626", showComponents: false },
            { id: "normal", label: "Normal", magnitude: 50, angleDeg: 90, color: "#2563eb", showComponents: false },
            { id: "friccion", label: "Fricción", magnitude: 15, angleDeg: 180, color: "#ca8a04", showComponents: false },
            { id: "aplicada", label: "F aplicada", magnitude: 30, angleDeg: 0, color: "#16a34a", showComponents: true },
          ],
          options: { showAxes: true },
        } as VisualSpec,
      },
      {
        toolKind: "energy-chart",
        label: "Energía mecánica",
        description: "Visualizá energía cinética, potencial y la conservación total",
        defaultSpec: {
          kind: "energy-chart",
          title: "Conservación de energía mecánica",
          axes: {
            x: { label: "Tiempo", unit: "s", variable: "tiempo" },
            y: { label: "Energía", unit: "J" },
          },
          series: [
            {
              id: "ec",
              label: "Energía cinética",
              energyType: "Ec",
              data: Array.from({ length: 6 }, (_, t) => ({ x: t * 2, y: Math.round(50 * (1 - Math.cos(t))) })),
              color: "#2563eb",
            },
            {
              id: "ep",
              label: "Energía potencial",
              energyType: "Ep",
              data: Array.from({ length: 6 }, (_, t) => ({ x: t * 2, y: Math.round(50 * Math.cos(t)) })),
              color: "#16a34a",
            },
          ],
          totalSeriesId: "ec",
          conservation: { tolerance: 2, note: "Energía total ≈ 50 J" },
        } as VisualSpec,
      },
      {
        toolKind: "circuit",
        label: "Circuito eléctrico",
        description: "Modelá circuitos con resistencias, baterías e interruptores",
        defaultSpec: {
          kind: "circuit",
          title: "Circuito en serie simple",
          nodes: [
            { id: "n1", label: "+", position: { x: 80, y: 120 } },
            { id: "n2", label: "", position: { x: 280, y: 120 } },
            { id: "n3", label: "", position: { x: 280, y: 280 } },
            { id: "n4", label: "–", position: { x: 80, y: 280 } },
          ],
          components: [
            { id: "bat", type: "battery", label: "9 V", fromNodeId: "n4", toNodeId: "n1", value: 9, unit: "V" },
            { id: "r1", type: "resistor", label: "R1 = 30 Ω", fromNodeId: "n1", toNodeId: "n2", value: 30, unit: "Ω" },
            { id: "r2", type: "resistor", label: "R2 = 60 Ω", fromNodeId: "n2", toNodeId: "n3", value: 60, unit: "Ω" },
            { id: "w1", type: "wire", fromNodeId: "n3", toNodeId: "n4" },
          ],
          measurements: [
            { id: "m1", type: "corriente", value: 0.1, unit: "A", label: "I total" },
            { id: "m2", type: "resistencia", value: 90, unit: "Ω", label: "R equivalente" },
          ],
        } as VisualSpec,
      },
      {
        toolKind: "field-lines",
        label: "Líneas de campo",
        description: "Visualizá campos eléctricos y magnéticos con sus líneas de fuerza",
        defaultSpec: {
          kind: "field-lines",
          title: "Campo eléctrico – cargas opuestas",
          sources: [
            { id: "q1", type: "carga", polarity: "positiva", magnitude: 1, label: "+q", position: { x: 150, y: 200 } },
            { id: "q2", type: "carga", polarity: "negativa", magnitude: 1, label: "–q", position: { x: 350, y: 200 } },
          ],
          lines: [
            { id: "l1", points: [{ x: 165, y: 185 }, { x: 240, y: 160 }, { x: 335, y: 185 }] },
            { id: "l2", points: [{ x: 150, y: 175 }, { x: 150, y: 120 }, { x: 350, y: 120 }, { x: 350, y: 175 }] },
            { id: "l3", points: [{ x: 165, y: 215 }, { x: 240, y: 240 }, { x: 335, y: 215 }] },
          ],
        } as VisualSpec,
      },
      {
        toolKind: "wave-interference",
        label: "Interferencia de ondas",
        description: "Superponé ondas y observá interferencia constructiva y destructiva",
        defaultSpec: {
          kind: "wave-interference",
          title: "Superposición de ondas",
          axes: { x: { label: "Tiempo (ms)", min: 0, max: 10 }, y: { label: "Amplitud", min: -3, max: 3 } },
          samples: 200,
          waves: [
            { id: "w1", label: "Onda 1", amplitude: 1, frequency: 2, phase: 0, color: "#2563eb" },
            { id: "w2", label: "Onda 2", amplitude: 1, frequency: 2, phase: 0, color: "#dc2626" },
          ],
          superposition: { enabled: true, label: "Resultante", color: "#7c3aed" },
          animation: { enabled: false, speed: 1 },
        } as VisualSpec,
      },
      {
        toolKind: "optics-rays",
        label: "Óptica geométrica",
        description: "Trazá rayos de luz en lentes y espejos",
        defaultSpec: {
          kind: "optics-rays",
          title: "Lente convergente",
          layout: { xRange: { min: -300, max: 300 }, yRange: { min: -200, max: 200 } },
          element: { type: "lente-convergente", positionX: 0, height: 160, label: "Lente" },
          object: { position: { x: -200, y: 0 }, height: 60, label: "Objeto" },
          image: { position: { x: 150, y: 0 }, height: -45, label: "Imagen", virtual: false },
          focalPoints: { left: { x: -100, label: "F'" }, right: { x: 100, label: "F" } },
          rays: [
            { id: "r1", label: "Rayo paralelo", kind: "paralelo", points: [{ x: -200, y: 30 }, { x: 0, y: 30 }, { x: 150, y: -22 }], color: "#2563eb" },
            { id: "r2", label: "Rayo central", kind: "centro", points: [{ x: -200, y: 30 }, { x: 0, y: 0 }, { x: 150, y: -22 }], color: "#16a34a" },
            { id: "r3", label: "Rayo focal", kind: "focal", points: [{ x: -200, y: 30 }, { x: 0, y: 30 }, { x: 100, y: 0 }, { x: 150, y: -22 }], color: "#dc2626" },
          ],
        } as VisualSpec,
      },
      {
        toolKind: "physics-simulation",
        label: "Caída libre",
        description: "Simulá el movimiento de caída libre con parámetros ajustables",
        defaultSpec: {
          kind: "physics-simulation",
          title: "Simulación de caída libre",
          model: {
            id: "free-fall",
            label: "Caída libre",
            equation: "y(t) = y₀ + v₀·t − ½·g·t²",
            assumptions: ["Sin resistencia del aire", "g = 9.8 m/s²"],
          },
          parameters: [
            { id: "h0", label: "Altura inicial", input: "number", unit: "m", min: 1, max: 200, step: 1, value: 50 },
            { id: "v0", label: "Velocidad inicial", input: "number", unit: "m/s", min: 0, max: 20, step: 0.5, value: 0 },
          ],
          outputs: [
            { id: "tfall", label: "Tiempo de caída", unit: "s", value: 3.19 },
            { id: "vfinal", label: "Velocidad final", unit: "m/s", value: 31.3 },
          ],
          series: [
            {
              id: "pos",
              label: "Posición",
              unit: "m",
              data: Array.from({ length: 33 }, (_, i) => {
                const t = i * 0.1;
                return { t, value: Math.max(0, 50 - 0.5 * 9.8 * t * t) };
              }),
              color: "#2563eb",
            },
          ],
        } as VisualSpec,
      },
    ],
  },
  // ── Química ───────────────────────────────────────────────────────────────
  {
    subject: "Química",
    color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    icon: "⚗️",
    tools: [
      {
        toolKind: "chem-reaction",
        label: "Reacción química",
        description: "Balanceá ecuaciones y visualizá reactivos y productos con coeficientes",
        defaultSpec: {
          kind: "chem-reaction",
          title: "Combustión del metano",
          reactants: [
            { id: "ch4", formula: "CH₄", label: "Metano", coefficient: 1, moles: 1, state: "g" },
            { id: "o2", formula: "O₂", label: "Oxígeno", coefficient: 2, moles: 2, state: "g" },
          ],
          products: [
            { id: "co2", formula: "CO₂", label: "Dióxido de carbono", coefficient: 1, moles: 1, state: "g" },
            { id: "h2o", formula: "H₂O", label: "Agua", coefficient: 2, moles: 2, state: "l" },
          ],
        } as VisualSpec,
      },
      {
        toolKind: "chem-structure",
        label: "Estructura atómica",
        description: "Explorá la distribución electrónica y modelos moleculares",
        defaultSpec: {
          kind: "chem-structure",
          title: "Estructura del carbono",
          electronDistribution: {
            atom: "C",
            model: "bohr",
            shells: [
              { shell: "K", electrons: 2, label: "n=1" },
              { shell: "L", electrons: 4, label: "n=2" },
            ],
            notation: "1s² 2s² 2p²",
          },
          molecularModels: [
            {
              id: "co2",
              name: "CO₂",
              formula: "CO₂",
              geometry: "lineal",
              atoms: [
                { id: "o1", element: "O", position: { x: -1.2, y: 0, z: 0 }, color: "#dc2626" },
                { id: "c", element: "C", position: { x: 0, y: 0, z: 0 }, color: "#1c1917" },
                { id: "o2", element: "O", position: { x: 1.2, y: 0, z: 0 }, color: "#dc2626" },
              ],
              bonds: [
                { id: "b1", fromId: "o1", toId: "c", order: 2, style: "doble" },
                { id: "b2", fromId: "c", toId: "o2", order: 2, style: "doble" },
              ],
            },
          ],
        } as VisualSpec,
      },
      {
        toolKind: "chem-periodic-table",
        label: "Tabla periódica",
        description: "Explorá propiedades periódicas con colores por categoría o electronegatividad",
        defaultSpec: {
          kind: "chem-periodic-table",
          title: "Tabla periódica – electronegatividad",
          highlightProperty: { key: "electronegativity", label: "Electronegatividad", unit: "Pauling" },
          scale: { type: "sequential", colors: ["#fef9c3", "#1d4ed8"], min: 0.7, max: 4.0 },
          elements: [
            { atomicNumber: 1, symbol: "H", name: "Hidrógeno", period: 1, group: 1, category: "no-metal", properties: { electronegativity: 2.2 } },
            { atomicNumber: 6, symbol: "C", name: "Carbono", period: 2, group: 14, category: "no-metal", properties: { electronegativity: 2.55 } },
            { atomicNumber: 7, symbol: "N", name: "Nitrógeno", period: 2, group: 15, category: "no-metal", properties: { electronegativity: 3.04 } },
            { atomicNumber: 8, symbol: "O", name: "Oxígeno", period: 2, group: 16, category: "no-metal", properties: { electronegativity: 3.44 } },
            { atomicNumber: 9, symbol: "F", name: "Flúor", period: 2, group: 17, category: "halogeno", properties: { electronegativity: 3.98 } },
            { atomicNumber: 11, symbol: "Na", name: "Sodio", period: 3, group: 1, category: "metal-alcalino", properties: { electronegativity: 0.93 } },
            { atomicNumber: 17, symbol: "Cl", name: "Cloro", period: 3, group: 17, category: "halogeno", properties: { electronegativity: 3.16 } },
          ],
          focusElements: ["H", "C", "N", "O", "F", "Na", "Cl"],
        } as VisualSpec,
      },
      {
        toolKind: "chem-vsepr",
        label: "Geometría molecular (VSEPR)",
        description: "Analizá geometrías moleculares y ángulos de enlace",
        defaultSpec: {
          kind: "chem-vsepr",
          title: "Geometría molecular VSEPR",
          geometries: [
            { id: "lineal", label: "Lineal", expectedAngles: [180], description: "2 pares enlazantes" },
            { id: "angular", label: "Angular", expectedAngles: [104.5], description: "2 enlazantes + 2 libres" },
            { id: "trigonal", label: "Trigonal plana", expectedAngles: [120], description: "3 pares enlazantes" },
            { id: "tetraedrica", label: "Tetraédrica", expectedAngles: [109.5], description: "4 pares enlazantes" },
          ],
          molecules: [
            {
              id: "h2o",
              name: "Agua",
              formula: "H₂O",
              geometry: "angular",
              atoms: [
                { id: "o", element: "O", position: { x: 0.5, y: 0.4 }, role: "central", color: "#dc2626" },
                { id: "h1", element: "H", position: { x: 0.25, y: 0.65 }, role: "ligand", color: "#94a3b8" },
                { id: "h2", element: "H", position: { x: 0.75, y: 0.65 }, role: "ligand", color: "#94a3b8" },
              ],
              bonds: [
                { id: "b1", fromId: "o", toId: "h1", order: 1 },
                { id: "b2", fromId: "o", toId: "h2", order: 1 },
              ],
              angles: [
                { id: "a1", label: "∠HOH", atomIds: ["h1", "o", "h2"], expectedAngle: 104.5 },
              ],
              notes: "El agua es angular por dos pares de electrones no enlazantes",
            },
          ],
          defaultMoleculeId: "h2o",
        } as VisualSpec,
      },
      {
        toolKind: "chem-titration",
        label: "Curva de titulación",
        description: "Analizá el punto de equivalencia ácido-base con indicadores",
        defaultSpec: {
          kind: "chem-titration",
          title: "Titulación ácido fuerte – base fuerte",
          axes: {
            x: { label: "Volumen NaOH (mL)", min: 0, max: 50 },
            y: { label: "pH", min: 0, max: 14 },
          },
          curve: {
            points: [
              { volume: 0, pH: 1.0 }, { volume: 10, pH: 1.37 }, { volume: 20, pH: 1.95 },
              { volume: 24, pH: 2.69 }, { volume: 25, pH: 7.0 }, { volume: 26, pH: 11.3 },
              { volume: 30, pH: 12.1 }, { volume: 40, pH: 12.52 }, { volume: 50, pH: 12.7 },
            ],
            color: "#2563eb",
          },
          milestones: [
            { id: "inicio", label: "Inicio", volume: 0, pH: 1.0, type: "start" },
            { id: "eq", label: "Punto de equivalencia", volume: 25, pH: 7.0, type: "equivalence" },
          ],
          indicator: {
            title: "Fenolftaleína",
            ranges: [
              { min: 0, max: 8.2, color: "#fef9c3", label: "Incoloro" },
              { min: 8.2, max: 10, color: "#fbcfe8", label: "Rosa" },
              { min: 10, max: 14, color: "#ec4899", label: "Fucsia" },
            ],
            currentPH: 7.0,
          },
        } as VisualSpec,
      },
    ],
  },
  // ── Matemáticas ───────────────────────────────────────────────────────────
  {
    subject: "Matemáticas",
    color: "bg-yellow-100 text-yellow-700 border-yellow-200",
    icon: "📐",
    tools: [
      {
        toolKind: "funciones-graficas",
        label: "Funciones y gráficas",
        description: "Graficá funciones lineales, cuadráticas y paramétricas con puntos clave",
        defaultSpec: {
          kind: "funciones-graficas",
          title: "Funciones lineales y cuadráticas",
          axes: { x: { label: "x", min: -5, max: 5 }, y: { label: "y", min: -10, max: 10 } },
          functions: [
            {
              id: "f1",
              type: "lineal",
              expression: "2x + 1",
              domain: { start: -5, end: 5, step: 0.5 },
              keyPoints: [{ x: 0, y: 1, label: "Ordenada al origen" }, { x: -0.5, y: 0, label: "Raíz" }],
              color: "#2563eb",
              notes: "Pendiente positiva m=2",
            },
            {
              id: "f2",
              type: "cuadratica",
              expression: "x² - 3",
              domain: { start: -5, end: 5, step: 0.5 },
              keyPoints: [{ x: 0, y: -3, label: "Vértice" }, { x: 1.73, y: 0, label: "Raíz" }],
              color: "#dc2626",
              notes: "Parábola vertical hacia arriba",
            },
          ],
        } as VisualSpec,
      },
      {
        toolKind: "geometria-plana-espacial",
        label: "Geometría plana y espacial",
        description: "Explorá figuras 2D y 3D con sus propiedades, fórmulas y medidas",
        defaultSpec: {
          kind: "geometria-plana-espacial",
          title: "Figuras geométricas",
          figures: [
            {
              id: "triangulo",
              name: "Triángulo rectángulo",
              dimension: "plana",
              type: "triangulo",
              parameters: [
                { label: "Cateto a", value: 3, unit: "cm" },
                { label: "Cateto b", value: 4, unit: "cm" },
                { label: "Hipotenusa", value: 5, unit: "cm" },
              ],
              angles: [
                { id: "ang1", vertex: "A", valueDeg: 90, label: "90°" },
                { id: "ang2", vertex: "B", valueDeg: 53.1, label: "≈53°" },
                { id: "ang3", vertex: "C", valueDeg: 36.9, label: "≈37°" },
              ],
              properties: [
                { label: "Área", value: "6 cm²" },
                { label: "Perímetro", value: "12 cm" },
              ],
              formula: "A = (base × altura) / 2",
            },
            {
              id: "esfera",
              name: "Esfera",
              dimension: "espacial",
              type: "esfera",
              parameters: [{ label: "Radio", value: 4, unit: "cm" }],
              properties: [
                { label: "Área superficial", value: "≈ 201.06 cm²" },
                { label: "Volumen", value: "≈ 268.08 cm³" },
              ],
              formula: "V = (4/3)·π·r³",
            },
          ],
        } as VisualSpec,
      },
      {
        toolKind: "trigonometria-avanzada",
        label: "Trigonometría y círculo unitario",
        description: "Explorá funciones trigonométricas, amplitud, período y desfasaje",
        defaultSpec: {
          kind: "trigonometria-avanzada",
          title: "Trigonometría – círculo unitario",
          unitCircle: {
            radius: 1,
            points: [
              { angleDeg: 0, x: 1, y: 0, label: "0°" },
              { angleDeg: 30, x: 0.866, y: 0.5, label: "30°" },
              { angleDeg: 45, x: 0.707, y: 0.707, label: "45°" },
              { angleDeg: 60, x: 0.5, y: 0.866, label: "60°" },
              { angleDeg: 90, x: 0, y: 1, label: "90°" },
              { angleDeg: 180, x: -1, y: 0, label: "180°" },
              { angleDeg: 270, x: 0, y: -1, label: "270°" },
            ],
          },
          functions: [
            {
              id: "seno",
              type: "seno",
              expression: "sen(x)",
              amplitude: 1,
              period: 360,
              phaseShift: 0,
              keyPoints: [
                { x: 0, y: 0, label: "Origen" },
                { x: 90, y: 1, label: "Máximo" },
                { x: 270, y: -1, label: "Mínimo" },
              ],
            },
            {
              id: "coseno",
              type: "coseno",
              expression: "cos(x)",
              amplitude: 1,
              period: 360,
              phaseShift: 0,
              keyPoints: [
                { x: 0, y: 1, label: "Máximo" },
                { x: 180, y: -1, label: "Mínimo" },
              ],
            },
          ],
          angles: [
            { id: "a30", label: "30°", valueDeg: 30, valueRad: "π/6", ratio: "1/2" },
            { id: "a45", label: "45°", valueDeg: 45, valueRad: "π/4", ratio: "√2/2" },
            { id: "a60", label: "60°", valueDeg: 60, valueRad: "π/3", ratio: "√3/2" },
          ],
        } as VisualSpec,
      },
      {
        toolKind: "algebra-calculo-visual",
        label: "Álgebra y cálculo",
        description: "Visualizá sistemas de ecuaciones, derivadas e integrales definidas",
        defaultSpec: {
          kind: "algebra-calculo-visual",
          title: "Álgebra y cálculo diferencial",
          systems: [
            {
              id: "sys1",
              equations: ["2x + y = 8", "x – y = 1"],
              solution: { x: 3, y: 2 },
              steps: ["Despejamos y de la 2.ª ecuación: y = x – 1", "Sustituimos en la 1.ª: 2x + (x–1) = 8 → x = 3", "Luego y = 2"],
            },
          ],
          derivatives: [
            {
              id: "d1",
              function: "x³ – 3x",
              derivative: "3x² – 3",
              criticalPoints: [
                { x: -1, y: 2, label: "Máximo local" },
                { x: 1, y: -2, label: "Mínimo local" },
              ],
              notes: "Igualamos f'(x)=0 para hallar extremos",
            },
          ],
          integrals: [
            {
              id: "i1",
              function: "x²",
              bounds: { lower: 0, upper: 3 },
              area: 9,
              notes: "∫₀³ x² dx = [x³/3]₀³ = 9",
            },
          ],
        } as VisualSpec,
      },
    ],
  },
  // ── Gráficos generales ────────────────────────────────────────────────────
  {
    subject: "Gráficos",
    color: "bg-gray-100 text-gray-700 border-gray-200",
    icon: "📊",
    tools: [
      {
        toolKind: "chart",
        label: "Gráfico de datos",
        description: "Creá gráficos de barras, líneas, áreas, torta y dispersión",
        defaultSpec: {
          kind: "chart",
          chartType: "bar",
          title: "Gráfico de barras",
          xAxis: { label: "Categorías" },
          yAxis: { label: "Valores" },
          series: [
            {
              id: "s1",
              label: "Serie A",
              data: [
                { x: "Ene", y: 40 }, { x: "Feb", y: 55 }, { x: "Mar", y: 48 },
                { x: "Abr", y: 70 }, { x: "May", y: 62 },
              ],
              color: "#2563eb",
            },
          ],
        } as VisualSpec,
      },
      {
        toolKind: "timeline",
        label: "Línea de tiempo",
        description: "Organizá eventos históricos o procesos en orden cronológico",
        defaultSpec: {
          kind: "timeline",
          title: "Línea de tiempo",
          range: { start: "1900", end: "2000" },
          events: [
            { id: "e1", title: "Primer hecho", date: "1920-01-01", description: "Descripción del primer hecho" },
            { id: "e2", title: "Segundo hecho", date: "1950-06-15", description: "Descripción del segundo hecho" },
            { id: "e3", title: "Tercer hecho", date: "1980-09-30", description: "Descripción del tercer hecho" },
          ],
          markers: [],
        } as VisualSpec,
      },
      {
        toolKind: "concept-map",
        label: "Mapa conceptual",
        description: "Conectá conceptos con relaciones etiquetadas",
        defaultSpec: {
          kind: "concept-map",
          title: "Mapa conceptual",
          nodes: [
            { id: "n1", label: "Concepto central", group: "main" },
            { id: "n2", label: "Concepto A", group: "sub" },
            { id: "n3", label: "Concepto B", group: "sub" },
            { id: "n4", label: "Concepto C", group: "sub" },
          ],
          links: [
            { id: "l1", sourceId: "n1", targetId: "n2", relation: "incluye" },
            { id: "l2", sourceId: "n1", targetId: "n3", relation: "genera" },
            { id: "l3", sourceId: "n2", targetId: "n4", relation: "depende de" },
          ],
        } as VisualSpec,
      },
      {
        toolKind: "flow",
        label: "Diagrama de flujo",
        description: "Representá procesos con decisiones, pasos y conexiones",
        defaultSpec: {
          kind: "flow",
          title: "Diagrama de flujo",
          steps: [
            { id: "s1", label: "Inicio", type: "start" },
            { id: "s2", label: "Paso 1", type: "process", description: "Descripción del paso" },
            { id: "s3", label: "¿Condición?", type: "decision" },
            { id: "s4", label: "Resultado A", type: "process" },
            { id: "s5", label: "Resultado B", type: "process" },
            { id: "s6", label: "Fin", type: "end" },
          ],
          connections: [
            { id: "c1", fromId: "s1", toId: "s2" },
            { id: "c2", fromId: "s2", toId: "s3" },
            { id: "c3", fromId: "s3", toId: "s4", label: "Sí" },
            { id: "c4", fromId: "s3", toId: "s5", label: "No" },
            { id: "c5", fromId: "s4", toId: "s6" },
            { id: "c6", fromId: "s5", toId: "s6" },
          ],
        } as VisualSpec,
      },
      {
        toolKind: "map",
        label: "Mapa interactivo",
        description: "Agregá marcadores y rutas sobre un mapa con coordenadas",
        defaultSpec: {
          kind: "map",
          title: "Mapa de ubicaciones",
          viewport: { center: [-34.6, -58.4], zoom: 5 },
          markers: [
            { id: "m1", label: "Buenos Aires", coordinates: [-34.6037, -58.3816], description: "Capital de Argentina" },
            { id: "m2", label: "Córdoba", coordinates: [-31.4135, -64.1811], description: "Segunda ciudad" },
            { id: "m3", label: "Rosario", coordinates: [-32.9468, -60.6393], description: "Tercera ciudad" },
          ],
          routes: [],
        } as VisualSpec,
      },
    ],
  },
];

export default function HerramientaPicker({ isOpen, onSelect, onClose }: HerramientaPickerProps) {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSelect = (entry: SubjectEntry, tool: ToolEntry) => {
    const detail = JSON.stringify({
      subject: entry.subject,
      toolKind: tool.toolKind,
      title: tool.label,
      spec: tool.defaultSpec,
    });
    onSelect(detail);
    setSelectedSubject(null);
  };

  const activeSubject = selectedSubject
    ? SUBJECTS.find((s) => s.subject === selectedSubject) ?? null
    : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-3xl rounded-2xl bg-white shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <div className="flex items-center gap-3">
            {activeSubject ? (
              <button
                type="button"
                onClick={() => setSelectedSubject(null)}
                className="text-sm text-blue-600 hover:underline"
              >
                ← Volver
              </button>
            ) : null}
            <h2 className="text-lg font-semibold text-slate-900">
              {activeSubject ? activeSubject.subject : "Seleccioná una herramienta interactiva"}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => { setSelectedSubject(null); onClose(); }}
            className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 flex-1">
          {activeSubject ? (
            /* Tool list */
            <div className="grid gap-3">
              {activeSubject.tools.map((tool) => (
                <button
                  key={tool.toolKind}
                  type="button"
                  onClick={() => handleSelect(activeSubject, tool)}
                  className="text-left rounded-xl border border-slate-200 bg-white p-4 hover:border-blue-400 hover:bg-blue-50 transition-colors"
                >
                  <p className="font-semibold text-slate-800">{tool.label}</p>
                  <p className="mt-1 text-sm text-slate-500">{tool.description}</p>
                </button>
              ))}
            </div>
          ) : (
            /* Subject grid */
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SUBJECTS.map((entry) => (
                <button
                  key={entry.subject}
                  type="button"
                  onClick={() => setSelectedSubject(entry.subject)}
                  className={`text-left rounded-xl border p-4 hover:shadow-md transition-shadow ${entry.color}`}
                >
                  <div className="text-2xl mb-1">{entry.icon}</div>
                  <p className="font-semibold text-sm">{entry.subject}</p>
                  <p className="text-xs mt-0.5 opacity-70">{entry.tools.length} herramienta{entry.tools.length !== 1 ? "s" : ""}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
