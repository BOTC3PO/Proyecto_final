# Química — Materia: estados y cambios (cuestionario, 24 preguntas VBLang)

> Tema: `QA`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Identificación de estado gaseoso

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["particulas", "estados"]

variables:
  descripcion: "Las partículas están muy separadas, se mueven al azar a alta velocidad y no presentan fuerzas de atracción significativas."

respuesta: "gas"
tipo: mc
opciones_explicitas: ["sólido", "líquido", "gas"]

enunciado: "Si las partículas presentan la siguiente descripción: {descripcion}, ¿a qué estado de la materia nos referimos?"

explicacion: |
  En el estado gaseoso, la energía cinética es tan alta que las fuerzas intermoleculares no logran mantener a las partículas unidas, permitiendo que ocupen todo el volumen disponible.
```

### 2 — Propiedades de los líquidos

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["propiedades", "volumen"]

respuesta: verdadero
tipo: vf

enunciado: "¿Un líquido tiene volumen propio pero no tiene forma propia (se adapta al recipiente)?"

explicacion: |
  Correcto. Los líquidos tienen fuerzas de atracción suficientes para mantener un volumen constante, pero no para mantener una estructura rígida, lo que les permite fluir.
```

### 3 — Características del plasma

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "intermedio"
  tags: ["plasma", "ionizacion"]

respuesta: "gas ionizado"
tipo: mc
opciones_explicitas: ["gas ionizado", "sólido denso", "líquido viscoso"]

enunciado: "El plasma se define principalmente como un..."

explicacion: |
  El plasma es un gas que ha sido sometido a tanta energía que sus electrones se han separado de los núcleos, resultando en un medio de partículas cargadas.
```

### 4 — Temperatura y energía cinética

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["energia", "temperatura"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría cinético-molecular, si la temperatura de un sistema aumenta, la energía cinética promedio de sus partículas también aumenta."

explicacion: |
  La temperatura es, por definición, una medida de la energía cinética promedio de las partículas de un cuerpo.
```

### 5 — Cambio de estado cotidiano

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["cambios_de_estado", "completar"]

variables:
  pares: [["el hielo derritiéndose", "fusion"], ["el vapor de agua volviéndose líquido", "condensacion"], ["el agua hirviendo", "vaporizacion"]]
  idx: uno_de([0, 1, 2])

respuesta: pares[idx][1]
tipo: completar
respuestas_validas:
  - pares[idx][1]

enunciado: "Identifica el cambio de estado que ocurre cuando: {pares[idx][0]}."

explicacion: |
  El proceso descrito corresponde a la {pares[idx][1]}.
```

### 6 — De gas a sólido

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["sublimacion_inversa", "mc"]

respuesta: "Sublimación inversa"
tipo: mc
opciones_explicitas: ["Fusión", "Sublimación inversa", "Condensación", "Sublimación"]

enunciado: "¿Cómo se denomina al paso directo del estado gaseoso al estado sólido sin pasar por el líquido?"

explicacion: |
  El paso de gas a sólido se llama sublimación inversa (o deposición).
```

### 7 — Nombrar el cambio de estado

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "intermedio"
  tags: ["completar", "estados"]

