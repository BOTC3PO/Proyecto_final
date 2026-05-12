import { NavLink, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../auth/use-auth';
import { NAV_BY_ROLE, DROPDOWN_BY_ROLE } from './navConfig';
import { useEffect, useRef, useState } from 'react';
import { apiGet } from '../lib/api';

function CoinBadge({ userId }: { userId: string }) {
  const [coins, setCoins] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    apiGet<{ saldo: number }>(`/api/economia/saldos?usuarioId=${userId}`)
      .then((res) => { if (active) setCoins(res.saldo); })
      .catch(() => {});
    return () => { active = false; };
  }, [userId]);

  if (coins === null) return null;

  return (
    <div
      className="hidden sm:flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 select-none"
      title="Tus monedas"
      aria-label={`${coins} monedas`}
    >
      <span aria-hidden="true">🪙</span>
      <span>{coins.toLocaleString('es-AR')}</span>
    </div>
  );
}

function DropdownIcon({ name }: { name: string }) {
  if (name === 'user') {
    return (
      <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" />
      </svg>
    );
  }
  if (name === 'coin') {
    return (
      <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    );
  }
  if (name === 'palette') {
    return (
      <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
      </svg>
    );
  }
  return null;
}

// Páginas que usan el navbar público
const PUBLIC_PAGES = ['/', '/metodologia', '/explorar', '/contact', '/login', '/register'];
const publicHomePath = '/';



