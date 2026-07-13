/**
 * nav/AlumnoNavbar.tsx — navbar del alumno (rediseño División 7).
 *
 * Reconstruido sobre los primitivos de `ui/` (NavItem, Avatar, Menu).
 * La lógica de rol/rutas se reutiliza intacta (NAV_BY_ROLE, DROPDOWN_BY_ROLE,
 * useHasRole, cuentaEspejo, handleVolver). Solo se reconstruye el chrome.
 *
 * Paralela a Navbar (D6): mismo patrón de átomos, mismos tokens.
 */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/use-auth';
import { useHasRole } from '../auth/use-roles';
import { NAV_BY_ROLE, DROPDOWN_BY_ROLE } from './navConfig';
import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import { NavItem, Avatar, Menu, type MenuTriggerProps } from '../ui';
import { useI18n } from '../i18n/I18nContext';

// ── Filas del menú de usuario (token-puro, igual que Navbar) ─────────────────

function MenuRowLink({ to, children, onClick }: {
  to: string;
  children: ReactNode;
  onClick?: () => void;
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

function MenuRowButton({ children, onClick, danger }: {
  children: ReactNode;
  onClick: () => void;
  danger?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      role="menuitem"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        gap: 'var(--space-2)',
        paddingBlock: 'var(--space-2)',
        paddingInline: 'var(--space-4)',
        fontSize: 'var(--text-xs)',
        color: danger ? 'var(--c-danger)' : 'var(--c-text)',
        background: hovered
          ? danger
            ? 'color-mix(in srgb, var(--c-danger) 8%, transparent)'
            : 'var(--c-hover)'
          : 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'background-color 120ms ease',
      }}
    >
      {children}
    </button>
  );
}

