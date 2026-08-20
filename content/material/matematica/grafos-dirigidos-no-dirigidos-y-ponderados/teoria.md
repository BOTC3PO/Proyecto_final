# Matemática — Grafos dirigidos, no dirigidos y ponderados (teoria)

> Tema del MAPA: `GRAF2` (Tronco 4.c). Depende de
> `../grafos-vertices-y-aristas/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — tres clasificaciones distintas del mismo objeto
(la arista), mejor mostradas una por una.

---

## Grafos no dirigidos

En un grafo **no dirigido**, cada arista es **simétrica**: si hay una
conexión entre A y B, se puede recorrer en cualquiera de los dos
sentidos indistintamente — "A conectado con B" es exactamente lo
mismo que "B conectado con A". Es el tipo de grafo por defecto de
`../grafos-vertices-y-aristas/`.

**Ejemplos reales**: una amistad mutua en una red social, una calle de
doble mano, un cable de red entre dos computadoras.

## Grafos dirigidos (digrafos)

En un grafo **dirigido**, cada arista tiene un **sentido**: una
conexión de A hacia B (se dibuja con una flecha, `A → B`) **no**
implica que exista la conexión inversa `B → A`.

**Ejemplos reales**: "seguir" a alguien en una red social (que vos
sigas a alguien no significa que esa persona te siga a vos), una calle
de un solo sentido, un enlace de una página web hacia otra (que la
página A enlace a la B no implica que B enlace a A).

### Grado de entrada y grado de salida

En un grafo dirigido, el "grado" de `../grafos-vertices-y-aristas/` se
separa en dos:

- **Grado de entrada** (in-degree): cuántas aristas **llegan** a ese
  vértice.
- **Grado de salida** (out-degree): cuántas aristas **salen** de ese
  vértice.

Por ejemplo, un perfil con muchos seguidores pero que sigue a poca
gente tiene grado de entrada alto y grado de salida bajo.

## Grafos ponderados

En un grafo **ponderado**, cada arista tiene un **peso** (un número)
asociado — una distancia, un costo, un tiempo, una capacidad. El peso
es información **adicional** a la simple conexión: no sólo importa
"están conectados", sino "cuánto cuesta" esa conexión.

**Ejemplo**: un mapa de rutas donde cada arista lleva la distancia en
kilómetros entre dos ciudades — el "costo" de un camino completo es la
**suma** de los pesos de todas las aristas que lo forman.

## Las clasificaciones son independientes entre sí

"Dirigido/no dirigido" y "ponderado/no ponderado" son dos
clasificaciones **distintas** de la misma arista, y se combinan
libremente:

| | No ponderado | Ponderado |
|---|---|---|
| **No dirigido** | Amistad mutua simple | Mapa de rutas con distancias |
| **Dirigido** | "Sigue a" en una red social | Vuelos con distinto precio según el sentido |

## Para qué sirve

Elegir bien qué tipo de grafo modela una situación real es el primer
paso antes de aplicar cualquier algoritmo: un mapa de rutas con
calles de un solo sentido necesita un grafo **dirigido**, y si además
importa la distancia, también **ponderado** — un algoritmo que ignore
alguna de esas dos características va a dar resultados incorrectos
para el problema real.
