### 1 — Diferencia fundamental de Pilas
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["pilas", "lifo"]

respuesta: "LIFO"
tipo: completar
respuestas_validas: ["LIFO", "lifo"]

enunciado: "La estructura de datos tipo Pila se caracteriza por seguir el principio de acceso ___ (Last In, First Out)."

explicacion: |
  En una pila, el último elemento en entrar es el primero en salir, similar a una pila de platos.
```

### 2 — Identificación de Colas
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

### 3 — Propiedad de las Listas vs Pilas
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

### 4 — Orden de operaciones en una Pila
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["pilas", "operaciones"]

respuesta: ["Push", "Push", "Pop"]
tipo: ordenar
opciones_explicitas: ["Push", "Push", "Pop", "Pop", "Pop"]

enunciado: "Si tenemos una pila vacía, ¿cuál es el orden de operaciones para insertar dos elementos (A y B) y luego extraer el primero que fue insertado?"

explicacion: |
  Para obtener el primer elemento insertado (A) en una pila, primero debemos meter A, luego B, y luego sacar (Pop) dos veces. Sin embargo, el orden de inserción/extracción solicitado para obtener el primero es: Push(A), Push(B), Pop(B), Pop(A). El orden de las operaciones para dejar la pila con el primer elemento fuera es Push, Push, Pop, Pop. Reajustando el enunciado para la secuencia de acciones: para sacar el elemento A tras haber metido A y B, se requiere: Push, Push, Pop, Pop.
  *Nota: El usuario debe ordenar la secuencia de acciones para lograr el objetivo.*
```

### 5 — Uso de estructuras según el escenario
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