### 1 — Conteo de registros por categoría
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["count", "group-by"]
enunciado:
  uno_de([
    "Escribe la consulta para contar cuántos productos hay en cada `categoria_id` de la tabla `productos`.",
    "Completa la consulta para obtener el total de artículos por `departamento` en la tabla `inventario`."
  ])
tipo: completar
respuesta: "COUNT(*)"
respuestas_validas:
  - "COUNT(*)"
  - "COUNT(productos.id)"
  - "COUNT(inventario.id)"
pasos:
  - "Identificar la función de agregación para contar filas."
  - "Recordar que COUNT(*) cuenta todas las filas incluidas en el grupo, incluyendo NULLs."
  - "Sintaxis correcta: SELECT categoria_id, COUNT(*) FROM productos GROUP BY categoria_id;"
explicacion:
  COUNT(*) es la forma estándar y más eficiente de contar el número de filas en cada grupo. COUNT(columna) ignoraría NULLs, pero para contar registros totales del grupo, COUNT(*) es la respuesta precisa.
```

### 2 — Suma condicional con CASE
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["sum", "case", "conditional"]
enunciado: "Calcula la suma total de ventas solo para los productos de la categoría 'Electrónica' agrupados por vendedor."
tipo: completar
respuesta: "SUM(CASE WHEN categoria = 'Electrónica' THEN monto END)"
respuestas_validas:
  - "SUM(CASE WHEN categoria = 'Electrónica' THEN monto END)"
  - "SUM(CASE WHEN categoria='Electrónica' THEN monto END)"
  - "SUM(CASE WHEN categoria = 'Electrónica' THEN venta ELSE 0 END)"
pasos:
  - "Usar CASE dentro de la función SUM para filtrar filas antes de agregar."
  - "Si la condición no se cumple, el CASE devuelve NULL, que SUM ignora."
  - "Sintaxis: SELECT vendedor, SUM(CASE WHEN categoria = 'Electrónica' THEN monto END) FROM ventas GROUP BY vendedor;"
explicacion:
  SUM ignora valores NULL. Al usar CASE sin ELSE, las filas que no cumplen la condición devuelven NULL, excluyéndolas efectivamente de la suma, logrando una suma condicional.
```

### 3 — Media aritmética con NULLs
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["avg", "nulls"]
enunciado: "¿Cuál es el comportamiento de AVG(salario) si la columna salario tiene valores NULL en el grupo?"
tipo: vf
respuesta: verdadero
pasos:
  - "La función AVG ignora automáticamente los valores NULL."
  - "Calcula la suma de los no-NULLs dividida por el conteo de los no-NULLs."
  - "No trata NULL como cero."
explicacion:
  AVG(columna) excluye implícitamente los valores NULL del cálculo. Si todas las filas fueran NULL, el resultado sería NULL, no 0.
```

### 4 — Agrupación por rango de fechas
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["date-trunc", "group-by"]
enunciado: "Completa la consulta para agrupar ventas por mes usando la función estándar."
tipo: completar
respuesta: "DATE_TRUNC('month', fecha_venta)"
respuestas_validas:
  - "DATE_TRUNC('month', fecha_venta)"
  - "DATE_TRUNC(month, fecha_venta)"
  - "TRUNC(fecha_venta, 'MM')"
pasos:
  - "Usar DATE_TRUNC para redondear fechas a la unidad especificada."
  - "La sintaxis varía ligeramente por motor (PostgreSQL vs Oracle), pero DATE_TRUNC es estándar en muchos contextos modernos o TRUNC en Oracle."
  - "Sintaxis ejemplo: SELECT DATE_TRUNC('month', fecha_venta) as mes, SUM(total) FROM ventas GROUP BY 1;"
explicacion:
  DATE_TRUNC('month', fecha) devuelve el primer día del mes de la fecha dada, permitiendo agrupar todas las ventas de ese mes juntas independientemente del día exacto.
```

### 5 — Filtro post-agregación
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["having", "where"]
enunciado: "Escribe la cláusula para seleccionar solo los grupos de clientes donde la suma de pedidos supera 1000."
tipo: completar
respuesta: "HAVING SUM(pedidos) > 1000"
respuestas_validas:
  - "HAVING SUM(pedidos) > 1000"
  - "HAVING SUM(pedidos)>1000"
pasos:
  - "WHERE filtra filas antes del GROUP BY."
  - "HAVING filtra grupos después del GROUP BY y las agregaciones."
  - "Sintaxis: SELECT cliente_id, SUM(pedidos) FROM ventas GROUP BY cliente_id HAVING SUM(pedidos) > 1000;"
