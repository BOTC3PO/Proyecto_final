# PowerShell — La tubería de objetos (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Qué pasa por la tubería

```
metadata:
  materia: "powershell"
  tema: "pipeline_de_objetos"
  nivel: "basico"
  tags: ["objetos"]

tipo: mc
opciones_explicitas: ["Objetos completos, con sus propiedades", "Solo texto", "Solo números", "Solo nombres de archivos"]
respuesta: "Objetos completos, con sus propiedades"

enunciado: "¿Qué pasa por la tubería (`|`) entre dos cmdlets de PowerShell?"

explicacion: |
  Por eso se puede filtrar y ordenar por el nombre de una propiedad.
```

### 2 — Filtrar

```
metadata:
  materia: "powershell"
  tema: "pipeline_de_objetos"
  nivel: "basico"
  tags: ["where"]

tipo: mc
opciones_explicitas: ["Where-Object", "Select-Object", "Sort-Object", "Group-Object"]
respuesta: "Where-Object"

enunciado: "¿Qué cmdlet filtra los objetos según una condición?"

explicacion: |
  `Where-Object {{ $_.CPU -gt 100 }}` deja pasar solo los objetos que cumplen la condición.
```

### 3 — Elegir propiedades

```
metadata:
  materia: "powershell"
  tema: "pipeline_de_objetos"
  nivel: "basico"
  tags: ["select"]

tipo: mc
opciones_explicitas: ["Select-Object", "Where-Object", "Get-Member", "Out-File"]
respuesta: "Select-Object"

enunciado: "¿Qué cmdlet se usa para elegir solo algunas propiedades de los objetos?"

explicacion: |
  `Select-Object Name, Length` devuelve objetos con solo esas dos propiedades.
```

### 4 — Ordenar

```
metadata:
  materia: "powershell"
  tema: "pipeline_de_objetos"
  nivel: "basico"
  tags: ["sort"]

tipo: mc
opciones_explicitas: ["Get-Process | Sort-Object CPU -Descending", "Get-Process | Order CPU -Max", "Get-Process | Sort CPU -Desc -Max", "Sort-Object Get-Process CPU"]
respuesta: "Get-Process | Sort-Object CPU -Descending"

enunciado: "¿Cómo se ordenan los procesos por uso de CPU, de mayor a menor?"

explicacion: |
  `Sort-Object` ordena por la propiedad indicada; `-Descending` invierte el orden.
```

### 5 — Los cinco primeros

```
metadata:
  materia: "powershell"
  tema: "pipeline_de_objetos"
  nivel: "basico"
  tags: ["first"]

tipo: mc
opciones_explicitas: ["Deja pasar solo los primeros 5 objetos", "Elige 5 propiedades", "Repite 5 veces", "Ordena los 5 últimos"]
respuesta: "Deja pasar solo los primeros 5 objetos"

enunciado: "¿Qué hace `... | Select-Object -First 5`?"

explicacion: |
  También existe `-Last` para los últimos y `-Skip` para saltear los primeros.
```

### 6 — Objeto actual

```
metadata:
  materia: "powershell"
  tema: "pipeline_de_objetos"
  nivel: "basico"
  tags: ["$_"]

tipo: mc
opciones_explicitas: ["El servicio que se está procesando en ese momento", "Un error", "El nombre del script", "El primer servicio de la lista siempre"]
respuesta: "El servicio que se está procesando en ese momento"

enunciado: "En `Get-Service | Where-Object {{ $_.Status -eq 'Running' }}`, ¿qué es `$_`?"

explicacion: |
  `$_` es el objeto actual de la tubería; con `.Status` se accede a su propiedad.
```

### 7 — Comparación de igualdad

```
metadata:
  materia: "powershell"
  tema: "pipeline_de_objetos"
  nivel: "basico"
  tags: ["operadores"]

tipo: mc
opciones_explicitas: ["-eq", "==", "=", "equals"]
respuesta: "-eq"

enunciado: "¿Qué operador se usa para preguntar \"es igual a\" en PowerShell?"

explicacion: |
  PowerShell usa operadores con guion: `-eq`, `-ne`, `-gt`, `-lt`, `-ge`, `-le`. El `=` asigna.
```

