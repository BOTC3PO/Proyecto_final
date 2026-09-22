# Examen jefe — [PENDIENTE #685]

> Logro #685. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

---

## Sección: datacion-radiometrica (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["isótopos", "desintegración", "conceptos"]

respuesta: "vida media"
tipo: completar

enunciado: "El tiempo necesario para que la mitad de los núcleos de un isótopo radiactivo se desintegren se denomina ___."

respuestas_validas:
  - "vida media"

explicacion: |
  La vida media (o periodo de semidesintegración) es el tiempo constante en el que la cantidad de un isótopo radiactivo se reduce a la mitad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["calculo", "isótopos", "tiempo"]

variables:
  idx: uno_de([0, 1])
  datos: [["Carbono-14", 5730], ["Potasio-40", 1250000000]]

respuesta: "0.5"
tipo: mc
opciones_explicitas: ["0.5", "0.25", "0.125", "0.0625"]

enunciado: "Si un isótopo tiene una vida media de {datos[idx][1]} años, ¿qué fracción de la muestra original de {datos[idx][0]} restará exactamente después de una vida media?"

explicacion: |
  Por definición, tras transcurrir un periodo de vida media, la cantidad de la sustancia original se reduce exactamente a la mitad (0.5) de su valor inicial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "avanzado"
  tags: ["calculo", "logaritmos", "geocronologia"]

variables:
  idx: uno_de([0, 1])
  escenario: [["200", "0.25", 2], ["400", "0.0625", 4]]

respuesta: escenario[idx][0]
tipo: completar
tolerancia_abs: 0.1

enunciado: "Se analiza una muestra donde la fracción del isótopo original remanente es de {escenario[idx][1]}. Si se sabe que han pasado {escenario[idx][2]} vidas medias, ¿cuál es la edad de la muestra en años (asumiendo una vida media de 100 años para este ejemplo hipotético)?"

pasos:
  - "Identificar la fracción remanente."
  - "Determinar cuántos periodos de vida media han pasado."
  - "Multiplicar el número de periodos por la duración de la vida media."

explicacion: |
  Si la fracción es 0.25 y han pasado 2 periodos (en el caso 1), la edad es 2 * 100 = 200. En el caso 2, con fracción 0.0625 y 4 periodos, la edad es 4 * 100 = 400.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["secuencia", "isótopos"]

respuesta_orden: ["Isótopo de vida larga", "Isótopo de vida media", "Isótopo de vida corta"]
tipo: ordenar
opciones_explicitas: ["Isótopo de vida larga", "Isótopo de vida media", "Isótopo de vida corta"]

enunciado: "Ordene los siguientes isótopos de mayor a menor estabilidad (de mayor a menor vida media):"

explicacion: |
  Los isótopos con vidas medias más largas son más estables y se utilizan para datar eventos geológicos muy antiguos, mientras que los de vida corta sirven para eventos recientes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["teoria", "constante"]

tipo: vf
respuesta: verdadero

enunciado: "¿Es la tasa de desintegración de un isótopo radiactivo una constante que no depende del tiempo ni de la cantidad de muestra presente?"

explicacion: |
  La probabilidad de desintegración de un núcleo individual es constante, lo que da lugar a una tasa de desintegración constante para una muestra dada, permitiendo la datación precisa.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["carbono-14", "datacion"]

enunciado: "El método de datación por Carbono-14 es útil para datar materia orgánica con una antigüedad máxima de aproximadamente ___ años."

respuestas_validas:
  - "50000"
tipo: completar

explicacion: |
  El Carbono-14 tiene una vida media de aproximadamente 5730 años. Después de unos 50,000 años, la cantidad de isótopo remanente es tan pequeña que no puede medirse con precisión, marcando el límite de este método.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["carbono-14", "vida_media"]

variables:
  idx: uno_de([0, 1])
  datos: [["5730", "5730"], ["5730", "5730"]]

enunciado: "La vida media del isótopo Carbono-14 es de aproximadamente {datos[idx][0]} años."

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 10

explicacion: |
  La vida media es el tiempo necesario para que la mitad de los núcleos de un isótopo radiactivo se desintegren. Para el C-14 es de ~5730 años.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["uranio", "potasio", "rocas"]

enunciado: "¿Qué método es preferible para datar rocas de una antigüedad muy superior a los 50,000 años?"

opciones_explicitas: ["Carbono-14", "Uranio-Plomo", "Oxígeno-16"]
respuesta: "Uranio-Plomo"
tipo: mc

explicacion: |
  Para materiales muy antiguos como rocas, se requieren isótopos con vidas medias mucho más largas, como el sistema Uranio-Plomo o Potasio-Argón.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["isótopos", "datacion"]

enunciado: "Relaciona el isótopo con el tipo de material que se puede datar:"

pasos:
  - "Carbono-14 -> Materia orgánica"
  - "Uranio-Plomo -> Rocas antiguas"
  - "Potasio-Argón -> Rocas antiguas"

opciones_explicitas: ["Carbono-14 -> Materia orgánica", "Uranio-Plomo -> Rocas antiguas", "Potasio-Argón -> Rocas antiguas"]
respuesta_orden: ["Carbono-14 -> Materia orgánica", "Uranio-Plomo -> Rocas antiguas", "Potasio-Argón -> Rocas antiguas"]
tipo: ordenar

explicacion: |
  La elección del isótopo depende de la escala de tiempo: el C-14 para arqueología (orgánicos) y otros isótopos para geocronología (rocas).
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "avanzado"
  tags: ["metodologia", "geologia"]

variables:
  idx: uno_de([0, 1])
  escenario: [["fósil de madera de 40,000 años", "carbono-14"], ["cristal de circón en roca de 1,000 millones de años", "uranio-plomo"]]

enunciado: "Si un arqueólogo encuentra {escenario[idx][0]}, el método más adecuado de datación sería el de {escenario[idx][1]}."

respuesta: escenario[idx][1]
tipo: mc

opciones_explicitas: ["uranio-plomo", "potasio-argón", "carbono-14"]

explicacion: |
  El escenario determina la escala temporal. Si el objeto es muy antiguo (roca), el C-14 no sirve; si es madera (orgánico) dentro del rango, el C-14 es ideal.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["conceptos", "radioactividad"]

tipo: mc
opciones_explicitas: ["El tiempo que tarda una muestra en perder la mitad de sus átomos radiactivos.", "El tiempo que tarda una muestra en duplicar su masa total.", "El tiempo que tarda un átomo en transformarse en un átomo de oro.", "El tiempo que tarda la radiación en viajar una unidad de distancia."]
respuesta: "El tiempo que tarda una muestra en perder la mitad de sus átomos radiactivos."
enunciado: "En el contexto de la datación radiométrica, ¿qué se entiende por 'vida media'?"
explicacion: |
  La vida media es el intervalo de tiempo necesario para que la cantidad de un radioisótopo en una muestra se reduzca exactamente a la mitad de su valor inicial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["porcentajes", "decaimiento"]

tipo: mc
opciones_explicitas: ["50%", "75%", "25%", "0%"]
respuesta: "50%"

enunciado: "Si una muestra de un isótopo radiactivo ha transcurrido exactamente una vida media, ¿qué porcentaje de los átomos originales permanece en la muestra?"

explicacion: |
  Por definición, tras una vida media, la mitad (50%) de los átomos originales se ha desintegrado, dejando el otro 50% restante.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["calculo", "exponencial"]

variables:
  idx: uno_de([0, 1])
  escenarios: [["dos", "25%"], ["tres", "12.5%"]]

tipo: completar
respuestas_validas:
  - "25%"
  - "12.5%"
respuesta: escenarios[idx][1]

enunciado: "Si una muestra ha transcurrido {escenarios[idx][0]} vidas medias, el porcentaje de átomos originales que queda es ___."

explicacion: |
  La cantidad de material sigue una progresión geométrica: 100% -> 50% (1 vida media) -> 25% (2 vidas medias) -> 12.5% (3 vidas medias).
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "avanzado"
  tags: ["calculo", "tiempo"]

variables:
  datos: [[100, 50, 50], [80, 40, 40], [60, 30, 30]]
  idx: uno_de([0, 1, 2])

tipo: completar
tolerancia_abs: 0.1

enunciado: "Una muestra contiene {datos[idx][0]} unidades de un isótopo con una vida media de {datos[idx][1]} años. Si actualmente quedan {datos[idx][2]} unidades, ¿cuántos años han transcurrido?"

pasos:
  - "Identificar cuántas vidas medias han pasado comparando la cantidad inicial y la final."
  - "Multiplicar el número de vidas medias por el valor de la vida media en años."

explicacion: |
  En el caso seleccionado, la muestra pasó de {datos[idx][0]} a {datos[idx][2]}, lo que representa exactamente una vida media. Por lo tanto, han pasado {datos[idx][1]} años.

respuesta: datos[idx][1]
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["secuencia", "progresion"]

