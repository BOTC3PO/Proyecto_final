# Lengua — Género lírico (cuestionario, 20 preguntas VBLang)

> Tema: `P10Bb`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Definición del género lírico

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "basico"
  tags: ["genero_lirico", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El género lírico expresa sentimientos, emociones o reflexiones subjetivas, generalmente en verso, sin necesitar una historia con personajes y trama."

pasos:
  - "A diferencia del narrativo, su eje no es contar hechos sino expresar una experiencia interior."

explicacion: |
  Verdadero: la expresión subjetiva, no el relato de hechos, define
  al género lírico.
```

### 2 — El hablante lírico no es el autor

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "intermedio"
  tags: ["hablante_lirico"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El hablante lírico de un poema es siempre exactamente el poeta que lo escribió."

pasos:
  - "Igual que el narrador en la narrativa, el hablante lírico es una voz construida dentro del texto, no la persona real del autor."

explicacion: |
  Falso: el hablante lírico (o \"yo lírico\") puede coincidir con el
  autor real o ser una construcción distinta.
```

### 3 — Identificar el verso

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "basico"
  tags: ["verso"]

variables:
  n: uno_de([1, 1])

respuesta: "verso"
tipo: completar

enunciado: "Cada línea de un poema se llama..."

pasos:
  - "Es la unidad básica de organización del poema."

explicacion: |
  El verso es la línea individual dentro de un poema.
```

### 4 — Identificar la estrofa

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "basico"
  tags: ["estrofa"]

variables:
  n: uno_de([1, 1])

respuesta: "estrofa"
tipo: completar

enunciado: "Un grupo de versos separado de otros grupos por un espacio en blanco se llama..."

pasos:
  - "Es el equivalente al párrafo, pero en poesía."

explicacion: |
  La estrofa agrupa varios versos, igual que el párrafo agrupa
  oraciones en prosa.
```

### 5 — Identificar rima consonante

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "intermedio"
  tags: ["rima", "consonante"]

variables:
  n: uno_de([1, 1])

respuesta: "consonante"
tipo: mc
opciones_explicitas: ["consonante", "asonante", "libre"]

enunciado: "En los versos que terminan en \"cantar\" y \"lugar\", donde coinciden TODOS los sonidos desde la última vocal acentuada, la rima es..."

pasos:
  - "Consonante: coinciden vocales Y consonantes desde la última vocal acentuada."

explicacion: |
  La rima consonante exige coincidencia total de sonidos, no sólo de
  vocales.
```

### 6 — Identificar rima asonante

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "intermedio"
  tags: ["rima", "asonante"]

variables:
  n: uno_de([1, 1])

respuesta: "asonante"
tipo: mc
opciones_explicitas: ["consonante", "asonante", "libre"]

enunciado: "En los versos que terminan en \"cantar\" y \"amanecer\", donde sólo coinciden las vocales (a-a) desde la última acentuada, la rima es..."

pasos:
  - "Asonante: sólo coinciden las vocales, no las consonantes."

explicacion: |
  La rima asonante es más laxa: sólo exige coincidencia de vocales.
```

### 7 — Identificar verso libre

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "intermedio"
  tags: ["verso_libre"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El verso libre no tiene rima ni métrica fija, y es muy común en la poesía moderna."

pasos:
  - "A diferencia de la poesía clásica, el verso libre prescinde de las reglas de rima y medida."

explicacion: |
  Verdadero: el verso libre es una forma sin las restricciones
  formales de rima/métrica regular.
```

### 8 — Qué mide la métrica

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "intermedio"
  tags: ["metrica"]

variables:
  n: uno_de([1, 1])

respuesta: "las sílabas de cada verso"
tipo: mc
opciones_explicitas: ["las sílabas de cada verso", "la cantidad de versos del poema", "la cantidad de estrofas"]

enunciado: "La métrica de un poema cuenta..."

pasos:
  - "La métrica se ocupa de la medida silábica de cada verso, no de cuántos versos o estrofas tiene el poema."

explicacion: |
  La métrica mide la cantidad de sílabas por verso (con reglas
  adicionales de sinalefa y acentuación final).
```

### 9 — Métrica regular vs. irregular

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "intermedio"
  tags: ["metrica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un poema tiene métrica regular cuando todos sus versos tienen la misma cantidad de sílabas."

pasos:
  - "Métrica irregular es cuando los versos varían de longitud silábica."

explicacion: |
  Verdadero: la regularidad se refiere a la igualdad en la medida
  silábica entre los versos del poema.
```

### 10 — Recursos literarios en el género lírico

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "avanzado"
  tags: ["recursos_literarios", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El género lírico, junto con el narrativo, es donde más se concentran los recursos literarios como la metáfora o la comparación."

pasos:
  - "La expresión subjetiva del género lírico se apoya fuertemente en un lenguaje figurado."

explicacion: |
  Verdadero: el estudio de recursos literarios se apoya
  especialmente en ejemplos del género lírico.
```

### 11 — Diferenciar género lírico de narrativo

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "intermedio"
  tags: ["genero_lirico", "genero_narrativo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El género lírico, igual que el narrativo, necesita siempre personajes y una trama con conflicto."

pasos:
  - "El género lírico puede expresar una emoción sin contar ninguna historia con personajes."

explicacion: |
  Falso: la lírica se centra en la expresión subjetiva, no en el
  relato de hechos con personajes.
```

### 12 — Reconocer estrofa vs. verso

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "basico"
  tags: ["verso", "estrofa", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Verso y estrofa son sinónimos: ambos designan una sola línea del poema."

pasos:
  - "El verso es una línea; la estrofa es un grupo de varios versos."

explicacion: |
  Falso: la estrofa agrupa varios versos, no es equivalente a uno
  solo.
```

### 13 — El poema como forma predominante del género lírico

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "basico"
  tags: ["genero_lirico", "formas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El poema es la forma más representativa del género lírico."

pasos:
  - "La organización en versos y estrofas es característica de la poesía."

explicacion: |
  Verdadero: aunque hay prosa poética, el poema (organizado en verso)
  es la forma más típica del género lírico.
```

### 14 — Rima consonante vs. asonante: comparación de rigor

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "avanzado"
  tags: ["rima", "comparacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La rima consonante es más exigente que la asonante, porque requiere coincidencia de todos los sonidos (vocales y consonantes), no sólo de las vocales."

pasos:
  - "Consonante: coincide todo. Asonante: coinciden sólo vocales."

explicacion: |
  Verdadero: por eso la rima consonante es más difícil de lograr que
  la asonante.
```

### 15 — Clasificar tipo de rima en ejemplos

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "intermedio"
  tags: ["rima", "practica"]

variables:
  pares: ["flor / dolor", "cielo / sereno"]
  tipos: ["consonante", "asonante"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["consonante", "asonante", "libre"]

enunciado: "El par de versos que terminan en \"{pares[idx]}\" tiene rima..."

pasos:
  - "Comparar todos los sonidos finales (consonante) o sólo las vocales (asonante) desde la última vocal acentuada."

explicacion: |
  \"flor/dolor\" coincide en todo el sonido final → consonante.
  \"cielo/sereno\" sólo coincide en las vocales e-o → asonante.
```

### 16 — El hablante lírico puede no coincidir con el autor

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "avanzado"
  tags: ["hablante_lirico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un poeta puede escribir un poema con un hablante lírico que exprese una emoción o punto de vista distinto al suyo propio."

pasos:
  - "El hablante lírico, igual que un narrador en una novela, es una construcción del texto, no una autobiografía obligatoria."

explicacion: |
  Verdadero: separar hablante lírico de autor real evita leer todo
  poema como confesión literal del poeta.
```

### 17 — Verso libre no significa ausencia de estructura

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "avanzado"
  tags: ["verso_libre"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un poema en verso libre puede seguir organizado en versos y estrofas, aunque no tenga rima ni métrica regular."

pasos:
  - "Prescindir de rima/métrica no elimina la organización básica en líneas (versos) y grupos (estrofas)."

explicacion: |
  Verdadero: verso libre se refiere a la ausencia de rima/métrica
  fija, no a la ausencia total de forma.
```

### 18 — Ordenar el análisis formal de un poema

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "intermedio"
  tags: ["genero_lirico", "metodo"]

enunciado: "Ordená los pasos para analizar la forma de un poema."
tipo: ordenar
opciones_explicitas:
  - "Contar cuántos versos tiene y cómo se agrupan en estrofas"
  - "Revisar si hay rima entre los versos, y de qué tipo (consonante/asonante)"
  - "Contar las sílabas de cada verso para ver si la métrica es regular"
  - "Identificar quién es el hablante lírico del poema"
respuesta_orden: ["Contar cuántos versos tiene y cómo se agrupan en estrofas", "Revisar si hay rima entre los versos, y de qué tipo (consonante/asonante)", "Contar las sílabas de cada verso para ver si la métrica es regular", "Identificar quién es el hablante lírico del poema"]
explicacion: |
  El análisis va de la estructura visible (versos/estrofas) a la
  sonora (rima), a la silábica (métrica) y termina en la voz que
  habla en el poema.
```

### 19 — Género lírico vs. dramático

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "avanzado"
  tags: ["genero_lirico", "genero_dramatico", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El género lírico, igual que el dramático, está escrito principalmente para ser representado con diálogos entre personajes en un escenario."

pasos:
  - "El lírico expresa una voz subjetiva (el hablante lírico), no está organizado como diálogo escénico."

explicacion: |
  Falso: el género dramático se organiza en diálogos para
  representación teatral; el lírico expresa la voz de un hablante,
  sin esa estructura de diálogo escénico.
```

### 20 — Aplicación: reconocer un texto lírico

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "intermedio"
  tags: ["genero_lirico", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: "lírico"
tipo: mc
opciones_explicitas: ["lírico", "narrativo", "dramático"]

enunciado: "Un texto breve, organizado en versos y estrofas, que expresa la tristeza de un hablante sin contar una historia con personajes ni presentar diálogos escénicos, es de género..."

pasos:
  - "Verso + estrofa + expresión subjetiva sin trama ni diálogo escénico = lírico."

explicacion: |
  Todas las marcas descriptas (verso, estrofa, expresión subjetiva)
  corresponden al género lírico.
```
