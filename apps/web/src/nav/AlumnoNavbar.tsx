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
import { useCanActAsLearner, useHasRole } from '../auth/use-roles';
import { NAV_BY_ROLE, DROPDOWN_BY_ROLE } from './navConfig';
import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import { NavItem, Avatar, Menu, type MenuTriggerProps } from '../ui';
import { apiGet } from '../lib/api';
import { useI18n } from '../i18n/I18nContext';
import BrandMark from '../components/Brand';

// ── Monedas + íconos del dropdown (idéntico a nav/Navbar.tsx — este navbar
// nunca los tuvo, ver [[FIX-ALUMNO-NAVBAR-COINS-ICONS]]) ─────────────────────

function CoinBadge({ userId }: { userId: string }) {
  const { t } = useI18n();
  const [coins, setCoins] = useState<number | null>(null);
  const fetchCoins = () => {
    apiGet<{ saldo: number }>(`/api/economia/saldos?usuarioId=${userId}`)
      .then((res) => setCoins(res.saldo))
      .catch(() => {});
  };
  useEffect(() => {
    let active = true;
    apiGet<{ saldo: number }>(`/api/economia/saldos?usuarioId=${userId}`)
      .then((res) => { if (active) setCoins(res.saldo); })
      .catch(() => {});
    const handler = () => fetchCoins();
    window.addEventListener('vb:coins-updated', handler);
    return () => {
      active = false;
      window.removeEventListener('vb:coins-updated', handler);
    };
  }, [userId]);
  if (coins === null) return null;
  const badge: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-1)',
    borderRadius: 'var(--r-xl)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'color-mix(in srgb, var(--c-warning) 35%, transparent)',
    background: 'color-mix(in srgb, var(--c-warning) 10%, transparent)',
    paddingBlock: 'var(--space-1)',
    paddingInline: 'var(--space-3)',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--fw-semibold)',
    color: 'var(--c-warning)',
    userSelect: 'none',
  };
  return (
    <Link to="/economia" title={t('navbar.verEconomia')} aria-label={`${coins} monedas`} style={badge}>
      <span aria-hidden="true">🪙</span>
      <span>{coins.toLocaleString('es-AR')}</span>
    </Link>
  );
}

const ICON_PATHS: Record<string, string> = {
  user: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0',
  coin: 'M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  palette:
    'M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z',
};

function DropdownIcon({ name }: { name: string }) {
  const d = ICON_PATHS[name];
  if (!d) return null;
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      style={{ color: 'var(--c-muted)', flexShrink: 0 }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

// ── Filas del menú de usuario (token-puro, igual que Navbar) ─────────────────

function MenuRowLink({ to, icon, children, onClick }: {
  to: string;
  icon?: ReactNode;
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
      {icon}
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

  // MULTIROL-02: el dropdown se elige por el rol principal del user
  // (USER por default).
  const primary = user?.roles?.[0] ?? user?.role ?? 'USER';
  // FIX-NAVBAR-ROL-DUAL (docs/qa/bug-visual-aula-rol-dual.md, bug 1) —
  // antes `items` estaba hardcodeado a NAV_BY_ROLE['USER'] sin importar
  // quién mirara: un TEACHER en su PROPIA cuenta viendo /clases/:aulaId
  // ve más datos que un alumno (ACCIONES DEL AULA, "Gestionar aula",
  // editar/borrar publicaciones — ver aula.tsx), así que mostrarle la
  // navegación de alumno arriba era la mitad de la mezcla incoherente
  // (arriba "sos alumno", el resto de la página "sos docente"). Ahora
  // la nav de arriba respeta el rol real de la cuenta, igual que el
  // dropdown y el resto del contenido de la página. Una cuenta espejo
  // real (USER puro, cuentaVinculada.tipoDestino === 'PRINCIPAL') sigue
  // viendo NAV_BY_ROLE['USER'] sin cambios: `primary` ya es 'USER' ahí.
  const items = NAV_BY_ROLE[primary as keyof typeof NAV_BY_ROLE] ?? NAV_BY_ROLE['USER'];
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
  // FASE 3 — si la sesión es una cuenta espejo (USER puro con vínculo),
  // el botón "Volver" dispara el switch en lugar de navegar por rol.
  const esEspejo = user?.cuentaVinculada?.tipoDestino === 'PRINCIPAL';
  const dropdownItems = [
    ...userOnlyDropdown.filter((i) => i.kind === 'link' && i.to !== '/perfil'),
    { kind: 'divider' as const },
    ...baseDropdown,
  ];

  const initials = user?.name
    ? user.name.split(' ').filter(Boolean).map(p => p[0]).join('').slice(0, 2).toUpperCase()
    : '?';

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

  const canActAsLearner = useCanActAsLearner();

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
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              fontWeight: 'var(--fw-bold)',
              fontSize: 'var(--text-base)',
              color: 'var(--c-text)',
              textDecoration: 'none',
            }}
          >
            <BrandMark size={22} />
            {t("comun.virtualBook")}
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
          {canActAsLearner && user?.id && <CoinBadge userId={user.id} />}

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
                            <DropdownIcon name={item.icon} />
                            {t(`dropdown.${item.label}`)}
                          </MenuRowButton>
                        );
                      }
                      return (
                        <MenuRowLink key="ver-como-alumno" to="/perfil" icon={<DropdownIcon name={item.icon} />} onClick={close}>
                          {t('dropdown.crearCuentaAlumno')}
                        </MenuRowLink>
                      );
                    }
                    return (
                      <MenuRowLink key={item.to} to={item.to} icon={<DropdownIcon name={item.icon} />} onClick={close}>
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
