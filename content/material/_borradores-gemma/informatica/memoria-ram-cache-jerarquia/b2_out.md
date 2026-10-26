### 1 — Jerarquía de memoria y velocidad
```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "basico"
  tags: ["hardware", "memoria", "cache"]

variables:
  idx: uno_de([0, 1])
  datos: [[10, 100, 1], [100, 10, 10]]

enunciado: "En una jerarquía de memoria típica, si comparamos la memoria caché L1 con la memoria RAM, la caché L1 es más ___ que la RAM, pero tiene una capacidad ___."

opciones_explicitas: ["rápida", "lenta", "pequeña", "grande"]

respuesta: uno_de(["rápida", "lenta"])[idx] == "rápida" ? "rápida" : "lenta"

tipo: mc

explicacion: |
  La jerarquía de memoria busca equilibrar costo, capacidad y velocidad. La caché (L1, L2, L3) es mucho más rápida que la RAM porque está más cerca del procesador y usa tecnología más costosa, lo que obliga a que su capacidad sea mucho menor.
```

### 2 — El concepto de Localidad
```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "intermedio"
  tags: ["cache", "localidad", "performance"]

variables:
  escenario: uno_de([0, 1])
  ejemplo: [["acceso_secuencial", "alta"], ["acceso_aleatorio", "baja"]]

enunciado: "Un procesador accede a una lista de elementos en orden consecutivo (0, 1, 2, 3...). Este tipo de comportamiento favorece la eficiencia de la caché debido a la localidad de referencia, la cual es de tipo ___."

opciones_explicitas: ["espacial", "temporal", "aleatoria"]

respuesta: ejemplo[escenario][0] == "acceso_secuencial" ? "espacial" : "temporal"

tipo: mc

explicacion: |
  La localidad espacial ocurre cuando se accede a una posición de memoria y se accede rápidamente a posiciones cercanas. Esto permite que la caché cargue bloques enteros (cache lines) prediciendo que los datos contiguos serán necesarios pronto.
```

### 3 — El proceso de búsqueda (Hit vs Miss)
```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "intermedio"
  tags: ["cache", "hit", "miss"]

variables:
  caso: uno_de([0, 1])
  resultado: [["hit", "encontrado"], ["miss", "no encontrado"]]

enunciado: "El procesador solicita el dato en la dirección 0x4F. La unidad de control busca en la caché L1 y el dato no se encuentra allí. A este evento se le denomina ___ y el sistema deberá buscar el dato en la siguiente capa de la jerarquía."

respuestas_validas: ["miss", "hit"]

respuesta: resultado[caso][0]

tipo: completar

explicacion: |
  Un 'Cache Miss' ocurre cuando el dato requerido no está en la caché, obligando al sistema a buscar en un nivel más lento (como la RAM), lo que aumenta la latencia de la operación.
```

### 4 — Orden de la jerarquía de memoria
```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "basico"
  tags: ["jerarquia", "orden"]

opciones_explicitas: ["Registros", "Caché L1", "Memoria RAM", "Disco Rígido"]

respuesta: ["Registros", "Caché L1", "Memoria RAM", "Disco Rígido"]

tipo: ordenar

enunciado: "Ordena los siguientes elementos de memoria de mayor a menor velocidad (del más rápido al más lento):"

explicacion: |
  La jerarquía se organiza por velocidad: los Registros son parte del CPU y son instantáneos; la Caché es muy rápida; la RAM es el almacenamiento principal de trabajo; y el Disco Rígido (almacenamiento masivo) es el más lento de la cadena.
```

### 5 — Verdad o Falso: Costo y Capacidad
```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "basico"
  tags: ["costo", "capacidad"]

variables:
  afirmacion: uno_de([0, 1])
  es_cierto: [[verdadero, "La memoria RAM es más cara por GB que el disco duro"], [falso, "La memoria RAM es más barata por GB que el disco duro"]]

enunciado: "La memoria RAM tiene un costo por gigabyte significativamente mayor que un disco duro (HDD/SSD)."

respuesta: es_cierto[afirmacion][0]

tipo: vf

explicacion: |
  Es verdadero. Debido a que la RAM utiliza tecnología semiconductoras mucho más rápida y compleja para mantener los datos, su costo por unidad de capacidad es mucho más elevado que el de los medios de almacenamiento masivo.
```