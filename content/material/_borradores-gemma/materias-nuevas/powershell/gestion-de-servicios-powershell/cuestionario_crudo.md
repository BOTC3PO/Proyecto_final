### 1 — Verificar estado de servicio con Get-Service
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["get-service", "estado", "filtering"]
respuesta: verdadero
tipo: vf
enunciado: "Al ejecutar `Get-Service -Name Spooler`, si el servicio está en ejecución, el valor de la propiedad `Status` es literalmente la cadena `"Running"`."
pasos:
  - "Cargar el módulo de servicios del sistema."
  - "Consultar el estado actual del servicio 'Spooler'."
  - "Verificar el tipo y valor de la propiedad Status en el objeto retornado."
explicacion: "En PowerShell, la propiedad `Status` de un objeto `ServiceController` devuelve un valor del tipo `System.ServiceProcess.ServiceControllerStatus`. Al convertirlo a string o inspeccionarlo, los valores permitidos son 'Running', 'Stopped', 'Paused', etc. Por lo tanto, es verdadero que devuelve la cadena 'Running' cuando está activo."
```

### 2 — Iniciar servicio con Start-Service y validación
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["start-service", "validacion", "error"]
respuesta: "Start-Service"
tipo: completar
respuestas_validas:
  - "Start-Service"
  - "Start-Service"
enunciado: "Completa el comando para iniciar el servicio 'MyService' de forma segura, verificando primero que no esté ya en ejecución: `if ((Get-Service -Name 'MyService').Status -ne 'Running') { ____ -Name 'MyService' }`"
pasos:
  - "Identificar la necesidad de iniciar un servicio condicionalmente."
  - "Recordar el cmdlet estándar para iniciar un servicio en PowerShell."
  - "Insertar el cmdlet correcto en el bloque de condición."
explicacion: "El cmdlet `Start-Service` es el encargado de cambiar el estado de un servicio a 'Running'. Es la contraparte directa de `Stop-Service`."
```

### 3 — Detener servicio con Stop-Service
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["stop-service", "completado"]
respuesta: "Stopped"
tipo: completar
respuestas_validas:
  - "Stopped"
  - "stopped"
enunciado: "Después de ejecutar `Stop-Service -Name 'Wuauserv'`, ¿cuál es el valor de la propiedad `Status` del objeto retornado si la operación fue exitosa?"
pasos:
  - "Ejecutar el cmdlet de detención."
  - "Observar el estado final del objeto de servicio."
  - "Identificar el literal que representa el estado inactivo."
explicacion: "Cuando un servicio se detiene correctamente, su propiedad `Status` cambia a 'Stopped'."
```

### 4 — Pausar servicio con Suspend-Service
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["suspend-service", "estado-pausa"]
respuesta: "Paused"
tipo: completar
respuestas_validas:
  - "Paused"
  - "paused"
enunciado: "Si ejecutas `Suspend-Service -Name 'PrintQueue'`, ¿cuál es el nuevo estado del servicio?"
pasos:
  - "Aplicar el cmdlet de suspensión."
  - "Determinar el estado resultante."
explicacion: "El cmdlet `Suspend-Service` pone el servicio en estado 'Paused', permitiendo reanudarlo con `Resume-Service`."
```

### 5 — Reanudar servicio con Resume-Service
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["resume-service", "recuperacion"]
respuesta: "Running"
tipo: completar
respuestas_validas:
  - "Running"
  - "running"
enunciado: "Un servicio estaba pausado. Tras ejecutar `Resume-Service -Name 'PrintQueue'`, ¿cuál es su estado final?"
pasos:
  - "Identificar la acción de reanudación."
  - "Conocer el estado objetivo de un servicio que se está ejecutando activamente."
explicacion: "La reanudación de un servicio pausado lo devuelve a su estado activo, que es 'Running'."
```

### 6 — Obtener servicios dependientes
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["dependencias", "propiedad-dependents"]
respuesta: "DependentServices"
tipo: completar
respuestas_validas:
  - "DependentServices"
  - "dependentServices"
enunciado: "Para listar los servicios que dependen de 'Spooler', usas `Get-Service -Name Spooler | Select-Object ____`."
pasos:
  - "Seleccionar el objeto de servicio padre."
  - "Identificar la propiedad que contiene la lista de hijos dependientes."
explicacion: "La propiedad `DependentServices` contiene una colección de objetos `ServiceController` que dependen del servicio actual."
```

