### 1 — Replicación Multi-Datacenter en MongoDB
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["mongodb", "replicacion", "geografia"]
tipo: completar
enunciado: "En una topología de replicación de MongoDB distribuida geográficamente, para asegurar que las lecturas en el datacenter secundario reciban datos consistentes aunque haya latencia, se debe configurar el parámetro `readConcern` con el valor: ______"
respuesta: "majority"
respuestas_validas:
  - "majority"
  - "MAJORITY"
pasos:
  - "Identificar el requisito de consistencia en entornos distribuidos."
  - "Reconocer que 'majority' garantiza que la escritura fue replicada a la mayoría de los nodos."
explicacion: "El nivel de consistencia 'majority' asegura que la operación haya sido confirmada por la mayoría de los miembros del set de replicación, proporcionando una consistencia fuerte en sistemas distribuidos."
```

### 2 — Consistencia Eventual en DynamoDB
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["dynamodb", "consistencia", "lectura"]
tipo: vf
enunciado: "En Amazon DynamoDB, la consistencia eventual (eventual consistency) garantiza que una lectura realizada inmediatamente después de una escritura obtendrá el dato actualizado en menos de 1 segundo."
respuesta: falso
pasos:
  - "Analizar la definición de consistencia eventual en DynamoDB."
  - "Verificar si existe una garantía de tiempo específico (SLA) para la propagación."
explicacion: "La consistencia eventual en DynamoDB no garantiza un tiempo de propagación específico; puede tardar unos segundos o más. Para garantías de tiempo, se usa consistencia fuertemente consistente."
```

### 3 — Compaction en Cassandra
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["cassandra", "storagemodel", "compaction"]
tipo: completar
enunciado: "En Apache Cassandra, el proceso de background que fusiona las SSTables superpuestas para eliminar datos obsoletos y recuperar espacio se denomina: ______ compaction."
respuesta: "size-tiered"
respuestas_validas:
  - "size-tiered"
  - "SizeTIERED"
  - "size_tiered"
pasos:
  - "Identificar los algoritmos de compacción en Cassandra."
  - "Seleccionar el algoritmo basado en el tamaño de las SSTables para cargas de trabajo de escritura alta."
explicacion: "Size-Tiered Compaction (STCS) es el algoritmo por defecto y más eficiente para cargas de trabajo de escritura intensiva, agrupando SSTables de tamaños similares."
```

### 4 — Índices Globales Secundarios en DynamoDB
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["dynamodb", "gsi", "rendimiento"]
tipo: mc
enunciado: "¿Cuál es la implicación principal de actualizar un índice global secundario (GSI) en DynamoDB cuando se insertan registros?"
opciones_explicitas:
  - "La latencia de escritura aumenta proporcionalmente al tamaño del GSI."
  - "El GSI se actualiza de forma asíncrona, por lo que puede haber inconsistencia temporal."
  - "Las operaciones de escritura se bloquean hasta que el GSI se sincronice completamente."
  - "El GSI consume capacidad de lectura separada pero no afecta la capacidad de escritura de la tabla."
respuesta: "El GSI se actualiza de forma asíncrona, por lo que puede haber inconsistencia temporal."
pasos:
  - "Recordar la arquitectura de actualización de GSIs en DynamoDB."
  - "Distinguir entre consistencia fuerte y eventual en el contexto de índices."
explicacion: "Los GSIs en DynamoDB se actualizan de forma asíncrona después de que la operación en la tabla principal se confirma. Esto puede resultar en inconsistencia temporal hasta que la propagación se complete."
```

### 5 — Sharding Key en MongoDB
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["mongodb", "sharding", "hotspot"]
tipo: vf
enunciado: "Elegir una clave de sharding con baja cardinalidad (como `status: 'active'`) en MongoDB provoca un desbalanceo natural de datos sin necesidad de intervención manual del balanceador."
respuesta: verdadero
pasos:
  - "Analizar el concepto de cardinalidad en sharding."
  - "Determinar cómo afecta la baja cardinalidad a la distribución de chunks."
