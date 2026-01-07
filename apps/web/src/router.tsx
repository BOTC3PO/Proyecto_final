import { createBrowserRouter, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./routing/ProtectedRoute";
import RootLayout from "./layouts/RootLayout";

// Páginas existentes
//import Landing from "./pages/Landing";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login  from "./pages/Login";
import Register from "./pages/Register";
import Metodologia from "./pages/metodologia";
import MenuAlumno from "./pages/menu-alumno";
import Clases from "./pages/aula";
import BookEditorPage from "./bookEditor/BookEditorPage";
import GeneradoresTest from "./pages/GeneradoresTest";


import test from "./sys/testmode";

const testmode = test();

// Componentes de páginas simples
import {
  Home,
  Explorar,
  Precios,
  Admin,
  AdminUsuarios,
  AdminCursos,
  AdminReportes,
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
      //home solo funciona para probar los roles 
      
      ...(testmode ? [
        { index: true, element: <Home /> },
        { path: "inicio", element: <HomePage /> }
      ] : [
        { index: true, element: <HomePage /> }
      ]),

      { path: "explorar", element: <Explorar /> },
      { path: "precios", element: <Precios /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      
      
      // Rutas adicionales que tenías en GuestLayout
      { path: "about", element: <About /> },
      { path: "pricing", element: <Pricing /> },
      { path: "contact", element: <Contact /> },
      { path: "metodologia", element: <Metodologia /> },
      {path:"editor",element:<BookEditorPage/>},
      ...(testmode ? [{ path: "generadores", element: <GeneradoresTest /> }] : []),


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
          <ProtectedRoute allow={['USER', 'PARENT', 'TEACHER',"GUEST"]}>
            <Clases />
          </ProtectedRoute>
        ),
      },   
      //delete GUEST
      {
        path: "menualumno",
        element: (
          <ProtectedRoute allow={['USER', 'PARENT',"GUEST" ]}> 
            <MenuAlumno />
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
