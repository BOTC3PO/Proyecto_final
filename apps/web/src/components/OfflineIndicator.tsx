import { useEffect, useState } from "react";
import { useI18n } from "../i18n/I18nContext";

export function OfflineIndicator() {
  const { t } = useI18n();
  const [offline, setOffline] = useState(!navigator.onLine);
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    const handleOffline = () => setOffline(true);
    const handleOnline = () => {
      setOffline(false);
      setShowReconnected(true);
      setTimeout(() => setShowReconnected(false), 3000);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  if (!offline && !showReconnected) return null;

  return (
    <div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg transition-all ${
        offline ? "bg-red-600 text-white" : "bg-emerald-600 text-white"
      }`}
    >
      {offline ? t("common.sinConexion") : t("common.conexionRestaurada")}
    </div>
  );
}
