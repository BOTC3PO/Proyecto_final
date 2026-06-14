/**
 * F5-01 — Cola offline de respuestas (attemptOutbox).
 *
 * Cubre: persistencia individual, idempotencia/dedup en la cola, y el ciclo
 * offline → encolar → reconectar → sincronizar (drenar con `flush`).
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  recordAnswer,
  pending,
  hasPending,
  clearAttempt,
  flush,
  type OutboxItem,
  type SendResult,
} from "../attemptOutbox";

const A = "attempt-1";

beforeEach(() => {
  localStorage.clear();
});
afterEach(() => {
  localStorage.clear();
});

describe("attemptOutbox", () => {
  it("registra una respuesta y la deja pendiente (persistida en localStorage)", () => {
    recordAnswer(A, "q0", "c0", 100);
    expect(pending(A)).toEqual([{ attemptId: A, questionId: "q0", response: "c0", clientTs: 100 }]);
    expect(hasPending(A)).toBe(true);
    // Sobrevive a una "recarga": leemos directo de localStorage vía pending().
    expect(pending().length).toBe(1);
  });

  it("idempotencia/dedup: re-registrar la misma posición reemplaza, no acumula", () => {
    recordAnswer(A, "q0", "viejo", 1);
    recordAnswer(A, "q0", "c0", 2);
    const items = pending(A);
    expect(items).toHaveLength(1);
    expect(items[0].response).toBe("c0");
  });

  it("mantiene respuestas de distintas posiciones por separado", () => {
    recordAnswer(A, "q0", "c0");
    recordAnswer(A, "q1", ["x", "y"]);
    expect(pending(A)).toHaveLength(2);
  });

  it("ciclo offline → encolar → reconectar → sincronizar", async () => {
    // Offline: el send falla → las respuestas quedan encoladas.
    recordAnswer(A, "q0", "c0");
    recordAnswer(A, "q1", "c1");

    const sendOffline: (i: OutboxItem) => Promise<SendResult> = vi
      .fn()
      .mockRejectedValue(new Error("network down"));
    const r1 = await flush(sendOffline, A);
    expect(r1.sent).toBe(0);
    expect(r1.failed).toBe(2);
    expect(r1.remaining).toBe(2);
    expect(hasPending(A)).toBe(true); // nada se perdió

    // Reconecta: el send ahora resuelve ok → la cola se drena.
    const enviados: string[] = [];
    const sendOnline: (i: OutboxItem) => Promise<SendResult> = vi.fn(async (it) => {
      enviados.push(it.questionId);
      return { ok: true };
    });
    const r2 = await flush(sendOnline, A);
    expect(r2.sent).toBe(2);
    expect(r2.remaining).toBe(0);
    expect(enviados.sort()).toEqual(["q0", "q1"]);
    expect(hasPending(A)).toBe(false);
  });

  it("flush conserva las que fallan y quita las que se envían", async () => {
    recordAnswer(A, "q0", "c0");
    recordAnswer(A, "q1", "c1");
    // q0 ok, q1 falla.
    const send: (i: OutboxItem) => Promise<SendResult> = vi.fn(async (it) =>
      it.questionId === "q0" ? { ok: true } : { ok: false },
    );
    const r = await flush(send, A);
    expect(r.sent).toBe(1);
    expect(r.failed).toBe(1);
    const restantes = pending(A);
    expect(restantes).toHaveLength(1);
    expect(restantes[0].questionId).toBe("q1");
  });

  it("descarta entradas con rechazo TERMINAL (409) sin contarlas como enviadas", async () => {
    recordAnswer(A, "q0", "c0");
    const send: (i: OutboxItem) => Promise<SendResult> = vi
      .fn()
      .mockResolvedValue({ ok: false, terminal: true });
    const r = await flush(send, A);
    expect(r.sent).toBe(0);
    expect(r.remaining).toBe(0); // se descartó, no se reintenta
    expect(hasPending(A)).toBe(false);
  });

  it("clearAttempt descarta sólo las pendientes de ese intento", () => {
    recordAnswer(A, "q0", "c0");
    recordAnswer("attempt-2", "q0", "c0");
    clearAttempt(A);
    expect(hasPending(A)).toBe(false);
    expect(hasPending("attempt-2")).toBe(true);
  });
});
