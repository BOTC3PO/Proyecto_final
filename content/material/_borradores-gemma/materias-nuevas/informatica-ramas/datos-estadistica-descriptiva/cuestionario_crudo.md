### 1 — Medida de tendencia central en distribuciones sesgadas
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["medidas-de-tendencia-central", "sesgo"]
tipo: vf
enunciado:
  - "En una distribución de salarios con una cola larga hacia la derecha (sesgo positivo), la media aritmética es estrictamente mayor que la mediana."
respuesta: verdadero
pasos:
  - "Analizar la definición de sesgo positivo en estadística descriptiva."
  - "Verificar que la media es sensible a valores extremos altos."
  - "Confirmar que la mediana se mantiene más estable frente a esos extremos."
explicacion: "En un sesgo positivo, los valores atípicos altos arrastran la media hacia arriba, mientras que la mediana permanece en el centro de la masa de datos, resultando en Media > Mediana > Moda (generalmente)."
```

### 2 — Cálculo de varianza poblacional
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["varianza", "poblacion"]
tipo: completar
enunciado:
  - "Para calcular la varianza poblacional (\(\sigma^2\)) de un conjunto de datos, la fórmula correcta divide la suma de cuadrados de las desviaciones respecto a la media por {{N}}."
respuesta: "N"
respuestas_validas:
  - "N"
  - "n"
  - "el numero total de observaciones"
  - "la poblacion total"
pasos:
  - "Identificar la fórmula de varianza poblacional: \(\sigma^2 = \frac{\sum (x_i - \mu)^2}{N}\)."
  - "Distinguir entre \(N\) (población) y \(n-1\) (muestra)."
  - "Completar el denominador según la definición de parámetro poblacional."
explicacion: "La varianza poblacional se calcula dividiendo por \(N\) (el tamaño total de la población). Si se usara \(n-1\), estaríamos calculando la varianza muestral (sesgo corregido), no la poblacional."
```

### 3 — Interpretación de coeficiente de variación
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["coeficiente-de-variacion", "comparabilidad"]
tipo: mc
enunciado:
  - "¿Por qué el Coeficiente de Variación (CV) es preferible a la desviación estándar para comparar la dispersión de dos variables con unidades diferentes (ej. peso en kg vs altura en cm)?"
opciones_explicitas:
  - "Porque el CV elimina el sesgo de los datos."
  - "Porque el CV es una medida adimensional que normaliza la dispersión respecto a la media."
  - "Porque el CV siempre es menor que la desviación estándar."
  - "Porque el CV utiliza la mediana como referencia central."
respuesta: "Porque el CV es una medida adimensional que normaliza la dispersión respecto a la media."
pasos:
  - "Definir CV como \(\frac{\sigma}{\mu}\)."
  - "Analizar el efecto de las unidades en la comparación directa."
  - "Identificar que la división por la media elimina las unidades."
explicacion: "El CV expresa la desviación estándar como un porcentaje de la media, haciendo la medida adimensional y permitiendo la comparación relativa de dispersión entre escalas diferentes."
```

### 4 — Cálculo de percentil 75 (Q3)
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["cuartiles", "percentiles"]
tipo: completar
enunciado:
  - "En un conjunto de datos ordenados de tamaño \(n=100\), el índice para calcular el tercer cuartil (Q3) usando el método \((n+1)p\) es {{IDX}}."
respuesta: "75.75"
respuestas_validas:
  - "75.75"
  - "75.75-th"
  - "el valor entre el 75 y 76"
pasos:
  - "Aplicar la fórmula de posición: \(P_k = k/100 \times (n+1)\)."
  - "Sustituir \(k=75\) y \(n=100\)."
  - "Calcular: \(0.75 \times 101 = 75.75\)."
explicacion: "El método \((n+1)p\) indica que Q3 está en la posición 75.75, lo que implica interpolar entre el dato en la posición 75 y el 76. El índice numérico exacto es 75.75."
```

### 5 — Propiedad de la suma de desviaciones
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["propiedades-media", "desviaciones"]
tipo: vf
enunciado:
  - "La suma algebraica de las desviaciones de cada dato respecto a la media aritmética es siempre igual a la desviación estándar."
