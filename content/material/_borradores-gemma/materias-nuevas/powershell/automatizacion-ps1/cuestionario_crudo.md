### 1 — Validación de tipo en parámetros
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["parametros", "tipado", "validacion"]
respuesta: verdadero
tipo: vf
enunciado:
  Si defines un parámetro en una función con `[int]$Valor`, PowerShell lanzará una excepción de conversión si se le pasa una cadena que no representa un número válido, a menos que se maneje con `try/catch`.
pasos:
  - "Analizar el comportamiento del casting implícito en PowerShell."
  - "Verificar que los tipos fuertes validan la entrada en tiempo de ejecución."
explicacion:
  PowerShell intenta convertir automáticamente la entrada al tipo especificado. Si la conversión falla (ej. 'abc' a int), se genera un error de ejecución (InvalidCast) a menos que se intercepte.
```

### 2 — Operador de propagación de errores
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["errores", "terminating", "flow-control"]
respuesta: $ErrorActionPreference = 'Stop'
tipo: completar
enunciado:
  Para asegurar que un error de ejecución (terminating error) detenga la secuencia del script inmediatamente y salte al bloque `catch`, ¿qué variable global debes asignar o qué parámetro usar en el cmdlet?
pasos:
  - "Identificar la variable de preferencia que controla el comportamiento de errores."
  - "Distinguir entre 'Continue', 'SilentlyContinue' y 'Stop'."
respuestas_validas:
  - '$ErrorActionPreference = Stop'
  - '$ErrorActionPreference = Stop'
  - '$ErrorActionPreference = ''Stop'''
  - 'Stop'
explicacion:
  La variable `$ErrorActionPreference` controla cómo PowerShell responde a errores. 'Stop' convierte el error en una excepción que detiene el flujo, permitiendo su captura con `try/catch`.
```

### 3 — Manejo de objetos nulos en pipelines
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["null", "pipeline", "null-condition"]
respuesta: $objeto?.Propiedad
tipo: completar
enunciado:
  Dado un objeto `$objeto` que puede ser `$null`, ¿qué sintaxis segura (introducida en PS 5.0) permite acceder a `$objeto.Propiedad` sin lanzar un `NullReferenceException` si el objeto es nulo?
pasos:
  - "Recordar la sintaxis de acceso condicional seguro."
  - "Identificar el operador que combina el punto y el signo de pregunta."
respuestas_validas:
  - '$objeto?.Propiedad'
  - '$objeto ? . Propiedad'
  - '$objeto?.Propiedad'
explicacion:
  El operador de propagación nula (`?.`) evalúa la parte izquierda; si es `$null`, devuelve `$null` sin intentar acceder a la propiedad, evitando la excepción.
```

### 4 — Cmdlet para búsqueda de texto en archivos
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["file-io", "search", "select-string"]
respuesta: Select-String
tipo: completar
enunciado:
  ¿Qué cmdlet nativo de PowerShell se utiliza equivalentemente a `grep` para buscar patrones de texto dentro de archivos o cadenas?
pasos:
  - "Identificar el cmdlet estándar para búsqueda de cadenas."
  - "Distinguirlo de `Get-Content` que solo lee."
respuestas_validas:
  - 'Select-String'
  - 'select-string'
explicacion:
  `Select-String` busca patrones en cadenas y archivos. Es el equivalente directo a `grep` en el ecosistema de PowerShell.
```

### 5 — Tipo de dato para colecciones inmutables
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["tipos", "array", "list", "coleccion"]
respuesta: verdadero
tipo: vf
enunciado:
  En PowerShell, un array creado con `@(1, 2, 3)` es un objeto `System.Object[]` que tiene una longitud fija una vez inicializado; no se puede usar `.Add()` directamente sobre él.
pasos:
  - "Verificar la naturaleza de los arrays en .NET/PowerShell."
  - "Confirmar que `.Add()` es un método de `List<T>`, no de `Array`."
explicacion:
  Los arrays estándar (`System.Array`) son de tamaño fijo. Para agregar elementos dinámicamente, se debe usar `System.Collections.Generic.List[object]` o el operador de expansión `+=` (que crea una nueva copia, no añade in-place).
