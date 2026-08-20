### 1 — Subconsulta correlacionada con EXISTS

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["exists", "correlacion", "optimizacion"]
tipo: "vf"
enunciado: "En la consulta `SELECT * FROM clientes c WHERE EXISTS (SELECT 1 FROM pedidos p WHERE p.cliente_id = c.id)`, la subconsulta interna se ejecuta una vez para cada fila de `clientes` hasta que encuentra un primer coincidencia, momento en el cual la base de datos puede detener la evaluación de esa subconsulta específica para esa fila."
respuesta: verdadero
pasos:
  - "Identificar que se usa EXISTS."
  - "Reconocer que EXISTS es un operador de existencia booleano."
  - "Entender que la optimización corta la búsqueda interna al encontrar el primer registro válido (short-circuiting)."
explicacion: "EXISTS evalúa la subconsulta correlacionada por cada fila de la tabla externa. Una vez que la subconsulta devuelve al menos una fila, el resultado de EXISTS es verdadero y la evaluación de esa subconsulta para esa fila específica termina (short-circuit), lo cual es más eficiente que COUNT o IN en grandes conjuntos de datos."
```

### 2 — Optimización de IN vs EXISTS

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["in", "exists", "rendimiento"]
tipo: "completar"
enunciado: "Cuando la subconsulta devuelve un conjunto de resultados muy grande, es generalmente más eficiente usar `EXISTS` en lugar de `IN` porque `IN` puede forzar a la base de datos a materializar el conjunto completo de la subconsulta en memoria antes de realizar la comparación, mientras que `EXISTS` permite un acceso más directo mediante {1}."
respuesta: "join"
respuestas_validas:
  - "join"
  - "JOIN"
  - "union all"
  - "UNION ALL"
pasos:
  - "Analizar el comportamiento de IN con grandes datasets."
  - "Comprender que IN a menudo se transforma en un hash join o materialización."
  - "Comprender que EXISTS se transforma en un semi-join o anti-join."
explicacion: "Los optimizadores modernos a menudo transforman `IN` en un `JOIN`. Sin embargo, históricamente y en casos de datos muy grandes sin índices adecuados, `EXISTS` (transformado a semi-join) evita la materialización completa del conjunto de la subconsulta, evaluando solo la existencia, lo que suele ser más eficiente en I/O y memoria."
```

### 3 — Subconsulta no correlacionada en SELECT

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["scalar", "select", "correlacion"]
tipo: "vf"
enunciado: "Una subconsulta escalar utilizada en la cláusula `SELECT` (ej. `SELECT (SELECT MAX(salario) FROM empleados) FROM dual`) debe devolver exactamente una fila y una columna; si devuelve más de una fila, la consulta principal generará un error de ejecución."
respuesta: verdadero
pasos:
  - "Definir subconsulta escalar."
  - "Verificar restricciones de cardinalidad en SELECT."
  - "Confirmar que más de una fila causa error."
explicacion: "En SQL estándar, una expresión en la lista de selección debe ser escalar (devolver un único valor). Si la subconsulta devuelve múltiples filas, el motor SQL lanza un error como 'Subquery returned more than 1 value' porque no sabe qué valor asignar a la columna resultante."
```

### 4 — Densidad de Ranking con DENSE_RANK

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["window-functions", "rank", "subconsulta"]
tipo: "completar"
enunciado: "Para obtener los empleados con el salario más alto por departamento, incluyendo todos los empleados que empaten en el primer lugar sin dejar huecos en la numeración de ranking, se debe usar la función de ventana {1} particionada por departamento."
respuesta: "dense_rank"
respuestas_validas:
  - "dense_rank"
  - "DENSE_RANK"
  - "dense rank"
  - "DENSE RANK"
pasos:
  - "Identificar la necesidad de ranking con empates."
  - "Diferenciar RANK de DENSE_RANK."
  - "Seleccionar la función que no deja huecos."
explicacion: "`DENSE_RANK()` asigna el mismo rango a los empates y el siguiente valor consecutivo al siguiente rango (ej. 1, 1, 2, 2, 3). `RANK()` dejaría huecos (ej. 1, 1, 3, 3, 5). Para obtener 'todos los top 1' sin importar cuántos empaten, `DENSE_RANK` es la elección lógica si se filtra por `= 1`, aunque `RANK` también funciona para filtrar por `= 1`. La pregunta enfatiza la densidad y la numeración consecutiva típica de análisis de top-N."
```

