import type { Role } from '../auth/roles';

/**
 * Página de inicio de cada rol. Es la misma tabla que usa el login para llevar a la persona a su
 * lugar y que usa `ProtectedRoute` cuando alguien con sesión entra a una ruta que no es de su rol.
 */
const HOME_BY_ROLE: Partial<Record<Role, string>> = {
  ADMIN: '/admin',
  TEACHER: '/profesor',
  DIRECTIVO: '/enterprise',
  USER: '/menualumno',
  PARENT: '/menualumno',
  GUEST: '/',
};

export const homePathForRole = (role: Role | string | null | undefined): string =>
  (role ? HOME_BY_ROLE[role as Role] : undefined) ?? '/';
