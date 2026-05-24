/**
 * Plantillas VBLang de ejemplo para los 4 tipos especiales (Sprint 9B).
 *
 * No se persisten en DB. Sirven como seed para un futuro botón "Templates"
 * en el editor V3, y como documentación viva del DSL.
 */

export interface VblangExample {
  id: string;
  titulo: string;
  descripcion: string;
  codigoDsl: string;
}

export const SPRINT_9B_EXAMPLES: VblangExample[] = [
  {
    id: "ordenar-eventos-historicos",
    titulo: "Ordenar — Eventos históricos",
    descripcion:
      "El alumno reordena cronológicamente eventos famosos del siglo XX.",
    codigoDsl: `variables:
  eventos: ["Primera Guerra Mundial", "Crisis del 29", "Segunda Guerra Mundial", "Llegada a la Luna"]

enunciado: "Ordená cronológicamente los siguientes eventos:"
tipo: ordenar
items: eventos
orden_correcto: eventos
`,
  },
  {
    id: "marcar-mapa-capital",
    titulo: "Marcar mapa — Capital de un país",
    descripcion: "El alumno hace click en el país cuya capital se menciona.",
    codigoDsl: `variables:
  pais: uno_de([
    { nombre: "Argentina", iso: "ARG", capital: "Buenos Aires" },
    { nombre: "Brasil",    iso: "BRA", capital: "Brasilia" },
    { nombre: "Chile",     iso: "CHL", capital: "Santiago" },
    { nombre: "Perú",      iso: "PER", capital: "Lima" }
  ])

enunciado: "Hacé click en el país cuya capital es {pais.capital}."
tipo: marcar_mapa
mapa: "politico_mundo"
respuesta_iso: pais.iso
respuesta_nombre: pais.nombre
`,
  },
  {
    id: "analisis-sintactico-oracion-simple",
    titulo: "Análisis sintáctico — Oración simple",
    descripcion:
      "El alumno asigna la etiqueta gramatical correcta a cada palabra clave.",
    codigoDsl: `variables:
  texto: "El perro come pan"

enunciado: "Asigná la categoría gramatical a cada palabra de la oración:"
tipo: analisis_sintactico
texto: texto
etiquetas:
  - { palabra: "El",    etiqueta: "artículo" }
  - { palabra: "perro", etiqueta: "sustantivo" }
  - { palabra: "come",  etiqueta: "verbo" }
  - { palabra: "pan",   etiqueta: "sustantivo" }
`,
  },
  {
    id: "identificar-palabras-sustantivos",
    titulo: "Identificar palabras — Sustantivos",
    descripcion:
      "El alumno marca todas las palabras del texto que sean sustantivos.",
    codigoDsl: `variables:
  texto: "El niño juega con la pelota en el parque"

enunciado: "Marcá todos los sustantivos del siguiente texto:"
tipo: identificar_palabras
texto: texto
respuestas_validas: ["niño", "pelota", "parque"]
`,
  },
];
