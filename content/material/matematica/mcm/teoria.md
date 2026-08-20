# Matemática — Mínimo Común Múltiplo (MCM) (teoría)

> Tema del MAPA: `N5` (mitad) — separado de "MCD", ya cubierto en
> `../mcd/`. Depende de `../mcd/` y de `../divisibilidad/multiplos/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — mismo criterio que `../mcd/`: varios métodos y
ejemplos, mejor separados en diapositivas.

---

## Qué es el MCM

El **Mínimo Común Múltiplo** de dos (o más) números es el menor número
(mayor que 0) que es múltiplo de todos ellos a la vez.

**Ejemplo**: los múltiplos de 4 son 4, 8, 12, 16, 20, 24... Los múltiplos
de 6 son 6, 12, 18, 24, 30... El primero que aparece en las dos listas es
12. Entonces MCM(4, 6) = 12.

## Método 1: por lista de múltiplos

Se listan los múltiplos de cada número (ver
`../divisibilidad/multiplos/teoria.md`) hasta encontrar el primero que
coincide en las dos listas. Es directo, pero se puede volver lento si el
MCM es grande.

## Método 2: usando el MCD

Hay un atajo directo, apoyado en el MCD (ver `../mcd/teoria.md`):

**MCM(a, b) = (a × b) ÷ MCD(a, b)**

**Ejemplo**: MCD(4, 6) = 2. MCM(4, 6) = (4 × 6) ÷ 2 = 24 ÷ 2 = 12 — mismo
resultado que con la lista de múltiplos, pero sin tener que listar nada.

## Método 3: por factorización prima

Se factoriza cada número, y el MCM es el producto de **todos** los primos
que aparecen en cualquiera de las dos factorizaciones, usando el **mayor**
exponente con el que aparece cada uno (al revés que el MCD, que usaba el
menor).

**Ejemplo**: 4 = 2². 6 = 2 × 3. El mayor exponente del 2 es 2 (en el 4). El
mayor exponente del 3 es 1 (en el 6). MCM = 2² × 3 = 4 × 3 = 12.

## Casos especiales

- El MCM de dos números primos entre sí (MCD = 1) es, directamente, el
  producto de los dos. Ejemplo: MCM(8, 9) = 72.
- El MCM de un número y sí mismo es el propio número.
- El MCM nunca puede ser menor que el más grande de los dos números.
- Si un número es múltiplo del otro, el MCM es el más grande de los dos.

## Para qué sirve

El MCM sirve para sumar o restar fracciones con distinto denominador
(usando el MCM de los denominadores como "común denominador"), y para
saber cuándo dos sucesos periódicos coinciden de nuevo (dos colectivos que
pasan cada tantos minutos, dos luces que titilan con distinto ritmo...).
