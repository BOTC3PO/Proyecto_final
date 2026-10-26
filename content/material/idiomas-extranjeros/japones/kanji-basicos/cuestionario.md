# Idiomas — Japonés — kanji-basicos (cuestionario)

> Corregido a partir del borrador en `../../../_borradores-gemma/idiomas-extranjeros/japones/kanji-basicos/cuestionario_crudo.md`. Los 25 bloques tenían la oración de ejemplo embebida dentro de `pasos:` (con "[ ]" como marcador de hueco) en vez de un `enunciado:` real, que faltaba por completo. Contenido: el bloque 1 daba "MOKKU" como lectura válida de 木 (no es una lectura real del kanji); el bloque 2 llamaba "on'yomi" a la lectura やま de 山, cuando en realidad やま es kun'yomi (さん es el on'yomi); el bloque 3 usaba el carácter chino simplificado 质 en vez del kanji japonés 質, y afirmaba que 水質 significa "agua dulce" cuando significa "calidad del agua" — sustituido por un bloque limpio sobre 水曜日; y cuatro bloques pedían "completar el nombre 田中[ ]" sin ningún criterio que determinara una respuesta única — reformulados como ejercicios de lectura (太郎 → たろう) con el nombre ya dado en el enunciado.

---

### 1 — 木という漢字
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["stroke-order", "vocabulario"]
pasos:
  - "Escribir el kanji que significa 'árbol'."
enunciado: "「árbol」は漢字で＿＿と書きます。"
tipo: completar
respuestas_validas:
  - "木"
explicacion: "El kanji '木' (き, ki) significa 'árbol'. Se escribe con cuatro trazos: horizontal, vertical, y dos diagonales."
```

### 2 — 読み方の選択
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["on'yomi", "kun'yomi"]
pasos:
  - "El kanji '山' aparece en el apellido '山田' (Yamada). ¿Cuál es su lectura aquí?"
enunciado: "「山田」はどう読みますか。"
opciones_explicitas:
  - "yamada"
  - "sanda"
  - "yōda"
  - "shanda"
respuesta: "yamada"
tipo: mc
explicacion: "En el apellido '山田' (Yamada), '山' se lee con su kun'yomi 'やま' (yama), no con su on'yomi 'さん' (san, como en 富士山 Fujisan). Los apellidos japoneses suelen usar kun'yomi."
```

### 3 — 水曜日
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["compound-words", "vocabulario"]
pasos:
  - "Completar el nombre del día de la semana '水[ ]日' (miércoles)."
enunciado: "「水＿＿日」は「みずようび」と読み、'miércoles'という意味です。＿＿に入る漢字は？"
tipo: completar
respuestas_validas:
  - "曜"
explicacion: "'水曜日' (すいようび, miércoles) se forma con 水 (agua, por el planeta Mercurio) + 曜 (día de la semana) + 日 (día). El kanji que falta es '曜'."
```

### 4 — 空欄補充（動詞）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["verbs", "context"]
pasos:
  - "Completar la oración con el sustantivo que significa 'comida/comer' (食事)."
enunciado: "彼は毎日＿＿をします。"
tipo: completar
respuestas_validas:
  - "食事"
explicacion: "'食事' (しょくじ, shokuji) es el sustantivo para 'comida/el acto de comer'; '食事をする' = 'comer/hacer una comida'. El verbo '食べる' se usa de forma distinta: '食べ物を食べる'."
```

### 5 — 空欄補充（名詞）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["nouns", "context"]
pasos:
  - "Completar la oración con el sustantivo que significa 'plato de comida' (料理)."
enunciado: "この＿＿は美味しいです。"
tipo: completar
respuestas_validas:
  - "料理"
explicacion: "'料理' (りょうり, ryōri) se refiere a un 'plato/platillo de comida' ya preparado; '食べ物' es 'comida' en un sentido más general (incluye ingredientes crudos)."
```

### 6 — 名前の読み方
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["kana", "lectura"]
pasos:
  - "Leer en hiragana el nombre de pila '太郎', que acompaña al apellido '田中'."
enunciado: "「田中太郎」の「太郎」はひらがなで＿＿と読みます。"
tipo: completar
respuestas_validas:
  - "たろう"
explicacion: "'太郎' (Tarō) es un nombre de pila japonés tradicional, muy común en generaciones anteriores; se lee 'たろう'."
```

