# Electrónica — Componentes: resistencia, capacitor, diodo, transistor (teoría)

> Tema del MAPA: `electronica/componentes-resistencia-capacitor-diodo-transistor`. Depende de: componentes basicos (ver dependencias.md).

## Tipo de teoría

**Presentación** — Análisis de los componentes pasivos y activos fundamentales en circuitos electrónicos.

---

## 1. Resistencia: control del flujo eléctrico

La resistencia es un componente que **opone al paso de la corriente eléctrica**, limitando su intensidad según el valor de su resistencia medida en ohmios (Ω). Al aplicar una tensión a través de ella, se genera un flujo de electrones proporcional a dicha tensión y inversamente proporcional a su resistencia. Este fenómeno se describe con la **Ley de Ohm** ($ V = I \times R $), donde $ V $ es voltaje, $ I $ corriente y $ R $ resistencia.

La resistencia convierte parte de la energía eléctrica en calor debido a las colisiones entre los electrones y los átomos del material. Por eso, se usan para regular tensiones, dividir señales o proteger circuitos de sobrecargas. Ejemplos comunes incluyen resistencias de carbón, de película metálica o de alambre.

---

## 2. Capacitor: almacenamiento temporal de energía

El capacitor (o condensador) es un componente que **almacena carga eléctrica en forma de campo electrostático** entre dos placas conductoras separadas por un material aislante llamado dieléctrico. Cuando se conecta a una fuente de voltaje, una placa acumula electrones (carga negativa) y la otra pierde electrones (carga positiva), creando un campo eléctrico.

Su capacidad para almacenar carga depende del área de las placas, la distancia entre ellas y el material dieléctrico. Se mide en faradios (F). Aunque pueden retener carga durante tiempo, no son perfectos: con el tiempo, la energía se disipa por efectos como la fuga a través del dieléctrico o la resistencia interna. Los capacitores se usan para filtrar señales, suavizar tensiones o almacenar energía temporalmente en circuitos.

---

## 3. Diodo: conducción unidireccional

El diodo es un componente semiconductor que **permite el paso de corriente eléctrica solo en una dirección**, bloqueando el flujo opuesto. Su estructura básica es una unión entre dos materiales semiconductores: una zona tipo *p* (con exceso de huecos) y otra tipo *n* (con exceso de electrones). En polarización directa (ánodo positivo, cátodo negativo), los portadores se recombinan y la corriente fluye. En polarización inversa, el diodo actúa como una barrera.

Este comportamiento lo convierte en clave para aplicaciones como **rectificación** de corriente alterna a continua, protección contra inversiones de tensión o regulación de señales. Variantes como los LED (diodos emisores de luz) o los diodos Zener (para estabilizar tensiones) amplían su uso en circuitos modernos.

---

## 4. Transistor: amplificación y conmutación

El transistor es un componente activo que **amplifica señales eléctricas o actúa como interruptor** controlado por una corriente pequeña. Su funcionamiento se basa en la estructura de tres capas de material semiconductor (p-n-p o n-p-n), formando tres terminales: emisor, base y colector.

En modo de amplificación, una corriente muy baja aplicada a la base controla un flujo mucho mayor entre el emisor y el colector. En modo de conmutación, el transistor actúa como un interruptor cerrado (encendido) o abierto (apagado), esencial en circuitos digitales y lógica. Los transistores son la base de dispositivos como microprocesadores, memorias RAM y amplificadores audiovisuales.

---

## N. Conexión con lo que sigue

Este tema sirve como base para entender cómo funcionan los **circuitos integrados** (circuitos integrados) y sus aplicaciones en electrónica digital o analógica.