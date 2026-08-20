# Informática — Memoria RAM, caché y jerarquía (teoría)

> Tema del MAPA: `informatica/memoria-ram-cache-jerarquia`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Explicación sobre cómo funciona la jerarquía de memoria en una computadora, el rol de la RAM y el caché.

---

## 1. La jerarquía de memoria: velocidad vs. capacidad

La jerarquía de memoria está diseñada para equilibrar dos variables clave: **velocidad** y **capacidad**. En una computadora moderna, los datos fluyen desde la CPU hasta el almacenamiento secundario (como un disco duro) pasando por varios niveles intermedios. Cada nivel tiene características distintas: cuanto más cerca está de la CPU, más rápido es el acceso a sus datos, pero menor su capacidad y mayor su costo.

En el extremo superior de esta jerarquía se encuentra la **memoria caché**, una capa muy rápida que almacena copias de los datos más frecuentemente usados. A continuación está la **RAM (memoria principal)**, que es más lenta que la caché pero tiene mayor capacidad y permite el acceso aleatorio a sus datos. Por último, en el extremo opuesto, se encuentra el **almacenamiento secundario** (disco duro o SSD), que aunque ofrece una gran cantidad de espacio, su velocidad es significativamente menor.

[IMAGEN: Jerarquía de memoria con niveles desde CPU a disco]

---

## 2. ¿Por qué la RAM es volátil?

La **RAM (Random Access Memory)** es un tipo de memoria **volátil**, lo que significa que pierde su contenido cuando se corta el suministro eléctrico. Esta característica está ligada al modo en que funciona: los datos se guardan en **capacitores** que necesitan energía constante para mantener la carga. Sin corriente, esos capacitores se descargan y los datos desaparecen.

Este comportamiento contrasta con el de los discos duros o SSDs, que almacenan información de forma no volátil (no pierden datos al apagarse). La volatilidad de la RAM es una ventaja para ciertas tareas, ya que permite un acceso rápido y mutable a los datos durante el procesamiento, pero también implica que su contenido debe ser constantemente recargado desde otro almacenamiento.

---

## 3. El rol del caché en la performance

El **caché** es una capa de memoria ubicada físicamente muy cerca de los núcleos de la CPU y está diseñada para reducir el tiempo de acceso a datos críticos. Existen varios niveles: **L1, L2 y L3**, cada uno con diferencias en velocidad, tamaño y proximidad al procesador.

- **Caché L1**: Es el más rápido, pero también el más pequeño. Se encuentra integrado directamente dentro del núcleo de la CPU.
- **Caché L2**: Más grande que el L1, pero un poco más lento. Puede estar en el mismo chip que la CPU o en una capa adyacente.
- **Caché L3**: El más grande de todos y compartido entre varios núcleos. Es más lento que el L1 y L2, pero aún mucho más rápido que la RAM.

[IMAGEN: Comparación visual de los niveles L1, L2 y L3 en una CPU]

---

## 4. Cómo interactúan los niveles de memoria

La jerarquía de memoria no funciona como un sistema aislado: cada nivel complementa al anterior. Por ejemplo, cuando la CPU necesita acceder a un dato:

1. Primero busca en el **caché L1**: si lo encuentra (*cache hit*), el acceso es casi instantáneo.
2. Si no está allí, pasa al **L2** y luego al **L3**, con tiempos de latencia crecientes.
3. Si el dato no se encuentra en ningún nivel de caché, la CPU recurre a la **RAM**.
4. En casos extremos, si el dato no está en RAM, se busca en el **almacenamiento secundario** (disco o SSD), lo que puede tomar milisegundos.

Este diseño optimiza el rendimiento: los datos más usados están en niveles rápidos, mientras que la memoria de menor velocidad pero mayor tamaño sirve como respaldo. La eficiencia de esta estructura es clave para el funcionamiento fluido de las computadoras modernas.

---

## N. Conexión con lo que sigue

Este tema se relaciona con optimizacion de sistemas, donde se analiza cómo la jerarquía de memoria influye en el diseño de algoritmos y la gestión de recursos del sistema operativo.