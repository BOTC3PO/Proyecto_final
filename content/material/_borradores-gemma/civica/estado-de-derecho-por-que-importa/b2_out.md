### 1 — La supremacía de la ley
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "basico"
  tags: ["derecho", "instituciones"]

respuesta: "ley"
tipo: "completar"
respuestas_validas: ["ley"]

enunciado: "En un Estado de Derecho, el ejercicio del poder político debe estar sometido a la ___ para garantizar la convivencia y la justicia."

explicacion: |
  El principio de legalidad establece que tanto los ciudadanos como el Estado deben sujetarse a las leyes preestablecidas, evitando la arbitrariedad.
```

### 2 — Consecuencias de los golpes de Estado
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "intermedio"
  tags: ["historia_argentina", "dictadura"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["la suspensión de las garantías constitucionales", "la pérdida de la soberanía popular"],
    ["la interrupción del orden democrático", "la vulneración de los derechos humanos"]
  ]

respuesta: escenarios[escenario_idx][0]
tipo: "mc"
opciones_explicitas: ["escenarios[escenario_idx][0]", "escenarios[escenario_idx][1]", "ninguna de las anteriores"]

enunciado: "Durante las dictaduras militares en Argentina, uno de los efectos inmediatos de la ruptura del Estado de Derecho fue ___."

explicacion: |
  Los golpes de Estado eliminan los mecanismos de control institucional y someten la voluntad de las personas al uso de la fuerza, suspendiendo derechos fundamentales.
```

### 3 — División de poderes
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "intermedio"
  tags: ["poderes", "control"]

respuesta: "Ejecutivo, Legislativo, Judicial"
tipo: "ordenar"
opciones_explicitas: ["Ejecutivo, Legislativo, Judicial"]

enunciado: "Cuando se rompe el Estado de Derecho, la división de poderes se ve afectada. Ordená los poderes del Estado según la estructura clásica de un sistema republicano:"

explicacion: |
  La división de poderes (Ejecutivo, Legislativo y Judicial) es esencial para que existan controles recíprocos y se evite la concentración del poder.
```

### 4 — El rol de la Constitución
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "avanzado"
  tags: ["constitucion", "normas"]

respuesta: "Constitución Nacional"
tipo: "completar"
respuestas_validas: ["Constitución Nacional"]

enunciado: "Cuando un gobierno actúa por encima de la ___, se produce una ruptura del Estado de Derecho y se entra en un periodo de ilegalidad."

explicacion: |
  La Constitución Nacional es la norma suprema que limita el poder de los gobernantes y protege los derechos de los gobernados.
```

### 5 — El control institucional
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "intermedio"
  tags: ["control_institucional", "arbitrariedad"]

respuesta: "arbitrariedad"
tipo: "mc"
opciones_explicitas: ["arbitrariedad", "legalidad", "democracia", "institucionalidad"]

enunciado: "La ausencia de controles institucionales y la falta de sometimiento a la ley en una dictadura dan lugar a la ___ en las decisiones del Estado."

explicacion: |
  La arbitrariedad ocurre cuando las autoridades actúan por voluntad propia o capricho, sin basarse en normas claras, lo cual es la antítesis del Estado de Derecho.
```