# Electrónica — Microcontrolador: entradas y salidas digitales (teoría)

> Tema del MAPA: `electronica/microcontrolador-entradas-y-salidas-digitales` (nodo propuesto, ver `../dependencias.md`). Depende de `../microcontroladores-y-microprocesadores/` y de `../../informatica/estructuras-de-control-bucles/`.

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo un microcontrolador lee un pulsador, enciende un LED y controla una carga usando sus pines digitales.

---

## 1. Los pines digitales

Un microcontrolador se comunica con el mundo mediante pines. Un pin digital puede configurarse como salida o como entrada. Como salida, el microcontrolador lo pone en nivel alto (cerca de la tensión de alimentación, por ejemplo 5 V o 3,3 V) o en nivel bajo (0 V). Como entrada, lee si la tensión que recibe es alta o baja y entrega un 1 o un 0 al programa. En la plataforma Arduino, por ejemplo, esto se hace con las funciones pinMode para configurar, digitalWrite para escribir y digitalRead para leer.

## 2. Límites de corriente

Los pines de un microcontrolador entregan o absorben corrientes pequeñas, del orden de unas decenas de miliamperios como máximo, y la suma de todos los pines también tiene un tope. Un LED necesita una resistencia en serie para no superar ese límite. Y las cargas más exigentes, como motores, relés o tiras de LED, no se conectan directamente al pin: se maneja un transistor con el pin, como se vio en el tema del transistor, y es el transistor el que gobierna la carga.

## 3. Leer un pulsador: entradas flotantes

Un pulsador conecta un punto con otro cuando se lo presiona. Si se conecta solo entre el pin y la alimentación, al soltarlo el pin queda al aire, sin un nivel definido; se dice que está flotante y puede leer valores aleatorios por ruido. Para evitarlo se usa una resistencia que fije el nivel en reposo. Con una resistencia pull-down (hacia masa), el pin lee 0 en reposo y 1 al presionar. Con una pull-up (hacia la alimentación), lee 1 en reposo y 0 al presionar, que es lo más común. Casi todos los microcontroladores tienen resistencias pull-up internas que se pueden activar por software, con lo cual no hace falta agregar una externa.

## 4. El rebote de los pulsadores

Un pulsador mecánico no cierra limpiamente: al presionarlo, los contactos rebotan durante unos pocos milisegundos y generan muchos cambios rápidos de 0 a 1 antes de estabilizarse. Si el programa cuenta cada cambio, un solo toque se interpreta como varios. Hay dos formas de resolverlo: por hardware, con un capacitor que filtra los cambios rápidos (el circuito RC visto antes), o por software, ignorando los cambios que ocurren dentro de una ventana de unos milisegundos después de uno ya detectado (antirrebote o debounce).

## 5. Estructura típica de un programa

Un programa de microcontrolador suele tener una parte de configuración que se ejecuta una vez, donde se definen qué pines son entradas y cuáles salidas, y un bucle principal que se repite indefinidamente: leer entradas, decidir con condicionales y escribir salidas. Es la aplicación directa de los bucles y condicionales de Informática. Para temporizar acciones conviene medir el tiempo transcurrido y no detener todo el programa con una pausa, para que el resto siga funcionando.

## 6. PWM: simular una salida analógica

Muchos pines pueden generar PWM (modulación por ancho de pulso): una onda cuadrada de frecuencia fija cuyo ciclo de trabajo se puede modificar. El valor medio de la tensión de salida es proporcional al ciclo de trabajo: con 25 % de ciclo y 5 V de alimentación, el valor medio es 1,25 V. Se usa para regular el brillo de un LED, la velocidad de un motor o para generar una tensión variable con un filtro RC. Aunque el pin sigue siendo digital, el efecto sobre muchas cargas es el de una tensión analógica.

## N. Conexión con lo que sigue

Este tema continúa en `../comunicacion-serie-uart-i2c-spi/` y en `../../automatizacion/`, donde estos pines se usan para controlar procesos reales.
