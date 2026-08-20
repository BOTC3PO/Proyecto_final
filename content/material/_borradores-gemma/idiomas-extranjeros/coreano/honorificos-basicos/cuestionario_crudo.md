### 1 — 요청 표현  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "honorificos-basicos"
  nivel: "basico"
  tags: ["request", "-세요"]
pasos:
  - "Identificar el verbo en infinitivo."
  - "Aplicar la forma honorífica '-seyo' para pedir algo."
explicacion: "La forma '-seyo' se usa para hacer peticiones corteses. Ejemplo: '앉으세요' (siéntese)."
enunciado: "이 책을 ___?"
opciones_explicitas:
  - "보세요"
  - "봅시다"
  - "봐요"
respuesta: "보세요"
```



### 2 — 액션 설명  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "honorificos-basicos"
  nivel: "basico"
  tags: ["description", "-시-"]
pasos:
  - "Reconocer el verbo base '걷다' (caminar)."
  - "Aplicar la forma honorífica '-si-' para describir una acción."
explicacion: "La forma '-si-' se usa en oraciones descriptivas para respeto. Ejemplo: '그분은 걸으시며 이야기하셨습니다'."
enunciado: "그분은 ___ 말씀하시다."
opciones_explicitas:
  - "말하십니다"
  - "말하세요"
  - "말합니다"
respuesta: "말하십니다"
```



### 3 — 명령 표현  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "honorificos-basicos"
  nivel: "basico"
  tags: ["command", "-세요"]
pasos:
  - "Identificar el verbo base '닫다' (cerrar)."
  - "Convertir a la forma honorífica '-seyo' para una instrucción."
explicacion: "'닫으세요' es correcto en contextos formales como un hotel. Ejemplo: '문을 닫으세요'."
enunciado: "문을 ___."
opciones_explicitas:
  - "닫으세요"
  - "닫습니다"
  - "닫아요"
respuesta: "닫으세요"
```



### 4 — 요청 표현  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "honorificos-basicos"
  nivel: "basico"
  tags: ["request", "-세요"]
pasos:
  - "Identificar el verbo base '먹다' (comer)."
  - "Aplicar '-seyo' para hacer una petición."
explicacion: "'먹으세요' se usa en contextos formales como un restaurante. Ejemplo: '메뉴를 보고 선택해 주세요'."
enunciado: "이 음식을 ___."
opciones_explicitas:
  - "드세요"
  - "드십시오"
  - "드시다"
respuesta: "드세요"
```



### 5 — 설명 표현  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "honorificos-basicos"
  nivel: "basico"
  tags: ["description", "-시-"]
pasos:
  - "Reconocer el verbo base '읽다' (leer)."
  - "Aplicar '-si-' para describir una acción."
explicacion: "'읽으십니다' se usa en oraciones descriptivas formales. Ejemplo: '그분은 책을 읽으십니다'."
enunciado: "그분은 ___ 책을 읽으십니다."
opciones_explicitas:
  - "항상"
  - "우리가"
  - "그것이"
respuesta: "항상"
```



### 6 — 요청 표현  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "honorificos-basicos"
  nivel: "basico"
  tags: ["request", "-세요"]
pasos:
  - "Identificar el verbo base '켜다' (encender)."
  - "Aplicar '-seyo' para una instrucción."
explicacion: "'켜세요' se usa en contextos formales como un hotel. Ejemplo: '불을 켜세요'."
enunciado: "전등을 ___."
opciones_explicitas:
  - "켜세요"
  - "켜십시오"
  - "켜다"
respuesta: "켜세요"
```



### 7 — 설명 표현  
```yaml
metadata:
  materia: "idiomas-extranjeros/coreano"
  tema: "honorificos-basicos"
  nivel: "basico"
  tags: ["description", "-시-"]
pasos:
  - "Reconocer el verbo base '걷다' (caminar)."
  - "Aplicar '-si-' para describir una acción."
explicacion: "'걷으십니다' se usa en oraciones formales. Ejemplo: '그분은 걸으십니다'."
enunciado: "그분은 ___ 걷습니다."
opciones_explicitas:
  - "항상"
  - "우리가"
  - "그것이"
respuesta: "항상"
```



