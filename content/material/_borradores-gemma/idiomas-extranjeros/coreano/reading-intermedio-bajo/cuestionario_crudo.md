### 1 — 일요일  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "reading-intermedio-bajo"
  nivel: "INTERMEDIO-BAJO"
  tags: ["días-de-la-semana", "completar"]
pasos:
  - "Identificar el día de la semana faltante en la oración."
respuesta: "일요일"
respuestas_validas:
  - "일요일"
  - "일요일"
tipo: completar
enunciado: "오늘은 ___ 날입니다. (Hoy es __ día.)"
variables:
  - "dia_semana": ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"]
```



### 2 — 동사의 현재 시제  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "reading-intermedio-bajo"
  nivel: "INTERMEDIO-BAJO"
  tags: ["conjugación", "mc"]
pasos:
  - "Identificar la conjugación correcta del verbo '가다' en presente."
opciones_explicitas:
  - "가요"
  - "갔어요"
  - "갈 거예요"
  - "가"
respuesta: "가요"
tipo: mc
enunciado: "그녀는 ___ (Ella va)."
```



### 3 — 목적어 조사  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "reading-intermedio-bajo"
  nivel: "INTERMEDIO-BAJO"
  tags: ["조사", "completar"]
pasos:
  - "Seleccionar el marcador de objeto correcto para completar la oración."
respuesta: "을"
respuestas_validas:
  - "을"
  - "를"
tipo: completar
enunciado: "그 책 ___ 읽었어요. (Leí esa libro ___.)"
variables:
  - "objeto": ["책", "사과", "도시"]
```



### 4 — 동사의 과거 시제  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "reading-intermedio-bajo"
  nivel: "INTERMEDIO-BAJO"
  tags: ["conjugación", "mc"]
pasos:
  - "Identificar la conjugación correcta del verbo '먹다' en pasado."
opciones_explicitas:
  - "먹었어요"
  - "먹어요"
  - "먹을 거예요"
  - "먹는다"
respuesta: "먹었어요"
tipo: mc
enunciado: "저는 어제 ___ (Ayer comí)."
```



### 5 — 주어 조사  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "reading-intermedio-bajo"
  nivel: "INTERMEDIO-BAJO"
  tags: ["조사", "completar"]
pasos:
  - "Seleccionar el marcador de sujeto correcto para completar la oración."
respuesta: "가"
respuestas_validas:
  - "가"
  - "이"
tipo: completar
enunciado: "___ 친구예요. (___ es mi amigo.)"
variables:
  - "sujeto": ["그", "이", "저"]
```



### 6 — 위치 표현  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "reading-intermedio-bajo"
  nivel: "INTERMEDIO-BAJO"
  tags: ["위치", "mc"]
pasos:
  - "Identificar la preposición correcta para expresar ubicación."
opciones_explicitas:
  - "에"
  - "에서"
  - "으로"
  - "까지"
respuesta: "에"
tipo: mc
enunciado: "도서관 ___ 있습니다. (La biblioteca ___ está.)"
```



### 7 — 수량 표현  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "reading-intermedio-bajo"
  nivel: "INTERMEDIO-BAJO"
  tags: ["수량", "completar"]
pasos:
  - "Completar la oración con el número correcto."
respuesta: "두"
respuestas_validas:
  - "두"
  - "둘"
tipo: completar
enunciado: "___ 개의 사과가 있어요. (Hay ___ manzanas.)"
variables:
  - "cantidad": ["한", "두", "세"]
```



### 8 — 비교 구조  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "reading-intermedio-bajo"
  nivel: "INTERMEDIO-BAJO"
  tags: ["비교", "mc"]
pasos:
  - "Seleccionar la forma correcta para expresar comparación."
opciones_explicitas:
  - "보다"
  - "처럼"
  - "만큼"
  - "에 대해"
respuesta: "보다"
tipo: mc
enunciado: "이 책은 저 책 ___ 더 어렵습니다. (Este libro es ___ más difícil que ese libro.)"
```



### 9 — 예절 표현  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "reading-intermedio-bajo"
  nivel: "INTERMEDIO-BAJO"
  tags: ["예절", "completar"]
pasos:
  - "Completar la oración con el verbo en forma de cortesía."
respuesta: "뵙겠습니다"
respuestas_validas:
  - "뵙겠습니다"
  - "뵙겠어요"
tipo: completar
enunciado: "오늘 ___ (Hoy me reuniré con usted)."
variables:
  - "verbo": ["만나다", "뵙다", "말하다"]
```



### 10 — 부정 표현  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "reading-intermedio-bajo"
  nivel: "INTERMEDIO-BAJO"
  tags: ["부정", "mc"]
pasos:
  - "Identificar la forma correcta para expresar negación."
opciones_explicitas:
  - "안 먹어요"
  - "먹지 않아요"
  - "먹을 수 없어요"
  - "먹으려고요"
respuesta: "안 먹어요"
tipo: mc
enunciado: "저는 ___ (No como)."
```



