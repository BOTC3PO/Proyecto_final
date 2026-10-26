### 1 — Confusión entre Margen Bruto y Neto
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["rentabilidad", "conceptos_clave"]

tipo: mc
opciones_explicitas: ["La diferencia entre ventas y costo de ventas", "La diferencia entre ventas y todos los gastos operativos", "La diferencia entre ingresos totales y impuestos"]

enunciado: "Un error común es confundir el margen bruto con el margen neto. ¿Qué mide específicamente el margen bruto?"

explicacion: |
  El margen bruto solo considera la diferencia entre las ventas y el costo de los bienes vendidos (COGS). No tiene en cuenta los gastos de administración, ventas o financieros.
```

### 2 — El impacto de los gastos operativos
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["gastos_operativos", "margen_neto"]

tipo: vf
respuesta: falso

enunciado: "Si una empresa aumenta sus gastos de alquiler y salarios administrativos, pero mantiene sus costos de producción constantes, su margen bruto aumentará."

explicacion: |
  Falso. El aumento de gastos operativos (alquiler, salarios) reduce el margen neto, pero el margen bruto solo se ve afectado por los costos directos de producción.
```

### 3 — Cálculo de la rentabilidad real
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "margen_neto"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[1000, 400, 200, 100], [2000, 1200, 500, 300]]

tipo: completar
respuestas_validas: ["100", "200"]
respuesta: datos[escenario_idx][3]

enunciado: "Considera el siguiente escenario: Ventas: {datos[escenario_idx][0]}, Costo de Ventas: {datos[escenario_idx][1]}, Gastos Operativos: {datos[escenario_idx][2]}, Impuestos: {datos[escenario_idx][3]}. El margen neto (en valor absoluto) es ___."

pasos:
  - "Restar el costo de ventas a las ventas para obtener la utilidad bruta."
  - "Restar los gastos operativos y los impuestos a la utilidad bruta."

explicacion: |
  El margen neto es la ganancia final después de restar TODOS los costos y gastos. En el caso seleccionado, el resultado es {datos[escenario_idx][3]}.
```

### 4 — Jerarquía de la rentabilidad
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["orden", "estructura_contable"]

tipo: ordenar
opciones_explicitas: ["Ventas Totales", "Utilidad Bruta", "Utilidad Operativa", "Utilidad Neta"]
respuesta: ["Ventas Totales", "Utilidad Bruta", "Utilidad Operativa", "Utilidad Neta"]

enunciado: "Ordena los conceptos de mayor a menor nivel de rentabilidad (desde el ingreso bruto hasta la ganancia final):"

explicacion: |
  La estructura contable sigue un orden descendente: primero se restan los costos directos (Bruta), luego los gastos operativos (Operativa) y finalmente impuestos y otros (Neta).
```

### 5 — Análisis de eficiencia
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "avanzado"
  tags: ["analisis", "eficiencia"]

tipo: mc
opciones_explicitas: ["Un margen bruto alto con un margen neto muy bajo", "Un margen bruto bajo con un margen neto alto", "Un margen bruto igual al margen neto"]

enunciado: "Si una empresa reporta un margen bruto muy elevado, pero su margen neto es casi cero, ¿qué es lo más probable que esté sucediendo?"

explicacion: |
  Esto indica que la empresa es eficiente en su producción (bajo costo de ventas), pero tiene una estructura de gastos operativos (administración, marketing, alquileres) extremadamente pesada.
```