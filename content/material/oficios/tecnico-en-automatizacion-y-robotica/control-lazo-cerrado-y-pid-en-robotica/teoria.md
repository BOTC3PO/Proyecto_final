# Oficios — Automatización y robótica — Control en lazo cerrado y PID (teoria)

> Tema del MAPA: nodo propuesto en `../../../_plan-faltantes/oficios-b.md` (sin ID en `troncos.md` todavía). Depende de
> `cinematica-y-dinamica-robotica/` (ver `../../dependencias.md`). Lección informativa — la
> evaluación del oficio se concentra en `diagnostico-robotica-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Lazo abierto y lazo cerrado

En un sistema de **lazo abierto**, la orden se envía sin comprobar qué ocurre: un horno que se enciende diez minutos, sin termómetro. En uno de **lazo cerrado**, un sensor mide el resultado, el controlador lo compara con el valor deseado y corrige. La diferencia entre lo deseado (la **referencia** o *setpoint*) y lo medido es el **error**. El lazo cerrado compensa perturbaciones y cambios de carga, y por eso es la base del control de motores, temperatura, presión, nivel y posición. Este tema es compartido con el oficio de Técnico electromecánico, que lo usa en procesos industriales.

## El controlador PID

El controlador más difundido en la industria es el **PID**. Calcula la acción de control como suma de tres términos: **u = Kp·e + Ki·∫e dt + Kd·de/dt**, donde e es el error.

El término **proporcional** reacciona al error actual: cuanto mayor el error, más fuerte la acción. Si es muy bajo, la respuesta es lenta y queda un error residual; si es muy alto, el sistema oscila. El término **integral** acumula el error a lo largo del tiempo y elimina el error permanente, pero si es excesivo causa sobrepasos y oscilaciones lentas. El término **derivativo** responde a la velocidad de cambio del error: anticipa y amortigua, pero amplifica el ruido del sensor. Muchas veces se usa solo PI, o P, sin derivativo.

## Un ejemplo numérico

Supongamos que se quiere llevar un eje a 90° y está en 60°. El error es 30°. Con Kp = 0,5, la acción proporcional vale 15 unidades (por ejemplo, voltios o una velocidad normalizada). A medida que el eje se acerca, el error baja y la acción disminuye; si hay fricción que requiere una fuerza mínima, el eje puede detenerse un poco antes de llegar, y el término integral va acumulando ese pequeño error hasta aportar la fuerza que falta.

## Efectos de cada ajuste

Si se aumenta Kp: más rápido, pero más oscilación. Si se aumenta Ki: se elimina antes el error final, pero con más sobrepaso. Si se aumenta Kd: menos oscilación, pero más sensibilidad al ruido. Un buen ajuste es un compromiso entre **rapidez**, **estabilidad** y **error final**.

## Sintonía

Un método clásico es el de **Ziegler y Nichols** (1942): se sube la ganancia proporcional hasta que el sistema oscile de manera sostenida y, con esa ganancia y ese período, se calculan valores iniciales de Kp, Ki y Kd. Son un punto de partida y casi siempre se refinan a mano. El procedimiento práctico: primero se ajusta Kp con Ki y Kd en cero; luego se agrega Kd si hay oscilación; finalmente se agrega Ki para eliminar el error. Muchos variadores y controladores tienen **autosintonía**.

## Problemas prácticos

El **windup** del integrador ocurre cuando el actuador está saturado (no puede dar más) y el integral sigue acumulando error; al volver a la normalidad, el sistema se pasa de largo. Se evita limitando el integrador. Los **retardos** del sistema, el **ruido** de los sensores y las **no linealidades** (zonas muertas, fricción) complican el ajuste. La frecuencia de ejecución del lazo debe ser mucho más rápida que la dinámica que se controla.

## Control en cascada en robótica

Un eje de robot suele tener tres lazos anidados: el más interno controla la **corriente** (par), el intermedio la **velocidad** y el externo la **posición**. Cada lazo interno es más rápido que el externo. Por eso al ajustar un servo se empieza de adentro hacia afuera. Los controladores avanzados agregan alimentación hacia adelante para compensar la gravedad o la inercia.

## Seguridad

Un controlador mal ajustado puede hacer que un actuador oscile con violencia. Se prueba primero con límites bajos de velocidad y de corriente, con la parada de emergencia a mano y sin personas en la zona de movimiento.
