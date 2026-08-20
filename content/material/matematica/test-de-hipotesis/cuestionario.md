# Matemática — Test de hipótesis (cuestionario, 20 preguntas VBLang)

> Tema: `D14`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la hipótesis nula

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "basico"
  tags: ["hipotesis", "vocabulario"]

enunciado: "¿Qué es la hipótesis nula (H₀)?"
tipo: mc
opciones_explicitas:
  - "La afirmación conservadora de partida, 'no pasa nada raro' (por ejemplo, que una moneda es justa)"
  - "Lo que el investigador quiere demostrar que es verdad"
  - "El resultado exacto que se obtuvo en la muestra"
respuesta: "La afirmación conservadora de partida, 'no pasa nada raro' (por ejemplo, que una moneda es justa)"

explicacion: |
  El test busca evidencia para rechazarla o no, nunca la da por
  demostrada.
```

### 2 — Qué es la hipótesis alternativa

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "basico"
  tags: ["hipotesis", "vocabulario"]

enunciado: "¿Qué es la hipótesis alternativa (H₁)?"
tipo: mc
opciones_explicitas:
  - "Lo contrario de la hipótesis nula: lo que se sospecha o se quiere demostrar (por ejemplo, que la moneda está cargada)"
  - "Otra forma de llamar a la hipótesis nula"
  - "El nivel de significancia elegido para el test"
respuesta: "Lo contrario de la hipótesis nula: lo que se sospecha o se quiere demostrar (por ejemplo, que la moneda está cargada)"

explicacion: |
  H₀ y H₁ son mutuamente excluyentes y cubren todos los casos.
```

### 3 — Qué es el p-valor

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "intermedio"
  tags: ["p_valor", "vocabulario"]

enunciado: "¿Qué es el p-valor?"
tipo: mc
opciones_explicitas:
  - "La probabilidad de observar un resultado tan extremo (o más) que el obtenido, asumiendo que la hipótesis nula fuera cierta"
  - "La probabilidad de que la hipótesis nula sea verdadera"
  - "El porcentaje de la muestra que apoya la hipótesis alternativa"
respuesta: "La probabilidad de observar un resultado tan extremo (o más) que el obtenido, asumiendo que la hipótesis nula fuera cierta"

explicacion: |
  Un p-valor chico dice: "si H₀ fuera cierta, sería muy raro ver un
  resultado como este".
```

### 4 — Qué es el nivel de significancia

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "intermedio"
  tags: ["significancia", "vocabulario"]

enunciado: "¿Qué es el nivel de significancia (α)?"
tipo: mc
opciones_explicitas:
  - "El umbral fijado de antemano para decidir qué tan improbable tiene que ser el resultado antes de rechazar H₀ (habitualmente 0,05)"
  - "La probabilidad de que la hipótesis alternativa sea verdadera"
  - "El tamaño mínimo de muestra necesario para el test"
respuesta: "El umbral fijado de antemano para decidir qué tan improbable tiene que ser el resultado antes de rechazar H₀ (habitualmente 0,05)"

explicacion: |
  Se fija ANTES de ver los datos, no después.
```

### 5 — Completar: regla de decisión

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "intermedio"
  tags: ["hipotesis", "completar"]

tipo: completar
enunciado: "Completá la regla de decisión: se rechaza la hipótesis nula si el p-valor es ___ que el nivel de significancia α."
respuestas_validas:
  - "menor"

explicacion: |
  p-valor < α → se rechaza H₀.
```

### 6 — Problema: decidir con p-valor y α=0,05

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["hipotesis", "problema"]

variables:
  p_valor: uno_de([0.01, 0.03, 0.08, 0.12])
  alfa: 0.05

respuesta: p_valor < alfa
tipo: vf

enunciado: "Un test dio un p-valor de {p_valor}, con nivel de significancia α = {alfa}. ¿Se rechaza la hipótesis nula?"

explicacion: |
  Se compara directo el p-valor contra α: si es menor, se rechaza H₀.
```

### 7 — No rechazar H₀ no es demostrar que es verdadera

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["hipotesis"]

respuesta: verdadero
tipo: vf

enunciado: "'No rechazar la hipótesis nula' no es lo mismo que 'demostrar que la hipótesis nula es verdadera' — sólo significa que no hubo evidencia suficiente para descartarla."

