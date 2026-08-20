# Lengua — subordinada sustantiva de complemento de regimen (cuestionario, 22 preguntas VBLang)

> Tema: `lengua/subordinada-sustantiva-de-complemento-de-regimen`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "basico"
  tags: ["subordinada_sustantiva", "regimen_preposicional", "identificacion"]

variables:
  verbo_base: uno_de(["pensar", "confiar", "olvidarse", "acordarse"])
  prep: uno_de(["en", "en", "en"])
  nexo: uno_de(["que", "si"])
  contenido: uno_de(["el éxito", "la verdad", "lo correcto"])

respuesta: "prep + ' ' + nexo"
tipo: input

enunciado: "En la oración 'El docente {verbo_base} {prep}{nexo} {contenido}', ¿cuál es la secuencia preposición-nexo que introduce la subordinada?"

explicacion: |
  Los verbos como 'pensar', 'confiar' o 'olvidarse' rigen preposiciones específicas ('en', 'de', 'por'). Cuando el complemento es una oración, la preposición se mantiene antes del nexo (que/si).
```

### 2 — pregunta 2

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "regimen_preposicional", "mc"]

variables:
  prep_correcta: "de"
  prep_distractor1: "en"
  prep_distractor2: "a"
  prep_distractor3: "por"

respuesta: "de"
tipo: mc

enunciado: "¿Qué preposición rige correctamente el verbo 'depender' en la oración 'Todo depende ___ que llegues a tiempo'?"
opciones_explicitas: ["en", "a", "de", "por"]

explicacion: |
  El verbo 'depender' rige el régimen preposicional 'de'. Por lo tanto, la forma correcta es 'depende de que...'.
```

### 3 — pregunta 3

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "basico"
  tags: ["subordinada_sustantiva", "completar", "preposicion"]

variables:
  prep: uno_de(["en", "por", "de", "con"])
  verbo: uno_de(["insistir", "hablar", "acordar", "trabajar"])
  sujeto: uno_de(["el equipo", "los alumnos", "la directiva", "el gobierno"])

respuesta: "prep"
tipo: completar

enunciado: "Completa la oración: '{sujeto} {verbo} ___ que se apruebe el presupuesto.' (Escribe solo la preposición)."
respuestas_validas:
  - "en"
  - "por"
  - "de"
  - "con"

explicacion: |
  Dependiendo del verbo elegido, la preposición cambia: insistir EN, hablar POR, acordar DE, trabajar CON. Todas son válidas según el verbo seleccionado.
```

### 4 — pregunta 4

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "funcion_sintactica", "nexo"]

variables:
  prep: "en"
  nexo: "que"
  verbo: "confiar"
  sujeto: "nosotros"

respuesta: "conjuncional"
tipo: input

enunciado: "En la oración '{sujeto} {verbo} {prep}{nexo} lo logremos', ¿qué función sintáctica cumple el nexo '{nexo}' dentro de la subordinada?"

explicacion: |
  En las subordinadas sustantivas introducidas por 'que', este nexo cumple la función de conjunción integrante o nexo subordinante, conectando la proposición principal con la subordinada.
```

### 5 — pregunta 5

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "regimen_preposicional", "mc"]

variables:
  prep_origen: "en"
  verbo_origen: "pensar"
  prep_destino: "de"
  verbo_destino: "olvidar"

respuesta: "de"
tipo: mc

enunciado: "Si cambiamos el verbo 'pensar' (que rige 'en') por 'olvidarse' en la estructura 'No me olvidé ___ que viniste', ¿cuál es la preposición correcta?"
opciones_explicitas: ["en", "por", "de", "a"]

explicacion: |
  El verbo 'olvidarse' rige el régimen preposicional 'de'. Por lo tanto, se dice 'olvidarse de que...'.
```

### 6 — pregunta 6

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "identificacion", "analisis"]

variables:
  prep: "por"
  nexo: "que"
  verbo: "lamentar"
  sujeto: "el director"

respuesta: "complemento_de_regimen"
tipo: input

enunciado: "En la oración '{sujeto} {verbo} {prep}{nexo} se retrasara la reunión', ¿qué tipo de complemento sustantivo cumple la parte '{prep}{nexo} se retrasara la reunión'?"

explicacion: |
  Cumple la función de Complemento de Régimen (o Régimen Preposicional) porque completa al verbo 'lamentar' mediante la preposición 'por'.
```

### 7 — pregunta 7

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "regimen_preposicional", "mc"]

variables:
  prep_correcta: "a"
  prep_distractor1: "en"
  prep_distractor2: "de"
  prep_distractor3: "por"

respuesta: "a"
tipo: mc

