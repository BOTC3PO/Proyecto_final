### 1 — Hitos de la computación temprana
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["historia", "ordenar"]

variables:
  escenario: [[["ENIAC", "Transistor", "PC"], ["ENIAC", "Microprocesador", "Internet"], ["ENIAC", "Transistor", "Smartphone"]]]
  idx: uno_de([0,1,2])

respuesta: escenario[idx][0]
tipo: ordenar
opciones_explicitas: ["ENIAC", "Transistor", "PC", "Microprocesador", "Internet", "Smartphone"]

enunciado: "Ordena cronológicamente los siguientes hitos tecnológicos según el escenario seleccionado: {escenario[idx][0][0]}, {escenario[idx][0][1]} y {escenario[idx][0][2]}."

explicacion: |
  El orden cronológico correcto depende de la tecnología: 
  1. ENIAC (1945) -> 2. Transistor (1947) -> 3. PC (años 70/80).
  1. ENIAC (1945) -> 2. Microprocesador (1971) -> 3. Internet (TCP/IP 1983).
  1. ENIAC (1945) -> 2. Transistor (1947) -> 3. Smartphone (años 90/2000).
```

### 2 — El primer lenguaje de programación
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["lenguajes", "historia"]

variables:
  datos: [["Ada Lovelace", "Grace Hopper", "John Backus"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][0]
tipo: mc

opciones_explicitas: ["Ada Lovelace", "Grace Hopper", "John Backus", "Alan Turing"]

enunciado: "Identifica a la figura histórica asociada a los primeros algoritmos para la Máquina Analítica: {datos[idx][0]}."

explicacion: |
  {datos[idx][0]} es reconocida históricamente por haber escrito el primer algoritmo destinado a ser procesado por una máquina.
```

### 3 — Evolución del almacenamiento
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["hardware", "almacenamiento"]

variables:
  casos: [["Disquete", "CD-ROM", "USB"], ["Disco Duro", "Cassette", "SSD"]]
  idx: uno_de([0,1])

respuesta: casos[idx][0]
tipo: completar
respuestas_validas: ["Disquete", "CD-ROM", "USB", "Disco Duro", "Cassette", "SSD"]

enunciado: "En la evolución del almacenamiento magnético y óptico, el dispositivo que precede al siguiente es: ___."

explicacion: |
  El orden de evolución tecnológica en el escenario seleccionado es: {casos[idx][0][0]} -> {casos[idx][0][1]} -> {casos[idx][0][2]}.
```

### 4 — El nacimiento de la World Wide Web
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["internet", "web"]

variables:
  hitos: [["Tim Berners-Lee", "Vint Cerf", "Marc Andreessen"]]
  idx: uno_de([0,1,2])

respuesta: hitos[idx][0]
tipo: mc

opciones_explicitas: ["Tim Berners-Lee", "Vint Cerf", "Marc Andreessen", "Steve Jobs"]

enunciado: "¿Quién es el creador de la World Wide Web (WWW) según el contexto de la revolución digital? {hitos[idx][0]}."

explicacion: |
  {hitos[idx][0]} inventó la WWW en el CERN, permitiendo la democratización de la información en la red.
```

### 5 — La era de la movilidad
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["movilidad", "hardware"]

variables:
  tecnologias: [["Teléfono Fijo", "Teléfono Móvil", "Smartphone"], ["Radio", "Walkman", "iPod"]]
  idx: uno_de([0,1])

respuesta: tecnologias[idx][2]
tipo: mc

opciones_explicitas: ["Teléfono Fijo", "Teléfono Móvil", "Smartphone", "Radio", "Walkman", "iPod"]

enunciado: "Identifica el dispositivo que representa la etapa final de la evolución de la comunicación/reproducción en este escenario: ___."

explicacion: |
  La evolución tecnológica sigue una línea de miniaturización y conectividad: {tecnologias[idx][0]} -> {tecnologias[idx][1]} -> {tecnologias[idx][2]}.
```