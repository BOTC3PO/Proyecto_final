# Matemática — Intervalo de confianza (teoria)

> Tema del MAPA: `D13` (Tronco 4.b). Depende de
> `../teorema-central-del-limite/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — una sola fórmula con una interpretación correcta que
conviene remarcar, no necesita varias diapositivas.

---

## Qué es un intervalo de confianza

Un promedio calculado de una muestra casi nunca coincide exactamente
con el promedio real de la población — pero, gracias al
`../teorema-central-del-limite/`, se sabe **cómo** varía ese error. Un
**intervalo de confianza** aprovecha esa información para reportar,
en vez de un único número, un **rango de valores** que probablemente
contiene el valor real de la población, junto con un **nivel de
confianza** (habitualmente 90%, 95% o 99%) que indica qué tan seguido
ese método acierta.

```
IC = media muestral ± margen de error
margen de error = z* × error estándar
```

Donde el **error estándar** (`σ/√n`) ya se construyó en
`../teorema-central-del-limite/`, y **z\*** es un valor fijo que
depende del nivel de confianza elegido (viene de la distribución
normal estándar):

| Nivel de confianza | z* |
|---|---|
| 90% | 1,645 |
| 95% | 1,96 |
| 99% | 2,576 |

**Ejemplo**: una muestra tiene media 50 y error estándar 2. Con 95% de
confianza, el margen de error es `1,96 × 2 = 3,92`, y el intervalo de
confianza es `50 ± 3,92`, es decir, de `46,08` a `53,92`.

## El trade-off: confianza vs. ancho del intervalo

- **Más nivel de confianza** (por ejemplo, pasar de 95% a 99%) usa un
  `z*` más grande → el intervalo se **ensancha**. Tiene sentido: para
  estar más seguro de "atrapar" el valor real, hay que cubrir un rango
  más amplio.
- **Más tamaño de muestra** (n más grande) reduce el error estándar →
  el intervalo se **angosta**, sin sacrificar nivel de confianza. Es
  la única forma de tener, a la vez, más confianza Y un intervalo más
  preciso: conseguir más datos.

## La interpretación correcta (y el error más común)

"95% de confianza" **no** significa "hay un 95% de probabilidad de que
el valor real de la población esté dentro de ESTE intervalo puntual"
— una vez calculado, el intervalo ya contiene al valor real o no lo
contiene, no hay azar de por medio en ese momento.

La interpretación correcta es sobre el **método**: si se repitiera el
proceso de muestreo muchas veces, y se calculara un intervalo de
confianza del 95% cada vez, **aproximadamente el 95% de esos
intervalos** (no de las veces que se mira el mismo intervalo)
contendrían el verdadero valor poblacional.

## Para qué sirve

Es la forma estándar en que una encuesta o un estudio reporta
incertidumbre de manera honesta: en vez de dar un único número como
si fuera exacto, da un rango y dice qué tan confiable es el método
que lo produjo — la base de la frase "±3 puntos, con un 95% de
confianza" que acompaña a cualquier encuesta seria.
