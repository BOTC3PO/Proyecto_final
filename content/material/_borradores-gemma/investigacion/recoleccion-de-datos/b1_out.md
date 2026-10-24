### 1 — Concepto de Variable
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "basico"
  tags: ["conceptos", "terminologia"]

respuesta: "variable"
tipo: completar
respuestas_validas: ["variable"]

enunciado: "En una investigación, cualquier característica, propiedad o atributo que puede variar y ser medido u observado se denomina ___."

explicacion: |
  La variable es el elemento central de la investigación; es aquello que se estudia y que presenta variaciones entre los sujetos o casos.
```

### 2 — Métodos de Recolección
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  tema_sub: "metodologias"
  nivel: "basico"
  tags: ["metodos", "tecnica"]

variables:
  es_cualitativo: uno_de([verdadero, falso])

respuesta: es_cualitativo
tipo: vf

enunciado: "Si un investigador utiliza una entrevista en profundidad para comprender las motivaciones subjetivas de un grupo, está utilizando un método de recolección de tipo cualitativo."

explicacion: |
  Los métodos cualitativos buscan comprender significados y experiencias, mientras que los cuantitativos buscan medir magnitudes y frecuencias.
```

### 3 — Instrumentos de Recolección
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["instrumentos", "encuesta"]

respuesta: "encuesta"
tipo: mc
opciones_explicitas: ["entrevista", "encuesta", "observación", "análisis documental"]

enunciado: "Es el instrumento de recolección de datos que consiste en un conjunto de preguntas estandarizadas aplicadas a una muestra para obtener datos estadísticos."

explicacion: |
  La encuesta se caracteriza por su estandarización, lo que permite la comparación de respuestas entre muchos sujetos.
```

### 4 — Fases de la Recolección
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

respuesta: ["definir_instrumento", "aplicar_instrumento", "registrar_datos"]
tipo: ordenar
opciones_explicitas: ["definir_instrumento", "aplicar_instrumento", "registrar_datos"]

enunciado: "Ordene cronológicamente los pasos lógicos para llevar a cabo la recolección de datos en un trabajo de campo:"

explicacion: |
  Primero se debe diseñar el instrumento, luego se procede a su aplicación en el campo y finalmente se debe asegurar el registro sistemático de la información obtenida.
```

### 5 — Validez y Confiabilidad
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "avanzado"
  tags: ["calidad", "rigor"]

respuesta: "fiabilidad"
tipo: completar
respuestas_validas: ["fiabilidad", "confiabilidad"]

enunciado: "La propiedad de un instrumento que indica que, si se aplica repetidamente en las mismas condiciones, producirá resultados consistentes es la ___."

explicacion: |
  La fiabilidad (o confiabilidad) se refiere a la consistencia de la medición, mientras que la validez se refiere a si el instrumento mide realmente lo que pretende medir.
```