### 1 — Venus paleolíticas
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["escultura", "prehistoria"]

respuesta: "Venus de Willendorf"
tipo: completar
respuestas_validas: ["Venus de Willendorf", "Venus de Willendorf"]

enunciado: "Una de las esculturas más famosas del Paleolítico Superior, que destaca por enfatizar la fertilidad, es la ___."

explicacion: |
  Las Venus paleolíticas son pequeñas estatuillas femeninas que suelen presentar rasgos sexuales muy exagerados, lo que sugiere un simbolismo relacionado con la fertilidad o la maternidad.
```

### 2 — Música en la Prehistoria
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["musica", "prehistoria"]

variables:
  escenario: uno_de([
    ["una flauta de hueso de ave", "hueso"],
    ["un ritmo de percusión con piedras", "piedra"],
    ["un silbato de concha marina", "concha"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["hueso", "piedra", "concha", "madera"]

enunciado: "En el registro arqueológico, se han encontrado restos que sugieren el uso de {escenario[0]} como primer instrumento musical."

explicacion: |
  Se han hallado flautas hechas de hueso de animales (como buitres o ciervos) en yacimientos como la cueva de Hohle Fels, lo que demuestra que la música es una expresión artística muy temprana.
```

### 3 — Ornamentación personal
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["ornamento", "joyeria"]

respuesta: "collares"
tipo: mc
opciones_explicitas: ["collares", "cuadros", "estatuas", "murales"]

enunciado: "El uso de conchas, dientes de animales o piedras perforadas para crear ___ es una de las formas más antiguas de expresión estética personal."

explicacion: |
  La ornamentación personal indica no solo una función estética, sino también la construcción de identidad y estatus dentro de los grupos humanos primitivos.
```

### 4 — Evolución de la expresión artística
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "avanzado"
  tags: ["secuencia", "prehistoria"]

respuesta: ["pintura rupestre", "escultura pequeña", "instrumentos musicales"]
tipo: ordenar
opciones_explicitas: ["pintura rupestre", "escultura pequeña", "instrumentos musicales"]

enunciado: "Ordena las siguientes manifestaciones artísticas según su aparición o prevalencia en el registro arqueológico temprano (de la más antigua/difusa a la más compleja):"

pasos:
  - "Identifica la manifestación más primitiva"
  - "Ubica la escultura de pequeña escala"
  - "Considera la especialización de instrumentos"

explicacion: |
  Aunque el arte es un proceso complejo, la arqueología muestra una transición desde la expresión simbólica en paredes (pintura), pasando por objetos portátiles (escultura/Venus), hasta la especialización de herramientas sonoras.
```

### 5 — Materiales en la escultura primitiva
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["escultura", "materiales"]

respuesta: 12.5
tipo: input
tolerancia_abs: 0.1

enunciado: "Si una pequeña estatuilla de piedra pesa 12.5 gramos y se encuentra en un yacimiento donde el 50% de los objetos son de este material, ¿cuántos gramos de piedra representan el total de la muestra analizada de 25 gramos?"

pasos:
  - "Identificar el peso del objeto (12.5g)"
  - "Calcular el peso total de la muestra (25g)"
  - "Determinar la parte proporcional de la piedra"

explicacion: |
  El estudio del peso y la densidad de los materiales es crucial para que los arqueólogos determinen el origen de las piezas escultóricas.
```