### 5 — Correlación en HAVING

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["having", "correlacion", "agregacion"]
tipo: "vf"
enunciado: "Es posible utilizar una subconsulta correlacionada dentro de la cláusula `HAVING` para comparar el valor agregado de una fila de grupo contra un valor calculado dinámicamente desde otras filas de la misma tabla o una tabla relacionada."
respuesta: verdadero
pasos:
  - "Analizar la sintaxis de HAVING."
  - "Verificar si permite subconsultas."
  - "Confirmar si la correlación es válida en ese contexto."
explicacion: "Sí, `HAVING` puede contener subconsultas. Por ejemplo, `HAVING COUNT(*) > (SELECT AVG(cnt) FROM (SELECT COUNT(*) as cnt FROM ventas GROUP BY cliente) t)` compara el conteo del grupo actual con el promedio global. La correlación permite acceder a valores del grupo externo si se estructura correctamente, aunque es menos común que en WHERE o SELECT."
```

### 6 — Operador ANY con subconsulta

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["any", "some", "comparacion"]
tipo: "mc"
enunciado: "¿Qué resultado produce la siguiente consulta si la subconsulta devuelve los valores {10, 20, 30}?"
opciones_explicitas:
  - "Devuelve filas donde columna > 10"
  - "Devuelve filas donde columna > 30"
  - "Devuelve filas donde columna > 20"
  - "Error de sintaxis"
respuesta: "Devuelve filas donde columna > 10"
pasos:
  - "Analizar la semántica del operador ANY."
  - "Aplicar la lógica booleana de existencia."
  - "Determinar el umbral mínimo."
explicacion: "El operador `> ANY` (o `> SOME`) es verdadero si la comparación es verdadera para AL MENOS UN elemento de la subconsulta. Si la subconsulta es {10, 20, 30}, entonces `x > ANY(...)` es verdadero si `x > 10` (porque 10 está en el conjunto). No es `x > 30` (eso sería `> ALL`). Por lo tanto, cualquier valor mayor que el mínimo del conjunto (10) satisface la condición."
```

### 7 — Lateral Join (CROSS APPLY / LATERAL)

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["lateral", "apply", "correlacion"]
tipo: "completar"
enunciado: "En bases de datos que soportan el estándar SQL:2003+, el operador {1} permite referenciar columnas de la tabla de la izquierda en una subconsulta de la derecha, actuando como una subconsulta correlacionada que devuelve múltiples filas por entrada, similar a un UNNEST o GENERATE_SERIES."
respuesta: "lateral"
respuestas_validas:
  - "lateral"
  - "LATERAL"
  - "cross apply"
  - "CROSS APPLY"
  - "inner join lateral"
  - "INNER JOIN LATERAL"
pasos:
  - "Identificar la necesidad de acceder a columnas externas desde una subconsulta multi-fila."
  - "Reconocer la limitación de WHERE/JOIN estándar con correlación compleja."
  - "Nombra la cláusula lateral."
explicacion: "`LATERAL` (o `CROSS APPLY` en SQL Server, `JOIN LATERAL` en PostgreSQL/Oracle) permite que la subconsulta a la derecha dependa de las columnas de la tabla a la izquierda, devolviendo un conjunto de filas que se une a la fila externa. Esto es crucial para funciones que retornan tablas o desanidan arrays."
```

### 8 — Anti-Join con NOT EXISTS

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["anti-join", "not-exists", "diferencia"]
tipo: "vf"
enunciado: "La consulta `SELECT * FROM A WHERE NOT EXISTS (SELECT 1 FROM B WHERE B.id = A.id)` es lógicamente equivalente a un Anti-Join y devuelve las filas de A que no tienen correspondencia en B."
respuesta: verdadero
pasos:
  - "Definir NOT EXISTS."
  - "Relacionar con Anti-Join."
  - "Verificar la lógica de no correspondencia."
explicacion: "`NOT EXISTS` es la forma estándar y eficiente de realizar un Anti-Join. Devuelve filas de la tabla externa donde la subconsulta correlacionada no devuelve ninguna fila. Es preferible a `NOT IN` porque maneja correctamente los valores NULL (que harían fallar toda la condición en `NOT IN`)."
```

