### 1 — Declaración de variable en VBA
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "variables", "declaracion"]
enunciado:
  uno_de([
    "Para declarar una variable de tipo entero en VBA utilizando la palabra clave explícita, ¿cuál es la sintaxis correcta?",
    "En un módulo de VBA, ¿cómo se declara correctamente una variable entera llamada 'miContador'?"
  ])
tipo: completar
respuesta: "Dim miContador As Integer"
respuestas_validas:
  - "Dim miContador As Integer"
  - "Dim miContador As Long"
  - "dim miContador as integer"
  - "DIM miContador AS INTEGER"
pasos:
  - "Identificar la palabra clave de declaración."
  - "Escribir el nombre de la variable."
  - "Especificar el tipo de dato con 'As'."
explicacion: "La palabra clave 'Dim' (Dimension) se usa para declarar variables. La sintaxis es 'Dim NombreVariable As Tipo'. Aunque 'Integer' es común, 'Long' es preferible en VBA moderno para evitar desbordamientos, pero ambas son sintaxis válida de declaración."
```

### 2 — Iteración con For Each
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "bucles", "collection"]
enunciado:
  uno_de([
    "¿Cuál es la estructura de bucle correcta para iterar sobre cada hoja de un libro activo en VBA?",
    "Escribe la sintaxis básica para recorrer todas las hojas del libro actual en VBA."
  ])
tipo: completar
respuesta: "For Each ws In Worksheets"
respuestas_validas:
  - "For Each ws In Worksheets"
  - "For Each hoja In Worksheets"
  - "For Each sh In Worksheets"
  - "for each ws in worksheets"
pasos:
  - "Usar la palabra clave 'For Each'."
  - "Definir una variable objeto (ej. ws)."
  - "Usar 'In' seguido de la colección 'Worksheets'."
explicacion: "El bucle 'For Each' es ideal para colecciones. La sintaxis requiere 'For Each', la variable de iteración, 'In' y la colección. 'Worksheets' es la colección predeterminada para hojas de cálculo en Excel."
```

### 3 — Manejo de errores con On Error GoTo
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "errores", "debugging"]
enunciado:
  uno_de([
    "En VBA, ¿qué instrucción se usa para redirigir la ejecución a una etiqueta específica cuando ocurre un error?",
    "Completa la línea para activar el manejo de errores personalizado en VBA: On Error ____"
  ])
tipo: completar
respuesta: "GoTo Etiqueta"
respuestas_validas:
  - "GoTo Etiqueta"
  - "Goto Etiqueta"
  - "GoTo 0"
  - "GoTo ErrorHandler"
pasos:
  - "Escribir 'On Error'."
  - "Escribir 'GoTo'."
  - "Escribir el nombre de la etiqueta o línea de destino."
explicacion: "'On Error GoTo etiqueta' es la forma clásica de manejar errores en VBA. Redirige el flujo del programa a la línea marcada con esa etiqueta cuando se produce una excepción."
```

### 4 — Propiedad de celda activa
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "rangos", "celdas"]
enunciado:
  uno_de([
    "¿Qué propiedad devuelve la celda directamente a la derecha de la celda activa?",
    "En VBA, si estás en la celda A1, ¿cómo accedes a la celda B1 usando la propiedad relativa a ActiveCell?"
  ])
tipo: completar
respuesta: "ActiveCell.Offset(0, 1)"
respuestas_validas:
  - "ActiveCell.Offset(0, 1)"
  - "ActiveCell.Offset(rowOffset:=0, columnOffset:=1)"
  - "ActiveCell.Offset(0,1)"
  - "activecell.offset(0, 1)"
pasos:
  - "Referenciar 'ActiveCell'."
  - "Usar la propiedad 'Offset'."
  - "Especificar desplazamiento de fila (0) y columna (1)."
explicacion: "La propiedad 'Offset' permite moverse respecto a una celda. Los argumentos son (filas, columnas). Un desplazamiento de 0 filas y 1 columna equivale a moverse una celda a la derecha."
```

### 5 — Tipo de dato para moneda
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "tipos-de-datos", "precisión"]
enunciado:
  uno_de([
    "Para almacenar valores monetarios con alta precisión en VBA, ¿qué tipo de dato se recomienda usar?",
    "¿Cuál es el tipo de dato VBA adecuado para representar cantidades con decimales fijos y alta precisión?"
  ])
tipo: mc
opciones_explicitas:
  - "Single"
  - "Double"
  - "Currency"
  - "Decimal"
