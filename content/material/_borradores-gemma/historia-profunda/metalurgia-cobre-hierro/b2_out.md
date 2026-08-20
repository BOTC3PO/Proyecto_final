### 1 — El auge del cobre
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["Edad_del_Cobre", "metalurgia"]

enunciado: "Durante la Edad del Cobre, los seres humanos comenzaron a utilizar este metal para fabricar objetos, siendo el cobre puro un material más ___ que el hierro."

respuestas_validas: ["blando"]
tipo: completar

explicacion: |
  El cobre es un metal relativamente blando en comparación con el hierro, lo que limitaba su uso para herramientas de corte duraderas.
```

### 2 — La transición tecnológica
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["Edad_del_Bronce", "aleaciones"]

variables:
  es_aleacion: true

enunciado: "La Edad del Bronce se caracteriza por el uso de una aleación. ¿Cuál es la composición principal de este material?"

opciones_explicitas: ["Cobre y Hierro", "Cobre y Estaño", "Hierro y Carbono", "Estaño y Plomo"]
respuesta: "Cobre y Estaño"
tipo: mc

explicacion: |
  El bronce es una aleación de cobre y estaño que resultó ser mucho más resistente y dura que el cobre puro.
```

### 3 — Propiedades del bronce
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["Edad_del_Bronce", "tecnologia"]

enunciado: "El paso de la Edad del Cobre a la Edad del Bronce supuso una mejora tecnológica debido a la ___ de las herramientas y armas."

respuestas_validas: ["resistencia"]
tipo: completar

explicacion: |
  Al añadir estaño al cobre, se obtenía bronce, un material con una dureza superior, ideal para la guerra y la agricultura.
```

### 4 — Evolución de la metalurgia
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["secuencia_temporal"]

opciones_explicitas: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]
respuesta: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]
tipo: ordenar

enunciado: "Ordena cronológicamente las edades de la metalurgia según la evolución de la complejidad de los materiales utilizados:"

explicacion: |
  La secuencia lógica es primero el uso de metales nativos (Cobre), luego aleaciones (Bronce) y finalmente metales más duros (Hierro).
```

### 5 — Comparativa de dureza
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "avanzado"
  tags: ["propiedades_materiales"]

variables:
  idx: uno_de([0,1])
  datos: [["Cobre", "Blando"], ["Bronce", "Duro"]]

enunciado: "Si comparamos el material de la Edad del Cobre con el de la Edad del Bronce, el material de la Edad del {datos[idx][0]} es más {datos[idx][1]} que el de la Edad del Bronce."

respuestas_validas: ["Blando"]
tipo: completar

explicacion: |
  Dependiendo del escenario sorteado, el enunciado evalúa la relación de dureza entre el cobre y el bronce.
```