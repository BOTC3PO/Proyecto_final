### 1 — Mecanismos de transferencia en un termo
```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["conduccion", "conveccion", "radiacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["Un termo de café con doble pared de vacío", "radiacion"],
    ["Una cuchara de metal en el café caliente", "conduccion"]
  ]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["conduccion", "conveccion", "radiacion"]

enunciado: "En el escenario seleccionado: {datos[escenario_idx][0]}, el mecanismo de transferencia de calor predominante que se intenta evitar o que ocurre es la {datos[escenario_idx][1]}."

explicacion: |
  La conducción requiere contacto directo entre partículas, la convección requiere un fluido en movimiento y la radiación se transmite mediante ondas electromagnéticas (como en el vacío de un termo).
```

### 2 — El calor en el aire
```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conveccion"]

respuesta: verdadero
tipo: vf

enunciado: "En la convección, el calor se transfiere mediante el movimiento macroscópico de un fluido (líquido o gas) debido a diferencias de densidad."

explicacion: |
  Correcto. Las corrientes de convección se originan porque el fluido caliente es menos denso y sube, mientras que el frío es más denso y baja.
```

### 3 — Identificación de procesos
```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["conduccion", "conveccion", "radiacion"]

variables:
  caso_idx: uno_de([0, 1, 2])
  casos: [
    ["El sol calentando la Tierra", "radiacion"],
    ["El calor de una estufa calentando el aire de una habitación", "conveccion"],
    ["El mango de una sartén que se calienta al fuego", "conduccion"]
  ]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["conduccion", "conveccion", "radiacion"]

enunciado: "Analiza el caso: {casos[caso_idx][0]}. ¿Qué mecanismo de transferencia de calor es el principal?"

explicacion: |
  Cada caso representa un mecanismo distinto: contacto (conducción), movimiento de fluido (convección) u ondas electromagnéticas (radiación).
```

### 4 — Orden de procesos en un sistema térmico
```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "avanzado"
  tags: ["secuencia", "transferencia"]

respuesta: ["radiacion", "conveccion", "conduccion"]
tipo: ordenar

opciones_explicitas: ["radiacion", "conveccion", "conduccion"]

enunciado: "Ordena los mecanismos de transferencia de calor según su capacidad para propagarse en el vacío, desde el que puede hacerlo sin necesidad de materia hasta el que requiere contacto sólido directo."

explicacion: |
  La radiación no requiere medio (puede viajar en el vacío), la convección requiere un fluido y la conducción requiere contacto entre sólidos o fluidos.
```

### 5 — El efecto de la superficie
```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["radiacion", "emision"]

variables:
  propiedad_idx: uno_de([0, 1])
  propiedades: [
    ["superficie negra y rugosa", "mayor"],
    ["superficie blanca y pulida", "menor"]
  ]

respuesta: propiedades[propiedad_idx][1]
tipo: completar
respuestas_validas: ["mayor", "menor"]

enunciado: "Una superficie con una propiedad de absorción/emisión de tipo {propiedades[propiedad_idx][0]} presentará una tasa de transferencia por radiación ___ que una superficie reflectante."

explicacion: |
  Los cuerpos negros son los mejores emisores y absorbedores de radiación térmica. Las superficies blancas o brillantes reflejan la mayor parte de la energía.
```