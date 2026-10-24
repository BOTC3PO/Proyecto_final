import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useI18n } from "../i18n/I18nContext";

export default function Contact() {
  const { t } = useI18n();
  useDocumentMeta({
    title: t("contact.contactoVirtualBook"),
    description: t("contact.nuestroEquipoRespondeConsultasSobre2"),
  });
  return (
    <div className="flex-1 bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <section className="rounded-2xl bg-white shadow-lg p-8 sm:p-10 space-y-8">
          <header className="space-y-2 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">{t("nav.contacto")}</p>
            <h1 className="text-3xl font-semibold text-gray-900">{t("contact.estamosParaAyudarte")}</h1>
            <p className="text-gray-600">{t("contact.nuestroEquipoRespondeConsultasSobre")}</p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <form className="space-y-6" action="#" method="post">
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="user">{t("contact.correoElectronicoOUsuarioPublico")}</label>
                <input
                  id="user"
                  name="user"
                  type="text"
                  placeholder={t("contact.soporteEducreaComOColegioandino")}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="msg">{t("contact.mensaje")}</label>
                <textarea
                  id="msg"
                  name="msg"
                  rows={5}
                  placeholder={t("contact.contanosComoPodemosAyudarteY")}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 py-2.5 font-semibold text-white shadow hover:bg-blue-700"
              >{t("contact.enviarMensaje")}</button>
            </form>

            <aside className="space-y-6 rounded-xl border border-blue-100 bg-blue-50/40 p-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{t("contact.canalesDirectos")}</h2>
                <p className="mt-2 text-sm text-gray-600">{t("contact.horarioDeAtencionLunesA")}</p>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <span className="font-semibold">{t("contact.soporte")}</span>{t("contact.soporteEducreaCom")}</p>
                <p>
                  <span className="font-semibold">{t("contact.ventas")}</span>{t("contact.alianzasEducreaCom")}</p>
                <p>
                  <span className="font-semibold">{t("contact.telefono")}</span> +54 11 4588 2200
                </p>
                <p>
                  <span className="font-semibold">{t("contact.oficina")}</span>{t("contact.avCorrientes1234CabaArgentina")}</p>
              </div>
              <div className="rounded-lg bg-white p-4 text-sm text-gray-600 shadow-sm">{t("contact.tambienPodesEscribirnosDesdeEl")}</div>
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
}
