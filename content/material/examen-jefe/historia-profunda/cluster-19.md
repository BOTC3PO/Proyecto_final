# Examen jefe — [PENDIENTE #699]

> Logro #699. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **126 preguntas totales** en 5/5 secciones.

---

## Sección: ampliacion-democratica-ley-saenz-pena (25 preguntas)

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

## Sección: sociedad-de-masas-y-democracia-liberal (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["sociologia", "terminos", "origen"]
tipo: completar
enunciado: "El concepto de \"sociedad de masas\" fue popularizado en el siglo XIX por el sociólogo [[uno_de([\"Gabriel Tarde\", \"Gustave Le Bon\", \"Émile Durkheim\", \"Karl Marx\"])]] para describir la transformación social tras la industrialización y la urbanización."
respuesta: "Gustave Le Bon"
respuestas_validas:
  - "Gustave Le Bon"
  - "gustave le bon"
  - "Gustave le bon"
  - "gustave le bon"
explicacion: "Aunque otros sociólogos analizaron el fenómeno, Gustave Le Bon, junto con Tarde, es fundamental para la conceptualización temprana de la psicología de las masas y la crítica a la democracia moderna."
```

```
metadata:
  materia: "historia_profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["le-bon", "psicologia", "masas"]
tipo: vf
enunciado: "Según Gustave Le Bon, las masas tienden a homogeneizarse psicológicamente, perdiendo su conciencia individual y adoptando un \"espíritu de masa\" caracterizado por la impulsividad y la sugestionabilidad."
respuesta: verdadero
explicacion: "Esta es la tesis central de \"La psicología de las multitudes\" (1895), donde Le Bon argumenta que la masa crea una ilusión colectiva de invencibilidad que anula el pensamiento crítico individual."
```

```
metadata:
  materia: "historia_profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["sufragio", "britania", "reform"]
tipo: completar
enunciado: "En el Reino Unido, la [[uno_de([\"Reform Act de 1832\", \"Reform Act de 1867\", \"Representation of the People Act de 1918\"])]] fue crucial para extender el voto a la clase trabajadora urbana, marcando un paso clave hacia la democracia de masas."
respuesta: "Reform Act de 1867"
respuestas_validas:
  - "Reform Act de 1867"
  - "reform act de 1867"
  - "Segunda Ley de Reforma de 1867"
  - "segunda ley de reforma de 1867"
explicacion: "La Ley de Reforma de 1867 duplicó el cuerpo electoral al incluir a los trabajadores urbanos calificados, cambiando la naturaleza de la política británica hacia la competencia por votos populares."
```

```
metadata:
  materia: "historia_profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["partidos-politicos", "estructura", "organizacion"]
tipo: mc
enunciado: "¿Qué característica distintiva definía a los \"partidos de masas\" frente a los clubes parlamentarios anteriores?"
opciones_explicitas:
  - "Dependencia exclusiva de donantes privados para su financiamiento."
  - "Estructura burocrática jerárquica y afiliación de miembros pagantes."
  - "Ausencia de programa ideológico definido, enfocándose solo en figuras carismáticas."
  - "Control total por parte de la aristocracia terrateniente."
respuesta: "Estructura burocrática jerárquica y afiliación de miembros pagantes."
explicacion: "Los partidos de masas (como los socialdemócratas o los conservadores organizados) se basaban en la membresía activa, cuotas y una burocracia profesional para movilizar y controlar a la gran base electoral."
```

```
metadata:
  materia: "historia_profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["filosofia", "espana", "rebelion"]
tipo: completar
enunciado: "En su obra \"La rebelión de las masas\" (1930), José Ortega y Gasset argumentaba que el hombre medio se sentía \"absolutamente indispensable\" y que la democracia de masas amenazaba con la [[uno_de([\"barbarie\", \"civilización\", \"progresión\", \"modernidad\"])]]."
respuesta: "barbarie"
respuestas_validas:
  - "barbarie"
  - "la barbarie"
  - "Barbarie"
  - "La barbarie"
explicacion: "Ortega temía que la \"homo massus\" (hombre-masa), al no sentirse exigido a ser superior, impusiera su mediocridad sobre la excelencia cultural y política, llevando a la decadencia."
```

```
metadata:
  materia: "historia_profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["medios", "prensa", "sensacionalismo"]
tipo: mc
enunciado: "¿Cuál fue el impacto principal del fenómeno de la \"prensa amarilla\" en la sociedad de masas de finales del siglo XIX?"
opciones_explicitas:
  - "Redujo la alfabetización al usar lenguaje excesivamente técnico."
  - "Aumentó la circulación de periódicos mediante emociones fuertes y simplificación de noticias."
  - "Centralizó el control informativo en manos del estado."
  - "Elimina la polarización política al ofrecer datos neutros."
respuesta: "Aumentó la circulación de periódicos mediante emociones fuertes y simplificación de noticias."
explicacion: "La competencia por audiencias masales llevó al uso de titulares escandalosos, caricaturas y narrativas emocionales, democratizando el acceso a la información pero también manipulando la opinión pública."
```

```
metadata:
  materia: "historia_profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["sufragio", "mujeres", "fin-siglo-xx"]
tipo: mc
opciones_explicitas: ["Finlandia", "Australia", "Nueva Zelanda", "Estados Unidos"]
respuesta: "Finlandia"
enunciado: "¿Qué país fue el primero en el mundo en otorgar tanto el derecho a voto como la elegibilidad al cargo parlamentario a las mujeres, en 1906?"
explicacion: "Aunque Nueva Zelanda otorgó el voto en 1893, Finlandia fue el primero en permitir a las mujeres ser elegidas parlamentarias, marcando un hito único en la inclusión política de género."
```

```
metadata:
  materia: "historia_profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["marx", "religion", "critica-social"]
tipo: vf
enunciado: "Karl Marx describió la religión como el \"opio de los pueblos\" para indicar que era una herramienta de distracción que impedía a la clase obrera tomar conciencia de su explotación real."
respuesta: verdadero
explicacion: "Esta frase, de \"Introducción a la crítica de la filosofía del derecho de Hegel\", refleja la visión marxista de la religión como un mecanismo de consuelo que perpetúa el statu quo."
```

```
metadata:
  materia: "historia_profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["cultura", "cine", "siglo-xx"]
tipo: completar
enunciado: "A principios del siglo XX, el cine se consolidó como el medio de comunicación de masas por excelencia porque permitía [[uno_de([\"la transmisión instantánea de voz\", \"la visualización de historias universales sin barreras lingüísticas\", \"el debate político en tiempo real\", \"la lectura simultánea de textos\"])]]."
respuesta: "la visualización de historias universales sin barreras lingüísticas"
respuestas_validas:
  - "la visualización de historias universales sin barreras lingüísticas"
  - "visualizacion de historias universales sin barreras linguisticas"
  - "la visualización de historias universales sin barreras linguisticas"
  - "visualizacion de historias universales sin barreras lingüisticas"
explicacion: "El cine, especialmente antes del sonido sincronizado y con el uso de intertítulos o música, trascendía fronteras nacionales y niveles de educación, llegando a una audiencia global masiva."
```

```
metadata:
  materia: "historia_profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["psicoanalisis", "frecuencia", "identidad"]
tipo: mc
enunciado: "En \"Psicología de las multitudes y análisis del yo\" (1921), Freud explica que la masa se forma cuando los individuos:"
opciones_explicitas:
  - "Desarrollan un superyó independiente y crítico."
  - "Vinculan sus libidos al líder común, creando una identidad compartida."
  - "Pierden totalmente su libido y se vuelven asociales."
  - "Se organizan racionalmente alrededor de objetivos económicos claros."
respuesta: "Vinculan sus libidos al líder común, creando una identidad compartida."
explicacion: "Freud adaptó la idea de Le Bon, sugiriendo que la masa recrea la estructura de la familia primitiva, con el líder como figura paterna idealizada, permitiendo la regresión a estados emocionales primitivos."
```

```
metadata:
  materia: "historia_profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["industria", "consumo", "estandarizacion"]