respuesta: "Currency"
pasos:
  - "Analizar las necesidades de precisión decimal."
  - "Descartar tipos de punto flotante (Single/Double) por posibles errores de redondeo."
  - "Seleccionar el tipo diseñado para moneda."
explicacion: "El tipo 'Currency' es un entero de 64 bits escalado por 10,000, ideal para cálculos financieros donde la precisión es crítica. 'Decimal' no es un tipo de variable directo en VBA (solo variante)."
```

### 6 — Ejecución de macro desde otro libro
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "referencias", "libros"]
enunciado:
  uno_de([
    "¿Cuál es la sintaxis correcta para ejecutar una macro llamada 'Proceso' en el libro 'Datos.xlsx' desde el libro actual?",
    "En VBA, ¿cómo llamas a una macro externa 'Proceso' ubicada en el libro 'Datos.xlsx'?"
  ])
tipo: completar
respuesta: "Application.Run 'Datos.xlsx!Proceso'"
respuestas_validas:
  - "Application.Run 'Datos.xlsx!Proceso'"
  - "Application.Run \"Datos.xlsx!Proceso\""
  - "Application.Run MacroName:='Datos.xlsx!Proceso'"
  - "application.run 'datos.xlsx!proceso'"
pasos:
  - "Usar el objeto 'Application'."
  - "Llamar al método 'Run'."
  - "Especificar el nombre del libro seguido de '!' y el nombre de la macro."
explicacion: "El método 'Application.Run' permite ejecutar macros en otros libros o complementos. La sintaxis requiere el nombre del archivo entre comillas, un signo de exclamación y el nombre de la macro."
```

### 7 — Propiedad Count de colección
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "colecciones", "propiedades"]
enunciado:
  uno_de([
    "¿Qué propiedad devuelve el número total de hojas de cálculo en el libro de trabajo activo?",
    "En VBA, ¿cómo obtienes la cantidad de hojas en el libro actual?"
  ])
tipo: completar
respuesta: "Worksheets.Count"
respuestas_validas:
  - "Worksheets.Count"
  - "ActiveWorkbook.Sheets.Count"
  - "ThisWorkbook.Worksheets.Count"
  - "worksheets.count"
pasos:
  - "Referenciar la colección 'Worksheets'."
  - "Acceder a la propiedad 'Count'."
  - "Asignar o usar el valor resultante."
explicacion: "La propiedad 'Count' de la colección 'Worksheets' devuelve el número de objetos de tipo Worksheet en el libro. Es una propiedad de solo lectura."
```

### 8 — Condicional If Then Else
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "control-flujo", "if"]
enunciado:
  uno_de([
    "Completa la estructura condicional: If x > 10 Then ____ Else ____",
    "¿Qué palabra clave cierra una estructura If/Then/Else en VBA?"
  ])
tipo: completar
respuesta: "End If"
respuestas_validas:
  - "End If"
  - "end if"
  - "END IF"
pasos:
  - "Escribir 'If' seguido de la condición."
  - "Escribir 'Then'."
  - "Escribir el código del bloque Then."
  - "Escribir 'Else'."
  - "Escribir el código del bloque Else."
  - "Cerrar con 'End If'."
explicacion: "En VBA, las estructuras de control de bloque como 'If...Then...Else' deben cerrarse explícitamente con 'End If' para definir el alcance del condicional."
```

### 9 — Guardar libro sin diálogo
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "archivos", "guardar"]
enunciado:
  uno_de([
    "¿Qué propiedad se debe establecer a False para guardar un libro sin mostrar el diálogo de confirmación si ya existe?",
    "En VBA, al usar 'ActiveWorkbook.SaveAs', ¿qué propiedad evita el mensaje de sobrescritura?"
  ])
tipo: completar
respuesta: "DisplayAlerts"
respuestas_validas:
  - "Application.DisplayAlerts = False"
  - "DisplayAlerts = False"
  - "application.displayalerts = false"
  - "Application.DisplayAlerts = false"
pasos:
  - "Acceder al objeto 'Application'."
  - "Modificar la propiedad 'DisplayAlerts'."
  - "Establecer el valor a 'False'."
