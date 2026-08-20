### 1 — El peligro de la agregación sin GROUP BY
```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "intermedio"
  tags: ["sql", "agregacion", "error_comun"]

enunciado: "Al intentar ejecutar la siguiente consulta en un motor SQL estándar, ¿cuál es el resultado esperado? \n\nSELECT nombre, SUM(salario) FROM empleados;"

opciones_explicitas:
  - "Error de sintaxis: la columna 'nombre' debe estar en una cláusula GROUP BY o en una función de agregación."
  - "La consulta funciona y devuelve el nombre del primer empleado con la suma de todos los salarios."
  - "La consulta funciona y devuelve una fila por cada nombre distinto con su respectivo total."
  - "Error de sintaxis: la función SUM() no puede usarse en una cláusilla SELECT sin un GROUP BY."

respuesta: "Error de sintaxis: la columna 'nombre' debe estar en una cláusula GROUP BY o en una función de agregación."
tipo: mc

explicacion: |
  En SQL estándar, cuando usas una función de agregación (como SUM, AVG, COUNT) junto con una columna normal, debes agrupar por esa columna usando GROUP BY. De lo contrario, el motor no sabe qué hacer con los valores individuales de 'nombre' frente al valor único resultante de la suma.
```

### 2 — Diferencia entre COUNT(*) y COUNT(columna)
```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "basico"
  tags: ["sql", "agregacion", "nulls"]

variables:
  tabla_datos: [["id", "nombre", "telefono"], [1, "Ana", "123"], [2, "Luis", null], [3, "Marta", "456"]]
  idx: uno_de([0, 1])

enunciado: "Si tenemos una tabla con {tabla_datos[idx][0]} columnas y aplicamos COUNT({tabla_datos[idx][2]}) sobre la columna de teléfono (donde hay un valor NULL), el resultado será diferente a aplicar COUNT(*). \n\n¿Es verdadero que COUNT(telefono) ignorará la fila con valor NULL?"

respuesta: verdadero
tipo: vf

explicacion: |
  COUNT(*) cuenta todas las filas de la tabla, incluyendo aquellas con valores NULL. COUNT(columna) solo cuenta las filas donde la columna especificada no es NULL.
```

### 3 — El orden lógico de ejecución (WHERE vs HAVING)
```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "intermedio"
  tags: ["sql", "filtro", "agregacion"]

enunciado: "Para filtrar los resultados de una consulta que utiliza una función de agregación (por ejemplo, mostrar solo departamentos cuyo promedio de sueldo sea mayor a 2000), se debe utilizar la cláusula ___ en lugar de la cláusula WHERE."

respuestas_validas:
  - "HAVING"

respuesta: "HAVING"
tipo: completar

explicacion: |
  La cláusula WHERE se utiliza para filtrar filas individuales antes de que se realice la agrupación. La cláusula HAVING se utiliza para filtrar grupos después de que se ha aplicado la función de agregación.
```

### 4 — El efecto de los JOINs en el conteo de filas
```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "avanzado"
  tags: ["sql", "joins", "duplicados"]

enunciado: "Tienes una tabla 'Clientes' (10 clientes) y una tabla 'Pedidos' (5 pedidos, pero 2 clientes no han hecho pedidos). Si realizas un INNER JOIN entre ambas tablas y aplicas un COUNT(cliente_id), ¿cuántas filas resultarán en el conjunto de datos antes de la agregación?"

opciones_explicitas:
  - "10"
  - "5"
  - "8"
  - "15"

respuesta: "5"
tipo: mc

explicacion: |
  Un INNER JOIN solo devuelve las filas donde hay una coincidencia en ambas tablas. Como solo hay 5 pedidos, solo habrá 5 filas en el resultado, independientemente de cuántos clientes existan en total.
```

### 5 — Orden de ejecución de una consulta SQL
```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "intermedio"
  tags: ["sql", "orden_ejecucion"]

enunciado: "Ordena las siguientes cláusulas según el orden lógico en que el motor de base de datos las procesa para ejecutar una consulta compleja:"

opciones_explicitas:
  - "FROM"
  - "WHERE"
  - "GROUP BY"
  - "HAVING"
  - "SELECT"
  - "ORDER BY"

respuesta: ["FROM", "WHERE", "GROUP BY", "HAVING", "SELECT", "ORDER BY"]
tipo: ordenar

explicacion: |
  El orden lógico es: 1. FROM (identifica tablas), 2. WHERE (filtra filas), 3. GROUP BY (agrupa), 4. HAVING (filtra grupos), 5. SELECT (proyecta columnas) y 6. ORDER BY (ordena el resultado final).
```