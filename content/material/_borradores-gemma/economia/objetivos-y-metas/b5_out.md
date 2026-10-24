### 1 — Diferencia conceptual
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["administracion", "conceptos"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["Aumentar la presencia en el mercado nacional", "Incrementar las ventas en un 15% durante el primer semestre de 2024"], ["Mejorar la satisfacción del cliente", "Reducir el tiempo de espera en atención al cliente a menos de 2 minutos para diciembre"]]

enunciado: "En el escenario '{escenarios[escenario_idx][0]}', la expresión '{escenarios[escenario_idx][1]}' representa una: ___"

respuestas_validas: ["meta", "objetivo general"]
tipo: completar

explicacion: |
  El primer elemento es un objetivo general (aspiracional y amplio), mientras que el segundo es una meta (específica, medible y con un plazo determinado).
```

### 2 — Identificación de metas
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["administracion", "metas"]

variables:
  caso_idx: uno_de([0,1,2])
  casos: [
    ["Reducir costos operativos", "Reducir costos operativos", "Reducir costos operativos"],
    ["Incrementar la rentabilidad", "Incrementar la rentabilidad", "Incrementar la rentabilidad"],
    ["Expandir la marca", "Expandir la marca", "Expandir la marca"]
  ]
  metas: [
    "Reducir costos operativos en un 5% mensual",
    "Incrementar la rentabilidad en un 10% anual",
    "Expandir la marca abriendo 3 sucursales en junio"
  ]

enunciado: "Si el objetivo es '{casos[caso_idx]}', ¿cuál de las siguientes opciones constituye una meta válida y medible?"

opciones_explicitas: ["Reducir costos operativos en un 5% mensual", "Incrementar la rentabilidad en un 10% anual", "Expandir la marca abriendo 3 sucursales en junio"]
tipo: mc

explicacion: |
  Una meta debe ser cuantificable y tener un tiempo definido para poder ser medida frente al objetivo general.
```

### 3 — Veracidad de conceptos
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["conceptos", "logica"]

enunciado: "Un objetivo general es una meta concreta y medible que define un resultado específico en un tiempo determinado. ¿Es esto verdadero o falso?"

respuesta: falso
tipo: vf

explicacion: |
  Es falso. La definición dada corresponde a una 'meta'. El 'objetivo general' es el propósito amplio y cualitativo.
```

### 4 — Secuencia de planificación
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["proceso", "planificacion"]

enunciado: "Ordene los pasos lógicos para la planificación estratégica de una empresa:"

opciones_explicitas: ["Definir la visión y misión", "Establecer objetivos generales", "Diseñar metas específicas y medibles", "Ejecutar y monitorear resultados"]
tipo: ordenar

respuesta: ["Definir la visión y misión", "Establecer objetivos generales", "Diseñar metas específicas y medibles", "Ejecutar y monitorear resultados"]

explicacion: |
  La planificación comienza con la filosofía organizacional (visión/misión), sigue con los propósitos amplios (objetivos), luego se desglosan en acciones cuantificables (metas) y finalmente se ejecutan.
```

### 5 — Análisis de métricas
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "avanzado"
  tags: ["analisis", "metas"]

variables:
  dato_idx: uno_de([0,1])
  datos: [
    ["Objetivo: Ser líderes en calidad. Meta: Lograr 95/100 en encuestas de satisfacción en diciembre.", 95],
    ["Objetivo: Crecimiento sostenido. Meta: Alcanzar 1.000 nuevos usuarios activos en 3 meses.", 1000]
  ]

enunciado: "Para el escenario '{datos[dato_idx][0]}', el valor numérico que permite medir el cumplimiento de la meta es: ___"

respuestas_validas: ["95", "1000"]
tipo: completar

explicacion: |
  Las metas proporcionan el indicador numérico (KPI) necesario para evaluar si el objetivo general se está cumpliendo.
```