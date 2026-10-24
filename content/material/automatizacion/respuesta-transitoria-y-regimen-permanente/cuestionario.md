# Automatizacion — Respuesta transitoria y régimen permanente (cuestionario, 23 preguntas VBLang)

> Tema: `automatizacion/respuesta-transitoria-y-regimen-permanente`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — ¿Qué es la respuesta transitoria

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "basico"
  tags: ["respuesta_transitoria", "control"]

enunciado: "¿Qué es la respuesta transitoria?"
tipo: mc
opciones_explicitas:
  - "El camino que recorre la salida hasta acercarse al nuevo valor"
  - "El valor final de la salida"
  - "El ruido del sensor"
  - "La señal de referencia"
respuesta: "El camino que recorre la salida hasta acercarse al nuevo valor"

explicacion: |
  Es lo que ocurre entre el cambio y el asentamiento.
```

### 2 — ¿Qué es el régimen permanente

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "basico"
  tags: ["respuesta_transitoria", "control"]

enunciado: "¿Qué es el régimen permanente?"
tipo: mc
opciones_explicitas:
  - "El comportamiento una vez que pasó la parte transitoria"
  - "El instante del escalón"
  - "El arranque del proceso"
  - "La falla del sensor"
respuesta: "El comportamiento una vez que pasó la parte transitoria"

explicacion: |
  Es el estado al que se llega cuando todo se asentó.
```

### 3 — El tiempo de subida mide...

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "basico"
  tags: ["respuesta_transitoria", "control"]

enunciado: "El tiempo de subida mide..."
tipo: mc
opciones_explicitas:
  - "Lo que tarda la salida en ir del 10 % al 90 % del valor final"
  - "Lo que tarda en estabilizarse"
  - "El valor máximo alcanzado"
  - "El error final"
respuesta: "Lo que tarda la salida en ir del 10 % al 90 % del valor final"

explicacion: |
  Indica la rapidez inicial.
```

### 4 — El sobreimpulso es...

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "basico"
  tags: ["respuesta_transitoria", "control"]

enunciado: "El sobreimpulso es..."
tipo: mc
opciones_explicitas:
  - "Cuánto se pasa la salida del valor final, en porcentaje"
  - "La demora del sensor"
  - "El error en régimen"
  - "El tiempo de pico"
respuesta: "Cuánto se pasa la salida del valor final, en porcentaje"

explicacion: |
  Se calcula sobre el valor final.
```

### 5 — El tiempo de establecimiento es...

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "intermedio"
  tags: ["respuesta_transitoria", "control"]

enunciado: "El tiempo de establecimiento es..."
tipo: mc
opciones_explicitas:
  - "El tiempo que tarda en entrar y quedarse en una banda (por ejemplo ±2 %) del valor final"
  - "El tiempo del primer cruce por el valor final"
  - "La duración del escalón"
  - "El período de muestreo"
respuesta: "El tiempo que tarda en entrar y quedarse en una banda (por ejemplo ±2 %) del valor final"

explicacion: |
  Mide cuándo se puede considerar asentada la respuesta.
```

### 6 — ¿Qué sistema no presenta sobreimpulso

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "intermedio"
  tags: ["respuesta_transitoria", "control"]

enunciado: "¿Qué sistema no presenta sobreimpulso?"
tipo: mc
opciones_explicitas:
  - "Uno de primer orden"
  - "Uno de segundo orden con poco amortiguamiento"
  - "Uno que oscila"
  - "Ninguno"
respuesta: "Uno de primer orden"

explicacion: |
  El de primer orden se acerca sin pasarse.
```

### 7 — Poco amortiguamiento produce...

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "intermedio"
  tags: ["respuesta_transitoria", "control"]

enunciado: "Poco amortiguamiento produce..."
tipo: mc
opciones_explicitas:
  - "Mucho sobreimpulso y varias oscilaciones"
  - "Respuesta lenta sin oscilar"
  - "Error nulo siempre"
  - "Ninguna oscilación"
respuesta: "Mucho sobreimpulso y varias oscilaciones"

explicacion: |
  Menos amortiguamiento, más oscilación.
```

### 8 — Un exceso de amortiguamiento produce...

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "intermedio"
  tags: ["respuesta_transitoria", "control"]

enunciado: "Un exceso de amortiguamiento produce..."
tipo: mc
opciones_explicitas:
  - "Una respuesta sin oscilar pero lenta"
  - "Mucho sobreimpulso"
  - "Inestabilidad"
  - "Mayor rapidez"
respuesta: "Una respuesta sin oscilar pero lenta"

explicacion: |
  Se evita oscilar a costa de tardar más.
```

### 9 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "intermedio"
  tags: ["respuesta_transitoria", "control"]

enunciado: "Al aumentar la ganancia de un controlador, lo más probable es que..."
tipo: mc
opciones_explicitas:
  - "Baje el tiempo de subida y suba el sobreimpulso"
  - "Aumente el tiempo de subida"
  - "Desaparezca todo error"
  - "No cambie nada"
respuesta: "Baje el tiempo de subida y suba el sobreimpulso"

explicacion: |
  Es el compromiso típico entre rapidez y sobrepaso.
```

### 10 — ¿Cómo se define el error en régimen permanente

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "intermedio"
  tags: ["respuesta_transitoria", "control"]

enunciado: "¿Cómo se define el error en régimen permanente?"
tipo: mc
opciones_explicitas:
  - "Referencia menos salida final"
  - "Salida inicial menos final"
  - "Valor máximo menos valor mínimo"
  - "Tiempo de pico menos subida"
respuesta: "Referencia menos salida final"

explicacion: |
  Mide cuánto falta para llegar a lo pedido.
```