explicacion: |
  Un test nunca demuestra que H₀ es cierta, como mucho no encuentra
  evidencia en contra.
```

### 8 — Qué significa "estadísticamente significativo"

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "intermedio"
  tags: ["significancia", "vocabulario"]

enunciado: "¿Qué significa que un resultado sea 'estadísticamente significativo'?"
tipo: mc
opciones_explicitas:
  - "Que el p-valor obtenido es menor que el nivel de significancia elegido, así que se rechaza la hipótesis nula"
  - "Que el resultado es importante o grande en términos prácticos"
  - "Que la muestra usada fue muy grande"
respuesta: "Que el p-valor obtenido es menor que el nivel de significancia elegido, así que se rechaza la hipótesis nula"

explicacion: |
  "Significativo" acá es un término técnico, no sinónimo de
  "importante".
```

### 9 — Problema: la moneda con 8 caras en 10 tiros

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["hipotesis", "problema"]

variables:
  p_valor_moneda: 0.055
  alfa: 0.05

respuesta: p_valor_moneda < alfa
tipo: vf

enunciado: "Se tira una moneda 10 veces y salen 8 caras. H₀ es 'la moneda es justa'. El p-valor de este resultado es {p_valor_moneda}, con α = {alfa}. ¿Se rechaza H₀ (se concluye que la moneda está cargada)?"

explicacion: |
  {p_valor_moneda} > {alfa}: el resultado es llamativo, pero no
  alcanza el umbral fijado para rechazar H₀.
```

### 10 — Qué es el error de Tipo I

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["error_tipo1", "vocabulario"]

enunciado: "¿Qué es el error de Tipo I?"
tipo: mc
opciones_explicitas:
  - "Rechazar la hipótesis nula cuando en realidad era cierta (falso positivo)"
  - "No rechazar la hipótesis nula cuando en realidad era falsa (falso negativo)"
  - "Elegir mal el tamaño de la muestra"
respuesta: "Rechazar la hipótesis nula cuando en realidad era cierta (falso positivo)"

explicacion: |
  Su probabilidad es, justamente, el nivel de significancia α.
```

### 11 — Qué es el error de Tipo II

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["error_tipo2", "vocabulario"]

enunciado: "¿Qué es el error de Tipo II?"
tipo: mc
opciones_explicitas:
  - "No rechazar la hipótesis nula cuando en realidad era falsa (falso negativo)"
  - "Rechazar la hipótesis nula cuando en realidad era cierta (falso positivo)"
  - "Usar un nivel de significancia mayor a 0,05"
respuesta: "No rechazar la hipótesis nula cuando en realidad era falsa (falso negativo)"

explicacion: |
  Por ejemplo, no detectar que una moneda estaba cargada, aunque de
  verdad lo estuviera.
```

### 12 — Bajar α hace más difícil rechazar H₀

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["significancia"]

respuesta: verdadero
tipo: vf

enunciado: "Bajar el nivel de significancia (por ejemplo, de α=0,05 a α=0,01) hace más difícil rechazar la hipótesis nula, porque exige un p-valor todavía más chico."

explicacion: |
  Un umbral más estricto reduce el riesgo de error de Tipo I, pero
  aumenta el riesgo de error de Tipo II.
```

### 13 — Relación con el intervalo de confianza

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["hipotesis", "aplicacion"]

enunciado: "¿Qué relación tiene el test de hipótesis con el intervalo de confianza?"
tipo: mc
opciones_explicitas:
  - "Usan exactamente el mismo aparato matemático (error estándar, valores z); el intervalo estima un rango, el test decide sí o no sobre una afirmación puntual"
  - "No tienen ninguna relación entre sí"
  - "El test de hipótesis reemplaza por completo al intervalo de confianza"
respuesta: "Usan exactamente el mismo aparato matemático (error estándar, valores z); el intervalo estima un rango, el test decide sí o no sobre una afirmación puntual"

explicacion: |
  Ambos se apoyan en el teorema central del límite para justificar el
  uso de la distribución normal.
