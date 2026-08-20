# Inserción, Actualización y Eliminación de Datos en SQL

## Introducción: La manipulación de datos

En el mundo de las bases de relacionales, los datos no son estáticos; evolucionan con el tiempo. Mientras que las consultas `SELECT` se encargan de leer y analizar la información, las instrucciones **DML (Data Manipulation Language)** son las herramientas que permiten modificar el estado de la base de datos.

Las operaciones fundamentales son:
*   **Insert**: Agregar nuevos registros.
*   **Update**: Modificar registros existentes.
*   **Delete**: Eliminar registros.

Dominar estas tres sentencias es crucial para cualquier rol técnico, desde desarrolladores hasta analistas de datos, ya que son la base de la integridad y la dinámica de la información empresarial.

## Explicación central y sintaxis real

### 1. Insertar datos (`INSERT`)
Sirve para añadir filas a una tabla. La sintaxis más segura y explícita especifica las columnas objetivo.

```sql
INSERT INTO empleados (nombre, apellido, cargo, fecha_ingreso)
VALUES ('Juan', 'Pérez', 'Desarrollador Junior', '2023-10-01');
```
*Nota:* Si omites los nombres de las columnas, el motor espera valores en el orden exacto en que fueron definidas en la tabla. Esto es propenso a errores si la estructura de la tabla cambia.

### 2. Actualizar datos (`UPDATE`)
Permite cambiar valores en filas existentes. **Este es el comando más peligroso** en SQL si no se tiene cuidado.

```sql
UPDATE empleados
SET cargo = 'Desarrollador Senior', salario = 5000
WHERE id_empleado = 105;
```
La cláusula `WHERE` es obligatoria en la mayoría de los entornos de producción para evitar modificar toda la tabla por accidente.

### 3. Eliminar datos (`DELETE`)
Remueve filas específicas de una tabla. A diferencia de `DROP TABLE`, que elimina la estructura, `DELETE` solo quita el contenido, manteniendo la tabla y sus índices intactos.

```sql
DELETE FROM empleados
WHERE fecha_ingreso < '2020-01-01';
```

## Errores comunes de principiantes

1.  **Olvidar el `WHERE` en `UPDATE` y `DELETE`**: Es el error clásico. Si ejecutas `UPDATE empleados SET salario = 0;`, todos los empleados recibirán salario cero. Siempre valida el `WHERE` con un `SELECT` previo.
2.  **Confundir `NULL` con cadena vacía (`''`)**: En SQL, `NULL` significa "ausencia de valor", no "cadena vacía". Comparar `WHERE nombre = ''` no encontrará registros donde `nombre IS NULL`.
3.  **Transacciones sin commit/rollback**: En bases de datos que soportan transacciones (como PostgreSQL o MySQL con InnoDB), los cambios no son permanentes hasta confirmarlos. Sin embargo, en herramientas de escritorio como MySQL Workbench o pgAdmin, a veces se confirma automáticamente, lo que genera confusión sobre cuándo se guardan los datos.
4.  **Ignorar claves foráneas**: Intentar borrar un registro que es referenciado por otra tabla sin configurar las reglas de integridad (como `ON DELETE CASCADE`) provocará un error de restricción.

## Cuándo usarlo / Cuándo NO usarlo

*   **Usa `INSERT`** cuando necesitas registrar un evento nuevo (una venta, un usuario, un log).
*   **Usa `UPDATE`** para corregir datos erróneos o actualizar estados (por ejemplo, cambiar el estado de un pedido de "Pendiente" a "Enviado").
*   **Usa `DELETE`** cuando la información ya no es necesaria y no hay requisito legal de conservarla (archivado).

**Cuándo NO usarlo directamente:**
*   **Auditoría de cambios**: Si necesitas saber *quién* cambió *qué* y *cuándo*, no uses `UPDATE` directo. Usa **Triggers** o habilita el historial de versiones de la base de datos.
*   **Limpieza masiva sin validación**: Nunca ejecutes `DELETE` o `UPDATE` masivos sin un `WHERE` bien probado o una transacción que permita revertir el cambio (`ROLLBACK`) si los resultados no son los esperados.

## Ejemplo extendido en contexto: Gestión de pedidos

Imagina que trabajas en una tienda online. Un cliente, con el `cliente_id = 50`, ha cancelado su último pedido (`pedido_id = 999`).

1.  **Verificar integridad**: Primero, asegúrate de que el pedido existe y pertenece a ese cliente.
    ```sql
    SELECT * FROM pedidos WHERE pedido_id = 999 AND cliente_id = 50;
    ```
2.  **Actualizar el estado**: No borres el pedido inmediatamente (los datos históricos son valiosos). En su lugar, actualízalo.
    ```sql
    UPDATE pedidos
    SET estado = 'Cancelado', fecha_cancelacion = CURRENT_DATE
    WHERE pedido_id = 999;
    ```
3.  **Liberar recursos (stock)**: Si el sistema lo requiere, podrías necesitar restar el stock devuelto a los productos asociados, pero eso involucraría múltiples tablas y transacciones complejas, fuera del alcance básico.

Este enfoque garantiza que el dato no se pierda, manteniendo un rastro de la transacción original, lo cual es una práctica estándar en ingeniería de software y administración de bases de datos.