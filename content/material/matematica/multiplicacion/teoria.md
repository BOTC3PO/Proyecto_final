# Matemática — Multiplicación (teoría)

> Tema del MAPA: `N3` (Tronco 1 — Numérico), mitad "Multiplicación" —
> separado de "División", que tiene su propia teoría y cuestionario en
> `../division/`. Ver `../../lista-temas-plana.md`, `../../troncos.md` y
> `../dependencias.md` (Multiplicación depende de Conteo y Suma).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** (`TheoryItem.type`), mismo criterio que los 4 temas
anteriores: son varias secciones (qué es, propiedades, tablas, algoritmo en
columna, multiplicar por potencias de 10, estimar) y en diapositivas se
siguen mejor que en un bloque de prosa corrido. El algoritmo en columna es
otra vez candidato a un bloque **LaTeX** (Herramienta interactiva) más
adelante, para alinear los productos parciales — no hace falta para
arrancar.

---

## Qué es la multiplicación

Multiplicar es sumar el mismo número varias veces: 4 × 3 significa "sumar 4
tres veces" (4 + 4 + 4 = 12). Es exactamente lo mismo que el **conteo
salteado** de la teoría de Conteo (ver `../conteo/teoria.md`): contar de 4
en 4 tres veces da 12, el mismo resultado. Los números que se multiplican
se llaman **factores**; el resultado es el **producto**.

## Propiedades

- **Conmutativa**: a × b = b × a — el orden de los factores no cambia el
  resultado (4 × 3 da lo mismo que 3 × 4).
- **Asociativa**: (a × b) × c = a × (b × c) — no importa qué par se
  multiplique primero.
- **Elemento neutro**: a × 1 = a — multiplicar por 1 no cambia nada.
- **Elemento absorbente**: a × 0 = 0 — multiplicar por 0 siempre da 0, sin
  importar el otro factor.
- **Distributiva respecto de la suma**: a × (b + c) = a×b + a×c — repartir
  un factor entre una suma da lo mismo que multiplicar cada término por
  separado y después sumar. Es la propiedad que hace posible multiplicar
  números grandes por partes (ej.: 6 × 23 = 6×20 + 6×3 = 120 + 18 = 138).

## Las tablas de multiplicar

Las tablas (del 1 al 10) son la multiplicación de números de 1 cifra
memorizada de antemano, para no tener que sumar repetidamente cada vez.
Conocerlas de memoria es lo que hace posible el algoritmo en columna con
números más grandes.

## El algoritmo en columna

Para multiplicar un número de varias cifras por otro de una sola cifra, se
multiplica esa cifra por cada cifra del otro número, de derecha a
izquierda, llevando de la misma forma que en la suma: si un producto
parcial da 10 o más, se escribe la cifra de las unidades y se lleva el
resto a la siguiente columna, donde se suma al próximo producto. Para
multiplicar dos números de varias cifras, se repite el procedimiento una
vez por cada cifra del segundo factor (corriendo un lugar hacia la
izquierda cada vez) y se suman todos esos productos parciales al final.

## Multiplicar por 10, 100, 1.000...

Multiplicar por una potencia de 10 es agregar tantos ceros al final como
ceros tenga esa potencia (10 → 1 cero, 100 → 2 ceros...): en realidad, cada
cifra del número se corrió un lugar hacia la izquierda en el valor
posicional (ver `../valor-posicional/teoria.md`), lo que en la escritura se
ve como agregar ceros.

## Estimar antes de multiplicar

Redondear los factores antes de multiplicar (a la decena, centena...) da
un resultado aproximado que sirve para controlar que la cuenta exacta no
tenga un error grosero — un error de multiplicación suele ser mucho más
grande que uno de suma o resta, así que estimar antes ayuda más acá.
