### 1 — Concepto de LIFO
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["pilas", "lifo"]

respuesta: "LIFO"
tipo: completar
respuestas_validas: ["LIFO", "lifo", "LIFO (Last In, First Out)"]

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
  idx: uno_de([0, 1])
  escenario: [[["Pila", "LIFO", "Último en entrar"], ["Cola", "FIFO", "Primero en entrar"]], [["Pila", "LIFO", "Último en entrar"], ["Cola", "FIFO", "Primero en entrar"]]]

respuesta: escenario[idx][0]
tipo: mc
opciones_explicitas: ["Pila", "Cola"]

enunciado: "Si una estructura de datos sigue el principio de 'Primero en entrar, primero en salir', estamos ante una ___."

explicacion: |
  El principio FIFO (First In, First Out) es característico de las colas, donde el primer elemento que llega es el primero en ser procesado.
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

respuesta: ["push", "pop"]
tipo: ordenar

opciones_explicitas: ["push", "pop", "enqueue", "dequeue"]

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
  ejemplo: [["gestión de procesos en un CPU", "impresora"], ["historial de navegación", "gestión de procesos en un CPU"]]

respuesta: ejemplo[idx][0]
tipo: mc
opciones_explicitas: ["gestión de procesos en un CPU", "historial de navegación", "deshacer (undo)"]

enunciado: "Las colas (FIFO) son ideales para escenarios de espera. ¿Cuál de estos es un uso común de una cola?"

explicacion: |
  La gestión de procesos en un sistema operativo utiliza colas para decidir qué tarea procesar según su orden de llegada.
```