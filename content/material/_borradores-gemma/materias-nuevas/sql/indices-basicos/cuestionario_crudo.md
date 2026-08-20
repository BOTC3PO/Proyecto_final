### 1 — Índice único en columna de usuario
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["unique", "constraint", "performance"]
tipo: completar
enunciado: "Para garantizar que los valores en la columna `email` de la tabla `usuarios` sean únicos y crear un índice implícito para acelerar las búsquedas por ese campo, escribe la cláusula DDL correcta al final de la definición de tabla: `CREATE TABLE usuarios (id INT PRIMARY KEY, email VARCHAR(255) __________ );`"
respuesta: "UNIQUE"
respuestas_validas:
  - "UNIQUE"
  - "unique"
  - "UNIQUE "
  - " unique"
pasos:
  - "Identificar que se requiere restricción de unicidad."
  - "Reconocer que `UNIQUE` crea automáticamente un índice en la mayoría de los motores SQL."
explicacion: "La palabra clave `UNIQUE` impone la restricción de integridad de entidad y, por defecto, el motor de base de datos crea un índice asociado para optimizar la verificación de unicidad y las búsquedas."
```

### 2 — Cláusula WHERE en índice compuesto
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["composite-index", "left-most-prefix"]
tipo: vf
enunciado: "Si existe un índice compuesto `(a, b, c)` en una tabla, una consulta con `WHERE b = 1 AND c = 2` puede utilizar eficientemente todo el índice sin necesidad de escanear."
respuesta: "falso"
pasos:
  - "Analizar la estructura del índice compuesto."
  - "Aplicar la regla del prefijo izquierdo (left-most prefix)."
explicacion: "Un índice compuesto `(a, b, c)` solo es útil para búsquedas que empiecen por `a`. Si se filtra solo por `b` y `c`, el índice no puede usarse directamente para saltar a los registros correctos (a menos que se trate de índices de cobertura específicos en versiones muy recientes o casos particulares de skip scan, pero en el contexto estándar de optimización de índices, falla la regla del prefijo)."
```

### 3 — Tipo de índice para texto libre
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["full-text", "search"]
tipo: mc
enunciado: "¿Qué tipo de índice se recomienda específicamente para realizar búsquedas de palabras completas dentro de textos largos (por ejemplo, `MATCH(col) AGAINST('término')`) en MySQL InnoDB moderno?"
opciones_explicitas:
  - "B-Tree Index"
  - "Full-Text Index"
  - "Hash Index"
  - "Bitmap Index"
respuesta: "Full-Text Index"
pasos:
  - "Evaluar la naturaleza de la consulta (búsqueda de palabras)."
  - "Descartar índices estándar (B-Tree) para prefijos largos o búsquedas difusas."
  - "Seleccionar la estructura diseñada para tokenización de texto."
explicacion: "Los índices B-Tree son eficientes para rangos y igualdad exacta, pero ineficientes para búsquedas de texto libre. Los índices Full-Text están optimizados para la tokenización y recuperación de documentos."
```

### 4 — Índice cubridor (Covering Index)
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["covering-index", "optimization"]
tipo: completar
enunciado: "Si una consulta `SELECT id, nombre, email FROM clientes WHERE email = 'x'` utiliza un índice `(email, nombre, id)` y no necesita acceder a la tabla base (clustered index), decimos que el índice es un __________ index."
respuesta: "covering"
respuestas_validas:
  - "covering"
  - "Covering"
  - "COVERING"
  - "covering "
  - " covering"
pasos:
  - "Analizar las columnas seleccionadas y filtradas."
  - "Comparar con las columnas del índice."
  - "Determinar si todas las columnas necesarias están en el índice."
explicacion: "Un covering index contiene todas las columnas requeridas por la consulta, permitiendo al motor devolver resultados solo leyendo el índice sin acceder a la fila de datos (bookmark lookup)."
```

### 5 — Selectividad de columna
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["selectivity", "index-design"]
tipo: vf
enunciado: "Crear un índice sobre una columna booleana (`is_active`) en una tabla con 1 millón de registros y distribución 50/50 es generalmente una buena práctica de optimización de rendimiento."
respuesta: "falso"
pasos:
  - "Evaluar la selectividad de la columna booleana."
  - "Considerar el costo de mantenimiento del índice vs. la ganancia en lectura."
