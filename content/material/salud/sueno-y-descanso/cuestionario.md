# Salud — Sueño y descanso (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Horas recomendadas

```
metadata:
  materia: "salud"
  tema: "sueno_y_descanso"
  nivel: "basico"
  tags: ["sueno", "habitos", "salud"]

enunciado: "Según las recomendaciones internacionales, ¿cuántas horas por noche necesita un adolescente de 13 a 18 años?"
tipo: mc
opciones_explicitas:
  - "Entre 8 y 10 horas"
  - "Entre 4 y 6 horas"
  - "Entre 11 y 13 horas"
  - "Con 5 horas alcanza si se duerme una siesta"
respuesta: "Entre 8 y 10 horas"

explicacion: |
  Es el rango de referencia; hay variaciones individuales.
```

### 2 — Dormir es apagarse

```
metadata:
  materia: "salud"
  tema: "sueno_y_descanso"
  nivel: "basico"
  tags: ["sueno", "habitos", "salud"]

respuesta: verdadero
tipo: vf

enunciado: "Durante el sueño el cerebro y el cuerpo siguen trabajando: se consolidan recuerdos y se regulan hormonas."

explicacion: |
  El sueño es un proceso activo y necesario.
```

### 3 — Duración del ciclo

```
metadata:
  materia: "salud"
  tema: "sueno_y_descanso"
  nivel: "basico"
  tags: ["sueno", "habitos", "salud"]

tipo: completar
enunciado: "Un ciclo de sueño dura aproximadamente ___ minutos."
respuestas_validas:
  - "90"
  - "noventa"

explicacion: |
  Cada noche se repiten varios ciclos de unos 90 minutos.
```

### 4 — Etapa de recuperación física

```
metadata:
  materia: "salud"
  tema: "sueno_y_descanso"
  nivel: "intermedio"
  tags: ["sueno", "habitos", "salud"]

enunciado: "¿Qué etapa del sueño es clave para la recuperación física?"
tipo: mc
opciones_explicitas:
  - "Solamente la vigilia tranquila"
  - "El momento justo antes de dormirse"
  - "Ninguna: el cuerpo no se recupera durmiendo"
  - "El sueño profundo"
respuesta: "El sueño profundo"

explicacion: |
  El sueño profundo se asocia a reparación del cuerpo; el REM, a memoria y regulación emocional.
```

### 5 — Sueño REM

```
metadata:
  materia: "salud"
  tema: "sueno_y_descanso"
  nivel: "intermedio"
  tags: ["sueno", "habitos", "salud"]

enunciado: "¿Con qué se asocia especialmente el sueño REM?"
tipo: mc
opciones_explicitas:
  - "Con la memoria, el aprendizaje y la regulación emocional"
  - "Con la digestión de la cena"
  - "Con el crecimiento de los huesos únicamente"
  - "Con el sueño ligero sin sueños"
respuesta: "Con la memoria, el aprendizaje y la regulación emocional"

explicacion: |
  En REM suelen ocurrir los sueños más vívidos.
```

### 6 — Ahorro de tiempo

```
metadata:
  materia: "salud"
  tema: "sueno_y_descanso"
  nivel: "basico"
  tags: ["sueno", "habitos", "salud"]

respuesta: falso
tipo: vf

enunciado: "Dormir poco es una forma eficiente de ganar tiempo sin consecuencias."

explicacion: |
  Dormir poco genera una deuda con costos en atención, ánimo y salud.
```

### 7 — Reloj biológico

```
metadata:
  materia: "salud"
  tema: "sueno_y_descanso"
  nivel: "intermedio"
  tags: ["sueno", "habitos", "salud"]

enunciado: "¿Qué suele pasar con el reloj biológico en la pubertad?"
tipo: mc
opciones_explicitas:
  - "Se adelanta mucho y da sueño a las 18"
  - "Se detiene"
  - "Tiende a atrasarse: la melatonina se libera más tarde"
  - "No cambia nunca"
respuesta: "Tiende a atrasarse: la melatonina se libera más tarde"

explicacion: |
  Por eso a muchos adolescentes les cuesta dormirse temprano.
```

### 8 — Hormona del sueño

```
metadata:
  materia: "salud"
  tema: "sueno_y_descanso"
  nivel: "intermedio"
  tags: ["sueno", "habitos", "salud"]

tipo: completar
enunciado: "La hormona que prepara al cuerpo para dormir y que se libera más tarde en la adolescencia se llama ___."
respuestas_validas:
  - "melatonina"

explicacion: |
  La luz influye en su liberación.
```

