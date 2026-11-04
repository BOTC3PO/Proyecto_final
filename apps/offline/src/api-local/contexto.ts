import type { Almacen } from "./almacen";
import { ITERACIONES } from "./claves";

export type Configuracion = {
  /** La plataforma dejó de estar en producción: los permisos ya emitidos no vencen y no se llama al servidor. */
  modoAutonomo: boolean;
  /** Se pueden crear usuarios locales (alumno o profesor). */
  usuariosLocales: boolean;
  /** Clave pública Ed25519 en crudo (base64url) que verifica los permisos; sin ella no se activan cuentas. */
  clavePublica: string | null;
};

/** El servidor de la plataforma, para activar y renovar cuentas. */
export type Remoto = { base: string; fetch: typeof fetch };

export type Contexto = {
  almacen: Almacen;
  config: Configuracion;
  remoto: Remoto | null;
  /** Iteraciones de PBKDF2 para las contraseñas nuevas (las pruebas usan menos). */
  iteraciones: number;
  ahora: () => Date;
  /** Tareas que no frenan la respuesta (por ejemplo, actualizar los módulos de la escuela al entrar). */
  segundoPlano: (tarea: Promise<unknown>) => void;
};

export const CONFIG_POR_DEFECTO: Configuracion = { modoAutonomo: false, usuariosLocales: true, clavePublica: null };

export const crearContexto = (almacen: Almacen, opciones: Partial<Omit<Contexto, "almacen">> = {}): Contexto => ({
  almacen,
  config: opciones.config ?? CONFIG_POR_DEFECTO,
  remoto: opciones.remoto ?? null,
  iteraciones: opciones.iteraciones ?? ITERACIONES,
  ahora: opciones.ahora ?? (() => new Date()),
  segundoPlano: opciones.segundoPlano ?? ((t) => void t.catch((e) => console.info("API local, en segundo plano:", e))),
});

export type Perfil = {
  id: string;
  tipo: "local" | "plataforma";
  rol: "USER" | "TEACHER" | "PARENT";
  roles: string;
  username: string;
  nombre: string;
  email: string | null;
  school_id: string | null;
  menor: number;
  mostrar_a_padres: number;
};
