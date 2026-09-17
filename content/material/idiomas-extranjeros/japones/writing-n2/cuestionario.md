> **Nota de corrección:** Este cuestionario fue corregido a partir del borrador en
> `_borradores-gemma/idiomas-extranjeros/japones/writing-n2/cuestionario_crudo.md`
> mediante el script `mechanical_fix_idiomas.py`. El bloque 23 original estaba
> truncado por completo (sólo un encabezado, sin contenido) y se descartó, quedando
> el cuestionario en 22 bloques. Se corrigieron además varios errores de contenido:
> - **3 bloques (15, 17, 21):** `respuestas_validas:` incluía una anotación entre
>   paréntesis pegada a la respuesta ("every day" (no aplicable), etc.), lo que
>   rompía el parseo; se quitaron esas entradas inválidas.
> - **8 bloques (2/22, 4/14/20/10, 8/18):** eran pares/tríos duplicados cuyas propias
>   `opciones_explicitas:` contenían una plantilla de oración con el hueco "__" aún
>   sin rellenar, mezclada con oraciones completas de otro tipo, y sin `enunciado:`.
>   Se reconstruyeron como bloques `completar` limpios (para los que probaban una
>   sola partícula: に, より) o se les añadió una metapregunta de opción múltiple
>   (para el que compara conectores causales completos: ために/から/ので), corrigiendo
>   además `respuesta:` para que coincida literalmente con una opción real.
> - **2 bloques (6, 16):** mismo problema de `enunciado:` faltante; se añadió una
>   metapregunta.
> - **Bloque 7:** `respuestas_validas:` tenía una anotación entre paréntesis de ancho
>   completo japonés （強調形） pegada a la respuesta, rompiendo el parseo; se quitó.
> - **Bloque 1:** describía un "libro" (本) como "delicioso" (美味しく), una
>   incoherencia semántica (los libros no se describen como sabrosos); se corrigió a
>   "comida" (料理).
> - **Bloque 3:** al enunciado le faltaba la partícula "の" antes del hueco
>   ("Nために" en vez de "Nのために", agramatical); se corrigió.

### 1 — 空欄を埋める（動詞の活用）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n2"  
  nivel: "N2"  
  tags: ["verbs", "potential"]  
pasos:  
  - "動詞の可能形を正しく選ぶ。"  
  - "文脈に応じた活用形で空欄を埋める。"  
respuestas_validas:  
  - "食べられる"  
  - "食べられます"  
tipo: completar  
enunciado: "この料理はとても美味しく____。"  
explicacion: "可能形「～られる」は、他者が動作を受けることを示す。文脈では「食べられる」（食べることができる）が適切で、「食べられます」は丁寧な形式でも正解となる。"
```



### 2 — 選択（原因・理由）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n2"  
  nivel: "N2"  
  tags: ["causative", "reason"]  
pasos:  
  - "文の意味に合った原因表現を選びなさい。"  
  - "「～ために」や「～から」の使い分けを確認する。"  
enunciado: "¿Cuál es la expresión más formal para indicar la razón de un retraso?"
opciones_explicitas:
  - "彼が遅れたために"
  - "彼が遅れたから"
  - "彼が遅れたので"
respuesta: "彼が遅れたために"  
explicacion: "「～ために」は原因・理由を強調し、文脈に最も適切な表現である。他の選択肢も可能だが、「ため」が正式で文法的に最適。"
```



### 3 — 空欄を埋める（目的）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n2"  
  nivel: "N2"  
  tags: ["particles", "purpose"]  
pasos:  
  - "目的を表す粒子を選択する。"  
  - "文脈に合った「ために」や「して」の使い分けを確認する。"  
respuestas_validas:  
  - "ために"  
  - "ため"  
tipo: completar  
enunciado: "この会議はすべての人の____開催されました。"  
explicacion: "「～のために」は目的を示す表現で、文脈に合致する。「ため」だけでも正解だが、「ために」が標準的な形。"
```



### 4 — 選択（推量）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n2"  
  nivel: "N2"  
  tags: ["inference", "conjunction"]  
pasos:  
  - "存在を示す助詞「に」を選びなさい。"  
  - "「で」（動作場所）や「へ」（方向）との違いを確認する。"  
enunciado: "彼は今、学校____いる。"
tipo: completar
respuestas_validas:
  - "に"
explicacion: "「～に」は場所の存在を示す。「で」は動作場所、「へ」は方向なので不適切。"
```



### 5 — 空欄を埋める（仮定）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n2"  
  nivel: "N2"  
  tags: ["conditional", "verbs"]  
pasos:  
  - "仮定の表現を正しく選ぶ。"  
  - "「～なら」や「～であれば」の使い分けを確認する。"  
respuestas_validas:  
  - "なら"  
  - "であれば"  
