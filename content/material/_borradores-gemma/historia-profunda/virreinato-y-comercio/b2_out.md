### 1 — El Monopolio Comercial
```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["monopolio", "españa", "comercio"]

respuesta: "monopolio"
tipo: completar
respuestas_validas: ["monopolio"]

enunciado: "El sistema mediante el cual las colonias americanas solo podían comerciar con la metrópoli española se denominaba sistema de ___."

explicacion: |
  El monopolio comercial obligaba a las colonias a comprar y vender exclusivamente a España, limitando el crecimiento económico local.
```

### 2 — Puertos Autorizados
```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["puertos", "comercio", "españa"]

variables:
  idx: uno_de([0, 1])
  escenario: [[0, "Sevilla", "Cádiz"], [1, "Sevilla", "Barcelona"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Sevilla", "Cádiz", "Barcelona", "Valencia"]

enunciado: "Durante gran parte del periodo virreinal, el comercio con las Indias se centralizaba en el puerto de {escenario[idx][0]}, pero la autoridad principal de la Casa de Contratación residía en {escenario[idx][1]}."

explicacion: |
  Aunque Sevilla fue el puerto principal inicialmente, la Casa de Contratación se estableció en Sevilla, pero el control administrativo y el flujo comercial se concentraba en estas ciudades clave.
```

### 3 — Consecuencias del Sistema
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

### 4 — El Caso de Buenos Aires
```
metadata:
  materia: "historia_profucha"
  tema: "virreinato_y_comercio"
  nivel: "avanzado"
  tags: ["buenos_aires", "contrabando", "descontento"]

variables:
  idx: uno_de([0, 1])
  datos: [[0, "contrabando", "descontento"], [1, "comercio legal", "prosperidad"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["contrabando", "descontento", "prosperidad", "estabilidad"]

enunciado: "En el Virreinato del Río de la Plata, la imposición del monopolio español sobre la región de Buenos Aires generó un aumento del {datos[idx][0]} y un profundo {datos[idx][1]} entre los comerciantes locales."

explicacion: |
  Buenos Aires, al ser una zona de paso para el comercio ilegal, sufrió las restricciones del monopolio, lo que alimentó el malestar que más tarde impulsaría los movimientos de independencia.
```

### 5 — Orden del Comercio Virreinal
```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["flujo", "comercio", "ruta"]

respuesta: ["España", "Puerto autorizado en América", "Mercado local"]
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