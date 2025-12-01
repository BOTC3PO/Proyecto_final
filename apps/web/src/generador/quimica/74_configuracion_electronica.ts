// src/generators/quimica/74_configuracion_electronica.ts
// src/generators/quimica/74_configuracion_electronica.ts
import type { GeneratorFn, QuizExercise } from "./generico";

interface ElementoConfig {
  nombre: string;
  simbolo: string;
  Z: number;
  configuracionCorrecta: string;
  otras: string[];
}

const ELEMENTOS_CONFIG: ElementoConfig[] = [
  {
    nombre: "hidrógeno",
    simbolo: "H",
    Z: 1,
    configuracionCorrecta: "1s¹",
    otras: ["1s²", "2s¹", "1p¹"],
  },
  {
    nombre: "helio",
    simbolo: "He",
    Z: 2,
    configuracionCorrecta: "1s²",
    otras: ["1s¹", "2s²", "1s²2s¹"],
  },
  {
    nombre: "carbono",
    simbolo: "C",
    Z: 6,
    configuracionCorrecta: "1s² 2s² 2p²",
    otras: ["1s² 2s² 2p⁴", "1s² 2s¹ 2p³", "1s² 2s² 2p³"],
  },
  {
    nombre: "oxígeno",
    simbolo: "O",
    Z: 8,
    configuracionCorrecta: "1s² 2s² 2p⁴",
    otras: ["1s² 2s² 2p⁶", "1s² 2s² 2p²", "1s² 2s¹ 2p⁵"],
  },
  {
    nombre: "neón",
    simbolo: "Ne",
    Z: 10,
    configuracionCorrecta: "1s² 2s² 2p⁶",
    otras: ["1s² 2s² 2p⁵", "1s² 2s¹ 2p⁶", "1s² 2s² 2p⁴"],
  },
  {
    nombre: "sodio",
    simbolo: "Na",
    Z: 11,
    configuracionCorrecta: "[Ne] 3s¹",
    otras: ["[Ne] 3s²", "[He] 2s² 2p⁶ 3s¹", "1s² 2s² 2p⁶"],
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
  };
};
