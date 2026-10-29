import { useState } from "react";
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform } from "react-native";
import { router } from "expo-router";
import { useAuth } from "../src/auth/AuthContext";
import { ApiError, Requiere2faError } from "../src/api/client";
import { colors } from "../src/theme/tokens";

export default function Login() {
  const { login, login2fa } = useAuth();
  const [desafio, setDesafio] = useState<string | null>(null);
  const [codigo, setCodigo] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async () => {
    if (!identifier.trim() || !password) {
      setError("Ingresá tu correo/usuario y contraseña.");
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      if (desafio) await login2fa(desafio, codigo);
      else await login(identifier.trim().toLowerCase(), password);
      router.replace("/(alumno)");
    } catch (e) {
      if (e instanceof Requiere2faError) {
        setDesafio(e.desafio);
        setCodigo("");
        return;
      }
      setError(e instanceof ApiError ? e.message : "No se pudo iniciar sesión.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-vb-bg"
    >
      <View className="flex-1 justify-center px-6">
        <Text className="text-2xl font-bold text-vb-text text-center mb-8">
          Virtual Book
        </Text>

        <View className="bg-vb-surface border border-vb-border rounded-xl p-6 gap-4">
          <View className="gap-1.5">
            <Text className="text-sm font-medium text-vb-text">Correo o usuario</Text>
            <TextInput
              value={identifier}
              onChangeText={setIdentifier}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="username"
              className="border border-vb-border rounded-lg px-3 py-2.5 text-base text-vb-text"
              placeholder="tu@escuela.edu.ar"
              placeholderTextColor={colors.muted}
            />
          </View>

          <View className="gap-1.5">
            <Text className="text-sm font-medium text-vb-text">Contraseña</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              textContentType="password"
              className="border border-vb-border rounded-lg px-3 py-2.5 text-base text-vb-text"
              placeholder="••••••••"
              placeholderTextColor={colors.muted}
            />
          </View>

          {desafio ? (
            <View className="gap-1.5">
              <Text className="text-sm font-medium text-vb-text">Código de verificación</Text>
              <Text className="text-xs text-vb-muted">
                Escribí el código de 6 dígitos de tu aplicación de autenticación o un código de recuperación.
              </Text>
              <TextInput
                value={codigo}
                onChangeText={setCodigo}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                autoFocus
                className="border border-vb-border rounded-lg px-3 py-2.5 text-base text-vb-text"
                placeholder="123456"
                placeholderTextColor={colors.muted}
              />
            </View>
          ) : null}

          {error ? <Text className="text-sm text-vb-danger">{error}</Text> : null}

          <TouchableOpacity
            onPress={onSubmit}
            disabled={submitting}
            className="bg-vb-primary rounded-lg py-3 items-center mt-2"
            style={{ opacity: submitting ? 0.7 : 1 }}
          >
            {submitting ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text className="text-white font-semibold text-base">Iniciar sesión</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
