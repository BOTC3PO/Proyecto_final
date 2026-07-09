import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-blue-600 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-6 text-center text-sm space-y-3">
          <p>{t("footer.copyright")}</p>
          <div className="flex justify-center gap-6">
            <Link className="hover:underline" to="/terminos">{t("nav.terminos")}</Link>
            <Link className="hover:underline" to="/privacidad">{t("nav.privacidad")}</Link>
            <Link className="hover:underline" to="/contact">{t("nav.contacto")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
