# UX y diseño — Análisis de datos de uso y métricas UX (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Cualitativo

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Un dato cualitativo es, por ejemplo..."
tipo: mc
opciones_explicitas:
  - "Lo que dijo la persona y dónde dudó"
  - "El porcentaje de éxito"
  - "El tiempo en segundos"
respuesta: "Lo que dijo la persona y dónde dudó"

explicacion: |
  Explica el porqué.
```

### 2 — Cuantitativo

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Un dato cuantitativo es, por ejemplo..."
tipo: mc
opciones_explicitas:
  - "Cuántas personas completaron la tarea"
  - "Una cita textual"
  - "Un gesto de duda"
respuesta: "Cuántas personas completaron la tarea"

explicacion: |
  Muestra cuánto y dónde.
```

### 3 — Tasa de éxito

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "basico"
  tags: ["ux"]

variables:
  total: random(8, 20)
  ok: random(3, total)

respuesta: redondear(ok / total * 100, 1)
tipo: input
tolerancia_abs: 0.2

enunciado: "{ok} de {total} participantes completaron una tarea. ¿Cuál es la tasa de éxito, en %? (un decimal)"

pasos:
  - "{ok} / {total} × 100"

explicacion: |
  Se divide los éxitos por el total y se multiplica por 100.
```

### 4 — Tasa de éxito 2

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "basico"
  tags: ["ux"]

variables:
  total: uno_de([5, 8, 10, 20, 25])
  ok: random(1, total)

respuesta: redondear(ok / total * 100, 1)
tipo: input
tolerancia_abs: 0.2

enunciado: "En una prueba, {ok} de {total} personas lograron terminar la tarea. ¿Qué porcentaje es? (un decimal)"

pasos:
  - "{ok} / {total} × 100"

explicacion: |
  Éxito = completaron / total.
```

### 5 — Mediana

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Para el tiempo en tarea conviene la mediana porque..."
tipo: mc
opciones_explicitas:
  - "Unos pocos casos muy lentos distorsionan el promedio"
  - "Es más difícil de calcular"
  - "Siempre es menor"
respuesta: "Unos pocos casos muy lentos distorsionan el promedio"

explicacion: |
  La mediana es robusta.
```

### 6 — Mediana tiempos

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "intermedio"
  tags: ["ux"]

variables:
  a: random(20, 40)
  b: random(41, 60)
  c: random(61, 90)
  d: random(91, 300)
  e: random(301, 600)

respuesta: c
tipo: input
tolerancia_abs: 0

enunciado: "Cinco participantes tardaron {a}, {b}, {c}, {d} y {e} segundos en una tarea (ya ordenados). ¿Cuál es la mediana, en segundos?"

pasos:
  - "La mediana es el valor central"

explicacion: |
  Con cinco datos ordenados, es el tercero.
```

### 7 — SUS

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "basico"
  tags: ["ux"]

enunciado: "SUS es..."
tipo: mc
opciones_explicitas:
  - "Un cuestionario de diez afirmaciones sobre usabilidad"
  - "Una herramienta de dibujo"
  - "Un tipo de prueba A/B"
respuesta: "Un cuestionario de diez afirmaciones sobre usabilidad"

explicacion: |
  Se responde de 1 a 5.
```

### 8 — Rango SUS

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "intermedio"
  tags: ["ux"]

tipo: completar
enunciado: "El resultado del SUS va de 0 a ___."
respuestas_validas:
  - "100"

explicacion: |
  No es un porcentaje.
```

### 9 — SUS porcentaje

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Un SUS de 68 significa que el 68 % de las personas aprobó el producto."

explicacion: |
  No es un porcentaje; se interpreta comparando.
```

### 10 — Promedio SUS

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "El promedio aproximado de muchos estudios con SUS ronda..."
tipo: mc
opciones_explicitas:
  - "68 puntos"
  - "10 puntos"
  - "100 puntos"
respuesta: "68 puntos"

explicacion: |
  Se compara con ese valor y con versiones previas.
```

### 11 — Cálculo SUS

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "avanzado"
  tags: ["ux"]

variables:
  suma: random(10, 40)

