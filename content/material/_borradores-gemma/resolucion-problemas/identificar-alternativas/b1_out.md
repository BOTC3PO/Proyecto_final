### 1 — Definición de alternativas
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "basico"
  tags: ["definicion", "conceptos"]

respuesta: "alternativas"
tipo: completar
respuestas_validas: ["alternativas"]

enunciado: "El proceso de identificar diferentes caminos, opciones o soluciones posibles para abordar un problema se denomina identificación de ___."

explicacion: |
  Identificar alternativas es el paso fundamental donde reconocemos que no existe un único camino para resolver una situación, permitiéndonos elegir el más eficiente.
```

### 2 — Verdad o Falso: Unicidad de soluciones
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "basico"
  tags: ["conceptos", "logica"]

respuesta: falso
tipo: vf

enunciado: "En la resolución de problemas, la existencia de una única solución posible es la regla general para la mayoría de los desafíos complejos."

explicacion: |
  Falso. El núcleo de la resolución de problemas es precisamente reconocer que casi siempre existen múltiples caminos o alternativas para llegar a un objetivo.
```

### 3 — El concepto de divergencia
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "intermedio"
  tags: ["pensamiento-divergente", "creatividad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["un problema matemático con una sola respuesta numérica", "una estrategia de marketing para aumentar ventas"],
    ["un acertijo de lógica con una única solución", "un conflicto interpersonal en un equipo de trabajo"]
  ]

respuesta: uno_de(["pensamiento divergente", "pensamiento convergente"])
tipo: mc
opciones_explicitas: ["pensamiento divergente", "pensamiento convergente"]

enunciado: "Cuando nos enfocamos en generar la mayor cantidad posible de opciones distintas para el escenario {escenarios[escenario_idx][0]}, estamos utilizando el {uno_de(["pensamiento divergente", "pensamiento convergente"])}."

explicacion: |
  El pensamiento divergente es la capacidad de generar múltiples soluciones creativas, mientras que el convergente busca la única respuesta correcta o la más lógica.
```

### 4 — Pasos para la identificación
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "intermedio"
  tags: ["metodologia", "proceso"]

respuesta: ["Analizar el problema", "Lluvia de ideas", "Evaluar opciones"]
tipo: ordenar
opciones_explicitas: ["Analizar el problema", "Lluvia de ideas", "Evaluar opciones"]

enunciado: "Ordene los pasos lógicos para un proceso efectivo de búsqueda de alternativas:"

explicacion: |
  Primero se debe entender el problema (Analizar), luego generar múltiples caminos (Lluvia de ideas) y finalmente comparar los resultados posibles (Evaluar).
```

### 5 — Obstáculos en la identificación
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "avanzado"
  tags: ["sesgos", "cognicion"]

respuesta: "sesgo de anclaje"
tipo: mc
opciones_explicitas: ["sesgo de anclaje", "sesgo de confirmación", "efecto halo"]

enunciado: "Cuando una persona se queda atrapada en la primera solución que se le ocurre, ignorando otras opciones más efectivas, está siendo víctima del ___."

explicacion: |
  El sesgo de anclaje ocurre cuando nos aferramos demasiado a la primera información o solución recibida, limitando nuestra capacidad de ver alternativas.
```