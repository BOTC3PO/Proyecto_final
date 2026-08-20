# Investigacion — Construir y usar un modelo cientifico (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — ¿Qué es un modelo científico?

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["definicion", "metodologia"]

tipo: mc
opciones_explicitas: ["Una representación exacta y completa de la realidad sin omisiones.", "Una representación simplificada de la realidad para explicar o predecir fenómenos.", "Un conjunto de leyes matemáticas que no requieren validación experimental.", "Un dibujo artístico de un fenómeno natural."]

enunciado: "En el ámbito de la ciencia, un modelo se define como ___."

respuesta: "Una representación simplificada de la realidad para explicar o predecir fenómenos."

explicacion: |
  Un modelo científico no intenta ser una copia idéntica de la realidad, sino una simplificación que permite aislar las variables más importantes para entender un fenómeno.
```

### 2 — El propósito de la simplificación

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["simplificacion", "utilidad"]

tipo: vf
enunciado: "Un modelo científico es útil precisamente porque ignora ciertos detalles irrelevantes para el fenómeno que se está estudiando."

respuesta: verdadero

explicacion: |
  Si un modelo fuera tan complejo como la realidad misma, sería imposible de usar para realizar predicciones o cálculos. La simplificación es su mayor virtud.
```

### 3 — Componentes de un modelo

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["componentes", "variables"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["masa", "gravedad"], ["presión", "temperatura"]]

tipo: completar
respuestas_validas:
  - "masa"
  - "gravedad"
  - "presión"
  - "temperatura"

enunciado: "Para modelar la caída de un objeto, un científico suele considerar como variables principales la ___ y la ___."

respuesta: datos[escenario_idx][1]

explicacion: |
  Los modelos requieren la selección de variables clave. En el caso de la caída libre, la masa y la gravedad son determinantes para predecir la aceleración.
```

### 4 — El proceso de validación

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["validación", "ciclo_cientifico"]

tipo: ordenar
opciones_explicitas: ["Observación del fenómeno", "Construcción del modelo", "Prueba del modelo con datos reales", "Ajuste del modelo según resultados"]

enunciado: "Ordene los pasos lógicos para el uso y refinamiento de un modelo científico:"

respuesta_orden: ["Observación del fenómeno", "Construcción del modelo", "Prueba del modelo con datos reales", "Ajuste del modelo según resultados"]

explicacion: |
  El proceso científico es cíclico: se observa, se propone un modelo, se pone a prueba y, si los resultados no coinciden con la realidad, el modelo se ajusta o se descarta.
```

### 5 — Predicción vs. Explicación

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "avanzado"
  tags: ["prediccion", "explicacion"]

tipo: mc
opciones_explicitas: ["Un modelo solo sirve para explicar el pasado.", "Un modelo puede ser usado para explicar mecanismos y predecir resultados futuros.", "Los modelos científicos son verdades absolutas e inmutables.", "Un modelo solo es válido si es visual y no matemático."]

enunciado: "¿Cuál es una de las funciones fundamentales de un modelo científico bien construido?"

respuesta: "Un modelo puede ser usado para explicar mecanismos y predecir resultados futuros."

explicacion: |
  La capacidad predictiva es el estándar de oro de un modelo: si el modelo predice correctamente lo que sucederá bajo ciertas condiciones, su valor científico aumenta.
```

### 6 — El modelo de la caída libre

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["modelo", "representacion", "fisica"]

variables:
  datos: [["un objeto cae desde una torre", "caída libre"], ["una pelota es lanzada hacia arriba", "lanzamiento vertical"], ["una gota de lluvia cae al suelo", "caída de gota"]]
  idx: uno_de([0,1,2])
  escenario: datos[idx][0]

enunciado: "Para estudiar el movimiento de {escenario}, los científicos utilizan un modelo de 'caída libre'. Este modelo es una representación que:"

opciones_explicitas: ["Simplifica la realidad ignorando la resistencia del aire", "Es una copia exacta y perfecta de la realidad", "Es un fenómeno que no se puede representar"]

respuesta: "Simplifica la realidad ignorando la resistencia del aire"
tipo: mc

explicacion: |
  Un modelo científico no es la realidad misma, sino una simplificación que permite aislar las variables más importantes (en este caso, la gravedad) para realizar predicciones precisas.
```

