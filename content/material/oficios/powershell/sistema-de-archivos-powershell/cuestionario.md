# PowerShell — Archivos y carpetas (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Listar

```
metadata:
  materia: "powershell"
  tema: "sistema_de_archivos_powershell"
  nivel: "basico"
  tags: ["listar"]

tipo: mc
opciones_explicitas: ["Get-ChildItem", "Get-Folder", "List-Items", "Show-Directory"]
respuesta: "Get-ChildItem"

enunciado: "¿Qué cmdlet lista el contenido de una carpeta?"

explicacion: |
  Sus alias son `ls`, `dir` y `gci`.
```

### 2 — Carpeta actual

```
metadata:
  materia: "powershell"
  tema: "sistema_de_archivos_powershell"
  nivel: "basico"
  tags: ["ubicacion"]

tipo: mc
opciones_explicitas: ["Get-Location", "Get-Folder", "Show-Path", "Get-Current"]
respuesta: "Get-Location"

enunciado: "¿Qué cmdlet muestra la carpeta actual?"

explicacion: |
  El alias es `pwd`. `Set-Location` (alias `cd`) cambia de carpeta.
```

### 3 — Buscar archivos

```
metadata:
  materia: "powershell"
  tema: "sistema_de_archivos_powershell"
  nivel: "basico"
  tags: ["recurse"]

tipo: mc
opciones_explicitas: ["Busca los archivos .log en `C:\\Datos` y sus subcarpetas", "Borra los .log", "Cuenta las carpetas", "Copia los .log"]
respuesta: "Busca los archivos .log en `C:\\Datos` y sus subcarpetas"

enunciado: "¿Qué hace `Get-ChildItem C:\\Datos -Recurse -Filter *.log`?"

explicacion: |
  `-Recurse` incluye las subcarpetas y `-Filter` filtra por nombre en el origen.
```

### 4 — Solo archivos

```
metadata:
  materia: "powershell"
  tema: "sistema_de_archivos_powershell"
  nivel: "intermedio"
  tags: ["file"]

tipo: mc
opciones_explicitas: ["-File", "-OnlyFiles", "-Files", "-Type File"]
respuesta: "-File"

enunciado: "¿Qué opción de `Get-ChildItem` muestra solo archivos y deja afuera las carpetas?"

explicacion: |
  Existe también `-Directory` para lo contrario.
```

### 5 — Ocultos

```
metadata:
  materia: "powershell"
  tema: "sistema_de_archivos_powershell"
  nivel: "intermedio"
  tags: ["force"]

tipo: mc
opciones_explicitas: ["-Force", "-Hidden solamente", "-All", "-Show"]
respuesta: "-Force"

enunciado: "¿Qué parámetro hace que `Get-ChildItem` incluya archivos ocultos?"

explicacion: |
  `-Force` incluye ocultos y de sistema. `-Hidden` muestra **solo** los ocultos.
```

### 6 — Existe la ruta

```
metadata:
  materia: "powershell"
  tema: "sistema_de_archivos_powershell"
  nivel: "basico"
  tags: ["test-path"]

tipo: mc
opciones_explicitas: ["Test-Path C:\\Datos", "Exists C:\\Datos", "Get-Path C:\\Datos", "Find C:\\Datos"]
respuesta: "Test-Path C:\\Datos"

enunciado: "¿Cómo se verifica que una ruta existe?"

explicacion: |
  Devuelve `$true` o `$false`.
```

### 7 — Crear una carpeta

```
metadata:
  materia: "powershell"
  tema: "sistema_de_archivos_powershell"
  nivel: "basico"
  tags: ["new-item"]

tipo: mc
opciones_explicitas: ["New-Item -ItemType Directory -Path C:\\Respaldo", "New-Folder C:\\Respaldo", "Create-Item C:\\Respaldo", "mkdir C:\\Respaldo -File"]
respuesta: "New-Item -ItemType Directory -Path C:\\Respaldo"

enunciado: "¿Cómo se crea la carpeta `C:\\Respaldo`?"

explicacion: |
  `New-Item` crea archivos o carpetas según `-ItemType`. (`mkdir` también existe como alias de una función.)
```

### 8 — Copiar

```
metadata:
  materia: "powershell"
  tema: "sistema_de_archivos_powershell"
  nivel: "basico"
  tags: ["copy-item"]

tipo: mc
opciones_explicitas: ["Copia los archivos .txt de `C:\\Datos` a `C:\\Respaldo`", "Mueve los archivos", "Borra los .txt", "Renombra los .txt"]
respuesta: "Copia los archivos .txt de `C:\\Datos` a `C:\\Respaldo`"

enunciado: "¿Qué hace `Copy-Item C:\\Datos\\*.txt -Destination C:\\Respaldo`?"

explicacion: |
  La copia deja los originales en su lugar. `Move-Item` los mueve.
```

### 9 — Copiar carpetas

```
metadata:
  materia: "powershell"
  tema: "sistema_de_archivos_powershell"
  nivel: "intermedio"
  tags: ["recurse"]

tipo: mc
opciones_explicitas: ["-Recurse", "-All", "-Deep", "-Folders"]
respuesta: "-Recurse"

enunciado: "¿Qué parámetro se necesita para copiar una carpeta con todo su contenido?"

explicacion: |
  Sin `-Recurse`, solo se copia la carpeta vacía (según el caso).
```

### 10 — Mover

```
metadata:
  materia: "powershell"
  tema: "sistema_de_archivos_powershell"
  nivel: "basico"
  tags: ["move-item"]

tipo: mc
opciones_explicitas: ["Move-Item", "Shift-Item", "Transfer-Item", "Send-Item"]
respuesta: "Move-Item"

enunciado: "¿Qué cmdlet mueve un archivo de lugar?"

explicacion: |
  También sirve para renombrar, aunque existe `Rename-Item`.
```

