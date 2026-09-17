> **Nota de corrección:** Este cuestionario fue corregido a partir del borrador en
> `_borradores-gemma/idiomas-extranjeros/japones/writing-n1/cuestionario_crudo.md`
> mediante el script `mechanical_fix_idiomas.py`. Los 12 primeros bloques tenían la
> secuencia de escape inválida `\_` en vez del guion bajo simple `_` dentro de
> `enunciado:`; se corrigió en los 12. A los 12 bloques restantes (13-24) les faltaba
> el `enunciado:` por completo. Se corrigieron además dos errores de contenido:
> - **Bloque 6:** el enunciado tenía un fragmento corrupto al final ("。_") y una
>   estructura de comparación mal formada (el término de comparación "あの箱" estaba
>   fuera de lugar); se reconstruyó como "この箱はあの箱___。", donde la respuesta
>   "より大きい" completa la oración correctamente.
> - **7 bloques (15, 16, 19, 20, 21, 23, 24):** presentaban tres oraciones
>   gramaticalmente idénticas que sólo diferían en contenido arbitrario (p. ej. tres
>   causas de un retraso igualmente válidas, sin ninguna pista que determinara cuál
>   era "la correcta"). Se les añadió un enunciado que enmarca la pregunta como "según
>   lo relatado, ¿cuál es la descripción correcta?", dejando claro que se pide
>   identificar la versión ya establecida como cierta, no adivinar contenido al azar.

### 1 — 文末の表現  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n1"  
  nivel: "N1"  
  tags: ["文末", "丁寧語"]  
pasos:  
  - "選択肢から、適切な文末表現を選べ。"  
respuesta: "していただけますか"  
tipo: mc  
enunciado: "彼にこの本を読んでもらいたいんですが、___？"  
opciones_explicitas:
  - "読んでいただけますか"
  - "読んでくださいませんか"
  - "していただけますか"
  - "してくださいますか"
explicacion: "丁寧な依頼の際、「～ていただけますか」が適切。他の選択肢は敬語の使い方が不自然または文法的に誤っている。"  

```



### 2 — 時制と完了形  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n1"  
  nivel: "N1"  
  tags: ["過去", "完了"]  
pasos:  
  - "文脈に合った過去の動作を表す表現を選べ。"  
respuesta: "見ました"  
tipo: mc  
enunciado: "昨日、彼が___ことがありました。"  
opciones_explicitas:
  - "見ます"
  - "見ていた"
  - "見ました"
  - "見ていました"
explicacion: "「見ました」は過去の完了形で、一度だけ起こった動作を表す。他の選択肢は進行形や現在形で文脈に合わない。"  

```



### 3 — 条件仮定  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n1"  
  nivel: "N1"  
  tags: ["条件", "仮定"]  
pasos:  
  - "文脈に合った仮定の表現を選べ。"  
respuesta: "もしも雨が降ったら"  
tipo: mc  
enunciado: "___、キャンプを中止するかもしれません。"  
opciones_explicitas:
  - "もしも雨が降ったら"
  - "雨が降るとしたら"
  - "雨が降っても"
  - "雨が降ったなら"
explicacion: "「もしも～たら」は仮定の条件を表す標準的な表現。他の選択肢は文法的に不自然または意味が異なる。"  

```



### 4 — 経験と頻度  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n1"  
  nivel: "N1"  
  tags: ["経験", "頻度"]  
pasos:  
  - "頻度を表す表現を選べ。"  
respuesta: "よく行く"  
tipo: mc  
enunciado: "この店は___、いつも混んでいます。"  
opciones_explicitas:
  - "よく行く"
  - "行く"
  - "行ったことがある"
  - "行っている"
explicacion: "「よく行く」は頻度を表す。他の選択肢は動作の時制や頻度を示していない。"  

```



### 5 — 説明と理由  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n1"  
  nivel: "N1"  
  tags: ["説明", "理由"]  
pasos:  
  - "理由を表す表現を選べ。"  
respuesta: "なぜなら"  
tipo: mc  
enunciado: "___、彼はその提案に賛成しませんでした。"  
opciones_explicitas:
  - "なぜなら"
  - "しかし"
  - "そのため"
  - "それゆえ"
