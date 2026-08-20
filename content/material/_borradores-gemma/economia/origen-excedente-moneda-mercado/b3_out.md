### 1 — El valor de las conchas
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["moneda_mercado", "dinero_mercado", "historia_economica"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: uno_de([
    ["conchas_cauri", "conchas"],
    ["sal", "sal"]
  ])

enunciado: "En diversas culturas antiguas, antes de la existencia de monedas acuñadas, se utilizaban objetos con valor intrínseco como medio de cambio. Un ejemplo común es el uso de {escenario[escenario_idx][0]}."

opciones_explicitas: ["conchas", "sal", "piedras", "madera"]
respuesta: escenario[escenario_idx][1]
tipo: mc

explicacion: |
  Antes de la moneda metálica, se utilizaban bienes de consumo o decorativos que tenían valor por su escasez o utilidad, como las conchas cauri o la sal.
```

### 2 — Propiedades del dinero mercancía
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["dinero_mercado", "propiedades_dinero"]

respuestas_validas: ["durabilidad", "divisibilidad", "escasez"]
respuesta: "durabilidad"
tipo: completar

enunciado: "Para que un objeto funcione eficazmente como dinero mercancía, debe poseer ciertas propiedades. La capacidad de resistir el paso del tiempo y el uso sin degradarse se denomina ___."

explicacion: |
  La durabilidad es esencial para que el valor se preserve a través de las transacciones y el tiempo.
```

### 3 — Evolución del intercambio
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["trueque", "moneda_mercado"]

variables:
  orden_pasos: [
    ["Trueque directo", "Uso de dinero mercancía", "Moneda acuñada"],
    ["Trueque directo", "Uso de metales preciosos", "Moneda acuñada"],
    ["Trueque directo", "Uso de sal", "Moneda acuñada"]
  ]

enunciado: "Ordene cronológicamente la evolución de los medios de intercambio en una economía en desarrollo."

opciones_explicitas: ["Trueque directo", "Uso de dinero mercancía", "Moneda acuñada"]
respuesta: ["Trueque directo", "Uso de dinero mercancía", "Moneda acuñada"]
tipo: ordenar

explicacion: |
  La economía evoluciona desde el intercambio directo de bienes (trueque), pasando por objetos con valor intrínseco (dinero mercancía), hasta la estandarización con monedas metálicas.
```

### 4 — Metales preciosos y valor
```
metadata:
  materia: "economia"
  tema: "origen_excedente_monoda_mercado"
  nivel: "intermedio"
  tags: ["metales_preciosos", "valor_intrínseco"]

variables:
  metal_idx: uno_de([0, 1])
  metal_datos: [
    ["oro", "oro"],
    ["plata", "plata"]
  ]

enunciado: "El uso de {metal_datos[metal_idx][0]} como medio de cambio se debió a su valor intrínseco y su facilidad de transporte."

respuesta: metal_datos[metal_idx][1]
tipo: input
tolerancia_abs: 0

explicacion: |
  Los metales preciosos fueron fundamentales para la transición hacia la moneda debido a su escasez y homogeneidad.
```

### 5 — El problema del trueque
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "avanzado"
  tags: ["trueque", "costos_transaccion"]

variables:
  problema_idx: uno_de([0, 1])
  problema_datos: [
    ["doble coincidencia de deseos", "falta de divisibilidad"],
    ["doble coincidencia de deseos", "falta de durabilidad"]
  ]

enunciado: "Uno de los principales obstáculos del trueque que impulsó la creación del dinero fue la ___."

opciones_explicitas: ["doble coincidencia de deseos", "falta de divisibilidad", "exceso de oferta"]
respuesta: problema_datos[problema_idx][0]
tipo: mc

explicacion: |
  El trueque requiere que dos personas quieran exactamente lo que el otro ofrece en el mismo momento, lo cual es ineficiente y da origen a la necesidad de un medio de cambio.
```