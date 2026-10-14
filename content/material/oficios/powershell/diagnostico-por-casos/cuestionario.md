# PowerShell — Diagnóstico de scripts por casos (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Primer paso

```
metadata:
  materia: "powershell"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["metodo"]

tipo: mc
opciones_explicitas: ["Leer el mensaje completo", "Reinstalar PowerShell", "Reiniciar el equipo", "Agregar `-Force`"]
respuesta: "Leer el mensaje completo"

enunciado: "Un comando de PowerShell falla con un mensaje de error. ¿Qué es lo primero que conviene hacer?"

explicacion: |
  El mensaje dice el comando, la línea y suele explicar el motivo.
```

### 2 — Scripts deshabilitados

```
metadata:
  materia: "powershell"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["politica"]

tipo: mc
opciones_explicitas: ["La política de ejecución es `Restricted`", "El archivo está vacío", "Falta el módulo", "No hay conexión"]
respuesta: "La política de ejecución es `Restricted`"

enunciado: "Al ejecutar `.\\respaldo.ps1` aparece: `running scripts is disabled on this system`. ¿Cuál es la causa?"

explicacion: |
  Se revisa con `Get-ExecutionPolicy` y se ajusta con `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` (después de leer el script).
```

### 3 — No reconocido

```
metadata:
  materia: "powershell"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["cmdlet"]

tipo: mc
opciones_explicitas: ["El nombre está mal escrito: el cmdlet es `Get-Process`", "Falta una política de ejecución", "Es un error de red", "El proceso no existe"]
respuesta: "El nombre está mal escrito: el cmdlet es `Get-Process`"

enunciado: "`Obtener-Process : The term 'Obtener-Process' is not recognized as the name of a cmdlet`. ¿Qué pasó?"

explicacion: |
  Los nombres de cmdlets son en inglés y con el patrón Verbo-Sustantivo. `Get-Command *process*` ayuda a encontrarlo.
```

### 4 — Falta el .\

```
metadata:
  materia: "powershell"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["ruta"]

tipo: mc
opciones_explicitas: ["Falta el `.\\`: PowerShell no ejecuta lo de la carpeta actual por nombre", "El archivo no existe", "El archivo es de solo lectura", "Falta la extensión"]
respuesta: "Falta el `.\\`: PowerShell no ejecuta lo de la carpeta actual por nombre"

enunciado: "Con `respaldo.ps1` en la carpeta actual, escribir `respaldo.ps1` da un error de \"not recognized\". ¿Cuál es la causa?"

explicacion: |
  Se escribe `.\respaldo.ps1`.
```

### 5 — Acceso denegado

```
metadata:
  materia: "powershell"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["permisos"]

tipo: mc
opciones_explicitas: ["Que PowerShell esté abierto como administrador", "Que el servicio exista", "Que haya internet", "Que `Spooler` esté en minúsculas"]
respuesta: "Que PowerShell esté abierto como administrador"

enunciado: "`Stop-Service Spooler` dice `Access is denied`. ¿Qué se revisa primero?"

explicacion: |
  Detener servicios y procesos del sistema requiere permisos elevados.
```

### 6 — Ruta con espacios

```
metadata:
  materia: "powershell"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["comillas"]

tipo: mc
opciones_explicitas: ["El espacio parte la ruta en dos; hay que poner la ruta entre comillas", "Hay que usar mayúsculas", "Falta `-Force`", "Hay que usar `/`"]
respuesta: "El espacio parte la ruta en dos; hay que poner la ruta entre comillas"

enunciado: "`Get-ChildItem C:\\Mis Documentos` falla. ¿Cuál es la causa y la solución?"

explicacion: |
  `Get-ChildItem "C:\Mis Documentos"`. Las rutas con espacios siempre van entre comillas.
```

### 7 — Archivo con nombre raro