explicacion: "「なぜなら」は理由を導入する際の標準的表現。他の選択肢は接続詞として不適切。"  

```



### 6 — 比較と差異  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n1"  
  nivel: "N1"  
  tags: ["比較", "差異"]  
pasos:  
  - "差異を表す表現を選べ。"  
respuesta: "より大きい"  
tipo: mc  
enunciado: "この箱はあの箱___。"  
opciones_explicitas:
  - "より大きい"
  - "大きい"
  - "大きくても"
  - "大きくした"
explicacion: "「より～」は比較を表す。他の選択肢は比較の形が不完全または誤っている。"  

```



### 7 — 要求とお願い  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n1"  
  nivel: "N1"  
  tags: ["要求", "お願い"]  
pasos:  
  - "丁寧な依頼の表現を選べ。"  
respuesta: "していただけますか"  
tipo: mc  
enunciado: "この資料を___？"  
opciones_explicitas:
  - "見せてください"
  - "見てください"
  - "していただけますか"
  - "してください"
explicacion: "「～ていただけますか」は丁寧な依頼の標準的表現。他の選択肢は敬語として不自然。"  

```



### 8 — 経過と結果  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n1"  
  nivel: "N1"  
  tags: ["経過", "結果"]  
pasos:  
  - "経過を表す表現を選べ。"  
respuesta: "終わった後"  
tipo: mc  
enunciado: "___、彼はすぐに休みました。"  
opciones_explicitas:
  - "終わった後"
  - "終わる前"
  - "終わっている時"
  - "終わったら"
explicacion: "「～の後」は動作が終了した後の状況を表す。他の選択肢は経過のタイミングに誤りがある。"  

```



### 9 — 状態と変化  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n1"  
  nivel: "N1"  
  tags: ["状態", "変化"]  
pasos:  
  - "状態の変化を表す表現を選べ。"  
respuesta: "なっている"  
tipo: mc  
enunciado: "彼は___、とても疲れている。"  
opciones_explicitas:
  - "なっている"
  - "なった"
  - "なる"
  - "なりました"
explicacion: "「なっている」は現在の状態を表す。他の選択肢は時制が不適切。"  

```



### 10 — 説明と例示  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n1"  
  nivel: "N1"  
  tags: ["説明", "例"]  
pasos:  
  - "例を挙げる表現を選べ。"  
respuesta: "例えば"  
tipo: mc  
enunciado: "___、彼は大学で研究員をしていた。"  
opciones_explicitas:
  - "例えば"
  - "たとえば"
  - "それより"
  - "しかし"
explicacion: "「例えば」は例示の際の標準的表現。他の選択肢は接続詞として不適切。"  

```



### 11 — 経過と結果（再）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n1"  
  nivel: "N1"  
  tags: ["経過", "結果"]  
pasos:  
  - "結果を表す表現を選べ。"  
respuesta: "だから"  
tipo: mc  
enunciado: "___、彼はその提案に賛成した。"  
opciones_explicitas:
  - "だから"
  - "しかし"
  - "そのため"
  - "それゆえ"
explicacion: "「だから」は原因と結果を結びつける接続詞として適切。他の選択肢は関係性が不自然。"  

```



### 12 — 要求と義務  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "writing-n1"  
  nivel: "N1"  
  tags: ["要求", "義務"]  
pasos:  
  - "義務を表す表現を選べ。"  
respuesta: "しなければならない"  
tipo: mc  
enunciado: "この書類は___。"  
opciones_explicitas:
  - "しなければならない"
  - "する"
  - "している"
  - "した"
explicacion: "「～なければなりません」は義務を表す標準的表現。他の選択肢は時制や文法に誤りがある。"  

```



### 13 — 比較と差異（再）  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "writing-n1"
  nivel: "N1"
  tags: ["polite request", "te"]
pasos:
  - "Identificar el contexto de la oración y elegir la forma adecuada."
  - "Seleccionar la opción que completa la frase con un verbo en forma polite."
enunciado: "彼にこの本を___。"
opciones_explicitas:
  - "読んでください"
  - "読んでもらってください"
  - "読んでくださいました"
