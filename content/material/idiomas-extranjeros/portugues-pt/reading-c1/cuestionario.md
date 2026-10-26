> **Nota de corrección:** Este cuestionario fue corregido a partir del borrador en
> `_borradores-gemma/idiomas-extranjeros/portugues-pt/reading-c1/cuestionario_crudo.md`.
> 23 bloques tenían una línea `---` suelta dentro de la propia cerca, rompiendo el
> parseo; se quitó. El bloque 25 original estaba truncado por completo (sólo un
> encabezado cortado, "### 25 — U", sin ningún contenido) y se descartó, quedando el
> cuestionario en 24 bloques. Se corrigieron además nueve errores de contenido:
> - **5 bloques (2, 4, 10, 15, 23)**: la `respuesta:` no coincidía literalmente con
>   ninguna de sus propias `opciones_explicitas:` (acento distinto, mayúscula
>   distinta, o frase incompleta), lo que habría impedido que la respuesta correcta
>   fuera reconocida; corregido en cada caso.
> - **Bloque 4**: la explicación llamaba "gerúndio" a "trabalhava", que en realidad
>   es pretérito imperfecto del indicativo; corregida.
> - **Bloque 5**: la respuesta marcada como correcta ("são", plural) contradecía
>   directamente su propia explicación, que correctamente identificaba "é" (singular)
>   como la forma correcta para el sujeto simple "o diretor" (el título hablaba
>   además de un inexistente "sujeito composto"); corregido.
> - **Bloque 8**: dabas "para" como respuesta para "concluído ___ o prazo", una
>   construcción no idiomática; la forma correcta es "até" (ya estaba entre las
>   opciones como distractor).
> - **Bloque 11**: llamaba "verbo de movimiento" a "ser visto" (verbo de percepción,
>   no de movimiento); corregida la explicación.
> - **Bloque 12**: dabas el participio masculino "coberto" para el sujeto femenino
>   "superfície" (el portugués no tiene género neutro); corregido a "coberta".
> - **Bloque 17**: repetía el patrón agramatical de gerundio suelto tras "enquanto"
>   sin el auxiliar "estava"; corregido a pretérito imperfecto ("caminhava").
> - **Bloque 18**: la respuesta "ler" (leer) no tenía ninguna relación semántica con
>   la oración, que describe un libro que TIENE más de cien páginas, no que alguien
>   LEE; corregido a "tem" (presente del indicativo, concordando con el sujeto
>   singular "o livro").

### 1 — Concordância de adjetivo com substantivo  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-c1"  
  nivel: "C1"  
  tags: ["concordancia", "adjetivo", "substantivo"]  
pasos:  
  - "Identificar o substantivo e seu gênero/número."  
  - "Ajustar o adjetivo ao concordar com o substantivo."  
respuesta: "saudáveis"  
respuestas_validas:  
  - "saudáveis"  
  - "Saudáveis"  

enunciado: "Os funcionários do hospital são todos ______."  
opciones_explicitas:
  - "saudável"
  - "saudáveis"
  - "saudavel"
  - "saudaveis"
tipo: mc  

explicacion: "O substantivo 'funcionários' é plural e masculino. O adjetivo 'saudável' deve concordar em gênero (masculino) e número (plural), resultando em 'saudáveis'."  

```



### 2 — Uso de "se" em orações hipotéticas  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-c1"  
  nivel: "C1"  
  tags: ["condicional", "se", "hipótese"]  
pasos:  
  - "Reconhecer o contexto de hipótese."  
  - "Aplicar a estrutura correta com 'se'."  
respuesta: "vivêssemos"  
respuestas_validas:  
  - "vivêssemos"  
  - "Vivêssemos"  

enunciado: "Se ______ em outro país, talvez tivessemos mais oportunidades."  
opciones_explicitas:
  - "vivêssemos"
  - "viveríamos"
  - "vívemos"
  - "vivendo"
tipo: mc  

explicacion: "A oração hipotética no pretérito imperfeito do subjuntivo exige a forma 'vivêssemos' para concordar com o sujeito tácito (nós)."  

```



### 3 — Preposição correta após verbo  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-c1"  
  nivel: "C1"  
  tags: ["preposições", "verbo", "contexto"]  
