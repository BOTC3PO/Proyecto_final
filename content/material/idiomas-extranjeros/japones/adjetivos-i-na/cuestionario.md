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



### 11 — 天気の表現
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "adjetivos-i-na"  
  nivel: "N5"  
  tags: ["adjetivo-い", "sujeito-pessoal"]  
pasos:  
  - "Identificar que el sujeto es una persona."  
  - "Elegir el adjetivo i correcto para describirlo."  
tipo: completar  
enunciado: "彼は______です。"  
respuestas_validas:  
  - "せっかち"  

explicacion: "'せっかち' (impaciente) es en realidad un na-adjetivo, no un adjetivo i. En posición de predicado (antes de です) los na-adjetivos van en su forma base sin な; la partícula な sólo se usa cuando el adjetivo precede directamente a un sustantivo (p. ej. 'せっかちな人')."  

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

### 13 — 食べ物の評価
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "adjetivos-i-na"  
  nivel: "N5"  
  tags: ["adjetivo-い", "objeto-inanimado"]  
pasos:  
  - "Reconocer que '本' (libro) es un objeto inanimado."  
  - "Usar el adjetivo i correcto."  
tipo: completar  
enunciado: "この本は______です。"  
respuestas_validas:  
  - "おもしろい"  

explicacion: "'おもしろい' (interesante) es un adjetivo i que describe correctamente el libro, sin necesidad de la partícula な."  

```

### 14 — 物の状態
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
  - "げんき"  
  - "げんきな"  
  - "おもしろい"  
enunciado: "彼女は______です。"  
respuesta: "げんき"  
tipo: mc  

explicacion: "'げんき' (sano/con energía) es en realidad un na-adjetivo. En posición de predicado (antes de です) va en su forma base sin な; な sólo se usa antes de un sustantivo (p. ej. 'げんきな人'). 'げんきな' aquí sería agramatical porque な no puede preceder directamente a です."  

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

### 16 — 状態の説明
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
  - "せっかち"  
  - "せっかちな"  
  - "おもしろい"  
enunciado: "彼は______です。"  
respuesta: "せっかち"  
tipo: mc  

explicacion: "'せっかち' (impaciente) es en realidad un na-adjetivo. En posición de predicado (antes de です) va en su forma base sin な; な sólo se usa antes de un sustantivo (p. ej. 'せっかちな人')."  

```

### 17 — 食べ物の評価
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "adjetivos-i-na"  
  nivel: "N5"  
  tags: ["adjetivo-い", "objeto-inanimado"]  
pasos:  
  - "Reconocer que '料理' (comida) es un objeto inanimado."  
  - "Seleccionar el adjetivo i correcto."  
opciones_explicitas:  
  - "おいし"  
  - "おいしき"  
  - "おいしい"  
enunciado: "この料理は______です。"  
respuesta: "おいしい"  
tipo: mc  

explicacion: "'おいしい' (delicioso) es un adjetivo i que se usa directamente para describir comida. 'おいしき' no existe, y 'おいし' está incompleto."  

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

### 20 — 状態の説明
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
  - "げんき"  
  - "げんきな"  
  - "おもしろい"  
enunciado: "彼女は______です。"  
respuesta: "げんき"  
tipo: mc  

explicacion: "'げんき' (sano/con energía) es en realidad un na-adjetivo. En posición de predicado (antes de です) va en su forma base sin な; な sólo se usa antes de un sustantivo (p. ej. 'げんきな人')."  

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

### 22 — 物の状態
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
  - "かわいい"  
  - "かわいな"  
  - "せっかち"  
enunciado: "彼女は______です。"  
respuesta: "かわいい"  
tipo: mc  

explicacion: "'かわいい' (bonita) es un adjetivo i que describe directamente a una persona. 'かわいな' usaría incorrectamente la partícula な."  

```

### 23 — 天気の表現
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "adjetivos-i-na"  
  nivel: "N5"  
  tags: ["adjetivo-い", "objeto-inanimado"]  
pasos:  
  - "Reconocer que '本' (libro) es un objeto inanimado."  
  - "Elegir el adjetivo i correcto."  
opciones_explicitas:  
  - "おもしろい"  
  - "おもしろな"  
  - "かわいい"  
enunciado: "この本は______です。"  
respuesta: "おもしろい"  
tipo: mc  

explicacion: "'おもしろい' (interesante) es un adjetivo i que describe directamente a objetos inanimados como libros. 'おもしろな' usaría incorrectamente la partícula な."  

```

### 24 — 状態の説明
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
  - "せっかち"  
  - "せっかちな"  
  - "かわいい"  
enunciado: "彼は______です。"  
respuesta: "せっかち"  
tipo: mc  

explicacion: "'せっかち' (impaciente) es en realidad un na-adjetivo. En posición de predicado (antes de です) va en su forma base sin な; な sólo se usa antes de un sustantivo (p. ej. 'せっかちな人')."  

```

### 25 — 食べ物の評価
```
metadata:  
  materia: "idiomas-extranjeros/japones"  
  tema: "adjetivos-i-na"  
  nivel: "N5"  
  tags: ["adjetivo-い", "objeto-inanimado"]  
pasos:  
  - "Determinar que '花' (flor) es un objeto inanimado."  
  - "Seleccionar el adjetivo i correcto."  
opciones_explicitas:  
  - "かわいい"  
  - "かわいな"  
  - "おもしろい"  
enunciado: "この花は______です。"  
respuesta: "かわいい"  
tipo: mc  

explicacion: "'かわいい' (bonita) es un adjetivo i que describe directamente a objetos inanimados como flores. 'かわいな' usaría incorrectamente la partícula な."
```
