### 1 — Normalización Min-Max
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["normalizacion", "preprocesamiento", "min-max"]
enunciado: "Al aplicar la normalización Min-Max a un atributo numérico para escalar los valores al rango [0, 1], la fórmula es `(x - min) / (max - min)`. Si un dataset tiene un valor mínimo de 10 y un máximo de 50, ¿cuál es el valor normalizado para x = 30?"
tipo: completar
respuesta: "0.5"
respuestas_validas:
  - "0.5"
  - "0,5"
  - "1/2"
pasos:
  - "Identificar min (10) y max (50)."
  - "Calcular el rango: 50 - 10 = 40."
  - "Calcular la diferencia del valor objetivo con el mínimo: 30 - 10 = 20."
  - "Dividir la diferencia por el rango: 20 / 40 = 0.5."
explicacion: "La normalización Min-Max transforma los datos linealmente. El valor 30 está a la mitad exacta del rango [10, 50], por lo que su coordenada normalizada es 0.5."
```

### 2 — Visualización de Distribución Continua
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["distribucion", "histograma", "densidad"]
enunciado: "Para visualizar la distribución de probabilidad continua de una variable con miles de observaciones y detectar modas múltiples sin perder información sobre la densidad local, se prefiere un gráfico de densidad de kernel (KDE) sobre un histograma estándar."
tipo: vf
respuesta: verdadero
pasos:
  - "Analizar la naturaleza de los datos: continuos y grandes volúmenes."
  - "Evaluar las limitaciones del histograma: sensibilidad al ancho de banda y bordes."
  - "Evaluar las ventajas del KDE: suaviza la distribución, muestra picos ocultos."
explicacion: "El KDE proporciona una estimación suave de la función de densidad de probabilidad, siendo superior al histograma para identificar patrones sutiles en grandes conjuntos de datos continuos."
```

### 3 — Gráfico de Sankey Avanzado
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["sankey", "flujos", "pérdida"]
enunciado: "En un diagrama de Sankey que modela el flujo de energía en una planta industrial, el ancho de las flechas (links) representa proporcionalmente:"
tipo: mc
opciones_explicitas:
  - "La temperatura de la energía en ese punto."
  - "La magnitud del flujo de energía entre dos nodos."
  - "La eficiencia del nodo de origen."
  - "El tiempo transcurrido en el proceso."
respuesta: "La magnitud del flujo de energía entre dos nodos."
pasos:
  - "Definir la semántica visual de un diagrama de Sankey."
  - "Relacionar el ancho de la banda con el volumen cuantitativo."
  - "Descartar variables temporales o de calidad no mapeadas a la geometría."
explicacion: "La característica fundamental del diagrama de Sankey es que el ancho de las flechas es proporcional al caudal o magnitud del flujo representado, permitiendo visualizar pérdidas y transferencias de manera intuitiva."
```

### 4 — Corrección de Outliers con IQR
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["outliers", "iqr", "boxplot", "limite"]
enunciado: "Al construir un diagrama de caja (boxplot) para detectar valores atípicos, el límite superior para identificar outliers se calcula usualmente como:"
tipo: completar
respuesta: "Q3 + 1.5 * IQR"
respuestas_validas:
  - "Q3 + 1.5 * IQR"
  - "Q3 + 1.5 * IQR"
  - "tercer cuartil + 1.5 * RCI"
  - "Q3 + 1.5 * rango intercuartil"
pasos:
  - "Recordar la definición de IQR: Q3 - Q1."
  - "Aplicar la regla de Tukey para los bigotes del boxplot."
  - "Formar la expresión del límite superior."
explicacion: "La regla de Tukey establece que los puntos fuera de Q3 + 1.5 * IQR (límite superior) o Q1 - 1.5 * IQR (límite inferior) se consideran valores atípicos potenciales."
```

### 5 — Matriz de Correlación Heatmap
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["correlacion", "heatmap", "multivariado"]
enunciado: "Para visualizar rápidamente la fuerza y dirección de las relaciones lineales entre 15 variables continuas en un solo cuadro, la mejor técnica es una matriz de calor (heatmap) de la matriz de correlación de Pearson."
tipo: vf
respuesta: verdadero
pasos:
  - "Identificar el objetivo: comparar múltiples pares de variables continuas."
  - "Seleccionar la métrica: correlación de Pearson para linealidad."
  - "Elegir la visualización: heatmap para densidad de información en 2D."
