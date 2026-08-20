### 1 — Concepto de percepción
```
metadata:
  materia: "psicologia"
  tema: "psicologia_cognitiva_percepcion"
  nivel: "basico"
  tags: ["percepcion", "procesos_mentales"]

respuesta: "percepción"
tipo: completar
respuestas_validas: ["percepción", "percepcion"]

enunciado: "El proceso mediante el cual el cerebro organiza e interpreta la información sensorial para darle un significado es la ___."

explicacion: |
  La percepción no es solo recibir estímulos (sensación), sino el proceso cognitivo de interpretación de esos datos.
```

### 2 — Memoria y su capacidad
```
metadata:
  materia: "psicologia"
  tema: "psicologia_cognitiva_memoria"
  nivel: "basico"
  tags: ["memoria", "modelo_multialmacen"]

opciones_explicitas: ["Memoria Sensorial", "Memoria a Corto Plazo", "Memoria a Largo Plazo"]
respuesta: "Memoria a Corto Plazo"
tipo: mc

enunciado: "Según el modelo de Atkinson y Shiffrin, el sistema que permite retener una cantidad limitada de información durante un periodo breve es la ___."

explicacion: |
  La memoria a corto plazo actúa como un espacio de trabajo temporal antes de que la información sea consolidada en la memoria a largo plazo.
```

### 3 — Atención selectiva
```
metadata:
  materia: "psicologia"
  tema: "psicologia_cognitiva_atencion"
  nivel: "intermedio"
  tags: ["atencion", "foco"]

respuesta: verdadero
tipo: vf

enunciado: "¿La atención selectiva es la capacidad de concentrarse en un estímulo específico ignorando otros estímulos irrelevantes?"

explicacion: |
  Efectivamente, la atención selectiva permite filtrar la información para evitar la sobrecarga cognitiva.
```

### 4 — Procesos de la memoria
```
metadata:
  materia: "psicologia"
  tema: "psicologia_cognitiva_memoria"
  nivel: "intermedio"
  tags: ["codificacion", "almacenamiento", "recuperacion"]

opciones_explicitas: ["Codificación", "Almacenamiento", "Recuperación"]
respuesta: ["Codificación", "Almacenamiento", "Recuperación"]
tipo: ordenar

enunciado: "Ordene las fases del proceso de memoria desde la entrada del estímulo hasta su salida:"

explicacion: |
  El ciclo de la memoria requiere primero transformar el estímulo (codificación), guardarlo (almacenamiento) y luego acceder a él (recuperación).
```

### 5 — Aprendizaje y cambio
```
metadata:
  materia: "psicologia"
  tema: "psicologia_cognitiva_aprendizaje"
  nivel: "basico"
  tags: ["aprendizaje", "cambio"]

variables:
  escenario: uno_de([[0, "cambio en la conducta"], [1, "cambio en la estructura"]])

respuesta: tabla_respuestas[escenario][1]
tipo: mc

opciones_explicitas: ["Cambio en la conducta", "Cambio en la estructura"]

pasos:
  - "Identificar la definición clásica de aprendizaje."

enunciado: "En psicología cognitiva, el aprendizaje se define fundamentalmente como un ___."

variables_auxiliares:
  tabla_respuestas: [["Cambio en la conducta", "Cambio en la conducta"], ["Cambio en la estructura", "Cambio en la estructura"]]

explicacion: |
  El aprendizaje implica un cambio relativamente permanente en la conducta o en las representaciones mentales como resultado de la experiencia.
```