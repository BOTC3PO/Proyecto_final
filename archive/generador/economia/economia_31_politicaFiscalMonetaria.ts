// src/generators/economia/economia_31_politicaFiscalMonetaria.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  esDificultadMinima,
  pickOne,
} from "./generico";
import { getCatalogoTemaEconomiaSync } from "./catalogoApi";
import { resolveTemaEnunciado } from "./consignas";

type TipoPolitica =
  | "Política fiscal expansiva"
  | "Política fiscal contractiva"
  | "Política monetaria expansiva"
  | "Política monetaria contractiva";

const TEMA = "31_economia_politicaFiscalMonetaria";

const CASOS: {
  descripcion: string;
  respuesta: TipoPolitica;
  explicacion: string;
  dificultadMinima: Dificultad;
}[] = [
  {
    descripcion:
      "El gobierno aumenta el gasto público en obras y programas sociales para impulsar la actividad económica.",
    respuesta: "Política fiscal expansiva",
    explicacion:
      "Usa el presupuesto del Estado (gasto público) para aumentar la demanda agregada.",
    dificultadMinima: "basico",
  },
  {
    descripcion:
      "El gobierno baja impuestos a familias y empresas para que tengan más dinero para gastar e invertir.",
    respuesta: "Política fiscal expansiva",
    explicacion:
      "Reduce la carga impositiva para estimular el consumo y la inversión.",
    dificultadMinima: "basico",
  },
  {
    descripcion:
      "El gobierno reduce el gasto público y sube algunos impuestos para achicar el déficit fiscal.",
    respuesta: "Política fiscal contractiva",
    explicacion:
      "Busca frenar la demanda y ordenar las cuentas públicas reduciendo gastos o aumentando impuestos.",
    dificultadMinima: "intermedio",
  },
  {
    descripcion:
      "El Banco Central baja la tasa de interés y facilita el crédito para que se pida más dinero prestado.",
    respuesta: "Política monetaria expansiva",
    explicacion:
      "Hace más barato el crédito para estimular el consumo y la inversión.",
    dificultadMinima: "intermedio",
  },
  {
    descripcion:
      "El Banco Central sube mucho la tasa de interés para frenar la inflación y el consumo.",
    respuesta: "Política monetaria contractiva",
    explicacion:
      "Hace más caro el crédito para reducir la cantidad de dinero circulando.",
    dificultadMinima: "avanzado",
  },
  {
    descripcion:
      "El gobierno congela el gasto y aumenta impuestos para reducir la demanda agregada en un contexto inflacionario.",
    respuesta: "Política fiscal contractiva",
    explicacion:
      "Al subir impuestos y frenar el gasto público, se reduce el impulso fiscal y la demanda.",
    dificultadMinima: "avanzado",
  },
  {
    descripcion:
      "El Banco Central vende títulos y sube encajes bancarios para absorber liquidez del sistema.",
    respuesta: "Política monetaria contractiva",
    explicacion:
      "Al absorber liquidez, disminuye la cantidad de dinero disponible y se enfría la economía.",
    dificultadMinima: "avanzado",
  },
  {
    descripcion:
      "El gobierno aumenta el gasto en infraestructura con financiamiento deficitario para reactivar el empleo.",
    respuesta: "Política fiscal expansiva",
    explicacion:
      "El estímulo fiscal vía mayor gasto busca impulsar la demanda y el empleo.",
    dificultadMinima: "avanzado",
  },
  {
    descripcion:
      "El Banco Central reduce la tasa de referencia y compra bonos para expandir la base monetaria.",
    respuesta: "Política monetaria expansiva",
    explicacion:
      "Baja tasas y compra activos para inyectar dinero y estimular crédito y gasto.",
    dificultadMinima: "avanzado",
  },
];

const getCasosCatalogo = (): typeof CASOS => {
  const limits = getCatalogoTemaEconomiaSync(TEMA).limits;
  const source = limits && typeof limits === "object" && !Array.isArray(limits)
    ? (limits as Record<string, unknown>).casos
    : null;
  if (!Array.isArray(source)) return CASOS;

  const parsed = source
    .map((item) => (item && typeof item === "object" && !Array.isArray(item) ? (item as Record<string, unknown>) : null))
    .filter((item): item is Record<string, unknown> => item !== null)
    .map((item) => {
      const descripcion = typeof item.descripcion === "string" ? item.descripcion : null;
      const respuesta = typeof item.respuesta === "string" ? item.respuesta : null;
      const explicacion = typeof item.explicacion === "string" ? item.explicacion : "";
      const dificultadMinima = item.dificultadMinima;
      if (!descripcion || !respuesta || !["basico", "intermedio", "avanzado"].includes(String(dificultadMinima))) {
        return null;
      }
      return {
        descripcion,
        respuesta: respuesta as TipoPolitica,
        explicacion,
        dificultadMinima: dificultadMinima as Dificultad,
      };
    })
    .filter((item): item is (typeof CASOS)[number] => item !== null);

  return parsed.length > 0 ? parsed : CASOS;
};

export const genPoliticaFiscalMonetaria: GeneratorFn = makeQuizGenerator(
  31,
  "Política fiscal vs monetaria (expansiva/contractiva)",
  [
    (dificultad: Dificultad) => {
      const casosDisponibles = getCasosCatalogo().filter((caso) =>
        esDificultadMinima(dificultad, caso.dificultadMinima)
      );
      const caso = pickOne(casosDisponibles);
      const opciones: TipoPolitica[] = [
        "Política fiscal expansiva",
        "Política fiscal contractiva",
        "Política monetaria expansiva",
        "Política monetaria contractiva",
      ];
      const indiceCorrecto = opciones.indexOf(caso.respuesta);

      const enunciadoFallback =
        "Clasificá la siguiente medida de política económica:\n\n" +
        caso.descripcion;

      return {
        enunciado: resolveTemaEnunciado(TEMA, enunciadoFallback, {
          descripcion: caso.descripcion,
        }),
        opciones,
        indiceCorrecto,
        explicacion: caso.explicacion,
      };
    },
  ]
);
