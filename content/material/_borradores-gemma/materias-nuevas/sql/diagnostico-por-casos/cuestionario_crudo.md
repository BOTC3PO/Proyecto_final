### 1 — Diagnóstico de bloqueo por deadlock en InnoDB
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["deadlock", "innodb", "transacciones"]
enunciado:
  Un administrador recibe un error 1213 (ER_LOCK_WAIT_TIMEOUT) en una aplicación web de alta concurrencia. Al revisar el log de errores de MySQL, se observa la siguiente línea:
  `Deadlock found when trying to get lock; try restarting transaction`.
  Si se sabe que dos sesiones están ejecutando UPDATEs cruzados sobre las mismas filas en tablas diferentes sin un orden consistente en las claves, ¿cuál es la causa raíz técnica más probable?
tipo: mc
opciones_explicitas:
  - "La tabla está corrupta y necesita un CHECK TABLE"
  - "Las transacciones están esperando recursos en un ciclo cerrado (ciclo de espera)"
  - "El buffer pool está lleno y no puede asignar memoria para el latch"
  - "El índice secundario está desactualizado y causa una búsqueda completa"
respuesta: Las transacciones están esperando recursos en un ciclo cerrado (ciclo de espera)
pasos:
  - "Identificar el error 1213 como un timeout de bloqueo."
  - "Analizar el patrón de acceso: UPDATEs cruzados en órdenes diferentes."
  - "Concluir que se trata de un deadlock clásico por ciclo de espera."
explicacion:
  El error 1213 indica explícitamente un deadlock. En InnoDB, esto ocurre cuando dos o más transacciones se bloquean mutuamente esperando que la otra libere un bloqueo de fila o tabla, formando un ciclo de dependencia. No es corrupción de datos ni problema de memoria.
```

### 2 — Completar sintaxis de CTE recursivo
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["cte", "recursion", "arbol"]
enunciado:
  Se necesita consultar una jerarquía de empleados (id, manager_id) utilizando una Expresión de Tabla Común (CTE) recursiva en PostgreSQL. El siguiente fragmento falla con un error de sintaxis en la cláusula de unión:
  ```sql
  WITH RECURSIVE employee_hierarchy AS (
      SELECT id, name, manager_id, 1 as level
      FROM employees
      WHERE manager_id IS NULL
      UNION _______
      SELECT e.id, e.name, e.manager_id, eh.level + 1
      FROM employees e
      JOIN employee_hierarchy eh ON e.manager_id = eh.id
  )
  SELECT * FROM employee_hierarchy;
  ```
  ¿Qué palabra clave falta en `UNION _______` para permitir la recursión?
tipo: completar
respuesta: ALL
respuestas_validas:
  - "ALL"
  - "all"
pasos:
  - "Reconocer la estructura de una CTE recursiva."
  - "Identificar que la parte recursiva debe unirse a la parte ancla."
  - "Recordar que SQL requiere `UNION ALL` explícitamente para CTEs recursivas (no `UNION` simple)."
explicacion:
  En SQL-99 y posteriores, las CTEs recursivas requieren obligatoriamente `UNION ALL` para combinar los resultados iniciales (ancla) con los resultados recursivos. `UNION` (sin ALL) no está permitido en la cláusula recursiva de algunas implementaciones o es semánticamente incorrecto porque eliminaría duplicados innecesarios en cada paso iterativo, afectando el rendimiento y la lógica de árbol.
```

### 3 — Verdadero/Falso sobre índices covering
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["index", "covering", "performance"]
enunciado:
  Verdadero o Falso: En MySQL con el motor InnoDB, un índice secundario (non-clustered index) que incluye todas las columnas solicitadas en la cláusula `SELECT` y en la cláusula `WHERE` puede servir como un "covering index", evitando el acceso a la tabla base (clustered index).
tipo: vf
respuesta: verdadero
pasos:
  - "Analizar la definición de covering index en InnoDB."
  - "Verificar si los índices secundarios en InnoDB almacenan la clave primaria."
  - "Confirmar que si todas las columnas están en el índice secundario, no se necesita saltar a la tabla base."
