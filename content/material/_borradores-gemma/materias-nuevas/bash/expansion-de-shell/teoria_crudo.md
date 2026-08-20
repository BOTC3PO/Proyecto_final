# Expansión de Shell en Bash (Nivel Básico)

## Introducción

La expansión de shell es el mecanismo fundamental por el cual Bash transforma el texto que escribes en la terminal antes de ejecutar cualquier comando. No es magia: es un proceso de sustitución sistemática. Cuando escribes `echo $HOME`, Bash no pasa la cadena literal `echo $HOME` al programa `echo`; primero expande `$HOME` a la ruta de tu carpeta personal (por ejemplo, `/home/usuario`) y luego ejecuta `echo /home/usuario`.

Entender este proceso es crucial porque determina qué llega realmente al comando y cómo se interpretan los caracteres especiales. Sin este conocimiento, es imposible escribir scripts robustos ni manejar archivos con nombres complicados.

## Explicación Central: Tipos de Expansión Básica

Aunque Bash tiene muchas formas de expansión, en el nivel básico nos centraremos en las tres más críticas: expansión de variables, expansión de tildes y expansión de llaves.

### 1. Expansión de Variables
Es la sustitución del valor de una variable por su nombre precedido por `$`.
*   **Sintaxis:** `echo $variable` o `echo ${variable}`.
*   **Ejemplo real:**
    ```bash
    nombre="Ana"
    echo "Hola, $nombre"
    # Salida: Hola, Ana
    ```
    *Nota:* El uso de llaves `{}` es obligatorio cuando el nombre de la variable está pegado a otros caracteres para evitar ambigüedades.
    ```bash
    echo "${nombre}2024" # Correcto: Ana2024
    echo "$nombre2024"    # Incorrecto si no existe la var nombre2024: intenta imprimir una variable inexistente
    ```

### 2. Expansión de Tildes (Comando)
Ejecuta un comando entre comillas invertidas (`` ` ``) o, preferiblemente, con la sintaxis moderna `$()`, y reemplaza la salida del comando por su resultado.
*   **Sintaxis recomendada:** `$(comando)`
*   **Ejemplo real:**
    ```bash
    fecha=$(date +%d-%m-%Y)
    echo "Hoy es $fecha"
    # Salida: Hoy es 24-05-2024 (dependiendo del día actual)
    ```
    Esta técnica es vital para almacenar el resultado de un comando en una variable para su uso posterior.

### 3. Expansión de Llaves (Globbing)
Permite generar listas de cadenas o seleccionar archivos coincidentes con patrones.
*   **Generación de secuencias:**
    ```bash
    echo {1..5}
    # Salida: 1 2 3 4 5
    ```
*   **Selección de archivos (Globbing):**
    ```bash
    touch archivo1.txt archivo2.txt otro.txt
    echo *.txt
    # Salida: archivo1.txt archivo2.txt otro.txt
    ```
    Aquí, Bash reemplaza `*.txt` por la lista de archivos que coinciden antes de pasarlos a cualquier comando.

## Errores Comunes de Principiantes

1.  **Confundir comillas simples y dobles:**
    *   `echo "$HOME"` expande la variable.
    *   `echo '$HOME'` imprime literalmente `$HOME` sin expandir.
    *   *Consejo:* Usa comillas dobles (`"`) para permitir expansión y comillas simples (`'`) para proteger el texto literal.

2.  **Olvidar las llaves en variables pegadas:**
    Escribir `echo $PATHbak` en lugar de `echo ${PATH}bak` es un error clásico. Bash buscará una variable llamada `PATHbak`, que probablemente no existe, resultando en una cadena vacía.

3.  **No usar `$()` para comandos anidados:**
    Usar `` `comando` `` funciona, pero es difícil de leer y anidar. La sintaxis `$(comando)` es más legible y permite anidación fácil: `$(echo $(date))`.

## Cuándo Usarlo / Cuándo No Usarlo

*   **Usa expansión de variables** siempre que necesites dinamicidad en tus scripts (rutas, nombres de usuarios, resultados de comandos).
*   **Usa expansión de tildes (`$()`)** cuando necesites guardar la salida de un comando en una variable para procesarla después.
*   **Usa globbing (`*`, `?`)** para seleccionar archivos rápidamente en la línea de comandos o en scripts simples.

**Cuándo NO usarlo:**
*   No uses expansión de shell dentro de comillas simples si necesitas que se evalúe algo.
*   Evita la expansión de globbing si los nombres de los archivos contienen espacios o caracteres especiales sin comillas, ya que Bash dividirá los nombres en múltiples argumentos. Usa `find` o `for` loops con comillas para mayor seguridad.

## Ejemplo Extendido en Contexto

Imagina que necesitas crear un script para hacer un respaldo diario de un directorio de trabajo, nombrando el archivo con la fecha actual.

```bash
# 1. Definir la ruta origen y destino
origen="/home/usuario/proyecto"
destino="/backups"

# 2. Obtener la fecha actual usando expansión de comando
fecha=$(date +%Y%m%d)

# 3. Construir el nombre del archivo usando expansión de variables y concatenación
archivo_respaldo="${destino}/respaldo_${fecha}.tar.gz"

# 4. Verificar si el archivo de respaldo ya existe (expansión de variable)
if [ -f "$archivo_respaldo" ]; then
    echo "El respaldo para hoy ya existe."
else
    # 5. Ejecutar el respaldo (el globbing no se usa aquí directamente, 
    # pero se asume que 'tar' maneja la ruta origen)
    tar -czf "$archivo_respaldo" -C "$origen" .
    echo "Respaldo creado exitosamente."
fi
```

En este ejemplo, la expansión de `$()` permite obtener la fecha dinámicamente, y la expansión de variables `${destino}` y `${fecha}` permite construir la ruta del archivo de manera segura y legible. Sin estas expansiones, tendríamos que hardcodear fechas o usar variables estáticas, perdiendo la utilidad del script automatizado.