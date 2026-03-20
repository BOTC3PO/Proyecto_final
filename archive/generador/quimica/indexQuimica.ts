// src/generators/quimica/indexQuimica.ts
import { type Exercise, type GeneratorFn, setPrng } from "./generico";
import { parseQuimicaParams } from "./schemas";
import type { GeneratorDescriptor } from "../core/types";
import type { PRNG } from "../core/prng";
import { getCatalogoTemaSync, getTemaByIdSync } from "./catalogoApi";

type DificultadCore = "basico" | "intermedio" | "avanzado";

interface ConsignaCatalogItem {
  id: number;
  activo: boolean;
  difficulty: DificultadCore;
  enunciadoBase: string;
  data?: Record<string, unknown>;
}

const DIFICULTAD_ORDEN: DificultadCore[] = ["basico", "intermedio", "avanzado"];

const getNivelCore = (nivel: string): DificultadCore => {
  if (nivel === "facil") return "basico";
  if (nivel === "media") return "intermedio";
  return "avanzado";
};

const renderEnunciado = (base: string, values: Record<string, unknown>): string =>
  base.replaceAll(/\{\{(\w+)\}\}|\{(\w+)\}/g, (_m, k1?: string, k2?: string) => {
    const key = k1 ?? k2 ?? "";
    const value = values[key];
    return value === undefined || value === null ? "" : String(value);
  });

const applyConsignaDesdeApi = (exercise: Exercise, dificultad: string | undefined, prng: PRNG): Exercise => {
  const tema = getTemaByIdSync(exercise.idTema);
  if (!tema) {
    throw new Error(`No se pudo resolver tema de consignas para química ${String(exercise.idTema).padStart(2, "0")}.`);
  }

  const catalogo = getCatalogoTemaSync(tema);
  if (!Array.isArray(catalogo) || catalogo.length === 0) {
    throw new Error(`No hay consignas precargadas para ${tema}.`);
  }

  const items = catalogo as ConsignaCatalogItem[];
  const nivelCore = getNivelCore(dificultad ?? "media");
  const maxLevel = DIFICULTAD_ORDEN.indexOf(nivelCore);
  const pool = items.filter((item) =>
    item?.activo === true &&
    typeof item.enunciadoBase === "string" &&
    DIFICULTAD_ORDEN.includes(item.difficulty) &&
    DIFICULTAD_ORDEN.indexOf(item.difficulty) <= maxLevel
  );

  if (pool.length === 0) {
    throw new Error(`No hay consignas activas para ${tema} en nivel ${nivelCore}.`);
  }

  const selected = pool[prng.int(0, pool.length - 1)];
  const data = selected.data && typeof selected.data === "object" ? selected.data : {};
  const enunciado = renderEnunciado(selected.enunciadoBase, data);

  if (!enunciado || enunciado.trim().length === 0) {
    throw new Error(`La consigna de ${tema} es inválida o vacía.`);
  }

  return { ...exercise, enunciado };
};

const wrapWithPrng =
  (generator: GeneratorFn): GeneratorFn =>
  (dificultad, prng) => {
    parseQuimicaParams(dificultad);
    if (!prng) {
      throw new Error("Se requiere un PRNG inicializado para generar ejercicios.");
    }
    setPrng(prng);
    const exercise = generator(dificultad, prng);
    return applyConsignaDesdeApi(exercise, dificultad, prng);
  };

// =======================================================
// LAZY CACHE: idTema → GeneratorFn (wrapped con PRNG y consigna)
// =======================================================

export const QUIMICA_TEMA_MAX = 95;

const QUIMICA_CACHE = new Map<number, GeneratorFn>();

