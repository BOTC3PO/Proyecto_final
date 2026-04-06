import { lazy, Suspense } from "react";
import type { ReactNode } from "react";
import { createBrowserRouter, Navigate, useParams } from "react-router-dom";
import { ProtectedRoute } from "./routing/ProtectedRoute";
import RootLayout from "./layouts/RootLayout";

// Páginas estáticas — necesarias en la carga inicial o muy pequeñas
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import RecuperarContrasena from "./pages/RecuperarContrasena";

// Herramientas educativas (stubs pequeños, mismo módulo)
import {
  HerramientasEducativas,
  HerramientasEstadistica,
  HerramientasCienciasSociales,
  HerramientasFilosofia,
  HerramientasArte,
  HerramientasBiologia,
  HerramientasMusica,
  HerramientasPolitica,
  HerramientasCivica,
  HerramientasAmbiental,
  HerramientasInformatica,
  HerramientasNaturales,
  HerramientasCocina,
  HerramientasVidaPractica,
} from "./stubs/herramientas";

// ── Lazy imports ───────────────────────────────────────────────────────────────

const HomePage            = lazy(() => import("./pages/Home"));
const About               = lazy(() => import("./pages/About"));
const Pricing             = lazy(() => import("./pages/Pricing"));
const Contact             = lazy(() => import("./pages/Contact"));
const Explorar            = lazy(() => import("./pages/Explorar"));
const Metodologia         = lazy(() => import("./pages/metodologia"));
const MenuAlumno          = lazy(() => import("./pages/menu-alumno"));
const Clases              = lazy(() => import("./pages/aula"));
const BookEditorPage      = lazy(() => import("./bookEditor/BookEditorPage"));
const BlockEditorPage     = lazy(() => import("./blocks/v2/BlockEditorPage"));
const ProfesorAulas       = lazy(() => import("./pages/ProfesorAulas"));
const Calendario          = lazy(() => import("./pages/Calendario"));
const ProfesorConfiguracion = lazy(() => import("./pages/ProfesorConfiguracion"));
const ProfesorEstadisticas  = lazy(() => import("./pages/ProfesorEstadisticas"));
const ProfesorEvaluaciones  = lazy(() => import("./pages/ProfesorEvaluaciones"));
const ProfesorMateriales    = lazy(() => import("./pages/ProfesorMateriales"));
const ProfesorMensajes      = lazy(() => import("./pages/ProfesorMensajes"));
const ModulosList           = lazy(() => import("./pages/modulos/ModulosList"));
const ModuloDetail          = lazy(() => import("./pages/modulos/ModuloDetail"));
const ReproductorModulos    = lazy(() => import("./pages/modulos/ReproductorModulos"));
const ProfesorEncuestas     = lazy(() => import("./pages/ProfesorEncuestas"));
const ProfesorCursoNuevo    = lazy(() => import("./pages/ProfesorCursoNuevo"));
const HijosProgreso         = lazy(() => import("./pages/HijosProgreso"));
const ProfesorReportes      = lazy(() => import("./pages/ProfesorReportes"));
const AlumnoEncuestas       = lazy(() => import("./pages/AlumnoEncuestas"));
const QuizAttempt           = lazy(() => import("./pages/quizzes/QuizAttempt"));
const ProfesorCalendario    = lazy(() => import("./pages/ProfesorCalendario"));

// Ya eran lazy — mantener igual
const LaboratorioWeb3    = lazy(() => import("./pages/LaboratorioWeb3"));
const EditorCuestionarios = lazy(() => import("./pages/EditorCuestionarios"));
const AdminGeneradores    = lazy(() => import("./pages/AdminGeneradores"));

