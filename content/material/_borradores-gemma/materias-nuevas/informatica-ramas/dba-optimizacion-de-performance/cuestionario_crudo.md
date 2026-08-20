### 1 — Índices de cobertura y rendimiento
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["indices", "cobertura", "cover"]
tipo: vf
enunciado: "En una base de datos relacional, un 'Index Only Scan' (o Index-Only Access) ocurre cuando el optimizador puede satisfacer una consulta únicamente leyendo el índice sin necesidad de acceder a la tabla heap, lo cual reduce significativamente el I/O."
respuesta: verdadero
pasos:
  - "Analizar el plan de ejecución generado por EXPLAIN."
  - "Verificar si el nodo de acceso indica 'Index Only Scan' o 'Heap Fetches' igual a 0."
  - "Confirmar que todas las columnas requeridas están incluidas en el índice (index-only friendly)."
explicacion: "Cuando el índice contiene todas las columnas necesarias para la consulta (incluyendo las del SELECT y WHERE), el motor puede evitar leer las páginas de datos de la tabla principal, mejorando el rendimiento."
```

### 2 — Comprensión de EXPLAIN ANALYZE
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["explain", "analisis", "plan"]
tipo: completar
enunciado: "Para ver el plan de ejecución real con tiempos de ejecución y conteos de filas, se debe ejecutar el comando: EXPLAIN ANALYZE __________;"
respuesta: SELECT * FROM users WHERE status = 'active'
respuestas_validas:
  - "select * from users where status = 'active'"
  - "SELECT * FROM users WHERE status = 'active'"
  - "select * from users where status = 'Active'"
  - "SELECT * FROM users WHERE status = 'Active'"
pasos:
  - "Identificar la consulta DML que se desea optimizar."
  - "Prependear la palabra clave EXPLAIN ANALYZE."
  - "Ejecutar y revisar los tiempos 'Actual Startup Time' y 'Actual Total Time'."
explicacion: "EXPLAIN ANALYZE ejecuta la consulta y muestra el plan real, no solo el estimado, permitiendo comparar costos estimados vs reales."
```

### 3 — Particionamiento por Rangos
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["particionamiento", "range", "partitioning"]
tipo: mc
enunciado: "¿Cuál es la principal ventaja de usar particionamiento por rango (Range Partitioning) en una tabla de historial de transacciones grande?"
opciones_explicitas:
  - "Asegura que los datos sean únicos automáticamente."
  - "Mejora el rendimiento de las consultas que filtran por el rango de partición (partition pruning)."
  - "Elimina la necesidad de índices secundarios por completo."
  - "Acelera las operaciones de INSERT masivo sin generar WAL logs."
respuesta: "Mejora el rendimiento de las consultas que filtran por el rango de partición (partition pruning)."
pasos:
  - "Definir una clave de partición (ej. fecha)."
  - "Crear particiones para intervalos temporales."
  - "Verificar que el optimizador realiza 'Partition Pruning' al filtrar por dicha clave."
explicacion: "El partition pruning permite al optimizador ignorar particiones irrelevantes para la consulta, reduciendo drásticamente el volumen de datos escaneado."
```

### 4 — Tuning de Conexiones
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["conexiones", "max_connections", "recursos"]
tipo: completar
enunciado: "Si el servidor reporta 'too many connections', ajustar la variable de sistema global `max_connections` a un valor excesivamente alto puede causar __________ en el servidor debido al consumo de memoria por cada contexto de conexión."
respuesta: inestabilidad
respuestas_validas:
  - "inestabilidad"
  - "crash"
  - "fallida"
  - "out of memory"
  - "OOM"
pasos:
  - "Monitorizar el uso de memoria por conexiones activas."
  - "Evaluar el overhead de memoria de cada conexión."
  - "Ajustar `max_connections` en equilibrio con la memoria RAM disponible y el valor de `work_mem`."
explicacion: "Cada conexión consume memoria (buffers, contextos). Un `max_connections` muy alto puede agotar la RAM física, causando intercambio (swapping) o crash del servicio."
```

### 5 — Índices Parciales
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["indice", "parcial", "partial index"]
tipo: completar
enunciado: "Para optimizar consultas frecuentes que siempre filtran por `status = 'pending'`, se debe crear un índice parcial con la cláusula: CREATE INDEX idx_pending ON orders (order_date) WHERE __________;"
respuesta: status = 'pending'
respuestas_validas:
  - "status = 'pending'"
  - "status = 'PENDING'"
  - "STATUS = 'pending'"
  - "STATUS = 'PENDING'"
