### 1 — Arquitectura y propósito
```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "basico"
  tags: ["arquitectura", "diferencias"]

respuesta: "microcontrolador"
tipo: "completar"
respuestas_validas: ["microcontrolador"]

enunciado: "Un dispositivo que integra en un solo chip la CPU, la memoria RAM, la memoria de programa y los periféricos de entrada/salida para controlar una tarea específica (como el control de un lavarropas) se denomina ___."

explicacion: |
  El microcontrolador es un sistema completo en un solo chip diseñado para tareas dedicadas, mientras que el microprocesador es solo la unidad central de procesamiento que requiere componentes externos para funcionar.
```

### 2 — Aplicación práctica: El cerebro de una PC
```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "basico"
  tags: ["aplicacion", "computacion"]

respuesta: "microprocesador"
tipo: "mc"
opciones_explicitas: ["microcontrolador", "microprocesador", "memoria flash", "puerto GPIO"]

enunciado: "Si estamos diseñando una computadora de alto rendimiento para edición de video que requiere gran capacidad de procesamiento y expansión de memoria externa, el componente principal debe ser un:"

explicacion: |
  Los microprocesadores están diseñados para tareas de propósito general y alta velocidad, delegando el almacenamiento y la entrada/salida a otros componentes externos.
```

### 3 — Verdad o Falso: Integración de memoria
```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "basico"
  tags: ["memoria", "integracion"]

respuesta: falso
tipo: "vf"

enunciado: "Un microprocesador incluye internamente la memoria RAM y la memoria de lectura de instrucciones (ROM) como parte esencial de su arquitectura básica de un solo chip."

explicacion: |
  Falso. El microprocesador solo contiene la unidad de procesamiento; la RAM y la ROM son componentes externos que deben conectarse a él. El microcontrolador sí las integra.
```

### 4 — El proceso de diseño de un sistema embebido
```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "intermedio"
  tags: ["flujo_trabajo", "diseño"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Controlar la temperatura de un horno mediante un sensor y un relé", "microcontrolador"],
    ["Ejecutar un sistema operativo complejo como Windows o Linux", "microprocesador"]
  ]

respuesta: "escenarios[escenario_idx][1]"
tipo: "mc"
opciones_explicitas: ["microcontrolador", "microprocesador"]

enunciado: "Para el escenario: '{escenarios[escenario_idx][0]}', el componente ideal es un:"

explicacion: |
  Se ha seleccionado el componente adecuado según la complejidad y la naturaleza de la tarea (específica vs general).
```

### 5 — Secuencia de componentes en una PC
```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "intermedio"
  tags: ["arquitectura", "ordenar"]

respuesta: ["microprocesador", "memoria RAM", "unidades de almacenamiento"]
tipo: "ordenar"
opciones_explicitas: ["microprocesador", "memoria RAM", "unidades de almacenamiento"]

enunciado: "En una arquitectura basada en microprocesador (como una PC), ordene los componentes desde el núcleo de procesamiento hacia el almacenamiento de datos masivos:"

pasos:
  - "El procesador solicita datos."
  - "Los datos se cargan temporalmente para su uso inmediato."
  - "Los datos se guardan permanentemente para uso futuro."

explicacion: |
  En un sistema basado en microprocesador, el flujo lógico es: CPU (procesamiento) -> RAM (memoria volátil de trabajo) -> Disco/SSD (almacenamiento masivo).
```