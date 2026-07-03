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
  { label: 'Inicio',     to: '/alumno',    exact: true },
  { label: 'Clases',     to: '/clases' },
  { label: 'Tareas',     to: '/tareas' },
  { label: 'Progreso',   to: '/progreso' },
  { label: 'Pagos',      to: '/pagos',     exact: true },
  { label: 'Módulos',    to: '/modulos',   exact: true },
  { label: 'Calendario', to: '/calendario', exact: true },
  { label: 'Mensajes',   to: '/mensajes',  exact: true },
];


export const NAV_BY_ROLE: NavMap = {
  ADMIN: [
    { label: 'Panel',       to: '/admin',             exact: true },
    { label: 'Usuarios',    to: '/admin/usuarios',    exact: true },
    { label: 'Materias',    to: '/admin/materias',    exact: true },
    { label: 'Módulos',     to: '/modulos',           exact: true },
    { label: 'Plantillas',  to: '/plantillas',        exact: true },
    { label: 'Datasets',    to: '/datasets',          exact: true },
    { label: 'Moderación',  to: '/admin/moderacion',  exact: true },
    { label: 'Moderar plantillas', to: '/admin/plantillas-moderacion', exact: true },
    { label: 'Reportes',    to: '/admin/reportes',    exact: true },
    { label: 'Comisiones',  to: '/admin/comisiones',  exact: true },
    { label: 'Mensajes',    to: '/mensajes',          exact: true },
  ],
  USER: userBase,
  PARENT: [
    { label: 'Mis hijos',    to: '/hijos' },
    { label: 'Agregar hijo', to: '/hijos/agregar' },
    { label: 'Pagos',        to: '/pagos', exact: true },
  ],
  TEACHER: [
    { label: 'Panel',        to: '/profesor',              exact: true },
    { label: 'Aulas',        to: '/profesor/aulas',        exact: false },
    { label: 'Módulos',      to: '/modulos',               exact: true },
    { label: 'Plantillas',   to: '/plantillas',            exact: true },
    { label: 'Datasets',     to: '/datasets',              exact: true },
    { label: 'Evaluaciones', to: '/profesor/evaluaciones', exact: true },
    { label: 'Materiales',   to: '/profesor/materiales',   exact: true },
    { label: 'Calendario',   to: '/profesor/calendario',   exact: true },
    { label: 'Mensajes',     to: '/mensajes',              exact: true },
  ],
  DIRECTIVO: [
    { label: 'Panel escuela', to: '/enterprise',           exact: true },
    { label: 'Aulas',         to: '/enterprise/aulas',     exact: true },
    { label: 'Miembros',      to: '/enterprise/miembros',  exact: true },
    { label: 'Módulos',       to: '/modulos',              exact: true },
    { label: 'Plantillas',    to: '/plantillas',           exact: true },
    { label: 'Datasets',      to: '/datasets',             exact: true },
    { label: 'Reportes',      to: '/enterprise/reportes',  exact: true },
    { label: 'Cobros',        to: '/enterprise/cobros',    exact: true },
    { label: 'Comisiones',    to: '/enterprise/comisiones', exact: true },
    { label: 'Personalización', to: '/enterprise/personalizacion', exact: true },
    { label: 'Calendario',    to: '/enterprise/calendario', exact: true },
    { label: 'Gobernanza',    to: '/gobernanza',           exact: true },
    { label: 'Mensajes',      to: '/mensajes',             exact: true },
  ],
  GUEST: [
    { label: 'Inicio', to: ROLE_HOME_PATH },
    { label: 'Explorar', to: '/explorar' },
    { label: 'Iniciar sesión', to: '/login' },
    { label: 'Registrarse', to: '/register' },
  ],
};

export const DROPDOWN_BY_ROLE: Record<Role, DropdownItem[]> = {
  USER: [
    { kind: 'link', label: 'Mi perfil',      to: '/perfil',       icon: 'user'    },
    { kind: 'link', label: 'Economía',        to: '/economia',     icon: 'coin'    },
    { kind: 'link', label: 'Tienda de temas', to: '/tienda-temas', icon: 'palette' },
    { kind: 'link', label: 'Encuestas',       to: '/encuestas',    icon: 'poll'    },
    // PLAN-C §6 (ítem 31) — identidad conmutable: si ya creó su cuenta de
    // padre (autoservicio, FASE 6), este ítem dispara el switch real; si
    // no, lleva a Perfil a crearla (mismo patrón que "Ver como alumno").
    { kind: 'link', label: 'Ver como padre', to: '/perfil', icon: 'user' },
    { kind: 'divider' },
    { kind: 'logout' },
  ],
  TEACHER: [
    { kind: 'link', label: 'Mi perfil',       to: '/perfil',  icon: 'user'    },
    { kind: 'link', label: 'Ver como alumno', to: '/alumno',  icon: 'student' },
    { kind: 'divider' },
    { kind: 'logout' },
  ],
  DIRECTIVO: [
    { kind: 'link', label: 'Mi perfil',       to: '/perfil',  icon: 'user'    },
    { kind: 'link', label: 'Ver como alumno', to: '/alumno',  icon: 'student' },
    { kind: 'divider' },
    { kind: 'logout' },
  ],
  ADMIN: [
    { kind: 'link', label: 'Mi perfil',       to: '/perfil',  icon: 'user'    },
    { kind: 'link', label: 'Ver como alumno', to: '/alumno',  icon: 'student' },
    { kind: 'divider' },
    { kind: 'logout' },
  ],
  PARENT: [
    { kind: 'link', label: 'Mi perfil', to: '/perfil', icon: 'user' },
    // PLAN-C §6 (ítem 31) — igual que TEACHER/DIRECTIVO/ADMIN: switch real
    // con espejo ya creado, o link a Perfil para crearlo.
    { kind: 'link', label: 'Ver como alumno', to: '/alumno', icon: 'student' },
    { kind: 'divider' },
    { kind: 'logout' },
  ],
  GUEST: [],
};
