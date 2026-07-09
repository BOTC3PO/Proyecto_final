/**
 * nav/Navbar.tsx — nav principal (rediseño División 6).
 *
 * Reconstruido sobre los primitivos de `ui/` (NavItem, Avatar, Menu) + la
 * escala de tokens. La LÓGICA de navegación se reutiliza intacta: ítems y
 * rutas salen de `navConfig` (NAV_BY_ROLE / DROPDOWN_BY_ROLE) y el rol del
 * usuario de los hooks `usePrimaryRole` / `useCanActAsLearner`. Acá sólo se
 * reconstruye el *chrome* (presentación, estados, a11y).
 *
 * A11y: landmark `<nav>` con nombre; `aria-current="page"` lo aporta NavItem
 * (vía NavLink); foco visible por la regla global; íconos decorativos con
 * `aria-hidden` y controles solo-ícono con nombre accesible.
 */
import {
  useEffect,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import { useCanActAsLearner, usePrimaryRole } from "../auth/use-roles";
import { NAV_BY_ROLE, DROPDOWN_BY_ROLE } from "./navConfig";
import { apiGet } from "../lib/api";
import { prefetchRoute } from "../routing/prefetch";
import { Avatar, Menu, NavItem, type MenuTriggerProps } from "../ui";
import { useI18n } from "../i18n/I18nContext";

function CoinBadge({ userId }: { userId: string }) {
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
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-1)",
    borderRadius: "var(--r-xl)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "color-mix(in srgb, var(--c-warning) 35%, transparent)",
    background: "color-mix(in srgb, var(--c-warning) 10%, transparent)",
    paddingBlock: "var(--space-1)",
    paddingInline: "var(--space-3)",
    fontSize: "var(--text-xs)",
    fontWeight: "var(--fw-semibold)",
    color: "var(--c-warning)",
    userSelect: "none",
  };
  return (
    <Link to="/economia" title="Ver economía" aria-label={`${coins} monedas`} style={badge}>
      <span aria-hidden="true">🪙</span>
      <span>{coins.toLocaleString('es-AR')}</span>
    </Link>
  );
}

const ICON_PATHS: Record<string, string> = {
  user: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0",
  coin: "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  palette:
    "M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z",
};

function DropdownIcon({ name }: { name: string }) {
  const d = ICON_PATHS[name];
  if (!d) return null;
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      style={{ color: "var(--c-muted)", flexShrink: 0 }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

const publicHomePath = '/';

// ── Públicos (GUEST): bar coloreada con tokens de nav ──────────────────────

// `label` es la clave de traducción en el namespace `nav.` (ver i18n/es.json).
type PublicLink = { to: string; label: string; prefetch?: () => void };

const PUBLIC_LINKS: PublicLink[] = [
  { to: publicHomePath, label: "inicio" },
  { to: "/metodologia", label: "metodologia", prefetch: () => void prefetchRoute.metodologia() },
  { to: "/explorar", label: "juegosEducativos", prefetch: () => void prefetchRoute.explorar() },
  { to: "/contact", label: "contacto", prefetch: () => void prefetchRoute.contact() },
  { to: "/terminos", label: "terminos" },
  { to: "/privacidad", label: "privacidad" },
];

function PublicNavLink({
  to,
  children,
  onMouseEnter,
  onClick,
  block,
}: {
  to: string;
  children: ReactNode;
  onMouseEnter?: () => void;
  onClick?: () => void;
  block?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <NavLink
      to={to}
      onMouseEnter={() => { setHovered(true); onMouseEnter?.(); }}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      end={to === publicHomePath}
      style={({ isActive }) => ({
        display: block ? "block" : "inline-flex",
        alignItems: "center",
        textDecoration: "none",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--fw-medium)",
        paddingBlock: "var(--space-2)",
        paddingInline: "var(--space-3)",
        borderRadius: "var(--r-md)",
        color:
          isActive || hovered
            ? "var(--c-nav-text)"
            : "color-mix(in srgb, var(--c-nav-text) 75%, transparent)",
        background:
          block && (isActive || hovered)
            ? "color-mix(in srgb, var(--c-nav-text) 12%, transparent)"
            : "transparent",
        transition: "color 120ms ease, background-color 120ms ease",
      })}
    >
      {children}
    </NavLink>
  );
}

function LoginLink({ block, onClick }: { block?: boolean; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);
  const { t } = useI18n();
  const style: CSSProperties = {
    display: block ? "flex" : "inline-flex",
    width: block ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    paddingBlock: "var(--space-2)",
    paddingInline: "var(--space-4)",
    borderRadius: "var(--r-lg)",
    background: hovered
      ? "color-mix(in srgb, var(--c-primary) 85%, black)"
      : "var(--c-primary)",
    color: "var(--c-text-on-dark)",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-sm)",
    fontWeight: "var(--fw-semibold)",
    textDecoration: "none",
    transition: "background-color 120ms ease",
  };
  return (
    <NavLink
      to="/login"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={style}
    >
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      <span style={{ display: block ? "inline" : undefined }}>{t('common.iniciarSesionBtn')}</span>
    </NavLink>
  );
}

