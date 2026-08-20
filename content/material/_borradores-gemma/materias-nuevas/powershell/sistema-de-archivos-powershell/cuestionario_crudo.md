### 1 — Verificar existencia de directorio
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["test-path", "directorios"]
respuesta: verdadero
tipo: vf
enunciado:
  - "Evalúa la veracidad de la siguiente afirmación: El cmdlet `Test-Path` devuelve `$true` si la ruta especificada apunta a un directorio existente en el sistema de archivos local."
pasos:
  - "Leer la documentación oficial de `Test-Path`."
  - "Verificar el comportamiento del cmdlet con rutas de directorios."
explicacion: "Test-Path es el cmdlet estándar para verificar la existencia de cualquier elemento en el proveedor de archivos (Archivos, Registro, Certificados, etc.). Devuelve $true si existe y $false si no."
```

### 2 — Crear directorio recursivo
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["new-item", "directorios"]
respuesta: "New-Item -Path .\A\B -ItemType Directory -Force"
tipo: completar
enunciado:
  - "Completa el comando para crear una estructura de directorios anidada `A\B` dentro del directorio actual, asegurando que no falle si los padres ya existen: `___ -Path .\A\B -ItemType Directory -Force`"
pasos:
  - "Identificar el cmdlet para crear nuevos elementos."
  - "Recordar que `-Force` permite la creación recursiva en PowerShell 3.0+."
explicacion: "New-Item es el cmdlet para crear archivos y directorios. El parámetro -Force permite crear directorios padres si no existen."
```

### 3 — Obtener archivos por extensión
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["get-childitem", "filtrado"]
respuesta: "Get-ChildItem -Path C:\Logs -Filter *.log"
tipo: completar
enunciado:
  - "Selecciona la sintaxis correcta y más eficiente para listar solo archivos con extensión `.log` en `C:\Logs` sin usar tuberías adicionales: `___ -Path C:\Logs -Filter *.log`"
pasos:
  - "Comparar el uso de `-Filter` vs `-Include` vs tuberías con `Where-Object`."
  - "Recordar que `-Filter` se procesa en el proveedor."
explicacion: "El parámetro `-Filter` se procesa en el lado del proveedor (servidor-side filtering en algunos contextos, o nativamente en archivos), siendo más eficiente que `-Include` o `Where-Object` para listas grandes."
```

### 4 — Copiar estructura de directorios
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["copy-item", "recursivo"]
respuesta: "Copy-Item -Path .\Origen -Destination .\Destino -Recurse"
tipo: completar
enunciado:
  - "Completa el comando para copiar un directorio y TODO su contenido (archivos y subdirectorios) de `Origen` a `Destino`: `Copy-Item -Path .\Origen -Destination .\Destino ___`"
pasos:
  - "Identificar el parámetro que activa la recursividad en Copy-Item."
  - "Verificar la sintaxis básica de Copy-Item."
explicacion: "El parámetro `-Recurse` es obligatorio en `Copy-Item` para copiar directorios que contienen subdirectorios o archivos."
```

### 5 — Eliminar directorio con contenido
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["remove-item", "eliminacion"]
respuesta: "Remove-Item -Path .\TempFolder -Recurse -Force"
tipo: completar
enunciado:
  - "Completa el comando seguro para eliminar el directorio `TempFolder` y su contenido, ignorando errores de solo lectura o permisos: `Remove-Item -Path .\TempFolder ___`"
pasos:
  - "Determinar los parámetros necesarios para la eliminación recursiva y forzada."
  - "Recordar que `-Force` elimina elementos ocultos y de solo lectura."
explicacion: "Para eliminar directorios no vacíos se requiere `-Recurse`. Para ignorar advertencias de permisos o atributos de solo lectura, se usa `-Force`."
```

### 6 — Verificar si es archivo (no directorio)
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["test-path", "tipo-elemento"]
respuesta: "Test-Path -Path .\file.txt -PathType Leaf"
tipo: completar
enunciado:
  - "Selecciona la invocación correcta para verificar si `file.txt` es un archivo (hoja) y no un contenedor: `Test-Path -Path .\file.txt ___`"
pasos:
  - "Consultar los valores válidos para el parámetro `-PathType`."
  - "Diferenciar entre `Container` y `Leaf`."
explicacion: "El parámetro `-PathType` acepta `Container` (directorios/contenedores) o `Leaf` (archivos/hojas). `Leaf` verifica que el elemento no sea un directorio."
```