respuesta: falso
pasos:
  - "Recordar la propiedad fundamental de la media: \(\sum (x_i - \bar{x}) = 0\)."
  - "Comparar con la definición de desviación estándar (raíz cuadrada de la varianza)."
  - "Determinar si la igualdad es posible solo en casos triviales."
explicacion: "La suma de las desviaciones respecto a la media es siempre cero. La desviación estándar es una raíz cuadrada positiva (o cero), por lo que nunca son iguales salvo en conjuntos vacíos o de un solo elemento sin desviación."
```

### 6 — Identificación de outliers con IQR
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["outliers", "iqr", "caja-y-bigotes"]
tipo: mc
enunciado:
  - "Según la regla estándar de Tukey, un dato se considera un outlier 'extremo' si está por encima de {{LIMITE}}."
opciones_explicitas:
  - "Q3 + 1.5 * IQR"
  - "Q3 + 3 * IQR"
  - "Media + 2 * DE"
  - "Q3 + 2 * IQR"
respuesta: "Q3 + 3 * IQR"
pasos:
  - "Definir IQR = Q3 - Q1."
  - "Distinguir entre límites para outliers moderados (1.5x) y extremos (3x)."
  - "Identificar la frontera superior para valores extremos."
explicacion: "Los outliers moderados están fuera de [Q1 - 1.5*IQR, Q3 + 1.5*IQR]. Los outliers extremos son aquellos que superan Q3 + 3*IQR o están por debajo de Q1 - 3*IQR."
```

### 7 — Relación entre varianza y unidades
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["unidades", "varianza"]
tipo: completar
enunciado:
  - "Si los datos originales están en metros, la varianza calculada tiene como unidad {{UNIDAD}}."
respuesta: "metros cuadrados"
respuestas_validas:
  - "metros cuadrados"
  - "m^2"
  - "m2"
  - "metro al cuadrado"
pasos:
  - "Analizar la operación de la varianza: \((x_i - \mu)^2\)."
  - "Aplicar reglas de unidades a la diferencia y luego al cuadrado."
  - "Concluir que la unidad se eleva al cuadrado."
explicacion: "La varianza es la media de las desviaciones al cuadrado. Si los datos están en metros, la desviación está en metros, y al elevarla al cuadrado, la unidad resultante es metros cuadrados (\(m^2\))."
```

### 8 — Cálculo de media geométrica para tasas
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["media-geometrica", "crecimiento"]
tipo: mc
enunciado:
  - "Para calcular la tasa de crecimiento anual compuesta promedio a partir de una serie de factores de crecimiento multiplicativos, se debe usar:"
opciones_explicitas:
  - "La media aritmética de los factores."
  - "La media geométrica de los factores."
  - "La mediana de los factores."
  - "La media armónica de los factores."
respuesta: "La media geométrica de los factores."
pasos:
  - "Reconocer que el crecimiento compuesto es multiplicativo."
  - "Identificar que la media aritmética sobrestima el crecimiento en contextos multiplicativos."
  - "Seleccionar la media que preserva el producto total."
explicacion: "La media geométrica es la única medida adecuada para promediar tasas de interés o factores de crecimiento porque considera el efecto compuesto (producto) de los periodos."
```

### 9 — Interpretación de asimetría negativa
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["asimetria", "cola-izquierda"]
tipo: vf
enunciado:
  - "En una distribución con asimetría negativa (sesgo a la izquierda), la cola larga de la distribución se extiende hacia los valores menores."
respuesta: verdadero
pasos:
  - "Definir asimetría negativa como concentración de datos hacia la derecha."
  - "Visualizar la cola larga hacia la izquierda (valores bajos)."
  - "Confirmar que la media suele ser menor que la mediana en este caso."
explicacion: "La asimetría negativa indica que la cola de la distribución se alarga hacia la izquierda (valores más bajos), atrayendo la media hacia abajo, generalmente resultando en Media < Mediana."
```

### 10 — Cálculo de rango intercuartílico
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["iqr", "dispersion"]
tipo: completar
enunciado:
  - "El Rango Intercuartílico (IQR) se calcula restando el primer cuartil (Q1) del {{CUARTIL}}."
respuesta: "tercer cuartil"
respuestas_validas:
  - "tercer cuartil"
  - "Q3"
  - "cuarto cuartil"
  - "percentil 75"
pasos:
  - "Definir IQR = Q3 - Q1."
  - "Identificar Q1 como el 25% y Q3 como el 75%."
  - "Completar la fórmula de resta."
explicacion: "El IQR mide la dispersión del 50% central de los datos y se define matemáticamente como la diferencia entre el tercer cuartil (Q3) y el primer cuartil (Q1)."
```

