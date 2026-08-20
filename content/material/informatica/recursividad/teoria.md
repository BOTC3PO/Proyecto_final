# Informática — Recursividad (teoría)

> Tema del MAPA: `informatica/recursividad`. Depende de funciones basicas (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Técnica de programación donde una función se llama a sí misma para resolver problemas complejos mediante subproblemas más simples.

---

## 1. ¿Qué es la recursividad?

La recursividad es un mecanismo en el que una función se invoca a sí misma durante su ejecución, dividiendo el problema original en partes menores y similares. Este enfoque es útil cuando un problema puede reescribirse de forma más simple al reducir sus parámetros, siempre que exista un límite claro para detener las llamadas.

Por ejemplo, si se quiere calcular el factorial de un número `n`, la función podría llamar a sí misma con `n-1` hasta llegar a `0`, que es el caso base. Sin embargo, si no hay una condición definida para parar, la recursividad genera un bucle infinito, lo cual colapsa la memoria del programa.

---

## 2. El caso base: punto de parada

Todo algoritmo recursivo requiere al menos **un caso base**, es decir, una condición que detiene las llamadas a sí misma. Este elemento evita que la función se ejecute indefinidamente y permite devolver un valor concreto para resolver el problema.

Un ejemplo clásico es el cálculo de Fibonacci: si `n` es menor o igual a 1, la función devuelve `1`. Si no, llama a sí misma con `n-1` y `n-2`, acercándose al caso base. Sin este punto final, la recursividad no terminaría nunca.

---

## 3. Caso recursivo: cómo se divide el problema

La parte de la función donde ocurre la llamada propia se llama **caso recursivo**. Aquí, el problema original se descompone en subproblemas más pequeños y similares al original, acercándose al caso base.

Por ejemplo, para calcular `potencia(base, exponente)`, si el exponente es mayor que cero, la función llama a sí misma con `exponente - 1` y multiplica por `base`. Este proceso se repite hasta que el exponente sea cero (caso base), momento en el cual se devuelve `1`.

---

## 4. Flujo de ejecución: cómo se procesa

Cuando una función recursiva se llama, cada invocación genera un nuevo "marco" en la pila de ejecución. Estos marcos guardan los valores actuales de las variables y el estado del programa. Al llegar al caso base, los resultados comienzan a devolverse hacia arriba, acumulando los cálculos.

[IMAGEN: Diagrama de una pila de llamadas recursivas con flechas que muestran la descomposición del problema hasta alcanzar el caso base]

Este flujo puede volverse ineficiente si hay muchos marcos en la pila, lo cual suele suceder en problemas como el cálculo de Fibonacci sin optimización. Para evitar esto, se usan técnicas como el **memoization** (guardar resultados previos).

---

## N. Conexión con lo que sigue

Este tema conecta directamente con iteracion vs recursividad, donde se comparará la recursividad con las estructuras iterativas para resolver problemas similares. También será clave en ejercicios como el recorrido de árboles o el cálculo de series matemáticas complejas.