pasos:
  - "Identificar el filtro más común y selectivo."
  - "Especificar la condición en la cláusula WHERE del CREATE INDEX."
  - "Verificar que las consultas usen este índice mediante EXPLAIN."
explicacion: "Los índices parciales son más pequeños y rápidos que los índices completos porque solo indexan las filas que cumplen la condición, ahorrando espacio y tiempo de mantenimiento."
```

### 6 — Locking y Deadlocks
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["deadlock", "locking", "transaccion"]
tipo: vf
enunciado: "Un deadlock ocurre cuando dos transacciones esperan indefinidamente por recursos que la otra tiene bloqueados, y el sistema de gestión de base de datos debe abortar una de ellas para resolverlo."
respuesta: verdadero
pasos:
  - "Detectar el deadlock en los logs del servidor (ej. 'deadlock detected')."
  - "Analizar el orden de adquisición de locks en ambas transacciones."
  - "Reordenar el acceso a recursos comunes para evitar ciclos de espera."
explicacion: "Los deadlocks son inevitables en concurrencia alta, pero se pueden minimizar asegurando un orden consistente de adquisición de locks o usando niveles de aislamiento más bajos si es posible."
```

### 7 — Análisis de Fragmentación
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["fragmentacion", "heap", "vacuum"]
tipo: completar
enunciado: "En PostgreSQL, el comando __________ debe usarse para reclamar espacio de tuples muertas y actualizar las estadísticas del analizador."
respuesta: VACUUM
respuestas_validas:
  - "vacuum"
  - "VACUUM"
  - "vacuum full"
  - "VACUUM FULL"
  - "autovacuum"
  - "AUTOVACUUM"
pasos:
  - "Consultar `pg_stat_user_tables` para ver la tasa de tuplas muertas."
  - "Ejecutar VACUUM (o VACUUM FULL si se requiere compactación agresiva)."
  - "Monitorizar el tiempo de ejecución y el impacto en el I/O."
explicacion: "Las tuplas muertas no se eliminan físicamente inmediatamente para mantener la consistencia MVCC. VACUUM las marca como reciclables y actualiza las estadísticas para que el optimizador tome mejores decisiones."
```

### 8 — Índices de Funciones
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["indice", "funcion", "btree_gin"]
tipo: completar
enunciado: "Para indexar eficientemente el resultado de una función no invariante como `lower(email)`, se necesita un índice funcional. La sintaxis correcta es: CREATE INDEX idx_email_lower ON users (__________(email));"
respuesta: lower
respuestas_validas:
  - "lower"
  - "LOWER"
  - "LOWER()"
  - "lower()"
pasos:
  - "Definir la función que se aplica en la cláusula WHERE."
  - "Crear el índice funcional usando la misma función."
  - "Asegurarse de que la función sea 'immutable' para garantizar consistencia."
explicacion: "Los índices funcionales almacenan el resultado de la función aplicada a las columnas, permitiendo búsquedas directas sin evaluar la función en cada fila durante la consulta."
```

### 9 — Niveles de Aislamiento
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["isolacion", "read-committed", "serializable"]
tipo: mc
enunciado: "¿Qué nivel de aislamiento previene los 'phantom reads' (lecturas fantasma) pero puede causar el mayor overhead de locking?"
opciones_explicitas:
  - "Read Committed"
  - "Repeatable Read"
  - "Serializable"
  - "Read Uncommitted"
respuesta: "Serializable"
pasos:
  - "Comparar las garantías de cada nivel (dirty read, non-repeatable read, phantom read)."
  - "Evaluar el costo de serialización (bloqueos de rango o detección de conflictos)."
  - "Seleccionar Serializable solo si la integridad estricta es crítica y el throughput lo permite."
explicacion: "Serializable es el nivel más estricto, evitando todas las anomalías de concurrencia, pero imponiendo un alto costo por la necesidad de verificar conflictos con otras transacciones serializadas."
```

### 10 — Estadísticas de Tabla
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["stats", "analyze", "histogram"]
tipo: completar
enunciado: "Si los datos de una columna cambian drásticamente, el optimizador podría usar un plan subóptimo hasta que se ejecute: __________;"
respuesta: ANALYZE
respuestas_validas:
  - "analyze"
  - "ANALYZE"
  - "ANALYZE table_name"
  - "analyze table_name"
pasos:
  - "Detectar desviaciones en la cardinalidad estimada vs real."
  - "Ejecutar ANALYZE en la tabla afectada."
  - "Verificar que las estadísticas en `pg_stats` se hayan actualizado."
explicacion: "El comando ANALYZE recolecta estadísticas distribucionales (histogramas, valores más frecuentes) que son cruciales para que el optimizador elija el plan de acceso correcto."
```

