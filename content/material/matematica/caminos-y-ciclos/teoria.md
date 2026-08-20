# Matemática — Caminos y ciclos (teoria)

> Tema del MAPA: `GRAF3` (Tronco 4.c). Depende de
> `../grafos-dirigidos-no-dirigidos-y-ponderados/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — un ciclo ES un camino particular, es una sola idea
progresiva, no necesita varias diapositivas.

---

## Qué es un camino

Un **camino** es una secuencia de vértices donde cada par consecutivo
está conectado por una arista, sin repetir ningún vértice — una forma
de "ir de un vértice a otro" a través del grafo.

```
A ─── B ─── C ─── D
```

El camino de A a D (`A, B, C, D`) usa 3 aristas.

## Longitud de un camino

La **longitud** de un camino es la cantidad de **aristas** que
recorre — **no** la cantidad de vértices. Un camino con 4 vértices
tiene longitud 3 (una arista menos que la cantidad de vértices,
porque cada arista conecta un par consecutivo).

En un grafo **ponderado** (`../grafos-dirigidos-no-dirigidos-y-ponderados/`),
el "costo" de un camino es la **suma de los pesos** de esas aristas,
no simplemente la cantidad de ellas.

## El camino más corto

Entre dos vértices puede haber **varios** caminos posibles — el
**camino más corto** es el de menor longitud (o menor peso total, si
el grafo es ponderado). Puede no ser único: a veces existen dos o más
caminos distintos con exactamente la misma longitud mínima.

## Qué es un ciclo

Un **ciclo** es, literalmente, un camino particular: uno que **empieza
y termina en el mismo vértice**, sin repetir ningún otro vértice en el
medio (y con al menos 3 vértices distintos involucrados, para que no
sea sólo ir y volver por la misma arista).

```
A ─── B
│     │
D ─── C
```

`A, B, C, D, A` es un ciclo: vuelve al punto de partida después de
recorrer 4 aristas.

## Grafo acíclico

Un grafo es **acíclico** si no contiene **ningún** ciclo — no importa
por dónde se empiece a recorrer, nunca se puede volver al punto de
partida sin repetir una arista ya usada. Es el prerrequisito directo
de `../arboles-grafo-sin-ciclos/`, el módulo que sigue.

## Grafo conexo

Un grafo es **conexo** cuando existe **al menos un camino** entre
cualquier par de vértices — no hay ningún vértice (ni grupo de
vértices) completamente aislado del resto. Un grafo puede tener
ciclos y seguir siendo conexo, o no tener ciclos y no ser conexo (si
está partido en varios pedazos sin conexión entre sí) — "conexo" y
"acíclico" son dos propiedades **independientes**, aunque ambas se
combinan en la definición de árbol del módulo que sigue.

## Para qué sirve

Detectar ciclos es crítico en muchos sistemas reales: una dependencia
circular en software (el módulo A necesita al B, que necesita al C,
que necesita al A) es un ciclo que impide compilar o resolver el
orden de carga; un circuito eléctrico necesita un ciclo cerrado para
que fluya la corriente; una red de tuberías con un ciclo permite
rutas alternativas si una cañería se rompe. Encontrar el camino más
corto (con o sin pesos) es, además, exactamente el problema que
resuelven los algoritmos de `../algoritmos-de-recorrido-bfs-dfs/`.
