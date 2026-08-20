# Bucles en Bash: Automatizando la repetición

## Introducción

En la programación de scripts para sistemas Unix/Linux, rara vez nos conformamos con ejecutar una sola línea de código. La verdadera potencia de Bash radica en su capacidad para automatizar tareas repetitivas. Los **bucles** (o *loops*) son estructuras de control que permiten ejecutar un bloque de comandos múltiples veces, ya sea un número fijo de iteraciones o hasta que se cumpla una condición específica.

Imagina que necesitas renombrar 50 archivos de imagen o revisar el estado de 100 servidores. Escribir el comando manualmente sería ineficiente y propenso a errores. Aquí es donde entran `for`, `while` y `until`.

## Explicación central

Bash ofrece principalmente dos tipos de bucles: el basado en iteración de listas (`for`) y el basado en condiciones (`while` y `until`).

### 1. El bucle `for`

Es ideal cuando conoces la lista de elementos sobre los que quieres iterar. Su sintaxis básica es:

```bash
for variable in lista_de_elementos; do
    comando1
    comando2
done
```

**Ejemplo real:** Copiar archivos de un directorio a otro.
```bash
for archivo in *.txt; do
    cp "$archivo" /backup/
    echo "Copiado: $archivo"
done
```
*Nota:* El uso de comillas dobles alrededor de `$archivo` es crucial si los nombres contienen espacios.

### 2. El bucle `while`

Se ejecuta mientras la condición sea verdadera (devuelva `0`, es decir, éxito). Es perfecto para esperar procesos o leer entradas hasta que el usuario decida salir.

```bash
while [ condición ]; do
    comandos
done
```

**Ejemplo real:** Esperar a que un servicio esté disponible.
```bash
while ! nc -z localhost 8080; do
    echo "Esperando al servidor..."
    sleep 2
done
echo "Servidor listo"
```

### 3. El bucle `until`

Es el inverso de `while`: ejecuta los comandos **hasta que** la condición se vuelva verdadera. Es menos común pero útil en escenarios específicos de monitoreo.

## Errores comunes de principiantes

1.  **Olvidar el `do` y el `done`:** Bash es estricto con la sintaxis. Si falta `do` después de la lista o `done` al final, obtendrás errores de sintaxis inesperados.
2.  **Infinitos sin salida:** En bucles `while` o `until`, si la condición nunca cambia a `false` (para `while`) o `true` (para `until`), el script se ejecutará eternamente. Siempre asegúrate de que algo dentro del bucle modifique el estado de la condición.
3.  **Expansión de variables sin comillas:** Si usas `for f in $lista; do`, y `lista` contiene espacios, Bash dividirá el elemento en múltiples iteraciones incorrectas. Usa siempre `"$lista"` o mejor aún, convierte a un array.
4.  **Confundir `test` con `[ ]`:** Dentro de `while [ $a -eq $b ]`, los espacios entre los corchetes y las variables son obligatorios. `[ $a -eq $b ]` funciona, pero `[$a -eq $b]` dará error.

## Cuándo usarlo / Cuándo NO usarlo

*   **Usa `for` cuando:** Iteres sobre una lista conocida de archivos, palabras o números. Es más legible y directo.
*   **Usa `while` cuando:** No sepas cuántas iteraciones necesitas, o dependas de una condición externa (como una respuesta de red, un archivo que cambia de tamaño, o una entrada del usuario).
*   **Evita bucles anidados complejos:** Si necesitas anidar más de dos niveles, considera si no puedes resolver el problema con herramientas de texto como `awk` o `sed`, que son más eficientes para procesamiento de datos.
*   **Rendimiento:** Los bucles en Bash son lentos porque cada comando dentro del bucle suele requerir un *fork* (crear un nuevo proceso). Para grandes volúmenes de datos, considera usar `awk` o `python`.

## Ejemplo extendido: Script de backup condicional

Vamos a crear un script que hace backup de un directorio solo si ha cambiado desde el último backup, usando un bucle `for` para verificar archivos específicos.

```bash
#!/bin/bash

# Directorios de origen y destino
ORIGEN="/home/usuario/documentos"
DESTINO="/backup/diario"
LOG="/var/log/backup.log"

# Asegurar que el directorio de destino existe
mkdir -p "$DESTINO"

# Lista de archivos críticos a monitorear
ARCHIVOS_CRITICOS=("contratos.pdf" "base_datos.sql" "configuraciones.yml")

# Contador de archivos procesados
contador=0

echo "Iniciando verificación de backups..." >> "$LOG"

# Bucle for sobre la lista de archivos críticos
for archivo in "${ARCHIVOS_CRITICOS[@]}"; do
    ruta_completa="$ORIGEN/$archivo"
    
    # Verificar si el archivo existe en origen
    if [[ ! -f "$ruta_completa" ]]; then
        echo "AVISO: $archivo no encontrado en origen." >> "$LOG"
        continue
    fi
    
    # Verificar si existe copia en destino y si el origen es más reciente
    if [[ -f "$DESTINO/$archivo" ]]; then
        if [[ "$ruta_completa" -nt "$DESTINO/$archivo" ]]; then
            # El archivo de origen es más nuevo: copiar
            cp "$ruta_completa" "$DESTINO/"
            echo "Actualizado: $archivo" >> "$LOG"
            ((contador++))
        else
            echo "Sin cambios: $archivo" >> "$LOG"
        fi
    else
        # Primera vez que se hace backup de este archivo
        cp "$ruta_completa" "$DESTINO/"
        echo "Nuevo backup: $archivo" >> "$LOG"
        ((contador++))
    fi
done

echo "Backup completado. $contador archivos actualizados o creados." >> "$LOG"
```

Este ejemplo muestra el uso de arrays (`"${ARCHIVOS_CRITICOS[@]}"`), pruebas de archivos (`-f`, `-nt`), y control de flujo dentro del bucle (`if`, `continue`). Es un patrón robusto y reutilizable para tareas de administración de sistemas básicas.