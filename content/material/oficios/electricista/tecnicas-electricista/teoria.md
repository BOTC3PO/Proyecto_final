# Oficios — Electricista — Técnicas de instalación (teoria)

> Tema del MAPA: `OF1.tecnicas-electricista` (`troncos.md`). Depende
> de `lectura-de-planos-electricos/` (ver `../dependencias.md`).
> Lección informativa — la evaluación del oficio se concentra en
> `diagnostico-electricidad-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## La arquitectura de una instalación domiciliaria

Toda instalación eléctrica domiciliaria sigue el mismo recorrido
lógico: la **alimentación** llega desde la red de la distribuidora, se
mide con el **medidor** de energía, entra al **tablero principal**
donde están las **protecciones** generales, y desde ahí se reparte a
los **circuitos** que alimentan cada carga de la casa, todo conectado
también a la **puesta a tierra**. Entender este recorrido de punta a
punta es lo que permite ubicar rápido en qué tramo puede estar un
problema cuando algo falla.

## Protecciones: la primera línea de defensa

La **protección de sobrecorriente** (un interruptor termomagnético)
corta el circuito si la corriente supera el valor para el que fue
calibrado, antes de que el cable llegue a calentarse peligrosamente.
La **protección diferencial** (el disyuntor) compara la corriente que
entra por la fase con la que vuelve por el neutro: si hay una
diferencia (señal de que parte de la corriente se está "escapando",
por ejemplo a través de una persona en contacto con una falla), corta
el circuito en milisegundos. Ambas protecciones cumplen funciones
distintas y complementarias — un tablero sin protección diferencial no
protege a las personas, solo a los cables.

## Puesta a tierra: el camino de escape de una falla

La **puesta a tierra** conecta las partes metálicas normalmente sin
tensión de una instalación (carcasas de electrodomésticos, por
ejemplo) a un electrodo enterrado, de forma que si una falla de
aislación hace contacto entre un conductor activo y esa carcasa, la
corriente encuentre un camino de baja resistencia hacia tierra en vez
de circular a través de una persona que la toque — y, en el mismo
momento, esa corriente hace disparar la protección diferencial.

## Circuitos y su clasificación

Una instalación se organiza en circuitos independientes según el tipo
de carga: **circuito de iluminación**, **circuito de tomacorrientes de
uso general**, y **circuitos independientes** para cargas de mayor
potencia (termotanque, aire acondicionado, cocina eléctrica), cada uno
con su propia protección dimensionada según su carga. Separar los
circuitos así limita el impacto de una falla: si se corta el circuito
de tomacorrientes, la iluminación sigue funcionando.

## Instalaciones especiales: motores, bombas y automatismos

Más allá de la instalación domiciliaria básica, el oficio se extiende
a instalar y conectar **motores eléctricos** y **bombas**, cuyo
arranque genera una corriente inicial mucho mayor que la de
funcionamiento normal (y que la protección debe tolerar sin disparar
en falso). Los **automatismos básicos** usan **contactores**
(interruptores accionados eléctricamente, para manejar cargas de
potencia con una señal de control de baja corriente) y **relés**
(que cumplen una función similar para señales lógicas), muchas veces
combinados con **sensores** que detectan una condición (temperatura,
nivel, presencia) para activar o detener un proceso automáticamente.

## Electricidad industrial y normativa

En instalaciones industriales es habitual trabajar con el **sistema
trifásico** (tres fases desfasadas entre sí, que permiten transportar
más potencia con menos pérdidas y alimentar motores más eficientes que
el monofásico), con **transformadores** que adaptan la tensión entre
tramos de la red, y con controles más sofisticados basados en
**contactores, relés y PLC** (controladores lógicos programables).
Todo este trabajo, doméstico o industrial, está regulado por normas
(en Argentina, principalmente normas IRAM) que fijan secciones
mínimas, tipos de protección obligatorios y reglas de instalación —
conocer la norma es lo que distingue a un electricista matriculado de
alguien que "sabe conectar cables": la norma no es un trámite, es la
acumulación de errores reales de otros electricistas, convertida en
regla para no repetirlos.
