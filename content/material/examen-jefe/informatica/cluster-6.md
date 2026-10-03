# Examen jefe — [PENDIENTE #821]

> Logro #821. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

---

## Sección: archivos-y-persistencia (25 preguntas)

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

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["formatos", "json", "xml"]

variables:
  formato_idx: uno_de([0, 1])
  nombres: ["JSON", "XML"]
  descripciones: ["es un formato basado en pares clave-valor", "es un formato basado en etiquetas como <tag>"]

opciones_explicitas:
  - "JSON"
  - "XML"

respuesta: nombres[formato_idx]
tipo: mc

enunciado: "El formato {nombres[formato_idx]} {descripciones[formato_idx]} es ampliamente utilizado en la web moderna para el intercambio de datos."

explicacion: |
  Si elegiste JSON, recuerda que usa llaves y corchetes. Si elegiste XML, recuerda que usa etiquetas jerárquicas.
```

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

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "avanzado"
  tags: ["flujo", "orden", "escritura"]

enunciado: "Para asegurar que todos los datos almacenados en el búfer de escritura se escriban físicamente en el disco duro antes de cerrar un archivo, se debe seguir este orden lógico de operaciones:"

opciones_explicitas: ["Abrir archivo", "Escribir datos", "Cerrar archivo"]
respuesta_orden: ["Abrir archivo", "Escribir datos", "Cerrar archivo"]
tipo: ordenar

explicacion: |
  El flujo correcto es abrir el archivo para obtener un puntero/manejador, realizar las operaciones de escritura y, finalmente, cerrar el archivo para liberar recursos y asegurar que los datos se guarden (flush).
```

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

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["flujo", "escritura", "orden"]

respuesta_orden: ["Abrir archivo", "Escribir datos", "Cerrar archivo"]
tipo: ordenar
opciones_explicitas: ["Abrir archivo", "Escribir datos", "Cerrar archivo"]

enunciado: "Para asegurar la integridad de la información y liberar los recursos del sistema operativo, ¿cuál es el orden lógico de operaciones para guardar un registro en un archivo de texto?"

explicacion: |
  Es fundamental abrir el flujo de escritura, realizar la operación de volcado de datos y, muy importante, cerrar el archivo para asegurar que el buffer se vacíe correctamente al disco.
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["binario", "texto", "encoding"]

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

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "avanzado"
  tags: ["sobrescritura", "append", "error"]

respuesta: "sobrescritura"
tipo: mc
opciones_explicitas: ["sobrescritura", "incremento", "creacion", "lectura"]

enunciado: "Un programador utiliza el modo 'w' (write) en lugar de 'a' (append) al abrir un archivo de logs. ¿Cuál es la consecuencia inmediata si el archivo ya contenía datos?"

explicacion: |
  El modo 'w' (write) trunca el archivo, es decir, borra todo su contenido actual para empezar desde cero. El modo 'a' (append) posiciona el puntero al final para añadir datos sin borrar lo anterior.
```

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

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["memoria", "persistencia", "volatilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Si un programa guarda una variable en el disco duro (archivo), la información se mantiene aunque el proceso termine o se apague la computadora. Esto significa que la escritura en disco es una operación persistente."

explicacion: |
  La memoria RAM es volátil (se pierde al apagar el equipo), mientras que el almacenamiento secundario (archivos) permite la persistencia de los datos.
```

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
  - "csv"

enunciado: "Mientras que un archivo de texto plano (.txt) no tiene una estructura interna definida, un archivo ___ utiliza un carácter delimitador (como una coma o punto y coma) para separar los campos de cada registro."

explicacion: |
  El formato CSV (Comma-Separated Values) es una forma estructurada de representar tablas de datos en texto plano.
```

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

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["xml", "estructura"]

respuesta: verdadero
tipo: vf
enunciado: "Considerando que el formato XML utiliza etiquetas para definir la jerarquía de los datos, ¿es este un formato estructurado?"

explicacion: |
  XML (eXtensible Markup Language) es un lenguaje de marcado diseñado para almacenar y transportar datos de forma jerárquica mediante etiquetas.
```

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

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "avanzado"
  tags: ["binario", "eficiencia"]

variables:
  extensiones: [".exe o .png", ".txt o .log"]
  valores: [verdadero, falso]
  idx: uno_de([0, 1])

respuesta: valores[idx]

tipo: vf
enunciado: "Si estamos trabajando con un archivo de tipo {extensiones[idx]}, ¿estamos ante un formato de datos binarios que no es legible directamente como texto plano?"

explicacion: |
  Los archivos binarios contienen datos codificados que requieren un software específico para ser interpretados, a diferencia de los archivos de texto que representan caracteres legibles.
```

## Sección: inteligencia-artificial-reglas-a-aprendizaje (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "inteligencia-artificial-reglas-a-aprendizaje"
  nivel: "basico"
  tags: ["conceptos", "historia"]

respuesta: "aprendizaje automatico"
tipo: completar
respuestas_validas:
  - "aprendizaje automatico"
  - "machine learning"

enunciado: "Mientras que los sistemas tradicionales se basan en reglas programadas manualmente, la disciplina que permite a las máquinas mejorar su rendimiento mediante la experiencia con datos se denomina ___."

explicacion: |
  El paso de la IA basada en reglas (sistemas expertos) al aprendizaje automático (Machine Learning) marca la transición de la programación explícita al entrenamiento mediante datos.
```

```
metadata:
  materia: "informatica"
  tema: "inteligencia-artificial-reglas-a-aprendizaje"
  nivel: "basico"
  tags: ["sistemas-expertos", "logica"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema basado en reglas (como un sistema experto), el conocimiento es extraído y codificado manualmente por un experto humano bajo la forma de estructuras 'SI [condición] ENTONCES [acción]'."

explicacion: |
  Efectivamente, los sistemas de IA clásica dependen de que un programador o experto defina todas las reglas lógicas que el sistema debe seguir para tomar decisiones.
```

```
metadata:
  materia: "informatica"
  tema: "inteligencia-artificial-reglas-a-aprendizaje"
  nivel: "basico"
  tags: ["datos", "entrenamiento"]

variables:
  escenario: uno_de([["un sistema de filtrado de spam basado en reglas", "palabra 'viagra'"], ["un modelo de reconocimiento de imágenes", "fotos de gatos"]])

respuesta: "datos de entrenamiento"
tipo: mc
opciones_explicitas: ["datos de entrenamiento", "reglas explícitas", "Ninguna de las anteriores"]

enunciado: "En el contexto de la IA moderna, ¿cuál de los siguientes elementos es el componente fundamental que sustituye a la regla explícita para permitir que el sistema aprenda? Ejemplo de insumo: {escenario[1]}."

pasos:
  - "Identificar qué elemento es el insumo para el entrenamiento."
  - "Comparar con el concepto de 'regla manual' vs 'dato de entrenamiento'."

explicacion: |
  En el aprendizaje automático, el modelo no recibe la regla, sino los datos (como {escenario[1]}) para que él mismo infiera los patrones.
```

```
metadata:
  materia: "informatica"
  tema: "inteligencia-artificial-reglas-a-aprendizaje"
  nivel: "intermedio"
  tags: ["terminologia", "machine-learning"]

respuesta_orden: ["Datos", "Algoritmo", "Modelo"]
tipo: ordenar

opciones_explicitas: ["Datos", "Algoritmo", "Modelo"]

enunciado: "Ordene los componentes en el orden lógico de un proceso de aprendizaje automático: primero se requieren los ___, luego se aplica un ___ sobre ellos y finalmente se obtiene un ___ capaz de realizar predicciones."

explicacion: |
  El flujo estándar es: Datos (input) $\rightarrow$ Algoritmo (proceso de entrenamiento) $\rightarrow$ Modelo (producto final entrenado).
```

```
metadata:
  materia: "informatica"
  tema: "inteligencia-artificial-reglas-a-aprendizaje"
  nivel: "intermedio"
  tags: ["paradigma", "comparativa"]

respuesta: "aprendizaje automatico"
tipo: mc
opciones_explicitas: ["sistemas expertos", "aprendizaje automatico", "programación lógica", "sistemas de reglas"]

enunciado: "Si un programador debe escribir cada instrucción lógica para que la IA funcione, está usando un sistema de reglas. Si el sistema descubre la lógica por sí mismo analizando patrones, está usando:"

explicacion: |
  La diferencia clave es la fuente de la lógica: en los sistemas de reglas es el humano (codificación), en el aprendizaje automático es el patrón extraído de los datos.
```

```
metadata:
  materia: "informatica"
  tema: "inteligencia_artificial_reglas"
  nivel: "basico"
  tags: ["ia", "logica", "reglas"]

enunciado: "Un sistema experto de diagnóstico médico utiliza una regla lógica simple: 'Si el paciente tiene fiebre Y dolor de garganta, entonces el diagnóstico es Faringitis'. Si un paciente presenta fiebre pero NO presenta dolor de garganta, el sistema determinará que el diagnóstico NO es Faringitis según esta regla específica."

respuesta: falso
tipo: vf

explicacion: |
  En los sistemas basados en reglas explícitas, el conocimiento es rígido. Si no se cumplen todas las condiciones de la premisa (antecedente), la regla no se dispara, independientemente de si hay otros síntomas presentes.
```

