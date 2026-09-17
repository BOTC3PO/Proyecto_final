> **Nota de corrección:** Este cuestionario fue corregido a partir del borrador en
> `_borradores-gemma/idiomas-extranjeros/japones/matices-de-registro/cuestionario_crudo.md`
> mediante el script `mechanical_fix_idiomas.py` (comillas mal cerradas en
> `explicacion:`). A 8 bloques les faltaba además el `enunciado:`. Se corrigieron
> además varios errores de contenido:
> - **3 bloques (18, 21, 23):** las opciones llevaban los corchetes japoneses 「」
>   incluidos en el propio texto de cada opción, mientras que `respuesta:` no los
>   llevaba, por lo que nunca coincidía literalmente con ninguna opción; se quitaron
>   los corchetes.
> - **Bloques 1, 3, 5, 9:** el `enunciado:` insertaba la respuesta en medio de un
>   párrafo con el que no encajaba gramaticalmente (p. ej. una cópula suelta "です"
>   pegada en medio de una oración ya completa); se rediseñó cada oración para que la
>   respuesta cierre o conecte la frase de forma coherente.
> - **Bloques 8 y 14:** estaban gravemente corrompidos — las propias
>   `opciones_explicitas:` eran oraciones completas que aún contenían el marcador de
>   hueco "__" sin rellenar, y el `enunciado:` era una frase entre comillas
>   completamente distinta y sin relación con esas opciones. Se reconstruyeron ambos
>   bloques: las opciones ahora son los conectores/cierres reales a elegir, y el
>   `enunciado:` es una oración coherente que efectivamente los necesita.
> - **Bloque 14:** además tenía un typo en `materia:` con un carácter japonés
>   incrustado en medio de la palabra española ("extranじeros"); corregido.

### 1 — ビジネスメールの表現  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["formal", "correo-electrónico"]  
pasos:  
  - "Complete el hueco con la forma más formal de 'です' en un contexto profesional."  
respuestas_validas:  
  - "です"  
  - "で"  
tipo: completar  
enunciado: "これは新規プロジェクトのご提案__。"  
explicacion: "En contextos formales como correos electrónicos, se usa 'です' como cópula final para mantener el tono respetuoso. 'で' por sí solo no puede cerrar la oración; necesitaría ir seguido de más texto."  

```



### 2 — 電話応対の敬語  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["honoríficos", "teléfono"]  
pasos:  
  - "Elija la opción correcta para un diálogo formal en una llamada telefónica."  
respuesta: "お手数をおかけしますが"  
opciones_explicitas:  
  - "お手数をおかけしますが"  
  - "手数をかけてください"  
  - "ちょっとだけ手間をかけて"  
tipo: mc  
enunciado: "「__、ご案内いただけますか？」"  
explicacion: "En situaciones formales, se usan frases como 'お手数をおかけしますが' para expresar cortesía. Las otras opciones son más informales o incorrectas en este contexto."  

```



### 3 — 学術論文の文体  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["académico", "formal"]  
pasos:  
  - "Complete el hueco con la forma más adecuada para un texto académico."  
respuestas_validas:  
  - "である"  
  - "です"  
tipo: completar  
enunciado: "この結果は、仮説を支持するもの__。"  
explicacion: "En textos académicos, se prefiere la cópula 'である' para mantener un tono impersonal y formal como cierre de la oración. 'です' es más común en contextos cotidianos."  

```



### 4 — カジュアルな会話の表現  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["informal", "conversación"]  
pasos:  
  - "Elija la opción más adecuada para un diálogo entre amigos."  
respuesta: "ちょっと待って"  
opciones_explicitas:  
  - "ちょっと待って"  
  - "お待ちください"  
  - "ご静聴ください"  
tipo: mc  
enunciado: "「__、その件について話したいことがある。」"  
explicacion: "En conversaciones informales, 'ちょっと待って' es más natural que las formas formales como 'お待ちください' o 'ご静聴ください', que son inapropiadas en este contexto."  

```



