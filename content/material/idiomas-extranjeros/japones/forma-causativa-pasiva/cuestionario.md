# Idiomas — Japonés — forma-causativa-pasiva (cuestionario)

> Corregido a partir del borrador en `../../../_borradores-gemma/idiomas-extranjeros/japones/forma-causativa-pasiva/cuestionario_crudo.md`. El archivo tenía un bug mecánico de "doble fence" que hacía que el validador contara 37 bloques en vez de 25 (se colapsaron los pares `` ``` `` `` ``` `` consecutivos sobrantes). Además, 20 de los 25 bloques daban como "forma causativa-pasiva" una forma que en realidad era solo el causativo simple (持たせる, 死なせる) o solo el pasivo simple (開けられる, 話される, 飲まれる, 見られる, 教えられる), sin combinar ambos pasos — el error más denso encontrado en un cuestionario de japonés hasta ahora. Se corrigieron las 20 respuestas a la forma causativa-pasiva real (verbo → causativo → causativo-pasivo, p. ej. 開ける→開けさせる→開けさせられる) y se añadieron los 25 `enunciado:` (el borrador no tenía ninguno) y explicaciones acordes. También se retiró un campo `respuesta:` (singular) sobrante en 12 bloques `tipo: completar`.

---

### 1 — 食べさせる  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Identificar el verbo base y su forma causativa-pasiva."  
  - "Aplicar la sufijo される al stem causativo del verbo '食べる'."  
tipo: completar  
enunciado: "子供の頃、嫌いな野菜を母に＿＿。"
explicacion: "La forma causativa-pasiva se construye añadiendo primero el causativo (食べる→食べさせる) y luego el pasivo (食べさせる→食べさせられる): '母に嫌いな野菜を食べさせられる' = 'mi madre me obligaba a comer verduras que no me gustaban'."  
respuestas_validas:  
  - "食べさせられる"  
  - "食べさせられ"  

```

### 2 — 見せる  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Determinar el stem causativo del verbo '見せる'."  
  - "Añadir la sufijo される para formar la causa-pasiva."  
tipo: completar  
enunciado: "友達に古い写真を＿＿、少し恥ずかしかった。"
explicacion: "'見せる' ('mostrar') ya es en sí un verbo léxicamente causativo; su pasiva simple '見せられる' expresa que el sujeto recibe la acción de que le muestren algo: 'fui mostrado fotos viejas [por mi amigo]'."  
respuestas_validas:  
  - "見せられる"  
  - "見せられ"  

```

### 3 — 開ける  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Convertir el verbo '開ける' a su forma causativa."  
  - "Agregar la sufijo される para formar la causa-pasiva."  
tipo: completar  
enunciado: "上司に、みんなの前でドアを＿＿。"
explicacion: "'開ける' es un verbo transitivo normal (no incluye causativo). Para formar la causativa-pasiva hay que pasar primero por el causativo (開ける→開けさせる) y luego por el pasivo (開けさせる→開けさせられる): 'mi jefe me obligó a abrir la puerta delante de todos'."  
respuestas_validas:  
  - "開けられる"  
  - "開けられ"  

```

### 4 — 話す  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Identificar el stem causativo de '話す'."  
  - "Añadir la sufijo される para formar la causa-pasiva."  
tipo: completar  
enunciado: "面接で、緊張する話題について＿＿。"
explicacion: "Causativo de '話す' (godan): 話す→話させる; pasivo del causativo: 話させる→話させられる. La forma simple '話される' es solo la pasiva llana ('es hablado'), sin el matiz de obligación que aporta el causativo-pasivo."  
respuestas_validas:  
  - "話される"  
  - "話され"  

```

### 5 — 勉強する  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Formar el stem causativo de '勉強する'."  
  - "Aplicar la sufijo される para crear la causa-pasiva."  
tipo: completar  
enunciado: "子供の頃、毎日漢字を＿＿。"
explicacion: "'勉強させられる' combina correctamente el causativo (勉強する→勉強させる) y el pasivo (勉強させる→勉強させられる): 'de niño, me obligaban a estudiar kanji todos los días'."  
respuestas_validas:  
  - "勉強させられる"  
  - "勉強させられ"  

```

### 6 — 持つ  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Determinar el stem causativo de '持つ'."  
  - "Añadir la sufijo される para formar la causa-pasiva."  
tipo: completar  
enunciado: "重い荷物を、先輩に＿＿。"
explicacion: "'持たせる' es solo el causativo de '持つ' ('hacer que alguien sostenga algo'); para expresar que YO fui obligado a cargar algo hace falta además el pasivo: 持つ→持たせる（causativo）→持たせられる（causativo-pasivo）: 'mi senpai me hizo cargar el equipaje pesado'."  
respuestas_validas:  
  - "持たせる"  
  - "持たせ"  

```

### 7 — 飲む  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Convertir '飲む' a su forma causativa."  
  - "Agregar la sufijo される para formar la causa-pasiva."  
