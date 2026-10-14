# PowerShell — Funciones (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Definir

```
metadata:
  materia: "powershell"
  tema: "funciones_powershell"
  nivel: "basico"
  tags: ["definir"]

tipo: mc
opciones_explicitas: ["function Saludar {{ \"Hola\" }}", "def Saludar(): \"Hola\"", "func Saludar() => \"Hola\"", "Saludar() {{ echo Hola }}"]
respuesta: "function Saludar {{ \"Hola\" }}"

enunciado: "¿Cuál es la forma correcta de definir una función?"

explicacion: |
  Se usa la palabra `function`, el nombre y el cuerpo entre llaves.
```

### 2 — Llamar sin paréntesis

```
metadata:
  materia: "powershell"
  tema: "funciones_powershell"
  nivel: "basico"
  tags: ["llamar"]

tipo: mc
opciones_explicitas: ["Sumar 2 3", "Sumar(2, 3)", "Sumar(2 3)", "call Sumar 2, 3"]
respuesta: "Sumar 2 3"

enunciado: "Con `function Sumar {{ param($a,$b) $a + $b }}`, ¿cuál es la forma de llamarla?"

explicacion: |
  Se llama como un comando: nombre y argumentos separados por espacios. Con `Sumar(2, 3)` se le pasa un solo argumento (una lista).
```

### 3 — Definir antes

```
metadata:
  materia: "powershell"
  tema: "funciones_powershell"
  nivel: "basico"
  tags: ["orden"]

tipo: mc
opciones_explicitas: ["Definirla antes del punto en que se la llama", "Nada: se puede definir en cualquier parte", "Escribirla en mayúsculas", "Importarla con `include`"]
respuesta: "Definirla antes del punto en que se la llama"

enunciado: "¿Qué hay que hacer para que una función se pueda llamar dentro de un script?"

explicacion: |
  PowerShell lee el script de arriba hacia abajo: la función debe existir cuando se ejecuta la llamada.
```

### 4 — Bloque param

```
metadata:
  materia: "powershell"
  tema: "funciones_powershell"
  nivel: "basico"
  tags: ["param"]

tipo: mc
opciones_explicitas: ["Para declarar los parámetros de la función", "Para declarar variables globales", "Para importar módulos", "Para definir comentarios"]
respuesta: "Para declarar los parámetros de la función"

enunciado: "¿Para qué sirve el bloque `param( ... )`?"

explicacion: |
  Allí se escriben los parámetros con su tipo y su valor por defecto.
```

### 5 — Valor por defecto

```
metadata:
  materia: "powershell"
  tema: "funciones_powershell"
  nivel: "basico"
  tags: ["param"]

tipo: mc
opciones_explicitas: ["10", "0", "$null", "Pide el valor al usuario"]
respuesta: "10"

enunciado: "En `param([int]$B = 10)`, ¿qué valor tiene `$B` si no se le pasa nada?"

explicacion: |
  El valor después del `=` es el valor por defecto.
```

### 6 — Obligatorio

```
metadata:
  materia: "powershell"
  tema: "funciones_powershell"
  nivel: "basico"
  tags: ["mandatory"]

tipo: mc
opciones_explicitas: ["Con `[Parameter(Mandatory)]`", "Con `[Required]`", "Con `$Param!`", "Con `-must`"]
respuesta: "Con `[Parameter(Mandatory)]`"

enunciado: "¿Cómo se hace que un parámetro sea obligatorio?"

explicacion: |
  Si falta, PowerShell lo pide en la consola.
```

### 7 — Validar el tipo

```
metadata:
  materia: "powershell"
  tema: "funciones_powershell"
  nivel: "basico"
  tags: ["tipos"]

tipo: mc
opciones_explicitas: ["Exige que el valor sea un número entero", "Convierte cualquier cosa en texto", "Hace el parámetro opcional", "Define una constante"]
respuesta: "Exige que el valor sea un número entero"

enunciado: "¿Qué hace `[int]$Edad` dentro de `param`?"

explicacion: |
  Si se pasa un valor que no se puede convertir a entero, da error.
```

### 8 — Validar el rango

