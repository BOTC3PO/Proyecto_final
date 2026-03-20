// src/ejercicios/fisica/indexFisica.ts
import { BaseGenerator } from "../core/basegenerador";
import type { PRNG } from "../core/prng";
import type { Calculator, Ejercicio, GeneradorParametros, GeneratorDescriptor } from "../core/types";
import { parseFisicaParametros } from "./schemas";

type GeneratorClass = new (prng: PRNG) => BaseGenerator;

// Cache of loaded classes (no prng needed to cache)
const CLASS_CACHE = new Map<string, GeneratorClass>();

async function getGeneratorClass(id: string): Promise<GeneratorClass | undefined> {
  if (CLASS_CACHE.has(id)) return CLASS_CACHE.get(id)!;
  let cls: GeneratorClass | undefined;
  switch (id) {
    // Cinemática
    case "fisica/cinematica/mru": { const m = await import("./MRU"); cls = m.MRUGenerator; break; }
    case "fisica/cinematica/mruv": { const m = await import("./MRUV"); cls = m.MRUVGenerator; break; }
    case "fisica/cinematica/caida_libre": { const m = await import("./CaidaLibre"); cls = m.CaidaLibreGenerator; break; }
    case "fisica/cinematica/conversion_unidades": { const m = await import("./ConversionUnidadesCinematica"); cls = m.ConversionUnidadesCinematicaGenerator; break; }
    case "fisica/cinematica/relacion_distancia_tiempo": { const m = await import("./RelacionDistanciaTiempo"); cls = m.RelacionDistanciaTiempoGenerator; break; }
    case "fisica/cinematica/movimiento_vertical": { const m = await import("./MovimientoVertical"); cls = m.MovimientoVerticalGenerator; break; }
    case "fisica/cinematica/movimiento_horizontal": { const m = await import("./MovimientoHorizontal"); cls = m.MovimientoHorizontalGenerator; break; }

    // Dinámica
    case "fisica/dinamica/suma_fuerzas": { const m = await import("./SumaFuerzas"); cls = m.SumaFuerzasGenerator; break; }
    case "fisica/dinamica/peso": { const m = await import("./Peso"); cls = m.PesoGenerator; break; }
    case "fisica/dinamica/friccion": { const m = await import("./Friccion"); cls = m.FriccionGenerator; break; }
    case "fisica/dinamica/plano_inclinado": { const m = await import("./PlanoInclinado"); cls = m.PlanoInclinadoGenerator; break; }
    case "fisica/dinamica/ley_hooke": { const m = await import("./LeyHooke"); cls = m.LeyHookeGenerator; break; }

    // Trabajo y Energía
    case "fisica/energia/trabajo_mecanico": { const m = await import("./TrabajoMecanico"); cls = m.TrabajoMecanicoGenerator; break; }
    case "fisica/energia/energia_cinetica": { const m = await import("./EnergiaCinetica"); cls = m.EnergiaCineticaGenerator; break; }
    case "fisica/energia/energia_potencial": { const m = await import("./EnergiaPotencial"); cls = m.EnergiaPotencialGenerator; break; }
    case "fisica/energia/conservacion_energia": { const m = await import("./ConservacionEnergia"); cls = m.ConservacionEnergiaGenerator; break; }
    case "fisica/energia/potencia_mecanica": { const m = await import("./PotenciaMecanica"); cls = m.PotenciaMecanicaGenerator; break; }

    // Termodinámica
    case "fisica/termodinamica/calor": { const m = await import("./Calor"); cls = m.CalorGenerator; break; }
    case "fisica/termodinamica/conversion_temperatura": { const m = await import("./ConversionTemperatura"); cls = m.ConversionTemperaturaGenerator; break; }
    case "fisica/termodinamica/cambios_estado": { const m = await import("./CambiosEstado"); cls = m.CambiosEstadoGenerator; break; }
    case "fisica/termodinamica/dilatacion_termica": { const m = await import("./DilatacionTermica"); cls = m.DilatacionTermicaGenerator; break; }

    // Electricidad
    case "fisica/electricidad/ley_ohm": { const m = await import("./LeyOhm"); cls = m.LeyOhmGenerator; break; }
    case "fisica/electricidad/potencia_electrica": { const m = await import("./PotenciaElectrica"); cls = m.PotenciaElectricaGenerator; break; }
    case "fisica/electricidad/resistencia_serie": { const m = await import("./ResistenciaSerie"); cls = m.ResistenciaSerieGenerator; break; }
    case "fisica/electricidad/resistencia_paralelo": { const m = await import("./ResistenciaParalelo"); cls = m.ResistenciaParaleloGenerator; break; }
    case "fisica/electricidad/consumo_electrico": { const m = await import("./ConsumoElectrico"); cls = m.ConsumoElectricoGenerator; break; }

    // Ondas y Óptica
    case "fisica/ondas_optica/frecuencia_periodo": { const m = await import("./FrecuenciaPeriodo"); cls = m.FrecuenciaPeriodoGenerator; break; }
    case "fisica/ondas_optica/velocidad_ondas": { const m = await import("./VelocidadOndas"); cls = m.VelocidadOndasGenerator; break; }
    case "fisica/ondas_optica/longitud_onda": { const m = await import("./LongitudOnda"); cls = m.LongitudOndaGenerator; break; }
    case "fisica/ondas_optica/indice_refraccion": { const m = await import("./IndiceRefraccion"); cls = m.IndiceRefraccionGenerator; break; }
    case "fisica/ondas_optica/ecuacion_lentes": { const m = await import("./EcuacionLentes"); cls = m.EcuacionLentesGenerator; break; }
    case "fisica/optica/optica_geometrica": { const m = await import("./OpticaGeometrica"); cls = m.OpticaGeometricaGenerator; break; }

    // Fluidos
    case "fisica/fluidos/densidad": { const m = await import("./Densidad"); cls = m.DensidadGenerator; break; }
    case "fisica/fluidos/presion": { const m = await import("./Presion"); cls = m.PresionGenerator; break; }
    case "fisica/fluidos/presion_hidrostatica": { const m = await import("./PresionHidrostatica"); cls = m.PresionHidrostaticaGenerator; break; }
    case "fisica/fluidos/caudal": { const m = await import("./Caudal"); cls = m.CaudalGenerator; break; }

    default: return undefined;
  }
  if (cls) CLASS_CACHE.set(id, cls);
  return cls;
}