explicacion: "La selectividad es baja (pocos valores distintos). El optimizador probablemente ignorará el índice y hará un full table scan, ya que leer el índice y luego las filas es más costoso que leer la tabla secuencialmente."
```

### 6 — Operador de unión en índice
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["union-index", "composite"]
tipo: completar
enunciado: "Para crear un índice que abarque múltiples columnas en PostgreSQL, se utiliza la sintaxis `CREATE INDEX idx ON tabla (col1, col2);`. ¿Qué estructura de datos subyacente usa PostgreSQL por defecto para este índice?"
respuesta: "btree"
respuestas_validas:
  - "btree"
  - "B-Tree"
  - "b-tree"
  - "BTree"
  - "BTREE"
pasos:
  - "Identificar el motor de base de datos (PostgreSQL)."
  - "Recordar el tipo de índice por defecto en PG."
explicacion: "PostgreSQL utiliza B-Tree (árboles balanceados) como el tipo de índice por defecto para casi todos los casos generales, incluyendo índices compuestos."
```

### 7 — Índices parciales (Partial Indexes)
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["partial-index", "filter"]
tipo: mc
enunciado: "¿Cuál es la principal ventaja de usar un índice parcial `CREATE INDEX idx ON tabla (id) WHERE activo = true;` en lugar de un índice completo sobre la columna `id`?"
opciones_explicitas:
  - "Acelera las búsquedas de columnas no indexadas."
  - "Reduce el tamaño del disco y el tiempo de escritura al indexar solo un subconjunto de datos."
  - "Permite búsquedas de texto completo."
  - "Elimina la necesidad de bloqueos en la tabla."
respuesta: "Reduce el tamaño del disco y el tiempo de escritura al indexar solo un subconjunto de datos."
pasos:
  - "Analizar el impacto del filtro `WHERE` en el índice."
  - "Comparar el tamaño vs. un índice completo."
  - "Evaluar el impacto en las operaciones de inserción."
explicacion: "Los índices parciales son más pequeños y se mantienen más rápido porque solo procesan las filas que cumplen la condición, ideal cuando las consultas filtran frecuentemente por esa misma condición."
```

### 8 — Índice Hash en MySQL
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["hash-index", "mysql"]
tipo: vf
enunciado: "En MySQL con el motor de almacenamiento InnoDB, un índice `HASH` es el tipo por defecto para columnas de tipo `VARCHAR`."
respuesta: "falso"
pasos:
  - "Verificar el motor por defecto en MySQL moderno (InnoDB)."
  - "Verificar el tipo de índice por defecto en InnoDB."
explicacion: "InnoDB usa B-Tree por defecto. Los índices Hash explícitos (`USING HASH`) solo están disponibles en el motor MEMORY, no en InnoDB (donde se usan hash ad-hoc internamente para igualdad, pero no como estructura de índice persistente primaria configurable por el usuario de la misma forma)."
```

### 9 — Índice de columna generada
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["generated-column", "virtual"]
tipo: completar
enunciado: "En MySQL 5.7+, para indexar una columna derivada de `JSON` sin almacenar datos duplicados, se define una columna generada virtual: `email_domain VARCHAR(255) GENERATED ALWAYS AS (json_extract(email, '$.domain')) VIRTUAL`. ¿Qué palabra clave se usa para crear el índice sobre esta columna virtual?"
respuesta: "CREATE INDEX"
respuestas_validas:
  - "CREATE INDEX"
  - "create index"
  - "CREATE INDEX "
  - " create index"
pasos:
  - "Identificar la columna como virtual/generada."
  - "Recordar que se indexa como una columna normal."
