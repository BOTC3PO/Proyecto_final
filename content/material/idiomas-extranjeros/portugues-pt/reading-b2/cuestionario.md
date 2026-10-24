> **Nota de corrección:** Este cuestionario fue corregido a partir del borrador en
> `_borradores-gemma/idiomas-extranjeros/portugues-pt/reading-b2/cuestionario_crudo.md`.
> 24 bloques tenían una línea `---` suelta dentro de la propia cerca, rompiendo el
> parseo; se quitó. A 9 de esos bloques les faltaban además por completo los campos
> `enunciado:` y `explicacion:` (ninguno de los dos existía), por lo que se
> construyeron ambos desde cero para cada uno. Se corrigieron también cuatro errores
> de contenido:
> - **Bloque 1:** usaba "camiseta" (vocabulario brasileño; en portugués europeo esa
>   palabra significa "camiseta interior", un falso amigo dentro del propio
>   portugués), corregido a "T-shirt".
> - **Bloque 6:** el hueco se colocaba justo antes de un "que" que ya estaba en la
>   oración, generando la redundancia "que que"; se rediseñó para probar la forma
>   verbal del subjuntivo ("cumpram") en vez del conector duplicado.
> - **Bloque 9:** pedía completar con "o" en "perguntou ___ porque não estava
>   presente", una construcción que no cierra gramaticalmente ("porque" sin acento no
>   puede actuar como sustantivo tras un artículo); se rediseñó con un ejemplo claro
>   de pronombre de complemento directo.
> - **Bloque 16:** usaba "trem" (vocabulario brasileño; en portugués europeo es
>   "comboio") y la expresión "atrasar o trem", que cambia el sentido (retrasar el
>   tren en sí, no llegar tarde a él); corregido a "perder o comboio".

### 1 — Identificar artículo definido  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["artigos", "definidos"]  
pasos:  
  - "Identificar el uso correcto del artículo definido en la oración."  
respuestas_validas:  
  - "a"  
  - "A"  
enunciado: "Ela comprou ___ T-shirt vermelha no mercado."  
tipo: completar  

```

### 2 — Uso de preposições  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["preposições", "comparação"]  
pasos:  
  - "Seleccionar la preposición que completa correctamente el sentido de comparación."  
opciones_explicitas:  
  - "do que"  
  - "como"  
  - "mais do que"  
enunciado: "Ela é mais alta ___ o irmão."
respuesta: "do que"  
tipo: mc  

explicacion: "En comparaciones de superioridad ('mais... que'), se usa 'do que' para introducir el segundo término de la comparación."
```

### 3 — Forma verbal en contexto temporal  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["pretérito", "imperfeito"]  
pasos:  
  - "Identificar la forma verbal que describe una acción habitual en el pasado."  
respuestas_validas:  
  - "estudava"  
  - "Estudava"  
enunciado: "Quando vivia em Lisboa, ___ matemática todos os dias."  
tipo: completar  

```

### 4 — Uso do gerúndio en oración compuesta  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["gerúndio", "concordância"]  
pasos:  
  - "Escribir el gerundio que concuerda con el sujeto de la oración."  
respuestas_validas:  
  - "fazendo"  
  - "Fazendo"  
enunciado: "___ uma pesquisa para a apresentação, ele descobriu informações importantes."  
tipo: completar  

```

### 5 — Elección de pronombre reflexivo  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["pronombres", "reflexivos"]  
pasos:  
  - "Elegir el pronombre reflexivo que completa correctamente la oración."  
opciones_explicitas:  
  - "me"  
  - "te"  
  - "se"  
enunciado: "Ele ___ vestiu rapidamente antes de sair."
respuesta: "se"  
tipo: mc  

explicacion: "El pronombre reflexivo de tercera persona, tanto singular como plural, es 'se'."
```

### 6 — Forma do verbo no presente de subjuntivo  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["subjuntivo", "presente"]  
pasos:  
  - "Identificar la forma del subjuntivo que expresa una necesidad."  
respuestas_validas:  
  - "cumpram"  
  - "Cumpram"  
enunciado: "É importante que todos ___ as regras do jogo."  
tipo: completar  

```

