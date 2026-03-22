import { createBrowserRouter, Navigate, useParams } from "react-router-dom";
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
import RecuperarContrasena from "./pages/RecuperarContrasena";
import Explorar from "./pages/Explorar";
import Metodologia from "./pages/metodologia";
import MenuAlumno from "./pages/menu-alumno";
import Clases from "./pages/aula";
import BookEditorPage from "./bookEditor/BookEditorPage";
import BlockEditorPage from "./blocks/v2/BlockEditorPage";
import CrearModulo from "./pages/crearModulo";
import EditorCuestionarios from "./pages/EditorCuestionarios";
import EditarModulo from "./pages/editarModulo";
import JugarModulo from "./pages/jugarModulo";
import ProfesorAulas from "./pages/ProfesorAulas";
import Calendario from "./pages/Calendario";
import ProfesorConfiguracion from "./pages/ProfesorConfiguracion";
import ProfesorEstadisticas from "./pages/ProfesorEstadisticas";
import ProfesorEvaluaciones from "./pages/ProfesorEvaluaciones";
import ProfesorMateriales from "./pages/ProfesorMateriales";
import ProfesorMensajes from "./pages/ProfesorMensajes";
import ModulosList from "./pages/modulos/ModulosList";
import ModuloDetail from "./pages/modulos/ModuloDetail";
import ReproductorModulos from "./pages/modulos/ReproductorModulos";
import ProfesorEncuestas from "./pages/ProfesorEncuestas";
import ProfesorCursoNuevo from "./pages/ProfesorCursoNuevo";
import HijosProgreso from "./pages/HijosProgreso";
import ProfesorReportes from "./pages/ProfesorReportes";
import AlumnoEncuestas from "./pages/AlumnoEncuestas";
import QuizAttempt from "./pages/quizzes/QuizAttempt";
import LaboratorioWeb3 from "./pages/LaboratorioWeb3";
import ProfesorCalendario from "./pages/ProfesorCalendario";
import HijosAgregar from "./pages/HijosAgregar";
import AdminPanel from "./pages/adminPanel";
import Admin from "./pages/Admin";
import AdminUsuarios from "./pages/AdminUsuarios";
import AdminCursos from "./pages/AdminCursos";
import AdminMaterias from "./pages/AdminMaterias";
import AdminModeracion from "./pages/AdminModeracion";
import AdminReportesGlobal from "./pages/AdminReportesGlobal";
import Perfil from "./pages/Perfil";
import Tareas from "./pages/Tareas";
import Progreso from "./pages/Progreso";
import ProfesorCursos from "./pages/ProfesorCursos";
import ProfesorCalificaciones from "./pages/ProfesorCalificaciones";
import ProfesorAsistencia from "./pages/ProfesorAsistencia";
import EnterpriseDashboard from "./pages/EnterpriseDashboard";
import EnterpriseContratos from "./pages/EnterpriseContratos";
import EnterpriseReportes from "./pages/EnterpriseReportes";
import EnterpriseAulas from "./pages/EnterpriseAulas";
import EnterpriseMiembros from "./pages/EnterpriseMiembros";
import EnterpriseModulos from "./pages/EnterpriseModulos";
import EnterpriseMensajes from "./pages/EnterpriseMensajes";
import MenuProfesor from "./pages/MenuProfesor";
import ProfesorAulaConfiguracion from "./pages/ProfesorAulaConfiguracion";
import Terminos from "./pages/Terminos";
import Privacidad from "./pages/Privacidad";
import DiccionarioTest from "./pages/DiccionarioTest";
import GuestOnboarding from "./pages/GuestOnboarding";
import GeografiaMapaSelector from "./pages/GeografiaMapaSelector";
import MapaEditorPage from "./pages/MapaEditorPage";
import Gobernanza from "./pages/Gobernanza";
import GobernanzaPropuesta from "./pages/GobernanzaPropuesta";
import GobernanzaNuevaPropuesta from "./pages/GobernanzaNuevaPropuesta";
import { HerramientasEducativas, HerramientasEstadistica, HerramientasCienciasSociales, HerramientasFilosofia, HerramientasArte, HerramientasBiologia, HerramientasMusica, HerramientasPolitica, HerramientasCivica, HerramientasAmbiental, HerramientasInformatica, HerramientasNaturales, HerramientasCocina, HerramientasVidaPractica } from "./stubs/herramientas";