### 9 — Pereza

```
metadata:
  materia: "salud"
  tema: "sueno_y_descanso"
  nivel: "intermedio"
  tags: ["sueno", "habitos", "salud"]

respuesta: falso
tipo: vf

enunciado: "A muchos adolescentes les cuesta despertarse temprano por pereza y no por cambios del reloj biológico."

explicacion: |
  El atraso del reloj biológico es parte del desarrollo; igual conviene mantener hábitos regulares.
```

### 10 — Fin de semana

```
metadata:
  materia: "salud"
  tema: "sueno_y_descanso"
  nivel: "intermedio"
  tags: ["sueno", "habitos", "salud"]

enunciado: "¿Qué efecto tiene dormir muchísimo más los fines de semana?"
tipo: mc
opciones_explicitas:
  - "Borra por completo la deuda de sueño"
  - "Compensa un poco pero desordena el reloj y el lunes cuesta más"
  - "No tiene ningún efecto"
  - "Mejora la memoria de la semana siguiente"
respuesta: "Compensa un poco pero desordena el reloj y el lunes cuesta más"

explicacion: |
  Lo mejor son horarios relativamente regulares todos los días.
```

### 11 — Pantallas

```
metadata:
  materia: "salud"
  tema: "sueno_y_descanso"
  nivel: "basico"
  tags: ["sueno", "habitos", "salud"]

enunciado: "¿Qué recomendación ayuda a dormir mejor respecto de las pantallas?"
tipo: mc
opciones_explicitas:
  - "Mirar videos hasta quedarse dormido"
  - "Usar el celular como único reloj bajo la almohada"
  - "Apagar el celular al menos una hora antes y dejarlo fuera de la cama"
  - "Subir el brillo para despertar el cerebro"
respuesta: "Apagar el celular al menos una hora antes y dejarlo fuera de la cama"

explicacion: |
  La luz y el contenido que activa retrasan el sueño.
```

### 12 — Cafeína

```
metadata:
  materia: "salud"
  tema: "sueno_y_descanso"
  nivel: "basico"
  tags: ["sueno", "habitos", "salud"]

respuesta: verdadero
tipo: vf

enunciado: "La cafeína del café, el mate, la cola y las bebidas energizantes puede dificultar dormir si se consume a la tarde o noche."

explicacion: |
  Tarda horas en eliminarse del cuerpo.
```

### 13 — Energizantes

```
metadata:
  materia: "salud"
  tema: "sueno_y_descanso"
  nivel: "intermedio"
  tags: ["sueno", "habitos", "salud"]

respuesta: falso
tipo: vf

enunciado: "Las bebidas energizantes son una buena forma de aguantar cuando se durmió poco."

explicacion: |
  No reemplazan el descanso y pueden empeorar el sueño siguiente.
```

### 14 — Ambiente

```
metadata:
  materia: "salud"
  tema: "sueno_y_descanso"
  nivel: "basico"
  tags: ["sueno", "habitos", "salud"]

enunciado: "¿Cómo conviene que sea el ambiente para dormir?"
tipo: mc
opciones_explicitas:
  - "Con luces y música fuerte"
  - "Oscuro, silencioso y fresco"
  - "Muy iluminado para despertar temprano"
  - "Con el televisor prendido toda la noche"
respuesta: "Oscuro, silencioso y fresco"

explicacion: |
  El ambiente influye en la calidad del sueño.
```

### 15 — Higiene del sueño

```
metadata:
  materia: "salud"
  tema: "sueno_y_descanso"
  nivel: "basico"
  tags: ["sueno", "habitos", "salud"]

tipo: completar
enunciado: "Al conjunto de hábitos que favorecen un buen dormir se lo llama higiene del ___."
respuestas_validas:
  - "sueño"
  - "sueno"

explicacion: |
  No tiene que ver con la limpieza sino con los hábitos.
```

### 16 — Si no hay sueño

