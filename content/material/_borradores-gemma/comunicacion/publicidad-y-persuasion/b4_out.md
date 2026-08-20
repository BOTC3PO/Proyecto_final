### 1 — Publicidad vs. Propaganda
```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["conceptos_basicos", "publicidad"]

respuesta: "comercial"
tipo: completar
respuestas_validas: ["comercial"]

enunciado: "Mientras que la propaganda busca influir en la actitud y valores de una audiencia hacia una causa social o política, la publicidad tiene como objetivo principal el sentido ___."

explicacion: |
  La publicidad es una forma de comunicación que busca promover la venta de un producto o servicio (fin comercial), mientras que la propaganda busca la adhesión a una ideología o causa.
```

### 2 — Persuasión vs. Manipulación
```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["etica", "persuasion"]

variables:
  es_etica: uno_de([verdadero, falso])

respuesta: es_etica
tipo: vf

enunciado: "En el contexto de la comunicación persuasiva, si el emisor oculta información relevante para inducir un error en el receptor y forzar una decisión, ¿se considera una práctica ética?"

explicacion: |
  La persuasión ética respeta la libertad de elección y la veracidad; la manipulación utiliza el engaño o la omisión para anular la capacidad de juicio del receptor.
```

### 3 — Publicidad Informativa vs. Publicidad Emocional
```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["estrategias", "emociones"]

variables:
  escenario: uno_de([0, 1])

respuesta: dato[escenario][1]
tipo: mc
opciones_explicitas: ["Racional/Informativa", "Emocional/Aspiracional", "Miedo/Intimidación", "Autoridad/Celebridad"]

enunciado: "Un anuncio de un reloj de alta gama que muestra imágenes de paisajes épicos y personas logrando sus sueños, sin mencionar las especificaciones técnicas del mecanismo, utiliza una técnica de tipo: ___"

pasos:
  - "Identificar el objetivo del anuncio: ¿vende características o sentimientos?"
  - "Analizar si el mensaje se apoya en datos lógicos o en la conexión afectiva."

explicacion: |
  El anuncio utiliza el modelo aspiracional, donde el producto se vincula con una emoción o un estilo de vida, característico de la publicidad emocional.

datos:
  - ["Un anuncio de un detergente que detalla cómo eliminar manchas en 30 segundos", "Racional/Informativa"]
  - ["Un anuncio de un perfume que muestra escenas de romance y misterio", "Emocional/Aspiracional"]
```

### 4 — El proceso de persuasión
```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "avanzado"
  tags: ["modelos", "secuencia"]

respuesta: ["Atención", "Interés", "Deseo", "Acción"]
tipo: ordenar
opciones_explicitas: ["Atención", "Interés", "Deseo", "Acción", "Recordación"]

enunciado: "Ordene correctamente las etapas del modelo AIDA, una estructura clásica en la publicidad para guiar al consumidor a través del proceso de persuasión:"

explicacion: |
  El modelo AIDA establece una secuencia lógica: primero se capta la atención, luego se genera interés, se despierta el deseo por el producto y finalmente se provoca la acción de compra.
```

### 5 — Persuasión vs. Coacción
```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["etica", "psicologia"]

respuesta: "coaccion"
tipo: completar
respuestas_validas: ["coaccion"]

enunciado: "La principal diferencia entre la persuasión y la ___ es que la primera apela a la voluntad y el razonamiento del individuo, mientras que la segunda utiliza la fuerza o la amenaza para obligar a una acción."

explicacion: |
  La persuasión es un proceso de influencia que respeta la autonomía del sujeto, mientras que la coacción anula la libertad del individuo mediante la presión o la fuerza.
```