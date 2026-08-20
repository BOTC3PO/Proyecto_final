### 1 — Compresión en Backup Incremental con Tar
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["tar", "incremental", "compresion"]
enunciado:
  Uno_de([
    "Para crear un backup incremental comprimido con gzip en Linux utilizando tar, ¿qué flag se debe usar para habilitar la compresión gzip en la salida estándar?",
    "Al ejecutar un backup incremental en formato tar que requiere compresión en tiempo real para ahorrar espacio en disco, ¿qué opción de tar invoca al compresor gzip automáticamente?",
    "Si necesitas generar un archivo .tar.gz que contenga solo los archivos modificados desde el último backup (basado en timestamps), ¿qué flag de tar activa la compresión gzip integrada?"
  ])
respuesta: z
tipo: completar
respuestas_validas:
  - z
  - -z
pasos:
  - "Identificar el comando base tar."
  - "Recordar que la compresión gzip se activa con el flag específico."
  - "Verificar que este flag es compatible con el modo incremental."
explicacion: El flag `-z` (o `--gzip`) activa la compresión gzip dentro de tar. Es esencial para backups incrementales donde el volumen de datos cambia frecuentemente, ya que reduce el tamaño del archivo resultante sin necesidad de un paso posterior de compresión.

### 2 — Punto de Recuperación en PostgreSQL
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["postgresql", "pg_basebackup", "punto-recuperacion"]
enunciado:
  Uno_de([
    "En PostgreSQL, ¿qué comando se utiliza para tomar una copia física consistente de la base de datos incluyendo WALs necesarios para recuperación?",
    "¿Cuál es la utilidad de línea de comandos estándar de PostgreSQL para crear un backup físico base que sirva como punto de inicio para la replicación o recuperación?",
    "Para iniciar un proceso de backup físico en PostgreSQL que garantice la consistencia de los datos en disco, ¿qué binario se ejecuta desde la terminal del sistema?"
  ])
respuesta: pg_basebackup
tipo: completar
respuestas_validas:
  - pg_basebackup
  - pg_base_backup
pasos:
  - "Reconocer el ecosistema de PostgreSQL."
  - "Identificar la herramienta oficial para backups físicos."
  - "Distinguirlo de pg_dump (que es lógico)."
explicacion: `pg_basebackup` es la herramienta estándar para crear un backup físico consistente de un clúster PostgreSQL. Es fundamental para configurar réplicas en streaming o para recuperar la base de datos completa desde cero.

### 3 — Verificación de Integridad en Backup
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["integridad", "checksum", "verificacion"]
enunciado:
  Uno_de([
    "¿Qué mecanismo técnico se utiliza comúnmente para asegurar que un archivo de backup no se haya corrompido durante la transferencia o almacenamiento?",
    "Para detectar cambios no autorizados o errores de escritura en un backup, ¿qué tipo de valor hash se calcula típicamente antes y después del almacenamiento?",
    "¿Qué proceso de validación es crítico realizar inmediatamente después de descargar un backup de un objeto storage para garantizar su fiabilidad?"
  ])
respuesta: checksum
tipo: completar
respuestas_validas:
  - checksum
  - checksums
  - hash
  - hashes
pasos:
  - "Analizar la necesidad de integridad de datos."
  - "Identificar la técnica estándar de validación de integridad."
  - "Confirmar que checksum es el término genérico técnico."
explicacion: Los checksums (o hashes) permiten verificar la integridad de los datos. Si el checksum calculado localmente al recuperar el backup no coincide con el original, se sabe que los datos están corruptos.

### 4 — Retención de Logs WAL
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["postgresql", "wal", "retencion", "archiving"]
enunciado:
  Uno_de([
    "En PostgreSQL, ¿qué parámetro de configuración se debe establecer en `postgresql.conf` para habilitar el archivado de los segmentos de Write-Ahead Log (WAL)?",
    "¿Qué variable de configuración controla el comando que se ejecuta cada vez que un segmento WAL está lleno y debe ser archivado?",
    "Para garantizar la recuperación punto-in-time (PITR), ¿qué parámetro debe apuntar a un script o comando que mueva los WALs a almacenamiento externo?"
  ])
respuesta: archive_command
tipo: completar
respuestas_validas:
  - archive_command
  - archive-command
