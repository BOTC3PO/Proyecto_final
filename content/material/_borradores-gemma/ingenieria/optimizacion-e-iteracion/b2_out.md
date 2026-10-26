### 1 — Proceso de optimización iterativo
```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "basico"
  tags: ["metodologia", "ciclos"]

respuesta: "converger"
tipo: "completar"
respuestas_validas: ["converger", "convergencia"]

enunciado: "En un proceso de optimización iterativo, el objetivo es realizar ajustes sucesivos en las variables de diseño para que la función objetivo logre ___ hacia un valor óptimo."

explicacion: |
  La optimización iterativa busca reducir el error o la diferencia entre la solución actual y la solución óptima. Cuando la diferencia se vuelve despreciable, decimos que el algoritmo ha convergido.
```

### 2 — Evaluación de la mejora en el ensayo
```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["evaluacion", "error"]

variables:
  idx: uno_de([0, 1])
  escenario: [[0.85, "mejora"], [0.98, "mejora"]]

respuesta: escenario[idx][1]
tipo: "mc"
opciones_explicitas: ["mejora", "empeoramiento", "sin cambios"]

enunciado: "Se realiza un ensayo de diseño. El valor de la función objetivo en la iteración $n$ es $f(x_n) = 100$ y en la iteración $n+1$ es $f(x_{n+1}) = 85$. Si el objetivo es minimizar la función, el resultado del ensayo representa una ___."

explicacion: |
  Al pasar de 100 a 85 en un problema de minimización, el valor de la función ha disminuido, lo que indica que la iteración ha sido exitosa en mejorar la solución.
```

### 3 — Criterio de parada
```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["criterio_parada", "convergencia"]

respuesta: verdadero
tipo: "vf"

enunciado: "Si la diferencia absoluta entre la solución actual $x_{i}$ y la solución de la iteración anterior $x_{i-1}$ es menor que una tolerancia $\epsilon$ predefinida, se considera que se ha cumplido el criterio de parada por convergencia."

explicacion: |
  El criterio de parada es fundamental para evitar ciclos infinitos. Cuando el cambio entre iteraciones es menor que la tolerancia, se asume que el algoritmo ha encontrado un punto estable.
```

### 4 — Ciclo de optimización de un proceso
```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "basico"
  tags: ["secuencia", "pasos"]

respuesta: ["Definir objetivo", "Ejecutar ensayo", "Analizar error", "Ajustar parámetros"]
tipo: "ordenar"
opciones_explicitas: ["Definir objetivo", "Ejecutar ensayo", "Analizar error", "Ajustar parámetros"]

enunciado: "Ordene los pasos lógicos para un ciclo de optimización industrial basado en ensayos experimentales:"

explicacion: |
  El proceso comienza con la definición de qué se quiere optimizar, luego se realiza el ensayo físico o numérico, se evalúa la desviación respecto al objetivo y, finalmente, se modifican los parámetros para la siguiente iteración.
```

### 5 — Cálculo de error relativo
```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "avanzado"
  tags: ["calculo", "error"]

variables:
  idx: uno_de([0, 1])
  datos: [[10.5, 10.0], [5.0, 4.8]]

respuesta: datos[idx][0]

enunciado: "En la iteración actual, el valor óptimo estimado es {datos[idx][0]} y el valor obtenido en el ensayo es {datos[idx][1]}. Calcule el error absoluto de la iteración (asumiendo error = |valor_estimado - valor_obtenido|)."
tipo: "input"
tolerancia_abs: 0.001

explicacion: |
  El error absoluto mide la magnitud de la desviación. En este caso, el resultado es la diferencia absoluta entre el valor de referencia y el obtenido en el ensayo.
```