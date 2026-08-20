### 1 — El proceso de planificación
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["gestion", "procesos"]

respuesta: "establecer objetivos"
tipo: completar
respuestas_validas: ["establecer objetivos", "definir metas"]

enunciado: "La primera etapa fundamental de la planificación administrativa consiste en ___ para saber hacia dónde se dirige la organización."

explicacion: |
  La planificación comienza con la definición de los objetivos o metas. Sin un norte claro, los demás pasos (cómo, cuándo y con qué recursos) carecen de propósito.
```

### 2 — Análisis de un caso de expansión
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["toma_de_decisiones", "estrategia"]

variables:
  escenario: uno_de([
    ["Abrir una sucursal en otra ciudad", "aumentar costos fijos", "crecer mercado"],
    ["Lanzar un producto digital", "reducir costos de envío", "expandir alcance"]
  ])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["aumentar costos fijos", "reducir costos de envío", "maximizar beneficios", "reducir personal"]

enunciado: "Una empresa decide expandirse mediante la apertura de una nueva sucursal física. Según la planificación estratégica, esta acción implica principalmente: {escenario[idx][0]}."

explicacion: |
  Al abrir una sucursal física, la empresa está planificando un crecimiento que conlleva un aumento en sus costos fijos (alquiler, servicios, salarios fijos), como se indica en la opción seleccionada.
```

### 3 — Verdad o Falso: El carácter de la planificación
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "La planificación administrativa es un proceso estático que, una vez definido, no debe ser revisado aunque el entorno cambie."

explicacion: |
  Falso. La planificación debe ser flexible. Si el entorno (economía, competencia, leyes) cambia, la planificación debe ajustarse para asegurar el cumplimiento de los objetivos.
```

### 4 — Secuencia de la planificación operativa
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["pasos", "metodologia"]

respuesta: ["Definir metas", "Determinar acciones", "Asignar recursos", "Establecer cronograma"]
tipo: ordenar
opciones_explicitas: ["Definir metas", "Determinar acciones", "Asignar recursos", "Establecer cronograma", "Evaluar resultados"]

enunciado: "Para implementar un nuevo proyecto de producción, un gerente debe seguir un orden lógico de planificación. Ordene los siguientes pasos de forma secuencial:"

explicacion: |
  Primero se define el 'qué' (metas), luego el 'cómo' (acciones), después el 'con qué' (recursos) y finalmente el 'cuándo' (cronograma). La evaluación es un paso posterior al proceso de ejecución.
```

### 5 — Cálculo de presupuesto planificado
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["presupuesto", "calculo"]

variables:
  datos: [
    [5000, 1200, 3000],
    [8000, 2500, 5500],
    [3000, 900, 2100]
  ]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][0] - datos[idx][1] - datos[idx][2]
tipo: input
tolerancia_abs: 0.01

enunciado: "En la fase de planificación de presupuesto, una empresa proyecta los siguientes valores para el próximo trimestre: Ingresos estimados: ${datos[idx][0]}, Gastos operativos: ${datos[idx][1]}, Impuestos proyectados: ${datos[idx][2]}. ¿Cuál es el beneficio neto planificado?"

pasos:
  - "Identificar los ingresos proyectados."
  - "Restar los gastos operativos."
  - "Restar los impuestos proyectados del resultado anterior."

explicacion: |
  El beneficio neto planificado se obtiene restando todos los costos y gastos proyectados de los ingresos totales previstos.
```