tipo: ordenar
opciones_explicitas: ["100%", "50%", "25%", "12.5%", "6.25%"]
respuesta_orden: ["100%", "50%", "25%", "12.5%", "6.25%"]

enunciado: "Ordene las siguientes cantidades de material radiactivo restante, desde la muestra original (sin decaimiento) hasta después de cuatro vidas medias:"

explicacion: |
  El decaimiento radiactivo reduce la muestra a la mitad en cada paso: 100% $\rightarrow$ 50% $\rightarrow$ 25% $\rightarrow$ 12.5% $\rightarrow$ 6.25%.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["carbono-14", "vida_media", "geocronologia"]

respuesta: "vida media"
tipo: completar
respuestas_validas:
  - "vida media"
  - "vida-media"

enunciado: "El método de datación por Carbono-14 no es útil para datar fósiles de dinosaurios de hace millones de años debido a que su ___ es demasiado corta."

explicacion: |
  El Carbono-14 tiene una vida media de aproximadamente 5730 años. Después de unos 50,000 años, la cantidad de isótopo remanente es tan pequeña que es imposible de medir con precisión, por lo que no sirve para escalas de tiempo geológicas profundas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["carbono-14", "isótopos", "geocronologia"]

opciones_explicitas: ["La cantidad de C-14 es demasiado pequeña para ser medida", "La cantidad de C-14 es demasiado grande", "El C-14 es un isótopo muy estable", "El C-14 solo se encuentra en rocas"]

respuesta: "La cantidad de C-14 es demasiado pequeña para ser medida"
tipo: mc

enunciado: "Si intentamos datar una roca de 100 millones de años usando el método del Carbono-14, ¿cuál es el problema principal?"

explicacion: |
  Debido a su vida media de 5730 años, tras millones de años, prácticamente todos los átomos de C-14 se han desintegrado. No queda señal detectable para realizar el cálculo.
```

```
metadata:
  materia: "historia_profucha"
  tema: "datacion_radiometrica"
  nivel: "avanzado"
  tags: ["isótopos", "vida_media", "comparacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Carbono-14", "5730 años", "Fósiles orgánicos recientes"], ["Uranio-238", "4468 millones de años", "Rocas muy antiguas"]]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "5730 años"
  - "4468 millones de años"

enunciado: "Para datar el escenario de {datos[escenario_idx][0]}, se utiliza un isótopo con una vida media de {datos[escenario_idx][1]}. Sin embargo, para {datos[escenario_idx][2]}, se requiere un isótopo con una vida media mucho mayor."

explicacion: |
  La elección del isótopo depende de la escala de tiempo: el C-14 es para arqueología (reciente) y el Uranio-238 para geocronología (antigua).
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["proceso", "datacion", "isótopos"]

opciones_explicitas: ["La muestra se vuelve demasiado vieja", "El isótopo se vuelve demasiado estable", "La muestra se vuelve demasiado joven", "El isótopo se vuelve demasiado radiactivo"]

respuesta: "La muestra se vuelve demasiado vieja"
tipo: mc

enunciado: "En el contexto de la datación radiométrica, cuando el tiempo transcurrido supera con creces la vida media de un isótopo como el C-14, la muestra se vuelve:"

explicacion: |
  Al no quedar isótopos detectables, la muestra es "demasiado vieja" para el método, perdiendo su utilidad analítica para ese isótopo específico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["conceptos", "tiempo"]

respuesta: "corto"
tipo: completar
respuestas_validas:
  - "corto"
  - "breve"

enunciado: "El Carbono-14 tiene un tiempo de vida media muy ___ comparado con los procesos geológicos que forman las rocas de la corteza terrestre."

explicacion: |
  El contraste entre la escala de miles de años (C-14) y la de millones/billones de años (geología) es la razón por la cual el C-14 es inaplicable en la datación de rocas antiguas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["isotopos", "carbono-14"]

variables:
  idx: uno_de([0, 1, 2])
  masas_iniciales: [100, 200, 400]

respuesta: "25%"
tipo: mc
opciones_explicitas: ["25%", "50%", "75%", "100%"]

enunciado: "Una muestra orgánica contiene {masas_iniciales[idx]} g de Carbono-14. Si han transcurrido exactamente 2 vidas medias, ¿qué porcentaje de la masa inicial de este isótopo permanece en la muestra?"

explicacion: |
  Tras una vida media, queda el 50%. Tras dos vidas medias, queda el 50% del 50%, es decir, el 25%.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "avanzado"
  tags: ["uranio", "geocronologia"]

variables:
  datos: [[80, "10"], [160, "20"], [320, "40"]]
  idx: uno_de([0, 1, 2])
  m_i: datos[idx][0]
  m_f: datos[idx][1]

tipo: completar
respuestas_validas:
  - "3"

enunciado: "Se analiza una roca con una masa inicial de {m_i} g de un isótopo radiactivo. Si tras el paso del tiempo la masa remanente es de {m_f} g, ¿cuántas vidas medias han transcurrido?"

pasos:
  - "Identificar la fracción remanente: m_f / m_i"
  - "Determinar cuántas veces se debe dividir la masa inicial por 2 para llegar a la masa final"

explicacion: |
  La relación es m_f = m_i * (1/2)^n. En todos los casos presentados, la masa se redujo a una octava parte, lo que equivale a 3 vidas medias.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["potasio-40", "calculo"]

variables:
  caso: [[1000, "125"], [500, "62.5"], [800, "100"]]
  idx: uno_de([0, 1, 2])
  m_ini: caso[idx][0]
  m_res: caso[idx][1]

tipo: completar
tolerancia_abs: 0.1

enunciado: "Un fósil contiene {m_ini} mg de Potasio-40. Si han transcurrido 3 vidas medias, ¿cuántos mg de este isótopo quedan en el fósil?"

respuesta: m_res

explicacion: |
  La fórmula es masa_final = masa_inicial / (2^n). Para n=3, dividimos por 8.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["conceptos"]

tipo: mc
opciones_explicitas: ["se reduce a la mitad", "se duplica", "se mantiene constante", "desaparece por completo"]
respuesta: "se reduce a la mitad"

enunciado: "En un proceso de datación radiométrica, ¿qué sucede con la cantidad de un isótopo radiactivo tras transcurrir exactamente una vida media?"

explicacion: |
  Por definición, la vida media es el tiempo necesario para que la mitad de los núcleos de un isótopo se desintegren.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["orden", "conceptos"]

tipo: ordenar
opciones_explicitas: ["100%", "50%", "25%", "12.5%", "6.25%"]

enunciado: "Ordene de mayor a menor la cantidad de isótopo remanente tras 0, 1, 2, 3 y 4 vidas medias respectivamente."

explicacion: |
  Cada vida media reduce la cantidad a la mitad de la anterior: 100% -> 50% -> 25% -> 12.5% -> 6.25%.
