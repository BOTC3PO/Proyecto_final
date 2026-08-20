### 1 — Autoconocimiento vs. Identidad Estática
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["autoconocimiento", "proceso", "identidad"]

respuesta: "proceso"
tipo: "completar"
respuestas_validas: ["proceso", "dinámico"]

enunciado: "A diferencia de un dato fijo o una etiqueta estática, el autoconocimiento se define como un ___ continuo y evolutivo."

explicacion: |
  El autoconocimiento no es un destino al que se llega y se permanece, sino un proceso constante de revisión de nuestra identidad a medida que vivimos nuevas experiencias.
```

### 2 — La naturaleza del autoconocimiento
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["naturaleza", "cambio", "identidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["La persona cambia sus valores tras una crisis", "evolución"],
    ["La persona descubre un nuevo talento en la adultez", "evolución"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["estatismo", "evolución", "determinismo", "esencia fija"]

enunciado: "Considera el siguiente caso: {escenarios[escenario_idx][0]}. Esto demuestra que el autoconocimiento es:"

explicacion: |
  Como se observa en el caso, el sujeto descubre o transforma aspectos de sí mismo, lo que confirma que la identidad no es un bloque inmutable.
```

### 3 — Autoconocimiento vs. Autodiagnóstico
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "avanzado"
  tags: ["diagnostico", "reflexion", "conciencia"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es correcto afirmar que el autoconocimiento es equivalente a un autodiagnóstico clínico, es decir, un conjunto de etiquetas definitivas para definir quiénes somos?"

explicacion: |
  Falso. El autodiagnóstico busca clasificar y cerrar una definición, mientras que el autoconocimiento es una exploración abierta que permite la transformación personal.
```

### 4 — Etapas de la exploración interna
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["secuencia", "reflexion", "acción"]

respuesta: ["Observación de reacciones", "Reflexión sobre motivos", "Integración de aprendizajes"]
tipo: "ordenar"
opciones_explicitas: ["Observación de reacciones", "Reflexión sobre motivos", "Integración de aprendizajes", "Reacción impulsiva"]

enunciado: "Ordena las etapas de un proceso de autoconocimiento reflexivo, partiendo desde la experiencia inmediata hasta la consolidación del saber personal:"

explicacion: |
  El proceso implica primero notar qué sentimos (observación), luego entender por qué lo sentimos (reflexión) y finalmente incorporar ese saber a nuestra identidad (integración).
```

### 5 — El factor de la experiencia
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["experiencia", "conocimiento", "cambio"]

respuesta: "verdadero"
tipo: "vf"

enunciado: "Dado que el ser humano es un sujeto en constante cambio debido a la interacción con el entorno, el autoconocimiento requiere una revisión periódica de la propia identidad."

explicacion: |
  Verdadero. La interacción con el mundo y el paso del tiempo modifican nuestra percepción y nuestras capacidades, invalidando la idea de un 'yo' inalterable.
```