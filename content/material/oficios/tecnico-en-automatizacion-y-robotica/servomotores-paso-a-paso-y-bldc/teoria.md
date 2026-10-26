# Oficios — Automatización y robótica — Servomotores, motores paso a paso y BLDC (teoria)

> Tema del MAPA: nodo propuesto en `../../../_plan-faltantes/oficios-b.md` (sin ID en `troncos.md` todavía). Depende de
> `actuadores-y-sensores-robotica/` (ver `../../dependencias.md`). Lección informativa — la
> evaluación del oficio se concentra en `diagnostico-robotica-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Tres familias para mover un eje

Los robots y las máquinas automáticas mueven sus ejes con motores eléctricos controlados electrónicamente. Tres tipos cubren la mayoría de las aplicaciones: el motor **paso a paso**, el **servomotor** y el motor **BLDC** (de corriente continua sin escobillas). Cada uno tiene un equilibrio distinto entre costo, precisión, velocidad y complejidad.

## Motor paso a paso

Gira en **pasos discretos**: cada pulso que recibe el driver mueve el eje un ángulo fijo. Un motor típico tiene 200 pasos por vuelta (1,8° por paso), y con **micropasos** el driver subdivide cada paso para un movimiento más suave. Su gran ventaja es que se controla en **lazo abierto**: sin sensor de posición, contando pulsos se sabe dónde está el eje, siempre que no pierda pasos. Por eso es el motor de las impresoras 3D, los pequeños CNC y los posicionadores sencillos. Sus límites: el par cae al subir la velocidad, **si se exige más de lo que puede dar pierde pasos y no se entera**, calienta incluso detenido y hace ruido y vibración. Existen versiones con encoder (lazo cerrado) que corrigen ese defecto.

## Servomotor

Un servomotor es un conjunto de **motor, sensor de posición (encoder) y controlador** que cierra un lazo de control: compara continuamente la posición o velocidad pedida con la real y corrige. Se usa donde importan la precisión, la velocidad y el par dinámico, como los ejes de robots industriales y máquinas herramienta. Un buen servo entrega el par nominal en un amplio rango de velocidad, acelera rápido y detecta si el eje no llega a la posición. El **servo de aeromodelismo** (el pequeño servo de PWM de tres cables) es una versión simple con un lazo de posición interno, donde el ancho de un pulso de entre 1 y 2 ms fija el ángulo.

## Motor BLDC

El **motor sin escobillas** tiene el rotor de imanes permanentes y el estator con bobinas, que se energizan en secuencia con transistores. Como no tiene escobillas, no hay desgaste por contacto, hay menos ruido eléctrico, mejor rendimiento y larga vida. Necesita una **electrónica de conmutación** (un ESC o un driver) que conozca la posición del rotor, ya sea con **sensores de efecto Hall** o estimándola a partir de la fuerza contraelectromotriz. Es el motor de los drones, ventiladores, bicicletas eléctricas y muchos robots móviles. Con control vectorial (FOC) y un encoder, se comporta como un servomotor de alto desempeño.

## Cómo elegir

La elección depende de varias preguntas. ¿Hace falta posición precisa sin sensores y a bajo costo? El paso a paso. ¿Se requieren alta velocidad, altas aceleraciones y garantía de posición? Un servo. ¿Se necesita eficiencia, vida útil y potencia por peso? Un BLDC. También importan el torque requerido, la inercia de la carga (conviene que no sea muy superior a la del rotor), la reducción mecánica y la tensión de alimentación disponible.

## Torque, velocidad y reductores

Un motor entrega el par máximo a baja velocidad y menos par a alta velocidad. Los **reductores** (planetarios, armónicos, de tornillo sinfín) multiplican el par y bajan la velocidad, a costa de agregar **juego** (backlash) y fricción. En robots de precisión se usan reductores de juego casi nulo. El freno de retención evita que un eje vertical caiga cuando se corta la energía.

## Drivers y protección

El driver recibe señales de control de baja potencia (pulsos y dirección, señal analógica o comunicación digital) y entrega la corriente al motor. Se ajusta la **corriente máxima** al valor de placa del motor para evitar que se queme. Los motores generan tensiones al frenar, que el driver debe disipar o devolver a la fuente. Hay que respetar el cableado, el blindaje contra ruido eléctrico y las masas.

## Fallas típicas

Un paso a paso que vibra pero no gira: fase mal cableada o corriente insuficiente. Un servo que oscila: ganancias mal ajustadas. Un BLDC que no arranca: secuencia de sensores Hall mal conectada. Sobrecalentamiento: corriente excesiva, carga mecánica trabada o mala ventilación.
