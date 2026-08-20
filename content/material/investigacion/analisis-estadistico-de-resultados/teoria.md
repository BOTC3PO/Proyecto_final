# Investigación — Análisis estadístico de resultados (teoría)

> Tema del MAPA: `investigacion/analisis-estadistico-de-resultados`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría

**Presentación** — Herramientas para interpretar datos numéricos y extraer conclusiones en investigaciones.

---

## 1. Medidas de tendencia central

Las medidas de tendencia central son valores que resumen un conjunto de datos a través de un único número representativo. La **media aritmética**, o promedio, se calcula sumando todos los valores y dividiendo por la cantidad total. Es útil cuando los datos están distribuidos simétricamente, pero puede ser influenciada por valores extremos (outliers).  

La **mediana** es el valor que ocupa la posición central cuando los datos están ordenados de menor a mayor. A diferencia de la media, no se ve afectada por valores atípicos, lo que la hace más confiable en distribuciones asimétricas o con datos categóricos ordinales. Por ejemplo, si un grupo de estudiantes obtuvo notas: 5, 6, 7, 8, 10, la mediana es 7.  

La **moda** es el valor que aparece con mayor frecuencia en un conjunto de datos. Es útil para variables categóricas (como preferencias o colores) pero no siempre existe o puede ser múltiple si hay empates.

---

## 2. Dispersión y variabilidad

La dispersión mide cuán alejados están los datos del valor central. Un conjunto con poca variación tiene valores muy cercanos a la media, mientras que uno con alta dispersión muestra una gran diversidad en sus registros.  

La **desviación estándar** es el indicador más común de variabilidad: calcula la distancia promedio entre cada dato y la media. Por ejemplo, los datos [10, 11, 10, 11, 10] tienen una desviación baja porque están agrupados, mientras que [10, 20, 0, 30, 10] muestran alta dispersión.  

El **rango** es la diferencia entre el valor máximo y mínimo, y aunque sencillo de calcular, no considera todos los datos. La **varianza**, cuadrado de la desviación estándar, amplifica el impacto de valores extremos pero se usa principalmente en cálculos avanzados.

---

## 3. Elección de herramientas según el tipo de dato

No todas las medidas son aplicables a cualquier conjunto de datos. Las **medias** solo funcionan con variables numéricas (como edades o puntajes), mientras que la **moda** puede usarse en escalas categóricas (ej.: "color favorito").  

La **mediana** es preferible cuando los datos tienen valores atípicos o están sesgados. Por ejemplo, si en un estudio de ingresos se incluye a un millonario entre personas con salarios promedio, la media se distorsiona, pero la mediana sigue representando mejor el "centro" del grupo.

---

## 4. Interpretación crítica de los resultados

El análisis estadístico no es solo calcular números: requiere contexto. Una media alta puede ocultar desigualdades si hay mucha dispersión. Por ejemplo, si un curso tiene una nota promedio de 7, pero la mitad aprobaron con 6 y la otra mitad con 8, eso indica estabilidad; en cambio, si la mitad aprobó con 4 y la otra mitad con 10, la dispersión alta sugiere inconsistencia.  

También es clave comparar medidas entre grupos. Si un medicamento reduce el tiempo de recuperación de una enfermedad en promedio en 3 días, pero la desviación estándar es muy alta, eso podría indicar que funciona bien para algunos pacientes y no para otros.

---

## N. Conexión con lo que sigue

Este tema sirve como base para temas como inferencia estadistica, donde se usan estas medidas para hacer predicciones o validar hipótesis en muestras de datos.