# Grep: Más allá de la búsqueda simple

## Introducción

`grep` (Global Regular Expression Print) es la navaja suiza para filtrar texto en la terminal. Mientras que los principiantes suelen usarlo solo para encontrar una palabra exacta, el nivel intermedio implica dominar expresiones regulares básicas y opciones avanzadas para convertirlo en una herramienta de análisis de datos en tiempo real. No se trata solo de "buscar", sino de extraer patrones específicos de grandes volúmenes de información (logs, configuraciones, código) de manera eficiente.

## Explicación central y sintaxis práctica

En este nivel, debes dejar de ver `grep` como un buscador de texto plano y empezar a verlo como un motor de patrones. La clave está en las **Expresiones Regulares (Regex)**.

### 1. Expresiones Regulares Básicas
`grep` usa expresiones regulares por defecto (BRE). Los metacaracteres más importantes son:

*   `^`: Ancla al inicio de la línea.
*   `$`: Ancla al final de la línea.
*   `.`: Coincide con cualquier carácter.
*   `*`: El carácter precedente se repite cero o más veces.
*   `|`: Alternancia (solo disponible con `grep -E` o `egrep`).

**Ejemplos reales:**
```bash
# Buscar líneas que comienzan con "Error" y terminan con "timeout"
grep '^Error.*timeout$' /var/log/syslog

# Buscar líneas que contengan "error" O "warning" (case insensitive)
grep -i -E 'error|warning' app.log

# Buscar IPs válidas (patrón básico: números separados por puntos)
grep -E '^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$' access.log
```

### 2. Opciones de Control de Salida
*   `-n`: Muestra el número de línea. Crucial para depurar archivos grandes.
*   `-v`: Invierte la búsqueda (muestra todo lo que *no* coincide). Útil para excluir cabeceras o líneas vacías.
*   `-c`: Cuenta el número de líneas coincidentes. Ideal para métricas rápidas.
*   `-o`: Muestra solo la parte coincidente, no toda la línea. Excelente para extraer datos específicos.

**Ejemplo de `-o` y `-o`:
```bash
# Extraer solo los correos electrónicos de un archivo de texto
grep -oE '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}' data.txt

# Contar cuántas veces aparece la palabra "failed" (sin contar duplicados en la misma línea)
grep -o 'failed' auth.log | wc -l
```

## Errores comunes de quien recién aprende este punto

1.  **Confundir `grep` con `egrep`**: Hoy en día, `grep -E` es el estándar. No uses `egrep` ya que está deprecado en muchas distribuciones.
2.  **Olvidar escapar caracteres especiales**: Si buscas un literal `.` (punto), debes usar `\.`. Si buscas `*`, debes usar `\*`. De lo contrario, `grep` lo interpretará como un operador de repetición.
3.  **No usar comillas en patrones complejos**: Siempre encierra tus expresiones regulares en comillas simples `' '` para evitar que la shell interprete caracteres como `*`, `?` o `|` antes de que `grep` los reciba.
4.  **Ignorar el caso (case sensitivity)**: Por defecto, `grep` distingue mayúsculas de minúsculas. Si esperas encontrar "Error", "error" y "ERROR", usa `-i`.

## Cuándo usarlo / cuándo NO usarlo

### Sí usa `grep` cuando:
*   Necesitas buscar en múltiples archivos o tuberías (`|`) de forma rápida.
*   El patrón es textual y no requiere lógica compleja de estado.
*   Quieres filtrar logs en tiempo real (combinado con `tail -f`).
*   La herramienta está disponible en cualquier entorno Unix/Linux sin instalación adicional.

### No uses `grep` cuando:
*   Necesitas procesar CSV con columnas complejas o JSON estructurado. Usa `awk`, `jq` o `csvkit`. `grep` es ciego a la estructura de datos.
*   El patrón de búsqueda es extremadamente complejo (ej. paréntesis anidados, balanceo de grupos). En ese caso, `awk` o `perl` son más adecuados.
*   Necesitas realizar operaciones aritméticas o lógicas sobre los campos coincidentes. `grep` solo filtra, no procesa datos.

## Ejemplo extendido en contexto

**Caso de uso:** Auditoría de seguridad en un servidor web.

Queremos identificar posibles ataques de fuerza bruta en el archivo `access.log`. Buscamos todas las líneas que contengan el código de estado `401` (No Autorizado) y extraer la dirección IP de origen.

**Paso 1: Filtrar líneas con 401 y extraer IPs**
```bash
grep ' 401 ' access.log | awk '{print $1}' | sort | uniq -c | sort -nr
```
*Explicación:* `grep` filtra las líneas con 401. `awk` extrae la primera columna (la IP). `sort | uniq -c` cuenta las ocurrencias por IP. `sort -nr` ordena de mayor a menor.

**Paso 2: Identificar IPs con más de 10 intentos fallidos**
```bash
grep ' 401 ' access.log | awk '{print $1}' | sort | uniq -c | sort -nr | awk '$1 > 10 {print $2}'
```

**Paso 3: Bloquear temporalmente (ejemplo conceptual)**
```bash
grep ' 401 ' access.log | awk '{print $1}' | sort | uniq -c | sort -nr | awk '$1 > 10 {print $2}' | xargs -I {} iptables -A INPUT -s {} -j DROP
```

Este flujo demuestra cómo `grep` actúa como el primer filtro en una cadena de procesamiento, permitiendo herramientas posteriores (`awk`, `sort`) trabajar solo con datos relevantes, optimizando el rendimiento del sistema.