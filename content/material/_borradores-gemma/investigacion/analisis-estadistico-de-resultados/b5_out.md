### 1 — Interpretación de la Mediana
```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["mediana", "tendencia_central"]

variables:
  escenario: uno_de([[10, 12, 15, 18, 20], [5, 8, 10, 12, 50], [100, 110, 120, 130, 140]])
  idx: uno_de([0, 1, 2])
  datos: escenario[idx][0]
  mediana_correcta: escenario[idx][1]

respuesta: mediana_correcta
tipo: input
tolerancia_abs: 0

enunciado: "Se realizó un estudio sobre el tiempo de respuesta (en segundos) de tres grupos de usuarios. Los datos recolectados para el grupo seleccionado son: {datos}. Calcule la mediana de este conjunto de datos."

pasos:
  - "Ordene los datos de menor a mayor (ya están ordenados en este caso)."
  - "Identifique el valor que ocupa la posición central del conjunto."

explicacion: |
  La mediana es el valor central de un conjunto de datos ordenados. En el caso seleccionado, el valor central de {datos} es {mediana_correcta}.
```

### 2 — Identificación de Outliers
```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["outliers", "desviacion"]

variables:
  escenario: uno_de([[10, 10, 11, 12, 100], [50, 52, 48, 51, 49], [20, 21, 19, 20, 22]])
  idx: uno_de([0, 1, 2])
  datos: escenario[idx][0]
  es_outlier: escenario[idx][1]

respuesta: es_outlier
tipo: vf

enunciado: "Al analizar el conjunto de datos {datos}, ¿se observa la presencia de un valor atípico (outlier) que afecte significativamente la media aritmética?"

explicacion: |
  En el conjunto {datos}, el valor {escenario[idx][1] == verdadero ? "presente" : "ausente"} indica si hay un outlier. En el caso seleccionado, la respuesta es {es_outlier}.
```

### 3 — Interpretación de la Desviación Estándar
```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["desviacion_estandar", "dispersion"]

variables:
  escenario: uno_de([["baja", "alta"], ["alta", "baja"], ["baja", "baja"]])
  idx: uno_de([0, 1, 2])
  tipo_dispersion: escenario[idx][0]
  valor_esperado: escenario[idx][1]

respuesta: valor_esperado
tipo: mc
opciones_explicitas: ["baja", "alta"]

enunciado: "Si un experimento presenta una desviación estándar muy cercana a cero respecto a la media, ¿cómo se describe la dispersión de los datos recolectados?"

explicacion: |
  Una desviación estándar cercana a cero indica que los datos están muy agrupados alrededor de la media, por lo tanto, la dispersión es {valor_esperado}.
```

### 4 — Secuencia de Procesamiento de Datos
```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

respuesta: ["Recolección", "Limpieza", "Análisis", "Interpretación"]
tipo: ordenar
opciones_explicitas: ["Recolección", "Limpieza", "Análisis", "Interpretación"]

enunciado: "Ordene cronológicamente las fases del tratamiento de datos en una investigación científica, desde la obtención hasta la obtención de conclusiones."

explicacion: |
  El proceso riguroso requiere primero la Recolección, luego la Limpieza (manejo de errores/nulos), después el Análisis estadístico y finalmente la Interpretación de resultados.
```

### 5 — Completar Concepto de Correlación
```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "avanzado"
  tags: ["correlacion", "causalidad"]

variables:
  escenario: uno_de([["correlación", "causalidad"], ["causalidad", "correlación"], ["correlación", "significancia"]])
  idx: uno_de([0, 1, 2])
  term1: escenario[idx][0]
  term2: escenario[idx][1]

respuesta: term2
tipo: completar
respuestas_validas: ["causalidad", "correlación", "significancia"]

enunciado: "Es un error común en la investigación afirmar que existe una ___ entre dos variables basándose únicamente en que presentan una ___ estadística."

explicacion: |
  Es fundamental recordar que la existencia de una {term1} no implica necesariamente una {term2}.
```