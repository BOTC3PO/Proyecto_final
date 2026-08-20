### 1 — El modelo de la caída libre
```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["modelo", "simulacion", "fisica"]

variables:
  escenario: uno_de([["Un objeto cae desde 10m", "6.38"], ["Un objeto cae desde 20m", "6.38"], ["Un objeto cae desde 5m", "6.38"]])
  idx: uno_de([0, 1, 2])

enunciado: "Para estudiar el movimiento, usamos un modelo que ignora la resistencia del aire. Si el objeto se lanza desde {escenario[idx][0]}, el tiempo estimado de caída es de ___ segundos."

respuestas_validas: ["6.38"]
tipo: completar

explicacion: |
  Un modelo científico simplifica la realidad al omitir variables complejas (como el viento) para facilitar la predicción matemática.
```

### 2 — ¿Es un modelo científico?
```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

enunciado: "Un mapa de carreteras es una representación simplificada de un territorio real que omite detalles como la altura de los árboles o el color de las casas para facilitar la navegación. ¿Podemos decir que un mapa es un modelo científico?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: mc

explicacion: |
  Sí, un modelo es una representación simplificada de la realidad que permite explicar o predecir fenómenos (en este caso, rutas de desplazamiento).
```

### 3 — Utilidad de los modelos
```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["utilidad", "limitaciones"]

variables:
  caso: uno_de([["predecir el clima", "predecir"], ["explicar la evolución", "explicar"], ["entender la estructura atómica", "explicar"]])
  idx: uno_de([0, 1, 2])

enunciado: "El propósito principal de un modelo científico es {caso[idx][0]}. Por lo tanto, un modelo sirve para ___ fenómenos."

opciones_explicitas: ["predecir", "explicar", "ambos"]
respuesta: "ambos"
tipo: mc

explicacion: |
  Los modelos tienen una doble función: explicar por qué ocurre algo y predecir qué ocurrirá en condiciones similares.
```

### 4 — Pasos del método de modelado
```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

opciones_explicitas: ["Observar el fenómeno", "Construir el modelo", "Validar con datos reales"]
respuesta: ["Observar el fenómeno", "Construir el modelo", "Validar con datos reales"]
tipo: ordenar

enunciado: "Para desarrollar un modelo científico riguroso, se deben seguir estos pasos en orden:"

explicacion: |
  Primero se identifica el fenómeno (observación), luego se crea la representación (construcción) y finalmente se comprueba si coincide con la realidad (validación).
```

### 5 — Limitaciones del modelo
```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "avanzado"
  tags: ["error", "precisión"]

variables:
  error_tipo: uno_de([["el modelo es demasiado simple", "error_simplificacion"], ["el modelo es demasiado complejo", "error_complejidad"]])
  idx: uno_de([0, 1])

enunciado: "Si un modelo matemático predice que un objeto caerá en 2 segundos, pero en el experimento real tarda 5 segundos debido a la fricción del aire (que el modelo ignoró), decimos que el modelo tiene un error de ___."

opciones_explicitas: ["error_simplificacion", "error_complejidad", "error_medicion"]
respuesta: "error_simplificacion"
tipo: mc

explicacion: |
  Al omitir variables relevantes para simplificar el cálculo, el modelo pierde precisión frente a la realidad, lo que se conoce como error por simplificación.
```