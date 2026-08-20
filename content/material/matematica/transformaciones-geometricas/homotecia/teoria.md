# Matemática — Transformaciones geométricas: Homotecia (teoría)

> Tema del MAPA: `GO8d` (Tronco 3.a — Geometría: de la forma a la
> medida). Depende de `../../semejanza-y-teorema-de-thales/` (ver
> `../../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — una sola idea (agrandar o achicar una figura desde un
punto fijo), no necesita separarse en varias diapositivas.

---

## Qué es una homotecia

Una **homotecia** agranda o achica una figura desde un punto fijo, el
**centro de homotecia**, según un número llamado **razón de homotecia**
(o factor de escala, `k`). Es la única de las cuatro transformaciones
(junto con `../traslacion/`, `../rotacion/` y `../reflexion/`) que
**cambia el tamaño** de la figura.

## La fórmula

Cada punto de la imagen se ubica sobre la misma recta que une el centro
con el punto original, a una distancia:

```
distancia (centro → punto imagen) = k × distancia (centro → punto original)
```

- Si `k > 1`: la figura se **amplía** (la imagen es más grande).
- Si `0 < k < 1`: la figura se **reduce** (la imagen es más chica).
- Si `k = 1`: no cambia nada — es la transformación identidad.
- Si `k` es **negativo**: la imagen queda del lado **opuesto** del centro
  (invertida respecto de él). El caso particular `k = -1` equivale
  exactamente a una rotación de 180° alrededor del centro (ver
  `../rotacion/`).

## Qué se conserva y qué cambia

A diferencia de las otras tres transformaciones (que son isometrías), la
homotecia conserva la **forma** (todos los ángulos quedan iguales) pero
**no** el tamaño — salvo que `|k| = 1`. Por eso la imagen y la figura
original son **semejantes**, no congruentes (ver
`../../semejanza-y-teorema-de-thales/`): misma forma, proporciones
iguales, pero tamaño distinto.

## El único punto fijo

El centro de homotecia es el único punto que no se mueve (salvo el caso
trivial `k = 1`, donde ningún punto se mueve). Todos los demás puntos se
alejan o se acercan al centro, siempre sobre la misma recta que ya
tenían con él.

## Para qué sirve

La homotecia es la transformación detrás de cualquier ampliación o
reducción que mantiene las proporciones: una fotocopia ampliada o
reducida, el zoom de una imagen digital, o la sombra que proyecta un
objeto desde una fuente de luz puntual (el centro de homotecia es la
fuente de luz, y la razón depende de la distancia entre el objeto, la
luz y la superficie donde cae la sombra).