// Resto de páginas → lazy
const HijosAgregar             = lazy(() => import("./pages/HijosAgregar"));
const Admin                    = lazy(() => import("./pages/Admin"));
const AdminUsuarios             = lazy(() => import("./pages/AdminUsuarios"));
const AdminCursos               = lazy(() => import("./pages/AdminCursos"));
const AdminMaterias             = lazy(() => import("./pages/AdminMaterias"));
const AdminModeracion           = lazy(() => import("./pages/AdminModeracion"));
const AdminReportesGlobal       = lazy(() => import("./pages/AdminReportesGlobal"));
const Perfil                    = lazy(() => import("./pages/Perfil"));
const Tareas                    = lazy(() => import("./pages/Tareas"));
const Progreso                  = lazy(() => import("./pages/Progreso"));
const ProfesorCursos            = lazy(() => import("./pages/ProfesorCursos"));
const ProfesorCalificaciones    = lazy(() => import("./pages/ProfesorCalificaciones"));
const ProfesorAsistencia        = lazy(() => import("./pages/ProfesorAsistencia"));
const EnterpriseDashboard       = lazy(() => import("./pages/EnterpriseDashboard"));
const EnterpriseReportes        = lazy(() => import("./pages/EnterpriseReportes"));
const EnterpriseAulas           = lazy(() => import("./pages/EnterpriseAulas"));
const EnterpriseMiembros        = lazy(() => import("./pages/EnterpriseMiembros"));
const EnterpriseModulos         = lazy(() => import("./pages/EnterpriseModulos"));
const MenuProfesor              = lazy(() => import("./pages/MenuProfesor"));
const ProfesorAulaConfiguracion = lazy(() => import("./pages/ProfesorAulaConfiguracion"));
const Terminos                  = lazy(() => import("./pages/Terminos"));
const Privacidad                = lazy(() => import("./pages/Privacidad"));
const GuestOnboarding           = lazy(() => import("./pages/GuestOnboarding"));
const Gobernanza                = lazy(() => import("./pages/Gobernanza"));
const GobernanzaPropuesta       = lazy(() => import("./pages/GobernanzaPropuesta"));
const GobernanzaNuevaPropuesta  = lazy(() => import("./pages/GobernanzaNuevaPropuesta"));
const Mensajeria                = lazy(() => import("./pages/Mensajeria"));
const PerfilPublico             = lazy(() => import("./pages/PerfilPublico"));

// ── Helpers ────────────────────────────────────────────────────────────────────

const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center">
    <p className="text-sm text-slate-400 animate-pulse">Cargando...</p>
  </div>
);

const withSuspense = (element: ReactNode) => (
  <Suspense fallback={<PageLoader />}>{element}</Suspense>
);

// ── Redirect helper ────────────────────────────────────────────────────────────

const ModuloEditRedirect = () => {
  const { id } = useParams();
  return <Navigate to={id ? `/modulos/${id}/editar` : "/modulos"} replace />;
};

