/**
 * F6-05 — Plantillas VBLang OFICIALES para Biología.
 *
 * Upgrade de 2 subtipos PARAMETRIZABLE señalados por
 * `docs/AUDITORIA_GENERADORES.md` en `apps/web/src/generadoresV2/biologia/Biologia.ts`:
 * `genetica_mendel` y `piramide_biomasas`. Ambos eran pools de preguntas sobre
 * un conjunto fijo de casos; acá se sortean los parámetros (cruce + aspecto
 * preguntado, o nivel trófico + biomasa base) y la respuesta se calcula
 * realmente con VBLang.
 *
 * `genetica_mendel`: las 6 combinaciones posibles de cruces monohíbridos
 * (AA x AA, AA x Aa, AA x aa, Aa x Aa, Aa x aa, aa x aa) se declaran como
 * tabla de proporciones (genotipos AA/Aa/aa y fenotipos dominante/recesivo)
 * — son resultados de Punnett fijos y verificables, no datos arbitrarios.
 * Se sortea el cruce Y el aspecto preguntado (uno de 5: dominante, recesivo,
 * AA, Aa, aa), y se indexa dinámicamente `cruce[aspecto.clave]` (F6-04/F2
 * confirmaron que el indexado dinámico de objetos funciona en runtime y en
 * el linter, que lo tipa como `unknown` sin error).
 *
 * `piramide_biomasas`: aplica la regla del 10% (`productor / 10 ^
 * niveles_descenso`) con `niveles_descenso` y `base` sorteados.
 */
import type { PlantillaOficial } from "./types.js";

const GENETICA_MENDEL_DSL = `metadata:
  materia: "biologia"
  nivel: "avanzado"
  tags: ["genetica_mendel", "punnett"]

variables:
  cruces: [{ padres: "AA x AA", descripcion: "ambos homocigotos dominantes", AA: "1", Aa: "0", aa: "0", dominante: "1", recesivo: "0" }, { padres: "AA x Aa", descripcion: "homocigoto dominante x heterocigoto", AA: "1/2", Aa: "1/2", aa: "0", dominante: "1", recesivo: "0" }, { padres: "AA x aa", descripcion: "lineas puras", AA: "0", Aa: "1", aa: "0", dominante: "1", recesivo: "0" }, { padres: "Aa x Aa", descripcion: "monohibrido", AA: "1/4", Aa: "2/4", aa: "1/4", dominante: "3/4", recesivo: "1/4" }, { padres: "Aa x aa", descripcion: "retrocruzamiento", AA: "0", Aa: "1/2", aa: "1/2", dominante: "1/2", recesivo: "1/2" }, { padres: "aa x aa", descripcion: "ambos homocigotos recesivos", AA: "0", Aa: "0", aa: "1", dominante: "0", recesivo: "1" }]
  cruce: uno_de(cruces)
  aspectos: [{ clave: "dominante", desc: "fenotipo dominante" }, { clave: "recesivo", desc: "fenotipo recesivo" }, { clave: "AA", desc: "genotipo homocigoto dominante (AA)" }, { clave: "Aa", desc: "genotipo heterocigoto (Aa)" }, { clave: "aa", desc: "genotipo homocigoto recesivo (aa)" }]
  aspecto: uno_de(aspectos)
  resultado: cruce[aspecto.clave]

enunciado: "En un cruce {cruce.padres} ({cruce.descripcion}), ¿qué proporcion de la descendencia tendrá {aspecto.desc}?"
tipo: input
respuesta: resultado

pasos:
  - "Genotipos resultantes: AA={cruce.AA}, Aa={cruce.Aa}, aa={cruce.aa}."
  - "Fenotipo dominante = AA + Aa = {cruce.dominante}; fenotipo recesivo = aa = {cruce.recesivo}."

explicacion: |
  En el cruce {cruce.padres} ({cruce.descripcion}), la proporción de descendencia con {aspecto.desc} es {resultado}.
`;

const PIRAMIDE_BIOMASAS_DSL = `metadata:
  materia: "biologia"
  nivel: "intermedio"
  tags: ["piramide_biomasas", "regla_10"]

variables:
  niveles_descenso: random(1, 3)
  nombres_niveles: ["consumidores primarios", "consumidores secundarios", "consumidores terciarios"]
  nivel_nombre: nombres_niveles[niveles_descenso - 1]
  base: random(1, 500)
  productor: base * 10 ^ niveles_descenso
  consumidor: productor / 10 ^ niveles_descenso

enunciado: "Un ecosistema tiene {productor} kg de biomasa en el nivel productor. Aplicando la regla del 10% (cada nivel trofico retiene el 10% de la biomasa del nivel anterior), y bajando {niveles_descenso} nivel(es) desde el productor, ¿cuanta biomasa (en kg) habra en el nivel de los {nivel_nombre}?"
tipo: input
respuesta: consumidor
unidad: "kg"
tolerancia_abs: 0.01

pasos:
  - "Biomasa = productor / 10^niveles = {productor} / 10^{niveles_descenso} = {productor} / {10 ^ niveles_descenso} = {consumidor} kg"

explicacion: |
  La regla del 10% indica que en cada paso trófico solo el 10% de la biomasa se transfiere
  al siguiente nivel. Bajando {niveles_descenso} nivel(es): {productor} / 10^{niveles_descenso} = {consumidor} kg en los {nivel_nombre}.
`;

export const BIOLOGIA_OFICIALES: PlantillaOficial[] = [
  {
    id: "oficial-biologia-genetica-mendel",
    nombre: "Genética mendeliana: proporciones de un cruce monohíbrido",
    descripcion:
      "A partir de un cruce monohíbrido (AA/Aa/aa), calcula la proporción de descendencia con un genotipo o fenotipo dado, según las leyes de Mendel (cuadro de Punnett).",
    materia: "biologia",
    tags: ["genetica_mendel", "punnett"],
    subtipoOriginal: "genetica_mendel",
    codigoDsl: GENETICA_MENDEL_DSL,
  },
  {
    id: "oficial-biologia-piramide-biomasas",
    nombre: "Pirámide de biomasas: regla del 10%",
    descripcion:
      "Calcula la biomasa disponible en un nivel trófico aplicando la regla del 10% a partir de la biomasa del nivel productor.",
    materia: "biologia",
    tags: ["piramide_biomasas", "regla_10"],
    subtipoOriginal: "piramide_biomasas",
    codigoDsl: PIRAMIDE_BIOMASAS_DSL,
  },
];
