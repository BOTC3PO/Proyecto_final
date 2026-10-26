# Idiomas — Japonés — formas-verbales-diccionario-masu (cuestionario)

> Reconstruido a partir del borrador en `../../../_borradores-gemma/idiomas-extranjeros/japones/formas-verbales-diccionario-masu/cuestionario_crudo.md`. El crudo era inválido de raíz: `opciones_explicitas:` contenía un literal de lista al estilo Python metido como cadena (`"["やすい", "易い", "やす"]"`, YAML inválido) en los 25 bloques, sin ningún `enunciado:`. Más grave: el concepto pedagógico central estaba confundido en todo el archivo — trataba "forma pasada llana" (た形, p. ej. 食べた) y "forma cortés" (ます形) como si fueran la misma conversión ("convertir a diccionario con masu"), cuando son dos ejes distintos (tiempo y registro) que no se combinan así; y el primer bloque pretendía enseñar una inexistente "forma ます de los adjetivos" (los adjetivos-i no toman ます). Se reescribieron los 25 bloques desde cero como pares 辞書形↔ます形 (completar + mc) sobre 12 verbos N5 variados, más un bloque final de repaso en pasado (食べた↔食べました), todos con oraciones de ejemplo completas.

---

### 1 — 食べるの辞書形とます形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formas-verbales-diccionario-masu"
  nivel: "N5"
  tags: ["verbo", "masu-form"]
pasos:
  - "Identificar el verbo en su forma de diccionario (辞書形)."
  - "Convertirlo a la forma cortés ます形."
enunciado: "私は朝ご飯を＿＿。"
tipo: completar
respuestas_validas:
  - "食べます"
explicacion: "'食べる' es la forma de diccionario (辞書形, llana). Su forma cortés ます形 es '食べます': se usan en contextos distintos (辞書形 con amigos/familia, ます形 en situaciones formales), nunca se mezclan en la misma oración."
```

### 2 — Forma masu de 勉強する
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formas-verbales-diccionario-masu"
  nivel: "N5"
  tags: ["verbo", "masu-form"]
enunciado: "私は毎日日本語を＿＿。"
tipo: mc
opciones_explicitas:
  - "勉強します"
  - "勉強する"
  - "勉強し"
respuesta: "勉強します"
explicacion: "En estilo cortés el verbo termina en ます."
```

### 3 — 飲むの辞書形とます形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formas-verbales-diccionario-masu"
  nivel: "N5"
  tags: ["verbo", "masu-form"]
pasos:
  - "Identificar el verbo en su forma de diccionario (辞書形)."
  - "Convertirlo a la forma cortés ます形."
enunciado: "私は毎朝コーヒーを＿＿。"
tipo: completar
respuestas_validas:
  - "飲みます"
explicacion: "'飲む' es la forma de diccionario (辞書形, llana). Su forma cortés ます形 es '飲みます': se usan en contextos distintos (辞書形 con amigos/familia, ます形 en situaciones formales), nunca se mezclan en la misma oración."
```

### 4 — Forma masu de 書く
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formas-verbales-diccionario-masu"
  nivel: "N5"
  tags: ["verbo", "masu-form"]
enunciado: "友達に手紙を＿＿。"
tipo: mc
opciones_explicitas:
  - "書きます"
  - "書く"
  - "書き"
respuesta: "書きます"
explicacion: "書く→書きます."
```

### 5 — 行くの辞書形とます形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formas-verbales-diccionario-masu"
  nivel: "N5"
  tags: ["verbo", "masu-form"]
pasos:
  - "Identificar el verbo en su forma de diccionario (辞書形)."
  - "Convertirlo a la forma cortés ます形."
enunciado: "私は明日、学校へ＿＿。"
tipo: completar
respuestas_validas:
  - "行きます"
explicacion: "'行く' es la forma de diccionario (辞書形, llana). Su forma cortés ます形 es '行きます': se usan en contextos distintos (辞書形 con amigos/familia, ます形 en situaciones formales), nunca se mezclan en la misma oración."
```

### 6 — Forma masu de 寝る
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formas-verbales-diccionario-masu"
  nivel: "N5"
  tags: ["verbo", "masu-form"]
enunciado: "私は夜十一時に＿＿。(寝る)"
tipo: mc
opciones_explicitas:
  - "寝ます"
  - "寝る"
  - "寝"
respuesta: "寝ます"
explicacion: "Grupo 2: 寝る→寝ます."
```