### 11 — Momento de orden 2
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["momentos", "definicion"]
tipo: mc
enunciado:
  - "En el análisis de momentos de una distribución, el segundo momento central (central moment of order 2) corresponde a:"
opciones_explicitas:
  - "La varianza."
  - "La desviación estándar."
  - "La asimetría."
  - "La curtosis."
respuesta: "La varianza."
pasos:
  - "Recordar la definición de momentos centrales: \(\mu_k = E[(X-\mu)^k]\)."
  - "Identificar \(k=2\)."
  - "Relacionar con la varianza \(\sigma^2\)."
explicacion: "El segundo momento central es la definición formal de la varianza. El tercer momento central se relaciona con la asimetría y el cuarto con la curtosis."
```

### 12 — Corrección de Bonferroni en gráficos
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["correccion", "multimedio"]
tipo: completar
enunciado:
  - "Al realizar múltiples pruebas de hipótesis sobre el mismo conjunto de datos para encontrar outliers, la corrección de {{NOMBRE}} se usa para reducir el riesgo de falsos positivos."
respuesta: "bonferroni"
respuestas_validas:
  - "bonferroni"
  - "bonferroni correction"
  - "correccion de bonferroni"
pasos:
  - "Identificar el problema de comparaciones múltiples."
  - "Recordar el método estándar para ajustar el nivel de significancia \(\alpha\)."
  - "Nombrar al estadístico o método asociado."
explicacion: "La corrección de Bonferroni ajusta el nivel de significancia dividiéndolo por el número de pruebas realizadas, reduciendo la probabilidad de error Tipo I (falsos positivos) en análisis múltiples."
```

### 13 — Relación entre media y mediana en simetría
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["simetria", "distribucion-normal"]
tipo: vf
enunciado:
  - "En una distribución perfectamente simétrica (como la normal), la media, la mediana y la moda coinciden exactamente en el centro de la distribución."
respuesta: verdadero
pasos:
  - "Analizar las propiedades de la distribución normal."
  - "Verificar la posición de las medidas de tendencia central."
  - "Confirmar la coincidencia en casos de simetría perfecta."
explicacion: "La simetría perfecta implica que la mitad de los datos están a cada lado del centro, y la concentración máxima (moda) está en ese punto, haciendo que las tres medidas sean iguales."
```

### 14 — Cálculo de media ponderada
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["media-ponderada"]
tipo: completar
enunciado:
  - "La fórmula para la media ponderada es \(\frac{\sum {{PESO}} \cdot x_i}{\sum w_i}\)."
respuesta: "w_i"
respuestas_validas:
  - "w_i"
  - "peso"
  - "weights"
  - "la frecuencia"
pasos:
  - "Definir media ponderada: suma de productos (valor * peso) dividido por suma de pesos."
  - "Identificar el símbolo estándar para el peso \(w_i\)."
  - "Completar la variable multiplicativa."
explicacion: "En la fórmula de la media ponderada, cada valor \(x_i\) se multiplica por su peso correspondiente \(w_i\) antes de sumar y dividir por la suma total de los pesos."
```

### 15 — Interpretación de curtosis leptocúrtica
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["curtosis", "colas"]
tipo: mc
enunciado:
  - "Una distribución leptocúrtica se caracteriza por tener:"
opciones_explicitas:
  - "Una cola más pesada y una punta más aguda que la distribución normal."
  - "Una cola más ligera y una punta más plana que la distribución normal."
  - "Simetría perfecta y curtosis cero."
  - "Asimetría positiva marcada."
respuesta: "Una cola más pesada y una punta más aguda que la distribución normal."
pasos:
  - "Definir curtosis como medida de la 'gruesura' de las colas y la agudeza del pico."
  - "Identificar 'lepto' como agudo/puntiagudo."
  - "Relacionar con valores de curtosis > 3 (o > 0 según definición excesiva)."