respuesta_orden: ["100%", "50%", "25%", "12.5%", "6.25%"]
```

## Sección: descolonizacion-de-africa-y-asia (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["indochina", "francia", "vietnam", "1954"]
enunciado: "El colapso del dominio colonial francés en Indochina se consolidó tras la derrota en la batalla de Dien Bien Phu y la firma de los acuerdos que dividieron temporalmente el territorio en dos zonas militares. ¿En qué año se firmaron estos acuerdos?"
tipo: completar
respuesta: "1954"
respuestas_validas:
  - "1954"
  - "1954."
explicacion: "Los Acuerdos de Ginebra se firmaron en julio de 1954, estableciendo el cese del fuego y la división de Vietnam a lo largo del paralelo 17."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["bandung", "no-alineados", "1955", "solidaridad"]
enunciado: "En 1955, se reunió en Indonesia una histórica asamblea de estados asiáticos y africanos que buscaba promover la cooperación económica y cultural y oponerse al colonialismo. ¿Cómo se denominó esta conferencia fundacional del movimiento de Países No Alineados?"
tipo: completar
respuesta: "bandung"
respuestas_validas:
  - "bandung"
  - "Bandung"
  - "conferencia de bandung"
  - "Conferencia de Bandung"
explicacion: "La Conferencia de Bandung fue un hito en la historia de la descolonización, sentando las bases para la futura solidaridad del Sur global."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["ghana", "nkrumah", "independencia", "1957"]
enunciado: "Ghana fue el primer país de África subsahariana en obtener la independencia de la metropoli británica en 1957, bajo el liderazgo carismático de un político que promovió el panaficanismo. ¿Quién fue este líder?"
tipo: completar
respuesta: "kwame nkrumah"
respuestas_validas:
  - "kwame nkrumah"
  - "Kwame Nkrumah"
  - "nkrumah"
  - "Nkrumah"
explicacion: "Kwame Nkrumah lideró la Gold Coast hacia la independencia como Ghana y se convirtió en su primer primer ministro y presidente."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["argelia", "francia", "colonialismo", "1945"]
enunciado: "En mayo de 1945, mientras se celebraba la victoria aliada en la Segunda Guerra Mundial, estallaron violentos disturbios en Argelia que fueron reprimidos brutalmente por las fuerzas coloniales francesas, marcando el inicio del camino hacia la guerra de independencia. ¿En qué ciudad argelina ocurrió el brote inicial de esta masacre?"
tipo: completar
respuesta: "setif"
respuestas_validas:
  - "setif"
  - "Sétif"
  - "setif"
  - "Sétif"
explicacion: "La masacre de Sétif (y Guelma) de 1945 fue un punto de inflexión donde la contradicción entre los ideales democráticos aliados y el colonialismo francés se hizo evidente."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["india", "pakistan", "montbatten", "1947"]
enunciado: "El plan que definió la partición del subcontinente indio en dos dominios independientes, India y Pakistán, fue anunciado en junio de 1947 por el último virrey británico. ¿Quién fue este virrey responsable de la transición?"
tipo: completar
respuesta: "louis mountbatten"
respuestas_validas:
  - "louis mountbatten"
  - "Louis Mountbatten"
  - "mountbatten"
  - "Mountbatten"
explicacion: "Lord Louis Mountbatten diseñó el calendario acelerado para la independencia y la partición, lo que resultó en una de las mayores migraciones forzadas de la historia."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["chipre", "britania", "grecia", "turquia"]
enunciado: "La independencia de Chipre en 1960 fue el resultado de acuerdos entre el Reino Unido, Grecia y Turquía. Este proceso puso fin a la enosis (unión con Grecia) y la taksim (partición). ¿Qué isla mediterránea fue el objeto de este proceso descolonizador?"
tipo: completar
respuesta: "chipre"
respuestas_validas:
  - "chipre"
  - "Chipre"
explicacion: "Chipre logró su independencia bajo un tratado que garantizaba la protección de las comunidades turcochipriota y griegochipriota, aunque con bases soberanas británicas."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["india", "china", "tibet", "1954"]
enunciado: "En 1954, India y China firmaron el Tratado de Amity y Coordinación, que incluía los Cinco Principios de la Coexistencia Pacífica. Este tratado fue significativo porque la primera parte lo negoció un líder de un país recién independiente que reclamaba la soberanía sobre un territorio del Himalaya que China disputaba. ¿Qué territorio fue el foco de esta disputa inicial en el tratado?"
tipo: completar
respuesta: "tibet"
respuestas_validas:
  - "tibet"
  - "Tibet"
explicacion: "India reconoció la soberanía china sobre Tibet en el tratado, pero luego la invasión china de 1950-51 y la posterior guerra de 1962 invalidaron la confianza en estos principios."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["canal de suez", "egipto", "israel", "1956"]
enunciado: "La nacionalización del Canal de Suez por Gamal Abdel Nasser en 1956 provocó una invasión coordinada por Israel, Reino Unido y Francia. ¿En qué mes y año comenzó esta guerra que demostró el fin de la hegemonía colonial europea directa en la región?"
tipo: completar
respuesta: "octubre 1956"
respuestas_validas:
  - "octubre 1956"
  - "octubre de 1956"
  - "1956"
  - "octubre"
explicacion: "La crisis de Suez (1956) marcó el declive final de Gran Bretaña y Francia como potencias globiales independentes, obligadas a retirarse bajo presión de EE.UU. y la URSS."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["indonesia", "holanda", "sukarno", "independencia"]
enunciado: "Indonesia proclamó su independencia en 1945, pero los Países Bajos no reconocieron formalmente la soberanía hasta 1949 tras una guerra de guerrillas y presión diplomática. ¿Quién fue el primer presidente de Indonesia y figura central del nacionalismo indonesio?"
tipo: completar
respuesta: "sukarno"
respuestas_validas:
  - "sukarno"
  - "Sukarno"
explicacion: "Sukarno fue el arquitecto de la independencia indonesia y un líder clave del Movimiento de Países No Alineados."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["malaya", "emergencia", "comunistas", "britania"]
enunciado: "Antes de la independencia de Malaya en 1957, el Reino Unido enfrentó una insurgencia armada liderada principalmente por el Partido Comunista de Malaya. ¿Cómo se denominó oficialmente este conflicto de baja intensidad que duró desde 1948 hasta 1960?"
tipo: completar
respuesta: "emergencia de malaya"
respuestas_validas:
  - "emergencia de malaya"
  - "Emergencia de Malaya"
  - "la emergencia"
explicacion: "La 'Emergencia' fue un ejemplo de guerra contrainsurgente donde las fuerzas britanas combinaron tácticas militares con la reubicación de la población rural china malaya."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["marruecos", "francia", "sultan", "1956"]
enunciado: "Marruecos logró su independencia de Francia en 1956 mediante negociaciones políticas que restauraron el poder del monarca. ¿Quién fue el sultán que se convirtió en rey y símbolo de la unidad nacional marroquí?"
tipo: completar
respuesta: "mohammed v"
respuestas_validas:
  - "mohammed v"
  - "Mohammed V"
  - "muhammad v"
  - "Muhammad V"
explicacion: "Mohammed V (Sidi Mohammed ben Youssef) fue exiliado por los franceses en 1953 por su activismo nacionalista, pero su regreso precipitó la independencia."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["birmania", "britania", "u nu", "independencia"]
enunciado: "Birmania fue el primer país de la Commonwealth en abandonar la unión al obtener la independencia en 1948, un año antes que la India. ¿Quién fue el primer ministro birmano que negoció la independencia con Clement Attlee y luego lideró el país?"
tipo: completar
respuesta: "u nu"
respuestas_validas:
  - "u nu"
  - "U Nu"
explicacion: "U Nu negoció la independencia bajo la condición de que Birmania no se uniera a la Commonwealth, manteniendo una política de no alineamiento."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["ceilan", "sri lanka", "britania", "1958"]
enunciado: "Aunque Ceilán (actual Sri Lanka) obtuvo la independencia en 1948 de forma relativamente pacífica, las tensiones étnicas entre cingaleses y tamiles estallaron violentamente años después. ¿En qué año ocurrieron los primeros disturbios intercomunitarios masivos en la isla?"
tipo: completar
respuesta: "1958"
respuestas_validas:
  - "1958"
  - "1958."
explicacion: "Los disturbios de 1958 marcaron el inicio de la violencia política estructurada basada en la identidad étnica en Sri Lanka."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["turquia", "imperio otomano", "mustafa kemal", "1923"]
enunciado: "Aunque anterior a la ola principal de descolonización del siglo XX, este tratado puso fin formalmente al Imperio Otomano y estableció la República de Turquía como un estado soberano moderno. ¿En qué ciudad suiza se firmó este tratado?"
tipo: completar
respuesta: "lausana"
respuestas_validas:
  - "lausana"
  - "Lausana"
  - "lausanne"
  - "Lausanne"
explicacion: "El Tratado de Lausana (1923) fue un precedente crucial de autodeterminación nacional que inspiró a movimientos nacionalistas en Asia y África."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["kenia", "mau mau", "jomo kenatta", "independencia"]
enunciado: "Kenia luchó una guerra de liberación contra el dominio británico, conocida como la Rebelión Mau-Mau, antes de obtener la independencia en 1963. ¿Quién fue el líder nacionalista que se convirtió en el primer presidente de Kenia?"
tipo: completar
respuesta: "jomo kenatta"
respuestas_validas:
  - "jomo kenatta"
  - "Jomo Kenyatta"
  - "kenyatta"
  - "Kenyatta"
explicacion: "Jomo Kenyatta fue encarcelado por los británicos durante la rebelión Mau-Mau, pero luego se convirtió en la figura unificadora de la independencia."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["argelia", "francia", "evian", "1962"]
enunciado: "Tras ocho años de guerra brutal, Francia y los nacionalistas argelinos (FLN) firmaron unos acuerdos que pusieron fin al conflicto y permitieron la independencia de Argelia. ¿En qué ciudad francesa se firmaron estos acuerdos en marzo de 1962?"
tipo: completar
respuesta: "evian"
respuestas_validas:
  - "evian"
  - "Évian"
  - "evian-les-bains"
  - "Évian-les-Bains"
explicacion: "Los Acuerdos de Évian-Les-Bains establecieron el cese al fuego y el referéndum de independencia que se celebró poco después."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["etiopia", "italia", "ocupacion", "1941"]
enunciado: "A diferencia de la mayoría de los países africanos, Etiopía fue solo brevemente ocupada por Italia fascista. ¿En qué año las fuerzas aliadas y los patriotas etíopes liberaron Addis Abeba, restaurando la soberanía etíope?"
tipo: completar
respuesta: "1941"
respuestas_validas:
  - "1941"
  - "1941."
explicacion: "La liberación de 1941 reafirmó a Etiopía como un símbolo de resistencia anticolonial en África, aunque mantuvo su estatus de monarquía hasta 1974."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["francia", "africa", "colonialismo", "1944"]
enunciado: "En 1944, el general de Gaulle convocó una conferencia en la capital de la África Ecuatorial Francesa para discutir el futuro de las colonias. ¿Qué ciudad fue sede de esta conferencia que prometía reformas pero rechazaba la independencia inmediata?"
tipo: completar
respuesta: "brazzaville"
respuestas_validas:
  - "brazzaville"
  - "Brazzaville"
explicacion: "La Conferencia de Brazzaville fue un intento de reformar el imperio colonial francés sin conceder la autodeterminación política total."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["tanganyika", "nyerere", "tanzania", "independencia"]
enunciado: "Tanganyika obtuvo la independencia de Gran Bretaña en 1961. Su líder, conocido por su filosofía de 'Ujamaa' (familia), se convirtió en el primer presidente. ¿Quién fue este líder?"
tipo: completar
respuesta: "julius nyerere"
respuestas_validas:
  - "julius nyerere"
  - "Julius Nyerere"
  - "nyerere"
  - "Nyerere"
explicacion: "Julius Nyerere fue un intelectual y líder socialista que unió Tanganyika con Zanzíbar para formar Tanzania."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["senegal", "francia", "veteranos", "1944"]
enunciado: "En diciembre de 1944, en las afueras de Dakar, las tropas coloniales francesas dispararon contra sus propios camaradas veteranos que reclamaban sus pagas y licencias. ¿En qué localidad senegalesa ocurrió esta masacre?"
tipo: completar
respuesta: "thiaroye"
respuestas_validas:
  - "thiaroye"
  - "Thiaroye"
  - "thiaroye sur mer"
  - "Thiaroye-sur-Mer"
explicacion: "La masacre de Thiaroye simbolizó la traición de las potencias coloniales hacia los soldados africanos que habían luchado por la libertad en Europa."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["argelia", "argel", "francia", "1961"]
enunciado: "En abril de 1961, se intentó negociar un alto el fuego entre el gobierno francés y el FLN argelino en una villa en las afueras de Argel. ¿En qué localidad se celebraron estas conversaciones fallidas?"
tipo: completar
respuesta: "finkenstein"
respuestas_validas:
  - "finkenstein"
  - "Finkenstein"
  - "finkenstein-sur-mer"
  - "Finkenstein-sur-Mer"
explicacion: "Las conversaciones de Finkenstein-sur-Mer fracasaron debido a la intransigencia de la OAS (Organización del Ejército Secreto) y la desconfianza mutua."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["libia", "italia", "onu", "1951"]
enunciado: "Libia fue el único país africano que obtuvo la independencia a través de una resolución de la ONU que estableció un reino constitucional. ¿Quién fue el primer rey de Libia y líder de la dinastía Idrisida?"
tipo: completar
respuesta: "idris"
respuestas_validas:
  - "idris"
  - "Idris"
  - "idris i"
  - "Idris I"
explicacion: "El Rey Idris I gobernó Libia hasta 1969, cuando fue derrocado por Muamar Gadafi en un golpe de estado."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["birmania", "britania", "independencia", "1947"]
enunciado: "Justo antes de la independencia de Birmania, estallaron disturbios comunitarios en una ciudad importante. Aunque menos conocida que otras, la violencia en 1947 marcó las tensiones étnicas tempranas. Sin embargo, un evento más simbólico de la transición fue la ejecución de un líder nacionalista birmano por parte de los británicos en 1947. ¿Quién fue este líder ejecutado?"
tipo: completar
respuesta: "aung san"
respuestas_validas:
  - "aung san"
  - "Aung San"
explicacion: "Aung San fue negociado la independencia pero fue asesinado antes de su implementación, convirtiéndose en un héroe nacional."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["iran", "britania", "petroleo", "mosaddeq"]
enunciado: "En 1951, Irán nacionalizó su industria petrolera, desafiando los intereses de la Anglo-Iranian Oil Company. El primer ministro iraní que lideró esta resistencia fue derrocado en un golpe de estado en 1953 apoyado por EE.UU. y el Reino Unido. ¿Quién fue este primer ministro?"
tipo: completar
respuesta: "mohammad mosaddeq"
respuestas_validas:
  - "mohammad mosaddeq"
  - "Mohammad Mosaddeq"
  - "mosaddeq"
  - "Mosaddeq"
explicacion: "La nacionalización petrolera irana fue un acto de soberanía económica que desafió el neocolonialismo occidental en Oriente Medio."
```

