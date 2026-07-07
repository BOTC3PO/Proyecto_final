/**
 * layouts/StaffSidebar.tsx — sidebar de staff (rediseño División 6).
 *
 * Reconstruido sobre los primitivos de `ui/` (NavItem orientación `sidebar`,
 * Avatar, Menu) + la escala de tokens. La LÓGICA se reutiliza intacta:
 * secciones e ítems salen de `navConfig` (NAV_BY_ROLE / DROPDOWN_BY_ROLE), el
 * rol de `usePrimaryRole`, el espejo de `cuentaVinculada`/`switchCuenta`. Acá
 * sólo se reconstruye el *chrome*.
 *
 * A11y: landmark `<nav>` con nombre; `aria-current="page"` por NavItem; foco
 * visible global; menú de usuario accesible (Escape, teclado) vía Menu.
 */
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import { useAuth } from '../auth/use-auth';
import { usePrimaryRole } from '../auth/use-roles';
import { useTheme } from '../theme/ThemeContext';
import { useSchoolBranding } from '../hooks/useSchoolBranding';
import { NAV_BY_ROLE, DROPDOWN_BY_ROLE } from '../nav/navConfig';
import { Avatar, Menu, Modal, NavItem, type MenuTriggerProps } from '../ui';

const SIDEBAR_SECTIONS: Record<string, { label: string; items: string[] }[]> = {
  TEACHER: [
    { label: 'Académico', items: ['Panel', 'Aulas', 'Materiales', 'Módulos', 'Plantillas', 'Datasets', 'Evaluaciones'] },
    { label: 'Gestión',   items: ['Asistencia', 'Calificaciones', 'Reportes', 'Encuestas'] },
    { label: 'Escuela',   items: ['Calendario', 'Mensajes', 'Gobernanza'] },
  ],
  DIRECTIVO: [
    { label: 'Escuela',        items: ['Panel escuela', 'Aulas', 'Miembros', 'Módulos', 'Plantillas', 'Datasets', 'Personalización'] },
    { label: 'Administración', items: ['Cobros', 'Comisiones', 'Reportes', 'Calendario', 'Gobernanza', 'Mensajes'] },
  ],
  ADMIN: [
    { label: 'Sistema',  items: ['Panel', 'Usuarios', 'Materias', 'Módulos', 'Plantillas', 'Datasets'] },
    { label: 'Control',  items: ['Moderación', 'Moderar plantillas', 'Reportes', 'Comisiones', 'Mensajes'] },
  ],
};

const ROLE_LABEL: Record<string, string> = {
  TEACHER: 'Docente',
  DIRECTIVO: 'Directivo',
  ADMIN: 'Admin',
};

// Fila del menú de usuario con hover token-puro.
function MenuRow({ children, onClick, danger }: {
  children: ReactNode;
  onClick: () => void;
  danger?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const style: CSSProperties = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    gap: 'var(--space-2)',
    paddingBlock: 'var(--space-2)',
    paddingInline: 'var(--space-4)',
    fontSize: 'var(--text-xs)',
    color: danger ? 'var(--c-danger)' : 'var(--c-text)',
    fontWeight: danger ? 'var(--fw-medium)' : 'var(--fw-regular)',
    background: hovered
      ? danger
        ? 'color-mix(in srgb, var(--c-danger) 6%, transparent)'
        : 'var(--c-hover)'
      : 'transparent',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'background-color 120ms ease',
  };
  return (
    <button
      type="button"
      role="menuitem"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={style}
    >
      {children}
    </button>
  );
}