pasos:
  - "Identificar la necesidad de archivar WALs para PITR."
  - "Recordar la variable de configuración principal de PostgreSQL para esto."
  - "Distinguir entre archive_mode (booleano) y archive_command (string)."
explicacion: `archive_command` define el shell command que copia los segmentos WAL rotados a un lugar seguro. Sin este comando configurado correctamente, no se puede realizar una recuperación punto-in-time completa.

### 5 — Modo de Archivado en PostgreSQL
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["postgresql", "wal", "configuracion", "on-off"]
enunciado:
  Uno_de([
    "¿Qué valor debe tener `archive_mode` en `postgresql.conf` para permitir que PostgreSQL archive los segmentos WAL?",
    "Para habilitar funcionalmente el archivado de WALs en PostgreSQL, ¿qué booleano debe estar activado en la configuración del servidor?",
    "Si `archive_command` está definido pero el archivado no funciona, ¿qué parámetro booleano es probable que esté desactivado en `postgresql.conf`?"
  ])
respuesta: on
tipo: completar
respuestas_validas:
  - on
  - true
  - 1
pasos:
  - "Entender que el archivado es una función habilitable."
  - "Identificar la variable de control principal."
  - "Saber que su valor habilitador es 'on'."
explicacion: `archive_mode` debe estar configurado como `on` para que PostgreSQL ejecute `archive_command`. Si está en `off`, los WALs se reciclan sin archivarse, impidiendo la recuperación continua.

### 6 — Comando de Restauración PITR
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["postgresql", "pitr", "restore", "recovery"]
enunciado:
  Uno_de([
    "En PostgreSQL 12+, ¿qué archivo debe crearse en el directorio de datos para iniciar una recuperación punto-in-time (PITR)?",
    "¿Qué archivo vacío o con configuración mínima se coloca en el cluster de PostgreSQL para indicar al servidor que debe recuperar desde un backup base?",
    "Para iniciar el proceso de recuperación de un backup físico en PostgreSQL moderno, ¿qué nombre de archivo se debe generar en el directorio de datos?"
  ])
respuesta: recovery.signal
tipo: completar
respuestas_validas:
  - recovery.signal
  - recovery.signal
pasos:
  - "Distinguir entre versiones antiguas y modernas de PostgreSQL."
  - "Saber que desde la v12 se usa un archivo de señal en lugar de `recovery.conf`."
  - "Confirmar el nombre exacto del archivo."
explicacion: Desde PostgreSQL 12, la creación del archivo `recovery.signal` (o `standby.signal` para réplicas) es la forma estándar de iniciar la recuperación o el modo standby. En versiones anteriores se usaba `recovery.conf`.

### 7 — Tipo de Backup Incremental en MySQL
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["mysql", "xtrabackup", "incremental", "base"]
enunciado:
  Uno_de([
    "En Percona XtraBackup, ¿qué subcomando se usa para crear un backup incremental basado en un backup previo completo?",
    "¿Qué comando de xtrabackup requiere especificar `--incremental-basedir` para tomar un incremento sobre una copia anterior?",
    "Para generar un backup incremental en XtraBackup que dependa de una copia base existente, ¿qué flag de subcomando se ejecuta?"
  ])
respuesta: xtrabackup --incremental
tipo: completar
respuestas_validas:
  - xtrabackup --incremental
  - xtrabackup --incremental-basedir
  - xtrabackup --incremental
pasos:
  - "Conocer el ecosistema de backups de MySQL (XtraBackup)."
  - "Identificar el subcomando específico para incrementales."
  - "Recordar que el comando principal es `xtrabackup`."
explicacion: El subcomando `--incremental` en XtraBackup permite crear backups incrementales. Requiere especificar el directorio del backup base (`--incremental-basedir`) desde el cual calcular los cambios.

### 8 — Preparación de Backup Incremental
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["mysql", "xtrabackup", "prepare", "consistencia"]
enunciado:
  Uno_de([
    "En Percona XtraBackup, ¿qué subcomando se utiliza para aplicar los logs de transacción (redo logs) y hacer el backup consistente para restauración?",
    "¿Qué proceso de XtraBackup simula el crash recovery para asegurar que los datos estén listos para ser copiados o restaurados?",
    "Para hacer un backup incremental de XtraBackup listo para restauración, ¿qué subcomando debe ejecutarse después de tomar el backup incremental?"
  ])
