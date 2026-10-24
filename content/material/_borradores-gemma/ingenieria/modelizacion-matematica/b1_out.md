### 1 — Concepto de modelo matemático
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "representacion"
tipo: "completar"
respuestas_validas: ["representacion", "representación"]

enunciado: "Un modelo matemático es una ___ de un sistema o fenómeno de la realidad mediante el uso de lenguaje matemático."

explicacion: |
  La modelización consiste en crear una representación simplificada de la realidad para entenderla, predecirla o controlarla.
```

### 2 — Componentes de un modelo
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["componentes", "variables"]

opciones_explicitas: ["Parámetros", "Variables de estado", "Incertidumbre"]
respuesta: "Variables de estado"
tipo: "mc"

enunciado: "En la modelización de un sistema dinámico, las magnitudes que describen el estado del sistema en un instante dado se denominan:"

explicacion: |
  Las variables de estado son las incógnitas que definen la condición del sistema en un momento específico.
```

### 3 — Veracidad de la modelización
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["naturaleza_del_modelo"]

respuesta: falso
tipo: "vf"

enunciado: "¿Un modelo matemático es siempre una representación exacta y completa de la realidad física?"

explicacion: |
  Falso. Todo modelo es una simplificación de la realidad. Si un modelo fuera idéntico a la realidad, sería tan complejo como la propia realidad y perdería su utilidad para el análisis.
```

### 4 — Etapas del proceso de modelado
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

opciones_explicitas: ["Observación y simplificación", "Formulación matemática", "Validación y análisis"]
respuesta: ["Observación y simplificación", "Formulación matemática", "Validación y análisis"]
tipo: "ordenar"

enunciado: "Ordene las etapas lógicas del proceso de modelización:"

explicacion: |
  El proceso comienza identificando el problema (observación), luego se traduce a lenguaje matemático (formulación) y finalmente se comprueba si el modelo funciona (validación).
```

### 5 — Tipos de modelos según el tiempo
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  idx: uno_de([0, 1])
  datos: [
    ["continuo", "depende del tiempo de forma ininterrumpida"],
    ["discreto", "cambia solo en instantes específicos"]
  ]

respuesta: datos[idx][1]
tipo: "mc"
opciones_explicitas: ["continuo", "discreto"]

enunciado: "Si un modelo describe un sistema donde las variables cambian de forma ininterrumpida en el tiempo, estamos ante un modelo de tipo {datos[idx][0]}."

explicacion: |
  Los modelos continuos utilizan funciones que se definen para todos los valores de un intervalo, mientras que los discretos operan sobre pasos o momentos específicos.
```