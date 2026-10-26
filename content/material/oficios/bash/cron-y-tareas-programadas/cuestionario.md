# Bash — Cron y tareas programadas (cuestionario, 22 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Para qué sirve

```
metadata:
  materia: "bash"
  tema: "cron_y_tareas_programadas"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Para ejecutar tareas automáticamente en horarios programados", "Para comprimir archivos", "Para monitorear la temperatura", "Para escribir scripts"]
respuesta: "Para ejecutar tareas automáticamente en horarios programados"

enunciado: "¿Para qué sirve cron?"

explicacion: |
  Cron lanza comandos o scripts según el horario definido en el crontab.
```

### 2 — Editar

```
metadata:
  materia: "bash"
  tema: "cron_y_tareas_programadas"
  nivel: "basico"
  tags: ["crontab"]

tipo: mc
opciones_explicitas: ["crontab -e", "crontab -l", "cron -edit", "crontab --open"]
respuesta: "crontab -e"

enunciado: "¿Qué comando abre tu crontab para editarlo?"

explicacion: |
  `-e` edita, `-l` lista y `-r` borra.
```

### 3 — El peligroso

```
metadata:
  materia: "bash"
  tema: "cron_y_tareas_programadas"
  nivel: "basico"
  tags: ["crontab"]

tipo: mc
opciones_explicitas: ["Borra todas las tareas del crontab, sin pedir confirmación", "Reinicia cron", "Lee el crontab", "Ejecuta todas las tareas"]
respuesta: "Borra todas las tareas del crontab, sin pedir confirmación"

enunciado: "¿Qué hace `crontab -r`?"

explicacion: |
  Está al lado de `-e` en el teclado: un error de tipeo borra el crontab entero. Conviene respaldar con `crontab -l > respaldo.txt`.
```

### 4 — Cuántos campos

```
metadata:
  materia: "bash"
  tema: "cron_y_tareas_programadas"
  nivel: "basico"
  tags: ["formato"]

tipo: mc
opciones_explicitas: ["5", "3", "4", "6"]
respuesta: "5"

enunciado: "¿Cuántos campos de tiempo tiene una línea de crontab antes del comando?"

explicacion: |
  Minuto, hora, día del mes, mes y día de la semana.
```

### 5 — Orden de los campos

```
metadata:
  materia: "bash"
  tema: "cron_y_tareas_programadas"
  nivel: "basico"
  tags: ["formato"]

tipo: mc
opciones_explicitas: ["Minuto, hora, día del mes, mes, día de la semana", "Hora, minuto, día, mes, año", "Día, mes, año, hora, minuto", "Segundo, minuto, hora, día, mes"]
respuesta: "Minuto, hora, día del mes, mes, día de la semana"

enunciado: "¿En qué orden están los cinco campos?"

explicacion: |
  Es un orden de menor a mayor, salvo el último (día de la semana).
```

### 6 — Todos los días a una hora

```
metadata:
  materia: "bash"
  tema: "cron_y_tareas_programadas"
  nivel: "basico"
  tags: ["ejemplos"]

tipo: mc
opciones_explicitas: ["Todos los días a las 2:30", "Cada 30 minutos", "El día 30 de cada mes a las 2:00", "A las 30:02"]
respuesta: "Todos los días a las 2:30"

enunciado: "¿Qué significa `30 2 * * *`?"

explicacion: |
  El primer campo es el minuto (30) y el segundo la hora (2); los `*` significan "todos".
```

### 7 — Cada 15 minutos

```
metadata:
  materia: "bash"
  tema: "cron_y_tareas_programadas"
  nivel: "basico"
  tags: ["pasos"]

tipo: mc
opciones_explicitas: ["*/15 * * * *", "15 * * * *", "* 15 * * *", "*/15 */15 * * *"]
respuesta: "*/15 * * * *"

enunciado: "¿Cómo se escribe \"cada 15 minutos\"?"

explicacion: |
  `*/15` en el campo de minutos significa "cada 15". `15 * * * *` sería a los 15 minutos de cada hora.
```

### 8 — Lunes a viernes

```
metadata:
  materia: "bash"
  tema: "cron_y_tareas_programadas"
  nivel: "basico"
  tags: ["rangos"]

tipo: mc
opciones_explicitas: ["De lunes a viernes a las 9:00", "Los días 1 a 5 de cada mes a las 9:00", "Cada 9 minutos de lunes a viernes", "Los días 1 y 5 de cada mes"]
respuesta: "De lunes a viernes a las 9:00"

enunciado: "¿Qué significa `0 9 * * 1-5`?"

explicacion: |
  El campo del día de la semana es el quinto, con 1 = lunes y 5 = viernes. El rango `1-5` abarca esos cinco días.
```

