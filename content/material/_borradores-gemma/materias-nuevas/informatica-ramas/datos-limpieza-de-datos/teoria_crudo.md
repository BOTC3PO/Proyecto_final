# Limpieza de Datos Avanzada: Estrategias de Integridad y Normalización

La limpieza de datos (data cleaning o wrangling) no es simplemente eliminar filas vacías; es el proceso crítico de transformar datos crudos, desordenados y heterogéneos en un formato estructurado y confiable para el análisis. En el nivel avanzado, el foco deja de estar en la corrección manual para pasar a la implementación de pipelines automatizados, la gestión de la integridad referencial y la normalización estadística. La premisa fundamental es que la calidad de los insights finales depende directamente de la rigurosidad de esta etapa, a menudo responsable del 60-80% del tiempo de un proyecto de ciencia de datos.

## Fundamentos Técnicos y Ejecución

A diferencia de los niveles básicos, aquí utilizamos librerías como `pandas` en Python o `dplyr` en R para manipular DataFrames de manera vectorizada. La limpieza avanzada implica tres pilares:

1.  **Manejo de valores atípicos (outliers) contextuales:** No se trata solo de eliminar puntos que están lejos de la media, sino de identificarlos mediante métodos estadísticos robustos como los *percentiles* o el *Intervalo Intercuartílico (IQR)*.
    ```python
    # Ejemplo: Filtrado basado en IQR para detectar outliers en una columna 'salario'
    Q1 = df['salario'].quantile(0.25)
    Q3 = df['salario'].quantile(0.75)
    IQR = Q3 - Q1
    limite_inferior = Q1 - 1.5 * IQR
    limite_superior = Q3 + 1.5 * IQR
    df_clean = df[(df['salario'] >= limite_inferior) & (df['salario'] <= limite_superior)]
    ```

2.  **Normalización y Estandarización de Fechas:** Las fechas suelen venir en formatos mixtos (`DD/MM/YYYY`, `MM-DD-YY`, strings con horas). Es crucial parsearlas uniformemente y extraer componentes temporales relevantes (día de la semana, mes, trimestre) para análisis de series de tiempo.
3.  **Resolución de duplicados semánticos:** Más allá de `drop_duplicates()`, se debe lidiar con registros que representan la misma entidad pero con pequeñas variaciones (ej. "Buenos Aires", "B. Aires", "Buenos aires"). Esto requiere técnicas de *fuzzy matching* o normalización de cadenas (lowercase, strip, remove punctuation).

## Errores Comunes en el Nivel Avanzado

*   **Pérdida silenciosa de datos:** Al usar `dropna()` sin definir un umbral de tolerancia (`thresh`), se pueden perder filas completas que contienen información valiosa en otras columnas, sesgando la muestra hacia los registros "completos".
*   **Fuga de datos (Data Leakage) durante la limpieza:** Calcular estadísticas (como la media para imputar valores faltantes) sobre *todo* el dataset antes de dividirlo en entrenamiento y prueba. Esto contamina el conjunto de prueba. La imputación debe calcularse solo en el entrenamiento y aplicarse a ambos.
*   **Ignorar la granularidad temporal:** Al agrupar datos por día cuando la frecuencia real es por hora, se pierde variabilidad crucial. O viceversa, al promediar datos estacionales sin desestacionalizar, se obtienen tendencias engañosas.

## Cuándo usar y cuándo evitar

*   **Usar cuando:** Los datos provienen de múltiples fuentes (ETL), tienen ruido estructural, o se requieren modelos de machine learning sensibles a la escala de las variables (como SVM o KNN), donde la normalización es obligatoria.
*   **Evitar o tener precaución cuando:** El objetivo es un análisis exploratorio rápido (EDA) donde se busca entender la distribución original de los errores; o cuando se trabaja con datos categóricos ordinales donde la normalización numérica destruiría el significado jerárquico de las categorías.

## Caso de Uso Extendido: Pipeline de Ventas Multicanal

Imaginemos un escenario donde se consolidan ventas de una tienda física (CSV) y una tienda online (JSON/API).

1.  **Extracción y Unión:** Se cargan ambos fuentes. La tienda online tiene IDs de producto con prefijos de región, mientras que la física no. Se estandarizan los IDs usando `str.replace` para eliminar prefijos no alfanuméricos.
2.  **Limpieza de Precios:** Los precios en JSON vienen como strings con símbolos de moneda (`"$ 1.200,50"`). Se aplica una función lambda que elimina símbolos, reemplaza la coma decimal por punto y convierte a float.
3.  **Imputación Inteligente:** En la tienda física faltan edades de clientes. En lugar de imputar la media global (que sería errónea si la tienda tiene dos sucursales con públicos distintos), se calcula la mediana por código postal y se imputa ese valor. Esto preserva la estructura demográfica local.
4.  **Deduplicación Avanzada:** Se detectan transacciones duplicadas por fallos en la API del e-commerce. Se agrupa por `id_transaccion` y `timestamp`, y se retiene el registro con la información de producto más completa (mayor número de campos no nulos).

Este enfoque asegura que el modelo predictivo final no solo sea preciso, sino también robusto frente a la realidad sucia de los datos empresariales.