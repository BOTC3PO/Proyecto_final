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

respuesta: formato_nombre[formato_idx]
tipo: mc

enunciado: "El formato {formato_nombre[formato_idx]} {formato_descripcion[formato_idx]} es ampliamente utilizado en la web moderna para el intercambio de datos."

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
  tipo_idx: uno_de([0, 1])
  tipo_nombre: uno_de(["Texto Plano", "Binario"])
  tipo_carac: uno_de(["se puede leer directamente como texto", "contiene una secuencia de bytes que requiere un formato específico para ser interpretado"])

opciones_explicitas:
  - "Texto Plano"
  - "Binario"

respuesta: tipo_nombre[tipo_idx]
tipo: mc

enunciado: "Un archivo de tipo {tipo_nombre[tipo_idx]} es aquel que {tipo_carac[tipo_idx]}."

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

respuesta: ["Abrir el archivo", "Leer o escribir datos", "Cerrar el archivo"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos necesarios para manipular un archivo de forma segura en un programa:"

explicacion: |
  Es fundamental abrir el archivo primero, realizar las operaciones de I/O y siempre cerrarlo para liberar recursos y asegurar que los cambios se guarden.
```