### 7 — Componentes de un modelo

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["elementos", "modelo"]

variables:
  caso: uno_de([["el clima de una ciudad", "clima"], ["el crecimiento de una población de bacterias", "población"], ["el flujo de agua en un río", "río"]])

enunciado: "Al construir un modelo para representar {caso[0]}, es necesario definir variables. Si queremos predecir el comportamiento del sistema, la capacidad de un modelo para decirnos qué pasará en el futuro se denomina:"

opciones_explicitas: ["Capacidad predictiva", "Capacidad descriptiva", "Capacidad de observación"]

respuesta: "Capacidad predictiva"
tipo: mc

explicacion: |
  La utilidad principal de un modelo científico es su poder predictivo: si el modelo es válido, los resultados que arroja deben coincidir con lo que ocurre en la realidad bajo las mismas condiciones.
```

### 8 — Pasos del método de modelado

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

enunciado: "Para desarrollar un modelo científico sobre el efecto de un fertilizante en el crecimiento de una planta, se deben seguir estos pasos en orden lógico:"

opciones_explicitas: ["Observar el fenómeno y plantear una pregunta", "Construir el modelo matemático o conceptual", "Realar experimentos para validar el modelo", "Ajustar el modelo según los resultados obtenidos"]

respuesta_orden: ["Observar el fenómeno y plantear una pregunta", "Construir el modelo matemático o conceptual", "Realar experimentos para validar el modelo", "Ajustar el modelo según los resultados obtenidos"]
tipo: ordenar

explicacion: |
  El proceso de modelado es iterativo. Comienza con la observación, sigue con la creación de una representación, se pone a prueba mediante la experimentación y se refina si los datos no coinciden.
```

### 9 — Veracidad de un modelo

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["validación", "verdad"]

enunciado: "Si un modelo científico predice que la temperatura subirá 2 grados mañana, pero la temperatura sube 10 grados, ¿el modelo ha sido validado?"

respuesta: falso
tipo: vf

explicacion: |
  Un modelo se valida cuando sus predicciones coinciden con las observaciones empíricas. Si hay una discrepancia significativa, el modelo debe ser revisado o descartado.
```

### 10 — El modelo de la estructura atómica

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "avanzado"
  tags: ["historia", "modelos"]

enunciado: "El modelo atómico de Bohr representa al átomo como un sistema solar en miniatura, donde los electrones orbitan el núcleo en trayectorias circulares fijas. En este modelo, la variable que determina el nivel de energía del electrón es la ___."

respuestas_validas:
  - "distancia al núcleo"
  - "carga del núcleo"
  - "velocidad orbital"

respuesta: "distancia al núcleo"
tipo: completar

explicacion: |
  En el modelo de Bohr, la posición (distancia) de los electrones respecto al núcleo está cuantizada y define los niveles de energía permitidos.
```

### 11 — El propósito de un modelo

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["epistemologia", "metodologia"]

tipo: mc
opciones_explicitas: ["Representar la realidad de forma exacta y completa", "Crear una versión simplificada para explicar o predecir fenómenos", "Sustituir definitivamente a la realidad para evitar experimentos", "Demostrar que una teoría es una verdad absoluta e inmutable"]

enunciado: "Un error común al trabajar con modelos científicos es creer que su objetivo es ser una representación exacta de la realidad. ¿Cuál es la función principal de un modelo?"

respuesta: "Crear una versión simplificada para explicar o predecir fenómenos"

explicacion: |
  Un modelo es, por definición, una simplificación. Si fuera igual a la realidad en todos sus detalles, sería tan complejo como la realidad misma y perdería su utilidad para explicar o predecir fenómenos específicos.
```

### 12 — La validez de un modelo

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["limitaciones", "validez"]

tipo: vf
respuesta: falso

enunciado: "Si un modelo científico ha sido utilizado con éxito para predecir un fenómeno en un rango de condiciones determinado, esto significa que el modelo es una representación perfecta y universal de la realidad."

explicacion: |
  Falso. Los modelos tienen un "dominio de validez". Un modelo puede ser excelente para predecir el movimiento de un gas a presión constante, pero fallar completamente si la presión cambia drásticamente.
```

