# Oficios — Mecánico — Diagnóstico automotor por casos (teoria)

> Tema del MAPA: `OF5.diagnostico-automotor-por-casos` (`troncos.md`).
> Depende de `../mantenimiento-mecanico/` (ver `../dependencias.md`).
> Cierre del oficio: acá se concentra la evaluación
> (`cuestionario.md`), a diferencia de las lecciones anteriores, que
> son informativas. El corazón del oficio moderno.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Por qué el diagnóstico moderno empieza por el scanner

Los vehículos actuales registran fallas automáticamente en sus
centralitas electrónicas, generando **códigos de falla** que un
scanner OBD (*On-Board Diagnostics*) puede leer conectándose al
vehículo. Pero un código de falla no es la respuesta final — es el
punto de partida de una hipótesis que hay que verificar: el mismo
código puede tener más de una causa real posible, y el mecánico
moderno combina la lectura electrónica con verificación física, no
reemplaza una por la otra.

## Caso 1: código de falla de sensor de oxígeno

Un código que señala un problema en el sensor de oxígeno (que mide
cuánto oxígeno sobra en los gases de escape, información clave para
ajustar la mezcla de combustible) no siempre significa que el sensor
en sí esté roto: puede ser el sensor, pero también puede ser una fuga
de escape antes del sensor (que altera la lectura sin que el sensor
tenga ninguna falla) o un problema en la propia mezcla de combustible
que el sensor está reportando correctamente. Reemplazar el sensor sin
verificar antes cuál de las tres causas es la real puede "resolver" el
código sin resolver el problema de fondo.

## Caso 2: el motor arranca con dificultad en frío

Cuando un motor cuesta arrancar específicamente en frío (pero arranca
bien una vez caliente), las sospechas se concentran en el sistema de
encendido (bujías desgastadas, que generan una chispa más débil,
notoria justo en la condición más exigente del arranque en frío) o en
la batería (que pierde capacidad efectiva con el frío, entregando
menos corriente de arranque justo cuando el motor frío exige más
esfuerzo para moverse). Un motor de arranque débil complica el
diagnóstico porque agrava ambos escenarios por igual.

## Caso 3: vibración anormal a cierta velocidad

Una vibración que aparece específicamente en un rango de velocidad (y
no en otros) suele apuntar a un desbalanceo (una rueda o el conjunto
motor-transmisión no está perfectamente equilibrado, y ese desbalanceo
se hace evidente sólo quando gira a una frecuencia específica) más que
a una falla generalizada. Distinguir si la vibración se siente en el
volante (más asociado a las ruedas delanteras) o en todo el vehículo
(más asociado a la transmisión o al motor) orienta el diagnóstico
antes de desarmar nada.

## Caso 4: pérdida de potencia sin código de falla evidente

Cuando el vehículo pierde potencia notablemente pero el scanner no
muestra ningún código claro, conviene revisar elementos que no
siempre generan un código específico: un filtro de aire muy obstruido,
una obstrucción parcial en el sistema de escape, o un desgaste
generalizado que reduce la compresión de los cilindros sin disparar
ninguna alarma electrónica puntual — el scanner es una herramienta
poderosa, pero no reemplaza por completo la verificación mecánica
directa.

## El método, resumido

En los cuatro casos se repite la misma lógica: un código o un síntoma
es una hipótesis de partida, no una conclusión; verificar físicamente
antes de reemplazar piezas caras basándose sólo en lo que muestra el
scanner; y recordar que el diagnóstico automotor moderno combina
electrónica y mecánica, nunca sólo una de las dos.
