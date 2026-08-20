# Física — Tiro oblicuo: proyectiles (teoría)

> Tema del MAPA: `F10` (Tronco 3.b — puente Álgebra/vectores → Física).
> Depende de `../mru/`, `../mruv/` y
> `../../matematica/suma-de-vectores-y-descomposicion/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas (descomposición,
fórmulas por eje, alcance máximo) mejor separadas en diapositivas.

---

## La idea central: dos movimientos en simultáneo

Un **tiro oblicuo** (o proyectil) es un objeto lanzado con una
velocidad inicial `v₀` que forma un ángulo `θ` con la horizontal (una
pelota de fútbol patinada, una bala de cañón, una piedra tirada con
efecto). A diferencia del tiro vertical (`../tiro-vertical/`, `θ=90°`)
o del MRU puro (`θ=0°`), acá pasan dos cosas **a la vez** e
**independientes**: el objeto avanza y el objeto sube y baja.

Se descompone `v₀`, con el mismo procedimiento de
`../../matematica/suma-de-vectores-y-descomposicion/`:

```
v₀ₓ = v₀ × cos(θ)      (componente horizontal)
v₀ᵥ = v₀ × sen(θ)      (componente vertical)
```

## Eje horizontal: MRU puro

Sin nada que lo acelere ni lo frene (se ignora el aire), la velocidad
horizontal es **constante** durante todo el vuelo — exactamente el MRU
de `../mru/`:

```
x(t) = v₀ₓ × t
```

## Eje vertical: MRUV con a = −g

La gravedad sólo actúa verticalmente. Es el mismo caso que
`../tiro-vertical/`, pero con velocidad inicial `v₀ᵥ` en vez de `v₀`
completo:

```
v_y(t) = v₀ᵥ − g×t
y(t)   = v₀ᵥ×t − ½×g×t²
```

## Tres cantidades que se preguntan siempre

- **Tiempo de subida** (cuando `v_y = 0`, en la cresta de la
  trayectoria): `t_subida = v₀ᵥ / g`.
- **Altura máxima**: `h_max = v₀ᵥ² / (2×g)`.
- **Tiempo de vuelo total** (si cae a la misma altura de la que
  salió): el tiempo de bajada es igual al de subida por simetría, así
  que `t_vuelo = 2 × v₀ᵥ / g`.
- **Alcance horizontal** (distancia recorrida en `t_vuelo`):
  `alcance = v₀ₓ × t_vuelo`.

## El ángulo que maximiza el alcance

Para una misma rapidez inicial `v₀`, el alcance es máximo cuando
`θ = 45°` — ni muy horizontal (poco tiempo en el aire) ni muy vertical
(poco avance). Es el ángulo que un jugador de bala o de jabalina busca
instintivamente.

## Casos extremos, ya vistos antes

- `θ = 0°` (tiro horizontal): `v₀ᵥ = 0`, no hay "subida" — el objeto
  empieza a caer desde el instante inicial. La trayectoria sigue siendo
  la misma combinación MRU+MRUV, sólo que sin la fase de ascenso.
- `θ = 90°` (tiro vertical): `v₀ₓ = 0`, no hay avance horizontal —
  es exactamente `../tiro-vertical/`.

## Para qué sirve

Explica la trayectoria de **cualquier** objeto lanzado con ángulo: una
pelota, un proyectil de artillería, un chorro de agua de una manguera,
un salto en largo. La trayectoria siempre es una parábola, resultado de
combinar un movimiento uniforme con uno uniformemente acelerado en ejes
perpendiculares.
