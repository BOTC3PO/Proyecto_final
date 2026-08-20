### 1 — Verb in second position  
```yaml
metadata:
  materia: "idiomas-extranjeros/aleman"
  tema: "ordnung-verbo-segunda-posicion"
  nivel: "A1-A2"
  tags: ["ordnungsregel", "verbanfang", "zweitposition"]
pasos:
  - "Identifica la posición del verbo en una oración afirmativa."
explicacion: "En oraciones afirmativas, el verbo debe estar en segunda posición. Ejemplo: Ich gehe ins Kino (correcto) vs. Ich ins Kino gehe (incorrecto)."
respuesta: "gehe"
tipo: completar
respuestas_validas:
  - "Gehe"
  - "gEHe"
enunciado: "Ich ___ ins Kino."
variables:
  - "go"
```



### 2 — Verb after subject  
```yaml
metadata:
  materia: "idiomas-extranjeros/aleman"
  tema: "ordnung-verbo-segunda-posicion"
  nivel: "A1-A2"
  tags: ["subjetivo", "verbanfang"]
pasos:
  - "Coloca el verbo en la posición correcta."
explicacion: "El sujeto siempre precede al verbo conjugado. Ejemplo: Er liest ein Buch (correcto) vs. Liest er ein Buch? (incorrecto)."
tipo: mc
opciones_explicitas:
  - "liest"
  - "lese"
  - "liebt"
respuesta: "liest"
enunciado: "Er ___ ein Buch."
variables:
  - "read"
```



### 3 — Second position with time  
```yaml
metadata:
  materia: "idiomas-extranjeros/aleman"
  tema: "ordnung-verbo-segunda-posicion"
  nivel: "A1-A2"
  tags: ["tiempo", "verbanfang"]
pasos:
  - "Coloca el verbo después del sujeto y antes de la hora."
explicacion: "El tiempo o lugar nunca va entre el sujeto y el verbo. Ejemplo: Wir essen um 12 Uhr (correcto) vs. Wir um 12 Uhr essen (incorrecto)."
tipo: completar
respuestas_validas:
  - "essen"
  - "Essen"
respuesta: "essen"
enunciado: "Wir ___ um 12 Uhr."
variables:
  - "eat"
```



### 4 — Second position with auxiliary  
```yaml
metadata:
  materia: "idiomas-extranjeros/aleman"
  tema: "ordnung-verbo-segunda-posicion"
  nivel: "A1-A2"
  tags: ["verbanfang", "auxiliar"]
pasos:
  - "Identifica el verbo principal y su posición."
explicacion: "En oraciones con verbos compuestos, el auxiliar (haben/sein) va en segunda posición. Ejemplo: Er hat ein Auto (correcto) vs. Hat er ein Auto? (incorrecto)."
tipo: mc
opciones_explicitas:
  - "hat"
  - "habe"
  - "has"
respuesta: "hat"
enunciado: "Er ___ ein Auto."
variables:
  - "has"
```



### 5 — Second position with reflexive  
```yaml
metadata:
  materia: "idiomas-extranjeros/aleman"
  tema: "ordnung-verbo-segunda-posicion"
  nivel: "A1-A2"
  tags: ["reflexivo", "verbanfang"]
pasos:
  - "Coloca el verbo reflexivo después del sujeto."
explicacion: "Los verbos reflexivos (sich + infinitivo) siguen la misma regla. Ejemplo: Sie wäscht sich die Hände (correcto) vs. Sich wäscht sie die Hände? (incorrecto)."
tipo: completar
respuestas_validas:
  - "wäscht"
  - "Wäscht"
respuesta: "wäscht"
enunciado: "Sie ___ sich die Hände."
variables:
  - "wash"
```



### 6 — Second position with negative  
```yaml
metadata:
  materia: "idiomas-extranjeros/aleman"
  tema: "ordnung-verbo-segunda-posicion"
  nivel: "A1-A2"
  tags: ["negación", "verbanfang"]
pasos:
  - "Coloca el verbo después del sujeto y antes de la negación."
explicacion: "La negación (nicht) siempre va al final. Ejemplo: Ich esse nicht (correcto) vs. Nicht esse ich (incorrecto)."
tipo: mc
opciones_explicitas:
  - "esse"
  - "ess"
  - "essest"
respuesta: "esse"
enunciado: "Ich ___ nicht."
variables:
  - "eat"
```



