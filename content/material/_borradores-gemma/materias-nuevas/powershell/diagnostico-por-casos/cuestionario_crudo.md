### 1 — Diagnóstico de Error de Conversión de Tipo
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["casting", "errores", "tipos"]
enunciado: "Al ejecutar el siguiente script, se produce un error: `Cannot convert value \"10\" to type \"System.Int32\". Error: \"Input string was not in a correct format.\"`. ¿Cuál es la causa más probable si la variable `$inputStr` proviene de una entrada de usuario que puede contener espacios?"
respuesta: "falso"
tipo: "vf"
pasos:
  - "Analizar el mensaje de error: indica que la conversión falló por formato."
  - "Considerar que `[int]\" 10 \"` falla en PowerShell si hay espacios o caracteres no numéricos."
  - "Determinar que la afirmación de que el error es por 'tipo de dato incorrecto inicial' es falsa; es por el contenido de la cadena."
explicacion: "El error no es por el tipo de dato inicial (que es string), sino por el contenido de la cadena que no es parseable a entero (ej. espacios, letras). La conversión `[int]` es estricta."
```

### 2 — Completar Filtro de Objetos
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["get-service", "where-object", "filtrado"]
enunciado: "Necesitas listar solo los servicios detenidos cuyo nombre comience con 'SQL'. Completa el comando: `Get-Service | Where-Object { $_.Status -eq '___' -and $_.Name -like 'SQL*' }`"
respuesta: "Stopped"
respuestas_validas:
  - "Stopped"
  - "stopped"
  - "STOPPED"
tipo: "completar"
pasos:
  - "Identificar el estado requerido: 'detenidos'."
  - "Recordar que la propiedad `Status` de `Get-Service` devuelve valores enum o strings."
  - "Usar el string 'Stopped' que es la representación común y válida para el filtro."
explicacion: "La propiedad `Status` acepta el string 'Stopped' para filtrar servicios que no están corriendo."
```

### 3 — Comportamiento de $null en Condicional
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["null", "condicionales", "control-flujo"]
enunciado: "Si `$result` es `$null`, ¿cuál es el resultado de la condición `if ($result)`?"
respuesta: "falso"
tipo: "vf"
pasos:
  - "Evaluar la coerción de `$null` a booleano en PowerShell."
  - "Recordar que `$null` es falso en contextos booleanos."
  - "Concluir que el bloque `if` no se ejecuta."
explicacion: "En PowerShell, `$null` se evalúa como `$false` en una instrucción `if`."
```

### 4 — Diagnóstico de Error en Pipeline
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["pipeline", "error-handling", "try-catch"]
enunciado: "Al usar `try { Get-Item -Path 'C:\\NoExiste.txt' } catch { Write-Host 'Error' }`, ¿se captura el error y se imprime 'Error'?"
respuesta: "verdadero"
tipo: "vf"
pasos:
  - "Verificar si `Get-Item` genera un error terminating por defecto."
  - "Confirmar que los errores terminantes son capturados por `catch`."
  - "Validar que el flujo continúa al bloque catch."
explicacion: "Los errores terminantes (como archivo no encontrado por defecto) interrumpen el flujo y son capturados por `catch`."
```

### 5 — Completar Operador de Comparación
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["comparacion", "-eq", "-ieq"]
enunciado: "Para comparar dos strings ignorando mayúsculas/minúsculas en un script de auditoría, usa: `$a -___ $b`"
respuesta: "ieq"
respuestas_validas:
  - "ieq"
  - "Ieq"
  - "IEQ"
tipo: "completar"
tipo: "completar"
pasos:
  - "Identificar la necesidad de comparación insensible a mayúsculas."
  - "Recordar el operador específico de PowerShell para esto."
  - "Seleccionar `-ieq` (insensitive equal)."
