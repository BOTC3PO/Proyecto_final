> **Nota de corrección:** Este cuestionario fue corregido a partir del borrador en
> `_borradores-gemma/idiomas-extranjeros/portugues-br/speaking-c1/cuestionario_crudo.md`.
> A los 25 bloques les faltaba el campo `tipo:` por completo (ni `mc` ni `completar`) y
> el campo `enunciado:`. Se determinó el tipo según la forma de cada bloque: los 14
> bloques con `opciones_explicitas:` se marcaron `tipo: mc` y recibieron un enunciado
> de opción múltiple sobre la estructura gramatical en juego; los 11 bloques restantes
> (con `respuesta:`/`respuestas_validas:` pero sin opciones, la respuesta ya era una
> oración completa en portugués) se marcaron `tipo: completar` y recibieron un
> enunciado de producción ("Produza uma oração que...") o una oración con hueco
> construida alrededor de la respuesta existente. También se corrigió la ausencia de
> la última cerca ` ``` ` de cierre en el bloque 25.

### 1 — Subjuntivo en oraciones de duda  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["subjuntivo", "dudas"]
pasos:
  - "Identificar la estructura de la oración."
  - "Reconocer el uso del subjuntivo en cláusulas de duda."
tipo: completar
enunciado: "Complete: 'Antes de tomar uma decisão, prefiro ___ ele tenha razão.'"
respuesta: "duvidar que"
respuestas_validas:
  - "duvidar que"
  - "Duvidar que"
explicacion: "El subjuntivo se usa después de expresiones de duda como 'duvidar que', 'não acreditar que', etc., para indicar incertidumbre."
```

### 2 — Gerundio en oraciones temporales  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["gerundio", "tiempo"]
pasos:
  - "Reconocer el uso del gerundio en oraciones temporales."
  - "Verificar la concordancia con el verbo principal."
tipo: mc
enunciado: "¿Cuál es la oración correcta para expresar una acción anterior con 'após' + infinitivo?"
opciones_explicitas:
  - "Após ter chegado ao aeroporto, percebi o erro."
  - "Após chegar ao aeroporto, percebi o erro."
  - "Após cheguei ao aeroporto, percebi o erro."
respuesta: "Após chegar ao aeroporto, percebi o erro."
explicacion: "El gerundio 'chegar' se usa después de 'após' para indicar una acción que ocurre antes del verbo principal en el presente."
```

### 3 — Condicional hipotético (tipo 3)  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["condicional", "hipótesis"]
pasos:
  - "Identificar el tipo de condicional."
  - "Usar la forma correcta del pretérito pluscuamperfecto en el si."
tipo: completar
enunciado: "Produza uma oração de condicional tipo 3 (hipótese irreal no passado) sobre estudar mais e passar em um exame."
respuesta: "Se eu tivesse estudado mais, teria passado no exame."
respuestas_validas:
  - "Se eu tivesse estudado mais, teria passado no exame."
  - "Se eu tivesse estudado mais, teria passado no exame."
explicacion: "El condicional hipotético tipo 3 usa el pretérito pluscuamperfecto en el 'si' y el condicional compuesto en la consecuencia para situaciones irreales en el pasado."
```

### 4 — Uso de "se" en oraciones hipotéticas  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["se", "hipótesis"]
pasos:
  - "Reconocer la estructura 'se' + subjuntivo."
  - "Verificar el contexto de hipótesis irreal."
tipo: mc
enunciado: "¿Cuál es la oración correcta para expresar una hipótesis irreal con 'se' + subjuntivo?"
opciones_explicitas:
  - "Se eu tivesse mais tempo, faria o trabalho."
  - "Se eu tenho mais tempo, faço o trabalho."
  - "Se eu tive mais tempo, fiz o trabalho."
respuesta: "Se eu tivesse mais tempo, faria o trabalho."
explicacion: "La estructura 'se' + subjuntivo se usa para expresar hipótesis irreales en el presente o futuro."
```

### 5 — Pasivo con "ser" y participio  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["pasivo", "participio"]
pasos:
  - "Reconocer el uso del pasivo en oraciones formales."
  - "Verificar la concordancia entre 'ser' y el participio."
tipo: completar
enunciado: "Produza uma oração no passivo com 'ser' + particípio sobre um relatório entregue ontem."
respuesta: "O relatório foi entregue ontem."
respuestas_validas:
  - "O relatório foi entregue ontem."
  - "O relatório foi entregue ontem."
explicacion: "El pasivo en portugués se forma con 'ser' + participio del verbo, usado comúnmente en contextos formales o impersonales."
```

