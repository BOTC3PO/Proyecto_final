# Automatización — Realimentación Feedback (teoría)

> Tema del MAPA: `realimentacion_feedback`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — La realimentación es un mecanismo clave en los sistemas de control que permite ajustar el comportamiento de una máquina o proceso basándose en su salida actual.

---

## 1. ¿Qué es la realimentación?

La realimentación, también llamada *feedback*, es un proceso en donde se mide la salida de un sistema y se usa esa información para modificar su entrada. Esto permite corregir desviaciones respecto a un valor deseado o setpoint (punto objetivo). Por ejemplo, si un horno no alcanza la temperatura programada, el sensor detecta esta diferencia (llamada *error*) y envía una señal al controlador para ajustar el quemador. Sin realimentación, el sistema no podría adaptarse a cambios externos o internos.

La importancia de este mecanismo radica en su capacidad para mantener la estabilidad y precisión en procesos automatizados. En sistemas industriales, la realimentación es fundamental para evitar errores acumulativos que podrían afectar la calidad del producto o incluso causar fallos mecánicos.

---

## 2. Componentes del lazo de control cerrado

Un sistema con realimentación opera dentro de un *lazo de control cerrado*, donde los componentes trabajan en conjunto para mantener el equilibrio entre lo que se quiere lograr y lo que ocurre realmente. Los elementos clave son:

- **Sensor**: Detecta la variable de salida (como temperatura, presión o velocidad) y la convierte en una señal medible.
- **Comparador**: Recibe la señal del sensor y la compara con el setpoint para calcular el error.
- **Controlador**: Basado en el valor del error, genera una señal de control que ajusta la entrada del sistema.
- **Actuador**: Ejecuta las instrucciones del controlador (como abrir una válvula o encender un motor).

Estos componentes forman una cadena continua: la salida se vuelve entrada, lo que permite corregir en tiempo real cualquier desviación. [IMAGEN: diagrama de un sistema de control con sensor, comparador, controlador y actuador].

---

## 3. Tipos de realimentación

La realimentación puede ser *positiva* o *negativa*, dependiendo de cómo actúa sobre el error:

- **Realimentación negativa**: Es la más común en sistemas automatizados. Busca reducir el error, estabilizando el sistema y evitando que las perturbaciones lo lleven a un estado inestable. Por ejemplo, en un termostato, si la temperatura sube por encima del setpoint, se reduce el calor hasta alcanzar el valor deseado.
- **Realimentación positiva**: Amplifica el error, lo que suele llevar a una respuesta exagerada o incluso al colapso del sistema. Se usa raramente en control industrial, pero puede aparecer en fenómenos como la retroalimentación acústica (cuando un micrófono capta su propio sonido y lo amplifica).

La elección entre uno u otro tipo depende del objetivo del sistema: mientras que la negativa garantiza estabilidad, la positiva puede ser útil en situaciones específicas, como el diseño de circuitos osciladores.

---

## 4. Aplicaciones prácticas en automatización

La realimentación es el pilar de casi todas las aplicaciones modernas de control automático. Algunos ejemplos incluyen:

- **Control de temperatura**: En hornos o calderas, sensores miden la temperatura actual y ajustan el flujo de combustible para mantenerla constante.
- **Regulación de velocidad en motores**: Un motor eléctrico puede tener un sensor que mide su RPM y notifica al controlador si se desvía del valor deseado.
- **Sistemas de seguridad**: En una planta química, sensores detectan fugas o sobrecalentamiento y activan válvulas o alarmas para prevenir accidentes.

Estos sistemas no funcionarían sin la capacidad de "pensar" sobre su propia salida. La realimentación permite que las máquinas se adapten dinámicamente a condiciones cambiantes, lo cual es crucial en entornos industriales complejos.

---

## N. Conexión con lo que sigue

Este tema sienta las bases para entender cómo se diseñan sistemas de control más avanzados, como los reguladores PID o los algoritmos de control adaptativo, desarrollados en `../control_pid/`.