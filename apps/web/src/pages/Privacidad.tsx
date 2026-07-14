import { useI18n } from "../i18n/I18nContext";
export default function Privacidad() {
  const { t } = useI18n();
  return (
    <main className="flex-1 bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <section className="rounded-2xl bg-white shadow-lg p-8 sm:p-10 space-y-4">
          <h1 className="text-2xl font-semibold text-gray-900 text-center">{t("privacidad.politicaDePrivacidad")}</h1>
          <p className="text-gray-600">{t("privacidad.protegemosLaInformacionPersonalCon")}</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>{t("privacidad.recopilamosSoloLosDatosNecesarios")}</li>
            <li>{t("privacidad.implementamosMedidasDeSeguridadPara")}</li>
            <li>{t("privacidad.podesSolicitarActualizacionesOEliminacion")}</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
