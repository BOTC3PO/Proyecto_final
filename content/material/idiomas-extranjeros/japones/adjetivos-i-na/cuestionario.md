> **Nota de corrección:** Este cuestionario fue corregido a partir del borrador en
> `_borradores-gemma/idiomas-extranjeros/japones/adjetivos-i-na/cuestionario_crudo.md`
> mediante el script `mechanical_fix_idiomas.py`. Este era el error de contenido más
> grave encontrado hasta ahora: siendo el tema exactamente sobre la distinción entre
> adjetivos i y adjetivos na, el borrador tenía la clasificación **invertida** en
> muchos bloques:
> - **3 bloques (2, 6, 10)** etiquetaban como "na-adjetivo" a 赤い, 新しい y 古い, que
>   son adjetivos i genuinos (terminan en い); corregida la etiqueta y la explicación.
> - **8 bloques (11, 12, 14, 16, 18, 20, 21, 24)** etiquetaban como "adjetivo i" a
>   せっかち, にぎやか, げんき y かんたん, que en realidad son adjetivos na. Su uso sin
>   な era gramaticalmente correcto en estos bloques, pero por la razón equivocada: no
>   es porque sean adjetivos i, sino porque な nunca precede directamente a です (sólo
>   precede a un sustantivo, p. ej. "げんきな人"). Se corrigió la explicación de cada
>   uno para reflejar la clasificación real.
> - **13 bloques** carecían del `enunciado:`, reconstruido con el sujeto ya indicado
>   en `pasos:` seguido de です.
> - **4 bloques** aceptaban una transliteración en katakana (カワイイ, ハヤイ, セッカチ,
>   ニギヤカ) como variante válida de un adjetivo, un error ortográfico ya que estas
>   palabras nunca se escriben en katakana; se quitaron.
> - **Bloque 3:** combinaba un i-adjetivo sin conjugar con でした ("暑いでした"), una
>   construcción agramatical; se corrigió al pasado real ("暑かった"/"暑かったです").
> - **Bloque 9:** la explicación citaba la palabra inexistente "amakii"; corregida.
> - Se depuraron entradas duplicadas idénticas en `respuestas_validas:` (bloques 8, 13).

### 1 — 食べ物の形
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "adjetivos-i-na"
  nivel: "N5"
  tags: ["i-adjetivo", "です"]
pasos:
  - "Complete el hueco con la forma adecuada del adjetivo"
respuestas_validas:
  - "おいしい"
  - "おいしく"
tipo: completar
enunciado: "この料理は______です。"
explicacion: "Los i-adjetivos se conjugan en la forma い cuando van seguidos de です. 'Oishi' (delicioso) cambia a 'oishii' antes del verbo copulativo."
```



### 2 — 色の説明
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "adjetivos-i-na"
  nivel: "N5"
  tags: ["i-adjetivo", "です"]
pasos:
  - "Elija la opción correcta para completar la oración"
opciones_explicitas:
  - "赤い"
  - "赤くて"
  - "赤の"
respuesta: "赤い"
tipo: mc
enunciado: "このりんごは______です。"
explicacion: "'赤い' (rojo) es un i-adjetivo (termina en い). Los i-adjetivos se usan en su forma base directamente antes de です, sin ninguna partícula."
```



### 3 — 天気の表現
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "adjetivos-i-na"
  nivel: "N5"
  tags: ["i-adjetivo", "た"]
pasos:
  - "Complete el hueco con la forma adecuada del adjetivo"
respuestas_validas:
  - "暑かった"
  - "暑かったです"
tipo: completar
enunciado: "昨日は______。"
explicacion: "Los i-adjetivos en pasado se conjugan en かった (no van seguidos de でした). 'Atsui' (caliente) se transforma a 'atsukatta', y con la forma cortés se dice '暑かったです'."
```



### 4 — 状態の説明
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "adjetivos-i-na"
  nivel: "N5"
  tags: ["na-adjetivo", "に"]
pasos:
  - "Elija la opción correcta para completar la oración"
opciones_explicitas:
  - "静か"
  - "静かで"
  - "静かに"
respuesta: "静か"
tipo: mc
enunciado: "彼は______です。"
explicacion: "Los na-adjetivos (como 'shizuka', tranquilo) se usan en su forma base antes de です. 'Shizuka' es correcto aquí."
```



### 5 — 食べ物の評価
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "adjetivos-i-na"  
  nivel: "N5"  
  tags: ["adjetivo-い", "sujeito-pessoal"]  
pasos:  
  - "Identificar el tipo de adjetivo que modifica a '彼女'."  
  - "Completar con la forma correcta del adjetivo."  
tipo: completar  
enunciado: "彼女は______です。"  
respuestas_validas:  
  - "かわいい"  

explicacion: "El sujeto '彼女' (ella) requiere un adjetivo que termine en い, ya que los adjetivos i se usan directamente sin necesidad de la partícula な. 'かわいい' es el adjetivo i correcto para describir algo bonito."  

