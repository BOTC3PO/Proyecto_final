### 1 — Obtener procesos por ID
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["get-process", "pid"]
tipo: completar
enunciado: "Para obtener información detallada sobre el proceso con ID 1234, utiliza el comando: Get-Process -Id (______)"
respuesta: "1234"
respuestas_validas:
  - "1234"
  - "1234 "
  - " 1234"
pasos:
  - "Identificar el parámetro correcto para filtrar por PID."
  - "Escribir el valor numérico del PID."
explicacion: "El parámetro -Id de Get-Process acepta un entero o una lista de enteros para filtrar procesos específicos por su Process ID."
```

### 2 — Verificar existencia de servicio
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["get-service", "existencia"]
tipo: vf
enunciado: "El cmdlet Get-Service lanza una excepción terminante si el servicio especificado no existe en el sistema."
respuesta: falso
pasos:
  - "Evaluar el comportamiento de Get-Service con un nombre inexistente."
  - "Recordar que Get-Service devuelve $null o un objeto vacío si no encuentra el servicio, sin lanzar error por defecto."
explicacion: "Get-Service no lanza excepción por defecto; simplemente no devuelve nada o devuelve $null si no se encuentra el servicio. Para forzar error se requiere -ErrorAction Stop."
```

### 3 — Finalizar proceso forzado
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["stop-process", "force"]
tipo: completar
enunciado: "Para forzar el cierre de un proceso que no responde al cierre normal, se utiliza el cmdlet Stop-Process junto con la bandera (______)."
respuesta: "-Force"
respuestas_validas:
  - "-Force"
  - "-force"
  - " -Force"
  - " -force"
pasos:
  - "Identificar el cmdlet para detener procesos."
  - "Recordar el switch necesario para ignorar advertencias de procesos protegidos."
explicacion: "El parámetro -Force de Stop-Process permite detener procesos que normalmente rechazarían la operación por ser procesos del sistema o sin permisos suficientes para un cierre limpio."
```

### 4 — Filtrar por nombre con comodines
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["get-process", "like", "wildcard"]
tipo: mc
enunciado: "¿Qué sintaxis de Get-Process permite listar todos los procesos cuyo nombre comience con 'not'?"
opciones_explicitas:
  - "Get-Process -Name 'not*'"
  - "Get-Process -Name 'not'"
  - "Get-Process -Name '*.not'"
  - "Get-Process -Name 'not.'
respuesta: "Get-Process -Name 'not*'"
pasos:
  - "Analizar el uso de comodines en PowerShell."
  - "Seleccionar la sintaxis que utiliza '*' al final para coincidencia inicial."
explicacion: "El asterisco (*) es el comodín en PowerShell que coincide con cero o más caracteres. 'not*' coincide con 'notepad', 'notetaking', etc."
```

### 5 — Obtener hijos de un proceso
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["get-process", "children", "property"]
tipo: completar
enunciado: "Para ver los procesos hijos de un proceso padre específico, se debe acceder a la propiedad (______) del objeto de proceso."
respuesta: "ChildProcesses"
respuestas_validas:
  - "ChildProcesses"
  - "childprocesses"
pasos:
  - "Identificar la propiedad que expone la jerarquía de procesos."
  - "Escribir el nombre exacto de la propiedad en PowerShell."
explicacion: "El objeto System.Diagnostics.Process expone la propiedad ChildProcesses, que devuelve una colección de objetos Process hijos."
```

### 6 — Convertir tiempo de CPU a formato legible
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["get-process", "totalcpu", "formatting"]
tipo: mc
enunciado: "La propiedad TotalProcessorTime de Get-Process devuelve un objeto TimeSpan. ¿Cuál es la forma más directa de obtener su valor en segundos?"
opciones_explicitas:
  - "(Get-Process notepad).TotalProcessorTime.TotalSeconds"
  - "(Get-Process notepad).TotalProcessorTime.Seconds"
  - "(Get-Process notepad).TotalProcessorTime.TotalMilliseconds / 1000"
  - "Get-Process notepad | Select-Object TotalProcessorTime"
respuesta: "(Get-Process notepad).TotalProcessorTime.TotalSeconds"
pasos:
  - "Entender que TotalProcessorTime es un TimeSpan."
  - "Seleccionar la propiedad que representa el total en la unidad deseada sin redondeo."
explicacion: "Seconds devuelve solo la parte entera de los segundos. TotalSeconds devuelve el valor decimal completo en segundos."
```

