# Electrónica — Comunicación serie: UART, I2C y SPI (teoría)

> Tema del MAPA: `electronica/comunicacion-serie-uart-i2c-spi` (nodo propuesto, ver `../dependencias.md`). Depende de `../microcontrolador-entradas-y-salidas-digitales/`.

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Los tres protocolos más usados para que un microcontrolador intercambie datos con otros chips y dispositivos.

---

## 1. Serie versus paralelo

Para enviar un byte entre dos dispositivos se puede usar una línea por cada bit, enviando los ocho a la vez (comunicación paralela), o una sola línea por la que los bits viajan uno tras otro (comunicación serie). La paralela es rápida pero necesita muchos cables y es sensible a las diferencias de tiempo entre ellos. La serie usa pocos conductores, por lo que es la elegida para distancias largas y para ahorrar pines. Los tres protocolos de este tema son seriales.

## 2. Síncrono y asíncrono

Hace falta que emisor y receptor sepan cuándo leer cada bit. En la comunicación asíncrona no hay una línea de reloj: ambos acuerdan de antemano la velocidad y cada uno cuenta su propio tiempo. En la comunicación síncrona hay una línea de reloj compartida que marca cuándo leer cada bit.

## 3. UART

La UART es el protocolo serie asíncrono más simple. Usa dos líneas, TX (transmisión) y RX (recepción), cruzadas entre dos dispositivos: el TX de uno va al RX del otro, y además comparten masa. Como no hay reloj, ambos deben configurarse con la misma velocidad, llamada tasa de baudios (baud rate), por ejemplo 9600 o 115200 bits por segundo. Los datos viajan en tramas: un bit de inicio, los bits de datos (habitualmente 8), a veces un bit de paridad y uno o dos bits de parada. En la configuración 8N1 (8 bits de datos, sin paridad, 1 bit de parada), cada byte se manda con 10 bits en total. Se usa para conectar un microcontrolador con una computadora, un módulo GPS o un módulo Bluetooth.

## 4. I2C

El I2C usa solo dos líneas para conectar muchos dispositivos: SDA (datos) y SCL (reloj), compartidas por todos. Hay un dispositivo maestro, que genera el reloj e inicia la comunicación, y varios esclavos, cada uno con una dirección de 7 bits. El maestro envía primero la dirección del esclavo con el que quiere hablar, y solo ese responde. Como las líneas se manejan en colector abierto, hacen falta resistencias pull-up en SDA y SCL. Es muy usado con sensores, pantallas y memorias, porque permite agregar dispositivos sin sumar pines. Su velocidad es moderada.

## 5. SPI

El SPI es un protocolo síncrono más rápido que el I2C. Usa cuatro líneas: SCLK (reloj), MOSI (datos del maestro al esclavo), MISO (datos del esclavo al maestro) y CS o SS (selección de esclavo). Como hay una línea de datos en cada sentido, la comunicación es full dúplex: se puede enviar y recibir al mismo tiempo. A diferencia del I2C, no hay direcciones: cada esclavo tiene su propia línea CS, y el maestro activa la del dispositivo con el que quiere hablar, por lo que agregar dispositivos exige un pin más por cada uno. Se usa donde se necesita velocidad: tarjetas SD, pantallas gráficas, convertidores y memorias.

## 6. Cómo elegir

UART sirve para enlaces punto a punto simples. I2C conviene para muchos dispositivos lentos con pocos cables. SPI es la elección cuando importa la velocidad. En todos los casos hay que respetar los niveles de tensión de los dispositivos, ya que conectar uno de 5 V a otro de 3,3 V puede dañarlo, y los dos extremos deben usar el mismo protocolo y la misma configuración.

## N. Conexión con lo que sigue

Este tema conecta con `../../automatizacion/` (comunicación industrial) y con `../../informatica/protocolo-http-peticion-respuesta/`, que muestra la misma idea de acordar un formato de intercambio a otra escala.
