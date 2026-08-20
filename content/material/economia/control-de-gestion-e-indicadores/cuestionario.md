# Economia — Control de gestion e indicadores (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Control de Gestión

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["definicion", "gestion"]

respuesta: "proceso"
tipo: "completar"
respuestas_validas:
  - "proceso"

enunciado: "El control de gestión se define como el ________ de recolectar, analizar y utilizar información para asegurar que la organización alcance sus objetivos."

explicacion: |
  El control de gestión es un proceso continuo que permite comparar el desempeño real con los planes establecidos para tomar medidas correctivas.
```

### 2 — Tipos de Indicadores

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["indicadores", "KPI"]

variables:
  tipo_indicador: uno_de(["eficiencia", "eficacia"])

respuesta: uno_de(["eficiencia", "eficacia"])
tipo: "mc"
opciones_explicitas: ["eficiencia", "eficacia", "efectividad"]

enunciado: "Si una empresa logra sus objetivos de ventas utilizando la menor cantidad de recursos posibles, está demostrando un alto nivel de {tipo_indicador}."

explicacion: |
  La eficiencia se refiere a la relación entre los resultados obtenidos y los recursos utilizados. La eficacia, en cambio, se centra solo en el cumplimiento del objetivo.
```

### 3 — El Cuadro de Mando Integral

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["balanced_scorecard", "perspectivas"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿El Cuadro de Mando Integral (Balanced Scorecard) propone medir a la organización únicamente desde una perspectiva financiera?"

explicacion: |
  Falso. El Balanced Scorecard integra cuatro perspectivas: Financiera, Cliente, Procesos Internos y Aprendizaje/Crecimiento.
```

### 4 — Ciclo de Gestión

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["ciclo_pdca", "gestion"]

tipo: "ordenar"
opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]
respuesta_orden: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "Ordene las etapas del ciclo PHVA (Ciclo de Deming) para asegurar la mejora continua en el control de gestión:"

explicacion: |
  El ciclo PHVA (Plan, Do, Check, Act) es la base de la mejora continua: se planifica, se ejecuta, se verifica el resultado y se actúa sobre las desviaciones.
```

### 5 — Desviaciones en el Control

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["desviacion", "analisis"]

tipo: "mc"
opciones_explicitas: ["Positiva", "Negativa", "Nula"]

respuesta: "Negativa"

enunciado: "En un escenario donde el gasto real es mayor al presupuesto planificado, la desviación presupuestaria es considerada: ___."

explicacion: |
  En términos de control de costos, una desviación negativa suele indicar que se ha excedido el presupuesto, lo cual requiere una acción correctiva.
```

### 6 — Eficiencia en la producción

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["eficiencia", "indicadores_desempeño"]

variables:
  datos: [[1200, 1500], [800, 1000], [2000, 2500]]
  idx: uno_de([0,1,2])
  produccion_real: datos[idx][0]
  produccion_esperada: datos[idx][1]
  eficiencia: (produccion_real / produccion_esperada) * 100

respuesta: eficiencia
tipo: completar
tolerancia_abs: 0.1

enunciado: "En una planta de ensamblaje, la producción real de la jornada fue de {produccion_real} unidades, mientras que el objetivo establecido era de {produccion_esperada} unidades. ¿Cuál es el índice de eficiencia de producción expresado en porcentaje?"

pasos:
  - "Dividir la producción real por la producción esperada: {produccion_real} / {produccion_esperada}"
  - "Multiplicar el resultado por 100 para obtener el porcentaje."

explicacion: |
  La eficiencia se calcula como el cociente entre la producción real y la estándar. En este caso, la eficiencia es del {eficiencia}%."
```

### 7 — Interpretación de Desviaciones

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["desviacion", "presupuesto"]

variables:
  escenario: [[100, 120], [150, 130], [200, 200]]
  idx: uno_de([0,1,2])
  costo_real: escenario[idx][0]
  costo_presupuestado: escenario[idx][1]

respuesta: "Desviación Negativa"
tipo: mc
opciones_explicitas: ["Desviación Positiva", "Desviación Negativa", "Sin Desviación"]

enunciado: "Si el costo real de un proyecto es de ${costo_real} y el presupuesto asignado era de ${costo_presupuestado}, y considerando que un costo mayor al presupuestado es desfavorable para la organización, ¿cómo se clasifica la desviación?"

explicacion: |
  Cuando el costo real es mayor al presupuestado (como en el caso de {costo_real} vs {costo_presupuestado}), se produce una desviación desfavorable o negativa en términos de control de costos."
```

### 8 — El concepto de KPI

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["kpi", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Un Indicador Clave de Desempeño (KPI) debe ser necesariamente medible y estar alineado con los objetivos estratégicos de la organización para ser útil en el control de gestión."

explicacion: |
  Correcto. Para que un indicador sea efectivo en el control de gestión, debe permitir la medición del progreso hacia un objetivo específico."
```

### 9 — Ciclo de Control de Gestión

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["proceso", "ciclo_pdca"]

respuesta_orden: ["Establecer estándares", "Medir el desempeño", "Comparar con estándares", "Tomar acciones correctivas"]
tipo: ordenar

opciones_explicitas: ["Establecer estándares", "Medir el desempeño", "Comparar con estándares", "Tomar acciones correctivas"]

enunciado: "Ordene cronológicamente las etapas del proceso de control de gestión para asegurar que una empresa corrija una desviación en sus ventas:"

explicacion: |
  El proceso lógico comienza con la definición de la meta (estándar), sigue con la medición de lo ocurrido, la comparación para detectar brechas y finalmente la acción para corregir."
```

### 10 — Rentabilidad sobre Inversión

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "avanzado"
  tags: ["roi", "rentabilidad"]

variables:
  datos: [[5000, 20000], [8000, 40000], [12000, 30000]]
  idx: uno_de([0,1,2])
  ganancia_neta: datos[idx][0]
  inversion_total: datos[idx][1]
  roi: (ganancia_neta / inversion_total) * 100

respuesta: "ROI"
tipo: completar
respuestas_validas:
  - "ROI"
  - "roi"

enunciado: "Si una empresa obtiene una ganancia neta de ${ganancia_neta} tras haber realizado una inversión total de ${inversion_total}, el indicador que mide la rentabilidad de esa inversión se denomina ___."

explicacion: |
  El ROI (Return on Investment) es el indicador que relaciona la ganancia obtenida con la inversión realizada. En este caso, el ROI es del {roi}%."
```

### 11 — Indicadores de eficiencia vs. eficacia

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["indicadores", "gestion", "eficiencia"]

respuesta: "eficiencia"
tipo: mc
opciones_explicitas: ["eficiencia", "eficacia", "efectividad", "productividad"]

enunciado: "Un gerente observa que su equipo produjo 100 unidades usando 10 horas de trabajo. Si el objetivo era producir 80 unidades en 12 horas, el equipo cumplió con el objetivo (fue eficaz), pero no optimizó los recursos. El indicador que mide la relación entre resultados y recursos utilizados se denomina ___."

explicacion: |
  La eficacia mide el grado de cumplimiento de los objetivos (lograr la meta), mientras que la eficiencia mide la relación entre los resultados obtenidos y los recursos empleados para lograrlos.
```

### 12 — El error de la métrica de vanidad

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "avanzado"
  tags: ["metricas", "vanidad", "toma_de_decisiones"]

respuesta: falso
tipo: vf

enunciado: "Las llamadas 'métricas de vanidad' (vanity metrics) son indicadores que, aunque muestran números positivos y crecientes, no proporcionan información relevante para la toma de decisiones estratégicas ni para medir el éxito real del modelo de negocio."

explicacion: |
  Es falso. Las métricas de vanidad son precisamente aquellas que parecen buenas (como el número de 'likes' o visitas) pero no ayudan a entender la salud real del negocio o el cumplimiento de objetivos críticos.
```

### 13 — Jerarquía de los indicadores

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["jerarquia", "indicadores", "estrategia"]

respuesta_orden: ["Indicadores Estratégicos", "Indicadores Tácticos", "Indicadores Operativos"]
tipo: ordenar

opciones_explicitas: ["Indicadores Estratégicos", "Indicadores Tácticos", "Indicadores Operativos"]

enunciado: "Ordene los siguientes niveles de indicadores de gestión desde el nivel de mayor visión global (longitudinal) hasta el nivel de ejecución diaria:"

explicacion: |
  La jerarquía parte de la estrategia (largo plazo/global), baja a la táctica (departamental/procesos) y culmina en la operación (tareas diarias/específicas).
```

### 14 — Lagging vs. Leading Indicators

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "avanzado"
  tags: ["indicadores", "predictivos", "rezagados"]

tipo: mc
opciones_explicitas: ["Indicador de resultado (Lagging)", "Indicador predictivo (Leading)", "Indicador de proceso"]

respuesta: "Indicador de resultado (Lagging)"

enunciado: "Si un indicador se enfoca en medir un evento que ya ha ocurrido (como las ventas totales del mes pasado), se considera un indicador de tipo: ___."

explicacion: |
  Los indicadores 'Lagging' miden resultados pasados (lo que ya sucedió), mientras que los 'Leading' intentan predecir resultados futuros basándose en variables actuales.
```

### 15 — Completar el concepto de KPI

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["kpi", "definicion"]

respuesta: ["KPI", "Key Performance Indicator"]
tipo: completar
respuestas_validas:
  - "KPI"
  - "Key Performance Indicator"

enunciado: "Para que un indicador sea considerado un ___ real, debe estar directamente alineado con un objetivo crítico del negocio y permitir una acción correctiva clara."

explicacion: |
  No todo indicador es un KPI. Un KPI (Key Performance Indicator) es un indicador clave; es decir, aquel que es vital para medir el éxito de un proceso o estrategia específica.
```

### 16 — Diferencia entre Eficacia y Eficiencia

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["indicadores", "gestion"]

respuesta: "eficiencia"
tipo: completar
respuestas_validas:
  - "eficiencia"

enunciado: "Mientras que la eficacia se centra en el cumplimiento de las metas u objetivos propuestos, la ___ se enfoca en el uso óptimo de los recursos para alcanzar dichos objetivos."

explicacion: |
  La eficacia mide el grado de cumplimiento de los objetivos (lograr la meta), mientras que la eficiencia mide la relación entre los resultados obtenidos y los recursos utilizados (lograr la meta con el mínimo de recursos).
```

### 17 — Indicadores de Resultado vs. Indicadores de Proceso

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["indicadores", "control"]

variables:
  idx: uno_de([0, 1])
  escenario: [[ "ventas_totales", "resultado_final" ], [ "costo_por_unidad", "medida_de_proceso" ]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["resultado_final", "medida_de_proceso", "indicador_de_esfuerzo", "indicador_de_input"]

enunciado: "Si una empresa mide el '___', está analizando un indicador de: {escenario[idx][0]}."

explicacion: |
  Los indicadores de resultado (lagging) miden el producto final de una actividad, mientras que los de proceso (leading) miden las actividades necesarias para llegar a ese resultado.
```

### 18 — El concepto de KPI (Key Performance Indicator)

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["kpi", "indicadores"]

respuesta: verdadero
tipo: vf

enunciado: "¿Un KPI (Indicador Clave de Desempeño) se distingue de un indicador común en que es crítico para la toma de decisiones estratégicas y está directamente vinculado a los objetivos principales de la organización?"

explicacion: |
  Correcto. Un KPI no es solo cualquier dato, sino un indicador seleccionado específicamente por su relevancia para medir el éxito de una estrategia.
```

### 19 — Jerarquía de los Indicadores de Gestión

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["jerarquia", "indicadores"]

respuesta_orden: ["indicadores_operativos", "indicadores_tácticos", "indicadores_estratégicos"]
tipo: ordenar
opciones_explicitas: ["indicadores_operativos", "indicadores_tácticos", "indicadores_estratégicos"]

enunciado: "Ordene los siguientes tipos de indicadores desde el nivel más bajo (operativo/día a día) hasta el nivel más alto (estratégico/largo plazo):"

explicacion: |
  La jerarquía típica va desde el control de las tareas diarias (operativo), pasando por el control de departamentos o áreas (táctico), hasta el control de la visión global de la empresa (estratégico).
```

### 20 — Indicadores de Eficacia vs. Calidad

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "avanzado"
  tags: ["calidad", "eficacia"]

variables:
  idx: uno_de([0, 1])
  caso: [[ "cumplir_el_plazo", "eficacia" ], [ "cero_defectos", "calidad" ]]

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["eficacia", "calidad", "eficiencia", "rentabilidad"]

enunciado: "En el contexto de control de gestión, si el objetivo es asegurar que un producto no tenga errores de fabricación, el indicador principal para medir este aspecto es la: {caso[idx][0]}."

explicacion: |
  Aunque la calidad puede influir en la eficacia, la medición de la ausencia de defectos se clasifica específicamente como un indicador de calidad o conformidad.
```

### 21 — Eficacia vs Eficiencia

```
metadata:
  materia: "economia"
  tema: "control_de_gestion"
  nivel: "intermedio"
  tags: ["indicadores", "eficacia", "eficiencia"]

variables:
  escenario: uno_de([["La empresa produjo 100 unidades con 10 horas de trabajo, pero su objetivo era 120 unidades.", "eficacia"], ["La empresa produjo 100 unidades usando 8 horas de trabajo, cumpliendo su objetivo de 100 unidades.", "eficiencia"], ["La empresa produjo 120 unidades usando 15 horas de trabajo, superando su objetivo de 100 unidades.", "ambos"]])

enunciado: "En el escenario donde {escenario[0]}, ¿qué indicador se ve comprometido o destacado?"

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["eficacia", "eficiencia", "ambos", "ninguno"]

explicacion: |
  La eficacia mide el grado de cumplimiento de los objetivos (lograr la meta), mientras que la eficiencia mide la relación entre los resultados obtenidos y los recursos utilizados.
```

### 22 — Cálculo de Desviación Presupuestaria

```
metadata:
  materia: "economia"
  tema: "control_de_gestion"
  nivel: "avanzado"
  tags: ["presupuesto", "desviacion", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  presupuestos: [5000, 8000, 1000]
  reales: [4500, 9200, 1000]
  desviaciones: ["-10%", "+15%", "0%"]

enunciado: "Si el presupuesto asignado fue de ${presupuestos[idx]} y el gasto real fue de ${reales[idx]}, la desviación porcentual respecto al presupuesto es de ___."

pasos:
  - "Identificar el valor presupuestado (P) y el valor real (R)."
  - "Calcular la diferencia: (R - P) / P."
  - "Multiplicar por 100 para obtener el porcentaje."

respuesta: desviaciones[idx]
tipo: completar
respuestas_validas:
  - "-10%"
  - "+15%"
  - "0%"

explicacion: |
  La desviación presupuestaria indica la diferencia entre lo planificado y lo ejecutado. Una desviación positiva indica sobre-ejecución (gasto mayor al previsto).
```

### 23 — Indicadores de Calidad (KPIs)

```
metadata:
  materia: "economia"
  tema: "control_de_gestion"
  nivel: "basico"
  tags: ["kpi", "calidad", "verdadero_falso"]

enunciado: "Un KPI (Key Performance Indicator) de calidad que mide el porcentaje de productos defectuosos sobre el total producido es un indicador de proceso."

respuesta: verdadero
tipo: vf

explicacion: |
  Los indicadores de calidad suelen medir la efectividad de los procesos internos para asegurar que el output cumpla con los estándares establecidos.
```

### 24 — Ciclo de Control de Gestión (PDCA)

```
metadata:
  materia: "economia"
  tema: "control_de_gestion"
  nivel: "intermedio"
  tags: ["pdca", "deming", "procesos"]

enunciado: "Ordene las etapas del ciclo de mejora continua (PDCA) en su secuencia lógica de ejecución:"

opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]
respuesta_orden: ["Planificar", "Hacer", "Verificar", "Actuar"]
tipo: ordenar

explicacion: |
  El ciclo PDCA consiste en: Planificar (establecer objetivos), Hacer (implementar), Verificar (comparar resultados con objetivos) y Actuar (ajustar para mejorar).
```

### 25 — Análisis de Rentabilidad

```
metadata:
  materia: "economia"
  tema: "control_de_gestion"
  nivel: "avanzado"
  tags: ["rentabilidad", "margen", "calculo"]

variables:
  caso: uno_de([["Ventas: 1000, Costos: 700", "300"], ["Ventas: 500, Costos: 100", "400"], ["Ventas: 2000, Costos: 1800", "200"]])

enunciado: "Si una unidad de negocio presenta los siguientes datos: {caso[0]}, su margen de contribución absoluto es de ___."

pasos:
  - "Identificar el total de ventas."
  - "Identificar los costos variables/directos."
  - "Restar los costos de las ventas."

respuesta: caso[1]
tipo: completar
tolerancia_abs: 0

explicacion: |
  El margen de contribución es la diferencia entre las ventas y los costos variables, indicando cuánto aporta cada unidad a cubrir los costos fijos y generar utilidad.
```
