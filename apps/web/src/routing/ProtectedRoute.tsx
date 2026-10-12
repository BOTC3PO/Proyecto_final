import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import type { Role } from '../auth/roles';
import { hasAnyRole } from '../auth/roleHelpers';
import { useAuth } from '../auth/use-auth';
import { homePathForRole } from './homePath';

export function ProtectedRoute({
  children,
  allow,
  redirectTo = '/login',
}: {
  children: ReactNode;
  allow: Role[];
  redirectTo?: string;
}) {
  const { user, isSwitching } = useAuth();
  const location = useLocation();

  // FASE 5a — durante un cambio de cuenta (espejo ↔ principal) la sesión
  // está en transición: el user viejo ya se limpió y el nuevo todavía no
  // se commiteó. NO redirigir a /login en ese instante (el flash que veía
  // el staff al "Ver como alumno"); esperamos a que el user nuevo llegue.
  if (isSwitching) {
    return null;
  }

  // Sin sesión: al login, guardando a dónde iba (el login ya sigue `returnTo` solo si es una ruta
  // del mismo sitio, así que no abre redirecciones a otros dominios).
  if (!user) {
    const destino = `${location.pathname}${location.search}`;
    const to = redirectTo === '/login' && destino !== '/' ? `/login?returnTo=${encodeURIComponent(destino)}` : redirectTo;
    return <Navigate to={to} replace />;
  }

  // MULTIROL-02: multi-rol friendly. Un user pasa si AL MENOS UNO de
  // sus `roles[]` está en `allow`. Mantiene compat: si `roles` está
  // vacío, `hasAnyRole` cae a `[role]` (ver `resolveRoles`).
  if (!hasAnyRole(user, allow)) {
    // Con sesión pero sin permiso: no es un problema de login. Se lo lleva a su propia página de
    // inicio (antes caía en el login como si no hubiera iniciado sesión).
    const inicio = homePathForRole(user.role);
    return <Navigate to={inicio === location.pathname ? '/' : inicio} replace />;
  }

  return <>{children}</>;
}
