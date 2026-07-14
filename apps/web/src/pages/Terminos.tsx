import { useI18n } from "../i18n/I18nContext";
export default function Terminos() {
  const { t } = useI18n();
  return (
    <main className="flex-1 bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <section className="rounded-2xl bg-white shadow-lg p-8 sm:p-10 space-y-4">
          <h1 className="text-2xl font-semibold text-gray-900 text-center">{t("terminos.terminosYCondiciones")}</h1>
          <p className="text-gray-600">{t("terminos.revisaLosLineamientosDeUso")}</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>{t("terminos.usoResponsableDelContenidoEducativo")}</li>
            <li>{t("terminos.respetoPorLaPrivacidadY")}</li>
            <li>{t("terminos.compromisoConLaIntegridadAcademica")}</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
