### 1 — Escenario de deshacer en un editor
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_pilas"
  nivel: "basico"
  tags: ["pilas", "lifo"]

variables:
  escenario: uno_de([["escribir 'Hola'", "pop"], ["borrar 'mundo'", "pop"], ["cambiar color", "pop"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["push", "pop", "enqueue", "dequeue"]

enunciado: "En un editor de texto, la función 'Deshacer' (Undo) se implementa comúnmente usando una pila para almacenar las acciones. Si la última acción realizada fue {escenario[idx][0]}, ¿qué operación de pila se debe ejecutar para revertirla?"

explicacion: |
  Una pila sigue el principio LIFO (Last In, First Out). Para deshacer la última acción, se debe extraer el elemento superior de la pila mediante la operación 'pop'.
```

### 2 — Gestión de impresión
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_colas"
  nivel: "basico"
  tags: ["colas", "fifo"]

variables:
  tarea: uno_de([["Doc_A", "imprimir"], ["Doc_B", "imprimir"], ["Doc_C", "imprimir"]])
  idx: uno_de([0,1,2])

respuesta: "imprimir"
tipo: vf

enunciado: "En una cola de impresión (Spooler), los documentos se procesan en el orden en que llegan. Si el documento {tarea[idx][0]} es el primero en la cola, ¿se procesará siguiendo el principio FIFO (First In, First Out)?"

explicacion: |
  Correcto. Las colas utilizan FIFO, lo que garantiza que el primer elemento en entrar sea el primero en salir.
```

### 3 — Flujo de una pila de llamadas
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_pilas"
  nivel: "intermedio"
  tags: ["pilas", "lifo", "ordenamiento"]

variables:
  secuencia: uno_de([["A", "B", "C"], ["X", "Y", "Z"], ["1", "2", "3"]])
  idx: uno_de([0,1,2])

respuesta: ["C", "B", "A"]
tipo: ordenar
opciones_explicitas: ["A", "B", "C", "X", "Y", "Z", "1", "2", "3"]

enunciado: "Se insertan los elementos de la secuencia {secuencia[idx][0]}, {secuencia[idx][1]} y {secuencia[idx][2]} en una pila (Push) en ese orden exacto. ¿Cuál es el orden en que saldrán de la pila al realizar tres operaciones 'pop' consecutivas?"

explicacion: |
  Al ser una pila (LIFO), el último elemento en entrar ({secuencia[idx][2]}) es el primero en salir.
```

### 4 — Comparativa de estructuras
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas"
  nivel: "intermedio"
  tags: ["listas", "acceso_aleatorio"]

variables:
  lista_tipo: uno_de(["Array", "Lista Enlazada"])
  idx: uno_de([0,1])

respuesta: "acceso_aleatorio"
tipo: completar
respuestas_validas: ["acceso_aleatorio", "secuencial"]

enunciado: "A diferencia de una pila o una cola, una {lista_tipo[idx]} permite el ___ a cualquier elemento mediante su índice sin necesidad de pasar por los anteriores."

explicacion: |
  Las listas (especialmente los arrays) permiten el acceso aleatorio, mientras que las pilas y colas son estructuras de acceso restringido.
```

### 5 — El concepto de FIFO
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_colas"
  nivel: "basico"
  tags: ["colas", "fifo"]

variables:
  caso: uno_de([["clientes en un banco", "true"], ["capas de pintura", "true"], ["botones de retroceso", "false"]])
  idx: uno_de([0,1,2])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["true", "false"]

enunciado: "Analiza el siguiente escenario: {caso[idx][0]}. ¿Se comporta este sistema como una cola (FIFO)?"

explicacion: |
  Si el caso es verdadero, el orden de llegada determina el orden de atención o procesamiento.
```