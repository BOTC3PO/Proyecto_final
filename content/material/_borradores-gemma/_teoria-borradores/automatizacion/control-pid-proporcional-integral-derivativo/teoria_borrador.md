# Automatización — Control PID: proporcional, integral y derivativo (teoría)

> Tema del MAPA: `PID-01`. Depende de `../control-basico/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Explicación del funcionamiento de los controladores PID en sistemas automatizados.

---

## 1. Acción proporcional: respuesta inmediata

El controlador PID comienza con la acción **proporcional**, que actúa directamente sobre el **error actual** (diferencia entre el valor deseado, o *setpoint*, y el valor medido). Esta acción se calcula multiplicando el error por una constante ($K_p$) que define cuán fuerte debe ser la respuesta. Si el error es grande, la salida del controlador se ajusta en forma proporcional para corregirlo rápidamente.

Por ejemplo: si un motor debe alcanzar 100 RPM y está a 80 RPM (error = +20), el controlador proporcional genera una señal de corrección que depende exclusivamente de ese valor. La ventaja es la rapidez, pero también su limitación: no elimina errores persistentes si el sistema se estabiliza en un punto distinto al deseado.

---

## 2. Acción integral: corrección acumulativa

La **acción integral** resuelve el problema de los errores residuales. En lugar de mirar solo el error actual, suma todos los errores pasados a lo largo del tiempo ($K_i \cdot \int e(t) dt$). Esto permite que incluso un pequeño error constante (como una fricción no compensada en un sistema mecánico) acabe generando una señal de corrección suficiente para eliminarlo.

Su funcionamiento es útil en procesos donde la precisión a largo plazo es clave, como mantener una temperatura estable o ajustar el nivel de líquido en un tanque. Sin embargo, si no se usa con cuidado, puede causar oscilaciones: el acumulador de errores puede sobreajustar la salida y generar inestabilidad.

---

## 3. Acción derivativa: anticipación del cambio

La **acción derivativa** introduce una mejora fundamental: reacciona ante la **velocidad de cambio** del error ($K_d \cdot \frac{de(t)}{dt}$), no solo su valor o acumulación. Esto permite predecir cómo evolucionará el error en el futuro y actuar antes de que se concrete.

Por ejemplo, si el error está creciendo rápidamente (como cuando un sistema sobrepasa su punto objetivo), la derivativa genera una corrección opuesta para frenar el exceso. Es especialmente útil en sistemas dinámicos donde las respuestas tardan tiempo en manifestarse, como en procesos térmicos o mecánicos con inercia.

---

## 4. Síntesis del control PID

El controlador PID combina las tres acciones en una sola ecuación:

$$
u(t) = K_p \cdot e(t) + K_i \cdot \int e(t) dt + K_d \cdot \frac{de(t)}{dt}
$$

Cada término tiene un rol distinto: proporcional para reacciones rápidas, integral para precisiones a largo plazo y derivativa para evitar sobrecorreciones. Juntas, permiten ajustar sistemas complejos con alta precisión, aunque su diseño requiere equilibrar los parámetros ($K_p$, $K_i$, $K_d$) según las características del proceso.

[IMAGEN: Gráfico de la ecuación PID con bloques para cada componente (proporcional, integral, derivativo) conectados a una suma final.]

---

## 5. Limitaciones y consideraciones

Aunque el PID es versátil, no siempre es suficiente. Sistemas con comportamientos no lineales o retrasos significativos pueden requerir ajustes avanzados, como algoritmos de control adaptativo o técnicas de identificación de modelos. Además, la acción integral puede generar saturación si los errores se acumulan demasiado rápido, lo que requiere mecanismos como *anti-windup* para proteger el sistema.

---

## N. Conexión con lo que sigue

Este tema es base para entender cómo se ajustan y optimizan los parámetros de un controlador PID en aplicaciones reales (`../tuning-pid/`), así como su implementación en sistemas específicos como robots, procesos industriales o reguladores de temperatura.