```
metadata:
  materia: "powershell"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["operadores"]

tipo: mc
opciones_explicitas: ["`>` es una redirección, no una comparación: hay que usar `-gt`", "Un error de disco", "Un virus", "Una función propia de `Where-Object`"]
respuesta: "`>` es una redirección, no una comparación: hay que usar `-gt`"

enunciado: "Se ejecuta `Get-Process | Where-Object {{ $_.CPU > 100 }}` y aparece un archivo llamado `100` en la carpeta. ¿Qué pasó?"

explicacion: |
  En PowerShell los operadores de comparación llevan guion: `-gt`, `-lt`, `-eq`.
```

### 8 — if siempre verdadero

```
metadata:
  materia: "powershell"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["asignacion"]

tipo: mc
opciones_explicitas: ["Asigna 'Stopped' a `$estado` (resultado verdadero) en lugar de comparar", "Porque `if` no funciona con texto", "Porque faltan las llaves", "Porque `$estado` es global"]
respuesta: "Asigna 'Stopped' a `$estado` (resultado verdadero) en lugar de comparar"

enunciado: "`if ($estado = 'Stopped') {{ ... }}` siempre entra al bloque. ¿Por qué?"

explicacion: |
  Hay que escribir `-eq` para comparar.
```

### 9 — CSV con basura

```
metadata:
  materia: "powershell"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["format"]

tipo: mc
opciones_explicitas: ["Se usó `Format-Table` antes de `Export-Csv`", "Faltó `-Force`", "El archivo era muy grande", "La política de ejecución"]
respuesta: "Se usó `Format-Table` antes de `Export-Csv`"

enunciado: "Un CSV exportado tiene columnas raras como `ClassId2e4f51ef...`. ¿Cuál es la causa más probable?"

explicacion: |
  `Format-*` genera objetos de formato. Se exporta primero y se formatea solo al mostrar.
```

### 10 — Tipo incorrecto

```
metadata:
  materia: "powershell"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["tipos"]

tipo: mc
opciones_explicitas: ["Se pasó un texto a un parámetro que exige un número entero", "Falta un módulo", "Falta una política", "El disco está lleno"]
respuesta: "Se pasó un texto a un parámetro que exige un número entero"

enunciado: "`Cannot convert value \"abc\" to type \"System.Int32\"`. ¿Qué indica?"

explicacion: |
  Hay que revisar el tipo del parámetro (`[int]`) y el valor que llega.
```

### 11 — Función con salida de más

```
metadata:
  materia: "powershell"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["salida"]

tipo: mc
opciones_explicitas: ["Hay instrucciones que emiten valores sin capturarlos", "PowerShell no permite devolver números", "Falta `Write-Host`", "Falta el bloque `param`"]
respuesta: "Hay instrucciones que emiten valores sin capturarlos"

enunciado: "Una función debería devolver un número, pero devuelve una lista con otros valores. ¿Cuál es la causa habitual?"

explicacion: |
  Todo lo que se emite sin capturar es salida. Se descarta con `$null = ...` o `| Out-Null`.
```

### 12 — Error que no atrapa

```
metadata:
  materia: "powershell"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["erroraction"]

tipo: mc
opciones_explicitas: ["Agregar `-ErrorAction Stop`", "Agregar `-Force`", "Cambiar `catch` por `finally`", "Usar `Write-Host`"]
respuesta: "Agregar `-ErrorAction Stop`"

enunciado: "Un `try/catch` no atrapa el error de `Get-Item C:\\inexistente`. ¿Cuál es la solución?"

explicacion: |
  Muchos errores de cmdlets son no terminantes y `try/catch` no los ve hasta volverlos terminantes.
```

### 13 — Ver el error completo

```
metadata:
  materia: "powershell"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["error"]

tipo: mc
opciones_explicitas: ["$Error[0] | Format-List * -Force", "Get-LastError", "$LastError", "Show-Error"]
respuesta: "$Error[0] | Format-List * -Force"

enunciado: "¿Cómo se ve el último error con todos los detalles?"

explicacion: |
  `$Error` es la lista de errores recientes; el primero es el último ocurrido.
```

### 14 — Propiedad inexistente

```
metadata:
  materia: "powershell"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["propiedades"]

tipo: mc
opciones_explicitas: ["`Memoria` no es una propiedad del objeto (es `WorkingSet`)", "`100MB` no existe", "Falta `Sort-Object`", "`Where-Object` está roto"]
respuesta: "`Memoria` no es una propiedad del objeto (es `WorkingSet`)"

