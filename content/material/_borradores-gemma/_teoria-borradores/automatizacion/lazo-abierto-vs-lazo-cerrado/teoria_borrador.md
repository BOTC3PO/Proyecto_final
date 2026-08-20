# Automatización — Lazo abierto vs lazo cerrado (teoría)

> Tema del MAPA: `lazo_abierto_vs_lazo_cerrado`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Diferencia entre dos modelos básicos de control en sistemas automatizados, con y sin realimentación.

---

## 1. ¿Qué es la realimentación?

En un sistema de **lazo cerrado**, el proceso incluye una señal que devuelve información sobre la salida actual al punto de entrada. Esta señal, llamada **realimentación** o **retroalimentación**, permite comparar lo que se espera (la consigna) con lo que realmente ocurre (la medida). Si hay diferencias, el sistema ajusta su comportamiento para corregirlas.

Por ejemplo: un horno eléctrico con temperatura controlada mide la temperatura real y compara con el valor deseado. Si está por debajo, aumenta el calor; si está por encima, lo reduce. Sin esta señal de retorno, el sistema no puede ajustarse automáticamente.

## 2. Estructura del lazo abierto

Un **sistema de lazo abierto** funciona sin medir ni comparar la salida con la entrada. La acción se basa únicamente en una orden fija dada desde el principio. Si algo cambia durante el proceso (como una fluctuación de energía o un error en el mecanismo), el sistema no lo detecta y no corrige.

Ejemplo típico: un tostador convencional que se programa para tostar por 3 minutos, sin medir el color del pan ni ajustar el tiempo si la corriente eléctrica varía. La salida (el pan) depende exclusivamente de la entrada inicial (la consigna de tiempo).

## 3. Estructura del lazo cerrado

Un **sistema de lazo cerrado** incluye un circuito completo: entrada → proceso → medición → comparación → ajuste → repetición. Esto permite que el sistema se adapte a cambios inesperados, como perturbaciones externas o errores en el funcionamiento.

Ejemplo: un robot de ensamblaje con sensores que detectan si una pieza está colocada correctamente. Si no lo está, el motor ajusta su posición hasta lograrlo. Sin realimentación, el robot no podría corregir ese error.

## 4. Ventajas y desventajas

Los sistemas de **lazo abierto** son simples, económicos y fáciles de implementar, pero carecen de capacidad para reaccionar a imprevistos. Se usan en aplicaciones donde la precisión no es crítica o las variables externas son predecibles.

Los sistemas de **lazo cerrado**, aunque más complejos y costosos, ofrecen mayor estabilidad y exactitud. Son ideales cuando hay incertidumbre en el entorno, como en control de temperatura, posicionamiento mecánico o regulación de flujo.

## 5. Conexión con lo que sigue

Este tema es clave para entender conceptos posteriores como los **controladores PID** y la **integración de sensores**, que dependen del funcionamiento de sistemas de lazo cerrado: `../controladores_pid/`.