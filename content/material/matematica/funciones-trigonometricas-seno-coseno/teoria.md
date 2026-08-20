# Matemática — Funciones trigonométricas: seno y coseno con radianes (teoría)

> Tema del MAPA: `TRIG1` (Tronco 3.b — Geometría analítica, trigonometría
> y vectores). Depende de `../razones-trigonometricas/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas (radianes, círculo
unitario, periodicidad, amplitud) mejor separadas en diapositivas.

---

## De razón de un triángulo a función de cualquier ángulo

`../razones-trigonometricas/` definió seno y coseno sólo para ángulos
**agudos** de un triángulo rectángulo. Este módulo los extiende a
**funciones**: `sen(θ)` y `cos(θ)` definidas para **cualquier** ángulo
real θ — agudo, obtuso, negativo, o mayor a una vuelta completa.

## El radián

El **radián** es otra unidad para medir ángulos (además del grado
sexagesimal ya visto en `../angulos/`): un radián es el ángulo central
de una circunferencia que abarca un arco de longitud igual al radio. Una
vuelta completa (360°) mide exactamente `2π` radianes.

## Conversión entre grados y radianes

```
radianes = grados × (π / 180)
grados = radianes × (180 / π)
```

Equivalencias notables: `180° = π rad`, `90° = π/2 rad`, `60° = π/3 rad`,
`45° = π/4 rad`, `30° = π/6 rad`.

## El círculo unitario

El **círculo unitario** es una circunferencia de radio 1 centrada en el
origen del plano cartesiano (ver `../plano-cartesiano/`). Para cualquier
ángulo θ (medido desde el eje x positivo, en sentido antihorario), el
punto donde el ángulo corta al círculo tiene coordenadas exactas:

```
(x, y) = (cos θ, sen θ)
```

Esta es la definición que permite hablar de seno y coseno de **cualquier**
ángulo, no sólo de los agudos de un triángulo: para ángulos entre 90° y
360°, el punto cae en otro cuadrante, y las coordenadas (por lo tanto
seno y coseno) pueden dar valores negativos.

## Periodicidad

Como el círculo unitario se repite cada vuelta completa, las funciones
seno y coseno son **periódicas**, con **período `2π`** (o 360°):

```
sen(θ + 2π) = sen(θ)
cos(θ + 2π) = cos(θ)
```

Girar una vuelta completa de más (o de menos) da exactamente el mismo
punto, y por lo tanto los mismos valores de seno y coseno.

## Amplitud

Como el círculo unitario tiene radio 1, las coordenadas `x` e `y` de
cualquier punto sobre él nunca pueden ser mayores que 1 ni menores que
−1. Por eso:

```
−1 ≤ sen(θ) ≤ 1
−1 ≤ cos(θ) ≤ 1
```

para **cualquier** ángulo θ. Este rango acotado se llama **amplitud** de
la función (en este caso, amplitud 1).

## El gráfico: una onda

Si se grafica `y = sen(θ)` (con θ en el eje horizontal, en radianes), la
curva resultante es una **onda** suave que sube y baja entre −1 y 1,
repitiéndose cada `2π` — la misma forma de onda (sinusoide) que aparece
en sonido, luz y cualquier fenómeno oscilatorio (tema que se retoma más
adelante, en Física).

## Para qué sirve

Medir en radianes y pensar en seno/coseno como funciones (no sólo como
razones de un triángulo puntual) es lo que permite describir cualquier
movimiento circular o periódico — desde la posición de un punto en una
rueda que gira, hasta una onda de sonido — con una sola fórmula.
