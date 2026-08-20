### 1 — ¿El veredicto es inapelable?
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["procedimiento", "recursos"]

respuesta: falso
tipo: vf

enunciado: "En un juicio oral, una vez que el tribunal dicta el veredicto o sentencia, esto significa que la decisión es definitiva y no puede ser revisada por una instancia superior mediante un recurso de apelación."

explicacion: |
  Falso. El principio de la doble instancia permite que las partes impugnen la sentencia ante un tribunal superior para que esta sea revisada, siempre que se cumplan los requisitos legales.
```

### 2 — Confusión sobre la carga de la prueba
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["carga_de_la_prueba", "principios"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[0, "El imputado debe demostrar su inocencia"], [1, "La fiscalía debe demostrar la culpabilidad"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["El imputado debe demostrar su inocencia", "La fiscalía debe demostrar la culpabilidad", "Ambas partes deben probar todo lo que aleguen", "El juez decide qué debe probarse"]

enunciado: "En el marco del juicio oral y bajo el principio de presunción de inocencia, ¿cuál es la carga de la prueba respecto a la responsabilidad penal?"

explicacion: |
  La carga de la prueba recae sobre la parte acusadora (fiscalía/querella). El imputado no tiene la obligación de probar su inocencia; es el Estado quien debe destruir la presunción de inocencia mediante pruebas de cargo.
```

### 3 — Orden de las etapas en el juicio
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["etapas", "procedimiento"]

respuesta: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura", "Deliberación y veredicto"]
tipo: ordenar
opciones_explicitas: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura", "Deliberación y veredicto", "Examen de testigos"]

enunciado: "Para que el juicio oral sea válido, se debe respetar un orden lógico y cronológico en sus etapas. Ordene las siguientes fases según el desarrollo estándar de un debate oral:"

explicacion: |
  El juicio comienza con la presentación de las teorías del caso (apertura), sigue con la recepción de evidencia (testigos, peritos, documentos), luego las conclusiones finales (clausura) y termina con la decisión del tribunal.
```

### 4 — El rol del juez en la producción de prueba
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["juez", "imparcialidad"]

respuesta: "imparcial"
tipo: completar
respuestas_validas: ["imparcial", "activo", "perito", "acusador"]

enunciado: "Durante la etapa de producción de prueba en el juicio oral, el juez debe mantener un rol ___ y no debe proponer pruebas de oficio que no hayan sido solicitadas por las partes, para no vulnerar la imparcialidad."

explicacion: |
  El sistema acusatorio exige que el juez sea un tercero imparcial. Si el juez busca o propone pruebas, se rompe la igualdad de armas entre la acusación y la defensa.
```

### 5 — ¿Se pueden presentar pruebas nuevas en el juicio?
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "avanzado"
  tags: ["pruebas", "limites"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [[0, "prohibido"], [1, "excepcional"]]

respuesta: casos[caso_idx][1]

enunciado: "En un juicio oral, la regla general es la prohibición de introducir elementos de convicción que no hayan sido debidamente anunciados y admitidos en la etapa intermedia. Sin embargo, la incorporación de prueba nueva es ___ si se demuestra que es un elemento sobreviniente que no pudo ser conocido antes."

tipo: mc
opciones_explicitas: ["prohibido", "excepcional", "obligatorio", "imposible"]

explicacion: |
  Aunque el juicio oral se rige por la preclusión (lo que no se anunció antes, no entra), existe la excepción de la "prueba sobreviniente" para garantizar la búsqueda de la verdad real.
```