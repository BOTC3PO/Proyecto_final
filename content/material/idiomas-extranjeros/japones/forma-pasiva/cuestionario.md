# Idiomas — Japonés — forma-pasiva (cuestionario)

> Corregido a partir del borrador en `../../../_borradores-gemma/idiomas-extranjeros/japones/forma-pasiva/cuestionario_crudo.md`. De los 22 bloques, 15 tenían el `enunciado:` partido en un fence YAML separado y mal formado (con una clave `variables:` rota por comillas sin escapar), y los 7 restantes carecían de `tipo:` y `enunciado:` por completo, con `metadata.materia` truncado a `"japones"` y títulos que no correspondían al verbo realmente evaluado (p. ej. "知ると受動態" probando en realidad 作る, o "信じると受動態" probando 立てる) — corregidos para que el título coincida con el verbo. Errores de contenido corregidos: dos bloques (持つ) confundían la pasiva de 持つ con la de un verbo distinto 持ち込む; dos bloques (壊れる) usaban el pasado llano del intransitivo 壊れる como si fuera la pasiva, cuando la pasiva real requiere el transitivo 壊す→壊される; dos bloques usaban 誰かが en vez de 誰かに/によって para marcar al agente de la pasiva; y un bloque mc tenía la opción "提案し" duplicada.

---

### 1 — 書くの受動態
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-pasiva"
  nivel: "N3"
  tags: ["pasivo", "verbo-regular"]
pasos:
  - "Identificar el verbo en la oración y aplicar la forma pasiva."
enunciado: "この本は誰かに＿＿。"
tipo: completar
respuestas_validas:
  - "書かれた"
  - "書かれました"
explicacion: "El verbo '書く' (escribir) se convierte en '書かれる/書かれた' en forma pasiva. El agente de la pasiva se marca con 'に' ('誰かに' = 'por alguien'), nunca con 'が'."
```

### 2 — 閉めるの受動態
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-pasiva"
  nivel: "N3"
  tags: ["pasivo", "verbo-regular"]
pasos:
  - "Convertir el verbo transitivo '閉める' (cerrar algo) a su forma pasiva en pasado."
enunciado: "ドアは誰かに＿＿。"
tipo: completar
respuestas_validas:
  - "閉められた"
  - "閉められました"
explicacion: "El verbo transitivo '閉める' (cerrar algo) tiene pasiva '閉められる/閉められた'. El intransitivo '閉まる' (cerrarse por sí solo) no admite un agente pasivo con 'に', por eso no puede usarse aquí."
```

### 3 — 見られるの活用
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-pasiva"
  nivel: "N3"
  tags: ["pasivo", "verbo-regular"]
pasos:
  - "Identificar la forma correcta del verbo '見る' en contexto de vigilancia."
enunciado: "彼は誰かに＿＿。"
tipo: completar
respuestas_validas:
  - "見られている"
  - "見られます"
explicacion: "La forma '見られている' indica que algo está siendo observado actualmente. Es común en situaciones de vigilancia o seguimiento."
```

### 4 — 開けるの受動態
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-pasiva"
  nivel: "N3"
  tags: ["pasivo", "verbo-regular"]
pasos:
  - "Convertir el verbo '開ける' (abrir) a su forma pasiva en contexto de un accidente."
enunciado: "窓は誰かによって＿＿。"
tipo: completar
respuestas_validas:
  - "開けられた"
  - "開かれました"
explicacion: "El verbo '開ける' se convierte en '開けられた' para indicar que algo fue abierto por alguien, como en el caso de una puerta forzada."
```

### 5 — 持つの受動態
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-pasiva"
  nivel: "N3"
  tags: ["pasivo", "verbo-regular"]
pasos:
  - "Identificar la forma pasiva correcta del verbo '持つ' (tener/sostener) para expresar una opinión ampliamente compartida."
enunciado: "その意見は多くの人に＿＿。"
tipo: completar
respuestas_validas:
  - "持たれている"
  - "持たれます"
explicacion: "La pasiva de '持つ' es '持たれる' ('ser sostenido/tenido por alguien'): 'その意見は多くの人に持たれている' = 'esa opinión la sostiene mucha gente'. No confundir con '持ち込まれる', que es la pasiva del verbo distinto '持ち込む' ('traer/llevar dentro')."
```

### 6 — 壊すの受動態
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-pasiva"
  nivel: "N3"
  tags: ["pasivo", "verbo-regular"]
pasos:
  - "Convertir el verbo transitivo '壊す' (romper algo) a su forma pasiva en contexto de un accidente."
enunciado: "この食器は誰かによって＿＿。"
tipo: completar
respuestas_validas:
  - "壊された"
  - "壊されました"
explicacion: "La pasiva de '壊す' (romper algo, transitivo) es '壊される/壊された'. El intransitivo '壊れる' (romperse por sí solo) no lleva agente con 'によって', por lo que no sirve para expresar que ALGUIEN rompió el objeto."
```

