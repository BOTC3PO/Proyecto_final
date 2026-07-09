import type { Role } from '../auth/roles';

// `id` es la clave estable para matching/agrupación (nunca cambia con el
// idioma); `label` es la clave de traducción en el namespace `nav.` del
// i18n (ver apps/web/src/i18n/es.json). Los componentes que renderizan
// nav items hacen `t(`nav.${item.label}`)`, nunca `item.label` directo.
type NavItem = { id: string; label: string; to: string; exact?: boolean };
type NavMap = Record<Role, NavItem[]>;
export const ROLE_HOME_PATH = '/';

export type DropdownItem =
  | { kind: 'link'; id: string; label: string; to: string; icon: string }
  | { kind: 'divider' }
  | { kind: 'logout' };

// Base de "Usuario/Alumno"
const userBase: NavItem[] = [
  { id: 'inicio',     label: 'inicio',     to: '/alumno',    exact: true },
  { id: 'clases',     label: 'clases',     to: '/clases' },
  { id: 'tareas',     label: 'tareas',     to: '/tareas' },
  { id: 'progreso',   label: 'progreso',   to: '/progreso' },
  { id: 'pagos',      label: 'pagos',      to: '/pagos',     exact: true },
  { id: 'modulos',    label: 'modulos',    to: '/modulos',   exact: true },
  { id: 'calendario', label: 'calendario', to: '/calendario', exact: true },
  { id: 'mensajes',   label: 'mensajes',   to: '/mensajes',  exact: true },
];


export const NAV_BY_ROLE: NavMap = {
  ADMIN: [
    { id: 'panel',            label: 'panel',            to: '/admin',             exact: true },
    { id: 'usuarios',         label: 'usuarios',         to: '/admin/usuarios',    exact: true },
    { id: 'materias',         label: 'materias',         to: '/admin/materias',    exact: true },
    { id: 'modulos',          label: 'modulos',          to: '/modulos',           exact: true },
    { id: 'plantillas',       label: 'plantillas',       to: '/plantillas',        exact: true },
    { id: 'datasets',         label: 'datasets',         to: '/datasets',          exact: true },
    { id: 'moderacion',       label: 'moderacion',       to: '/admin/moderacion',  exact: true },
    { id: 'moderarPlantillas', label: 'moderarPlantillas', to: '/admin/plantillas-moderacion', exact: true },
    { id: 'reportes',         label: 'reportes',         to: '/admin/reportes',    exact: true },
    { id: 'comisiones',       label: 'comisiones',       to: '/admin/comisiones',  exact: true },
    { id: 'mensajes',         label: 'mensajes',         to: '/mensajes',          exact: true },
  ],
  USER: userBase,
  PARENT: [
    { id: 'misHijos',    label: 'misHijos',    to: '/hijos' },
    { id: 'agregarHijo', label: 'agregarHijo', to: '/hijos/agregar' },
    { id: 'pagos',       label: 'pagos',       to: '/pagos', exact: true },
  ],
  TEACHER: [
    { id: 'panel',        label: 'panel',        to: '/profesor',              exact: true },
    { id: 'aulas',        label: 'aulas',        to: '/profesor/aulas',        exact: false },
    { id: 'modulos',      label: 'modulos',      to: '/modulos',               exact: true },
    { id: 'plantillas',   label: 'plantillas',   to: '/plantillas',            exact: true },
    { id: 'datasets',     label: 'datasets',     to: '/datasets',              exact: true },
    { id: 'evaluaciones', label: 'evaluaciones', to: '/profesor/evaluaciones', exact: true },
    { id: 'materiales',   label: 'materiales',   to: '/profesor/materiales',   exact: true },
    { id: 'calendario',   label: 'calendario',   to: '/profesor/calendario',   exact: true },
    { id: 'mensajes',     label: 'mensajes',     to: '/mensajes',              exact: true },
  ],
  DIRECTIVO: [
    { id: 'panelEscuela',     label: 'panelEscuela',     to: '/enterprise',           exact: true },
    { id: 'aulas',            label: 'aulas',            to: '/enterprise/aulas',     exact: true },
    { id: 'miembros',         label: 'miembros',         to: '/enterprise/miembros',  exact: true },
    { id: 'modulos',          label: 'modulos',          to: '/modulos',              exact: true },
    { id: 'plantillas',       label: 'plantillas',       to: '/plantillas',           exact: true },
    { id: 'datasets',         label: 'datasets',         to: '/datasets',             exact: true },
    { id: 'reportes',         label: 'reportes',         to: '/enterprise/reportes',  exact: true },
    { id: 'cobros',           label: 'cobros',           to: '/enterprise/cobros',    exact: true },
    { id: 'comisiones',       label: 'comisiones',       to: '/enterprise/comisiones', exact: true },
    { id: 'personalizacion',  label: 'personalizacion',  to: '/enterprise/personalizacion', exact: true },
    { id: 'calendario',       label: 'calendario',       to: '/enterprise/calendario', exact: true },
    { id: 'gobernanza',       label: 'gobernanza',       to: '/gobernanza',           exact: true },
    { id: 'mensajes',         label: 'mensajes',         to: '/mensajes',             exact: true },
  ],
  GUEST: [
    { id: 'inicio',        label: 'inicio',        to: ROLE_HOME_PATH },
    { id: 'explorar',      label: 'explorar',      to: '/explorar' },
    { id: 'iniciarSesion', label: 'iniciarSesion', to: '/login' },
    { id: 'registrarse',   label: 'registrarse',   to: '/register' },
  ],
};