```

### 6 — Parámetro para salida de cmdlets
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["cmdlet", "parameter", "out-file"]
respuesta: Out-File
tipo: completar
enunciado:
  Si deseas redirigir la salida estándar de un cmdlet (como `Get-Process`) a un archivo de texto plano, ¿qué cmdlet se usa explícitamente para gestionar el encoding y la truncación/append?
pasos:
  - "Identificar el cmdlet diseñado para escribir en archivos."
  - "Distinguirlo de la redirección de stream `>` que es un operador."
respuestas_validas:
  - 'Out-File'
  - 'out-file'
explicacion:
  `Out-File` es el cmdlet dedicado a escribir objetos en archivos. Permite controlar el encoding (UTF8, ASCII, etc.) y si se sobrescribe o se anexa (`-Append`).
```

### 7 — Expresión regular para coincidencia de inicio
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["regex", "match", "operator"]
respuesta: -match
tipo: completar
enunciado:
  ¿Qué operador binario en PowerShell se utiliza para realizar una coincidencia de expresión regular (regex) y devuelve `$true` si coincide?
pasos:
  - "Recordar los operadores de comparación de cadenas."
  - "Identificar el que soporta regex."
respuestas_validas:
  - '-match'
  - '-Match'
  - 'match'
explicacion:
  El operador `-match` realiza una coincidencia de regex (case-insensitive por defecto). Si hay coincidencia, devuelve `$true` y llena la variable automática `$Matches`.
```

### 8 — Cmdlet para obtener ayuda detallada
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["help", "documentacion", "cmdlet"]
respuesta: Get-Help
tipo: completar
enunciado:
  Para ver la documentación completa de un cmdlet incluyendo ejemplos de código en la consola, ¿qué cmdlet se ejecuta usualmente con el parámetro `-ShowWindow` o `-Full`?
pasos:
  - "Identificar el cmdlet central de ayuda."
  - "Confirmar su nombre base."
respuestas_validas:
  - 'Get-Help'
  - 'get-help'
explicacion:
  `Get-Help` es el cmdlet estándar para acceder a la documentación. `-Full` muestra ejemplos y detalles completos; `-ShowWindow` abre la ayuda en una ventana GUI.
```

### 9 — Operador de comparación de igualdad de valores
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["comparacion", "igualdad", "operator"]
respuesta: -eq
tipo: completar
enunciado:
  ¿Qué operador de comparación se usa para verificar si dos valores son numéricamente o textualmente iguales (sin considerar tipos estrictos de .NET)?
pasos:
  - "Distinguir entre igualdad de valor y referencia."
  - "Identificar el operador estándar de igualdad."
respuestas_validas:
  - '-eq'
  - '-Eq'
  - 'eq'
explicacion:
  `-eq` compara la igualdad de valores. A diferencia de `===` en otros lenguajes, PowerShell hace conversión de tipos implícita para la comparación de valor.
```

### 10 — Cmdlet para enviar correo electrónico
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["email", "smtp", "net"]
respuesta: Send-MailMessage
tipo: completar
enunciado:
  ¿Qué cmdlet cmdlet se utiliza para enviar un correo electrónico a través de un servidor SMTP desde un script?
pasos:
  - "Identificar el cmdlet relacionado con correo."
  - "Recordar su nombre completo."
respuestas_validas:
  - 'Send-MailMessage'
  - 'send-mailmessage'
explicacion:
  `Send-MailMessage` es el cmdlet nativo para enviar correos. Nota: En versiones modernas de PS (Core/7+), este cmdlet está obsoleto y se recomienda usar `Net.Mail.SmtpClient` directamente, pero sigue siendo la respuesta estándar para la sintaxis cmdlet clásica.
```

### 11 — Bloque de finalización de función
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["funciones", "scope", "estructura"]
respuesta: Process
tipo: completar
enunciado:
  En una función PowerShell que procesa pipelines, ¿qué bloque de código se ejecuta una vez por cada objeto recibido del pipeline?
pasos:
  - "Recordar las partes de una función: Begin, Process, End."
  - "Identificar el bloque iterativo por elemento."
respuestas_validas:
  - 'Process'
  - 'process'
explicacion:
  El bloque `Process` se ejecuta una vez por cada objeto que fluye por el pipeline. `Begin` una vez al inicio, `End` una vez al final.
```

### 12 — Cmdlet para detener un proceso
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["procesos", "system", "cmdlet"]
respuesta: Stop-Process
tipo: completar
enunciado:
  ¿Qué cmdlet se utiliza para terminar un proceso en ejecución dado su ID o nombre?
pasos:
  - "Identificar el cmdlet de gestión de procesos."
  - "Confirmar su verbo y sustantivo."
respuestas_validas:
  - 'Stop-Process'
  - 'stop-process'
explicacion:
  `Stop-Process` envía un mensaje de cierre al proceso. Si el proceso no responde, puede requerir `-Force` para terminarlo forzosamente.
```