### 7 — 関与するの受動態
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-pasiva"
  nivel: "N3"
  tags: ["pasivo", "verbo-regular"]
pasos:
  - "Identificar la forma correcta del verbo '関与する' (participar) en contexto de una discusión."
enunciado: "この議論は誰かによって＿＿。"
tipo: completar
respuestas_validas:
  - "関与された"
  - "関与されました"
explicacion: "El verbo '関与する' se convierte en '関与された' para indicar que alguien tuvo participación en algo, como en el caso de un debate."
```

### 8 — 感じるの受動態
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-pasiva"
  nivel: "N3"
  tags: ["pasivo", "verbo-regular"]
pasos:
  - "Convertir el verbo '感じる' (sentir) a su forma pasiva en contexto de una emoción."
enunciado: "彼の言葉は誰かによって＿＿。"
tipo: completar
respuestas_validas:
  - "感じられた"
  - "感じられました"
explicacion: "El verbo '感じる' se convierte en '感じられた' para indicar que algo fue sentido por alguien, como en el caso de un sentimiento compartido."
```

### 9 — 知るの受動態
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-pasiva"
  nivel: "N3"
  tags: ["pasivo", "verbo-regular"]
pasos:
  - "Identificar la forma correcta del verbo '知る' (saber) en contexto de información."
enunciado: "この情報は誰かによって＿＿。"
tipo: completar
respuestas_validas:
  - "知られた"
  - "知られました"
explicacion: "El verbo '知る' se convierte en '知られた' para indicar que algo fue sabido por alguien, como en el caso de un secreto revelado."
```

### 10 — 信じるの受動態
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-pasiva"
  nivel: "N3"
  tags: ["pasivo", "verbo-regular"]
pasos:
  - "Convertir el verbo '信じる' (creer) a su forma pasiva en contexto de un mito."
enunciado: "この伝説は誰かによって＿＿。"
tipo: completar
respuestas_validas:
  - "信じられた"
  - "信じられました"
explicacion: "El verbo '信じる' se convierte en '信じられた' para indicar que algo fue creído por alguien, como en el caso de una leyenda urbana."
```

### 11 — 関与するの受動態（複数形）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-pasiva"
  nivel: "N3"
  tags: ["pasivo", "verbo-regular"]
pasos:
  - "Identificar la forma correcta del verbo '関与する' (participar) en contexto de un grupo."
enunciado: "このキャンペーンは誰かによって＿＿。"
tipo: completar
respuestas_validas:
  - "関与された"
  - "関与されました"
explicacion: "El verbo '関与する' se convierte en '関与された' para indicar participación colectiva, como en el caso de una campaña."
```

### 12 — 感じるの受動態（複数形）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-pasiva"
  nivel: "N3"
  tags: ["pasivo", "verbo-regular"]
pasos:
  - "Convertir el verbo '感じる' (sentir) a su forma pasiva en contexto de un grupo."
enunciado: "彼らの反応は誰かによって＿＿。"
tipo: completar
respuestas_validas:
  - "感じられた"
  - "感じられました"
explicacion: "El verbo '感じる' se convierte en '感じられた' para indicar que algo fue sentido colectivamente, como una emoción compartida."
```

### 13 — 作るの受動態
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-pasiva"
  nivel: "N3"
  tags: ["pasivo", "narrativa"]
pasos:
  - "Identificar el sujeto y el verbo en la oración."
  - "Aplicar la estructura pasiva: [sujeto] + に/によって + [verbo en te-forma] + られる."
enunciado: "この伝統工芸品は、職人の手によって＿＿。"
tipo: completar
respuestas_validas:
  - "作られる"
  - "作られ"
explicacion: "La forma pasiva '～られる' indica que la acción fue realizada por alguien: '職人の手によって作られる' = 'está hecho por las manos de un artesano'."
```

### 14 — 主催するの受動態
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-pasiva"
  nivel: "N3"
  tags: ["pasivo", "organización"]
pasos:
  - "Reconocer el contexto de organización de un evento."
  - "Seleccionar la forma pasiva correcta para '主催する' (organizar)."
enunciado: "そのイベントは、地元の団体に＿＿。"
opciones_explicitas:
  - "主催される"
  - "主催する"
  - "主催し"
  - "主催され"
respuesta: "主催される"
tipo: mc
explicacion: "La forma pasiva '～される' se usa para acciones realizadas por terceros. Aquí, '主催する' (organizar) se transforma en '主催される', indicando que un tercero organizó el evento."
```

### 15 — 持つの受動態（複数形）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-pasiva"
  nivel: "N3"
  tags: ["pasivo", "verbo-regular"]
pasos:
  - "Identificar la forma pasiva correcta del verbo '持つ' (tener/sostener) para varias opiniones compartidas."