### 7 — Detener proceso por nombre (varios)
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["stop-process", "multiple", "array"]
tipo: completar
enunciado: "Para detener múltiples procesos llamados 'chrome' simultáneamente, se puede pasar un array: Stop-Process -Name (______)."
respuesta: "chrome"
respuestas_validas:
  - "chrome"
  - " 'chrome' "
  - "@('chrome')"
pasos:
  - "Reconocer que -Name acepta una cadena o array de cadenas."
  - "Escribir el nombre del proceso como argumento."
explicacion: "Stop-Process acepta el parámetro -Name con un array de nombres. Si se pasa una sola cadena, detiene todos los procesos con ese nombre."
```

### 8 — Verificar si un proceso está ejecutándose
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["get-process", "test", "boolean"]
tipo: vf
enunciado: "El cmdlet Test-Process existe en PowerShell nativo para verificar si un proceso está activo sin necesidad de Get-Process."
respuesta: falso
pasos:
  - "Verificar la existencia de Test-Process en el catálogo de cmdlets estándar."
  - "Confirmar que la práctica común es usar Get-Process y verificar si el resultado es $null."
explicacion: "No existe un cmdlet Test-Process nativo. La forma estándar es: $p = Get-Process -Name 'app' -ErrorAction SilentlyContinue; if ($p) { ... }"
```

### 9 — Obtener memoria virtual máxima
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["get-process", "workingset", "property"]
tipo: completar
enunciado: "Para obtener el tamaño actual del conjunto de trabajo (memoria física usada) de un proceso, se lee la propiedad (______)."
respuesta: "WorkingSet"
respuestas_validas:
  - "WorkingSet"
  - "workingset"
  - "WorkingSet64"
  - "workingset64"
pasos:
  - "Identificar la propiedad que representa la memoria física asignada."
  - "Escribir el nombre de la propiedad."
explicacion: "WorkingSet devuelve la cantidad de memoria física que el proceso ha asignado. WorkingSet64 es la versión de 64 bits del mismo valor."
```

### 10 — Filtrar procesos por estado
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["get-process", "where-object", "status"]
tipo: mc
enunciado: "¿Cuál es la sintaxis correcta para filtrar procesos que están en estado 'Suspended'?"
opciones_explicitas:
  - "Get-Process | Where-Object { $_.Responding -eq $false }"
  - "Get-Process | Where-Object { $_.Status -eq 'Suspended' }"
  - "Get-Process -Status 'Suspended'"
  - "Get-Process | Select-Object Status"
respuesta: "Get-Process | Where-Object { $_.Status -eq 'Suspended' }"
pasos:
  - "Saber que Get-Process no tiene un parámetro -Status directo para filtrado preciso."
  - "Usar Where-Object para inspeccionar la propiedad Status del objeto."
explicacion: "La propiedad Status puede ser 'Running', 'Suspended', etc. Se usa Where-Object para comparar este valor."
```

### 11 — Obtener información de inicio
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["get-process", "starttime", "datetime"]
tipo: completar
enunciado: "Para ver la hora exacta en que se inició un proceso, se accede a la propiedad (______)."
respuesta: "StartTime"
respuestas_validas:
  - "StartTime"
  - "starttime"
pasos:
  - "Identificar la propiedad de tiempo de inicio."
  - "Escribir el nombre exacto."
explicacion: "StartTime es una propiedad DateTime que indica cuándo se inició el proceso. Es de solo lectura."
```

### 12 — Finalizar proceso por pipeline
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["stop-process", "pipeline", "input"]
tipo: mc
enunciado: "¿Cómo se pasa un objeto de proceso desde Get-Process a Stop-Process mediante el pipeline?"
opciones_explicitas:
  - "Get-Process notepad | Stop-Process"
  - "Get-Process notepad | Stop-Process -InputObject $_"
  - "Stop-Process -ProcessId (Get-Process notepad)"
  - "Get-Process notepad; Stop-Process"
respuesta: "Get-Process notepad | Stop-Process"
pasos:
  - "Entender que Stop-Process acepta objetos Process por pipeline."
  - "Seleccionar la sintaxis de pipeline directa."
explicacion: "Stop-Process implementa InputObject por pipeline. Al pasar el objeto Process directamente, se detiene ese proceso específico sin necesidad de especificar ID o Nombre."
```

### 13 — Verificar respuesta del proceso
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["get-process", "responding", "boolean"]
tipo: vf
enunciado: "La propiedad Responding de un objeto Process devuelve $true si el proceso está respondiendo a mensajes de Windows y $false si está congelado."
respuesta: verdadero
pasos:
  - "Evaluar el propósito de la propiedad Responding."
  - "Confirmar que indica el estado de respuesta de la UI del proceso."