tipo: completar  
enunciado: "この本____、とても役に立つでしょう。"  
explicacion: "「～なら」は仮定の条件を表し、文脈に最も適切な表現である。「であれば」も可能だが、「なら」が自然な形。"
```



### 6 — 選択（否定）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n2"  
  nivel: "N2"  
  tags: ["negation", "verbs"]  
pasos:  
  - "文の否定形を正しく選ぶ。"  
  - "「～ない」や「～ぬ」の使い分けを確認する。"  
enunciado: "¿Cuál es la forma negativa correcta y natural en japonés contemporáneo?"
opciones_explicitas:
  - "彼は来ます。"
  - "彼は来ません。"
  - "彼は来ぬ。"
respuesta: "彼は来ません。"  
explicacion: "「～ません」は丁寧な否定形で、文脈に最も適切。「～ぬ」は古語で不自然。"
```



### 7 — 空欄を埋める（動作の受動）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n2"  
  nivel: "N2"  
  tags: ["passive", "verbs"]  
pasos:  
  - "受動態を正しく選ぶ。"  
  - "「～られる」や「～れる」の使い分けを確認する。"  
respuestas_validas:  
  - "される"  
tipo: completar  
enunciado: "この映画はとても評価____。"  
explicacion: "「～される」は受動態で、文脈に最も適切。「～れる」は可能形なので不適切。"
```



### 8 — 選択（比較）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n2"  
  nivel: "N2"  
  tags: ["comparison", "adjectives"]  
pasos:  
  - "比較の対象を示す助詞「より」を選びなさい。"  
  - "「ほど」（同等・否定形と共起）との違いを確認する。"  
enunciado: "この車はそれ____速い。"
tipo: completar
respuestas_validas:
  - "より"
explicacion: "「より」は比較の対象を示し、文脈に最も適切。「ほど」は主に否定形と共に使われ、この文脈には合わない。"
```



### 9 — 空欄を埋める（完了）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n2"  
  nivel: "N2"  
  tags: ["perfect", "verbs"]  
pasos:  
  - "完了形を正しく選ぶ。"  
  - "「～た」や「～った」の使い分けを確認する。"  
respuestas_validas:  
  - "した"  
  - "しました"  
tipo: completar  
enunciado: "この仕事を____、疲れました。"  
explicacion: "「～た」は完了形で、文脈に最も適切。「しました」も丁寧な形式だが、「した」が標準的な形。"
```



### 10 — 選択（推量の強さ）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n2"  
  nivel: "N2"  
  tags: ["inference", "adverbs"]  
pasos:  
  - "存在を示す助詞「に」を選びなさい。"  
  - "「で」（動作場所）や「へ」（方向）との違いを確認する。"  
enunciado: "彼は今、学校____いる。"
tipo: completar
respuestas_validas:
  - "に"
explicacion: "「～に」は場所の存在を示す。「で」は動作場所、「へ」は方向なので不適切。"
```



### 11 — 空欄を埋める（目的）  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "writing-n2"
  nivel: "N2"
  tags: ["particles", "te-form"]
pasos:
  - "Identificar el uso de la partícula 'して' para conectar acciones secuenciales."
explicacion: "La partícula 'して' se usa para unir dos acciones en secuencia. En este contexto, '予約をして' significa 'hacer una reserva'."
enunciado: "レストランで予約を____、来週の水曜日にします。"
tipo: completar
respuestas_validas:
  - "して"
  - "して"
```


### 12 — 選択（原因・理由）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n2"  
  nivel: "N2"  
  tags: ["causative", "reason"]  
pasos:  
  - "文の意味に合った原因表現を選びなさい。"  
  - "「～ために」や「～から」の使い分けを確認する。"  
enunciado: "¿Cuál es la expresión más formal para indicar la razón de un retraso?"
opciones_explicitas:
  - "彼が遅れたために"
  - "彼が遅れたから"
  - "彼が遅れたので"
respuesta: "彼が遅れたために"  
explicacion: "「～ために」は原因・理由を強調し、文脈に最も適切な表現である。他の選択肢も可能だが、「ため」が正式で文法的に最適。"
```



### 13 — 空欄を埋める（動詞の活用）  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "writing-n2"
  nivel: "N2"
  tags: ["past-tense", "kaeru"]
pasos:
  - "Reconocer el uso de '～た' para indicar acción completada en el pasado."
explicacion: "La forma '～た' indica una acción pasada. En este caso, '飲んだ' describe que la persona terminó de beber antes del momento actual."
enunciado: "彼は昨日、コーヒーを____飲みました。"
tipo: completar
respuestas_validas:
  - "飲んだ"
  - "飲んだけど"