```
metadata:
  materia: "informatica"
  tema: "ia_aprendizaje_datos"
  nivel: "intermedio"
  tags: ["machine_learning", "paradigma"]

enunciado: "En el paradigma de Machine Learning, a diferencia de la programación tradicional, el componente principal que determina la lógica del sistema es:"

opciones_explicitas: ["El código fuente escrito por el humano", "Los datos y los ejemplos proporcionados", "La memoria RAM del computador"]
respuesta: "Los datos y los ejemplos proporcionados"
tipo: mc

explicacion: |
  En la IA clásica (Sistemas Expertos), el humano codifica las reglas. En el Machine Learning, el humano proporciona datos y el algoritmo "aprende" las reglas (parámetros) mediante optimización.
```

```
metadata:
  materia: "informatica"
  tema: "entrenamiento_ia"
  nivel: "intermedio"
  tags: ["machine_learning", "pasos"]

enunciado: "Para que un modelo de IA aprenda a reconocer imágenes de gatos, se debe seguir un orden lógico de trabajo. Ordena los siguientes pasos:"

opciones_explicitas: ["Recolección de imágenes de gatos y perros", "Entrenamiento del modelo con los datos", "Evaluación del modelo con datos nuevos", "Implementación en una aplicación"]
respuesta_orden: ["Recolección de imágenes de gatos y perros", "Entrenamiento del modelo con los datos", "Evaluación del modelo con datos nuevos", "Implementación en una aplicación"]
tipo: ordenar

explicacion: |
  El flujo estándar de Ciencia de Datos implica: 1. Obtener datos (Data Collection), 2. Entrenar (Training), 3. Validar/Testear (Evaluation) y 4. Desplegar (Deployment).
```

```
metadata:
  materia: "informatica"
  tema: "clasificacion_ia"
  nivel: "basico"
  tags: ["machine_learning", "conceptos"]

enunciado: "Un sistema de filtrado de SPAM analiza miles de correos electrónicos previos. Si el sistema detecta que la palabra 'Gratis' aparece en el 90% de los correos marcados como spam, aprenderá a asociar esa palabra con el spam. Este proceso de encontrar una función que asocie características con etiquetas se llama: ___"

respuestas_validas:
  - "Entrenamiento"
respuesta: "Entrenamiento"
tipo: completar

explicacion: |
  El entrenamiento es el proceso mediante el cual el algoritmo ajusta sus parámetros internos para minimizar el error entre sus predicciones y las etiquetas reales de los datos.
```

```
metadata:
  materia: "informatica"
  tema: "generalizacion_ia"
  nivel: "avanzado"
  tags: ["machine_learning", "error"]

enunciado: "Cuando un sistema de IA ha aprendido tan perfectamente los datos de entrenamiento que ha 'memorizado' el ruido y los detalles irrelevantes, perdiendo su capacidad de aplicarse a casos reales distintos, estamos ante un problema de:"

opciones_explicitas: ["Overfitting", "Underfitting", "Bias", "Variance"]
respuesta: "Overfitting"
tipo: mc

explicacion: |
  El Overfitting (sobreajuste) ocurre cuando el modelo es demasiado complejo y se adapta excesivamente al ruido de los datos de entrenamiento, lo que resulta en un error muy alto cuando se le presentan datos nuevos (pérdida de generalización).
```

```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "basico"
  tags: ["ia", "conceptos_base"]

respuesta: "aprendizaje automático"
tipo: "completar"
respuestas_validas:
  - "aprendizaje automático"
  - "machine learning"

enunciado: "Mientras que un sistema basado en reglas requiere que un programador defina manualmente cada condición lógica, el ___ es un paradigma donde el sistema identifica patrones directamente a partir de los datos."

explicacion: |
  En la IA clásica (sistemas expertos), el conocimiento es explícito y codificado por humanos. En el aprendizaje automático, el modelo "aprende" las reglas estadísticas a partir de la experiencia (datos).
```

```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "intermedio"
  tags: ["escalabilidad", "sistemas_expertos"]

variables:
  es_complejo: falso

respuesta: falso
tipo: "vf"

enunciado: "Un sistema basado en reglas explícitas es intrínsecamente más eficiente y fácil de mantener que un modelo de aprendizaje automático cuando el problema involucra miles de variables interdependientes y dinámicas."

explicacion: |
  Falso. A medida que la complejidad y el número de variables aumentan, las reglas manuales se vuelven imposibles de gestionar (explosión combinatoria), mientras que los modelos de aprendizaje están diseñados para manejar esa dimensionalidad.
```

```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "intermedio"
  tags: ["naturaleza_aprendizaje"]

respuesta: "correlaciones estadísticas"
tipo: "mc"
opciones_explicitas: ["correlaciones estadísticas", "lógica formal pura", "causalidad absoluta", "sentido común humano"]

enunciado: "Es un error común pensar que un modelo de aprendizaje profundo entiende la 'causa' de un fenómeno. En realidad, lo que el modelo optimiza es la detección de ___ en los datos de entrenamiento."

explicacion: |
  Los modelos de IA actuales son excelentes encontrando patrones y correlaciones, pero no comprenden la causalidad ni el "porqué" de las cosas, a menos que se diseñen arquitecturas específicas para inferencia causal.
```

```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "basico"
  tags: ["metodologia"]

respuesta_orden: ["Definir reglas", "Escribir código de decisión", "Probar lógica"]
tipo: "ordenar"
opciones_explicitas: ["Definir reglas", "Escribir código de decisión", "Probar lógica"]

enunciado: "Ordena los pasos típicos en el desarrollo de un Sistema Experto (basado en reglas) de forma lógica:"

explicacion: |
  En el enfoque basado en reglas, primero se extrae el conocimiento del experto (reglas), luego se traduce a código y finalmente se valida la lógica.
```

```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "avanzado"
  tags: ["sesgo", "datos"]

variables:
  idx: uno_de([0, 1])
  escenario: [["Un sistema de reglas tiene un error porque el programador olvidó una condición.", "error_programador"], ["Un sistema de aprendizaje tiene un error porque los datos de entrenamiento son parciales.", "error_datos"]]

respuesta: "error_datos"
tipo: "mc"
opciones_explicitas: ["error_programador", "error_datos"]

enunciado: "En el escenario {escenario[idx][0]}, el problema principal es un: ___"

explicacion: |
  Si el sistema es de reglas, el error es de diseño/lógica humana. Si el sistema es de aprendizaje, el error suele provenir de la calidad o representatividad de los datos (sesgo).
```

```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "basico"
  tags: ["ia", "logica", "aprendizaje_automatico"]

respuesta: "aprendizaje automático"
tipo: completar
respuestas_validas:
  - "aprendizaje automático"

enunciado: "Mientras que un sistema basado en reglas requiere que un programador defina manualmente cada condición lógica, el ___ permite que el sistema descubra patrones directamente desde los datos."

explicacion: |
  En la IA tradicional (sistemas expertos), la lógica es explícita y programada por humanos. En el Machine Learning, la lógica se infiere a partir de la observación de datos.
```

```
metadata:
  materia: "informatica"
  tema: "aprendizaje_supervisado"
  nivel: "intermedio"
  tags: ["ia", "supervisado", "datos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["clasificar_imágenes", "etiquetadas"], ["predecir_precios", "numéricas"]]

respuesta: "etiquetadas"
tipo: mc
opciones_explicitas: ["etiquetadas", "no estructuradas", "aleatorias", "puramente sintácticas"]

enunciado: "En un escenario de {escenarios[escenario_idx][0]}, el modelo requiere que los datos de entrenamiento estén {escenarios[escenario_idx][1]} para aprender la relación entre la entrada y la salida."

explicacion: |
  El aprendizaje supervisado se distingue de otros por el uso de un conjunto de datos donde la respuesta correcta (etiqueta) ya es conocida.
```

```
metadata:
  materia: "informatica"
  tema: "generalizacion_ia"
  nivel: "avanzado"
  tags: ["ia", "generalizacion", "overfitting"]

respuesta: falso
tipo: vf

enunciado: "Un sistema basado en reglas es capaz de manejar situaciones que no fueron explícitamente programadas mediante una regla 'si-entonces', a diferencia de un modelo de aprendizaje que puede generalizar patrones nuevos."

explicacion: |
  Falso. Un sistema de reglas es rígido: si no existe una regla para un caso específico, el sistema no puede decidir. El aprendizaje busca la generalización para manejar datos no vistos.
```