function SidebarMenuTrigger({ menu, initials, name, roleLabel }: {
  menu: MenuTriggerProps;
  initials: string;
  name: string;
  roleLabel: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      onClick={menu.onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-haspopup={menu["aria-haspopup"]}
      aria-expanded={menu["aria-expanded"]}
      aria-controls={menu["aria-controls"]}
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        gap: 'var(--space-3)',
        paddingBlock: 'var(--space-3)',
        paddingInline: 'var(--space-4)',
        background: hovered ? 'var(--c-hover)' : 'transparent',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 120ms ease',
      }}
    >
      <Avatar initials={initials} size="md" aria-hidden="true" />
      <span style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
        <span
          style={{
            display: 'block',
            fontSize: 'var(--text-xs)',
            fontWeight: 'var(--fw-medium)',
            color: 'var(--c-text)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {name}
        </span>
        <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--c-muted)' }}>
          {roleLabel}
        </span>
      </span>
      <svg
        aria-hidden="true"
        width="14"
        height="14"
        style={{
          color: 'var(--c-muted)',
          flexShrink: 0,
          transition: 'transform 120ms ease',
          transform: menu["aria-expanded"] ? 'rotate(180deg)' : 'none',
        }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}

function Sidebar({ variant = 'desktop', onNavigate }: {
  variant?: 'desktop' | 'drawer';
  onNavigate?: () => void;
}) {
  const { user, logout, switchCuenta } = useAuth();
  const { theme, setTheme, availableThemes } = useTheme();
  const navigate = useNavigate();
  const schoolBranding = useSchoolBranding();

  const tieneEspejo = user?.cuentaVinculada?.tipoDestino === 'ALUMNO';

  const handleEntrarComoAlumno = async () => {
    try {
      const { landing } = await switchCuenta();
      navigate(landing);
    } catch (e) {
      console.error('Error al entrar como alumno:', e);
    }
  };
  // MULTIROL-02: el sidebar secciona por "rol principal" (mayor
  // jerarquía). Un ADMIN+TEACHER sigue viendo el sidebar de ADMIN.
  const primary = usePrimaryRole();
  const role = primary ?? 'TEACHER';
  const navItems = NAV_BY_ROLE[role as keyof typeof NAV_BY_ROLE] ?? [];
  const dropdownItems = DROPDOWN_BY_ROLE[role as keyof typeof DROPDOWN_BY_ROLE] ?? [];
  const sections = SIDEBAR_SECTIONS[role] ?? [{ label: '', items: navItems.map(i => i.label) }];

  const initials = user?.name
    ? user.name.split(' ').filter(Boolean).map(p => p[0]).join('').slice(0, 2).toUpperCase()
    : '?';

  return (
    <aside
      className={
        variant === 'desktop'
          ? 'hidden md:flex flex-col flex-shrink-0 w-56 h-screen overflow-y-auto'
          : 'flex flex-col w-56 h-full overflow-y-auto'
      }
      style={{
        position: variant === 'desktop' ? 'sticky' : undefined,
        top: variant === 'desktop' ? 0 : undefined,
        borderRightWidth: variant === 'desktop' ? '1px' : undefined,
        borderRightStyle: variant === 'desktop' ? 'solid' : undefined,
        borderRightColor: 'var(--c-border)',
        background: 'var(--c-surface)',
        willChange: 'transform',
      }}
    >
      {/* Logo */}
      <div
        className="flex items-center flex-shrink-0"
        style={{
          height: 'var(--space-8)',
          paddingInline: 'var(--space-5)',
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderBottomColor: 'var(--c-border)',
        }}
      >
        <Link to="/" className="flex items-center" style={{ gap: 'var(--space-2)', textDecoration: 'none' }}>
          {schoolBranding?.logoUrl ? (
            <img
              src={schoolBranding.logoUrl}
              alt="Logo de la escuela"
              className="flex-shrink-0"
              style={{ width: 'var(--space-6)', height: 'var(--space-6)', objectFit: 'contain', borderRadius: 'var(--r-md)' }}
            />
          ) : (
          <span
            className="flex items-center justify-center flex-shrink-0"
            style={{
              width: 'var(--space-6)',
              height: 'var(--space-6)',
              borderRadius: 'var(--r-md)',
              background: 'var(--c-primary)',
            }}
          >
            <span style={{ color: 'var(--c-text-on-dark)', fontSize: 'var(--text-xs)', fontWeight: 'var(--fw-bold)' }}>VB</span>
          </span>
          )}
          <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--c-text)' }}>
            Virtual Book
          </span>
        </Link>
      </div>

      {/* Nav */}
      <nav
        aria-label="Navegación lateral"
        className="flex-1 overflow-y-auto"
        style={{ paddingBlock: 'var(--space-3)' }}
        onClick={onNavigate}
      >
        {sections.map((section) => {
          const sectionItems = navItems.filter(item =>
            section.items.includes(item.label)
          );
          if (sectionItems.length === 0) return null;
          return (
            <div key={section.label} style={{ marginBottom: 'var(--space-4)' }}>
              {section.label && (
                <p
                  style={{
                    margin: 0,
                    paddingInline: 'var(--space-5)',
                    paddingBottom: 'var(--space-1)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 'var(--fw-semibold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--c-muted)',
                  }}
                >
                  {section.label}
                </p>
              )}
              {sectionItems.map(item => (
                <NavItem
                  key={item.to}
                  to={item.to}
                  end={item.exact ?? true}
                  orientation="sidebar"
                >
                  {item.label}
                </NavItem>
              ))}
            </div>
          );
        })}
      </nav>

      {/* Selector de tema */}
      {availableThemes.length > 1 && (
        <div
          style={{
            paddingInline: 'var(--space-5)',
            paddingBlock: 'var(--space-3)',
            borderTopWidth: '1px',
            borderTopStyle: 'solid',
            borderTopColor: 'var(--c-border)',
          }}
        >
          <p
            style={{
              margin: 0,
              marginBottom: 'var(--space-2)',
              fontSize: 'var(--text-xs)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontWeight: 'var(--fw-medium)',
              color: 'var(--c-muted)',
            }}
          >
            Tema
          </p>
          <div className="flex flex-wrap" style={{ gap: 'var(--space-1)' }}>
            {availableThemes.map(t => (
              <button
                key={t.id}
                type="button"
                data-theme={t.id}
                onClick={() => setTheme(t.id)}
                title={t.name}
                aria-label={`Tema ${t.name}`}
                aria-pressed={theme === t.id}
                className="flex-shrink-0"
                style={{
                  width: 'var(--space-4)',
                  height: 'var(--space-4)',
                  borderRadius: '50%',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  background: 'var(--c-primary)',
                  borderColor: theme === t.id ? 'var(--c-text)' : 'transparent',
                  outline: theme === t.id ? '2px solid var(--c-border)' : 'none',
                  outlineOffset: '1px',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Usuario */}
      <div
        style={{
          borderTopWidth: '1px',
          borderTopStyle: 'solid',
          borderTopColor: 'var(--c-border)',
          flexShrink: 0,
        }}
      >
        <Menu
          align="start"
          placement="up"
          fullWidth
          panelWidth="100%"
          trigger={(p) => (
            <SidebarMenuTrigger
              menu={p}
              initials={initials}
              name={user?.name ?? ''}
              roleLabel={ROLE_LABEL[role] ?? role}
            />
          )}
        >
          {({ close }) => (
            <div
              style={{
                borderTopWidth: '1px',
                borderTopStyle: 'solid',
                borderTopColor: 'var(--c-border)',
                background: 'var(--c-surface)',
              }}
            >
              {dropdownItems.map((item, i) => {
                if (item.kind === 'divider')
                  return (
                    <div
                      key={i}
                      style={{ borderTopWidth: '1px', borderTopStyle: 'solid', borderTopColor: 'var(--c-border)' }}
                    />
                  );
                if (item.kind === 'logout')
                  return (
                    <MenuRow key="logout" danger onClick={() => { close(); logout(); }}>
                      Cerrar sesión
                    </MenuRow>
                  );
                if (item.label === 'Ver como alumno') {
                  if (!tieneEspejo) return null;
                  return (
                    <MenuRow
                      key="entrar-como-alumno"
                      onClick={() => { close(); void handleEntrarComoAlumno(); }}
                    >
                      Entrar como alumno
                    </MenuRow>
                  );
                }
                return (
                  <MenuRowItemLink key={item.to} to={item.to} onClick={close}>
                    {item.label}
                  </MenuRowItemLink>
                );
              })}
            </div>
          )}
        </Menu>
      </div>
    </aside>
  );
}

// Ítem-link del menú de usuario (hover token-puro).
function MenuRowItemLink({ to, children, onClick }: {
  to: string;
  children: ReactNode;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={to}
      role="menuitem"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        paddingBlock: 'var(--space-2)',
        paddingInline: 'var(--space-4)',
        fontSize: 'var(--text-xs)',
        color: 'var(--c-text)',
        textDecoration: 'none',
        background: hovered ? 'var(--c-hover)' : 'transparent',
        transition: 'background-color 120ms ease',
      }}
    >
      {children}
    </Link>
  );
}

// PLAN-I §1 — drawer off-canvas < md, sidebar sticky sin cambios >= md.
// `open`/`onClose` son opcionales: si el layout que lo monta ya tiene su
// propia barra superior (StaffLayout.tsx) los controla ahí y pasa las
// props; si no (RoleLayout.tsx, sin topbar) el componente se autogestiona
// y renderiza su propio botón hamburguesa flotante.
export type StaffSidebarProps = {
  open?: boolean;
  onClose?: () => void;
};

export default function StaffSidebar({ open: openProp, onClose: onCloseProp }: StaffSidebarProps = {}) {
  const controlled = openProp !== undefined;
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlled ? Boolean(openProp) : internalOpen;
  const close = () => (controlled ? onCloseProp?.() : setInternalOpen(false));

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) close();
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controlled, onCloseProp]);

  return (
    <>
      {!controlled && (
        <button
          type="button"
          onClick={() => setInternalOpen(true)}
          aria-label="Abrir navegación"
          aria-expanded={open}
          aria-controls="staff-sidebar-drawer"
          className="md:hidden fixed inline-flex"
          style={{
            top: 'var(--space-3)',
            left: 'var(--space-3)',
            zIndex: 30,
            padding: 'var(--space-2)',
            borderRadius: 'var(--r-md)',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'var(--c-border)',
            background: 'var(--c-surface)',
            color: 'var(--c-text)',
            cursor: 'pointer',
          }}
        >
          <svg width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}
      <Sidebar variant="desktop" />
      <Modal
        open={open}
        onClose={close}
        ariaLabel="Navegación"
        id="staff-sidebar-drawer"
        closeOnBackdrop
        style={{
          position: 'fixed',
          inset: '0 auto 0 0',
          width: '14rem',
          maxWidth: '85vw',
          height: '100vh',
          maxHeight: '100vh',
          margin: 0,
          padding: 0,
          borderRadius: 0,
        }}
      >
        <Sidebar variant="drawer" onNavigate={close} />
      </Modal>
    </>
  );
}
