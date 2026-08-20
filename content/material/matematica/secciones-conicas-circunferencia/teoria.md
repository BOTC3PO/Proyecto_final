# Matemática — Secciones cónicas: circunferencia (teoría)

> Tema del MAPA: `GA7` (Tronco 3.b — Geometría analítica, trigonometría y
> vectores). Depende de `../plano-cartesiano/` y
> `../ecuacion-cuadratica/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas (de dónde sale la
ecuación, centro y radio, ubicación de puntos) mejor separadas en
diapositivas.

---

## Qué es una sección cónica

Las **secciones cónicas** son las curvas que se obtienen al cortar un
cono con un plano, en distintos ángulos: circunferencia, elipse,
parábola e hipérbola. Este módulo cubre sólo la **circunferencia** — la
más simple de las cuatro, y la única que este sistema evalúa por ahora.

## De dónde sale la ecuación

Una circunferencia es, por definición, el conjunto de **todos** los
puntos que están a una misma distancia (el **radio**, `r`) de un punto
fijo (el **centro**). Esa definición **es** la fórmula de distancia
(`../distancia-entre-dos-puntos/`), aplicada entre un punto genérico
`(x, y)` y el centro `(h, k)`, e igualada a `r`:

```
√((x − h)² + (y − k)²) = r
```

Elevando ambos lados al cuadrado (para deshacerse de la raíz), queda la
**ecuación canónica de la circunferencia**:

```
(x − h)² + (y − k)² = r²
```

Es la misma álgebra de segundo grado ya vista en
`../ecuacion-cuadratica/` (términos al cuadrado), ahora con **dos**
variables en vez de una.

## Circunferencia centrada en el origen

Cuando el centro está en `(0, 0)` (es decir, `h = 0` y `k = 0`), la
ecuación se simplifica a:

```
x² + y² = r²
```

## Leer centro y radio desde la ecuación

Dada una ecuación en forma canónica `(x − h)² + (y − k)² = r²`, se leen
directamente:

- El **centro** es `(h, k)` — atención al signo: si la ecuación dice
  `(x − 3)²`, el centro tiene `h = 3` (no `−3`).
- El **radio** es la **raíz cuadrada** del número del lado derecho (no
  el número mismo, que es `r²`).

## Dónde está un punto respecto de la circunferencia

Para cualquier punto `(x, y)`, se compara `(x − h)² + (y − k)²` (la
distancia al cuadrado desde el centro) con `r²`:

- Si es **menor** que `r²`: el punto está **dentro** de la
  circunferencia.
- Si es **igual** a `r²`: el punto está **sobre** la circunferencia (la
  ecuación se cumple exactamente).
- Si es **mayor** que `r²`: el punto está **fuera** de la circunferencia.

## Para qué sirve

Escribir la circunferencia como ecuación permite trabajarla con álgebra
en vez de sólo con dibujo: verificar si un punto exacto está dentro,
sobre o fuera de un área circular (una zona de cobertura, un radar, el
alcance de una señal), sin necesidad de medir sobre un gráfico.
