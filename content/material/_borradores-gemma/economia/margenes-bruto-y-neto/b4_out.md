### 1 — Diferencia conceptual fundamental
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

tipo: mc
opciones_explicitas: ["La diferencia entre el margen bruto y el neto es la inclusión de los gastos operativos y otros costos indirectos.", "La diferencia radica en que el margen bruto mide la rentabilidad sobre la inversión y el neto sobre las ventas.", "El margen bruto es siempre mayor que el margen neto porque incluye los impuestos.", "No existe diferencia, son términos sinónimos en contabilidad básica."]

respuesta: "La diferencia entre el margen bruto y el neto es la inclusión de los gastos operativos y otros costos indirectos."

enunciado: "Al comparar ambos indicadores, ¿cuál es la principal distinción conceptual?"

explicacion: |
  El margen bruto se calcula restando solo el costo de los bienes vendidos (COGS) de las ventas totales. El margen neto es lo que queda después de restar TODOS los gastos (operativos, financieros, impuestos, etc.).
```

### 2 — El impacto de los gastos operativos
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "gastos_operativos"]

variables:
  escenario: uno_de([
    ["Ventas: 1000, Costo de Ventas: 400, Gastos Operativos: 200", "400", "200"],
    ["Ventas: 5000, Costo de Ventas: 2000, Gastos Operativos: 1500", "3000", "500"]
  ])

tipo: completar
respuestas_validas: ["400", "3000", "200", "500"]

enunciado: "Si una empresa tiene unas ventas de {escenario[0]}, su margen bruto en valor absoluto es ___ y su margen neto (antes de impuestos) es ___."

pasos:
  - "1. Calcular Margen Bruto: Ventas - Costo de Ventas"
  - "2. Calcular Margen Neto: Margen Bruto - Gastos Operativos"

explicacion: |
  En el primer caso: 1000 - 400 = 600 (bruto), pero el enunciado pide el valor según el escenario. 
  Corrección de lógica para el DSL:
  Si Ventas=1000, CV=400, GO=200 -> Bruto=600, Neto=400. 
  Si Ventas=5000, CV=2000, GO=1500 -> Bruto=3000, Neto=1500.
  
  Re-haciendo variables para que coincida con la lógica de la respuesta:
  variables:
    escenario: uno_de([
      ["1000, 400, 200", "600", "400"],
      ["5000, 2000, 1500", "3000", "1500"]
    ])

enunciado: "Si una empresa tiene ventas de {escenario[0]}, su margen bruto es ___ y su margen neto es ___."

respuesta: escenario[1]
tipo: completar
```

*(Nota: El ejemplo anterior tiene un error de lógica en la estructura de respuesta para completar múltiples valores. Corrijo para cumplir estrictamente el DSL de una sola respuesta por pregunta o usar un formato compatible)*.

### 2 — El impacto de los gastos operativos (Corregido)
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "gastos_operativos"]

variables:
  escenario: uno_de([
    ["1000", "600", "400"],
    ["5000", "3000", "1500"]
  ])

tipo: completar
respuestas_validas: ["600", "400", "3000", "1500"]

enunciado: "Si una empresa tiene ventas de {escenario[0]}, un costo de ventas de {escenario[1]} (si fuera el caso de ejemplo) y gastos operativos de 200 (en el primer caso) o 1500 (en el segundo), el margen neto es ___."

# Para simplificar y cumplir la regla de que la respuesta es un único valor:
# Re-estructurando para que sea una pregunta de completar un único valor de margen neto.

metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "gastos_operativos"]

variables:
  datos: uno_de([
    ["Ventas: 1000, Costo: 400, Gastos Op: 200"],
    ["Ventas: 5000, Costo: 2000, Gastos Op: 1500"]
  ])
  bruto: uno_de(["600", "3000"])
  neto: uno_de(["400", "1500"])

tipo: completar
respuestas_validas: ["400", "1500"]

enunciado: "Para el escenario {datos}, el valor del margen neto es ___."

respuesta: neto

explicacion: |
  El margen neto se obtiene restando los gastos operativos al margen bruto.
```

### 3 — Veracidad de la relación
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["verdadero_falso"]

tipo: vf
respuesta: falso

enunciado: "¿Es posible que el margen neto de una empresa sea mayor que su margen bruto?"

explicacion: |
  No, porque el margen neto es el resultado de seguir restando costos y gastos al margen bruto. Por lo tanto, el margen neto siempre será menor o igual al margen bruto.
```

### 4 — Orden de la cascada de rentabilidad
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["ordenar", "flujo_contable"]

tipo: ordenar
opciones_explicitas: ["Ventas Totales", "Margen Bruto", "Margen Neto"]
respuesta: ["Ventas Totales", "Margen Bruto", "Margen Neto"]

enunciado: "Ordena los conceptos según el flujo lógico de una cuenta de resultados (desde el ingreso bruto hasta la utilidad final):"

explicacion: |
  Primero se registran las ventas, a las que se les resta el costo de ventas para obtener el margen bruto, y finalmente se restan los gastos operativos para llegar al margen neto.
```

### 5 — Análisis de rentabilidad operativa
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "avanzado"
  tags: ["analisis", "eficiencia"]

tipo: mc
opciones_explicitas: [
  "Un margen bruto alto con un margen neto muy bajo indica ineficiencia en los gastos operativos.",
  "Un margen neto alto siempre garantiza que el margen bruto sea aún más alto.",
  "El margen bruto no tiene relación con el margen neto.",
  "Si el margen neto es positivo, el margen bruto debe ser necesariamente mayor al doble."
]

respuesta: "Un margen bruto alto con un margen neto muy bajo indica ineficiencia en los gastos operativos."

enunciado: "Si una empresa presenta un margen bruto muy elevado pero su margen neto es casi nulo, ¿qué se puede deducir?"

explicacion: |
  Esto indica que, aunque el producto es rentable por sí mismo (buen margen bruto), la estructura de costos fijos o gastos de administración y ventas (gastos operativos) es demasiado pesada, consumiendo casi toda la utilidad.
```