### 6 — Relativos con "que" e "o qual"  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["relativos", "restricción"]
pasos:
  - "Identificar si el relativo es restrictivo o no."
  - "Elegir entre 'que' (restrictivo) y 'o qual' (no restrictivo)."
tipo: mc
enunciado: "¿Cuál es la oración correcta que usa 'o qual' en una cláusula no restrictiva?"
opciones_explicitas:
  - "O livro que comprei é muito interessante."
  - "O livro, o qual comprei, é muito interessante."
  - "O livro, que comprei, é muito interessante."
respuesta: "O livro, o qual comprei, é muito interessante."
explicacion: "'O qual' se usa en oraciones no restrictivas para añadir información adicional, mientras que 'que' es restrictivo."
```

### 7 — Imperativo en segunda persona  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["imperativo", "segunda persona"]
pasos:
  - "Reconocer la forma del imperativo en el presente."
  - "Verificar el uso de 'você' o 'vocês'."
tipo: completar
enunciado: "Produza uma oração formal pedindo, com 'você', para que alguém não fume em um lugar."
respuesta: "Você não deve fumar aqui."
respuestas_validas:
  - "Você não deve fumar aqui."
  - "Você não deve fumar aqui."
explicacion: "El imperativo en portugués se forma con la raíz del verbo sin desinencias, y el sujeto se deduce del contexto o de los pronombres."
```

### 8 — Uso de "como" en comparaciones  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["comparación", "como"]
pasos:
  - "Identificar el uso de 'como' para comparar aspectos."
  - "Verificar la concordancia con el verbo en presente o pasado."
tipo: mc
enunciado: "¿Cuál es la oración correcta que usa 'como se' + subjuntivo para una comparación hipotética?"
opciones_explicitas:
  - "Ela fala como se tivesse estudado em Londres."
  - "Ela fala como se estude em Londres."
  - "Ela fala como se tenha estudado em Londres."
respuesta: "Ela fala como se tivesse estudado em Londres."
explicacion: "'Como se' + subjuntivo se usa para comparar una acción hipotética con el presente o pasado."
```

### 9 — Gerundio en oraciones consecutivas  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["gerundio", "consecuencia"]
pasos:
  - "Reconocer el uso del gerundio en oraciones consecutivas."
  - "Verificar la relación temporal con 'enquanto'."
tipo: completar
enunciado: "Produza uma oração com gerúndio que expresse uma ação simultânea interrompida por outra, usando 'enquanto'."
respuesta: "Enquanto estava estudando, ouvi um barulho."
respuestas_validas:
  - "Enquanto estava estudando, ouvi um barulho."
  - "Enquanto estava estudando, ouvi um barulho."
explicacion: "El gerundio se usa en oraciones consecutivas para indicar una acción simultánea al verbo principal."
```

### 10 — Uso de "em que" en oraciones interrogativas  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["interrogativa", "em que"]
pasos:
  - "Identificar el uso de 'em que' para preguntar sobre un lugar o situación."
  - "Verificar la concordancia con el verbo en presente."
tipo: mc
enunciado: "¿Cuál es la pregunta correcta usando 'em que' para preguntar sobre un lugar, en registro no formal?"
opciones_explicitas:
  - "Em que cidade você trabalha?"
  - "Em qual cidade você trabalha?"
  - "Em que cidade você trabalhava?"
respuesta: "Em que cidade você trabalha?"
explicacion: "'Em que' se usa para preguntar sobre un lugar o situación específica, mientras que 'em qual' es más formal."
```

### 11 — Uso de "se" en oraciones impersonales  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["impersonal", "se"]
pasos:
  - "Reconocer el uso de 'se' para oraciones impersonales."
  - "Verificar la concordancia con el verbo en presente o infinitivo."
tipo: completar
enunciado: "Produza uma oração impessoal com 'se' recomendando consultar um especialista."
respuesta: "Se recomenda que você consulte um especialista."
respuestas_validas:
  - "Se recomenda que você consulte um especialista."
  - "Se recomenda que você consulte um especialista."
explicacion: "'Se' se usa para oraciones impersonales que expresan consejos, recomendaciones o hechos generales."
```

### 12 — Uso de "tal" en comparaciones  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["comparación", "tal"]
pasos:
  - "Identificar el uso de 'tal' para comparar aspectos."
  - "Verificar la concordancia con el sustantivo."
tipo: mc
enunciado: "¿Cuál es la oración correcta que usa 'tal' para referirse a una persona mencionada previamente?"
opciones_explicitas:
  - "Ela é tão inteligente quanto tal pessoa."
  - "Ela é tão inteligente como tal pessoa."
  - "Ela é tão inteligente como aquela pessoa."
