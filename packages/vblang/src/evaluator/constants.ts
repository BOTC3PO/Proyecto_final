/**
 * Constantes globales pre-cargadas en el scope al inicio de cada generación.
 * Spec sección 6.7.
 *
 * Decisión: una variable declarada en `variables:` con el mismo nombre que
 * una constante la sobrescribe (las constantes son defaults, no reservadas).
 */
export const CONSTANTES_GLOBALES: Record<string, number> = {
  pi: Math.PI,
  e: Math.E,
  g: 9.80665, // gravedad terrestre (m/s²)
  c: 299792458, // velocidad de la luz (m/s)
  h: 6.62607015e-34, // constante de Planck
  k_b: 1.380649e-23, // constante de Boltzmann
  N_A: 6.02214076e23, // número de Avogadro
  R: 8.314462618, // constante de los gases (J/(mol·K))
  epsilon_0: 8.8541878128e-12,
  mu_0: 1.25663706212e-6,
};