explicacion: "Un heatmap de correlación permite escanear rápidamente qué variables están altamente correlacionadas (colores cálidos/fríos intensos) y cuáles no, optimizando el espacio para 15 variables."
```

### 6 — Geoplot con Densidad Espacial
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["geoplot", "densidad", "hexbin", "superposicion"]
enunciado: "Al visualizar la ubicación de 50,000 clientes en un mapa geográfico, los puntos individuales se superponen excesivamente (overplotting). Para resolver esto sin perder la precisión geográfica exacta de cada cliente, se debe usar:"
tipo: completar
respuesta: "hexbin"
respuestas_validas:
  - "hexbin"
  - "hexagonal binning"
  - "hexbin plot"
  - "binning hexagonal"
pasos:
  - "Identificar el problema: overplotting en datos masivos geoespaciales."
  - "Evaluar soluciones: choropleth (pierde precisión), scatter (falla)."
  - "Seleccionar hexbin: agrupa puntos en hexágonos, manteniendo la ubicación aproximada y mostrando densidad."
explicacion: "El gráfico hexbin (binning hexagonal) divide el mapa en celdas hexagonales y colorea cada celda según el número de puntos dentro de ella, resolviendo el overplotting mientras se preserva la estructura espacial."
```

### 7 — Gráfico de Radar Multivariable
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["radar", "comparacion", "escalas", "normalizacion"]
enunciado: "Al comparar el rendimiento de 5 empleados en 10 competencias diferentes usando un gráfico de radar, es CRÍTICO previamente:"
tipo: mc
opciones_explicitas:
  - "Eliminar las competencias con valores más bajos."
  - "Normalizar las escalas de todas las competencias al mismo rango."
  - "Convertir los datos cualitativos a numéricos."
  - "Ordenar los empleados alfabéticamente."
respuesta: "Normalizar las escalas de todas las competencias al mismo rango."
pasos:
  - "Analizar la geometría del gráfico de radar: ejes radiales desde el centro."
  - "Identificar el riesgo: si las competencias tienen rangos distintos (ej. 0-100 vs 0-10), una dominará visualmente a las otras."
  - "Concluir la necesidad de normalización para la comparabilidad justa."
explicacion: "Sin normalización, una variable con un rango numérico mayor (ej. salario) distorsionará la forma del polígono, haciendo insignificantes las variables con rangos menores (ej. satisfacción), invalidando la comparación visual."
```

### 8 — Análisis de Sentimiento con Word Cloud
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["nlp", "wordcloud", "frecuencia", "limitaciones"]
enunciado: "Una Word Cloud (nube de palabras) generada a partir de reseñas de productos es una herramienta estadísticamente robusta para determinar la importancia relativa exacta de los términos positivos frente a los negativos."
tipo: vf
respuesta: falso
pasos:
  - "Evaluar la capacidad de una Word Cloud: muestra frecuencia, no tono."
  - "Identificar la limitación: no distingue contexto ni polaridad (sarcasmo, negaciones)."
  - "Concluir que no es robusta para análisis de sentimiento preciso sin procesamiento NLP adicional."
explicacion: "Las Word Clouds solo muestran frecuencia de aparición. No capturan la polaridad (sentimiento), el contexto ni la importancia semántica real, siendo engañosas para análisis de sentimiento preciso."
```

### 9 — Gráfico de Línea con Ventana Móvil
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["serie-tiempo", "suavizado", "media-movil", "ruido"]
enunciado: "Para suavizar el ruido en una serie temporal de ventas diarias muy volátil y revelar la tendencia subyacente a largo plazo, se aplica una media móvil de 30 días. El valor del día 31 en la nueva serie suavizada se calcula promediando los datos originales de:"
tipo: completar
respuesta: "los días 1 al 31"
respuestas_validas:
  - "los días 1 al 31"
  - "día 1 a día 31"
  - "1 a 31"
  - "del 1 al 31"
pasos:
  - "Definir media móvil simple (SMA) de ventana N."
  - "Aplicar a la ventana que termina en el punto actual (t)."
  - "Para t=31, la ventana es [31-30+1, 31] = [1, 31]."
