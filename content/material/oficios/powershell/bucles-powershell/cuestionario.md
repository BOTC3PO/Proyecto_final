# PowerShell — Bucles (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — foreach

```
metadata:
  materia: "powershell"
  tema: "bucles_powershell"
  nivel: "basico"
  tags: ["foreach"]

tipo: mc
opciones_explicitas: ["Recorre 1, 2 y 3 mostrando cada valor", "Muestra `1..3`", "Da error por el rango", "Muestra solo el 3"]
respuesta: "Recorre 1, 2 y 3 mostrando cada valor"

enunciado: "¿Qué hace `foreach ($n in 1..3) {{ $n }}`?"

explicacion: |
  `1..3` es un rango que genera `1, 2, 3`.
```

### 2 — Rango

```
metadata:
  materia: "powershell"
  tema: "bucles_powershell"
  nivel: "basico"
  tags: ["rango"]

tipo: mc
opciones_explicitas: ["1, 2, 3, 4, 5", "Un texto \"1..5\"", "1 y 5", "5 números aleatorios"]
respuesta: "1, 2, 3, 4, 5"

enunciado: "¿Qué genera `1..5`?"

explicacion: |
  El operador `..` crea una secuencia de enteros.
```

### 3 — Instrucción o cmdlet

```
metadata:
  materia: "powershell"
  tema: "bucles_powershell"
  nivel: "intermedio"
  tags: ["foreach"]

tipo: mc
opciones_explicitas: ["`foreach` carga toda la lista y la recorre; `ForEach-Object` procesa los objetos a medida que llegan por la tubería", "Ninguna", "`foreach` no usa variables", "`ForEach-Object` solo funciona con números"]
respuesta: "`foreach` carga toda la lista y la recorre; `ForEach-Object` procesa los objetos a medida que llegan por la tubería"

enunciado: "¿Qué diferencia hay entre la instrucción `foreach` y el cmdlet `ForEach-Object`?"

explicacion: |
  La instrucción usa una variable de bucle; el cmdlet usa `$_` y se coloca después de `|`.
```

### 4 — Variable en el cmdlet

```
metadata:
  materia: "powershell"
  tema: "bucles_powershell"
  nivel: "basico"
  tags: ["$_"]

tipo: mc
opciones_explicitas: ["El proceso actual", "Un guion bajo literal", "Una lista vacía", "Un error"]
respuesta: "El proceso actual"

enunciado: "En `Get-Process | ForEach-Object {{ $_.Name }}`, ¿qué es `$_`?"

explicacion: |
  Dentro del bloque de `ForEach-Object`, `$_` es el objeto que se está procesando.
```

### 5 — for clásico

```
metadata:
  materia: "powershell"
  tema: "bucles_powershell"
  nivel: "basico"
  tags: ["for"]

tipo: mc
opciones_explicitas: ["5 veces (i = 0 a 4)", "6 veces", "4 veces", "Infinitas veces"]
respuesta: "5 veces (i = 0 a 4)"

enunciado: "¿Cuántas veces se repite `for ($i = 0; $i -lt 5; $i++) {{ ... }}`?"

explicacion: |
  Empieza en 0 y sigue mientras `$i -lt 5`.
```

### 6 — Incrementar

```
metadata:
  materia: "powershell"
  tema: "bucles_powershell"
  nivel: "basico"
  tags: ["incremento"]

tipo: completar
respuesta: "++"
respuestas_validas:
  - "++"

enunciado: "En `for ($i = 0; $i -lt 5; $i___)` se suma 1 a `$i` en cada vuelta."

explicacion: |
  `$i++` suma 1. También se puede escribir `$i += 1`.
```

### 7 — while

```
metadata:
  materia: "powershell"
  tema: "bucles_powershell"
  nivel: "basico"
  tags: ["while"]

tipo: mc
opciones_explicitas: ["Antes de cada vuelta; puede no ejecutarse nunca", "Después de cada vuelta", "Solo una vez", "Nunca"]
respuesta: "Antes de cada vuelta; puede no ejecutarse nunca"

enunciado: "¿Cuándo evalúa la condición un `while`?"

explicacion: |
  Si la condición es falsa de entrada, el bloque no se ejecuta.
```

