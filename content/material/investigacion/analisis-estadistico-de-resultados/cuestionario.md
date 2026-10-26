# Investigacion — Analisis estadistico de resultados (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Medida de Tendencia Central

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["vocabulario", "estadistica"]

respuesta: "promedio"
tipo: completar
respuestas_validas:
  - "promedio"
  - "media"
  - "media_aritmetica"

enunciado: "El valor que representa el centro de un conjunto de datos numéricos, calculado sumando todos los valores y dividiendo por la cantidad de ellos, se conoce como ___."

explicacion: |
  El promedio (o media aritmética) es la medida de tendencia central más utilizada para resumir un conjunto de datos en un solo valor representativo.
```

### 2 — Interpretación de la Dispersión

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["desviacion", "variabilidad"]

respuesta: "alta"
tipo: mc
opciones_explicitas: ["baja", "alta"]

enunciado: "Si observamos un conjunto de datos donde los valores están muy alejados de la media, la variabilidad o desviación estándar se considera de magnitud ___."

explicacion: |
  Una desviación estándar alta indica que los datos están muy dispersos respecto a la media, mientras que una baja indica que los datos están agrupados cerca del promedio.
```

### 3 — Veracidad de la Mediana

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["mediana", "ordenamiento"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que la mediana es el valor que ocupa la posición central cuando los datos están ordenados de menor a mayor?"

explicacion: |
  Correcto. La mediana divide la distribución en dos partes iguales, con el 50% de los datos por debajo y el 50% por encima.
```

### 4 — Secuencia del Análisis Descriptivo

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

respuesta_orden: ["recoleccion", "limpieza", "calculo", "interpretacion"]
tipo: ordenar
opciones_explicitas: ["recoleccion", "limpieza", "calculo", "interpretacion"]

enunciado: "Ordene cronológicamente los pasos lógicos para realizar un análisis estadístico riguroso de los resultados obtenidos en una investigación:"

explicacion: |
  Primero se recolectan los datos, luego se limpian (eliminando errores), se realizan los cálculos estadísticos y finalmente se interpretan los resultados.
```

### 5 — Identificación de la Moda

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["moda", "frecuencia"]

respuesta: "frecuencia"
tipo: completar
respuestas_validas:
  - "frecuencia"

enunciado: "La moda se define como el valor que presenta la mayor ___ dentro de un conjunto de datos."

explicacion: |
  La moda es el valor que más veces se repite en una muestra o población.
```

### 6 — Interpretación de la Mediana

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["descriptiva", "mediana"]

variables:
  datos: [[12, 15, 15, 18, 22, 25, 40]]
  idx: uno_de([0])

respuesta: "18"
tipo: mc
opciones_explicitas: ["15", "18", "22", "25"]

enunciado: "En un estudio sobre tiempos de reacción (en ms) de un grupo de sujetos, se obtuvieron los siguientes valores: {datos[idx]}. ¿Cuál es la mediana de este conjunto de datos?"

explicacion: |
  Para hallar la mediana, primero ordenamos los datos (ya están ordenados en este caso). Como el número de elementos es impar (n=7), la mediana es el valor central, que ocupa la posición (7+1)/2 = 4. El cuarto valor es 18.
```

### 7 — Desviación Estándar y Dispersión

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

### 8 — Análisis de Errores en Medición

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "avanzado"
  tags: ["error_medicion", "precision"]

variables:
  valor_real: 50.0
  mediciones: [49.8, 50.1, 49.9, 50.2, 50.0]

respuesta: 0.12
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un investigador realiza mediciones de una constante física. El valor real es {valor_real} y sus mediciones son {mediciones}. Calcule el error absoluto promedio de las mediciones respecto al valor real (sin considerar el signo)."

pasos:
  - "Calcular la diferencia absoluta de cada medición respecto al valor real."
  - "Sumar esos valores absolutos."
  - "Dividir el resultado por el número total de mediciones."

explicacion: |
  El error absoluto promedio se calcula como: (|49.8-50| + |50.1-50| + |49.9-50| + |50.2-50| + |50.0-50|) / 5 = (0.2 + 0.1 + 0.1 + 0.2 + 0) / 5 = 0.6 / 5 = 0.12.
```

### 9 — Secuencia de Procesamiento de Datos

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

respuesta_orden: ["Recolección de datos", "Limpieza de datos", "Cálculo de estadísticos", "Interpretación de resultados"]
tipo: ordenar
opciones_explicitas: ["Recolección de datos", "Limpieza de datos", "Cálculo de estadísticos", "Interpretación de resultados"]

enunciado: "Ordene cronológicamente las etapas lógicas para realizar un análisis estadístico riguroso tras una investigación de campo."

explicacion: |
  Primero se obtienen los datos (recolección), luego se eliminan errores o valores atípicos (limpieza), después se aplican las fórmulas (cálculo) y finalmente se extraen conclusiones (interpretación).
```

### 10 — Identificación de la Moda

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["moda", "frecuencia"]

variables:
  frecuencias: [5, 10, 8, 12, 3]
  categorias: ["A", "B", "C", "D", "E"]

respuesta: "D"
tipo: completar
respuestas_validas:
  - "D"

enunciado: "En un estudio de preferencias de consumo, las frecuencias de las categorías son {frecuencias}. La categoría que presenta la mayor frecuencia (la moda) es la categoría ___."

explicacion: |
  Observando el array de frecuencias, el valor máximo es 12, que corresponde a la categoría D (índice 3).
```

### 11 — Correlación vs Causalidad

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["errores_comunes", "correlacion", "causalidad"]

respuesta: falso
tipo: vf

enunciado: "Si se encuentra una correlación estadísticamente significativa entre el consumo de helado y la incidencia de quemaduras solares, se puede afirmar que el consumo de helado causa las quemaduras."

explicacion: |
  La correlación indica que dos variables se mueven juntas, pero no implica causalidad. En este caso, una tercera variable (el calor/sol) causa ambas.
```

### 12 — Interpretación del P-valor

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "avanzado"
  tags: ["p-valor", "significancia", "errores_interpretacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[0.03, "rechazar"], [0.07, "no rechazar"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["rechazar", "no rechazar"]

enunciado: "En un estudio con un nivel de significancia $\\alpha = 0.05$, se obtiene un p-valor de {escenarios[escenario_idx][0]}. Por lo tanto, la decisión estadística es ___ la hipótesis nula."

pasos:
  - "Comparar el p-valor obtenido con el nivel de significancia $\\alpha$."
  - "Si p-valor < $\\alpha$, se rechaza la hipótesis nula."
  - "Si p-valor $\\ge$ $\\alpha$, no se rechaza la hipótesis nula."

explicacion: |
  El p-valor representa la probabilidad de observar los resultados obtenidos (o más extremos) asumiendo que la hipótesis nula es cierta.
```

### 13 — Sesgo de Selección

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["sesgo", "muestreo", "validez"]

respuesta: "sesgo de selección"
tipo: completar
respuestas_validas:
  - "sesgo de selección"

enunciado: "Cuando la muestra recolectada no es representativa de la población objetivo debido a un error en el proceso de muestreo, se ha incurrido en un ___."

explicacion: |
  El sesgo de selección invalida la generalización de los resultados, ya que la muestra no refleja la diversidad de la población real.
```

### 14 — Error Tipo I vs Error Tipo II

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "avanzado"
  tags: ["error_tipo_i", "error_tipo_ii", "hipotesis"]

respuesta: "Error Tipo I"
tipo: mc
opciones_explicitas: ["Error Tipo I", "Error Tipo II", "Error de medición"]

enunciado: "Un investigador concluye que un nuevo medicamento es efectivo cuando, en realidad, no tiene ningún efecto terapéutico. Este error se denomina:"

explicacion: |
  El Error Tipo I (falso positivo) ocurre cuando se rechaza una hipótesis nula que es verdadera.
```

### 15 — Secuencia del Análisis de Datos

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["metodologia", "proceso", "orden"]

respuesta_orden: ["Limpieza de datos", "Análisis descriptivo", "Pruebas de hipótesis", "Interpretación de resultados"]
tipo: ordenar
opciones_explicitas: ["Limpieza de datos", "Análisis descriptivo", "Pruebas de hipótesis", "Interpretación de resultados"]

enunciado: "Ordene las etapas del análisis de resultados de forma lógica para asegurar el rigor científico:"

explicacion: |
  Primero se deben tratar los datos brutos (limpieza), luego entender su distribución (descriptivo), aplicar modelos estadísticos (inferencia) y finalmente dar sentido a los hallazgos.
```

### 16 — Correlación vs Causalidad

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["correlacion", "causalidad", "metodologia"]

respuesta: "causalidad"
tipo: "mc"
opciones_explicitas: ["correlacion", "causalidad", "coincidencia", "varianza"]

enunciado: "Mientras que la correlación indica que dos variables cambian de forma conjunta, la ___ implica que el cambio en una variable es la causa directa del cambio en la otra."

explicacion: |
  Es un error común en investigación asumir que porque dos variables están correlacionadas, una causa a la otra. La causalidad requiere evidencia de temporalidad y control de variables de confusión.
```

### 17 — Significancia Estadística vs Relevancia Práctica

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "avanzado"
  tags: ["p-valor", "significancia", "relevancia"]

respuesta: falso
tipo: "vf"

enunciado: "Un estudio con n=100000 muestra que un fármaco reduce el dolor en 0.1 segundos con p < 0.001. Dado que el resultado tiene una significancia estadística muy alta pero el efecto real es despreciable para el paciente, ¿es el resultado clínicamente relevante?"

explicacion: |
  La significancia estadística (p-valor) depende fuertemente del tamaño de la muestra. Con muestras muy grandes, diferencias minúsculas pueden ser estadísticamente significativas pero carecer de importancia en el mundo real (relevancia práctica).
```

### 18 — Media vs Mediana en Distribuciones Sesgadas

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["medidas_tendencia", "sesgo", "distribucion"]

variables:
  distribucion: uno_de([["simétrica", "media"], ["sesgada a la derecha", "mediana"]])

respuesta: "mediana"
tipo: "completar"
respuestas_validas:
  - "media"
  - "mediana"

enunciado: "En una distribución de datos con un sesgo positivo marcado (cola larga a la derecha), la medida de tendencia central que mejor representa el centro de los datos sin verse afectada por los valores extremos es la ___."

explicacion: |
  La media es sensible a los valores atípicos (outliers), mientras que la mediana es una medida robusta que solo depende de la posición de los datos, siendo preferible en distribuciones no simétricas.
```

### 19 — Error Tipo I vs Error Tipo II

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "avanzado"
  tags: ["hipotesis", "error_tipo_i", "error_tipo_ii"]

respuesta: verdadero
tipo: "vf"

enunciado: "El Error Tipo I se define como el acto de rechazar la hipótesis nula cuando en realidad es verdadera (falso positivo)."

explicacion: |
  El Error Tipo I (falso positivo) ocurre cuando se rechaza una hipótesis nula que es verdadera. El Error Tipo II (falso negativo) ocurre cuando no se rechaza una hipótesis nula que es falsa.
```

### 20 — Análisis Univariado vs Multivariado

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["análisis", "univariado", "multivariado"]

respuesta_orden: ["Análisis Univariado", "Análisis Bivariado", "Análisis Multivariado"]
tipo: "ordenar"
opciones_explicitas: ["Análisis Univariado", "Análisis Bivariado", "Análisis Multivariado"]

enunciado: "Ordene los niveles de complejidad del análisis estadístico, desde el estudio de una sola variable hasta el estudio de múltiples variables simultáneamente:"

explicacion: |
  El análisis univariado describe una variable; el bivariado examina la relación entre dos; y el multivariado analiza la relación entre tres o más variables, permitiendo controlar efectos de confusión.
```

### 21 — Interpretación de la Mediana

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["mediana", "tendencia_central"]

variables:
  datos: [[[10, 12, 15, 18, 20], 15], [[5, 8, 10, 12, 50], 10], [[100, 110, 120, 130, 140], 120]]
  idx: uno_de([0, 1, 2])
  mediana_correcta: datos[idx][1]

respuestas_validas:
  - mediana_correcta
respuesta: mediana_correcta
tipo: completar
tolerancia_abs: 0

enunciado: "Se realizó un estudio sobre el tiempo de respuesta (en segundos) de tres grupos de usuarios. Los datos recolectados para el grupo seleccionado son: {datos[idx][0]}. Calcule la mediana de este conjunto de datos."

pasos:
  - "Ordene los datos de menor a mayor (ya están ordenados en este caso)."
  - "Identifique el valor que ocupa la posición central del conjunto."

explicacion: |
  La mediana es el valor central de un conjunto de datos ordenados. En el caso seleccionado, el valor central de {datos[idx][0]} es {mediana_correcta}.
```

### 22 — Identificación de Outliers

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["outliers", "desviacion"]

variables:
  datos_escenario: [[[10, 10, 11, 12, 100], "sí"], [[50, 52, 48, 51, 49], "no"], [[20, 21, 19, 20, 22], "no"]]
  idx: uno_de([0, 1, 2])
  datos: datos_escenario[idx][0]
  es_outlier: datos_escenario[idx][1]

respuestas_validas:
  - "sí"
  - "no"
respuesta: es_outlier
tipo: completar
enunciado: "Al analizar el conjunto de datos {datos}, ¿se observa la presencia de un valor atípico (outlier) que afecte significativamente la media aritmética?"

explicacion: |
  En el conjunto {datos}, el valor {es_outlier} indica si hay un outlier. En el caso seleccionado, la respuesta es {es_outlier}.
```

### 23 — Interpretación de la Desviación Estándar

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["desviacion_estandar", "dispersion"]

respuesta: "baja"
tipo: mc
opciones_explicitas: ["baja", "alta"]

enunciado: "Si un experimento presenta una desviación estándar muy cercana a cero respecto a la media, ¿cómo se describe la dispersión de los datos recolectados?"

explicacion: |
  Una desviación estándar cercana a cero indica que los datos están muy agrupados alrededor de la media, por lo tanto, la dispersión es baja.
```

### 24 — Secuencia de Procesamiento de Datos

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

respuesta_orden: ["Recolección", "Limpieza", "Análisis", "Interpretación"]
tipo: ordenar
opciones_explicitas: ["Recolección", "Limpieza", "Análisis", "Interpretación"]

enunciado: "Ordene cronológicamente las fases del tratamiento de datos en una investigación científica, desde la obtención hasta la obtención de conclusiones."

explicacion: |
  El proceso riguroso requiere primero la Recolección, luego la Limpieza (manejo de errores/nulos), después el Análisis estadístico y finalmente la Interpretación de resultados.
```

### 25 — Completar Concepto de Correlación

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "avanzado"
  tags: ["correlacion", "causalidad"]

respuesta: "correlación"
tipo: completar
respuestas_validas:
  - "correlación"

enunciado: "Es un error común en la investigación afirmar que existe una causalidad entre dos variables basándose únicamente en que presentan una ___ estadística."

explicacion: |
  Es fundamental recordar que la existencia de una correlación no implica necesariamente una causalidad.
```
