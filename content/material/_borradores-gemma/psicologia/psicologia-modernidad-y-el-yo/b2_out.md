### 1 — El origen del sujeto moderno
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["historia", "modernidad", "subjetividad"]

variables:
  periodo_transicion: uno_de(["Edad Media", "Renacimiento", "Edad Moderna"])
  concepto_yo: uno_de(["colectivo", "individual", "divino"])

respuesta: periodo_transicion == "Renacimiento" && concepto_yo == "individual"
tipo: vf

enunciado: "En la transición de la Edad Media al {periodo_transicion}, la noción de identidad se desplaza desde un sentido {concepto_yo} hacia la idea de un sujeto autónomo."

explicacion: |
  Históricamente, la modernidad marca el paso de un sujeto definido por su posición en un orden social y religioso (colectivo) a un 'yo' centrado en la introspección y la autonomía individual.
```

### 2 — El experimento de la autoconciencia
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["filosofia", "subjetividad"]

variables:
  filosofo: uno_de(["Descartes", "Spinoza", "Locke"])
  premisas: [["Pienso, luego existo", "el yo es una ilusión"], ["Pienso, luego existo", "el yo es social"], ["El yo es una construcción", "el yo es una ilusión"]]

respuesta: premisas[0][0]
tipo: mc

opciones_explicitas: ["Pienso, luego existo", "El yo es una construcción social", "El yo es una ilusión", "El yo es una función del lenguaje"]

enunciado: "Consideremos el caso del pensamiento de {filosofo}. Si aplicamos su método de duda metódica para encontrar una base sólida para el conocimiento, la conclusión fundamental sobre el 'yo' es: ___"

pasos:
  - "Dudar de todo lo que pueda ser falso."
  - "Encontrar una verdad que sea indudable."
  - "Identificar el acto de dudar como prueba de la existencia del sujeto."

explicacion: |
  Descartes establece que el acto de pensar requiere un sujeto que piense, consolidando la idea del 'yo' como una entidad separada y racional.
```

### 3 — Evolución de la noción de identidad
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["historia", "identidad"]

respuesta: ["Identidad colectiva/estamental", "Identidad basada en la razón", "Identidad psicológica/subjetiva"]
tipo: ordenar

opciones_explicitas: ["Identidad colectiva/estamental", "Identidad basada en la razón", "Identidad psicológica/subjetiva"]

enunciado: "Ordena cronológicamente la evolución de la noción de 'yo' desde la pre-modernidad hasta la consolidación de la subjetividad moderna:"

explicacion: |
  La trayectoria va desde la pertenencia a un grupo/estamento, pasando por la razón ilustrada, hasta llegar al énfasis moderno en la psique y la historia personal.
```

### 4 — El Yo como construcción histórica
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["postmodernidad", "sujeto"]

variables:
  escenario: uno_de(["identidad_fija", "identidad_fluida"])
  caracteristica: uno_de(["estable y esencial", "cambiante y construida"])

respuesta: escenario == "identidad_fluida"

tipo: completar

enunciado: "En la modernidad tardía y la posmodernidad, el 'yo' deja de ser visto como una entidad ___ y pasa a entenderse como algo ___."

respuestas_validas: ["estable y esencial", "cambiante y construida"]

explicacion: |
  La modernidad temprana creía en un 'yo' esencial y permanente; la visión contemporánea lo entiende como un proceso dinámico y situado.
```

### 5 — Análisis de la autonomía
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["autonomia", "moral"]

variables:
  caso_sujeto: uno_de(["sujeto_autonomo", "sujeto_heteronomo"])

respuesta: caso_sujeto == "sujeto_autonomo"
tipo: mc

opciones_explicitas: ["Sujeto autónomo", "Sujeto heterónomo", "Sujeto colectivo", "Sujeto biológico"]

enunciado: "Si un individuo toma decisiones basadas exclusivamente en sus propias leyes internas y su razón, independientemente de las presiones externas, estamos ante un modelo de: ___"

explicacion: |
  La noción de autonomía es el pilar del 'yo' moderno: la capacidad del sujeto para ser legislador de su propia conducta.
```