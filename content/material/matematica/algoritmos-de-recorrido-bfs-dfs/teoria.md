# Matemática — Algoritmos de recorrido: BFS y DFS (teoria)

> Tema del MAPA: `GRAF5` (Tronco 4.c). Depende de
> `../caminos-y-ciclos/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — BFS y DFS se enseñan siempre comparados entre
sí, con un ejemplo compartido — conviene mostrarlos en pasos
paralelos.

---

## Qué es un algoritmo de recorrido

Un **algoritmo de recorrido** visita **sistemáticamente** todos los
vértices alcanzables de un grafo, empezando desde un vértice inicial,
**sin repetir** ninguno — la forma automática de explorar un grafo
completo (o encontrar caminos dentro de él) sin dejar nada afuera ni
visitar dos veces lo mismo.

Los dos algoritmos estándar son **BFS** y **DFS**, que exploran en
**órdenes distintos**.

## El grafo de ejemplo

Para comparar ambos algoritmos, se usa el mismo grafo no dirigido en
todo este módulo:

```
    A
   / \
  B   C
  |   |
  D   E
  |
  F
```

Aristas: A-B, A-C, B-D, C-E, D-F.

## BFS: recorrido en anchura (Breadth-First Search)

BFS explora **nivel por nivel**: primero visita todos los vecinos
directos del vértice inicial, después los vecinos de esos vecinos, y
así sucesivamente — nunca avanza a un nivel más lejano sin haber
terminado el nivel actual. Internamente usa una **cola** (FIFO: el
primero en entrar es el primero en salir).

**BFS desde A** (visitando los vecinos en orden alfabético cuando hay
más de uno disponible): `A, B, C, D, E, F`.

**Propiedad clave**: en un grafo **no ponderado**, BFS **siempre**
encuentra el camino **más corto** (menos aristas) desde el vértice
inicial a cualquier otro — porque visita los vértices en el orden
exacto de su distancia (en cantidad de aristas) al inicio.

## DFS: recorrido en profundidad (Depth-First Search)

DFS se mete **lo más profundo posible** por una rama antes de
retroceder (*backtrack*) y probar otra rama distinta. Internamente usa
una **pila** (LIFO: el último en entrar es el primero en salir) o,
más comúnmente, **recursión** (que es, en el fondo, una pila
implícita).

**DFS desde A** (mismo criterio, primer vecino no visitado en orden
alfabético): `A, B, D, F, C, E` — se mete por la rama de B hasta el
final (llega hasta F) antes de volver a probar la rama de C.

**DFS no garantiza** el camino más corto — puede llegar a un vértice
lejano recorriendo un camino innecesariamente largo, antes de
descubrir que había un camino más directo por otra rama.

## Comparación directa

| | BFS | DFS |
|---|---|---|
| Estructura interna | Cola (FIFO) | Pila (LIFO) / recursión |
| Orden de exploración | Nivel por nivel (ancho primero) | Rama por rama (profundo primero) |
| Camino más corto (no ponderado) | Lo garantiza | No lo garantiza |
| Uso típico | Redes sociales, laberintos, enrutamiento | Árboles de decisión completos, detectar ciclos |

## Para qué sirve

Son el algoritmo real detrás de "Enrutamiento" (redes de computadoras,
Tronco 10.b): un router que busca el camino más corto para un paquete
de datos está, literalmente, corriendo un BFS sobre el grafo de la
red — no memoriza rutas de antemano, las **descubre** recorriendo el
grafo. BFS también es la base de "grados de separación" en redes
sociales (¿cuántos saltos hay entre dos personas?), y DFS es la base
de explorar exhaustivamente un árbol de decisiones o detectar
dependencias circulares (ciclos) en un grafo.
