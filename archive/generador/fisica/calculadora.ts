import type { Calculator, CalculoRequest, CalculoResponse } from "../core/types";

const redondear = (valor: number, decimales = 4) =>
  Number(valor.toFixed(decimales));

export const crearCalculadoraFisica = (): Calculator => ({
  calcular: (req: CalculoRequest): CalculoResponse => {
    const pasos: string[] = [];
    const { tipo, payload } = req;

    const respuesta = (resultado: number, detalle?: string) => {
      if (detalle) pasos.push(detalle);
      return { resultado: redondear(resultado), pasos };
    };

    switch (tipo) {
      case "MRU_distancia": {
        const { velocidad, tiempo } = payload;
        return respuesta(velocidad * tiempo, "d = v · t");
      }
      case "MRUV_velocidad_final": {
        const { v0, aceleracion, tiempo } = payload;
        return respuesta(v0 + aceleracion * tiempo, "vf = v0 + a · t");
      }
      case "relacion_distancia_tiempo_distancia": {
        const { velocidad, tiempo } = payload;
        return respuesta(velocidad * tiempo, "d = v · t");
      }
      case "relacion_distancia_tiempo_velocidad": {
        const { distancia, tiempo } = payload;
        return respuesta(distancia / tiempo, "v = d / t");
      }
      case "relacion_distancia_tiempo_tiempo": {
        const { distancia, velocidad } = payload;
        return respuesta(distancia / velocidad, "t = d / v");
      }
      case "caida_libre": {
        const { g, tiempo } = payload;
        return respuesta(g * tiempo, "v = g · t");
      }
      case "conversion_unidades": {
        const { valor, factor } = payload;
        return respuesta(valor * factor, "valor × factor");
      }
      case "conversion_C_a_F": {
        const { temperatura } = payload;
        return respuesta(temperatura * (9 / 5) + 32, "°F = (°C × 9/5) + 32");
      }
      case "conversion_F_a_C": {
        const { temperatura } = payload;
        return respuesta((temperatura - 32) * (5 / 9), "°C = (°F − 32) × 5/9");
      }
      case "ley_ohm_calcular_V": {
        const { corriente, resistencia } = payload;
        return respuesta(corriente * resistencia, "V = I · R");
      }
      case "ley_ohm_calcular_I": {
        const { voltaje, resistencia } = payload;
        return respuesta(voltaje / resistencia, "I = V / R");
      }
      case "ley_ohm_calcular_R": {
        const { voltaje, corriente } = payload;
        return respuesta(voltaje / corriente, "R = V / I");
      }
      case "potencia_electrica": {
        const { voltaje, corriente } = payload;
        return respuesta(voltaje * corriente, "P = V · I");
      }
      case "resistencia_serie": {
        const { resistencias } = payload as { resistencias: number[] };
        const total = resistencias.reduce((acc, val) => acc + val, 0);
        return respuesta(total, "R = ΣRi");
      }
      case "resistencia_paralelo": {
        const { resistencias } = payload as { resistencias: number[] };
        const inversa = resistencias.reduce((acc, val) => acc + 1 / val, 0);
        return respuesta(1 / inversa, "1/R = Σ(1/Ri)");
      }
      case "consumo_electrico": {
        const { potencia, tiempo } = payload;
        return respuesta((potencia * tiempo) / 1000, "kWh = (W × h) / 1000");
      }
      case "peso": {
        const { masa, g } = payload;
        return respuesta(masa * g, "P = m · g");
      }
      case "suma_fuerzas": {
        const { fuerzas } = payload as { fuerzas: number[] };
        const total = fuerzas.reduce((acc, val) => acc + val, 0);
        return respuesta(total, "ΣF = F1 + F2 + ...");
      }
      case "friccion": {
        const { masa, coeficiente, g } = payload;
        return respuesta(masa * coeficiente * g, "F = μ · m · g");
      }
      case "ley_hooke": {
        const { constante, deformacion } = payload;
        return respuesta(constante * deformacion, "F = k · x");
      }
      case "plano_inclinado": {
        const { masa, angulo, g } = payload;
        const rad = (angulo * Math.PI) / 180;
        return respuesta(masa * g * Math.sin(rad), "F = m · g · sin(θ)");
      }
      case "trabajo_mecanico": {
        const { fuerza, distancia } = payload;
        return respuesta(fuerza * distancia, "W = F · d");
      }
      case "potencia_mecanica": {
        const { trabajo, tiempo } = payload;
        return respuesta(trabajo / tiempo, "P = W / t");
      }
      case "energia_potencial": {
        const { masa, g, altura } = payload;
        return respuesta(masa * g * altura, "Ep = m · g · h");
      }
      case "energia_cinetica": {
        const { masa, velocidad } = payload;
        return respuesta(0.5 * masa * velocidad ** 2, "Ec = 1/2 · m · v²");
      }
      case "conservacion_energia": {
        const { g, altura } = payload;
        return respuesta(Math.sqrt(2 * g * altura), "v = √(2 · g · h)");
      }
      case "movimiento_vertical_altura_max": {
        const { v0, g } = payload;
        return respuesta((v0 ** 2) / (2 * g), "h = v0² / (2 · g)");
      }
      case "movimiento_horizontal_alcance": {
        const { altura, velocidad, g } = payload;
        const tiempo = Math.sqrt((2 * altura) / g);
        return respuesta(velocidad * tiempo, "x = v · √(2h/g)");
      }
      case "calor": {
        const { masa, calorEspecifico, deltaT } = payload;
        return respuesta(masa * 1000 * calorEspecifico * deltaT, "Q = m · c · ΔT");
      }
      case "cambio_estado": {
        const { masa, calorLatente } = payload;
        return respuesta(masa * calorLatente, "Q = m · L");
      }
      case "dilatacion_lineal": {
        const { longitud, coeficiente, deltaT } = payload;
        const deltaL = longitud * coeficiente * deltaT;
        return respuesta(deltaL * 100, "ΔL = L0 · α · ΔT");
      }
      case "ecuacion_lentes": {
        const { distanciaObjeto, distanciaFocal } = payload;
        const inverso = 1 / distanciaFocal - 1 / distanciaObjeto;
        return respuesta(1 / inverso, "1/f = 1/do + 1/di");
      }
      case "indice_refraccion": {
        const { c, velocidadMedio } = payload;
        return respuesta(c / velocidadMedio, "n = c / v");
      }
      case "velocidad_medio": {
        const { c, indiceMedio } = payload;
        return respuesta(c / indiceMedio, "v = c / n");
      }
      case "calcular_frecuencia": {
        const { periodo } = payload;
        return respuesta(1 / periodo, "f = 1 / T");
      }
      case "calcular_periodo": {
        const { frecuencia } = payload;
        return respuesta(1 / frecuencia, "T = 1 / f");
      }
      case "velocidad_ondas": {
        const { frecuencia, longitud } = payload;
        return respuesta(frecuencia * longitud, "v = f · λ");
      }
      case "longitud_onda": {
        const { velocidad, frecuencia } = payload;
        return respuesta(velocidad / frecuencia, "λ = v / f");
      }
      case "optica_geometrica_reflexion": {
        const { anguloIncidencia } = payload;
        return respuesta(anguloIncidencia, "θr = θi");
      }
      case "optica_geometrica_incidencia": {
        const { anguloReflexion } = payload;
        return respuesta(anguloReflexion, "θi = θr");
      }
      case "presion": {
        const { fuerza, area } = payload;
        return respuesta(fuerza / area, "P = F / A");
      }
      case "presion_hidrostatica": {
        const { densidad, g, profundidad } = payload;
        return respuesta(densidad * g * profundidad, "P = ρ · g · h");
      }
      case "caudal": {
        const { volumen, tiempo } = payload;
        return respuesta(volumen / tiempo, "Q = V / t");
      }
      case "densidad": {
        const { masa, volumen } = payload;
        return respuesta(masa / volumen, "ρ = m / V");
      }
      case "masa_desde_densidad": {
        const { densidad, volumen } = payload;
        return respuesta(densidad * volumen, "m = ρ · V");
      }
      default:
        return {
          resultado: NaN,
          pasos: [`Tipo de cálculo no soportado: ${tipo}`],
        };
    }
  },
});