```
metadata:
  materia: "powershell"
  tema: "funciones_powershell"
  nivel: "intermedio"
  tags: ["validar"]

tipo: mc
opciones_explicitas: ["Para aceptar solo valores entre 1 y 10", "Para generar números del 1 al 10", "Para repetir la función 10 veces", "Para ordenar valores"]
respuesta: "Para aceptar solo valores entre 1 y 10"

enunciado: "¿Para qué sirve `[ValidateRange(1,10)]`?"

explicacion: |
  Hay otras validaciones: `[ValidateSet('a','b')]` (lista fija), `[ValidateNotNullOrEmpty()]`.
```

### 9 — Interruptor

```
metadata:
  materia: "powershell"
  tema: "funciones_powershell"
  nivel: "intermedio"
  tags: ["switch"]

tipo: mc
opciones_explicitas: ["Un parámetro sin valor: se activa solo con escribir `-Detallado`", "Un parámetro de texto", "Un parámetro obligatorio", "Una variable global"]
respuesta: "Un parámetro sin valor: se activa solo con escribir `-Detallado`"

enunciado: "¿Qué es un parámetro `[switch]$Detallado`?"

explicacion: |
  Si no se escribe, vale `$false`; si se escribe, `$true`.
```

### 10 — Qué devuelve

