### 1 — El conflicto armado
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["conflictos", "soberania", "1982"]

respuesta: "Argentina"
tipo: "mc"
opciones_explicitas: ["Reino Unido", "Argentina", "Chile", "Francia"]

enunciado: "La Guerra de Malvinas, iniciada en 1982, fue un conflicto armado entre ___ y el Reino Unido por la soberanía de las islas."

explicacion: |
  El conflicto se desató tras la invasión de las fuerzas argentinas a las islas, lo que provocó la respuesta militar británica.
```

### 2 — Cronología del conflicto
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["cronologia", "eventos"]

variables:
  eventos: [
    ["Invasión de las islas", "Fuerzas argentinas ocupan las islas"],
    ["Desembarco en San Carlos", "Fuerzas británicas desembarcan en la isla"],
    ["Rendición argentina", "Fuerzas argentinas se rinden en Puerto Argentino"]
  ]
  idx: uno_de([0, 1, 2])

respuesta: eventos[idx][1]
tipo: "ordenar"
opciones_explicitas: ["Invasión de las islas", "Desembarco en San Carlos", "Rendición argentina"]

enunciado: "Ordene cronológicamente los eventos clave del conflicto:"

explicacion: |
  La secuencia lógica fue la ocupación inicial, el desembarco de la Task Force británica y la rendición final.
```

### 3 — El hundimiento del General Belgrano
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["naval", "tactic"]

respuesta: 360
tipo: "input"
tolerancia_abs: 1

enunciado: "El crucero ARA General Belgrano fue hundido por un submarino británico el 2 de mayo de 1982. Si el submarino se encontraba a una profundidad de 200 metros y el crucero estaba en la superficie, ¿cuál es la distancia vertical (en metros) entre ambos?"

pasos:
  - "Identificar la profundidad del submarino: 200m"
  - "Identificar la posición del crucero: 0m"
  - "Calcular la diferencia: 200 - 0 = 200"

explicacion: |
  La distancia vertical es la diferencia entre la superficie (0m) y la profundidad del submarino (200m).
```

### 4 — El factor diplomático
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["diplomacia", "soberania"]

respuesta: "soberanía"
tipo: "completar"
respuestas_validas: ["soberanía", "territorio", "recursos"]

enunciado: "El reclamo argentino por las islas se fundamenta en el principio de ___ territorial."

explicacion: |
  Argentina sostiene su derecho basado en la integridad territorial y la herencia de la corona española.
```

### 5 — El contexto político interno
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["politica", "dictadura"]

respuesta: "Junta Militar"
tipo: "mc"
opciones_explicitas: ["Gobierno Democrático", "Junta Militar", "Frente Popular", "Estado de Sitio"]

enunciado: "En 1982, la guerra se desarrolló bajo el mando de la ___ en Argentina."

explicacion: |
  El país se encontraba bajo un proceso de dictadura militar liderado por la Junta Militar en aquel entonces.
```