### 1 — Estructura básica de cmdlet
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["estructura", "cmdlet", "naming"]
tipo: vf
enunciado: "En PowerShell, la convención de nomenclatura para los cmdlets integrales es Verbo-Sustantivo (ej. Get-Process)."
respuesta: verdadero
pasos:
  - "Identificar la estructura estándar de un cmdlet en PowerShell."
  - "Verificar que 'Get' es el verbo y 'Process' es el sustantivo en el ejemplo citado."
  - "Confirmar que esta es la regla oficial de nombrado."
explicacion: "PowerShell sigue estrictamente la convención Verbo-Sustantivo para sus cmdlets, facilitando su descubrimiento y uso."
```

### 2 — Uso de Get-ChildItem
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["filesystem", "get-childitem", "ls"]
tipo: completar
enunciado: "Para listar los archivos y carpetas del directorio actual, se utiliza el cmdlet que actúa como equivalente a 'ls' o 'dir'. Completa el nombre: Get-____"
respuesta: "ChildItem"
respuestas_validas:
  - "ChildItem"
  - "childitem"
  - "Child-Item"
  - "child-item"
pasos:
  - "Recordar el cmdlet que explora el sistema de archivos."
  - "Identificar la parte del sustantivo compuesto."
  - "Escribir la variante aceptada."
explicacion: "Get-ChildItem es el cmdlet estándar para listar contenido del sistema de archivos; 'ChildItem' es la parte del sustantivo."
```

### 3 — Verbo para eliminar contenido
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["remove", "rm", "delete"]
tipo: completar
enunciado: "Si deseas borrar un archivo o carpeta, el verbo apropiado en el cmdlet '____-Item' es el que indica eliminación."
respuesta: "Remove"
respuestas_validas:
  - "Remove"
  - "remove"
pasos:
  - "Identificar la acción de borrar en PowerShell."
  - "Asociar la acción con el cmdlet Remove-Item."
  - "Extraer el verbo."
explicacion: "El cmdlet para eliminar es Remove-Item; el verbo es 'Remove'."
```

### 4 — Verbo para crear directorios
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["mkdir", "new-item"]
tipo: completar
enunciado: "Para crear una nueva carpeta, se usa el cmdlet '____-Item' con el parámetro -ItemType Directory."
respuesta: "New"
respuestas_validas:
  - "New"
  - "new"
pasos:
  - "Analizar el cmdlet para creación de objetos."
  - "Identificar el verbo que indica creación."
  - "Confirmar que es New-Item."
explicacion: "New-Item se utiliza para crear nuevos elementos; el verbo es 'New'."
```

### 5 — Verbo para copiar archivos
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["copy", "cp"]
tipo: completar
enunciado: "El cmdlet que permite duplicar un archivo de una ubicación a otra comienza con el verbo '____' seguido de '-Item'."
respuesta: "Copy"
respuestas_validas:
  - "Copy"
  - "copy"
pasos:
  - "Reconocer la acción de duplicar."
  - "Identificar el cmdlet Copy-Item."
  - "Extraer el verbo."
explicacion: "Copy-Item es el cmdlet para copiar; el verbo es 'Copy'."
```

### 6 — Verbo para mover archivos
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["move", "mv"]
tipo: completar
enunciado: "Para trasladar un archivo sin copiarlo, se usa el cmdlet '____-Item'."
respuesta: "Move"
respuestas_validas:
  - "Move"
  - "move"
pasos:
  - "Identificar la acción de traslado."
  - "Asociar con Move-Item."
  - "Extraer el verbo."
explicacion: "Move-Item traslada archivos; el verbo es 'Move'."
```

### 7 — Verbo para obtener ayuda
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["help", "get-help"]
tipo: completar
enunciado: "Para ver la documentación de un cmdlet, se utiliza '____-Help'."
respuesta: "Get"
respuestas_validas:
  - "Get"
  - "get"
pasos:
  - "Recordar el cmdlet de ayuda."
  - "Identificar el verbo 'Get' en Get-Help."
  - "Validar la sintaxis."
