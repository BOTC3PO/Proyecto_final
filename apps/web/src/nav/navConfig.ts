import type { Role } from '../auth/roles';

type NavItem = { label: string; to: string; exact?: boolean };
type NavMap = Record<Role, NavItem[]>;
export const ROLE_HOME_PATH = '/';

export type DropdownItem =
  | { kind: 'link'; label: string; to: string; icon: string }
  | { kind: 'divider' }
  | { kind: 'logout' };

// Base de "Usuario/Alumno"
const userBase: NavItem[] = [
  { label: 'Inicio', to: '/alumno', exact: true },
  { label: 'Clases', to: '/clases' },
  { label: 'Tareas', to: '/tareas' },
  { label: 'Encuestas', to: '/encuestas' },
  { label: 'Progreso', to: '/progreso' },
  { label: 'Calendario', to: '/profesor/calendario' },
  { label: 'Mensajes', to: '/mensajes' },
];


export const NAV_BY_ROLE: NavMap = {
  ADMIN: [
    { label: 'Panel', to: '/admin' },
    { label: 'Usuarios', to: '/admin/usuarios' },
    { label: 'Materias', to: '/admin/materias' },
    { label: 'Módulos', to: '/modulos' },
    { label: 'Moderación', to: '/admin/moderacion' },
    { label: 'Reportes', to: '/admin/reportes' },
    { label: 'Mensajes', to: '/mensajes' },
  ],
  USER: userBase,
  PARENT: [
    { label: 'Mis hijos', to: '/hijos' },
    { label: 'Agregar hijo', to: '/hijos/agregar' },
  ],
  TEACHER: [
    { label: 'Panel', to: '/profesor', exact: true },
    { label: 'Cursos', to: '/profesor/cursos' },
    { label: 'Aulas', to: '/profesor/aulas' },
    { label: 'Módulos', to: '/modulos' },
    { label: 'Evaluaciones', to: '/profesor/evaluaciones' },
    { label: 'Calendario', to: '/profesor/calendario' },
    { label: 'Mensajes', to: '/mensajes' },
  ],
  DIRECTIVO: [
    { label: 'Panel escuela', to: '/enterprise' },
    { label: 'Aulas', to: '/enterprise/aulas' },
    { label: 'Miembros', to: '/enterprise/miembros' },
    { label: 'Módulos', to: '/enterprise/modulos' },
    { label: 'Reportes', to: '/enterprise/reportes' },
    { label: 'Calendario', to: '/enterprise/calendario' },
    { label: 'Gobernanza', to: '/gobernanza' },
    { label: 'Mensajes', to: '/mensajes' },
  ],
  GUEST: [
    { label: 'Inicio', to: ROLE_HOME_PATH },
    { label: 'Explorar', to: '/explorar' },
    { label: 'Precios', to: '/precios' },
    { label: 'Iniciar sesión', to: '/login' },
    { label: 'Registrarse', to: '/register' },
  ],
};

export const DROPDOWN_BY_ROLE: Record<Role, DropdownItem[]> = {
  USER: [
    { kind: 'link', label: 'Mi perfil',      to: '/perfil',       icon: 'user'    },
    { kind: 'link', label: 'Economía',        to: '/economia',     icon: 'coin'    },
    { kind: 'link', label: 'Tienda de temas', to: '/tienda-temas', icon: 'palette' },
    { kind: 'divider' },
    { kind: 'logout' },
  ],
  TEACHER: [
    { kind: 'link', label: 'Mi perfil', to: '/perfil', icon: 'user' },
    { kind: 'divider' },
    { kind: 'logout' },
  ],
  DIRECTIVO: [
    { kind: 'link', label: 'Mi perfil', to: '/perfil', icon: 'user' },
    { kind: 'divider' },
    { kind: 'logout' },
  ],
  ADMIN: [
    { kind: 'link', label: 'Mi perfil', to: '/perfil', icon: 'user' },
    { kind: 'divider' },
    { kind: 'logout' },
  ],
  PARENT: [
    { kind: 'link', label: 'Mi perfil', to: '/perfil', icon: 'user' },
    { kind: 'divider' },
    { kind: 'logout' },
  ],
  GUEST: [],
};