```
metadata:
  materia: "historia_profunda"
  tema: "descolonizacion-de-africa-y-asia"
  nivel: "avanzado"
  tags: ["india", "segunda guerra mundial", "transporte", "1943"]
enunciado: "Durante la Segunda Guerra Mundial, el transporte de tropas indias sufrió una tragedia marítima masiva. El buque SS Mendi fue hundido por un submarino alemán en 1943, causando cientos de muertes entre soldados del Cuerpo de Trabajo Indio. ¿Qué nacionalidad tenían las víctimas principales de este desastre?"
tipo: mc
opciones_explicitas:
  - "Pacistaníes"
  - "Indios"
  - "Bangladesíes"
  - "Sri Lankeses"
respuesta: "Indios"
explicacion: "Las víctimas eran soldados y trabajadores indios del Imperio Británico, recordados como héroes en la historia militar de la India."
```

## Sección: distribucion-biomas (25 preguntas)

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["conceptos", "ecologia"]

tipo: mc
opciones_explicitas: ["Una agrupación de especies animales y vegetales en un área determinada.", "Una gran región con clima, vegetación y fauna característicos.", "Un conjunto de suelos con propiedades químicas similares.", "La suma de todos los ecosistemas de un continente."]

enunciado: "Un bioma se define como ___."

respuesta: "Una gran región con clima, vegetación y fauna característicos."

explicacion: |
  Un bioma es una unidad ecológica de gran escala que se caracteriza por tener un clima, un tipo de vegetación y una fauna específicos que se repiten en diferentes partes del planeta.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["factores_climaticos"]

tipo: mc
opciones_explicitas: ["La altitud y la presión atmosférica.", "La latitud y el clima.", "La distancia a la costa y la humedad.", "La actividad volcánica y el relieve."]
enunciado: "La distribución de los biomas en la superficie terrestre está determinada principalmente por:"
respuesta: "La latitud y el clima."
explicacion: |
  La latitud determina la radiación solar recibida, lo cual, junto con la humedad y la temperatura (clima), define el tipo de vegetación y el bioma resultante.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["ejemplos", "clasificacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Selva Tropical", "Desierto"], ["Altas precipitaciones y calor constante", "Escasez extrema de agua y temperaturas extremas"]]

tipo: completar
respuestas_validas:
  - "Selva Tropical"
  - "Desierto"

enunciado: "El bioma caracterizado por {escenarios[escenario_idx][1]} es la {escenarios[escenario_idx][0]}."

explicacion: |
  El usuario debe identificar el bioma basado en la descripción climática proporcionada.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["clima", "vegetacion"]

tipo: completar
respuestas_validas:
  - "Tundra"

enunciado: "El bioma de clima frío, con suelos congelados (permafrost) y vegetación de musgos y líquenes, se denomina ___."

explicacion: |
  La Tundra se caracteriza por condiciones climáticas extremas de frío y la presencia de permafrost, lo que impide el crecimiento de árboles grandes.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "avanzado"
  tags: ["jerarquia", "ecologia"]

tipo: ordenar
opciones_explicitas: ["Individuo", "Población", "Comunidad", "Ecosistema", "Bioma"]

enunciado: "Ordene de menor a mayor complejidad los niveles de organización ecológica que conforman la estructura de un bioma:"

explicacion: |
  La jerarquía parte desde el organismo individual, pasa por grupos de la misma especie (población), interacciones entre especies (comunidad), la relación con el medio físico (ecosistema) y finalmente la escala global (bioma).
respuesta_orden: ["Individuo", "Población", "Comunidad", "Ecosistema", "Bioma"]
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["latitud", "clima"]

respuesta: "latitud"
tipo: mc
opciones_explicitas: ["latitud", "altitud", "densidad_poblacion", "geologia"]

enunciado: "La distribución de los biomas en la superficie terrestre sigue patrones principales determinados por la ___, debido a la inclinación del eje terrestre y el ángulo de incidencia de la radiación solar."

explicacion: |
  La latitud determina la cantidad de radiación solar que recibe una superficie, creando franjas climáticas que definen los biomas.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["altitud", "gradiente_termico"]

respuesta: "disminución de temperatura"
tipo: completar
respuestas_validas:
  - "disminución de temperatura"

enunciado: "Al aumentar la altitud en una montaña, se produce un gradiente térmico donde ocurre una ___."

explicacion: |
  A mayor altitud, la presión atmosférica disminuye y la temperatura desciende, lo que puede cambiar el bioma local (piso térmico).
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["latitud", "zonas_climaticas"]

variables:
  datos: uno_de([["Ecuador", "Selva Tropical"], ["Zonas Templadas", "Bosques Caducifolios"], ["Polos", "Tundra"]])

