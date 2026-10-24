> **Nota de corrección:** Este cuestionario fue corregido a partir del borrador en
> `_borradores-gemma/idiomas-extranjeros/portugues-pt/colocacion-pronominal-proclise/cuestionario_crudo.md`.
> El bloque 24 estaba genuinamente truncado en el crudo (cortado justo después de
> `pasos:`, sin ningún contenido más) y se descartó. 20 bloques tenían una línea `---`
> suelta dentro de la propia cerca, rompiendo el parseo; se quitó.
>
> **Error de contenido sistémico (el más importante de este archivo):** este tema es
> específicamente sobre portugués europeo (`portugues-pt`), pero 13 de los 23 bloques
> daban como respuesta correcta la próclise al estilo brasileño coloquial ("Preciso te
> ajudar", "Vou te visitar") en oraciones que **no tienen ningún disparador real de
> próclise** (negación, preposición antes del infinitivo, adverbio, conjunción
> subordinante...). En portugués europeo estándar, sin disparador se usa la **énclise**
> (el pronombre se une al infinitivo con guion: "ajudar-te", no "te ajudar"). Se
> corrigieron los bloques 1, 2, 5, 8, 9, 11, 12, 13, 16, 17, 19, 20 y 23,
> reescribiendo enunciado, opciones y explicación en cada caso. El bloque 19 usaba
> además el verbo "trabalhar" (intransitivo, no admite pronombre clítico como objeto)
> como si fuera transitivo; se cambió el verbo de ejemplo a "ajudar". Los bloques con
> disparador genuino (negación "não", o preposición como "sem"/"de" antes del
> infinitivo) ya eran correctos y no se tocaron. Se corrigió también un typo en una
> opción distractora ("pergonto" → "pergunto") y se normalizó `materia:` en los
> bloques que no llevaban el prefijo `idiomas-extranjeros/`.

### 1 — Ênclise con "vou" + infinitivo (sin disparador)  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "colocacion-pronominal-proclise"  
  nivel: "A1"  
  tags: ["enclise", "infinitivo", "vou"]  
pasos:  
  - "Reconocer que no hay ningún disparador de próclise en la oración."  
  - "Aplicar la énclise: el pronombre se une al infinitivo con guion."  
respuestas_validas:  
  - "te"  
  - "Te"  
tipo: completar  

enunciado: "Vou visitar-___ amanhã."  
explicacion: "En portugués europeo, sin un disparador genuino de próclise (negación, preposición antes del infinitivo, adverbio, conjunción subordinante...), se usa la énclise: el pronombre se une al verbo con guion, en vez de colocarse antes (forma brasileña coloquial). Aquí no hay disparador (la frase no contiene negación ni preposición antes del verbo), así que la forma correcta es la énclise: 'Vou visitar-te'."

```



### 2 — Proclise con "precisar"  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "colocacion-pronominal-proclise"  
  nivel: "A1"  
  tags: ["proclise", "verbo", "precisar"]  
pasos:  
  - "Reconocer el verbo 'precisar' en la oración."  
  - "Aplicar la regla de proclisis con este verbo."  
opciones_explicitas:
  - "Preciso ajudar-te."
  - "Preciso te ajudar."
  - "Preciso a ti ajudar."
respuesta: "Preciso ajudar-te."  
tipo: mc  

enunciado: "¿Cuál es la forma correcta de 'precisar' con pronombre?"  
explicacion: "En portugués europeo, sin un disparador genuino de próclise (negación, preposición antes del infinitivo, adverbio, conjunción subordinante...), se usa la énclise: el pronombre se une al verbo con guion, en vez de colocarse antes (forma brasileña coloquial). 'Precisar' no es un disparador de próclise, así que la forma correcta en portugués europeo es la énclise: 'Preciso ajudar-te.'"

```



### 3 — Proclise en oración negativa  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "colocacion-pronominal-proclise"  
  nivel: "A2"  
  tags: ["proclise", "negativo", "não"]  
pasos:  
  - "Identificar la negación 'não' en el contexto."  
  - "Colocar el pronombre antes del verbo."  
respuestas_validas:  
  - "me"  
  - "Me"  
tipo: completar  

enunciado: "Não ___ esqueço de ti."  
explicacion: "En oraciones negativas, los pronombres se colocan antes del verbo. La forma correcta es 'me' (proclisis)."

```



### 4 — Proclise con "sem"  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "colocacion-pronominal-proclise"  
  nivel: "A1"  
  tags: ["proclise", "preposicao", "sem"]  
pasos:  
  - "Reconocer la preposición 'sem' en el contexto."  
  - "Aplicar la regla de proclisis con esta preposición."  
opciones_explicitas:
  - "Estou sem te ver."
  - "Estou ver-te."
  - "Estou a ti ver."
respuesta: "Estou sem te ver."  
tipo: mc  

enunciado: "¿Cuál es la forma correcta de 'sem' con pronombre?"  
explicacion: "Después de preposiciones como 'sem', los pronombres se colocan antes del verbo. La opción correcta es 'Estou sem te ver.'"

```



### 5 — Ênclise con "dever" + infinitivo (sin disparador)  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "colocacion-pronominal-proclise"  
  nivel: "A2"  
  tags: ["enclise", "infinitivo", "dever"]  
pasos:  
  - "Reconocer que 'dever' no es un disparador de próclise."  
  - "Aplicar la énclise: el pronombre se une al infinitivo con guion."  
respuestas_validas:  
  - "te"  
  - "Te"  
tipo: completar  

enunciado: "Devo ajudar-___."  
explicacion: "En portugués europeo, sin un disparador genuino de próclise (negación, preposición antes del infinitivo, adverbio, conjunción subordinante...), se usa la énclise: el pronombre se une al verbo con guion, en vez de colocarse antes (forma brasileña coloquial). 'Dever' no dispara próclise, así que la forma correcta es 'Devo ajudar-te'."

```



### 6 — Proclise con "dizer" en oración negativa  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "colocacion-pronominal-proclise"  
  nivel: "A2"  
  tags: ["proclise", "negativo", "dizer"]  
pasos:  
  - "Identificar la negación 'não' y el verbo 'dizer'."  
  - "Aplicar la regla de proclisis en este contexto."  
opciones_explicitas:
  - "Não te digo isso."
  - "Não digo-te isso."
  - "Não a ti digo isso."
respuesta: "Não te digo isso."  
tipo: mc  

enunciado: "¿Cuál es la forma correcta de 'dizer' con pronombre en oración negativa?"  
explicacion: "En oraciones negativas con el verbo 'dizer', los pronombres se colocan antes del verbo. La opción correcta es 'Não te digo isso.'"

```



### 7 — Proclise con "lembrar" y preposición "de"  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "colocacion-pronominal-proclise"  
  nivel: "A1"  
  tags: ["proclise", "preposicao", "lembrar"]  
pasos:  
  - "Reconocer la preposición 'de' en el contexto."  
  - "Colocar el pronombre antes del verbo."  
respuestas_validas:  
  - "me"  
  - "Me"  
tipo: completar  

enunciado: "Não ___ lembrarei de ti."  
explicacion: "Después de preposiciones como 'de', los pronombres se colocan antes del verbo. La forma correcta es 'me' (proclisis)."

```



### 8 — Proclise en oración con "poder" y infinitivo  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "colocacion-pronominal-proclise"  
  nivel: "A2"  
  tags: ["proclise", "infinitivo", "poder"]  
pasos:  
  - "Identificar el verbo 'poder' en infinitivo."  
  - "Colocar el pronombre antes del verbo."  
opciones_explicitas:
  - "Pode ajudar-te."
  - "Pode te ajudar."
  - "Pode a ti ajudar."
respuesta: "Pode ajudar-te."  
tipo: mc  

enunciado: "¿Cuál es la forma correcta de 'poder' con pronombre en infinitivo?"  
explicacion: "En portugués europeo, sin un disparador genuino de próclise (negación, preposición antes del infinitivo, adverbio, conjunción subordinante...), se usa la énclise: el pronombre se une al verbo con guion, en vez de colocarse antes (forma brasileña coloquial). 'Poder' no dispara próclise, así que la forma correcta en portugués europeo es 'Pode ajudar-te.'"

```



### 9 — Ênclise con "fazer" (sin disparador)  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "colocacion-pronominal-proclise"  
  nivel: "A1"  
  tags: ["enclise", "infinitivo", "fazer"]  
pasos:  
  - "Reconocer que no hay disparador de próclise en la oración."  
  - "Aplicar la énclise: el pronombre se une al infinitivo con guion."  
respuestas_validas:  
  - "te"  
  - "Te"  
tipo: completar  

enunciado: "Vou fazer-___ um favor."  
explicacion: "En portugués europeo, sin un disparador genuino de próclise (negación, preposición antes del infinitivo, adverbio, conjunción subordinante...), se usa la énclise: el pronombre se une al verbo con guion, en vez de colocarse antes (forma brasileña coloquial). Aquí no hay disparador, así que la forma correcta es 'Vou fazer-te um favor'."

```



### 10 — Proclise en oración con "desejar" y negativo  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "colocacion-pronominal-proclise"  
  nivel: "A2"  
  tags: ["proclise", "negativo", "desejar"]  
pasos:  
  - "Identificar la negación 'não' y el verbo 'desejar'."  
  - "Aplicar la regla de proclisis en este contexto."  
opciones_explicitas:
  - "Não te desejo isso."
  - "Não desejo-te isso."
  - "Não a ti desejo isso."
respuesta: "Não te desejo isso."  
tipo: mc  

enunciado: "¿Cuál es la forma correcta de 'desejar' con pronombre en oración negativa?"  
explicacion: "En oraciones negativas con el verbo 'desejar', los pronombres se colocan antes del verbo. La opción correcta es 'Não te desejo isso.'"

```



### 11 — Ênclise con "trazer" (sin disparador)  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "colocacion-pronominal-proclise"  
  nivel: "A1"  
  tags: ["enclise", "infinitivo", "trazer"]  
pasos:  
  - "Reconocer que no hay disparador de próclise en la oración."  
  - "Aplicar la énclise: el pronombre se une al infinitivo con guion."  
respuestas_validas:  
  - "te"  
  - "Te"  
tipo: completar  

enunciado: "Vou trazer-___ um presente."  
explicacion: "En portugués europeo, sin un disparador genuino de próclise (negación, preposición antes del infinitivo, adverbio, conjunción subordinante...), se usa la énclise: el pronombre se une al verbo con guion, en vez de colocarse antes (forma brasileña coloquial). Aquí no hay disparador, así que la forma correcta es 'Vou trazer-te um presente'."

```



### 12 — Proclise en oración con "perguntar" y infinitivo  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "colocacion-pronominal-proclise"  
  nivel: "A2"  
  tags: ["proclise", "infinitivo", "perguntar"]  
pasos:  
  - "Identificar el verbo 'perguntar' en infinitivo."  
  - "Colocar el pronombre antes del verbo."  
opciones_explicitas:
  - "Pode perguntar-te."
  - "Pode te perguntar."
  - "Pode a ti perguntar."
respuesta: "Pode perguntar-te."  
tipo: mc  

enunciado: "¿Cuál es la forma correcta de 'perguntar' con pronombre en infinitivo?"  
explicacion: "En portugués europeo, sin un disparador genuino de próclise (negación, preposición antes del infinitivo, adverbio, conjunción subordinante...), se usa la énclise: el pronombre se une al verbo con guion, en vez de colocarse antes (forma brasileña coloquial). 'Poder' no dispara próclise, así que la forma correcta es 'Pode perguntar-te.'"

```



### 13 — Ênclise con "enviar" (sin disparador)  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "colocacion-pronominal-proclise"  
  nivel: "A1"  
  tags: ["enclise", "infinitivo", "enviar"]  
pasos:  
  - "Reconocer que no hay disparador de próclise en la oración."  
  - "Aplicar la énclise: el pronombre se une al infinitivo con guion."  
respuestas_validas:  
  - "te"  
  - "Te"  
tipo: completar  

enunciado: "Vou enviar-___ o documento."  
explicacion: "En portugués europeo, sin un disparador genuino de próclise (negación, preposición antes del infinitivo, adverbio, conjunción subordinante...), se usa la énclise: el pronombre se une al verbo con guion, en vez de colocarse antes (forma brasileña coloquial). Aquí no hay disparador, así que la forma correcta es 'Vou enviar-te o documento'."

```



### 14 — Proclise en oración con "esquecer" y negativo  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "colocacion-pronominal-proclise"  
  nivel: "A2"  
  tags: ["proclise", "negativo", "esquecer"]  
pasos:  
  - "Identificar la negación 'não' y el verbo 'esquecer'."  
  - "Aplicar la regla de proclisis en este contexto."  
opciones_explicitas:
  - "Não te esqueço."
  - "Não esqueço-te."
  - "Não a ti esqueço."
respuesta: "Não te esqueço."  
tipo: mc  

enunciado: "¿Cuál es la forma correcta de 'esquecer' con pronombre en oración negativa?"  
explicacion: "En oraciones negativas con el verbo 'esquecer', los pronombres se colocan antes del verbo. La opción correcta es 'Não te esqueço.'"

```



### 15 — Proclise con "lembrar" y preposición "de"  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "colocacion-pronominal-proclise"  
  nivel: "A2"  
  tags: ["negativo", "futuro"]  
pasos:  
  - "Identificar a estrutura da oração negativa no futuro."  
  - "Aplicar a regra de proclise com o pronome oblíquo."  
tipo: completar  
respuestas_validas:  
  - "me"  
  - "Me"  
enunciado: "Ela não ___ vai ajudar."  
explicacion: "Em orações negativas no futuro, o pronome oblíquo (como 'me') precede o verbo. Exemplo: 'Ela não me vai ajudar.'"  
```

### 16 — Proclise en oración con "querer" y infinitivo  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "colocacion-pronominal-proclise"  
  nivel: "A2"  
  tags: ["proclise", "infinitivo", "querer"]  
pasos:  
  - "Identificar el verbo 'querer' en infinitivo."  
  - "Colocar el pronombre antes del verbo."  
opciones_explicitas:
  - "Quero ajudar-te."
  - "Quero te ajudar."
  - "Quero a ti ajudar."
respuesta: "Quero ajudar-te."  
tipo: mc  

enunciado: "¿Cuál es la forma correcta de 'querer' con pronombre en infinitivo?"  
explicacion: "En portugués europeo, sin un disparador genuino de próclise (negación, preposición antes del infinitivo, adverbio, conjunción subordinante...), se usa la énclise: el pronombre se une al verbo con guion, en vez de colocarse antes (forma brasileña coloquial). 'Querer' no dispara próclise, así que la forma correcta es 'Quero ajudar-te.'"

```



### 17 — Ênclise con "dizer" (sin disparador)  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "colocacion-pronominal-proclise"  
  nivel: "A1"  
  tags: ["enclise", "infinitivo", "dizer"]  
pasos:  
  - "Reconocer que no hay disparador de próclise en la oración."  
  - "Aplicar la énclise: el pronombre se une al infinitivo con guion."  
respuestas_validas:  
  - "te"  
  - "Te"  
tipo: completar  

enunciado: "Vou dizer-___ a verdade."  
explicacion: "En portugués europeo, sin un disparador genuino de próclise (negación, preposición antes del infinitivo, adverbio, conjunción subordinante...), se usa la énclise: el pronombre se une al verbo con guion, en vez de colocarse antes (forma brasileña coloquial). Aquí no hay disparador, así que la forma correcta es 'Vou dizer-te a verdade'."

```



### 18 — Proclise en oración con "fazer" y negativo  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "colocacion-pronominal-proclise"  
  nivel: "A2"  
  tags: ["proclise", "negativo", "fazer"]  
pasos:  
  - "Identificar la negación 'não' y el verbo 'fazer'."  
  - "Aplicar la regla de proclisis en este contexto."  
opciones_explicitas:
  - "Não te faço isso."
  - "Não faço-te isso."
  - "Não a ti faço isso."
respuesta: "Não te faço isso."  
tipo: mc  

enunciado: "¿Cuál es la forma correcta de 'fazer' con pronombre en oración negativa?"  
explicacion: "En oraciones negativas con el verbo 'fazer', los pronombres se colocan antes del verbo. La opción correcta es 'Não te faço isso.'"

```



### 19 — Ênclise con "ajudar" (sin disparador)  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "colocacion-pronominal-proclise"  
  nivel: "A1"  
  tags: ["enclise", "infinitivo", "ajudar"]  
pasos:  
  - "Reconocer que no hay disparador de próclise en la oración ('trabalhar' es intransitivo y no admite pronombre clítico como objeto)."  
  - "Aplicar la énclise: el pronombre se une al infinitivo con guion."  
respuestas_validas:  
  - "te"  
  - "Te"  
tipo: completar  

enunciado: "Vou ajudar-___ no trabalho."  
explicacion: "En portugués europeo, sin un disparador genuino de próclise (negación, preposición antes del infinitivo, adverbio, conjunción subordinante...), se usa la énclise: el pronombre se une al verbo con guion, en vez de colocarse antes (forma brasileña coloquial). Aquí no hay disparador, así que la forma correcta es 'Vou ajudar-te no trabalho'. ('Trabalhar' no admite un pronombre clítico como objeto directo, por eso se cambió el verbo de la oración.)"

```



### 20 — Proclise en oración con "escrever" y infinitivo  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "colocacion-pronominal-proclise"  
  nivel: "A2"  
  tags: ["proclise", "infinitivo", "escrever"]  
pasos:  
  - "Identificar el verbo 'escrever' en infinitivo."  
  - "Colocar el pronombre antes del verbo."  
opciones_explicitas:
  - "Pode escrever-te."
  - "Pode te escrever."
  - "Pode a ti escrever."
respuesta: "Pode escrever-te."  
tipo: mc  

enunciado: "¿Cuál es la forma correcta de 'escrever' con pronombre en infinitivo?"  
explicacion: "En portugués europeo, sin un disparador genuino de próclise (negación, preposición antes del infinitivo, adverbio, conjunción subordinante...), se usa la énclise: el pronombre se une al verbo con guion, en vez de colocarse antes (forma brasileña coloquial). 'Poder' no dispara próclise, así que la forma correcta es 'Pode escrever-te.'"

```



### 21 — Proclise con "lembrar" y preposición "de"  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "colocacion-pronominal-proclise"  
  nivel: "A1"  
  tags: ["infinitivo", "objeto direto"]  
pasos:  
  - "Reconhecer a necessidade de proclise no infinitivo."  
  - "Escolher o pronome correspondente ao objeto direto."  
opciones_explicitas:  
  - "lhe"  
  - "a ele"  
  - "o"  
  - "me"  
respuesta: "lhe"  
tipo: mc  
enunciado: "Preciso de ___ pedir ajuda."  
explicacion: "No infinitivo, quando o pronome é objeto direto, usa-se a proclise ('lhe'). Exemplo: 'Preciso de lhe pedir ajuda.'"  
```

### 22 — Proclise en oración con "perguntar" y negativo  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "colocacion-pronominal-proclise"  
  nivel: "A2"  
  tags: ["proclise", "negativo", "perguntar"]  
pasos:  
  - "Identificar la negación 'não' y el verbo 'perguntar'."  
  - "Aplicar la regla de proclisis en este contexto."  
opciones_explicitas:
  - "Não te pergunto isso."
  - "Não pergunto-te isso."
  - "Não a ti pergunto isso."
respuesta: "Não te pergunto isso."  
tipo: mc  

enunciado: "¿Cuál es la forma correcta de 'perguntar' con pronombre en oración negativa?"  
explicacion: "En oraciones negativas con el verbo 'perguntar', los pronombres se colocan antes del verbo. La opción correcta es 'Não te pergunto isso.'"

```



### 23 — Proclise con "enviar" y preposición "para"  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "colocacion-pronominal-proclise"  
  nivel: "A1"  
  tags: ["afirmativo", "presente"]  
pasos:  
  - "Verificar se o verbo exige proclise em orações afirmativas."  
  - "Aplicar a regra para verbos como 'dizer' ou 'fazer'."  
tipo: completar  
respuestas_validas:  
  - "lhe"  
  - "Lhe"  
enunciado: "Vou dizer-___ algo importante."  
explicacion: "En portugués europeo, sin un disparador genuino de próclise (negación, preposición antes del infinitivo, adverbio, conjunción subordinante...), se usa la énclise: el pronombre se une al verbo con guion, en vez de colocarse antes (forma brasileña coloquial). Aquí no hay disparador, así que la forma correcta es la énclise: 'Vou dizer-lhe algo importante.'"  
```