explicacion: "Responding es una propiedad booleana que indica si el proceso está respondiendo a los mensajes de la cola de Windows. Si es $false, el proceso está probablemente congelado."
```

### 14 — Obtener prioridad de proceso
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["get-process", "priorityclass", "enum"]
tipo: completar
enunciado: "Para consultar la clase de prioridad de un proceso, se lee la propiedad (______)."
respuesta: "PriorityClass"
respuestas_validas:
  - "PriorityClass"
  - "priorityclass"
  - "Priority_Class"
  - "priority_class"
pasos:
  - "Identificar la propiedad que define la prioridad de planificación."
  - "Escribir el nombre de la propiedad."
explicacion: "PriorityClass devuelve un valor de la enumeración System.Diagnostics.ProcessPriorityClass (ej. Normal, High, Idle)."
```

### 15 — Cambiar prioridad de proceso
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["set-processpriority", "priority"]
tipo: mc
enunciado: "¿Qué cmdlet se utiliza para cambiar dinámicamente la prioridad de un proceso en ejecución?"
opciones_explicitas:
  - "Set-ProcessPriority"
  - "Change-ProcessPriority"
  - "Update-ProcessPriority"
  - "Modify-ProcessPriority"
respuesta: "Set-ProcessPriority"
pasos:
  - "Conocer los cmdlets de gestión de procesos."
  - "Identificar el cmdlet específico para modificar prioridades."
explicacion: "Set-ProcessPriority es el cmdlet estándar para cambiar la prioridad (Idle, Normal, High, RealTime, AboveNormal, BelowNormal) de un proceso."
```

### 16 — Obtener línea de comandos
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["get-process", "commandline", "wmi"]
tipo: completar
enunciado: "Get-Process no expone directamente la línea de comandos completa en todos los sistemas. Para obtenerla, a menudo se usa WMI con la consulta: Get-WmiObject Win32_Process | Where-Object (______)."
respuesta: "Name -eq 'notepad'"
respuestas_validas:
  - "Name -eq 'notepad'"
  - "Name -eq \"notepad\""
  - "Name -like 'notepad*'"
pasos:
  - "Reconocer la limitación de Get-Process en algunas versiones/entornos."
  - "Usar WMI Win32_Process para obtener la propiedad CommandLine."
explicacion: "La propiedad CommandLine de Win32_Process contiene el comando completo usado para iniciar el proceso. Se filtra por Name para encontrar el proceso específico."
```

### 17 — Contar procesos de un tipo
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["get-process", "measure", "count"]
tipo: mc
enunciado: "¿Cuál es la forma más eficiente de contar cuántos procesos 'chrome' están corriendo?"
opciones_explicitas:
  - "(Get-Process chrome).Count"
  - "Get-Process chrome | Measure-Object"
  - "Get-Process -Name chrome | Select-Object Count"
  - "Get-Process chrome | Where-Object Count"
respuesta: "(Get-Process chrome).Count"
pasos:
  - "Evaluar la eficiencia de acceso directo a la propiedad Count vs pipeline."
  - "Seleccionar la opción que evita el pipeline innecesario."
explicacion: "Get-Process devuelve una colección. Acceder directamente a .Count es más rápido que usar Measure-Object en el pipeline, aunque ambos funcionan."
```

### 18 — Finalizar proceso con mensaje
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["stop-process", "erroraction", "try"]
tipo: vf
enunciado: "Stop-Process permite especificar un mensaje de error personalizado que se mostrará si el proceso no puede ser detenido."
respuesta: falso
pasos:
  - "Analizar los parámetros de Stop-Process."
  - "Verificar si existe un parámetro para mensajes personalizados de error."
explicacion: "Stop-Process no tiene un parámetro para mensajes de error personalizados. Si falla, lanza un error estándar de .NET. Para manejar errores se usa try/catch o $ErrorActionPreference."
```

### 19 — Obtener threads de un proceso
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["get-process", "threads", "property"]
tipo: completar
enunciado: "Para ver la lista de hilos asociados a un proceso, se accede a la propiedad (______)."
respuesta: "Threads"
respuestas_validas:
  - "Threads"
  - "threads"
  - "Threads.Count"
  - "threads.count"
pasos:
  - "Identificar la propiedad que expone los hilos."
  - "Escribir el nombre de la propiedad."
