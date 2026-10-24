# Automatizacion — Redes industriales y SCADA (teoría)

> Tema del MAPA: `automatizacion/redes-industriales-y-scada`. Depende de `plc-logica-de-control-industrial/` y `../informatica/protocolo-http-peticion-respuesta/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo se comunican los equipos de una planta y qué hacen una HMI y un SCADA.

---

## 1. Por qué hablan los equipos entre sí

Una fábrica moderna no tiene un PLC aislado: hay varios PLC, variadores, sensores inteligentes, pantallas y computadoras que necesitan intercambiar datos. En vez de conectar cada señal con un cable propio, se usan **redes industriales**, que llevan muchos datos por pocos cables. Esto reduce el cableado, facilita el diagnóstico y permite supervisar toda la planta desde un punto.

## 2. Qué las distingue de una red de oficina

Una red industrial está pensada para otras exigencias:

- **Determinismo**: los mensajes deben llegar en un tiempo acotado y previsible. Un retraso puede significar un daño o una parada.
- **Robustez**: soportan ruido eléctrico, vibraciones, temperatura y polvo.
- **Disponibilidad**: no pueden detenerse a diario para actualizarse.
- **Larga vida útil**: los equipos industriales duran décadas, y los protocolos también.

## 3. Modbus, el protocolo más difundido

Modbus fue creado por Modicon en 1979 para comunicar PLC. Es simple y abierto, y por eso sigue muy presente. Funciona con el modelo **maestro-esclavo** (o cliente-servidor): un maestro envía una pregunta y el esclavo responde. Los datos se organizan en registros con direcciones: bobinas (bits de salida), entradas discretas, registros de entrada y registros de mantenimiento.

Tiene dos versiones comunes:

- **Modbus RTU**: sobre una línea serie, por lo general RS-485, que permite largas distancias (alrededor de 1200 metros a velocidades bajas; a mayor velocidad, la distancia máxima baja) y varios dispositivos en un mismo par de cables. Cada esclavo tiene una dirección de 1 a 247.
- **Modbus TCP**: sobre Ethernet, usando la infraestructura de redes de datos.

## 4. Buses de campo y Ethernet industrial

Además de Modbus hay familias más completas:

- **Profibus** y **Profinet** (impulsados por Siemens y otros).
- **EtherNet/IP** (de Rockwell Automation) y **EtherCAT**, **CAN** y **CANopen**, muy usados en maquinaria.
- **OPC UA**, un estándar para intercambiar datos entre sistemas de distintos fabricantes de forma segura, que se usa mucho entre el piso de planta y los sistemas de supervisión.

No hace falta memorizarlas todas: lo importante es saber que existe un protocolo para cada necesidad y que los equipos deben ser compatibles entre sí.

## 5. HMI y SCADA

La **HMI** (interfaz humano-máquina) es la pantalla donde el operador ve el estado de una máquina y da órdenes: marcha, parada, consignas, alarmas.

El **SCADA** (supervisión, control y adquisición de datos) amplía esa idea a una planta o a una red de instalaciones. Un sistema SCADA recoge datos de muchos PLC, los muestra en pantallas con diagramas del proceso, registra históricos y tendencias, administra alarmas y permite enviar órdenes a distancia. Se usa en plantas industriales, redes de agua, distribución eléctrica y oleoductos.

## 6. Niveles de la automatización

Una forma habitual de ordenar los sistemas es por niveles. En la base están los sensores y actuadores (campo). Arriba, los PLC y controladores (control). Luego el SCADA y las HMI (supervisión). Después los sistemas de gestión de la producción. Y en la cima, la gestión de la empresa. Los datos suben y las órdenes bajan.

## 7. Seguridad informática en planta

Conectar equipos industriales a redes de datos mejora la gestión pero abre la puerta a ataques. Antes, una planta aislada estaba protegida por su aislamiento. Hoy se recomienda separar la red industrial de la red de oficinas con cortafuegos, usar contraseñas robustas, limitar el acceso remoto y mantener los sistemas actualizados cuando sea posible. Un ataque contra un sistema de control puede afectar procesos físicos, no solo datos.
