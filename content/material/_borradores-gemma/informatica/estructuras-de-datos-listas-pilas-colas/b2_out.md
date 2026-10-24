### 1 — El concepto de LIFO
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

### 2 — Operaciones en una Pila
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_pilas"
  nivel: "intermedio"
  tags: ["pilas", "push", "pop"]

variables:
  escenario: uno_de([
    ["push(10)", "push(20)", "push(30)", "pop"],
    ["push('A')", "push('B')", "push('C')", "pop"],
    ["push(5)", "push(15)", "push(25)", "pop"]
  ])

respuesta: escenario[3]
tipo: mc
opciones_explicitas: ["push(10)", "push(20)", "push(30)", "pop"]

enunciado: "Dada una pila vacía, si realizamos las siguientes operaciones en orden: {escenario[0]}, {escenario[1]}, {escenario[2]} y finalmente {escenario[3]}, ¿cuál es el elemento que queda en el tope de la pila?"

pasos:
  - "Insertar el primer elemento (push)."
  - "Insertar el segundo elemento (push)."
  - "Insertar el tercer elemento (push)."
  - "Eliminar el elemento superior (pop)."

explicacion: |
  Al hacer push de los tres elementos, el tope es el tercero. Al hacer pop, ese tercero se elimina, dejando el segundo como el nuevo tope.
```

### 3 — El orden de una Cola (FIFO)
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_colas"
  nivel: "basico"
  tags: ["colas", "fifo"]

variables:
  datos: uno_de([
    ["cliente_1", "cliente_2", "cliente_3"],
    ["paquete_A", "paquete_B", "paquete_C"],
    ["tarea_X", "tarea_Y", "tarea_Z"]
  ])

respuesta: datos[0]
tipo: mc
opciones_explicitas: ["cliente_1", "cliente_2", "cliente_3", "cliente_4"]

enunciado: "En una cola (Queue) de procesamiento de tareas, si entran los elementos {datos[0]}, {datos[1]} y {datos[2]} en ese orden, ¿cuál es el primer elemento en ser atendido y salir de la cola?"

explicacion: |
  Las colas siguen el principio FIFO (First In, First Out). El primero en entrar es el primero en salir.
```

### 4 — Secuencia de una Pila de Procesamiento
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_pilas"
  nivel: "intermedio"
  tags: ["pilas", "ordenar"]

respuesta: ["A", "B", "C", "D"]
tipo: ordenar
opciones_explicitas: ["A", "B", "C", "D"]

enunciado: "Ordena la secuencia de elementos que quedarían en la pila si realizamos las siguientes operaciones de forma consecutiva: push(A), push(B), push(C), push(D), pop, pop."

pasos:
  - "La pila contiene [A, B, C, D] con D en el tope."
  - "Se ejecuta pop: sale D, queda [A, B, C]."
  - "Se ejecuta pop: sale C, queda [A, B]."
  - "El orden de los elementos restantes de base a tope es..."

explicacion: |
  Al hacer pop dos veces, eliminamos los dos últimos elementos insertados. Los que quedan son A y B, pero el orden solicitado es la secuencia de la estructura. (Nota: Para este ejercicio se pide el orden de los elementos que permanecen en la pila).
```

### 5 — Diferencia entre Pila y Cola
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_comparacion"
  nivel: "basico"
  tags: ["pilas", "colas"]

respuesta: "FIFO"
tipo: completar
respuestas_validas: ["FIFO", "Lifo", "lifo", "fifo"]

enunciado: "Mientras que la Pila utiliza el principio LIFO (Last In, First Out), la Cola utiliza el principio ___ (First In, First Out)."

explicacion: |
  La Cola (Queue) garantiza que el primer elemento en entrar sea el primero en ser procesado.
```