pasos:  
  - "Identificar o verbo e seu complemento."  
  - "Escolher a preposição adequada."  
respuesta: "a"  
respuestas_validas:  
  - "a"  
  - "A"  

enunciado: "Ela está acostumada ______ rotina diária."  
opciones_explicitas:
  - "a"
  - "com"
  - "em"
  - "para"
tipo: mc  

explicacion: "O verbo 'acostumar-se' exige a preposição 'a' quando seguido de um substantivo, como em 'acostumada à rotina'."  

```



### 4 — Uso do gerúndio em orações subordinadas  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-c1"  
  nivel: "C1"  
  tags: ["gerúndio", "orações", "subordinação"]  
pasos:  
  - "Localizar a oração subordinada."  
  - "Verificar o uso correto do gerúndio."  
respuesta: "Enquanto"  
respuestas_validas:  
  - "enquanto"  
  - "Enquanto"  

enunciado: "______ trabalhava no escritório, ela estudava em casa."  
opciones_explicitas:
  - "Enquanto"
  - "Quando"
  - "Depois que"
  - "Assim que"
tipo: mc  

explicacion: "A conjunção 'enquanto' introduz uma oração subordinada adverbial de tempo. 'Trabalhava' está no pretérito imperfeito do indicativo (não é gerúndio), indicando duas ações simultâneas e prolongadas no passado."  

```



### 5 — Concordância do verbo com sujeito simples  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-c1"  
  nivel: "C1"  
  tags: ["concordancia", "sujeito", "verbo"]  
pasos:  
  - "Identificar o sujeito da oração."  
  - "Ajustar o verbo ao número e pessoa do sujeito."  
respuesta: "é"  
respuestas_validas:  
  - "é"  
  - "É"  

enunciado: "O diretor ______ responsável pela mudança de horário."  
opciones_explicitas:
  - "é"
  - "são"
  - "está"
  - "estão"
tipo: mc  

explicacion: "O sujeito 'o diretor' é singular, então o verbo 'ser' fica no singular ('é'), independentemente do complemento. A forma correta é 'é responsável'."  

```



### 6 — Uso de "pelo" vs. "pelos" em frases  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-c1"  
  nivel: "C1"  
  tags: ["preposições", "artigos", "contexto"]  
pasos:  
  - "Reconhecer o artigo definido e sua flexão."  
  - "Aplicar a preposição correta."  
respuesta: "pelo"  
respuestas_validas:  
  - "pelo"  
  - "Pelo"  

enunciado: "Ela decidiu ______ amor por ele de forma definitiva."  
opciones_explicitas:
  - "pelo"
  - "pelos"
  - "com o"
  - "no"
tipo: mc  

explicacion: "A expressão 'pelo amor' é uma locução fixa que exige a preposição 'pelo' (por + o) para indicar motivo."  

```



### 7 — Regra de formação do particípio passado  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-c1"  
  nivel: "C1"  
  tags: ["particípio", "verbo", "formação"]  
pasos:  
  - "Identificar o verbo e sua raiz."  
  - "Formar o particípio passado corretamente."  
respuesta: "escrito"  
respuestas_validas:  
  - "escrito"  
  - "Escrito"  

enunciado: "O texto ______ por uma equipe de especialistas em linguística."  
opciones_explicitas:
  - "escrito"
  - "escrivei"
  - "escreveu"
  - "escrevendo"
tipo: mc  

explicacion: "O particípio passado do verbo 'escrever' é 'escrito', que concorda com o sujeito (o texto) em número e gênero."  

```



### 8 — Uso de "por" vs. "para" em contextos temporais  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-c1"  
  nivel: "C1"  
  tags: ["preposições", "contexto", "tempo"]  
pasos:  
  - "Identificar o sentido da frase."  
  - "Escolher a preposição correta com base no tempo."  
respuesta: "até"  
respuestas_validas:  
  - "até"  
  - "Até"  

enunciado: "O projeto foi concluído ______ o prazo estabelecido."  
opciones_explicitas:
  - "no"
  - "em"
  - "até"
  - "para"
tipo: mc  

explicacion: "'Até' indica el límite temporal dentro del cual se completó la tarea ('concluído até o prazo' = terminado a más tardar en la fecha límite). 'Concluído para o prazo' no es una construcción idiomática del portugués."  

```