explicacion: "El operador `-ieq` realiza una comparación de igualdad insensible a mayúsculas en PowerShell."
```

### 6 — Salida de Foreach vs ForEach-Object
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["foreach", "ForEach-Object", "pipeline"]
enunciado: "¿Cuál es la principal diferencia de rendimiento al procesar 10,000 objetos en un pipeline grande?"
opciones_explicitas:
  - "Foreach (statement) es más rápido porque no usa pipeline."
  - "ForEach-Object es más rápido porque es un cmdlet optimizado."
  - "Ambos tienen el mismo rendimiento."
  - "Foreach (statement) no puede procesar objetos del pipeline."
respuesta: "Foreach (statement) es más rápido porque no usa pipeline."
tipo: "mc"
pasos:
  - "Analizar el overhead de la pipeline en PowerShell."
  - "Comparar la eficiencia del bloque de código `foreach` vs el cmdlet `ForEach-Object`."
  - "Concluir que el bloque `foreach` evita el overhead de serialización/deserialización de la pipeline."
explicacion: "El bloque `foreach` es una construcción de lenguaje más eficiente que el cmdlet `ForEach-Object` para grandes volúmenes de datos en memoria."
```

### 7 — Diagnóstico de Error de Sintaxis en HashTable
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["hashtable", "sintaxis", "claves"]
enunciado: "Al crear `$ht = @{ 'Key1' = 'Val1'; Key2 = 'Val2' }`, ¿es válida la sintaxis sin comillas en `Key2`?"
respuesta: "verdadero"
tipo: "vf"
pasos:
  - "Verificar las reglas de sintaxis de claves en literales de hashtable."
  - "Confirmar que las claves son strings y pueden omitir comillas si no contienen espacios."
  - "Validar que es sintaxis válida."
explicacion: "En PowerShell, las claves de hashtable pueden ser strings sin comillas si no contienen espacios ni caracteres especiales."
```

### 8 — Completar Argumento de Cmdlet
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["get-eventlog", "parámetros", "filtro"]
enunciado: "Para obtener los últimos 10 eventos de error del log 'Application', completa: `Get-EventLog -LogName Application -EntryType Error -Newest ___`"
respuesta: "10"
respuestas_validas:
  - "10"
  - "10 "
  - " 10"
tipo: "completar"
pasos:
  - "Identificar el parámetro que limita la cantidad de registros devueltos."
  - "Recordar que `-Newest` acepta un entero."
  - "Escribir el número 10."
explicacion: "El parámetro `-Newest` toma un número entero para especificar cuántos registros recientes devolver."
```

### 9 — Comportamiento de Split
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["string", "split", "arrays"]
enunciado: "Si `$str = 'a,,b'`, ¿cuántos elementos tiene `$str.Split(',')`?"
respuesta: "verdadero"
tipo: "vf"
pasos:
  - "Analizar el comportamiento de `Split` con delimitadores consecutivos."
  - "Verificar si PowerShell incluye elementos vacíos por defecto."
  - "Confirmar que por defecto SÍ los incluye (a, empty, b = 3 elementos)."
explicacion: "Por defecto, `Split` incluye cadenas vacías resultantes de delimitadores consecutivos, por lo que 'a,,b' se divide en 3 elementos: 'a', '', 'b'."
```

### 10 — Diagnóstico de Error de Propiedad
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["propiedades", "dynamic", "error"]
enunciado: "Al ejecutar `$obj = Get-Process; $obj | Select-Object NonExistentProperty`, ¿se produce un error?"
respuesta: "falso"
tipo: "vf"
pasos:
  - "Evaluar el comportamiento de `Select-Object` con propiedades inexistentes."
  - "Recordar que `Select-Object` no falla por propiedades que no existen, sino que devuelve `$null`."
  - "Concluir que no hay error."
explicacion: "`Select-Object` no genera error si la propiedad no existe; simplemente devuelve `$null` o una hashtable con `$null` en ese campo."
```

### 11 — Completar Operador de Asignación
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["asignacion", "-coalesce", "null-coalescing"]
enunciado: "Para asignar un valor por defecto si una variable es `$null`, usa: `$var = $input ?? ___`"
respuesta: "'default'"
respuestas_validas:
  - "'default'"
  - '"default"'
  - "default"
tipo: "completar"
pasos:
  - "Identificar el operador de coalescencia nula en PowerShell 7+."
  - "Recordar que el operador es `??`."
  - "Completar con el valor por defecto entre comillas si es string."
