### 1 — Sentencia vs. Auto
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["proceso_judicial", "resolucion"]

respuesta: "sentencia"
tipo: mc
opciones_explicitas: ["sentencia", "auto", "providencia", "decreto"]

enunciado: "Mientras que el auto resuelve cuestiones de mero trámite o incidentes dentro del proceso, la decisión que pone fin a la instancia o resuelve la cuestión principal de fondo se denomina ___."

explicacion: |
  La sentencia es la resolución judicial que decide el fondo del asunto litigioso, marcando el fin de la etapa de conocimiento en primera instancia.
```

### 2 — Cosa Juzgada vs. Cosa Decidida
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "avanzado"
  tags: ["cosa_juzgada", "derecho_procesal"]

variables:
  es_cosa_juzgada: true

respuesta: es_cosa_juzgada
tipo: vf

enunciado: "La 'cosa juzgada' se distingue de la 'cosa decidida' porque la primera implica una inmutabilidad absoluta de la decisión debido a que no admite más recursos, mientras que la segunda se refiere a una decisión que aún es susceptible de ser revisada mediante un recurso."

explicacion: |
  Efectivamente, la cosa juzgada (autoridad de la cosa juzgada) es la calidad de la sentencia cuando ya no puede ser impugnada, adquiriendo firmeza definitiva.
```

### 3 — Mediación vs. Conciliación
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["mecanismos_alternativos", "resolucion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["En la mediación, un tercero neutral facilita la comunicación para que las partes encuentren su propia solución.", "mediación"],
    ["En la conciliación, el tercero tiene una función más activa y puede proponer fórmulas de solución que las partes pueden aceptar.", "conciliación"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["mediación", "conciliación"]

enunciado: "Considerando la distinción técnica: {escenarios[escenario_idx][0]}"

explicacion: |
  La diferencia fundamental radica en el grado de proactividad del tercero: el mediador es un facilitador de la comunicación, mientras que el conciliador puede proponer soluciones.
```

### 4 — Etapas de la Sentencia
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["estructura_sentencia", "proceso"]

respuesta: ["encabezamiento", "vistos", "considerandos", "fallo"]
tipo: ordenar
opciones_explicitas: ["encabezamiento", "vistos", "considerandos", "fallo"]

enunciado: "Ordene cronológicamente los elementos que componen la estructura lógica de una sentencia judicial estándar:"

explicacion: |
  La sentencia comienza con la identificación de las partes (encabezamiento), la exposición de los antecedentes (vistos), el razonamiento jurídico (considerandos) y la decisión final (fallo).
```

### 5 — Arbitraje vs. Juicio Ordinario
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["arbitraje", "jurisdiccion"]

variables:
  tipo_resolucion: uno_de(["laudo", "sentencia"])
  datos: [
    ["En un proceso judicial ordinario, la decisión se denomina ___.", "sentencia"],
    ["En un proceso de arbitraje, la decisión se denomina ___.", "laudo"]
  ]

respuesta: datos[idx][1]
  idx: uno_de([0, 1])

tipo: completar
respuestas_validas: ["sentencia", "laudo"]

enunciado: "En un proceso de arbitraje, la decisión final que resuelve la controversia se denomina ___."

explicacion: |
  El término correcto para la decisión de un árbitro es 'laudo', mientras que el término para la decisión de un juez estatal es 'sentencia'.
```