> **Nota de corrección:** Este cuestionario fue corregido a partir del borrador en
> `_borradores-gemma/idiomas-extranjeros/portugues-br/listening-c1/cuestionario_crudo.md`.
> El borrador original planteaba preguntas de "escucha" sin ningún audio ni texto real
> al que referirse, y a 24 de los 25 bloques les faltaba por completo el campo
> `enunciado:`. Se corrigió así:
> - **Bloque 2** ("Reconocer variaciones fonéticas"): pedía distinguir la pronunciación
>   de palabras (célula/século/chegar/coroa) sin ningún audio disponible, algo
>   imposible de responder por texto. Se rediseñó como pregunta de vocabulario
>   (identificar qué palabra significa "siglo"), quedando respondible con el
>   texto disponible.
> - **13 bloques de tipo `mc`** (1, 4, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25): se
>   les añadió un enunciado de tipo metapregunta que referencia el contexto ya
>   descrito en `pasos:` (diálogo, debate, discurso, anuncio, etc.), ya que no existe
>   transcripción real a la cual apuntar directamente.
> - **11 bloques de tipo `completar`** (3, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24): sólo
>   tenían una palabra suelta como respuesta, sin ninguna oración con hueco. Se
>   construyó una oración completa en portugués para cada uno.
> - **Bloque 12**: la respuesta estaba en español ("estudiar") en vez de portugués
>   ("estudar"), un error de mezcla de idiomas; se corrigió a la forma portuguesa
>   correcta.

### 1 — Identificar inferencia de opinión  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["inferência", "opinião implícita"]
pasos:
  - "Escuche el diálogo entre dos amigos analizando un documental."
  - "Identifique la frase que expresa una opinión personal del hablante."
enunciado: "En el diálogo sobre el documental, ¿cuál es la frase que expresa una opinión personal?"
opciones_explicitas:
  - "O documental é extremamente informativo, mas eu não concordo com a conclusão."
  - "A apresentação do documental foi clara e bem estruturada."
  - "Eles mencionaram estudos recentes que corroboram as teorias do filme."
  - "Há uma grande quantidade de dados estatísticos no primeiro capítulo."
respuesta: "O documental é extremamente informativo, mas eu não concordo com a conclusão."
```


### 2 — Reconocer variaciones fonéticas  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["pronúncia", "similaridade sonora"]
pasos:
  - "Identifique la palabra portuguesa correcta según su significado."
enunciado: "¿Cuál es la palabra portuguesa que significa 'siglo'?"
opciones_explicitas:
  - "célula"
  - "século"
  - "chegar"
  - "coroa"
respuesta: "século"
```


### 3 — Completar oración con verbo en gerundio  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["gerúndio", "contexto verbal"]
pasos:
  - "Escuche la descripción de una escena."
  - "Complete la oración con el verbo en gerundio que expresa la acción principal."
enunciado: "O menino atravessou a rua ___."
respuesta: "correndo"
respuestas_validas:
  - "Correndo"
  - "correndo"
```


### 4 — Identificar propósito del hablante  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["propósito", "análisis de intención"]
pasos:
  - "Escuche el fragmento de un debate político."
  - "Determine cuál es la intención principal del orador."
enunciado: "En el fragmento del debate político, ¿cuál es la intención principal del orador?"
opciones_explicitas:
  - "Explicar las consecuencias económicas de una política."
  - "Solicitar apoyo para un candidato específico."
  - "Critique el sistema educativo actual."
  - "Anunciar una campaña electoral."
respuesta: "Explicar las consecuencias económicas de una política."
```


### 5 — Identificar tiempo verbal en narración  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["tiempo verbal", "narración"]
pasos:
  - "Escuche la historia de un viaje."
  - "Identifique el verbo que indica una acción pasada irrelevante para el presente."
enunciado: "En la historia del viaje, ¿cuál es la oración que usa un tiempo verbal de pasado irrelevante para el presente?"
opciones_explicitas:
  - "Vi un amanecer espectacular en las montañas."
  - "Voy a visitar ese lugar pronto."
  - "Estuve allí hace dos años."
  - "He estado pensando en ir otra vez."
respuesta: "Vi un amanecer espectacular en las montañas."
```


### 6 — Completar oración con preposición de tiempo  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["preposiciones", "tiempo"]
pasos:
  - "Escuche la descripción de un evento futuro."
  - "Complete el espacio con la preposición correcta."
enunciado: "Vamos nos encontrar ___ do almoço."
respuesta: "depois"
respuestas_validas:
  - "Depois"
  - "depois"
```


### 7 — Reconocer marcadores de transición  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["cohesión", "transiciones"]
pasos:
  - "Escuche el discurso de un profesor."
  - "Identifique la palabra que introduce una idea contraria a lo anterior."