### 13 — Operador de igualdad estricta de tipos
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["comparacion", "strict", "type"]
respuesta: -ceq
tipo: completar
enunciado:
  ¿Qué operador de comparación se usa para verificar igualdad de valor Y de tipo estricto (case-sensitive y type-sensitive)?
pasos:
  - "Identificar el sufijo de comparación estricta."
  - "Recordar que 'c' significa case-sensitive y 'e' equality."
respuestas_validas:
  - '-ceq'
  - '-Ceq'
  - 'ceq'
explicacion:
  `-ceq` compara valores y tipos estrictamente. Por ejemplo, `'1' -ceq 1` es `$false` porque los tipos difieren (string vs int).
```

### 14 — Cmdlet para crear un directorio
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["file-system", "directory", "cmdlet"]
respuesta: New-Item
tipo: completar
enunciado:
  ¿Qué cmdlet genérico se utiliza para crear un nuevo elemento del sistema de archivos, como un directorio o un archivo vacío?
pasos:
  - "Identificar el cmdlet de creación de objetos."
  - "Recordar que funciona para directorios y archivos."
respuestas_validas:
  - 'New-Item'
  - 'new-item'
explicacion:
  `New-Item` con `-ItemType Directory` crea carpetas. Es más versátil que `mkdir` (alias) porque unifica la creación de archivos y directorios.
```

### 15 — Variable para el objeto actual en pipeline
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["pipeline", "variable", "automatic"]
respuesta: $_
tipo: completar
enunciado:
  ¿Qué variable automática representa el objeto actual en la tubería (pipeline) dentro de un scriptblock o filtro?
pasos:
  - "Recordar la variable de contexto de pipeline."
  - "Identificar su símbolo."
respuestas_validas:
  - '$_'
  - '$_'
explicacion:
  `$_` (o `$PSItem`) contiene el objeto actual que pasa por el pipeline. Es fundamental en `Where-Object`, `ForEach-Object`, etc.
```

### 16 — Cmdlet para filtrar objetos por propiedad
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["filtrado", "where", "pipeline"]
respuesta: Where-Object
tipo: completar
enunciado:
  ¿Qué cmdlet se utiliza para filtrar la salida de un pipeline basándose en el valor de las propiedades de los objetos?
pasos:
  - "Identificar el cmdlet de filtrado."
  - "Recordar su nombre completo (alias: ?)."
respuestas_validas:
  - 'Where-Object'
  - 'where-object'
explicacion:
  `Where-Object` evalúa un scriptblock para cada objeto. Si el scriptblock devuelve `$true`, el objeto pasa al siguiente elemento del pipeline.
```

### 17 — Cmdlet para formatear tabla
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["formato", "output", "display"]
respuesta: Format-Table
tipo: completar
enunciado:
  ¿Qué cmdlet se usa para presentar los objetos de salida en un formato de tabla alineada por columnas?
pasos:
  - "Identificar el cmdlet de formato tabular."
  - "Recordar su nombre."
respuestas_validas:
  - 'Format-Table'
  - 'format-table'
explicacion:
  `Format-Table` (alias: ft) organiza los objetos en filas y columnas. Es útil para la visualización en consola, aunque no debe usarse en pipelines de datos posteriores porque convierte objetos en objetos de formato.
```

### 18 — Cmdlet para ejecutar un script externo
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["exec", "external", "call"]
respuesta: &
tipo: completar
enunciado:
  ¿Qué operador (llamado "call operator") se utiliza para ejecutar un comando, script o cmdlet cuyo nombre está almacenado en una variable?
pasos:
  - "Identificar el operador de ejecución."
  - "Recordar su símbolo."
respuestas_validas:
  - '&'
  - '& '
  - ' & '
explicacion:
  El operador `&` (call operator) permite ejecutar dinámicamente comandos. Ej: `$cmd = 'Get-Date'; & $cmd`. Sin él, PowerShell trataría el nombre de la variable como literal.
```

### 19 — Cmdlet para obtener el valor de una variable de entorno
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["environment", "variables", "system"]
respuesta: Get-ChildItem
tipo: completar
enunciado:
  ¿Qué cmdlet se utiliza para listar las variables de entorno del sistema, accediendo al provider `Env:`?
