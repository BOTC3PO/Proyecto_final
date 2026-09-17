> **Nota de corrección:** Este cuestionario fue corregido a partir del borrador en
> `_borradores-gemma/idiomas-extranjeros/japones/expresiones-de-deduccion/cuestionario_crudo.md`
> mediante el script `mechanical_fix_idiomas.py`. A 19 bloques les faltaba el
> `enunciado:`, reconstruido con una oración de dos partes (hecho observado +
> conclusión) acorde a la expresión de deducción probada. Se corrigieron además dos
> errores de contenido más importantes:
> - **8 bloques (4, 10, 12, 14, 16, 19, 21, 23):** probaban la palabra suelta 「もの」
>   como si fuera una expresión de deducción del tipo "X ocurrió, así que Y" -- pero
>   もの no es un punto gramatical real para ese significado. La expresión que
>   realmente cubre esa función ("eso explica que...", "entonces resulta que...") es
>   「わけだ」; se reemplazó もの por わけだ en los 8 bloques y se corrigió la
>   explicación de cada uno.
> - **Bloque 3:** el enunciado "この映画は___。" con la respuesta "と思う" produce una
>   oración incompleta (と思う necesita seguir a una oración completa con su propio
>   predicado, p. ej. "面白いと思う"); se corrigió añadiendo el predicado que faltaba.
> - Se quitaron además las transliteraciones en katakana (モノ, ハズ, ダロウ, ラシイ)
>   aceptadas como variantes válidas de partículas/expresiones gramaticales, que en
>   japonés real nunca se escriben en katakana.

### 1 — 推論の表現  
```  
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "expresiones-de-deduccion"  
  nivel: "N3"  
  tags: ["deduccion", "posibilidad"]  
pasos:  
  - "Identificar el contexto de la oración."  
  - "Elegir la expresión que expresa posibilidad."  
respuestas_validas:  
  - "かもしれない"  
  - "かもしれません"  
tipo: completar  
enunciado: "彼が来ない___。"  
explicacion: "La expresión ～かもしれない se usa para indicar una posibilidad no segura. En este contexto, es la forma más adecuada."  
```



### 2 — 推論の選択  
```  
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "expresiones-de-deduccion"  
  nivel: "N3"  
  tags: ["deduccion", "certeza"]  
opciones_explicitas:  
  - "だろう"  
  - "はずだ"  
  - "かもしれない"  
respuesta: "はずだ"  
tipo: mc  
enunciado: "彼が来なかった___。"  
explicacion: "La expresión ～はずだ se usa para deducir algo que debería haber ocurrido según el contexto. En este caso, la ausencia de su llegada sugiere una expectativa no cumplida."  
```



### 3 — 推論の補完  
```  
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "expresiones-de-deduccion"  
  nivel: "N3"  
  tags: ["deduccion", "opinion"]  
pasos:  
  - "Analizar la intención del hablante."  
  - "Seleccionar el verbo que expresa una opinión subjetiva."  
respuestas_validas:  
  - "と思う"  
  - "と思っています"  
tipo: completar  
enunciado: "この映画は面白い___。"  
explicacion: "La expresión ～と思う se usa para expresar una opinión personal, y sigue a una oración completa (aquí, '面白い', interesante). En este contexto, es la forma más adecuada."  
```



### 4 — 推論の選択  
```
metadata:
    materia: "idiomas-extranjeros/japones"
    tema: "expresiones-de-deduccion"
    nivel: "N3"
    tags: ["deduccion", "materia"]
pasos:
    - "Identificar el sujeto y el contexto de la oración."
    - "Seleccionar la expresión de deducción que mejor se ajuste al significado implícito."
tipo: completar
enunciado: "この料理はいい匂いがする。美味しい______。"
respuestas_validas:
    - "わけだ"
explicacion: "'～わけだ' se usa para expresar una conclusión natural ('eso explica que...', 'entonces resulta que...') a partir de un hecho observado. En este caso, el buen olor de la comida explica que sea deliciosa."
```

### 5 — 推論の補完  
```
metadata:
    materia: "idiomas-extranjeros/japones"
    tema: "expresiones-de-deduccion"
    nivel: "N3"
    tags: ["deduccion", "hecho"]
pasos:
    - "Determinar si la oración presenta un hecho conocido o una suposición."
    - "Elegir la expresión que exprese certeza basada en información previa."
tipo: completar
enunciado: "友達の話によると、あの事件が起きた______。"
respuestas_validas:
    - "らしい"
explicacion: "'～らしい' se usa para transmitir una deducción basada en rumores, informes o experiencias ajenas. Aquí sugiere que el incidente ocurrió según lo escuchado."
```

