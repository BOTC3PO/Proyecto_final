# Examen jefe — Dominio del Método Científico

> Logro #185. Completaste el examen integrando filosofía, modelado y análisis estadístico con criterio crítico. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **125 preguntas totales** en 5/5 secciones.

---

## Sección: analisis-estadistico-de-resultados (25 preguntas)

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["vocabulario", "estadistica"]

respuesta: "promedio"
tipo: completar
respuestas_validas: ["promedio", "media", "media_aritmetica"]

enunciado: "El valor que representa el centro de un conjunto de datos numéricos, calculado sumando todos los valores y dividiendo por la cantidad de ellos, se conoce como ___."

explicacion: |
  El promedio (o media aritmética) es la medida de tendencia central más utilizada para resumir un conjunto de datos en un solo valor representativo.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["desviacion", "variabilidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: uno_de([
    ["10", "11", "10", "11", "10"], 
    ["10", "20", "0", "30", "10"]
  ])
  desviacion_esperada: uno_de([
    "baja", 
    "alta"
  ])

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["baja", "alta"]

enunciado: "Si observamos un conjunto de datos donde los valores están muy alejados de la media, la variabilidad o desviación estándar se considera de magnitud ___."

explicacion: |
  Una desviación estándar alta indica que los datos están muy dispersos respecto a la media, mientras que una baja indica que los datos están agrupados cerca del promedio.
```

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

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

respuesta: ["recoleccion", "limpieza", "calculo", "interpretacion"]
tipo: ordenar
opciones_explicitas: ["recoleccion", "limpieza", "calculo", "interpretacion"]

enunciado: "Ordene cronológicamente los pasos lógicos para realizar un análisis estadístico riguroso de los resultados obtenidos en una investigación:"

explicacion: |
  Primero se recolectan los datos, luego se limpian (eliminando errores), se realizan los cálculos estadísticos y finalmente se interpretan los resultados.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["moda", "frecuencia"]

respuesta: "frecuencia"
tipo: completar
respuestas_validas: ["frecuencia"]

enunciado: "La moda se define como el valor que presenta la mayor ___ dentro de un conjunto de datos."

explicacion: |
  La moda es el valor que más veces se repite en una muestra o población.
```

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
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un investigador realiza mediciones de una constante física. El valor real es {valor_real} y sus mediciones son {mediciones}. Calcule el error absoluto promedio de las mediciones respecto al valor real (sin considerar el signo)."

pasos:
  - "Calcular la diferencia absoluta de cada medición respecto al valor real."
  - "Sumar esos valores absolutos."
  - "Dividir el resultado por el número total de mediciones."

explicacion: |
  El error absoluto promedio se calcula como: (|49.8-50| + |50.1-50| + |49.9-50| + |50.2-50| + |50.0-50|) / 5 = (0.2 + 0.1 + 0.1 + 0.2 + 0) / 5 = 0.6 / 5 = 0.12. (Nota: El ejemplo usa valores simplificados para el cálculo).
```

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

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "avanzado"
  tags: ["p-valor", "significancia", "errores_interpretacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[0.03, "rechazar"], [0.07, "no rechazar"]]

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["rechazar", "no rechazar"]

enunciado: "En un estudio con un nivel de significancia $\alpha = 0.05$, se obtiene un p-valor de {escenarios[escenario_idx][0]}. Por lo tanto, la decisión estadística es ___ la hipótesis nula."

pasos:
  - "Comparar el p-valor obtenido con el nivel de significancia $\alpha$."
  - "Si p-valor < $\alpha$, se rechaza la hipótesis nula."
  - "Si p-valor $\ge$ $\alpha$, no se rechaza la hipótesis nula."

explicacion: |
  El p-valor representa la probabilidad de observar los resultados obtenidos (o más extremos) asumiendo que la hipótesis nula es cierta.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["sesgo", "muestreo", "validez"]

respuesta: "sesgo de selección"
tipo: completar
respuestas_validas: ["sesgo de selección"]

enunciado: "Cuando la muestra recolectada no es representativa de la población objetivo debido a un error en el proceso de muestreo, se ha incurrido en un ___."

explicacion: |
  El sesgo de selección invalida la generalización de los resultados, ya que la muestra no refleja la diversidad de la población real.
```

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

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["metodologia", "proceso", "orden"]

respuesta: ["Limpieza de datos", "Análisis descriptivo", "Pruebas de hipótesis", "Interpretación de resultados"]
tipo: ordenar
opciones_explicitas: ["Limpieza de datos", "Análisis descriptivo", "Pruebas de hipótesis", "Interpretación de resultados", "Recolección de datos"]

enunciado: "Ordene las etapas del análisis de resultados de forma lógica para asegurar el rigor científico:"

explicacion: |
  Primero se deben tratar los datos brutos (limpieza), luego entender su distribución (descriptivo), aplicar modelos estadísticos (inferencia) y finalmente dar sentido a los hallazgos.
```

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

respuesta: escenario[1][1
tipo: "vf"

enunciado: "En el escenario donde un resultado tiene una significancia estadística muy alta (p < 0.001) pero el efecto real es despreciable para el paciente, ¿es el resultado clínicamente relevante? {escenario[0][0]}"

explicacion: |
  La significancia estadística (p-valor) depende fuertemente del tamaño de la muestra. Con muestras muy grandes, diferencias minúsculas pueden ser estadísticamente significativas pero carecer de importancia en el mundo real (relevancia práctica).
```

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

