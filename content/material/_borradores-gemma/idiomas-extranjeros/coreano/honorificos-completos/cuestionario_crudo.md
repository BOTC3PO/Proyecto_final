### 1 — 사용법 확인  
```  
metadata:  
  materia: "idiomas-extranjeros/coreano"  
  tema: "honorificos-completos"  
  nivel: "intermedio-alto"  
  tags: ["partículas", "directo"]  
pasos:  
  - "Identificar la partícula de honor adecuada para el contexto."  
explicacion: "La partícula -님 se usa para llamar a alguien con respeto. En este caso, se refiere al sujeto directamente."  
tipo: completar  
enunciado: "그분___ 잘 아시는 분이에요."  
respuestas_validas:
  - "님"```



### 2 — 동사 활용  
```  
metadata:  
  materia: "idiomas-extranjeros/coreano"  
  tema: "honorificos-completos"  
  nivel: "intermedio-alto"  
  tags: ["verbo", "formal"]  
pasos:  
  - "Aplicar la conjugación honorífica al verbo '가다'."  
explicacion: "El verbo '가다' en contexto formal se conjuga como -갑니다. Esto muestra respeto hacia el destinatario."  
tipo: completar  
enunciado: "그분은 ___ 가시겠어요?"  
respuestas_validas:
  - "갑니다"```



### 3 — 요청 표현  
```  
metadata:  
  materia: "idiomas-extranjeros/coreano"  
  tema: "honorificos-completos"  
  nivel: "intermedio-alto"  
  tags: ["comando", "formal"]  
pasos:  
  - "Seleccionar el sufijo adecuado para una solicitud formal."  
explicacion: "El sufijo -세요 se usa en contextos formales para pedir algo con cortesía. Es más suave que -주세요."  
tipo: completar  
enunciado: "이 책을 ___ 주시겠어요?"  
respuestas_validas:
  - "주세요"```



### 4 — 대상 지정  
```  
metadata:  
  materia: "idiomas-extranjeros/coreano"  
  tema: "honorificos-completos"  
  nivel: "intermedio-alto"  
  tags: ["partículas", "indirecto"]  
pasos:  
  - "Identificar la partícula que indica el destinatario indirecto."  
explicacion: "La partícula -께 se usa cuando el destinatario no es el sujeto directo de la oración. Aquí, se dirige a un tercero."  
tipo: mc  
opciones_explicitas:
  - "-에게"
  - "-께"
  - "-에"
respuesta: "-께"  
```



### 5 — 부사어 활용  
```  
metadata:  
  materia: "idiomas-extranjeros/coreano"  
  tema: "honorificos-completos"  
  nivel: "intermedio-alto"  
  tags: ["adverbio", "formal"]  
pasos:  
  - "Aplicar la forma honorífica al adverbio '잘'."  
explicacion: "El adverbio '잘' en contexto formal se transforma en - 잘 하십니다. Esto refleja respeto hacia el sujeto."  
tipo: completar  
enunciado: "그분은 ___ 하십니까?"  
respuestas_validas:
  - "잘"```



### 6 — 명사 활용  
```  
metadata:  
  materia: "idiomas-extranjeros/coreano"  
  tema: "honorificos-completos"  
  nivel: "intermedio-alto"  
  tags: ["sustantivo", "formal"]  
pasos:  
  - "Agregar la partícula de honor al sustantivo."  
explicacion: "El sustantivo '선생님' ya incluye el sufijo -님, que indica respeto. No se necesita añadir otra partícula."  
tipo: mc  
opciones_explicitas:
  - "선생님"
  - "선생께"
  - "선생에게"
respuesta: "선생님"  
```



### 7 — 동작 주체 지정  
```  
metadata:  
  materia: "idiomas-extranjeros/coreano"  
  tema: "honorificos-completos"  
  nivel: "intermedio-alto"  
  tags: ["sujeto", "indirecto"]  
pasos:  
  - "Identificar la partícula que indica el sujeto indirecto."  
explicacion: "La partícula -께서 se usa para referirse al sujeto de una acción en contexto formal. Aquí, se menciona a un tercero."  
tipo: completar  
enunciado: "그분___ 오셨어요?"  
respuestas_validas:
  - "께서"```



