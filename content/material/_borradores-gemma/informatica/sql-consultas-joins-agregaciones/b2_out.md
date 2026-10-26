### 1 — El conteo de registros
```
metadata:
  materia: "informatica"
  tema: "sql_consultas_basicas"
  nivel: "basico"
  tags: ["sql", "select", "count"]

variables:
  tabla_nombre: "usuarios"
  filas_totales: 150

respuesta: 150
tipo: input
tolerancia_abs: 0

enunciado: "Si ejecutamos la sentencia `SELECT COUNT(*) FROM {tabla_nombre};` en una tabla que contiene exactamente {filas_totales} registros, ¿cuál será el resultado numérico obtenido?"

explicacion: |
  La función de agregación `COUNT(*)` cuenta el número total de filas en una tabla, incluyendo aquellas que contienen valores NULL.
```

### 2 — Identificando la columna correcta
```
metadata:
  materia: "informatica"
  tema: "sql_agregaciones"
  nivel: "basico"
  tags: ["sql", "sum", "agregacion"]

variables:
  columna: "precio"
  valor_suma: 5000

respuesta: "SUM"
tipo: mc
opciones_explicitas: ["SUM", "AVG", "COUNT", "MAX"]

enunciado: "Deseas obtener el total de la suma de todos los valores de la columna '{columna}' en una tabla llamada 'productos'. ¿Qué función de agregación debes utilizar en tu cláusula SELECT?"

explicacion: |
  `SUM(columna)` suma todos los valores de una columna numérica, mientras que `AVG` calcula el promedio y `COUNT` cuenta registros.
```

### 3 — Relacionando tablas con INNER JOIN
```
metadata:
  materia: "informatica"
  tema: "sql_joins"
  nivel: "intermedio"
  tags: ["sql", "join", "relaciones"]

variables:
  tabla_a: "clientes"
  tabla_b: "pedidos"
  relacion: "coincidencia_en_id"

respuesta: verdadero
tipo: vf

enunciado: "Al realizar un `INNER JOIN` entre la tabla '{tabla_a}' y la tabla '{tabla_b}' utilizando una condición de igualdad en sus claves primarias y foráneas, ¿se mostrarán únicamente las filas donde existe una correspondencia entre ambas tablas?"

explicacion: |
  El `INNER JOIN` devuelve solo las filas donde hay una coincidencia en la condición de unión (ON). Si un cliente no tiene pedidos, no aparecerá en el resultado de un INNER JOIN.
```

### 4 — Ordenando la sintaxis SQL
```
metadata:
  materia: "informatica"
  tema: "sql_sintaxis"
  nivel: "basico"
  tags: ["sql", "orden", "sintaxis"]

variables:
  clausulas: ["SELECT", "FROM", "WHERE", "ORDER BY"]

respuesta: ["SELECT", "FROM", "WHERE", "ORDER BY"]
tipo: ordenar

enunciado: "Ordena las siguientes cláusulas de SQL para que la consulta sea sintácticamente correcta: 'WHERE edad > 18', 'SELECT nombre', 'ORDER BY nombre', 'FROM usuarios'."

pasos:
  - "Seleccionar las columnas"
  - "Indicar la tabla de origen"
  - "Filtrar los registros"
  - "Ordenar el resultado final"

explicacion: |
  El orden lógico y sintáctico de una consulta SQL estándar es: SELECT (columnas) -> FROM (tabla) -> WHERE (condición) -> ORDER BY (ordenamiento).
```

### 5 — Completar la consulta de promedio
```
metadata:
  materia: "informatica"
  tema: "sql_agregaciones"
  nivel: "intermedio"
  tags: ["sql", "avg", "group_by"]

variables:
  columna: "salario"
  tabla: "empleados"

respuesta: ["AVG", "salario"]
tipo: completar
respuestas_validas: ["AVG", "salario"]

enunciado: "Para obtener el promedio de la columna ___ en la tabla ___, la sentencia correcta sería: `SELECT ___({columna}) FROM {tabla};`"

explicacion: |
  Para calcular el promedio aritmético de una columna, se utiliza la función de agregación `AVG()`. La sintaxis requiere la función seguida de la columna entre paréntesis.
```