### 1 — Mejora continua vs. Innovación disruptiva
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["procesos", "estrategia"]

tipo: mc
opciones_explicitas: ["La mejora continua busca cambios incrementales y constantes en procesos existentes.", "La innovación disruptiva busca cambios radicales que transforman el mercado.", "La mejora continua se enfoca en productos nuevos, mientras que la innovación en procesos.", "Ambas son conceptos idénticos en la práctica empresarial."]

respuesta: "La mejora continua busca cambios incrementales y constantes en procesos existentes."

enunciado: "¿Cuál es la distinción fundamental entre la mejora continua y la innovación disruptiva?"

explicacion: |
  La mejora continua (Kaizen) se centra en optimizar lo que ya existe de forma gradual, mientras que la innovación disruptiva busca crear algo totalmente nuevo que desplace a lo anterior.
```

### 2 — El enfoque de la mejora continua
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["filosofia_empresarial"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Una empresa que implementa un cambio masivo de software una vez cada 5 años.", "Un equipo que realiza pequeñas ajustes diarios en su línea de producción para reducir desperdicios."],
    ["Un evento único de reestructuración organizacional.", "Un ciclo constante de revisión y optimización de tareas."]
  ]

tipo: vf
respuesta: escenarios[escenario_idx][1]

enunciado: "Identifica cuál de los siguientes escenarios representa verdaderamente la filosofía de mejora continua: {escenarios[escenario_idx][0]}"

explicacion: |
  La mejora continua no es un evento aislado o un proyecto con fecha de finalización, sino un ciclo perpetuo de optimización.
```

### 3 — Ciclo PHVA
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["metodologia", "ciclo_deming"]

tipo: ordenar
opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]
respuesta: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "Ordena correctamente las etapas del ciclo PHVA (Ciclo de Deming) utilizado en la mejora continua:"

explicacion: |
  El ciclo PHVA es la base de la mejora continua: se Planifica un cambio, se Hace (se implementa), se Verifica (se mide el resultado) y se Actúa (se estandariza el cambio).
```

### 4 — Naturaleza del cambio
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["conceptos"]

tipo: completar
respuestas_validas: ["incremental", "gradual", "pequeño"]

respuesta: "incremental"

enunciado: "A diferencia de la reingeniería de procesos, que busca cambios drásticos, la mejora continua se caracteriza por ser de tipo ___."

explicacion: |
  La mejora continua se basa en la acumulación de pequeñas mejoras (cambios incrementales) que, sumadas, generan grandes resultados a largo plazo.
```

### 5 — El rol del error en la mejora continua
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "avanzado"
  tags: ["cultura_organizacional"]

tipo: mc
opciones_explicitas: ["El error es un fracaso que debe ser castigado para evitar su repetición.", "El error es una oportunidad de aprendizaje para identificar fallas en el proceso.", "El error es irrelevante si el producto final es de buena calidad.", "El error solo es aceptable si se compensa con un aumento de producción."]

respuesta: "El error es una oportunidad de aprendizaje para identificar fallas en el proceso."

enunciado: "¿Cómo se percibe un error o desviación en un sistema de mejora continua en comparación con un modelo de gestión tradicional basado en el control punitivo?"

explicacion: |
  En la mejora continua, el error es una señal de que el proceso actual tiene una oportunidad de optimización; se busca la causa raíz en el proceso, no la culpa en la persona.
```