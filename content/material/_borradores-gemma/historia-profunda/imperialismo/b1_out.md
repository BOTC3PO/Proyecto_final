### 1 — El Reparto de África
```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "intermedio"
  tags: ["africa", "conferencia_de_berlin"]

variables:
  escenario: uno_de([
    ["Conferencia de Berlín", "1884"],
    ["Tratado de Versalles", "1919"],
    ["Conferencia de Yalta", "1945"]
  ])

enunciado: "El proceso de reparto de África entre las potencias europeas se formalizó durante la {escenario[0]} en el año {escenario[1]}."

respuesta: escenario[1]
tipo: completar
respuestas_validas: ["1884", "1885"]

explicacion: |
  La Conferencia de Berlín (1884-1885) estableció las reglas para la ocupación de África, evitando conflictos directos entre potencias europeas pero ignorando las realidades étnicas del continente.
```

### 2 — Potencias Emergentes
```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "basico"
  tags: ["japon", "asia"]

enunciado: "A finales del siglo XIX, ¿qué país asiático logró modernizarse rápidamente y expandir su influencia imperialista tras la guerra ruso-japonesa?"

opciones_explicitas: ["China", "Japón", "Tailandia", "Vietnam"]
respuesta: "Japón"
tipo: mc

explicacion: |
  Japón, tras la Restauración Meiji, se transformó en una potencia industrial y militar, derrotando a Rusia en 1905 y consolidando su control sobre Corea y partes de China.
```

### 3 — Justificaciones Ideológicas
```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "avanzado"
  tags: ["ideologia", "darwinismo_social"]

variables:
  caso: uno_de([
    ["Darwinismo Social", "la supervivencia del más apto"],
    ["Misión Civilizadora", "la carga del hombre blanco"],
    ["Destino Manifiesto", "la expansión divina"]
  ])

enunciado: "El concepto de '{caso[0]}' fue utilizado para justificar la expansión colonial mediante la idea de {caso[1]}."

respuesta: caso[0]
tipo: completar
respuestas_validas: ["Darwinismo Social"]

explicacion: |
  El Darwinismo Social aplicó erróneamente las leyes de la selección natural de la biología a las sociedades humanas para legitimar la superioridad de las potencias occidentales sobre las colonias.
```

### 4 — El Imperialismo en Oceanía
```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "basico"
  tags: ["oceania", "australia"]

enunciado: "Durante el siglo XIX, la expansión de Gran Bretaña en Oceanía se caracterizó por la ocupación de territorios que antes eran habitados por pueblos indígenas, como los..."

opciones_explicitas: ["Maoríes", "Aborígenes", "Polinesios", "Melanesios"]
respuesta: "Aborígenes"
tipo: mc

explicacion: |
  La colonización británica en Australia se basó en la doctrina de 'Terra Nullius' (tierra de nadie), ignorando la soberanía de los pueblos aborígenes.
```

### 5 — Secuencia de Expansión
```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "intermedio"
  tags: ["cronologia", "potencias"]

enunciado: "Ordena cronológicamente estos procesos de expansión imperialista, desde el más temprano al más tardío:"

opciones_explicitas: ["Expansión Británica en África", "Expansión Japonesa en Asia", "Expansión de EE.UU. en el Pacífico"]
respuesta: ["Expansión Británica en África", "Expansión Japonesa en Asia", "Expansión de EE.UU. en el Pacífico"]
tipo: ordenar

explicacion: |
  El auge del imperialismo europeo (África) precedió a la consolidación del imperialismo japonés en Asia, mientras que la expansión de EE.UU. en el Pacífico se intensificó tras la guerra hispano-estadounidense (1898).
```