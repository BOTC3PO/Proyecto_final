### 1 — Aislamiento en Transacciones Anidadas
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["savepoint", "rollback", "nested-transactions"]
enunciado:
  uno_de([
    "En una base de datos que soporta transacciones anidadas, ejecutas un `BEGIN TRAN`, luego un `SAVE TRAN S1`, y finalmente un `ROLLBACK TRAN S1`. ¿Qué ocurre con los cambios realizados después del `SAVE TRAN S1`?",
    "Si tienes una transacción activa con un punto de guardado `S1` definido, y ejecutas `ROLLBACK TRAN S1`, ¿qué conjunto de datos se revierte?"
  ])
tipo: vf
respuesta: verdadero
pasos:
  - "Identificar que `ROLLBACK TRAN <nombre>` revierte la transacción al punto de guardado especificado."
  - "Confirmar que los cambios realizados ANTES del `SAVE TRAN` permanecen intactos."
  - "Confirmar que los cambios realizados DESPUÉS del `SAVE TRAN` se pierden."
explicacion:
  "El comando `ROLLBACK TRAN <nombre_del_savepoint>` revierte la transacción únicamente al punto de guardado especificado. Los cambios realizados antes del `SAVE TRAN` siguen siendo parte de la transacción externa y no se pierden, mientras que los posteriores sí se deshacen."
```

### 2 — Propiedad ACID: Atomicidad
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["acid", "atomicity", "conceptos-basicos"]
enunciado:
  uno_de([
    "¿Cuál es la definición técnica correcta de la propiedad 'Atomicidad' en una transacción SQL?",
    "En el contexto de ACID, ¿qué garantiza la 'A' de Atomicidad?"
  ])
tipo: mc
opciones_explicitas:
  - "Que múltiples transacciones concurrentes no interfieren entre sí."
  - "Que una transacción se ejecuta completamente o no se ejecuta en absoluto."
  - "Que los cambios persisten en el disco incluso si falla el sistema."
  - "Que los datos se ven consistentes desde el inicio de la transacción."
respuesta: "Que una transacción se ejecuta completamente o no se ejecuta en absoluto."
pasos:
  - "Analizar las definiciones de ACID."
  - "Descartar Isolation (concurrency), Durability (persistencia) y Consistency (estado válido)."
  - "Seleccionar la definición que implica indivisibilidad de las operaciones."
explicacion:
  "Atomicidad significa que todas las operaciones dentro de la transacción son indivisibles. Si una falla, todo el lote se revierte, dejando la base de datos en el estado previo al inicio de la transacción."
```

### 3 — Nivel de Aislamiento: Phantom Reads
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["phantom-reads", "isolation-levels", "serializable"]
enunciado:
  uno_de([
    "Si una transacción ejecuta dos lecturas consecutivas con `SELECT COUNT(*)` sobre una tabla, y la segunda lectura devuelve un número mayor debido a inserciones de otras transacciones, ¿qué fenómeno se ha producido?",
    "¿Cómo se llama el problema donde una transacción lee datos que cumplen una condición, pero entre la lectura y el uso de esos datos, otra transacción inserta nuevos registros que también cumplen esa condición?"
  ])
tipo: completar
respuesta: "phantom"
respuestas_validas:
  - "phantom"
  - "phantom read"
  - "phantom reads"
  - "phantom effect"
pasos:
  - "Diferenciar entre Dirty Read, Non-repeatable Read y Phantom Read."
  - "Identificar que los Non-repeatable reads afectan filas existentes modificadas/borradas."
  - "Identificar que los Phantom reads afectan nuevas filas insertadas."
explicacion:
  "Las 'Phantom Reads' (Lecturas Fantasma) ocurren cuando una transacción vuelve a leer un rango de datos y encuentra nuevas filas insertadas por otra transacción que ya fue confirmada. Solo el nivel `SERIALIZABLE` o el uso de `UPDLOCK`/`XLOCK` en rangos previenen esto."
