# Respaldo y Recuperación de Bases de Datos: Estrategias Avanzadas

## Introducción

En el ámbito de la administración de bases de datos (DBA), la estrategia de *backup* y recuperación (*restore*) no es una tarea operativa rutinaria, sino un componente crítico de la arquitectura de alta disponibilidad y la continuidad del negocio. A diferencia de los enfoques básicos que se centran únicamente en la copia de archivos, el nivel avanzado exige comprender la consistencia transaccional, el impacto en el rendimiento durante la ventana de respaldo y la complejidad de la recuperación ante desastres (*Disaster Recovery*). El objetivo no es solo tener datos guardados, sino garantizar que sean recuperables dentro de los Objetivos de Tiempo de Recuperación (RTO) y Objetivos de Punto de Recuperación (RPO) definidos por la organización.

## Mecanismos de Respaldo y Sintaxis Crítica

Los sistemas de gestión de bases de datos relacionales (RDBMS) modernos, como PostgreSQL o MySQL, ofrecen mecanismos granulares para balancear el costo del rendimiento con la seguridad de los datos.

### 1. Respaldo Lógico vs. Físico
Un respaldo lógico (`pg_dump`, `mysqldump`) exporta datos en formato SQL o CSV. Es portable entre versiones y plataformas, pero es lento y no captura estructuras internas como índices complejos o secuencias de forma nativa. Es ideal para migraciones o recuperación de tablas específicas.

```sql
-- Ejemplo PostgreSQL: Respaldo lógico con compresión y formato personalizado
pg_dump -U administrador -d mi_base_datos -F c -Z 9 -f backup_compressido.dump
```

Un respaldo físico (basado en archivos de datos y WAL/Redo Logs) es mucho más rápido y consistente a nivel de página. Requiere que el servidor esté detenido o use herramientas como `pg_basebackup` o `XtraBackup` que capturan los logs de transacción en tiempo real.

### 2. La importancia del Modo de Recuperação

Para realizar respaldos incrementales o de punto en tiempo (*Point-in-Time Recovery*), la base de datos debe operar en un modo específico.

*   **PostgreSQL**: Debe estar en `archive_mode = on` y `wal_level = replica` (o `logical`). Sin esto, no se puede hacer una recuperación granular.
*   **MySQL (InnoDB)**: Requiere el binlog activado (`log_bin = ON`) y un modo de sincronización adecuado (`sync_binlog` y `innodb_flush_log_at_trx_commit`) para evitar la pérdida de datos en caso de caída del servidor.

## Errores Comunes en Niveles Avanzados

1.  **Confundir disponibilidad con integridad**: Tener un servidor en Cluster (HA) no protege contra corrupción lógica de datos o borrado accidental por un usuario con privilegios. El HA mitiga la caída del servidor, no la pérdida de datos.
2.  **Ignorar la validación del restore**: El error más costoso es descubrir que el backup está corrupto durante una emergencia real. Un backup no verificado es tan bueno como ninguno.
3.  **Subestimar el tamaño del WAL/Redo Log**: Si la tasa de transacciones es alta, el espacio de disco para los logs de escritura puede llenarse rápidamente, bloqueando la base de datos. La configuración del `max_wal_size` es crítica.
4.  **Falta de pruebas de recuperación**: Configurar la automatización del backup es fácil; automatizar la prueba de restauración en un entorno aislado es difícil pero obligatorio.

## Cuándo usar qué estrategia (Trade-offs)

*   **Usar Respaldo Lógico (`pg_dump`)**: Cuando necesitas migrar entre versiones mayores (ej. PG 13 a 15), plataformas diferentes (Linux a Windows), o necesitas auditar el contenido de la base de datos antes de restaurar.
    *   *Trade-off*: Alto impacto en CPU y E/S durante el proceso; no es viable para bases de datos de terabytes en ventanas de tiempo cortas.
*   **Usar Respaldo Físico Incremental + Archiving**: Para bases de datos grandes donde el RPO debe ser cercano a cero. Permite recuperar el estado de la base en cualquier segundo dentro del rango de logs conservados.
    *   *Trade-off*: Complejidad operativa alta; requiere monitoreo estricto del espacio de disco para los archivos de WAL/archivos binlog.

## Ejemplo Extendido: Recuperación ante Desastre (PITR)

Imagina una base de datos PostgreSQL de 500 GB que sufre corrupción de datos a las 14:30 horas. No puedes simplemente restaurar el backup de la noche anterior (RPO = 24h, pérdida de datos crítica).

**Procedimiento Avanzado:**

1.  **Identificar el punto crítico**: Consultar los logs de aplicación o `pg_wal` para encontrar la transacción exacta que causó la corrupción. Digamos que fue a las 14:25:10.
2.  **Preparar el entorno de recuperación**:
    ```bash
    # Detener el servidor principal
    pg_ctl stop -D /var/lib/postgresql/data

    # Renombrar la carpeta de datos actual como respaldo de emergencia
    mv /var/lib/postgresql/data /var/lib/postgresql/data.corrupted

    # Crear nueva carpeta e inicializar cluster
    initdb -D /var/lib/postgresql/data
    ```
3.  **Restaurar el backup base**:
    ```bash
    # Restaurar el backup físico más reciente (ej. de las 02:00 AM)
    pg_restore -d postgres -F d /backups/base_backup_latest
    ```
4.  **Configurar Recovery**:
    En el archivo `postgresql.conf` o `recovery.signal` (dependiendo de la versión), definir:
    *   `restore_command = 'cp /wal_archive/%f %p'`
    *   `recovery_target_time = '2023-10-27 14:25:00'` (Justo antes del error).
5.  **Iniciar la recuperación**:
    ```bash
    # El servidor iniciará en modo recovery, aplicará todos los WALs hasta el tiempo target y se detendrá.
    pg_ctl start -D /var/lib/postgresql/data
    ```

Este proceso garantiza que la base de datos vuelva a estar operativa con datos consistentes hasta el segundo anterior al incidente, minimizando la pérdida de negocio.