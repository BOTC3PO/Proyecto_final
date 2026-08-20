### 1 — Concepto de Apelación
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["proceso_civil", "recursos"]

respuesta: "recurso de apelación"
tipo: completar
respuestas_validas: ["recurso de apelación", "apelación"]

enunciado: "El medio de impugnación que permite a una parte solicitar que un tribunal superior revise la resolución dictada por un juez de primera instancia se denomina ___."

explicacion: |
  El recurso de apelación es la herramienta procesal mediante la cual la parte que se siente agraviada por una sentencia solicita su revisión ante un órgano jerárquicamente superior.
```

### 2 — Instancias Judiciales
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["jerarquia", "tribunales"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[["Juez de Primera Instancia", "Tribunal de Alzada"], ["Juez de Primera Instancia", "Corte Suprema"]]]

opciones_explicitas: ["Juez de Primera Instancia", "Tribunal de Alzada", "Corte Suprema"]

respuesta: escenarios[escenario_idx][1]
tipo: mc

enunciado: "En un proceso judicial estándar, cuando se interpone un recurso contra la sentencia de un {escenarios[escenario_idx][0]}, el órgano que debe conocer la cuestión es el {escenarios[escenario_idx][1]}."

explicacion: |
  La estructura judicial se organiza en instancias; la revisión de una decisión de primera instancia corresponde al tribunal de alzada o segunda instancia.
```

### 3 — Efectos del Recurso
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["efectos", "suspensivo"]

respuesta: verdadero
tipo: vf

enunciado: "¿El efecto suspensivo en un recurso de apelación implica que la ejecución de la sentencia queda detenida hasta que el tribunal superior resuelva?"

explicacion: |
  Correcto. El efecto suspensivo impide que la sentencia se cumpla mientras el recurso de apelación está pendiente de resolución.
```

### 4 — El Agravio
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["requisitos", "agravio"]

respuesta: "agravio"
tipo: completar
respuestas_validas: ["agravio", "perjuicio"]

enunciado: "Para que un recurso de apelación sea admisible, la parte recurrente debe demostrar la existencia de un ___, es decir, un perjuicio real derivado de la decisión judicial."

explicacion: |
  Sin la existencia de un agravio (un daño o perjuicio jurídico o material causado por la resolución), el recurso carece de objeto y debe ser rechazado.
```

### 5 — Secuencia del Proceso de Apelación
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["procedimiento", "pasos"]

opciones_explicitas: ["Interposición del recurso", "Expresión de agravios", "Elevación a la segunda instancia", "Sentencia de Alzada"]

respuesta: ["Interposición del recurso", "Expresión de agravios", "Elevación a la segunda instancia", "Sentencia de Alzada"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas típicas de un proceso de apelación:"

explicacion: |
  Primero se interpone el recurso, luego se fundamentan los agravios, el expediente se eleva al tribunal superior y finalmente este dicta la sentencia de segunda instancia (Alzada).
```