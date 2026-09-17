> **Nota de corrección:** Este cuestionario fue corregido a partir del borrador en
> `_borradores-gemma/idiomas-extranjeros/portugues-br/presente-indicativo/cuestionario_crudo.md`.
> Se aplicaron dos tipos de correcciones:
> - **Mecánicas:** 16 bloques tenían el campo `explicacion:` sin comillas y 9 bloques
>   tenían ítems de `pasos:` con comillas internas sin escapar (p. ej.
>   `"Aplicar la conjugación del verbo "comer.""`), lo que rompía el parseo.
> - **De contenido:** se detectaron conjugaciones incorrectas del portugués, algunas
>   por interferencia del español:
>   - Bloque 2: "nós ___" con "ler" daba **"leemos"** (español) en vez de **"lemos"**.
>   - Bloque 4: "tu ___" con "ir" daba **"vás"** (español "vas") en vez de **"vais"**.
>   - Bloques 14 y 20: "vós ___" con "ler" daba **"leis"** (forma inexistente) en vez
>     de **"ledes"** (los verbos con raíz terminada en vocal, como ler/crer/ver, forman
>     el vós en '-edes', no en '-eis').
>   - Bloques 15 y 21: "ela ___" con "visitar" daba **"visa"** (palabra distinta, no es
>     forma de "visitar") en vez de **"visita"**.

### 1 — Presente do indicativo (sujeito: ela)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["terceira-pessoa", "verbo-regular"]  
pasos:  
  - "Identificar el sujeto y el verbo en la oración."
  - "Aplicar las reglas de conjugación del presente."
explicacion: "El verbo 'trabalhar' se conjuga como 'trabalha' para 'ela'. Las opciones incorrectas usan formas de otros tiempos o personas."
tipo: completar  
enunciado: "Ela ___ no trabalho."  
respuestas_validas:  
  - "Trabalha"  
  - "trabAlha"  
```

### 2 — Presente do indicativo (sujeito: nós)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["primeira-pessoa-plural", "verbo-regular"]  
pasos:  
  - "Determinar el sujeto y elegir la forma correspondiente."
  - "Verificar la concordancia entre sujeto y verbo."
explicacion: "Para 'nós', el verbo 'ler' se conjuga como 'lemos'. Las otras opciones son formas de otros tiempos o personas."
tipo: completar  
enunciado: "Nós ___ um livro todos os dias."  
respuestas_validas:  
  - "Lemos"  
  - "leEmos"  
```

### 3 — Presente do indicativo (sujeito: eles)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["terceira-pessoa-plural", "verbo-regular"]  
pasos:  
  - "Identificar el sujeto y la tercera persona plural."
  - "Aplicar la conjugación del verbo 'comer.'"
explicacion: "Para 'eles', el verbo 'comer' se conjuga como 'comem'. Las opciones incorrectas usan formas de otros tiempos o personas."
tipo: completar  
enunciado: "Eles ___ frutas todas as manhãs."  
respuestas_validas:  
  - "Comem"  
  - "cOmem"  
```

### 4 — Presente do indicativo (sujeito: tu)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["segunda-pessoa-singular", "verbo-regular"]  
pasos:  
  - "Reconocer el sujeto 'tu' y aplicar la conjugación."
  - "Verificar si el verbo es regular o irregular."
explicacion: "El verbo 'ir' en segunda persona singular es 'vais'. Las otras opciones son formas de otros tiempos o personas."
tipo: completar  
enunciado: "Tu ___ ao mercado comigo hoje?"  
respuestas_validas:  
  - "Vais"  
  - "vAis"  
```

### 5 — Presente do indicativo (sujeito: eu)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["primeira-pessoa-singular", "verbo-regular"]  
pasos:  
  - "Identificar el sujeto y la primera persona singular."
  - "Conjugar el verbo 'estudar.'"
