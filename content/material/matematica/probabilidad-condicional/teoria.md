# Matemática — Probabilidad condicional (teoria)

> Tema del MAPA: `D10` (Tronco 4.b). Depende de
> `../probabilidad-compuesta/` y
> `../independencia-de-eventos-y-diagrama-de-arbol/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — una sola fórmula que formaliza algo ya usado
intuitivamente (el caso "sin reposición"), no necesita varias
diapositivas.

---

## Qué es la probabilidad condicional

La **probabilidad condicional**, escrita `P(A|B)` (se lee "probabilidad
de A dado B"), es la probabilidad de que ocurra el evento `A`, **ya
sabiendo que el evento `B` ocurrió**. Saber que `B` pasó cambia el
"universo" de posibilidades sobre el que se calcula la probabilidad de
`A`.

```
P(A|B) = P(A y B) / P(B)          (con P(B) > 0)
```

Ya se usó esta idea, sin nombrarla formalmente, en el caso **sin
reposición** de `../independencia-de-eventos-y-diagrama-de-arbol/`: la
probabilidad de sacar un as en la segunda extracción, **sabiendo que
la primera ya salió as**, es una probabilidad condicional.

## Condicional e independencia

`../independencia-de-eventos-y-diagrama-de-arbol/` ya definió qué es
la independencia — la probabilidad condicional la reformula de manera
más precisa:

```
A y B son independientes  ⟺  P(A|B) = P(A)
```

Si saber que `B` ocurrió **no cambia nada** la probabilidad de `A`,
son independientes. Si `P(A|B)` es distinto de `P(A)` (más alto o más
bajo), `B` sí aporta información sobre `A` — son dependientes.

## Ejemplo con una tabla de contingencia

|  | Aprobó | No aprobó | Total |
|---|---|---|---|
| Estudió | 40 | 10 | 50 |
| No estudió | 15 | 35 | 50 |
| **Total** | 55 | 45 | 100 |

¿Cuál es la probabilidad de que alguien **haya estudiado**, **dado
que aprobó**? Se restringe el universo a la columna "Aprobó" (55
personas en total), y dentro de esa columna se cuentan los que
estudiaron (40):

```
P(estudió | aprobó) = 40 / 55 ≈ 0,727
```

Notar que **no es lo mismo** que `P(aprobó | estudió)` (restringir
primero a la fila "Estudió", y ver qué proporción aprobó dentro de
esa fila: `40/50 = 0,8`) — invertir el orden de la condición cambia el
resultado. Esa distinción es, justamente, el punto de partida de
`../teorema-de-bayes/` (el módulo que sigue).

## Para qué sirve

Es la formalización de "achicar el universo de posibilidades a partir
de información nueva" — la base de diagnósticos médicos ("¿cuál es la
probabilidad de tener una enfermedad, dado un test positivo?"), de
filtros de spam, y de cualquier situación donde una observación
cambia lo que se puede esperar del resto.