### 9 — Primero de mes

```
metadata:
  materia: "bash"
  tema: "cron_y_tareas_programadas"
  nivel: "intermedio"
  tags: ["ejemplos"]

tipo: mc
opciones_explicitas: ["0 0 1 * *", "0 0 * * 1", "1 0 0 * *", "0 1 * * *"]
respuesta: "0 0 1 * *"

enunciado: "¿Cómo se programa para el día 1 de cada mes a medianoche?"

explicacion: |
  Minuto 0, hora 0 y día del mes 1. `0 0 * * 1` sería todos los lunes.
```

### 10 — Domingo

```
metadata:
  materia: "bash"
  tema: "cron_y_tareas_programadas"
  nivel: "intermedio"
  tags: ["dias"]

tipo: mc
opciones_explicitas: ["0 (y también 7)", "1", "6", "8"]
respuesta: "0 (y también 7)"

enunciado: "¿Qué número del campo \"día de la semana\" representa el domingo?"

explicacion: |
  La mayoría de las implementaciones aceptan 0 y 7 como domingo; 1 es lunes y 6 es sábado.
```

### 11 — Cada 4 horas

```
metadata:
  materia: "bash"
  tema: "cron_y_tareas_programadas"
  nivel: "intermedio"
  tags: ["pasos"]

tipo: mc
opciones_explicitas: ["Cada 4 horas, en el minuto 0 (0:00, 4:00, 8:00...)", "Cada 4 minutos", "A las 4:00 todos los días", "Cuatro veces por hora"]
respuesta: "Cada 4 horas, en el minuto 0 (0:00, 4:00, 8:00...)"

enunciado: "¿Qué significa `0 */4 * * *`?"

explicacion: |
  `*/4` en el campo de horas es un paso de 4. El minuto fijo 0 hace que sea en punto.
```

### 12 — Todos los valores

```
metadata:
  materia: "bash"
  tema: "cron_y_tareas_programadas"
  nivel: "basico"
  tags: ["simbolos"]

tipo: completar
respuesta: "*"
respuestas_validas:
  - "*"

enunciado: "En un campo de crontab, el símbolo `___` significa \"todos los valores posibles\"."

explicacion: |
  Por ejemplo, `* * * * *` ejecuta el comando todos los minutos.
```

### 13 — Lista de valores

```
metadata:
  materia: "bash"
  tema: "cron_y_tareas_programadas"
  nivel: "intermedio"
  tags: ["listas"]

tipo: mc
opciones_explicitas: ["A las 8:00 y a las 18:00 todos los días", "De 8 a 18 horas, cada hora", "Cada 8 o 18 minutos", "Solo a las 8:18"]
respuesta: "A las 8:00 y a las 18:00 todos los días"

enunciado: "¿Qué significa `0 8,18 * * *`?"

explicacion: |
  La coma separa valores específicos: horas 8 y 18.
```

### 14 — Al arrancar

```
metadata:
  materia: "bash"
  tema: "cron_y_tareas_programadas"
  nivel: "intermedio"
  tags: ["atajos"]

tipo: mc
opciones_explicitas: ["Una vez cada vez que arranca el sistema", "Todos los días a medianoche", "Cuando se apaga el sistema", "Cuando se edita el crontab"]
respuesta: "Una vez cada vez que arranca el sistema"

enunciado: "¿Cuándo se ejecuta una tarea marcada `@reboot`?"

explicacion: |
  Las abreviaturas `@daily`, `@hourly`, `@weekly`, `@monthly` y `@reboot` reemplazan a los cinco campos.
```

### 15 — No funciona en cron

```
metadata:
  materia: "bash"
  tema: "cron_y_tareas_programadas"
  nivel: "basico"
  tags: ["diagnostico"]

tipo: mc
opciones_explicitas: ["El entorno de cron es mínimo: `PATH` corto y rutas relativas que no se resuelven", "Cron no puede ejecutar scripts de Bash", "El script necesita permisos de administrador", "Cron solo ejecuta comandos de una línea"]
respuesta: "El entorno de cron es mínimo: `PATH` corto y rutas relativas que no se resuelven"

enunciado: "Un script funciona perfecto a mano pero no desde cron. ¿Cuál es la causa más probable?"

explicacion: |
  Cron no carga tu `.bashrc` ni tu carpeta actual. Se soluciona con rutas absolutas y definiendo `PATH`.
```

### 16 — Rutas

