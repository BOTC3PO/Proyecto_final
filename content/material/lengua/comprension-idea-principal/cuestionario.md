# Lengua — Comprensión: idea principal (cuestionario, 20 preguntas VBLang)

> Tema: `P9`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Identificar la idea principal (explícita al inicio)

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "basico"
  tags: ["idea_principal", "explicita"]

variables:
  n: uno_de([1, 1])

respuesta: "Los perros son animales muy sociables"
tipo: mc
opciones_explicitas: ["Los perros son animales muy sociables", "Los perros viven en manada", "Los perros reconocen emociones"]

enunciado: "\"Los perros son animales muy sociables. Viven en manada en estado salvaje y reconocen las emociones de las personas.\" ¿Cuál es la idea principal?"

pasos:
  - "La primera oración suele anunciar la idea principal; el resto la desarrolla con ejemplos."

explicacion: |
  \"Viven en manada\" y \"reconocen emociones\" son ideas secundarias
  que apoyan la idea principal (que son sociables), no la reemplazan.
```

### 2 — Distinguir tema de idea principal

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "basico"
  tags: ["idea_principal", "tema"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El tema de un texto (\"los perros\") es lo mismo que su idea principal."

pasos:
  - "El tema es una palabra o frase corta; la idea principal es una oración completa con lo que se dice sobre ese tema."

explicacion: |
  Falso: el tema es de qué habla el texto; la idea principal es QUÉ
  dice sobre ese tema.
```

