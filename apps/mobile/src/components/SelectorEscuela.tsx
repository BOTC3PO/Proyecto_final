/**
 * Selector de escuela activa (PLAN-multirol Fase 2). Una misma cuenta puede estar en varias escuelas con roles
 * distintos (directivo en una, alumno en otra). Cambiar de escuela cambia los roles del token, así que después se
 * vuelve a `/` y el router elige el shell que corresponde. No se muestra si la cuenta tiene una sola escuela y un solo rol.
 */
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { useAuth } from "../auth/AuthContext";
import type { EscuelaDisponible } from "../types/auth";

const ROL_ETIQUETA: Record<string, string> = {
  ADMIN: "Administrador",
  ADMIN_ESCUELA: "Administrador de escuela",
  DIRECTIVO: "Directivo",
  TEACHER: "Docente",
  PARENT: "Familia",
  USER: "Alumno",
};

export function SelectorEscuela() {
  const { user, fetchMisEscuelas, cambiarEscuela } = useAuth();
  const [escuelas, setEscuelas] = useState<EscuelaDisponible[] | null>(null);
  const [cambiando, setCambiando] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetchMisEscuelas()
      .then((items) => active && setEscuelas(items))
      .catch(() => active && setEscuelas([]));
    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.schoolId]);

  if (escuelas === null) return <ActivityIndicator />;
  const variasOpciones = escuelas.length > 1 || escuelas.some((e) => e.roles.length > 1);
  if (!variasOpciones) return null;

  const entrar = async (escuelaId: string, rol?: string) => {
    const clave = `${escuelaId}:${rol ?? ""}`;
    setCambiando(clave);
    setError(null);
    try {
      await cambiarEscuela(escuelaId, rol);
      router.replace("/");
    } catch (e) {
      setError(e instanceof Error ? e.message : "No se pudo cambiar de escuela.");
    } finally {
      setCambiando(null);
    }
  };

  return (
    <View className="gap-3">
      <Text className="text-base font-semibold text-vb-text">Mis escuelas</Text>
      {escuelas.map((e) => {
        const activa = e.escuelaId === user?.schoolId;
        // Si la escuela tiene más de un rol, se ofrece cada uno; si tiene uno solo, un único botón.
        const opciones: (string | undefined)[] = e.roles.length > 1 ? e.roles : [undefined];
        return (
          <View key={e.escuelaId} className="bg-vb-surface border border-vb-border rounded-xl p-3 gap-2">
            <Text className="text-sm font-semibold text-vb-text">
              {e.nombre}
              {activa ? "  ·  activa" : ""}
            </Text>
            {opciones.map((rol) => {
              const clave = `${e.escuelaId}:${rol ?? ""}`;
              const esActual = activa && (rol === undefined || user?.roles?.includes(rol as never));
              return (
                <TouchableOpacity
                  key={clave}
                  disabled={cambiando !== null || (activa && rol === undefined)}
                  onPress={() => entrar(e.escuelaId, rol)}
                  className="border border-vb-border rounded-lg py-2 items-center"
                >
                  {cambiando === clave ? (
                    <ActivityIndicator />
                  ) : (
                    <Text className="text-sm text-vb-primary">
                      {activa && rol === undefined ? "Escuela actual" : `Entrar${rol ? ` como ${ROL_ETIQUETA[rol] ?? rol}` : ""}${esActual && rol ? " (actual)" : ""}`}
                    </Text>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        );
      })}
      {error ? <Text className="text-sm text-vb-danger">{error}</Text> : null}
    </View>
  );
}
