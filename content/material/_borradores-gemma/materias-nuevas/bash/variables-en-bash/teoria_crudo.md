# Variables en Bash: Fundamentos para el Escritorio

## Introducción breve

En Bash, una variable es un espacio en memoria con nombre que almacena un valor, ya sea un número, una cadena de texto o la salida de un comando. Son la base para crear scripts dinámicos: permiten guardar configuraciones temporales, rutas de archivos, nombres de usuarios o resultados de cálculos para reutilizarlos sin tener que escribirlos de nuevo. Sin variables, los scripts serían rígidos y propensos a errores por copiar y pegar.

## Explicación central

La asignación de variables en Bash es estricta y sensible al espacio. La sintaxis básica es:

```bash
nombre_variable=valor
```

### Reglas de oro para la asignación

1. **Sin espacios alrededor del `=`**: `mi_var="hola"` es válido; `mi_var = "hola"` genera un error porque Bash interpreta `mi_var` como un comando.
2. **Las comillas importan**:
   - **Dobles comillas (`""`)**: Permiten la expansión de variables y comandos. Si quieres que el valor se evalúe, usa estas.
   - **Comillas simples (`''`)**: Protegen el valor literal. No se expanden variables ni comandos. Útil para strings que contienen caracteres especiales como `$`, `` ` ``, `\`.
3. **Referencia a la variable**: Para usar el valor almacenado, precede el nombre con `$` o usa `${nombre}`.

### Ejemplos de sintaxis real

```bash
# Asignación simple (cadena)
usuario="juan"

# Asignación con expansión (dobles comillas)
saludo="Hola, ${usuario}!"
echo $saludo  # Salida: Hola, juan!

# Asignación literal (comillas simples)
costo='$100'
echo $costo   # Salida: $100 (el signo de dólar no se interpreta como variable)

# Asignación de salida de comando (comando sustituido)
fecha_actual=$(date +%Y-%m-%d)
echo "Hoy es $fecha_actual"
```

### Convenciones de nomenclatura

- Usa **letras minúsculas** para variables de usuario.
- Separa palabras con **guiones bajos** (`_`) o camelCase, pero sé consistente.
- Evita nombres reservados como `PATH`, `HOME`, `USER` (aunque Bash permite sobrescribirlos, es mala práctica porque puede romper otros scripts o comandos del sistema).
- Las variables de entorno suelen ser **mayúsculas** por convención, pero las que defines tú en un script personal deben ser minúsculas para distinguirlas.

## Errores comunes de quien recién aprende

1. **Espacios alrededor del igual**:
   ```bash
   x = 5  # ERROR: 'x' no es un comando válido
   ```
2. **Omitir el `$` al leer**:
   ```bash
   x=5
   echo x  # Imprime "x", no "5"
   echo $x # Imprime "5"
   ```
3. **No usar comillas en valores con espacios**:
   ```bash
   nombre="Juan Pérez"
   echo $nombre  # Puede causar errores si se usa en bucles o comandos complejos
   echo "$nombre" # Correcto: maneja espacios correctamente
   ```
4. **Confundir asignación con comparación**:
   ```bash
   if [ $x = 5 ]; then ...  # En [ ], = funciona para strings
   if [ $x == 5 ]; then ... # En [[ ]], == es preferible para strings
   ```

## Cuándo usarlo / cuándo NO usarlo

### Usa variables cuando:
- Necesitas reutilizar un valor varias veces (ej. una ruta de directorio).
- El valor puede cambiar entre ejecuciones o entornos.
- Quieres hacer tu script más legible y mantenible (nombrar valores mágicos).

### No uses variables (o ten cuidado) cuando:
- El valor es **estático y trivial** (ej. `echo "Hola"` no necesita `mensaje="Hola"`).
- Trabajas con **variables de entorno críticas** del sistema (no sobrescribas `PATH`, `IFS`, `PS1` a menos que sepas lo que haces).
- El valor es **extremadamente grande** (ej. un archivo de 1GB leído en memoria), ya que puede consumir RAM innecesariamente; mejor usa pipes o archivos temporales.

## Ejemplo extendido en contexto

Imagina que necesitas un script para **respaldar un directorio de proyectos** con un nombre de archivo que incluya la fecha actual y el nombre del usuario. Sin variables, sería caótico y difícil de mantener.

```bash
#!/bin/bash

# Configuración inicial (variables de contexto)
DIA=$(date +%Y%m%d)
USUARIO=$(whoami)
DIR_ORIGEN="/home/$USUARIO/proyectos"
CARPETA_DESTINO="/backup/$USUARIO"
ARCHIVO_RESALDO="backup_${DIA}_${USUARIO}.tar.gz"

# Crear la carpeta destino si no existe
if [ ! -d "$CARPETA_DESTINO" ]; then
    mkdir -p "$CARPETA_DESTINO"
    echo "Carpeta de destino creada: $CARPETA_DESTINO"
fi

# Verificar que el directorio origen exista
if [ ! -d "$DIR_ORIGEN" ]; then
    echo "Error: El directorio $DIR_ORIGEN no existe."
    exit 1
fi

# Generar el nombre completo del archivo
RUTA_FINAL="${CARPETA_DESTINO}/${ARCHIVO_RESALDO}"

# Ejecutar el respaldo
echo "Iniciando respaldo de $DIR_ORIGEN a $RUTA_FINAL..."
tar -czf "$RUTA_FINAL" -C /home "$USUARIO/proyectos"

# Verificar éxito
if [ $? -eq 0 ]; then
    echo "Respaldo completado con éxito: $RUTA_FINAL"
else
    echo "Error durante el respaldo."
    exit 1
fi
```

### Análisis del ejemplo

- **`DIA` y `USUARIO`**: Se obtienen dinámicamente. Si ejecutas el script mañana, la fecha cambia automáticamente. Si lo ejecutas otro usuario, el nombre cambia.
- **`DIR_ORIGEN`**: Usa `$USUARIO` para construir la ruta. Esto hace que el script sea portátil entre usuarios.
- **`ARCHIVO_RESALDO`**: Combina variables para crear un nombre único y descriptivo.
- **`RUTA_FINAL`**: Usa `${}` para evitar ambigüedad. Si hubieras usado `$CARPETA_DESTINO/ARCHIVO_RESALDO`, Bash podría interpretar `CARPETA_DESTINO_ARCHIVO_RESALDO` como una sola variable.
- **Comillas en `tar`**: Se usan comillas dobles alrededor de `$RUTA_FINAL` porque contiene espacios potenciales (aunque aquí no los hay, es buena práctica).

Este enfoque modular permite cambiar la ruta de origen o el formato de fecha en un solo lugar, sin buscar y reemplazar en todo el script.