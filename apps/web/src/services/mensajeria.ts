import { apiGet, apiPost, apiPut, apiDelete } from "../lib/api";

export type Hilo = {
  id: string;
  otroId: string;
  otroNombre: string;
  otroUsername: string;
  otroRol: string;
  ultimoMsg: string | null;
  ultimoAt: string | null;
  noLeidos: number;
};

export type MensajeDirecto = {
  id: string;
  hilo_id: string;
  sender_id: string;
  body: string;
  leido: number;
  created_at: string;
};

export type Aviso = {
  id: string;
  escuela_id: string;
  autor_id: string;
  autor_rol: string;
  titulo: string;
  cuerpo: string;
  destino: string;
  aula_id: string | null;
  created_at: string;
  leido: number;
};

export type UsuarioBusqueda = {
  id: string;
  nombre: string;
  username: string;
  role: string;
};

export type NoLeidos = {
  mensajes: number;
  avisos: number;
  total: number;
};

export async function fetchHilos(): Promise<Hilo[]> {
  const data = await apiGet<{ items: Hilo[] }>("/api/mensajeria/hilos");
  return data.items ?? [];
}

export async function fetchHilo(
  hiloId: string
): Promise<{ hilo: Record<string, unknown>; mensajes: MensajeDirecto[] }> {
  return apiGet(`/api/mensajeria/hilos/${hiloId}`);
}

export async function enviarMensaje(
  destinatarioId: string,
  body: string
): Promise<{ hiloId: string; msgId: string; ok: boolean }> {
  return apiPost("/api/mensajeria/hilos", { destinatarioId, body });
}

export async function fetchAvisos(): Promise<Aviso[]> {
  const data = await apiGet<{ items: Aviso[] }>("/api/mensajeria/avisos");
  return data.items ?? [];
}

export async function crearAviso(params: {
  titulo: string;
  cuerpo: string;
  destino: string;
  aulaId?: string;
}): Promise<{ id: string; ok: boolean }> {
  return apiPost("/api/mensajeria/avisos", params);
}

export async function marcarAvisoLeido(avisoId: string): Promise<void> {
  await apiPost(`/api/mensajeria/avisos/${avisoId}/leer`, {});
}

// FIX-TEST4-AVISOS-EDIT — antes el back no tenía PUT/DELETE para
// avisos. Ahora se pueden editar y borrar. Mismas reglas de
// ownership que el back: solo el autor o ADMIN.
export async function editarAviso(
  avisoId: string,
  params: { titulo?: string; cuerpo?: string; destino?: string; aulaId?: string },
): Promise<void> {
  await apiPut(`/api/mensajeria/avisos/${avisoId}`, params);
}

export async function eliminarAviso(avisoId: string): Promise<void> {
  await apiDelete(`/api/mensajeria/avisos/${avisoId}`);
}

export async function buscarUsuarios(q: string): Promise<UsuarioBusqueda[]> {
  const data = await apiGet<{ items: UsuarioBusqueda[] }>(
    `/api/mensajeria/usuarios?q=${encodeURIComponent(q)}`
  );
  return data.items ?? [];
}

export async function fetchNoLeidos(): Promise<NoLeidos> {
  return apiGet<NoLeidos>("/api/mensajeria/no-leidos");
}
