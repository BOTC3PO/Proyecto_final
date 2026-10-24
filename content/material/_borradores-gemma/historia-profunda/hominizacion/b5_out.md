### 1 — El origen del bipedismo
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "basico"
  tags: ["evolucion", "hominidos"]

variables:
  escenario: uno_de([["Australopithecus afarensis", "bipedismo temprano"], ["Homo habilis", "uso de herramientas de piedra"], ["Homo erectus", "control del fuego"]])
  idx: uno_de([0, 1, 2])

enunciado: "Se analiza un fósil que presenta una pelvis ancha y adaptaciones para la marcha vertical. Se trata de un {escenario[0]} cuyo rasgo distintivo es el {escenario[1]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["bipedismo temprano", "uso de herramientas de piedra", "control del fuego", "desarrollo del lenguaje"]

explicacion: |
  El {escenario[0]} es reconocido principalmente por su capacidad de caminar erguido, lo cual es un paso clave en la hominización.
```

### 2 — La revolución tecnológica
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "intermedio"
  tags: ["tecnologia", "hominidos"]

variables:
  escenario: uno_de([["Homo habilis", "industria Olduvayense"], ["Homo erectus", "industria Acheulense"], ["Homo neanderthalensis", "industria Musteriense"]])
  idx: uno_de([0, 1, 2])

enunciado: "Un arqueólogo encuentra restos de la industria {escenario[1]} asociados a los restos de {escenario[0]}."

respuesta: escenario[1]
tipo: completar
respuestas_validas: ["industria Olduvayense", "industria Acheulense", "industria Musteriense"]

explicacion: |
  {escenario[0]} es asociado con la creación de las primeras herramientas de piedra tallada conocidas como {escenario[1]}.
```

### 3 — Migraciones y fuego
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "intermedio"
  tags: ["migracion", "fuego"]

variables:
  escenario: uno_de([["Homo erectus", "dominio del fuego"], ["Homo sapiens", "pensamiento simbólico"]])
  idx: uno_de([0, 1])

enunciado: "El hito evolutivo que permitió a {escenario[0]} colonizar nuevos entornos fue el {escenario[1]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["dominio del fuego", "pensamiento simbólico", "creación de arte rupestre"]

explicacion: |
  El control del fuego permitió a {escenario[0]} cocinar alimentos y protegerse, facilitando su expansión fuera de África.
```

### 4 — Secuencia de evolución
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "avanzado"
  tags: ["secuencia", "hominidos"]

variables:
  orden: ["Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"]

enunciado: "Ordena cronológicamente las especies de homínidos desde la más antigua hasta la más reciente."

respuesta: ["Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"]
tipo: ordenar
opciones_explicitas: ["Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"]

explicacion: |
  La línea evolutiva muestra una tendencia hacia el aumento de la capacidad craneal y la complejidad tecnológica a través de estas especies.
```

### 5 — Pensamiento simbólico
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "avanzado"
  tags: ["cultura", "simbolismo"]

variables:
  escenario: uno_de([["Homo neanderthalensis", "enterramientos rituales"], ["Homo sapiens", "arte rupestre complejo"]])
  idx: uno_de([0, 1])

enunciado: "El hallazgo de restos con evidencias de ___ es característico de {escenario[0]}."

respuesta: "enterramientos rituales"
tipo: completar
respuestas_validas: ["enterramientos rituales", "arte rupestre complejo"]

explicacion: |
  La presencia de ___ sugiere una estructura de pensamiento espiritual o ritual en {escenario[0]}.
```