explicacion:
  HAVING es obligatorio cuando se filtra sobre el resultado de una función de agregación (como SUM). WHERE no puede usarse con funciones de agregación.
```

### 6 — Máximo con GROUP BY
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["max", "group-by"]
enunciado: "Selecciona el ID del departamento y el salario más alto de cada departamento."
tipo: completar
respuesta: "MAX(salario)"
respuestas_validas:
  - "MAX(salario)"
  - "MAX(empleado.salario)"
pasos:
  - "Usar MAX() para obtener el valor superior en cada grupo."
  - "La columna no agregada (departamento_id) debe estar en el GROUP BY."
  - "Sintaxis: SELECT dept_id, MAX(salario) FROM empleados GROUP BY dept_id;"
explicacion:
  MAX() devuelve el valor más alto numérico o lexicográfico en cada grupo definido por el GROUP BY.
```

### 7 — Mínimo con GROUP BY
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["min", "group-by"]
enunciado: "Obtén la fecha de la primera venta por cada producto."
tipo: completar
respuesta: "MIN(fecha_venta)"
respuestas_validas:
  - "MIN(fecha_venta)"
  - "MIN(ventas.fecha)"
pasos:
  - "Usar MIN() para obtener el valor más bajo (fecha más antigua) en cada grupo."
  - "Asumiendo que la tabla se llama ventas y la columna fecha_venta."
  - "Sintaxis: SELECT producto_id, MIN(fecha_venta) FROM ventas GROUP BY producto_id;"
explicacion:
  MIN() funciona con fechas devolviendo la fecha más temprana dentro de cada grupo de producto.
```

### 8 — Distinto count
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["count", "distinct"]
enunciado: "Cuenta cuántos clientes únicos han comprado cada producto."
tipo: completar
respuesta: "COUNT(DISTINCT cliente_id)"
respuestas_validas:
  - "COUNT(DISTINCT cliente_id)"
  - "COUNT(DISTINCT clientes.id)"
  - "COUNT(DISTINCT cliente_id)"
pasos:
  - "Usar COUNT con DISTINCT para eliminar duplicados antes de contar."
  - "Es más eficiente que COUNT(*) + GROUP BY en la subquery."
  - "Sintaxis: SELECT producto_id, COUNT(DISTINCT cliente_id) FROM ventas GROUP BY producto_id;"
explicacion:
  COUNT(DISTINCT columna) elimina los valores duplicados de la columna especificada antes de aplicar la cuenta, dando el número de elementos únicos por grupo.
```

### 9 — Ordenamiento por agregación
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["order-by", "alias"]
enunciado: "Ordena los resultados por la suma total de ventas en orden descendente."
tipo: completar
respuesta: "ORDER BY SUM(ventas) DESC"
respuestas_validas:
  - "ORDER BY SUM(ventas) DESC"
  - "ORDER BY 2 DESC"
  - "ORDER BY total_ventas DESC"
pasos:
  - "ORDER BY puede referenciar la posición de la columna en el SELECT o la expresión completa."
  - "DESC indica orden descendente (mayor a menor)."
  - "Sintaxis: SELECT vendedor, SUM(ventas) FROM ventas GROUP BY vendedor ORDER BY SUM(ventas) DESC;"
explicacion:
  El ordenamiento se aplica después de las agregaciones. Usar la posición (2) es válido si el motor lo permite, pero usar la expresión completa es más explícito y portátil.
```

### 10 — Agrupación múltiple
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["group-by", "multiple"]
enunciado: "Agrupa ventas por año y mes de la fecha de venta."
tipo: completar
respuesta: "GROUP BY YEAR(fecha), MONTH(fecha)"
respuestas_validas:
  - "GROUP BY YEAR(fecha), MONTH(fecha)"
  - "GROUP BY EXTRACT(YEAR FROM fecha), EXTRACT(MONTH FROM fecha)"
  - "GROUP BY DATE_FORMAT(fecha, '%Y-%m')"
pasos:
  - "Especificar múltiples columnas en GROUP BY separadas por comas."
  - "Primero se agrupa por la primera columna, y dentro de ella por la segunda."
  - "Sintaxis: SELECT YEAR(fecha) as anio, MONTH(fecha) as mes, SUM(total) FROM ventas GROUP BY 1, 2;"
explicacion:
  GROUP BY a, b crea grupos únicos para cada combinación de (a, b). El orden de las columnas en GROUP BY afecta la jerarquía visual pero no el conjunto de resultados agregados.
```