```
metadata:
  materia: "informatica"
  tema: "flujo_desarrollo_ia"
  nivel: "intermedio"
  tags: ["ia", "workflow", "datos"]

respuesta_orden: ["Recolección de datos", "Preprocesamiento", "Entrenamiento del modelo", "Evaluación de precisión"]
tipo: ordenar
opciones_explicitas: ["Recolección de datos", "Preprocesamiento", "Entrenamiento del modelo", "Evaluación de precisión"]

enunciado: "Ordene las etapas típicas del ciclo de vida de un proyecto de aprendizaje automático, desde la obtención de información hasta la validación del modelo."

explicacion: |
  A diferencia del desarrollo de software tradicional donde el centro es el código, en IA el flujo comienza con la gestión de datos y termina validando la capacidad de predicción.
```

```
metadata:
  materia: "informatica"
  tema: "fuente_conocimiento"
  nivel: "basico"
  tags: ["ia", "conocimiento", "datos"]

respuesta: "datos"
tipo: mc
opciones_explicitas: ["conocimiento experto", "datos", "reglas lógicas", "hardware"]

enunciado: "En la IA clásica, el conocimiento proviene de la codificación de la experiencia humana; en la IA moderna basada en aprendizaje, el conocimiento se extrae de los ___."

explicacion: |
  La transición fundamental es pasar de la "codificación de reglas" (conocimiento manual) a la "extracción de patrones" (conocimiento derivado de datos).
```

```
metadata:
  materia: "informatica"
  tema: "inteligencia_artificial_reglas_a_aprendizaje"
  nivel: "basico"
  tags: ["ia", "conceptos", "aprendizaje"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Un sistema de diagnóstico médico basado en un árbol de decisión con reglas 'SI fiebre Y tos ENTONCES gripe'", "Basado en reglas explícitas"], ["Un sistema de reconocimiento de imágenes que identifica gatos tras ver 10.000 fotos de gatos", "Aprendizaje basado en datos"]]

enunciado: "Identifica si el siguiente escenario representa un sistema basado en reglas explícitas o un sistema que aprende de datos: {datos[escenario_idx][0]}"

opciones_explicitas: ["Basado en reglas explícitas", "Aprendizaje basado en datos"]
respuesta: datos[escenario_idx][1]
tipo: mc

explicacion: |
  Los sistemas basados en reglas dependen de la lógica programada manualmente por expertos (IF-THEN), mientras que el aprendizaje automático (Machine Learning) extrae patrones directamente de los datos.
```

```
metadata:
  materia: "informatica"
  tema: "inteligencia_artificial_reglas_a_aprendizaje"
  nivel: "intermedio"
  tags: ["machine_learning", "datos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un modelo de detección de fraude que analiza millones de transacciones para encontrar anomalías."], ["Un chatbot que responde preguntas siguiendo un guion predefinido de 'si el usuario dice X, responde Y'."]]
  respuestas: [["Aprendizaje basado en datos", "Basado en reglas explícitas"], ["Basado en reglas explícitas", "Aprendizaje basado en datos"]]

enunciado: "En el caso: {casos[caso_idx][0]}, el paradigma predominante es ___."

respuestas_validas:
  - "Aprendizaje basado en datos"
  - "Basado en reglas explícitas"
respuesta: respuestas[caso_idx][0]
tipo: completar

explicacion: |
  En el primer caso, el sistema descubre la estructura de los datos (aprendizaje), mientras que en el segundo, la estructura ya está definida por el programador (reglas).
```

```
metadata:
  materia: "informatica"
  tema: "inteligencia_artificial_reglas_a_aprendizaje"
  nivel: "avanzado"
  tags: ["generalizacion", "ia"]

variables:
  textos: ["Un sistema de reglas que no reconoce un nuevo tipo de spam porque la palabra clave no está en su lista.", "Un modelo de IA que, al ver un objeto nunca visto, estima su categoría basándose en su similitud con datos previos."]
  valores: [falso, verdadero]
  escenario_idx: uno_de([0, 1])

enunciado: "Analiza la situación: {textos[escenario_idx]}. ¿Es esta una característica típica de un sistema que aprende de datos?"

respuesta: valores[escenario_idx]
tipo: vf
explicacion: |
  La generalización es la capacidad de un modelo de aprendizaje para aplicar lo aprendido a datos no vistos durante el entrenamiento, algo que los sistemas de reglas puras no pueden hacer sin intervención humana.
```

```
metadata:
  materia: "informatica"
  tema: "inteligencia_artificial_reglas_a_aprendizaje"
  nivel: "intermedio"
  tags: ["flujo_trabajo", "datos"]

enunciado: "Ordena los pasos típicos para desarrollar un sistema de aprendizaje automático (Machine Learning):"

opciones_explicitas: ["Recolección de datos", "Entrenamiento del modelo", "Evaluación de precisión", "Implementación en producción"]
respuesta_orden: ["Recolección de datos", "Entrenamiento del modelo", "Evaluación de precisión", "Implementación en producción"]
tipo: ordenar

explicacion: |
  A diferencia de los sistemas basados en reglas donde el paso principal es el "diseño de la lógica", en ML el flujo gira en torno a la gestión de datos y la optimización del modelo.
```

```
metadata:
  materia: "informatica"
  tema: "inteligencia_artificial_reglas_a_aprendizaje"
  nivel: "basico"
  tags: ["datos", "requisitos"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [["Un algoritmo de visión artificial sin acceso a imágenes previas."], ["Un algoritmo de recomendación de música sin historial de reproducciones del usuario."]]
  resultado: ["No puede aprender", "No puede aprender"]

enunciado: "Si tenemos el siguiente escenario: {ejemplos[ejemplo_idx][0]}, el sistema ___."

respuestas_validas:
  - "No puede aprender"
  - "No puede aprender"
respuesta: resultado[ejemplo_idx]
tipo: completar

explicacion: |
  El aprendizaje automático requiere obligatoriamente de datos para identificar patrones; sin datos, el sistema no tiene materia prima para "aprender".
```

## Sección: modelo-relacional-tabla-registro-clave-primaria (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_conceptos_basicos"
  nivel: "basico"
  tags: ["base_de_datos", "modelo_relacional"]

tipo: mc
opciones_explicitas: ["Registro", "Atributo", "Relación", "Tupla"]

enunciado: "En el modelo relacional, una fila de una tabla que contiene un conjunto de datos relacionados se denomina:"

respuesta: "Registro"

explicacion: |
  En el modelo relacional, una tabla se compone de filas (registros o tuplas) y columnas (atributos).
```

```
metadata:
  materia: "informatica"
  tema: "clave_primaria"
  nivel: "basico"
  tags: ["clave_primaria", "identificador"]

tipo: vf

enunciado: "Una clave primaria (Primary Key) tiene la propiedad de permitir valores nulos (NULL) para asegurar la unicidad de los registros."

respuesta: falso

explicacion: |
  Una clave primaria debe ser única y, por definición, no puede contener valores nulos, ya que su función es identificar de forma inequívoca cada registro.
```

```
metadata:
  materia: "informatica"
  tema: "estructura_tabla"
  nivel: "basico"
  tags: ["tabla", "columna"]

tipo: completar
respuestas_validas:
  - "columna"
  - "atributo"

enunciado: "En una base de datos relacional, el conjunto de datos que define la estructura de una tabla (como el nombre y el tipo de dato) se conoce como ___."

respuesta: "columna"

explicacion: |
  Cada ___ representa una propiedad o característica de la entidad que estamos almacenando.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_relacional"
  nivel: "basico"
  tags: ["orden", "estructura"]

tipo: ordenar
opciones_explicitas: ["Base de datos", "Tabla", "Registro", "Campo"]

respuesta_orden: ["Base de datos", "Tabla", "Registro", "Campo"]

enunciado: "Ordene los siguientes elementos de mayor a menor nivel de jerarquía de datos:"

explicacion: |
  La jerarquía parte desde el contenedor global (Base de datos), contiene conjuntos de datos (Tablas), que contienen filas (Registros), las cuales se dividen en unidades mínimas de información (Campos).
```

```
metadata:
  materia: "informatica"
  tema: "clave_primaria_propiedades"
  nivel: "intermedio"
  tags: ["clave_primaria", "unicidad"]

variables:
  escenario: uno_de([[1, "ID_Usuario"], [2, "DNI"], [3, "Codigo_Producto"]])
  campo_id: escenario[1]

tipo: mc
opciones_explicitas: ["Puede repetirse en diferentes filas", "Debe ser única en toda la tabla", "Puede ser nula", "No tiene importancia para la integridad"]

enunciado: "Si definimos {campo_id} como la clave primaria de una tabla, esta debe cumplir con la propiedad de ser:"

respuesta: "Debe ser única en toda la tabla"

explicacion: |
  La función principal de la clave primaria es garantizar que no existan dos filas idénticas, permitiendo la identificación única de cada registro mediante el valor de {campo_id}.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "conceptos"]

respuesta: "registro"
tipo: "completar"
respuestas_validas:
  - "registro"
  - "fila"

enunciado: "En el modelo relacional, una estructura que contiene una colección de datos organizados en columnas y filas se denomina tabla, mientras que cada una de las filas individuales que representan una entidad única se denomina ___."

