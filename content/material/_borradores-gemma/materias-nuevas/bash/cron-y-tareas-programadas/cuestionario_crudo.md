### 1 — Sintaxis básica del archivo crontab
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "sintaxis", "estructura"]
tipo: completar
enunciado: "Para editar el archivo de configuración de cron del usuario actual, se utiliza el comando `crontab -e`. Si deseamos editar el cron de otro usuario llamado 'admin', la sintaxis correcta es: crontab -e -u admin. ¿Cuál es el flag específico para especificar el usuario en este contexto?"
respuesta: "-u"
respuestas_validas:
  - "-u"
  - "--user"
pasos:
  - "Identificar que se necesita modificar el cron de un usuario distinto al actual."
  - "Recordar que el flag estándar en GNU coreutils para especificar usuario es -u."
explicacion: "El flag `-u` (o `--user`) en el comando `crontab` permite especificar el nombre de usuario cuyo archivo de cron se desea editar o instalar. Sin este flag, se modifica el cron del usuario que ejecuta el comando."
```

### 2 — Interpretación de campo minuto
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "campos", "minuto"]
tipo: vf
enunciado: "En una entrada de cron, el campo 'minuto' acepta valores del 0 al 59, pero también acepta el valor 60 para representar el segundo 60 de un segundo bisiesto en algunos sistemas antiguos."
respuesta: falso
pasos:
  - "Verificar el rango válido para el campo de minutos en la especificación POSIX de cron."
  - "Confirmar que el rango estándar es 0-59."
explicacion: "El campo de minutos en cron va estrictamente de 0 a 59. No existe soporte estándar para el valor 60 en el campo de minutos en la mayoría de las implementaciones modernas de cron (como Vixie cron o systemd timers)."
```

### 3 — Uso de comodines en cron
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "comodines", "asterisco"]
tipo: completar
enunciado: "Si queremos ejecutar un script `/usr/local/bin/backup.sh` todos los días a las 3:30 AM, la línea en el crontab sería: `30 3 * * * /usr/local/bin/backup.sh`. ¿Qué carácter se utiliza en los campos de día y mes para indicar 'cualquier día/mes'?"
respuesta: "*"
respuestas_validas:
  - "*"
pasos:
  - "Analizar la estructura de tiempo de cron: minuto, hora, día del mes, mes, día de la semana."
  - "Identificar que para 'todos' los días o meses se usa el símbolo de multiplicación o asterisco."
explicacion: "El asterisco `*` es el comodín en cron que significa 'todos los valores válidos' para ese campo. En el ejemplo, `* * *` indica que la tarea se ejecutará en cualquier día del mes, cualquier mes y cualquier día de la semana, siempre que la hora y minuto coincidan."
```

### 4 — Comando para listar tareas
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "listado", "visualizacion"]
tipo: mc
enunciado: "¿Qué comando se utiliza para listar las tareas programadas en el crontab del usuario actual sin editarlas?"
opciones_explicitas:
  - "crontab -l"
  - "crontab -s"
  - "crontab -r"
  - "crontab -v"
respuesta: "crontab -l"
pasos:
  - "Evaluar las opciones comunes de crontab."
  - "Descartar -r (eliminar) y -v (version)."
  - "Seleccionar la opción que corresponde a 'list' (listar)."
explicacion: "El flag `-l` (list) muestra el contenido actual del archivo de crontab del usuario. `-r` elimina el crontab, `-s` requiere permisos de sudo y configuración de seguridad, y `-v` muestra la versión del programa."
```

### 5 — Redirección de salida estándar
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "salida", "redireccion", "stdout"]
tipo: completar
enunciado: "Para evitar que cron envíe correos electrónicos al usuario con la salida estándar de un script, y en lugar de ello guardarla en un archivo de log `/var/log/mi_script.log`, la línea de cron debe ser: `0 12 * * * /usr/bin/script.sh > /var/log/mi_script.log 2>&1`. ¿Qué número de archivo de descriptor se usa para redirigir el flujo de error estándar?"
respuesta: "2"
respuestas_validas:
  - "2"
pasos:
  - "Recordar los descriptores de archivo en Unix: 0 (stdin), 1 (stdout), 2 (stderr)."
  - "Identificar que `2>&1` significa 'redirigir el descriptor 2 al mismo destino que el 1'."
