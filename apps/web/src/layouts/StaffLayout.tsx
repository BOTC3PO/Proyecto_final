import { NavLink, Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../auth/use-auth';
import { useTheme } from '../theme/ThemeContext';
import { NAV_BY_ROLE, DROPDOWN_BY_ROLE } from '../nav/navConfig';
import { OfflineIndicator } from '../components/OfflineIndicator';
import { useState, useEffect, useRef } from 'react';

const SIDEBAR_SECTIONS: Record<string, { label: string; items: string[] }[]> = {
  TEACHER: [
    { label: 'Académico', items: ['Panel', 'Aulas', 'Cursos', 'Materiales', 'Módulos', 'Evaluaciones'] },
    { label: 'Gestión',   items: ['Asistencia', 'Calificaciones', 'Reportes', 'Encuestas'] },
    { label: 'Escuela',   items: ['Calendario', 'Mensajes', 'Gobernanza'] },
  ],
  DIRECTIVO: [
    { label: 'Escuela',        items: ['Panel escuela', 'Aulas', 'Miembros', 'Módulos'] },
    { label: 'Administración', items: ['Reportes', 'Calendario', 'Gobernanza', 'Mensajes'] },
  ],
  ADMIN: [
    { label: 'Sistema',  items: ['Panel', 'Usuarios', 'Materias', 'Módulos'] },
    { label: 'Control',  items: ['Moderación', 'Reportes', 'Mensajes'] },
  ],
};

const THEME_SWATCHES: Record<string, string> = {
  'clasico-vb': '#2563eb',
  'clasico':    '#1e40af',
  'minimal':    '#1a1a18',
  'aurora':     '#7c3aed',
  'bosque':     '#15803d',
  'admin':      '#ffffff',
};

function Sidebar() {
  const { user, logout } = useAuth();
  const { theme, setTheme, availableThemes } = useTheme();
  const location = useLocation();
  const role = user?.role ?? 'TEACHER';
  const navItems = NAV_BY_ROLE[role as keyof typeof NAV_BY_ROLE] ?? [];
  const dropdownItems = DROPDOWN_BY_ROLE[role as keyof typeof DROPDOWN_BY_ROLE] ?? [];
  const sections = SIDEBAR_SECTIONS[role] ?? [{ label: '', items: navItems.map(i => i.label) }];
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const initials = user?.name
    ? user.name.split(' ').filter(Boolean).map(p => p[0]).join('').slice(0, 2).toUpperCase()
    : '?';

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node))
        setUserMenuOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => { setUserMenuOpen(false); }, [location.pathname]);

  return (
    <aside className="w-56 flex-shrink-0 flex flex-col border-r border-[var(--c-border)] bg-[var(--c-surface)] h-screen sticky top-0 overflow-y-auto">
      {/* Logo */}
      <div className="h-14 flex items-center px-5 border-b border-[var(--c-border)] flex-shrink-0">
        <Link to="/" className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
            style={{ background: 'var(--c-primary)' }}
          >
            <span className="text-white text-[11px] font-bold tracking-tight">VB</span>
          </div>
          <span className="text-sm font-semibold text-[var(--c-text)] tracking-tight">
            Virtual Book
          </span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-3 overflow-y-auto">
        {sections.map((section) => {
          const sectionItems = navItems.filter(item =>
            section.items.includes(item.label)
          );
          if (sectionItems.length === 0) return null;
          return (
            <div key={section.label} className="mb-4">
              {section.label && (
                <p className="px-5 pb-1.5 text-[10px] font-semibold uppercase tracking-widest text-[var(--c-muted)]">
                  {section.label}
                </p>
              )}
              {sectionItems.map(item => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.exact}
                  className={({ isActive }) =>
                    `flex items-center px-5 py-2 text-sm transition-colors border-l-2 ${
                      isActive
                        ? 'border-[var(--c-primary)] text-[var(--c-primary)] font-medium bg-[color-mix(in_srgb,var(--c-primary)_6%,transparent)]'
                        : 'border-transparent text-[var(--c-muted)] hover:text-[var(--c-text)] hover:bg-[var(--c-bg)]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          );
        })}
      </nav>

      {/* Selector de tema */}
      {availableThemes.length > 1 && (
        <div className="px-5 py-3 border-t border-[var(--c-border)]">
          <p className="text-[10px] text-[var(--c-muted)] mb-2 uppercase tracking-widest font-medium">Tema</p>
          <div className="flex gap-1.5 flex-wrap">
            {availableThemes.map(t => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                title={t.name}
                className="w-5 h-5 rounded-full border-2 transition-all flex-shrink-0"
                style={{
                  background: THEME_SWATCHES[t.id] ?? 'var(--c-primary)',
                  borderColor: theme === t.id ? 'var(--c-text)' : 'transparent',
                  outline: theme === t.id ? '2px solid var(--c-border)' : 'none',
                  outlineOffset: '1px',
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Usuario */}
      <div className="border-t border-[var(--c-border)] flex-shrink-0" ref={menuRef}>
        <button
          onClick={() => setUserMenuOpen(v => !v)}
          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[var(--c-bg)] transition-colors"
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-semibold"
            style={{ background: 'var(--c-primary)' }}
          >
            {initials}
          </div>
          <div className="flex-1 text-left min-w-0">
            <p className="text-xs font-medium text-[var(--c-text)] truncate">{user?.name}</p>
            <p className="text-[10px] text-[var(--c-muted)]">
              {role === 'TEACHER' ? 'Docente' : role === 'DIRECTIVO' ? 'Directivo' : 'Admin'}
            </p>
          </div>
          <svg className="w-3.5 h-3.5 text-[var(--c-muted)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d={userMenuOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} />
          </svg>
        </button>

        {userMenuOpen && (
          <div className="border-t border-[var(--c-border)] bg-[var(--c-surface)]">
            {dropdownItems.map((item, i) => {
              if (item.kind === 'divider')
                return <div key={i} className="border-t border-[var(--c-border)]" />;
              if (item.kind === 'logout')
                return (
                  <button
                    key="logout"
                    onClick={() => { setUserMenuOpen(false); logout(); }}
                    className="flex w-full items-center gap-2 px-4 py-2.5 text-xs font-medium text-[var(--c-danger)] hover:bg-[color-mix(in_srgb,var(--c-danger)_6%,transparent)] transition-colors"
                  >
                    Cerrar sesión
                  </button>
                );
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setUserMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-xs text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
}

function Topbar() {
  const location = useLocation();
  const { user } = useAuth();
  const role = user?.role ?? 'TEACHER';
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
    </header>
  );
}

export default function StaffLayout() {
  return (
    <div className="flex min-h-screen bg-[var(--c-bg)]">
      <Sidebar />
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
