> **Nota de corrección:** Este cuestionario fue corregido a partir del borrador en
> `_borradores-gemma/idiomas-extranjeros/japones/formacion-de-preguntas/cuestionario_crudo.md`
> mediante el script `mechanical_fix_idiomas.py`. A 16 bloques les faltaba el
> `enunciado:`, reconstruido como una pregunta completa en japonés acorde al
> interrogativo probado (だれ/どこ/いつ/なに/どの). Se corrigió además un error
> repetido en 8 bloques: `respuestas_validas:` aceptaba la traducción al español del
> interrogativo (p. ej. "Dónde", "¿Qué", "¿Cuándo") como si fuera una respuesta
> japonesa válida; se quitaron esas entradas. El bloque 2 tenía un `enunciado:` vacío
> ("___？", sin ninguna pregunta real), lo que hacía imposible determinar cuál de las
> tres oraciones-opción era la correcta; se reescribió con una pregunta que establece
> el contexto necesario.

### 1 — どこ  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formacion-de-preguntas"
  nivel: "N5"
  tags: ["particula-は", "interrogativo"]
pasos:
  - "Identificar el uso de la particula は para marcar el sujeto en una pregunta."
  - "Completar el hueco con el interrogativo adecuado."
tipo: completar
respuestas_validas:
  - "どこ"
explicacion: "En preguntas como '¿Dónde está el libro?', se usa 'どこ' para indicar la ubicación. La particula は marca el sujeto de la oración."
enunciado: "本は___にあります。"
```



### 2 — いつ  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formacion-de-preguntas"
  nivel: "N5"
  tags: ["interrogativo", "particula-は"]
pasos:
  - "Reconocer el uso de 'いつ' para preguntar sobre tiempo."
  - "Elegir la opción correcta con el contexto temporal adecuado."
respuesta: "会議は今日です。"
tipo: mc
opciones_explicitas:
  - "会議は今週です。"
  - "会議は今日です。"
  - "会議は明日です。"
explicacion: "La pregunta sobre tiempo se forma con 'いつ' seguido del sujeto y el verbo en afirmativo. La opción correcta es la que indica el día actual."
enunciado: "「会議はいつですか」と聞かれました。会議は今日開催されます。正しい答えはどれですか？"
```



### 3 — 何  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formacion-de-preguntas"
  nivel: "N5"
  tags: ["interrogativo", "particula-は"]
pasos:
  - "Identificar el uso de '何' para preguntar sobre un objeto."
  - "Completar el hueco con la palabra correcta."
tipo: completar
respuestas_validas:
  - "何"
explicacion: "El interrogativo '何' se usa para preguntar sobre objetos o cosas. La particula は marca el sujeto de la oración."
enunciado: "___が好きですか？"
```



### 4 — どこ  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formacion-de-preguntas"
  nivel: "N5"
  tags: ["interrogativo", "particula-は"]
pasos:
  - "Reconocer el uso de 'どこ' para preguntar sobre ubicación."
  - "Completar el hueco con la palabra correcta."
tipo: completar
respuestas_validas:
  - "どこ"
explicacion: "El interrogativo 'どこ' se usa en preguntas de lugar. La particula は marca el sujeto de la oración."
enunciado: "公園は___にあります。"
```



### 5 — いつ  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formacion-de-preguntas"
  nivel: "N5"
  tags: ["interrogativo", "particula-は"]
pasos:
  - "Identificar el uso de 'いつ' para preguntar sobre tiempo."
  - "Completar el hueco con la palabra correcta."
tipo: completar
respuestas_validas:
  - "いつ"
explicacion: "El interrogativo 'いつ' se usa en preguntas de tiempo. La particula は marca el sujeto de la oración."
enunciado: "___に遊びに行きますか？"
```



### 6 — 何  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formacion-de-preguntas"
  nivel: "N5"
  tags: ["interrogativo", "particula-は"]
pasos:
  - "Reconocer el uso de '何' para preguntar sobre un objeto."
  - "Completar el hueco con la palabra correcta."
tipo: completar
respuestas_validas:
  - "何"
explicacion: "El interrogativo '何' se usa en preguntas de objetos. La particula は marca el sujeto de la oración."
enunciado: "___を食べますか？"
```



