### 1 — Análisis de inversión inicial
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "basico"
  tags: ["finanzas", "decision"]

variables:
  costo_proyecto: 5000
  ganancia_esperada: 7500

respuesta: ganancia_esperada - costo_proyecto
tipo: input
tolerancia_abs: 0

enunciado: "Si una empresa decide implementar un nuevo software que tiene un costo de ${costo_proyecto} y se estima que la ganancia neta adicional por eficiencia será de ${ganancia_esperada}, ¿cuál es el beneficio neto de la inversión?"

pasos:
  - "Identificar el costo total de la decisión."
  - "Identificar la ganancia total esperada."
  - "Restar el costo de la ganancia para hallar el beneficio neto."

explicacion: |
  El beneficio neto se calcula restando el costo de la inversión de la ganancia total obtenida: 7500 - 5000 = 2500.
```

### 2 — Evaluación de rentabilidad
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "intermedio"
  tags: ["ratio", "rentabilidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[1200, 1500], [5000, 4500]]

respuesta: datos[escenario_idx][1] / datos[escenario_idx][0] > 1

tipo: vf

enunciado: "Considerando que el beneficio se define como la relación entre la ganancia y el costo (Ratio = Ganancia / Costo), ¿es la inversión en el escenario seleccionado rentable (Ratio > 1)?"

explicacion: |
  En el escenario seleccionado, si la ganancia es mayor al costo, el ratio será mayor a 1, lo que indica que la decisión es financieramente beneficiosa.
```

### 3 — Comparación de alternativas
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "intermedio"
  tags: ["comparacion", "decision"]

variables:
  opcion_a_costo: 100
  opcion_a_ganancia: 150
  opcion_b_costo: 200
  opcion_b_ganancia: 300

respuesta: "Opción A"

tipo: mc
opciones_explicitas: ["Opción A", "Opción B", "Ambas son iguales"]

enunciado: "Se deben elegir dos proyectos. El Proyecto A cuesta ${opcion_a_costo} y genera ${opcion_a_ganancia}. El Proyecto B cuesta ${opcion_b_costo} y genera ${opcion_b_ganancia}. Si buscamos la opción con el mayor beneficio neto (Ganancia - Costo), ¿cuál es la mejor elección?"

explicacion: |
  Beneficio A: 150 - 100 = 50.
  Beneficio B: 300 - 200 = 100.
  Nota: Aunque el beneficio de B es mayor, la pregunta pide comparar la relación de beneficio neto. Si comparamos la rentabilidad relativa (1.5 vs 1.5), son iguales, pero en términos de valor absoluto, B es superior. Sin embargo, en este ejercicio comparamos la diferencia absoluta.
```

### 4 — Proceso de toma de decisiones
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

respuesta: ["Identificar costos", "Estimar beneficios", "Calcular beneficio neto", "Comparar con alternativas"]
tipo: ordenar
opciones_explicitas: ["Identificar costos", "Estimar beneficios", "Calcular beneficio neto", "Comparar con alternativas"]

enunciado: "Ordena correctamente los pasos lógicos para realizar un análisis de costo-beneficio antes de tomar una decisión de inversión."

explicacion: |
  Para decidir correctamente, primero se deben conocer todos los desembolsos (costos), luego lo que se espera recibir (beneficios), calcular la diferencia y finalmente comparar el resultado con otras opciones disponibles.
```

### 5 — Análisis de punto de equilibrio
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "avanzado"
  tags: ["punto_de_equilibrio", "calculo"]

variables:
  costo_fijo: 1000
  margen_unitario: 50

respuesta: "1000 / 50"
tipo: completar
respuestas_validas: ["20", "20.0"]

enunciado: "Si una empresa tiene un costo fijo de ${costo_fijo} y cada unidad vendida aporta un margen de ${margen_unitario} para cubrir costos, ¿cuántas unidades debe vender para alcanzar el punto de equilibrio (donde el beneficio es cero)?"

pasos:
  - "Identificar el costo total que debe ser cubierto."
  - "Dividir el costo total por el margen de contribución unitario."

explicacion: |
  El punto de equilibrio se alcanza cuando los ingresos cubren exactamente los costos. La fórmula es: Costo Fijo / Margen Unitario = 1000 / 50 = 20 unidades.
```