tipo: completar
enunciado: "La Segunda Revolución Industrial facilitó la sociedad de masas al permitir la [[uno_de([\"producción artesanal exclusiva\", \"producción en serie y consumo masivo\", \"destrucción de las clases medias\", \"regresión al feudalismo\"])]], lo que generó una cultura compartida."
respuesta: "producción en serie y consumo masivo"
respuestas_validas:
  - "producción en serie y consumo masivo"
  - "produccion en serie y consumo masivo"
  - "producción en serie y consumo masivo"
  - "produccion en serie y consumo masivo"
explicacion: "La estandarización de productos (como el Fordismo) hizo que bienes antes exclusivos fueran accesibles a todos, creando hábitos y experiencias comunes entre las clases populares."
```

```
metadata:
  materia: "historia_profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["nacionalismo", "educacion", "identidad"]
tipo: vf
enunciado: "El nacionalismo moderno se consolidó como una fuerza de masas principalmente a través de la educación pública obligatoria y los símbolos patrios compartidos en el siglo XIX."
respuesta: verdadero
explicacion: "Los estados-nación utilizaron la escuela para crear ciudadanos leales, enseñando una historia común y una lengua estándar, transformando la identidad local en identidad nacional."
```

```
metadata:
  materia: "historia_profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["trabajo", "sindicalismo", "marxismo"]
tipo: mc
enunciado: "¿Cuál era la principal diferencia estratégica entre el sindicalismo revolucionario (como la CNT) y el reformismo socialdemócrata en la sociedad de masas?"
opciones_explicitas:
  - "El reformismo buscaba la abolición del estado mediante huelga general; el sindicalismo buscaba reformas legales."
  - "El sindicalismo revolucionario rechazaba la participación parlamentaria; el reformismo la utilizaba para cambios graduales."
  - "El reformismo promovía la violencia directa; el sindicalismo la evitaba."
  - "No había diferencias, ambos buscaban los mismos objetivos por los mismos medios."
respuesta: "El sindicalismo revolucionario rechazaba la participación parlamentaria; el reformismo la utilizaba para cambios graduales."
explicacion: "Los reformistas (como Bernstein) creían en la evolución pacífica hacia el socialismo vía elecciones; los revolucionarios veían la lucha de clases y la huelga general como únicos caminos válidos."
```

```
metadata:
  materia: "historia_profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["filosofia", "elite", "mediocridad"]
tipo: completar
enunciado: "Para Ortega y Gasset, el \"hombre-masa\" es aquél que se impone a sí mismo como [[uno_de([\"superior\", \"igual\", \"inferior\", \"independiente\"])]] sin haberse esforzado por merecerlo, exigiendo que el mundo se adapte a sus deseos básicos."
respuesta: "igual"
respuestas_validas:
  - "igual"
  - "de igual"
  - "Igual"
  - "De igual"
explicacion: "La tragedia del hombre-masa es su falta de exigencia vital; no se siente \"prestado\" su bienestar y por tanto no respeta las normas o elites que lo mantuvieron."
```

```
metadata:
  materia: "historia_profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["francia", "sufragio", "universal"]
tipo: vf
enunciado: "La Revolución de 1848 en Francia instauró el sufragio universal masculino, eliminando el censo de impuestos como requisito para votar."
respuesta: verdadero
explicacion: "Este evento fue un punto de inflexión en Europa, demostrando que la democracia de masas podía surgir de la presión popular y no solo de reformas elitistas graduales."
```

```
metadata:
  materia: "historia_profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["economia", "publicidad", "psicologia"]
tipo: mc
enunciado: "¿Qué rol jugó la publicidad moderna en la formación de la sociedad de masas?"
opciones_explicitas:
  - "Desincentivó el consumo para preservar recursos."
  - "Creó necesidades artificiales y estandarizó los gustos culturales."
  - "Se centró únicamente en informar sobre precios sin apelar a emociones."
  - "Fue controlada exclusivamente por el gobierno."
respuesta: "Creó necesidades artificiales y estandarizó los gustos culturales."
explicacion: "La publicidad no solo vendía productos, sino estilos de vida, aspiraciones y pertenencia, homogeneizando los deseos de la población y alimentando el ciclo de producción-consumo."
```

```
metadata:
  materia: "historia_profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["elitismo", "mosca", "politica"]
tipo: completar
enunciado: "Gaetano Mosca, en su teoría de las élites, sostenía que en toda sociedad existe una [[uno_de([\"minoría organizada\", \"mayoría indiferente\", \"clase media\", \"oligarquía divina\"])]], que gobierna mientras la mayoría permanece pasiva."
respuesta: "minoría organizada"
respuestas_validas:
  - "minoría organizada"
  - "minoria organizada"
  - "Una minoría organizada"
  - "una minoría organizada"
explicacion: "Mosca argumentaba que la democracia de masas no elimina la dominación, solo cambia la composición de la minoría gobernante, pero la estructura jerárquica es inevitable."
```

```
metadata:
  materia: "historia_profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["usa", "sufragio", "enmienda"]
tipo: completar
enunciado: "La [[uno_de([\"Decimonovena Enmienda\", \"Decimoséptima Enmienda\", \"Decimocuarta Enmienda\", \"Décima Enmienda\"])]], ratificada en 1920, prohibió la discriminación en el voto basada en el sexo en Estados Unidos."
respuesta: "Decimonovena Enmienda"
respuestas_validas:
  - "Decimonovena Enmienda"
  - "decimonovena enmienda"
  - "Decimonovena Enmienda"
  - "decimonovena enmienda"
  - "19th Amendment"
  - "19th enmienda"
explicacion: "Este fue el culmen de décadas de lucha del movimiento sufragista, expandiendo significativamente la base electoral de la democracia estadounidense."
```

```
metadata:
  materia: "historia_profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["escuela-frankfurt", "cultura", "critica"]
tipo: mc
enunciado: "Para Theodor Adorno y Max Horkheimer, la \"industria cultural\" en la sociedad de masas:"
opciones_explicitas:
  - "Empodera al espectador con contenido crítico y complejo."
  - "Estandariza el entretenimiento para conformar y alienar al público."
  - "Fomenta la diversidad artística independiente del mercado."
  - "Elimina la necesidad de ideología en la política."
respuesta: "Estandariza el entretenimiento para conformar y alienar al público."
explicacion: "Argumentaban que la cultura se convertía en mercancía, produciendo placer fácil que adormece el pensamiento crítico y mantiene al individuo sumiso al sistema capitalista."
```

```
metadata:
  materia: "historia_profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["britania", "voto-rural", "democracia"]
tipo: completar
enunciado: "La [[uno_de([\"Reform Act de 1884\", \"Reform Act de 1911\", \"Parliament Act de 1911\", \"Great Reform Act de 1832\"])]], conocida como la \"Gran Extensión\", extendió el voto a los trabajadores agrícolas del campo, igualando las reglas electorales rurales con las urbanas."
respuesta: "Reform Act de 1884"
respuestas_validas:
  - "Reform Act de 1884"
  - "reform act de 1884"
  - "Tercera Ley de Reforma de 1884"
  - "tercera ley de reforma de 1884"
explicacion: "Esta ley completó la democratización del cuerpo electoral masculino en el Reino Unido, preparando el terreno para el ascenso del Partido Laborista."
```

```
metadata:
  materia: "historia-profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["sociologia", "karl-mannheim", "ideologia"]
tipo: vf
enunciado: "Karl Mannheim analizó cómo la sociedad de masas puede llevar tanto a la democratización como al totalitarismo, dependiendo de si las masas son movilizadas por fuerzas liberales o autoritarias."
respuesta: verdadero
explicacion: "Mannheim, en \"Ideología y Utopía\" y otros trabajos, mostró que la estructura de masas es neutra en cuanto a régimen; su dirección depende de la lucha ideológica y la organización."
```

```
metadata:
  materia: "historia-profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["deporte", "futbol", "sociedad"]
