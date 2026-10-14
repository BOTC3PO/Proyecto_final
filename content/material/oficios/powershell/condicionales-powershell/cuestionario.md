# PowerShell — Condicionales: if y switch (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Estructura

```
metadata:
  materia: "powershell"
  tema: "condicionales_powershell"
  nivel: "basico"
  tags: ["if"]

tipo: mc
opciones_explicitas: ["if ($x -gt 5) {{ \"mayor\" }}", "if x > 5 then \"mayor\"", "if ($x > 5) {{ \"mayor\" }}", "if [$x -gt 5]; then \"mayor\"; fi"]
respuesta: "if ($x -gt 5) {{ \"mayor\" }}"

enunciado: "¿Cuál es la sintaxis correcta de un `if` en PowerShell?"

explicacion: |
  La condición va entre paréntesis y con operador de comparación con guion; el bloque, entre llaves.
```

### 2 — Palabra completa

```
metadata:
  materia: "powershell"
  tema: "condicionales_powershell"
  nivel: "basico"
  tags: ["elseif"]

tipo: mc
opciones_explicitas: ["elseif", "else if", "elif", "otherwise"]
respuesta: "elseif"

enunciado: "¿Cómo se escribe \"si no, y si...\" en PowerShell?"

explicacion: |
  Es una sola palabra: `elseif`.
```

### 3 — Mayor que

```
metadata:
  materia: "powershell"
  tema: "condicionales_powershell"
  nivel: "basico"
  tags: ["operadores"]

tipo: vf
respuesta: falso

enunciado: "En PowerShell, `if ($edad > 18)` pregunta si la edad es mayor que 18."

explicacion: |
  `>` es una redirección: escribiría en un archivo llamado `18`. Hay que usar `-gt`.
```

### 4 — Igual

```
metadata:
  materia: "powershell"
  tema: "condicionales_powershell"
  nivel: "basico"
  tags: ["operadores"]

tipo: completar
respuesta: "-eq"
respuestas_validas:
  - "-eq"

enunciado: "Para comparar si `$a` es igual a `$b` se escribe `$a ___ $b`."

explicacion: |
  `-eq`, `-ne`, `-gt`, `-lt`, `-ge`, `-le`.
```

### 5 — Operador lógico Y

```
metadata:
  materia: "powershell"
  tema: "condicionales_powershell"
  nivel: "intermedio"
  tags: ["logicos"]

tipo: mc
opciones_explicitas: ["$edad -ge 18 -and $entrada", "$edad -ge 18 && $entrada solamente", "$edad >= 18 and $entrada", "$edad -ge 18 , $entrada"]
respuesta: "$edad -ge 18 -and $entrada"

enunciado: "¿Cómo se escribe \"edad mayor o igual a 18 y tiene entrada\"?"

explicacion: |
  Los operadores lógicos son `-and`, `-or` y `-not`. (En PowerShell 7 también existen `&&` y `||` entre comandos, con otro uso.)
```

### 6 — Comparar con comodines

```
metadata:
  materia: "powershell"
  tema: "condicionales_powershell"
  nivel: "basico"
  tags: ["like"]

tipo: mc
opciones_explicitas: ["Da `True`: el texto termina con .txt", "Da `False`", "Da un error", "Devuelve el nombre sin extensión"]
respuesta: "Da `True`: el texto termina con .txt"

enunciado: "¿Qué hace `'informe.txt' -like '*.txt'`?"

explicacion: |
  `-like` compara con comodines. `-match` usa expresiones regulares.
```

### 7 — Expresión regular

```
metadata:
  materia: "powershell"
  tema: "condicionales_powershell"
  nivel: "intermedio"
  tags: ["match"]

tipo: mc
opciones_explicitas: ["-match", "-regex", "-re", "-find"]
respuesta: "-match"

enunciado: "¿Qué operador compara con una expresión regular?"

explicacion: |
  Por ejemplo, `'abc123' -match '\d+'` da `True`.
```

### 8 — Pertenece a una lista

```
metadata:
  materia: "powershell"
  tema: "condicionales_powershell"
  nivel: "intermedio"
  tags: ["in"]

tipo: mc
opciones_explicitas: ["True", "False", "'rojo'", "Un error"]
respuesta: "True"

enunciado: "¿Qué da `'rojo' -in 'rojo','verde','azul'`?"

explicacion: |
  `-in` pregunta si el valor de la izquierda está en la lista de la derecha. `-contains` es lo mismo con los lados invertidos.
```

### 9 — Mayúsculas

```
metadata:
  materia: "powershell"
  tema: "condicionales_powershell"
  nivel: "intermedio"
  tags: ["mayusculas"]

tipo: mc
opciones_explicitas: ["True", "False", "Un error", "Depende del sistema"]
respuesta: "True"

enunciado: "¿Qué da `'HOLA' -eq 'hola'` en PowerShell?"

explicacion: |
  Por defecto, las comparaciones de texto no distinguen mayúsculas. Con `-ceq` sí.
```

### 10 — Qué es falso

```
metadata:
  materia: "powershell"
  tema: "condicionales_powershell"
  nivel: "avanzado"
  tags: ["booleanos"]

tipo: mc
opciones_explicitas: ["$null", "\"false\" (el texto)", "1", "\"0\" (el texto, con comillas)"]
respuesta: "$null"

enunciado: "¿Cuál de estos valores se interpreta como falso en una condición?"

explicacion: |
  Se consideran falsos `$false`, `$null`, `0`, el texto vacío y la lista vacía. Un texto no vacío, incluso "false", cuenta como verdadero.
```

### 11 — Carpeta