respuesta: xtrabackup --prepare
tipo: completar
respuestas_validas:
  - xtrabackup --prepare
  - xtrabackup --prepare --apply-log-only
pasos:
  - "Entender el ciclo de vida de un backup en XtraBackup."
  - "Identificar el paso de 'preparación' o 'aplicación de logs'."
  - "Confirmar el subcomando correspondiente."
explicacion: `--prepare` aplica los redo logs sobre el backup. En incrementales, el primer paso usa `--apply-log-only` para mantener los logs pendientes para el siguiente incremento, y el último paso aplica todo para dejarlo consistente.

### 9 — Comando de Backup Completo XtraBackup
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["mysql", "xtrabackup", "full-backup", "comando"]
enunciado:
  Uno_de([
    "¿Qué subcomando de Percona XtraBackup se usa para realizar un backup completo (full backup) de una base de datos MySQL?",
    "Para crear una copia base completa en XtraBackup, ¿qué instrucción se debe ejecutar en la terminal?"
  ])
respuesta: xtrabackup --backup
tipo: completar
respuestas_validas:
  - xtrabackup --backup
  - xtrabackup --backup --target-dir
pasos:
  - "Identificar el comando base de XtraBackup."
  - "Saber que `--backup` es la acción de captura de datos."
  - "Distinguirlo de `--prepare`."
explicacion: El subcomando `--backup` es el que realiza la captura real de los archivos de datos y logs de MySQL, escribiéndolos en el directorio de destino especificado.

### 10 — Restauración de Backup MySQL
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["mysql", "xtrabackup", "restore", "copy-back"]
enunciado:
  Uno_de([
    "En Percona XtraBackup, ¿qué subcomando se usa para copiar los datos preparados de vuelta al directorio de datos de MySQL?",
    "¿Qué acción de XtraBackup finaliza el proceso de restauración copiando los archivos de datos al lugar correcto?",
    "Para completar la recuperación de un backup de MySQL con XtraBackup, ¿qué subcomando se ejecuta tras la preparación?"
  ])
respuesta: xtrabackup --copy-back
tipo: completar
respuestas_validas:
  - xtrabackup --copy-back
  - xtrabackup --copy-back --target-dir
pasos:
  - "Identificar el paso final de la restauración."
  - "Saber que los datos deben copiarse al datadir de MySQL."
  - "Confirmar el subcomando `--copy-back`."
explicacion: `--copy-back` copia los archivos de datos preparados desde el directorio de backup al directorio de datos de MySQL (`datadir`). Luego se deben ajustar los permisos y reiniciar el servicio.

### 11 — Verdad/Falso: Backup Lógico vs Físico
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["pg_dump", "logical", "physical", "diferencias"]
enunciado: "pg_dump genera un backup físico que puede restaurarse directamente sobre una instalación de PostgreSQL sin necesidad de reconstruir la estructura de directorios."
respuesta: falso
tipo: vf
pasos:
  - "Analizar la afirmación sobre `pg_dump`."
  - "Recordar que `pg_dump` es lógico (SQL)."
  - "Concluir que la afirmación es falsa porque describe un backup físico."
explicacion: `pg_dump` genera un archivo de texto con sentencias SQL (backup lógico). No es una copia física de los archivos de datos. La restauración requiere recrear la base de datos y las tablas mediante `psql`, no copiar archivos de disco.

### 12 — Verdad/Falso: Retención de WALs
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["postgresql", "wal", "retencion", "archiving"]
enunciado: "Si se configura `archive_command` en PostgreSQL, el servidor eliminará automáticamente los segmentos WAL antiguos tan pronto como se archive exitosamente, independientemente de si se necesita para recuperación futura."
respuesta: falso
tipo: vf
pasos:
  - "Analizar el comportamiento de limpieza de WALs."
  - "Recordar que el archivado no implica eliminación inmediata si hay dependencias."
  - "Identificar que `restore_command` o herramientas externas gestionan la limpieza segura."
explicacion: PostgreSQL no elimina los WALs archivados automáticamente solo por haberlos archivado. Se necesita configurar `archive_cleanup_command` o usar herramientas como `pg_archivecleanup` para gestionar la retención y evitar que el disco se llene.

