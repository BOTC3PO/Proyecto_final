import type { ChemVSEPRSpec } from "../../visualizadores/types";

export const VSEPR_VISUAL_SPEC: ChemVSEPRSpec = {
  kind: "chem-vsepr",
  title: "Geometrías VSEPR esenciales",
  description: "Modelos 2D simplificados para estimar ángulos de enlace.",
  geometries: [
    {
      id: "lineal",
      label: "Lineal",
      expectedAngles: [180],
      description: "Dos regiones electrónicas alrededor del átomo central.",
    },
    {
      id: "angular",
      label: "Angular",
      expectedAngles: [104.5],
      description: "Pares solitarios comprimen el ángulo ideal.",
    },
    {
      id: "trigonal",
      label: "Trigonal plana",
      expectedAngles: [120],
      description: "Tres regiones electrónicas en un mismo plano.",
    },
    {
      id: "tetraedrica",
      label: "Tetraédrica",
      expectedAngles: [109.5],
      description: "Cuatro pares enlazantes en el espacio.",
    },
  ],
  molecules: [
    {
      id: "co2",
      name: "Dióxido de carbono",
      formula: "CO₂",
      geometry: "lineal",
      atoms: [
        { id: "o1", element: "O", position: { x: -1.2, y: 0 }, role: "ligand" },
        { id: "c", element: "C", position: { x: 0, y: 0 }, role: "central" },
        { id: "o2", element: "O", position: { x: 1.2, y: 0 }, role: "ligand" },
      ],
      bonds: [
        { id: "co2-b1", fromId: "c", toId: "o1", order: 2 },
        { id: "co2-b2", fromId: "c", toId: "o2", order: 2 },
      ],
      angles: [
        {
          id: "co2-angle",
          label: "∠ O–C–O",
          atomIds: ["o1", "c", "o2"],
          expectedAngle: 180,
        },
      ],
      notes: "Sin pares solitarios en el carbono central.",
    },
    {
      id: "h2o",
      name: "Agua",
      formula: "H₂O",
      geometry: "angular",
      atoms: [
        { id: "h1", element: "H", position: { x: -0.9, y: 0.5 }, role: "ligand" },
        { id: "o", element: "O", position: { x: 0, y: 0 }, role: "central" },
        { id: "h2", element: "H", position: { x: 0.9, y: 0.5 }, role: "ligand" },
      ],
      bonds: [
        { id: "h2o-b1", fromId: "o", toId: "h1", order: 1 },
        { id: "h2o-b2", fromId: "o", toId: "h2", order: 1 },
      ],
      angles: [
        {
          id: "h2o-angle",
          label: "∠ H–O–H",
          atomIds: ["h1", "o", "h2"],
          expectedAngle: 104.5,
        },
      ],
      notes: "Dos pares solitarios reducen el ángulo ideal tetraédrico.",
    },
    {
      id: "ch4",
      name: "Metano",
      formula: "CH₄",
      geometry: "tetraedrica",
      atoms: [
        { id: "h1", element: "H", position: { x: 0, y: 1 }, role: "ligand" },
        { id: "h2", element: "H", position: { x: 1, y: 0 }, role: "ligand" },
        { id: "c", element: "C", position: { x: 0, y: 0 }, role: "central" },
        { id: "h3", element: "H", position: { x: -1, y: 0 }, role: "ligand" },
        { id: "h4", element: "H", position: { x: 0, y: -1 }, role: "ligand" },
      ],
      bonds: [
        { id: "ch4-b1", fromId: "c", toId: "h1", order: 1 },
        { id: "ch4-b2", fromId: "c", toId: "h2", order: 1 },
        { id: "ch4-b3", fromId: "c", toId: "h3", order: 1 },
        { id: "ch4-b4", fromId: "c", toId: "h4", order: 1 },
      ],
      angles: [
        {
          id: "ch4-angle-1",
          label: "∠ H–C–H (1)",
          atomIds: ["h1", "c", "h2"],
          expectedAngle: 109.5,
        },
        {
          id: "ch4-angle-2",
          label: "∠ H–C–H (2)",
          atomIds: ["h1", "c", "h3"],
          expectedAngle: 109.5,
        },
      ],
      notes: "La geometría tetraédrica es una proyección 2D.",
    },
  ],
  defaultMoleculeId: "h2o",
};