tipo: completar
enunciado: "El fútbol se expandió globalmente como deporte de masas en el siglo XIX gracias a su [[uno_de([\"reglamentación compleja\", \"reglas simples y accesibles\", \"alto costo de equipo\", \"exclusividad elitista\"])]], permitiendo la participación de trabajadores industriales."
respuesta: "reglas simples y accesibles"
respuestas_validas:
  - "reglas simples y accesibles"
  - "reglas simples y accesibles"
  - "reglas simples y accesibles"
  - "reglas simples y accesibles"
explicacion: "La simplicidad de las reglas y la necesidad de poco equipo lo hicieron ideal para las ciudades industriales, creando una pasión compartida que trascendía clases."
```

```
metadata:
  materia: "historia-profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["psicologia", "extrema", "comportamiento"]
tipo: mc
enunciado: "¿Qué tendencia demuestra la teoría de la polarización en grupos de masas?"
opciones_explicitas:
  - "Los grupos de masas siempre adoptan posturas moderadas y centristas."
  - "Los grupos de masas tienden a adoptar posturas más extremas en la dirección de su inclinación inicial."
  - "Los individuos en masas pierden toda capacidad de juicio."
  - "Las masas son inherentemente pacíficas y racionales."
respuesta: "Los grupos de masas tienden a adoptar posturas más extremas en la dirección de su inclinación inicial."
explicacion: "La dinámica de grupo amplifica las creencias previas, llevando a la radicalización. Esto explica el éxito de movimientos políticos extremos en contextos de masas."
```

```
metadata:
  materia: "historia-profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["trabajo", "leyes", "alemania"]
tipo: mc
opciones_explicitas: ["Otto von Bismarck", "Camillo Cavour", "Ludwig von Mises", "Karl Liebknecht"]
respuesta: "Otto von Bismarck"
enunciado: "¿Quién implementó las primeras leyes de seguridad social (seguro de salud, accidentes y pensiones) en Alemania en la década de 1880, para contrarrestar el atractivo del socialismo entre la clase trabajadora?"
explicacion: "Este fue un ejemplo temprano de \"capitalismo de Estado\" o paternalismo conservador, usando el bienestar social para estabilizar la democracia emergente y frenar la revolución."
```

```
metadata:
  materia: "historia-profunda"
  tema: "sociedad-de-masas-y-democracia-liberal"
  nivel: "avanzado"
  tags: ["crisis", "1929", "fascismo"]
tipo: vf
enunciado: "La Gran Depresión de 1929 debilitó la legitimidad de la democracia liberal de masas en Europa, facilitando el ascenso de regímenes totalitarios que prometían orden y recuperación rápida."
respuesta: verdadero
explicacion: "La incapacidad de los gobiernos liberales para manejar la crisis económica mostró sus límites percibidos, mientras que las dictaduras presentaban una apariencia de eficiencia y unidad nacional."
```

## Sección: primera-guerra-mundial-y-revolucion-rusa (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["casus-belli", "sarajevo"]
enunciado: "El asesinato de {{ uno_de([personaje_1, personaje_2 ]) }} en Sarajevo el 28 de junio de 1914 fue el detonante directo que activó el sistema de alianzas y llevó al estallido de la Primera Guerra Mundial."
variables:
  personaje_1: "Archiduque Francisco Fernando"
  personaje_2: "Francisco Fernando de Austria"
tipo: completar
respuesta: "Archiduque Francisco Fernando"
respuestas_validas:
  - "Archiduque Francisco Fernando"
  - "Archiduque Francisco Fernando de Austria"
  - "Francisco Fernando"
  - "Archiduque Francisco Fernando"
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["paz", "versalles"]
enunciado: "¿Cuál fue el tratado de paz principal que puso fin oficialmente a la Primera Guerra Mundial entre las Potencias Aliadas y Alemania?"
opciones_explicitas:
  - "Tratado de Trianón"
  - "Tratado de Versalles"
  - "Tratado de Saint-Germain"
  - "Tratado de Neuilly"
respuesta: "Tratado de Versalles"
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["febrero", "abdicacion"]
enunciado: "La Revolución de Febrero de 1917 en Rusia provocó la abdicación del último zar de la dinastía Romanov. ¿Quién fue este monarca?"
opciones_explicitas:
  - "Pedro I el Grande"
  - "Alejandro II"
  - "Nicolás II"
  - "Alejandro III"
respuesta: "Nicolás II"
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["mar", "bloqueo"]
enunciado: "La estrategia naval británica consistió en un {{ uno_de([bloqueo_1, bloqueo_2 ]) }} de las costas alemanas para impedir la entrada de suministros y materias primas, debilitando gravemente la economía del Imperio Alemán."
variables:
  bloqueo_1: "bloqueo"
  bloqueo_2: "cerco"
tipo: completar
respuesta: "bloqueo"
respuestas_validas:
  - "bloqueo"
  - "cerco"
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["rusia", "paz", "bolchevique"]
enunciado: "La nueva gobierno bolchevique firmó el {{ uno_de([tratado_1, tratado_2 ]) }} con las Potencias Centrales en marzo de 1918, saliendo oficialmente de la guerra a costa de enormes pérdidas territoriales."
variables:
  tratado_1: "Tratado de Brest-Litovsk"
  tratado_2: "Paz de Brest-Litovsk"
tipo: completar
respuesta: "Tratado de Brest-Litovsk"
respuestas_validas:
  - "Tratado de Brest-Litovsk"
  - "Paz de Brest-Litovsk"
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["armisticio", "compiene"]
enunciado: "El armisticio que detuvo los combates en el frente occidental se firmó en un vagón de ferrocarril en el bosque de Compiègne. ¿En qué mes de 1918 ocurrió?"
opciones_explicitas:
  - "Noviembre"
  - "Diciembre"
  - "Octubre"
  - "Septiembre"
respuesta: "Noviembre"
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["octubre", "lenin"]
enunciado: "Fue el líder principal de la Revolución de Octubre de 1917 y el primer jefe de gobierno de la Rusia Soviética. ¿Quién fue?"
opciones_explicitas:
  - "León Trotsky"
  - "Iósif Stalin"
  - "Vladimir Lenin"
  - "Grigori Zinóviev"
respuesta: "Vladimir Lenin"
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["frente", "rusia"]
enunciado: "A diferencia del frente occidental, caracterizado por la guerra de trincheras estática, el {{ uno_de([frente_1, frente_2 ]) }} fue más móvil y amplio, lo que facilitó la posterior ruptura del ejército ruso."
variables:
  frente_1: "frente oriental"
  frente_2: "frente ruso"
tipo: completar
respuesta: "frente oriental"
respuestas_validas:
  - "frente oriental"
  - "frente ruso"
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["submarino", "guerra_no_limitada"]
enunciado: "Alemania reanudó la guerra submarina sin restricciones en 1917, atacando barcos neutrales, lo que fue un factor clave para la entrada en la guerra de {{ uno_de([pais_1, pais_2 ]) }}."
variables:
  pais_1: "Estados Unidos"
  pais_2: "USA"
tipo: completar
respuesta: "Estados Unidos"
respuestas_validas:
  - "Estados Unidos"
  - "USA"
  - "Estados Unidos de América"
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["genocidio", "imperio_otomano"]
enunciado: "Durante la Primera Guerra Mundial, el gobierno del Imperio Otomano llevó a cabo la deportación y masacre sistemática de su población {{ uno_de([grupo_1, grupo_2 ]) }}, considerada por muchos historiadores como el primer genocidio moderno."
variables:
  grupo_1: "armenia"
  grupo_2: "armenios"
tipo: completar
respuesta: "armenia"
respuestas_validas:
  - "armenia"
  - "armenios"
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["verdun", "sangre"]
enunciado: "La batalla de Verdún, librada entre alemanes y franceses en 1916, es conocida por su {{ uno_de([caract_1, caract_2 ]) }} extrema, con cientos de miles de muertos y heridos sin cambios significativos en el frente."
variables:
  caract_1: "carnicería"
  caract_2: "sangría"
tipo: completar
respuesta: "carnicería"
respuestas_validas:
  - "carnicería"
  - "sangría"
  - "masacre"
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["trotsky", "ejercito_rojo"]
enunciado: "{{ uno_de([nombre_1, nombre_2 ]) }} fue el comisario de Guerra que organizó y dirigió el Ejército Rojo durante la guerra civil rusa posterior a la revolución."
variables:
  nombre_1: "León Trotsky"
  nombre_2: "Leon Trotsky"
tipo: completar
respuesta: "León Trotsky"
respuestas_validas:
  - "León Trotsky"
  - "Leon Trotsky"
  - "Trotsky"
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["trincheras", "tactica"]
enunciado: "La característica táctica definitoria del frente occidental fue la guerra de {{ uno_de([tipo_1, tipo_2 ]) }}, donde los soldados vivían en fosos excavados en la tierra protegidos por alambre de espino."
variables:
  tipo_1: "trincheras"
  tipo_2: "trinchera"
tipo: completar
respuesta: "trincheras"
respuestas_validas:
  - "trincheras"
  - "trinchera"
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["octubre", "fecha"]
enunciado: "La Revolución de Octubre en Rusia ocurrió según el calendario juliano en uso en Rusia en ese momento, pero corresponde al {{ uno_de([mes_1, mes_2 ]) }} de 1917 en el calendario gregoriano."
variables:
  mes_1: "noviembre"
  mes_2: "Noviembre"
tipo: completar
respuesta: "noviembre"
respuestas_validas:
  - "noviembre"
  - "Noviembre"
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["wilson", "paz"]
enunciado: "El presidente de Estados Unidos {{ uno_de([nombre_1, nombre_2 ]) }} presentó los \"Catorce Puntos\" como un programa de paz y base para la posterior creación de la Sociedad de Naciones."
variables:
  nombre_1: "Woodrow Wilson"
  nombre_2: "Woodrow"
tipo: completar
respuesta: "Woodrow Wilson"
respuestas_validas:
  - "Woodrow Wilson"
  - "Woodrow"
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["artilleria", "armas"]
enunciado: "Alemania utilizó artillería pesada de largo alcance, como los cañones {{ uno_de([modelo_1, modelo_2 ]) }}, para bombardear fortalezas belgas y francesas desde gran distancia."
variables:
  modelo_1: "Big Bertha"
  modelo_2: "Big Bertha"
tipo: completar
respuesta: "Big Bertha"
respuestas_validas:
  - "Big Bertha"
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["austria", "desmembramiento"]
enunciado: "El Tratado de Saint-Germain en 1919 disolvió el Imperio Austrohúngico y reconoció la independencia de {{ uno_de([pais_1, pais_2 ]) }}, entre otras nuevas naciones."
variables:
  pais_1: "Austria"
  pais_2: "austria"
tipo: completar
respuesta: "Austria"
respuestas_validas:
  - "Austria"
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["gas", "ypr"]
enunciado: "La primera gran utilización de gas venenoso en el campo de batalla por parte de Alemania ocurrió en la {{ uno_de([batalla_1, batalla_2 ]) }} de Ypres."
variables:
  batalla_1: "segunda batalla"
  batalla_2: "Segunda batalla"
tipo: completar
respuesta: "segunda batalla"
respuestas_validas:
  - "segunda batalla"
  - "Segunda batalla"
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["guerra_civil", "almirante"]
enunciado: "Durante la guerra civil rusa, el almirante {{ uno_de([nombre_1, nombre_2 ]) }} lideró a las fuerzas blancas en Siberia contra los bolcheviques."
variables:
  nombre_1: "Kolchak"
  nombre_2: "Alexander Kolchak"
tipo: completar
respuesta: "Kolchak"
respuestas_validas:
  - "Kolchak"
  - "Alexander Kolchak"
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["escaperoal", "naval"]
enunciado: "La escuadra alemana del Alto Mar se autohundió en ___ en 1919 para evitar que la flota fuera repartida entre las potencias aliadas, un acto de desobediencia ordenado por sus propios oficiales."
tipo: completar
respuesta: "Scapa Flow"
respuestas_validas:
  - "Scapa Flow"
  - "scapa flow"
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["weimar", "república"]
enunciado: "La República de Weimar, establecida tras la abdicación del káiser Guillermo II, fue la forma de gobierno de Alemania entre 1919 y 1933."
respuesta: verdadero
tipo: vf
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["internacional", "tercera"]
enunciado: "Lenin y Trotsky impulsaron la creación de la {{ uno_de([int_1, int_2 ]) }}, también conocida como la Komintern, para promover la revolución mundial."
variables:
  int_1: "Tercera Internacional"
  int_2: "Comintern"
tipo: completar
respuesta: "Tercera Internacional"
respuestas_validas:
  - "Tercera Internacional"
  - "Comintern"
  - "Komintern"
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["jutlandia", "naval"]
enunciado: "La única gran batalla naval entre las flotas británica y alemana durante la Primera Guerra Mundial ocurrió en el {{ uno_de([mar_1, mar_2 ]) }} del Norte."
variables:
  mar_1: "mar del Norte"
  mar_2: "Mar del Norte"
tipo: completar
respuesta: "mar del Norte"
respuestas_validas:
  - "mar del Norte"
  - "Mar del Norte"
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["domingo_sangriento", "1905"]
enunciado: "El \"Domingo Sangriento\" de 1905, donde la guardia imperial disparó contra manifestantes pacíficos en San Petersburgo, fue un precursor clave de la revolución de 1917."
respuesta: verdadero
tipo: vf
```

