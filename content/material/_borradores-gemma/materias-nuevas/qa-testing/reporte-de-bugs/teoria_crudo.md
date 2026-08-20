# Redacción de Reportes de Bugs Efectivos: Del Hallazgo a la Acción

En el ecosistema de pruebas de software, un bug report es la pieza central de comunicación entre quien encuentra el error (QA) y quien lo soluciona (Desarrollo). Un reporte bien redactado no es solo una queja técnica; es un caso de uso estructurado que permite reproducir, analizar y corregir defectos de manera eficiente. En este nivel intermedio, dejamos atrás la simple descripción del error para enfocarnos en la **trazabilidad**, la **reproducibilidad** y la **priorización contextual**.

## Anatomía de un Reporte de Calidad

Un reporte robusto debe responder a las preguntas: *¿Qué?*, *¿Dónde?*, *¿Cuándo?*, *¿Cómo?*, *¿Por qué importa?* y *¿Qué hay de diferente?* (si aplica).

### 1. Título Conciso y Descriptivo
El título debe ser autocontenido. Un desarrollador debería entender el problema sin leer el cuerpo del reporte.
*   **Mal:** "El botón no funciona."
*   **Bien:** "Al hacer clic en 'Enviar' en el formulario de registro, la página queda en blanco y no se valida el email."

### 2. Pasos para Reproducir (Steps to Reproduce)
Esta es la sección más crítica. Debe ser una receta exacta, numerada y neutral.
1.  Navegar a `https://app.ejemplo.com/registro`.
2.  Ingresar un nombre válido.
3.  Ingresar un email con formato incorrecto (`usuario@`).
4.  Hacer clic en el botón "Enviar".
5.  Observar el comportamiento de la interfaz.

### 3. Resultado Esperado vs. Resultado Actual
*   **Resultado Esperado:** El sistema debe mostrar un mensaje de error debajo del campo de email indicando "Formato de email inválido" y no enviar el formulario.
*   **Resultado Actual:** La pantalla se pone blanca (pantallazo blanco), no hay mensajes de error y la URL cambia a `/error`, pero no se muestra contenido.

### 4. Evidencia y Contexto Técnico
En el nivel intermedio, la evidencia va más allá de una captura de pantalla. Incluye:
*   **Logs del navegador:** Consola de desarrollador (F12) mostrando errores de JavaScript (ej. `TypeError: Cannot read property 'value' of null`).
*   **Logs del servidor:** Si se tiene acceso, el status code de la respuesta HTTP (ej. `500 Internal Server Error` en la red).
*   **Datos de prueba:** El usuario y contraseña exactos utilizados.
*   **Entorno:** Navegador (Chrome 120, Firefox), SO (Windows 11), versión de la app (v2.4.1).

## Errores Comunes en la Redacción

1.  **Asumir la causa raíz:** Escribir "La base de datos está caída" cuando solo se ve un error de UI. El QA debe reportar el *síntoma*, no el *diagnóstico* (a menos que se tenga acceso directo a la infraestructura y se pueda verificar).
2.  **Omitir el entorno:** Un bug que ocurre solo en Safari o en resoluciones de pantalla específicas puede ser irrelevante para un desarrollador que trabaja en Chrome/Desktop.
3.  **Falta de reproducibilidad:** Usar pasos ambiguos como "Prueba el flujo completo". Esto obliga al desarrollador a adivinar qué flujo específico falló.
4.  **Ignorar el estado previo:** No mencionar si el usuario debe estar logueado, si hay datos previos guardados o si es la primera vez que se usa la función.

## Cuándo Usar y Cuándo No Usar un Bug Report

### Úsalo cuando:
*   El comportamiento se desvía de los requisitos funcionales o de diseño.
*   Hay un error de interfaz que impide el uso de la función (bloqueante).
*   El error es inconsistente pero reproducible bajo condiciones específicas (no determinístico).

### No lo uses (o úsalo con cautela) cuando:
*   Es una sugerencia de mejora o cambio de UX (a menos que se haya validado que viola guidelines de usabilidad). Usa una *Feature Request* o *Improvement*.
*   El error ocurre en un entorno no soportado (ej. Internet Explorer en una app moderna).
*   Es un problema de configuración del entorno local del tester (ej. falta de permisos, caché corrupta). Primero verifica en un entorno limpio o incógnito.

## Ejemplo Extendido: Contexto de Integración

**Caso:** Integración con pasarela de pagos.

**Título:** [Pago] Error 502 al procesar tarjeta con CVV de 4 dígitos en Checkout.

**Descripción:**
Durante la prueba de integración con la pasarela Stripe, se detecta que el sistema falla al procesar tarjetas de crédito que requieren 4 dígitos de CVV (común en tarjetas American Express). El frontend envía la solicitud correctamente, pero el backend retorna un error 502.

**Pasos para Reproducir:**
1.  Iniciar sesión con usuario `qa_tester_01`.
2.  Agregar un producto al carrito y proceder al checkout.
3.  Seleccionar "Tarjeta de Crédito" como método de pago.
4.  Ingresar datos de tarjeta Amex de prueba:
    *   Número: `378282246310005`
    *   Fecha de expiración: `12/25`
    *   CVV: `1234` (4 dígitos)
5.  Hacer clic en "Pagar".

**Resultado Esperado:**
La transacción se procesa exitosamente y se muestra la pantalla de confirmación de orden.

**Resultado Actual:**
La pantalla de carga queda congelada indefinidamente. En la consola del navegador se observa:
`POST https://api.ejemplo.com/v1/payments 502 (Bad Gateway)`
En los logs de la aplicación (Nivel ERROR): `Stripe API Error: Invalid request. CVV length must be 4 digits for AMEX.`

**Impacto:**
Crítico. Se pierde la capacidad de cobrar tarjetas American Express, afectando aproximadamente al 15% de la base de usuarios corporativos.

**Evidencia:**
*   [Video.mp4] Grabación de la pantalla mostrando el proceso.
*   [Screenshot.png] Captura de la consola de red con la respuesta 502.
*   [Logs.txt] Extracto de los logs del servidor con el timestamp `2023-10-27 14:32:01`.

**Notas Adicionales:**
Funciona correctamente con tarjetas Visa/Mastercard (CVV de 3 dígitos). El problema parece estar en la validación del backend antes de enviar la solicitud a Stripe.