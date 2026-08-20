# Testing Exploratorio Avanzado: Más allá de la casualidad

El testing exploratorio no es simplemente "probar sin guiones". Es una metodología de diseño de pruebas donde la creación del plan de prueba, la ejecución y el aprendizaje ocurren en interacción simultánea. En un nivel avanzado, se trata de gestionar la complejidad dinámica del software mediante la aplicación deliberada de técnicas cognitivas y heurísticas, en lugar de depender de la suerte o la experiencia intuitiva no estructurada.

A diferencia del testing basado en documentos, donde la reproductibilidad es clave, en el exploratorio la reproductibilidad se logra mediante la captura precisa de la *sesión* (el contexto, las acciones y los hallazgos) para permitir la regresión del defecto, no necesariamente de la ruta exacta.

## Fundamentos y Técnicas de Diseño

En el nivel avanzado, el tester actúa como un investigador que debe estructurar su curiosidad. No se trata de navegar al azar, sino de utilizar **heurísticas** (reglas generales de probabilidad de defectos) para dirigir la exploración.

### 1. Heurísticas de Schwaber y Cohen
Se utilizan para generar ideas de qué probar. Por ejemplo:
*   **Heurística de la "Caída de la hoja":** Probar los datos que fluyen desde la entrada hasta la base de datos y viceversa.
*   **Heurística de la "Zona de peligro":** Enfocarse en áreas donde los cambios recientes fueron más agresivos o donde la lógica de negocio es más crítica.

### 2. Chartering (Misiones)
El elemento central del exploratorio avanzado es el *Charter* (o Misión). A diferencia de un script, un charter define:
*   **Objetivo:** Qué se quiere descubrir (ej. "Identificar errores de validación en el flujo de pago con tarjetas internacionales").
*   **Ámbito:** Qué está dentro y qué está fuera del alcance.
*   **Tiempo:** Duración de la sesión (típicamente 60-90 minutos).
*   **Recursos:** Herramientas necesarias (proxy, logs, bases de datos).

Un charter mal definido lleva a sesiones dispersas. Un charter bien definido permite medir la productividad y la cobertura.

### 3. Registro de Sesión (Session-Based Test Management - SBTM)
Para que el exploratorio sea profesional y auditable, se utiliza el SBTM. Cada tester trabaja en sesiones independientes y debe generar un reporte de sesión que incluya:
*   El charter ejecutado.
*   El tiempo dedicado a cada área.
*   Los defectos encontrados (con pasos para reproducirlos).
*   Observaciones cualitativas sobre el comportamiento del sistema.

Esto transforma la "prueba intuitiva" en datos gestionables.

## Errores Comunes en el Nivel Avanzado

1.  **Confundir libertad con falta de estructura:** Creer que no hay guiones significa que no hay reglas. Esto lleva a la "deriva de la prueba", donde el tester se pierde en detalles triviales y omite áreas críticas.
2.  **Subestimar la preparación:** Intentar ejecutar una sesión exploratoria sin entender el contexto del producto o sin tener acceso a las herramientas de depuración (red, logs, DB) resulta en una exploración superficial.
3.  **Ignorar la documentación posterior:** El mayor fracaso del exploratorio es encontrar un bug y no poder demostrarlo. Si el reporte de sesión es vago, el defecto se considerará "no reproducible" y se descartará.
4.  **Sobrecargar el charter:** Definir un charter demasiado amplio ("Probar el módulo de usuarios") en una sesión corta de 60 minutos es ineficiente. Es mejor tener múltiples charters específicos y cortos.

## Cuándo Usar y Cuándo No Usar

**Usa testing exploratorio avanzado cuando:**
*   Los requisitos son volátiles o ambiguos, y los casos de prueba estáticos quedan obsoletos rápidamente.
*   Se necesita evaluar la usabilidad, la robustez o la seguridad de forma rápida.
*   Hay poco tiempo para diseñar pruebas detalladas antes de una entrega.
*   Se busca descubrir defectos de integración o de flujo de datos que los scripts automatizados no cubren bien.

**NO lo uses (o úsalo con cautela) cuando:**
*   Se requiere certificación de cumplimiento estricto donde cada paso debe ser auditado individualmente.
*   El sistema es altamente determinista y repetitivo (ahí la automatización es más eficiente y económica).
*   El equipo no tiene la disciplina para documentar las sesiones. Sin SBTM, el exploratorio se vuelve una "caja negra" inmanejable.

## Ejemplo Extendido: Auditoría de Seguridad en un Flujo de Pago

Imagina que trabajas en una fintech y debes probar el flujo de pago con tarjetas de crédito antes de la versión 2.0.

**Preparación:**
Definimos tres charters de 45 minutos cada uno.
1.  **Charter A:** Manipulación de parámetros HTTP (interceptando con Burp Suite).
2.  **Charter B:** Estados de sesión y reintentos.
3.  **Charter C:** Validación de datos de entrada en el frontend vs. backend.

**Ejecución del Charter A (Ejemplo):**
El tester no sigue un script de "ingresar tarjeta válida". En su lugar, aplica la heurística de "falsificación de parámetros".
*   *Acción:* Intercepta la petición JSON enviada al servidor.
*   *Variación:* Cambia el campo `amount` de `100.00` a `0.01` antes de enviar.
*   *Observación:* El sistema acepta la transacción pero no actualiza el saldo.
*   *Hallazgo:* Posible vulnerabilidad de lógica de negocio (race condition o falta de validación de servidor).
*   *Acción:* Intenta enviar el mismo `transaction_id` dos veces consecutivas.

**Cierre de Sesión:**
El tester redacta el reporte:
*   *Tiempo:* 45 min.
*   *Cobertura:* 80% de los endpoints de pago.
*   *Defectos:* 2 críticos (validación de monto en servidor), 1 mayor (repetición de ID).
*   *Pasos para reproducir:* Incluye el payload JSON modificado y la respuesta del servidor.

Este enfoque permite descubrir vulnerabilidades de lógica que un script de "camino feliz" nunca encontraría, proporcionando un valor de auditoría real y accionable.