explicacion: "Una clave de sharding con baja cardinalidad causa 'hotspots' porque muchas operaciones van al mismo shard, evitando que los datos se distribuyan equitativamente."
```

### 6 — TTL Index en MongoDB
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["mongodb", "ttl", "mantenimiento"]
tipo: completar
enunciado: "Para eliminar automáticamente documentos en MongoDB después de un tiempo específico, se debe crear un índice sobre un campo de tipo fecha y establecer la opción `expireAfterSeconds` en: ______."
respuesta: "0"
respuestas_validas:
  - "0"
  - "zero"
  - "cero"
pasos:
  - "Identificar el mecanismo de expiración automática en MongoDB."
  - "Verificar el valor numérico requerido para la configuración del índice TTL."
explicacion: "El valor `0` indica que los documentos expirarán inmediatamente después del valor de fecha almacenado en el campo. El valor de `expireAfterSeconds` especifica los segundos adicionales."
```

### 7 — ACID Transactions en Firestore
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["firestore", "transacciones", "atomicidad"]
tipo: mc
enunciado: "En Cloud Firestore, ¿qué limitación aplica a las transacciones multi-documento?"
opciones_explicitas:
  - "Pueden operar sobre un número ilimitado de documentos."
  - "Solo pueden operar sobre documentos que pertenezcan a la misma colección."
  - "Los documentos modificados deben estar en la misma ubicación (region)."
  - "Las transacciones no permiten operaciones de lectura dentro de ellas."
respuesta: "Los documentos modificados deben estar en la misma ubicación (region)."
pasos:
  - "Revisar las restricciones de las transacciones en Firestore."
  - "Identificar el límite geográfico de las transacciones atómicas."
explicacion: "Firestore limita las transacciones a documentos dentro de la misma ubicación (region) para garantizar la latencia baja y la consistencia local."
```

### 8 — Consistency Level en Cassandra
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["cassandra", "consistency-level", "quorum"]
tipo: completar
enunciado: "En Cassandra, si se configura el `consistency_level` en `QUORUM` para una operación de lectura, el sistema espera respuestas de al menos: ______ de los réplicas configuradas."
respuesta: "la mitad + 1"
respuestas_validas:
  - "la mitad + 1"
  - "majority"
  - "mayoria"
  - "50% + 1"
pasos:
  - "Definir el nivel de consistencia QUORUM."
  - "Calcular la fórmula matemática para la mayoría en un conjunto de réplicas."
explicacion: "QUORUM requiere que la mayoría de las réplicas (N/2 + 1) respondan correctamente antes de que la operación se considere exitosa."
```

### 9 — Compaction Strategy en Cassandra
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["cassandra", "sstables", "time-series"]
tipo: mc
enunciado: "¿Cuál es la estrategia de compacción recomendada para tablas en Cassandra que tienen un patrón de acceso de escritura secuencial por tiempo (ej. logs o métricas)?"
opciones_explicitas:
  - "SizeTieredCompactionStrategy (STCS)"
  - "LeveledCompactionStrategy (LCS)"
  - "TimeWindowCompactionStrategy (TWCS)"
  - "DateTieredCompactionStrategy (DTCS)"
respuesta: "TimeWindowCompactionStrategy (TWCS)"
pasos:
  - "Analizar los patrones de escritura de datos temporales."
  - "Seleccionar la estrategia optimizada para ventanas de tiempo fijas."
explicacion: "TWCS está diseñada específicamente para cargas de trabajo de series de tiempo, agrupando SSTables por ventanas de tiempo para minimizar la sobrecarga de compacción."
```

### 10 — Partition Key en DynamoDB
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["dynamodb", "partition-key", "hotspot"]
tipo: vf
enunciado: "Si la clave de partición en una tabla de DynamoDB tiene baja entropía (pocos valores distintos), se produce un 'hot partition' que limita la capacidad de escritura de esa partición específica a 10 WCU."
respuesta: verdadero
pasos:
  - "Entender cómo DynamoDB distribuye el tráfico por partición."
  - "Verificar el límite de throughput por partición."
explicacion: "Cada partición tiene un límite de 10 WCU y 10 RCU. Si muchos items van a la misma partición debido a baja entropía en la clave, se alcanza ese límite rápidamente."
```

