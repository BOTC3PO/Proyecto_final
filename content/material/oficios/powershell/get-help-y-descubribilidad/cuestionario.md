# PowerShell — Ayuda y descubrimiento de comandos (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Buscar comandos

```
metadata:
  materia: "powershell"
  tema: "get_help_y_descubribilidad"
  nivel: "basico"
  tags: ["get-command"]

tipo: mc
opciones_explicitas: ["Get-Command", "Get-Help", "Find-All", "Search-Command"]
respuesta: "Get-Command"

enunciado: "¿Qué cmdlet sirve para encontrar comandos disponibles?"

explicacion: |
  `Get-Command *service*` lista todo lo que tenga "service" en el nombre.
```

### 2 — Buscar por patrón

```
metadata:
  materia: "powershell"
  tema: "get_help_y_descubribilidad"
  nivel: "basico"
  tags: ["get-command"]

tipo: mc
opciones_explicitas: ["Lista los comandos cuyo nombre contiene \"process\"", "Lista los procesos del sistema", "Detiene todos los procesos", "Muestra la ayuda de Process"]
respuesta: "Lista los comandos cuyo nombre contiene \"process\""

enunciado: "¿Qué hace `Get-Command *process*`?"

explicacion: |
  El asterisco es un comodín. No ejecuta nada: solo busca comandos.
```

### 3 — Ayuda de un comando

```
metadata:
  materia: "powershell"
  tema: "get_help_y_descubribilidad"
  nivel: "basico"
  tags: ["get-help"]

tipo: mc
opciones_explicitas: ["Get-Help", "Get-Info", "Help-Me", "Show-Help"]
respuesta: "Get-Help"

enunciado: "¿Qué cmdlet muestra la ayuda de un comando?"

explicacion: |
  Se escribe `Get-Help NombreDelComando` (o `man NombreDelComando`).
```

### 4 — Ver ejemplos

```
metadata:
  materia: "powershell"
  tema: "get_help_y_descubribilidad"
  nivel: "basico"
  tags: ["examples"]

tipo: mc
opciones_explicitas: ["Get-Help Get-Process -Examples", "Get-Help Get-Process -Full", "Get-Process -Examples", "Get-Example Get-Process"]
respuesta: "Get-Help Get-Process -Examples"

enunciado: "¿Cómo se ven solo los ejemplos de uso de `Get-Process`?"

explicacion: |
  `-Examples` es la forma más rápida de aprender a usar un comando. `-Full` muestra toda la ayuda.
```

### 5 — Todo

```
metadata:
  materia: "powershell"
  tema: "get_help_y_descubribilidad"
  nivel: "basico"
  tags: ["full"]

tipo: mc
opciones_explicitas: ["Muestra la ayuda completa, con todos los detalles de parámetros", "Muestra solo los ejemplos", "Ejecuta el comando", "Muestra la ayuda en otra ventana"]
respuesta: "Muestra la ayuda completa, con todos los detalles de parámetros"

enunciado: "¿Qué hace `Get-Help Get-Process -Full`?"

explicacion: |
  `-Full` muestra descripción, sintaxis, parámetros y ejemplos.
```

### 6 — Ayuda en la web

```
metadata:
  materia: "powershell"
  tema: "get_help_y_descubribilidad"
  nivel: "intermedio"
  tags: ["online"]

tipo: mc
opciones_explicitas: ["Abre la página de ayuda del comando en el navegador", "Descarga la ayuda en el disco", "Ejecuta el comando en un servidor", "Activa el modo en línea de PowerShell"]
respuesta: "Abre la página de ayuda del comando en el navegador"

enunciado: "¿Qué hace `Get-Help Get-Process -Online`?"

explicacion: |
  Es útil cuando la ayuda local no está actualizada.
```

### 7 — Actualizar la ayuda

```
metadata:
  materia: "powershell"
  tema: "get_help_y_descubribilidad"
  nivel: "intermedio"
  tags: ["update-help"]

tipo: mc
opciones_explicitas: ["Update-Help", "Upgrade-Help", "Get-NewHelp", "Refresh-Help"]
respuesta: "Update-Help"

enunciado: "¿Qué cmdlet descarga las páginas de ayuda más recientes?"

explicacion: |
  Suele ejecutarse con permisos de administrador. Sin esto, la ayuda local de algunos comandos puede estar incompleta.
```