### 8 — 질문 형식  
```yaml
metadata:
  materia: "coreano"
  tema: "honoríficos-completos"
  nivel: "intermedio-alto"
  tags: ["futuro", "verbo"]
pasos:
  - "Identificar el tiempo verbal y el sujeto en la oración."
  - "Aplicar la forma honorífica correspondiente al verbo '예약하다'."
respuestas_validas:
  - "예약하시겠어요"
  - "예약하시겠습니까"
tipo: completar
enunciado: "그분은 ___ 예약하시겠어요?"
explicacion: "El verbo '예약하다' en futuro con honorífico se conjuga como '예약하시겠어요'. Esta forma combina el sufijo -시- (honorífico) con -겠어요 (futuro)."
```

---

### 9 — 명사+동사 조합  
```  
metadata:  
  materia: "idiomas-extranjeros/coreano"  
  tema: "honorificos-completos"  
  nivel: "intermedio-alto"  
  tags: ["sustantivo", "verbo"]  
pasos:  
  - "Aplicar la conjugación honorífica al verbo '먹다'."  
explicacion: "El verbo '먹다' en contexto formal se conjuga como - 드십니다. Esto muestra respeto hacia el destinatario."  
tipo: completar  
enunciado: "그분은 ___ 드시겠어요?"  
respuestas_validas:
  - "드십니다"```



### 10 — 요청 형식  
```  
metadata:  
  materia: "idiomas-extranjeros/coreano"  
  tema: "honorificos-completos"  
  nivel: "intermedio-alto"  
  tags: ["comando", "formal"]  
pasos:  
  - "Seleccionar el sufijo adecuado para una solicitud formal."  
explicacion: "El sufijo -주세요 se usa en contextos formales para pedir algo con firmeza. Es más directo que -세요."  
tipo: mc  
opciones_explicitas:
  - "-하세요"
  - "-주세요"
  - "-해요"
respuesta: "-주세요"  
```



### 11 — 부사어 활용  
```yaml
metadata:
  materia: "coreano"
  tema: "honoríficos-completos"
  nivel: "intermedio-alto"
  tags: ["presente", "gerundio"]
pasos:
  - "Reconocer el uso del gerundio en oraciones con honoríficos."
  - "Aplicar la forma correcta para '읽다' en presente continuo."
opciones_explicitas:
  - "읽으세요"
  - "읽고 계십니다"
  - "읽고 계시겠어요"
respuesta: "읽고 계십니다"
tipo: mc
enunciado: "그분은 ___ 읽고 계십니까?"
explicacion: "La forma honorífica de '읽다' en presente continuo es '읽고 계십니다'. El sufijo -계- indica acción continua, y -시- muestra respeto al sujeto."
```

---

### 12 — 대상 지정  
```  
metadata:  
  materia: "idiomas-extranjeros/coreano"  
  tema: "honorificos-completos"  
  nivel: "intermedio-alto"  
  tags: ["partículas", "directo"]  
pasos:  
  - "Identificar la partícula que indica el destinatario directo."  
explicacion: "La partícula -에게 se usa cuando el destinatario es el sujeto directo de la oración. Aquí, se dirige a alguien específico."  
tipo: mc  
opciones_explicitas:
  - "-께"
  - "-에게"
  - "-에"
respuesta: "-에게"  
```



### 13 — 명사 활용  
```  
metadata:  
  materia: "idiomas-extranjeros/coreano"  
  tema: "honorificos-completos"  
  nivel: "intermedio-alto"  
  tags: ["sustantivo", "formal"]  
pasos:  
  - "Agregar la partícula de honor al sustantivo."  
explicacion: "El sustantivo '교수님' ya incluye el sufijo -님, que indica respeto. No se necesita añadir otra partícula."  
tipo: mc  
opciones_explicitas:
  - "교수님"
  - "교수께"
  - "교수에게"
respuesta: "교수님"  
```



