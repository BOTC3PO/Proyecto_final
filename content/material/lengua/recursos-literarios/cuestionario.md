# Lengua — Recursos literarios (cuestionario, 40 preguntas VBLang)

> Tema: `P11`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Identificar metáfora

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "basico"
  tags: ["metafora"]

variables:
  n: uno_de([1, 1])

respuesta: "metáfora"
tipo: mc
opciones_explicitas: ["metáfora", "símil", "hipérbole"]

enunciado: "\"Sus ojos son dos luceros\" es un ejemplo de..."

pasos:
  - "Identifica dos elementos sin usar nexo comparativo (\"como\"): ojos = luceros directamente."

explicacion: |
  La metáfora identifica dos elementos sin nexo comparativo explícito.
```

### 2 — Identificar símil

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "basico"
  tags: ["simil"]

variables:
  n: uno_de([1, 1])

respuesta: "símil"
tipo: mc
opciones_explicitas: ["metáfora", "símil", "hipérbole"]

enunciado: "\"Sus ojos brillan como luceros\" es un ejemplo de..."

pasos:
  - "Usa el nexo comparativo \"como\": es una comparación explícita."

explicacion: |
  El símil compara dos elementos usando un nexo comparativo explícito
  (\"como\", \"cual\", \"parece\").
```

