# Idiomas — Japonés — estructuras-clasicas-remanentes (cuestionario)

> Corregido a partir del borrador en `../../../_borradores-gemma/idiomas-extranjeros/japones/estructuras-clasicas-remanentes/cuestionario_crudo.md`. Los 25 bloques carecían por completo de `enunciado:` (0/25 OK en validación inicial) y varios puntos gramaticales estaban directamente fabricados/inexistentes en japonés clásico real: 「何故し」（pregunta inexistente, corregido a 何故ぞ), 「ためにし」（forma de propósito inventada, corregida a んがため), 「もする」（forma de conjetura inventada, corregida a らし), y 「しに」reutilizado erróneamente para "condición" y "tiempo enfatizado" (corregido a とも y 〜し時 respectivamente, formas clásicas reales). También se retiraron alternantes en katakana espurios en `respuestas_validas` (ズ, シ, シニ, ユエニ, テハ, キ) y entradas duplicadas idénticas. Se construyeron oraciones de ejemplo completas para los 25 bloques (el borrador no incluía ninguna), verificando la coherencia gramatical de cada una (p. ej. 如し como forma conclusiva no admite otro predicado detrás, a diferencia de 如く).

---

### 1 — 古典構文の認識
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "partículas", "historia"]
pasos:
  - "Identificar la partícula que completa correctamente el contexto histórico."
enunciado: "祭りは神社＿＿行われた。"
explicacion: "En el japonés clásico, la partícula 'に' se usaba para indicar el lugar donde ocurre un evento; este uso locativo sobrevive intacto en el japonés moderno ('祭りは神社に行われた' — 'el festival se celebró en el santuario')."
respuestas_validas:
  - "に"
tipo: completar
```

### 2 — 古典的な動詞の活用
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "verbos", "文学"]
pasos:
  - "Elegir la forma clásica del verbo que completa la oración correctamente."
enunciado: "これは、昔、旅人が＿＿道である。"
opciones_explicitas:
  - "行く"
  - "行きし"
  - "行くべき"
respuesta: "行きし"
explicacion: "'行きし' es la forma atributiva (連体形) clásica del verbo '行く' con el auxiliar de pasado 'き', usada para modificar un sustantivo: '旅人が行きし道' = 'el camino que el viajero recorrió [en el pasado]'."
tipo: mc
```

### 3 — 古典的な接続詞の使用
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "conectores", "filosofía"]
pasos:
  - "Seleccionar la conjunción que indica una consecuencia lógica en el estilo clásico."
enunciado: "雨が降った。＿＿、試合は中止になった。"
opciones_explicitas:
  - "ゆえに"
  - "そして"
  - "ただし"
respuesta: "ゆえに"
explicacion: "'ゆえに' ('por lo tanto') es una conjunción de origen clásico que todavía se usa en registro formal y escrito para indicar consecuencia lógica; 'そして' es un simple conector aditivo y 'ただし' introduce una salvedad, no una consecuencia."
tipo: mc
```

### 4 — 古典的な受動態の構文
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "voz pasiva", "historia"]
pasos:
  - "Completar el vacío con la forma clásica de la voz pasiva."
enunciado: "その出来事は、後世に記録＿＿た。"
explicacion: "'され' es la forma continuativa (連用形) del auxiliar pasivo clásico 'さる' (contracción de 'せらる'), que se combina con verbos en 'する'; '記録され' + 'た' = '記録された' ('fue registrado'). Este es el origen directo de la pasiva moderna en '〜される'."
respuestas_validas:
  - "され"
tipo: completar
```

### 5 — 古典的な疑問文の構造
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "preguntas", "literatura"]
pasos:
  - "Identificar la forma clásica de la pregunta que se ajusta al contexto."
enunciado: "＿＿、君は泣くか。"
opciones_explicitas:
  - "何故ですか？"
  - "何故ぞ"
  - "何故で？"
