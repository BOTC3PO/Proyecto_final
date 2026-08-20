### 1 — El objeto del Derecho Administrativo
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["definicion", "estado"]

respuesta: "regula la organización y actividad del Estado y su relación con los ciudadanos"
tipo: completar
respuestas_validas: ["regula la organización y actividad del Estado y su relación con los ciudadanos"]

enunciado: "El Derecho Administrativo es la rama del derecho público que ___."

explicacion: |
  A diferencia del derecho privado, el administrativo se centra en la estructura, funciones y facultades de la administración pública para asegurar el bien común.
```

### 2 — ¿Derecho Público o Privado?
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["clasificacion", "derecho_publico"]

respuesta: verdadero
tipo: vf

enunciado: "El Derecho Administrativo pertenece a la rama del Derecho Público, ya que regula el ejercicio de la función administrativa del Estado."

explicacion: |
  Correcto. El Derecho Público regula las relaciones donde el Estado actúa con imperio (autoridad) para satisfacer el interés general.
```

### 3 — Diferencia con el Derecho Constitucional
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["distincion", "constitucional"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["La Constitución establece la estructura básica del Estado.", "El Derecho Administrativo desarrolla el funcionamiento concreto de esa estructura."],
    ["La Constitución define los derechos fundamentales.", "El Derecho Administrativo establece los procedimientos para que el Estado los garantice o los limite."]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: [escenarios[escenario_idx][0], escenarios[escenario_idx][1]]

enunciado: "Si el Derecho Constitucional se ocupa de la estructura orgánica y los principios fundamentales del Estado, el Derecho Administrativo se ocupa de: {escenarios[escenario_idx][1]}"

explicacion: |
  El Derecho Constitucional es la norma suprema que organiza el poder; el Administrativo es la herramienta operativa que permite a ese poder actuar en la realidad cotidiana.
```

### 4 — Elementos de la Actividad Administrativa
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["elementos", "acto_administrativo"]

respuesta: "Sujeto, Objeto, Motivo, Finalidad y Procedimiento"
tipo: completar
respuestas_validas: ["Sujeto, Objeto, Motivo, Finalidad y Procedimiento"]

enunciado: "Para que un acto administrativo sea válido, debe contar con ciertos elementos esenciales: ___, ___, ___, ___ y ___."

explicacion: |
  La validez de la actuación estatal depende de que el sujeto tenga competencia, el objeto sea lícito, el motivo sea real, la finalidad sea el interés público y se cumpla el procedimiento legal.
```

### 5 — Jerarquía de la actuación estatal
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "avanzado"
  tags: ["jerarquia", "orden_normativo"]

respuesta: ["Constitución Nacional", "Tratados Internacionales", "Leyes", "Reglamentos/Decretos"]
tipo: ordenar
opciones_explicitas: ["Constitución Nacional", "Tratados Internacionales", "Leyes", "Reglamentos/Decretos"]

enunciado: "Ordene de mayor a menor jerarquía normativa los instrumentos que rigen la actividad de la administración pública:"

explicacion: |
  El Derecho Administrativo debe actuar siempre bajo el principio de legalidad, respetando la pirámide jurídica que comienza con la Constitución y los Tratados, seguidos por las leyes y finalmente los reglamentos dictados por la propia administración.
```