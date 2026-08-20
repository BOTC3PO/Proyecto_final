# Fundamentos de los Tipos de Pruebas en QA

## Introducción: ¿Por qué clasificamos las pruebas?

En el desarrollo de software, "hacer pruebas" no es un acto único, sino un conjunto de actividades estratificadas. La clasificación de los **tipos de testing** sirve para definir el **qué** probar (el objetivo) y el **cómo** (la perspectiva). Sin esta distinción, un QA podría pasar horas validando que un botón se vea bien, mientras deja pasar un error crítico de seguridad o de integración de datos.

En la práctica, entender estos niveles permite comunicar efectivamente con desarrolladores, diseñar planes de prueba realistas y evitar la ilusión de calidad: que el software "funcione" en mi máquina no significa que funcione en producción.

## Explicación central: Los niveles clave

Aunque existen muchas taxonomías, en el día a día de un QA junior o intermedio nos centramos en tres pilares fundamentales:

### 1. Pruebas Unitarias (Unit Testing)
Son las pruebas más granulares. Verifican el comportamiento de la menor unidad de código posible (generalmente una función o método).
*   **Quién las hace:** Principalmente desarrolladores.
*   **Herramientas típicas:** Jest (JavaScript), JUnit (Java), pytest (Python).
*   **Ejemplo real:** Si tienes una función `calcularImpuesto(precio)`, una prueba unitaria verifica que `calcularImpuesto(100)` devuelva `105` (asumiendo IVA del 5%) y que `calcularImpuesto(0)` devuelva `0`. No importa la interfaz gráfica, solo la lógica pura.

### 2. Pruebas de Integración
Verifican que diferentes módulos o servicios funcionen correctamente entre sí. Aquí el foco está en el flujo de datos y las dependencias.
*   **El reto:** Manejar dependencias externas (bases de datos, APIs de terceros).
*   **Ejemplo real:** Al probar un servicio de "Checkout", no solo verificas que el cálculo sea correcto, sino que la llamada a la base de datos para guardar el pedido y la llamada a la API de Stripe para cobrar funcionen juntas. A menudo se usan "mocks" o "stubs" para simular respuestas de la API de pago y no cobrar dinero real durante la prueba.

### 3. Pruebas End-to-End (E2E)
Simulan el recorrido completo de un usuario real en el entorno más parecido a producción posible. Validan flujos de negocio completos.
*   **Herramientas típicas:** Cypress, Playwright, Selenium.
*   **Ejemplo real:** Un script que abre el navegador, hace login con un usuario válido, busca un producto, lo agrega al carrito, procede al pago con tarjeta de prueba y verifica que aparezca la pantalla de "Éxito".
*   **Nota:** Son lentas y frágiles. Si cambia un ID de un botón en el CSS, la prueba se rompe aunque la funcionalidad esté bien.

## Errores comunes de quien recién aprende

1.  **Confundir "funciona" con "está bien probado":** Un desarrollador corre las pruebas unitarias y ve un check verde. Eso no significa que la integración con la base de datos funcione. El QA debe asegurarse de que los niveles superiores cubran lo que los unitarios no alcanzan.
2.  **Escribir pruebas E2E para todo:** Intentar cubrir cada validación de formulario con Cypress es un error de inversión. Las validaciones de formato (ej. "el email debe tener @") deben probarse con pruebas unitarias o de integración ligeras. Usar E2E solo para flujos críticos es más eficiente.
3.  **Ignorar el entorno de prueba:** Correr pruebas de integración contra la base de datos de producción es un pecado mortal en QA. Siempre se debe usar un entorno aislado o contenedores Docker para garantizar la limpieza de datos.

## Cuándo usarlo / Cuándo NO usarlo

*   **Usa Pruebas Unitarias** cuando necesites verificar lógica de negocio compleja, algoritmos matemáticos o reglas de transformación de datos. Es rápido y barato.
*   **Usa Pruebas de Integración** cuando cambies la estructura de una API, migres una base de datos o conectes un nuevo microservicio.
*   **Usa Pruebas E2E** exclusivamente para los "Happy Paths" críticos (ej. registro, compra, login) y regresiones mayores.
*   **NO uses E2E** para validar mensajes de error específicos de un input o estados internos del componente. Eso infla el tiempo de ejecución y reduce la mantenibilidad.

## Ejemplo extendido en contexto: El flujo de "Olvidé mi contraseña"

Imagina que debes probar un flujo donde el usuario solicita restablecer su contraseña.

1.  **Nivel Unitario:** El desarrollador prueba la función `generarTokenRestablecimiento()` asegurándose de que el token tenga la longitud correcta, sea único y expire en 24 horas.
2.  **Nivel Integración:** Se prueba que al guardar el token en la base de datos, el servicio de email (ej. SendGrid) reciba el evento para enviar el correo. Se verifica que el correo llegue y contenga el enlace correcto. Aquí se prueba la comunicación entre la app, la DB y el proveedor de emails.
3.  **Nivel E2E:** Un QA (o un script automatizado) abre el navegador, va a la página de login, hace clic en "¿Olvidaste tu contraseña?", ingresa un email existente, verifica que reciba el correo (o revisa el log de la app en modo desarrollo), hace clic en el enlace, ingresa una nueva contraseña válida y confirma que el sistema lo deja entrar con la nueva clave.

Este enfoque estratificado asegura que la lógica sea correcta (unitario), que los sistemas hablen bien (integración) y que el usuario final pueda recuperar su cuenta sin fricción (E2E).