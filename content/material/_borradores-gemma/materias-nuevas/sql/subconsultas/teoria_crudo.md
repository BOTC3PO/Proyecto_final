# Subconsultas Avanzadas en SQL: Más allá del `WHERE IN`

## Introducción

A medida que los datos crecen en complejidad, las consultas simples de selección y filtrado resultan insuficientes. Aquí es donde las **subconsultas** (también llamadas consultas anidadas o *nested queries*) brillan. Una subconsulta es una instrucción `SELECT` incrustada dentro de otra cláusula SQL (como `SELECT`, `FROM`, `WHERE` o `HAVING`).

En el nivel avanzado, el objetivo no es solo saber que existe, sino entender **cómo el motor de base de datos las ejecuta** (correlacionadas vs. no correlacionadas) y **cuándo reemplazarlas por `JOINs` o `CTEs`** para optimizar el rendimiento. Dominar este tema es crucial para resolver problemas lógicos donde los datos necesarios para el filtro no están en la tabla principal.

## Explicación Central: Tipos y Sintaxis Real

Las subconsultas se dividen principalmente en dos categorías según su dependencia con la consulta externa:

### 1. Subconsultas No Correlacionadas (Independientes)
Se ejecutan **una sola vez** antes de que se procese la consulta externa. El resultado es estático. Son ideales para obtener un valor único o una lista fija.

*Ejemplo: Obtener empleados cuyo salario es mayor al promedio de la empresa.*

```sql
SELECT nombre, salario
FROM empleados
WHERE salario > (
    SELECT AVG(salario)
    FROM empleados
);
```
*Nota:* Aquí la subconsulta no necesita datos de la tabla `empleados` externa. El motor calcula el promedio una vez y luego filtra.

### 2. Subconsultas Correlacionadas (Dependientes)
Se ejecutan **una vez por cada fila** de la consulta externa. Tienen acceso a las columnas de la tabla externa mediante un alias. Son potentes pero peligrosas para el rendimiento en grandes volúmenes de datos.

*Ejemplo: Obtener empleados que ganan más que el promedio de su propio departamento.*

```sql
SELECT e.nombre, e.salario, e.depto_id
FROM empleados e
WHERE e.salario > (
    SELECT AVG(e2.salario)
    FROM empleados e2
    WHERE e2.depto_id = e.depto_id  -- Correlación clave
);
```
En este caso, por cada empleado (`e`), el sistema recalcula el promedio de su departamento (`e2`). Si tienes 100,000 empleados y 50 departamentos, la subconsulta se ejecuta 100,000 veces.

### Subconsultas como Tablas Derivadas
Puedes usar una subconsulta en la cláusula `FROM`. Esta debe tener un **alias obligatorio**.

```sql
SELECT depto, promedio_salario
FROM (
    SELECT depto_id as depto, AVG(salario) as promedio_salario
    FROM empleados
    GROUP BY depto_id
) AS resumen_deptos
WHERE promedio_salario > 50000;
```

## Errores Comunes de Principiantes

1.  **Olvidar el alias en subconsultas de tabla:** Intentar referenciar columnas de una subconsulta en el `FROM` sin asignarle un alias genera un error de sintaxis.
2.  **Confundir `IN` con `EXISTS`:** Usar `IN` con una subconsulta que devuelve múltiples columnas o `NULLs` puede generar resultados inesperados o errores. `EXISTS` es más eficiente para verificar la existencia de filas.
3.  **Ignorar el impacto en el rendimiento:** Usar subconsultas correlacionadas en lugar de `JOINs` en tablas grandes puede convertir una consulta de segundos en una de horas.
4.  **Asignar múltiples valores a una variable escalar:** Si la subconsulta devuelve más de una fila y la usas en `WHERE columna = (subconsulta)`, la consulta fallará. Usa `IN` o `EXISTS` en su lugar.

## Cuándo usarlo / Cuándo NO usarlo

| Situación | Recomendación | Razón |
| :--- | :--- | :--- |
| **Filtro simple con valor único** | Subconsulta no correlacionada | Legible y el optimizador suele manejarlo bien. |
| **Comparación fila por fila** | Subconsulta correlacionada | Útil cuando la lógica es compleja y difícil de expresar con `JOIN`. |
| **Tablas grandes (> 100k filas)** | **Evitar** subconsultas correlacionadas | El costo de ejecución lineal es prohibitivo. |
| **Necesidad de reutilizar lógica** | **CTE (Common Table Expression)** | Mejora la legibilidad y permite al optimizador reescribir la consulta. |
| **Unión de datos** | **JOIN** | Generalmente más eficiente que `EXISTS` o `IN` si hay índices adecuados. |

**Trade-off real:** La legibilidad vs. el rendimiento. Las subconsultas correlacionadas son intuitivas para modelar "para cada X, verifica Y", pero los `JOINs` modernos con índices suelen ser mucho más rápidos. Siempre verifica el plan de ejecución (`EXPLAIN`).

## Ejemplo Extendido en Contexto: "Clientes Inactivos Recientes"

**Caso de uso:** Una empresa de SaaS quiere identificar clientes que cancelaron su suscripción en los últimos 3 meses, pero que tenían un historial de facturación alto (mayor al promedio de todos los clientes) antes de cancelar. Esto ayuda a analizar si la pérdida de clientes de alto valor es un problema sistémico.

**Enfoque con Subconsulta Correlacionada:**

```sql
SELECT c.cliente_id, c.nombre, c.fecha_alta
FROM clientes c
WHERE c.cliente_id IN (
    SELECT s.cliente_id
    FROM suscripciones s
    WHERE s.fecha_baja BETWEEN DATE_SUB(CURDATE(), INTERVAL 3 MONTH) AND CURDATE()
)
AND c.cliente_id IN (
    SELECT cliente_id
    FROM facturas
    WHERE fecha BETWEEN '2022-01-01' AND '2023-12-31'
    GROUP BY cliente_id
    HAVING SUM(monto_total) > (
        SELECT AVG(total_anual)
        FROM (
            SELECT cliente_id, SUM(monto_total) as total_anual
            FROM facturas
            GROUP BY cliente_id
        ) AS promedios
    )
);
```

**Análisis:**
Este ejemplo muestra una subconsulta anidada dentro de otra (`HAVING` dentro de `IN`). Es funcional, pero difícil de mantener.

**Alternativa Avanzada Recomendada (Usando CTEs):**

```sql
WITH ClientesCancelados AS (
    SELECT cliente_id
    FROM suscripciones
    WHERE fecha_baja BETWEEN DATE_SUB(CURDATE(), INTERVAL 3 MONTH) AND CURDATE()
),
PromedioGasto AS (
    SELECT AVG(total_anual) as valor_promedio
    FROM (
        SELECT cliente_id, SUM(monto_total) as total_anual
        FROM facturas
        GROUP BY cliente_id
    ) AS gastos
),
ClientesValiosos AS (
    SELECT f.cliente_id
    FROM facturas f
    GROUP BY f.cliente_id
    HAVING SUM(f.monto_total) > (SELECT valor_promedio FROM PromedioGasto)
)
SELECT c.cliente_id, c.nombre
FROM clientes c
JOIN ClientesCancelados cc ON c.cliente_id = cc.cliente_id
JOIN ClientesValiosos cv ON c.cliente_id = cv.cliente_id;
```

Esta versión es más clara, modular y permite al optimizador de SQL manejar cada paso de forma más eficiente, separando la lógica de negocio en bloques comprensibles.