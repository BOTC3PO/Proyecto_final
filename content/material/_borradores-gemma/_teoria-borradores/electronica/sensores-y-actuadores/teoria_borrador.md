# Electrónica — Sensores y Actuadores (teoría)

> Tema del MAPA: `sensores_y_actuadores`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Introducción a los componentes básicos que permiten la interacción entre el mundo físico y los sistemas electrónicos.

---

## 1. ¿Qué son los sensores?

Un sensor es un dispositivo diseñado para detectar cambios en una magnitud física del entorno, como temperatura, luz, presión o movimiento, y convertir esa información en una señal eléctrica que puede ser procesada por un sistema electrónico. Por ejemplo, un termómetro digital usa un sensor de temperatura que transforma el calor ambiental en voltaje, permitiendo que un microcontrolador mida y registre la lectura. Los sensores son esenciales para que los sistemas automatizados "perciban" su entorno.

[IMAGEN: Diagrama de un sensor convirtiendo una magnitud física (ejemplo: luz) en una señal eléctrica]

---

## 2. ¿Qué hacen los actuadores?

Los actuadores funcionan como el "musculo" de un sistema electrónico: reciben señales eléctricas provenientes de un controlador y las transforman en acciones físicas. Por ejemplo, un motor eléctrico es un actuador que convierte energía eléctrica en movimiento mecánico, mientras que una válvula neumática puede abrirse o cerrarse según la señal recibida. A diferencia de los sensores, los actuadores no captan información, sino que ejecutan órdenes.

[IMAGEN: Esquema de un actuador (ejemplo: motor) recibiendo una señal y generando movimiento]

---

## 3. El ciclo básico de control

En cualquier sistema automatizado, el flujo de trabajo se organiza en tres etapas secuenciales:  
1. **Detección**: Un sensor capta una variable del entorno (ejemplo: temperatura alta).  
2. **Procesamiento**: Un controlador (como un microprocesador) interpreta la señal y decide qué acción tomar.  
3. **Acción**: Un actuador ejecuta la respuesta física (ejemplo: encender un ventilador).  

Este ciclo se repite constantemente en sistemas como termostatos, robots industriales o alarmas de seguridad.

[IMAGEN: Flujo de información desde el sensor al controlador y luego al actuador]

---

## 4. Diferencias clave entre sensores y actuadores

Aunque ambos son componentes esenciales, su función es opuesta:  
- **Sensores**: Captan datos del entorno y los convierten en señales eléctricas para ser analizadas.  
- **Actuadores**: Reciben señales eléctricas y generan respuestas físicas (movimiento, sonido, luz, etc.).  

Un error común es confundirlos: por ejemplo, pensar que un motor puede "leer" datos del entorno, cuando en realidad solo responde a instrucciones.

---

## 5. Aplicaciones comunes

Los sensores y actuadores se combinan en sistemas donde hay interacción entre el mundo físico y la electrónica. Ejemplos:  
- **Automóviles**: Sensores de velocidad y temperatura, actuadores como frenos o inyectores.  
- **Robótica**: Sensores para evitar obstáculos, actuadores para mover brazos o ruedas.  
- **Agricultura de precisión**: Sensores de humedad en suelo, actuadores que controlan riego automatizado.

---

## N. Conexión con lo que sigue

Este tema es clave para entender cómo funcionan los sistemas de control en `../sistemas_automatizados/`, donde se profundizará en la integración de sensores, controladores y actuadores para aplicaciones prácticas.