pasos:
  - "Identificar el cmdlet de listado de archivos/objetos."
  - "Recordar que las variables de entorno se exponen como un drive."
respuestas_validas:
  - 'Get-ChildItem'
  - 'get-childitem'
  - 'gci'
explicacion:
  Las variables de entorno se exponen como el provider `Env:`. `Get-ChildItem Env:` o `gci env:` lista todas las variables de entorno.
```

### 20 — Cmdlet para comparar objetos
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["comparacion", "diff", "object"]
respuesta: Compare-Object
tipo: completar
enunciado:
  ¿Qué cmdlet se utiliza para comparar dos conjuntos de objetos y mostrar las diferencias entre ellos?
pasos:
  - "Identificar el cmdlet de comparación."
  - "Recordar su nombre."
respuestas_validas:
  - 'Compare-Object'
  - 'compare-object'
  - 'diff'
explicacion:
  `Compare-Object` (alias: `diff`) compara dos conjuntos y devuelve objetos con `SideIndicator` indicando si están en el izquierdo (`<=`), derecho (`=>`) o ambos.
```

### 21 — Cmdlet para convertir JSON a objeto
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["json", "serialization", "conversion"]
respuesta: ConvertFrom-Json
tipo: completar
enunciado:
  ¿Qué cmdlet se utiliza para analizar una cadena JSON y convertirla en objetos PowerShell?
pasos:
  - "Identificar el cmdlet de conversión JSON."
  - "Recordar su nombre."
respuestas_validas:
  - 'ConvertFrom-Json'
  - 'convertfrom-json'
explicacion:
  `ConvertFrom-Json` toma una cadena JSON y la deserializa en objetos PowerShell. Es el inverso de `ConvertTo-Json`.
```

### 22 — Cmdlet para convertir objeto a JSON
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["json", "serialization", "output"]
respuesta: ConvertTo-Json
tipo: completar
enunciado:
  ¿Qué cmdlet se utiliza para serializar un objeto PowerShell en una cadena JSON?
pasos:
  - "Identificar el cmdlet de salida JSON."
  - "Recordar su nombre."
respuestas_validas:
  - 'ConvertTo-Json'
  - 'convertto-json'
explicacion:
  `ConvertTo-Json` serializa el objeto en formato JSON. En PS 6+, tiene parámetros como `-Depth` para manejar estructuras anidadas complejas.
```

### 23 — Cmdlet para obtener la fecha y hora actual
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["fecha", "time", "cmdlet"]
respuesta: Get-Date
tipo: completar
enunciado:
  ¿Qué cmdlet se utiliza para obtener la fecha y hora actual del sistema o formatear una fecha específica?
pasos:
  - "Identificar el cmdlet de fecha."
  - "Recordar su nombre."
respuestas_validas:
  - 'Get-Date'
  - 'get-date'
explicacion:
  `Get-Date` devuelve un objeto `DateTime`. Se puede usar para formatear (`-Format`) o calcular diferencias de tiempo.
```

### 24 — Cmdlet para eliminar un archivo
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["file-io", "delete", "cmdlet"]
respuesta: Remove-Item
tipo: completar
enunciado:
  ¿Qué cmdlet se utiliza para eliminar archivos o carpetas del sistema de archivos?
pasos:
  - "Identificar el cmdlet de eliminación."
  - "Recordar su nombre."
respuestas_validas:
  - 'Remove-Item'
  - 'remove-item'
  - 'del'
  - 'rm'
explicacion:
  `Remove-Item` (alias: `del`, `rm`) elimina objetos del provider. Para carpetas con contenido, requiere `-Recurse`.
```

### 25 — Cmdlet para copiar un archivo
```
metadata:
  materia: "powershell"
  tema: "automatizacion-ps1"
  nivel: "intermedio"
  tags: ["file-io", "copy", "cmdlet"]
respuesta: Copy-Item
tipo: completar
enunciado:
  ¿Qué cmdlet se utiliza para copiar archivos o carpetas de una ubicación a otra?
pasos:
  - "Identificar el cmdlet de copia."
  - "Recordar su nombre."
respuestas_validas:
  - 'Copy-Item'
  - 'copy-item'
  - 'cp'
  - 'copy'
explicacion:
  `Copy-Item` copia objetos entre ubicaciones. Soporta recursión con `-Recurse` y sobrescritura con `-Force`.
```