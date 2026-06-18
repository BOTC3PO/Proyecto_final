import { Outlet } from 'react-router-dom';
import { useIsStaff } from '../auth/use-roles';
import Navbar from '../nav/Navbar';
import { OfflineIndicator } from '../components/OfflineIndicator';
import StaffSidebar from './StaffSidebar';

export default function RoleLayout() {
  // MULTIROL-02: usar helper centralizado en vez de chequear
  // `user.role` suelto. Acepta multi-rol: un TEACHER+USER es staff.
  const isStaff = useIsStaff();

  if (isStaff) {
    return (
      <div className="flex min-h-screen bg-[var(--c-bg)]">
        <StaffSidebar />
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          <main className="flex-grow overflow-y-auto">
            <Outlet />
          </main>
          <OfflineIndicator />
        </div>
      </div>
    );
  }

  return (
    <div className="layout-root flex flex-col min-h-screen bg-[var(--c-bg)]">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <OfflineIndicator />
    </div>
  );
}
