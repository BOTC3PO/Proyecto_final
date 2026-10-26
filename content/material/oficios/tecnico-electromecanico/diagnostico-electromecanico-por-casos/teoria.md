# Oficios — Técnico Electromecánico — Diagnóstico multivariable por casos (teoria)

> Tema del MAPA: `OF11.diagnostico-electromecanico-por-casos`
> (`troncos.md`). Depende de `../mantenimiento-e-instrumentacion/`
> (ver `../dependencias.md`). Cierre del oficio: acá se concentra la
> evaluación (`cuestionario.md`), a diferencia de las lecciones
> anteriores, que son informativas. A diferencia de otros oficios, acá
> el diagnóstico combina varios síntomas a la vez (diagnóstico
> multivariable), no un solo síntoma aislado.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Por qué el diagnóstico electromecánico es multivariable

Una máquina industrial moderna entrega, al mismo tiempo, varias
lecturas de instrumentación (temperatura, corriente, vibración,
presión). Un técnico electromecánico experimentado no mira cada
lectura por separado: busca el **patrón combinado** entre varias
variables a la vez, porque esa combinación reduce mucho más las
hipótesis posibles que cualquier lectura aislada.

## Caso 1: temperatura elevada + corriente normal + vibración axial elevada

Este patrón combinado apunta con fuerza a un problema **mecánico**, no
eléctrico: si la corriente del motor es normal, el motor no está
"esforzándose" eléctricamente de más, por lo que el calor y la
vibración probablemente vienen de una fricción mecánica anormal —un
rodamiento desgastado o mal lubricado, por ejemplo, que genera calor
por fricción y vibración en el sentido axial del eje, sin que el motor
eléctrico en sí tenga ningún problema.

## Caso 2: corriente elevada + temperatura elevada + vibración normal

Este patrón, en cambio, apunta a un problema **eléctrico o de carga
mecánica excesiva** (no de rodamientos): el motor está consumiendo más
corriente de la normal y calentándose por eso, pero sin la vibración
anormal que indicaría un problema mecánico interno del propio motor
—la causa probable es que la máquina está exigiendo al motor más
trabajo del que fue diseñado para entregar en ese punto de operación,
o hay una falla eléctrica que aumenta el consumo sin generar
vibración.

## Caso 3: vibración elevada + corriente normal + temperatura normal

Cuando sólo la vibración está fuera de rango, con corriente y
temperatura normales, la causa suele ser puramente mecánica y externa
al motor mismo: un desbalanceo en el elemento acoplado (una polea, un
ventilador), una desalineación entre el motor y la máquina que impulsa,
o una base floja — el motor en sí está funcionando bien
eléctricamente, el problema está en la transmisión mecánica del
movimiento hacia afuera del motor.

## Caso 4: todas las variables elevadas al mismo tiempo

Cuando temperatura, corriente y vibración están elevadas
simultáneamente, la situación es más grave y probablemente involucra
más de una causa combinada, o una falla que ya avanzó lo suficiente
como para afectar a todo el sistema — corresponde detener la máquina
para una inspección completa, no intentar identificar una sola causa
aislada mientras sigue funcionando.

## El método, resumido

El diagnóstico multivariable no busca "la" causa a partir de un solo
dato, sino el patrón entre varias lecturas simultáneas: qué variables
están fuera de rango y cuáles están normales es, en conjunto, más
informativo que cualquier lectura aislada — la misma variable elevada
(por ejemplo, temperatura) puede señalar causas completamente
distintas según qué otras variables la acompañen.
