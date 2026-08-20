# Matemática — Permutaciones (teoría)

> Tema del MAPA: `CJ5` (Tronco 4.a). Depende de
> `../principio-multiplicativo-de-conteo/` (ver `../dependencias.md`).
> Hermano de `../variaciones/` y `../combinaciones/` (los tres dependen
> de `CJ4`, no unos de otros).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — una sola idea central (ordenar todos los elementos), no
necesita separarse en varias diapositivas.

---

## Ordenar TODOS los elementos

Una **permutación** es cada una de las formas distintas de **ordenar
todos** los elementos de un conjunto, sin dejar ninguno afuera y sin
repetir ninguno.

**Ejemplo**: con las letras A, B, C, las permutaciones posibles son
`ABC`, `ACB`, `BAC`, `BCA`, `CAB`, `CBA` — 6 en total.

## De dónde sale la fórmula

Es una aplicación directa del principio multiplicativo
(`../principio-multiplicativo-de-conteo/`): para ordenar `n`
elementos, hay `n` opciones para el primer lugar, `n−1` para el
segundo (ya se usó uno), `n−2` para el tercero, y así hasta llegar a 1
opción para el último lugar:

```
n × (n−1) × (n−2) × ... × 2 × 1 = n!
```

Ese producto se llama **factorial de n**, y se escribe `n!`. Por
convención, `0! = 1` (hay exactamente una forma de "ordenar" un
conjunto vacío: no hacer nada).

```
3! = 3 × 2 × 1 = 6      (las 6 permutaciones de A, B, C)
5! = 5 × 4 × 3 × 2 × 1 = 120
```

## Crece muy rápido

El factorial crece muchísimo más rápido que una multiplicación
simple: `5! = 120`, pero `10! = 3.628.800`. Es la razón por la que
"probar todos los órdenes posibles" deja de ser viable a mano muy
rápido, incluso para conjuntos chicos.

## Para qué sirve

Explica de cuántas formas distintas se puede ordenar una fila de
personas, los resultados posibles de una carrera (quién llega primero,
segundo, tercero...) con todos los corredores, o de cuántas maneras se
puede armar una lista de reproducción usando todas las canciones de un
álbum. Es también el bloque que hace falta para las fórmulas de
`../variaciones/` y `../combinaciones/` (ambas se escriben en términos
de factoriales).