```
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["hungria", "desmembramiento"]
enunciado: "El Tratado de Trianón en 1920 redujo drásticamente el territorio de {{ uno_de([pais_1, pais_2 ]) }}, creando el estado de Hungría moderna y cediendo territorios a Rumania, Checoslovaquia y Yugoslavia."
variables:
  pais_1: "Hungria"
  pais_2: "Hungría"
tipo: completar
respuesta: "Hungria"
respuestas_validas:
  - "Hungria"
  - "Hungría"
```

## Sección: entreguerras-y-crisis-de-1929 (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["crisis-economica", "1929", "causas"]
tipo: mc
enunciado: "¿Cuál de las siguientes estructuras económicas fue identificada por muchos historiadores como una causa estructural fundamental que impidió la recuperación del mercado de consumo en Estados Unidos antes de la Gran Depresión?"
opciones_explicitas:
  - "La fuerte regulación bancaria de la Reserva Federal."
  - "La sobreproducción industrial y agrícola combinada con un crédito al consumo desmedido y una distribución desigual de la renta."
  - "El exceso de exportaciones agrícolas hacia Europa devastada por la guerra."
  - "La escasez de materias primas debido al bloqueo naval de las potencias aliadas."
respuesta: "La sobreproducción industrial y agrícola combinada con un crédito al consumo desmedido y una distribución desigual de la renta."
explicacion: "Durante los años 20, la producción aumentó más rápido que los salarios, creando un desequilibrio. El crédito al consumo permitía comprar bienes que la mayoría no podía pagar con su ingreso actual, generando una burbuja de deuda que estalló cuando el mercado se saturó."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["1929", "bolsa", "cronologia"]
tipo: vf
enunciado: "El colapso inicial de la bolsa de Nueva York, conocido como el \"Jueves Negro\", ocurrió el 24 de octubre de 1929, marcando el inicio simbólico de la Gran Depresión."
respuesta: verdadero
explicacion: "El jueves 24 de octubre de 1929 fue el primer día de ventas masivas y pánico generalizado. Aunque el \"Martes Negro\" (29 de octubre) fue aún peor en volumen, el Jueves Negro es la fecha tradicionalmente citada como el inicio del colapso financiero."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["herbert-hoover", "politica-economica", "respuesta-gobierno"]
tipo: completar
enunciado: "El presidente estadounidense Herbert Hoover, aunque reticente a la intervención federal directa masiva, apoyó la creación de la _______ para intentar estabilizar los bancos y las corporaciones en dificultades."
respuesta: "Reconstruction Finance Corporation"
respuestas_validas:
  - "Reconstruction Finance Corporation"
  - "reconstruction finance corporation"
  - "RFC"
  - "Corporación de Financiamiento de la Reconstrucción"