### 5 — リストラの通知文書  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["formal", "notificación"]  
pasos:  
  - "Complete el hueco con la forma más respetuosa para una notificación oficial."  
respuestas_validas:  
  - "ご連絡いたします"  
  - "連絡します"  
tipo: completar  
enunciado: "詳細については、追って__。"  
explicacion: "En notificaciones oficiales, se usa 'ご連絡いたします' para expresar respeto y formalidad al prometer un contacto posterior. La forma '連絡します' es más directa y menos adecuada en este contexto."  

```



### 6 — レストランでの注文  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["casual", "servicio"]  
pasos:  
  - "Elija la opción más adecuada para pedir comida en un restaurante informal."  
respuesta: "この魚、おすすめですか？"  
opciones_explicitas:  
  - "この魚、おすすめですか？"  
  - "お魚をおすすめしていただけますか？"  
  - "この魚は、ぜひ食べてください。"  
tipo: mc  
enunciado: "「__、お願いします。」"  
explicacion: "En restaurantes informales, se usan preguntas directas como 'この魚、おすすめですか？' para mantener un tono casual. Las otras opciones son más formales o impertinentes."  

```



### 7 — クラスでの発表  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["formal", "educación"]  
pasos:  
  - "Complete el hueco con la forma más adecuada para una presentación académica."  
respuestas_validas:  
  - "ご存知のように"  
  - "あなたは知ってますよね"  
tipo: completar  
enunciado: "「__、このテーマは非常に重要です。」"  
explicacion: "En presentaciones académicas, 'ご存知のように' es más formal y respetuoso. La forma 'あなたは知ってますよね' es demasiado informal para este contexto."  

```



### 8 — 業務報告書の表現  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["formal", "informe"]  
pasos:  
  - "Elija la opción más adecuada para un informe ejecutivo."  
respuesta: "結果として"  
opciones_explicitas:  
  - "結果として"  
  - "その結果"  
  - "そして"  
tipo: mc  
enunciado: "予算を削減した。__、問題が発生しました。"  
explicacion: "En informes formales, '結果として' (como resultado) conecta con precisión una causa con su consecuencia directa; 'その結果' es sinónimo pero algo menos formal, y 'そして' (y luego) es demasiado neutro para un informe ejecutivo."  

```



### 9 — メールでの断りの表現  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["formal", "correo-electrónico"]  
pasos:  
  - "Complete el hueco con la forma más respetuosa para rechazar una solicitud."  
respuestas_validas:  
  - "ご希望に添えず、大変申し訳ございません。"  
  - "ご希望通りにはできませんが"  
tipo: completar  
enunciado: "残念ながら、__。"  
explicacion: "En correos formales, se usa 'ご希望に添えず、大変申し訳ございません' para expresar cortesía en un rechazo, típicamente introducido por '残念ながら' (lamentablemente). La forma alternativa es menos formal."  

```



### 10 — ライブ配信での挨拶  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["casual", "entretención"]  
pasos:  
  - "Elija la opción más adecuada para un saludo en una transmisión en vivo."  
respuesta: "皆さん、こんにちは！"  
opciones_explicitas:  
  - "皆さん、こんにちは！"  
  - "皆様、ご挨拶いたします。"  
  - "おはようございます"  
tipo: mc  
enunciado: "「__、よろしくお願いします！」"  
explicacion: "En transmisiones en vivo, '皆さん、こんにちは！' es más natural y casual. Las otras opciones son demasiado formales o inapropiadas para este contexto."  

```



### 11 — ビジネスミーティングでの提案  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["formal", "negocios"]  
pasos:  
  - "Complete el hueco con la forma más adecuada para una propuesta en un meeting empresarial."  
respuestas_validas:  
  - "ご検討いただけますようお願いいたします"  
  - "検討してください"  
