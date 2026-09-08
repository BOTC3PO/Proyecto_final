# Informatica — Estructuras de datos listas pilas colas (cuestionario, 26 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de LIFO

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

### 2 — Diferencia entre Pilas y Colas

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

### 3 — Propiedad de las Listas

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

### 4 — Operaciones en una Pila

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

### 5 — Uso de Colas

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

### 6 — El concepto de LIFO

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

### 7 — Operaciones en una Pila

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

### 8 — El orden de una Cola (FIFO)

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

### 9 — Secuencia de una Pila de Procesamiento

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

### 10 — Diferencia entre Pila y Cola

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

### 11 — Confusión de orden de acceso

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

### 12 — El orden de salida en una cola

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

### 13 — ¿Pila o Cola para una función de 'Deshacer'?

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

### 14 — Similitudes entre Pilas y Colas

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

### 15 — Secuencia de operaciones en una Pila

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

### 16 — Secuencia de estados de una Pila

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

### 17 — Diferencia fundamental de Pilas

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

### 18 — Identificación de Colas

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

### 19 — Propiedad de las Listas vs Pilas

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

### 20 — Orden de operaciones en una Pila

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

### 21 — Uso de estructuras según el escenario

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

### 22 — Escenario de deshacer en un editor

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

### 23 — Gestión de impresión

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

### 24 — Flujo de una pila de llamadas

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

### 25 — Comparativa de estructuras

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

### 26 — El concepto de FIFO

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
