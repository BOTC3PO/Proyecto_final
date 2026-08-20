# Condicionales en Bash: Tomando decisiones en la terminal

## Introducción

En la programación de scripts, la capacidad de tomar decisiones es fundamental. Los condicionales permiten que un script de Bash evalúe una condición (por ejemplo, si un archivo existe, si una variable es mayor que cero, o si un comando exitó) y ejecute bloques de código específicos en consecuencia. Sin ellos, los scripts serían lineales y rígidos; con ellos, se vuelven dinámicos y robustos, capaces de adaptarse al entorno en el que se ejecutan.

## Explicación central: `if`, `elif`, `else` y `test`

La estructura básica de un condicional en Bash utiliza la palabra clave `if`, seguida de una expresión entre corchetes `[ ]` o `[[ ]]`, y termina con `fi` (if al revés).

### Sintaxis básica

```bash
if [ condición ]; then
    # comandos si es verdadero
elif [ otra_condición ]; then
    # comandos si la anterior es falsa pero esta es verdadera
else
    # comandos si ninguna condición anterior fue verdadera
fi
```

### Diferencia entre `[ ]` y `[[ ]]`

*   `[ ]` (o el comando `test`): Es el estándar POSIX. Es más limitado y sensible a errores de sintaxis (como espacios).
*   `[[ ]]`: Es una extensión de Bash (no disponible en sh puro). Es más seguro y potente. Permite el uso de operadores lógicos `&&` y `||` directamente dentro de los corchetes, y no requiere escapar caracteres como `<` o `>`.

**Recomendación:** Siempre usa `[[ ]]` en scripts de Bash modernos para mayor legibilidad y seguridad.

### Ejemplos de sintaxis real

**Comparación numérica:**
```bash
edad=20
if [[ $edad -ge 18 ]]; then
    echo "Eres mayor de edad."
else
    echo "Eres menor de edad."
fi
```
*Nota: `-ge` significa "greater than or equal" (mayor o igual). No uses `>=` dentro de `[[ ]]` para números; bash lo interpretará como comparación de cadenas o dará error.*

**Verificación de existencia de archivos:**
```bash
archivo="datos.csv"
if [[ -f "$archivo" ]]; then
    echo "El archivo existe."
else
    echo "El archivo no se encontró."
fi
```

**Comprobación de estado de un comando anterior:**
A menudo, la condición es el resultado de un comando previo. El código de salida `0` indica éxito, cualquier otro número indica error.
```bash
if grep "error" /var/log/syslog; then
    echo "Se encontraron errores en el log."
fi
```

## Errores comunes de principiantes

1.  **Falta de espacios:** Dentro de `[ ]` o `[[ ]]`, los espacios son obligatorios alrededor de los operadores y los operandos.
    *   *Incorrecto:* `if [ $a=5 ]; then`
    *   *Correcto:* `if [ "$a" = "5" ]; then`
2.  **Confundir asignación (`=`) con comparación (`==` o `=`):** Dentro de `[ ]`, `=` compara cadenas. Dentro de `[[ ]]`, `==` compara cadenas (y permite globbing). Para números, usa `-eq`.
3.  **No comillas en variables:** Si `$variable` está vacía, `if [ $variable = "x" ]` se convierte en `if [ = "x" ]`, lo que genera un error de sintaxis. Siempre usa `if [ "$variable" = "x" ]`.
4.  **Olvidar `fi`:** El bloque debe cerrarse explícitamente con `fi`.

## Cuándo usarlo / Cuándo NO usarlo

**Úsalo cuando:**
*   Necesitas ejecutar diferentes acciones basadas en el estado del sistema (archivos, procesos, variables).
*   Quieres validar entradas del usuario o argumentos de línea de comandos.
*   Deseas controlar el flujo de ejecución para evitar errores críticos (como borrar un archivo solo si existe).

**Evítalo o redúcelo cuando:**
*   La lógica es demasiado anidada. Si tienes más de 3 niveles de `if` dentro de `if`, considera refactorizar el script o usar `case` (estructura de selección múltiple) para mayor claridad.
*   Puedes usar operadores lógicos simples. Por ejemplo, `command1 && command2` es más conciso que un `if` completo si solo quieres ejecutar `command2` si `command1` tiene éxito.

## Ejemplo extendido: Script de respaldo condicional

Imagina un script que realiza un respaldo de una base de datos, pero solo si el disco tiene espacio suficiente y la base de datos está disponible.

```bash
#!/bin/bash

# Variables
BD_NAME="mi_base_de_datos"
BACKUP_DIR="/backups"
SPACE_THRESHOLD=1024 # MB

# 1. Verificar si el directorio de backup existe
if [[ ! -d "$BACKUP_DIR" ]]; then
    echo "Error: El directorio $BACKUP_DIR no existe."
    exit 1
fi

# 2. Verificar espacio libre en el disco
# df -k devuelve el espacio libre en KB en la columna 4
SPACE_FREE=$(df -k "$BACKUP_DIR" | tail -1 | awk '{print $4}')

if [[ $SPACE_FREE -lt $((SPACE_THRESHOLD * 1024)) ]]; then
    echo "Error: Espacio insuficiente en disco. Disponible: ${SPACE_FREE}KB"
    exit 1
fi

# 3. Verificar si la base de datos está accesible (simulado con pg_isready)
if ! pg_isready -d "$BD_NAME" > /dev/null 2>&1; then
    echo "Advertencia: La base de datos $BD_NAME no está disponible. Intentando iniciar..."
    # Aquí iría la lógica para intentar iniciar el servicio
    # Si falla, salimos
fi

# 4. Realizar el respaldo si todo está bien
echo "Iniciando respaldo de $BD_NAME..."
if pg_dump "$BD_NAME" > "$BACKUP_DIR/${BD_NAME}_$(date +%F).sql"; then
    echo "Respaldo completado con éxito."
else
    echo "Error: Falló el comando pg_dump."
    exit 1
fi

echo "Proceso finalizado."
```

Este ejemplo muestra cómo los condicionales permiten crear scripts que no solo ejecutan comandos, sino que también validan el entorno, previenen errores y manejan estados de fallo de manera elegante.