### 11 — Buffer Cache Hit Ratio
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["buffer", "cache", "hit ratio"]
tipo: vf
enunciado: "Un Buffer Cache Hit Ratio cercano al 100% indica que casi todas las lecturas se satisfacen desde la memoria RAM, lo cual es ideal para el rendimiento de la base de datos."
respuesta: verdadero
pasos:
  - "Consultar `shared_buffers` y el tamaño de la memoria RAM del servidor."
  - "Calcular: (1 - (blks_read / blks_hit)) * 100."
  - "Si el ratio es bajo, considerar aumentar `shared_buffers` o optimizar consultas que causan escaneo secuencial."
explicacion: "El acceso a disco es órdenes de magnitud más lento que a RAM. Un alto hit ratio minimiza el I/O físico."
```

### 12 — Índices GIN vs B-Tree
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["gin", "btree", "jsonb"]
tipo: completar
enunciado: "Para indexar eficientemente búsqueda de claves dentro de un tipo de dato JSONB, se debe usar un índice de tipo __________."
respuesta: GIN
respuestas_validas:
  - "gin"
  - "GIN"
  - "GIN index"
  - "gin index"
pasos:
  - "Identificar la necesidad de buscar claves o valores dentro de estructuras complejas."
  - "Crear el índice con `USING gin`."
  - "Verificar que el operador de búsqueda (ej. `@>`) sea compatible con el índice GIN."
explicacion: "Los índices B-Tree no pueden indexar eficientemente el contenido interno de JSONB. GIN crea un índice invertido que mapea claves/valores a filas, permitiendo búsquedas rápidas."
```

### 13 — Parámetros de Escritura
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["wal", "fsync", "escritura"]
tipo: completar
enunciado: "Para maximizar el throughput de escritura en entornos donde la pérdida de datos de la última transacción es aceptable (ej. réplica asíncrona), se puede configurar `synchronous_commit = __________`."
respuesta: off
respuestas_validas:
  - "off"
  - "false"
  - "OFF"
  - "FALSE"
  - "local"
  - "LOCAL"
pasos:
  - "Evaluar el riesgo de pérdida de datos (RPO) en el negocio."
  - "Cambiar `synchronous_commit` a 'off' o 'local'."
  - "Monitorizar la latencia de COMMIT y el throughput de I/O."
explicacion: "Desactivar la confirmación síncrona permite que el backend continúe antes de que los datos se escriban en disco, aumentando la velocidad a costa de durabilidad inmediata."
```

### 14 — Optimización de JOINs
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["join", "hash", "merge"]
tipo: mc
enunciado: "¿Qué tipo de JOIN es más eficiente cuando se une una tabla pequeña con una tabla grande y hay un índice en la columna de unión?"
opciones_explicitas:
  - "Hash Join"
  - "Merge Join"
  - "Nested Loop Join"
  - "Cross Join"
respuesta: "Nested Loop Join"
pasos:
  - "Analizar el tamaño de las tablas involucradas."
  - "Verificar la existencia de índices en la columna de unión de la tabla externa (pequeña)."
  - "Elegir Nested Loop si la tabla interna es pequeña o tiene índice, para evitar escaneos completos."
explicacion: "Nested Loop es eficiente para tablas pequeñas o cuando hay índices muy selectivos, ya que accede directamente a las filas coincidentes sin necesidad de construir hash tables o ordenar datos."
```

### 15 — Índices de Cobertura (Covering)
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["cover", "include", "index"]
tipo: completar
enunciado: "Para incluir columnas adicionales en un índice sin que afecten la clave de búsqueda (útil para Index Only Scan), se usa la cláusula: CREATE INDEX idx ON table (key) __________ (col2, col3);"
respuesta: INCLUDE
respuestas_validas:
  - "include"
  - "INCLUDE"
  - "INCLUDE (col2, col3)"
  - "include (col2, col3)"
pasos:
  - "Identificar las columnas que se seleccionan pero no se filtran."
  - "Añadir estas columnas a la cláusula INCLUDE del índice."
  - "Verificar que el plan de ejecución realice 'Index Only Scan'."
