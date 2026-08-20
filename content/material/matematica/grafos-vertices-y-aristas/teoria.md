# Matemática — Grafos: vértices y aristas (teoria)

> Tema del MAPA: `GRAF1` (Tronco 4.c). Depende de
> `../conjuntos-pertenencia-e-inclusion/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — vocabulario, ejemplos reales y la fórmula de
suma de grados son tres pasos separables.

---

## Qué es un grafo

Un **grafo** es una estructura formada por dos conjuntos: un conjunto
de **vértices** (o nodos — los "puntos") y un conjunto de **aristas**
(o bordes — las "conexiones" entre pares de vértices). Es, en el
fondo, la misma idea de `../conjuntos-pertenencia-e-inclusion/`
aplicada a modelar **conexiones** en vez de pertenencia: en lugar de
preguntar "¿este elemento pertenece a este conjunto?", un grafo
pregunta "¿estos dos elementos están conectados entre sí?".

```
      A ─── B
      │     │
      D ─── C
```

Acá los vértices son `{A, B, C, D}` y las aristas son
`{AB, BC, CD, DA}` (cada arista conecta un par de vértices).

## Vocabulario básico

- **Vértice** (o nodo): cada "punto" del grafo.
- **Arista** (o borde): cada conexión entre dos vértices.
- **Adyacentes**: dos vértices son adyacentes si hay una arista directa
  entre ellos (también se dice que son "vecinos").
- **Grado de un vértice**: la cantidad de aristas que tocan a ese
  vértice. En el ejemplo de arriba, cada vértice tiene grado 2 (cada
  uno conecta con exactamente otros dos).

## La suma de los grados siempre es par

Cada arista conecta exactamente 2 vértices, así que aporta 1 al grado
de cada uno de sus dos extremos — **2 en total**. Sumando los grados
de **todos** los vértices del grafo, cada arista queda contada
exactamente dos veces:

```
suma de todos los grados = 2 × cantidad de aristas
```

Esta propiedad (a veces llamada "lema del apretón de manos" — si cada
arista fuera un saludo de manos entre dos personas, la cantidad total
de manos dadas siempre es el doble de la cantidad de saludos) implica
que la suma de los grados de un grafo **siempre es un número par**,
sin excepción.

## Formas de representar un grafo

- **Dibujo**: puntos y líneas, como el ejemplo de arriba — intuitivo,
  pero poco práctico para grafos grandes.
- **Lista de aristas**: cada arista como un par de vértices, por
  ejemplo `[(A,B), (B,C), (C,D), (D,A)]`.
- **Matriz de adyacencia**: una tabla donde la celda `(i,j)` vale 1 si
  hay arista entre el vértice `i` y el `j`, 0 si no — la forma que más
  se usa para procesar grafos por computadora.

## Ejemplos reales

- **Red social**: cada persona es un vértice, cada relación de
  amistad/seguimiento es una arista.
- **Mapa de rutas**: cada ciudad es un vértice, cada camino directo
  entre dos ciudades es una arista.
- **Red de computadoras**: cada dispositivo es un vértice, cada cable o
  conexión inalámbrica directa es una arista.

## Para qué sirve

Es la estructura matemática base que sostiene, sin nombrarla siempre
así, a "Enrutamiento" (redes de computadoras, Tronco 10.b) y a
"Escala de un mapa"/distribución de biomas (que ya piensan al
territorio como puntos conectados) — el vocabulario común (vértice,
arista, grado) que se retoma en los módulos que siguen para clasificar
tipos de grafos y sus recorridos.
