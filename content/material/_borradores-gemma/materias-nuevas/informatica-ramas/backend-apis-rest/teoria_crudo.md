# APIs REST a Nivel Avanzado: Más allá del CRUD Básico

## Introducción

En el desarrollo de software moderno, una API REST (Representational State Transfer) es el puente fundamental entre el cliente (frontend, móvil u otro servicio) y el servidor. Mientras que en niveles básicos nos centramos en crear recursos simples (`GET`, `POST`), a nivel avanzado el desafío ya no es solo "hacer que funcione", sino garantizar que la API sea **escalable, segura, mantenible y robusta**.

Una API avanzada no solo devuelve datos; gestiona estados complejos, controla el acceso granularmente, optimiza el rendimiento mediante caché y versionado, y proporciona una experiencia de desarrollo clara (DX) para quienes consumen la API.

## Principios y Técnicas Avanzadas

### 1. Semántica HTTP Correcta y Códigos de Estado Precisos
El error más común es usar `200 OK` para todo. En una API bien diseñada, cada respuesta debe reflejar el resultado exacto de la operación:
*   `201 Created`: Para recursos nuevos.
*   `204 No Content`: Para eliminaciones exitosas sin cuerpo de respuesta.
*   `400 Bad Request`: Validación de entrada fallida.
*   `401 Unauthorized` vs `403 Forbidden`: El primero indica que no hay credenciales; el segundo, que las credenciales son válidas pero insuficientes para el recurso.
*   `409 Conflict`: Por ejemplo, intentar crear un usuario con un email ya existente.
*   `429 Too Many Requests`: Para implementar *rate limiting*.

### 2. Paginación, Filtrado y Ordenamiento
No se debe devolver todo un conjunto de datos masivo. Se debe implementar paginación eficiente. Existen dos enfoques principales:
*   **Offset/Paginación tradicional**: `?page=2&limit=20`. Sencilla, pero lenta en grandes bases de datos.
*   **Cursor-Based**: `?cursor=eyJpZCI6MTAwfQ==`. Más eficiente para conjuntos de datos que cambian constantemente, ya que evita el "salto" de registros debido a inserciones/eliminaciones concurrentes.

El filtrado debe ser flexible pero seguro. En lugar de permitir consultas SQL arbitrarias, se utilizan parámetros estructurados como `?status=active&sort=-created_at` (orden descendente por fecha de creación).

### 3. Versionado de la API
Las APIs evolucionan. Romper la compatibilidad con clientes existentes es inaceptable en producción. Las estrategias comunes son:
*   **URL Versioning**: `/api/v1/resource`, `/api/v2/resource`. Es explícito y fácil de entender.
*   **Header Versioning**: `Accept: application/vnd.myapp.v1+json`. Mantiene la URL limpia pero es menos visible.
*   **Content Negotiation**: Similar al header, pero más estandarizado.

Se recomienda usar versionado de URL para APIs públicas y header para APIs internas o muy maduras.

### 4. Seguridad y Autenticación/Autorización
*   **Autenticación**: Uso de JWT (JSON Web Tokens) o OAuth2. Los tokens deben tener tiempo de expiración corto y usarse junto con *refresh tokens*.
*   **Autorización**: Implementar RBAC (Role-Based Access Control) o ABAC (Attribute-Based Access Control) a nivel de controlador o servicio.
*   **Protección**: Validación estricta de entrada (sanitización), prevención de SQL Injection, CORS configurado correctamente y HTTPS obligatorio.

## Errores Comunes en el Nivel Avanzado

1.  **N+1 Query Problem**: Realizar una consulta por cada elemento de una lista. Se soluciona con *eager loading* o *batching*.
2.  **Over-fetching/Under-fetching**: Devolver datos innecesarios o requerir múltiples llamadas para obtener datos relacionados. GraphQL o HATEOAS pueden ayudar, pero una buena relación de datos en JSON también basta.
3.  **Ignorar la Idempotencia**: Operaciones `PUT` o `DELETE` deberían ser idempotentes (repetirlas múltiples veces tiene el mismo efecto que hacerlo una vez). `POST` no es idempotente por defecto.
4.  **Manejo de Errores Inconsistente**: Cada endpoint devuelve un formato de error diferente. Debe haber un esquema de error unificado (ej. `{ "error": { "code": "VALIDATION_ERROR", "message": "...", "details": [...] } }`).

## Cuándo Usar / Cuándo No Usar

*   **Usar REST cuando**: El cliente necesita recursos simples, la caché es importante, la simplicidad y la adopción rápida son prioritarias.
*   **Considerar GraphQL cuando**: El cliente es complejo (ej. app móvil) y necesita datos flexibles y específicos para evitar over-fetching.
*   **Considerar gRPC cuando**: La latencia es crítica y el cliente y servidor están bajo tu control completo (comunicación interna microservicios).
*   **NO usar REST cuando**: Se requiere comunicación en tiempo real (WebSockets es mejor) o el protocolo HTTP no es adecuado para el dominio.

## Ejemplo Extendido: Endpoint de Gestión de Pedidos

Imagina un endpoint `GET /api/v1/orders/{id}`.

**Requisito**: El cliente es una app móvil que necesita datos del pedido, pero no quiere cargar toda la historia del cliente.

**Implementación Avanzada**:
1.  **Autenticación**: El token JWT se valida en un middleware. Se verifica que el usuario tenga rol `admin` o sea el `owner` del pedido.
2.  **Controlador**:
    ```python
    def get_order(request, order_id):
        # 1. Validación de existencia
        order = Order.objects.filter(id=order_id).first()
        if not order:
            return Response(status=status.HTTP_404_NOT_FOUND)

        # 2. Autorización
        if not request.user.has_perm('view_order', order):
            return Response(status=status.HTTP_403_FORBIDDEN)

        # 3. Eager Loading para evitar N+1
        order = Order.objects.select_related('customer', 'items__product').get(id=order_id)

        # 4. Serialización con campo condicional
        serializer = OrderSerializer(order, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)
    ```

3.  **Respuesta**:
    ```json
    {
      "id": 12345,
      "status": "shipped",
      "total": 150.00,
      "customer": {
        "id": 99,
        "name": "Juan Pérez",
        "email": "juan@example.com"
      },
      "items": [
        {
          "product_name": "Laptop",
          "quantity": 1,
          "price": 150.00
        }
      ],
      "_links": {
        "self": "/api/v1/orders/12345",
        "cancel": "/api/v1/orders/12345/cancel"
      }
    }
    ```
    Se incluye HATEOAS (`_links`) para guiar al cliente sobre las acciones posibles, mejorando la discoverability de la API.