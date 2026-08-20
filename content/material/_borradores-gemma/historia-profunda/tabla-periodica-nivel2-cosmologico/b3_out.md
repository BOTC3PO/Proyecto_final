### 1 — Origen de los elementos pesados
```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "intermedio"
  tags: ["astrofisica", "elementos_pesados"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["supernova", "colisión de estrellas de neutrones"], ["estrellas de neutrones", "supernovas"]]

enunciado: "Los elementos más pesados que el hierro, como el oro o el uranio, no se forman en estrellas comunes, sino que requieren eventos cataclísmicos como una {escenarios[escenario_idx]}."

respuesta: escenarios[escenario_idx][0]
tipo: mc
opciones_explicitas: ["supernova", "estrellas de neutrones", "fusiones de helio", "ananas estelares"]

explicacion: |
  La nucleosíntesis de elementos más pesados que el hierro requiere un flujo masivo de neutrones (proceso r), algo que solo ocurre en eventos de altísima energía como supernovas o la fusión de estrellas de neutrones.
```

### 2 — Identificación de elementos
```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_cosmologica"
  nivel: "basico"
  tags: ["elementos", "pesados"]

enunciado: "Completa la siguiente afirmación: El elemento con símbolo 'Au' es el ___."

respuestas_validas: ["oro"]
tipo: completar

explicacion: |
  El oro (Au) es un elemento pesado cuya formación requiere eventos de nucleosíntesis explosiva.
```

### 3 — Clasificación de procesos
```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "avanzado"
  tags: ["nucleosintesis", "proceso_r"]

enunciado: "Ordena cronológicamente los procesos de formación de elementos pesados en el universo, desde la formación de estrellas masivas hasta la formación de elementos extremadamente pesados en eventos cataclísmicos:"

opciones_explicitas: ["Fusión de hidrógeno", "Fusión de elementos en núcleo estelar", "Explosión de supernova", "Fusión de estrellas de neutrones"]
respuesta: ["Fusión de hidrógeno", "Fusión de elementos en núcleo estelar", "Explosión de supernova", "Fusión de estrellas de neutrones"]
tipo: ordenar

explicacion: |
  La evolución estelar comienza con la fusión de hidrógeno, sigue con elementos más pesados en el núcleo, culmina en la supernova y, finalmente, los eventos más extremos como la fusión de estrellas de neutrones crean los elementos más pesados.
```

### 4 — Verdad o Falso: Origen del Uranio
```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "intermedio"
  tags: ["uranio", "astrofisica"]

enunciado: "El uranio es un elemento que puede formarse mediante la fusión de helio en el núcleo de una estrella de la secuencia principal."

respuesta: falso
tipo: vf

explicacion: |
  Falso. El uranio es un elemento muy pesado que requiere procesos de captura rápida de neutrones (proceso r) en eventos energéticos, no la fusión de helio.
```

### 5 — Cálculo de masa atómica (Simulado)
```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "intermedio"
  tags: ["masa", "isotopos"]]

variables:
  elemento_idx: uno_de([0,1])
  datos: [[197, "oro"], [238, "uranio"]]

enunciado: "Si un evento de estrella de neutrones produce un isótopo de {datos[elemento_idx][1]}, su masa atómica aproximada es de {datos[elemento_idx][0]} u."

respuesta: datos[elemento_idx][0]
tipo: input
tolerancia_abs: 0

explicacion: |
  El valor corresponde a la masa atómica aproximada del elemento seleccionado en el escenario.
```