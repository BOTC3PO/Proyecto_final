import { Outlet } from "react-router-dom";
import { AuthProvider } from "../auth/auth-provider";
import Navbar from "../nav/Navbar";
import Footer from "../components/footer";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
    <AuthProvider>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </AuthProvider>
    </div>
  );
}