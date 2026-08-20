# Matemática — Números primos: factorización prima (teoría)

> Tema del MAPA: `N16` (Tronco 1 — Numérico). Depende de
> `../divisibilidad/divisores/` (ver `../dependencias.md`). Después de este
> tema sigue MCD y MCM, que se da en 2 partes — cada una con su propia
> carpeta cuando lleguemos ahí.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — son varias ideas encadenadas (qué es un primo, casos
especiales, cómo reconocerlos, qué es factorizar, cómo se factoriza) que
se siguen mejor en diapositivas separadas que en un bloque corrido.

---

## Qué es un número primo

Un número natural mayor que 1 es **primo** si tiene exactamente 2
divisores: el 1 y él mismo. Si tiene más de 2 divisores, se llama
**compuesto**.

**Ejemplos**: 7 es primo (sus únicos divisores son 1 y 7). 8 es compuesto
(sus divisores son 1, 2, 4 y 8 — cuatro en total).

## Casos especiales

- **El 1 no es primo ni compuesto**: tiene un solo divisor (él mismo), no
  dos, así que no cumple la definición de ninguno de los dos grupos.
- **El 2 es el único número primo par**: cualquier otro número par tiene,
  como mínimo, tres divisores (1, 2, y él mismo), así que ya es compuesto.
  Por eso, salvo el 2, todo número primo es impar.

## Cómo reconocer si un número es primo

Se prueba dividirlo por los números primos más chicos (2, 3, 5, 7, 11...)
uno por uno. Las reglas de divisibilidad ya vistas (ver
`../divisibilidad/`) sirven de atajo: si es par, ya se sabe que no es primo
(salvo que sea el 2); si la suma de cifras es múltiplo de 3, tampoco; si
termina en 0 o 5, tampoco (salvo que sea el propio 5). Alcanza con probar
hasta la raíz cuadrada del número: si ningún primo hasta ahí lo divide,
ninguno más grande lo va a dividir tampoco.

## Qué es la factorización prima

**Factorizar** un número compuesto es escribirlo como el producto de sus
factores primos. Todo número compuesto se puede descomponer así, de una
**única** manera (sin contar el orden) — esto se llama el Teorema
Fundamental de la Aritmética.

**Ejemplo**: 60 = 2 × 2 × 3 × 5 (también se escribe 2² × 3 × 5).

## Cómo factorizar un número

Se divide el número por el primo más chico que lo divida, y se repite el
proceso con el resultado, hasta llegar a 1. Por ejemplo, para 60: 60÷2=30,
30÷2=15, 15÷3=5, 5÷5=1 → los primos usados fueron 2, 2, 3, 5.

## Para qué sirve

La factorización prima es la base para calcular el MCD (Máximo Común
Divisor) y el MCM (Mínimo Común Múltiplo) de dos números, que es el
siguiente tema del mapa.
