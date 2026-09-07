# Lengua — subordinada sustantiva de sujeto (cuestionario, 23 preguntas VBLang)

> Tema: `lengua/subordinada-sustantiva-de-sujeto`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "subordinada_sustantiva", "identificacion"]

variables:
  pares: [["Es necesario que estudies más", "que estudies más"], ["Me alegra que estés aquí", "que estés aquí"]]
  idx: uno_de([0, 1])
  frase: pares[idx][0]

respuesta: pares[idx][1]
tipo: completar

enunciado: "Analizá la siguiente oración: '{frase}'. ¿Cuál es la oración subordinada sustantiva de sujeto?"

explicacion: |
  La subordinada sustantiva de sujeto cumple la función de sujeto del verbo principal (ser/estar/gustar, etc.). En 'Es necesario que estudies más', el sujeto es 'que estudies más'. En 'Me alegra que estés aquí', el sujeto es 'que estés aquí'.
```

### 2 — pregunta 2

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "pronombre_neutro"]

variables:
  oracion: "Es cierto que Juan llegó tarde"
  subordinada: "que Juan llegó tarde"

respuesta: "eso"
tipo: input

enunciado: "En la oración '{oracion}', ¿qué pronombre personal o demostrativo neutro podemos usar para reemplazar a la subordinada sustantiva de sujeto '{subordinada}'?"

explicacion: |
  La subordinada 'que Juan llegó tarde' funciona como sujeto. Podemos reemplazarla por el pronombre 'eso' o 'algo'. 'Eso es cierto' mantiene la estructura sintáctica básica.
```

### 3 — pregunta 3

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "conectores"]

variables:
  oracion: "Es importante que descanses"
  conector: "que"

respuesta: "que"
tipo: input

enunciado: "En la oración '{oracion}', ¿qué palabra introduce la subordinada sustantiva de sujeto?"

explicacion: |
  La conjunción 'que' es el conector más habitual para introducir oraciones subordinadas sustantivas de sujeto.
```

### 4 — pregunta 4

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "infinitivo"]

variables:
  oracion: "Es necesario estudiar para aprobar"
  sujeto: "estudiar para aprobar"

respuesta: "estudiar para aprobar"
tipo: input

enunciado: "En la oración '{oracion}', ¿cuál es la oración subordinada sustantiva de sujeto (que puede estar formada por un infinitivo)?"

explicacion: |
  Cuando el sujeto es indeterminado, se usa el infinitivo. 'Estudiar para aprobar' es el sujeto de 'es necesario'.
```

### 5 — pregunta 5

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_pronominales"]

variables:
  oracion: "Me sorprende que no hayas llamado"
  sujeto: "que no hayas llamado"

respuesta: "que no hayas llamado"
tipo: input

enunciado: "En la oración '{oracion}', ¿cuál es la subordinada sustantiva de sujeto?"

explicacion: |
  El verbo es 'sorprender' (en forma pronominal 'me sorprende'). La pregunta '¿Qué me sorprende?' da como respuesta 'que no hayas llamado', que es el sujeto.
```

### 6 — pregunta 6

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "identificacion"]

variables:
  oracion: "Es evidente que ganaremos el partido"
  subordinada: "que ganaremos el partido"

respuesta: "que ganaremos el partido"
tipo: input

enunciado: "Identificá la subordinada sustantiva de sujeto en: '{oracion}'"

explicacion: |
  El verbo principal es 'es'. La pregunta '¿Qué es evidente?' responde 'que ganaremos el partido'.
```

### 7 — pregunta 7

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "sustitucion"]

variables:
  oracion: "Es bueno que ayudes"
  pronombre: "eso"

respuesta: "eso"
tipo: input

enunciado: "En la oración '{oracion}', ¿qué pronombre puede reemplazar a la subordinada de sujeto para formar una oración impersonal o con sujeto nulo?"

explicacion: |
  'Eso es bueno' o 'Algo es bueno'. El pronombre 'eso' es el más común para referirse a una proposición completa.