respuesta: "何故ぞ"
explicacion: "'何故ぞ' usa la partícula final enfática clásica 'ぞ' para formar una pregunta retórica ('¿por qué será?'); '何故ですか' es la forma interrogativa moderna y cortés, mientras que '何故で？' es una forma incompleta e incorrecta."
tipo: mc
```

### 6 — 古典的な否定の表現
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "negación", "filosofía"]
pasos:
  - "Completar el vacío con la forma clásica de negación."
enunciado: "彼はその言葉を信じ＿＿、去りゆきぬ。"
explicacion: "En el japonés clásico, el auxiliar 'ず' negaba las acciones en su forma conclusiva/adverbial; equivale al moderno '〜ない/〜ず'. La opción moderna 'ない' no encaja en este registro narrativo clásico."
respuestas_validas:
  - "ず"
tipo: completar
```

### 7 — 古典的な比喩の構文
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "figuras retóricas", "poesía"]
pasos:
  - "Elegir la expresión clásica que completa la comparación correctamente."
enunciado: "その光は、まるで太陽の＿＿。"
opciones_explicitas:
  - "如し"
  - "ように"
  - "のように"
respuesta: "如し"
explicacion: "'如し' (ごとし) es la forma conclusiva clásica que significa 'es como/semejante a', y puede cerrar la oración por sí sola tras 'の'. 'ように' y 'のように' son las formas adverbiales modernas, que necesitan un verbo detrás y no pueden terminar la oración."
tipo: mc
```

### 8 — 古典的な時間の表現
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "tiempo", "historia"]
pasos:
  - "Completar el vacío con la expresión clásica que señala una ocasión concreta."
enunciado: "先生にお会いした＿＿、その本をいただいた。"
explicacion: "'折に' ('en la ocasión de') proviene del sustantivo clásico '折（をり）' y se conserva en el japonés formal moderno para señalar un momento u ocasión concreta: 'お会いした折に' = 'en la ocasión en que tuve el honor de encontrarme con usted'."
respuestas_validas:
  - "折に"
tipo: completar
```

### 9 — 古典的な命令形の構文
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "voz imperativa", "filosofía"]
pasos:
  - "Identificar la forma clásica del imperativo que se ajusta al contexto."
enunciado: "敵が来たらば、直ちに戦の準備を＿＿。"
opciones_explicitas:
  - "せよ"
  - "する"
  - "すべき"
respuesta: "せよ"
explicacion: "'せよ' es la forma imperativa clásica del verbo 'する', todavía usada en japonés formal y escrito (órdenes, reglamentos, consignas: '注意せよ'). 'する' es la forma de diccionario y 'すべき' expresa obligación, no una orden directa."
tipo: mc
```

### 10 — 古典的な連体形の使用
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "adjetivos", "literatura"]
pasos:
  - "Completar el vacío con la forma atributiva clásica del adjetivo '美しい'."
enunciado: "＿＿花が、庭に咲き乱れていた。"
explicacion: "En japonés clásico, los adjetivos en 'い' formaban su atributivo (連体形) en '〜き' en lugar de '〜い': '美しき花' = 'flores hermosas'. Ese '〜き' es el mismo elemento que sobrevive fosilizado en palabras modernas como '大き さ' o en el propio '美しい' (< 美しき + 現代化)."
respuestas_validas:
  - "美しき"
tipo: completar
```

### 11 — 古典的な条件文の構造
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "condiciones", "filosofía"]
pasos:
  - "Elegir la forma condicional de registro literario, heredada del japonés clásico, frente a la coloquial."
enunciado: "「もし今すぐ出発すれば間に合うだろう」のように、条件を表す文語的な表現として正しいものはどれか。"
opciones_explicitas:
  - "もし〜たら"
  - "もし〜ば"
  - "もし〜し"
respuesta: "もし〜ば"
explicacion: "La partícula condicional '〜ば', unida a la forma izenkei del verbo, procede directamente del japonés clásico y se percibe como más literaria/formal que la coloquial '〜たら'. '〜し' no forma una estructura condicional."
tipo: mc
```

### 12 — 古典的な原因の表現
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "causas", "historia"]
pasos:
  - "Completar el vacío con la forma clásica de causalidad."
enunciado: "彼は病気の＿＿、旅行に行けなかった。"
explicacion: "'ゆえに', tras un sustantivo + 'の', indica la causa en registro clásico/formal: '病気のゆえに' = 'a causa de la enfermedad'. La opción moderna '〜のために' no encaja en este registro."
respuestas_validas:
  - "ゆえに"
tipo: completar
```

