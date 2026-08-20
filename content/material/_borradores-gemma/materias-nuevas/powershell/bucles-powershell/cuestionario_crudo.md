### 1 — Bucle While básico
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["while", "condicion"]
enunciado: >
  ¿Qué resultado imprime el siguiente fragmento de código?
  $i = 1
  while ($i -lt 3) {
      Write-Host $i
      $i++
  }
respuesta: verdadero
tipo: vf
pasos:
  - "Evaluar la condición inicial: $i vale 1, que es menor que 3."
  - "Entrar al bucle, imprimir 1, incrementar $i a 2."
  - "Reevaluar: $i vale 2, menor que 3. Imprimir 2, incrementar $i a 3."
  - "Reevaluar: $i vale 3, NO es menor que 3. Salir del bucle."
  - "La salida son los números 1 y 2 en líneas separadas."
explicacion: El bucle while ejecuta el bloque mientras la condición sea verdadera. Al llegar a 3, la condición falla y el bucle termina.
```

### 2 — Completar: ForEach Object
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["foreach-object", "pipeline"]
enunciado: >
  Completa el comando para iterar sobre cada archivo en el pipeline y obtener su nombre:
  Get-ChildItem | ForEach-Object { $_.___ }
respuesta: Name
tipo: completar
respuestas_validas:
  - Name
  - name
pasos:
  - "Identificar que $_ representa el objeto actual en el pipeline."
  - "Saber que Get-ChildItem devuelve objetos FileSystemInfo."
  - "Recordar la propiedad que contiene el nombre del archivo/directorio."
explicacion: La propiedad 'Name' es la estándar para obtener el nombre sin la ruta completa de los objetos de sistema de archivos en PowerShell.
```

### 3 — Sintaxis For básica
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["for", "iteracion-numerica"]
enunciado: >
  ¿Cuál es la sintaxis correcta para un bucle for que itera desde 0 hasta 4?
opciones_explicitas:
  - "for ($i=0; $i -le 4; $i++)"
  - "for ($i=0, $i -le 4, $i++)"
  - "for ($i=0 | $i -le 4 | $i++)"
  - "for ($i=0; $i < 5; $i++);"
respuesta: for ($i=0; $i -le 4; $i++)
tipo: mc
pasos:
  - "Recordar que PowerShell usa punto y coma (;) como separador de cláusulas en for."
  - "Verificar que la condición de parada incluya el límite superior si se desea 'hasta 4'."
  - "Descartar opciones con comas o pipes como separadores de cláusulas."
explicacion: La sintaxis estándar de C-style en PowerShell requiere separadores con punto y coma. La opción con `< 5` es funcionalmente equivalente pero la pregunta pide la estructura explícita hasta 4.
```

### 4 — Break en While
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["break", "control-flujo"]
enunciado: >
  ¿Qué sucede si se usa `break` dentro de un bucle `while` infinito?
respuesta: verdadero
tipo: vf
pasos:
  - "Entender que `break` fuerza la salida inmediata del bucle más interno."
  - "Confirmar que esto detiene la ejecución del bucle actual."
explicacion: `break` termina la ejecución del bucle inmediatamente, evitando que se convierta en infinito real si no hay otra condición de salida.
```

### 5 — Continuar en ForEach
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["continue", "filtrado"]
enunciado: >
  En un bucle `foreach ($item in $array)`, ¿qué hace la instrucción `continue`?
opciones_explicitas:
  - "Detiene todo el script"
  - "Salta al siguiente elemento del bucle"
  - "Reinicia el bucle desde el inicio"
  - "Elimina el elemento actual del array"
respuesta: Salta al siguiente elemento del bucle
tipo: mc
pasos:
  - "Analizar el comportamiento de `continue` en lenguajes derivados de C."
  - "Confirmar que omite el resto del código del bloque actual y pasa al siguiente iteración."
explicacion: `continue` omite el procesamiento restante para el elemento actual y avanza directamente a la siguiente iteración del bucle.
```

### 6 — Do-While condición
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["do-while", "ejecucion-minima"]
enunciado: >
  ¿Cuántas veces se ejecuta el bloque de comandos en un bucle `do { ... } while ($false)`?
respuesta: "1"
tipo: completar
respuestas_validas:
  - 1
  - uno
  - "1 vez"
pasos:
  - "Identificar que `do-while` evalúa la condición DESPUÉS de ejecutar el bloque."
  - "Deducir que el bloque se ejecuta al menos una vez antes de verificar la condición."
explicacion: A diferencia de `while`, `do-while` garantiza al menos una ejecución porque la condición se comprueba al final.
```

