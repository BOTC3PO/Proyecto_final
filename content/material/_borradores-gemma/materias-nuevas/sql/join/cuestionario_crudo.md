### 1 — Diferencia entre INNER y LEFT JOIN
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["inner", "left", "semantica"]
enunciado: |
  Dado que la tabla `Pedidos` tiene 100 registros y la tabla `Clientes` tiene 50 registros,
  y solo 40 clientes han realizado pedidos (relación 1:N), ¿cuántos registros devuelve
  un `INNER JOIN` entre `Clientes` y `Pedidos`?
respuesta: 40
tipo: completar
pasos:
  - "Identificar que INNER JOIN solo devuelve filas con coincidencia en ambas tablas."
  - "Contar los clientes que tienen al menos un pedido."
  - "El resultado es el número de filas coincidentes."
explicacion: "El INNER JOIN filtra los registros que no tienen correspondencia en la otra tabla. Solo se devuelven los 40 clientes que tienen pedidos asociados."
```

### 2 — Sintaxis de CROSS JOIN
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["cross", "producto-cartesiano"]
enunciado: |
  Completa la consulta para obtener el producto cartesiano entre la tabla `Colores` 
  (10 filas) y la tabla `Tamaños` (5 filas):
  SELECT * FROM Colores ______ Tamaños;
respuesta: CROSS JOIN
tipo: completar
pasos:
  - "Identificar la necesidad de combinar cada fila de la primera tabla con cada fila de la segunda."
  - "Recordar la sintaxis SQL para el producto cartesiano."
  - "Escribir la palabra clave correcta."
explicacion: "CROSS JOIN genera el producto cartesiano de las dos tablas, resultando en 10 * 5 = 50 filas."
```

### 3 — Verdadero/Falso: Self Join
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["self-join", "alias"]
enunciado: |
  Es posible realizar un JOIN de una tabla consigo misma (Self-Join) utilizando aliases
  para distinguir las columnas de cada instancia de la tabla.
respuesta: verdadero
tipo: vf
pasos:
  - "Evaluar si SQL permite referenciar la misma tabla múltiples veces en el FROM."
  - "Verificar el uso de aliases para desambiguar columnas."
explicacion: "El Self-Join es una técnica estándar donde se asignan aliases diferentes (ej. e1, e2) a la misma tabla para relacionar filas dentro de ella misma."
```

### 4 — Resultado de RIGHT JOIN con NULLs
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["right", "nulls"]
enunciado: |
  En una consulta `SELECT * FROM A RIGHT JOIN B ON A.id = B.a_id`, si existe un registro
  en `B` que NO tiene coincidencia en `A`, ¿qué valor tendrán las columnas de `A` en el resultado?
respuesta: NULL
tipo: completar
pasos:
  - "Entender que RIGHT JOIN incluye todos los registros de la tabla derecha (B)."
  - "Determinar el valor de las columnas de la tabla izquierda (A) cuando no hay match."
explicacion: "Las columnas de la tabla que no tiene coincidencia se llenan con valores NULL por defecto en SQL estándar."
```

### 5 — Corrección de Ambigüedad en JOIN
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["alias", "ambiguedad"]
enunciado: |
  Dada la consulta:
  SELECT id, name FROM Empleados e JOIN Departamentos d ON e.dept_id = d.id;
  Si `Empleados` y `Departamentos` tienen ambas una columna llamada `id`, ¿cómo se debe
  especificar la columna `id` en el SELECT para evitar error?
respuesta: e.id
tipo: completar
respuestas_validas:
  - "e.id"
  - "d.id"
pasos:
  - "Identificar el conflicto de nombres (ambigüedad)."
  - "Usar el alias de la tabla correspondiente para desambiguar."
explicacion: "Se debe usar el prefijo con el alias definido en el FROM (e. para Empleados, d. para Departamentos) para indicar explícitamente de qué tabla se extrae la columna."
```

### 6 — INNER JOIN vs WHERE implícito
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["inner", "where", "equivalencia"]
enunciado: |
  Verdadero o Falso: La siguiente consulta es funcionalmente equivalente a usar
  `INNER JOIN ... ON`:
  `SELECT * FROM A, B WHERE A.id = B.a_id;`
respuesta: verdadero
tipo: vf
pasos:
  - "Comparar la semántica del estilo antiguo (comma join) con el estilo ANSI (JOIN ON)."
  - "Verificar si el filtro en WHERE actúa como condición de unión."
explicacion: "El estilo antiguo de JOIN (comma join) con la condición en WHERE produce el mismo resultado que un INNER JOIN moderno, aunque se desaconseja por legibilidad."
```

