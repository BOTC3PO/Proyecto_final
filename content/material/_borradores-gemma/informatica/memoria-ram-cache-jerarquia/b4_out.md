### 1 — Jerarquía de memoria y velocidad
```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["memoria", "ram", "cache"]

respuesta: "cache"
tipo: completar
respuestas_validas: ["cache", "caché"]

enunciado: "En la jerarquía de memoria, la ___ es un tipo de memoria de acceso muy rápido situada entre el procesador y la memoria RAM para reducir el tiempo de espera."

explicacion: |
  La memoria caché es mucho más rápida que la RAM pero tiene mucha menos capacidad. Su función es almacenar copias de los datos que el procesador utiliza con más frecuencia para evitar tener que ir a la RAM (que es más lenta).
```

### 2 — Relación Costo vs. Capacidad
```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "intermedio"
  tags: ["costo", "capacidad", "jerarquia"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Mayor capacidad y menor costo por bit", "Menor capacidad y mayor costo por bit"]

enunciado: "Si comparamos la memoria RAM con la memoria Caché, la RAM se caracteriza por tener una ___."

datos:
  - ["Menor capacidad y mayor costo por bit", "Mayor capacidad y menor costo por bit"]
  - ["Mayor capacidad y menor costo por bit", "Menor capacidad y mayor costo por bit"]

explicacion: |
  En la jerarquía de memoria, cuanto más cerca está la memoria del núcleo del procesador (como la caché L1), más cara es y menos capacidad tiene. La RAM es más barata y permite almacenar mucha más información, pero es más lenta.
```

### 3 — Verdad o Falso: Volatilidad
```
metadata:
  materia: "informatica"
  tema: "propiedades_memoria"
  nivel: "basico"
  tags: ["volatilidad", "ram", "almacenamiento"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria RAM es una memoria volátil, lo que significa que pierde toda la información almacenada cuando se corta el suministro eléctrico."

explicacion: |
  Correcto. A diferencia del disco duro (almacenamiento secundario), la RAM necesita energía para mantener los datos. Si apagas la computadora, los datos en la RAM se borran.
```

### 4 — Orden de la jerarquía de velocidad
```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "intermedio"
  tags: ["orden", "velocidad", "jerarquia"]

respuesta: ["Registros", "Caché L1", "RAM", "Disco Duro"]
tipo: ordenar
opciones_explicitas: ["Registros", "Caché L1", "RAM", "Disco Duro"]

enunciado: "Ordena los siguientes elementos de mayor a menor velocidad de acceso (del más rápido al más lento):"

explicacion: |
  La jerarquía se organiza por velocidad: los Registros están dentro de la CPU (ultra rápidos), seguidos por la Caché (L1, L2, L3), luego la RAM y finalmente el almacenamiento masivo como el Disco Duro (HDD/SSD), que es mucho más lento pero permite guardar datos permanentemente.
```

### 5 — El propósito de la jerarquía
```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "avanzado"
  tags: ["eficiencia", "costo", "arquitectura"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Maximizar la velocidad de acceso a los datos con un costo equilibrado", "Aumentar la capacidad total de almacenamiento del sistema"]

datos:
  - ["Maximizar la velocidad de acceso a los datos con un costo equilibrado", "Aumentar la capacidad total de almacenamiento del sistema"]
  - ["Aumentar la capacidad total de almacenamiento del sistema", "Maximizar la velocidad de acceso a los datos con un costo equilibrado"]

enunciado: "El objetivo principal de implementar una jerarquía de memoria con distintos niveles es ___."

explicacion: |
  No es posible tener toda la memoria del sistema a la velocidad de la CPU porque sería extremadamente cara. La jerarquía permite que el sistema se comporte como si tuviera una memoria muy grande y muy rápida, equilibrando rendimiento y costo.
```