### 1 — El efecto de la apelación
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["proceso_civil", "recursos"]

variables:
  escenario: uno_de([
    ["La sentencia es definitiva", "se suspende la ejecución"],
    ["La sentencia es provisional", "no se suspende la ejecución"]
  ])

enunciado: "En un proceso civil, si se interpone un recurso de apelación contra una sentencia que tiene efecto suspensivo, la ejecución de la misma {escenario[1]}."

respuesta: escenario[1]
tipo: vf
```

### 2 — El principio de congruencia
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "avanzado"
  tags: ["principios_procesales", "limitacion_tribunal"]

variables:
  caso: uno_de([
    ["el tribunal superior puede dictar una sentencia distinta a la que pidió el apelante", "el tribunal superior no puede pronunciarse sobre lo que no fue objeto de la apelación"],
    ["el tribunal superior puede dictar una sentencia distinta a la que pidió el apelante", "el tribunal superior no puede pronunciarse sobre lo que no fue objeto de la apelación"]
  ])
  # Nota: El escenario se define para que la respuesta sea la segunda opción del par.
  # Re-estructurando para cumplir regla de un_de en variables:
  datos: [
    ["El tribunal puede resolver sobre temas no apelados", "El tribunal no puede resolver sobre temas no apelados"],
    ["El tribunal puede resolver sobre temas no apelados", "El tribunal no puede resolver sobre temas no apelados"]
  ]
  idx: uno_de([0, 1])

enunciado: "De acuerdo al principio de congruencia, en segunda instancia, {datos[idx][0]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["El tribunal puede resolver sobre temas no apelados", "El tribunal no puede resolver sobre temas no apelados"]

explicacion: |
  El tribunal de alzada está limitado por la materia de la apelación (principio de congrucia), no pudiendo extender su conocimiento a cuestiones que no hayan sido objeto de impugnación.
```

### 3 — La doble instancia
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["garantias", "derechos_fundamentales"]

variables:
  es_garantia: falso

enunciado: "El derecho a la doble instancia es considerado una garantía fundamental en los sistemas procesales modernos."

respuesta: es_garantia
tipo: vf

explicacion: |
  La doble instancia permite que un órgano superior revise la aplicación de la ley o la valoración de la prueba realizada por el juez de primera instancia.
```

### 4 — Etapas del recurso
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["procedimiento", "etapas"]

variables:
  pasos_ordenados: ["Interposición del recurso", "Expresión de agravios", "Resolución de la Alzada"]

enunciado: "Ordene cronológicamente las etapas típicas de un recurso de apelación:"

pasos:
  - "Interposición del recurso"
  - "Expresión de agravios"
  - "Resolución de la Alzada"

respuesta: ["Interposición del recurso", "Expresión de agravios", "Resolución de la Alzada"]
tipo: ordenar
opciones_explicitas: ["Interposición del recurso", "Expresión de agravios", "Resolución de la Alzada"]

explicacion: |
  Primero se presenta el recurso, luego se fundamentan los errores (agravios) y finalmente el tribunal superior decide.
```

### 5 — Error en la fundamentación
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["agravios", "errores_comunes"]

variables:
  error_tipo: uno_de([
    ["reiterar los argumentos de la demanda sin criticar la sentencia", "presentar argumentos nuevos que no fueron debatidos en primera instancia"],
    ["reiterar los argumentos de la demanda sin criticar la sentencia", "presentar argumentos nuevos que no fueron debatidos en primera instancia"]
  ])
  idx: uno_de([0, 1])

enunciado: "Un error común que puede llevar a la improcedencia de un recurso de apelación es ___."

respuesta: error_tipo[idx]
tipo: completar
respuestas_validas: ["reiterar los argumentos de la demanda sin criticar la sentencia", "presentar argumentos nuevos que no fueron debatidos en primera instancia"]

explicacion: |
  La apelación requiere la crítica concreta y concreta de los fundamentos de la sentencia. Simplemente repetir lo dicho en la demanda no constituye un agravio jurídico.
```