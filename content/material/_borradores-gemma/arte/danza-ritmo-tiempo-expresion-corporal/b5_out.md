### 1 — El compás del bailarín
```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "basico"
  tags: ["ritmo", "compas", "tiempo"]

variables:
  escenario: uno_de([["un vals en 3/4", "3/4"], ["un tango en 4/4", "4/4"], ["un reggaetón en 4/4", "4/4"]])
  idx: uno_de([0, 1, 2])

enunciado: "Un coreógrafo está preparando una pieza basada en {escenario[idx][0]}. Para que el movimiento sea armónico, el bailarín debe seguir la métrica de {escenario[idx][1]}."

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["3/4", "4/4"]

explicacion: |
  El ritmo en la danza está determinado por la métrica musical. El vals se caracteriza por un compás ternario (3/4), mientras que el tango y el reggaetón usan compases binarios/cuaternarios (4/4).
```

### 2 — La intención del movimiento
```
metadata:
  materia: "arte"
  tema: "danza_expresion_corporal"
  nivel: "intermedio"
  tags: ["expresion", "lenguaje", "cuerpo"]

variables:
  caso: uno_de([["un movimiento fluido y continuo", "fluidez"], ["un movimiento cortado y seco", "staccato"]])
  idx: uno_de([0, 1])

enunciado: "Si un bailarín de danza contemporánea utiliza {caso[idx][0]}, está trabajando la calidad de movimiento tipo {caso[idx][1]}."

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["fluidez", "staccato"]

explicacion: |
  La expresión corporal utiliza la calidad del movimiento (fluidez vs. staccato) para comunicar emociones y estados de ánimo sin necesidad de palabras.
```

### 3 — La estructura de una coreografía
```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "intermedio"
  tags: ["secuencia", "orden", "tiempo"]

enunciado: "Para realizar una secuencia coreográfica de improvisación guiada, el bailarín debe seguir un orden lógico de desarrollo temporal para mantener la coherencia narrativa:"

pasos:
  - "Exploración del espacio y el ritmo base"
  - "Desarrollo de frases de movimiento"
  - "Clímax de la expresión corporal"
  - "Resolución o cierre de la secuencia"

respuesta: ["Exploración del espacio y el ritmo base", "Desarrollo de frases de movimiento", "Clímax de la expresión corporal", "Resolución o cierre de la secuencia"]
tipo: ordenar

explicacion: |
  Una estructura coreográfica requiere una progresión temporal: desde la preparación (exploración), pasando por el desarrollo, el punto de mayor intensidad (clímax) y el cierre.
```

### 4 — Percepción del tempo
```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "basico"
  tags: ["tempo", "velocidad", "percepcion"]

variables:
  escenario: uno_de([["un adagio lento", "lento"], ["un allegro rápido", "rápido"]])
  idx: uno_de([0, 1])

enunciado: "Si la música de la pieza es {escenario[idx][0]}, el tempo de la danza será percibido como {escenario[idx][1]}."

respuesta: escenario[idx][1]
tipo: vf

explicacion: |
  El tempo es la velocidad del pulso musical. Un 'adagio' es una indicación de tempo lento, mientras que un 'allegro' indica un tempo rápido.
```

### 5 — Elementos del lenguaje corporal
```
metadata:
  materia: "arte"
  tema: "danza_expresion_corporal"
  nivel: "avanzado"
  tags: ["elementos", "espacio", "cuerpo"]

variables:
  elemento: uno_de([["el uso de niveles (alto, medio, bajo)", "espacio"], ["la tensión muscular", "energía"], ["el ritmo del pulso", "tiempo"]])
  idx: uno_de([0, 1, 2])

enunciado: "En la danza, el concepto de {elemento[idx][0]} se clasifica fundamentalmente como un elemento del ___."

respuesta: elemento[idx][1]
tipo: completar
respuestas_validas: ["espacio", "energía", "tiempo"]

explicacion: |
  Los elementos de la danza incluyen el cuerpo, el espacio (niveles, direcciones), el tiempo (ritmo, duración) y la energía (tensión, peso).
```