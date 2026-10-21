/**
 * K8 — la familia vincula a su hijo con el CÓDIGO DE INVITACIÓN que le da la escuela (uno por alumno, de un solo
 * uso, vence a los 7 días). Espejo achicado de `apps/web/src/pages/HijosAgregar.tsx`. Ya no se vincula por nombre de usuario.
 */
import { useState } from "react";
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { ApiError, apiPost } from "../../src/api/client";
import { colors } from "../../src/theme/tokens";

function mensajeDe(err: unknown): string {
  if (err instanceof ApiError) {
    try {
      return JSON.parse(err.message)?.error ?? err.message;
    } catch {
      return err.message;
    }
  }
  return err instanceof Error ? err.message : "No se pudo canjear el código.";
}

export default function PadreVincular() {
  const [codigo, setCodigo] = useState("");
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState(false);

  const enviar = async () => {
    setOk(false);
    if (codigo.replace(/[^a-zA-Z0-9]/g, "").length < 10) {
      setError("El código tiene 10 letras y números (por ejemplo ABCDE-FGHJK).");
      return;
    }
    setGuardando(true);
    setError(null);
    try {
      await apiPost<{ ok: boolean }>("/api/hijos/canjear", { codigo });
      setOk(true);
      setCodigo("");
    } catch (e) {
      setError(mensajeDe(e));
    } finally {
      setGuardando(false);
    }
  };

  return (
    <View className="flex-1 bg-vb-bg px-4 pt-4 gap-4">
      <Text className="text-2xl font-bold text-vb-text">Agregar hijo</Text>
      <Text className="text-sm text-vb-muted">
        Pedile a la escuela el código de invitación de tu hijo o hija. Cada código sirve para un solo alumno, se usa una
        vez y vence a los 7 días.
      </Text>
      <TextInput
        value={codigo}
        onChangeText={setCodigo}
        placeholder="ABCDE-FGHJK"
        autoCapitalize="characters"
        autoCorrect={false}
        className="bg-vb-surface border border-vb-border rounded-lg px-3 py-3 text-vb-text"
        placeholderTextColor={colors.muted}
      />
      {error ? <Text className="text-sm text-vb-danger">{error}</Text> : null}
      {ok ? <Text className="text-sm text-vb-success">Listo: tu hijo ya está vinculado.</Text> : null}
      <TouchableOpacity
        disabled={guardando}
        onPress={enviar}
        className="bg-vb-primary rounded-lg py-3 items-center"
      >
        {guardando ? <ActivityIndicator color="#fff" /> : <Text className="text-white font-semibold text-base">Vincular</Text>}
      </TouchableOpacity>
      {ok ? (
        <TouchableOpacity onPress={() => router.replace("/(padre)")} className="py-2 items-center">
          <Text className="text-vb-primary">Ver mis hijos</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
