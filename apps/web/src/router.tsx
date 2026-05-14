import { Suspense } from "react";
import type { ReactNode } from "react";
import { createBrowserRouter, Navigate, Outlet, useParams } from "react-router-dom";
import { ProtectedRoute } from "./routing/ProtectedRoute";
import RootLayout from "./layouts/RootLayout";
import GuestLayout from "./layouts/GuestLayout";
import AlumnoLayout from "./layouts/AlumnoLayout";
import StaffLayout from "./layouts/StaffLayout";
import RoleLayout from "./layouts/RoleLayout";
import { lazyWithRetry } from "./lib/lazyWithRetry";
import { RouteErrorBoundary } from "./components/RouteErrorBoundary";

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

const HomePage            = lazyWithRetry(() => import("./pages/Home"));
const Pricing             = lazyWithRetry(() => import("./pages/Pricing"));
const Contact             = lazyWithRetry(() => import("./pages/Contact"));
const Explorar            = lazyWithRetry(() => import("./pages/Explorar"));
const Metodologia         = lazyWithRetry(() => import("./pages/metodologia"));
const MenuAlumno          = lazyWithRetry(() => import("./pages/menu-alumno"));
const Clases              = lazyWithRetry(() => import("./pages/aula"));
const MisClases           = lazyWithRetry(() => import("./pages/MisClases"));
const BookEditorPage      = lazyWithRetry(() => import("./bookEditor/BookEditorPage"));
const BlockEditorPage     = lazyWithRetry(() => import("./blocks/v2/BlockEditorPage"));
const ProfesorAulas       = lazyWithRetry(() => import("./pages/ProfesorAulas"));
const ProfesorConfiguracion = lazyWithRetry(() => import("./pages/ProfesorConfiguracion"));
const ProfesorEstadisticas  = lazyWithRetry(() => import("./pages/ProfesorEstadisticas"));
const ProfesorEvaluaciones  = lazyWithRetry(() => import("./pages/ProfesorEvaluaciones"));
const ProfesorMateriales    = lazyWithRetry(() => import("./pages/ProfesorMateriales"));
const ModulosList          = lazyWithRetry(() => import("./pages/modulos/ModulosList"));
const ModuloDetail         = lazyWithRetry(() => import("./pages/modulos/ModuloDetail"));
const ModuloEditor         = lazyWithRetry(() => import("./pages/modulos/ModuloEditor"));
const ReproductorModulos   = lazyWithRetry(() => import("./pages/modulos/ReproductorModulos"));
const ProfesorEncuestas     = lazyWithRetry(() => import("./pages/ProfesorEncuestas"));
const ProfesorCursoNuevo    = lazyWithRetry(() => import("./pages/ProfesorCursoNuevo"));
const HijosProgreso         = lazyWithRetry(() => import("./pages/HijosProgreso"));
const ProfesorReportes      = lazyWithRetry(() => import("./pages/ProfesorReportes"));
const AlumnoEncuestas       = lazyWithRetry(() => import("./pages/AlumnoEncuestas"));
const QuizAttempt           = lazyWithRetry(() => import("./pages/quizzes/QuizAttempt"));
const ProfesorCalendario    = lazyWithRetry(() => import("./pages/ProfesorCalendario"));

// Ya eran lazy — mantener igual
const LaboratorioWeb3    = lazyWithRetry(() => import("./pages/LaboratorioWeb3"));
const EditorCuestionarios = lazyWithRetry(() => import("./pages/EditorCuestionarios"));
const AdminGeneradores    = lazyWithRetry(() => import("./pages/AdminGeneradores"));

