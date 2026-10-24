### 1 — Definición de Sentencia
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["terminologia", "sentencia"]

tipo: mc
opciones_explicitas: ["El acto mediante el cual el juez resuelve el litigio", "Un acuerdo privado entre las partes", "Una consulta legal realizada a un experto", "El proceso de recolección de pruebas"]

respuesta: "El acto mediante el cual el juez resuelve el litigio"

enunciado: "En el ámbito jurídico, la sentencia se define como ___."

explicacion: |
  La sentencia es la resolución judicial que pone fin a un proceso, resolviendo la controversia planteada por las partes.
```

### 2 — El rol del Juez
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["juez", "imparcialidad"]

tipo: vf
respuesta: falso

enunciado: "El juez, al dictar sentencia, debe actuar con parcialidad para asegurar que el resultado favorezca a la parte que presentó más pruebas."

explicacion: |
  Falso. El principio de imparcialidad exige que el juez actúe con objetividad, sin favorecer a ninguna de las partes, basándose únicamente en la ley y las pruebas.
```

### 3 — Elementos de la Sentencia
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["estructura", "sentencia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["vistos", "considerando", "fallo"],
    ["pretensiones", "pruebas", "resolución"]
  ]

tipo: completar
respuestas_validas: ["vistos", "considerando", "fallo"]
respuesta: datos[escenario_idx][0]

enunciado: "La estructura clásica de una sentencia contiene los ___ (antecedentes), los ___ (fundamentos de derecho) y el ___ (la decisión final)."

explicacion: |
  La estructura lógica de una sentencia requiere la exposición de los hechos, el análisis jurídico y la decisión final.
```

### 4 — Tipos de Resolución
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["resolucion", "litigio"]

tipo: mc
opciones_explicitas: ["Sentencia definitiva", "Sentencia interlocutoria", "Ambas son formas de resolución judicial"]

respuesta: "Ambas son formas de resolución judicial"

enunciado: "Un juez puede resolver cuestiones procesales mediante una sentencia interlocutoria o resolver el fondo del asunto mediante una sentencia definitiva. ¿Qué representan ambas?"

explicacion: |
  Ambas son resoluciones judiciales, pero difieren en su objeto: una resuelve incidentes en el proceso y la otra resuelve la controversia principal.
```

### 5 — Etapas del Proceso Judicial
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["procedimiento", "orden"]

tipo: ordenar
opciones_explicitas: ["Demanda", "Práctica de pruebas", "Sentencia"]
respuesta: ["Demanda", "Práctica de pruebas", "Sentencia"]

enunciado: "Ordene cronológicamente las etapas fundamentales para llegar a una sentencia en un proceso de conocimiento:"

explicacion: |
  Primero se presenta la demanda, luego se produce la etapa probatoria y finalmente el juez dicta la sentencia tras valorar los elementos presentados.
```