explicacion: "El descriptor de archivo 2 representa el flujo de error estándar (stderr). La sintaxis `2>&1` redirige los errores al mismo lugar que la salida estándar (en este caso, al archivo de log)."
```

### 6 — Ejecución semanal con día específico
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "dia-semana", "domingo"]
tipo: completar
enunciado: "Queremos ejecutar un reporte cada domingo a las 00:00. En cron, los días de la semana se numera del 0 (domingo) al 6 (sábado). ¿Qué número debe ir en el quinto campo (día de la semana) para indicar estrictamente el domingo?"
respuesta: "0"
respuestas_validas:
  - "0"
  - "7"
pasos:
  - "Consultar la convención de numeración de días en cron."
  - "Confirmar que tanto 0 como 7 representan el domingo."
explicacion: "En la mayoría de las implementaciones de cron, tanto el 0 como el 7 representan el domingo. El 1 es lunes y así sucesivamente hasta el 6 (sábado)."
```

### 7 — Variable SHELL en crontab
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "variables", "shell", "entorno"]
tipo: vf
enunciado: "Por defecto, si no se especifica la variable SHELL en el archivo crontab, el demonio cron utiliza `/bin/sh` como intérprete para ejecutar los comandos."
respuesta: verdadero
pasos:
  - "Verificar el comportamiento por defecto del daemon cron."
  - "Confirmar que la mayoría de los sistemas usan `/bin/sh` si no se define otra cosa."
explicacion: "El entorno de cron es mínimo. Si no se establece explícitamente `SHELL=/bin/bash` en el crontab, el comando se ejecutará bajo `/bin/sh`, lo que puede causar diferencias de comportamiento si el script usa sintaxis exclusiva de bash."
```

### 8 — Uso de @reboot
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "reboot", "inicio", "prefijos"]
tipo: mc
enunciado: "¿Cuál es la forma correcta de escribir una tarea que se ejecuta una sola vez al arrancar el sistema?"
opciones_explicitas:
  - "@reboot /usr/local/bin/startup.sh"
  - "@every reboot /usr/local/bin/startup.sh"
  - "reboot * * * * /usr/local/bin/startup.sh"
  - "@system/start /usr/local/bin/startup.sh"
respuesta: "@reboot /usr/local/bin/startup.sh"
pasos:
  - "Identificar los prefijos especiales soportados por cron (como @yearly, @monthly, @reboot)."
  - "Seleccionar el prefijo que indica inicio del sistema."
explicacion: "El prefijo `@reboot` es una extensión común (estándar en Vixie cron y compatibles) que permite especificar una tarea para ejecutarse una vez al arrancar el demonio cron tras el inicio del sistema. No es estándar POSIX pero es universalmente soportado."
```

### 9 — Limpieza de crontab
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "eliminacion", "riesgo"]
tipo: completar
enunciado: "Si un administrador desea eliminar TODAS las tareas programadas del crontab del usuario actual de forma no interactiva (sin abrir el editor), debe ejecutar: crontab -r. ¿Qué flag se usa para forzar la eliminación sin pedir confirmación en algunas versiones?"
respuesta: "-r"
respuestas_validas:
  - "-r"
  - "--remove"
pasos:
  - "Identificar el flag de eliminación en crontab."
  - "Notar que `-r` elimina el crontab. Algunas versiones requieren `-i` para pedir confirmación, pero el flag base es -r."
explicacion: "El flag `-r` (remove) elimina el archivo de crontab del usuario. Es una operación destructiva. En sistemas como macOS o algunas versiones de GNU cron, puede requerir confirmación interactiva (`-i`) o forzar con `-r` dependiendo de la configuración de seguridad, pero el flag que inicia la acción es `-r`."
```

### 10 — Rangos numéricos en cron
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "rangos", "guion"]
tipo: completar
enunciado: "Para ejecutar un comando cada minuto desde las 9 AM hasta las 5 PM (inclusive), en el campo de hora se usa el rango `9-17`. ¿Qué carácter se utiliza para definir este rango continuo?"
respuesta: "-"
respuestas_validas:
  - "-"
pasos:
  - "Recordar la sintaxis de rangos en cron."
  - "Identificar el guion medio como delimitador de rango."
explicacion: "El guion `-` define un rango continuo de valores. Por ejemplo, `1-5` en el campo de minutos significa 1, 2, 3, 4 y 5. `9-17` en el campo de hora significa desde las 9 hasta las 17 horas."
```