respuesta: caso[0][1
tipo: "vf"

enunciado: "El Error Tipo I se define como el acto de ___? {caso[0][0]}"

explicacion: |
  El Error Tipo I (falso positivo) ocurre cuando se rechaza una hipótesis nula que es verdadera. El Error Tipo II (falso negativo) ocurre cuando no se rechaza una hipótesis nula que es falsa.
```

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

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["mediana", "tendencia_central"]

variables:
  datos: [[10, 12, 15, 18, 20], [5, 8, 10, 12, 50], [100, 110, 120, 130, 140]]
  idx: uno_de([0, 1, 2])
  mediana_correcta: datos[idx][1]

respuestas_validas: [mediana_correcta]
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

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["outliers", "desviacion"]

variables:
  datos_escenario: [[10, 10, 11, 12, 100], [50, 52, 48, 51, 49], [20, 21, 19, 20, 22]]
  idx: uno_de([0, 1, 2])
  datos: datos_escenario[idx][0]
  es_outlier: datos_escenario[idx][1]

respuestas_validas: [es_outlier]
respuesta: es_outlier
tipo: completar
enunciado: "Al analizar el conjunto de datos {datos}, ¿se observa la presencia de un valor atípico (outlier) que afecte significativamente la media aritmética?"

explicacion: |
  En el conjunto {datos}, el valor {es_outlier} indica si hay un outlier. En el caso seleccionado, la respuesta es {es_outlier}.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["desviacion_estandar", "dispersion"]

variables:
  datos: [["baja", "alta"], ["alta", "baja"], ["baja", "baja"]]
  idx: uno_de([0, 1, 2])
  tipo_dispersion: datos[idx][0]
  valor_esperado: datos[idx][1]

respuesta: valor_esperado
tipo: mc
opciones_explicitas: ["baja", "alta"]

enunciado: "Si un experimento presenta una desviación estándar muy cercana a cero respecto a la media, ¿cómo se describe la dispersión de los datos recolectados?"

explicacion: |
  Una desviación estándar cercana a cero indica que los datos están muy agrupados alrededor de la media, por lo tanto, la dispersión es {valor_esperado}.
```

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

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "avanzado"
  tags: ["correlacion", "causalidad"]

variables:
  datos: [["correlación", "causalidad"], ["causalidad", "correlación"], ["correlación", "significancia"]]
  idx: uno_de([0, 1, 2])
  term1: datos[idx][0]
  term2: datos[idx][1]

respuesta: term2
tipo: completar
respuestas_validas: ["causalidad", "correlación", "significancia"]

enunciado: "Es un error común en la investigación afirmar que existe una ___ entre dos variables basándose únicamente en que presentan una ___ estadística."

explicacion: |
  Es fundamental recordar que la existencia de una {term1} no implica necesariamente una {term2}.
```

## Sección: argumentar-desde-evidencia (25 preguntas)

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["definicion", "evidencia"]

respuesta: "datos"
tipo: completar
respuestas_validas: ["datos", "información empírica"]

enunciado: "Para construir un argumento científico sólido, es necesario apoyarse en ___ que permitan validar o refutar una hipótesis."

explicacion: |
  La evidencia en ciencia se compone de datos u observaciones sistemáticas que sirven de base para el razonamiento.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["objecion", "debate"]

variables:
  escenario: uno_de([
    ["Un científico presenta un estudio sobre el cambio climático.", "una observación contradictoria"],
    ["Un investigador propone una nueva vacuna.", "un estudio que muestra efectos secundarios"],
    ["Un biólogo afirma que una especie está en peligro.", "un censo que muestra población estable"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["una observación contradictoria", "un estudio que muestra efectos secundarios", "un censo que muestra población estable"]

enunciado: "Si un investigador presenta una conclusión, la respuesta a una ___ es un componente clave del proceso de refutación o validación científica."

pasos:
  - "Identificar la conclusión del argumento original."
  - "Analizar la naturaleza de la objeción presentada."
  - "Buscar evidencia que responda directamente a esa objeción."

explicacion: |
  Una objeción es un argumento o dato que desafía la validez de una conclusión previa; responderle con evidencia es la base de la argumentación científica.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["veracidad", "booleano"]

respuesta: verdadero

tipo: vf

enunciado: "¿Es suficiente presentar una opinión personal para defender una conclusión científica ante una objeción?"

explicacion: |
  Falso. En la ciencia, la opinión no constituye evidencia; se requieren datos, mediciones o hechos verificables.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["estructura", "argumentacion"]

respuesta: ["Premisa", "Evidencia", "Conclusión"]
tipo: ordenar
opciones_explicitas: ["Premisa", "Evidencia", "Conclusión", "Opinión", "Duda"]

enunciado: "Ordene los elementos de un argumento científico estándar, desde el punto de partida hasta el cierre lógico:"

explicacion: |
  Un argumento científico parte de una premisa (afirmación), se sostiene mediante evidencia (datos) y culmina en una conclusión lógica.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["defensa", "argumentacion"]

variables:
  caso: uno_de([
    ["La hipótesis es falsa", "la evidencia es insuficiente"],
    ["La conclusión es correcta", "los datos son erróneos"],
    ["El método es válido", "la muestra es sesgada"]
  ])

respuesta: caso[1

tipo: mc
opciones_explicitas: ["la evidencia es insuficiente", "los datos son erróneos", "la muestra es sesgada"]

enunciado: "Cuando se enfrenta una objeción que cuestiona la validez de un dato, la defensa más efectiva consiste en demostrar que ___."

explicacion: |
  Si la objeción ataca la calidad de la información, la defensa debe centrarse en la robustez y representatividad de los datos utilizados.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["evidencia", "argumentacion", "metodologia"]

variables:
  escenario: uno_de([
    ["El aumento de la temperatura global coincide con el incremento de CO2", "El aumento de la temperatura global es causado por el CO2"],
    ["El fármaco X reduce la presión arterial en el grupo de prueba", "El fármaco X es efectivo para tratar la hipertensión"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["La correlación no implica causalidad", escenario[1], "La muestra es demasiado pequeña", "Los datos son insuficientes"]

enunciado: "Ante la objeción de que los datos solo muestran una relación estadística, la defensa científica más sólida basada en la evidencia es: ___"

explicacion: |
  Para defender una conclusión, no basta con señalar la correlación; se debe argumentar que la evidencia respalda el mecanismo causal propuesto.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["falacia", "evidencia", "logica"]

respuesta: falso
tipo: vf

enunciado: "Si un investigador afirma que 'una teoría es verdadera solo porque ha funcionado en experimentos previos, sin presentar los datos crudos de dichos experimentos', está utilizando una evidencia sólida para su defensa."

explicacion: |
  Afirmar que algo es cierto basándose solo en éxitos pasados sin mostrar los datos que sustentan esos éxitos es una apelación a la autoridad o una generalización apresurada, no una argumentación basada en evidencia científica.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["estructura", "argumento", "evidencia"]

respuesta: ["Observación/Dato", "Inferencia/Análisis", "Conclusión"]
tipo: ordenar
opciones_explicitas: ["Inferencia/Análisis", "Conclusión", "Observación/Dato", "Hipótesis sin datos", "Opinión personal"]

enunciado: "Para construir un argumento científico robusto que responda a una objeción, se debe seguir este orden lógico de presentación de la evidencia:"

explicacion: |
  Un argumento científico debe partir de los hechos observados (datos), pasar por el análisis de esos datos (inferencia) y culminar en la conclusión que se defiende.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "avanzado"
  tags: ["variables", "control", "evidencia"]

variables:
  caso: uno_de([
    ["Aumento de ventas de helados y aumento de ataques de tiburones", "El calor causa ambos"],
    ["Uso de fertilizante y crecimiento de plantas", "El fertilizante causa el crecimiento"]
  ])
  solucion: ["Controlar variables externas", "Ignorar la objeción", "Cambiar la conclusión", "Aceptar la correlación"]

respuesta: solucion[0
tipo: mc
opciones_explicitas: ["Controlar variables externas", "Ignorar la objeción", "Cambiar la conclusión", "Aceptar la correlación"]

enunciado: "En el caso de {caso}, si un revisor objeta que existe una variable de confusión (como el clima), la defensa científica correcta para mantener la validez de la conclusión es: ___"

explicacion: |
  La defensa ante una variable de confusión consiste en demostrar, mediante el control de variables o análisis estadísticos adicionales, que el efecto observado persiste independientemente de la variable externa.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["refutacion", "evidencia", "metodologia"]

respuesta: ["datos", "conclusión"]
tipo: completar
respuestas_validas: ["datos", "conclusión"]

enunciado: "Para refutar una objeción científica, el investigador debe presentar ___ que contradiga la crítica y así validar su ___ original."

explicacion: |
  La ciencia se basa en la evidencia; sin datos que respalden la posición frente a una crítica, la conclusión pierde validez científica.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["argumentacion", "metodologia"]

tipo: mc
opciones_explicitas: ["Una opinión basada en la experiencia personal", "Un dato estadístico derivado de un muestreo representativo", "Una afirmación sin respaldo verificable", "Una creencia compartida por la comunidad científica"]

enunciado: "En el contexto de la investigación científica, ¿cuál de las siguientes opciones constituye una evidencia sólida para defender una conclusión?"

explicacion: |
  La evidencia científica debe ser reproducible y estar respaldada por datos obtenidos mediante métodos sistemáticos, no puede basarse únicamente en la subjetividad o la experiencia anecdótica.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["errores_logicos", "correlacion"]

tipo: vf
respuesta: falso

enunciado: "Si un estudio muestra que dos variables aumentan simultáneamente (correlación), esto es evidencia suficiente para afirmar que una variable causa la otra (causalidad)."

explicacion: |
  La correlación no implica causalidad. Que dos eventos ocurran al mismo tiempo no significa que uno sea la causa del otro; puede haber una tercera variable influyendo en ambos o ser una coincidencia estadística.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "avanzado"
  tags: ["debate", "defensa_conclusion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El investigador presenta un gráfico con tendencia clara y valores de p < 0.05", "El investigador repite su conclusión sin mostrar nuevos datos"],
    ["El investigador utiliza una muestra de 1000 sujetos con control de variables", "El investigador utiliza una muestra de 5 sujetos sin grupo de control"]
  ]
  respuestas: [
    "Es una defensa válida mediante evidencia cuantitativa", "Es una falacia de autoridad o repetición"]

tipo: completar
respuestas_validas: ["Es una defensa válida mediante evidencia cuantitativa", "Es una falacia de autoridad o repetición"]
respuesta: escenarios[escenario_idx][1

enunciado: "Ante una objeción científica, si el investigador actúa como en el escenario {escenarios[escenario_idx][0]}, su respuesta es: ___"

explicacion: |
  Para defender una conclusión, no basta con insistir en la idea; se requiere aportar datos que refuten la objeción o que fortalezcan la validez del hallazgo original.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["metodologia", "proceso"]

tipo: ordenar
opciones_explicitas: ["Recopilar datos mediante observación o experimento", "Analizar los datos para encontrar patrones", "Formular una conclusión basada en la evidencia", "Contrastar la conclusión con la objeción recibida"]

enunciado: "Ordene los pasos lógicos para construir un argumento científico sólido que responda a una duda sobre un hallazgo:"

explicacion: |
  El proceso debe seguir un orden lógico: primero se obtiene la información, luego se procesa, se llega a una conclusión y finalmente se usa esa estructura para responder a críticas.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "avanzado"
  tags: ["falsacion", "evidencia"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si una conclusión científica es 'Todos los elementos X presentan la propiedad Y', y un crítico presenta un elemento X que NO tiene la propiedad Y, ¿qué ha presentado el crítico?"

pasos:
  - "Identificar si el dato presentado invalida la generalización"
  - "Determinar si el dato es un contraejemplo"

explicacion: |
  Un solo contraejemplo basado en evidencia empírica es suficiente para refutar una generalización universal, obligando al investigador a revisar su conclusión o sus premisas.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["metodologia", "argumentacion"]

respuesta: "evidencia"
tipo: "completar"
respuestas_validas: ["evidencia", "datos", "hechos"]

enunciado: "Mientras que una opinión es un juicio subjetivo sin necesidad de validación, la ___ es un dato o hecho comprobable que sustenta una conclusión científica."

explicacion: |
  La evidencia científica se distingue de la opinión porque es verificable, reproducible y puede ser contrastada mediante observación o experimentación.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["logica", "metodologia"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [
    ["Aumento de ventas de helados", "Aumento de ataques de tiburones"],
    ["Aumento de temperatura global", "Aumento de incendios forestales"]
  ]

respuesta: "correlación"
tipo: "mc"
opciones_explicitas: ["causalidad", "correlación", "coincidencia", "hipótesis"]

enunciado: "En el escenario {escenarios[escenario_idx][0]} y {escenarios[escenario_idx][1]}, la relación observada entre ambas variables es una {escenarios[escenario_idx][1]} pero no necesariamente una relación de causa-efecto. ¿Cómo se define este fenómeno?"

explicacion: |
  La correlación indica que dos variables cambian juntas, pero no implica que una cause la otra. Confundir esto con causalidad es un error lógico común en la argumentación científica.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["logica", "argumentacion"]

respuesta: falso
tipo: "vf"

enunciado: "Una conclusión científica es válida si se basa únicamente en la experiencia personal de un investigador, independientemente de si otros científicos pueden replicar el resultado."

explicacion: |
  Falso. La ciencia requiere replicabilidad y evidencia empírica que trascienda la subjetividad individual para ser considerada válida.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "avanzado"
  tags: ["metodologia", "jerarquia"]

respuesta: ["Opinión de experto", "Estudio de caso", "Estudio observacional", "Ensayo clínico aleatorizado"]
tipo: "ordenar"
opciones_explicitas: ["Opinión de experto", "Estudio de caso", "Estudio observacional", "Ensayo clínico aleatorizado"]

enunciado: "Ordene los siguientes niveles de evidencia de MENOR a MAYOR rigor científico para defender una conclusión médica:"

explicacion: |
  El rigor aumenta a medida que se controla la selección de la muestra y se minimizan los sesgos, siendo los ensayos clínicos aleatorizados el estándar de oro.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["metodologia", "logica"]

respuesta: "hipótesis"
tipo: "completar"
respuestas_validas: ["hipótesis", "suposición", "conjetura"]

enunciado: "Una ___ es una explicación provisional que requiere ser contrastada con evidencia para ser aceptada, mientras que la evidencia es el soporte empírico que permite validarla o refutarla."

explicacion: |
  La hipótesis es el punto de partida de la investigación (una propuesta explicativa), mientras que la evidencia es la herramienta para probar si dicha propuesta es correcta.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["argumentacion", "evidencia", "ciencia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["el aumento de la temperatura global fue de 1.5°C", "los registros satelitales confirman el aumento"], ["la concentración de CO2 subió 50ppm", "los núcleos de hielo muestran niveles récord"]]
  objecion: [["la variabilidad natural", "el ciclo solar"], ["la falta de mediciones precisas", "el error de los sensores"]]

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["datos de registros satelitales", "datos de núcleos de hielo", "observaciones anecdóticas", "teorías sin sustento"]

enunciado: "Un investigador afirma que el calentamiento es antropogénico. Un crítico objeta que {objecion[escenario_idx]}. Para defender su conclusión, el investigador debe presentar como evidencia: ___"

explicacion: |
  Para refutar una objeción sobre la variabilidad natural o errores de medición, se requiere evidencia empírica directa (registros o núcleos de hielo) que descarte la causa propuesta por el crítico.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "avanzado"
  tags: ["metodologia", "evidencia"]

variables:
  caso_idx: uno_de([0, 1])
  escenario: [["El grupo control no mostró cambios significativos", "El grupo experimental redujo la carga viral en un 90%"], ["La muestra fue insuficiente para generalizar", "El fármaco mostró una eficacia del 85% en ensayos clínicos"]]
  objecion: ["la varianza es demasiado alta", "el efecto es producto del azar"]

respuesta: verdadero
tipo: vf

enunciado: "En un ensayo clínico, si el grupo experimental muestra una reducción del 90% en la carga viral frente a un grupo control estable, y la desviación estándar es mínima, ¿es válido argumentar que el fármaco es efectivo para refutar la objecion de que {objecion[caso_idx]}?"

explicacion: |
  La evidencia estadística (reducción significativa y baja varianza) es la base para defender una conclusión científica frente a críticas sobre la aleatoriedad.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["logica", "argumentacion"]

variables:
  orden_idx: uno_de([0, 1])
  pasos_correctos: [["Observación de datos", "Formulación de hipótesis", "Contraste con evidencia", "Conclusión"], ["Recolección de muestra", "Análisis estadístico", "Revisión de pares", "Publicación de resultados"]]

respuesta: pasos_correctos[orden_idx
tipo: ordenar
opciones_explicitas: ["Observación de datos", "Formulación de hipótesis", "Contraste con evidencia", "Conclusión", "Recolección de muestra", "Análisis estadístico", "Revisión de pares", "Publicación de resultados"]

enunciado: "Para construir un argumento científico sólido que resista una objeción, se debe seguir un orden lógico de validación. Ordene los pasos para el caso de una investigación de campo:"

explicacion: |
  Un argumento científico no es solo una opinión; es una secuencia lógica que parte de la observación y pasa por el contraste riguroso de la evidencia antes de concluir.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["logica", "critica"]

variables:
  ejemplo_idx: uno_de([0, 1])
  objecion_texto: [["Si no puedes medir el efecto exacto de cada molécula, entonces tu teoría es falsa", "No has probado que el cambio sea causado por el CO2, por lo tanto, el CO2 no influye"], ["No has probado que el cambio sea causado por el CO2, por lo tanto, el CO2 no influye", "Si no puedes medir el efecto exacto de cada molécula, entonces tu teoría es falsa"]]

respuesta: "falacia de la evidencia insuficiente"
tipo: completar
respuestas_validas: ["falacia de la evidencia insuficiente", "error de generalización"]

enunciado: "Ante la objecion: '{objecion_texto[ejemplo_idx]}', el investigador debe identificar que el crítico está cometiendo una ___ para poder responder con datos que cubran el margen de error."

explicacion: |
  Cuando un crítico exige una certeza absoluta (imposible en ciencia) para invalidar una tendencia, está incurriendo en una falacia de evidencia insuficiente.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["evidencia", "datos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [["Se estudia la eficacia de un nuevo fertilizante", "Se estudia la relación entre horas de sueño y memoria"]]
  dato_relevante: [["kg de biomasa por planta", "puntuación en test de retención"]]
  objecion: ["la calidad del suelo no fue controlada", "el nivel de estrés de los sujetos"]

respuesta: dato_relevante[escenario_idx
tipo: mc
opciones_explicitas: ["kg de biomasa por planta", "puntuación en test de retención", "opinión de los agricultores", "color de las hojas"]

enunciado: "Para defender la eficacia de {escenario[escenario_idx]} frente a la objecion de que {objecion[escenario_idx]}, el dato científico más concreto es: ___"

explicacion: |
  La defensa de una conclusión depende de la elección de la variable dependiente correcta que cuantifique directamente el fenómeno estudiado.
```

## Sección: conclusion-y-comunicacion-de-resultados (25 preguntas)

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["conceptos", "conclusion"]

respuesta: "síntesis"
tipo: completar
respuestas_validas: ["síntesis", "resumen"]

enunciado: "La conclusión de una investigación debe presentarse como una ___ de los hallazgos principales, integrando los resultados con los objetivos planteados."

explicacion: |
  La conclusión no es un resumen de lo que ya se dijo, sino una síntesis que interpreta los resultados en relación con la pregunta de investigación.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["discusion", "interpretacion"]

variables:
  es_correcta: true

respuesta: es_correcta
tipo: completar
enunciado: "¿La sección de discusión tiene como objetivo principal comparar los resultados obtenidos con la literatura existente y las hipótesis previas?"

explicacion: |
  Correcto. La discusión es el espacio donde se interpretan los datos y se contrastan con el marco teórico y estudios previos.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["comunicacion", "difusion"]

respuesta: "artículo científico"
tipo: mc
opciones_explicitas: ["artículo científico", "diario de campo", "encuesta de satisfacción", "plan de trabajo"]

enunciado: "¿Cuál de los siguientes es el medio de comunicación formal por excelencia para difundir resultados de investigación ante la comunidad académica?"

explicacion: |
  El artículo científico es el estándar de comunicación en la ciencia para permitir la revisión por pares y la difusión del conocimiento.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["estructura", "reporte"]

respuesta: ["resumen", "introducción", "metodología", "resultados", "discusión", "conclusión"]
tipo: ordenar

opciones_explicitas: ["resumen", "introducción", "metodología", "resultados", "discusión", "conclusión"]

enunciado: "Ordene los elementos de un reporte de investigación siguiendo la estructura lógica estándar de publicación."

explicacion: |
  La estructura estándar sigue el orden: Resumen (Abstract), Introducción, Metodología, Resultados, Discusión y finalmente la Conclusión.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["limitaciones", "ética"]

respuesta: "falso"
tipo: completar
enunciado: "¿Es una mala práctica de comunicación omitir las limitaciones encontradas en el estudio para que la investigación parezca más sólida?"

explicacion: |
  Falso. Declarar las limitaciones es un acto de honestidad intelectual y es fundamental para que otros investigadores comprendan el alcance de los resultados.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["estructura", "conclusion"]

enunciado: "Al redactar la conclusión de un informe de investigación, el investigador debe retomar los objetivos planteados inicialmente para determinar si se cumplieron o no. Por lo tanto, una conclusión debe ser una síntesis de los hallazgos y no una repetición textual del resumen."

respuesta: verdadero
tipo: vf
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["comunicacion", "revision"]

variables:
  escenario: uno_de([
    ["El investigador escribe el artículo y lo envía directamente a la revista sin revisión previa.", "error"],
    ["El investigador envía el artículo a un colega para una revisión por pares informal antes de la revista.", "acierto"],
    ["El investigador publica los resultados en un blog personal sin pasar por revisión científica.", "error"]
  ])

enunciado: "En el proceso de comunicación científica, el paso que describe una práctica recomendada para mejorar la calidad del manuscrito antes de la sumisión formal es: {escenario[0]}"

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["El investigador escribe el artículo y lo envía directamente a la revista sin revisión previa.", "El investigador envía el artículo a un colega para una revisión por pares informal antes de la revista.", "El investigador publica los resultados en un blog personal sin pasar por revisión científica."]
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["proceso", "comunicacion"]

enunciado: "Para asegurar una comunicación efectiva de un nuevo descubrimiento científico, se deben seguir estos pasos en orden lógico:"

pasos:
  - "Redactar el manuscrito siguiendo las normas de la revista elegida."
  - "Realizar el análisis exhaustivo de los datos obtenidos."
  - "Enviar el manuscrito a la editorial para la revisión por pares."
  - "Presentar los resultados en un congreso para recibir feedback."

respuesta: ["Realizar el análisis exhaustivo de los datos obtenidos.", "Redactar el manuscrito siguiendo las normas de la revista elegida.", "Enviar el manuscrito a la editorial para la revisión por pares.", "Presentar los resultados en un congreso para recibir feedback."]
tipo: ordenar
opciones_explicitas: ["Realizar el análisis exhaustivo de los datos obtenidos.", "Redactar el manuscrito siguiendo las normas de la revista elegida.", "Enviar el manuscrito a la editorial para la revisión por pares.", "Presentar los resultados en un congreso para recibir feedback."]
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "avanzado"
  tags: ["limitaciones", "etica"]

variables:
  caso: uno_de([
    ["Un estudio sobre un fármaco que no menciona que la muestra fue de solo 5 personas.", "incorrecto"],
    ["Un estudio que reconoce que el clima afectó la velocidad de reacción química.", "correcto"]
  ])

enunciado: "En la sección de discusión y conclusiones, un investigador debe declarar las limitaciones del estudio. Un ejemplo de una declaración de limitaciones adecuada es: {caso[0]}"

respuesta: caso[1
tipo: mc
opciones_explicitas: ["Un estudio sobre un fármaco que no menciona que la muestra fue de solo 5 personas.", "Un estudio que reconoce que el clima afectó la velocidad de reacción química."]
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["terminologia", "completar"]

enunciado: "Cuando un artículo científico es aceptado y publicado, se convierte en parte del ___ científico, permitiendo que otros investigadores citen los hallazgos para construir nuevo conocimiento."

respuestas_validas: ["cuerpo", "conocimiento", "corpus"]
respuesta: "conocimiento"
tipo: completar
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["metodologia", "conclusiones"]

respuesta: falso
tipo: vf

enunciado: "Una conclusión debe ser una mera repetición o resumen de los resultados obtenidos, sin aportar una síntesis interpretativa de los mismos."

explicacion: |
  La conclusión no es un resumen. Mientras que el resumen describe qué se hizo y qué se encontró, la conclusión debe interpretar los hallazgos, responder a la pregunta de investigación y discutir las implicancias de los resultados.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["comunicacion", "estructura"]

variables:
  orden_correcto: ["Resumen", "Introducción", "Metodología", "Resultados", "Discusión", "Conclusión"]
  idx: uno_de([0,1,2,3,4,5])

respuesta: orden_correcto
tipo: ordenar

opciones_explicitas: ["Resumen", "Introducción", "Metodología", "Resultados", "Discusión", "Conclusión", "Bibliografía", "Anexos"]

enunciado: "Ordene los elementos de un artículo científico estándar siguiendo la estructura lógica de publicación (IMRyD extendido)."

explicacion: |
  La estructura estándar sigue un flujo lógico: desde la visión general (Resumen), el contexto (Introducción), el proceso (Metodología), la evidencia (Resultados), la interpretación (Discusión) y el cierre (Conclusión).
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "avanzado"
  tags: ["errores", "validez"]

respuesta: "generalización excesiva"
tipo: completar
respuestas_validas: ["generalización excesiva", "sesgo de confirmación", "error de muestreo"]

enunciado: "Cuando un investigador extiende sus conclusiones más allá de los límites de su muestra o de los datos recolectados, está incurriendo en una ___."

explicacion: |
  La validez externa de una investigación depende de que las conclusiones no pretendan aplicar leyes universales si la muestra es limitada o no representativa del universo estudiado.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["discusion", "errores"]

respuesta: "Presentar nuevos datos"
tipo: mc
opciones_explicitas: ["Presentar nuevos datos", "Comparar con autores previos", "Reconocer limitaciones", "Sugerir futuras líneas de investigación"]

enunciado: "Durante la sección de Discusión de un informe o artículo, ¿cuál de las siguientes acciones es un error metodológico grave?"

explicacion: |
  La sección de Discusión es para interpretar resultados ya presentados. Si se introducen datos nuevos que no fueron expuestos en la sección de Resultados, se rompe la estructura lógica y la transparencia del proceso.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "avanzado"
  tags: ["etica", "sesgo"]

respuesta: verdadero
tipo: vf

enunciado: "Al comunicar resultados, el investigador tiene la obligación ética de reportar tanto los hallazgos que apoyan su hipótesis como aquellos que la contradicen."

explicacion: |
  Omitir resultados que contradicen la hipótesis inicial es una forma de sesgo de publicación que distorsiona el conocimiento científico. La integridad requiere reportar toda la evidencia relevante.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["metodologia", "escritura_cientifica"]

respuesta: "discusión"
tipo: mc
opciones_explicitas: ["conclusión", "discusión", "resumen", "introducción"]

enunciado: "Mientras que la conclusión se centra en sintetizar los hallazgos principales y responder al objetivo, la ___ se enfoca en interpretar los resultados en el contexto de la literatura existente y las implicaciones teóricas."

explicacion: |
  La discusión es la sección donde se comparan los resultados propios con otros estudios, mientras que la conclusión es un cierre sintético de lo aprendido.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["comunicacion", "estructura"]

variables:
  es_resumen_en_conclusio: falso

respuesta: es_resumen_en_conclusio
tipo: completar
enunciado: "En un artículo científico, la sección de conclusiones debe ser una mera repetición del texto del resumen (abstract) sin aportar una síntesis interpretativa de los hallazgos."

explicacion: |
  Falso. El resumen es una síntesis de todo el trabajo (incluyendo métodos y resultados), mientras que la conclusión debe cerrar el argumento de la investigación y proyectar futuras líneas de estudio.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["difusion", "etica"]

respuesta: ["publicar_en_revistas_con_revision_pares", "publicar_en_redes_sociales", "guardar_en_un_archivo_personal"]
tipo: ordenar

opciones_explicitas: ["publicar_en_revistas_con_revision_pares", "publicar_en_redes_sociales", "guardar_en_un_archivo_personal"]

enunciado: "Ordene los niveles de formalidad y validación científica en la comunicación de resultados, desde el más riguroso/validado hasta el menos formal."

explicacion: |
  La revisión por pares (peer-review) es el estándar de oro de la comunicación científica, asegurando la calidad y veracidad de los hallazgos antes de su difusión masiva.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["metodologia"]

respuesta: ["se_confirma_o_rechaza", "se_plantea_al_inicio"]
tipo: completar
respuestas_validas: ["se_confirma_o_rechaza", "se_plantea_al_inicio"]

enunciado: "Si la hipótesis es la proposición que se intenta verificar al inicio de la investigación, la conclusión es el espacio donde la hipótesis ___."

explicacion: |
  La conclusión debe retomar la hipótesis original para determinar si la evidencia recolectada la respalda o la refuta.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "avanzado"
  tags: ["escritura_cientifica", "calidad"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [["hallazgos_limitados", "relevancia_alta"], ["hallazgos_contradictorios", "necesidad_de_nuevos_estudios"]]
  respuestas: ["relevancia_alta", "necesidad_de_nuevos_estudios"]

respuesta: respuestas[caso_idx
tipo: mc
opciones_explicitas: ["relevancia_alta", "necesidad_de_nuevos_estudios", "repetir_metodologia", "ignorar_errores"]

enunciado: "Si un investigador obtiene {escenarios[caso_idx][0]}, la conclusión debe enfocarse principalmente en la {escenarios[caso_idx][1]}."

explicacion: |
  Una conclusión debe ser honesta con las limitaciones del estudio. Si los resultados son limitados o contradictorios, la comunicación científica exige señalar la necesidad de nuevas investigaciones para resolver la ambigüedad.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["conclusiones", "informe"]

variables:
  datos: [["Los datos muestran una correlación positiva entre el uso de fertilizante y el crecimiento", "Se confirma la hipótesis inicial"], ["Los resultados son inconsistentes y no permiten validar la hipótesis", "Se sugiere ampliar la muestra"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Se confirma la hipótesis inicial", "Se sugiere ampliar la muestra", "Se deben ignorar los datos negativos", "El estudio es inválido"]

enunciado: "Un investigador llega a la siguiente situación: {datos[idx][0]}. ¿Cuál es la acción o conclusión más adecuada para el cierre de su informe?"

explicacion: |
  Una conclusión debe ser coherente con los hallazgos. Si los datos apoyan la hipótesis, se confirma; si no, se debe proponer la necesidad de más investigación o admitir la falta de evidencia.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["etica", "comunicacion"]

respuesta: verdadero
tipo: vf

enunciado: "En la comunicación de resultados, es éticamente aceptable omitir datos que contradicen la hipótesis principal para asegurar que la conclusión sea contundente."

explicacion: |
  Falso. La integridad científica exige reportar todos los hallazgos, incluso aquellos que contradicen la hipótesis, para evitar el sesgo de publicación.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["estructura", "orden"]

respuesta: ["Introducción", "Metodología", "Resultados", "Discusión y Conclusión"]
tipo: ordenar
opciones_explicitas: ["Introducción", "Metodología", "Resultados", "Discusión y Conclusión"]

enunciado: "Ordene los elementos de un artículo científico siguiendo el orden lógico estándar de comunicación de resultados."

explicacion: |
  El orden estándar permite que el lector comprenda primero el contexto (introducción), cómo se hizo (metodología), qué se encontró (resultados) y qué significan esos hallazgos (discusión/conclusión).
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "avanzado"
  tags: ["discusion", "interpretacion"]

variables:
  datos: [["Resultados significativos en el grupo A", "Resultados no significativos"], ["Efecto observado en la variable X", "Efecto nulo en la variable X"]]
  idx: uno_de([0, 1])

respuesta: "interpretar"
tipo: completar
respuestas_validas: ["interpretar", "repetir", "ignorar"]

enunciado: "En la sección de discusión de un informe, el investigador debe ___ los resultados obtenidos en relación con el marco teórico y los objetivos planteados."

explicacion: |
  La discusión no es solo repetir los resultados, sino interpretarlos, compararlos con otros autores y explicar su relevancia científica.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["difusion", "canales"]

variables:
  datos: [["un congreso científico", "una red social personal"], ["una revista indexada", "un blog de opinión"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["un congreso científico", "una red social personal", "una revista indexada", "un blog de opinión"]

enunciado: "Si el objetivo es la difusión académica formal de los resultados de una investigación, el medio más apropiado es {datos[idx][1]}."

explicacion: |
  Para la comunicación científica formal, se requieren canales con revisión por pares (peer-review) como revistas indexadas o presentaciones en congresos especializados.
```

## Sección: construir-y-usar-un-modelo-cientifico (25 preguntas)

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

respuesta: datos[escenario_idx][1

explicacion: |
  Los modelos requieren la selección de variables clave. En el caso de la caída libre, la masa y la gravedad son determinantes para predecir la aceleración.
```

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

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["modelo", "representacion", "fisica"]

variables:
  datos: [
    ["un objeto cae desde una torre", "caída libre"],
    ["una pelota es lanzada hacia arriba", "lanzamiento vertical"],
    ["una gota de lluvia cae al suelo", "caída de gota"]
  ]
  idx: uno_de([0,1,2])
  escenario: datos[idx][0]

enunciado: "Para estudiar el movimiento de {escenario}, los científicos utilizan un modelo de 'caída libre'. Este modelo es una representación que:"

opciones_explicitas: ["Simplifica la realidad ignorando la resistencia del aire", "Es una copia exacta y perfecta de la realidad", "Es un fenómeno que no se puede representar"]

respuesta: "Simplifica la realidad ignorando la resistencia del aire"
tipo: mc

explicacion: |
  Un modelo científico no es la realidad misma, sino una simplificación que permite aislar las variables más importantes (en este caso, la gravedad) para realizar predicciones precisas.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["elementos", "modelo"]

variables:
  caso: uno_de([
    ["el clima de una ciudad", "clima"],
    ["el crecimiento de una población de bacterias", "población"],
    ["el flujo de agua en un río", "río"]
  ])

enunciado: "Al construir un modelo para representar {caso[0]}, es necesario definir variables. Si queremos predecir el comportamiento del sistema, la capacidad de un modelo para decirnos qué pasará en el futuro se denomina:"

opciones_explicitas: ["Capacidad predictiva", "Capacidad descriptiva", "Capacidad de observación"]

respuesta: "Capacidad predictiva"
tipo: mc

explicacion: |
  La utilidad principal de un modelo científico es su poder predictivo: si el modelo es válido, los resultados que arroja deben coincidir con lo que ocurre en la realidad bajo las mismas condiciones.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

enunciado: "Para desarrollar un modelo científico sobre el efecto de un fertilizante en el crecimiento de una planta, se deben seguir estos pasos en orden lógico:"

opciones_explicitas: [
  "Observar el fenómeno y plantear una pregunta",
  "Construir el modelo matemático o conceptual",
  "Realar experimentos para validar el modelo",
  "Ajustar el modelo según los resultados obtenidos"
]

respuesta: ["Observar el fenómeno y plantear una pregunta", "Construir el modelo matemático o conceptual", "Realar experimentos para validar el modelo", "Ajustar el modelo según los resultados obtenidos"]
tipo: ordenar

explicacion: |
  El proceso de modelado es iterativo. Comienza con la observación, sigue con la creación de una representación, se pone a prueba mediante la experimentación y se refina si los datos no coinciden.
```

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

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "avanzado"
  tags: ["historia", "modelos"]

enunciado: "El modelo atómico de Bohr representa al átomo como un sistema solar en miniatura, donde los electrones orbitan el núcleo en trayectorias circulares fijas. En este modelo, la variable que determina el nivel de energía del electrón es la ___."

respuestas_validas: ["distancia al núcleo", "carga del núcleo", "velocidad orbital"]

respuesta: "distancia al núcleo"
tipo: completar

explicacion: |
  En el modelo de Bohr, la posición (distancia) de los electrones respecto al núcleo está cuantizada y define los niveles de energía permitidos.
```

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

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["epistemologia", "metodologia"]

respuesta: "representacion"
tipo: "completar"
respuestas_validas: ["representacion", "representación"]

enunciado: "A diferencia de la realidad física completa, un modelo científico es una ___ simplificada de la misma que permite estudiar un fenómeno específico."

explicacion: |
  Un modelo no es la realidad, sino una abstracción o representación que selecciona solo las variables relevantes para un propósito determinado.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["propiedades", "utilidad"]

variables:
  escenario: uno_de([
    ["predecir", "explicar"],
    ["describir", "observar"]
  ])

respuesta: escenario[0
tipo: "mc"
opciones_explicitas: ["predecir", "describir", "observar", "repetir"]

enunciado: "Una de las funciones principales de un modelo científico es la capacidad de {escenario[1]} fenómenos futuros, diferenciándose de la simple observación pasiva."

explicacion: |
  Mientras que la observación describe lo que ocurre, el modelo busca capturar la lógica del sistema para poder predecir comportamientos futuros.
```

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

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

respuesta: ["Observación", "Construcción", "Validación", "Refinamiento"]
tipo: "ordenar"
opciones_explicitas: ["Observación", "Construcción", "Validación", "Refinamiento"]

enunciado: "Ordena las etapas lógicas para el desarrollo y uso de un modelo científico:"

explicacion: |
  El proceso comienza con la observación del fenómeno, sigue con la construcción del modelo, luego se valida contra la realidad y finalmente se refina si hay discrepancias.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "avanzado"
  tags: ["epistemologia", "conceptos"]

variables:
  caso: uno_de([
    ["el modelo es una herramienta para aplicar una teoría", "la teoría es un modelo simplificado"],
    ["el modelo es una generalización, la teoría es una herramienta", "la teoría es una generalización, el modelo es una herramienta"]
  ])

respuesta: caso[0
tipo: "mc"
opciones_explicitas: ["el modelo es una herramienta para aplicar una teoría", "la teoría es un modelo simplificado", "son conceptos idénticos", "el modelo es una ley universal"]

enunciado: "En el marco del método científico, se distingue que {caso[1]}."

explicacion: |
  La teoría es un marco explicativo general, mientras que el modelo es una representación específica y simplificada que permite operacionalizar esa teoría para estudiar un fenómeno concreto.
```

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

respuestas_validas: ["6.38"]
tipo: completar

explicacion: |
  Un modelo científico simplifica la realidad al omitir variables complejas (como el viento) para facilitar la predicción matemática.
```

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

## Sección: corrientes-filosofia-de-la-ciencia (25 preguntas)

```
metadata:
  materia: "investigacion"
  tema: "filosofia_de_la_ciencia"
  nivel: "basico"
  tags: ["popper", "falsacionismo", "demarcacion"]

respuesta: "falsabilidad"
tipo: completar
respuestas_validas: ["falsabilidad", "falsacion"]

enunciado: "Para Karl Popper, el criterio de demarcación que distingue a la ciencia de la metafísica es la ___________."

explicacion: |
  Para Popper, una teoría es científica solo si es capaz de ser refutada por la experiencia. Si una teoría no puede ser sometida a pruebas que puedan contradecirla, no es científica.
```

```
metadata:
  materia: "investigacion"
  tema: "filosofia_de_la_ciencia"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ciencia_normal"]

variables:
  escenario: uno_de([
    ["ciencia_normal", "periodo de estabilidad donde se trabaja bajo un paradigma establecido"],
    ["crisis", "periodo de acumulación de anomalías que el paradigma actual no puede resolver"],
    ["revolucion", "periodo de cambio radical donde un paradigma es reemplazado por otro"]
  ])

opciones_explicitas: ["ciencia_normal", "crisis", "revolucion"]

respuesta: escenario[1
tipo: mc

enunciado: "Según Thomas Kuhn, el periodo caracterizado por la acumulación de anomalías que el modelo vigente no puede explicar se denomina ___________."

explicacion: |
  La crisis es el paso previo a la revolución científica. Ocurre cuando las anomalías son tan numerosas o profundas que la comunidad científica pierde la confianza en el paradigma vigente.
```

```
metadata:
  materia: "investigacion"
  tema: "filosofia_de_la_ciencia"
  nivel: "basico"
  tags: ["feyerabend", "anarquismo", "metodologia"]

respuesta: falso
tipo: vf

enunciado: "¿Sostiene Paul Feyerabend que existe un único método científico universal que debe seguirse para garantizar el progreso del conocimiento?"

explicacion: |
  Feyerabend, con su principio de "todo vale" (anything goes), argumentó que no existe un método único y que la ciencia progresa precisamente porque los científicos rompen las reglas metodológicas establecidas.
```

```
metadata:
  materia: "investigacion"
  tema: "filosofia_de_la_ciencia"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ordenar"]

opciones_explicitas: ["Ciencia Normal", "Crisis", "Revolución Científica", "Nuevo Paradigma"]

respuesta: ["Ciencia Normal", "Crisis", "Revolución Científica", "Nuevo Paradigma"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas del ciclo de desarrollo científico propuesto por Thomas Kuhn:"

explicacion: |
  El ciclo comienza con la Ciencia Normal (trabajo bajo un paradigma), sigue con una Crisis (anomalías), lleva a una Revolución Científica (cambio de modelo) y culmina con la instauración de un Nuevo Paradigma.
```

```
metadata:
  materia: "investigacion"
  tema: "filosofia_de_la_ciencia"
  nivel: "avanzado"
  tags: ["popper", "kuhn", "feyerabend"]

variables:
  comparacion: uno_de([
    ["falsacionismo", "Popper propone que la ciencia avanza mediante la refutación de teorías."],
    ["paradigmas", "Kuhn sostiene que la ciencia avanza mediante cambios de modelos compartidos."],
    ["anarquismo", "Feyerabend defiende la pluralidad de métodos frente a la rigidez metodológica."]
  ])

opciones_explicitas: ["falsacionismo", "paradigmas", "anarquismo"]

respuesta: comparacion[0
tipo: mc

enunciado: "Si un autor afirma que el progreso científico se da a través de la eliminación de teorías que han sido refutadas por la experiencia, se refiere al ___________."

explicacion: |
  El falsacionismo de Popper se basa en la idea de que la ciencia no busca verdades absolutas, sino teorías que aún no han sido refutadas (corroboradas), avanzando mediante la eliminación de errores.
```

```
metadata:
  materia: "investigacion"
  tema: "falsacionismo_popper"
  nivel: "intermedio"
  tags: ["popper", "falsacionismo", "demarcacion"]

variables:
  escenario: uno_de([
    ["La teoría de la relatividad de Einstein predice que la luz de una estrella se curva al pasar cerca del sol.", "falsable"],
    ["La teoría del psicoanálisis de Freud puede explicar tanto un comportamiento heroico como uno egoísta sin contradicciones.", "no_falsable"],
    ["La teoría de la selección natural de Darwin propone cambios en las poblaciones a través de generaciones.", "falsable"]
  ])

enunciado: "De acuerdo con el falsacionismo de Karl Popper, una teoría es científica si es capaz de ser sometida a pruebas que podrían refutarla. Analizando el siguiente caso: '{escenario[0]}', la naturaleza de esta teoría es ___."

respuestas_validas: ["falsable", "no_falsable"]
respuesta: escenario[1
tipo: completar

explicacion: |
  Para Popper, la ciencia no progresa confirmando verdades, sino eliminando errores. Una teoría es científica si establece condiciones bajo las cuales, de ocurrir, la teoría quedaría refutada (falsada). Si una teoría explica todo lo que sucede (como criticaba Popper del psicoanálisis), entonces no es científica porque no se arriesga a ser falsa.
```

```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ciencia_normal"]

variables:
  fase: uno_de([
    ["Ciencia Normal", "Crisis"],
    ["Ciencia Normal", "Revolución Científica"],
    ["Ciencia Normal", "Cambio de Paradigma"]
  ])

enunciado: "Thomas Kuhn sostiene que la ciencia no progresa de forma lineal, sino mediante saltos. El proceso sigue este orden: primero ocurre la 'Ciencia Normal', luego surge una serie de anomalías que no pueden ser resueltas, lo que lleva a una ___ y, finalmente, a un cambio de paradigma."

opciones_explicitas: ["Crisis", "Revolución Científica", "Cambio de Paradigma"]
respuesta: fase[1
tipo: mc

explicacion: |
  Según Kuhn, la 'Ciencia Normal' opera bajo un paradigma aceptado. Cuando las anomalías se acumulan y el paradigma actual no puede resolverlas, se entra en una fase de 'Crisis', que es el preludio necesario para una 'Revolución Científica'.
```

```
metadata:
  materia: "investigacion"
  tema: "anarquismo_epistemologico_feyerabend"
  nivel: "avanzado"
  tags: ["feyerabend", "anarquismo", "metodologia"]

enunciado: "Paul Feyerabend argumenta en su obra 'Contra la muerte de la razón' que no existe un único método científico universal que deba seguirse estrictamente para que el conocimiento sea válido. Su principio fundamental es 'Anything goes' (Todo vale). ¿Es esto cierto?"

opciones_explicitas: [verdadero, falso]
respuesta: verdadero
tipo: vf

explicacion: |
  Feyerabend sostiene que la historia de la ciencia muestra que los grandes avances ocurrieron precisamente porque los científicos violaron las reglas metodológicas establecidas. Por tanto, no hay una regla única e inamovible para hacer ciencia.
```

```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "historia_ciencia", "ordenar"]

enunciado: "Ordena los eventos que describen el paso de la física Newtoniana a la física Relativista según el modelo de Kuhn:"

opciones_explicitas: ["Predominio del paradigma de Newton", "Aparición de anomalías (ej. órbita de Mercurio)", "Crisis del modelo clásico", "Revolución y nuevo paradigma de Einstein"]
respuesta: ["Predominio del paradigma de Newton", "Aparición de anomalías (ej. órbita de Mercurio)", "Crisis del modelo clásico", "Revolución y nuevo paradigma de Einstein"]
tipo: ordenar

explicacion: |
  El modelo de Kuhn es cíclico: 1) Estabilidad (Paradigma), 2) Anomalías (problemas no resueltos), 3) Crisis (pérdida de confianza en el paradigma) y 4) Revolución (sustitución por uno nuevo).
```

```
metadata:
  materia: "investigacion"
  tema: "corrientes_filosofia_ciencia"
  nivel: "avanzado"
  tags: ["comparativa", "popper", "kuhn", "feyerabend"]

variables:
  caso: uno_de([
    ["Un científico busca una teoría que sea lo más arriesgada y falsable posible.", "Popper"],
    ["Un científico trabaja dentro de un marco de reglas aceptadas por su comunidad para resolver acertijos.", "Kuhn"],
    ["Un científico decide ignorar las reglas lógicas establecidas para permitir una nueva idea creativa.", "Feyerabend"]
  ])

enunciado: "Si un investigador se enfoca exclusivamente en la capacidad de una teoría para ser refutada mediante la experimentación, ¿qué autor está siguiendo?"

opciones_explicitas: ["Popper", "Kuhn", "Feyerabend"]
respuesta: caso[0
tipo: mc

explicacion: |
  El enfoque centrado en la refutabilidad (falsacionismo) es la piedra angular del pensamiento de Karl Popper para distinguir la ciencia de la pseudociencia.
```

```
metadata:
  materia: "investigacion"
  tema: "falsacionismo"
  nivel: "intermedio"
  tags: ["popper", "falsacionismo", "epistemologia"]

respuesta: falso
tipo: vf

enunciado: "Para Karl Popper, el criterio de demarcación de la ciencia es la capacidad de una teoría para ser verificada empíricamente de forma definitiva."

explicacion: |
  El falsacionismo de Popper sostiene que la ciencia no progresa mediante la verificación (que es lógicamente imposible para leyes universales), sino mediante la falsación: una teoría es científica si es capaz de ser refutada por un enunciado observacional.
```

```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ciencia-normal"]

variables:
  escenario: uno_de([
    ["ciencia-normal", "periodo de estabilidad donde se trabaja bajo un paradigma establecido"],
    ["revolucion-cientifica", "periodo de crisis donde el paradigma actual es reemplazado"]
  ])

opciones_explicitas: ["ciencia-normal", "revolucion-cientifica"]

respuesta: escenario[0
tipo: mc

enunciado: "Según Thomas Kuhn, el periodo en el que los científicos se dedican a resolver 'enigmas' dentro de un marco teórico aceptado se denomina: ___"

pasos:
  - "Identificar si el enunciado describe un periodo de estabilidad o de crisis."

explicacion: |
  En la {escenario[0]}, los científicos no cuestionan los fundamentos, sino que resuelven problemas dentro del modelo vigente. La ruptura de este estado da lugar a la revolución científica.
```

```
metadata:
  materia: "investigacion"
  tema: "anarquismo_epistemologico"
  nivel: "avanzado"
  tags: ["feyerabend", "anarquismo", "metodologia"]

respuesta: "contra el método"
tipo: completar

respuestas_validas: ["contra el método", "pro-método", "sin método"]

enunciado: "El principio de 'contra el método' de Paul Feyerabend sugiere que no existe una regla metodológica única y universal que guíe todo progreso científico."

explicacion: |
  Feyerabend argumenta que la ciencia es una actividad pluralista y que imponer un método único (como el inductivismo o el falsacionismo) limitaría el progreso científico y la libertad de investigación.
```

```
metadata:
  materia: "investigacion"
  tema: "comparativa_popper_kuhn"
  nivel: "avanzado"
  tags: ["popper", "kuhn", "comparacion"]

variables:
  caso: uno_de([
    ["popper", "enfocado en la lógica de la justificación y la refutación"],
    ["kuhn", "enfocado en la historia y la sociología de la ciencia"]
  ])

opciones_explicitas: ["popper", "kuhn"]

respuesta: caso[0
tipo: mc

enunciado: "Si un filósofo analiza la ciencia centrándose en la estructura lógica de las leyes y cómo estas pueden ser refutadas, está adoptando una perspectiva principalmente ___."

explicacion: |
  Mientras que Kuhn analiza cómo la comunidad científica cambia sus paradigmas (perspectiva histórica/sociológica), Popper se centra en la lógica de la validación de las teorías (perspectiva lógica/normativa).
```

```
metadata:
  materia: "investigacion"
  tema: "ciclo_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ordenar"]

opciones_explicitas: ["Ciencia Normal", "Crisis", "Revolución Científica", "Nuevo Paradigma"]

respuesta: ["Ciencia Normal", "Crisis", "Revolución Científica", "Nuevo Paradigma"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas del ciclo de cambio de paradigma propuesto por Thomas Kuhn:"

pasos:
  - "Identificar el estado de estabilidad inicial."
  - "Identificar la aparición de anomalías que no pueden ser resueltas."
  - "Identificar el conflicto entre el modelo viejo y el nuevo."
  - "Identificar el resultado final del proceso."

explicacion: |
  El ciclo comienza con la Ciencia Normal, sigue con la Crisis (cuando las anomalías se acumulan), continúa con la Revolución Científica (el conflicto) y culmina con la instauración de un Nuevo Paradigma.
```

```
metadata:
  materia: "investigacion"
  tema: "falsacionismo_popper"
  nivel: "intermedio"
  tags: ["popper", "falsacionismo", "demarcacion"]

respuesta: "falsabilidad"
tipo: completar
respuestas_validas: ["falsabilidad", "falsacionabilidad", "falsable"]

enunciado: "Para Karl Popper, lo que distingue a una teoría científica de una pseudocientífica no es su capacidad de ser confirmada por la experiencia, sino su capacidad de ser ___."

explicacion: |
  El falsacionismo sostiene que una teoría es científica solo si es posible imaginar un enunciado observacional que, de ser cierto, la refutaría.
```

```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ciencia_normal"]

variables:
  escenario: uno_de([["Ciencia Normal", "Resolución de acertijos"], ["Ciencia Normal", "Búsqueda de la verdad absoluta"], ["Crisis", "Resolución de acertijos"]])

respuesta: escenario[0][1
tipo: mc
opciones_explicitas: ["Resolución de acertijos", "Búsqueda de la verdad absoluta", "Resolución de crisis"]

enunciado: "Según Thomas Kuhn, durante el periodo de 'Ciencia Normal', el trabajo de los científicos consiste principalmente en la ___."

explicacion: |
  En la ciencia normal, los científicos no buscan refutar el paradigma, sino resolver "acertijos" (puzzles) dentro de las reglas establecidas por el paradigma vigente.
```

```
metadata:
  materia: "investigacion"
  tema: "anarquismo_epistemologico_feyerabend"
  nivel: "avanzado"
  tags: ["feyerabend", "anarquismo", "metodologia"]

respuesta: falso
tipo: vf

enunciado: "¿Es el anarquismo epistemológico de Paul Feyerabend una defensa de la existencia de un único método científico universal e ideal para el progreso del conocimiento?"

explicacion: |
  Feyerabend sostiene que "todo vale" (anything goes) y que la ciencia no sigue un método único y rígido, sino que el progreso a menudo requiere violar reglas metodológicas establecidas.
```

```
metadata:
  materia: "investigacion"
  tema: "ciclos_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "crisis"]

variables:
  secuencia: uno_de([[0, 1, 2], [0, 2, 1], [1, 0, 2]])

respuesta: ["Ciencia Normal", "Crisis", "Revolución Científica"]
tipo: ordenar
opciones_explicitas: ["Ciencia Normal", "Crisis", "Revolución Científica"]

enunciado: "Ordene los momentos que caracterizan el ciclo de cambio científico propuesto por Thomas Kuhn:"

pasos:
  - "El periodo de estabilidad y resolución de problemas."
  - "El periodo de acumulación de anomalías que el paradigma no puede explicar."
  - "El periodo de ruptura y adopción de un nuevo paradigma."

explicacion: |
  Kuhn describe un proceso cíclico: la ciencia normal se ve interrumpida por una crisis, lo que da lugar a una revolución científica que establece un nuevo paradigma.
```

```
metadata:
  materia: "investigacion"
  tema: "contraste_popper_kuhn"
  nivel: "avanzado"
  tags: ["popper", "kuhn", "comparacion"]

variables:
  caso: uno_de([["Popper", "Refutación"], ["Kuhn", "Cambio de paradigma"]])

respuesta: caso[0][1
tipo: mc
opciones_explicitas: ["Cambio de paradigma", "Refutación", "Confirmación absoluta"]

enunciado: "Mientras que para Kuhn la ciencia progresa mediante cambios de paradigma, para Karl Popper el motor del progreso es la ___."

explicacion: |
  Para Popper, la ciencia avanza mediante la eliminación de errores; es decir, mediante la refutación de teorías que han sido sometidas a pruebas severas.
```

```
metadata:
  materia: "investigacion"
  tema: "falsacionismo_popper"
  nivel: "intermedio"
  tags: ["popper", "falsacionismo", "demarcacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Una teoría que afirma que 'mañana lloverá o no lloverá'", "falsa"],
    ["Una teoría que afirma que 'todos los cisnes son blancos' y se observa un cisne negro", "verdadera"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["falsa", "verdadera", "inconmensurable", "paradigmática"]

enunciado: "Según el falsacionismo de Karl Popper, una teoría es científica si es capaz de ser refutada por la experiencia. Si nos enfrentamos a: {escenarios[escenario_idx][0]}, ¿la teoría es científica bajo este criterio?"

explicacion: |
  Para Popper, una teoría es científica solo si es falsable. Una afirmación que es verdadera por definición (tautología) como 'A o no A' no puede ser refutada, por lo tanto, no es científica.
```

```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ciencia-normal"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Un científico resuelve un acertijo dentro del modelo actual", "ciencia-normal"],
    ["La acumulación de anomalías provoca una crisis en el modelo", "crisis"]
  ]
  orden_kuhn: ["pre-ciencia", "ciencia-normal", "crisis", "revolución-científica", "nuevo-paradigma"]

respuesta: casos[caso_idx][1
tipo: mc
opciones_explicitas: ["ciencia-normal", "crisis", "revolución-científica", "falsación"]

enunciado: "Thomas Kuhn sostiene que la ciencia progresa mediante cambios de paradigmas. Si un científico se encuentra en la situación de: {casos[caso_idx][0]}, ¿qué etapa de la ciencia está realizando?"

explicacion: |
  La 'ciencia normal' es el periodo donde el paradigma vigente es aceptado y se trabaja para resolver problemas o 'acertijos' dentro de su marco.
```

```
metadata:
  materia: "investigacion"
  tema: "anarquismo_epistemologico"
  nivel: "avanzado"
  tags: ["feyerabend", "anarquismo", "metodologia"]

respuesta: "contra-intuitivo"
tipo: completar
respuestas_validas: ["contra-intuitivo", "metodico", "riguroso", "falsable"]

enunciado: "Paul Feyerabend, en su obra 'Contra la muerte de la razón', sostiene que no existe un método único y universal para el progreso científico, proponiendo un enfoque que puede ser considerado ___ para la metodología tradicional."

explicacion: |
  Feyerabend defiende el 'anything goes' (todo vale), argumentando que la adherencia estricta a reglas metodológicas ha frenado el progreso científico.
```

```
metadata:
  materia: "investigacion"
  tema: "filosofia_de_la_ciencia"
  nivel: "intermedio"
  tags: ["comparacion", "popper", "kuhn"]

respuesta: "Kuhn"
tipo: mc
opciones_explicitas: ["Popper", "Kuhn", "Feyerabend", "Lakatos"]

enunciado: "Mientras que Popper ve la ciencia como un proceso de eliminación de errores mediante la falsación, el autor que describe la ciencia como una serie de cambios bruscos de visión del mundo (paradigmas) es: ___"

explicacion: |
  Thomas Kuhn introdujo la noción de paradigma y la idea de que la ciencia no es solo un proceso lógico, sino también un proceso sociológico y psicológico de cambios de visión.
```

```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "avanzado"
  tags: ["kuhn", "secuencia", "revolucion"]

respuesta: ["pre-ciencia", "ciencia-normal", "crisis", "revolución-científica"]
tipo: ordenar
opciones_explicitas: ["pre-ciencia", "ciencia-normal", "crisis", "revolución-científica"]

enunciado: "Ordene cronológicamente las fases del desarrollo científico según la estructura propuesta por Thomas Kuhn:"

explicacion: |
  El ciclo comienza con la pre-ciencia (falta de consenso), sigue con la ciencia-normal (dominio de un paradigma), la crisis (aparición de anomalías insolubles) y finalmente la revolución científica (cambio de paradigma).
```
