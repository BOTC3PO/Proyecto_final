### 1 — La naturaleza de la materia oscura
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["materia_oscura", "luz", "gravedad"]

respuesta: "invisible"
tipo: completar
respuestas_validas: ["invisible"]

enunciado: "Debido a que la materia oscura no emite, refleja ni absorbe radiación electromagnética, su naturaleza es ___________ para nuestros instrumentos ópticos tradicionales."

explicacion: |
  La materia oscura es invisible al espectro electromagnético (luz, radio, rayos X, etc.), lo que impide su detección directa mediante telescopios convencionales.
```

### 2 — Evidencia gravitacional
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["galaxias", "rotación", "gravedad"]

variables:
  escenario: uno_de([0, 1])

respuesta: uno_de([0, 1])[1]
tipo: mc
opciones_explicitas: ["La velocidad de rotación disminuye conforme nos alejamos del centro", "La velocidad de rotación se mantiene constante o aumenta en la periferia", "Las galaxias colapsarían por falta de masa", "La gravedad es nula en los bordes de la galaxia"]

enunciado: "Al observar las curvas de rotación de las galaxias espirales, se detecta que las estrellas en la periferia se mueven a una velocidad que contradice la masa visible. Según el escenario {escenario}, ¿cuál es la observación real?"

explicacion: |
  Si solo existiera la materia visible, las estrellas externas deberían girar más lento. El hecho de que mantengan velocidades altas sugiere la presencia de una masa adicional (materia oscura) que proporciona la gravedad necesaria.
```

### 3 — El efecto gravitacional
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["gravedad", "masa"]

respuesta: "gravitacionales"
tipo: completar
respuestas_validas: ["gravitacionales"]

enunciado: "Dado que no podemos ver la materia oscura, su existencia se infiere únicamente a través de sus efectos ___________ sobre la materia bariónica (visible)."

explicacion: |
  La materia oscura interactúa principalmente a través de la gravedad, alterando el movimiento de las estrellas y la luz (lentes gravitacionales).
```

### 4 — Componentes del universo
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["composición", "universo"]

respuesta: "materia_oscura"
tipo: mc
opciones_explicitas: ["Materia bariónica", "Materia oscura", "Energía oscura", "Radiación de fondo"]

enunciado: "La masa adicional necesaria para explicar la cohesión de los cúmulos de galaxias y las curvas de rotación galáctica se conoce como ___________."

explicacion: |
  La materia oscura constituye aproximadamente el 27% del universo, mientras que la materia ordinaria (bariónica) es solo un 5%.
```

### 5 — Deducción científica
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["metodología", "evidencia"]

respuesta: "masa_visible"
tipo: completar
respuestas_validas: ["masa_visible"]

variables:
  datos: [[0, "masa_visible"], [1, "presión_solar"], [2, "luz_estelar"]]

enunciado: "La discrepancia observada entre la velocidad de rotación galáctica y la cantidad de {datos[uno_de([0,1,2])[0]]} es la principal prueba de la existencia de la materia oscura."

explicacion: |
  La falta de masa visible suficiente para explicar la velocidad de las galaxias es la evidencia fundamental que llevó a la hipótesis de la materia oscura.
```