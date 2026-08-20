### 1 — El primer contacto en Tierra Firme
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "basico"
  tags: ["conquista", "exploracion"]

variables:
  escenario: uno_de([["expedición de Colón", "1492"], ["expedición de Cortés", "1519"], ["expedición de Pizarro", "1532"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["1492", "1519", "1532"]

enunciado: "El año en que se produjo el evento de la {escenario[idx][0]} fue en el año ___."

explicacion: |
  El año mencionado corresponde al inicio de la era de exploración y conquista según el escenario seleccionado.
```

### 2 — Cronología de la Conquista
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_ferme"
  nivel: "intermedio"
  tags: ["ordenar", "cronologia"]

variables:
  eventos: [["Llegada a las Antillas", "Llegada a México", "Conquista del Imperio Inca"], ["Llegada a las Antillas", "Llegada a México", "Conquista del Imperio Inca"]]

respuesta: ["Llegada a las Antillas", "Llegada a México", "Conquista del Imperio Inca"]
tipo: ordenar
opciones_explicitas: ["Llegada a las Antillas", "Llegada a México", "Conquista del Imperio Inca"]

enunciado: "Ordena cronológicamente los hitos de la conquista española en Tierra Firme:"

explicacion: |
  La secuencia correcta comienza con las Antillas, sigue con la caída de los Aztecas y finaliza con la conquista de los Incas.
```

### 3 — Identificación de Conquistadores
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "basico"
  tags: ["personajes"]

variables:
  parejas: [["Hernán Cortés", "Imperio Azteca"], ["Francisco Pizarro", "Imperio Inca"], ["Diego Velázquez", "Cuba"]]
  idx: uno_de([0,1,2])

respuesta: parejas[idx][1]
tipo: mc
opciones_explicitas: ["Imperio Azteca", "Imperio Inca", "Cuba"]

enunciado: "El conquistador {parejas[idx][0]} lideró la expedición contra el ___."

explicacion: |
  Cada conquistador estuvo vinculado a una región o imperio específico durante la expansión española.
```

### 4 — El impacto de la conquista
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "avanzado"
  tags: ["consecuencias"]

variables:
  datos: [["caída demográfica", "positiva"], ["encuentro cultural", "positiva"], ["colonización", "positiva"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["positiva"]

enunciado: "Históricamente, el proceso de la {datos[idx][0]} se analiza como una consecuencia de carácter ___."

explicacion: |
  El término utilizado depende de la perspectiva historiográfica aplicada al evento seleccionado.
```

### 5 — El orden de las expediciones
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "intermedio"
  tags: ["ordenar", "cronologia"]

variables:
  secuencia: ["Exploración de las Antillas", "Conquista de México", "Conquista del Perú"]

respuesta: ["Exploración de las Antillas", "Conquista de México", "Conquista del Perú"]
tipo: ordenar
opciones_explicitas: ["Exploración de las Antillas", "Conquista de México", "Conquista del Perú"]

enunciado: "Ordena los procesos de expansión territorial en orden cronológico:"

explicacion: |
  La expansión se movió desde el Caribe hacia el continente (México) y luego hacia el sur (Perú).
```