/**
 * PLAN-R Parte 5 — "vista de entregas" que pide el plan. Investigado:
 * no existe ningún endpoint que sirva entregas (el modelo `Entrega` es
 * un blob `{id, json}` sin handler que lo lea — confirmado también en
 * `api/src/routes/estadisticas.ts`, que devuelve `entregas: 0` fijo
 * "hasta tener el modelo"). No hay nada real para mostrar acá todavía;
 * un placeholder honesto es mejor que inventar datos o pegarle a un
 * endpoint que no existe.
 */
import { Text, View } from "react-native";

export default function DocenteEntregas() {
  return (
    <View className="flex-1 bg-vb-bg items-center justify-center px-6">
      <Text className="text-base text-vb-muted text-center">
        Todavía no hay un endpoint de entregas en el backend para consumir acá
        (el modelo existe pero no está implementado). No es un problema de la
        app — falta esa pieza del lado del servidor primero.
      </Text>
    </View>
  );
}
