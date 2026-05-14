import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../auth/use-auth';
import { NAV_BY_ROLE } from '../nav/navConfig';
import { OfflineIndicator } from '../components/OfflineIndicator';
import StaffSidebar from './StaffSidebar';

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
    <div className="layout-root flex min-h-screen bg-[var(--c-bg)]">
      <StaffSidebar />
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