```

### 4 — Commit Explícito vs Autocommit
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["autocommit", "commit", "explicit-transaction"]
enunciado:
  uno_de([
    "En un motor SQL con `autocommit` activado por defecto, ¿qué sucede si ejecutas un `UPDATE` sin haber iniciado una transacción explícita?",
    "Si `autocommit` está habilitado en tu cliente SQL, ¿es necesario enviar un `COMMIT` tras un `INSERT` simple?"
  ])
tipo: vf
respuesta: falso
pasos:
  - "Recordar el comportamiento por defecto de la mayoría de los motores (MySQL, PostgreSQL, etc.)."
  - "Entender que `autocommit` confirma cada sentencia individual inmediatamente."
  - "Concluir que `COMMIT` explícito solo es necesario si se desactiva `autocommit` o se usa `BEGIN TRAN`."
explicacion:
  "Con `autocommit` activado, cada sentencia DML (INSERT, UPDATE, DELETE) se confirma automáticamente al finalizar su ejecución. No se necesita un `COMMIT` explícito a menos que se desee agrupar múltiples sentencias en una sola transacción atómica."
```

### 5 — Bloqueo de Tabla: TABLOCKX
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["locks", "tablockx", "exclusive-lock"]
enunciado:
  uno_de([
    "¿Qué efecto tiene el hint `WITH (TABLOCKX)` en una sentencia `SELECT` en SQL Server?",
    "Si aplicas `WITH (TABLOCKX)` a una lectura, ¿qué tipo de bloqueo se adquiere y qué bloquea?"
  ])
tipo: mc
opciones_explicitas:
  - "Adquiere un bloqueo compartido (Shared Lock) y permite lecturas concurrentes."
  - "Adquiere un bloqueo exclusivo (Exclusive Lock) y bloquea todas las demás transacciones hasta el fin de la transacción."
  - "Adquiere un bloqueo de esquema (Schema Lock) y permite escrituras."
  - "Adquiere un bloqueo de actualización (Update Lock) y evita deadlocks."
respuesta: "Adquiere un bloqueo exclusivo (Exclusive Lock) y bloquea todas las demás transacciones hasta el fin de la transacción."
pasos:
  - "Analizar el sufijo 'X' en TABLOCKX, que denota Exclusive."
  - "Determinar que los bloqueos exclusivos impiden lecturas y escrituras concurrentes."
  - "Confirmar que el bloqueo dura hasta el final de la transacción, no solo de la sentencia."
explicacion:
  "`TABLOCKX` fuerza un bloqueo exclusivo a nivel de tabla. Esto impide que cualquier otra transacción lea o escriba en la tabla hasta que la transacción actual termine (COMMIT o ROLLBACK). Es útil para cargas masivas o cuando se necesita consistencia absoluta de la tabla completa."
```

### 6 — Deadlock Detection
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["deadlock", "error-1205", "resolution"]
enunciado:
  uno_de([
    "Cuando el motor de base de datos detecta un ciclo de espera entre transacciones y elige sacrificar una, ¿qué ocurre con la transacción elegida como 'víctima'?",
    "¿Qué error típico recibe una transacción cuando es seleccionada como víctima de un deadlock por el servidor?"
  ])
tipo: completar
respuesta: "rollback"
respuestas_validas:
  - "rollback"
  - "roll back"
  - "se revierte"
  - "se deshace"
pasos:
  - "Identificar que el deadlock requiere romper un ciclo de dependencias."
  - "Determinar que el mecanismo estándar es abortar (deshacer) una de las transacciones involucradas."
  - "Especificar que la acción técnica es un `ROLLBACK` implícito forzado por el motor."
explicacion:
  "El motor de base de datos resuelve un deadlock eligiendo una transacción víctima y ejecutando un `ROLLBACK` automático sobre ella. La otra transacción puede continuar. El cliente recibe un error (ej. Error 1205 en SQL Server) indicando que la transacción fue víctima de un deadlock."
```

