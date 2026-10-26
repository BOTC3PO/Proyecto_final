# Electrónica — Temporizador 555 y osciladores (teoría)

> Tema del MAPA: `electronica/temporizador-555-y-osciladores` (nodo propuesto, ver `../dependencias.md`). Depende de `../capacitor-rc-carga-y-descarga/`.

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Un circuito integrado clásico que genera pulsos y tiempos con solo unas resistencias y un capacitor.

---

## 1. Qué es el 555

El 555 es un circuito integrado diseñado en la década de 1970 que sigue usándose hoy por su sencillez y su bajo costo. En su versión más común tiene ocho patas e integra dos comparadores, un flip-flop y un transistor de descarga, además de un divisor interno de tensión formado por tres resistencias iguales. Con pocos componentes externos puede generar un pulso de duración fija o una onda cuadrada continua.

## 2. Cómo funciona por dentro

Los dos comparadores vigilan la tensión del capacitor externo. Uno detecta cuando esa tensión baja de un tercio de la alimentación (Vcc/3) y activa el flip-flop; el otro detecta cuando sube de dos tercios (2Vcc/3) y lo desactiva. La salida del flip-flop controla la patilla de salida y también el transistor que descarga el capacitor. El resultado es que el capacitor se carga entre un tercio y dos tercios de Vcc, y esa carga determina el tiempo.

## 3. Modo monoestable

En modo monoestable, el circuito tiene un único estado estable. Al recibir un pulso corto de disparo, la salida pasa a nivel alto durante un tiempo fijo y vuelve sola a nivel bajo. Se usa para generar un pulso de duración conocida, por ejemplo para antirrebote o para temporizar una luz. La duración depende de una resistencia R y un capacitor C:

T = 1,1 × R × C

Con R = 100 kΩ y C = 10 µF, T = 1,1 × 100 000 × 0,00001 = 1,1 s.

## 4. Modo astable

En modo astable no hay estado estable: la salida alterna sola entre alto y bajo, generando una onda cuadrada. Se usa con dos resistencias, R1 y R2, y un capacitor C. El capacitor se carga a través de R1 y R2, y se descarga solo a través de R2. Las fórmulas más usadas son:

f = 1,44 / ((R1 + 2 × R2) × C)

ciclo de trabajo = (R1 + R2) / (R1 + 2 × R2)

El tiempo en alto es 0,693 × (R1 + R2) × C y el tiempo en bajo es 0,693 × R2 × C. Como R1 aparece en el tiempo en alto pero no en el de bajo, el ciclo de trabajo del 555 clásico siempre es mayor que 50 %. El ciclo de trabajo es la proporción del período durante la cual la salida está en alto.

## 5. El período y la frecuencia

El período T es el tiempo de un ciclo completo y se relaciona con la frecuencia mediante f = 1 / T. Una frecuencia de 1 Hz significa un ciclo por segundo; una de 1 kHz, mil ciclos por segundo. Si se quiere una frecuencia determinada, se fija un capacitor razonable y se despeja la resistencia necesaria; en la práctica se elige el valor normalizado más cercano y se ajusta con un potenciómetro si hace falta.

## 6. Aplicaciones

El 555 se usa para hacer destellar un LED, generar un tono audible, temporizar una luz de escalera, atenuar con PWM, o dar la señal de reloj a un contador. Para frecuencias muy altas o precisión elevada hay circuitos más adecuados, como los osciladores a cristal de cuarzo, que son los que marcan el tiempo en los relojes y microcontroladores.

## N. Conexión con lo que sigue

Este tema conecta con `../logica-secuencial-flip-flops-y-contadores/`, que necesita una señal de reloj, y con `../microcontrolador-entradas-y-salidas-digitales/` (PWM).