explicacion: "El operador `??` (null-coalescing) asigna el valor de la derecha si el izquierdo es `$null`."
```

### 12 — Salida de Measure-Object
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["measure-object", "estadisticas", "pipeline"]
enunciado: "¿Qué propiedad usa `Measure-Object` para devolver la suma de valores numéricos en un pipeline?"
respuesta: "Sum"
tipo: "mc"
opciones_explicitas:
  - "Sum"
  - "Total"
  - "Addition"
  - "Count"
respuesta: "Sum"
pasos:
  - "Identificar el cmdlet que calcula estadísticas."
  - "Recordar las propiedades de salida de `Measure-Object`."
  - "Seleccionar 'Sum' como la propiedad para la suma."
explicacion: "`Measure-Object` devuelve un objeto con propiedades como `Count`, `Average`, `Sum`, `Maximum`, `Minimum`."
```

### 13 — Diagnóstico de Error de Scope
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["scope", "variables", "funciones"]
enunciado: "Si defines `$x = 1` globalmente, y dentro de una función escribes `$x = 2` sin `global:`, ¿se modifica la variable global?"
respuesta: "falso"
tipo: "vf"
pasos:
  - "Analizar el scope de variables dentro de funciones."
  - "Recordar que las variables en funciones son locales por defecto."
  - "Concluir que la variable global no se modifica."
explicacion: "Por defecto, las variables creadas dentro de una función son locales a esa función. Para modificar la global, se debe usar `$global:x`."
```

### 14 — Completar Argumento de Invoke-WebRequest
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["invoke-webrequest", "http", "method"]
enunciado: "Para enviar una solicitud POST a una API, usa: `Invoke-WebRequest -Uri '...' -Method ___`"
respuesta: "POST"
respuestas_validas:
  - "POST"
  - "post"
  - "Post"
tipo: "completar"
pasos:
  - "Identificar el método HTTP requerido."
  - "Recordar el valor del parámetro `-Method`."
  - "Escribir 'POST'."
explicacion: "El parámetro `-Method` acepta valores como 'GET', 'POST', 'PUT', 'DELETE', etc."
```

### 15 — Comportamiento de -contains
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["operadores", "-contains", "arrays"]
enunciado: "Si `$arr = @('a', 'b')`, ¿es `$arr -contains 'c'` verdadero?"
respuesta: "falso"
tipo: "vf"
pasos:
  - "Evaluar el contenido del array."
  - "Verificar si 'c' está presente."
  - "Concluir que no está presente."
explicacion: "El operador `-contains` devuelve `$true` solo si el elemento existe en la colección."
```

### 16 — Completar Cmdlet de Gestión de Servicios
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["services", "start-service", "stop-service"]
enunciado: "Para detener un servicio llamado 'MyService', usa: `___-Service -Name 'MyService'`"
respuesta: "Stop"
respuestas_validas:
  - "Stop"
  - "stop"
  - "STOP"
tipo: "completar"
pasos:
  - "Identificar la acción requerida: detener."
  - "Recordar el cmdlet correspondiente."
  - "Completar con 'Stop'."
explicacion: "El cmdlet `Stop-Service` se utiliza para detener servicios en Windows."
```

### 17 — Diagnóstico de Error de Pipeline
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["pipeline", "input", "process"]
enunciado: "¿Puede un cmdlet personalizado recibir múltiples objetos a través de `-InputObject` simultáneamente?"
respuesta: "falso"
tipo: "vf"
pasos:
  - "Analizar el comportamiento de `-InputObject`."
  - "Recordar que `-InputObject` toma un solo objeto, no una colección."
  - "Para colecciones, se usa pipeline o `-InputObject` con un array (pero se trata como un solo objeto array)."
explicacion: "`-InputObject` espera un solo objeto. Si se pasa un array, se trata como un único objeto de tipo Array, no como múltiples objetos en el pipeline."
```

### 18 — Completar Operador de Expresión Regular
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["regex", "-match", "-replace"]
enunciado: "Para reemplazar todas las ocurrencias de 'foo' por 'bar' en un string, usa: `$str -replace 'foo', '___'`"
respuesta: "bar"
respuestas_validas:
  - "bar"
  - "Bar"
  - "BAR"
tipo: "completar"
pasos:
  - "Identificar el operador de reemplazo."
  - "Recordar la sintaxis `-replace <pattern>, <replacement>`."
  - "Completar con el valor de reemplazo."
explicacion: "El operador `-replace` toma el patrón y la cadena de reemplazo como argumentos."
```

