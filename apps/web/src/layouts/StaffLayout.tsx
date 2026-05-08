import { NavLink, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../auth/use-auth';
import { useTheme } from '../theme/ThemeContext';
import { NAV_BY_ROLE, DROPDOWN_BY_ROLE } from '../nav/navConfig';
import { OfflineIndicator } from '../components/OfflineIndicator';
import Footer from '../components/footer';
import { useState, useEffect, useRef } from 'react';

// Secciones del sidebar agrupadas por rol
const SIDEBAR_SECTIONS: Record<string, { label: string; items: string[] }[]> = {
  TEACHER: [
    {
      label: 'Principal',
      items: ['Panel', 'Cursos', 'Aulas', 'Módulos', 'Evaluaciones'],
    },
    {
      label: 'Gestión',
      items: ['Calendario', 'Mensajes'],
    },
  ],
  DIRECTIVO: [
    {
      label: 'Escuela',
      items: ['Panel escuela', 'Aulas', 'Miembros', 'Módulos'],
    },
    {
      label: 'Administración',
      items: ['Reportes', 'Calendario', 'Gobernanza', 'Mensajes'],
    },
  ],
  ADMIN: [
    {
      label: 'Sistema',
      items: ['Panel', 'Usuarios', 'Materias', 'Módulos'],
    },
    {
      label: 'Control',
      items: ['Moderación', 'Reportes'],
    },
  ],
};

function Sidebar() {
  const { user, logout } = useAuth();
  const { theme, setTheme, availableThemes } = useTheme();
  const role = user?.role ?? 'TEACHER';
  const navItems = NAV_BY_ROLE[role as keyof typeof NAV_BY_ROLE] ?? [];
  const dropdownItems = DROPDOWN_BY_ROLE[role as keyof typeof DROPDOWN_BY_ROLE] ?? [];
  const sections = SIDEBAR_SECTIONS[role] ?? [{ label: '', items: navItems.map((i) => i.label) }];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  const initials = user?.name
    ? user.name.split(' ').filter(Boolean).map((p) => p[0]).join('').slice(0, 2).toUpperCase()
    : '?';

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <aside className="w-52 flex-shrink-0 flex flex-col min-h-screen border-r border-[var(--c-border)] bg-[var(--c-surface)]">

      {/* Logo */}
      <div className="px-4 py-4 border-b border-[var(--c-border)]">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[var(--c-primary)] flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs font-bold">VB</span>
          </div>
          <span className="text-sm font-semibold text-[var(--c-text)]">Virtual Book</span>
        </Link>
      </div>

      {/* Navegación */}
      <nav className="flex-1 px-2 py-3 overflow-y-auto space-y-4">
        {sections.map((section) => {
          const sectionItems = navItems.filter((item) =>
            section.items.includes(item.label)
          );
          if (sectionItems.length === 0) return null;
          return (
            <div key={section.label}>
              {section.label && (
                <p className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--c-muted)]">
                  {section.label}
                </p>
              )}
              <div className="space-y-0.5">
                {sectionItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.exact}
                    className={({ isActive }) =>
                      `flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                        isActive
                          ? 'bg-[color-mix(in_srgb,var(--c-primary)_10%,transparent)] text-[var(--c-primary)] font-medium'
                          : 'text-[var(--c-muted)] hover:bg-[var(--c-bg)] hover:text-[var(--c-text)]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          );
        })}
      </nav>

      {/* Footer del sidebar: avatar + dropdown */}
      <div className="px-2 py-3 border-t border-[var(--c-border)]" ref={dropRef}>
        <button
          onClick={() => setDropdownOpen((v) => !v)}
          className="w-full flex items-center gap-2.5 rounded-lg px-2 py-2 hover:bg-[var(--c-bg)] transition-colors"
        >
          <div className="w-7 h-7 rounded-full bg-[var(--c-primary)] flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs font-semibold">{initials}</span>
          </div>
          <div className="flex-1 text-left min-w-0">
            <p className="text-xs font-medium text-[var(--c-text)] truncate">{user?.name}</p>
            <p className="text-[10px] text-[var(--c-muted)] truncate">{role}</p>
          </div>
          <span className="text-[var(--c-muted)] text-xs">{dropdownOpen ? '▲' : '▼'}</span>
        </button>

        {dropdownOpen && (
          <div className="mt-1 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] shadow-lg overflow-hidden">
            {dropdownItems.map((item, i) => {
              if (item.kind === 'divider') {
                return <div key={i} className="border-t border-[var(--c-border)]" />;
              }
              if (item.kind === 'logout') {
                return (
                  <button
                    key="logout"
                    onClick={() => { setDropdownOpen(false); logout(); }}
                    className="flex w-full items-center gap-2 px-3 py-2 text-xs text-[var(--c-danger)] hover:bg-[color-mix(in_srgb,var(--c-danger)_8%,transparent)] transition-colors"
                  >
                    Cerrar sesión
                  </button>
                );
              }
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 text-xs text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Selector de tema */}
            {availableThemes.length > 1 && (
              <>
                <div className="border-t border-[var(--c-border)]" />
                <div className="px-3 py-2">
                  <p className="text-[10px] text-[var(--c-muted)] mb-1.5">Tema</p>
                  <div className="flex flex-wrap gap-1">
                    {availableThemes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setTheme(t.id)}
                        title={t.name}
                        className={`text-[10px] px-2 py-0.5 rounded-full border transition-colors ${
                          theme === t.id
                            ? 'border-[var(--c-primary)] text-[var(--c-primary)] bg-[color-mix(in_srgb,var(--c-primary)_10%,transparent)]'
                            : 'border-[var(--c-border)] text-[var(--c-muted)] hover:border-[var(--c-primary)]'
                        }`}
                      >
                        {t.name}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </aside>
  );
}

export default function StaffLayout() {
  return (
    <div className="flex min-h-screen bg-[var(--c-bg)]">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <OfflineIndicator />
      </div>
    </div>
  );
}
