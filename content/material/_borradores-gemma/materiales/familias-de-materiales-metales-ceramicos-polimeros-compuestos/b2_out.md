### 1 — Clasificación de materiales por su estructura
```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["clasificacion", "metales"]

respuesta: "metales"
tipo: mc
opciones_explicitas: ["metales", "cerámicos", "polímeros", "compuestos"]

enunciado: "Un cable de cobre utilizado para transmitir electricidad en una instalación doméstica posee alta conductividad eléctrica y ductilidad. Por sus propiedades, este material pertenece a la familia de los ________."

explicacion: |
  Los metales se caracterizan por tener enlaces metálicos que permiten el movimiento libre de electrones, lo que les otorga alta conductividad eléctrica y térmica, además de ser generalmente dúctiles.
```

### 2 — Propiedades de los cerámicos
```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["cerámicos", "propiedades"]

respuesta: falso
tipo: vf

enunciado: "Los materiales cerámicos, debido a sus enlaces iónicos o covalentes, presentan una alta ductilidad y son excelentes conductores de electricidad a temperatura ambiente."

explicacion: |
  Falso. Los cerámicos son materiales mayoritariamente aislantes eléctricos y presentan una alta fragilidad (no son dúctiles), ya que sus enlaces fuertes impiden el deslizamiento de planos atómicos.
```

### 3 — Composición de materiales compuestos
```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "intermedio"
  tags: ["compuestos", "estructura"]

variables:
  idx: uno_de([0, 1])

respuesta: tabla[idx][1]
tipo: completar
tabla: [["fibra de vidrio", "fibra de vidrio"], ["resina epoxi", "resina epoxi"]]
opciones_explicitas: ["fibra de vidrio", "resina epoxi"]

enunciado: "En un material compuesto reforzado (como la fibra de vidrio), la fase que aporta resistencia mecánica se denomina fase ________, mientras que la fase que mantiene la forma y transfiere la carga es la matriz."

explicacion: |
  En los materiales compuestos, la fase de refuerzo (como la fibra) es la que soporta la mayor parte de la carga, mientras que la matriz (como la resina) rodea y protege al refuerzo.
```

### 4 — Procesamiento de polímeros
```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["polímeros", "estructuras"]

respuesta: "polímeros"
tipo: completar
respuestas_validas: ["polímeros"]

enunciado: "Las macromoléculas formadas por la unión de largas cadenas de unidades repetitivas llamadas monómeros se conocen como ________."

explicacion: |
  Los polímeros (del griego 'muchos') son materiales cuyas moléculas son cadenas muy largas, lo que les confiere propiedades como la flexibilidad y baja densidad.
```

### 5 — Secuencia de degradación de un polímero termoplástico
```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "intermedio"
  tags: ["polímeros", "procesamiento"]

respuesta: ["calentamiento", "moldeo", "enfriamiento", "solidificación"]
tipo: ordenar
opciones_explicitas: ["calentamiento", "moldeo", "enfriamiento", "solidificación"]

enunciado: "Para fabricar una pieza mediante inyección de un polímero termoplástico, se debe seguir un orden lógico de transformación térmica. Ordena los pasos:"

pasos:
  - "El material se eleva su temperatura hasta alcanzar el estado viscoso."
  - "El material fundido se introduce en la cavidad del molde."
  - "Se reduce la temperatura para recuperar la rigidez."
  - "El material toma su forma final tras el cambio de fase."

explicacion: |
  Los termoplásticos se caracteran por poder fundirse y moldearse repetidamente mediante ciclos de calentamiento (fusión) y enfriamiento (solidificación) sin que su estructura química cambie drásticamente.
```