```

### 8 — pregunta 8

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "avanzado"
  tags: ["sintaxis", "nucleo"]

variables:
  oracion: "Es un hecho que lo hizo"
  nucleo: "que lo hizo"

respuesta: "que lo hizo"
tipo: input

enunciado: "En la oración '{oracion}', ¿cuál es el núcleo (la proposición completa) de la subordinada sustantiva de sujeto?"

explicacion: |
  El sujeto es la proposición completa 'que lo hizo'. No es una sola palabra.
```

### 9 — pregunta 9

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "verbo_ser"]

variables:
  oracion: "Es una lástima que se vaya"
  subordinada: "que se vaya"

respuesta: "que se vaya"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ser'. Pregunta '¿Qué es una lástima?'. Respuesta: 'que se vaya'.
```

### 10 — pregunta 10

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Me gusta que vengas"
  subordinada: "que vengas"

respuesta: "que vengas"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'gustar'. Pregunta '¿Qué gusta?'. Respuesta: 'que vengas'.
```

### 11 — pregunta 11

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Me importa que seas honesto"
  subordinada: "que seas honesto"

respuesta: "que seas honesto"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'importar'. Pregunta '¿Qué me importa?'. Respuesta: 'que seas honesto'.
```

### 12 — pregunta 12

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Me parece que es tarde"
  subordinada: "que es tarde"

respuesta: "que es tarde"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'parecer'. Pregunta '¿Qué me parece?'. Respuesta: 'que es tarde'.
```

### 13 — pregunta 13

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Basta que lo digas"
  subordinada: "que lo digas"

respuesta: "que lo digas"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'bastar'. Pregunta '¿Qué basta?'. Respuesta: 'que lo digas'.
```

### 14 — pregunta 14

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Me ocurre que te vi ayer"
  subordinada: "que te vi ayer"

respuesta: "que te vi ayer"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ocurrir' (en sentido de 'venir a la mente'). Pregunta '¿Qué me ocurre?'. Respuesta: 'que te vi ayer'.
```

### 15 — pregunta 15

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "avanzado"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Consta que lo hizo él"
  subordinada: "que lo hizo él"

respuesta: "que lo hizo él"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'constar' (en sentido de 'estar demostrado'). Pregunta '¿Qué consta?'. Respuesta: 'que lo hizo él'.
```

### 16 — pregunta 16

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Se trata de que ganemos"
  subordinada: "que ganemos"

respuesta: "que ganemos"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'tratar' (en sentido de 'versar sobre'). Pregunta '¿Qué se trata?'. Respuesta: 'que ganemos'.
```

### 17 — pregunta 17

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Falta que confirmes tu asistencia"
  subordinada: "que confirmes tu asistencia"

respuesta: "que confirmes tu asistencia"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'faltar' (en sentido de 'quedar pendiente'). Pregunta '¿Qué falta?'. Respuesta: 'que confirmes tu asistencia', que es el sujeto de 'falta'. (Ojo: 'Depende de que vengas' NO es un buen ejemplo de sujeto — 'depender de' rige la preposición 'de' de forma fija, por lo que 'de que vengas' ahí es complemento de régimen, no sujeto.)
```

### 18 — pregunta 18

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Es probable que vengas"
  subordinada: "que vengas"

respuesta: "que vengas"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ser'. Pregunta '¿Qué es probable?'. Respuesta: 'que vengas'.
```

### 19 — pregunta 19

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Es posible que llueva"
  subordinada: "que llueva"

respuesta: "que llueva"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ser'. Pregunta '¿Qué es posible?'. Respuesta: 'que llueva'.
```

### 20 — pregunta 20

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Es necesario que descanses"
  subordinada: "que descanses"

respuesta: "que descanses"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ser'. Pregunta '¿Qué es necesario?'. Respuesta: 'que descanses'.
```

### 21 — pregunta 21

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Es útil que leas"
  subordinada: "que leas"

respuesta: "que leas"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ser'. Pregunta '¿Qué es útil?'. Respuesta: 'que leas'.
```

### 22 — pregunta 22

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Es justo que te premien"
  subordinada: "que te premien"

respuesta: "que te premien"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ser'. Pregunta '¿Qué es justo?'. Respuesta: 'que te premien'.
```

### 23 — pregunta 23

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Es verdad que lo viste"
  subordinada: "que lo viste"

respuesta: "que lo viste"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ser'. Pregunta '¿Qué es verdad?'. Respuesta: 'que lo viste'.
```
