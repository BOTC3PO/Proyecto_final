> **Nota de corrección:** Este cuestionario fue corregido a partir del borrador en
> `_borradores-gemma/idiomas-extranjeros/japones/listening-n4/cuestionario_crudo.md`
> mediante el script `mechanical_fix_idiomas.py`. A 21 bloques les faltaba el
> `enunciado:` -- el borrador presuponía un audio real que nunca existía. Se
> reconstruyó cada uno citando directamente el contenido "escuchado" dentro del propio
> `enunciado:` (siguiendo el mismo patrón ya usado en otros temas de listening de este
> proyecto), de forma que la pregunta sea respondible únicamente a partir del texto
> dado. Se depuraron además dos entradas duplicadas idénticas en `respuestas_validas:`
> (bloques 1 y 5).

### 1 — 電話の内容  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "listening-n4"
  nivel: "N4"
  tags: ["telefono", "pregunta"]
pasos:
  - "Escucha el mensaje de voz y completa la oración."
explicacion: "El mensaje menciona que la persona no puede atender la llamada porque está en una reunión. La palabra 'reunión' es clave para completar correctamente el hueco."
tipo: completar
respuestas_validas:
  - "会議"
enunciado: "「今、_に参加しているので、後で戻ります。」"
```



### 2 — 買い物の相手  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "listening-n4"
  nivel: "N4"
  tags: ["compra", "mc"]
pasos:
  - "Escucha el diálogo y elige la opción correcta."
explicacion: "La persona pregunta si tienen un artículo en stock, y la respuesta confirma que sí lo tienen. La opción 'あります' es la única que indica disponibilidad."
tipo: mc
enunciado: "店員に「これはありますか」と聞いたら、店員は何と答えますか？"
opciones_explicitas:
  - "ありません"
  - "あります"
  - "わかりません"
respuesta: "あります"
```



### 3 — レストランの予約  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "listening-n4"
  nivel: "N4"
  tags: ["reserva", "completar"]
pasos:
  - "Escucha el anuncio y completa la oración."
explicacion: "El anuncio menciona que las reservas deben hacerse con al menos dos días de antelación. La palabra '前' es necesaria para completar el tiempo correctamente."
tipo: completar
respuestas_validas:
  - "前"
  - "日前"
enunciado: "「予約は、来店の_にご連絡ください。」"
```



### 4 — 電車の運行  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "listening-n4"
  nivel: "N4"
  tags: ["transporte", "mc"]
pasos:
  - "Escucha el anuncio y elige la opción correcta."
explicacion: "El anuncio indica que los trenes están retrasados debido a una falla en la vía. La opción '遅延' describe correctamente la situación."
tipo: mc
enunciado: "電車の遅延についてのアナウンスを聞きました。何が起きていますか？"
opciones_explicitas:
  - "運行停止"
  - "遅延"
  - "終点変更"
respuesta: "遅延"
```



### 5 — ホテルのチェックイン  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "listening-n4"
  nivel: "N4"
  tags: ["hotel", "completar"]
pasos:
  - "Escucha el mensaje de voz y completa la oración."
explicacion: "El mensaje dice que el check-in es a las 3 p.m. La palabra '午後' indica correctamente la hora en japonés."
tipo: completar
respuestas_validas:
  - "午後"
enunciado: "「チェックインは_3時です。」"
```



### 6 — 学校の行事  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "listening-n4"
  nivel: "N4"
  tags: ["evento", "mc"]
pasos:
  - "Escucha el anuncio y elige la opción correcta."
explicacion: "El anuncio menciona que el evento es una reunión de padres. La opción '保護者会' corresponde al término usado en el mensaje."
tipo: mc
enunciado: "学校からのお知らせを聞きました。どんなイベントについてですか？"
opciones_explicitas:
  - "文化祭"
  - "保護者会"
  - "運動会"
respuesta: "保護者会"
```



### 7 — メールの内容  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "listening-n4"
  nivel: "N4"
  tags: ["correo", "completar"]
pasos:
  - "Escucha el mensaje de voz y completa la oración."
explicacion: "El mensaje dice que hay un error en el correo electrónico. La palabra 'ミス' describe correctamente la situación."
tipo: completar
respuestas_validas:
  - "ミス"
  - "間違い"
enunciado: "「メールに_があります。確認してください。」"
```



### 8 — レストランのメニュー  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "listening-n4"
  nivel: "N4"
  tags: ["comida", "mc"]
pasos:
  - "Escucha el diálogo y elige la opción correcta."
explicacion: "La persona pregunta si tienen un plato específico, y la respuesta confirma que sí lo tienen. La opción 'あります' es la única que indica disponibilidad."
tipo: mc
enunciado: "店員に「この料理はありますか」と聞いたら、店員は何と答えますか？"
opciones_explicitas:
  - "ありません"
  - "あります"
  - "わかりません"
respuesta: "あります"
```