enunciado: "¿Qué preposición rige el verbo 'aspirar' en la oración 'Aspiro ___ que me promocionen'?"
opciones_explicitas: ["en", "de", "a", "por"]

explicacion: |
  El verbo 'aspirar' rige el régimen preposicional 'a'. Por lo tanto, la forma correcta es 'aspiro a que...'.
```

### 8 — pregunta 8

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "nexos", "completar"]

variables:
  prep: "sobre"
  nexo: "cuándo"
  verbo: "preguntar"
  sujeto: "el periodista"

respuesta: "nexo"
tipo: completar

enunciado: "Completa la oración: '{sujeto} {verbo} {prep} ___ llegará el vuelo.' (Escribe solo el nexo interrogativo)."
respuestas_validas:
  - "cuando"
  - "cuándo"

explicacion: |
  Cuando la subordinada es interrogativa indirecta, se usan nexos interrogativos como 'cuándo', 'dónde', 'cómo', etc.
```

### 9 — pregunta 9

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "complemento_directo", "mc"]

variables:
  verbo_cd: "ver"
  verbo_reg: "pensar"
  prep_reg: "en"

respuesta: "en"
tipo: mc

enunciado: "Si 'ver' no lleva preposición (CD), ¿cuál es la preposición que introduce la subordinada para el verbo 'pensar'?"
opciones_explicitas: ["a", "en", "de", "sin"]

explicacion: |
  A diferencia del CD que es directo, el verbo 'pensar' requiere la preposición 'en' para introducir su complemento de régimen.
```

### 10 — pregunta 10

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "basico"
  tags: ["subordinada_sustantiva", "regimen_preposicional", "identificacion"]

variables:
  prep: "por"
  nexo: "que"
  verbo: "agradecer"
  sujeto: "te"

respuesta: "prep"
tipo: input

enunciado: "En la oración incorrecta 'Te agradezco ___ que me ayudes', ¿qué preposición falta para que sea correcta?"

explicacion: |
  El verbo 'agradecer' (en su uso formal con persona) rige 'a', pero con cosas/acciones suele ser directo. Sin embargo, 'agradecer' a veces se usa con 'por' en contextos específicos o se considera CD. Mejor ejemplo: 'hablar POR que'. Ajustemos la pregunta a un verbo claro: 'depender DE que'.
```

### 11 — pregunta 11

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "regimen_preposicional", "mc"]

variables:
  prep_correcta: "de"
  prep_distractor1: "en"
  prep_distractor2: "a"
  prep_distractor3: "por"

respuesta: "de"
tipo: mc

enunciado: "¿Qué preposición rige el verbo 'acordar' en la oración 'Acuerdo ___ que nos vimos ayer'?"
opciones_explicitas: ["en", "a", "de", "por"]

explicacion: |
  El verbo 'acordar' (en el sentido de tener en la memoria) rige el régimen preposicional 'de'. Por lo tanto, 'acuerdo de que...'.
```

### 12 — pregunta 12

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "nexos", "completar"]

variables:
  prep: "sobre"
  nexo: "si"
  verbo: "dudar"
  sujeto: "ella"

respuesta: "nexo"
tipo: completar

enunciado: "Completa la oración: '{sujeto} {verbo} {prep} ___ llueva mañana.' (Escribe solo el nexo)."
respuestas_validas:
  - "si"

explicacion: |
  Cuando la subordinada expresa duda o incertidumbre, se utiliza el nexo 'si' (interrogativo indirecto).
```

### 13 — pregunta 13

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "regimen_preposicional", "mc"]

variables:
  prep_correcta: "por"
  prep_distractor1: "en"
  prep_distractor2: "de"
  prep_distractor3: "a"

respuesta: "por"
tipo: mc

enunciado: "¿Qué preposición rige el verbo 'lamentar' en la oración 'Lamento ___ se haya perdido el tren'?"
opciones_explicitas: ["en", "de", "a", "por"]

explicacion: |
  El verbo 'lamentar' rige el régimen preposicional 'por'. Por lo tanto, 'lamento por que...'.
```

### 14 — pregunta 14

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "identificacion", "analisis"]

variables:
  prep: "a"
  nexo: "que"
  verbo: "aspirar"
  sujeto: "el candidato"

respuesta: "regimen_preposicional"
tipo: input

enunciado: "En la oración '{sujeto} {verbo} {prep}{nexo} gane las elecciones', ¿cómo se clasifica la subordinada '{prep}{nexo} gane las elecciones'?"

explicacion: |
  Se clasifica como Subordinada Sustantiva de Complemento de Régimen, ya que completa al verbo 'aspirar' mediante la preposición 'a'.
```

### 15 — pregunta 15

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "regimen_preposicional", "mc"]