### 8 — Parámetro opcional

```
metadata:
  materia: "powershell"
  tema: "get_help_y_descubribilidad"
  nivel: "intermedio"
  tags: ["sintaxis"]

tipo: mc
opciones_explicitas: ["Es opcional", "Es obligatorio", "Está obsoleto", "Solo lo usa el administrador"]
respuesta: "Es opcional"

enunciado: "En la ayuda, un parámetro escrito como `[-Name]` significa que..."

explicacion: |
  Los corchetes indican opcional; si no hay corchetes, hay que dar el parámetro.
```

### 9 — Qué hace Get-Member

```
metadata:
  materia: "powershell"
  tema: "get_help_y_descubribilidad"
  nivel: "basico"
  tags: ["get-member"]

tipo: mc
opciones_explicitas: ["Para ver el tipo, las propiedades y los métodos de un objeto", "Para ver los usuarios de un grupo", "Para mostrar los miembros de un equipo", "Para ejecutar métodos"]
respuesta: "Para ver el tipo, las propiedades y los métodos de un objeto"

enunciado: "¿Para qué sirve `Get-Member`?"

explicacion: |
  Con `Get-Process | Get-Member` se descubre qué propiedades (por ejemplo `Id`, `CPU`) se pueden usar.
```

### 10 — Propiedad o método

```
metadata:
  materia: "powershell"
  tema: "get_help_y_descubribilidad"
  nivel: "intermedio"
  tags: ["get-member"]

tipo: mc
opciones_explicitas: ["La propiedad es un dato del objeto; el método es una acción que el objeto puede hacer", "Son lo mismo", "La propiedad es una acción", "El método es un dato"]
respuesta: "La propiedad es un dato del objeto; el método es una acción que el objeto puede hacer"

enunciado: "En la salida de `Get-Member`, ¿qué diferencia hay entre una propiedad y un método?"

explicacion: |
  Por ejemplo, `Name` es una propiedad de un proceso y `Kill()` es un método.
```

### 11 — Todas las propiedades

```
metadata:
  materia: "powershell"
  tema: "get_help_y_descubribilidad"
  nivel: "intermedio"
  tags: ["select-object"]

tipo: mc
opciones_explicitas: ["Select-Object *", "Format-Short", "Get-Everything", "Show-All"]
respuesta: "Select-Object *"

enunciado: "¿Cómo se ven TODAS las propiedades de un objeto, no solo las que muestra la consola por defecto?"

explicacion: |
  Por ejemplo, `Get-Process -Id $PID | Select-Object *`. La consola solo muestra algunas por defecto.
```

### 12 — Comandos por verbo

```
metadata:
  materia: "powershell"
  tema: "get_help_y_descubribilidad"
  nivel: "intermedio"
  tags: ["get-command"]

tipo: mc
opciones_explicitas: ["Get-Command -Verb Stop", "Get-Command Stop*", "Find-Verb Stop", "Get-Help Stop"]
respuesta: "Get-Command -Verb Stop"

enunciado: "¿Cómo se buscan todos los comandos que usan el verbo `Stop`?"

explicacion: |
  `-Verb` y `-Noun` filtran por las dos partes del nombre del cmdlet.
```

### 13 — Alias de un comando

```
metadata:
  materia: "powershell"
  tema: "get_help_y_descubribilidad"
  nivel: "basico"
  tags: ["alias"]

tipo: mc
opciones_explicitas: ["Get-Alias", "Get-Nicknames", "Show-Alias", "List-Shortcuts"]
respuesta: "Get-Alias"

enunciado: "¿Qué cmdlet muestra los alias que existen en la sesión?"

explicacion: |
  `Get-Alias ls` muestra a qué corresponde `ls`; `Get-Alias -Definition Get-ChildItem` muestra los alias de ese cmdlet.
```

### 14 — Temas generales

