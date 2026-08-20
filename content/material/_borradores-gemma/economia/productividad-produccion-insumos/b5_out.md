### 1 — Cálculo de productividad simple
```
metadata:
  materia: "economia"
  tema: "productividad_insumos"
  nivel: "basico"
  tags: ["productividad", "calculo"]

variables:
  escenario: uno_de([[100, 20], [150, 30], [200, 25]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: input
tolerancia_abs: 0.01

enunciado: "Una empresa textil produce {escenario[idx][0]} unidades de camisas utilizando {escenario[idx][1]} horas de trabajo. ¿Cuál es la productividad de la mano de obra (unidades por hora)?"

pasos:
  - "Identificar la producción total: {escenario[idx][0]}"
  - "Identificar el insumo utilizado: {escenario[idx][1]} horas"
  - "Dividir la producción por el insumo: {escenario[idx][0]} / {escenario[idx][1]}"

explicacion: |
  La productividad se calcula dividiendo la producción total entre la cantidad de insumos utilizados. En este caso: {escenario[idx][0]} / {escenario[idx][1]} = {escenario[idx][0] / escenario[idx][1]}.
```

### 2 — Interpretación de la productividad
```
metadata:
  materia: "economia"
  tema: "productividad_insumos"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Si una empresa logra producir la misma cantidad de productos utilizando menos materia prima, se dice que la productividad de los insumos ha aumentado."

explicacion: |
  Correcto. La productividad es una relación inversa con los insumos para una producción constante: a menor insumo para el mismo output, mayor productividad.
```

### 3 — Comparación de escenarios
```
metadata:
  materia: "economia"
  tema: "productividad_insumos"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  datos: [[10, 2, 15, 5], [50, 10, 60, 10], [100, 20, 120, 20]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][2]
tipo: mc

opciones_explicitas: ["Escenario A", "Escenario B", "Escenario C"]

enunciado: "Considera los siguientes pares (Producción, Insumo):
- Escenario A: ({datos[idx][0]}, {datos[idx][1]})
- Escenario B: ({datos[idx][2]}, {datos[idx][3]})
- Escenario C: ({datos[idx][4]}, {datos[idx][5]})

¿Cuál de los escenarios presenta la mayor productividad?"

explicacion: |
  Calculamos la productividad de cada uno:
  A: {datos[idx][0] / datos[idx][1]}
  B: {datos[idx][2] / datos[idx][3]}
  C: {datos[idx][4] / datos[idx][5]}
  El valor más alto corresponde al escenario seleccionado.
```

### 4 — Completar la fórmula
```
metadata:
  materia: "economia"
  tema: "productividad_insumos"
  nivel: "basico"
  tags: ["formula"]

respuesta: "producción / insumo"
tipo: completar
respuestas_validas: ["producción / insumo", "produccion / insumo", "produccion / insumo"]

enunciado: "La fórmula general para calcular la productividad es: ___"

explicacion: |
  La productividad es el cociente entre la producción obtenida y la cantidad de insumos (trabajo, capital, materia prima, etc.) utilizados para obtenerla.
```

### 5 — Análisis de eficiencia (Ordenamiento)
```
metadata:
  materia: "economia"
  tema: "productividad_insumos"
  nivel: "intermedio"
  tags: ["ordenar"]

variables:
  casos: [
    ["P: 10, I: 2", "P: 20, I: 5", "P: 30, I: 10"],
    ["P: 100, I: 10", "P: 100, I: 5", "P: 100, I: 2"],
    ["P: 5, I: 1", "P: 15, I: 3", "P: 45, I: 9"]
  ]
  idx: uno_de([0, 1, 2])

respuesta: ["P: 10, I: 2", "P: 20, I: 5", "P: 30, I: 10"]
tipo: ordenar
opciones_explicitas: ["P: 10, I: 2", "P: 20, I: 5", "P: 30, I: 10", "P: 100, I: 10", "P: 100, I: 5", "P: 100, I: 2", "P: 5, I: 1", "P: 15, I: 3", "P: 45, I: 9"]

enunciado: "Ordene los siguientes casos de producción según su productividad, de MENOR a MAYOR productividad."

explicacion: |
  Para ordenar debemos calcular la relación P/I de cada elemento:
  Caso 1: 10/2=5, 20/5=4, 30/10=3 (Orden descendente si se pide de menor a mayor: 3, 4, 5)
  Caso 2: 100/10=10, 100/5=20, 100/2=50 (Orden: 10, 20, 50)
  Caso 3: 5/1=5, 15/3=5, 45/9=5 (Son iguales)
  
  Nota: El usuario debe identificar el orden correcto basado en los valores calculados.
```