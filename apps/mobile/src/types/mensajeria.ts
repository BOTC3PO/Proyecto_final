/**
 * PLAN-R Parte 2 — copiado de `apps/web/src/services/mensajeria.ts`.
 */
export type Hilo = {
  id: string;
  otroId: string;
  otroNombre: string;
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
  autor_rol: string;
  titulo: string;
  cuerpo: string;
  created_at: string;
  leido: number;
};
