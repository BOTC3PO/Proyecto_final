# PowerShell — Scripts .ps1 y automatización (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Ejecutar un script

```
metadata:
  materia: "powershell"
  tema: "automatizacion_ps1"
  nivel: "basico"
  tags: ["ejecutar"]

tipo: mc
opciones_explicitas: [".\\respaldo.ps1", "respaldo.ps1", "run respaldo.ps1", "./respaldo"]
respuesta: ".\\respaldo.ps1"

enunciado: "Con `respaldo.ps1` en la carpeta actual, ¿cómo se lo ejecuta?"

explicacion: |
  PowerShell no ejecuta por nombre lo que está en la carpeta actual: hay que escribir `.\` (y, si la política lo permite).
```

### 2 — Parámetros del script

```
metadata:
  materia: "powershell"
  tema: "automatizacion_ps1"
  nivel: "basico"
  tags: ["param"]

tipo: mc
opciones_explicitas: ["Con un bloque `param( ... )` al principio", "Con `input()`", "Con `Read-Args`", "No puede recibirlos"]
respuesta: "Con un bloque `param( ... )` al principio"

enunciado: "¿Cómo recibe argumentos un script?"

explicacion: |
  Se usa el mismo bloque `param` que en las funciones, y los argumentos se pasan con `-Nombre valor`.
```

### 3 — Carpeta del script

```
metadata:
  materia: "powershell"
  tema: "automatizacion_ps1"
  nivel: "intermedio"
  tags: ["psscriptroot"]

tipo: mc
opciones_explicitas: ["La carpeta donde está el script que se está ejecutando", "La carpeta actual de la consola", "El nombre del usuario", "La política de ejecución"]
respuesta: "La carpeta donde está el script que se está ejecutando"

enunciado: "¿Qué contiene la variable automática `$PSScriptRoot`?"

explicacion: |
  Sirve para armar rutas relativas al script, sin depender de la carpeta desde donde se lo lanzó.
```

### 4 — try/catch

```
metadata:
  materia: "powershell"
  tema: "automatizacion_ps1"
  nivel: "basico"
  tags: ["try"]

tipo: mc
opciones_explicitas: ["Para atrapar errores y reaccionar en vez de que el script se interrumpa o siga sin control", "Para repetir un bloque", "Para definir funciones", "Para ocultar el código"]
respuesta: "Para atrapar errores y reaccionar en vez de que el script se interrumpa o siga sin control"

enunciado: "¿Para qué sirve `try {{ ... }} catch {{ ... }}`?"

explicacion: |
  Lo que está en `try` se intenta ejecutar; si hay un error terminante, se pasa al `catch`.
```

### 5 — Errores que no terminan

```
metadata:
  materia: "powershell"
  tema: "automatizacion_ps1"
  nivel: "intermedio"
  tags: ["erroraction"]

tipo: mc
opciones_explicitas: ["Agregar `-ErrorAction Stop`", "Nada: lo atrapa siempre", "Agregar `-Force`", "Agregar `-Quiet`"]
respuesta: "Agregar `-ErrorAction Stop`"

enunciado: "¿Qué hace falta para que `try/catch` atrape el error de `Get-Content ruta-inexistente`?"

explicacion: |
  Muchos errores de cmdlets son **no terminantes** y `try/catch` no los ve. `-ErrorAction Stop` los vuelve terminantes.
```

### 6 — finally

```
metadata:
  materia: "powershell"
  tema: "automatizacion_ps1"
  nivel: "basico"
  tags: ["finally"]

tipo: mc
opciones_explicitas: ["Siempre, haya habido error o no", "Solo si hay error", "Solo si no hay error", "Nunca"]
respuesta: "Siempre, haya habido error o no"

enunciado: "¿Cuándo se ejecuta el bloque `finally`?"

explicacion: |
  Sirve para limpiar: cerrar archivos, borrar temporales, etc.
```

### 7 — El error actual

