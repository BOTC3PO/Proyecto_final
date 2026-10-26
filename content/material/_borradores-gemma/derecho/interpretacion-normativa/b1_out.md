### 1 — Definición de interpretación normativa
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["conceptos", "teoria_del_derecho"]

respuesta: "desentrañar el sentido y el alcance de la norma"
tipo: completar
respuestas_validas: ["desentrañar el sentido y el alcance de la norma", "determinar el sentido y el alcance de la norma"]

enunciado: "La interpretación normativa es la actividad intelectual consistente en ___ para aplicarla a un caso concreto."

explicacion: |
  Interpretar una norma no es solo leerla, sino determinar qué significa y hasta dónde llega su aplicación en un contexto específico.
```

### 2 — Elementos de la interpretación
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["elementos", "metodologia"]

variables:
  tipo_interpretacion: uno_de(["gramatical", "teleologica", "sistemática"])

respuesta: tipo_interpretacion
tipo: mc
opciones_explicitas: ["gramatical", "teleologica", "sistemática"]

enunciado: "Cuando un juez busca el sentido de la norma basándose exclusivamente en el significado de las palabras utilizadas en el texto, está realizando una interpretación de tipo {tipo_interpretacion}."

explicacion: |
  La interpretación gramatical o literal se centra en el tenor semántico de las palabras del texto normativo.
```

### 3 — El alcance de la norma
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["alcance", "aplicacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que la interpretación normativa busca determinar tanto el significado (sentido) como el alcance (ámbito de aplicación) de una norma?"

explicacion: |
  Efectivamente, la interpretación tiene una doble dimensión: el contenido semántico (qué dice) y la extensión de su aplicación (a quiénes y en qué situaciones alcanza).
```

### 4 — Métodos de interpretación
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["metodos", "orden"]

opciones_explicitas: ["Análisis del texto", "Identificación del problema", "Aplicación al caso concreto"]
respuesta: ["Análisis del texto", "Identificación del problema", "Aplicación al caso concreto"]
tipo: ordenar

enunciado: "Ordene lógicamente los pasos que sigue un aplicador del derecho al realizar un proceso de interpretación y aplicación normativa:"

explicacion: |
  El proceso comienza con la comprensión del texto, sigue con la detección de la controversia jurídica y culmina con la subsunción o aplicación de la norma al hecho.
```

### 5 — Interpretación Teleológica
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["teleologica", "finalidad"]

variables:
  escenario: uno_de(["finalidad_legislador", "finalidad_social"])

respuesta: escenario
tipo: mc
opciones_explicitas: ["finalidad_legislador", "finalidad_social"]

enunciado: "Si un intérprete busca el sentido de la norma atendiendo a los fines o propósitos para los cuales fue creada (el 'espíritu' de la ley), está realizando una interpretación de {escenario}."

explicacion: |
  La interpretación teleológica se centra en la finalidad (telos) de la norma, ya sea la intención original del legislador o la finalidad social/actual de la norma en la comunidad.
```