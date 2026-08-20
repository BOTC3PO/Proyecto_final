# Estadística Descriptiva Avanzada: Más allá de la media y la desviación estándar

En el análisis de datos profesional, la estadística descriptiva no se limita a resumir números; su objetivo es caracterizar la estructura subyacente de una distribución para tomar decisiones informadas. Mientras que en niveles introductorios nos centramos en la tendencia central y la dispersión básica, el nivel avanzado exige comprender la forma de la distribución, la robustez de las medidas y las relaciones multivariadas. Esto es crucial cuando los datos reales violan las suposiciones ideales de normalidad o presentan valores atípicos influyentes.

## Medidas de forma y robustez

La normalidad es la piedra angular de muchas pruebas estadísticas paramétricas, pero en la práctica, los datos rara vez son perfectamente simétricos. Dos conceptos clave para evaluar la forma son la **asimetría (skewness)** y la **kurtosis**.

*   **Asimetría:** Indica la falta de simetría. Una asimetría positiva (cola larga a la derecha) es común en datos de ingresos o tiempos de respuesta. Una asimetría negativa sugiere un techo o límite superior claro.
*   **Kurtosis:** Mide el "peso" de las colas y la agudeza del pico. Una kurtosis alta (leptocúrtica) implica mayor probabilidad de valores extremos (outliers) que la distribución normal, lo cual es crítico en gestión de riesgos.

Para mitigar el impacto de estos valores extremos, los analistas avanzados utilizan medidas **robustas**:
*   **Mediana:** En lugar de la media aritmética.
*   **Rango Intercuartílico (IQR):** En lugar de la varianza o desviación estándar. El IQR calcula la distancia entre el primer cuartil (Q1) y el tercer cuartil (Q3), ignorando el 50% de los datos centrales y los extremos.

## Coeficientes de correlación no paramétricos

La correlación de Pearson ($r$) asume una relación lineal y datos normales. Cuando estas condiciones no se cumplen, se recurre a:
*   **Correlación de Spearman ($\rho$):** Evalúa la relación monótona basada en rangos. Es ideal para datos ordinales o no normales.
*   **Correlación de Kendall ($\tau$):** Más robusta para conjuntos de datos pequeños o con muchos empates, midiendo la concordancia entre pares de observaciones.

## Errores comunes en el análisis avanzado

1.  **Confundir correlación con causalidad:** Un coeficiente alto no implica que una variable cause cambios en la otra. Pueden existir variables confusoras ocultas.
2.  **Ignorar la heterocedasticidad:** Asumir que la varianza es constante cuando en realidad cambia según el nivel de la variable independiente, lo que invalida inferencias posteriores.
3.  **Uso indebido de la media en distribuciones sesgadas:** Reportar el "ingreso promedio" en una población con desigualdad extrema distorsiona la realidad; la mediana o la moda son más representativas.
4.  **Sobredimensionar la normalidad:** Aplicar pruebas paramétricas a datos claramente no normales sin transformación ni justificación robusta, llevando a errores Tipo I o II.

## Cuándo usar y cuándo no usar medidas clásicas

*   **Usar media y desviación estándar:** Cuando la distribución es aproximadamente simétrica, sin outliers influyentes y los datos son de intervalo o razón.
*   **Usar mediana e IQR:** Cuando hay outliers, la distribución es sesgada o los datos son ordinales.
*   **Usar Spearman/Kendall:** Cuando la relación no es lineal o los datos no cumplen normalidad.
*   **No usar Pearson:** Con datos categóricos nominales (usa Chi-cuadrado o Cramer's V), con relaciones no monótonas, o con outliers extremos que distorsionan la línea de regresión.

## Ejemplo extendido: Análisis de tiempos de espera en soporte técnico

Imagina que eres analista de datos en una empresa de SaaS. Quieres evaluar la eficiencia del soporte técnico. Recoges 1,000 registros de "tiempo de resolución" (en horas).

Al calcular la media ($\bar{x} = 4.2$ horas) y la desviación estándar ($\sigma = 6.5$ horas), notas que $\sigma > \bar{x}$, lo que sugiere alta variabilidad y posible sesgo positivo. Al inspeccionar el histograma, confirmas una cola larga a la derecha debido a algunos casos complejos que tomaron más de 100 horas.

**Análisis avanzado:**
1.  **Robustez:** Calculas la mediana (2.1 horas) y el IQR (1.5 - 4.8 horas). La mediana indica que el 50% de los tickets se resuelven en menos de 2.1 horas, ofreciendo una visión más realista de la experiencia típica del usuario que la media distorsionada por los casos extremos.
2.  **Forma:** La asimetría es de 3.5 (fuertemente positiva) y la kurtosis es de 12 (muy leptocúrtica). Esto confirma la presencia de "cisnes negros" operativos que requieren atención especial, no solo como ruido.
3.  **Relación:** Quieres ver si el "nivel de prioridad" (bajo, medio, alto, crítico) afecta el tiempo. Usas la correlación de Spearman en lugar de Pearson, ya que la prioridad es ordinal y el tiempo de resolución no es normal. El coeficiente $\rho = 0.65$ indica una fuerte asociación monótona positiva: a mayor prioridad, mayor tiempo de resolución, pero no necesariamente lineal.

Este enfoque permite al equipo de operaciones identificar que el problema no es la ineficiencia general, sino la gestión de casos extremos, y priorizar recursos para aquellos tickets que se desvían significativamente del IQR.