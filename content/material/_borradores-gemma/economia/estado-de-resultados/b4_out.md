### 1 — Diferencia fundamental
```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["conceptos", "contabilidad"]

respuesta: "flujo"
tipo: completar
respuestas_validas: ["flujo", "flujo de fondos", "flujo de caja"]

enunciado: "A diferencia del Balance General, que muestra la situación patrimonial en un momento dado, el Estado de Resultados muestra el ___ de ingresos y gastos durante un período determinado."

explicacion: |
  El Balance General es una "foto" estática, mientras que el Estado de Resultados es un "video" que registra el flujo de transacciones en un tiempo determinado.
```

### 2 — Diferencia entre utilidad y caja
```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["rentabilidad", "liquidez"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[true, false], [false, true]]

respuesta: "escenarios[escenario_idx][0]"
tipo: mc
opciones_explicitas: ["La utilidad neta indica la liquidez inmediata de la empresa", "La utilidad neta indica la rentabilidad del período, no necesariamente el efectivo disponible"]

enunciado: "Si una empresa reporta una utilidad neta positiva pero tiene problemas para pagar sus deudas corrientes, ¿qué concepto se está diferenciando correctamente?"

explicacion: |
  El principio del devengado implica que los ingresos y gastos se registran cuando ocurren, independientemente de si hubo movimiento de efectivo o no.
```

### 3 — Componentes del resultado
```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["estructura", "conceptos"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que el Resultado del Ejercicio se obtiene simplemente restando el Activo del Pasivo?"

explicacion: |
  Falso. La diferencia entre Activo y Pasivo es el Patrimonio Neto. El Resultado del Ejercicio se obtiene de la diferencia entre Ingresos y Gastos en el Estado de Resultados.
```

### 4 — Orden de la estructura operativa
```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["estructura", "jerarquia"]

respuesta: ["Ventas Netas", "Costo de Mercaderías Vendidas", "Utilidad Bruta", "Gastos Operativos", "Utilidad Operativa"]
tipo: ordenar
opciones_explicitas: ["Ventas Netas", "Costo de Mercaderías Vendidas", "Utilidad Bruta", "Gastos Operativos", "Utilidad Operativa"]

enunciado: "Ordene los conceptos según la estructura lógica de un Estado de Resultados para determinar la utilidad operativa:"

explicacion: |
  La estructura sigue un orden descendente: primero se determinan las ventas, se restan los costos directos para obtener la utilidad bruta, y luego se restan los gastos de administración y ventas para llegar a la utilidad operativa.
```

### 5 — Costos vs Gastos
```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "avanzado"
  tags: ["costos", "clasificacion"]

variables:
  tipo_item_idx: uno_de([0, 1])
  items: [[0, 1], [1, 0]]

respuesta: "items[tipo_item_idx][0]"
tipo: mc
opciones_explicitas: ["Costo", "Gasto"]

enunciado: "En el Estado de Resultados, el concepto que se relaciona directamente con el ingreso por ventas para determinar la utilidad bruta se denomina ___."

explicacion: |
  El 'Costo' (como el CMV) está directamente vinculado a la producción o adquisición de lo vendido, mientras que el 'Gasto' suele referirse a consumos para la estructura operativa (administración/ventas).
```