### 9 — Uso do infinitivo pessoal em orações subordinadas  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-c1"  
  nivel: "C1"  
  tags: ["infinitivo", "orações", "subordinação"]  
pasos:  
  - "Identificar a oração subordinada."  
  - "Verificar o uso do infinitivo pessoal."  
respuesta: "fazer"  
respuestas_validas:  
  - "fazer"  
  - "Fazer"  

enunciado: "É importante ______ exercícios físicos regularmente."  
opciones_explicitas:
  - "fazer"
  - "fazendo"
  - "feito"
  - "faça"
tipo: mc  

explicacion: "O infinitivo pessoal 'fazer' é usado após verbos como 'importa', 'precisa', 'é importante', indicando ação necessária."  

```



### 10 — Uso de "tão...quanto" em comparações  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-c1"  
  nivel: "C1"  
  tags: ["comparação", "advérbios", "estrutura"]  
pasos:  
  - "Identificar o elemento de comparação."  
  - "Aplicar a estrutura correta com 'tão...quanto'."  
respuesta: "tão inteligente"  
respuestas_validas:  
  - "tão inteligente"  
  - "Tão inteligente"  

enunciado: "Ela é ______ quanto seu irmão em termos de criatividade."  
opciones_explicitas:
  - "tão inteligente"
  - "mais inteligente"
  - "menos inteligente"
  - "inteiramente inteligente"
tipo: mc  

explicacion: "A estrutura 'tão...quanto' é usada para igualdade em comparações, como em 'tão inteligente quanto seu irmão'."  

```



### 11 — Uso do gerúndio com verbos de movimento  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-c1"  
  nivel: "C1"  
  tags: ["gerúndio", "verbos", "movimento"]  
pasos:  
  - "Identificar o verbo de movimento."  
  - "Verificar a concordância com o gerúndio."  
respuesta: "caminhando"  
respuestas_validas:  
  - "caminhando"  
  - "Caminhando"  

enunciado: "Ele foi visto ______ pela rua principal no momento do acidente."  
opciones_explicitas:
  - "caminhando"
  - "caminhou"
  - "caminhe"
  - "caminhar"
tipo: mc  

explicacion: "O gerúndio 'caminhando' complementa o verbo de percepção 'ver' (na passiva 'foi visto'), indicando a ação em curso no momento em que a pessoa foi percebida -- não se trata de um verbo de movimento, mas de percepção."  

```



### 12 — Uso do particípio passado com verbos de ligação  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-c1"  
  nivel: "C1"  
  tags: ["particípio", "verbos", "ligação"]  
pasos:  
  - "Identificar o verbo de ligação."  
  - "Formar o particípio passado corretamente."  
respuesta: "coberta"  
respuestas_validas:  
  - "coberta"  
  - "Coberta"  

enunciado: "A superfície do lago estava ______ por uma camada de gelo."  
opciones_explicitas:
  - "coberto"
  - "coberta"
  - "cobre"
  - "cobrindo"
tipo: mc  

explicacion: "O verbo 'estar' (verbo de ligação) requer o particípio passado do verbo 'cobrir', que concorda em gênero e número com o sujeito 'superfície' -- um substantivo feminino (o português não tem gênero neutro), por isso a forma correta é 'coberta'."  

```



### 13 — Uso de "em" vs. "no" em frases temporais  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-c1"  
  nivel: "C1"  
  tags: ["preposições", "tempo", "contexto"]  
pasos:  
  - "Identificar o contexto temporal."  
  - "Escolher a preposição correta com base no tempo."  
respuesta: "em"  
respuestas_validas:  
  - "em"  
  - "Em"  

enunciado: "Ela chegou ______ Paris na manhã do dia 10 de setembro."  
opciones_explicitas:
  - "a"
  - "em"
  - "para"
  - "no"
tipo: mc  

explicacion: "A preposição 'em' é usada para indicar localização no tempo (como em 'em Paris') ou em datas específicas ('em 10 de setembro')."  

