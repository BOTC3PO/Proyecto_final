import { Outlet } from "react-router-dom";
import Navbar from "../nav/Navbar";
import Footer from "../components/footer";
import { OfflineIndicator } from "../components/OfflineIndicator";

export default function GuestLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <OfflineIndicator />
    </div>
  );
}
