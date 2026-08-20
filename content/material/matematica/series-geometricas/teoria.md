# Matemática — Series geométricas (teoría)

> Puente a Álgebra (`A11P2` en `troncos.md`, Tronco 2) — último bullet de
> Tronco 1 en `lista-temas-plana.md`. Depende de
> `../sucesiones-y-series/`, `../multiplicacion/` y `../potencias/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas, mejor en diapositivas.

---

## Qué es una sucesión geométrica

A diferencia de la sucesión aritmética (ver
`../sucesiones-aritmeticas/teoria.md`), donde cada término se obtiene
**sumando** siempre la misma diferencia, en una sucesión geométrica cada
término se obtiene **multiplicando** siempre por la misma **razón** (r).

**Ejemplo**: 3, 6, 12, 24, 48... es geométrica con r = 2 (siempre se
multiplica por 2).

## El término general

**aₙ = a₁ × r^(n−1)**

**Ejemplo**: con a₁ = 3 y r = 2, el término 6 es a₆ = 3 × 2⁵ = 3 × 32 =
96.

## Crecimiento geométrico vs. aritmético

Una sucesión aritmética crece de forma **lineal** (constante paso a
paso); una geométrica (con r > 1) crece **exponencialmente**, cada vez
más rápido — el mismo tipo de crecimiento que una población que se
duplica, o un capital con interés compuesto.

## La suma de una serie geométrica finita

Para sumar los primeros n términos (con r ≠ 1):

**Sₙ = a₁ × (rⁿ − 1) ÷ (r − 1)**

**Ejemplo**: sumar los primeros 5 términos de a₁=3, r=2: S₅ = 3×(2⁵−1)÷(2−1)
= 3×31÷1 = 93 (que es 3+6+12+24+48 = 93, verificable sumando directo).

## Serie geométrica infinita (nota, para cuando r está entre -1 y 1)

Si |r| < 1 (la razón achica cada término), la suma de **todos** los
términos, aunque sean infinitos, converge a un número finito: a₁ ÷ (1−r).
Es contraintuitivo — sumar infinitos números y obtener un resultado
finito — pero pasa porque cada término agregado es cada vez más chico.