enunciado: "En el discurso del profesor, ¿cuál es la expresión que introduce una idea contraria a lo anterior?"
opciones_explicitas:
  - "No obstante, es importante mencionar..."
  - "Por otro lado, algunos autores argumentan que..."
  - "En consecuencia, el resultado fue..."
  - "Además, se puede observar que..."
respuesta: "No obstante, es importante mencionar..."
```


### 8 — Completar oración con verbo en subjuntivo  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["subjuntivo", "condición"]
pasos:
  - "Escuche la conversación sobre un plan futuro."
  - "Complete el espacio con el verbo en subjuntivo que expresa una condición hipotética."
enunciado: "Talvez ele ___ aprovado no exame."
respuesta: "seja"
respuestas_validas:
  - "Seja"
  - "seja"
```


### 9 — Identificar propósito de un anuncio  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["propósito", "anuncio"]
pasos:
  - "Escuche el audio de una campaña publicitaria."
  - "Determine cuál es el objetivo principal del anuncio."
enunciado: "En el anuncio publicitario, ¿cuál es el objetivo principal?"
opciones_explicitas:
  - "Incentivar la compra de un producto ecológico."
  - "Explicar las características técnicas de un dispositivo."
  - "Promover un evento cultural gratuito."
  - "Informar sobre una nueva ley ambiental."
respuesta: "Incentivar la compra de un producto ecológico."
```


### 10 — Completar oración con conectivo causal  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["conectivos", "causalidad"]
pasos:
  - "Escuche la explicación de un fenómeno natural."
  - "Complete el espacio con el conectivo que indica causa."
enunciado: "Estava chovendo muito, ___ cancelamos o passeio."
respuesta: "por isso"
respuestas_validas:
  - "Por isso"
  - "por isso"
```


### 11 — Identificar tipo de discurso  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["tipo de discurso", "análisis"]
pasos:
  - "Escuche un fragmento de un debate académico."
  - "Clasifique el tipo de discurso según el tono y contenido."
enunciado: "¿Cómo se clasifica el fragmento del debate académico según su tono y contenido?"
opciones_explicitas:
  - "Discurso argumentativo sobre políticas públicas."
  - "Relato personal de una experiencia laboral."
  - "Explicación científica de un fenómeno astronómico."
  - "Reseña crítica de un libro reciente."
respuesta: "Discurso argumentativo sobre políticas públicas."
```


### 12 — Completar oración con verbo en infinitivo  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["infinitivo", "propósito"]
pasos:
  - "Escuche la descripción de una rutina diaria."
  - "Complete el espacio con el verbo en infinitivo que expresa un objetivo."
enunciado: "Os alunos decidiram ___ mais sobre o assunto."
respuesta: "estudar"
respuestas_validas:
  - "Estudar"
  - "estudar"
```


### 13 — Identificar nivel de formalidad  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["formalidad", "registro"]
pasos:
  - "Escuche la conversación entre un cliente y un vendedor."
  - "Determine el tipo de registro lingüístico utilizado."
enunciado: "En la conversación entre cliente y vendedor, ¿qué tipo de registro lingüístico se utiliza?"
opciones_explicitas:
  - "Registro informal con uso frecuente de contracciones."
  - "Lenguaje técnico especializado en un contexto académico."
  - "Discurso formal en una conferencia internacional."
  - "Diálogo coloquial entre amigos."
respuesta: "Registro informal con uso frecuente de contracciones."
```


### 14 — Completar oración con preposición de lugar  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["preposiciones", "lugar"]
pasos:
  - "Escuche la descripción de un viaje en tren."
  - "Complete el espacio con la preposición que indica el lugar destino."
enunciado: "O trem vai ___ a estação central."
respuesta: "até"
respuestas_validas:
  - "Até"
  - "até"
```


### 15 — Identificar relación entre oraciones  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["relación lógica", "conectores"]
pasos:
  - "Escuche el fragmento de un discurso político."
  - "Determine la relación entre las oraciones conectadas por 'porém'."
enunciado: "En el discurso político, ¿qué relación expresa el conector 'porém' entre las oraciones?"
opciones_explicitas:
  - "Contraste entre dos puntos de vista."
  - "Consecuencia de una decisión tomada."
  - "Explicación de un fenómeno natural."
  - "Confirmación de un hecho ya mencionado."
respuesta: "Contraste entre dos puntos de vista."
```


### 16 — Completar oración con verbo en condicional  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["condicional", "hipótesis"]
pasos:
  - "Escuche la conversación sobre una posibilidad futura."
  - "Complete el espacio con el verbo en condicional que expresa una hipótesis."
enunciado: "Se eu tivesse mais tempo, ___ mais fácil terminar o projeto."
respuesta: "seria"
respuestas_validas:
  - "Seria"
  - "seria"
```