### 7 — Obtener servicios que requieren un servicio específico
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["dependencias", "propiedad-servicesdependedon"]
respuesta: "ServicesDependedOn"
tipo: completar
respuestas_validas:
  - "ServicesDependedOn"
  - "servicesDependedOn"
enunciado: "Para ver qué servicios necesita 'Winmgmt' para funcionar, inspeccionas la propiedad ____ del objeto retornado por `Get-Service`."
pasos:
  - "Analizar las relaciones de dependencia inversa."
  - "Recordar el nombre de la propiedad que indica dependencias requeridas."
explicacion: "La propiedad `ServicesDependedOn` lista los servicios que deben estar activos para que este servicio funcione correctamente."
```

### 8 — Filtrar servicios por nombre con Wildcard
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["get-service", "wildcard", "filtro"]
respuesta: "Get-Service -Name '*print*'"
tipo: completar
respuestas_validas:
  - "Get-Service -Name '*print*'"
  - "Get-Service -Name *print*"
enunciado: "Completa el comando para obtener todos los servicios cuyo nombre contenga la palabra 'print'."
pasos:
  - "Usar el cmdlet Get-Service."
  - "Aplicar el parámetro Name con comodines."
explicacion: "Los comodines `*` permiten buscar patrones dentro del nombre del servicio."
```

### 9 — Filtrar servicios por estado con Where-Object
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["where-object", "filtrado", "estado"]
respuesta: "Where-Object { $_.Status -eq 'Stopped' }"
tipo: completar
respuestas_validas:
  - "Where-Object { $_.Status -eq 'Stopped' }"
  - "Where-Object {$_.Status -eq 'Stopped'}"
enunciado: "Completa la tubería: `Get-Service | ____` para obtener solo los servicios detenidos."
pasos:
  - "Necesidad de filtrar una colección de objetos."
  - "Usar Where-Object con una expresión de comparación."
explicacion: "Se utiliza `Where-Object` para filtrar los objetos que pasan por la tubería basándose en su propiedad `Status`."
```

### 10 — Verificar existencia de servicio antes de modificar
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["validacion", "existencia", "try-catch"]
respuesta: "try-catch"
tipo: completar
respuestas_validas:
  - "try-catch"
  - "try catch"
enunciado: "Para manejar grácilmente el error si un servicio no existe al intentar detenerlo, envuelve la lógica en un bloque ____."
pasos:
  - "Identificar la necesidad de manejo de errores."
  - "Seleccionar la estructura de control de errores de PowerShell."
explicacion: "El bloque `try-catch` es el estándar para manejar errores no terminales o excepciones en scripts PowerShell."
```

### 11 — Obtener descripción detallada del servicio
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["get-service", "propiedad-description"]
respuesta: "Description"
tipo: completar
respuestas_validas:
  - "Description"
  - "description"
enunciado: "Para ver la descripción textual de un servicio, accedes a la propiedad ____ del objeto retornado por `Get-Service`."
pasos:
  - "Consultar metadatos del servicio."
  - "Identificar la propiedad de texto libre."
explicacion: "La propiedad `Description` contiene el texto explicativo del propósito del servicio."
```

### 12 — Obtener nombre del ejecutable del servicio
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["get-service", "propiedad-binarypathname"]
respuesta: "BinaryPathName"
tipo: completar
respuestas_validas:
  - "BinaryPathName"
  - "binaryPathName"
enunciado: "Para saber qué ejecutable lanza un servicio, inspeccionas la propiedad ____."
pasos:
  - "Buscar la ruta del binario."
  - "Recordar el nombre de la propiedad específica."
explicacion: "La propiedad `BinaryPathName` indica la ruta completa al archivo ejecutable que implementa el servicio."
```