explicacion: "Una media móvil simple de ventana N en el punto t promedia los valores desde t-N+1 hasta t. Para el día 31 con ventana 30, se promedian los días 1 a 31."
```

### 10 — Diagrama de Dispersión con Regresión
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["regresion", "scatter", "linea-tendencia", "R2"]
enunciado: "Al añadir una línea de tendencia lineal a un gráfico de dispersión, un coeficiente de determinación (R²) cercano a 0 indica que:"
tipo: mc
opciones_explicitas:
  - "La relación entre las variables es muy fuerte."
  - "La línea de tendencia explica casi toda la variabilidad de los datos."
  - "No hay relación lineal significativa entre las variables."
  - "Los datos están perfectamente agrupados en un círculo."
respuesta: "No hay relación lineal significativa entre las variables."
pasos:
  - "Definir R²: proporción de la varianza explicada por el modelo."
  - "Interpretar R² = 0: el modelo no explica nada de la variación."
  - "Concluir ausencia de relación lineal."
explicacion: "R² = 0 significa que la línea de regresión no es mejor que usar la media de Y para predecir Y, indicando falta de correlación lineal."
```

### 11 — Gráfico de Área Apilada
```yaml:
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["area", "apilado", "composicion", "total"]
enunciado: "En un gráfico de área apilada (stacked area chart), la altura total del gráfico en un punto específico del eje X representa:"
tipo: mc
opciones_explicitas:
  - "El valor máximo de la categoría superior."
  - "La suma total de todas las categorías apiladas en ese punto."
  - "El promedio de las categorías."
  - "La diferencia entre la categoría mayor y menor."
respuesta: "La suma total de todas las categorías apiladas en ese punto."
pasos:
  - "Analizar la geometría del área apilada: capas superpuestas."
  - "Identificar que la altura vertical es la integral acumulada."
  - "Concluir que la altura total es la suma de las partes."
explicacion: "La naturaleza apilada hace que la altura vertical en cualquier eje X sea la suma de los valores individuales de cada serie en ese punto, mostrando tanto la composición como el total."
```

### 12 — Corrección de Sesgo en Muestreo
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["muestreo", "sesgo", "distribucion", "representatividad"]
enunciado: "Si se visualizan datos de ingresos de una población donde el 90% gana menos de $20k y el 10% gana más de $1M, usando una escala lineal en el eje Y de un gráfico de barras, el gráfico resultante:"
tipo: completar
respuesta: "invisibiliza las diferencias del 90%"
respuestas_validas:
  - "invisibiliza las diferencias del 90%"
  - "no muestra bien a la mayoría"
  - "comprime la escala para la minoría rica"
  - "oculta la variabilidad de la clase media"
pasos:
  - "Evaluar el impacto de los outliers ($1M) en una escala linear."
  - "Observar que la escala se estira para acomjar los máximos."
  - "Concluir que las variaciones del 90% se comprimen visualmente en una línea casi plana."
explicacion: "La presencia de outliers extremos en una escala lineal comprime visualmente las variaciones de la mayoría de los datos, haciendo indistinguibles las diferencias dentro del grupo mayoritario."
```

### 13 — Gráfico de Chord Diagram
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["chord", "redes", "conexiones", "interacciones"]
enunciado: "Para visualizar las relaciones bidireccionales y el flujo de intensidad entre 8 departamentos de una empresa (quién comunica con quién y cuánto), la mejor visualización es:"
tipo: mc
opciones_explicitas:
  - "Un gráfico de árbol (tree map)."
  - "Un diagrama de Chord (diagrama de cuerdas)."
  - "Un histograma de frecuencias."
  - "Un gráfico de dispersión 3D."
respuesta: "Un diagrama de Chord (diagrama de cuerdas)."
pasos:
  - "Identificar la estructura de datos: grafo completo con pesos en aristas."
  - "Evaluar opciones: tree map (jerarquía), histogram (distribución)."
  - "Seleccionar Chord: diseñado específicamente para mostrar conexiones circulares y flujos entre nodos."
explicacion: "Los diagramas de Chord son ideales para mostrar conexiones y flujos entre entidades en un círculo, permitiendo ver la densidad de interacciones y la dirección/intensidad de las relaciones."
```

