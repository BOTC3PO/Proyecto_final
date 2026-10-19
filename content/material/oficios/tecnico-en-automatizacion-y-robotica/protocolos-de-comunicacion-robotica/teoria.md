# Oficios — Automatización y robótica — Protocolos de comunicación en robótica y automatización (teoria)

> Tema del MAPA: nodo propuesto en `../../../_plan-faltantes/oficios-b.md` (sin ID en `troncos.md` todavía). Depende de
> `microcontroladores-y-programacion-embebida/` (ver `../../dependencias.md`). Lección informativa — la
> evaluación del oficio se concentra en `diagnostico-robotica-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Para qué se comunican las máquinas

Un sistema automatizado está formado por muchos dispositivos: sensores, controladores, variadores, robots, pantallas, computadoras. Todos necesitan intercambiar datos: valores medidos, órdenes, estados y alarmas. Un **protocolo** es el conjunto de reglas que define cómo se estructuran esos mensajes, qué significa cada uno y cómo se transmiten por un medio físico. Elegir mal el protocolo o configurarlo mal es una fuente frecuente de fallas en la puesta en marcha.

## Capa física y capa lógica

Una comunicación tiene dos partes. La **capa física** es el cableado y las señales eléctricas: **RS-232** (punto a punto, distancias cortas), **RS-485** (diferencial, permite varios dispositivos en un mismo par de cables y distancias de cientos de metros, muy usado en la industria), **CAN** (común en vehículos y máquinas) y **Ethernet** (cable de par trenzado o fibra). La **capa lógica** define el formato de los mensajes. Un mismo medio físico puede transportar protocolos diferentes.

## Comunicación serie y la familia Modbus

El **Modbus** es un protocolo simple y abierto, nacido en 1979, que sigue siendo muy popular. En su variante **Modbus RTU** funciona sobre RS-485 con una arquitectura maestro-esclavo: el maestro pregunta a un esclavo, identificado por su dirección, y el esclavo responde. Se leen y escriben **registros** y bits (bobinas). **Modbus TCP** transporta lo mismo sobre Ethernet. Su sencillez lo hace ideal para conectar variadores, medidores y sensores, aunque no incluye seguridad.

## Buses de campo y Ethernet industrial

Los **buses de campo** reemplazan el cableado punto a punto por un solo cable que conecta muchos dispositivos: **CANopen** (sobre CAN), **PROFIBUS** y **DeviceNet** son ejemplos. La generación actual usa **Ethernet industrial**: **PROFINET**, **EtherNet/IP** y **EtherCAT**, con tiempos de respuesta muy cortos y buen determinismo, algo necesario para sincronizar los ejes de un robot. Cada familia está asociada a ciertos fabricantes de PLC y variadores, por lo que la elección suele depender del equipo disponible.

## Protocolos para datos y supervisión

**OPC UA** es un estándar para intercambiar datos de manera independiente del fabricante, con modelo de información y seguridad integrada. **MQTT** es un protocolo liviano de publicación y suscripción, muy usado para enviar datos de sensores a servidores y a la nube (internet de las cosas industrial). En robótica móvil y de servicio es muy común **ROS**, que organiza la comunicación entre programas mediante nodos que publican y se suscriben a **tópicos**.

## Comunicación dentro de la placa

Entre un microcontrolador y sus periféricos se usan buses cortos: **I2C** (dos hilos, varios dispositivos con dirección), **SPI** (más rápido, con una línea de selección por dispositivo) y **UART** (comunicación serie asíncrona). Un error común es mezclar niveles de tensión de 3,3 V y 5 V sin adaptación.

## Parámetros y diagnóstico

En comunicación serie, ambos extremos deben coincidir en **velocidad (baudios), bits de datos, paridad y bits de parada**; en RS-485 se agregan la dirección de cada dispositivo, la terminación de línea con resistencias en los extremos y el cableado en cadena, sin ramificaciones largas. En Ethernet, direcciones IP, máscara y puerta de enlace. Cuando un dispositivo no responde se verifica en orden: alimentación, cableado, terminación, parámetros de comunicación y, por último, el programa. Un analizador de protocolo o un monitor serie permite ver los mensajes reales.

## Seguridad informática industrial

Conectar una máquina a la red la expone. Buenas prácticas básicas: cambiar contraseñas por defecto, separar la red de producción de la red de oficina, no exponer controladores directamente a internet, actualizar el firmware y registrar accesos. Una planta que se comunica sin protección puede ser alterada o detenida desde afuera.
