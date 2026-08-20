# Matemática — Probabilidad simple (teoría)

> Tema del MAPA: `D8` (Tronco 4.b). Depende de `../leer-una-tabla/` y
> `../diagramas-de-venn/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — una sola idea central (casos favorables sobre casos
totales), no necesita separarse en varias diapositivas.

---

## Casos favorables sobre casos totales

La **probabilidad** de que ocurra un evento mide qué tan posible es
que ocurra, con un número entre 0 (imposible) y 1 (seguro) — o,
equivalentemente, entre 0% y 100%.

```
P(evento) = casos favorables / casos totales
```

**Ejemplo**: al tirar un dado de 6 caras, la probabilidad de que salga
un número par (2, 4 o 6) es `3/6 = 0,5 = 50%` — hay 3 casos favorables
(2, 4, 6) sobre 6 casos totales posibles (1 al 6).

## El espacio muestral

El **espacio muestral** es el conjunto de **todos** los resultados
posibles de un experimento (por ejemplo, tirar un dado: `{1, 2, 3, 4,
5, 6}`). Un **evento** es un subconjunto de ese espacio muestral (por
ejemplo, "sale par" = `{2, 4, 6}`) — es exactamente el mismo
vocabulario de conjuntos ya construido en `../diagramas-de-venn/`.

## Extremos: 0 y 1

- `P(evento) = 0`: el evento es **imposible** (no hay ningún caso
  favorable — por ejemplo, "sale 7" al tirar un dado normal).
- `P(evento) = 1`: el evento es **seguro** (todos los casos son
  favorables — por ejemplo, "sale un número entre 1 y 6").
- La suma de las probabilidades de TODOS los resultados posibles del
  espacio muestral siempre da exactamente 1 (100%).

## El evento complementario

El **complemento** de un evento (`Ā` o "no A") es todo lo que NO
cumple ese evento. Como entre A y su complemento se cubre todo el
espacio muestral:

```
P(A) + P(Ā) = 1     →     P(Ā) = 1 − P(A)
```

Suele ser más fácil calcular `P(Ā)` y restar de 1 que calcular `P(A)`
directamente, sobre todo cuando "A" describe muchos casos y "no A"
describe pocos.

## Para qué sirve

Es la base de cualquier análisis de riesgo (una encuesta electoral, un
pronóstico del tiempo, un juego de azar), y el escalón directo hacia
`../independencia-de-eventos-y-diagrama-de-arbol/` y
`../probabilidad-compuesta/` — que combinan varios eventos simples
como este.