### 14 — 동작 주체 지정  
```yaml
metadata:
  materia: "coreano"
  tema: "honoríficos-completos"
  nivel: "intermedio-alto"
  tags: ["futuro", "verbo"]
pasos:
  - "Identificar el verbo base y su forma honorífica."
  - "Ajustar la conjugación para el tiempo futuro."
respuestas_validas:
  - "쓰시겠어요"
  - "쓰시겠습니까"
tipo: completar
enunciado: "그분은 ___ 쓰시겠어요?"
explicacion: "'쓸다' en honorífico y futuro se convierte en '쓰시겠어요'. El sufijo -시- es obligatorio para verbos con sujeto respetuoso."
```

---

### 15 — 질문 형식  
```  
metadata:  
  materia: "idiomas-extranjeros/coreano"  
  tema: "honorificos-completos"  
  nivel: "intermedio-alto"  
  tags: ["pregunta", "formal"]  
pasos:  
  - "Usar la forma honorífica en una pregunta."  
explicacion: "La forma '어디서' se conjuga como - 어디서 오십니까? para preguntar algo a alguien con respeto."  
tipo: completar  
enunciado: "그분은 ___ 오십니까?"  
respuestas_validas:
  - "어디서"```



### 16 — 명사+동사 조합  
```  
metadata:  
  materia: "idiomas-extranjeros/coreano"  
  tema: "honorificos-completos"  
  nivel: "intermedio-alto"  
  tags: ["sustantivo", "verbo"]  
pasos:  
  - "Aplicar la conjugación honorífica al verbo '읽다'."  
explicacion: "El verbo '읽다' en contexto formal se conjuga como - 읽십니다. Esto muestra respeto hacia el destinatario."  
tipo: completar  
enunciado: "그분은 ___ 읽시겠어요?"  
respuestas_validas:
  - "읽십니다"```



### 17 — 요청 형식  
```  
metadata:  
  materia: "idiomas-extranjeros/coreano"  
  tema: "honorificos-completos"  
  nivel: "intermedio-alto"  
  tags: ["comando", "formal"]  
pasos:  
  - "Seleccionar el sufijo adecuado para una solicitud formal."  
explicacion: "El sufijo -하세요 se usa en contextos formales para pedir algo con cortesía. Es menos directo que -주세요."  
tipo: mc  
opciones_explicitas:
  - "-주세요"
  - "-하세요"
  - "-해요"
respuesta: "-하세요"  
```



### 18 — 부사어 활용  
```yaml
metadata:
  materia: "coreano"
  tema: "honoríficos-completos"
  nivel: "intermedio-alto"
  tags: ["oferta", "verbo"]
pasos:
  - "Reconocer la estructura de oferta con honorífico."
  - "Combinar el verbo '보내다' con la forma -주시- para respeto."
opciones_explicitas:
  - "보내주세요"
  - "보내주시겠어요"
  - "보내실게요"
respuesta: "보내주시겠어요"
tipo: mc
enunciado: "이 책을 ___ 주시겠어요?"
explicacion: "'보내다' en honorífico y futuro se conjuga como '보내시겠어요'. La forma -주시- combina respeto con la intención de ofrecer algo."
```

---

### 19 — 대상 지정  
```  
metadata:  
  materia: "idiomas-extranjeros/coreano"  
  tema: "honorificos-completos"  
  nivel: "intermedio-alto"  
  tags: ["partículas", "directo"]  
pasos:  
  - "Identificar la partícula que indica el destinatario directo."  
explicacion: "La partícula -에 se usa cuando el destinatario es el sujeto directo de la oración. Aquí, se dirige a alguien específico."  
tipo: mc  
opciones_explicitas:
  - "-께"
  - "-에게"
  - "-에"
respuesta: "-에"  
```