```
metadata:
  materia: "powershell"
  tema: "automatizacion_ps1"
  nivel: "intermedio"
  tags: ["catch"]

tipo: mc
opciones_explicitas: ["El error que se produjo", "El último comando exitoso", "Una lista vacía", "El nombre del script"]
respuesta: "El error que se produjo"

enunciado: "Dentro de un bloque `catch`, ¿qué contiene `$_`?"

explicacion: |
  `$_.Exception.Message` da el texto del error.
```

### 8 — Todos terminantes

```
metadata:
  materia: "powershell"
  tema: "automatizacion_ps1"
  nivel: "intermedio"
  tags: ["erroraction"]

tipo: mc
opciones_explicitas: ["Hace que todos los errores sean terminantes", "Oculta todos los errores", "Detiene PowerShell", "Cambia el idioma de los errores"]
respuesta: "Hace que todos los errores sean terminantes"

enunciado: "¿Qué hace `$ErrorActionPreference = 'Stop'`?"

explicacion: |
  Es útil en scripts: ante un fallo, se corta en vez de seguir como si nada.
```

### 9 — Registro

```
metadata:
  materia: "powershell"
  tema: "automatizacion_ps1"
  nivel: "basico"
  tags: ["transcript"]

tipo: mc
opciones_explicitas: ["Guarda en `log.txt` todo lo que pasa en la sesión", "Inicia el modo de transcripción de voz", "Mide el tiempo del script", "Escribe el script en el disco"]
respuesta: "Guarda en `log.txt` todo lo que pasa en la sesión"

enunciado: "¿Qué hace `Start-Transcript -Path log.txt`?"

explicacion: |
  Se cierra con `Stop-Transcript`. Es una forma sencilla de registrar la salida de una tarea programada.
```

### 10 — Programar

```
metadata:
  materia: "powershell"
  tema: "automatizacion_ps1"
  nivel: "basico"
  tags: ["tareas"]

tipo: mc
opciones_explicitas: ["El Programador de tareas", "El Explorador de archivos", "El Administrador de dispositivos", "El Visor de eventos"]
respuesta: "El Programador de tareas"

enunciado: "¿Qué herramienta de Windows ejecuta scripts a horarios fijos?"

explicacion: |
  Se puede administrar desde PowerShell con `Register-ScheduledTask` y compañía.
```

### 11 — Rutas en tareas

```
metadata:
  materia: "powershell"
  tema: "automatizacion_ps1"
  nivel: "basico"
  tags: ["rutas"]

tipo: mc
opciones_explicitas: ["Rutas absolutas", "Rutas relativas a la carpeta actual", "Rutas con alias", "Rutas copiadas de otra máquina"]
respuesta: "Rutas absolutas"

enunciado: "¿Qué conviene usar dentro de un script que correrá como tarea programada?"

explicacion: |
  La tarea no arranca en la carpeta del script ni con tu entorno: las rutas relativas fallan.
```

### 12 — Probar sin riesgo

```
metadata:
  materia: "powershell"
  tema: "automatizacion_ps1"
  nivel: "basico"
  tags: ["whatif"]

tipo: mc
opciones_explicitas: ["Usando `-WhatIf`", "Usando `-Force`", "Ejecutándolo como administrador", "Usando `-Confirm:$false`"]
respuesta: "Usando `-WhatIf`"

enunciado: "¿Cómo se puede probar un script que borra archivos sin borrar nada de verdad?"

explicacion: |
  `-WhatIf` muestra lo que se haría, sin hacerlo.
```

### 13 — Contraseñas

```
metadata:
  materia: "powershell"
  tema: "automatizacion_ps1"
  nivel: "basico"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["Pidiéndola con `Get-Credential` o usando un almacén de secretos", "Escribiéndola en el script", "Escribiéndola en un comentario", "Guardándola en un archivo de texto"]
respuesta: "Pidiéndola con `Get-Credential` o usando un almacén de secretos"

enunciado: "¿Cómo se maneja una contraseña en un script?"

explicacion: |
  Una contraseña escrita en un script termina en copias de seguridad, repositorios y capturas de pantalla.
```

### 14 — Validar la entrada

