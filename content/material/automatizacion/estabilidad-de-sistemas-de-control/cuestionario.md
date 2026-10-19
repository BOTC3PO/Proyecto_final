# Automatizacion — Estabilidad de sistemas de control (cuestionario, 22 preguntas VBLang)

> Tema: `automatizacion/estabilidad-de-sistemas-de-control`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Un sistema de control es estable si...

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "basico"
  tags: ["estabilidad", "polos"]

enunciado: "Un sistema de control es estable si..."
tipo: mc
opciones_explicitas:
  - "Después de una perturbación termina asentándose en un valor"
  - "Su salida crece sin límite"
  - "Nunca cambia"
  - "Oscila cada vez más"
respuesta: "Después de una perturbación termina asentándose en un valor"

explicacion: |
  La estabilidad es la capacidad de volver a un equilibrio.
```

### 2 — ¿Qué es un sistema marginalmente estable

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "basico"
  tags: ["estabilidad", "polos"]

enunciado: "¿Qué es un sistema marginalmente estable?"
tipo: mc
opciones_explicitas:
  - "Uno que oscila con amplitud constante"
  - "Uno que se apaga rápido"
  - "Uno que crece sin límite"
  - "Uno sin realimentación"
respuesta: "Uno que oscila con amplitud constante"

explicacion: |
  Está en el límite entre estable e inestable.
```

### 3 — ¿Qué caracteriza a un sistema inestable

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "basico"
  tags: ["estabilidad", "polos"]

enunciado: "¿Qué caracteriza a un sistema inestable?"
tipo: mc
opciones_explicitas:
  - "La salida se aleja cada vez más del equilibrio"
  - "La salida se apaga"
  - "La salida es constante"
  - "No tiene polos"
respuesta: "La salida se aleja cada vez más del equilibrio"

explicacion: |
  Pierde el control.
```

### 4 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "basico"
  tags: ["estabilidad", "polos"]

enunciado: "El chillido de un micrófono cerca del parlante es un ejemplo de..."
tipo: mc
opciones_explicitas:
  - "Realimentación positiva con ganancia excesiva"
  - "Control PID"
  - "Lazo abierto"
  - "Régimen permanente"
respuesta: "Realimentación positiva con ganancia excesiva"

explicacion: |
  El ruido se amplifica y vuelve al micrófono una y otra vez.
```

### 5 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "intermedio"
  tags: ["estabilidad", "polos"]

enunciado: "Si todos los polos tienen parte real negativa, el sistema es..."
tipo: mc
opciones_explicitas:
  - "Estable"
  - "Inestable"
  - "Marginalmente estable"
  - "Imposible de analizar"
respuesta: "Estable"

explicacion: |
  Cada término de la respuesta se apaga con el tiempo.
```

### 6 — Si algún polo tiene parte real positiva, el sistema es...

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "intermedio"
  tags: ["estabilidad", "polos"]

enunciado: "Si algún polo tiene parte real positiva, el sistema es..."
tipo: mc
opciones_explicitas:
  - "Inestable"
  - "Estable"
  - "Más rápido"
  - "De primer orden"
respuesta: "Inestable"

explicacion: |
  Ese término crece con el tiempo.
```

### 7 — Polos con parte real cero (y ninguno positivo) indican...

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "intermedio"
  tags: ["estabilidad", "polos"]

enunciado: "Polos con parte real cero (y ninguno positivo) indican..."
tipo: mc
opciones_explicitas:
  - "Oscilación sostenida, en el límite de la estabilidad"
  - "Respuesta muy rápida"
  - "Error nulo"
  - "Estabilidad absoluta"
respuesta: "Oscilación sostenida, en el límite de la estabilidad"

explicacion: |
  Es el caso marginal.
```

### 8 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "intermedio"
  tags: ["estabilidad", "polos"]

enunciado: "Al aumentar la ganancia del controlador en un lazo cerrado, lo más probable es que..."
tipo: mc
opciones_explicitas:
  - "El sistema se vuelva más rápido pero menos estable"
  - "Se vuelva más lento"
  - "Siempre sea más estable"
  - "No pase nada"
respuesta: "El sistema se vuelva más rápido pero menos estable"

explicacion: |
  Más allá de un valor crítico puede dejar de ser estable.
```

### 9 — ¿Qué efecto tienen los retardos puros sobre la estabilidad

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "intermedio"
  tags: ["estabilidad", "polos"]

enunciado: "¿Qué efecto tienen los retardos puros sobre la estabilidad?"
tipo: mc
opciones_explicitas:
  - "La empeoran, porque el controlador corrige con información vieja"
  - "La mejoran"
  - "No tienen efecto"
  - "Eliminan el error"
respuesta: "La empeoran, porque el controlador corrige con información vieja"

explicacion: |
  Por ejemplo, el tiempo de una cañería hasta el sensor.
```

### 10 — ¿Para qué sirve el criterio de Routh-Hurwitz

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "avanzado"
  tags: ["estabilidad", "polos"]

enunciado: "¿Para qué sirve el criterio de Routh-Hurwitz?"
tipo: mc
opciones_explicitas:
  - "Para saber cuántos polos tienen parte real positiva sin calcularlos"
  - "Para calcular el sobreimpulso"
  - "Para medir el ruido"
  - "Para sintonizar un PLC"
respuesta: "Para saber cuántos polos tienen parte real positiva sin calcularlos"

explicacion: |
  Usa solo los coeficientes del polinomio característico.
```

