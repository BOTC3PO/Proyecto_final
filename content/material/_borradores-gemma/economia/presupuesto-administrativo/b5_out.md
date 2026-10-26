### 1 — El balance del trimestre
```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["presupuesto", "ingresos", "gastos"]

variables:
  escenario: uno_de([["Ventas: 5000, Gastos: 3200", "1800"], ["Ventas: 4500, Gastos: 4600", "-100"], ["Ventas: 3000, Gastos: 2500", "500"]])
  idx: uno_de([0, 1, 2])
  resultado: escenario[idx][1]

tipo: mc
opciones_explicitas: ["Superávit", "Déficit", "Equilibrio"]

enunciado: "Si una organización proyecta un escenario donde {escenario[idx][0]}, el resultado presupuestario es un ___."

explicacion: |
  El resultado se obtiene restando los gastos de los ingresos. Si el resultado es positivo, hay superávit; si es negativo, hay déficit.
```

### 2 — Conceptos fundamentales
```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["definiciones", "teoria"]

tipo: vf
respuesta: verdadero

enunciado: "El presupuesto es una herramienta de planificación que permite estimar los recursos económicos necesarios para alcanzar objetivos en un periodo determinado."

explicacion: |
  Efectivamente, el presupuesto actúa como una hoja de ruta financiera para la gestión administrativa.
```

### 3 — Identificación de componentes
```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["ingresos", "egresos", "clasificacion"]

variables:
  item: uno_de([["Alquiler de oficina", "Gasto"], ["Venta de servicios", "Ingreso"], ["Pago de salarios", "Gasto"]])

tipo: completar
respuestas_validas: ["Ingreso", "Gasto"]
respuesta: item[1]

enunciado: "El concepto '{item[0]}' se clasifica contablemente como un ___."

explicacion: |
  Los ingresos representan entradas de recursos, mientras que los gastos representan salidas o consumos de recursos.
```

### 4 — Ciclo de gestión presupuestaria
```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["proceso", "etapas"]

tipo: ordenar
opciones_explicitas: ["Planificación", "Ejecución", "Control y Evaluación"]
respuesta: ["Planificación", "Ejecución", "Control y Evaluación"]

enunciado: "Ordene las etapas lógicas del proceso presupuestario en una organización:"

explicacion: |
  Primero se planifica (se estima), luego se ejecuta (se gasta/ingresa) y finalmente se controla (se compara lo real vs lo presupuestado).
```

### 5 — Cálculo de desvío presupuestario
```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "avanzado"
  tags: ["desvio", "calculo", "analisis"]]

variables:
  datos: [["Presupuestado: 1000, Real: 1200", "200"], ["Presupuestado: 500, Real: 450", "-50"]]
  idx: uno_de([0, 1])
  desvio: datos[idx][1]

tipo: input
tolerancia_abs: 0

enunciado: "Si el presupuesto para un proyecto era de {datos[idx][0]}, el desvio absoluto respecto a lo ejecutado es de ___."

pasos:
  - "Identificar el valor presupuestado."
  - "Identificar el valor real ejecutado."
  - "Calcular la diferencia absoluta entre ambos valores."

explicacion: |
  El desvío mide la diferencia entre lo que se planeó y lo que realmente ocurrió, permitiendo ajustar la gestión.
```