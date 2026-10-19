# PowerShell — Sintaxis verbo-sustantivo (cuestionario, 21 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Qué es un cmdlet

```
metadata:
  materia: "powershell"
  tema: "sintaxis_verbo_sustantivo"
  nivel: "basico"
  tags: ["cmdlet"]

tipo: mc
opciones_explicitas: ["Un comando con nombre Verbo-Sustantivo, como `Get-Process`", "Un archivo de texto", "Una variable especial", "Un programa escrito en C"]
respuesta: "Un comando con nombre Verbo-Sustantivo, como `Get-Process`"

enunciado: "¿Qué es un cmdlet en PowerShell?"

explicacion: |
  Los cmdlets son los comandos nativos de PowerShell. Su nombre dice qué hacen (verbo) y sobre qué (sustantivo).
```

### 2 — Qué pasa entre comandos

```
metadata:
  materia: "powershell"
  tema: "sintaxis_verbo_sustantivo"
  nivel: "basico"
  tags: ["objetos"]

tipo: mc
opciones_explicitas: ["PowerShell pasa objetos; Bash pasa texto", "PowerShell no permite conectar comandos", "Bash pasa objetos; PowerShell pasa texto", "Ninguna"]
respuesta: "PowerShell pasa objetos; Bash pasa texto"

enunciado: "¿Qué diferencia fundamental hay entre PowerShell y Bash al conectar comandos?"

explicacion: |
  En PowerShell cada comando entrega objetos con propiedades, por lo que se puede filtrar `por propiedad` sin cortar texto.
```

### 3 — Forma del nombre

```
metadata:
  materia: "powershell"
  tema: "sintaxis_verbo_sustantivo"
  nivel: "basico"
  tags: ["nombres"]

tipo: mc
opciones_explicitas: ["Get-Service", "service-get", "GetService", "Service_Get"]
respuesta: "Get-Service"

enunciado: "¿Cuál de estos nombres sigue el patrón estándar de un cmdlet?"

explicacion: |
  Siempre es `Verbo-Sustantivo`, con un guion. El verbo es de una lista aprobada.
```

### 4 — Ver los verbos

```
metadata:
  materia: "powershell"
  tema: "sintaxis_verbo_sustantivo"
  nivel: "intermedio"
  tags: ["verbos"]

tipo: mc
opciones_explicitas: ["Get-Verb", "Get-Command", "Show-Verbs", "List-Verb"]
respuesta: "Get-Verb"

enunciado: "¿Qué cmdlet lista los verbos aprobados?"

explicacion: |
  `Get-Verb` muestra los verbos estándar (`Get`, `Set`, `New`...) y su grupo.
```

### 5 — Qué hace Get-ChildItem

```
metadata:
  materia: "powershell"
  tema: "sintaxis_verbo_sustantivo"
  nivel: "basico"
  tags: ["Get-ChildItem"]

tipo: mc
opciones_explicitas: ["Lista el contenido de la carpeta", "Borra la carpeta", "Crea la carpeta", "Cambia de carpeta"]
respuesta: "Lista el contenido de la carpeta"

enunciado: "¿Qué hace `Get-ChildItem C:\\Datos`?"

explicacion: |
  Es el equivalente de `ls` o `dir`. Con `-Recurse` incluye las subcarpetas.
```

### 6 — Alias

```
metadata:
  materia: "powershell"
  tema: "sintaxis_verbo_sustantivo"
  nivel: "basico"
  tags: ["alias"]

tipo: mc
opciones_explicitas: ["Get-ChildItem", "Get-Location", "Remove-Item", "Get-Content"]
respuesta: "Get-ChildItem"

enunciado: "¿A qué cmdlet corresponde el alias `ls` en PowerShell?"

explicacion: |
  Los alias (`ls`, `dir`, `gci`) son atajos de `Get-ChildItem`. `Get-Alias` los lista.
```

### 7 — Mayúsculas

```
metadata:
  materia: "powershell"
  tema: "sintaxis_verbo_sustantivo"
  nivel: "basico"
  tags: ["mayusculas"]

tipo: vf
respuesta: verdadero

enunciado: "`GET-PROCESS` y `get-process` son el mismo comando en PowerShell."

explicacion: |
  PowerShell no distingue mayúsculas de minúsculas en los nombres de cmdlets, parámetros ni variables.
```