export const FISICA_GENERATOR_IDS: readonly string[] = [
  // Cinemática
  "fisica/cinematica/mru",
  "fisica/cinematica/mruv",
  "fisica/cinematica/caida_libre",
  "fisica/cinematica/conversion_unidades",
  "fisica/cinematica/relacion_distancia_tiempo",
  "fisica/cinematica/movimiento_vertical",
  "fisica/cinematica/movimiento_horizontal",
  // Dinámica
  "fisica/dinamica/suma_fuerzas",
  "fisica/dinamica/peso",
  "fisica/dinamica/friccion",
  "fisica/dinamica/plano_inclinado",
  "fisica/dinamica/ley_hooke",
  // Trabajo y Energía
  "fisica/energia/trabajo_mecanico",
  "fisica/energia/energia_cinetica",
  "fisica/energia/energia_potencial",
  "fisica/energia/conservacion_energia",
  "fisica/energia/potencia_mecanica",
  // Termodinámica
  "fisica/termodinamica/calor",
  "fisica/termodinamica/conversion_temperatura",
  "fisica/termodinamica/cambios_estado",
  "fisica/termodinamica/dilatacion_termica",
  // Electricidad
  "fisica/electricidad/ley_ohm",
  "fisica/electricidad/potencia_electrica",
  "fisica/electricidad/resistencia_serie",
  "fisica/electricidad/resistencia_paralelo",
  "fisica/electricidad/consumo_electrico",
  // Ondas y Óptica
  "fisica/ondas_optica/frecuencia_periodo",
  "fisica/ondas_optica/velocidad_ondas",
  "fisica/ondas_optica/longitud_onda",
  "fisica/ondas_optica/indice_refraccion",
  "fisica/ondas_optica/ecuacion_lentes",
  "fisica/optica/optica_geometrica",
  // Fluidos
  "fisica/fluidos/densidad",
  "fisica/fluidos/presion",
  "fisica/fluidos/presion_hidrostatica",
  "fisica/fluidos/caudal",
];

export const createGeneradoresFisica = async (prng: PRNG): Promise<BaseGenerator[]> => {
  const instances = await Promise.all(
    FISICA_GENERATOR_IDS.map(async (id) => {
      const cls = await getGeneratorClass(id);
      if (!cls) throw new Error(`Generador de física no encontrado: ${id}`);
      return new cls(prng);
    })
  );
  return instances;
};

export const createGeneradoresFisicaPorId = async (
  prng: PRNG
): Promise<Record<string, BaseGenerator>> => {
  const generadores = await createGeneradoresFisica(prng);
  return Object.fromEntries(generadores.map((g) => [g.id, g]));
};

export const createGeneradoresFisicaDescriptorPorId = async (
  prng: PRNG
): Promise<Record<string, GeneratorDescriptor<Ejercicio, [GeneradorParametros, Calculator]>>> => {
  const generadores = await createGeneradoresFisica(prng);
  return Object.fromEntries(
    generadores.map((g) => [
      g.id,
      {
        id: g.id,
        version: g.version,
        generate: (params, calc) => g.generate(parseFisicaParametros(params), calc),
      },
    ])
  );
};

export const getGeneradoresFisicaPorId = async (
  id: string,
  prng: PRNG
): Promise<BaseGenerator | undefined> => {
  const cls = await getGeneratorClass(id);
  if (!cls) return undefined;
  return new cls(prng);
};