respuesta: "読んでもらってください"
explicacion: "La estructura ～てもらう es necesaria para solicitar algo indirectamente, ya que '彼に本を読んでもらいたい' implica pedirle a alguien que haga algo por otro."
```

### 14 — 経験と頻度（再）  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "writing-n1"
  nivel: "N1"
  tags: ["past experience", "tara"]
pasos:
  - "Reconocer el uso de ～たことがある para expresar experiencias pasadas."
  - "Elegir la opción que describe una experiencia realizable en el contexto."
enunciado: "彼の過去の経験について、正しい説明はどれですか？"
opciones_explicitas:
  - "海外に住んでいたことがあります"
  - "海外旅行に行ったことがあります"
  - "海外の映画を見たことがあります"
respuesta: "海外旅行に行ったことがあります"
explicacion: "La estructura ～たことがある se usa para experiencias específicas y reales, sin necesidad de repetir el sujeto en la oración."
```

### 15 — 説明と理由（再）  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "writing-n1"
  nivel: "N1"
  tags: ["comparison", "yori"]
pasos:
  - "Identificar el uso de ～よりも para comparar dos elementos."
  - "Elegir la opción que describe una relación lógica entre los objetos."
enunciado: "友人の話によると、この車とあの車の違いは何ですか？"
opciones_explicitas:
  - "この車はあの車よりも安いです"
  - "この車はあの車よりも速いです"
  - "この車はあの車よりも大きいです"
respuesta: "この車はあの車よりも安いです"
explicacion: "La comparación requiere que el adjetivo (安い) se alinee con la lógica de la oración y el sujeto principal."
```

### 16 — 経過と結果（再）  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "writing-n1"
  nivel: "N1"
  tags: ["purpose", "tame ni"]
pasos:
  - "Reconocer el uso de ～ために para expresar propósito."
  - "Seleccionar la opción que conecta lógicamente la causa y el efecto."
enunciado: "彼が忙しかった理由について、正しい説明はどれですか？"
opciones_explicitas:
  - "彼は準備するために時間を取っていました"
  - "彼は休むために時間を取っていました"
  - "彼は旅行するために時間を取っていました"
respuesta: "彼は準備するために時間を取っていました"
explicacion: "La estructura ～ために se usa para justificar una acción específica, en este caso, la preparación."
```

### 17 — 要求と義務（再）  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "writing-n1"
  nivel: "N1"
  tags: ["future result", "koto ni naru"]
pasos:
  - "Identificar el uso de ～ことになる para indicar un resultado futuro."
  - "Elegir la opción que describe una consecuencia inevitable."
enunciado: "彼の新しい役割について、正しい説明はどれですか？"
opciones_explicitas:
  - "彼はこのプロジェクトの責任者となることになりました"
  - "彼はこのプロジェクトをやめることがなりました"
  - "彼はこのプロジェクトに参加することになりました"
respuesta: "彼はこのプロジェクトの責任者となることになりました"
explicacion: "La estructura ～ことになる se usa para eventos que sucederán inevitablemente, aquí asignando un rol."
```

### 18 — 比較と差異（再）  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "writing-n1"
  nivel: "N1"
  tags: ["sequence", "te kara"]
pasos:
  - "Reconocer el uso de ～てから para indicar secuencia temporal."
  - "Seleccionar la opción que conecta acciones en orden lógico."
enunciado: "彼の夜の行動について、正しい順序を表す文はどれですか？"
opciones_explicitas:
  - "勉強してから寝ました"
  - "寝てから勉強しました"
  - "勉強しながら寝ました"
respuesta: "勉強してから寝ました"
explicacion: "La estructura ～てから indica que una acción ocurre después de otra, siguiendo el orden temporal."
```

### 19 — 経験と頻度（再）  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "writing-n1"
  nivel: "N1"
  tags: ["according to", "ni oki te"]
pasos:
  - "Identificar el uso de ～に応じて para describir ajustes basados en algo."
  - "Elegir la opción que describe una adaptación lógica al contexto."
enunciado: "その政策について、正しい説明はどれですか？"
opciones_explicitas:
  - "この政策は経済状況に応じて調整される必要があります"
  - "この政策は時代に応じて変える必要があります"
  - "この政策は人々の意見に応じて変わるべきです"