### 11 — 조건 표현  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "reading-intermedio-bajo"
  nivel: "INTERMEDIO-BAJO"
  tags: ["조건", "completar"]
pasos:
  - "Completar la oración con el conectivo correcto."
respuesta: "만약"
respuestas_validas:
  - "만약"
  - "만"
tipo: completar
enunciado: "___ 내일 오면, 함께 가요. (___ vienes mañana, iremos juntos.)"
variables:
  - "conectivo": ["만약", "그렇다면", "그래도"]
```



### 12 — 시제 표현  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "reading-intermedio-bajo"
  nivel: "INTERMEDIO-BAJO"
  tags: ["시제", "mc"]
pasos:
  - "Identificar la conjugación correcta del verbo '가다' en futuro."
opciones_explicitas:
  - "갈 거예요"
  - "갔어요"
  - "가요"
  - "가"
respuesta: "갈 거예요"
tipo: mc
enunciado: "내일 ___ (Mañana iré)."
```



### 13 — 목적 표현  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "reading-intermedio-bajo"
  nivel: "INTERMEDIO-BAJO"
  tags: ["목적", "completar"]
pasos:
  - "Completar la oración con el marcador de propósito correcto."
respuesta: "해서"
respuestas_validas:
  - "해서"
  - "으로"
tipo: completar
enunciado: "이 책은 ___ 공부했어요. (Leí este libro ___.)"
variables:
  - "propósito": ["공부", "여행", "일"]
```



### 14 — 수동태 표현  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "reading-intermedio-bajo"
  nivel: "INTERMEDIO-BAJO"
  tags: ["수동태", "mc"]
pasos:
  - "Identificar la forma correcta para expresar pasivo."
opciones_explicitas:
  - "받았어요"
  - "받습니다"
  - "받을 거예요"
  - "받고 있어요"
respuesta: "받았어요"
tipo: mc
enunciado: "이 책은 ___ (Este libro fue recibido)."
```



### 15 — 인물 표현  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "reading-intermedio-bajo"
  nivel: "INTERMEDIO-BAJO"
  tags: ["인물", "completar"]
pasos:
  - "Completar la oración con el pronombre correcto."
respuesta: "그녀"
respuestas_validas:
  - "그녀"
  - "그"
tipo: completar
enunciado: "___는 학생입니다. (___ es estudiante.)"
variables:
  - "pronombre": ["그", "그녀", "저"]
```



### 16 — 시간 표현  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "reading-intermedio-bajo"
  nivel: "INTERMEDIO-BAJO"
  tags: ["시간", "mc"]
pasos:
  - "Identificar la preposición correcta para expresar tiempo."
opciones_explicitas:
  - "에"
  - "에서"
  - "으로"
  - "까지"
respuesta: "에"
tipo: mc
enunciado: "오늘 ___ (Hoy a las ___)."
```



### 17 — 수동태 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "조사"  
  nivel: "INTERMEDIO-BAJO"  
  tags: ["주제", "-는"]  
pasos:  
  - "Identificar el uso de '-는' para indicar el tema de la oración."  
  - "Completar el hueco con el pronombre adecuado que funcione como sujeto y portador del tema."  
respuesta: "이 책"  
respuestas_validas:  
  - "이 책"  
  - "이 책은"  
tipo: completar  
enunciado: "___는 읽고 싶어요. (Quiero leer ___.)"  
variables: []  
explicacion: "El uso de '-는' indica el tema de la oración, que en este caso es 'este libro'. La forma correcta es '이 책는' pero se simplifica a '이 책' antes del verbo."  
```  

---

### 18 — 조건 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "조사"  
  nivel: "INTERMEDIO-BAJO"  
  tags: ["목적어", "-을/를"]  
pasos:  
  - "Identificar el marcador que introduce al objeto directo de la oración."  
  - "Elegir la opción con el marcador correcto ('-을' o '-를') según la terminación del sustantivo."  
respuesta: "그녀에게"  
opciones_explicitas:  
  - "그녀에게"  
  - "그녀에"  
  - "그녀로"  
tipo: mc  
enunciado: "저는 ___ 선물을 주고 싶어요. (Quiero darle un regalo a ella.)"  
variables: []  
explicacion: "El marcador '-을/를' se usa para objetos directos. '그녀' termina en vocal, por lo que se usa '-에게' como preposición de dirección."  
```  

---

### 19 — 목적 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "시간 표현"  
  nivel: "INTERMEDIO-BAJO"  
  tags: ["오늘", "-에"]  
