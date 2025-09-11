import type { Role } from '../auth/roles';

type NavItem = { label: string; to: string; exact?: boolean };
type NavMap = Record<Role, NavItem[]>;

// Base de “Usuario/Alumno”
const userBase: NavItem[] = [
  { label: 'Inicio', to: '/' },
  { label: 'Clases', to: '/clases' },
  { label: 'Tareas', to: '/tareas' },
  { label: 'Progreso', to: '/progreso' },
];

// Padres = similar a Usuario + 1 página extra
const parentExtra: NavItem = { label: 'Panel Hijo/a', to: '/hijos' };

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
    { label: 'Inicio', to: '/' },
    { label: 'Mis Cursos', to: '/profesor/cursos' },
    { label: 'Calificaciones', to: '/profesor/calificaciones' },
    { label: 'Asistencia', to: '/profesor/asistencia' },
  ],
  ENTERPRISE: [
    { label: 'Dashboard', to: '/enterprise' },
    { label: 'Contratos', to: '/enterprise/contratos' },
    { label: 'Reportes', to: '/enterprise/reportes' },
  ],
  GUEST: [
    { label: 'Inicio', to: '/' },
    { label: 'Explorar', to: '/explorar' },
    { label: 'Precios', to: '/precios' },
    { label: 'Iniciar sesión', to: '/login' },
    { label: 'Registrarse', to: '/register' },
  ],
};