### 7 — どこ  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formacion-de-preguntas"
  nivel: "N5"
  tags: ["interrogativo", "particula-は"]
pasos:
  - "Identificar el uso de 'どこ' para preguntar sobre ubicación."
  - "Completar el hueco con la palabra correcta."
tipo: completar
respuestas_validas:
  - "どこ"
explicacion: "El interrogativo 'どこ' se usa en preguntas de lugar. La particula は marca el sujeto de la oración."
enunciado: "駅は___にあります。"
```



### 8 — いつ  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "formacion-de-preguntas"  
  nivel: "N5"  
  tags: ["sujeto", "partícula-が"]  
pasos:  
  - "Identificar la partícula necesaria para formar una pregunta sobre sujeto."  
respuestas_validas:  
  - "だれ"  
enunciado: "______が来ましたか。"
opciones_explicitas:  
  - "だれ"  
  - "どこ"  
  - "いつ"  
  - "なに"  
respuesta: "だれ"
```

### 9 — 何  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formacion-de-preguntas"
  nivel: "N5"
  tags: ["interrogativo", "particula-は"]
pasos:
  - "Identificar el uso de '何' para preguntar sobre un objeto."
  - "Completar el hueco con la palabra correcta."
tipo: completar
respuestas_validas:
  - "何"
explicacion: "El interrogativo '何' se usa en preguntas de objetos. La particula は marca el sujeto de la oración."
enunciado: "___を飲みますか？"
```



### 10 — どこ  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "formacion-de-preguntas"
  nivel: "N5"
  tags: ["interrogativo", "particula-は"]
pasos:
  - "Reconocer el uso de 'どこ' para preguntar sobre ubicación."
  - "Completar el hueco con la palabra correcta."
tipo: completar
respuestas_validas:
  - "どこ"
explicacion: "El interrogativo 'どこ' se usa en preguntas de lugar. La particula は marca el sujeto de la oración."
enunciado: "学校は___にあります。"
```



### 11 — いつ  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "formacion-de-preguntas"  
  nivel: "N5"  
  tags: ["lugar", "partícula-に"]  
pasos:  
  - "Elegir la partícula correcta para formar una pregunta sobre lugar."  
enunciado: "図書館は______にありますか。"
opciones_explicitas:  
  - "どこ"  
  - "どの"  
  - "どう"  
  - "いつ"  
respuesta: "どこ"
```

### 12 — 何  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "formacion-de-preguntas"  
  nivel: "N5"  
  tags: ["lugar", "partícula-に"]  
pasos:  
  - "Usar la partícula adecuada para preguntar sobre un lugar futuro."  
enunciado: "来週、______へ旅行しますか。"
opciones_explicitas:  
  - "どこ"  
  - "いつ"  
  - "どの"  
  - "どう"  
respuesta: "どこ"
```

### 13 — どこ  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "formacion-de-preguntas"  
  nivel: "N5"  
  tags: ["objeto", "partícula-を"]  
pasos:  
  - "Seleccionar la partícula correcta para preguntar sobre un objeto."  
enunciado: "テーブルの上に______がありますか。"
opciones_explicitas:  
  - "なに"  
  - "だれ"  
  - "どこ"  
  - "いつ"  
respuesta: "なに"
```

### 14 — いつ  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "formacion-de-preguntas"  
  nivel: "N5"  
  tags: ["sujeto", "partícula-が"]  
pasos:  
  - "Identificar la partícula necesaria para formar una pregunta sobre el sujeto de una acción."  
enunciado: "______がこの本を書きましたか。"
opciones_explicitas:  
  - "だれ"  
  - "どこ"  
  - "いつ"  
  - "なに"  
respuesta: "だれ"
```

### 15 — 何  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "formacion-de-preguntas"  
  nivel: "N5"  
  tags: ["objeto", "partícula-の"]  
pasos:  
  - "Elegir la partícula correcta para preguntar sobre un objeto específico."  
enunciado: "______本を読みましたか。"
opciones_explicitas:  
  - "どの"  
  - "なに"  
  - "だれ"  
  - "どこ"  
