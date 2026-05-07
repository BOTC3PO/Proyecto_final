import { Outlet } from "react-router-dom";
import { AuthProvider } from "../auth/auth-provider";
import { ThemeProvider } from "../theme/ThemeContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </AuthProvider>
  );
}