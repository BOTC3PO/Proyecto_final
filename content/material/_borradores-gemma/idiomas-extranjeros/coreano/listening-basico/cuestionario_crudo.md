### 1 — 방향을 묻는 대화  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "listening-basico"
  nivel: "BASICO"
  tags: ["direccion", "pregunta"]
pasos:
  - "Escuchar la conversación entre dos personas preguntando y respondiendo sobre direcciones."
  - "Identificar la palabra que completa la oración del interlocutor."
respuesta: "왼쪽"
tipo: completar
respuestas_validas:
  - "왼쪽"
  - "왼쪽에"
explicacion: "La respuesta correcta es '왼쪽' (izquierda) porque el contexto indica una dirección específica en un diálogo."
enunciado: "A: 쇼핑몰이 어디 있어요? B: 여기서 ___로 가세요."
variables:
  - "direccion": ["왼쪽", "오른쪽"]
```



### 2 — 숫자를 묻는 질문  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "listening-basico"
  nivel: "BASICO"
  tags: ["numero", "pregunta"]
pasos:
  - "Escuchar la pregunta sobre el número de personas en un grupo."
  - "Seleccionar la opción correcta entre las tres opciones proporcionadas."
respuesta: "세 명"
tipo: mc
opciones_explicitas:
  - "두 명"
  - "세 명"
  - "네 명"
explicacion: "La respuesta es '세 명' (tres personas) porque el contexto menciona claramente el número tres."
enunciado: "A: 그룹에 몇 명 있어요? B: ___ 있어요."
```



### 3 — 시간을 묻는 대화  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "listening-basico"
  nivel: "BASICO"
  tags: ["tiempo", "horario"]
pasos:
  - "Escuchar la conversación sobre el horario de una clase."
  - "Completar el hueco con la hora correcta en formato 24 horas."
respuesta: "10시"
tipo: completar
respuestas_validas:
  - "10시"
  - "십 시"
explicacion: "La respuesta es '10시' (10:00) porque el contexto indica una hora específica en un horario."
enunciado: "A: 수업 시간이 언제예요? B: ___에 시작해요."
```



### 4 — 위치를 묻는 질문  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "listening-basico"
  nivel: "BASICO"
  tags: ["ubicacion", "pregunta"]
pasos:
  - "Escuchar la pregunta sobre la ubicación de un lugar."
  - "Seleccionar la opción correcta entre las tres opciones proporcionadas."
respuesta: "오른쪽"
tipo: mc
opciones_explicitas:
  - "왼쪽"
  - "오른쪽"
  - "뒤에"
explicacion: "La respuesta es '오른쪽' (derecha) porque el contexto menciona claramente la dirección derecha."
enunciado: "A: 병원이 어디 있어요? B: 여기서 ___로 가세요."
```



### 5 — 날짜를 묻는 대화  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "listening-basico"
  nivel: "BASICO"
  tags: ["fecha", "pregunta"]
pasos:
  - "Escuchar la conversación sobre una fecha específica."
  - "Completar el hueco con el día correcto en formato numérico."
respuesta: "12일"
tipo: completar
respuestas_validas:
  - "12일"
  - "십이 일"
explicacion: "La respuesta es '12일' (12 de) porque el contexto indica claramente el día 12."
enunciado: "A: 생일은 언제예요? B: ___에 태어났어요."
```



### 6 — 방향을 묻는 질문  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "listening-basico"
  nivel: "BASICO"
  tags: ["direccion", "pregunta"]
pasos:
  - "Escuchar la pregunta sobre la dirección de un lugar."
  - "Seleccionar la opción correcta entre las tres opciones proporcionadas."
respuesta: "뒤에"
tipo: mc
opciones_explicitas:
  - "앞에"
  - "뒤에"
  - "왼쪽"
explicacion: "La respuesta es '뒤에' (detrás) porque el contexto menciona claramente la ubicación detrás."
enunciado: "A: 박물관이 어디 있어요? B: 여기서 ___로 가세요."
```



### 7 — 시간을 묻는 대화  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "listening-basico"
  nivel: "BASICO"
  tags: ["tiempo", "horario"]
pasos:
  - "Escuchar la conversación sobre el horario de un evento."
  - "Completar el hueco con la hora correcta en formato 12 horas."
respuesta: "오후 3시"
tipo: completar
respuestas_validas:
  - "오후 3시"
  - "세 시 오후"
explicacion: "La respuesta es '오후 3시' (3 p.m.) porque el contexto indica claramente la hora en formato de la tarde."
enunciado: "A: 공연 시간이 언제예요? B: ___에 시작해요."
```



### 8 — 위치를 묻는 질문  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "listening-basico"
  nivel: "BASICO"
  tags: ["ubicacion", "pregunta"]
pasos:
  - "Escuchar la pregunta sobre la ubicación de un lugar."
  - "Seleccionar la opción correcta entre las tres opciones proporcionadas."
respuesta: "왼쪽"
tipo: mc
opciones_explicitas:
  - "오른쪽"
  - "왼쪽"
  - "앞에"
explicacion: "La respuesta es '왼쪽' (izquierda) porque el contexto menciona claramente la dirección izquierda."
enunciado: "A: 도서관이 어디 있어요? B: 여기서 ___로 가세요."
```