### 20 — 명사 활용  
```  
metadata:  
  materia: "idiomas-extranjeros/coreano"  
  tema: "honorificos-completos"  
  nivel: "intermedio-alto"  
  tags: ["sustantivo", "formal"]  
pasos:  
  - "Agregar la partícula de honor al sustantivo."  
explicacion: "El sustantivo '의사님' ya incluye el sufijo -님, que indica respeto. No se necesita añadir otra partícula."  
tipo: mc  
opciones_explicitas:
  - "의사님"
  - "의사께"
  - "의사에게"
respuesta: "의사님"  
```



### 21 — 동작 주체 지정  
```yaml
metadata:
  materia: "coreano"
  tema: "honoríficos-completos"
  nivel: "intermedio-alto"
  tags: ["pasado", "verbo"]
pasos:
  - "Identificar el tiempo verbal y aplicar el sufijo honorífico."
  - "Verificar que el verbo '마시다' esté en forma pasada con -셨어요."
respuestas_validas:
  - "마셨어요"
  - "마셨습니다"
tipo: completar
enunciado: "그분은 ___ 마셨어요?"
explicacion: "'마시다' en honorífico y pasado se escribe '마셨어요'. El sufijo -셨- indica acción pasada, mientras que -어요 mantiene el tono respetuoso."
```

---

### 22 — 질문 형식  
```yaml
metadata:
  materia: "coreano"
  tema: "honoríficos-completos"
  nivel: "intermedio-alto"
  tags: ["pregunta", "verbo"]
pasos:
  - "Reconocer el uso de ? para preguntas con honoríficos."
  - "Aplicar la forma correcta del verbo '하다' en este contexto."
opciones_explicitas:
  - "하십니까"
  - "하세요"
  - "하시겠어요"
respuesta: "하십니까"
tipo: mc
enunciado: "그분은 ___ 하십니까?"
explicacion: "'하다' en honorífico y pregunta se conjuga como '하십니까'. El sufijo -시- es esencial para mantener el respeto al sujeto."
```

---

### 23 — 명사+동사 조합  
```  
metadata:  
  materia: "idiomas-extranjeros/coreano"  
  tema: "honorificos-completos"  
  nivel: "intermedio-alto"  
  tags: ["sustantivo", "verbo"]  
pasos:  
  - "Aplicar la conjugación honorífica al verbo '쓰다'."  
explicacion: "El verbo '쓰다' en contexto formal se conjuga como - 쓰십니다. Esto muestra respeto hacia el destinatario."  
tipo: completar  
enunciado: "그분은 ___ 쓰시겠어요?"  
respuestas_validas:
  - "쓰십니다"```



### 24 — 요청 형식  
```  
metadata:  
  materia: "idiomas-extranjeros/coreano"  
  tema: "honorificos-completos"  
  nivel: "intermedio-alto"  
  tags: ["comando", "formal"]  
pasos:  
  - "Seleccionar el sufijo adecuado para una solicitud formal."  
explicacion: "El sufijo -해요 se usa en contextos formales para pedir algo con cortesía. Es menos directo que -주세요 o -하세요."  
tipo: mc  
opciones_explicitas:
  - "-주세요"
  - "-하세요"
  - "-해요"
respuesta: "-해요"  
```



### 25 — 부사어 활용  
```yaml
metadata:
  materia: "coreano"
  tema: "honoríficos-completos"
  nivel: "intermedio-alto"
  tags: ["futuro", "verbo"]
pasos:
  - "Identificar el verbo base y su conjugación honorífica."
  - "Ajustar al tiempo futuro con -시겠어요."
respuestas_validas:
  - "사시겠어요"
  - "사시겠습니까"
tipo: completar
enunciado: "그분은 ___ 사시겠어요?"
explicacion: "'사다' en honorífico y futuro se convierte en '사시겠어요'. El sufijo -시- es obligatorio para verbos con sujeto respetuoso."
```