explicacion: "La RFC (Reconstruction Finance Corporation) fue establecida en 1932 bajo Hoover para prestar dinero a bancos, ferrocarriles y otras instituciones financieras, marcando un paso temprano hacia la intervención federal, aunque insuficiente para detener la crisis."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["diplomacia", "locarno", "estabilidad-relativa"]
tipo: mc
enunciado: "Los Pactos de Locarno (1925) tuvieron un impacto significativo en la diplomacia europea antes de la crisis de 1929. ¿Cuál fue su principal efecto?"
opciones_explicitas:
  - "Establecieron las fronteras orientales de Alemania con Polonia y Checoslovaquia de manera irreversible."
  - "Garantizaron las fronteras occidentales de Alemania y permitieron su entrada en la Sociedad de Naciones, mejorando temporalmente la confianza entre potencias."
  - "Imponían sanciones económicas automáticas a cualquier nación que rearmara sin autorización."
  - "Crearon una unión aduanera entre Alemania, Francia e Italia."
respuesta: "Garantizaron las fronteras occidentales de Alemania y permitieron su entrada en la Sociedad de Naciones, mejorando temporalmente la confianza entre potencias."
explicacion: "Locarno vio a Alemania, Francia y Bélgica garantizar sus fronteras comunes. Esto llevó a la entrada de Alemania en la Sociedad de Naciones en 1926, creando la llamada \"Espíritu de Locarno\", una breve era de reconciliación que se desvaneció con la crisis."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["comercio", "proteccionismo", "smoot-hawley"]
tipo: completar
enunciado: "La _______ de 1930 elevó los aranceles estadounidenses a niveles históricos, provocando represalias comerciales globales y profundizando la Gran Depresión."
respuesta: "Ley Smoot-Hawley"
respuestas_validas:
  - "Ley Smoot-Hawley"
  - "ley smoot-hawley"
  - "Smoot-Hawley Tariff Act"
  - "arancel smoot-hawley"
explicacion: "La Ley Smoot-Hawley aumentó los aranceles a más de 20.000 productos importados. Esto provocó que otros países elevaran sus propios aranceles, colapsando el comercio internacional y reduciendo drásticamente el volumen de intercambios globales."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["nazismo", "alemania", "crisis-politica"]
tipo: mc
enunciado: "¿Cómo contribuyó específicamente la Gran Depresión al ascenso electoral del Partido Nazi (NSDAP) en Alemania entre 1929 y 1933?"
opciones_explicitas:
  - "Al garantizar que Hitler fuera nombrado canciller directamente por el presidente Hindenburg en 1930."
  - "Al provocar una hiperinflación que arruinó a la clase media, haciendo que apoyaran al SPD."
  - "Al causar un desempleo masivo y desesperación social que erosionó la legitimidad de la República de Weimar y favoreció a los extremos políticos."
  - "Al permitir que Alemania recibiera más préstamos de EE.UU. que usó para financiar propaganda nazi."
respuesta: "Al causar un desempleo masivo y desesperación social que erosionó la legitimidad de la República de Weimar y favoreció a los extremos políticos."
explicacion: "La crisis eliminó los préstamos estadounidenses (efecto de la retirada de capitales), provocando quiebras bancarias y desempleo masivo. Esto debilitó a los partidos moderados y hizo que los votores buscaran soluciones radicales, beneficiando a los nazis y comunistas."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["urss", "stalin", "nep", "industrializacion"]
tipo: vf
enunciado: "Durante la Gran Depresión en Occidente, Stalin mantuvo la Nueva Política Económica (NEP) intacta para proteger a la Unión Soviética del impacto del capitalismo global."
respuesta: falso
explicacion: "Stalin abandonó la NEP a finales de los años 20 e inició los Planes Quinquenales, centrados en la industrialización forzada y la colectivización agrícola, independientemente de la crisis capitalista, buscando la autosuficiencia y el desarrollo industrial rápido."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["oro", "tipo-cambio", "economia-monetaria"]
tipo: completar
enunciado: "La adhesión a la _______ por parte de muchas naciones europeas durante la crisis limitó la capacidad de sus gobiernos para devaluar sus monedas y estimular la economía doméstica."
respuesta: "Gold Standard"
respuestas_validas:
  - "Gold Standard"
  - "gold standard"
  - "patrón oro"
  - "estandar oro"
  - "patrón de oro"
explicacion: "Bajo el patrón oro, los países debían mantener reservas de oro. Para defender la convertibilidad, tuvieron que subir tasas de interés y contraer la oferta monetaria, lo que profundizó la deflación y la recesión. Gran Bretaña abandonó el patrón oro en 1931, recuperando flexibilidad monetaria."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["fdr", "new-deal", "elecciones"]
tipo: mc
enunciado: "¿Qué factor político clave permitió a Franklin D. Roosevelt ganar las elecciones de 1932 con una mayoría abrumadora?"
opciones_explicitas:
  - "La popularidad de la Liga de las Naciones."
  - "El fracaso percibido de la administración de Herbert Hoover para manejar la crisis económica y social."
  - "Un pacto secreto con el Partido Comunista de EE.UU."
  - "La intervención militar directa de EE.UU. en Europa."
respuesta: "El fracaso percibido de la administración de Herbert Hoover para manejar la crisis económica y social."
explicacion: "La percepción de que Hoover era indiferente al sufrimiento popular (\"Hoovervilles\", \"Hoover flags\") y que sus políticas eran insuficientes, llevó a un cambio de régimen masivo hacia el New Deal de FDR, prometiendo acción federal activa."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["new-deal", "nira", "constitucionalidad"]
tipo: vf
enunciado: "La Ley de Recuperación Industrial Nacional (NIRA) de 1933 fue declarada inconstitucional por la Corte Suprema de EE.UU. en 1935."
respuesta: verdadero
explicacion: "En el caso *Schechter Poultry Corp. v. United States*, la Corte Suprema dictaminó que la NIRA delegaba demasiado poder legislativo al ejecutivo y regulaba negocios intrastatales, excediendo la autoridad constitucional de la Unión."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["dust-bowl", "medio-ambiente", "migracion"]
tipo: completar
enunciado: "La combinación de sequía severa y prácticas agrícolas inadecuadas en las llanuras centrales de EE.UU. provocó las tormentas de polvo conocidas como _______."
respuesta: "Dust Bowl"
respuestas_validas:
  - "Dust Bowl"
  - "dust bowl"
  - "Gran Tormenta de Polvo"
  - "la gran tormenta de polvo"
explicacion: "El Dust Bowl (mediados de los años 30) devastó la agricultura, forzando la migración de cientos de miles de personas (los \"Okies\") hacia California, generando una crisis humanitaria y social adicional a la depresión económica."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["alemania", "urss", "diplomacia-secreta"]
tipo: mc
enunciado: "El Tratado de Rappallo (1922) fue significativo para la Alemania de Weimar porque:"
opciones_explicitas:
  - "Le permitió rearmarse secretamente en territorio soviético, eludiendo las cláusulas militares del Tratado de Versalles."
  - "Estableció la zona desmilitarizada del Rin."
  - "Otorgó a Alemania el control de las minas de carbón del Sarre."
  - "Fue el primer acuerdo de reparación de guerra pagado a Rusia."
respuesta: "Le permitió rearmarse secretamente en territorio soviético, eludiendo las cláusulas militares del Tratado de Versalles."
explicacion: "Alemania y la URSS normalizaron relaciones y firmaron acuerdos secretos de cooperación militar y económica. Esto permitió a Alemania entrenar tropas y desarrollar armas prohibidas por Versalles, sentando las bases del futuro rearme nazi."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["new-deal", "bancos", "glass-steagall"]
tipo: completar
enunciado: "La _______ de 1933 cerró temporalmente todos los bancos en EE.UU. para detener las corridas bancarias y restablecer la confianza en el sistema financiero."
respuesta: "Ley de Reorganización Bancaria"
respuestas_validas:
  - "Ley de Reorganización Bancaria"
  - "ley de reorganizacion bancaria"
  - "Banking Act of 1933"
  - "Ley Bancaria de 1933"