```


### 14 — 選択（推量）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n2"  
  nivel: "N2"  
  tags: ["inference", "conjunction"]  
pasos:  
  - "存在を示す助詞「に」を選びなさい。"  
  - "「で」（動作場所）や「へ」（方向）との違いを確認する。"  
enunciado: "彼は今、学校____いる。"
tipo: completar
respuestas_validas:
  - "に"
explicacion: "「～に」は場所の存在を示す。「で」は動作場所、「へ」は方向なので不適切。"
```



### 15 — 空欄を埋める（仮定）  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "writing-n2"
  nivel: "N2"
  tags: ["conditional", "nakereba"]
pasos:
  - "Identificar la estructura '～なければなりません' para expresar obligación condicional."
explicacion: "'～なければなりません' indica una obligación que depende de una condición. Aquí, el sujeto debe tomar medicina diariamente."
enunciado: "この薬は____飲まなければなりません。"
tipo: completar
respuestas_validas:
  - "毎日"
```


### 16 — 選択（否定）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n2"  
  nivel: "N2"  
  tags: ["negation", "verbs"]  
pasos:  
  - "文の否定形を正しく選ぶ。"  
  - "「～ない」や「～ぬ」の使い分けを確認する。"  
enunciado: "¿Cuál es la forma negativa correcta y natural en japonés contemporáneo?"
opciones_explicitas:
  - "彼は来ます。"
  - "彼は来ません。"
  - "彼は来ぬ。"
respuesta: "彼は来ません。"  
explicacion: "「～ません」は丁寧な否定形で、文脈に最も適切。「～ぬ」は古語で不自然。"
```



### 17 — 空欄を埋める（動作の受動）  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "writing-n2"
  nivel: "N2"
  tags: ["adjectives", "te-form"]
pasos:
  - "Reconocer el uso de '～て' para conectar un estado con una acción posterior."
explicacion: "'～て' se usa para enlazar dos acciones o estados. Aquí, '忙しい' describe el estado actual después del verbo '取り組んでいます'."
enunciado: "彼は今、新しいプロジェクト____取り組んでいます。"
tipo: completar
respuestas_validas:
  - "に"
```


### 18 — 選択（比較）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n2"  
  nivel: "N2"  
  tags: ["comparison", "adjectives"]  
pasos:  
  - "比較の対象を示す助詞「より」を選びなさい。"  
  - "「ほど」（同等・否定形と共起）との違いを確認する。"  
enunciado: "この車はそれ____速い。"
tipo: completar
respuestas_validas:
  - "より"
explicacion: "「より」は比較の対象を示し、文脈に最も適切。「ほど」は主に否定形と共に使われ、この文脈には合わない。"
```



### 19 — 空欄を埋める（完了）  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "writing-n2"
  nivel: "N2"
  tags: ["past-tense", "particles"]
pasos:
  - "Seleccionar la partícula adecuada para indicar lugar de una acción pasada."
explicacion: "'～に' se usa para marcar el lugar donde ocurrió una acción. En este caso, '会議室に' indica el lugar del evento."
enunciado: "この会議は、すべての人____開催されました。"
tipo: mc
opciones_explicitas:
  - "に"
  - "で"
  - "を"
respuesta: "に"
```


### 20 — 選択（推量の強さ）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n2"  
  nivel: "N2"  
  tags: ["inference", "adverbs"]  
pasos:  
  - "存在を示す助詞「に」を選びなさい。"  
  - "「で」（動作場所）や「へ」（方向）との違いを確認する。"  
enunciado: "彼は今、学校____いる。"
tipo: completar
respuestas_validas:
  - "に"
explicacion: "「～に」は場所の存在を示す。「で」は動作場所、「へ」は方向なので不適切。"
```



### 21 — 空欄を埋める（目的）  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "writing-n2"
  nivel: "N2"
  tags: ["inferences", "deshi"]
pasos:
  - "Reconocer el uso de '～でしょう' para expresar una suposición basada en contexto."
explicacion: "'～でしょう' se usa cuando hay indicios que respaldan una suposición. Aquí, la acción de cerrar los ojos sugiere cansancio."
enunciado: "彼は今、目を____閉じています。"
tipo: completar
respuestas_validas:
  - "閉じて"
```

### 22 — 選択（原因・理由）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n2"  
  nivel: "N2"  
  tags: ["causative", "reason"]  
pasos:  
  - "文の意味に合った原因表現を選びなさい。"  
  - "「～ために」や「～から」の使い分けを確認する。"  
enunciado: "¿Cuál es la expresión más formal para indicar la razón de un retraso?"
opciones_explicitas:
  - "彼が遅れたために"
  - "彼が遅れたから"
  - "彼が遅れたので"
respuesta: "彼が遅れたために"  
explicacion: "「～ために」は原因・理由を強調し、文脈に最も適切な表現である。他の選択肢も可能だが、「ため」が正式で文法的に最適。"
```



### 23 — 空欄を埋める（動詞の活用）