### 9 — Subconsulta en FROM (Tabla Derivada)

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["derived-table", "alias", "join"]
tipo: "completar"
enunciado: "Al utilizar una subconsulta en la cláusula `FROM` para crear una tabla derivada, es obligatorio proporcionar un {1} a la subconsulta, o el motor SQL generará un error de sintaxis."
respuesta: "alias"
respuestas_validas:
  - "alias"
  - "ALIAS"
  - "nombre"
  - "NOMBRE"
  - "nombre de tabla"
  - "TABLE ALIAS"
pasos:
  - "Analizar la sintaxis de FROM (subconsulta)."
  - "Identificar la regla de visibilidad de columnas."
  - "Reconocer la necesidad de un nombre para referenciar la tabla."
explicacion: "Las tablas derivadas (subconsultas en FROM) no tienen nombre por defecto. El SQL estándar requiere que se asigne un alias (ej. `FROM (SELECT ... ) AS t`) para que la consulta externa pueda referenciar sus columnas (ej. `t.col1`)."
```

### 10 — Correlación en Subconsulta de SELECT

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["correlacion", "select", "dependencia"]
tipo: "vf"
enunciado: "Una subconsulta en la cláusula `SELECT` puede hacer referencia a columnas de la tabla principal de la consulta externa, siempre que la subconsulta sea correlacionada y devuelva un único valor escalar."
respuesta: verdadero
pasos:
  - "Verificar dependencia de columnas."
  - "Confirmar que SELECT permite correlación."
  - "Verificar restricción escalar."
explicacion: "Sí, es perfectamente válido y común. Por ejemplo: `SELECT id, (SELECT nombre FROM departamentos d WHERE d.id = e.dept_id) FROM empleados e;`. La subconsulta se ejecuta para cada fila de `empleados`, usando `e.dept_id` para filtrar."
```

### 11 — ANY vs ALL en comparación

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["any", "all", "logica"]
tipo: "mc"
enunciado: "Si la subconsulta devuelve los valores {5, 10, 15}, ¿cuál de las siguientes condiciones es verdadera para el valor `x = 6`?"
opciones_explicitas:
  - "x > ANY(subconsulta) es verdadero"
  - "x > ALL(subconsulta) es verdadero"
  - "x < ANY(subconsulta) es falso"
  - "x = ANY(subconsulta) es verdadero"
respuesta: "x > ANY(subconsulta) es verdadero"
pasos:
  - "Evaluar > ANY: ¿6 > alguno de {5,10,15}? Sí (5)."
  - "Evaluar > ALL: ¿6 > todos? No (no es > 10 ni 15)."
  - "Evaluar < ANY: ¿6 < alguno? Sí (no es falso)."
  - "Evaluar = ANY: ¿6 = alguno? No."
explicacion: "`> ANY` requiere que `x` sea mayor que al menos un elemento. 6 > 5, por lo tanto es verdadero. `> ALL` requiere que sea mayor que el máximo (15), lo cual es falso. `< ANY` sería verdadero (6 < 10, 15), pero la opción dice 'es falso', lo cual es incorrecto. `= ANY` es falso."
```

### 12 — Correlación en WHERE con IN

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["in", "correlacion", "error"]
tipo: "vf"
enunciado: "En SQL estándar, una subconsulta utilizada dentro de un operador `IN` en la cláusula `WHERE` NO puede referenciar columnas de la tabla que está en la cláusula `FROM` de la consulta principal (no puede ser correlacionada)."
respuesta: falso
pasos:
  - "Analizar sintaxis de IN."
  - "Verificar soporte de correlación."
  - "Confirmar que SQL permite IN correlacionado."
explicacion: "Falso. Las subconsultas en `IN` SÍ pueden ser correlacionadas. Ejemplo: `SELECT * FROM A WHERE id IN (SELECT parent_id FROM B WHERE B.status = 'active')` es válida si la subconsulta no referencia A. Pero `SELECT * FROM A WHERE id IN (SELECT x FROM C WHERE C.ref = A.id)` también es válida y común, aunque su rendimiento puede variar."
```