explicacion:
  En InnoDB, los índices secundarios almacenan implícitamente la clave primaria de la fila. Por lo tanto, si una consulta solo necesita columnas incluidas en el índice secundario (y la clave primaria), el optimizador puede devolver los datos directamente desde el índice sin acceder a la estructura clustered index (la tabla base). Esto se llama covering index y mejora significativamente el rendimiento.
```

### 4 — Diagnóstico de error de tipo de dato en JOIN
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["join", "tipos", "implicito"]
enunciado:
  Una consulta SQL Server falla silenciosamente o devuelve resultados incorrectos al unir una tabla `ventas` (columna `producto_id` de tipo `INT`) con una tabla `productos` (columna `id` de tipo `VARCHAR(50)`). El optimizador convierte los tipos implícitamente. ¿Cuál es el riesgo principal de esta conversión implícita en un JOIN grande?
tipo: mc
opciones_explicitas:
  - "La conversión causa un error de sintaxis inmediato y detiene la ejecución."
  - "Se produce un table scan en la tabla de la columna convertida, destruyendo el uso de índices."
  - "La base de datos elimina automáticamente las filas con datos no numéricos."
  - "Se crea un índice temporal en memoria que bloquea la tabla."
respuesta: Se produce un table scan en la tabla de la columna convertida, destruyendo el uso de índices.
pasos:
  - "Identificar la operación JOIN entre tipos incompatibles (INT y VARCHAR)."
  - "Analizar el efecto de la conversión implícita en la sargability (sargable)."
  - "Determinar que para convertir cada valor de la columna VARCHAR a INT para la comparación, SQL Server debe escanear toda la tabla."
explicacion:
  Cuando las columnas involucradas en un JOIN tienen tipos de datos diferentes, el motor de base de datos debe realizar una conversión implícita. Generalmente, convierte la columna de menor rango de prioridad a la de mayor rango. Esta conversión impide que se utilice el índice en esa columna (se vuelve "non-sargable"), resultando en un Table Scan o Index Scan completo, lo cual es extremadamente costoso en tablas grandes.
```

### 5 — Completar cláusula de particionamiento
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["partitioning", "pruning", "mysql"]
enunciado:
  En MySQL, se desea particionar una tabla de logs por rango de fechas para mejorar el rendimiento de las consultas que filtran por `fecha_registro`. La tabla tiene una columna `fecha_registro` de tipo `DATE`. ¿Qué función se debe usar en la cláusula `PARTITION BY RANGE` para que el particionamiento funcione correctamente?
  ```sql
  CREATE TABLE logs (
      id INT,
      fecha_registro DATE
  ) PARTITION BY RANGE ( _______ (fecha_registro) ) (
      PARTITION p0 VALUES LESS THAN (TO_DAYS('2023-01-01')),
      ...
  );
  ```
tipo: completar
respuesta: YEAR
respuestas_validas:
  - "YEAR"
  - "year"
  - "TO_DAYS"
  - "to_days"
pasos:
  - "Recordar las funciones permitidas en PARTITION BY RANGE en MySQL."
  - "Verificar que `YEAR()` devuelve un entero que puede usarse para comparar con `LESS THAN`."
  - "Confirmar que `TO_DAYS` también es válido pero `YEAR` es más común para particionamiento anual."
explicacion:
  MySQL requiere que la expresión en `PARTITION BY RANGE` sea una función que devuelva un entero. `YEAR()` es la función estándar para particionar por años. `TO_DAYS()` también es válido y se usa en el ejemplo de `VALUES LESS THAN`, pero la clave principal de la definición de partición suele ser `YEAR()` o la columna misma si es numérica. Dado el contexto de `LESS THAN (TO_DAYS(...))`, la función en la definición principal debe ser compatible, y `YEAR` es la respuesta típica para particionamiento anual, aunque `TO_DAYS` también funciona si se usa consistentemente. La respuesta más directa y común para este patrón es `YEAR`.
