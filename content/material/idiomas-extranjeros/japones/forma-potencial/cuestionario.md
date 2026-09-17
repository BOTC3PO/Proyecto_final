# Idiomas — Japonés — forma-potencial (cuestionario)

> Corregido a partir del borrador en `../../../_borradores-gemma/idiomas-extranjeros/japones/forma-potencial/cuestionario_crudo.md`. 16 de los 25 bloques tenían el `enunciado:`/`tipo:` en un segundo fence YAML duplicado y separado del bloque principal (inflando el conteo del validador de 25 a 40 "bloques"), fusionados aquí en un único fence por bloque. Títulos que no correspondían al tipo de verbo evaluado (p. ej. "Verbo regular -ru" para 話す, que es godan en -su; "Verbo irregular -ku" para 解く y 備える, ambos regulares) se corrigieron. Contenido: dos bloques (書く, 飲む) aceptaban la forma llana sin conjugar (書く/飲む) como si fuera una respuesta potencial válida; un bloque usaba el verbo 出かける en el enunciado pero pedía la respuesta de un verbo distinto, 出る; dos bloques (選ぶ) daban como correcta la forma "選びられますか", un error real de sobregeneralización del patrón ichidan aplicado a un verbo godan (la forma correcta es 選べますか); un bloque de negación no daba contexto suficiente para inferir qué verbo se estaba negando; y las explicaciones de los bloques 2 y 4 afirmaban que 泳ぐ es "irregular" y que a 話す se le puede "quitar la る" (話す no termina en る). La teoria tenía errores relacionados (ver su propio header).

---

### 1 — 食べるの潜在形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["regular", "verbo"]
pasos:
  - "Identificar el verbo en la oración."
  - "Aplicar la regla para formar el potencial."
enunciado: "この料理は____。"
tipo: completar
respuestas_validas:
  - "食べられる"
  - "たべられる"
explicacion: "El japonés no tiene una 'forma potencial de adjetivos' (los adjetivos no se conjugan para expresar capacidad); aquí el verbo es '食べる' (ichidan), cuyo potencial se forma cambiando la 'る' final por 'られる': '食べられる' = 'se puede comer'."
```

### 2 — 泳ぐの潜在形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["regular", "verbo"]
pasos:
  - "Identificar el verbo en la oración."
  - "Aplicar la regla de los verbos godan (regulares) en 'ぐ'."
enunciado: "彼は____？"
opciones_explicitas:
  - "泳げる"
  - "泳ぐ"
  - "泳ぎます"
respuesta: "泳げる"
tipo: mc
explicacion: "'泳ぐ' es un verbo godan (regular), no irregular: sigue el patrón normal de los godan en 'ぐ' (cambia la vocal 'u' final a 'e' + る): 泳ぐ → 泳げる. Los únicos verbos irregulares en japonés son する y 来る."
```

### 3 — 読むの潜在形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["pregunta", "verbo"]
pasos:
  - "Identificar el verbo en la pregunta."
  - "Formar el potencial para responder correctamente."
enunciado: "この本を____？"
tipo: completar
respuestas_validas:
  - "読める"
  - "読めます"
explicacion: "El verbo godan '読む' (leer) forma su potencial cambiando 'む' por 'める': '読める' = 'poder leer'."
```

### 4 — 話すの潜在形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["regular", "verbo"]
pasos:
  - "Identificar el verbo en la oración."
  - "Aplicar la regla de los verbos godan (regulares) en 'す'."
enunciado: "彼女は中国語を____？"
opciones_explicitas:
  - "話せる"
  - "話す"
  - "話します"
respuesta: "話せる"
tipo: mc
explicacion: "'話す' es un verbo godan que termina en 'す', no en 'る', así que no se le puede quitar una 'る' que no tiene: su potencial se forma cambiando 'す' por 'せる': 話す → 話せる."
```

### 5 — 話すの潜在形（丁寧形）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["posibilidad", "habilidad"]
pasos:
  - "Identificar el verbo base en la oración."
  - "Aplicar la regla de formación del potencial para el verbo correspondiente."
enunciado: "彼女は日本語を____？"
tipo: completar
respuestas_validas:
  - "話せますか"
  - "話せる？"
explicacion: "El verbo base es 「話す」. La forma potencial para 「話す」es 「話せる」, que se usa en preguntas como '¿Puedes hablar?'."
```

### 6 — 見るの潜在形（ら抜き言葉）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["regular", "verbo"]
pasos:
  - "Identificar el verbo en la oración."
  - "Reconocer la forma coloquial (ら抜き) frente a la forma estándar."
enunciado: "この映画を____？"
opciones_explicitas:
  - "見れる"
  - "見る"
  - "見ます"
respuesta: "見れる"
tipo: mc
explicacion: "'見る' es un verbo ichidan; su potencial estándar es '見られる' (cambiando 'る' por 'られる'). '見れる' es la contracción coloquial muy extendida llamada 'ら抜き言葉' (que omite la 'ら'): aceptada en el habla informal, aunque en registro formal o escrito se prefiere '見られる'."
```

