### 1 — El concepto de presupuesto
```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["conceptos", "definiciones"]

respuesta: "estimación anticipada de ingresos y gastos"
tipo: completar
respuestas_validas: ["estimación anticipada de ingresos y gastos"]

enunciado: "El presupuesto se define como una ___ para un período determinado."

explicacion: |
  El presupuesto es la herramienta de planificación que permite proyectar la situación financiera de una organización mediante la cuantificación de sus ingresos y gastos esperados.
```

### 2 — Análisis de saldo presupuestario
```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["calculo", "saldo"]

variables:
  datos: [["Ingresos: 5000, Gastos: 4200", "800"], ["Ingresos: 3000, Gastos: 3500", "-500"], ["Ingresos: 1000, Gastos: 1000", "0"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["800", "-500", "0", "1000"]

enunciado: "Si una empresa tiene un escenario de {datos[idx][0]}, ¿cuál es el saldo presupuestario resultante?"

explicacion: |
  El saldo se calcula restando los gastos a los ingresos: {datos[idx][0]}. El resultado es {datos[idx][1]}.
```

### 3 — Verdadero o Falso: El carácter del presupuesto
```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["teoria"]

respuesta: falso

tipo: vf

enunciado: "Un presupuesto es un documento de carácter histórico que solo registra los movimientos financieros que ya han ocurrido."

explicacion: |
  Falso. El presupuesto es una herramienta de planificación hacia el futuro (proyectiva), no un registro de hechos pasados (contabilidad histórica).
```

### 4 — Proceso de elaboración presupuestaria
```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

respuesta: ["Definición de objetivos", "Estimación de ingresos", "Asignación de gastos", "Control y seguimiento"]
tipo: ordenar
opciones_explicitas: ["Definición de objetivos", "Estimación de ingresos", "Asignación de gastos", "Control y seguimiento"]

enunciado: "Ordene los pasos lógicos para la gestión de un presupuesto administrativo:"

explicacion: |
  Primero se definen las metas, luego se proyecta lo que entrará de dinero, se distribuye para cubrir las necesidades y finalmente se controla que se cumpla lo planeado.
```

### 5 — Cálculo de déficit operativo
```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "avanzado"
  tags: ["calculo", "déficit"]]

variables:
  escenario: [["Ingresos: 12000, Gastos: 15000", "3000"], ["Ingresos: 8000, Gastos: 7500", "500"]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][0]
tipo: input
tolerancia_abs: 0

enunciado: "En el escenario de {escenario[idx][0]}, ¿cuál es el monto del déficit (valor absoluto de la diferencia negativa)?"

pasos:
  - "Identificar ingresos: 12000"
  - "Identificar gastos: 15000"
  - "Calcular diferencia: 12000 - 15000 = -3000"
  - "Obtener el valor absoluto del déficit: 3000"

explicacion: |
  El déficit ocurre cuando los gastos superan a los ingresos. En este caso, el déficit es de {escenario[idx][1]}.
```