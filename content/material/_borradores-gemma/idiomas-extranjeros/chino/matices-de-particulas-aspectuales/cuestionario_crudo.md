### 1 — 使用“已经”  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["ya", "completado"]
pasos:
  - "Identificar el aspecto de la acción en el contexto."
  - "Elegir el marcador que indica completitud pasada."
tipo: completar
respuestas_validas:
  - "已经"
explicacion: El marcador “已经” se usa para indicar una acción completada antes del momento de habla. En este contexto, la oración requiere un marcador que indique que el sujeto ya ha llegado al lugar mencionado.
```

### 2 — Uso de “了” en acciones recientes  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["reciente", "completado"]
pasos:
  - "Determinar si la acción fue completada recientemente."
  - "Seleccionar el marcador que indica una acción concluida en el presente."
tipo: completar
respuestas_validas:
  - "了"
explicacion: El marcador “了” se usa para acciones completadas recientemente, en este caso, la lectura del libro fue finalizada poco antes de hablar.
```

### 3 — Elección entre aspectos temporales  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["futuro", "progreso"]
pasos:
  - "Analizar el contexto temporal de la oración."
  - "Seleccionar el marcador que indica una acción en progreso."
opciones_explicitas:
  - "正在"
  - "已经"
  - "还没"
  - "过"
respuesta: "正在"
tipo: mc
explicacion: El marcador “正在” se usa para acciones que ocurren en el momento de habla, lo cual coincide con la descripción del contexto.
```

### 4 — Uso de “还没” para negación  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["negación", "futuro"]
pasos:
  - "Identificar si la acción está pendiente."
  - "Elegir el marcador que indica ausencia de completitud."
tipo: completar
respuestas_validas:
  - "还没"
explicacion: El marcador “还没” se usa para acciones no realizadas aún, en este caso, la entrega del informe no ha ocurrido.
```

### 5 — Aspecto de experiencia con “过”  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["experiencia", "pasado"]
pasos:
  - "Determinar si la acción fue experimentada previamente."
  - "Seleccionar el marcador que indica experiencia."
opciones_explicitas:
  - "过"
  - "了"
  - "已经"
  - "正在"
respuesta: "过"
tipo: mc
explicacion: El marcador “过” se usa para acciones experimentadas en el pasado, lo cual es adecuado para describir la visita al país.
```

### 6 — Uso de “刚刚” para recientemente  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["reciente", "completado"]
pasos:
  - "Identificar la recencia de la acción."
  - "Seleccionar el marcador que indica una acción concluida hace poco."
tipo: completar
respuestas_validas:
  - "刚刚"
explicacion: El marcador “刚刚” se usa para acciones realizadas inmediatamente antes del momento de habla, lo cual es adecuado aquí.
```

### 7 — Contraste entre “已经” y “还没”  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["contraste", "negación"]
pasos:
  - "Evaluar el estado de completitud en ambas oraciones."
  - "Seleccionar el marcador que indica una acción ya realizada."
opciones_explicitas:
  - "已经"
  - "还没"
  - "正在"
  - "过"
respuesta: "已经"
tipo: mc
explicacion: La primera oración requiere un marcador de completitud pasada, mientras que la segunda usa “还没” para negarla.
```

### 8 — Uso de “到目前为止” como marcador  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["hasta ahora", "completado"]
pasos:
  - "Identificar el periodo de tiempo mencionado."
  - "Seleccionar el marcador que indica completitud hasta ese momento."
tipo: completar
respuestas_validas:
  - "到目前为止"
explicacion: El grupo “到目前为止” se usa para acciones completadas desde el inicio hasta un momento específico.
```

### 9 — Uso de “之后” en secuencia temporal  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["secuencia", "futuro"]
pasos:
  - "Determinar la relación temporal entre acciones."
  - "Seleccionar el marcador que indica una acción posterior."
opciones_explicitas:
  - "之后"
  - "之前"
  - "正在"
  - "过"
respuesta: "之后"
tipo: mc
explicacion: El marcador “之后” se usa para acciones que ocurren después de otra, lo cual es adecuado aquí.
```

### 10 — Uso de “之前” en contexto temporal  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["antes", "pasado"]
pasos:
  - "Identificar el momento de referencia."
  - "Seleccionar el marcador que indica una acción previa."
tipo: completar
respuestas_validas:
  - "之前"
explicacion: El marcador “之前” se usa para acciones que ocurrieron antes del momento mencionado.
```

### 11 — Uso de “截止” con periodo definido  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["periodo", "completado"]
pasos:
  - "Identificar el periodo mencionado."
  - "Seleccionar el marcador que indica completitud hasta ese momento."
tipo: completar
respuestas_validas:
  - "截止"
explicacion: El grupo “截止” se usa para acciones completadas dentro de un periodo específico.
```

### 12 — Uso de “在...期间” en contexto temporal  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["durante", "progreso"]
pasos:
  - "Identificar el periodo de ocurrencia."
  - "Seleccionar el marcador que indica una acción en progreso durante ese tiempo."
opciones_explicitas:
  - "在...期间"
  - "已经"
  - "正在"
  - "过"
respuesta: "在...期间"
tipo: mc
explicacion: El grupo “在...期间” se usa para acciones que ocurren dentro de un periodo definido.
```

### 13 — Uso de “自从” en contexto causal  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["causa", "pasado"]
pasos:
  - "Identificar el momento de inicio."
  - "Seleccionar el marcador que indica una acción desde ese momento."
