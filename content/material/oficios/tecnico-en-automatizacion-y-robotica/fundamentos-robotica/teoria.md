# Oficios — Técnico en Automatización y Robótica — Fundamentos (teoria)

> Tema del MAPA: `OF16.fundamentos-robotica` (`troncos.md`). Depende
> de `../tecnico-electromecanico/diagnostico-electromecanico-por-casos/`,
> `../informatica/estructuras-de-control-bucles/` y
> `../electronica/sensores-y-actuadores/` (ver `../dependencias.md`).
> Lección informativa — la evaluación del oficio se concentra en
> `diagnostico-robotica-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Por qué Robótica parte de Técnico Electromecánico

La Robótica **no** es "electrónica más programación": es mecánica,
electricidad, electrónica, control y programación integrados en un
mismo sistema físico. Quien ya completó `Técnico Electromecánico`
(`OF11`) tiene desbloqueada gran parte del camino automáticamente —
mecanizado, máquinas eléctricas, PLC, servomecanismos ya se vieron
ahí. Esta materia estudia sólo lo específicamente robótico que se
agrega por encima: matemática para describir movimiento en el
espacio, microcontroladores, sensores y actuadores particulares, y el
software que coordina todo eso.

## Matemática para robótica

Describir la posición y el movimiento de un robot en el espacio
requiere un lenguaje matemático específico: **vectores** (una
magnitud con dirección, como la velocidad de una articulación) y
**matrices** (arreglos de números usados para representar
transformaciones, como una rotación o un desplazamiento, y para
combinar varias transformaciones en una sola operación).

## Sistemas de coordenadas

Un robot puede describirse desde distintos **sistemas de
coordenadas**: uno fijo al espacio de trabajo (el "mundo"), uno fijo a
la base del robot, y uno fijo a cada articulación o al extremo que
manipula el objeto (el "efector final"). Convertir una posición de un
sistema a otro —por ejemplo, saber dónde está el efector final en
coordenadas del mundo, a partir de los ángulos de cada articulación—
es la operación matemática central de toda la robótica, y se retoma en
detalle en `../cinematica-y-dinamica-robotica/`.

## Bucles, la base de todo control robótico

`../informatica/estructuras-de-control-bucles/`, ya presentado en
Informática, es la base de cómo un robot en realidad "actúa": lee un
sensor, decide una acción, la ejecuta, y vuelve a leer — un bucle que
se repite muchas veces por segundo. Todo el resto de esta materia
(control de trayectoria, navegación, visión) es, en el fondo, una
variación cada vez más sofisticada de ese mismo bucle.
