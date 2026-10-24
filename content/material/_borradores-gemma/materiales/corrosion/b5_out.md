### 1 — Corrosión Galvánica
```
metadata:
  materia: "materiales"
  tema: "corrosion_galvanica"
  nivel: "intermedio"
  tags: ["metales", "electroquimica"]

variables:
  escenario: uno_de([["Hierro (Fe)", "Zinc (Zn)"], ["Aluminio (Al)", "Cobre (Cu)"], ["Acero (Fe)", "Plata (Ag)"]])
  idx: uno_de([0, 1, 2])
  metal_anodo: escenario[idx][0]
  metal_catodo: escenario[idx][1]

enunciado: "En una unión galvánica entre {metal_anodo} y {metal_catodo}, el metal que sufrirá el proceso de corrosión (el ánodo) es el {metal_anodo}."

respuesta: metal_anodo
tipo: mc
opciones_explicitas: ["el metal más noble", "el metal menos noble", "el metal con mayor conductividad", "el metal con mayor densidad"]

explicacion: |
  En una celda galvánica, el metal con el potencial de reducción más bajo (menos noble) actúa como ánodo y se oxida (se corroe) para proteger al metal más noble (cátodo).
```

### 2 — Factores de Corrosión
```
metadata:
  materia: "materiales"
  tema: "factores_corrosion"
  nivel: "basico"
  tags: ["ambiente", "humedad"]

variables:
  condicion: uno_de([["ambiente seco", "ambiente húmedo y salino"], ["aire puro", "ambiente con alta salinidad"]])
  idx: uno_de([0, 1])
  entorno: condicion[idx]

enunciado: "La velocidad de corrosión de un acero al carbono aumenta significativamente cuando se encuentra en un {entorno}."

respuesta: "aumenta"
tipo: completar
respuestas_validas: ["aumenta", "disminuye"]

explicacion: |
  La presencia de electrolitos (como la sal o el agua) facilita el flujo de iones en la superficie del metal, acelerando la reacción electroquímica de corrosión.
```

### 3 — Pasos de la Reacción
```
metadata:
  materia: "materiales"
  tema: "mecanismo_corrosion"
  nivel: "avanzado"
  tags: ["mecanismo", "reaccion"]

enunciado: "Ordene las etapas típicas de una celda de corrosión electrolítica en el orden correcto, desde el inicio de la reacción hasta el producto final."

opciones_explicitas: ["Oxidación en el ánodo", "Transferencia de electrones", "Reducción en el cátodo", "Difusión de iones"]
respuesta: ["Oxidación en el ánodo", "Transferencia de electrones", "Reducción en el cátodo", "Difusión de iones"]
tipo: ordenar

explicacion: |
  El proceso comienza con la oxidación del metal en el ánodo, seguido por el movimiento de electrones a través del metal, la reducción en el cátodo y el movimiento de iones en el electrolito.
```

### 4 — Protección Catódica
```
metadata:
  materia: "materiales"
  tema: "proteccion_catodica"
  nivel: "intermedio"
  tags: ["proteccion", "anodo_sacrificio"]

variables:
  metal_protegido: uno_de([["Tubería de acero", "Casco de barco de hierro"]])
  idx: uno_de([0, 1])
  objetivo: metal_protegido[idx]

enunciado: "Para proteger una {objetivo} mediante protección galvánica, se debe conectar un ánodo de sacrificio que sea ___ que el metal a proteger."

respuesta: "menos noble"
tipo: mc
opciones_explicitas: ["más noble", "menos noble", "más denso", "más reactivo"]

explicacion: |
  El ánodo de sacrificio debe tener un potencial de oxidación mayor (ser menos noble) para que el metal principal actúe como cátodo y no se oxide.
```

### 5 — Corrosión por Picadura
```
metadata:
  materia: "materiales"
  tema: "corrosion_picadura"
  nivel: "avanzado"
  tags: ["localizada", "cloruros"]

variables:
  agente: uno_de([["cloruros (Cl⁻)", "oxígeno (O₂)"]])
  idx: uno_de([0, 1])
  sustancia: agente[idx]

enunciado: "La presencia de iones {sustancia} es uno de los factores más críticos que desencadenan la corrosión por picadura (pitting) en aceros inoxidables."

respuesta: true
tipo: vf

explicacion: |
  Los iones cloruro rompen la capa pasiva de óxido de los aceros inoxidables, permitiendo una corrosión localizada muy agresiva y difícil de detectar.
```