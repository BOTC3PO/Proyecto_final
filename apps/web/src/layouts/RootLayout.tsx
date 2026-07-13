import { Outlet } from "react-router-dom";
import { AuthProvider } from "../auth/auth-provider";
import { ThemeProvider } from "../theme/ThemeContext";
import { I18nProvider } from "../i18n/I18nContext";
import { useSchoolFavicon } from "../hooks/useSchoolFavicon";

function SchoolFaviconSync() {
  useSchoolFavicon();
  return null;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <I18nProvider>
        <ThemeProvider>
          <SchoolFaviconSync />
          <Outlet />
        </ThemeProvider>
      </I18nProvider>
    </AuthProvider>
  );
}