# Historia Profunda — Virreinato y comercio (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Origen del Virreinato

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["reformas_borbonicas", "geopolitica"]

respuesta: "1776"
tipo: completar
respuestas_validas:
  - "1776"

enunciado: "La creación del Virreinato del Río de la Plata ocurrió en el año ___."

explicacion: |
  Mediante las Reformas Borbónicas, la Corona española decidió crear este nuevo virreinato en 1776 para mejorar la administración y defensa del territorio.
```

### 2 — Motivaciones de la creación

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["comercio", "defensa"]

opciones_explicitas: ["Controlar el comercio y mejorar la defensa", "Fomentar la independencia de las colonias", "Establecer una nueva religión", "Unificar la moneda con el Perú"]

respuesta: "Controlar el comercio y mejorar la defensa"
tipo: mc

enunciado: "¿Cuál fue una de las razones principales para la creación del Virreinato del Río de la Plata?"

explicacion: |
  La expansión portuguesa y el contrabando en el Atlántico obligaron a España a fortalecer la defensa y centralizar el control comercial en Buenos Aires.
```

### 3 — Capital del Virreinato

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["geografia_colonial"]

respuesta: "Buenos Aires"
tipo: mc
opciones_explicitas: ["Lima", "Potosí", "Buenos Aires", "Montevideo"]

enunciado: "Con la creación del nuevo virreinato, la ciudad de ___ fue designada como la capital administrativa."

explicacion: |
  Buenos Aires desplazó la importancia política que antes tenía el eje andino, convirtiéndose en el centro administrativo y comercial del nuevo territorio.
```

### 4 — Reorganización Territorial

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "avanzado"
  tags: ["geopolitica", "administracion"]

respuesta: "Perú"

tipo: completar
respuestas_validas:
  - "Perú"

enunciado: "Antes de 1776, el territorio que hoy comprende gran parte del Cono Sur pertenecía al Virreinato del ___."

pasos:
  - "Identificar la dependencia administrativa previa a la reforma borbónica."

explicacion: |
  Antes de la división, la mayor parte de la administración colonial estaba centralizada en el Virreinato del Perú, con Lima como sede principal.
```

### 5 — Impacto Económico

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["comercio", "contrabando"]

opciones_explicitas: ["Aumento del contrabando", "Centralización del comercio en Buenos Aires", "Fin de la ruta de la plata", "Aislamiento de la región"]

respuesta: "Centralización del comercio en Buenos Aires"
tipo: mc

enunciado: "La creación del virreinato permitió la ___."

explicacion: |
  Al tener una administración propia, el comercio legal se canalizó a través de Buenos Aires, restando importancia a las rutas que pasaban por el Alto Perú.
```

### 6 — El Monopolio Comercial

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["monopolio", "españa", "comercio"]

respuesta: "monopolio"
tipo: completar
respuestas_validas:
  - "monopolio"

enunciado: "El sistema mediante el cual las colonias americanas solo podían comerciar con la metrópoli española se denominaba sistema de ___."

explicacion: |
  El monopolio comercial obligaba a las colonias a comprar y vender exclusivamente a España, limitando el crecimiento económico local.
```

### 7 — Puertos Autorizados

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["puertos", "comercio", "españa"]

respuesta: "Cádiz"
tipo: mc
opciones_explicitas: ["Sevilla", "Cádiz", "Barcelona", "Valencia"]

enunciado: "La Casa de Contratación, que monopolizaba el comercio con las Indias, se estableció originalmente en Sevilla en 1503, pero en 1717 su sede y el puerto único autorizado se trasladaron a ___."

explicacion: |
  El traslado a Cádiz se debió principalmente al progresivo azolvamiento (acumulación de sedimentos) del río Guadalquivir, que dificultaba la navegación de barcos grandes hasta Sevilla.
```

### 8 — Consecuencias del Sistema

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["contrabando", "descontento", "economía"]

respuesta: "contrabando"
tipo: mc
opciones_explicitas: ["contrabando", "libre comercio", "proteccionismo", "mercantilismo"]

enunciado: "Debido a las altas restricciones y los altos costos del monopolio, surgió una práctica ilegal muy común en los puertos americanos conocida como ___."

explicacion: |
  El contrabando permitió la entrada de productos de otras potencias (como Inglaterra o Portugal) de manera ilegal, evadiendo los impuestos españoles.
```

### 9 — El Caso de Buenos Aires

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "avanzado"
  tags: ["buenos_aires", "contrabando", "descontento"]

respuesta: "descontento"
tipo: mc
opciones_explicitas: ["descontento", "prosperidad", "estabilidad", "indiferencia"]

enunciado: "En el Virreinato del Río de la Plata, la imposición del monopolio español sobre la región de Buenos Aires favoreció el contrabando y generó, entre los comerciantes locales, un profundo:"

explicacion: |
  Buenos Aires, al ser una zona de paso para el comercio ilegal, sufrió las restricciones del monopolio, lo que alimentó el malestar que más tarde impulsaría los movimientos de independencia.