explicacion: "La propiedad 'Application.DisplayAlerts' controla si se muestran los cuadros de diálogo de alerta. Establecerla en 'False' permite sobrescribir archivos o ejecutar acciones destructivas sin confirmación."
```

### 10 — Referencia a rango por coordenadas
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "rangos", "notacion"]
enunciado:
  uno_de([
    "¿Cómo se referencia la celda D5 en VBA usando la propiedad 'Cells'?",
    "Escribe la sintaxis VBA para acceder a la celda en fila 5, columna 4."
  ])
tipo: completar
respuesta: "Cells(5, 4)"
respuestas_validas:
  - "Cells(5, 4)"
  - "Cells(5,4)"
  - "cells(5, 4)"
  - "Cells(row:=5, column:=4)"
pasos:
  - "Usar el objeto 'Cells'."
  - "Pasar el número de fila como primer argumento."
  - "Pasar el número de columna como segundo argumento."
explicacion: "La propiedad 'Cells(fila, columna)' permite acceder a una celda específica usando índices numéricos, a diferencia de 'Range' que usa notación A1."
```

### 11 — Tipo de variable para texto
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "variables", "string"]
enunciado:
  uno_de([
    "¿Qué tipo de dato se usa para almacenar cadenas de texto de longitud variable en VBA?",
    "Declara una variable de texto en VBA usando el tipo correcto."
  ])
tipo: completar
respuesta: "Dim nombre As String"
respuestas_validas:
  - "Dim nombre As String"
  - "Dim nombre As String"
  - "dim nombre as string"
  - "Dim nombre As String"
pasos:
  - "Usar 'Dim'."
  - "Definir el nombre de la variable."
  - "Usar 'As String' para cadenas."
explicacion: "El tipo 'String' es estándar para textos de longitud variable en VBA. Para textos de longitud fija se usa 'String * n', pero 'String' es el más común."
```

### 12 — Borrar contenido de celda
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "rangos", "limpiar"]
enunciado:
  uno_de([
    "¿Qué método se usa para borrar solo el contenido (pero no el formato) de la celda A1?",
    "En VBA, ¿cómo se vacía el valor de la celda A1 sin eliminar su estilo?"
  ])
tipo: completar
respuesta: "Range(\"A1\").ClearContents"
respuestas_validas:
  - "Range(\"A1\").ClearContents"
  - "Range(\"A1\").ClearContents"
  - "range(\"A1\").clearcontents"
  - "Cells(1,1).ClearContents"
pasos:
  - "Referenciar el rango 'A1'."
  - "Llamar al método 'ClearContents'."
explicacion: "'ClearContents' elimina los datos de la celda pero preserva el formato, las notas y las validaciones. 'Clear' eliminaría todo, incluyendo el formato."
```

### 13 — Función para obtener ruta
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "archivos", "rutas"]
enunciado:
  uno_de([
    "¿Qué propiedad devuelve la ruta completa del libro que contiene la macro en ejecución?",
    "En VBA, ¿cómo obtienes la carpeta donde está guardado el libro activo?"
  ])
tipo: completar
respuesta: "ThisWorkbook.Path"
respuestas_validas:
  - "ThisWorkbook.Path"
  - "thisworkbook.path"
  - "ActiveWorkbook.Path"
  - "ThisWorkbook.FullName"
pasos:
  - "Acceder al objeto 'ThisWorkbook'."
  - "Usar la propiedad 'Path'."
explicacion: "'ThisWorkbook' se refiere al libro donde reside el código. 'Path' devuelve la ruta del directorio. Si el libro no se ha guardado, devuelve una cadena vacía."
```

### 14 — Conversión de tipo CInt
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "conversión", "tipos"]
enunciado:
  uno_de([
    "¿Qué función de VBA convierte una expresión a tipo Integer?",
    "Escribe la función VBA para convertir la variable 'textoNum' (ej. '10') a entero."
  ])
tipo: completar
respuesta: "CInt(textoNum)"
respuestas_validas:
  - "CInt(textoNum)"
  - "cint(textoNum)"
  - "CInt (textoNum)"
  - "CInt(Val(textoNum))"
pasos:
  - "Usar la función 'CInt'."
  - "Pasar la expresión o variable a convertir como argumento."
explicacion: "'CInt' convierte una expresión a tipo Integer. Si la parte decimal es exactamente 0.5, VBA redondea al número par más cercano (round half to even)."
```

### 15 — Mostrar mensaje MsgBox
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "ui", "msgbox"]
enunciado:
  uno_de([
    "¿Qué función se usa para mostrar un cuadro de diálogo modal con un mensaje al usuario?",
    "Escribe la llamada a la función que muestra 'Hola Mundo' en VBA."
  ])
tipo: completar
respuesta: "MsgBox \"Hola Mundo\""
respuestas_validas:
  - "MsgBox \"Hola Mundo\""
  - "MsgBox(\"Hola Mundo\")"
  - "msgbox \"hola mundo\""
  - "MsgBox Prompt:=\"Hola Mundo\""
