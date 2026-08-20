### 1 — La Gran Mortandad
```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["permerico", "triasico", "extincion"]

respuesta: "96%"
tipo: completar
respuestas_validas: ["96%", "95%", "90%"]

enunciado: "La extinción del Pérmico-Triásico es conocida como 'la Gran Mortandad' debido a que se estima que causó la desaparición de hasta un ___ de las especies marinas."

explicacion: |
  Fue el evento de extinción más severo de la historia de la Tierra, eliminando la gran mayoría de la vida marina.
```

### 2 — Magnitud del evento
```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["permerico", "triasico", "magnitud"]

variables:
  escenario: uno_de([["Pérmico-Triásico", "la mayor"], ["Cretácico-Paleógeno", "la de los dinosaurios"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["Pérmico-Triásico", "Cretácico-Paleógeno", "Ordovícico-Silúrico", "Devónico-Carbonífero"]

enunciado: "La extinción que ocurrió hace aproximadamente 252 millones de años y fue la más devastadora de la historia es la del periodo {escenario[0]}."

explicacion: |
  El evento Pérmico-Triásico es el punto de extinción más grande registrado en el registro fósil.
```

### 3 — Causas de la extinción
```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["causas", "volcanismo", "permerico"]

respuesta: "Siberian Traps"
tipo: input
tolerancia_abs: 0

enunciado: "Se cree que la causa principal de la extinción del Pérmico-Triásico fue el vulcanismo masivo asociado a los llamados {Siberian Traps}."

explicacion: |
  Las erupciones de los Traps de Siberia liberaron enormes cantidades de gases de efecto invernadero, provocando un calentamiento global extremo y acidificación de los océanos.
```

### 4 — Secuencia de eventos
```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "avanzado"
  tags: ["secuencia", "procesos"]

respuesta: ["Erupción masiva", "Calentamiento global", "Acidificación oceánica", "Extinción masiva"]
tipo: ordenar
opciones_explicitas: ["Erupción masiva", "Calentamiento global", "Acidificación oceánica", "Extinción masiva"]

enunciado: "Ordena la secuencia probable de eventos que desencadenaron la Gran Mortandad:"

pasos:
  - "Inicio del vulcanismo masivo"
  - "Aumento de la temperatura global"
  - "Cambio químico en los océanos"
  - "Colapso de la biodiversidad"

explicacion: |
  El ciclo comenzó con el vulcanismo extremo, que alteró la atmósfera y los océanos, llevando al colapso de los ecosistemas.
```

### 5 — Impacto en la vida marina
```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["oceanos", "biodiversidad"]

variables:
  impacto: uno_de([["96%", "96%"], ["50%", "50%"], ["75%", "75%"]])

respuesta: impacto[1]
tipo: mc
opciones_explicitas: ["96%", "50%", "75%", "10%"]

enunciado: "El impacto en la biodiversidad marina durante el evento del Pérmico-Triásico fue de aproximadamente un {impacto[0]} de especies extinguidas."

explicacion: |
  La acidificación y la anoxia (falta de oxígeno) en los océanos fueron fatales para la mayoría de los organismos marinos de la época.
```