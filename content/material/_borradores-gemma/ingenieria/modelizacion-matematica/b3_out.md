### 1 — El error de la variable dependiente
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["conceptos", "variables"]

variables:
  escenario: uno_de([
    ["La temperatura de un motor sube con el tiempo", "tiempo"],
    ["El volumen de un gas aumenta con la presión", "presión"],
    ["El costo de producción baja al aumentar la escala", "escala"]
  ])

enunciado: "En un modelo matemático, si queremos representar cómo {escenario[0]} afecta a la variable principal, la variable que cambia como consecuencia directa es la variable ___."

respuestas_validas: ["dependiente"]

respuesta: "dependiente"
tipo: completar

explicacion: |
  En la modelización, la variable dependiente es aquella cuyo valor "depende" de los cambios en la variable independiente (explicativa).
```

### 2 — ¿Es un modelo perfecto?
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["filosofia_modelado", "limitaciones"]

enunciado: "Un modelo matemático es una representación simplificada de la realidad. ¿Es posible que un modelo sea 100% exacto y capture todos los fenómenos físicos de un sistema complejo?"

opciones_explicitas: ["verdadero", "falso"]

respuesta: "falso"
tipo: mc

explicacion: |
  Todo modelo implica una simplificación (asunciones). Si un modelo fuera tan complejo como la realidad misma, dejaría de ser un modelo útil para la ingeniería.
```

### 3 — Identificación de relaciones
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "intermedio"
  tags: ["relaciones", "proporcionalidad"]

variables:
  caso: uno_de([
    ["El área de un círculo respecto a su radio", "area_radio"],
    ["La fuerza centrífuga respecto a la velocidad angular", "fuerza_omega"],
    ["La energía cinética respecto a la velocidad", "energia_v"]
  ])

enunciado: "Analizando el caso de {caso[0]}, la relación matemática entre la variable dependiente y la independiente es de tipo ___."

opciones_explicitas: ["lineal", "cuadrática", "inversa", "exponencial"]

respuesta: "cuadrática"
tipo: mc

explicacion: |
  En el caso de {caso[0]}, la relación sigue la forma $y = k \cdot x^2$, lo cual es una relación cuadrática.
```

### 4 — El proceso de modelización
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

enunciado: "Ordena los pasos lógicos para desarrollar un modelo matemático de un sistema físico:"

opciones_explicitas: ["Observación del fenómeno", "Identificación de variables", "Establecimiento de relaciones matemáticas", "Validación del modelo con datos reales"]

respuesta: ["Observación del fenómeno", "Identificación de variables", "Establecimiento de relaciones matemáticas", "Validación del modelo con datos reales"]
tipo: ordenar

explicacion: |
  El proceso comienza con la observación, sigue con la definición de qué mediremos (variables), cómo se relacionan (ecuaciones) y termina verificando si el modelo predice bien la realidad (validación).
```

### 5 — El peligro de la extrapolación
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "avanzado"
  tags: ["validacion", "errores"]

variables:
  rango: uno_de([
    ["[0, 10] para un experimento de tensión"],
    ["[20, 50] para el flujo de un fluido"],
    ["[100, 500] para la carga de una viga"]
  ])

enunciado: "Si un modelo ha sido validado experimentalmente solo en el rango {rango[0]}, aplicar el modelo para predecir el comportamiento en el rango [100, 200] sin nueva validación se denomina error de ___."

opciones_explicitas: ["extrapolación", "interpolación", "discretización", "normalización"]

respuesta: "extrapolación"
tipo: mc

explicacion: |
  La extrapolación consiste en predecir valores fuera del rango de los datos conocidos. Es altamente riesgosa porque el modelo puede dejar de ser válido (por ejemplo, por cambios de fase o efectos no lineales) fuera del rango observado.
```