// Resto de páginas → lazy
const HijosAgregar             = lazyWithRetry(() => import("./pages/HijosAgregar"));
const Admin                    = lazyWithRetry(() => import("./pages/Admin"));
const AdminUsuarios             = lazyWithRetry(() => import("./pages/AdminUsuarios"));
const AdminCursos               = lazyWithRetry(() => import("./pages/AdminCursos"));
const AdminMaterias             = lazyWithRetry(() => import("./pages/AdminMaterias"));
const AdminModeracion           = lazyWithRetry(() => import("./pages/AdminModeracion"));
const AdminReportesGlobal       = lazyWithRetry(() => import("./pages/AdminReportesGlobal"));
const Perfil                    = lazyWithRetry(() => import("./pages/Perfil"));
const Tareas                    = lazyWithRetry(() => import("./pages/Tareas"));
const Progreso                  = lazyWithRetry(() => import("./pages/Progreso"));
const ProfesorCursos            = lazyWithRetry(() => import("./pages/ProfesorCursos"));
const ProfesorCalificaciones    = lazyWithRetry(() => import("./pages/ProfesorCalificaciones"));
const ProfesorAsistencia        = lazyWithRetry(() => import("./pages/ProfesorAsistencia"));
const EnterpriseDashboard       = lazyWithRetry(() => import("./pages/EnterpriseDashboard"));
const EnterpriseReportes        = lazyWithRetry(() => import("./pages/EnterpriseReportes"));
const EnterpriseAulas           = lazyWithRetry(() => import("./pages/EnterpriseAulas"));
const EnterpriseMiembros        = lazyWithRetry(() => import("./pages/EnterpriseMiembros"));
const EnterpriseModulos         = lazyWithRetry(() => import("./pages/EnterpriseModulos"));
const MenuProfesor              = lazyWithRetry(() => import("./pages/MenuProfesor"));
const ProfesorAulaConfiguracion = lazyWithRetry(() => import("./pages/ProfesorAulaConfiguracion"));
const Terminos                  = lazyWithRetry(() => import("./pages/Terminos"));
const Privacidad                = lazyWithRetry(() => import("./pages/Privacidad"));
const GuestOnboarding           = lazyWithRetry(() => import("./pages/GuestOnboarding"));
const Gobernanza                = lazyWithRetry(() => import("./pages/Gobernanza"));
const GobernanzaPropuesta       = lazyWithRetry(() => import("./pages/GobernanzaPropuesta"));
const GobernanzaNuevaPropuesta  = lazyWithRetry(() => import("./pages/GobernanzaNuevaPropuesta"));
const Mensajeria                = lazyWithRetry(() => import("./pages/Mensajeria"));
const PerfilPublico             = lazyWithRetry(() => import("./pages/PerfilPublico"));
const Economia                  = lazyWithRetry(() => import("./pages/Economia"));
const TiendaTemas               = lazyWithRetry(() => import("./pages/TiendaTemas"));
const OnboardingTema            = lazyWithRetry(() => import("./pages/OnboardingTema"));

// ── Helpers ────────────────────────────────────────────────────────────────────

const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center">
    <p className="text-sm text-slate-400 animate-pulse">Cargando...</p>
  </div>
);