tipo: completar  
enunciado: "「弊社の提案を__、誠にありがとうございます。」"  
explicacion: "En reuniones empresariales, se usa 'ご検討いただけますようお願いいたします' para mantener un tono respetuoso. La forma alternativa es menos formal."  

```



### 12 — カフェでの注文  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["formalidad", "explicación"]  
pasos:  
  - "Identificar el contexto formal de la oración."
  - "Seleccionar la expresión que indica explicación o aclaración en un entorno profesional."
enunciado: "会議の結果を______、コスト削減が最優先事項です。"
respuesta: "つまり"  
respuestas_validas:  
  - "つまり"  
  - "つまりは"  
explicacion: "La palabra 「つまり」 se usa para introducir una aclaración o resumen en contextos formales, como explicar un concepto complejo de forma concisa."
```

### 13 — 学校での発表の挨拶  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["formal", "educación"]  
pasos:  
  - "Complete el hueco con la forma más adecuada para una presentación en clase."  
respuestas_validas:  
  - "ご静聴ありがとうございます"  
  - "聞いてください"  
tipo: completar  
enunciado: "「__、本日の発表を始めさせていただきます。」"  
explicacion: "En presentaciones formales, 'ご静聴ありがとうございます' es más respetuoso. La forma alternativa es demasiado informal para este contexto."  

```



### 14 — ビジネス提案書の表現  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["formal", "documentos"]  
pasos:  
  - "Elija la opción más adecuada para un documento formal de propuesta empresarial."  
respuesta: "今後とも、ご支援いただけますようお願い申し上げます。"  
opciones_explicitas:  
  - "今後とも、ご支援いただけますようお願い申し上げます。"  
  - "今後も、支援してください。"  
  - "今後とも、協力してください。"  
tipo: mc  
enunciado: "取引先への提案書を、どのように締めくくるのが最も丁寧ですか？"  
explicacion: "En documentos formales, 'ご支援いただけますようお願い申し上げます' es más respetuoso. Las otras opciones son menos formales o inapropiadas para este contexto."  

```



### 15 — メールでの感謝の表現  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["formal", "correo-electrónico"]  
pasos:  
  - "Complete el hueco con la forma más adecuada para expresar gratitud en un correo electrónico."  
respuestas_validas:  
  - "大変お世話になっております"  
  - "ありがとうございます"  
tipo: completar  
enunciado: "「__、いつも感謝しています。」"  
explicacion: "En correos formales, '大変お世話になっております' es más respetuoso. La forma alternativa es demasiado informal para este contexto."  

```



### 16 — ライブ配信での質問への回答  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["casual", "entretención"]  
pasos:  
  - "Elija la opción más adecuada para responder a una pregunta en una transmisión en vivo."  
respuesta: "その質問、とても良いですね！"  
opciones_explicitas:  
  - "その質問、とても良いですね！"  
  - "ご質問ありがとうございます。"  
  - "質問はできますか？"  
tipo: mc  
enunciado: "「__、ありがとうございます！」"  
explicacion: "En transmisiones en vivo, 'その質問、とても良いですね！' es más natural y casual. Las otras opciones son demasiado formales o impertinentes."  

```



### 17 — ビジネスミーティングでの報告  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["formal", "negocios"]  
pasos:  
  - "Complete el hueco con la forma más adecuada para un informe en una reunión empresarial."  
respuestas_validas:  
  - "ご報告いたします"  
  - "報告します"  
tipo: completar  
enunciado: "「__、本日の進捗についてお知らせいたします。」"  
explicacion: "En reuniones empresariales, 'ご報告いたします' es más respetuoso. La forma alternativa es demasiado informal para este contexto."  

```



### 18 — カジュアルな会話での感謝の表現  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["formalidad", "explicación"]  
enunciado: "彼の説明は長かったが、______、予算が不足しているということだった。"
opciones_explicitas:  
  - "つまり"
  - "それでは"
  - "例えば"
  - "ただし"
respuesta: "つまり"  
explicacion: "En contextos formales, 「つまり」 es la opción correcta para enfatizar una explicación clara y directa, mientras que otras opciones como 「例えば」 indican ejemplos o 「ただし」 señalan excepciones."
```

