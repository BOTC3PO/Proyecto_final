import type { Calculator, CalculoRequest, CalculoResponse } from "../core/types";

const redondear = (valor: number, decimales = 4) => Number(valor.toFixed(decimales));

export const crearCalculadoraFisica = (): Calculator => ({
  calcular: (req: CalculoRequest): CalculoResponse => {
    const pasos: string[] = [];
    const { tipo, payload } = req;
    const p = payload as Record<string, number>;

    const r = (resultado: number, detalle?: string): CalculoResponse => {
      if (detalle) pasos.push(detalle);
      return { resultado: redondear(resultado), pasos };
    };

    switch (tipo) {
      // ── Cinemática ──────────────────────────────────────────────
      case "MRU_distancia":
        return r(p.velocidad * p.tiempo, "d = v · t");
      case "MRUV_velocidad_final":
        return r(p.v0 + p.aceleracion * p.tiempo, "vf = v0 + a · t");
      case "MRUV_posicion":
        return r(p.v0 * p.tiempo + 0.5 * p.aceleracion * p.tiempo ** 2, "x = v0·t + ½·a·t²");
      case "caida_libre":
        return r(p.g * p.tiempo, "v = g · t");
      case "movimiento_vertical_altura_max":
        return r(p.v0 ** 2 / (2 * p.g), "h = v0² / (2·g)");
      case "movimiento_horizontal_alcance":
        return r(p.velocidad * Math.sqrt((2 * p.altura) / p.g), "x = v·√(2h/g)");
      case "relacion_distancia_tiempo_distancia":
        return r(p.velocidad * p.tiempo, "d = v · t");
      case "relacion_distancia_tiempo_velocidad":
        return r(p.distancia / p.tiempo, "v = d / t");
      case "relacion_distancia_tiempo_tiempo":
        return r(p.distancia / p.velocidad, "t = d / v");
      case "conversion_unidades":
        return r(p.valor * p.factor, "resultado = valor × factor");

      // ── Temperatura ─────────────────────────────────────────────
      case "conversion_C_a_F":
        return r(p.temperatura * (9 / 5) + 32, "°F = (°C × 9/5) + 32");
      case "conversion_F_a_C":
        return r((p.temperatura - 32) * (5 / 9), "°C = (°F − 32) × 5/9");
      case "conversion_C_a_K":
        return r(p.temperatura + 273.15, "K = °C + 273.15");
      case "conversion_K_a_C":
        return r(p.temperatura - 273.15, "°C = K − 273.15");

      // ── Termodinámica ───────────────────────────────────────────
      case "calor":
        return r(p.masa * p.calorEspecifico * p.deltaT, "Q = m · c · ΔT");
      case "calor_masa":
        return r(p.calor / (p.calorEspecifico * p.deltaT), "m = Q / (c · ΔT)");
      case "calor_delta_t":
        return r(p.calor / (p.masa * p.calorEspecifico), "ΔT = Q / (m · c)");
      case "cambio_estado":
        return r(p.masa * p.calorLatente, "Q = m · L");
      case "dilatacion_lineal":
        return r(p.longitud * p.coeficiente * p.deltaT, "ΔL = L0 · α · ΔT");

      // ── Electricidad ────────────────────────────────────────────
      case "ley_ohm_calcular_V":
        return r(p.corriente * p.resistencia, "V = I · R");
      case "ley_ohm_calcular_I":
        return r(p.voltaje / p.resistencia, "I = V / R");
      case "ley_ohm_calcular_R":
        return r(p.voltaje / p.corriente, "R = V / I");
      case "potencia_electrica":
        return r(p.voltaje * p.corriente, "P = V · I");
      case "consumo_electrico":
        return r((p.potencia * p.tiempo) / 1000, "E = (P × t) / 1000 [kWh]");
      case "resistencia_serie": {
        const rs = payload.resistencias as number[];
        return r(rs.reduce((a, v) => a + v, 0), "Rt = ΣRi");
      }
      case "resistencia_paralelo": {
        const rp = payload.resistencias as number[];
        return r(1 / rp.reduce((a, v) => a + 1 / v, 0), "1/Rt = Σ(1/Ri)");
      }

      // ── Dinámica ────────────────────────────────────────────────
      case "suma_fuerzas": {
        const fs = payload.fuerzas as number[];
        return r(fs.reduce((a, v) => a + v, 0), "Fnet = ΣFi");
      }
      case "peso":
        return r(p.masa * p.g, "P = m · g");
      case "masa_desde_peso":
        return r(p.peso / p.g, "m = P / g");
      case "friccion":
        return r(p.coeficiente * p.normal, "Fr = μ · N");
      case "friccion_coeficiente":
        return r(p.fuerza / p.normal, "μ = Fr / N");
      case "friccion_normal":
        return r(p.fuerza / p.coeficiente, "N = Fr / μ");
      case "plano_inclinado":
        return r(p.masa * p.g * Math.sin((p.angulo * Math.PI) / 180), "F = m·g·sin(θ)");
      case "ley_hooke":
        return r(p.constante * p.deformacion, "F = k · x");
      case "ley_hooke_constante":
        return r(p.fuerza / p.deformacion, "k = F / x");
      case "ley_hooke_deformacion":
        return r(p.fuerza / p.constante, "x = F / k");

      // ── Energía ─────────────────────────────────────────────────
      case "trabajo_mecanico":
        return r(p.fuerza * p.distancia * Math.cos((p.angulo ?? 0) * Math.PI / 180), "W = F·d·cos(θ)");
      case "energia_cinetica":
        return r(0.5 * p.masa * p.velocidad ** 2, "Ec = ½·m·v²");
      case "energia_potencial":
        return r(p.masa * p.g * p.altura, "Ep = m·g·h");
      case "conservacion_energia":
        return r(Math.sqrt(2 * p.g * p.altura), "v = √(2·g·h)");
      case "potencia_mecanica":
        return r(p.trabajo / p.tiempo, "P = W / t");

      // ── Ondas ───────────────────────────────────────────────────
      case "velocidad_ondas":
        return r(p.frecuencia * p.longitud, "v = f · λ");
      case "longitud_onda":
        return r(p.velocidad / p.frecuencia, "λ = v / f");
      case "frecuencia_onda":
        return r(p.velocidad / p.longitud, "f = v / λ");
      case "calcular_frecuencia":
        return r(1 / p.periodo, "f = 1 / T");
      case "calcular_periodo":
        return r(1 / p.frecuencia, "T = 1 / f");

      // ── Fluidos ─────────────────────────────────────────────────
      case "densidad":
        return r(p.masa / p.volumen, "ρ = m / V");
      case "masa_desde_densidad":
        return r(p.densidad * p.volumen, "m = ρ · V");
      case "volumen_desde_densidad":
        return r(p.masa / p.densidad, "V = m / ρ");
      case "presion":
        return r(p.fuerza / p.area, "P = F / A");
      case "presion_fuerza":
        return r(p.presion * p.area, "F = P · A");
      case "presion_area":
        return r(p.fuerza / p.presion, "A = F / P");
      case "presion_hidrostatica":
        return r(p.densidad * p.g * p.profundidad, "P = ρ·g·h");
      case "caudal":
        return r(p.volumen / p.tiempo, "Q = V / t");
      case "caudal_area_velocidad":
        return r(p.area * p.velocidad, "Q = A · v");

      default:
        return { resultado: NaN, pasos: [`Tipo no soportado: ${tipo}`] };
    }
  },
});
