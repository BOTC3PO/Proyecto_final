### 1 — El propósito de un modelo
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

### 2 — La validez de un modelo
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

### 3 — Componentes de un modelo
```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["variables", "simplificacion"]

variables:
  escenario: uno_de([
    ["Temperatura", "Presión", "Volumen"],
    ["Velocidad", "Aceleración", "Fuerza"],
    ["Concentración", "Molaridad", "Solvente"]
  ])

tipo: completar
respuestas_validas: ["Temperatura", "Presión", "Volumen", "Velocidad", "Aceleración", "Fuerza", "Concentración", "Molaridad", "Solvente"]

enunciado: "Al construir un modelo para estudiar el comportamiento de un gas ideal, el científico debe seleccionar ciertas variables críticas. Si decidimos ignorar la variable {escenario[0]}, estamos realizando una simplificación para enfocarnos en la relación entre {escenario[1]} y {escenario[2]}."

respuesta: "Presión"

explicacion: |
  La simplificación implica elegir qué variables incluir (variables independientes/dependientes) y cuáles omitir (variables controladas o ignoradas) para reducir la complejidad del sistema.
```

### 4 — El proceso de modelización
```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

tipo: ordenar
opciones_explicitas: ["Observación del fenómeno", "Construcción del modelo simplificado", "Puesta a prueba mediante predicciones", "Refinamiento o descarte del modelo"]

enunciado: "Ordena los pasos lógicos en el proceso de construcción y uso de un modelo científico para resolver un problema de investigación:"

respuesta: ["Observación del fenómeno", "Construcción del modelo simplificado", "Puesta a prueba mediante predicciones", "Refinamiento o descarte del modelo"]

explicacion: |
  El ciclo científico comienza con la observación, sigue con la creación de una representación (modelo), se utiliza para predecir resultados y, finalmente, los datos experimentales permiten ajustar el modelo o descartarlo si no funciona.
```

### 5 — Error de interpretación
```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "avanzado"
  tags: ["error_conceptual", "prediccion"]

tipo: input
tolerancia_abs: 0

enunciado: "Si un modelo predice que el valor de una variable será 10.5, pero el experimento arroja 10.7, ¿el modelo es necesariamente falso?"

respuesta: 10.7

explicacion: |
  No necesariamente. En ciencia, los modelos suelen tener un margen de error debido a las simplificaciones realizadas. La discrepancia puede deberse a la incertidumbre de las mediciones o a que el modelo es una aproximación útil pero no exacta.
```