explicacion: "Las columnas generadas (virtuales o almacenadas) se indexan utilizando la sintaxis estándar `CREATE INDEX` sobre el nombre de la columna generada."
```

### 10 — Densidad de índice
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["density", "statistics"]
tipo: mc
enunciado: "Un índice con alta 'densidad' (muchas filas con el mismo valor de clave) en una columna de baja selectividad tiende a causar:"
opciones_explicitas:
  - "Index Seeks rápidos."
  - "Index Scans costosos o ignorancia del optimizador."
  - "Fragmentación de página inmediata."
  - "Bloqueos de tabla exclusivos."
respuesta: "Index Scans costosos o ignorancia del optimizador."
pasos:
  - "Definir densidad en contexto de índices."
  - "Relacionar con selectividad."
  - "Determinar el comportamiento del optimizador."
explicacion: "Alta densidad implica baja selectividad. Si un valor se repite en muchas filas, el índice no ayuda a reducir significativamente el conjunto de resultados, llevando a escaneos o a que el optimizador decida no usarlo."
```

### 11 — Índice Clustered vs Non-Clustered
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["clustered-index", "heap"]
tipo: completar
enunciado: "En SQL Server, si una tabla no tiene un índice agrupado (clustered), los datos se almacenan en una estructura llamada __________."
respuesta: "heap"
respuestas_validas:
  - "heap"
  - "Heap"
  - "HEAP"
  - "heap "
  - " heap"
pasos:
  - "Identificar el motor SQL Server."
  - "Recordar la estructura de almacenamiento sin PK/Clustered Index."
explicacion: "Una tabla sin índice agrupado se llama 'Heap'. Las filas se insertan en cualquier espacio disponible, sin orden físico garantizado por clave."
```

### 12 — Índice único con NULLs
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["unique-index", "nulls", "postgresql"]
tipo: vf
enunciado: "En PostgreSQL, un índice `UNIQUE` estándar permite múltiples filas con valor `NULL` en la columna indexada."
respuesta: "verdadero"
pasos:
  - "Verificar la norma SQL estándar sobre NULLs."
  - "Verificar la implementación específica de PostgreSQL."
explicacion: "Por norma SQL, `NULL` no es igual a `NULL`. PostgreSQL permite múltiples NULLs en índices únicos. Para restringir a un solo NULL, se requiere un índice parcial `WHERE col IS NOT NULL` o un índice único filtrado."
```

### 13 — Índice de solo lectura (Read-Only)
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["read-only", "replica"]
tipo: mc
enunciado: "En PostgreSQL, para acelerar consultas en una réplica de solo lectura sin sobrecargar el disco con mantenimiento de índices innecesarios, se puede usar:"
opciones_explicitas:
  - "pg_repack"
  - "CREATE INDEX CONCURRENTLY"
  - "Index-only scans"
  - "No hay una opción específica de 'índice de solo lectura' en la sintaxis DDL."
respuesta: "No hay una opción específica de 'índice de solo lectura' en la sintaxis DDL."
pasos:
  - "Analizar las opciones de mantenimiento de índices."
  - "Evaluar si el índice cambia según el rol (primary/replica)."
explicacion: "Los índices son parte de la estructura de datos que se replica. No existe un tipo de índice que sea 'solo lectura' en la definición; sin embargo, en réplicas, no hay sobrecarga de INSERT/UPDATE/DELETE, por lo que los índices se mantienen más rápido. La opción D es la correcta porque la premisa de 'crear un tipo de índice' es falsa; el beneficio es inherente al rol de la réplica."
```

### 14 — Columna de ordenamiento en índice
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["sort-order", "asc-desc"]
tipo: completar
enunciado: "En una base de datos que soporta órdenes de indexación mixtas (como PostgreSQL o Oracle), ¿qué palabra clave se usa en `CREATE INDEX idx ON tabla (col1, col2 DESC);` para especificar que `col2` debe ordenarse descendente?"
respuesta: "DESC"
respuestas_validas:
  - "DESC"
  - "desc"
  - "DESC "
  - " desc"
pasos:
  - "Analizar la sintaxis de definición de índice."
  - "Identificar el modificador de ordenamiento."
explicacion: "La palabra clave `DESC` (descending) permite que el índice almacene la segunda columna en orden inverso, útil para consultas que ordenan por esa columna específica sin un paso de sort adicional."
```