respuesta: "この政策は経済状況に応じて調整される必要があります"
explicacion: "La estructura ～に応じて se usa para acciones que dependen de un factor externo específico."
```

### 20 — 説明と理由（再）  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "writing-n1"
  nivel: "N1"
  tags: ["cause", "ga senin de"]
pasos:
  - "Reconocer el uso de ～が原因で para explicar una causa directa."
  - "Seleccionar la opción que describe un factor causal claro."
enunciado: "彼が遅刻した理由について、正しい説明はどれですか？"
opciones_explicitas:
  - "彼の遅刻は交通渋滞が原因でした"
  - "彼の遅刻は体調不良が原因でした"
  - "彼の遅刻は仕事が多いが原因でした"
respuesta: "彼の遅刻は交通渋滞が原因でした"
explicacion: "La estructura ～が原因で se usa para atribuir un evento a una causa específica y directa."
```

### 21 — 経過と結果（再）  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "writing-n1"
  nivel: "N1"
  tags: ["intention", "youni suru"]
pasos:
  - "Identificar el uso de ～ようにする para expresar intención."
  - "Elegir la opción que describe una acción con propósito claro."
enunciado: "彼が部下に指示した内容について、正しい説明はどれですか？"
opciones_explicitas:
  - "彼は部下たちに報告書を書くようにしました"
  - "彼は部下たちに会議を開くようにしました"
  - "彼は部下たちに資料を集めるようにしました"
respuesta: "彼は部下たちに報告書を書くようにしました"
explicacion: "La estructura ～ようにする se usa para instruir a alguien con un objetivo específico."
```

### 22 — 要求と義務（再）  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "writing-n1"
  nivel: "N1"
  tags: ["trend", "tsutsu aru"]
pasos:
  - "Reconocer el uso de ～つつある para describir una tendencia."
  - "Seleccionar la opción que describe un cambio progresivo."
enunciado: "その国の状況について、文法的に正しい文はどれですか？"
opciones_explicitas:
  - "この国では環境問題が深刻になるつつあります"
  - "この国では経済成長が止まっているつつあります"
  - "この国では若者の失業率が高くなるつつあります"
respuesta: "この国では環境問題が深刻になるつつあります"
explicacion: "La estructura ～つつある se usa para acciones que están en proceso de cambio, no completadas."
```

### 23 — 比較と差異（再）  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "writing-n1"
  nivel: "N1"
  tags: ["should", "beki da"]
pasos:
  - "Identificar el uso de ～べきだ para expresar un deber o recomendación."
  - "Elegir la opción que describe una responsabilidad clara."
enunciado: "彼の責任について、正しい説明はどれですか？"
opciones_explicitas:
  - "彼はその報告書を提出すべきです"
  - "彼はそのプロジェクトに参加すべきです"
  - "彼はその資料を見直すべきです"
respuesta: "彼はその報告書を提出すべきです"
explicacion: "La estructura ～べきだ se usa para expresar una acción que debe realizarse por obligación o consejo."
```

### 24 — 経験と頻度（再）  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "writing-n1"
  nivel: "N1"
  tags: ["reason", "ga riyuu de"]
pasos:
  - "Reconocer el uso de ～が理由で para explicar una causa lógica."
  - "Seleccionar la opción que describe un motivo claro y directo."
enunciado: "彼が辞任した理由について、正しい説明はどれですか？"
opciones_explicitas:
  - "彼の辞任は健康問題が理由でした"
  - "彼の辞任は仕事のストレスが理由でした"
  - "彼の辞任は会社の規則が理由でした"
respuesta: "彼の辞任は健康問題が理由でした"
explicacion: "La estructura ～が理由で se usa para justificar una decisión o evento basado en un motivo específico."
```

### 25 — 説明と理由（再）  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "writing-n1"
  nivel: "N1"
  tags: ["future result", "koto ni naru"]
pasos:
  - "Identificar el uso de ～ことになる para indicar un resultado inevitable."
  - "Elegir la opción que describe una consecuencia lógica del contexto."
opciones_explicitas:
  - "彼はこのプロジェクトの失敗が責任者になることになりました"
  - "彼はこのプロジェクトの成功が責任者になることになりました"
  - "彼はこのプロジェクトの進捗が責任者になることになりました"
respuesta: "彼はこのプロジェクトの失敗が責任者になることになりました"
explicacion: "La estructura ～ことになる se usa para eventos futuros que se derivan de una situación ya existente."
