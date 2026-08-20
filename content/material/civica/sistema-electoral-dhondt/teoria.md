# Cívica — Sistema electoral y reparto D'Hondt (teoria)

> Tema del MAPA: `C8` (`C6 --> C8`). Depende de
> `../division-de-poderes/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — el problema del reparto proporcional, el método
D'Hondt paso a paso y un ejemplo numérico completo son secciones
separables.

---

## El problema: repartir bancas de forma proporcional

Una banca legislativa se elige por voto popular (`../division-de-poderes/`),
pero **repartir bancas exactamente proporcional a los votos casi nunca
da un número entero**: si un partido saca el 33,3% de los votos y hay 5
bancas en juego, "le tocarían" 1,665 bancas — un número que no existe.
Se necesita un **método de reparto** que reparta bancas enteras
respetando lo más posible la proporción de votos. El más usado en
Argentina (elecciones de diputados nacionales, entre otras) es el
**método D'Hondt**, ideado por el matemático belga Victor D'Hondt.

## El método D'Hondt, paso a paso

1. Se divide el total de votos de **cada partido** por 1, por 2, por 3,
   ... hasta el número de bancas en juego.
2. Se ordenan **todos** esos cocientes (de todos los partidos juntos)
   de mayor a menor.
3. Se asignan las bancas, una por una, tomando el cociente más alto
   restante — hasta agotar la cantidad de bancas disponibles.

## Ejemplo numérico completo

3 partidos, 5 bancas en juego:

| Partido | Votos |
|---|---|
| A | 10.000 |
| B | 6.000 |
| C | 3.500 |

Cocientes (dividiendo por 1, 2, 3, 4, 5):

| ÷ | A | B | C |
|---|---|---|---|
| 1 | 10.000 | 6.000 | 3.500 |
| 2 | 5.000 | 3.000 | 1.750 |
| 3 | 3.333,33 | 2.000 | 1.166,67 |
| 4 | 2.500 | 1.500 | 875 |
| 5 | 2.000 | 1.200 | 700 |

Ordenando los cocientes de mayor a menor: **10.000 (A), 6.000 (B), 5.000
(A), 3.500 (C), 3.333,33 (A)** — los primeros 5 valores, porque hay 5
bancas. Reparto final: **A obtiene 3 bancas, B obtiene 1, C obtiene 1.**

Nótese que A sacó el 52,6% de los votos y obtuvo el 60% de las bancas
(3 de 5) — el método D'Hondt tiende a **favorecer levemente a los
partidos más grandes** frente a un reparto perfectamente proporcional,
a cambio de evitar la fragmentación excesiva del cuerpo legislativo (a
diferencia de otros métodos, como Hare, más proporcionales pero que
facilitan más partidos chicos con representación).

## Piso electoral

En Argentina, para entrar al reparto de bancas de diputados nacionales,
una lista debe superar el **3% de los votos válidos emitidos del padrón
electoral del distrito** — quien no llega a ese piso queda fuera del
reparto D'Hondt directamente, aunque haya sacado votos.

## Para qué sirve

Entender este mecanismo permite leer con criterio resultados
electorales reales ("el partido X sacó 25% de los votos pero obtuvo
30% de las bancas" no es un error ni una trampa, es el efecto esperado
del método D'Hondt) y hacer el cálculo real de reparto a mano, no sólo
memorizar el nombre del método.
