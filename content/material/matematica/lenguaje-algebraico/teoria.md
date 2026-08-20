# Matemática — Lenguaje algebraico: traducir enunciado a expresión (teoría)

> Tema del MAPA: `A1` (Tronco 2 — Algebraico), raíz del tronco. Depende de
> `../jerarquia-operaciones/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (para qué sirve, tabla de
frases típicas, el error de orden en resta/división, ejemplos resueltos,
errores comunes) se siguen mejor divididas.

---

## Para qué sirve

Hasta acá, cada cuenta trabajaba con números concretos: 5 + 3, el doble de
7, la mitad de 20. El lenguaje algebraico permite escribir esa misma idea
para **cualquier** número a la vez, usando una letra (una **variable**) en
lugar de un valor fijo. "El doble de un número" no es una cuenta con un
resultado — es una **receta**: tomá el número que sea, multiplicalo por 2.
Esa receta se escribe 2x, y sirve tanto si x vale 3 como si vale 300.

Traducir un enunciado en palabras a una expresión algebraica es, en el
fondo, el mismo trabajo que hace un traductor entre dos idiomas: cada frase
en castellano tiene una expresión simbólica equivalente, y el orden de las
palabras no siempre coincide con el orden de los símbolos.

## Vocabulario: de la frase a la operación

| Frase | Expresión (con x) |
|---|---|
| Un número | x |
| El doble / el duplo de un número | 2x |
| El triple de un número | 3x |
| La mitad de un número | x / 2 |
| El cuadrado de un número | x² |
| El siguiente de un número | x + 1 |
| El anterior a un número | x − 1 |
| Un número aumentado en 5 / más 5 | x + 5 |
| Un número disminuido en 5 / menos 5 | x − 5 |
| El triple de un número, aumentado en 5 | 3x + 5 |
| El triple de un número aumentado en 5 (todo junto) | 3(x + 5) |
| La suma de dos números | x + y |
| El producto de dos números | x · y |
| La diferencia entre dos números | x − y |
| El cociente entre dos números | x / y |

Las dos últimas filas de la tabla de arriba (con "el triple de...") son el
mismo puñado de palabras, reordenadas, con resultados distintos — es el
punto central de todo el tema.

## El orden importa: cuándo hacen falta paréntesis

Una coma, o la posición de una palabra, puede cambiar por completo qué
operación se aplica a qué:

- **"El triple de un número, aumentado en 5"** — primero se triplica el
  número, y **después** se le suma 5 al resultado: **3x + 5**.
- **"El triple de un número aumentado en 5"** (sin coma, leído como "el
  triple de [un número aumentado en 5]") — primero se aumenta el número en
  5, y **después** se triplica todo ese resultado: **3(x + 5)**.

La regla práctica: si la operación de afuera (triplicar, en este ejemplo)
tiene que aplicarse al resultado completo de la operación de adentro
(aumentar en 5), hace falta un paréntesis. Es la misma jerarquía de
operaciones ya vista (ver `../jerarquia-operaciones/teoria.md`): sin el
paréntesis, "3x + 5" siempre multiplica primero y suma después, nunca al
revés.

## El orden invierte el signo: resta y cociente

En la suma y en el producto, da lo mismo el orden ("la suma de un número y
5" es igual a "la suma de 5 y un número"). En la resta y en el cociente,
**no**: el orden de las palabras dice quién va primero en la cuenta.

- **"Un número disminuido en 5"** / "un número menos 5" → **x − 5** (el
  número es el que pierde 5).
- **"5 disminuido en un número"** / "la diferencia entre 5 y un número" →
  **5 − x** (5 es el que pierde el número).

Es el error más común de todo el tema: traducir "la diferencia entre A y
B" siempre como A − B en ese orden literal — que de hecho es la traducción
correcta (el primero nombrado es el que resta al segundo), pero se
confunde fácil con "un número menos 5", donde "un número" tampoco es
necesariamente el primero que aparece en la frase completa si la frase
arranca con otra palabra.

## Ejemplos resueltos

**"El doble de la suma de un número y 3"**
1. Hay una suma adentro: "un número y 3" → (x + 3)
2. Esa suma completa se duplica: 2 · (x + 3)
3. Expresión final: **2(x + 3)**

**"La mitad de un número, menos 7"**
1. La coma separa: primero la mitad, después se resta 7 al resultado
2. La mitad de un número: x / 2
3. Expresión final: **x/2 − 7**

**"El cuadrado de la diferencia entre un número y 4"**
1. Hay una diferencia adentro: (x − 4)
2. Esa diferencia completa se eleva al cuadrado
3. Expresión final: **(x − 4)²**

## Errores comunes

- Traducir "un número disminuido en 5" como 5 − x en vez de x − 5 (la
  resta no es conmutativa: el orden de la frase importa).
- Olvidar el paréntesis cuando una operación se aplica a un resultado
  compuesto completo ("el triple de [un número aumentado en 5]" sin el
  paréntesis queda igual a "el triple de un número, aumentado en 5" — dos
  frases distintas, misma expresión por error).
- Confundir "el cuadrado de un número" (x²) con "el doble de un número"
  (2x) — son operaciones distintas (potencia vs. multiplicación) que a
  veces se mezclan al traducir rápido.
- Usar la misma letra para dos números distintos que el enunciado nombra
  como diferentes ("la suma de dos números" necesita dos variables, x e y,
  no x y x).
