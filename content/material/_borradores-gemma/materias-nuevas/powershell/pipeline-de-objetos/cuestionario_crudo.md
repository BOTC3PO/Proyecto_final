### 1 — Fundamento del Pipeline
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["pipeline", "objetos", "fundamentos"]
respuesta: "verdadero"
tipo: vf
enunciado: "En PowerShell, la tubería (|) pasa el objeto completo (no solo texto) del comando de la izquierda al comando de la derecha."
pasos:
  - "Entender que PowerShell es un sistema basado en objetos."
  - "Verificar que los tipos de datos se conservan al pasar por el pipeline."
explicacion: "A diferencia de shells tradicionales que manejan texto, PowerShell pasa objetos .NET completos, permitiendo acceder a propiedades y métodos en el siguiente comando."
```

### 2 — Visualización de Salida
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["out-host", "visualizacion"]
respuesta: "Out-Host"
tipo: completar
respuestas_validas:
  - "Out-Host"
  - "out-host"
  - "Format-Table"
  - "ft"
enunciado: "Completa el comando para forzar la visualización inmediata de los objetos en la consola, evitando que el host los formatee automáticamente al final: Get-Process | ____"
pasos:
  - "Identificar el comando que envía la salida directamente al host."
  - "Escribir el nombre del cmdlet."
explicacion: "Out-Host fuerza la salida al host actual. Format-Table también es válido si el objetivo es la visualización tabular inmediata, aunque técnicamente transforma el objeto."
```

### 3 — Filtrado de Propiedades
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["select-object", "propiedades"]
respuesta: "Name"
tipo: completar
respuestas_validas:
  - "Name"
  - "name"
  - "ProcessName"
  - "processname"
enunciado: "Si ejecutas `Get-Process | Select-Object ____`, ¿qué propiedad estándar de los procesos se usa comúnmente para ver el nombre del proceso (no el ID ni la memoria)?"
pasos:
  - "Conocer las propiedades principales del objeto Process."
  - "Seleccionar la propiedad que contiene el nombre."
explicacion: "La propiedad 'Name' o 'ProcessName' contiene el nombre del ejecutable del proceso."
```

### 4 — Conteo de Elementos
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["measure-object", "conteo"]
respuesta: "Measure-Object"
tipo: completar
respuestas_validas:
  - "Measure-Object"
  - "measure-object"
  - "mo"
enunciado: "Completa el cmdlet necesario para contar cuántos archivos hay en un directorio: `Get-ChildItem C:\\Temp | ____`"
pasos:
  - "Identificar el cmdlet diseñado para métricas (conteo, promedio, etc.)."
  - "Escribir el nombre completo."
explicacion: "Measure-Object cuenta los objetos que recibe del pipeline por defecto."
```

### 5 — Tipo de Objeto
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["get-member", "tipos"]
respuesta: "Get-Member"
tipo: completar
respuestas_validas:
  - "Get-Member"
  - "get-member"
  - "gm"
enunciado: "¿Qué cmdlet se usa para inspeccionar las propiedades y métodos disponibles en los objetos que salen de `Get-Service`?"
pasos:
  - "Recordar el cmdlet para introspección de objetos."
  - "Escribir el nombre."
explicacion: "Get-Member muestra el tipo de objeto y sus miembros (propiedades/métodos)."
```

### 6 — Ordenamiento Ascendente
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["sort-object", "ordenamiento"]
respuesta: "Sort-Object"
tipo: completar
respuestas_validas:
  - "Sort-Object"
  - "sort-object"
  - "sort"
enunciado: "Completa el cmdlet para ordenar los servicios por su estado: `Get-Service | ____ State`"
pasos:
  - "Identificar el cmdlet de ordenamiento."
  - "Escribir el nombre."
explicacion: "Sort-Object ordena los objetos según la propiedad especificada."
```

### 7 — Filtrado por Propiedad (MC)
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["where-object", "filtrado"]
opciones_explicitas:
  - "Where-Object"
  - "Select-Object"
  - "ForEach-Object"
  - "Sort-Object"
respuesta: "Where-Object"
tipo: mc
enunciado: "¿Qué cmdlet se debe usar en el pipeline para filtrar objetos basándose en el valor de una propiedad (ej. `ProcessName -eq 'svchost'`)?"
pasos:
  - "Analizar la necesidad de filtrar condiciones lógicas."
  - "Seleccionar el cmdlet correcto."