```

### 10 — Orden del Comercio Virreinal

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["flujo", "comercio", "ruta"]

respuesta_orden: ["España", "Puerto autorizado en América", "Mercado local"]
tipo: ordenar
opciones_explicitas: ["España", "Puerto autorizado en América", "Mercado local"]

enunciado: "Ordena el flujo legal de las mercancías dentro del sistema de monopolio español, desde su origen hasta el consumidor final en la colonia:"

pasos:
  - "La metrópoli envía el producto."
  - "El producto llega al puerto legal establecido."
  - "El producto se distribuye en la región."

explicacion: |
  El sistema estaba diseñado para que el flujo fuera estrictamente controlado: Metrópoli -> Puerto autorizado -> Consumidor colonial.
```

### 11 — El Reglamento de 1778

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["comercio", "reformas_borbonicas", "virreinato"]

tipo: mc
opciones_explicitas: ["Eliminó por completo el monopolio español", "Amplió el número de puertos autorizados", "Prohibió el comercio con Inglaterra", "Estableció el sistema de flotas y galeones"]
respuesta: "Amplió el número de puertos autorizados"
enunciado: "El Reglamento de Libre Comercio de 1778 tuvo como objetivo principal..."
explicacion: |
  El reglamento no eliminó el monopolio, sino que flexibilizó el sistema permitiendo que más puertos (como Buenos Aires) participaran en el comercio transatlántico, aunque manteniendo el control de la metrópoli.
```

### 12 — Impacto en Buenos Aires

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["buenos_aires", "puertos", "comercio"]

variables:
  escenario: uno_de([["puerto de Cádiz", "puerto de Buenos Aires"], ["comercio restringido", "comercio ampliado"]])

tipo: completar
respuestas_validas:
  - "puerto de Buenos Aires"

enunciado: "Gracias a las reformas borbonicas, el ___ obtuvo un rol protagónico como salida de productos hacia el Atlántico."

explicacion: |
  La apertura de nuevos puertos allowed que Buenos Aires creciera económicamente al dejar de depender exclusivamente del sistema de flotas hacia un solo puerto en España.
```

### 13 — Dinámica Comercial

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["monopolio", "reformas"]

tipo: vf

enunciado: "¿El Reglamento de Libre Comercio de 1778 significó la desaparición total del monopolio comercial español en América?"

respuesta: falso

explicacion: |
  Falso. El sistema de monopolio persistió, solo se expandió la red de puertos y rutas permitidas; el control de la Corona sobre el comercio seguía siendo la norma.
```

### 14 — Secuencia de Reformas

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "avanzado"
  tags: ["procesos", "reformas_borbonicas"]

tipo: ordenar
opciones_explicitas: ["Monopolio de flotas y galeones", "Reglamento de Libre Comercio", "Apertura de puertos de Buenos Aires"]

enunciado: "Ordene cronológicamente la evolución del sistema comercial en el Virreinato del Río de la Plata:"

explicacion: |
  Primero existía el monopolio estricto de flotas; luego el Reglamento de 1778 permitió el libre comercio entre puertos españoles; y finalmente esto consolidó a Buenos Aires como puerto principal.
respuesta_orden: ["Monopolio de flotas y galeones", "Reglamento de Libre Comercio", "Apertura de puertos de Buenos Aires"]
```

### 15 — El factor económico

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["economía", "impuestos"]

variables:
  valor_impuesto: uno_de(["aumento", "disminución"])

tipo: completar
tolerancia_abs: 0

enunciado: "La implementación de nuevos puertos y la mayor actividad comercial trajeron un {valor_impuesto} en la recaudación de aduanas para la Corona."

respuesta: "aumento"

explicacion: |
  Al haber más barcos y más puertos operando legalmente, el volumen de mercancías aumentó, lo que derivó en un aumento de la recaudación de impuestos (alcabala y derechos de puerto).
```

### 16 — El Monopolio Comercial

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["monopolio", "espana", "comercio"]

respuesta: "monopolio"
tipo: completar
respuestas_validas:
  - "monopolio"

enunciado: "El sistema impuesto por la corona española que obligaba a las colonias a comerciar exclusivamente con la metrópoli se denominaba ________."

explicacion: |
  El monopolio comercial impedía que Buenos Aires comerciara con otras potencias (como Gran Bretaña), limitando el crecimiento de la élite criolla.
```

### 17 — Tensiones en el Puerto

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["puerto", "aduana", "impuestos"]

variables:
  escenario: uno_de([["Monopolio Español", "Libre Comercio"], ["Restricción", "Apertura"]])
  respuesta_correcta: uno_de(["Monopolio Español", "Libre Comercio"])

respuesta: "Monopolio Español"
tipo: mc
opciones_explicitas: ["Monopolio Español", "Libre Comercio"]

enunciado: "Si un comerciante de Buenos Aires desea vender sus productos directamente a Inglaterra sin pasar por España, se enfrenta a la prohibición del sistema de Monopolio Español."

explicacion: |
  La imposición del monopolio generaba un enorme descontento en los comerciantes locales, quienes veían perder oportunidades de lucro con el libre comercio.