### 7 — Uso de conjunções adversativas  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["conjunções", "adversativas"]  
pasos:  
  - "Seleccionar la conjunción que expresa una contradicción en el contexto."  
opciones_explicitas:  
  - "mas"  
  - "então"  
  - "porque"  
enunciado: "Ele estudou muito, ___ não conseguiu passar no exame."
respuesta: "mas"  
tipo: mc  

explicacion: "'Mas' introduce una idea que contrasta con la anterior, expresando oposición."
```

### 8 — Concordância de adjetivos com substantivo  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["adjetivos", "concordância"]  
pasos:  
  - "Identificar el adjetivo que concuerda en género y número con su sustantivo."  
respuestas_validas:  
  - "curiosas"  
  - "Curiosas"  
enunciado: "As crianças eram ___ e sempre perguntavam sobre tudo."  
tipo: completar  

```

### 9 — Uso de pronomes pessoais em oração objetiva  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["pronombres", "pessoais"]  
pasos:  
  - "Identificar el pronombre personal de complemento directo que se usa en la oración."  
respuestas_validas:  
  - "o"  
  - "O"  
enunciado: "Ela ___ viu na rua ontem à tarde."  
tipo: completar  

```

### 10 — Forma do verbo no pretérito perfeito composto  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["pretérito", "composto"]  
pasos:  
  - "Escribir la forma compuesta del verbo que describe una acción terminada."  
respuestas_validas:  
  - "tinha feito"  
  - "Tinha feito"  
enunciado: "Ele ___ a tarefa antes de sair de casa."  
tipo: completar  

```

### 11 — Uso de advérbios de lugar  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["advérbios", "lugar"]  
pasos:  
  - "Seleccionar el adverbio de lugar que completa correctamente la oración."  
opciones_explicitas:  
  - "aqui"  
  - "lá"  
  - "ali"  
enunciado: "Não sei onde ele está, mas acho que foi para ___."
respuesta: "lá"  
tipo: mc  

explicacion: "'Lá' se refiere a un lugar alejado tanto del hablante como del oyente."
```

### 12 — Forma do verbo no futuro do presente  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["futuro", "presente"]  
pasos:  
  - "Identificar la forma del verbo futuro que se usa en contexto de planeación."  
respuestas_validas:  
  - "vou"  
  - "Vou"  
enunciado: "___ viajar para o Brasil no próximo mês, se tiver tempo."  
tipo: completar  

```

### 13 — Elección de complemento direto  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["complementos", "diretos"]  
pasos:  
  - "Elegir el complemento directo que completa correctamente la oración."  
opciones_explicitas:  
  - "ele"  
  - "a ele"  
  - "lhe"  
enunciado: "Vi ___ ontem no centro da cidade."
respuesta: "a ele"  
tipo: mc  

explicacion: "Cuando el complemento directo es una persona y se quiere dar énfasis, el portugués europeo usa la forma tónica precedida de 'a' ('a ele')."
```

### 14 — Uso de conjunções temporais  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["conjunções", "temporais"]  
pasos:  
  - "Identificar la conjunción temporal que conecta dos acciones en secuencia."  
respuestas_validas:  
  - "quando"  
  - "Quando"  
enunciado: "___ cheguei ao aeroporto, já estava tudo pronto para o embarque."  
tipo: completar  

```

### 15 — Concordância entre sujeito e verbo en oración compuesta  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["concordância", "sujeito-verbo"]  
pasos:  
  - "Identificar la forma del verbo que concuerda con el sujeto compuesto."  
respuestas_validas:  
  - "estão"  
  - "Estão"  
enunciado: "As crianças ___ brincando no jardim há uma hora."  
tipo: completar  

```

### 16 — Forma do verbo no imperativo afirmativo  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["imperativo", "afirmativo"]  
pasos:  
  - "Escribir la forma del verbo imperativo que se usa para dar una instrucción."  
respuestas_validas:  
  - "vai"  
  - "Vai"  
enunciado: "___ rápido, senão vais perder o comboio!"  
tipo: completar  

```

