### 1 — El sistema de votación previo a 1912
```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["electoral", "fraude", "argentina"]

respuesta: "voto cantado"
tipo: mc
opciones_explicitas: ["voto secreto", "voto cantado", "voto digital", "voto por sorteo"]

enunciado: "Antes de la sanción de la Ley Sáenz Peña en 1912, el sistema electoral en Argentina se caracterizaba por ser un ___ , lo que facilitaba la presión de los caudillos locales sobre los votantes."

explicacion: |
  El sistema de "voto cantado" obligaba al ciudadano a declarar su elección en voz alta frente a la autoridad de mesa, lo que permitía identificar el voto y aplicar represalias o incentivos, facilitando el fraude sistemático.
```

### 2 — El fraude electoral y el control político
```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "intermedio"
  tags: ["fraude", "oligarquia", "control"]

variables:
  escenario: uno_de([["voto cantado", "manipulación"], ["voto secreto", "transparencia"]])

respuesta: escenario[1]
tipo: completar
respuestas_validas: ["manipulación", "transparencia"]

enunciado: "En el régimen de la Generación del '80, la combinación del voto no secreto y la falta de padrones confiables permitía la ___ de los resultados electorales por parte del oficialismo de turno."

explicacion: |
  La falta de secreto en el sufragio permitía que el poder político controlara el comportamiento del elector, asegurando la continuidad de la hegemonía de la oligarquía mediante la manipulación de los resultados.
```

### 3 — Objetivos de la Ley Sáenz Peña
```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["ley_saenz_pena", "reforma", "democracia"]

respuesta: "universal, secreto y obligatorio"
tipo: completar
respuestas_validas: ["universal, secreto y obligatorio", "opcional, secreto y universal"]

enunciado: "La reforma introducida por la Ley Sáenz Peña estableció que el sufragio debía ser ___."

explicacion: |
  La Ley 8.830 transformó el sistema electoral argentino al establecer tres pilares: el voto debe ser universal (para varones), secreto (para evitar coacciones) y obligatorio (para asegurar la participación masiva).
```

### 4 — Secuencia de la reforma electoral
```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "intermedio"
  tags: ["proceso", "ley", "reforma"]

respuesta: ["Crisis del régimen oligárquico", "Presión de la Unión Cívica Radical", "Sanción de la Ley Sáenz Peña"]
tipo: ordenar
opciones_explicitas: ["Crisis del régimen oligárquico", "Presión de la Unión Cívica Radical", "Sanción de la Ley Sáenz Peña"]

enunciado: "Ordene cronológicamente los eventos que llevaron a la democratización del sistema electoral en Argentina:"

explicacion: |
  La crisis del modelo oligárquico y la presión constante de la oposición (especialmente la UCR) forzaron al gobierno de Roque Sáenz Peña a sancionar la ley para legitimar el sistema y evitar una revolución.
```

### 5 — Consecuencia de la reforma
```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "avanzado"
  tags: ["consecuencia", "radicalismo", "voto"]

variables:
  caso: uno_de([["1916", "triunfo de Hipólito Yrigoyen"], ["1916", "triunfo del conservadurismo"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["triunfo de Hipólito Yrigoyen", "triunfo del conservadurismo"]

enunciado: "Como consecuencia directa de la implementación de la nueva ley, en las elecciones de {caso[0]} se produjo el ___."

explicacion: |
  La implementación del voto secreto permitió que la Unión Cívica Radical, liderada por Hipólito Yrigoyen, lograra su primera victoria presidencial, rompiendo el monopolio de los partidos conservadores.
```