explicacion: |
  Una tabla es la estructura completa, mientras que el registro (o fila) es la unidad mínima de información que representa un objeto o entidad específica dentro de esa tabla.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "basico"
  tags: ["base_de_datos", "clave_primaria"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["DNI", "Nombre", "Apellido"], ["ID_Producto", "Nombre_Prod", "Precio"]]
  respuestas: ["DNI", "ID_Producto"]

respuesta: datos[escenario_idx][0]
tipo: "mc"
opciones_explicitas: ["DNI", "Nombre", "Apellido", "ID_Producto", "Precio", "Nombre_Prod"]

enunciado: "Considerando la tabla con el esquema {datos[escenario_idx]}, ¿cuál de los siguientes campos es el candidato ideal para actuar como clave primaria para asegurar que cada registro sea único?"

explicacion: |
  La clave primaria debe ser un atributo que no se repita entre los registros. En el escenario {datos[escenario_idx][0]}, ese campo es {datos[escenario_idx][0]}.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "intermedio"
  tags: ["base_de_datos", "reglas"]

respuesta: falso
tipo: "vf"

enunciado: "En un modelo relacional, una clave primaria puede contener valores nulos (NULL) para permitir que ciertos registros no tengan un identificador único asignado."

explicacion: |
  Falso. Una de las reglas de integridad de la clave primaria es la 'Integridad de Entidad', que prohíbe estrictamente que los campos que forman la clave primaria sean nulos.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "intermedio"
  tags: ["base_de_datos", "ordenar"]

tipo: ordenar
opciones_explicitas: ["Identificar la entidad", "Definir los atributos", "Asignar la clave primaria"]
respuesta_orden: ["Identificar la entidad", "Definir los atributos", "Asignar la clave primaria"]

enunciado: "Para diseñar correctamente una tabla en un modelo relacional, se debe seguir un orden lógico de diseño. Ordena los siguientes pasos:"

explicacion: |
  Primero se identifica la entidad (ej. Usuario), luego sus atributos (ej. Nombre, Email) y finalmente se establece la clave primaria (ej. ID_Usuario).
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "avanzado"
  tags: ["base_de_datos", "logica"]

variables:
  escenario_idx: uno_de([0, 1])
  valores_max: [100, 50]

respuesta: valores_max[escenario_idx]
tipo: completar
tolerancia_abs: 0

enunciado: "Si una tabla de 'Clientes' tiene una clave primaria que solo permite valores numéricos del 1 al {valores_max[escenario_idx]}, ¿cuántos registros distintos se pueden almacenar como máximo sin violar la restricción de clave primaria?"

explicacion: |
  La clave primaria debe ser única. Si el rango de valores disponibles es de 1 a {valores_max[escenario_idx]}, el número máximo de registros es {valores_max[escenario_idx]}.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_conceptos_basicos"
  nivel: "basico"
  tags: ["base_de_datos", "modelo_relacional"]

respuesta: "fila"
tipo: completar
respuestas_validas:
  - "fila"
  - "registro"

enunciado: "En el modelo relacional, una estructura de datos bidimensional se compone de columnas (atributos) y ___ (tuplas)."

explicacion: |
  En el modelo relacional, una tabla se compone de filas (también llamadas tuplas o registros) y columnas (atributos).
```

```
metadata:
  materia: "informatica"
  tema: "clave_primaria_caracteristicas"
  nivel: "intermedio"
  tags: ["base_de_datos", "clave_primaria"]

respuesta: falso
tipo: vf
enunciado: "Si una tabla tiene una columna llamada 'Edad', ¿puede esta ser designada como la clave primaria de la tabla si existen múltiples personas con la misma edad?"

explicacion: |
  La clave primaria debe ser única para cada registro. Si dos filas tienen el mismo valor en la columna clave, el sistema no podría distinguirlas, violando el principio de integridad de entidad.
```

```
metadata:
  materia: "informatica"
  tema: "estructura_tabla"
  nivel: "basico"
  tags: ["base_de_datos", "modelo_relacional"]

respuesta: "columnas"
tipo: mc
opciones_explicitas: ["filas", "columnas", "celdas", "bases"]

enunciado: "Si un registro representa una entidad completa (como un usuario), las ___ representan las propiedades o características de esa entidad."

explicacion: |
  Las columnas definen la estructura y el tipo de datos de los atributos, mientras que las filas contienen los datos específicos de cada instancia.
```

```
metadata:
  materia: "informatica"
  tema: "integridad_entidad"
  nivel: "intermedio"
  tags: ["base_de_datos", "clave_primaria"]

respuesta: "ID_Estudiante"
tipo: completar
respuestas_validas:
  - "ID_Estudiante"
  - "codigo_estudiante"
  - "estudiante_id"

enunciado: |
  Dada la siguiente tabla de 'Estudiantes':
  | Nombre | Apellido | DNI |
  |--------|----------|-----|
  | Juan   | Perez    | 123 |
  | Ana    | Lopez    | 456 |

  Si queremos garantizar que no haya duplicados, la mejor opción para una clave primaria sería ___.

explicacion: |
  Aunque el DNI suele ser único, en el diseño de bases de datos se prefiere usar una clave artificial (como un ID) que sea inmutable y garantice la unicidad técnica sin depender de datos externos que podrían cambiar o repetirse por error.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_relacional"
  nivel: "basico"
  tags: ["base_de_datos", "modelo_relacional"]

respuesta_orden: ["Base de Datos", "Tabla", "Registro", "Atributo"]
tipo: ordenar
opciones_explicitas: ["Base de Datos", "Tabla", "Registro", "Atributo"]

enunciado: "Ordena los elementos de mayor a menor jerarquía en un modelo relacional (desde el contenedor global hasta el dato mínimo):"

explicacion: |
  La jerarquía lógica es: La Base de Datos contiene múltiples Tablas; cada Tabla contiene múltiples Registros; y cada Registro está compuesto por Atributos (valores).
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tabla_registro"
  nivel: "basico"
  tags: ["base_de_datos", "conceptos_basicos"]

tipo: mc
opciones_explicitas: ["La tabla es una unidad de datos y el registro es un conjunto de tablas", "La tabla es la estructura que contiene datos y el registro es una fila de dicha estructura", "La tabla es un dato individual y el registro es la base de datos completa", "No hay diferencia, son sinónimos"]

respuesta: "La tabla es la estructura que contiene datos y el registro es una fila de dicha estructura"

enunciado: "En el modelo relacional, ¿qué distingue fundamentalmente a una tabla de un registro?"

explicacion: |
  Una tabla (o relación) es la entidad completa que define la estructura y el conjunto de datos, mientras que un registro (o tupla) es una única entrada o fila que representa un elemento específico dentro de esa tabla.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "basico"
  tags: ["base_de_datos", "clave_primaria"]

tipo: completar
respuestas_validas:
  - "identificar"
  - "diferenciar"
  - "única"

respuesta: "única"

enunciado: "A diferencia de un campo común, la clave primaria debe garantizar que cada registro sea ___."

explicacion: |
  La clave primaria (Primary Key) tiene la propiedad de unicidad, lo que significa que no puede haber dos filas con el mismo valor en ese campo, permitiendo identificar de forma inequívoca cada registro.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tabla_registro"
  nivel: "intermedio"
  tags: ["base_de_datos", "atributos"]

tipo: vf

respuesta: falso

enunciado: "¿Es correcto afirmar que un registro es la colección de todos los atributos (columnas) de una tabla?"

explicacion: |
  Falso. Un registro es una instancia de datos (una fila). La colección de todos los registros es la tabla. Los atributos son las columnas que definen la estructura de la tabla.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_estructura"
  nivel: "basico"
  tags: ["base_de_datos", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Base de datos", "Tabla", "Registro", "Campo"]

respuesta_orden: ["Base de datos", "Tabla", "Registro", "Campo"]

enunciado: "Ordena los siguientes elementos de mayor a menor jerarquía de abstracción en un modelo relacional:"

explicacion: |
  La jerarquía lógica va desde el contenedor global (Base de datos), que contiene estructuras (Tablas), que contienen instancias de datos (Registros), que a su vez se componen de unidades mínimas de información (Campos/Atributos).
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "intermedio"
  tags: ["base_de_datos", "integridad"]

respuesta: "Debe ser única y no nula"

tipo: mc
opciones_explicitas: ["Puede contener valores nulos", "Debe ser única y no nula"]

enunciado: "Considerando la integridad de entidad, ¿cuál es la distinción principal de una clave primaria respecto a un campo de texto normal?"

pasos:
  - "Identificar la propiedad de unicidad"
  - "Verificar la restricción de nulidad"

explicacion: |
  La clave primaria tiene dos restricciones críticas que un campo normal no tiene: debe ser única en toda la tabla y no puede contener valores nulos (NOT NULL).
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "clave_primaria"]

