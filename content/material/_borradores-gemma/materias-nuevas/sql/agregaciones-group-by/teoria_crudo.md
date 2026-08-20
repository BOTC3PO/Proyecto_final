# Agregaciones y GROUP BY: De lo individual a lo resumido

## Introducción
En el mundo de los datos, rara vez nos interesa el detalle atómico de cada fila; lo que usualmente buscamos son patrones, totales y promedios. Las funciones de agregación y la cláusula `GROUP BY` son las herramientas fundamentales para transformar datos granulares en información estratégica. Mientras que una consulta estándar devuelve una fila por cada registro coincidente, una consulta con agregación agrupa esos registros en un solo resultado por cada categoría identificada. Esto es esencial para generar reportes de ventas, conteos de usuarios activos o promedios de rendimiento.

## Explicación central y sintaxis

El corazón de este concepto es la cláusula `GROUP BY`. Cuando la incluyes en tu consulta, le indicas a la base de datos que "empaque" las filas con valores idénticos en las columnas especificadas en un solo grupo. Sobre estos grupos es donde se aplican las funciones de agregación.

### Funciones de Agregación Comunes
Estas funciones toman un conjunto de valores (de una columna) y devuelven un único valor calculado:

*   `COUNT()`: Cuenta el número de filas. Útil para saber "cuántos" hay.
*   `SUM()`: Suma los valores numéricos. Ideal para "total de ventas".
*   `AVG()`: Calcula el promedio aritmético.
*   `MIN()` / `MAX()`: Devuelve el valor más pequeño o más grande del grupo.

### Sintaxis y Reglas de Oro
La estructura básica sigue este orden lógico:

```sql
SELECT 
    columna_grupo,
    funcion_agregacion(columna_dato) AS alias
FROM 
    tabla
GROUP BY 
    columna_grupo;
```

**Regla fundamental:** Cualquier columna que aparezca en el `SELECT` y **no** esté envuelta en una función de agregación, **debe** aparecer obligatoriamente en el `GROUP BY`. Si no lo haces, la base de datos no sabrá qué valor mostrar para ese grupo y lanzará un error (o, en configuraciones antiguas de MySQL, un resultado impredecible).

### Ejemplo Real
Supongamos una tabla `ventas` con columnas `producto`, `cantidad` y `precio_unitario`. Queremos saber el ingreso total por producto.

```sql
SELECT 
    producto,
    SUM(cantidad * precio_unitario) AS ingreso_total
FROM 
    ventas
GROUP BY 
    producto;
```

Aquí, la base de datos agrupa todas las filas donde `producto` es "Laptop", calcula la suma del ingreso para ese grupo, y luego hace lo mismo para "Mouse", etc.

## Errores comunes de quien recién aprende

1.  **Olvidar el GROUP BY en columnas no agregadas:** Es el error clásico. Intentar hacer `SELECT producto, SUM(cantidad) FROM ventas;` sin el `GROUP BY producto` fallará en la mayoría de los motores SQL modernos (como PostgreSQL o SQL Server).
2.  **Confundir COUNT(*) con COUNT(columa):** `COUNT(*)` cuenta todas las filas del grupo, incluyendo las que tienen `NULL`. `COUNT(columa)` ignora los `NULL`. Si tu objetivo es contar registros válidos, asegúrate de no filtrar accidentalmente `NULL` con un `WHERE` previo si no es tu intención.
3.  **Aplicar agregaciones a columnas no numéricas sin sentido:** Usar `AVG(nombre)` o `SUM(email)` no tiene lógica comercial ni técnica. Estas funciones solo operan sobre tipos numéricos (o fechas en algunos contextos de diferencia).

## Cuándo usarlo / Cuándo NO usarlo

*   **Usa GROUP BY cuando:** Necesitas resumir datos a nivel de categoría, región, mes o cualquier dimensión. Es perfecto para dashboards y KPIs.
*   **NO uses GROUP BY cuando:** Solo necesitas filtrar filas individuales (usa `WHERE`), o cuando necesitas calcular valores basados en el resultado de una agregación (aquí entra la cláusula `HAVING`, que veremos en el siguiente nivel).
*   **Trade-offs de rendimiento:** Las agregaciones sobre tablas masivas sin índices adecuados pueden ser costosas en CPU y memoria. Agrupar por columnas con alta cardinalidad (muchos valores únicos, como UUIDs) puede generar grupos tan pequeños que el overhead de la agrupación no vale la pena comparado con una simple iteración en la aplicación.

## Ejemplo extendido en contexto

**Caso de uso:** Un analista de e-commerce necesita generar un reporte mensual de rendimiento. No le interesan las ventas individuales, sino la tendencia mensual.

```sql
SELECT 
    DATE_FORMAT(fecha_venta, '%Y-%m') AS mes,
    COUNT(*) AS total_pedidos,
    SUM(total_pedido) AS ingresos_brutos,
    AVG(total_pedido) AS ticket_promedio
FROM 
    transacciones
WHERE 
    fecha_venta >= '2023-01-01'
GROUP BY 
    DATE_FORMAT(fecha_venta, '%Y-%m')
ORDER BY 
    mes DESC;
```

**Análisis del ejemplo:**
1.  **Agrupación temporal:** Usamos `DATE_FORMAT` (o `EXTRACT` en PostgreSQL) para extraer el año y mes, creando grupos temporales.
2.  **Múltiples métricas:** Calculamos tres KPIs distintos en la misma consulta.
3.  **Filtrado previo:** El `WHERE` reduce el volumen de datos antes de la costosa operación de agrupación, optimizando el rendimiento.
4.  **Ordenamiento:** El `ORDER BY` asegura que el reporte se presente cronológicamente, facilitando la lectura de la tendencia.

Este patrón es la base de casi cualquier informe de BI (Business Intelligence) que se precie de serlo.