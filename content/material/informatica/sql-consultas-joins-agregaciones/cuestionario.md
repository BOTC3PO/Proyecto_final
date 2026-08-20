# Informatica — Sql consultas joins agregaciones (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El comando SELECT

```
metadata:
  materia: "informatica"
  tema: "sql_consultas_basicas"
  nivel: "basico"
  tags: ["sql", "select"]

respuesta: "SELECT"
tipo: completar
respuestas_validas:
  - "SELECT"

enunciado: "Para extraer datos de una base de datos en SQL, se utiliza la cláusula ___."

explicacion: |
  La cláusula SELECT es la base de cualquier consulta de recuperación de datos en SQL.
```

### 2 — Función de agregación para conteo

```
metadata:
  materia: "informatica"
  tema: "sql_agregaciones"
  nivel: "basico"
  tags: ["sql", "count"]

variables:
  opcion_correcta: uno_de(["COUNT", "SUM", "AVG"])

respuesta: opcion_correcta
tipo: mc
opciones_explicitas: ["COUNT", "SUM", "AVG"]

enunciado: "Si deseas obtener el número total de registros que cumplen una condición, ¿qué función de agregación deberías utilizar?"

explicacion: |
  COUNT() devuelve el número de filas, mientras que SUM() suma valores numéricos y AVG() calcula el promedio.
```

### 3 — El concepto de JOIN

```
metadata:
  materia: "informatica"
  tema: "sql_joins"
  nivel: "intermedio"
  tags: ["sql", "joins"]

respuesta: verdadero
tipo: vf

enunciado: "¿Un JOIN se utiliza para combinar filas de dos o más tablas basándose en una columna relacionada entre ellas?"

explicacion: |
  Correcto. Los JOINs permiten relacionar tablas mediante claves foráneas o columnas con valores comunes.
```

### 4 — Orden de ejecución de una consulta

```
metadata:
  materia: "informatica"
  tema: "sql_orden_ejecucion"
  nivel: "intermedio"
  tags: ["sql", "syntax"]

respuesta_orden: ["SELECT", "FROM", "JOIN", "WHERE", "GROUP BY", "ORDER BY"]
tipo: ordenar
opciones_explicitas: ["SELECT", "FROM", "JOIN", "WHERE", "GROUP BY", "ORDER BY"]

enunciado: "Ordena los siguientes componentes de una consulta SQL según el orden lógico de su sintaxis estándar (de primero a último):"

explicacion: |
  Aunque el motor procesa los datos de forma distinta, la sintaxis requiere este orden para ser válida.
```

### 5 — Filtrado de grupos con HAVING

```
metadata:
  materia: "informatica"
  tema: "sql_agregaciones_avanzado"
  nivel: "intermedio"
  tags: ["sql", "having"]

variables:
  escenario: uno_de([0, 1])
  tabla_respuestas: [["WHERE", "WHERE"], ["HAVING", "HAVING"]]

respuesta: tabla_respuestas[escenario][1]
tipo: mc
opciones_explicitas: ["WHERE", "HAVING", "FILTER", "GROUP"]

enunciado: "Si quieres filtrar los resultados de una consulta basándote en el resultado de una función de agregación (como SUM o AVG), ¿qué cláusula debes usar?"

explicacion: |
  La cláusula WHERE filtra filas antes de agrupar; la cláusula HAVING filtra grupos después de aplicar la agregación.
```

### 6 — El conteo de registros

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
tipo: completar
tolerancia_abs: 0

enunciado: "Si ejecutamos la sentencia `SELECT COUNT(*) FROM {tabla_nombre};` en una tabla que contiene exactamente {filas_totales} registros, ¿cuál será el resultado numérico obtenido?"

explicacion: |
  La función de agregación `COUNT(*)` cuenta el número total de filas en una tabla, incluyendo aquellas que contienen valores NULL.
```

### 7 — Identificando la columna correcta

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

### 8 — Relacionando tablas con INNER JOIN

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

### 9 — Ordenando la sintaxis SQL

```
metadata:
  materia: "informatica"
  tema: "sql_sintaxis"
  nivel: "basico"
  tags: ["sql", "orden", "sintaxis"]

variables:
  clausulas: ["SELECT", "FROM", "WHERE", "ORDER BY"]
  respuesta_correcta: ["SELECT", "FROM", "WHERE", "ORDER BY"]

