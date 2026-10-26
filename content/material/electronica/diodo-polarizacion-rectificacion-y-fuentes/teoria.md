# Electrónica — Diodo, rectificación y fuentes (teoría)

> Tema del MAPA: `electronica/diodo-polarizacion-rectificacion-y-fuentes` (nodo propuesto, ver `../dependencias.md`). Depende de `../componentes-resistencia-capacitor-diodo-transistor/` y de `../capacitor-rc-carga-y-descarga/`.

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo se convierte la tensión alterna de la red en la tensión continua que necesitan los circuitos electrónicos.

---

## 1. El diodo y su polarización

Un diodo deja pasar la corriente en un solo sentido. Tiene dos terminales: el ánodo y el cátodo, y este último se marca con una banda en el cuerpo del componente. Cuando el ánodo es más positivo que el cátodo, el diodo está polarizado en directa y conduce; cuando es al revés, está polarizado en inversa y bloquea (salvo una corriente de fuga muy pequeña).

Para conducir, un diodo de silicio necesita que haya sobre él una tensión directa de aproximadamente 0,7 V; el diodo emisor de luz (LED) necesita más, entre 1,8 V y 3,3 V según el color. Una vez que conduce, esa caída de tensión se mantiene casi constante. Por eso, un diodo o un LED siempre debe llevar una resistencia en serie que limite la corriente: R = (Vfuente − Vdiodo) / I.

## 2. Por qué hace falta una fuente

La red domiciliaria entrega tensión alterna, que sube y baja de signo muchas veces por segundo. En Argentina es de 220 V y 50 Hz. Los circuitos electrónicos, en cambio, necesitan tensión continua y baja. Una fuente de alimentación convierte una en otra en cuatro etapas: transformador (reduce la tensión), rectificador (elimina la parte negativa), filtro (suaviza) y regulador (estabiliza).

## 3. Rectificador de media onda

Con un solo diodo en serie con la carga, solo pasan los semiciclos positivos; los negativos quedan bloqueados. La salida es una serie de picos separados por huecos. Es sencillo, pero aprovecha solo la mitad de la señal, y el valor medio de la tensión que entrega es bajo: Vdc = Vp / π, donde Vp es la tensión de pico.

## 4. Rectificador de onda completa

Con cuatro diodos dispuestos en puente (puente de Graetz) se aprovechan los dos semiciclos: los negativos se invierten y se suman a los positivos. La salida tiene el doble de pulsos por segundo, con una frecuencia de 100 Hz si la entrada es de 50 Hz, y un valor medio mayor: Vdc = 2 × Vp / π. Hay que tener en cuenta que en cada semiciclo conducen dos diodos en serie, así que la salida es unos 1,4 V menor que el pico de entrada.

## 5. El filtro con capacitor

La salida rectificada sigue siendo pulsante. Se conecta en paralelo con la carga un capacitor de gran capacidad: se carga hasta el pico y mientras la tensión rectificada baja, el capacitor entrega energía a la carga. El resultado es una tensión casi continua, con una pequeña ondulación llamada rizado (ripple). A mayor capacidad o menor consumo, menor es el rizado. La constante de tiempo de descarga RC del tema anterior explica por qué.

## 6. El regulador

Aun filtrada, la tensión varía si cambia la entrada o el consumo. Un regulador, por ejemplo un circuito integrado de la familia 78xx, entrega una tensión fija (5 V, 12 V, etc.) mientras la entrada sea suficientemente mayor que la salida. Otro componente que se usa para fijar una referencia es el diodo Zener, que conduce en inversa a una tensión definida.

## N. Conexión con lo que sigue

Este tema continúa en `../transistor-como-interruptor-y-amplificador/`; los reguladores, además, se verán en `../../automatizacion/` como parte de las fuentes de los sistemas de control.
