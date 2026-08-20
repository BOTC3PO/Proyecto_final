# Automatización — Servomecanismos (teoría)

> Tema del MAPA: `servo-01`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Explicación de cómo los servomecanismos permiten controlar movimientos con precisión mediante retroalimentación.

---

## 1. ¿Qué es un servomecanismo?

Un servomecanismo es un sistema que ajusta su comportamiento según la diferencia entre lo que se quiere lograr (la referencia) y lo que realmente ocurre en el momento (la salida). Esto se hace a través de **retroalimentación**, una señal que vuelve al controlador para corregir errores. Por ejemplo, si un motor debe girar 90° pero solo alcanza 85°, el sistema detecta esa diferencia y actúa para cerrar la brecha.

El núcleo del funcionamiento es comparar constantemente los valores esperados con los reales, lo que permite a los servomecanismos trabajar en **lazos de control cerrado**. Sin retroalimentación, el sistema no sabría si está cumpliendo con su objetivo o no.

## 2. Componentes clave

Todo servomecanismo se compone de tres elementos esenciales:

- **Sensor**: Mide la posición, velocidad o otro parámetro físico del sistema (como un giroscopio en una cabeza robótica). Envía esta información al controlador como señal de realimentación.
- **Controlador**: Recibe la referencia deseada y compara con la salida real. Calcula el error y genera una orden para corregirlo.
- **Actuador**: Ejecuta la acción necesaria (como un motor o cilindro hidráulico) para ajustar el sistema hacia el valor objetivo.

Estos componentes trabajan en conjunto: el sensor informa, el controlador decide, y el actuador actúa. Si uno falla, el sistema no puede funcionar correctamente.

## 3. El error de seguimiento

El **error de seguimiento** es la diferencia entre lo que se espera (el setpoint) y lo que realmente ocurre. Cuanto menor sea este valor, más precisa será la acción del servomecanismo. Por ejemplo, si un brazo robótico debe moverse a 10 cm pero está en 9,8 cm, el error es de 0,2 cm.

El objetivo del control es que ese error se reduzca progresivamente hasta anularse. Los servomecanismos están diseñados para minimizarlo constantemente mediante ajustes automáticos, lo que garantiza un funcionamiento preciso incluso en condiciones variables.

## 4. Lazo de control cerrado

Un **lazo de control cerrado** es el mecanismo por el cual los servomecanismos operan. A diferencia de los sistemas abiertos (que no miden su salida), estos sistemas devuelven información al controlador para ajustarse en tiempo real.

Este ciclo constante de medición, comparación y acción permite que los servomecanismos respondan a perturbaciones externas (como un cambio en la carga) o errores internos. Por ejemplo, si una puerta automática se atasca, el sensor detecta la resistencia, el controlador ajusta la fuerza del motor y el actuador actúa para vencer la obstrucción.

## N. Conexión con lo que sigue

Este tema forma la base para entender aplicaciones más complejas, como los sistemas de **control PID** o la integración de servomecanismos en robots industriales (`../control-pid/`).