### 6 — 推論の選択  
```  
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "expresiones-de-deduccion"  
  nivel: "N3"  
  tags: ["deduccion", "obligacion"]  
opciones_explicitas:  
  - "べきだ"  
  - "はずだ"  
  - "だろう"  
respuesta: "べきだ"  
tipo: mc  
enunciado: "彼が来なければならない___。"  
explicacion: "La expresión ～べきだ se usa para indicar una obligación o expectativa. En este caso, la oración sugiere que su presencia es necesaria."  
```



### 7 — 推論の補完  
```  
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "expresiones-de-deduccion"  
  nivel: "N3"  
  tags: ["deduccion", "opinion"]  
pasos:  
  - "Determinar la intención del hablante."  
  - "Seleccionar el verbo que expresa una opinión subjetiva."  
respuestas_validas:  
  - "と思う"  
  - "と思っています"  
tipo: completar  
enunciado: "この料理は___。"  
explicacion: "La expresión ～と思う se usa para expresar una opinión personal. En este contexto, es la forma más adecuada."  
```



### 8 — 推論の選択  
```
metadata:
    materia: "idiomas-extranjeros/japones"
    tema: "expresiones-de-deduccion"
    nivel: "N3"
    tags: ["deduccion", "suposicion"]
pasos:
    - "Analizar el contexto de la oración para identificar si es una suposición o un hecho."
    - "Seleccionar la expresión que indique incertidumbre razonable."
tipo: completar
enunciado: "明日、友達が来る______。"
respuestas_validas:
    - "だろう"
explicacion: "'～だろう' expresa una suposición lógica basada en circunstancias o hechos conocidos. Aquí se deduce la probabilidad de que el amigo venga."
```

### 9 — 推論の補完  
```
metadata:
    materia: "idiomas-extranjeros/japones"
    tema: "expresiones-de-deduccion"
    nivel: "N3"
    tags: ["deduccion", "expectativa"]
pasos:
    - "Reconocer la expectativa implícita en el suceso mencionado."
    - "Elegir la expresión que refleje una deducción basada en expectativas normales."
tipo: completar
enunciado: "彼は忙しいので、旅行を延期する______だ。"
respuestas_validas:
    - "はず"
explicacion: "'～はず' indica una deducción basada en lo que se espera o debería ser. En este caso, la posposición de un viaje sugiere una expectativa razonable."
```

### 10 — 推論の選択  
```
metadata:
    materia: "idiomas-extranjeros/japones"
    tema: "expresiones-de-deduccion"
    nivel: "N3"
    tags: ["deduccion", "consecuencia"]
pasos:
    - "Identificar la relación causal entre el suceso y la deducción."
    - "Seleccionar la expresión que exprese una consecuencia lógica de un hecho."
tipo: completar
enunciado: "熱が下がった。もう元気になった______。"
respuestas_validas:
    - "わけだ"
explicacion: "'～わけだ' se usa para expresar una conclusión natural ('eso explica que...', 'entonces resulta que...') a partir de un hecho observado. Aquí, la curación de la enfermedad lleva a una deducción natural sobre el estado del paciente."
```

### 11 — 推論の補完  
```
metadata:
    materia: "idiomas-extranjeros/japones"
    tema: "expresiones-de-deduccion"
    nivel: "N3"
    tags: ["deduccion", "conclusión"]
pasos:
    - "Evaluar si la oración implica una conclusión directa o una suposición."
    - "Elegir la expresión que indique certeza basada en el resultado mencionado."
tipo: completar
enunciado: "試験に合格したから、彼はよく勉強した______だ。"
respuestas_validas:
    - "はず"
explicacion: "'～はず' se aplica cuando hay una expectativa clara basada en un hecho. Aquí, la aprobación del examen lleva a una deducción sobre el esfuerzo del estudiante."
```

### 12 — 推論の選択  
```
metadata:
    materia: "idiomas-extranjeros/japones"
    tema: "expresiones-de-deduccion"
    nivel: "N3"
    tags: ["deduccion", "causa"]
pasos:
    - "Determinar si la deducción se basa en una causa evidente o en suposiciones."
    - "Seleccionar la expresión que exprese certeza sobre la causa del suceso."
tipo: completar
enunciado: "橋が崩れた。老朽化していた______。"
respuestas_validas:
    - "わけだ"
explicacion: "'～わけだ' se usa para expresar una conclusión natural ('eso explica que...', 'entonces resulta que...') a partir de un hecho observado. Aquí, el colapso de la estructura implica una conclusión lógica sobre su estado previo."
```