```
metadata:
  materia: "salud"
  tema: "sueno_y_descanso"
  nivel: "intermedio"
  tags: ["sueno", "habitos", "salud"]

enunciado: "Si pasaste un buen rato en la cama sin poder dormirte, ¿qué suele recomendarse?"
tipo: mc
opciones_explicitas:
  - "Mirar el reloj cada pocos minutos"
  - "Tomar una pastilla para dormir sin consultar"
  - "Revisar las redes hasta cansarte"
  - "Levantarte un rato, hacer algo tranquilo con poca luz y volver cuando tengas sueño"
respuesta: "Levantarte un rato, hacer algo tranquilo con poca luz y volver cuando tengas sueño"

explicacion: |
  Mirar el reloj y la ansiedad por dormir empeoran el insomnio.
```

### 17 — Pastillas

```
metadata:
  materia: "salud"
  tema: "sueno_y_descanso"
  nivel: "intermedio"
  tags: ["sueno", "habitos", "salud"]

respuesta: falso
tipo: vf

enunciado: "Es seguro tomar pastillas para dormir o suplementos por cuenta propia si cuesta dormirse."

explicacion: |
  Se usan solo con indicación médica.
```

### 18 — Señal de pocas horas

```
metadata:
  materia: "salud"
  tema: "sueno_y_descanso"
  nivel: "basico"
  tags: ["sueno", "habitos", "salud"]

enunciado: "¿Cuál es una señal frecuente de dormir poco?"
tipo: mc
opciones_explicitas:
  - "Más energía durante todo el día"
  - "Somnolencia, irritabilidad y dificultad para concentrarse"
  - "Mejor memoria"
  - "Ninguna señal visible"
respuesta: "Somnolencia, irritabilidad y dificultad para concentrarse"

explicacion: |
  Los efectos aparecen en el día a día.
```

### 19 — Cuándo consultar

```
metadata:
  materia: "salud"
  tema: "sueno_y_descanso"
  nivel: "avanzado"
  tags: ["sueno", "habitos", "salud"]

enunciado: "¿Cuál de estas situaciones justifica consultar a un profesional?"
tipo: mc
opciones_explicitas:
  - "Dormir una noche mal antes de un examen"
  - "Despertarse una vez por un ruido"
  - "Ronquidos fuertes con pausas para respirar y somnolencia intensa de día"
  - "Soñar de vez en cuando"
respuesta: "Ronquidos fuertes con pausas para respirar y somnolencia intensa de día"

explicacion: |
  Pueden indicar un trastorno del sueño que requiere evaluación.
```

### 20 — Actividad física

```
metadata:
  materia: "salud"
  tema: "sueno_y_descanso"
  nivel: "intermedio"
  tags: ["sueno", "habitos", "salud"]

respuesta: verdadero
tipo: vf

enunciado: "La actividad física durante el día favorece el sueño, aunque no conviene hacerla muy cerca de la hora de dormir."

explicacion: |
  Es parte de los hábitos recomendados.
```

### 21 — Cena

```
metadata:
  materia: "salud"
  tema: "sueno_y_descanso"
  nivel: "intermedio"
  tags: ["sueno", "habitos", "salud"]

enunciado: "¿Qué conviene respecto de la cena?"
tipo: mc
opciones_explicitas:
  - "Que sea liviana y sin atracones"
  - "Que sea muy abundante para dormir mejor"
  - "Saltearla siempre"
  - "Tomar bebidas con cafeína con la cena"
respuesta: "Que sea liviana y sin atracones"

explicacion: |
  Una digestión pesada puede interferir con el descanso.
```

### 22 — Mitos

```
metadata:
  materia: "salud"
  tema: "sueno_y_descanso"
  nivel: "avanzado"
  tags: ["sueno", "habitos", "salud"]

respuesta: falso
tipo: vf

enunciado: "Cortar la noche en dos tandas con alarmas equivale a dormir lo mismo de corrido, porque lo que cuenta son solo las horas."

explicacion: |
  Los ciclos completos importan: interrumpirlos reduce la calidad del sueño.
```

### 23 — Tristeza persistente

```
metadata:
  materia: "salud"
  tema: "sueno_y_descanso"
  nivel: "avanzado"
  tags: ["sueno", "habitos", "salud"]

enunciado: "Si además de dormir mal hay tristeza o angustia que no se va, ¿qué conviene hacer?"
tipo: mc
opciones_explicitas:
  - "Esperar a que se pase solo siempre"
  - "Aislarse y no contarlo"
  - "Hablar con un adulto de confianza y consultar a un profesional de la salud"
  - "Automedicarse"
respuesta: "Hablar con un adulto de confianza y consultar a un profesional de la salud"

explicacion: |
  Pedir ayuda a tiempo es lo más recomendable.
```
