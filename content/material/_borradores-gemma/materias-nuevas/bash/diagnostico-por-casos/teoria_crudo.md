# Diagnóstico avanzado de errores en Bash: Más allá de `echo`

## Introducción

En el desarrollo de scripts robustos, confiar en la salida visual (`stdout`) para diagnosticar errores es un error común en principiantes. El verdadero diagnóstico avanzado en Bash implica comprender el flujo de control, los códigos de salida y la separación estricta entre salida estándar (`stdout`) y error estándar (`stderr`). Este tema explora cómo interceptar, registrar y analizar fallos silenciosos o críticos sin detener la ejecución del script de manera abrupta, permitiendo una recuperación elegante o un reporte preciso del problema.

## Explicación central: El flujo de control y los descriptores de archivo

En Bash, cada proceso tiene al menos tres flujos de datos abiertos:
1.  **stdin (0)**: Entrada estándar.
2.  **stdout (1)**: Salida estándar (éxitos y resultados normales).
3.  **stderr (2)**: Error estándar (mensajes de error).

El diagnóstico avanzado se basa en redirigir estos flujos de manera selectiva. Un error común es asumir que si un comando falla, su salida se envía a `stderr`. Sin embargo, muchos comandos pueden escribir errores en `stdout` o silenciar completamente el problema si no se configura el entorno correctamente.

### Uso crítico de `set` y `$?`

La variable especial `$?` contiene el código de salida del último comando ejecutado. Por convención, `0` indica éxito y cualquier otro valor indica un error. Sin embargo, verificar `$?` manualmente tras cada comando es propenso a errores y verboso. La práctica avanzada utiliza `set -e` (exit on error) o `set -o pipefail` para automatizar la detección.

*   **`set -e`**: El script se detiene inmediatamente si cualquier comando devuelve un estado distinto de cero.
*   **`set -o pipefail`**: En una tubería (`pipe`), el estado de salida es el del último comando que terminó con un estado distinto de cero, o cero si todos tuvieron éxito. Esto es crucial porque, por defecto, Bash solo devuelve el estado del último comando de la tubería, ocultando fallos intermedios.

```bash
# Ejemplo de pipefail: si 'grep' falla (no encuentra nada), 
# el script detecta el error aunque 'wc -l' tenga éxito.
set -o pipefail
resultado=$(ls /directorio_inexistente | wc -l)
echo $? # Retornará un código de error, no 0.
```

### Captura y registro de errores

Para el diagnóstico, es vital capturar `stderr` sin perder `stdout`. Una técnica común es redirigir `stderr` a un archivo de log específico mientras se mantiene la interactividad en la consola para el administrador.

```bash
# Redirige solo stderr al log, manteniendo stdout en pantalla
mi_complejo_proceso.sh 2>> /var/log/mi_script.log
```

Si necesitas capturar el error para procesarlo lógicamente dentro del script, puedes usar la redirección de proceso (`process substitution`):

```bash
# Captura stderr en una variable para análisis posterior
error_output=$(mi_comando_que_falla 2>&1)
if [ $? -ne 0 ]; then
    echo "Error crítico detectado: $error_output" >&2
    exit 1
fi
```

## Errores comunes de quien recién aprende este punto

1.  **Confundir `stdout` con `stderr`**: Muchos usuarios asumen que los mensajes de error siempre aparecen en rojo o van a `stderr`. Algunos programas, por diseño deficiente, envían advertencias a `stdout`. Si solo registras `2> log.txt`, perderás información crítica. La regla de oro es usar `2>&1` para capturar todo lo relevante para el diagnóstico.
2.  **Ignorar `pipefail`**: Al usar tuberías complejas (`cmd1 | cmd2 | cmd3`), si `cmd1` falla pero `cmd3` tiene éxito, el script continúa como si nada hubiera pasado. Esto genera datos corruptos o incompletos que son difíciles de rastrear días después.
3.  **Uso indiscriminado de `set -e` en subshells**: `set -e` no siempre se propaga a subshells o funciones anidadas dependiendo de la versión de Bash y de cómo se invoquen. Es más seguro usar paréntesis `()` para subshells explícitos o gestionar el estado manualmente dentro de funciones complejas.
4.  **No verificar el estado de la redirección**: Redirigir a un disco lleno o a un directorio sin permisos genera un error silencioso si no se verifica el resultado de la operación de redirección misma.

## Cuándo usarlo / cuándo NO usarlo

*   **Usar diagnóstico avanzado cuando**:
    *   El script se ejecuta en producción o en cronjobs, donde no hay consola interactiva.
    *   La integridad de los datos depende de la correcta ejecución de una cadena de comandos (tuberías).
    *   Necesitas auditar qué falló y por qué para mantenimiento posterior.
*   **No usarlo (o simplificar) cuando**:
    *   Estás escribiendo scripts de prototipado rápido o pruebas unitarias simples donde la velocidad de desarrollo es prioritaria sobre la robustez.
    *   El script es interactivo y el usuario necesita ver los errores en tiempo real sin archivos de log intermedios. En estos casos, `stderr` hacia la terminal es suficiente.

## Ejemplo extendido en contexto: Migración de bases de datos segura

Imagina un script que realiza una migración de datos. El riesgo es que una fase falle silenciosamente, dejando la base de datos en un estado inconsistente.

```bash
#!/bin/bash
# Script de migración con diagnóstico robusto

# 1. Configuración de seguridad
set -o pipefail
LOG_FILE="/tmp/migracion_$(date +%Y%m%d).log"
ERROR_LOG="/tmp/migracion_errors_$(date +%Y%m%d).log"

# Función auxiliar para loguear
log_error() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') [ERROR] $1" >> "$ERROR_LOG"
    echo "¡Fallo crítico! Revisa $ERROR_LOG" >&2
    exit 1
}

# 2. Fase de extracción
echo "Iniciando extracción..."
# Capturamos tanto stdout como stderr para análisis si falla
if ! mysqldump -u user -p'pass' db_old > dump.sql 2>> "$ERROR_LOG"; then
    log_error "Fallo al generar el dump de la base de datos."
fi

# Verificación de integridad del archivo generado
if [ ! -s dump.sql ]; then
    log_error "El archivo dump.sql está vacío o no existe."
fi

# 3. Fase de transformación (tubería compleja)
# Aquí es donde pipefail es vital. Si 'sed' falla, queremos saberlo.
echo "Transformando datos..."
if ! sed 's/OLD_TABLE/NEW_TABLE/g' dump.sql | gzip > dump.sql.gz 2>> "$ERROR_LOG"; then
    log_error "Fallo durante la transformación o compresión."
    # Limpieza de emergencia: borrar archivos parciales corruptos
    rm -f dump.sql.gz
    exit 1
fi

# 4. Fase de carga
echo "Cargando en nueva base de datos..."
if ! mysql -u user -p'pass' db_new < dump.sql.gz 2>> "$ERROR_LOG"; then
    log_error "Fallo al cargar los datos en la nueva base."
    exit 1
fi

echo "Migración completada con éxito."
```

En este ejemplo, cada paso crítico verifica su estado. Si la extracción falla, el script se detiene antes de intentar procesar datos inexistentes. Si la tubería de transformación falla, `pipefail` asegura que el error se detecte, y la limpieza posterior evita dejar archivos corruptos en el sistema. El diagnóstico no es solo ver el error, sino aislarlo y responder a él.