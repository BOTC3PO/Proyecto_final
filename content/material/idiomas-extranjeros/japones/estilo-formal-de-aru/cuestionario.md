> **Nota de corrección:** Este cuestionario fue corregido a partir del borrador en
> `_borradores-gemma/idiomas-extranjeros/japones/estilo-formal-de-aru/cuestionario_crudo.md`
> mediante el script `mechanical_fix_idiomas.py`. A los 25 bloques les faltaba el
> `enunciado:`; como cada bloque ya era una opción múltiple autocontenida (las propias
> `opciones_explicitas:` son oraciones completas y comparables entre sí), se añadió
> una metapregunta genérica ("¿Cuál es la oración gramaticalmente correcta?") en vez
> de redactar una pregunta distinta para cada uno. Se corrigió además una
> inconsistencia conceptual repetida en 4 bloques: el texto hablaba de "negar el
> estado de una puerta cerrada", pero あります/ありません expresa existencia, no
> estado -- se corrigió la explicación para aclarar que "ドアがありません" niega que
> haya una puerta, a diferencia de "ドアが閉まっています" (que describe su estado).

### 1 — 部屋にある物
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estilo-formal-de-aru"
  nivel: "N2"
  tags: ["existencia", "objeto-inanimado"]
pasos:
  - "Identificar el sujeto y el contexto del enunciado."
  - "Seleccionar la forma correcta de 'aru' según el sujeto."
explicacion: "La expresión 'あります' se usa para indicar existencia o posesión formal cuando el sujeto es un objeto inanimado. En este caso, '本' (libro) es un objeto no vivo."
tipo: mc
enunciado: "¿Cuál es la oración gramaticalmente correcta?"
opciones_explicitas:
  - "本があります。"
  - "本がいます。"
  - "本がありません。"
respuesta: "本があります。"
```

### 2 — Negar la existencia de un objeto
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estilo-formal-de-aru"
  nivel: "N2"
  tags: ["comunicación", "negativa"]
enunciado: "Querés decir, de manera formal, que NO hay un teléfono. ¿Qué oración usás?"
tipo: mc
opciones_explicitas:
  - "電話があります。"
  - "電話がありません。"
  - "電話がいます。"
respuesta: "電話がありません。"
explicacion: "'ありません' es la forma negativa formal de あります; 電話 es un objeto inanimado."
```

### 3 — Existencia de un objeto en un lugar
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estilo-formal-de-aru"
  nivel: "N2"
  tags: ["ubicación", "possession"]
enunciado: "Querés decir que en la oficina hay un libro (objeto inanimado). ¿Qué oración usás?"
tipo: mc
opciones_explicitas:
  - "オフィスに本があります。"
  - "オフィスに本がいます。"
  - "オフィスに本がありません。"
respuesta: "オフィスに本があります。"
explicacion: "Los objetos inanimados usan あります; います es para seres animados."
```

### 4 — Existencia de un mueble
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estilo-formal-de-aru"
  nivel: "N2"
  tags: ["combinación", "sujeto"]
enunciado: "Querés decir que hay una silla. ¿Qué oración usás?"
tipo: mc
opciones_explicitas:
  - "椅子があります。"
  - "椅子がいます。"
  - "椅子がありません。"
respuesta: "椅子があります。"
explicacion: "椅子 es un objeto: se usa あります, no います."
```

### 5 — Existencia de algo inanimado en un lugar
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estilo-formal-de-aru"
  nivel: "N2"
  tags: ["tiempo", "existencia"]
enunciado: "Querés decir que en el calendario hay un día marcado (algo inanimado). ¿Qué oración usás?"
tipo: mc
opciones_explicitas:
  - "カレンダーに日があります。"
  - "カレンダーに日がいます。"
  - "カレンダーに日がありません。"
respuesta: "カレンダーに日があります。"
explicacion: "Para cosas inanimadas la existencia se expresa con あります."
```

### 6 — Negar la existencia de una puerta
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estilo-formal-de-aru"
  nivel: "N2"
  tags: ["condición", "negativa"]
enunciado: "Querés decir que NO hay puerta. ¿Qué oración usás?"
tipo: mc
opciones_explicitas:
  - "ドアが閉まっています。"
  - "ドアがあります。"
  - "ドアがありません。"
respuesta: "ドアがありません。"
explicacion: "La negación formal de la existencia es ありません."
```

### 7 — Existencia de un mueble en un lugar
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estilo-formal-de-aru"
  nivel: "N2"
  tags: ["contexto", "uso"]
enunciado: "Querés decir que en la sala de espera hay una mesa. ¿Qué oración usás?"
tipo: mc
opciones_explicitas:
  - "待合室にテーブルがあります。"
  - "待合室にテーブルがいます。"
  - "待合室にテーブルがありません。"
respuesta: "待合室にテーブルがあります。"
explicacion: "テーブル es un objeto inanimado: あります."
```

### 8 — Existencia sobre una superficie
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estilo-formal-de-aru"
  nivel: "N2"
  tags: ["combinación", "sujeto"]
enunciado: "Querés decir que sobre el escritorio hay un lápiz. ¿Qué oración usás?"
tipo: mc
opciones_explicitas:
  - "机の上に鉛筆があります。"
  - "机の上に鉛筆がいます。"
  - "机の上に鉛筆がありません。"
respuesta: "机の上に鉛筆があります。"
explicacion: "鉛筆 es un objeto: se usa あります."
```

