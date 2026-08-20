# Automatización — PLC: Lógica de Control Industrial (teoría)

> Tema del MAPA: `automatizacion/plc-logica-de-control-industrial`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Introducción al funcionamiento y componentes básicos de los PLC en sistemas industriales.

---

## 1. ¿Qué es un PLC?

Un **PLC (Controlador Lógico Programable)** es un dispositivo electrónico diseñado para controlar procesos industriales mediante la ejecución de una lógica programada. A diferencia de los computadores convencionales, está construido para operar en entornos hostiles, como altas temperaturas, vibraciones o presencia de polvo y humedad. Su función principal es reemplazar sistemas electromecánicos complejos con un software configurable, permitiendo ajustes rápidos sin alterar hardware físico. Por ejemplo, en una línea de ensamblaje, el PLC puede gestionar la secuencia de operaciones mediante sensores y actuadores conectados.

## 2. Componentes clave del sistema PLC

Un PLC está compuesto por varias partes que trabajan en conjunto para procesar información y controlar maquinaria:

- **CPU (Unidad Central de Procesamiento):** Es el "cerebro" del dispositivo, encargado de ejecutar la lógica programada. Almacena temporalmente datos y realiza cálculos necesarios durante cada ciclo.
- **Memoria:** Guarda tanto el programa de control como los datos temporales (como valores de entradas/salidas). Puede ser volátil (RAM) o no volátil (ROM/Flash).
- **Módulos I/O (Entrada/Salida):** Permiten la comunicación con el entorno físico. Las entradas reciben señales de sensores (ej: temperatura, presión), y las salidas activan actuadores (ej: válvulas, motores).
- **Fuente de alimentación:** Proporciona energía al PLC y a sus módulos periféricos.
- **Interfaz de usuario (opcional):** Algunos modelos incluyen pantallas o teclados para monitoreo y ajuste manual del programa.

Estos componentes se integran en un chasis modular, lo que facilita la expansión según las necesidades del proceso industrial.

## 3. El ciclo de scan: corazón del funcionamiento

El **ciclo de scan** es el proceso repetitivo y determinístico que ejecuta el PLC para garantizar un control preciso. Funciona en tres etapas:

1. **Lectura de entradas:** El PLC recoge los estados actuales de todos los sensores conectados (ej: si una puerta está abierta o cerrada).
2. **Ejecución del programa:** La CPU procesa la lógica programada, evaluando condiciones y tomando decisiones (ej: "si el sensor A está activo, encender motor B").
3. **Actualización de salidas:** Los resultados se aplican a los actuadores, modificando su estado en tiempo real (ej: abrir una válvula).

Este ciclo se repite constantemente, incluso cuando no hay cambios en las entradas, asegurando que el sistema responda de manera predecible. La duración del ciclo depende de la complejidad del programa y la velocidad de los componentes.

## 4. Ventajas de usar PLCs

Los PLCs ofrecen varias ventajas sobre sistemas tradicionales:

- **Flexibilidad:** Se pueden reprogramar fácilmente para adaptarse a nuevos procesos sin modificar hardware.
- **Fiabilidad:** Diseñados para operar en condiciones adversas, con redundancia en componentes críticos.
- **Escalabilidad:** Permite agregar módulos adicionales (ej: más entradas/salidas) según crezca el sistema industrial.
- **Costo reducido:** Al reemplazar circuitos electromecánicos costosos por software, disminuyen los gastos de mantenimiento.

## 5. Aplicaciones comunes en la industria

Los PLCs se utilizan en casi cualquier área donde haya necesidad de control automatizado:

- **Líneas de producción:** Gestión de máquinas en fábricas de alimentos, textiles o automotrices.
- **Sistemas de seguridad:** Control de puertas, alarmas y sensores de emergencia.
- **Edificios inteligentes:** Regulación de iluminación, climatización y sistemas de acceso.
- **Industria energética:** Monitoreo de redes eléctricas o control de turbinas en centrales.

[IMAGEN: Diagrama simplificado de un PLC con sus componentes principales (CPU, memoria, módulos I/O, alimentación) y su conexión a sensores/actuadores.]

## N. Conexión con lo que sigue

Este tema es fundamental para entender cómo se implementan programas en un PLC, abordado en programacion plc, donde se detallarán lenguajes como Ladder Logic o STL.