respuesta: datos[1]
tipo: mc
opciones_explicitas: ["Selva Tropical", "Bosques Caducifolios", "Tundra", "Desierto"]

enunciado: "En las zonas de {datos[0]}, el bioma predominante suele ser el de {datos[1]}."

explicacion: |
  La radiación solar constante en el ecuador permite el desarrollo de biomas con alta biodiversidad y precipitaciones abundantes.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "avanzado"
  tags: ["altitud", "zonas_verticales"]

respuesta_orden: ["Bosque de niebla", "Páramo", "Superpáramo", "Nieves perpetuas"]
tipo: ordenar
opciones_explicitas: ["Bosque de niebla", "Páramo", "Superpáramo", "Nieves perpetuas"]

enunciado: "Ordene los siguientes biomas de montaña desde la menor hasta la mayor altitud (de la base a la cima):"

explicacion: |
  La altitud genera una zonificación vertical donde la vegetación cambia según la temperatura y la presión.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["factores", "clima"]

respuesta: 2
tipo: completar
tolerancia_abs: 0

enunciado: "Si sumamos los dos factores principales que determinan la distribución de biomas: la latitud (1) y la altitud (1), el resultado es: ___"

explicacion: |
  Ambos factores modifican la temperatura y la humedad, elementos clave para la vida vegetal.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["selva", "tropical", "ecuador"]

tipo: mc
opciones_explicitas: ["Ecuador", "Sahara", "Antártida", "Siberia"]

enunciado: "La selva tropical es un bioma caracterizado por altas temperaturas y precipitaciones constantes. Un ejemplo de región donde este bioma es predominante es ___."

respuesta: "Ecuador"

explicacion: |
  La selva tropical, como la de Ecuador, se encuentra en zonas ecuatoriales con alta humedad y calor todo el año.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["desierto", "subtropical", "clima"]

tipo: completar
respuestas_validas:
  - "seco"

enunciado: "Los desiertos se localizan generalmente en zonas subtropicales y se caracterizan por tener un clima muy ___."

respuesta: "seco"

explicacion: |
  El desierto se define por la escasez de precipitaciones, lo que resulta en un clima extremadamente seco.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["tundra", "polar", "latitud"]

variables:
  datos: [["Tundra", "Zonas polares"], ["Bosque templado", "Zonas de latitudes medias"]]
  escenario_idx: uno_de([0, 1])
  bioma: datos[escenario_idx][0]
  ubicacion: datos[escenario_idx][1]

tipo: mc
opciones_explicitas: ["Tundra", "Bosque templado", "Selva tropical", "Desierto"]

enunciado: "Considerando el bioma de {bioma}, este se encuentra ubicado típicamente en {ubicacion}."

respuesta: bioma

explicacion: |
  La tundra se caracteriza por condiciones climáticas extremas en las zonas polares.
  El bosque templado se ubica en zonas de latitudes medias.
  La selva tropical en zonas ecuatoriales.
  El desierto en zonas áridas.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "avanzado"
  tags: ["orden", "latitud", "clima"]

tipo: ordenar
opciones_explicitas: ["Selva tropical", "Bosque templado", "Tundra"]

respuesta_orden: ["Selva tropical", "Bosque templado", "Tundra"]

enunciado: "Ordena los siguientes biomas de mayor a menor temperatura (del más cálido al más frío):"

explicacion: |
  La temperatura disminuye a medida que nos alejamos del ecuador hacia los polos.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["bosque", "templado", "estaciones"]

tipo: completar
tolerancia_abs: 0

enunciado: "El bosque templado se distingue de la selva por presentar estaciones del año bien marcadas. Si la temperatura media anual es de 15 grados, el valor numérico es ___."

respuesta: 15

explicacion: |
  El bosque templado presenta variaciones estacionales significativas en su temperatura.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["biogeografia", "tectonica_de_placas"]

variables:
  escenario: uno_de([["Pangea", "Pangea"], ["Gondwana", "Gondwana"], ["Laurasia", "Laurasia"]])

enunciado: "La distribución actual de biomas y especies está influenciada por la fragmentación de {escenario[0]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Pangea", "Gondwana", "Laurasia", "Panthalassa"]

explicacion: |
  La fragmentación de Pangea permitió que las especies evolucionaran de forma aislada en diferentes masas continentales, determinando la distribución actual de biomas y la biodiversidad regional.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["biogeografia", "aislamiento"]

enunciado: "La separación de Australia permitió que la fauna evolucionara de manera única (el aislamiento de los marsupiales), un proceso clave en la biogeografía histórica."

respuesta: "Australia"
tipo: mc
opciones_explicitas: ["Australia", "América del Sur", "África", "Antártida"]

explicacion: |
  El aislamiento geográfico prolongado impide el flujo genético, permitiendo que especies específicas evolucionen en biomas exclusivos de esa región.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["factores_climaticos", "biomas"]

variables:
  factor: uno_de([["latitud", "la distancia respecto al ecuador"], ["altitud", "la altura sobre el nivel del mar"]])

enunciado: "La distribución de los biomas no solo depende de la tectónica, sino también de factores climáticos como la {factor[0]}."

respuesta: factor[0]
tipo: mc
opciones_explicitas: ["latitud", "altitud", "presión", "salinidad"]

explicacion: |
  La latitud determina la radiación solar recibida, lo cual es un factor determinante para la clasificación de biomas (tropicales, templados, polares).
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["historia_geologica", "procesos"]

enunciado: "Ordena cronológicamente los procesos que influyen en la distribución de la vida en la Tierra:"

pasos:
  - "Formación de supercontinentes (ej. Pangea)"
  - "Fragmentación de las masas continentales"
  - "Evolución y especiación por aislamiento"
  - "Establecimiento de biomas actuales"

respuesta_orden: ["Formación de supercontinentes (ej. Pangea)", "Fragmentación de las masas continentales", "Evolución y especiación por aislamiento", "Establecimiento de biomas actuales"]
tipo: ordenar
opciones_explicitas: ["Formación de supercontinentes (ej. Pangea)", "Fragmentación de las masas continentales", "Evolución y especiación por aislamiento", "Establecimiento de biomas actuales"]

explicacion: |
  La estructura geológica establece la base física, la fragmentación crea barreras, el aislamiento permite la especiación y el clima finaliza la configuración de los biomas.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "avanzado"
  tags: ["biogeografia", "tectonica"]

enunciado: "La relación entre la tectónica de placas y la biogeografía es ___________."

respuesta: "directa"
tipo: completar
opciones_explicitas: ["directa", "inversa"]
respuestas_validas:
  - "directa"

pasos:
  - "Analizar cómo el movimiento de placas crea o destruye barreras físicas."
  - "Considerar cómo estas barreras afectan la migración de especies."

explicacion: |
  Es una relación directa: el movimiento de las placas tectónicas crea montañas, océanos y separa continentes, lo que dicta las rutas de migración y el aislamiento de las especies.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["clima", "latitud", "selva"]

enunciado: "Un ecosistema con temperaturas elevadas durante todo el año, precipitaciones constantes y una biodiversidad extrema se encuentra en la zona de latitud ecuatorial. ¿Qué bioma es?"

respuesta: "Selva Tropical"
tipo: mc
opciones_explicitas: ["Selva Tropical", "Tundra", "Desierto"]

explicacion: |
  La selva tropical se caracteriza por su clima cálido y húmedo, situado cerca del ecuador.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["clima", "precipitacion"]

enunciado: "Si un área presenta precipitaciones prácticamente nulas y una evaporación muy superior a la precipitación, el bioma es un ___."

respuesta: "Desierto"
tipo: completar
respuestas_validas:
  - "Desierto"

explicacion: |
  Los desiertos se definen por la escasez extrema de agua y la alta tasa de evaporación.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["latitud", "secuencia", "clima"]

enunciado: "Ordene los siguientes biomas desde la zona ecuatorial hacia los polos (de mayor a menor temperatura):"

respuesta_orden: ["Selva Tropical", "Bosque Templado", "Tundra"]
tipo: ordenar
opciones_explicitas: ["Selva Tropical", "Bosque Templado", "Tundra"]

explicacion: |
  La temperatura disminuye a medida que nos alejamos del ecuador hacia los polos.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["clima", "suelo", "tundra"]

enunciado: "Un bioma caracterizado por el permafrost permanente y la presencia de musgos y líquenes es la ___."

respuesta: "Tundra"
tipo: completar
respuestas_validas:
  - "Tundra"

explicacion: |
  La tundra se define por el permafrost, un suelo que permanece congelado casi todo el año.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["clima", "estaciones"]

enunciado: "Un ecosistema con estaciones bien definidas y árboles que pierden sus hojas en otoño es un ___."

respuesta: "Bosque Templado"
tipo: mc
opciones_explicitas: ["Bosque Templado", "Desierto", "Selva"]

explicacion: |
  El bosque templado se distingue por la marcada estacionalidad de sus climas.
