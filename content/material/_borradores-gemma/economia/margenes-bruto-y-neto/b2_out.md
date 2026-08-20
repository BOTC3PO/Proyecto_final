### 1 — Diferencia conceptual clave
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["conceptos", "margen_bruto", "margen_neto"]

respuesta: "neto"
tipo: "completar"
respuestas_validas: ["neto", "bruto"]

enunciado: "El margen que se calcula restando únicamente los costos de ventas a los ingresos totales se denomina margen _____, mientras que el margen que resta también los gastos operativos y otros costos se denomina margen _____."

explicacion: |
  El margen bruto mide la rentabilidad directa del producto/servicio (Ingresos - Costo de Ventas). El margen neto es el beneficio real final tras considerar todos los gastos de la estructura operativa.
```

### 2 — Cálculo de Margen Bruto
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "margen_bruto"]

variables:
  idx: uno_de([0, 1])
  datos: [[1000, 600], [2500, 1500]]

respuesta: datos[idx][1]
tipo: "input"
tolerancia_abs: 0.01

enunciado: "Una empresa tiene un nivel de ventas de ${datos[idx][0]} y un costo de ventas de ${datos[idx][0] - datos[idx][1]}. ¿Cuál es el valor del margen bruto (en unidades monetarias)?"

pasos:
  - "Identificar Ingresos Totales: ${datos[idx][0]}"
  - "Identificar Costo de Ventas: ${datos[idx][0] - datos[idx][1]}"
  - "Calcular Margen Bruto: Ingresos - Costo de Ventas"

explicacion: |
  El margen bruto se obtiene restando el costo de los bienes vendidos a las ventas totales. En este caso: ${datos[idx][0]} - (${datos[idx][0]} - ${datos[idx][1]}) = ${datos[idx][1]}.
```

### 3 — Relación entre márgenes
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["relacion", "conceptos"]

respuesta: falso
tipo: "vf"

enunciado: "Si una empresa tiene un margen neto positivo, es matemáticamente imposible que su margen bruto sea negativo."

explicacion: |
  Falso. El margen bruto es el primer paso; si es negativo, el margen neto será aún más negativo (ya que se le restan más gastos). Un margen neto positivo implica necesariamente que el margen bruto también lo es.
```

### 4 — Análisis de rentabilidad
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "avanzado"
  tags: ["analisis", "mc"]

variables:
  idx: uno_de([0, 1, 2])
  escenario: [
    ["Empresa A", 40, 10],
    ["Empresa B", 20, 5],
    ["Empresa C", 50, 2]
  ]

respuesta: escenario[idx][1]
tipo: "mc"
opciones_explicitas: ["40%", "20%", "50%"]

enunciado: "Si la ${escenario[idx][0]} presenta un margen bruto del 40% y un margen neto del ${escenario[idx][1]}%, ¿cuál es la diferencia absoluta entre el margen bruto y el margen neto (en puntos porcentuales)?"

explicacion: |
  La diferencia se calcula restando el margen neto del margen bruto: ${escenario[idx][1]}% de diferencia.
```

### 5 — Proceso de cálculo de utilidad
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["proceso", "ordenar"]

respuesta: ["Ingresos", "Costo de Ventas", "Gastos Operativos", "Utilidad Neta"]
tipo: "ordenar"
opciones_explicitas: ["Ingresos", "Costo de Ventas", "Gastos Operativos", "Utilidad Neta"]

enunciado: "Ordena los conceptos según el proceso lógico para llegar desde el ingreso bruto hasta la utilidad neta (margen neto):"

explicacion: |
  El flujo contable estándar es: 1. Ingresos -> 2. Restar Costo de Ventas (Margen Bruto) -> 3. Restar Gastos Operativos -> 4. Resultado final (Utilidad Neta/Margen Neto).
```