variables:
  escenario: uno_de([["ID_Usuario, Nombre, Email", "ID_Usuario"], ["DNI, Apellido, Dirección", "DNI"], ["Codigo_Producto, Descripcion, Precio", "Codigo_Producto"], ["Matricula, Estudiante, Curso", "Matricula"]])

enunciado: "En una base de datos de una tienda, se tiene la siguiente estructura de tabla: {escenario[0]}. El campo que actúa como clave primaria es ___."

respuestas_validas:
  - escenario[1]
respuesta: escenario[1]

tipo: completar

explicacion: |
  La clave primaria es el campo que identifica de forma única e irrepetible a cada registro en una tabla.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "registro"]

enunciado: "¿Un registro en una base de datos relacional es equivalente a una fila que contiene datos de un objeto o entidad específica?"

tipo: vf
respuesta: verdadero

explicacion: |
  En el modelo relacional, un registro (o tupla) es la colección de atributos que describen una única instancia de la entidad.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "columnas"]

variables:
  caso: uno_de([["ID, Fecha, Monto", "ID"], ["Codigo_Cliente, Nombre, Telefono", "Codigo_Cliente"], ["Legajo, Empleado, Puesto", "Legajo"]])

enunciado: "Si tenemos la tabla con las columnas {caso[0]}, ¿cuál de ellas es la más adecuada para ser la clave primaria?"

opciones_explicitas: ["ID", "Codigo_Cliente", "Legajo", "Ninguna de las anteriores"]

tipo: mc

respuesta: caso[1]

explicacion: |
  La clave primaria debe ser un atributo que no se repita entre distintos registros.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "intermedio"
  tags: ["base_de_datos", "integridad"]

variables:
  propiedad: uno_de(["Un valor de clave primaria puede ser nulo (NULL)", "Dos registros pueden tener la misma clave primaria", "La clave primaria puede ser un número repetido"])

enunciado: "Analizando las reglas de integridad de entidad: {propiedad}. ¿Es esto verdadero o falso?"

tipo: vf
respuesta: falso

explicacion: |
  La integridad de entidad establece que ninguna parte de una clave primaria puede ser nula y que debe ser única.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "estructura"]

variables:
  orden_estructural: ["Nombre de la tabla", "Definición de columnas (esquema)", "Inserción de registros (datos)"]

enunciado: "Ordena los pasos lógicos para la creación y uso de una tabla en una base de datos:"

opciones_explicitas: ["Nombre de la tabla", "Definición de columnas (esquema)", "Inserción de registros (datos)"]

tipo: ordenar

respuesta_orden: ["Nombre de la tabla", "Definición de columnas (esquema)", "Inserción de registros (datos)"]

explicacion: |
  Primero se define la identidad (nombre), luego la estructura (columnas/esquema) y finalmente se puebla con información (registros).
```

## Sección: etica-de-la-ia-sesgo-privacidad (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "basico"
  tags: ["etica", "ia", "sesgo"]

tipo: mc
opciones_explicitas: ["La reproducción de prejuicios humanos en los resultados de un modelo", "La capacidad de un modelo para procesar datos a gran velocidad", "El uso de algoritmos para optimizar la búsqueda de información", "La capacidad de un modelo para aprender sin supervisión humana"]

enunciado: "El sesgo algorítmico ocurre cuando un sistema de inteligencia artificial presenta resultados sistemáticamente prejuiciosos. Esto sucede principalmente porque el modelo ___."

respuesta: "La reproducción de prejuicios humanos en los resultados de un modelo"

explicacion: |
  El sesgo algorítmico surge cuando los datos de entrenamiento contienen prejuicios históricos o sociales, o cuando el diseño del algoritmo favorece ciertas categorías sobre otras, perpetuando la discriminación.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "basico"
  tags: ["privacidad", "datos", "entrenamiento"]

tipo: vf

enunciado: "El uso de datos personales sensibles para entrenar modelos de IA sin el consentimiento explícito de los individuos constituye una violación de la privacidad de los datos."

respuesta: verdadero

explicacion: |
  La privacidad es un pilar ético fundamental. Entrenar modelos con datos que contienen información identificable sin asegurar el anonimato o el consentimiento puede vulnerar derechos fundamentales.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "intermedio"
  tags: ["datos", "sesgo", "entrenamiento"]

tipo: completar
respuestas_validas:
  - "Falta de diversidad en los datos de entrenamiento"

enunciado: "Si un modelo de reconocimiento facial falla sistemáticamente con personas de piel oscura porque el dataset era mayoritariamente de personas de piel clara, estamos ante un caso de: ___."

respuesta: "Falta de diversidad en los datos de entrenamiento"

explicacion: |
  Cuando el problema reside en que los datos no cubren todas las categorías de la población, se denomina sesgo de representación o falta de diversidad en los datos.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "intermedio"
  tags: ["proceso", "etica", "desarrollo"]

tipo: ordenar
opciones_explicitas: ["Recolección de datos", "Limpieza y auditoría de sesgos", "Entrenamiento del modelo", "Evaluación de impacto ético"]

enunciado: "Para mitigar sesgos y proteger la privacidad, se debe seguir un orden lógico en el ciclo de vida del desarrollo de IA. Ordena las siguientes etapas de forma correcta:"

respuesta_orden: ["Recolección de datos", "Limpieza y auditoría de sesgos", "Entrenamiento del modelo", "Evaluación de impacto ético"]

explicacion: |
  Un proceso ético comienza con la recolección responsable, sigue con la auditoría para detectar sesgos en los datos antes de entrenar, continúa con el entrenamiento y culmina con una evaluación del impacto que el modelo tendrá en la sociedad.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "basico"
  tags: ["privacidad", "anonimización", "datos"]

tipo: mc
opciones_explicitas: ["Verdadero", "Falso"]

enunciado: "La técnica de anonimización de datos garantiza que sea imposible, bajo cualquier circunstancia, volver a identificar a un individuo a partir de los datos utilizados para entrenar una IA."

respuesta: "Falso"

explicacion: |
  Aunque la anonimización es una medida de protección, existe el riesgo de 're-identificación' mediante ataques de vinculación de datos, por lo que no es una garantía absoluta de privacidad.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo"
  nivel: "intermedio"
  tags: ["sesgo", "ia", "etica"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[0, "preferencia por candidatos masculinos"], [1, "preferencia por candidatos de ciertas etnias"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["preferencia por candidatos masculinos", "preferencia por candidatos de ciertas etnias", "preferencia por candidatos con mayor edad", "preferencia por candidatos con títulos de universidades específicas"]

enunciado: "Un algoritmo de IA para filtrar CVs fue entrenado con datos históricos de una empresa donde solo se contrataban hombres. El modelo comienza a descartar automáticamente a mujeres calificadas. Este fenómeno se conoce como: ___"

explicacion: |
  El modelo ha aprendido y replicado un sesgo histórico presente en los datos de entrenamiento. Esto se conoce como sesgo algorítmico por representación o histórico.
```

```
metadata:
  materia: "informatica"
  tema: "privacidad_datos"
  nivel: "basico"
  tags: ["privacidad", "ia", "datos"]

respuesta: falso
tipo: vf

enunciado: "Si un modelo de IA ha sido entrenado con un conjunto de datos que contiene información médica privada, pero los datos fueron 'anonimizados' (se eliminó el nombre y DNI), ¿es imposible que el modelo pueda revelar la identidad de un paciente mediante ataques de inversión de modelo?"

explicacion: |
  Falso. Los ataques de inversión de modelo o ataques de membresía pueden permitir reconstruir o inferir datos sensibles incluso si los datos originales estaban anonimizados, ya que el modelo "memoriza" patrones específicos de los datos de entrenamiento.
```

```
metadata:
  materia: "informatica"
  tema: "mitigacion_sesgo"
  nivel: "avanzado"
  tags: ["mitigacion", "proceso", "ia"]

opciones_explicitas: ["Auditar los datos de entrenamiento", "Definir métricas de equidad", "Implementar el modelo en producción", "Evaluar el impacto en usuarios reales"]
respuesta_orden: ["Definir métricas de equidad", "Auditar los datos de entrenamiento", "Implementar el modelo en producción", "Evaluar el impacto en usuarios reales"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para asegurar un despliegue ético de un sistema de IA que busca mitigar sesgos:"

explicacion: |
  Primero se deben definir qué es "justo" (métricas), luego revisar si los datos reflejan ese ideal (auditoría), luego lanzar el sistema y finalmente monitorear su impacto real.
```

```
metadata:
  materia: "informatica"
  tema: "privacidad_datos"
  nivel: "intermedio"
  tags: ["explicabilidad", "privacidad"]

respuesta: "un sistema de crédito que niega préstamos sin explicar por qué"
tipo: completar
respuestas_validas:
  - "un sistema de crédito que niega préstamos sin explicar por qué"

enunciado: "Un problema ético común es la falta de explicabilidad (caja negra). Un ejemplo de esto es: ___"

explicacion: |
  La falta de explicabilidad impide que los usuarios comprendan por qué se tomó una decisión que les afecta, lo cual es un riesgo tanto de sesgo como de falta de transparencia en el manejo de sus datos.
```