### 7 — Snapshot Isolation: Versioning
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["snapshot", "row-versioning", "read-committed-snapshot"]
enunciado:
  uno_de([
    "En SQL Server, si se activa `READ_COMMITTED_SNAPSHOT`, ¿qué mecanismo se usa para proporcionar la consistencia de lectura a las transacciones `READ COMMITTED`?",
    "¿Qué característica técnica permite que las lecturas en `READ COMMITTED` no bloqueen a las escrituras ni sean bloqueadas por ellas en SQL Server con `RCSI` activado?"
  ])
tipo: mc
opciones_explicitas:
  - "Uso de locks compartivos (Shared Locks) de larga duración."
  - "Almacenamiento de versiones de filas en `tempdb` para lecturas consistentes."
  - "Bloqueo exclusivo en la página de datos durante la lectura."
  - "Desactivación completa del motor de bloqueo (Locking)."
respuesta: "Almacenamiento de versiones de filas en `tempdb` para lecturas consistentes."
pasos:
  - "Recordar que `RCSI` (Read Committed Snapshot Isolation) cambia el modelo de concurrencia."
  - "Identificar que en lugar de locks compartivos, se usa versionamiento de filas."
  - "Confirmar que las versiones antiguas se guardan en `tempdb`."
explicacion:
  "Con `READ_COMMITTED_SNAPSHOT` activado, las transacciones `READ COMMITTED` ven una instantánea de los datos al momento de inicio de la transacción, usando versiones de filas almacenadas en `tempdb`. Esto evita los bloqueos compartivos (Shared Locks) que causan bloqueos de escritura (Write Locks) y viceversa, mejorando la concurrencia."
```

### 8 — Savepoint en Transacciones Anidadas (Lógica)
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["savepoint", "rollback-to", "logic-flow"]
enunciado:
  uno_de([
    "En PostgreSQL, si ejecutas `SAVEPOINT sp1`, luego haces cambios, y luego `ROLLBACK TO sp1`, ¿se cierra la transacción principal?",
    "Después de ejecutar `ROLLBACK TO savepoint_name` en una transacción activa, ¿qué estado tiene la transacción externa?"
  ])
tipo: vf
respuesta: falso
pasos:
  - "Analizar el alcance del `ROLLBACK TO <savepoint>`."
  - "Distinguir entre cerrar la transacción (`COMMIT`/`END TRANSACTION`) y revertir parcialmente."
  - "Confirmar que la transacción sigue abierta y activa tras el rollback al savepoint."
explicacion:
  "`ROLLBACK TO <savepoint>` revierte los cambios realizados después del savepoint, pero NO termina la transacción externa. La transacción sigue abierta y puede continuar ejecutando sentencias o finalmente hacer `COMMIT` o `ROLLBACK` total."
```

### 9 — Isolation Level: REPEATABLE READ
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["repeatable-read", "locks", "phantom-reads"]
enunciado:
  uno_de([
    "¿Qué tipo de lecturas NO se pueden producir bajo el nivel de aislamiento `REPEATABLE READ`?",
    "Si configuras `SET TRANSACTION ISOLATION LEVEL REPEATABLE READ`, ¿qué problema clásico de concurrencia previenes que `READ COMMITTED` no previene?"
  ])
tipo: mc
opciones_explicitas:
  - "Phantom Reads."
  - "Dirty Reads y Non-repeatable Reads."
  - "Solo Dirty Reads."
  - "Ninguno de los anteriores, permite todas las lecturas."
respuesta: "Dirty Reads y Non-repeatable Reads."
pasos:
  - "Definir `REPEATABLE READ`: las filas leídas no pueden ser modificadas por otras transacciones."
  - "Determinar que esto previene `Dirty Reads` (leer datos no confirmados) y `Non-repeatable Reads` (leer dos veces y obtener valores distintos)."
  - "Recordar que `REPEATABLE READ` NO previene `Phantom Reads` (nuevas filas insertadas)."