### 7 — Second position with object  
```yaml
metadata:
  materia: "idiomas-extranjeros/aleman"
  tema: "ordnung-verbo-segunda-posicion"
  nivel: "A1-A2"
  tags: ["objeto", "verbanfang"]
pasos:
  - "Coloca el verbo entre el sujeto y el objeto directo."
explicacion: "El objeto directo siempre sigue al verbo. Ejemplo: Du schreibst einen Brief (correcto) vs. Schreibst du einen Brief? (incorrecto)."
tipo: completar
respuestas_validas:
  - "schreibst"
  - "Schreibst"
respuesta: "schreibst"
enunciado: "Du ___ einen Brief."
variables:
  - "write"
```



### 8 — Second position with place  
```yaml
metadata:
  materia: "idiomas-extranjeros/aleman"
  tema: "ordnung-verbo-segunda-posicion"
  nivel: "A1-A2"
  tags: ["lugar", "verbanfang"]
pasos:
  - "Coloca el verbo antes del lugar."
explicacion: "El lugar (z.B. in Berlin) siempre va después del verbo. Ejemplo: Er lebt in Berlin (correcto) vs. In Berlin lebt er? (incorrecto)."
tipo: mc
opciones_explicitas:
  - "lebt"
  - "lebe"
  - "leben"
respuesta: "lebt"
enunciado: "Er ___ in Berlin."
variables:
  - "live"
```



### 9 — Second position with modal  
```yaml
metadata:
  materia: "idiomas-extranjeros/aleman"
  tema: "ordnung-verbo-segunda-posicion"
  nivel: "A1-A2"
  tags: ["modal", "verbanfang"]
pasos:
  - "Coloca el verbo modal en segunda posición."
explicacion: "Los modales (können, müssen) siempre van en segunda posición. Ejemplo: Du kannst singen (correcto) vs. Kannst du singen? (incorrecto)."
tipo: completar
respuestas_validas:
  - "kannst"
  - "Kannst"
respuesta: "kannst"
enunciado: "Du ___ singen."
variables:
  - "can"
```



### 10 — Second position with infinitive  
```yaml
metadata:
  materia: "idiomas-extranjeros/aleman"
  tema: "ordnung-verbo-segunda-posicion"
  nivel: "A1-A2"
  tags: ["infinitivo", "verbanfang"]
pasos:
  - "Coloca el verbo antes del infinitivo."
explicacion: "El infinitivo siempre sigue al verbo conjugado. Ejemplo: Sie will schwimmen (correcto) vs. Schwimmen will sie? (incorrecto)."
tipo: mc
opciones_explicitas:
  - "will"
  - "wolle"
  - "wollen"
respuesta: "will"
enunciado: "Sie ___ schwimmen."
variables:
  - "want"
```



### 11 — Second position with pronoun  
```yaml
metadata:
  materia: "idiomas-extranjeros/aleman"
  tema: "ordnung-verbo-segunda-posicion"
  nivel: "A1-A2"
  tags: ["pronombre", "verbanfang"]
pasos:
  - "Coloca el verbo entre el sujeto y el pronombre."
explicacion: "Los pronombres siempre van después del verbo. Ejemplo: Ich sehe dich (correcto) vs. Dich sehe ich? (incorrecto)."
tipo: completar
respuestas_validas:
  - "sehe"
  - "Sehe"
respuesta: "sehe"
enunciado: "Ich ___ dich."
variables:
  - "see"
```



### 12 — Second position with question  
```yaml
metadata:
  materia: "idiomas-extranjeros/aleman"
  tema: "ordnung-verbo-segunda-posicion"
  nivel: "A1-A2"
  tags: ["pregunta", "verbanfang"]
pasos:
  - "Coloca el verbo en segunda posición, incluso en preguntas."
explicacion: "Las preguntas formales siguen la misma regla. Ejemplo: Trinkst du Kaffee? (correcto) vs. Drinkst du Kaffee? (incorrecto)."
tipo: mc
opciones_explicitas:
  - "trinkst"
  - "trinke"
  - "trinken"
respuesta: "trinkst"
enunciado: "___ du Kaffee?"
variables:
  - "drink"
```



### 13 — Second position with negation  
```yaml
metadata:
  materia: "idiomas-extranjeros/aleman"
  tema: "ordnung-verbo-segunda-posicion"
  nivel: "A1-A2"
  tags: ["negación", "verbanfang"]
pasos:
  - "Coloca el verbo antes de la negación."
explicacion: "La negación (nicht) siempre va al final. Ejemplo: Wir essen nicht (correcto) vs. Nicht essen wir? (incorrecto)."
tipo: completar
respuestas_validas:
  - "essen"
  - "Essen"
respuesta: "essen"
enunciado: "Wir ___ nicht."
variables:
  - "eat"
```