### 7 — Full Outer Join
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["full-outer", "union"]
enunciado: |
  Completa la cláusula para obtener todos los registros de `Tabla1` y `Tabla2`,
  incluyendo aquellos que no tienen coincidencia en la otra tabla:
  SELECT * FROM Tabla1 ______ FULL OUTER JOIN Tabla2 ON ...;
respuesta: ______
tipo: completar
respuestas_validas:
  - "FULL"
  - "FULL OUTER"
pasos:
  - "Identificar la necesidad de incluir registros no coincidentes de ambas tablas."
  - "Seleccionar la palabra clave SQL para esta operación."
explicacion: "FULL (o FULL OUTER) JOIN devuelve todas las filas de ambas tablas, rellenando con NULL donde no hay coincidencia."
```

### 8 — Semi-Join con EXISTS
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["exists", "semi-join", "optimizacion"]
enunciado: |
  Para obtener los nombres de clientes que tienen al menos un pedido, sin duplicar
  el nombre del cliente, ¿qué operador es más eficiente que un DISTINCT JOIN?
respuesta: EXISTS
tipo: completar
pasos:
  - "Buscar una forma de filtrar sin duplicar filas."
  - "Identificar el operador que verifica existencia sin devolver columnas de la subconsulta."
explicacion: "EXISTS realiza un semi-join: devuelve TRUE si la subconsulta retorna al menos una fila, evitando la duplicación de datos de la tabla principal."
```

### 9 — Anti-Join con NOT EXISTS
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["not-exists", "anti-join"]
enunciado: |
  Verdadero o Falso: Una consulta con `WHERE NOT EXISTS (SELECT 1 FROM B WHERE ...)`
  se comporta como un Anti-Join, devolviendo filas de A que NO tienen match en B.
respuesta: verdadero
tipo: vf
pasos:
  - "Analizar el efecto del operador NOT en EXISTS."
  - "Confirmar que filtra las coincidencias en lugar de incluirlas."
explicacion: "NOT EXISTS filtra las filas donde la subconsulta encontraría coincidencia, actuando como un Anti-Join (equivalente a LEFT JOIN ... WHERE B.id IS NULL)."
```

### 10 — Join con múltiples condiciones
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["on-clause", "logica"]
enunciado: |
  En la cláusula ON de un JOIN, ¿es posible usar más de una condición de unión
  combinadas con AND?
respuesta: verdadero
tipo: vf
pasos:
  - "Evaluar la sintaxis de la cláusula ON."
  - "Verificar si acepta expresiones booleanas complejas."
explicacion: "Sí, la cláusula ON acepta cualquier expresión booleana válida, permitiendo múltiples condiciones de unión (ej. ON A.id = B.id AND A.fecha = B.fecha)."
```

### 11 — Lateral Join (Unnesting)
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["lateral", "arrays", "postgres"]
enunciado: |
  En PostgreSQL, ¿qué tipo de JOIN permite referenciar columnas de la tabla de la
  izquierda dentro de una función de tabla en la cláusula FROM de la derecha?
respuesta: LATERAL
tipo: completar
pasos:
  - "Identificar la necesidad de pasar datos de la fila actual a una función."
  - "Recordar la palabra clave para funciones de tabla dependientes."
explicacion: "LATERAL permite que la subconsulta o función de tabla en la derecha dependa de las columnas de la tabla en la izquierda, similar a un CROSS JOIN lateral."
```

### 12 — Join con Tabla Derivada
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["subconsulta", "alias", "from"]
enunciado: |
  Completa la sintaxis para unir `Pedidos` con una subconsulta llamada `ResumenVentas`:
  SELECT * FROM Pedidos p JOIN (SELECT cliente_id, SUM(total) FROM Ventas GROUP BY cliente_id) ______ ON p.cliente_id = r.cliente_id;
respuesta: ResumenVentas r
tipo: completar
respuestas_validas:
  - "ResumenVentas r"
  - "ResumenVentas AS r"
  - "r"
  - "AS r"
pasos:
  - "Identificar que la subconsulta debe tener un alias en el FROM."
  - "Proporcionar el alias para referenciarla en el JOIN."
explicacion: "Toda subconsulta en la cláusula FROM debe tener un alias obligatorio para poder ser referenciada en el JOIN ON o en el SELECT."
```

