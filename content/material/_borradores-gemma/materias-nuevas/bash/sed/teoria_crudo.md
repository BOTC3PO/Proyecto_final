# Sed: Potenciando la manipulación de texto en Bash

## Introducción: ¿Qué es y para qué sirve?

`sed` (Stream EDitor) es una herramienta fundamental en el ecosistema de Unix/Linux que permite realizar transformaciones básicas y avanzadas en flujos de texto. A diferencia de editores interactivos como `nano` o `vim`, `sed` opera de manera no interactiva, lo que lo hace ideal para scripts automatizados, tuberías (`pipes`) y procesamiento masivo de archivos.

En el nivel intermedio, dejamos atrás las sustituciones simples (`s/antiguo/nuevo/`) para adentrarnos en la creación de scripts de edición, el manejo de patrones complejos, el uso de direcciones (rango de líneas) y la manipulación del buffer de patrón. Es la herramienta preferida cuando necesitas transformar datos antes de enviarlos a otro comando o guardar el resultado en un nuevo archivo, sin necesidad de cargar todo el contenido en memoria como haría un editor gráfico.

## Explicación Central: Sintaxis y Comandos Clave

El núcleo de `sed` es el comando `s` (substitución), pero su verdadero poder reside en las expresiones regulares y los flags.

### 1. Expresiones Regulares y Flags
Por defecto, `sed` usa expresiones regulares básicas (BRE). Para usar expresiones regulares extendidas (ERE), que simplifican la sintaxis al no requerir escapes para caracteres como `+`, `?`, `|` y `()`, utilizamos el flag `-E` (o `-r` en GNU sed).

*   **Flag `g`**: Global. Sustituye *todas* las ocurrencias en la línea, no solo la primera.
*   **Flag `i`**: Ignorar mayúsculas y minúsculas (case-insensitive).
*   **Flag `c`**: Cambiar la línea completa por una nueva cadena.

**Ejemplo real:**
```bash
# Reemplazar todas las apariciones de 'error' por 'CRITICAL' ignorando mayúsculas
echo "Error en el sistema" | sed -E 's/error/CRITICAL/gi'
# Salida: CRITICAL en el sistema
```

### 2. Direcciones y Rangos
Puedes limitar la ejecución de un comando a líneas específicas usando números de línea o patrones.

*   `1,5s/foo/bar/`: Aplica el cambio solo entre la línea 1 y la 5.
*   `/patron1/,/patron2/s/foo/bar/`: Aplica el cambio desde la primera línea que coincida con `patron1` hasta la siguiente que coincida con `patron2`.
*   `10,$s/foo/bar/`: Desde la línea 10 hasta el final del archivo.

**Ejemplo real:**
```bash
# Eliminar comentarios (líneas que empiezan con #) desde la línea 20 hasta el final
sed -E '20,$ s/^#.*$//' archivo.conf
```

### 3. Múltiples Comandos
Para aplicar varias transformaciones, puedes usar `-e` para encadenar comandos o separarlos con `;` dentro de un solo bloque `-e`.

```bash
# Eliminar espacios al inicio y final de cada línea
sed -E -e 's/^[[:space:]]+//' -e 's/[[:space:]]+$//' archivo.txt
```

### 4. Impresión Selectiva
Usar `p` junto con `-n` permite imprimir solo las líneas que coinciden con una expresión, filtrando el resto.

```bash
# Mostrar solo líneas que contienen "FAIL"
grep -n "FAIL" log.txt | sed -n '/FAIL/p'
```

## Errores Comunes

