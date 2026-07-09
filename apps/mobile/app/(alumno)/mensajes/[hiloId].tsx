/**
 * PLAN-R Parte 2 — detalle de hilo + responder. `otroId`/`otroNombre`
 * viajan como params desde la lista (evita parsear el `hilo:
 * Record<string, unknown>` sin tipar que devuelve
 * `GET /api/mensajeria/hilos/:id` en la web).
 */
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator, FlatList, KeyboardAvoidingView, Platform,
  Text, TextInput, TouchableOpacity, View,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { apiGet, apiPost } from "../../../src/api/client";
import { useAuth } from "../../../src/auth/AuthContext";
import { colors } from "../../../src/theme/tokens";
import type { MensajeDirecto } from "../../../src/types/mensajeria";

export default function HiloDetalle() {
  const { hiloId, otroId, otroNombre } = useLocalSearchParams<{
    hiloId: string; otroId: string; otroNombre?: string;
  }>();
  const { user } = useAuth();
  const [mensajes, setMensajes] = useState<MensajeDirecto[] | null>(null);
  const [texto, setTexto] = useState("");
  const [sending, setSending] = useState(false);
  const listRef = useRef<FlatList<MensajeDirecto>>(null);

  useEffect(() => {
    if (!hiloId) return;
    let active = true;
    apiGet<{ hilo: unknown; mensajes: MensajeDirecto[] }>(`/api/mensajeria/hilos/${hiloId}`)
      .then((res) => active && setMensajes(res.mensajes ?? []))
      .catch(() => active && setMensajes([]));
    return () => {
      active = false;
    };
  }, [hiloId]);

  const onSend = async () => {
    const body = texto.trim();
    if (!body || !otroId || sending) return;
    setSending(true);
    setTexto("");
    try {
      await apiPost<{ msgId: string }>("/api/mensajeria/hilos", { destinatarioId: otroId, body });
      const res = await apiGet<{ mensajes: MensajeDirecto[] }>(`/api/mensajeria/hilos/${hiloId}`);
      setMensajes(res.mensajes ?? []);
    } catch {
      setTexto(body); // devolver el texto si falló, para no perderlo
    } finally {
      setSending(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-vb-bg"
      keyboardVerticalOffset={80}
    >
      <View className="flex-row items-center gap-2 px-3 py-2 border-b border-vb-border bg-vb-surface">
        <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2" hitSlop={8}>
          <Feather name="arrow-left" size={22} color={colors.text} />
        </TouchableOpacity>
        <Text className="text-base font-semibold text-vb-text">{otroNombre ?? "Conversación"}</Text>
      </View>

      {!mensajes ? (
        <ActivityIndicator className="mt-8" color={colors.primary} />
      ) : (
        <FlatList
          ref={listRef}
          data={mensajes}
          keyExtractor={(m) => m.id}
          contentContainerStyle={{ padding: 12, gap: 6 }}
          onContentSizeChange={() => listRef.current?.scrollToEnd({ animated: false })}
          ListEmptyComponent={<Text className="text-sm text-vb-muted text-center mt-8">Todavía no hay mensajes.</Text>}
          renderItem={({ item }) => {
            const mine = item.sender_id === user?.id;
            return (
              <View
                className="max-w-[80%] rounded-2xl px-3.5 py-2"
                style={{
                  alignSelf: mine ? "flex-end" : "flex-start",
                  backgroundColor: mine ? colors.primary : colors.surface,
                  borderWidth: mine ? 0 : 1,
                  borderColor: colors.border,
                }}
              >
                <Text style={{ color: mine ? "#fff" : colors.text }} className="text-sm">
                  {item.body}
                </Text>
              </View>
            );
          }}
        />
      )}

      <View className="flex-row items-center gap-2 p-3 border-t border-vb-border bg-vb-surface">
        <TextInput
          value={texto}
          onChangeText={setTexto}
          placeholder="Escribí un mensaje..."
          placeholderTextColor={colors.muted}
          className="flex-1 border border-vb-border rounded-full px-4 py-2 text-base text-vb-text bg-vb-bg"
          multiline
        />
        <TouchableOpacity
          onPress={onSend}
          disabled={sending || !texto.trim()}
          className="w-10 h-10 rounded-full items-center justify-center"
          style={{ backgroundColor: colors.primary, opacity: sending || !texto.trim() ? 0.5 : 1 }}
        >
          <Feather name="send" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
