### 1 — El monopolio comercial
```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["economía", "monopolio", "rebelión"]

variables:
  escenario: uno_de([["El sistema de flotas y galeones permitía que solo ciertos puertos españoles comerciaran con América.", "monopolio"], ["El sistema de flotas y galeones prohibía el comercio con potencias extranjeras como Inglaterra.", "exclusivismo"], ["El sistema de flotas y galeones imponía altos aranceles a los productos locales.", "aranceles"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["monopolio", "exclusivismo", "aranceles"]

enunciado: "Una de las principales causas del descontento en el Río de la Plata fue el sistema de {escenario[idx][0]}."

explicacion: |
  El control estricto de la metrópoli sobre los puertos y productos generó un gran malestar en las élites criollas que buscaban el libre comercio.
```

### 2 — La carga fiscal
```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["impuestos", "fisco", "revolución"]

variables:
  impuesto: uno_de([["La Alcabala", "Alcabala"], ["La Alcabala", "Aduana"], ["La Alcabala", "Avería"]])
  idx: uno_de([0, 1, 2])

respuesta: impuesto[idx][1]
tipo: completar
respuestas_validas: ["Alcabala", "Aduana", "Avería"]

enunciado: "El aumento de la presión fiscal, especialmente sobre el impuesto de la ___, fue un detonante del descontento económico."

explicacion: |
  La Alcabala era un impuesto a las ventas que afectaba directamente el flujo comercial de las provincias del sur.
```

### 3 — El contrabando
```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["contrabando", "comercio_ilegal"]

variables:
  causa: uno_de([["La prohibición de comerciar con Inglaterra", "prohibición"], ["La falta de productos manufacturados", "escasez"], ["La alta competencia de productos españoles", "competencia"]])
  idx: uno_de([0, 1, 2])

respuesta: causa[idx][1]
tipo: mc
opciones_explicitas: ["prohibición", "escasez", "competencia"]

enunciado: "El descontento creció debido a la {causa[idx][0]} de productos extranjeros, lo que fomentó el contrabando."

explicacion: |
  Al no poder importar libremente de otras naciones, los comerciantes locales recurrían al comercio ilegal para abastecerse.
```

### 4 — Orden cronológico de tensiones
```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "avanzado"
  tags: ["orden", "procesos"]

respuesta: ["Reformas Borbónicas", "Aumento de la presión fiscal", "Expulsión de los Jesuitas", "Insurrecciones locales"]
tipo: ordenar
opciones_explicitas: ["Reformas Borbónicas", "Aumento de la presión fiscal", "Expulsión de los Jesuitas", "Insurrecciones locales"]

enunciado: "Ordene cronológicamente los factores que intensificaron el descontento económico en el Virreinato:"

explicacion: |
  Las reformas borbónicas buscaron mayor control y recaudación, lo que aumentó los impuestos y tensionó la estructura social y económica.
```

### 5 — La importancia de la Aduana
```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["aduana", "puerto", "recaudación"]

variables:
  puerto: uno_de([["Buenos Aires", "Buenos Aires"], ["Montevideo", "Montevideo"], ["Asunción", "Asunción"]])
  idx: uno_de([0, 1, 2])

respuesta: puerto[idx][0]
tipo: input
tolerancia_abs: 0

enunciado: "El control de la aduana de {puerto[idx][0]} fue un punto de conflicto clave por la recaudación de derechos de importación."

explicacion: |
  La disputa por los ingresos aduaneros entre Buenos Aires y otras regiones era un motor constante de tensión económica.
```