### 17 — Uso de pronomes demonstrativos  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["pronombres", "demonstrativos"]  
pasos:  
  - "Seleccionar el pronombre demostrativo que se refiere a algo cercano."  
opciones_explicitas:  
  - "este"  
  - "esse"  
  - "aquele"  
enunciado: "___ livro que tenho na mão é muito interessante."
respuesta: "este"  
tipo: mc  

explicacion: "'Este' se refiere a algo cercano al hablante, a diferencia de 'esse' (cercano al oyente) o 'aquele' (lejano a ambos)."
```

### 18 — Forma do verbo no pretérito imperfeito da conjugação irregular  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["pretérito", "irregular"]  
pasos:  
  - "Identificar la forma del verbo irregular en el pretérito imperfeito."  
respuestas_validas:  
  - "tinha"  
  - "Tinha"  
enunciado: "Ela ___ medo de falar em público antes do concurso."  
tipo: completar  

```

### 19 — Uso de advérbios de intensidade  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["advérbios", "intensidade"]  
pasos:  
  - "Seleccionar el adverbio de intensidad que amplifica el sentido del adjetivo."  
opciones_explicitas:  
  - "muito"  
  - "pouco"  
  - "nada"  
enunciado: "Este exercício é ___ difícil para os alunos."
respuesta: "muito"  
tipo: mc  

explicacion: "'Muito' es el adverbio de intensidad que amplifica el sentido del adjetivo, indicando un grado alto."
```

### 20 — Concordância entre pronome e verbo en oración de terceira pessoa  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["concordância", "terceira pessoa"]  
pasos:  
  - "Identificar la forma del verbo que concuerda con el pronombre de tercera persona."  
respuestas_validas:  
  - "fala"  
  - "Fala"  
enunciado: "Ela ___ português desde criança, mas não fala fluentemente."  
tipo: completar  

```

### 21 — Uso de conjunções causais  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["conjunções", "causais"]  
pasos:  
  - "Elegir la conjunción causal que expresa una causa en el contexto."  
opciones_explicitas:  
  - "porque"  
  - "embora"  
  - "mas"  
enunciado: "Não fui à festa ___ estava doente."
respuesta: "porque"  
tipo: mc  

explicacion: "'Porque' introduce la causa de la acción principal."
```

### 22 — Forma do verbo no infinitivo pessoal  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["infinitivo", "pessoal"]  
pasos:  
  - "Identificar la forma del infinitivo personal que se usa en oraciones subordinadas."  
respuestas_validas:  
  - "ter"  
  - "Ter"  
enunciado: "É importante ___ paciência ao lidar com problemas complexos."  
tipo: completar  

```

### 23 — Uso de pronomes indefinidos  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["pronombres", "indefinidos"]  
pasos:  
  - "Seleccionar el pronombre indefinido que se refiere a algo desconocido."  
opciones_explicitas:  
  - "algum"  
  - "ninguém"  
  - "cada um"  
enunciado: "Preciso de ___ conselho antes de decidir."
respuesta: "algum"  
tipo: mc  

explicacion: "'Algum' se refiere a una cosa indeterminada o desconocida, sin especificar cuál."
```

### 24 — Concordância entre sujeito e verbo em oração com sujeito composto  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["concordância", "sujeito-verbo"]  
pasos:  
  - "Identificar la forma del verbo que concuerda con el sujeto compuesto."  
respuestas_validas:  
  - "estão"  
  - "Estão"  
enunciado: "Os alunos ___ estudando para o exame de matemática há duas horas."  
tipo: completar  

```

### 25 — Forma do verbo no presente do subjuntivo com sujeito indeterminado  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-b2"  
  nivel: "B2"  
  tags: ["subjuntivo", "presente"]  
pasos:  
  - "Escribir la forma del subjuntivo que se usa cuando el sujeto es indeterminado."  
respuestas_validas:  
  - "que"  
  - "Que"  
enunciado: "É necessário ___ que todos sigam as regras do jogo."  
tipo: completar
```