### 13 — Subconsulta con UNION en WHERE

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["union", "where", "conjuntos"]
tipo: "completar"
enunciado: "Es posible utilizar una subconsulta que contenga una cláusula `UNION` en la cláusula `WHERE` (por ejemplo, `WHERE id IN (...)`), siempre que la subconsulta final devuelva un único {1}."
respuesta: "columna"
respuestas_validas:
  - "columna"
  - "COLUMNA"
  - "campo"
  - "CAMPO"
  - "columna escalar"
  - "SCALAR COLUMN"
pasos:
  - "Analizar la salida de UNION."
  - "Verificar restricciones de IN."
  - "Identificar que IN espera una lista de valores de una sola columna."
explicacion: "`IN` compara un valor contra una lista de valores de una sola columna. Una subconsulta con `UNION` (UNION ALL o UNION) debe proyectar exactamente una columna para ser válida dentro de `IN`. Si devuelve dos columnas, causará error."
```

### 14 — Correlación en JOIN

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["join", "correlacion", "lateral"]
tipo: "vf"
enunciado: "En la cláusula `JOIN`, es posible correlacionar la subconsulta de la derecha con columnas de la tabla de la izquierda utilizando la cláusula `ON` o `USING`, pero esto requiere que la subconsulta esté envuelta en una estructura que permita el acceso lateral (como `CROSS APPLY` o `JOIN LATERAL`), no en un `JOIN` estándar."
respuesta: verdadero
pasos:
  - "Diferenciar JOIN estándar de LATERAL."
  - "Verificar si JOIN estándar soporta correlación cruzada."
  - "Confirmar que se necesita LATERAL/CROSS APPLY."
explicacion: "Un `JOIN` estándar (INNER/LEFT) no permite que la subconsulta a la derecha reference columnas de la tabla a la izquierda en su propia cláusula `WHERE` o `FROM` interna de forma correlacionada directa. Para lograr esto, se debe usar `LATERAL` (SQL:2003) o `CROSS APPLY` (SQL Server) / `LATERAL` (Postgres/Oracle)."
```

### 15 — Subconsulta Escalar con NULL

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["null", "scalar", "coalesce"]
tipo: "completar"
enunciado: "Si una subconsulta escalar en la cláusula `SELECT` no devuelve ninguna fila, el resultado de la expresión es {1}, lo cual puede propagarse a través de las operaciones aritméticas."
respuesta: "null"
respuestas_validas:
  - "null"
  - "NULL"
  - "nulo"
  - "NULO"
  - "empty set"
  - "EMPTY SET"
pasos:
  - "Analizar comportamiento de subconsulta vacía."
  - "Identificar el valor de retorno en SQL estándar."
  - "Confirmar propagación de NULL."
explicacion: "Una subconsulta escalar que no devuelve filas retorna `NULL`. Si se usa en una expresión aritmética (ej. `salario + (SELECT bonus...)`), el resultado será `NULL` (propagación de NULL), a menos que se use `COALESCE` o `ISNULL` para manejarlo."
```

### 16 — ANY con Operador de Igualdad

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["any", "in", "equivalencia"]
tipo: "vf"
enunciado: "La expresión `columna = ANY(subconsulta)` es lógicamente equivalente a `columna IN (subconsulta)`."
respuesta: verdadero
pasos:
  - "Analizar semántica de = ANY."
  - "Analizar semántica de IN."
  - "Comparar ambas."
explicacion: "Sí, `= ANY` verifica si el valor de la columna es igual a AL MENOS UN valor de la subconsulta. Esto es exactamente lo que hace `IN`. Ambas son equivalentes, aunque `IN` es más legible y a veces mejor optimizado por el planificador."
```

### 17 — Correlación en HAVING con AVG

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["having", "avg", "comparacion"]
tipo: "completar"
enunciado: "Para listar los departamentos cuyo salario promedio es mayor que el salario promedio de TODOS los demás departamentos, se puede usar `HAVING AVG(salario) > (SELECT {1} AVG(salario) FROM empleados)`."
respuesta: "MAX"
respuestas_validas:
  - "MAX"
  - "max"
  - "MAXIMUM"
  - "maximum"
  - "MAX() AVG"
  - "MAX AVG"
