# Pipes y Redirecciones en Bash: Flujo de Datos y Control de E/S

## Introducción: El principio de composición en la CLI

En el ecosistema de Unix y Linux, la potencia de la terminal no reside únicamente en la complejidad de los comandos individuales, sino en la capacidad de encadenarlos para resolver problemas complejos de manera elegante. Los **pipes** (tuberías) y las **redirecciones** son los mecanismos fundamentales que permiten este flujo de datos. Mientras que la redirección manipula el origen o el destino de los datos (archivos o dispositivos), el pipe conecta la salida de un programa directamente con la entrada de otro, eliminando la necesidad de archivos temporales intermedios. Dominar estos conceptos es esencial para escribir scripts eficientes y aprovechar el verdadero poder de la línea de comandos.

## Explicación central: Flujo de datos y descriptores

Por defecto, cada proceso en Linux tiene tres flujos de datos estándar:
1.  **STDIN (0)**: Entrada estándar (generalmente el teclado).
2.  **STDOUT (1)**: Salida estándar (generalmente la terminal).
3.  **STDERR (2)**: Salida de errores (también la terminal por defecto).

### Pipes (`|`)
El operador pipe `|` toma la salida estándar (STDOUT) del comando de la izquierda y la convierte en la entrada estándar (STDIN) del comando de la derecha. Es crucial entender que **solo funciona con STDOUT**. Si un comando envía información a STDERR, esa información no pasará por el pipe y seguirá yendo a la pantalla.

*Ejemplo real:*
```bash
# Filtrar líneas que contienen "error" de un log grande
cat /var/log/syslog | grep "error" | sort | uniq -c
```
Aquí, `cat` lee el archivo y lo manda a STDOUT. `grep` recibe ese flujo, filtra y lo manda a STDOUT. `sort` ordena lo que recibe, y `uniq -c` cuenta las ocurrencias. Todo ocurre en memoria, sin crear archivos en disco.

### Redirecciones (`>`, `>>`, `<`, `2>`)
Las redirecciones permiten cambiar los descriptores de archivo por defecto.
*   `>`: Redirige STDOUT a un archivo, **sobrescribiéndolo** si existe.
*   `>>`: Redirige STDOUT a un archivo, **apendicando** al final.
*   `<`: Redirige el contenido de un archivo a STDIN de un comando.
*   `2>`: Redirige específicamente STDERR.

*Ejemplo real:*
```bash
# Separar errores de éxito en logs distintos
ls /ruta/inexistente 1> salida.txt 2> errores.txt
```
En este caso, si `ls` falla, el mensaje de error va a `errores.txt` y no ensucia la consola, mientras que `salida.txt` queda vacío (o con resultados si hubiera éxito).

## Errores comunes de quien recién aprende

1.  **Confundir STDOUT con STDERR**: Intentar procesar errores con pipes como `command 2>&1 | grep "error"`. Si no se redirige STDERR a STDOUT (`2>&1`) antes del pipe, `grep` nunca verá los errores. El orden importa: `2>&1` debe ir antes del `|`.
2.  **Sobrescritura accidental**: Usar `>` cuando se quería `>>` en scripts de log, borrando historiales importantes.
3.  **Ignorar la codificación**: Al redircionar salida de herramientas multilingües a archivos, a veces se pierden caracteres especiales si no se establece correctamente la variable `LANG` o `LC_ALL`.
4.  **Pipes innecesarios**: Usar `cat archivo | grep "pattern"` cuando `grep "pattern" archivo` es más eficiente y directo. El "Useless Use of Cat" es un anti-patrón común.

## Cuándo usarlo / cuándo NO usarlo

**Usa pipes cuando:**
*   Necesites transformar datos en tiempo real sin ocupar espacio en disco.
*   Estés combinando utilidades pequeñas y específicas (el principio KISS de Unix).
*   La cantidad de datos sea manejable en memoria (cuidado con archivos gigantes; considera `awk` o `sed` en lugar de cargar todo en variables).

**NO uses pipes cuando:**
*   Necesites procesar la salida en múltiples direcciones simultáneamente (usa `tee`).
*   El comando de la izquierda genere mucha salida y el de la derecha falle rápidamente; podrías perder datos o generar señales `SIGPIPE` indeseadas.
*   Estés tratando con datos binarios complejos; los pipes son flujos de texto por defecto (aunque pueden manejar binario, el control es más difícil).

## Ejemplo extendido en contexto: Reporte de uso de disco

Imagina que necesitas generar un reporte semanal de los 5 directorios que más espacio ocupan en `/var`, pero ignorando errores de permisos y guardando solo los datos numéricos procesados.

```bash
#!/bin/bash

# 1. Ejecutar du, redirigir errores a /dev/null (basura) para no ensuciar el pipe
# 2. Ordenar numéricamente en orden descendente (-nr)
# 3. Tomar las primeras 5 líneas (-n 5)
# 4. Formatear la salida para quitar caracteres no deseados si fuera necesario

du -sh /var/* 2>/dev/null | sort -nr | head -n 5 | awk '{printf "Tamaño: %10s | Ruta: %s\n", $1, $2}' > /tmp/disco_reporte.txt

# Verificar que el archivo se creó correctamente
if [ -s /tmp/disco_reporte.txt ]; then
    echo "Reporte generado exitosamente."
else
    echo "Error: No se pudieron obtener datos."
fi
```

En este ejemplo, `2>/dev/null` asegura que los errores de permisos (comunes en `/var`) no interrumpan el flujo ni generen ruido. `awk` formatea la salida final para que sea legible por humanos, y todo se almacena en un archivo para su posterior revisión o envío por correo.