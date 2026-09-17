> **Nota de corrección:** Este cuestionario fue corregido a partir del borrador en
> `_borradores-gemma/idiomas-extranjeros/portugues-pt/writing-b1/cuestionario_crudo.md`.
> Los bloques 21-25 estaban corrompidos por el mismo bug: sus `pasos:` no tenían
> comillas, llevaban una línea `---` suelta dentro de la propia cerca (rompiendo el
> parseo), y sus títulos/`tema:`/`materia:` no coincidían con su contenido real (p. ej.
> un bloque titulado "Acordo de verbo com sujeito composto" cuyo contenido probaba en
> realidad la preposición de "optar por") — señal de que fueron mezclados por el mismo
> tipo de corrupción visto en otros temas. Se corrigieron las comillas, se quitó la
> línea `---` suelta, se realinearon los títulos con su contenido real, y se normalizó
> `materia:`/`tema:`. Además:
> - **Bloque 21:** el borrador pedía completar "Ela decidiu _______ um novo estilo de
>   vida" con la preposición "com", una construcción que la propia explicación del
>   crudo admitía como agramatical. Se rediseñó con el verbo "optar" (que rige siempre
>   "por"), quedando "Ela optou por um novo estilo de vida".
> - **Bloques 21 y 23:** los `respuestas_validas:` incluían literalmente el placeholder
>   sin resolver `"com" (mayúscula)` / `"A" (mayúscula)` en vez de la variante en
>   mayúscula real; se corrigieron a "Por"/"A".

### 1 — Preposição correta após "interessado"  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-pt"
  tema: "writing-b1"
  nivel: "B1"
  tags: ["preposições", "verbos"]
pasos:
  - "Identificar o verbo que exige a preposição correta."
  - "Completar o espaço com 'em' ou 'por'."
respuestas_validas:
  - "em"
  - "Em"
tipo: completar
enunciado: "Estou muito _______ em aprender português."
```



### 2 — Artigo definido antes de substantivo masculino  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-pt"
  tema: "writing-b1"
  nivel: "B1"
  tags: ["artigos", "substantivos"]
pasos:
  - "Determinar o gênero do substantivo."
  - "Escolher o artigo definido masculino singular."
respuesta: "o"
opciones_explicitas:
  - "a"
  - "o"
  - "um"
tipo: mc
enunciado: "________ livro está sobre a mesa."
```



### 3 — Conjugação do verbo no presente  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-pt"
  tema: "writing-b1"
  nivel: "B1"
  tags: ["conjugação", "presente"]
pasos:
  - "Identificar o sujeito da oração."
  - "Conjugar 'ler' para terceira pessoa do singular."
respuestas_validas:
  - "lê"
  - "Lê"
tipo: completar
enunciado: "Ela _______ um romance todos os dias."
```



### 4 — Uso de "haver" vs "existir"  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-pt"
  tema: "writing-b1"
  nivel: "B1"
  tags: ["verbos", "semelhança"]
pasos:
  - "Escolher o verbo que expressa existência de algo."
  - "Decidir entre 'haver' e 'existir'."
respuesta: "existe"
opciones_explicitas:
  - "há"
  - "existe"
  - "tem"
tipo: mc
enunciado: "________ uma sala para reuniões no prédio."
```



### 5 — Forma correta do pretérito perfeito  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-pt"
  tema: "writing-b1"
  nivel: "B1"
  tags: ["pretérito", "conjugação"]
pasos:
  - "Identificar o sujeito da oração."
  - "Conjugar 'comprar' para terceira pessoa do singular."
respuestas_validas:
  - "comprou"
  - "Comprou"
tipo: completar
enunciado: "Ela _______ um novo computador ontem."
```



### 6 — Acordo de adjetivo com substantivo plural  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-pt"
  tema: "writing-b1"
  nivel: "B1"
  tags: ["acordo", "adjetivos"]
pasos:
  - "Determinar o número do substantivo."
  - "Ajustar o adjetivo para plural masculino."
respuesta: "interessantes"
opciones_explicitas:
  - "interessante"
  - "interessantes"
  - "interessante"
tipo: mc
enunciado: "Os filmes _______ são muito populares."
```



### 7 — Pronome relativo correto  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-pt"
  tema: "writing-b1"
  nivel: "B1"
  tags: ["pronome", "relativo"]
pasos:
  - "Identificar o sujeito da oração relativa."
  - "Escolher 'que' ou 'qual'."
respuestas_validas:
  - "que"
  - "Que"
tipo: completar
enunciado: "O livro _______ li é muito interessante."
```



### 8 — Uso de "ser" vs "estar" para estados  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-pt"
  tema: "writing-b1"
  nivel: "B1"
  tags: ["verbo ser", "estado"]
pasos:
  - "Determinar se o estado é temporário ou permanente."
  - "Escolher 'ser' para estados permanentes."
respuesta: "é"
opciones_explicitas:
  - "está"
  - "é"
  - "fica"
tipo: mc
enunciado: "Ela _______ uma médica muito dedicada."
```