explicacion:
  "El nivel `REPEATABLE READ` asegura que cualquier fila leída no pueda ser modificada por otra transacción hasta que la actual termine. Esto previene `Dirty Reads` y `Non-repeatable Reads`. Sin embargo, no impide que otras transacciones inserten nuevas filas (Phantom Reads), lo cual requiere `SERIALIZABLE`."
```

### 10 — Optimistic Concurrency Control
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["optimistic", "pessimistic", "versioning", "conceptos"]
enunciado:
  uno_de([
    "¿Cuál es la estrategia principal de Optimistic Concurrency Control en bases de datos?",
    "En el modelo de concurrencia óptima, ¿cómo se detectan los conflictos entre transacciones?"
  ])
tipo: mc
opciones_explicitas:
  - "Adquiriendo bloqueos exclusivos al inicio de la lectura."
  - "Sin bloqueos durante la lectura, verificando integridad al escribir (commit)."
  - "Bloqueando la base de datos completa durante la transacción."
  - "Usando colas de espera FIFO para cada fila."
respuesta: "Sin bloqueos durante la lectura, verificando integridad al escribir (commit)."
pasos:
  - "Contrastar Optimista vs Pessimista."
  - "Identificar que el modelo óptimo asume que los conflictos son raros."
  - "Explicar que se lee sin bloquear y se valida el estado en el `COMMIT`."
explicacion:
  "El Control de Concurrencia Óptima (Optimistic CC) no utiliza bloqueos (locks) durante la fase de lectura. Asume que las transacciones no entrarán en conflicto. Al momento del `COMMIT`, verifica si los datos han cambiado desde la lectura; si es así, la transacción falla y debe reintentarse."
```

### 11 — XACT_ABORT
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["xact_abort", "error-handling", "sql-server"]
enunciado:
  uno_de([
    "¿Qué hace el comando `SET XACT_ABORT ON` en SQL Server cuando ocurre un error de ejecución en tiempo de ejecución?",
    "Con `SET XACT_ABORT ON`, si una sentencia dentro de una transacción explícita genera un error de tiempo de ejecución (ej. violación de clave foránea), ¿qué ocurre con la transacción?"
  ])
tipo: completar
respuesta: "rollback"
respuestas_validas:
  - "rollback"
  - "se revierte"
  - "se deshace"
  - "aborta"
pasos:
  - "Recordar el comportamiento por defecto de SQL Server (solo se revierte la sentencia errónea)."
  - "Identificar que `XACT_ABORT ON` cambia este comportamiento."
  - "Confirmar que cualquier error de tiempo de ejecución provoca el aborto de toda la transacción."
explicacion:
  "Por defecto, SQL Server revierte solo la sentencia que falló. Con `SET XACT_ABORT ON`, cualquier error de tiempo de ejecución (como violación de integridad o permisos) causa el `ROLLBACK` automático de toda la transacción activa y devuelve el control al cliente."
```

### 12 — Serializable: Locking de Rango
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["serializable", "range-locks", "phantom-reads"]
enunciado:
  uno_de([
    "¿Qué mecanismo de bloqueo adicional utiliza el nivel `SERIALIZABLE` para prevenir Phantom Reads?",
    "Para garantizar el nivel `SERIALIZABLE`, ¿qué tipo de locks adquiere el motor sobre los rangos de datos leídos?"
  ])
tipo: mc
opciones_explicitas:
  - "Bloqueos de fila (Row Locks) exclusivos."
  - "Range Locks (Bloqueos de rango) que impiden la inserción de nuevas filas."
  - "Bloqueos de esquema (Schema Lock) solo."
  - "No utiliza bloqueos, usa versionamiento."
respuesta: "Range Locks (Bloqueos de rango) que impiden la inserción de nuevas filas."
pasos:
  - "Analizar cómo se previenen las lecturas fantasma."
  - "Identificar que se necesita bloquear no solo las filas existentes, sino el 'hueco' donde podrían insertarse nuevas filas."
  - "Confirmar que los `Range Locks` (o Key Range Locks en índices) logran esto."
explicacion:
  "El nivel `SERIALIZABLE` previene Phantom Reads adquiriendo `Range Locks` (o Key Range Locks en índices). Estos bloqueos impiden que otras transacciones inserten nuevas filas que coincidan con el rango de búsqueda de la transacción actual, garantizando una serialización total."
```