### 7 — 読むの辞書形とます形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formas-verbales-diccionario-masu"
  nivel: "N5"
  tags: ["verbo", "masu-form"]
pasos:
  - "Identificar el verbo en su forma de diccionario (辞書形)."
  - "Convertirlo a la forma cortés ます形."
enunciado: "私は毎晩、本を＿＿。"
tipo: completar
respuestas_validas:
  - "読みます"
explicacion: "'読む' es la forma de diccionario (辞書形, llana). Su forma cortés ます形 es '読みます': se usan en contextos distintos (辞書形 con amigos/familia, ます形 en situaciones formales), nunca se mezclan en la misma oración."
```

### 8 — Forma masu de 散歩する
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formas-verbales-diccionario-masu"
  nivel: "N5"
  tags: ["verbo", "masu-form"]
enunciado: "毎週日曜日に公園を＿＿。(散歩する)"
tipo: mc
opciones_explicitas:
  - "散歩します"
  - "散歩する"
  - "散歩し"
respuesta: "散歩します"
explicacion: "Verbo con する: 散歩する→散歩します."
```

### 9 — 見るの辞書形とます形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formas-verbales-diccionario-masu"
  nivel: "N5"
  tags: ["verbo", "masu-form"]
pasos:
  - "Identificar el verbo en su forma de diccionario (辞書形)."
  - "Convertirlo a la forma cortés ます形."
enunciado: "私は週末、映画を＿＿。"
tipo: completar
respuestas_validas:
  - "見ます"
explicacion: "'見る' es la forma de diccionario (辞書形, llana). Su forma cortés ます形 es '見ます': se usan en contextos distintos (辞書形 con amigos/familia, ます形 en situaciones formales), nunca se mezclan en la misma oración."
```

### 10 — 書くの辞書形とます形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formas-verbales-diccionario-masu"
  nivel: "N5"
  tags: ["verbo", "masu-form"]
pasos:
  - "Identificar el verbo en su forma de diccionario (辞書形)."
  - "Convertirlo a la forma cortés ます形."
enunciado: "私は毎日、日記を＿＿。"
tipo: completar
respuestas_validas:
  - "書きます"
explicacion: "'書く' es la forma de diccionario (辞書形, llana). Su forma cortés ます形 es '書きます': se usan en contextos distintos (辞書形 con amigos/familia, ます形 en situaciones formales), nunca se mezclan en la misma oración."
```

### 11 — 買うの辞書形とます形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formas-verbales-diccionario-masu"
  nivel: "N5"
  tags: ["verbo", "masu-form"]
pasos:
  - "Identificar el verbo en su forma de diccionario (辞書形)."
  - "Convertirlo a la forma cortés ます形."
enunciado: "私はスーパーで野菜を＿＿。"
tipo: completar
respuestas_validas:
  - "買います"
explicacion: "'買う' es la forma de diccionario (辞書形, llana). Su forma cortés ます形 es '買います': se usan en contextos distintos (辞書形 con amigos/familia, ます形 en situaciones formales), nunca se mezclan en la misma oración."
```

### 12 — 待つの辞書形とます形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formas-verbales-diccionario-masu"
  nivel: "N5"
  tags: ["verbo", "masu-form"]
pasos:
  - "Identificar el verbo en su forma de diccionario (辞書形)."
  - "Convertirlo a la forma cortés ます形."
enunciado: "私は駅で友達を＿＿。"
tipo: completar
respuestas_validas:
  - "待ちます"
explicacion: "'待つ' es la forma de diccionario (辞書形, llana). Su forma cortés ます形 es '待ちます': se usan en contextos distintos (辞書形 con amigos/familia, ます形 en situaciones formales), nunca se mezclan en la misma oración."
```

### 13 — 話すの辞書形とます形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formas-verbales-diccionario-masu"
  nivel: "N5"
  tags: ["verbo", "masu-form"]
pasos:
  - "Identificar el verbo en su forma de diccionario (辞書形)."
  - "Convertirlo a la forma cortés ます形."