### 8 — Mayor que

```
metadata:
  materia: "powershell"
  tema: "pipeline_de_objetos"
  nivel: "basico"
  tags: ["operadores"]

tipo: vf
respuesta: falso

enunciado: "En PowerShell, `Get-Process | Where-Object {{ $_.CPU > 100 }}` filtra los procesos con más de 100 de CPU."

explicacion: |
  En PowerShell `>` es una **redirección** (escribe en un archivo llamado `100`), no una comparación. Para comparar se usa `-gt`.
```

### 9 — Mayor que

```
metadata:
  materia: "powershell"
  tema: "pipeline_de_objetos"
  nivel: "basico"
  tags: ["operadores"]

tipo: completar
respuesta: "-gt"
respuestas_validas:
  - "-gt"

enunciado: "Para comparar \"mayor que\" se usa el operador `___`."

explicacion: |
  `-gt` = *greater than*; `-ge` mayor o igual; `-lt` y `-le` para menor.
```

### 10 — Con comodines

```
metadata:
  materia: "powershell"
  tema: "pipeline_de_objetos"
  nivel: "intermedio"
  tags: ["like"]

tipo: mc
opciones_explicitas: ["Filtra los procesos cuyo nombre empieza con \"chr\"", "Filtra los que contienen exactamente 'chr*'", "Cuenta los procesos", "Detiene los procesos chr"]
respuesta: "Filtra los procesos cuyo nombre empieza con \"chr\""

enunciado: "¿Qué hace `Get-Process | Where-Object ProcessName -like 'chr*'`?"

explicacion: |
  `-like` admite comodines (`*`, `?`). Para expresiones regulares se usa `-match`.
```

### 11 — Contar

```
metadata:
  materia: "powershell"
  tema: "pipeline_de_objetos"
  nivel: "basico"
  tags: ["measure"]

tipo: mc
opciones_explicitas: ["Get-ChildItem -File | Measure-Object", "Get-ChildItem | Count-All", "Count-Object Get-ChildItem", "Get-ChildItem -File | Sum"]
respuesta: "Get-ChildItem -File | Measure-Object"

enunciado: "¿Cómo se cuentan los archivos de la carpeta actual?"

explicacion: |
  `Measure-Object` cuenta los objetos que recibe (propiedad `Count`). Con `-Property Length -Sum` suma tamaños.
```

### 12 — Recorrer

```
metadata:
  materia: "powershell"
  tema: "pipeline_de_objetos"
  nivel: "basico"
  tags: ["foreach"]

tipo: mc
opciones_explicitas: ["Ejecuta un bloque de código para cada objeto que llega", "Ordena los objetos", "Cuenta los objetos", "Muestra la ayuda"]
respuesta: "Ejecuta un bloque de código para cada objeto que llega"

enunciado: "¿Qué hace `ForEach-Object`?"

explicacion: |
  Dentro del bloque se usa `$_` para el objeto actual. Su alias es `%`.
```

### 13 — Agrupar

```
metadata:
  materia: "powershell"
  tema: "pipeline_de_objetos"
  nivel: "intermedio"
  tags: ["group"]

tipo: mc
opciones_explicitas: ["Group-Object", "Join-Object", "Collect-Object", "Merge-Object"]
respuesta: "Group-Object"

enunciado: "¿Qué cmdlet agrupa objetos por el valor de una propiedad?"

explicacion: |
  `Get-Service | Group-Object Status` agrupa los servicios por estado y muestra cuántos hay en cada grupo.
```

### 14 — Cuánto pesa

```
metadata:
  materia: "powershell"
  tema: "pipeline_de_objetos"
  nivel: "intermedio"
  tags: ["measure"]

tipo: mc
opciones_explicitas: ["Get-ChildItem -File | Measure-Object -Property Length -Sum", "Get-ChildItem | Sum Length", "Measure-Object Get-ChildItem Length", "Get-ChildItem -File -Sum"]
respuesta: "Get-ChildItem -File | Measure-Object -Property Length -Sum"

enunciado: "¿Cómo se suma el tamaño de todos los archivos de una carpeta?"

explicacion: |
  `-Property` indica qué propiedad medir y `-Sum` pide la suma.
```