explicacion: "Conocida como el \"Bank Holiday\", esta medida de emergencia detuvo el pánico bancario. Posteriormente, la Ley Glass-Steagall (parte de esta legislación) separó la banca comercial de la de inversión."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["mussolini", "fascismo", "italia"]
tipo: vf
enunciado: "Benito Mussolini llegó al poder en Italia principalmente como respuesta directa a la crisis económica de 1929, ya que la economía italiana estaba completamente intacta antes de esa fecha."
respuesta: falso
explicacion: "Mussolini llegó al poder en 1922, mucho antes de la crisis de 1929. Su ascenso se debió a la inestabilidad política post-Primera Guerra Mundial, el miedo al comunismo (Biennio Rosso) y la crisis económica de posguerra (1919-1921), no a la Gran Depresión."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["reparaciones", "alemania", "dawes"]
tipo: mc
enunciado: "¿Cuál era el mecanismo principal del Plan Dawes (1924) para manejar las reparaciones de guerra de Alemania?"
opciones_explicitas:
  - "Cancelar todas las deudas de Alemania a cambio de concesiones territoriales."
  - "Proporcionar préstamos internacionales (principalmente de EE.UU.) a Alemania para que pagara a los aliados, quienes a su vez pagaban a EE.UU."
  - "Transformar las reparaciones en bienes naturales extraídos directamente de la Ruhr."
  - "Establecer un fondo de compensación mutua entre todas las potencias europeas."
respuesta: "Proporcionar préstamos internacionales (principalmente de EE.UU.) a Alemania para que pagara a los aliados, quienes a su vez pagaban a EE.UU."
explicacion: "El Plan Dawes creó un círculo vicioso de deuda: Alemania dependía de préstamos estadounidenses para pagar a Francia/Reino Unido, que usaban ese dinero para pagar sus propias deudas a EE.UU. Cuando los préstamos se detuvieron en 1929, el sistema colapsó."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["inmigracion", "eeuu", "nacionalismo"]
tipo: completar
enunciado: "La Ley de Inmigración de 1924 estableció cuotas basadas en el censo de _______ para reducir drásticamente la inmigración desde el sur y este de Europa."
respuesta: 1890
respuestas_validas:
  - 1890
  - "mil ochocientos noventa"
  - "censo de 1890"
explicacion: "Al usar el censo de 1890 (antes de la gran ola de inmigrantes del sur/este de Europa), EE.UU. favorecía a los inmigrantes del norte y oeste de Europa, reflejando un fuerte sentimiento nativista y racial antes de la crisis de 1929."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["sarre", "francia", "reparaciones"]
tipo: mc
enunciado: "¿Qué implicación tuvo la ocupación de la zona del Sarre por fuerzas francesas y belgas en 1923 para la estabilidad europea?"
opciones_explicitas:
  - "Provocó la retirada inmediata de EE.UU. de la región."
  - "Generó la pasividad activa (o resistencia pasiva) alemana, hiperinflación y la ruptura de la confianza diplomática previa a Locarno."
  - "Llevó a la creación inmediata de la Sociedad de Naciones."
  - "Aseguró el pago completo de las reparaciones alemanas."
respuesta: "Generó la pasividad activa (o resistencia pasiva) alemana, hiperinflación y la ruptura de la confianza diplomática previa a Locarno."
explicacion: "La ocupación de la Ruhr/Sarre por Francia y Bélgica para asegurar reparaciones impagas llevó a Alemania a detener los pagos y fomentar la resistencia pasiva, causando hiperinflación y aislamiento diplomático, lo que debilitó la República de Weimar."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["new-deal", "seguridad-social"]
tipo: vf
enunciado: "El Seguro de Desempleo federal en Estados Unidos fue establecido inicialmente como parte de la Ley de Seguridad Social (Social Security Act) de 1935."
respuesta: verdadero
explicacion: "La Ley de Seguridad Social de 1935 creó el sistema federal de seguro de desempleo, pagado conjuntamente por empleadores y empleados, marcando el inicio de la red de seguridad social moderna en EE.UU., tras intentos previos fallidos a nivel estatal."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["economia-internacional", "genova", "libre-cambio"]
tipo: mc
enunciado: "¿Cuál fue el objetivo principal de la Conferencia Económica Internacional de Génova en 1922?"
opciones_explicitas:
  - "Establecer un arancel único para toda Europa."
  - "Restaurar la convertibilidad de las monedas europeas al patrón oro y promover el libre comercio."
  - "Imponer sanciones económicas a la Unión Soviética."
  - "Crear una unión monetaria europea."
respuesta: "Restaurar la convertibilidad de las monedas europeas al patrón oro y promover el libre comercio."
explicacion: "Génova buscaba estabilizar las monedas europeas dañadas por la guerra y reintegrar a Alemania y la URSS en la economía global, aunque sus resultados fueron limitados y muchos países mantuvieron controles de cambio por años."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["aislacionismo", "lley-neutralidad", "pre-guerra"]
tipo: completar
enunciado: "La Ley de Neutralidad de 1939 permitió a las naciones aliadas comprar armas a EE.UU. bajo la política de _______ y pago inmediato en efectivo."
respuesta: "Cash and Carry"
respuestas_validas:
  - "Cash and Carry"
  - "cash and carry"
  - "pago en efectivo y transporte propio"
  - "efectivo y transporte propio"
explicacion: "Esta política, aunque mantenía la neutralidad formal, benefició a Gran Bretaña y Francia, ya que podían transportar las armas por mar, mientras que Alemania no podía acceder a ellas debido al bloqueo naval británico."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["veteranos", "bonus", "protesta"]
tipo: mc
enunciado: "¿Qué efecto tuvo la represión de la \"Bonus Army\" por George Patton en 1932 en la opinión pública?"
opciones_explicitas:
  - "Consolidó el apoyo a Hoover como líder fuerte."
  - "Generó una ola de simpatía hacia los veteranos y aumentó la crítica a la dureza del gobierno federal ante la crisis."
  - "No tuvo impacto político significativo."
  - "Llevó a la creación inmediata del Departamento de Asuntos de Veteranos."
respuesta: "Generó una ola de simpatía hacia los veteranos y aumentó la crítica a la dureza del gobierno federal ante la crisis."
explicacion: "La marcha de veteranos desempleados que pedían el pago anticipado de su bono de guerra fue dispersada violentamente por el ejército. Esto fue visto como una crueldad injusta y contribuyó a la derrota de Hoover en 1932."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["pacto-antikomintern", "alemania", "japon", "urss"]
tipo: completar
enunciado: "El _______ Anticomintern, firmado inicialmente por Alemania y Japón en 1936, fue un acuerdo para coordinar la oposición a la influencia de la Komintern soviética."
respuesta: "Pacto"
respuestas_validas:
  - "Pacto"
  - "pacto"
  - "Anti-Comintern Pact"
  - "anti-comintern pact"
explicacion: "Inicialmente dirigido contra la URSS, este pacto sirvió para alinear a las potencias fascistas. Italia se unió después, y aunque fue una declaración ideológica, también sentó las bases para la posterior alianza del Eje."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["new-deal", "agricultura", "aaa"]
tipo: vf
enunciado: "La Ley de Ajuste Agrícola (AAA) de 1933 buscó aumentar los precios agrícolas pagando a los productores para que redujeran la producción y mataran ganado existente."
respuesta: verdadero
explicacion: "La AAA intentó combatir la deflación rural pagando a los granjeros para que dejaran de cultivar y destruyeran excedentes (ganado, cultivos). Esto fue controversial pero logró subir los precios agrícolas, aunque perjudicó a los inquilinos y trabajadores agrícolas."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["reparaciones", "lausana", "fin-reparaciones"]
tipo: mc
enunciado: "¿Qué resultado clave tuvo la Conferencia de Lausana en 1932 respecto a las reparaciones alemanas?"
opciones_explicitas:
  - "Aumentó las reparaciones un 50%."
  - "Suspendió efectivamente el pago de reparaciones de guerra, llevando a su cancelación de facto un año después."
  - "Obligó a Alemania a hipotecar sus ferrocarriles."
  - "Estableció un pago único definitivo de 10.000 millones de marcos."