### 11 — Lista de valores
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "listas", "coma"]
tipo: completar
enunciado: "Si queremos ejecutar un script solo los días 1 y 15 de cada mes, en el campo 'día del mes' se escribe `1,15`. ¿Qué carácter separa los valores en una lista?"
respuesta: ","
respuestas_validas:
  - ","
pasos:
  - "Identificar la sintaxis para valores no contiguos."
  - "Reconocer la coma como separador de lista en cron."
explicacion: "La coma `,` se utiliza para listar valores específicos. `1,15` significa 'el día 1 O el día 15'. Esto es diferente de un rango continuo."
```

### 12 — Incrementos (step values)
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "pasos", "barra"]
tipo: completar
enunciado: "Para ejecutar una tarea cada 15 minutos (a los 0, 15, 30, 45 minutos de cada hora), se usa la sintaxis `*/15` en el campo de minutos. ¿Qué carácter indica este incremento?"
respuesta: "/"
respuestas_validas:
  - "/"
pasos:
  - "Recordar la sintaxis de pasos."
  - "Identificar la barra inclinada como operador de paso."
explicacion: "La barra `/` se usa para definir pasos. `*/15` en el campo de minutos significa 'cada 15 minutos comenzando desde 0'. `0-23/2` en horas significaría cada 2 horas desde la 0."
```

### 13 — Variables de entorno
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "variables", "MAILTO"]
tipo: vf
enunciado: "La variable `MAILTO` en el crontab puede establecerse a una cadena vacía (`MAILTO=''`) para desactivar el envío de correos de salida, pero no puede usarse para redirigir la salida a una dirección de correo externa si el sistema de correo local está deshabilitado."
respuesta: falso
pasos:
  - "Analizar la funcionalidad de la variable MAILTO."
  - "Verificar si puede aceptar direcciones de correo externas."
explicacion: "La variable `MAILTO` puede establecerse a una dirección de correo externa válida (ej. `MAILTO=admin@empresa.com`). Si está vacía (`MAILTO=""` o `MAILTO=''`), se desactivan los correos. La afirmación de que 'no puede usarse para redirigir a externa' es falsa, siempre que el sistema de correo lo permita."
```

### 14 — Comandos internos vs externos
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "comandos", "rutas-absolutas"]
tipo: mc
enunciado: "¿Por qué es una buena práctica usar rutas absolutas para los comandos en el archivo crontab?"
opciones_explicitas:
  - "Porque cron no carga el PATH del usuario y puede no encontrar el comando."
  - "Porque los comandos con rutas relativas son más seguros."
  - "Porque cron solo ejecuta comandos internos de bash."
  - "Porque las rutas relativas funcionan mejor en sistemas Windows."
respuesta: "Porque cron no carga el PATH del usuario y puede no encontrar el comando."
pasos:
  - "Evaluar el entorno de ejecución de cron."
  - "Recordar que el PATH de cron es mínimo y diferente al del usuario interactivo."
explicacion: "El demonio cron ejecuta comandos con un PATH muy limitado (a menudo solo `/usr/bin:/bin`). Si se usa un comando como `git` o `python` sin ruta absoluta, cron no lo encontrará y la tarea fallará silenciosamente (o con un error en el correo)."
```

### 15 — Día de la semana vs Día del mes
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "lógica", "dia-mes", "dia-semana"]
tipo: vf
enunciado: "Si en una línea de cron se especifican valores tanto en el campo 'día del mes' (4to campo) como en el campo 'día de la semana' (5to campo), la tarea se ejecutará si COINCIDE AL MENOS UNO de los dos campos (lógica OR)."
respuesta: verdadero
pasos:
  - "Analizar la lógica de combinación de campos en cron."
  - "Confirmar que la intersección es lógica OR, no AND."
