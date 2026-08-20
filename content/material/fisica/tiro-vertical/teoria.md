# Física — Tiro vertical (teoría)

> Tema del MAPA: `F3` (puente Álgebra → Física, segunda mitad — split
> confirmado). Depende de `../mruv/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (tiro vertical como caso
particular de MRUV, altura máxima, tiempo de vuelo, caída libre,
errores comunes).

---

## Tiro vertical: MRUV con a = −g

El **tiro vertical** es exactamente un MRUV (ver `../mruv/`), con dos
particularidades: la aceleración es siempre la de la gravedad
(g ≈ 10 m/s² en cálculos simples), y se toma la convención **"arriba es
positivo"** — por eso la aceleración aparece con signo **negativo**
(la gravedad siempre tira hacia abajo).

```
v(t) = v₀ − g·t
y(t) = y₀ + v₀·t − ½g·t²
```

## Altura máxima

En el punto más alto, la velocidad vertical es **0** (un instante, ni
subiendo ni bajando). Se despeja el tiempo de subida:

```
0 = v₀ − g·t_subida  →  t_subida = v₀/g
```

Y la altura máxima se obtiene evaluando y(t) en ese instante:

```
y_max = v₀²/(2g)
```

## Tiempo total de vuelo (si vuelve al mismo nivel)

Por simetría, el tiempo de bajada es igual al de subida — el tiempo
**total** de vuelo (hasta volver al punto de partida) es el doble:

```
t_total = 2·v₀/g
```

Y la velocidad al volver al punto de partida es −v₀ (misma magnitud,
sentido opuesto — ahora bajando).

## Caída libre: el caso con v₀ = 0

Si el objeto se **suelta** (no se lanza), v₀=0:

```
v(t) = −g·t
y(t) = y₀ − ½g·t²
```

## Ejemplo resuelto

**Se lanza una pelota hacia arriba con v₀=20 m/s (g=10 m/s²).**

- Tiempo de subida: t = 20/10 = 2 s.
- Altura máxima: y_max = 20²/(2×10) = 400/20 = 20 m.
- Tiempo total de vuelo: 2×2 = 4 s.
- Velocidad al volver al piso: −20 m/s (mismo valor, sentido contrario).

## Errores comunes

- Confundir el tiempo de SUBIDA con el tiempo TOTAL de vuelo (el total
  es el doble, si vuelve al mismo nivel de partida).
- Pensar que en el punto más alto la aceleración también es 0 — no, la
  gravedad sigue actuando ahí, sólo la velocidad es 0 en ese instante.
- Perder la consistencia de signos (mezclar "arriba positivo" con
  fórmulas que asumen "abajo positivo" a mitad de la resolución).
- Aplicar la fórmula del tiempo total de vuelo (2v₀/g) cuando el objeto
  NO vuelve al mismo nivel de partida (por ejemplo, se lanza desde un
  balcón hacia arriba, pero cae al piso, más abajo del punto de
  lanzamiento) — ahí hace falta resolver la ecuación cuadrática
  completa, no el atajo de la simetría.
