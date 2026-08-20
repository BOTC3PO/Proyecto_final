# Física — Presión atmosférica (teoria)

> Tema del MAPA: `MET1` (Tronco 9.f, sección "Meteorología: la física
> detrás del clima"). Depende de `../formulas-con-literales/` (P=F/A) y
> de `../../geografia/relieve-clima-biomas/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — qué es la presión atmosférica, por qué varía con
altitud y temperatura, isobaras, y las zonas de alta y baja presión.

---

## Qué es la presión atmosférica

La atmósfera es una capa de aire que rodea la Tierra, y ese aire **pesa**.
La **presión atmosférica** es el peso del aire que hay por encima de un
punto, repartido sobre el área de ese punto — la misma fórmula general de
presión ya vista en `../formulas-con-literales/`:

```
P = F / A
```

A nivel del mar, ese peso equivale a una presión de referencia llamada
**1 atmósfera (1 atm)**, aproximadamente **1013 hPa** (hectopascales,
la unidad que usan los mapas del clima) o **101300 Pa**.

## Por qué varía con la altitud

A mayor altitud, hay **menos columna de aire por encima** empujando hacia
abajo, así que la presión **disminuye**. Por eso:

- En la cima de una montaña alta, la presión atmosférica es mucho menor
  que a nivel del mar (por eso cuesta más respirar: hay menos moléculas
  de aire por cada bocanada).
- Los aviones presurizan la cabina porque a la altitud de crucero la
  presión externa sería demasiado baja para respirar sin ayuda.

La relación no es lineal exacta, pero para este nivel alcanza con la idea
cualitativa: **más altura → menos presión**.

## Por qué varía con la temperatura

El aire caliente es menos denso (sus moléculas están más separadas) que
el aire frío. Por eso:

- El **aire cálido tiende a subir** (es menos denso, "flota" sobre el aire
  frío) y, al alejarse, deja una zona de **menor presión** en superficie.
- El **aire frío tiende a bajar/acumularse**, y al ser más denso genera
  **mayor presión** en superficie.

Esta relación temperatura↔presión es la base de cómo se forman las zonas
de alta y baja presión que se ven en los mapas del clima.

## Isobaras

Una **isobara** es una línea en un mapa que une puntos con la **misma
presión atmosférica** — igual idea que las curvas de nivel de un mapa de
relieve (`../../geografia/relieve-clima-biomas/`), pero para presión en
vez de altura. Isobaras muy juntas (muy cercanas entre sí) indican un
cambio de presión brusco en poco espacio, lo que se traduce en **vientos
fuertes** (el aire se mueve rápido de la zona de alta a la de baja
presión para compensar la diferencia).

## Alta presión (anticiclón) y baja presión (ciclón/depresión)

- **Zona de alta presión (anticiclón)**: aire frío y denso que desciende
  y se acumula. Suele traer **cielo despejado y clima estable**, porque
  el aire que baja se comprime y se seca (dificulta que se formen
  nubes).
- **Zona de baja presión (ciclón/depresión)**: aire cálido y húmedo que
  asciende. Suele traer **nubosidad e inestabilidad** (lluvia, tormentas),
  porque el aire que sube se enfría y puede condensar su humedad — la
  base de lo que viene en `../masas-de-aire-y-frentes/` y
  `../formacion-de-nubes/`.

El viento siempre sopla **de la zona de alta hacia la zona de baja
presión**, buscando equilibrar la diferencia — el mismo principio que
iguala cualquier diferencia de presión (como el aire que sale de un globo
inflado hacia la presión más baja de afuera).

## Relación con el relieve, clima y biomas

`../../geografia/relieve-clima-biomas/` describe *qué* clima tiene cada
región (seco, húmedo, templado) sin explicar el mecanismo de fondo. La
presión atmosférica es una pieza de ese mecanismo: por ejemplo, muchas
zonas desérticas del planeta coinciden con **bandas de alta presión
subtropical** permanente (aire que desciende, se comprime y se seca), y
buena parte de las lluvias tropicales coinciden con **bajas presiones
ecuatoriales** (aire cálido y húmedo que asciende todo el año).
