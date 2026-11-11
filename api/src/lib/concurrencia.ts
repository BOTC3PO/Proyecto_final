/** Se rechaza el trabajo: ya hay `max` en curso y la cola de espera está llena. */
export class ColaLlena extends Error {
  constructor() {
    super("cola de espera llena");
    this.name = "ColaLlena";
  }
}

/**
 * Limita cuántas tareas costosas corren a la vez (p. ej. el hash de contraseñas, ~110 ms de CPU cada uno): hasta `max`
 * en paralelo, hasta `colaMax` esperando, y el resto se rechaza al instante con `ColaLlena`. Sin esto, una avalancha de
 * pedidos de login forma una cola que hace esperar segundos (medido: p99 de ~10 s con 32 simultáneos) también a los demás.
 */
export const crearLimitadorConcurrencia = (max: number, colaMax: number) => {
  let activos = 0;
  const cola: Array<() => void> = [];
  const ejecutar = async <T>(tarea: () => Promise<T>): Promise<T> => {
    if (activos >= max) {
      if (cola.length >= colaMax) throw new ColaLlena();
      await new Promise<void>((listo) => cola.push(listo)); // el cupo se hereda: `activos` no cambia
    } else {
      activos++;
    }
    try {
      return await tarea();
    } finally {
      const siguiente = cola.shift();
      if (siguiente) siguiente();
      else activos--;
    }
  };
  return Object.assign(ejecutar, {
    estado: () => ({ activos, esperando: cola.length, max, colaMax }),
    /** ¿Ya no entra nada más (cupos y cola llenos)? Permite rechazar antes de hacer trabajo previo (base de datos, Redis). */
    saturado: () => activos >= max && cola.length >= colaMax
  });
};