### 13 — Dirty Read
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["dirty-read", "isolation-levels", "definition"]
enunciado:
  uno_de([
    "¿Qué es una 'Dirty Read' en el contexto de transacciones SQL?",
    "Si una transacción A lee datos que fueron modificados por una transacción B que aún NO ha hecho commit, ¿qué fenómeno se ha producido?"
  ])
tipo: completar
respuesta: "dirty"
respuestas_validas:
  - "dirty"
  - "dirty read"
  - "dirty reads"
  - "lectura sucia"
pasos:
  - "Definir los tipos de lecturas no repetibles."
  - "Identificar que 'sucio' implica leer datos no confirmados (potencialmente inválidos)."
  - "Asociar el término inglés 'Dirty Read'."
explicacion:
  "Una 'Dirty Read' (Lectura Sucia) ocurre cuando una transacción lee datos que han sido modificados por otra transacción que aún no se ha confirmado. Si la segunda transacción hace rollback, la primera habrá leído datos que nunca existieron realmente en la base de datos."
```

### 14 @@TRANCOUNT
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["trancount", "system-functions", "sql-server"]
enunciado:
  uno_de([
    "¿Qué valor devuelve la función `@@TRANCOUNT` inmediatamente después de ejecutar `BEGIN TRAN` por primera vez en una sesión?",
    "Si ejecutas `BEGIN TRAN` tres veces anidadas, ¿cuál es el valor de `@@TRANCOUNT` antes de hacer commit?"
  ])
tipo: mc
opciones_explicitas:
  - "0"
  - "1"
  - "3"
  - "NULL"
respuesta: "1"
pasos:
  - "Entender que `@@TRANCOUNT` cuenta el número de transacciones abiertas."
  - "Determinar que cada `BEGIN TRAN` incrementa el contador."
  - "Calcular: 1 inicio = 1."
explicacion:
  "`@@TRANCOUNT` es una variable de sistema que indica el número de transacciones de nivel de bloqueo abiertas para la conexión actual. Cada `BEGIN TRAN` incrementa este valor en 1. Por lo tanto, tras un solo `BEGIN TRAN`, el valor es 1."
```

### 15 - Savepoint Name Reuse
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["savepoint", "reuse", "behavior"]
enunciado:
  uno_de([
    "En SQL Server, si creas un `SAVE TRAN S1`, haces cambios, y luego creas otro `SAVE TRAN S1` con nuevos cambios, ¿qué ocurre al hacer `ROLLBACK TRAN S1`?",
    "¿Es válido reutilizar el mismo nombre para múltiples `SAVE TRAN` en una misma transacción? ¿Qué hace `ROLLBACK` con ese nombre?"
  ])
tipo: vf
respuesta: verdadero
pasos:
  - "Analizar la gestión de nombres de savepoints."
  - "Confirmar que reutilizar el nombre sobrescribe la referencia anterior."
  - "Determinar que `ROLLBACK TRAN S1` revierte al último punto guardado con ese nombre."
explicacion:
  "Es válido reutilizar nombres de savepoints. Cuando se crea un `SAVE TRAN S1` nuevamente, la referencia anterior se pierde. `ROLLBACK TRAN S1` revierte la transacción al *último* punto de guardado registrado con ese nombre, no al primero."
