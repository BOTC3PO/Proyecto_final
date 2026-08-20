### 1 — Conteo de registros con JOIN
```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "intermedio"
  tags: ["sql", "joins", "count"]

variables:
  escenario: uno_de([
    ["Clientes (id, nombre) | Pedidos (id, cliente_id)", "3"],
    ["Usuarios (id, nombre) | Posts (id, user_id)", "5"],
    ["Departamentos (id, nombre) | Empleados (id, dept_id)", "2"]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "Dada la siguiente estructura de tablas: {escenario[idx][0]}. Si tenemos la tabla de pedidos/posts/empleados con los siguientes IDs de relación: {escenario[idx][1]}, ¿cuántos registros resultantes devolvería un INNER JOIN entre ambas tablas?"

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["1", "2", "3", "4", "5"]

explicacion: |
  El INNER JOIN solo devuelve las filas donde hay una coincidencia en ambas tablas. En este caso, se contaron las coincidencias exitosas.
```

### 2 — Identificación de valores nulos
```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "basico"
  tags: ["sql", "nulls"]

enunciado: "En una consulta SQL, si aplicamos una función de agregación como SUM() o AVG() sobre una columna que contiene valores NULL, ¿qué sucede con esos valores?"

opciones_explicitas: ["Se tratan como 0", "Se ignoran en el cálculo", "La consulta devuelve error", "Se tratan como NULL y el resultado es NULL"]

respuesta: "Se ignoran en el cálculo"
tipo: mc

explicacion: |
  Las funciones de agregación estándar en SQL (excepto COUNT(*)) ignoran los valores NULL al realizar sus cálculos.
```

### 3 — Orden de ejecución SQL
```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "intermedio"
  tags: ["sql", "order_of_execution"]

enunciado: "Ordena las cláusulas de una consulta SQL estándar de forma lógica, desde la que se procesa primero hasta la última:"

opciones_explicitas: ["FROM", "WHERE", "GROUP BY", "HAVING", "SELECT", "ORDER BY"]

respuesta: ["FROM", "WHERE", "GROUP BY", "HAVING", "SELECT", "ORDER BY"]
tipo: ordenar

explicacion: |
  El motor de SQL primero localiza la fuente de datos (FROM), filtra filas (WHERE), agrupa (GROUP BY), filtra grupos (HAVING), selecciona columnas (SELECT) y finalmente ordena (ORDER BY).
```

### 4 — Evaluación de condición de agregación
```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "intermedio"
  tags: ["sql", "having_vs_where"]

enunciado: "Si queremos filtrar un grupo de resultados basándonos en el resultado de una función de agregación (por ejemplo, 'donde el promedio de ventas sea mayor a 100'), ¿debemos usar la cláusula ___ en lugar de WHERE?"

respuestas_validas: ["HAVING"]

respuesta: "HAVING"
tipo: completar

explicacion: |
  La cláusula WHERE se usa para filtrar filas individuales antes de la agrupación, mientras que HAVING se usa para filtrar grupos después de aplicar funciones de agregación.
```

### 5 — Cálculo de promedio con datos
```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "basico"
  tags: ["sql", "avg"]

variables:
  datos_ventas: uno_de([
    [100, 200, 300],
    [50, 150, 250],
    [10, 20, 60]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "Se tiene una tabla con una columna 'monto' que contiene los siguientes valores: {datos_ventas[idx][0]}, {datos_ventas[idx][1]}, {datos_ventas[idx][2]}. ¿Cuál es el resultado de la función AVG(monto)?"

respuesta: promedio(datos_ventas[idx])
tipo: input
tolerancia_abs: 0.01

explicacion: |
  La función AVG() suma todos los valores y los divide por la cantidad de elementos.
```