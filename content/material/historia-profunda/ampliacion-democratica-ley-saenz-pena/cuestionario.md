# Historia Profunda — Ampliacion democratica ley saenz pena (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

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
  La Ley 8.871, conocida como Ley Sáenz Peña, transformó la vida política argentina al garantizar el voto secreto, universal (para varones) y obligatorio, terminando con el fraude electoral de la época.
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
  genero: uno_de(["masculino", "femenino"])

respuesta: genero
tipo: completar
respuestas_validas:
  - "masculino"
  - "femenino"

enunciado: "En el contexto de 1912, la universalidad del sufragio establecida por la ley se refería únicamente al sexo {genero}."

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

respuesta_orden: ["Fraude electoral", "Voto cantado", "Ley Sáenz Peña", "Democracia representativa"]
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
  escenario: uno_de([["1916", "La llegada de la UCR al poder"], ["1916", "La continuidad del régimen conservador"]])

respuesta: escenario[0]
tipo: completar
tolerancia_abs: 0

enunciado: "Gracias a la implementación de la Ley Sáenz Peña, el año {escenario[0]} marcó {escenario[1]}."

explicacion: |
  La aplicación de la nueva ley permitió que en las elecciones de 1916 la Unión Cívica Radical (UCR) llegara a la presidencia con Hipólito Yrigoyen, rompiendo el monopolio del régimen conservador.
```

### 6 — El sistema de votación previo a 1912

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

### 7 — El fraude electoral y el control político

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
respuestas_validas:
  - "manipulación"
  - "transparencia"

enunciado: "En el régimen de la Generación del '80, la combinación del voto no secreto y la falta de padrones confiables permitía la ___ de los resultados electorales por parte del oficialismo de turno."

explicacion: |
  La falta de secreto en el sufragio permitía que el poder político controlara el comportamiento del elector, asegurando la continuidad de la hegemonía de la oligarquía mediante la manipulación de los resultados.
```

### 8 — Objetivos de la Ley Sáenz Peña

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["ley_saenz_pena", "reforma", "democracia"]

respuesta: "universal, secreto y obligatorio"
tipo: completar
respuestas_validas:
  - "universal, secreto y obligatorio"
  - "opcional, secreto y universal"

enunciado: "La reforma introducida por la Ley Sáenz Peña estableció que el sufragio debía ser ___."

explicacion: |
  La Ley 8.871 transformó el sistema electoral argentino al establecer tres pilares: el voto debe ser universal (para varones), secreto (para evitar coacciones) y obligatorio (para asegurar la participación masiva).
```

### 9 — Secuencia de la reforma electoral

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "intermedio"
  tags: ["proceso", "ley", "reforma"]

respuesta_orden: ["Crisis del régimen oligárquico", "Presión de la Unión Cívica Radical", "Sanción de la Ley Sáenz Peña"]
tipo: ordenar
opciones_explicitas: ["Crisis del régimen oligárquico", "Presión de la Unión Cívica Radical", "Sanción de la Ley Sáenz Peña"]

enunciado: "Ordene cronológicamente los eventos que llevaron a la democratización del sistema electoral en Argentina:"

explicacion: |
  La crisis del modelo oligárquico y la presión constante de la oposición (especialmente la UCR) forzaron al gobierno de Roque Sáenz Peña a sancionar la ley para legitimar el sistema y evitar una revolución.
```

### 10 — Consecuencia de la reforma

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

### 11 — El triunfo de la Unión Cívica Radical

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

### 12 — El cambio de paradigma electoral

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

respuesta: "el régimen conservador"

explicacion: |
  El sistema anterior permitía el fraude mediante el voto cantado, lo que facilitaba la manipulación de resultados por parte de los sectores dominantes.
```

### 13 — Hitos de la reforma electoral

```
metadata:
  materia: "historia"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "intermedio"
  tags: ["caracteristicas", "voto"]

tipo: ordenar
opciones_explicitas: ["Voto Cantado", "Voto Secreto", "Voto Universal", "Voto Obligatorio"]

enunciado: "Ordene cronológicamente la evolución del sistema de votación en Argentina, desde el modelo previo a la Ley Sáenz Peña hasta el modelo implementado por esta ley."

respuesta_orden: ["Voto Cantado", "Voto Secreto", "Voto Universal", "Voto Obligatorio"]

explicacion: |
  La Ley Sáenz Peña transformó el sistema de un modelo de voto cantado (abierto) a uno basado en la universalidad (masculina), la obligatoriedad y, fundamentalmente, el secreto para evitar el fraude.
```

### 14 — El nuevo mandatario

```
metadata:
  materia: "historia"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["irrigoyen", "presidencia"]

tipo: completar
respuestas_validas:
  - "Hipólito Yrigoyen"

enunciado: "El primer presidente elegido bajo el nuevo sistema de sufragio universal, secreto y obligatorio fue ___."

respuesta: "Hipólito Yrigoyen"

explicacion: |
  Hipólito Yrigoyen asumió la presidencia en 1916, representando el triunfo de las fuerzas populares y el fin del control exclusivo de la oligarquía sobre el Poder Ejecutivo.
```

### 15 — Impacto de la Ley Sáenz Peña

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

respuesta: caso[1]

explicacion: |
  La apertura democrática permitió que sectores que habían estado excluidos del poder político, como la Unión Cívica Radical, pudieran competir y ganar mediante el voto popular.
```

