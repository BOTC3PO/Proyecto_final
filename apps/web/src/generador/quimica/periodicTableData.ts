import type { ChemPeriodicTableElement } from "../../visualizadores/types";

export const PERIODIC_TABLE_ELEMENTS: ChemPeriodicTableElement[] = [
  {
    atomicNumber: 1,
    symbol: "H",
    name: "Hidrógeno",
    period: 1,
    group: 1,
    category: "no metal",
    properties: { electronegativity: 2.2, atomicRadius: 53, ionizationEnergy: 1312 }
  },
  {
    atomicNumber: 2,
    symbol: "He",
    name: "Helio",
    period: 1,
    group: 18,
    category: "no metal",
    properties: { atomicRadius: 31, ionizationEnergy: 2372 }
  },
  {
    atomicNumber: 3,
    symbol: "Li",
    name: "Litio",
    period: 2,
    group: 1,
    category: "metal",
    properties: { electronegativity: 0.98, atomicRadius: 167, ionizationEnergy: 520 }
  },
  {
    atomicNumber: 4,
    symbol: "Be",
    name: "Berilio",
    period: 2,
    group: 2,
    category: "metal",
    properties: { electronegativity: 1.57, atomicRadius: 112, ionizationEnergy: 900 }
  },
  {
    atomicNumber: 5,
    symbol: "B",
    name: "Boro",
    period: 2,
    group: 13,
    category: "metaloide",
    properties: { electronegativity: 2.04, atomicRadius: 87, ionizationEnergy: 801 }
  },
  {
    atomicNumber: 6,
    symbol: "C",
    name: "Carbono",
    period: 2,
    group: 14,
    category: "no metal",
    properties: { electronegativity: 2.55, atomicRadius: 67, ionizationEnergy: 1086 }
  },
  {
    atomicNumber: 7,
    symbol: "N",
    name: "Nitrógeno",
    period: 2,
    group: 15,
    category: "no metal",
    properties: { electronegativity: 3.04, atomicRadius: 56, ionizationEnergy: 1402 }
  },
  {
    atomicNumber: 8,
    symbol: "O",
    name: "Oxígeno",
    period: 2,
    group: 16,
    category: "no metal",
    properties: { electronegativity: 3.44, atomicRadius: 48, ionizationEnergy: 1314 }
  },
  {
    atomicNumber: 9,
    symbol: "F",
    name: "Flúor",
    period: 2,
    group: 17,
    category: "no metal",
    properties: { electronegativity: 3.98, atomicRadius: 42, ionizationEnergy: 1681 }
  },
  {
    atomicNumber: 10,
    symbol: "Ne",
    name: "Neón",
    period: 2,
    group: 18,
    category: "no metal",
    properties: { atomicRadius: 38, ionizationEnergy: 2081 }
  },
  {
    atomicNumber: 11,
    symbol: "Na",
    name: "Sodio",
    period: 3,
    group: 1,
    category: "metal",
    properties: { electronegativity: 0.93, atomicRadius: 190, ionizationEnergy: 496 }
  },
  {
    atomicNumber: 12,
    symbol: "Mg",
    name: "Magnesio",
    period: 3,
    group: 2,
    category: "metal",
    properties: { electronegativity: 1.31, atomicRadius: 145, ionizationEnergy: 738 }
  },
  {
    atomicNumber: 13,
    symbol: "Al",
    name: "Aluminio",
    period: 3,
    group: 13,
    category: "metal",
    properties: { electronegativity: 1.61, atomicRadius: 118, ionizationEnergy: 578 }
  },
  {
    atomicNumber: 14,
    symbol: "Si",
    name: "Silicio",
    period: 3,
    group: 14,
    category: "metaloide",
    properties: { electronegativity: 1.9, atomicRadius: 111, ionizationEnergy: 787 }
  },
  {
    atomicNumber: 15,
    symbol: "P",
    name: "Fósforo",
    period: 3,
    group: 15,
    category: "no metal",
    properties: { electronegativity: 2.19, atomicRadius: 98, ionizationEnergy: 1012 }
  },
  {
    atomicNumber: 16,
    symbol: "S",
    name: "Azufre",
    period: 3,
    group: 16,
    category: "no metal",
    properties: { electronegativity: 2.58, atomicRadius: 88, ionizationEnergy: 1000 }
  },
  {
    atomicNumber: 17,
    symbol: "Cl",
    name: "Cloro",
    period: 3,
    group: 17,
    category: "no metal",
    properties: { electronegativity: 3.16, atomicRadius: 79, ionizationEnergy: 1251 }
  },
  {
    atomicNumber: 18,
    symbol: "Ar",
    name: "Argón",
    period: 3,
    group: 18,
    category: "no metal",
    properties: { atomicRadius: 71, ionizationEnergy: 1521 }
  },
  {
    atomicNumber: 19,
    symbol: "K",
    name: "Potasio",
    period: 4,
    group: 1,
    category: "metal",
    properties: { electronegativity: 0.82, atomicRadius: 243, ionizationEnergy: 419 }
  },
  {
    atomicNumber: 20,
    symbol: "Ca",
    name: "Calcio",
    period: 4,
    group: 2,
    category: "metal",
    properties: { electronegativity: 1.0, atomicRadius: 194, ionizationEnergy: 590 }
  },
  {
    atomicNumber: 26,
    symbol: "Fe",
    name: "Hierro",
    period: 4,
    group: 8,
    category: "metal",
    properties: { electronegativity: 1.83, atomicRadius: 156, ionizationEnergy: 762 }
  },
  {
    atomicNumber: 29,
    symbol: "Cu",
    name: "Cobre",
    period: 4,
    group: 11,
    category: "metal",
    properties: { electronegativity: 1.9, atomicRadius: 145, ionizationEnergy: 746 }
  },
  {
    atomicNumber: 30,
    symbol: "Zn",
    name: "Zinc",
    period: 4,
    group: 12,
    category: "metal",
    properties: { electronegativity: 1.65, atomicRadius: 142, ionizationEnergy: 906 }
  },
  {
    atomicNumber: 31,
    symbol: "Ga",
    name: "Galio",
    period: 4,
    group: 13,
    category: "metal",
    properties: { electronegativity: 1.81, atomicRadius: 136, ionizationEnergy: 579 }
  },
  {
    atomicNumber: 32,
    symbol: "Ge",
    name: "Germanio",
    period: 4,
    group: 14,
    category: "metaloide",
    properties: { electronegativity: 2.01, atomicRadius: 125, ionizationEnergy: 762 }
  },
  {
    atomicNumber: 33,
    symbol: "As",
    name: "Arsénico",
    period: 4,
    group: 15,
    category: "metaloide",
    properties: { electronegativity: 2.18, atomicRadius: 114, ionizationEnergy: 947 }
  },
  {
    atomicNumber: 35,
    symbol: "Br",
    name: "Bromo",
    period: 4,
    group: 17,
    category: "no metal",
    properties: { electronegativity: 2.96, atomicRadius: 94, ionizationEnergy: 1140 }
  },
  {
    atomicNumber: 55,
    symbol: "Cs",
    name: "Cesio",
    period: 6,
    group: 1,
    category: "metal",
    properties: { electronegativity: 0.79, atomicRadius: 265, ionizationEnergy: 376 }
  },
  {
    atomicNumber: 56,
    symbol: "Ba",
    name: "Bario",
    period: 6,
    group: 2,
    category: "metal",
    properties: { electronegativity: 0.89, atomicRadius: 222, ionizationEnergy: 503 }
  }
];
