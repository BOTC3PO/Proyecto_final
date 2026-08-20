# Informática — Estructuras de control condicionales (teoría)

> Tema del MAPA: `informatica/estructuras-de-control-condicionales`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Introducción a las estructuras que permiten tomar decisiones en un programa según condiciones lógicas.

---

## 1. ¿Qué son las estructuras condicionales?

Las estructuras condicionales son herramientas fundamentales en programación para decidir qué bloque de código se ejecuta dependiendo de si una **condición** es verdadera o falsa. A diferencia de los bucles, que repiten instrucciones, las condicionales **dirigen el flujo del programa** hacia un camino u otro según criterios definidos. Por ejemplo: si un usuario ingresa una contraseña correcta, se le permite acceder; en caso contrario, se muestra un mensaje de error.

Estas estructuras suelen comenzar con palabras clave como `if` (si), seguidas de una expresión lógica que retorna un valor booleano (`true` o `false`). La elección del camino depende **exclusivamente** de ese resultado.

---

## 2. ¿Cómo se evalúa la condición?

Para que un bloque de código asociado a una estructura condicional se ejecute, la expresión evaluada debe resultar en **verdadero** (`true`). Esto implica que cualquier operación dentro del `if` (como comparaciones, operadores lógicos o funciones de validación) debe devolver explícitamente un valor booleano.

Por ejemplo:
```python
edad = 18
if edad >= 18:
    print("Puede votar")
```
Aquí, la condición `edad >= 18` se evalúa como `true`, por lo que el mensaje se imprime. Si la edad fuera menor, la instrucción no se ejecutaría.

---

## 3. El complemento: ¿qué pasa si la condición falla?

Cuando una condición no se cumple (es decir, devuelve `false`), el programa puede seguir un camino alternativo mediante la palabra clave `else`. Este mecanismo permite **definir una respuesta por defecto** cuando el caso principal no ocurre.

Ejemplo:
```python
if contraseña == "secreto":
    print("Acceso concedido")
else:
    print("Contraseña incorrecta")
```
En este caso, si la contraseña ingresada no es "secreto", se ejecuta el bloque `else`, garantizando que siempre haya una acción definida.

---

## 4. Combinando condiciones con operadores lógicos

Las estructuras condicionales pueden manejar situaciones más complejas al usar **operadores lógicos** como `and` (y), `or` (o) y `not` (no). Estos permiten combinar múltiples expresiones booleanas en una sola condición.

Ejemplo:
```python
if (edad >= 18) and (tiene_documento == True):
    print("Puede votar")
```
Acá, ambas condiciones deben ser verdaderas para que se cumpla el `if`. Si solo una falla, el bloque no se ejecuta.

---

## N. Conexión con lo que sigue

Este tema es la base para entender estructuras más avanzadas como los bucles condicionales (`while`) o las decisiones anidadas, abordadas en estructuras de control repetitivas.