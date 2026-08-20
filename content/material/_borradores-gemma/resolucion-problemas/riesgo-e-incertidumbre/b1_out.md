### 1 — Concepto de Riesgo
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["definicion", "probabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "En un escenario de riesgo, el decisor conoce la distribución de probabilidad de los posibles resultados."

explicacion: |
  El riesgo implica que, aunque no sabemos qué resultado ocurrirá, conocemos las probabilidades asociadas a cada uno.
```

### 2 — Incertidumbre vs Riesgo
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["diferencia", "conceptos"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: tabla[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Riesgo", "Incertidumbre"]

enunciado: "Si un inversor se enfrenta a un proyecto donde es imposible estimar la probabilidad de éxito o fracaso, se encuentra ante un escenario de: ___"

tabla: [
  ["Riesgo", "Riesgo"],
  ["Incertidumbre", "Incertidumbre"]
]

explicacion: |
  La incertidumbre técnica ocurre cuando la información es insuficiente para asignar probabilidades a los eventos.
```

### 3 — Elementos del Riesgo
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["componentes", "probabilidad"]

respuesta: "probabilidad y resultados"
tipo: completar
respuestas_validas: ["probabilidad y resultados", "incertidumbre y azar"]

enunciado: "Para que un problema sea clasificado como de riesgo, es indispensable conocer la ___ y los ___ posibles."

explicacion: |
  El riesgo se define matemáticamente por la combinación de un conjunto de estados de la naturaleza y sus respectivas probabilidades.
```

### 4 — Clasificación de escenarios
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["clasificacion"]

respuesta: ["Incertidumbre", "Riesgo", "Certeza"]
tipo: ordenar

opciones_explicitas: ["Incertidumbre", "Riesgo", "Certeza"]

enunciado: "Ordene los siguientes conceptos de mayor falta de información a mayor información (de mayor incertidumbre a mayor certeza):"

explicacion: |
  La incertidumbre es la ausencia total de conocimiento probabilístico, el riesgo es conocimiento parcial y la certeza es conocimiento total.
```

### 5 — Verdad o Falso: Probabilidad
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["probabilidad", "logica"]

respuesta: falso
tipo: vf

enunciado: "Si un evento tiene una probabilidad de ocurrencia del 50%, esto significa que estamos ante un escenario de incertidumbre pura."

explicacion: |
  Falso. Al conocer la probabilidad (50%), el escenario es de riesgo, no de incertidumbre pura.
```