```
metadata:
  materia: "informatica"
  tema: "privacidad_datos"
  nivel: "avanzado"
  tags: ["privacidad_diferencial", "teoria"]

respuesta: "añadir ruido estadístico"
tipo: completar
respuestas_validas:
  - "añadir ruido estadístico"
  - "eliminar todos los datos"

enunciado: "Para proteger la privacidad en el entrenamiento de modelos de IA, se utiliza una técnica llamada Privacidad Diferencial, que consiste en ___ a los datos para que no se pueda identificar a un individuo específico."

explicacion: |
  La privacidad diferencial añade ruido matemático a los datos o a los gradientes durante el entrenamiento, permitiendo extraer patrones generales sin comprometer la identidad de los individuos del dataset.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo"
  nivel: "intermedio"
  tags: ["sesgo", "datos", "entrenamiento"]

respuesta: "sesgo de representatividad"
tipo: completar
respuestas_validas:
  - "sesgo de representatividad"
  - "sesgo de representatividad"

enunciado: "Cuando un modelo de IA presenta un desempeño inferior para un grupo demográfico específico porque dicho grupo estaba subrepresentado en el conjunto de entrenamiento, estamos ante un ___."

explicacion: |
  El sesgo de representatividad ocurre cuando la distribución de los datos de entrenamiento no refleja la diversidad de la población real, provocando que el modelo sea menos preciso para las minorías.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_privacidad"
  nivel: "avanzado"
  tags: ["privacidad", "memorizacion", "seguridad"]

respuesta: verdadero
tipo: vf
enunciado: "Si un modelo de IA ha memorizado datos sensibles de entrenamiento (como números de identificación) y los reproduce textualmente ante un prompt malintencionado, ¿se ha vulnerado la privacidad de los datos?"

explicacion: |
  La memorización de datos sensibles es un riesgo crítico de privacidad en modelos de lenguaje grandes (LLMs). Si el modelo puede reproducir textualmente datos identificables ante un prompt malintencionado, se ha vulnerado la privacidad de esos individuos.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo"
  nivel: "intermedio"
  tags: ["mitigacion", "ciclo_de_vida", "auditoria"]

opciones_explicitas: ["Recolección de datos", "Auditoría de modelos", "Limpieza de datos", "Implementación del modelo"]

respuesta_orden: ["Recolección de datos", "Limpieza de datos", "Auditoría de modelos", "Implementación del modelo"]
tipo: ordenar

enunciado: "Ordena las fases del ciclo de vida de un proyecto de IA donde se deben aplicar medidas de mitigación de sesgos, desde la fase inicial hasta la puesta en producción:"

explicacion: |
  La mitigación debe ser transversal: se debe asegurar la representatividad en la recolección, la calidad en la limpieza, la equidad en la auditoría y la vigilancia en la implementación.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo"
  nivel: "basico"
  tags: ["neutralidad", "sesgo", "conceptos"]

opciones_explicitas: ["Verdadero", "Falso"]

respuesta: "Falso"
tipo: mc

enunciado: "Un algoritmo es intrínsecamente neutral y objetivo simplemente porque sus decisiones se basan en procesos matemáticos y no en opiniones humanas directas."

explicacion: |
  Falso. Los algoritmos heredan los sesgos presentes en los datos históricos, en la selección de variables por parte de los ingenieros y en los objetivos de optimización definidos por los humanos.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_privacidad"
  nivel: "avanzado"
  tags: ["privacidad_diferencial", "ruido", "seguridad"]

respuesta: "añadir ruido estadístico"
tipo: completar
respuestas_validas:
  - "añadir ruido estadístico"
  - "añadir ruido estadístico"

enunciado: "Una técnica común para proteger la privacidad en el entrenamiento de modelos es la privacidad diferencial, que consiste en ___ a los datos para que no se pueda identificar a un individuo específico."

explicacion: |
  La privacidad diferencial añade ruido matemático controlado para que la presencia o ausencia de un individuo en el dataset no altere significativamente la salida del modelo, protegiendo la identidad de los sujetos.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "intermedio"
  tags: ["etica", "sesgo", "ia"]

tipo: mc
opciones_explicitas: ["El sesgo algorítmico es un error de programación en el código fuente.", "El sesgo algorítmico es la reproducción de prejuicios humanos presentes en los datos de entrenamiento.", "El sesgo algorítmico es la falta de capacidad de procesamiento del hardware.", "El sesgo algorítmico es un error de hardware que afecta la precisión."]

respuesta: "El sesgo algorítmico es la reproducción de prejuicios humanos presentes en los datos de entrenamiento."

enunciado: "¿Cuál es la diferencia fundamental entre un error de programación lógico y el sesgo algorítmico en un modelo de IA?"

explicacion: |
  El sesgo algorítmico no suele ser un error de sintaxis o lógica en el código, sino una consecuencia de que los datos utilizados para entrenar el modelo contienen prejuicios históricos o sociales que la IA aprende y replica.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "intermedio"
  tags: ["privacidad", "datos", "ia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Se eliminan los nombres de los usuarios pero se mantiene la combinación exacta de fecha de nacimiento, código postal y género.", "El proceso es insuficiente porque la re-identificación es posible mediante ataques de vinculación."], ["Se aplica ruido estadístico (privacidad diferencial) para que no se pueda identificar a un individuo específico en el dataset.", "Aunque la privacidad diferencial es una técnica robusta y mucho más efectiva, tampoco garantiza una privacidad matemáticamente 'total': sigue existiendo un riesgo residual controlado (el parámetro epsilon), por lo que la respuesta correcta sigue siendo falso."]]

tipo: vf
respuesta: falso

enunciado: "En el escenario {escenarios[escenario_idx][0]}, ¿es la técnica aplicada suficiente para garantizar la privacidad total de los datos de entrenamiento? (Respuesta: falso/verdadero)"

explicacion: |
  {escenarios[escenario_idx][1]}
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "avanzado"
  tags: ["sesgo", "mitigacion", "proceso"]

tipo: ordenar
opciones_explicitas: ["Auditoría de los datos de entrenamiento", "Selección de métricas de equidad", "Implementación del modelo", "Monitoreo de resultados en producción"]
respuesta_orden: ["Auditoría de los datos de entrenamiento", "Selección de métricas de equidad", "Implementación del modelo", "Monitoreo de resultados en producción"]

enunciado: "Ordene las etapas lógicas para mitigar el sesgo algorítmico en el ciclo de vida de un proyecto de IA, desde la preparación hasta el despliegue."

explicacion: |
  Para mitigar el sesgo, primero se deben auditar los datos para detectar desequilibrios, luego definir qué significa 'equidad' para ese caso (métricas), entrenar/implementar y finalmente monitorear para detectar sesgos emergentes.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "basico"
  tags: ["privacidad", "gdpr", "etica"]

tipo: completar
respuestas_validas:
  - "minimización"
  - "reducción"

enunciado: "El principio de ___ de datos establece que solo se deben recolectar los datos estrictamente necesarios para el fin específico del modelo de IA."

explicacion: |
  La minimización de datos es un pilar de la privacidad que busca evitar la recolección excesiva de información sensible que podría ser mal utilizada o filtrada.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "avanzado"
  tags: ["sesgo", "teoria"]

tipo: mc
opciones_explicitas: ["El sesgo de representación ocurre cuando ciertos grupos están subrepresentados en el dataset.", "El sesgo de medición ocurre cuando el software de recolección de datos falla.", "El sesgo de representación es un error de hardware.", "El sesgo de medición es la falta de diversidad en los datos."]

respuesta: "El sesgo de representación ocurre cuando ciertos grupos están subrepresentados en el dataset."

enunciado: "¿Qué distingue al sesgo de representación de otros tipos de sesgo en la IA?"

explicacion: |
  El sesgo de representación se da cuando la muestra de datos no refleja la diversidad de la población real (por ejemplo, un modelo de reconocimiento facial entrenado mayoritariamente con personas de piel clara), lo que impide que el modelo funcione equitativamente para todos.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_algoritmico"
  nivel: "intermedio"
  tags: ["sesgo", "ia", "etica"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un algoritmo de selección de CV que favorece candidatos de un género por sesgo histórico en los datos de entrenamiento", "género"], ["un sistema de reconocimiento facial que falla más en personas de piel oscura debido a una muestra desequilibrada", "etnia"]]

enunciado: "En el caso de {escenarios[escenario_idx][0]}, el modelo está reproduciendo un sesgo de {escenarios[escenario_idx][1]}."

respuesta: escenarios[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "género"
  - "etnia"

explicacion: |
  El sesgo algorítmico ocurre cuando los datos históricos utilizados para entrenar el modelo contienen prejuicios humanos o desequilibrios de representación, los cuales el modelo aprende y replica.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_privacidad"
  nivel: "basico"
  tags: ["privacidad", "datos", "ia"]

enunciado: "Si un modelo de lenguaje ha sido entrenado con correos electrónicos privados sin consentimiento, ¿se ha vulnerado la privacidad de los datos?"

respuesta: verdadero
tipo: vf

explicacion: |
  El uso de datos personales sensibles para el entrenamiento de modelos de IA sin el consentimiento explícito o una base legal adecuada constituye una violación de la privacidad y de las normativas de protección de datos.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_algoritmico"
  nivel: "avanzado"
  tags: ["mitigacion", "sesgo", "datos"]

enunciado: "Para mitigar el sesgo algorítmico, una técnica común es la 'equidad mediante la ceguera' (fairness through unawareness), que consiste en: ___"

respuesta: "Eliminar variables sensibles como la raza de los ejemplos"
tipo: completar
respuestas_validas:
  - "Eliminar variables sensibles como la raza de los ejemplos"

explicacion: |
  Aunque eliminar variables sensibles (como raza o género) es una técnica llamada 'ceguera', no siempre es efectiva porque otras variables (como el código postal) pueden actuar como 'proxies' de la variable sensible.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_privacidad"
  nivel: "intermedio"
  tags: ["riesgo", "privacidad", "ataque"]

enunciado: "Un ataque de 'inferencia de membresía' busca determinar si un dato específico fue utilizado en el conjunto de entrenamiento de un modelo. Este ataque es un riesgo para la:"

respuesta: "privacidad de los datos"
tipo: mc
opciones_explicitas: ["eficiencia del modelo", "privacidad de los datos", "velocidad de procesamiento", "precisión del cálculo"]

explicacion: |
  Los ataques de inferencia de membresía permiten saber si un individuo particular forma parte del set de entrenamiento, lo cual compromete la privacidad si los datos son sensibles.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_algoritmico"
  nivel: "intermedio"
  tags: ["proceso", "etica", "desarrollo"]

enunciado: "Ordena los pasos lógicos para asegurar la equidad en un sistema de IA desde la fase de datos hasta la implementación:"

respuesta_orden: ["Auditar la calidad de los datos", "Entrenar el modelo", "Evaluar resultados en subgrupos", "Monitorear sesgos en producción"]
tipo: ordenar
opciones_explicitas: ["Auditar la calidad de los datos", "Entrenar el modelo", "Evaluar resultados en subgrupos", "Monitorear sesgos en producción"]

explicacion: |
  Un ciclo de vida ético requiere: 1. Asegurar datos representativos, 2. Entrenar, 3. Realizar pruebas de estrés en grupos minoritarios (fairness testing) y 4. Vigilancia continua para detectar derivas de sesgo.
```