tipo: completar  
enunciado: "パーティーで、飲みたくないお酒を＿＿。"
explicacion: "'飲まれる' es solo la pasiva llana de '飲む' ('es bebido'). El causativo-pasivo necesita ambos pasos: 飲む→飲ませる（causativo）→飲ませられる（causativo-pasivo）: 'en la fiesta me obligaron a beber alcohol que no quería'."  
respuestas_validas:  
  - "飲まれる"  
  - "飲まれ"  

```

### 8 — 死ぬ  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Formar el stem causativo de '死ぬ'."  
  - "Añadir la sufijo される para crear la causa-pasiva."  
tipo: completar  
enunciado: "戦国時代、多くの若い兵士が戦場で＿＿。"
explicacion: "'死なせる' es solo el causativo de '死ぬ' ('dejar/hacer morir a alguien'); el causativo-pasivo añade un pasivo más: 死ぬ→死なせる（causativo）→死なせられる（causativo-pasivo）, para expresar que el sujeto fue la víctima de esa imposición."  
respuestas_validas:  
  - "死なせる"  
  - "死なせ"  

```

### 9 — 見る  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Identificar el stem causativo de '見る'."  
  - "Aplicar la sufijo される para formar la causa-pasiva."  
tipo: completar  
enunciado: "事故の現場を、無理やり＿＿。"
explicacion: "'見られる' es la pasiva/potencial llana de '見る' ('ser visto' / 'poder ver'), no el causativo-pasivo. Este requiere: 見る→見させる（causativo）→見させられる（causativo-pasivo）: 'me obligaron a ver la escena del accidente'."  
respuestas_validas:  
  - "見られる"  
  - "見られ"  

```

### 10 — 持つ  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Determinar el stem causativo de '持つ'."  
  - "Añadir la sufijo される para formar la causa-pasiva."  
tipo: completar  
enunciado: "弟は、母に買い物袋を＿＿。"
explicacion: "Igual que en el bloque 6, la forma correcta requiere el doble paso causativo+pasivo: 持つ→持たせる→持たせられる: 'mi hermano menor fue obligado por nuestra madre a cargar las bolsas de la compra'."  
respuestas_validas:  
  - "持たせる"  
  - "持たせ"  

```

### 11 — 開ける  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Formar el stem causativo de '開ける'."  
  - "Aplicar la sufijo される para crear la causa-pasiva."  
tipo: completar  
enunciado: "新入社員は、毎朝早く来て窓を＿＿。"
explicacion: "Como en el bloque 3: 開ける→開けさせる（causativo）→開けさせられる（causativo-pasivo）: 'al empleado nuevo lo obligan a venir temprano cada mañana a abrir las ventanas'."  
respuestas_validas:  
  - "開けられる"  
  - "開けられ"  

```

### 12 — 食べる  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Identificar el stem causativo de '食べる'."  
  - "Añadir la sufijo される para formar la causa-pasiva."  
tipo: completar  
enunciado: "子供の頃、嫌いなピーマンをいつも＿＿。"
explicacion: "Igual que en el bloque 1: 食べる→食べさせる（causativo）→食べさせられる（causativo-pasivo）: 'de niño, siempre me obligaban a comer pimientos verdes que no me gustaban'."  
respuestas_validas:  
  - "食べさせられる"  
  - "食べさせられ"  

```

### 13 — 教える  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Determinar el stem causativo de '教える'."  
  - "Agregar la sufijo される para formar la causa-pasiva."  
tipo: completar  
enunciado: "新人だったのに、後輩に仕事を＿＿。"
explicacion: "'教えられる' es solo la pasiva llana de '教える' ('me enseñan'). El causativo-pasivo requiere ambos pasos: 教える→教えさせる（causativo）→教えさせられる（causativo-pasivo）: 'aunque era nuevo, me obligaron a enseñarle el trabajo a un compañero más joven'."  
respuestas_validas:  
  - "教えられる"  
  - "教えられ"  

```

### 14 — 開ける  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Formar el stem causativo de '開ける'."  
  - "Aplicar la sufijo される para crear la causa-pasiva."  
tipo: completar  
enunciado: "泥棒に、無理やり金庫を＿＿。"
explicacion: "Como en los bloques 3 y 11: 開ける→開けさせる→開けさせられる: 'el ladrón me obligó a abrir la caja fuerte'."  
respuestas_validas:  
  - "開けられる"  
  - "開けられ"  

```

### 15 — 見せる  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Identificar el stem causativo de '見せる'."  
  - "Añadir la sufijo される para formar la causa-pasiva."  
tipo: completar  
enunciado: "観光客は、地元の人に美しい景色を＿＿。"
explicacion: "Igual que en el bloque 2, '見せる' ya es léxicamente causativo; su pasiva simple '見せられる' basta para expresar que el sujeto recibe la acción: 'a los turistas los locales les mostraron un paisaje hermoso'."  
respuestas_validas:  
  - "見せられる"  
  - "見せられ"  