```

## Sección: division-del-trabajo (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["conceptos_basicos", "economia"]

respuesta: "especialización"
tipo: completar
respuestas_validas:
  - "especialización"

enunciado: "La división del trabajo consiste en la ___ de distintas personas o grupos en tareas específicas, en lugar de que todos realicen todas las actividades."

explicacion: |
  La división del trabajo permite que cada individuo se enfoque en una tarea concreta, aumentando la eficiencia y la destreza en la producción.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["eficiencia", "produccion"]

opciones_explicitas: ["Aumento de la producción", "Reducción de la calidad", "Aumento del tiempo de trabajo", "Desperdicio de materiales"]

respuesta: "Aumento de la producción"
tipo: mc

enunciado: "De acuerdo con los principios de la división del trabajo, ¿cuál es uno de sus principales beneficios económicos?"

explicacion: |
  Al especializarse, el trabajador gana rapidez y precisión, lo que permite producir una mayor cantidad de bienes en el mismo tiempo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["historia_economica", "procesos"]

enunciado: "En un escenario de fábrica moderna, donde cada operario realiza una sola tarea repetitiva en una línea de montaje, el modelo de producción se caracteriza por ser: ___"

pasos:
  - "Identificar el escenario seleccionado."
  - "Analizar si el trabajador realiza todo el proceso o solo una parte."

respuestas_validas:
  - "fragmentado"
respuesta: "fragmentado"
tipo: completar

explicacion: |
  En la industria moderna, el proceso se fragmenta en tareas mínimas para maximizar la velocidad, a diferencia del modelo artesanal integral.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["logica_procesos"]

opciones_explicitas: ["Extracción de materia prima", "Transformación especializada", "Distribución del producto final"]

respuesta_orden: ["Extracción de materia prima", "Transformación especializada", "Distribución del producto final"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas de una cadena de producción altamente dividida:"

explicacion: |
  La división del trabajo permite que cada etapa de la cadena de suministro sea ejecutada por especialistas distintos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "avanzado"
  tags: ["habilidades", "educacion"]

opciones_explicitas: ["Mayor versatilidad del trabajador", "Mayor destreza en tareas específicas", "Menor necesidad de entrenamiento", "Aumento de la autonomía técnica"]

respuesta: "Mayor destreza en tareas específicas"
tipo: mc

enunciado: "La especialización extrema derivada de la división del trabajo tiene como consecuencia directa en el trabajador:"

explicacion: |
  Si bien aumenta la destreza técnica en una tarea puntual, también puede llevar a la monotonía y a la pérdida de la visión global del proceso productivo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["agricultura", "excedente", "especializacion"]

respuesta: "excedente agrícola"
tipo: completar
respuestas_validas:
  - "excedente agrícola"
  - "excedente"

enunciado: "La división del trabajo surgió históricamente como una consecuencia directa de la aparición del ___."

explicacion: |
  Cuando las sociedades lograron producir más alimento del que necesitaban para su subsistencia inmediata (excedente), no todos los individuos tuvieron que dedicarse a la agricultura. Esto permitió que otros se especializaran en otras tareas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["roles", "sociedad", "especializacion"]

variables:
  rol_idx: uno_de([0, 1, 2])
  roles: [["artesanos", "comerciantes", "sacerdotes"], ["artesanos", "comerciantes", "sacerdotes"], ["artesanos", "comerciantes", "sacerdotes"]]

opciones_explicitas: ["artesanos", "comerciantes", "sacerdotes", "agricultores"]
respuesta: roles[rol_idx][2]
tipo: mc

enunciado: "Gracias al excedente de alimentos, algunas personas pudieron dedicarse a funciones no productoras de comida, como es el caso de los {roles[rol_idx][2]}."

explicacion: |
  La especialización permitió la aparición de roles como artesanos, comerciantes, sacerdotes o gobernantes, liberando a una parte de la población de la tarea de producir alimento.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["causalidad", "economia_antigua"]

respuesta: "verdadero"
tipo: completar
enunciado: "¿Es correcto afirmar que la división del trabajo es una consecuencia de la capacidad de producir excedentes agrícolas?"

explicacion: |
  Correcto. Sin un excedente que alimentar a quienes no cultivan, la especialización laboral sería imposible, ya que todos deberían dedicarse a la obtención de alimentos para sobrevivir.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "avanzado"
  tags: ["jerarquia", "especializacion", "sociedad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["artesanos, comerciantes y sacerdotes", "artesanos, comerciantes y sacerdotes"], ["artesanos, comerciantes y sacerdotes", "artesanos, comerciantes y sacerdotes"]]

opciones_explicitas: ["agricultores y guerreros", "artesanos, comerciantes y sacerdotes", "cazadores y recolectores", "nómadas y pastores"]
respuesta: escenarios[escenario_idx][0]
tipo: mc

enunciado: "Al producirse un excedente agrícola, la estructura social se vuelve más compleja, pasando de ser mayoritariamente agricultores a incluir roles como ___."

explicacion: |
  La complejidad social aumenta cuando la población se diversifica en funciones que no están ligadas directamente a la extracción de recursos primarios.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["proceso", "causalidad"]

opciones_explicitas: ["Agricultura de subsistencia", "Producción de excedentes", "División del trabajo"]
respuesta_orden: ["Agricultura de subsistencia", "Producción de excedentes", "División del trabajo"]
tipo: ordenar

enunciado: "Ordena los siguientes procesos históricos que permitieron la aparición de la especialización laboral:"

pasos:
  - "Se desarrolla la agricultura para el autoconsumo."
  - "Se produce más comida de la necesaria (excedente)."
  - "Surgen artesanos, sacerdotes y gobernantes."

explicacion: |
  El proceso es causal: primero la agricultura permite el excedente, y el excedente permite que la sociedad se divida en diferentes profesiones.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["economia", "productividad"]

respuesta: "eficiencia"
tipo: completar
respuestas_validas:
  - "eficiencia"
  - "productividad"

enunciado: "Cuando un proceso se divide en tareas simples y cada trabajador se especializa en una de ellas, se logra una mayor ___ en la producción total."

explicacion: |
  La especialización permite que el trabajador perfeccione su técnica en una tarea específica, reduciendo el tiempo de transición entre actividades y aumentando la eficiencia general.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["productividad", "especializacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["taller de costura", "un sastre"], ["fábrica de clavos", "un operario"]]
  resultado: [["mayor rapidez", "un sastre"], ["mayor volumen", "un operario"]]

respuesta: resultado[escenario_idx][0]
tipo: mc
opciones_explicitas: ["mayor rapidez", "mayor volumen", "menor calidad", "más costos"]

enunciado: "En un {datos[escenario_idx][0]}, la especialización de {datos[escenario_idx][1]} permite obtener un {resultado[escenario_idx][0]} en la producción."

explicacion: |
  La división del trabajo transforma la producción artesanal en procesos masivos, aumentando drásticamente el volumen de bienes disponibles.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["productividad", "habilidad"]

respuesta: "perfeccionamiento de la destreza"
tipo: mc
opciones_explicitas: ["perfeccionamiento de la destreza", "pérdida de autonomía", "aumento de la fatiga mental", "reducción de la velocidad"]

enunciado: "Una de las principales ventajas teóricas de la división del trabajo es el ___ del trabajador en su tarea asignada."

explicacion: |
  Al repetir una acción específica, el trabajador adquiere una destreza mecánica y técnica que no podría lograr si realizara todo el proceso de principio a fin.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["orden", "proceso"]

respuesta_orden: ["materias primas", "tareas especializadas", "producto terminado"]
tipo: ordenar
opciones_explicitas: ["materias primas", "tareas especializadas", "producto terminado"]

enunciado: "Ordena la secuencia lógica de un proceso basado en la división del trabajo industrial:"

pasos:
  - "Se recolectan los insumos básicos."
  - "Cada trabajador realiza una parte específica del ensamblaje."
  - "Se obtiene el bien final listo para el mercado."

explicacion: |
  La división del trabajo requiere un flujo ordenado: primero la entrada de materiales, luego la ejecución fragmentada y finalmente la salida del producto.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "avanzado"
  tags: ["productividad", "economia"]

variables:
  caso_idx: uno_de([0, 1])
  valores: [[10, 50], [5, 100]]
  total: [500, 1000]

respuesta: total[caso_idx]
tipo: completar
tolerancia_abs: 0

enunciado: "Si en un escenario de división del trabajo, un trabajador produce {valores[caso_idx][0]} unidades en una hora sin especializar, pero con la especialización produce {valores[caso_idx][1]} unidades, ¿cuál es la producción total en 10 horas si solo contamos la producción especializada?"

pasos:
  - "Identificar la producción por hora con especialización: {valores[caso_idx][1]}"
  - "Multiplicar por el número de horas: {valores[caso_idx][1]} * 10"

explicacion: |
  La especialización actúa como un multiplicador de la productividad, permitiendo que la producción total crezca exponencialmente respecto al trabajo no especializado.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["sociologia", "desigualdad"]

respuesta: "prestigio"
tipo: mc
opciones_explicitas: ["prestigio", "esfuerzo", "tiempo", "herramientas"]

enunciado: "Con la especialización de tareas, no todas las labores adquirieron el mismo nivel de ______, lo que permitió la jerarquización social."

explicacion: |
  La especialización permitió que algunas tareas fueran valoradas socialmente por encima de otras, otorgando a quienes las realizaban mayor estatus y control sobre los recursos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["economia", "recursos"]

respuesta: "excedente"
tipo: completar
respuestas_validas:
  - "excedente"

enunciado: "En los primeros asentamientos sedentarios, la división del trabajo permitió que ciertos grupos controlaran el excedente, consolidando la desigualdad."

explicacion: |
  El control sobre el excedente de producción (como el grano) o sobre procesos técnicos específicos permitió que ciertos individuos acumularan poder sobre el resto de la comunidad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "avanzado"
  tags: ["estructura_social", "clases"]

respuesta_orden: ["Especialización técnica", "Producción de subsistencia", "Servicio doméstico"]
tipo: ordenar

opciones_explicitas: ["Especialización técnica", "Producción de subsistencia", "Servicio doméstico"]

enunciado: "Ordene las actividades desde la que históricamente ha generado mayor acumulación de recursos y estatus hasta la de menor estatus en una sociedad estratificada:"

explicacion: |
  La jerarquización social se basa en la complejidad de la tarea y el control de los medios de producción; las tareas de especialización técnica suelen estar en la cima de la pirámide de prestigio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["poder", "sociedad"]

respuesta: "desigualdad"
tipo: completar
tolerancia_abs: 0

enunciado: "La asignación desigual de tareas y el acceso diferenciado a los bienes producidos sentaron las bases de la _______ social."

explicacion: |
  Al no ser todas las tareas equivalentes en términos de acceso a la riqueza, se crearon estratos sociales permanentes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "avanzado"
  tags: ["recursos", "propiedad"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["tierras", "dueños"], ["herramientas", "maestros"]]

respuesta: casos[caso_idx][1]

tipo: mc
opciones_explicitas: ["dueños", "maestros", "trabajadores", "esclavos"]

enunciado: "Cuando la división del trabajo se vinculó con la propiedad de los medios de producción (como {casos[caso_idx][0]}), surgieron grupos de ___ que controlaban a los demás."

explicacion: |
  La combinación de la especialización con la propiedad privada de los recursos (tierra o herramientas) es el motor fundamental de la estratificación de clases.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["especializacion", "prehistoria"]

respuesta: "alfarero"
tipo: mc
opciones_explicitas: ["cazador", "curtidor", "alfarero", "agricultor"]

enunciado: "En las sociedades con división del trabajo incipiente, un individuo que se dedica exclusivamente a la fabricación de vasijas de arcilla es un: ___"

explicacion: |
  La especialización ocurre cuando un individuo se dedica a una tarea específica, permitiendo un aumento en la calidad y cantidad de la producción.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["jerarquia", "especializacion"]

respuesta: "registrador"
tipo: completar
respuestas_validas:
  - "registrador"

enunciado: "Si en una civilización antigua la función principal de un escriba es llevar el control de los granos, su rol especializado es el de ___."

explicacion: |
  El escriba es un ejemplo de especialización administrativa necesaria en sociedades complejas con excedentes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["procesos", "especializacion"]

respuesta_orden: ["pastoreo", "hilado", "tejido", "confección"]
tipo: ordenar
opciones_explicitas: ["pastoreo", "hilado", "tejido", "confección"]

enunciado: "Ordena los pasos de la cadena de producción textil en una sociedad con división del trabajo técnica:"

explicacion: |
  La división del trabajo permite que cada etapa de la producción sea realizada por un especialista distinto, optimizando el proceso.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "avanzado"
  tags: ["excedente", "sociedad"]

respuesta: "religioso"
tipo: mc
opciones_explicitas: ["religioso", "militar", "herrero", "comerciante"]

enunciado: "Cuando la agricultura genera excedentes, surge la especialización no productiva. Si el excedente se usa para sostener a un grupo dedicado al ritual, el rol es: ___"

explicacion: |
  El excedente agrícola es la condición necesaria para que existan profesiones que no producen alimento directamente.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["oficios", "identificacion"]

respuesta: "agrimensor"
tipo: completar
respuestas_validas:
  - "agrimensor"

enunciado: "Un individuo cuya tarea principal es medir los límites de las tierras para la distribución de impuestos es un ___."

explicacion: |
  La especialización técnica (como la agrimensura) es fundamental para la gestión de los recursos en estados organizados.
```