## Sección: criptografia-clave-simetrica-asimetrica-hash (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "criptografia_simetrica_vs_asimetrica"
  nivel: "basico"
  tags: ["criptografia", "seguridad"]

respuesta: "misma clave"
tipo: completar
respuestas_validas:
  - "misma clave"

enunciado: "En la criptografía simétrica, se utiliza la ___ para cifrar y descifrar el mensaje."

explicacion: |
  En la criptografía simétrica, tanto el emisor como el receptor utilizan la misma clave secreta para realizar las operaciones de cifrado y descifrado.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_simetrica_vs_asimetrica"
  nivel: "basico"
  tags: ["criptografia", "clave_publica"]

variables:
  textos: ["La clave privada debe compartirse con cualquier persona para que el sistema funcione.", "La clave pública se puede distribuir libremente para que cualquiera pueda cifrar un mensaje para el dueño."]
  valores: [falso, verdadero]
  idx: uno_de([0, 1])

respuesta: valores[idx]
tipo: vf

enunciado: "En un sistema de clave pública (asimétrica), {textos[idx]}"

explicacion: |
  En la criptografía asimétrica, la clave pública se distribuye para cifrar, mientras que la privada se mantiene en secreto para descifrar. Compartir la clave privada rompería la seguridad del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "intermedio"
  tags: ["hash", "integridad"]

respuesta: "integridad"
tipo: mc
opciones_explicitas: ["confidencialidad", "integridad", "autenticidad", "disponibilidad"]

enunciado: "Las funciones hash se utilizan principalmente para garantizar la ___ de los datos, asegurando que el mensaje no haya sido alterado."

explicacion: |
  Un hash es una huella digital única. Si el mensaje cambia, el hash cambia, permitiendo verificar la integridad del archivo.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_simetrica_vs_asimetrica"
  nivel: "basico"
  tags: ["clave_privada", "clave_publica"]

respuesta_orden: ["Clave Pública", "Clave Privada"]
tipo: ordenar
opciones_explicitas: ["Clave Pública", "Clave Privada"]

enunciado: "Ordena el proceso de cifrado asimétrico para enviar un mensaje privado a alguien: el emisor usa la ___ del destinatario para cifrar, y el destinatario usa su ___ para descifrar."

explicacion: |
  En la criptografía asimétrica, el emisor utiliza la clave pública del receptor para que solo el receptor, con su clave privada correspondiente, pueda leer el mensaje.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "intermedio"
  tags: ["hash", "unidireccional"]

respuesta: "unidireccional"
tipo: completar
respuestas_validas:
  - "unidireccional"

enunciado: "Una de las propiedades fundamentales de una función hash es que es ___; es decir, es computacionalmente imposible reconstruir el mensaje original a partir del hash obtenido."

explicacion: |
  La propiedad de unidireccionalidad (o resistencia a la preimagen) es lo que impide que un atacante pueda revertir el proceso de hashing para obtener el dato original.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_clave_simetrica_asimetrica"
  nivel: "basico"
  tags: ["seguridad", "claves"]

variables:
  escenarios: [["Alice envía un mensaje a Bob usando la misma clave que ambos conocen para cifrar y descifrar.", "Simétrica"], ["Alice envía un mensaje a Bob usando su clave privada para cifrar y Bob usa la clave pública de Alice para descifrar.", "Asimétrica"], ["Un sistema de comunicación donde la clave de cifrado es idéntica a la de descifrado.", "Simétrica"], ["Un sistema de firma digital donde la clave de cifrado es distinta a la de descifrado.", "Asimétrica"]]
  idx: uno_de([0, 1, 2, 3])

enunciado: "Si estamos ante el escenario de: {escenarios[idx][0]}, ¿qué tipo de criptografía se está utilizando?"

opciones_explicitas: ["Simétrica", "Asimétrica"]
respuesta: escenarios[idx][1]
tipo: mc

explicacion: |
  En la criptografía simétrica, se utiliza una única clave compartida para ambas operaciones. En la asimétrica, se utiliza un par de claves (pública y privada) relacionadas matemáticamente.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "basico"
  tags: ["hash", "integridad"]

enunciado: "Se aplica una función hash a un archivo de 1 GB. Si se cambia un solo bit del archivo original, el valor del hash resultante será ___."

respuestas_validas:
  - "completamente diferente"
respuesta: "completamente diferente"
tipo: completar

explicacion: |
  Una de las propiedades fundamentales de las funciones hash criptográficas es el "efecto avalancha": un cambio mínimo en la entrada produce un cambio drástico e impredecible en la salida.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_asimetrica"
  nivel: "intermedio"
  tags: ["firma_digital", "asimetrica"]

enunciado: "Ordena los pasos para que Alice firme digitalmente un documento para asegurar su autenticidad:"

opciones_explicitas: ["Generar hash del documento", "Cifrar el hash con la clave privada de Alice", "Enviar documento y firma al receptor"]
respuesta_orden: ["Generar hash del documento", "Cifrar el hash con la clave privada de Alice", "Enviar documento y firma al receptor"]
tipo: ordenar

explicacion: |
  La firma digital no cifra el documento completo (que sería lento), sino el hash del documento usando la clave privada del emisor. El receptor descifra el hash con la clave pública del emisor para verificar la integridad y autoría.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "basico"
  tags: ["hash", "teoria"]

enunciado: "¿Es posible recuperar el mensaje original a partir de su valor hash?"

respuesta: falso
tipo: vf

explicacion: |
  Las funciones hash son funciones de una sola vía (one-way functions). Están diseñadas para ser computacionalmente imposibles de invertir.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "intermedio"
  tags: ["hash", "verificacion"]

variables:
  hash_original: "a1b2c3d4"
  opciones_hash: ["a1b2c3d4", "f9e8d7c6"]
  respuestas_texto: ["No, el archivo es íntegro", "Sí, el archivo fue alterado"]
  idx: uno_de([0, 1])
  hash_recibido: opciones_hash[idx]

enunciado: "El emisor envía un archivo con el hash '{hash_original}'. El receptor, tras descargar el archivo, calcula el hash y obtiene '{hash_recibido}'. ¿El archivo ha sido alterado?"

opciones_explicitas: ["No, el archivo es íntegro", "Sí, el archivo fue alterado"]
respuesta: respuestas_texto[idx]
tipo: mc

