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
respuestas_validas: ["masa", "gravedad", "presión", "temperatura"]

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

respuesta: ["Observación del fenómeno", "Construcción del modelo", "Prueba del modelo con datos reales", "Ajuste del modelo según resultados"]

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