# Matemática — Teorema del binomio: expansión de (a+b)ⁿ (teoria)

> Tema del MAPA: `D18` (Tronco 4.b). Depende de `../combinaciones/`
> (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — una sola fórmula con ejemplos de aplicación, no necesita
varias diapositivas.

---

## La fórmula

El **teorema del binomio** da una forma directa de expandir
`(a+b)ⁿ` sin tener que multiplicar el binomio por sí mismo `n` veces a
mano:

```
(a+b)ⁿ = C(n,0)·aⁿb⁰ + C(n,1)·aⁿ⁻¹b¹ + C(n,2)·aⁿ⁻²b² + ... + C(n,n)·a⁰bⁿ
```

Cada término tiene la forma `C(n,k)·aⁿ⁻ᵏ·bᵏ`, con `k` yendo de `0` a
`n` — en total, `n+1` términos. El coeficiente `C(n,k)` es exactamente
el mismo número combinatorio de `../combinaciones/` — el mismo que
después va a aparecer en `../distribucion-binomial/`.

## Ejemplos ya conocidos

```
(a+b)² = a² + 2ab + b²
(a+b)³ = a³ + 3a²b + 3ab² + b³
```

Los coeficientes 1, 2, 1 (para n=2) y 1, 3, 3, 1 (para n=3) son,
justamente, `C(2,0), C(2,1), C(2,2)` y `C(3,0), C(3,1), C(3,2), C(3,3)`.

## El triángulo de Pascal

Estos coeficientes, organizados fila por fila (una fila por cada
valor de `n`), forman el **triángulo de Pascal**:

```
n=0:          1
n=1:         1 1
n=2:        1 2 1
n=3:       1 3 3 1
n=4:      1 4 6 4 1
```

Cada número es la suma de los dos que tiene arriba — una forma visual
de calcular los `C(n,k)` sin necesitar la fórmula de factoriales, para
valores chicos de `n`.

## Dos propiedades útiles

- **Simetría**: `C(n,k) = C(n,n-k)` — por eso cada fila del triángulo
  de Pascal es un palíndromo (se lee igual del derecho y del revés).
- **Suma de todos los coeficientes**: si `a=b=1`, la fórmula se reduce
  a `2ⁿ = C(n,0) + C(n,1) + ... + C(n,n)` — la suma de todos los
  coeficientes de la fila `n` del triángulo de Pascal es siempre una
  potencia de 2 (la misma cuenta que dice cuántos subconjuntos tiene
  un conjunto de `n` elementos).

## Relación con la distribución binomial

`../distribucion-binomial/` usa exactamente el mismo `C(n,k)`, pero
con otro propósito: en vez de expandir un polinomio algebraico, pondera
cada término por una probabilidad (`pᵏ(1-p)ⁿ⁻ᵏ`) para calcular
`P(X=k)`. Son las dos caras de la misma pieza combinatoria — álgebra
por un lado, probabilidad por el otro.

## Para qué sirve

Permite calcular un término específico de una expansión (por ejemplo,
"¿cuál es el coeficiente de `a³b²` en `(a+b)⁵`?") sin necesitar
desarrollar todo el binomio a mano — y es, además, la razón algebraica
detrás de por qué la fórmula de la distribución binomial tiene
exactamente esa forma.
