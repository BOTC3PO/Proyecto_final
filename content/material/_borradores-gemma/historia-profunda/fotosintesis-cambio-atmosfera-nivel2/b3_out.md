### 1 — El impacto del oxígeno
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["evolucion", "oxigeno", "extincion"]

respuesta: "tóxico"
tipo: completar
respuestas_validas: ["tóxico", "venenoso", "mortal"]

enunciado: "La acumulación de oxígeno en la atmósfera primitiva fue ___ para los organismos anaeróbicos dominantes de esa época."

explicacion: |
  El aumento de oxígeno atmosférico (Gran Oxidación) causó una extinción masiva de organismos anaeróbicos, ya que el oxígeno es altamente reactivo y dañino para sus procesos metabólicos sin enzimas antioxidantes.
```

### 2 — El Gran Evento de Oxidación
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "basico"
  tags: ["fotosintesis", "oxigeno", "atmosfera"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El oxígeno liberado por la fotosíntesis fue un veneno para los anaerobios.", "tóxico"],
    ["El oxígeno permitió la aparición de la respiración aeróbica.", "beneficioso"]
  ]

opciones_explicitas: ["tóxico", "beneficioso", "neutro"]
respuesta: escenarios[escenario_idx][1]
tipo: mc

enunciado: "Considerando el impacto de la fotosíntesis en la atmósfera primitiva, ¿cuál fue el efecto principal del oxígeno sobre los organismos anaeróbicos existentes?"

explicacion: |
  {escenarios[escenario_idx][0]}
```

### 3 — Secuencia de la Gran Oxidación
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["secuencia", "evolucion", "oxigeno"]

opciones_explicitas: ["Aparición de fotosíntesis oxigénica", "Acumulación de O2 atmosférico", "Extinción de anaerobios dominantes"]
respuesta: ["Aparición de fotosíntesis oxigénica", "Acumulación de O2 atmosférico", "Extinción de anaerobios dominantes"]
tipo: ordenar

enunciado: "Ordena cronológicamente los eventos que llevaron a la Gran Oxidación:"

pasos:
  - "Primer paso: la producción de oxígeno por cianobacterias."
  - "Segundo paso: el oxígeno se acumula en la atmósfera."
  - "Tercer paso: la toxicidad del oxígeno causa la extinción de anaerobios."

explicacion: |
  La fotosíntesis oxigénica produjo el oxígeno, que luego se acumuló en la atmósfera, provocando finalmente la extinción de los organismos anaeróbicos dominantes.
```

### 4 — Metabolismo y Oxígeno
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["metabolismo", "anaerobio", "oxidacion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Si el organismo es anaerobio estricto, el O2 es ___.", "mortal"],
    ["Si el organismo es aeróbico, el O2 es ___.", "esencial"]
  ]

opciones_explicitas: ["mortal", "esencial", "neutro"]
respuesta: casos[caso_idx][1]
tipo: mc

enunciado: "Analiza el escenario: {casos[caso_idx][0]}"

explicacion: |
  La capacidad de utilizar o resistir el oxígeno determinó la supervivencia de las especies durante la transición hacia una atmósfera oxidante.
```

### 5 — El valor del oxígeno
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "basico"
  tags: ["oxigeno", "atmosfera"]

respuesta: 0.0
tipo: input
tolerancia_abs: 0.01

enunciado: "Si la fotosíntesis aumentó la concentración de oxígeno de 0% a 21%, ¿en qué porcentaje aumentó la presencia de este gas en la atmósfera (en puntos porcentuales)?"

explicacion: |
  El aumento es la diferencia directa entre el estado final (21%) y el inicial (0%), resultando en 21 puntos porcentuales.
```