### 16 — El alcance del sufragio

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

### 17 — El derecho al voto femenino

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
respuestas_validas:
  - "1947"
  - "1912"

enunciado: "Si bien la reforma de 1912 fue un paso hacia la democracia, las mujeres en Argentina no pudieron ejercer el voto hasta el año ___."

explicacion: |
  Fue mediante la sanción de la Ley 13.010, impulsada por el voto femenino, que las mujeres argentinas obtuvieron el derecho político pleno en 1947.
```

### 18 — Evolución del sufragio en Argentina

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "intermedio"
  tags: ["cronologia", "historia_argentina"]

respuesta_orden: ["Ley Sáenz Peña", "Ley de Sufragio Femenino", "Ley de Ciudadanía Argentina"]
tipo: ordenar
opciones_explicitas: ["Ley Sáenz Peña", "Ley de Sufragio Femenino", "Ley de Ciudadanía Argentina"]

enunciado: "Ordena cronológicamente los hitos que ampliaron la base electoral en Argentina:"

explicacion: |
  La secuencia correcta marca la transición desde un voto masculino (1912), pasando por la inclusión de la mujer (1947), hasta la plena ciudadanía para inmigrantes (1972).
```

### 19 — Características de la Ley Sáenz Peña

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

### 20 — Análisis de la exclusión

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "avanzado"
  tags: ["democracia", "exclusiones"]

variables:
  caso: uno_de(["se incluyeron", "se excluyeron"])

respuesta: "se excluyeron"

tipo: mc
opciones_explicitas: ["se incluyeron", "se excluyeron"]

enunciado: "Considerando la composición de la población argentina en 1912, ¿qué ocurrió con el género femenino en la implementación de la Ley Sáenz Peña? Las mujeres {caso} del derecho al voto."

explicacion: |
  A pesar de la modernización del sistema, la exclusión de la mitad de la población (las mujeres) demuestra que la "universalidad" de la época era solo para el género masculino.
```

### 21 — El voto antes de 1912

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["voto_cantado", "sistema_oligarquico"]

variables:
  datos: [["El voto era realizado de forma ___", "abierto"], ["El voto era realizado de forma ___", "secreto"], ["El voto era realizado de forma ___", "obligatorio"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["abierto", "secreto", "obligatorio"]

enunciado: "Antes de la sanción de la Ley Sáenz Peña, el sistema electoral se caracterizaba porque el voto era ___."

explicacion: |
  Antes de 1912, el sistema era el "voto cantado", lo que permitía el fraude y la presión de los caudillos locales, ya que no había secreto.
```

### 22 — La gran transformación

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["caracteristicas_ley"]

variables:
  datos: [["voto universal", "masivo"], ["voto secreto", "anónimo"], ["voto obligatorio", "deber_ciudadano"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "masivo"
  - "anónimo"
  - "deber_ciudadano"

enunciado: "Con la implementación de la Ley Sáenz Peña, el voto pasó a ser ___."

explicacion: |
  La ley estableció tres pilares: el voto era universal (para varones), secreto y obligatorio, rompiendo el control de la oligarquía.
```

### 23 — Comparativa de sistemas

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "intermedio"
  tags: ["comparativa", "fraude"]

variables:
  datos: [["Antes de 1912 el voto era ___ y después era ___", ["cantado", "secreto"]], ["Antes de 1912 el voto era ___ y después era ___", ["opcional", "obligatorio"]], ["Antes de 1912 el voto era ___ y después era ___", ["fraudulento", "transparente"]]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]

tipo: completar
respuestas_validas:
  - "cantado"
  - "secreto"
  - "opcional"
  - "obligatorio"
  - "fraudulento"
  - "transparente"

enunciado: "{datos[idx][0]}"

explicacion: |
  La transición buscaba pasar de un sistema controlado y abierto a uno donde la voluntad popular fuera respetada mediante el secreto y la obligatoriedad.
```

### 24 — El rol del ciudadano

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["obligatoriedad"]

variables:
  datos: [["En el sistema anterior, votar era ___", "un privilegio"], ["En el sistema anterior, votar era ___", "un derecho"], ["En el sistema anterior, votar era ___", "una carga"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["un privilegio", "un derecho", "una carga"]

enunciado: "Antes de la reforma, el sufragio no era un derecho para todos, sino ___ para una élite restringida."

explicacion: |
  El sistema previo era restrictivo y estaba diseñado para que solo ciertos sectores sociales (la oligarquía) pudieran participar.
```

### 25 — El impacto de la ley

```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "avanzado"
  tags: ["consecuencias_politicas"]

variables:
  datos: [["La ley permitió el ascenso de ___", "la UCR"], ["La ley permitió el ascenso de ___", "el radicalismo"], ["La ley permitió el ascenso de ___", "el triunfo de Hipólito Yrigoyen"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "la UCR"
  - "el radicalismo"
  - "el triunfo de Hipólito Yrigoyen"

enunciado: "La democratización del voto fue el factor clave que permitió el ascenso político de ___ en Argentina."

explicacion: |
  La Ley Sáenz Peña permitió que las fuerzas de masas, como la Unión Cívica Radical, pudieran ganar elecciones de manera legítima.
```
