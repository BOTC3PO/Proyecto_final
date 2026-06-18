import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { usePrimaryRole } from '../auth/use-roles';
import { NAV_BY_ROLE } from '../nav/navConfig';
import { OfflineIndicator } from '../components/OfflineIndicator';
import StaffSidebar from './StaffSidebar';

const ROLE_LABEL: Record<string, string> = {
  TEACHER: 'Docente',
  DIRECTIVO: 'Directivo',
  ADMIN: 'Administrador',
};

function Topbar() {
  const location = useLocation();
  // MULTIROL-02: el "rol principal" (mayor jerarquía) sigue siendo
  // la llave del NAV_BY_ROLE / ROLE_LABEL, así que seguimos
  // necesitando el singular. Usamos el helper para que un
  // TEACHER+USER siga mostrando "Docente".
  const primary = usePrimaryRole();
  const role = primary ?? 'TEACHER';
  const navItems = NAV_BY_ROLE[role as keyof typeof NAV_BY_ROLE] ?? [];

  const active = navItems.find(item =>
    item.exact
      ? location.pathname === item.to
      : location.pathname.startsWith(item.to)
  );

  return (
    <header className="h-14 flex-shrink-0 flex items-center justify-between px-6 border-b border-[var(--c-border)] bg-[var(--c-surface)]">
      <p className="text-sm font-semibold text-[var(--c-text)]">
        {active?.label ?? 'Panel'}
      </p>
      {/* FIX-NAVBAR-MODE — un badge de rol explícito para que el
          docente/directivo/admin siempre sepa que está en el "modo
          staff" y NO en el modo alumno (vista /clases/:id). Antes el
          layout solo tenía un sidebar izquierdo sin un indicador de
          rol visible arriba, lo que llevaba a confundir /profesor/*
          con la vista /clases/* (que usa `AlumnoNavbar`). Bug 2.5 del
          informe `test-parte-3-profesor.md`. */}
      <span
        data-testid="staff-mode-badge"
        className="inline-flex items-center gap-1.5 rounded-full bg-[color-mix(in_srgb,var(--c-primary)_12%,transparent)] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[var(--c-primary)]"
      >
        Modo {ROLE_LABEL[role] ?? role}
      </span>
    </header>
  );
}

export default function StaffLayout() {
  return (
    <div className="layout-root flex min-h-screen bg-[var(--c-bg)]">
      <StaffSidebar />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Topbar />
        <main className="flex-grow overflow-y-auto">
          <Outlet />
        </main>
        <OfflineIndicator />
      </div>
    </div>
  );
}