### 13 — Verdad/Falso: Incrementales en XtraBackup
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["mysql", "xtrabackup", "incremental", "dependencia"]
enunciado: "En Percona XtraBackup, un backup incremental puede crearse independientemente de cualquier backup previo, sin necesidad de especificar un directorio base."
respuesta: falso
tipo: vf
pasos:
  - "Analizar la naturaleza de los backups incrementales."
  - "Recordar que 'incremental' implica cambio respecto a algo anterior."
  - "Concluir que es imposible sin una base de referencia."
explicacion: Un backup incremental depende estrictamente de un backup base (completo o otro incremental). El parámetro `--incremental-basedir` es obligatorio para indicar desde dónde calcular los cambios. Sin base, no hay incremento.

### 14 — Verdad/Falso: Consistencia en Backup Físico
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["mysql", "xtrabackup", "consistencia", "innoDB"]
enunciado: "Percona XtraBackup garantiza la consistencia del backup de tablas InnoDB sin necesidad de bloquear las tablas durante la copia de datos."
respuesta: verdadero
tipo: vf
pasos:
  - "Analizar la característica clave de XtraBackup."
  - "Recordar que usa hot backup para InnoDB."
  - "Confirmar que no requiere bloqueos de escritura."
explicacion: XtraBackup escanea los redo logs y copia los archivos de datos mientras el motor InnoDB sigue operando. Usa una técnica de snapshot consistente, evitando bloqueos de tablas (lock-free), lo que permite backups en caliente.

### 15 — Verdad/Falso: Recuperação PITR
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["postgresql", "pitr", "wal", "granularidad"]
enunciado: "La recuperación punto-in-time (PITR) en PostgreSQL permite restaurar la base de datos a cualquier momento exacto entre dos backups completos consecutivos, siempre que se tengan los WALs archivados."
respuesta: verdadero
tipo: vf
pasos:
  - "Analizar la definición de PITR."
  - "Verificar la dependencia de los logs WAL."
  - "Confirmar que la granularidad es temporal y continua."
explicacion: PITR utiliza el backup base más reciente y luego aplica los segmentos WAL archivados secuencialmente hasta el punto temporal deseado. Esto ofrece una granularidad de recuperación mucho mayor que solo backups completos.

### 16 — Comando de Backup Completo en PostgreSQL
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["postgresql", "pg_dump", "full", "formato"]
enunciado:
  Uno_de([
    "¿Qué formato de salida de `pg_dump` se recomienda para backups completos que permitan restauración paralela y sean independientes de la versión de PostgreSQL?",
    "Para realizar un backup completo de PostgreSQL que sea flexible y permita restauración con `pg_restore`, ¿qué flag de formato se debe usar con `pg_dump`?",
    "¿Qué opción de `pg_dump` genera un archivo en formato 'custom' o 'directory' que es ideal para backups completos y portables?"
  ])
respuesta: -F c
tipo: completar
respuestas_validas:
  - -F c
  - --format=custom
  - -Fc
  - --format=c
pasos:
  - "Identificar `pg_dump` para backups lógicos."
  - "Recordar los formatos disponibles: plain, custom, directory, tar."
  - "Saber que `-F c` (custom) es el más recomendado por compresión y paralelismo."
explicacion: El formato `-F c` (custom) de `pg_dump` permite compresión, restauración paralela (`-j`) y es independiente de la estructura de directorios original, haciéndolo ideal para backups completos portables.

### 17 — Restauración Paralela en PostgreSQL
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["postgresql", "pg_restore", "paralelo", "velocidad"]
enunciado:
  Uno_de([
    "¿Qué flag de `pg_restore` se utiliza para especificar el número de hilos paralelos para la restauración de objetos de la base de datos?",
    "Para acelerar la restauración de un backup de PostgreSQL, ¿qué parámetro de `pg_restore` permite definir la concurrencia de hilos?",
    "Si se tiene un backup grande en formato custom, ¿qué opción de `pg_restore` se pasa para restaurar múltiples tablas simultáneamente?"
  ])
respuesta: -j
tipo: completar
respuestas_validas:
  - -j
  - --jobs
  - -j N (donde N es un numero)
  - --jobs=N
pasos:
  - "Identificar la necesidad de velocidad en restauración."
  - "Recordar que `pg_restore` soporta paralelismo."
  - "Saber que el flag es `-j` seguido del número de jobs."
