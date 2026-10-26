/**
 * WO-2 / F4-03 — Mutaciones puras del cuestionario por posiciones.
 *
 * El host (`QuizPosicionesEditor`) es tonto: dispara estos helpers y persiste
 * el resultado. Cada mutación devuelve un `CuestionarioPosiciones` YA
 * NORMALIZADO (vía `parseCuestionario`), por lo que las posiciones quedan
 * renumeradas 1..N y los temas referenciados, declarados. Así el modelo
 * editado siempre es canónico y round-trippea contra el serializador.
 *
 * Reglas del modelo (ver `posiciones.ts`) que respetan estas mutaciones:
 *  - `fijo` ⇒ exactamente una variante; al pasar a `fijo` se recorta a la 1ª,
 *    y agregar una variante a una posición `fijo` la promueve a `obligatorio`.
 *  - Letras únicas y estables por posición (a, b, c…).
 *  - Nunca dejar una posición sin variantes.
 *  - Tema y puntaje viven A NIVEL POSICIÓN (compartidos por las variantes).
 *
 * Sin React ni imports de red: lógica pura y testeable.
 */

import {
  coerceDificultad,
  letraPorIndice,
  parseCuestionario,
  TEMA_GENERAL,
  type CuestionarioPosiciones,
  type Dificultad,
  type Posicion,
  type PosicionTipo,
  type Variante,
  type VarianteOrigen,
} from "./posiciones";

/** Normaliza tras cada mutación (renumera, canoniza, deriva temas). */
function normalizar(c: CuestionarioPosiciones): CuestionarioPosiciones {
  return parseCuestionario(c);
}

/** Primera letra libre (a, b, c…) para una nueva variante de la posición. */
function siguienteLetra(variantes: Variante[]): string {
  const usadas = new Set(variantes.map((v) => v.letra));
  let i = 0;
  while (usadas.has(letraPorIndice(i))) i += 1;
  return letraPorIndice(i);
}

/** Origen por defecto de una variante recién creada: banco vacío (lo elige el profe). */
function origenInicial(): VarianteOrigen {
  return { origen: "banco", questionId: "" };
}

/**
 * Inserta una posición nueva. `despuesDe` es el `numero` (1-based) tras el cual
 * insertar; ausente ⇒ al final. La nueva posición arranca con su tipo, una sola
 * variante de banco vacía, puntaje 1 y el primer tema declarado (o "general").
 */
export function agregarPosicion(
  c: CuestionarioPosiciones,
  args: { despuesDe?: number; tipo: PosicionTipo },
): CuestionarioPosiciones {
  const nueva: Posicion = {
    numero: 0, // lo asigna parseCuestionario
    tipo: args.tipo,
    temaPrincipal: c.temas[0]?.id ?? TEMA_GENERAL.id,
    puntaje: 1,
    variantes: [{ letra: "a", origen: origenInicial() }],
  };
  const posiciones = [...c.posiciones];
  if (args.despuesDe === undefined) {
    posiciones.push(nueva);
  } else {
    const idx = posiciones.findIndex((p) => p.numero === args.despuesDe);
    posiciones.splice(idx === -1 ? posiciones.length : idx + 1, 0, nueva);
  }
  return normalizar({ ...c, posiciones });
}

/** Quita la posición `numero`. Renumera el resto. */
export function quitarPosicion(
  c: CuestionarioPosiciones,
  numero: number,
): CuestionarioPosiciones {
  return normalizar({
    ...c,
    posiciones: c.posiciones.filter((p) => p.numero !== numero),
  });
}

/** Mueve la posición `numero` una casilla arriba/abajo (barajado de armado). */
export function reordenarPosicion(
  c: CuestionarioPosiciones,
  numero: number,
  direccion: "arriba" | "abajo",
): CuestionarioPosiciones {
  const posiciones = [...c.posiciones];
  const idx = posiciones.findIndex((p) => p.numero === numero);
  if (idx === -1) return c;
  const j = direccion === "arriba" ? idx - 1 : idx + 1;
  if (j < 0 || j >= posiciones.length) return c;
  [posiciones[idx], posiciones[j]] = [posiciones[j], posiciones[idx]];
  return normalizar({ ...c, posiciones });
}

function mapPosicion(
  c: CuestionarioPosiciones,
  numero: number,
  fn: (p: Posicion) => Posicion,
): CuestionarioPosiciones {
  return normalizar({
    ...c,
    posiciones: c.posiciones.map((p) => (p.numero === numero ? fn(p) : p)),
  });
}

/**
 * Cambia el tipo de slot. Pasar a `fijo` recorta el pool a la primera variante
 * (regla del modelo: `fijo` ⇒ exactamente una variante).
 */
