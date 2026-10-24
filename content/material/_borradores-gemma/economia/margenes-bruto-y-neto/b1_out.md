### 1 — Concepto de Margen Bruto
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["definicion", "margen_bruto"]

respuesta: "ventas_netas - costo_ventas"
tipo: completar
respuestas_validas: ["ventas_netas - costo_ventas", "Ventas Netas - Costo de Ventas"]

enunciado: "El margen bruto se calcula restando el costo de ventas a las ___."

explicacion: |
  El margen bruto mide la rentabilidad de la producción o compra de bienes, sin tener en cuenta los gastos operativos (alquiler, sueldos administrativos, etc.).
```

### 2 — Diferencia fundamental
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["diferencia", "margen_neto"]

opciones_explicitas: ["El margen neto incluye los gastos operativos y financieros, mientras que el bruto no.", "El margen bruto es mayor que el neto siempre.", "El margen neto solo considera el costo de la mercadería.", "No hay diferencia entre ambos."]
respuesta: "El margen neto incluye los gastos operativos y financieros, mientras que el bruto no."
tipo: mc

enunciado: "Si una empresa tiene un margen bruto alto pero un margen neto muy bajo, ¿qué se puede deducir?"

explicacion: |
  Un margen neto bajo con un margen bruto alto indica que la empresa tiene costos operativos (gastos de administración, ventas o financieros) muy elevados que consumen la utilidad bruta.
```

### 3 — Verdad o Falso: Rentabilidad Final
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["veracidad", "margen_neto"]

respuesta: falso
tipo: vf

enunciado: "El margen neto representa la rentabilidad de la empresa antes de considerar impuestos y gastos operativos."

explicacion: |
  Falso. El margen neto es el indicador de rentabilidad final, ya que se calcula después de restar todos los gastos, incluyendo operativos, financieros e impuestos.
```

### 4 — Cálculo de Margen Bruto
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "margen_bruto"]

variables:
  escenario: uno_de([
    ["1000", "600"],
    ["500", "350"],
    ["2000", "1200"]
  ])

respuesta: escenario[0][1]
tipo: input
tolerancia_abs: 0

enunciado: "Si las ventas netas son {escenario[0][0]} y el costo de ventas es {escenario[0][1]}, ¿cuál es el valor del margen bruto?"

pasos:
  - "Identificar las Ventas Netas: {escenario[0][0]}"
  - "Identificar el Costo de Ventas: {escenario[0][1]}"
  - "Restar: Ventas - Costo"

explicacion: |
  El margen bruto es la diferencia entre el ingreso por ventas y lo que costó producir o comprar esa mercadería vendida.
```

### 5 — Orden de la cascada de rentabilidad
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["orden", "jerarquia"]

opciones_explicitas: ["Ventas Netas", "Margen Bruto", "Margen Operativo", "Margen Neto"]
respuesta: ["Ventas Netas", "Margen Bruto", "Margen Operativo", "Margen Neto"]
tipo: ordenar

enunciado: "Ordena los conceptos desde el ingreso total hasta la utilidad final (el resultado más pequeño), siguiendo la estructura lógica de un estado de resultados."

explicacion: |
  La estructura lógica comienza con el ingreso total (Ventas), se le resta el costo para obtener el Margen Bruto, luego se restan los gastos operativos para el Margen Operativo, y finalmente impuestos y financieros para llegar al Margen Neto.
```