respuesta: "Suspendió efectivamente el pago de reparaciones de guerra, llevando a su cancelación de facto un año después."
explicacion: "La Conferencia de Lausana suspendió los pagos de reparaciones. En 1933, se llegó a un acuerdo de facto donde Alemania no pagaría más reparaciones, liberándola de esa carga económica pero también aislándola financieramente de Occidente."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["new-deal", "vivienda", "fhla"]
tipo: completar
enunciado: "La _______ de Vivienda de Emergencia de 1933 creó la Federal Home Loan Bank para estabilizar el sector inmobiliario y facilitar el crédito hipotecario."
respuesta: "Ley"
respuestas_validas:
  - "Ley"
  - "ley"
  - "Emergency Housing Act"
  - "emergency housing act"
explicacion: "Esta ley fue parte de los primeros días del New Deal, buscando evitar los desalojos masivos y la quiebra de los bancos hipotecarios, sentando las bases para la posterior creación de la FHLB y la regulación del mercado hipotecario."
```

## Sección: golpes-de-estado-interrupciones (26 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["definicion", "politica"]

tipo: mc
opciones_explicitas: ["La toma del poder mediante procesos electorales y respeto a la constitución.", "La toma ilegítima e inconstitucional del poder político, generalmente por las fuerzas armadas.", "Un cambio de gobierno derivado de una crisis económica sin violencia.", "La renuncia voluntaria de un presidente por motivos de salud."]

enunciado: "Un golpe de Estado se define fundamentalmente como:"

respuesta: "La toma ilegítima e inconstitucional del poder político, generalmente por las fuerzas armadas."

explicacion: |
  Un golpe de Estado es una ruptura del orden constitucional donde se toma el poder de forma ilegítima, interrumpiendo el mandato de las autoridades electas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["caracteristicas", "instituciones"]

variables:
  escenarios: [["El uso de la fuerza militar para deponer al ejecutivo.", "La ocupación de edificios gubernamentales y la suspensión de la Constitución."], ["La movilización social masiva para exigir nuevas elecciones.", "La renuncia del gabinete ministerial ante una crisis parlamentaria."]]
  escenario: uno_de(escenarios)

tipo: mc
opciones_explicitas: ["Uso de mecanismos legales para cambiar al presidente.", "Uso de la fuerza o la ruptura de la legalidad para tomar el control estatal.", "Un proceso de transición democrática supervisado."]

enunciado: "En un escenario de {escenario[0]}, el elemento central que caracteriza al golpe es:"

respuesta: "Uso de la fuerza o la ruptura de la legalidad para tomar el control estatal."

explicacion: |
  La característica distintiva es la ruptura del marco legal preestablecido y el uso de medios no previstos por la norma constitucional.
```

```
metadata:
  materia: "historia_profucha"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["secuencia", "orden"]

tipo: ordenar
opciones_explicitas: ["Crisis política o social", "Acción de las fuerzas armadas o grupos de poder", "Suspensión de la Constitución", "Establecimiento de un gobierno de facto"]

enunciado: "Ordene cronológicamente los pasos típicos de una interrupción institucional clásica:"

explicacion: |
  Un golpe suele comenzar con una crisis que debilita al gobierno, seguido de la acción directa que rompe el orden legal y culmina con la instauración de un régimen no electo.
respuesta_orden: ["Crisis política o social", "Acción de las fuerzas armadas o grupos de poder", "Suspensión de la Constitución", "Establecimiento de un gobierno de facto"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "avanzado"
  tags: ["consecuencias", "derecho"]

tipo: completar
respuestas_validas:
  - "inconstitucional"
  - "ilegitima"

enunciado: "Un golpe de Estado es un acto ___ que rompe con la legitimidad ___ del mandato popular."

explicacion: |
  Al ignorar las reglas establecidas en la Carta Magna, la acción es inconstitucional y carece de legitimidad democrática.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["comparacion"]

tipo: mc
opciones_explicitas: ["El cambio de gobierno es legal y sigue las leyes; el golpe es una ruptura de estas.", "Ambos son procesos de la misma naturaleza pero con distinta duración.", "El golpe siempre es pacífico y el cambio de gobierno es violento.", "No existe diferencia técnica entre ambos conceptos."]
respuesta: "El cambio de gobierno es legal y sigue las leyes; el golpe es una ruptura de estas."

enunciado: "¿Cuál es la diferencia fundamental entre un cambio de gobierno democrático y un golpe de Estado?"

explicacion: |
  La diferencia radica en el respeto a la legalidad: el primero ocurre dentro del marco de la ley, el segundo lo destruye.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["argentina", "siglo_xx", "democracia"]

tipo: ordenar
opciones_explicitas: ["1930", "1943", "1955", "1966", "1976"]
respuesta_orden: ["1930", "1943", "1955", "1966", "1976"]

enunciado: "Ordená cronológicamente los siguientes golpes de Estado que afectaron la institucionalidad argentina en el siglo XX:"

explicacion: |
  La secuencia cronológica de las interrupciones al orden constitucional fue: 1930, 1943, 1955, 1966 y 1976.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["historia", "argentina"]

tipo: mc
opciones_explicitas: ["1930", "1945", "1955", "1976"]
respuesta: "1930"

enunciado: "¿En qué año se produjo el primer golpe de Estado que interrumpió el orden constitucional en la Argentina del siglo XX?"

explicacion: |
  El golpe de Estado de 1930 derrocó al presidente Hipólito Yrigoyen, marcando el inicio de una era de inestabilidad institucional.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["historia", "argentina"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["1955", "la Revolución Libertadora"], ["1966", "la Revolución Argentina"]]

tipo: mc
opciones_explicitas: ["1955", "1962", "1966", "1976"]
respuesta: escenarios[escenario_idx][0]

enunciado: "Identificá el año correspondiente al golpe conocido como {escenarios[escenario_idx][1]}."

explicacion: |
  El escenario seleccionado fue el de {escenarios[escenario_idx][1]}, que ocurrió en el año {escenarios[escenario_idx][0]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["historia", "argentina"]

tipo: completar
respuestas_validas:
  - "1976"
respuesta: "1976"

enunciado: "El golpe de Estado más violento y de mayor duración en términos de represión sistemática ocurrió en el año ___."

explicacion: |
  El golpe de Estado de 1976 dio inicio al proceso de dictadura militar más sangriento de la historia argentina.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "avanzado"
  tags: ["historia", "argentina", "estadistica"]

variables:
  lista_golpes: ["1930", "1943", "1955", "1962", "1966", "1976"]

tipo: completar
respuesta: 6

enunciado: "Considerando la lista de golpes mencionados en el texto: {lista_golpes}, ¿cuántas interrupciones al orden democrático se enumeran en total?"

pasos:
  - "Identificar cada año mencionado en el enunciado."
  - "Contar la cantidad de elementos en la lista proporcionada."

explicacion: |
  Se enumeran 6 golpes de Estado en la lista: 1930, 1943, 1955, 1962, 1966 y 1976.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["argentina", "democracia", "irrigoyen"]

respuesta: "1930"
tipo: "completar"
respuestas_validas:
  - "1930"

enunciado: "El primer golpe de Estado del siglo XX en Argentina, que derrocó al presidente Hipólito Yrigoyen, ocurrió en el año ___."

explicacion: |
  El golpe de 1930 marcó el inicio de un ciclo de interrupciones al orden constitucional en Argentina, rompiendo la estabilidad de la Ley Sáenz Peña.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["patrones", "militarismo"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El golpe de 1930 inició un ___ de intervenciones militares recurrentes.", "patrón"], ["El derrocamiento de Yrigoyen inauguró un ___ de inestabilidad política.", "ciclo"]]

respuesta: escenarios[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["patrón", "ciclo", "acuerdo", "proceso"]

enunciado: "{escenarios[escenario_idx][0]}"

explicacion: |
  El golpe de 1930 no fue un evento aislado, sino que inauguró un patrón de intervenciones militares que se repetiría durante gran parte del siglo XX.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["contexto", "crisis"]

respuesta: "crisis económica mundial"
tipo: "mc"
opciones_explicitas: ["crisis económica mundial", "guerra civil", "revolución industrial", "independencia"]

enunciado: "El golpe de Estado de 1930 se produjo en un contexto de profunda ___ que afectó la estabilidad del gobierno de Yrigoyen."

explicacion: |
  La crisis económica de 1929 (Gran Depresión) debilitó la estructura política y social, facilitando el levantamiento militar contra el radicalismo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "avanzado"
  tags: ["secuencia", "orden"]

respuesta_orden: ["Ley Sáenz Peña", "Derrocamiento de Yrigoyen", "Intervención militar"]
tipo: "ordenar"
opciones_explicitas: ["Ley Sáenz Peña", "Derrocamiento de Yrigoyen", "Intervención militar"]

enunciado: "Ordene cronológicamente los siguientes hitos relacionados con la estabilidad democrática argentina del siglo XX:"

explicacion: |
  Primero se establece la democracia con la Ley Sáenz Peña (1912), luego ocurre el primer golpe (1930) y esto deriva en la práctica de intervenciones militares.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["consecuencias", "democracia"]

respuesta: falso
tipo: "vf"

enunciado: "¿El golpe de 1930 fue un evento aislado que no influyó en la política argentina posterior?"

explicacion: |
  Falso. El golpe de 1930 fue el primer eslabón de una serie de interrupciones que marcaron la historia política argentina durante décadas.
```

