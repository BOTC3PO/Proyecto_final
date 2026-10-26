# Dibujo técnico — Tolerancias y ajustes (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `dibujo-tecnico/tolerancias-y-ajustes`. Depende de `../acotacion-normalizada/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Por qué ninguna medida es exacta y cómo se especifica cuánto error se admite y cómo encajan dos piezas.

---

## 1. Ninguna pieza sale exacta

Una cota dice "25 mm", pero ninguna máquina fabrica exactamente 25,000000 mm. Siempre hay una pequeña diferencia. Lo que importa es que esa diferencia sea lo bastante chica como para que la pieza funcione. La **tolerancia** es la variación admisible de una medida: el intervalo dentro del cual la pieza es aceptable.

## 2. Cómo se expresa

Una cota con tolerancia puede escribirse de varias maneras:

- Con **desviaciones**: 25 +0,02 / −0,01, que significa que la medida real debe estar entre 24,99 y 25,02 mm.
- Con **límites**: 25,02 / 24,99.
- Con **tolerancia simétrica**: 25 ± 0,02.
- Con **símbolo normalizado ISO**: 25 H7, ver más abajo.

Los dos valores extremos son las **medidas límite**: máxima y mínima. La **tolerancia** es la diferencia entre ellas. Una pieza que mide dentro del intervalo se acepta; fuera, se rechaza o se reprocesa.

La tolerancia tiene un costo: cuanto más chica, más precisa debe ser la máquina, más lento el proceso y más caro el control. Por eso se especifica la tolerancia **más grande que permita el funcionamiento**.

## 3. Ajustes: cómo encajan dos piezas

Cuando un eje entra en un agujero hay tres situaciones:

- **Ajuste con juego** (holgura): el eje siempre es menor que el agujero. Permite el movimiento: un eje que gira en un buje.
- **Ajuste con interferencia** (aprieto): el eje siempre es mayor que el agujero. Se monta a presión o calentando una pieza, y queda fijo: una rueda calada a un eje.
- **Ajuste indeterminado** (de transición): según las medidas reales puede resultar con un pequeño juego o un pequeño aprieto. Se usa para ubicar piezas con precisión pero que se pueden desmontar.

El **juego** es la diferencia entre la medida del agujero y la del eje cuando es positiva. El **juego máximo** es el agujero máximo menos el eje mínimo; el **juego mínimo** es el agujero mínimo menos el eje máximo. Si el juego mínimo es negativo, hay interferencia.

## 4. El sistema ISO de tolerancias

La norma ISO 286 organiza las tolerancias con un código de letra y número. El **número** (grado de tolerancia, IT) indica el ancho de la zona de tolerancia: cuanto menor el número, más estrecha y más precisa; crece con el tamaño de la pieza. La **letra** indica la posición de esa zona respecto de la medida nominal: mayúscula para agujeros (H, G, P…) y minúscula para ejes (h, g, p…). La zona **H** tiene su límite inferior en la medida nominal; la zona **h**, su límite superior.

En el sistema de **agujero base** el agujero se mantiene H y se varía el eje para lograr el ajuste buscado. Ejemplos de la bibliografía técnica: H7/g6 es un ajuste con juego (deslizante), H7/h6 ajuste de ubicación con juego mínimo, H7/k6 de transición y H7/p6 con interferencia. Las tablas completas deben consultarse en la norma.

## 5. Tolerancias geométricas

Además del tamaño, se controla la **forma** y la **posición**: planitud, redondez, paralelismo, perpendicularidad, coaxialidad. Una pieza puede tener el diámetro correcto y estar ovalada. Se especifican con símbolos normalizados en un marco de control.

## 6. Errores frecuentes

Tolerancias demasiado ajustadas sin necesidad, que encarecen; olvidar que el acople depende de las dos piezas; o confundir tolerancia con "error de fabricación": la tolerancia es un criterio de diseño, el error es lo que ocurre.

## N. Conexión con lo que sigue

La calidad de la superficie también se especifica: `rugosidad-y-acabado-superficial/`. Los ajustes aparecen en `interpretar-planos-de-piezas-y-conjuntos/` y en los oficios de mecanizado.
