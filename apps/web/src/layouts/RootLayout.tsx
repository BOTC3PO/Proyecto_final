import { Outlet } from "react-router-dom";
import { AuthProvider } from "../auth/auth-provider";
import { ThemeProvider } from "../theme/ThemeContext";
import Navbar from "../nav/Navbar";
import Footer from "../components/footer";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
    <AuthProvider>
      <ThemeProvider>
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </ThemeProvider>
    </AuthProvider>
    </div>
  );
}