pasos:
  - "Analizar la condición: mayor que el promedio de TODOS."
  - "Determinar qué agregación representa el 'máximo de los promedios'."
  - "Seleccionar la función anidada."
explicacion: "Si el promedio de un departamento es mayor que el promedio de TODOS los departamentos, implica que es mayor que el promedio más alto de cualquier otro. Por lo tanto, la subconsulta debe calcular el MAXIMUM del promedio general: `SELECT MAX(avg_sal) FROM (SELECT AVG(salario) as avg_sal FROM empleados GROUP BY depto) t`."
```

### 18 — Subconsulta en CASE

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["case", "subconsulta", "condicional"]
tipo: "vf"
enunciado: "Es válido utilizar una subconsulta correlacionada dentro de una expresión `CASE WHEN` para determinar el valor de retorno basado en la existencia o conteo de registros relacionados."
respuesta: verdadero
pasos:
  - "Verificar sintaxis de CASE."
  - "Verificar si la condición WHEN permite subconsultas."
  - "Confirmar validez."
explicacion: "Sí. `CASE WHEN (SELECT COUNT(*) FROM pedidos p WHERE p.id = c.cliente_id) > 5 THEN 'VIP' ELSE 'Normal' END` es una construcción válida y común para lógica condicional basada en agregaciones correlacionadas."
```

### 19 — ANY vs IN con NULLs

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["null", "in", "any", "logica"]
tipo: "mc"
enunciado: "Si la subconsulta devuelve {1, NULL, 3}, ¿cómo se comporta `x = ANY(subconsulta)` si x = 1?"
opciones_explicitas:
  - "Devuelve TRUE"
  - "Devuelve UNKNOWN"
  - "Devuelve FALSE"
  - "Error de ejecución"
respuesta: "Devuelve TRUE"
pasos:
  - "Analizar la lógica de = ANY con NULL."
  - "Aplicar regla de existencia."
  - "Determinar el resultado booleano."
explicacion: "`= ANY` busca si existe al menos un valor igual. Como 1 está en el conjunto, `1 = 1` es TRUE. La presencia de NULL en el conjunto no invalida la existencia del 1. El resultado de la comparación completa es TRUE. (Nota: `IN` también devuelve TRUE en este caso)."
```

### 20 — Correlación en WHERE con NOT IN

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["not-in", "null", "riesgo"]
tipo: "vf"
enunciado: "Si la subconsulta en `WHERE id NOT IN (...)` devuelve al menos un valor NULL, la condición completa se evalúa como UNKNOWN para todas las filas de la tabla principal, resultando en un conjunto de resultados vacío (como si no hubiera coincidencias)."
respuesta: verdadero
pasos:
  - "Analizar lógica de NOT IN con NULL."
  - "Recordar que NULL != cualquier valor."
  - "Determinar el efecto en la filtración."
explicacion: "Correcto. `x NOT IN (1, NULL, 3)` se evalúa como `x <> 1 AND x <> NULL AND x <> 3`. Como `x <> NULL` es UNKNOWN, la conjunción completa es UNKNOWN (falso en el contexto de WHERE). Por eso se recomienda evitar `NOT IN` con columnas que pueden contener NULLs."
```

### 21 — Subconsulta en FROM con GROUP BY

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["from", "group-by", "derived"]
tipo: "completar"
enunciado: "Al usar una subconsulta en `FROM` que ya contiene una cláusula `GROUP BY`, la consulta externa puede referenciar directamente las columnas agrupadas y las funciones de agregación resultantes sin necesidad de volver a agrupar, siempre que se use un {1} válido."
respuesta: "alias"
respuestas_validas:
  - "alias"
  - "ALIAS"
  - "nombre"
  - "NOMBRE"
  - "tabla derivada"
  - "DERIVED TABLE"
pasos:
  - "Analizar la visibilidad de columnas de tablas derivadas."
  - "Identificar la necesidad de nombrar la tabla."
  - "Confirmar que el alias permite el acceso."
