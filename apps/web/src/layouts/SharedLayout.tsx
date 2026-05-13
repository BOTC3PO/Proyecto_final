import { Outlet } from 'react-router-dom';
import Navbar from '../nav/Navbar';
import { OfflineIndicator } from '../components/OfflineIndicator';

export default function SharedLayout() {
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