export default function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const role = user?.role ?? 'GUEST';
  const items = NAV_BY_ROLE[role];
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const userInitials = user?.name
    ? user.name.split(" ").filter(Boolean)
        .map((p) => p[0]).join("").slice(0, 2).toUpperCase()
    : "?";

  // Mostrar navbar público sólo si el usuario es GUEST (no autenticado)
  const isPublicPage = role === 'GUEST';
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        <nav className="px-8 bg-blue-600 shadow shadow-gray-300 md:px-auto">
          <div className="container flex flex-wrap items-center content-center justify-between mx-auto max-h-16 md:h-16 h-28 md:px-4 md:flex-nowrap">
            
            {/* Botón Hamburguesa (Solo móvil) */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-white transition-colors hover:text-indigo-300 focus:outline-none focus:text-indigo-300"
                aria-label={isMobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="public-mobile-menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {!isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  )}
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className="text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                role="img"
                aria-label="Logo de Proyecto Challenger"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>

            {/* Navegación Desktop */}
            <div className="order-3 w-full text-white md:w-auto md:order-2">
              <ul className="justify-between hidden font-semibold md:flex">
                <li className="md:px-4 md:py-2">
                  <NavLink 
                    to={publicHomePath}
                    className={({ isActive }) => 
                      isActive ? 'text-indigo-300' : 'text-white hover:text-indigo-300 transition-colors'
                    }
                  >
                    Inicio
                  </NavLink>
                </li>
                <li className="md:px-4 md:py-2">
                  <NavLink 
                    to="/metodologia" 
                    className={({ isActive }) => 
                      isActive ? 'text-indigo-300' : 'text-white hover:text-indigo-300 transition-colors'
                    }
                  >
                    Metodología
                  </NavLink>
                </li>
                <li className="md:px-4 md:py-2">
                  <NavLink 
                    to="/explorar" 
                    className={({ isActive }) => 
                      isActive ? 'text-indigo-300' : 'text-white hover:text-indigo-300 transition-colors'
                    }
                  >
                    Juegos Educativos
                  </NavLink>
                </li>
                <li className="md:px-4 md:py-2">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? 'text-indigo-300' : 'text-white hover:text-indigo-300 transition-colors'
                    }
                  >
                    Contacto
                  </NavLink>
                </li>
                <li className="md:px-4 md:py-2">
                  <NavLink
                    to="/terminos"
                    className={({ isActive }) =>
                      isActive ? 'text-indigo-300' : 'text-white hover:text-indigo-300 transition-colors'
                    }
                  >
                    Términos
                  </NavLink>
                </li>
                <li className="md:px-4 md:py-2">
                  <NavLink
                    to="/privacidad"
                    className={({ isActive }) =>
                      isActive ? 'text-indigo-300' : 'text-white hover:text-indigo-300 transition-colors'
                    }
                  >
                    Privacidad
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Botón Iniciar Sesión */}
            <div className={`md:order-2 ${isMobileMenuOpen ? 'invisible' : ''}`}>
              <NavLink
                to="/login"
                className="flex items-center gap-2 px-4 py-2 transition-colors bg-orange-600 hover:bg-orange-700 text-gray-50 rounded-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="hidden md:block">Iniciar Sesión</span>
              </NavLink>
            </div>
          </div>
        </nav>

        {/* Menú Mobile */}
        {isMobileMenuOpen && (
          <div className="bg-blue-700 border-t border-blue-500 md:hidden" id="public-mobile-menu">
            <div className="px-4 py-2 space-y-2">
              <NavLink 
                to={publicHomePath} 
                className={({ isActive }) => 
                  `block py-2 px-4 rounded transition-colors ${
                    isActive 
                      ? 'text-indigo-300 bg-blue-800' 
                      : 'text-white hover:bg-blue-800'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </NavLink>
              <NavLink 
                to="/metodologia" 
                className={({ isActive }) => 
                  `block py-2 px-4 rounded transition-colors ${
                    isActive 
                      ? 'text-indigo-300 bg-blue-800' 
                      : 'text-white hover:bg-blue-800'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Metodología
              </NavLink>
              <NavLink 
                to="/explorar" 
                className={({ isActive }) => 
                  `block py-2 px-4 rounded transition-colors ${
                    isActive 
                      ? 'text-indigo-300 bg-blue-800' 
                      : 'text-white hover:bg-blue-800'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Juegos Educativos
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded transition-colors ${
                    isActive
                      ? 'text-indigo-300 bg-blue-800'
                      : 'text-white hover:bg-blue-800'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </NavLink>
              <NavLink
                to="/terminos"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded transition-colors ${
                    isActive
                      ? 'text-indigo-300 bg-blue-800'
                      : 'text-white hover:bg-blue-800'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Términos
              </NavLink>
              <NavLink
                to="/privacidad"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded transition-colors ${
                    isActive
                      ? 'text-indigo-300 bg-blue-800'
                      : 'text-white hover:bg-blue-800'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Privacidad
              </NavLink>
              <div className="pt-2">
                <NavLink
                  to="/login"
                  className="flex items-center justify-center w-full gap-2 px-4 py-2 transition-colors bg-orange-600 hover:bg-orange-700 text-gray-50 rounded-xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Iniciar Sesión</span>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // Para el resto de páginas, mostrar navbar con roles
  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur">
      <div className="flex items-center justify-between max-w-6xl px-4 py-3 mx-auto">
        <div className="font-bold">Proyecto Challenger</div>

        <ul className="flex gap-4">
          {items.map((it) => (
            <li key={it.to}>
              <NavLink
                to={it.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-sm ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`
                }
                end={it.exact ?? true}
              >
                {it.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {role === 'USER' && user?.id && <CoinBadge userId={user.id} />}
          {role !== 'GUEST' ? (
            <div className="relative" ref={userMenuRef}>
              {/* Avatar / botón trigger */}
              <button
                onClick={() => setIsUserMenuOpen((prev) => !prev)}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1.5 text-sm shadow-sm hover:bg-slate-50 transition-colors"
                aria-label="Menú de usuario"
                aria-expanded={isUserMenuOpen}
              >
                {role === 'ADMIN' ? (
                  <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center font-bold text-sm admin-avatar select-none">
                    A
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold select-none">
                    {userInitials}
                  </div>
                )}
                <span className="hidden sm:block text-slate-700 font-medium max-w-[120px] truncate">
                  {user?.name ?? "Usuario"}
                </span>
                <svg className={`w-4 h-4 text-slate-400 transition-transform ${isUserMenuOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-slate-200 bg-white shadow-lg z-50 overflow-hidden">
                  {/* Encabezado */}
                  <div className="px-4 py-3 border-b border-slate-100 bg-slate-50">
                    <p className="text-sm font-semibold text-slate-800 truncate">
                      {user?.name ?? "Usuario"}
                    </p>
                    <p className="text-xs text-slate-400 capitalize">
                      {role.toLowerCase()}
                    </p>
                  </div>

                  {/* Items dinámicos */}
                  <div className="py-1">
                    {DROPDOWN_BY_ROLE[role].map((item, i) => {
                      if (item.kind === 'divider') {
                        return <div key={i} className="border-t border-slate-100 my-1" />;
                      }
                      if (item.kind === 'logout') {
                        return (
                          <button
                            key="logout"
                            onClick={() => { setIsUserMenuOpen(false); logout(); }}
                            className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"
                              stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round"
                                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                            </svg>
                            Cerrar sesión
                          </button>
                        );
                      }
                      return (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                        >
                          <DropdownIcon name={item.icon} />
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
