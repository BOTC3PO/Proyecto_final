> **Nota de corrección:** Este cuestionario fue corregido a partir del borrador en
> `_borradores-gemma/idiomas-extranjeros/portugues-pt/speaking-b1/cuestionario_crudo.md`.
> 24 bloques tenían una línea `---` suelta dentro de la propia cerca, rompiendo el
> parseo; se quitó. A 12 de ellos les faltaba además el `enunciado:`, reconstruido
> como metapregunta de opción múltiple. Se corrigieron dos errores de contenido:
> - **Bug sistémico:** el archivo usaba en todo momento el presente continuo al
>   estilo brasileño ("estar" + gerundio: "estou comendo", "está viajando"), cuando el
>   portugués europeo estándar forma el continuo con "estar a" + infinitivo ("estou a
>   comer", "está a viajar"). Se corrigió en los 6 bloques afectados (3, 4, 12, 15, 22,
>   25).
> - **Dos bloques (5 y 17)** etiquetaban en `pasos:` como "pronombre de objeto
>   directo" a palabras que no lo son: "me" en "dê-me um livro" es objeto indirecto
>   (el objeto directo es "um livro"), y "que" en "tenho que estudar" no es un
>   pronombre en absoluto, sino parte de la estructura obligacional "ter que" +
>   infinitivo; se corrigieron ambas etiquetas.

### 1 — Preenchimento de preposição  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "preposições com verbos"  
  nivel: "B1"  
  tags: ["vou", "ao", "cinema"]  
pasos:  
  - "Identificar a preposição correta para o verbo 'ir'."  
  - "Verificar a contração da preposição com o artigo definido."  
tipo: completar  
respuestas_validas:  
  - "ao"  
  - "Ao"  
enunciado: "Eu ______ ao cinema amanhã. (preencha o espaço)"  

```

### 2 — Escolha múltipla com erro de conjugação  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "conjugação do verbo 'ter'"  
  nivel: "B1"  
  tags: ["tenho", "tem", "temos"]  
pasos:  
  - "Identificar a forma correta do verbo 'ter' para o sujeito."  
  - "Comparar com formas erradas comuns de conjugação."  
enunciado: "¿Cuál es la conjugación correcta del verbo 'ter' para el sujeto 'nós'?"
opciones_explicitas:  
  - "Eu tenho um carro novo."  
  - "Ele tem uma bicicleta azul."  
  - "Nós temos que estudar mais."  
respuesta: "Nós temos que estudar mais."  
tipo: mc  

```

### 3 — Preenchimento de verbo no presente contínuo  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "presente contínuo"  
  nivel: "B1"  
  tags: ["estou", "comendo", "sopa"]  
pasos:  
  - "Reconhecer a estrutura do presente contínuo em português."  
  - "Ajustar o verbo auxiliar 'estar' ao sujeito."  
tipo: completar  
respuestas_validas:  
  - "estou"  
  - "Estou"  
enunciado: "______ a comer sopa enquanto assisto à TV. (preencha o espaço)"  

```

### 4 — Escolha múltipla com uso de 'para' vs 'por'  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "preposições 'para' e 'por'"  
  nivel: "B1"  
  tags: ["viajar", "paris", "mês"]  
pasos:  
  - "Diferenciar o uso de 'para' (destino) e 'por' (duração)."  
  - "Avaliar a lógica do contexto."  
enunciado: "¿Cuál es el orden correcto de 'para' (destino) y 'por' (duración)?"
opciones_explicitas:  
  - "Ela está a viajar para Paris por um mês."  
  - "Ela está a viajar por Paris para um mês."  
  - "Ela está a viajar por um mês para Paris."  
respuesta: "Ela está a viajar para Paris por um mês."  
tipo: mc  

```

### 5 — Preenchimento de pronome objeto direto  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "pronomes objetos diretos"  
  nivel: "B1"  
  tags: ["dê", "a", "eu"]  
pasos:  
  - "Identificar o pronome de objeto indireto do verbo 'dar' ('dar algo A ALGUÉM')."  
  - "Verificar a ordem correta na frase."  
