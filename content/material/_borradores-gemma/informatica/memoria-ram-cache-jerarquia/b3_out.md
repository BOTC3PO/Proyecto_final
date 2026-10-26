### 1 — Jerarquía y Costo
```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["memoria", "costo", "velocidad"]

enunciado: "En una arquitectura de memoria jerárquica, si comparamos la memoria caché, la memoria RAM y el disco duro, ¿cuál de ellas tiene el mayor costo por byte?"

opciones_explicitas: ["Disco duro", "Memoria RAM", "Memoria caché"]
respuesta: "Memoria caché"
tipo: mc

explicacion: |
  La jerarquía de memoria busca un equilibrio entre costo y rendimiento. Las memorias más rápidas (como la caché) utilizan tecnología más cara (SRAM) y tienen menos capacidad, mientras que las más lentas (como el disco duro) son mucho más económicas por cada GB almacenado.
```

### 2 — El mito de la velocidad de la RAM
```
metadata:
  materia: "informatica"
  tema: "memoria_ram"
  nivel: "intermedio"
  tags: ["latencia", "velocidad", "confucion"]

variables:
  es_falso: falso

enunciado: "Un error común es pensar que tener más capacidad de RAM (ej. 64GB vs 16GB) aumenta automáticamente la velocidad de procesamiento de una tarea que ya cabe en 16GB. ¿Es esto verdadero o falso?"

respuesta: es_falso
tipo: vf

explicacion: |
  La capacidad de la RAM determina cuánta información puede estar disponible para la CPU. Si el software ya cabe en la memoria disponible, aumentar la capacidad no acelera la ejecución; lo que acelera la ejecución es la velocidad de acceso (frecuencia) y la latencia, no el tamaño total.
```

### 3 — El rol de la Caché
```
metadata:
  materia: "informatica"
  tema: "cache_procesador"
  nivel: "intermedio"
  tags: ["cache", "cpu", "acceso"]

variables:
  datos: [["L1", "muy rápida"], ["L2", "rápida"], ["L3", "moderada"]]
  idx: uno_de([0,1,2])

enunciado: "Considerando la jerarquía de la caché del procesador, la caché de nivel {datos[idx][0]} es la que ofrece la latencia de acceso más baja, siendo la {datos[idx][1]} de todas las memorias principales."

respuesta: datos[idx][0]
tipo: completar
respuestas_validas: ["L1", "L2", "L3"]

explicacion: |
  La caché L1 es la más cercana al núcleo del procesador, integrada directamente en él, lo que la hace extremadamente rápida pero de muy pequeña capacidad.
```

### 4 — El concepto de Localidad
```
metadata:
  materia: "informatica"
  tema: "principio_localidad"
  nivel: "avanzado"
  tags: ["localidad_temporal", "localidad_espacial"]

enunciado: "La eficiencia de la memoria caché se basa en dos principios: la localidad temporal (reutilizar datos usados recientemente) y la localidad {___} (usar datos que están en direcciones de memoria cercanas)."

pasos:
  - "Identificar el tipo de localidad que complementa a la temporal."

respuesta: "espacial"
tipo: completar
respuestas_validas: ["espacial", "secuencial", "distante"]

explicacion: |
  La localidad espacial implica que si se accede a una posición de memoria, es muy probable que pronto se acceda a las posiciones adyacentes. La caché aprovecha esto cargando bloques enteros (cache lines) en lugar de bytes individuales.
```

### 5 — Orden de velocidad
```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["orden", "velocidad", "jerarquia"]

enunciado: "Ordena los siguientes componentes de memoria de mayor a menor velocidad de acceso (el más rápido primero):"

opciones_explicitas: ["Caché L1", "Memoria RAM", "Disco SSD", "Disco HDD"]
respuesta: ["Caché L1", "Memoria RAM", "Disco SSD", "Disco HDD"]
tipo: ordenar

explicacion: |
  La jerarquía sigue un orden lógico: a medida que nos alejamos del núcleo de la CPU, la velocidad de acceso disminuye drásticamente, pero la capacidad y la economía mejoran.
```