### 8 — do-while

```
metadata:
  materia: "powershell"
  tema: "bucles_powershell"
  nivel: "basico"
  tags: ["do-while"]

tipo: mc
opciones_explicitas: ["Que el bloque se ejecuta al menos una vez", "Que nunca se ejecuta", "Que se ejecuta infinitamente", "Que se ejecuta en paralelo"]
respuesta: "Que el bloque se ejecuta al menos una vez"

enunciado: "¿Qué garantiza `do {{ ... }} while (...)`?"

explicacion: |
  En `do ... while` y `do ... until` la condición se evalúa **después** de la primera vuelta.
```

### 9 — until

```
metadata:
  materia: "powershell"
  tema: "bucles_powershell"
  nivel: "intermedio"
  tags: ["until"]

tipo: mc
opciones_explicitas: ["Repite hasta que `$n` sea igual a 0", "Repite mientras `$n` sea 0", "Repite una sola vez", "Repite 0 veces"]
respuesta: "Repite hasta que `$n` sea igual a 0"

enunciado: "¿Qué hace `do {{ ... }} until ($n -eq 0)`?"

explicacion: |
  `until` sigue repitiendo mientras la condición sea falsa.
```

### 10 — Bucle infinito

```
metadata:
  materia: "powershell"
  tema: "bucles_powershell"
  nivel: "basico"
  tags: ["infinito"]

tipo: mc
opciones_explicitas: ["Porque `$n` nunca cambia dentro del bucle", "Porque while no funciona con números", "Porque falta `do`", "Porque `-le` es incorrecto"]
respuesta: "Porque `$n` nunca cambia dentro del bucle"

enunciado: "¿Por qué este bucle no termina? `$n = 1; while ($n -le 3) {{ $n }}`"

explicacion: |
  Hay que modificar `$n` dentro del bloque (por ejemplo, `$n++`). Se corta con `Ctrl+C`.
```

### 11 — Salir

```
metadata:
  materia: "powershell"
  tema: "bucles_powershell"
  nivel: "basico"
  tags: ["break"]

tipo: mc
opciones_explicitas: ["Termina el bucle", "Salta a la siguiente vuelta", "Reinicia el bucle", "Pausa el script"]
respuesta: "Termina el bucle"

enunciado: "¿Qué hace `break` dentro de un `foreach`?"

explicacion: |
  `continue` salta a la siguiente vuelta.
```

### 12 — Saltear

```
metadata:
  materia: "powershell"
  tema: "bucles_powershell"
  nivel: "basico"
  tags: ["continue"]

tipo: mc
opciones_explicitas: ["Salta el resto de la vuelta y pasa a la siguiente", "Termina el bucle", "Termina el script", "Repite la vuelta"]
respuesta: "Salta el resto de la vuelta y pasa a la siguiente"

enunciado: "¿Qué hace `continue` dentro de un `for`?"

explicacion: |
  Se usa para ignorar casos sin salir del bucle.
```

### 13 — Trampa de ForEach-Object

```
metadata:
  materia: "powershell"
  tema: "bucles_powershell"
  nivel: "avanzado"
  tags: ["trampa"]

tipo: mc
opciones_explicitas: ["return", "continue", "break", "skip"]
respuesta: "return"

enunciado: "¿Qué conviene usar para saltar un elemento dentro de un bloque de `ForEach-Object`?"

explicacion: |
  Dentro de `ForEach-Object`, `continue` y `break` no actúan como en un bucle y pueden interrumpir mucho más de lo esperado; `return` termina solo el bloque actual.
```

### 14 — Leer líneas