tipo: completar  
respuestas_validas:  
  - "me"  
  - "Me"  
enunciado: "Por favor, ______ um livro. (preencha o espaço)"  

```

### 6 — Escolha múltipla com verbo 'dever' vs 'ter que'  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "modalidades verbais"  
  nivel: "B1"  
  tags: ["devo", "tenho que", "estudar"]  
pasos:  
  - "Reconhecer a diferença entre 'dever' e 'ter que'."  
  - "Avaliar o contexto de obrigação."  
enunciado: "¿Cuál es la oración que expresa correctamente una obligación puntual con 'ter que'?"
opciones_explicitas:  
  - "Eu deveria estudar mais, mas prefiro descansar."  
  - "Eu tenho que estudar para a prova amanhã."  
  - "Eu devia estudar, mas não estou fazendo isso."  
respuesta: "Eu tenho que estudar para a prova amanhã."  
tipo: mc  

```

### 7 — Preenchimento de verbo 'ir' com preposição  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "preposições com verbos"  
  nivel: "B1"  
  tags: ["vou", "comprar", "supermercado"]  
pasos:  
  - "Identificar a preposição correta após o verbo 'ir'."  
  - "Verificar a contração com artigo definido."  
tipo: completar  
respuestas_validas:  
  - "ao"  
  - "Ao"  
enunciado: "Vou ______ comprar pão. (preencha o espaço)"  

```

### 8 — Escolha múltipla com uso de 'haver' vs 'ter'  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "verbo 'haver'"  
  nivel: "B1"  
  tags: ["há", "temos", "livros"]  
pasos:  
  - "Diferenciar o uso de 'haver' (existência) e 'ter' (posse)."  
  - "Avaliar a lógica do contexto."  
enunciado: "¿Cuál es la oración correcta que usa 'haver' para expresar existencia?"
opciones_explicitas:  
  - "Há muitos livros na biblioteca."  
  - "Nós temos livros emprestados."  
  - "Ela há um carro novo."  
respuesta: "Há muitos livros na biblioteca."  
tipo: mc  

```

### 9 — Preenchimento de verbo no futuro do presente  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "futuro do presente"  
  nivel: "B1"  
  tags: ["vou", "chegar", "trabalho"]  
pasos:  
  - "Identificar a estrutura correta do futuro do presente."  
  - "Ajustar o verbo auxiliar 'ir' ao sujeito."  
tipo: completar  
respuestas_validas:  
  - "vou"  
  - "Vou"  
enunciado: "______ chegar ao trabalho às 8h. (preencha o espaço)"  

```

### 10 — Escolha múltipla com erro de concordância  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "concordância verbal"  
  nivel: "B1"  
  tags: ["vão", "comer", "nós"]  
pasos:  
  - "Verificar a concordância entre sujeito e verbo."  
  - "Identificar formas erradas comuns de conjugação."  
enunciado: "¿Cuál es la conjugación correcta del verbo 'ir' para el sujeito 'nós'?"
opciones_explicitas:  
  - "Nós vamos comer juntos hoje."  
  - "Nós vão comer juntos hoje."  
  - "Eles vam comer juntos hoje."  
respuesta: "Nós vamos comer juntos hoje."  
tipo: mc  

```

### 11 — Preenchimento de verbo 'ir' com preposição (2)  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "preposições com verbos"  
  nivel: "B1"  
  tags: ["vou", "visitar", "amigos"]  
pasos:  
  - "Identificar a preposição correta após o verbo 'ir'."  
  - "Verificar a contração com artigo definido."  
tipo: completar  
respuestas_validas:  
  - "aos"  
  - "Aos"  
enunciado: "Vou ______ visitar meus amigos. (preencha o espaço)"  

```

### 12 — Escolha múltipla com uso de 'por' vs 'para' no tempo  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "preposições 'por' e 'para'"  
  nivel: "B1"  
  tags: ["estudar", "três horas", "prova"]  
pasos:  
  - "Diferenciar o uso de 'por' (duração) e 'para' (finalidade)."  
  - "Avaliar a lógica do contexto."  
enunciado: "¿Cuál es el orden correcto de 'por' (duración) y 'para' (finalidad)?"
opciones_explicitas:  
  - "Estou a estudar para a prova por três horas."  
  - "Estou a estudar por três horas para a prova."  
  - "Estou a estudar para três horas para a prova."  
respuesta: "Estou a estudar por três horas para a prova."  
tipo: mc  

```

