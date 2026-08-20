### 1 — El error de la literalidad extrema
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["hermeneutica", "literalismo"]

respuesta: "error"
tipo: "mc"
opciones_explicitas: ["error", "método_correcto", "interpretación_teleológica", "interpretación_gramatical"]

enunciado: "Cuando un aplicador del derecho se limita exclusivamente al significado semántico de las palabras de la norma, ignorando el espíritu o la finalidad de la ley, está incurriendo en un _________ de interpretación."

explicacion: |
  La interpretación puramente gramatical o literal puede llevar a absurdos jurídicos si no se considera la finalidad (ratio legis) de la norma.
```

### 2 — Verdad o Falso: La norma vs. el texto
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["teoria_del_derecho"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es correcto afirmar que la 'norma' y el 'texto de la ley' son conceptos idénticos en el proceso de interpretación?"

explicacion: |
  Falso. El texto es el soporte lingüístico (el enunciado), mientras que la norma es el significado o sentido que se extrae de ese texto tras el proceso interpretativo.
```

### 3 — El proceso de integración
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["lagunas", "analogia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["existe una laguna legal", "analogía"],
    ["la norma es ambigua", "interpretación sistemática"]
  ]

respuesta: "datos[escenario_idx][1]"
tipo: "completar"
respuestas_validas: ["analogía", "interpretación sistemática"]

enunciado: "Si al aplicar una norma a un caso concreto se detecta que no hay una disposición aplicable para ese supuesto (laguna), el juez debe recurrir a la _________ para resolver."

explicacion: |
  La analogía permite aplicar una norma que regula un caso similar a uno que no está regulado, siempre que exista la misma razón de ser.
```

### 4 — El orden de los factores interpretativos
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["metodologia"]

respuesta: ["gramatical", "lógica", "sistemática", "histórica"]
tipo: "ordenar"
opciones_explicitas: ["gramatical", "lógica", "sistemática", "histórica"]

enunciado: "Ordene los métodos de interpretación de la ley desde el más básico (estudio del lenguaje) hasta el más complejo (relación con el ordenamiento completo):"

explicacion: |
  El proceso interpretativo suele comenzar por la gramática, sigue con la lógica (finalidad), se integra con el sistema jurídico y finalmente revisa el contexto histórico.
```

### 5 — El alcance de la interpretación sistemática
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["coherencia", "sistema_juridico"]

respuesta: "falso"
tipo: "vf"

enunciado: "¿La interpretación sistemática sostiene que una norma debe entenderse de forma aislada, sin considerar su relación con otras normas del mismo ordenamiento?"

explicacion: |
  Falso. La interpretación sistemática parte de la premisa de que el ordenamiento es un todo coherente y que cada norma debe interpretarse en relación con las demás.
```