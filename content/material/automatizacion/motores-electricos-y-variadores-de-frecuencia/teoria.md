# Automatizacion — Motores eléctricos y variadores de frecuencia (teoría)

> Tema del MAPA: `automatizacion/motores-electricos-y-variadores-de-frecuencia`. Depende de `../fisica/induccion-electromagnetica-faraday-lenz/` y `servomecanismos/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Qué tipos de motor hay, cómo se calcula la velocidad del asíncrono y para qué sirve un variador.

---

## 1. Qué es un motor eléctrico

Un motor eléctrico convierte energía eléctrica en energía mecánica de rotación. Está en bombas, ventiladores, cintas transportadoras, máquinas herramienta, ascensores, electrodomésticos y vehículos. La física de fondo es la fuerza que un campo magnético ejerce sobre una corriente: con un campo giratorio o corrientes conmutadas se logra que el eje gire.

## 2. Los tipos principales

- **Motor de corriente continua (CC)**: se alimenta con tensión continua. Su velocidad se regula bien variando la tensión. Los clásicos usan escobillas y colector, que se desgastan; los modernos sin escobillas (brushless) se conmutan electrónicamente.
- **Motor asíncrono trifásico (de inducción)**: el más usado en la industria. Es robusto, económico y casi no necesita mantenimiento. El rotor tipo jaula de ardilla gira un poco más lento que el campo magnético del estator.
- **Motor paso a paso**: gira un ángulo fijo por cada pulso recibido. Con pasos de 1,8° da 200 pasos por vuelta. Permite posicionar sin sensor en aplicaciones livianas, como impresoras 3D y máquinas CNC chicas.
- **Servomotor**: un motor con sensor de posición y un controlador que cierra el lazo, para seguir referencias con rapidez y precisión. Es el actuador típico de los servomecanismos.

## 3. Velocidad del motor asíncrono

La velocidad del campo giratorio, llamada **velocidad sincrónica**, depende de la frecuencia de la red y del número de polos del motor:

ns = 120 · f / p (en rpm, con f en hertz y p el número de polos)

En Argentina la red es de 50 Hz. Un motor de 4 polos tiene velocidad sincrónica de 1500 rpm. El rotor gira algo más lento, por ejemplo 1450 rpm, y a la diferencia relativa se la llama **deslizamiento**: s = (ns − n) / ns. Crece con la carga, y en motores comunes ronda pocos puntos porcentuales a plena carga.

## 4. El arranque

Al arrancar, un motor asíncrono toma una corriente varias veces mayor que la nominal. Para limitarla se usan distintas formas de arranque:

- **Directo**: se conecta a la red. Es simple, pero la corriente de arranque es alta; se usa en motores chicos.
- **Estrella-triángulo**: arranca con los bobinados en estrella, con menor tensión por fase, y luego pasa a triángulo. Reduce la corriente de arranque a aproximadamente un tercio, pero también el par.
- **Arrancador suave**: electrónico, aumenta la tensión gradualmente.
- **Variador de frecuencia**: permite arrancar con suavidad y controlar la velocidad.

## 5. El variador de frecuencia

El variador convierte la tensión de la red en una tensión y una frecuencia ajustables. Como la velocidad sincrónica depende de la frecuencia, cambiando la frecuencia se cambia la velocidad del motor. Para que el flujo magnético se mantenga, el variador ajusta la tensión en proporción a la frecuencia, lo que se llama control V/f.

Ventajas:

- Control continuo de velocidad en lugar de apagar y prender.
- Arranque y parada suaves, que alargan la vida útil de los equipos.
- Ahorro de energía importante en bombas y ventiladores, porque la potencia necesaria baja mucho al reducir la velocidad.
- Protecciones integradas.

Se comanda con una entrada analógica (por ejemplo 4 a 20 mA), con entradas digitales o por comunicación desde un PLC.

## 6. Elegir y cuidar un motor

Se seleccionan por potencia, velocidad, tensión, tipo de servicio y grado de protección de la carcasa (código IP). La chapa de características indica estos datos. Un motor sobrecargado se calienta y se daña, por lo que se protege con relé térmico o con la protección del variador. Un buen mantenimiento incluye revisar rodamientos, temperatura, vibraciones y conexiones.
