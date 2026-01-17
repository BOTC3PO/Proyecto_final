import type { Role } from '../auth/roles';
import testmode from '../sys/testmode';

type NavItem = { label: string; to: string; exact?: boolean };
type NavMap = Record<Role, NavItem[]>;
export const ROLE_HOME_PATH = testmode() ? '/inicio' : '/';

// Base de “Usuario/Alumno”
const userBase: NavItem[] = [
  { label: 'Inicio', to: ROLE_HOME_PATH },
  { label: 'Clases', to: '/clases' },
  { label: 'Tareas', to: '/tareas' },
  { label: 'Encuestas', to: '/encuestas' },
  { label: 'Progreso', to: '/progreso' },
];

// Padres = similar a Usuario + 1 página extra
const parentExtra: NavItem = { label: 'Hijos', to: '/hijos' };

export const NAV_BY_ROLE: NavMap = {
  ADMIN: [
    { label: 'Panel', to: '/admin' },
    { label: 'Usuarios', to: '/admin/usuarios' },
    { label: 'Cursos', to: '/admin/cursos' },
    { label: 'Reportes', to: '/admin/reportes' },
  ],
  USER: userBase,
  PARENT: [...userBase, parentExtra],
  TEACHER: [
    { label: 'Inicio', to: ROLE_HOME_PATH },
    { label: 'Mis Cursos', to: '/profesor/cursos' },
    { label: 'Módulos', to: '/profesor/modulos' },
    { label: 'Encuestas', to: '/profesor/encuestas' },
    { label: 'Calificaciones', to: '/profesor/calificaciones' },
    { label: 'Asistencia', to: '/profesor/asistencia' },
    { label: 'Mensajes', to: '/profesor/mensajes' },
  ],
  ENTERPRISE: [
    { label: 'Dashboard', to: '/enterprise' },
    { label: 'Contratos', to: '/enterprise/contratos' },
    { label: 'Reportes', to: '/enterprise/reportes' },
  ],
  GUEST: [
    { label: 'Inicio', to: ROLE_HOME_PATH },
    { label: 'Explorar', to: '/explorar' },
    { label: 'Precios', to: '/precios' },
    { label: 'Iniciar sesión', to: '/login' },
    { label: 'Registrarse', to: '/register' },
  ],
};
