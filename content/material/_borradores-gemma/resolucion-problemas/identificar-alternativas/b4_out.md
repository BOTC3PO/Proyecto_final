### 1 — Diferencia entre decisión y opción
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "basico"
  tags: ["conceptos", "decision"]

respuesta: "opcion"
tipo: "mc"
opciones_explicitas: ["decision", "opcion", "resultado", "problema"]

enunciado: "En el proceso de resolución de problemas, la elección entre varios caminos posibles se denomina decisión, mientras que cada uno de esos caminos individuales se conoce como una ___."

explicacion: |
  Una decisión es el acto de elegir, mientras que las opciones son los elementos o alternativas que se ponen sobre la mesa para ser evaluadas.
```

### 2 — El mito de la solución única
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "basico"
  tags: ["pensamiento-critico"]

respuesta: falso
tipo: "vf"

enunciado: "Ante un problema complejo, existe siempre una única solución óptima y directa, por lo que buscar alternativas es una pérdida de tiempo."

explicacion: |
  Falso. La identificación de alternativas es crucial porque permite evaluar diferentes rutas, costos y riesgos, reconociendo que rara vez hay un único camino hacia el objetivo.
```

### 3 — Secuencia de la identificación de alternativas
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "intermedio"
  tags: ["metodologia"]

opciones_explicitas: ["Definir el problema", "Generar alternativas", "Evaluar opciones", "Elegir la mejor"]

respuesta: ["Definir el problema", "Generar alternativas", "Evaluar opciones", "Elegir la mejor"]
tipo: "ordenar"

enunciado: "Ordene los pasos lógicos para abordar un problema desde la comprensión inicial hasta la acción:"

explicacion: |
  No se pueden evaluar opciones si primero no se han generado alternativas, y no se pueden generar alternativas si el problema no está claramente definido.
```

### 4 — Análisis de impacto de alternativas
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "intermedio"
  tags: ["evaluacion"]

variables:
  escenario: uno_de([[ "A", "B" ], [ "B", "A" ]])

respuesta: tabla[escenario[0]][1]
tipo: "completar"
respuestas_validas: ["alta", "baja"]
tabla: [["alta", "baja"], ["baja", "alta"]]

enunciado: "Si una alternativa tiene un riesgo muy elevado pero un beneficio muy alto, se dice que su relación riesgo-beneficio es de escala ___."

explicacion: |
  El análisis de alternativas busca cuantificar o cualificar el impacto de cada camino para tomar una decisión informada.
```

### 5 — Distinción entre alternativa y consecuencia
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "avanzado"
  tags: ["logica"]

respuesta: "consecuencia"
tipo: "mc"
opciones_explicitas: ["consecuencia", "alternativa", "recurso", "obstáculo"]

enunciado: "Es fundamental no confundir una alternativa (un camino a seguir) con una ___ (el resultado derivado de elegir dicho camino)."

explicacion: |
  Identificar correctamente las alternativas implica ver los medios para llegar a un fin; las consecuencias son los efectos que esos medios producen.
```