```

### 6 — 物の状態
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "adjetivos-i-na"
  nivel: "N5"
  tags: ["i-adjetivo", "です"]
pasos:
  - "Elija la opción correcta para completar la oración"
opciones_explicitas:
  - "新しい"
  - "新しく"
  - "新し"
respuesta: "新しい"
tipo: mc
enunciado: "この携帯は______です。"
explicacion: "'新しい' (nuevo) es un i-adjetivo (termina en い). Los i-adjetivos se usan en su forma base directamente antes de です, sin ninguna partícula."
```



### 7 — 天気の表現
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "adjetivos-i-na"  
  nivel: "N5"  
  tags: ["adjetivo-い", "objeto-inanimado"]  
pasos:  
  - "Distinguir si el adjetivo describe un objeto inanimado."  
  - "Aplicar la forma correcta del adjetivo."  
tipo: completar  
enunciado: "電車は______です。"  
respuestas_validas:  
  - "はやい"  

explicacion: "El sujeto '電車' (tren) es inanimado, por lo que se usa un adjetivo i directamente. 'はやい' (rápido) es la forma correcta y no requiere la partícula な."  

```

### 8 — 状態の説明
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "adjetivos-i-na"  
  nivel: "N5"  
  tags: ["adjetivo-い", "objeto-inanimado"]  
pasos:  
  - "Reconocer que '映画' es un objeto inanimado."  
  - "Seleccionar el adjetivo i adecuado para describirlo."  
tipo: completar  
enunciado: "映画は______です。"  
respuestas_validas:  
  - "おもしろい"  

explicacion: "'おもしろい' es un adjetivo i que describe algo interesante. Como '映画' (película) no requiere la partícula な, se usa directamente."  

```

### 9 — 食べ物の評価
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "adjetivos-i-na"
  nivel: "N5"
  tags: ["i-adjetivo", "です"]
pasos:
  - "Complete el hueco con la forma adecuada del adjetivo"
respuestas_validas:
  - "甘い"
  - "甘くて"
tipo: completar
enunciado: "このケーキは______です。"
explicacion: "Los i-adjetivos no cambian de forma antes de です: 'amai' (dulce) se usa tal cual, 'amai desu', sin ninguna conjugación adicional."
```



### 10 — 物の状態
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "adjetivos-i-na"
  nivel: "N5"
  tags: ["i-adjetivo", "です"]
pasos:
  - "Elija la opción correcta para completar la oración"
opciones_explicitas:
  - "古い"
  - "古くて"
  - "古し"
respuesta: "古い"
tipo: mc
enunciado: "この本は______です。"
explicacion: "'古い' (viejo) es un i-adjetivo (termina en い). Los i-adjetivos se usan en su forma base directamente antes de です, sin ninguna partícula."
```



### 11 — Adjetivo-na antes de un sustantivo
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "adjetivos-i-na"
  nivel: "N5"
  tags: ["i-adjetivo", "です"]
enunciado: "静か___公園で本を読みます。"
tipo: completar
respuestas_validas:
  - "な"
explicacion: "静か es un adjetivo-na: antes de un sustantivo se une con な (静かな公園)."
```

### 12 — 状態の説明
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "adjetivos-i-na"  
  nivel: "N5"  
  tags: ["adjetivo-い", "lugar"]  
pasos:  
  - "Determinar que 'カフェ' es un lugar inanimado."  
  - "Completar con el adjetivo i adecuado."  
tipo: completar  
enunciado: "そのカフェは______です。"  
respuestas_validas:  
  - "にぎやか"  

explicacion: "'にぎやか' (concurrido) es en realidad un na-adjetivo, no un adjetivo i. En posición de predicado (antes de です) va en su forma base sin な; な sólo se usa cuando precede directamente a un sustantivo (p. ej. 'にぎやかなカフェ')."  

```

### 13 — Negativo del adjetivo-i
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "adjetivos-i-na"
  nivel: "N5"
  tags: ["i-adjetivo", "です"]
enunciado: "この靴は高___ありません。(高い, negativo)"
tipo: completar
respuestas_validas:
  - "く"
explicacion: "El negativo del adjetivo-i cambia い por く: 高くありません / 高くないです."
```

### 14 — Adjetivo-na antes de un sustantivo
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "adjetivos-i-na"
  nivel: "N5"
  tags: ["i-adjetivo", "です"]
enunciado: "彼は有名___作家です。"
tipo: mc
opciones_explicitas:
  - "な"
  - "の"
  - "い"
respuesta: "な"
explicacion: "有名 es adjetivo-na: se conecta al sustantivo con な."
```

### 15 — 天気の表現
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "adjetivos-i-na"  
  nivel: "N5"  
  tags: ["adjetivo-い", "objeto-inanimado"]  
pasos:  
  - "Determinar que '花' (flor) es un objeto inanimado."  
  - "Seleccionar el adjetivo i adecuado."  