### 3 — Ideas secundarias como apoyo

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "basico"
  tags: ["idea_principal", "ideas_secundarias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las ideas secundarias explican, ejemplifican o dan detalles sobre la idea principal, pero no son el mensaje central del párrafo."

pasos:
  - "Un párrafo tiene una sola idea principal y puede tener varias ideas secundarias."

explicacion: |
  Verdadero: las ideas secundarias apoyan, no reemplazan, la idea
  principal.
```

### 4 — Idea principal al final del párrafo

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "ubicacion"]

variables:
  n: uno_de([1, 1])

respuesta: "El reciclaje es una práctica clave para cuidar el planeta"
tipo: mc
opciones_explicitas: ["El reciclaje es una práctica clave para cuidar el planeta", "El vidrio se recicla infinitas veces", "El papel tarda semanas en descomponerse"]

enunciado: "\"El vidrio se puede reciclar infinitas veces sin perder calidad. El papel, en cambio, sólo unas pocas veces. En definitiva, el reciclaje es una práctica clave para cuidar el planeta.\" ¿Cuál es la idea principal?"

pasos:
  - "Cuando el párrafo acumula datos y termina con una conclusión general, la idea principal suele estar al final."

explicacion: |
  Los datos sobre vidrio y papel son ejemplos que llevan a la
  conclusión final, que es la idea principal.
```

### 5 — Idea principal implícita

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "avanzado"
  tags: ["idea_principal", "implicita"]

variables:
  n: uno_de([1, 1])

respuesta: "El personaje estaba muy nervioso"
tipo: mc
opciones_explicitas: ["El personaje estaba muy nervioso", "El personaje tenía las manos frías", "El personaje miraba el reloj"]

enunciado: "\"Le temblaban las manos. Miraba el reloj cada dos minutos. No podía quedarse sentado.\" Ninguna oración lo dice literalmente, pero ¿cuál es la idea principal implícita?"

pasos:
  - "Cuando ninguna oración resume el párrafo, hay que inferir la idea general a partir de todos los detalles juntos."

explicacion: |
  Los tres detalles (manos que tiemblan, mirar el reloj, no poder
  quedarse quieto) son síntomas de nerviosismo — la idea principal
  hay que deducirla, no está escrita literal.
```

### 6 — Resumir en una oración

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "resumen"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si se tuviera que resumir un texto en una sola oración, esa oración sería (o se parecería mucho a) su idea principal."

pasos:
  - "Resumir obliga a distinguir lo esencial (idea principal) de los detalles (ideas secundarias)."

explicacion: |
  Verdadero: es la estrategia práctica más directa para verificar
  si se identificó bien la idea principal.
```

### 7 — Un párrafo, una idea principal

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "basico"
  tags: ["idea_principal", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Un párrafo suele tener varias ideas principales, una por cada oración."

pasos:
  - "Un párrafo bien construido gira en torno a una sola idea central, con oraciones secundarias que la apoyan."

explicacion: |
  Falso: lo habitual es una idea principal por párrafo, acompañada de
  varias ideas secundarias.
```

### 8 — Identificar detalles que NO son la idea principal

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "detalles"]

variables:
  n: uno_de([1, 1])

respuesta: "El uso de energías renovables creció mucho en la última década"
tipo: mc
opciones_explicitas: ["El uso de energías renovables creció mucho en la última década", "La energía solar usa paneles fotovoltaicos", "La energía eólica usa turbinas de viento"]

enunciado: "\"La energía solar usa paneles fotovoltaicos. La eólica usa turbinas de viento. El uso de energías renovables creció mucho en la última década.\" ¿Cuál es la idea principal?"

pasos:
  - "Los detalles técnicos (paneles, turbinas) son ejemplos de energías renovables; la afirmación general sobre su crecimiento es la idea principal."

explicacion: |
  Los detalles sobre cómo funciona cada energía son ideas
  secundarias que ilustran la idea principal (el crecimiento del
  uso).
```

### 9 — Estrategia: leer el párrafo completo antes de decidir

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "basico"
  tags: ["idea_principal", "estrategia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Conviene leer el párrafo completo antes de decidir cuál es la idea principal, en vez de asumir que siempre es la primera oración."

pasos:
  - "La idea principal puede estar al final o ser implícita; asumir que siempre está al inicio lleva a errores."

explicacion: |
  Verdadero: aunque el inicio es el lugar más común, no es el único,
  así que hay que confirmar leyendo todo el párrafo.
```

### 10 — Título del texto como pista

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "titulo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El título de un texto suele dar una pista sobre el tema, pero no reemplaza la necesidad de leer el párrafo para encontrar la idea principal completa."

pasos:
  - "El título anticipa el tema (una palabra/frase corta), pero la idea principal es una oración completa que hay que construir leyendo."

explicacion: |
  Verdadero: el título ayuda a ubicar el tema, pero la idea principal
  necesita leer el desarrollo del párrafo.
```

### 11 — Idea principal en un párrafo narrativo corto

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "narrativo"]

variables:
  n: uno_de([1, 1])

respuesta: "La ciudad se quedó sin luz durante toda la noche"
tipo: mc
opciones_explicitas: ["La ciudad se quedó sin luz durante toda la noche", "Los vecinos salieron con velas", "Se escuchó un ruido fuerte en el barrio"]

enunciado: "\"Se escuchó un ruido fuerte. Las luces se apagaron de golpe. Los vecinos salieron con velas a la calle. La ciudad se quedó sin luz durante toda la noche.\" ¿Cuál es la idea principal?"

pasos:
  - "El ruido, las velas y el apagón son los eventos que llevan a la idea central del corte de luz prolongado."

explicacion: |
  La idea principal resume el hecho central (el corte de luz); los
  demás detalles son la secuencia de eventos que lo acompañan.
```

### 12 — Diferenciar idea principal de ejemplo

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "ejemplos"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Un ejemplo dado dentro de un párrafo (\"por ejemplo, las manzanas y las peras\") suele ser la idea principal del párrafo."

pasos:
  - "Los ejemplos ilustran una afirmación más general (la idea principal), no la constituyen."

explicacion: |
  Falso: los ejemplos son ideas secundarias que apoyan o ilustran la
  idea principal, casi nunca son la idea principal en sí.
```

### 13 — Idea principal de un párrafo expositivo

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "basico"
  tags: ["idea_principal", "expositivo"]

variables:
  n: uno_de([1, 1])

respuesta: "El agua es esencial para la vida en la Tierra"
tipo: mc
opciones_explicitas: ["El agua es esencial para la vida en la Tierra", "El agua cubre el 70% de la superficie terrestre", "El agua se congela a 0°C"]

enunciado: "\"El agua es esencial para la vida en la Tierra. Cubre el 70% de la superficie terrestre y forma parte de todos los seres vivos.\" ¿Cuál es la idea principal?"

pasos:
  - "La primera oración anuncia la idea general; los datos que siguen la respaldan."

explicacion: |
  Los datos sobre el porcentaje de superficie y los seres vivos
  apoyan la afirmación inicial, que es la idea principal.
```

### 14 — Reconocer un párrafo sin idea principal clara

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "avanzado"
  tags: ["idea_principal", "ambiguedad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cuando un párrafo no tiene una oración que resuma explícitamente la idea principal, igual se puede (y se debe) inferir una a partir del conjunto de oraciones."

pasos:
  - "La idea implícita se construye combinando todos los detalles del párrafo, no citando una sola oración."

explicacion: |
  Verdadero: la ausencia de una oración-resumen no significa que no
  haya idea principal, sólo que hay que inferirla.
```

### 15 — Idea principal vs. opinión personal del lector

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "avanzado"
  tags: ["idea_principal", "objetividad"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La idea principal de un texto puede variar según lo que a cada lector le parezca más interesante del párrafo."

pasos:
  - "La idea principal es una propiedad del texto (lo que el autor quiso comunicar como central), no una preferencia subjetiva del lector."

explicacion: |
  Falso: aunque distintos lectores destaquen distintos detalles, la
  idea principal es la que el párrafo desarrolla como eje central,
  no una elección personal.
```

### 16 — Práctica: elegir la idea principal correcta

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "El ejercicio regular mejora la salud física y mental"
tipo: mc
opciones_explicitas: ["El ejercicio regular mejora la salud física y mental", "Correr 30 minutos quema calorías", "El yoga reduce el estrés"]

enunciado: "\"Correr 30 minutos quema calorías. El yoga reduce el estrés. En general, el ejercicio regular mejora la salud física y mental.\" ¿Cuál es la idea principal?"

pasos:
  - "Correr y el yoga son ejemplos concretos de ejercicio que respaldan la afirmación general."

explicacion: |
  La afirmación general que engloba a los dos ejemplos (correr, yoga)
  es la idea principal.
```

### 17 — Cada párrafo de un texto largo tiene su propia idea principal

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "texto_largo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En un texto de varios párrafos, cada párrafo puede tener su propia idea principal, distinta de las de los otros párrafos."

pasos:
  - "El texto completo tiene un tema general, pero cada párrafo suele desarrollar un aspecto distinto de ese tema."

explicacion: |
  Verdadero: identificar la idea principal de CADA párrafo es el
  primer paso para armar luego un resumen de todo el texto.
```

### 18 — Idea principal no es lo mismo que el título

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "basico"
  tags: ["idea_principal", "titulo"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El título de un texto siempre coincide exactamente con la idea principal del primer párrafo."

pasos:
  - "El título suele ser más corto y general que la idea principal, que es una oración completa desarrollada en el texto."

explicacion: |
  Falso: el título anticipa el tema, pero la idea principal es más
  específica y hay que construirla leyendo el párrafo.
```

### 19 — Ordenar la estrategia para encontrar la idea principal

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "metodo"]

enunciado: "Ordená los pasos de la estrategia para encontrar la idea principal de un párrafo."
tipo: ordenar
opciones_explicitas:
  - "Leer el párrafo completo"
  - "Preguntarse de qué trata principalmente"
  - "Distinguir esa respuesta de los detalles que sólo la apoyan"
  - "Si no está escrita literal, resumirla con las propias palabras"
respuesta_orden: ["Leer el párrafo completo", "Preguntarse de qué trata principalmente", "Distinguir esa respuesta de los detalles que sólo la apoyan", "Si no está escrita literal, resumirla con las propias palabras"]
explicacion: |
  El orden va de la lectura completa a la identificación, pasando por
  descartar detalles, hasta inferir cuando no está escrita literal.
```

### 20 — Aplicación: la idea principal como base del resumen

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "avanzado"
  tags: ["idea_principal", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Identificar bien la idea principal es la base para poder resumir un texto y también para clasificar de qué tipo textual se trata (narrativo, expositivo, argumentativo...)."

pasos:
  - "Sin saber de qué trata un texto, no se puede decidir cómo está organizado ni para qué fue escrito."

explicacion: |
  Verdadero: por eso este tema es prerrequisito directo de \"tipos
  textuales\", el siguiente módulo de la currícula.
```
