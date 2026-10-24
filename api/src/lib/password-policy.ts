/**
 * Política de contraseñas NUEVAS (registro, alta de usuarios, admin). El login no la aplica: quien
 * ya tiene una contraseña de 6 caracteres tiene que poder entrar (y se le pide cambiarla aparte).
 */
export const PASSWORD_MIN_LENGTH = 10;
export const PASSWORD_MAX_LENGTH = 256;

// Contraseñas muy comunes de 10 caracteres o más (y variantes frecuentes en español).
const COMUNES = new Set([
  "1234567890", "12345678910", "0123456789", "1234567891", "123456789012", "1q2w3e4r5t", "1qaz2wsx3e",
  "qwertyuiop", "qwertyuiop1", "asdfghjkl1", "asdfghjklñ", "zxcvbnm123", "abcdefghij", "abcdefg123",
  "password12", "password123", "password1234", "passw0rd12", "contrasena1", "contrasena12", "contrasena123",
  "contraseña1", "contraseña12", "contraseña123", "iloveyou12", "iloveyou123", "welcome123", "administrador",
  "administrator", "superman123", "bienvenido1", "bienvenido12", "bienvenido123", "mipassword1", "mipassword12",
  "cambiame123", "cambiame1234", "changeme123", "letmein1234", "football123", "colegio123", "escuela123",
  "estudiante1", "estudiante12", "estudiante123", "alumno1234", "profesor123", "virtualbook", "virtualbook1",
  "virtualbook123", "argentina123", "boca juniors", "bocajuniors", "riverplate1",
]);

type Contexto = { username?: string | null; email?: string | null };

const normalizar = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

/**
 * Devuelve el motivo por el que la contraseña es débil, o `null` si es aceptable.
 * Los mensajes son para mostrar al usuario.
 */
export function motivoPasswordDebil(password: string, ctx: Contexto = {}): string | null {
  if (password.length < PASSWORD_MIN_LENGTH) {
    return `La contraseña debe tener al menos ${PASSWORD_MIN_LENGTH} caracteres.`;
  }
  const base = normalizar(password).replace(/\s+/g, "");
  if (COMUNES.has(base)) return "Esa contraseña es demasiado común. Elegí otra.";
  if (/^(.)\1+$/.test(base)) return "La contraseña no puede ser un solo carácter repetido.";
  const usuario = ctx.username ? normalizar(ctx.username) : "";
  if (usuario.length >= 4 && base.includes(usuario)) return "La contraseña no puede contener tu nombre de usuario.";
  const local = ctx.email ? normalizar(ctx.email.split("@")[0] ?? "") : "";
  if (local.length >= 4 && base.includes(local)) return "La contraseña no puede contener tu correo.";
  return null;
}
