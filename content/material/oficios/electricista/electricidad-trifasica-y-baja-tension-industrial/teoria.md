# Oficios — Electricista — Electricidad trifásica y baja tensión industrial (teoria)

> Tema del MAPA: `OF1.electricidad-trifasica-y-baja-tension-industrial` (`OF1 §13` de la planificación, propuesto en `../../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`). Tema compartido con Electromecánico (`../tecnico-electromecanico/`), que lo toma como referencia. Depende de `fundamentos-electricidad/` (ver `../dependencias.md`). Lección informativa — la evaluación del oficio se concentra en `diagnostico-electricidad-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Qué es un sistema trifásico

En una vivienda llega, por lo general, un sistema **monofásico**: una fase y un neutro. En la industria, los talleres, los comercios grandes y la distribución de energía se usa casi siempre un sistema **trifásico**, formado por **tres fases** de corriente alterna que tienen la misma frecuencia y la misma tensión, pero están **desfasadas 120°** entre sí. Mientras una fase pasa por su valor máximo, otra está subiendo y otra bajando, de modo que la potencia total entregada es mucho más pareja que en un monofásico.

Las ventajas son grandes: los motores trifásicos son más simples, más robustos, más eficientes y arrancan por sí solos con un campo giratorio natural. Además, para transportar la misma potencia se necesitan conductores más finos y se pierde menos energía.

## Tensiones: de fase y de línea

En la Argentina el sistema de baja tensión es de **3 × 380/220 V, 50 Hz**. Eso significa:

- Entre **una fase y el neutro** hay **220 V** (tensión de fase), que es la que alimenta los consumos monofásicos.
- Entre **dos fases** hay **380 V** (tensión de línea), que es la que se usa en motores y cargas trifásicas.

La relación entre ambas es la raíz cuadrada de tres (alrededor de 1,73). Una instalación trifásica con neutro tiene, entonces, cuatro conductores activos (tres fases y neutro) más el conductor de protección (tierra).

## Colores de los conductores

La identificación por color de los conductores facilita el trabajo y reduce errores. En instalaciones de baja tensión en Argentina es habitual usar **marrón, negro y rojo** para las tres fases, **celeste** para el neutro y **verde-amarillo** para el conductor de protección (tierra). Es una convención establecida en la normativa y debe respetarse; se verifica siempre con la norma vigente y se mide con instrumento, no se confía solo en el color.

## Conexión del motor y arranque

Un motor trifásico tiene tres bobinados que se pueden conectar en **estrella** o en **triángulo**; la placa indica a qué tensión puede trabajar en cada conexión. Un motor de placa 380/660 V, por ejemplo, funciona en triángulo en una red de 380 V.

El **arranque directo** conecta el motor a la red completa de una vez, con una corriente de arranque elevada; es simple y adecuado para motores chicos o redes fuertes. El **arranque estrella-triángulo** inicia el motor en estrella (con menor tensión sobre cada bobinado, y una corriente de arranque que ronda un tercio de la del arranque directo) y luego pasa a triángulo, reduciendo el golpe de corriente en la red. Existen también arrancadores suaves y variadores de frecuencia. El **sentido de giro** se invierte intercambiando dos cualquiera de las tres fases.

## Potencia trifásica

La potencia activa de una carga trifásica equilibrada se calcula como **√3 × tensión de línea × corriente × factor de potencia**. Un **bajo factor de potencia** implica más corriente para la misma potencia útil; por eso las instalaciones industriales a veces incluyen bancos de capacitores para corregirlo. Cuando las tres fases no cargan por igual, se habla de **desequilibrio**, que provoca calentamiento, mayor corriente en el neutro y un mal funcionamiento de los motores.

## Tableros y protecciones industriales

Un tablero industrial incluye **seccionador general**, **interruptores termomagnéticos tripolares o tetrapolares**, **contactores**, **relés térmicos o guardamotores**, **protecciones diferenciales** y **elementos de medición**. Se dimensiona con la corriente de cada carga y el tipo de arranque, y se coordinan las protecciones para que, ante una falla, actúe primero la más cercana al problema.

## Seguridad

La baja tensión industrial es **peligrosa**: 380 V entre fases y las corrientes disponibles son altas, y se suma el riesgo de arco eléctrico en tableros con mucha potencia. Los procedimientos de **corte, bloqueo, señalización y verificación de ausencia de tensión** son obligatorios antes de intervenir, y los trabajos en tableros energizados quedan reservados a personal especialmente capacitado y habilitado (ver `seguridad-electricista/` y `normativa-electrica-aea-iram/`).

**Sobre este material**: es informativo y no habilita a intervenir instalaciones industriales sin la formación y la habilitación correspondientes. Los valores de tensión, colores y procedimientos deben verificarse con la reglamentación vigente.