explicacion: "Esta es una regla común de confusión en cron. Si ambos campos (día del mes y día de la semana) tienen valores específicos (no asteriscos), la tarea se ejecuta si el día actual coincide con CUALQUIERA de los dos criterios. Para forzar una lógica AND (ambos deben coincidir), se debe usar un script bash que verifique ambas condiciones."
```

### 16 — Comando at
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "at", "tareas-unicas"]
tipo: mc
enunciado: "¿Cuál es la herramienta adecuada para ejecutar un comando UNA SOLA vez en un momento específico futuro (ej. 'en 1 hora'), sin establecer un ciclo repetitivo?"
opciones_explicitas:
  - "at"
  - "cron"
  - "systemctl"
  - "nohup"
respuesta: "at"
pasos:
  - "Diferenciar entre programación recurrente (cron) y ejecución única (at)."
  - "Seleccionar la herramienta diseñada para tareas 'one-off' en el tiempo."
explicacion: "El comando `at` está diseñado para ejecutar tareas una sola vez en un tiempo futuro especificado. `cron` es para tareas recurrentes. `nohup` prolonga la vida de un proceso pero no lo agenda."
```

### 17 — Sintaxis de fecha en at
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "at", "sintaxis-fecha"]
tipo: completar
enunciado: "Para ejecutar un script `/tmp/script.sh` exactamente a las 14:30 de hoy, se usa el comando: `echo '/tmp/script.sh' | at 14:30`. Si se quiere que se ejecute mañana a la misma hora, se añade la palabra 'tomorrow'. ¿Qué palabra clave se usa para indicar 'mañana' en la sintaxis de at?"
respuesta: "tomorrow"
respuestas_validas:
  - "tomorrow"
  - "tomorrow 14:30"
pasos:
  - "Recordar las palabras clave de tiempo soportadas por at."
  - "Identificar 'tomorrow' como la indicación de día siguiente."
explicacion: "La palabra clave `tomorrow` (o `tomorrow HH:MM`) indica al daemon at que ejecute la tarea al mismo tiempo en el día siguiente. Otras opciones incluyen 'today', 'noon', 'midnight', etc."
```

### 18 — Listar trabajos en at
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "at", "listado", "atq"]
tipo: mc
enunciado: "¿Qué comando se usa para listar los trabajos pendientes en la cola de `at`?"
opciones_explicitas:
  - "atq"
  - "at -l"
  - "cron -l"
  - "at -list"
respuesta: "atq"
pasos:
  - "Identificar el comando específico para la cola at."
  - "Saber que `atq` es el alias/mando estándar para 'at queue'."
explicacion: "El comando `atq` (o `at -l`) lista los trabajos pendientes en la cola de at. Muestra el número de trabajo, la fecha/hora de ejecución y el usuario."
```

### 19 — Eliminar un trabajo at
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "at", "eliminacion", "atrm"]
tipo: completar
enunciado: "Para eliminar un trabajo pendiente de la cola de at con el número de trabajo 5, se utiliza el comando: atrm 5. ¿Qué comando se usa para eliminar trabajos de la cola at?"
respuesta: "atrm"
respuestas_validas:
  - "atrm"
  - "at -r"
pasos:
  - "Identificar el comando de eliminación para at."
  - "Recordar que `atrm` es el comando específico."
explicacion: "El comando `atrm` (at remove) elimina trabajos de la cola. Se le pasa el número de trabajo como argumento. Es el equivalente a `crontab -r` pero para trabajos individuales de at."
```

### 20 — systemd timers vs cron
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "systemd", "alternativa", "timers"]
tipo: mc
enunciado: "¿Cuál es la principal ventaja de usar `systemd timers` en lugar de `cron` en sistemas Linux modernos?"
opciones_explicitas:
  - "Permite una integración más estrecha con el sistema de inicialización y control de servicios, y evita la acumulación de procesos si un sistema está inactivo."
  - "Es el único método soportado en Windows."
  - "No requiere permisos de root para configurarse."
  - "Es más rápido en la ejecución de scripts."
respuesta: "Permite una integración más estrecha con el sistema de inicialización y control de servicios, y evita la acumulación de procesos si un sistema está inactivo."
pasos:
  - "Comparar cron y systemd timers."
  - "Identificar la gestión de dependencias y el manejo de sistemas apagados como ventajas clave de systemd."
explicacion: "systemd timers pueden asegurar que una tarea se ejecute si el sistema estaba apagado cuando debería haberlo hecho (si se configura con `Persistent=true`), y se integran con la unidad de servicio correspondiente, permitiendo un mejor control de recursos y dependencias."
```

