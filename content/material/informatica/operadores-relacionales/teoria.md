# Informática — Operadores relacionales (teoria)

> Tema agregado a `informatica/` (gap detectado: ni `variables-y-tipos-de-dato` ni `estructuras-de-control-condicionales` nombran los operadores aparte). Depende de `../variables-y-tipos-de-dato/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/informatica/operadores-relacionales/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — tiene varias secciones separables (qué es, la tabla de operadores, igualdad estricta, errores comunes y cuándo usarlos).

---

## 1. Qué es un operador relacional

Un **operador relacional** (o de comparación) toma dos valores y responde una pregunta de sí o no: *¿el primero es mayor que el segundo? ¿son iguales?* La respuesta no es un número ni un texto: es un **booleano** (`verdadero` o `falso`).

Por eso son la base de las **decisiones** de un programa: `si edad >= 18 entonces ...`, `mientras contador < 10 hacer ...`. Una condición no es más que una comparación (o varias combinadas) que da verdadero o falso.

---

## 2. Los seis operadores

Con `x = 5` e `y = 10`:

| Operador | Significa | Ejemplo | Resultado |
|:--|:--|:--|:--|
| `==` | igual a | `x == y` | falso |
| `!=` | distinto de | `x != y` | verdadero |
| `>` | mayor que | `x > y` | falso |
| `<` | menor que | `x < y` | verdadero |
| `>=` | mayor o igual que | `x >= 5` | verdadero |
| `<=` | menor o igual que | `y <= 9` | falso |

**Los símbolos cambian según el lenguaje.** En C, Python, Java y JavaScript la igualdad es `==` y la desigualdad `!=`. En SQL la igualdad es un solo `=` y la desigualdad estándar es `<>` (casi todos los motores aceptan también `!=`). Excel usa `=` y `<>`. PSeInt usa `=` y `<>`. En Bash, para **números**, se escribe con letras: `-eq`, `-ne`, `-lt`, `-gt`, `-le`, `-ge`.

**Comparar textos.** `"casa" == "casa"` es verdadero. Con `<` y `>` los textos se comparan letra por letra según su código, que en la práctica es orden alfabético (con la salvedad de mayúsculas y minúsculas).

**Igualdad estricta en JavaScript.** `==` convierte los tipos antes de comparar (`"5" == 5` da verdadero); `===` compara **valor y tipo** (`"5" === 5` da falso). Casi siempre conviene `===`.

---

## 3. Errores comunes

1. **Confundir asignación con comparación.** `=` asigna un valor a una variable; `==` pregunta si dos valores son iguales. En C, `if (x = 10)` no compara: asigna 10 a `x` y la condición se toma como verdadera. En Python, `if x = 10:` directamente da error.
2. **Rangos al estilo matemático.** `0 < x < 10` no hace lo que esperás en la mayoría de los lenguajes. Hay que hacer **dos comparaciones** y unirlas con el operador lógico "y": `x > 0 && x < 10`.
3. **Comparar decimales con `==`.** Los decimales se guardan con precisión finita: `0.1 + 0.2 == 0.3` suele dar falso. En lugar de `==`, se verifica que la diferencia sea menor que una tolerancia pequeña.
4. **Olvidar si el límite entra o no.** "20.000 o más" es `>= 20000`; "más de 20.000" es `> 20000`. Un `>` de más deja afuera justo al valor del límite.
5. **Comparar objetos.** En Java, `a == b` entre dos objetos pregunta si son **el mismo objeto en memoria**; para comparar el contenido se usa un método como `.equals()`.

**Precedencia.** Los operadores aritméticos se evalúan **antes** que los relacionales: `x + 5 > 10` es `(x + 5) > 10`.

---

## 4. Cuándo usarlos

Usalos para **decidir** (`si`/`if`), **repetir mientras** algo se cumpla (`while`) y **filtrar** datos (por ejemplo, `WHERE salario >= 5000` en SQL). Tené cuidado al comparar decimales, fechas con zona horaria u objetos complejos: ahí conviene usar funciones del lenguaje pensadas para eso.

### Ejemplo: acceso a un sistema

```javascript
let edad = 17;
let saldo = -50;

let esMayor = edad >= 18;   // >= porque 18 ya es mayor de edad
let tieneDeuda = saldo < 0; // < porque 0 no es deuda

if (esMayor && !tieneDeuda) {
  console.log("Acceso concedido");
} else {
  console.log("Acceso denegado");
}
// edad >= 18 es falso, así que muestra: Acceso denegado
```
