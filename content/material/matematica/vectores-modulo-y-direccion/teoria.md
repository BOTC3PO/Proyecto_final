# Matemática — Vectores: módulo y dirección (teoría)

> Tema del MAPA: `M8` (Tronco 3.b — Geometría analítica, trigonometría y
> vectores). Depende de `../razones-trigonometricas/` y
> `../coordenadas-de-un-punto/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas (escalar vs. vector,
componentes, módulo, dirección) mejor separadas en diapositivas.

---

## Escalar vs. vector

Una magnitud **escalar** queda completamente descripta con un solo
número: la temperatura, la masa, el tiempo, la edad. Una magnitud
**vectorial** (un **vector**) necesita, además de un número, una
**dirección**: la velocidad de un auto no es sólo "80 km/h", también
importa hacia dónde va; una fuerza no es sólo "50 N", también importa en
qué dirección empuja.

## Representación de un vector

Un vector se dibuja como una **flecha**: el punto de partida se llama
**origen** (o "cola"), y el punto de llegada, **extremo** (o "punta"),
que es el que lleva la flecha. Se suele escribir con una letra y una
flechita arriba (`v⃗`) o en negrita (**v**).

## Componentes de un vector

Si un vector va desde el origen del plano cartesiano `(0, 0)` hasta un
punto `(x, y)`, ese par `(x, y)` son sus **componentes**: cuánto avanza
en la dirección horizontal, y cuánto en la vertical (la misma idea de
`../coordenadas-de-un-punto/`, ahora interpretada como un
desplazamiento, no sólo una posición).

## El módulo (magnitud)

El **módulo** de un vector (su longitud, escrito `|v|`) se calcula igual
que la distancia del extremo al origen (ver
`../distancia-entre-dos-puntos/` y `../teorema-de-pitagoras/`):

```
|v| = √(x² + y²)
```

## La dirección

La **dirección** de un vector es el ángulo que forma con el eje x
positivo, medido en sentido antihorario (la misma convención de
`../plano-cartesiano/`). Se puede describir con las razones
trigonométricas: si se conoce el ángulo `θ` y el módulo `|v|`, las
componentes son:

```
x = |v| × cos(θ)
y = |v| × sen(θ)
```

## Vectores equivalentes

Dos vectores con el **mismo módulo** y la **misma dirección** son
considerados el **mismo vector**, sin importar en qué punto del plano
esté dibujado su origen — un vector "libre" se puede trasladar sin
cambiar lo que representa (es la misma idea de traslación ya vista en
`../transformaciones-geometricas/traslacion/`).

## Casos especiales

- **Vector nulo**: módulo 0 (no se mueve nada). No tiene una dirección
  definida.
- **Vector unitario**: módulo exactamente 1. Se usa para representar
  sólo una dirección, sin "peso" en la magnitud.

## Para qué sirve

Los vectores son el lenguaje de cualquier magnitud que combine "cuánto"
con "hacia dónde": desplazamientos, velocidades, fuerzas, campos — la
base para sumarlos (`../suma-de-vectores-y-descomposicion/`) y
combinarlos entre sí (`../producto-escalar/`).