### 3 — Identificar personificación

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "basico"
  tags: ["personificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "personificación"
tipo: mc
opciones_explicitas: ["personificación", "metáfora", "símbolo"]

enunciado: "\"El viento susurraba entre los árboles\" es un ejemplo de..."

pasos:
  - "Atribuye una acción humana (susurrar) a algo que no lo es (el viento)."

explicacion: |
  La personificación da cualidades o acciones humanas a elementos no
  humanos.
```

### 4 — Identificar hipérbole

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "basico"
  tags: ["hiperbole"]

variables:
  n: uno_de([1, 1])

respuesta: "hipérbole"
tipo: mc
opciones_explicitas: ["hipérbole", "metáfora", "ironía"]

enunciado: "\"Te lo dije un millón de veces\" es un ejemplo de..."

pasos:
  - "Exagera deliberadamente una cantidad, de forma evidente y no literal."

explicacion: |
  La hipérbole exagera de forma deliberada, sin buscar que se
  interprete literalmente.
```

### 5 — Identificar antítesis

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "intermedio"
  tags: ["antitesis"]

variables:
  n: uno_de([1, 1])

respuesta: "antítesis"
tipo: mc
opciones_explicitas: ["antítesis", "oxímoron", "paralelismo"]

enunciado: "\"Vivo sin vivir en mí\" es un ejemplo de..."

pasos:
  - "Contrapone dos ideas opuestas (vivir / no vivir) en la misma frase."

explicacion: |
  La antítesis contrapone ideas opuestas dentro de la misma frase o
  cláusula.
```

### 6 — Identificar oxímoron

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "intermedio"
  tags: ["oximoron"]

variables:
  n: uno_de([1, 1])

respuesta: "oxímoron"
tipo: mc
opciones_explicitas: ["antítesis", "oxímoron", "paralelismo"]

enunciado: "\"Un silencio ensordecedor\" es un ejemplo de..."

pasos:
  - "Une dos términos contradictorios en una sola expresión compacta (silencio + ensordecedor)."

explicacion: |
  El oxímoron junta términos contradictorios en una expresión muy
  compacta, más breve que la antítesis.
```

### 7 — Identificar ironía

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "intermedio"
  tags: ["ironia"]

variables:
  n: uno_de([1, 1])

respuesta: "ironía"
tipo: mc
opciones_explicitas: ["ironía", "hipérbole", "antítesis"]

enunciado: "Decirle \"¡qué puntual!\" a alguien que llegó una hora tarde es un ejemplo de..."

pasos:
  - "Dice lo contrario de lo que se piensa, con intención crítica o humorística."

explicacion: |
  La ironía comunica lo opuesto de lo literalmente dicho, a propósito.
```

### 8 — Identificar símbolo

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "intermedio"
  tags: ["simbolo"]

variables:
  n: uno_de([1, 1])

respuesta: "símbolo"
tipo: mc
opciones_explicitas: ["símbolo", "metáfora", "personificación"]

enunciado: "Que la paloma represente la paz, de forma sostenida en distintos textos y culturas, es un ejemplo de..."

pasos:
  - "Un elemento concreto que representa una idea abstracta de forma estable, no sólo en un texto puntual."

explicacion: |
  El símbolo asocia un elemento concreto con una idea abstracta de
  forma sostenida, más allá de un solo texto.
```

### 9 — Identificar aliteración

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "basico"
  tags: ["aliteracion"]

variables:
  n: uno_de([1, 1])

respuesta: "aliteración"
tipo: mc
opciones_explicitas: ["aliteración", "onomatopeya", "anáfora"]

enunciado: "\"El susurro del viento se siente suave\" (repetición del sonido \"s\") es un ejemplo de..."

pasos:
  - "Repite un mismo sonido consonántico en varias palabras cercanas."

explicacion: |
  La aliteración repite un sonido para crear un efecto sonoro
  deliberado.
```

### 10 — Identificar onomatopeya

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "basico"
  tags: ["onomatopeya"]

variables:
  n: uno_de([1, 1])

respuesta: "onomatopeya"
tipo: mc
opciones_explicitas: ["aliteración", "onomatopeya", "anáfora"]

enunciado: "La palabra \"tic-tac\" para representar el sonido de un reloj es un ejemplo de..."

pasos:
  - "Es una palabra que imita un sonido real."

explicacion: |
  La onomatopeya reproduce con palabras un sonido del mundo real.
```

### 11 — Identificar anáfora

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "intermedio"
  tags: ["anafora"]

variables:
  n: uno_de([1, 1])

respuesta: "anáfora"
tipo: mc
opciones_explicitas: ["anáfora", "paralelismo", "enumeración"]

enunciado: "\"Nada me detiene. Nada me asusta. Nada me vence.\" es un ejemplo de..."

pasos:
  - "Repite la misma palabra (\"Nada\") al principio de cada oración."

explicacion: |
  La anáfora repite literalmente una o más palabras al inicio de
  versos u oraciones sucesivas.
```

### 12 — Identificar hipérbaton

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "intermedio"
  tags: ["hiperbaton"]

variables:
  n: uno_de([1, 1])

respuesta: "hipérbaton"
tipo: mc
opciones_explicitas: ["hipérbaton", "enumeración", "paralelismo"]

enunciado: "\"Del salón en el ángulo oscuro\" (en vez de \"en el ángulo oscuro del salón\") es un ejemplo de..."

pasos:
  - "Altera el orden habitual de las palabras en la oración."

explicacion: |
  El hipérbaton reordena las palabras respecto del orden sintáctico
  habitual.
```

### 13 — Identificar enumeración

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "basico"
  tags: ["enumeracion"]

variables:
  n: uno_de([1, 1])

respuesta: "enumeración"
tipo: mc
opciones_explicitas: ["enumeración", "anáfora", "hipérbaton"]

enunciado: "\"Trajo pan, queso, fruta y vino\" es un ejemplo de..."

pasos:
  - "Lista varios elementos relacionados en secuencia."

explicacion: |
  La enumeración presenta una serie de elementos relacionados uno
  tras otro.
```

### 14 — Identificar paralelismo

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "intermedio"
  tags: ["paralelismo"]

variables:
  n: uno_de([1, 1])

respuesta: "paralelismo"
tipo: mc
opciones_explicitas: ["anáfora", "paralelismo", "antítesis"]

enunciado: "\"Cuando ríes, el mundo brilla; cuando lloras, el mundo se apaga.\" es un ejemplo de..."

pasos:
  - "Repite la misma estructura sintáctica (\"cuando X, el mundo Y\") sin repetir exactamente las mismas palabras."

explicacion: |
  El paralelismo repite la estructura sintáctica, no necesariamente
  las mismas palabras (a diferencia de la anáfora).
```

### 15 — Diferenciar metáfora de símil

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "intermedio"
  tags: ["metafora", "simil", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La diferencia entre metáfora y símil es que el símil usa un nexo comparativo explícito (\"como\", \"cual\"), y la metáfora no."

pasos:
  - "\"Es como el sol\" (símil, con \"como\") vs. \"es el sol\" (metáfora, sin nexo)."

explicacion: |
  Verdadero: la presencia o ausencia del nexo comparativo es el
  criterio central para distinguirlos.
```

### 16 — Diferenciar antítesis de oxímoron

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "avanzado"
  tags: ["antitesis", "oximoron", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La antítesis contrapone ideas opuestas en frases o cláusulas distintas; el oxímoron las junta en una sola expresión muy compacta (dos o tres palabras)."

pasos:
  - "\"Eres fuego y hielo\" (antítesis, más extendida) vs. \"fuego helado\" (oxímoron, compacto)."

explicacion: |
  Verdadero: la extensión y compacidad de la expresión distingue a
  estos dos recursos parecidos.
```

### 17 — Diferenciar anáfora de paralelismo

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "avanzado"
  tags: ["anafora", "paralelismo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La anáfora repite las mismas palabras al inicio de cada verso u oración; el paralelismo repite la misma estructura sintáctica, aunque cambien las palabras."

pasos:
  - "\"Nada me detiene, nada me asusta\" (anáfora, misma palabra) vs. \"cuando ríes... cuando lloras...\" (paralelismo, misma estructura, distintas palabras)."

explicacion: |
  Verdadero: repetición literal de palabras (anáfora) vs. repetición
  de estructura (paralelismo) es la diferencia clave.
```

### 18 — Diferenciar hipérbole de metáfora

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "avanzado"
  tags: ["hiperbole", "metafora", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La hipérbole exagera una cantidad o intensidad; la metáfora identifica dos elementos distintos entre sí, sin necesariamente exagerar nada."

pasos:
  - "\"Un millón de veces\" (hipérbole, exageración) vs. \"sus ojos son luceros\" (metáfora, identificación, no exageración)."

explicacion: |
  Verdadero: exagerar una magnitud (hipérbole) es distinto de
  identificar dos elementos entre sí (metáfora), aunque ambos se
  aparten del lenguaje literal.
```

### 19 — Clasificar familia: semántica

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "intermedio"
  tags: ["familia_semantica", "clasificacion"]

variables:
  recursos: ["metáfora", "hipérbole", "ironía"]
  idx: uno_de([0, 1, 2])

respuesta: "semántica (significado)"
tipo: mc
opciones_explicitas: ["semántica (significado)", "fónica (sonido)", "sintáctica (orden)"]

enunciado: "El recurso \"{recursos[idx]}\" pertenece a la familia..."

pasos:
  - "Metáfora, hipérbole e ironía alteran el significado de lo dicho, no el sonido ni el orden."

explicacion: |
  Estos recursos juegan con el significado: dicen algo distinto (o
  más intenso) de lo literal.
```

### 20 — Clasificar familia: fónica

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "intermedio"
  tags: ["familia_fonica", "clasificacion"]

variables:
  recursos: ["aliteración", "onomatopeya", "anáfora"]
  idx: uno_de([0, 1, 2])

respuesta: "fónica (sonido)"
tipo: mc
opciones_explicitas: ["semántica (significado)", "fónica (sonido)", "sintáctica (orden)"]

enunciado: "El recurso \"{recursos[idx]}\" pertenece a la familia..."

pasos:
  - "Aliteración, onomatopeya y anáfora se apoyan en la repetición o imitación de sonidos."

explicacion: |
  Estos recursos juegan con el nivel sonoro del lenguaje.
```

### 21 — Clasificar familia: sintáctica

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "intermedio"
  tags: ["familia_sintactica", "clasificacion"]

variables:
  recursos: ["hipérbaton", "enumeración", "paralelismo"]
  idx: uno_de([0, 1, 2])

respuesta: "sintáctica (orden)"
tipo: mc
opciones_explicitas: ["semántica (significado)", "fónica (sonido)", "sintáctica (orden)"]

enunciado: "El recurso \"{recursos[idx]}\" pertenece a la familia..."

pasos:
  - "Hipérbaton, enumeración y paralelismo alteran o explotan el orden/estructura de las palabras."

explicacion: |
  Estos recursos juegan con el orden y la estructura sintáctica de la
  oración.
```

### 22 — Metáfora, segundo ejemplo

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "basico"
  tags: ["metafora"]

variables:
  n: uno_de([1, 1])

respuesta: "metáfora"
tipo: mc
opciones_explicitas: ["metáfora", "símil", "personificación"]

enunciado: "\"El tiempo es oro\" es un ejemplo de..."

pasos:
  - "Identifica el tiempo con el oro sin usar nexo comparativo."

explicacion: |
  Otra metáfora clásica: identifica dos elementos (tiempo, oro)
  directamente.
```

### 23 — Símil, segundo ejemplo

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "basico"
  tags: ["simil"]

variables:
  n: uno_de([1, 1])

respuesta: "símil"
tipo: mc
opciones_explicitas: ["metáfora", "símil", "hipérbole"]

enunciado: "\"Corría como un rayo\" es un ejemplo de..."

pasos:
  - "Usa el nexo comparativo \"como\"."

explicacion: |
  El nexo \"como\" marca la comparación explícita del símil.
```

### 24 — Personificación, segundo ejemplo

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "basico"
  tags: ["personificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "personificación"
tipo: mc
opciones_explicitas: ["personificación", "metáfora", "símbolo"]

enunciado: "\"El río corría furioso hacia el mar\" es un ejemplo de..."

pasos:
  - "Atribuye una emoción humana (furia) a un elemento no humano (el río)."

explicacion: |
  La personificación da al río una emoción típicamente humana.
```

### 25 — Hipérbole, segundo ejemplo

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "basico"
  tags: ["hiperbole"]

variables:
  n: uno_de([1, 1])

respuesta: "hipérbole"
tipo: mc
opciones_explicitas: ["hipérbole", "símil", "ironía"]

enunciado: "\"Me morí de la vergüenza\" es un ejemplo de..."

pasos:
  - "Exagera de forma evidente, no se espera que se lea literal."

explicacion: |
  Otra hipérbole común: exagerar una reacción emocional.
```

### 26 — Ironía, segundo ejemplo

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "intermedio"
  tags: ["ironia"]

variables:
  n: uno_de([1, 1])

respuesta: "ironía"
tipo: mc
opciones_explicitas: ["ironía", "hipérbole", "antítesis"]

enunciado: "Decir \"¡lindo día!\" durante una tormenta muy fuerte es un ejemplo de..."

pasos:
  - "Dice lo contrario de lo evidente, con intención (aquí, humorística)."

explicacion: |
  Otra ironía típica: afirmar lo opuesto de la situación real.
```

### 27 — Aliteración, segundo ejemplo

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "intermedio"
  tags: ["aliteracion"]

variables:
  n: uno_de([1, 1])

respuesta: "aliteración"
tipo: mc
opciones_explicitas: ["aliteración", "onomatopeya", "paralelismo"]

enunciado: "\"Con el ala aleve del leve abanico\" (repetición del sonido \"l\") es un ejemplo de..."

pasos:
  - "Repite el mismo sonido consonántico en palabras cercanas."

explicacion: |
  Ejemplo clásico de aliteración con el sonido \"l\".
```

### 28 — Onomatopeya, segundo ejemplo

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "basico"
  tags: ["onomatopeya"]

variables:
  n: uno_de([1, 1])

respuesta: "onomatopeya"
tipo: mc
opciones_explicitas: ["onomatopeya", "aliteración", "anáfora"]

enunciado: "La palabra \"splash\" para representar el sonido de algo cayendo al agua es un ejemplo de..."

pasos:
  - "Imita con palabras un sonido real."

explicacion: |
  Otro ejemplo de palabra que reproduce un sonido del mundo real.
```

### 29 — Anáfora, segundo ejemplo

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "intermedio"
  tags: ["anafora"]

variables:
  n: uno_de([1, 1])

respuesta: "anáfora"
tipo: mc
opciones_explicitas: ["anáfora", "paralelismo", "enumeración"]

enunciado: "\"Te quiero en la mañana. Te quiero en la tarde. Te quiero en la noche.\" es un ejemplo de..."

pasos:
  - "Repite exactamente las mismas palabras (\"Te quiero\") al inicio de cada oración."

explicacion: |
  La repetición literal de las mismas palabras al inicio confirma que
  es anáfora.
```

### 30 — Hipérbaton, segundo ejemplo

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "avanzado"
  tags: ["hiperbaton"]

variables:
  n: uno_de([1, 1])

respuesta: "hipérbaton"
tipo: mc
opciones_explicitas: ["hipérbaton", "enumeración", "anáfora"]

enunciado: "\"Verde que te quiero verde\" (orden poético, no el habitual sujeto-verbo-objeto) es un ejemplo de..."

pasos:
  - "Rompe el orden sintáctico esperado para dar énfasis o musicalidad."

explicacion: |
  El orden alterado, deliberadamente distinto del habitual, marca el
  hipérbaton.
```

### 31 — Enumeración, segundo ejemplo

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "basico"
  tags: ["enumeracion"]

variables:
  n: uno_de([1, 1])

respuesta: "enumeración"
tipo: mc
opciones_explicitas: ["enumeración", "hipérbaton", "antítesis"]

enunciado: "\"En la mochila llevaba cuadernos, lápices, una regla y una calculadora\" es un ejemplo de..."

pasos:
  - "Lista varios elementos relacionados uno tras otro."

explicacion: |
  Otra enumeración: lista de objetos relacionados en secuencia.
```

### 32 — Paralelismo, segundo ejemplo

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "intermedio"
  tags: ["paralelismo"]

variables:
  n: uno_de([1, 1])

respuesta: "paralelismo"
tipo: mc
opciones_explicitas: ["anáfora", "paralelismo", "hipérbaton"]

enunciado: "\"Si trabajás, ganás; si estudiás, aprendés.\" es un ejemplo de..."

pasos:
  - "Repite la estructura \"si X, Y\" con palabras distintas en cada mitad."

explicacion: |
  La misma estructura sintáctica se repite con contenido distinto:
  paralelismo, no anáfora.
```

### 33 — Símbolo, segundo ejemplo

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "avanzado"
  tags: ["simbolo"]

variables:
  n: uno_de([1, 1])

respuesta: "símbolo"
tipo: mc
opciones_explicitas: ["símbolo", "metáfora", "personificación"]

enunciado: "Que la balanza represente la justicia, de forma reconocible en distintos contextos culturales, es un ejemplo de..."

pasos:
  - "Un objeto concreto asociado de forma estable a una idea abstracta, más allá de un solo texto puntual."

explicacion: |
  Otro símbolo cultural estable: la balanza y la justicia.
```

### 34 — Oxímoron, segundo ejemplo

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "avanzado"
  tags: ["oximoron"]

variables:
  n: uno_de([1, 1])

respuesta: "oxímoron"
tipo: mc
opciones_explicitas: ["oxímoron", "antítesis", "paralelismo"]

enunciado: "\"Una dulce amargura\" es un ejemplo de..."

pasos:
  - "Une dos términos contradictorios (dulce/amargura) en una expresión muy compacta."

explicacion: |
  La compacidad de la contradicción (dos-tres palabras) confirma que
  es oxímoron y no antítesis.
```

### 35 — Antítesis, segundo ejemplo

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "avanzado"
  tags: ["antitesis"]

variables:
  n: uno_de([1, 1])

respuesta: "antítesis"
tipo: mc
opciones_explicitas: ["antítesis", "oxímoron", "paralelismo"]

enunciado: "\"Cuando quiero llorar, no lloro; y a veces lloro sin querer\" es un ejemplo de..."

pasos:
  - "Contrapone dos ideas opuestas (querer llorar/no llorar) extendidas en cláusulas distintas."

explicacion: |
  La extensión en dos cláusulas distintas (no una expresión
  compacta) confirma que es antítesis y no oxímoron.
```

### 36 — Los recursos se aplican sobre todo a narrativo y lírico

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "intermedio"
  tags: ["recursos_literarios", "generos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los recursos literarios se usan sobre todo en los géneros narrativo y lírico, aunque pueden aparecer en cualquier tipo de texto."

pasos:
  - "No están limitados a la literatura, pero es donde más se concentran deliberadamente."

explicacion: |
  Verdadero: son herramientas centrales de la literatura, aunque no
  exclusivas de ella.
```

### 37 — Un recurso literario se aparta del uso habitual

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "basico"
  tags: ["recursos_literarios", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un recurso literario es un uso especial del lenguaje que se aparta del uso habitual para lograr un efecto expresivo, estético o de énfasis."

pasos:
  - "Ese apartamiento del uso neutro es lo que distingue a un recurso literario del lenguaje cotidiano directo."

explicacion: |
  Verdadero: es la definición general que engloba a las tres
  familias de recursos.
```

### 38 — Ordenar el método para reconocer un recurso

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "intermedio"
  tags: ["recursos_literarios", "metodo"]

enunciado: "Ordená los pasos para identificar qué recurso literario aparece en un fragmento."
tipo: ordenar
opciones_explicitas:
  - "Identificar qué se aparta del uso neutro del lenguaje"
  - "Determinar si afecta el significado, el sonido o el orden de las palabras"
  - "Ubicar la familia correspondiente (semántica, fónica o sintáctica)"
  - "Aplicar la prueba específica de esa familia para nombrar el recurso exacto"
respuesta_orden: ["Identificar qué se aparta del uso neutro del lenguaje", "Determinar si afecta el significado, el sonido o el orden de las palabras", "Ubicar la familia correspondiente (semántica, fónica o sintáctica)", "Aplicar la prueba específica de esa familia para nombrar el recurso exacto"]
explicacion: |
  El método va de lo general (qué se aparta de lo neutro) a lo
  específico (qué recurso exacto es, dentro de su familia).
```

### 39 — Clasificación mixta de varios recursos

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "avanzado"
  tags: ["recursos_literarios", "practica"]

variables:
  frases: ["Sus palabras eran espinas", "El silencio gritaba en la habitación vacía", "Compró manzanas, peras, uvas y duraznos"]
  recursos: ["metáfora", "personificación", "enumeración"]
  idx: uno_de([0, 1, 2])

respuesta: recursos[idx]
tipo: mc
opciones_explicitas: ["metáfora", "personificación", "enumeración", "símil", "hipérbole"]

enunciado: "\"{frases[idx]}\" es un ejemplo de..."

pasos:
  - "Identificar el elemento que se aparta del uso neutro y aplicar la prueba de la familia correspondiente."

explicacion: |
  Cada fragmento fue construido para ejemplificar un recurso distinto
  de distintas familias.
```

### 40 — Aplicación: elegir el recurso según el efecto buscado

```
metadata:
  materia: "lengua"
  tema: "recursos_literarios"
  nivel: "avanzado"
  tags: ["recursos_literarios", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si el objetivo es dar musicalidad y ritmo a un poema a través de la repetición de sonidos, conviene usar aliteración antes que una simple enumeración de elementos."

pasos:
  - "La aliteración trabaja específicamente sobre el sonido; la enumeración organiza contenido, no necesariamente sonido repetido."

explicacion: |
  Verdadero: elegir el recurso adecuado depende de qué nivel del
  lenguaje (significado, sonido u orden) se quiere explotar para
  lograr el efecto buscado.
```