### 13 — Componentes de un modelo

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["variables", "simplificacion"]

variables:
  escenario: uno_de([["Temperatura", "Presión", "Volumen"], ["Velocidad", "Aceleración", "Fuerza"], ["Concentración", "Molaridad", "Solvente"]])

tipo: completar
respuestas_validas:
  - "Temperatura"
  - "Presión"
  - "Volumen"
  - "Velocidad"
  - "Aceleración"
  - "Fuerza"
  - "Concentración"
  - "Molaridad"
  - "Solvente"

enunciado: "Al construir un modelo para estudiar el comportamiento de un gas ideal, el científico debe seleccionar ciertas variables críticas. Si decidimos ignorar la variable {escenario[0]}, estamos realizando una simplificación para enfocarnos en la relación entre {escenario[1]} y {escenario[2]}."

respuesta: "Presión"

explicacion: |
  La simplificación implica elegir qué variables incluir (variables independientes/dependientes) y cuáles omitir (variables controladas o ignoradas) para reducir la complejidad del sistema.
```

### 14 — El proceso de modelización

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

tipo: ordenar
opciones_explicitas: ["Observación del fenómeno", "Construcción del modelo simplificado", "Puesta a prueba mediante predicciones", "Refinamiento o descarte del modelo"]

enunciado: "Ordena los pasos lógicos en el proceso de construcción y uso de un modelo científico para resolver un problema de investigación:"

respuesta_orden: ["Observación del fenómeno", "Construcción del modelo simplificado", "Puesta a prueba mediante predicciones", "Refinamiento o descarte del modelo"]

explicacion: |
  El ciclo científico comienza con la observación, sigue con la creación de una representación (modelo), se utiliza para predecir resultados y, finalmente, los datos experimentales permiten ajustar el modelo o descartarlo si no funciona.
```