explicacion: "La propiedad Threads devuelve una colección de objetos ProcessThread, permitiendo inspeccionar el estado y el tiempo de CPU de cada hilo."
```

### 20 — Filtrar por tiempo de actividad
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["get-process", "starttime", "datetime", "filter"]
tipo: mc
enunciado: "¿Cómo se filtran los procesos que se iniciaron hace más de 1 hora?"
opciones_explicitas:
  - "Get-Process | Where-Object { $_.StartTime -lt (Get-Date).AddHours(-1) }"
  - "Get-Process | Where-Object { $_.StartTime -gt (Get-Date).AddHours(-1) }"
  - "Get-Process -StartTime (Get-Date).AddHours(-1)"
  - "Get-Process | Select-Object StartTime"
respuesta: "Get-Process | Where-Object { $_.StartTime -lt (Get-Date).AddHours(-1) }"
pasos:
  - "Calcular la fecha límite (hace 1 hora)."
  - "Filtrar procesos cuya StartTime sea anterior a esa fecha."
explicacion: "Se usa Where-Object para comparar la propiedad StartTime (DateTime) con una fecha calculada dinámicamente usando Get-Date."
```

### 21 — Obtener nombre del usuario propietario
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["get-process", "owner", "wmi"]
tipo: completar
enunciado: "Get-Process no muestra el usuario propietario directamente. Para obtenerlo, se usa WMI: Get-WmiObject Win32_Process | ForEach-Object (______)."
respuesta: "$_.GetOwner().User"
respuestas_validas:
  - "$_.GetOwner().User"
  - "$_.getowner().user"
  - "GetOwner().User"
  - "getowner().user"
pasos:
  - "Identificar el método WMI para obtener el propietario."
  - "Escribir la llamada al método y la propiedad del resultado."
explicacion: "El método GetOwner() de Win32_Process devuelve un objeto con propiedades User, Domain y InstallDate. Se accede a .User para el nombre de usuario."
```

### 22 — Finalizar proceso por ID múltiple
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["stop-process", "id", "array"]
tipo: mc
enunciado: "¿Cuál es la sintaxis correcta para detener los procesos con IDs 100, 200 y 300?"
opciones_explicitas:
  - "Stop-Process -Id 100, 200, 300"
  - "Stop-Process -Id 100; Stop-Process -Id 200; Stop-Process -Id 300"
  - "Stop-Process -Id @100, 200, 300"
  - "Stop-Process -Id 100 200 300"
respuesta: "Stop-Process -Id 100, 200, 300"
pasos:
  - "Reconocer que -Id acepta una lista separada por comas."
  - "Seleccionar la sintaxis de lista directa."
explicacion: "El parámetro -Id acepta una lista de enteros separados por comas. PowerShell los procesa como un array de IDs."
```

### 23 — Verificar si un proceso es de 32 o 64 bits
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["get-process", "architecture", "property"]
tipo: completar
enunciado: "Para determinar si un proceso es de 64 bits, se inspecciona la propiedad (______)."
respuesta: "Architecture"
respuestas_validas:
  - "Architecture"
  - "architecture"
  - "ProcessorArchitecture"
  - "processorarchitecture"
pasos:
  - "Identificar la propiedad que indica la arquitectura del proceso."
  - "Escribir el nombre de la propiedad."
explicacion: "Architecture devuelve un valor de la enumeración System.Diagnostics.ProcessArchitecture (X86, X64, Arm, Arm64)."
```

### 24 — Obtener path del ejecutable
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["get-process", "mainmodule", "filename"]
tipo: mc
enunciado: "¿Cómo se obtiene la ruta completa del ejecutable principal de un proceso?"
opciones_explicitas:
  - "(Get-Process notepad).MainModule.FileName"
  - "(Get-Process notepad).Path"
  - "(Get-Process notepad).Executable"
  - "(Get-Process notepad).Location"
respuesta: "(Get-Process notepad).MainModule.FileName"
pasos:
  - "Saber que la información del módulo principal está en MainModule."
  - "Seleccionar la propiedad FileName de MainModule."
explicacion: "MainModule es un objeto ProcessModule. Su propiedad FileName contiene la ruta completa del archivo ejecutable asociado al proceso."
```

### 25 — Detener proceso por pipeline con confirmación
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-procesos-powershell"
  nivel: "intermedio"
  tags: ["stop-process", "confirm", "whatif"]
tipo: vf
enunciado: "Si se usa Stop-Process -WhatIf, el proceso se detendrá pero se mostrará un mensaje de advertencia en lugar de ejecutarse realmente."
respuesta: falso
pasos:
  - "Entender el propósito del parámetro -WhatIf."
  - "Confirmar que -WhatIF simula la acción sin realizar cambios."
explicacion: "-WhatIf muestra lo que sucedería si se ejecutara el comando, pero NO realiza la acción. El proceso NO se detiene."
```