export const DROPDOWN_BY_ROLE: Record<Role, DropdownItem[]> = {
  USER: [
    { kind: 'link', id: 'miPerfil',      label: 'miPerfil',      to: '/perfil',       icon: 'user'    },
    { kind: 'link', id: 'economia',       label: 'economia',       to: '/economia',     icon: 'coin'    },
    { kind: 'link', id: 'tiendaTemas',    label: 'tiendaTemas',    to: '/tienda-temas', icon: 'palette' },
    { kind: 'link', id: 'encuestas',      label: 'encuestas',      to: '/encuestas',    icon: 'poll'    },
    // PLAN-C §6 (ítem 31) — identidad conmutable: si ya creó su cuenta de
    // padre (autoservicio, FASE 6), este ítem dispara el switch real; si
    // no, lleva a Perfil a crearla (mismo patrón que "Ver como alumno").
    { kind: 'link', id: 'verComoPadre', label: 'verComoPadre', to: '/perfil', icon: 'user' },
    { kind: 'divider' },
    { kind: 'logout' },
  ],
  TEACHER: [
    { kind: 'link', id: 'miPerfil',       label: 'miPerfil',       to: '/perfil',  icon: 'user'    },
    { kind: 'link', id: 'verComoAlumno', label: 'verComoAlumno', to: '/alumno',  icon: 'student' },
    { kind: 'divider' },
    { kind: 'logout' },
  ],
  DIRECTIVO: [
    { kind: 'link', id: 'miPerfil',       label: 'miPerfil',       to: '/perfil',  icon: 'user'    },
    { kind: 'link', id: 'verComoAlumno', label: 'verComoAlumno', to: '/alumno',  icon: 'student' },
    { kind: 'divider' },
    { kind: 'logout' },
  ],
  ADMIN: [
    { kind: 'link', id: 'miPerfil',       label: 'miPerfil',       to: '/perfil',  icon: 'user'    },
    { kind: 'link', id: 'verComoAlumno', label: 'verComoAlumno', to: '/alumno',  icon: 'student' },
    { kind: 'divider' },
    { kind: 'logout' },
  ],
  PARENT: [
    { kind: 'link', id: 'miPerfil', label: 'miPerfil', to: '/perfil', icon: 'user' },
    // PLAN-C §6 (ítem 31) — igual que TEACHER/DIRECTIVO/ADMIN: switch real
    // con espejo ya creado, o link a Perfil para crearlo.
    { kind: 'link', id: 'verComoAlumno', label: 'verComoAlumno', to: '/alumno', icon: 'student' },
    { kind: 'divider' },
    { kind: 'logout' },
  ],
  GUEST: [],
};
