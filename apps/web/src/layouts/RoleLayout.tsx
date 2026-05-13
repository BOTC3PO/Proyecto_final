import { Outlet } from 'react-router-dom';
import { useAuth } from '../auth/use-auth';
import Navbar from '../nav/Navbar';
import { OfflineIndicator } from '../components/OfflineIndicator';
import StaffSidebar from './StaffSidebar';

const STAFF_ROLES = ['TEACHER', 'DIRECTIVO', 'ADMIN'];

export default function RoleLayout() {
  const { user } = useAuth();
  const isStaff = STAFF_ROLES.includes(user?.role ?? '');

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
