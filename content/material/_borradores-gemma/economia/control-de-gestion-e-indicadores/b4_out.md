### 1 — Diferencia entre Eficacia y Eficiencia
```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["indicadores", "gestion"]

respuesta: "eficiencia"
tipo: completar
respuestas_validas: ["eficiencia"]

enunciado: "Mientras que la eficacia se centra en el cumplimiento de las metas u objetivos propuestos, la ___ se enfoca en el uso óptimo de los recursos para alcanzar dichos objetivos."

explicacion: |
  La eficacia mide el grado de cumplimiento de los objetivos (lograr la meta), mientras que la eficiencia mide la relación entre los resultados obtenidos y los recursos utilizados (lograr la meta con el mínimo de recursos).
```

### 2 — Indicadores de Resultado vs. Indicadores de Proceso
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

### 3 — El concepto de KPI (Key Performance Indicator)
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

### 4 — Jerarquía de los Indicadores de Gestión
```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["jerarquia", "indicadores"]

respuesta: ["indicadores_operativos", "indicadores_tácticos", "indicadores_estratégicos"]
tipo: ordenar
opciones_explicitas: ["indicadores_operativos", "indicadores_tácticos", "indicadores_estratégicos"]

enunciado: "Ordene los siguientes tipos de indicadores desde el nivel más bajo (operativo/día a día) hasta el nivel más alto (estratégico/largo plazo):"

explicacion: |
  La jerarquía típica va desde el control de las tareas diarias (operativo), pasando por el control de departamentos o áreas (táctico), hasta el control de la visión global de la empresa (estratégico).
```

### 5 — Indicadores de Eficacia vs. Calidad
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