```

### 16 - Isolation Level: READ UNCOMMITTED
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["read-uncommitted", "hint", "dirty-reads"]
enunciado:
  uno_de([
    "¿Qué hint de SQL Server permite realizar lecturas sin adquirir bloqueos compartivos, permitiendo así 'Dirty Reads'?",
    "Si usas `WITH (NOLOCK)` en una consulta `SELECT`, ¿qué nivel de aislamiento estás simulando?"
  ])
tipo: completar
respuesta: "nolock"
respuestas_validas:
  - "nolock"
  - "NOLOCK"
  - "readuncommitted"
  - "READ UNCOMMITTED"
pasos:
  - "Identificar los hints de tabla comunes."
  - "Saber que `NOLOCK` ignora los bloqueos compartivos."
  - "Asociar `NOLOCK` con el nivel `READ UNCOMMITTED`."
explicacion:
  "El hint `NOLOCK` (o el nivel `READ UNCOMMITTED`) permite a la transacción leer datos que están siendo modificados por otras transacciones y aún no han sido confirmados. Esto evita bloqueos de lectura pero introduce el riesgo de leer datos 'sucios' (Dirty Reads)."
```

### 17 - Commit en Transacción Anulada
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["commit", "rollback", "state", "error"]
enunciado:
  uno_de([
    "Si ejecutas `ROLLBACK TRAN` explícitamente y luego intentas ejecutar `COMMIT TRAN` en la misma conexión, ¿qué ocurre?",
    "Después de un `ROLLBACK` explícito, ¿es válido intentar un `COMMIT`?"
  ])
tipo: vf
respuesta: falso
pasos:
  - "Analizar el estado de la transacción tras un `ROLLBACK`."
  - "Entender que `ROLLBACK` cierra la transacción y revierte cambios."
  - "Determinar que no hay transacción activa para confirmar."
explicacion:
  "Un `ROLLBACK` explícito cierra la transacción activa. Intentar ejecutar `COMMIT` después de un `ROLLBACK` generará un error (ej. 'Cannot commit while in a transaction' o similar, dependiendo del motor, ya que no hay transacción activa o el estado es inválido)."
```

### 18 - Implicit Transaction
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["implicit-transaction", "set", "autocommit"]
enunciado:
  uno_de([
    "¿Qué comando activa el modo de 'Transacciones Implícitas' en SQL Server?",
    "Con `SET IMPLICIT_TRANSACTIONS ON`, ¿cuándo comienza una nueva transacción automáticamente?"
  ])
tipo: mc
opciones_explicitas:
  - "Cuando se ejecuta `BEGIN TRAN`."
  - "Cuando se ejecuta la primera sentencia DML/DDL después de confirmar la anterior."
  - "Solo al iniciar la sesión."
  - "Nunca, es una función obsoleta."
respuesta: "Cuando se ejecuta la primera sentencia DML/DDL/DDL después de confirmar la anterior."
pasos:
  - "Diferenciar Autocommit, Explícito e Implícito."
  - "Recordar que en modo implícito, el primer DML/DDL inicia una transacción."
  - "Confirmar que esta transacción permanece abierta hasta `COMMIT` o `ROLLBACK`."
explicacion:
  "Con `SET IMPLICIT_TRANSACTIONS ON`, el motor no confirma automáticamente las sentencias. La primera sentencia DML (INSERT/UPDATE/DELETE) o DDL (CREATE/ALTER/DROP) inicia una nueva transacción. Esta permanece abierta hasta que se ejecuta `COMMIT` o `ROLLBACK`, momento en el cual se inicia automáticamente la siguiente."
```

### 19 - Lock Escalation
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["lock-escalation", "performance", "sql-server"]
enunciado:
  uno_de([
    "¿Qué es la 'Lock Escalation' en SQL Server?",
    "¿Por qué el motor de base de datos convierte bloqueos de fila a bloqueos de tabla?"
  ])
tipo: completar
respuesta: "escalation"
respuestas_validas:
  - "escalation"
  - "lock escalation"
  - "escalado de bloqueo"
  - "escalado"
pasos:
  - "Analizar el costo de mantener muchos locks de fila."
  - "Identificar la optimización del motor al cambiar el nivel de granularidad."
  - "Nombrar el proceso técnico."