### 8 — 요청 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "honorificos-basicos"  
  nivel: "basico"  
  tags: ["honoríficos", "acción"]  
pasos:  
  - "Identificar el sujeto y la acción en contexto."  
  - "Aplicar el honorífico correspondiente al verbo."  
respuesta: "산책하십니다"  
tipo: completar  
respuestas_validas:  
  - "산책하십니다"  
  - "산책하시다"  
enunciado: "그분은 ___ 공원을 ___."  
variables:  
  - uno_de([ "산책합니다", "걷습니다" ])  
explicacion: "El honorífico ~시- se usa para mostrar respeto hacia el sujeto (그분). La forma correcta es '산책하십니다' o '산책하시다', dependiendo del contexto."  
```

### 9 — 설명 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "honorificos-basicos"  
  nivel: "basico"  
  tags: ["honoríficos", "lugar"]  
pasos:  
  - "Identificar el sujeto y la acción en contexto."  
  - "Aplicar el honorífico correspondiente al verbo."  
opciones_explicitas:  
  - "가요"  
  - "가시"  
  - "갑니다"  
respuesta: "가시"  
tipo: mc  
enunciado: "친구는 ___ 카페에 가요."  
explicacion: "El honorífico ~시- se usa con sujeto respetuoso (친구). La forma correcta es '가시' para mantener el nivel de cortesía."  
```

### 10 — 요청 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "honorificos-basicos"  
  nivel: "basico"  
  tags: ["honoríficos", "compra"]  
pasos:  
  - "Identificar el sujeto y la acción en contexto."  
  - "Aplicar el honorífico correspondiente al verbo."  
respuesta: "쇼핑하시고"  
tipo: completar  
respuestas_validas:  
  - "쇼핑하시고"  
  - "쇼핑할 거예요"  
enunciado: "우리가 ___ 쇼핑할 거예요."  
variables:  
  - uno_de([ "쇼핑합니다", "구매합니다" ])  
explicacion: "El honorífico ~시- se aplica al verbo '쇼핑하다' para mostrar respeto. La forma correcta es '쇼핑하시고' en este contexto."  
```

### 11 — 설명 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "honorificos-basicos"  
  nivel: "basico"  
  tags: ["honoríficos", "comida"]  
pasos:  
  - "Identificar el sujeto y la acción en contexto."  
  - "Aplicar el honorífico correspondiente al verbo."  
opciones_explicitas:  
  - "드세요"  
  - "마시세요"  
  - "먹으세요"  
respuesta: "드세요"  
tipo: mc  
enunciado: "이 음식을 ___ 드셔 보세요."  
explicacion: "El honorífico ~시- se usa en '드세요' para respetar al sujeto (usted). Es la forma correcta para pedir que probar algo con cortesía."  
```

### 12 — 요청 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "honorificos-basicos"  
  nivel: "basico"  
  tags: ["honoríficos", "acción"]  
pasos:  
  - "Identificar el sujeto y la acción en contexto."  
  - "Aplicar el honorífico correspondiente al verbo."  
respuesta: "읽으시"  
tipo: completar  
respuestas_validas:  
  - "읽으시"  
  - "읽으세요"  
enunciado: "학생들은 ___ 책을 읽으세요."  
variables:  
  - uno_de([ "읽습니다", "보입니다" ])  
explicacion: "El honorífico ~시- se usa con '읽다' para respetar al sujeto (학생들). La forma correcta es '읽으시' en este contexto."  
```

### 13 — 설명 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "honorificos-basicos"  
  nivel: "basico"  
  tags: ["honoríficos", "comunicación"]  
pasos:  
  - "Identificar el sujeto y la acción en contexto."  
  - "Aplicar el honorífico correspondiente al verbo."  
opciones_explicitas:  
  - "전화하세요"  
  - "전화하시고"  
  - "전화합니다"  
respuesta: "전화하시고"  
tipo: mc  
enunciado: "친구에게 ___ 전화하세요."  
explicacion: "El honorífico ~시- se aplica a '전화하다' para respetar al sujeto (친구). La forma correcta es '전화하시고' en este contexto."  
```

