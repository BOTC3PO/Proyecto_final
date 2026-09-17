> **Nota de corrección:** Este cuestionario fue corregido a partir del borrador en
> `_borradores-gemma/idiomas-extranjeros/japones/reading-n3/cuestionario_crudo.md`
> mediante el script `mechanical_fix_idiomas.py`. Se quitaron anotaciones
> parentéticas de ancho completo japonés （大文字）（誤用）que aparecían pegadas a
> algunas respuestas en `respuestas_validas:`, rompiendo el parseo y, en el caso de
> "（誤用）" ("uso incorrecto"), habrían aceptado explícitamente una forma marcada
> como errónea por el propio crudo. A 10 bloques les faltaba el `enunciado:`; como
> cada `explicacion:` ya incluía una oración de ejemplo citada, se extrajo esa misma
> oración como enunciado en vez de redactar una nueva. Se corrigieron además varios
> errores de contenido:
> - **Bloque 10:** la respuesta "したら" no coincidía con ninguna de sus propias
>   opciones (que tenían "いたら", de otro verbo); se corrigió la opción.
> - **Bloques 4 y 14:** la opción "来た" aparecía duplicada dos veces en la misma
>   lista de opciones (dejando sólo 3 alternativas reales en vez de 4); se reemplazó
>   el duplicado por "来ました". Se completaron además sus enunciados, que
>   originalmente eran fragmentos sin verbo ("社長___。"/"先生___。").
> - **Bloque 8:** tanto "もし" como "もしも" aparecían duplicados dos veces cada uno
>   (sólo 2 alternativas reales en vez de 4); se completó con dos opciones genuinas
>   más (たとえ, もしかして).

### 1 — 空欄補充（場所の表現）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["粒子", "場所"]  
pasos:  
  - "場所を示す粒子を確認する"  
  - "文脈に合った選択肢を選ぶ"  
respuestas_validas:  
  - "で"  
tipo: completar  
enunciado: "彼は東京___旅行しました。"  
explicacion: "「で」は動作が行われた場所を示す粒子です。旅行の場所を強調するため、この文では適切です。"  

```



### 2 — 選択問題（過去形）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["動詞活用", "過去"]  
pasos:  
  - "文の時制を確認する"  
  - "適切な過去形を選ぶ"  
opciones_explicitas:
  - "食べた"
  - "食べる"
  - "食べます"
  - "食べていた"
respuesta: "食べた"  
tipo: mc  
enunciado: "昨日、彼は___。"  
explicacion: "「食べた」は完了した動作を示し、過去の文脈に合います。他の選択肢は現在形や進行形です。"  

```



### 3 — 空欄補充（目的の表現）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["粒子", "目的"]  
pasos:  
  - "目的を示す粒子を確認する"  
  - "文脈に合った選択肢を選ぶ"  
respuestas_validas:  
  - "ために"  
tipo: completar  
enunciado: "彼は試験___勉強しました。"  
explicacion: "「ために」は目的を示す粒子です。「ため」だけでは文脈が不完全になります。"  

```



### 4 — 選択問題（尊敬語）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["敬語", "丁寧"]  
pasos:  
  - "相手の立場を確認する"  
  - "適切な尊敬語を選ぶ"  
opciones_explicitas:
  - "来ます"
  - "来た"
  - "いらっしゃいます"
  - "来ました"
respuesta: "いらっしゃいます"  
tipo: mc  
enunciado: "社長は今、会議室に___。"  
explicacion: "「いらっしゃいます」は尊他語で、相手を敬う際に使われます。他の選択肢は丁寧ではないです。"  

```



### 5 — 空欄補充（原因の表現）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["因果", "理由"]  
pasos:  
  - "原因を示す接続詞を確認する"  
  - "文脈に合った選択肢を選ぶ"  
respuestas_validas:  
  - "ので"  
tipo: completar  
enunciado: "雨が降った___、試験は中止になりました。"  
explicacion: "「ので」は原因を示す接続詞です。「から」は文の終わりにしか使われません。"  

```



### 6 — 選択問題（連体形）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["活用", "連体"]  
pasos:  
  - "修飾語としての形を確認する"  
  - "適切な連体形を選ぶ"  
opciones_explicitas:
  - "面白い"
  - "面白かった"
  - "面白ければ"
  - "面白くて"
respuesta: "面白い"  
tipo: mc  
enunciado: "___映画を見ました。"  
explicacion: "「面白い」は形容詞の連体形で、名詞を修飾します。「面白かった」は過去形です。"  

```



### 7 — 空欄補充（手段の表現）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["粒子", "手段"]  
pasos:  
  - "手段を示す粒子を確認する"  
  - "文脈に合った選択肢を選ぶ"  
respuestas_validas:  
  - "で"  
