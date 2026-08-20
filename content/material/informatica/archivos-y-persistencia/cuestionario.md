# Informatica — Archivos y persistencia (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de persistencia

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["conceptos", "almacenamiento"]

respuesta: verdadero
tipo: vf

enunciado: "La persistencia de datos se refiere a la capacidad de una aplicación para guardar información en un medio no volátil para que los datos sobrevivan al cierre del programa o al apagado del sistema."

explicacion: |
  Correcto. La persistencia permite que la información sea recuperable después de que el proceso de ejecución haya terminado.
```

### 2 — Formatos de intercambio de datos

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["formatos", "json", "xml"]

variables:
  formato_idx: uno_de([0, 1])
  formato_nombre: uno_de(["JSON", "XML"])
  formato_descripcion: uno_de(["es un formato basado en etiquetas como <tag>", "es un formato basado en pares clave-valor"])

opciones_explicitas:
  - "JSON"
  - "XML"

respuesta: formato_nombre
tipo: mc

enunciado: "El formato {formato_nombre} {formato_descripcion} es ampliamente utilizado en la web moderna para el intercambio de datos."

explicacion: |
  Si elegiste JSON, recuerda que usa llaves y corchetes. Si elegiste XML, recuerda que usa etiquetas jerárquicas.
```

### 3 — Extensiones de archivos

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["extensiones", "texto"]

respuesta: ".csv"
tipo: completar
respuestas_validas:
  - ".csv"

enunciado: "Un archivo que contiene datos estructurados en forma de tabla, donde cada línea es un registro y cada valor está separado por una coma, suele tener la extensión ___"

explicacion: |
  La extensión .csv significa 'Comma-Separated Values'.
```

### 4 — Tipos de archivos según su contenido

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["estructurado", "texto_plano"]

variables:
  detalle: uno_de([["Texto Plano", "se puede leer directamente como texto"], ["Binario", "contiene una secuencia de bytes que requiere un formato específico para ser interpretado"]])

opciones_explicitas:
  - "Texto Plano"
  - "Binario"

respuesta: detalle[0]
tipo: mc

enunciado: "Un archivo de tipo {detalle[0]} es aquel que {detalle[1]}."

explicacion: |
  Los archivos de texto plano contienen caracteres legibles (ASCII/UTF-8), mientras que los binarios contienen datos codificados que no son legibles directamente sin un software específico.
```

### 5 — Flujo de operaciones de archivos

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["ciclo_vida", "operaciones"]

opciones_explicitas:
  - "Abrir el archivo"
  - "Leer o escribir datos"
  - "Cerrar el archivo"