enunciado: "私は先生と日本語で＿＿。"
tipo: completar
respuestas_validas:
  - "話します"
explicacion: "'話す' es la forma de diccionario (辞書形, llana). Su forma cortés ます形 es '話します': se usan en contextos distintos (辞書形 con amigos/familia, ます形 en situaciones formales), nunca se mezclan en la misma oración."
```

### 14 — 聞くの辞書形とます形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formas-verbales-diccionario-masu"
  nivel: "N5"
  tags: ["verbo", "masu-form"]
pasos:
  - "Identificar el verbo en su forma de diccionario (辞書形)."
  - "Convertirlo a la forma cortés ます形."
enunciado: "私は毎朝、音楽を＿＿。"
tipo: completar
respuestas_validas:
  - "聞きます"
explicacion: "'聞く' es la forma de diccionario (辞書形, llana). Su forma cortés ます形 es '聞きます': se usan en contextos distintos (辞書形 con amigos/familia, ます形 en situaciones formales), nunca se mezclan en la misma oración."
```

### 15 — 来るの辞書形とます形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formas-verbales-diccionario-masu"
  nivel: "N5"
  tags: ["verbo", "masu-form"]
pasos:
  - "Identificar el verbo en su forma de diccionario (辞書形)."
  - "Convertirlo a la forma cortés ます形."
enunciado: "彼は毎週、私の家に＿＿。"
tipo: completar
respuestas_validas:
  - "来ます"
explicacion: "'来る' es la forma de diccionario (辞書形, llana). Su forma cortés ます形 es '来ます': se usan en contextos distintos (辞書形 con amigos/familia, ます形 en situaciones formales), nunca se mezclan en la misma oración."
```

### 16 — するの辞書形とます形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formas-verbales-diccionario-masu"
  nivel: "N5"
  tags: ["verbo", "masu-form"]
pasos:
  - "Identificar el verbo en su forma de diccionario (辞書形)."
  - "Convertirlo a la forma cortés ます形."
enunciado: "私は毎日、勉強を＿＿。"
tipo: completar
respuestas_validas:
  - "します"
explicacion: "'する' es la forma de diccionario (辞書形, llana). Su forma cortés ます形 es 'します': se usan en contextos distintos (辞書形 con amigos/familia, ます形 en situaciones formales), nunca se mezclan en la misma oración."
```

### 17 — 過去形の辞書形とます形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formas-verbales-diccionario-masu"
  nivel: "N5"
  tags: ["verbo", "masu-form", "pasado"]
pasos:
  - "Identificar el verbo en su forma pasada llana (た形)."
  - "Convertirlo a su forma cortés pasada ました."
enunciado: "きのう、私はレストランでご飯を＿＿。"
tipo: completar
respuestas_validas:
  - "食べました"
explicacion: "'食べた' es la forma pasada llana (た形) de '食べる'; su equivalente cortés es '食べました'. No deben mezclarse: '食べた' se usa en registro informal, '食べました' en registro cortés — son la versión pasada del mismo par 辞書形/ます形 visto en los bloques anteriores."
```

### 18 — Forma masu de 行く
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formas-verbales-diccionario-masu"
  nivel: "N5"
  tags: ["verbo", "masu-form"]
enunciado: "私は毎日、電車で学校へ＿＿。(行く)"
tipo: mc
opciones_explicitas:
  - "行きます"
  - "行く"
  - "行き"
respuesta: "行きます"
explicacion: "行く→行きます."
```

### 19 — Forma masu de 食べる
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formas-verbales-diccionario-masu"
  nivel: "N5"
  tags: ["verbo", "masu-form"]
enunciado: "友達と一緒に昼ご飯を＿＿。(食べる)"
tipo: mc
opciones_explicitas:
  - "食べます"
  - "食べる"
  - "食べ"
respuesta: "食べます"
explicacion: "Grupo 2: 食べる→食べます."
```

### 20 — Forma masu de 作る
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formas-verbales-diccionario-masu"
  nivel: "N5"
  tags: ["verbo", "masu-form"]
enunciado: "母は毎晩、料理を＿＿。(作る)"
tipo: mc
opciones_explicitas:
  - "作ります"
  - "作る"
  - "作り"
respuesta: "作ります"
explicacion: "作る→作ります."
```
