# Programación de tareas con `cron` en Bash

## Introducción

En el ecosistema de sistemas Unix-like, la fiabilidad y la automatización son pilares fundamentales. `cron` es el daemon (servicio en segundo plano) estándar para ejecutar comandos o scripts en momentos predefinidos. A diferencia de herramientas interactivas, `cron` opera en el fondo, lo que lo hace ideal para tareas de mantenimiento, copias de seguridad, limpieza de logs o ejecución de scripts de backend que no requieren intervención humana.

Para un profesional de sistemas, dominar la sintaxis de `cron` y la gestión de sus logs es tan importante como escribir el script en sí. Un error de sintaxis no genera un error visible en pantalla; simplemente, la tarea no se ejecuta, lo que puede pasar desapercibido hasta que las consecuencias (como un disco lleno por falta de rotación de logs) se hacen evidentes.

## La sintaxis: Entendiendo los campos

La configuración de `cron` reside en archivos de texto plano. Los usuarios pueden editar su propio cron mediante el comando `crontab -e`. La sintaxis básica consta de cinco campos separados por espacios, seguidos del comando a ejecutar:

```bash
# .------------- minuto (0 - 59)
# |  .---------- hora (0 - 23)
# |  |  .------- día del mes (1 - 31)
# |  |  |  .---- mes (1 - 12)
# |  |  |  |  .- día de la semana (0 - 7, donde 0 y 7 son domingo)
# |  |  |  |  |
*  *  *  *  *  /ruta/al/comando
```

### Ejemplos prácticos de sintaxis

1.  **Ejecutar cada 15 minutos:**
    ```bash
    */15 * * * * /home/usuario/scripts/backup.sh
    ```
    El asterisco (`*`) significa "cualquier valor". La barra (`/`) indica intervalos.

2.  **Ejecutar el día 1 de cada mes a las 03:00 AM:**
    ```bash
    0 3 1 * * /usr/bin/rsync -avz /datos /backup
    ```

3.  **Ejecutar de lunes a viernes a las 08:00 PM:**
    ```bash
    0 20 * * 1-5 /opt/app/scripts/cleanup.sh
    ```

4.  **Uso de listas y rangos:**
    ```bash
    # Ejecutar a las 10:00 AM y a las 4:00 PM todos los días
    0 10,16 * * * /scripts/check_status.sh
    ```

> **Nota técnica:** El comando se ejecuta en el entorno del usuario que posee el cron. Es crucial usar rutas absolutas para los comandos y, preferiblemente, para los archivos de entrada/salida, ya que el directorio de trabajo por defecto suele ser el directorio home del usuario, no el lugar desde donde se editó el crontab.

## Errores comunes

1.  **Confusión con los días de la semana:**
    Muchos usuarios asumen que el primer día es lunes. En `cron`, **domingo es 0** (o 7) y **lunes es 1**. Confundir esto puede hacer que una tarea de fin de semana se ejecute en lunes.

2.  **Ignorar la salida estándar y de error:**
    Por defecto, `cron` envía el output del comando por correo electrónico al usuario. Si no se configura un MTA (agente de transferencia de correo) o si la bandeja de entrada está saturada, esto puede ser molesto o perderse.
    *   *Mejor práctica:* Redirigir la salida a un log explícito.
    ```bash
    0 2 * * * /scripts/backup.sh >> /var/log/backup.log 2>&1
    ```

3.  **Variables de entorno limitadas:**
    El entorno de `cron` es minimalista. Variables como `$PATH` suelen estar restringidas. Si tu script depende de herramientas instaladas en directorios no estándar (ej. `/usr/local/bin`), debes especificar la ruta completa o definir `$PATH` dentro del archivo crontab o al inicio del script.

4.  **Espacios en rutas:**
    Los espacios en nombres de directorios o archivos pueden romper la sintaxis si no se escapan correctamente. Es una buena práctica evitar espacios en las rutas de los scripts gestionados por cron.

## Cuándo usarlo y cuándo NO usarlo

**Usa `cron` cuando:**
*   La tarea es recurrente y periódica (diaria, semanal, mensual).
*   La tarea es de bajo mantenimiento y no requiere una ventana de tiempo estricta al segundo.
*   El servidor está encendido las 24 horas del día.
*   Necesitas una solución nativa, sin dependencias externas.

**No uses `cron` cuando:**
*   Necesitas ejecutar una tarea una sola vez en el futuro (usa `at`).
*   Necesitas alta precisión temporal o dependencia de eventos (usa `systemd timers` en sistemas modernos).
*   La tarea requiere interactividad o acceso a la sesión gráfica.
*   La carga de la tarea es tan alta que requiere orquestación distribuida (usa herramientas como Airflow, Celery, o Kubernetes CronJobs).

## Ejemplo extendido: Rotación y compresión de logs de una aplicación web

Imagina que tienes una aplicación en `/var/www/miapp` que escribe logs en `/var/www/miapp/logs/access.log`. Queremos que cada noche a las 2:30 AM se comprima el log del día anterior y se eliminen los que tengan más de 30 días.

**El script (`/usr/local/bin/rotate_logs.sh`):**

```bash
#!/bin/bash

# Variables de entorno explícitas
LOG_DIR="/var/www/miapp/logs"
RETENTION_DAYS=30
DATE_STAMP=$(date +%Y-%m-%d)

# 1. Comprimir el log actual si existe
if [ -f "$LOG_DIR/access.log" ]; then
    cp "$LOG_DIR/access.log" "$LOG_DIR/access-${DATE_STAMP}.log"
    gzip "$LOG_DIR/access-${DATE_STAMP}.log"
    # Truncar el log original para que la aplicación continúe escribiendo sin errores
    > "$LOG_DIR/access.log"
    echo "$(date): Log rotated successfully" >> /var/log/log_rotation.log
else
    echo "$(date): No log file found to rotate" >> /var/log/log_rotation.log
fi

# 2. Eliminar logs antiguos
find "$LOG_DIR" -name "access-*.log.gz" -type f -mtime +${RETENTION_DAYS} -delete
```

**Configuración del Crontab (`crontab -e`):**

```bash
# Asegurarse de que el script tenga permisos de ejecución: chmod +x /usr/local/bin/rotate_logs.sh

# Ejecutar a las 2:30 AM todos los días
30 2 * * * /usr/local/bin/rotate_logs.sh
```

**Análisis del caso:**
Este ejemplo demuestra la importancia de las rutas absolutas (`/usr/local/bin/...`), el uso de variables para mantener la configurabilidad y la redirección de logs del script a un archivo de auditoría separado. Al truncar el archivo original (`> file`) en lugar de borrarlo, garantizamos que el proceso de la aplicación (que puede haber abierto el descriptor de archivo) siga funcionando sin reinicios.