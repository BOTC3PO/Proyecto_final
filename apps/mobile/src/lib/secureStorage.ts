/**
 * PLAN-R Parte 1 — `expo-secure-store` no tiene implementación real en
 * web (no existe el concepto de keychain/keystore seguro en un
 * navegador); `getValueWithKeyAsync` directamente no existe ahí y tira.
 * En nativo (Android/iOS, el target real de este plan) este wrapper es
 * un passthrough total a SecureStore. En web cae a localStorage — no es
 * "seguro" en el mismo sentido, pero permite `expo start --web` como
 * loop de desarrollo rápido sin device/emulador.
 */
import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";

export async function getItemAsync(key: string): Promise<string | null> {
  if (Platform.OS === "web") {
    return typeof window === "undefined" ? null : window.localStorage.getItem(key);
  }
  return SecureStore.getItemAsync(key);
}

export async function setItemAsync(key: string, value: string): Promise<void> {
  if (Platform.OS === "web") {
    if (typeof window !== "undefined") window.localStorage.setItem(key, value);
    return;
  }
  await SecureStore.setItemAsync(key, value);
}

export async function deleteItemAsync(key: string): Promise<void> {
  if (Platform.OS === "web") {
    if (typeof window !== "undefined") window.localStorage.removeItem(key);
    return;
  }
  await SecureStore.deleteItemAsync(key);
}