tipo: completar  
enunciado: "彼は電車___東京へ行きました。"  
explicacion: "「で」は手段を示す粒子です。交通手段の文脈に合います。"  

```



### 8 — 選択問題（条件形）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["活用", "条件"]  
pasos:  
  - "条件を示す形を確認する"  
  - "適切な条件形を選ぶ"  
opciones_explicitas:
  - "もし"
  - "もしも"
  - "たとえ"
  - "もしかして"
respuesta: "もし"  
tipo: mc  
enunciado: "___、彼は来ません。"  
explicacion: "「もし」は条件を示す接続詞です。「もしも」はより強調された表現ですが、ここでは必要ではありません。"  

```



### 9 — 空欄補充（対象の表現）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["粒子", "対象"]  
pasos:  
  - "対象を示す粒子を確認する"  
  - "文脈に合った選択肢を選ぶ"  
respuestas_validas:  
  - "が"  
tipo: completar  
enunciado: "彼___、彼女より背が高いです。"  
explicacion: "「が」は対象を示す粒子で、比較の文脈に適しています。「は」は主語の強調に使われます。"  

```



### 10 — 選択問題（仮定形）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["活用", "仮定"]  
pasos:  
  - "仮定を示す形を確認する"  
  - "適切な仮定形を選ぶ"  
opciones_explicitas:
  - "いた"
  - "したら"
  - "すれば"
  - "した"
respuesta: "したら"  
tipo: mc  
enunciado: "___、彼は喜ぶだろう。"  
explicacion: "「したら」は仮定を示す形です。「すれば」は結果の仮定に使われます。"  

```



### 11 — 空欄補充（目的の表現）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["粒子", "目的"]  
pasos:  
  - "目的を示す粒子を確認する"  
  - "文脈に合った選択肢を選ぶ"  
respuestas_validas:  
  - "ために"  
tipo: completar  
enunciado: "彼は試験___準備しました。"  
explicacion: "「ために」は目的を示す粒子です。「ため」だけでは文脈が不完全になります。"  

```



### 12 — 選択問題（現在形）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["活用", "現在"]  
pasos:  
  - "文の時制を確認する"  
  - "適切な現在形を選ぶ"  
opciones_explicitas:
  - "食べる"
  - "食べます"
  - "食べた"
  - "食べていた"
respuesta: "食べる"  
tipo: mc  
enunciado: "彼は___。"  
explicacion: "「食べる」は肯定の現在形です。「食べます」は丁寧な現在形ですが、語尾が異なります。"  

```



### 13 — 空欄補充（原因の表現）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["因果", "理由"]  
pasos:  
  - "原因を示す接続詞を確認する"  
  - "文脈に合った選択肢を選ぶ"  
respuestas_validas:  
  - "ので"  
tipo: completar  
enunciado: "彼が病気___、会議は延期になりました。"  
explicacion: "「ので」は原因を示す接続詞です。「から」は文の終わりにしか使われません。"  

```



### 14 — 選択問題（尊敬語）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["敬語", "丁寧"]  
pasos:  
  - "相手の立場を確認する"  
  - "適切な尊敬語を選ぶ"  
opciones_explicitas:
  - "来ます"
  - "来た"
  - "いらっしゃいます"
  - "来ました"
respuesta: "いらっしゃいます"  
tipo: mc  
enunciado: "先生は今、教室に___。"  
explicacion: "「いらっしゃいます」は尊他語で、相手を敬う際に使われます。他の選択肢は丁寧ではないです。"  

```



### 15 — 空欄補充（手段の表現）  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["粒子", "手段"]  
pasos:  
  - "手段を示す粒子を確認する"  
  - "文脈に合った選択肢を選ぶ"  
respuestas_validas:  
  - "で"  
tipo: completar  
enunciado: "彼は飛行機___東京へ行きました。"  
explicacion: "「で」は手段を示す粒子です。交通手段の文脈に合います。"  

```



### 16 — 選択問題（条件形）  
```  
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["構文", "原因"]  
pasos:  
  - "Identificar el uso del sufijo que expresa causa."  
  - "Seleccionar la opción gramaticalmente correcta en el contexto de una oración causal."  
tipo: mc  
enunciado: "雨が降った___、試験は中止になりました。"
opciones_explicitas:  
  - "ため"  
  - "から"  
  - "ので"  
  - "のに"  
respuesta: "ため"  
explicacion: "La partícula 'ため' se usa para expresar una causa directa en oraciones formales. En este contexto, '雨が降ったため、試験は中止になりました' es correcto."  
```

### 17 — 空欄補充（対象の表現）  
```  
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["動詞", "時間"]  
pasos:  
  - "Determinar la forma correcta del verbo en relación con el tiempo expresado."  
  - "Completar el hueco con el sufijo que indica un evento previo a otro."  