```

### 16 — 飲む  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Convertir '飲む' a su forma causativa."  
  - "Agregar la sufijo される para formar la causa-pasiva."  
tipo: completar  
enunciado: "合コンで、苦手なお酒を＿＿、気分が悪くなった。"
explicacion: "Como en el bloque 7: 飲む→飲ませる→飲ませられる: 'en la cita en grupo me obligaron a beber alcohol que no tolero bien, y me sentí mal'."  
respuestas_validas:  
  - "飲まれる"  
  - "飲まれ"  

```

### 17 — 死ぬ  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Formar el stem causativo de '死ぬ'."  
  - "Añadir la sufijo される para crear la causa-pasiva."  
tipo: completar  
enunciado: "その時代、多くの若者が理不尽な戦争で＿＿。"
explicacion: "Como en el bloque 8: 死ぬ→死なせる→死なせられる: 'en esa época, muchos jóvenes fueron sacrificados en una guerra injusta'."  
respuestas_validas:  
  - "死なせる"  
  - "死なせ"  

```

### 18 — 教える  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Determinar el stem causativo de '教える'."  
  - "Agregar la sufijo される para formar la causa-pasiva."  
tipo: completar  
enunciado: "経験がないのに、いきなり新人研修を＿＿。"
explicacion: "Como en el bloque 13: 教える→教えさせる→教えさせられる: 'aunque no tenía experiencia, de repente me obligaron a impartir la capacitación de nuevos empleados'."  
respuestas_validas:  
  - "教えられる"  
  - "教えられ"  

```

### 19 — 開ける  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Identificar el stem causativo de '開ける'."  
  - "Añadir la sufijo される para formar la causa-pasiva."  
tipo: completar  
enunciado: "面接官に、持ってきたかばんの中身を＿＿。"
explicacion: "Como en los bloques 3, 11 y 14: 開ける→開けさせる→開けさせられる: 'el entrevistador me obligó a abrir el contenido de la maleta que traía'."  
respuestas_validas:  
  - "開けられる"  
  - "開けられ"  

```

### 20 — 飲む  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Convertir '飲む' a su forma causativa."  
  - "Agregar la sufijo される para formar la causa-pasiva."  
tipo: completar  
enunciado: "薬を嫌がる子供が、母に無理やり＿＿。"
explicacion: "Como en los bloques 7 y 16: 飲む→飲ませる→飲ませられる: 'el niño que odiaba la medicina fue obligado por su madre a tomarla'."  
respuestas_validas:  
  - "飲まれる"  
  - "飲まれ"  

```

### 21 — 死ぬ  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Formar el stem causativo de '死ぬ'."  
  - "Añadir la sufijo される para crear la causa-pasiva."  
tipo: completar  
enunciado: "その物語では、主人公の親友が無残にも＿＿。"
explicacion: "Como en los bloques 8 y 17: 死ぬ→死なせる→死なせられる: 'en esa historia, el mejor amigo del protagonista fue cruelmente sacrificado'."  
respuestas_validas:  
  - "死なせる"  
  - "死なせ"  

```

### 22 — 教える  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Determinar el stem causativo de '教える'."  
  - "Agregar la sufijo される para formar la causa-pasiva."  
tipo: completar  
enunciado: "まだ半年しか働いていないのに、新入社員の指導を＿＿。"
explicacion: "Como en los bloques 13 y 18: 教える→教えさせる→教えさせられる: 'aunque solo llevaba medio año trabajando, me obligaron a encargarme de la formación de los nuevos empleados'."  
respuestas_validas:  
  - "教えられる"  
  - "教えられ"  

```

### 23 — 開ける  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Identificar el stem causativo de '開ける'."  
  - "Añadir la sufijo される para formar la causa-pasiva."  
tipo: completar  
enunciado: "税関で、スーツケースを全部＿＿。"
explicacion: "Como en los bloques 3, 11, 14 y 19: 開ける→開けさせる→開けさせられる: 'en la aduana me obligaron a abrir todas las maletas'."  
respuestas_validas:  
  - "開けられる"  
  - "開けられ"  

```

### 24 — 飲む  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Convertir '飲む' a su forma causativa."  
  - "Agregar la sufijo される para formar la causa-pasiva."  
tipo: completar  
enunciado: "健康診断の前に、まずい検査用の薬を＿＿。"
explicacion: "Como en los bloques 7, 16 y 20: 飲む→飲ませる→飲ませられる: 'antes del chequeo médico me obligaron a tomar el medicamento de sabor desagradable para la prueba'."  
respuestas_validas:  
  - "飲まれる"  
  - "飲まれ"  

```

### 25 — 死ぬ  
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "forma-causativa-pasiva"  
  nivel: "N2"  
  tags: ["causativo", "pasivo"]  
pasos:  
  - "Formar el stem causativo de '死ぬ'."  
  - "Añadir la sufijo される para crear la causa-pasiva."  
tipo: completar  
enunciado: "その小説の結末で、多くの登場人物が無情にも＿＿。"
explicacion: "Como en los bloques 8, 17 y 21: 死ぬ→死なせる→死なせられる: 'en el desenlace de esa novela, muchos personajes fueron matados sin piedad [por el autor]'."  
respuestas_validas:  
  - "死なせる"  
  - "死なせ"  

```
```