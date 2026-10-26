### 1 — Formato de intercambio de datos
```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["formato", "json", "datos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[ "nombre: 'Juan', edad: 30", "{\"nombre\": \"Juan\", \"edad\": 30}" ], [ "id: 101, activo: true", "{\"id\": 101, \"activo\": true}" ]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["{\"nombre\": \"Juan\", \"edad\": 30}", "nombre: 'Juan', edad: 30", "<user><name>Juan</name><age>30</age></user>", "nombre=Juan&edad=30"]

enunciado: "Un desarrollador necesita guardar un objeto de configuración en un formato estándar de intercambio de datos (JSON). ¿Cuál es la representación correcta del objeto según los datos: {datos[escenario_idx][0]}?"

explicacion: |
  El formato JSON utiliza llaves para objetos, corchetes para arrays y requiere que las claves y los strings estén encerrados en comillas dobles.
```

### 2 — Extensiones de archivos de texto
```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["extensiones", "texto"]

respuesta: ".csv"
tipo: completar
respuestas_validas: [".csv"]

enunciado: "Si quieres guardar una lista de productos con sus precios y stock de forma tabular para abrirla en una hoja de cálculo, la extensión más común es ___."

explicacion: |
  El formato CSV (Comma Separated Values) es un estándar para representar datos tabulares en archivos de texto plano.
```

### 3 — Persistencia de datos estructurados
```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["xml", "estructura"]

variables:
  es_xml: uno_de([true, false])
  dato_xml: [[ "Es un formato basado en etiquetas (tags) como <item>...</item>", "Es un formato de texto plano sin estructura definida", "Es un formato binario propietario", "Es un formato de solo lectura" ], [ "Es un formato basado en etiquetas (tags) como <item>...</item>", "Es un formato de texto plano sin estructura definida", "Es un formato binario propietario", "Es un formato de solo lectura" ]]

respuesta: es_xml
tipo: vf

enunciado: "Considerando que el formato XML utiliza etiquetas para definir la jerarquía de los datos, ¿es este un formato estructurado? {es_xml}"

explicacion: |
  XML (eXtensible Markup Language) es un lenguaje de marcado diseñado para almacenar y transportar datos de forma jerárquica mediante etiquetas.
```

### 4 — Flujo de escritura en archivos
```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["operaciones", "archivo"]

respuesta: ["Abrir", "Escribir", "Cerrar"]
tipo: ordenar

opciones_explicitas: ["Abrir", "Escribir", "Cerrar"]

enunciado: "Para asegurar la integridad de la información al guardar datos en un archivo físico, ¿cuál es el orden lógico de las operaciones de bajo nivel?"

explicacion: |
  Primero se debe obtener un descriptor mediante la apertura, luego se realiza la transferencia de datos al buffer/disco y finalmente se cierra el flujo para liberar el recurso y asegurar que los datos se escriban físicamente.
```

### 5 — Formatos binarios vs Texto
```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "avanzado"
  tags: ["binario", "eficiencia"]

variables:
  es_binario: uno_de([true, false])
  caso_binario: [[ "Un archivo .exe o .png", "Un archivo .txt o .log" ], [ "Un archivo .exe o .png", "Un archivo .txt o .log" ]]

respuesta: es_binario

tipo: vf

enunciado: "Si estamos trabajando con un archivo de tipo {caso_binario[es_binario][0]}, ¿estamos ante un formato de datos binarios que no es legible directamente como texto plano? {es_binario}"

explicacion: |
  Los archivos binarios contienen datos codificados que requieren un software específico para ser interpretados, a diferencia de los archivos de texto que representan caracteres legibles.
```