### 19 — 学術論文の表現  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["humbildad", "saludo"]  
pasos:  
  - "Determinar el nivel de humildad requerido en una situación comercial."
  - "Seleccionar la expresión que refleja respeto hacia el interlocutor."
enunciado: "お忙しい中、______。"
respuesta: "お手数をおかけします"  
respuestas_validas:  
  - "お手数をおかけします"  
  - "お手間をおかけします"  
explicacion: "「お手数をおかけします」 es una frase humilde que expresa disculpa por molestar al interlocutor, común en contextos profesionales."
```

### 20 — ビジネスメールの表現  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["formal", "correo-electrónico"]  
pasos:  
  - "Elija la opción más adecuada para un correo electrónico formal."  
respuesta: "ご連絡いたします"  
opciones_explicitas:  
  - "ご連絡いたします"  
  - "連絡します"  
  - "お手紙を送ります"  
tipo: mc  
enunciado: "「__、大変申し訳ございません。」"  
explicacion: "En correos formales, 'ご連絡いたします' es más respetuoso. Las otras opciones son menos formales o inapropiadas para este contexto."  

```



### 21 — レストランでの注文の表現  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["formalidad", "contexto"]  
enunciado: "彼は多くのデータを分析したが、______、市場は成長しているということだ。"
opciones_explicitas:  
  - "つまり"
  - "それでは"
  - "例えば"
  - "ただし"
respuesta: "つまり"  
explicacion: "En un discurso formal, 「つまり」 es la opción correcta para explicar una situación de forma clara y precisa."
```

### 22 — メールでの断りの表現  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["humbildad", "negativa"]  
pasos:  
  - "Identificar la necesidad de una negativa con cortesía."
  - "Seleccionar la expresión que transmite respeto al rechazar una solicitud."
enunciado: "誠に申し訳ございませんが、______、ご了承ください。"
respuesta: "ご希望に添えないかもしれませんが"  
respuestas_validas:  
  - "ご希望に添えないかもしれませんが"  
  - "ご希望にそえることができませんが"  
explicacion: "Esta frase es adecuada para expresar una negativa con humildad, común en contextos empresariales."
```

### 23 — ライブ配信での挨拶  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["formalidad", "contexto"]  
enunciado: "会議は長引いたが、______、結論は変わらなかった。"
opciones_explicitas:  
  - "つまり"
  - "それでは"
  - "例えば"
  - "ただし"
respuesta: "つまり"  
explicacion: "En contextos formales, 「つまり」 se usa para presentar una situación o circunstancia de forma clara y directa."
```

### 24 — ビジネスミーティングでの提案の表現  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["formalidad", "enfoque"]  
pasos:  
  - "Reconocer la necesidad de enfatizar un punto clave."
  - "Seleccionar la expresión que resalta la importancia en un discurso formal."
enunciado: "彼の意見は複雑だったが、______、反対だということだ。"
respuesta: "つまりは"  
respuestas_validas:  
  - "つまりは"  
  - "つまり"  
explicacion: "「つまりは」 es una variante de 「つまり」 que se usa para enfatizar aún más el punto central en contextos formales o académicos."
```

### 25 — カフェでの注文の表現  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "matices-de-registro"  
  nivel: "N1"  
  tags: ["formalidad", "solicitud"]  
pasos:  
  - "Determinar la necesidad de una solicitud con respeto."
  - "Seleccionar la expresión que transmite cortesía en un entorno profesional."
enunciado: "本件について、______。"
respuesta: "ご協力いただけますと幸いです"  
respuestas_validas:  
  - "ご協力いただけますと幸いです"  
  - "お手伝いいただけますと幸いです"  
explicacion: "Esta frase humilde y formal se usa para pedir colaboración respetuosamente, común en contextos empresariales."
```