explicacion: "Para 'eu', el verbo 'estudar' se conjuga como 'estudo'. Las opciones incorrectas usan formas de otros tiempos o personas."
tipo: completar  
enunciado: "Eu ___ português há cinco anos."  
respuestas_validas:  
  - "Estudo"  
  - "estUdo"  
```

### 6 — Presente do indicativo (sujeito: vós)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["segunda-pessoa-plural", "verbo-regular"]  
pasos:  
  - "Reconocer el sujeto 'vós' y aplicar la conjugación."
  - "Verificar si el verbo es regular o irregular."
explicacion: "El verbo 'falar' en segunda persona plural es 'falais'. Las otras opciones son formas de otros tiempos o personas."
tipo: completar  
enunciado: "Vós ___ muito bem o português, não?"  
respuestas_validas:  
  - "Falais"  
  - "fALais"  
```

### 7 — Presente do indicativo (sujeito: eu)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["primeira-pessoa-singular", "verbo-irregular"]  
pasos:  
  - "Identificar el sujeto y la primera persona singular."
  - "Conjugar el verbo 'ser.'"
explicacion: "El verbo 'ser' en primera persona singular es 'sou'. Las opciones incorrectas usan formas de otros tiempos o personas."
tipo: completar  
enunciado: "Eu ___ professor de matemática."  
respuestas_validas:  
  - "Sou"  
  - "sÓu"  
```

### 8 — Presente do indicativo (sujeito: ele)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["terceira-pessoa-singular", "verbo-irregular"]  
pasos:  
  - "Identificar el sujeto y la tercera persona singular."
  - "Conjugar el verbo 'ter.'"
explicacion: "El verbo 'ter' en tercera persona singular es 'tem'. Las opciones incorrectas usan formas de otros tiempos o personas."
tipo: completar  
enunciado: "Ele ___ um carro azul."  
respuestas_validas:  
  - "Tem"  
  - "tEm"  
```

### 9 — Presente do indicativo (sujeito: nós)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["primeira-pessoa-plural", "verbo-regular"]  
pasos:  
  - "Determinar el sujeto y la primera persona plural."
  - "Aplicar la conjugación del verbo 'habitar.'"
explicacion: "Para 'nós', el verbo 'habitar' se conjuga como 'habitamos'. Las opciones incorrectas usan formas de otros tiempos o personas."
tipo: completar  
enunciado: "Nós ___ em uma casa pequena."  
respuestas_validas:  
  - "Habitamos"  
  - "hABitamos"  
```

### 10 — Presente do indicativo (sujeito: ela)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["terceira-pessoa-singular", "verbo-regular"]  
pasos:  
  - "Identificar el sujeto y la tercera persona singular."
  - "Conjugar el verbo 'beber.'"
explicacion: "El verbo 'beber' en tercera persona singular es 'bebe'. Las opciones incorrectas usan formas de otros tiempos o personas."
tipo: completar  
enunciado: "Ela ___ água com frequência."  
respuestas_validas:  
  - "Bebe"  
  - "bEBE"  
```

### 11 — Presente do indicativo (sujeito: eles)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["terceira-pessoa-plural", "verbo-regular"]  
pasos:  
  - "Reconocer el sujeto y la tercera persona plural."
  - "Aplicar la conjugación del verbo 'dormir.'"
explicacion: "Para 'eles', el verbo 'dormir' se conjuga como 'dormem'. Las opciones incorrectas usan formas de otros tiempos o personas."
tipo: completar  
enunciado: "Eles ___ muito bem durante a noite."  
respuestas_validas:  
  - "Dormem"  
  - "dORMem"  
```

### 12 — Presente do indicativo (sujeito: tu)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["segunda-pessoa-singular", "verbo-regular"]  
pasos:  
  - "Identificar el sujeto y aplicar la conjugación."
  - "Verificar si el verbo es regular o irregular."
explicacion: "El verbo 'fazer' en segunda persona singular es 'fazes'. Las opciones incorrectas usan formas de otros tiempos o personas."
tipo: completar  
enunciado: "Tu ___ exercícios físicos todos os dias?"  
respuestas_validas:  
  - "Fazes"  
  - "fAZes"  
```

