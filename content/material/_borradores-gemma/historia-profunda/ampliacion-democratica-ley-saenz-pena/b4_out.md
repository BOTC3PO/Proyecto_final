### 1 — El alcance del sufragio
```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["sufragio", "argentina", "ley_saenz_pena"]

respuesta: "varones"
tipo: mc
opciones_explicitas: ["mujeres", "varones", "todos los ciudadanos", "extranjeros"]

enunciado: "Aunque la Ley Sáenz Peña de 1912 introdujo el voto universal, secreto y obligatorio, en la práctica este derecho estaba limitado exclusivamente a los ___."

explicacion: |
  La Ley Sáenz Peña garantizó el voto para los varones mayores de 18 años, pero excluyó sistemáticamente a las mujeres del proceso electoral.
```

### 2 — El derecho al voto femenino
```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "intermedio"
  tags: ["sufragio_femenino", "evita", "derechos"]

variables:
  escenario: uno_de([["1947", "Ley de Sufragio Femenino"], ["1912", "Ley Sáenz Peña"]])
  año: escenario[0]
  evento: escenario[1]

respuesta: escenario[0]
tipo: completar
respuestas_validas: ["1947", "1912"]

enunciado: "Si bien la reforma de 1912 fue un paso hacia la democracia, las mujeres en Argentina no pudieron ejercer el voto hasta el año ___."

explicacion: |
  Fue mediante la sanción de la Ley 13.512, impulsada por el voto femenino, que las mujeres argentinas obtuvieron el derecho político pleno en 1947.
```

### 3 — Evolución del sufragio en Argentina
```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "intermedio"
  tags: ["cronologia", "historia_argentina"]

respuesta: ["Ley Sáenz Peña", "Ley de Sufragio Femenino", "Ley de Ciudadanía Argentina"]
tipo: ordenar
opciones_explicitas: ["Ley Sáenz Peña", "Ley de Sufragio Femenino", "Ley de Ciudadanía Argentina"]

enunciado: "Ordena cronológicamente los hitos que ampliaron la base electoral en Argentina:"

explicacion: |
  La secuencia correcta marca la transición desde un voto masculino (1912), pasando por la inclusión de la mujer (1947), hasta la plena ciudadanía para inmigrantes (1972).
```

### 4 — Características de la Ley Sáenz Peña
```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["caracteristicas", "voto"]

respuesta: "secreto"
tipo: mc
opciones_explicitas: ["público", "secreto", "opcional", "electivo"]

enunciado: "Uno de los pilares de la Ley Sáenz Peña para evitar el fraude mediante el control de la voluntad del votante fue el voto ___."

explicacion: |
  El voto secreto fue fundamental para terminar con el sistema de "voto cantado" que permitía la coacción de los patrones sobre los trabajadores.
```

### 5 — Análisis de la exclusión
```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "avanzado"
  tags: ["democracia", "exclusiones"]

variables:
  caso: uno_de([[true, "se incluyeron"], [false, "se excluyeron"]])
  resultado: caso[0]

respuesta: caso[1]

tipo: mc
opciones_explicitas: ["se incluyeron", "se excluyeron"]

enunciado: "Considerando la composición de la población argentina en 1912, ¿qué ocurrió con el género femenino en la implementación de la Ley Sáenz Peña? Las mujeres ___ del derecho al voto."

explicacion: |
  A pesar de la modernización del sistema, la exclusión de la mitad de la población (las mujeres) demuestra que la "universalidad" de la época era solo para el género masculino.
```