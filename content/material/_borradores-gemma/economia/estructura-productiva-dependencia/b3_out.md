### 1 — El riesgo de la especialización
```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["vulnerabilidad", "primarización"]

variables:
  escenario: uno_de([
    ["soja", "400"],
    ["trigo", "250"],
    ["minería de cobre", "8000"]
  ])

enunciado: "Una economía que basa su ingreso en la exportación de {escenario[0]} enfrenta una alta volatilidad cuando el precio internacional cae a ${escenario[1]} por unidad. Este fenómeno se conoce como vulnerabilidad externa."

respuesta: "vulnerabilidad externa"
tipo: mc
opciones_explicitas: ["vulnerabilidad externa", "estabilidad macroeconómica", "diversificación productiva", "proteccionismo"]

explicacion: |
  La dependencia de un solo producto primario expone a la economía a las fluctuaciones de los precios internacionales (commodities), lo que genera inestabilidad en la balanza de pagos y el tipo de cambio.
```

### 2 — Impacto en la Balanza de Pagos
```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["balanza_de_pagos", "términos_de_intercambio"]

variables:
  caso: uno_de([
    ["caída del precio de la soja", "déficit"],
    ["aumento de demanda de materias primas", "superávit"]
  ])

enunciado: "Si ocurre una {caso[0]}, la cuenta corriente de la balanza de pagos tiende a presentar un ___."

pasos:
  - "Identificar el efecto del precio en el ingreso por exportaciones."
  - "Relacionar el ingreso con el saldo de la cuenta corriente."

respuestas_validas: ["déficit", "superávit"]
respuesta: caso[1]
tipo: completar

explicacion: |
  Una caída en los precios de exportación reduce la entrada de divisas, lo que puede derivar en un déficit en la cuenta corriente si no se compensa con deuda o remesas.
```

### 3 — Los Términos de Intercambio
```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["términos_de_intercambio", "deterioro"]

variables:
  tendencia: uno_de([
    ["deterioro", "caen"],
    ["mejora", "suben"]
  ])

enunciado: "Cuando los precios de los productos manufacturados crecen más rápido que los de los productos primarios, se produce un ___ en los términos de intercambio, lo que significa que los precios de los bienes que exporta la economía {}."

respuestas_validas: ["deterioro", "mejora"]
respuesta: tendencia[0]
tipo: completar

explicacion: |
  El deterioro de los términos de intercambio implica que se necesita exportar cada vez más volumen de materias primas para comprar la misma cantidad de bienes tecnológicos o manufacturados.
```

### 4 — La paradoja de la abundancia
```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["enfermedad_holandesa", "cambio_real"]

variables:
  efecto: uno_de([
    ["apreciación", "sube"],
    ["depreciación", "baja"]
  ])

enunciado: "Un boom de precios en un recurso natural (como el petróleo) genera una entrada masiva de divisas que provoca la ___ del tipo de cambio real. Esto suele afectar la competitividad de la industria local."

respuestas_validas: ["apreciación", "depreciación"]
respuesta: efecto[0]
tipo: completar

explicacion: |
  La 'Enfermedad Holandesa' ocurre cuando la abundancia de un recurso natural aprecia la moneda local, haciendo que el resto de los sectores (industria, servicios) pierdan competitividad frente al exterior.
```

### 5 — Secuencia de crisis externa
```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["ciclo_economico", "shock_externo"]

enunciado: "Ordene la secuencia lógica de un shock externo negativo para una economía primario-exportadora:"

opciones_explicitas: ["Caída de precios internacionales", "Menor ingreso de divisas", "Crisis de balanza de pagos", "Restricción externa"]
respuesta: ["Caída de precios internacionales", "Menor ingreso de divisas", "Crisis de balanza de pagos", "Restricción externa"]
tipo: ordenar

explicacion: |
  La cadena comienza con el shock de precios, que reduce el flujo de dólares, afectando la capacidad de pago del país y limitando la importación de insumos (restricción externa).
```