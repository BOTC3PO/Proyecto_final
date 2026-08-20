# Funciones en Bash: Nivel Intermedio

## Introducción

En la programación de scripts en Bash, las funciones son bloques de código reutilizables que permiten estructurar mejor la lógica de un programa. Más allá de la simple organización, su uso en un nivel intermedio implica entender cómo se manejan las variables, el flujo de control y la comunicación entre el entorno global y el contexto local de la función. Dominar este tema es crucial para escribir scripts robustos, mantenibles y eficientes, evitando la repetición de código y facilitando la depuración.

## Explicación Central

En Bash, una función se define simplemente con su nombre seguido de paréntesis o la palabra clave `function`. La sintaxis más común y recomendada es:

```bash
mi_funcion() {
    # cuerpo de la función
}
```

### Scope de Variables: El problema del alcance

El comportamiento más crítico para un usuario intermedio es entender el alcance (scope) de las variables. En Bash, **todas las variables son globales por defecto**, incluso aquellas definidas dentro de una función. Esto puede causar efectos secundarios inesperados si no se tiene cuidado.

Para limitar el alcance a la función, se utiliza la palabra clave `local`:

```bash
ejemplo_scope() {
    var_global="Soy global"
    local var_local="Solo existe aquí"
    echo "Dentro: $var_local"
}

ejemplo_scope
echo "Fuera: $var_local"  # Imprime nada o error, dependiendo del shell
```

Sin `local`, `var_local` se convertiría en una variable global, potencialmente sobrescribiendo valores importantes en el script principal.

### Parámetros y Argumentos

Las funciones reciben argumentos posicionales de la misma manera que los scripts: `$1`, `$2`, etc. También se puede acceder a todos los argumentos mediante `$@` (como lista individual) o `$*` (como una sola cadena).

Es buena práctica validar los argumentos al inicio de la función para evitar errores silenciosos:

```bash
saludar() {
    if [[ $# -eq 0 ]]; then
        echo "Error: Se requiere un nombre." >&2
        return 1
    fi
    echo "Hola, $1!"
}
```

### Retorno de Valores

Bash no permite devolver valores complejos (como arrays o strings) directamente desde una función como lo harían otros lenguajes. El mecanismo estándar es el **código de salida** (`return`), que acepta un valor entero entre 0 y 255. Por convención, `0` indica éxito y cualquier otro valor indica error.

Para "devolver" datos complejos, las estrategias comunes son:
1. **Variables globales**: La función modifica una variable global conocida.
2. **Salida estándar (stdout)**: La función imprime el resultado y quien la llama captura la salida con `$(mi_funcion)`. Esta es la forma más idiomática y limpia en Bash.

```bash
obtener_resultado() {
    echo "Resultado calculado: 42"
}

resultado=$(obtener_resultado)
echo "El resultado es: $resultado"
```

## Errores Comunes

1. **Olvidar `local`**: Definir variables intermedias sin `local` contamina el espacio de nombres global, lo que puede causar bugs difíciles de rastrear en scripts largos.
2. **Confundir `$?`**: El valor de `$?` contiene el código de salida de la *última* ejecución. Si ejecutas un comando dentro de la función después de la lógica principal, `$?` cambiará. Guarda el valor de retorno inmediatamente si necesitas usarlo.
3. **No validar argumentos**: Asumir que los parámetros siempre existen puede llevar a comportamientos extraños (por ejemplo, usar `"$1"` cuando no hay argumentos resulta en una cadena vacía).
4. **Uso incorrecto de `$*` vs `$@`**: Dentro de comillas, `"$*"` une todos los argumentos en una sola cadena separada por el primer carácter de `IFS`, mientras que `"$@"` preserva cada argumento como una entidad individual. Para pasar argumentos a otro comando, `"$@"` es casi siempre la opción correcta.

## Cuándo usarlo / Cuándo NO usarlo

**Usa funciones cuando:**
- Un bloque de lógica se repite en varias partes del script.
- Quieres encapsular una tarea específica (ej. "validar configuración", "conectar a DB") para mejorar la legibilidad.
- Necesitas manejar errores de manera uniforme en un módulo lógico.

**No uses funciones (o piensa dos veces) cuando:**
- La lógica es extremadamente simple y solo se usa una vez. La sobrecarga de definición puede no valer la pena.
- Necesitas devolver múltiples valores complejos y no quieres usar variables temporales o stdout. En esos casos, considera si Bash es la herramienta adecuada o si Python/Perl podrían ser más eficientes para esa tarea específica.
- Estás escribiendo scripts de una sola línea para la terminal. La claridad puede perderse al definir funciones en el mismo contexto.

## Ejemplo Extendido en Contexto

Imagina un script de respaldo (`backup.sh`) que debe validar la existencia de un directorio, verificar el espacio disponible y realizar el copiado.

```bash
#!/bin/bash

# Función para verificar espacio disponible (en KB)
verificar_espacio() {
    local directorio=$1
    local espacio_requerido=$2
    
    # Obtiene el espacio disponible en el sistema de archivos del directorio
    local espacio_disponible=$(df -k "$directorio" | tail -1 | awk '{print $4}')
    
    if [[ $espacio_disponible -lt $espacio_requerido ]]; then
        echo "ERROR: Espacio insuficiente en $directorio." >&2
        return 1
    fi
    return 0
}

# Función principal de respaldo
realizar_backup() {
    local origen=$1
    local destino=$2
    
    # Validación de argumentos
    if [[ -z "$origen" || -z "$destino" ]]; then
        echo "Uso: $0 <origen> <destino>" >&2
        return 1
    fi
    
    # Verificar que el origen exista
    if [[ ! -d "$origen" ]]; then
        echo "El origen $origen no es un directorio válido." >&2
        return 1
    fi
    
    # Verificar espacio (requiere 10240 KB = 10 MB libres)
    if ! verificar_espacio "$destino" 10240; then
        return 1
    fi
    
    # Ejecutar el comando de copia
    echo "Iniciando backup de $origen a $destino..."
    cp -r "$origen" "$destino"
    
    if [[ $? -eq 0 ]]; then
        echo "Backup completado con éxito."
    else
        echo "Error durante el backup." >&2
        return 1
    fi
}

# Uso
realizar_backup "/ruta/al/origen" "/ruta/al/destino"
exit $?
```

En este ejemplo, `verificar_espacio` encapsula la lógica de sistema de archivos, manteniendo la función principal limpia. El uso de `local` evita colisiones de variables, y la validación temprana asegura que el script falle rápidamente ante entradas inválidas.