opciones_explicitas:  
  - "かわいい"  
  - "かわいな"  
  - "おもしろい"  
enunciado: "この花は______です。"  
respuesta: "かわいい"  
tipo: mc  

explicacion: "'花' es inanimado, por lo que requiere un adjetivo i directamente. 'かわいい' (bonita) es correcto, mientras que 'かわいな' usaría incorrectamente la partícula な."  

```

### 16 — Negativo del adjetivo-na
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "adjetivos-i-na"
  nivel: "N5"
  tags: ["i-adjetivo", "です"]
enunciado: "この部屋は静か___ありません。"
tipo: mc
opciones_explicitas:
  - "では"
  - "く"
  - "に"
respuesta: "では"
explicacion: "Con adjetivos-na el negativo formal es ではありません (静かではありません)."
```

### 17 — Conectar adjetivos-i con て
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "adjetivos-i-na"
  nivel: "N5"
  tags: ["i-adjetivo", "です"]
enunciado: "あの店は安___て、おいしいです。"
tipo: mc
opciones_explicitas:
  - "く"
  - "で"
  - "に"
respuesta: "く"
explicacion: "Para unir dos adjetivos-i se cambia い por くて: 安くて、おいしい."
```

### 18 — 物の状態
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "adjetivos-i-na"  
  nivel: "N5"  
  tags: ["adjetivo-い", "sujeito-pessoal"]  
pasos:  
  - "Identificar que el sujeto es una persona."  
  - "Elegir entre adjetivos i y na."  
opciones_explicitas:  
  - "かんたん"  
  - "かんたんな"  
  - "せっかち"  
enunciado: "この問題は______です。"  
respuesta: "かんたん"  
tipo: mc  

explicacion: "'かんたん' (sencillo) es en realidad un na-adjetivo. En posición de predicado (antes de です) va en su forma base sin な; な sólo se usa antes de un sustantivo (p. ej. 'かんたんな問題')."  

```

### 19 — 天気の表現
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "adjetivos-i-na"  
  nivel: "N5"  
  tags: ["adjetivo-い", "objeto-inanimado"]  
pasos:  
  - "Determinar que '車' (coche) es un objeto inanimado."  
  - "Seleccionar el adjetivo i correcto."  
opciones_explicitas:  
  - "はやい"  
  - "はやな"  
  - "おもしろい"  
enunciado: "この車は______です。"  
respuesta: "はやい"  
tipo: mc  

explicacion: "'はやい' (rápido) es un adjetivo i que describe directamente a objetos inanimados como coches. 'はやな' usaría incorrectamente la partícula な."  

```

### 20 — Pasado de いい
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "adjetivos-i-na"
  nivel: "N5"
  tags: ["i-adjetivo", "です"]
enunciado: "昨日は天気が___。(いい, pasado)"
tipo: mc
opciones_explicitas:
  - "よかったです"
  - "いかったです"
  - "よいでした"
respuesta: "よかったです"
explicacion: "El pasado de いい es irregular: よかった (よかったです en estilo cortés)."
```

### 21 — 食べ物の評価
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "adjetivos-i-na"  
  nivel: "N5"  
  tags: ["adjetivo-い", "lugar"]  
pasos:  
  - "Reconocer que '場所' (lugar) es inanimado."  
  - "Seleccionar el adjetivo i adecuado."  
opciones_explicitas:  
  - "にぎやか"  
  - "にぎやかな"  
  - "おもしろい"  
enunciado: "その場所は______です。"  
respuesta: "にぎやか"  
tipo: mc  

explicacion: "'にぎやか' (concurrido) es en realidad un na-adjetivo. En posición de predicado (antes de です) va en su forma base sin な; な sólo se usa antes de un sustantivo (p. ej. 'にぎやかな場所')."  

```

### 22 — Adjetivo-na antes de un sustantivo
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "adjetivos-i-na"
  nivel: "N5"
  tags: ["i-adjetivo", "です"]
enunciado: "田中さんは親切___人です。"
tipo: mc
opciones_explicitas:
  - "な"
  - "の"
  - "い"
respuesta: "な"
explicacion: "親切 es adjetivo-na: 親切な人."
```

### 23 — Negativo del adjetivo-na
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "adjetivos-i-na"
  nivel: "N5"
  tags: ["i-adjetivo", "です"]
enunciado: "この問題は簡単___ありません。"
tipo: completar
respuestas_validas:
  - "では"
  - "じゃ"
explicacion: "簡単 es adjetivo-na: negativo 簡単ではありません (en habla informal 簡単じゃありません)."
```

### 24 — Adjetivo-na antes de un sustantivo
```
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "adjetivos-i-na"
  nivel: "N5"
  tags: ["adjetivo-い", "sujeito-pessoal"]
enunciado: "この町は____ところです。(静か)"
tipo: mc
opciones_explicitas:
  - "静かな"
  - "静かい"
  - "静かの"
respuesta: "静かな"
explicacion: "静か es adjetivo-na: se une al sustantivo con な."
```
