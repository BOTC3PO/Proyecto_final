### 1 — Correlación vs Causalidad
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

### 2 — Significancia Estadística vs Relevancia Práctica
```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "avanzado"
  tags: ["p-valor", "significancia", "relevancia"]

variables:
  escenario: uno_de([
    ["Un estudio con n=100000 muestra que un fármaco reduce el dolor en 0.1 segundos con p < 0.001.", "falso"],
    ["Un estudio con n=20 muestra que un fármaco reduce el dolor en 2 horas con p = 0.08.", "falso"]
  ])

respuesta: escenario[1][1]
tipo: "vf"

enunciado: "En el escenario donde un resultado tiene una significancia estadística muy alta (p < 0.001) pero el efecto real es despreciable para el paciente, ¿es el resultado clínicamente relevante? {escenario[0][0]}"

explicacion: |
  La significancia estadística (p-valor) depende fuertemente del tamaño de la muestra. Con muestras muy grandes, diferencias minúsculas pueden ser estadísticamente significativas pero carecer de importancia en el mundo real (relevancia práctica).
```

### 3 — Media vs Mediana en Distribuciones Sesgadas
```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["medidas_tendencia", "sesgo", "distribucion"]

variables:
  distribucion: uno_de([
    ["simétrica", "media"],
    ["sesgada a la derecha", "mediana"]
  ])

respuesta: "mediana"
tipo: "completar"
respuestas_validas: ["media", "mediana"]

enunciado: "En una distribución de datos con un sesgo positivo marcado (cola larga a la derecha), la medida de tendencia central que mejor representa el centro de los datos sin verse afectada por los valores extremos es la ___."

explicacion: |
  La media es sensible a los valores atípicos (outliers), mientras que la mediana es una medida robusta que solo depende de la posición de los datos, siendo preferible en distribuciones no simétricas.
```

### 4 — Error Tipo I vs Error Tipo II
```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "avanzado"
  tags: ["hipotesis", "error_tipo_i", "error_tipo_ii"]

variables:
  caso: uno_de([
    ["Rechazar la hipótesis nula cuando es verdadera", "falso"],
    ["No rechazar la hipótesis nula cuando es falsa", "verdadero"]
  ])

respuesta: caso[0][1]
tipo: "vf"

enunciado: "El Error Tipo I se define como el acto de ___? {caso[0][0]}"

explicacion: |
  El Error Tipo I (falso positivo) ocurre cuando se rechaza una hipótesis nula que es verdadera. El Error Tipo II (falso negativo) ocurre cuando no se rechaza una hipótesis nula que es falsa.
```

### 5 — Análisis Univariado vs Multivariado
```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["análisis", "univariado", "multivariado"]

respuesta: ["Análisis Univariado", "Análisis Bivariado", "Análisis Multivariado"]
tipo: "ordenar"
opciones_explicitas: ["Análisis Univariado", "Análisis Bivariado", "Análisis Multivariado"]

enunciado: "Ordene los niveles de complejidad del análisis estadístico, desde el estudio de una sola variable hasta el estudio de múltiples variables simultáneamente:"

explicacion: |
  El análisis univariado describe una variable; el bivariado examina la relación entre dos; y el multivariado analiza la relación entre tres o más variables, permitiendo controlar efectos de confusión.
```