### 15 — Formatear al final

```
metadata:
  materia: "powershell"
  tema: "pipeline_de_objetos"
  nivel: "intermedio"
  tags: ["format"]

tipo: mc
opciones_explicitas: ["Al final, solo para mostrar", "Al principio", "En cualquier lugar, da lo mismo", "Antes de `Export-Csv`"]
respuesta: "Al final, solo para mostrar"

enunciado: "¿Dónde debe ir `Format-Table` en una tubería?"

explicacion: |
  `Format-*` produce objetos de formato, no los datos originales. Si se coloca antes de `Export-Csv`, el archivo sale con datos de formato.
```

### 16 — Guardar en CSV

```
metadata:
  materia: "powershell"
  tema: "pipeline_de_objetos"
  nivel: "basico"
  tags: ["export"]

tipo: mc
opciones_explicitas: ["Export-Csv", "Out-Csv", "Save-Csv", "Write-Csv"]
respuesta: "Export-Csv"

enunciado: "¿Qué cmdlet guarda los objetos de la tubería en un archivo CSV?"

explicacion: |
  Por ejemplo, `Get-Process | Select-Object Name, Id | Export-Csv procesos.csv -NoTypeInformation`.
```

### 17 — Filtrar temprano

```
metadata:
  materia: "powershell"
  tema: "pipeline_de_objetos"
  nivel: "intermedio"
  tags: ["rendimiento"]

tipo: mc
opciones_explicitas: ["Porque filtra en el origen y es más rápido en carpetas grandes", "Porque hace más cosas", "Porque da errores", "No hay diferencia"]
respuesta: "Porque filtra en el origen y es más rápido en carpetas grandes"

enunciado: "¿Por qué es mejor `Get-ChildItem -Filter *.log` que `Get-ChildItem | Where-Object Name -like '*.log'`?"

explicacion: |
  Cuanto antes se descarta lo que no sirve, menos objetos hay que mover por la tubería.
```

### 18 — Pasar a otro comando

```
metadata:
  materia: "powershell"
  tema: "pipeline_de_objetos"
  nivel: "basico"
  tags: ["tuberia"]

tipo: mc
opciones_explicitas: ["Detiene el proceso (o los procesos) de notepad", "Muestra los procesos notepad", "Inicia notepad", "Da error porque faltan parámetros"]
respuesta: "Detiene el proceso (o los procesos) de notepad"

enunciado: "¿Qué hace `Get-Process notepad | Stop-Process`?"

explicacion: |
  La tubería entrega los objetos proceso al parámetro de entrada de `Stop-Process`. Con `-WhatIf` se puede probar antes.
```

### 19 — Dos propiedades

```
metadata:
  materia: "powershell"
  tema: "pipeline_de_objetos"
  nivel: "basico"
  tags: ["select"]

tipo: mc
opciones_explicitas: ["Las propiedades Name e Id de los primeros 3 procesos", "Los 3 procesos con todas sus propiedades", "Solo el nombre", "Un error de sintaxis"]
respuesta: "Las propiedades Name e Id de los primeros 3 procesos"

enunciado: "¿Qué da `Get-Process | Select-Object Name, Id -First 3`?"

explicacion: |
  `Select-Object` admite varias propiedades y `-First` a la vez.
```

### 20 — Pasos habituales

```
metadata:
  materia: "powershell"
  tema: "pipeline_de_objetos"
  nivel: "intermedio"
  tags: ["patron"]

tipo: mc
opciones_explicitas: ["Obtener, filtrar, ordenar, elegir propiedades y, al final, mostrar o exportar", "Mostrar, obtener, filtrar", "Exportar, filtrar, obtener", "Ordenar, obtener, mostrar, filtrar"]
respuesta: "Obtener, filtrar, ordenar, elegir propiedades y, al final, mostrar o exportar"

enunciado: "¿Cuál es el orden habitual de una tubería de análisis?"

explicacion: |
  Es el patrón básico: fuente, filtro, orden, selección y salida.
```

