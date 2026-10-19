# Dibujo técnico — Vistas auxiliares y detalles (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `dibujo-tecnico/vistas-auxiliares-y-detalles`. Depende de `../cortes-y-secciones/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Recursos para mostrar sin deformación las caras inclinadas y los detalles chicos de una pieza.

---

## 1. El problema de la cara inclinada

En la proyección ortogonal (`sistemas-de-proyeccion/`), una cara se ve en **verdadera magnitud** solo si es paralela al plano de proyección. Una cara inclinada aparece **acortada** en las vistas principales: un círculo se ve como una elipse, una longitud inclinada se ve más corta. Dibujar y acotar así es impreciso. Las vistas auxiliares resuelven esto.

## 2. Vista auxiliar

Una **vista auxiliar** se obtiene proyectando la pieza sobre un plano paralelo a la cara inclinada, que se coloca perpendicular a una de las vistas principales. En la nueva vista, esa cara aparece sin deformación. Se traza llevando proyectantes perpendiculares a la cara inclinada y midiendo las distancias en las vistas existentes (las profundidades se toman de la otra vista donde se ve la cara de canto).

Se dibuja solo la parte que interesa (la cara inclinada y lo que tiene), no la pieza entera, y se indica con una **flecha de mirada** y una letra, o se la ubica en proyección directa. Las vistas auxiliares se pueden alinear con la vista de la que derivan.

## 3. Vistas parciales e interrumpidas

- **Vista parcial**: se muestra solo una parte de la pieza cuando el resto es simétrico o repetido, limitada por una línea de interrupción o de eje.
- **Vista interrumpida**: piezas muy largas y uniformes (un eje, un perfil) se dibujan cortadas con línea ondulada o de zigzag, con las cotas del largo real. Ahorra espacio sin perder información.
- **Vista girada**: para elementos como nervios o brazos no alineados, se los puede abatir en el dibujo hasta ponerlos en posición para mostrar su forma real, por convención.

## 4. Vistas de detalle

Cuando una zona es muy chica para ser leída o acotada con claridad (una ranura, una rosca, un entalle), se la encierra con una circunferencia fina, se la identifica con una letra y se dibuja **ampliada** en otro lugar, indicando su escala ("Detalle A, escala 5:1"). Se aclara la escala de ampliación aparte de la del resto del dibujo.

## 5. Cómo se interpretan

Se parte siempre de la vista de origen, se sigue la flecha o la proyección y se comprende cada una de las vistas como parte de la misma pieza. Las vistas auxiliares se acotan como las demás, pero las medidas que corresponden a la cara inclinada se toman en la vista auxiliar, donde están en verdadera magnitud.

## 6. Criterio de uso

Se usan las vistas que hagan falta y ninguna de más. Una pieza con una sola cara inclinada y un círculo en ella justifica una vista auxiliar; una pieza prismática simple, no. Elegir bien las vistas es parte del trabajo del dibujante.

## N. Conexión con lo que sigue

El criterio de selección de vistas se completa en `interpretar-planos-de-piezas-y-conjuntos/`, y los detalles acotados se vinculan con `tolerancias-y-ajustes/`.