### 7 — Obtener nombre largo de ruta corta
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["resolve-path", "nombres"]
respuesta: "Resolve-Path -Path .\short"
tipo: completar
enunciado:
  - "Completa el cmdlet para obtener la ruta completa canónica (sin acortamientos) de una ruta relativa corta: `___ -Path .\short`"
pasos:
  - "Identificar el cmdlet diseñado para resolver rutas relativas a absolutas."
  - "Diferenciar de `Get-Item` que devuelve el objeto."
explicacion: "`Resolve-Path` convierte rutas relativas o acortadas (short names) en rutas absolutas canónicas. `Get-Item` devuelve el objeto FileSystemInfo."
```

### 8 — Cambiar directorio de trabajo
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["set-location", "cd"]
respuesta: "Set-Location -Path 'C:\NewFolder'"
tipo: completar
enunciado:
  - "Completa el comando cmdlet equivalente a `cd` para cambiar el directorio de trabajo a `C:\NewFolder`: `___ -Path 'C:\NewFolder'`"
pasos:
  - "Identificar el cmdlet principal para cambiar el provider location."
  - "Recordar la sintaxis básica."
explicacion: "`Set-Location` (alias `cd`, `chdir`, `sl`) cambia el directorio de trabajo actual del shell."
```

### 9 — Obtener tamaño de carpeta en bytes
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["measure-object", "tamaño"]
respuesta: "Get-ChildItem -Path .\Logs -Recurse | Measure-Object -Property Length -Sum | Select-Object -ExpandProperty Sum"
tipo: completar
enunciado:
  - "Completa la tubería para calcular el tamaño total en bytes de todos los archivos en `.\Logs`: `Get-ChildItem -Path .\Logs -Recurse | ___ -Property Length -Sum`"
pasos:
  - "Identificar el cmdlet de agregación matemática."
  - "Saber que la propiedad de tamaño en FileInfo es `Length`."
explicacion: "`Measure-Object` calcula promedios, sumas, etc. En objetos de archivo, la propiedad de tamaño es `Length`. El resultado numérico se extrae con `-ExpandProperty Sum`."
```

### 10 — Verificar si ruta es absoluta
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["path", "propiedades"]
respuesta: "verdadero"
tipo: vf
enunciado:
  - "Evalúa la veracidad: El objeto retornado por `Get-Item` tiene una propiedad `FullName` que contiene la ruta absoluta completa del elemento."
pasos:
  - "Inspeccionar las propiedades del objeto `System.IO.FileInfo` o `DirectoryInfo`."
  - "Verificar si `FullName` está disponible."
explicacion: "Sí, los objetos del proveedor de archivos (`FileInfo`, `DirectoryInfo`) siempre incluyen la propiedad `FullName` con la ruta absoluta."
```

### 11 — Listar solo directorios
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["get-childitem", "filtrado"]
respuesta: "Get-ChildItem -Path . -Directory"
tipo: completar
enunciado:
  - "Completa el cmdlet para listar únicamente los subdirectorios de la carpeta actual: `Get-ChildItem -Path . ___`"
pasos:
  - "Identificar el parámetro que filtra por tipo de elemento en PowerShell 3.0+."
  - "Recordar que antes se usaba `Where-Object { $_.PSIsContainer }`."
explicacion: "El parámetro `-Directory` (o `-Force` combinado con filtrado manual en versiones muy antiguas, pero `-Directory` es el estándar moderno) filtra para mostrar solo contenedores."
```

### 12 — Mover archivo y renombrar
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["move-item", "renombrar"]
respuesta: "Move-Item -Path .\old.txt -Destination .\new.txt"
tipo: completar
enunciado:
  - "Completa el comando para mover un archivo y renombrarlo simultáneamente de `old.txt` a `new.txt`: `Move-Item -Path .\old.txt -Destination .\new.txt`"
pasos:
  - "Entender que mover a una nueva ruta con nombre diferente equivale a renombrar."
  - "Verificar la sintaxis de `-Destination`."
explicacion: "Si `-Destination` especifica una ruta con un nombre de archivo diferente, el cmdlet realiza una operación de mover y renombrar."
```

### 13 — Crear archivo temporal
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["temporary-files", "creacion"]
respuesta: "New-TemporaryFile"
tipo: completar
enunciado:
  - "Completa el cmdlet que crea un archivo vacío con un nombre único en la carpeta temporal del sistema: `___`"
