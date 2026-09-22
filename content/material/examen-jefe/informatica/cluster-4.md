# Examen jefe — [PENDIENTE #819]

> Logro #819. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **124 preguntas totales** en 5/5 secciones.

---

## Sección: estructuras-de-datos-listas-pilas-colas (26 preguntas)

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["pilas", "lifo"]

respuesta: "LIFO"
tipo: completar
respuestas_validas:
  - "LIFO"
  - "lifo"
  - "LIFO (Last In, First Out)"

enunciado: "La estructura de datos conocida como 'Pila' se rige por el principio de acceso ___ (Last In, First Out)."

explicacion: |
  En una pila, el último elemento en entrar es el primero en salir. Esto se conoce como LIFO.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["colas", "fifo", "pilas"]

variables:
  pares: [["Pila", "Último en entrar, primero en salir"], ["Cola", "Primero en entrar, primero en salir"]]
  idx: uno_de([0, 1])

respuesta: pares[idx][0]
tipo: mc
opciones_explicitas: ["Pila", "Cola"]

enunciado: "Si una estructura de datos sigue el principio de '{pares[idx][1]}', estamos ante una ___."

explicacion: |
  El principio FIFO (First In, First Out) es característico de las colas, donde el primer elemento que llega es el primero en ser procesado.
  El principio LIFO (Last In, First Out) es característico de las pilas.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["listas", "acceso"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de las pilas y las colas, una lista permite el acceso a cualquier elemento mediante un índice, sin seguir un orden restrictivo de entrada/salida."

explicacion: |
  Las listas son estructuras de acceso aleatorio, mientras que las pilas y colas son estructuras de acceso restringido.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["pilas", "operaciones"]

respuesta_orden: ["push", "pop"]
tipo: ordenar

opciones_explicitas: ["push", "pop"]

enunciado: "Ordena las operaciones típicas de una Pila (Stack) desde la que agrega un elemento hasta la que lo retira:"

explicacion: |
  En una pila, 'push' se usa para insertar un elemento en el tope y 'pop' para extraerlo.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "intermedio"
  tags: ["colas", "uso"]

variables:
  idx: uno_de([0, 1])
  ejemplo: [["gestión de procesos en un CPU", "impresora"], ["fila de espera en un banco", "gestión de procesos en un CPU"]]

respuesta: ejemplo[idx][0]
tipo: mc
opciones_explicitas: ["gestión de procesos en un CPU", "fila de espera en un banco", "historial de navegación", "deshacer (undo)"]

enunciado: "Las colas (FIFO) son ideales para escenarios de espera. ¿Cuál de estos es un uso común de una cola?"

explicacion: |
  La gestión de procesos en un sistema operativo utiliza colas para decidir qué tarea procesar según su orden de llegada.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_pilas"
  nivel: "basico"
  tags: ["pilas", "lifo"]

respuesta: verdadero
tipo: vf

enunciado: "En una estructura de datos tipo Pila (Stack), el último elemento en ser insertado es el primero en ser eliminado, siguiendo el principio LIFO (Last In, First Out)."

explicacion: |
  Exacto. Las pilas funcionan como una pila de platos: el último que pones arriba es el primero que sacas.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_pilas"
  nivel: "intermedio"
  tags: ["pilas", "push", "pop"]

variables:
  valores: [["10", "20", "30"], ["A", "B", "C"], ["5", "15", "25"]]
  resultados: ["20", "B", "15"]
  idx: uno_de([0, 1, 2])

respuesta: resultados[idx]
tipo: mc
opciones_explicitas: ["20", "B", "15", "30"]

enunciado: "Dada una pila vacía, si realizamos las siguientes operaciones en orden: push({valores[idx][0]}), push({valores[idx][1]}), push({valores[idx][2]}) y finalmente pop, ¿cuál es el elemento que queda en el tope de la pila?"

pasos:
  - "Insertar el primer elemento (push)."
  - "Insertar el segundo elemento (push)."
  - "Insertar el tercer elemento (push)."
  - "Eliminar el elemento superior (pop)."

explicacion: |
  Al hacer push de los tres elementos, el tope es el tercero. Al hacer pop, ese tercero se elimina, dejando el segundo como el nuevo tope.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_colas"
  nivel: "basico"
  tags: ["colas", "fifo"]

respuesta: "cliente_1"
tipo: mc
opciones_explicitas: ["cliente_1", "cliente_2", "cliente_3", "cliente_4"]

enunciado: "En una cola (Queue) de procesamiento de tareas, si entran los elementos cliente_1, cliente_2 y cliente_3 en ese orden, ¿cuál es el primer elemento en ser atendido y salir de la cola?"

explicacion: |
  Las colas siguen el principio FIFO (First In, First Out). El primero en entrar es el primero en salir.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_pilas"
  nivel: "intermedio"
  tags: ["pilas", "ordenar"]

respuesta_orden: ["A", "B"]
tipo: ordenar
opciones_explicitas: ["A", "B"]

enunciado: "Si realizamos las siguientes operaciones de forma consecutiva sobre una pila vacía: push(A), push(B), push(C), push(D), pop, pop — ordena los elementos que permanecen en la pila, desde la base hasta el tope."

pasos:
  - "La pila contiene [A, B, C, D] con D en el tope."
  - "Se ejecuta pop: sale D, queda [A, B, C]."
  - "Se ejecuta pop: sale C, queda [A, B]."

explicacion: |
  Al hacer pop dos veces, eliminamos los dos últimos elementos insertados (D y luego C). Los que quedan en la pila, de base a tope, son A y B.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_comparacion"
  nivel: "basico"
  tags: ["pilas", "colas"]

respuesta: "FIFO"
tipo: completar
respuestas_validas:
  - "FIFO"
  - "fifo"

enunciado: "Mientras que la Pila utiliza el principio LIFO (Last In, First Out), la Cola utiliza el principio ___ (First In, First Out)."

explicacion: |
  La Cola (Queue) garantiza que el primer elemento en entrar sea el primero en ser procesado.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["pilas", "colas", "conceptos"]

respuesta: "LIFO"
tipo: completar
respuestas_validas:
  - "LIFO"
  - "lifo"
  - "Lifo"

enunciado: "En una estructura de datos de tipo Pila (Stack), el último elemento en ser insertado es el primero en ser extraído, principio conocido como ___."

explicacion: |
  La Pila sigue el principio LIFO (Last In, First Out). El último elemento que entra es el primero en salir, como una pila de platos.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["colas", "fifo"]

opciones_explicitas: ["El primero en entrar es el primero en salir", "El último en entrar es el primero en salir", "El primero en entrar es el último en salir"]
respuesta: "El primero en entrar es el primero en salir"
tipo: mc

enunciado: "Si tenemos una Cola (Queue) con los elementos [A, B, C] (donde A es el primero en entrar), ¿cuál es el orden de salida de los elementos al realizar tres operaciones de extracción?"

explicacion: |
  Una Cola sigue el principio FIFO (First In, First Out). El primer elemento que llega a la fila es el primero en ser atendido y salir.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "intermedio"
  tags: ["aplicaciones", "pilas"]

respuesta: verdadero
tipo: vf

enunciado: "Para implementar la funcionalidad 'Deshacer' (Undo) en un editor de texto, donde queremos revertir la última acción realizada, la estructura de datos más adecuada es una Pila."

explicacion: |
  Correcto. Como queremos revertir la acción más reciente, necesitamos acceder al último elemento agregado, lo cual es la definición de una Pila (LIFO).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "Tanto las Pilas como las Colas son estructuras de datos lineales que no permiten el acceso aleatorio a sus elementos (a diferencia de un Array o una Lista indexada)."

explicacion: |
  Verdadero. En sus implementaciones puras, las pilas y colas son estructuras de acceso restringido: solo puedes interactuar con los extremos (top en pilas, front/rear en colas).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "intermedio"
  tags: ["operaciones", "pila"]

tipo: ordenar
opciones_explicitas: ["push(1)", "push(2)", "pop()", "push(3)"]
respuesta_orden: ["push(1)", "push(2)", "pop()", "push(3)"]

enunciado: "Ordena las siguientes operaciones de una Pila para que el elemento que quede en el tope (top) al finalizar sea el número 3."

explicacion: |
  1. push(1) -> Pila: [1]
  2. push(2) -> Pila: [1, 2]
  3. pop()   -> Pila: [1] (sale el 2)
  4. push(3) -> Pila: [1, 3]
  El tope final queda en 3.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "intermedio"
  tags: ["operaciones", "pila"]

tipo: ordenar
opciones_explicitas: ["push(10)", "push(20)", "pop()", "push(30)"]
respuesta_orden: ["push(10)", "push(20)", "pop()", "push(30)"]

enunciado: "Ordena las operaciones para obtener una pila que contenga únicamente los elementos [10, 30] (donde 30 es el tope)."

explicacion: |
  1. push(10) -> [10]
  2. push(20) -> [10, 20]
  3. pop()    -> [10]
  4. push(30) -> [10, 30]
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["pilas", "lifo"]

respuesta: "LIFO"
tipo: completar
respuestas_validas:
  - "LIFO"
  - "lifo"

enunciado: "La estructura de datos tipo Pila se caracteriza por seguir el principio de acceso ___ (Last In, First Out)."

explicacion: |
  En una pila, el último elemento en entrar es el primero en salir, similar a una pila de platos.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["colas", "fifo"]

respuesta: "FIFO"
tipo: mc
opciones_explicitas: ["LIFO", "FIFO", "Random Access", "LIFO-FIFO"]

enunciado: "A diferencia de las Pilas, las Colas operan bajo el principio de:"

explicacion: |
  La cola (Queue) utiliza el principio FIFO (First In, First Out), donde el primer elemento en entrar es el primero en ser procesado.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "intermedio"
  tags: ["listas", "acceso"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de una Pila, una Lista permite el acceso aleatorio a cualquier elemento mediante su índice sin necesidad de retirar los elementos superiores."

explicacion: |
  Las listas permiten acceso por índice, mientras que en las pilas el acceso está restringido al elemento en el tope.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["pilas", "operaciones"]

tipo: ordenar
opciones_explicitas: ["Push", "Push", "Pop", "Pop"]
respuesta_orden: ["Push", "Push", "Pop", "Pop"]

enunciado: "Si tenemos una pila vacía, ¿cuál es el orden de operaciones para insertar dos elementos (A y B) y luego extraer el primero que fue insertado?"

explicacion: |
  Para insertar A y B en la pila usamos Push, Push (quedando B en el tope). Como una pila es LIFO, para llegar hasta A (el primero insertado) primero hay que sacar B con un Pop, y luego sacar A con un segundo Pop. La secuencia completa es: Push, Push, Pop, Pop.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "intermedio"
  tags: ["aplicaciones", "escenarios"]

variables:
  idx: uno_de([0, 1])
  escenarios: [["gestionar una impresora con varios documentos esperando", "Cola (FIFO)"], ["gestionar el botón 'deshacer' (undo) de un editor", "Pila (LIFO)"]]

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["Cola (FIFO)", "Pila (LIFO)", "Lista Dinámica"]

enunciado: "Si el escenario es {escenarios[idx][0]}, la estructura de datos más adecuada es una:"

explicacion: |
  En el caso de la impresora, se usa FIFO para respetar el orden de llegada. En el caso de 'deshacer', se usa LIFO para revertir la última acción realizada.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_pilas"
  nivel: "basico"
  tags: ["pilas", "lifo"]

variables:
  datos: [["escribir 'Hola'", "pop"], ["borrar 'mundo'", "pop"], ["cambiar color", "pop"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["push", "pop", "enqueue", "dequeue"]

enunciado: "En un editor de texto, la función 'Deshacer' (Undo) se implementa comúnmente usando una pila para almacenar las acciones. Si la última acción realizada fue {datos[idx][0]}, ¿qué operación de pila se debe ejecutar para revertirla?"

explicacion: |
  Una pila sigue el principio LIFO (Last In, First Out). Para deshacer la última acción, se debe extraer el elemento superior de la pila mediante la operación 'pop'.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_colas"
  nivel: "basico"
  tags: ["colas", "fifo"]

variables:
  datos: [["Doc_A", "imprimir"], ["Doc_B", "imprimir"], ["Doc_C", "imprimir"]]
  idx: uno_de([0,1,2])

respuesta: verdadero
tipo: vf
enunciado: "En una cola de impresión (Spooler), los documentos se procesan en el orden en que llegan. Si el documento {datos[idx][0]} es el primero en la cola, ¿se procesará siguiendo el principio FIFO (First In, First Out)?"

explicacion: |
  Correcto. Las colas utilizan FIFO, lo que garantiza que el primer elemento en entrar sea el primero en salir.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_pilas"
  nivel: "intermedio"
  tags: ["pilas", "lifo", "ordenamiento"]

variables:
  datos: [["A", "B", "C"], ["X", "Y", "Z"], ["1", "2", "3"]]
  idx: uno_de([0,1,2])

respuesta_orden: [datos[idx][2], datos[idx][1], datos[idx][0]]
tipo: ordenar
opciones_explicitas: datos[idx]

enunciado: "Se insertan los elementos de la secuencia {datos[idx][0]}, {datos[idx][1]} y {datos[idx][2]} en una pila (Push) en ese orden exacto. ¿Cuál es el orden en que saldrán de la pila al realizar tres operaciones 'pop' consecutivas?"

explicacion: |
  Al ser una pila (LIFO), el último elemento en entrar ({datos[idx][2]}) es el primero en salir.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas"
  nivel: "intermedio"
  tags: ["listas", "acceso_aleatorio"]

respuesta: "acceso_aleatorio"
tipo: completar
respuestas_validas:
  - "acceso_aleatorio"

enunciado: "A diferencia de una pila o una cola, una lista permite el ___ a cualquier elemento mediante su índice sin necesidad de pasar por los anteriores."

explicacion: |
  Las listas (especialmente los arrays) permiten el acceso aleatorio, mientras que las pilas y colas son estructuras de acceso restringido.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_colas"
  nivel: "basico"
  tags: ["colas", "fifo"]

variables:
  datos: [["clientes en un banco", "true"], ["capas de pintura superpuestas", "false"], ["botones de retroceso", "false"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["true", "false"]

enunciado: "Analiza el siguiente escenario: {datos[idx][0]}. ¿Se comporta este sistema como una cola (FIFO)?"

explicacion: |
  Los clientes en un banco forman una cola real (FIFO): el primero en llegar es el primero en ser atendido. En cambio, las capas de pintura superpuestas y los botones de retroceso se comportan como una pila (LIFO): la última capa aplicada es la primera que se ve o se quita, y el botón de retroceso vuelve primero a la página más reciente visitada.
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

## Sección: funciones-y-modularidad (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["conceptos", "modularidad"]

respuesta: "modularidad"
tipo: completar
respuestas_validas:
  - "modularidad"

enunciado: "La capacidad de dividir un programa complejo en partes más pequeñas, independientes y manejables se denomina ___."

explicacion: |
  La modularidad permite organizar el código en bloques lógicos, facilitando el mantenimiento y la reutilización.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["sintaxis", "conceptos"]

variables:
  escenario: uno_de([["El valor que una función recibe para procesar", "Parámetro"], ["El valor que una función devuelve al finalizar su ejecución", "Retorno"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Parámetro", "Retorno", "Llamada", "Variable local"]

enunciado: "En el contexto de una función, {escenario[0]} es el elemento que permite pasar información hacia el interior de la función."

explicacion: |
  Los parámetros son las variables de entrada que recibe una función para realizar su tarea.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["reutilizacion", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una de las principales ventajas de utilizar funciones es que permite evitar la duplicación de código, ya que una misma función puede ser invocada desde diferentes partes del programa."

explicacion: |
  Efectivamente, la reutilización es uno de los pilares de la programación modular.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["flujo", "orden"]

respuesta_orden: ["Definición", "Llamada", "Ejecución", "Retorno"]
tipo: ordenar
opciones_explicitas: ["Definición", "Llamada", "Ejecución", "Retorno"]

enunciado: "Ordena los pasos lógicos que ocurren cuando se utiliza una función en un programa:"

pasos:
  - "Se declara la función y su lógica."
  - "Se invoca la función desde el código principal."
  - "Se procesan las instrucciones internas."
  - "La función devuelve un valor o finaliza."

explicacion: |
  Primero se debe definir la función, luego llamarla, se ejecuta su cuerpo y finalmente retorna el control o un valor.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["scope", "variables"]

respuesta: "local"
tipo: completar
respuestas_validas:
  - "local"

enunciado: "Una variable declarada dentro del cuerpo de una función tiene un ámbito ___, lo que significa que no es accesible desde fuera de dicha función."

explicacion: |
  Las variables definidas dentro de una función son locales a su contexto de ejecución y no interfieren con el resto del programa.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["conceptos", "modularidad"]

respuesta: verdadero
tipo: vf

enunciado: "Dividir un programa en funciones pequeñas y reutilizables ayuda a reducir la duplicación de código y facilita el mantenimiento."

explicacion: |
  La modularidad permite que el código sea más legible y que las correcciones se realicen en un solo lugar, afectando a todas las partes que llaman a esa función.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["sintaxis", "parametros"]

variables:
  escenario: uno_de([["calcular_area_rectangulo", "base", "altura"], ["saludar_usuario", "nombre", "saludo"], ["sumar_dos_numeros", "a", "b"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["base", "nombre", "a"]

enunciado: "En la función {escenario[0]}({escenario[1]}, {escenario[2]}), ¿cuál es el nombre del primer parámetro?"

explicacion: |
  Los parámetros son las variables que una función recibe para procesar información. En el primer caso del escenario, el primer parámetro es {escenario[1]}.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["flujo_control", "retorno"]

variables:
  datos: uno_de([[10, 2, 20], [5, 3, 15], [8, 4, 32]])

respuesta: datos[2]
tipo: completar

enunciado: |
  Dada la siguiente función:
  def multiplicar(x, y):
      return x * y

  Si ejecutamos la llamada: resultado = multiplicar({datos[0]}, {datos[1]}), el valor de 'resultado' será ___.

pasos:
  - "Identificar los valores de entrada: x = {datos[0]} y y = {datos[1]}"
  - "Realizar la operación matemática: {datos[0]} * {datos[1]}"

explicacion: |
  La función realiza la operación de multiplicación y el comando 'return' devuelve el resultado hacia el punto donde fue llamada.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["estructura", "orden"]

respuesta_orden: ["definir_funcion", "llamar_funcion", "mostrar_resultado"]
tipo: ordenar

opciones_explicitas: ["definir_funcion", "llamar_funcion", "mostrar_resultado"]

enunciado: "Para que un programa modular funcione correctamente, ¿cuál es el orden lógico de ejecución de sus componentes?"

explicacion: |
  Primero se debe definir la lógica (la función), luego se invoca la función con los datos necesarios y finalmente se procesa o muestra el resultado obtenido.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "avanzado"
  tags: ["scope", "variables_globales"]

respuesta: "5"
tipo: mc
opciones_explicitas: ["5", "10", "Error: variable no definida"]

enunciado: |
  Considera el siguiente código:
  x = 10
  def mi_funcion():
      x = 5
      return x

  Si llamamos a mi_funcion(), el valor devuelto es ___.

explicacion: |
  Dentro de la función, se crea una variable local 'x' que tiene el mismo nombre que la global, pero la función trabaja con la local. Por lo tanto, el valor devuelto es el de la variable local definida dentro del bloque, es decir, 5.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["scope", "variables", "modularidad"]

variables:
  escenario: uno_de([[1, "global"], [2, "local"]])

enunciado: "En un programa, una variable definida dentro de una función tiene un alcance ___."

opciones_explicitas:
  - "global"
  - "local"

respuesta: escenario[1]
tipo: mc

explicacion: |
  Las variables definidas dentro de una función tienen un ámbito local, lo que significa que no pueden ser accedidas directamente desde fuera de la función. Esto es fundamental para la modularidad y evita colisiones de nombres.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["return", "side_effects", "output"]

enunciado: "Si una función utiliza 'print' para mostrar un resultado en pantalla pero no tiene una instrucción de salida de datos hacia el flujo principal, la función devuelve un valor de tipo ___."

respuestas_validas:
  - "None"

respuesta: "None"
tipo: completar

explicacion: |
  Es un error común confundir 'imprimir' (mostrar en consola) con 'retornar' (devolver un valor para ser usado en otra parte). Si una función no tiene un 'return' explícito, devuelve por defecto un valor nulo o None.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "avanzado"
  tags: ["side_effects", "pure_functions", "modularidad"]

enunciado: "¿Es verdadero que una 'función pura' es aquella que, además de devolver siempre el mismo resultado para los mismos argumentos, no produce efectos secundarios (como modificar una variable global o escribir en un archivo)?"

respuesta: verdadero
tipo: vf
explicacion: |
  La pureza en las funciones es la base de la programación funcional y de la modularidad robusta. Si una función modifica algo fuera de su propio ámbito, se dice que tiene un 'efecto secundario', lo cual dificulta el testing y la reutilización.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["refactoring", "modularidad", "algoritmo"]

enunciado: "Ordena los pasos lógicos para refactorizar un código monolítico (un solo bloque largo) en un programa modular:"

opciones_explicitas:
  - "Identificar bloques de lógica con una responsabilidad única"
  - "Extraer esos bloques en funciones independientes"
  - "Definir los parámetros de entrada y los valores de retorno necesarios"
  - "Llamar a las nuevas funciones desde el programa principal"

respuesta_orden: ["Identificar bloques de lógica con una responsabilidad única", "Extraer esos bloques en funciones independientes", "Definir los parámetros de entrada y los valores de retorno necesarios", "Llamar a las nuevas funciones desde el programa principal"]
tipo: ordenar

explicacion: |
  La modularización efectiva requiere primero identificar la cohesión (qué pertenece a qué), luego aislar la lógica, definir sus interfaces (parámetros/retornos) y finalmente integrarlas.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["parameters", "arguments", "terminologia"]

enunciado: "En la definición de una función `def suma(a, b):`, los elementos `a` y `b` se denominan ___ , mientras que los valores reales que se pasan al llamar a la función `suma(5, 3)` se denominan ___ ."

respuestas_validas:
  - "parámetros"
  - "argumentos"

respuesta: "parámetros"
tipo: completar

explicacion: |
  Aunque se usan como sinónimos en el habla cotidiana, técnicamente los 'parámetros' son las variables en la definición de la función, y los 'argumentos' son los valores reales que se le pasan durante la ejecución.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["conceptos", "modularidad"]

respuesta: "reutilizar"
tipo: completar
respuestas_validas:
  - "reutilizar"
  - "reutilización"

enunciado: "Mientras que un bloque de código aislado realiza una tarea única, la modularidad busca dividir un programa en piezas que permitan ___ el código en diferentes partes del sistema."

explicacion: |
  La modularidad permite dividir un problema complejo en subproblemas más pequeños y manejables, permitiendo que el código sea reutilizado en otros contextos sin necesidad de reescribirlo.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["funciones", "terminologia"]

respuesta: verdadero
tipo: vf

enunciado: "En el contexto de la definición de funciones, el 'parámetro' es la variable declarada en la firma de la función, mientras que el 'argumento' es el valor real pasado al invocarla. ¿Es esta distinción correcta?"

explicacion: |
  Correcto. El parámetro actúa como un marcador de posición (variable local) y el argumento es el dato concreto que se envía durante la llamada.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["comparacion", "mantenimiento"]

respuesta: "mantenimiento"
tipo: mc
opciones_explicitas: ["rendimiento", "mantenimiento", "estética", "velocidad"]

enunciado: "Comparado con un programa monolítico (un solo bloque de código gigante), un programa modular facilita principalmente el ___ y la detección de errores."

explicacion: |
  Al tener el código separado en módulos o funciones, si ocurre un error, es más fácil localizar la pieza exacta que está fallando sin afectar al resto del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["flujo_control", "modularidad"]

respuesta_orden: ["llamada", "ejecución", "retorno"]
tipo: ordenar
opciones_explicitas: ["llamada", "ejecución", "retorno"]

enunciado: "Ordena cronológicamente los pasos que ocurren cuando el control de un programa pasa a una función:"

pasos:
  - "El programa salta a la definición de la función."
  - "La función devuelve un valor y el control vuelve al punto de origen."
  - "Se invoca la función con los valores necesarios."

explicacion: |
  El flujo lógico es: 1. Llamada (Call), 2. Ejecución del cuerpo de la función, 3. Retorno (Return) al flujo principal.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "avanzado"
  tags: ["scope", "variables"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["local", "solo es visible dentro de la función"], ["global", "es accesible desde cualquier parte del programa"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["solo es visible dentro de la función", "es accesible desde cualquier parte del programa", "ninguna de las anteriores"]

enunciado: "Si definimos una variable dentro de una función, su alcance es {datos[escenario_idx][0]}. ¿Cuál es la característica de este tipo de variable?"

explicacion: |
  Las variables locales existen únicamente durante la ejecución de la función y no pueden ser accedidas directamente desde fuera de ella, lo cual es clave para evitar colisiones de nombres en la modularidad.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["conceptos", "modularidad"]

variables:
  escenarios: [["un programa de 1000 líneas en un solo bloque", "difícil de mantener y testear"], ["un programa dividido en funciones pequeñas", "fácil de mantener y reutilizar"]]
  escenario: uno_de(escenarios)

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["difícil de mantener y testear", "fácil de mantener y reutilizar"]

enunciado: "Si un programador decide que su código debe ser modular, el beneficio principal es que el software resultante será ___."

explicacion: |
  La modularidad permite dividir problemas complejos en partes más pequeñas y manejables, facilitando la lectura, el testeo y la reutilización de código.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["funciones", "parametros"]

variables:
  caso_idx: uno_de([0,1,2])
  casos: [["sumar(a, b)", "los valores que recibe la función"], ["print('Hola')", "lo que la función devuelve"], ["x = 5", "una variable global"]]
  respuestas: ["los valores que recibe la función", "lo que la función devuelve", "una variable global"]

respuesta: casos[caso_idx][1]
tipo: completar
respuestas_validas:
  - "los valores que recibe la función"
  - "lo que la función devuelve"
  - "una variable global"

enunciado: "En la estructura de una función, la sección que define qué datos externos puede procesar la función se denomina ___."

explicacion: |
  Los parámetros son variables locales en la definición de una función que actúan como marcadores de posición para los argumentos que se le pasan al llamarla.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["booleano", "conceptos"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que una función que no contiene una instrucción de retorno (return) siempre devuelve el valor `falso`?"

explicacion: |
  En la mayoría de los lenguajes de programación, si una función no tiene una instrucción de retorno explícita, devuelve un valor especial que representa la ausencia de valor (como `None` en Python o `undefined` en JS), no necesariamente el booleano `falso`.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["orden", "ejecucion"]

respuesta_orden: ["Definición de la función", "Llamada a la función", "Ejecución del cuerpo de la función", "Retorno al flujo principal"]
tipo: ordenar
opciones_explicitas: ["Definición de la función", "Llamada a la función", "Ejecución del cuerpo de la función", "Retorno al flujo principal"]

enunciado: "Ordena los pasos lógicos que ocurren en la memoria de la computadora cuando se utiliza una función en un programa:"

explicacion: |
  Para que una función trabaje, primero debe estar definida en memoria, luego el programa debe invocarla (llamada), se procesa su lógica interna y finalmente el control vuelve a la línea siguiente a la llamada.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "avanzado"
  tags: ["scope", "variables"]

variables:
  test_idx: uno_de([0,1])
  tests: [["x = 10; def f(): print(x); f()", "10"], ["x = 5; def f(): x = 2; f(); print(x)", "5"]]
  resultado_correcto: tests[test_idx][1]

respuesta: resultado_correcto
tipo: completar
tolerancia_abs: 0

enunciado: "Analiza el siguiente código: {tests[test_idx][0]}. ¿Cuál será el resultado de la salida en consola?"

explicacion: |
  En el primer caso, se accede a una variable global. En el segundo caso, la asignación `x = 2` dentro de la función crea una variable local, dejando la variable global `x` intacta para el `print` final.
```

## Sección: historia-y-evolucion-de-los-sistemas-operativos (23 preguntas)

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "basico"
  tags: ["definicion", "concepto_basico"]

variables:
  rol: uno_de(["director_de_orquesta", "intermediario", "gestor"])

respuesta: "intermediario"
tipo: mc
opciones_explicitas: ["intermediario", "hardware", "aplicacion", "usuario"]

enunciado: "En la analogía del director de orquesta, el Sistema Operativo actúa principalmente como el {rol} entre el usuario y los componentes físicos de la computadora."

explicacion: |
  El SO no es el hardware ni el usuario, sino el software que gestiona la comunicación y los recursos, actuando como intermediario.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["historia", "batch"]

variables:
  decada: random(1950, 1960)
  caracteristica: uno_de(["secuencial", "paralelo", "interactivo"])

respuesta: "secuencial"
tipo: mc
opciones_explicitas: ["secuencial", "paralelo", "interactivo", "distribuido"]

enunciado: "En la década de {decada}, los primeros sistemas operativos utilizaban el procesamiento por lotes, donde los trabajos se ejecutaban de manera {caracteristica} sin intervención del usuario."

explicacion: |
  El procesamiento por lotes (batch) ejecutaba tareas una tras otra sin pausa ni interacción humana directa, a diferencia de los sistemas modernos interactivos.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["mainframe", "multiusuario"]

variables:
  tipo_terminal: uno_de(["tontas", "inteligentes", "graficas"])

respuesta: "tontas"
tipo: mc
opciones_explicitas: ["tontas", "inteligentes", "graficas", "touch"]

enunciado: "Con la llegada de los mainframes en los años 60, los sistemas multiusuario permitían el acceso mediante terminales {tipo_terminal}, que no procesaban datos por sí mismas."

explicacion: |
  Las terminales tontas solo enviaban y recibían datos, delegando todo el procesamiento al mainframe central.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["microprocesador", "pc"]

variables:
  decada: uno_de([70, 80])
  dispositivo: uno_de(["ordenadores_personales", "supercomputadoras", "mainframes"])

respuesta: "ordenadores_personales"
tipo: mc
opciones_explicitas: ["ordenadores_personales", "supercomputadoras", "mainframes", "minicomputadoras"]

enunciado: "La llegada de los microprocesadores en los años {decada} permitió la popularización de los {dispositivo} en los hogares."

explicacion: |
  El microprocesador abarató el costo de las computadoras, facilitando su entrada en el mercado doméstico.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["windows", "macos", "competencia"]

variables:
  sistema_estandar: uno_de(["Windows", "Mac OS"])
  caracteristica_windows: uno_de(["interfaz_grafica_accesible", "codigo_abierto", "robustez_servidor"])
  caracteristica_mac: uno_de(["experiencia_integrada", "precio_bajo", "maximo_hardware"])

respuesta: "interfaz_grafica_accesible"
tipo: mc
opciones_explicitas: ["interfaz_grafica_accesible", "codigo_abierto", "robustez_servidor", "experiencia_integrada"]

enunciado: "Durante los años 90, Windows se consolidó como el estándar corporativo y doméstico gracias a su {caracteristica_windows}, mientras que Mac OS destacaba por su experiencia más integrada."

explicacion: |
  Windows ganó mercado por su accesibilidad y compatibilidad, mientras que Mac OS se enfocaba en la integración hardware-software.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["linux", "codigo_abierto"]

variables:
  ambito: uno_de(["academico", "domestico", "gaming", "movil"])
  ventaja_linux: uno_de(["codigo_abierto", "precio_alto", "interfaz_cerrada", "hardware_exclusivo"])

respuesta: "codigo_abierto"
tipo: mc
opciones_explicitas: ["codigo_abierto", "precio_alto", "interfaz_cerrada", "hardware_exclusivo"]

enunciado: "Paralelamente a Windows y Mac OS, Linux ganaba terreno en el ámbito {ambito} gracias a su {ventaja_linux} y robustez."

explicacion: |
  Linux se popularizó en servidores y entornos académicos por su modelo de código abierto y estabilidad.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "basico"
  tags: ["impacto_social", "democratizacion"]

variables:
  antes: uno_de(["codigo_binario", "interfaces_graficas", "nube", "movilidad"])
  despues: uno_de(["interfaces_graficas", "codigo_binario", "lotes", "maquinas_de_escribir"])

respuesta: "interfaces_graficas"
tipo: mc
opciones_explicitas: ["interfaces_graficas", "codigo_binario", "lotes", "maquinas_de_escribir"]

enunciado: "Gracias a los sistemas operativos, la interacción pasó de escribir {antes} a usar {despues} intuitivas, democratizando el acceso a la tecnología."

explicacion: |
  Los SO reemplazaron la necesidad de programar en binario o comandos complejos por interfaces gráficas amigables.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "avanzado"
  tags: ["era_actual", "movilidad"]

respuesta: "movilidad"
tipo: completar
enunciado: "En el siglo XXI, la evolución de los sistemas operativos se ha desplazado hacia la ___ y la integración en la nube."
respuestas_validas:
  - "movilidad"
  - "Movilidad"

explicacion: |
  La popularización de smartphones y la nube han redefinido los sistemas operativos modernos hacia la movilidad constante.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "basico"
  tags: ["gestion", "memoria"]

variables:
  recurso: uno_de(["memoria", "disco_duro", "pantalla", "teclado"])
  accion: uno_de(["asignar", "fabricar", "vender", "desmontar"])

respuesta: "asignar"
tipo: mc
opciones_explicitas: ["asignar", "fabricar", "vender", "desmontar"]

enunciado: "Una de las tareas críticas del SO es {accion} la memoria RAM para las aplicaciones en ejecución."

explicacion: |
  El SO gestiona la memoria física, asignando y liberando espacio para que las aplicaciones funcionen sin conflictos.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["terminologia", "mainframe"]

variables:
  nombre: uno_de(["terminales_tontas", "smartphones", "tablets", "laptops"])

respuesta: "tontas"
tipo: mc
opciones_explicitas: ["tontas", "inteligentes", "graficas", "touch"]

enunciado: "Las terminales que solo enviaban datos al mainframe sin procesarlos se denominaban {nombre}."

explicacion: |
  El término 'tonta' (dumb terminal) se usa para dispositivos sin capacidad de procesamiento independiente.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["conectividad", "historia"]

variables:
  evento: uno_de(["fin_del_aislamiento", "inicio_del_batch", "fin_del_grafico", "inicio_del_binario"])

respuesta: "fin_del_aislamiento"
tipo: mc
opciones_explicitas: ["fin_del_aislamiento", "inicio_del_batch", "fin_del_grafico", "inicio_del_binario"]

enunciado: "La era de los años 90 marcó el {evento} y el inicio de la conectividad masiva."

explicacion: |
  La integración de redes y la web transformaron las computadoras de herramientas aisladas en dispositivos conectados globalmente.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["linux", "servidores"]

variables:
  ventaja_linux: uno_de(["robustez", "precio_bajo", "interfaz_grafica", "juegos"])
  ventaja_windows: uno_de(["estandar_corporativo", "codigo_abierto", "estabilidad_kernel", "gratuidad"])

respuesta: "robustez"
tipo: mc
opciones_explicitas: ["robustez", "estandar_corporativo", "codigo_abierto", "gratuidad"]

enunciado: "En el ámbito de servidores, Linux se destaca por su {ventaja_linux}, mientras que Windows es el {ventaja_windows} para entornos corporativos."

explicacion: |
  Linux es preferido en servidores por su estabilidad y eficiencia, mientras que Windows domina en entornos de oficina por su estandarización.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "basico"
  tags: ["historia", "binario"]

respuesta: "codigo_binario"
tipo: completar
enunciado: "Antes de los SO, los programadores debían escribir ___ directamente para controlar los transistores."
respuestas_validas:
  - "codigo_binario"
  - "código binario"
  - "Código binario"
  - "Código Binario"

explicacion: |
  La programación directa en binario era extremadamente compleja y propensa a errores, sin abstracción de hardware.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["mainframe", "historia"]

variables:
  decada: random(1960, 1969)
  acceso: uno_de(["multiusuario", "monousuario", "local", "remoto"])

respuesta: "multiusuario"
tipo: mc
opciones_explicitas: ["multiusuario", "monousuario", "local", "remoto"]

enunciado: "En la década de {decada}, los mainframes introdujeron el acceso {acceso} mediante terminales."

explicacion: |
  Los mainframes permitían que múltiples usuarios accedieran a la misma máquina simultáneamente, un concepto revolucionario para la época.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["windows", "corporativo"]

variables:
  sistema: uno_de(["Windows", "Mac OS", "Linux", "Unix"])
  rol: uno_de(["estandar_corporativo", "sistema_movil", "sistema_embebido", "sistema_educativo"])

respuesta: "Windows"
tipo: mc
opciones_explicitas: ["Windows", "Mac OS", "Linux", "Unix"]

enunciado: "El sistema {sistema} se convirtió en el {rol} gracias a su interfaz gráfica accesible y compatibilidad."

explicacion: |
  Windows logró la hegemonía en oficinas y hogares por su facilidad de uso y amplia disponibilidad de software.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "basico"
  tags: ["analogia", "gestion"]

respuesta: "director_de_orquesta"
tipo: completar
enunciado: "El SO actúa como el ___ de la sinfonía de hardware, asegurando que todo funcione sin conflictos."
respuestas_validas:
  - "director_de_orquesta"
  - "director de orquesta"
  - "Director de orquesta"
  - "Director_de_orquesta"

explicacion: |
  Esta analogía resalta la capacidad del SO para coordinar múltiples recursos simultáneamente de manera armoniosa.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["batch", "interactivo"]

variables:
  modelo_antiguo: uno_de(["procesamiento_por_lotes", "computacion_en_nube", "interfaz_grafica", "multiusuario"])
  modelo_nuevo: uno_de(["interactivo", "batch", "monousuario", "binario"])

respuesta: "interactivo"
tipo: mc
opciones_explicitas: ["interactivo", "batch", "monousuario", "binario"]

enunciado: "La evolución histórica pasó del {modelo_antiguo} al modelo {modelo_nuevo}, permitiendo la intervención del usuario."

explicacion: |
  El paso de lotes secuenciales a sistemas interactivos fue clave para la usabilidad moderna.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "basico"
  tags: ["aplicaciones", "ejecucion"]

variables:
  tarea: uno_de(["ejecutar", "compilar", "ensamblar", "grabar"])
  recurso: uno_de(["cpu", "disco", "red", "usb"])

respuesta: "ejecutar"
tipo: mc
opciones_explicitas: ["ejecutar", "compilar", "ensamblar", "grabar"]

enunciado: "El SO se encarga de {tarea} las aplicaciones y asignar el recurso {recurso} necesario."

explicacion: |
  El SO gestiona la ejecución de programas, asegurando que cada uno tenga el tiempo de CPU y memoria que necesita.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["pc", "era"]

respuesta: "entrada_de_pcs"
tipo: completar
enunciado: "Durante los años 70 y 80, los ordenadores personales comenzaron a tener su ___ en los hogares."
respuestas_validas:
  - "entrada_de_pcs"
  - "entrada de pcs"
  - "Entrada de PCs"
  - "entrada_de_PCs"

explicacion: |
  Los años 70 y 80 marcaron el inicio de la computación personal, impulsada por microprocesadores más baratos.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["macos", "windows", "comparacion"]

variables:
  sistema: uno_de(["Mac OS", "Windows"])
  caracteristica: uno_de(["experiencia_integrada", "interfaz_accesible", "codigo_abierto", "gratuidad"])

respuesta: "experiencia_integrada"
tipo: mc
opciones_explicitas: ["experiencia_integrada", "interfaz_accesible", "codigo_abierto", "gratuidad"]

enunciado: "Mac OS se diferenciaba de Windows por ofrecer una {caracteristica} más sólida y unificada."

explicacion: |
  Apple controlaba tanto hardware como software en Mac OS, lo que permitía una integración y estabilidad superior en esa época.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "basico"
  tags: ["definicion", "intermediario"]

respuesta: "intermediario"
tipo: completar
enunciado: "El SO actúa como el ___ entre el usuario y el hardware."
respuestas_validas:
  - "intermediario"
  - "Intermediario"
  - "puente"
  - "Puente"

explicacion: |
  Sin este intermediario, el usuario tendría que interactuar directamente con la complejidad del hardware.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "avanzado"
  tags: ["seguridad", "evolucion"]

variables:
  aspecto: uno_de(["movilidad", "seguridad", "lotes", "batch"])
  importancia: uno_de(["alta", "baja", "nula", "media"])

respuesta: "alta"
tipo: mc
opciones_explicitas: ["alta", "baja", "nula", "media"]

enunciado: "En la era actual, la {aspecto} es un pilar fundamental de los sistemas operativos, con {importancia} prioridad."

explicacion: |
  Con la conectividad masiva, la seguridad (autenticación, cifrado, control de acceso) se volvió crítica en el diseño de SO.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "avanzado"
  tags: ["resumen", "cronologia"]

variables:
  orden: uno_de([1, 2, 3, 4])
  evento: uno_de(["lotes", "mainframes", "microprocesadores", "nube"])
  decada: uno_de([1950, 1960, 1970, 2000])

respuesta: "lotes"
tipo: mc
opciones_explicitas: ["lotes", "mainframes", "microprocesadores", "nube"]

enunciado: "En la década de {decada}, el modelo predominante era el procesamiento por {evento}."

explicacion: |
  El procesamiento por lotes fue el primer paso, seguido por mainframes, luego microcomputadoras y finalmente la nube.
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

