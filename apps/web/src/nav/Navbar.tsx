import { NavLink } from 'react-router-dom';
import { useAuth } from '../auth/use-auth';
import { NAV_BY_ROLE } from './navConfig';
import type { Role } from '../auth/roles';

export default function Navbar() {
  const { user, logout, loginAs } = useAuth();
  const role = user?.role ?? 'GUEST';
  const items = NAV_BY_ROLE[role];

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