### 9 — 電話の受付  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "listening-n4"  
  nivel: "N4"  
  tags: ["expresiones de tiempo", "confirmación"]  
pasos:  
  - "Identificar el momento clave en la oración."  
  - "Revisar las opciones según el contexto temporal."  
enunciado: "「会議は午後2時に始まります」という放送を聞きました。会議は何時からですか？"
opciones_explicitas:  
  - "午前10時"  
  - "午後2時"  
  - "午前8時"  
respuesta: "午後2時"
```

### 10 — 買い物の確認  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "listening-n4"
  nivel: "N4"
  tags: ["compra", "mc"]
pasos:
  - "Escucha el diálogo y elige la opción correcta."
explicacion: "La persona pregunta si tienen un artículo en stock, y la respuesta confirma que sí lo tienen. La opción 'あります' es la única que indica disponibilidad."
tipo: mc
enunciado: "店員に「これはありますか」と聞いたら、店員は何と答えますか？"
opciones_explicitas:
  - "ありません"
  - "あります"
  - "わかりません"
respuesta: "あります"
```



### 11 — レストランの予約  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "listening-n4"  
  nivel: "N4"  
  tags: ["verbo te-forma", "pedidos"]  
pasos:  
  - "Distinguir la estructura de pedido usando ～てください."  
  - "Verificar el verbo en te-forma correcto."  
enunciado: "レストランでスープを注文したいとき、正しい言い方はどれですか？"
opciones_explicitas:  
  - "スープを飲んでください"  
  - "スープをお願いします"  
  - "スープで食べてください"  
respuesta: "スープをお願いします"
```

### 12 — 電車の運行  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "listening-n4"
  nivel: "N4"
  tags: ["transporte", "mc"]
pasos:
  - "Escucha el anuncio y elige la opción correcta."
explicacion: "El anuncio indica que los trenes están retrasados debido a una falla en la vía. La opción '遅延' describe correctamente la situación."
tipo: mc
enunciado: "電車の遅延についてのアナウンスを聞きました。何が起きていますか？"
opciones_explicitas:
  - "運行停止"
  - "遅延"
  - "終点変更"
respuesta: "遅延"
```



### 13 — ホテルのチェックイン  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "listening-n4"  
  nivel: "N4"  
  tags: ["direcciones", "partículas"]  
pasos:  
  - "Analizar la partícula que indica dirección."  
  - "Seleccionar el uso correcto de に o へ."  
enunciado: "薬局までの道を尋ねられました。方向を示す正しい表現はどれですか？"
opciones_explicitas:  
  - "薬局に歩いてください"  
  - "薬局へ歩いてください"  
  - "薬局で歩いてください"  
respuesta: "薬局へ歩いてください"
```

### 14 — 学校の行事  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "listening-n4"
  nivel: "N4"
  tags: ["evento", "mc"]
pasos:
  - "Escucha el anuncio y elige la opción correcta."
explicacion: "El anuncio menciona que el evento es una reunión de padres. La opción '保護者会' corresponde al término usado en el mensaje."
tipo: mc
enunciado: "学校からのお知らせを聞きました。どんなイベントについてですか？"
opciones_explicitas:
  - "文化祭"
  - "保護者会"
  - "運動会"
respuesta: "保護者会"
```



### 15 — メールの内容  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "listening-n4"  
  nivel: "N4"  
  tags: ["expresiones de tiempo", "duracion"]  
pasos:  
  - "Reconocer la estructura de tiempo en minutos."  
  - "Verificar el uso de 数分 (nankun)."  
enunciado: "「あと30分間お待ちください」という放送を聞きました。あと何分待ちますか？"
opciones_explicitas:  
  - "30分間"  
  - "1時間"  
  - "25分間"  
respuesta: "30分間"
```

### 16 — レストランのメニュー  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "listening-n4"
  nivel: "N4"
  tags: ["comida", "mc"]
pasos:
  - "Escucha el diálogo y elige la opción correcta."
explicacion: "La persona pregunta si tienen un plato específico, y la respuesta confirma que sí lo tienen. La opción 'あります' es la única que indica disponibilidad."
tipo: mc
enunciado: "店員に「この料理はありますか」と聞いたら、店員は何と答えますか？"
opciones_explicitas:
  - "ありません"
  - "あります"
  - "わかりません"
respuesta: "あります"
```



### 17 — 電話の受付  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "listening-n4"  
  nivel: "N4"  
  tags: ["reglas", "prohibiciones"]  
pasos:  
  - "Identificar la prohibición expresa en el texto."  
  - "Revisar el uso de ～てはいけません."  
