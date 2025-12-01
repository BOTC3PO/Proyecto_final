// src/generators/math/tema12_proporcionalidad.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  pickRandom,
  randomInt,
} from "./generic";

const ID_TEMA = 12;
const TITULO = "Proporcionalidad directa e inversa";

type TipoRelacion = "directa" | "inversa" | "ninguna";

interface Escenario {
  texto: string;
  tipo: TipoRelacion;
}

function generarEscenario(): Escenario {
  const plantillas: Escenario[] = [
    {
      texto:
        "La cantidad de dinero que pagas es proporcional a la cantidad de kilos de manzanas que compras (precio por kilo fijo).",
      tipo: "directa",
    },
    {
      texto:
        "La distancia recorrida por un auto es proporcional al tiempo que viaja a velocidad constante.",
      tipo: "directa",
    },
    {
      texto:
        "El tiempo que tarda en llenarse un tanque disminuye al aumentar el caudal de agua de la canilla.",
      tipo: "inversa",
    },
    {
      texto:
        "Cuantos más obreros trabajan al mismo ritmo, menos días se necesitan para terminar una obra.",
      tipo: "inversa",
    },
    {
      texto:
        "La nota de un examen no siempre aumenta o disminuye de forma proporcional a las horas de estudio.",
      tipo: "ninguna",
    },
    {
      texto:
        "La altura de una persona no es proporcional a su edad en años (sobre todo en adultos).",
      tipo: "ninguna",
    },
  ];

  return plantillas[randomInt(0, plantillas.length - 1)];
}

export const generarProporcionalidad: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  const escenario = generarEscenario();

  const opciones = ["Proporcionalidad directa", "Proporcionalidad inversa", "No es proporcional"];
  const mapa: Record<TipoRelacion, string> = {
    directa: "Proporcionalidad directa",
    inversa: "Proporcionalidad inversa",
    ninguna: "No es proporcional",
  };

  const correcta = mapa[escenario.tipo];
  const indiceCorrecto = opciones.indexOf(correcta);

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado:
      "Lee la situación y elige el tipo de relación que se presenta:\n\n" +
      escenario.texto,
    opciones,
    indiceCorrecto,
    explicacion:
      "En la proporcionalidad directa, al aumentar una magnitud la otra también aumenta de manera proporcional. En la inversa, al aumentar una, la otra disminuye. Si no se cumple ninguno de estos comportamientos, no es proporcional.",
  });
};

export default generarProporcionalidad;
