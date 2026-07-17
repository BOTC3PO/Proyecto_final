import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/use-auth';
import { usePrimaryRole } from '../auth/use-roles';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useI18n } from "../i18n/I18nContext";

const ROLE_DASHBOARD: Record<string, string> = {
  ADMIN: '/admin',
  USER: '/alumno',
  PARENT: '/alumno',
  TEACHER: '/profesor',
  DIRECTIVO: '/enterprise',
};

export default function HomePage() {
  const { t } = useI18n();
  const { user } = useAuth();
  // MULTIROL-02: el redirect inicial sigue siendo por "rol principal"
  // (mayor jerarquía), igual que antes. Un TEACHER+USER cae en
  // /profesor. El roleLabel POR AULA (con qué rol "actuar" en una
  // vista específica) es Fase 3.
  const primary = usePrimaryRole();
  const navigate = useNavigate();
  useDocumentMeta({
    title: t("home.virtualBookPlataformaEducativaInteractiva"),
    description: t("home.aprendeATuRitmoCon2"),
  });

  useEffect(() => {
    const dashboard = primary ? ROLE_DASHBOARD[primary] : null;
    if (dashboard) {
      navigate(dashboard, { replace: true });
    }
  }, [user, navigate, primary]);

  return (
    <div className="flex-grow">
      <div className="my-12">
        <h2 className="mt-8 mb-3 text-6xl font-bold text-center text-blue-600">{t("home.revolucionaElAprendizaje")}</h2>
        <h3 className="mb-5 text-center text">{t("home.aprendeATuRitmoCon")}</h3>
      </div>

      <div className="flex w-full h-12 mb-8 justify-evenly">
        <Link to="/register" className="flex items-center px-6 py-2 bg-blue-500 rounded hover:bg-blue-600 transition-colors">
          <p className="text-white">{t("home.empiezaComoEstudiante")}</p>
        </Link>
        <Link to="/explorar" className="flex items-center px-6 py-2 bg-gray-400 rounded hover:bg-gray-500 transition-colors">
          <p>{t("home.exploraComoProfesor")}</p>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 p-8 pl-12 mt-16 text-center bg-gray-100 md:grid-cols-4 min-h-64">
        <div className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <p className="mb-2 font-semibold">{t("home.aprendizajePersonalizado")}</p>
          <p className="text-sm text-gray-600">{t("home.losModulosSeAdaptanA")}</p>
        </div>
        <div className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <p className="mb-2 font-semibold">{t("nav.juegosEducativos")}</p>
          <p className="text-sm text-gray-600">{t("home.aprendeJugandoYDivierteteMientras")}</p>
        </div>
        <div className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <p className="mb-2 font-semibold">{t("home.herramientasParaProfesores")}</p>
          <p className="text-sm text-gray-600">{t("home.creaContenidoYMonitoreaEl")}</p>
        </div>
        <div className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <p className="mb-2 font-semibold">{t("home.accesoSeguro")}</p>
          <p className="text-sm text-gray-600">{t("home.protegemosTusDatosYGarantizamos")}</p>
        </div>
      </div>
    </div>
  );
}
