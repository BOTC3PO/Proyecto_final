# Matemática — Probabilidad compuesta (teoría)

> Tema del MAPA: `D9` (Tronco 4.b). Depende de `../probabilidad-simple/`
> y `../independencia-de-eventos-y-diagrama-de-arbol/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — combina dos reglas distintas (Y, O) que conviene
separar en diapositivas.

---

## Combinar varios eventos

La **probabilidad compuesta** calcula la probabilidad de que ocurran
**varios eventos a la vez** (o al menos uno de varios), combinando lo
ya visto en `../probabilidad-simple/` (la probabilidad de un solo
evento) con `../independencia-de-eventos-y-diagrama-de-arbol/` (cómo
se relacionan varios eventos entre sí).

## Regla del "Y": eventos independientes, ambos a la vez

Si dos eventos `A` y `B` son **independientes**, la probabilidad de
que ocurran **los dos** (A Y B) es el producto de sus probabilidades:

```
P(A y B) = P(A) × P(B)          (si A y B son independientes)
```

Es exactamente la misma regla ya usada para multiplicar ramas de un
diagrama de árbol.

## Regla del "O": eventos que se excluyen mutuamente

Si dos eventos no pueden ocurrir juntos (**mutuamente excluyentes** —
por ejemplo, "sale 2" y "sale 5" en un mismo tiro de dado), la
probabilidad de que ocurra **cualquiera de los dos** (A O B) es la
suma de sus probabilidades:

```
P(A o B) = P(A) + P(B)          (si A y B son mutuamente excluyentes)
```

## Regla del "O" general (eventos que sí se pueden solapar)

Si `A` y `B` **pueden** ocurrir juntos, sumar directo contaría dos
veces el caso en que ocurren ambos — hay que restar esa superposición,
exactamente la misma fórmula de inclusión-exclusión de
`../union-interseccion-y-diferencia/`:

```
P(A o B) = P(A) + P(B) − P(A y B)
```

## Cuál regla usar

- ¿La pregunta es "pasan LAS DOS cosas"? → Multiplicar (si son
  independientes).
- ¿La pregunta es "pasa CUALQUIERA de las dos, y no pueden pasar
  juntas"? → Sumar directo.
- ¿La pregunta es "pasa CUALQUIERA de las dos, y sí podrían pasar
  juntas"? → Sumar y restar la superposición.

## Para qué sirve

Es la herramienta detrás de calcular probabilidades genéticas
(cuadro de Punnett: la probabilidad de heredar un alelo de cada
progenitor son eventos independientes que se multiplican), de
cualquier análisis de riesgo con varios factores, y de decisiones
cotidianas ("¿cuál es la probabilidad de que llueva Y se corte la
luz?", "¿cuál es la probabilidad de sacar un as O una figura?").
