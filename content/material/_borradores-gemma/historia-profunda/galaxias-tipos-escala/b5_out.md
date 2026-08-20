### 1 — Identificación de Galaxia Espiral
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["astronomia", "galaxias"]

variables:
  escenario: [[ "Una galaxia con un núcleo brillante y brazos curvos llenos de gas y polvo.", "Espiral" ], [ "Una galaxia con forma de disco pero sin brazos definidos.", "Lenticular" ], [ "Una galaxia con forma de esfera sin estructura de brazos.", "Elíptica" ]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Espiral", "Lenticular", "Elíptica"]

enunciado: "Se observa una estructura galáctica con las siguientes características: {escenario[idx][0]}"

explicacion: |
  La morfología de una galaxia se determina por su estructura visual. En este caso, la presencia de brazos y gas es característica de la tipo {escenario[idx][1]}.
```

### 2 — Clasificación por Forma Elíptica
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["astronomia", "galaxias"]

variables:
  escenario: [[ "Un sistema estelar masivo con forma de ovoide y poco gas.", "Elíptica" ], [ "Un sistema con un disco central y brazos de formación estelar.", "Espiral" ]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Espiral", "Elíptica"]

enunciado: "Si una galaxia presenta una forma ovoide, carece de brazos espirales y tiene una cantidad mínima de gas interestelar, su tipo es: {escenario[idx][1]}"

explicacion: |
  Las galaxias {escenario[idx][1]} se caracterizan por su falta de estructura de brazos y su forma redondeada o elíptica.
```

### 3 — Galaxias Lenticulares
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "intermedio"
  tags: ["astronomia", "galaxias"]

variables:
  escenario: [[ "Presenta un disco prominente pero carece de brazos espirales.", "Lenticular" ], [ "Presenta brazos espirales muy marcados.", "Espiral" ]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][0]
tipo: mc
opciones_explicitas: ["Lenticular", "Espiral"]

enunciado: "Al analizar la morfología de la galaxia {escenario[idx][0]}, ¿qué tipo de galaxia estamos observando?"

explicacion: |
  Las galaxias {escenario[idx][0]} son un caso intermedio: tienen la forma de un disco como las espirales, pero no poseen los brazos característicos.
```

### 4 — Completar la descripción morfológica
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "intermedio"
  tags: ["astronomia", "galaxias"]

variables:
  escenario: [[ "Espiral", "brazos curvos" ], [ "Elíptica", "forma esférica" ], [ "Lenticular", "disco sin brazos" ]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["brazos curvos", "forma esférica", "disco sin brazos"]

enunciado: "Una galaxia de tipo {escenario[idx][0]} se caracteriza principalmente por tener ___."

explicacion: |
  La descripción de la galaxia {escenario[idx][0]} corresponde a la característica de {escenario[idx][1]}.
```

### 5 — Ordenar la escala de complejidad estructural
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "avanzado"
  tags: ["astronomia", "galaxias"]

variables:
  orden_correcto: ["Elíptica", "Lenticular", "Espiral"]

respuesta: orden_correcto
tipo: ordenar
opciones_explicitas: ["Elíptica", "Lenticular", "Espiral"]

enunciado: "Ordene los siguientes tipos de galaxias de menor a mayor complejidad estructural (desde la más simple/esférica a la más compleja/con brazos):"

explicacion: |
  La secuencia correcta es {orden_correcto}, partiendo de la forma más simple (elíptica) hasta la más estructurada (espiral).
```