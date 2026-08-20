# Transacciones SQL Avanzadas: Control de Integridad y Concurrencia

## Introducción

En el desarrollo de software empresarial, la integridad de los datos es no negociable. Una transacción SQL es una unidad lógica de trabajo que agrupa múltiples operaciones (SELECT, INSERT, UPDATE, DELETE) para garantizar que se completen todas o ninguna. Más allá de la básica atomicidad, el nivel avanzado implica comprender cómo las transacciones interactúan con el aislamiento concurrente, los bloqueos y la recuperación ante fallos. Este concepto es vital para sistemas bancarios, inventarios y cualquier aplicación donde la corrupción de datos tenga consecuencias críticas.

## Explicación Central: ACID y Niveles de Aislamiento

La robustez de una transacción se basa en las propiedades **ACID**:

1.  **Atomicidad:** Todo o nada. Si falla un paso, se revierte (ROLLBACK).
2.  **Consistencia:** La base de datos pasa de un estado válido a otro válido.
3.  **Aislamiento:** Las transacciones concurrentes no se interfieren entre sí.
4.  **Durabilidad:** Una vez confirmado (COMMIT), los cambios son permanentes.

### Control de Flujo

En SQL estándar (compatible con PostgreSQL, MySQL, SQL Server), la sintaxis básica es:

```sql
BEGIN TRANSACTION; -- O START TRANSACTION;

-- Operaciones críticas
UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;
UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;

-- Validación lógica (ejemplo conceptual)
-- IF @@ROWCOUNT = 0 THROW ...

COMMIT TRANSACTION; -- Guarda los cambios
-- O en caso de error: ROLLBACK TRANSACTION;
```

### Niveles de Aislamiento y Problemas de Concurrencia

El estándar SQL define niveles que determinan cómo las transacciones ven los datos de otras transacciones simultáneas. Elegir el nivel incorrecto genera errores sutiles:

*   **Read Uncommitted:** Permite "lecturas sucias" (dirty reads). Puedes ver datos que otra transacción ha modificado pero no confirmado. Si esa otra transacción hace rollback, tus datos leídos son inválidos. **Riesgo alto.**
*   **Read Committed:** Evita lecturas sucias, pero permite **lecturas no repetibles** (re-reads). Si ejecutas un SELECT dentro de una transacción, otro proceso puede modificar los datos entre tu primer y segundo SELECT, devolviendo resultados diferentes.
*   **Repeatable Read:** Garantiza que los datos leídos no cambien durante la transacción. Sin embargo, puede sufrir de **fantasmas (phantom reads)**: aparecen nuevas filas que cumplen la condición de búsqueda porque otra transacción insertó datos que no existían cuando abriste la tuya.
*   **Serializable:** El nivel más estricto. Simula la ejecución secuencial. Evita lecturas sucias, no repetibles y fantasmas. Logra esto bloqueando rangos de filas o tablas completas, lo que **reduce drásticamente la concurrencia** y puede causar cuellos de botella.

## Errores Comunes de Principiantes

1.  **Olvidar el ROLLBACK en bloques de error:** Si un script falla a mitad de camino y no se ejecuta el rollback, los datos pueden quedar en un estado inconsistente o los bloqueos no liberarse, paralizando la base de datos.
2.  **Transacciones largas innecesarias:** Mantener una transacción abierta mientras se realizan procesos lentos (llamadas a APIs externas, procesamiento de imágenes) bloquea recursos de la base de datos por más tiempo del necesario.
3.  **Confundir COMMIT con SAVEPOINT:** Un `SAVEPOINT` permite hacer rollback parcial dentro de una transacción, pero no cierra la transacción. Creer que el savepoint persiste los datos es un error grave.
4.  **Ignorar la elección del nivel de aislamiento:** Usar `SERIALIZABLE` por defecto en todo el sistema solo por seguridad, sacrificando rendimiento sin necesidad real.

## Cuándo Usar y Cuándo NO Usar

### Cuándo usar
*   **Operaciones financieras:** Transferencias entre cuentas, pagos, facturación.
*   **Integridad referencial compleja:** Cuando debes actualizar múltiples tablas relacionadas que no pueden garantizar atomicidad mediante claves foráneas solas.
*   **Cargas masivas (ETL):** Para asegurar que un lote de datos se importe completo o se descarte completo, evitando datos huérfanos.

### Cuándo NO usar
*   **Consultas de solo lectura (Reporting):** No necesitas transacciones para un `SELECT` simple en un dashboard. Usar transacciones innecesariamente consume CPU y memoria de bloqueo.
*   **Alta concurrencia con baja necesidad de consistencia inmediata:** Si tu aplicación puede tolerar eventual consistencia (como un contador de vistas), el overhead de las transacciones estrictas no vale la pena. Considera patrones asíncronos.

## Ejemplo Extendido: Transferencia Bancaria con Manejo de Errores

Imagina un sistema donde se transfiere dinero entre cuentas. Debemos garantizar que el dinero no desaparezca ni se duplique, incluso si el servidor se cae a mitad del proceso.

```sql
-- Configuración inicial para este ejemplo (PostgreSQL/MySQL)
SET AUTOCOMMIT = OFF; -- Importante: desactivar auto-commit

BEGIN TRANSACTION;

DECLARE @ErrorHappened INT = 0;

-- 1. Descontar origen
UPDATE cuentas 
SET saldo = saldo - 1000 
WHERE id_cuenta = 101 AND saldo >= 1000; -- Condición de seguridad

-- Verificar si la actualización afectó filas (significa que había saldo)
IF @@ROWCOUNT = 0 
BEGIN
    SET @ErrorHappened = 1;
END

-- 2. Si no hubo error previo, acreditar destino
IF @ErrorHappened = 0
BEGIN
    UPDATE cuentas 
    SET saldo = saldo + 1000 
    WHERE id_cuenta = 202;
    
    -- Verificar si la cuenta destino existe
    IF @@ROWCOUNT = 0
    BEGIN
        SET @ErrorHappened = 1;
    END
END

-- 3. Decisión final basada en el estado
IF @ErrorHappened = 1
BEGIN
    -- Algo falló: revertir todo. 
    -- Nota: En producción, usar TRY/CATCH (SQL Server) o EXCEPTION (PostgreSQL)
    ROLLBACK TRANSACTION;
    PRINT 'Transferencia fallida. Se revirtieron los cambios.';
END
ELSE
BEGIN
    -- Todo salió bien: confirmar permanentemente
    COMMIT TRANSACTION;
    PRINT 'Transferencia exitosa.';
END

-- Restaurar configuración
SET AUTOCOMMIT = ON;
```

En este ejemplo, la transacción actúa como un escudo. Si el servidor se apaga después del primer UPDATE pero antes del COMMIT, al reiniciar, el motor de base de datos detecta una transacción abierta no confirmada y realiza un **rollback automático** durante la recuperación, preservando la integridad de los saldos.