const withSuspense = (element: ReactNode) => (
  <RouteErrorBoundary>
    <Suspense fallback={<PageLoader />}>{element}</Suspense>
  </RouteErrorBoundary>
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
      // ── Rutas públicas (GUEST) ─────────────────────────────────────────────
      {
        element: <GuestLayout />,
        children: [
          { index: true, element: withSuspense(<HomePage />) },

          { path: "explorar",   element: withSuspense(<Explorar />) },
          { path: "precios",    element: withSuspense(<Pricing />) },
          { path: "pricing",    element: <Navigate to="/precios" replace /> },
          { path: "login",      element: <Login /> },
          { path: "register",   element: <Register /> },
          { path: "recuperar",  element: <RecuperarContrasena /> },

          { path: "landing",          element: <Landing /> },
          { path: "contact",          element: withSuspense(<Contact />) },
          { path: "terminos",         element: withSuspense(<Terminos />) },
          { path: "privacidad",       element: withSuspense(<Privacidad />) },
          { path: "metodologia",      element: withSuspense(<Metodologia />) },
          { path: "laboratorio-web3", element: withSuspense(<LaboratorioWeb3 />) },
          { path: "onboarding-guest",    element: withSuspense(<GuestOnboarding />) },
          { path: "onboarding/tema",     element: withSuspense(<OnboardingTema />) },
          { path: "u/:username",         element: withSuspense(<PerfilPublico />) },

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

          { path: "404", element: <NotFound /> },
        ],
      },

      // ── Layout Alumno (USER) ───────────────────────────────────────────────
      {
        element: (
          <ProtectedRoute allow={['USER']}>
            <AlumnoLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: 'alumno',
            element: withSuspense(<MenuAlumno />),
          },
          {
            path: 'clases',
            element: withSuspense(<MisClases />),
          },
          {
            path: 'clases/:aulaId',
            element: withSuspense(<Clases />),
          },
          {
            path: 'tareas',
            element: withSuspense(<Tareas />),
          },
          {
            path: 'encuestas',
            element: withSuspense(<AlumnoEncuestas />),
          },
          {
            path: 'progreso',
            element: withSuspense(<Progreso />),
          },
          {
            path: 'economia',
            element: withSuspense(<Economia />),
          },
          {
            path: 'tienda-temas',
            element: withSuspense(<TiendaTemas />),
          },
          {
            path: 'calendario',
            element: withSuspense(<ProfesorCalendario />),
          },
        ],
      },

      // ── Layout Staff (TEACHER, DIRECTIVO, ADMIN) ───────────────────────────
      {
        element: (
          <ProtectedRoute allow={['TEACHER', 'DIRECTIVO', 'ADMIN']}>
            <StaffLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: 'profesor',
            element: (
              <ProtectedRoute allow={['TEACHER']}>
                {withSuspense(<MenuProfesor />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'profesor/cursos',
            element: (
              <ProtectedRoute allow={['TEACHER']}>
                {withSuspense(<ProfesorCursos />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'profesor/cursos/nuevo',
            element: (
              <ProtectedRoute allow={['TEACHER']}>
                {withSuspense(<ProfesorCursoNuevo />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'profesor/aulas',
            element: (
              <ProtectedRoute allow={['TEACHER']}>
                {withSuspense(<ProfesorAulas />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'profesor/aulas/:aulaId',
            element: (
              <ProtectedRoute allow={['TEACHER']}>
                {withSuspense(<ProfesorAulaConfiguracion />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'profesor/evaluaciones',
            element: (
              <ProtectedRoute allow={['TEACHER']}>
                {withSuspense(<ProfesorEvaluaciones />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'profesor/encuestas',
            element: (
              <ProtectedRoute allow={['TEACHER']}>
                {withSuspense(<ProfesorEncuestas />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'profesor/asistencia',
            element: (
              <ProtectedRoute allow={['TEACHER']}>
                {withSuspense(<ProfesorAsistencia />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'profesor/calificaciones',
            element: (
              <ProtectedRoute allow={['TEACHER']}>
                {withSuspense(<ProfesorCalificaciones />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'profesor/materiales',
            element: (
              <ProtectedRoute allow={['TEACHER']}>
                {withSuspense(<ProfesorMateriales />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'profesor/estadisticas',
            element: (
              <ProtectedRoute allow={['TEACHER']}>
                {withSuspense(<ProfesorEstadisticas />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'profesor/configuracion',
            element: (
              <ProtectedRoute allow={['TEACHER']}>
                {withSuspense(<ProfesorConfiguracion />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'profesor/editor-cuestionarios',
            element: (
              <ProtectedRoute allow={['TEACHER']}>
                {withSuspense(<EditorCuestionarios />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'profesor/calendario',
            element: (
              <ProtectedRoute allow={['TEACHER', 'DIRECTIVO', 'ADMIN']}>
                {withSuspense(<ProfesorCalendario />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'profesor/reportes',
            element: (
              <ProtectedRoute allow={['TEACHER']}>
                {withSuspense(<ProfesorReportes />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'admin',
            element: (
              <ProtectedRoute allow={['ADMIN']}>
                {withSuspense(<Admin />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'admin/usuarios',
            element: (
              <ProtectedRoute allow={['ADMIN']}>
                {withSuspense(<AdminUsuarios />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'admin/cursos',
            element: (
              <ProtectedRoute allow={['ADMIN']}>
                {withSuspense(<AdminCursos />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'admin/materias',
            element: (
              <ProtectedRoute allow={['ADMIN']}>
                {withSuspense(<AdminMaterias />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'admin/moderacion',
            element: (
              <ProtectedRoute allow={['ADMIN']}>
                {withSuspense(<AdminModeracion />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'admin/reportes',
            element: (
              <ProtectedRoute allow={['ADMIN']}>
                {withSuspense(<AdminReportesGlobal />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'admin/generadores',
            element: (
              <ProtectedRoute allow={['ADMIN']}>
                {withSuspense(<AdminGeneradores />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'enterprise',
            element: (
              <ProtectedRoute allow={['DIRECTIVO']}>
                {withSuspense(<EnterpriseDashboard />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'enterprise/reportes',
            element: (
              <ProtectedRoute allow={['DIRECTIVO']}>
                {withSuspense(<EnterpriseReportes />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'enterprise/aulas',
            element: (
              <ProtectedRoute allow={['DIRECTIVO']}>
                {withSuspense(<EnterpriseAulas />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'enterprise/miembros',
            element: (
              <ProtectedRoute allow={['DIRECTIVO']}>
                {withSuspense(<EnterpriseMiembros />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'enterprise/modulos',
            element: (
              <ProtectedRoute allow={['DIRECTIVO']}>
                {withSuspense(<EnterpriseModulos />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'enterprise/calendario',
            element: (
              <ProtectedRoute allow={['DIRECTIVO', 'ADMIN']}>
                {withSuspense(<ProfesorCalendario />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'gobernanza',
            element: (
              <ProtectedRoute allow={['ADMIN', 'DIRECTIVO', 'TEACHER']}>
                {withSuspense(<Gobernanza />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'gobernanza/propuestas/nueva',
            element: (
              <ProtectedRoute allow={['ADMIN', 'DIRECTIVO', 'TEACHER']}>
                {withSuspense(<GobernanzaNuevaPropuesta />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'gobernanza/propuestas/:id',
            element: (
              <ProtectedRoute allow={['ADMIN', 'DIRECTIVO', 'TEACHER']}>
                {withSuspense(<GobernanzaPropuesta />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'modulos',
            element: (
              <ProtectedRoute allow={['TEACHER', 'DIRECTIVO', 'ADMIN']}>
                {withSuspense(<ModulosList />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'modulos/crear',
            element: (
              <ProtectedRoute allow={['TEACHER', 'ADMIN']}>
                {withSuspense(<ModuloEditor />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'modulos/:id',
            element: (
              <ProtectedRoute allow={['TEACHER', 'DIRECTIVO', 'ADMIN']}>
                {withSuspense(<ModuloDetail />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'modulos/:id/editar',
            element: (
              <ProtectedRoute allow={['TEACHER', 'ADMIN']}>
                {withSuspense(<ModuloEditor />)}
              </ProtectedRoute>
            ),
          },
        ],
      },

      // ── Rutas compartidas con layout por rol ──────────────────────────────────
      {
        element: (
          <ProtectedRoute allow={['USER', 'PARENT', 'TEACHER', 'DIRECTIVO', 'ADMIN']}>
            <RoleLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: 'mensajes',
            element: withSuspense(<Mensajeria />),
          },
          {
            path: 'perfil',
            element: withSuspense(<Perfil />),
          },
          {
            path: 'menualumno',
            element: (
              <ProtectedRoute allow={['USER', 'PARENT', 'ADMIN']}>
                {withSuspense(<MenuAlumno />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'hijos',
            element: (
              <ProtectedRoute allow={['PARENT']}>
                {withSuspense(<HijosProgreso />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'hijos/agregar',
            element: (
              <ProtectedRoute allow={['PARENT']}>
                {withSuspense(<HijosAgregar />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'modulos',
            element: (
              <ProtectedRoute allow={['USER', 'PARENT', 'TEACHER', 'DIRECTIVO', 'ADMIN']}>
                {withSuspense(<ModulosList />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'modulos/crear',
            element: (
              <ProtectedRoute allow={['TEACHER', 'ADMIN']}>
                {withSuspense(<ModuloEditor />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'modulos/:id',
            element: (
              <ProtectedRoute allow={['USER', 'PARENT', 'TEACHER', 'DIRECTIVO', 'ADMIN']}>
                {withSuspense(<ModuloDetail />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'modulos/:id/editar',
            element: (
              <ProtectedRoute allow={['TEACHER', 'ADMIN']}>
                {withSuspense(<ModuloEditor />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'modulos/:id/jugar',
            element: (
              <ProtectedRoute allow={['USER', 'PARENT', 'TEACHER']}>
                {withSuspense(<ModuloDetail />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'reproductor',
            element: (
              <ProtectedRoute allow={['USER', 'PARENT', 'TEACHER', 'ADMIN', 'DIRECTIVO']}>
                {withSuspense(<ReproductorModulos />)}
              </ProtectedRoute>
            ),
          },
          {
            path: 'quiz/attempt/:attemptId',
            element: (
              <ProtectedRoute allow={['USER', 'PARENT', 'TEACHER', 'ADMIN']}>
                {withSuspense(<QuizAttempt />)}
              </ProtectedRoute>
            ),
          },
        ],
      },

      // ── Editors (protegidos, sin layout de shell) ────────────────────────────
      {
        element: (
          <ProtectedRoute allow={['USER', 'TEACHER', 'ADMIN', 'DIRECTIVO']}>
            <Outlet />
          </ProtectedRoute>
        ),
        children: [
          { path: "editor",             element: withSuspense(<BookEditorPage />) },
          { path: "editor/:id",         element: withSuspense(<BookEditorPage />) },
          { path: "bloques/editor",     element: withSuspense(<BlockEditorPage />) },
          { path: "bloques/editor/:id", element: withSuspense(<BlockEditorPage />) },
        ],
      },

      // ── Redirects (sin UI propia) ──────────────────────────────────────────
      { path: 'admin/panel', element: <Navigate to="/admin" replace /> },
      {
        path: 'profesor/editar-modulo/:id',
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <ModuloEditRedirect />
          </ProtectedRoute>
        ),
      },
      { path: 'profesor/calendario/detalle', element: <Navigate to="/profesor/calendario" replace /> },
      { path: 'profesor/mensajes',           element: <Navigate to="/mensajes" replace /> },
      {
        path: 'profesor/crear-modulo',
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <Navigate to="/modulos/crear" replace />
          </ProtectedRoute>
        ),
      },
      {
        path: 'profesor/modulos',
        element: (
          <ProtectedRoute allow={['TEACHER']}>
            <Navigate to="/modulos" replace />
          </ProtectedRoute>
        ),
      },
    ],
  },
  // Captura todas las rutas no encontradas
  { path: "*", element: <Navigate to="/404" replace /> },
]);