explicacion: El flag `-j` (jobs) en `pg_restore` permite restaurar múltiples objetos (tablas, índices) en paralelo, acelerando significativamente el tiempo de recuperación en sistemas con múltiples núcleos de CPU.

### 18 — Comando de Restauración Lógica
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["postgresql", "pg_restore", "comando", "restauracion"]
enunciado:
  Uno_de([
    "¿Qué comando se utiliza para restaurar un backup de PostgreSQL generado por `pg_dump` en formato custom o directory?",
    "Para recuperar una base de datos desde un archivo de backup lógico de PostgreSQL, ¿qué herramienta se ejecuta en la terminal?"
  ])
respuesta: pg_restore
tipo: completar
respuestas_validas:
  - pg_restore
  - pg-restore
pasos:
  - "Distinguir entre herramientas de backup y restauración."
  - "Saber que `pg_dump` crea, `pg_restore` restaura (para formatos no-plain)."
  - "Confirmar el nombre del comando."
explicacion: `pg_restore` es la utilidad diseñada para leer archivos de backup en formato custom, directory o tar generados por `pg_dump` y reconstruir la base de datos. Para archivos plain SQL, se usa `psql`.

### 19 -- Comando de Restauración Lógica (SQL Plano)
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["postgresql", "psql", "restore", "plain"]
enunciado:
  Uno_de([
    "Si el backup de PostgreSQL es un archivo de texto SQL plano generado con `pg_dump -F p`, ¿qué comando se usa para restaurarlo?",
    "Para ejecutar un script SQL de backup de PostgreSQL y reconstruir la base de datos, ¿qué cliente de línea de comandos se utiliza?"
  ])
respuesta: psql
tipo: completar
respuestas_validas:
  - psql
  - psql -f
  - psql -d
  - psql -f archivo.sql
pasos:
  - "Identificar el tipo de backup: SQL plano."
  - "Saber que SQL plano se ejecuta como un script."
  - "Confirmar que el cliente de PostgreSQL es `psql`."
explicacion: Los backups en formato plain SQL son simplemente scripts de comandos SQL. Se restauran ejecutando `psql -d nombre_base_de_datos < archivo_backup.sql`. No requieren `pg_restore`.

### 20 -- Comando de Backup Completo en MySQL (Lógico)
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["mysql", "mysqldump", "full", "logico"]
enunciado:
  Uno_de([
    "¿Qué comando de línea de comandos se utiliza para realizar un backup lógico completo de todas las bases de datos en MySQL?",
    "Para exportar la estructura y datos de MySQL en formato SQL, ¿qué herramienta estándar se ejecuta?"
  ])
respuesta: mysqldump
tipo: completar
respuestas_validas:
  - mysqldump
  - mysqldump --all-databases
  - mysqldump -A
  - mysqldump --all-databases > backup.sql
pasos:
  - "Identificar la herramienta de backup lógico de MySQL."
  - "Saber que `mysqldump` es el estándar."
  - "Confirmar el nombre del comando."
explicacion: `mysqldump` es la herramienta estándar de MySQL para generar backups lógicos (archivos SQL). El flag `--all-databases` o `-A` se usa para volcar todo el servidor.

### 21 -- Comando de Restauración MySQL
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["mysql", "mysql", "restore", "source"]
enunciado:
  Uno_de([
    "¿Qué comando de MySQL se utiliza para ejecutar un script SQL de backup y restaurar la base de datos?",
    "Para importar un archivo de backup generado por `mysqldump` en MySQL, ¿qué cliente se ejecuta en la terminal?"
  ])
respuesta: mysql
tipo: completar
respuestas_validas:
  - mysql
  - mysql -u user -p db < backup.sql
  - mysql -e "source backup.sql"
pasos:
  - "Identificar el cliente de MySQL."
  - "Saber que los scripts SQL se ejecutan con el cliente."
  - "Confirmar el nombre del comando `mysql`."
explicacion: El comando `mysql` es el cliente de línea de comandos de MySQL. Se usa para ejecutar archivos SQL (`mysql -u user -p database < backup.sql`) o para interactuar directamente con el servidor.