### 11 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "intermedio"
  tags: ["respuesta_transitoria", "control"]

enunciado: "¿Qué acción de control elimina el error en régimen ante un escalón?"
tipo: mc
opciones_explicitas:
  - "La integral"
  - "La derivativa"
  - "Solo la proporcional"
  - "Ninguna"
respuesta: "La integral"

explicacion: |
  El integrador sigue acumulando mientras haya error.
```

### 12 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "avanzado"
  tags: ["respuesta_transitoria", "control"]

enunciado: "Un horno cerámico donde pasarse de temperatura arruina la pieza prioriza..."
tipo: mc
opciones_explicitas:
  - "Bajo sobreimpulso"
  - "Mínimo tiempo de subida a cualquier costo"
  - "Máximo sobreimpulso"
  - "Ignorar el tiempo de establecimiento"
respuesta: "Bajo sobreimpulso"

explicacion: |
  Las especificaciones dependen de la aplicación.
```

### 13 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "avanzado"
  tags: ["respuesta_transitoria", "control"]

enunciado: "Un control solo proporcional suele dejar un error residual porque..."
tipo: mc
opciones_explicitas:
  - "Para mantener la salida hace falta una señal de control, y esa señal exige que haya error"
  - "El sensor siempre falla"
  - "La referencia cambia sola"
  - "La derivada actúa de más"
respuesta: "Para mantener la salida hace falta una señal de control, y esa señal exige que haya error"

explicacion: |
  Sin integral, el error no puede llegar a cero en muchos procesos.
```

### 14 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "basico"
  tags: ["respuesta_transitoria", "control"]

respuesta: verdadero
tipo: vf

enunciado: "El tiempo de pico es el instante en que la salida alcanza su valor máximo."

explicacion: |
  Aparece cuando hay sobrepaso.
```

### 15 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "basico"
  tags: ["respuesta_transitoria", "control"]

respuesta: falso
tipo: vf

enunciado: "Un buen diseño suele lograr a la vez el menor tiempo de subida y cero sobreimpulso sin ningún compromiso."

explicacion: |
  Casi siempre hay que negociar entre rapidez y sobrepaso.
```

### 16 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "basico"
  tags: ["respuesta_transitoria", "control"]

respuesta: verdadero
tipo: vf

enunciado: "La banda de ±2 % o ±5 % se usa para definir el tiempo de establecimiento."

explicacion: |
  Son valores habituales.
```

### 17 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "basico"
  tags: ["respuesta_transitoria", "control"]

respuesta: verdadero
tipo: vf

enunciado: "Una perturbación constante puede dejar un error en régimen si el controlador no tiene acción integral."

explicacion: |
  Sin integral, el error puede persistir.
```

### 18 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "intermedio"
  tags: ["respuesta_transitoria", "control"]

tipo: completar
enunciado: "El error en régimen permanente es la diferencia entre la referencia y la salida ___ (inicial / final)."
respuestas_validas:
  - "final"

explicacion: |
  error = referencia − salida final.
```

### 19 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "intermedio"
  tags: ["respuesta_transitoria", "control"]

tipo: completar
enunciado: "Para eliminar el error en régimen ante un escalón se agrega acción ___ (integral / derivativa)."
respuestas_validas:
  - "integral"

explicacion: |
  El integrador acumula el error hasta anularlo.
```

### 20 — Cálculo

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "intermedio"
  tags: ["respuesta_transitoria", "control"]

variables:
  yf: random(50, 120)
  extra: random(5, 25)

respuesta: redondear(extra / yf * 100, 1)
tipo: input
tolerancia_abs: 0.2

enunciado: "La salida se estabiliza en {yf} y alcanzó un máximo de {yf + extra}. ¿Cuál es el sobreimpulso, en %? (redondeá a un decimal)"

pasos:
  - "Sobreimpulso = (máximo − final) / final × 100"

explicacion: |
  Se calcula sobre el valor final.
```

### 21 — Cálculo

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "basico"
  tags: ["respuesta_transitoria", "control"]

variables:
  ref: random(80, 150)
  err: random(1, 10)

respuesta: err
tipo: input
tolerancia_abs: 0

enunciado: "Se pide {ref} y la salida se estabiliza en {ref - err}. ¿Cuál es el error en régimen permanente?"

pasos:
  - "Error = referencia − salida final"

explicacion: |
  Es la diferencia entre lo pedido y lo logrado.
```

### 22 — Cálculo

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "intermedio"
  tags: ["respuesta_transitoria", "control"]

variables:
  ref: random(50, 200)
  err: random(2, 20)

respuesta: redondear(err / ref * 100, 1)
tipo: input
tolerancia_abs: 0.2

enunciado: "Con referencia {ref} y error en régimen de {err}, ¿cuál es el error expresado como % de la referencia? (redondeá a un decimal)"

pasos:
  - "Error % = error / referencia × 100"

explicacion: |
  Se suele expresar relativo a la referencia.
```

### 23 — Cálculo

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "basico"
  tags: ["respuesta_transitoria", "control"]

variables:
  t10: random(1, 4)
  t90: random(5, 12)

respuesta: t90 - t10
tipo: input
tolerancia_abs: 0

enunciado: "La salida alcanza el 10 % del valor final a los {t10} s y el 90 % a los {t90} s. ¿Cuál es el tiempo de subida, en segundos?"

pasos:
  - "Tiempo de subida = t(90 %) − t(10 %)"

explicacion: |
  Es la diferencia entre ambos instantes.
```