### 15 — Error de interpretación

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "avanzado"
  tags: ["error_conceptual", "prediccion"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si un modelo predice que el valor de una variable será 10.5, pero el experimento arroja 10.7, ¿el modelo es necesariamente falso?"

respuesta: 10.7

explicacion: |
  No necesariamente. En ciencia, los modelos suelen tener un margen de error debido a las simplificaciones realizadas. La discrepancia puede deberse a la incertidumbre de las mediciones o a que el modelo es una aproximación útil pero no exacta.
```

### 16 — Modelo vs. Realidad

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["epistemologia", "metodologia"]

respuesta: "representacion"
tipo: "completar"
respuestas_validas:
  - "representacion"
  - "representación"

enunciado: "A diferencia de la realidad física completa, un modelo científico es una ___ simplificada de la misma que permite estudiar un fenómeno específico."

explicacion: |
  Un modelo no es la realidad, sino una abstracción o representación que selecciona solo las variables relevantes para un propósito determinado.
```

### 17 — Propósito de un modelo

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["propiedades", "utilidad"]

variables:
  escenario: uno_de([["predecir", "explicar"], ["describir", "observar"]])

respuesta: escenario[0]
tipo: "mc"
opciones_explicitas: ["predecir", "describir", "observar", "repetir"]

enunciado: "Una de las funciones principales de un modelo científico es la capacidad de {escenario[1]} fenómenos futuros, diferenciándose de la simple observación pasiva."

explicacion: |
  Mientras que la observación describe lo que ocurre, el modelo busca capturar la lógica del sistema para poder predecir comportamientos futuros.
```

### 18 — Validez de un modelo

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["falsacion", "metodologia"]

respuesta: falso
tipo: "vf"

enunciado: "Si un modelo científico es capaz de representar fielmente un fenómeno en un experimento controlado, esto significa que el modelo es una copia exacta de la realidad."

explicacion: |
  Falso. Todo modelo es, por definición, una simplificación. Si fuera una copia exacta, sería tan complejo como la realidad misma y perdería su utilidad predictiva.
```

### 19 — El proceso de modelado

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

respuesta_orden: ["Observación", "Construcción", "Validación", "Refinamiento"]
tipo: "ordenar"
opciones_explicitas: ["Observación", "Construcción", "Validación", "Refinamiento"]

enunciado: "Ordena las etapas lógicas para el desarrollo y uso de un modelo científico:"

explicacion: |
  El proceso comienza con la observación del fenómeno, sigue con la construcción del modelo, luego se valida contra la realidad y finalmente se refina si hay discrepancias.
```

### 20 — Modelos vs. Teorías

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "avanzado"
  tags: ["epistemologia", "conceptos"]

variables:
  caso: uno_de([["el modelo es una herramienta para aplicar una teoría", "la teoría es un modelo simplificado"], ["el modelo es una generalización, la teoría es una herramienta", "la teoría es una generalización, el modelo es una herramienta"]])

respuesta: "la teoría es un modelo simplificado"
tipo: "mc"
opciones_explicitas: ["el modelo es una herramienta para aplicar una teoría", "la teoría es un modelo simplificado", "son conceptos idénticos", "el modelo es una ley universal"]

enunciado: "En el marco del método científico, se distingue que {caso[1]}."

explicacion: |
  La teoría es un marco explicativo general, mientras que el modelo es una representación específica y simplificada que permite operacionalizar esa teoría para estudiar un fenómeno concreto.
```

### 21 — El modelo de la caída libre

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["modelo", "simulacion", "fisica"]

variables:
  datos: [["Un objeto cae desde 10m", "6.38"], ["Un objeto cae desde 20m", "6.38"], ["Un objeto cae desde 5m", "6.38"]]
  idx: uno_de([0, 1, 2])

enunciado: "Para estudiar el movimiento, usamos un modelo que ignora la resistencia del aire. Si el objeto se lanza desde {datos[idx][0]}, el tiempo estimado de caída es de ___ segundos."

respuestas_validas:
  - "6.38"
tipo: completar

explicacion: |
  Un modelo científico simplifica la realidad al omitir variables complejas (como el viento) para facilitar la predicción matemática.
```

### 22 — ¿Es un modelo científico?

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

### 23 — Utilidad de los modelos

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["utilidad", "limitaciones"]

variables:
  datos: [["predecir el clima", "predecir"], ["explicar la evolución", "explicar"], ["entender la estructura atómica", "explicar"]]
  idx: uno_de([0, 1, 2])

enunciado: "El propósito principal de un modelo científico es {datos[idx][0]}. Por lo tanto, un modelo sirve para ___ fenómenos."

opciones_explicitas: ["predecir", "explicar", "ambos"]
respuesta: "ambos"
tipo: mc

explicacion: |
  Los modelos tienen una doble función: explicar por qué ocurre algo y predecir qué ocurrirá en condiciones similares.
```

### 24 — Pasos del método de modelado

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

opciones_explicitas: ["Observar el fenómeno", "Construir el modelo", "Validar con datos reales"]
respuesta_orden: ["Observar el fenómeno", "Construir el modelo", "Validar con datos reales"]
tipo: ordenar

enunciado: "Para desarrollar un modelo científico riguroso, se deben seguir estos pasos en orden:"

explicacion: |
  Primero se identifica el fenómeno (observación), luego se crea la representación (construcción) y finalmente se comprueba si coincide con la realidad (validación).
```

### 25 — Limitaciones del modelo

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "avanzado"
  tags: ["error", "precisión"]

variables:
  datos: [["el modelo es demasiado simple", "error_simplificacion"], ["el modelo es demasiado complejo", "error_complejidad"]]
  idx: uno_de([0, 1])

enunciado: "Si un modelo matemático predice que un objeto caerá en 2 segundos, pero en el experimento real tarda 5 segundos debido a la fricción del aire (que el modelo ignoró), decimos que el modelo tiene un error de ___."

opciones_explicitas: ["error_simplificacion", "error_complejidad", "error_medicion"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Al omitir variables relevantes para simplificar el cálculo, el modelo pierde precisión frente a la realidad, lo que se conoce como error por simplificación.
```
