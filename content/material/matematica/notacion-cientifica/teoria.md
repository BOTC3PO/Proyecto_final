# Matemática — Notación científica (teoría)

> Tema del MAPA: `N13` (Tronco 1 — Numérico). Depende de `../potencias/`
> y `../decimales/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas, mejor en diapositivas.

---

## Qué es la notación científica

Es una forma de escribir números muy grandes o muy chicos como
**a × 10ⁿ**, donde **a** es un número entre 1 y 10 (1 ≤ a < 10), y **n** es
un número entero (positivo, negativo o cero). Ejemplo: 350.000.000 se
escribe 3,5 × 10⁸.

## Números grandes (exponente positivo)

Se corre la coma hacia la izquierda hasta que quede un solo dígito antes
de ella, y se cuenta cuántos lugares se corrió — ese es el exponente.

**Ejemplo**: 350.000.000 → la coma se corre 8 lugares (350.000.000, →
3,50000000,) → 3,5 × 10⁸.

## Números chicos (exponente negativo)

Se corre la coma hacia la derecha hasta que quede un solo dígito distinto
de cero antes de ella, y el exponente queda negativo (tantos lugares como
se corrió).

**Ejemplo**: 0,0000042 → la coma se corre 6 lugares hacia la derecha →
4,2 × 10⁻⁶.

## Volver a la notación normal

Se hace el proceso al revés: el exponente dice cuántos lugares y para qué
lado correr la coma (positivo → derecha, agregando ceros si hace falta;
negativo → izquierda).

## Comparar números en notación científica

Primero se compara el exponente: el que tiene exponente mayor, es mayor
(sin importar el valor de a) — salvo que los exponentes sean iguales, ahí
recién se compara el valor de a.

## Para qué sirve

Sirve para trabajar cómodo con magnitudes extremas sin escribir montañas
de ceros: distancias astronómicas (la distancia a una estrella, en km),
tamaños microscópicos (el diámetro de un átomo, en metros), o cualquier
medición científica con muchos órdenes de magnitud.