### 13 — Join con Tabla Temporal
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["temp-table", "scope"]
enunciado: |
  Verdadero o Falso: Una tabla temporal local (#TempTable) creada en la sesión actual
  no es visible para un JOIN en otra sesión de base de datos.
respuesta: verdadero
tipo: vf
pasos:
  - "Verificar el alcance (scope) de las tabulares temporales locales."
  - "Confirmar la independencia de sesiones."
explicacion: "Las tabulares temporales locales son visibles solo para la sesión que las creó y se eliminan al cerrar la conexión."
```

### 14 — Join con Función de Ventana
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["window-function", "performance"]
enunciado: |
  ¿Es recomendable usar un JOIN con una tabla derivada que contiene una función de
  ventana (ej. ROW_NUMBER()) para filtrar filas, en lugar de usar la ventana en el WHERE?
respuesta: falso
tipo: vf
pasos:
  - "Evaluar la eficiencia de calcular ventanas en un JOIN vs filtrar directamente."
  - "Considerar que las ventanas se calculan antes de los filtros en la cláusula WHERE."
explicacion: "Es más eficiente usar la función de ventana directamente en el SELECT y filtrar en un CTE o subconsulta externa, ya que el JOIN puede expandir el conjunto de datos antes de filtrar, aumentando el costo."
```

### 15 — Join con Collation Diferente
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["collation", "error", "case-sensitive"]
enunciado: |
  Si dos columnas en un JOIN tienen diferentes collations (ej. una es case-sensitive y
  otra no), ¿puede ocurrir un error o un comportamiento inesperado?
respuesta: verdadero
tipo: vf
pasos:
  - "Analizar el impacto de la collation en la comparación de cadenas."
  - "Confirmar que SQL puede lanzar error o producir resultados incorrectos."
explicacion: "Sí, SQL puede lanzar un error de collation incompatible o requerir una conversión implícita que afecte el rendimiento o la precisión de la coincidencia."
```

### 16 — Join con Datos Null en Clave
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["null", "match", "comportamiento"]
enunciado: |
  En un INNER JOIN, ¿cómo se comparan dos valores NULL en la columna de unión?
respuesta: No coinciden
tipo: completar
respuestas_validas:
  - "No coinciden"
  - "No hay match"
  - "No se unen"
pasos:
  - "Recordar la regla de comparación de NULL en SQL (NULL != NULL)."
  - "Determinar si se generan filas de resultado."
explicacion: "NULL no es igual a NULL. Por lo tanto, las filas con NULL en la clave de unión no se unen en un INNER JOIN."
```

### 17 — Join con Tabla de Configuración
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["lookup", "dimension", "fact"]
enunciado: |
  Para obtener el nombre descriptivo de un código de país almacenado en una tabla
  `CodigosPais`, ¿qué tipo de JOIN es el más adecuado?
respuesta: INNER JOIN
tipo: completar
pasos:
  - "Identificar que solo se quieren registros que tienen un código válido en la tabla de configuración."
  - "Seleccionar el JOIN que descarta los no coincidentes."
explicacion: "INNER JOIN es ideal para tablas de lookup (dimensiones) donde se asume que cada registro de hecho tiene una dimensión válida asociada."
```

### 18 — Join con Tabla de Hechos Vacía
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["empty-set", "left-join"]
enunciado: |
  Si `TablaHechos` está vacía y se ejecuta `SELECT * FROM TablaDimensiones LEFT JOIN TablaHechos ON ...`, ¿qué se devuelve?
respuesta: Todos los de Dimensiones
tipo: completar
respuestas_validas:
  - "Todos los de Dimensiones"
  - "Todas las filas de Dimensiones"
  - "Dimensiones"
pasos:
  - "Analizar el comportamiento de LEFT JOIN cuando la tabla derecha está vacía."
  - "Confirmar que se conservan las filas de la tabla izquierda."
explicacion: "LEFT JOIN devuelve todas las filas de la tabla izquierda (Dimensiones), rellenando con NULL las columnas de la tabla derecha (Hechos)."
```

### 19 — Join con Expresión Compleja
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["expression", "join-condition"]
enunciado: |
  Verdadero o Falso: La condición de JOIN en `ON` puede contener funciones de cadena,
  matemáticas o conversiones de tipo.
respuesta: verdadero
tipo: vf
pasos:
  - "Evaluar la flexibilidad de la cláusula ON."
  - "Confirmar que acepta expresiones SQL estándar."
explicacion: "Sí, la cláusula ON es una expresión booleana que puede incluir cualquier función o operación válida en SQL."
```

### 20 — Join con Tabla de Fechas
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["date", "range", "between"]
enunciado: |
  Para unir `Ventas` con una tabla `RangoFechas` donde `Ventas.fecha BETWEEN rango_inicio AND rango_fin`,
  ¿qué tipo de JOIN se requiere?
respuesta: INNER JOIN
tipo: completar
pasos:
  - "Identificar que se busca la coincidencia dentro de un rango."
  - "Seleccionar el JOIN que devuelve solo las coincidencias."
explicacion: "INNER JOIN es correcto porque se desea el resultado solo cuando la fecha de venta cae dentro del rango definido en la tabla de rangos."
```

### 21 — Join con Tabla de Jerarquía
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["hierarchy", "self-join", "tree"]
enunciado: |
  Para obtener el nombre del gerente de un empleado en una tabla `Empleados` con columnas
  `id` y `gerente_id`, ¿qué técnica se usa?
respuesta: Self-Join
tipo: completar
pasos:
  - "Identificar la relación entre una fila y otra fila de la misma tabla."
  - "Nombrar la técnica de JOIN correspondiente."
explicacion: "Se usa un Self-Join para unir la tabla con sí misma, relacionando el `gerente_id` de un empleado con el `id` del gerente."
```

### 22 — Join con Tabla de Traducciones
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["translation", "left-join", "default"]
enunciado: |
  Para obtener el nombre de un producto en español, o en inglés si no existe la traducción
  en español, ¿qué JOIN usarías?
respuesta: LEFT JOIN
tipo: completar
pasos:
  - "Identificar la necesidad de incluir el registro principal incluso si no hay traducción."
  - "Seleccionar el JOIN que preserva la tabla izquierda."
explicacion: "LEFT JOIN permite incluir el producto incluso si no hay fila en la tabla de traducciones para español, permitiendo luego usar COALESCE para el fallback."
```

### 23 — Join con Tabla de Logs
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["logs", "aggregation", "group-by"]
enunciado: |
  Para contar los errores por cada `usuario_id` en una tabla de `Logs` y unir con `Usuarios`,
  ¿dónde se debe aplicar el GROUP BY?
respuesta: En la subconsulta de Logs
tipo: completar
pasos:
  - "Determinar el momento óptimo para agregar datos antes de unir."
  - "Considerar el rendimiento de unir filas detalladas vs agregadas."
explicacion: "Es más eficiente agrupar en la tabla grande (Logs) primero en una subconsulta y luego hacer el JOIN con Usuarios para reducir el número de filas procesadas en la unión."
```

### 24 — Join con Tabla de Metadatos
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["metadata", "schema", "information-schema"]
enunciado: |
  Verdadero o Falso: Se puede hacer JOIN con las vistas del sistema (ej. `information_schema.columns`)
  para obtener metadatos de las tablas involucradas.
respuesta: verdadero
tipo: vf
pasos:
  - "Verificar si las vistas del sistema son accesibles vía SQL estándar."
  - "Confirmar que permiten JOINs como cualquier tabla."
explicacion: "Sí, las vistas del sistema son tablas virtuales que se pueden consultar y unir para obtener información sobre la estructura de la base de datos."
```

### 25 — Join con Tabla de Segmentación
```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["segmentation", "filtering", "performance"]
enunciado: |
  Para filtrar `Clientes` solo por aquellos que pertenecen a un `Grupo` específico definido
  en una tabla `Segmentos`, ¿qué JOIN es más directo?
respuesta: INNER JOIN
tipo: completar
pasos:
  - "Identificar que se quiere solo la intersección de clientes y grupos."
  - "Seleccionar el JOIN que descarta los no coincidentes."
explicacion: "INNER JOIN devuelve solo los clientes que tienen una relación válida con el grupo de segmentación especificado."
```