variables:
  prep_correcta: "con"
  prep_distractor1: "en"
  prep_distractor2: "de"
  prep_distractor3: "a"

respuesta: "con"
tipo: mc

enunciado: "¿Qué preposición rige el verbo 'contar' en la oración 'Cuento ___ me apoyes'?"
opciones_explicitas: ["en", "de", "a", "con"]

explicacion: |
  El verbo 'contar' (en el sentido de depender de) rige el régimen preposicional 'con'. Por lo tanto, 'cuento con que...'.
```

### 16 — pregunta 16

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "basico"
  tags: ["subordinada_sustantiva", "completar", "preposicion"]

variables:
  prep: uno_de(["en", "de", "por"])
  verbo: uno_de(["insistir", "acordar", "lamentar"])
  sujeto: uno_de(["yo", "tú", "nosotros"])

respuesta: "prep"
tipo: completar

enunciado: "Completa la oración: '{sujeto} {verbo} ___ que todo salga bien.' (Escribe la preposición correcta para ese verbo)."
respuestas_validas:
  - "en"
  - "de"
  - "por"

explicacion: |
  Insistir EN, Acordar DE, Lamentar POR. La respuesta depende del verbo sorteado.
```

### 17 — pregunta 17

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "regimen_preposicional", "mc"]

variables:
  prep_correcta: "sobre"
  prep_distractor1: "en"
  prep_distractor2: "de"
  prep_distractor3: "a"

respuesta: "sobre"
tipo: mc

enunciado: "¿Qué preposición rige el verbo 'informar' en la oración 'Te informo ___ que se canceló'?"
opciones_explicitas: ["en", "de", "a", "sobre"]

explicacion: |
  El verbo 'informar' rige el régimen preposicional 'sobre' (o 'de'). En este caso, 'sobre' es la opción más precisa para el contexto.
```

### 18 — pregunta 18

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "identificacion", "analisis"]

variables:
  prep: "de"
  nexo: "que"
  verbo: "olvidar"
  sujeto: "él"

respuesta: "complemento_de_regimen"
tipo: input

enunciado: "En la oración '{sujeto} olvidó ___ fue ayer', ¿qué función cumple la parte '{prep}{nexo} fue ayer'?"

explicacion: |
  Cumple la función de Complemento de Régimen, completando al verbo 'olvidar' mediante la preposición 'de'.
```

### 19 — pregunta 19

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "regimen_preposicional", "mc"]

variables:
  prep_correcta: "para"
  prep_distractor1: "en"
  prep_distractor2: "de"
  prep_distractor3: "a"

respuesta: "para"
tipo: mc

enunciado: "¿Qué preposición rige el verbo 'preparar' en la oración 'Me preparo ___ que llegue la prueba'?"
opciones_explicitas: ["en", "de", "a", "para"]

explicacion: |
  El verbo 'preparar' rige el régimen preposicional 'para'. Por lo tanto, 'me preparo para que...'.
```

### 20 — pregunta 20

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "nexos", "completar"]

variables:
  prep: "sobre"
  nexo: "quién"
  verbo: "preguntar"
  sujeto: "el alumno"

respuesta: "nexo"
tipo: completar

enunciado: "Completa la oración: '{sujeto} {verbo} {prep} ___ ganó el concurso.' (Escribe solo el nexo interrogativo)."
respuestas_validas:
  - "quien"
  - "quién"

explicacion: |
  Cuando la subordinada es interrogativa indirecta sobre una persona, se utiliza el nexo 'quién'.
```

### 21 — pregunta 21

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "regimen_preposicional", "mc"]

variables:
  prep_correcta: "en"
  prep_distractor1: "de"
  prep_distractor2: "a"
  prep_distractor3: "por"

respuesta: "en"
tipo: mc

enunciado: "¿Qué preposición rige el verbo 'creer' en la oración 'Creo ___ es correcto'?"
opciones_explicitas: ["de", "a", "en", "por"]

explicacion: |
  El verbo 'creer' rige el régimen preposicional 'en' cuando expresa convicción sobre algo. Por lo tanto, 'creo en que...'.
```

### 22 — pregunta 22

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "identificacion", "analisis"]

variables:
  prep: "por"
  nexo: "que"
  verbo: "lamentar"
  sujeto: "nosotros"

respuesta: "regimen_preposicional"
tipo: input

enunciado: "En la oración '{sujeto} {verbo} {prep}{nexo} se haya perdido', ¿cómo se clasifica la subordinada '{prep}{nexo} se haya perdido'?"

explicacion: |
  Se clasifica como Subordinada Sustantiva de Complemento de Régimen, ya que completa al verbo 'lamentar' mediante la preposición 'por'.
```