// ── Router ─────────────────────────────────────────────────────────────────────

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // Rutas públicas (GUEST)
      { index: true, element: withSuspense(<HomePage />) },

      { path: "explorar",   element: withSuspense(<Explorar />) },
      { path: "precios",    element: withSuspense(<Pricing />) },
      { path: "pricing",    element: <Navigate to="/precios" replace /> },
      { path: "login",      element: <Login /> },
      { path: "register",   element: <Register /> },
      { path: "recuperar",  element: <RecuperarContrasena /> },

      { path: "about",         element: withSuspense(<About />) },
      { path: "landing",       element: <Landing /> },
      { path: "contact",       element: withSuspense(<Contact />) },
      { path: "terminos",      element: withSuspense(<Terminos />) },
      { path: "privacidad",    element: withSuspense(<Privacidad />) },
      { path: "metodologia",   element: withSuspense(<Metodologia />) },
      { path: "laboratorio-web3", element: withSuspense(<LaboratorioWeb3 />) },
      { path: "editor",          element: withSuspense(<BookEditorPage />) },
      { path: "editor/:id",      element: withSuspense(<BookEditorPage />) },
      { path: "bloques/editor",      element: withSuspense(<BlockEditorPage />) },
      { path: "bloques/editor/:id",  element: withSuspense(<BlockEditorPage />) },
      { path: "onboarding-guest", element: withSuspense(<GuestOnboarding />) },
      { path: "u/:username",      element: withSuspense(<PerfilPublico />) },

      // Herramientas Educativas (public)
      { path: "herramientas",                    element: <HerramientasEducativas /> },
      { path: "herramientas/estadistica",        element: <HerramientasEstadistica /> },
      { path: "herramientas/ciencias-sociales",  element: <HerramientasCienciasSociales /> },
      { path: "herramientas/filosofia",          element: <HerramientasFilosofia /> },
      { path: "herramientas/arte",               element: <HerramientasArte /> },
      { path: "herramientas/biologia",           element: <HerramientasBiologia /> },
      { path: "herramientas/musica",             element: <HerramientasMusica /> },
      { path: "herramientas/politica",           element: <HerramientasPolitica /> },
      { path: "herramientas/civica",             element: <HerramientasCivica /> },
      { path: "herramientas/ambiental",          element: <HerramientasAmbiental /> },
      { path: "herramientas/informatica",        element: <HerramientasInformatica /> },
      { path: "herramientas/naturales",          element: <HerramientasNaturales /> },
      { path: "herramientas/cocina",             element: <HerramientasCocina /> },
      { path: "herramientas/vida-practica",      element: <HerramientasVidaPractica /> },

      // Admin
      {
        path: "admin",
        element: (
          <ProtectedRoute allow={['ADMIN']}>
            {withSuspense(<Admin />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/usuarios",
        element: (
          <ProtectedRoute allow={['ADMIN']}>
            {withSuspense(<AdminUsuarios />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/cursos",
        element: (
          <ProtectedRoute allow={['ADMIN']}>
            {withSuspense(<AdminCursos />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/materias",
        element: (
          <ProtectedRoute allow={['ADMIN']}>
            {withSuspense(<AdminMaterias />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/reportes",
        element: (
          <ProtectedRoute allow={['ADMIN']}>
            {withSuspense(<AdminReportesGlobal />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/panel",
        element: <Navigate to="/admin" replace />,
      },
      {
        path: "admin/moderacion",
        element: (
          <ProtectedRoute allow={['ADMIN']}>
            {withSuspense(<AdminModeracion />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/generadores",
        element: (
          <ProtectedRoute allow={['ADMIN']}>
            {withSuspense(<AdminGeneradores />)}
          </ProtectedRoute>
        ),
      },

      // Mensajería — todos los roles autenticados
      {
        path: "mensajes",
        element: (
          <ProtectedRoute allow={['ADMIN', 'USER', 'PARENT', 'TEACHER', 'DIRECTIVO']}>
            {withSuspense(<Mensajeria />)}
          </ProtectedRoute>
        ),
      },

      // Perfil universal (todos los roles autenticados)
      {
        path: "perfil",
        element: (
          <ProtectedRoute allow={['ADMIN', 'USER', 'PARENT', 'TEACHER', 'DIRECTIVO']}>
            {withSuspense(<Perfil />)}
          </ProtectedRoute>
        ),
      },

      // Usuario/Alumno + Padres
      {
        path: "clases",
        element: (
          <ProtectedRoute allow={['USER', 'PARENT', 'TEACHER', 'ADMIN']}>
            {withSuspense(<Clases />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "menualumno",
        element: (
          <ProtectedRoute allow={['USER', 'PARENT', 'ADMIN']}>
            {withSuspense(<MenuAlumno />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "alumno",
        element: (
          <ProtectedRoute allow={['USER', 'PARENT', 'ADMIN']}>
            {withSuspense(<MenuAlumno />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "tareas",
        element: (
          <ProtectedRoute allow={['USER', 'PARENT', 'ADMIN']}>
            {withSuspense(<Tareas />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "encuestas",
        element: (
          <ProtectedRoute allow={['USER', 'PARENT', 'ADMIN']}>
            {withSuspense(<AlumnoEncuestas />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "progreso",
        element: (
          <ProtectedRoute allow={['USER', 'PARENT', 'ADMIN']}>
            {withSuspense(<Progreso />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "hijos",
        element: (
          <ProtectedRoute allow={['PARENT']}>
            {withSuspense(<HijosProgreso />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "hijos/agregar",
        element: (
          <ProtectedRoute allow={['PARENT']}>
            {withSuspense(<HijosAgregar />)}
          </ProtectedRoute>
        ),
      },

      // Profesor
      {
        path: "profesor",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            {withSuspense(<MenuProfesor />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/cursos",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            {withSuspense(<ProfesorCursos />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/cursos/nuevo",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            {withSuspense(<ProfesorCursoNuevo />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/calificaciones",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            {withSuspense(<ProfesorCalificaciones />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/asistencia",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            {withSuspense(<ProfesorAsistencia />)}
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
            {withSuspense(<ProfesorEncuestas />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/aulas",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            {withSuspense(<ProfesorAulas />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/aulas/:id/configuracion",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            {withSuspense(<ProfesorAulaConfiguracion />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/materiales",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            {withSuspense(<ProfesorMateriales />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/evaluaciones",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            {withSuspense(<ProfesorEvaluaciones />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/calendario",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            {withSuspense(<Calendario />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/calendario/detalle",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            {withSuspense(<ProfesorCalendario />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/estadisticas",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            {withSuspense(<ProfesorEstadisticas />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/reportes",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            {withSuspense(<ProfesorReportes />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/mensajes",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            {withSuspense(<ProfesorMensajes />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "profesor/configuracion",
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            {withSuspense(<ProfesorConfiguracion />)}
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
            {withSuspense(<EditorCuestionarios />)}
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
            {withSuspense(<ModulosList />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "modulos/crear",
        element: (
          <ProtectedRoute allow={['TEACHER', 'ADMIN']}>
            <Navigate to="/modulos" replace />
          </ProtectedRoute>
        ),
      },
      {
        path: "modulos/:id/editar",
        element: (
          <ProtectedRoute allow={['TEACHER', 'ADMIN']}>
            <Navigate to="/modulos" replace />
          </ProtectedRoute>
        ),
      },
      {
        path: "modulos/:id",
        element: (
          <ProtectedRoute allow={["USER", "PARENT", "TEACHER", "ADMIN", "DIRECTIVO"]}>
            {withSuspense(<ModuloDetail />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "modulos/:id/jugar",
        element: (
          <ProtectedRoute allow={["USER", "PARENT", "TEACHER"]}>
            <Navigate to="/modulos" replace />
          </ProtectedRoute>
        ),
      },
      {
        path: "reproductor",
        element: (
          <ProtectedRoute allow={["USER", "PARENT", "TEACHER", "ADMIN", "DIRECTIVO"]}>
            {withSuspense(<ReproductorModulos />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "quiz/attempt/:attemptId",
        element: (
          <ProtectedRoute allow={["USER", "PARENT", "TEACHER", "ADMIN"]}>
            {withSuspense(<QuizAttempt />)}
          </ProtectedRoute>
        ),
      },

      // Enterprise
      {
        path: "enterprise",
        element: (
          <ProtectedRoute allow={['DIRECTIVO']}>
            {withSuspense(<EnterpriseDashboard />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "enterprise/reportes",
        element: (
          <ProtectedRoute allow={['DIRECTIVO']}>
            {withSuspense(<EnterpriseReportes />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "enterprise/aulas",
        element: (
          <ProtectedRoute allow={['DIRECTIVO']}>
            {withSuspense(<EnterpriseAulas />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "enterprise/miembros",
        element: (
          <ProtectedRoute allow={['DIRECTIVO']}>
            {withSuspense(<EnterpriseMiembros />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "enterprise/modulos",
        element: (
          <ProtectedRoute allow={['DIRECTIVO']}>
            {withSuspense(<EnterpriseModulos />)}
          </ProtectedRoute>
        ),
      },

      // Gobernanza
      {
        path: "gobernanza",
        element: (
          <ProtectedRoute allow={['ADMIN', 'DIRECTIVO', 'TEACHER']}>
            {withSuspense(<Gobernanza />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "gobernanza/propuestas/nueva",
        element: (
          <ProtectedRoute allow={['ADMIN', 'DIRECTIVO', 'TEACHER']}>
            {withSuspense(<GobernanzaNuevaPropuesta />)}
          </ProtectedRoute>
        ),
      },
      {
        path: "gobernanza/propuestas/:id",
        element: (
          <ProtectedRoute allow={['ADMIN', 'DIRECTIVO', 'TEACHER']}>
            {withSuspense(<GobernanzaPropuesta />)}
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
