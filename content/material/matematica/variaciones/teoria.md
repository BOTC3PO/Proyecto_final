# Matemática — Variaciones (teoría)

> Tema del MAPA: `CJ6` (Tronco 4.a). Depende de
> `../principio-multiplicativo-de-conteo/` (ver `../dependencias.md`).
> Hermano de `../permutaciones/` y `../combinaciones/` (los tres
> dependen de `CJ4`, no unos de otros).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — una sola idea central (elegir una parte, importa el
orden), no necesita separarse en varias diapositivas.

---

## Elegir una PARTE, importa el orden

Una **variación** es cada una de las formas distintas de elegir y
ordenar `k` elementos de un conjunto de `n` elementos (con `k ≤ n`),
**sin repetir** ninguno, donde el **orden sí importa** (elegir A y
luego B no es lo mismo que elegir B y luego A).

**Ejemplo**: con las letras A, B, C, D, las variaciones de a 2 letras
son `AB`, `BA`, `AC`, `CA`, `AD`, `DA`, `BC`, `CB`, `BD`, `DB`, `CD`,
`DC` — 12 en total. `AB` y `BA` cuentan como dos variaciones
**distintas**.

## La fórmula

Por el principio multiplicativo: para el primer lugar hay `n`
opciones, para el segundo `n−1` (ya se usó una), y así hasta completar
`k` lugares (no hasta 1, como en la permutación completa):

```
V(n, k) = n × (n−1) × (n−2) × ... × (n−k+1) = n! / (n−k)!
```

Con el ejemplo anterior: `V(4, 2) = 4!/(4−2)! = 4!/2! = 24/2 = 12`.

## Comparación con permutaciones

Una permutación es el caso particular de una variación donde `k = n`
(se usan **todos** los elementos): `V(n, n) = n!/(n−n)! = n!/0! = n!`
— exactamente la fórmula de `../permutaciones/`, porque `0! = 1`.

## Para qué sirve

Explica de cuántas formas distintas se pueden repartir 1er, 2do y 3er
premio entre `n` participantes (donde importa quién queda en qué
puesto, y una vez que alguien gana el 1er premio ya no puede ganar el
2do), o de cuántas formas se puede armar un código usando `k` símbolos
distintos elegidos de un conjunto de `n` símbolos disponibles, sin
repetir ninguno.
