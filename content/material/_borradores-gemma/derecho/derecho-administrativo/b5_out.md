### 1 — Acto administrativo y nulidad
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["acto_administrativo", "nulidad"]

variables:
  escenario: uno_de([
    ["Un funcionario dicta una resolución sin tener competencia sobre la materia", "nulo"],
    ["La administración emite un acto con vicio en el objeto, siendo imposible de ejecutar", "nulo"],
    ["Un acto administrativo carece de la motivación exigida por la ley", "nulo"]
  ])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["nulo", "válido", "anulable"]

enunciado: "En el siguiente caso: {escenario[idx][0]}, la validez del acto administrativo es: ___"

explicacion: |
  Un acto administrativo presenta nulidad absoluta cuando carece de elementos esenciales (competencia, objeto, causa, motivación o finalidad) o cuando el vicio es de tal magnitud que impide su subsistencia legal.
```

### 2 — Silencio administrativo
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["silencio_administrativo", "procedimiento"]

variables:
  tipo_silencio: uno_de([
    ["El interesado solicita una licencia y la administración no responde en el plazo legal. La ley establece que esto implica una denegación.", "negativo"],
    ["El interesado solicita una subvención y la administración no responde en el plazo legal. La ley establece que esto implica una concesión.", "positivo"]
  ])
  idx: uno_de([0,1])

respuesta: tipo_silencio[idx][1]
tipo: mc
opciones_explicitas: ["negativo", "positivo"]

enunciado: "Ante el escenario donde {tipo_silencio[idx][0]}, estamos ante un silencio administrativo de carácter: ___"

explicacion: |
  El silencio administrativo puede ser positivo (la falta de respuesta equivale a la aceptación de la petición) o negativo (la falta de respuesta equivale a un rechazo), dependiendo de lo que la norma específica determine para ese trámite.
```

### 3 — Elementos del acto administrativo
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["elementos", "acto_administrativo"]

respuesta: "competencia, objeto, causa, motivación, finalidad"
tipo: completar
respuestas_validas: ["competencia, objeto, causa, motivación, finalidad"]

enunciado: "Para que un acto administrativo sea válido, debe reunir una serie de elementos esenciales. Estos son: ___, ___, ___, ___ y ___."

explicacion: |
  Los elementos son: Competencia (autoridad facultada), Objeto (lo que el acto decide), Causa (antecedentes de hecho y derecho), Motivación (explicación de la decisión) y Finalidad (interés público).
```

### 4 — Principio de legalidad
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["principios", "legalidad"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que la Administración Pública puede actuar de manera discrecional incluso si sus decisiones contravienen la ley vigente?"

explicacion: |
  No. El principio de legalidad establece que la Administración solo puede realizar aquello que la ley le permite expresamente, limitando la discrecionalidad al marco de la ley y el interés público.
```

### 5 — Fases del procedimiento administrativo
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["procedimiento", "fases"]

respuesta: ["Iniciación", "Instrucción", "Finalización"]
tipo: ordenar
opciones_explicitas: ["Iniciación", "Instrucción", "Finalización"]

enunciado: "Ordene cronológicamente las etapas típicas de un procedimiento administrativo:"

explicacion: |
  El procedimiento comienza con la Iniciación (de oficio o a parte), sigue con la Instrucción (donde se aportan pruebas y alegaciones) y concluye con la Finalización (mediante resolución o acto administrativo).
```