explicacion: "Where-Object es el cmdlet diseñado para filtrar objetos según una expresión lógica."
```

### 8 — Iteración de Elementos (MC)
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["foreach-object", "iteracion"]
opciones_explicitas:
  - "ForEach-Object"
  - "For-Each"
  - "Loop-Object"
  - "Apply-Object"
respuesta: "ForEach-Object"
tipo: mc
enunciado: "¿Qué cmdlet se usa para ejecutar un scriptblock para CADA objeto individual que pasa por el pipeline?"
pasos:
  - "Identificar el cmdlet de iteración en pipeline."
  - "Seleccionar la sintaxis correcta de PowerShell."
explicacion: "ForEach-Object (alias foreach) itera sobre cada elemento del pipeline."
```

### 9 — Salida a Archivo (Texto Plano)
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["out-file", "escritura"]
respuesta: "Out-File"
tipo: completar
respuestas_validas:
  - "Out-File"
  - "out-file"
  - "of"
enunciado: "Completa el cmdlet para guardar la lista de procesos en un archivo de texto: `Get-Process | ____ C:\\processes.txt`"
pasos:
  - "Identificar el cmdlet de salida a archivo."
  - "Escribir el nombre."
explicacion: "Out-File escribe la representación en texto de los objetos en un archivo."
```

### 10 — Conversión a Cadena (VF)
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["casting", "string"]
respuesta: "falso"
tipo: vf
enunciado: "Si ejecutas `Get-Process | Out-String`, el resultado final es un objeto de tipo `Process`."
pasos:
  - "Analizar qué hace Out-String."
  - "Determinar el tipo de retorno."
explicacion: "Out-String convierte los objetos en una cadena de texto (System.String), no devuelve el objeto original."
```

### 11 — Acceso a Propiedad en Pipeline (MC)
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["$_", "variable-pipeline"]
opciones_explicitas:
  - "$_"
  - "$input"
  - "$this"
  - "$pipeline"
respuesta: "$_"
tipo: mc
enunciado: "Dentro de un scriptblock de `ForEach-Object` o `Where-Object`, ¿cuál es la variable automática que representa el objeto actual en el pipeline?"
pasos:
  - "Recordar la variable especial para el elemento actual."
  - "Seleccionar el símbolo correcto."
explicacion: "$_ es la variable automática que contiene el objeto actual del pipeline."
```

### 12 — Filtrado de Estado de Servicio (VF)
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["where-object", "servicios"]
respuesta: "verdadero"
tipo: vf
enunciado: "El comando `Get-Service | Where-Object Status -eq 'Running'` es sintaxis válida en PowerShell 3.0+."
pasos:
  - "Verificar la sintaxis abreviada de Where-Object."
  - "Confirmar si es soportada."
explicacion: "PowerShell 3.0 introdujo la sintaxis abreviada `PropName -eq Value` para Where-Object."
```

### 13 — Unión de Conjuntos (MC)
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["union", "comparacion"]
opciones_explicitas:
  - "Compare-Object"
  - "Join-Object"
  - "Merge-Object"
  - "Append-Object"
respuesta: "Compare-Object"
tipo: mc
enunciado: "¿Qué cmdlet se usa para comparar dos conjuntos de objetos y encontrar diferencias?"
pasos:
  - "Identificar el cmdlet de comparación."
  - "Seleccionar el nombre correcto."
explicacion: "Compare-Object compara dos conjuntos de objetos y muestra qué es único en cada uno."
```

### 14 — Selección de Primeros Elementos (MC)
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["select-object", "top"]
opciones_explicitas:
  - "Select-Object"
  - "First-Object"
  - "Head-Object"
  - "Limit-Object"
respuesta: "Select-Object"
tipo: mc
enunciado: "¿Qué cmdlet y parámetro se usan para obtener los primeros 5 elementos de una lista larga?"
pasos:
  - "Identificar el cmdlet de selección."
  - "Recordar el parámetro para límites."
explicacion: "Select-Object -First 5 limita la salida a los primeros 5 objetos."
```

### 15 — Transformación con ScriptBlock (VF)
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["foreach-object", "scriptblock"]
respuesta: "verdadero"
tipo: vf
enunciado: "El cmdlet `ForEach-Object` puede aceptar un scriptblock `{ $_.Name.ToUpper() }` para transformar cada objeto."
pasos:
  - "Verificar la capacidad de transformación de ForEach-Object."
  - "Confirmar el uso del scriptblock."
explicacion: "ForEach-Object ejecuta el scriptblock para cada objeto, permitiendo transformaciones."
```

### 16 — Alias de Select-Object
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["aliases", "select"]
respuesta: "select"
tipo: completar
respuestas_validas:
  - "select"
  - "Select"
enunciado: "Escribe el alias más común para `Select-Object` (mínimo 4 caracteres)."
pasos:
  - "Recordar el alias corto."
  - "Escribirlo."
explicacion: "El alias estándar es 'select'."
```

