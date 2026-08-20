### 1 — El rol de la prueba testimonial
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["procedimiento", "pruebas"]

respuesta: "testigo"
tipo: completar
respuestas_validas: ["testigo"]

enunciado: "Durante la etapa de debate en el juicio oral, la persona que comparece para declarar sobre hechos que presenció se denomina ___."

explicacion: |
  En el juicio oral, el testigo es el sujeto que aporta información directa sobre los hechos objeto del proceso.
```

### 2 — Validez de la prueba en el debate
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["principios", "legalidad"]

respuesta: falso
tipo: vf

enunciado: "¿Es posible que el tribunal dicte sentencia basándose en pruebas que no fueron producidas y debatidas durante la etapa de juicio oral?"

explicacion: |
  Falso. El principio de inmediación y contradicción exige que toda prueba utilizada para la sentencia haya sido debidamente producida en el juicio oral.
```

### 3 — Secuencia del debate oral
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["etapas", "procedimiento"]

variables:
  pasos_ordenados: [["Alegato de apertura", "Producción de prueba", "Alegatos de clausura"], ["Alegato de apertura", "Producción de prueba", "Alegatos de clausura"], ["Producción de prueba", "Alegato de apertura", "Alegatos de clausura"]]
  idx: uno_de([0,1,2])

respuesta: ["Alegato de apertura", "Producción de prueba", "Alegatos de clausura"]
tipo: ordenar
opciones_explicitas: ["Alegato de apertura", "Producción de prueba", "Alegatos de clausura"]

enunciado: "Ordene cronológicamente las etapas fundamentales del debate en un juicio oral:"

explicacion: |
  El juicio comienza con la presentación de las teorías del caso (apertura), sigue con la incorporación de elementos de convicción (prueba) y finaliza con las conclusiones (clausura).
```

### 4 — El veredicto y la decisión
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["sentencia", "veredicto"]

variables:
  caso_escenario: [["absolución", "el acusado es libre de cargos"], ["condena", "el acusado es hallado culpable"]]
  idx: uno_de([0,1])

respuesta: "condena"
tipo: mc
opciones_explicitas: ["absolución", "condena"]

enunciado: "Si tras la valoración de la prueba el tribunal determina que la culpabilidad ha sido acreditada más allá de toda duda razonable, el resultado es una ___."

explicacion: |
  La condena es el acto mediante el cual se impone una pena tras haber probado la responsabilidad penal.
```

### 5 — El control de la prueba
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "avanzado"
  tags: ["derechos", "defensa"]

respuesta: 1
tipo: mc
opciones_explicitas: ["0", "1"]

enunciado: "En el juicio oral, el derecho a la contradicción implica que las partes pueden objetar la prueba presentada por la contraparte. ¿Es este un derecho fundamental para asegurar un juicio justo? (1: Sí / 0: No)"

explicacion: |
  La contradicción es la facultad de controlar la prueba de la contraparte, permitiendo el control de la veracidad y legalidad de los elementos presentados.
```