### 11 — Read Replicas en MongoDB
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["mongodb", "read-scaling", "replica-set"]
tipo: completar
enunciado: "En un Replica Set de MongoDB, para leer datos que podrían estar ligeramente desactualizados pero reducir la carga en el primario, se debe dirigir la lectura a un nodo secundario configurando el `readPreference` como: ______."
respuesta: "secondary"
respuestas_validas:
  - "secondary"
  - "SECONDARY"
  - "secondaryPreferred"
pasos:
  - "Identificar las opciones de preferencia de lectura."
  - "Seleccionar la opción que fuerza la lectura a un nodo secundario."
explicacion: "El readPreference 'secondary' dirige las lecturas a los nodos secundarios, permitiendo escalar la lectura pero con el riesgo de leer datos no actualizados si la replicación está retrasada."
```

### 12 — Strong Consistency en Firestore
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["firestore", "consistency", "transaction"]
tipo: mc
enunciado: "¿Qué método de lectura en Firestore garantiza que se obtienen los datos más recientes confirmados por una transacción previa?"
opciones_explicitas:
  - "get()" con consistency 'default'."
  - "get()" con consistency 'strong'."
  - "listen()" sin filtros."
  - "get()" con consistency 'eventual'."
respuesta: "get()" con consistency 'strong'."
pasos:
  - "Distinguir entre los tipos de consistencia en Firestore."
  - "Identificar el método que fuerza la consistencia fuerte."
explicacion: "La consistencia fuerte en Firestore asegura que la lectura refleje todas las transacciones confirmadas previamente, aunque esto pueda aumentar la latencia."
```

### 13 — Bloom Filter en Cassandra
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["cassandra", "optimization", "read-path"]
tipo: completar
enunciado: "En Cassandra, la estructura de datos utilizada en cada SSTable para determinar rápidamente si una clave existe en disco sin leer el archivo completo se llama: ______ filter."
respuesta: "bloom"
respuestas_validas:
  - "bloom"
  - "Bloom"
  - "BLOOM"
pasos:
  - "Analizar el proceso de búsqueda de datos en SSTables."
  - "Identificar la estructura probabilística de bajo overhead."
explicacion: "Los Bloom Filters permiten a Cassandra verificar rápidamente la existencia de una clave en una SSTable, evitando lecturas de disco innecesarias y mejorando el rendimiento de lectura."
```

### 14 — Conditional Writes en DynamoDB
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["dynamodb", "conditional-update", "optimistic-locking"]
tipo: vf
enunciado: "Las escrituras condicionales en DynamoDB permiten actualizar un ítem solo si su atributo `version` coincide con un valor esperado, implementando un bloqueo optimista sin necesidad de locks explícitos."
respuesta: verdadero
pasos:
  - "Verificar la capacidad de DynamoDB para condiciones en escrituras."
  - "Validar el patrón de bloqueo optimista en bases de datos NoSQL."
explicacion: "DynamoDB soporta escrituras condicionales mediante el parámetro `ConditionExpression`, permitiendo actualizaciones atómicas basadas en el estado actual del ítem."
```

### 15 — Time-To-Live (TTL) en Azure Cosmos DB
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["cosmosdb", "ttl", "costos"]
tipo: mc
enunciado: "¿Cuál es el efecto secundario principal de habilitar TTL en Azure Cosmos DB?"
opciones_explicitas:
  - "Aumenta el costo de lectura de los documentos existentes."
  - "Reduce el costo de almacenamiento eliminando documentos expirados."
  - "Incrementa la latencia de escritura en un 50%."
  - "Impide la replicación de documentos antes de su expiración."
respuesta: "Reduce el costo de almacenamiento eliminando documentos expirados."
pasos:
  - "Analizar el propósito de TTL en bases de datos NoSQL."
  - "Evaluar el impacto en los costos operativos."