### 13 — 古典的な並列構文の使用
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "paralelismo", "poesía"]
pasos:
  - "Identificar la conjunción que indica paralelismo entre cláusulas en el estilo clásico."
enunciado: "彼は学者であり、＿＿、優れた詩人でもあった。"
opciones_explicitas:
  - "また"
  - "及び"
  - "および"
respuesta: "また"
explicacion: "'また' ('además, asimismo') enlaza dos cláusulas completas en paralelo. '及び'/'および' significan igualmente 'y', pero se usan para unir sustantivos o listas ('AおよびB'), no cláusulas predicativas completas."
tipo: mc
```

### 14 — 古典的な結果の表現
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "resultados", "filosofía"]
pasos:
  - "Completar el vacío con la forma clásica de condición repetida/resultado."
enunciado: "規則を破っ＿＿、罰を受けることになる。"
explicacion: "'〜ては' (de origen clásico) expresa que, cada vez que se cumple la condición, se sigue inevitablemente una consecuencia: 'romper las reglas conduce a ser castigado'. La forma moderna '〜た結果' describe un resultado puntual ya ocurrido, no esta relación general."
respuestas_validas:
  - "ては"
tipo: completar
```

### 15 — 古典的な目的の表現
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "propósito", "historia"]
pasos:
  - "Elegir la forma clásica que expresa propósito."
enunciado: "学問を修め＿＿、彼は都へ上った。"
opciones_explicitas:
  - "ために"
  - "んがため"
  - "ためし"
respuesta: "んがため"
explicacion: "'〜んがため（に）' es la construcción clásica de propósito ('con el fin de...'), formada con el auxiliar de voluntad 'ん' + 'がため'. '〜ために' es la forma moderna equivalente, y 'ためし' no es una forma gramatical válida."
tipo: mc
```

### 16 — 古典的な推量の表現
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "probabilidad", "literatura"]
pasos:
  - "Completar el vacío con el auxiliar clásico de conjetura basada en evidencia."
enunciado: "山の桜は、はや散り＿＿。"
explicacion: "'らし' es un auxiliar clásico de conjetura fundada en una evidencia observable (a diferencia de 'べし', que expresa certeza u obligación): 'もう散ったらしい' = 'parece que ya han caído [los pétalos]'. Es el antecedente directo del moderno '〜らしい'."
respuestas_validas:
  - "らし"
tipo: completar
```

### 17 — 古典的な比喩の構造
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "figuras retóricas", "poesía"]
pasos:
  - "Identificar la expresión clásica que completa la comparación correctamente."
enunciado: "彼の心は、まるで氷の＿＿。"
opciones_explicitas:
  - "如し"
  - "のように"
  - "ようにする"
respuesta: "如し"
explicacion: "Igual que en el bloque anterior, '如し' cierra comparaciones en estilo clásico ('氷の如し' = 'es como el hielo'). 'のように' exige un verbo posterior y 'ようにする' añade un matiz de intención ('procurar que...') ajeno a una simple comparación."
tipo: mc
```

### 18 — 古典的な連用形の使用
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "conjugaciones", "filosofía"]
pasos:
  - "Completar el vacío con la forma continuativa clásica que conecta dos acciones sin usar '〜て'."
enunciado: "彼は努力＿＿、ついに目標を達成した。"
explicacion: "En el registro literario/formal, la forma continuativa (連用形) de un verbo puede enlazar dos cláusulas sin necesidad de '〜て': 'する' → 'し' ('努力し、達成した'). Es un recurso de origen clásico que sigue vivo en la escritura formal moderna (titulares, actas, textos técnicos)."
respuestas_validas:
  - "し"
tipo: completar
```

### 19 — 古典的な否定の強調
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "negación intensa", "historia"]
pasos:
  - "Elegir la forma clásica de negación que sobrevive en expresiones fijas modernas."
