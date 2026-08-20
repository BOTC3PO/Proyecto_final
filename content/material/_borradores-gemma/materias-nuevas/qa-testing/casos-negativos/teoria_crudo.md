# Casos Negativos: La defensa del software

En el desarrollo de software, es tentador enfocarse en que el sistema "funcione" bajo condiciones ideales. Sin embargo, la robustez de una aplicación se define por cómo se comporta cuando las cosas salen mal. Los **casos negativos** (o *negative test cases*) son escenarios diseñados para verificar que el sistema maneja entradas inválidas, condiciones de error o estados inesperados de manera controlada, sin colapsar ni exponer datos sensibles.

Un caso negativo no busca que la funcionalidad se ejecute correctamente en el sentido positivo (es decir, que el botón "Guardar" almacene el dato), sino que valida la **capacidad de recuperación** y la **calidad de la retroalimentación** (feedback) al usuario o al consumidor de la API.

## Explicación central y sintaxis práctica

La esencia del caso negativo es la validación de excepciones. A diferencia de un caso positivo donde verificamos el *estado final* deseado, en un caso negativo verificamos que el sistema lance una excepción esperada, retorne un código de error HTTP adecuado (en APIs) o muestre un mensaje de validación claro.

### Ejemplos en diferentes capas

**1. En pruebas de API (REST):**
Al enviar una petición con datos malformados, no debemos aceptar una respuesta `200 OK` con un objeto vacío o nulo. Debemos esperar un código de estado `4xx` (cliente) o `5xx` (servidor).

```javascript
// Ejemplo conceptual en JavaScript/Axios
const response = await api.post('/users', {
  email: '', // Campo requerido vacío
  nombre: 123 // Tipo incorrecto
});

// Validación del caso negativo
expect(response.status).toBe(400); // Bad Request
expect(response.data.error).toBe('Validación fallida');
```

**2. En pruebas de UI (Selenium/Playwright/Cypress):**
Aquí el foco está en la interacción del usuario con elementos deshabilitados o en estados de carga.

```python
# Ejemplo conceptual en Python/Playwright
# Intentar enviar un formulario sin llenar el campo obligatorio
page.fill("#email", "")
page.click("#submit-btn")

# El caso negativo verifica que el botón no se deshabilita indefinidamente
# y que aparece el mensaje de error visual
assert page.is_visible("#error-message")
assert "El email es obligatorio" in page.text_content("#error-message")
```

**3. En lógica de negocio (Unit Tests):**
Validar que una función lance la excepción correcta antes de procesar datos.

```java
@Test
void testDebitoConSaldoInsuficiente() {
    Cuenta cuenta = new Cuenta(100.0);
    
    // El caso negativo espera que se lance la excepción
    assertThrows(InsufficientFundsException.class, () -> {
        cuenta.retirar(150.0);
    });
}
```

## Errores comunes al diseñar casos negativos

1.  **Ignorar los mensajes de error:** Muchos testers verifican que ocurra un error, pero no revisan *qué* error se muestra. Un mensaje genérico como "Error 500" o "Algo salió mal" es inútil para el usuario y oculta bugs reales.
2.  **No limpiar el estado (State Cleanup):** En pruebas integradas, un caso negativo que falla a mitad de ejecución puede dejar la base de datos en un estado inconsistente, afectando pruebas posteriores. Siempre se debe asegurar que el entorno se restablezca.
3.  **Confundir "no hacer nada" con "manejo de error":** Si el usuario introduce un dato inválido y el sistema simplemente ignora la entrada sin avisar, eso es un bug de usabilidad, no un caso negativo bien definido. La inercia del sistema debe ser visible.
4.  **Sobreenfocarse en lo obvio:** Limitarse a campos vacíos. Los casos negativos más valiosos suelen ser los bordes: caracteres especiales, longitud máxima, inyección SQL, o datos de formatos mixtos.

## Cuándo usarlo y cuándo NO usarlo

*   **Usar casos negativos cuando:**
    *   Se desarrollan endpoints de API críticos (pagos, autenticación).
    *   Se manejan datos sensibles o transacciones financieras.
    *   La UX depende de la claridad de los errores (formularios de registro, checkout).
    *   Se requiere garantizar la seguridad del sistema contra inyecciones o desbordamientos.

*   **Evitar o reducir la complejidad cuando:**
    *   Se prueba una funcionalidad estática o de solo lectura donde la probabilidad de error es nula.
    *   En fases muy tempranas de prototipado donde la prioridad es la velocidad de iteración sobre la robustez.
    *   Cuando el costo de mantener la validación excede el riesgo (ej. un campo de "apodo" opcional en una red social interna).

## Ejemplo extendido: Registro de Usuario con Validación de Email

Imaginemos que estamos probando el flujo de registro de una plataforma SaaS. El caso positivo verifica que el usuario se crea y recibe un email de bienvenida. El **caso negativo** crítico es la validación del formato de email.

**Escenario:** El usuario intenta registrarse con un email que no sigue el RFC 5322 estándar (ej. `usuario@dominio` sin TLD, o con espacios).

1.  **Entrada:** Se envía una petición POST a `/api/auth/register` con el payload:
    ```json
    {
      "name": "Juan Pérez",
      "email": "juan.perez@dominio",
      "password": "123456"
    }
    ```
2.  **Acción:** El sistema debe interceptar la validación del lado del servidor (nunca confiar solo en el frontend).
3.  **Verificación (Assertion):**
    *   El código de estado HTTP debe ser `422 Unprocessable Entity` o `400 Bad Request`.
    *   El cuerpo de la respuesta debe contener un array de errores específico: `[{ "field": "email", "message": "Formato de email inválido" }]`.
    *   **Crucial:** La base de datos no debe haber creado ningún registro parcial del usuario.
    *   **Seguridad:** El sistema no debe revelar si el email ya existe o no en esta etapa (para evitar enumeración de usuarios).

Este enfoque asegura que la aplicación sea resistente a entradas maliciosas y proporcione una experiencia de usuario clara, incluso cuando el usuario comete un error.