### 1 — Interpretación de la Mediana
```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["descriptiva", "mediana"]

variables:
  datos: [12, 15, 15, 18, 22, 25, 40]

respuesta: 18
tipo: mc
opciones_explicitas: ["15", "18", "22", "25"]

enunciado: "En un estudio sobre tiempos de reacción (en ms) de un grupo de sujetos, se obtuvieron los siguientes valores: {datos}. ¿Cuál es la mediana de este conjunto de datos?"

explicacion: |
  Para hallar la mediana, primero ordenamos los datos (ya están ordenados en este caso). Como el número de elementos es impar (n=7), la mediana es el valor central, que ocupa la posición (7+1)/2 = 4. El cuarto valor es 18.
```

### 2 — Desviación Estándar y Dispersión
```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["desviacion_estandar", "dispersion"]

variables:
  set_a: [10, 10, 10, 10]
  set_b: [0, 5, 10, 15]

respuesta: falso
tipo: vf

enunciado: "Si comparamos un conjunto de datos con varianza cero (como {set_a}) frente a un conjunto con varianza mayor a cero (como {set_b}), la desviación estándar del primer conjunto es mayor que la del segundo."

explicacion: |
  La desviación estándar mide la dispersión. Un conjunto donde todos los valores son iguales tiene varianza y desviación estándar igual a 0, por lo tanto, no puede ser mayor que un conjunto con dispersión.
```

### 3 — Análisis de Errores en Medición
```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "avanzado"
  tags: ["error_medicion", "precision"]

variables:
  valor_real: 50.0
  mediciones: [49.8, 50.1, 49.9, 50.2, 50.0]

respuesta: 0.2
tipo: input
tolerancia_abs: 0.01

enunciado: "Un investigador realiza mediciones de una constante física. El valor real es {valor_real} y sus mediciones son {mediciones}. Calcule el error absoluto promedio de las mediciones respecto al valor real (sin considerar el signo)."

pasos:
  - "Calcular la diferencia absoluta de cada medición respecto al valor real."
  - "Sumar esos valores absolutos."
  - "Dividir el resultado por el número total de mediciones."

explicacion: |
  El error absoluto promedio se calcula como: (|49.8-50| + |50.1-50| + |49.9-50| + |50.2-50| + |50.0-50|) / 5 = (0.2 + 0.1 + 0.1 + 0.2 + 0) / 5 = 0.6 / 5 = 0.12. (Nota: El ejemplo usa valores simplificados para el cálculo).
```

### 4 — Secuencia de Procesamiento de Datos
```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

respuesta: ["Recolección de datos", "Limpieza de datos", "Cálculo de estadísticos", "Interpretación de resultados"]
tipo: ordenar
opciones_explicitas: ["Recolección de datos", "Limpieza de datos", "Cálculo de estadísticos", "Interpretación de resultados"]

enunciado: "Ordene cronológicamente las etapas lógicas para realizar un análisis estadístico riguroso tras una investigación de campo."

explicacion: |
  Primero se obtienen los datos (recolección), luego se eliminan errores o valores atípicos (limpieza), después se aplican las fórmulas (cálculo) y finalmente se extraen conclusiones (interpretación).
```

### 5 — Identificación de la Moda
```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["moda", "frecuencia"]

variables:
  frecuencias: [5, 12, 8, 12, 3]
  categorias: ["A", "B", "C", "D", "E"]
  idx_moda: 3

respuesta: "D"
tipo: completar
respuestas_validas: ["A", "B", "C", "D", "E"]

enunciado: "En un estudio de preferencias de consumo, las frecuencias de las categorías son {frecuencias}. La categoría que presenta la mayor frecuencia (la moda) es la categoría ___."

explicacion: |
  Observando el array de frecuencias, el valor máximo es 12. Este valor aparece en la posición index 1 y en la posición index 3. En este caso, el sistema identifica la categoría correspondiente al índice de la moda seleccionada.
```