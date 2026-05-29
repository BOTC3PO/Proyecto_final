import type {
  GeneradorAsistidoEjercicio,
  GeneradorAsistidoProvider,
} from "@vb/vblang";
import { obtenerDatasetSync } from "./datasetCache";
import { DeterministicPrng } from "../generadoresV2/core/prng";
import type { Dificultad, Ejercicio } from "../generadoresV2/core/types";
import { getDescriptoresBiologia } from "../generadoresV2/biologia/index";
import { getDescriptoresEconomia } from "../generadoresV2/economia/index";
import { getDescriptoresFisica } from "../generadoresV2/fisica/index";
import { getDescriptoresInformatica } from "../generadoresV2/informatica/index";
import { getDescriptoresMatematicas } from "../generadoresV2/matematicas/index";
import { getDescriptoresQuimica } from "../generadoresV2/quimica/index";
import type { GeneratorDescriptor } from "../generadoresV2/core/types";

/**
 * Bridge entre VBLang y generadoresV2.
 *
 * El paquete @vb/vblang define la interface `GeneradorAsistidoProvider`; este
 * archivo la implementa delegando a los descriptores hardcoded.
 */

function isValidDificultad(d?: string): d is Dificultad {
  return d === "basico" || d === "intermedio" || d === "avanzado";
}

function getAllDescriptors(prng: DeterministicPrng): GeneratorDescriptor[] {
  return [
    ...getDescriptoresBiologia(prng),
    ...getDescriptoresFisica(prng),
    ...getDescriptoresMatematicas(prng),
    ...getDescriptoresQuimica(prng),
    ...getDescriptoresEconomia(prng),
    ...getDescriptoresInformatica(prng),
  ];
}

/**
 * Resuelve un id de generador contra los descriptores disponibles.
 *
 * El id puede venir como:
 *   - `<descriptorId>`            ej. "fisica/cinematica"  → subtipo aleatorio
 *   - `<descriptorId>/<subtipo>`  ej. "fisica/cinematica/MRU" → subtipo fijo
 *
 * Como los `descriptorId` ya contienen "/", buscamos primero el match exacto y,
 * si no hay, el descriptor cuyo id sea el prefijo más largo del id pedido; el
 * resto del path es el subtipo.
 */
function resolverDescriptor(
  all: GeneratorDescriptor[],
  id: string,
): { descriptor: GeneratorDescriptor; subtipo?: string } | null {
  const exact = all.find((d) => d.id === id);
  if (exact) return { descriptor: exact };

  const prefijo = all
    .filter((d) => id.startsWith(`${d.id}/`))
    .sort((a, b) => b.id.length - a.id.length)[0];
  if (!prefijo) return null;

  return { descriptor: prefijo, subtipo: id.slice(prefijo.id.length + 1) };
}

export const generadorAsistidoProvider: GeneradorAsistidoProvider = {
  generar(id, seed, dificultad) {
    const prng = new DeterministicPrng(seed);
    const resuelto = resolverDescriptor(getAllDescriptors(prng), id);
    if (!resuelto) return null;
    const { descriptor, subtipo } = resuelto;

    // La dificultad llega desde el metadata de la plantilla (la resuelve
    // `generate()` del paquete); sólo caemos a "intermedio" si es inválida.
    const dif: Dificultad = isValidDificultad(dificultad)
      ? dificultad
      : "intermedio";

    // GeneratorFn firma: (dificultad?, prng?, subtipo?, enunciadoTemplate?) → Ejercicio
    const ejercicio = descriptor.generate(dif, prng, subtipo);
    return ejercicioToVblangShape(ejercicio);
  },
  obtenerDataset(nombre) {
    return obtenerDatasetSync(nombre);
  },
};

function ejercicioToVblangShape(e: Ejercicio): GeneradorAsistidoEjercicio {
  if (e.tipo === "quiz") {
    return {
      enunciado: e.enunciado,
      pasos: e.pasos,
      visual: e.visual,
      datos: e.datos,
      opciones: e.opciones,
      indiceCorrecto: e.indiceCorrecto,
    };
  }
  if (e.tipo === "numerico") {
    // El shape canónico del paquete usa `resultado: number`. Si el generador
    // devuelve string|number[] (caso poco común para numerico), tomamos
    // el primer número o lo casteamos a número.
    const r = e.resultado;
    let resultado: number | undefined;
    if (typeof r === "number") resultado = r;
    else if (Array.isArray(r) && typeof r[0] === "number") resultado = r[0];
    else if (typeof r === "string" && !Number.isNaN(Number(r))) {
      resultado = Number(r);
    }
    return {
      enunciado: e.enunciado,
      pasos: e.pasos,
      visual: e.visual,
      datos: e.datos,
      resultado,
      toleranciaRelativa: e.toleranciaRelativa,
      unidades: e.unidades,
    };
  }
  // completar
  return {
    enunciado: e.enunciado,
    respuestaCorrecta: e.respuestaCorrecta,
  };
}