explicacion: "TTL permite la eliminación automática de documentos, reduciendo el volumen de datos almacenados y, por ende, los costos de almacenamiento en la nube."
```

### 16 — Sharding Strategy en MongoDB
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["mongodb", "sharding", "hashed"]
tipo: completar
enunciado: "Para distribuir uniformemente los datos en MongoDB sin conocer los rangos de valor de la clave, se utiliza un hash de la clave de sharding. El tipo de sharding correspondiente es: ______ sharding."
respuesta: "hashed"
respuestas_validas:
  - "hashed"
  - "Hashed"
  - "HASHED"
pasos:
  - "Identificar los tipos de sharding en MongoDB."
  - "Seleccionar el método que usa hash para distribución uniforme."
explicacion: "El sharding por hash (`hashed`) distribuye los datos uniformemente entre los shards, evitando hotspots causados por rangos de valores (como fechas secuenciales)."
```

### 17 — Eventual Consistency en Cosmos DB
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["cosmosdb", "consistency", "performance"]
tipo: vf
enunciado: "En Azure Cosmos DB, el nivel de consistencia 'Eventual' garantiza que las lecturas siempre reflejen el último valor escrito confirmado, incluso en regiones geográficas remotas."
respuesta: falso
pasos:
  - "Definir el nivel de consistencia 'Eventual' en Cosmos DB."
  - "Verificar si se garantiza la frescura de datos en tiempo real."
explicacion: "La consistencia eventual no garantiza que las lecturas reflejen el último valor escrito; puede haber una ventana de inconsistencia donde las lecturas devuelvan datos antiguos."
```

### 18 — Compaction en ScyllaDB
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["scylladb", "compaction", "rendimiento"]
tipo: mc
enunciado: "¿Qué característica principal distingue la compacción en ScyllaDB respecto a Cassandra?"
opciones_explicitas:
  - "Scylla no utiliza compacción, usa solo append-only logs."
  - "Scylla implementa compacción en paralelo y usa hardware moderno para mayor throughput."
  - "Scylla utiliza un algoritmo de compacción único basado en B-Trees."
  - "Scylla desactiva la compacción por defecto para máxima velocidad."
respuesta: "Scylla implementa compacción en paralelo y usa hardware moderno para mayor throughput."
pasos:
  - "Comparar la arquitectura de ScyllaDB con Cassandra."
  - "Identificar las optimizaciones de I/O y paralelismo."
explicacion: "ScyllaDB está diseñado para aprovechar el hardware moderno y ofrece una compacción altamente paralela y eficiente, reduciendo la sobrecarga de I/O comparada con la implementación de Cassandra."
```

### 19 — Read Repair en Cassandra
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["cassandra", "read-repair", "consistencia"]
tipo: completar
enunciado: "En Cassandra, el mecanismo que detecta y corrige datos inconsistentes entre réplicas durante una operación de lectura se llama: ______ repair."
respuesta: "read"
respuestas_validas:
  - "read"
  - "Read"
  - "READ"
pasos:
  - "Identificar el proceso de corrección de datos en lecturas."
  - "Nombrar el componente responsable de sincronizar réplicas."
explicacion: "Read Repair detecta diferencias entre réplicas durante una lectura y actualiza las réplicas desactualizadas para garantizar la consistencia futura."
```

### 20 — Indexes en Firestore
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["firestore", "indexes", "composite"]
tipo: vf
enunciado: "Firestore requiere que se creen manualmente los índices compuestos (composite indexes) antes de ejecutar consultas que filtren por múltiples campos, a diferencia de las bases de datos relacionales que pueden usar índices automáticos."
respuesta: verdadero
pasos:
  - "Verificar el modelo de indexación en Firestore."
  - "Comparar con la indexación automática en SQL."
explicacion: "Firestore no crea índices compuestos automáticamente para mejorar el rendimiento; el desarrollador debe definirlos explícitamente en el archivo de configuración."
```