enunciado: "彼は知ら＿＿間に、すっかり日が暮れていた。"
opciones_explicitas:
  - "ず"
  - "ぬ"
  - "ない"
respuesta: "ぬ"
explicacion: "'ぬ' es la forma atributiva (連体形) del auxiliar de negación clásico 'ず', usada para modificar un sustantivo como '間': '知らぬ間に' = 'sin darse cuenta'. 'ず' es su forma conclusiva/adverbial y no puede modificar directamente a '間' en esta posición; 'ない' es la forma moderna."
tipo: mc
```

### 20 — 古典的な条件の強調
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "condiciones intensas", "filosofía"]
pasos:
  - "Completar el vacío con la forma clásica concesiva que enfatiza 'incluso si'."
enunciado: "たとえ困難があろう＿＿、彼は決してあきらめなかった。"
explicacion: "'とも' es la partícula clásica concesiva que significa 'aunque/incluso si', y sobrevive en expresiones modernas como '何があろうとも' ('pase lo que pase'). Equivale a la moderna '〜ても', pero con un registro más elevado."
respuestas_validas:
  - "とも"
tipo: completar
```

### 21 — 古典的な時間の強調
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "tiempo intensivo", "literatura"]
pasos:
  - "Identificar la forma clásica que evoca un momento pasado concreto, típica del registro narrativo/nostálgico."
enunciado: "これは、若かり＿＿の思い出である。"
opciones_explicitas:
  - "〜し時"
  - "〜ときに"
  - "〜のとき"
respuesta: "〜し時"
explicacion: "'〜し時' (atributivo del auxiliar de pasado 'き' + '時') forma expresiones nostálgicas fijas como '若かりし時' = 'los tiempos en que era joven'. '〜ときに' y '〜のとき' son las formas neutras modernas, sin ese matiz literario."
tipo: mc
```

### 22 — 古典的な原因の強調
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "causas intensas", "historia"]
pasos:
  - "Completar el vacío con la forma clásica de causalidad."
enunciado: "規則を破りし＿＿、罰せられたり。"
explicacion: "De nuevo, 'ゆえに' introduce la causa en registro clásico narrativo: '規則を破りしゆえに、罰せられたり' = 'por haber roto las reglas, fue castigado'. La opción moderna '〜のために' rompería el registro arcaizante de la oración."
respuestas_validas:
  - "ゆえに"
tipo: completar
```

### 23 — 古典的な目的の強調
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "propósito intensivo", "filosofía"]
pasos:
  - "Elegir la forma clásica que expresa propósito con mayor énfasis retórico."
enunciado: "民を救わ＿＿、王は自ら兵を率いた。"
opciones_explicitas:
  - "ために"
  - "んがため"
  - "ためし"
respuesta: "んがため"
explicacion: "Como en el bloque 15, '〜んがため（に）' es la construcción clásica de propósito, con un matiz más solemne que la moderna '〜ために'. 'ためし' sigue sin ser una forma gramatical existente."
tipo: mc
```

### 24 — 古典的な結果の強調
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "resultados intensos", "historia"]
pasos:
  - "Completar el vacío con la forma clásica de condición repetida/resultado."
enunciado: "約束を破っ＿＿、信用を失うことになる。"
explicacion: "Igual que en el bloque 14, '〜ては' señala que, cada vez que ocurre la condición (romper una promesa), se sigue una consecuencia (perder la confianza de los demás)."
respuestas_validas:
  - "ては"
tipo: completar
```

### 25 — 古典的な比喩の強調
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estructuras-clasicas-remanentes"
  nivel: "N1"
  tags: ["clásico", "figuras retóricas intensas", "poesía"]
pasos:
  - "Identificar la expresión clásica que completa la comparación correctamente."
enunciado: "彼女の笑顔は、まるで花の＿＿。"
opciones_explicitas:
  - "如し"
  - "のようにする"
  - "ように"
respuesta: "如し"
explicacion: "'如し' vuelve a cerrar la comparación en registro clásico. 'ように' exige un verbo posterior que complete la oración, y 'のようにする' introduce un matiz de intención que no corresponde a una simple comparación descriptiva."
tipo: mc
```