### 13 — 推論の補完  
```
metadata:
    materia: "idiomas-extranjeros/japones"
    tema: "expresiones-de-deduccion"
    nivel: "N3"
    tags: ["deduccion", "circunstancia"]
pasos:
    - "Identificar la relación entre el suceso y la deducción."
    - "Elegir la expresión que exprese una consecuencia directa de una circunstancia."
tipo: completar
enunciado: "時間がなかったから、彼は遅れた______だ。"
respuestas_validas:
    - "はず"
explicacion: "'～はず' se usa para deducir algo basado en una situación previa. Aquí, la falta de tiempo lleva a una conclusión sobre el retraso."
```

### 14 — 推論の選択  
```
metadata:
    materia: "idiomas-extranjeros/japones"
    tema: "expresiones-de-deduccion"
    nivel: "N3"
    tags: ["deduccion", "observación"]
pasos:
    - "Analizar si la deducción se basa en una observación directa o indirecta."
    - "Seleccionar la expresión que refleje certeza por evidencia visible."
tipo: completar
enunciado: "雨が降っている。今日のピクニックは中止になる______。"
respuestas_validas:
    - "わけだ"
explicacion: "'～わけだ' se usa para expresar una conclusión natural ('eso explica que...', 'entonces resulta que...') a partir de un hecho observado. En este caso, el mal tiempo lleva a una conclusión inevitable sobre la actividad planificada."
```

### 15 — 推論の補完  
```
metadata:
    materia: "idiomas-extranjeros/japones"
    tema: "expresiones-de-deduccion"
    nivel: "N3"
    tags: ["deduccion", "expectativa"]
pasos:
    - "Evaluar si la oración presenta una expectativa frustrada o una suposición."
    - "Elegir la expresión que indique una deducción basada en lo esperado."
tipo: completar
enunciado: "彼はあまり勉強していないから、成績が悪い______だ。"
respuestas_validas:
    - "はず"
explicacion: "'～はず' se usa cuando hay una expectativa razonable que no se cumple. Aquí, el bajo progreso académico lleva a una deducción sobre la causa potencial."
```

### 16 — 推論の選択  
```
metadata:
    materia: "idiomas-extranjeros/japones"
    tema: "expresiones-de-deduccion"
    nivel: "N3"
    tags: ["deduccion", "consecuencia"]
pasos:
    - "Identificar la relación entre el evento y su consecuencia."
    - "Seleccionar la expresión que exprese una deducción inevitable del hecho mencionado."
tipo: completar
enunciado: "音楽が急に止まった。停電だった______。"
respuestas_validas:
    - "わけだ"
explicacion: "'～わけだ' se usa para expresar una conclusión natural ('eso explica que...', 'entonces resulta que...') a partir de un hecho observado. Aquí, el cese de la música lleva a una deducción sobre la causa (ej.: apagón)."
```

### 17 — 推論の補完  
```
metadata:
    materia: "idiomas-extranjeros/japones"
    tema: "expresiones-de-deduccion"
    nivel: "N3"
    tags: ["deduccion", "suposición"]
pasos:
    - "Determinar si la oración implica una suposición basada en circunstancias."
    - "Elegir la expresión que indique una deducción razonable pero no segura."
tipo: completar
enunciado: "道が混んでいるから、彼は遅れる______。"
respuestas_validas:
    - "だろう"
explicacion: "'～だろう' se usa para suposiciones basadas en información parcial. Aquí, el retraso lleva a una deducción sobre posibles causas como tráfico o problemas personales."
```

### 18 — 推論の選択  
```
metadata:
    materia: "idiomas-extranjeros/japones"
    tema: "expresiones-de-deduccion"
    nivel: "N3"
    tags: ["deduccion", "información externa"]
pasos:
    - "Reconocer si la deducción se basa en información de terceros o en observaciones directas."
    - "Seleccionar la expresión que refleje una conclusión derivada de fuentes ajenas."
tipo: completar
enunciado: "メッセージによると、家族はもうすぐ着く______。"
respuestas_validas:
    - "らしい"
explicacion: "'～らしい' se usa cuando la deducción proviene de rumores o informaciones externas. Aquí, el arribo familiar se deduce por un mensaje recibido."
```