enunciado: "`Get-Process | Where-Object {{ $_.Memoria -gt 100MB }}` no devuelve nada, sin error. ¿Cuál es la causa más probable?"

explicacion: |
  Una propiedad que no existe vale `$null`: la comparación nunca se cumple. `Get-Member` muestra los nombres correctos.
```

### 15 — Borrado masivo

```
metadata:
  materia: "powershell"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["peligro"]

tipo: mc
opciones_explicitas: ["Probar con `-WhatIf` y confirmar la ruta con `Test-Path`", "Ejecutarlo directamente", "Ejecutarlo como administrador", "Agregar `-Force`"]
respuesta: "Probar con `-WhatIf` y confirmar la ruta con `Test-Path`"

enunciado: "¿Qué conviene hacer antes de ejecutar `Get-ChildItem C:\\Datos | Remove-Item`?"

explicacion: |
  `Remove-Item` no usa la papelera: un error de ruta puede borrar mucho más de lo deseado.
```

### 16 — Traza

```
metadata:
  materia: "powershell"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["traza"]

tipo: mc
opciones_explicitas: ["Ver cada línea del script a medida que se ejecuta", "Cifrar el script", "Acelerar el script", "Ver solo errores"]
respuesta: "Ver cada línea del script a medida que se ejecuta"

enunciado: "¿Qué permite `Set-PSDebug -Trace 1`?"

explicacion: |
  Es una traza simple; para algo más fino hay un depurador con puntos de interrupción (VS Code).
```

### 17 — Módulo no importado

```
metadata:
  materia: "powershell"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["modulos"]

tipo: mc
opciones_explicitas: ["Si el módulo está instalado e importado (`Get-Module -ListAvailable`, `Import-Module`)", "Si hay antivirus", "Si el reloj está bien", "Si la resolución de pantalla es correcta"]
respuesta: "Si el módulo está instalado e importado (`Get-Module -ListAvailable`, `Import-Module`)"

enunciado: "Un cmdlet de un módulo propio da `not recognized`. ¿Qué se revisa?"

explicacion: |
  Los cmdlets de módulos no cargados no se reconocen hasta importar el módulo (muchos se importan solos al usarse).
```

### 18 — Una cosa a la vez

```
metadata:
  materia: "powershell"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["metodo"]

tipo: mc
opciones_explicitas: ["Corregir esa sola cosa y volver a probar", "Cambiar varias cosas a la vez", "Reinstalar el sistema", "Ignorarla"]
respuesta: "Corregir esa sola cosa y volver a probar"

enunciado: "Después de encontrar una posible causa, ¿cuál es el mejor siguiente paso?"

explicacion: |
  Si se cambian varias cosas juntas, no se sabe cuál resolvió el problema.
```

### 19 — Variable que desaparece

```
metadata:
  materia: "powershell"
  tema: "diagnostico_por_casos"
  nivel: "avanzado"
  tags: ["ambito"]

tipo: mc
opciones_explicitas: ["En PowerShell, asignar dentro de una función crea una variable local", "Porque PowerShell es lento", "Porque `$total` es de solo lectura", "Porque falta `return`"]
respuesta: "En PowerShell, asignar dentro de una función crea una variable local"

enunciado: "Dentro de una función se asigna `$total = 10` y, al salir, `$total` del script no cambió. ¿Por qué?"

explicacion: |
  Para modificar la del script hay que usar el ámbito (`$script:total`) o devolver el valor.
```

### 20 — Qué hay detrás

```
metadata:
  materia: "powershell"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["permisos"]

tipo: mc
opciones_explicitas: ["El usuario con el que se ejecuta y sus permisos", "Si el equipo es nuevo", "El color del tema", "La cantidad de memoria"]
respuesta: "El usuario con el que se ejecuta y sus permisos"

enunciado: "Un script que funciona en tu equipo falla en otro con `Access is denied`. ¿Qué se revisa primero?"

explicacion: |
  La misma instrucción puede funcionar o no según los permisos de la cuenta.
```

