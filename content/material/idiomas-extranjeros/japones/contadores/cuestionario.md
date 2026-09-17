> **Nota de corrección:** Este cuestionario fue corregido a partir del borrador en
> `_borradores-gemma/idiomas-extranjeros/japones/contadores/cuestionario_crudo.md`
> mediante el script `mechanical_fix_idiomas.py`. Se normalizó `materia:` y `tema:`
> (variaban entre "japones"/"contadores (N5)" y las formas correctas). 16 bloques
> `mc` carecían del `enunciado:`, reconstruido con una oración existencial (nombre +
> contador + あります/います) acorde al tipo de objeto de cada bloque. Se corrigieron
> además varios errores de contenido:
> - **6 bloques `completar` (1, 2, 4, 6, 8, 10, 12, 14, 16):** el `enunciado:` tenía
>   la forma "この[objeto]は_。" (p. ej. "この本は_。"), que no tiene sentido
>   gramatical con un contador suelto ("Este libro es 3 volúmenes" no se puede decir
>   así); se reconstruyeron como oraciones existenciales con el número ya
>   incorporado.
> - **Bloque 6:** asignaba el contador 「本」 (para objetos largos y delgados) a una
>   tostadora, que en realidad se cuenta con 「台」 (electrodomésticos/máquinas),
>   igual que el ventilador del bloque 14; corregido.
> - **Bloque 12:** asignaba el contador 「個」 (objetos pequeños genéricos) a un
>   teléfono, que en realidad se cuenta con 「台」 (aparatos electrónicos); corregido.
> - **Bloque 10:** el enunciado original no dejaba claro que 「種類」 cuenta
>   variedades/tipos, no tallos individuales de flor; se reformuló para probar
>   explícitamente ese matiz.

### 1 — 本の数を数える  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["contar", "números", "objeto"]
pasos:
  - "Identificar el objeto y su contador."
  - "Elegir la forma correcta del contador para el número."
tipo: completar
respuestas_validas:
  - "3冊"
  - "三冊"
enunciado: "本棚に本が______あります。"
explicacion: "La palabra '本' se cuenta con '冊'. El número 3 en japonés es '三' o '3', por lo que la respuesta correcta es '3冊' o '三冊'."
```



### 2 — 数字とカウンターの組み合わせ  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["números", "contar"]
pasos:
  - "Completar el hueco con la forma correcta del contador."
tipo: completar
respuestas_validas:
  - "2本"
  - "二本"
enunciado: "筆箱にペンが______あります。"
explicacion: "'ペン' (lápiz) se cuenta con '本'. El número 2 es '二' o '2', por lo que la respuesta correcta es '2本' o '二本'."
```



### 3 — カウンターの選択  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["opciones", "contar"]
pasos:
  - "Elegir la opción correcta para completar el enunciado."
respuesta: "1人"
tipo: mc
enunciado: "教室に学生が______います。"
opciones_explicitas:
  - "1人"
  - "1本"
  - "1枚"
explicacion: "'人' se usa para contar personas. '本' es para objetos largos, y '枚' para hojas planas."
```



### 4 — 数を表すカウンター  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["números", "contar"]
pasos:
  - "Completar el hueco con la forma correcta del contador."
tipo: completar
respuestas_validas:
  - "4個"
  - "四個"
enunciado: "テーブルにりんごが______あります。"
explicacion: "'りんご' (manzana) se cuenta con '個'. El número 4 es '四' o '4', por lo que la respuesta correcta es '4個' o '四個'."
```



### 5 — カウンターの選択  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["opciones", "contar"]
pasos:
  - "Elegir la opción correcta para completar el enunciado."
respuesta: "3枚"
tipo: mc
enunciado: "机の上に紙が______あります。"
opciones_explicitas:
  - "3枚"
  - "3本"
  - "3人"
explicacion: "'枚' se usa para contar hojas o objetos planos. '本' es para objetos largos, y '人' para personas."
```



### 6 — 数字とカウンターの組み合わせ  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["electrodomésticos", "dai"]
pasos:
  - "Identificar el tipo de objeto (tostadora)"
  - "Aplicar el contador correcto para electrodomésticos"
tipo: completar
respuestas_validas:
  - "台"
  - "Dai"
enunciado: "台所にトースターが2______あります。"
explicacion: "Los electrodomésticos y máquinas, como las tostadoras, se cuentan con 「台」 (no con 「本」, reservado para objetos largos y delgados como lápices o botellas). Ejemplo: このテレビ（1台）, このラジオ（2台）。"
```