### 11 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "avanzado"
  tags: ["estabilidad", "polos"]

enunciado: "Para un polinomio a·s² + b·s + c, ¿cuál es la condición de estabilidad?"
tipo: mc
opciones_explicitas:
  - "Los tres coeficientes tienen el mismo signo"
  - "a debe ser cero"
  - "b debe ser negativo y c positivo"
  - "Solo importa c"
respuesta: "Los tres coeficientes tienen el mismo signo"

explicacion: |
  Para segundo orden alcanza con coeficientes del mismo signo.
```

### 12 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "avanzado"
  tags: ["estabilidad", "polos"]

enunciado: "Si en el polinomio característico falta un coeficiente, el sistema..."
tipo: mc
opciones_explicitas:
  - "No es estable"
  - "Es estable"
  - "Es de primer orden"
  - "Es lineal por definición"
respuesta: "No es estable"

explicacion: |
  Es una condición necesaria que se verifica de entrada.
```

### 13 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "avanzado"
  tags: ["estabilidad", "polos"]

enunciado: "¿Por qué se deja un margen de seguridad respecto del límite de estabilidad?"
tipo: mc
opciones_explicitas:
  - "Porque el modelo no es exacto y la planta cambia con el uso"
  - "Por costumbre"
  - "Para gastar más energía"
  - "Porque lo exige el PLC"
respuesta: "Porque el modelo no es exacto y la planta cambia con el uso"

explicacion: |
  Un sistema que apenas es estable es peligroso.
```

### 14 — Un control inestable puede ser peor que no tener control.

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "basico"
  tags: ["estabilidad", "polos"]

respuesta: verdadero
tipo: vf

enunciado: "Un control inestable puede ser peor que no tener control."

explicacion: |
  Puede disparar el proceso o dañar los equipos.
```

### 15 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "basico"
  tags: ["estabilidad", "polos"]

respuesta: falso
tipo: vf

enunciado: "La estabilidad es una condición secundaria que se revisa después de la rapidez."

explicacion: |
  Es la primera condición de cualquier diseño.
```

### 16 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "basico"
  tags: ["estabilidad", "polos"]

respuesta: verdadero
tipo: vf

enunciado: "Polos más alejados del eje vertical hacia la izquierda hacen que la respuesta se apague más rápido."

explicacion: |
  Son términos que decaen más velozmente.
```

### 17 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "basico"
  tags: ["estabilidad", "polos"]

respuesta: falso
tipo: vf

enunciado: "El criterio de Routh exige calcular todas las raíces del polinomio."

explicacion: |
  Justamente permite evitarlo.
```

### 18 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "intermedio"
  tags: ["estabilidad", "polos"]

tipo: completar
enunciado: "Si algún polo tiene parte real ___ (positiva / negativa), el sistema es inestable."
respuestas_validas:
  - "positiva"

explicacion: |
  El término correspondiente de la respuesta crece.
```

### 19 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "intermedio"
  tags: ["estabilidad", "polos"]

tipo: completar
enunciado: "A partir de cierto valor de ganancia, llamado valor ___ (crítico / mínimo), el lazo deja de ser estable."
respuestas_validas:
  - "crítico"

explicacion: |
  Es el límite de estabilidad.
```

### 20 — Cálculo

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "intermedio"
  tags: ["estabilidad", "polos"]

variables:
  a: random(1, 6)
  b: random(1, 9)
  c: random(1, 9)

respuesta: a * 100 + b * 10 + c
tipo: input
tolerancia_abs: 0

enunciado: "Un sistema tiene polinomio característico {a}·s² + {b}·s + {c}. Si es estable, tipeá el número formado por a, b y c juntos (en ese orden). Pista: los tres coeficientes tienen el mismo signo."

pasos:
  - "a = {a}, b = {b}, c = {c}: los tres son positivos, el sistema es estable"

explicacion: |
  Con los tres coeficientes positivos el sistema de segundo orden es estable.
```

### 21 — Cálculo

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "basico"
  tags: ["estabilidad", "polos"]

variables:
  k: random(2, 20)
  kc: random(25, 60)

respuesta: kc - k
tipo: input
tolerancia_abs: 0

enunciado: "Un lazo es estable hasta una ganancia crítica de {kc}. Si hoy trabaja con ganancia {k}, ¿cuánto margen absoluto de ganancia queda?"

pasos:
  - "Margen = ganancia crítica − ganancia actual"

explicacion: |
  Es la distancia al límite de estabilidad.
```

### 22 — Cálculo

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "avanzado"
  tags: ["estabilidad", "polos"]

variables:
  k: random(2, 20)
  kc: uno_de([20, 25, 40, 50])

respuesta: redondear(kc / k, 1)
tipo: input
tolerancia_abs: 0.1

enunciado: "La ganancia crítica de un lazo es {kc} y el controlador trabaja con {k}. ¿Cuántas veces se podría multiplicar la ganancia actual antes de llegar al límite? (redondeá a un decimal)"

pasos:
  - "Factor = ganancia crítica / ganancia actual"

explicacion: |
  A ese cociente se lo llama margen de ganancia (en veces).
```