pasos:
  - "Identificar el cmdlet específico para archivos temporales."
  - "Verificar que no requiere parámetros de ruta."
explicacion: "`New-TemporaryFile` crea un archivo único en el directorio temporal del usuario actual (ej. `%TEMP%`) y devuelve el objeto `FileInfo`."
```

### 14 — Obtener atributos de archivo
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["attributes", "get-item"]
respuesta: "Get-Item -Path .\file.txt | Select-Object Attributes"
tipo: completar
enunciado:
  - "Completa el comando para visualizar el conjunto de atributos (ReadOnly, Hidden, etc.) de un archivo: `Get-Item -Path .\file.txt | Select-Object ___`"
pasos:
  - "Identificar la propiedad que contiene los flags de atributos."
  - "Recordar que es un enum `FileAttributes`."
explicacion: "La propiedad `Attributes` del objeto `FileInfo` contiene los atributos del sistema de archivos. Se puede inspeccionar o modificar."
```

### 15 — Verificar si es solo lectura
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["attributes", "comparacion"]
respuesta: "(Get-Item .\file.txt).Attributes -band [System.IO.FileAttributes]::ReadOnly"
tipo: completar
enunciado:
  - "Completa la expresión para comprobar si el archivo `file.txt` tiene el atributo de solo lectura activado usando el operador bitwise: `___ -band [System.IO.FileAttributes]::ReadOnly`"
pasos:
  - "Identificar cómo acceder a los atributos de un archivo específico."
  - "Recordar el operador de bits para verificar flags."
explicacion: "Se usa el operador `-band` para verificar si un flag específico está presente en el enum `Attributes`. Es necesario castear `[System.IO.FileAttributes]::ReadOnly`."
```

### 16 — Listar archivos ocultos
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["get-childitem", "ocultos"]
respuesta: "Get-ChildItem -Path . -Hidden"
tipo: completar
enunciado:
  - "Completa el cmdlet para incluir archivos y carpetas con el atributo 'Oculto' en el resultado de `Get-ChildItem`: `Get-ChildItem -Path . ___`"
pasos:
  - "Identificar el parámetro que desactiva el filtro por defecto de elementos ocultos."
  - "Recordar que por defecto `Get-ChildItem` no muestra ocultos."
explicacion: "El parámetro `-Hidden` hace que `Get-ChildItem` incluya los elementos con el atributo `Hidden` del sistema de archivos."
```

### 17 — Copiar solo si es más reciente
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["copy-item", "condicional"]
respuesta: "Copy-Item -Path .\src.txt -Destination .\dst.txt -Force"
tipo: completar
enunciado:
  - "Completa el comando para forzar la sobrescritura del destino `dst.txt` con `src.txt` incluso si `dst.txt` es más reciente: `Copy-Item -Path .\src.txt -Destination .\dst.txt ___`"
pasos:
  - "Identificar el parámetro que ignora la comprobación de fecha/hora por defecto."
  - "Recordar que sin este parámetro, Copy-Item no sobrescribe archivos más nuevos."
explicacion: "Por defecto, `Copy-Item` no sobrescribe un archivo de destino si este es más reciente o tiene el atributo de solo lectura. `-Force` ignora estas comprobaciones (excepto el atributo Solo Lectura en algunos contextos, pero permite la sobrescritura de contenido)."
```

### 18 — Obtener directorio padre
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["path", "propiedades"]
respuesta: "(Get-Item .\file.txt).DirectoryName"
tipo: completar
enunciado:
  - "Completa la propiedad del objeto `FileInfo` para obtener la ruta de la carpeta que contiene el archivo: `(Get-Item .\file.txt).___`"
pasos:
  - "Identificar la propiedad que devuelve la ruta del contenedor."
  - "Diferenciar de `FullName` o `Name`."
explicacion: "La propiedad `DirectoryName` devuelve la ruta de la carpeta padre. Si el archivo está en la raíz, puede devolver $null o la raíz misma dependiendo del provider."
```

### 19 — Cambiar fecha de modificación
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["set-itemproperty", "fechas"]
respuesta: "Set-ItemProperty -Path .\file.txt -Name LastWriteTime -Value (Get-Date '2023-01-01')"
tipo: completar
enunciado:
  - "Completa el comando para establecer la fecha de última escritura de `file.txt` al 1 de enero de 2023: `Set-ItemProperty -Path .\file.txt -Name LastWriteTime -Value ___`"
