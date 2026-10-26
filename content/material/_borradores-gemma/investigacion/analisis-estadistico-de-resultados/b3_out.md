### 1 — Correlación vs Causalidad
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

### 2 — Interpretación del P-valor
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

enunciado: "En un estudio con un nivel de significancia $\alpha = 0.05$, se obtiene un p-valor de {escenarios[escenario_idx][0]}. Por lo tanto, la decisión estadística es ___ la hipótesis nula."

pasos:
  - "Comparar el p-valor obtenido con el nivel de significancia $\alpha$."
  - "Si p-valor < $\alpha$, se rechaza la hipótesis nula."
  - "Si p-valor $\ge$ $\alpha$, no se rechaza la hipótesis nula."

explicacion: |
  El p-valor representa la probabilidad de observar los resultados obtenidos (o más extremos) asumiendo que la hipótesis nula es cierta.
```

### 3 — Sesgo de Selección
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

### 4 — Error Tipo I vs Error Tipo II
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

### 5 — Secuencia del Análisis de Datos
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