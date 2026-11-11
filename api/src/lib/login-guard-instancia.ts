import { ENV } from "./env";
import { CONFIG_GUARDA_POR_DEFECTO as D, GuardaLogin, crearAlmacenDelEntorno, type ConfigGuarda } from "./login-guard";
import { crearLimitadorConcurrencia } from "./concurrencia";
import { getRedisClient } from "./rate-limit";

/**
 * Configuración de los límites de ingreso. Se lee directamente de `process.env` al construir el guardián y no de `ENV`:
 * `ENV` se congela con el primer import de env.ts, que en las pruebas ocurre ANTES de que el archivo de prueba fije las
 * variables (y así las pruebas no podían cambiar ni apagar estos límites).
 *
 *   LOGIN_GUARDA=off                  desactiva los límites de ingreso (también AUTH_RATE_LIMIT_DISABLED=true)
 *   LOGIN_VENTANA_MIN=15              ventana, en minutos
 *   LOGIN_CUENTA_MAX=5                fallos por cuenta desde un dispositivo desconocido
 *   LOGIN_CUENTA_MAX_CONOCIDO=15      fallos por cuenta desde un navegador que ya entró con ella
 *   LOGIN_IP_MAX=120                  intentos netos por IP
 *   LOGIN_SPRAY_CUENTAS=10            cuentas distintas con fallos desde una IP para frenarla
 *   LOGIN_UA_SOSPECHOSOS=5            User-Agent distintos entre los fallos de una IP (baja el umbral a la mitad)
 *   LOGIN_RED_COMPARTIDA_ACIERTOS=8   cuentas distintas que entraron bien: se trata como red de escuela (topes x3)
 *   LOGIN_IPS_CONFIABLES=             IPs o CIDR IPv4 de escuelas conocidas, separadas por coma (topes x5)
 *   LOGIN_GLOBAL_FALLOS_MIN=600       fallos por minuto en toda la plataforma que activan el modo defensa
 *   LOGIN_CONCURRENCIA_MAX=4          hashes de contraseña simultáneos por instancia (el pool de libuv tiene 4 hilos)
 *   LOGIN_COLA_MAX=16                 cuántos pueden esperar (el resto recibe 503 al instante)
 *   SEGUNDO_FACTOR_MAX=5              códigos de 2FA incorrectos por persona en la ventana
 */
const env = (nombre: string) => process.env[nombre];
const verdadero = (v: string | undefined) => ["true", "1", "yes", "on"].includes((v ?? "").toLowerCase());
const entero = (nombre: string, porDefecto: number) => {
  const n = Number(env(nombre));
  return Number.isFinite(n) && n > 0 ? Math.trunc(n) : porDefecto;
};

export const configGuardaDesdeEnv = (): ConfigGuarda => ({
  habilitada: (env("LOGIN_GUARDA") ?? "on").toLowerCase() !== "off" && !verdadero(env("AUTH_RATE_LIMIT_DISABLED")),
  ventanaMs: entero("LOGIN_VENTANA_MIN", D.ventanaMs / 60_000) * 60_000,
  cuentaMax: entero("LOGIN_CUENTA_MAX", D.cuentaMax),
  cuentaMaxConocido: entero("LOGIN_CUENTA_MAX_CONOCIDO", D.cuentaMaxConocido),
  ipMax: entero("LOGIN_IP_MAX", D.ipMax),
  sprayCuentas: entero("LOGIN_SPRAY_CUENTAS", D.sprayCuentas),
  uaSospechosos: entero("LOGIN_UA_SOSPECHOSOS", D.uaSospechosos),
  redCompartidaAciertos: entero("LOGIN_RED_COMPARTIDA_ACIERTOS", D.redCompartidaAciertos),
  ipsConfiables: (env("LOGIN_IPS_CONFIABLES") ?? "").split(",").map((x) => x.trim()).filter(Boolean),
  globalFallosMin: entero("LOGIN_GLOBAL_FALLOS_MIN", D.globalFallosMin)
});

const configGuarda = configGuardaDesdeEnv();
/** ¿Están activos los límites de ingreso? */
export const limitesHabilitados = configGuarda.habilitada;
/** Intentos de código de 2FA incorrectos por persona en la ventana. */
export const segundoFactorMax = entero("SEGUNDO_FACTOR_MAX", 5);

/** Contadores compartidos entre instancias si hay Redis; en memoria (y con respaldo en memoria si Redis falla) si no. */
export const almacenLimites = crearAlmacenDelEntorno(getRedisClient());
export const guardaLogin = new GuardaLogin(almacenLimites, configGuarda, ENV.JWT_SECRET);
/** Tope de hashes de contraseña simultáneos por instancia (protege los hilos de CPU de una avalancha de logins). */
export const limitarHash = crearLimitadorConcurrencia(entero("LOGIN_CONCURRENCIA_MAX", 4), entero("LOGIN_COLA_MAX", 16));
