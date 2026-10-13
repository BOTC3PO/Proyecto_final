# Informática — Operadores aritméticos (teoria)

> Tema agregado a `informatica/` (ver `../dependencias.md`). Depende de `../variables-y-tipos-de-dato/`. Borrador de partida: `_borradores-gemma/materias-nuevas/informatica/operadores-aritmeticos/` (reescrito a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables: los operadores, la precedencia, el resto y la división entera, y las asignaciones compuestas.

---

## 1. Los operadores básicos

Un **operador aritmético** hace una cuenta con números y devuelve otro número.

| Operador | Hace | Ejemplo | Resultado |
|:--|:--|:--|:--|
| `+` | suma | `7 + 2` | 9 |
| `-` | resta | `7 - 2` | 5 |
| `*` | multiplica | `7 * 2` | 14 |
| `/` | divide | `7 / 2` | 3.5 (o 3, según el lenguaje) |
| `%` | resto (módulo) | `7 % 2` | 1 |
| `**` o `^` | potencia | `2 ** 5` | 32 |

La potencia se escribe distinto según el lenguaje: `**` en Python y JavaScript, `^` en Excel y PSeInt, y una función (`pow`) en C o Java.

---

## 2. Precedencia: qué se calcula primero

Igual que en matemática: primero los **paréntesis**, después la **potencia**, después `*`, `/` y `%`, y al final `+` y `-`. Los de la misma prioridad se resuelven de izquierda a derecha.

- `2 + 3 * 4` da 14 (primero 3 * 4).
- `(2 + 3) * 4` da 20.
- `a + b + c / 3` **no** es el promedio: divide solo `c`. El promedio es `(a + b + c) / 3`.

Los operadores relacionales (`>`, `==`) se evalúan **después** de los aritméticos.

---

## 3. División y resto

- **División entera.** En C y Java, si los dos números son enteros, `7 / 2` da **3** (se descarta la parte decimal). En Python 3, `7 / 2` da 3.5 y la división entera se escribe `7 // 2`.
- **Resto (módulo).** `17 % 5` da 2, porque 17 = 3 x 5 + 2. Sirve para saber si un número es **par** (`n % 2 == 0`), para dar la vuelta en ciclos (horas, días de la semana) y para repartir cosas en grupos.
- **Con números negativos el resto cambia según el lenguaje:** `-7 % 3` da 2 en Python y -1 en C o Java.
- **Dividir por cero** da error o un valor especial (`inf`, `NaN`): hay que evitarlo antes de dividir.

---

## 4. Asignaciones compuestas

`x = x + 1` no es una ecuación: es **asignación**. Se calcula el lado derecho con el valor actual y el resultado se guarda en `x`. Se puede abreviar:

| Forma larga | Forma corta |
|:--|:--|
| `x = x + 3` | `x += 3` |
| `x = x - 3` | `x -= 3` |
| `x = x * 3` | `x *= 3` |
| `x = x / 3` | `x /= 3` |
| `x = x + 1` | `x += 1` (y `x++` en C, Java y JavaScript) |

**Cuidado con mezclar tipos.** `5 + 2.0` da decimal (7.0). En JavaScript, `"5" + 2` da el texto `"52"` (el `+` también une textos) pero `"5" - 2` da 3.