```
metadata:
  materia: "powershell"
  tema: "automatizacion_ps1"
  nivel: "avanzado"
  tags: ["validar"]

tipo: mc
opciones_explicitas: ["Para aceptar solo rutas que existen", "Para crear la ruta", "Para borrar la ruta", "Para ejecutar el script"]
respuesta: "Para aceptar solo rutas que existen"

enunciado: "¿Para qué sirve `[ValidateScript({{ Test-Path $_ }})]` en un parámetro?"

explicacion: |
  Si el valor no cumple la condición, PowerShell da error antes de ejecutar el script.
```

### 15 — StrictMode

```
metadata:
  materia: "powershell"
  tema: "automatizacion_ps1"
  nivel: "avanzado"
  tags: ["strictmode"]

tipo: mc
opciones_explicitas: ["Da error al usar variables no definidas y otras malas prácticas", "Hace el script más rápido", "Cifra el script", "Impide ejecutar el script"]
respuesta: "Da error al usar variables no definidas y otras malas prácticas"

enunciado: "¿Qué hace `Set-StrictMode -Version Latest`?"

explicacion: |
  Ayuda a detectar errores de tipeo en nombres de variables.
```

### 16 — Mejor nombre

```
metadata:
  materia: "powershell"
  tema: "automatizacion_ps1"
  nivel: "basico"
  tags: ["alias"]

tipo: mc
opciones_explicitas: ["Usar el nombre completo de los cmdlets en lugar de alias", "Usar siempre los alias", "Usar alias solo en funciones", "Da lo mismo"]
respuesta: "Usar el nombre completo de los cmdlets en lugar de alias"

enunciado: "En un script, ¿qué es preferible?"

explicacion: |
  `Get-ChildItem` se entiende; `gci` hay que conocerlo, y los alias pueden cambiar entre equipos.
```

### 17 — Un propósito

```
metadata:
  materia: "powershell"
  tema: "automatizacion_ps1"
  nivel: "basico"
  tags: ["buenas practicas"]

tipo: mc
opciones_explicitas: ["Que haga una sola cosa bien y reciba los datos por parámetros", "Que haga todo", "Que no tenga parámetros", "Que use rutas fijas de la computadora donde se escribió"]
respuesta: "Que haga una sola cosa bien y reciba los datos por parámetros"

enunciado: "¿Cuál es una buena práctica de diseño para un script?"

explicacion: |
  Parámetros y un propósito claro hacen el script reutilizable y fácil de probar.
```

### 18 — Cuándo falla

```
metadata:
  materia: "powershell"
  tema: "automatizacion_ps1"
  nivel: "basico"
  tags: ["diagnostico"]

tipo: mc
opciones_explicitas: ["Agregar un registro (log) y ejecutar el script a mano con la misma cuenta", "Borrar la tarea", "Reiniciar el servidor siempre", "Darle permisos de administrador a todo"]
respuesta: "Agregar un registro (log) y ejecutar el script a mano con la misma cuenta"

enunciado: "Una tarea programada con un script falla sin mostrar nada. ¿Qué conviene hacer primero?"

explicacion: |
  Sin registro, no hay forma de ver qué pasó. Probar a mano con la misma cuenta descubre muchos problemas de permisos y rutas.
```

### 19 — Ejecutar con otra versión

```
metadata:
  materia: "powershell"
  tema: "automatizacion_ps1"
  nivel: "avanzado"
  tags: ["versiones"]

tipo: mc
opciones_explicitas: ["powershell.exe", "pwsh.exe", "ps.exe", "psh.exe"]
respuesta: "powershell.exe"

enunciado: "¿Cuál es el ejecutable de Windows PowerShell (5.1)?"

explicacion: |
  `pwsh.exe` es PowerShell 7 (el multiplataforma). Las dos versiones pueden convivir.
```

### 20 — Cuenta de ejecución

```
metadata:
  materia: "powershell"
  tema: "automatizacion_ps1"
  nivel: "intermedio"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["Con una que tenga solo los permisos necesarios", "Siempre con el administrador", "Con cualquiera", "Sin cuenta"]
respuesta: "Con una que tenga solo los permisos necesarios"

enunciado: "¿Con qué cuenta conviene que corra una tarea programada de respaldo?"

explicacion: |
  Aplicar el principio de mínimo privilegio reduce el daño si el script falla o se vulnera.
```

