### 1 — Identificación de la Edad del Cobre
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["prehistoria", "metalurgia"]

variables:
  escenario: uno_de([["El descubrimiento de la fundición de cobre permitió la creación de las primeras herramientas duraderas.", "Edad del Cobre"], ["El uso de aleaciones de cobre con estaño dio origen a objetos más resistentes.", "Edad del Bronce"], ["La metalurgia de este metal permitió la creación de armas y herramientas de gran dureza.", "Edad del Hierro"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]

enunciado: "Un arqueólogo encuentra una pieza cuya característica principal es: {escenario[idx][0]}"

explicacion: |
  La respuesta correcta es {escenario[idx][1]}. La transición entre edades se define por el metal predominante en la tecnología de la época.
```

### 2 — La transición tecnológica
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["transicion", "tecnologia"]

variables:
  datos: [["Cobre", "Edad del Cobre"], ["Bronce", "Edad del Bronce"], ["Hierro", "Edad del Hierro"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]

enunciado: "Si un yacimiento presenta una abundancia de herramientas hechas de {datos[idx][0]}, estamos ante la ___."

explicacion: |
  El uso de {datos[idx][0]} es el indicador clave de la {datos[idx][1]}.
```

### 3 — Orden cronológico de la metalurgia
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["cronologia", "edades"]

variables:
  orden_correcto: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]

respuesta: orden_correcto
tipo: ordenar
opciones_explicitas: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]

enunciado: "Ordena cronológicamente las edades de los metales, desde la más antigua a la más reciente:"

explicacion: |
  El orden correcto es: {orden_correcto}.
```

### 4 — Propiedades de los metales
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "avanzado"
  tags: ["propiedades", "quimica_antigua"]

variables:
  caso: uno_de([["La baja temperatura de fusión del cobre facilitó su primer uso.", "Cobre"], ["La necesidad de alear estaño con cobre para obtener mayor dureza.", "Bronce"], ["La abundancia de este metal y su gran dureza tras la fundición.", "Hierro"]])
  idx: uno_de([0, 1, 2])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["Cobre", "Bronce", "Hierro"]

enunciado: "Identifica el metal asociado al siguiente proceso: {caso[idx][0]}"

explicacion: |
  El proceso descrito corresponde al uso de {caso[idx][1]}.
```

### 5 — El impacto del Hierro
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["impacto_social", "hierro"]

variables:
  escenario: uno_de([["La democratización de las herramientas debido a la abundancia del metal.", "Edad del Hierro"], ["El auge del comercio de estaño para la aleación.", "Edad del Bronce"], ["El inicio de la metalurgia con metales nativos.", "Edad del Cobre"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: input
tolerancia_abs: 0

enunciado: "El fenómeno de {escenario[idx][0]} es característico de la ___."

explicacion: |
  La descripción corresponde a la {escenario[idx][1]}.
```