### 13 — Preenchimento de verbo 'ser' no passado  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "pretérito perfeito do indicativo"  
  nivel: "B1"  
  tags: ["fui", "ao", "cinema"]  
pasos:  
  - "Identificar a forma correta do verbo 'ser' para o sujeito."  
  - "Verificar a contração com preposição."  
tipo: completar  
respuestas_validas:  
  - "fui"  
  - "Fui"  
enunciado: "______ ao cinema ontem. (preencha o espaço)"  

```

### 14 — Escolha múltipla com uso de 'poder' vs 'conseguir'  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "modalidades verbais"  
  nivel: "B1"  
  tags: ["posso", "conseguiu", "fazer"]  
pasos:  
  - "Reconhecer a diferença entre 'poder' (capacidade) e 'conseguir' (realização)."  
  - "Avaliar o contexto de possibilidade."  
enunciado: "¿Cuál es la oración correcta que expresa haber logrado hacer algo ('conseguir')?"
opciones_explicitas:  
  - "Ela conseguiu resolver o problema sozinha."  
  - "Ela pode resolver o problema sozinha."  
  - "Ela posso resolver o problema sozinha."  
respuesta: "Ela conseguiu resolver o problema sozinha."  
tipo: mc  

```

### 15 — Preenchimento de verbo no presente contínuo (2)  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "presente contínuo"  
  nivel: "B1"  
  tags: ["estou", "ler", "livro"]  
pasos:  
  - "Reconhecer a estrutura do presente contínuo em português."  
  - "Ajustar o verbo auxiliar 'estar' ao sujeito."  
tipo: completar  
respuestas_validas:  
  - "estou"  
  - "Estou"  
enunciado: "______ a ler um livro interessante. (preencha o espaço)"  

```

### 16 — Escolha múltipla com erro de preposição  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "preposições com verbos"  
  nivel: "B1"  
  tags: ["vou", "trabalhar", "empresa"]  
pasos:  
  - "Identificar a preposição correta após o verbo 'ir'."  
  - "Verificar a contração com artigo definido."  
enunciado: "¿Cuál es la preposición correcta después de 'trabalhar' en este contexto?"
opciones_explicitas:  
  - "Vou trabalhar na empresa de meu irmão."  
  - "Vou para a empresa de meu irmão."  
  - "Vou no empresa de meu irmão."  
respuesta: "Vou trabalhar na empresa de meu irmão."  
tipo: mc  

```

### 17 — Preenchimento de verbo 'ter' com objeto direto  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "pronomes objetos diretos"  
  nivel: "B1"  
  tags: ["tenho", "que", "estudar"]  
pasos:  
  - "Reconhecer a estrutura obrigacional 'ter que' + infinitivo ('que' aqui não é pronome)."  
  - "Verificar a ordem correta na frase."  
tipo: completar  
respuestas_validas:  
  - "que"  
  - "Que"  
enunciado: "Eu ______ estudar para a prova. (preencha o espaço)"  

```

### 18 — Escolha múltipla com uso de 'haver' no presente  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "verbo 'haver'"  
  nivel: "B1"  
  tags: ["há", "pessoas", "rua"]  
pasos:  
  - "Diferenciar o uso de 'haver' (existência) e 'ter' (posse)."  
  - "Avaliar a lógica do contexto."  
enunciado: "¿Cuál es la oración correcta que usa 'haver' para expresar existencia?"
opciones_explicitas:  
  - "Há muitas pessoas na rua hoje."  
  - "Ela tem muitas pessoas na rua hoje."  
  - "Há muitas pessoas em sua rua hoje."  
respuesta: "Há muitas pessoas na rua hoje."  
tipo: mc  

```

### 19 — Preenchimento de verbo no futuro do presente (2)  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "futuro do presente"  
  nivel: "B1"  
  tags: ["vou", "chegar", "casa"]  