1.  **Olvidar el flag `g`**: Es el error más frecuente. `sed` por defecto solo cambia la primera ocurrencia en cada línea. Si esperas que se cambien todas las apariciones de una variable en un JSON o CSV, el resultado estará incompleto.
2.  **Confundir BRE con ERE**: Olvidar escapar paréntesis `\(` en modo BRE o intentar usar `+` sin el flag `-E` genera errores de sintaxis o comportamientos inesperados.
3.  **No usar delimitadores adecuados**: Usar `/` como delimitador en rutas de archivos (`/home/user/docs`) o URLs requiere escapar las barras (`\/`). Es más limpio cambiar el delimitador: `s|/home|/var|g`.
4.  **Ignorar la edición en línea**: No usar el flag `-i` (o `-i.bak` para backup) cuando se intenta modificar un archivo directamente en lugar de solo ver la salida en pantalla.

## Cuándo usarlo / Cuándo NO usarlo

*   **Usa `sed` cuando**:
    *   Necesitas transformar texto en tiempo real dentro de una tubería.
    *   La lógica de transformación es lineal y basada en patrones (no requiere estado complejo entre líneas).
    *   Trabajas con archivos de configuración, logs o CSVs simples.
    *   La velocidad es crítica y el archivo es grande (sed es muy eficiente).

*   **NO uses `sed` cuando**:
    *   Necesitas parsear JSON o XML estructurado. Usa `jq` o `xmlstarlet` en su lugar; `sed` romperá fácilmente la estructura si el formato varía ligeramente.
    *   La lógica es recursiva o requiere mantener estado complejo entre líneas. Aquí `awk` o `perl` son más adecuados.
    *   El archivo es extremadamente grande y la memoria es un problema crítico (aunque sed es eficiente, para gigabytes de datos, herramientas específicas de streaming pueden ser mejores).

## Ejemplo Extendido: Limpieza de Logs de Acceso

Imagina que tienes un archivo `access.log` con entradas de servidor web y necesitas generar un reporte CSV limpio que contenga solo la IP, la fecha y el código de estado, excluyendo las peticiones a imágenes y scripts estáticos.

**Entrada (fragmento de `access.log`):**
```
192.168.1.10 - - [10/Oct/2023:13:55:36 +0000] "GET /index.html HTTP/1.1" 200 2326
192.168.1.15 - - [10/Oct/2023:13:56:12 +0000] "GET /style.css HTTP/1.1" 304 0
10.0.0.5 - - [10/Oct/2023:13:57:01 +0000] "POST /api/login HTTP/1.1" 401 534
```

**Objetivo:**
1.  Ignorar líneas que contengan `.css`, `.js`, `.png`, `.jpg`.
2.  Extraer la IP (primer campo).
3.  Extraer la fecha entre corchetes.
4.  Extraer el código de estado (número después de la última comilla).
5.  Formato de salida: `IP;Fecha;Codigo`

**Comando `sed` completo:**

```bash
sed -E \
  -e '/\.(css|js|png|jpg)/d' \
  -e 's/^([0-9.]+) .* \[([^\]]+)\].*" ([0-9]+) .*/\1;\2;\3/' \
  access.log
```

**Análisis paso a paso:**
1.  `-e '/\.(css|js|png|jpg)/d'`: Usa expresiones regulares extendidas (`-E`). Si la línea contiene alguna de las extensiones de archivo, el comando `d` (delete) elimina esa línea del flujo.
2.  `-e 's/^([0-9.]+) .* \[([^\]]+)\].*" ([0-9]+) .*/\1;\2;\3/'`:
    *   `^([0-9.]+)`: Captura la IP al inicio del archivo en el grupo 1.
    *   `.* \[`: Ignora el resto hasta el corchete de apertura.
    *   `([^\]]+)`: Captura todo dentro de los corchetes (la fecha) en el grupo 2. El `^` dentro de `[]` significa "no esto", así que captura hasta el `]`.
    *   `\].*" `: Ignora hasta la comilla final de la petición.
    *   `([0-9]+)`: Captura el código de estado numérico en el grupo 3.
    *   `.*`: Ignora el resto de la línea.
    *   `\1;\2;\3`: Reemplaza toda la línea por los grupos capturados separados por punto y coma.

Este enfoque es robusto, rápido y evita la necesidad de scripts Python o Bash complejos para tareas de transformación lineal de texto.