# Informática — Segmentación (teoria)

> Tema del MAPA: `SO2b` (`troncos.md`). Depende de del nodo `SO2` de `troncos.md` (sin carpeta propia todavía) (ver `../dependencias.md`). Generado con qwen/qwen3.6-35b-a3b, revisión pendiente antes de considerarse final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## ¿Qué es la segmentación y por qué es fundamental?

En el mundo de la informática y las telecomunicaciones, la **segmentación** es el proceso de dividir un flujo de datos grande en partes más pequeñas y manejables, llamadas segmentos o paquetes. Imaginá que tenés que enviar una caja enorme por correo; en lugar de mandar la caja completa, que es pesada y difícil de rastrear, la abrís y enviás los objetos uno por uno en sobres más chicos. La segmentación hace exactamente eso con la información digital: toma un archivo grande, como una película o un documento, y lo corta en trozos más pequeños para que viajen por la red de manera eficiente.

Este concepto es crucial porque las redes no están diseñadas para transmitir datos infinitos de una sola vez. Si intentaras enviar un archivo de varios gigabytes sin segmentarlo, la conexión podría saturarse, perderse información o simplemente fallar si hay una interrupción momentánea. Al dividir los datos, podemos controlar mejor el flujo de información, asegurar que llegue completo y, lo más importante, permitir que diferentes tipos de información compartan el mismo cable o señal inalámbrica sin interferirse mutuamente. Sin la segmentación, internet tal como la conocemos, con su capacidad para transmitir video, voz y texto simultáneamente, simplemente no sería posible.

## Cómo funciona el proceso de segmentación

El proceso de segmentación ocurre principalmente en la capa de transporte del modelo de referencia de redes, especialmente cuando utilizamos protocolos como TCP (Transmission Control Protocol) o UDP (User Datagram Protocol). Cuando tu computadora envía datos a un servidor, por ejemplo, al cargar una página web, el sistema operativo verifica si el tamaño de los datos supera un límite establecido por la red, conocido como MTU (Maximum Transmission Unit). Si los datos son más grandes que ese límite, el protocolo TCP se encarga de dividirlos en segmentos más pequeños.

Cada uno de estos segmentos recibe una "etiqueta" especial que incluye información vital para su reconstrucción posterior. Esta etiqueta contiene, entre otros datos, el número de secuencia, que indica el orden en que deben ir los paquetes, y la dirección IP de origen y destino. Gracias a esta numeración, cuando los segmentos llegan al otro lado, aunque hayan tomado caminos diferentes por la red o hayan llegado en desorden, el sistema receptor sabe exactamente cómo volver a unirlos para formar el archivo original intacto. Es como armar un rompecabezas donde cada pieza tiene un número impreso en el reverso que te dice dónde va.

## Aplicación práctica: Navegar por internet y jugar online

Para entender mejor la utilidad de la segmentación, pensemos en ejemplos cotidianos. Cuando estás viendo un video en YouTube o Netflix, el servicio de streaming está segmentando la película en miles de pequeños fragmentos que se descargan y se reproducen casi al mismo tiempo. Si no hubiera segmentación, tendrías que esperar a que toda la película se descargue por completo antes de poder ver el primer segundo, lo cual haría imposible el consumo de contenido en tiempo real. Esta técnica permite que el video fluya suavemente incluso si tu conexión a internet tiene picos de lentitud.

Otro ejemplo claro se da cuando jugás videojuegos online, como *Fortnite* o *FIFA*. En estos casos, la segmentación es vital para mantener la fluidez del juego. Los datos de tu posición, los movimientos de tus compañeros y los eventos del juego se dividen en paquetes mínimos que viajan constantemente hacia el servidor y viceversa. Si un paquete se pierde por una caída momentánea de tu conexión Wi-Fi, el protocolo puede pedir que se reenvíe solo ese segmento específico, sin tener que reiniciar toda la transmisión. Esto garantiza que la experiencia de juego sea responsiva y que los errores de red sean mínimos, permitiendo que jugadores de diferentes lugares interactúen en tiempo real de forma estable.