pasos:  
  - "Identificar a estrutura correta do futuro do presente."  
  - "Ajustar o verbo auxiliar 'ir' ao sujeito."  
tipo: completar  
respuestas_validas:  
  - "vou"  
  - "Vou"  
enunciado: "______ chegar em casa às 20h. (preencha o espaço)"  

```

### 20 — Escolha múltipla com erro de concordância (2)  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "concordância verbal"  
  nivel: "B1"  
  tags: ["vão", "comer", "eles"]  
pasos:  
  - "Verificar a concordância entre sujeito e verbo."  
  - "Identificar formas erradas comuns de conjugação."  
enunciado: "¿Cuál es la conjugación correcta del verbo 'ir' para el sujeto 'eles'?"
opciones_explicitas:  
  - "Eles vão comer juntos hoje."  
  - "Eles vam comer juntos hoje."  
  - "Eles tem que comer juntos hoje."  
respuesta: "Eles vão comer juntos hoje."  
tipo: mc  

```

### 21 — Preenchimento de verbo 'ir' com preposição (3)  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "preposições com verbos"  
  nivel: "B1"  
  tags: ["vou", "visitar", "família"]  
pasos:  
  - "Identificar a preposição correta após o verbo 'ir'."  
  - "Verificar a contração com artigo definido."  
tipo: completar  
respuestas_validas:  
  - "à"  
  - "À"  
enunciado: "Vou ______ visitar minha família. (preencha o espaço)"  

```

### 22 — Escolha múltipla com uso de 'por' vs 'para' no tempo (2)  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "preposições 'por' e 'para'"  
  nivel: "B1"  
  tags: ["estudar", "duas horas", "exame"]  
pasos:  
  - "Diferenciar o uso de 'por' (duração) e 'para' (finalidade)."  
  - "Avaliar a lógica do contexto."  
enunciado: "¿Cuál es el orden correcto de 'por' (duración) y 'para' (finalidad)?"
opciones_explicitas:  
  - "Estou a estudar para o exame por duas horas."  
  - "Estou a estudar por duas horas para o exame."  
  - "Estou a estudar para duas horas para o exame."  
respuesta: "Estou a estudar por duas horas para o exame."  
tipo: mc  

```

### 23 — Preenchimento de verbo 'ser' no passado (2)  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "pretérito perfeito do indicativo"  
  nivel: "B1"  
  tags: ["fui", "ao", "supermercado"]  
pasos:  
  - "Identificar a forma correta do verbo 'ser' para o sujeito."  
  - "Verificar a contração com preposição."  
tipo: completar  
respuestas_validas:  
  - "fui"  
  - "Fui"  
enunciado: "______ ao supermercado ontem. (preencha o espaço)"  

```

### 24 — Escolha múltipla com uso de 'poder' vs 'conseguir' (2)  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "modalidades verbais"  
  nivel: "B1"  
  tags: ["posso", "conseguiu", "fazer"]  
pasos:  
  - "Reconhecer a diferença entre 'poder' (capacidade) e 'conseguir' (realização)."  
  - "Avaliar o contexto de possibilidade."  
enunciado: "¿Cuál es la oración correcta que expresa haber logrado hacer algo ('conseguir')?"
opciones_explicitas:  
  - "Ela conseguiu fazer o projeto sozinha."  
  - "Ela pode fazer o projeto sozinha."  
  - "Ela posso fazer o projeto sozinha."  
respuesta: "Ela conseguiu fazer o projeto sozinha."  
tipo: mc  

```

### 25 — Preenchimento de verbo no presente contínuo (3)  
```
metadata:  
  materia: "idiomas-extranjeros/portugues-pt"  
  tema: "presente contínuo"  
  nivel: "B1"  
  tags: ["estou", "escrever", "carta"]  
pasos:  
  - "Reconhecer a estrutura do presente contínuo em português."  
  - "Ajustar o verbo auxiliar 'estar' ao sujeito."  
tipo: completar  
respuestas_validas:  
  - "estou"  
  - "Estou"  
enunciado: "______ a escrever uma carta importante. (preencha o espaço)"
```