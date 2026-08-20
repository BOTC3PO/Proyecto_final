# Filtrado de datos con `SELECT` y `WHERE`

## Introducción

En el mundo de las bases de datos, no siempre necesitamos ver todo el contenido de una tabla. Por el contrario, lo más común es buscar información específica entre millones de registros. Aquí entran en juego dos pilares fundamentales del lenguaje SQL: la cláusula `SELECT`, para indicar qué columnas queremos ver, y la cláusula `WHERE`, para definir qué filas cumplen con nuestras condiciones.

Juntos, permiten transformar una consulta genérica en una pregunta precisa: *"Dame los nombres y sueldos de los empleados que ganan más de 30.000 pesos"*. Sin `WHERE`, estaríamos recibiendo datos innecesarios; sin `SELECT`, no sabríamos qué información extraer.

## Explicación central y sintaxis

La estructura básica de una consulta que combina ambos elementos sigue este orden lógico:

```sql
SELECT columna1, columna2
FROM nombre_tabla
WHERE condicion;
```

Es crucial notar que `WHERE` siempre va después de `FROM`. Aunque en la lectura humana pensamos primero en "quién cumple la condición", en SQL el motor primero identifica la fuente de datos (`FROM`) y luego aplica el filtro (`WHERE`) antes de proyectar las columnas (`SELECT`).

### Operadores de comparación

El corazón de `WHERE` son los operadores de comparación. Los más usados en este nivel son:

*   **Igualdad (`=`)**: Para valores exactos.
    ```sql
    SELECT nombre, ciudad
    FROM clientes
    WHERE ciudad = 'Buenos Aires';
    ```
*   **Mayor/Menor que (`>`, `<`, `>=`, `<=`)**: Para rangos numéricos o fechas.
    ```sql
    SELECT producto, precio
    FROM productos
    WHERE precio >= 1000;
    ```
*   **Distinto (`!=` o `<>`)**: Para excluir un valor.
    ```sql
    SELECT id, estado
    FROM pedidos
    WHERE estado != 'cancelado';
    ```

### Lógica booleana: `AND`, `OR`, `NOT`

Cuando necesitamos combinar condiciones, usamos operadores lógicos. El orden de precedencia es importante: `NOT` se evalúa primero, luego `AND`, y por último `OR`. Para evitar ambigüedades, es buena práctica usar paréntesis.

```sql
-- Ejemplo con AND: ambas condiciones deben ser verdaderas
SELECT nombre, sueldo
FROM empleados
WHERE sueldo > 50000 AND departamento = 'Ventas';

-- Ejemplo con OR: al menos una condición debe ser verdadera
SELECT nombre, fecha_nacimiento
FROM usuarios
WHERE fecha_nacimiento < '1990-01-01' OR fecha_nacimiento > '2000-01-01';
```

## Errores comunes de principiantes

1.  **Confundir asignación con comparación**: En otros lenguajes de programación, `=` significa "asignar valor". En `WHERE`, `=` significa "es igual a". Nunca uses `=` para asignar valores en una cláusula de condición.
2.  **Olvidar las comillas en strings**: Si filtras por texto o fecha, los valores deben ir entre comillas simples (`'texto'`). Si escribes `WHERE ciudad = Buenos Aires` (sin comillas), SQL interpretará "Buenos" como una columna, lo que generará un error.
3.  **Usar `WHERE` con columnas calculadas**: No puedes filtrar directamente por un alias definido en el mismo `SELECT` en la mayoría de los motores SQL estándar.
    *   *Incorrecto*: `SELECT sueldo * 1.1 AS sueldo_neto FROM empleados WHERE sueldo_neto > 60000;`
    *   *Correcto*: Debes repetir la lógica o usar un `HAVING` (si usas `GROUP BY`).
4.  **Ignorar el `NULL`**: Comparar con `=` no funciona para valores nulos. Para buscar nulos, se debe usar `IS NULL` o `IS NOT NULL`.

## Cuándo usarlo / Cuándo NO usarlo

**Úsalo cuando:**
*   Necesitas reducir el volumen de datos antes de procesarlos.
*   Quieres aplicar lógica de negocio simple (rango de fechas, estado específico, categoría).
*   Estás trabajando con índices en esas columnas (esto mejora drásticamente el rendimiento).

**No lo uses (o reconsidera) cuando:**
*   El filtro es tan complejo que requiere lógica de agregación (ej. "clientes que han comprado más de 5 veces"). Para esto, usa `HAVING` junto con `GROUP BY`.
*   La condición depende de subconsultas que devuelven múltiples filas y no estás usando `IN` o `EXISTS` correctamente.
*   Estás intentando modificar datos. `WHERE` no cambia datos; para eso se usa `UPDATE` o `DELETE`.

## Ejemplo extendido en contexto

Imagina que trabajas en una tienda online y tu jefe te pide un reporte de urgencia: *"Necesito saber quiénes son los clientes premium que han comprado productos de la categoría 'Tecnología' en el último mes, pero que todavía no han realizado un reclamo"*.

Una consulta ingenua podría traer todos los clientes y luego filtrar en Excel, pero eso es ineficiente. Haremos el filtro en la base de datos.

```sql
SELECT 
    c.nombre, 
    c.email, 
    p.nombre AS producto_comprado,
    o.fecha_compra
FROM clientes c
JOIN pedidos o ON c.id = o.cliente_id
JOIN detalles_pedido dp ON o.id = dp.pedido_id
JOIN productos p ON dp.producto_id = p.id
WHERE 
    c.plan = 'Premium'
    AND p.categoria = 'Tecnología'
    AND o.fecha_compra >= CURRENT_DATE - INTERVAL '1 month'
    AND c.id NOT IN (
        SELECT DISTINCT cliente_id 
        FROM reclamos 
        WHERE reclamo_activo = TRUE
    );
```

**Análisis del caso:**
1.  **`SELECT`**: Definimos qué datos queremos ver (nombre, email, producto, fecha).
2.  **`FROM` y `JOIN`**: Conectamos las tablas para tener acceso a la información dispersa.
3.  **`WHERE`**: Aquí aplicamos la lógica estricta:
    *   Filtramos por el plan del cliente (`'Premium'`).
    *   Filtramos por la categoría del producto (`'Tecnología'`).
    *   Filtramos por rango de fechas usando una función de fecha válida (`CURRENT_DATE - INTERVAL ...`).
    *   Usamos `NOT IN` con una subconsulta para excluir clientes que tengan reclamos activos.

Este enfoque asegura que la base de datos devuelva únicamente el conjunto exacto de datos necesarios, minimizando el procesamiento posterior y garantizando la integridad de la información filtrada.