### 11 — Suma de columnas calculadas
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["sum", "arithmetic"]
enunciado: "Calcula la suma del beneficio (precio - costo) agrupado por categoría."
tipo: completar
respuesta: "SUM(precio - costo)"
respuestas_validas:
  - "SUM(precio - costo)"
  - "SUM(precio-costo)"
  - "SUM(precio - costo as beneficio)"
pasos:
  - "Las funciones de agregación pueden envolver expresiones aritméticas."
  - "La aritmética se evalúa fila por fila antes de la agregación."
  - "Sintaxis: SELECT categoria, SUM(precio - costo) FROM productos GROUP BY categoria;"
explicacion:
  SUM puede tomar una expresión compleja. Se calcula (precio - costo) para cada fila y luego se suman todos los resultados dentro del grupo.
```

### 12 — Conteo de columnas específicas
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["count", "column"]
enunciado: "Cuenta cuántos valores NO NULL hay en la columna 'email' por usuario."
tipo: completar
respuesta: "COUNT(email)"
respuestas_validas:
  - "COUNT(email)"
  - "COUNT(usuarios.email)"
pasos:
  - "COUNT(columna) ignora NULLs."
  - "COUNT(*) cuenta filas totales (incluyendo NULLs en la columna)."
  - "Para contar no-nulls, usa COUNT(columna)."
  - "Sintaxis: SELECT usuario_id, COUNT(email) FROM contactos GROUP BY usuario_id;"
explicacion:
  COUNT(email) solo incrementa el contador si email no es NULL. Esto es útil para saber cuántos contactos válidos tiene cada usuario.
```

### 13 — Agrupación con NULLs en clave
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["group-by", "nulls"]
enunciado: "¿Cómo se agrupan las filas con NULL en la columna de agrupación?"
tipo: vf
respuesta: verdadero
pasos:
  - "Los valores NULL se consideran iguales entre sí en GROUP BY."
  - "Todas las filas con NULL en la columna de agrupación caen en un único grupo."
  - "No se crean múltiples grupos para NULLs."
explicacion:
  En SQL, NULL no es igual a NULL en comparaciones normales (=), pero en GROUP BY, todos los NULLs se agrupan en una sola categoría llamada NULL.
```

### 14 — Subconsulta en SELECT con agregación
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["subquery", "scalar"]
enunciado: "Selecciona el nombre del empleado y el promedio de salarios de toda la empresa."
tipo: completar
respuesta: "(SELECT AVG(salario) FROM empleados)"
respuestas_validas:
  - "(SELECT AVG(salario) FROM empleados)"
  - "(SELECT AVG(salario) FROM tabla_empleados)"
pasos:
  - "Usar una subconsulta escalar (que devuelve una fila y una columna) en la lista SELECT."
  - "La subconsulta no debe tener GROUP BY si se quiere el promedio global."
  - "Sintaxis: SELECT nombre, (SELECT AVG(salario) FROM empleados) as promedio_global FROM empleados;"
explicacion:
  Una subconsulta en SELECT debe devolver exactamente un valor. Se usa para comparar cada fila del resultado principal contra un valor global calculado.
```

### 15 -- HAVING con múltiples condiciones
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["having", "and"]
enunciado: "Filtra grupos donde la suma de ventas sea > 100 Y el conteo de transacciones sea < 10."
tipo: completar
respuesta: "HAVING SUM(ventas) > 100 AND COUNT(*) < 10"
respuestas_validas:
  - "HAVING SUM(ventas) > 100 AND COUNT(*) < 10"
  - "HAVING SUM(ventas)>100 AND COUNT(*)<10"
pasos:
  - "Combinar condiciones en HAVING con AND/OR."
  - "Cada condición puede usar funciones de agregación distintas."
  - "Sintaxis: SELECT vendedor, SUM(ventas), COUNT(*) FROM ventas GROUP BY vendedor HAVING SUM(ventas) > 100 AND COUNT(*) < 10;"
explicacion:
  HAVING permite filtrar grupos basándose en múltiples criterios agregados simultáneamente usando lógica booleana estándar.
