# Matemática — Árboles: grafo conexo sin ciclos (teoria)

> Tema del MAPA: `GRAF4` (Tronco 4.c). Depende de
> `../grafos-vertices-y-aristas/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — la definición formal, el vocabulario de raíz/hoja
y las aplicaciones reales conviene mostrarlos por separado.

---

## Qué es un árbol

Un **árbol** es un grafo que cumple **las dos propiedades** de
`../caminos-y-ciclos/` **a la vez**: es **conexo** (hay un camino
entre cualquier par de vértices) y es **acíclico** (no tiene ningún
ciclo). Ninguna de las dos propiedades sola alcanza — un grafo puede
ser conexo con ciclos, o acíclico pero desconectado; **árbol** es la
combinación exacta de ambas.

```
        A
       / \
      B   C
     / \
    D   E
```

## La propiedad clave: n vértices, n−1 aristas

Un árbol con `n` vértices tiene **exactamente** `n − 1` aristas —
nunca más, nunca menos:

- **Menos** de `n − 1` aristas: no alcanzan para conectar todos los
  vértices — el grafo no sería conexo.
- **Más** de `n − 1` aristas: sobra al menos una conexión, y esa
  conexión "de más" necesariamente cierra un ciclo.

Es la razón matemática detrás de por qué un árbol es, en cierto
sentido, la forma **más económica** posible de conectar un conjunto de
vértices: ninguna arista sobra, y ninguna falta.

## Vocabulario cuando se elige una raíz

Cuando se elige un vértice como punto de partida (la **raíz**), el
árbol adquiere vocabulario de jerarquía:

- **Raíz**: el vértice elegido como punto de partida (arriba en el
  dibujo, por convención).
- **Padre / hijo**: si hay una arista directa entre dos vértices y uno
  está más cerca de la raíz, el más cercano es el **padre** del otro
  (su **hijo**).
- **Hoja**: un vértice sin ningún hijo (el final de una rama).
- **Subárbol**: cualquier vértice, junto con todos sus descendientes,
  forma un árbol más chico dentro del árbol completo.

**Árbol binario**: un caso particular donde cada vértice tiene **como
máximo 2 hijos** — la estructura central detrás de muchas estructuras
de datos y algoritmos de búsqueda eficientes.

## Relación con estructuras de datos

**Hueco real**: el diagrama de `troncos.md` también marca que
"Estructuras de datos" (Informática) es prerrequisito de este módulo
— esa carpeta todavía no existe en este repo, así que el concepto se
introduce acá de cero. Una **lista enlazada**, una **pila** o una
**cola** son, en el fondo, árboles "degenerados": cada nodo tiene como
mucho un solo hijo, así que el árbol completo es una única cadena
lineal, sin ninguna ramificación. Un **árbol binario de búsqueda**
(cada nodo con hasta 2 hijos, ordenados) es el caso central que
justifica por qué "árbol" es una estructura de datos tan usada: permite
buscar, insertar y borrar de forma mucho más eficiente que recorrer
una lista entera.

## Aplicaciones reales

- **Sistema de archivos**: cada carpeta puede contener subcarpetas —
  la carpeta raíz del disco, con todo lo demás colgando de ella, es
  literalmente un árbol.
- **Árbol genealógico**: cada persona (nodo) conectada con sus hijos.
- **Árbol de decisión**: cada nodo es una pregunta o decisión, cada
  rama una respuesta posible, cada hoja un resultado final.
- **Filogenia** (Biología): un árbol evolutivo agrupa especies según
  su ancestro común, con la misma estructura de raíz-ramas-hojas.

## Para qué sirve

Es la estructura que aparece, con otro nombre, en decenas de
contextos distintos (jerarquías, clasificaciones, estructuras de
datos) — reconocerla como "el mismo objeto matemático" (grafo conexo
sin ciclos) permite reutilizar las mismas herramientas (como los
algoritmos de recorrido del módulo que sigue) en todos esos contextos
a la vez.