pasos:
  - "Identificar el cmdlet para modificar propiedades de objetos."
  - "Saber que las fechas se manejan con objetos `DateTime`."
explicacion: "`Set-ItemProperty` modifica propiedades del elemento. Para archivos, `LastWriteTime` es la propiedad de fecha de modificación. El valor debe ser un objeto `DateTime`."
```

### 20 — Verificar si es un enlace simbólico
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["get-item", "symlink"]
respuesta: "Get-Item -Path .\link -Force | Select-Object Target"
tipo: completar
enunciado:
  - "Completa el comando para ver a qué apunta un posible enlace simbólico `link`: `Get-Item -Path .\link -Force | Select-Object ___`"
pasos:
  - "Identificar la propiedad que revela la dirección de un enlace."
  - "Recordar que `-Force` es necesario para ver enlaces en algunos proveedores."
explicacion: "Para enlaces simbólicos o acortamientos (shortcuts), la propiedad `Target` contiene la ruta al elemento destino. `Get-Item` por sí solo a veces no lo muestra sin `-Force` o contexto específico."
```

### 21 — Listar archivos vacíos
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["where-object", "filtrado"]
respuesta: "Get-ChildItem -Path . -File | Where-Object { $_.Length -eq 0 }"
tipo: completar
enunciado:
  - "Completa el filtro para encontrar archivos de 0 bytes: `Get-ChildItem -Path . -File | Where-Object { $_.___ -eq 0 }`"
pasos:
  - "Identificar la propiedad que representa el tamaño del archivo."
  - "Completar la condición de igualdad."
explicacion: "La propiedad `Length` contiene el tamaño en bytes. Filtrar por `-eq 0` identifica archivos vacíos."
```

### 22 — Eliminar solo archivos .tmp
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["remove-item", "filtrado"]
respuesta: "Get-ChildItem -Path . -Filter '*.tmp' -File | Remove-Item"
tipo: completar
enunciado:
  - "Completa la tubería para eliminar todos los archivos `.tmp` en la carpeta actual: `Get-ChildItem -Path . -Filter '*.tmp' -File | ___`"
pasos:
  - "Identificar el cmdlet para eliminar elementos."
  - "Recordar que debe recibir objetos desde la tubería."
explicacion: "`Remove-Item` acepta objetos `FileInfo` desde la tubería y los elimina. El filtro previo asegura que solo se pasen archivos .tmp."
```

### 23 — Verificar si es una ruta válida en el proveedor
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["test-path", "proveedores"]
respuesta: "Test-Path -Path Registry::HKEY_CURRENT_USER\Software"
tipo: completar
enunciado:
  - "Completa el ejemplo de uso de `Test-Path` para verificar una ruta en el proveedor del Registro: `Test-Path -Path ___`"
pasos:
  - "Identificar la sintaxis de ruta completa para el proveedor Registry."
  - "Recordar que Test-Path es provider-agnostic."
explicacion: "Para el proveedor Registro, la sintaxis es `Registry::<Hive>\<Path>`. `Test-Path` funciona en todos los proveedores instalados."
```

### 24 -- Crear archivo de texto con contenido
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["set-content", "archivos"]
respuesta: "Set-Content -Path .\out.txt -Value 'Hola Mundo'"
tipo: completar
enunciado:
  - "Completa el cmdlet para crear o sobrescribir un archivo con una cadena de texto simple: `___ -Path .\out.txt -Value 'Hola Mundo'`"
pasos:
  - "Identificar el cmdlet para escribir contenido en archivos de texto."
  - "Diferenciar de `Add-Content` que append."
explicacion: "`Set-Content` crea el archivo si no existe o lo sobrescribe si existe, escribiendo el valor especificado. `Add-Content` añade al final."
```

### 25 -- Obtener nombre de archivo sin extensión
```yaml
metadata:
  materia: "powershell"
  tema: "sistema-de-archivos-powershell"
  nivel: "intermedio"
  tags: ["string", "propiedades"]
respuesta: "(Get-Item .\file.txt).BaseName"
tipo: completar
enunciado:
  - "Completa la propiedad del objeto `FileInfo` para obtener el nombre del archivo sin la extensión: `(Get-Item .\file.txt).___`"
pasos:
  - "Identificar la propiedad que devuelve el nombre base."
  - "Recordar que `Name` incluye la extensión."
explicacion: "La propiedad `BaseName` devuelve el nombre del archivo sin la extensión. Por ejemplo, para `file.txt` devuelve `file`."
```