// ── Filas del menú de usuario (hover token-puro) ───────────────────────────

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
        display: "flex",
        alignItems: "center",
        gap: "var(--space-2)",
        paddingBlock: "var(--space-2)",
        paddingInline: "var(--space-4)",
        fontSize: "var(--text-xs)",
        color: "var(--c-text)",
        textDecoration: "none",
        background: hovered ? "var(--c-hover)" : "transparent",
        transition: "background-color 120ms ease",
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
        display: "flex",
        width: "100%",
        alignItems: "center",
        gap: "var(--space-2)",
        paddingBlock: "var(--space-2)",
        paddingInline: "var(--space-4)",
        fontSize: "var(--text-xs)",
        color: danger ? "var(--c-danger)" : "var(--c-text)",
        background: hovered
          ? danger
            ? "color-mix(in srgb, var(--c-danger) 8%, transparent)"
            : "var(--c-hover)"
          : "transparent",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        transition: "background-color 120ms ease",
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

export default function Navbar() {
  const { user, logout, switchCuenta } = useAuth();
  const { t } = useI18n();
  const navigate = useNavigate();
  // FASE 5b — el switch real a la cuenta espejo (igual que StaffSidebar).
  const tieneEspejo = user?.cuentaVinculada?.tipoDestino === 'ALUMNO';
  const handleEntrarComoAlumno = async () => {
    try {
      const { landing } = await switchCuenta();
      navigate(landing);
    } catch (e) {
      console.error('Error al entrar como alumno:', e);
    }
  };
  // PLAN-C §6 (ítem 31) — mismo mecanismo para la dirección alumno→padre
  // (FASE 6, autoservicio): "Ver como padre" en el dropdown de USER.
  const tienePadre = user?.cuentaVinculada?.tipoDestino === 'PADRE';
  const handleEntrarComoPadre = async () => {
    try {
      const { landing } = await switchCuenta();
      navigate(landing);
    } catch (e) {
      console.error('Error al entrar como padre:', e);
    }
  };
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // MULTIROL-02: el rol principal maneja NAV_BY_ROLE / DROPDOWN_BY_ROLE
  // (la nav sigue siendo del rol de mayor jerarquía, igual que antes).
  // El CoinBadge, en cambio, se muestra si el user PUEDE actuar como
  // alumno (roles[] incluye "USER") — un TEACHER+USER también ve
  // monedas aunque su rol principal sea staff.
  const primary = usePrimaryRole();
  const canActAsLearner = useCanActAsLearner();
  const role = primary ?? (user?.role ?? 'GUEST');
  const items = NAV_BY_ROLE[role as keyof typeof NAV_BY_ROLE];

  const userInitials = user?.name
    ? user.name.split(" ").filter(Boolean)
        .map((p) => p[0]).join("").slice(0, 2).toUpperCase()
    : "?";

  // Mostrar navbar público sólo si el usuario es GUEST (no autenticado)
  const isPublicPage = role === 'GUEST';

  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Cerrar menú móvil al redimensionar ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Si es una página pública, mostrar navbar público
  if (isPublicPage) {
    return (
      <>
        <nav
          aria-label={t('aria.navPrincipal')}
          style={{
            background: "#2563eb",
            color: "#ffffff",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <div className="flex flex-wrap items-center justify-between max-w-6xl gap-2 px-4 py-3 mx-auto md:flex-nowrap">
            {/* Botón Hamburguesa (Solo móvil) */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? t('aria.cerrarMenuNav') : t('aria.abrirMenuNav')}
                aria-expanded={isMobileMenuOpen}
                aria-controls="public-mobile-menu"
                style={{
                  display: "inline-flex",
                  padding: "var(--space-1)",
                  color: "var(--c-nav-text)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
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
            </div>

            {/* Logo */}
            <Link
              to={publicHomePath}
              aria-label={t('aria.logoInicio')}
              style={{ display: "inline-flex", color: "var(--c-nav-text)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </Link>

            {/* Navegación Desktop */}
            <ul className="items-center hidden gap-1 md:flex">
              {PUBLIC_LINKS.map((l) => (
                <li key={l.to}>
                  <PublicNavLink to={l.to} onMouseEnter={l.prefetch}>
                    {t(`nav.${l.label}`)}
                  </PublicNavLink>
                </li>
              ))}
            </ul>

            {/* Botón Iniciar Sesión */}
            <div className={isMobileMenuOpen ? "invisible" : ""}>
              <LoginLink />
            </div>
          </div>
        </nav>

        {/* Menú Mobile */}
        {isMobileMenuOpen && (
          <div
            id="public-mobile-menu"
            className="md:hidden"
            style={{
              background: "#2563eb",
              borderTopWidth: "1px",
              borderTopStyle: "solid",
              borderTopColor: "color-mix(in srgb, #ffffff 18%, transparent)",
            }}
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {PUBLIC_LINKS.map((l) => (
                <PublicNavLink key={l.to} to={l.to} block onClick={() => setIsMobileMenuOpen(false)}>
                  {t(`nav.${l.label}`)}
                </PublicNavLink>
              ))}
              <div className="pt-2">
                <LoginLink block onClick={() => setIsMobileMenuOpen(false)} />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // Para el resto de páginas, mostrar navbar con roles
  const dropdownItems = DROPDOWN_BY_ROLE[role as keyof typeof DROPDOWN_BY_ROLE] ?? [];

  return (
    <nav
      aria-label={t('aria.navPrincipal')}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        width: "100%",
        background: "var(--c-surface)",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "var(--c-border)",
      }}
    >
      <div className="flex items-center justify-between max-w-6xl gap-4 px-4 py-3 mx-auto">
        <Link
          to="/"
          style={{
            fontWeight: "var(--fw-bold)",
            fontSize: "var(--text-base)",
            color: "var(--c-text)",
            textDecoration: "none",
          }}
        >
          Virtual Book
        </Link>

        <ul className="flex flex-wrap items-center gap-1">
          {items?.map((it) => (
            <li key={it.to}>
              <NavItem to={it.to} end={it.exact ?? true} orientation="horizontal">
                {t(`nav.${it.label}`)}
              </NavItem>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {canActAsLearner && user?.id && <CoinBadge userId={user.id} />}
          {user ? (
            <Menu
              align="end"
              panelWidth="var(--space-8)"
              trigger={(p) => (
                <UserMenuTrigger
                  menu={p}
                  role={role}
                  name={user?.name ?? t('common.usuarioFallback')}
                  initials={userInitials}
                />
              )}
            >
              {({ close }) => (
                <>
                  <div
                    style={{
                      paddingBlock: "var(--space-2)",
                      paddingInline: "var(--space-4)",
                      borderBottomWidth: "1px",
                      borderBottomStyle: "solid",
                      borderBottomColor: "var(--c-border)",
                      background: "var(--c-surface-2)",
                    }}
                  >
                    <p style={{ margin: 0, fontSize: "var(--text-sm)", fontWeight: "var(--fw-semibold)", color: "var(--c-text)" }}>
                      {user?.name ?? t('common.usuarioFallback')}
                    </p>
                    <p style={{ margin: 0, fontSize: "var(--text-xs)", color: "var(--c-muted)", textTransform: "capitalize" }}>
                      {role.toLowerCase()}
                    </p>
                  </div>
                  <div style={{ paddingBlock: "var(--space-1)" }}>
                    {dropdownItems.map((item, i) => {
                      if (item.kind === 'divider') {
                        return (
                          <div
                            key={i}
                            style={{
                              borderTopWidth: "1px",
                              borderTopStyle: "solid",
                              borderTopColor: "var(--c-border)",
                              marginBlock: "var(--space-1)",
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
                        // FASE 5b — unificado con StaffSidebar. Con espejo:
                        // dispara el switch real. Sin espejo: lleva a Perfil
                        // para crear/vincular la cuenta alumno, en vez de un
                        // link muerto a /alumno con los datos propios.
                        if (tieneEspejo) {
                          return (
                            <MenuRowButton key="ver-como-alumno" onClick={() => { close(); void handleEntrarComoAlumno(); }}>
                              <DropdownIcon name={item.icon} />
                              {t(`dropdown.${item.label}`)}
                            </MenuRowButton>
                          );
                        }
                        return (
                          <MenuRowLink
                            key="ver-como-alumno"
                            to="/perfil"
                            icon={<DropdownIcon name={item.icon} />}
                            onClick={close}
                          >
                            {t('dropdown.crearCuentaAlumno')}
                          </MenuRowLink>
                        );
                      }
                      if (item.id === 'verComoPadre') {
                        if (tienePadre) {
                          return (
                            <MenuRowButton key="ver-como-padre" onClick={() => { close(); void handleEntrarComoPadre(); }}>
                              <DropdownIcon name={item.icon} />
                              {t(`dropdown.${item.label}`)}
                            </MenuRowButton>
                          );
                        }
                        return (
                          <MenuRowLink
                            key="ver-como-padre"
                            to="/perfil"
                            icon={<DropdownIcon name={item.icon} />}
                            onClick={close}
                          >
                            {t('dropdown.crearCuentaPadre')}
                          </MenuRowLink>
                        );
                      }
                      return (
                        <MenuRowLink
                          key={item.to}
                          to={item.to}
                          icon={<DropdownIcon name={item.icon} />}
                          onClick={close}
                        >
                          {t(`dropdown.${item.label}`)}
                        </MenuRowLink>
                      );
                    })}
                  </div>
                </>
              )}
            </Menu>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

// Disparador del menú de usuario: avatar + nombre + chevron. El avatar de
// ADMIN conserva el efecto especial `admin-avatar` (gradiente animado de
// index.css), por eso no pasa por el átomo Avatar.
function UserMenuTrigger({
  menu,
  role,
  name,
  initials,
}: {
  menu: MenuTriggerProps;
  role: string;
  name: string;
  initials: string;
}) {
  const [hovered, setHovered] = useState(false);
  const { t } = useI18n();
  const expanded = menu["aria-expanded"];
  return (
    <button
      type="button"
      onClick={menu.onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={t('aria.menuUsuario')}
      aria-haspopup={menu["aria-haspopup"]}
      aria-expanded={expanded}
      aria-controls={menu["aria-controls"]}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        borderRadius: "var(--r-xl)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "var(--c-border)",
        background: hovered ? "var(--c-hover)" : "var(--c-surface)",
        paddingBlock: "var(--space-1)",
        paddingInline: "var(--space-2)",
        fontSize: "var(--text-sm)",
        color: "var(--c-text)",
        cursor: "pointer",
        transition: "background-color 120ms ease",
      }}
    >
      {role === 'ADMIN' ? (
        <span
          className="admin-avatar"
          aria-hidden="true"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "var(--space-6)",
            height: "var(--space-6)",
            borderRadius: "50%",
            background: "#000",
            fontWeight: "var(--fw-bold)",
            fontSize: "var(--text-sm)",
            userSelect: "none",
          }}
        >
          A
        </span>
      ) : (
        <Avatar initials={initials} aria-hidden="true" />
      )}
      <span
        className="hidden sm:block"
        style={{
          fontWeight: "var(--fw-medium)",
          maxWidth: "120px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </span>
      <svg
        aria-hidden="true"
        width="16"
        height="16"
        style={{
          color: "var(--c-muted)",
          transition: "transform 120ms ease",
          transform: expanded ? "rotate(180deg)" : "none",
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
