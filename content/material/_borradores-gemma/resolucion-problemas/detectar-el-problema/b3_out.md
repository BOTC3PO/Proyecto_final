### 1 — El síntoma vs El problema
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "basico"
  tags: ["diagnostico", "analisis"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El sistema está lento", "El disco duro está lleno"],
    ["La planta tiene hojas amarillas", "La planta no tiene suficiente nitrógeno"]
  ]

enunciado: "En el caso donde el síntoma es '{escenarios[escenario_idx][0]}', el problema real es '{escenarios[escenario_idx][1]}'. ¿Es correcto identificar el síntoma como el problema real?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: "vf"

explicacion: |
  Confundir un síntoma (lo que se observa) con la causa raíz (el problema real) es el error más común en la resolución de problemas. Resolver el síntoma solo ofrece una solución temporal.
```

### 2 — El error de la solución prematura
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "intermedio"
  tags: ["metodologia", "errores"]

opciones_explicitas: ["saltar a la solución", "analizar la causa raíz", "reunir al equipo", "documentar el error"]
respuesta: "saltar a la solución"
tipo: "mc"

enunciado: "Si un equipo comienza a implementar cambios técnicos inmediatamente después de notar una anomalía, sin haber investigado el origen, ¿qué error de resolución de problemas está cometiendo?"

explicacion: |
  La resolución de problemas efectiva requiere una fase de diagnóstico. Saltar a la solución sin definir el problema real suele llevar a desperdiciar recursos en soluciones que no atacan la causa.
```

### 3 — Identificación de la causa raíz
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "intermedio"
  tags: ["analisis", "causa_raiz"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["El cliente se queja de que el producto llegó tarde", "El cliente dice que el producto es de mala calidad"],
    ["El motor hace un ruido extraño", "El motor no arranca"]
  ]
  causas: [
    ["Falta de stock en el almacén", "Defecto en la línea de ensamblaje"],
    ["Filtro de aceite obstruido", "Batería descargada"]
  ]

enunciado: "Para el caso '{casos[caso_idx][0]}', la causa raíz probable es '{causas[caso_idx][0]}'. Para identificar esto, primero debemos definir el problema real."

respuestas_validas: ["Falta de stock en el almacén", "Defecto en la línea de ensamblaje", "Filtro de aceite obstruido", "Batería descargada"]
respuesta: ""
tipo: "completar"

explicacion: |
  La identificación precisa del problema depende de distinguir entre el efecto visible y la causa subyacente.
```

### 4 — Pasos para definir el problema
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "avanzado"
  tags: ["metodologia", "orden"]

opciones_explicitas: [
  "Observar el síntoma",
  "Analizar la causa raíz",
  "Proponer soluciones",
  "Implementar la solución"
]
respuesta: ["Observar el síntoma", "Analizar la causa raíz", "Proponer soluciones", "Implementar la solución"]
tipo: "ordenar"

enunciado: "Ordena los pasos lógicos para resolver un problema, empezando por la detección:"

explicacion: |
  Intentar resolver un problema sin haber pasado por la observación y el análisis de la causa raíz rompe el flujo lógico de la resolución de problemas.
```

### 5 — El problema mal definido
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "basico"
  tags: ["definicion", "logica"]

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: "vf"

enunciado: "Si definimos un problema como 'Falta de dinero en la caja', ¿estamos definiendo el problema o estamos definiendo una consecuencia de un problema mayor?"

explicacion: |
  'Falta de dinero' suele ser un síntoma de problemas más profundos (ventas bajas, exceso de gastos, errores de contabilidad, robos). Un problema bien definido debe apuntar a la raíz, no al resultado financiero.
```