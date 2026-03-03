import type { Role } from '../auth/roles';

type NavItem = { label: string; to: string; exact?: boolean };
type NavMap = Record<Role, NavItem[]>;
export const ROLE_HOME_PATH = '/';

// Base de "Usuario/Alumno"
const userBase: NavItem[] = [
  { label: 'Inicio', to: '/alumno', exact: true },
  { label: 'Clases', to: '/clases' },
  { label: 'Tareas', to: '/tareas' },
  { label: 'Encuestas', to: '/encuestas' },
  { label: 'Progreso', to: '/progreso' },
  { label: 'Mi Perfil', to: '/perfil' },
];

// Padres = similar a Usuario + 1 página extra
const parentExtra: NavItem = { label: 'Hijos', to: '/hijos' };

export const NAV_BY_ROLE: NavMap = {
  ADMIN: [
    { label: 'Panel', to: '/admin' },
    { label: 'Usuarios', to: '/admin/usuarios' },
    { label: 'Materias', to: '/admin/materias' },
    { label: 'Módulos', to: '/modulos' },
    { label: 'Moderación', to: '/admin/moderacion' },
    { label: 'Reportes', to: '/admin/reportes' },
    { label: 'Mi Perfil', to: '/perfil' },
  ],
  USER: userBase,
  PARENT: [...userBase, parentExtra, { label: 'Agregar hijo', to: '/hijos/agregar' }],
  TEACHER: [
    { label: 'Panel', to: '/profesor', exact: true },
    { label: 'Cursos', to: '/profesor/cursos' },
    { label: 'Aulas', to: '/profesor/aulas' },
    { label: 'Módulos', to: '/modulos' },
    { label: 'Evaluaciones', to: '/profesor/evaluaciones' },
    { label: 'Mi Perfil', to: '/perfil' },
  ],
  DIRECTIVO: [
    { label: 'Panel escuela', to: '/enterprise' },
    { label: 'Aulas', to: '/enterprise/aulas' },
    { label: 'Miembros', to: '/enterprise/miembros' },
    { label: 'Módulos', to: '/enterprise/modulos' },
    { label: 'Mensajes', to: '/enterprise/mensajes' },
    { label: 'Convenios', to: '/enterprise/contratos' },
    { label: 'Reportes', to: '/enterprise/reportes' },
    { label: 'Mi Perfil', to: '/perfil' },
  ],
  GUEST: [
    { label: 'Inicio', to: ROLE_HOME_PATH },
    { label: 'Explorar', to: '/explorar' },
    { label: 'Precios', to: '/precios' },
    { label: 'Iniciar sesión', to: '/login' },
    { label: 'Registrarse', to: '/register' },
  ],
};
