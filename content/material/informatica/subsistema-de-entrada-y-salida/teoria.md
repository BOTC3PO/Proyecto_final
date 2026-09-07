# Informática — Subsistema de entrada y salida (teoria)

> Tema del MAPA: `SOES1` (`troncos.md`). Depende de del nodo `SO1` de `troncos.md` (sin carpeta propia todavía) (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## ¿Qué es el subsistema de entrada y salida?

Para entender cómo funciona una computadora, es útil imaginarla como una cocina. El procesador es el chef que prepara los platos, la memoria es donde guarda las recetas y los ingredientes, pero sin una forma de recibir órdenes del cliente ni de entregar el plato terminado, el sistema no tendría utilidad. Aquí es donde entra el subsistema de entrada y salida (E/S). Este conjunto de componentes y protocolos permite que la computadora interactúe con el mundo exterior, recibiendo datos para procesarlos y enviando los resultados obtenidos hacia afuera.

En términos técnicos, la "entrada" se refiere a cualquier dato que ingresamos al sistema, ya sea a través de un teclado, un mouse, un micrófono o incluso un archivo descargado de internet. Por otro lado, la "salida" es la información procesada que el sistema nos muestra, como el texto en la pantalla, el sonido de los parlantes o la impresión de un documento. Sin este subsistema, la computadora sería una caja negra incapaz de comunicarse con el usuario o con otros dispositivos, quedando aislada y sin propósito práctico.

La importancia de este tema radica en que la velocidad y eficiencia del subsistema de E/S determinan en gran medida el rendimiento general de la computadora. A menudo, el procesador es tan rápido que tiene que esperar a que los dispositivos de entrada o salida le envíen o reciban datos. Por eso, entender cómo fluye la información entre el hardware y el software es fundamental para comprender por qué un equipo puede sentirse lento o por qué ciertos periféricos no funcionan correctamente.

## El puente entre el mundo digital y el físico

La comunicación entre la CPU (unidad central de procesamiento) y los dispositivos externos no es directa ni sencilla, ya que operan a velocidades y con lenguajes muy diferentes. Para solucionar esto, existe un componente clave llamado controlador de E/S o *chipset*. Este actúa como un traductor o intermediario, asegurando que los datos que llegan del teclado se entiendan correctamente por el sistema operativo y que las instrucciones de la pantalla se conviertan en señales eléctricas que los píxeles puedan interpretar.

Históricamente, la conexión se hacía mediante puertos específicos como el paralelo o el serial, pero hoy en día predominan los buses universales como USB (Interfaz Serial Universal) y los estándares inalámbricos como Bluetooth. Estos protocolos estandarizan la forma en que los dispositivos se conectan, permitiendo que un mouse comprado en cualquier parte del mundo funcione en tu computadora sin necesidad de drivers complicados, siempre que el sistema operativo lo soporte.

Además, existe un concepto llamado "mapeo de memoria" que permite a la CPU comunicarse con los dispositivos de E/S como si fueran parte de la memoria principal. Esto simplifica enormemente la programación, ya que el procesador no necesita instrucciones especiales para leer o escribir datos en un disco duro o en una tarjeta gráfica; simplemente accede a direcciones de memoria específicas que el hardware ha reservado para esa función.

## Aplicación práctica: Tu computadora en acción

Para visualizar este concepto, tomemos un ejemplo cotidiano: escribir un mensaje en WhatsApp Web desde tu computadora en Buenos Aires. Cuando presionas una tecla, el teclado envía una señal eléctrica al controlador de E/S, que la traduce y la coloca en la memoria RAM. El sistema operativo detecta este evento, lo envía a la aplicación de WhatsApp, y esta procesa la letra.

Luego, para que veas la letra en la pantalla, el proceso se invierte. La aplicación le dice a la tarjeta gráfica qué dibujar. La tarjeta gráfica, actuando como dispositivo de salida, lee esa información de la memoria y envía señales a los cables HDMI o DisplayPort que conectan tu monitor. Finalmente, el monitor recibe esas señales y enciende los píxeles correspondientes, mostrándote la "a" que escribiste.

Otro ejemplo relevante es el uso de un pendrive USB. Al conectarlo, el sistema detecta el nuevo dispositivo de entrada/salida masiva. Si copias un archivo de fotos desde tu disco duro al pendrive, estás realizando una operación de salida (escribir en el USB). Si luego conectas ese pendrive a otra computadora y abres las fotos, estás realizando una operación de entrada (leer desde el USB). Comprender este flujo bidireccional te ayuda a diagnosticar problemas comunes, como identificar si un error de "dispositivo no reconocido" se debe a un fallo en el cable, en el puerto USB o en los controladores instalados en el sistema.