### 14 — Second position with time phrase  
```yaml
metadata:
  materia: "idiomas-extranjeros/aleman"
  tema: "ordnung-verbo-segunda-posicion"
  nivel: "A1-A2"
  tags: ["tiempo", "verbanfang"]
pasos:
  - "Coloca el verbo antes del tiempo."
explicacion: "Las frases de tiempo van después del verbo. Ejemplo: Ich gehe morgen ins Kino (correcto) vs. Morgen ins Kino gehe ich? (incorrecto)."
tipo: mc
opciones_explicitas:
  - "gehe"
  - "gEH"
  - "gehst"
respuesta: "gehe"
enunciado: "Ich ___ morgen ins Kino."
variables:
  - "go"
```



### 15 — Second position with indirect object  
```yaml
metadata:
  materia: "idiomas-extranjeros/aleman"
  tema: "ordnung-verbo-segunda-posicion"
  nivel: "A1-A2"
  tags: ["objeto", "verbanfang"]
pasos:
  - "Coloca el verbo entre el sujeto y el objeto indirecto."
explicacion: "Los objetos indirectos siempre siguen al verbo. Ejemplo: Du sagst mir die Wahrheit (correcto) vs. Mir sagst du die Wahrheit? (incorrecto)."
tipo: completar
respuestas_validas:
  - "sagst"
  - "Sagst"
respuesta: "sagst"
enunciado: "Du ___ mir die Wahrheit."
variables:
  - "say"
```



### 16 — Second position with multiple objects  
```yaml
metadata:
  materia: "idiomas-extranjeros/aleman"
  tema: "ordnung-verbo-segunda-posicion"
  nivel: "A1-A2"
  tags: ["objeto", "verbanfang"]
pasos:
  - "Coloca el verbo antes de los objetos directo e indirecto."
explicacion: "El orden es sujeto + verbo + objeto directo + objeto indirecto. Ejemplo: Er gibt mir das Buch (correcto) vs. Mir gibt er das Buch? (incorrecto)."
tipo: mc
opciones_explicitas:
  - "gibt"
  - "gebe"
  - "geben"
respuesta: "gibt"
enunciado: "Er ___ mir das Buch."
variables:
  - "give"
```



### 17 — Second position with prepositional phrase  
```yaml
metadata:
  materia: "idiomas-extranjeros/aleman"
  tema: "ordnung-verbo-segunda-posicion"
  nivel: "A1-A2"
  tags: ["preposición", "verbanfang"]
pasos:
  - "Coloca el verbo antes de la preposición."
explicacion: "Las frases preposicionales van después del verbo. Ejemplo: Sie fährt mit dem Auto (correcto) vs. Mit dem Auto fährt sie? (incorrecto)."
tipo: completar
respuestas_validas:
  - "fährt"
  - "Fährt"
respuesta: "fährt"
enunciado: "Sie ___ mit dem Auto."
variables:
  - "drive"
```



### 18 — Second position with compound verb  
```yaml
metadata:
  materia: "idiomas-extranjeros/aleman"
  tema: "ordnung-verbo-segunda-posicion"
  nivel: "A1-A2"
  tags: ["verbanfang", "compuesto"]
pasos:
  - "Coloca el verbo auxiliar en segunda posición."
explicacion: "En verbos compuestos, el auxiliar (haben/sein) va en segunda posición. Ejemplo: Er hat einen Fehler gemacht (correcto) vs. Hat er einen Fehler gemacht? (incorrecto)."
tipo: mc
opciones_explicitas:
  - "hat"
  - "habe"
  - "has"
respuesta: "hat"
enunciado: "Er ___ einen Fehler gemacht."
variables:
  - "make"
```



### 19 — Second position with verb + preposition  
```yaml
metadata:
  materia: "idiomas-extranjeros/aleman"
  tema: "ordnung-verbo-segunda-posicion"
  nivel: "A1-A2"
  tags: ["preposición", "verbanfang"]
pasos:
  - "Coloca el verbo antes de la preposición."
explicacion: "Los verbos seguidos de preposiciones siguen la regla. Ejemplo: Du denkst an ihn (correcto) vs. An ihn denkst du? (incorrecto)."
tipo: completar
respuestas_validas:
  - "denkst"
  - "Denkst"
respuesta: "denkst"
enunciado: "Du ___ an ihn."
variables:
  - "think"
```