explicacion:
  "La 'Lock Escalation' es el proceso por el cual el motor de base de datos convierte múltiples bloqueos de menor granularidad (como filas o páginas) en un único bloqueo de mayor granularidad (como la tabla completa) para reducir el consumo de memoria y mejorar el rendimiento, cuando se supera un umbral de bloqueos."
```

### 20 - Read Committed Snapshot (RCSI) vs Snapshot Isolation
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["rcsi", "snapshot-isolation", "difference"]
enunciado:
  uno_de([
    "¿Cuál es la diferencia principal entre `READ COMMITTED SNAPSHOT` y el nivel de aislamiento `SNAPSHOT`?",
    "En `SNAPSHOT ISOLATION`, ¿qué ve la transacción al inicio de su ejecución?"
  ])
tipo: mc
opciones_explicitas:
  - "RCSI ve la versión más reciente confirmada; SNAPSHOT ve la versión al inicio de la transacción."
  - "RCSI ve la versión al inicio de la transacción; SNAPSHOT ve la versión más reciente confirmada."
  - "Ambos son idénticos."
  - "RCSI usa locks; SNAPSHOT no usa locks."
respuesta: "RCSI ve la versión más reciente confirmada; SNAPSHOT ve la versión al inicio de la transacción."
pasos:
  - "Definir RCSI: comportamiento por defecto de lectura, pero consistente."
  - "Definir Snapshot Isolation: transacción completa ve una instantánea fija al inicio."
  - "Contrastar: RCSI permite lecturas 'más frescas' (hasta el commit previo), Snapshot es una burbuja fija."
explicacion:
  "`READ COMMITTED SNAPSHOT` (RCSI) mantiene el comportamiento de `READ COMMITTED` (lee datos confirmados más recientes) pero usa versionamiento para evitar bloqueos. El nivel `SNAPSHOT ISOLATION` crea una burbuja de transacción donde todos los datos se ven como estaban al inicio de la transacción, independientemente de cambios confirmados posteriores."
```

### 21 - XACT_ABORT OFF (Default Behavior)
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["xact_abort", "error", "partial-commit"]
enunciado:
  uno_de([
    "Con `SET XACT_ABORT OFF` (por defecto), si una sentencia dentro de una transacción falla por error de tiempo de ejecución, ¿qué ocurre con el resto de la transacción?",
    "¿Por qué es peligroso confiar en el comportamiento por defecto de `XACT_ABORT` en scripts críticos?"
  ])
tipo: completar
respuesta: "continua"
respuestas_validas:
  - "continua"
  - "continúa"
  - "se ejecuta"
  - "no se revierte"
pasos:
  - "Recordar el comportamiento por defecto de SQL Server."
  - "Identificar que solo la sentencia fallida se revierte."
  - "Confirmar que la transacción sigue abierta y las siguientes sentencias se ejecutan."
explicacion:
  "Con `XACT_ABORT OFF` (por defecto), solo la sentencia que genera el error de tiempo de ejecución se revierte. La transacción permanece activa y el flujo del script continúa con la siguiente sentencia. Esto puede llevar a estados inconsistentes si el error era crítico para la lógica de negocio."
```

### 22 - Lock Timeout
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["lock-timeout", "deadlock", "wait", "timeout"]
enunciado:
  uno_de([
    "¿Qué ocurre cuando una transacción espera un bloqueo por más tiempo que el valor configurado en `LOCK_TIMEOUT`?",
    "Si `LOCK_TIMEOUT` está configurado en 5000 ms y una transacción no puede adquirir un bloqueo en ese tiempo, ¿qué sucede?"
  ])
tipo: mc
opciones_explicitas:
  - "Se convierte en un deadlock automático."
  - "La transacción se revierte y devuelve un error de tiempo de espera."
  - "El motor elimina otros bloqueos para liberar la espera."
  - "La transacción espera indefinidamente."
respuesta: "La transacción se revierte y devuelve un error de tiempo de espera."
pasos:
  - "Definir `LOCK_TIMEOUT`."
  - "Entender que es un mecanismo de protección contra esperas infinitas."
  - "Confirmar que el resultado es un error (timeout) y no un deadlock."
explicacion:
  "`LOCK_TIMEOUT` especifica el tiempo máximo (en milisegundos) que una transacción esperará por un bloqueo. Si el tiempo expira, el motor aborta la sentencia actual (o la transacción, dependiendo del contexto) y devuelve un error de tiempo de espera, evitando bloqueos indefinidos."
```

