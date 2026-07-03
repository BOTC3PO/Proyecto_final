import { Outlet } from "react-router-dom";
import { AuthProvider } from "../auth/auth-provider";
import { ThemeProvider } from "../theme/ThemeContext";
import { useSchoolFavicon } from "../hooks/useSchoolFavicon";

function SchoolFaviconSync() {
  useSchoolFavicon();
  return null;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <SchoolFaviconSync />
        <Outlet />
      </ThemeProvider>
    </AuthProvider>
  );
}