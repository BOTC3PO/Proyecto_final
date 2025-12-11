// src/ejercicios/fisica/indexFisica.ts
import { BaseGenerator } from "../core/basegenerador";

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

export const GENERADORES_FISICA: BaseGenerator[] = [
  // Cinemática
  new MRUGenerator(),
  new MRUVGenerator(),
  new CaidaLibreGenerator(),
  new ConversionUnidadesCinematicaGenerator(),
  new RelacionDistanciaTiempoGenerator(),
  new MovimientoVerticalGenerator(),
  new MovimientoHorizontalGenerator(),

  // Dinámica
  new SumaFuerzasGenerator(),
  new PesoGenerator(),
  new FriccionGenerator(),
  new PlanoInclinadoGenerator(),
  new LeyHookeGenerator(),

  // Trabajo y Energía
  new TrabajoMecanicoGenerator(),
  new EnergiaCineticaGenerator(),
  new EnergiaPotencialGenerator(),
  new ConservacionEnergiaGenerator(),
  new PotenciaMecanicaGenerator(),

  // Termodinámica
  new CalorGenerator(),
  new ConversionTemperaturaGenerator(),
  new CambiosEstadoGenerator(),
  new DilatacionTermicaGenerator(),

  // Electricidad
  new LeyOhmGenerator(),
  new PotenciaElectricaGenerator(),
  new ResistenciaSerieGenerator(),
  new ResistenciaParaleloGenerator(),
  new ConsumoElectricoGenerator(),

  // Ondas y Óptica
  new FrecuenciaPeriodoGenerator(),
  new VelocidadOndasGenerator(),
  new LongitudOndaGenerator(),
  new IndiceRefraccionGenerator(),
  new EcuacionLentesGenerator(),
  new OpticaGeometricaGenerator(),

  // Fluidos
  new DensidadGenerator(),
  new PresionGenerator(),
  new PresionHidrostaticaGenerator(),
  new CaudalGenerator(),
];

// (Opcional) Map por id, si te sirve:
export const GENERADORES_FISICA_POR_ID: Record<string, BaseGenerator> =
  Object.fromEntries(GENERADORES_FISICA.map((g) => [g.id, g]));