```

### 6 — Diagnóstico de error de agregación
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["group-by", "agregacion", "sql-standard"]
enunciado:
  Una consulta en PostgreSQL intenta calcular el promedio de ventas por categoría, pero falla con: `ERROR: column "ventas.cliente" must appear in the GROUP BY clause or be used in an aggregate function`.
  ```sql
  SELECT c.categoria, AVG(v.monto)
  FROM ventas v
  JOIN clientes c ON v.cliente_id = c.id
  GROUP BY c.categoria;
  ```
  Si el desarrollador también quiere incluir `c.cliente` en el resultado sin agregarlo, ¿cuál es la regla SQL que se está violando?
tipo: mc
opciones_explicitas:
  - "La regla de integridad referencial."
  - "La regla de que toda columna no agregada en SELECT debe estar en GROUP BY."
  - "La regla de exclusión de claves primarias."
  - "La regla de normalización Tercera Forma Normal."
respuesta: La regla de que toda columna no agregada en SELECT debe estar en GROUP BY.
pasos:
  - "Analizar la cláusula SELECT: tiene `c.categoria` y `AVG(v.monto)`."
  - "Analizar la cláusula GROUP BY: solo agrupa por `c.categoria`."
  - "Identificar que `c.cliente` no está en GROUP BY ni en una función de agregación."
  - "Concluir que se viola la regla de agrupación SQL estándar."
explicacion:
  En SQL estándar (y PostgreSQL lo aplica estrictamente), cualquier columna que aparezca en la lista `SELECT` y no esté dentro de una función de agregación (como SUM, AVG, COUNT) debe aparecer obligatoriamente en la cláusula `GROUP BY`. Si se quiere mostrar el cliente individual junto con el promedio de su categoría, la consulta está mal formulada conceptualmente (¿qué cliente mostrar si hay varios en la categoría?) o debe agregar por cliente también.
```

### 7 — Completar operador de ventana
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["window-functions", "ranking", "postgres"]
enunciado:
  Se necesita asignar un número de fila secuencial a cada registro en el resultado de una consulta, sin importar el orden, pero asegurando que el número sea consistente para la sesión. En PostgreSQL, ¿qué función de ventana se debe usar en la cláusula `OVER()` para lograr esto?
tipo: completar
respuesta: ROW_NUMBER
respuestas_validas:
  - "ROW_NUMBER"
  - "row_number"
  - "ROWNUMBER"
  - "rownumber"
pasos:
  - "Identificar la necesidad de numeración secuencial única."
  - "Diferenciar entre `ROW_NUMBER`, `RANK` y `DENSE_RANK`."
  - "Seleccionar `ROW_NUMBER` para una secuencia 1, 2, 3... sin saltos ni empates."
explicacion:
  `ROW_NUMBER()` asigna un número entero único y secuencial a cada fila dentro de la partición del resultado. A diferencia de `RANK()` o `DENSE_RANK()`, no maneja empates (si no hay `ORDER BY`, el orden es arbitrario pero consistente durante la ejecución, asignando 1, 2, 3... a todas las filas).
```

### 8 — Verdadero/Falso sobre transacciones ACID
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["transacciones", "acid", "isolacion"]
enunciado:
  Verdadero o Falso: La propiedad de "Aislamiento" (Isolation) en ACID garantiza que las transacciones concurrentes no interfieran entre sí, pero no garantiza que los datos leídos sean los más recientes si el nivel de aislamiento es `READ UNCOMMITTED`.
tipo: vf
respuesta: verdadero
pasos:
  - "Definir la propiedad de Aislamiento."
  - "Analizar el comportamiento del nivel `READ UNCOMMITTED`."
  - "Confirmar que `READ UNCOMMITTED` permite leer datos no confirmados (dirty reads)."
explicacion:
  La propiedad de Aislamiento se refiere a cómo las transacciones interactúan. En el nivel `READ UNCOMMITTED`, el aislamiento es mínimo. Una transacción puede leer datos modificados por otra transacción que aún no ha sido confirmada (commit). Si la otra transacción hace rollback, la primera transacción ha leído datos "sucios" que nunca existieron oficialmente, por lo que no tiene la garantía de ver solo datos confirmados.
```

### 9 — Diagnóstico de error de subconsulta correlacionada
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["subconsulta", "correlacion", "performance"]
enunciado:
  Una consulta que utiliza una subconsulta correlacionada en la cláusula `WHERE` está tardando demasiado.
  ```sql
  SELECT * FROM empleados e
  WHERE e.salario > (SELECT AVG(salario) FROM empleados WHERE depto_id = e.depto_id);
  ```
  ¿Cuál es la técnica principal para optimizar esta consulta y evitar la re-ejecución de la subconsulta para cada fila?
