# Matemática — Riesgo relativo vs. absoluto en una noticia de salud (teoria)

> Tema del MAPA: `S1` (Tronco 4.b). Depende de `../teorema-de-bayes/`
> (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — dos formas de reportar el mismo dato, con un ejemplo que
muestra por qué confundirlas engaña, no necesita varias diapositivas.

---

## Riesgo absoluto

El **riesgo absoluto** es, simplemente, la probabilidad de que ocurra
un evento en un grupo — la misma `P(evento|condición)` de
`../probabilidad-condicional/` y `../teorema-de-bayes/`. Por ejemplo:
"de cada 10.000 personas que fuman, 70 desarrollan cierta enfermedad
en 10 años" → riesgo absoluto = `70/10.000 = 0,7%`.

## Riesgo relativo

El **riesgo relativo (RR)** compara el riesgo de dos grupos —
típicamente, un grupo **expuesto** a algo contra un grupo **no
expuesto**:

```
RR = P(evento | expuesto) / P(evento | no expuesto)
```

`RR = 1` significa que no hay diferencia entre los grupos. `RR = 2`
significa que el grupo expuesto tiene el **doble** de riesgo que el
no expuesto — pero el doble **¿de qué número?** Ahí está el punto
crítico de este tema.

## El problema: un RR alto puede esconder un riesgo absoluto mínimo

**Ejemplo**: un estudio encuentra que cierto hábito **duplica** el
riesgo de una enfermedad muy rara (`RR = 2`). Si el riesgo absoluto
sin el hábito es de `1 en 1.000.000`, duplicarlo lleva a `2 en
1.000.000` — la diferencia real (**riesgo absoluto**) es de apenas
`1 en 1.000.000`, prácticamente insignificante en términos prácticos,
aunque el titular diga "duplica el riesgo" (matemáticamente cierto).

```
diferencia de riesgo (absoluta) = P(evento|expuesto) − P(evento|no expuesto)
```

**El mismo `RR = 2` puede significar cosas muy distintas** según cuál
sea el riesgo base: si el riesgo sin exposición fuera `10%`, duplicarlo
a `20%` es un aumento absoluto de 10 puntos porcentuales — mucho más
relevante en la práctica que el ejemplo anterior, aunque el riesgo
relativo (`RR=2`) sea idéntico en ambos casos.

## Cómo leer un titular de salud con cuidado

Frente a "esto duplica el riesgo de aquello", la pregunta crítica es:
**¿duplica de qué número a qué número?** Sin el riesgo **absoluto**
de base, el riesgo **relativo** solo no permite evaluar si la noticia
importa de verdad para una decisión personal.

## Para qué sirve

Los estudios científicos serios (y el periodismo de salud honesto)
reportan **ambos** números: el riesgo relativo (para comparar el
tamaño del efecto) y el riesgo absoluto o la diferencia de riesgo
(para saber si, en la práctica, vale la pena preocuparse). Es la misma
lógica de `../grafico-eje-truncado/` y
`../correlacion-no-es-causalidad/`: un dato técnicamente correcto
puede, sin ningún error de cálculo, dar una impresión completamente
desproporcionada si se presenta sin el contexto completo.
