# Informática — Operadores lógicos (teoria)

> Tema agregado a `informatica/` (ver `../dependencias.md`). Depende de `../variables-y-tipos-de-dato/`, `../algebra-booleana/` y de `../operadores-relacionales/`. Borrador de partida: `_borradores-gemma/materias-nuevas/informatica/operadores-logicos/` (reescrito a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables: los tres operadores, sus tablas, símbolos por lenguaje, De Morgan y cortocircuito.

---

## 1. Para qué sirven

Los operadores relacionales responden una pregunta (`edad >= 18`). Los **operadores lógicos** sirven para **combinar** esas respuestas: *"es mayor de edad **y** tiene entrada"*, *"es jubilado **o** compra los martes"*, *"**no** llueve"*. Trabajan con valores booleanos y devuelven un booleano. Son la aplicación directa del álgebra booleana (`../algebra-booleana/`).

---

## 2. Los tres operadores y sus tablas

| A | B | A **Y** B | A **O** B |
|:--|:--|:--|:--|
| verdadero | verdadero | verdadero | verdadero |
| verdadero | falso | falso | verdadero |
| falso | verdadero | falso | verdadero |
| falso | falso | falso | falso |

| A | **NO** A |
|:--|:--|
| verdadero | falso |
| falso | verdadero |

- **Y** (AND): se tienen que cumplir **las dos**.
- **O** (OR): alcanza con que se cumpla **una**.
- **NO** (NOT): invierte el valor.

**Símbolos.** C, Java y JavaScript: `&&`, `||`, `!`. Python: `and`, `or`, `not`. SQL: `AND`, `OR`, `NOT`. Ojo: `&` y `|` (uno solo) son operaciones **bit a bit**, otra cosa.

---

## 3. Condiciones compuestas y rangos

- Estar **en** un rango: `x >= 1 && x <= 10` (las dos a la vez).
- Estar **fuera** de un rango: `x < 1 || x > 10` (una u otra).
- `0 < x < 10` no se escribe así en casi ningún lenguaje: hay que usar el Y.

**Precedencia.** El Y se evalúa antes que el O (como el producto antes que la suma): `a || b && c` es `a || (b && c)`. Ante la duda, usá paréntesis.

---

## 4. Leyes de De Morgan

Sirven para simplificar condiciones con NO:

- `!(A && B)` es lo mismo que `!A || !B`
- `!(A || B)` es lo mismo que `!A && !B`

Ejemplo: "no (llueve o hace frío)" equivale a "no llueve **y** no hace frío".

---

## 5. Cortocircuito

En `A && B`, si A es falso, ya se sabe que el resultado es falso y la mayoría de los lenguajes **no evalúan B**. En `A || B`, si A es verdadero, tampoco se evalúa B. Se aprovecha para evitar errores: `n != 0 && 100 / n > 5` nunca divide por cero, y `i < largo && lista[i] == x` nunca se sale de la lista.

**Qué cuenta como verdadero.** Depende del lenguaje: en C y Python, el 0 cuenta como falso; en otros (Java) la condición tiene que ser estrictamente booleana.