### 7 - Foreach statement vs ForEach-Object
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["foreach", "foreach-object", "diferencias"]
enunciado: >
  ¿Verdadero o Falso? El cmdlet `ForEach-Object` puede procesar objetos a medida que llegan por el pipeline, mientras que la instrucción `foreach` requiere cargar todo el arreglo en memoria antes de empezar.
respuesta: verdadero
tipo: vf
pasos:
  - "Comparar el comportamiento de pipeline de `ForEach-Object`."
  - "Comparar el comportamiento de materialización de la instrucción `foreach`."
explicacion: `ForEach-Object` es un cmdlet que opera en el pipeline (streaming), mientras que `foreach` es una construcción de lenguaje que itera sobre una colección ya existente en memoria.
```

### 8 - Completar: Índice de Array
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["array", "indice"]
enunciado: >
  Completa el bucle para imprimir los elementos de $arr:
  $arr = @("a","b","c")
  for ($i=0; $i -lt $arr.___; $i++) { Write-Host $arr[$i] }
respuesta: Length
tipo: completar
respuestas_validas:
  - Length
  - length
  - Count
  - count
pasos:
  - "Identificar que $arr es un array."
  - "Recordar las propiedades de longitud de arrays en PowerShell."
explicacion: Tanto `Length` como `Count` son propiedades válidas para obtener el número de elementos de un array en PowerShell.
```

### 9 - Variable de estado en While
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["while", "flag"]
enunciado: >
  Si `$exit` está inicializado en `$false`, ¿cuál es la condición correcta para el `while` para detenerse cuando `$exit` sea `$true`?
opciones_explicitas:
  - "while ($exit -eq $true)"
  - "while ($exit)"
  - "while (-not $exit)"
  - "while ($exit -ne $null)"
respuesta: while (-not $exit)
tipo: mc
pasos:
  - "Analizar la lógica de parada: el bucle debe continuar mientras `$exit` sea falso."
  - "Evaluar las opciones lógicas."
explicacion: `while (-not $exit)` o `while ($exit -eq $false)` mantienen el bucle activo mientras la bandera de salida no se haya activado.
```

### 10 - Foreach con objetos de servicio
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["services", "foreach"]
enunciado: >
  ¿Qué propiedad de un objeto de servicio (`Get-Service`) se usa comúnmente para obtener su nombre visible en la interfaz?
opciones_explicitas:
  - "ServiceName"
  - "DisplayName"
  - "Name"
  - "Caption"
respuesta: DisplayName
tipo: mc
pasos:
  - "Conocer la estructura del objeto retornado por Get-Service."
  - "Diferenciar entre el nombre técnico interno y el nombre visible."
explicacion: `DisplayName` es la propiedad que contiene el nombre legible por el usuario, mientras que `ServiceName` es el identificador interno.
```

### 11 - Completar: Foreach Statement
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["foreach", "sintaxis"]
enunciado: >
  Completa la instrucción:
  foreach ($item in $collection) {
      ___ $item
  }
respuesta: Write-Host
tipo: completar
respuestas_validas:
  - Write-Host
  - write-host
  - echo
  - Write-Output
pasos:
  - "Identificar el contexto de un bucle que necesita mostrar datos."
  - "Seleccionar el cmdlet estándar de salida."
explicacion: `Write-Host` es el cmdlet estándar para imprimir texto directamente en la consola durante la iteración.
```

### 12 - While con Read-Host
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["input", "while"]
enunciado: >
  ¿Verdadero o Falso? Se puede usar un bucle `while` para validar la entrada del usuario hasta que ingrese un valor numérico válido.
respuesta: verdadero
tipo: vf
pasos:
  - "Considerar el uso de `Read-Host` dentro de un bucle."
  - "Verificar si es posible validar tipos de datos dinámicamente."
explicacion: Es un patrón común en scripts de automatización para solicitar datos al usuario hasta que cumplan con un formato o tipo específico.
```