### 23 - Savepoint en MySQL (InnoDB)
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["savepoint", "mysql", "innodb", "compatibility"]
enunciado:
  uno_de([
    "En MySQL con InnoDB, ¿es válido usar `SAVEPOINT` dentro de una transacción explícita?",
    "¿Soporta el motor InnoDB de MySQL el comando `SAVEPOINT`?"
  ])
tipo: vf
respuesta: verdadero
pasos:
  - "Verificar la compatibilidad de InnoDB con estándares SQL."
  - "Confirmar que InnoDB soporta transacciones completas y savepoints."
  - "Distinguir de motores no transaccionales (como MyISAM)."
explicacion:
  "El motor de almacenamiento InnoDB de MySQL soporta plenamente las transacciones ACID y el comando `SAVEPOINT`. Esto permite realizar `ROLLBACK TO <savepoint>` para revertir partes de una transacción activa, similar a SQL Server y PostgreSQL."
```

### 24 - Isolation Level: Cursor Stability
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["cursor-stability", "db2", "isolation-levels"]
enunciado:
  uno_de([
    "¿Qué nivel de aislamiento 'Cursor Stability' garantiza típicamente en bases de datos como IBM Db2?",
    "En el contexto de `Cursor Stability`, ¿qué bloqueos se mantienen mientras se navega por un cursor?"
  ])
tipo: completar
respuesta: "cursor"
respuestas_validas:
  - "cursor"
  - "cursor stability"
  - "estabilidad de cursor"
pasos:
  - "Identificar niveles de aislamiento específicos de ciertos motores (Db2, Informix)."
  - "Entender que `Cursor Stability` es un nivel común en Db2."
  - "Asociar el nombre con el concepto."
explicacion:
  "`Cursor Stability` es un nivel de aislamiento común en IBM Db2 e Informix. Garantiza que ninguna otra transacción pueda modificar los datos que la transacción actual está leyendo a través de un cursor. Es más estricto que `Read Stability` pero menos que `Repeatable Read` en algunos aspectos de bloqueo de rango."
```

### 25 - Explicit Commit vs Implicit
```yaml
metadata:
  materia: "sql"
  tema: "transacciones-sql"
  nivel: "avanzado"
  tags: ["commit", "implicit", "explicit", "best-practices"]
enunciado:
  uno_de([
    "¿Por qué se considera una buena práctica usar transacciones explícitas (`BEGIN`/`COMMIT`) en lugar de depender del comportamiento implícito en scripts de producción?",
    "¿Cuál es la ventaja principal de controlar explícitamente el `COMMIT` en un lote de operaciones SQL?"
  ])
tipo: mc
opciones_explicitas:
  - "Mayor velocidad de ejecución."
  - "Garantía de atomicidad y control preciso sobre cuándo se persisten los cambios."
  - "Reducción automática del uso de memoria de la base de datos."
  - "Evita la necesidad de índices."
respuesta: "Garantía de atomicidad y control preciso sobre cuándo se persisten los cambios."
pasos:
  - "Analizar los riesgos de depender de implícitos (errores parciales, estado inconsistente)."
  - "Identificar el beneficio del control explícito: agrupar operaciones atómicas."
  - "Seleccionar la opción que refleja seguridad y consistencia."
explicacion:
  "Las transacciones explícitas permiten agrupar múltiples operaciones en una unidad atómica. Esto garantiza que o bien todas las operaciones se confirmen (`COMMIT`) o ninguna (`ROLLBACK`), previniendo estados inconsistentes que podrían ocurrir si una operación falla a mitad de un lote dependiente."
```