### 14 — Normalización Z-Score (Estandarización)
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["normalizacion", "z-score", "estandarizacion", "desviacion-estandar"]
enunciado: "Al estandarizar un conjunto de datos usando Z-Score, si el valor Z de una observación es -2.5, esto significa que:"
tipo: completar
respuesta: "está 2.5 desviaciones estándar por debajo de la media"
respuestas_validas:
  - "esta 2.5 desviaciones estandar por debajo de la media"
  - "esta 2.5 desviaciones estandar por debajo de la media"
  - "esta 2.5 desviaciones estandar por debajo de la media"
  - "esta 2.5 desviaciones estandar por debajo de la media"
pasos:
  - "Definir Z-Score: (x - media) / desviacion_estandar."
  - "Interpretar el signo negativo: por debajo de la media."
  - "Interpretar la magnitud: 2.5 unidades de desviación estándar."
explicacion: "Un Z-Score de -2.5 indica que el dato está 2.5 desviaciones estándar por debajo de la media del conjunto de datos, situándose en la cola inferior de la distribución."
```

### 15 — Gráfico de Violín (Violin Plot)
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["violin", "distribucion", "densidad", "comparacion"]
enunciado: "A diferencia del boxplot, un gráfico de violín (violin plot) añade a la visualización de la mediana y los cuartiles:"
tipo: mc
opciones_explicitas:
  - "La línea de tendencia temporal."
  - "La estimación de la densidad de probabilidad (KDE) de los datos."
  - "El valor mínimo absoluto de la población."
  - "Los datos atípicos individuales marcados con 'x'."
respuesta: "La estimación de la densidad de probabilidad (KDE) de los datos."
pasos:
  - "Comparar boxplot vs violin plot."
  - "Identificar el componente extra del violin: la forma externa."
  - "Relacionar la forma con la densidad de los datos (KDE)."
explicacion: "El violin plot combina un boxplot con un gráfico de densidad de kernel (KDE) girado, mostrando dónde se concentran los datos y su forma de distribución (multimodal, simétrica, etc.)."
```

### 16 — Visualización de Jerarquías (Treemap)
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["treemap", "jerarquia", "parte-todo", "eficiencia-espacial"]
enunciado: "Para visualizar la composición jerárquica de un presupuesto de $10M distribuido en 50 categorías y 200 subcategorías en una pantalla de tamaño estándar, la mejor opción es un Tree Map debido a:"
tipo: completar
respuesta: "su alta eficiencia espacial para mostrar partes de un todo"
respuestas_validas:
  - "su alta eficiencia espacial para mostrar partes de un todo"
  - "su capacidad de mostrar jerarquias en 2d"
  - "su eficiencia para datos jerarquicos"
  - "su capacidad de mostrar grandes volumenes de datos jerarquicos"
pasos:
  - "Analizar el requerimiento: jerarquía profunda, muchos nodos, espacio limitado."
  - "Evaluar alternativas: lista (poco visual), gráfico de árbol (ocupa mucho espacio)."
  - "Seleccionar Treemap: anida rectángulos, usa área para representar valores, maximiza el uso del pixel."
explicacion: "Los Tree Maps son eficientes espacialmente porque anidan rectángulos dentro de rectángulos, permitiendo visualizar grandes jerarquías y sus proporciones relativas en un área 2D fija."
```

### 17 — Gráfico de Barras Agrupadas (Grouped Bar)
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["barra", "agrupada", "comparacion", "categoricas"]
enunciado: "Al comparar el rendimiento de 3 productos (A, B, C) en 4 regiones (Norte, Sur, Este, Oeste) usando un gráfico de barras agrupadas, cada 'grupo' en el eje X debe contener:"
tipo: mc
opciones_explicitas:
  - "Una sola barra del producto más vendido."
  - "Tres barras juntas, una por cada producto, para cada región."
  - "Cuatro barras apiladas verticalmente."
  - "Las etiquetas de las regiones en el eje Y."
respuesta: "Tres barras juntas, una por cada producto, para cada región."
pasos:
  - "Definir la estructura de un gráfico de barras agrupadas."
  - "Identificar los ejes: una categoría en X (regiones), la variable en Y (ventas)."
  - "Determinar la agrupación: los subgrupos (productos) se representan con barras paralelas dentro de cada categoría X."
explicacion: "En un gráfico de barras agrupadas, para cada categoría del eje X (región), se dibujan barras adyacentes para cada subcategoría (producto), permitiendo la comparación directa dentro y entre grupos."
```

