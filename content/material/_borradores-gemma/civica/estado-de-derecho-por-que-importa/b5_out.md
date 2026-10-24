### 1 — El funcionario y la norma
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "basico"
  tags: ["principios", "legalidad"]

variables:
  escenario: uno_de([["Un intendente decide no pagar las deudas del municipio alegando que no está de acuerdo con la ley vigente.", "viola"], ["Un juez dicta sentencia basándose estrictamente en lo que establece la Constitución.", "respeta"], ["Un policía detiene a una persona sin orden judicial solo por su apariencia física.", "viola"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["respeta", "viola"]

enunciado: "Analice el siguiente caso: {escenario[idx][0]}"

explicacion: |
  En un Estado de Derecho, nadie está por encima de la ley, ni siquiera los gobernantes. Si una autoridad actúa fuera de la norma o de forma arbitraria, se está violando este principio.
```

### 2 — La jerarquía normativa
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "intermedio"
  tags: ["constitucion", "jerarquia"]

variables:
  caso: uno_de([["La aprobación de una ley que contradice derechos fundamentales de la Constitución.", "viola"], ["La aplicación de una ley que fue sancionada siguiendo todos los pasos legales.", "respeta"], ["La creación de un decreto que busca proteger la salud pública sin exceder sus facultades.", "respeta"]])
  idx: uno_de([0,1,2])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["respeta", "viola"]

enunciado: "Determine si el escenario siguiente respeta o viola el Estado de Derecho: {caso[idx][0]}"

explicacion: |
  El principio de supremacía constitucional garantiza que ninguna norma de menor jerarquía pueda contradecir la Constitución.
```

### 3 — El debido proceso
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "intermedio"
  tags: ["justicia", "derechos"]

variables:
  situacion: uno_de([["Se le permite a un acusado presentar pruebas y contar con un abogado defensor.", "respeta"], ["Se le prohíbe a un ciudadano acceder a los expedientes judiciales que lo involucran.", "viola"], ["Se le impone una pena sin que exista una ley previa que la contemple.", "viola"]])
  idx: uno_de([0,1,2])

respuesta: situacion[idx][1]
tipo: mc
opciones_explicitas: ["respeta", "viola"]

enunciado: "En el marco del debido proceso, ¿el siguiente escenario es una práctica de un Estado de Derecho? {situacion[idx][0]}"

explicacion: |
  El debido proceso exige que toda persona tenga derecho a ser escuchada, a defenderse y a ser juzgada por leyes preexistentes.
```

### 4 — Secuencia de la legalidad
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "avanzado"
  tags: ["procedimiento", "orden"]

variables:
  secuencia: [["Propuesta de ley", "Debate y votación", "Promulgación", "Publicación en el Boletín Oficial"]]
  idx: uno_de([0,1,2,3])

respuesta: secuencia
tipo: ordenar
opciones_explicitas: ["Propuesta de ley", "Debate y votación", "Promulgación", "Publicación en el Boletín Oficial"]

enunciado: "Para que una norma sea parte del ordenamiento jurídico y respete el Estado de Derecho, debe seguir un orden lógico. Ordene los pasos del proceso legislativo:"

explicacion: |
  El orden de los pasos garantiza la transparencia y la seguridad jurídica, permitiendo que la ciudadanía conozca la norma antes de que sea exigible.
```

### 5 — El principio de legalidad
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "basico"
  tags: ["legalidad", "arbitrariedad"]

variables:
  ejemplo: uno_de([["La autoridad actúa según su voluntad propia sin base legal.", "arbitrariedad"], ["La autoridad actúa conforme a la ley escrita.", "legalidad"]])
  idx: uno_de([0,1])

respuesta: ejemplo[idx][1]
tipo: completar

enunciado: "Si un gobernante actúa basándose únicamente en su voluntad personal, sin someterse a las leyes, está incurriendo en una ___."

respuestas_validas: ["arbitrariedad"]

explicacion: |
  La arbitrariedad es el antónimo del Estado de Derecho; implica que el poder se ejerce por capricho y no por la norma.
```