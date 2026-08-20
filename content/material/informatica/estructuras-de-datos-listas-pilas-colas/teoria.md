# Informática — Estructuras de datos: listas, pilas y colas (teoría)

> Tema del MAPA: `informatica/estructuras-de-datos-listas-pilas-colas`. Depende de introduccion a estructuras de datos (ver `../dependencias.md`).

## Tipo de teoría

**Presentación** — Introducción a las estructuras básicas para almacenar y manipular información en programas.

---

## 1. ¿Qué son las estructuras de datos?

Las estructuras de datos son herramientas que permiten organizar, almacenar y recuperar información de manera eficiente dentro de un programa. Cada estructura tiene reglas específicas sobre cómo se accede a sus elementos: si se puede modificar cualquier posición, si los elementos entran o salen por un solo lado, o si hay orden en el procesamiento.

Por ejemplo, una **lista** permite agregar, eliminar o modificar elementos en cualquier posición. En cambio, una **pila** y una **cola** tienen reglas estrictas: la pila sigue el principio de *último en entrar, primero en salir* (LIFO), mientras que la cola funciona con *primero en entrar, primero en salir* (FIFO). Estas diferencias definen cómo se usan según las necesidades del programa.

---

## 2. Pilas: el orden inverso

Una **pila** es como una pila de platos: siempre se agrega un nuevo elemento encima y se retira el que está arriba. Esta lógica se llama **LIFO (Last In, First Out)**. En términos técnicos:

- **Push**: operación para agregar un elemento a la cima.
- **Pop**: operación para eliminar el elemento de la cima.

Las pilas son útiles cuando necesitamos revertir el orden de datos o mantener un historial (como en navegadores web, donde se vuelve al estado anterior al presionar "atras").

[IMAGEN: Diagrama de una pila con elementos A, B, C. El último elemento (C) es el primero en salir.]

---

## 3. Colas: el orden natural

Las **colas** funcionan como filas de espera: los elementos entran por un extremo y salen por el otro, respetando el orden de llegada. Este principio se llama **FIFO (First In, First Out)**.

- **Enqueue**: agregar un elemento al final de la cola.
- **Dequeue**: eliminar el primer elemento de la cola.

Son ideales para tareas que requieren procesamiento secuencial, como impresoras que atienden solicitudes en el orden recibido o sistemas de mensajería donde los mensajes se entregan según su llegada.

[IMAGEN: Diagrama de una cola con elementos A, B, C. El primer elemento (A) es el primero en salir.]

---

## 4. Listas: flexibilidad y acceso directo

Las **listas** son estructuras más versátiles que pilas o colas. Permiten:

- Acceder a cualquier elemento mediante su posición (índice).
- Insertar o eliminar elementos en cualquier lugar.
- No seguir reglas de entrada/salida predefinidas.

A diferencia de las otras dos, no tienen un orden fijo para procesar sus elementos. Se usan cuando se necesita dinamismo: por ejemplo, gestionar una lista de tareas pendientes donde pueden agregarse o eliminarse elementos en cualquier momento.

[IMAGEN: Comparación entre pila, cola y lista con ejemplos de operaciones.]

---

## N. Conexión con lo que sigue

Este tema es el punto de partida para entender estructuras más complejas, como árboles y grafos, que dependen de principios similares a los de pilas, colas o listas. Ver estructuras de datos avanzadas.