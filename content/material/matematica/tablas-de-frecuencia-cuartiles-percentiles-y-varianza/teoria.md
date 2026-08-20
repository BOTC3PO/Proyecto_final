# Matemática — Tablas de frecuencia, cuartiles/percentiles y varianza (teoría)

> Tema del MAPA: `D4B` (Tronco 4.b). Depende de `../media-mediana-y-moda/`
> (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — tres ideas progresivas (organizar datos
repetidos, ubicar posiciones relativas, medir dispersión) mejor
separadas en diapositivas, aunque el MAPA las junte en un solo nodo.

---

## Parte 1 — Tablas de frecuencia: organizar datos repetidos

Cuando un dato se repite mucho (por ejemplo, las notas de un curso
entero), conviene organizarlo en una **tabla de frecuencia**, que
cuenta cuántas veces aparece cada valor:

- **Frecuencia absoluta**: cuántas veces aparece ese valor, en
  cantidad concreta (por ejemplo, "8 alumnos sacaron un 7").
- **Frecuencia relativa**: qué proporción (o porcentaje) del total
  representa esa frecuencia absoluta: `frecuencia absoluta / total`.
- **Frecuencia acumulada**: la suma de las frecuencias absolutas de
  ese valor y de todos los anteriores (según el orden de los valores)
  — responde "¿cuántos casos hay hasta este valor, inclusive?".

## Parte 2 — Cuartiles y percentiles: ubicar posiciones relativas

Así como la **mediana** (ya vista) divide los datos ordenados en dos
mitades iguales, los **cuartiles** los dividen en **cuatro** partes
iguales:

- **Q1** (primer cuartil): deja el 25% de los datos por debajo.
- **Q2** (segundo cuartil): es exactamente la mediana (el 50%).
- **Q3** (tercer cuartil): deja el 75% de los datos por debajo.

Los **percentiles** generalizan esta idea a **cien** partes: el
percentil 90 (P90) deja el 90% de los datos por debajo. Un cuartil es
sólo un percentil particular: `Q1 = P25`, `Q2 = P50`, `Q3 = P75`.

**Rango intercuartílico (IQR)**: la distancia entre Q3 y Q1
(`IQR = Q3 − Q1`) — mide cuánto ocupa "el 50% central" de los datos,
ignorando los extremos. Es una forma de ver dispersión que no se deja
arrastrar tanto por valores atípicos como el rango completo
(máximo − mínimo).

## Parte 3 — Varianza: medir qué tan dispersos están los datos

La **varianza** mide, en promedio, qué tan lejos está cada dato de la
media — específicamente, el promedio de las **distancias al cuadrado**
respecto de la media:

```
varianza = Σ(cada valor − media)² / cantidad de valores
```

**Por qué al cuadrado**: si se promediaran las distancias sin elevar
al cuadrado, las distancias positivas (valores por encima de la
media) y negativas (valores por debajo) se cancelarían entre sí, y el
resultado siempre daría 0 — sin importar cuán dispersos estén
realmente los datos. Elevar al cuadrado vuelve todas las distancias
positivas antes de promediarlas.

**Ejemplo**: con los valores 2, 4, 6 (media = 4): las distancias son
−2, 0, 2; al cuadrado, 4, 0, 4; el promedio de esos cuadrados es
`(4+0+4)/3 = 2,67` — esa es la varianza.

La raíz cuadrada de la varianza tiene su propio nombre y su propio
módulo (`Dispersión: rango y desvío`, el que sigue): ahí se retoma
para completar la idea.

## Para qué sirve

Es el paso intermedio real entre "un promedio simple" y "entender la
forma completa de un conjunto de datos": la tabla de frecuencia
organiza, los cuartiles ubican posiciones relativas sin necesitar ver
todos los datos, y la varianza cuantifica qué tan parecidos (o
dispersos) son entre sí — la pieza que faltaba para responder de
verdad "cuánto se pierde al resumir en un solo número", la pregunta
central de `../cual-miente-y-cuando/`.