tipo: mc
opciones_explicitas:
  - "Cambiar el operador `>` por `IN`."
  - "Reescribir la subconsulta como una CTE o JOIN con una vista agregada previa."
  - "Agregar un índice en la columna `id`."
  - "Usar `EXPLAIN ANALYZE` para forzar el uso de memoria."
respuesta: Reescribir la subconsulta como una CTE o JOIN con una vista agregada previa.
pasos:
  - "Identificar que la subconsulta es correlacionada (depende de `e.depto_id`)."
  - "Entender que esto causa una ejecución por fila (nested loop)."
  - "Proponer la materialización previa del promedio por departamento."
explicacion:
  Las subconsultas correlacionadas se ejecutan una vez por cada fila de la tabla externa, lo cual es ineficiente si la tabla es grande. La optimización estándar es calcular el valor agregado (promedio por departamento) una sola vez, almacenándolo en una CTE o tabla derivada, y luego hacer un JOIN con ella. Esto transforma la complejidad de O(N*M) a O(N+M).
```

### 10 — Completar sintaxis de JSON en PostgreSQL
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["json", "postgres", "extraccion"]
enunciado:
  En PostgreSQL, se tiene una columna de tipo `JSONB` llamada `datos` que contiene: `{"nombre": "Juan", "edad": 30}`. Para extraer el valor numérico de la edad como un tipo entero (`INTEGER`), ¿qué operador se debe usar después de la columna?
  ```sql
  SELECT datos -> 'edad' FROM usuarios; -- Esto devuelve JSON
  SELECT datos _______ 'edad' FROM usuarios; -- Esto devuelve Integer
  ```
tipo: completar
respuesta: ->>
respuestas_validas:
  - "->>"
  - ">>"
  - "-> >"
  - "> >"
pasos:
  - "Diferenciar entre los operadores de extracción JSON en PostgreSQL."
  - "Recordar que `->` devuelve JSON."
  - "Recordar que `->>` devuelve texto (text)."
  - "Notar que la pregunta pide un entero, pero `->>` devuelve texto que se castea implícitamente o explícitamente. Sin embargo, el operador de extracción de valor escalar como texto es `->>`. No hay operador directo `->> int`. Pero entre `->` y `->>`, `->>` es el que extrae el valor sin las comillas JSON. Para obtener un entero literal, se suele usar `datos->>'edad'::int`. El operador de extracción es `->>`."
explicacion:
  El operador `->` extrae un campo JSON como un objeto JSON. El operador `->>` extrae el campo como texto (`text`). Para obtener un entero, se debe usar `->>` seguido de un cast (`::int`). No existe un operador único que devuelva directamente un integer sin cast, pero `->>` es el operador de extracción de valor escalar.
```

### 11 — Diagnóstico de error de locking en Read Committed
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["locking", "phantom", "isolation"]
enunciado:
  Una aplicación ejecuta una consulta `SELECT` dentro de una transacción en nivel de aislamiento `READ COMMITTED` (default en PostgreSQL). Entre la primera y la segunda ejecución de la misma consulta `SELECT` dentro de la misma transacción, otra transacción inserta y confirma nuevos registros que cumplen la condición del `WHERE`. ¿Qué fenómeno ocurre?
tipo: mc
opciones_explicitas:
  - "Lectura sucia (Dirty Read)"
  - "Lectura fantasma (Phantom Read)"
  - "Lectura no repetible (Non-repeatable Read)"
  - "Deadlock"
respuesta: Lectura fantasma (Phantom Read)
pasos:
  - "Definir READ COMMITTED."
  - "Analizar el escenario: inserción de nuevas filas entre lecturas."
  - "Identificar que las filas anteriores no cambiaron, sino que aparecieron nuevas."
  - "Clasificar como Phantom Read."