explicacion: "Get-Help proporciona documentación; el verbo es 'Get'."
```

### 8 — Verbo para iniciar procesos
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["start", "process"]
tipo: completar
enunciado: "Para ejecutar una aplicación externa, se usa el cmdlet '____-Process'."
respuesta: "Start"
respuestas_validas:
  - "Start"
  - "start"
pasos:
  - "Identificar la acción de lanzar un proceso."
  - "Reconocer Start-Process."
  - "Extraer el verbo."
explicacion: "Start-Process inicia aplicaciones; el verbo es 'Start'."
```

### 9 — Verbo para detener procesos
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["stop", "process"]
tipo: completar
enunciado: "Para finalizar un proceso en ejecución, se utiliza '____-Process'."
respuesta: "Stop"
respuestas_validas:
  - "Stop"
  - "stop"
pasos:
  - "Identificar la acción de terminar un proceso."
  - "Reconocer Stop-Process."
  - "Extraer el verbo."
explicacion: "Stop-Process finaliza tareas; el verbo es 'Stop'."
```

### 10 — Verbo para reiniciar servicios
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["restart", "service"]
tipo: completar
enunciado: "El cmdlet para reiniciar un servicio de Windows es '____-Service'."
respuesta: "Restart"
respuestas_validas:
  - "Restart"
  - "restart"
pasos:
  - "Identificar la acción de reinicio."
  - "Reconocer Restart-Service."
  - "Extraer el verbo."
explicacion: "Restart-Service reinicia servicios; el verbo es 'Restart'."
```

### 11 — Verbo para suspender procesos
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["suspend", "process"]
tipo: completar
enunciado: "Para pa temporalmente un proceso sin cerrarlo, se usa '____-Process'."
respuesta: "Suspend"
respuestas_validas:
  - "Suspend"
  - "suspend"
pasos:
  - "Identificar la acción de pausa."
  - "Reconocer Suspend-Process."
  - "Extraer el verbo."
explicacion: "Suspend-Process pausa procesos; el verbo es 'Suspend'."
```

### 12 — Verbo para resumir procesos
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["resume", "process"]
tipo: completar
enunciado: "Para reanudar un proceso suspendido, se utiliza '____-Process'."
respuesta: "Resume"
respuestas_validas:
  - "Resume"
  - "resume"
pasos:
  - "Identificar la acción de reanudación."
  - "Reconocer Resume-Process."
  - "Extraer el verbo."
explicacion: "Resume-Process reanuda procesos; el verbo es 'Resume'."
```

### 13 — Verbo para obtener eventos
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["get", "event"]
tipo: completar
enunciado: "Para consultar el registro de eventos del sistema, se usa '____-Event'."
respuesta: "Get"
respuestas_validas:
  - "Get"
  - "get"
pasos:
  - "Identificar la acción de consulta de eventos."
  - "Reconocer Get-WinEvent o Get-Event (aunque Get-WinEvent es más común, la estructura verbo-sustantivo se mantiene)."
  - "Extraer el verbo."
explicacion: "Get-WinEvent es el cmdlet principal; el verbo es 'Get'."
```

### 14 — Verbo para obtener servicio
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["get", "service"]
tipo: completar
enunciado: "Para listar todos los servicios instalados, se usa '____-Service'."
respuesta: "Get"
respuestas_validas:
  - "Get"
  - "get"
pasos:
  - "Identificar la acción de consulta de servicios."
  - "Reconocer Get-Service."
  - "Extraer el verbo."
explicacion: "Get-Service consulta servicios; el verbo es 'Get'."
```

### 15 — Verbo para obtener proceso
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["get", "process"]
tipo: completar
enunciado: "Para ver los procesos activos, se usa '____-Process'."
respuesta: "Get"
respuestas_validas:
  - "Get"
  - "get"
pasos:
  - "Identificar la acción de consulta de procesos."
  - "Reconocer Get-Process."
  - "Extraer el verbo."
explicacion: "Get-Process muestra procesos; el verbo es 'Get'."
```

### 16 — Verbo para obtener variable
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["get", "variable"]
tipo: completar
enunciado: "Para listar todas las variables del entorno actual, se usa '____-Variable'."
respuesta: "Get"
respuestas_validas:
  - "Get"
  - "get"
pasos:
  - "Identificar la acción de consulta de variables."
  - "Reconocer Get-Variable."
  - "Extraer el verbo."
explicacion: "Get-Variable lista variables; el verbo es 'Get'."
```