### 15 — Índice para `LIKE` con prefijo
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["like", "prefix", "btree"]
tipo: vf
enunciado: "Un índice B-Tree estándar en MySQL/PostgreSQL puede utilizarse eficientemente para una consulta `WHERE nombre LIKE 'Juan%'`."
respuesta: "verdadero"
pasos:
  - "Analizar el patrón de búsqueda `LIKE`."
  - "Verificar si el patrón tiene prefijo fijo."
explicacion: "Los índices B-Tree funcionan bien con `LIKE` cuando el patrón comienza con un carácter literal (prefijo). El índice permite saltar directamente al inicio de la rama 'Juan'."
```

### 16 — Índice para `LIKE` con comodín inicial
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["like", "wildcard", "full-text"]
tipo: mc
enunciado: "Para optimizar `WHERE nombre LIKE '%Juan'` (comodín a la izquierda) en MySQL, ¿qué alternativa a los índices B-Tree estándar es más adecuada?"
opciones_explicitas:
  - "Índice Hash"
  - "Índice Full-Text"
  - "Índice Bitmap"
  - "Índice GiST"
respuesta: "Índice Full-Text"
pasos:
  - "Evaluar la incapacidad del B-Tree para prefijos variables."
  - "Buscar mecanismos de búsqueda de texto."
  - "Seleccionar la opción viable."
explicacion: "Los B-Tree no pueden usar índices para comodines a la izquierda. Full-Text Search es la alternativa nativa más común para búsquedas de palabras, aunque para patrones de sufijo específicos a veces se usan estructuras invertidas o extensiones como pg_trgm."
```

### 17 — Índice GiST en PostgreSQL
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["gist-index", "geospatial"]
tipo: completar
enunciado: "En PostgreSQL, para indexar datos geográficos (puntos, líneas, polígonos) y realizar búsquedas de proximidad (ej. `&&` o `@>`), se utiliza frecuentamente el tipo de índice __________."
respuesta: "gist"
respuestas_validas:
  - "gist"
  - "GiST"
  - "GIST"
  - "GiST "
  - " gist"
pasos:
  - "Identificar el tipo de dato espacial."
  - "Recordar el índice estándar para datos espaciales en PG."
explicacion: "GiST (Generalized Search Tree) es la estructura de índice genérica en PostgreSQL para datos complejos como geoespaciales, vectores y rangos."
```

### 18 — Índice de cobertura para `ORDER BY`
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["sort", "order-by", "covering"]
tipo: vf
enunciado: "Si una consulta tiene `WHERE status = 'active' ORDER BY created_at`, un índice compuesto `(status, created_at)` puede eliminar la necesidad de un paso de 'Sort' en el plan de ejecución."
respuesta: "verdadero"
pasos:
  - "Analizar las cláusulas WHERE y ORDER BY."
  - "Verificar si el índice satisface ambos."
explicacion: "El índice ordena primero por `status` (para el filtro) y luego por `created_at` dentro de ese grupo. Si el filtro es selectivo o el índice cubre la ordenación, el optimizador puede evitar el sort explícito."
```

### 19 — Índice único parcial para unicidad condicional
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["unique-partial", "constraint"]
tipo: completar
enunciado: "Para garantizar que solo un usuario tenga el rol 'admin' en un momento dado, pero permitir múltiples roles 'user', se usa: `CREATE UNIQUE INDEX idx_admin ON usuarios (user_id) WHERE rol = 'admin';`. ¿Qué palabra clave garantiza la unicidad?"
respuesta: "UNIQUE"
respuestas_validas:
  - "UNIQUE"
  - "unique"
  - "UNIQUE "
  - " unique"
pasos:
  - "Analizar la restricción deseada (unicidad condicional)."
  - "Identificar la palabra clave DDL."
