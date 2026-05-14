import { Outlet } from 'react-router-dom';
import AlumnoNavbar from '../nav/AlumnoNavbar';
import { OfflineIndicator } from '../components/OfflineIndicator';
import AnimatedBackground from '../components/AnimatedBackground';

export default function AlumnoLayout() {
  return (
    <div className="layout-root flex flex-col min-h-screen bg-[var(--c-bg)]">
      <AnimatedBackground />
      <AlumnoNavbar />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      <OfflineIndicator />
    </div>
  );
}
