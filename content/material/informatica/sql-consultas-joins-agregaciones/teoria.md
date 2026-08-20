# Informática — SQL consultas joins agregaciones (teoría)

> Tema del MAPA: `informatica/sql-consultas-joins-agregaciones`. Depende de sql consultas basicas, sql agregaciones y sql joins (ver `../dependencias.md`).

## Tipo de teoría

**Presentación** — Explicación de cómo combinar datos de múltiples tablas y resumirlos usando SQL.

---

## 1. SELECT, FROM y aliases

La consulta `SELECT` es la base para recuperar información de una o más tablas. Siempre empieza con `SELECT`, seguido de las columnas que se quieren mostrar. Por ejemplo:  
```sql
SELECT nombre, edad FROM usuarios;
```
Para simplificar nombres largos o evitar repeticiones, se usan **aliases** con la palabra clave `AS`. Esto es útil cuando hay columnas con el mismo nombre en distintas tablas o cuando se aplican funciones de agregación. Ejemplo:  
```sql
SELECT u.nombre AS usuario, COUNT(*) AS total FROM usuarios u;
```

## 2. JOINs para combinar tablas

Los **JOINs** relacionan filas entre dos o más tablas basándose en una columna coincidente (como un ID). El tipo de JOIN define qué datos se incluyen:  
- `INNER JOIN`: Muestra solo las filas que tienen coincidencias en ambas tablas.  
- `LEFT JOIN`: Incluye todas las filas de la tabla izquierda, incluso si no hay coincidencias en la derecha.  
- `RIGHT JOIN`: Lo opuesto al LEFT JOIN (prioriza la tabla derecha).  

Ejemplo práctico:  
```sql
SELECT u.nombre, p.producto 
FROM usuarios u 
INNER JOIN pedidos p ON u.id = p.usuario_id;
```
Esta consulta combina datos de usuarios y sus pedidos usando `id` como clave.

## 3. Funciones de agregación

Cuando se necesita resumir datos, las **funciones de agregación** son esenciales:  
- `COUNT(*)`: Cuenta el número total de filas en un conjunto.  
- `SUM(columna)`: Suma los valores numéricos de una columna específica.  
- `AVG(columna)`: Calcula el promedio de una columna.  

Estas funciones suelen usarse junto con `GROUP BY` para agrupar resultados por categorías. Ejemplo:  
```sql
SELECT categoria, COUNT(*) AS cantidad 
FROM productos 
GROUP BY categoria;
```
Este código muestra cuántos productos hay en cada categoría.

## 4. WHERE y ORDER BY

La cláusula `WHERE` filtra los datos antes de aplicar agregaciones o joins. Por ejemplo:  
```sql
SELECT * FROM empleados WHERE salario > 5000;
```
Para ordenar resultados, se usa `ORDER BY`, que puede ser ascendente (`ASC`) o descendente (`DESC`). Ejemplo:  
```sql
SELECT nombre, salario 
FROM empleados 
WHERE departamento = 'ventas' 
ORDER BY salario DESC;
```

## 5. Orden lógico de las cláusulas

El SQL se ejecuta siguiendo un orden específico, aunque el código puede escribirse en otro formato:  
1. `SELECT`: Define qué columnas mostrar.  
2. `FROM`: Especifica la tabla principal.  
3. `JOIN`: Relaciona con otras tablas (si aplica).  
4. `WHERE`: Filtra los datos antes de agruparlos.  
5. `GROUP BY`: Agrupa filas para aplicar funciones de agregación.  
6. `ORDER BY`: Organiza el resultado final.  

Este orden es clave para evitar errores en consultas complejas.

## N. Conexión con lo que sigue

Este tema conecta con sql subconsultas (para usar resultados de una consulta dentro de otra) y con sql joins avanzados (para explorar tipos más complejos como FULL JOIN o SELF JOIN).