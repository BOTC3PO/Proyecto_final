### 1 — El triunfo de la Unión Cívica Radical
```
metadata:
  materia: "historia"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["argentina", "democracia", "irrigoyen"]

tipo: mc
opciones_explicitas: ["Unión Cívica Radical", "Partido Demócrata", "Partido Conservador", "Partido Socialista"]

enunciado: "En las elecciones presidenciales de 1916, tras la implementación de la Ley Sáenz Peña, el partido ganador fue la ___."

respuesta: "Unión Cívica Radical"

explicacion: |
  La Ley Sáenz Peña (1912) estableció el voto universal, secreto y obligatorio. Esto permitió que la Unión Cívica Radical, liderada por Hipólito Yrigoyen, llegara a la presidencia en 1916, rompiendo el hegemonismo del régimen conservador.
```

### 2 — El cambio de paradigma electoral
```
metadata:
  materia: "historia"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "intermedio"
  tags: ["ley_saenz_pena", "voto_secreto"]

variables:
  escenario: uno_de([["el voto era abierto y fraudulento", "el régimen conservador"], ["el voto era secreto y obligatorio", "la democracia representativa"]])

tipo: mc
opciones_explicitas: ["el régimen conservador", "la democracia representativa"]

enunciado: "Antes de la reforma de 1912, el sistema electoral se caracterizaba por {escenario[0]}. Esto permitía que {escenario[1]} fuera controlada por la oligarquía."

respuesta: {escenario[1]}

explicacion: |
  El sistema anterior permitía el fraude mediante el voto cantado, lo que facilitaba la manipulación de resultados por parte de los sectores dominantes.
```

### 3 — Hitos de la reforma electoral
```
metadata:
  materia: "historia"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "intermedio"
  tags: ["caracteristicas", "voto"]

tipo: ordenar
opciones_explicitas: ["Voto Cantado", "Voto Secreto", "Voto Universal", "Voto Obligatorio"]

enunciado: "Ordene cronológicamente la evolución del sistema de votación en Argentina, desde el modelo previo a la Ley Sáenz Peña hasta el modelo implementado por esta ley."

respuesta: ["Voto Cantado", "Voto Secreto", "Voto Universal", "Voto Obligatorio"]

explicacion: |
  La Ley Sáenz Peña transformó el sistema de un modelo de voto cantado (abierto) a uno basado en la universalidad (masculina), la obligatoriedad y, fundamentalmente, el secreto para evitar el fraude.
```

### 4 — El nuevo mandatario
```
metadata:
  materia: "historia"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["irrigoyen", "presidencia"]

tipo: completar
respuestas_validas: ["Hipólito Yrigoyen"]

enunciado: "El primer presidente elegido bajo el nuevo sistema de sufragio universal, secreto y obligatorio fue ___."

respuesta: "Hipólito Yrigoyen"

explicacion: |
  Hipólito Yrigoyen asumió la presidencia en 1916, representando el triunfo de las fuerzas populares y el fin del control exclusivo de la oligarquía sobre el Poder Ejecutivo.
```

### 5 — Impacto de la Ley Sáenz Peña
```
metadata:
  materia: "historia"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "avanzado"
  tags: ["consecuencias", "politica"]

variables:
  caso: uno_de([[1, "fin del régimen conservador"], [2, "fortalecimiento de la oligarquía"]])

tipo: mc
opciones_explicitas: ["fin del régimen conservador", "fortalecimiento de la oligarquía"]

enunciado: "La implementación de la Ley Sáenz Peña tuvo como consecuencia principal el {caso[0]} en Argentina."

respuesta: {caso[1]}

explicacion: |
  La apertura democrática permitió que sectores que habían estado excluidos del poder político, como la Unión Cívica Radical, pudieran competir y ganar mediante el voto popular.
```