pasos:
  - "Usar la función 'MsgBox'."
  - "Pasar el texto del mensaje entre comillas."
  - "Opcionalmente, especificar botones o iconos."
explicacion: "'MsgBox' es una función integrada que muestra un cuadro de diálogo. El primer argumento obligatorio es el 'Prompt' (mensaje)."
```

### 16 — Activar hoja por nombre
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "hojas", "activar"]
enunciado:
  uno_de([
    "¿Cómo se activa la hoja llamada 'Datos' en VBA?",
    "Escribe la instrucción para hacer activa la hoja 'Datos'."
  ])
tipo: completar
respuesta: "Sheets(\"Datos\").Activate"
respuestas_validas:
  - "Sheets(\"Datos\").Activate"
  - "Sheets(\"Datos\").Select"
  - "Worksheets(\"Datos\").Activate"
  - "sheets(\"datos\").activate"
pasos:
  - "Referenciar la hoja por su nombre usando 'Sheets' o 'Worksheets'."
  - "Llamar al método 'Activate' o 'Select'."
explicacion: "'Activate' hace que la hoja sea la activa (visible y con foco). 'Select' la selecciona pero no necesariamente la activa si está oculta o en otro libro."
```

### 17 — Bucle While Wend
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "bucles", "while"]
enunciado:
  uno_de([
    "¿Qué palabra clave inicia un bucle condicional en VBA que se repite mientras una condición sea verdadera?",
    "Completa: ____ x < 10 ... Wend"
  ])
tipo: completar
respuesta: "While"
respuestas_validas:
  - "While"
  - "while"
  - "WHILE"
pasos:
  - "Escribir 'While' seguido de la condición."
  - "Escribir el cuerpo del bucle."
  - "Cerrar con 'Wend'."
explicacion: "'While...Wend' es una estructura de bucle antigua pero aún válida. Se repite mientras la condición sea True. Es menos flexible que 'Do While...Loop'."
```

### 18 — Acceso a valor de celda
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "rangos", "valor"]
enunciado:
  uno_de([
    "¿Qué propiedad se usa para obtener el valor de la celda A1 en VBA?",
    "Escribe la sintaxis para leer el valor de la celda B2."
  ])
tipo: completar
respuesta: "Range(\"B2\").Value"
respuestas_validas:
  - "Range(\"B2\").Value"
  - "Range(\"B2\").Value2"
  - "Cells(2,2).Value"
  - "range(\"b2\").value"
pasos:
  - "Referenciar el rango 'B2'."
  - "Acceder a la propiedad 'Value' (o 'Value2')."
explicacion: "'Value' es la propiedad predeterminada de un rango, pero es explícito escribir '.Value'. 'Value2' es más rápido para fechas y números sin formato."
```

### 19 — Insertar fila
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "filas", "insercion"]
enunciado:
  uno_de([
    "¿Qué método inserta una nueva fila en la posición de la celda activa y desplaza las existentes hacia abajo?",
    "En VBA, ¿cómo insertas una fila nueva encima de la celda A5?"
  ])
tipo: completar
respuesta: "Range(\"A5\").EntireRow.Insert"
respuestas_validas:
  - "Range(\"A5\").EntireRow.Insert"
  - "Rows(5).Insert"
  - "Range(\"A5\").EntireRow.Insert"
  - "range(\"a5\").entirerow.insert"
pasos:
  - "Referenciar la celda o fila destino."
  - "Usar la propiedad 'EntireRow' si es una celda."
  - "Llamar al método 'Insert'."
explicacion: "'EntireRow.Insert' inserta una nueva fila y empuja el contenido existente hacia abajo. Si se usa 'Rows(5).Insert', inserta la fila 5 completa."
```

### 20 — Tipo de dato booleano
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "variables", "boolean"]
enunciado:
  uno_de([
    "¿Qué tipo de dato almacena valores verdadero/falso en VBA?",
    "Declara una variable 'esValido' de tipo booleano en VBA."
  ])
tipo: completar
respuesta: "Dim esValido As Boolean"
respuestas_validas:
  - "Dim esValido As Boolean"
  - "Dim esValido As Boolean"
  - "dim esValido as boolean"
  - "Dim esValido As Boolean"
pasos:
  - "Usar 'Dim'."
  - "Definir el nombre de la variable."
  - "Usar 'As Boolean'."
explicacion: "El tipo 'Boolean' almacena solo 'True' o 'False'. Ocupa 2 bytes en memoria. Es útil para banderas y condiciones lógicas."
```

### 21 — Buscar valor con Find
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "búsqueda", "find"]
enunciado:
  uno_de([
    "¿Qué método del objeto Range se usa para buscar un valor específico en un rango?",
    "En VBA, ¿cómo buscas el valor 'X' en el rango A1:A100?"
  ])