variables:
  pares: [["fusión", "sólido a líquido"], ["vaporización", "líquido a gas"], ["condensación", "gas a líquido"], ["sublimación", "sólido a gas"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: pares[idx][0]
tipo: completar
respuestas_validas:
  - pares[idx][0]

enunciado: "¿Cómo se llama el cambio de estado descrito como: {pares[idx][1]}?"

explicacion: |
  El cambio de {pares[idx][1]} es la {pares[idx][0]}.
```

### 8 — La sublimación y el líquido

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["sublimacion", "vf"]

respuesta: verdadero
tipo: vf

enunciado: "¿En el proceso de sublimación, la sustancia pasa directamente de sólido a gas sin pasar por el estado líquido?"

explicacion: |
  Es verdadero. La sublimación es un cambio de estado directo que evita la fase líquida.
```

### 9 — Calor sensible y cambio de estado

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["calor", "temperatura", "cambio_de_estado"]

respuesta: verdadero
tipo: vf

enunciado: "Durante un cambio de estado, ¿la temperatura se mantiene constante mientras se sigue entregando calor?"

explicacion: |
  En un cambio de fase, la energía térmica se utiliza para romper las fuerzas de atracción intermoleculares en lugar de aumentar la energía cinética (temperatura).
```

### 10 — Identificación de calor latente

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["calor_latente", "calor_sensible"]

respuesta: "Hielo derritiéndose en un vaso"
tipo: mc
opciones_explicitas: ["Calentar agua de 20°C a 50°C", "Hielo derritiéndose en un vaso", "Calentar un metal"]

enunciado: "Identifica la situación que representa un proceso de calor LATENTE:"

explicacion: |
  El calor latente ocurre durante el cambio de fase (fusión del hielo), donde la temperatura no varía a pesar de la transferencia de energía.
```

### 11 — Punto de ebullición del agua (completar)

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["agua", "ebullicion"]

variables:
  valor: 100

respuesta: valor
tipo: completar
respuestas_validas:
  - valor

enunciado: "El agua hirviendo a presión atmosférica normal no supera los {valor} grados Celsius."

explicacion: |
  A presión atmosférica estándar (1 atm), el agua alcanza su punto de ebullición a los 100°C.
```

### 12 — Termodinámica de la fusión

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["fusion", "endotermico"]

respuesta: "endotermico"
tipo: mc
opciones_explicitas: ["endotermico", "exotermico"]

enunciado: "¿Cómo se clasifica el proceso de fusión (paso de sólido a líquido) según el flujo de calor?"

explicacion: |
  La fusión es un proceso endotérmico porque el sistema debe absorber calor del entorno para romper las estructuras sólidas.
```

### 13 — Cambio de estado cotidiano (variado)

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["cambios_de_estado", "cotidiano"]

variables:
  ejemplos: [["hielo seco humeando", "sublimacion"], ["escarcha en el pasto", "sublimacion inversa"], ["vapor en el espejo del baño", "condensacion"], ["ropa que se seca al sol", "vaporizacion"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: ejemplos[idx][1]
tipo: mc
opciones_explicitas: ["sublimacion", "sublimacion inversa", "condensacion", "vaporizacion"]

enunciado: "Si observamos el fenómeno de {ejemplos[idx][0]}, ¿qué proceso de cambio de estado está ocurriendo?"

explicacion: |
  El fenómeno descrito corresponde a la {ejemplos[idx][1]}.
```

### 14 — Vaporización

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["vaporizacion", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "La evaporación y la ebullición son las dos formas de vaporización."

explicacion: |
  Es correcto. La evaporación es un proceso superficial y lento, mientras que la ebullición es un proceso en toda la masa del líquido con formación de burbujas.
```

### 15 — Endotérmico o exotérmico

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "intermedio"
  tags: ["termodinamica", "energia"]

variables:
  cambios: [["fusión", "endotérmico"], ["solidificación", "exotérmico"], ["vaporización", "endotérmico"], ["condensación", "exotérmico"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: cambios[idx][1]
tipo: completar
respuestas_validas:
  - cambios[idx][1]

enunciado: "El proceso de {cambios[idx][0]} es un proceso ___ (absorbe o libera calor)."

explicacion: |
  Los procesos que absorben calor para cambiar de estado (como la fusión) son endotérmicos; los que lo liberan (como la condensación) son exotérmicos.
```

### 16 — Energía cinética y estado

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "intermedio"
  tags: ["cinetica", "teoria_cinetica"]

respuesta: "MAYOR"
tipo: mc
opciones_explicitas: ["MAYOR", "MENOR", "IGUAL"]

enunciado: "¿La energía cinética promedio de las partículas de un gas es MAYOR, MENOR o IGUAL que la de un sólido a la misma masa y temperatura?"

explicacion: |
  En un gas, las fuerzas de atracción intermolecular son mucho más débiles, lo que permite un movimiento desordenado y mayor energía cinética promedio que en un sólido.
```

### 17 — Orden de energía cinética por estado

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["cinetica", "estados_materia", "ordenar"]

variables:
  orden_correcto: ["Sólido", "Líquido", "Gas"]

respuesta_orden: orden_correcto
tipo: ordenar
opciones_explicitas: ["Sólido", "Líquido", "Gas"]

enunciado: "Ordena los estados de la materia de MENOR a MAYOR energía cinética de sus partículas."

explicacion: |
  En el sólido la energía es mínima (solo vibran), en el líquido es intermedia y en el gas es máxima debido a la alta velocidad de sus partículas.
```

### 18 — Movimiento en sólidos

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["solido", "particulas"]

respuesta: verdadero
tipo: vf

enunciado: "En un sólido, las partículas no se desplazan de su lugar, solo vibran en sus posiciones de equilibrio."

explicacion: |
  Correcto. Las fuerzas de atracción son lo suficientemente fuertes como para mantener a las partículas en posiciones fijas, permitiendo únicamente el movimiento vibratorio.
```

### 19 — Propiedades de los estados

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["forma", "volumen"]

respuesta: "Sólido"
tipo: mc
opciones_explicitas: ["Sólido", "Líquido", "Gas"]

enunciado: "¿Qué estado de la materia posee forma propia Y volumen propio?"

explicacion: |
  Los sólidos tienen fuerzas intermoleculares fuertes que mantienen su forma y volumen constantes independientemente del recipiente.
```

### 20 — El estado gaseoso

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["gas", "propiedades"]

respuesta: "gas"
tipo: completar
respuestas_validas:
  - "gas"

enunciado: "El estado que no tiene forma propia NI volumen propio es el ___."

explicacion: |
  Los gases se expanden hasta ocupar todo el volumen del recipiente que los contiene y adoptan su forma, debido a la gran distancia entre sus partículas.
```

### 21 — Punto de fusión del agua

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["agua", "puntos_criticos"]

variables:
  valor_fusion: 0

respuesta: valor_fusion
tipo: completar

enunciado: "Indica el punto de fusión del agua en grados Celsius a presión atmosférica normal."

explicacion: |
  El punto de fusión del agua es 0°C.
```

### 22 — Punto de ebullición del agua (input)

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["agua", "puntos_criticos"]

variables:
  valor_ebullicion: 100

respuesta: valor_ebullicion
tipo: completar

enunciado: "Indica el punto de ebullición del agua en grados Celsius a presión atmosférica normal."

explicacion: |
  El punto de ebullición del agua es 100°C.
```

### 23 — Condensación en la tapa

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["cambios_de_estado", "condensacion"]

respuesta: "El vapor se enfría y condensa al tocar la superficie fría"
tipo: mc
opciones_explicitas: ["El vapor se enfría y condensa al tocar la superficie fría", "El vapor se expande por el choque térmico", "La tapa absorbe el calor y evapora las gotas", "El vapor se sublima directamente"]

enunciado: "¿Por qué el vapor de una olla hirviendo se convierte en gotitas al tocar una tapa fría?"

explicacion: |
  Al entrar en contacto con una superficie fría, el vapor de agua pierde energía térmica, pasando de estado gaseoso a líquido (condensación).
```

### 24 — Abundancia del plasma

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "intermedio"
  tags: ["plasma", "universo"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es el plasma el estado de la materia más común en el universo, superando la suma de sólidos, líquidos y gases?"

explicacion: |
  Debido a la enorme cantidad de estrellas y gas ionizado en el espacio, el plasma es el estado predominante en el cosmos.
```