tipo: ordenar
respuesta_orden: respuesta_correcta
opciones_explicitas: clausulas

enunciado: "Ordena las siguientes cláusulas de SQL para que la consulta sea sintácticamente correcta: 'WHERE edad > 18', 'SELECT nombre', 'ORDER BY nombre', 'FROM usuarios'."

pasos:
  - "Seleccionar las columnas"
  - "Indicar la tabla de origen"
  - "Filtrar los registros"
  - "Ordenar el resultado final"

explicacion: |
  El orden lógico y sintáctico de una consulta SQL estándar es: SELECT (columnas) -> FROM (tabla) -> WHERE (condición) -> ORDER BY (ordenamiento).
```

### 10 — Completar la consulta de promedio

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
respuestas_validas:
  - "AVG"
  - "salario"

enunciado: "Para obtener el promedio de la columna ___ en la tabla ___, la sentencia correcta sería: `SELECT ___({columna}) FROM {tabla};`"

explicacion: |
  Para calcular el promedio aritmético de una columna, se utiliza la función de agregación `AVG()`. La sintaxis requiere la función seguida de la columna entre paréntesis.
```

### 11 — El peligro de la agregación sin GROUP BY

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

### 12 — Diferencia entre COUNT(*) y COUNT(columna)

```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "basico"
  tags: ["sql", "agregacion", "nulls"]

variables:
  num_columnas: 3
  columna_telefono: "telefono"

enunciado: "Si tenemos una tabla con {num_columnas} columnas y aplicamos COUNT({columna_telefono}) sobre la columna de teléfono (donde hay un valor NULL), el resultado será diferente a aplicar COUNT(*). \n\n¿Es verdadero que COUNT(telefono) ignorará la fila con valor NULL?"

respuesta: verdadero
tipo: vf

explicacion: |
  COUNT(*) cuenta todas las filas de la tabla, incluyendo aquellas con valores NULL. COUNT(columna) solo cuenta las filas donde la columna especificada no es NULL.
```

### 13 — El orden lógico de ejecución (WHERE vs HAVING)

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

### 14 — El efecto de los JOINs en el conteo de filas

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

### 15 — Orden de ejecución de una consulta SQL

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

respuesta_orden: ["FROM", "WHERE", "GROUP BY", "HAVING", "SELECT", "ORDER BY"]
tipo: ordenar

explicacion: |
  El orden lógico es: 1. FROM (identifica tablas), 2. WHERE (filtra filas), 3. GROUP BY (agrupa), 4. HAVING (filtra grupos), 5. SELECT (proyecta columnas) y 6. ORDER BY (ordena el resultado final).
```

### 16 — Diferencia entre COUNT(*) y COUNT(columna)

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

### 17 — El propósito del INNER JOIN

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

### 18 — Orden de ejecución de cláusulas SQL

```
metadata:
  materia: "informatica"
  tema: "sql_consultas_basicas"
  nivel: "intermedio"
  tags: ["sql", "orden_ejecucion"]

respuesta_orden: ["FROM", "WHERE", "GROUP BY", "HAVING", "SELECT", "ORDER BY"]
tipo: ordenar
opciones_explicitas: ["FROM", "WHERE", "GROUP BY", "HAVING", "SELECT", "ORDER BY"]

enunciado: "Para entender por qué no se puede usar un alias de una columna creada en el SELECT dentro de una cláusula WHERE, es necesario conocer el orden lógico de ejecución. Ordena las siguientes cláusulas de la primera a la última en que el motor de SQL las procesa:"

explicacion: |
  El motor primero identifica la fuente de datos (FROM), luego filtra filas (WHERE), agrupa (GROUP BY), filtra grupos (HAVING), selecciona columnas (SELECT) y finalmente ordena (ORDER BY).
```

### 19 — Uso de HAVING vs WHERE

```
metadata:
  materia: "informatica"
  tema: "sql_agregaciones"
  nivel: "intermedio"
  tags: ["sql", "agregacion", "having", "where"]

respuesta: "WHERE filtra filas antes de agrupar, HAVING filtra grupos después de agrupar"
tipo: mc
opciones_explicitas: ["WHERE filtra filas antes de agrupar, HAVING filtra grupos después de agrupar", "WHERE filtra grupos después de agrupar, HAVING filtra filas antes de agrupar", "Ambos se usan para filtrar filas individuales", "WHERE se usa con funciones de agregado y HAVING no"]