```
metadata:
  materia: "powershell"
  tema: "funciones_powershell"
  nivel: "intermedio"
  tags: ["salida"]

tipo: mc
opciones_explicitas: ["Dos valores: el texto \"uno\" y el número 10", "Solo 10", "Solo \"uno\"", "Nada: falta `return`"]
respuesta: "Dos valores: el texto \"uno\" y el número 10"

enunciado: "¿Qué devuelve esta función? `function F {{ \"uno\"; 5 + 5 }}`"

explicacion: |
  En PowerShell todo lo que se emite sin capturar es salida, no solo lo que lleva `return`.
```

### 11 — return

```
metadata:
  materia: "powershell"
  tema: "funciones_powershell"
  nivel: "basico"
  tags: ["return"]

tipo: mc
opciones_explicitas: ["Emite el valor y termina la función", "Solo termina la función sin emitir nada", "Solo emite el valor y sigue", "Reinicia la función"]
respuesta: "Emite el valor y termina la función"

enunciado: "¿Qué hace `return \"fin\"` dentro de una función?"

explicacion: |
  `return` emite el valor y sale; las instrucciones que sigan no se ejecutan.
```

### 12 — Salida no deseada

```
metadata:
  materia: "powershell"
  tema: "funciones_powershell"
  nivel: "avanzado"
  tags: ["salida"]

tipo: mc
opciones_explicitas: ["Descartándolo con `| Out-Null` o `$null = ...`", "Con `Write-Host`", "Con `return`", "Reiniciando PowerShell"]
respuesta: "Descartándolo con `| Out-Null` o `$null = ...`"

enunciado: "Una función devuelve de más porque una instrucción emite un resultado que no se usa. ¿Cómo se evita?"

explicacion: |
  Eso evita ensuciar la salida con valores accidentales.
```

### 13 — Write-Host

```
metadata:
  materia: "powershell"
  tema: "funciones_powershell"
  nivel: "intermedio"
  tags: ["write-host"]

tipo: mc
opciones_explicitas: ["`Write-Host` escribe solo en pantalla; `Write-Output` envía el valor a la tubería", "Ninguna", "`Write-Host` envía a la tubería", "`Write-Output` solo escribe en pantalla"]
respuesta: "`Write-Host` escribe solo en pantalla; `Write-Output` envía el valor a la tubería"

enunciado: "¿Qué diferencia tiene `Write-Host` con `Write-Output`?"

explicacion: |
  Para datos que otro comando va a usar, `Write-Output` (o simplemente emitir el valor). `Write-Host` es para mensajes a la persona.
```

### 14 — Nombre

```
metadata:
  materia: "powershell"
  tema: "funciones_powershell"
  nivel: "basico"
  tags: ["nombres"]

tipo: mc
opciones_explicitas: ["Get-Resumen", "resumen", "GetResumen", "do_resumen"]
respuesta: "Get-Resumen"

enunciado: "¿Qué nombre sigue la convención para una función que obtiene un resumen?"

explicacion: |
  Se usa Verbo-Sustantivo con un verbo aprobado (`Get-Verb` los lista).
```

### 15 — CmdletBinding

```
metadata:
  materia: "powershell"
  tema: "funciones_powershell"
  nivel: "avanzado"
  tags: ["cmdletbinding"]

tipo: mc
opciones_explicitas: ["Los parámetros comunes, como `-Verbose` y `-ErrorAction`", "Compila la función", "La hace más rápida", "La convierte en un módulo"]
respuesta: "Los parámetros comunes, como `-Verbose` y `-ErrorAction`"

enunciado: "¿Qué agrega `[CmdletBinding()]` a una función?"

explicacion: |
  Convierte la función avanzada en algo parecido a un cmdlet.
```

### 16 — Alcance

```
metadata:
  materia: "powershell"
  tema: "funciones_powershell"
  nivel: "avanzado"
  tags: ["ambito"]

tipo: mc
opciones_explicitas: ["Se crea una `$x` local; la del script no cambia", "Se modifica la `$x` del script", "Da un error", "Se borra la variable del script"]
respuesta: "Se crea una `$x` local; la del script no cambia"

enunciado: "Dentro de una función, si se asigna `$x = 5` y existe una `$x` en el script, ¿qué pasa?"

explicacion: |
  A diferencia de Bash, en PowerShell asignar dentro de una función crea una variable local (salvo que se use `$script:x` o `$global:x`).
```

### 17 — Reutilizar

```
metadata:
  materia: "powershell"
  tema: "funciones_powershell"
  nivel: "intermedio"
  tags: ["dot-source"]

tipo: mc
opciones_explicitas: ["`. .\\funciones.ps1` (operador punto)", "`import funciones.ps1`", "`include funciones.ps1`", "`run funciones.ps1`"]
respuesta: "`. .\\funciones.ps1` (operador punto)"

enunciado: "¿Cómo se cargan en otro script las funciones definidas en `funciones.ps1`?"

explicacion: |
  El punto seguido de espacio y la ruta ejecuta el archivo en el ámbito actual, de modo que sus funciones quedan definidas. Para algo más grande se usa un módulo `.psm1`.
```

### 18 — Argumentos de la función

```
metadata:
  materia: "powershell"
  tema: "funciones_powershell"
  nivel: "basico"
  tags: ["llamar"]

tipo: mc
opciones_explicitas: ["Sumar -A 2 -B 3", "Sumar(A=2, B=3)", "Sumar A:2 B:3", "Sumar -A=2 -B=3"]
respuesta: "Sumar -A 2 -B 3"

enunciado: "¿Cómo se llama una función con dos parámetros `-A` y `-B`?"

explicacion: |
  Los parámetros se escriben con guion y el valor después, separados por espacios.
```

### 19 — Datos desde la tubería

```
metadata:
  materia: "powershell"
  tema: "funciones_powershell"
  nivel: "avanzado"
  tags: ["tuberia"]

tipo: mc
opciones_explicitas: ["`[Parameter(ValueFromPipeline)]`", "`[Pipe]`", "`[FromPipe()]`", "`[Input]`"]
respuesta: "`[Parameter(ValueFromPipeline)]`"

enunciado: "¿Qué atributo permite que una función reciba objetos de la tubería?"

explicacion: |
  Se combina con un bloque `process {{ }}` que se ejecuta para cada objeto.
```

### 20 — Primero lo simple

```
metadata:
  materia: "powershell"
  tema: "funciones_powershell"
  nivel: "basico"
  tags: ["buenas practicas"]

tipo: mc
opciones_explicitas: ["Una función corta, con un parámetro con tipo y que devuelva un solo resultado", "Una función enorme que haga todo", "Evitar los parámetros", "Escribirla sin probar"]
respuesta: "Una función corta, con un parámetro con tipo y que devuelva un solo resultado"

enunciado: "Para empezar a escribir funciones propias, ¿qué conviene?"

explicacion: |
  Funciones pequeñas y con una sola tarea son más fáciles de probar y de reutilizar.
```

