# Diagnóstico por Casos en SQL: Patrón de Diseño Avanzado

## Introducción

En el desarrollo de bases de datos relacionales, el "diagnóstico por casos" es un patrón de modelado y consulta utilizado para resolver problemas de clasificación o detección de anomalías basándose en reglas complejas y múltiples condiciones. A diferencia de un filtro simple, este patrón implica evaluar el estado actual de un registro contra un conjunto de reglas jerárquicas o excluyentes para determinar su categoría, estado de salud o nivel de riesgo.

Es fundamental entender que SQL no es un lenguaje de programación imperativo tradicional; no ejecuta bloques `if-else` línea por línea en tiempo de ejecución de la misma manera que Python o Java. Por lo tanto, implementar un sistema de diagnóstico requiere traducir la lógica de negocio a expresiones booleanas y funciones de agregación que operen sobre conjuntos de datos.

## Explicación Central: Implementación con `CASE` y Agregaciones

El núcleo de este patrón reside en el uso de la expresión `CASE` (estándar SQL) combinada con agregaciones (`COUNT`, `SUM`, `MAX`) y filtros (`HAVING`). Para realizar un diagnóstico preciso, a menudo necesitamos mirar no solo la fila actual, sino el contexto histórico o la relación entre múltiples registros asociados a una entidad principal.

### Sintaxis Clave

1.  **`CASE WHEN ... THEN ... ELSE ... END`**: Permite crear lógica condicional dentro del `SELECT`.
2.  **`GROUP BY` y `HAVING`**: Cruciales para aplicar reglas que dependen de la cantidad de ocurrencias (ej. "Si tiene más de 3 errores consecutivos").
3.  **`LAG()` / `LEAD()`**: Funciones de ventana para comparar el valor actual con el anterior, esencial para detectar patrones temporales.

### Ejemplo de Lógica de Diagnóstico

Supongamos que queremos diagnosticar el estado de un servidor basado en sus logs de error.

```sql
SELECT 
    server_id,
    CASE 
        -- Regla 1: Si hay más de 5 errores críticos en la última hora
        WHEN COUNT(CASE WHEN severity = 'CRITICAL' AND timestamp > NOW() - INTERVAL '1 hour' THEN 1 END) > 5 
            THEN 'FALLO INMINENTE'
        
        -- Regla 2: Si hay warnings recurrentes pero sin críticos
        WHEN COUNT(CASE WHEN severity = 'WARNING' AND timestamp > NOW() - INTERVAL '1 hour' THEN 1 END) > 10 
            THEN 'DEGRADADO'
        
        ELSE 'OPERATIVO'
    END AS diagnostic_status
FROM server_logs
GROUP BY server_id;
```

Aquí, la sintaxis no es arbitraria; depende estrictamente de cómo la base de datos maneja las fechas y los tipos de dato. El uso de `COUNT(CASE ...)` es una técnica avanzada para contar condicionalmente dentro de un grupo, evitando subconsultas correlacionadas costosas.

## Errores Comunes

1.  **Confundir `WHERE` con `HAVING`**: Un error frecuente es intentar filtrar por el resultado del `CASE` en la cláusula `WHERE`. Recuerda: `WHERE` filtra filas antes de la agrupación; `HAVING` filtra grupos después. Si tu diagnóstico depende del conteo total de errores, debes usar `HAVING`.
2.  **Ignorar el orden temporal con `LAG()`**: Muchas veces, el diagnóstico depende de la secuencia (ej. "error seguido de otro error"). Usar `LAG()` sin especificar correctamente `ORDER BY` dentro de la ventana de la función puede llevar a comparaciones contra filas irrelevantes, distorsionando el diagnóstico.
3.  **`NULL` en condiciones booleanas**: En SQL, `NULL != 'OK'` no es verdadero, es `UNKNOWN`. Si tu campo de estado puede ser nulo, debes usar `IS NULL` o `COALESCE(status, 'UNKNOWN')` para evitar que la lógica `CASE` pase por alto casos críticos silenciosamente.

## Cuándo usarlo / Cuándo NO usarlo

**Úsalo cuando:**
*   La lógica de diagnóstico es relacional y depende de agregaciones sobre grandes conjuntos de datos históricos.
*   Necesitas mantener la integridad transaccional y la consistencia de los datos directamente en la base de datos.
*   El volumen de datos permite la optimización de índices en las columnas de filtro.

**No lo uses cuando:**
*   La lógica es extremadamente compleja (cientos de reglas anidadas). SQL se vuelve ilegible y difícil de mantener. En estos casos, es mejor extraer los datos y procesarlos en una capa de aplicación (Python/Java) o usar un motor de reglas dedicado.
*   Necesitas ejecutar el diagnóstico en tiempo real sobre flujos de datos masivos con latencia sub-milisegundo. Las agregaciones complejas (`GROUP BY` con ventanas) son costosas en CPU. Considera herramientas de stream processing como Apache Flink o Kafka Streams.

## Ejemplo Extendido en Contexto

**Caso de Uso:** Sistema de Monitoreo de Salud de Clientes Bancarios.

**Objetivo:** Determinar si un cliente está en "Riesgo de Morosidad" basado en su comportamiento de pago de los últimos 6 meses.

**Reglas de Negocio:**
1.  **Riesgo Alto:** Si ha tenido 2 o más pagos atrasados en los últimos 3 meses.
2.  **Riesgo Medio:** Si ha tenido al menos 1 pago atrasado en los últimos 6 meses, pero no cumple la condición de Riesgo Alto.
3.  **Buen Pagador:** Si no ha tenido atrasos en el último año.

**Implementación SQL:**

```sql
WITH payment_history AS (
    -- Capa 1: Normalización de fechas y estado
    SELECT 
        client_id,
        payment_date,
        CASE 
            WHEN payment_date < due_date THEN 'ATRASADO'
            ELSE 'AL_DIA'
        END AS status,
        -- Usamos LAG para ver el estado anterior y detectar patrones consecutivos
        LAG(status) OVER (PARTITION BY client_id ORDER BY payment_date) AS prev_status
    FROM payments
    WHERE payment_date >= CURRENT_DATE - INTERVAL '1 year'
)
SELECT 
    client_id,
    -- Diagnóstico final basado en conteos condicionales
    CASE 
        WHEN COUNT(CASE WHEN status = 'ATRASADO' AND payment_date >= CURRENT_DATE - INTERVAL '3 months' THEN 1 END) >= 2 
            THEN 'RIESGO_ALTO'
        WHEN COUNT(CASE WHEN status = 'ATRASADO' THEN 1 END) >= 1 
            THEN 'RIESGO_MEDIO'
        ELSE 'BUEN_PAGADOR'
    END AS risk_diagnosis
FROM payment_history
GROUP BY client_id
ORDER BY risk_diagnosis;
```

Este ejemplo demuestra cómo estructurar el diagnóstico en capas: primero normalizamos los datos (`payment_history`), luego aplicamos la lógica condicional sobre los agregados. El uso de `WITH` (CTE) mejora la legibilidad y permite depurar cada paso del diagnóstico por separado.