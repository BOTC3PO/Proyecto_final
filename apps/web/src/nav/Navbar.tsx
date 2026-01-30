import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../auth/use-auth';
import { NAV_BY_ROLE } from './navConfig';
import type { Role } from '../auth/roles';
import { useEffect, useState } from 'react';
import testmode from '../sys/testmode';

// Páginas que usan el navbar público
const PUBLIC_PAGES = ['/', '/metodologia', '/explorar', '/contact', '/login', '/register'];
const publicHomePath = '/';



export default function Navbar() {
  const { user, logout, loginAs } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const role = user?.role ?? 'GUEST';
  const items = NAV_BY_ROLE[role];
  
  // Determinar si mostrar navbar público
  const isPublicPage = PUBLIC_PAGES.includes(location.pathname);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
          {/* Botones de demo para cambiar rol rápido (sacalos en producción) */}
          {testmode() ? (
            <select
              className="px-2 py-1 text-sm border rounded"
              onChange={(e) => loginAs(e.target.value as Role)}
              defaultValue=""
            >
              <option value="" disabled>Cambiar rol (demo)</option>
              <option value="ADMIN">ADMIN</option>
              <option value="USER">USER (Alumno)</option>
              <option value="PARENT">PARENT</option>
              <option value="TEACHER">TEACHER</option>
              <option value="ENTERPRISE">ENTERPRISE</option>
              <option value="GUEST">GUEST</option>
            </select>
          ) : null}

          {role !== 'GUEST' ? (
            <button onClick={logout} className="px-3 py-1 text-sm text-white bg-gray-900 rounded">
              Salir
            </button>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