### 13 - For con paso personalizado
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["for", "step"]
enunciado: >
  ¿Cuál es la forma correcta de incrementar en 2 dentro de un bucle `for`?
opciones_explicitas:
  - "$i = $i + 2"
  - "$i += 2"
  - "Ambas anteriores"
  - "Ninguna de las anteriores"
respuesta: Ambas anteriores
tipo: mc
pasos:
  - "Analizar la asignación aritmética simple."
  - "Analizar el operador de incremento compuesto."
explicacion: `$i += 2` es la forma abreviada y preferida, pero `$i = $i + 2` es funcionalmente equivalente y válida.
```

### 14 - Foreach sobre HashTable
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["hashtable", "foreach"]
enunciado: >
  Al iterar una `HashTable` con `foreach ($item in $hash)`, ¿qué tipo de objeto es `$item`?
opciones_explicitas:
  - "Un string con la clave"
  - "Un objeto DictionaryEntry"
  - "Un valor booleano"
  - "Un array de dos elementos"
respuesta: Un objeto DictionaryEntry
tipo: mc
pasos:
  - "Recordar la estructura interna de las HashTables en .NET/PowerShell."
  - "Identificar cómo se exponen las pares clave-valor en la iteración."
explicacion: Cada elemento en la iteración de una hashtable es un objeto `DictionaryEntry` que tiene propiedades `Key` y `Value`.
```

### 15 - Completar: Break en nested loops
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["break", "nested"]
enunciado: >
  Si estás dentro de un `foreach` anidado dentro de otro `foreach`, `break` solo sale del bucle ___.
respuesta: interno
tipo: completar
respuestas_validas:
  - interno
  - inner
  - actual
  - inmediato
pasos:
  - "Analizar el alcance (scope) de la instrucción break."
  - "Confirmar que no afecta a los bucles externos."
explicacion: `break` solo termina el bucle más cercano que lo contiene, no todos los bucles anidados.
```

### 16 - While infinito controlado
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["while", "infinite"]
enunciado: >
  ¿Qué comando se usa comúnmente para salir de un script o bucle desde la consola interactiva si se ejecuta un bucle infinito accidental?
opciones_explicitas:
  - "Stop-Process"
  - "Ctrl+C"
  - "Kill"
  - "Exit"
respuesta: Ctrl+C
tipo: mc
pasos:
  - "Conocer los atajos de teclado de la consola."
  - "Diferenciar entre comandos internos y señales del sistema."
explicacion: `Ctrl+C` envía una señal de interrupción al proceso actual, deteniéndolo en la mayoría de los entornos de consola.
```

### 17 - ForEach-Object con -Parallel
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["foreach-object", "parallel"]
enunciado: >
  ¿Verdadero o Falso? El parámetro `-Parallel` de `ForEach-Object` está disponible por defecto en PowerShell 5.1 sin módulos adicionales.
respuesta: falso
tipo: vf
pasos:
  - "Verificar los requisitos de versión de PowerShell para paralelismo."
  - "Recordar que `ForEach-Object -Parallel` se introdujo en PS 7."
explicacion: El paralelismo en el pipeline (`ForEach-Object -Parallel`) es una característica de PowerShell 7+ (Core). En PS 5.1 no está disponible nativamente de esta forma.
```

### 18 - Completar: Foreach con índice
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["foreach", "indice"]
enunciado: >
  Completa la sintaxis para usar el índice en un bucle `foreach` de PowerShell (si se desea simular un for):
  foreach ($item in $array) {
      $idx = $array.___($item)
      Write-Host $idx
  }
respuesta: IndexOf
tipo: completar
respuestas_validas:
  - IndexOf
  - indexof
  - LastIndexOf
  - lastindexof
pasos:
  - "Identificar que `foreach` estándar no provee el índice automáticamente."
  - "Buscar el método de array para encontrar la posición de un elemento."
explicacion: `IndexOf` devuelve la posición de la primera ocurrencia del elemento en el array.
```

### 19 - While con tipo de dato
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["while", "tipos"]
enunciado: >
  Si `$x` es un string "true", ¿cuál es el resultado de `while ($x) { ... }`?