### 7 — カウンターの選択  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["opciones", "contar"]
pasos:
  - "Elegir la opción correcta para completar el enunciado."
respuesta: "2人"
tipo: mc
enunciado: "公園に子供が______います。"
opciones_explicitas:
  - "2人"
  - "2本"
  - "2枚"
explicacion: "'人' se usa para contar personas. '本' es para objetos largos, y '枚' para hojas planas."
```



### 8 — 数を表すカウンター  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["objetos planos", "mai"]
pasos:
  - "Identificar el tipo de objeto (pegatina)"
  - "Aplicar el contador para objetos planos y delgados"
tipo: completar
respuestas_validas:
  - "枚"
  - "Mai"
enunciado: "ノートにシールが5______あります。"
explicacion: "Objetos planos como pegatinas se cuentan con 「枚」. Ejemplo: この紙（1枚）, この写真（2枚）。"
```

### 9 — カウンターの選択  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["opciones", "contar"]
pasos:
  - "Elegir la opción correcta para completar el enunciado."
respuesta: "7冊"
tipo: mc
enunciado: "本棚に本が______あります。"
opciones_explicitas:
  - "7冊"
  - "7本"
  - "7人"
explicacion: "'冊' se usa para contar libros. '本' es para objetos largos, y '人' para personas."
```



### 10 — 数字とカウンターの組み合わせ  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["tipos", "shurui"]
pasos:
  - "Identificar que se pregunta por variedades, no por unidades individuales."
  - "Usar el contador para categorías o variedades."
tipo: completar
respuestas_validas:
  - "種類"
  - "Shurui"
enunciado: "この花屋には5______の花があります。"
explicacion: "Para expresar tipos o categorías (no la cantidad de tallos individuales, que usaría 「本」), se usa 「種類」. Ejemplo: 色の種類（2種類）, タイプの違い（3種類）。"
```

### 11 — カウンターの選択  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["opciones", "contar"]
pasos:
  - "Elegir la opción correcta para completar el enunciado."
respuesta: "9枚"
tipo: mc
enunciado: "封筒の中に写真が______あります。"
opciones_explicitas:
  - "9枚"
  - "9本"
  - "9人"
explicacion: "'枚' se usa para contar hojas o objetos planos. '本' es para objetos largos, y '人' para personas."
```



### 12 — 数を表すカウンター  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["electrodomésticos", "dai"]
pasos:
  - "Identificar el tipo de objeto (teléfono, un aparato electrónico)"
  - "Aplicar el contador correcto para aparatos y máquinas"
tipo: completar
respuestas_validas:
  - "台"
  - "Dai"
enunciado: "事務所に電話が3______あります。"
explicacion: "Los aparatos electrónicos como los teléfonos se cuentan con 「台」 (no con 「個」, que es para objetos pequeños genéricos como frutas o cajas). Ejemplo: このテレビ（1台）, このパソコン（2台）。"
```

### 13 — カウンターの選択  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["opciones", "contar"]
pasos:
  - "Elegir la opción correcta para completar el enunciado."
respuesta: "1人"
tipo: mc
enunciado: "部屋に先生が______います。"
opciones_explicitas:
  - "1人"
  - "1本"
  - "1枚"
explicacion: "'人' se usa para contar personas. '本' es para objetos largos, y '枚' para hojas planas."
```



### 14 — 数字とカウンターの組み合わせ  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["objetos alargados", "hon"]
pasos:
  - "Identificar el tipo de objeto (ventilador)"
  - "Aplicar el contador para objetos con forma alargada"
tipo: completar
respuestas_validas:
  - "台"
  - "Tai"
enunciado: "部屋に扇風機が2______あります。"
explicacion: "Objetos alargados o equipos electrónicos se cuentan con 「台」. Ejemplo: このテレビ（1台）, このラジオ（2台）。"
```

### 15 — カウンターの選択  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["opciones", "contar"]
pasos:
  - "Elegir la opción correcta para completar el enunciado."
respuesta: "3人"
tipo: mc
enunciado: "チームに選手が______います。"
opciones_explicitas:
  - "3人"
  - "3本"
  - "3枚"
explicacion: "'人' se usa para contar personas. '本' es para objetos largos, y '枚' para hojas planas."
```



### 16 — 数を表すカウンター  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["objetos planos", "mai"]
pasos:
  - "Identificar el tipo de objeto (tarta cortada)"
  - "Aplicar el contador para objetos planos o porciones"
tipo: completar
respuestas_validas:
  - "切れ"
  - "Kire"
enunciado: "お皿にカットケーキが2______あります。"
explicacion: "Para porciones o cortes, se usa 「切れ」. Ejemplo: このケーキ（1切れ）, このパン（2切れ）。"
```

