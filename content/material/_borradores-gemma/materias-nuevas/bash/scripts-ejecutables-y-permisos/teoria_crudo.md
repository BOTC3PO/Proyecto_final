# Scripts ejecutables y permisos en Bash

La capacidad de transformar un archivo de texto plano en un programa ejecutable es una de las habilidades fundamentales para cualquier usuario avanzado de Linux o macOS. En el ecosistema Unix, los scripts de Bash no son mágicos; son simplemente archivos de texto que el kernel ejecuta mediante un intérprete específico. Comprender cómo funcionan los permisos y la distinción entre `./script.sh` y `bash script.sh` es clave para automatizar tareas de forma segura y eficiente.

## El mecanismo de ejecución: Shebang y permisos

Para que un script sea ejecutable directamente (es decir, escribiendo solo su nombre en la terminal), debe cumplir dos requisitos: tener permisos de ejecución y, opcionalmente pero recomendadamente, contener un *shebang* (#!) al inicio del archivo.

El *shebang* indica al sistema operativo qué intérprete debe usar para procesar el archivo. Por ejemplo:

```bash
#!/bin/bash
# Este script usa explícitamente el shell Bash
echo "Hola desde Bash"
```

Si omites el shebang, el sistema intentará ejecutar el script con el shell predeterminado del usuario actual. Esto puede causar comportamientos inesperados si el usuario tiene configurado otro shell (como `zsh` o `fish`), ya que la sintaxis puede variar.

Para hacer un script ejecutable, utilizamos el comando `chmod` (change mode). El símbolo `+x` añade el permiso de ejecución:

```bash
chmod +x mi_script.sh
```

Una vez hecho esto, puedes ejecutarlo desde la ruta relativa:

```bash
./mi_script.sh
```

Es crucial notar el `./`. Si no lo incluyes, el sistema buscará el comando en las variables de entorno `$PATH` (como `/usr/bin`, `/bin`, etc.) y no lo encontrará en el directorio actual por motivos de seguridad.

## Ejecución implícita vs. explícita

Existe una diferencia técnica importante entre ejecutar un script con permisos (`./script.sh`) y pasarle el archivo como argumento al intérprete (`bash script.sh`).

1.  **`./script.sh`**: El kernel lee el shebang, carga el ejecutable indicado (`/bin/bash`) y le pasa el script como argumento. Aquí, la variable `$0` dentro del script contendrá la ruta del script (`./script.sh`).
2.  **`bash script.sh`**: Estás invocando explícitamente el binario `bash`. El shebang del archivo es ignorado. La variable `$0` contendrá `script.sh` o la ruta completa, pero el comportamiento de la shell puede variar ligeramente dependiendo de las opciones de inicio de `bash`.

En la práctica, para depuración o cuando no quieres modificar los permisos, usar `bash script.sh` es más seguro y común. Para despliegue y uso diario, los scripts deben ser ejecutables.

## Errores comunes

*   **Olvidar el shebang**: Si el script usa características específicas de Bash (como arrays `arr=(a b)` o expresiones aritméticas `(( ))`) pero se ejecuta en un entorno donde el shell predeterminado es `sh` (que suele ser `dash` en Ubuntu/Debian), el script fallará. Siempre declara `#!/bin/bash`.
*   **Permisos insuficientes**: El error `Permission denied` es universal. Recuerda que `chmod +x` no cambia el contenido, solo la metainformación del sistema de archivos.
*   **Saltos de línea Windows (CRLF)**: Si creaste el script en Windows y lo subiste a Linux, el shebang puede leerse como `#!/bin/bash\r`. El `\r` se interpreta como parte del nombre del ejecutable, causando errores como `bash: /bin/bash^M: bad interpreter`. Usa `dos2unix script.sh` para corregirlo.
*   **Ejecutar sin `./`**: El error `command not found` al intentar correr un script en el directorio actual es casi siempre por falta del prefijo `./`.

## Cuándo usar y cuándo no

*   **Usar scripts ejecutables (`chmod +x`)**: Cuando el script es una herramienta recurrente, parte de un pipeline de CI/CD, o debe ser llamado por otros scripts o usuarios. Facilita la legibilidad y la abstracción.
*   **Usar `bash script.sh`**: Cuando estás desarrollando, depurando o probando un script rápidamente y no quieres arriesgarte a ejecutar código potencialmente dañino o inestable. También es útil cuando quieres forzar que se use Bash independientemente del shebang o del shell del usuario.

## Ejemplo extendido: Script de respaldo condicional

Imagina que necesitas un script que respalde un directorio solo si este existe y si el usuario tiene permisos de lectura.

```bash
#!/bin/bash

# Variables de configuración
ORIGEN="./datos"
DESTINO="./respaldos/datos_$(date +%Y%m%d).tar.gz"

# Verificar si el origen existe
if [ ! -d "$ORIGEN" ]; then
    echo "Error: El directorio '$ORIGEN' no existe." >&2
    exit 1
fi

# Verificar permisos de lectura
if [ ! -r "$ORIGEN" ]; then
    echo "Error: No tienes permisos de lectura para '$ORIGEN'." >&2
    exit 1
fi

# Crear el directorio de destino si no existe
mkdir -p "$(dirname "$DESTINO")"

# Ejecutar el respaldo
echo "Iniciando respaldo..."
tar -czf "$DESTINO" -C "$(dirname "$ORIGEN")" "$(basename "$ORIGEN")"

# Verificar éxito
if [ $? -eq 0 ]; then
    echo "Respaldo completado en: $DESTINO"
else
    echo "Error al crear el respaldo." >&2
    exit 1
fi
```

Este script demuestra la importancia de validar el entorno antes de actuar. Al guardarlo como `respaldar.sh` y ejecutar `chmod +x respaldar.sh`, se convierte en una herramienta robusta y reutilizable que puede integrarse fácilmente en cron jobs o pipelines de automatización.