export function cambiarTipo(
  c: CuestionarioPosiciones,
  numero: number,
  tipo: PosicionTipo,
): CuestionarioPosiciones {
  return mapPosicion(c, numero, (p) => ({
    ...p,
    tipo,
    variantes: tipo === "fijo" ? p.variantes.slice(0, 1) : p.variantes,
  }));
}

/** Cambia el puntaje de la posición (clamp a ≥ 0). */
export function cambiarPuntaje(
  c: CuestionarioPosiciones,
  numero: number,
  puntaje: number,
): CuestionarioPosiciones {
  const n = Number.isFinite(puntaje) ? Math.max(0, puntaje) : 0;
  return mapPosicion(c, numero, (p) => ({ ...p, puntaje: n }));
}

/** Asigna el tema principal de la posición. */
export function cambiarTema(
  c: CuestionarioPosiciones,
  numero: number,
  temaId: string,
): CuestionarioPosiciones {
  return mapPosicion(c, numero, (p) => ({ ...p, temaPrincipal: temaId }));
}

/**
 * Agrega una variante (alternativa) al pool de la posición. Si la posición era
 * `fijo`, se promueve a `obligatorio` (un `fijo` no puede tener pool).
 */
export function agregarVariante(
  c: CuestionarioPosiciones,
  numero: number,
): CuestionarioPosiciones {
  return mapPosicion(c, numero, (p) => {
    const letra = siguienteLetra(p.variantes);
    const variantes = [...p.variantes, { letra, origen: origenInicial() }];
    const tipo: PosicionTipo =
      p.tipo === "fijo" && variantes.length > 1 ? "obligatorio" : p.tipo;
    return { ...p, tipo, variantes };
  });
}

/** Quita la variante `letra`. Nunca deja la posición sin variantes. */
export function quitarVariante(
  c: CuestionarioPosiciones,
  numero: number,
  letra: string,
): CuestionarioPosiciones {
  return mapPosicion(c, numero, (p) => {
    if (p.variantes.length <= 1) return p;
    return { ...p, variantes: p.variantes.filter((v) => v.letra !== letra) };
  });
}

/** Cambia el origen (banco/plantilla/generador) de una variante concreta. */
export function cambiarOrigenVariante(
  c: CuestionarioPosiciones,
  numero: number,
  letra: string,
  origen: VarianteOrigen,
): CuestionarioPosiciones {
  return mapPosicion(c, numero, (p) => ({
    ...p,
    variantes: p.variantes.map((v) => (v.letra === letra ? { ...v, origen } : v)),
  }));
}

/**
 * WO-14 — Asigna o cambia la `dificultad` de una variante concreta.
 * `null`/`undefined` quita la etiqueta (vuelve al fallback "indefinido"
 * = factor 1.0 en scoring, ver `puntaje.ts`). Si el valor pasado no es
 * una `Dificultad` válida, se descarta silenciosamente (defensa contra
 * input sucio; el cuestionario sigue siendo válido, sólo sin etiqueta).
 *
 * Idempotente y puro: no muta, devuelve un cuestionario normalizado.
 */
export function cambiarDificultadVariante(
  c: CuestionarioPosiciones,
  numero: number,
  letra: string,
  dificultad: Dificultad | null | undefined,
): CuestionarioPosiciones {
  return mapPosicion(c, numero, (p) => ({
    ...p,
    variantes: p.variantes.map((v) => {
      if (v.letra !== letra) return v;
      const validada = coerceDificultad(dificultad);
      if (validada === undefined) {
        // Quitar la etiqueta (volver a la propiedad ausente).
        const { dificultad: _drop, ...rest } = v;
        return rest as Variante;
      }
      return { ...v, dificultad: validada };
    }),
  }));
}

/** Slug estable y único para un tema nuevo a partir de su nombre. */
function slugTema(nombre: string, temas: { id: string }[]): string | null {
  const base = nombre
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  if (base.length === 0) return null;
  const usados = new Set(temas.map((t) => t.id));
  if (!usados.has(base)) return base;
  let i = 2;
  while (usados.has(`${base}-${i}`)) i += 1;
  return `${base}-${i}`;
}

/**
 * Agrega un tema (sección) al cuestionario. Devuelve el cuestionario sin
 * cambios si el nombre está vacío. El id se deriva del nombre (único).
 */
export function agregarTema(
  c: CuestionarioPosiciones,
  nombre: string,
): CuestionarioPosiciones {
  const id = slugTema(nombre, c.temas);
  if (!id) return c;
  return normalizar({ ...c, temas: [...c.temas, { id, nombre: nombre.trim() }] });
}