```



### 14 — Uso do infinitivo pessoal com verbos de desejo  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-c1"  
  nivel: "C1"  
  tags: ["infinitivo", "desejo", "verbo"]  
pasos:  
  - "Identificar o verbo de desejo."  
  - "Verificar a forma correta do infinitivo pessoal."  
respuesta: "visitar"  
respuestas_validas:  
  - "visitar"  
  - "Visitar"  

enunciado: "Ela quer ______ as cidades da Europa antes dos 30 anos."  
opciones_explicitas:
  - "visitar"
  - "visitando"
  - "visitou"
  - "visite"
tipo: mc  

explicacion: "O infinitivo pessoal 'visitar' é usado após verbos como 'querer', 'pretender', indicando ação futura ou desejada."  

```



### 15 — Uso de "se" em orações causais  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-c1"  
  nivel: "C1"  
  tags: ["orações", "condicional", "se"]  
pasos:  
  - "Identificar a oração condicional hipotética."  
  - "Verificar o uso correto de 'se'."  
respuesta: "Se"  
respuestas_validas:  
  - "se"  
  - "Se"  

enunciado: "______ ele tivesse dinheiro, compraria uma casa nova."  
opciones_explicitas:
  - "Se"
  - "Quando"
  - "Porque"
  - "Como"
tipo: mc  

explicacion: "A oração causal com 'se' indica hipótese (condicional), como em 'Se ele tivesse dinheiro', que é a estrutura correta para expressar uma condição não realizada."  

```



### 16 — Concordância do adjetivo com substantivo coletivo  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-c1"  
  nivel: "C1"  
  tags: ["concordancia", "adjetivo", "substantivo"]  
pasos:  
  - "Identificar o substantivo coletivo."  
  - "Ajustar o adjetivo ao gênero e número do substantivo."  
respuesta: "felizes"  
respuestas_validas:  
  - "felizes"  
  - "Felizes"  

enunciado: "Os membros da equipe estão todos ______ com os resultados alcançados."  
opciones_explicitas:
  - "feliz"
  - "felizes"
  - "felicidade"
  - "feliçes"
tipo: mc  

explicacion: "O substantivo coletivo 'equipe' é singular, mas o adjetivo concorda em número com o sujeito (membros), resultando em 'felizes'."  

```



### 17 — Uso do gerúndio para expressar ação simultânea  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-c1"  
  nivel: "C1"  
  tags: ["gerúndio", "ação", "simultânea"]  
pasos:  
  - "Identificar ações simultâneas."  
  - "Verificar o uso do gerúndio corretamente."  
respuesta: "caminhava"  
respuestas_validas:  
  - "caminhava"  
  - "Caminhava"  

enunciado: "Enquanto ele ______ pela praia, ouviu um barulho estranho no mar."  
opciones_explicitas:
  - "caminha"
  - "caminhou"
  - "caminhava"
  - "caminhar"
tipo: mc  

explicacion: "Para ações simultâneas e prolongadas no passado com 'enquanto', usa-se o pretérito imperfeito ('caminhava'), não o gerúndio isolado (que precisaria do auxiliar 'estava': 'estava caminhando')."  

```



### 18 — Concordância verbal em oração subordinada adjetiva  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-c1"  
  nivel: "C1"  
  tags: ["concordancia", "subordinação", "adjetiva"]  
pasos:  
  - "Identificar a oração subordinada adjetiva."  
  - "Verificar a concordância do verbo 'ter' com o sujeito singular 'o livro'."  
respuesta: "tem"  
respuestas_validas:  
  - "tem"  
  - "Tem"  

enunciado: "O livro que ______ mais de cem páginas é muito difícil para iniciantes."  
opciones_explicitas:
  - "tem"
  - "têm"
  - "ter"
  - "ler"
tipo: mc  

explicacion: "A oração descreve um livro específico que possui mais de cem páginas, por isso usa-se o presente do indicativo 'tem' (concordando com o sujeito singular 'o livro'). 'Ler' seria um erro de sentido: a oração fala de o livro TER páginas, não de alguém O LER."  

```



### 19 — Uso de "pela" vs. "pelos" em frases  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-c1"  
  nivel: "C1"  
  tags: ["preposições", "artigos", "contexto"]  
pasos:  
  - "Identificar o artigo definido e sua flexão."  
  - "Aplicar a preposição correta com base no substantivo."  
respuesta: "pela"  
respuestas_validas:  
  - "pela"  
  - "Pela"  

