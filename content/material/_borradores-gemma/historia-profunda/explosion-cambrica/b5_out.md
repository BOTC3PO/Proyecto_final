### 1 — El inicio de la vida compleja
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["geologia", "paleontologia"]

variables:
  escenario: uno_de([["Hace aproximadamente 541 millones de años", "Paleozoico"], ["Hace aproximadamente 541 millones de años", "Proterozoico"]])
  idx: uno_de([0,1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Paleozoico", "Proterozoico", "Mesozoico", "Cenozoico"]

enunciado: "La explosión cámbrica marca el inicio del eón Phanerozoico, específicamente de la era del {escenario[idx][0]}."

explicacion: |
  La explosión cámbrica ocurrió hace unos 541 millones de años, marcando el inicio del eón Fanerozoico y la era Paleozoica.
```

### 2 — Cronología de la vida
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["escala_tiempo", "geologia"]

variables:
  datos: [["Ediacarano", "Cámbrico"], ["Cámbrico", "Ordovícico"], ["Ordovícico", "Silúrico"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["Cámbrico", "Ordovícico", "Silúrico"]

enunciado: "Si nos situamos inmediatamente antes de la explosión cámbrica, nos encontramos en el periodo ___."

explicacion: |
  El periodo Ediacárico precede a la explosión cámbrica, la cual da inicio al periodo Cámbrico.
```

### 3 — Secuencia Geológica
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["orden", "escala_tiempo"]

variables:
  secuencia: ["Ediacarano", "Cámbrico", "Ordovícico", "Silúrico"]

respuesta: ["Ediacarano", "Cámbrico", "Ordovícico", "Silúrico"]
tipo: ordenar
opciones_explicitas: ["Ediacarano", "Cámbrico", "Ordovícico", "Silúrico"]

enunciado: "Ordena cronológicamente los siguientes periodos/eras, comenzando desde el más antiguo antes de la explosión cámbrica:"

explicacion: |
  La secuencia correcta es: Ediacarano (Precambriano tardío), Cámbrico (inicio de la explosión), Ordovícico y Silúrico.
```

### 4 — El gran salto evolutivo
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["geologia", "eventos"]

variables:
  evento: uno_de([["541 Ma", "Cambriano"], ["252 Ma", "Triásico"]])
  idx: uno_de([0,1])

respuesta: evento[idx][1]
tipo: mc
opciones_explicitas: ["Cambriano", "Triásico", "Jurásico", "Permiano"]

enunciado: "La diversificación masiva de la vida animal, conocida como la explosión cámbrica, ocurrió hace aproximadamente {evento[idx][0]}."

explicacion: |
  La explosión cámbrica es el evento que define el inicio del periodo Cámbrico hace unos 541 millones de años.
```

### 5 — Identificación de Era
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["geologia"]

variables:
  contexto: [["Paleozoico", "Cámbrico"], ["Mesozoico", "Jurásico"]]
  idx: uno_de([0,1])

respuesta: contexto[idx][1]
tipo: completar
respuestas_validas: ["Cámbrico", "Jurásico"]

enunciado: "La explosión cámbrica es el evento fundacional del periodo ___."

explicacion: |
  La explosión cámbrica marca el inicio del periodo Cámbrico dentro de la era Paleozoica.
```