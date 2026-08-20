# Informática — Ciclo de instrucción fetch decode execute (teoría)

> Tema del MAPA: `ciclo-de-instruccion-fetch-decode-execute`. Depende de `../arquitectura-de-la-cpu/` (ver `../dependencias.md`).

## Tipo de teoría

**Presentación** — Explicación del proceso fundamental que sigue una CPU para ejecutar instrucciones en un computador.

---

## 1. ¿Qué es el ciclo de instrucción?

El ciclo de instrucción es la secuencia básica que sigue la unidad central de procesamiento (CPU) para interpretar y llevar a cabo las órdenes almacenadas en la memoria principal. Es el mecanismo por el cual un computador convierte datos y comandos en acciones concretas, como realizar cálculos o manipular información.

Este proceso se divide en tres etapas esenciales: **fetch** (búsqueda), **decode** (decodificación) y **execute** (ejecución). Cada una tiene un rol específico dentro del flujo de trabajo de la CPU y está diseñada para garantizar que las instrucciones se procesen de manera ordenada y eficiente.

---

## 2. Fetch: obtención de la instrucción

En la etapa **fetch**, la CPU toma la dirección de la próxima instrucción a ejecutar desde un registro llamado **contador de programa (PC)**. Este registro contiene siempre la ubicación en memoria donde se encuentra la instrucción siguiente.

La CPU envía esa dirección al **bus de direcciones** para acceder a la **memoria principal**, donde se lee la instrucción y se carga temporalmente en el **registro de instrucción (IR)**. Al finalizar esta etapa, el contador de programa se actualiza automáticamente para apuntar a la siguiente instrucción.

---

## 3. Decode: interpretación de la instrucción

Una vez que la instrucción está en el registro de instrucción, entra en la fase **decode**. Aquí, la **unidad de control** de la CPU analiza el contenido de la instrucción para determinar qué operación debe realizarse.

La instrucción está codificada en formato binario, y su decodificación implica identificar los componentes involucrados (como registros o operandos) y generar las señales eléctricas necesarias para que los circuitos internos de la CPU realicen la acción solicitada. Este paso es clave para que la CPU entienda qué debe hacer exactamente con los datos disponibles.

---

## 4. Execute: ejecución de la operación

En esta etapa, la CPU lleva a cabo la operación especificada en la instrucción. Puede tratarse de una aritmética (como sumar dos números), una operación lógica, el acceso a memoria o incluso la transferencia de datos entre registros.

La **unidad aritmético-lógica (ALU)** suele ser responsable de las operaciones matemáticas y lógicas, mientras que otros componentes de la CPU manejan tareas como leer/escribir en la memoria o modificar el contador de programa. Una vez finalizada la ejecución, el ciclo se repite para procesar la siguiente instrucción.

---

## 5. Conexión con lo que sigue

Este ciclo es la base del funcionamiento de cualquier computador, y su comprensión es clave para temas posteriores como `../funcionamiento-de-la-ram/` o `../optimizacion-de-codigo/`, donde se analiza cómo las instrucciones afectan el rendimiento del sistema.