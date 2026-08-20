# Examen jefe — Maestro de la Cronología Terrestre

> Logro #103. Desbloqueaste el conocimiento sobre datación radiométrica, descolonización, biomas, división del trabajo y eclipses. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **124 preguntas totales** en 5/5 secciones.

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

respuestas_validas: ["vida media"]

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
  datos: [
    ["Carbono-14", 5730, 0.5],
    ["Potasio-40", 1250000000, 0.25]
  ]

respuesta: datos[idx][2
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
  escenario: [
    ["10.0", "0.1", 2],
    ["25.0", "0.0625", 4]
  ]

respuesta: escenario[idx][0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Se analiza una muestra donde la fracción del isótopo original remanente es de {escenario[idx][1]}. Si se sabe que han pasado {escenario[idx][2]} vidas medias, ¿cuál es la edad de la muestra en años (asumiendo una vida media de 100 años para este ejemplo hipotético)?"

pasos:
  - "Identificar la fracción remanente."
  - "Determinar cuántos periodos de vida media han pasado."
  - "Multiplicar el número de periodos por la duración de la vida media."

explicacion: |
  Si la fracción es 0.1 y han pasado 2 periodos (en el caso 1), la edad es 2 * 100 = 200. En el caso 2, 4 * 100 = 400. El cálculo depende de la relación entre la fracción y la constante de desintegración.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["secuencia", "isótopos"]

respuesta: ["Isótopo de vida larga", "Isótopo de vida media", "Isótopo de vida corta"]
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

respuesta: verdadero
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

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

respuestas_validas: ["50000"]
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

respuesta: datos[idx][1
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
respuesta: ["Carbono-14 -> Materia orgánica", "Uranio-Plomo -> Rocas antiguas", "Potasio-Argón -> Rocas antiguas"]
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
  escenario: [["fósil de madera de 40,000 años", "uranio-plomo"], ["cristal de circon en roca de 1,000 millones de años", "potasio-argón"]]

enunciado: "Si un arqueólogo encuentra {escenario[idx][0]}, el método más adecuado de datación sería el de {escenario[idx][1]}."

respuesta: escenario[idx][1
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
  escenarios: [
    ["dos", "25%"],
    ["tres", "12.5%"]
  ]

tipo: completar
respuestas_validas: ["25%", "12.5%"]
respuesta: escenarios[idx][1

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
  datos: [
    [100, 50, 500],
    [80, 40, 1000],
    [60, 30, 1500]
  ]
  idx: uno_de([0, 1, 2])

tipo: completar
tolerancia_abs: 0.1

enunciado: "Una muestra contiene {datos[idx][0]} unidades de un isótopo con una vida media de {datos[idx][1]} años. Si actualmente quedan {datos[idx][2]} unidades, ¿cuántos años han transcurrido?"

pasos:
  - "Identificar cuántas vidas medias han pasado comparando la cantidad inicial y la final."
  - "Multiplicar el número de vidas medias por el valor de la vida media en años."

explicacion: |
  En el caso seleccionado, la muestra pasó de {datos[idx][0]} a {datos[idx][2]}, lo que representa exactamente una vida media. Por lo tanto, han pasado {datos[idx][1]} años.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["secuencia", "progresion"]

tipo: ordenar
opciones_explicitas: ["100%", "50%", "25%", "12.5%", "6.25%"]
respuesta: ["100%", "50%", "25%", "12.5%", "6.25%"]

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
respuestas_validas: ["vida media", "vida-media"]

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

opciones_explicitas: ["La cantidad de C-14 es demasiado grande", "La cantidad de C-14 es demasiado pequeña para ser medida", "El C-14 es un isótopo muy estable", "El C-14 solo se encuentra en rocas"]

respuesta: uno_de(["La cantidad de C-14 es demasiado pequeña para ser medida", "La cantidad de C-14 es demasiado grande", "El C-14 es un isótopo muy estable", "El C-14 solo se encuentra en rocas"])[0]
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
  datos: [
    ["Carbono-14", "5730 años", "Fósiles orgánicos recientes"],
    ["Uranio-238", "4468 millones de años", "Rocas muy antiguas"]
  ]

respuesta: datos[escenario_idx][1
tipo: completar
respuestas_validas: ["5730 años", "4468 millones de años"]

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
respuestas_validas: ["corto", "breve"]

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
  escenario: [[100, "25"], [200, "50"], [400, "100"]]
  idx: uno_de([0, 1, 2])
  masa_inicial: escenario[idx][0]
  respuesta_esperada: escenario[idx][1]

tipo: mc
opciones_explicitas: ["25%", "50%", "75%", "100%"]

enunciado: "Una muestra orgánica contiene {masa_inicial} g de Carbono-14. Si han transcurrido exactamente 2 vidas medias, ¿qué porcentaje de la masa inicial de este isótopo permanece en la muestra?"

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
respuestas_validas: ["10", "20", "40"]

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
```

## Sección: descolonizacion-de-africa-y-asia (24 preguntas)

```
### 2 — Conferencia de Bandung
```

```
### 3 — Líder de la independencia de Ghana
```

```
### 4 — Masacre de Sétif
```

```
### 5 — Partición de la India
```

```
### 6 — Acuerdo de Zúrich y Londres
```

```
### 7 — Tratado de Amity
```

```
### 8 — Guerra de los Seis Días
```

```
### 9 — Liderazgo de Sukarno
```

```
### 10 — Masacre de Malaya
```

```
### 11 — Independencia de Marruecos
```

```
### 12 — Acuerdo de Rangoon
```

```
### 13 — Masacre de Jaffna
```

```
### 14 — Tratado de Lausana
```

```
### 15 — Líder de la independencia de Kenia
```

```
### 16 — Acuerdo de Acosia
```

```
### 17 — Independencia de Etiopía
```

```
### 18 — Conferencia de Brazzaville
```

```
### 19 — Líder de la independencia de Tanzania (Tanganyika)
```

```
### 20 — Masacre de Thiaroye
```

```
### 21 — Acuerdo de Finkenstein
```

```
### 22 — Independencia de Libia
```

```
### 23 — Masacre de Mawlamyine
```

```
### 24 — Acuerdo de Irán
```

```
### 25 — Masacre de Mendi
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
  escenarios: [
    ["Selva Tropical", "Desierto"],
    ["Altas precipitaciones y calor constante", "Escasez extrema de agua y temperaturas extremas"]
  ]

tipo: completar
respuestas_validas: ["Selva Tropical", "Desierto"]

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
respuestas_validas: ["Tundra", "Taiga", "Sabana"]

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

variables:
  escenario: uno_de([
    ["un ascenso constante en la montaña", "disminución de temperatura"],
    ["un descenso desde la cima", "aumento de temperatura"],
    ["un desplazamiento hacia el ecuador", "aumento de temperatura"]
  ])

respuesta: escenario[1
tipo: completar
respuestas_validas: ["disminución de temperatura", "aumento de temperatura", "cambio de humedad"]

enunciado: "Al aumentar la altitud en una montaña, se produce un gradiente térmico donde ocurre una {escenario[0]}."

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
  datos: uno_de([
    ["Ecuador", "Selva Tropical"],
    ["Zonas Templadas", "Bosques Caducifolios"],
    ["Polos", "Tundra"]
  ])

respuesta: datos[1
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

respuesta: ["Bosque de niebla", "Páramo", "Superpáramo", "Nieves perpetuas"]
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
respuestas_validas: ["seco", "húmedo"]

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
  escenario_idx: uno_de([0, 1])
  datos: [[["Tundra", "Zonas polares"], ["Bosque templado", "Zonas de latitudes medias"]]]

tipo: mc
opciones_explicitas: ["Tundra", "Bosque templado", "Selva tropical", "Desierto"]

enunciado: "Considerando el bioma de {datos[escenario_idx][0]}, este se encuentra ubicado típicamente en {datos[escenario_idx][1]}."

respuesta: "Tundra"

explicacion: |
  La tundra se caracteriza por condiciones climáticas extremas en las zonas polares.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "avanzado"
  tags: ["orden", "latitud", "clima"]

tipo: ordenar
opciones_explicitas: ["Selva tropical", "Bosque templado", "Tundra"]

respuesta: ["Selva tropical", "Bosque templado", "Tundra"]

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
  escenario: uno_de([
    ["Pangea", "la unión de todas las masas de tierra"],
    ["Gondwana", "el supercontinente del hemisferio sur"],
    ["Laurasia", "el supercontinente del hemisferio norte"]
  ])

enunciado: "La distribución actual de biomas y especies está influenciada por la fragmentación de {escenario[0]}."

respuesta: escenario[1
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

variables:
  caso: uno_de([
    ["Australia", "el continente que permitió el aislamiento de marsupiales"],
    ["América del Sur", "el continente que se unió a Norteamérica por el istmo"]
  ])

enunciado: "La separación de {caso[0]} permitió que la fauna evolucionara de manera única, un proceso clave en la biogeografía histórica."

respuesta: caso[0
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
  factor: uno_de([
    ["latitud", "la distancia respecto al ecuador"],
    ["altitud", "la altura sobre el nivel del mar"]
  ])

enunciado: "La distribución de los biomas no solo depende de la tectónica, sino también de factores climáticos como la {factor[0]}."

respuesta: factor[0
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

respuesta: ["Formación de supercontinentes (ej. Pangea)", "Fragmentación de las masas continentales", "Evolución y especiación por aislamiento", "Establecimiento de biomas actuales"]
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

variables:
  relacion: uno_de([
    ["directa", "existe una conexión clara entre movimiento de placas y especies"],
    ["inversa", "el movimiento de placas impide la distribución de especies"]
  ])

enunciado: "La relación entre la tectónica de placas y la biogeografía es ___________."

respuesta: tabla[0][1
tipo: completar
opciones_explicitas: ["directa", "inversa"]
respuestas_validas: ["directa", "inversa"]

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

variables:
  datos: [["latitud_ecuatorial", "Selva Tropical"], ["latitud_polar", "Tundra"], ["latitud_desertica", "Desierto"]]
  idx: uno_de([0,1,2])

enunciado: "Un ecosistema con temperaturas elevadas durante todo el año, precipitaciones constantes y una biodiversidad extrema se encuentra en la {datos[idx][0]}."

respuesta: datos[idx][1]
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

variables:
  datos: [["precipitaciones_nulas", "Desierto"], ["precipitaciones_moderadas", "Bosque Templado"], ["precipitaciones_altas", "Selva Tropical"]]
  idx: uno_de([0,1,2])

enunciado: "Si un área presenta {datos[idx][0]} y una evaporación muy superior a la precipitación, el bioma es un ___."

respuesta: datos[idx][1
tipo: completar
respuestas_validas: ["Desierto"]

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

respuesta: ["Selva Tropical", "Bosque Templado", "Tundra"]
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

variables:
  datos: [["permafrost_permanente", "Tundra"], ["suelo_nutritivo", "Selva"], ["estaciones_marcadas", "Bosque Templado"]]
  idx: uno_de([0,1,2])

enunciado: "Un bioma caracterizado por el {datos[idx][0]} y la presencia de musgos y líquenes es la ___."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["Tundra"]

explicacion: |
  La tundra se define por el permafrost, un suelo que permanece congelado casi todo el año.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["clima", "estaciones"]

variables:
  datos: [["estaciones_bien_definidas", "Bosque Templado"], ["clima_extremadamente_seco", "Desierto"], ["clima_calido_húmedo", "Selva"]]
  idx: uno_de([0,1,2])

enunciado: "Un ecosistema con {datos[idx][0]} y árboles que pierden sus hojas en otoño es un ___."

respuesta: datos[idx][1]
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
respuestas_validas: ["especialización"]

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

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Artesano medieval", "Realiza todas las etapas de un producto de principio a fin"],
    ["Fábrica moderna", "Cada operario realiza una sola tarea repetitiva en una línea de montaje"]
  ]

enunciado: "En un escenario de {escenarios[escenario_idx][1]}, el modelo de producción se caracteriza por ser: ___"

pasos:
  - "Identificar el escenario seleccionado."
  - "Analizar si el trabajador realiza todo el proceso o solo una parte."

respuestas_validas: ["integral", "fragmentado"]
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

respuesta: ["Extracción de materia prima", "Transformación especializada", "Distribución del producto final"]
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
respuestas_validas: ["excedente agrícola", "excedente"]

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
respuesta: roles[rol_idx][2
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
respuesta: escenarios[escenario_idx][0
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
respuesta: ["Agricultura de subsistencia", "Producción de excedentes", "División del trabajo"]
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
respuestas_validas: ["eficiencia", "productividad"]

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

respuesta: resultado[escenario_idx][1
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

respuesta: ["materias primas", "tareas especializadas", "producto terminado"]
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
  total: [500, 500]

respuesta: total[caso_idx
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

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["agricultores", "excedente"], ["artesanos", "especialización"]]

respuesta: datos[escenario_idx][1
tipo: completar
respuestas_validas: ["excedente", "especialización"]

enunciado: "En los primeros asentamientos sedentarios, la división del trabajo permitió que ciertos grupos controlaran el {datos[escenario_idx][1]}, consolidando la desigualdad."

explicacion: |
  El control sobre el excedente de producción (como el grano) o sobre procesos técnicos específicos permitió que ciertos individuos acumularan poder sobre el resto de la comunidad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "avanzado"
  tags: ["estructura_social", "clases"]

respuesta: ["Especialización técnica", "Producción de subsistencia", "Servicio doméstico"]
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

respuesta: casos[caso_idx][1

tipo: mc
opciones_explicitas: ["dueños", "maestros", "trabajadores", "esclavos"]

enunciado: "Cuando la división del trabajo se vinculó con la propiedad de los medios de producción, surgieron grupos como los {casos[caso_idx][0]} que controlaban a los demás."

explicacion: |
  La combinación de la especialización con la propiedad privada de los recursos (tierra o herramientas) es el motor fundamental de la estratificación de clases.
```

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["especializacion", "prehistoria"]

variables:
  datos: [["un grupo de nómadas que fabrica puntas de lanza de piedra", "cazador"], ["un grupo de nómadas que trabaja el cuero", "curtidor"], ["un grupo que fabrica vasijas de arcilla", "alfarero"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
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

variables:
  datos: [["el agricultor", "productor"], ["el escriba", "registrador"], ["el guerrero", "protector"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["productor", "registrador", "protector"]

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

respuesta: ["pastoreo", "hilado", "tejido", "confección"]
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

variables:
  datos: [["el excedente de comida permite que alguien sea sacerdote", "religioso"], ["el excedente de comida permite que alguien sea soldado", "militar"], ["el excedente de comida permite que alguien sea metalúrgico", "herrero"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
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

variables:
  oficio_datos: [["trabaja el metal", "herrero"], ["domina el agua", "irrigador"], ["mide la tierra", "agrimensor"]]
  idx: uno_de([0,1,2])

respuesta: oficio_datos[idx][1
tipo: completar
respuestas_validas: ["herrero", "irrigador", "agrimensor"]

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

variables:
  idx: uno_de([0, 1])
  datos: [["Luna Llena", "Luna Nueva"], ["Luna Nueva", "Luna Llena"]]
  opciones: datos[idx]
  respuesta_correcta: datos[idx][1]

enunciado: "Para que sea posible observar un eclipse solar, la Luna debe encontrarse en fase de ___."

pasos:
  - "Identificar la fase lunar necesaria para que la Luna esté entre la Tierra y el Sol."

opciones_explicitas: {opciones}
respuesta: {respuesta_correcta}
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

tipo: mc
opciones_explicitas: ["Luna Nueva", "Luna Llena", "Cuarto Creciente", "Cuarto Menguante"]

enunciado: "Un eclipse lunar ocurre únicamente durante la fase de ___."

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
respuesta: ["Sol", "Tierra", "Luna"]

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

enunciado: "Si la posición de los astros es {datos[escenario][0]}, entonces el eclipse es de tipo ___."

variables_datos:
  datos: [["Sol - Tierra - Luna", "lunar"], ["Sol - Luna - Tierra", "solar"]]

opciones_explicitas: ["solar", "lunar"]
respuestas_validas: ["lunar", "solar"]
respuesta: ["lunar", "solar"][escenario]
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

respuesta: tabla[escenario_idx][1
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

respuesta: ["Luna Nueva -> Eclipse Solar", "Luna Llena -> Eclipse Lunar"]
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
respuestas_validas: ["umbra", "penumbra"]

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
  escenario: uno_de([
    ["la Luna cubre totalmente el Sol", "total"],
    ["la Luna cubre solo una parte del Sol", "parcial"],
    ["la Luna está entre la Tierra y el Sol pero es más pequeña y deja un anillo", "anular"]
  ])

respuesta: escenario[1
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

respuesta: ["crescendo", "totalidad", "decrescendo"]
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

variables:
  distancia_luna: uno_de([384400, 405500])

respuesta: redondear(distancia_luna, 0)
tipo: completar
tolerancia_abs: 0

enunciado: "Si la Luna se encuentra a una distancia de {distancia_luna} km de la Tierra, ¿cuál es ese valor en kilómetros?"

explicacion: |
  El valor de la distancia varía según la órbita elíptica de la Luna.
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
respuestas_validas: ["umbra", "penumbra"]

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

respuesta: ["Sol", "Tierra", "Luna"]
tipo: "ordenar"
opciones_explicitas: ["Sol", "Tierra", "Luna", "Luna", "Tierra", "Sol"]

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
  escenario_datos: [["Luna-Sol-Tierra", "Solar"], ["Sol-Luna-Tierra", "Lunar"], ["Sol-Tierra-Luna", "Lunar"]]
  idx: uno_de([0, 1, 2])

enunciado: "Dada la configuración {escenario_datos[idx][0]}, el tipo de eclipse es ___."

respuestas_validas:
  - "Solar"
  - "Lunar"

respuesta: escenario_datos[idx][1
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

respuestas_validas: [datos[idx][1]]
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