```

### 14 — Problema: decidir con α=0,01 (más estricto)

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["hipotesis", "problema"]

variables:
  p_valor: uno_de([0.005, 0.02, 0.04])
  alfa: 0.01

respuesta: p_valor < alfa
tipo: vf

enunciado: "Un test dio un p-valor de {p_valor}, con un nivel de significancia más estricto, α = {alfa}. ¿Se rechaza la hipótesis nula?"

explicacion: |
  Con un α más chico, hace falta un p-valor todavía más chico para
  rechazar H₀.
```

### 15 — Aplicación real: ensayo clínico

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "basico"
  tags: ["hipotesis", "aplicacion"]

enunciado: "Un ensayo clínico prueba un nuevo medicamento contra un placebo. H₀ es 'el medicamento no tiene ningún efecto real'. Si el p-valor del ensayo da 0,001 (con α=0,05), ¿qué se concluye?"
tipo: mc
opciones_explicitas:
  - "Se rechaza H₀: hay evidencia estadísticamente significativa de que el medicamento sí tiene un efecto"
  - "Se acepta H₀ como demostrada: el medicamento definitivamente no funciona"
  - "No se puede concluir nada sin conocer el precio del medicamento"
respuesta: "Se rechaza H₀: hay evidencia estadísticamente significativa de que el medicamento sí tiene un efecto"

explicacion: |
  0,001 < 0,05 — el resultado observado sería muy improbable si el
  medicamento no tuviera ningún efecto real.
```

### 16 — Significancia estadística no es importancia práctica

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["significancia"]

respuesta: verdadero
tipo: vf

enunciado: "Un resultado 'estadísticamente significativo' (p-valor bajo) no significa necesariamente que el efecto sea grande o importante en la práctica — con una muestra enorme, hasta una diferencia mínima puede dar un p-valor muy bajo."

explicacion: |
  Significancia estadística y relevancia práctica son dos preguntas
  distintas.
```

### 17 — Problema: comparar dos tests con el mismo α

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["hipotesis", "problema"]

variables:
  p_valor_a: 0.02
  p_valor_b: 0.08
  alfa: 0.05

respuesta: p_valor_a < alfa
tipo: vf

enunciado: "Test A dio p-valor {p_valor_a}; Test B dio p-valor {p_valor_b}, ambos con α = {alfa}. ¿Se rechaza H₀ en el Test A?"

explicacion: |
  {p_valor_a} < {alfa}, así que en el Test A sí se rechaza H₀ (a
  diferencia del Test B, donde {p_valor_b} > {alfa}).
```

### 18 — Quién define H₀ y quién H₁

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "intermedio"
  tags: ["hipotesis", "vocabulario"]

enunciado: "En un test de hipótesis, ¿cuál de las dos hipótesis representa el 'status quo' o la postura conservadora por defecto?"
tipo: mc
opciones_explicitas:
  - "La hipótesis nula (H₀)"
  - "La hipótesis alternativa (H₁)"
respuesta: "La hipótesis nula (H₀)"

explicacion: |
  H₁ es lo que hay que reunir evidencia para poder afirmar.
```

### 19 — Problema: el nivel de significancia se fija antes

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["significancia"]

respuesta: verdadero
tipo: vf

enunciado: "El nivel de significancia α debe fijarse ANTES de ver los resultados del test, no elegirse después según convenga para que el resultado dé 'significativo'."

explicacion: |
  Elegir α después de ver los datos invalida la lógica del test (es
  una forma de sesgo conocida como 'p-hacking').
```

### 20 — Cierre: para qué sirve el test de hipótesis

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve un test de hipótesis?"
tipo: mc
opciones_explicitas:
  - "Para decidir, con datos limitados de una muestra, si hay evidencia suficiente para descartar una afirmación de partida (H₀), controlando el riesgo de equivocarse"
  - "Para demostrar con certeza absoluta que una hipótesis es verdadera"
  - "Sólo sirve en ensayos clínicos de medicamentos"
respuesta: "Para decidir, con datos limitados de una muestra, si hay evidencia suficiente para descartar una afirmación de partida (H₀), controlando el riesgo de equivocarse"

explicacion: |
  Cierra la cadena de `../muestreo-y-sesgo/` →
  `../teorema-central-del-limite/` → `../intervalo-de-confianza/` →
  test de hipótesis: de una muestra a una decisión, con el riesgo de
  error explícitamente controlado.
```