### 9 — Infinitivo após preposição  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-pt"
  tema: "writing-b1"
  nivel: "B1"
  tags: ["infinitivo", "preposição"]
pasos:
  - "Identificar a preposição que exige o infinitivo."
  - "Escrever o verbo na forma infinitiva."
respuestas_validas:
  - "ler"
  - "Ler"
tipo: completar
enunciado: "Tenho vontade de _______ um livro novo."
```



### 10 — Uso de "pouco" vs "poucos"  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-pt"
  tema: "writing-b1"
  nivel: "B1"
  tags: ["quantificador", "plural"]
pasos:
  - "Identificar o número do substantivo."
  - "Escolher 'pouco' para singular ou 'poucos' para plural."
respuesta: "poucos"
opciones_explicitas:
  - "pouco"
  - "poucos"
  - "poucas"
tipo: mc
enunciado: "________ livros estão em falta na biblioteca."
```



### 11 — Acordo de verbo com sujeito composto  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-pt"
  tema: "writing-b1"
  nivel: "B1"
  tags: ["acordo", "sujeito"]
pasos:
  - "Identificar o núcleo do sujeito."
  - "Conjugar o verbo para plural."
respuestas_validas:
  - "vêm"
  - "Vêm"
tipo: completar
enunciado: "Os alunos _______ da sala de aula."
```



### 12 — Uso de "por" vs "para" em expressões  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-pt"
  tema: "writing-b1"
  nivel: "B1"
  tags: ["preposições", "expressões"]
pasos:
  - "Identificar a expressão que exige 'por' ou 'para'."
  - "Escolher a preposição correta."
respuesta: "para"
opciones_explicitas:
  - "por"
  - "para"
  - "com"
tipo: mc
enunciado: "O avião parte _______ Lisboa amanhã."
```



### 13 — Conjugação do verbo no futuro  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-pt"
  tema: "writing-b1"
  nivel: "B1"
  tags: ["futuro", "conjugação"]
pasos:
  - "Identificar o sujeito da oração."
  - "Conjugar 'chegar' para primeira pessoa do singular."
respuestas_validas:
  - "chegarei"
  - "Chegarei"
tipo: completar
enunciado: "Eu _______ ao trabalho amanhã às 8h."
```



### 14 — Uso de "a" vs "em" em movimento  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-pt"
  tema: "writing-b1"
  nivel: "B1"
  tags: ["preposições", "movimento"]
pasos:
  - "Identificar se o movimento é para dentro ou para fora."
  - "Escolher 'a' para início de trajeto ou 'em' para localização."
respuesta: "a"
opciones_explicitas:
  - "a"
  - "em"
  - "para"
tipo: mc
enunciado: "Vou _______ Paris fazer um intercâmbio."
```



### 15 — Acordo de adjetivo com substantivo feminino  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-pt"
  tema: "writing-b1"
  nivel: "B1"
  tags: ["acordo", "adjetivos"]
pasos:
  - "Determinar o gênero do substantivo."
  - "Ajustar o adjetivo para feminino singular."
respuesta: "interessante"
opciones_explicitas:
  - "interessante"
  - "interessantes"
  - "interessante"
tipo: mc
enunciado: "A música _______ me encanta muito."
```



### 16 — Uso de "ter" vs "haver" em frases  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-pt"
  tema: "writing-b1"
  nivel: "B1"
  tags: ["verbos", "existência"]
pasos:
  - "Identificar se a frase fala sobre posse ou existência."
  - "Escolher 'ter' para posse e 'haver' para existência."
respuesta: "tem"
opciones_explicitas:
  - "há"
  - "tem"
  - "existe"
tipo: mc
enunciado: "A loja _______ muitos livros disponíveis."
```



### 17 — Uso de "como" vs "tal como"  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-pt"
  tema: "writing-b1"
  nivel: "B1"
  tags: ["comparação", "preposições"]
pasos:
  - "Identificar se a frase compara algo de forma literal ou exemplificativa."
  - "Escolher 'como' para exemplos e 'tal como' para comparação direta."
respuestas_validas:
  - "como"
  - "Como"
tipo: completar
enunciado: "Ela estudou _______ eu estudei na universidade."
```



### 18 — Uso de "de" em expressões com verbos  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-pt"
  tema: "writing-b1"
  nivel: "B1"
  tags: ["preposições", "expressões"]
pasos:
  - "Identificar a expressão que exige 'de'."
  - "Escolher 'de' para indicação de origem ou causa."
respuesta: "de"
opciones_explicitas:
  - "de"
  - "para"
  - "com"
tipo: mc
enunciado: "O projeto falhou _______ falta de recursos."
```



