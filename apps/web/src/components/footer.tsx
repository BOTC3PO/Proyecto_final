import { Link } from "react-router-dom";
import { interpolar } from "../i18n/interpolar";
import { useI18n } from "../i18n/I18nContext";
import { esAppSinConexion } from "../lib/sinConexion";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-blue-600 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-6 text-center text-sm space-y-3">
          <p>{interpolar(t("footer.copyright"), { anio: new Date().getFullYear() })}</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link className="hover:underline" to="/terminos">{t("nav.terminos")}</Link>
            <Link className="hover:underline" to="/privacidad">{t("nav.privacidad")}</Link>
            <Link className="hover:underline" to="/contact">{t("nav.contacto")}</Link>
            {!esAppSinConexion && <Link className="hover:underline" to="/descargas">{t("nav.descargas")}</Link>}
          </div>
        </div>
      </div>
    </footer>
  );
}
