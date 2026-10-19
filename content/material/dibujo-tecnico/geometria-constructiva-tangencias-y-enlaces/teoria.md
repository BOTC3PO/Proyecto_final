# Dibujo técnico — Geometría constructiva: tangencias y enlaces (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `dibujo-tecnico/geometria-constructiva-tangencias-y-enlaces`. Depende de `../instrumentos-de-dibujo-y-trazos-basicos/` y `../../matematica/angulos/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Construcciones con regla y compás que sostienen los contornos de las piezas.

---

## 1. Para qué sirve

Los contornos de las piezas están hechos de rectas y arcos que se unen sin saltos: un perfil con esquinas redondeadas, un canal con extremos semicirculares, una leva. Para dibujarlos con exactitud se usan construcciones geométricas con regla y compás. Las fórmulas de `matematica/rectas-paralelas-y-perpendiculares/`, `matematica/angulos/` y `matematica/poligonos/` se vuelven acá operaciones sobre el papel.

## 2. Construcciones básicas

- **Mediatriz** de un segmento: la recta perpendicular que pasa por su punto medio. Se traza haciendo con el compás dos arcos de igual radio (mayor que la mitad del segmento) desde cada extremo; la recta que une los dos puntos de cruce es la mediatriz. Todos sus puntos equidistan de los extremos.
- **Bisectriz** de un ángulo: la recta que lo divide en dos ángulos iguales. Se traza con un arco desde el vértice que corta ambos lados y dos arcos iguales desde esos puntos.
- **Perpendicular por un punto** a una recta y **paralela** por un punto.
- **División de un segmento** en partes iguales, aplicando el teorema de Thales con una recta auxiliar.
- **Transporte de ángulos** con el compás.

## 3. Polígonos regulares

Un polígono regular tiene todos sus lados y ángulos iguales y se inscribe en una circunferencia. El **hexágono** se traza muy fácil: el radio de la circunferencia es igual al lado del hexágono, por lo que se lleva el radio seis veces sobre la circunferencia. El **triángulo equilátero** se obtiene uniendo vértices alternos del hexágono. El **cuadrado** se obtiene trazando dos diámetros perpendiculares; el **octógono** bisecando los ángulos del cuadrado. Para el **pentágono** hay una construcción especial. Cada ángulo interior de un polígono regular de n lados mide 180° × (n − 2) / n.

## 4. Tangencias

Una recta es **tangente** a una circunferencia si la toca en un solo punto, y ese punto de tangencia está alineado con el centro de manera perpendicular: **el radio al punto de tangencia es perpendicular a la tangente**. Dos circunferencias son tangentes si se tocan en un solo punto, y ese punto está sobre la recta que une sus centros. Estas dos propiedades resuelven casi todos los problemas.

Para trazar la tangente desde un punto exterior se construye la circunferencia que tiene por diámetro el segmento que une ese punto con el centro; donde corta a la circunferencia dada están los puntos de tangencia.

## 5. Enlaces (empalmes)

Un **enlace** o **empalme** es un arco que une dos rectas o dos arcos con continuidad, es decir, tangente a ambos. Es el redondeo de una esquina. Para enlazar dos rectas que se cortan con un arco de radio R: se trazan paralelas a cada recta a distancia R; su cruce es el **centro del arco**; las perpendiculares desde ese centro a cada recta dan los **puntos de tangencia**. Con el compás en el centro se traza el arco entre ambos puntos.

El mismo razonamiento se aplica a enlazar una recta con una circunferencia o dos circunferencias entre sí: el centro del arco de enlace está a una distancia R de cada elemento (a R de la recta; a R más o menos el radio de la circunferencia, según el arco quede por fuera o por dentro).

## 6. Dónde se ve

Esquinas redondeadas de chapas, perfiles, arandelas, levas, piezas de maquinaria y logotipos. También en el diseño de planos de arquitectura y de carreteras (curvas de enlace entre tramos rectos).

## N. Conexión con lo que sigue

Estas construcciones se utilizan en `cortes-y-secciones/` para trazar los perfiles de la pieza y en `dibujo-arquitectonico-plantas-cortes-y-fachadas/`.
