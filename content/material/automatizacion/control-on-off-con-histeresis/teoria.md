# Automatizacion — Control on-off con histéresis (teoría)

> Tema del MAPA: `automatizacion/control-on-off-con-histeresis`. Depende de `lazo-abierto-vs-lazo-cerrado/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo funciona el control de todo o nada, para qué sirve la banda de histéresis y cuándo no alcanza.

---

## 1. El control más simple

El control **on-off** (todo o nada) es el que tiene un termostato de heladera o de plancha: si la temperatura está por debajo de lo pedido, enciende; si pasó, apaga. No hay valores intermedios: el actuador solo tiene dos estados. Es barato, robusto y suficiente para muchos procesos donde no hace falta precisión fina.

## 2. El problema del cambio constante

Imaginá un controlador que enciende un calefactor cuando la temperatura baja de 20 °C y lo apaga apenas supera 20 °C. En cuanto la temperatura cruza el valor pedido, el actuador se apaga y vuelve a bajar; vuelve a encenderse, y así. Con ruido de medición el controlador podría conmutar decenas de veces por segundo. Eso desgasta contactores, relés y compresores, y consume energía en cada arranque.

## 3. La banda de histéresis

La solución es la **histéresis**: dos umbrales distintos, uno para encender y otro para apagar. Con un valor deseado de 20 °C y una banda de 2 °C, el calefactor se enciende al bajar de 19 °C y se apaga al subir de 21 °C. Entre 19 y 21 °C mantiene el estado en que estaba. Esa banda evita las conmutaciones rápidas.

Cuanto más ancha es la banda:

- Menos conmutaciones por hora y menos desgaste del actuador.
- Mayor oscilación de la variable alrededor del valor deseado.

Y al revés con una banda angosta. Se elige un compromiso según el proceso: en una heladera, una banda de unos pocos grados está bien; en un laboratorio, más fina.

## 4. Cómo se comporta la variable

Con control on-off la variable nunca se queda quieta en el valor deseado. Oscila en un ciclo: sube con el actuador encendido, baja con el actuador apagado. La amplitud del ciclo depende de la banda y de la inercia del proceso, es decir, de cuánto se pasa la variable después de apagar el actuador. El período del ciclo depende de la velocidad del proceso.

Dos medidas describen este régimen:

- **Ciclo de trabajo**: porcentaje del tiempo que el actuador está encendido durante un ciclo.
- **Frecuencia de conmutación**: cuántas veces por hora cambia de estado.

## 5. Dónde se usa

Termostatos de hogares y oficinas, calefones eléctricos, heladeras, planchas, presostatos que arrancan y paran una bomba o un compresor, controles de nivel con flotante. Son lugares donde el proceso es lento, la tolerancia es amplia y el costo importa.

## 6. Cuándo no alcanza

Cuando se necesita mantener la variable en un valor con poca variación, el on-off no sirve: siempre oscila. Para esos casos se usan controladores continuos como el PID, que modulan el actuador en lugar de encenderlo y apagarlo. Una forma intermedia es la modulación por ancho de pulso (PWM): se enciende y apaga muy rápido, y lo que importa es qué fracción del tiempo está encendido.

## 7. Ubicación del sensor

La posición del sensor afecta el comportamiento. Un termostato demasiado cerca de la fuente de calor apaga antes de que la zona se caliente. Uno lejos reacciona tarde y se pasa. Hay que ubicarlo donde represente lo que se quiere controlar.
