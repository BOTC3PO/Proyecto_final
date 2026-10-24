# Electrónica — Microcontroladores y microprocesadores (teoría)

> Tema del MAPA: `MC-04`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría

**Presentación** — Explicación de las diferencias y usos entre dos tipos de dispositivos electrónicos centrales.

---

## 1. ¿Qué es un microcontrolador?

Un microcontrolador es un circuito integrado que combina en un solo chip la unidad central de procesamiento (CPU), memoria RAM, memoria ROM y periféricos básicos como entradas/salidas digitales o analógicas [IMAGEN: diagrama de un microcontrolador con CPU, RAM, ROM y periféricos integrados]. Su diseño se enfoca en realizar tareas específicas con un consumo de energía reducido y sin necesidad de componentes externos adicionales. Por ejemplo, en una lavadora, el microcontrolador gestiona el ciclo de enjuague, temperatura del agua y tiempo de centrifugado mediante sensores y actuadores conectados directamente al chip.

## 2. ¿Qué es un microprocesador?

Un microprocesador, en cambio, contiene solo la CPU sin incluir memoria ni periféricos. Su función es procesar instrucciones complejas y manejar grandes volúmenes de datos, pero requiere componentes externos como tarjetas madre, memorias RAM/ROM y dispositivos de entrada/salida para operar. Se usa en computadoras personales, consolas de videojuegos o servidores donde se necesita flexibilidad y potencia de cálculo. Por ejemplo, un microprocesador de alta gama podría ejecutar gráficos 3D de alta resolución en una PC, pero no tendría interfaces integradas para controlar el motor de una lavadora.

## 3. Aplicaciones prácticas

Los microcontroladores se emplean en sistemas dedicados donde la tarea es específica y constante: desde reguladores de temperatura en hornos hasta sensores de movimiento en luces inteligentes. Su simplicidad y bajo costo los hacen ideales para dispositivos que no requieren actualizaciones frecuentes ni grandes capacidades de procesamiento.

Los microprocesadores, por su parte, dominan entornos donde la versatilidad es clave: sistemas operativos, bases de datos o aplicaciones que manejan múltiples tareas simultáneas. Su capacidad para ejecutar software complejo los convierte en el núcleo de computadoras y dispositivos móviles, aunque su uso implica mayor consumo energético y dependencia de hardware externo.

## 4. Ventajas y limitaciones

Un microcontrolador tiene la ventaja de ser autónomo: todo lo que necesita para funcionar está dentro del chip, lo que reduce el tamaño, costo y complejidad del diseño. Sin embargo, su potencia es limitada, lo que lo hace inadecuado para tareas que requieren grandes recursos computacionales.

Un microprocesador supera en rendimiento pero depende de otros componentes para operar. Esto lo vuelve más versátil, aunque también más costoso y complejo de integrar en dispositivos pequeños o con requisitos estrictos de energía.

## N. Conexión con lo que sigue

Este tema se relaciona directamente con `../sensores_y_actuadores/`, donde se explicará cómo los microcontroladores interactúan con componentes externos para controlar sistemas físicos.