explicacion:
  En el nivel `READ COMMITTED`, cada sentencia SQL ve solo datos confirmados hasta el momento de esa sentencia. Si una transacción ejecuta dos veces la misma consulta y otra transacción inserta nuevos datos que cumplen el criterio entre ambas, la segunda consulta devolverá filas que la primera no vio. Esto se llama Phantom Read. `READ COMMITTED` no previene esto; `REPEATABLE READ` o `SERIALIZABLE` sí lo previenen en PostgreSQL (usando MVCC).
```

### 12 — Completar cláusula de actualización masiva
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["update", "join", "mysql"]
enunciado:
  En MySQL, para actualizar una tabla basada en los datos de otra, se utiliza la sintaxis `UPDATE tabla1 JOIN tabla2 ...`. Si se quiere actualizar `tabla1` con valores de `tabla2` donde las claves coinciden, y luego filtrar por una condición en `tabla1`, ¿en qué cláusula se debe poner el filtro `WHERE` que se aplica a `tabla1`?
tipo: completar
respuesta: WHERE
pasos:
  - "Recordar la sintaxis de UPDATE con JOIN en MySQL."
  - "Identificar que el filtro de la tabla a actualizar va en `WHERE`."
  - "Confirmar que `WHERE` se aplica después del JOIN."
explicacion:
  En MySQL, la sintaxis es `UPDATE t1 JOIN t2 ON ... SET ... WHERE ...`. La cláusula `WHERE` se aplica a las filas resultantes del JOIN. Si el filtro es específico de `t1`, se escribe `WHERE t1.campo = valor`. Es importante distinguir entre la condición de JOIN (`ON`) y el filtro de actualización (`WHERE`).
```

### 13 — Verdadero/Falso sobre índices bitmap
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["bitmap-index", "postgres", "low-cardinality"]
enunciado:
  Verdadero o Falso: Los índices Bitmap en PostgreSQL son particularmente eficientes para columnas de baja cardinalidad (pocos valores distintos, como 'estado' o 'género') cuando se usan con operadores lógicos `AND` u `OR`.
tipo: vf
respuesta: verdadero
pasos:
  - "Definir baja cardinalidad."
  - "Analizar cómo funcionan los índices Bitmap (bitmaps de bits)."
  - "Confirmar que la intersección/unión de bitmaps es rápida para pocos valores."
explicacion:
  Los índices bitmap son ideales para columnas de baja cardinalidad. El motor crea un bitmap para cada valor posible de la columna. Para consultas con `AND`/`OR`, realiza operaciones bitwise sobre estos bitmap, lo cual es mucho más rápido que navegar por un B-Tree para cada fila, especialmente cuando el resultado final es un subconjunto grande de la tabla.
```

### 14 — Diagnóstico de error de división por cero
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["division", "seguridad", "sql-standard"]
enunciado:
  Una consulta SQL intenta calcular el promedio de ventas por día y falla con un error de "Division by zero". La tabla `ventas` tiene días sin ventas (filas en `calendario` no tienen registros en `ventas`). ¿Cuál es la forma más segura de evitar este error sin perder los días con cero ventas?
tipo: mc
opciones_explicitas:
  - "Eliminar los días con cero ventas usando `HAVING COUNT > 0`."
  - "Usar `COALESCE(SUM(v.monto), 0) / NULLIF(COUNT(v.id), 0)`."
  - "Cambiar el tipo de dato de `monto` a `TEXT`."
  - "Usar `IFNULL` en la columna de fecha."
respuesta: Usar `COALESCE(SUM(v.monto), 0) / NULLIF(COUNT(v.id), 0)`.
pasos:
  - "Identificar la causa: división por cero cuando COUNT es 0."
  - "Analizar `NULLIF(COUNT, 0)` para devolver NULL si el conteo es 0."
  - "Confirmar que dividir por NULL devuelve NULL en lugar de error."
explicacion:
  `NULLIF(COUNT(v.id), 0)` devuelve `NULL` si el conteo es 0. En SQL, cualquier operación aritmética con `NULL` devuelve `NULL`, no un error. Por lo tanto, `SUM / NULLIF` evita el error de división por cero. `COALESCE` se usa para manejar el resultado final si se desea un 0 en lugar de NULL, pero la clave para evitar el error es `NULLIF`.
```