respuesta: "どの"
```

### 16 — どこ  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "formacion-de-preguntas"  
  nivel: "N5"  
  tags: ["tiempo", "partícula-に"]  
pasos:  
  - "Usar la partícula adecuada para preguntar sobre un momento en el tiempo."  
enunciado: "会議は______始まりますか。"
opciones_explicitas:  
  - "いつ"  
  - "どこ"  
  - "だれ"  
  - "なに"  
respuesta: "いつ"
```

### 17 — いつ  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "formacion-de-preguntas"  
  nivel: "N5"  
  tags: ["sujeto", "partícula-が"]  
pasos:  
  - "Identificar la partícula necesaria para formar una pregunta sobre el sujeto de un verbo."  
enunciado: "______が窓を開けましたか。"
opciones_explicitas:  
  - "だれ"  
  - "どこ"  
  - "いつ"  
  - "なに"  
respuesta: "だれ"
```

### 18 — 何  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "formacion-de-preguntas"  
  nivel: "N5"  
  tags: ["lugar", "partícula-の"]  
pasos:  
  - "Seleccionar la partícula correcta para preguntar sobre una línea específica de tren."  
enunciado: "______線に乗りますか。"
opciones_explicitas:  
  - "どの"  
  - "どこ"  
  - "だれ"  
  - "いつ"  
respuesta: "どの"
```

### 19 — どこ  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "formacion-de-preguntas"  
  nivel: "N5"  
  tags: ["sujeto", "partícula-が"]  
pasos:  
  - "Usar la partícula adecuada para preguntar sobre quién realizó una acción."  
enunciado: "______が料理を作りましたか。"
opciones_explicitas:  
  - "だれ"  
  - "どこ"  
  - "いつ"  
  - "なに"  
respuesta: "だれ"
```

### 20 — いつ  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "formacion-de-preguntas"  
  nivel: "N5"  
  tags: ["objeto", "partícula-の"]  
pasos:  
  - "Elegir la partícula correcta para preguntar sobre un objeto específico en el futuro."  
enunciado: "明日、______映画を見ますか。"
opciones_explicitas:  
  - "どの"  
  - "なに"  
  - "だれ"  
  - "どこ"  
respuesta: "どの"
```

### 21 — 何  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "formacion-de-preguntas"  
  nivel: "N5"  
  tags: ["sujeto", "partícula-が"]  
pasos:  
  - "Identificar la partícula necesaria para formar una pregunta sobre el sujeto de un verbo."  
enunciado: "______が電話しましたか。"
opciones_explicitas:  
  - "だれ"  
  - "どこ"  
  - "いつ"  
  - "なに"  
respuesta: "だれ"
```

### 22 — どこ  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "formacion-de-preguntas"  
  nivel: "N5"  
  tags: ["lugar", "partícula-の"]  
pasos:  
  - "Usar la partícula adecuada para preguntar sobre un lugar específico."  
enunciado: "______店で買いましたか。"
opciones_explicitas:  
  - "どの"  
  - "どこ"  
  - "だれ"  
  - "いつ"  
respuesta: "どの"
```

### 23 — いつ  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "formacion-de-preguntas"  
  nivel: "N5"  
  tags: ["sujeto", "partícula-が"]  
pasos:  
  - "Identificar la partícula correcta para formar una pregunta sobre el sujeto de un verbo."  
enunciado: "______が歌を歌いましたか。"
opciones_explicitas:  
  - "だれ"  
  - "どこ"  
  - "いつ"  
  - "なに"  
respuesta: "だれ"
```

### 24 — 何  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "formacion-de-preguntas"  
  nivel: "N5"  
  tags: ["sujeto", "partícula-が"]  
pasos:  
  - "Elegir la partícula adecuada para preguntar sobre quién realizó una acción."  
enunciado: "______が掃除をしましたか。"
opciones_explicitas:  
  - "だれ"  
  - "どこ"  
  - "いつ"  
  - "なに"  
respuesta: "だれ"
```

### 25 — どこ  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "formacion-de-preguntas"  
  nivel: "N5"  
  tags: ["lugar", "partícula-の"]  
pasos:  
  - "Usar la partícula correcta para preguntar sobre una línea específica de tren."  
enunciado: "東京駅で______線に乗り換えますか。"
opciones_explicitas:  
  - "どの"  
  - "どこ"  
  - "だれ"  
  - "いつ"  
respuesta: "どの"
```