pasos:  
  - "Identificar la expresión temporal necesaria para completar la oración."  
  - "Usar '-에' para indicar el momento exacto de una acción."  
respuesta: "오늘"  
respuestas_validas:  
  - "오늘"  
  - "오늘에"  
tipo: completar  
enunciado: "___ ___ 놀러 가요. (Vamos a divertirnos ___.)"  
variables: []  
explicacion: "'-에' se usa para indicar el momento específico de una acción, como 'hoy', que corresponde a '오늘에'."  
```  

---

### 20 — 수량 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "형용사"  
  nivel: "INTERMEDIO-BAJO"  
  tags: ["존댓말", "-어요"]  
pasos:  
  - "Identificar la forma cortés del verbo que completa la oración."  
  - "Elegir entre opciones con '-요' (formal) o formas comunes."  
respuesta: "예요"  
opciones_explicitas:  
  - "예요"  
  - "야요"  
  - "야"  
tipo: mc  
enunciado: "이 영화는 ___ 재미있어요. (Esta película es interesante.)"  
variables: []  
explicacion: "'-어요' se usa en forma cortés para adjetivos o verbos, como '예요' que completa la oración de manera correcta."  
```  

---

### 21 — 예절 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "비교"  
  nivel: "INTERMEDIO-BAJO"  
  tags: ["더", "-보다"]  
pasos:  
  - "Identificar la estructura comparativa que introduce '-보다'."  
  - "Completar el hueco con '더' para indicar un grado superior en la comparación."  
respuesta: "더"  
respuestas_validas:  
  - "더"  
  - "더나"  
tipo: completar  
enunciado: "이 책은 저 책 ___ 흥미롭습니다. (Este libro es ___ interesante que ese libro.)"  
variables: []  
explicacion: "La estructura '-보다' se usa para comparaciones, y '더' indica un grado superior ('más'). La frase completa es '이 책은 저 책보다 더 흥미롭습니다'."  
```  

---

### 22 — 부정 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "조사"  
  nivel: "INTERMEDIO-BAJO"  
  tags: ["장소", "-에서"]  
pasos:  
  - "Identificar el marcador que indica el lugar donde se realiza una acción."  
  - "Elegir entre opciones con '-에서' (lugar) o otros marcadores."  
respuesta: "학교에서"  
opciones_explicitas:  
  - "학교에서"  
  - "학교에"  
  - "학교로"  
tipo: mc  
enunciado: "저는 ___ 공부해요. (Estudio en la escuela.)"  
variables: []  
explicacion: "'-에서' indica el lugar donde se realiza una acción, como 'en la escuela', que corresponde a '학교에서'."  
```  

---

### 23 — 조건 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "형용사"  
  nivel: "INTERMEDIO-BAJO"  
  tags: ["예쁘다", "-어요"]  
pasos:  
  - "Identificar la forma correcta del adjetivo que completa la oración."  
  - "Usar '-어요' para convertir '예쁘다' en su forma cortés o descriptiva."  
respuesta: "예뻐요"  
respuestas_validas:  
  - "예뻐요"  
  - "예쁘네요"  
tipo: completar  
enunciado: "그녀는 ___입니다. (Ella es bonita.)"  
variables: []  
explicacion: "'예쁘다' se transforma en '-어요' para indicar una descripción general, como 'ella es bonita', que corresponde a '예뻐요'."  
```  

---

### 24 — 시제 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "문제 표현"  
  nivel: "INTERMEDIO-BAJO"  
  tags: ["질문", "-인가요"]  
pasos:  
  - "Identificar la partícula que transforma una afirmación en pregunta."  
  - "Elegir entre opciones con '-인가요' (pregunta) o formas comunes."  
respuesta: "예"  
opciones_explicitas:  
  - "예"  
  - "네"  
  - "아니요"  
tipo: mc  
enunciado: "이 책은 ___ 읽었어요? (¿Leíste este libro?)"  
variables: []  
explicacion: "'-인가요' se usa para formular preguntas, pero en este caso, la oración ya está estructurada como pregunta. La respuesta correcta es '예' (sí) si el contexto lo indica."  
```  

---

### 25 — 인물 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "동사"  
  nivel: "INTERMEDIO-BAJO"  
  tags: ["하다", "-요"]  
pasos:  
  - "Identificar la forma correcta del verbo '하다' según el sujeto y el contexto."  
  - "Usar '-요' para indicar una acción general realizada por un sujeto no específico."  
respuesta: "들어요"  
respuestas_validas:  
  - "들어요"  
  - "들을 거예요"  
tipo: completar  
enunciado: "저는 ___ 공부해요. (Estudio libros.)"  
variables: []  
explicacion: "'하다' se transforma en '-어요' para indicar una acción habitual, como 'estudiar libros', que corresponde a '들어요'."
