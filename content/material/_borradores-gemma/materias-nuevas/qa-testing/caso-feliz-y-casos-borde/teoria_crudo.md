# Casos de Éxito y Casos Borde en QA: Estrategias de Pruebas Intermedias

En el desarrollo de software, la calidad no se mide solo por si el sistema "funciona", sino por cómo reacciona ante lo inesperado. Para un QA intermedio, dominar la distinción entre **casos de éxito** (happy path) y **casos borde** (edge cases) es fundamental para reducir la deuda técnica y evitar fugas críticas a producción.

## 1. Casos de Éxito (Happy Path)

El caso de éxito representa el flujo ideal de ejecución donde el usuario realiza la acción correcta, con los datos válidos y en el entorno esperado. No hay errores de red, ni datos corruptos, ni permisos denegados.

**¿Para qué sirve?**
Valida que la funcionalidad principal cumple con los requisitos básicos. Es la prueba de humo inicial. Si el happy path falla, no tiene sentido probar los bordes.

**Ejemplo real (API REST):**
Al probar un endpoint `POST /api/orders`, el caso de éxito implica enviar un `JSON` con todos los campos obligatorios (`product_id`, `quantity`, `user_id`) y recibir un `201 Created`.

```json
// Request válido
{
  "product_id": 101,
  "quantity": 1,
  "user_id": 55
}

// Response esperado
{
  "status": 201,
  "message": "Order created successfully",
  "order_id": "ORD-999"
}
```

## 2. Casos Borde (Edge Cases)

Los casos borde ocurren en los límites del espacio de entrada o de las condiciones del sistema. Aquí es donde la lógica de negocio suele tener grietas. No son "errores" del usuario, sino límites definidos por el dominio.

**Características clave:**
*   Valores límite numéricos (mínimo, máximo, cero, negativos).
*   Datos vacíos o nulos en campos obligatorios.
*   Límites de longitud de cadenas (strings).
*   Condiciones de concurrencia (dos usuarios compriendo el último ítem).

**Ejemplo real (Frontend/Formularios):**
Si un campo de "Edad" acepta números enteros:
*   **Borde inferior:** 0 o -1.
*   **Borde superior:** 150 (o el valor máximo de tipo de dato `int16`).
*   **Tipo de dato:** Enviar letras (`"abc"`) o caracteres especiales (`"@"`) en un campo numérico.

```javascript
// Caso borde: Longitud máxima permitida por la BD (ej. 255 chars)
const longString = "a".repeat(256); 
// Esperado: Error de validación "Excede el límite de caracteres"
// Bug común: Truncamiento silencioso o crash del servidor
```

## 3. Errores Comunes del Aprendiz

1.  **Confundir "caso raro" con "caso borde":** Un caso borde no es solo algo improbable; es un límite definido. Ejemplo: "Que llueva durante la compra" no es un caso borde de software, pero "que el carrito tenga exactamente 50 ítems si el límite es 50" sí lo es.
2.  **Ignorar la negación en happy paths:** Asumir que porque los datos son "válidos" el flujo funcionará, sin considerar estados previos del usuario (ej. sesión expirada, carrito vacío).
3.  **Sobrecargar pruebas de borde:** Probar todas las combinaciones posibles de caracteres especiales es inviable. Hay que seleccionar los representativos (SQL injection, XSS, límites de tipo).

## 4. Cuándo Usar Cada Enfoque (Trade-offs)

| Enfoque | Cuándo usarlo | Cuándo NO usarlo / Riesgos |
| :--- | :--- | :--- |
| **Happy Path** | En cada build, CI/CD, y regresión básica. | No usarlo como única prueba. Da una falsa sensación de seguridad. |
| **Edge Cases** | Antes de releases mayores, en módulos críticos (pagos, autenticación), y cuando hay cambios en la lógica de validación. | No usarlo para flujos triviales o UI estática. El costo de mantenimiento de estos tests es alto y el valor marginal decrece si la funcionalidad es simple. |

**Regla de oro:** El happy path asegura que el producto *funciona*; los casos borde aseguran que el producto *no se rompe* bajo presión.

## 5. Ejemplo Extendido: Sistema de Cupones de Descuento

Imagina un módulo de checkout que aplica cupones.

### Escenario 1: Happy Path
*   **Acción:** Usuario ingresa cupón `"VERANO20"` válido, con fecha de expiración futura.
*   **Resultado:** Se aplica el 20% de descuento. El total se recalcula correctamente.
*   **Prueba:** Verificar que el campo `discount_amount` sea mayor a 0 y que el `total_final` sea correcto.

### Escenario 2: Casos Borde Críticos
Aquí es donde el QA intermedio añade valor. Debemos probar los límites del cupón:

1.  **Límite de caracteres:** Ingresar un cupón de 300 caracteres (si el campo en DB es `VARCHAR(100)`).
    *   *Riesgo:* Error de base de datos o inyección de código.
2.  **Límite Temporal:** Ingresar un cupón expirado hace 1 segundo (`2023-01-01 00:00:00`).
    *   *Riesgo:* El sistema debería rechazarlo. Si lo acepta, es un bug de lógica de comparación de fechas.
3.  **Casos Especiales de Cadena:** Ingresar `"verano20 "` (con espacio al final) o `"VERANO20\n"` (con salto de línea).
    *   *Riesgo:* ¿El sistema normaliza los datos? Si no, el usuario no puede usar el cupón aunque sea válido, generando fricción.
4.  **Límite de Uso:** Cupón válido pero con `max_uses = 0` (ya fue usado todas las veces permitidas).
    *   *Resultado esperado:* Mensaje claro "Cupón agotado", no un error 500 interno.

### Conclusión
Un QA intermedio no solo verifica que el botón "Comprar" funcione (happy path), sino que diseña casos borde para asegurar que la lógica de negocio resiste entradas maliciosas, límites de datos y estados inconsistentes. Esto reduce significativamente los bugs en producción y mejora la experiencia del usuario final.