const LogoutIcon = () => (
  <svg aria-hidden="true" width="16" height="16" style={{ flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
  </svg>
);

function UserMenuTrigger({
  menu,
  name,
  initials,
}: {
  menu: MenuTriggerProps;
  name: string;
  initials: string;
}) {
  const [hovered, setHovered] = useState(false);
  const { t } = useI18n();
  const expanded = menu['aria-expanded'];
  return (
    <button
      type="button"
      onClick={menu.onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={t('aria.menuUsuario')}
      aria-haspopup={menu['aria-haspopup']}
      aria-expanded={expanded}
      aria-controls={menu['aria-controls']}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        borderRadius: 'var(--r-xl)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'var(--c-border)',
        background: hovered ? 'var(--c-hover)' : 'var(--c-surface)',
        paddingBlock: 'var(--space-1)',
        paddingInline: 'var(--space-2)',
        fontSize: 'var(--text-sm)',
        color: 'var(--c-text)',
        cursor: 'pointer',
        transition: 'background-color 120ms ease',
      }}
    >
      <Avatar initials={initials} aria-hidden="true" />
      <span
        className="hidden sm:block"
        style={{
          fontWeight: 'var(--fw-medium)',
          maxWidth: '120px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {name}
      </span>
      <svg
        aria-hidden="true"
        width="16"
        height="16"
        style={{
          color: 'var(--c-muted)',
          transition: 'transform 120ms ease',
          transform: expanded ? 'rotate(180deg)' : 'none',
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

const VOLVER_STYLE: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'var(--space-1)',
  borderRadius: 'var(--r-lg)',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'var(--c-border)',
  paddingBlock: 'var(--space-1)',
  paddingInline: 'var(--space-3)',
  fontSize: 'var(--text-xs)',
  fontFamily: 'var(--font-sans)',
  color: 'var(--c-muted)',
  textDecoration: 'none',
  background: 'transparent',
  cursor: 'pointer',
  transition: 'background-color 120ms ease',
};

export default function AlumnoNavbar() {
  const { user, logout, switchCuenta } = useAuth();
  const { t } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();
  // PLAN-I §2 — mismo patrón que nav/Navbar.tsx (público): < md, hamburguesa
  // + panel colapsable; el menú de usuario/avatar queda fuera, siempre visible.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const items = NAV_BY_ROLE['USER'];
  // MULTIROL-02: el dropdown se elige por el rol principal del user
  // (USER por default; un TEACHER+USER en vista de alumno sigue viendo
  // el dropdown USER, igual que antes). La nav de alumno siempre es
  // la de USER, así que el default ya estaba bien.
  const primary = user?.roles?.[0] ?? user?.role ?? 'USER';
  const baseDropdown = DROPDOWN_BY_ROLE[primary as keyof typeof DROPDOWN_BY_ROLE]
    ?? DROPDOWN_BY_ROLE['USER'];
  // FIX-TEST4-X-02 — antes si un TEACHER entraba a `/alumno`, el
  // dropdown mostraba solo opciones de staff (Mi perfil / Ver
  // como alumno) y NO los links a Economía / Tienda / Encuestas.
  // El usuario tenía que tipear la URL a mano. Ahora: si el staff
  // también tiene rol USER, le mostramos sus opciones de alumno
  // (Economía, Tienda de temas, Encuestas) arriba del dropdown.
  const hasUser = useHasRole('USER');
  const isStaffRole = primary !== 'USER' && primary !== 'PARENT';
  const userOnlyDropdown = hasUser && isStaffRole
    ? DROPDOWN_BY_ROLE['USER']
    : [];
  const dropdownItems = [
    ...userOnlyDropdown.filter((i) => i.kind === 'link' && i.to !== '/perfil'),
    { kind: 'divider' as const },
    ...baseDropdown,
  ];

  const initials = user?.name
    ? user.name.split(' ').filter(Boolean).map(p => p[0]).join('').slice(0, 2).toUpperCase()
    : '?';

  // FASE 3 — si la sesión es una cuenta espejo (USER puro con vínculo),
  // el botón "Volver" dispara el switch en lugar de navegar por rol.
  const esEspejo = user?.cuentaVinculada?.tipoDestino === 'PRINCIPAL';

  const handleVolver = async () => {
    try {
      const { landing } = await switchCuenta();
      navigate(landing);
    } catch (e) {
      console.error('Error al volver a la cuenta principal:', e);
    }
  };

  // FASE 5b — si un staff llega a /alumno por el preview, el item
  // "Ver como alumno" del dropdown debe disparar el switch real (no un
  // link plano circular). Sin espejo, lleva a Perfil para crear/vincular.
  const tieneEspejo = user?.cuentaVinculada?.tipoDestino === 'ALUMNO';
  const handleEntrarComoAlumno = async () => {
    try {
      const { landing } = await switchCuenta();
      navigate(landing);
    } catch (e) {
      console.error('Error al entrar como alumno:', e);
    }
  };

  // MULTIROL-02: un TEACHER+USER sin espejo dedicado también ve "Volver".
  const hasTeacher = useHasRole('TEACHER');
  const hasAdmin = useHasRole('ADMIN');
  const hasDirectivo = useHasRole('DIRECTIVO');
  const roleHome =
    hasTeacher ? '/profesor' :
    hasAdmin ? '/admin' :
    hasDirectivo ? '/enterprise' : null;

  return (
    <nav
      aria-label={t('aria.navAlumno')}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        width: '100%',
        background: 'var(--c-surface)',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'var(--c-border)',
      }}
    >
      {esEspejo && (
        <div
          data-testid="espejo-indicator"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-2)',
            paddingBlock: 'var(--space-1)',
            paddingInline: 'var(--space-4)',
            fontSize: 'var(--text-xs)',
            background: 'color-mix(in srgb, var(--c-primary) 10%, var(--c-surface))',
            borderBottomWidth: '1px',
            borderBottomStyle: 'solid',
            borderBottomColor: 'color-mix(in srgb, var(--c-primary) 20%, transparent)',
            color: 'var(--c-primary)',
          }}
        >
          <span>{t('alumnoNavbar.cuentaAlumno')}</span>
          <span aria-hidden="true">·</span>
          <button
            type="button"
            onClick={handleVolver}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--c-primary)',
              fontSize: 'var(--text-xs)',
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--fw-medium)',
              textDecoration: 'underline',
              padding: 0,
            }}
          >
            {t('alumnoNavbar.volverPanelPrincipal')}
          </button>
        </div>
      )}

      <div className="flex items-center justify-between max-w-6xl gap-4 px-4 py-3 mx-auto">
        <div className="flex items-center" style={{ gap: 'var(--space-2)' }}>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label={isMobileMenuOpen ? t('aria.cerrarMenuNav') : t('aria.abrirMenuNav')}
            aria-expanded={isMobileMenuOpen}
            aria-controls="alumno-mobile-menu"
            className="md:hidden inline-flex"
            style={{
              padding: 'var(--space-1)',
              color: 'var(--c-text)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <svg width="24" height="24" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {!isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              )}
            </svg>
          </button>

          <Link
            to="/alumno"
            style={{
              fontWeight: 'var(--fw-bold)',
              fontSize: 'var(--text-base)',
              color: 'var(--c-text)',
              textDecoration: 'none',
            }}
          >
            Virtual Book
          </Link>
        </div>

        <ul
          role="list"
          className="hidden md:flex"
          style={{
            alignItems: 'center',
            gap: 'var(--space-1)',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {items.map((it) => (
            <li key={it.to}>
              <NavItem to={it.to} end={it.exact ?? true} orientation="horizontal">
                {t(`nav.${it.label}`)}
              </NavItem>
            </li>
          ))}
        </ul>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
          }}
        >
          {esEspejo ? (
            <button type="button" onClick={handleVolver} style={VOLVER_STYLE}>
              {t('common.volverAMiPanel')}
            </button>
          ) : roleHome ? (
            <Link to={roleHome} style={VOLVER_STYLE}>
              {t('common.volverAMiPanel')}
            </Link>
          ) : null}

          <Menu
            align="end"
            panelWidth="11rem"
            trigger={(p) => (
              <UserMenuTrigger
                menu={p}
                name={user?.name ?? t('common.usuarioFallback')}
                initials={initials}
              />
            )}
          >
            {({ close }) => (
              <>
                <div
                  style={{
                    paddingBlock: 'var(--space-2)',
                    paddingInline: 'var(--space-4)',
                    borderBottomWidth: '1px',
                    borderBottomStyle: 'solid',
                    borderBottomColor: 'var(--c-border)',
                    background: 'var(--c-surface-2)',
                  }}
                >
                  <p style={{ margin: 0, fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--c-text)' }}>
                    {user?.name ?? t('common.usuarioFallback')}
                  </p>
                </div>
                <div style={{ paddingBlock: 'var(--space-1)' }}>
                  {dropdownItems.map((item, i) => {
                    if (item.kind === 'divider') {
                      return (
                        <div
                          key={i}
                          style={{
                            borderTopWidth: '1px',
                            borderTopStyle: 'solid',
                            borderTopColor: 'var(--c-border)',
                            marginBlock: 'var(--space-1)',
                          }}
                        />
                      );
                    }
                    if (item.kind === 'logout') {
                      return (
                        <MenuRowButton key="logout" danger onClick={() => { close(); logout(); }}>
                          <LogoutIcon />
                          {t('dropdown.cerrarSesion')}
                        </MenuRowButton>
                      );
                    }
                    if (item.id === 'verComoAlumno') {
                      if (tieneEspejo) {
                        return (
                          <MenuRowButton key="ver-como-alumno" onClick={() => { close(); void handleEntrarComoAlumno(); }}>
                            {t(`dropdown.${item.label}`)}
                          </MenuRowButton>
                        );
                      }
                      return (
                        <MenuRowLink key="ver-como-alumno" to="/perfil" onClick={close}>
                          {t('dropdown.crearCuentaAlumno')}
                        </MenuRowLink>
                      );
                    }
                    return (
                      <MenuRowLink key={item.to} to={item.to} onClick={close}>
                        {t(`dropdown.${item.label}`)}
                      </MenuRowLink>
                    );
                  })}
                </div>
              </>
            )}
          </Menu>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="alumno-mobile-menu"
          className="md:hidden"
          style={{
            borderTopWidth: '1px',
            borderTopStyle: 'solid',
            borderTopColor: 'var(--c-border)',
          }}
        >
          <ul
            role="list"
            style={{ listStyle: 'none', margin: 0, padding: 'var(--space-2) var(--space-4)' }}
          >
            {items.map((it) => (
              <li key={it.to} style={{ paddingBlock: 'var(--space-1)' }}>
                <NavItem to={it.to} end={it.exact ?? true} orientation="sidebar">
                  {t(`nav.${it.label}`)}
                </NavItem>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