```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["argentina", "dictadura", "1976"]

respuesta: "24 de marzo de 1976"
tipo: completar
respuestas_validas:
  - "24 de marzo de 1976"

enunciado: "El golpe de Estado que dio inicio a la última dictadura militar en Argentina ocurrió el día ___."

explicacion: |
  El 24 de marzo de 1976 se produjo el golpe de Estado que instauró un proceso de autodenominado 'Reorganización Nacional', marcando el inicio del período dictatorial más prolongado y violento de la historia argentina reciente.
```

```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["derechos_humanos", "terrorismo_de_estado"]

opciones_explicitas: ["Violación sistemática de derechos humanos", "Retorno inmediato a la democracia", "Estabilidad económica sostenida", "Pluralismo político"]

respuesta: "Violación sistemática de derechos humanos"
tipo: mc

enunciado: "Una de las características centrales y más graves del proceso de la última dictadura militar (1976-1983) fue la:"

explicacion: |
  El Estado implementó un plan sistemático de represión que incluyó la desaparición forzada de personas, la tortura y el robo de bebés, constituyendo un crimen de lesa humanidad.
```

```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["fechas", "periodo"]

respuesta_orden: ["Inicio del golpe de Estado", "Guerra de Malvinas", "Fin de la dictadura militar", "Retorno a la democracia"]
tipo: ordenar
opciones_explicitas: ["Inicio del golpe de Estado", "Fin de la dictadura militar", "Guerra de Malvinas", "Retorno a la democracia"]

enunciado: "Ordená cronológicamente los siguientes hitos relacionados con el período 1976-1983:"

pasos:
  - "Identificar el año de inicio del golpe."
  - "Identificar el año del fin del proceso dictatorial."

explicacion: |
  El proceso comenzó en 1976 y finalizó en 1983, tras la derrota en la Guerra de Malvinas y la crisis del régimen.
```

```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["fechas", "periodo"]

respuesta_orden: ["Inicio del golpe de Estado", "Guerra de Malvinas", "Fin de la dictadura militar"]
tipo: ordenar
opciones_explicitas: ["Inicio del golpe de Estado", "Guerra de Malvinas", "Fin de la dictadura militar"]

enunciado: "Ordená cronológicamente los eventos del período dictatorial:"

explicacion: |
  El orden correcto es: Inicio del golpe (1976), Guerra de Malvinas (1982) y Fin de la dictadura (1983).
```

```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "avanzado"
  tags: ["conceptos", "derechos_humanos"]

variables:
  escenario: uno_de([0,1])
  datos: [["El uso de la estructura estatal para la represión ilegal", "terrorismo de Estado"], ["La participación en elecciones libres", "democracia representativa"]]

respuesta: datos[escenario][1]
tipo: mc
opciones_explicitas: ["terrorismo de Estado", "democracia representativa"]

enunciado: "Cuando el Estado utiliza sus instituciones y fuerzas de seguridad para cometer delitos contra la población, como la desaparición de personas, se denomina:"

explicacion: |
  El término 'terrorismo de Estado' describe la acción de los gobiernos de facto para sembrar terror en la sociedad mediante la represión sistemática.
```

```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["duracion", "fechas"]

respuesta: 7
tipo: completar
tolerancia_abs: 0

enunciado: "Si la última dictadura militar en Argentina duró desde 1976 hasta 1983, ¿cuántos años duró aproximadamente este proceso de interrupción democrática?"

explicacion: |
  El proceso duró 7 años, desde el golpe de 1976 hasta la asunción de la presidencia de Raúl Alfonsín en 1983.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["argentina", "siglo_xx", "dictadura"]

variables:
  datos: [["José Félix Uriburu", "1930"], ["Agustín P. Justo", "1932"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["José Félix Uriburu", "Agustín P. Justo", "Juan Perón", "Arturo Illia"]

enunciado: "El primer golpe de Estado que interrumpió el orden constitucional en Argentina durante el siglo XX fue liderado por {datos[idx][0]} en el año {datos[idx][1]}."

explicacion: |
  El golpe de 1930 derrocó a Hipólito Yrigoyen, marcando el inicio de la denominada "Década Infame".
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "avanzado"
  tags: ["ordenar", "cronologia"]

respuesta_orden: ["Revolución Libertadora", "Revolución Argentina", "Onganía"]
tipo: ordenar
opciones_explicitas: ["Revolución Libertadora", "Revolución Argentina", "Onganía"]

enunciado: "Ordene cronológicamente los siguientes procesos/dictaduras que interrumpieron la democracia argentina entre 1955 y 1976:"

pasos:
  - "Identifique el golpe que derrocó a Perón en 1955."
  - "Identifique el proceso iniciado por Onganía en 1966."

explicacion: |
  La secuencia cronológica correcta es: Revolución Libertadora (1955), Revolución Argentina (1966) y el gobierno de facto de Onganía.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["dictadura", "proceso"]

respuesta: "Proceso de Reorganización Nacional"
tipo: completar
respuestas_validas:
  - "Proceso de Reorganización Nacional"

enunciado: "El golpe de Estado iniciado el 24 de marzo de 1976 fue autodenominado por la junta militar como el ___."

explicacion: |
  El Proceso de Reorganización Nacional fue la dictadura más sangrienta de la historia argentina.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["liderazgo", "militar"]

variables:
  datos: [["Videla", "1976"], ["Anaya", "1981"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["Videla", "Anaya", "Galtieri", "Borda"]

enunciado: "El líder de la junta militar durante el inicio del golpe de {datos[idx][1]} fue {datos[idx][0]}."

explicacion: |
  Jorge Rafael Videla encabezó la dictadura que comenzó en 1976.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["democracia", "retorno"]

respuesta: "Alfonsín"
tipo: mc
opciones_explicitas: ["Alfonsín", "Menem", "Duhalde", "De la Rúa"]

enunciado: "Tras la caída de la dictadura militar en 1983, el primer presidente elegido fue ___."

explicacion: |
  Raúl Alfonsín asumió la presidencia en 1983, marcando el retorno a la democracia tras la dictadura.
```

