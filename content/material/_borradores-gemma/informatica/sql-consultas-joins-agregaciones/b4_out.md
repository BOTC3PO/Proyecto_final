### 1 — Diferencia entre COUNT(*) y COUNT(columna)
```
metadata:
  materia: "informatica"
  tema: "sql_consultas_basicas"
  nivel: "intermedio"
  tags: ["sql", "agregacion", "count"]

respuesta: "COUNT(columna) ignora los valores NULL, mientras que COUNT(*) cuenta todas las filas"
tipo: mc
opciones_explicitas: ["COUNT(columna) ignora los valores NULL, mientras que COUNT(*) cuenta todas las filas", "COUNT(*) ignora los valores NULL, mientras que COUNT(columna) cuenta todas las filas", "Ambos funcionan exactamente igual en todas las bases de datos", "COUNT(columna) cuenta filas con NULL y COUNT(*) no"]

enunciado: "En una tabla con una columna 'edad' que contiene valores NULL, ¿cuál es la distinción fundamental entre usar COUNT(*) y COUNT(edad)?"

explicacion: |
  COUNT(*) contabiliza el número total de registros en la tabla, incluyendo aquellos donde todas las columnas sean NULL. 
  COUNT(columna) solo contabiliza las filas donde la columna especificada NO es NULL.
```

### 2 — El propósito del INNER JOIN
```
metadata:
  materia: "informatica"
  tema: "sql_joins"
  nivel: "basico"
  tags: ["sql", "joins", "inner_join"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de un LEFT JOIN, un INNER JOIN solo devuelve las filas donde existe una coincidencia en ambas tablas relacionadas."

explicacion: |
  Correcto. El INNER JOIN actúa como una intersección de conjuntos, filtrando cualquier registro que no tenga su par correspondiente en la otra tabla.
```

### 3 — Orden de ejecución de cláusulas SQL
```
metadata:
  materia: "informatica"
  tema: "sql_consultas_basicas"
  nivel: "intermedio"
  tags: ["sql", "orden_ejecucion"]

respuesta: ["FROM", "WHERE", "GROUP BY", "HAVING", "SELECT", "ORDER BY"]
tipo: ordenar
opciones_explicitas: ["FROM", "WHERE", "GROUP BY", "HAVING", "SELECT", "ORDER BY"]

enunciado: "Para entender por qué no se puede usar un alias de una columna creada en el SELECT dentro de una cláusula WHERE, es necesario conocer el orden lógico de ejecución. Ordena las siguientes cláusulas de la primera a la última en que el motor de SQL las procesa:"

explicacion: |
  El motor primero identifica la fuente de datos (FROM), luego filtra filas (WHERE), agrupa (GROUP BY), filtra grupos (HAVING), selecciona columnas (SELECT) y finalmente ordena (ORDER BY).
```

### 4 — Uso de HAVING vs WHERE
```
metadata:
  materia: "informatica"
  tema: "sql_agregaciones"
  nivel: "intermedio"
  tags: ["sql", "agregacion", "having", "where"]

variables:
  escenario: uno_de([[true, "WHERE filtra filas antes de agrupar, HAVING filtra grupos después de agrupar"], [false, "WHERE filtra grupos después de agrupar, HAVING filtra filas antes de agrupar"]])

respuesta: escenario[0][1]
tipo: mc
opciones_explicitas: ["WHERE filtra filas antes de agrupar, HAVING filtra grupos después de agrupar", "WHERE filtra grupos después de agrupar, HAVING filtra filas antes de agrupar", "Ambos se usan para filtrar filas individuales", "WHERE se usa con funciones de agregado y HAVING no"]

enunciado: "Al realizar una consulta con agregación, ¿cuál es la diferencia clave entre el uso de WHERE y HAVING?"

explicacion: |
  La cláusula WHERE se aplica sobre las filas individuales antes de que se realice cualquier agrupación. La cláusula HAVING se aplica sobre los resultados de las funciones de agregado una vez que los grupos han sido formados.
```

### 5 — Diferencia entre UNION y JOIN
```
metadata:
  materia: "informatica"
  tema: "sql_joins"
  nivel: "intermedio"
  tags: ["sql", "union", "join"]

respuesta: "JOIN combina columnas de diferentes tablas, UNION combina filas de diferentes consultas"
tipo: completar
respuestas_validas: ["JOIN combina columnas de diferentes tablas, UNION combina filas de diferentes consultas"]

enunciado: "En términos de estructura de resultados, un ___ ___ añade nuevas columnas a una fila mediante la relación de tablas, mientras que un ___ ___ añade nuevas filas al resultado combinando conjuntos de datos."

explicacion: |
  Un JOIN expande la consulta hacia la derecha (más columnas) basándose en una clave común. Un UNION expande la consulta hacia abajo (más filas) combinando los resultados de dos SELECT que deben tener la misma estructura de columnas.
```