```

### 18 — Causas de la Revolución

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["causas", "revolucion", "economia"]

respuesta: "Libre Comercio"
tipo: mc
opciones_explicitas: ["Libre Comercio", "Proteccionismo Español", "Aumento de la Minería", "Unión con Portugal"]

enunciado: "La principal demanda económica de la élite criolla de Buenos Aires que alimentó el descontento hacia el Virreinato fue la instauración del:"

explicacion: |
  La apertura de los puertos al libre comercio era la aspiración de los sectores comerciales que buscaban eliminar los altos costos y la exclusividad española.
```

### 19 — El Proceso de Descontento

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "avanzado"
  tags: ["secuencia", "tensiones", "revolucion"]

respuesta_orden: ["Monopolio", "Contrabando", "Libre Comercio", "Revolución"]
tipo: ordenar
opciones_explicitas: ["Monopolio", "Contrabando", "Libre Comercio", "Revolución"]

enunciado: "Ordena cronológicamente los factores y consecuencias que explican la crisis del sistema colonial en el Río de la Plata:"

explicacion: |
  El monopolio fomentó el contrabando como vía de escape; la presión por el libre comercio aumentó con las invasiones inglesas y la crisis de la corona, culminando en la Revolución.
```

### 20 — Impacto de las Invasiones Inglesas

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["invasiones_inglesas", "comercio"]

variables:
  datos: [["Inglesas", "Libre Comercio"], ["Españolas", "Monopolio"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Libre Comercio", "Monopolio"]

enunciado: "Las invasiones inglesas demostraron la vulnerabilidad de España y abrieron la posibilidad de un sistema de ________ en el puerto de Buenos Aires."

explicacion: |
  Al ver que Gran Bretaña podía desembarcar en el Río de la Plata, los criollos comprendieron que el monopolio español ya no era sostenible ni seguro.
```

### 21 — El monopolio comercial

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["economía", "monopolio", "rebelión"]

variables:
  datos: [["El sistema de flotas y galeones permitía que solo ciertos puertos españoles comerciaran con América.", "monopolio"], ["El sistema de flotas y galeones prohibía el comercio con potencias extranjeras como Inglaterra.", "exclusivismo"], ["El sistema de flotas y galeones imponía altos aranceles a los productos locales.", "aranceles"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["monopolio", "exclusivismo", "aranceles"]

enunciado: "Una de las principales causas del descontento en el Río de la Plata fue el sistema de {datos[idx][0]}."

explicacion: |
  El control estricto de la metrópoli sobre los puertos y productos generó un gran malestar en las élites criollas que buscaban el libre comercio.
```

### 22 — La carga fiscal

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["impuestos", "fisco", "revolución"]

variables:
  datos: [["La Alcabala", "Alcabala"], ["La Alcabala", "Aduana"], ["La Alcabala", "Avería"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "Alcabala"
  - "Aduana"
  - "Avería"

enunciado: "El aumento de la presión fiscal, especialmente sobre el impuesto de la ___, fue un detonante del descontento económico."

explicacion: |
  La Alcabala era un impuesto a las ventas que afectaba directamente el flujo comercial de las provincias del sur.
```

### 23 — El contrabando

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["contrabando", "comercio_ilegal"]

variables:
  datos: [["La prohibición de comerciar con Inglaterra", "prohibición"], ["La falta de productos manufacturados", "escasez"], ["La alta competencia de productos españoles", "competencia"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["prohibición", "escasez", "competencia"]

enunciado: "El descontento creció debido a la {datos[idx][0]} de productos extranjeros, lo que fomentó el contrabando."

explicacion: |
  Al no poder importar libremente de otras naciones, los comerciantes locales recurrían al comercio ilegal para abastecerse.
```

### 24 — Orden cronológico de tensiones

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "avanzado"
  tags: ["orden", "procesos"]

respuesta_orden: ["Reformas Borbónicas", "Aumento de la presión fiscal", "Expulsión de los Jesuitas", "Insurrecciones locales"]
tipo: ordenar
opciones_explicitas: ["Reformas Borbónicas", "Aumento de la presión fiscal", "Expulsión de los Jesuitas", "Insurrecciones locales"]

enunciado: "Ordene cronológicamente los factores que intensificaron el descontento económico en el Virreinato:"

explicacion: |
  Las reformas borbónicas buscaron mayor control y recaudación, lo que aumentó los impuestos y tensionó la estructura social y económica.
```

### 25 — La importancia de la Aduana

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["aduana", "puerto", "recaudación"]

variables:
  datos: [["Buenos Aires", "Buenos Aires"], ["Montevideo", "Montevideo"], ["Asunción", "Asunción"]]
  idx: uno_de([0, 1, 2])

respuestas_validas:
  - datos[idx][0]
respuesta: datos[idx][0]
tipo: completar
tolerancia_abs: 0

enunciado: "El control de la aduana de {datos[idx][0]} fue un punto de conflicto clave por la recaudación de derechos de importación."

explicacion: |
  La disputa por los ingresos aduaneros entre Buenos Aires y otras regiones era un motor constante de tensión económica.
```
