/**
 * F6-03 — Datos del banco estático de Biología.
 *
 * Extraído de `apps/web/src/generadoresV2/biologia/Biologia.ts` (NO
 * modificado). Sólo `clasificacion_seres_vivos` es BANCO; los otros 2
 * subtipos (`genetica_mendel`, `piramide_biomasas`) son PARAMétricos
 * (randInt + reglas de Mendel / regla del 10%).
 *
 * `clasificacion_seres_vivos` se computa por ser vivo × 3 dificultades
 * (basico=reino, intermedio=tipo celular, avanzado=tipo de nutrición).
 * Total: 10 filas × 3 = 30 preguntas.
 */

import type { MCQuestion } from "../../basic/types";

function tags(subtipo: string, dificultad: string): string[] {
  return ["biologia", `subtipo:${subtipo}`, `dificultad:${dificultad}`];
}

function mc(opts: {
  id: string;
  prompt: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
  subtipo: string;
  dificultad: string;
}): MCQuestion {
  return {
    id: opts.id,
    type: "mc",
    prompt: opts.prompt,
    options: opts.opciones.map((text, i) => ({
      text,
      correct: i === opts.indiceCorrecto,
      because: "",
    })),
    explanation: opts.explicacion,
    tags: tags(opts.subtipo, opts.dificultad),
  };
}

// ── 1) clasificacion_seres_vivos (10 filas × 3 difficulties = 30) ─

const SERES_VIVOS = [
  { nombre: "Escherichia coli (bacteria)",                reino: "Monera",   celula: "procariota", nutricion: "heterótrofo" },
  { nombre: "Chlamydomonas (alga verde unicelular)",     reino: "Protista",  celula: "eucariota",  nutricion: "autótrofo" },
  { nombre: "Penicillium (hongo)",                        reino: "Fungi",     celula: "eucariota",  nutricion: "heterótrofo" },
  { nombre: "Helecho (Pteridophyta)",                     reino: "Plantae",   celula: "eucariota",  nutricion: "autótrofo" },
  { nombre: "Perro (Canis lupus familiaris)",             reino: "Animalia",  celula: "eucariota",  nutricion: "heterótrofo" },
  { nombre: "Anabaena (cianobacteria)",                   reino: "Monera",   celula: "procariota", nutricion: "autótrofo" },
  { nombre: "Amoeba proteus",                             reino: "Protista",  celula: "eucariota",  nutricion: "heterótrofo" },
  { nombre: "Roble (Quercus robur)",                      reino: "Plantae",   celula: "eucariota",  nutricion: "autótrofo" },
  { nombre: "Saccharomyces cerevisiae (levadura)",        reino: "Fungi",     celula: "eucariota",  nutricion: "heterótrofo" },
  { nombre: "Pez payaso (Amphiprioninae)",                reino: "Animalia",  celula: "eucariota",  nutricion: "heterótrofo" },
] as const;

const REINOS_OPCIONES = ["Monera", "Protista", "Fungi", "Plantae", "Animalia"];

const CLASIFICACION_SERES_VIVOS: MCQuestion[] = [];
let nSerVivo = 0;
for (const ser of SERES_VIVOS) {
  nSerVivo += 1;
  const otrosReinos = REINOS_OPCIONES.filter((r) => r !== ser.reino).slice(0, 3);
  const otraCelula = ser.celula === "eucariota" ? "procariota" : "eucariota";
  const otraNutricion = ser.nutricion === "autótrofo" ? "heterótrofo" : "autótrofo";

  // basico: reino
  CLASIFICACION_SERES_VIVOS.push(
    mc({
      id: `biologia_clasificacion_seres_vivos_${nSerVivo}_basico`,
      prompt: `¿A qué reino pertenece ${ser.nombre}?`,
      opciones: [ser.reino, ...otrosReinos],
      indiceCorrecto: 0,
      explicacion: `${ser.nombre} pertenece al reino ${ser.reino}. Sus células son ${ser.celula}s y su tipo de nutrición es ${ser.nutricion}.`,
      subtipo: "clasificacion_seres_vivos",
      dificultad: "basico",
    }),
  );
  // intermedio: tipo de célula
  CLASIFICACION_SERES_VIVOS.push(
    mc({
      id: `biologia_clasificacion_seres_vivos_${nSerVivo}_intermedio`,
      prompt: `¿Qué tipo de organización celular tiene ${ser.nombre} (reino ${ser.reino})?`,
      opciones: [ser.celula, otraCelula, "acelular", "multicelular sin núcleo"],
      indiceCorrecto: 0,
      explicacion: `${ser.nombre} es ${ser.celula}. ${ser.celula === "procariota" ? "No posee núcleo definido ni orgánulos membranosos." : "Posee núcleo verdadero delimitado por membrana nuclear y orgánulos membranosos."}`,
      subtipo: "clasificacion_seres_vivos",
      dificultad: "intermedio",
    }),
  );
  // avanzado: tipo de nutrición
  CLASIFICACION_SERES_VIVOS.push(
    mc({
      id: `biologia_clasificacion_seres_vivos_${nSerVivo}_avanzado`,
      prompt: `¿Cómo obtiene su energía ${ser.nombre} (reino ${ser.reino}, célula ${ser.celula})?`,
      opciones: [ser.nutricion, otraNutricion, "mixótrofo", "quimiolitótrofo"],
      indiceCorrecto: 0,
      explicacion: `${ser.nombre} es ${ser.nutricion}. ${ser.nutricion === "autótrofo" ? "Fabrica su propio alimento a partir de fuentes inorgánicas mediante fotosíntesis o quimiosíntesis." : "Obtiene energía consumiendo materia orgánica producida por otros organismos."}`,
      subtipo: "clasificacion_seres_vivos",
      dificultad: "avanzado",
    }),
  );
}

export const BANCOS_BIOLOGIA: ReadonlyArray<readonly [string, MCQuestion[]]> = [
  ["biologia_clasificacion_seres_vivos", CLASIFICACION_SERES_VIVOS],
] as const;