### 7 — 空欄補充（接続）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["connectors", "context"]
pasos:
  - "Completar la oración con la nacionalidad 'estadounidense' (アメリカ人)."
enunciado: "彼は＿＿で、日本語を話します。"
tipo: completar
respuestas_validas:
  - "アメリカ人"
explicacion: "'アメリカ人' (Amerikajin) significa 'persona estadounidense'. La oración completa dice: 'él es estadounidense, y habla japonés'."
```

### 8 — 空欄補充（動詞活用）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["verb-conjugation", "context"]
pasos:
  - "Completar la oración con el sustantivo que significa 'estudio' (勉強)."
enunciado: "彼は毎日＿＿します。"
tipo: completar
respuestas_validas:
  - "勉強"
explicacion: "'勉強' (べんきょう, benkyō) es el sustantivo para 'estudio'; '勉強する' = 'estudiar'. El verbo '学ぶ' (manabu, 'aprender') es una palabra distinta, de registro más formal."
```

### 9 — 空欄補充（形容詞）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["adjectives", "context"]
pasos:
  - "Completar la oración con el sustantivo que significa 'plato de comida' (料理)."
enunciado: "この＿＿はとても美味しいです。"
tipo: completar
respuestas_validas:
  - "料理"
explicacion: "Como en el bloque 5: '料理' (りょうり) es un 'plato de comida'; '食べ物' sería 'comida' en general."
```

### 10 — 空欄補充（数詞）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["numbers", "context"]
pasos:
  - "Completar la oración con la edad '20' (二十)."
enunciado: "彼は＿＿歳です。"
tipo: completar
respuestas_validas:
  - "20"
  - "二十"
  - "にじゅう"
explicacion: "'20' se lee 'にじゅう' (nijū) y se escribe en kanji como '二十'; con 歳 (edad): '20歳' = 'veinte años'."
```

### 11 — 空欄補充（接続詞）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["connectors", "context"]
pasos:
  - "Completar la oración con la nacionalidad 'estadounidense' (アメリカ人)."
enunciado: "彼は＿＿、日本語を話します。"
tipo: completar
respuestas_validas:
  - "アメリカ人"
explicacion: "Como en el bloque 7: 'アメリカ人' (Amerikajin) significa 'persona estadounidense'."
```

### 12 — 空欄補充（名詞複数）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["nouns", "context"]
pasos:
  - "Completar la oración con el sustantivo que significa 'trabajo' (仕事)."
enunciado: "彼は＿＿をします。"
tipo: completar
respuestas_validas:
  - "仕事"
explicacion: "'仕事' (しごと, shigoto) es el término habitual para 'trabajo'. '職業' (shokugyō) se usa más para 'profesión/ocupación' en un sentido formal (p. ej. en formularios)."
```

### 13 — 名前の読み方（2）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["kana", "lectura"]
pasos:
  - "Leer en hiragana el nombre de pila '太郎', que acompaña al apellido '田中'."
enunciado: "「田中太郎」の「太郎」はひらがなで＿＿と読みます。"
tipo: completar
respuestas_validas:
  - "たろう"
explicacion: "Como en el bloque 6: '太郎' (Tarō) se lee 'たろう'."
```

### 14 — 空欄補充（動詞の使われ方）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["verbs", "context"]
pasos:
  - "Completar la oración con el sustantivo que significa 'comida/comer' (食事)."
enunciado: "彼は毎日＿＿をします。"
tipo: completar
respuestas_validas:
  - "食事"
explicacion: "Como en el bloque 4: '食事' (しょくじ) es el sustantivo para 'comida/el acto de comer'."
```

### 15 — 空欄補充（名詞の使われ方）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["nouns", "context"]
pasos:
  - "Completar la oración con el sustantivo que significa 'plato de comida' (料理)."
enunciado: "この＿＿は美味しいです。"
tipo: completar
respuestas_validas:
  - "料理"