tipo: completar
respuesta: "Range(\"A1:A100\").Find(\"X\")"
respuestas_validas:
  - "Range(\"A1:A100\").Find(\"X\")"
  - "Range(\"A1:A100\").Find(What:=\"X\")"
  - "range(\"a1:a100\").find(\"x\")"
  - "Cells.Find(\"X\")"
pasos:
  - "Referenciar el rango de búsqueda."
  - "Llamar al método 'Find'."
  - "Especificar el 'What' (valor a buscar)."
explicacion: "'Find' busca un valor en un rango y devuelve un objeto Range que representa la primera celda encontrada. Devuelve 'Nothing' si no encuentra nada."
```

### 22 — Limpiar pantalla
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "ui", "actualizar"]
enunciado:
  uno_de([
    "¿Qué propiedad de Application se establece a False para evitar el parpadeo de pantalla durante una macro larga?",
    "En VBA, ¿cómo desactivas la actualización de pantalla para mejorar el rendimiento?"
  ])
tipo: completar
respuesta: "Application.ScreenUpdating = False"
respuestas_validas:
  - "Application.ScreenUpdating = False"
  - "application.screenupdating = false"
  - "Application.ScreenUpdating=False"
  - "Application.ScreenUpdating = false"
pasos:
  - "Acceder al objeto 'Application'."
  - "Modificar la propiedad 'ScreenUpdating'."
  - "Establecer el valor a 'False'."
explicacion: "'ScreenUpdating = False' detiene el refresco visual de Excel, acelerando significativamente las macros que modifican muchas celdas. Debe restablecerse a 'True' al final."
```

### 23 — Crear objeto Worksheet
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "hojas", "crear"]
enunciado:
  uno_de([
    "¿Qué método agrega una nueva hoja de cálculo al libro activo?",
    "En VBA, ¿cómo insertas una nueva hoja al final del libro?"
  ])
tipo: completar
respuesta: "Sheets.Add"
respuestas_validas:
  - "Sheets.Add"
  - "Worksheets.Add"
  - "sheets.add"
  - "Application.Sheets.Add"
pasos:
  - "Acceder al objeto 'Sheets' o 'Worksheets'."
  - "Llamar al método 'Add'."
explicacion: "'Sheets.Add' inserta una nueva hoja. Por defecto, se inserta antes de la hoja activa, pero se puede especificar la posición con argumentos 'Before' o 'After'."
```

### 24 — Condición If con And
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "logica", "and"]
enunciado:
  uno_de([
    "¿Qué palabra clave se usa en VBA para combinar dos condiciones que deben ser ambas verdaderas?",
    "Completa: If x > 0 ____ y < 10 Then"
  ])
tipo: completar
respuesta: "And"
respuestas_validas:
  - "And"
  - "and"
  - "AND"
pasos:
  - "Escribir la primera condición."
  - "Escribir 'And'."
  - "Escribir la segunda condición."
explicacion: "'And' es el operador lógico que devuelve True solo si ambas condiciones son verdaderas. Es equivalente al operador '&' en expresiones de cadena, pero en lógica es 'And'."
```

### 25 — Guardar como nuevo archivo
```
metadata:
  materia: "ofimatica"
  tema: "macros-basicas"
  nivel: "avanzado"
  tags: ["vba", "archivos", "saveas"]
enunciado:
  uno_de([
    "¿Qué método se usa para guardar el libro activo con un nuevo nombre y formato?",
    "En VBA, ¿cómo guardas el libro actual como 'NuevoArchivo.xlsx'?"
  ])
tipo: completar
respuesta: "ActiveWorkbook.SaveAs Filename:=\"NuevoArchivo.xlsx\""
respuestas_validas:
  - "ActiveWorkbook.SaveAs Filename:=\"NuevoArchivo.xlsx\""
  - "ActiveWorkbook.SaveAs \"NuevoArchivo.xlsx\""
  - "activeWorkbook.SaveAs Filename:=\"NuevoArchivo.xlsx\""
  - "ThisWorkbook.SaveAs \"NuevoArchivo.xlsx\""
pasos:
  - "Referenciar el libro activo."
  - "Llamar al método 'SaveAs'."
  - "Especificar el 'Filename'."
explicacion: "'SaveAs' guarda el libro con un nuevo nombre o formato. El argumento 'Filename' es obligatorio. Es crucial usar 'FileFormat' si se requiere un formato específico (ej. xlOpenXMLWorkbook)."
```