```
metadata:
  materia: "powershell"
  tema: "get_help_y_descubribilidad"
  nivel: "intermedio"
  tags: ["about"]

tipo: mc
opciones_explicitas: ["Get-Help about_*", "Get-Help -Concepts", "Get-About", "Show-Topics"]
respuesta: "Get-Help about_*"

enunciado: "¿Cómo se ven los temas conceptuales de la ayuda, como el de operadores?"

explicacion: |
  Los temas `about_...` explican conceptos del lenguaje (por ejemplo, `about_Comparison_Operators`).
```

### 15 — Autocompletado

```
metadata:
  materia: "powershell"
  tema: "get_help_y_descubribilidad"
  nivel: "basico"
  tags: ["tab"]

tipo: mc
opciones_explicitas: ["Para completar nombres de comandos, parámetros y rutas", "Para cerrar la ventana", "Para borrar la línea", "Para ejecutar el último comando"]
respuesta: "Para completar nombres de comandos, parámetros y rutas"

enunciado: "¿Para qué sirve la tecla Tab al escribir en PowerShell?"

explicacion: |
  Pulsando Tab varias veces se recorren las opciones. Acelera y evita errores de tipeo.
```

### 16 — Versión

```
metadata:
  materia: "powershell"
  tema: "get_help_y_descubribilidad"
  nivel: "basico"
  tags: ["version"]

tipo: mc
opciones_explicitas: ["$PSVersionTable", "Get-Version", "$Version", "Show-PS"]
respuesta: "$PSVersionTable"

enunciado: "¿Cómo se ve la versión de PowerShell instalada?"

explicacion: |
  `$PSVersionTable` es una variable automática con la versión y otros datos del entorno.
```

### 17 — Armar con ventana

```
metadata:
  materia: "powershell"
  tema: "get_help_y_descubribilidad"
  nivel: "avanzado"
  tags: ["show-command"]

tipo: mc
opciones_explicitas: ["Abre una ventana para completar los parámetros de un comando", "Muestra el último comando ejecutado", "Lista los alias", "Muestra los errores"]
respuesta: "Abre una ventana para completar los parámetros de un comando"

enunciado: "¿Qué hace `Show-Command`?"

explicacion: |
  Es útil para comandos con muchos parámetros.
```

### 18 — Primer paso

```
metadata:
  materia: "powershell"
  tema: "get_help_y_descubribilidad"
  nivel: "basico"
  tags: ["buenas practicas"]

tipo: mc
opciones_explicitas: ["`Get-Help` del comando, mirando los ejemplos", "Ejecutarlo para ver qué pasa", "Buscarlo en el registro", "Reiniciar PowerShell"]
respuesta: "`Get-Help` del comando, mirando los ejemplos"

enunciado: "Ante un cmdlet que nunca usaste, ¿qué conviene hacer primero?"

explicacion: |
  Los ejemplos muestran el uso real y los parámetros más comunes sin riesgo.
```

### 19 — Encontrar un comando

```
metadata:
  materia: "powershell"
  tema: "get_help_y_descubribilidad"
  nivel: "basico"
  tags: ["get-command"]

tipo: mc
opciones_explicitas: ["Get-Command *service*", "Reiniciar el equipo", "Probar con Remove-Service", "Abrir el registro de Windows"]
respuesta: "Get-Command *service*"

enunciado: "No recordás el nombre de un comando para \"detener un servicio\". ¿Cuál es una buena forma de encontrarlo?"

explicacion: |
  Con un comodín se listan los comandos relacionados (`Get-Service`, `Stop-Service`, `Start-Service`...).
```

### 20 — Cuál es la propiedad

```
metadata:
  materia: "powershell"
  tema: "get_help_y_descubribilidad"
  nivel: "basico"
  tags: ["get-member"]

tipo: mc
opciones_explicitas: ["Get-Member", "Get-Process -Help", "Get-Command", "Get-Data"]
respuesta: "Get-Member"

enunciado: "Querés filtrar procesos por un dato que no recordás cómo se llama. ¿Qué cmdlet te dice los nombres de las propiedades?"

explicacion: |
  `Get-Process | Get-Member -MemberType Property` lista los nombres exactos para usar en `Where-Object` y `Select-Object`.
```

