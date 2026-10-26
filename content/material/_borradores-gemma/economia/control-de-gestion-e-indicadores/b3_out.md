### 1 — Indicadores de eficiencia vs. eficacia
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

### 2 — El error de la métrica de vanidad
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

### 3 — Jerarquía de los indicadores
```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["jerarquia", "indicadores", "estrategia"]

respuesta: ["Indicadores Estratégicos", "Indicadores Tácticos", "Indicadores Operativos"]
tipo: ordenar

opciones_explicitas: ["Indicadores Estratégicos", "Indicadores Tácticos", "Indicadores Operativos"]

enunciado: "Ordene los siguientes niveles de indicadores de gestión desde el nivel de mayor visión global (longitudinal) hasta el nivel de ejecución diaria:"

explicacion: |
  La jerarquía parte de la estrategia (largo plazo/global), baja a la táctica (departamental/procesos) y culmina en la operación (tareas diarias/específicas).
```

### 4 — Lagging vs. Leading Indicators
```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "avanzado"
  tags: ["indicadores", "predictivos", "rezagados"]

variables:
  escenario: uno_de([[0, "ventas_totales"], [1, "tasa_de_satisfaccion_cliente"]])

respuesta: tabla[escenario][1]
tipo: mc
opciones_explicitas: ["Indicador de resultado (Lagging)", "Indicador predictivo (Leading)", "Indicador de proceso"]

enunciado: "Si un indicador se enfoca en medir un evento que ya ha ocurrido (como el ___), se considera un indicador de tipo 'Lagging' o rezagado."

explicacion: |
  Los indicadores 'Lagging' miden resultados pasados (lo que ya sucedió), mientras que los 'Leading' intentan predecir resultados futuros basándose en variables actuales.
```

### 5 — Completar el concepto de KPI
```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["kpi", "definicion"]

respuesta: ["KPI", "Key Performance Indicator"]
tipo: completar
respuestas_validas: ["KPI", "Key Performance Indicator"]

enunciado: "Para que un indicador sea considerado un ___ real, debe estar directamente alineado con un objetivo crítico del negocio y permitir una acción correctiva clara."

explicacion: |
  No todo indicador es un KPI. Un KPI (Key Performance Indicator) es un indicador clave; es decir, aquel que es vital para medir el éxito de un proceso o estrategia específica.
```