### 17 — Identificar tema principal de un audio  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["tema principal", "análisis"]
pasos:
  - "Escuche el resumen de un artículo científico."
  - "Identifique el tema central del contenido."
enunciado: "¿Cuál es el tema central del resumen del artículo científico?"
opciones_explicitas:
  - "Impacto del cambio climático en la biodiversidad marina."
  - "Estudio sobre las causas del desempleo juvenil."
  - "Análisis histórico de los movimientos sociales brasileños."
  - "Revisión crítica de una novela contemporánea."
respuesta: "Impacto del cambio climático en la biodiversidad marina."
```


### 18 — Completar oración con preposición de pertenencia  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["preposiciones", "pertenencia"]
pasos:
  - "Escuche la descripción de una colección de arte."
  - "Complete el espacio con la preposición que indica pertenencia."
enunciado: "Este quadro é ___ um artista famoso."
respuesta: "de"
respuestas_validas:
  - "De"
  - "de"
```


### 19 — Identificar tono del hablante  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["tono", "emoción"]
pasos:
  - "Escuche el discurso de un orador en una ceremonia."
  - "Determine el tono emocional del hablante."
enunciado: "En el discurso de la ceremonia, ¿cuál es el tono emocional del hablante?"
opciones_explicitas:
  - "Tono inspirador y motivador."
  - "Tono sarcástico y despectivo."
  - "Tono informativo y neutral."
  - "Tono de frustración y decepción."
respuesta: "Tono inspirador y motivador."
```


### 20 — Completar oración con verbo en futuro  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["futuro", "pronunciación"]
pasos:
  - "Escuche la predicción de un científico."
  - "Complete el espacio con el verbo en futuro que expresa una certeza."
enunciado: "O aquecimento global ___ um dos maiores desafios do século."
respuesta: "será"
respuestas_validas:
  - "Será"
  - "será"
```


### 21 — Identificar uso de metáfora  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["figuras retóricas", "metáfora"]
pasos:
  - "Escuche el discurso de un poeta."
  - "Identifique la metáfora utilizada para expresar una idea abstracta."
enunciado: "En el discurso del poeta, ¿cuál es la metáfora utilizada para expresar una idea abstracta?"
opciones_explicitas:
  - "La vida es un mar de incertezas."
  - "El tiempo corre como un río sin orillas."
  - "Sus palabras son agujas que atraviesan el corazón."
  - "Ella es la luz en medio de la oscuridad."
respuesta: "La vida es un mar de incertezas."
```


### 22 — Completar oración con verbo en infinitivo  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["infinitivo", "propósito"]
pasos:
  - "Escuche la conversación sobre un proyecto escolar."
  - "Complete el espacio con el verbo en infinitivo que expresa una intención."
enunciado: "Os alunos decidiram ___ o tema mais a fundo."
respuesta: "investigar"
respuestas_validas:
  - "Investigar"
  - "investigar"
```


### 23 — Identificar estilo retórico  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["estilo", "retórica"]
pasos:
  - "Escuche el discurso de un político."
  - "Determine el estilo retórico utilizado para persuadir al público."
enunciado: "¿Qué estilo retórico utiliza el político para persuadir al público?"
opciones_explicitas:
  - "Uso de metáforas y exageraciones emocionales."
  - "Lenguaje técnico con datos estadísticos."
  - "Explicación clara y objetiva de un fenómeno social."
  - "Diálogo coloquial entre ciudadanos comunes."
respuesta: "Uso de metáforas y exageraciones emocionales."
```


### 24 — Completar oración con preposición de causa  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["preposiciones", "causa"]
pasos:
  - "Escuche la explicación de un accidente."
  - "Complete el espacio con la preposición que indica causa."
enunciado: "O voo foi cancelado ___ causa do mau tempo."
respuesta: "por"
respuestas_validas:
  - "Por"
  - "por"
```


### 25 — Identificar propósito del discurso  
```yaml
metadata:
  materia: "idiomas-extranjeros/portugues-br"
  tema: "listening-c1"
  nivel: "C1"
  tags: ["propósito", "discurso"]
pasos:
  - "Escuche el discurso de un profesor en una conferencia."
  - "Determine cuál es el propósito principal del hablante."
enunciado: "En la conferencia, ¿cuál es el propósito principal del profesor?"
opciones_explicitas:
  - "Presentar los resultados de una investigación reciente."
  - "Explicar la evolución histórica de un movimiento social."
  - "Incentivar a los estudiantes a participar en un debate."
  - "Promover la lectura de una novela contemporánea."
respuesta: "Presentar los resultados de una investigación reciente."
```