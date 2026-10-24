# Informática — Estructuras de control bucles (teoría)

> Tema del MAPA: `estructuras_de_control_bucles`. Depende de `../condiciones_y_decisiones/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Explicación de cómo funcionan los bucles en programación y sus aplicaciones.

---

## 1. ¿Qué es un bucle?

Un **bucle** es una estructura que permite repetir un bloque de instrucciones varias veces, según una condición o un número definido de pasos. La clave está en la **iteración**, término que se usa para describir cada repetición del ciclo. Por ejemplo: si un programa debe mostrar los números del 1 al 10, el bucle se encarga de ejecutar esa tarea sin escribir diez veces lo mismo.

Los bucles son esenciales cuando hay tareas repetitivas, como procesar listas, validar datos o generar patrones. Sin ellos, la programación sería muy más tediosa y propensa a errores.

---

## 2. Tipos de bucles: `for` vs `while`

En programación, los bucles se dividen en dos tipos principales según su uso:

- **Bucle `for`**: Se usa cuando **se conoce de antemano** cuántas veces debe repetirse el bloque de código. Por ejemplo, recorrer una lista de 5 elementos o contar hasta un número específico.

- **Bucle `while`**: Funciona mientras se cumple una **condición lógica** (verdadera). Es útil cuando no sabemos a priori cuántas veces se ejecutará el ciclo. Por ejemplo, esperar que un usuario ingrese un dato válido o procesar eventos en tiempo real.

La diferencia clave es que el `for` controla la cantidad de iteraciones desde el principio, mientras que el `while` depende de una condición que puede cambiar durante la ejecución.

---

## 3. Componentes del bucle `for`

El bucle `for` tiene tres partes fundamentales, aunque su sintaxis varía según el lenguaje de programación. En general:

1. **Inicialización**: Define una variable de control (como `i = 0`) que rastrea la iteración actual.
2. **Condición**: Determina si el ciclo debe continuar (ejemplo: `i < 5`).
3. **Actualización**: Modifica la variable de control después de cada repetición (ejemplo: `i += 1`).

Por ejemplo, en pseudocódigo:
```plaintext
for i desde 0 hasta 4 paso 1 hacer
    mostrar(i)
fin para
```
Aquí, `i` es la **variable de control**, que empieza en 0 y aumenta en 1 por cada iteración. La condición (`i < 5`) garantiza que el ciclo se repita exactamente cinco veces.

---

## 4. ¿Cuándo usar un bucle?

La elección entre `for` y `while` depende del problema a resolver:

- Usa **`for`** cuando haya un **número fijo de iteraciones**, como recorrer una lista o generar números secuenciales.
- Usa **`while`** cuando la cantidad de repeticiones dependa de un **estado dinámico**, como esperar una entrada del usuario o procesar datos hasta que se cumpla una condición.

Un mal uso podría llevar a bucles infinitos (ejemplo: `while true` sin una salida definida), lo cual detiene el programa. Por eso es crucial asegurar que, en algún momento, la condición deje de cumplirse o el contador alcance su límite.

---

## N. Conexión con lo que sigue

Este tema se conecta directamente con `../manejo_de_listas/`, donde los bucles son fundamentales para recorrer y manipular elementos en estructuras como listas, arreglos o diccionarios.