enunciado: "図書館で規則についてのアナウンスを聞きました。禁止されていることは何ですか？"
opciones_explicitas:  
  - "携帯電話を使ってはいけません"  
  - "携帯電話を持ってはいけません"  
  - "携帯電話を貸してはいけません"  
respuesta: "携帯電話を使ってはいけません"
```

### 18 — 買い物の確認  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "listening-n4"
  nivel: "N4"
  tags: ["compra", "mc"]
pasos:
  - "Escucha el diálogo y elige la opción correcta."
explicacion: "La persona pregunta si tienen un artículo en stock, y la respuesta confirma que sí lo tienen. La opción 'あります' es la única que indica disponibilidad."
tipo: mc
enunciado: "店員に「これはありますか」と聞いたら、店員は何と答えますか？"
opciones_explicitas:
  - "ありません"
  - "あります"
  - "わかりません"
respuesta: "あります"
```



### 19 — レストランの予約  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "listening-n4"  
  nivel: "N4"  
  tags: ["expresiones climáticas", "días de la semana"]  
pasos:  
  - "Asociar el día con la previsión climática."  
  - "Verificar el uso de 予報 (yohō)."  
enunciado: "天気予報を聞きました。「水曜日は晴れです」と言っていました。水曜日の天気はどうですか？"
opciones_explicitas:  
  - "月曜日は雨です"  
  - "水曜日は晴れです"  
  - "金曜日は雪です"  
respuesta: "水曜日は晴れです"
```

### 20 — 電車の運行  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "listening-n4"
  nivel: "N4"
  tags: ["transporte", "mc"]
pasos:
  - "Escucha el anuncio y elige la opción correcta."
explicacion: "El anuncio indica que los trenes están retrasados debido a una falla en la vía. La opción '遅延' describe correctamente la situación."
tipo: mc
enunciado: "電車の遅延についてのアナウンスを聞きました。何が起きていますか？"
opciones_explicitas:
  - "運行停止"
  - "遅延"
  - "終点変更"
respuesta: "遅延"
```



### 21 — ホテルのチェックイン  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "listening-n4"  
  nivel: "N4"  
  tags: ["verbo te-forma", "pedidos"]  
pasos:  
  - "Identificar el verbo en te-forma para pedir."  
  - "Seleccionar la opción con ～てください."  
enunciado: "喫茶店でコーヒーを注文したいとき、正しい言い方はどれですか？"
opciones_explicitas:  
  - "コーヒーを飲んでください"  
  - "コーヒーをお願いします"  
  - "コーヒーで食べてください"  
respuesta: "コーヒーをお願いします"
```

### 22 — 学校の行事  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "listening-n4"
  nivel: "N4"
  tags: ["evento", "mc"]
pasos:
  - "Escucha el anuncio y elige la opción correcta."
explicacion: "El anuncio menciona que el evento es una reunión de padres. La opción '保護者会' corresponde al término usado en el mensaje."
tipo: mc
enunciado: "学校からのお知らせを聞きました。どんなイベントについてですか？"
opciones_explicitas:
  - "文化祭"
  - "保護者会"
  - "運動会"
respuesta: "保護者会"
```



### 23 — メールの内容  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "listening-n4"  
  nivel: "N4"  
  tags: ["confirmación", "partículas"]  
pasos:  
  - "Revisar la partícula que indica el momento de contacto."  
  - "Verificar el uso correcto de に o へ."  
enunciado: "予約の案内を聞きました。「来店の前日にご連絡ください」と言われました。いつ連絡すればいいですか？"
opciones_explicitas:  
  - "予約は、来店の前日にご連絡ください"  
  - "予約は、来店の時にご連絡ください"  
  - "予約は、来店の後にご連絡ください"  
respuesta: "予約は、来店の前日にご連絡ください"
```

### 24 — レストランのメニュー  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "listening-n4"
  nivel: "N4"
  tags: ["comida", "mc"]
pasos:
  - "Escucha el diálogo y elige la opción correcta."
explicacion: "La persona pregunta si tienen un plato específico, y la respuesta confirma que sí lo tienen. La opción 'あります' es la única que indica disponibilidad."
tipo: mc
enunciado: "店員に「この料理はありますか」と聞いたら、店員は何と答えますか？"
opciones_explicitas:
  - "ありません"
  - "あります"
  - "わかりません"
respuesta: "あります"
```



### 25 — 電話の受付  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "listening-n4"  
  nivel: "N4"  
  tags: ["expresiones de tiempo", "confirmación"]  
pasos:  
  - "Identificar la hora clave en la oración."  
  - "Revisar las opciones según el contexto temporal."  
enunciado: "「会議は午後3時に始まります」という放送を聞きました。会議は何時からですか？"
opciones_explicitas:  
  - "午前11時"  
  - "午後3時"  
  - "午前9時"  
respuesta: "午後3時"
```