```
metadata:
  materia: "powershell"
  tema: "bucles_powershell"
  nivel: "basico"
  tags: ["get-content"]

tipo: mc
opciones_explicitas: ["Get-Content datos.txt | ForEach-Object { $_ }", "Read-Lines datos.txt", "foreach ($l in datos.txt)", "for-line datos.txt"]
respuesta: "Get-Content datos.txt | ForEach-Object { $_ }"

enunciado: "¿Cuál de estas formas recorre las líneas de un archivo?"

explicacion: |
  `Get-Content` entrega una línea por objeto; también sirve `foreach ($linea in Get-Content datos.txt)`.
```

### 15 — Sumar valores

```
metadata:
  materia: "powershell"
  tema: "bucles_powershell"
  nivel: "basico"
  tags: ["acumulador"]

tipo: mc
opciones_explicitas: ["10", "4", "1234", "0"]
respuesta: "10"

enunciado: "¿Qué muestra `$s = 0; foreach ($n in 1..4) {{ $s += $n }}; $s`?"

explicacion: |
  Se acumula 1 + 2 + 3 + 4 = 10.
```

### 16 — Pausa

```
metadata:
  materia: "powershell"
  tema: "bucles_powershell"
  nivel: "intermedio"
  tags: ["sleep"]

tipo: mc
opciones_explicitas: ["Para esperar 5 segundos entre vueltas y no saturar el procesador", "Para detener el script", "Para ejecutar más rápido", "Para borrar variables"]
respuesta: "Para esperar 5 segundos entre vueltas y no saturar el procesador"

enunciado: "En un bucle infinito que revisa algo, ¿para qué se agrega `Start-Sleep -Seconds 5`?"

explicacion: |
  Sin pausa, el bucle gira miles de veces por segundo.
```

### 17 — Multiplicar

```
metadata:
  materia: "powershell"
  tema: "bucles_powershell"
  nivel: "basico"
  tags: ["foreach"]

tipo: mc
opciones_explicitas: ["2, 4 y 6", "1, 2 y 3", "3, 6 y 9", "6"]
respuesta: "2, 4 y 6"

enunciado: "¿Qué muestra `foreach ($n in 1..3) {{ $n * 2 }}`?"

explicacion: |
  En cada vuelta se calcula el doble y se emite el resultado.
```

### 18 — Contar de atrás

```
metadata:
  materia: "powershell"
  tema: "bucles_powershell"
  nivel: "basico"
  tags: ["rango"]

tipo: mc
opciones_explicitas: ["5, 4, 3, 2, 1", "Un error", "1, 2, 3, 4, 5", "Solo 5 y 1"]
respuesta: "5, 4, 3, 2, 1"

enunciado: "¿Qué genera `5..1`?"

explicacion: |
  El rango también puede ir hacia atrás.
```

### 19 — Cuándo usar cada uno

```
metadata:
  materia: "powershell"
  tema: "bucles_powershell"
  nivel: "avanzado"
  tags: ["memoria"]

tipo: mc
opciones_explicitas: ["Get-Content con ForEach-Object en la tubería", "foreach sobre `Get-Content`, siempre", "Un `while ($true)`", "Un `for` con índice"]
respuesta: "Get-Content con ForEach-Object en la tubería"

enunciado: "Para procesar un archivo enorme línea por línea sin cargarlo entero en memoria, ¿qué conviene?"

explicacion: |
  La tubería procesa a medida que se lee. La instrucción `foreach` carga primero toda la lista.
```

### 20 — Menor o igual

```
metadata:
  materia: "powershell"
  tema: "bucles_powershell"
  nivel: "basico"
  tags: ["for"]

tipo: mc
opciones_explicitas: ["3 veces (i = 1, 2 y 3)", "2 veces", "4 veces", "Infinitas veces"]
respuesta: "3 veces (i = 1, 2 y 3)"

enunciado: "¿Cuántas veces se repite `for ($i = 1; $i -le 3; $i++) {{ ... }}`?"

explicacion: |
  Con `-le` (menor o igual) el 3 entra: valen 1, 2 y 3. Con `-lt` serían solo dos vueltas.
```