### 22 -- Comando de Backup Incremental en MySQL (Lógico)
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["mysql", "mysqldump", "incremental", "log-bin"]
enunciado:
  Uno_de([
    "¿Qué opción de `mysqldump` se usa para incluir los eventos del log binario (binlog) en el backup para permitir recuperación hasta un punto específico?",
    "Para capturar el estado actual del log binario y continuar con el backup en `mysqldump`, ¿qué flag se utiliza?"
  ])
respuesta: --master-data
tipo: completar
respuestas_validas:
  - --master-data
  - --master-data=1
  - --master-data=2
pasos:
  - "Entender la necesidad de sincronizar con el log binario."
  - "Recordar que `mysqldump` puede capturar la posición del binlog."
  - "Confirmar el flag `--master-data`."
explicacion: `--master-data` graba la posición actual del log binario en el archivo de backup. Esto es crucial para configurar réplicas o para realizar recuperación punto-in-time posterior usando los binlogs desde ese punto.

### 23 -- Comando de Aplicación de Binlogs en MySQL
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["mysql", "mysqlbinlog", "recovery", "binlog"]
enunciado:
  Uno_de([
    "¿Qué herramienta se utiliza para leer y aplicar los eventos del log binario de MySQL para recuperación punto-in-time?",
    "Para extraer sentencias SQL de los archivos binlog de MySQL y aplicarlas a la base de datos, ¿qué comando se ejecuta?"
  ])
respuesta: mysqlbinlog
tipo: completar
respuestas_validas:
  - mysqlbinlog
  - mysqlbinlog --start-position
  - mysqlbinlog --stop-position
pasos:
  - "Identificar la herramienta de gestión de binlogs."
  - "Saber que `mysqlbinlog` convierte binlogs en SQL legible."
  - "Confirmar el nombre del comando."
explicacion: `mysqlbinlog` es la herramienta oficial para interpretar los logs binarios. Se usa para extraer eventos específicos (por tiempo o posición) y aplicarlos (`| mysql`) para recuperar la base de datos hasta un momento exacto.

### 24 -- Comando de Backup Incremental en PostgreSQL (Lógico)
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["postgresql", "pg_dump", "incremental", "logico"]
enunciado:
  Uno_de([
    "¿Qué archivo de PostgreSQL contiene la información necesaria para realizar un backup incremental lógico basado en el tiempo?",
    "Para rastrear cambios en PostgreSQL y permitir incrementales lógicos, ¿qué archivo de logs se debe archivar?"
  ])
respuesta: postgresql.auto.conf
tipo: falso
tipo: vf
enunciado_corregido: "postgresql.auto.conf es el archivo que se usa para archivar los logs de transacciones para backups incrementales lógicos en PostgreSQL."
respuesta: falso
tipo: vf
pasos:
  - "Analizar la afirmación sobre `postgresql.auto.conf`."
  - "Recordar que los logs de transacciones son los WALs."
  - "Saber que los WALs se archivan via `archive_command`, no en `postgresql.auto.conf`."
explicacion: La afirmación es falsa. `postgresql.auto.conf` contiene parámetros de configuración automáticos. Los logs de transacciones (WALs) se archivan mediante el comando definido en `archive_command`, no mediante un archivo de configuración específico para el contenido de los logs.

### 25 -- Comando de Backup Incremental en PostgreSQL (Físico)
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-backups-y-recuperacion"
  nivel: "avanzado"
  tags: ["postgresql", "pg_basebackup", "incremental", "fisico"]
enunciado:
  Uno_de([
    "¿Qué característica de PostgreSQL permite que `pg_basebackup` tome backups incrementales basados en la copia anterior?",
    "En PostgreSQL, ¿qué mecanismo subyacente hace posible que los backups físicos sean incrementales o basados en copias previas?"
  ])
respuesta: false
tipo: vf
enunciado_corregido: "pg_basebackup soporta nativamente backups incrementales basados en copias previas sin necesidad de herramientas externas."
respuesta: falso
tipo: vf
pasos:
  - "Analizar las capacidades de `pg_basebackup`."
  - "Saber que `pg_basebackup` solo hace backups completos (full)."
  - "Confirmar que no soporta incrementales nativos como XtraBackup."
explicacion: La afirmación es falsa. `pg_basebackup` solo genera backups completos del cluster. Para backups incrementales en PostgreSQL, se depende de la recuperación punto-in-time (PITR) combinando un backup base con los WALs archivados, no de un comando incremental en `pg_basebackup`.