### 21 — Partitioning en DynamoDB
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["dynamodb", "partitioning", "scalability"]
tipo: mc
enunciado: "¿Qué factor determina la distribución de datos en las particiones de una tabla de DynamoDB?"
opciones_explicitas:
  - "El orden de inserción de los registros."
  - "El hash de la clave de partición (Partition Key)."
  - "La cantidad de capacidad de lectura reservada."
  - "El tamaño del ítem en bytes."
respuesta: "El hash de la clave de partición (Partition Key)."
pasos:
  - "Analizar cómo DynamoDB asigna datos a particiones."
  - "Identificar el mecanismo de hashing subyacente."
explicacion: "DynamoDB utiliza un hash de la clave de partición para determinar a qué partición física se asigna un ítem, asegurando una distribución uniforme si la clave tiene entropía."
```

### 22 — Time Series Data en Cosmos DB
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["cosmosdb", "timeseries", "optimization"]
tipo: completar
enunciado: "Para optimizar el almacenamiento y rendimiento de datos de series temporales en Azure Cosmos DB, se debe utilizar el contenedor con el modelo de partición basado en: ______."
respuesta: "time-series"
respuestas_validas:
  - "time-series"
  - "TimeSeries"
  - "time_series"
pasos:
  - "Identificar el modelo de datos específico para series temporales."
  - "Seleccionar la configuración de contenedor adecuada."
explicacion: "Los contenedores de series temporales en Cosmos DB optimizan el almacenamiento y las consultas para datos que se append-only y se agrupan por tiempo."
```

### 23 — Write-Ahead Log en MongoDB
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["mongodb", "wal", "durabilidad"]
tipo: vf
enunciado: "MongoDB utiliza un Write-Ahead Log (WAL) para garantizar la durabilidad de los datos antes de que se escriban en las SSTables o archivos de datos."
respuesta: falso
pasos:
  - "Verificar el mecanismo de persistencia en MongoDB."
  - "Distinguir entre WAL y MMAPv1/WiredTiger."
explicacion: "MongoDB no utiliza un WAL tradicional como PostgreSQL. WiredTiger (el motor por defecto) depende de checkpoints y logs internos del motor de almacenamiento para la recuperación."
```

### 24 — Consistency Level en Cassandra
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["cassandra", "consistency", "any"]
tipo: completar
enunciado: "En Cassandra, el nivel de consistencia que permite operaciones de escritura incluso si ninguna réplica responde, pero puede resultar en pérdida de datos, se llama: ______."
respuesta: "any"
respuestas_validas:
  - "any"
  - "ANY"
  - "Any"
pasos:
  - "Identificar los niveles de consistencia de Cassandra."
  - "Seleccionar el nivel que permite escritura en un hinted handoff."
explicacion: "El nivel 'any' permite la escritura si al menos un nodo responde (incluso si es un nodo de hinted handoff), pero no garantiza que la escritura se haya persistido en una réplica."
```

### 25 — Indexing en ScyllaDB
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-bases-de-datos-nosql"
  nivel: "avanzado"
  tags: ["scylladb", "indexing", "performance"]
tipo: mc
enunciado: "¿Cuál es la recomendación principal sobre el uso de índices secundarios en ScyllaDB?"
opciones_explicitas:
  - "Usar índices secundarios extensivamente para todas las consultas."
  - "Evitar índices secundarios y usar queries por clave de partición siempre."
  - "Los índices secundarios en ScyllaDB son más lentos que en Cassandra."
  - "ScyllaDB no soporta índices secundarios."
respuesta: "Evitar índices secundarios y usar queries por clave de partición siempre."
pasos:
  - "Analizar el impacto de los índices secundarios en bases de datos distribuidas."
  - "Identificar la mejor práctica de diseño de esquemas en ScyllaDB."
explicacion: "Los índices secundarios en ScyllaDB (y Cassandra) pueden causar broadcast de consultas y problemas de rendimiento. Se recomienda diseñar el esquema para evitarlos, usando claves de partición adecuadas."
```