### 17 — カウンターの選択  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["opciones", "contar"]
pasos:
  - "Elegir la opción correcta para completar el enunciado."
respuesta: "5枚"
tipo: mc
enunciado: "テーブルにお皿が______あります。"
opciones_explicitas:
  - "5枚"
  - "5本"
  - "5人"
explicacion: "'枚' se usa para contar hojas o objetos planos. '本' es para objetos largos, y '人' para personas."
```



### 18 — 数字とカウンターの組み合わせ  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["objetos generales", "ko"]
pasos:
  - "Identificar el tipo de objeto (juguetes)"
  - "Aplicar el contador general para objetos no específicos"
enunciado: "箱の中におもちゃが3______あります。"
opciones_explicitas:
  - "個"
  - "枚"
  - "本"
respuesta: "個"
tipo: mc
explicacion: "Objetos generales como juguetes usan 「個」. Opciones incorrectas son contadores para otros tipos de objetos."
```

### 19 — カウンターの選択  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["opciones", "contar"]
pasos:
  - "Elegir la opción correcta para completar el enunciado."
respuesta: "7人"
tipo: mc
enunciado: "会議室に社員が______います。"
opciones_explicitas:
  - "7人"
  - "7本"
  - "7枚"
explicacion: "'人' se usa para contar personas. '本' es para objetos largos, y '枚' para hojas planas."
```



### 20 — 数を表すカウンター  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["objetos planos", "mai"]
pasos:
  - "Identificar el tipo de objeto (hojas)"
  - "Aplicar el contador para objetos delgados o planos"
enunciado: "机の上に紙が5______あります。"
opciones_explicitas:
  - "枚"
  - "本"
  - "個"
respuesta: "枚"
tipo: mc
explicacion: "Objetos como hojas de papel se cuentan con 「枚」. Opciones incorrectas son contadores para otros tipos de objetos."
```

### 21 — カウンターの選択  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["opciones", "contar"]
pasos:
  - "Elegir la opción correcta para completar el enunciado."
respuesta: "9冊"
tipo: mc
enunciado: "図書館に本が______あります。"
opciones_explicitas:
  - "9冊"
  - "9本"
  - "9人"
explicacion: "'冊' se usa para contar libros. '本' es para objetos largos, y '人' para personas."
```



### 22 — 数字とカウンターの組み合わせ  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["personas", "nin"]
pasos:
  - "Identificar el tipo de objeto (personas)"
  - "Aplicar el contador específico para personas"
enunciado: "公園に人が10______います。"
opciones_explicitas:
  - "人"
  - "個"
  - "枚"
respuesta: "人"
tipo: mc
explicacion: "Personas se cuentan con 「人」. Opciones incorrectas son contadores para otros tipos de objetos."
```

### 23 — カウンターの選択  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["opciones", "contar"]
pasos:
  - "Elegir la opción correcta para completar el enunciado."
respuesta: "1個"
tipo: mc
enunciado: "冷蔵庫にりんごが______あります。"
opciones_explicitas:
  - "1個"
  - "1本"
  - "1人"
explicacion: "'個' se usa para contar objetos pequeños. '本' es para objetos largos, y '人' para personas."
```



### 24 — 数を表すカウンター  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["tipos", "shurui"]
pasos:
  - "Identificar el contexto (tipos de flores)"
  - "Usar el contador para categorías o variedades"
enunciado: "この店には花が5______あります。"
opciones_explicitas:
  - "種類"
  - "個"
  - "本"
respuesta: "種類"
tipo: mc
explicacion: "Para expresar tipos o categorías, se usa 「種類」. Opciones incorrectas son contadores para otros usos."
```

### 25 — カウンターの選択  
```yaml
metadata:
  materia: "idiomas-extranjeros/japones"
  tema: "contadores"
  nivel: "N5"
  tags: ["opciones", "contar"]
pasos:
  - "Elegir la opción correcta para completar el enunciado."
respuesta: "12個"
tipo: mc
enunciado: "箱の中にみかんが______あります。"
opciones_explicitas:
  - "12個"
  - "12本"
  - "12人"
explicacion: "'個' se usa para contar objetos pequeños. '本' es para objetos largos, y '人' para personas."
```