explicacion: "La cláusula INCLUDE permite crear índices de cobertura donde las columnas incluidas se almacenan en las hojas del índice, permitiendo satisfacer consultas sin acceder a la tabla heap."
```

### 16 — Diagnóstico de Consultas Lentas
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["slow query", "log", "diagnostico"]
tipo: completar
enunciado: "Para capturar automáticamente consultas que tardan más de 1 segundo, se debe configurar la variable de configuración: `log_min_duration_statement = __________`."
respuesta: 1000
respuestas_validas:
  - "1000"
  - "1s"
  - "1000ms"
  - "1000 milliseconds"
pasos:
  - "Acceder al archivo de configuración del servidor (ej. `postgresql.conf`)."
  - "Establecer `log_min_duration_statement` en milisegundos."
  - "Reiniciar o recargar la configuración y monitorear los logs."
explicacion: "Registrar consultas lentas es el primer paso para identificar cuellos de botella. El valor se especifica en milisegundos."
```

### 17 — Índices de Prefijo
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["indice", "prefijo", "varchar"]
tipo: completar
enunciado: "Para una columna `varchar(255)` que se filtra frecuentemente por sus primeros 50 caracteres, se puede crear un índice parcial con: CREATE INDEX idx_prefix ON table (substring(name, 1, 50));"
respuesta: substring
respuestas_validas:
  - "substring"
  - "SUBSTRING"
  - "substr"
  - "SUBSTR"
  - "substring(name, 1, 50)"
  - "SUBSTRING(name, 1, 50)"
pasos:
  - "Determinar la longitud de búsqueda típica."
  - "Crear el índice funcional usando `substring` o `left`."
  - "Asegurarse de que la consulta use la misma función y longitud."
explicacion: "Indexar prefijos permite búsquedas eficientes en cadenas largas sin indexar todo el contenido, ahorrando espacio y tiempo de escritura."
```

### 18 — Parámetros de Memoria de Trabajo
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["work_mem", "sort", "hash"]
tipo: completar
enunciado: "Si las consultas de ordenamiento (ORDER BY) o hash joins causan 'disk spilling', se debe incrementar la variable de sesión o global: __________."
respuesta: work_mem
respuestas_validas:
  - "work_mem"
  - "WORK_MEM"
  - "work_mem = 256MB"
  - "WORK_MEM = 256MB"
pasos:
  - "Verificar los logs o EXPLAIN para ver si se usa 'Disk' en sort/hash."
  - "Aumentar `work_mem` (con cuidado de no exceder la RAM total)."
  - "Re-evaluar el rendimiento de las operaciones de ordenamiento."
explicacion: "`work_mem` define la memoria disponible para cada operación interna de ordenamiento o hash join por conexión. Aumentarlo evita el uso de disco temporal."
```

### 19 — Índices de Texto Completo
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["fts", "full text", "to_tsvector"]
tipo: completar
enunciado: "Para indexar texto completo en PostgreSQL, se usa la función `to_tsvector` y el operador de búsqueda `__________`."
respuesta: @@
respuestas_validas:
  - "@@"
  - "tsvector @@ tsquery"
  - "to_tsvector @@ to_tsquery"
  - "@@"
pasos:
  - "Crear una columna de tipo `tsvector` o un índice funcional."
  - "Usar el operador `@@` en la cláusula WHERE para buscar."
  - "Asegurarse de que la consulta use `to_tsquery` para la consulta."
explicacion: "El operador `@@` verifica si un `tsvector` coincide con una `tsquery`, permitiendo búsquedas de texto completo eficientes con soporte para pesos y rangos."
```

### 20 — Particionamiento por Lista
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["partition", "list", "hash"]
tipo: mc
enunciado: "¿Cuándo es más adecuado usar particionamiento por lista (List Partitioning) en lugar de por rango?"
opciones_explicitas:
  - "Cuando los datos tienen una ordenación temporal natural."
  - "Cuando los datos se agrupan en categorías discretas y no ordenables (ej. estado, país)."
  - "Cuando se requiere un balanceo automático de carga entre nodos."
  - "Cuando la tabla tiene una sola columna primaria."
respuesta: "Cuando los datos se agrupan en categorías discretas y no ordenables (ej. estado, país)."
pasos:
  - "Identificar columnas con cardinalidad baja y valores discretos."
  - "Definir las listas de valores para cada partición."
  - "Verificar que las consultas filtren por la columna de partición."
explicacion: "El particionamiento por lista es ideal para datos categóricos donde el orden no tiene significado lógico, permitiendo una gestión y consulta eficiente por grupo."
```

