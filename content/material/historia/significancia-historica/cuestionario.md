# Historia — Significancia histórica (cuestionario, 20 preguntas VBLang)

> Tema: `T8`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la significancia histórica

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "basico"
  tags: ["significancia_historica", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La significancia histórica es el criterio que usan los historiadores para decidir qué hechos merecen ser estudiados, recordados y enseñados."

pasos:
  - "Nadie puede estudiar cada detalle de todo lo que ocurrió en el pasado."

explicacion: |
  Verdadero: es la definición central de significancia histórica.
```

### 2 — El pasado es infinito, la historia estudiada no

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["significancia_historica", "seleccion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Todo lo que ocurrió en el pasado es, en sentido literal, \"historia\", pero nadie puede ni querría estudiar cada detalle de cada día de cada persona que vivió alguna vez."

pasos:
  - "Es la razón por la que hace falta un criterio de selección."

explicacion: |
  Verdadero: es el punto de partida de por qué existe este concepto.
```

### 3 — Criterio de impacto profundo

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["criterios", "impacto_profundo"]

variables:
  n: uno_de([1, 1])

respuesta: "impacto profundo"
tipo: mc
opciones_explicitas: ["impacto profundo", "alcance amplio", "duración de los efectos"]

enunciado: "El criterio que evalúa si un hecho afectó a las personas de forma significativa (una guerra mundial vs. una discusión de vecinos) se llama..."

pasos:
  - "Es uno de los cinco criterios de significancia mencionados en la teoría."

explicacion: |
  El impacto profundo evalúa la intensidad del efecto de un hecho
  sobre las personas afectadas.
```

### 4 — Criterio de alcance amplio

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["criterios", "alcance_amplio"]

variables:
  n: uno_de([1, 1])

respuesta: "alcance amplio"
tipo: mc
opciones_explicitas: ["impacto profundo", "alcance amplio", "resonancia hoy"]

enunciado: "El criterio que evalúa si un hecho afectó a muchas personas o regiones, o sólo a un grupo muy chico y localizado, se llama..."

pasos:
  - "Es otro de los cinco criterios de significancia mencionados en la teoría."

explicacion: |
  El alcance amplio evalúa cuántas personas o regiones se vieron
  afectadas por un hecho.
```

### 5 — Criterio de duración de los efectos

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["criterios", "duracion_de_efectos"]

variables:
  n: uno_de([1, 1])

respuesta: "duración de los efectos"
tipo: mc
opciones_explicitas: ["duración de los efectos", "alcance amplio", "revela algo más general"]

enunciado: "El criterio que evalúa si las consecuencias de un hecho se sintieron sólo un momento, o durante generaciones, se llama..."

pasos:
  - "Es otro de los cinco criterios de significancia mencionados en la teoría."

explicacion: |
  La duración de los efectos evalúa por cuánto tiempo se sintieron
  las consecuencias de un hecho.
```

### 6 — Criterio de resonancia/relevancia hoy

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["criterios", "resonancia_hoy"]

variables:
  n: uno_de([1, 1])

respuesta: "resonancia/relevancia hoy"
tipo: mc
opciones_explicitas: ["resonancia/relevancia hoy", "impacto profundo", "alcance amplio"]

enunciado: "El criterio que evalúa si un hecho ayuda a entender el presente o problemas actuales se llama..."

pasos:
  - "Es otro de los cinco criterios de significancia mencionados en la teoría."

explicacion: |
  La resonancia/relevancia hoy evalúa si el hecho sigue siendo útil
  para entender problemas actuales.
```

### 7 — Criterio de revelar algo más general

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["criterios", "revela_algo_general"]

variables:
  n: uno_de([1, 1])

respuesta: "revela algo más general"
tipo: mc
opciones_explicitas: ["revela algo más general", "duración de los efectos", "impacto profundo"]

enunciado: "El criterio que evalúa si un hecho es un ejemplo que ilumina un proceso más amplio, aunque en sí mismo sea un episodio menor, se llama..."

pasos:
  - "Es el quinto criterio de significancia mencionado en la teoría."

explicacion: |
  Un hecho puede ser significativo no por su magnitud propia, sino
  por lo que revela sobre un proceso histórico más general.
```

### 8 — La significancia no es fija en el tiempo

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["significancia_cambiante"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un mismo hecho puede considerarse muy significativo en un momento histórico y perder relevancia después, o al revés."

pasos:
  - "La significancia histórica cambia según qué preguntas le interesan a cada generación."

explicacion: |
  Verdadero: es un matiz central sobre la naturaleza no fija de la
  significancia histórica.
```

### 9 — Distintas historiografías priorizan hechos distintos

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["historiografia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La historia política tradicional prioriza reyes y batallas como significativos; la historia social prioriza la vida cotidiana de la gente común."

pasos:
  - "Ver `../../filosofia/historia-de-la-filosofia-y-corrientes/`: distintas corrientes historiográficas eligen distinto tipo de hechos como significativos."

explicacion: |
  Verdadero: es un ejemplo concreto de cómo la corriente
  historiográfica influye en qué se considera significativo.
```

### 10 — Significancia no es preferencia personal

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["no_es_gusto_personal"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Decir \"me interesa la historia militar, así que sólo eso es significativo\" es un juicio válido y suficiente de significancia histórica."

pasos:
  - "La significancia se argumenta con criterios (impacto, alcance, duración, resonancia), no es una simple cuestión de gusto individual."

explicacion: |
  Falso: la significancia histórica no es una preferencia personal
  sin fundamento, requiere argumentación con criterios objetivos.
```

### 11 — Un hecho pequeño puede ser muy significativo

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["hecho_pequeno_significativo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El asesinato de un solo archiduque puede desencadenar consecuencias enormes (una guerra mundial), volviéndolo altamente significativo pese a su escala aparentemente menor en el momento en que ocurrió."

pasos:
  - "El tamaño aparente de un hecho no determina por sí solo su significancia."

explicacion: |
  Verdadero: es el ejemplo central de por qué la magnitud aparente de
  un hecho no es el único criterio de significancia.
```

### 12 — Clasificar el criterio de significancia en un ejemplo

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["criterios", "practica"]

variables:
  hechos: ["una reforma que cambió cómo funciona una sociedad durante siglos", "un evento que ayuda a entender debates políticos actuales"]
  criterios: ["duración de los efectos", "resonancia/relevancia hoy"]
  idx: uno_de([0, 1])

respuesta: criterios[idx]
tipo: mc
opciones_explicitas: ["impacto profundo", "alcance amplio", "duración de los efectos", "resonancia/relevancia hoy"]

enunciado: "\"{hechos[idx]}\" se evalúa principalmente con el criterio de..."

pasos:
  - "Cada descripción corresponde principalmente a uno de los criterios de significancia estudiados."

explicacion: |
  Reconocer qué criterio aplica a un caso concreto es la práctica
  central de este tema.
```

### 13 — Significancia depende de periodización histórica

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Decidir qué del pasado vale la pena estudiar presupone ya tener un marco de períodos organizado donde ubicar esa selección."

pasos:
  - "Ver `../periodizacion-historica/`: es el prerrequisito directo de este tema."

explicacion: |
  Verdadero: es la conexión central entre este tema y su
  prerrequisito.
```

### 14 — Significancia como concepto del Big Six

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["big_six"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Significancia histórica es uno de los 6 conceptos del marco \"Big Six\" de pensamiento histórico, junto a causa/consecuencia y cambio/continuidad."

pasos:
  - "Ver `../causa-y-consecuencia/` y `../cambio-y-continuidad/`: son los otros conceptos de ese marco ya cubiertos en la cadena."

explicacion: |
  Verdadero: es el mismo marco teórico ya mencionado en temas
  anteriores de esta cadena.
```

### 15 — Los cinco criterios se combinan, no se usan por separado

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["criterios", "combinacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Evaluar la significancia de un hecho suele combinar varios de los cinco criterios a la vez (impacto, alcance, duración, resonancia, revelar algo general), no basta con aplicar sólo uno."

pasos:
  - "Un hecho puede ser significativo por varias razones combinadas al mismo tiempo."

explicacion: |
  Verdadero: es una aplicación práctica de cómo se usan estos
  criterios en conjunto, no de forma aislada.
```

### 16 — Un hecho puede ganar significancia con el tiempo

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["significancia_cambiante", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un hecho que en su momento pareció menor puede ganar significancia histórica más adelante, si se descubre que anticipaba o explicaba un proceso posterior importante."

pasos:
  - "Es la aplicación concreta de que la significancia cambia con el tiempo."

explicacion: |
  Verdadero: es la aplicación práctica del principio de significancia
  no fija estudiado en la teoría.
```

### 17 — Revisar qué queda excluido de un programa de estudio

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["seleccion", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cualquier programa de estudio de historia, incluida esta cadena de Tronco 6, aplica implícitamente criterios de significancia al decidir qué temas incluir y cuáles dejar afuera."

pasos:
  - "Es la aplicación reflexiva de este concepto a la propia estructura del material de estudio."

explicacion: |
  Verdadero: es una aplicación autorreferencial de por qué este
  concepto es relevante más allá de la teoría abstracta.
```

### 18 — Ordenar el proceso para evaluar la significancia de un hecho

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["significancia_historica", "metodo"]

enunciado: "Ordená los pasos para evaluar si un hecho histórico es significativo."
tipo: ordenar
opciones_explicitas:
  - "Identificar el hecho y a quiénes afectó directamente"
  - "Evaluar impacto profundo y alcance amplio de ese efecto"
  - "Evaluar la duración de los efectos y su resonancia en el presente"
  - "Concluir si, combinando esos criterios, el hecho merece un lugar en el estudio histórico"
respuesta_orden: ["Identificar el hecho y a quiénes afectó directamente", "Evaluar impacto profundo y alcance amplio de ese efecto", "Evaluar la duración de los efectos y su resonancia en el presente", "Concluir si, combinando esos criterios, el hecho merece un lugar en el estudio histórico"]
explicacion: |
  El proceso va de identificar el hecho a evaluar los distintos
  criterios combinados de significancia.
```

### 19 — Significancia histórica es un concepto argumentable, no absoluto

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["significancia_historica", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Distintos historiadores pueden argumentar distinta significancia para un mismo hecho, según qué criterios prioricen o desde qué corriente historiográfica trabajen, sin que exista una respuesta única y absoluta."

pasos:
  - "Es la síntesis de por qué la significancia es un juicio argumentado, no un hecho fijo."

explicacion: |
  Verdadero: es la conclusión central de este tema sobre la
  naturaleza del concepto de significancia histórica.
```

### 20 — Aplicación: justificar por qué estudiar un tema

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["significancia_historica", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al proponer un tema histórico para estudiar, conviene poder justificar su significancia con criterios concretos (impacto, alcance, duración, resonancia), en vez de sólo decir que \"parece interesante\"."

pasos:
  - "Es la aplicación práctica directa de todos los principios estudiados en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema al proponer o
  justificar el estudio de un hecho histórico.
```