### 13 — Verificar si un servicio es de inicio automático
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["get-service", "propiedad-starttype"]
respuesta: "StartType"
tipo: completar
respuestas_validas:
  - "StartType"
  - "startType"
enunciado: "Para verificar si un servicio se inicia automáticamente al arrancar el SO, lees la propiedad ____."
pasos:
  - "Analizar la configuración de inicio."
  - "Identificar la propiedad que define el modo de inicio."
explicacion: "La propiedad `StartType` puede ser 'Automatic', 'Manual' o 'Disabled'."
```

### 14 — Cambiar tipo de inicio con Set-Service
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["set-service", "starttype", "modificacion"]
respuesta: "Automatic"
tipo: completar
respuestas_validas:
  - "Automatic"
  - "automatic"
enunciado: "Completa el comando para configurar el servicio 'MySvc' para que inicie automáticamente: `Set-Service -Name 'MySvc' -StartupType ____`."
pasos:
  - "Usar Set-Service."
  - "Especificar el valor del parámetro StartupType."
explicacion: "El valor 'Automatic' configura el servicio para que se inicie al arrancar el sistema."
```

### 15 — Deshabilitar un servicio permanentemente
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["set-service", "disabled"]
respuesta: "Disabled"
tipo: completar
respuestas_validas:
  - "Disabled"
  - "disabled"
enunciado: "Para evitar que un servicio se inicie nunca, se establece su `StartupType` a ____."
pasos:
  - "Determinar el estado de bloqueo de inicio."
  - "Identificar el literal correspondiente."
explicacion: "El valor 'Disabled' impide que el servicio se inicie, incluso manualmente, sin permisos especiales o cambios en registro."
```

### 16 — Obtener servicios de un grupo específico (Windows 10/11)
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["get-service", "grupo", "api"]
respuesta: "Get-Service -Name '*' | Where-Object { $_.DependentServices -eq $null -and $_.ServicesDependedOn -ne $null }"
tipo: completar
respuestas_validas:
  - "Get-Service -Name '*' | Where-Object { $_.DependentServices -eq $null -and $_.ServicesDependedOn -ne $null }"
enunciado: "Completa el filtro para encontrar servicios que NO tienen dependientes pero SÍ dependen de otros (servicios base)."
pasos:
  - "Filtrar servicios sin hijos."
  - "Filtrar servicios con padres."
explicacion: "Esta combinación de condiciones ayuda a identificar servicios fundamentales o de infraestructura."
```

### 17 — Detener servicios con parámetro Force
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["stop-service", "force", "dependencias"]
respuesta: "Force"
tipo: completar
respuestas_validas:
  - "Force"
  - "force"
enunciado: "Para forzar la detención de un servicio aunque tenga dependientes activos, usas el parámetro ____ de `Stop-Service`."
pasos:
  - "Identificar la necesidad de ignorar advertencias de dependencia."
  - "Recordar el parámetro de fuerza bruta."
explicacion: "El parámetro `-Force` ignora las advertencias de que otros servicios podrían fallar al detenerse este."
```

### 18 — Obtener todos los servicios del sistema
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["get-service", "sin-filtro"]
respuesta: "Get-Service"
tipo: completar
respuestas_validas:
  - "Get-Service"
  - "Get-Service"
enunciado: "Completa el comando para listar TODOS los servicios instalados en el equipo local."
pasos:
  - "Usar el cmdlet principal de consulta de servicios."
  - "No especificar parámetros de nombre o máquina."
explicacion: "Sin parámetros, `Get-Service` devuelve todos los servicios del equipo local."
```

### 19 — Consultar servicios en máquina remota
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["get-service", "computername", "remoto"]
respuesta: "ComputerName"
tipo: completar
respuestas_validas:
  - "ComputerName"
  - "computername"
enunciado: "Para consultar servicios en 'Server01', usas el parámetro ____ de `Get-Service`."
pasos:
  - "Especificar el destino remoto."
  - "Recordar el nombre del parámetro de dirección."
