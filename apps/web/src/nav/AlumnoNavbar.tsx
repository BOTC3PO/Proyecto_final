import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../auth/use-auth';
import { useHasRole } from '../auth/use-roles';
import { NAV_BY_ROLE, DROPDOWN_BY_ROLE } from './navConfig';
import { useState, useRef, useEffect } from 'react';

export default function AlumnoNavbar() {
  const { user, logout } = useAuth();
  const items = NAV_BY_ROLE['USER'];
  // MULTIROL-02: el dropdown se elige por el rol principal del user
  // (USER por default; un TEACHER+USER en vista de alumno sigue viendo
  // el dropdown USER, igual que antes). La nav de alumno siempre es
  // la de USER, así que el default ya estaba bien.
  const primary = user?.roles?.[0] ?? user?.role ?? 'USER';
  const dropdownItems = DROPDOWN_BY_ROLE[primary as keyof typeof DROPDOWN_BY_ROLE]
    ?? DROPDOWN_BY_ROLE['USER'];
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const initials = user?.name
    ? user.name.split(' ').filter(Boolean).map(p => p[0]).join('').slice(0, 2).toUpperCase()
    : '?';

  // MULTIROL-02: el "Volver a mi panel" se muestra si el user tiene
  // CUALQUIERA de los roles staff en su array. Un TEACHER+USER que
  // está viendo la vista de alumno sí ve el botón.
  const hasTeacher = useHasRole('TEACHER');
  const hasAdmin = useHasRole('ADMIN');
  const hasDirectivo = useHasRole('DIRECTIVO');
  const roleHome =
    hasTeacher ? '/profesor' :
    hasAdmin ? '/admin' :
    hasDirectivo ? '/enterprise' : null;

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-[var(--c-border)] bg-[var(--c-surface)]">
      <div className="flex items-center justify-between max-w-6xl px-4 py-3 mx-auto">
        <Link to="/alumno" className="font-bold text-[var(--c-text)]">Virtual Book</Link>

        <ul className="flex gap-4">
          {items.map((it) => (
            <li key={it.to}>
              <NavLink
                to={it.to}
                end={it.exact ?? true}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-sm transition-colors ${
                    isActive
                      ? 'bg-[var(--c-primary)] text-white'
                      : 'text-[var(--c-muted)] hover:bg-[var(--c-bg)] hover:text-[var(--c-text)]'
                  }`
                }
              >
                {it.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {roleHome && (
            <Link
              to={roleHome}
              className="text-xs border border-[var(--c-border)] rounded-lg px-3 py-1.5 text-[var(--c-muted)] hover:bg-[var(--c-bg)] transition-colors"
            >
              ← Volver a mi panel
            </Link>
          )}

          <div className="relative" ref={ref}>
            <button
              onClick={() => setOpen(v => !v)}
              className="flex items-center gap-2 rounded-full border border-[var(--c-border)] bg-[var(--c-surface)] px-2 py-1.5 text-sm hover:bg-[var(--c-bg)] transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-[var(--c-primary)] flex items-center justify-center text-white text-[10px] font-bold">
                {initials}
              </div>
              <span className="hidden sm:block text-[var(--c-text)] text-sm font-medium max-w-[100px] truncate">
                {user?.name}
              </span>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-44 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] z-50 overflow-hidden">
                {dropdownItems.map((item, i) => {
                  if (item.kind === 'divider')
                    return <div key={i} className="border-t border-[var(--c-border)]" />;
                  if (item.kind === 'logout')
                    return (
                      <button key="logout" onClick={() => { setOpen(false); logout(); }}
                        className="flex w-full items-center gap-2 px-4 py-2.5 text-xs text-[var(--c-danger)] hover:bg-[color-mix(in_srgb,var(--c-danger)_8%,transparent)] transition-colors">
                        Cerrar sesión
                      </button>
                    );
                  return (
                    <Link key={item.to} to={item.to} onClick={() => setOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-xs text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors">
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