### 18 — Corrección de Outliers con Winsorización
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["outliers", "winsorizacion", "robustez", "media"]
enunciado: "La técnica de Winsorización para manejar valores atípicos consiste en:"
tipo: mc
opciones_explicitas:
  - "Eliminar los valores atípicos del dataset."
  - "Reemplazar los valores extremos por el valor del umbral (percentil) correspondiente."
  - "Duplicar los valores centrales para equilibrar la distribución."
  - "Log-transformar todos los datos."
respuesta: "Reemplazar los valores extremos por el valor del umbral (percentil) correspondiente."
pasos:
  - "Definir Winsorización: truncado de colas."
  - "Diferenciar de eliminación: los datos se mantienen pero se recortan."
  - "Describir el proceso: valores por encima del percentil 95 se ponen a 95, etc."
explicacion: "Winsorización no elimina datos, sino que los 'recorta' al percentil definido (ej. 5% y 95%), reduciendo el impacto de los outliers en estadísticas como la media sin perder observaciones."
```

### 19 — Gráfico de Lollipop (Palillo)
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["lollipop", "comparacion", "minimalismo", "barras"]
enunciado: "Un gráfico de Lollipop es una variante minimalista del gráfico de barras que se prefiere cuando:"
tipo: mc
opciones_explicitas:
  - "Se tienen más de 50 categorías para comparar."
  - "Se quiere enfatizar la magnitud exacta del valor final más que el área total."
  - "Los datos son temporales y continuos."
  - "Se necesita mostrar la distribución de frecuencias."
respuesta: "Se quiere enfatizar la magnitud exacta del valor final más que el área total."
pasos:
  - "Analizar la estética del Lollipop: punto final + línea."
  - "Comparar con barra: menos tinta, menos distracción visual."
  - "Identificar el uso ideal: ranking de muchos items donde la posición del punto es clave."
explicacion: "El Lollipop Chart reduce la carga visual (ink) comparado con las barras, enfocando la atención en el punto final (el valor) y facilitando la comparación de rangos en listas largas."
```

### 20 — Análisis de Cluster con Scatter Plot
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["cluster", "scatter", "agrupamiento", "kmeans"]
enunciado: "Al visualizar los resultados de un algoritmo de K-Means con K=3 en un scatter plot 2D, cada cluster se identifica visualmente por:"
tipo: mc
opciones_explicitas:
  - "Una línea de tendencia diferente."
  - "Un color o símbolo distinto para los puntos asignados a ese grupo."
  - "Un área de relleno sombreada."
  - "Una etiqueta de texto sobre cada punto."
respuesta: "Un color o símbolo distinto para los puntos asignados a ese grupo."
pasos:
  - "Definir la salida de K-Means: etiquetas de cluster para cada punto."
  - "Determinar la visualización estándar: scatter plot con color por etiqueta."
  - "Confirmar que la separación visual corresponde a la asignación del algoritmo."
explicacion: "En la visualización de clustering, se usa un mapeo de color (palette) donde cada color representa una etiqueta de cluster (0, 1, 2...), permitiendo ver la separación y solapamiento de los grupos."
```

### 21 — Gráfico de Gantt para Proyectos
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["gantt", "tiempo", "cronograma", "dependencias"]
enunciado: "En un gráfico de Gantt, la superposición horizontal de las barras de dos tareas indica:"
tipo: mc
opciones_explicitas:
  - "Un error en la planificación de recursos."
  - "Que ambas tareas se ejecutan simultáneamente en el tiempo."
  - "Que una tarea depende de la otra."
  - "Que una tarea es más importante que la otra."
respuesta: "Que ambas tareas se ejecutan simultáneamente en el tiempo."
pasos:
  - "Analizar la estructura del Gantt: eje X = tiempo, filas = tareas."
  - "Interpretar la posición horizontal: intervalo de ejecución."
  - "Concluir que la intersección en el eje X implica simultaneidad."
explicacion: "La proyección de las barras sobre el eje temporal muestra el inicio y fin de cada tarea. La superposición en el eje X significa que los periodos de ejecución se solapan, es decir, ocurren simultáneamente."
```

