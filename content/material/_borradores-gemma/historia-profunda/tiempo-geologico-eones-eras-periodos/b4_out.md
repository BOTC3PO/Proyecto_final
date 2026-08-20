### 1 — El inicio del Fanerozoico
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["paleozoico", "fanerozoico"]

tipo: mc
opciones_explicitas: ["Paleozoico", "Mesozoico", "Cenozoico"]

enunciado: "El eón Fanerozoico se divide en tres eras principales. ¿Cuál es la primera era de este eón, caracterizada por la 'explosión de vida' en los mares?"

respuesta: "Paleozoico"

explicacion: |
  El Fanerozoico comenzó hace unos 541 millones de años con la era Paleozoica, donde la vida diversificó su complejidad de forma masiva.
```

### 2 — La era de los reptiles
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["mesozoico", "dinosaurios"]

tipo: mc
opciones_explicitas: ["Paleozoico", "Mesozoico", "Cenozoico"]

enunciado: "La era conocida como la 'Edad de los Reptiles' o de los dinosaurios es el ________."

respuesta: "Mesozoico"

explicacion: |
  El Mesozoico es la era intermedia del Fanerozoico, donde predominaron los dinosaurios y los primeros mamíferos.
```

### 3 — Secuencia de eras
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["orden_cronologico", "fanerozoico"]

tipo: ordenar
opciones_explicitas: ["Paleozoico", "Mesozoico", "Cenozoico"]

enunciado: "Ordena cronológicamente las tres eras del eón Fanerozoico, desde la más antigua a la más reciente:"

respuesta: ["Paleozoico", "Mesozoico", "Cenozoico"]

explicacion: |
  La secuencia correcta es Paleozoico (vida antigua), Mesozoico (vida media) y Cenozoico (vida reciente).
```

### 4 — La era actual
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["cenozoico", "actualidad"]

tipo: completar
respuestas_validas: ["Cenozoico"]

enunciado: "La era geológica en la que vivimos actualmente, marcada por la dominancia de los mamíferos, es el ________."

respuesta: "Cenozoico"

explicacion: |
  El Cenozoico comenzó tras la extinción masiva al final del Mesozoico y es la era actual.
```

### 5 — Identificación de eras
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["fanerozoico", "clasificacion"]

variables:
  escenario: uno_de([0, 1])
  datos: [["Mesozoico", "Paleozoico"], ["Cenozoico", "Mesozoico"]]

tipo: mc
opciones_explicitas: ["Mesozoico", "Paleozoico", "Cenozoico"]

enunciado: "Si estamos hablando de la era que precede al Cenozoico, nos referimos al {datos[escenario][0]}."

respuesta: {datos[escenario][1]}

explicacion: |
  El Cenozoico es la era actual; la era inmediatamente anterior fue el Mesozoico.
```