explicacion: "La subconsulta en FROM es una tabla derivada. Para acceder a sus columnas (agregadas o no) en la consulta externa, es obligatorio asignarle un alias (ej. `FROM (SELECT dept, COUNT(*) FROM t GROUP BY dept) AS d`). Sin alias, las columnas internas no son accesibles."
```

### 22 — ANY con Operador de Desigualdad

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["any", "ne", "logica"]
tipo: "vf"
enunciado: "La expresión `columna <> ANY(subconsulta)` es lógicamente equivalente a `columna != ALL(subconsulta)`."
respuesta: falso
pasos:
  - "Analizar <> ANY."
  - "Analizar != ALL."
  - "Comparar lógicas."
explicacion: "Falso. `<> ANY` significa 'es diferente de AL MENOS UNO'. `!= ALL` significa 'es diferente de TODOS'. Son opuestos en cierta forma. `<> ANY` es verdadero si existe al menos un valor en la subconsulta que NO es igual a la columna. `!= ALL` es verdadero si la columna no es igual a NINGUNO de los valores. Ejemplo: x=5, sub={5, 10}. `5 <> ANY` es TRUE (5<>10). `5 != ALL` es FALSE (5=5)."
```

### 23 — Correlación en UPDATE

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["update", "correlacion", "set"]
tipo: "completar"
enunciado: "En la cláusula `SET` de una sentencia `UPDATE`, es posible utilizar una subconsulta correlacionada para calcular el nuevo valor de una columna basándose en registros de otra tabla, siempre que la subconsulta devuelva un {1} valor."
respuesta: "unico"
respuestas_validas:
  - "unico"
  - "unico"
  - "single"
  - "SINGLE"
  - "one"
  - "ONE"
  - "escalar"
  - "ESCALAR"
pasos:
  - "Analizar restricción de SET."
  - "Identificar que SET asigna un valor a una columna."
  - "Confirmar que solo un valor es permitido."
explicacion: "La cláusula `SET columna = (subconsulta)` requiere que la subconsulta devuelva exactamente un valor (escalar). Si devuelve múltiples filas, causará error. Si devuelve ninguna, asignará NULL (si no hay NOT NULL constraint)."
```

### 24 — Subconsulta en WHERE con BETWEEN

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["between", "subconsulta", "rango"]
tipo: "vf"
enunciado: "Es posible utilizar una subconsulta que devuelva dos valores (min y max) en una cláusula `BETWEEN` de la siguiente forma: `WHERE valor BETWEEN (SELECT MIN(col) FROM t) AND (SELECT MAX(col) FROM t)`."
respuesta: verdadero
pasos:
  - "Analizar sintaxis de BETWEEN."
  - "Verificar si acepta subconsultas en los extremos."
  - "Confirmar validez."
explicacion: "Sí, `BETWEEN` espera dos expresiones. Cada extremo puede ser una subconsulta escalar independiente. `WHERE valor BETWEEN (SELECT MIN(col) FROM t) AND (SELECT MAX(col) FROM t)` es sintaxis válida y común para filtrar dentro del rango de datos de otra tabla."
```

### 25 — Correlación en JOIN con ON

```yaml
metadata:
  materia: "sql"
  tema: "subconsultas-avanzadas"
  nivel: "avanzado"
  tags: ["join", "on", "correlacion", "lateral"]
tipo: "completar"
enunciado: "Para correlacionar una subconsulta en la cláusula `ON` de un `JOIN` estándar (no LATERAL), la subconsulta generalmente debe ser {1} (no correlacionada), o el motor puede rechazar la referencia a columnas externas."
respuesta: "no correlacionada"
respuestas_validas:
  - "no correlacionada"
  - "NO CORRELACIONADA"
  - "uncorrelated"
  - "UNCORRELATED"
  - "independiente"
  - "INDEPENDIENTE"
  - "no dependiente"
  - "NO DEPENDIENTE"
pasos:
  - "Analizar restricciones de JOIN estándar."
  - "Diferenciar JOIN de LATERAL."
  - "Identificar que JOIN estándar no permite referencia a la izquierda en ON."
explicacion: "En un `JOIN` estándar (INNER/LEFT), la cláusula `ON` no puede referenciar columnas de la tabla a la izquierda de la subconsulta a la derecha (no puede ser correlacionada). Para eso se necesita `LATERAL` o `CROSS APPLY`. Si la subconsulta no depende de la tabla izquierda, es 'no correlacionada' y es válida."
```