explicacion: "La palabra clave `UNIQUE` en la definición del índice parcial asegura que no haya dos filas que cumplan la condición `WHERE` con el mismo `user_id`."
```

### 20 — Índice para `IN` con lista pequeña
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["in-clause", "index-scan"]
tipo: mc
enunciado: "Una consulta `WHERE id IN (1, 2, 3)` en una tabla grande con un índice en `id` generalmente resulta en:"
opciones_explicitas:
  - "Full Table Scan."
  - "Índex Seek o Index Scan múltiple."
  - "Hash Join."
  - "Merge Join."
respuesta: "Índex Seek o Index Scan múltiple."
pasos:
  - "Evaluar la eficiencia de buscar valores específicos."
  - "Determinar el acceso al índice."
explicacion: "Para listas pequeñas de valores, el optimizador suele usar Index Seeks (saltos directos) o un Index Scan rápido sobre los valores clave, ya que es más eficiente que leer toda la tabla."
```

### 21 — Índice para `BETWEEN`
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["range", "between", "btree"]
tipo: vf
enunciado: "Los índices B-Tree son altamente eficientes para rangos definidos por `BETWEEN` en la columna indexada."
respuesta: "verdadero"
pasos:
  - "Analizar la naturaleza de rango de `BETWEEN`."
  - "Verificar la compatibilidad con B-Tree."
explicacion: "Los B-Tree están diseñados para rangos ordenados. `BETWEEN` permite al índice localizar el inicio y el final del rango y leer secuencialmente, evitando accesos aleatorios."
```

### 22 — Índice de tipo BRIN
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["brin-index", "time-series"]
tipo: completar
enunciado: "Para tablas de series temporales o datos ordenados físicamente donde los valores cercanos en la tabla son cercanos en valor, se recomienda el índice __________ para reducir el tamaño del índice."
respuesta: "brin"
respuestas_validas:
  - "brin"
  - "BRIN"
  - "Brin"
  - "BRIN "
  - " brin"
pasos:
  - "Identificar el patrón de datos (ordenados/físicamente correlacionados)."
  - "Recordar el índice de rango de bloques."
explicacion: "BRIN (Block Range INdex) almacena resumen de rangos de bloques. Es extremadamente pequeño y rápido para datos ordenados, aunque ineficiente para datos aleatorios."
```

### 23 — Índice para `JSONB` en PostgreSQL
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["jsonb", "gin-index"]
tipo: mc
enunciado: "Para indexar claves dentro de un objeto `JSONB` en PostgreSQL para búsquedas de igualdad `->>` o `@>`, se utiliza el tipo de índice:"
opciones_explicitas:
  - "B-Tree"
  - "GIN"
  - "HASH"
  - "SP-GiST"
respuesta: "GIN"
pasos:
  - "Analizar la estructura de datos JSONB (inversa)."
  - "Seleccionar el índice para claves en documentos."
explicacion: "GIN (Generalized Inverted Index) es el estándar para indexar claves dentro de tipos de datos complejos como JSONB, arrays y hstore."
```

### 24 — Índice para `array` en PostgreSQL
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["array", "gin-index", "overlap"]
tipo: completar
enunciado: "Para buscar si un array en PostgreSQL contiene algún elemento de otro array (operador `&&`), se usa un índice de tipo __________."
respuesta: "gin"
respuestas_validas:
  - "gin"
  - "GIN"
  - "Gin"
  - "GIN "
  - " gin"
pasos:
  - "Identificar el operador de superposición de arrays."
  - "Recordar la estructura de índice invertido."
explicacion: "El operador `&&` (overlap) requiere un índice invertido que mapee elementos a filas, lo cual es la función principal de GIN para arrays."
```

### 25 — Eliminación de índice no usado
```yaml
metadata:
  materia: "sql"
  tema: "indices-basicos"
  nivel: "avanzado"
  tags: ["unused-index", "maintenance"]
tipo: vf
enunciado: "Mantener índices que nunca son utilizados por el optimizador (índices 'idle' o 'unused') no tiene impacto negativo en el rendimiento de las inserciones o actualizaciones."
respuesta: "falso"
pasos:
  - "Evaluar el costo de mantenimiento de índices."
  - "Considerar las operaciones DML (INSERT/UPDATE/DELETE)."
explicacion: "Cada índice debe actualizarse en cada inserción, actualización o eliminación de datos. Los índices no usados consumen espacio en disco y ralentizan las escrituras sin aportar beneficio en lectura."
```