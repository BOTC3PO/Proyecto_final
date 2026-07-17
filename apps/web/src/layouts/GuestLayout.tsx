import { Outlet } from "react-router-dom";
import Navbar from "../nav/Navbar";
import Footer from "../components/footer";
import { OfflineIndicator } from "../components/OfflineIndicator";

export default function GuestLayout() {
  return (
    <div className="layout-root flex flex-col min-h-screen bg-[var(--c-bg)]">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>
      <Footer />
      <OfflineIndicator />
    </div>
  );
}