### 15 — Completar sintaxis de CTE recursiva (SQL Server)
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["cte", "sql-server", "recursion"]
enunciado:
  En SQL Server, al definir una CTE recursiva, la primera parte (ancla) y la segunda parte (recursiva) deben unirse. ¿Qué palabra clave se usa para unir la parte recursiva con la CTE definida?
  ```sql
  WITH RecursiveCTE AS (
      -- Ancla
      SELECT id, name, 0 as level
      FROM Categories
      WHERE parent_id IS NULL
      UNION ALL
      -- Recursiva
      SELECT c.id, c.name, r.level + 1
      FROM Categories c
      _______ RecursiveCTE r ON c.parent_id = r.id
  )
  SELECT * FROM RecursiveCTE;
  ```
tipo: completar
respuesta: JOIN
respuestas_validas:
  - "JOIN"
  - "join"
  - "INNER JOIN"
  - "inner join"
pasos:
  - "Reconocer la sintaxis de CTE recursiva en SQL Server."
  - "Identificar que la parte recursiva debe unir la tabla base con la CTE."
  - "Usar `JOIN` (o `INNER JOIN`) para conectar las filas."
explicacion:
  En la parte recursiva de una CTE, se debe unir la tabla base (`Categories`) con la propia CTE (`RecursiveCTE`) utilizando una cláusula `JOIN` estándar (generalmente `INNER JOIN` o `JOIN`). Esto permite acceder a las filas generadas en la iteración anterior.
```

### 16 — Diagnóstico de error de agrupación en MySQL
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["group-by", "mysql", "sql_mode"]
enunciado:
  Una consulta en MySQL 5.7 (con `sql_mode` por defecto) ejecuta: `SELECT categoria, nombre, MAX(precio) FROM productos GROUP BY categoria;`. Esta consulta se ejecuta sin error, pero `nombre` puede ser arbitrario. ¿Qué cambio en `sql_mode` haría que esta consulta fallara con un error de sintaxis?
tipo: mc
opciones_explicitas:
  - "Agregar `ONLY_FULL_GROUP_BY`."
  - "Eliminar `STRICT_TRANS_TABLES`."
  - "Agregar `NO_ZERO_DATE`."
  - "Eliminar `ANSI_QUOTES`."
respuesta: Agregar `ONLY_FULL_GROUP_BY`.
pasos:
  - "Analizar la consulta: `GROUP BY categoria` pero `SELECT` incluye `nombre` (no agregado)."
  - "Recordar que por defecto MySQL permite esto (filas arbitrarias)."
  - "Identificar que `ONLY_FULL_GROUP_BY` prohíbe esto estrictamente."
explicacion:
  Por defecto, MySQL (antes de la versión 5.7.5 o con configuración laxa) permite seleccionar columnas no agregadas que no están en `GROUP BY`, devolviendo un valor arbitrario de ese grupo. El modo `ONLY_FULL_GROUP_BY` (parte de `sql_mode` estándar SQL) prohíbe esto, forzando a que toda columna en `SELECT` esté en `GROUP BY` o sea parte de una función de agregación.
```

### 17 — Completar operador de intersección
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["set-operations", "intersect", "sql-standard"]
enunciado:
  Se tienen dos tablas `clientes_A` y `clientes_B`. Se desea obtener la lista de clientes que están en AMBAS tablas. ¿Qué operador de conjunto se debe usar?
tipo: completar
respuesta: INTERSECT
pasos:
  - "Identificar la operación lógica: intersección de conjuntos."
  - "Seleccionar el operador SQL estándar para intersección."
explicacion:
  El operador `INTERSECT` devuelve las filas que son comunes a ambas consultas. Es equivalente a un `INNER JOIN` en términos de resultado, pero opera a nivel de conjuntos de resultados completos.