### 7 — 終わらせるの潜在形（期限つき）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["futuro", "posibilidad"]
pasos:
  - "Reconocer el sujeto y el contexto temporal (「明日までに」)."
  - "Elegir la forma potencial que exprese capacidad en un plazo."
enunciado: "明日までに____？"
opciones_explicitas:
  - "終わらせられますか"
  - "終わらせる"
  - "終わらせます"
respuesta: "終わらせられますか"
tipo: mc
explicacion: "La frase 「明日までに」indica un plazo, por lo que se usa la forma potencial del causativo 「終わらせる」→「終わらせられる」, como en '¿Puedes terminarlo antes de mañana?'"
```

### 8 — 出るの潜在形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["regular", "habilidad"]
pasos:
  - "Identificar el verbo base (「出る」)."
  - "Aplicar la regla específica para formar su potencial (verbo ichidan)."
enunciado: "今、教室を____？"
tipo: completar
respuestas_validas:
  - "出られますか"
  - "出られる？"
explicacion: "El verbo ichidan 「出る」(salir) tiene forma potencial 「出られる」, no debe confundirse con el verbo distinto 「出かける」(salir de paseo/a algún sitio). En preguntas, se usa como '¿Puedes salir?'"
```

### 9 — 書くの潜在形（仮定）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["hipótesis", "escritura"]
pasos:
  - "Identificar el verbo en la oración."
  - "Formar el potencial para expresar una hipótesis."
enunciado: "この文章を____？"
tipo: completar
respuestas_validas:
  - "書ける"
  - "書けます"
explicacion: "El verbo '書く' (escribir) se conjuga al potencial cambiando 'く' por 'ける': '書ける'. La forma llana '書く' (sin conjugar) no expresa capacidad y no es una respuesta válida aquí."
```

### 10 — 泳ぐの潜在形（疑問形）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["regular", "verbo"]
pasos:
  - "Reconocer el verbo base (「泳ぐ」)."
  - "Formar su potencial y usarlo en una pregunta, informal o formal."
enunciado: "あの人は____？"
tipo: completar
respuestas_validas:
  - "泳げる"
  - "泳げますか"
explicacion: "Para el verbo godan (regular) 「泳ぐ」, su forma potencial es 「泳げる」; en preguntas puede usarse en registro informal (泳げる？) o formal, añadiendo 「ます」(泳げますか)."
```

### 11 — 飲むの潜在形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["objeto", "habilidad"]
pasos:
  - "Identificar el verbo en la oración."
  - "Formar el potencial para completar la oración con objeto."
enunciado: "このジュースは____。"
tipo: completar
respuestas_validas:
  - "飲める"
  - "飲めます"
explicacion: "El verbo '飲む' (beber) se conjuga al potencial cambiando 'む' por 'める': '飲める'. La forma llana '飲む' no expresa capacidad y no es una respuesta válida aquí."
```

### 12 — するの潜在形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["irregular", "permiso"]
pasos:
  - "Identificar el verbo base (「する」)."
  - "Usar su forma potencial irregular (「できる」)."
enunciado: "彼はこれを____？"
tipo: completar
respuestas_validas:
  - "できますか"
  - "できる？"
explicacion: "El verbo 「する」tiene forma potencial irregular: 「できる」. En preguntas, se usa como '¿Puedes hacerlo?'"
```

### 13 — するの潜在形（否定）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["negación", "habilidad"]
pasos:
  - "Identificar el verbo en la oración."
  - "Formar el potencial negativo para completar la oración."
enunciado: "彼は忙しくて、今日は手伝いを____。"
tipo: completar
respuestas_validas:
  - "できない"
  - "できません"
explicacion: "El potencial negativo de 「する」es 「できない」(informal) / 「できません」(formal): '彼は忙しくて、今日は手伝いができない' = 'está ocupado, hoy no puede ayudar'."
```

### 14 — 選ぶの潜在形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["futuro", "limitación"]
pasos:
  - "Reconocer el verbo base (「選ぶ」)."
  - "Formar su potencial siguiendo el patrón godan (no ichidan)."
enunciado: "プレゼントを選ぶことができる？"
opciones_explicitas:
  - "選べますか"
  - "選びられますか"
  - "選びます"
respuesta: "選べますか"
tipo: mc
explicacion: "'選ぶ' es un verbo godan: su potencial se forma cambiando 'ぶ' por 'べる' → '選べる'. '選びられますか' es un error muy común (aplicar por error el patrón ichidan 'られる' a un verbo godan); '選びます' es la forma llana, sin matiz de capacidad."
```

### 15 — 来るの潜在形（疑問形）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["irregular", "movimiento"]
pasos:
  - "Identificar el verbo base (「来る」)."
  - "Usar su forma potencial irregular (「こられる」)."
enunciado: "彼は____？"
tipo: completar
respuestas_validas:
  - "来られる？"
  - "来られますか"