respuesta: "Ela é tão inteligente quanto tal pessoa."
explicacion: "'Tal' se usa para referirse a una persona o cosa específica mencionada previamente en comparaciones."
```

### 13 — Uso de "se" en oraciones reflexivas  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["reflexivo", "se"]
pasos:
  - "Reconocer el uso de 'se' para acciones reflexivas."
  - "Verificar la concordancia con el verbo en presente o pretérito."
tipo: completar
enunciado: "Produza uma oração reflexiva sobre um homem que se preparou para uma reunião."
respuesta: "O homem se preparou para a reunião."
respuestas_validas:
  - "O homem se preparou para a reunião."
  - "O homem se preparou para a reunião."
explicacion: "'Se' se usa en oraciones reflexivas para indicar que el sujeto realiza la acción sobre sí mismo."
```

### 14 — Uso de "como" en ejemplos  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["ejemplo", "como"]
pasos:
  - "Identificar el uso de 'como' para dar ejemplos."
  - "Verificar la concordancia con el verbo en presente o infinitivo."
tipo: mc
enunciado: "¿Cuál es la oración correcta que usa 'como' para dar un ejemplo directo (sin subjuntivo)?"
opciones_explicitas:
  - "Ela fala como uma verdadeira profissional."
  - "Ela fala como se fosse uma verdadeira profissional."
  - "Ela fala como sendo uma verdadeira profissional."
respuesta: "Ela fala como uma verdadeira profissional."
explicacion: "'Como' seguido de un sustantivo expresa una comparación directa con un ejemplo específico."
```

### 15 — Uso de "se" en oraciones pasivas  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["pasivo", "se"]
pasos:
  - "Reconocer el uso de 'se' en oraciones pasivas."
  - "Verificar la concordancia con el verbo en presente o infinitivo."
tipo: completar
enunciado: "Produza uma oração no passivo sobre um projeto que foi aprovado ontem."
respuesta: "O projeto foi aprovado ontem."
respuestas_validas:
  - "O projeto foi aprovado ontem."
  - "O projeto foi aprovado ontem."
explicacion: "'Se' se usa en oraciones pasivas para indicar que la acción no está ligada a un sujeto específico."
```

### 16 — Uso de "em que" en oraciones relativas  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["relativo", "em que"]
pasos:
  - "Identificar el uso de 'em que' para oraciones relativas."
  - "Verificar la concordancia con el verbo en presente o infinitivo."
tipo: mc
enunciado: "¿Cuál es la oración correcta que usa 'em que' en una cláusula relativa sobre un lugar?"
opciones_explicitas:
  - "A cidade em que nasci é linda."
  - "A cidade, em que nasci, é linda."
  - "A cidade, onde nasci, é linda."
respuesta: "A cidade em que nasci é linda."
explicacion: "'Em que' se usa para oraciones relativas no restrictivas cuando se refiere a un lugar o situación específica."
```

### 17 — Uso de "tal" en oraciones exclamativas  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["exclamativa", "tal"]
pasos:
  - "Identificar el uso de 'tal' en oraciones exclamativas."
  - "Verificar la concordancia con el adjetivo o sustantivo."
tipo: mc
enunciado: "¿Cuál es la oración exclamativa correcta que usa 'que tal'?"
opciones_explicitas:
  - "Que tal essa ideia!"
  - "Tal essa ideia!"
  - "Como tal ideia!"
respuesta: "Que tal essa ideia!"
explicacion: "'Que tal' se usa en oraciones exclamativas para expresar sorpresa o aprobación."
```

### 18 — Uso de "se" en oraciones impersonales con infinitivo  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["impersonal", "infinitivo"]
pasos:
  - "Reconocer el uso de 'se' con infinitivo en oraciones impersonales."
  - "Verificar la concordancia del verbo con el contexto."
tipo: completar
enunciado: "Produza uma oração impessoal com 'se' + infinitivo recomendando o uso diário de protetor solar."
respuesta: "Se recomenda usar proteção solar diariamente."
respuestas_validas:
  - "Se recomenda usar proteção solar diariamente."
  - "Se recomenda usar proteção solar diariamente."
explicacion: "'Se' seguido de infinitivo se usa para oraciones impersonales que dan consejos o recomendaciones generales."
```

### 19 — Uso de "como" en oraciones comparativas  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["comparación", "como"]
pasos:
  - "Identificar el uso de 'como' para comparar aspectos."
  - "Verificar la concordancia con el verbo en presente o pasado."
tipo: mc
enunciado: "¿Cuál es la oración correcta que usa 'como' para comparar aspectos iguales?"
opciones_explicitas:
  - "Ela é tão talentosa como ele."
  - "Ela é mais talentosa que ele."
  - "Ela é tanto talentosa quanto ele."
respuesta: "Ela é tão talentosa como ele."
explicacion: "'Como' se usa para comparar aspectos iguales, mientras que 'mais...que' indica una superioridad."
```

