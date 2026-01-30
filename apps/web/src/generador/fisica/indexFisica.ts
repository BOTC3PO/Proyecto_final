// src/ejercicios/fisica/indexFisica.ts
import { BaseGenerator } from "../core/basegenerador";
import type { PRNG } from "../core/prng";

// Cinemática
import { MRUGenerator } from "./MRU";
import { MRUVGenerator } from "./MRUV";
import { CaidaLibreGenerator } from "./CaidaLibre";
import { ConversionUnidadesCinematicaGenerator } from "./ConversionUnidadesCinematica";
import { RelacionDistanciaTiempoGenerator } from "./RelacionDistanciaTiempo";
import { MovimientoVerticalGenerator } from "./MovimientoVertical";
import { MovimientoHorizontalGenerator } from "./MovimientoHorizontal";

// Dinámica
import { SumaFuerzasGenerator } from "./SumaFuerzas";
import { PesoGenerator } from "./Peso";
import { FriccionGenerator } from "./Friccion";
import { PlanoInclinadoGenerator } from "./PlanoInclinado";
import { LeyHookeGenerator } from "./LeyHooke";

// Trabajo y Energía
import { TrabajoMecanicoGenerator } from "./TrabajoMecanico";
import { EnergiaCineticaGenerator } from "./EnergiaCinetica";
import { EnergiaPotencialGenerator } from "./EnergiaPotencial";
import { ConservacionEnergiaGenerator } from "./ConservacionEnergia";
import { PotenciaMecanicaGenerator } from "./PotenciaMecanica";

// Termodinámica
import { CalorGenerator } from "./Calor";
import { ConversionTemperaturaGenerator } from "./ConversionTemperatura";
import { CambiosEstadoGenerator } from "./CambiosEstado";
import { DilatacionTermicaGenerator } from "./DilatacionTermica";

// Electricidad
import { LeyOhmGenerator } from "./LeyOhm";
import { PotenciaElectricaGenerator } from "./PotenciaElectrica";
import { ResistenciaSerieGenerator } from "./ResistenciaSerie";
import { ResistenciaParaleloGenerator } from "./ResistenciaParalelo";
import { ConsumoElectricoGenerator } from "./ConsumoElectrico";

// Ondas y Óptica
import { FrecuenciaPeriodoGenerator } from "./FrecuenciaPeriodo";
import { VelocidadOndasGenerator } from "./VelocidadOndas";
import { LongitudOndaGenerator } from "./LongitudOnda";
import { IndiceRefraccionGenerator } from "./IndiceRefraccion";
import { EcuacionLentesGenerator } from "./EcuacionLentes";
import { OpticaGeometricaGenerator } from "./OpticaGeometrica";

// Fluidos
import { DensidadGenerator } from "./Densidad";
import { PresionGenerator } from "./Presion";
import { PresionHidrostaticaGenerator } from "./PresionHidrostatica";
import { CaudalGenerator } from "./Caudal";

export const createGeneradoresFisica = (prng: PRNG): BaseGenerator[] => [
  // Cinemática
  new MRUGenerator(prng),
  new MRUVGenerator(prng),
  new CaidaLibreGenerator(prng),
  new ConversionUnidadesCinematicaGenerator(prng),
  new RelacionDistanciaTiempoGenerator(prng),
  new MovimientoVerticalGenerator(prng),
  new MovimientoHorizontalGenerator(prng),

  // Dinámica
  new SumaFuerzasGenerator(prng),
  new PesoGenerator(prng),
  new FriccionGenerator(prng),
  new PlanoInclinadoGenerator(prng),
  new LeyHookeGenerator(prng),

  // Trabajo y Energía
  new TrabajoMecanicoGenerator(prng),
  new EnergiaCineticaGenerator(prng),
  new EnergiaPotencialGenerator(prng),
  new ConservacionEnergiaGenerator(prng),
  new PotenciaMecanicaGenerator(prng),

  // Termodinámica
  new CalorGenerator(prng),
  new ConversionTemperaturaGenerator(prng),
  new CambiosEstadoGenerator(prng),
  new DilatacionTermicaGenerator(prng),

  // Electricidad
  new LeyOhmGenerator(prng),
  new PotenciaElectricaGenerator(prng),
  new ResistenciaSerieGenerator(prng),
  new ResistenciaParaleloGenerator(prng),
  new ConsumoElectricoGenerator(prng),

  // Ondas y Óptica
  new FrecuenciaPeriodoGenerator(prng),
  new VelocidadOndasGenerator(prng),
  new LongitudOndaGenerator(prng),
  new IndiceRefraccionGenerator(prng),
  new EcuacionLentesGenerator(prng),
  new OpticaGeometricaGenerator(prng),

  // Fluidos
  new DensidadGenerator(prng),
  new PresionGenerator(prng),
  new PresionHidrostaticaGenerator(prng),
  new CaudalGenerator(prng),
];

// (Opcional) Map por id, si te sirve:
export const createGeneradoresFisicaPorId = (
  prng: PRNG
): Record<string, BaseGenerator> =>
  Object.fromEntries(createGeneradoresFisica(prng).map((g) => [g.id, g]));