explicacion: "Las distribuciones leptocúrticas tienen picos más altos y colas más pesadas que la normal, indicando mayor probabilidad de valores extremos (outliers)."
```

### 16 — Cálculo de desviación media absoluta
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["desviacion-media"]
tipo: completar
enunciado:
  - "La desviación media absoluta (DMA) se calcula como el promedio de las {{VALOR}} de las desviaciones respecto a la media."
respuesta: "valores absolutos"
respuestas_validas:
  - "valores absolutos"
  - "valores absolutos de"
  - "modulos"
  - "modulos de"
pasos:
  - "Definir DMA: \( \frac{\sum |x_i - \bar{x}|}{n} \)."
  - "Identificar la operación de valor absoluto necesaria para evitar cancelación."
  - "Completar la descripción de la operación."
explicacion: "La DMA utiliza valores absolutos de las desviaciones para evitar que las desviaciones positivas y negativas se cancelen entre sí, proporcionando una medida lineal de dispersión."
```

### 17 — Regla de Chebyshev
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["chebyshev", "cota-inferior"]
tipo: mc
enunciado:
  - "Según el teorema de Chebyshev, para cualquier distribución (no solo la normal), la proporción mínima de datos dentro de \(k\) desviaciones estándar de la media es:"
opciones_explicitas:
  - "1 - 1/k"
  - "1 - 1/k^2"
  - "1/k^2"
  - "k^2"
respuesta: "1 - 1/k^2"
pasos:
  - "Recordar la desigualdad de Chebyshev: \(P(|X-\mu| \ge k\sigma) \le 1/k^2\)."
  - "Invertir para obtener la proporción dentro del intervalo."
  - "Seleccionar la fórmula complementaria."
explicacion: "Chebyshev establece que al menos \(1 - 1/k^2\) de los datos se encuentran dentro de \(k\) desviaciones estándar de la media, independientemente de la forma de la distribución."
```

### 18 — Transformación logarítmica de datos sesgados
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["transformacion", "logaritmo"]
tipo: completar
enunciado:
  - "Para normalizar una distribución con sesgo positivo fuerte, a menudo se aplica una transformación {{TIPO}} a los datos."
respuesta: "logaritmica"
respuestas_validas:
  - "logaritmica"
  - "log"
  - "logaritmo"
  - "ln"
pasos:
  - "Identificar el sesgo positivo (cola a la derecha)."
  - "Recordar que los logaritmos comprimen los valores grandes."
  - "Nombrar la transformación estándar para reducir el sesgo positivo."
explicacion: "La transformación logarítmica reduce el efecto de los valores extremos altos en la cola derecha, haciendo que la distribución se acerque más a la normalidad."
```

### 19 — Cálculo de mediana en datos agrupados
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["medida-agrupada", "interpolacion"]
tipo: mc
enunciado:
  - "Para estimar la mediana de datos agrupados en intervalos, se utiliza:"
opciones_explicitas:
  - "La media aritmética de los puntos medios."
  - "Interpolación lineal dentro del intervalo mediano."
  - "El punto medio exacto del rango total."
  - "La moda del histograma."
respuesta: "Interpolación lineal dentro del intervalo mediano."
pasos:
  - "Definir la clase mediana (donde la frecuencia acumulada supera \(N/2\))."
  - "Explicar que la mediana exacta no se conoce, solo se estima."
  - "Identificar la interpolación lineal como el método estándar."
explicacion: "En datos agrupados, la mediana se estima asumiendo que los datos dentro de la clase mediana están uniformemente distribuidos, usando interpolación lineal."
```

### 20 — Relación entre varianza y suma de cuadrados
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["sumas-de-cuadrados", "identidad"]
tipo: completar
enunciado:
  - "La varianza muestral se puede calcular como \(\frac{SS - \frac{(\sum x)^2}{n}}{n-1}\), donde SS representa la {{SUMA}} de los datos."
respuesta: "suma-de-cuadrados"
respuestas_validas:
  - "suma-de-cuadrados"
  - "suma de cuadrados"
  - "sum of squares"
  - "SS"
pasos:
  - "Recordar la fórmula computacional de la varianza."
  - "Identificar SS como \(\sum x^2\)."
  - "Completar la descripción de SS."
explicacion: "SS (Sum of Squares) es la suma de los cuadrados individuales de los datos (\(\sum x_i^2\)). Esta fórmula es útil para cálculos rápidos sin necesidad de calcular la media primero."
```

