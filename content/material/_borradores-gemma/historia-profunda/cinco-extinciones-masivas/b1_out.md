### 1 — La primera gran extinción
```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["geologia", "paleontologia"]

tipo: mc
opciones_explicitas: ["Ordovícico-Silúrico", "Devónico", "Pérmico-Triásico", "Cretácico-Paleógeno"]

enunciado: "La primera de las cinco grandes extinciones masivas de la historia de la Tierra ocurrió durante el periodo ___."

respuesta: "Ordovícico-Silúrico"

explicacion: |
  La extinción del Ordovícico-Silúrico (hace ~444 millones de años) fue causada principalmente por una glaciación intensa que redujo los niveles del mar y la oxigenación de los océanos.
```

### 2 — El Gran Evento de la Muerte
```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["permico", "extincion"]

variables:
  escenario: uno_de([["Pérmico-Triásico", "La más devastadora"], ["Cretácico-Paleógeno", "La de los dinosaurios"]])
  idx: uno_de([0, 1])

tipo: mc
opciones_explicitas: ["Pérmico-Triásico", "Triásico-Jurásico", "Cretácico-Paleógeno"]

enunciado: "El evento conocido como 'La Gran Mortandad' ocurrió durante la extinción ___."

respuesta: escenario[idx][0]

explicacion: |
  La extinción del Pérmico-Triásico fue la más severa de la historia, eliminando aproximadamente el 96% de las especies marinas.
```

### 3 — El impacto de Chicxulub
```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["asteroide", "dinosaurios"]

tipo: input
tolerancia_abs: 0.1

enunciado: "La extinción del Cretácico-Paleógeno es frecuentemente asociada al impacto de un asteroide en la península de Yucatán. ¿Cuántos millones de años aproximadamente ocurrió este evento? (Escribe el número entero)"

respuesta: 66

explicacion: |
  Hace aproximadamente 66 millones de años, el impacto del asteroide Chicxulub marcó el fin de la era de los dinosaurios no avianos.
```

### 4 — Secuencia de extinción
```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "avanzado"
  tags: ["cronologia", "orden"]

tipo: ordenar
opciones_explicitas: ["Ordovícico-Silúrico", "Devónico", "Pérmico-Triásico", "Triásico-Jurásico", "Cretácico-Paleógeno"]

enunciado: "Ordena cronológicamente las cinco grandes extinciones masivas, desde la más antigua a la más reciente."

respuesta: ["Ordovícico-Silúrico", "Devónico", "Pérmico-Triásico", "Triásico-Jurásico", "Cretácico-Paleógeno"]

explicacion: |
  El orden correcto sigue la escala de tiempo geológico: Ordovícico (444 Ma), Devónico (375 Ma), Pérmico (252 Ma), Triásico (201 Ma) y Cretácico (66 Ma).
```

### 5 — El enigma del Devónico
```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["devonico", "oceanos"]

tipo: completar
respuestas_validas: ["anoxia", "oxigenación", "glaciación"]

enunciado: "Se cree que la extinción del Devónico fue causada por cambios en los niveles de ___ en los océanos, debido a la proliferación de plantas terrestres que aumentaron la escorrentía de nutrientes."

respuesta: "anoxia"

explicacion: |
  La expansión de la vegetación terrestre aumentó el aporte de nutrientes a los mares, provocando eutrofización y la posterior anoxia (falta de oxígeno) en las aguas.
```