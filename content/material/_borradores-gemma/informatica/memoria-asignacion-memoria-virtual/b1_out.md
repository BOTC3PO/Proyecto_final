### 1 — Concepto de Memoria Virtual
```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["conceptos", "gestion_de_memoria"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria virtual es una técnica que permite a un proceso utilizar una cantidad de memoria que excede la capacidad de la memoria física (RAM) disponible, utilizando parte del almacenamiento secundario como extensión."

explicacion: |
  Correcto. La memoria virtual permite que el sistema operativo gestione la memoria de forma abstracta, permitiendo ejecutar programas más grandes que la RAM física mediante el uso de paginación o segmentación en el disco.
```

### 2 — El rol de la MMU
```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["hardware", "direccionamiento"]

variables:
  escenario: uno_de([["dirección lógica", "dirección física"], ["dirección física", "dirección lógica"]])

respuesta: escenario[0]
tipo: mc

opciones_explicitas: ["dirección lógica", "dirección física", "dirección de disco", "dirección de caché"]

enunciado: "En un sistema con memoria virtual, la unidad de gestión de memoria (MMU) es el componente de hardware encargado de traducir la {escenario[0]} en una {escenario[1]}."

explicacion: |
  La MMU (Memory Management Unit) es el componente encargado de la traducción de direcciones lógicas (generadas por la CPU) a direcciones físicas (ubicadas en la RAM).
```

### 3 — Componentes de la gestión de memoria
```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["terminologia", "paginacion"]

respuesta: ["Paginación", "Segmentación", "Direccionamiento"]
tipo: ordenar

opciones_explicitas: ["Paginación", "Segmentación", "Direccionamiento"]

enunciado: "Ordena los conceptos de mayor a menor nivel de abstracción en la gestión de memoria (desde la división de memoria en bloques de tamaño fijo hasta la traducción de direcciones):"

explicacion: |
  La paginación divide la memoria en trozos fijos, la segmentación divide la memoria en unidades lógicas de tamaño variable, y el direccionamiento es el proceso final de localización.
```

### 4 — El fenómeno de la Paginación
```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["paginacion", "errores"]

respuesta: "page fault"
tipo: completar

respuestas_validas: ["page fault", "error de paginación", "fallo de página"]

enunciado: "Cuando un proceso intenta acceder a una página que no se encuentra actualmente en la memoria física, se produce un evento conocido como ___."

explicacion: |
  Un 'page fault' (fallo de página) es una interrupción generada por el hardware que indica que la página requerida debe ser cargada desde el disco a la RAM.
```

### 5 — Memoria Física vs. Virtual
```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["comparacion"]

variables:
  datos: uno_de([[16, 128], [32, 256], [64, 512]])

respuesta: datos[1]
tipo: input
tolerancia_abs: 0

enunciado: "Si un sistema tiene una memoria RAM física de {datos[0]} GB y se implementa memoria virtual, la capacidad de direccionamiento lógico total para un proceso puede llegar a ser de hasta {datos[1]} GB."

pasos:
  - "Identificar la capacidad de la RAM física."
  - "Asociar la capacidad de direccionamiento virtual como un valor superior a la física."

explicacion: |
  La memoria virtual permite que el espacio de direcciones lógicas sea significativamente mayor que la memoria física instalada.
```