### 19 — Conjugação do verbo no pretérito imperfeito  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-pt"
  tema: "writing-b1"
  nivel: "B1"
  tags: ["pretérito", "imperfeito"]
pasos:
  - "Identificar o sujeito da oração."
  - "Conjugar 'ler' para terceira pessoa do singular no imperfeito."
respuestas_validas:
  - "lêia"
  - "Lêia"
tipo: completar
enunciado: "Ela _______ um romance todos os dias na infância."
```



### 20 — Uso de "entre" vs "entre" com plural  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-pt"
  tema: "writing-b1"
  nivel: "B1"
  tags: ["preposições", "plural"]
pasos:
  - "Identificar se o substantivo é singular ou plural."
  - "Escolher 'entre' com plural para múltiplas opções."
respuesta: "entre"
opciones_explicitas:
  - "entre"
  - "entre"
  - "entre"
tipo: mc
enunciado: "Escolha _______ as duas opções disponíveis."
```



### 21 — Regência do verbo "optar" com preposição  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "writing-b1"  
  nivel: "B1"  
  tags: ["preposição", "verbo"]  
pasos:  
  - "Identificar a preposição correta que acompanha o verbo."
  - "Verificar se a estrutura da frase está coerente com a norma culta."
respuestas_validas:  
  - "por"  
  - "Por"  
tipo: completar  

enunciado: "Ela optou _______ um novo estilo de vida após o casamento."  
explicacion: "O verbo 'optar' rege sempre a preposição 'por' ('optar por algo'), nunca 'com'. A frase 'Ela optou por um novo estilo de vida' é a construção natural e correta em português."  

```

### 22 — Concordância verbal com sujeito plural  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "writing-b1"  
  nivel: "B1"  
  tags: ["concordância", "verbo"]  
pasos:  
  - "Analisar a concordância entre sujeito e verbo."
  - "Verificar se o verbo está no tempo e número adequados."
opciones_explicitas:  
  - "falam"  
  - "falo"  
  - "falamos"  
  - "fala"  
respuesta: "falam"  
tipo: mc  

enunciado: "Os voluntários _______ com os moradores da comunidade há dois anos."  
explicacion: "O sujeito 'os voluntários' é plural e masculino. O verbo 'falarem' no presente do indicativo concorda em número, mas não em gênero, pois o verbo não varia com o gênero do sujeito. Portanto, a forma correta é 'falam', que respeita a concordância numérica."  

```

### 23 — Uso do artigo definido antes de substantivo  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "writing-b1"  
  nivel: "B1"  
  tags: ["artigo", "definido"]  
pasos:  
  - "Identificar se o artigo definido é necessário para complementar a frase."
  - "Verificar se há uma referência clara ao substantivo."
respuestas_validas:  
  - "a"  
  - "A"  
tipo: completar  

enunciado: "Ela é _______ médica mais dedicada do hospital."  
explicacion: "O artigo definido 'a' é necessário para especificar que a médica mencionada é a única ou uma específica no contexto. A ausência do artigo tornaria a frase ambígua, indicando apenas o ofício em geral (médica) e não uma pessoa concreta."  

```

### 24 — Conjunção adversativa "mas"  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "writing-b1"  
  nivel: "B1"  
  tags: ["conjunção", "adversativa"]  
pasos:  
  - "Reconhecer o uso adequado da conjunção para conectar ideias opostas."
  - "Verificar se a conjunção é compatível com o contexto."
opciones_explicitas:  
  - "mas"  
  - "então"  
  - "pois"  
  - "logo"  
respuesta: "mas"  
tipo: mc  

enunciado: "Ele estudou muito, _______ não obteve a nota desejada."  
explicacion: "A conjunção 'mas' é usada para expressar contraste entre duas ideias. Neste caso, o sujeito estudou muito (ação positiva) e, apesar disso, não obteve a nota (resultado negativo), exigindo uma conjunção adversativa."  

```

### 25 — Pronome relativo "que"  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "writing-b1"  
  nivel: "B1"  
  tags: ["pronome", "relativo"]  
pasos:  
  - "Identificar o papel do pronome relativo na oração."
  - "Verificar se o pronome refere-se corretamente ao antecedente."
opciones_explicitas:  
  - "que"  
  - "quem"  
  - "o qual"  
  - "cujo"  
respuesta: "que"  
tipo: mc  

enunciado: "O livro _______ li ontem é muito interessante."  
explicacion: "O pronome relativo 'que' é usado para substituir o substantivo 'livro', que está no singular e não exige um pronome específico. O uso de 'quem' ou 'cujo' seria incorreto, pois referem-se a pessoas ou posses."
```