### 14 — 요청 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "honorificos-basicos"  
  nivel: "basico"  
  tags: ["honoríficos", "compra"]  
pasos:  
  - "Identificar el sujeto y la acción en contexto."  
  - "Aplicar el honorífico correspondiente al verbo."  
respuesta: "사시"  
tipo: completar  
respuestas_validas:  
  - "사시"  
  - "사세요"  
enunciado: "그분은 ___ 물건을 사십니다."  
variables:  
  - uno_de([ "사는", "구매합니다" ])  
explicacion: "El honorífico ~시- se usa con '사다' para mostrar respeto al sujeto (그분). La forma correcta es '사시' en este contexto."  
```

### 15 — 설명 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "honorificos-basicos"  
  nivel: "basico"  
  tags: ["honoríficos", "comida"]  
pasos:  
  - "Identificar el sujeto y la acción en contexto."  
  - "Aplicar el honorífico correspondiente al verbo."  
opciones_explicitas:  
  - "드세요"  
  - "마시세요"  
  - "먹으세요"  
respuesta: "드세요"  
tipo: mc  
enunciado: "이 커피를 ___ 드셔 보세요."  
explicacion: "El honorífico ~시- se usa en '드세요' para respetar al sujeto (usted). Es la forma correcta para pedir que probar algo con cortesía."  
```

### 16 — 요청 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "honorificos-basicos"  
  nivel: "basico"  
  tags: ["honoríficos", "compra"]  
pasos:  
  - "Identificar el sujeto y la acción en contexto."  
  - "Aplicar el honorífico correspondiente al verbo."  
respuesta: "쇼핑하시고"  
tipo: completar  
respuestas_validas:  
  - "쇼핑하시고"  
  - "쇼핑할 거예요"  
enunciado: "우리가 ___ 쇼핑할 거예요."  
variables:  
  - uno_de([ "쇼핑합니다", "구매합니다" ])  
explicacion: "El honorífico ~시- se aplica al verbo '쇼핑하다' para mostrar respeto. La forma correcta es '쇼핑하시고' en este contexto."  
```

### 17 — 설명 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "honorificos-basicos"  
  nivel: "basico"  
  tags: ["honoríficos", "acción"]  
pasos:  
  - "Identificar el sujeto y la acción en contexto."  
  - "Aplicar el honorífico correspondiente al verbo."  
opciones_explicitas:  
  - "보세요"  
  - "봅니다"  
  - "봐요"  
respuesta: "보세요"  
tipo: mc  
enunciado: "이 영화를 ___ 보세요."  
explicacion: "El honorífico ~시- se usa en '보세요' para respetar al sujeto (usted). Es la forma correcta para pedir que vea algo con cortesía."  
```

### 18 — 요청 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "honorificos-basicos"  
  nivel: "basico"  
  tags: ["honoríficos", "acción"]  
pasos:  
  - "Identificar el sujeto y la acción en contexto."  
  - "Aplicar el honorífico correspondiente al verbo."  
respuesta: "주실"  
tipo: completar  
respuestas_validas:  
  - "주실"  
  - "줄 거예요"  
enunciado: "그분은 ___ 선물을 주실 거예요."  
variables:  
  - uno_de([ "줍니다", "준다" ])  
explicacion: "El honorífico ~시- se usa con '주다' para mostrar respeto al sujeto (그분). La forma correcta es '주실' en este contexto."  
```

### 19 — 설명 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "honorificos-basicos"  
  nivel: "basico"  
  tags: ["honoríficos", "salud"]  
pasos:  
  - "Identificar el sujeto y la acción en contexto."  
  - "Aplicar el honorífico correspondiente al verbo."  
opciones_explicitas:  
  - "드세요"  
  - "마시세요"  
  - "먹으세요"  
respuesta: "드세요"  
tipo: mc  
enunciado: "이 약을 ___ 드셔 보세요."  
explicacion: "El honorífico ~시- se usa en '드세요' para respetar al sujeto (usted). Es la forma correcta para pedir que tome algo con cortesía."  
```