### 9 — 날짜를 묻는 대화  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "listening-basico"
  nivel: "BASICO"
  tags: ["fecha", "pregunta"]
pasos:
  - "Escuchar la conversación sobre una fecha específica."
  - "Completar el hueco con el mes correcto en formato numérico."
respuesta: "10월"
tipo: completar
respuestas_validas:
  - "10월"
  - "십 월"
explicacion: "La respuesta es '10월' (octubre) porque el contexto indica claramente el mes octubre."
enunciado: "A: 여행은 언제예요? B: ___에 가요."
```



### 10 — 방향을 묻는 질문  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "listening-basico"
  nivel: "BASICO"
  tags: ["direccion", "pregunta"]
pasos:
  - "Escuchar la pregunta sobre la dirección de un lugar."
  - "Seleccionar la opción correcta entre las tres opciones proporcionadas."
respuesta: "앞에"
tipo: mc
opciones_explicitas:
  - "뒤에"
  - "앞에"
  - "왼쪽"
explicacion: "La respuesta es '앞에' (delante) porque el contexto menciona claramente la ubicación delante."
enunciado: "A: 공항이 어디 있어요? B: 여기서 ___로 가세요."
```



### 11 — 시간을 묻는 대화  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "listening-basico"
  nivel: "BASICO"
  tags: ["tiempo", "horario"]
pasos:
  - "Escuchar la conversación sobre el horario de un evento."
  - "Completar el hueco con la hora correcta en formato 24 horas."
respuesta: "14시"
tipo: completar
respuestas_validas:
  - "14시"
  - "십사 시"
explicacion: "La respuesta es '14시' (2 p.m.) porque el contexto indica claramente la hora en formato de 24 horas."
enunciado: "A: 회의 시간이 언제예요? B: ___에 시작해요."
```



### 12 — 위치를 묻는 질문  
```
metadata:  
  materia: "coreano"  
  tema: "listening-basico"  
  nivel: "BASICO"  
  tags: ["tiempo", "transporte"]  
pasos:  
  - "Reconocer el contexto de un horario de transporte público."  
  - "Identificar la forma correcta del verbo '시작하다' en tercera persona singular."  
respuesta: "10시"  
tipo: completar  
respuestas_validas:  
  - "10시"  
  - "10 시"  
enunciado: "지하철 시간이 언제예요? B: ___에 시작해요."
```

### 13 — 날짜를 묻는 대화  
```
metadata:  
  materia: "coreano"  
  tema: "listening-basico"  
  nivel: "BASICO"  
  tags: ["dirección", "lugar"]  
pasos:  
  - "Comprender la estructura '여기서 ___로 가세요' para indicaciones."  
  - "Identificar el nombre de un lugar común en coreano."  
opciones_explicitas:  
  - "영화관"  
  - "학교"  
  - "도서관"  
  - "병원"  
respuesta: "영화관"  
tipo: mc
```

### 14 — 방향을 묻는 질문  
```
metadata:  
  materia: "coreano"  
  tema: "listening-basico"  
  nivel: "BASICO"  
  tags: ["cambio", "tiempo"]  
pasos:  
  - "Reconocer la preposición '에서' para indicar lugar de inicio."  
  - "Identificar el verbo correcto en contexto de reprogramación."  
respuesta: "오늘"  
tipo: completar  
respuestas_validas:  
  - "오늘"  
  - "오늘"  
enunciado: "회의는 언제예요? B: ___로 바꿨어요."
```

### 15 — 시간을 묻는 대화  
```
metadata:  
  materia: "coreano"  
  tema: "listening-basico"  
  nivel: "BASICO"  
  tags: ["servicio", "lugar"]  
pasos:  
  - "Comprender el uso de '에서' para indicar ubicación de servicio."  
  - "Identificar la forma correcta del verbo '예약하다' en tercera persona singular."  
opciones_explicitas:  
  - "예약"  
  - "예약했어요"  
  - "예약했을까요"  
  - "예약하세요"  
respuesta: "예약했어요"  
tipo: mc
```

### 16 — 위치를 묻는 질문  
```
metadata:  
  materia: "coreano"  
  tema: "listening-basico"  
  nivel: "BASICO"  
  tags: ["dirección", "instalaciones"]  
pasos:  
  - "Reconocer la estructura '여기서 ___로 가세요' para indicar un lugar."  
  - "Identificar el nombre de una instalación física."  
respuesta: "체육관"  
tipo: completar  
respuestas_validas:  
  - "체육관"  
  - "체육관"  
enunciado: "체육관이 어디 있어요? B: 여기서 ___로 가세요."
```

### 17 — 날짜를 묻는 대화  
```
metadata:  
  materia: "coreano"  
  tema: "listening-basico"  
  nivel: "BASICO"  
  tags: ["tiempo", "educación"]  
