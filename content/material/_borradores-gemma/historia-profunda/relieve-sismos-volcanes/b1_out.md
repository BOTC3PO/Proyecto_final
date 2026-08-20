### 1 — Origen del relieve
```
metadata:
  materia: "geografia"
  tema: "tectonica_de_placas"
  nivel: "basico"
  tags: ["tectonica", "relieve"]

respuesta: "bordes"
tipo: completar
respuestas_validas: ["bordes"]

enunciado: "El relieve terrestre, como la formación de montañas y fosas, es una consecuencia directa de la tectónica de placas y se produce principalmente en los ___ de las placas tectónicas."

explicacion: |
  El movimiento de las placas tectónicas genera tensiones y fricciones que se manifiestan principalmente en sus límites o bordes, dando lugar a la formación de nuevas estructuras geológicas.
```

### 2 — Tipos de límites
```
metadata:
  materia: "geografia"
  tema: "tectonica_de_placas"
  nivel: "intermedio"
  tags: ["placas", "limites"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenarios: [[
    ["divergente", "se separan las placas", "creación de dorsales oceánicas"],
    ["convergente", "chocan las placas", "formación de cordilleras o fosas"],
    ["transformante", "se deslizan lateralmente", "fallas como la de San Andrés"]
  ]]

respuesta: escenarios[escenario_idx][0]
tipo: mc
opciones_explicitas: ["divergente", "convergente", "transformante"]

enunciado: "Si observamos un movimiento donde las placas tectónicas ___ , estamos ante un límite de tipo {escenarios[escenario_idx][1]}."

explicacion: |
  En el escenario seleccionado ({escenarios[escenario_idx][0]}), el movimiento principal es {escenarios[escenario_idx][2]}.
```

### 3 — Formación de cordilleras
```
metadata:
  materia: "geografia"
  tema: "tectonica_de_placas"
  nivel: "basico"
  tags: ["cordilleras", "convergencia"]

respuesta: "convergente"
tipo: mc
opciones_explicitas: ["divergente", "convergente", "transformante"]

enunciado: "¿Qué tipo de interacción entre placas es la responsable de la formación de grandes cordilleras como los Andes debido al choque de placas?"

explicacion: |
  Las cordilleras se forman en los límites convergentes, donde la compresión de las placas eleva la corteza terrestre.
```

### 4 — Secuencia de procesos geológicos
```
metadata:
  materia: "geografia"
  tema: "tectonica_de_placas"
  nivel: "avanzado"
  tags: ["procesos", "relieve"]

respuesta: ["choque de placas", "subducción de la placa", "formación de fosa oceánica", "erupción volcánica"]
tipo: ordenar
opciones_explicitas: ["choque de placas", "subducción de la placa", "formación de fosa oceánica", "erupción volcánica"]

enunciado: "Ordena los eventos que ocurren típicamente en un límite convergente de subducción:"

explicacion: |
  El proceso comienza con el choque, seguido por la placa más densa se hunde (subducción), creando una fosa, y finalmente el magma asciende provocando volcanismo.
```

### 5 — Profundidad de las fosas
```
metadata:
  materia: "geografia"
  tema: "tectonica_de_placas"
  nivel: "intermedio"
  tags: ["fosas", "oceanos"]

variables:
  dato_fosa: [
    ["Fosa de las Marianas", "subducción", "más profunda"],
    ["Fosa de Atacama", "subducción", "muy profunda"]
  ]
  idx: uno_de([0, 1])

respuesta: dato_fosa[idx][1]
tipo: mc
opciones_explicitas: ["subducción", "divergencia", "transformación"]

enunciado: "La {dato_fosa[idx][0]} es una estructura extremadamente {dato_fosa[idx][2]} que se origina por un proceso de {dato_fosa[idx][1]}."

explicacion: |
  Las fosas oceánicas son zonas de subducción donde una placa se introduce bajo otra, creando depresiones profundas en el lecho marino.
```