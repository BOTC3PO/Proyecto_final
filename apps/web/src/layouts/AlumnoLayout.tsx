import { Outlet } from 'react-router-dom';
import Navbar from '../nav/Navbar';
import { OfflineIndicator } from '../components/OfflineIndicator';
import AnimatedBackground from '../components/AnimatedBackground';

export default function AlumnoLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--c-bg)]">
      <AnimatedBackground />
      <Navbar />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      <OfflineIndicator />
    </div>
  );
}