pasos:  
  - "Identificar la forma correcta del verbo '시작하다' en tercera persona singular."  
  - "Reconocer el uso de '에' para indicar tiempo específico."  
opciones_explicitas:  
  - "10시"  
  - "오늘"  
  - "월요일"  
  - "3시"  
respuesta: "10시"  
tipo: mc
```

### 18 — 방향을 묻는 질문  
```
metadata:  
  materia: "coreano"  
  tema: "listening-basico"  
  nivel: "BASICO"  
  tags: ["dirección", "lugar"]  
pasos:  
  - "Comprender la estructura '여기서 ___로 가세요' para indicaciones."  
  - "Identificar el nombre de un lugar natural en coreano."  
respuesta: "공원"  
tipo: completar  
respuestas_validas:  
  - "공원"  
  - "공 원"  
enunciado: "공원이 어디 있어요? B: 여기서 ___로 가세요."
```

### 19 — 시간을 묻는 대화  
```
metadata:  
  materia: "coreano"  
  tema: "listening-basico"  
  nivel: "BASICO"  
  tags: ["comercio", "lugar"]  
pasos:  
  - "Reconocer el uso de '에서' para indicar ubicación de servicio."  
  - "Identificar la forma correcta del verbo '가다' en tercera persona singular."  
opciones_explicitas:  
  - "갈 거예요"  
  - "갔어요"  
  - "가고 싶어요"  
  - "가세요"  
respuesta: "가세요"  
tipo: mc
```

### 20 — 위치를 묻는 질문  
```
metadata:  
  materia: "coreano"  
  tema: "listening-basico"  
  nivel: "BASICO"  
  tags: ["dirección", "comercio"]  
pasos:  
  - "Comprender la estructura '여기서 ___로 가세요' para indicar un lugar."  
  - "Identificar el nombre de una tienda común en coreano."  
respuesta: "편의점"  
tipo: completar  
respuestas_validas:  
  - "편의점"  
  - "편의 점"  
enunciado: "편의점이 어디 있어요? B: 여기서 ___로 가세요."
```

### 21 — 날짜를 묻는 대화  
```
metadata:  
  materia: "coreano"  
  tema: "listening-basico"  
  nivel: "BASICO"  
  tags: ["tiempo", "deporte"]  
pasos:  
  - "Identificar la forma correcta del verbo '시작하다' en tercera persona singular."  
  - "Reconocer el uso de '에' para indicar tiempo específico."  
opciones_explicitas:  
  - "오후 3시"  
  - "오늘"  
  - "월요일"  
  - "4시"  
respuesta: "오후 3시"  
tipo: mc
```

### 22 — 방향을 묻는 질문  
```
metadata:  
  materia: "coreano"  
  tema: "listening-basico"  
  nivel: "BASICO"  
  tags: ["dirección", "lugar"]  
pasos:  
  - "Comprender la estructura '여기서 ___로 가세요' para indicaciones."  
  - "Identificar el nombre de un lugar rural en coreano."  
respuesta: "농장"  
tipo: completar  
respuestas_validas:  
  - "농장"  
  - "농 장"  
enunciado: "농장이 어디 있어요? B: 여기서 ___로 가세요."
```

### 23 — 시간을 묻는 대화  
```
metadata:  
  materia: "coreano"  
  tema: "listening-basico"  
  nivel: "BASICO"  
  tags: ["servicio", "comida"]  
pasos:  
  - "Reconocer el uso de '에서' para indicar ubicación de servicio."  
  - "Identificar la forma correcta del verbo '예약하다' en tercera persona singular."  
opciones_explicitas:  
  - "예약"  
  - "예약했어요"  
  - "예약했을까요"  
  - "예약하세요"  
respuesta: "예약했어요"  
tipo: mc
```

### 24 — 위치를 묻는 질문  
```
metadata:  
  materia: "coreano"  
  tema: "listening-basico"  
  nivel: "BASICO"  
  tags: ["dirección", "lugar"]  
pasos:  
  - "Comprender la estructura '여기서 ___로 가세요' para indicar un lugar."  
  - "Identificar el nombre de un lugar con animales en coreano."  
respuesta: "동물원"  
tipo: completar  
respuestas_validas:  
  - "동물원"  
  - "동 물원"  
enunciado: "동물원이 어디 있어요? B: 여기서 ___로 가세요."
```

### 25 — 날짜를 묻는 대화  
```
metadata:  
  materia: "coreano"  
  tema: "listening-basico"  
  nivel: "BASICO"  
  tags: ["tiempo", "ocio"]  
pasos:  
  - "Identificar la forma correcta del verbo '시작하다' en tercera persona singular."  
  - "Reconocer el uso de '에' para indicar tiempo específico."  
opciones_explicitas:  
  - "오후 5시"  
  - "오늘"  
  - "월요일"  
  - "6시"  
respuesta: "오후 5시"  
tipo: mc
```