## Sección: eclipses-sol-luna (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "eclipse_solar"]

tipo: mc
opciones_explicitas: ["La Luna se interpone entre la Tierra y el Sol", "La Tierra se interpone entre el Sol y la Luna", "El Sol se interpone entre la Tierra y la Luna"]
respuesta: "La Luna se interpone entre la Tierra y el Sol"

enunciado: "Un eclipse solar ocurre cuando ___."

explicacion: |
  Para que ocurra un eclipse solar, la Luna debe estar posicionada exactamente entre la Tierra y el Sol, proyectando su sombra sobre nuestra superficie.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["fases_lunares", "eclipse_solar"]

enunciado: "Para que sea posible observar un eclipse solar, la Luna debe encontrarse en fase de ___."

pasos:
  - "Identificar la fase lunar necesaria para que la Luna esté entre la Tierra y el Sol."

opciones_explicitas: ["Luna Llena", "Luna Nueva"]
respuesta: "Luna Nueva"
tipo: mc

explicacion: |
  Solo cuando la Luna está en fase de Luna Nueva puede alinearse entre la Tierra y el Sol para producir un eclipse solar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["eclipse_lunar", "fases_lunares"]

tipo: completar
enunciado: "Un eclipse lunar ocurre únicamente durante la fase de ___."
respuesta: "Luna Llena"
explicacion: |
  Un eclipse lunar requiere que la Tierra esté entre el Sol y la Luna, lo cual solo sucede cuando la Luna está en su fase de Luna Llena.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["secuencia", "eclipse_lunar"]

tipo: ordenar
opciones_explicitas: ["Sol", "Tierra", "Luna"]
respuesta_orden: ["Sol", "Tierra", "Luna"]

enunciado: "Ordena los cuerpos celestes desde el que emite la luz hasta el que recibe la sombra durante un eclipse lunar:"

explicacion: |
  En un eclipse lunar, la secuencia es: la luz del Sol viaja hacia la Tierra, la Tierra bloquea la luz y proyecta su sombra sobre la Luna.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["conceptos", "eclipse"]

variables:
  escenario: uno_de([0, 1])
  datos: [["Sol - Tierra - Luna", "lunar"], ["Sol - Luna - Tierra", "solar"]]

enunciado: "Si la posición de los astros es {datos[escenario][0]}, entonces el eclipse es de tipo ___."

opciones_explicitas: ["solar", "lunar"]
respuestas_validas:
  - "lunar"
  - "solar"
respuesta: datos[escenario][1]
tipo: completar

explicacion: |
  La clave para identificar el eclipse es observar qué cuerpo está en el medio: si es la Luna, el eclipse es solar; si es la Tierra, es lunar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "geometria_celestial"]

respuesta: 5
tipo: completar
tolerancia_abs: 0.1

enunciado: "Aunque la Luna orbita la Tierra cada mes, no siempre se produce un eclipse porque su órbita está inclinada aproximadamente ___ grados respecto a la eclíptica (el plano de la órbita terrestre)."

explicacion: |
  La órbita de la Luna tiene una inclinación de unos 5° respecto al plano de la Tierra alrededor del Sol. Esta inclinación hace que, la mayoría de las veces, la Luna pase por encima o por debajo del Sol desde nuestra perspectiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "alineacion"]

opciones_explicitas: ["Eclíptica", "Eje terrestre", "Órbita solar", "Cinturón de asteroides"]

respuesta: "Eclíptica"
tipo: mc

enunciado: "Para que ocurra un eclipse, la Luna debe estar alineada con el Sol y la Tierra en el plano de la ___."

explicacion: |
  Un eclipse solo ocurre cuando la Luna, la Tierra y el Sol se encuentran en un punto llamado 'nodos lunares', donde la órbita lunar cruza el plano de la eclíptica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["fases_lunares", "eclipses"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Luna Nueva", "Solar"], ["Luna Llena", "Lunar"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Solar", "Lunar", "Ninguno"]

enunciado: "Si la Luna se encuentra en fase de {datos[escenario_idx][0]}, se requiere una alineación perfecta para producir un eclipse de tipo {datos[escenario_idx][1]}."

explicacion: |
  La fase de Luna Nueva es necesaria para los eclipses solares, mientras que la Luna Llena es necesaria para los eclipses lunares.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "avanzado"
  tags: ["geometria", "nodos"]