### 21 — Unidad de servicio systemd
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "systemd", "timer", "unidad"]
tipo: completar
enunciado: "Para crear un timer de systemd que ejecute una tarea periódicamente, se necesita un archivo `.timer` y un archivo `.service`. Si el archivo de timer se llama `mi-tarea.timer`, ¿cuál es el nombre base obligatorio del archivo de servicio asociado?"
respuesta: "mi-tarea"
respuestas_validas:
  - "mi-tarea"
pasos:
  - "Entender la convención de nomenclatura de systemd."
  - "Saber que el timer debe coincidir con el nombre base del servicio."
explicacion: "En systemd, el archivo de timer debe tener el mismo nombre base que el archivo de servicio que activa. Si el timer es `mi-tarea.timer`, debe activar `mi-tarea.service`. Esto se define en la directiva `Unit=` dentro del archivo `.timer`."
```

### 22 — Persistencia en systemd timers
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "systemd", "persistent"]
tipo: completar
enunciado: "En un archivo `.timer` de systemd, para asegurar que si el sistema se apaga en el momento programado, la tarea se ejecute inmediatamente al reiniciar, se debe incluir la línea: Persistent=true. ¿Qué valor booleano se usa para activar esta función?"
respuesta: "true"
respuestas_validas:
  - "true"
  - "True"
  - "TRUE"
pasos:
  - "Identificar la directiva de persistencia en systemd timers."
  - "Confirmar el valor booleano correcto."
explicacion: "La directiva `Persistent=true` en la sección `[Timer]` del archivo `.timer` indica al sistema que, si el timer se perdió porque el sistema estaba apagado, debe ejecutar la tarea tan pronto como el sistema vuelva a estar activo."
```

### 23 — Comando crontab -i
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "interactivo", "seguridad"]
tipo: mc
enunciado: "¿Qué hace el flag `-i` cuando se usa junto con `crontab -r`?"
opciones_explicitas:
  - "Pide confirmación al usuario antes de eliminar el crontab."
  - "Abre el editor interactivo."
  - "Instala el crontab desde un archivo de forma interactiva."
  - "Muestra un resumen interactivo de las tareas."
respuesta: "Pide confirmación al usuario antes de eliminar el crontab."
pasos:
  - "Analizar el significado de `-i` en contextos de comando de línea (interactive)."
  - "Aplicarlo a la acción destructiva de `crontab -r`."
explicacion: "El flag `-i` (interactive) fuerza a `crontab -r` a pedir confirmación antes de eliminar el archivo de crontab, evitando eliminaciones accidentales. Sin `-i`, la eliminación es inmediata si se ejecuta con los permisos adecuados."
```

### 24 — Horario de mantenimiento (anacron)
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "anacron", "portatil", "no-constante"]
tipo: completar
enunciado: "Para ejecutar tareas diarias, semanales o mensuales en portátiles que no están encendidos 24/7, se utiliza un daemon llamado `anacron`. ¿Qué palabra clave se usa en el archivo de configuración de anacron (`/etc/anacrontab`) para definir la demora máxima antes de ejecutar una tarea tras el arranque?"
respuesta: "delay"
respuestas_validas:
  - "delay"
pasos:
  - "Identificar la estructura de `/etc/anacrontab`."
  - "Reconocer el campo de retardo (delay) que evita la carga inmediata al arrancar."
explicacion: "En `/etc/anacrontab`, el primer campo es el periodo (ej. 7 para semanal), el segundo es el `delay` (en minutos) que espera tras el arranque antes de ejecutar la tarea, y el tercero es el identificador del job. El delay previene la congestión del sistema al inicio."
```

### 25 — Syntax error en crontab
```
metadata:
  materia: "bash"
  tema: "cron-y-tareas-programadas"
  nivel: "intermedio"
  tags: ["cron", "errores", "depuracion"]
tipo: vf
enunciado: "Si se produce un error de sintaxis en una línea del archivo crontab, el demonio cron detendrá la ejecución de TODAS las tareas programadas del archivo hasta que se corrija el error."
respuesta: falso
pasos:
  - "Evaluar la robustez del demonio cron ante errores de sintaxis."
  - "Confirmar que cron ignora líneas inválidas en lugar de bloquearse."
explicacion: "El demonio cron es robusto: si encuentra una línea con sintaxis inválida en el crontab, la ignora y continúa procesando el resto del archivo. No detiene el servicio ni bloquea otras tareas válidas. El error suele registrarse en los logs del sistema (ej. `/var/log/syslog` o `/var/log/cron`)."
```