### 17 — Verbo para obtener alias
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["get", "alias"]
tipo: completar
enunciado: "Para ver los alias definidos, se usa '____-Alias'."
respuesta: "Get"
respuestas_validas:
  - "Get"
  - "get"
pasos:
  - "Identificar la acción de consulta de alias."
  - "Reconocer Get-Alias."
  - "Extraer el verbo."
explicacion: "Get-Alias muestra alias; el verbo es 'Get'."
```

### 18 — Verbo para obtener historia
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["get", "history"]
tipo: completar
enunciado: "Para revisar el historial de comandos ejecutados, se usa '____-History'."
respuesta: "Get"
respuestas_validas:
  - "Get"
  - "get"
pasos:
  - "Identificar la acción de consulta de historial."
  - "Reconocer Get-History."
  - "Extraer el verbo."
explicacion: "Get-History muestra el historial; el verbo es 'Get'."
```

### 19 — Verbo para obtener formato
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["get", "format"]
tipo: completar
enunciado: "Para ver los tipos de formateo disponibles, se usa '____-Format'."
respuesta: "Get"
respuestas_validas:
  - "Get"
  - "get"
pasos:
  - "Identificar la acción de consulta de formatos."
  - "Reconocer Get-Format."
  - "Extraer el verbo."
explicacion: "Get-Format lista formatos; el verbo es 'Get'."
```

### 20 — Verbo para obtener provider
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["get", "provider"]
tipo: completar
enunciado: "Para listar los proveedores de PowerShell activos, se usa '____-Provider'."
respuesta: "Get"
respuestas_validas:
  - "Get"
  - "get"
pasos:
  - "Identificar la acción de consulta de proveedores."
  - "Reconocer Get-Provider."
  - "Extraer el verbo."
explicacion: "Get-Provider lista proveedores; el verbo es 'Get'."
```

### 21 — Verbo para obtener cmdlet
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["get", "cmdlet"]
tipo: completar
enunciado: "Para buscar cmdlets que coincidan con un patrón, se usa '____-Cmdlet'."
respuesta: "Get"
respuestas_validas:
  - "Get"
  - "get"
pasos:
  - "Identificar la acción de búsqueda de cmdlets."
  - "Reconocer Get-Command (más común) o Get-Cmdlet en contextos específicos."
  - "Extraer el verbo."
explicacion: "Get-Command busca cmdlets; el verbo es 'Get'."
```

### 22 — Verbo para obtener item
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["get", "item"]
tipo: completar
enunciado: "Para recuperar el contenido de un archivo o elemento, se usa '____-Item'."
respuesta: "Get"
respuestas_validas:
  - "Get"
  - "get"
pasos:
  - "Identificar la acción de lectura de contenido."
  - "Reconocer Get-Content o Get-Item."
  - "Extraer el verbo."
explicacion: "Get-Item obtiene el elemento; el verbo es 'Get'."
```

### 23 — Verbo para obtener content
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["get", "content"]
tipo: completar
enunciado: "Para leer el texto de un archivo, se usa '____-Content'."
respuesta: "Get"
respuestas_validas:
  - "Get"
  - "get"
pasos:
  - "Identificar la acción de lectura de texto."
  - "Reconocer Get-Content."
  - "Extraer el verbo."
explicacion: "Get-Content lee archivos; el verbo es 'Get'."
```

### 24 — Verbo para obtener eventlog
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["get", "eventlog"]
tipo: completar
enunciado: "Para ver los registros de eventos antiguos, se usa '____-EventLog'."
respuesta: "Get"
respuestas_validas:
  - "Get"
  - "get"
pasos:
  - "Identificar la acción de consulta de logs."
  - "Reconocer Get-EventLog."
  - "Extraer el verbo."
explicacion: "Get-EventLog consulta logs; el verbo es 'Get'."
```

### 25 — Verbo para obtener job
```yaml
metadata:
  materia: "powershell"
  tema: "sintaxis-verbo-sustantivo"
  nivel: "basico"
  tags: ["get", "job"]
tipo: completar
enunciado: "Para listar los trabajos en segundo plano, se usa '____-Job'."
respuesta: "Get"
respuestas_validas:
  - "Get"
  - "get"
pasos:
  - "Identificar la acción de consulta de trabajos."
  - "Reconocer Get-Job."
  - "Extraer el verbo."
explicacion: "Get-Job lista trabajos; el verbo es 'Get'."
```