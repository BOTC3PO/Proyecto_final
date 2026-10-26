### 1 — Método de recolección adecuado
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "basico"
  tags: ["metodologia", "tecnica"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenarios: [
    ["Se desea conocer la opinión de 500 ciudadanos sobre una nueva ley de tránsito.", "encuesta"],
    ["Se busca observar el comportamiento natural de primates en una selva sin intervenir.", "observacion"],
    ["Se requiere profundizar en las experiencias de vida de tres sobrevivientes de un naufragio.", "entrevista"]
  ]

enunciado: "Para el escenario: {escenarios[escenario_idx][0]}, el método de recolección más adecuado es una {escenarios[escenario_idx][1]}."

respuesta: "___"
tipo: completar
respuestas_validas: ["encuesta", "observacion", "entrevista"]

explicacion: |
  La elección del método depende del objetivo: las encuestas son para grandes grupos y tendencias; la observación para conductas naturales; y la entrevista para profundidad cualitativa.
```

### 2 — Sesgo en la muestra
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["sesgo", "muestreo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Un investigador quiere saber qué opinan los estudiantes de una universidad, pero solo pregunta a sus amigos de su misma carrera.", "verdadero"],
    ["Un investigador selecciona al azar 100 números de teléfono de un padrón oficial para una encuesta de salud.", "falso"]
  ]

enunciado: "¿Es el proceso de recolección descrito en el caso '{casos[caso_idx][0]}' un proceso libre de sesgo de selección? (Responda con verdadero o falso)"

respuesta: casos[caso_idx][1]
tipo: vf

explicacion: |
  El sesgo de selección ocurre cuando la muestra no es representativa de la población objetivo. En el primer caso, la muestra está sesgada hacia un grupo específico.
```

### 3 — Instrumentos de recolección
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "basico"
  tags: ["instrumentos", "tecnica"]

variables:
  instrumento_idx: uno_de([0, 1, 2])
  instrumentos: [
    ["Cuestionario con preguntas cerradas", "cuantitativo"],
    ["Guion de entrevista semiestructurada", "cualitativo"],
    ["Ficha de registro de observación", "cualitativo"]
  ]

enunciado: "El instrumento '{instrumentos[instrumento_idx][0]}' se clasifica principalmente como un método de recolección de tipo _________."

respuesta: "___"
tipo: completar
respuestas_validas: ["cuantitativo", "cualitativo"]

explicacion: |
  Los métodos cuantitativos buscan medir variables y frecuencias, mientras que los cualitativos buscan comprender significados y contextos profundos.
```

### 4 — Secuencia de la recolección
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["proceso", "pasos"]

enunciado: "Ordene cronológicamente los pasos para llevar a cabo una recolección de datos mediante una entrevista presencial:"

opciones_explicitas: ["Diseñar el guion de preguntas", "Contactar a los participantes", "Realizar la entrevista", "Analizar la información"]
respuesta: ["Diseñar el guion de preguntas", "Contactar a los participantes", "Realizar la entrevista", "Analizar la información"]
tipo: ordenar

explicacion: |
  Antes de recolectar, se debe planificar el instrumento; luego se accede a la muestra, se ejecuta la técnica y finalmente se procesan los datos obtenidos.
```

### 5 — Validez y Confiabilidad
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "avanzado"
  tags: ["validez", "confiabilidad"]

variables:
  propiedad_idx: uno_de([0, 1])
  propiedades: [
    ["El instrumento mide realmente la variable que pretende medir.", "validez"],
    ["El instrumento produce resultados consistentes al aplicarse repetidamente.", "confiabilidad"]
  ]

enunciado: "Si un test de inteligencia arroja resultados muy distintos cada vez que se le aplica a la misma persona en condiciones iguales, decimos que el test carece de _________."

respuesta: "___"
tipo: completar
respuestas_validas: ["validez", "confiabilidad"]

explicacion: |
  La confiabilidad se refiere a la estabilidad y consistencia de la medida, mientras que la validez se refiere a la exactitud de lo que se está midiendo.
```