### 21 — Interpretación de coeficiente de variación de Pearson
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["cv-pearson", "sesgo"]
tipo: vf
enunciado:
  - "El coeficiente de variación de Pearson (CV1) se define como la relación entre la desviación estándar y la media, y es válido incluso si la media es cero."
respuesta: falso
pasos:
  - "Definir CV1 = \(\sigma / \mu\)."
  - "Analizar la división por cero cuando \(\mu = 0\)."
  - "Determinar la validez matemática del operador."
explicacion: "El CV de Pearson es indefinido cuando la media es cero (división por cero). Además, no es recomendable si la media es cercana a cero o si la distribución cruza el cero."
```

### 22 — Cálculo de media aritmética simple
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["media-simple"]
tipo: completar
enunciado:
  - "La media aritmética de un conjunto de datos es igual a la suma de todos los valores dividida por {{N}}."
respuesta: "n"
respuestas_validas:
  - "n"
  - "N"
  - "el numero de datos"
  - "el tamano de la muestra"
pasos:
  - "Definir media aritmética: \(\bar{x} = \frac{\sum x_i}{n}\)."
  - "Identificar el denominador."
  - "Completar la variable de conteo."
explicacion: "La media aritmética se calcula sumando todos los valores y dividiendo por el número total de observaciones \(n\)."
```

### 23 — Identificación de moda multimodal
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["moda", "multimodal"]
tipo: mc
enunciado:
  - "Una distribución con dos picos de frecuencia igualmente altos se denomina:"
opciones_explicitas:
  - "Unimodal."
  - "Bimodal."
  - "Multimodal."
  - "Platicúrtica."
respuesta: "Bimodal."
pasos:
  - "Definir moda como el valor más frecuente."
  - "Identificar el prefijo para dos picos."
  - "Seleccionar el término técnico correcto."
explicacion: "Una distribución bimodal tiene dos modas (picos), indicando que los datos pueden provenir de dos poblaciones distintas o procesos diferentes."
```

### 24 — Efecto de una transformación lineal en la desviación estándar
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["transformacion-lineal", "desviacion-estandar"]
tipo: completar
enunciado:
  - "Si se multiplica cada dato de un conjunto por un factor constante \(k\), la nueva desviación estándar será la original multiplicada por {{VALOR}}."
respuesta: "|k|"
respuestas_validas:
  - "|k|"
  - "valor absoluto de k"
  - "valor absoluto de k"
  - "abs(k)"
pasos:
  - "Analizar \(SD(kX) = |k| SD(X)\)."
  - "Recordar que la desviación estándar es una medida de escala positiva."
  - "Incluir el valor absoluto para casos negativos de \(k\)."
explicacion: "La desviación estándar es sensible a cambios de escala. Multiplicar datos por \(k\) multiplica la dispersión por \(|k|\) (valor absoluto), ya que la dispersión no puede ser negativa."
```

### 25 — Cálculo de coeficiente de correlación de Pearson
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "datos-estadistica-descriptiva"
  nivel: "avanzado"
  tags: ["correlacion", "pearson"]
tipo: mc
enunciado:
  - "El coeficiente de correlación de Pearson mide exclusivamente:"
opciones_explicitas:
  - "La relación lineal entre dos variables."
  - "La relación monotónica entre dos variables."
  - "La dependencia funcional entre dos variables."
  - "La causalidad entre dos variables."
respuesta: "La relación lineal entre dos variables."
pasos:
  - "Definir correlación de Pearson (\(r\))."
  - "Distinguir entre linealidad y monotonicidad (Spearman)."
  - "Aclarar que correlación no implica causalidad."
explicacion: "Pearson mide la fuerza y dirección de una relación LINEAL. Para relaciones monótonas no lineales, se usa Spearman. La correlación por sí sola no prueba causalidad."
```