```

### 16 — Agrupación por expresión aritmética
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["group-by", "expression"]
enunciado: "Agrupa productos por el rango de precio (precio / 10) como entero."
tipo: completar
respuesta: "GROUP BY FLOOR(precio / 10)"
respuestas_validas:
  - "GROUP BY FLOOR(precio / 10)"
  - "GROUP BY CAST(precio / 10 AS INT)"
  - "GROUP BY TRUNC(precio / 10)"
pasos:
  - "Puedes usar funciones escalares en GROUP BY."
  - "FLOOR redondea hacia abajo al entero más cercano."
  - "Sintaxis: SELECT FLOOR(precio / 10) as rango, COUNT(*) FROM productos GROUP BY 1;"
explicacion:
  GROUP BY puede usar cualquier expresión escalar válida. Esto permite agrupar por rangos calculados dinámicamente sin necesidad de columnas predefinidas.
```

### 17 — Suma acumulativa (Window Function) vs Group By
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["window-functions", "vs-group-by"]
enunciado: "¿Qué función de ventana permite sumar ventas acumulativamente sin reducir el número de filas?"
tipo: completar
respuesta: "SUM(ventas) OVER (ORDER BY fecha)"
respuestas_validas:
  - "SUM(ventas) OVER (ORDER BY fecha)"
  - "SUM(ventas) OVER (ORDER BY fecha ASC)"
pasos:
  - "Las funciones de ventana (OVER) no reducen filas como GROUP BY."
  - "Ordenan el particionamiento y el orden dentro de la ventana."
  - "Sintaxis: SELECT fecha, ventas, SUM(ventas) OVER (ORDER BY fecha) FROM ventas;"
explicacion:
  Para sumas acumulativas sin perder granularidad de filas, se usan funciones de ventana con OVER (ORDER BY ...), no GROUP BY.
```

### 18 — Agrupación por día de la semana
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["date", "weekday"]
enunciado: "Agrupa ventas por el nombre del día de la semana."
tipo: completar
respuesta: "TO_CHAR(fecha, 'Day')"
respuestas_validas:
  - "TO_CHAR(fecha, 'Day')"
  - "TO_CHAR(fecha, 'DAY')"
  - "DAYNAME(fecha)"
  - "DATENAME(weekday, fecha)"
pasos:
  - "Usar funciones de formato de fecha para extraer el nombre del día."
  - "La sintaxis depende del motor (PostgreSQL vs SQL Server vs MySQL)."
  - "Sintaxis ejemplo: SELECT TO_CHAR(fecha, 'Day') as dia, COUNT(*) FROM ventas GROUP BY 1;"
explicacion:
  TO_CHAR o funciones equivalentes convierten la fecha en texto legible, permitiendo agrupar por el día de la semana en lugar del número o fecha completa.
```

### 19 — Conteo de grupos distintos
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["count", "distinct", "subquery"]
enunciado: "Cuenta cuántas categorías distintas tienen ventas registradas."
tipo: completar
respuesta: "SELECT COUNT(DISTINCT categoria) FROM ventas"
respuestas_validas:
  - "SELECT COUNT(DISTINCT categoria) FROM ventas"
  - "SELECT COUNT(categoria) FROM (SELECT DISTINCT categoria FROM ventas) t"
pasos:
  - "COUNT(DISTINCT columna) en la tabla principal cuenta los valores únicos globales."
  - "Es equivalente a contar filas de una subquery con DISTINCT."
  - "Sintaxis: SELECT COUNT(DISTINCT categoria) FROM ventas;"
explicacion:
  COUNT(DISTINCT columna) sin GROUP BY devuelve un solo número: la cantidad de valores únicos en esa columna en toda la tabla.
```

### 20 — Agrupación con COALESCE
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["coalesce", "null"]
enunciado: "Agrega las filas con NULL en 'categoria' bajo el grupo 'Sin Categoría'."
tipo: completar
respuesta: "GROUP BY COALESCE(categoria, 'Sin Categoría')"
respuestas_validas:
  - "GROUP BY COALESCE(categoria, 'Sin Categoría')"
  - "GROUP BY IFNULL(categoria, 'Sin Categoría')"
  - "GROUP BY NVL(categoria, 'Sin Categoría')"
pasos:
  - "COALESCE devuelve el primer argumento no nulo."
  - "Usarlo en GROUP BY reemplaza NULLs por un valor fijo para la agrupación."
  - "Sintaxis: SELECT COALESCE(categoria, 'Sin Categoría') as cat, SUM(ventas) FROM ventas GROUP BY 1;"
explicacion:
  COALESCE permite tratar NULLs como un valor regular en la lógica de agrupación, evitando que formen un grupo separado llamado NULL.
```

### 21 — Media con precisión decimal
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["avg", "cast"]
enunciado: "Calcula el promedio de 'monto' con 2 decimales de precisión."
tipo: completar
respuesta: "AVG(monto)::NUMERIC(10,2)"
respuestas_validas:
  - "AVG(monto)::NUMERIC(10,2)"
  - "CAST(AVG(monto) AS DECIMAL(10,2))"
  - "ROUND(AVG(monto), 2)"
