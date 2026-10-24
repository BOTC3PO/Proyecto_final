### 1 — La sentencia firme
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["procedimiento", "firmeza"]

variables:
  caso_idx: uno_de([0, 1])
  escenario: uno_de([
    ["La sentencia de alimentos fue dictada pero el demandado apeló y la cámara confirmó la resolución.", "firme"],
    ["El juez dictó sentencia, pero el plazo para interponer recursos venció sin que ninguna parte se presentara.", "firme"]
  ])

enunciado: "En el escenario descrito, la sentencia se considera {escenario[1]}."

respuesta: escenario[1]
tipo: vf

explicacion: |
  Una sentencia queda firme cuando ya no es susceptible de ser impugnada, ya sea porque se agotaron las instancias o porque los plazos para recurrir han vencido.
```

### 2 — El mandamiento de ejecución
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["mandamiento", "oficial"]

variables:
  accion_tipo: uno_de([
    ["el embargo de bienes", "embargo"],
    ["el desalojo del inmueble", "lanzamiento"]
  ])

enunciado: "Para hacer cumplir la sentencia que ordena {accion_tipo[0]}, el juez debe librar un mandamiento de {accion_tipo[1]}."

pasos:
  - "Se solicita la ejecución al juez."
  - "El juez libra el mandamiento (orden judicial)."
  - "El oficial de justicia diligencia el mandamiento para cumplir la orden."

respuesta: "embargo"
tipo: completar
respuestas_validas: ["embargo", "lanzamiento"]

explicacion: |
  El mandamiento es el instrumento que ordena la ejecución forzada. Si es sobre bienes, es de embargo; si es sobre la posesión de un bien, es de lanzamiento o desalojo.
```

### 3 — El embargo preventivo vs. ejecutivo
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "avanzado"
  tags: ["embargo", "medidas"]

enunciado: "Si la sentencia ya está firme y el deudor no paga voluntariamente, la medida de embargo que se aplica es de carácter:"

opciones_explicitas: ["preventivo", "ejecutivo", "cautelar"]

respuesta: "ejecutivo"
tipo: mc

explicacion: |
  El embargo preventivo busca asegurar bienes antes de la sentencia; el embargo ejecutivo busca la realización de esos bienes para satisfacer el crédito ya reconocido en una sentencia firme.
```

### 4 — Secuencia del proceso ejecutivo
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["pasos", "procedimiento"]

opciones_explicitas: [
    "Librar mandamiento de ejecución",
    "Traba de embargo sobre bienes",
    "Subasta pública de los bienes",
    "Entrega del dinero al acreedor"
]

respuesta: [
    "Librar mandamiento de ejecución",
    "Traba de embargo sobre bienes",
    "Subasta pública de los bienes",
    "Entrega del dinero al acreedor"
]
tipo: ordenar

explicacion: |
  El proceso de ejecución sigue una lógica de: Orden judicial -> Aseguramiento de bienes -> Venta de bienes -> Pago al acreedor.
```

### 5 — La resistencia del deudor
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "avanzado"
  tags: ["defensas", "excepciones"]

variables:
  defensa: uno_de([
    ["El deudor alega que ya pagó la deuda antes de la sentencia.", "pago"],
    ["El deudor alega que la sentencia es nula por falta de notificación.", "nulidad"]
  ])

enunciado: "Si el deudor presenta una defensa basada en que {defensa[0]}, se está oponiendo mediante una excepción de {defensa[1]}."

respuesta: "pago"
tipo: completar
respuestas_validas: ["pago", "nulidad"]

explicacion: |
  En la etapa de ejecución, el deudor puede oponer excepciones (defensas) limitadas, como el pago total o parcial, la prescripción o la nulidad del título/procedimiento.
```