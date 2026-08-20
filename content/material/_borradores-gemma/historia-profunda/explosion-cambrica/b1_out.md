### 1 — El origen de la diversidad
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["paleontologia", "evolucion"]

respuesta: "541"
tipo: input
tolerancia_abs: 1

enunciado: "La Explosión Cámbrica ocurrió hace aproximadamente ___ millones de años."

explicacion: |
  La Explosión Cámbrica comenzó hace unos 541 millones de años, marcando el inicio del periodo Cámbrico.
```

### 2 — La aparición de los Phyla
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["taxonomia", "evolucion"]

variables:
  escenario: uno_de([
    ["la mayoría de los grupos corporales", "phyla"],
    ["la mayor parte de los animales", "phyla"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["phyla", "clases", "especies", "órdenes"]

enunciado: "Durante la Explosión Cámbrica, se produjo la aparición de la mayoría de los grandes grupos animales actuales, conocidos como ___."

explicacion: |
  Se refiere a los phyla (filos), que son las categorías taxonómicas más altas de los animales.
```

### 3 — Duración del fenómeno
```
metadata:
  materia: "historia_profucha"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["tiempo_geologico"]

respuesta: 25
tipo: input
tolerancia_abs: 5

enunciado: "Aunque fue un evento masivo, la Explosión Cámbrica fue un periodo relativamente breve en términos geológicos, durando aproximadamente ___ millones de años."

pasos:
  - "Identificar el rango de tiempo estimado para la diversificación de los filos."

explicacion: |
  Se estima que este evento de diversificación duró entre 20 y 25 millones de años.
```

### 4 — Fósiles de Ediacara vs Cámbrico
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["paleontologia", "fósiles"]

variables:
  comparacion: uno_de([
    ["más complejos", "más complejos"],
    ["más simples", "más simples"]
  ])

respuesta: comparacion[1]
tipo: mc
opciones_explicitas: ["más complejos", "más simples", "idénticos", "menos diversos"]

enunciado: "En comparación con la biota de Ediacara que precedió al Cámbrico, los organismos de la Explosión Cámbrica eran ___."

explicacion: |
  La biota de Ediacara consistía en organismos de cuerpo blando y morfología menos especializada, mientras que el Cámbrico introdujo estructuras más complejas y con partes duras.
```

### 5 — Secuencia de eventos geológicos
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["cronologia"]

opciones_explicitas: ["Precámbrico", "Cámbrico", "Ordovícico"]
respuesta: ["Precámbrico", "Cámbrico", "Ordovícico"]
tipo: ordenar

enunciado: "Ordena cronológicamente los siguientes periodos/eones, empezando por el más antiguo:"

pasos:
  - "Ubicar el Precámbrico como la era anterior."
  - "Colocar el Cámbrico como el periodo de la explosión."
  - "Ubicar el Ordovícico como el periodo posterior."

explicacion: |
  La cronología correcta es Precámbrico (que incluye el Ediacárico), seguido del Cámbrico y luego el Ordovícico.
```