### 9 — Negar la existencia de una ventana
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estilo-formal-de-aru"
  nivel: "N2"
  tags: ["condición", "negativa"]
enunciado: "Querés decir que NO hay ventana. ¿Qué oración usás?"
tipo: mc
opciones_explicitas:
  - "窓がありません。"
  - "窓がいます。"
  - "窓があります。"
respuesta: "窓がありません。"
explicacion: "La forma negativa formal de あります es ありません."
```

### 10 — ございます
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estilo-formal-de-aru"
  nivel: "N2"
  tags: ["existencia", "objeto-inanimado"]
enunciado: "En atención al cliente, para decir con máxima cortesía «hay una reunión a las tres» se dice:"
tipo: mc
opciones_explicitas:
  - "三時に会議がございます。"
  - "三時に会議がいらっしゃいます。"
  - "三時に会議があるでございます。"
respuesta: "三時に会議がございます。"
explicacion: "ございます es la forma muy formal (kenjōgo/teineigo) de あります."
```

### 11 — Equivalente formal de あります
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estilo-formal-de-aru"
  nivel: "N2"
  tags: ["existencia", "objeto-inanimado"]
enunciado: "El equivalente muy formal de あります es:"
tipo: mc
opciones_explicitas:
  - "ございます"
  - "いらっしゃいます"
  - "おります"
respuesta: "ございます"
explicacion: "いらっしゃいます y おります son para personas; ございます es para cosas."
```

### 12 — Negativo muy formal
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estilo-formal-de-aru"
  nivel: "N2"
  tags: ["existencia", "objeto-inanimado"]
enunciado: "«ございません» es la forma muy formal de:"
tipo: mc
opciones_explicitas:
  - "ありません"
  - "いません"
  - "ありました"
respuesta: "ありません"
explicacion: "ございません reemplaza a ありません."
```

### 13 — Ofrecer un servicio
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estilo-formal-de-aru"
  nivel: "N2"
  tags: ["existencia", "objeto-inanimado"]
enunciado: "Para decir con cortesía que hay un asiento libre:"
tipo: mc
opciones_explicitas:
  - "空席がございます。"
  - "空席がおります。"
  - "空席がいらっしゃいます。"
respuesta: "空席がございます。"
explicacion: "Para cosas se usa ございます; おります e いらっしゃいます son para personas."
```

### 14 — Humilde de います
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estilo-formal-de-aru"
  nivel: "N2"
  tags: ["existencia", "objeto-inanimado"]
enunciado: "La forma humilde de います («estoy/estamos aquí») es:"
tipo: mc
opciones_explicitas:
  - "おります"
  - "ございます"
  - "いらっしゃる"
respuesta: "おります"
explicacion: "おります es el humilde de います; いらっしゃる es honorífico."
```

### 15 — Honorífico de います
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estilo-formal-de-aru"
  nivel: "N2"
  tags: ["existencia", "objeto-inanimado"]
enunciado: "El honorífico de います para una persona respetable es:"
tipo: mc
opciones_explicitas:
  - "いらっしゃいます"
  - "おります"
  - "ございます"
respuesta: "いらっしゃいます"
explicacion: "いらっしゃる es el honorífico de いる/行く/来る."
```

### 16 — Pasado muy formal
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estilo-formal-de-aru"
  nivel: "N2"
  tags: ["existencia", "objeto-inanimado"]
enunciado: "El pasado muy formal de ございます es:"
tipo: mc
opciones_explicitas:
  - "ございました"
  - "ございます"
  - "ございません"
respuesta: "ございました"
explicacion: "El pasado se forma con ございました."
```

### 17 — Completar con ございます
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estilo-formal-de-aru"
  nivel: "N2"
  tags: ["existencia", "objeto-inanimado"]
enunciado: "こちらがメニューで___。"
tipo: completar
respuestas_validas:
  - "ございます"
explicacion: "Estilo muy formal: こちらがメニューでございます."
```

### 18 — Completar con ございます
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estilo-formal-de-aru"
  nivel: "N2"
  tags: ["existencia", "objeto-inanimado"]
enunciado: "ただいま満席で___。"
tipo: completar
respuestas_validas:
  - "ございます"
explicacion: "ただいま満席でございます = en este momento no hay mesas libres."
```

### 19 — ございます con seres vivos
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estilo-formal-de-aru"
  nivel: "N2"
  tags: ["existencia", "objeto-inanimado"]
enunciado: "ございます se puede usar para reemplazar a います cuando se habla de personas."
tipo: vf
respuesta: falso
explicacion: "ございます solo reemplaza a あります (cosas); para personas se usan いらっしゃいます (honorífico) u おります (humilde)."
```

### 20 — Disculpa formal
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "estilo-formal-de-aru"
  nivel: "N2"
  tags: ["existencia", "objeto-inanimado"]
enunciado: "«申し訳ございません» es una forma muy formal de pedir disculpas."
tipo: vf
respuesta: verdadero
explicacion: "申し訳ございません es la disculpa estándar en atención al cliente."
```