```
metadata:
  materia: "powershell"
  tema: "condicionales_powershell"
  nivel: "basico"
  tags: ["test-path"]

tipo: mc
opciones_explicitas: ["Ejecuta el bloque solo si la ruta NO existe", "Ejecuta el bloque si existe", "Borra la ruta", "Da un error"]
respuesta: "Ejecuta el bloque solo si la ruta NO existe"

enunciado: "¿Qué hace `if (-not (Test-Path C:\\Respaldo)) {{ ... }}`?"

explicacion: |
  `Test-Path` devuelve `$true` o `$false` y `-not` lo invierte.
```

### 12 — Un error clásico

```
metadata:
  materia: "powershell"
  tema: "condicionales_powershell"
  nivel: "intermedio"
  tags: ["error comun"]

tipo: mc
opciones_explicitas: ["Asigna 5 a `$a` y entra al bloque (siempre es verdadero)", "Compara `$a` con 5", "Da un error de sintaxis", "No hace nada"]
respuesta: "Asigna 5 a `$a` y entra al bloque (siempre es verdadero)"

enunciado: "¿Qué hace `if ($a = 5) {{ ... }}`?"

explicacion: |
  El `=` es asignación. Para comparar hay que escribir `-eq`.
```

### 13 — switch

```
metadata:
  materia: "powershell"
  tema: "condicionales_powershell"
  nivel: "basico"
  tags: ["switch"]

tipo: mc
opciones_explicitas: ["Para comparar un valor con varios casos", "Para repetir un bloque", "Para definir funciones", "Para leer archivos"]
respuesta: "Para comparar un valor con varios casos"

enunciado: "¿Para qué sirve `switch`?"

explicacion: |
  Es una alternativa más legible a muchos `elseif` encadenados.
```

### 14 — Caso por defecto

```
metadata:
  materia: "powershell"
  tema: "condicionales_powershell"
  nivel: "basico"
  tags: ["switch"]

tipo: mc
opciones_explicitas: ["default", "else", "otherwise", "*"]
respuesta: "default"

enunciado: "En un `switch`, ¿qué bloque se ejecuta si ningún caso coincide?"

explicacion: |
  `default {{ ... }}` es el caso por defecto.
```

### 15 — Varios casos

```
metadata:
  materia: "powershell"
  tema: "condicionales_powershell"
  nivel: "avanzado"
  tags: ["switch"]

tipo: mc
opciones_explicitas: ["Se ejecutan todos los que coinciden, salvo que se use `break`", "Solo se ejecuta el primero siempre", "Da un error", "Se ejecuta el último solamente"]
respuesta: "Se ejecutan todos los que coinciden, salvo que se use `break`"

enunciado: "¿Qué puede pasar con un `switch` si varios casos coinciden?"

explicacion: |
  A diferencia de otros lenguajes, el `switch` de PowerShell no corta solo.
```

### 16 — Preguntar por null

```
metadata:
  materia: "powershell"
  tema: "condicionales_powershell"
  nivel: "avanzado"
  tags: ["null"]

tipo: mc
opciones_explicitas: ["$null -eq $x", "$x -eq $null", "$x = $null", "if ($x)"]
respuesta: "$null -eq $x"

enunciado: "¿Cuál es la forma más segura de preguntar si `$x` es `$null`?"

explicacion: |
  Con `$null` a la izquierda se evita un resultado inesperado cuando `$x` es una lista.
```

### 17 — Tipo

```
metadata:
  materia: "powershell"
  tema: "condicionales_powershell"
  nivel: "intermedio"
  tags: ["tipos"]

tipo: mc
opciones_explicitas: ["Si `$x` es un número entero", "Si `$x` es igual a 'int'", "Si `$x` existe", "Si `$x` es mayor que cero"]
respuesta: "Si `$x` es un número entero"

enunciado: "¿Qué comprueba `$x -is [int]`?"

explicacion: |
  `-is` verifica el tipo de un valor.
```

### 18 — Dentro de la tubería

```
metadata:
  materia: "powershell"
  tema: "condicionales_powershell"
  nivel: "basico"
  tags: ["where"]

tipo: mc
opciones_explicitas: ["Get-Service | Where-Object Status -eq 'Stopped'", "Get-Service | if Status = Stopped", "Get-Service -Where Stopped", "Get-Service | Filter Stopped"]
respuesta: "Get-Service | Where-Object Status -eq 'Stopped'"

enunciado: "¿Cómo se filtran los servicios que están detenidos?"

explicacion: |
  `Where-Object` aplica la condición a cada objeto. No se usa `if` en la tubería para filtrar.
```

### 19 — Negación

```
metadata:
  materia: "powershell"
  tema: "condicionales_powershell"
  nivel: "basico"
  tags: ["not"]

tipo: mc
opciones_explicitas: ["Da `False`", "Da `True`", "Da un error", "Da `$null`"]
respuesta: "Da `False`"

enunciado: "¿Qué hace `-not $true`?"

explicacion: |
  `-not` (o `!`) invierte el valor booleano.
```

### 20 — Varias condiciones

```
metadata:
  materia: "powershell"
  tema: "condicionales_powershell"
  nivel: "intermedio"
  tags: ["logicos"]

tipo: mc
opciones_explicitas: ["($s.Status -eq 'Stopped') -and ($s.StartType -eq 'Automatic')", "$s.Status -eq 'Stopped' , $s.StartType -eq 'Automatic'", "$s.Status -eq 'Stopped' y $s.StartType -eq 'Automatic'", "$s.Status -eq 'Stopped' & $s.StartType -eq 'Automatic'"]
respuesta: "($s.Status -eq 'Stopped') -and ($s.StartType -eq 'Automatic')"

enunciado: "¿Cuál es la condición correcta para \"el servicio está detenido y su inicio es automático\"?"

explicacion: |
  Cada comparación va entre paréntesis y se unen con `-and`.
```