explicacion: "El verbo 「来る」tiene forma potencial irregular: 「来られる」(こられる). En preguntas, se usa como '¿Puede venir?'"
```

### 16 — 解くの潜在形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["mental", "habilidad"]
pasos:
  - "Reconocer el verbo base (「解く」)."
  - "Formar su potencial cambiando 'く' por 'ける' (verbo godan)."
enunciado: "この問題を____？"
tipo: completar
respuestas_validas:
  - "解けますか"
  - "解ける？"
explicacion: "El verbo godan 「解く」(resolver) tiene forma potencial 「解ける」. En preguntas formales, se usa con 「ます」."
```

### 17 — 書くの潜在形（断定）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["afirmación", "objeto"]
pasos:
  - "Identificar el verbo en la oración."
  - "Formar el potencial para completar la afirmación con objeto."
enunciado: "この文章を____。"
tipo: completar
respuestas_validas:
  - "書ける"
  - "書けます"
explicacion: "Como en el bloque 9, '書く' forma su potencial cambiando 'く' por 'ける': '書ける'. La forma llana '書く' no expresa capacidad."
```

### 18 — 備えるの潜在形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["preparación", "posibilidad"]
pasos:
  - "Identificar el verbo base (「備える」)."
  - "Usar su forma potencial regular (verbo ichidan)."
enunciado: "突然の雨に____？"
tipo: completar
respuestas_validas:
  - "備えられますか"
  - "備えられる？"
explicacion: "El verbo ichidan 「備える」forma su potencial cambiando 'る' por 'られる': 「備えられる」. En preguntas, se usa como '¿Puedes prepararte?'"
```

### 19 — 飲むの潜在形（丁寧形）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["consumo", "habilidad"]
pasos:
  - "Reconocer el verbo base (「飲む」)."
  - "Formar su potencial cambiando 'む' por 'める'."
enunciado: "この薬を____？"
tipo: completar
respuestas_validas:
  - "飲めますか"
  - "飲める？"
explicacion: "El verbo regular 「飲む」tiene forma potencial 「飲める」. En preguntas formales, se usa con 「ます」."
```

### 20 — するの潜在形（複数形）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["irregular", "habilidad"]
pasos:
  - "Identificar el verbo base (「する」)."
  - "Usar su forma potencial irregular (「できる」)."
enunciado: "彼はこれを____？"
tipo: completar
respuestas_validas:
  - "できますか"
  - "できる？"
explicacion: "El verbo 「する」tiene forma potencial irregular: 「できる」. En preguntas, se usa como '¿Puedes hacerlo?'"
```

### 21 — 選ぶの潜在形（複数形）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["hipótesis", "objeto"]
pasos:
  - "Reconocer el verbo base (「選ぶ」)."
  - "Formar su potencial siguiendo el patrón godan (no ichidan)."
enunciado: "プレゼントを選ぶことができる？"
opciones_explicitas:
  - "選べますか"
  - "選びられますか"
  - "選びます"
respuesta: "選べますか"
tipo: mc
explicacion: "Como en el bloque 14: '選ぶ' es godan y su potencial real es '選べる'; '選びられますか' aplica por error el patrón ichidan a un verbo godan."
```

### 22 — 来るの潜在形（複数形）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["irregular", "movimiento"]
pasos:
  - "Identificar el verbo base (「来る」)."
  - "Usar su forma potencial irregular (「こられる」)."
enunciado: "彼は____？"
tipo: completar
respuestas_validas:
  - "来られる？"
  - "来られますか"
explicacion: "Como en el bloque 15, 「来る」tiene forma potencial irregular 「来られる」(こられる)."
```

### 23 — 解くの潜在形（複数形）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["mental", "habilidad"]
pasos:
  - "Reconocer el verbo base (「解く」)."
  - "Formar su potencial con el patrón godan en 'く'."
enunciado: "この問題を____？"
tipo: completar
respuestas_validas:
  - "解けますか"
  - "解ける？"
explicacion: "Como en el bloque 16, el verbo godan 「解く」tiene forma potencial 「解ける」."
```

### 24 — 備えるの潜在形（複数形）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["preparación", "posibilidad"]
pasos:
  - "Identificar el verbo base (「備える」)."
  - "Usar su forma potencial regular (verbo ichidan)."
enunciado: "突然の雨に____？"
tipo: completar
respuestas_validas:
  - "備えられますか"
  - "備えられる？"
explicacion: "Como en el bloque 18, el verbo ichidan 「備える」tiene forma potencial 「備えられる」."
```

### 25 — 飲むの潜在形（複数形）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-potencial"
  nivel: "N4"
  tags: ["consumo", "habilidad"]
pasos:
  - "Reconocer el verbo base (「飲む」)."
  - "Formar su potencial cambiando 'む' por 'める'."
enunciado: "この薬を____？"
tipo: completar
respuestas_validas:
  - "飲めますか"
  - "飲める？"
explicacion: "Como en el bloque 19, el verbo regular 「飲む」tiene forma potencial 「飲める」."
```