```

### 18 — Verdadero/Falso sobre índices full-text
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["full-text", "busqueda", "mysql"]
enunciado:
  Verdadero o Falso: En MySQL, un índice Full-Text no puede ser utilizado si la consulta de búsqueda contiene una palabra que es una "stopword" (palabra de parada) como 'the' o 'and'.
tipo: vf
respuesta: verdadero
pasos:
  - "Definir stopwords en el contexto de índices Full-Text."
  - "Analizar si el índice las indexa."
  - "Confirmar que las stopwords se ignoran y no se indexan."
explicacion:
  Las stopwords son palabras comunes que se omiten durante la indexación y la búsqueda de texto completo para ahorrar espacio y mejorar la relevancia. Si una consulta busca solo stopwords, el índice no las encuentra (o devuelve resultados vacíos/inesperados dependiendo de la implementación), ya que no existen en el índice.
```

### 19 — Diagnóstico de error de locking en UPDATE con índice
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["locking", "index", "scan"]
enunciado:
  Una actualización `UPDATE usuarios SET activo = 0 WHERE email = 'test@test.com';` está causando bloqueos de tabla completa en lugar de bloqueos de fila, a pesar de que `email` tiene un índice. ¿Cuál es la causa más probable?
tipo: mc
opciones_explicitas:
  - "El índice es descriptivo y no único."
  - "La consulta no usa el índice debido a una función en la columna (ej. `LOWER(email)`)."
  - "La tabla está vacía."
  - "El motor de almacenamiento es InnoDB pero la tabla es MyISAM."
respuesta: La consulta no usa el índice debido a una función en la columna (ej. `LOWER(email)`).
pasos:
  - "Analizar la condición `WHERE`."
  - "Si la condición es `WHERE LOWER(email) = ...`, el índice B-Tree no se usa."
  - "Determinar que el escaneo de tabla (table scan) bloquea todas las filas leídas."
explicacion:
  Si la columna indexada está envuelta en una función (como `LOWER()`, `UPPER()`, etc.) en la cláusula `WHERE`, el optimizador no puede usar el índice B-Tree estándar (a menos que sea un índice funcional, disponible en versiones recientes de PostgreSQL/MySQL). Esto fuerza un Table Scan, que bloquea todas las filas leídas, causando bloqueos de tabla o fila masivos.
```

### 20 — Completar sintaxis de ventana para ranking
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["window-functions", "rank", "empates"]
enunciado:
  Se necesita asignar un rango a los empleados por salario, donde los empleados con el mismo salario tengan el mismo rango, y el siguiente rango sea el siguiente número consecutivo (sin saltos). ¿Qué función de ventana se debe usar?
tipo: completar
respuesta: DENSE_RANK
pasos:
  - "Diferenciar `RANK` (salta números: 1, 2, 2, 4) de `DENSE_RANK` (no salta: 1, 2, 2, 3)."
  - "Seleccionar `DENSE_RANK` para rangos consecutivos."
explicacion:
  `DENSE_RANK()` asigna el mismo rango a los empates y el siguiente rango consecutivo al siguiente valor distinto. A diferencia de `RANK()`, no deja huecos en la secuencia de rangos.
```

### 21 — Diagnóstico de error de tipo de dato en CAST
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["cast", "conversión", "errores"]
enunciado:
  Una consulta intenta convertir una cadena '123abc' a un tipo entero `INT` en SQL Server. ¿Qué error se produce?
tipo: mc
opciones_explicitas:
  - "Conversión exitosa, devuelve 123."
  - "Error de conversión de varchar a int."
  - "Conversión exitosa, devuelve 0."
  - "Error de sintaxis."
respuesta: Error de conversión de varchar a int.
pasos:
  - "Analizar la cadena '123abc'."
  - "Determinar si es un número válido."
  - "Confirmar que la conversión falla porque no es un número entero válido."
explicacion:
  SQL Server lanza un error de conversión si la cadena no representa un valor numérico válido para el tipo de destino. '123abc' no es un entero válido, por lo que la conversión falla. Algunas bases de datos (como MySQL en modo estricto) también fallan, mientras que otras (como PostgreSQL con `TRY_CAST`) podrían devolver NULL, pero el error es el comportamiento estándar de `CAST`.
