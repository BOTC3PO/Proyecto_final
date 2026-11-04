import type { Almacen } from "./almacen";
import { ITERACIONES } from "./claves";

export type Contexto = {
  almacen: Almacen;
  /** Iteraciones de PBKDF2 para las contraseñas nuevas (las pruebas usan menos). */
  iteraciones: number;
  ahora: () => Date;
};

export const crearContexto = (almacen: Almacen, opciones: Partial<Omit<Contexto, "almacen">> = {}): Contexto => ({
  almacen,
  iteraciones: opciones.iteraciones ?? ITERACIONES,
  ahora: opciones.ahora ?? (() => new Date()),
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
