### 1 — Evolución de los componentes electrónicos
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["hardware", "historia"]

respuesta: "v"
tipo: "mc"

opciones_explicitas: ["v", "t", "i", "m"]

enunciado: "Las primeras computadoras de gran escala, como la ENIAC, utilizaban principalmente ________ de vacío para realizar sus operaciones lógicas."

explicacion: |
  Las válvulas de vacío (o tubos de vacío) fueron los componentes fundamentales de la primera generación de computadoras, antes de la invención del transistor.
```

### 2 — Hitos de la miniaturización
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["hardware", "historia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[0, "Transistor"], [1, "Circuito Integrado"]]

respuesta: datos[escenario_idx][1]
tipo: "mc"

opciones_explicitas: ["Transistor", "Circuito Integrado", "Microprocesador", "CPU"]

enunciado: "La invención del {datos[escenario_idx][0]} permitió reemplazar las válvulas de vacío, reduciendo drásticamente el tamaño y el calor de las máquinas."

explicacion: |
  El transistor permitió la segunda generación de computadoras, permitiendo que fueran más pequeñas y confiables que las de válvulas.
```

### 3 — La era del microprocesador
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "avanzado"
  tags: ["hardware", "historia"]

respuesta: "1971"
tipo: "completar"

respuestas_validas: ["1971", "1972"]

enunciado: "El primer microprocesador comercial, el Intel 4004, fue lanzado en el año ___."

explicacion: |
  El Intel 4004 marcó el inicio de la era de la integración a gran escala, permitiendo que toda la unidad de procesamiento residiera en un solo chip.
```

### 4 — Cronología de la computación
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["historia", "ordenar"]

respuesta: ["Válvula de vacío", "Transistor", "Circuito Integrado", "Microprocesador"]
tipo: "ordenar"

opciones_explicitas: ["Válvula de vacío", "Transistor", "Circuito Integrado", "Microprocesador"]

enunciado: "Ordena cronológicamente los hitos tecnológicos que permitieron la evolución del hardware de computación:"

explicacion: |
  La evolución siguió este orden: Válvulas (1ra gen), Transistores (2da gen), Circuitos Integrados (3ra gen) y Microprocesadores (4ta gen).
```

### 5 — El auge de la PC
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["usuario", "historia"]

respuesta: "true"
tipo: "vf"

enunciado: "¿La llegada de la computadora personal (PC) a los hogares en los años 70 y 80 fue posible gracias a la integración masiva de microprocesadores?"

explicacion: |
  Correcto. La capacidad de integrar la CPU en un solo chip permitió que las computadoras pasaran de ocupar habitaciones enteras a ser dispositivos de escritorio accesibles.
```