respuesta_orden: ["Abrir el archivo", "Leer o escribir datos", "Cerrar el archivo"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos necesarios para manipular un archivo de forma segura en un programa:"

explicacion: |
  Es fundamental abrir el archivo primero, realizar las operaciones de I/O y siempre cerrarlo para liberar recursos y asegurar que los cambios se guarden.
```

### 6 — El formato JSON

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["json", "formato", "datos"]

variables:
  escenario: uno_de([["{\"nombre\": \"Ana\", \"edad\": 25}", "objeto"], ["[1, 2, 3, 4]", "array"], ["{\"id\": 101, \"activo\": true}", "objeto"]])

enunciado: "Se tiene el siguiente fragmento de datos en un archivo: {escenario[0]}."

opciones_explicitas: ["objeto", "array", "diccionario"]
respuesta: escenario[1]
tipo: mc

explicacion: |
  El formato JSON (JavaScript Object Notation) utiliza llaves para representar objetos (pares clave-valor) y corchetes para representar arrays (listas ordenadas).
```

### 7 — Estructura de un archivo CSV

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["csv", "delimitadores"]

enunciado: "En un archivo CSV estándar, los datos de una misma fila se separan por un delimitador (comúnmente una coma) y los registros se separan por un salto de línea. Si tenemos el siguiente contenido:\nnombre,edad,ciudad\nJuan,30,Madrid\n\n¿Cuántos campos o columnas tiene cada registro?"

respuesta: 3
tipo: completar
tolerancia_abs: 0

explicacion: |
  El archivo contiene tres columnas: 'nombre', 'edad' y 'ciudad'. Cada línea representa una fila y las comas separan los valores de esas columnas.
```

### 8 — Persistencia de datos: XML vs JSON

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["xml", "json", "comparacion"]

enunciado: "Analiza las siguientes dos representaciones de un mismo dato:\n1. `<usuario><id>1</id></usuario>`\n2. `{\"id\": 1}`\n\n¿Cuál de las dos opciones utiliza etiquetas de apertura y cierre para definir la estructura de los datos?"

opciones_explicitas: ["La opción 1 (XML)", "La opción 2 (JSON)", "Ambas", "Ninguna"]
respuesta: "La opción 1 (XML)"
tipo: mc

explicacion: |
  XML (eXtensible Markup Language) se basa en un sistema de etiquetas (tags) como `<id>...</id>`, mientras que JSON utiliza una estructura de pares clave-valor con llaves y corchetes.
```

### 9 — El proceso de serialización

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["serializacion", "conceptos"]

enunciado: "Para guardar un objeto de la memoria de un programa en un archivo de forma permanente, se debe realizar un proceso llamado ___."

respuestas_validas:
  - "serialización"
  - "serializacion"
respuesta: "serialización"
tipo: completar

explicacion: |
  La serialización es el proceso de convertir un objeto en un formato que pueda ser almacenado (como un archivo) o transmitido, para luego ser reconstruido (deserializado).
```

### 10 — Flujo de escritura en disco

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "avanzado"
  tags: ["flujo", "orden", "escritura"]

enunciado: "Para asegurar que todos los datos almacenados en el búfer de escritura se escriban físicamente en el disco duro antes de cerrar un archivo, se debe seguir este orden lógico de operaciones:"

opciones_explicitas: ["Abrir archivo -> Escribir datos -> Cerrar archivo"]
respuesta_orden: ["Abrir archivo -> Escribir datos -> Cerrar archivo"]
tipo: ordenar

explicacion: |
  El flujo correcto es abrir el archivo para obtener un puntero/manejador, realizar las operaciones de escritura y, finalmente, cerrar el archivo para liberar recursos y asegurar que los datos se guarden (flush).
```

### 11 — Confusión entre JSON y XML

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

### 12 — Persistencia en memoria vs. disco

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

### 13 — El orden de escritura en archivos

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["flujo", "escritura", "orden"]

variables:
  pasos_correctos: ["Abrir archivo", "Escribir datos", "Cerrar archivo"]
  opciones_desordenadas: ["Cerrar archivo", "Abrir archivo", "Escribir datos"]

respuesta_orden: ["Abrir archivo", "Escribir datos", "Cerrar archivo"]
tipo: ordenar
opciones_explicitas: ["Abrir archivo", "Escribir datos", "Cerrar archivo"]

enunciado: "Para asegurar la integridad de la información y liberar los recursos del sistema operativo, ¿cuál es el orden lógico de operaciones para guardar un registro en un archivo de texto?"

explicacion: |
  Es fundamental abrir el flujo de escritura, realizar la operación de volcado de datos y, muy importante, cerrar el archivo para asegurar que el buffer se vacíe correctamente al disco.
```

### 14 — Formatos de texto plano vs. binario

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["binario", "texto", "encoding"]

variables:
  escenario: uno_de([["Un archivo .txt con caracteres legibles", "texto"], ["Un archivo .jpg con datos comprimidos", "binario"], ["Un archivo .exe con instrucciones de CPU", "binario"]])

respuesta: "texto"
tipo: completar
opciones_explicitas: ["texto", "binario"]
respuestas_validas:
  - "texto"
  - "binario"

enunciado: "Si un archivo es diseñado para ser leído directamente por un editor de notas sin necesidad de un software especializado para interpretar bytes complejos, se dice que el formato es de tipo ___."

explicacion: |
  Los archivos de texto plano almacenan caracteres codificados (como ASCII o UTF-8) que representan símbolos legibles. Los archivos binarios contienen datos en un formato que requiere un programa específico para ser interpretado correctamente.
```

### 15 — El problema del modo de apertura

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "avanzado"
  tags: ["sobrescritura", "append", "error"]

variables:
  caso: uno_de([["un archivo existente que se borra al abrirlo", "sobrescritura"], ["un archivo nuevo que se crea al abrirlo", "creacion"]])

respuesta: "sobrescritura"
tipo: mc
opciones_explicitas: ["sobrescritura", "incremento", "creacion", "lectura"]

enunciado: "Un programador utiliza el modo 'w' (write) en lugar de 'a' (append) al abrir un archivo de logs. ¿Cuál es la consecuencia inmediata si el archivo ya contenía datos?"

explicacion: |
  El modo 'w' (write) trunca el archivo, es decir, borra todo su contenido actual para empezar desde cero. El modo 'a' (append) posiciona el puntero al final para añadir datos sin borrar lo anterior.
```

### 16 — Formato de intercambio de datos

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["formato", "json", "datos"]

respuesta: "JSON"
tipo: "mc"
opciones_explicitas: ["XML", "JSON", "TXT", "CSV"]

enunciado: "A diferencia de XML, que utiliza etiquetas anidadas para estructurar la información, el formato ___ es un estándar ligero basado en pares clave-valor que es ampliamente utilizado en APIs web."

explicacion: |
  JSON (JavaScript Object Notation) es preferido en la web moderna por su sintaxis más simple y menor sobrecarga de datos en comparación con XML.
```

### 17 — Persistencia vs. Memoria Volátil

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["memoria", "persistencia", "volatilidad"]

variables:
  es_persistente: verdadero

respuesta: es_persistente
tipo: vf

enunciado: "Si un programa guarda una variable en el disco duro (archivo), la información se mantiene aunque el proceso termine o se apague la computadora. Esto significa que la escritura en disco es una operación de ___ persistencia."

explicacion: |
  La memoria RAM es volátil (se pierde al apagar el equipo), mientras que el almacenamiento secundario (archivos) permite la persistencia de los datos.
```

### 18 — Estructura de archivos delimitados

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["csv", "estructura", "datos"]

respuesta: "CSV"
tipo: "completar"
respuestas_validas:
  - "CSV"
  - "txt"
  - "bin"

enunciado: "Mientras que un archivo de texto plano (.txt) no tiene una estructura interna definida, un archivo ___ utiliza un carácter delimitador (como una coma o punto y coma) para separar los campos de cada registro."

explicacion: |
  El formato CSV (Comma-Separated Values) es una forma estructurada de representar tablas de datos en texto plano.
```

### 19 — Serialización de objetos

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "avanzado"
  tags: ["serializacion", "objetos", "binario"]

variables:
  escenario: uno_de([["binaria", "binario"], ["de texto", "texto"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["texto", "binario"]

enunciado: "Si la serialización utilizada es {escenario[0]}, el archivo resultante será de tipo ___."

explicacion: |
  La serialización binaria es más eficiente en tamaño y velocidad de lectura/escritura, pero no es legible por humanos, a diferencia de la serialización en texto (como JSON).
```

### 20 — Flujo de procesos de lectura

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["flujo", "archivos", "orden"]

respuesta_orden: ["Abrir", "Leer", "Cerrar"]
tipo: "ordenar"
opciones_explicitas: ["Cerrar", "Leer", "Abrir"]

enunciado: "Para manipular un archivo de forma segura y evitar fugas de memoria o bloqueos del sistema operativo, se debe seguir este orden lógico de operaciones:"

explicacion: |
  Es fundamental abrir el flujo (stream), realizar las operaciones de lectura/escritura y, lo más importante, cerrar el archivo para liberar el recurso.
```

### 21 — Formato de intercambio de datos

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["formato", "json", "datos"]

tipo: mc
opciones_explicitas: ["{\"nombre\": \"Juan\", \"edad\": 30}", "nombre: 'Juan', edad: 30", "<user><name>Juan</name><age>30</age></user>", "nombre=Juan&edad=30"]
respuesta: "{\"nombre\": \"Juan\", \"edad\": 30}"

enunciado: "Un desarrollador necesita guardar un objeto de configuración en un formato estándar de intercambio de datos (JSON). Los datos son: nombre: 'Juan', edad: 30. ¿Cuál es la representación correcta del objeto en este formato?"

explicacion: |
  El formato JSON utiliza llaves para objetos, corchetes para arrays y requiere que las claves y los strings estén encerrados en comillas dobles.
```

### 22 — Extensiones de archivos de texto

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["extensiones", "texto"]

respuesta: ".csv"
tipo: completar
respuestas_validas:
  - ".csv"

enunciado: "Si quieres guardar una lista de productos con sus precios y stock de forma tabular para abrirla en una hoja de cálculo, la extensión más común es ___."

explicacion: |
  El formato CSV (Comma Separated Values) es un estándar para representar datos tabulares en archivos de texto plano.
```

### 23 — Persistencia de datos estructurados

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["xml", "estructura"]

variables:
  es_xml: uno_de([verdadero, falso])
  dato_xml: [[ "Es un formato basado en etiquetas (tags) como <item>...</item>", "Es un formato de texto plano sin estructura definida", "Es un formato binario propietario", "Es un formato de solo lectura" ], [ "Es un formato basado en etiquetas (tags) como <item>...</item>", "Es un formato de texto plano sin estructura definida", "Es un formato binario propietario", "Es un formato de solo lectura" ]]

respuesta: es_xml
tipo: vf
enunciado: "Considerando que el formato XML utiliza etiquetas para definir la jerarquía de los datos, ¿es este un formato estructurado?"

explicacion: |
  XML (eXtensible Markup Language) es un lenguaje de marcado diseñado para almacenar y transportar datos de forma jerárquica mediante etiquetas.
```

### 24 — Flujo de escritura en archivos

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["operaciones", "archivo"]

respuesta_orden: ["Abrir", "Escribir", "Cerrar"]
tipo: ordenar

opciones_explicitas: ["Abrir", "Escribir", "Cerrar"]

enunciado: "Para asegurar la integridad de la información al guardar datos en un archivo físico, ¿cuál es el orden lógico de las operaciones de bajo nivel?"

explicacion: |
  Primero se debe obtener un descriptor mediante la apertura, luego se realiza la transferencia de datos al buffer/disco y finalmente se cierra el flujo para liberar el recurso y asegurar que los datos se escriban físicamente.
```

### 25 — Formatos binarios vs Texto

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "avanzado"
  tags: ["binario", "eficiencia"]

variables:
  caso: uno_de([[".exe o .png", "verdadero"], [".txt o .log", "falso"]])

respuesta: caso[1]

tipo: completar
enunciado: "Si estamos trabajando con un archivo de tipo {caso[0]}, ¿estamos ante un formato de datos binarios que no es legible directamente como texto plano? (verdadero/falso)"

explicacion: |
  Los archivos binarios contienen datos codificados que requieren un software específico para ser interpretados, a diferencia de los archivos de texto que representan caracteres legibles.
```
