### 1 — Confusión entre JSON y XML
```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["formato", "json", "xml"]

respuesta: "JSON"
tipo: mc
opciones_explicitas: ["JSON", "XML", "CSV", "TXT"]

enunciado: "Un programador necesita un formato de intercambio de datos que sea ligero, basado en pares clave-valor y que no utilice etiquetas de cierre como <tag>...</tag>. ¿Qué formato debería usar?"

explicacion: |
  JSON (JavaScript Object Notation) es un formato de texto ligero para el intercambio de datos que utiliza una estructura de objetos y arreglos, a diferencia de XML que depende de etiquetas jerárquicas.
```

### 2 — Persistencia en memoria vs. disco
```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["memoria", "disco", "volatilidad"]

respuesta: falso
tipo: vf

enunciado: "¿Es cierto que los datos almacenados en una variable de tipo 'integer' dentro de la memoria RAM se mantienen intactos después de apagar la computadora?"

explicacion: |
  La memoria RAM es volátil. Para lograr la persistencia, los datos deben escribirse en un dispositivo de almacenamiento secundario (disco duro, SSD) mediante archivos o bases de datos.
```

### 3 — El orden de escritura en archivos
```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["flujo", "escritura", "orden"]

variables:
  pasos_correctos: ["Abrir archivo", "Escribir datos", "Cerrar archivo"]

respuesta: ["Abrir archivo", "Escribir datos", "Cerrar archivo"]
tipo: ordenar
opciones_explicitas: ["Abrir archivo", "Escribir datos", "Cerrar archivo", "Cerrar archivo", "Escribir datos", "Abrir archivo"]

enunciado: "Para asegurar la integridad de la información y liberar los recursos del sistema operativo, ¿cuál es el orden lógico de operaciones para guardar un registro en un archivo de texto?"

explicacion: |
  Es fundamental abrir el flujo de escritura, realizar la operación de volcado de datos y, muy importante, cerrar el archivo para asegurar que el buffer se vacíe correctamente al disco.
```

### 4 — Formatos de texto plano vs. binario
```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["binario", "texto", "encoding"]

variables:
  escenario: uno_de([
    ["Un archivo .txt con caracteres legibles", "texto"],
    ["Un archivo .jpg con datos comprimidos", "binario"],
    ["Un archivo .exe con instrucciones de CPU", "binario"]
  ])

respuesta: "texto"
tipo: completar
opciones_explicitas: ["texto", "binario"]
respuestas_validas: ["texto", "binario"]

enunciado: "Si un archivo es diseñado para ser leído directamente por un editor de notas sin necesidad de un software especializado para interpretar bytes complejos, se dice que el formato es de tipo ___."

explicacion: |
  Los archivos de texto plano almacenan caracteres codificados (como ASCII o UTF-8) que representan símbolos legibles. Los archivos binarios contienen datos en un formato que requiere un programa específico para ser interpretado correctamente.
```

### 5 — El problema del modo de apertura
```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "avanzado"
  tags: ["sobrescritura", "append", "error"]

variables:
  caso: uno_de([
    ["un archivo existente que se borra al abrirlo", "sobrescritura"],
    ["un archivo nuevo que se crea al abrirlo", "creacion"]
  ])

respuesta: "sobrescritura"
tipo: mc
opciones_explicitas: ["sobrescritura", "incremento", "creacion", "lectura"]

enunciado: "Un programador utiliza el modo 'w' (write) en lugar de 'a' (append) al abrir un archivo de logs. ¿Cuál es la consecuencia inmediata si el archivo ya contenía datos?"

explicacion: |
  El modo 'w' (write) trunca el archivo, es decir, borra todo su contenido actual para empezar desde cero. El modo 'a' (append) posiciona el puntero al final para añadir datos sin borrar lo anterior.
```