### 21 — Índices de B-Tree para Rangos
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["btree", "range", "overlap"]
tipo: completar
enunciado: "Para indexar rangos (ej. fechas de inicio y fin) y buscar superposiciones, se usa el tipo de índice __________ con el operador `&&`."
respuesta: int4range
respuestas_validas:
  - "int4range"
  - "int8range"
  - "tsrange"
  - "daterange"
  - "gist"
  - "GIST"
  - "btree_gist"
pasos:
  - "Definir la columna de rango (ej. `daterange`)."
  - "Crear un índice GIST (B-Tree no soporta operadores de rango nativamente sin extensiones)."
  - "Usar el operador `&&` para buscar superposiciones."
explicacion: "Los tipos de rango requieren índices especiales (como GIST o SP-GiST) para soportar operaciones de superposición (`&&`) eficientemente."
```

### 22 — Evitar Funciones en WHERE
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["sargable", "funcion", "index"]
tipo: vf
enunciado: "Usar una función en la columna de la cláusula WHERE (ej. `WHERE YEAR(fecha) = 2023`) generalmente impide el uso de un índice B-Tree estándar en `fecha`, forzando un escaneo secuencial."
respuesta: verdadero
pasos:
  - "Analizar el plan de ejecución para ver si se usa el índice."
  - "Reescribir la consulta usando rangos (ej. `WHERE fecha >= '2023-01-01' AND fecha < '2024-01-01'`)."
  - "Verificar que el índice se use ahora."
explicacion: "Las funciones en la columna hacen que la consulta no sea 'SARGable' (Search ARGument Able), lo que impide al optimizador usar índices de rango estándar."
```

### 23 — Índices de Hash
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["hash", "indice", "equivalencia"]
tipo: completar
enunciado: "Los índices de Hash son eficientes solo para operaciones de __________ (ej. `=`), no para rangos (`<`, `>`)."
respuesta: equivalencia
respuestas_validas:
  - "equivalencia"
  - "igualdad"
  - "equality"
  - "igual"
  - "="
  - "equals"
pasos:
  - "Identificar consultas que solo usan `=`."
  - "Considerar un índice Hash si el B-Tree es demasiado grande o lento para igualdad estricta."
  - "Nota: B-Tree es el estándar por defecto; Hash es menos común en motores modernos para generalidad."
explicacion: "Los índices Hash solo soportan búsquedas de igualdad exacta. No pueden usarse para ordenamiento o búsquedas de rango."
```

### 24 — Análisis de Locks
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["locks", "pg_locks", "bloqueo"]
tipo: completar
enunciado: "Para identificar transacciones que están bloqueadas actualmente, se consulta la vista: __________."
respuesta: pg_locks
respuestas_validas:
  - "pg_locks"
  - "PG_LOCKS"
  - "pg_stat_activity"
  - "PG_STAT_ACTIVITY"
  - "pg_locks JOIN pg_stat_activity"
pasos:
  - "Consultar `pg_locks` para ver locks pendientes."
  - "Unir con `pg_stat_activity` para ver quién está esperando."
  - "Identificar la transacción bloqueante y evaluar su impacto."
explicacion: "`pg_locks` muestra el estado de los locks a nivel de sistema, mientras que `pg_stat_activity` muestra las sesiones. Juntos permiten diagnosticar bloqueos."
```

### 25 — Índices Únicos Parciales
```
metadata:
  materia: "informatica-ramas"
  tema: "dba-optimizacion-de-performance"
  nivel: "avanzado"
  tags: ["unique", "partial", "constraint"]
tipo: completar
enunciado: "Para asegurar que un usuario tenga solo un email activo, se crea un índice único parcial: CREATE UNIQUE INDEX idx_active_email ON users (email) WHERE __________;"
respuesta: active = true
respuestas_validas:
  - "active = true"
  - "is_active = true"
  - "status = 'active'"
  - "active IS true"
  - "active = 1"
pasos:
  - "Definir la columna de estado que indica 'activo'."
  - "Añadir la condición en el WHERE del índice único."
  - "Verificar que la restricción se respete al insertar."
explicacion: "Un índice único parcial aplica la unicidad solo a las filas que cumplen la condición, permitiendo múltiples registros 'inactivos' con el mismo email."
```