### 1 — Diferencia conceptual
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["administracion", "conceptos"]

respuesta: "meta"
tipo: "mc"
opciones_explicitas: ["objetivo", "meta", "estrategia", "plan"]

enunciado: "Un enunciado que describe un propósito amplio y aspiracional, como 'Ser la empresa líder en el sector de calzado en el país', se define como un ___."

explicacion: |
  El objetivo general es el fin último y amplio (la visión), mientras que la meta es el paso específico, medible y con un tiempo determinado para alcanzar dicho objetivo.
```

### 2 — Identificación de metas
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["metas_SMART", "medicion"]

variables:
  escenario: uno_de([
    ["Aumentar las ventas totales", "Aumentar las ventas en un 15% durante el segundo semestre de 2024"],
    ["Mejorar la satisfacción del cliente", "Lograr un puntaje de 9/10 en las encuestas de satisfacción para diciembre"],
    ["Reducir costos operativos", "Disminuir los gastos de logística en un 5% mensual durante el próximo trimestre"]
  ])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: [escenario[0], escenario[1], "Reducir la rotación de personal"]

enunciado: "Dada la siguiente lista de declaraciones, selecciona aquella que represente una META concreta y medible (SMART) en lugar de un objetivo general: {escenario[0]}"

explicacion: |
  Una meta debe ser cuantificable y tener un plazo. Mientras que '{escenario[0]}' es una intención general, '{escenario[1]}' proporciona un número (15%) y un tiempo (segundo semestre), permitiendo su medición real.
```

### 3 — Veracidad de la medición
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["logica", "metas"]

respuesta: falso
tipo: "vf"

enunciado: "Un objetivo general puede ser evaluado de forma inmediata y precisa mediante un indicador numérico sin necesidad de desglosarlo en metas."

explicacion: |
  Falso. Los objetivos generales suelen ser cualitativos o demasiado amplios. Para poder medirlos, es indispensable transformarlos en metas específicas, medibles y con un plazo determinado.
```

### 4 — Proceso de planificación
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["pasos", "planificacion"]

respuesta: ["Definir el objetivo general", "Establecer metas específicas", "Asignar recursos y tiempos", "Ejecutar y monitorear"]
tipo: "ordenar"
opciones_explicitas: ["Definir el objetivo general", "Establecer metas específicas", "Asignar recursos y tiempos", "Ejecutar y monitorear"]

enunciado: "Ordena lógicamente los pasos para pasar de una visión empresarial a la ejecución de una estrategia de gestión:"

explicacion: |
  La planificación estratégica siempre comienza con la visión macro (objetivo), se desglosa en pasos accionables y medibles (metas), se asignan los medios para lograrlas y finalmente se controla el proceso.
```

### 5 — Completar la meta
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "avanzado"
  tags: ["calculo", "indicadores"]

variables:
  datos: [
    ["Ventas actuales: 100.000 USD", "120.000 USD", "10%"],
    ["Clientes actuales: 500", "600", "20%"],
    ["Producción actual: 1000 unidades", "1100", "10%"]
  ]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][2]
tipo: "completar"
respuestas_validas: [datos[idx][2]]

enunciado: "Si el objetivo general es 'Incrementar la facturación anual', y actualmente se facturan {datos[idx][0]}, una meta concreta para este año sería alcanzar los {datos[idx][1]} USD, lo que representa un incremento del ___."

explicacion: |
  Para convertir un objetivo en meta, debemos calcular la diferencia porcentual o absoluta. En este caso, el incremento respecto al valor base definido en el escenario sorteado.
```