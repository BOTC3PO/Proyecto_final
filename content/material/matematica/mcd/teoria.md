# Matemática — Máximo Común Divisor (MCD) (teoría)

> Tema del MAPA: `N5` (mitad) — separado de "MCM", que tiene su propia
> teoría y cuestionario en `../mcm/` (a crear después). Depende de
> `../numeros-primos/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — dos métodos distintos (por lista de divisores, por
factorización prima) más ejemplos, se siguen mejor separados en
diapositivas.

---

## Qué es el MCD

El **Máximo Común Divisor** de dos (o más) números es el mayor número que
es divisor de todos ellos a la vez.

**Ejemplo**: los divisores de 12 son 1, 2, 3, 4, 6, 12. Los divisores de 18
son 1, 2, 3, 6, 9, 18. Los divisores en común son 1, 2, 3 y 6 — el mayor de
esos es 6. Entonces MCD(12, 18) = 6.

## Método 1: por lista de divisores

Se listan todos los divisores de cada número (ver
`../divisibilidad/divisores/teoria.md`), se buscan los que aparecen en las
dos listas, y se toma el mayor. Es directo, pero se vuelve lento con
números grandes (hay que listar muchos divisores).

## Método 2: por factorización prima

Se factoriza cada número (ver `../numeros-primos/teoria.md`), y el MCD es
el producto de los primos que aparecen en **las dos** factorizaciones,
usando el **menor** exponente con el que aparecen en cada una.

**Ejemplo**: 12 = 2² × 3. 18 = 2 × 3². Los primos en común son 2 y 3. El
menor exponente del 2 es 1 (aparece como 2¹ en 18). El menor exponente del
3 es 1 (aparece como 3¹ en 12). MCD = 2¹ × 3¹ = 6 — mismo resultado que con
el método de listar divisores, pero más rápido con números grandes.

## Casos especiales

- El MCD de dos números primos entre sí (que no comparten ningún factor
  primo) es 1. Ejemplo: MCD(8, 9) = 1.
- El MCD de un número y sí mismo es el propio número.
- El MCD nunca puede ser mayor que el más chico de los dos números.

## Para qué sirve

El MCD sirve para simplificar fracciones (dividiendo numerador y
denominador por su MCD) y para repartir en la mayor cantidad posible de
grupos iguales sin que sobre nada.
