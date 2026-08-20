# Geografía — Coordenadas y husos horarios (teoría)

> Tema del MAPA: `G1` (Tronco 3.b — puente Trigonometría → Geografía).
> Depende de `../../matematica/razones-trigonometricas/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — coordenadas geográficas y husos horarios son varias
ideas encadenadas (paralelos, meridianos, latitud, longitud, husos)
mejor separadas en diapositivas.

---

## Coordenadas geográficas: un sistema de ángulos

Cualquier punto de la superficie terrestre se ubica con dos ángulos
medidos desde el centro de la Tierra, el mismo vocabulario de ángulos
que ya se vio en `../../matematica/razones-trigonometricas/`:

- **Latitud**: ángulo medido desde el **ecuador** (paralelo 0°) hacia el
  norte o el sur, entre 0° y 90°. Un punto en el ecuador tiene latitud
  0°; en el Polo Norte, 90° N.
- **Longitud**: ángulo medido desde el **meridiano de Greenwich**
  (meridiano 0°) hacia el este o el oeste, entre 0° y 180°.

Los **paralelos** son círculos imaginarios paralelos al ecuador (todos
los puntos de un paralelo comparten la misma latitud). Los
**meridianos** son semicírculos que van de polo a polo (todos los
puntos de un meridiano comparten la misma longitud).

## Cómo se escribe una coordenada

Una coordenada se escribe como (latitud, longitud), con su hemisferio:
por ejemplo Buenos Aires está aproximadamente a 34° **S**, 58° **O**
(sur del ecuador, oeste de Greenwich). Los grados pueden partirse en
minutos y segundos (1° = 60′, 1′ = 60″), o expresarse en decimal
(34,5° en vez de 34°30′).

## De la longitud al huso horario

La Tierra da un giro completo (360°) sobre su eje en 24 horas. Por
eso el planeta se divide en **24 husos horarios**, cada uno de:

```
360° ÷ 24 = 15° de longitud
```

Cada huso representa 1 hora de diferencia. El huso 0 es el que contiene
al meridiano de Greenwich, y es la referencia **UTC** (tiempo universal
coordinado, antes llamado GMT). Moverse 15° de longitud hacia el
**este** suma una hora; moverse 15° hacia el **oeste** resta una hora.

## La Línea Internacional de Cambio de Fecha

Cerca del meridiano 180° (el opuesto a Greenwich, en el océano
Pacífico) está la Línea Internacional de Cambio de Fecha: cruzarla
hacia el oeste suma un día al calendario, cruzarla hacia el este lo
resta. Es la costura necesaria para que los husos horarios, que suman
hacia el este y restan hacia el oeste, cierren el círculo completo sin
contradicciones.

## Un caso real: Argentina

Argentina usa el huso **UTC−3** (3 horas detrás de Greenwich) todo el
año, sin horario de verano desde 2009. Esto es una decisión política de
cada país (algunos ajustan el reloj según la estación, otros no) y
puede cambiar — lo estable es el mecanismo: la posición en longitud fija
un huso "natural", pero el huso legal que usa cada país es una decisión
de gobierno, no siempre coincide exactamente con el huso geográfico.

## Para qué sirve

Sin coordenadas no hay GPS, navegación aérea o marítima, ni forma de
decir "dónde" ocurrió algo sin ambigüedad. Sin husos horarios, coordinar
un vuelo, una videollamada o un partido transmitido en vivo entre dos
países sería un desastre de conversión manual constante.