enunciado: "Al realizar una consulta con agregación, ¿cuál es la diferencia clave entre el uso de WHERE y HAVING?"

explicacion: |
  La cláusula WHERE se aplica sobre las filas individuales antes de que se realice cualquier agrupación. La cláusula HAVING se aplica sobre los resultados de las funciones de agregado una vez que los grupos han sido formados.
```

### 20 — Diferencia entre UNION y JOIN

```
metadata:
  materia: "informatica"
  tema: "sql_joins"
  nivel: "intermedio"
  tags: ["sql", "union", "join"]

respuesta: "JOIN combina columnas de diferentes tablas, UNION combina filas de diferentes consultas"
tipo: completar
respuestas_validas:
  - "JOIN combina columnas de diferentes tablas, UNION combina filas de diferentes consultas"

enunciado: "En términos de estructura de resultados, un ___ ___ añade nuevas columnas a una fila mediante la relación de tablas, mientras que un ___ ___ añade nuevas filas al resultado combinando conjuntos de datos."

explicacion: |
  Un JOIN expande la consulta hacia la derecha (más columnas) basándose en una clave común. Un UNION expande la consulta hacia abajo (más filas) combinando los resultados de dos SELECT que deben tener la misma estructura de columnas.
```

### 21 — Conteo de registros con JOIN

```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "intermedio"
  tags: ["sql", "joins", "count"]

variables:
  escenario: uno_de([["Clientes (id, nombre) | Pedidos (id, cliente_id)", "3"], ["Usuarios (id, nombre) | Posts (id, user_id)", "5"], ["Departamentos (id, nombre) | Empleados (id, dept_id)", "2"]])

enunciado: "Dada la siguiente estructura de tablas: {escenario[0]}. Si tenemos la tabla de pedidos/posts/empleados con los siguientes IDs de relación: {escenario[1]}, ¿cuántos registros resultantes devolvería un INNER JOIN entre ambas tablas?"

respuesta: escenario[1]
tipo: completar
respuestas_validas:
  - "1"
  - "2"
  - "3"
  - "4"
  - "5"

explicacion: |
  El INNER JOIN solo devuelve las filas donde hay una coincidencia en ambas tablas. En este caso, se contaron las coincidencias exitosas.
```

### 22 — Identificación de valores nulos

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

### 23 — Orden de ejecución SQL

```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "intermedio"
  tags: ["sql", "order_of_execution"]

enunciado: "Ordena las cláusulas de una consulta SQL estándar de forma lógica, desde la que se procesa primero hasta la última:"

opciones_explicitas: ["FROM", "WHERE", "GROUP BY", "HAVING", "SELECT", "ORDER BY"]

respuesta_orden: ["FROM", "WHERE", "GROUP BY", "HAVING", "SELECT", "ORDER BY"]
tipo: ordenar

explicacion: |
  El motor de SQL primero localiza la fuente de datos (FROM), filtra filas (WHERE), agrupa (GROUP BY), filtra grupos (HAVING), selecciona columnas (SELECT) y finalmente ordena (ORDER BY).
```

### 24 — Evaluación de condición de agregación

```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "intermedio"
  tags: ["sql", "having_vs_where"]

enunciado: "Si queremos filtrar un grupo de resultados basándonos en el resultado de una función de agregación (por ejemplo, 'donde el promedio de ventas sea mayor a 100'), ¿debemos usar la cláusula ___ en lugar de WHERE?"

respuestas_validas:
  - "HAVING"

respuesta: "HAVING"
tipo: completar

explicacion: |
  La cláusula WHERE se usa para filtrar filas individuales antes de la agrupación, mientras que HAVING se usa para filtrar grupos después de aplicar funciones de agregación.
```

### 25 — Cálculo de promedio con datos

```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "basico"
  tags: ["sql", "avg"]

variables:
  datos_ventas: uno_de([[100, 200, 300], [50, 150, 250], [10, 20, 60]])

enunciado: "Se tiene una tabla con una columna 'monto' que contiene los siguientes valores: {datos_ventas[0]}, {datos_ventas[1]}, {datos_ventas[2]}. ¿Cuál es el resultado de la función AVG(monto)?"

respuesta: (datos_ventas[0] + datos_ventas[1] + datos_ventas[2]) / 3
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  La función AVG() suma todos los valores y los divide por la cantidad de elementos.
```
