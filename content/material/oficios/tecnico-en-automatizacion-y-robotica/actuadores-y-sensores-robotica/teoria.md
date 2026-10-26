# Oficios — Técnico en Automatización y Robótica — Actuadores y sensores (teoria)

> Tema del MAPA: `OF16.actuadores-y-sensores-robotica` (`troncos.md`).
> Depende de `../microcontroladores-y-programacion-embebida/` (ver
> `../dependencias.md`). Lección informativa — la evaluación del
> oficio se concentra en `diagnostico-robotica-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Actuadores: cómo un robot se mueve

Un **actuador** convierte una señal de control en movimiento físico.
El **servomotor** recibe una señal (típicamente PWM) y se posiciona en
un ángulo específico, manteniéndolo activamente — ideal para
articulaciones que necesitan una posición precisa y conocida. El
**motor paso a paso** avanza en incrementos fijos y exactos por cada
pulso eléctrico recibido, permitiendo un control de posición muy
preciso sin necesitar un sensor de realimentación. El **motor BLDC**
(de corriente continua sin escobillas) prioriza eficiencia y
durabilidad sobre precisión de posición, y suele usarse donde importa
más la velocidad y la potencia sostenida (como en las ruedas de un
robot móvil) que el posicionamiento angular exacto.

## Sensores: cómo un robot percibe

Ya se presentaron sensores en general en `../electronica/sensores-y-actuadores/`;
acá se ven los específicos de robótica. El **encoder** mide la
posición o la velocidad de rotación de un eje, permitiendo que el
sistema sepa exactamente dónde está una articulación en cada momento
(la realimentación que un motor paso a paso no necesita, pero un
servomotor de alta precisión sí usa). La **IMU** (unidad de medición
inercial) combina acelerómetro y giroscopio para estimar la
orientación y el movimiento de todo el robot en el espacio, no sólo de
una articulación. Las **cámaras** aportan percepción visual —la base
de la visión artificial que se ve en `../robotica-industrial-y-vision/`.
El **LIDAR** mide distancias emitiendo pulsos de luz láser y midiendo
cuánto tardan en rebotar, generando un mapa de los objetos alrededor
del robot — fundamental para la navegación autónoma.

## Por qué actuadores y sensores se estudian juntos

Un robot es, en esencia, un bucle constante entre percibir (sensores)
y actuar (actuadores), coordinado por el microcontrolador y el
software de control. Elegir el sensor y el actuador correctos para
una tarea específica —precisión necesaria, velocidad de respuesta,
costo— es una de las decisiones de diseño más frecuentes en robótica
aplicada.
