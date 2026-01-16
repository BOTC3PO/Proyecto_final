import { createBrowserRouter, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./routing/ProtectedRoute";
import RootLayout from "./layouts/RootLayout";

// Páginas existentes
import Landing from "./pages/Landing";
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
import CrearModulo from "./pages/crearModulo";
import EditarModulo from "./pages/editarModulo";
import JugarModulo from "./pages/jugarModulo";
import ProfesorAulas from "./pages/ProfesorAulas";
import Calendario from "./pages/Calendario";
import ProfesorConfiguracion from "./pages/ProfesorConfiguracion";
import ProfesorEstadisticas from "./pages/ProfesorEstadisticas";
import ProfesorEvaluaciones from "./pages/ProfesorEvaluaciones";
import ProfesorMateriales from "./pages/ProfesorMateriales";
import ProfesorMensajes from "./pages/ProfesorMensajes";
import ProfesorModulos from "./pages/ProfesorModulos";
import ProfesorEncuestas from "./pages/ProfesorEncuestas";
import ProfesorCursoNuevo from "./pages/ProfesorCursoNuevo";
import HijosProgreso from "./pages/HijosProgreso";
import ProfesorReportes from "./pages/ProfesorReportes";
import AdminReportes from "./pages/AdminReportes";
import AlumnoEncuestas from "./pages/AlumnoEncuestas";
import LaboratorioWeb3 from "./pages/LaboratorioWeb3";
import ProfesorCalendario from "./pages/ProfesorCalendario";
import HijosAgregar from "./pages/HijosAgregar";
import AdminPanel from "./pages/adminPanel";


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
  Tareas,
  Progreso,
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
      { path: "landing", element: <Landing /> },
      { path: "pricing", element: <Pricing /> },
      { path: "contact", element: <Contact /> },
      { path: "metodologia", element: <Metodologia /> },
      { path: "laboratorio-web3", element: <LaboratorioWeb3 /> },
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
      {
        path: "admin/panel",
        element: (
          <ProtectedRoute allow={['ADMIN']}>
            <AdminPanel />
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
        path: "encuestas",
        element: (
          <ProtectedRoute allow={['USER', 'PARENT']}>
            <AlumnoEncuestas />
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
            <HijosProgreso />
          </ProtectedRoute>
        ),
      },
      {
        path: "hijos/agregar",
        element: (
          <ProtectedRoute allow={['PARENT']}>
            <HijosAgregar />
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
        path: "profesor/cursos/nuevo",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <ProfesorCursoNuevo />
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
      {
        path: "profesor/modulos",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <ProfesorModulos />
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/encuestas",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <ProfesorEncuestas />
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/aulas",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <ProfesorAulas />
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/materiales",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <ProfesorMateriales />
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/evaluaciones",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <ProfesorEvaluaciones />
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/calendario",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <Calendario />
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/calendario/detalle",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <ProfesorCalendario />
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/estadisticas",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <ProfesorEstadisticas />
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/reportes",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <ProfesorReportes />
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/mensajes",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <ProfesorMensajes />
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/configuracion",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <ProfesorConfiguracion />
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/crear-modulo",
        element: (
          <ProtectedRoute allow={['TEACHER','GUEST']}>
            <CrearModulo />
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/editar-modulo/:id",
        element: (
          <ProtectedRoute allow={['TEACHER','GUEST']}>
            <EditarModulo />
          </ProtectedRoute>
        ),
      },
      {
        path: "modulos/:id/jugar",
        element: (
          <ProtectedRoute allow={['USER', 'PARENT', 'TEACHER', 'GUEST']}>
            <JugarModulo />
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