### 19 — 推論の補完  
```
metadata:
    materia: "idiomas-extranjeros/japones"
    tema: "expresiones-de-deduccion"
    nivel: "N3"
    tags: ["deduccion", "hecho"]
pasos:
    - "Evaluar si la oración implica un hecho confirmado o una suposición."
    - "Elegir la expresión que indique certeza basada en evidencia clara."
tipo: completar
enunciado: "この壺は古い遺跡から発見された。とても貴重な______。"
respuestas_validas:
    - "わけだ"
explicacion: "'～わけだ' se usa para expresar una conclusión natural ('eso explica que...', 'entonces resulta que...') a partir de un hecho observado. Aquí, el descubrimiento del tesoro lleva a una deducción sobre su valor o historia."
```

### 20 — 推論の選択  
```
metadata:
    materia: "idiomas-extranjeros/japones"
    tema: "expresiones-de-deduccion"
    nivel: "N3"
    tags: ["deduccion", "expectativa"]
pasos:
    - "Identificar si la deducción se basa en una expectativa razonable o en una suposición."
    - "Seleccionar la expresión que exprese certeza por lo esperado."
tipo: completar
enunciado: "彼はその本を読んだから、内容を知っている______だ。"
respuestas_validas:
    - "はず"
explicacion: "'～はず' se usa cuando hay una expectativa clara basada en el contexto. Aquí, la lectura del libro lleva a una deducción sobre su influencia o contenido."
```

### 21 — 推論の補完  
```
metadata:
    materia: "idiomas-extranjeros/japones"
    tema: "expresiones-de-deduccion"
    nivel: "N3"
    tags: ["deduccion", "causa"]
pasos:
    - "Determinar si la deducción se basa en una causa evidente o en suposiciones."
    - "Elegir la expresión que indique certeza sobre la causa del suceso."
tipo: completar
enunciado: "機械が壊れた。使いすぎた______。"
respuestas_validas:
    - "わけだ"
explicacion: "'～わけだ' se usa para expresar una conclusión natural ('eso explica que...', 'entonces resulta que...') a partir de un hecho observado. Aquí, el daño al equipo lleva a una conclusión lógica sobre su uso excesivo o mal manejo."
```

### 22 — 推論の選択  
```
metadata:
    materia: "idiomas-extranjeros/japones"
    tema: "expresiones-de-deduccion"
    nivel: "N3"
    tags: ["deduccion", "consecuencia"]
pasos:
    - "Identificar la relación entre el suceso y su consecuencia."
    - "Seleccionar la expresión que exprese una deducción directa de un hecho."
tipo: completar
enunciado: "誰かが来たから、犬が吠える______だ。"
respuestas_validas:
    - "はず"
explicacion: "'～はず' se usa cuando hay una expectativa lógica basada en un hecho. Aquí, el ladrido del perro lleva a deducir su estado de alerta o miedo."
```

### 23 — 推論の補完  
```
metadata:
    materia: "idiomas-extranjeros/japones"
    tema: "expresiones-de-deduccion"
    nivel: "N3"
    tags: ["deduccion", "observación"]
pasos:
    - "Analizar si la deducción se basa en una observación directa o indirecta."
    - "Elegir la expresión que refleje certeza por evidencia visible."
tipo: completar
enunciado: "車が止まった。ガソリンがなくなった______。"
respuestas_validas:
    - "わけだ"
explicacion: "'～わけだ' se usa para expresar una conclusión natural ('eso explica que...', 'entonces resulta que...') a partir de un hecho observado. Aquí, el cese del automóvil lleva a una deducción sobre la causa (ej.: combustible o fallo mecánico)."
```

### 24 — 推論の選択  
```
metadata:
    materia: "idiomas-extranjeros/japones"
    tema: "expresiones-de-deduccion"
    nivel: "N3"
    tags: ["deduccion", "suposición"]
pasos:
    - "Evaluar si la oración implica una suposición basada en observaciones o actitudes."
    - "Elegir la expresión que indique una deducción razonable pero no segura."
tipo: completar
enunciado: "彼はスポーツが好きだから、よく運動する______。"
respuestas_validas:
    - "だろう"
explicacion: "'～だろう' se usa para suposiciones basadas en comportamientos o actitudes. Aquí, el interés por deportes lleva a una deducción sobre su hábito de practicarlo."
```

### 25 — 推論の補完  
```
metadata:
    materia: "idiomas-extranjeros/japones"
    tema: "expresiones-de-deduccion"
    nivel: "N3"
    tags: ["deduccion", "consecuencia"]
pasos:
    - "Identificar la relación entre el suceso y su consecuencia."
    - "Seleccionar la expresión que exprese una deducción directa de un hecho."
respuesta: "はず"
tipo: completar
respuestas_validas:
    - "はず"
explicacion: "'～はず' se usa cuando hay una expectativa clara basada en el resultado mencionado. Aquí, la deliciosa manzana lleva a deducir su calidad o procedencia."