### 22 — Normalización Logarítmica
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["logaritmo", "escala", "outliers", "compresion"]
enunciado: "Al aplicar una transformación logarítmica (log10) a un conjunto de datos con una cola derecha muy larga (outliers positivos grandes), el efecto principal en la visualización es:"
tipo: completar
respuesta: "comprimir la escala de los valores grandes y expandir la de los pequeños"
respuestas_validas:
  - "comprimir la escala de los valores grandes y expandir la de los pequeños"
  - "comprimir los grandes y expandir los pequenos"
  - "reducir la asimetria de la distribucion"
  - "hacer que los outliers sean menos extremos visualmente"
pasos:
  - "Analizar la función log(x): crece lentamente para x grandes."
  - "Evaluar el efecto en outliers: 1000 -> 3, 1000000 -> 6 (compresión)."
  - "Evaluar el efecto en valores pequeños: 0.1 -> -1, 1 -> 0 (expansión relativa)."
explicacion: "La escala logarítmica comprime los valores grandes (reduciendo el impacto visual de los outliers) y expande los valores pequeños, haciendo más visible la variabilidad en la base de la distribución."
```

### 23 — Gráfico de Sankey vs Chord
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["sankey", "chord", "diferencia", "flujo"]
enunciado: "A diferencia del diagrama de Chord, un diagrama de Sankey es preferible cuando:"
tipo: mc
opciones_explicitas:
  - "Se quiere mostrar conexiones bidireccionales simétricas."
  - "Se quiere enfatizar la dirección unidireccional del flujo y las pérdidas."
  - "Se tienen menos de 5 nodos."
  - "Se quiere visualizar una jerarquía estricta."
respuesta: "Se quiere enfatizar la dirección unidireccional del flujo y las pérdidas."
pasos:
  - "Comparar Sankey vs Chord."
  - "Identificar la fortaleza de Sankey: flujo direccional (origen->destino)."
  - "Identificar la debilidad de Chord para flujos asimétricos o con pérdidas."
explicacion: "Los diagramas de Sankey muestran claramente la dirección del flujo y cómo este se divide o pierde a lo largo de un proceso, mientras que los Chords son mejores para conexiones recíprocas y simétricas."
```

### 24 — Gráfico de Dispersión con Burbujas (Bubble Chart)
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["bubble", "3d", "scatter", "volumen"]
enunciado: "En un gráfico de burbujas (bubble chart), la tercera dimensión de datos se representa mediante:"
tipo: mc
opciones_explicitas:
  - "El color de la burbuja."
  - "El radio o área del círculo."
  - "La opacidad de la burbuja."
  - "La posición en el eje Z."
respuesta: "El radio o área del círculo."
pasos:
  - "Definir la estructura del Bubble Chart: eje X, eje Y y una variable adicional."
  - "Identificar el mapeo visual para la tercera variable: tamaño."
  - "Precisar que el área (no solo el radio) debe ser proporcional al valor."
explicacion: "El Bubble Chart extiende el scatter plot añadiendo una variable cuantitativa mapeada al tamaño (área) de los marcadores circulares, permitiendo visualizar 3 variables en 2D."
```

### 25 — Visualización de Matriz de Confusión
```yaml
metadata:
  materia: "informatica"
  tema: "datos-visualizacion-de-datos"
  nivel: "avanzado"
  tags: ["confusion", "clasificacion", "heatmap", "metricas"]
enunciado: "Para evaluar el rendimiento de un clasificador de imágenes en 5 clases, la mejor visualización para ver rápidamente qué clase se confunde más con otra es:"
tipo: completar
respuesta: "una matriz de confusión visualizada como heatmap"
respuestas_validas:
  - "una matriz de confusión visualizada como heatmap"
  - "heatmap de la matriz de confusion"
  - "matriz de confusion en heatmap"
  - "heatmap de la matriz de confusion"
pasos:
  - "Identificar el objetivo: diagnosticar errores de clasificación cruzada."
  - "Seleccionar la herramienta: matriz de confusión (filas reales vs columnas predichas)."
  - "Elegir la visualización: heatmap para resaltar celdas con altos valores de error."
explicacion: "Una matriz de confusión visualizada como heatmap permite identificar rápidamente las celdas fuera de la diagonal principal (errores) con mayor intensidad de color, revelando patrones de confusión entre clases específicas."
```