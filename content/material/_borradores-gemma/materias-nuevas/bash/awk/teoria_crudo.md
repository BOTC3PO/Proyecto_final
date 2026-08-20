# Awk Intermedio: Más allá del `print`

## Introducción

En el ecosistema de la terminal, `awk` es la navaja suiza para el procesamiento de texto estructurado. Si bien en su forma básica se usa para imprimir columnas, el nivel intermedio implica entender que `awk` es un lenguaje de programación completo con flujo de control, variables y funciones matemáticas. Su potencia radica en la capacidad de leer línea por línea, aplicar lógica condicional y generar reportes complejos sin necesidad de scripts en Python o Perl, manteniendo la inmediatez de la CLI.

## Explicación central: El motor de `awk`

Para dominar `awk`, hay que entender su ciclo de vida interno. El procesador recorre el archivo de entrada (o `stdin`) línea por línea. Para cada línea, ejecuta las reglas definidas por bloques.

### Estructura de Bloques Clave

1.  **Bloque `BEGIN`**: Se ejecuta *antes* de leer la primera línea. Ideal para inicializar variables o imprimir encabezados.
2.  **Bloque de Patrón (Acción por defecto)**: Se ejecuta para cada línea que cumple con el patrón especificado. Aquí es donde ocurre la magia de `$1`, `$2`, etc.
3.  **Bloque `END`**: Se ejecuta *después* de leer todas las líneas. Perfecto para cálculos finales, promedios o pie de página.

### Sintaxis y Ejemplos Reales

El poder real está en las expresiones regulares y las operaciones aritméticas sobre los campos.

```bash
# Ejemplo 1: Filtrar y calcular
# Imprime el nombre (campo 1) y el salario (campo 5) si el salario > 5000
awk '$5 > 5000 {print $1, "gana", $5}' empleados.csv

# Ejemplo 2: Uso de BEGIN y END para reportes
# Calcula el promedio del campo 3 (sueldo)
awk 'BEGIN {sum=0; count=0} 
     {sum += $3; count++} 
     END {if(count>0) print "Promedio:", sum/count}' empleados.csv
```

### Variables y Campos Internos

*   `NF`: Número de campos en la línea actual. Útil para validar líneas incompletas.
*   `NR`: Número de registro (línea) actual. Permite numerar líneas o saltar encabezados.
*   `FS` (Field Separator): El separador de campos. Por defecto es espacio en blanco, pero puedes cambiarlo dinámicamente con `-F ':'` o asignándolo en `BEGIN`.

```bash
# Cambiar el separador a dos puntos para archivos de configuración
awk -F ':' '{print $1, $3}' /etc/passwd
```

## Errores comunes de quien recién aprende este punto

1.  **Confundir `$0` con `$1`**: `$0` es toda la línea; `$1` es el primer campo. Muchos intentan hacer `$0 + 10` esperando sumar 10 a la línea, pero `awk` convierte la cadena a número (usualmente 0 si no empieza con dígito) y suma 10, resultando en 10 en lugar de modificar la línea.
2.  **Ignorar el `BEGIN` para inicializar variables**: En `awk`, las variables no inicializadas tienen valor `0` (numérico) o `""` (cadena). Si no inicializas contadores en `BEGIN`, tus cálculos en `END` pueden ser impredecibles si el archivo está vacío.
3.  **Uso incorrecto de comillas**: Los scripts de `awk` deben ir entre comillas simples `'...'` en la línea de comandos para evitar que la shell interprete caracteres como `$` o `!`.
    *   Correcto: `awk '{print $1}' archivo`
    *   Incorrecto: `awk "{print $1}" archivo` (la shell expandirá `$1` antes de pasar el comando).

## Cuándo usarlo / cuándo NO usarlo

**Usa `awk` cuando:**
*   Necesitas transformar o extraer datos de archivos de texto plano (CSV, logs, tabulados) rápidamente.
*   El procesamiento es lineal y no requiere carga masiva en memoria de todo el archivo.
*   Quieres realizar agregaciones simples (sumas, promedios, conteos) sobre columnas específicas.

**No uses `awk` cuando:**
*   Necesitas procesar datos jerárquicos complejos (JSON, XML). Para eso, `jq` o `xmlstarlet` son más seguros y legibles.
*   El archivo es extremadamente grande (terabytes) y la lógica es compleja. `awk` carga el archivo en memoria de forma implícita en algunas implementaciones antiguas o puede ser lento comparado con herramientas especializadas como `datamash` o bases de datos.
*   Necesitas escribir lógica de negocio muy extensa. En ese caso, un script en Python o Bash con funciones es más mantenible que un `awk` de 50 líneas.

## Ejemplo extendido en contexto

**Caso de uso:** Analizar un log de acceso web (`access.log`) para encontrar las IPs que más peticiones hacen y filtrar solo las que superan un umbral de 100 peticiones, generando un reporte en formato CSV.

El log tiene el formato: `IP - - [fecha] "GET /path HTTP/1.1" 200 1234`

```bash
awk '{
    # Contar ocurrencias de cada IP (primer campo)
    ip_count[$1]++
}
END {
    # Imprimir encabezado CSV
    print "IP,Total_Peticiones"
    
    # Iterar sobre el array asociativo
    for (ip in ip_count) {
        # Filtrar solo IPs con más de 100 peticiones
        if (ip_count[ip] > 100) {
            print ip "," ip_count[ip]
        }
    }
}' access.log | sort -t',' -k2 -nr > reporte_top_ips.csv
```

**Análisis del código:**
1.  `ip_count[$1]++`: Crea un array asociativo donde la clave es la IP y el valor es el contador. Esto es mucho más eficiente que usar `grep` y `uniq` en tuberías múltiples.
2.  `END`: Al final, recorre el array. Es importante notar que `for (key in array)` no garantiza orden.
3.  `sort -t',' -k2 -nr`: Se usa `sort` externo para ordenar los resultados numéricamente en orden descendente, ya que `awk` no tiene una función de ordenamiento integrada simple para arrays asociativos en su estándar POSIX.
4.  Redirección a `reporte_top_ips.csv`: El resultado final es un archivo listo para importar en una hoja de cálculo o sistema de monitoreo.