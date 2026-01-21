// src/generators/quimica/74_configuracion_electronica.ts
// src/generators/quimica/74_configuracion_electronica.ts
import type { GeneratorFn, QuizExercise } from "./generico";
import type { ChemElectronShell, ChemStructureSpec } from "../../visualizadores/types";

interface ElementoConfig {
  nombre: string;
  simbolo: string;
  Z: number;
  configuracionCorrecta: string;
  otras: string[];
  visualSpec: ChemStructureSpec;
}

const buildShells = (z: number): ChemElectronShell[] => {
  const shellOrder = [
    { shell: "K", max: 2 },
    { shell: "L", max: 8 },
    { shell: "M", max: 18 },
    { shell: "N", max: 32 },
  ];
  let remaining = z;
  return shellOrder
    .map(({ shell, max }) => {
      const electrons = Math.max(0, Math.min(remaining, max));
      remaining -= electrons;
      return { shell, electrons };
    })
    .filter((item) => item.electrons > 0);
};

const ELEMENTOS_CONFIG: ElementoConfig[] = [
  {
    nombre: "hidrógeno",
    simbolo: "H",
    Z: 1,
    configuracionCorrecta: "1s¹",
    otras: ["1s²", "2s¹", "1p¹"],
    visualSpec: {
      kind: "chem-structure",
      title: "Nube electrónica: Hidrógeno",
      description: "Representación probabilística del electrón en el átomo.",
      electronDistribution: {
        atom: "H",
        model: "nube-electronica",
        notation: "1s¹",
        shells: buildShells(1),
        notes: "La nube refleja la probabilidad de encontrar al electrón.",
      },
      orbitals: {
        atom: "H",
        notation: "1s¹",
        subshells: [
          {
            id: "h-1s",
            type: "s",
            energyLevel: 1,
            electrons: 1,
            maxElectrons: 2,
            occupancy: [{ orbital: "1s", electrons: 1 }],
          },
        ],
      },
    },
  },
  {
    nombre: "helio",
    simbolo: "He",
    Z: 2,
    configuracionCorrecta: "1s²",
    otras: ["1s¹", "2s²", "1s²2s¹"],
    visualSpec: {
      kind: "chem-structure",
      title: "Configuración: Helio",
      description: "Orbitales completos en el primer nivel.",
      electronDistribution: {
        atom: "He",
        model: "nube-electronica",
        notation: "1s²",
        shells: buildShells(2),
      },
      orbitals: {
        atom: "He",
        notation: "1s²",
        subshells: [
          {
            id: "he-1s",
            type: "s",
            energyLevel: 1,
            electrons: 2,
            maxElectrons: 2,
            occupancy: [{ orbital: "1s", electrons: 2 }],
          },
        ],
      },
    },
  },
  {
    nombre: "carbono",
    simbolo: "C",
    Z: 6,
    configuracionCorrecta: "1s² 2s² 2p²",
    otras: ["1s² 2s² 2p⁴", "1s² 2s¹ 2p³", "1s² 2s² 2p³"],
    visualSpec: {
      kind: "chem-structure",
      title: "Configuración: Carbono",
      description: "Distribución en niveles K y L con subniveles s y p.",
      electronDistribution: {
        atom: "C",
        model: "nube-electronica",
        notation: "1s² 2s² 2p²",
        shells: buildShells(6),
      },
      orbitals: {
        atom: "C",
        notation: "1s² 2s² 2p²",
        subshells: [
          {
            id: "c-1s",
            type: "s",
            energyLevel: 1,
            electrons: 2,
            maxElectrons: 2,
            occupancy: [{ orbital: "1s", electrons: 2 }],
          },
          {
            id: "c-2s",
            type: "s",
            energyLevel: 2,
            electrons: 2,
            maxElectrons: 2,
            occupancy: [{ orbital: "2s", electrons: 2 }],
          },
          {
            id: "c-2p",
            type: "p",
            energyLevel: 2,
            electrons: 2,
            maxElectrons: 6,
            occupancy: [
              { orbital: "2px", electrons: 1 },
              { orbital: "2py", electrons: 1 },
              { orbital: "2pz", electrons: 0 },
            ],
            notes: "Regla de Hund: se llenan primero con electrones desapareados.",
          },
        ],
      },
    },
  },
  {
    nombre: "oxígeno",
    simbolo: "O",
    Z: 8,
    configuracionCorrecta: "1s² 2s² 2p⁴",
    otras: ["1s² 2s² 2p⁶", "1s² 2s² 2p²", "1s² 2s¹ 2p⁵"],
    visualSpec: {
      kind: "chem-structure",
      title: "Configuración: Oxígeno",
      description: "Subnivel 2p casi completo.",
      electronDistribution: {
        atom: "O",
        model: "nube-electronica",
        notation: "1s² 2s² 2p⁴",
        shells: buildShells(8),
      },
      orbitals: {
        atom: "O",
        notation: "1s² 2s² 2p⁴",
        subshells: [
          {
            id: "o-1s",
            type: "s",
            energyLevel: 1,
            electrons: 2,
            maxElectrons: 2,
          },
          {
            id: "o-2s",
            type: "s",
            energyLevel: 2,
            electrons: 2,
            maxElectrons: 2,
          },
          {
            id: "o-2p",
            type: "p",
            energyLevel: 2,
            electrons: 4,
            maxElectrons: 6,
            occupancy: [
              { orbital: "2px", electrons: 2 },
              { orbital: "2py", electrons: 1 },
              { orbital: "2pz", electrons: 1 },
            ],
          },
        ],
      },
    },
  },
  {
    nombre: "neón",
    simbolo: "Ne",
    Z: 10,
    configuracionCorrecta: "1s² 2s² 2p⁶",
    otras: ["1s² 2s² 2p⁵", "1s² 2s¹ 2p⁶", "1s² 2s² 2p⁴"],
    visualSpec: {
      kind: "chem-structure",
      title: "Configuración: Neón",
      description: "Capa L completa con subnivel p lleno.",
      electronDistribution: {
        atom: "Ne",
        model: "nube-electronica",
        notation: "1s² 2s² 2p⁶",
        shells: buildShells(10),
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
            id: "ne-2s",
            type: "s",
            energyLevel: 2,
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
    },
  },
  {
    nombre: "sodio",
    simbolo: "Na",
    Z: 11,
    configuracionCorrecta: "[Ne] 3s¹",
    otras: ["[Ne] 3s²", "[He] 2s² 2p⁶ 3s¹", "1s² 2s² 2p⁶"],
    visualSpec: {
      kind: "chem-structure",
      title: "Configuración: Sodio",
      description: "Primer electrón en la capa M.",
      electronDistribution: {
        atom: "Na",
        model: "nube-electronica",
        notation: "[Ne] 3s¹",
        shells: buildShells(11),
      },
      orbitals: {
        atom: "Na",
        notation: "[Ne] 3s¹",
        subshells: [
          {
            id: "na-3s",
            type: "s",
            energyLevel: 3,
            electrons: 1,
            maxElectrons: 2,
            notes: "Electrón de valencia altamente reactivo.",
          },
        ],
      },
    },
  },
];

export const generarConfiguracionElectronica: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = Math.floor(Math.random() * ELEMENTOS_CONFIG.length);
  const el = ELEMENTOS_CONFIG[index];

  const opcionesSet = new Set<string>();
  opcionesSet.add(el.configuracionCorrecta);
  for (const o of el.otras) {
    if (opcionesSet.size >= 4) break;
    opcionesSet.add(o);
  }
  const opciones = Array.from(opcionesSet);
  opciones.sort(() => Math.random() - 0.5);

  const indiceCorrecto = opciones.indexOf(el.configuracionCorrecta);

  const enunciado =
    `¿Cuál es la configuración electrónica correcta del elemento ${el.nombre} (${el.simbolo}), Z = ${el.Z}?`;

  return {
    idTema: 74,
    tituloTema: "Configuración electrónica",
    dificultad,
    tipo: "quiz",
    enunciado,
    opciones,
    indiceCorrecto,
    explicacion:
      "La configuración electrónica se obtiene llenando los orbitales según el principio de Aufbau, el principio de exclusión de Pauli y la regla de Hund.",
    visualSpec: el.visualSpec,
  };
};