opciones_explicitas: ["Nodos lunares", "Equinoccios", "Solsticios", "Perigeos"]

respuesta: "Nodos lunares"
tipo: mc

enunciado: "La razón por la cual los eclipses no ocurren en cada fase de Luna Nueva o Luna Llena es que la Luna solo cruza el plano de la eclíptica en dos puntos específicos llamados ___."

explicacion: |
  Esos puntos de intersección se llaman nodos. Solo cuando la Luna está en uno de estos nodos durante la fase de luna nueva o llena, se produce el fenómeno.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["orden", "alineacion"]

opciones_explicitas: ["Luna Nueva -> Eclipse Solar", "Luna Llena -> Eclipse Lunar"]

respuesta_orden: ["Luna Nueva -> Eclipse Solar", "Luna Llena -> Eclipse Lunar"]
tipo: ordenar

enunciado: "Ordena las condiciones necesarias para los dos tipos principales de eclipses:"

pasos:
  - "Condición para eclipse solar"
  - "Condición para eclipse lunar"

explicacion: |
  Para un eclipse solar necesitamos Luna Nueva y alineación en el nodo. Para un eclipse lunar necesitamos Luna Llena y alineación en el nodo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "conceptos_basicos"]

respuesta: "umbra"
tipo: completar
respuestas_validas:
  - "umbra"

enunciado: "La parte más oscura y central de la sombra proyectada por la Luna sobre la Tierra se denomina ___."

explicacion: |
  La umbra es la zona de sombra total donde la luz del Sol queda completamente bloqueada. La penumbra es la zona exterior donde solo se bloquea una parte de la luz.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["eclipses", "solar"]

variables:
  escenario: uno_de([["la Luna cubre totalmente el Sol", "total"], ["la Luna cubre solo una parte del Sol", "parcial"], ["la Luna está entre la Tierra y el Sol pero es más pequeña y deja un anillo", "anular"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["total", "parcial", "anular"]

enunciado: "Si durante un eclipse solar la Luna no logra cubrir completamente el disco solar, dejando ver un borde luminoso alrededor, estamos ante un eclipse ___."

explicacion: |
  En un eclipse parcial, la Luna solo cubre una fracción del Sol. En el total, lo cubre todo; en el anular, el diámetro aparente de la Luna es menor que el del Sol.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia"]

respuesta: "penumbra"
tipo: mc
opciones_explicitas: ["umbra", "penumbra", "antumbra"]

enunciado: "Cuando un observador se encuentra en la región donde el Sol es parcialmente ocultado por la Luna, se encuentra en la zona de:"

explicacion: |
  La penumbra es la región de sombra parcial que rodea a la umbra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["observacion"]

respuesta_orden: ["crescendo", "totalidad", "decrescendo"]
tipo: ordenar
opciones_explicitas: ["crescendo", "totalidad", "decrescendo"]

enunciado: "Ordena cronológicamente las fases de un eclipse solar total desde que comienza el oscurecimiento hasta que termina:"

explicacion: |
  Primero ocurre el aumento gradual de la sombra (crescendo), luego la fase de oscuridad máxima (totalidad) y finalmente el regreso de la luz (decrescendo).
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "avanzado"
  tags: ["calculo", "geometria"]

respuesta: 384400
tipo: completar
tolerancia_abs: 5000

enunciado: "¿Cuál es la distancia promedio entre la Tierra y la Luna, en kilómetros?"

explicacion: |
  La distancia promedio es de unos 384.400 km, aunque varía entre unos 363.300 km (perigeo) y 405.500 km (apogeo) debido a la órbita elíptica de la Luna.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "visibilidad"]

respuesta: "Luna"
tipo: "mc"
opciones_explicitas: ["Sol", "Luna", "Estrellas", "Planetas"]

enunciado: "Durante un eclipse lunar, el cuerpo celeste que se oscurece debido a la sombra de la Tierra es la ___."

explicacion: |
  En un eclipse lunar, la Tierra se interpone entre el Sol y la Luna, proyectando su sombra sobre el satélite. Como la Luna está visible para cualquier punto de la Tierra que esté en la zona de noche, el fenómeno es observable desde toda la mitad nocturna del planeta.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["geometria", "sombra"]

variables:
  caso: uno_de([0, 1])

respuesta: "umbra"
tipo: "completar"
respuestas_validas:
  - "umbra"
  - "penumbra"

enunciado: "En un eclipse solar, la parte de la sombra donde la totalidad del Sol es bloqueada por la Luna se denomina ___."

explicacion: |
  La sombra de la Luna tiene dos partes: la umbra (sombra total) y la penumbra (sombra parcial). La umbra es un cono muy estrecho que toca la superficie terrestre solo en una franja muy pequeña, razón por la cual los eclipses totales de Sol son raros de ver en un lugar específico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["comparacion", "visibilidad"]

respuesta: "mayor"
tipo: "mc"
opciones_explicitas: ["menor", "mayor", "igual", "nula"]

enunciado: "Comparado con la franja angosta de un eclipse solar, el área de visibilidad de un eclipse lunar es ___."

explicacion: |
  Un eclipse lunar es visible para cualquier persona que esté en la parte de la Tierra donde la Luna está en el cielo (la mitad nocturna). Un eclipse solar requiere que la pequeña sombra de la Luna pase exactamente por tu ubicación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["alineacion", "orden"]

tipo: "ordenar"
opciones_explicitas: ["Sol", "Tierra", "Luna"]
respuesta_orden: ["Sol", "Tierra", "Luna"]

enunciado: "Para que ocurra un eclipse lunar, los astros deben alinearse en el siguiente orden desde el Sol hacia la Luna:"

explicacion: |
  En el eclipse lunar, el orden es Sol - Tierra - Luna. La Tierra queda en el medio, proyectando su sombra sobre la Luna.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "avanzado"
  tags: ["probabilidad", "observacion"]

variables:
  escenario: uno_de([0, 1])

respuesta: "frecuente"
tipo: "mc"
opciones_explicitas: ["frecuente", "infrecuente"]

enunciado: "Debido a que la sombra de la Luna es muy pequeña y se desplaza rápidamente por la Tierra, ver un eclipse solar total en un mismo punto es un evento ___."

explicacion: |
  Como la umbra lunar es un cono estrecho, la probabilidad de que esa línea exacta pase por tu ciudad es muy baja, haciendo que los eclipses solares totales sean eventos muy poco frecuentes en una ubicación geográfica dada.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "posiciones"]

variables:
  idx: uno_de([0, 1])
  datos: [["Luna entre la Tierra y el Sol", "Solar"], ["Tierra entre la Luna y el Sol", "Lunar"]]

enunciado: "Si observamos que la posición de los cuerpos celestes es {datos[idx][0]}, estamos presenciando un eclipse de tipo ___."

respuestas_validas:
  - "Solar"
  - "Lunar"

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  Un eclipse solar ocurre cuando la Luna se interpone entre la Tierra y el Sol, proyectando su sombra sobre nuestro planeta.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia"]

variables:
  escenario_datos: [["Sol-Luna-Tierra", "Solar"], ["Sol-Tierra-Luna", "Lunar"]]
  idx: uno_de([0, 1])

enunciado: "Dada la configuración {escenario_datos[idx][0]}, el tipo de eclipse es ___."

respuestas_validas:
  - "Solar"
  - "Lunar"

respuesta: escenario_datos[idx][1]
tipo: completar

explicacion: |
  La posición relativa determina qué cuerpo proyecta la sombra sobre el otro.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["astronomia"]

variables:
  idx: uno_de([0, 1])
  datos: [["La Tierra bloquea la luz solar hacia la Luna", "Lunar"], ["La Luna bloquea la luz solar hacia la Tierra", "Solar"]]

enunciado: "Si ocurre que {datos[idx][0]}, el eclipse es ___."

respuestas_validas:
  - "Lunar"
  - "Solar"

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El eclipse se nombra según el cuerpo que queda en la zona de sombra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia"]

variables:
  datos: [["Sol - Luna - Tierra", "Solar"], ["Sol - Tierra - Luna", "Lunar"]]
  idx: uno_de([0, 1])

enunciado: "En la configuración {datos[idx][0]}, el eclipse es ___."

opciones_explicitas:
  - "Solar"
  - "Lunar"

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  En el primer caso la Luna está en el medio (Solar), en el segundo la Tierra (Lunar).
```

```
metadata:
  materia: "historia_profucha"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["astronomia"]

variables:
  idx: uno_de([0, 1])
  datos: [["La Luna entra en la umbra terrestre", "Lunar"], ["La Tierra entra en la umbra lunar", "Solar"]]

enunciado: "Si el evento es {datos[idx][0]}, el tipo de eclipse es ___."

respuestas_validas:
  - "Lunar"
  - "Solar"

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  Cuando la Luna entra en la sombra de la Tierra, vemos un eclipse lunar.
```