explicacion: |
  Si el hash calculado por el receptor coincide exactamente con el hash enviado por el emisor, se garantiza que el contenido no ha sido modificado durante la transmisión.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_clave_simetrica_asimetrica"
  nivel: "basico"
  tags: ["seguridad", "claves"]

tipo: mc
opciones_explicitas: ["Cifrado simétrico", "Cifrado asimétrico", "Función Hash", "No es una técnica de cifrado"]
respuesta: "Cifrado asimétrico"

enunciado: "En un escenario donde dos personas necesitan comunicarse de forma segura pero nunca se han encontrado previamente para intercambiar una clave secreta, ¿qué tipo de criptografía es la más adecuada para establecer la comunicación inicial?"

explicacion: |
  El cifrado asimétrico utiliza un par de claves (pública y privada), lo que permite que dos entidades se comuniquen sin haber compartido previamente una clave secreta. El cifrado simétrico requiere que la clave ya sea conocida por ambas partes.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "basico"
  tags: ["hash", "integridad"]

respuesta: falso
tipo: vf

enunciado: "Una función hash criptográfica es un proceso reversible; es decir, es posible reconstruir el mensaje original a partir de su valor hash."

explicacion: |
  Las funciones hash son funciones de una sola vía (one-way). Su propósito es generar una huella digital única de un mensaje, pero no permiten recuperar el mensaje original a partir del hash.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "intermedio"
  tags: ["hash", "integridad"]

tipo: completar
respuesta: "integridad"
respuestas_validas:
  - "integridad"

enunciado: "Si un software utiliza una función hash para verificar que un archivo descargado no ha sido modificado por un tercero durante la transmisión, está garantizando la _________ del archivo."

explicacion: |
  El hash permite verificar que el contenido no ha cambiado (integridad). No garantiza la confidencialidad, ya que el archivo original sigue siendo legible si no está cifrado.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_asimetrica"
  nivel: "avanzado"
  tags: ["firma_digital", "proceso"]

respuesta_orden: ["Hash del mensaje", "Cifrar el hash con la clave privada", "Descifrar con la clave pública", "Comparar hashes"]
tipo: ordenar

opciones_explicitas: ["Hash del mensaje", "Cifrar el hash con la clave privada", "Descifrar con la clave pública", "Comparar hashes"]

enunciado: "Para realizar una firma digital sobre un documento y que el receptor pueda verificarla, ¿cuál es el orden correcto de los pasos técnicos?"

explicacion: |
  Primero se genera el hash del mensaje original. Luego, ese hash se cifra con la clave privada del emisor (esto es la firma). El receptor descifra la firma con la clave pública del emisor y compara el resultado con el hash que él mismo calcula del mensaje recibido.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_clave_simetrica_asimetrica"
  nivel: "intermedio"
  tags: ["eficiencia", "hibrida"]

respuesta: falso
tipo: vf

enunciado: "Dado que el cifrado asimétrico es mucho más seguro que el simétrico, la práctica estándar en la navegación web (HTTPS) es cifrar todo el tráfico de datos usando únicamente criptografía asimétrica."

explicacion: |
  Falso. El cifrado asimétrico es computacionalmente muy costoso y lento. Por eso, se usa un sistema híbrido: la criptografía asimétrica para intercambiar una clave simétrica, y luego se usa esa clave simétrica para cifrar el flujo de datos real por su rapidez.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_clave_simetrica_asimetrica"
  nivel: "basico"
  tags: ["criptografia", "seguridad"]

variables:
  escenario: uno_de(["simetrica", "asimetrica"])

enunciado: "En un sistema de cifrado {escenario}, se utiliza la misma clave para cifrar y descifrar el mensaje."

respuesta: escenario == "simetrica"
tipo: vf
explicacion: |
  En la criptografía simétrica, la clave compartida es idéntica para ambas operaciones. En la asimétrica, se usa un par de claves (pública y privada).
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "basico"
  tags: ["hash", "integridad"]

opciones_explicitas: ["Garantizar la confidencialidad del mensaje", "Garantizar la integridad del mensaje", "Cifrar el mensaje para que nadie lo lea", "Comprimir el mensaje para que ocupe menos"]

respuesta: "Garantizar la integridad del mensaje"
tipo: mc

enunciado: "¿Cuál es el objetivo principal de aplicar una función hash a un archivo o mensaje?"

explicacion: |
  Una función hash genera una huella digital única. Si el archivo cambia, el hash cambia, lo que permite verificar que el contenido no ha sido alterado (integridad).
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "intermedio"
  tags: ["hash", "seguridad"]

enunciado: "Una función hash es considerada ___ si es computacionalmente imposible encontrar el mensaje original a partir de su hash."

pasos:
  - "Identificar la propiedad descrita."

respuesta: "unidireccional"

tipo: completar
respuestas_validas:
  - "unidireccional"

explicacion: |
  La propiedad de unidireccionalidad (one-way) impide revertir el proceso de hash para obtener el dato original.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_clave_asimetrica"
  nivel: "intermedio"
  tags: ["asimetrica", "claves"]

opciones_explicitas: ["Clave privada", "Clave pública", "Clave secreta", "Clave de sesión"]

respuesta: "Clave pública"
tipo: mc

enunciado: "Si Alice quiere enviarle un mensaje cifrado a Bob de forma segura usando criptografía asimétrica, ¿qué clave debe utilizar Alice para cifrar el mensaje?"

explicacion: |
  En la criptografía asimétrica, se cifra con la clave pública del destinatario, de modo que solo el destinatario pueda descifrarlo con su clave privada correspondiente.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_conceptos"
  nivel: "basico"
  tags: ["conceptos", "seguridad"]

opciones_explicitas: ["Hash", "Cifrado Simétrico", "Cifrado Asimétrico"]

respuesta_orden: ["Hash", "Cifrado Simétrico", "Cifrado Asimétrico"]
tipo: ordenar

enunciado: "Ordena los siguientes conceptos de mayor a menor capacidad de recuperación de la información original (desde que es posible recuperar el mensaje original hasta que es imposible):"

explicacion: |
  1. Cifrado Simétrico/Asimétrico: Están diseñados para ser reversibles con la clave correcta.
  2. Hash: Es una función de una sola vía; no se puede recuperar el mensaje original a partir del hash.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_simetrica_asimetrica"
  nivel: "basico"
  tags: ["seguridad", "simetrico"]

variables:
  datos: [["400 GB de datos", "simetrico"], ["2 KB de texto", "asimetrico"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["simetrico", "asimetrico"]

enunciado: "Un servidor necesita cifrar un archivo de {datos[idx][0]} para su almacenamiento seguro. Dado que la velocidad de procesamiento es la prioridad, ¿qué tipo de cifrado debería utilizar?"

explicacion: |
  Para grandes volúmenes de datos, el cifrado simétrico es preferible por su alta velocidad y eficiencia computacional en comparación con el asimétrico.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "basico"
  tags: ["integridad", "hash"]

respuesta: "hash"
tipo: completar
respuestas_validas:
  - "hash"
  - "checksum"
  - "resumen"

enunciado: "Para verificar que un archivo no ha sido alterado durante una descarga, se suele comparar su valor ___ con el proporcionado por el servidor."

explicacion: |
  Una función hash genera una huella digital única (hash) de un mensaje. Si el contenido cambia, el hash cambia completamente.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_asimetrica"
  nivel: "intermedio"
  tags: ["asimetrico", "clave_publica"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema de criptografía asimétrica, si utilizo la clave pública del destinatario para cifrar un mensaje, solo él podrá descifrarlo usando su clave privada correspondiente."

explicacion: |
  Esa es la base de la criptografía de clave pública: la clave de cifrado es pública, pero la de descifrado es privada y secreta.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_asimetrica"
  nivel: "avanzado"
  tags: ["firma_digital", "ordenar"]

respuesta_orden: ["crear_hash", "cifrar_hash_con_clave_privada", "enviar_mensaje_y_firma"]
tipo: ordenar
opciones_explicitas: ["crear_hash", "cifrar_hash_con_clave_privada", "enviar_mensaje_y_firma"]

enunciado: "Para realizar una firma digital sobre un documento, se deben seguir estos pasos en orden:"

pasos:
  - "Generar un resumen del documento."
  - "Cifrar ese resumen con la clave privada del emisor."
  - "Enviar el documento original junto con la firma generada."

explicacion: |
  La firma digital no cifra el documento entero, sino el hash del mismo, utilizando la clave privada para garantizar el no repudio y la integridad.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_simetrica_asimetrica"
  nivel: "basico"
  tags: ["claves", "seguridad"]

variables:
  textos: ["enviar una sola clave por un canal inseguro", "usar dos llaves distintas (pública y privada)"]
  valores: [verdadero, falso]
  idx: uno_de([0, 1])

respuesta: valores[idx]
tipo: vf
enunciado: "En el cifrado simétrico, el principal problema de seguridad es: {textos[idx]}."

explicacion: |
  El cifrado simétrico requiere que ambas partes compartan la misma clave. Si el canal para compartirla es inseguro, un atacante podría interceptarla.
```

