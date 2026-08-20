### 1 — Oportunidad vs. Idea
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["emprendimiento", "conceptos_clave"]

variables:
  es_oportunidad: false

respuesta: es_oportunidad
tipo: vf

enunciado: "Una idea de negocio se convierte en una oportunidad real cuando existe un segmento de mercado con una necesidad insatisfecha y capacidad de pago. ¿Es una idea de negocio siempre una oportunidad de negocio? ___"

explicacion: |
  Una idea es un concepto abstracto, mientras que una oportunidad es una idea validada que tiene viabilidad comercial y un mercado dispuesto a pagar por ella.
```

### 2 — El nicho de mercado
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["segmentacion", "nicho"]

variables:
  escenario: uno_de([
    ["vender calzado para corredores de montaña", "nicho"],
    ["vender calzado genérico para todo público", "mercado_masivo"],
    ["vender calzado de lujo para eventos", "nicho"]
  ])

respuesta: escenario[1]
tipo: mc

opciones_explicitas: ["nicho", "mercado_masivo"]

enunciado: "Si una empresa decide enfocarse exclusivamente en satisfacer las necesidades de un grupo de consumidores con características muy específicas y requerimientos particulares, como es el caso de {escenario[0]}, está buscando un ___."

explicacion: |
  El nicho de mercado es un segmento especializado dentro de un mercado más amplio, caracterizado por necesidades muy particulares que no son cubiertas por los productos masivos.
```

### 3 — Diferencia entre necesidad y deseo
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["consumidor", "marketing"]

variables:
  ejemplo: uno_de([
    ["Tener sed", "necesidad"],
    ["Beber una gaseosa de marca específica", "deseo"],
    ["Tener hambre", "necesidad"],
    ["Comer una hamburguesa de una cadena famosa", "deseo"]
  ])

respuesta: ejemplo[1]
tipo: completar

respuestas_validas: ["necesidad", "deseo"]

enunciado: "En marketing, es crucial distinguir entre una necesidad (un estado de carencia percibida) y un ___ (la forma específica en que se busca satisfacer esa carencia)."

explicacion: |
  La necesidad es la base (ej. transporte), mientras que el deseo es la forma cultural o personal de satisfacerla (ej. un coche de lujo).
```

### 4 — Pasos para la validación
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "avanzado"
  tags: ["metodologia", "validacion"]

variables:
  pasos_ordenados: [
    "Observar el mercado y detectar problemas",
    "Entrevistar a clientes potenciales",
    "Diseñar un Producto Mínimo Viable (MVP)",
    "Analizar la viabilidad financiera"
  ]

respuesta: pasos_ordenados
tipo: ordenar

opciones_explicitas: [
  "Observar el mercado y detectar problemas",
  "Entrevistar a clientes potenciales",
  "Diseñar un Producto Mínimo Viable (MVP)",
  "Analizar la viabilidad financiera"
]

enunciado: "Ordena los pasos lógicos para validar una oportunidad de negocio desde la detección hasta la viabilidad:"

explicacion: |
  Primero se identifica el problema (observación), luego se valida con usuarios (entrevistas), se prueba la solución (MVP) y finalmente se asegura la rentabilidad (finanzas).
```

### 5 — El factor de la ventaja competitiva
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["competencia", "valor"]

variables:
  caso: uno_de([
    ["ofrecer un producto idéntico al de la competencia pero más caro", "no_hay_ventaja"],
    ["ofrecer un producto con una característica única que resuelve un problema mejor", "hay_ventaja"],
    ["ofrecer un producto con el mismo precio y calidad que la competencia", "no_hay_ventaja"]
  ])

respuesta: caso[1]
tipo: mc

opciones_explicitas: ["hay_ventaja", "no_hay_ventaja"]

enunciado: "Para que una oportunidad de negocio sea sostenible, la empresa debe presentar una propuesta de valor que se distinga de la competencia. Si una empresa logra {caso[0]}, podemos decir que ___."

explicacion: |
  La ventaja competitiva es lo que hace que un cliente elija una opción sobre otra; sin una diferenciación clara, la oportunidad es débil.
```