enunciado: "これらの意見は、地域の住民に＿＿。"
tipo: completar
respuestas_validas:
  - "持たれている"
  - "持たれます"
explicacion: "Como en el bloque 5, la pasiva de '持つ' es '持たれる': 'これらの意見は地域の住民に持たれている' = 'estas opiniones las sostienen los vecinos de la zona'."
```

### 16 — 開けるの受動態（複数形）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-pasiva"
  nivel: "N3"
  tags: ["pasivo", "verbo-regular"]
pasos:
  - "Convertir el verbo '開ける' (abrir) a su forma pasiva en contexto de un accidente colectivo."
enunciado: "これらの窓は誰かによって＿＿。"
tipo: completar
respuestas_validas:
  - "開けられた"
  - "開かれました"
explicacion: "El verbo '開ける' se convierte en '開けられた' para indicar que varias ventanas fueron abiertas por alguien."
```

### 17 — 壊すの受動態（複数形）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-pasiva"
  nivel: "N3"
  tags: ["pasivo", "verbo-regular"]
pasos:
  - "Identificar la forma pasiva correcta del verbo transitivo '壊す' (romper algo) en contexto de un accidente colectivo."
enunciado: "これらの食器は誰かによって＿＿。"
tipo: completar
respuestas_validas:
  - "壊された"
  - "壊されました"
explicacion: "Como en el bloque 6, la pasiva de '壊す' (romper algo) es '壊される/壊された', a diferencia del intransitivo '壊れる' (romperse solo), que no admite agente."
```

### 18 — 送るの受動態
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-pasiva"
  nivel: "N3"
  tags: ["pasivo", "comunicación"]
pasos:
  - "Determinar el verbo asociado al mensaje."
  - "Aplicar la estructura pasiva para '送る' (enviar)."
enunciado: "このメッセージは、毎回同じ人から＿＿。"
tipo: completar
respuestas_validas:
  - "送られる"
  - "送られ"
explicacion: "El verbo '送る' se convierte en '送られる' para expresar que el mensaje es enviado por alguien: 'このメッセージは毎回同じ人から送られる' = 'este mensaje lo envía siempre la misma persona'."
```

### 19 — 提案するの受動態
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-pasiva"
  nivel: "N3"
  tags: ["pasivo", "problemas"]
pasos:
  - "Identificar el verbo clave en la oración."
  - "Aplicar la forma pasiva a '提案する' (proponer)."
enunciado: "その新しい企画は、会議で＿＿。"
opciones_explicitas:
  - "提案される"
  - "提案させる"
  - "提案した"
  - "提案します"
respuesta: "提案される"
tipo: mc
explicacion: "La pasiva de '提案する' es '提案される': 'その新しい企画は会議で提案される' = 'ese nuevo proyecto se propone en la reunión'. '提案させる' es el causativo (no pasivo) y '提案します'/'提案した' están en voz activa."
```

### 20 — なすの受動態
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-pasiva"
  nivel: "N3"
  tags: ["pasivo", "gobierno"]
pasos:
  - "Reconocer el contexto de toma de medidas."
  - "Aplicar la forma pasiva a 'なす' (hacer, registro formal)."
enunciado: "その問題に対して、常に迅速な対策が＿＿。"
tipo: completar
respuestas_validas:
  - "なされる"
  - "なされ"
explicacion: "El verbo formal 'なす' (hacer) en pasiva es 'なされる': '迅速な対策がなされる' = 'se toman medidas rápidas', una expresión fija muy usada en textos formales/periodísticos."
```

### 21 — 立てるの受動態
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-pasiva"
  nivel: "N3"
  tags: ["pasivo", "estrategia"]
pasos:
  - "Identificar el verbo asociado al plan."
  - "Aplicar la estructura pasiva a '立てる' (establecer)."
enunciado: "来年度の計画は、すでに＿＿。"
opciones_explicitas:
  - "立てられる"
  - "立てし"
  - "立てられ"
  - "立てた"
respuesta: "立てられる"
tipo: mc
explicacion: "El verbo '立てる' (establecer un plan) en forma pasiva es '立てられる': '来年度の計画はすでに立てられる' = 'el plan del próximo año ya está establecido'. '立てた' está en voz activa y '立てし' no es una forma válida en japonés moderno."
```

### 22 — 提案するの受動態（複数形）
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "forma-pasiva"
  nivel: "N3"
  tags: ["pasivo", "innovación"]
pasos:
  - "Determinar el verbo relacionado con la idea."
  - "Convertir '提案する' en su forma pasiva."
enunciado: "そのアイデアは、若い社員から＿＿。"
tipo: completar
respuestas_validas:
  - "提案される"
  - "提案され"
explicacion: "La forma pasiva de '提案する' (proponer) es '提案される': 'そのアイデアは若い社員から提案される' = 'esa idea la propone un empleado joven'."
```