### 8 — Alias en scripts

```
metadata:
  materia: "powershell"
  tema: "sintaxis_verbo_sustantivo"
  nivel: "intermedio"
  tags: ["alias"]

tipo: mc
opciones_explicitas: ["Porque son más claros y no dependen de alias que pueden cambiar", "Porque los alias no funcionan en scripts", "Porque son más rápidos", "Porque lo exige Windows"]
respuesta: "Porque son más claros y no dependen de alias que pueden cambiar"

enunciado: "¿Por qué se recomienda usar los nombres completos en vez de alias dentro de un script?"

explicacion: |
  Un script se lee más veces de las que se escribe: `Get-ChildItem` es más claro que `gci`, y los alias pueden redefinirse en otra máquina.
```

### 9 — Un parámetro

```
metadata:
  materia: "powershell"
  tema: "sintaxis_verbo_sustantivo"
  nivel: "basico"
  tags: ["parametros"]

tipo: completar
respuesta: "-"
respuestas_validas:
  - "-"

enunciado: "Los parámetros de un cmdlet empiezan con el símbolo `___`."

explicacion: |
  Por ejemplo, `-Path`, `-Recurse` o `-Filter`.
```

### 10 — Recursivo

```
metadata:
  materia: "powershell"
  tema: "sintaxis_verbo_sustantivo"
  nivel: "basico"
  tags: ["parametros"]

tipo: mc
opciones_explicitas: ["Incluye también las subcarpetas", "Borra los archivos", "Ordena los resultados", "Muestra los archivos ocultos solamente"]
respuesta: "Incluye también las subcarpetas"

enunciado: "¿Qué hace el parámetro `-Recurse` en `Get-ChildItem`?"

explicacion: |
  Es un parámetro tipo *switch*: no lleva valor, solo se activa al escribirlo.
```

### 11 — Probar sin hacer

```
metadata:
  materia: "powershell"
  tema: "sintaxis_verbo_sustantivo"
  nivel: "basico"
  tags: ["whatif"]

tipo: mc
opciones_explicitas: ["Muestra qué haría el comando sin ejecutarlo", "Ignora los errores", "Pide la contraseña", "Ejecuta el comando dos veces"]
respuesta: "Muestra qué haría el comando sin ejecutarlo"

enunciado: "¿Para qué sirve `-WhatIf`?"

explicacion: |
  Por ejemplo, `Remove-Item *.tmp -WhatIf` lista lo que borraría, pero no borra nada. Es ideal antes de acciones destructivas.
```

### 12 — Confirmar

```
metadata:
  materia: "powershell"
  tema: "sintaxis_verbo_sustantivo"
  nivel: "intermedio"
  tags: ["confirm"]

tipo: mc
opciones_explicitas: ["Pide confirmación antes de ejecutar la acción", "Confirma que el archivo existe", "Verifica la sintaxis", "Crea un respaldo"]
respuesta: "Pide confirmación antes de ejecutar la acción"

enunciado: "¿Qué hace el parámetro común `-Confirm`?"

explicacion: |
  Con `-Confirm`, PowerShell pregunta si se continúa para cada elemento.
```

### 13 — Variable

```
metadata:
  materia: "powershell"
  tema: "sintaxis_verbo_sustantivo"
  nivel: "basico"
  tags: ["variables"]

tipo: mc
opciones_explicitas: ["$nombre = \"Ana\"", "nombre = \"Ana\"", "var nombre = \"Ana\"", "$nombre := \"Ana\""]
respuesta: "$nombre = \"Ana\""

enunciado: "¿Cuál es una asignación de variable válida en PowerShell?"

explicacion: |
  Las variables empiezan siempre con `$`, tanto al asignarlas como al leerlas.
```

### 14 — Comillas dobles

```
metadata:
  materia: "powershell"
  tema: "sintaxis_verbo_sustantivo"
  nivel: "basico"
  tags: ["comillas"]

tipo: mc
opciones_explicitas: ["Hola Ana", "Hola $n", "Hola", "Un error"]
respuesta: "Hola Ana"

enunciado: "Si `$n = \"Ana\"`, ¿qué muestra `\"Hola $n\"`?"

explicacion: |
  Las comillas dobles interpolan variables. Las simples (`'Hola $n'`) muestran el texto literal.
