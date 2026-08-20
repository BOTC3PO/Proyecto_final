### 1 — Diferencia con Energía Cinética
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["energia", "conceptos"]

respuesta: "cinetica"
tipo: mc
opciones_explicitas: ["potencial", "cinetica", "termica", "electromagnetica"]

enunciado: "Mientras que la energía potencial gravitatoria depende de la posición de un objeto respecto a un campo gravitatorio, la energía ___ depende del estado de movimiento del objeto."

explicacion: |
  La energía cinética está asociada al movimiento (m · v²/2), mientras que la energía potencial gravitatoria está asociada a la posición en un campo gravitatorio (m · g · h).
```

### 2 — Dependencia de la altura
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["propiedades", "relaciones"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[10, 9.8, 2, 196.0], [5, 9.8, 5, 245.0]]

respuesta: datos[escenario_idx][3]
tipo: input
tolerancia_abs: 0.1

enunciado: "Considera un objeto con masa de {datos[escenario_idx][0]} kg a una altura de {datos[escenario_idx][2]} m. Si la gravedad es {datos[escenario_idx][1]} m/s², la energía potencial gravitatoria es ___ J."

pasos:
  - "Multiplicar la masa por la aceleración de la gravedad (m · g)."
  - "Multiplicar el resultado por la altura (h)."

explicacion: |
  La fórmula es Ep = m · g · h. Para el caso {datos[escenario_idx][0]} kg: {datos[escenario_idx][0]} * {datos[escenario_idx][1]} * {datos[escenario_idx][2]} = {datos[escenario_idx][3]} J.
```

### 3 — Naturaleza de la energía
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["conceptos", "conservacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es la energía potencial gravitatoria una forma de energía mecánica que puede transformarse en energía cinética en un sistema sin fricción?"

explicacion: |
  Verdadero. En un sistema ideal, la energía potencial se transforma íntegramente en cinética a medida que el objeto cae, conservando la energía mecánica total.
```

### 4 — Comparación de masas
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["comparacion", "proporcionalidad"]

variables:
  caso_idx: uno_de([0, 1])
  objetos: [[10, 20], [5, 15]]

respuesta: objetos[caso_idx][1]
tipo: mc
opciones_explicitas: ["El objeto de 10 kg tiene más energía", "El objeto de 20 kg tiene más energía", "Ambos tienen la misma energía", "No se puede determinar"]

enunciado: "Si dos objetos están a la misma altura, pero el primero tiene {objetos[caso_idx][0]} kg y el segundo tiene {objetos[caso_idx][1]} kg, ¿cuál posee mayor energía potencial gravitatoria?"

explicacion: |
  Como la energía potencial es directamente proporcional a la masa (Ep ∝ m), el objeto con mayor masa tendrá mayor energía potencial si la altura y la gravedad son las mismas.
```

### 5 — Componentes de la fórmula
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["formula", "variables"]

respuesta: ["masa", "gravedad", "altura"]
tipo: ordenar

opciones_explicitas: ["altura", "gravedad", "masa", "velocidad", "tiempo"]

enunciado: "Ordena de menor a mayor las variables que determinan la magnitud de la energía potencial gravitatoria (Ep = m · g · h):"

explicacion: |
  La fórmula requiere tres componentes fundamentales: la masa (m), la aceleración de la gravedad (g) y la altura (h).
```