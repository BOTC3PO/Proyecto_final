### 1 — Característica de la Ley Sáenz Peña
```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["argentina", "democracia", "ley_saenz_pena"]

opciones_explicitas:
  - "Voto secreto, universal (masculino) y obligatorio"
  - "Voto cantado, restringido y facultativo"
  - "Voto secreto, restringido y obligatorio"
  - "Voto cantado, universal y facultativo"

respuesta: "Voto secreto, universal (masculino) y obligatorio"
tipo: mc

enunciado: "La Ley Sáenz Peña, sancionada en 1912, introdujo un cambio fundamental en el sistema electoral argentino al establecer el voto ___."

explicacion: |
  La Ley 8.831, conocida como Ley Sáenz Peña, transformó la vida política argentina al garantizar el voto secreto, universal (para varones) y obligatorio, terminando con el fraude electoral de la época.
```

### 2 — El fin del fraude
```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "intermedio"
  tags: ["fraude", "sistema_electoral", "cambio_politico"]

opciones_explicitas:
  - "El sistema de voto cantado"
  - "El sistema de voto secreto"
  - "El sistema de voto obligatorio"
  - "El sistema de voto universal"

respuesta: "El sistema de voto cantado"
tipo: mc

enunciado: "Antes de la reforma de 1912, el sistema predominante que facilitaba el fraude y la coacción era el voto ___."

explicacion: |
  El voto cantado permitía que el elector manifestara su elección en voz alta frente a la autoridad de mesa, lo que facilitaba la intimidación y el control de los votos por parte de los sectores dominantes.
```

### 3 — Contexto de la participación
```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["participacion", "sufragio"]

variables:
  idx: uno_de([0, 1])

datos:
  - ["masculino", "masculino"]
  - ["femenino", "femenino"]

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "masculino"
  - "femenino"

enunciado: "En el contexto de 1912, la universalidad del sufragio establecida por la ley se refería únicamente al sexo ___."

explicacion: |
  Aunque la ley fue un avance democrático enorme, la universalidad estaba limitada al género masculino. El sufragio femenino en Argentina se lograría recién en 1947.
```

### 4 — Secuencia de reformas
```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "avanzado"
  tags: ["orden", "proceso_historico"]

opciones_explicitas:
  - "Fraude electoral"
  - "Voto cantado"
  - "Ley Sáenz Peña"
  - "Democracia representativa"

respuesta: ["Fraude electoral", "Voto cantado", "Ley Sáenz Peña", "Democracia representativa"]
tipo: ordenar

enunciado: "Ordene cronológicamente los procesos o elementos que definieron la transición hacia la democracia moderna en Argentina:"

explicacion: |
  La secuencia lógica muestra la crisis del sistema de fraude y voto cantado, que llevó a la sanción de la Ley Sáenz Peña y, finalmente, a la consolidación de un sistema de representación más democrático.
```

### 5 — El impacto en el poder
```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "intermedio"
  tags: ["consecuencias", "radicalismo", "poder"]

variables:
  idx: uno_de([0, 1])

escenarios:
  - ["1916", "La llegada de la UCR al poder"]
  - ["1916", "La continuidad del régimen conservador"]

respuesta: escenarios[idx][1]
tipo: input
tolerancia_abs: 0

enunciado: "Gracias a la implementación de la Ley Sáenz Peña, el año ___ marcó ___."

explicacion: |
  La aplicación de la nueva ley permitió que en las elecciones de 1916 la Unión Cívica Radical (UCR) llegara a la presidencia con Hipólito Yrigoyen, rompiendo el monopolio del régimen conservador.
```