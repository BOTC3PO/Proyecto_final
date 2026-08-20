### 1 — Eficiencia en la producción
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
tipo: input
tolerancia_abs: 0.1

enunciado: "En una planta de ensamblaje, la producción real de la jornada fue de {produccion_real} unidades, mientras que el objetivo establecido era de {produccion_esperada} unidades. ¿Cuál es el índice de eficiencia de producción expresado en porcentaje?"

pasos:
  - "Dividir la producción real por la producción esperada: {produccion_real} / {produccion_esperada}"
  - "Multiplicar el resultado por 100 para obtener el porcentaje."

explicacion: |
  La eficiencia se calcula como el cociente entre la producción real y la estándar. En este caso, la eficiencia es del {eficiencia}%."
```

### 2 — Interpretación de Desviaciones
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

### 3 — El concepto de KPI
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

### 4 — Ciclo de Control de Gestión
```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["proceso", "ciclo_pdca"]

respuesta: ["Establecer estándares", "Medir el desempeño", "Comparar con estándares", "Tomar acciones correctivas"]
tipo: ordenar

opciones_explicitas: ["Establecer estándares", "Medir el desempeño", "Comparar con estándares", "Tomar acciones correctivas"]

enunciado: "Ordene cronológicamente las etapas del proceso de control de gestión para asegurar que una empresa corrija una desviación en sus ventas:"

explicacion: |
  El proceso lógico comienza con la definición de la meta (estándar), sigue con la medición de lo ocurrido, la comparación para detectar brechas y finalmente la acción para corregir."
```

### 5 — Rentabilidad sobre Inversión
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
respuestas_validas: ["ROI", "roi"]

enunciado: "Si una empresa obtiene una ganancia neta de ${ganancia_neta} tras haber realizado una inversión total de ${inversion_total}, el indicador que mide la rentabilidad de esa inversión se denomina ___."

explicacion: |
  El ROI (Return on Investment) es el indicador que relaciona la ganancia obtenida con la inversión realizada. En este caso, el ROI es del {roi}%."
```