```

### 15 — Propiedad dentro del texto

```
metadata:
  materia: "powershell"
  tema: "sintaxis_verbo_sustantivo"
  nivel: "intermedio"
  tags: ["interpolacion"]

tipo: mc
opciones_explicitas: ["\"$($p.Nombre)\"", "\"$p.Nombre\" siempre", "\"{$p.Nombre}\"", "\"${p}.Nombre\""]
respuesta: "\"$($p.Nombre)\""

enunciado: "¿Cómo se inserta la propiedad `Nombre` de `$p` dentro de un texto con comillas dobles?"

explicacion: |
  Con `$p.Nombre` a secas solo se interpola `$p` y después queda el texto `.Nombre`. Para propiedades se usa la subexpresión `$( )`.
```

### 16 — Fijar el tipo

```
metadata:
  materia: "powershell"
  tema: "sintaxis_verbo_sustantivo"
  nivel: "intermedio"
  tags: ["tipos"]

tipo: mc
opciones_explicitas: ["Declara `$edad` como entero", "Convierte 18 en texto", "Crea una función", "Define una constante"]
respuesta: "Declara `$edad` como entero"

enunciado: "¿Qué hace `[int]$edad = 18`?"

explicacion: |
  Los corchetes con el tipo antes de la variable fijan su tipo: después, asignarle un texto no numérico da error.
```

### 17 — Arreglo

```
metadata:
  materia: "powershell"
  tema: "sintaxis_verbo_sustantivo"
  nivel: "basico"
  tags: ["arreglos"]

tipo: mc
opciones_explicitas: ["$lista = @(1, 2, 3)", "$lista = {1, 2, 3}", "$lista = [1, 2, 3]", "$lista = list(1, 2, 3)"]
respuesta: "$lista = @(1, 2, 3)"

enunciado: "¿Cómo se crea una lista de tres números?"

explicacion: |
  `@( )` crea un arreglo. Para una tabla hash (clave y valor) se usa `@{{ clave = valor }}`.
```

### 18 — Objeto actual

```
metadata:
  materia: "powershell"
  tema: "sintaxis_verbo_sustantivo"
  nivel: "intermedio"
  tags: ["tuberia"]

tipo: mc
opciones_explicitas: ["El objeto actual que pasa por la tubería", "Una variable vacía", "El último error", "El nombre del script"]
respuesta: "El objeto actual que pasa por la tubería"

enunciado: "¿Qué representa `$_` dentro de `ForEach-Object` o `Where-Object`?"

explicacion: |
  `$_` (o `$PSItem`) apunta al elemento que se está procesando en ese momento.
```

### 19 — Ver las propiedades

```
metadata:
  materia: "powershell"
  tema: "sintaxis_verbo_sustantivo"
  nivel: "basico"
  tags: ["get-member"]

tipo: mc
opciones_explicitas: ["Get-Member", "Get-Property", "Show-Object", "Get-Help"]
respuesta: "Get-Member"

enunciado: "¿Qué cmdlet muestra las propiedades y métodos de un objeto?"

explicacion: |
  `Get-Process | Get-Member` lista, por ejemplo, `Id`, `ProcessName` y `CPU`.
```

### 20 — Comentarios

```
metadata:
  materia: "powershell"
  tema: "sintaxis_verbo_sustantivo"
  nivel: "basico"
  tags: ["comentarios"]

tipo: mc
opciones_explicitas: ["# esto es un comentario", "// esto es un comentario", "-- esto es un comentario", "' esto es un comentario"]
respuesta: "# esto es un comentario"

enunciado: "¿Cómo se escribe un comentario de una línea en PowerShell?"

explicacion: |
  Se usa `#` (y `<# ... #>` para varias líneas).
```

### 21 — Resultado del último comando

```
metadata:
  materia: "powershell"
  tema: "sintaxis_verbo_sustantivo"
  nivel: "intermedio"
  tags: ["automaticas"]

tipo: mc
opciones_explicitas: ["Si el último comando terminó con éxito (`$true` o `$false`)", "El nombre del último comando", "El número del último error", "La carpeta actual"]
respuesta: "Si el último comando terminó con éxito (`$true` o `$false`)"

enunciado: "¿Qué indica la variable automática `$?`?"

explicacion: |
  `$?` es booleana. Para programas externos, el código de salida está en `$LASTEXITCODE`.
```

