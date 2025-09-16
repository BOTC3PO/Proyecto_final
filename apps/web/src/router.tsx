import { createBrowserRouter, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./routing/ProtectedRoute";
import RootLayout from "./layouts/RootLayout";

// Páginas existentes
//import Landing from "./pages/Landing";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Componentes de páginas simples
import {
  Home,
  Explorar,
  Precios,
  Login,
  Register,
  Admin,
  AdminUsuarios,
  AdminCursos,
  AdminReportes,
  Clases,
  Tareas,
  Progreso,
  Hijos,
  ProfCursos,
  ProfCalif,
  ProfAsist,
  EntDash,
  EntContr,
  EntRep,
} from "./components/PageComponents";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // Rutas públicas (GUEST)
      { index: true, element: <Home /> },
      { path: "explorar", element: <Explorar /> },
      { path: "precios", element: <Precios /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      
      // Rutas adicionales que tenías en GuestLayout
      { path: "about", element: <About /> },
      { path: "pricing", element: <Pricing /> },
      { path: "contact", element: <Contact /> },

      // Admin
      {
        path: "admin",
        element: (
          <ProtectedRoute allow={['ADMIN']}>
            <Admin />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/usuarios",
        element: (
          <ProtectedRoute allow={['ADMIN']}>
            <AdminUsuarios />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/cursos",
        element: (
          <ProtectedRoute allow={['ADMIN']}>
            <AdminCursos />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/reportes",
        element: (
          <ProtectedRoute allow={['ADMIN']}>
            <AdminReportes />
          </ProtectedRoute>
        ),
      },

      // Usuario/Alumno + Padres
      {
        path: "clases",
        element: (
          <ProtectedRoute allow={['USER', 'PARENT', 'TEACHER']}>
            <Clases />
          </ProtectedRoute>
        ),
      },
      {
        path: "tareas",
        element: (
          <ProtectedRoute allow={['USER', 'PARENT']}>
            <Tareas />
          </ProtectedRoute>
        ),
      },
      {
        path: "progreso",
        element: (
          <ProtectedRoute allow={['USER', 'PARENT']}>
            <Progreso />
          </ProtectedRoute>
        ),
      },
      {
        path: "hijos",
        element: (
          <ProtectedRoute allow={['PARENT']}>
            <Hijos />
          </ProtectedRoute>
        ),
      },

      // Profesor
      {
        path: "profesor/cursos",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <ProfCursos />
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/calificaciones",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <ProfCalif />
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/asistencia",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <ProfAsist />
          </ProtectedRoute>
        ),
      },

      // Enterprise
      {
        path: "enterprise",
        element: (
          <ProtectedRoute allow={['ENTERPRISE']}>
            <EntDash />
          </ProtectedRoute>
        ),
      },
      {
        path: "enterprise/contratos",
        element: (
          <ProtectedRoute allow={['ENTERPRISE']}>
            <EntContr />
          </ProtectedRoute>
        ),
      },
      {
        path: "enterprise/reportes",
        element: (
          <ProtectedRoute allow={['ENTERPRISE']}>
            <EntRep />
          </ProtectedRoute>
        ),
      },

      // 404
      { path: "404", element: <NotFound /> },
    ],
  },
  // Captura todas las rutas no encontradas
  { path: "*", element: <Navigate to="/404" replace /> },
]);