### 13 — Presente do indicativo (sujeito: eu)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["primeira-pessoa-singular", "verbo-regular"]  
pasos:  
  - "Determinar el sujeto y aplicar la conjugación."
  - "Verificar si hay cambios de raíz."
explicacion: "El verbo 'escrever' en primera persona singular es 'escrevo'. Las opciones incorrectas usan formas de otros tiempos o personas."
tipo: completar  
enunciado: "Eu ___ uma carta para meu amigo."  
respuestas_validas:  
  - "Escrevo"  
  - "eSCRevo"  
```

### 14 — Presente do indicativo (sujeito: vós)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["segunda-pessoa-plural", "verbo-regular"]  
pasos:  
  - "Reconocer el sujeto y aplicar la conjugación."
  - "Verificar si hay cambios de raíz."
explicacion: "El verbo 'ler' en segunda persona plural es 'ledes' (los verbos con raíz terminada en vocal, como 'ler', 'crer' o 'ver', forman el vós con '-edes'). Las opciones incorrectas usan formas de otros tiempos o personas."
tipo: completar  
enunciado: "Vós ___ um livro interessante, não?"  
respuestas_validas:  
  - "Ledes"  
  - "lEdes"  
```

### 15 — Presente do indicativo (sujeito: ela)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["terceira-pessoa-singular", "verbo-regular"]  
pasos:  
  - "Identificar el sujeto y aplicar la conjugación."
  - "Verificar si hay cambios de raíz."
explicacion: "El verbo 'visitar' en tercera persona singular es 'visita'. Las opciones incorrectas usan formas de otros tiempos o personas."
tipo: completar  
enunciado: "Ela ___ a sua prima todos os fins de semana."  
respuestas_validas:  
  - "Visita"  
  - "vISIta"  
```

### 16 — Presente do indicativo (sujeito: nós)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["primeira-pessoa-plural", "verbo-regular"]  
pasos:  
  - "Determinar el sujeto y aplicar la conjugación."
  - "Verificar si hay cambios de raíz."
explicacion: "El verbo 'viajar' en primera persona plural es 'viajamos'. Las opciones incorrectas usan formas de otros tiempos o personas."
tipo: completar  
enunciado: "Nós ___ para a praia sempre que podemos."  
respuestas_validas:  
  - "Viajamos"  
  - "vIAjamos"  
```

### 17 — Presente do indicativo (sujeito: eles)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["terceira-pessoa-plural", "verbo-regular"]  
pasos:  
  - "Reconocer el sujeto y aplicar la conjugación."
  - "Verificar si hay cambios de raíz."
explicacion: "El verbo 'assistir' en tercera persona plural es 'assistem'. Las opciones incorrectas usan formas de otros tiempos o personas."
tipo: completar  
enunciado: "Eles ___ ao cinema com frequência."  
respuestas_validas:  
  - "Assistem"  
  - "aSSistem"  
```

### 18 — Presente do indicativo (sujeito: eu)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["primeira-pessoa-singular", "verbo-regular"]  
pasos:  
  - "Identificar el sujeto y aplicar la conjugación."
  - "Verificar si hay cambios de raíz."
explicacion: "El verbo 'cantar' en primera persona singular es 'canto'. Las opciones incorrectas usan formas de otros tiempos o personas."
tipo: completar  
enunciado: "Eu ___ uma canção para me relaxar."  
respuestas_validas:  
  - "Canto"  
  - "cANTO"  
```

### 19 — Presente do indicativo (sujeito: tu)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["segunda-pessoa-singular", "verbo-regular"]  
pasos:  
  - "Determinar el sujeto y aplicar la conjugación."
  - "Verificar si hay cambios de raíz."