### 11 — Renombrar

```
metadata:
  materia: "powershell"
  tema: "sistema_de_archivos_powershell"
  nivel: "basico"
  tags: ["rename"]

tipo: mc
opciones_explicitas: ["Rename-Item", "Change-Name", "Set-Name", "Edit-Item"]
respuesta: "Rename-Item"

enunciado: "¿Qué cmdlet cambia el nombre de un archivo?"

explicacion: |
  `Rename-Item nota.txt notas.txt`.
```

### 12 — Borrar

```
metadata:
  materia: "powershell"
  tema: "sistema_de_archivos_powershell"
  nivel: "basico"
  tags: ["remove-item"]

tipo: mc
opciones_explicitas: ["Borra los archivos .tmp de la carpeta, sin enviarlos a la papelera", "Los envía a la papelera", "Los mueve a una carpeta oculta", "Los copia"]
respuesta: "Borra los archivos .tmp de la carpeta, sin enviarlos a la papelera"

enunciado: "¿Qué hace `Remove-Item C:\\Temp\\*.tmp`?"

explicacion: |
  No se pueden recuperar. Por eso se prueba antes con `-WhatIf`.
```

### 13 — Antes de borrar

```
metadata:
  materia: "powershell"
  tema: "sistema_de_archivos_powershell"
  nivel: "basico"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["Usar `-WhatIf` o listar primero con `Get-ChildItem`", "Borrar y ver qué pasa", "Usar `-Force`", "Ejecutar como administrador"]
respuesta: "Usar `-WhatIf` o listar primero con `Get-ChildItem`"

enunciado: "¿Cuál es una buena práctica antes de borrar con comodines?"

explicacion: |
  Ver qué se va a borrar evita perder archivos por un patrón mal escrito.
```

### 14 — Leer

```
metadata:
  materia: "powershell"
  tema: "sistema_de_archivos_powershell"
  nivel: "basico"
  tags: ["get-content"]

tipo: mc
opciones_explicitas: ["Get-Content", "Read-File", "Open-File", "Show-File"]
respuesta: "Get-Content"

enunciado: "¿Qué cmdlet lee el contenido de un archivo de texto?"

explicacion: |
  Su alias es `cat`. Entrega una línea por objeto.
```

### 15 — Últimas líneas

```
metadata:
  materia: "powershell"
  tema: "sistema_de_archivos_powershell"
  nivel: "basico"
  tags: ["tail"]

tipo: mc
opciones_explicitas: ["Muestra las últimas 20 líneas", "Muestra las primeras 20", "Cuenta 20 líneas", "Borra 20 líneas"]
respuesta: "Muestra las últimas 20 líneas"

enunciado: "¿Qué hace `Get-Content servidor.log -Tail 20`?"

explicacion: |
  `-Tail` toma las últimas; con `-Wait` sigue mostrando lo que se agrega (como `tail -f`).
```

### 16 — Reemplazar o agregar

```
metadata:
  materia: "powershell"
  tema: "sistema_de_archivos_powershell"
  nivel: "basico"
  tags: ["add-content"]

tipo: mc
opciones_explicitas: ["Add-Content", "Set-Content", "New-Content", "Write-File"]
respuesta: "Add-Content"

enunciado: "¿Qué cmdlet AGREGA texto al final de un archivo, sin borrar lo que ya tiene?"

explicacion: |
  `Set-Content` y `>` reemplazan; `Add-Content` y `>>` agregan.
```

### 17 — Buscar texto

```
metadata:
  materia: "powershell"
  tema: "sistema_de_archivos_powershell"
  nivel: "basico"
  tags: ["select-string"]

tipo: mc
opciones_explicitas: ["Select-String", "Find-Text", "Search-Content", "Get-Text"]
respuesta: "Select-String"

enunciado: "¿Qué cmdlet busca un texto dentro de los archivos (como grep)?"

explicacion: |
  `Select-String -Path *.log -Pattern ERROR` muestra las líneas que lo contienen.
```

### 18 — Armar rutas

```
metadata:
  materia: "powershell"
  tema: "sistema_de_archivos_powershell"
  nivel: "intermedio"
  tags: ["join-path"]

tipo: mc
opciones_explicitas: ["Join-Path", "Merge-Path", "Build-Path", "Add-Path"]
respuesta: "Join-Path"

enunciado: "¿Qué cmdlet arma rutas de forma segura?"

explicacion: |
  `Join-Path $HOME "Respaldo"` une las partes con el separador correcto.
```

### 19 — Tamaño

```
metadata:
  materia: "powershell"
  tema: "sistema_de_archivos_powershell"
  nivel: "intermedio"
  tags: ["constantes"]

tipo: mc
opciones_explicitas: ["1048576, un megabyte expresado en bytes", "1000", "1", "Un error"]
respuesta: "1048576, un megabyte expresado en bytes"

enunciado: "¿Qué da `1MB` en PowerShell?"

explicacion: |
  `KB`, `MB` y `GB` son constantes del lenguaje (potencias de 1024).
```

### 20 — Variable de usuario

```
metadata:
  materia: "powershell"
  tema: "sistema_de_archivos_powershell"
  nivel: "intermedio"
  tags: ["env"]

tipo: mc
opciones_explicitas: ["$env:USERNAME", "$USERNAME", "%USERNAME%", "Get-User"]
respuesta: "$env:USERNAME"

enunciado: "¿Cómo se obtiene el nombre del usuario con las variables de entorno?"

explicacion: |
  Las variables de entorno se leen con el prefijo `$env:`. (`%USERNAME%` es la sintaxis del símbolo del sistema clásico.)
```

