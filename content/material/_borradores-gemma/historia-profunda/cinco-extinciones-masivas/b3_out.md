### 1 — El impacto de Chicxulub
```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["cretacico", "asteroide", "chicxulub"]

tipo: mc
opciones_explicitas: ["Impacto de un asteroide", "Erupción volcánica masiva", "Cambio climático gradual", "Fragmentación de un planeta"]

enunciado: "La extinción del Cretácico-Paleógeno, que ocurrió hace aproximadamente 66 millones de años, fue causada principalmente por ___."

explicacion: |
  El impacto de un asteroide en la península de Yucatán (cráter de Chicxulub) desencadenó cambios climáticos catastróficos que finalizaron el reinado de los dinosaurios no aviares.
```

### 2 — El destino de los dinosaurios
```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["dinosaurios", "extincion"]

tipo: completar
respuestas_validas: ["no aviares", "no-aviares"]

enunciado: "La extinción masiva del Cretácico-Paleógeno acabó con la mayoría de los dinosaurios, con la excepción de los dinosaurios ___."

explicacion: |
  Los dinosaurios aviares (ancestros de las aves actuales) lograron sobrevivir a la catástrofe, mientras que los dinosaurios no aviares se extinguieron.
```

### 3 — Secuencia de eventos catastróficos
```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["secuencia", "causa_efecto"]

tipo: ordenar
opciones_explicitas: ["Impacto del asteroide", "Nube de escombros global", "Bloqueo de la luz solar", "Colapso de la fotosíntesis"]

enunciado: "Ordena cronológicamente los eventos que desencadenaron la extinción tras el impacto de Chicxulub:"

explicacion: |
  El impacto lanzó material al espacio que luego regresó a la atmósfera, bloqueando la luz solar y deteniendo la fotosíntesis, lo que colapsó las redes tróficas.
```

### 4 — Geología del impacto
```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["geologia", "crater"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Yucatán, México", "Chicxulub"],
    ["Península de Kola, Rusia", "Popigai"]
  ]

tipo: mc
opciones_explicitas: ["Chicxulub", "Popigai", "Sudamérica", "India"]

enunciado: "El cráter formado por el impacto que causó la extinción del Cretácico-Paleógeno se localiza en {escenarios[escenario_idx][0]} y se conoce como cráter de ___."

explicacion: |
  El cráter de Chicxulub en México es la evidencia geológica principal de este evento de extinción masiva.
```

### 5 — El efecto invernadero post-impacto
```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "avanzado"
  tags: ["clima", "quimica_atmosferica"]

tipo: input
tolerancia_abs: 0.1

enunciado: "Tras el impacto inicial y el invierno de impacto, la liberación de gases como el CO2 provocó un efecto de calentamiento global. Si un registro geológico muestra un aumento drástico de carbono, ¿cuántos millones de años aproximadamente ocurrió este evento de extinción? (Responde con el número entero)"

pasos:
  - "Identificar el periodo de la extinción (66 Ma)."
  - "Escribir el valor numérico sin texto."

explicacion: |
  La extinción ocurrió hace 66 millones de años, marcando el límite entre el período Cretácico y el Paleógeno.
```