explicacion: "Como en el bloque 5: '料理' (りょうり) es un 'plato de comida'."
```

### 16 — 名前の読み方（3）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["kana", "lectura"]
pasos:
  - "Leer en hiragana el nombre de pila '太郎', que acompaña al apellido '田中'."
enunciado: "「田中太郎」の「太郎」はひらがなで＿＿と読みます。"
tipo: completar
respuestas_validas:
  - "たろう"
explicacion: "Como en los bloques 6 y 13: '太郎' (Tarō) se lee 'たろう'."
```

### 17 — 空欄補充（接続詞の使われ方）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["connectors", "context"]
pasos:
  - "Completar la oración con la nacionalidad 'estadounidense' (アメリカ人)."
enunciado: "彼は＿＿、日本語を話します。"
tipo: completar
respuestas_validas:
  - "アメリカ人"
explicacion: "Como en los bloques 7 y 11: 'アメリカ人' significa 'persona estadounidense'."
```

### 18 — 空欄補充（数詞の使われ方）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["numbers", "context"]
pasos:
  - "Completar la oración con la edad '20' (二十)."
enunciado: "彼は＿＿歳です。"
tipo: completar
respuestas_validas:
  - "20"
  - "二十"
  - "にじゅう"
explicacion: "Como en el bloque 10: '20' se lee 'にじゅう' y se escribe '二十'."
```

### 19 — 空欄補充（形容詞の使われ方）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["adjectives", "context"]
pasos:
  - "Completar la oración con el sustantivo que significa 'plato de comida' (料理)."
enunciado: "この＿＿はとても美味しいです。"
tipo: completar
respuestas_validas:
  - "料理"
explicacion: "Como en los bloques 5, 9 y 15: '料理' (りょうり) es un 'plato de comida'."
```

### 20 — 空欄補充（動詞活用の使われ方）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["verb-conjugation", "context"]
pasos:
  - "Completar la oración con el sustantivo que significa 'estudio' (勉強)."
enunciado: "彼は毎日＿＿します。"
tipo: completar
respuestas_validas:
  - "勉強"
explicacion: "Como en el bloque 8: '勉強' (べんきょう) es el sustantivo para 'estudio'."
```

### 21 — 空欄補充（接続詞の使われ方2）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["connectors", "context"]
pasos:
  - "Completar la oración con la nacionalidad 'estadounidense' (アメリカ人)."
enunciado: "彼は＿＿、日本語を話します。"
tipo: completar
respuestas_validas:
  - "アメリカ人"
explicacion: "Como en los bloques 7, 11 y 17: 'アメリカ人' significa 'persona estadounidense'."
```

### 22 — 空欄補充（名詞複数の使われ方）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["nouns", "context"]
pasos:
  - "Completar la oración con el sustantivo que significa 'trabajo' (仕事)."
enunciado: "彼は＿＿をします。"
tipo: completar
respuestas_validas:
  - "仕事"
explicacion: "Como en el bloque 12: '仕事' (しごと) es el término habitual para 'trabajo'."
```

### 23 — 名前の読み方（4）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["kana", "lectura"]
pasos:
  - "Leer en hiragana el nombre de pila '太郎', que acompaña al apellido '田中'."
enunciado: "「田中太郎」の「太郎」はひらがなで＿＿と読みます。"
tipo: completar
respuestas_validas:
  - "たろう"
explicacion: "Como en los bloques 6, 13 y 16: '太郎' (Tarō) se lee 'たろう'."
```

### 24 — 空欄補充（動詞の使われ方2）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["verbs", "context"]
pasos:
  - "Completar la oración con el sustantivo que significa 'comida/comer' (食事)."
enunciado: "彼は毎日＿＿をします。"
tipo: completar
respuestas_validas:
  - "食事"
explicacion: "Como en los bloques 4 y 14: '食事' (しょくじ) es el sustantivo para 'comida/el acto de comer'."
```

### 25 — 空欄補充（名詞の使われ方2）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "kanji-basicos"
  nivel: "escritura"
  tags: ["nouns", "context"]
pasos:
  - "Completar la oración con el sustantivo que significa 'plato de comida' (料理)."
enunciado: "この＿＿は美味しいです。"
tipo: completar
respuestas_validas:
  - "料理"
explicacion: "Como en los bloques 5, 9, 15 y 19: '料理' (りょうり) es un 'plato de comida'."
```

