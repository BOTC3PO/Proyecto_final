### 1 — La observación científica
```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["metodologia", "observacion"]

respuesta: "observacion"
tipo: completar
respuestas_validas: ["observacion"]

enunciado: "El primer paso del método científico consiste en el uso de los sentidos o instrumentos para captar información del entorno, proceso conocido como ___."

explicacion: |
  La observación es el punto de partida de toda investigación; implica registrar hechos o fenómenos de manera objetiva.
```

### 2 — Características de una pregunta investigable
```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["pregunta", "metodologia"]

variables:
  es_investigable: uno_de([verdadero, falso])

respuesta: es_investigable
tipo: vf

enunciado: "Una pregunta que solo puede responderse con un 'sí' o un 'no' se considera una pregunta de investigación de alto nivel científico."

pasos:
  - "Analizar si la pregunta permite la recolección de datos."
  - "Verificar si la respuesta requiere experimentación o análisis profundo."

explicacion: |
  Falso. Las preguntas investigables deben ser abiertas y permitir la recolección de datos empíricos para ser analizadas.
```

### 3 — Del fenómeno a la pregunta
```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

respuesta: 2
tipo: mc
opciones_explicitas: ["Una opinión personal sobre el fenómeno", "Una pregunta que relaciona variables y es medible", "Una descripción literaria de lo que se ve", "Una conclusión definitiva sobre el problema"]

enunciado: "Al convertir una observación curiosa en una pregunta investigable, el investigador debe buscar que esta sea:"

explicacion: |
  Una pregunta investigable debe establecer una relación entre variables que puedan ser medidas u observadas sistemáticamente.
```

### 4 — El proceso de refinamiento
```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["pasos", "metodologia"]

respuesta: ["Observación del fenómeno", "Identificación de variables", "Formulación de la pregunta"]
tipo: ordenar
opciones_explicitas: ["Observación del fenómeno", "Identificación de variables", "Formulación de la pregunta"]

enunciado: "Ordena los pasos lógicos para transformar una curiosidad inicial en una pregunta de investigación científica:"

explicacion: |
  Primero se observa el entorno, luego se identifican los factores (variables) que intervienen y finalmente se redacta la pregunta de investigación.
```

### 5 — Variables en la investigación
```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "avanzado"
  tags: ["variables", "metodologia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["La temperatura del agua", "La velocidad del crecimiento"], ["La luz solar", "La cantidad de fertilizante"]]

respuesta: datos[escenario_idx][0]
tipo: mc
opciones_explicitas: ["La luz solar", "La temperatura del agua", "El color de la planta", "El tipo de maceta"]

enunciado: "Si observamos que las plantas crecen más rápido con un tipo de luz, la variable que estamos estudiando es ___."

explicacion: |
  En este caso, la luz es la variable independiente que el investigador observa para ver su efecto en el crecimiento.
```