pasos:
  - "AVG devuelve un tipo decimal/float por defecto."
  - "Se puede usar CAST o ROUND para formatear el resultado."
  - "Sintaxis: SELECT vendedor, ROUND(AVG(monto), 2) FROM ventas GROUP BY vendedor;"
explicacion:
  ROUND(AVG(monto), 2) asegura que el resultado tenga exactamente dos dígitos decimales, útil para reportes financieros.
```

### 22 — Agrupación por rango de edades
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["age", "range"]
enunciado: "Agrupa usuarios por grupo de edad (0-19, 20-39, etc.) calculado desde 'fecha_nacimiento'."
tipo: completar
respuesta: "FLOOR((CURRENT_DATE - fecha_nacimiento) / 365)"
respuestas_validas:
  - "FLOOR((CURRENT_DATE - fecha_nacimiento) / 365)"
  - "TIMESTAMPDIFF(YEAR, fecha_nacimiento, CURRENT_DATE)"
  - "DATEDIFF(CURRENT_DATE, fecha_nacimiento) / 365"
pasos:
  - "Calcular la edad en años."
  - "Usar FLOOR para obtener el grupo de edad entero."
  - "Sintaxis: SELECT FLOOR((CURRENT_DATE - fecha_nacimiento) / 365) as edad, COUNT(*) FROM usuarios GROUP BY 1;"
explicacion:
  La edad se calcula dividiendo la diferencia de días entre 365. FLOOR asegura que un usuario de 19.9 años caiga en el grupo 19.
```

### 23 -- HAVING con COUNT específico
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["having", "count"]
enunciado: "Selecciona los productos que han sido vendidos en más de 5 transacciones distintas."
tipo: completar
respuesta: "HAVING COUNT(DISTINCT pedido_id) > 5"
respuestas_validas:
  - "HAVING COUNT(DISTINCT pedido_id) > 5"
  - "HAVING COUNT(pedido_id) > 5"
  - "HAVING COUNT(*) > 5"
pasos:
  - "Usar HAVING para filtrar grupos basados en el conteo de transacciones."
  - "COUNT(DISTINCT pedido_id) cuenta pedidos únicos, no filas de detalle."
  - "Sintaxis: SELECT producto_id, COUNT(DISTINCT pedido_id) FROM detalle_ventas GROUP BY producto_id HAVING COUNT(DISTINCT pedido_id) > 5;"
explicacion:
  HAVING permite restringir los grupos resultantes. Aquí, solo se incluyen los productos con alta frecuencia de venta (más de 5 pedidos distintos).
```

### 24 -- Suma ponderada (Weighted Sum)
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["sum", "weighted"]
enunciado: "Calcula el costo total ponderado por cantidad (cantidad * precio_unitario) agrupado por factura."
tipo: completar
respuesta: "SUM(cantidad * precio_unitario)"
respuestas_validas:
  - "SUM(cantidad * precio_unitario)"
  - "SUM(cantidad*precio_unitario)"
pasos:
  - "Multiplicar columnas fila por fila dentro de la agregación."
  - "SUM() acumula estos productos."
  - "Sintaxis: SELECT factura_id, SUM(cantidad * precio_unitario) FROM lineas_factura GROUP BY factura_id;"
explicacion:
  Para totales parciales dentro de una agregación, la multiplicación se realiza antes de la suma, calculando el subtotal por línea y luego sumándolos.
```

### 25 -- Agrupación por rango de fechas con RANGE
```
metadata:
  materia: "sql"
  tema: "agregaciones-group-by"
  nivel: "intermedio"
  tags: ["range", "window"]
enunciado: "¿Qué cláusula en OVER define un rango físico de filas para una agregación de ventana?"
tipo: completar
respuesta: "RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW"
respuestas_validas:
  - "RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW"
  - "ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW"
  - "RANGE INTERVAL '1 day' PRECEDING"
pasos:
  - "RANGE define el rango lógico basado en valores de orden."
  - "ROWS define el rango físico basado en número de filas."
  - "Para sumas acumulativas, se usa frecuentemente con ORDER BY."
  - "Sintaxis: SELECT fecha, monto, SUM(monto) OVER (ORDER BY fecha RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) FROM ventas;"
explicacion:
  RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW crea una ventana que va desde el inicio del particionamiento hasta la fila actual, permitiendo cálculos acumulativos.
```