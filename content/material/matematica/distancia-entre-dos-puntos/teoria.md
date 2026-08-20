# Matemática — Distancia entre dos puntos (teoría)

> Tema del MAPA: `GA3` (Tronco 3.b — Geometría analítica, trigonometría y
> vectores). Depende de `../coordenadas-de-un-punto/` (ver
> `../dependencias.md`). Reusa directo `../teorema-de-pitagoras/`.

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — es Pitágoras aplicado a un caso concreto, no necesita
mucho contenido nuevo.

---

## La distancia es Pitágoras aplicado a coordenadas

Dados dos puntos `(x₁, y₁)` y `(x₂, y₂)`, la distancia entre ellos **no**
es una fórmula nueva: es el **teorema de Pitágoras**
(`../teorema-de-pitagoras/`) aplicado al triángulo rectángulo que se
forma entre ambos puntos.

## La fórmula

```
d = √((x₂ − x₁)² + (y₂ − y₁)²)
```

## De dónde sale

Entre dos puntos cualesquiera, se puede trazar un triángulo rectángulo
imaginario:

- El **cateto horizontal** mide `x₂ − x₁` (la diferencia de abscisas,
  también llamada `Δx`, "delta x").
- El **cateto vertical** mide `y₂ − y₁` (la diferencia de ordenadas,
  `Δy`).
- La **distancia entre los dos puntos** es la **hipotenusa** de ese
  triángulo — de ahí que la fórmula sea exactamente
  `hipotenusa = √(cateto₁² + cateto₂²)`, la misma de siempre.

## Casos especiales

- Si los dos puntos tienen la misma ordenada (`y₁ = y₂`), están en una
  línea horizontal: la distancia es simplemente `|x₂ − x₁|`.
- Si los dos puntos tienen la misma abscisa (`x₁ = x₂`), están en una
  línea vertical: la distancia es simplemente `|y₂ − y₁|`.

En ambos casos, la fórmula general sigue funcionando igual (uno de los
dos términos dentro de la raíz da 0), pero no hace falta ni sacar raíz:
ya es una resta directa.

## El orden de los puntos no cambia el resultado

Igual que con la pendiente en `../funcion-lineal-pendiente/`, no importa
cuál punto se llame "1" y cuál "2": como las diferencias están elevadas
al cuadrado, el resultado da exactamente igual sin importar el orden
(restar al revés sólo cambia el signo de `Δx` y `Δy`, y el cuadrado
elimina ese signo).

## Para qué sirve

Calcular distancias reales entre ubicaciones dadas por coordenadas (un
mapa, un plano de un edificio, un videojuego), y es la base para decidir
si un triángulo dibujado en el plano es equilátero, isósceles o
escaleno, sólo a partir de las coordenadas de sus tres vértices.