### 20 — Uso de "se" en oraciones condicionales  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["condicional", "se"]
pasos:
  - "Reconocer el uso de 'se' en oraciones condicionales."
  - "Verificar la concordancia con el subjuntivo."
tipo: mc
enunciado: "¿Cuál es la oración correcta que usa 'se' + subjuntivo en una condición hipotética?"
opciones_explicitas:
  - "Se eu tivesse mais tempo, faria isso."
  - "Se eu tenho mais tempo, faço isso."
  - "Se eu tive mais tempo, fiz isso."
respuesta: "Se eu tivesse mais tempo, faria isso."
explicacion: "'Se' + subjuntivo se usa en oraciones condicionales para expresar hipótesis irreales o futuras."
```

### 21 — Uso de "em que" en oraciones interrogativas  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["interrogativa", "em que"]
pasos:
  - "Identificar el uso de 'em que' para preguntar sobre un lugar o situación."
  - "Verificar la concordancia con el verbo en presente."
tipo: mc
enunciado: "¿Cuál es la pregunta correcta usando 'em que' para preguntar sobre un día?"
opciones_explicitas:
  - "Em que dia você viaja?"
  - "Em qual dia você viaja?"
  - "Em que dia você viajou?"
respuesta: "Em que dia você viaja?"
explicacion: "'Em que' se usa para preguntar sobre un lugar o situación específica, mientras que 'em qual' es más formal."
```

### 22 — Uso de "tal" en oraciones con adjetivos  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["adjetivo", "tal"]
pasos:
  - "Identificar el uso de 'tal' para intensificar adjetivos."
  - "Verificar la concordancia con el sustantivo."
tipo: mc
enunciado: "¿Cuál es la oración correcta que usa 'tal' para intensificar una comparación?"
opciones_explicitas:
  - "Ela é tão inteligente quanto tal pessoa."
  - "Ela é tão inteligente como tal pessoa."
  - "Ela é tanto inteligente quanto tal pessoa."
respuesta: "Ela é tão inteligente quanto tal pessoa."
explicacion: "'Tal' se usa para referirse a una persona o cosa específica mencionada previamente en comparaciones."
```

### 23 — Uso de "se" en oraciones reflexivas con infinitivo  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["reflexivo", "infinitivo"]
pasos:
  - "Reconocer el uso de 'se' con infinitivo en oraciones reflexivas."
  - "Verificar la concordancia del verbo con el contexto."
tipo: completar
enunciado: "Produza uma oração reflexiva impessoal sobre a necessidade de se preparar antes de um exame."
respuesta: "Se deve se preparar antes do exame."
respuestas_validas:
  - "Se deve se preparar antes do exame."
  - "Se deve se preparar antes do exame."
explicacion: "'Se' seguido de infinitivo se usa en oraciones reflexivas para expresar acciones que deben realizarse sobre sí mismo."
```

### 24 — Uso de "como" en oraciones con ejemplos  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["ejemplo", "como"]
pasos:
  - "Identificar el uso de 'como' para dar ejemplos."
  - "Verificar la concordancia con el verbo en presente o infinitivo."
tipo: mc
enunciado: "¿Cuál es la oración correcta que usa 'como' para dar un ejemplo directo (sin subjuntivo)?"
opciones_explicitas:
  - "Ela fala como uma verdadeira profissional."
  - "Ela fala como se fosse uma verdadeira profissional."
  - "Ela fala como sendo uma verdadeira profissional."
respuesta: "Ela fala como uma verdadeira profissional."
explicacion: "'Como' seguido de un sustantivo expresa una comparación directa con un ejemplo específico."
```

### 25 — Uso de "se" en oraciones impersonales con gerundio  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "speaking-c1"
  nivel: "C1"
  tags: ["impersonal", "gerundio"]
pasos:
  - "Reconocer el uso de 'se' con gerundio en oraciones impersonales."
  - "Verificar la concordancia del verbo con el contexto."
tipo: completar
enunciado: "Produza uma oração impessoal com gerúndio sobre um projeto que está sendo discutido há horas."
respuesta: "Se está discutindo o projeto há horas."
respuestas_validas:
  - "Se está discutindo o projeto há horas."
  - "Se está discutindo o projeto há horas."
explicacion: "'Se' seguido de gerundio se usa en oraciones impersonales para indicar acciones que están ocurriendo actualmente."
```