const ModuloEditRedirect = () => {
  const { id } = useParams();
  return <Navigate to={id ? `/modulos/${id}/editar` : "/modulos"} replace />;
};


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // Rutas públicas (GUEST)
      { index: true, element: <HomePage /> },

      { path: "explorar", element: <Explorar /> },
      { path: "precios", element: <Pricing /> },
      { path: "pricing", element: <Navigate to="/precios" replace /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "recuperar", element: <RecuperarContrasena /> },
      
      
      // Rutas adicionales que tenías en GuestLayout
      { path: "about", element: <About /> },
      { path: "landing", element: <Landing /> },
      { path: "contact", element: <Contact /> },
      { path: "terminos", element: <Terminos /> },
      { path: "privacidad", element: <Privacidad /> },
      { path: "diccionarios-test", element: <DiccionarioTest /> },
      { path: "metodologia", element: <Metodologia /> },
      { path: "laboratorio-web3", element: <LaboratorioWeb3 /> },
      { path: "editor", element: <BookEditorPage /> },
      { path: "editor/:id", element: <BookEditorPage /> },
      { path: "bloques/editor", element: <BlockEditorPage /> },
      { path: "bloques/editor/:id", element: <BlockEditorPage /> },
      { path: "onboarding-guest", element: <GuestOnboarding /> },
      { path: "geografia/mapa", element: <GeografiaMapaSelector /> },
      { path: "herramientas/mapa-editor", element: <MapaEditorPage /> },

      // Herramientas Educativas (public)
      { path: "herramientas", element: <HerramientasEducativas /> },
      { path: "herramientas/estadistica", element: <HerramientasEstadistica /> },
      { path: "herramientas/ciencias-sociales", element: <HerramientasCienciasSociales /> },
      { path: "herramientas/filosofia", element: <HerramientasFilosofia /> },
      { path: "herramientas/arte", element: <HerramientasArte /> },
      { path: "herramientas/biologia", element: <HerramientasBiologia /> },
      { path: "herramientas/musica", element: <HerramientasMusica /> },
      { path: "herramientas/politica", element: <HerramientasPolitica /> },
      { path: "herramientas/civica", element: <HerramientasCivica /> },
      { path: "herramientas/ambiental", element: <HerramientasAmbiental /> },
      { path: "herramientas/informatica", element: <HerramientasInformatica /> },
      { path: "herramientas/naturales", element: <HerramientasNaturales /> },
      { path: "herramientas/cocina", element: <HerramientasCocina /> },
      { path: "herramientas/vida-practica", element: <HerramientasVidaPractica /> },

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
        path: "admin/materias",
        element: (
          <ProtectedRoute allow={['ADMIN']}>
            <AdminMaterias />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/reportes",
        element: (
          <ProtectedRoute allow={['ADMIN']}>
            <AdminReportesGlobal />
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
      {
        path: "admin/moderacion",
        element: (
          <ProtectedRoute allow={['ADMIN']}>
            <AdminModeracion />
          </ProtectedRoute>
        ),
      },

      // Perfil universal (todos los roles autenticados)
      {
        path: "perfil",
        element: (
          <ProtectedRoute allow={['ADMIN', 'USER', 'PARENT', 'TEACHER', 'DIRECTIVO']}>
            <Perfil />
          </ProtectedRoute>
        ),
      },

      // Usuario/Alumno + Padres (ADMIN también puede acceder como usuario)
      {
        path: "clases",
        element: (
          <ProtectedRoute allow={['USER', 'PARENT', 'TEACHER', 'ADMIN']}>
            <Clases />
          </ProtectedRoute>
        ),
      },
      {
        path: "menualumno",
        element: (
          <ProtectedRoute allow={['USER', 'PARENT', 'ADMIN']}>
            <MenuAlumno />
          </ProtectedRoute>
        ),
      },
      {
        path: "alumno",
        element: (
          <ProtectedRoute allow={['USER', 'PARENT', 'ADMIN']}>
            <MenuAlumno />
          </ProtectedRoute>
        ),
      },
      {
        path: "tareas",
        element: (
          <ProtectedRoute allow={['USER', 'PARENT', 'ADMIN']}>
            <Tareas />
          </ProtectedRoute>
        ),
      },
      {
        path: "encuestas",
        element: (
          <ProtectedRoute allow={['USER', 'PARENT', 'ADMIN']}>
            <AlumnoEncuestas />
          </ProtectedRoute>
        ),
      },
      {
        path: "progreso",
        element: (
          <ProtectedRoute allow={['USER', 'PARENT', 'ADMIN']}>
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
        path: "profesor",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <MenuProfesor />
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/cursos",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <ProfesorCursos />
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
            <ProfesorCalificaciones />
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/asistencia",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <ProfesorAsistencia />
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/modulos",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <Navigate to="/modulos" replace />
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
        path: "profesor/aulas/:id/configuracion",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <ProfesorAulaConfiguracion />
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
          <ProtectedRoute allow={['TEACHER']}>
            <Navigate to="/modulos/crear" replace />
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/editor-cuestionarios",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <EditorCuestionarios />
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/editar-modulo/:id",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <ModuloEditRedirect />
          </ProtectedRoute>
        ),
      },
      {
        path: "modulos",
        element: (
          <ProtectedRoute allow={["USER", "PARENT", "TEACHER", "ADMIN", "DIRECTIVO"]}>
            <ModulosList />
          </ProtectedRoute>
        ),
      },
      {
        path: "modulos/crear",
        element: (
          <ProtectedRoute allow={['TEACHER', 'ADMIN']}>
            <CrearModulo />
          </ProtectedRoute>
        ),
      },
      {
        path: "modulos/:id/editar",
        element: (
          <ProtectedRoute allow={['TEACHER', 'ADMIN']}>
            <EditarModulo />
          </ProtectedRoute>
        ),
      },
      {
        path: "modulos/:id",
        element: (
          <ProtectedRoute allow={["USER", "PARENT", "TEACHER", "ADMIN", "DIRECTIVO"]}>
            <ModuloDetail />
          </ProtectedRoute>
        ),
      },
      {
        path: "modulos/:id/jugar",
        element: (
          <ProtectedRoute allow={["USER", "PARENT", "TEACHER"]}>
            <JugarModulo />
          </ProtectedRoute>
        ),
      },
      {
        path: "reproductor",
        element: (
          <ProtectedRoute allow={["USER", "PARENT", "TEACHER", "ADMIN", "DIRECTIVO"]}>
            <ReproductorModulos />
          </ProtectedRoute>
        ),
      },
      {
        path: "quiz/attempt/:attemptId",
        element: (
          <ProtectedRoute allow={["USER", "PARENT", "TEACHER", "ADMIN"]}>
            <QuizAttempt />
          </ProtectedRoute>
        ),
      },

      // Enterprise
      {
        path: "enterprise",
        element: (
          <ProtectedRoute allow={['DIRECTIVO']}>
            <EnterpriseDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "enterprise/contratos",
        element: (
          <ProtectedRoute allow={['DIRECTIVO']}>
            <EnterpriseContratos />
          </ProtectedRoute>
        ),
      },
      {
        path: "enterprise/reportes",
        element: (
          <ProtectedRoute allow={['DIRECTIVO']}>
            <EnterpriseReportes />
          </ProtectedRoute>
        ),
      },
      {
        path: "enterprise/aulas",
        element: (
          <ProtectedRoute allow={['DIRECTIVO']}>
            <EnterpriseAulas />
          </ProtectedRoute>
        ),
      },
      {
        path: "enterprise/miembros",
        element: (
          <ProtectedRoute allow={['DIRECTIVO']}>
            <EnterpriseMiembros />
          </ProtectedRoute>
        ),
      },
      {
        path: "enterprise/modulos",
        element: (
          <ProtectedRoute allow={['DIRECTIVO']}>
            <EnterpriseModulos />
          </ProtectedRoute>
        ),
      },
      {
        path: "enterprise/mensajes",
        element: (
          <ProtectedRoute allow={['DIRECTIVO']}>
            <EnterpriseMensajes />
          </ProtectedRoute>
        ),
      },


      // Gobernanza — solo directivos, docentes y administradores
      {
        path: "gobernanza",
        element: (
          <ProtectedRoute allow={['ADMIN', 'DIRECTIVO', 'TEACHER']}>
            <Gobernanza />
          </ProtectedRoute>
        ),
      },
      {
        path: "gobernanza/propuestas/nueva",
        element: (
          <ProtectedRoute allow={['ADMIN', 'DIRECTIVO', 'TEACHER']}>
            <GobernanzaNuevaPropuesta />
          </ProtectedRoute>
        ),
      },
      {
        path: "gobernanza/propuestas/:id",
        element: (
          <ProtectedRoute allow={['ADMIN', 'DIRECTIVO', 'TEACHER']}>
            <GobernanzaPropuesta />
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