```
metadata:
  materia: "bash"
  tema: "cron_y_tareas_programadas"
  nivel: "basico"
  tags: ["rutas"]

tipo: mc
opciones_explicitas: ["0 3 * * * /home/ana/respaldo.sh", "0 3 * * * respaldo.sh", "0 3 * * * ./respaldo.sh", "0 3 * * * ~respaldo.sh"]
respuesta: "0 3 * * * /home/ana/respaldo.sh"

enunciado: "¿Cuál de estas líneas es la más robusta para ejecutar un script con cron?"

explicacion: |
  La ruta absoluta no depende del `PATH` ni de la carpeta actual.
```

### 17 — Registrar la salida

```
metadata:
  materia: "bash"
  tema: "cron_y_tareas_programadas"
  nivel: "intermedio"
  tags: ["log"]

tipo: mc
opciones_explicitas: ["comando >> /var/log/tarea.log 2>&1", "comando > /dev/null", "comando | cron", "comando 2> /dev/null"]
respuesta: "comando >> /var/log/tarea.log 2>&1"

enunciado: "¿Cómo se guarda en un archivo tanto la salida como los errores de una tarea de cron?"

explicacion: |
  Cron no tiene pantalla: la salida se pierde o llega por correo. `>> archivo 2>&1` agrega todo a un registro.
```

### 18 — Porcentajes

```
metadata:
  materia: "bash"
  tema: "cron_y_tareas_programadas"
  nivel: "avanzado"
  tags: ["porcentaje"]

tipo: mc
opciones_explicitas: ["El `%` de `date +%F` tiene un significado especial en crontab y hay que escaparlo como `\\%`", "`tar` no existe en cron", "Falta el shebang", "Los comandos con `$()` están prohibidos"]
respuesta: "El `%` de `date +%F` tiene un significado especial en crontab y hay que escaparlo como `\\%`"

enunciado: "¿Qué problema tiene `0 1 * * * tar czf /respaldo/copia-$(date +%F).tgz /datos` en un crontab?"

explicacion: |
  En crontab, un `%` sin escapar se interpreta como un salto de línea. Se escribe `date +\%F`.
```

### 19 — Probar

```
metadata:
  materia: "bash"
  tema: "cron_y_tareas_programadas"
  nivel: "basico"
  tags: ["probar"]

tipo: mc
opciones_explicitas: ["Programarla para cada minuto, comprobar el registro y después poner el horario real", "Esperar al horario real sin hacer nada", "Reiniciar la computadora", "Usar solo `sudo`"]
respuesta: "Programarla para cada minuto, comprobar el registro y después poner el horario real"

enunciado: "¿Cuál es una forma práctica de probar una tarea nueva de cron?"

explicacion: |
  Con `* * * * *` se ve el resultado enseguida. Después hay que volver al horario definitivo.
```

### 20 — Tareas que se pisan

```
metadata:
  materia: "bash"
  tema: "cron_y_tareas_programadas"
  nivel: "avanzado"
  tags: ["solapamiento"]

tipo: mc
opciones_explicitas: ["Que se ejecuten dos copias a la vez y se pisen", "Que cron la cancele", "Que se ejecute menos veces", "Ninguno"]
respuesta: "Que se ejecuten dos copias a la vez y se pisen"

enunciado: "Una tarea cada 5 minutos a veces tarda 8 minutos. ¿Qué riesgo hay?"

explicacion: |
  Cron lanza la siguiente aunque la anterior no haya terminado. Se evita con un candado (por ejemplo, `flock`).
```

### 21 — Una sola vez

```
metadata:
  materia: "bash"
  tema: "cron_y_tareas_programadas"
  nivel: "intermedio"
  tags: ["at"]

tipo: mc
opciones_explicitas: ["`at`", "`crontab -e`", "`cron -once`", "`sleep`"]
respuesta: "`at`"

enunciado: "Para ejecutar un comando UNA sola vez a una hora determinada, ¿qué se usa?"

explicacion: |
  `at` programa una única ejecución (`echo "comando" | at 18:00`). Cron es para tareas repetitivas.
```

### 22 — Zona horaria

```
metadata:
  materia: "bash"
  tema: "cron_y_tareas_programadas"
  nivel: "intermedio"
  tags: ["zona horaria"]

tipo: mc
opciones_explicitas: ["La zona horaria del sistema", "La del navegador del usuario", "Siempre UTC", "La de Greenwich"]
respuesta: "La zona horaria del sistema"

enunciado: "¿Qué zona horaria usa cron para interpretar los horarios?"

explicacion: |
  Si el servidor está configurado en UTC, "las 3:00" son las 3:00 UTC, no las de tu ciudad.
```