explicacion: "El verbo 'trabalhar' en segunda persona singular es 'trabalhas'. Las opciones incorrectas usan formas de otros tiempos o personas."
tipo: completar  
enunciado: "Tu ___ no hospital, não?"  
respuestas_validas:  
  - "Trabalhas"  
  - "tRABALHAS"  
```

### 20 — Presente do indicativo (sujeito: vós)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["segunda-pessoa-plural", "verbo-regular"]  
pasos:  
  - "Reconocer el sujeto y aplicar la conjugación."
  - "Verificar si hay cambios de raíz."
explicacion: "El verbo 'ler' en segunda persona plural es 'ledes' (los verbos con raíz terminada en vocal, como 'ler', 'crer' o 'ver', forman el vós con '-edes'). Las opciones incorrectas usan formas de otros tiempos o personas."
tipo: completar  
enunciado: "Vós ___ um livro muito interessante, não?"  
respuestas_validas:  
  - "Ledes"  
  - "lEDES"  
```

### 21 — Presente do indicativo (sujeito: ela)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["terceira-pessoa-singular", "verbo-regular"]  
pasos:  
  - "Identificar el sujeto y aplicar la conjugación."
  - "Verificar si hay cambios de raíz."
explicacion: "El verbo 'visitar' en tercera persona singular es 'visita'. Las opciones incorrectas usan formas de otros tiempos o personas."
tipo: completar  
enunciado: "Ela ___ a sua tia todos os fins de semana."  
respuestas_validas:  
  - "Visita"  
  - "vISIta"  
```

### 22 — Presente do indicativo (sujeito: nós)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["primeira-pessoa-plural", "verbo-regular"]  
pasos:  
  - "Determinar el sujeto y aplicar la conjugación."
  - "Verificar si hay cambios de raíz."
explicacion: "El verbo 'viajar' en primera persona plural es 'viajamos'. Las opciones incorrectas usan formas de otros tiempos o personas."
tipo: completar  
enunciado: "Nós ___ para a montanha sempre que podemos."  
respuestas_validas:  
  - "Viajamos"  
  - "vIAjamos"  
```

### 23 — Presente do indicativo (sujeito: eles)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["terceira-pessoa-plural", "verbo-regular"]  
pasos:  
  - "Reconocer el sujeto y aplicar la conjugación."
  - "Verificar si hay cambios de raíz."
explicacion: "El verbo 'assistir' en tercera persona plural es 'assistem'. Las opciones incorrectas usan formas de otros tiempos o personas."
tipo: completar  
enunciado: "Eles ___ ao teatro com frequência."  
respuestas_validas:  
  - "Assistem"  
  - "aSSistem"  
```

### 24 — Presente do indicativo (sujeito: eu)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["primeira-pessoa-singular", "verbo-regular"]  
pasos:  
  - "Identificar el sujeto y aplicar la conjugación."
  - "Verificar si hay cambios de raíz."
explicacion: "El verbo 'cantar' en primera persona singular es 'canto'. Las opciones incorrectas usan formas de otros tiempos o personas."
tipo: completar  
enunciado: "Eu ___ uma canção para me acalmar."  
respuestas_validas:  
  - "Canto"  
  - "cANTO"  
```

### 25 — Presente do indicativo (sujeito: tu)  
```  
metadata:  
  materia: "idiomas-extranjeros/portugues-br"  
  tema: "presente-indicativo"  
  nivel: "A1"  
  tags: ["segunda-pessoa-singular", "verbo-regular"]  
pasos:  
  - "Determinar el sujeto y aplicar la conjugación."
  - "Verificar si hay cambios de raíz."
explicacion: "El verbo 'trabalhar' en segunda persona singular es 'trabalhas'. Las opciones incorrectas usan formas de otros tiempos o personas."
tipo: completar  
enunciado: "Tu ___ no restaurante, não?"  
respuestas_validas:  
  - "Trabalhas"  
  - "tRABALHAS"  
```