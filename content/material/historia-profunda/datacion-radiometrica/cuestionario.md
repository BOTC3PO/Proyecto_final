# Historia Profunda — Datacion radiometrica (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de vida media

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

### 2 — Cálculo de isótopos remanentes

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

### 3 — Determinación de la edad (Cálculo)

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "avanzado"
  tags: ["calculo", "logaritmos", "geocronologia"]

variables:
  idx: uno_de([0, 1])
  escenario: [["10.0", "0.1", 2], ["25.0", "0.0625", 4]]

respuesta: escenario[idx][0]
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

### 4 — Orden de desintegración

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

### 5 — Verdad o Falso: Tasa de desintegración

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

### 6 — El límite del Carbono-14

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

### 7 — Vida media del Carbono-14

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

### 8 — Métodos para rocas antiguas

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

### 9 — Isótopos y materiales

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

### 10 — Selección de método

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

respuesta: escenario[idx][1]
tipo: mc

opciones_explicitas: ["uranio-plomo", "potasio-argón", "carbono-14"]

explicacion: |
  El escenario determina la escala temporal. Si el objeto es muy antiguo (roca), el C-14 no sirve; si es madera (orgánico) dentro del rango, el C-14 es ideal.
```

### 11 — Concepto de vida media

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

### 12 — Decaimiento porcentual

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

### 13 — Cálculo de remanente

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

### 14 — Determinación de tiempo transcurrido

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "avanzado"
  tags: ["calculo", "tiempo"]

variables:
  datos: [[100, 50, 500], [80, 40, 1000], [60, 30, 1500]]
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

### 15 — Secuencia de decaimiento

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

### 16 — El límite del Carbono-14

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

### 17 — ¿Por qué no funciona en rocas antiguas?

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

### 18 — Comparación de isótopos

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

### 19 — Secuencia de desintegración

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

### 20 — Relación Tiempo-Isótopo

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

### 21 — Decaimiento de Carbono-14

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

### 22 — Isótopos de Uranio en Rocas

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
  - "10"
  - "20"
  - "40"

enunciado: "Se analiza una roca con una masa inicial de {m_i} g de un isótopo radiactivo. Si tras el paso del tiempo la masa remanente es de {m_f} g, ¿cuántas vidas medias han transcurrido?"

pasos:
  - "Identificar la fracción remanente: m_f / m_i"
  - "Determinar cuántas veces se debe dividir la masa inicial por 2 para llegar a la masa final"

explicacion: |
  La relación es m_f = m_i * (1/2)^n. En todos los casos presentados, la masa se redujo a una octava parte, lo que equivale a 3 vidas medias.
```

### 23 — Masa remanente de Potasio-40

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

### 24 — Relación de abundancia isotópica

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

### 25 — Secuencia de desintegración

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
