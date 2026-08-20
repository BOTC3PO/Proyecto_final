### 1 — ¿Oxidación o Corrosión?
```
metadata:
  materia: "materiales"
  tema: "corrosion_conceptos"
  nivel: "basico"
  tags: ["definicion", "quimica"]

respuesta: "oxidación"
tipo: completar
respuestas_validas: ["oxidación", "oxidacion"]

enunciado: "Aunque a menudo se usan como sinónimos, el término químico preciso para la pérdida de electrones de un átomo es la ___."

explicacion: |
  La oxidación es el proceso químico de pérdida de electrones. La corrosión es el término general para el deterioro del material debido a esa reacción química con el ambiente.
```

### 2 — Factores de la corrosión
```
metadata:
  materia: "materiales"
  tema: "corrosion_factores"
  nivel: "basico"
  tags: ["ambiente", "electrolito"]

respuesta: false
tipo: vf

enunciado: "¿La presencia de un electrolito (como agua salada) siempre acelera el proceso de corrosión galvánica en comparación con el aire seco?"

explicacion: |
  Verdadero. Un electrolito proporciona el medio necesario para el flujo de corriente iónica, facilitando la reacción electroquímica de corrosión.
```

### 3 — La paradoja de la capa protectora
```
metadata:
  materia: "materiales"
  tema: "corrosion_pasivacion"
  nivel: "intermedio"
  tags: ["pasivacion", "aluminio", "acero"]

variables:
  caso: uno_de([0, 1])

respuesta: tabla[caso][1]
tipo: mc
opciones_explicitas: ["Se oxida rápidamente de forma continua", "Se protege mediante una capa de óxido estable", "No se corroe nunca", "Se disuelve en el ambiente"]
tabla: [
  ["Se oxida rápidamente de forma continua", false],
  ["Se protege mediante una capa de óxido estable", true]
]

enunciado: "Considerando el comportamiento del {caso == 0 ? 'hierro en condiciones normales' : 'aluminio'}, ¿cuál es la principal diferencia en su comportamiento frente a la corrosión?"

explicacion: |
  El hierro forma una capa de óxido porosa que permite que el proceso continúe. El aluminio forma una capa de óxido densa y adherente (pasivación) que detiene la corrosión.
```

### 4 — Proceso de corrosión galvánica
```
metadata:
  materia: "materiales"
  tema: "corrosion_galvanica"
  nivel: "intermedio"
  tags: ["electroquimica", "pilas"]

respuesta: ["Ánodo", "Electrolito", "Cátodo"]
tipo: ordenar

opciones_explicitas: ["Ánodo", "Electrolito", "Cátodo", "Aislante"]

enunciado: "Ordene los componentes necesarios para que ocurra una celda de corrosión galvánica, desde donde se pierde el material hasta donde se produce la reducción:"

explicacion: |
  La secuencia lógica es: 1. Ánodo (donde ocurre la oxidación/pérdida de material), 2. Electrolito (medio conductor) y 3. Cátodo (donde ocurre la reducción).
```

### 5 — El papel de la humedad
```
metadata:
  materia: "materiales"
  tema: "corrosion_humedad"
  nivel: "basico"
  tags: ["ambiente", "humedad"]

variables:
  humedad_relativa: uno_de([0, 1])

respuesta: tabla[humedad_relativa][1]
tipo: mc
opciones_explicitas: ["No influye", "Aumenta la velocidad de corrosión", "Disminuye la velocidad de corrosión"]
tabla: [
  ["No influye", false],
  ["Aumenta la velocidad de corrosión", true]
]

enunciado: "Si la humedad relativa es del {humedad_relativa == 0 ? '10%' : '85%'}, ¿cuál es el efecto sobre la tasa de corrosión de un metal expuesto?"

explicacion: |
  A mayor humedad, se forma una película de agua sobre la superficie metálica que actúa como electrolito, acelerando la corrosión.
```