explicacion: "El parámetro `-ComputerName` permite ejecutar el cmdlet en un equipo remoto."
```

### 20 — Verificar si un servicio está pausado (VF)
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["get-service", "estado-pausado", "verificacion"]
respuesta: "verdadero"
tipo: vf
enunciado: "Es posible que un servicio tenga el estado 'Paused' y aún así responder a las solicitudes de control."
pasos:
  - "Analizar el comportamiento del estado Pausado."
  - "Determinar si la respuesta a controles está habilitada."
explicacion: "Correcto. Los servicios pausados continúan respondiendo a solicitudes de control, pero no ejecutan su código principal hasta que se reanudan."
```

### 21 — Obtener servicios que fallaron en el último inicio
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["get-service", "diagnostico", "error"]
respuesta: "Get-Service | Where-Object { $_.Status -eq 'Stopped' -and $_.CanStop -eq $false }"
tipo: completar
respuestas_validas:
  - "Get-Service | Where-Object { $_.Status -eq 'Stopped' -and $_.CanStop -eq $false }"
enunciado: "Completa el comando para encontrar servicios detenidos que NO pueden ser detenidos programáticamente (a menudo indicadores de error o servicios de sistema crítico)."
pasos:
  - "Filtrar por estado detenido."
  - "Filtrar por incapacidad de detenerse."
explicacion: "Los servicios con `CanStop` falso son a menudo críticos o están en un estado corrupto que impide la detención normal."
```

### 22 — Obtener servicios con nombre de cuenta de inicio
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["get-service", "propiedad-startname"]
respuesta: "StartName"
tipo: completar
respuestas_validas:
  - "StartName"
  - "startName"
enunciado: "Para ver bajo qué cuenta de usuario se ejecuta un servicio, lees la propiedad ____."
pasos:
  - "Buscar la identidad de ejecución."
  - "Identificar la propiedad correspondiente."
explicacion: "La propiedad `StartName` indica la cuenta (ej. 'LocalSystem', 'NT AUTHORITY\NetworkService') con la que se inicia el servicio."
```

### 23 — Cambiar la cuenta de inicio de un servicio (Completo)
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["set-service", "account", "credenciales"]
respuesta: "Set-Service -Name 'Svc' -StartupType Automatic"
tipo: completar
respuestas_validas:
  - "Set-Service -Name 'Svc' -StartupType Automatic"
enunciado: "Completa el comando para configurar el inicio automático de 'Svc'. Nota: Cambiar la cuenta requiere `sc.exe` o registro, no `Set-Service` directamente para la cuenta, pero sí para el tipo de inicio."
pasos:
  - "Usar Set-Service para el tipo de inicio."
  - "Recordar que Set-Service NO cambia la cuenta directamente en versiones antiguas, pero sí el StartupType."
explicacion: "Aunque `Set-Service` es limitado para cuentas, es el cmdlet estándar para `StartupType`. Para cuentas, se usa `sc.exe` o WMI/Win32_Service."
```

### 24 - Obtener servicios con nombre de cuenta de inicio (VF)
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["get-service", "startname", "verdadero"]
respuesta: "verdadero"
tipo: vf
enunciado: "La propiedad `StartName` de un objeto `ServiceController` devuelve el nombre de la cuenta de usuario con la que se ejecuta el servicio."
pasos:
  - "Verificar la documentación de la propiedad StartName."
  - "Confirmar su propósito."
explicacion: "Correcto. `StartName` devuelve la cuenta de inicio."
```

### 25 - Listar servicios ordenados por nombre (MC)
```yaml
metadata:
  materia: "powershell"
  tema: "gestion-de-servicios-powershell"
  nivel: "intermedio"
  tags: ["get-service", "sort-object", "ordenamiento"]
opciones_explicitas:
  - "Sort-Object -Property Name"
  - "Sort-Object -Property Status"
  - "Group-Object -Property Name"
  - "Select-Object -First 10"
respuesta: "Sort-Object -Property Name"
tipo: mc
enunciado: "¿Qué cmdlet se usa en la tubería para ordenar la lista de servicios alfabéticamente por su nombre?"
pasos:
  - "Identificar la necesidad de ordenamiento."
  - "Seleccionar el cmdlet de ordenamiento correcto."
explicacion: "`Sort-Object -Property Name` ordena los objetos por la propiedad Name."
```