export async function getGeneradorQuimica(idTema: number): Promise<GeneratorFn | undefined> {
  if (QUIMICA_CACHE.has(idTema)) return QUIMICA_CACHE.get(idTema)!;

  let raw: GeneratorFn | undefined;
  switch (idTema) {
    /* Estequiometría */
    case 1: { const { generarBalanceo } = await import("./01_balanceo"); raw = generarBalanceo; break; }
    case 2: { const { generarCalculoMoles } = await import("./02_calculo_moles"); raw = generarCalculoMoles; break; }
    case 3: { const { generarCalculoMasa } = await import("./03_calculo_masa"); raw = generarCalculoMasa; break; }
    case 4: { const { generarNumeroParticulas } = await import("./04_numero_particulas"); raw = generarNumeroParticulas; break; }
    case 5: { const { generarRelacionesMolares } = await import("./05_relaciones_molares"); raw = generarRelacionesMolares; break; }
    case 6: { const { generarReactivoLimitante } = await import("./06_reactivo_limitante"); raw = generarReactivoLimitante; break; }
    case 7: { const { generarReactivoEnExceso } = await import("./07_reactivo_en_exceso"); raw = generarReactivoEnExceso; break; }
    case 8: { const { generarRendimientoTeorico } = await import("./08_rendimiento_teorico"); raw = generarRendimientoTeorico; break; }
    case 9: { const { generarPorcentajeRendimiento } = await import("./09_porcentaje_rendimiento"); raw = generarPorcentajeRendimiento; break; }
    case 10: { const { generarPurezaReactivos } = await import("./10_pureza_reactivos"); raw = generarPurezaReactivos; break; }
    case 11: { const { generarLeyProporcionesMultiples } = await import("./11_ley_proporciones_multiples"); raw = generarLeyProporcionesMultiples; break; }
    case 12: { const { generarLeyProporcionesDefinidas } = await import("./12_ley_proporciones_definidas"); raw = generarLeyProporcionesDefinidas; break; }

    /* Soluciones */
    case 13: { const { generarPorcentajeMasaMasa } = await import("./13_porcentaje_masa_masa"); raw = generarPorcentajeMasaMasa; break; }
    case 14: { const { generarPorcentajeMasaVolumen } = await import("./14_porcentaje_masa_volumen"); raw = generarPorcentajeMasaVolumen; break; }
    case 15: { const { generarPorcentajeVolumenVolumen } = await import("./15_porcentaje_volumen_volumen"); raw = generarPorcentajeVolumenVolumen; break; }
    case 16: { const { generarMolaridad } = await import("./16_molaridad"); raw = generarMolaridad; break; }
    case 17: { const { generarMolalidad } = await import("./17_molalidad"); raw = generarMolalidad; break; }
    case 18: { const { generarNormalidad } = await import("./18_normalidad"); raw = generarNormalidad; break; }
    case 19: { const { generarFraccionMolar } = await import("./19_fraccion_molar"); raw = generarFraccionMolar; break; }
    case 20: { const { generarDiluciones } = await import("./20_diluciones"); raw = generarDiluciones; break; }
    case 21: { const { generarPreparacionSoluciones } = await import("./21_preparacion_soluciones"); raw = generarPreparacionSoluciones; break; }

    /* Gases */
    case 22: { const { generarLeyBoyle } = await import("./22_ley_boyle"); raw = generarLeyBoyle; break; }
    case 23: { const { generarLeyCharles } = await import("./23_ley_charles"); raw = generarLeyCharles; break; }
    case 24: { const { generarLeyGayLussac } = await import("./24_ley_gay_lussac"); raw = generarLeyGayLussac; break; }
    case 25: { const { generarLeyCombinadaGases } = await import("./25_ley_combinada_gases"); raw = generarLeyCombinadaGases; break; }
    case 26: { const { generarGasIdeal } = await import("./26_gas_ideal"); raw = generarGasIdeal; break; }
    case 27: { const { generarPresionesParciales } = await import("./27_presiones_parciales"); raw = generarPresionesParciales; break; }
    case 28: { const { generarMezclaGases } = await import("./28_mezcla_gases"); raw = generarMezclaGases; break; }

    /* Termoquímica */
    case 29: { const { generarCalorQ } = await import("./29_calor"); raw = generarCalorQ; break; }
    case 30: { const { generarCambioEntalpia } = await import("./30_cambio_entalpia"); raw = generarCambioEntalpia; break; }
    case 31: { const { generarLeyHess } = await import("./31_ley_hess"); raw = generarLeyHess; break; }
    case 32: { const { generarEnergiaReaccion } = await import("./32_energia_reaccion"); raw = generarEnergiaReaccion; break; }
    case 33: { const { generarPoderCalorifico } = await import("./33_poder_calorifico"); raw = generarPoderCalorifico; break; }

    /* Ácidos y Bases */
    case 34: { const { generarPH } = await import("./34_pH"); raw = generarPH; break; }
    case 35: { const { generarPOH } = await import("./35_pOH"); raw = generarPOH; break; }
    case 36: { const { generarKa_pKa } = await import("./36_Ka_pKa"); raw = generarKa_pKa; break; }
    case 37: { const { generarKb_pKb } = await import("./37_Kb_pKb"); raw = generarKb_pKb; break; }
    case 38: { const { generarConcentracionesH_OH } = await import("./38_concentraciones_H_OH"); raw = generarConcentracionesH_OH; break; }
    case 39: { const { generarFuerzaAcidosBases } = await import("./39_fuerza_acidos_bases"); raw = generarFuerzaAcidosBases; break; }
    case 40: { const { generarNeutralizacion } = await import("./40_neutralizacion"); raw = generarNeutralizacion; break; }
    case 41: { const { generarTitulacionesSimples } = await import("./41_titulaciones_simples"); raw = generarTitulacionesSimples; break; }

    /* Equilibrio */
    case 42: { const { generarKc } = await import("./42_kc"); raw = generarKc; break; }
    case 43: { const { generarKp } = await import("./43_kp"); raw = generarKp; break; }
    case 44: { const { generarQ_Direccion } = await import("./44_q_direccion"); raw = generarQ_Direccion; break; }
    case 45: { const { generarProblemasICE } = await import("./45_problemas_ice"); raw = generarProblemasICE; break; }
    case 46: { const { generarConcentracionesEquilibrio } = await import("./46_concentraciones_equilibrio"); raw = generarConcentracionesEquilibrio; break; }

    /* Electroquímica */
    case 47: { const { generarPotencialesEstandar } = await import("./47_potenciales_estandar"); raw = generarPotencialesEstandar; break; }
    case 48: { const { generarEcelda } = await import("./48_electroquimica_Ecelda"); raw = generarEcelda; break; }
    case 49: { const { generarAnodoCatodo } = await import("./49_anodo_catodo"); raw = generarAnodoCatodo; break; }
    case 50: { const { generarDeltaG } = await import("./50_deltaG"); raw = generarDeltaG; break; }
    case 51: { const { generarLeyesFaraday } = await import("./51_leyes_faraday"); raw = generarLeyesFaraday; break; }
    case 52: { const { generarMasaElectrolisis } = await import("./52_masa_electrolisis"); raw = generarMasaElectrolisis; break; }

    /* Cinética */
    case 53: { const { generarLeyVelocidad } = await import("./53_ley_velocidad"); raw = generarLeyVelocidad; break; }
    case 54: { const { generarOrdenReaccion } = await import("./54_orden_reaccion"); raw = generarOrdenReaccion; break; }
    case 55: { const { generarConstanteK } = await import("./55_constante_k"); raw = generarConstanteK; break; }
    case 56: { const { generarSemivida } = await import("./56_semivida"); raw = generarSemivida; break; }
    case 57: { const { generarGraficosCinetica } = await import("./57_graficos_cinetica"); raw = generarGraficosCinetica; break; }

    /* Solubilidad */
    case 58: { const { generarKsp } = await import("./58_ksp"); raw = generarKsp; break; }
    case 59: { const { generarSolubilidadMolar } = await import("./59_solubilidad_molar"); raw = generarSolubilidadMolar; break; }
    case 60: { const { generarPrecipitacion } = await import("./60_precipitacion"); raw = generarPrecipitacion; break; }
    case 61: { const { generarConcentracionMaximaAntesPrecipitar } = await import("./61_concentracion_maxima"); raw = generarConcentracionMaximaAntesPrecipitar; break; }

    /* Coligativas */
    case 62: { const { generarDescensoPuntoCongelacion } = await import("./62_descenso_punto_congelacion"); raw = generarDescensoPuntoCongelacion; break; }
    case 63: { const { generarElevacionPuntoEbullicion } = await import("./63_elevacion_punto_ebullicion"); raw = generarElevacionPuntoEbullicion; break; }
    case 64: { const { generarPresionOsmotica } = await import("./64_presion_osmotica"); raw = generarPresionOsmotica; break; }
    case 65: { const { generarFactorVantHoff } = await import("./65_factor_vant_hoff"); raw = generarFactorVantHoff; break; }

    /* Tabla periódica */
    case 66: { const { generarClasificacionTablaPeriodica } = await import("./66_tabla_periodica_clasificacion"); raw = generarClasificacionTablaPeriodica; break; }
    case 67: { const { generarNumeroAtomico } = await import("./67_tabla_periodica_numero_atomico"); raw = generarNumeroAtomico; break; }
    case 68: { const { generarTendenciasPeriodicas } = await import("./68_tendencias_periodicas_conceptual"); raw = generarTendenciasPeriodicas; break; }
    case 69: { const { generarElectronegatividadComparacion } = await import("./69_electronegatividad_comparacion"); raw = generarElectronegatividadComparacion; break; }
    case 70: { const { generarRadioAtomicoComparacion } = await import("./70_radio_atomico_comparacion"); raw = generarRadioAtomicoComparacion; break; }
    case 71: { const { generarValenciaTipica } = await import("./71_valencia_tipica"); raw = generarValenciaTipica; break; }

    /* Estructura atómica */
    case 72: { const { generarParticulasSubatomicas } = await import("./72_particulas_subatomicas"); raw = generarParticulasSubatomicas; break; }
    case 73: { const { generarIonesCationesAniones } = await import("./73_iones_cationes_aniones"); raw = generarIonesCationesAniones; break; }
    case 74: { const { generarConfiguracionElectronica } = await import("./74_configuracion_electronica"); raw = generarConfiguracionElectronica; break; }
    case 75: { const { generarNivelesSubnivelesEnergia } = await import("./75_niveles_y_subniveles"); raw = generarNivelesSubnivelesEnergia; break; }
    case 76: { const { generarOrbitalesSPDF } = await import("./76_orbitales_spdf"); raw = generarOrbitalesSPDF; break; }

    /* Enlaces */
    case 77: { const { generarEnlaceIonico } = await import("./77_enlace_ionico"); raw = generarEnlaceIonico; break; }
    case 78: { const { generarEnlaceCovalente } = await import("./78_enlace_covalente"); raw = generarEnlaceCovalente; break; }
    case 79: { const { generarEnlaceMetalico } = await import("./79_enlace_metalico"); raw = generarEnlaceMetalico; break; }
    case 80: { const { generarPolaridadEnlaces } = await import("./80_polaridad_enlaces"); raw = generarPolaridadEnlaces; break; }
    case 81: { const { generarGeometriaMolecularVSEPR } = await import("./81_geometria_molecular_vsepr"); raw = generarGeometriaMolecularVSEPR; break; }

    /* Mezclas y materiales */
    case 82: { const { generarSustanciaPuraVsMezcla } = await import("./82_sustancia_pura_vs_mezcla"); raw = generarSustanciaPuraVsMezcla; break; }
    case 83: { const { generarMezclaHomogeneaHeterogenea } = await import("./83_mezcla_homogenea_heterogenea"); raw = generarMezclaHomogeneaHeterogenea; break; }
    case 84: { const { generarMetodosSeparacion } = await import("./84_metodos_separacion"); raw = generarMetodosSeparacion; break; }
    case 85: { const { generarPropiedadesFisicasVsQuimicas } = await import("./85_propiedades_fisicas_vs_quimicas"); raw = generarPropiedadesFisicasVsQuimicas; break; }

    /* Tipos de reacciones */
    case 86: { const { generarReaccionSintesis } = await import("./86_sintesis"); raw = generarReaccionSintesis; break; }
    case 87: { const { generarReaccionDescomposicion } = await import("./87_descomposicion"); raw = generarReaccionDescomposicion; break; }
    case 88: { const { generarDesplazamientoSimpleDoble } = await import("./88_desplazamiento_simple_doble"); raw = generarDesplazamientoSimpleDoble; break; }
    case 89: { const { generarReaccionCombustion } = await import("./89_combustion"); raw = generarReaccionCombustion; break; }
    case 90: { const { generarNeutralizacionAcidoBase } = await import("./90_neutralizacion"); raw = generarNeutralizacionAcidoBase; break; }
    case 91: { const { generarReaccionPrecipitacion } = await import("./91_precipitacion"); raw = generarReaccionPrecipitacion; break; }

    /* Seguridad química */
    case 92: { const { generarPictogramasGHS } = await import("./92_pictogramas_ghs"); raw = generarPictogramasGHS; break; }
    case 93: { const { generarMaterialesInflamables } = await import("./93_materiales_inflamables"); raw = generarMaterialesInflamables; break; }
    case 94: { const { generarRiesgosToxicos } = await import("./94_riesgos_toxicos"); raw = generarRiesgosToxicos; break; }
    case 95: { const { generarEquiposProteccionQuimica } = await import("./95_equipos_proteccion"); raw = generarEquiposProteccionQuimica; break; }

    default: return undefined;
  }

  if (raw) {
    const wrapped = wrapWithPrng(raw);
    QUIMICA_CACHE.set(idTema, wrapped);
    return wrapped;
  }
  return undefined;
}

const QUIMICA_GENERATOR_VERSION = 1;

export async function getDescriptorQuimicaPorTema(
  idTema: number
): Promise<GeneratorDescriptor<Exercise, Parameters<GeneratorFn>> | undefined> {
  const generator = await getGeneradorQuimica(idTema);
  if (!generator) return undefined;
  const generatorId = `quimica:${idTema}`;
  return {
    id: generatorId,
    version: QUIMICA_GENERATOR_VERSION,
    generate: (...args) => ({
      ...generator(...args),
      generatorId,
      generatorVersion: QUIMICA_GENERATOR_VERSION,
    }),
  };
}