respuesta: suma * 2.5
tipo: input
tolerancia_abs: 0.1

enunciado: "Tras restar 1 a las respuestas impares y restar a 5 las pares, los diez valores suman {suma}. ¿Cuál es el puntaje SUS?"

pasos:
  - "SUS = suma × 2,5"

explicacion: |
  El puntaje final se obtiene multiplicando por 2,5.
```

### 12 — Conversión

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "basico"
  tags: ["ux"]

enunciado: "La tasa de conversión es..."
tipo: mc
opciones_explicitas:
  - "La proporción que completa una acción deseada"
  - "El tamaño de la página"
  - "El número de colores"
respuesta: "La proporción que completa una acción deseada"

explicacion: |
  Por ejemplo, registrarse.
```

### 13 — Conversión

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "intermedio"
  tags: ["ux"]

variables:
  visitas: uno_de([200, 400, 500, 1000, 2000])
  compras: random(5, 60)

respuesta: redondear(compras / visitas * 100, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un sitio tuvo {visitas} visitas y {compras} compras. ¿Cuál es la tasa de conversión, en %? (dos decimales)"

pasos:
  - "{compras} / {visitas} × 100"

explicacion: |
  Conversión = acciones / visitas × 100.
```

### 14 — Abandono

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "El abandono en un paso de un flujo indica..."
tipo: mc
opciones_explicitas:
  - "Dónde se pierde gente"
  - "Cuánto cuesta el producto"
  - "Qué color eligió la persona"
respuesta: "Dónde se pierde gente"

explicacion: |
  Pero no explica por qué.
```

### 15 — A/B

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Una prueba A/B consiste en..."
tipo: mc
opciones_explicitas:
  - "Mostrar dos versiones a grupos elegidos al azar y comparar una métrica"
  - "Probar una versión con una sola persona"
  - "Elegir la versión que más le gusta al diseñador"
respuesta: "Mostrar dos versiones a grupos elegidos al azar y comparar una métrica"

explicacion: |
  Mide qué versión rinde más.
```

### 16 — Una cosa a la vez

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "En una prueba A/B conviene cambiar..."
tipo: mc
opciones_explicitas:
  - "Una sola cosa a la vez"
  - "Todo a la vez"
  - "Nada"
respuesta: "Una sola cosa a la vez"

explicacion: |
  Así se sabe qué produjo el efecto.
```

### 17 — Cortar temprano

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "avanzado"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Conviene frenar una prueba A/B apenas una versión parece ganar."

explicacion: |
  Genera falsas conclusiones; hay que dejar correr el tiempo necesario.
```

### 18 — Explica por qué

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Una prueba A/B explica por qué una versión funciona mejor."

explicacion: |
  Solo muestra cuál rinde más; el porqué requiere investigación.
```

### 19 — Hipótesis

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "Antes de un cambio conviene definir..."
tipo: mc
opciones_explicitas:
  - "Qué métrica debería mejorar"
  - "Quién se llevará el crédito"
  - "Cuánto durará la reunión"
respuesta: "Qué métrica debería mejorar"

explicacion: |
  Sin hipótesis cualquier resultado parece una confirmación.
```

### 20 — Priorizar

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Los hallazgos se priorizan por..."
tipo: mc
opciones_explicitas:
  - "Gravedad y frecuencia"
  - "Orden alfabético"
  - "Antigüedad del código"
respuesta: "Gravedad y frecuencia"

explicacion: |
  Luego se formulan acciones concretas.
```

### 21 — Complementarios

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "basico"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Los datos cualitativos y cuantitativos se complementan."

explicacion: |
  Las cifras muestran dónde; las observaciones, por qué.
```

### 22 — Tiempo

```
metadata:
  materia: "diseño"
  tema: "analisis_de_datos_de_uso_y_metricas_ux"
  nivel: "basico"
  tags: ["ux"]

enunciado: "El tiempo en tarea mide..."
tipo: mc
opciones_explicitas:
  - "Cuánto tarda alguien en completarla"
  - "Cuánto pesa la página"
  - "Cuántos colores hay"
respuesta: "Cuánto tarda alguien en completarla"

explicacion: |
  Suele resumirse con la mediana.
```