### 19 — Salida de Get-Date
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["date", "get-date", "formato"]
enunciado: "¿Qué formato devuelve `Get-Date -Format 'yyyy-MM-dd'`?"
respuesta: "verdadero"
tipo: "vf"
pasos:
  - "Analizar la solicitud: ¿devuelve el formato solicitado?"
  - "Confirmar que `-Format` aplica el formato especificado."
  - "Responder verdadero."
explicacion: "El parámetro `-Format` aplica el formato de fecha/hora especificado a la salida."
```

### 20 — Completar Cmdlet de Gestión de Usuarios
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["active-directory", "new-aduser", "creación"]
enunciado: "Para crear un nuevo usuario en Active Directory, usa: `New-ADUser -Name 'JohnDoe' -___ 'OU=Users,DC=contoso,DC=com'`"
respuesta: "Path"
respuestas_validas:
  - "Path"
  - "path"
  - "PATH"
tipo: "completar"
pasos:
  - "Identificar el parámetro que especifica la ubicación OU."
  - "Recordar que es `-Path`."
  - "Completar con 'Path'."
explicacion: "El parámetro `-Path` en cmdlets de Active Directory especifica el contenedor (OU) donde se creará el objeto."
```

### 21 — Comportamiento de -in
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["operadores", "-in", "comparación"]
enunciado: "Si `$val = 5`, ¿es `5 -in @(1, 2, 3)` verdadero?"
respuesta: "falso"
tipo: "vf"
pasos:
  - "Evaluar si 5 está en la lista @(1, 2, 3)."
  - "Concluir que no está."
explicacion: "El operador `-in` verifica si el valor de la izquierda está en la colección de la derecha. 5 no está en la lista."
```

### 22 — Completar Argumento de Select-Object
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["select-object", "propiedades", "alias"]
enunciado: "Para renombrar una propiedad en la salida, usa: `Select-Object Name, @{N='___';E={$_.FullName}}`"
respuesta: "DisplayName"
respuestas_validas:
  - "DisplayName"
  - "displayname"
  - "DISPLAYNAME"
tipo: "completar"
pasos:
  - "Identificar el parámetro para el nombre de la nueva propiedad."
  - "Recordar que es `-Name` o `N` en el hashtable."
  - "Completar con el nombre deseado."
explicacion: "En un hashtable de calculada, `N` (o `Name`) especifica el nombre de la nueva propiedad."
```

### 23 — Diagnóstico de Error de Cmdlet
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["get-childitem", "alias", "dir"]
enunciado: "¿Es `dir` un alias para `Get-ChildItem` en PowerShell?"
respuesta: "verdadero"
tipo: "vf"
pasos:
  - "Verificar los aliases predeterminados."
  - "Confirmar que `dir` es un alias de `Get-ChildItem`."
explicacion: "`dir` es un alias estándar para `Get-ChildItem` en PowerShell para compatibilidad con cmd."
```

### 24 — Completar Cmdlet de Gestión de Procesos
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["get-process", "stop-process", "terminar"]
enunciado: "Para terminar un proceso por ID, usa: `Stop-Process -Id ___`"
respuesta: "1234"
respuestas_validas:
  - "1234"
  - "PID"
  - "processId"
tipo: "completar"
pasos:
  - "Identificar el parámetro para el ID del proceso."
  - "Recordar que es `-Id`."
  - "Completar con un ejemplo de ID."
explicacion: "El parámetro `-Id` acepta el número de ID del proceso a detener."
```

### 25 — Comportamiento de -like
```yaml
metadata:
  materia: "powershell"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["operadores", "-like", "globbing"]
enunciado: "¿Es `'test.txt' -like '*.txt'` verdadero?"
respuesta: "verdadero"
tipo: "vf"
pasos:
  - "Evaluar la coincidencia de patrón globbing."
  - "Confirmar que `*` coincide con cualquier secuencia de caracteres."
explicacion: "El operador `-like` usa coincidencia de patrón globbing, donde `*` coincide con cero o más caracteres."
```