import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { usePrimaryRole } from '../auth/use-roles';
import { NAV_BY_ROLE } from '../nav/navConfig';
import { OfflineIndicator } from '../components/OfflineIndicator';
import { useI18n } from '../i18n/I18nContext';
import StaffSidebar from './StaffSidebar';

const ROLE_LABEL: Record<string, string> = {
  TEACHER: 'Docente',
  DIRECTIVO: 'Directivo',
  ADMIN: 'Administrador',
};

function Topbar({ sidebarOpen, onOpenSidebar }: { sidebarOpen: boolean; onOpenSidebar: () => void }) {
  const { t } = useI18n();
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
    <header className="h-14 flex-shrink-0 flex items-center gap-3 px-6 border-b border-[var(--c-border)] bg-[var(--c-surface)]">
      {/* PLAN-I §1 — drawer off-canvas < md; StaffSidebar recibe open/onClose. */}
      <button
        type="button"
        onClick={onOpenSidebar}
        aria-label={t('aria.abrirNav')}
        aria-expanded={sidebarOpen}
        aria-controls="staff-sidebar-drawer"
        className="md:hidden -ml-2 inline-flex p-2 rounded-md text-[var(--c-text)]"
      >
        <svg width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <p className="text-sm font-semibold text-[var(--c-text)] flex-1">
        {t(`nav.${active?.label ?? 'panel'}`)}
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
        {t('common.modo')} {ROLE_LABEL[role] ?? role}
      </span>
    </header>
  );
}

export default function StaffLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="layout-root flex min-h-screen bg-[var(--c-bg)]">
      <StaffSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Topbar sidebarOpen={sidebarOpen} onOpenSidebar={() => setSidebarOpen(true)} />
        <main className="flex-grow overflow-y-auto">
          <Outlet />
        </main>
        <OfflineIndicator />
      </div>
    </div>
  );
}