### 20 — Second position with time and place  
```yaml
metadata:
  materia: "idiomas-extranjeros/aleman"
  tema: "ordnung-verbo-segunda-posicion"
  nivel: "A1-A2"
  tags: ["tiempo", "lugar"]
pasos:
  - "Coloca el verbo antes del tiempo y lugar."
explicacion: "El verbo va entre el sujeto y los complementos. Ejemplo: Wir essen heute in Berlin (correcto) vs. Heute in Berlin essen wir? (incorrecto)."
tipo: mc
opciones_explicitas:
  - "essen"
  - "ess"
  - "essest"
respuesta: "essen"
enunciado: "Wir ___ heute in Berlin."
variables:
  - "eat"
```



### 21 — Second position with reflexive pronoun  
```  
metadata:  
  materia: "aleman"  
  tema: "orden-verbo-segunda-posicion"  
  nivel: "A1"  
  tags: ["sujeto", "verbo", "contexto"]  
pasos:  
  - "Identificar el sujeto y completar con el verbo en segunda posición."  
explicacion: "En oraciones afirmativas, el verbo conjugado ocupa la segunda posición. En este caso, 'ich' es el sujeto, por lo que el verbo debe ir después."  
tipo: completar  
enunciado: "Ich ___ dir helfen."  
respuesta: "helfe"  
respuestas_validas:  
  - "helfe"  
  - "Helfe"  
variables:  
  - "sujeto": ["ich", "du", "er", "sie"]  
```  

---

### 22 — Second position with question word  
```yaml
metadata:
  materia: "idiomas-extranjeros/aleman"
  tema: "ordnung-verbo-segunda-posicion"
  nivel: "A1-A2"
  tags: ["pregunta", "verbanfang"]
pasos:
  - "Coloca el verbo antes de la palabra interrogativa."
explicacion: "Las preguntas con palabras interrogativas siguen la regla. Ejemplo: Wo wohnst du? (correcto) vs. Wohnst wo du? (incorrecto)."
tipo: mc
opciones_explicitas:
  - "wohnst"
  - "wohne"
  - "wohnen"
respuesta: "wohnst"
enunciado: "___ wohnst du?"
variables:
  - "live"
```



### 23 — Second position with adverb  
```yaml
metadata:
  materia: "idiomas-extranjeros/aleman"
  tema: "ordnung-verbo-segunda-posicion"
  nivel: "A1-A2"
  tags: ["adverbio", "verbanfang"]
pasos:
  - "Coloca el verbo antes del adverbio."
explicacion: "Los adverbios van después del verbo. Ejemplo: Er spricht laut (correcto) vs. Laut spricht er? (incorrecto)."
tipo: completar
respuestas_validas:
  - "spricht"
  - "Spricht"
respuesta: "spricht"
enunciado: "Er ___ laut."
variables:
  - "speak"
```



### 24 — Second position with infinitive clause  
```  
metadata:  
  materia: "aleman"  
  tema: "orden-verbo-segunda-posicion"  
  nivel: "A1"  
  tags: ["tiempo", "verbo", "estructura"]  
pasos:  
  - "Colocar el verbo en segunda posición, incluso con una expresión de tiempo al inicio."  
explicacion: "Cuando hay un elemento de tiempo al principio (como 'morgen'), el sujeto y el verbo se colocan después. Aquí, 'wir' es el sujeto, por lo que el verbo debe ir inmediatamente después."  
tipo: mc  
enunciado: "Morgen ___ wir ins Kino?"  
opciones_explicitas:  
  - "gehen"  
  - "ganz"  
  - "ins Kino"  
respuesta: "gehen"  
variables:  
  - "tiempo": ["morgen", "gestern"]  
```  

---

### 25 — Second position with modal and infinitive  
```  
metadata:  
  materia: "aleman"  
  tema: "orden-verbo-segunda-posicion"  
  nivel: "A2"  
  tags: ["negación", "verbo", "estructura"]  
pasos:  
  - "Identificar la estructura de oración negativa con el verbo en segunda posición."  
explicacion: "En oraciones negativas, 'nicht' se coloca después del verbo. Aquí, 'sie' es el sujeto y 'schwimmen' es el verbo, que debe ir segundo antes de la negación."  
tipo: completar  
enunciado: "Sie ___ nicht schwimmen."  
respuesta: "kann"  
respuestas_validas:  
  - "kann"  
  - "Kann"  
variables:  
  - "negación": ["nicht", "kein"]  
```