### 17 — Diferencia de Tipos (VF)
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["tipos", "diferencia"]
respuesta: "falso"
tipo: vf
enunciado: "Si un cmdlet devuelve múltiples objetos, estos pasan por el pipeline uno por uno, no como un solo array."
pasos:
  - "Entender el flujo del pipeline."
  - "Determinar si se agrupan o fluyen individualmente."
explicacion: "El pipeline fluye objeto por objeto. El destinatario recibe cada objeto individualmente."
```

### 18 — Ordenamiento Descendente (MC)
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["sort-object", "descending"]
opciones_explicitas:
  - "-Descending"
  - "-Reverse"
  - "-Backwards"
  - "-Desc"
respuesta: "-Descending"
tipo: mc
enunciado: "¿Qué parámetro de `Sort-Object` se usa para ordenar de mayor a menor?"
pasos:
  - "Identificar el parámetro de ordenamiento inverso."
  - "Seleccionar la opción correcta."
explicacion: "El parámetro es `-Descending`."
```

### 19 — Eliminación de Duplicados (MC)
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["select-object", "unique"]
opciones_explicitas:
  - "Select-Object -Unique"
  - "Remove-Object -Duplicate"
  - "Get-Unique"
  - "Distinct-Object"
respuesta: "Select-Object -Unique"
tipo: mc
enunciado: "¿Cuál es la forma más común en PowerShell moderno de eliminar valores duplicados de una lista?"
pasos:
  - "Identificar el cmdlet de selección."
  - "Seleccionar el parámetro de unicidad."
explicacion: "Select-Object -Unique elimina duplicados basándose en la igualdad de los objetos."
```

### 20 — Conversión a JSON (VF)
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["convertto-json", "serializacion"]
respuesta: "verdadero"
tipo: vf
enunciado: "El cmdlet `ConvertTo-Json` toma objetos PowerShell y los serializa a una cadena JSON."
pasos:
  - "Verificar la función de ConvertTo-Json."
  - "Confirmar la salida."
explicacion: "ConvertTo-Json serializa objetos en formato JSON."
```

### 21 — Alias de Where-Object
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["aliases", "where"]
respuesta: "where"
tipo: completar
respuestas_validas:
  - "where"
  - "Where"
enunciado: "Escribe el alias común para `Where-Object`."
pasos:
  - "Recordar el alias corto."
  - "Escribirlo."
explicacion: "El alias estándar es 'where'."
```

### 22 — Manejo de Nulls (MC)
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["where-object", "null"]
opciones_explicitas:
  - "Where-Object { $_ -ne $null }"
  - "Where-Object { $_ -eq $null }"
  - "Remove-Null"
  - "Filter-Null"
respuesta: "Where-Object { $_ -ne $null }"
tipo: mc
enunciado: "¿Cómo filtras correctamente los objetos nulos en un pipeline?"
pasos:
  - "Identificar la comparación de no igualdad."
  - "Seleccionar la sintaxis correcta."
explicacion: "Usar `$_ -ne $null` dentro de Where-Object elimina los nulos."
```

### 23 — Salida a CSV (MC)
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["export-csv", "csv"]
opciones_explicitas:
  - "Export-Csv"
  - "Out-CSV"
  - "Save-Csv"
  - "Write-Csv"
respuesta: "Export-Csv"
tipo: mc
enunciado: "¿Qué cmdlet se usa para exportar objetos a un archivo CSV?"
pasos:
  - "Identificar el cmdlet de exportación a CSV."
  - "Seleccionar el nombre correcto."
explicacion: "Export-Csv es el cmdlet estándar para generar archivos CSV."
```

### 24 — Propiedad Común de Archivos (VF)
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["get-childitem", "propiedades"]
respuesta: "verdadero"
tipo: vf
enunciado: "Los objetos devueltos por `Get-ChildItem` tienen una propiedad `Length` que indica el tamaño del archivo."
pasos:
  - "Verificar las propiedades del objeto FileInfo/DirectoryInfo."
  - "Confirmar la existencia de Length."
explicacion: "Sí, la propiedad `Length` existe y contiene el tamaño en bytes para archivos."
```

### 25 — Alias de Sort-Object
```yaml
metadata:
  materia: "powershell"
  tema: "pipeline-de-objetos"
  nivel: "basico"
  tags: ["aliases", "sort"]
respuesta: "sort"
tipo: completar
respuestas_validas:
  - "sort"
  - "Sort"
enunciado: "Escribe el alias común para `Sort-Object`."
pasos:
  - "Recordar el alias corto."
  - "Escribirlo."
explicacion: "El alias estándar es 'sort'."
```