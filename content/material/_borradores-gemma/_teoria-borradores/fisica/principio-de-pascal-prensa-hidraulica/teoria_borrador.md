# Física — Principio de Pascal y prensa hidráulica (teoría)

> Tema del MAPA: `P04`. Depende de `../presion-en-fluidos/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Explicación del principio físico que permite multiplicar fuerzas mediante fluidos.

---

## 1. El principio de Pascal

El principio de Pascal establece que cualquier cambio de **presión** aplicado a un fluido incompresible en equilibrio dentro de un recipiente se transmite íntegramente a todas las partes del fluido y a las paredes del recipiente. Esto significa que si ejerces una fuerza sobre una superficie del fluido, esa presión se reparte por igual en todas direcciones, sin importar la forma del recipiente o el punto donde se aplica la fuerza.

Este fenómeno es posible gracias a las propiedades de los líquidos: su capacidad para transmitir presiones uniformemente y su baja compresibilidad. Por eso, el principio no funciona con gases (que sí se comprimen) ni en fluidos en movimiento (donde actúan efectos dinámicos).

---

## 2. Funcionamiento de la prensa hidráulica

La **prensa hidráulica** es un dispositivo que aprovecha el principio de Pascal para multiplicar fuerzas. Su estructura básica incluye dos cilindros conectados por una tubería llena de fluido incompresible (generalmente aceite). Cada cilindro tiene un émbolo: uno pequeño y otro grande.

Cuando se aplica una fuerza $ F_1 $ sobre el émbolo pequeño, esta genera una presión $ P = \frac{F_1}{A_1} $, donde $ A_1 $ es el área del primer émbolo. Esta presión se transmite al fluido y actúa sobre el segundo émbolo de área $ A_2 $. Al ser la presión igual en ambos ($ \frac{F_1}{A_1} = \frac{F_2}{A_2} $), si $ A_2 > A_1 $, entonces $ F_2 > F_1 $: se obtiene una **fuerza mayor** con una **fuerza menor aplicada**, siempre que el sistema esté en equilibrio.

[IMAGEN: Esquema de prensa hidráulica con dos émbolos, flechas indicando fuerzas y áreas.]

---

## 3. Relación entre fuerzas y áreas

La clave del funcionamiento está en la proporción entre las áreas de los émbolos. Si el área del émbolo grande es $ n $ veces mayor que la del pequeño ($ A_2 = n \cdot A_1 $), entonces la fuerza generada será $ F_2 = n \cdot F_1 $. Por ejemplo: si se aplica una fuerza de 10 N en un émbolo de 1 cm², y el otro tiene 5 cm², la fuerza resultante será $ 5 \cdot 10 = 50 $ N.

Esta relación es ideal y asume que no hay fricción ni pérdida de energía. En la práctica, los rendimientos son menores por efectos como la viscosidad del fluido o las imperfecciones mecánicas, pero el principio sigue siendo el fundamento teórico.

---

## 4. Aplicaciones en la vida cotidiana

La prensa hidráulica es la base de múltiples dispositivos y máquinas. Algunos ejemplos incluyen:  
- **Gatos de auto**: usan el principio para levantar vehículos con fuerza mínima.  
- **Frenos hidráulicos**: transmiten la presión del pedal al sistema de frenado.  
- **Prensas industriales**: comprimen materiales con alta fuerza en sectores como la metalurgia o la producción de papel.  

Estas aplicaciones demuestran cómo un cambio de presión pequeño puede convertirse en una fuerza considerable, siempre que se controle el área sobre la cual actúa.

---

## N. Conexión con lo que sigue

Este tema conecta directamente con el estudio de los **mecanismos simples** y su uso en ingeniería, abordado en `../mecanismos-sencillos/`. También es base para entender el funcionamiento de sistemas más complejos como las bombas o los circuitos hidráulicos.