# Oficios — Técnico en Refrigeración — Fundamentos termodinámicos (teoria)

> Tema del MAPA: `OF7.fundamentos-termodinamicos-refrigeracion`
> (`troncos.md`). Depende de `../../fisica/cambios-de-estado-calor-
> latente/` (`TER4`), ya construido (ver `../dependencias.md`).
> Lección informativa — la evaluación del oficio se concentra en
> `diagnostico-refrigeracion-por-casos/`, al final. Es el oficio más
> compuesto de todo el cluster de construcción: junta el piso térmico
> (este tema) y el eléctrico (`fundamentos-electricos-refrigeracion/`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Cambios de estado: la base de todo el oficio

Un sistema de refrigeración no "genera frío" — extrae calor de un
lugar y lo traslada a otro, aprovechando que un fluido (el
**refrigerante**) absorbe una gran cantidad de calor al cambiar de
líquido a gas (evaporarse) y lo libera al cambiar de gas a líquido
(condensarse), sin que su temperatura cambie mucho durante ese
proceso. Ese calor absorbido o liberado durante el cambio de estado,
sin cambio de temperatura, es el **calor latente** — es mucho mayor
que el calor que ese mismo fluido absorbe o libera cuando sólo cambia
de temperatura sin cambiar de estado, y por eso es tan eficiente para
mover energía térmica de un lugar a otro.

## El ciclo de refrigeración, paso a paso

El **ciclo de refrigeración** repite cuatro etapas de forma continua:
**compresión** (el compresor eleva la presión y la temperatura del gas
refrigerante), **condensación** (ese gas caliente cede calor al
ambiente exterior a través del condensador y se convierte en
líquido), **expansión** (el líquido pasa por una válvula que reduce
bruscamente su presión) y **evaporación** (el líquido, ahora a baja
presión, absorbe calor del ambiente interior a través del evaporador y
vuelve a convertirse en gas, empezando el ciclo de nuevo). Entender
este ciclo completo —no sólo sus componentes por separado— es lo que
permite diagnosticar en qué etapa específica está fallando un equipo
cuando algo no funciona bien.

## Por qué el evaporador enfría y el condensador libera calor

La confusión más común de quien recién empieza es no entender por qué
un mismo fluido, en el mismo circuito, enfría en un punto y libera
calor caliente en otro: la clave es que en el evaporador el
refrigerante está a baja presión (y por lo tanto se evapora a baja
temperatura, absorbiendo calor del ambiente que rodea al evaporador),
mientras que en el condensador está a alta presión (y se condensa a
una temperatura más alta que el ambiente exterior, liberando calor
hacia afuera). Es el mismo principio físico —cambio de estado con
calor latente— aplicado en direcciones opuestas en dos puntos
distintos del mismo circuito.