enunciado: "Ela foi ______ cidade de Lisboa para visitar o Museu do Futebol."  
opciones_explicitas:
  - "a"
  - "para a"
  - "pela"
  - "no"
tipo: mc  

explicacion: "A expressão 'pela cidade' é uma locução fixa que exige a preposição 'pela' (por + a) para indicar movimento através de um lugar."  

```



### 20 — Uso do particípio passado com verbos de ligação e sujeito singular  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-c1"  
  nivel: "C1"  
  tags: ["particípio", "ligação", "sujeito"]  
pasos:  
  - "Identificar o verbo de ligação."  
  - "Formar o particípio passado corretamente com sujeito singular."  
respuesta: "coberta"  
respuestas_validas:  
  - "coberta"  
  - "Coberta"  

enunciado: "A janela estava ______ por uma camada de tinta branca."  
opciones_explicitas:
  - "coberto"
  - "coberta"
  - "cobre"
  - "cobrindo"
tipo: mc  

explicacion: "O verbo 'estar' (verbo de ligação) exige o particípio passado do verbo 'cobrir', que concorda com o sujeito feminino ('janela') em gênero e número."  

```



### 21 — Uso de "em" vs. "no" em frases temporais  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-c1"  
  nivel: "C1"  
  tags: ["preposições", "tempo", "contexto"]  
pasos:  
  - "Identificar o contexto temporal."  
  - "Escolher a preposição correta com base no tempo."  
respuesta: "no"  
respuestas_validas:  
  - "no"  
  - "No"  

enunciado: "O festival foi realizado ______ dia 5 de outubro em Lisboa."  
opciones_explicitas:
  - "a"
  - "em"
  - "para"
  - "no"
tipo: mc  

explicacion: "A preposição 'no' é usada para indicar datas específicas no tempo, como em 'no dia 5 de outubro', combinando 'em' + 'o'."  

```



### 22 — Uso do infinitivo pessoal com verbos de necessidade  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-c1"  
  nivel: "C1"  
  tags: ["infinitivo", "necessidade", "verbo"]  
pasos:  
  - "Identificar o verbo de necessidade."  
  - "Verificar a forma correta do infinitivo pessoal."  
respuesta: "estudar"  
respuestas_validas:  
  - "estudar"  
  - "Estudar"  

enunciado: "É essencial ______ novos idiomas para se comunicar internacionalmente."  
opciones_explicitas:
  - "estudar"
  - "estudando"
  - "estude"
  - "estudou"
tipo: mc  

explicacion: "O infinitivo pessoal 'estudar' é usado após verbos como 'ser essencial', indicando ação necessária ou recomendada."  

```



### 23 — Uso de "se" em orações condicionais  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "reading-c1"  
  nivel: "C1"  
  tags: ["orações", "condicional", "se"]  
pasos:  
  - "Identificar a oração condicional."  
  - "Verificar o uso correto de 'se'."  
respuesta: "Se"  
respuestas_validas:  
  - "se"  
  - "Se"  

enunciado: "______ você tivesse mais tempo, poderia viajar para a França."  
opciones_explicitas:
  - "Se"
  - "Quando"
  - "Porque"
  - "Como"
tipo: mc  

explicacion: "A oração condicional com 'se' indica hipótese (condicional), como em 'Se você tivesse mais tempo', que é a estrutura correta para expressar uma condição não realizada."  

```



### 24 — Concordância do adjetivo com substantivo coletivo  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-pt"
  tema: "reading-c1"
  nivel: "C1"
  tags: ["preposicao", "participio passado"]
pasos:
  - "Identificar o verbo 'estar' seguido de um participio passado que descreve o estado do sujeito."
  - "Reconhecer a relação entre o objeto (navio) e a causa da condição (furacão)."
  - "Confirmar que a preposição 'por' indica a causa ou motivo da ação descrita."
enunciado: "O navio estava _______ pelo furacão."
respuesta: "danificado"
respuestas_validas:
  - "danificado"
  - "Danificado"
explicacion: "O participio passado 'danificado' complementa o verbo estar, indicando o estado do navio após ter sido afetado pelo furacão. A preposição 'por' estabelece a relação de causa entre o fenômeno natural e o dano sofrido."
```
