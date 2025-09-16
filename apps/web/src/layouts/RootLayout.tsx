import { Outlet } from "react-router-dom";
import { AuthProvider } from "../auth/auth-provider";
import Navbar from "../nav/Navbar";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Navbar />
      <Outlet />
    </AuthProvider>
  );
}