tipo: completar
respuestas_validas:
  - "自从"
explicacion: El grupo “自从” se usa para acciones que comenzaron en un momento específico y continúan.
```

### 14 — Uso de “到现在” como marcador  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["hasta ahora", "completado"]
pasos:
  - "Identificar el periodo de referencia."
  - "Seleccionar el marcador que indica completitud hasta ese momento."
tipo: completar
respuestas_validas:
  - "到现在"
explicacion: El grupo “到现在” se usa para acciones completadas desde el inicio hasta el presente.
```

### 15 — Uso de “将来” en contexto temporal  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["futuro", "progreso"]
pasos:
  - "Identificar el momento de ocurrencia."
  - "Seleccionar el marcador que indica una acción futura."
opciones_explicitas:
  - "将来"
  - "已经"
  - "正在"
  - "过"
respuesta: "将来"
tipo: mc
explicacion: El grupo “将来” se usa para acciones que ocurrirán en el futuro, lo cual es adecuado aquí.
```

### 16 — Uso de “还没...就” en contexto contrastivo  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["contraste", "negación"]
pasos:
  - "Evaluar la relación entre las acciones."
  - "Seleccionar el marcador que indica una acción no realizada aún."
tipo: completar
respuestas_validas:
  - "还没...就"
explicacion: La estructura “还没...就” se usa para contrastar una acción pendiente con una ocurrida antes.
```

### 17 — Uso de “之后” en secuencia temporal  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["secuencia", "futuro"]
pasos:
  - "Determinar la relación temporal entre acciones."
  - "Seleccionar el marcador que indica una acción posterior."
opciones_explicitas:
  - "之后"
  - "之前"
  - "正在"
  - "过"
respuesta: "之后"
tipo: mc
explicacion: El marcador “之后” se usa para acciones que ocurren después de otra, lo cual es adecuado aquí.
```

### 18 — Uso de “到目前为止” como marcador  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["hasta ahora", "completado"]
pasos:
  - "Identificar el periodo de referencia."
  - "Seleccionar el marcador que indica completitud hasta ese momento."
tipo: completar
respuestas_validas:
  - "到目前为止"
explicacion: El grupo “到目前为止” se usa para acciones completadas desde el inicio hasta un momento específico.
```

### 19 — Uso de “已经” en contexto negativo  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["negación", "completado"]
pasos:
  - "Identificar el estado de completitud en la oración."
  - "Seleccionar el marcador que indica una acción ya realizada."
opciones_explicitas:
  - "已经"
  - "还没"
  - "正在"
  - "过"
respuesta: "已经"
tipo: mc
explicacion: El marcador “已经” se usa para acciones completadas, incluso en oraciones negativas.
```

### 20 — Uso de “了” en contexto reciente  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["reciente", "completado"]
pasos:
  - "Determinar si la acción fue completada recientemente."
  - "Seleccionar el marcador que indica una acción concluida en el presente."
tipo: completar
respuestas_validas:
  - "了"
explicacion: El marcador “了” se usa para acciones completadas recientemente, en este caso, la entrega del informe fue finalizada poco antes de hablar.
```

### 21 — Uso de “正在” en progreso  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["progreso", "presente"]
pasos:
  - "Identificar si la acción está en progreso."
  - "Seleccionar el marcador que indica una acción en curso."
opciones_explicitas:
  - "正在"
  - "已经"
  - "还没"
  - "过"
respuesta: "正在"
tipo: mc
explicacion: El marcador “正在” se usa para acciones que ocurren en el momento de habla, lo cual es adecuado aquí.
```

### 22 — Uso de “过” en experiencia  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["experiencia", "pasado"]
pasos:
  - "Determinar si la acción fue experimentada previamente."
  - "Seleccionar el marcador que indica experiencia."
opciones_explicitas:
  - "过"
  - "了"
  - "已经"
  - "正在"
respuesta: "过"
tipo: mc
explicacion: El marcador “过” se usa para acciones experimentadas en el pasado, lo cual es adecuado para describir la visita al país.
```

### 23 — Uso de “刚刚” en contexto reciente  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["reciente", "completado"]
pasos:
  - "Identificar la recencia de la acción."
  - "Seleccionar el marcador que indica una acción concluida hace poco."
tipo: completar
respuestas_validas:
  - "刚刚"
explicacion: El marcador “刚刚” se usa para acciones realizadas inmediatamente antes del momento de habla, lo cual es adecuado aquí.
```

### 24 — Uso de “之前” en contexto temporal  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["antes", "pasado"]
pasos:
  - "Identificar el momento de referencia."
  - "Seleccionar el marcador que indica una acción previa."
opciones_explicitas:
  - "之前"
  - "之后"
  - "正在"
  - "过"
respuesta: "之前"
tipo: mc
explicacion: El marcador “之前” se usa para acciones que ocurrieron antes del momento mencionado.
```

### 25 — Uso de “截止” con periodo definido  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "matices-de-particulas-aspectuales"
  nivel: "HSK56"
  tags: ["periodo", "completado"]
pasos:
  - "Identificar el periodo mencionado."
  - "Seleccionar el marcador que indica completitud hasta ese momento."
respuesta: "截止"
tipo: completar
respuestas_validas:
  - "截止"
explicacion: El grupo “截止” se usa para acciones completadas dentro de un periodo específico.
variables:
  - nombre: "李二十七"