### 20 — 요청 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "honorificos-basicos"  
  nivel: "basico"  
  tags: ["honoríficos", "compra"]  
pasos:  
  - "Identificar el sujeto y la acción en contexto."  
  - "Aplicar el honorífico correspondiente al verbo."  
respuesta: "사시"  
tipo: completar  
respuestas_validas:  
  - "사시"  
  - "사세요"  
enunciado: "우리가 ___ 음식을 사시겠어요?"  
variables:  
  - uno_de([ "사는", "구매합니다" ])  
explicacion: "El honorífico ~시- se usa con '사다' para mostrar respeto al sujeto (우리). La forma correcta es '사시' en este contexto."  
```

### 21 — 설명 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "honorificos-basicos"  
  nivel: "basico"  
  tags: ["honoríficos", "acción"]  
pasos:  
  - "Identificar el sujeto y la acción en contexto."  
  - "Aplicar el honorífico correspondiente al verbo."  
opciones_explicitas:  
  - "들으세요"  
  - "들을 수 있어요"  
  - "들어요"  
respuesta: "들으세요"  
tipo: mc  
enunciado: "이 음악을 ___ 듣고 싶어요."  
explicacion: "El honorífico ~시- se usa en '들으세요' para respetar al sujeto (usted). Es la forma correcta para pedir que escuche algo con cortesía."  
```

### 22 — 요청 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "honorificos-basicos"  
  nivel: "basico"  
  tags: ["honoríficos", "acción"]  
pasos:  
  - "Identificar el sujeto y la acción en contexto."  
  - "Aplicar el honorífico correspondiente al verbo."  
respuesta: "쇼핑하시고"  
tipo: completar  
respuestas_validas:  
  - "쇼핑하시고"  
  - "쇼핑할 거예요"  
enunciado: "우리가 ___ 쇼핑할 거예요."  
variables:  
  - uno_de([ "쇼핑합니다", "구매합니다" ])  
explicacion: "El honorífico ~시- se aplica al verbo '쇼핑하다' para mostrar respeto. La forma correcta es '쇼핑하시고' en este contexto."  
```

### 23 — 설명 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "honorificos-basicos"  
  nivel: "basico"  
  tags: ["honoríficos", "lugar"]  
pasos:  
  - "Identificar el sujeto y la acción en contexto."  
  - "Aplicar el honorífico correspondiente al verbo."  
opciones_explicitas:  
  - "가시"  
  - "갑니다"  
  - "가요"  
respuesta: "가시"  
tipo: mc  
enunciado: "학생은 ___ 학교에 가요."  
explicacion: "El honorífico ~시- se usa con '가다' para respetar al sujeto (학생). La forma correcta es '가시' en este contexto."  
```

### 24 — 요청 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "honorificos-basicos"  
  nivel: "basico"  
  tags: ["honoríficos", "compra"]  
pasos:  
  - "Identificar el sujeto y la acción en contexto."  
  - "Aplicar el honorífico correspondiente al verbo."  
respuesta: "사시"  
tipo: completar  
respuestas_validas:  
  - "사시"  
  - "사세요"  
enunciado: "우리가 ___ 선물을 사시겠어요?"  
variables:  
  - uno_de([ "사는", "구매합니다" ])  
explicacion: "El honorífico ~시- se usa con '사다' para mostrar respeto al sujeto (우리). La forma correcta es '사시' en este contexto."  
```

### 25 — 설명 표현  
```  
metadata:  
  materia: "coreano"  
  tema: "honorificos-basicos"  
  nivel: "basico"  
  tags: ["honoríficos", "acción"]  
pasos:  
  - "Identificar el sujeto y la acción en contexto."  
  - "Aplicar el honorífico correspondiente al verbo."  
opciones_explicitas:  
  - "보세요"  
  - "봅니다"  
  - "봐요"  
respuesta: "보세요"  
tipo: mc  
enunciado: "이 다큐멘터리를 ___ 보세요."  
explicacion: "El honorífico ~시- se usa en '보세요' para respetar al sujeto (usted). Es la forma correcta para pedir que vea algo con cortesía."  
```