```

### 22 — Completar cláusula de particionamiento (PostgreSQL)
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["partitioning", "postgres", "list"]
enunciado:
  En PostgreSQL, para particionar una tabla por una columna de estado (`estado` con valores 'activo', 'inactivo', 'pendiente'), ¿qué tipo de particionamiento es más adecuado y qué palabra clave se usa?
tipo: completar
respuesta: LIST
pasos:
  - "Identificar que los valores son discretos y no un rango continuo."
  - "Seleccionar `PARTITION BY LIST` para valores específicos."
explicacion:
  `PARTITION BY LIST` se utiliza cuando se desea particionar por una lista explícita de valores. Es adecuado para columnas con cardinalidad baja y valores discretos (como estados, países, etc.).
```

### 23 — Verdadero/Falso sobre índices espaciales
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["spatial", "gis", "index"]
enunciado:
  Verdadero o Falso: Un índice espacial (R-Tree en PostgreSQL/MySQL) acelera las consultas de proximidad (ej. `ST_DWithin`) pero no las consultas de igualdad exacta en coordenadas geométricas.
tipo: vf
respuesta: verdadero
pasos:
  - "Analizar el propósito de los índices espaciales."
  - "Confirmar que están optimizados para búsquedas de rango y proximidad."
  - "Notar que la igualdad exacta es un caso de rango muy pequeño, pero el índice no es el método primario para igualdad simple (aunque funciona, su fortaleza es el rango)."
explicacion:
  Los índices espaciales (R-Tree, GiST) están diseñados para acelerar búsquedas basadas en distancia y contención (intersección, dentro de, etc.). Para igualdad exacta de un punto específico, un índice B-Tree en una columna derivada (como latitud/longitud separadas) podría ser más eficiente, pero el índice espacial sí maneja igualdad (como un rango de tamaño 0). La afirmación es verdadera en el sentido de que su *ventaja* principal es la proximidad, no la igualdad simple.
```

### 24 — Diagnóstico de error de locking en DELETE
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["delete", "locking", "cascade"]
enunciado:
  Una sentencia `DELETE FROM pedidos WHERE cliente_id = 123;` falla con un error de bloqueo si hay una transacción abierta que está leyendo filas de la tabla `pedidos` con un nivel de aislamiento `REPEATABLE READ`. ¿Qué ocurre exactamente?
tipo: mc
opciones_explicitas:
  - "El DELETE se ejecuta, pero la otra transacción no ve el cambio hasta que se confirme."
  - "El DELETE espera a que la otra transacción libere los bloques de lectura."
  - "El DELETE falla inmediatamente con un error de deadlock."
  - "La base de datos elimina los datos pero no los registros del índice."
respuesta: El DELETE espera a que la otra transacción libere los bloques de lectura.
pasos:
  - "Analizar el aislamiento `REPEATABLE READ`."
  - "Determinar que las lecturas toman un snapshot, pero los writes (DELETE) necesitan bloqueos."
  - "Concluir que el DELETE bloquea hasta que los lectores anteriores terminen (en algunos motores) o espera el cierre de la transacción de lectura."
explicacion:
  En `REPEATABLE READ`, las transacciones de lectura toman un snapshot consistente al inicio. Las escrituras (DELETE) necesitan adquirir bloqueos de exclusión. Si una transacción de lectura está activa y ha leído las filas (o las páginas), la transacción de DELETE puede tener que esperar a que la transacción de lectura termine para asegurar la consistencia, dependiendo de la implementación específica de MVCC y locking.
```

### 25 — Completar sintaxis de actualización con CTE
```yaml
metadata:
  materia: "sql"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["update", "cte", "postgres"]
enunciado:
  En PostgreSQL, para actualizar una tabla usando los resultados de una CTE, se utiliza la cláusula `FROM`. ¿Cuál es la sintaxis correcta?
  ```sql
  WITH cte AS (SELECT id FROM tabla_b WHERE activo = true)
  UPDATE tabla_a
  SET activo = false
  _______ cte ON tabla_a.id = cte.id;
  ```
tipo: completar
respuesta: FROM
pasos:
  - "Recordar la sintaxis de UPDATE con CTE en PostgreSQL."
  - "Identificar que la tabla derivada se especifica en `FROM`."
explicacion:
  En PostgreSQL, la sintaxis para UPDATE con una tabla derivada o CTE es `UPDATE tabla SET ... FROM cte WHERE ...`. La cláusula `FROM` es obligatoria para especificar la fuente de datos adicional.
```