### 1 — Caracterización de la medición
```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["medicion", "metrologia"]

respuesta: "precisión"
tipo: "completar"
respuestas_validas: ["precisión", "exactitud"]

enunciado: "En metrología, mientras que la exactitud se refiere a qué tan cerca está el valor medido del valor real, la ___ se refiere a la repetibilidad de las mediciones bajo las mismas condiciones."

explicacion: |
  La exactitud mide la ausencia de error sistemático (cercanía al valor real), mientras que la precisión mide la dispersión de los resultados (repetibilidad).
```

### 2 — Calibración vs Ajuste
```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["calibracion", "ajuste"]

variables:
  es_calibracion: uno_de([verdadero, falso])

respuesta: "calibracion"
tipo: "mc"
opciones_explicitas: ["calibracion", "ajuste", "estandarización", "mantenimiento"]

enunciado: "Si un ingeniero realiza una serie de mediciones con un sensor comparándolo con un patrón de referencia para determinar sus errores conocidos, está realizando una: {es_calibracion == verdadero ? 'calibración' : 'acción de ajuste' (nota: el sistema evaluará la lógica de la pregunta si fuera dinámica, pero aquí es fija para el usuario)}."

# Nota: Como la instrucción pide no usar ternarios en la respuesta pero sí en variables para el escenario, 
# reescribo para cumplir la regla de "no usar ternarios en la respuesta" y "usar variables para el escenario".

# Corrección para cumplir la regla de "No usar ternarios en la respuesta" y "No usar lógica en la respuesta":
# El enunciado debe ser estático o usar la variable ya sorteada.

# Re-diseño de la 2:
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["calibracion", "ajuste"]

variables:
  tipo_accion: uno_de(["calibracion", "ajuste"])

respuesta: "calibracion"
tipo: "mc"
opciones_explicitas: ["calibracion", "ajuste", "estandarización", "mantenimiento"]

enunciado: "El proceso de comparar un instrumento de medición contra un patrón de referencia para determinar la desviación es la {tipo_accion}."

explicacion: |
  La calibración establece la relación entre los valores indicados por el instrumento y los valores de un patrón. El ajuste es la acción de corregir el instrumento para que coincida con el patrón.
```

### 3 — Verdad o Falso: Incertidumbre
```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["incertidumbre", "medicion"]

respuesta: verdadero
tipo: "vf"

enunciado: "La incertidumbre de medida es un parámetro que cuantifica la dispersión de los valores que podrían ser atribuidos al objeto de medición."

explicacion: |
  Verdadero. A diferencia del error (que es una cantidad única), la incertidumbre describe el rango de duda razonable sobre el resultado de una medición.
```

### 4 — Secuencia de un ensayo controlado
```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["protocolo", "ensayo"]

respuesta: ["definir_variables", "preparar_prototipo", "ejecutar_ensayo", "analizar_datos"]
tipo: "ordenar"
opciones_explicitas: ["ejecutar_ensayo", "analizar_datos", "definir_variables", "preparar_prototipo"]

enunciado: "Ordene los pasos lógicos para llevar a cabo un ensayo de desempeño controlado en un prototipo:"

pasos:
  - "Establecer qué se va a medir (variables)."
  - "Configurar el equipo y el prototipo."
  - "Realizar las pruebas físicas."
  - "Procesar los resultados obtenidos."

explicacion: |
  Un ensayo sistemático requiere primero la planificación (definición), luego la preparación, la ejecución y finalmente el análisis de los datos recolectados.
```

### 5 — Sensibilidad vs Resolución
```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "avanzado"
  tags: ["sensibilidad", "resolucion"]

variables:
  es_sensibilidad: uno_de([verdadero, falso])

respuesta: "sensibilidad"
tipo: "mc"
opciones_explicitas: ["sensibilidad", "resolucion", "rango", "linealidad"]

enunciado: "Si un sensor detecta un cambio mínimo en la magnitud física que se está midiendo, estamos hablando de su {es_sensibilidad == verdadero ? 'sensibilidad' : 'resolución'} (Nota: el usuario debe elegir la correcta según el concepto)."

# Re-ajuste para evitar ternarios en el enunciado según reglas estrictas:

metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "avanzado"
  tags: ["sensibilidad", "resolucion"]

respuesta: "sensibilidad"
tipo: "mc"
opciones_explicitas: ["sensibilidad", "resolucion", "rango", "linealidad"]

enunciado: "La propiedad que describe la relación entre el cambio en la indicación del instrumento y el cambio en la magnitud medida es la ___."

explicacion: |
  La sensibilidad es la pendiente de la curva de calibración (cambio de salida / cambio de entrada). La resolución es el cambio más pequeño que el instrumento puede detectar y mostrar.
```