tipo: completar  
enunciado: "試験の___、準備しました。"
respuestas_validas:  
  - "前"  
  - "前に"  
explicacion: "'前' o '前に' se usan para indicar que una acción ocurrió antes de otra. En este caso, '試験の前、準備しました' es correcto."  
```

### 18 — 選択問題（仮定形）  
```  
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["会話", "敬語"]  
pasos:  
  - "Identificar el uso correcto de la partícula que completa una oración en contexto de instrucción."  
  - "Seleccionar la opción que refleja un tono formal y respetuoso."  
tipo: mc  
enunciado: "社長、資料を確認して___。"
opciones_explicitas:  
  - "ください"  
  - "してもらいました"  
  - "しました"  
  - "してくださいました"  
respuesta: "ください"  
explicacion: "'ください' se usa para pedir algo de manera formal. '社長、資料を確認してください' es la forma correcta en este contexto."  
```

### 19 — 空欄補充（目的の表現）  
```  
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["動詞", "手段"]  
pasos:  
  - "Seleccionar la partícula que indica el medio de transporte en una oración."  
  - "Validar que la opción elegida concuerde con el verbo '行く'."  
tipo: mc  
enunciado: "電車___東京へ行きました。"
opciones_explicitas:  
  - "で"  
  - "を"  
  - "に"  
  - "へ"  
respuesta: "で"  
explicacion: "'で' se usa para indicar el medio de transporte. '電車で東京へ行きました' es correcto."  
```

### 20 — 選択問題（現在形）  
```  
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["会話", "条件"]  
pasos:  
  - "Identificar la forma del verbo que expresa una condición en un diálogo."  
  - "Completar el hueco con la partícula adecuada para formar la estructura 'もし～なら'."  
tipo: completar  
enunciado: "もし彼が来る___、待ってください。"
respuestas_validas:  
  - "なら"  
  - "ならば"  
explicacion: "'なら' se usa en condiciones hipotéticas. En este caso, 'もし彼が来るなら、待ってください' es correcto."  
```

### 21 — 空欄補充（原因の表現）  
```  
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["動詞", "完了"]  
pasos:  
  - "Determinar el sufijo del verbo que indica un evento completado."  
  - "Completar el hueco con la forma correcta en relación al tiempo mencionado."  
tipo: completar  
enunciado: "彼はレポートを___。"
respuestas_validas:  
  - "した"  
  - "しました"  
explicacion: "'した' o 'しました' son formas del verbo en pasado. En este contexto, '新しい仕事に就いた' es correcto."  
```

### 22 — 選択問題（尊敬語）  
```  
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["会話", "理由"]  
pasos:  
  - "Seleccionar la partícula que expresa el motivo de una acción."  
  - "Validar que la opción elegida complete lógicamente la oración."  
tipo: mc  
enunciado: "友達の___プレゼントを買いました。"
opciones_explicitas:  
  - "ために"  
  - "ので"  
  - "が"  
  - "の"  
respuesta: "ために"  
explicacion: "'ために' se usa para indicar el propósito de una acción. '友達のためにプレゼントを買いました' es correcto."  
```

### 23 — 空欄補充（手段の表現）  
```  
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["場所", "目的"]  
pasos:  
  - "Identificar la partícula que indica el lugar de destino en una oración."  
  - "Completar el hueco con el sufijo adecuado para formar '～へ行く'."  
tipo: completar  
enunciado: "映画館___行きました。"
respuestas_validas:  
  - "へ"  
  - "に向かって"  
explicacion: "'へ' se usa para indicar la dirección de un movimiento. En este caso, '映画館へ行きました' es correcto."  
```

### 24 — 選択問題（条件形）  
```  
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["会話", "引用"]  
pasos:  
  - "Seleccionar la partícula que introduce una cita o declaración directa."  
  - "Validar que la opción elegida complete lógicamente la oración."  
tipo: mc  
enunciado: "彼は「今すぐ行く」___言いました。"
opciones_explicitas:  
  - "と"  
  - "が"  
  - "を"  
  - "に"  
respuesta: "と"  
explicacion: "'と' se usa para introducir una cita o declaración directa. '彼は「今すぐ行く」と言いました' es correcto."  
```

### 25 — 空欄補充（対象の表現）  
```  
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "reading-n3"  
  nivel: "N3"  
  tags: ["構文", "原因"]  
pasos:  
  - "Identificar la partícula que expresa una causa en oraciones formales."  
  - "Completar el hueco con el sufijo adecuado para formar '～ため'."  
tipo: completar  
enunciado: "天気の___、イベントは中止になりました。"
respuestas_validas:  
  - "ため"  
  - "ために"  
explicacion: "'ため' se usa en oraciones formales para expresar causa. En este caso, '天気のため、イベントは中止になりました' es correcto."  
```