opciones_explicitas:
  - "El bucle no se ejecuta"
  - "El bucle se ejecuta infinitamente"
  - "Error de tipo"
  - "El bucle se ejecuta una vez"
respuesta: El bucle se ejecuta infinitamente
tipo: mc
pasos:
  - "Evaluar la coerción de tipo en la condición del while."
  - "Determinar si una cadena no vacía se considera verdadera."
explicacion: En PowerShell, una cadena no vacía se coercea a `$true` en un contexto booleano, por lo que el bucle continúa indefinidamente.
```

### 20 - Foreach sobre colección vacía
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["foreach", "edge-case"]
enunciado: >
  ¿Qué ocurre si se ejecuta un bucle `foreach ($item in @())`?
respuesta: verdadero
tipo: vf
pasos:
  - "Considerar el comportamiento del bucle con colecciones vacías."
  - "Confirmar que no genera error."
explicacion: El bucle simplemente no entra en el bloque de código y el script continúa normalmente sin errores.
```

### 21 - Completar: ForEach-Object ScriptBlock
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["foreach-object", "scriptblock"]
enunciado: >
  Completa el cmdlet para procesar objetos en el pipeline:
  Get-Process | ForEach-Object { $_.___ }
respuesta: Name
tipo: completar
respuestas_validas:
  - Name
  - name
  - ProcessName
  - processname
pasos:
  - "Identificar el objeto de proceso."
  - "Seleccionar la propiedad de nombre."
explicacion: `Name` es la propiedad estándar para el nombre del proceso. `ProcessName` también es válida en algunos contextos o versiones, pero `Name` es la más común en objetos de proceso simples.
```

### 22 - While con decremento
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["while", "decrement"]
enunciado: >
  ¿Cuál es la condición correcta para un bucle `while` que cuenta hacia atrás desde 5 hasta 1?
opciones_explicitas:
  - "while ($i -gt 0)"
  - "while ($i -ge 1)"
  - "Ambas anteriores"
  - "Ninguna de las anteriores"
respuesta: Ambas anteriores
tipo: mc
pasos:
  - "Analizar los límites del conteo regresivo."
  - "Verificar si ambas condiciones detienen el bucle correctamente al llegar a 0."
explicacion: Si `$i` empieza en 5 y decrece, `$i -gt 0` (5,4,3,2,1) y `$i -ge 1` (5,4,3,2,1) son lógicamente equivalentes para detenerse antes de llegar a 0.
```

### 23 - Foreach con objetos de proceso (CPU)
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["processes", "cpu"]
enunciado: >
  ¿Qué propiedad de `Get-Process` se usa para obtener el uso de CPU en segundos?
opciones_explicitas:
  - "CPU"
  - "CPUUsage"
  - "WorkingSet"
  - "VirtualMemorySize"
respuesta: CPU
tipo: mc
pasos:
  - "Conocer las propiedades del objeto System.Diagnostics.Process expuesto por PowerShell."
  - "Identificar la propiedad numérica del tiempo de CPU."
explicacion: La propiedad `CPU` devuelve el tiempo total de CPU utilizado por el proceso en segundos.
```

### 24 - Completar: Do Until
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["do-until", "condicion"]
enunciado: >
  Completa la estructura:
  do {
      $input = Read-Host "Enter 'exit'"
  } until ($input -eq '___')
respuesta: exit
tipo: completar
respuestas_validas:
  - exit
  - Exit
  - EXIT
  - "exit"
pasos:
  - "Identificar la lógica de salida del bucle."
  - "Completar la cadena de comparación."
explicacion: La condición `until` se evalúa como verdadera para salir cuando la entrada coincide con la cadena 'exit'.
```

### 25 - Foreach con filtro
```yaml
metadata:
  materia: "powershell"
  tema: "bucles-powershell"
  nivel: "basico"
  tags: ["foreach", "filtro"]
enunciado: >
  ¿Verdadero o Falso? En un bucle `foreach`, puedes usar `if` para filtrar qué elementos procesar dentro del bloque.
respuesta: verdadero
tipo: vf
pasos:
  - "Analizar la flexibilidad del bloque de código dentro de `foreach`."
  - "Confirmar que es una práctica común de filtrado."
explicacion: Es una práctica estándar y recomendada para evitar procesar elementos que no cumplen ciertos criterios dentro del bucle.
```